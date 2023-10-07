import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';

const ImageGallery = () => {
  // Define image categories and their corresponding image URLs
  const categories = ['Fielder', 'Suzuki-Swift', 'Subaru'];
  const images = {
    Fielder: [
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      // Add more image URLs for the 'Nature' category
    ],
    "Suzuki-Swift": [
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      // Add more image URLs for the 'Travel' category
    ],
    Subaru: [
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      // Add more image URLs for the 'Food' category
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState('Fielder');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={3}>
          {/* Left sidebar with category links */}
          <ListGroup>
            {categories.map((category) => (
              <ListGroup.Item
                key={category}
                active={category === selectedCategory}
                onClick={() => handleCategoryChange(category)}
                action
              >
                {category}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col sm={9}>
          {/* Right-side image display */}
          <h2>Images - {selectedCategory}</h2>
          <Row>
            {images[selectedCategory].map((image, index) => (
              <Col key={index} xs={6} md={4} lg={3}>
                <Image src={image} thumbnail />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageGallery;
