import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Container, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import styles from "./Gallery.module.css";
function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        //I commented the code below because I wanted to see all the images and manipulate them on the client side
        // const res = await axios.get(`http://localhost:8080/gallery?page=${currentPage}`);
        const res = await axios.get(`http://localhost:8080/gallery`);
        console.log(res.data);
        setImages(res.data?.images);
      } catch (error) {
        console.error("Error fetching images:", error);
        // You can set an error state or display an error message here.
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);
  return (
    <Container>
    <h1>Image Gallery</h1>
    {loading ? (
      <h3>Loading...</h3>
    ) : (
      <Row className={styles.overlayContainer}>
        {images.map((image) => (
          <Col key={uuidv4()} xs={6} sm={6} md={4} lg={3} xl={3}>
             <Card className={styles.galleryContainer}>
                <Card.Img
                  src={`http://localhost:8080${image.url}`}
                  alt={`Image ${image.name}`}
                    className={styles.img}
                />
              </Card>
          </Col>
        ))}
      </Row>
    )}
  </Container>
  );
}

export default Gallery;
