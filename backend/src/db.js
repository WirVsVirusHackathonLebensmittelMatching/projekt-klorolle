const fs = require('fs');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'db.json');
const dbSeedPath = path.join(__dirname, '..', 'data', 'db-seed.json');

if (process.env.NODE_ENV !== 'production') {
  try {
    fs.statSync(dbPath);
  } catch (e) {
    // not database found copy sample data
    fs.copyFileSync(dbSeedPath, dbPath);
  }
}

const adapter = new FileSync(dbPath);
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({
  shops: [],
  goods: [],
  timeslots: [],
}).write();

db.read();

module.exports = db;
