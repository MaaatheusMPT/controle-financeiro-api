# 💰 API RESTful de Controle Financeiro Pessoal

API desenvolvida em **NestJS** e **MongoDB Atlas** para gestão de finanças pessoais, permitindo o registro de receitas e despesas, classificação de consumo consciente e cálculo automatizado de métricas financeiras em tempo real.

---

## 🚀 Tecnologias Utilizadas

* **Framework:** NestJS
* **Linguagem:** TypeScript
* **Banco de Dados:** MongoDB Atlas (Nuvem) via Mongoose
* **Validação de Dados:** Class-Validator & Class-Transformer
* **Testes de API:** Thunder Client / Postman

---

## 📌 Funcionalidades

- **`POST /transacoes`**: Cadastra uma nova transação (receita ou despesa) com validação de campos obrigatórios.
- **`GET /transacoes`**: Retorna o histórico completo de transações e calcula automaticamente:
  - **Saldo Total**: Diferença entre o total de receitas e despesas.
  - **Total de Despesas**: Soma de todas as despesas registradas.
  - **Gasto por Impulso**: Soma das despesas marcadas como não conscientes (`consumoConsciente: false`).

---

## 📋 Estrutura da Transação (DTO)

```json
{
  "descricao": "Compras do Mês",
  "valor": 250.00,
  "tipo": "despesa",
  "categoria": "Alimentação",
  "consumoConsciente": true
}

📊 Exemplo de Resposta do Histórico + Métricas (GET /transacoes)

{
  "historico": [
    {
      "_id": "6aecc31465499041b6d173ab",
      "descricao": "Compras do Mês",
      "valor": 250,
      "tipo": "despesa",
      "categoria": "Alimentação",
      "consumoConsciente": true
    }
  ],
  "metricas": {
    "saldoTotal": -250,
    "totalDespesas": 250,
    "totalGastoImpulso": 0
  }
}

⚙️ Como Executar o Projeto Localmente

Clone o repositório:
git clone [https://github.com/MaaatheusMPT/controle-financeiro-api.git](https://github.com/MaaatheusMPT/controle-financeiro-api.git)

Entre na pasta do projeto:
cd controle-financeiro-api

Instale as dependências:
npm install

Inicie a aplicação:
npm run start:dev

A API estará disponível em http://localhost:3000.

👨‍💻 Autor
Desenvolvido por Matheus Martins Pereira Tonus.
