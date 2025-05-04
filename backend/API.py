from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


mensagens = []


conexoes_ativas = []

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    conexoes_ativas.append(websocket)

 
    for msg in mensagens:
        await websocket.send_text(msg)

    try:
        while True:
            data = await websocket.receive_text()
            mensagens.append(data)  
            for conexao in conexoes_ativas:
                await conexao.send_text(data)
    except WebSocketDisconnect:
        conexoes_ativas.remove(websocket)