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
import { useParams } from "react-router";

const BeforeAfter = () => {
  const b4Naft = [
    { id: uuidv4(), a: a1, b: b1, brand: "mazda" },
    { id: uuidv4(), a: a2, b: b2, brand: "Land Cruiser" },
    { id: uuidv4(), a: a3, b: b3, brand: "Toyota" },
    { id: uuidv4(), a: a4, b: b4, brand: "Toyota" },
    { id: uuidv4(), a: a5, b: b5, brand: "Nissan" },
    { id: uuidv4(), a: a6, b: b6, brand: "Toyota" },
    { id: uuidv4(), a: a7, b: b7, brand: "Nissan" },
    { id: uuidv4(), a: a8, b: b8, brand: "Mercedes Benz" },
  ];
  const param = useParams();
  const filtered = b4Naft.filter((val) => val.brand === param.id);
  const displayFiltered = () => {
    if (filtered.length === 0) {
      return <p className={styles.h1None}>Apologies, we have no images for {param.id} but you can check the images from other car brands</p>;
    } else {
      return (
        <>
          {" "}
          <h1 className={styles.h1}>Welcome to our Gallery</h1>
          <hr className={styles.hr} />
          <p className={styles.strong}>
            Below is a gallery of our clients' {param.id} vehicles before and after coming
            to us
          </p>
          <Row style={{ marginTop: "2rem" }}>
            {filtered.map((vals) => (
              <>
                <Col
                  sm={12}
                  md={6}
                  lg={3}
                  xl={3}
                  key={vals.id}
                  className={styles.myContainer}
                >
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
                <Col
                  sm={12}
                  md={6}
                  lg={3}
                  xl={3}
                  className={styles.myContainer}
                >
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
        </>
      );
    }
  };
  return (
    <>
      <div className="container">{displayFiltered()}</div>
      <Footer />
    </>
  );
};
export default BeforeAfter;
