"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class Postos {
    async Criar(Request, Response) {
        try {
            const { nome_do_posto, coordenador } = Request.body;
            const Inserido = await new client_1.PrismaClient().posto.create({
                data: {
                    nome_do_posto,
                    coordenadorId: coordenador
                },
            });
            return Response.status(200).send(Inserido);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async ListarTodosPostos(Request, Response) {
        try {
            const Postos = await new client_1.PrismaClient().posto.findMany({
                include: { coordenador: true }
            });
            // Postos.map((posto: any) => {  return delete posto.coordenador.senha })
            return Response.status(200).send(Postos);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async ListarPosto(Request, Response) {
        try {
            const { id } = Request.params;
            const Posto = await new client_1.PrismaClient().posto.findUnique({
                where: { id },
                include: { coordenador: true },
            });
            delete Posto.coordenador.senha;
            return Response.status(200).send(Posto);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async AtualizarPosto(Request, Response) {
        try {
            const { id } = Request.params;
            const data = Request.body;
            const Posto = await new client_1.PrismaClient().posto.update({
                data,
                where: { id },
            });
            return Response.status(200).send(Posto);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async DeletarPosto(Request, Response) {
        try {
            const { id } = Request.params;
            await new client_1.PrismaClient().posto.delete({
                where: { id },
            });
            return Response.status(200).send({ mensagem: 'Posto Deletado!' });
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
}
exports.default = new Postos();
