import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import config from './config';
import './ChatBox.css'; // Arquivo de estilos CSS para o ChatBox

function App() {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  
  useEffect(() => {
    const Seeds = async () => {
      try {
        const response = await axios.get(config.NODE_SERVER_URL + '/halloween');
        if (response.status === 200) {
          setMessages(response.data.split('\n')); // Assume que cada mensagem está em uma nova linha
          
        }
      } catch (error) {
        console.error('Erro ao buscar mensagens:', error);
      }
    };

    Seeds();
    const intervalo = setInterval(Seeds, 10000);
    return () => clearInterval(intervalo);
  }, []);



  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="chatapp-container">
      <div className="phone">
        <div className="header">
          <h2 align='center'>This is Halloween</h2>
        </div>
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <p className="message-content">{message}</p>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
