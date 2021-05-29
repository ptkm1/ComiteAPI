"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotasUsuarios = void 0;
const express_1 = require("express");
const UsuarioController_1 = __importDefault(require("../controllers/UsuarioController"));
const RotasUsuarios = express_1.Router();
exports.RotasUsuarios = RotasUsuarios;
RotasUsuarios.post('/login', UsuarioController_1.default.Autenticar);
