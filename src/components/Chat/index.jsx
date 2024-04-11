import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import './index.scss';

function Chat() {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  console.log("newMessage", newMessage);
  console.log("messages", messages);

  useEffect(() => {
    const socket = io(`${import.meta.env.VITE_BASE_URL_SOCKET}`);

    socket.on("message", (data) => {
      console.log("data: ", data.message);
      console.log("data", data.user);
      const currentTime = new Date().toLocaleTimeString();
      setMessages(prevMessages => [...prevMessages, {
        user: localStorage.getItem('name', data.user),
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
