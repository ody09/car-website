import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const CarCard = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
  width: 200px;
  text-align: center;
`;

const CarImage = styled.img`
  max-width: 100%;
  margin-bottom: 10px;
`;

const CarGallery = ({ cars }) => {
  return (
    <Gallery>
      {cars.map((car, index) => (
        <CarCard key={index}>
          <CarImage src={car.image} alt={car.model} />
          <h3>{car.model}</h3>
          <p>Year: {car.year}</p>
          <p>Price: ${car.price}</p>
        </CarCard>
      ))}
    </Gallery>
  );
};

export default CarGallery;
