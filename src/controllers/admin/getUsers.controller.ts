import { Request, Response } from "express";
import { db } from "../../config";

export const getUsersController = (_: Request, res: Response) => {
  try {
    db.query("SELECT id, email FROM users", [], (err, result) => {
      if (err) return res.json({ err: err.message, isSuccess: false });
      return res.json({ isSuccess: true, users: result });
    });
  } catch (err) {
    res.json({ err, isSuccess: false });
  }
};
