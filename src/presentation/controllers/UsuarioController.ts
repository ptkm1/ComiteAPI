import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import bcrypt from 'bcryptjs'

class UsuarioController {
  public async Autenticar(Request: Request, Response: Response) {
    try {
      const { email, senha } = Request.body

      const Usuario: | any = await new PrismaClient().usuario.findFirst({
        where: { email },
        include: { postos: true },
      })


      if (!Usuario)
        return Response.status(401).send({ mensagem: 'Usuário Inexistente' })
      if (!(await bcrypt.compare(senha, Usuario?.senha)))
        return Response.status(401).send({ mensagem: 'Senha errada' })
      delete Usuario.senha

      const token = jwt.sign({ id: Usuario.id }, `${process.env.TOKEN_SECRET}`, { expiresIn: '1d' })


      return Response.status(200).send({ Usuario, token })
    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  public async Criar(Request: Request, Response: Response) {
    try {
      const { nome, senha, email, postos } = Request.body

      const Usuario: | any = await new PrismaClient().usuario.create({
        data: {
          nome: nome,
          senha: bcrypt.hashSync(senha, 8),
          email: email,
          postos: {
            create: postos,
          },
        },
        include: { postos: true },
      })
      
      delete Usuario.senha

      return Response.status(200).send(Usuario)
    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  public async ListarTodosUsuarios(Request: Request, Response: Response) {
    try {

      const Usuarios: | any = await new PrismaClient().usuario.findMany({
        include: { postos: true, Historicos: true },
      })

      Usuarios.map((usuario: any) => {  return delete usuario.senha })

      return Response.status(200).send(Usuarios)
    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  public async ListarUsuario(Request: Request, Response: Response) {
    try {
      const { id } = Request.params

      const Usuario: | any = await new PrismaClient().usuario.findUnique({
        where: { id },
        include: { postos: true, Historicos: true },
      })

      delete Usuario.senha

      return Response.status(200).send(Usuario)
    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  public async AtualizarUsuario(Request: Request, Response: Response) {
    try {
      const { id } = Request.params
      const data = Request.body

      const Usuario = await new PrismaClient().usuario.update({
        data,
        where: { id },
      })
      return Response.status(200).send(Usuario)
    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  public async DeletarUsuario(Request: Request, Response: Response) {
    try {
      const { id } = Request.params

      await new PrismaClient().usuario.delete({ where: { id } })
      return Response.status(200).send({ mensagem: 'Usuario Deletado!' })
    } catch (error) {
      return Response.status(401).send(error)
    }
  }
}

export default new UsuarioController()
