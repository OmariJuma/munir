import { Card, Row, Col } from "react-bootstrap";
import styles from "./AboutUs.module.css";
import ig from "./../../assets/images/wheel1.jpeg";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Services from "../Services";
import MySwiper from "../UI/MySwiper";
import React from 'react';
import CountUp, { useCountUp } from 'react-countup';



const AboutUs = () => {
  useCountUp({
    ref: 'counter',
    end: 2000,
    enableScrollSpy: true,
    // scrollSpyDelay: 1000,
  });
  return (
    <div >
      <h1 id={styles.h1}>Our Team</h1>
      <Row className={styles.div}>
        <Col xm={12} sm={6} md={6} lg={3}>
          <Card className={styles.card}>
            <Card.Img src={ig} />
            <Card.Title className={styles.title}>CEO & Founder</Card.Title>

            <Card.Body className={styles.desc}>
              Mr. Mahmoud/ Mr. Mrefu
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
      <Services/>
      <a href="https://www.google.com/maps/place/Muneer+Auto+tyres+Limited/@-1.2799975,36.8234224,17z/data=!4m14!1m7!3m6!1s0x182f1176595e53e1:0xc94667e686bce87a!2sMuneer+Auto+tyres+Limited!8m2!3d-1.2799145!4d36.8244032!16s%2Fg%2F11sf5rs3d7!3m5!1s0x182f1176595e53e1:0xc94667e686bce87a!8m2!3d-1.2799145!4d36.8244032!16s%2Fg%2F11sf5rs3d7" target={"_blank"}>Click this link to open maps</a>

      <div className="content" style={{height:"200px",width:"100%"}}/>
      <CountUp end={100} enableScrollSpy />
      <br />
      <span id="counter" />
      <MySwiper/>
      <iframe width="100%" height="300px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1214607.453319238!2d36.19157834909392!3d0.4704920175126126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzMnMzQuNCJOIDM2wrA0NicyMS41IkU!5e0!3m2!1sen!2ske!4v1507813222660"></iframe>
    </div>
  );
};

export default AboutUs;
