import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express'

class RelatoriosController {

  public async ProdutividadeDiária(Request: Request, Response: Response) {

    const { Status, DataSolicitacaoInicial, DataSolicitacaoFinal, Orgao } = Request.body

    try {

      const Data = await new PrismaClient().$queryRaw`SELECT * from RG WHERE Status 
      like ${Status} and Orgao like ${Orgao} and DataDeSolicitacao between ${DataSolicitacaoInicial} 
      and ${DataSolicitacaoFinal} order by DataDeSolicitacao, NomeCompleto asc`

      Response.status(200).send(Data)

    } catch (error) {
      console.log(error)
      return Response.status(401).send(error)
    }
  }

  public async Reeimpressao(Request: Request, Response: Response) {

    const { Status, DataSolicitacaoInicial, DataSolicitacaoFinal, NomeCompleto, NomeDaMae } = Request.body


    try {

      const Data = await new PrismaClient().$queryRaw`SELECT * from RG WHERE Status 
      like ${Status} and DataDeSolicitacao between ${DataSolicitacaoInicial} and ${DataSolicitacaoFinal} order by DataDeSolicitacao, NomeCompleto asc`
      console.log(Data)
      Response.status(200).send(Data)

    } catch (error) {
      console.log(error)
      return Response.status(401).send(error)
    }
  }

  public async Agendamento(Request: Request, Response: Response) {

    const { DataDeAgendamentoInicial, DataDeAgendamentoFinal, LocalDeAgendamento } = Request.body


    try {

      const Data = await new PrismaClient().$queryRaw`SELECT * from RG  
      WHERE  LocalDeAgendamento like ${LocalDeAgendamento} and DataDeAgendamento between ${DataDeAgendamentoInicial} and ${DataDeAgendamentoFinal} order by DataDeAgendamento`
      console.log(Data)
      Response.status(200).send(Data)

    } catch (error) {
      console.log(error)
      return Response.status(401).send(error)
    }
  }

}

export default new RelatoriosController()