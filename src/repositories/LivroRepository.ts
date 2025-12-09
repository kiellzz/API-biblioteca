import { AppDataSource } from "../../data-source";
import { Livro } from "../entities/Livro";
import { Repository } from "typeorm";

export const LivroRepository: Repository<Livro> =
  AppDataSource.getRepository(Livro);
