/*
  Warnings:

  - You are about to drop the column `isActivated` on the `Hint` table. All the data in the column will be lost.
  - You are about to drop the column `isActivated` on the `HintsWords` table. All the data in the column will be lost.
  - You are about to drop the column `isActivated` on the `Word` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Hint" RENAME COLUMN "isActivated" TO "is_activated";

-- AlterTable
ALTER TABLE "HintsWords" DROP COLUMN "isActivated";

-- AlterTable
ALTER TABLE "Word" RENAME COLUMN "isActivated" TO "is_activated";
