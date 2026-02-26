import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";

const getAllUsers = async () => {
    try {
        const result = await prisma.user.findMany();
        return result;
    } catch (error: any) {
        throw new Error(`Failed to fetch users: ${error.message}`);
    }
};

const profileUpdate = async (id: string, payload: any) => {
    try {
        if (payload.password) {
            payload.password = await bcrypt.hash(payload.password, 12);
        }

        const result = await prisma.user.update({
            where: { id },
            data: {
                name: payload.name,
                email: payload.email,
                phone: payload.phone,
                imageLink: payload.imageLink,
                bio: payload.bio,
                address: payload.address,
                password: payload.password,
                role: payload.role,
                status: payload.status,
                emailVerified: payload.emailVerified,
                isDeleted: payload.isDeleted,
            },
            select: {
                id: true,
                email: true,
                role: true,
                status: true,
                name: true,
                phone: true,
                imageLink: true,
                emailVerified: true,
                isDeleted: true,
                lastLogin: true,
                createdAt: true,
                updatedAt: true,
            }
        });

        return result;

    } catch (error: any) {
        if (error.code === 'P2025') {
            throw new Error("user not found.");
        }
        throw new Error(`Profile Update Failed: ${error.message}`);
    }
};

const deleteProfile = async (id: string) => {
    try {
        const result = await prisma.user.update({
            where: { id },
            data: {
                isDeleted: true,
            },
            select: {
                id: true,
                email: true,
                role: true,
                status: true,
                name: true,
                phone: true,
                imageLink: true,
                emailVerified: true,
                isDeleted: true,
                lastLogin: true,
                createdAt: true,
                updatedAt: true,
            }
        });

        return result;
    } catch (error: any) {
        if (error.code === 'P2025') {
            throw new Error("user not found.");
        }
        throw new Error(`Profile Deletion Failed: ${error.message}`);
    }
};

const deletdUser = async () => {
    try {
        const result = await prisma.user.findMany({
            where: { isDeleted: true },
        });
        return result;
    } catch (error: any) {
        if (error.code === 'P2025') {
            throw new Error("user not found.");
        }
        throw new Error(`User Deletion Failed: ${error.message}`);
    }
};

export const AdminService = {
    // Add service methods here
    profileUpdate,
    getAllUsers,
    deleteProfile,
    deletdUser,
};