console.log(">>>> INICIANDO INDEX.TS <<<<");

import "reflect-metadata";
import express from "express";
import { AppDataSource } from "../data-source";
import livroRoutes from "./routes/livroRoutes";

const app = express();
app.use(express.json());
app.use(livroRoutes);


// Rota de teste
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Inicializa o banco e só depois inicia o servidor
AppDataSource.initialize()
  .then(() => {
    console.log("🟢 Banco conectado com sucesso!");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Erro ao conectar no banco:", error);
  });


