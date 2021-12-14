const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'www')));

app.get('/day', (req, res) => res.send('Have a good day!'));

app.listen(9000, () => console.log('Day 5 is listening on port 9000!'));