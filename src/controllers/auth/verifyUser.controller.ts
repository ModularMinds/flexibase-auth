import { Request, Response } from "express";

export const verifyUserController = (req: Request, res: Response) => {
  try {
    const { id } = req.user;

    return res.json({
      isSuccess: true,
      id,
    });
  } catch (err) {
    return res.json({ err, isSucess: false });
  }
};
