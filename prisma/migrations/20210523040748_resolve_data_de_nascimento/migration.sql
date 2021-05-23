/*
  Warnings:

  - Added the required column `DataDeNascimento` to the `RG` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `RG` ADD COLUMN `DataDeNascimento` VARCHAR(191) NOT NULL;
