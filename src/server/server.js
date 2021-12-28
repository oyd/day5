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
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(express.static(path.join(__dirname, 'www')));

const port = process.env.PORT || 9000; // set our port

// Routes

let router = express.Router();

// Routes /api/settings

function getSettings() {
    return DB().queryFirstRow('SELECT * FROM keyValues WHERE key=?', 'settings');
}

router
    .route('/settings')
    .get(function (req, res) {
        res.send(getSettings().value);
    })
    .put(function (req, res) {
        const oldSettings = JSON.parse(getSettings().value);
        const newSettings = { ...oldSettings, ...req.body };
        const newSettingsStr = JSON.stringify(newSettings);
        DB().update('keyValues', { value: newSettingsStr }, { key: 'settings' });
        console.log(newSettingsStr);
        res.send(newSettingsStr);
    });

app.use('/api', router);

app.listen(port, () => console.log(`Day 5 is listening on port ${port}!`));
