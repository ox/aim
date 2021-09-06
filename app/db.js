import sqlite3 from 'sqlite3';
sqlite3.verbose();

import { open } from 'sqlite';

// you would have to import / invoke this in another file
export async function openDb () {
  const db = await open({
    filename: './database.db',
    driver: sqlite3.cached.Database
  });

  // check that all of the tables exist
  const tables = await db.all(`
    SELECT 
      name
    FROM 
        sqlite_master
    WHERE 
        type ='table' AND
        name NOT LIKE 'sqlite_%';
  `);

  const requiredTables = {
    credentials: `
      CREATE TABLE credentials (
        email TEXT,
        domain TEXT,
        token TEXT,
        cookie TEXT
      );
    `,
    workspaces: `
      CREATE TABLE workspaces (
        id TEXT,
        name TEXT,
        domain TEXT
      );
    `
  };

  const existingTableNames = tables.map(({name}) => name);

  Object.entries(requiredTables).forEach(async ([tableName, createCmd]) => {
    if (!existingTableNames.includes(tableName)) {
      console.log('DB missing table', tableName, 'creating...');
      try {
        await db.exec(createCmd);
      } catch (e) {
        console.error(`Could not create table ${tableName}, Encountered an error:`, e.message);
        process.exit(1);
      }
    }
  });

  return db;
}

