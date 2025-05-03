import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Titulo = styled.h1`
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
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
  ${({ disabled }) =>
    disabled &&
    `
  background-color: #ccc;
  cursor: not-allowed;
`}
`;

function Login() {
  const [usuario, setUsuario] = useState("");
  const navigate = useNavigate();

  function atualizar(event) {
    setUsuario(event.target.value);
  }

  function mandarLogin() {
    navigate("/Home", { state: { nick: usuario } });
  }

  return (
    <Container>
      <Titulo>Faça o Login</Titulo>
      <Input
        type="text"
        value={usuario}
        onChange={atualizar}
        placeholder="Digite seu nick"
      />
      <Botao onClick={mandarLogin} disabled={usuario.trim() === ""}>
        Entrar
      </Botao>
    </Container>
  );
}

export default Login;
