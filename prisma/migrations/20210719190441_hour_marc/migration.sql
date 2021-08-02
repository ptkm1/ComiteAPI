/*
  Warnings:

  - Added the required column `marcado` to the `Horarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Horarios` ADD COLUMN `marcado` VARCHAR(191) NOT NULL;
