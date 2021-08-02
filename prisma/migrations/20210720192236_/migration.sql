/*
  Warnings:

  - You are about to drop the column `updated_at` on the `Hora` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Hora` DROP COLUMN `updated_at`;

-- AlterTable
ALTER TABLE `Horarios` MODIFY `marcado` VARCHAR(191);
