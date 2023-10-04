import styles from "./Products.module.css";
import "./../services.css";
import Caard from "../Caard";
import { FaArrowRight } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { v4 } from 'uuid'
import Spinner from "../UI/Spinner";
import NoInternet from "../UI/NoInternet";
// import { lazy} from "react";

const Products = () => {
  const [productArray, setProductArray] = useState([]);
  const [rims, setRims] = useState([]);
  const [tyres, setTyres] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    const getProductsData = async () => {
      setIsLoading(true);
      axios
        .get("https://test.muneerautomotive.co.ke/api/products/allproducts")
        .then((res) => {
          setProductArray(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setFailed(true)
        });
    };
        const getRims = async () => {
      axios
        .get("https://test.muneerautomotive.co.ke/api/products/getProductsInOneCategory/rim")
        .then((res) => setRims(res.data));
    };
    const getTyres = async () => {
      axios
        .get("https://test.muneerautomotive.co.ke/api/products/getProductsInOneCategory/tyre")
        .then((res) => setTyres(res.data));
    };
    getProductsData();
    getRims();
    getTyres();
  }, []);
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
          {isLoading && <Spinner/>}
          {failed && <NoInternet/>}
         {!isLoading&& <Row className={`${styles.singleProduct}`}>
            {productArray.map((prod) => (
              <Col xs={5} md={3} lg={3} xxl={3} style={{marginBottom:"2rem"}}>
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
          </Row>}
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
        {isLoading && <Spinner/>}
          {failed && <NoInternet/>}
         {!isLoading&& <Row className={`${styles.singleProduct}`}>
            {rims.map((prod) => (
              <Col xs={5} md={3} lg={3} xxl={3} style={{marginBottom:"2rem"}}>
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
          </Row>}
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
        {isLoading && <Spinner/>}
          {failed && <NoInternet/>}
         {!isLoading&& <Row className={`${styles.singleProduct}`}>
            {tyres.map((prod) => (
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
          </Row>}
        </div>
      </section>
      {/* <Footer/> */}
    </div>
  );
};

export default Products;
