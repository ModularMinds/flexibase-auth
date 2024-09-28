import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { rootRouter } from "./routers";

config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", rootRouter);

app.listen(process.env.FLEXIBASE_AUTH_EXPOST_PORT, () => {
  console.log(
    `FlexiBase-Auth server started successfully on port ${process.env.FLEXIBASE_AUTH_EXPOST_PORT}`
  );
});
