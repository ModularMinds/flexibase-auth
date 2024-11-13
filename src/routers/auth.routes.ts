import { Router } from "express";
import {
  signInController,
  signUpController,
  verifyUserController,
} from "../controllers";
import { passwordHasher, tokenVerifier } from "../middlewares";

export const authRouter = Router();

authRouter.route("/sign-up").post(passwordHasher, signUpController);
authRouter.route("/sign-in").post(signInController);
authRouter.route("/verify-user").get(tokenVerifier, verifyUserController);
