from fastapi import FastAPI, WebSocket
from fastapi.responses import HTMLResponse
import asyncio
import random

app = FastAPI()

conexoes = []

usuarios_fake = ["G0dAWP", "Aline75", "LOBOzinh0", "$oneca", "Spider007"]
mensagens_fake = ["E aí, galera!", "Vamos jogar!", "Que partida insana!", "Alguém online?", "Boa noite, pessoal!", "Quem vem x1?", "VAMOS FURIA!"]

@app.get("/", response_class=HTMLResponse)
async def root():
    return """
    <html>
        <head>
            <title>Furia-Case11 - WebSocket Test</title>
        </head>
        <body>
            <h1>Servidor WebSocket da Furia-Case11 está online!</h1>
            <p>Conecte um cliente WebSocket em <code>wss://furia-case1.onrender.com/ws</code>.</p>
        </body>
    </html>
    """

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    conexoes.append(websocket)

    try:
        while True:
            data = await websocket.receive_text()
            
            for conn in conexoes:
                await conn.send_text(data)
    except:
        conexoes.remove(websocket)

async def enviar_mensagens_aleatorias():
    while True:
        await asyncio.sleep(random.randint(15, 30))
        if conexoes:
            usuario = random.choice(usuarios_fake)
            mensagem = random.choice(mensagens_fake)
            texto = f"{usuario}: {mensagem}"
            for conn in conexoes:
                await conn.send_text(texto)

@app.on_event("startup")
async def startup_event():
    asyncio.create_task(enviar_mensagens_aleatorias())
