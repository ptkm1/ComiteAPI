/*
  Warnings:

  - You are about to drop the column `CidadaoEmPosseCPF` on the `RG` table. All the data in the column will be lost.
  - Added the required column `CidadaoEmPosseCertidao` to the `RG` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `RG` DROP COLUMN `CidadaoEmPosseCPF`,
    ADD COLUMN `CidadaoEmPosseCertidao` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Hora` (
    `id` INTEGER NOT NULL,
    `posto` VARCHAR(20) NOT NULL,
    `dia` INTEGER NOT NULL,
    `dianome` VARCHAR(20) NOT NULL,
    `data` DATE NOT NULL,
    `hora` TIME(0) NOT NULL,
    `marcado` VARCHAR(3) NOT NULL,
    `updated_at` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
