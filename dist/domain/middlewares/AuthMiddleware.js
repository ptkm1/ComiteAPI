"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function AuthMiddleware(Request, Response, Next) {
    const { authorization } = Request.headers;
    if (!authorization)
        return Response.sendStatus(401);
    const token = authorization.replace('Bearer', '').trim();
    try {
        const data = jsonwebtoken_1.default.verify(token, `${process.env.TOKEN_SECRET}`);
        const { id } = data;
        Request.idDoUsuario = id;
        return Next();
    }
    catch (_a) {
        return Response.sendStatus(401);
    }
}
exports.AuthMiddleware = AuthMiddleware;
