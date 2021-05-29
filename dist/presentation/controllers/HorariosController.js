"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class Horarios {
    async Criar(Request, Response) {
        try {
            const { horario, Posto } = Request.body;
            const Inserido = await new client_1.PrismaClient().horarios.create({
                data: {
                    horario,
                    PostoId: Posto
                },
            });
            return Response.status(200).send(Inserido);
        }
        catch (error) {
            console.log(error);
            return Response.status(401).send(error);
        }
    }
    async ListarTodosHorarios(Request, Response) {
        try {
            const Horarios = await new client_1.PrismaClient().horarios.findMany({
                include: { Posto: true }
            });
            return Response.status(200).send(Horarios);
        }
        catch (error) {
            console.log(error);
            return Response.status(401).send(error);
        }
    }
    async ListarHorario(Request, Response) {
        try {
            const { id } = Request.params;
            const Horario = await new client_1.PrismaClient().horarios.findUnique({
                where: { id },
                include: { Posto: true },
            });
            return Response.status(200).send(Horario);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async AtualizarHorario(Request, Response) {
        try {
            const { id } = Request.params;
            const data = Request.body;
            const Horario = await new client_1.PrismaClient().horarios.update({
                data,
                where: { id },
            });
            return Response.status(200).send(Horario);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async DeletarHorario(Request, Response) {
        try {
            const { id } = Request.params;
            await new client_1.PrismaClient().horarios.delete({
                where: { id },
            });
            return Response.status(200).send({ mensagem: 'Horario Deletado!' });
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
}
exports.default = new Horarios();
