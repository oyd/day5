-- Up
CREATE TABLE "days" (
	"day"	TEXT NOT NULL UNIQUE,
	"pomodoros"	INTEGER,
	PRIMARY KEY("day")
);

-- Down
DROP TABLE IF EXISTS "days";