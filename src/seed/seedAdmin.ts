import { prisma } from "../lib/prisma";
import { UserRole } from "../middlewares/auth";
import bcrypt from "bcryptjs";

const seedAdmin = async () => {
    const hashedPassword = await bcrypt.hash("112233", 8);
    const adminData = {
        name: "System Admin",
        email: "admin@gmail.com",
        phone: "01712345678",
        imageLink: "https://www.flaticon.com/free-icon/system-administrator_5322056",
        role: UserRole.admin,
        password: hashedPassword,
        emailVerified: true,
        refreshToken: null,
        lastLogin: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    try {
        const isExists = await prisma.user.findUnique({
            where: {
                email: adminData.email,
            },
        });

        if (isExists) {
            console.log("Admin already exists!!");
            return;
        }
        const admin = await prisma.user.create({
            data: adminData,
        });
        console.log("Admin created successfully!!");
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect()
    }
};
seedAdmin();