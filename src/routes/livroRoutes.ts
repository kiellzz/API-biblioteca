import { Router } from "express";
import { LivroController } from "../controllers/LivroController";

const routes = Router();
const livroController = new LivroController();

routes.post("/livros", (req, res) => livroController.criar(req, res));
routes.get("/livros", (req, res) => livroController.listarTodos(req, res));
routes.get("/livros/:id", (req, res) => livroController.buscarPorId(req, res));
routes.put("/livros/:id", (req, res) => livroController.atualizar(req, res));
routes.delete("/livros/:id", (req, res) => livroController.deletar(req, res));

export default routes;
