import React from 'react';
import './ChatbotIcon.css';

const ChatbotIcon = () => {
  const handleChatClick = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    } else {
      console.error('Tawk_API is not defined');
    }
  };

  return (
    <div className="chatbot-icon" onClick={handleChatClick}>
      
    </div>
  );
};

export default ChatbotIcon;
