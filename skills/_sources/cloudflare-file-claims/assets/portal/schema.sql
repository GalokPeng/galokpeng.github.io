PRAGMA foreign_keys = ON;
CREATE TABLE IF NOT EXISTS codes (
  id TEXT PRIMARY KEY, code_hash TEXT NOT NULL UNIQUE, note TEXT NOT NULL,
  created INTEGER NOT NULL, claimed INTEGER, owner TEXT
);
CREATE INDEX IF NOT EXISTS codes_recent ON codes(created DESC);
CREATE INDEX IF NOT EXISTS codes_owner ON codes(owner, claimed DESC);
CREATE TABLE IF NOT EXISTS grants (
  code_id TEXT NOT NULL REFERENCES codes(id), file_id TEXT NOT NULL,
  cap INTEGER NOT NULL CHECK(cap BETWEEN 1 AND 999), used INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (code_id,file_id), CHECK(used BETWEEN 0 AND cap)
);
CREATE TABLE IF NOT EXISTS attempts (
  id TEXT PRIMARY KEY, code_id TEXT NOT NULL, file_id TEXT NOT NULL, owner TEXT NOT NULL,
  expires INTEGER NOT NULL, state TEXT NOT NULL DEFAULT 'ready', cursor INTEGER NOT NULL DEFAULT 0,
  lease TEXT, lease_until INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY(code_id,file_id) REFERENCES grants(code_id,file_id)
);
CREATE INDEX IF NOT EXISTS attempts_expiry ON attempts(expires);
CREATE TRIGGER IF NOT EXISTS charge_once BEFORE UPDATE OF state ON attempts
WHEN OLD.state='ready' AND NEW.state='sending'
BEGIN
  SELECT CASE WHEN NOT EXISTS (
    SELECT 1 FROM grants WHERE code_id=OLD.code_id AND file_id=OLD.file_id AND used<cap
  ) THEN RAISE(ABORT,'quota_exhausted') END;
  UPDATE grants SET used=used+1 WHERE code_id=OLD.code_id AND file_id=OLD.file_id;
END;
