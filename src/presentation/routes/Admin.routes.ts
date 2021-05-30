import { Router } from 'express'
import { AuthMiddleware } from '../../domain/middlewares/AuthMiddleware'
import Authentication from '../../domain/useCases/Authentication/Authentication'
import AdminController from '../controllers/AdminController'
import CertidaoController from '../controllers/CertidaoController'
import HistoricoController from '../controllers/HistoricoController'
import HorariosController from '../controllers/HorariosController'
import PostosController from '../controllers/PostosController'
import RGController from '../controllers/RGController'
import UsuarioController from '../controllers/UsuarioController'

const AdminRoutes = Router()

/*
 * Usuarios
 */
AdminRoutes.get('/usuarios', UsuarioController.ListarTodosUsuarios)
AdminRoutes.get('/usuarios/:id', UsuarioController.ListarUsuario)
AdminRoutes.post('/usuarios', UsuarioController.Criar)
AdminRoutes.put('/usuarios/:id', UsuarioController.AtualizarUsuario)
AdminRoutes.delete('/usuarios/:id', UsuarioController.DeletarUsuario)

/*
 * Postos
 */
AdminRoutes.get('/posto', PostosController.ListarTodosPostos)
AdminRoutes.get('/postos/:id', PostosController.ListarPosto)
AdminRoutes.post('/postos', PostosController.Criar)
AdminRoutes.put('/postos/:id', PostosController.AtualizarPosto)
AdminRoutes.delete('/postos/:id', PostosController.DeletarPosto)

/**
 * Cadastro de RG
 */
AdminRoutes.get('/rg', RGController.Listar)
AdminRoutes.get('/rgs', RGController.ListPage)
AdminRoutes.get('/rg/:id', RGController.ListarRegistro)
AdminRoutes.post('/rg', RGController.Criar)
AdminRoutes.put('/rg/:id', RGController.Atualizar)
AdminRoutes.delete('/rg/:id', RGController.Deletar)

/**
 * Históricos de usuarios
 */
AdminRoutes.get('/historicos', HistoricoController.Listar)
AdminRoutes.get('/historicos/:id', HistoricoController.ListarHistoricoDeUsuario)
AdminRoutes.post('/historicos', HistoricoController.Criar)
AdminRoutes.delete('/historicos/:id', HistoricoController.Deletar)

/**
 * Administrador
 */
AdminRoutes.post('/admin/login', AdminController.Autenticar)
AdminRoutes.get('/admin', AdminController.ListarTodosAdministradores)
AdminRoutes.get('/admin/:id', AdminController.ListarUsuario)
AdminRoutes.post('/admin', AdminController.Criar)
AdminRoutes.put('/admin/:id', AdminController.AtualizarAdministrador)
AdminRoutes.delete('/admin/:id', AdminController.DeletarUsuario)

/**
 * Certidao
 */
AdminRoutes.post("/certidaos", CertidaoController.Criar)
AdminRoutes.get('/certidaos', CertidaoController.ListarTodasCertidaos)
AdminRoutes.get('/certidaos/:id', CertidaoController.ListarCertidao)
AdminRoutes.put('/certidaos/:id', CertidaoController.AtualizarCertidao)
AdminRoutes.delete('/certidaos/:id', CertidaoController.DeletarCertidao)

/**
 * Horarios
 */
 AdminRoutes.post("/horarios", HorariosController.Criar)
 AdminRoutes.get('/horarios', HorariosController.ListarTodosHorarios)
 AdminRoutes.get('/horarios/:id', HorariosController.ListarHorario)
 AdminRoutes.put('/horarios/:id', HorariosController.AtualizarHorario)
 AdminRoutes.delete('/horarios/:id', HorariosController.DeletarHorario)

 AdminRoutes.get('/logged', AuthMiddleware)



export { AdminRoutes }