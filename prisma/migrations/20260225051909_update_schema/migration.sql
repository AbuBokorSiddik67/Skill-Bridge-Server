/*
  Warnings:

  - You are about to drop the column `categoryId` on the `tutor_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `tutor_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `imageLink` on the `tutor_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `tutor_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `tutor_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `tutor_profiles` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `tutor_profiles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `tutor_profiles` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "tutor_profiles_email_key";

-- AlterTable
ALTER TABLE "tutor_profiles" DROP COLUMN "categoryId",
DROP COLUMN "email",
DROP COLUMN "imageLink",
DROP COLUMN "name",
DROP COLUMN "password",
DROP COLUMN "role",
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "tutor_profiles_userId_key" ON "tutor_profiles"("userId");

-- AddForeignKey
ALTER TABLE "tutor_profiles" ADD CONSTRAINT "tutor_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
