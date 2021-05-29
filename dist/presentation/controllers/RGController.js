"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class RGController {
    async Listar(Request, Response) {
        try {
            const Registros = await new client_1.PrismaClient().rG.findMany({
                include: { Admin: true, coordenador: true }
            });
            Registros.map((registro) => { return delete registro.coordenador.senha; });
            return Response.status(200).send(Registros);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async ListPage(Request, Response) {
        try {
            const Registros = await new client_1.PrismaClient().rG.findMany({
                select: {
                    id: true,
                    DataDeSolicitacao: true,
                    NomeCompleto: true,
                    Orgao: true,
                    RG: true,
                    Contato1: true,
                    Status: true,
                    LocalDeAgendamento: true,
                    DataDeAgendamento: true,
                    HoraDoAgendamento: true,
                    coordenador: true,
                }
            });
            Registros.map((registro) => { return delete registro.coordenador.senha; });
            return Response.status(200).send(Registros);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async ListarRegistro(Request, Response) {
        try {
            const { id } = Request.params;
            const Registro = await new client_1.PrismaClient().rG.findUnique({
                where: { id },
                include: { Admin: true, coordenador: true }
            });
            delete Registro.coordenador.senha;
            return Response.status(200).send(Registro);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async Criar(Request, Response) {
        try {
            const Dados = Request.body;
            console.log(Dados);
            const Ficha = await new client_1.PrismaClient().rG.create({
                data: Dados,
                include: { Admin: true, coordenador: true }
            });
            console.log(Ficha);
            return Response.status(200).send({ mensagem: "Cadastro Finalizado!" });
        }
        catch (error) {
            console.log(error);
            return Response.status(401).send(error);
        }
    }
    async Atualizar(Request, Response) {
        try {
            const { id } = Request.params;
            const data = Request.body;
            const Ficha = await new client_1.PrismaClient().rG.update({
                data,
                where: { id },
            });
            console.log(Ficha);
            return Response.status(200).send({ mensagem: 'Cadastro Atualizado com sucesso.' });
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async Deletar(Request, Response) {
        try {
            const { id } = Request.params;
            await new client_1.PrismaClient().rG.delete({ where: { id } });
            return Response.status(200).send({ mensagem: 'Cadastro Deletado com sucesso.' });
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
}
exports.default = new RGController();
