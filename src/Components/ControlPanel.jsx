import React, { useState, useEffect } from 'react';
import './ControlPanel.css';

function ControlPanel() {
  const [logMessages, setLogMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const handleStart = () => {
      const newSocket = new WebSocket('ws://localhost:8080/gettickets');

      newSocket.onopen = () => {
        console.log('WebSocket connection established');
      };

      newSocket.onmessage = (event) => {
        console.log('WebSocket message received:', event.data);
        setLogMessages((prevMessages) => [...prevMessages, event.data]);
      };

      newSocket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      newSocket.onclose = () => {
        console.log('WebSocket connection closed');
      };

      setSocket(newSocket);

      const id = setInterval(() => {
        if (newSocket.readyState === WebSocket.OPEN) {
          newSocket.send('getLogs');
        }
      }, 2000); // Send 'getLogs' message every 5 seconds

      setIntervalId(id);
    };

    const handleStop = () => {
      if (socket) {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send('close');
      }
      socket.close();
      setSocket(null);
      }
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    };

    document.querySelector('.startbutton').addEventListener('click', handleStart);
    document.querySelector('.stopbutton').addEventListener('click', handleStop);

    return () => {
      if (socket) {
        socket.close();
      }
      if (intervalId) {
        clearInterval(intervalId);
      }
      document.querySelector('.startbutton').removeEventListener('click', handleStart);
      document.querySelector('.stopbutton').removeEventListener('click', handleStop);
    };
  }, [socket, intervalId]);

  return (
    <div className='control-panel'>
            <div className='log-messages'>
        {logMessages.length > 0 && (
          <div className='log-message'>{logMessages[logMessages.length - 1]}</div>
        )}
      </div>
      <div className='buttons'>
        <button className='startbutton'>Start</button>
        <button className='stopbutton'>Stop</button>
      </div>

    </div>
  );
}

export default ControlPanel;