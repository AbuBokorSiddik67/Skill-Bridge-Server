import { prisma } from "../../lib/prisma";

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
const deleteUser = async (id: string) => {
    try {
        const result = await prisma.user.delete({
            where: { id },
        });
        return result;
    } catch (error: any) {
        if (error.code === 'P2025') {
            throw new Error("user not found.");
        }
        throw new Error(`User Deletion Failed: ${error.message}`);
    };
};

export const AdminService = {
    // Add service methods here
    deletdUser,
    deleteUser,
};