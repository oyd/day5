const express = require('express');
const path = require('path');
const DB = require('better-sqlite3-helper');

DB({
    path: 'day.db',
    readonly: false, // read only
    fileMustExist: true, // throw error if database not exists
    WAL: true, // automatically enable 'PRAGMA journal_mode = WAL'
    migrate: false,
});

const app = express();
app.use(express.static(path.join(__dirname, 'www')));
app.get('/api/version', (req, res) => {
    let row = DB().queryFirstRow('SELECT * FROM keyValues WHERE key=?', 'version');
    res.send(JSON.stringify(row));
});
app.listen(9000, () => console.log('Day 5 is listening on port 9000!'));
