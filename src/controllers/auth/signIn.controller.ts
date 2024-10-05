import { Request, Response } from "express";
import { db } from "../../config";
import { compare } from "bcrypt";
import { RowDataPacket } from "mysql2";
import { sign } from "jsonwebtoken";

interface User extends RowDataPacket {
  id: string;
  email: string;
  password: string;
}

export const signInController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    db.query<User[]>(
      "SELECT * FROM users WHERE email=?",
      [email],
      async (err, result) => {
        if (err) return res.json({ err: err.message, isSuccess: false });

        const isPasswordMatch = await compare(password, result[0]?.password);

        if (!isPasswordMatch)
          return res.json({ err: "invalid credentials", isSuccess: false });

        const token = sign(
          { id: result[0].id },
          process.env.FLEXIBASE_AUTH_SECRET_KEY!
        );

        res.json({
          message: "login success",
          token,
          isSuccess: true,
        });
      }
    );
  } catch (err) {
    res.json({ err, isSuccess: false });
  }
};
