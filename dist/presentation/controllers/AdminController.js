"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class AdminController {
    async Autenticar(Request, Response) {
        try {
            const { email, senha } = Request.body;
            const Administrador = await new client_1.PrismaClient().administrador.findFirst({ where: { email } });
            if (!Administrador)
                return Response.status(401).send({ mensagem: 'Administrador Inexistente' });
            if (!await bcryptjs_1.default.compare(senha, Administrador === null || Administrador === void 0 ? void 0 : Administrador.senha))
                return Response.status(401).send({ mensagem: 'Senha errada' });
            delete Administrador.senha;
            const token = jsonwebtoken_1.default.sign({ id: Administrador.id }, `${process.env.TOKEN_SECRET}`, { expiresIn: '1d' });
            return Response.status(200).send({ Administrador, token });
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async Criar(Request, Response) {
        try {
            const { nome, senha, email } = Request.body;
            const Administrador = await new client_1.PrismaClient().administrador.create({
                data: {
                    nome: nome,
                    senha: bcryptjs_1.default.hashSync(senha, 8),
                    email: email,
                }
            });
            delete Administrador.senha;
            return Response.status(200).send(Administrador);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async ListarTodosAdministradores(Request, Response) {
        try {
            const Administradores = await new client_1.PrismaClient().administrador.findMany();
            Administradores.map((administrador) => { return delete administrador.senha; });
            return Response.status(200).send(Administradores);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async ListarUsuario(Request, Response) {
        try {
            const { id } = Request.params;
            const Administrador = await new client_1.PrismaClient().administrador.findUnique({ where: { id } });
            delete Administrador.senha;
            return Response.status(200).send(Administrador);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async AtualizarAdministrador(Request, Response) {
        try {
            const { id } = Request.params;
            const data = Request.body;
            const Administrador = await new client_1.PrismaClient().administrador.update({
                data,
                where: { id },
            });
            return Response.status(200).send(Administrador);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async DeletarUsuario(Request, Response) {
        try {
            const { id } = Request.params;
            await new client_1.PrismaClient().administrador.delete({ where: { id } });
            return Response.status(200).send({ mensagem: 'Administrador Deletado.' });
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
}
exports.default = new AdminController();
