import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import './index.scss';

function Chat() {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:3005');

    socket.on("message", (data) => {
      setMessages(prevMessages => [...prevMessages, {
        user: data.user,
        text: data.message,
        time: "Hace 1 segundo"
      }]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const socket = io('http://localhost:3005'); // No necesitas URL aquí, ya que estás conectándote al mismo servidor
      socket.emit("message", newMessage);
      setNewMessage("");
      // No necesitas desconectar el socket cada vez que envíes un mensaje, se desconectará automáticamente cuando el componente se desmonte
    }
  };

  return (
    <div>
      <header>
        <h1>Michi Chat</h1>
      </header>
      <div id="all-messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <div className="message-body">
              <div className="user-info">
                <span className="username">{msg.user}</span>
                <span className="time">{msg.time}</span>
              </div>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} id="message" />
        <button onClick={sendMessage} id="send-message" type="button">Send</button>
      </div>
    </div>
  );
}

export default Chat;
