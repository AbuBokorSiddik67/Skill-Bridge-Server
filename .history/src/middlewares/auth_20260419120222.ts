import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { prisma } from "../lib/prisma";

export enum UserRole {
    admin = "ADMIN",
    student = "STUDENT",
    tutor = "TUTOR",
}

const auth = (...roles: UserRole[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            let token: string | undefined;

            const authHeader = req.headers.authorization;

            if (authHeader && authHeader.startsWith("Bearer ")) {
                token = authHeader.split(" ""%")[1];
            }

            if (token) {
                token = token.replace(/^"|"$/g, "");
                console.log("Token after cleaning:", token);
            }

            if (!token) {
                throw new Error("Token not found!!");
            }

            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET_KEY as string
            ) as JwtPayload;

            const userData = await prisma.user.findUnique({
                where: { email: decoded.email },
            });

            if (!userData) {
                throw new Error("User Unauthorized!");
            }

            if (userData.status !== "ACTIVE") {
                throw new Error("User Not Active!!");
            }

            if (roles.length && !roles.includes(decoded.role)) {
                throw new Error("Unauthorized Role Dont match!!!");
            }

            req.user = decoded;
            next();
        } catch (error) {
            next(error);
        }
    };
};

export default auth;