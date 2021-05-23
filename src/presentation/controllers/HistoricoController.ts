import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express'

class HistoricoController {


  async Listar(Request: Request, Response: Response) {
    try {
      
      const Historicos: | any = await new PrismaClient().historicos.findMany({
        include: { coordenador: true }
      })

      Historicos.map((registro: any) => {  return delete registro.coordenador.senha })

      return Response.status(200).send(Historicos)

    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  async ListarHistoricoDeUsuario(Request: Request, Response: Response) {
    try {
      
      const { id } = Request.params

      const Historico: | any = await new PrismaClient().historicos.findUnique({
        where: {id},
        include: { coordenador: true }
      })

      delete Historico.coordenador.senha

      return Response.status(200).send(Historico)

    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  async Criar(Request: Request, Response: Response) {
    try {
      
      const Dados = Request.body

      console.log(Dados)

      const Historico = await new PrismaClient().historicos.create({
        data: Dados,
        include: { coordenador: true }
      })

      console.log(Historico)

      return Response.status(200).send({ mensagem: "Historico salvo" })

    } catch (error) {
      return Response.status(401).send(error)
    }
  }

  async Deletar(Request: Request, Response: Response) {
    try {
      
      const { id } = Request.params

      await new PrismaClient().historicos.delete({ where: { id } })
      return Response.status(200).send({ mensagem: 'Historico Deletado com sucesso.' })

    } catch (error) {
      return Response.status(401).send(error)
    }
  }


}

export default new HistoricoController()