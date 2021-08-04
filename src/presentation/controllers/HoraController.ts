import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

class Hora {
  public async Criar(Request: Request, Response: Response) {
    try {
      const data = Request.body;

      const Inserido = await new PrismaClient().hora.create({ data });

      return Response.status(200).send(Inserido);
    } catch (error) {
      console.log(error);
      return Response.status(401).send(error);
    }
  }

  public async ListarTodosHora(Request: Request, Response: Response) {
    try {
      const Horarios: any = await new PrismaClient().hora.findMany();

      return Response.status(200).send(Horarios);
    } catch (error) {
      console.log(error);
      return Response.status(401).send(error);
    }
  }

  public async ListarHorasPorPosto(Request: Request, Response: Response) {
    const { Data, Posto } = Request.body;

    try {
      const Horarios: any = await new PrismaClient()
        .$queryRaw`SELECT DISTINCT * FROM Hora WHERE posto = ${Posto}
        AND data>${new Date(Data).getDate()} AND marcado = "" ORDER BY data`;
      console.log(Horarios);
      return Response.status(200).send(Horarios);
    } catch (error) {
      console.log(error);
      return Response.status(401).send(error);
    }
  }

  public async ListarDatas(Request: Request, Response: Response) {
    const { Posto } = Request.params;

    try {
      const Datas: any = await new PrismaClient().hora.findMany({
        where: { posto: Posto },
        select: { posto: true, data: true },
      });

      return Response.status(200).send(Datas);
    } catch (error) {
      console.log(error);
      return Response.status(401).send(error);
    }
  }

  public async MarcarHora(Request: Request, Response: Response) {
    const { id } = Request.body;

    try {
      const HorarioMarcado = await new PrismaClient().hora.update({
        where: {
          id,
        },
        data: {
          marcado: "sim",
        },
      });

      return Response.status(200).send({ mensagem: "Horario marcado!" });
    } catch (error) {
      return Response.status(401).send(error);
    }
  }
}

export default new Hora();
