import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const ChatBox = styled.div`
  background: white;
  width: 400px;
  height: 400px;
  border: 2px solid #0077cc;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  overflow-y: auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Message = styled.div`
  margin-bottom: 10px;
  padding: 8px;
  background-color: #eef6fd;
  border-radius: 5px;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 250px;
  font-size: 16px;
`;

const Botao = styled.button`
  padding: 10px 20px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #005fa3;
  }
`;

function Home() {
  const location = useLocation();
  const nick = location.state?.nick;
  const [mensagem, setAtualizaMensagem] = useState("");
  const [lista, setLista] = useState([]);
  const [socket, setSocket] = useState(null);

  const infoBot = [
    "🛒 Visite a nossa loja oficial: https://www.furia.gg/",
    "📱 Siga a FURIA nas redes sociais! Instagram: @furiagg",
    "🎯 Próxima partida: FURIA x The Mongolz — Sábado, 10 de maio de 2025, às 5h00 (AM)",
  ];

  const equipeBot = [
    "TITULARES:",
    "MOLODOY, YEKINDAR, FalleN, KSCERATO e yuurih",
    "///",
    "RESERVAS:",
    "skullz e chelo",
    "///",
    "COACH:",
    "sidde e Hepa",
  ];

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8000/ws");
    setSocket(newSocket);
    newSocket.onmessage = (event) => {
      setLista((prevListas) => [...prevListas, event.data]);
    };
    return () => newSocket.close();
  }, []);

  function mandarMensagem() {
    if (!mensagem.trim()) return;

    if (mensagem.trim() === "/bot.info") {
      infoBot.forEach((msg) => {
        setLista((prev) => [...prev, `BOT: ${msg}`]);
      });
    } else if (mensagem.trim() === "/bot.equipe") {
      equipeBot.forEach((msg) => {
        setLista((prev) => [...prev, `BOT: ${msg}`]);
      });
    } else {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(`${nick}: ${mensagem}`);
      } else {
        console.error("WebSocket ainda conectando...");
      }
    }
    setAtualizaMensagem("");
  }

  function atualizar(event) {
    setAtualizaMensagem(event.target.value);
  }

  return (
    <Container>
      <h1>SEJA BEM-VINDO AO CHAT DA FURIA, {nick}!</h1>
      <ChatBox>
        {lista.map((msg, index) => (
          <Message key={index}>{msg}</Message>
        ))}
      </ChatBox>
      <div>
        <Input
          type="text"
          value={mensagem}
          onChange={atualizar}
          placeholder="Digite sua mensagem..."
        />
        <Botao onClick={mandarMensagem}>Enviar</Botao>
      </div>
    </Container>
  );
}

export default Home;
