import React, { useState } from 'react';
import CarUpload from './components/CarUpload';
import CarGallery from './components/CarGallery';

function App() {
  const [cars, setCars] = useState([]);

  const handleCarSubmit = (car) => {
    setCars([...cars, car]);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Car Upload</h1>
      <CarUpload onSubmit={handleCarSubmit} />
      <CarGallery cars={cars} />
    </div>
  );
}

export default App;
