import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { rootRouter } from "./routers";
import { db } from "./config";
import { apiCallLogger } from "./middlewares";

config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(apiCallLogger)

app.use("/api", rootRouter);

db.connect((err) => {
  if (err) console.log("Error connecting to MySQL:", JSON.stringify(err, null, 1));
  else console.log("Connected to MySQL");

  db.query(
    `
    CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(100) PRIMARY KEY,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL
    )`,
    (err) => {
      if (err)
        console.log(
          "Error occurred while creating table users: ",
          err.message
        );

      app.listen(process.env.FLEXIBASE_AUTH_EXPOSE_PORT, () => {
        console.log(
          `FlexiBase-Auth server started successfully on port ${process.env.FLEXIBASE_AUTH_EXPOSE_PORT}`
        );
      });
    }
  );
});
