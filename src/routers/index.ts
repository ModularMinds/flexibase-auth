import { Router } from "express";

import { authRouter } from "./auth.routes";
import { adminRouter } from "./admin.routes";
import { adminAuthenticator } from "../middlewares";

export const rootRouter = Router();

rootRouter.use("/admin", adminRouter);
rootRouter.use("/auth", adminAuthenticator, authRouter);