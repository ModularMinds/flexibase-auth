import { createConnection } from "mysql2";

export const db = createConnection({
  host: "127.0.0.1",
  user: "tanmay",
  password: "tanmay@user1",
  database: "flexibase",
  
});
