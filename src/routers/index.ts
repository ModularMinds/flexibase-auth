import { Router } from "express";

import { authRouter } from "./auth.router";
import { adminRouter } from "./admin.router";
import { adminAuthenticator } from "../middlewares";

export const rootRouter = Router();

rootRouter.use("/admin", adminRouter);
rootRouter.use("/auth", adminAuthenticator, authRouter);