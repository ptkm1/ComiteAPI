import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

class RGController {
  async Listar(Request: Request, Response: Response) {
    try {
      const Registros: any = await new PrismaClient().rG.findMany({
        include: {
          coordenador: { select: { id: true, nome: true, email: true } },
          Admin: { select: { id: true, nome: true, email: true } },
        },
      });

      return Response.status(200).send(Registros);
    } catch (error) {
      console.log(error);
      return Response.status(401).send(error);
    }
  }

  async ListPage(Request: Request, Response: Response) {
    const { id } = Request.body;
    try {
      const Registros: any = await new PrismaClient().rG.findMany({
        where: {
          Orgao: id,
        },
        select: {
          id: true,
          DataDeSolicitacao: true,
          NomeCompleto: true,
          Orgao: true,
          RG: true,
          Contato1: true,
          Status: true,
          LocalDeAgendamento: true,
          DataDeAgendamento: true,
          HoraDoAgendamento: true,
          coordenador: { select: { id: true, nome: true, email: true } },
        },
      });

      return Response.status(200).send(Registros);
    } catch (error) {
      return Response.status(401).send(error);
    }
  }

  async ListarRegistro(Request: Request, Response: Response) {
    try {
      const { id } = Request.params;

      const Registro: any = await new PrismaClient().rG.findUnique({
        where: { id },
        include: {
          coordenador: { select: { id: true, nome: true, email: true } },
          Admin: { select: { id: true, nome: true, email: true } },
        },
      });

      delete Registro.coordenador.senha;

      return Response.status(200).send(Registro);
    } catch (error) {
      return Response.status(401).send(error);
    }
  }

  async Criar(Request: Request, Response: Response) {
    try {
      const Dados = Request.body;

      console.log(Dados);

      const Ficha = await new PrismaClient().rG.create({
        data: Dados,
        include: {
          coordenador: { select: { id: true, nome: true, email: true } },
          Admin: { select: { id: true, nome: true, email: true } },
        },
      });

      return Response.status(200).send({ mensagem: "Cadastro Finalizado!" });
    } catch (error) {
      console.log(error);
      return Response.status(401).send(error);
    }
  }

  async Atualizar(Request: Request, Response: Response) {
    try {
      const { id } = Request.params;
      const data = Request.body;

      const Ficha = await new PrismaClient().rG.update({
        data,
        where: { id },
      });
      console.log(Ficha);
      return Response.status(200).send({
        mensagem: "Cadastro Atualizado com sucesso.",
      });
    } catch (error) {
      return Response.status(401).send(error);
    }
  }

  async Deletar(Request: Request, Response: Response) {
    try {
      const { id } = Request.params;

      await new PrismaClient().rG.delete({ where: { id } });
      return Response.status(200).send({
        mensagem: "Cadastro Deletado com sucesso.",
      });
    } catch (error) {
      return Response.status(401).send(error);
    }
  }
}

export default new RGController();
