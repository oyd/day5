const DB = require('better-sqlite3-helper');

DB({
    path: './dist/day.db',
    readonly: false, // read only
    fileMustExist: false, // throw error if database not exists
    WAL: true, // automatically enable 'PRAGMA journal_mode = WAL'
    migrate: {
        // disable completely by setting `migrate: false`
        force: false, // set to 'last' to automatically reapply the last migration-file
        table: 'migrations', // name of the database table that is used to keep track
        migrationsPath: './src/server/migrations', // path of the migration-files
    },
});

let migrations = DB().query('SELECT * FROM migrations');
migrations.map(({ id, up }) => console.log(`Migration: ${id}\n${up}\n`));
