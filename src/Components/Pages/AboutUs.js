import { Card, Row, Col } from "react-bootstrap";
import styles from "./AboutUs.module.css";
import ig from "./../../assets/images/wheel1.jpeg";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div >
      <h1 id={styles.h1}>Our Team</h1>
      <Row className={styles.div}>
        <Col xm={12} sm={6} md={6} lg={3}>
          <Card className={styles.card}>
            <Card.Img src={ig} />
            <Card.Title className={styles.title}>CEO & Founder</Card.Title>

            <Card.Body className={styles.desc}>
              Mr. Mahmoud/ Mr. Mrefu, the founder of Muneer Automotive
            </Card.Body>
            <Card.Footer className={styles.socials}>
              <a href="www.facebook.com" target={"_blank"}>
                <span className={styles.icon}>
                  <FaFacebook />
                </span>
              </a>
              <a href="www.tiktok.com" target={"_blank"}>
                <span className={styles.icon}>
                  <FaTiktok />
                </span>
              </a>
              <a href="www.instagram.com" target={"_blank"}>
                <span className={styles.icon}>
                  <FaInstagram />
                </span>
              </a>
            </Card.Footer>
          </Card>
        </Col>
        <Col xm={12} sm={6} md={6} lg={3}>
          <Card className={styles.card}>
            <Card.Img src={ig} />
            <Card.Title className={styles.title}>Mechanic</Card.Title>

            <Card.Body className={styles.desc}>
              Mr. John
            </Card.Body>
            <Card.Footer className={styles.socials}>
              <a href="www.facebook.com" target={"_blank"}>
                <span className={styles.icon}>
                  <FaFacebook />
                </span>
              </a>
              <a href="www.tiktok.com" target={"_blank"}>
                <span className={styles.icon}>
                  <FaTiktok />
                </span>
              </a>
              <a href="www.instagram.com" target={"_blank"}>
                <span className={styles.icon}>
                  <FaInstagram />
                </span>
              </a>
            </Card.Footer>
          </Card>
        </Col>
        <Col xm={12} sm={6} md={6} lg={3}>
          <Card className={styles.card}>
            <Card.Img src={ig} />
            <Card.Title className={styles.title}>Customer Relation</Card.Title>

            <Card.Body className={styles.desc}>
                Idris
            </Card.Body>
            <Card.Footer className={styles.socials}>
              <a href="www.facebook.com" target={"_blank"}>
                <span className={styles.icon}>
                  <FaFacebook />
                </span>
              </a>
              <a href="www.tiktok.com" target={"_blank"}>
                <span className={styles.icon}>
                  <FaTiktok />
                </span>
              </a>
              <a href="www.instagram.com" target={"_blank"}>
                <span className={styles.icon}>
                  <FaInstagram />
                </span>
              </a>
            </Card.Footer>
          </Card>
        </Col>
        <Col xm={12} sm={6} md={6} lg={3}>
          <Card className={styles.card}>
            <Card.Img src={ig} />
            <Card.Title className={styles.title}>Mechanic</Card.Title>

            <Card.Body className={styles.desc}>
              Mr. Kamau
            </Card.Body>
            <Card.Footer className={styles.socials}>
              <a href="www.facebook.com" target={"_blank"}>
                <span className={styles.icon}>
                  <FaFacebook />
                </span>
              </a>
              <a href="www.tiktok.com" target={"_blank"}>
                <span className={styles.icon}>
                  <FaTiktok />
                </span>
              </a>
              <a href="www.instagram.com" target={"_blank"}>
                <span className={styles.icon}>
                  <FaInstagram />
                </span>
              </a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
