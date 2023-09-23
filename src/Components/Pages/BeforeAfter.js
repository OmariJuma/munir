import { Col, Card, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import a1 from "../../assets/images/before and after/a1.jpeg";
import b1 from "../../assets/images/before and after/b1.jpeg";
import a2 from "../../assets/images/before and after/a2.jpeg";
import b2 from "../../assets/images/before and after/b2.jpeg";
import a3 from "../../assets/images/before and after/a3.jpeg";
import b3 from "../../assets/images/before and after/b3.jpeg";
import a4 from "../../assets/images/before and after/a4.jpeg";
import b4 from "../../assets/images/before and after/b4.jpeg";
import a5 from "../../assets/images/before and after/a5.jpeg";
import b5 from "../../assets/images/before and after/b5.jpeg";
import a6 from "../../assets/images/before and after/a6.jpeg";
import b6 from "../../assets/images/before and after/b6.jpeg";
import a7 from "../../assets/images/before and after/a7.jpeg";
import b7 from "../../assets/images/before and after/b7.jpeg";
import a8 from "../../assets/images/before and after/a8.jpeg";
import b8 from "../../assets/images/before and after/b8.jpeg";
import styles from "./BeforeAfter.module.css";
import Footer from "../UI/Footer";

const BeforeAfter = () => {
  const b4Naft = [
    { id: uuidv4(), a: a1, b: b1 },
    { id: uuidv4(), a: a2, b: b2 },
    { id: uuidv4(), a: a3, b: b3 },
    { id: uuidv4(), a: a4, b: b4 },
    { id: uuidv4(), a: a5, b: b5 },
    { id: uuidv4(), a: a6, b: b6 },
    { id: uuidv4(), a: a7, b: b7 },
    { id: uuidv4(), a: a8, b: b8 },
  ];

  return (
    <>
      <h1 className={styles.h1}>Success Stories</h1>
      <p className={styles.strong}>
        Below is a gallery of our clients' vehicles before and after
        coming to us
      </p>
      <div className="container">
        <Row style={{ marginTop: "2rem",  }}>
          {b4Naft.map((vals) => (
            <>
              <Col sm={12} md={6} lg={3} xl={3} key={vals.id} className={styles.myContainer}>
                <Card className={styles.beforeCard}>
                  <Card.Img
                    src={vals.b}
                    className={`${styles.image} ${styles.beforeImage}`}
                    alt="before the car got new rims/ tyres"
                    />
                    <Card.Body className={styles.beforeBody}>
                    <Card.Title className={styles.title}>Before</Card.Title>
                    </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={3} xl={3} className={styles.myContainer}>
                <Card className={styles.afterCard}>

                  <Card.Img
                    src={vals.a}
                    loading="lazy"
                    className={`${styles.image} ${styles.afterImage}`}
                    alt="after the car was fitted with the rims/ tyres"
                    />
                    <Card.Body className={styles.afterBody}>
                    <Card.Title className={styles.title}>After</Card.Title>
                    </Card.Body>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </div>
      <Footer/>
    </>
  );
};
export default BeforeAfter;
