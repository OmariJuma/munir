import { Card, Col, Row } from "react-bootstrap";
import styles from "./RimGallery.module.css";
import Img from "./../../../assets/images/rims/rim06.jpeg";
import Img1 from "./../../../assets/images/rims/rim07.jpeg";
import Img2 from "./../../../assets/images/rims/rim08.jpeg";
import Img3 from "./../../../assets/images/rims/rim09.jpeg";
import Img4 from "./../../../assets/images/rims/rim10.jpeg";
import Img5 from "./../../../assets/images/rims/rim11.jpeg";
import Img6 from "./../../../assets/images/rims/rim12.jpeg";
import Img7 from "./../../../assets/images/rims/rim20.jpeg";
import Img8 from "./../../../assets/images/rims/rim02.jpeg";
import Img9 from "./../../../assets/images/rims/rim03.jpeg";
import Img10 from "./../../../assets/images/rims/rim04.jpeg";
import {FaArrowAltCircleRight} from "react-icons/fa"
import { Link } from "react-router-dom";
const RimGallery = () => {
  const sizes = [{no:12, image:Img}, {no:13, image:Img1}, {no:14, image:Img2}, {no:15, image:Img3}, {no:16, image:Img4}, {no:17, image:Img5}, {no:18, image:Img6}, {no:19, image:Img7}, {no:20, image:Img8}, {no:21, image:Img9}, {no:22, image:Img10}];
  return (
    <div className="container-fluid">
      <h3 className="text-center" style={{margin:"5rem 0 2rem 0"}}>Browse Our Rims Collection</h3>
      <Row>
        {sizes.map((size, index) => (
          <Col xs={6} sm={6} md={4} lg={3} style={{ marginBottom: "2rem" }} key={index}>
            <Link to="/products/rims">
            <Card className={styles.RimGalleryContainer}>
              <Card.Img src={size.image} alt={`Rim ${size.image}`} className={styles.img} />
              <Card.ImgOverlay className={styles.overlayContainer}>
                <Card.Title className={styles.title}>View Rim sizes {size.no} </Card.Title>
                <FaArrowAltCircleRight size={40} className={styles.goArrow}/>
              </Card.ImgOverlay>
            </Card>
          </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RimGallery;
