"""Standard-library-only validation primitives; no writes or network calls."""
from datetime import datetime
import hashlib
import json
from pathlib import Path
import re
from urllib.parse import urlsplit, urlunsplit


class ConfigError(ValueError):
    pass


def load_json(path):
    def constant(_value):
        raise ConfigError("non-finite JSON numbers are not supported")
    def pairs(items):
        result = {}
        for key, value in items:
            if key in result:
                raise ConfigError("duplicate JSON key")
            result[key] = value
        return result
    try:
        path = Path(path)
        if path.stat().st_size > 4 * 1024 * 1024:
            raise ConfigError("configuration exceeds 4 MiB")
        return json.loads(path.read_text(encoding="utf-8-sig"), object_pairs_hook=pairs, parse_constant=constant)
    except (OSError, UnicodeError, json.JSONDecodeError) as exc:
        raise ConfigError("cannot read a valid UTF-8 JSON configuration") from exc


def keys(value, required, optional=()):
    if not isinstance(value, dict):
        raise ConfigError("expected an object")
    if set(value) - set(required) - set(optional):
        raise ConfigError("unknown configuration field")
    if set(required) - set(value):
        raise ConfigError("missing required configuration field")


def text(value, limit=256):
    if not isinstance(value, str) or not value.strip() or len(value) > limit or any(ord(c) < 32 for c in value):
        raise ConfigError("expected non-empty text without control characters")
    return value


def identifier(value):
    if not isinstance(value, str) or not re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9._-]{0,79}", value):
        raise ConfigError("invalid identifier")
    return value


def string_list(value, validate=identifier):
    if not isinstance(value, list):
        raise ConfigError("expected a list")
    result = [validate(item) for item in value]
    if len(set(result)) != len(result):
        raise ConfigError("duplicate list item")
    return result


def digest(value):
    if not isinstance(value, str) or not re.fullmatch(r"[0-9a-fA-F]{64}", value):
        raise ConfigError("expected a SHA-256 digest")
    return value.lower()


def revision(value):
    keys(value, ("type", "value"))
    kind, token = value["type"], value["value"]
    if kind == "git":
        if not isinstance(token, str) or not re.fullmatch(r"(?:[0-9a-fA-F]{40}|[0-9a-fA-F]{64})", token):
            raise ConfigError("expected a full Git object ID")
        token = token.lower()
    elif kind == "snapshot-sha256":
        token = digest(token)
    else:
        raise ConfigError("unsupported revision type")
    if not token.strip("0"):
        raise ConfigError("zero placeholder is not a source revision")
    return kind, token


def observed_time(value):
    try:
        stamp = datetime.fromisoformat(text(value).replace("Z", "+00:00"))
        if stamp.tzinfo is None or stamp.utcoffset() is None:
            raise ValueError
    except (ValueError, TypeError) as exc:
        raise ConfigError("observed_at requires an ISO 8601 time with timezone") from exc
    return stamp


def bounded_int(value, minimum, maximum):
    if type(value) is not int or not minimum <= value <= maximum:
        raise ConfigError("integer is outside the permitted range")
    return value


def relative_file(root, value):
    value = text(value, 4096).replace("\\", "/")
    if ":" in value or value.startswith("/") or any(p in ("", ".", "..") for p in value.split("/")):
        raise ConfigError("file path must be a clean relative path")
    root = Path(root).resolve()
    path = (root / value).resolve()
    if not path.is_relative_to(root):
        raise ConfigError("resolved file path escapes its root")
    return path


def sha256_file(path):
    result = hashlib.sha256()
    with Path(path).open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            result.update(chunk)
    return result.hexdigest()


def https_url(value):
    value = text(value, 8192)
    try:
        parsed = urlsplit(value)
        if not value.isascii() or parsed.scheme != "https" or not parsed.hostname or parsed.username is not None or parsed.password is not None:
            raise ValueError
        parsed.port
    except ValueError as exc:
        raise ConfigError("expected an HTTPS URL without credentials; encode non-ASCII URLs") from exc
    return value


def redact_url(value):
    parsed = urlsplit(value)
    return urlunsplit((parsed.scheme, parsed.netloc, parsed.path, "[redacted]" if parsed.query else "", ""))
