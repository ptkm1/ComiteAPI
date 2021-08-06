import { Request, Response } from "express";
import { MailtrapMailProvider } from "../../domain/useCases/SendMail/MailerController";
import { IMessage } from "../../domain/useCases/SendMail/Props";

class SendMailController {
  private Mail = new MailtrapMailProvider();

  public async send(Request: Request, Response: Response) {
    try {
      const data = Request.body;
      console.log(data);

      const Mail: IMessage = {
        to: {
          name: data.EmailDoSolicitante.split(".")[0],
          email: data.EmailDoSolicitante,
        },
        from: {
          name: data.Orgao,
          email: "sande@identidadedoc.online",
        },
        subject: "Resposta de Solicitação de dados",
        body: `
        <div style="display: flex;">
        <img style="width: 100px;" src="https://sisrg.vercel.app/static/media/logo.aa6e7f41.svg" />
        </div>
        <br />
        <br />
        <h1>Resposta de Solicitação de dados</h1>
               <ul>
                <li>Distrito: ${data.Distrito}</li>
                <li>Comarca: ${data.Comarca}</li>
                <li>Livro: ${data.Livro}</li>
                <li>Folha: ${data.Folha}</li>
                <li>Termo: ${data.Termo}</li>
                <li>RG: ${data.RG}</li>
                <li>Resposta: ${data.Resposta}</li>
                <li>Tipo de certidão: ${data.TipoDeCertidao}</li>
                <li>Observação: ${data.Observacao}</li>
                <li>Distrito: ${data.Distrito}</li>
                <li>EmailDoSolicitante: ${data.EmailDoSolicitante} </li>
                <li>EstadoDeNaturalidade: ${data.EstadoDeNaturalidade} </li>
                <li>EstadoRegistro: ${data.EstadoRegistro}</li>
               </ul>
        `,
      };

      await new MailtrapMailProvider().sendMail(Mail);

      Response.send(200);
    } catch (error) {
      console.log(error);
      Response.status(501);
    }
  }
}

export default new SendMailController();
