import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    <div>
      <input
        type="text"
        value={usuario}
        onChange={atualizar}
        placeholder="Digite seu nick"
      />
      <button onClick={mandarLogin}>Entrar</button>
    </div>
  );
}

export default Login;
