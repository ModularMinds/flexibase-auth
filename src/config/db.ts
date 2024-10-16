import { createConnection } from "mysql2";

export const db = createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_EXPOSE_PORT)
});
