"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class HistoricoController {
    async Listar(Request, Response) {
        try {
            const Historicos = await new client_1.PrismaClient().historicos.findMany({
                include: { coordenador: true }
            });
            Historicos.map((registro) => { return delete registro.coordenador.senha; });
            return Response.status(200).send(Historicos);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async ListarHistoricoDeUsuario(Request, Response) {
        try {
            const { id } = Request.params;
            const Historico = await new client_1.PrismaClient().historicos.findUnique({
                where: { id },
                include: { coordenador: true }
            });
            delete Historico.coordenador.senha;
            return Response.status(200).send(Historico);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async Criar(Request, Response) {
        try {
            const Dados = Request.body;
            console.log(Dados);
            const Historico = await new client_1.PrismaClient().historicos.create({
                data: Dados,
                include: { coordenador: true }
            });
            console.log(Historico);
            return Response.status(200).send({ mensagem: "Historico salvo" });
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async Deletar(Request, Response) {
        try {
            const { id } = Request.params;
            await new client_1.PrismaClient().historicos.delete({ where: { id } });
            return Response.status(200).send({ mensagem: 'Historico Deletado com sucesso.' });
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
}
exports.default = new HistoricoController();
