import { Router } from 'express'
import { AuthMiddleware } from '../../domain/middlewares/AuthMiddleware'
import AdminController from '../controllers/AdminController'
import CertidaoController from '../controllers/CertidaoController'
import HistoricoController from '../controllers/HistoricoController'
import PostosController from '../controllers/PostosController'
import RGController from '../controllers/RGController'
import UsuarioController from '../controllers/UsuarioController'

const AdminRoutes = Router()

/*
 * Usuarios
 */
AdminRoutes.get('/usuarios', AuthMiddleware, UsuarioController.ListarTodosUsuarios)
AdminRoutes.get('/usuarios/:id', AuthMiddleware, UsuarioController.ListarUsuario)
AdminRoutes.post('/usuarios', AuthMiddleware, UsuarioController.Criar)
AdminRoutes.put('/usuarios/:id', AuthMiddleware, UsuarioController.AtualizarUsuario)
AdminRoutes.delete('/usuarios/:id', AuthMiddleware, UsuarioController.DeletarUsuario)

/*
 * Postos
 */
AdminRoutes.get('/postos', AuthMiddleware, PostosController.ListarTodosPostos)
AdminRoutes.get('/postos/:id', AuthMiddleware, PostosController.ListarPosto)
AdminRoutes.post('/postos', AuthMiddleware, PostosController.Criar)
AdminRoutes.put('/postos/:id', AuthMiddleware, PostosController.AtualizarPosto)
AdminRoutes.delete('/postos/:id', AuthMiddleware, PostosController.DeletarPosto)

/**
 * Cadastro de RG
 */
AdminRoutes.get('/rg', AuthMiddleware, RGController.Listar)
AdminRoutes.get('/rg/:id', AuthMiddleware, RGController.ListarRegistro)
AdminRoutes.post('/rg', AuthMiddleware, RGController.Criar)
AdminRoutes.put('/rg/:id', AuthMiddleware, RGController.Atualizar)
AdminRoutes.delete('/rg/:id', AuthMiddleware, RGController.Deletar)

/**
 * Históricos de usuarios
 */
AdminRoutes.get('/historicos', AuthMiddleware, HistoricoController.Listar)
AdminRoutes.get('/historicos/:id', AuthMiddleware, HistoricoController.ListarHistoricoDeUsuario)
AdminRoutes.post('/historicos', AuthMiddleware, HistoricoController.Criar)
AdminRoutes.delete('/historicos/:id', AuthMiddleware, HistoricoController.Deletar)

/**
 * Autenticação Administrador
 */
AdminRoutes.post('/admin/login', AdminController.Autenticar)
AdminRoutes.get('/admin', AuthMiddleware, AdminController.ListarTodosAdministradores)
AdminRoutes.get('/admin/:id', AuthMiddleware, AdminController.ListarUsuario)
AdminRoutes.post('/admin', AuthMiddleware, AdminController.Criar)
AdminRoutes.put('/admin/:id', AuthMiddleware, AdminController.AtualizarAdministrador)
AdminRoutes.delete('/admin/:id', AuthMiddleware, AdminController.DeletarUsuario)

/**
 * Certidao
 */
AdminRoutes.post("/certidaos", AuthMiddleware, CertidaoController.Criar)
AdminRoutes.get('/certidaos', AuthMiddleware, CertidaoController.ListarTodasCertidaos)
AdminRoutes.get('/certidaos/:id', AuthMiddleware, CertidaoController.ListarCertidao)
AdminRoutes.put('/certidaos/:id', AuthMiddleware, CertidaoController.AtualizarCertidao)
AdminRoutes.delete('/certidaos/:id', AuthMiddleware, CertidaoController.DeletarCertidao)



export { AdminRoutes }