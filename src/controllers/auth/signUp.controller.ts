import { Request, Response } from "express";
import { db } from "../../config";
import { v4 as uuidv4 } from "uuid";
import { sign } from "jsonwebtoken";

export const signUpController = async (req: Request, res: Response) => {
  try {
    const id = uuidv4();

    db.query(
      "INSERT INTO users VALUES (?, ?, ?)",
      [id, req.body.email, req.body.password],
      (err) => {
        if (err) return res.json({ err: err.message, isSuccess: false });

        const token = sign({ id }, process.env.FLEXIBASE_AUTH_SECRET_KEY!);

        return res.json({
          message: "user created successfully",
          isSuccess: true,
          token,
        });
      }
    );
  } catch (err) {
    return res.json({ err, isSuccess: false });
  }
};
