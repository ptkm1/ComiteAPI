import { Router } from 'express'
import { AuthMiddleware } from '../../domain/middlewares/AuthMiddleware'
import PostosController from '../controllers/PostosController'
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

export { AdminRoutes }