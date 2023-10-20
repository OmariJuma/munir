import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./ProductUi.module.css";
import ImageModal from "./ImageModal";
import { toast } from "react-toastify";
import axios from "axios";
import Spinner from "../Spinner";

const ProductUi = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [carImages, setCarImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to handle image click and show modal
  const handleImageClick = (imageName) => {
    setSelectedImage(imageName);
    setModalShow(true);
  };

  // Map through the keys of the images object and create an <img> element for each image
  const imageElements = carImages.map((imageName) => (
    <Col key={imageName} xs={6} md={4} lg={3}>
      <img
        src={`https://test.muneerautomotive.co.ke${imageName.url}`}
        alt={imageName.name}
        className={styles.responsiveImage}
        onClick={() =>
          handleImageClick(
            `https://test.muneerautomotive.co.ke${imageName.url}`
          )
        }
      />
    </Col>
  ));
  const getImages = async () => {
    try {
      const res = await axios.get(
        `https://test.muneerautomotive.co.ke/gallery?itemsPerPage=12&page=1`
      );
      setCarImages(res.data?.images);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast("Error fetching images: " + error.message);
      setError(error.message);
    }
  };
  useEffect(() => {
    setLoading(true);
    getImages();
  }, []);
  return (
    <section style={{ margin: "5rem 0 2rem 0" }}>
      <h1 style={{ margin: "5rem 0 2rem 0" }}>Happy Customers</h1>
      {/* Render the image elements */}
      {!loading && <Row style={{ rowGap: "2rem" }}>{imageElements}</Row>}
      {loading && !error && <Spinner />}
      {/* Render the ImageModal component */}
      {error && !loading && (
        <h4 className="text-center text-danger">
          An error has occurred: {error}, please call{" "}
          <a href="tel:0707686784">0707686784</a> or{" "}
          <a href="tel:0791567672">0791567672</a>to report this issue
        </h4>
      )}
      {modalShow && (
        <ImageModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          image={selectedImage}
        />
      )}
    </section>
  );
};

export default ProductUi;
