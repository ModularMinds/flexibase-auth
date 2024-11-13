import { Router } from "express";
import { getUsersController } from "../controllers";

export const adminRouter = Router();

adminRouter.route("/get-users").get(getUsersController);
