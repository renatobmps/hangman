/*
  Warnings:

  - You are about to drop the column `hints_words_id` on the `Hint` table. All the data in the column will be lost.
  - Added the required column `hint_id` to the `HintsWords` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Hint" DROP CONSTRAINT "Hint_hints_words_id_fkey";

-- AlterTable
ALTER TABLE "Hint" DROP COLUMN "hints_words_id";

-- AlterTable
ALTER TABLE "HintsWords" ADD COLUMN     "hint_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "HintsWords" ADD CONSTRAINT "HintsWords_hint_id_fkey" FOREIGN KEY ("hint_id") REFERENCES "Hint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
