import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import bcrypt from 'bcryptjs'

class AdminController {
  public async Autenticar(Request: Request, Response: Response) {
    try {
      const { email, senha } = Request.body

      const Administrador = await new PrismaClient().administrador.findFirst({ where: { email } })

      if (!Administrador)
        return Response.status(401).send({ mensagem: 'Administrador Inexistente' })
      if (!await bcrypt.compare(senha, Administrador?.senha))
        return Response.status(401).send({ mensagem: 'Senha errada' })

      const token = jwt.sign({ id: Administrador.id }, `${process.env.TOKEN_SECRET}`, { expiresIn: '1d' })

      return Response.status(200).send({ Administrador, token })
    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  public async Criar(Request: Request, Response: Response) {
    try {
      const { nome, senha, email } = Request.body

      const Administrador: | any = await new PrismaClient().administrador.create({
        data: {
          nome: nome,
          senha: bcrypt.hashSync(senha, 8),
          email: email,
        }
      })
      
      delete Administrador.senha

      return Response.status(200).send(Administrador)
    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  public async ListarTodosAdministradores(Request: Request, Response: Response) {
    try {

      const Administradores: | any = await new PrismaClient().administrador.findMany()

      Administradores.map((administrador: any) => {  return delete administrador.senha })

      return Response.status(200).send(Administradores)
    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  public async ListarUsuario(Request: Request, Response: Response) {
    try {
      const { id } = Request.params

      const Administrador: | any = await new PrismaClient().administrador.findUnique({ where: { id } })

      delete Administrador.senha

      return Response.status(200).send(Administrador)
    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  public async AtualizarAdministrador(Request: Request, Response: Response) {
    try {
      const { id } = Request.params
      const data = Request.body

      const Administrador = await new PrismaClient().administrador.update({
        data,
        where: { id },
      })
      return Response.status(200).send(Administrador)
    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  public async DeletarUsuario(Request: Request, Response: Response) {
    try {
      const { id } = Request.params

      await new PrismaClient().administrador.delete({ where: { id } })
      return Response.status(200).send({ mensagem: 'Administrador Deletado.' })
    } catch (error) {
      return Response.status(401).send(error)
    }
  }
}

export default new AdminController()
