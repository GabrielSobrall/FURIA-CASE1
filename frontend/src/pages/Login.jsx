import React, { useState } from 'react';
function Login(){
    const [texto, setTexto] = useState('');

    function handleChange(event) {
      setTexto(event.target.value);
    }
  
    return (
      <div>
        <input type="text" value={texto} onChange={handleChange} placeholder="Digite seu nick" />
        <button>Entrar</button>
      </div>
    );
  }

  export default Login;
