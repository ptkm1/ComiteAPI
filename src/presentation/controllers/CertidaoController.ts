import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

class CertidaoController {
  public async Criar(Request: Request, Response: Response) {
    try {
      const data = Request.body;

      const Certidao: any = await new PrismaClient().certidao.create({
        data: data,
        include: { Coordenador: true },
      });

      delete Certidao.senha;

      return Response.status(200).send({
        mensagem: "Registrado com sucesso seu requerimento",
      });
    } catch (error) {
      console.log(error);
      return Response.status(401).send({
        mensagem: "Não foi possivel requisitar essa certidao",
      });
    }
  }

  public async ListarTodasCertidaos(Request: Request, Response: Response) {
    try {
      const Certidaos: any = await new PrismaClient().certidao.findMany();

      Certidaos.map((Certidao: any) => {
        return delete Certidao.senha;
      });

      return Response.status(200).send(Certidaos);
    } catch (error) {
      return Response.status(401).send(error);
    }
  }

  public async ListarCertidao(Request: Request, Response: Response) {
    try {
      const { id } = Request.params;

      const Certidao: any = await new PrismaClient().certidao.findUnique({
        where: { id },
      });

      delete Certidao.senha;

      return Response.status(200).send(Certidao);
    } catch (error) {
      return Response.status(401).send(error);
    }
  }

  public async AtualizarCertidao(Request: Request, Response: Response) {
    try {
      const { id } = Request.params;
      const data = Request.body;

      const Certidao = await new PrismaClient().certidao.update({
        data,
        where: { id },
      });
      return Response.status(200).send(Certidao);
    } catch (error) {
      return Response.status(401).send(error);
    }
  }

  public async DeletarCertidao(Request: Request, Response: Response) {
    try {
      const { id } = Request.params;

      await new PrismaClient().certidao.delete({ where: { id } });
      return Response.status(200).send({ mensagem: "Certidao Deletado." });
    } catch (error) {
      return Response.status(401).send(error);
    }
  }
}

export default new CertidaoController();
