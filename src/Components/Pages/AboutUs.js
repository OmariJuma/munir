import { Card, Row, Col } from "react-bootstrap";
import styles from "./AboutUs.module.css";
import ig from "./../../assets/images/wheel1.jpeg";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Services from "../Services";
import MySwiper from "../UI/MySwiper";
import Counter from "../UI/Counter";
import { CountUp } from 'https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.js'

function countStart(){
  const $counters = document.querySelectorAll(".js-count-up"),
        options = {
          useEasing: true,
          useGrouping: true,
          separator: ",",
          decimal: "."
        };

  $counters.forEach( (item) => {
    const value = item.dataset.value;
    const counter = new CountUp(item, value, options);
    counter.start();
  });
}
const Waypoint=()=>{}
new Waypoint({
  element: document.querySelector('.level'),
  handler: function() {
    countStart()
    //this.destroy() //for once
  },
  offset: '50%'
});

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
      <MySwiper/>
      <Counter/>
    </div>
  );
};

export default AboutUs;
