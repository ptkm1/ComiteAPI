import { Router } from "express";
import { AuthMiddleware } from "../../domain/middlewares/AuthMiddleware";
import Authentication from "../../domain/useCases/Authentication/Authentication";
import AdminController from "../controllers/AdminController";
import CertidaoController from "../controllers/CertidaoController";
import HistoricoController from "../controllers/HistoricoController";
import HoraController from "../controllers/HoraController";
import HorariosController from "../controllers/HorariosController";
import PostosController from "../controllers/PostosController";
import RelatoriosController from "../controllers/RelatoriosController";
import RGController from "../controllers/RGController";
import SendMailController from "../controllers/SendMailController";
import StatusController from "../controllers/StatusController";
import UsuarioController from "../controllers/UsuarioController";

const AdminRoutes = Router();

/*
 * Usuarios
 */
AdminRoutes.get(
  "/usuarios",
  // AuthMiddleware,
  UsuarioController.ListarTodosUsuarios
);
AdminRoutes.get(
  "/usuarios/:id",
  // AuthMiddleware,
  UsuarioController.ListarUsuario
);
AdminRoutes.post("/usuarios", AuthMiddleware, UsuarioController.Criar);
AdminRoutes.patch(
  "/usuarios/:id",
  AuthMiddleware,
  UsuarioController.AtualizarUsuario
);
AdminRoutes.delete(
  "/usuarios/:id",
  AuthMiddleware,
  UsuarioController.DeletarUsuario
);

/*
 * Postos
 */
AdminRoutes.get("/posto", AuthMiddleware, PostosController.ListarTodosPostos);
AdminRoutes.get("/postos/:id", AuthMiddleware, PostosController.ListarPosto);
AdminRoutes.post("/postos", AuthMiddleware, PostosController.Criar);
AdminRoutes.put("/postos/:id", AuthMiddleware, PostosController.AtualizarPosto);
AdminRoutes.delete(
  "/postos/:id",
  AuthMiddleware,
  PostosController.DeletarPosto
);

/**
 * Cadastro de RG
 */
AdminRoutes.get("/rg", RGController.Listar);
AdminRoutes.post("/rgs", RGController.ListPage);
AdminRoutes.get("/rg/:id", RGController.ListarRegistro);
AdminRoutes.post("/rg", RGController.Criar);
AdminRoutes.put("/rg/:id", RGController.Atualizar);
AdminRoutes.delete("/rg/:id", RGController.Deletar);

/**
 * Históricos de usuarios
 */
AdminRoutes.get("/historicos", HistoricoController.Listar);
AdminRoutes.get(
  "/historicos/:id",
  HistoricoController.ListarHistoricoDeUsuario
);
AdminRoutes.post("/historicos", HistoricoController.Criar);
AdminRoutes.delete("/historicos/:id", HistoricoController.Deletar);

/**
 * Administrador
 */
AdminRoutes.post("/admin/login", AdminController.Autenticar);
AdminRoutes.get(
  "/admin",
  AuthMiddleware,
  AdminController.ListarTodosAdministradores
);
AdminRoutes.get("/admin/:id", AdminController.ListarAdmin);
AdminRoutes.post("/admin", AdminController.Criar);
AdminRoutes.put("/admin/:id", AdminController.AtualizarAdministrador);
AdminRoutes.delete("/admin/:id", AdminController.DeletarUsuario);

/**
 * Certidao
 */
AdminRoutes.post("/certidaos", AuthMiddleware, CertidaoController.Criar);
AdminRoutes.get(
  "/certidaos",
  AuthMiddleware,
  CertidaoController.ListarTodasCertidaos
);
AdminRoutes.get(
  "/certidaos/:id",
  AuthMiddleware,
  CertidaoController.ListarCertidao
);
AdminRoutes.put(
  "/certidaos/:id",
  AuthMiddleware,
  CertidaoController.AtualizarCertidao
);
AdminRoutes.delete(
  "/certidaos/:id",
  AuthMiddleware,
  CertidaoController.DeletarCertidao
);

/**
 * Horarios
 */
AdminRoutes.post("/horarios", HorariosController.Criar);
AdminRoutes.get("/horarios", HorariosController.ListarTodosHorarios);
AdminRoutes.get("/horarios/:id", HorariosController.ListarHorario);
AdminRoutes.put("/horarios/:id", HorariosController.AtualizarHorario);
AdminRoutes.delete("/horarios/:id", HorariosController.DeletarHorario);

/**
 * Status
 */
AdminRoutes.post("/status", StatusController.Criar);
AdminRoutes.get("/status", StatusController.ListarTodosStatus);
AdminRoutes.put("/status/:id", StatusController.AtualizarStatus);
AdminRoutes.delete("/status/:id", StatusController.DeletarStatus);

/**
 * Relatorios
 */
AdminRoutes.post(
  "/relatorios/produtividadediaria",
  RelatoriosController.ProdutividadeDiária
);
AdminRoutes.post("/relatorios/reeimpressao", RelatoriosController.Reeimpressao);
AdminRoutes.post("/relatorios/agendamento", RelatoriosController.Agendamento);

// Horas
AdminRoutes.post("/horaposto", HoraController.ListarHorasPorPosto);
AdminRoutes.get("/horaposto/:Posto", HoraController.ListarDatas);
AdminRoutes.get("/horas-geral", HoraController.ListarTodosHora);
AdminRoutes.put("/horas/marcar", HoraController.MarcarHora);

AdminRoutes.post("/sendmail", SendMailController.send);

AdminRoutes.get("/logged", AuthMiddleware);

export { AdminRoutes };
