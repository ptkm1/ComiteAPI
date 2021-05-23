-- CreateTable
CREATE TABLE `Historicos` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `acao` VARCHAR(191),
    `coordenadorId` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Administrador` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Administrador.email_unique`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TiposDeStatus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RG` (
    `id` VARCHAR(191) NOT NULL,
    `NomeCompleto` VARCHAR(191) NOT NULL,
    `NomeDoPai` VARCHAR(191) NOT NULL,
    `NomeDaMae` VARCHAR(191) NOT NULL,
    `CPF` VARCHAR(191) NOT NULL,
    `Orgao` VARCHAR(191) NOT NULL,
    `Motivo` VARCHAR(191) NOT NULL,
    `DataDeSolicitacao` VARCHAR(191) NOT NULL,
    `CidadaoSabeCPF` VARCHAR(191) NOT NULL,
    `CidadaoEmPosseCPF` VARCHAR(191) NOT NULL,
    `Contato1` VARCHAR(191) NOT NULL,
    `Contato2` VARCHAR(191) NOT NULL,
    `Contato3` VARCHAR(191) NOT NULL,
    `Whatsapp` VARCHAR(191) NOT NULL,
    `EstadoDeNaturalidade` VARCHAR(191) NOT NULL,
    `CidadeDeNaturalidade` VARCHAR(191) NOT NULL,
    `EnderecoResidencial` VARCHAR(191) NOT NULL,
    `CidadeResidencial` VARCHAR(191) NOT NULL,
    `Cep` VARCHAR(191) NOT NULL,
    `Status` VARCHAR(191) NOT NULL,
    `LocalDeAgendamento` VARCHAR(191) NOT NULL,
    `DataDeAgendamento` VARCHAR(191) NOT NULL,
    `HoraDoAgendamento` VARCHAR(191) NOT NULL,
    `Resolvido` VARCHAR(191) NOT NULL,
    `Observacao` VARCHAR(191) NOT NULL,
    `coordenadorId` VARCHAR(191),
    `AdminId` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Historicos` ADD FOREIGN KEY (`coordenadorId`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RG` ADD FOREIGN KEY (`coordenadorId`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RG` ADD FOREIGN KEY (`AdminId`) REFERENCES `Administrador`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
