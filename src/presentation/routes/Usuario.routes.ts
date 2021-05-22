import { Router } from 'express'
import UsuarioController from '../controllers/UsuarioController'

const RotasUsuarios = Router()

RotasUsuarios.post('/login', UsuarioController.Autenticar)

export { RotasUsuarios }