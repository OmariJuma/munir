import { Card, Row, Col } from "react-bootstrap";
import styles from "./AboutUs.module.css";
import ceo from "../../assets/images/People/Mr_Mahmoud.jpeg";
import fashion from "../../assets/images/People/fashion.jpg";
import man from "../../assets/images/People/man.avif";
import bizman from "../../assets/images/People/bizman.avif";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Services from "../Services";
import MySwiper from "../UI/MySwiper";
import React from "react";
import CountUp, { useCountUp } from "react-countup";
import C from "./../../assets/images/spanners.png";
import Map from "./../../assets/images/auto.png";
import WhyUs from "./../WhyUs";
import Testimonials from "../UI/Testimonials";
import { lazy } from "react";
import { motion } from "framer-motion";
const Footer = lazy(() => import("../UI/Footer"));

const AboutUs = () => {
  useCountUp({
    ref: "counter",
    end: 2000,
    enableScrollSpy: false,
    // scrollSpyDelay: 1000,
  });
  const personnel = [
    { position: "CEO & Founder", name: " Mr. Mrefu", image: ceo },
    { position: "Web Developer", name: "Mr. Juma", image: fashion },
    { position: "IdrisCustomer Relation", name: "Mr. Idris", image: bizman },
    { position: " Mechanic", name: "Mr. Kamau", image: man },
  ];
  return (
    <div>
      <h1 id={styles.h1}>Our Team</h1>
      <Row className={styles.div} style={{ margin: "auto" }}>
        {personnel.map((person) => (
          <Col xm={12} sm={6} md={6} lg={3}>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{delay:"0.25", ease:"easeIn"}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            >
              <Card className={styles.card}>
                <Card.Img src={person.image} />
                <Card.Title className={styles.title}>
                  {person.position}
                </Card.Title>

                <Card.Body className={styles.desc}>{person.name}</Card.Body>
                <Card.Footer className={styles.socials}>
                  <a
                    href="https://www.facebook.com"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <span className={styles.icon}>
                      <FaFacebook />
                    </span>
                  </a>
                  <a
                    href="https://www.tiktok.com"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <span className={styles.icon}>
                      <FaTiktok />
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <span className={styles.icon}>
                      <FaInstagram />
                    </span>
                  </a>
                </Card.Footer>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
      <Services />
      <WhyUs />
      <Card
        className={`${styles.overlayDiv} "bg-dark text-white text-center justify-center "`}
      >
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{delay:"0.25", ease:"easeIn"}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
          <Card.Img src={C} alt="Card image" id={styles.img} />
          <Card.ImgOverlay>
            <Col xm={12} sm={12} md={12}>
              <h4 id={styles.journey}>Its our journey</h4>
            </Col>
            <br />
            <Col xm={12} sm={12} md={12}>
              <h3>
                <CountUp end={100} enableScrollSpy />
              </h3>
              <h6>Monthly</h6>
            </Col>
            <Col xm={12} sm={12} md={12}>
              <h3>
                <CountUp end={100} enableScrollSpy />
              </h3>
              <h6>Monthly</h6>
            </Col>
            <Col xm={12} sm={12} md={12}>
              <h3>
                <CountUp end={100} enableScrollSpy />
              </h3>
              <h6>Monthly</h6>
            </Col>
            <Col xm={12} sm={12} md={12}>
              <h3>
                {" "}
                <span id="counter" />
              </h3>
              <h6>Monthly</h6>
            </Col>
          </Card.ImgOverlay>
        </motion.div>
      </Card>{" "}
      <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{delay:"0.25", ease:"easeIn"}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
      >
        <p id={styles.loc}>Find us today</p>
        <h4 id={styles.h4}>Our location</h4>
        <p id={styles.a}>We located along Kirinya Rd Next to kenya canvas</p>
        <a
          href="https://www.google.com/maps/place/Muneer+Auto+tyres+Limited/@-1.2799975,36.8234224,17z/data=!4m14!1m7!3m6!1s0x182f1176595e53e1:0xc94667e686bce87a!2sMuneer+Auto+tyres+Limited!8m2!3d-1.2799145!4d36.8244032!16s%2Fg%2F11sf5rs3d7!3m5!1s0x182f1176595e53e1:0xc94667e686bce87a!8m2!3d-1.2799145!4d36.8244032!16s%2Fg%2F11sf5rs3d7"
          target={"_blank"}
          rel="noreferrer"
        >
          <img src={Map} alt="map" id={styles.map} />
        </a>
      </motion.div>
      <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{delay:"0.25", ease:"easeIn"}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        style={{ marginTop: "4rem", marginBottom: "3rem" }}
      >
        <Testimonials />
      </motion.div>
      <MySwiper />
      <Footer />
    </div>
  );
};

export default AboutUs;
