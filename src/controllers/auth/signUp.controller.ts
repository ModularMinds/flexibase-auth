import { Request, Response } from "express";
import { db } from "../../config";

export const signUpController = (req: Request, res: Response) => {
  console.log("/api/auth/sign-up");

  const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
  db.run(sql, [...Object.values(req.body)], (err) => {
    if (err) return res.json({ error: err.message });
    res.json({
      message: "user created",
    });
  });
};
