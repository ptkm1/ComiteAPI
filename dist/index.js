"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const Admin_routes_1 = require("./presentation/routes/Admin.routes");
const Usuario_routes_1 = require("./presentation/routes/Usuario.routes");
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.static(`${__dirname}/documentation/public`));
app.use(Admin_routes_1.AdminRoutes);
app.use(Usuario_routes_1.RotasUsuarios);
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/documentation/public/index.html`);
});
app.listen(8080, () => console.log("Rodando!"));
