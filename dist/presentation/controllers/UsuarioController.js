"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UsuarioController {
    async Autenticar(Request, Response) {
        try {
            const { email, senha } = Request.body;
            const Usuario = await new client_1.PrismaClient().usuario.findFirst({
                where: { email },
                include: { postos: true },
            });
            if (!Usuario)
                return Response.status(401).send({ mensagem: 'Usuário Inexistente' });
            if (!(await bcryptjs_1.default.compare(senha, Usuario === null || Usuario === void 0 ? void 0 : Usuario.senha)))
                return Response.status(401).send({ mensagem: 'Senha errada' });
            delete Usuario.senha;
            const token = jsonwebtoken_1.default.sign({ id: Usuario.id }, `${process.env.TOKEN_SECRET}`, { expiresIn: '1d' });
            return Response.status(200).send({ Usuario, token });
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async Criar(Request, Response) {
        try {
            const { nome, senha, email, postos } = Request.body;
            const Usuario = await new client_1.PrismaClient().usuario.create({
                data: {
                    nome: nome,
                    senha: bcryptjs_1.default.hashSync(senha, 8),
                    email: email,
                    postos: {
                        create: postos,
                    },
                },
                include: { postos: true },
            });
            delete Usuario.senha;
            return Response.status(200).send(Usuario);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async ListarTodosUsuarios(Request, Response) {
        try {
            const Usuarios = await new client_1.PrismaClient().usuario.findMany({
                include: { postos: true, Historicos: true },
            });
            Usuarios.map((usuario) => { return delete usuario.senha; });
            return Response.status(200).send(Usuarios);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async ListarUsuario(Request, Response) {
        try {
            const { id } = Request.params;
            const Usuario = await new client_1.PrismaClient().usuario.findUnique({
                where: { id },
                include: { postos: true, Historicos: true },
            });
            delete Usuario.senha;
            return Response.status(200).send(Usuario);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async AtualizarUsuario(Request, Response) {
        try {
            const { id } = Request.params;
            const data = Request.body;
            const Usuario = await new client_1.PrismaClient().usuario.update({
                data,
                where: { id },
            });
            return Response.status(200).send(Usuario);
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
    async DeletarUsuario(Request, Response) {
        try {
            const { id } = Request.params;
            await new client_1.PrismaClient().usuario.delete({ where: { id } });
            return Response.status(200).send({ mensagem: 'Usuario Deletado!' });
        }
        catch (error) {
            return Response.status(401).send(error);
        }
    }
}
exports.default = new UsuarioController();
