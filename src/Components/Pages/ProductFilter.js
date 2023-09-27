import styles from "./ProductFilter.module.css";
import { GiCartwheel, GiMechanicGarage, GiCarWheel } from "react-icons/gi";
import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import Spinner from "../UI/Spinner";
import NoInternet from "../UI/NoInternet";
import { v4 } from "uuid";
import Caard from "../Caard";
import Footer from "../UI/Footer";

const ProductFilter = ({filter}) => {
  const [productArray, setProductArray] = useState([]);
  const [rims, setRims] = useState([]);
  const [tyres, setTyres] = useState([]);
  const [active, setActive] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const getProductsData = async () => {
    setIsLoading(true);
    axios
      .get("https://test.muneerautomotive.co.ke/api/products/allproducts")
      .then((res) => {
        setProductArray(res.data);
        setIsLoading(false);
        setFailed(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setFailed(true);
      });
    setActive("all");
  };
  useEffect(() => {
    getProductsData();
  }, []);
  const FilterRims = () => {
    setRims(productArray.filter((prod) => prod.category === "rim"));
    setActive("rims");
  };
  const FilterTyres = () => {
    setTyres(productArray.filter((prod) => prod.category === "tyre"));
    setActive("tyres");
  };

  return (<>
    <Row>
      <Col xm={12} sm={12} md={4} lg={3} style={{padding:0}}>
      <div className={styles.filter}>
        <Card.Title className={styles.filterTitle}>
          <h4 className="text-center">Filter By Category</h4>
        </Card.Title>
        <div className={styles.filterBody}>
          <div className={styles.filterBodyContent}>
            <ul>
              <li onClick={getProductsData} className={`${styles.li} ${active==="all" ? styles.activeCategory : ""}`}>
                <GiMechanicGarage />
                All Products
              </li>
              <li onClick={FilterTyres} className={`${styles.li} ${active==="tyres" ? styles.activeCategory : ""}`}>
                <GiCarWheel />
                Tyre
              </li>
              <li onClick={FilterRims} className={`${styles.li} ${active==="rims" ? styles.activeCategory : ""}`}>
                <GiCartwheel />
                Rim
              </li>
            </ul>
          </div>
        </div>
        </div>
      </Col>
      <Col xm={12} sm={12} md={8} lg={9} style={{padding:0}}>
        <section>
          <div className={styles.productsTitle}>
            <h4 className={styles.center}>{active === "all" ? "All Products" : active}</h4>
          </div>
          <div className="container-flex">
            {isLoading && <Spinner />}
            {failed && <NoInternet />}
            {!isLoading && (
              <Row className={`${styles.singleProduct}`}>
                {active === "all" &&
                  productArray.map((prod) => (
                    <Col xs={5} md={3} lg={3} xxl={3} key={v4()}
                    >
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
              </Row>
            )}
          </div>
        </section>
      </Col>
    </Row>
    <Footer/>
    </>
  );
};
export default ProductFilter;
