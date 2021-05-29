import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express'

class Horarios {

  public async Criar(Request: Request, Response: Response) {
    try {
      const { horario, Posto } = Request.body

      const Inserido = await new PrismaClient().horarios.create({
        data: {
          horario,
          PostoId: Posto
          },
      })

      return Response.status(200).send(Inserido)
    } catch (error) {
      console.log(error)
      return Response.status(401).send(error)
    }
  }

  public async ListarTodosHorarios(Request: Request, Response: Response) {
    try {
      const Horarios: | any = await new PrismaClient().horarios.findMany({
        include: { Posto: true }
      })


      return Response.status(200).send(Horarios)
    } catch (error) {
      console.log(error)
      return Response.status(401).send(error)
    }
  }

  public async ListarHorario(Request: Request, Response: Response) {
    try {
      const { id } = Request.params

      const Horario: | any = await new PrismaClient().horarios.findUnique({
        where: { id },
        include: { Posto: true },
      })


      return Response.status(200).send(Horario)
    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  public async AtualizarHorario(Request: Request, Response: Response) {
    try {
      const { id } = Request.params
      const data = Request.body

      const Horario = await new PrismaClient().horarios.update({
        data,
        where: { id },
      })
      return Response.status(200).send(Horario)
    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  public async DeletarHorario(Request: Request, Response: Response) {
    try {
      const { id } = Request.params

      await new PrismaClient().horarios.delete({
        where: { id },
      })
      return Response.status(200).send({ mensagem: 'Horario Deletado!' })
    } catch (error) {
      return Response.status(401).send(error)
    }
  }
}

export default new Horarios()