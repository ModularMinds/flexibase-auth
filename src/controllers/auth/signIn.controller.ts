import { Request, Response } from "express";

export const signInController = (req: Request, res: Response) => {
  console.log("/api/auth/sign-in");

  res.json({});
};
