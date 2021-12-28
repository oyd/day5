-- Up
INSERT INTO keyValues (key, value)
VALUES ('version', '5.0.0');

-- Down
DELETE FROM keyValues
WHERE key = 'version';