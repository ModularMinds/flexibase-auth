import { createConnection } from "mysql2";

export const db = createConnection({
  host: process.env.FLEXIBASE_DB_HOST,
  database: process.env.FLEXIBASE_AUTH_DB,
});
