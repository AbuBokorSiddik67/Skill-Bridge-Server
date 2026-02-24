import jwt from "jsonwebtoken";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";

const createUser = async (payload: any) => {
    try {
        const hashPassword = await bcrypt.hash(payload.password, 8);

        const result = await prisma.user.create({
            data: {
                email: payload.email,
                password: hashPassword,
                role: payload.role,
                phone: payload.phone,
                name: payload.name,
                imageLink: payload.imageLink,
                categoryId: payload.categoryId,
                bio: payload.bio,
            },
        });

        const { password, ...userData } = result;
        return userData;

    } catch (error: any) {
        throw error;
    }
};

const logInUser = async (payload: any) => {
    try {

        const user = await prisma.user.findUnique({
            where: {
                email: payload.email,
            }
        })
        if (!user) {
            throw new Error("Invalid email! Please try another email");
        }
        const isPasswordValid = await bcrypt.compare(payload.password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid password! Please try again");
        }
        const userData = {
            id: user.id,
            name: user.name,
            role: user.role,
            status: user.status,
            email: user.email,
        };
        const token = jwt.sign(userData, process.env.JWT_SECRET_KEY as string, { expiresIn: "7d" });
        return {
            token,
            user,
        }
    } catch (error) {
        throw error;
    }
}

export const AuthService = {
    // Add service methods here
    createUser,
    logInUser,
};