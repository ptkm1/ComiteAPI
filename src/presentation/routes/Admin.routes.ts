import { Router } from 'express'
import { AuthMiddleware } from '../../domain/middlewares/AuthMiddleware'
import PostosController from '../controllers/PostosController'
import RGController from '../controllers/RGController'
import UsuarioController from '../controllers/UsuarioController'

const AdminRoutes = Router()

/*
* Usuarios
*/

AdminRoutes.get('/usuarios', AuthMiddleware, UsuarioController.ListarTodosUsuarios)
AdminRoutes.get('/usuarios/:id', AuthMiddleware, UsuarioController.ListarUsuario)
AdminRoutes.post('/usuarios', UsuarioController.Criar)
AdminRoutes.put('/usuarios/:id', UsuarioController.AtualizarUsuario)
AdminRoutes.delete('/usuarios/:id', UsuarioController.DeletarUsuario)

/*
* Postos 
*/

AdminRoutes.get('/postos', PostosController.ListarTodosPostos)
AdminRoutes.get('/postos/:id', PostosController.ListarPosto)
AdminRoutes.post('/postos', PostosController.Criar)
AdminRoutes.put('/postos/:id', PostosController.AtualizarPosto)
AdminRoutes.delete('/postos/:id', PostosController.DeletarPosto)

/**
* Cadastro de RG
*/

AdminRoutes.get('/rg', RGController.Listar)
AdminRoutes.get('/rg/:id', RGController.ListarRegistro)
AdminRoutes.post('/rg', RGController.Criar)
AdminRoutes.put('/rg/:id', RGController.Atualizar)
AdminRoutes.delete('/rg/:id', RGController.Deletar)

export { AdminRoutes }