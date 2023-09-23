import React from "react";
import Audi from "../../assets/images/carLogos/Audi.png";
import BMW from "../../assets/images/carLogos/BMW.png";
import Chevrolet from "../../assets/images/carLogos/Chevrolet.png";
import Honda from "../../assets/images/carLogos/Honda.png";
import Hyundai from "../../assets/images/carLogos/Hyundai.png";
import Jeep from "../../assets/images/carLogos/Jeep.png";
import LandRover from "../../assets/images/carLogos/LandRover.png";
import Lexus from "../../assets/images/carLogos/Lexus.png";
import Mazda from "../../assets/images/carLogos/Mazda.png";
import Mercedesbenz from "../../assets/images/carLogos/Mercedesbenz.png";
import Mitsubishi from "../../assets/images/carLogos/Mitsubishi.png";
import Nissan from "../../assets/images/carLogos/Nissan.jpg";
import Porsche from "../../assets/images/carLogos/Porsche.png";
import Subaru from "../../assets/images/carLogos/Subaru.png";
import Suzuki from "../../assets/images/carLogos/Suzuki.png";
import Tata from "../../assets/images/carLogos/Tata.png";
import Toyota from "../../assets/images/carLogos/Toyota.png";
import Volkswagen from "../../assets/images/carLogos/Volkswagen.png";
import Volvo from "../../assets/images/carLogos/Volvo.png";
import { Card, Row, Col } from "react-bootstrap";
import styles from "./BeforeAfter.module.css";
import styles2 from "./GalleryMenu.module.css";
import { Link } from "react-router-dom";

const GalleryMenu = () => {
  const carBrands = [
    { name: "Audi", image: Audi },
    { name: "BMW", image: BMW },
    { name: "Chevrolet", image: Chevrolet },
    { name: "Honda", image: Honda },
    { name: "Hyundai", image: Hyundai },
    { name: "Jeep", image: Jeep },
    { name: "Land Rover", image: LandRover },
    { name: "Lexus", image: Lexus },
    { name: "Mazda", image: Mazda },
    { name: "Mercedes Benz", image: Mercedesbenz },
    { name: "Mitsubishi", image: Mitsubishi },
    { name: "Nissan", image: Nissan },
    { name: "Porsche", image: Porsche },
    { name: "Subaru", image: Subaru },
    { name: "Suzuki", image: Suzuki },
    { name: "Tata", image: Tata },
    { name: "Toyota", image: Toyota },
    { name: "Volkswagen", image: Volkswagen },
    { name: "Volvo", image: Volvo },
  ];
  return (
    <>
      <Row className="container" style={{ margin: "auto", marginTop: "2rem" }}>
        {carBrands.map((brand) => (
          <Col sm={6} md={6} lg={4} xl={3} className={styles.myContainer}>
            <Link to={`${"/beforeAfter/"}${brand.name}`}>
              <Card className={styles2.card}>
                <Card.Img
                  src={brand.image}
                  alt={brand.name}
                  className={`${styles.image} ${styles2.image}`}
                />
                <Card.Body className={styles2.body}>
                  <Card.Title className={styles.title}>{brand.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default GalleryMenu;
// import Image from "../../assets/images/carLogos"
// const importAllImages = (r) => {
//     return r.keys().map((fileName) => ({
//       fileName,
//       imageUrl: r(fileName).default,
//     }));
//   };

//   // Import all images from the "images" directory
//   const images = importAllImages(
//     require.context("../../assets/images/carLogos", false, /\.(png|jpe?g|svg)$/)
//   );
//   console.log(images)
//   const GalleryMenu = ()=> {
//     return (
//       <div>
//         <h1>Image Gallery</h1>
//         <div className="image-list">
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={"../../assets/images/carLogos"+image.fileName.slice(0)}
//               alt={image.imageUrl}
//               className="gallery-image"
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }
