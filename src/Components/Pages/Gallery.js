import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import styles from "./Gallery.module.css";
import { toast } from "react-toastify";
import NoInternet from "../UI/NoInternet";
import Spinner from "../UI/Spinner";
import { FaCamera } from "react-icons/fa";
import ImageModal from "../UI/ImageGallery/ImageModal";


function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalShow(true);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const imagesToDisplay = images.slice(startIndex, endIndex);

  let count = Math.ceil(images.length / itemsPerPage);

  const buttons = () => {
    const pages = [];
    for (let i = 1; i <= count; i++) {
      pages.push(
        <Button
          key={i}
          variant={i === currentPage ? "primary" : "secondary"}
          onClick={() => {
            setCurrentPage(i);
            window.scrollTo(0, 0); // Scroll to the top when navigating to a new page
          }}
        >
          {i}
        </Button>
      );
    }
    return (
      <div className={styles.paginationButtons}>
        <Button
          variant="secondary"
          onClick={() => {
            setCurrentPage(currentPage - 1);
            window.scrollTo(0, 0); // Scroll to the top when navigating to a new page
          }}
          disabled={currentPage === 1}
        >
          Previous Page
        </Button>
        {pages}
      </div>
    );
  };

  const fetchImages = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:8080/gallery`);
      setImages(res.data?.images);
    } catch (error) {
      setError(error.message);
      toast("Error fetching images: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <Container fluid>
      {error && !loading && (
        <>
          <NoInternet />
          {/* <h3>An error has occurred: {error}</h3> */}
        </>
      )}

      {loading && !error ? (
        <Spinner/>
      ) : (
        <>
          <h1 className="mt-3">Image Gallery <span><FaCamera color="#39bce5"/></span></h1>
          <Row className={styles.overlayContainer}>
            {imagesToDisplay.map((image) => (
              <Col key={uuidv4()} xs={6} sm={6} md={4} lg={3} xl={3}>
                <Card className={styles.galleryContainer}>
                  <Card.Img
                    src={`http://localhost:8080${image.url}`}
                    alt={`Image ${image.name}`}
                    className={styles.img}
                    onClick={() => handleImageClick(`http://localhost:8080${image.url}`)}

                  />
                </Card>
              </Col>
            ))}
          </Row>
          {buttons()}
        </>
      )}
        {modalShow && (
        <ImageModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          image={selectedImage}
        />
      )}
    </Container>
  );
}

export default Gallery;
