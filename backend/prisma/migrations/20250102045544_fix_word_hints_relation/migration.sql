/*
  Warnings:

  - You are about to drop the column `hints_words_id` on the `Word` table. All the data in the column will be lost.
  - Added the required column `word_id` to the `HintsWords` table without a default value. This is not possible if the table is not empty.
  - Added the required column `word` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Word" DROP CONSTRAINT "Word_hints_words_id_fkey";

-- AlterTable
ALTER TABLE "HintsWords" ADD COLUMN     "word_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Word" DROP COLUMN "hints_words_id",
ADD COLUMN     "word" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "HintsWords" ADD CONSTRAINT "HintsWords_word_id_fkey" FOREIGN KEY ("word_id") REFERENCES "Word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
