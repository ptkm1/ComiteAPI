"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class CertidaoController {
    async Criar(Request, Response) {
        try {
            const data = Request.body;
            const Certidao = await new client_1.PrismaClient().certidao.create({ data: data, include: { Admin: true, coordenador: true } });
            delete Certidao.senha;
            return Response.status(200).send({ mensagem: 'Registrado com sucesso seu requerimento' });
        }
        catch (error) {
            console.log(error);
            return Response.status(401).send({ mensagem: 'Não foi possivel requisitar essa certidao' });
        }
    }
    async ListarTodasCertidaos(Request, Response) {
        try {
            const Certidaos = await new client_1.PrismaClient().certidao.findMany();
            Certidaos.map((Certidao) => { return delete Certidao.senha; });
            return Response.status(200).send(Certidaos);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async ListarCertidao(Request, Response) {
        try {
            const { id } = Request.params;
            const Certidao = await new client_1.PrismaClient().certidao.findUnique({ where: { id } });
            delete Certidao.senha;
            return Response.status(200).send(Certidao);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async AtualizarCertidao(Request, Response) {
        try {
            const { id } = Request.params;
            const data = Request.body;
            const Certidao = await new client_1.PrismaClient().certidao.update({
                data,
                where: { id },
            });
            return Response.status(200).send(Certidao);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async DeletarCertidao(Request, Response) {
        try {
            const { id } = Request.params;
            await new client_1.PrismaClient().certidao.delete({ where: { id } });
            return Response.status(200).send({ mensagem: 'Certidao Deletado.' });
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
}
exports.default = new CertidaoController();
