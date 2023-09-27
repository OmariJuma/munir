import styles from "./ProductFilter.module.css";
import { GiCartwheel, GiCarWheel } from "react-icons/gi";
import { useState, useEffect } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import axios from "axios";
import Spinner from "../UI/Spinner";
import NoInternet from "../UI/NoInternet";
import { v4 } from "uuid";
import Caard from "../Caard";
import Footer from "../UI/Footer";
import uuid from "react-uuid";

const ProductFilter = ({ filter }) => {
  const [rims, setRims] = useState([]);
  const [tyres, setTyres] = useState([]);
  const [active, setActive] = useState("tyres");
  const [isLoading, setIsLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const getTyres = async () => {
    setIsLoading(true);
    axios
      .get(
        "https://test.muneerautomotive.co.ke/api/products/getProductsInOneCategory/tyre"
      )
      .then((res) => {
        setTyres(res.data);
        setIsLoading(false);
        setFailed(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setFailed(true);
      });
    setActive("tyres");
  };
  const getRims = async () => {
    setIsLoading(true);
    axios
      .get(
        "https://test.muneerautomotive.co.ke/api/products/getProductsInOneCategory/rim"
      )
      .then((res) => {
        setRims(res.data);
        setIsLoading(false);
        setFailed(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setFailed(true);
      });
    setActive("rims");
  };
  useEffect(() => {
    getTyres();
    getRims();
  }, []);
  const [mySize, setMySize] = useState("")
  const [myWidth, setMyWidth] = useState("")
  const [myRatio, setMyRatio] = useState("")
  const size = [12,13,14,15,16,17,18,19,20,21,22]
  const width = [155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315]
  const ratio = [10.5, 30, 35,40,45,50,55,60,65,70,75,80,85]
  

  return (
    <>
      <Row>
        <Col xm={12} sm={12} md={4} lg={3} style={{ padding: 0 }}>
          <div className={styles.filter}>
            <Card.Title className={styles.filterTitle}>
              <h4 className="text-center">Filter {active}</h4>
            </Card.Title>
            <div className={styles.filterBody}>
              <div className={styles.filterBodyContent}>
              <Form.Group className="mb-3" controlId="filterBySize">
                <Form.Label>Select {active} Dimension</Form.Label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="size"
                  value={myWidth}
                  onChange={(e)=>setMyWidth(e.target.value)}
                >
                  <option value="">Select Size</option>
                  {width.map((eachSize) => (
                    <option key={uuid()} value={eachSize}>
                      {eachSize}
                    </option>
                  ))}
                </select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="filterBySize">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="size"
                  value={myRatio}
                  onChange={(e)=>setMyRatio(e.target.value)}
                >
                  <option value="">Select Ratio</option>
                  {ratio.map((eachSize) => (
                    <option key={uuid()} value={eachSize}>
                      {eachSize}
                    </option>
                  ))}
                </select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="filterBySize">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="size"
                  value={mySize}
                  onChange={(e)=>setMySize(e.target.value)}
                >
                  <option value="">Select Width</option>
                  {size.map((eachSize) => (
                    <option key={uuid()} value={eachSize}>
                      {eachSize}
                    </option>
                  ))}
                </select>
              </Form.Group>
              </div>
            </div>
          </div>
        </Col>
        <Col xm={12} sm={12} md={8} lg={9} style={{ padding: 0 }}>
          <section>
            <div
              className={`${styles.filterBody}${" "}${styles.productsTitle}`}
            >
              <div className={styles.filterBodyContent}>
                <ul>
                  <li
                    onClick={() => setActive("rims")}
                    className={`${styles.li} ${
                      active === "rims" ? styles.activeCategory : ""
                    }`}
                  >
                    <GiCartwheel />
                    Rim
                  </li>
                  <li
                    onClick={() => setActive("tyres")}
                    className={`${styles.li} ${
                      active === "tyres" ? styles.activeCategory : ""
                    }`}
                  >
                    <GiCarWheel />
                    Tyre
                  </li>
                </ul>
              </div>
            </div>
            <div className="container-flex">
              {isLoading && <Spinner />}
              {failed && <NoInternet />}
              {!isLoading && (
                <Row className={`${styles.singleProduct}`}>
                  {active === "tyres" &&
                    tyres.map((prod) => (
                      <Col xs={5} md={3} lg={3} xxl={3}>
                        <div>
                          <Caard
                            key={v4()}
                            id={prod.id}
                            title={prod.name}
                            price={prod.price}
                            offer={Math.floor(1.1 * prod.price)}
                            description={prod.description}
                            image={prod.image}
                            brand={prod.brand}
                            material={prod.material}
                            units={prod.units}
                            product={true}
                          />
                        </div>
                      </Col>
                    ))}
                  {active === "rims" &&
                    rims.map((prod) => (
                      <Col xs={5} md={3} lg={3} xxl={3}>
                        <div>
                          <Caard
                            key={v4()}
                            id={prod.id}
                            title={prod.name}
                            price={prod.price}
                            offer={Math.floor(1.1 * prod.price)}
                            description={prod.description}
                            image={prod.image}
                            brand={prod.brand}
                            material={prod.material}
                            units={prod.units}
                            product={true}
                          />
                        </div>
                      </Col>
                    ))}
                </Row>
              )}
            </div>
          </section>
        </Col>
      </Row>
      <Footer />
    </>
  );
};
export default ProductFilter;
