/*
  Warnings:

  - A unique constraint covering the columns `[nome_do_posto]` on the table `Posto` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Posto.nome_do_posto_unique` ON `Posto`(`nome_do_posto`);
