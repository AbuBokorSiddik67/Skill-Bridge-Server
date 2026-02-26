/*
  Warnings:

  - You are about to drop the column `userId` on the `tutor_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `tutor_profiles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `tutor_profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `tutor_profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `tutor_profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `tutor_profiles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tutor_profiles" DROP CONSTRAINT "tutor_profiles_userId_fkey";

-- DropIndex
DROP INDEX "tutor_profiles_userId_key";

-- AlterTable
ALTER TABLE "tutor_profiles" DROP COLUMN "userId",
ADD COLUMN     "categoryId" TEXT,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "imageLink" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "number",
ADD COLUMN     "phone" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "tutor_profiles_email_key" ON "tutor_profiles"("email");
