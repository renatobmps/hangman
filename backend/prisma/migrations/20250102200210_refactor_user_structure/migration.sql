/*
  Warnings:

  - You are about to drop the column `isActivated` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isAdm` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "isActivated",
DROP COLUMN "isAdm",
ADD COLUMN     "is_activated" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "is_adm" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "need_update_password" BOOLEAN NOT NULL DEFAULT false;
