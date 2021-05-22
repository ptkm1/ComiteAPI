-- CreateTable
CREATE TABLE `Usuario` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Usuario.email_unique`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Posto` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `nome_do_posto` VARCHAR(191) NOT NULL,
    `coordenadorId` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Posto` ADD FOREIGN KEY (`coordenadorId`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
