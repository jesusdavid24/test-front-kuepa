import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import formatWords from '../../utils/formatWords';
import './index.scss';

const Chat = () => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io(`${import.meta.env.VITE_BASE_URL_SOCKET}`);
    const userName = formatWords(`${localStorage.getItem('name')} ${localStorage.getItem('role')}`)
    
    socket.current.on("message", (data) => {
      const currentTime = new Date().toLocaleTimeString();
      setMessages(prevMessages => [...prevMessages, {
        user: userName,
        text: data.message,
        time: currentTime
      }]);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const socket = io(`${import.meta.env.VITE_BASE_URL_SOCKET}`);
      socket.emit("message", newMessage);
      setNewMessage("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat">
      <div className="chat__container">
        <header>
          <h1>Kuepa Chat</h1>
        </header>
        <div className="chat__container__messages">
          {messages.map((msg, index) => (
            <div key={index} className="chat__container__messages__body">
              <div className="chat__container__messages__body__user">
                <div className="chat__container__messages__body__user__info">
                  <span>{msg.user}</span>
                  <span>{msg.time}</span>
                </div>
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat__container__send__message">
        <input 
            type="text" 
            value={newMessage} 
            onChange={(e) => setNewMessage(e.target.value)} 
            onKeyPress={handleKeyPress}
            id="message" 
          />
          <button onClick={sendMessage} id="send-message" type="button">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
