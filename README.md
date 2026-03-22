# 📚 API Biblioteca

API REST desenvolvida para gerenciamento de livros, permitindo operações de cadastro, listagem, busca, atualização e remoção.

Este projeto foi desenvolvido como uma **atividade acadêmica no 3º período do curso de Análise e Desenvolvimento de Sistemas (ADS)**, com foco na prática de conceitos de backend e construção de APIs.

---

## 🚀 Funcionalidades

* Cadastrar livros
* Listar todos os livros
* Buscar livro por ID
* Atualizar livro existente
* Deletar livro
* Rota de verificação da API (`/health`)

---

## 🛠️ Tecnologias utilizadas

* Node.js
* TypeScript
* Express
* TypeORM
* SQLite
* ts-node-dev

---

## 📁 Estrutura do projeto

```bash
API-biblioteca/
├── data-source.ts
├── package.json
├── tsconfig.json
└── src/
    ├── index.ts
    ├── controllers/
    │   └── LivroController.ts
    ├── entities/
    │   └── Livro.ts
    ├── repositories/
    │   └── LivroRepository.ts
    └── routes/
        └── livroRoutes.ts
```

---

## 📖 Entidade Livro

Cada livro possui os seguintes campos:

* `id`
* `titulo`
* `autor`
* `ano`
* `editora`

Exemplo:

```json
{
  "id": 1,
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "ano": 1899,
  "editora": "Editora Exemplo"
}
```

---

## ⚙️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/kiellzz/API-biblioteca.git
cd API-biblioteca
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Rodar em modo de desenvolvimento

```bash
npm run dev
```

Servidor disponível em:

```bash
http://localhost:3000
```

---

## ▶️ Scripts disponíveis

```bash
npm run dev
```

Inicia o projeto em modo desenvolvimento.

```bash
npm run build
```

Compila o TypeScript para JavaScript.

```bash
npm start
```

Executa a versão compilada.

---

## 🩺 Rota de teste

### GET `/health`

```json
{
  "status": "ok"
}
```

---

## 📌 Endpoints

### Criar livro

**POST** `/livros`

```json
{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "ano": 1899,
  "editora": "Editora Exemplo"
}
```

---

### Listar livros

**GET** `/livros`

---

### Buscar por ID

**GET** `/livros/:id`

---

### Atualizar livro

**PUT** `/livros/:id`

---

### Deletar livro

**DELETE** `/livros/:id`

---

## 🗄️ Banco de dados

* SQLite (`database.sqlite`)
* Sincronização automática via TypeORM
