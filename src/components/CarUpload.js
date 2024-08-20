import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Dropzone = styled.div`
  border: 2px dashed #cccccc;
  padding: 20px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
`;

const ImagePreview = styled.img`
  max-width: 300px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CarUpload = ({ onSubmit }) => {
  const [file, setFile] = useState(null);
  const [carDetails, setCarDetails] = useState({
    model: '',
    year: '',
    price: '',
  });

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleChange = (e) => {
    setCarDetails({
      ...carDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onSubmit({ ...carDetails, image: URL.createObjectURL(file) });
      setFile(null);
      setCarDetails({ model: '', year: '', price: '' });
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Container>
      <Dropzone {...getRootProps()}>
        <input {...getInputProps()} />
        {file ? (
          <ImagePreview src={URL.createObjectURL(file)} alt="Car preview" />
        ) : (
          <p>Drag 'n' drop a car image here, or click to select one</p>
        )}
      </Dropzone>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="model"
          placeholder="Model"
          value={carDetails.model}
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          name="year"
          placeholder="Year"
          value={carDetails.year}
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          name="price"
          placeholder="Price"
          value={carDetails.price}
          onChange={handleChange}
          required
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default CarUpload;
