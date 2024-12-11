import React from 'react';
import './App.css';
import ConfigurationForm from './Components/ConfigurationForm';
import ControlPanel from './Components/ControlPanel';
import LogDisplay from './Components/LogDisplay';




function App() {
  return (

      
    <div className='main'>
      <h3 className='heading'>Ticket Platform Simulation</h3>
      <ControlPanel />
        <ConfigurationForm />
        
        <LogDisplay />

      </div>
  );
}

export default App;
