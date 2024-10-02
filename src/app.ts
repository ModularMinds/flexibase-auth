import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { rootRouter } from "./routers";
import { initialiseSqliteDatabase } from "./config";

config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", rootRouter);

initialiseSqliteDatabase()

app.listen(process.env.FLEXIBASE_AUTH_EXPOSE_PORT, () => {
  console.log(
    `FlexiBase-Auth server started successfully on port ${process.env.FLEXIBASE_AUTH_EXPOSE_PORT}`
  );
});
