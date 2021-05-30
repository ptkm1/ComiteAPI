-- DropIndex
DROP INDEX `Posto.nome_do_posto_unique` ON `Posto`;

-- AlterTable
ALTER TABLE `RG` MODIFY `Contato2` VARCHAR(191),
    MODIFY `Contato3` VARCHAR(191);
