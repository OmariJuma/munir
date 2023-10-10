import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./ProductUi.module.css";
import ImageModal from "./ImageModal";

const ProductUi = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Import all images from a specific folder
  function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAllImages(
    require.context(
      "../../../assets/images/car photos",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  // Function to handle image click and show modal
  const handleImageClick = (imageName) => {
    setSelectedImage(images[imageName]);
    setModalShow(true);
  };

  // Map through the keys of the images object and create an <img> element for each image
  const imageElements = Object.keys(images).map((imageName) => (
    <Col key={imageName} xs={6} md={4} lg={3}>
      <img
        src={images[imageName]}
        alt={imageName}
        className={styles.responsiveImage}
        onClick={() => handleImageClick(imageName)}
      />
    </Col>
  ));

  return (
    <section style={{margin:"5rem 0 2rem 0"}}>
      <h1>Happy Customers</h1>
      {/* Render the image elements */}
      <Row style={{ rowGap: "2rem" }}>{imageElements}</Row>

      {/* Render the ImageModal component */}
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
