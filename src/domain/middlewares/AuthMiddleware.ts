import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { TokenPayload } from './ITokenPayload'



function AuthMiddleware(
  Request: Request, Response: Response, Next: NextFunction
) {

  const { authorization } = Request.headers

  if(!authorization) return Response.sendStatus(401)

  const token = authorization.replace('Bearer', '').trim()

  try {
    
    const data = jwt.verify(token, `${process.env.TOKEN_SECRET}`)

    const { id } = data as TokenPayload

    Request.idDoUsuario = id
    Response.send(id)
    return Next()
  } catch {
    return Response.sendStatus(401)
  }

}

export { AuthMiddleware }