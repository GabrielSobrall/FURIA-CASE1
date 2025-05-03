import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
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

  return (
    <div>
        <h1>SEJA BEM VINDO AO CHAT DA FURIA, {nick}!</h1>
      <Input type="text" placeholder="Mensagem" />
      <Botao>Enviar</Botao>
    </div>
  );
}

export default Home;
