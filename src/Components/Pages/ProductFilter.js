import styles from "./ProductFilter.module.css";
import { GiCartwheel, GiCarWheel } from "react-icons/gi";
import { useState, useEffect, lazy } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import axios from "axios";
import Spinner from "../UI/Spinner";
import NoInternet from "../UI/NoInternet";
import { v4 } from "uuid";
import Caard from "../Caard";
import uuid from "react-uuid";
import Nodata from "../../assets/images/animations/no data.svg";
import { useLocation, useSearchParams } from "react-router-dom";

const Footer = lazy(() => import("../UI/Footer"));

const ProductFilter = ({ filter }) => {
  const [rims, setRims] = useState([]);
  const [tyres, setTyres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [active, setActive] = useState("tyres");
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  //scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
  //States for tyres
  const [mySize, setMySize] = useState("");
  const [myWidth, setMyWidth] = useState("");
  const [myRatio, setMyRatio] = useState("");
  const [myTerrain, setMyTerrain] = useState("");
  //states for rims
  const [myOffset, setMyOffset] = useState("");
  const [myRimSize, setMyRimSize] = useState(searchParams.get("size") || "");
  const [myHoles, setMyHoles] = useState("");

  const size = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
  const width = [
    155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295,
    305, 315,
  ];
  const ratio = [10.5, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85];
  const offset = ["normal", "small-offset", "large-offset"];
  const terrain = ["All Terrain", "Highway Terrain", "Mud Terrain"];
  const holes = [4, 5, 6, 8];
  const filterTyres = (product) => {
    if (
      (!Number(mySize) || Number(product.size) === Number(mySize)) &&
      (!Number(myWidth) || Number(product.width) === Number(myWidth)) &&
      (!Number(myRatio) || Number(product.ratio) === Number(myRatio)) &&
      (!myTerrain || product.terrain === myTerrain)
    ) {
      return true;
    }
    return false;
  };

  const filterRims = (product) => {
    if (
      (!Number(myRimSize) || Number(product.size) === Number(myRimSize)) &&
      (!myOffset || product.offset === myOffset) &&
      (!Number(myHoles) || Number(product.holesNo) === Number(myHoles))
    ) {
      return true;
    }
    return false;
  };

  const filteredTyres = tyres.filter(filterTyres);
  const filteredRims = rims.filter(filterRims);
  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={4} lg={3} style={{ padding: 0 }}>
          <div className={styles.filter}>
            <div
              className={`${styles.filterBody}${" "}${styles.productsTitle}`}
            >
              <div className={styles.filterBodyContent}>
                <p> You are seeing results for</p>
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
            <Card.Title className={styles.filterTitle}>
              <h4 className="text-center">Apply Filtering on {active}</h4>
            </Card.Title>
            <div className={styles.filterBody}>
              <div className={styles.filterBodyContent}>
                {/* Drop down filters for tyres */}
                {active === "rims" && (myRimSize|| myOffset || myHoles) &&(
                  <h5 className="text-left">Price: {filteredRims[0]?.price || null}</h5>
                )}
                {active === "tyres" && (
                  <>
                    <Form.Group className="mb-3" controlId="filterBySize">
                      <Form.Label>Select {active} Dimensions</Form.Label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        name="size"
                        value={myWidth}
                        onChange={(e) => setMyWidth(e.target.value)}
                      >
                        <option value="">Select Width</option>
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
                        onChange={(e) => setMyRatio(e.target.value)}
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
                        onChange={(e) => setMySize(e.target.value)}
                      >
                        <option value="">Select Size</option>
                        {size.map((eachSize) => (
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
                        value={myTerrain}
                        onChange={(e) => setMyTerrain(e.target.value)}
                      >
                        <option value="">Select Terrain</option>
                        {terrain.map((eachSize) => (
                          <option key={uuid()} value={eachSize}>
                            {eachSize}
                          </option>
                        ))}
                      </select>
                    </Form.Group>
                  </>
                )}
                {/* Drop down filters for rims */}
                {active === "rims" && (
                  <>
                    <Form.Group className="mb-3" controlId="filterBySize">
                      <Form.Label>Select {active} Dimensions</Form.Label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        name="size"
                        value={myRimSize}
                        onChange={(e) => setMyRimSize(e.target.value)}
                      >
                        <option value="">Select rim Size</option>
                        {size.map((eachSize) => (
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
                        value={myOffset}
                        onChange={(e) => setMyOffset(e.target.value)}
                      >
                        <option value="">Select rim Offset</option>
                        {offset.map((eachSize) => (
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
                        name="holes"
                        value={myHoles}
                        onChange={(e) => setMyHoles(e.target.value)}
                      >
                        <option value="">Select rim holes</option>
                        {holes.map((eachSize) => (
                          <option key={uuid()} value={eachSize}>
                            {eachSize}
                          </option>
                        ))}
                      </select>
                    </Form.Group>
                  </>
                )}
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={8} lg={9} style={{ padding: 0 }}>
          <section>
            <div className="container-flex">
              {isLoading && <Spinner />}
              {failed && (
                <div style={{ marginTop: "5rem" }}>
                  {" "}
                  <NoInternet />
                </div>
              )}
              {!failed &&
                !isLoading &&
                filteredTyres.length === 0 &&
                active === "tyres" && (
                  <>
                    <h4 className="text-center">
                      No tires matching the filter
                    </h4>
                    <img src={Nodata} alt="No data" className={styles.noData} />
                  </>
                )}
              {!failed &&
                !isLoading &&
                filteredRims.length === 0 &&
                active === "rims" && (
                  <>
                    <h4 className="text-center">No rims matching the filter</h4>
                    <img src={Nodata} alt="No data" className={styles.noData} />
                  </>
                )}
              {!isLoading && (
                <Row className={`${styles.singleProduct}`}>
                  {active === "tyres" &&
                    filteredTyres.length > 0 &&
                    filteredTyres.map((prod) => (
                      <Col
                        xs={5}
                        md={3}
                        lg={3}
                        xxl={3}
                        style={{ marginBottom: "2rem" }}
                        key={uuid()}
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
                    filteredRims.length > 0 &&
                    filteredRims.map((prod) => (
                      <Col
                        xs={5}
                        md={3}
                        lg={3}
                        xxl={3}
                        style={{ marginBottom: "2rem" }}
                        key={uuid()}
                      >
                        <div>
                          <Caard
                            key={v4()}
                            id={prod.id}
                            title={prod.name}
                            category="rims"
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
