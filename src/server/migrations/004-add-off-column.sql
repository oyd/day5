-- Up
ALTER TABLE "days"
	ADD "off" TEXT;
INSERT INTO "days"("day","off") VALUES ('2022-01-01','["NYD"]');
INSERT INTO "days"("day","off") VALUES ('2022-01-17','["MLK"]');
INSERT INTO "days"("day","off") VALUES ('2022-02-21','["PRS"]');

-- Down
PRAGMA foreign_keys=off;
CREATE TABLE "days2" (
	"day"	TEXT NOT NULL UNIQUE,
	"pomodoros"	INTEGER,
	PRIMARY KEY("day")
);
INSERT INTO "days2" ("day","pomodoros") SELECT "day","pomodoros" FROM "days"
DROP TABLE "days"
ALTER TABLE "days2" RENAME TO "days"
PRAGMA foreign_keys = on;
