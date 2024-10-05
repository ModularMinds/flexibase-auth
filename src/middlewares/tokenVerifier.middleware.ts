import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload;
    }
  }
}

export const tokenVerifier = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader){
      return res.json({
        err: "authorization token was not provided",
        isSuccess: false,
      });
      
    }

    const token = authHeader!.split(" ")[1];

    req.user = verify(
      token,
      process.env.FLEXIBASE_AUTH_SECRET_KEY!
    ) as JwtPayload;

    next();
  } catch (err) {
    return res.json({ isSucess: false, err });
  }
};
