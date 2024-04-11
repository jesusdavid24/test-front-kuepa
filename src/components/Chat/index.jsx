import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import './index.scss';

function Chat() {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io(`${import.meta.env.VITE_BASE_URL_SOCKET}`);

    socket.on("message", (data) => {
      const currentTime = new Date().toLocaleTimeString();
      setMessages(prevMessages => [...prevMessages, {
        user: `${localStorage.getItem('name')} ${localStorage.getItem('role')}`,
        text: data.message,
        time: currentTime
      }]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const socket = io(`${import.meta.env.VITE_BASE_URL_SOCKET}`);
      socket.emit("message", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-container">
      <header>
        <h1>Kuepa Chat</h1>
      </header>
      <div className="all-messages">
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
      <div className="send-message">
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} id="message" />
        <button onClick={sendMessage} id="send-message" type="button">Send</button>
      </div>
    </div>
  );
}

export default Chat;
