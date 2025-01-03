/*
  Warnings:

  - You are about to drop the column `is_gest` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" RENAME COLUMN "is_gest" TO "is_guest";
