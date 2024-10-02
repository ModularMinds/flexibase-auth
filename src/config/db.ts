import sqlite3 from "sqlite3";
import { join } from 'path'

export const db = new sqlite3.Database(join(__dirname, "..", "./data/flexibase-auth.db"));

export const initialiseSqliteDatabase = () => {
  db.run(
    `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL,
        password TEXT
    )`,
    (err) => {
      if (err)
        console.log("Error occurred while creating table users: ", err.message);
    }
  );
};
