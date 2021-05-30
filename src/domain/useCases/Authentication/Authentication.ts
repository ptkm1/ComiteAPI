import { Request, Response } from "express"

class Authentication {
  
  confirmToken(Request: Request, Response: Response) {
    return Response.sendStatus(200)
  }

}

export default new Authentication()