import React from 'react';
import styles from './styles.module.css';

const ChatbotButton = () => {
  return (
    <div className={styles.chatbotButton} onClick={() => alert('Chatbot coming soon!')}>
      🤖
    </div>
  );
};

export default ChatbotButton;
