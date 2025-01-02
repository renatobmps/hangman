/*
  Warnings:

  - You are about to drop the column `word` on the `Word` table. All the data in the column will be lost.
  - Added the required column `text` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Word" RENAME COLUMN "word" TO "text";
