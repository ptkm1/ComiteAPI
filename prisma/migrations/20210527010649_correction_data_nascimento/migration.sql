/*
  Warnings:

  - Added the required column `DataDeNascimento` to the `Certidao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Certidao` ADD COLUMN `DataDeNascimento` VARCHAR(191) NOT NULL;
