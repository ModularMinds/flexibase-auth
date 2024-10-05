import { Request, Response } from "express";

export const verifyUserController = (req: Request, res: Response) => {
  try {
    const { id } = req.user;

    res.json({
      isSuccess: true,
      id,
    });
  } catch (err) {
    res.json({ err, isSucess: false });
  }
};
