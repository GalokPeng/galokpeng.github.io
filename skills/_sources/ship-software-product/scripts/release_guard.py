"""Validate a release evidence projection and local final bytes. No remote access.

Exit 0: declared requirements and local files pass; 1: checks fail;
2: invalid input. This cannot authenticate evidence or authorize publishing.
"""
import argparse
import json
from pathlib import Path
import sys

from lifecycle_common import (ConfigError, bounded_int, digest, https_url, identifier,
    keys, load_json, observed_time, relative_file, revision, sha256_file, string_list, text)


def audit(document, artifact_root, evidence_root):
    keys(document, ("schema_version", "product_id", "version", "channel", "components", "requirements", "artifacts", "gates"))
    if type(document["schema_version"]) is not int or document["schema_version"] != 1:
        raise ConfigError("unsupported schema_version")
    product = identifier(document["product_id"])
    version = text(document["version"], 96)
    channel = identifier(document["channel"])
    artifact_root, evidence_root = Path(artifact_root), Path(evidence_root)
    if not artifact_root.is_dir() or not evidence_root.is_dir():
        raise ConfigError("artifact and evidence roots must be directories")
    raw_components = document["components"]
    if not isinstance(raw_components, dict) or not raw_components:
        raise ConfigError("components must be a non-empty object")
    components = {}
    for name, item in raw_components.items():
        identifier(name)
        keys(item, ("revision",), ("repository", "version"))
        if item.get("repository") is not None:
            text(item["repository"], 2048)
        if "version" in item:
            text(item["version"], 96)
        components[name] = revision(item["revision"])
    if not isinstance(document["artifacts"], list):
        raise ConfigError("artifacts must be a list")
    artifacts, paths, identities, issues, verified = {}, set(), set(), [], []
    for item in document["artifacts"]:
        keys(item, ("id", "component", "path", "size_bytes", "sha256"), ("platform", "architecture", "kind", "url", "version"))
        name, component = identifier(item["id"]), identifier(item["component"])
        if name in artifacts or component not in components:
            raise ConfigError("duplicate artifact or unknown artifact component")
        size = bounded_int(item["size_bytes"], 1, 2**63-1)
        expected = digest(item["sha256"])
        path = relative_file(artifact_root, item["path"])
        path_key = str(path).casefold()
        if path_key in paths:
            raise ConfigError("multiple artifacts resolve to the same file")
        paths.add(path_key)
        if item.get("url") is not None:
            https_url(item["url"])
        for field in ("platform", "architecture", "kind", "version"):
            if field in item:
                text(item[field], 96)
        artifacts[name] = item
        try:
            if not path.is_file():
                issues.append({"id": name, "reason": "artifact_missing"})
            else:
                stat = path.stat()
                identity = stat.st_dev, stat.st_ino
                if stat.st_ino and identity in identities:
                    raise ConfigError("multiple artifacts share one file identity")
                identities.add(identity)
                if stat.st_size != size:
                    issues.append({"id": name, "reason": "artifact_size_mismatch"})
                elif sha256_file(path) != expected:
                    issues.append({"id": name, "reason": "artifact_sha256_mismatch"})
                else:
                    verified.append(name)
        except OSError:
            issues.append({"id": name, "reason": "artifact_unreadable"})
    requirements = {}
    if not isinstance(document["requirements"], list) or not document["requirements"]:
        raise ConfigError("at least one scoped requirement is needed")
    for item in document["requirements"]:
        keys(item, ("id", "components", "artifact_ids", "allow_na"))
        name = identifier(item["id"])
        subjects = string_list(item["components"])
        artifact_ids = string_list(item["artifact_ids"])
        if name in requirements or type(item["allow_na"]) is not bool:
            raise ConfigError("duplicate requirement or invalid allow_na")
        if set(subjects)-components.keys() or set(artifact_ids)-artifacts.keys():
            raise ConfigError("requirement references an unknown subject or artifact")
        requirements[name] = item
    gates = {}
    if not isinstance(document["gates"], list):
        raise ConfigError("gates must be a list")
    for item in document["gates"]:
        keys(item, ("id", "status"), ("reason", "subjects", "artifact_ids", "observed_at", "evidence"))
        name = identifier(item["id"])
        if name in gates or item["status"] not in ("pass", "fail", "pending", "not_applicable"):
            raise ConfigError("duplicate gate or invalid status")
        if "reason" in item:
            text(item["reason"], 4096)
        gates[name] = item
        if item["status"] != "pass":
            continue
        for field in ("observed_at", "subjects", "artifact_ids", "evidence"):
            if field not in item:
                raise ConfigError("pass gate lacks provenance or evidence")
        observed_time(item["observed_at"])
        if not isinstance(item["subjects"], list) or not item["subjects"]:
            raise ConfigError("pass gate needs at least one source subject")
        subjects = set()
        for subject in item["subjects"]:
            keys(subject, ("component", "revision"))
            component = identifier(subject["component"])
            if component in subjects or component not in components:
                raise ConfigError("duplicate or unknown evidence component")
            subjects.add(component)
            if revision(subject["revision"]) != components[component]:
                issues.append({"id": name, "reason": "gate_revision_mismatch", "component": component})
        artifact_ids = string_list(item["artifact_ids"])
        if set(artifact_ids)-artifacts.keys():
            raise ConfigError("gate references an unknown artifact")
        evidence = item["evidence"]
        if not isinstance(evidence, list) or not evidence:
            raise ConfigError("pass gate needs evidence")
        for proof in evidence:
            if not isinstance(proof, dict):
                raise ConfigError("invalid evidence")
            if proof.get("kind") == "file":
                keys(proof, ("kind", "path"), ("sha256", "description"))
                path = relative_file(evidence_root, proof["path"])
                expected_proof = digest(proof["sha256"]) if "sha256" in proof else None
                try:
                    if not path.is_file():
                        issues.append({"id": name, "reason": "evidence_file_missing"})
                    elif expected_proof and sha256_file(path) != expected_proof:
                        issues.append({"id": name, "reason": "evidence_file_sha256_mismatch"})
                except OSError:
                    issues.append({"id": name, "reason": "evidence_file_unreadable"})
            elif proof.get("kind") == "url":
                keys(proof, ("kind", "url"), ("description",))
                https_url(proof["url"])
            else:
                raise ConfigError("unsupported evidence kind")
            if "description" in proof:
                text(proof["description"], 2048)
        requirement = requirements.get(name)
        if requirement:
            if set(requirement["components"])-subjects:
                issues.append({"id": name, "reason": "required_source_subject_missing"})
            if set(requirement["artifact_ids"])-set(artifact_ids):
                issues.append({"id": name, "reason": "required_artifact_subject_missing"})
    for name, requirement in requirements.items():
        item = gates.get(name)
        if item is None:
            issues.append({"id": name, "reason": "required_gate_missing"})
        elif item["status"] == "not_applicable":
            if not requirement["allow_na"] or not item.get("reason", "").strip():
                issues.append({"id": name, "reason": "not_applicable_unjustified"})
        elif item["status"] != "pass":
            issues.append({"id": name, "reason": "required_gate_"+item["status"]})
    return {"ok": not issues, "scope": "local bytes and declared evidence only; not authorization or remote verification",
            "product_id": product, "version": version, "channel": channel,
            "verified_artifacts": verified, "required_gates": list(requirements),
            "additional_gate_states": {k:v["status"] for k,v in gates.items() if k not in requirements}, "issues": issues}


def main(argv=None):
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--manifest", type=Path, required=True)
    parser.add_argument("--artifact-root", type=Path, required=True)
    parser.add_argument("--evidence-root", type=Path)
    args = parser.parse_args(argv)
    try:
        result = audit(load_json(args.manifest), args.artifact_root, args.evidence_root or args.manifest.parent)
        code = 0 if result["ok"] else 1
    except (ConfigError, OSError) as exc:
        result, code = {"ok": False, "error": str(exc), "kind": "input_error"}, 2
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return code


if __name__ == "__main__":
    sys.exit(main())
