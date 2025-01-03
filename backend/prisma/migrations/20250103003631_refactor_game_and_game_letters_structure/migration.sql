/*
  Warnings:

  - You are about to drop the column `isActivated` on the `GameLetter` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GameLetter" DROP COLUMN "isActivated",
ADD COLUMN     "is_activated" BOOLEAN NOT NULL DEFAULT true;
