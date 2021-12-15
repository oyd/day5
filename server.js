const express = require('express');
const path = require('path');
const loki = require("lokijs");

var db = new loki(path.join(__dirname, 'db.json'), {
    autoload: true,
    autoloadCallback : databaseInitialize,
    autosave: true, 
    autosaveInterval: 4000
});

// implement the autoloadback referenced in loki constructor
function databaseInitialize() {
  var settings = db.getCollection("settings");
  if (settings === null) {
    settings = db.addCollection("settings", { "unique" : ["key"] });
  }
  
  // kick off any program logic or start listening to external events
  const app = express();
  app.use(express.static(path.join(__dirname, 'www')));
  app.get('/day', (req, res) => {
    var version = settings.findOne({'key': 'version'});
    version.value += 1;
    settings.update(version);
    res.send(`Have a good day! Welcome to version ${version.value}!`);
  });
  app.listen(9000, () => console.log('Day 5 is listening on port 9000!'));
  
}

