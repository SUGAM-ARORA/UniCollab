import React, { useState } from 'react';
import { Box, Button, Input, InputGroup, InputRightElement, InputLeftAddon, VStack, Text } from "@chakra-ui/react";
import './ChatbotIcon.css';

const port = process.env.PORT || 5000;

function Chatbot() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Function to send the message to the chatbot backend
  const sendMessage = async () => {
    try {
      // Display user message in console
      console.log("User message:", message);

      // Make the API request to the chatbot backend
      const res = await fetch(`http://localhost:${port}/chatbot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }), // Send the user's message
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      // Parse and display the bot's response
      const data = await res.json();
      console.log("Bot response:", data.message);
      setResponse(data.message);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to toggle chatbot overlay
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chatbot Icon */}
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <img src="/chatbot-icon.webp" alt="Chatbot Icon" />  {/* Replace with your chatbot icon */}
      </div>

      {/* Chatbot Overlay */}
      <Box className={`chatbot-overlay ${isOpen ? 'visible' : 'hidden'}`}>
        <button className="close-btn" onClick={toggleChatbot}>
          ✕
        </button>

        <VStack spacing={4} align="stretch">
          {/* Input Group for asking the chatbot a question */}
          <InputGroup size='md'>
          <InputLeftAddon style={{ color: 'white', fontWeight: 'bold' }}>ASK:</InputLeftAddon>
            <Input
              value={message}
              variant='flushed'
              placeholder='Ask a doubt!'
              onChange={(e) => setMessage(e.target.value)}
            />
            <InputRightElement width='4rem'>
              <Button onClick={sendMessage} style={{ color: 'white', marginTop: '10px', marginLeft: '-20px' }}>
                Send
              </Button>
            </InputRightElement>
          </InputGroup>

          {/* Display the chatbot's response */}
          {response && (
            <Box mt="2" p="3" bg="gray.50" borderRadius="md" shadow="sm">
              {response.split('\n').map((line, index) => (
                <Text key={index}>{line}</Text>
              ))}
            </Box>
          )}
        </VStack>
      </Box>
    </>
  );
}

export default Chatbot;