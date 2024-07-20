import React, { useState } from 'react';
import GridContainer from './components/GridContainer';
import './App.css';

const App = () => {
  const [numParticipants, setNumParticipants] = useState(0);

  const handleInputChange = (e) => {
    const value = Math.min(Math.max(e.target.value, 0), 10); // Ensure value is between 0 and 10
    setNumParticipants(value);
  };

  const addGrid = () => {
    setNumParticipants((prev) => Math.min(prev + 1, 10));
  };

  return (
    <div className="App">
      <h1>Grid Manager</h1>
      <input
        type="number"
        value={numParticipants}
        onChange={handleInputChange}
        placeholder="Enter number of participants"
      />
      <button onClick={addGrid}>Add Grid</button>
      <GridContainer numParticipants={numParticipants} />
    </div>
  );
};

export default App;
