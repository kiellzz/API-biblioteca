import { Request, Response } from "express";
import { LivroRepository } from "../repositories/LivroRepository";

export class LivroController {
  async criar(req: Request, res: Response) {
    try {
      const { titulo, autor, ano, editora } = req.body;

      const livro = LivroRepository.create({
        titulo,
        autor,
        ano,
        editora,
      });

      await LivroRepository.save(livro);

      return res.status(201).json(livro);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao criar livro." });
    }
  }

  async listarTodos(req: Request, res: Response) {
    const livros = await LivroRepository.find();
    return res.json(livros);
  }

  async buscarPorId(req: Request, res: Response) {
    const { id } = req.params;
    const livro = await LivroRepository.findOneBy({ id: Number(id) });

    if (!livro) {
      return res.status(404).json({ erro: "Livro não encontrado." });
    }

    return res.json(livro);
  }

  async atualizar(req: Request, res: Response) {
    const { id } = req.params;
    const { titulo, autor, ano, editora } = req.body;

    const livro = await LivroRepository.findOneBy({ id: Number(id) });

    if (!livro) {
      return res.status(404).json({ erro: "Livro não encontrado." });
    }

    livro.titulo = titulo;
    livro.autor = autor;
    livro.ano = ano;
    livro.editora = editora;

    await LivroRepository.save(livro);

    return res.json(livro);
  }

  async deletar(req: Request, res: Response) {
    const { id } = req.params;

    const livro = await LivroRepository.findOneBy({ id: Number(id) });

    if (!livro) {
      return res.status(404).json({ erro: "Livro não encontrado." });
    }

    await LivroRepository.remove(livro);

    return res.json({ mensagem: "Livro deletado com sucesso!" });
  }
}
