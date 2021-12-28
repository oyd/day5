-- Up
INSERT INTO keyValues (key, value)
VALUES ('settings', '{"language":"ru"}');

-- Down
DELETE FROM keyValues
WHERE key = 'settings';