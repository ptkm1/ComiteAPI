import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express'

class Postos {

  public async Criar(Request: Request, Response: Response) {
    try {
      const { nome_do_posto, coordenador } = Request.body

      const Inserido = await new PrismaClient().posto.create({
        data: {
          nome_do_posto,
          coordenadorId: coordenador
          },
      })

      return Response.status(200).send(Inserido)
    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  public async ListarTodosPostos(Request: Request, Response: Response) {
    try {
      const Postos: | any = await new PrismaClient().posto.findMany({
        include: { coordenador: true }
      })

      // Postos.map((posto: any) => {  return delete posto.coordenador.senha })

      return Response.status(200).send(Postos)
    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  public async ListarPosto(Request: Request, Response: Response) {
    try {
      const { id } = Request.params

      const Posto: | any = await new PrismaClient().posto.findUnique({
        where: { id },
        include: { coordenador: true },
      })

      delete Posto.coordenador.senha

      return Response.status(200).send(Posto)
    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  public async AtualizarPosto(Request: Request, Response: Response) {
    try {
      const { id } = Request.params
      const data = Request.body

      const Posto = await new PrismaClient().posto.update({
        data,
        where: { id },
      })
      return Response.status(200).send(Posto)
    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  public async DeletarPosto(Request: Request, Response: Response) {
    try {
      const { id } = Request.params

      await new PrismaClient().posto.delete({
        where: { id },
      })
      return Response.status(200).send({ mensagem: 'Posto Deletado!' })
    } catch (error) {
      return Response.status(401).send(error)
    }
  }
}

export default new Postos()