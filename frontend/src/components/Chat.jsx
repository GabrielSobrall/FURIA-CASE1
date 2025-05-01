import styled from "styled-components";

const ChatContainer = styled.div`
  padding: 20px;
  background-color: #0a0a0a;
  color: #fff;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  margin: 20px auto;
`;

function Chat() {
  return (
    <ChatContainer>
      <h2>Chat da FURIA 🐺</h2>
      <p>Vamos torcer juntos!</p>
    </ChatContainer>
  );
}

export default Chat;