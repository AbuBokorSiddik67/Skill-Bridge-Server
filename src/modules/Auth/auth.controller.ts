import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AuthService.createUser(req.body);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "User creation failed",
            error: error.message,
        });
    }
}

const logInUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AuthService.logInUser(req.body);
        res.cookie("token", result.token, {
            secure: false,
            httpOnly: true,
            sameSite: "strict",
        });
        res.status(200).json({
            success: true,
            message: "Login successful",
            data: result,
        });
    } catch (error: any) {
        res.status(401).json({
            success: false,
            message: "Login failed",
            error: error.message,
        });
    }
}

const getMe = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user;
        const result = await AuthService.getMe(user);
        res.status(200).json({
            success: true,
            message: "User data retrieved successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(401).json({
            success: false,
            massage: error.massage || "Something wrong !!!"
        });
    }
}

export const AuthController = {
    // Add controller methods here
    createUser,
    logInUser,
    getMe,
};