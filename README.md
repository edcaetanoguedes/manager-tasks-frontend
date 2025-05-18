# 📝 Gerenciador de tarefas (Next.js)

Este é o frontend da aplicação de tarefas (To-Do List), desenvolvido com **Next.js**. Ele consome uma API Express e permite ao usuário criar e deletar tarefas.

---

## ⚙️ Tecnologias

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)

---

## 📦 Instalação

```bash
cd frontend
npm install
````

---

## 🚀 Executando o projeto

Certifique-se de que o backend esteja rodando em `http://localhost:4000`.

Depois, execute o frontend:

```bash
npm run dev
```

Acesse o app em: [http://localhost:3000](http://localhost:3000)
---

## ✨ Funcionalidades

* ✅ Listar tarefas existentes
* ➕ Criar novas tarefas
* ❌ Deletar tarefas individualmente

---

## 🔁 Fluxo de dados

1. A página inicial (`pages/index.js`) busca tarefas do backend via API REST.
2. Cada tarefa é renderizada usando o componente `TaskItem`.
3. Ao clicar em "Deletar", o frontend faz uma requisição para a API e atualiza a lista.

---

## 🧪 Testes de Regressão

Este frontend é testado com **Cypress**, garantindo que a criação e exclusão de tarefas continue funcionando corretamente após alterações no código.

---

## 📄 Licença

Projeto de exemplo para estudo de testes de regressão com frontend + backend.

