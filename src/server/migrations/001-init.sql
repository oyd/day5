-- Up
CREATE TABLE "keyValues" (
	"key"	TEXT NOT NULL UNIQUE,
	"value"	TEXT,
	PRIMARY KEY("key")
);

-- Down
DROP TABLE IF EXISTS "keyValues";