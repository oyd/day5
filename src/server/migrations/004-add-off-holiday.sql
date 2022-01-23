-- Up
ALTER TABLE "days"
	ADD "off" INTEGER;
ALTER TABLE "days"
	ADD "holidays" TEXT;
INSERT INTO "days"("day","off","holidays") VALUES ('2022-01-01',1,'["NYD"]');
INSERT INTO "days"("day","off","holidays") VALUES ('2022-01-17',1,'["MLK"]');
INSERT INTO "days"("day","off","holidays") VALUES ('2022-02-21',1,'["PRS"]');
INSERT INTO "days"("day","off","holidays") VALUES ('2022-01-24',1,'["VAC"]');
INSERT INTO "days"("day","off","holidays") VALUES ('2022-01-25',1,'["VAC"]');
INSERT INTO "days"("day","off","holidays") VALUES ('2022-01-26',1,'["VAC"]');

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
