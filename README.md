Case Técnico - Chat da FURIA - React + FastAPI
Projeto desenvolvido como parte do desafio de criar um chat interativo para os fãs do time de CS:GO da FURIA.

Tecnologias Utilizadas
React.js

Styled Components

FastAPI

Uvicorn

WebSocket (para comunicação em tempo real)

Como Rodar o Projeto
1. Clone o repositório:
bash
Copiar
Editar
git clone https://github.com/seuusuario/furia-case.git
2. Rodando o Frontend (React)
Acesse a pasta frontend/

Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o projeto:

bash
Copiar
Editar
npm start
O frontend ficará disponível em:

arduino
Copiar
Editar
http://localhost:3000
3. Rodando o Backend (FastAPI)
Acesse a pasta backend/

(Ative seu ambiente virtual, se estiver usando)

Instale as dependências:

bash
Copiar
Editar
pip install fastapi uvicorn
Inicie o servidor:

bash
Copiar
Editar
uvicorn API:app --reload
O backend ficará disponível em:

cpp
Copiar
Editar
http://127.0.0.1:8000
Comandos do Bot
Comando	Resposta
/bot.info	Envia links da Loja Oficial, Instagram da FURIA e Transmissão ao Vivo
/bot.equipe	Mostra informações sobre o time principal de CS:GO

Observação: O bot responde apenas a comandos pré-programados.

Estrutura do Projeto
bash
Copiar
Editar
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
Requisitos
Node.js (recomendado v18+)

Python 3.10 ou superior

Navegador moderno (Chrome, Edge, Firefox)

Observações
O frontend e o backend rodam em servidores separados (localhost:3000 e localhost:8000).

A comunicação entre eles é feita via WebSocket.

O bot responde somente a comandos específicos digitados pelo usuário.