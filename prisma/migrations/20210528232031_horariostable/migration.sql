-- CreateTable
CREATE TABLE `Horarios` (
    `id` VARCHAR(191) NOT NULL,
    `horario` VARCHAR(191) NOT NULL,
    `PostoId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Horarios` ADD FOREIGN KEY (`PostoId`) REFERENCES `Posto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
