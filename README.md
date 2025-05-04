# Case Técnico - Chat da FURIA - React + FastAPI

## Projeto desenvolvido como parte do desafio de criar um chat interativo para os fãs do time de CS:GO da FURIA.

## Tecnologias Utilizadas

- React.js
- Styled Components
- FastAPI
- Uvicorn
- WebSocket

## Como Rodar o Projeto

1. _Clone o repositório:_

```bash
git clone https://github.com/GabrielSobrall/FURIA-CASE1.git
```

2.  Rodando o Backend (FastAPI)
    Acesse a pasta backend (python)

```bash
cd backend
```

(Ative seu ambiente virtual, se estiver usando)

Instale as dependências:

```bash
pip install fastapi uvicorn
```

Inicie o servidor:

```bash
uvicorn API:app --reload
```

3. Rodando o Frontend (React)
   Acesse a pasta frontend

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npm start
```

O frontend ficará disponível em: _http://localhost:3000_

# Comandos do Bot

- /bot.info Envia links da Loja Oficial, Instagram da FURIA e Data do próximo jogo 

- /bot.equipe Mostra informações sobre o time principal de CS:GO

Observação: O bot responde apenas a comandos pré-programados.

## Estrutura do Projeto

```bash
FURIA-CASE-1/
├── backend/
│   ├── API.py
│   └── __pycache__/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── Login.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   └── node_modules/
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Requisitos

- Node.js (recomendado v18+)

- Python 3.10 ou superior

- Navegador moderno (Chrome, Edge, Firefox)

## Observações

O frontend e o backend rodam em servidores separados (localhost:3000 e localhost:8000).

A comunicação entre eles é feita via WebSocket.

O bot responde somente a comandos específicos digitados pelo usuário.
