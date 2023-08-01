const sqlite3 = require('sqlite3').verbose();

const DB_NAME = 'ces.db';

const db = new sqlite3.Database(DB_NAME, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(`Connected to the ${DB_NAME} database.`);
  }
});

const createTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL
    );
  `;

  db.run(sql, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Table created successfully');
    }
  });
};

createTable();

module.exports = db;