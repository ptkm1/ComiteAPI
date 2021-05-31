import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express'

class StatusController {

  public async Criar(Request: Request, Response: Response) {
    try {
      const { titulo } = Request.body

      const Inserido = await new PrismaClient().tiposDeStatus.create({
        data: { titulo },
      })

      return Response.status(200).send(Inserido)
    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  public async ListarTodosStatus(Request: Request, Response: Response) {
    try {
      const Status: | any = await new PrismaClient().tiposDeStatus.findMany()

      return Response.status(200).send(Status)
    } catch (error) {
      return Response.status(401).send(error)
    }
  }


  public async AtualizarStatus(Request: Request, Response: Response) {
    try {
      const { id }: any = Request.params
      const { titulo } = Request.body

      const Status = await new PrismaClient().tiposDeStatus.update({ data: { titulo }, where: { id: id } })
      return Response.status(200).send(Status)
    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  public async DeletarStatus(Request: Request, Response: Response) {
    try {
      const { id }: any = Request.params

      await new PrismaClient().tiposDeStatus.delete({ where: { id } })
      return Response.status(200).send({ mensagem: 'Status Deletado!' })
    } catch (error) {
      return Response.status(401).send(error)
    }
  }
}

export default new StatusController()