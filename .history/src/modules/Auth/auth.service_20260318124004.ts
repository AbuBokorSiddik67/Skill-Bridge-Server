import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";

const createUser = async (payload: any) => {
    try {
        const hashedPassword = await bcrypt.hash(payload.password, 10);
        const result = await prisma.user.create({
            data: {
                email: payload.email,
                password: hashedPassword,
                role: payload.role,
                name: payload.name,
                phone: payload.phone || null,
                imageLink: payload.imageLink || null,
                bio: payload.bio || null,
                address: payload.address || null
            },
            select: {
                id: true,
                email: true,
                role: true,
                name: true,
                phone: true,
                imageLink: true,
                bio: true,
                address: true,
                status: true,
                emailVerified: true,
                createdAt: true,
                updatedAt: true,
            }
        });
        return result;
    } catch (error: any) {
        if (error.code === 'P2002') {
            throw new Error("This email is already registered.",);
        }
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
        }
    } catch (error) {
        throw error;
    }
}

const getMe = async (payload: any) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: payload.id,
            }
        });
        const { password, ...userData } = user!;
        return userData;
    } catch (error) {
        throw error;
    }
}

export const AuthService = {
    // Add service methods here
    createUser,
    logInUser,
    getMe,
};
