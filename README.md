Como rodar o projeto
Frontend (React)
Acesse a pasta frontend/

Instale as dependências:
npm install

Rode o projeto:
npm start
O frontend ficará disponível, geralmente, em http://localhost:3000/

Backend (FastAPI)
Acesse a pasta backend/

(Se necessário) ative seu ambiente virtual

Rode o servidor:
uvicorn API:app --reload
O backend ficará disponível em http://127.0.0.1:8000/

Funcionalidades do Bot
/bot.info → Envia informações sobre:
Link da Loja Oficial

Instagram da FURIA

Transmissão ao vivo

/bot.equipe → Envia informações da equipe principal do time.

Tecnologias utilizadas
Frontend: React.js + Styled Components

Backend: FastAPI + Uvicorn
Requisitos para rodar
Node.js (para o frontend)

Python 3.10+ (para o backend)

Uvicorn e FastAPI instalados:
pip install fastapi uvicorn

Observações
Certifique-se que o backend esteja rodando para o frontend conseguir se conectar corretamente.
As rotas de bot foram criadas com mensagens automáticas programadas.