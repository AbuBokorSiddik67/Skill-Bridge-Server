/*
  Warnings:

  - You are about to drop the column `bio` on the `TutorProfiles` table. All the data in the column will be lost.
  - You are about to drop the `Catagories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StudentRewiews` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `aboutTutor` to the `TutorProfiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `TutorProfiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'TUTOR');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'BANNED');

-- CreateEnum
CREATE TYPE "ReviewStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "TutorStatus" AS ENUM ('AVAILABLE', 'UNAVAILABLE');

-- CreateEnum
CREATE TYPE "CatagoryStatus" AS ENUM ('COMEING_SOON', 'ACTIVE');

-- DropForeignKey
ALTER TABLE "StudentRewiews" DROP CONSTRAINT "StudentRewiews_studentId_fkey";

-- DropForeignKey
ALTER TABLE "StudentRewiews" DROP CONSTRAINT "StudentRewiews_tutorId_fkey";

-- AlterTable
ALTER TABLE "TutorProfiles" DROP COLUMN "bio",
ADD COLUMN     "aboutTutor" TEXT NOT NULL,
ADD COLUMN     "status" "TutorStatus" NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "imageLink" TEXT,
ADD COLUMN     "number" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL,
ADD COLUMN     "status" "UserStatus" NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- DropTable
DROP TABLE "Catagories";

-- DropTable
DROP TABLE "StudentRewiews";

-- CreateTable
CREATE TABLE "Categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" "CatagoryStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bookings" (
    "id" TEXT NOT NULL,
    "tutorId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" "BookingStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentReviews" (
    "id" TEXT NOT NULL,
    "tutorId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "status" "ReviewStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudentReviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categories_name_key" ON "Categories"("name");

-- CreateIndex
CREATE INDEX "Categories_id_idx" ON "Categories"("id");

-- CreateIndex
CREATE INDEX "Bookings_tutorId_idx" ON "Bookings"("tutorId");

-- CreateIndex
CREATE INDEX "Bookings_studentId_idx" ON "Bookings"("studentId");

-- CreateIndex
CREATE INDEX "StudentReviews_tutorId_idx" ON "StudentReviews"("tutorId");

-- CreateIndex
CREATE INDEX "StudentReviews_studentId_idx" ON "StudentReviews"("studentId");

-- CreateIndex
CREATE INDEX "TutorProfiles_userId_idx" ON "TutorProfiles"("userId");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "TutorProfiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentReviews" ADD CONSTRAINT "StudentReviews_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "TutorProfiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentReviews" ADD CONSTRAINT "StudentReviews_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
