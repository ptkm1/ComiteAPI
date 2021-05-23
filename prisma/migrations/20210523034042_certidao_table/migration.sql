/*
  Warnings:

  - Added the required column `RG` to the `RG` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `RG` ADD COLUMN `RG` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Certidao` (
    `id` VARCHAR(191) NOT NULL,
    `NomeCompleto` VARCHAR(191) NOT NULL,
    `Status` VARCHAR(191) NOT NULL,
    `NomeDoPai` VARCHAR(191) NOT NULL,
    `NomeDaMae` VARCHAR(191) NOT NULL,
    `CPF` VARCHAR(191) NOT NULL,
    `RG` VARCHAR(191) NOT NULL,
    `Orgao` VARCHAR(191) NOT NULL,
    `EmailDoSolicitante` VARCHAR(191) NOT NULL,
    `Observacao` VARCHAR(191) NOT NULL,
    `Contato1` VARCHAR(191) NOT NULL,
    `EstadoDeNaturalidade` VARCHAR(191) NOT NULL,
    `CidadeDeNaturalidade` VARCHAR(191) NOT NULL,
    `DataDeSolicitacao` VARCHAR(191) NOT NULL,
    `coordenadorId` VARCHAR(191),
    `AdminId` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Certidao` ADD FOREIGN KEY (`coordenadorId`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Certidao` ADD FOREIGN KEY (`AdminId`) REFERENCES `Administrador`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
