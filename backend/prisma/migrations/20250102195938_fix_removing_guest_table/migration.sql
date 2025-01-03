/*
  Warnings:

  - You are about to drop the `Guest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Guest" DROP CONSTRAINT "Guest_user_id_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "is_gest" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Guest";
