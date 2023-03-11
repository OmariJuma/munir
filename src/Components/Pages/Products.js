import styles from "./Products.module.css";
import "./../services.css";
import Caard from "../Caard";
import { FaArrowRight } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [productArray, setProductArray] = useState([]);
  const [rims, setRims] = useState([]);
  const [tyres, setTyres] = useState([]);
  const [details, setDetails] = useState(false);
  useEffect(() => {
      const getProductsData = async () => {
        axios.get('http://localhost:8080/api/products/allproducts')
        .then((res)=>console.log(setProductArray(res.data)))
          
      }
      const getRims = async () => {
        axios.get('http://localhost:8080/api/products/getProductsInOneCategory/rim')
        .then((res)=>console.log(setRims(res.data)))
          
      }
      const getTyres = async () => {
        axios.get('http://localhost:8080/api/products/getProductsInOneCategory/tyre')
        .then((res)=>console.log(setTyres(res.data)))
          
      }
      getProductsData()
      getRims()
      getTyres()


  }, []);
  const clickHandler = () => {
    setDetails(true);
  };
  return (
    <div>
      <section>
        <div className={styles.productsTitle}>
          <h4 className="text-center">Rims and Tyres</h4>
          <Link to="/products" style={{ textAlign: "right" }}>
            See more
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </div>
        <div className="container-flex">
          <Row className={`${styles.singleProduct}`}>
            {productArray.map((prod) => (
              <Col xs={5} md={3} lg={3} xxl={3}>
                <div onClick={clickHandler}>
                  <Caard
                    key={prod.id}
                    id={prod.id}
                    title={prod.name}
                    price={prod.price}
                    offer={1.1*prod.price}
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
        </div>
      </section>
      <section>
        <div className={styles.productsTitle}>
          <h4 className="text-center">Rims</h4>
          <Link to="/products/rims" style={{ textAlign: "right" }}>
            See more
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </div>
        <div className="container-flex">
          <Row className={`${styles.singleProduct}`}>
            {rims.map((prod) => (
              <Col xs={5} md={3} lg={3} xxl={3}>
                <Caard
                    key={prod.id}
                    id={prod.id}
                    title={prod.name}
                    price={prod.price}
                    offer={1.1*prod.price}
                    description={prod.description}
                    image={prod.image}
                    brand={prod.brand}
                    material={prod.material}
                    units={prod.units}
                    product={true}
                />
              </Col>
            ))}
          </Row>
        </div>
      </section>
      <section>
        <div className={styles.productsTitle}>
          <h4 className="text-center">Tyres</h4>
          <Link to="/products/tyres" style={{ textAlign: "right" }}>
            See more
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </div>
        <div className="container-flex">
          <Row className={`${styles.singleProduct}`}>
            {tyres.map((prod) => (
              <Col xs={5} md={3} lg={3} xxl={3}>
                <Caard
                    key={prod.id}
                    id={prod.id}
                    title={prod.name}
                    price={prod.price}
                    offer={1.1*prod.price}
                    description={prod.description}
                    image={prod.image}
                    brand={prod.brand}
                    material={prod.material}
                    units={prod.units}
                    product={true}
                />
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Products;
