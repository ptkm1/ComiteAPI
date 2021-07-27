import { Request, Response } from "express";
import { MailtrapMailProvider } from "../../domain/useCases/SendMail/MailerController";

class SendMailController {
  private Mail = new MailtrapMailProvider();

  public async send(Request: Request, Response: Response) {
    try {
      const data = Request.body;
      //   console.log(data);

      await new MailtrapMailProvider().sendMail(data);

      Response.send(200);
    } catch (error) {
      console.log(error);
      Response.status(501);
    }
  }
}

export default new SendMailController();
