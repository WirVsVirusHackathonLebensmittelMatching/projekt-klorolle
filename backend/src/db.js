const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'db.json');

const adapter = new FileSync(dbPath);
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
// db.defaults({
//   grades: [],
//   auth: {
//     token: null,
//     asi: null,
//   },
// }).write();

db.read();

module.exports = db;
