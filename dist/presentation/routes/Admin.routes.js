"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
const express_1 = require("express");
const AuthMiddleware_1 = require("../../domain/middlewares/AuthMiddleware");
const AdminController_1 = __importDefault(require("../controllers/AdminController"));
const CertidaoController_1 = __importDefault(require("../controllers/CertidaoController"));
const HistoricoController_1 = __importDefault(require("../controllers/HistoricoController"));
const HorariosController_1 = __importDefault(require("../controllers/HorariosController"));
const PostosController_1 = __importDefault(require("../controllers/PostosController"));
const RGController_1 = __importDefault(require("../controllers/RGController"));
const UsuarioController_1 = __importDefault(require("../controllers/UsuarioController"));
const AdminRoutes = express_1.Router();
exports.AdminRoutes = AdminRoutes;
/*
 * Usuarios
 */
AdminRoutes.get('/usuarios', UsuarioController_1.default.ListarTodosUsuarios);
AdminRoutes.get('/usuarios/:id', UsuarioController_1.default.ListarUsuario);
AdminRoutes.post('/usuarios', UsuarioController_1.default.Criar);
AdminRoutes.put('/usuarios/:id', UsuarioController_1.default.AtualizarUsuario);
AdminRoutes.delete('/usuarios/:id', UsuarioController_1.default.DeletarUsuario);
/*
 * Postos
 */
AdminRoutes.get('/posto', PostosController_1.default.ListarTodosPostos);
AdminRoutes.get('/postos/:id', PostosController_1.default.ListarPosto);
AdminRoutes.post('/postos', PostosController_1.default.Criar);
AdminRoutes.put('/postos/:id', PostosController_1.default.AtualizarPosto);
AdminRoutes.delete('/postos/:id', PostosController_1.default.DeletarPosto);
/**
 * Cadastro de RG
 */
AdminRoutes.get('/rg', RGController_1.default.Listar);
AdminRoutes.get('/rgs', RGController_1.default.ListPage);
AdminRoutes.get('/rg/:id', RGController_1.default.ListarRegistro);
AdminRoutes.post('/rg', AuthMiddleware_1.AuthMiddleware, RGController_1.default.Criar);
AdminRoutes.put('/rg/:id', RGController_1.default.Atualizar);
AdminRoutes.delete('/rg/:id', RGController_1.default.Deletar);
/**
 * Históricos de usuarios
 */
AdminRoutes.get('/historicos', HistoricoController_1.default.Listar);
AdminRoutes.get('/historicos/:id', HistoricoController_1.default.ListarHistoricoDeUsuario);
AdminRoutes.post('/historicos', HistoricoController_1.default.Criar);
AdminRoutes.delete('/historicos/:id', HistoricoController_1.default.Deletar);
/**
 * Administrador
 */
AdminRoutes.post('/admin/login', AdminController_1.default.Autenticar);
AdminRoutes.get('/admin', AdminController_1.default.ListarTodosAdministradores);
AdminRoutes.get('/admin/:id', AdminController_1.default.ListarUsuario);
AdminRoutes.post('/admin', AdminController_1.default.Criar);
AdminRoutes.put('/admin/:id', AdminController_1.default.AtualizarAdministrador);
AdminRoutes.delete('/admin/:id', AdminController_1.default.DeletarUsuario);
/**
 * Certidao
 */
AdminRoutes.post("/certidaos", CertidaoController_1.default.Criar);
AdminRoutes.get('/certidaos', CertidaoController_1.default.ListarTodasCertidaos);
AdminRoutes.get('/certidaos/:id', CertidaoController_1.default.ListarCertidao);
AdminRoutes.put('/certidaos/:id', CertidaoController_1.default.AtualizarCertidao);
AdminRoutes.delete('/certidaos/:id', CertidaoController_1.default.DeletarCertidao);
/**
 * Horarios
 */
AdminRoutes.post("/horarios", HorariosController_1.default.Criar);
AdminRoutes.get('/horarios', HorariosController_1.default.ListarTodosHorarios);
AdminRoutes.get('/horarios/:id', HorariosController_1.default.ListarHorario);
AdminRoutes.put('/horarios/:id', HorariosController_1.default.AtualizarHorario);
AdminRoutes.delete('/horarios/:id', HorariosController_1.default.DeletarHorario);
