import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [number, setNumber] = useState(null);

  useEffect(() => {
    axios.get('/api/number')
      .then(response => {
        setNumber(response.data.number);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Numri juaj unik është: {number}</h1>
    </div>
  );
}

export default App;
