import "./MoreDetails.css";
import styles from "./Products.module.css";
import { Card, Carousel, Col, Row, ListGroup, Button } from "react-bootstrap";
import Rating from "../UI/Rating";
import { ButtonCart } from "../UI/ButtonCustom";
import { FaCheck, FaClock, FaMoneyBillWave } from "react-icons/fa";
import { SiNamecheap } from "react-icons/si";
import { TbBrandSketch } from "react-icons/tb";
import { useParams } from "react-router";
import { useContext, useEffect, useRef, useState } from "react";
import CartContext from "../store/cart-context";
import Input from "../UI/Input";
import { lazy } from "react";
import ReactWhatsapp from "react-whatsapp";
import { FaWhatsapp } from "react-icons/fa";
import Warranty from "../../assets/images/icons/warranty.png";
import axios from "axios";
import Caard from "../Caard";
import Spinner from "../UI/Spinner";
import NoInternet from "../UI/NoInternet";
import { v4 } from "uuid";
import NoData from "../../assets/images/animations/no data.svg"
const Footer = lazy(() => import("../UI/Footer"));

const MoreDetails = (props) => {
  //get the productId from the param
  const params = useParams();
  const cartCtx = useContext(CartContext);
  //product states
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  //convert price string to a number and get the offer amount
  const customPrice = `${Number(price).toFixed(2)}`;
  let customOffer = `${Math.floor(1.1 * customPrice).toFixed(2)}` || 0;
  //set states for loading and no internet
  const [isLoading, setIsLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const getItem = async () => {
      await axios
        .get(
          `https://test.muneerautomotive.co.ke/api/products/product/${params.id}`
        )
        .then((res) => {
          let data = res.data;
          setId(data.id);
          setName(data.name);
          setImage(data.image);
          setPrice(data.price);
          setBrand(data.brand);
          setCategory(data.category);
          setDescription(data.description);
          setIsLoading(false);
          setFailed(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setFailed(true);
          if (error.message === "Network Error")
            return setError("Network Error");
          if (error.response.status == 404)
            return setError("The product was not found");
          if (error.response.status == 501)
            return setError("Something went wrong on our end");
          else return setError("An error has occured");
        });
    };
    getItem();
  }, []);

  const addToCartHandler = (amount = 1) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
      image: image,
    });
  };

  const topRef = useRef(null);
  return (
    <>
      {isLoading && <Spinner />}
      {failed && error == "Network Error" && <NoInternet />}
      {failed && error !== "Network Error" && (<>
      <h3 className="text-center">{error}</h3>
        <img src={NoData} alt={error}/>
      </>)}
      {!isLoading && !failed && (
        <>
          <div className="container" ref={topRef}>
            <div id="inp">
              <Input />
            </div>

            <Row className="more-details" id="start">
              <Col xs={12} sm={12} md={6} lg={6}>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={`https://test.muneerautomotive.co.ke/${image}`}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={`https://test.muneerautomotive.co.ke/${image}`}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <Card>
                  <Card.Body>
                    <Card.Header>
                      <span className="faicon">
                        <SiNamecheap />
                      </span>
                      <b style={{ marginRight: "1rem" }}>Name:</b> {name} <br />
                    </Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <span className="faicon">
                          <TbBrandSketch />
                        </span>
                        <b style={{ marginRight: "1rem" }}>Brand:</b> {brand}
                        <br />
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <span className="faicon" style={{ gap: "0" }}>
                          <FaMoneyBillWave />
                        </span>
                        <strong style={{ marginRight: "1rem", color: "green" }}>
                          KSH {price}
                        </strong>
                        <s style={{ color: "red" }}>KSH {customOffer}</s>
                      </ListGroup.Item>
                      <ListGroup.Item className="warrantyContainer">
                        <span className="faicon">
                          <FaClock />
                        </span>
                        <b style={{ marginRight: "1rem" }}>Warranty</b> <br />
                        <img
                          src={Warranty}
                          id="warranty"
                          alt="One year warranty"
                        />
                        <br />
                      </ListGroup.Item>

                      <ListGroup.Item>
                        Rating
                        <Rating />
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Button
                          className="bg-success"
                          style={{ width: "100%" }}
                        >
                          <ReactWhatsapp
                            number="+254707686784"
                            message={`Hi, I want to purchase this Product: ${name}, Price: ${price}, Units: ${1}, Brand: ${brand}  url-> ${
                              window.location.href
                            }`}
                            style={{ color: "white", gap: "20px" }}
                          >
                            <FaWhatsapp style={{ color: "white" }} />
                            Order on Whatsapp
                          </ReactWhatsapp>
                        </Button>
                        <br />
                      </ListGroup.Item>
                      <ButtonCart
                        text="Add To Cart"
                        onShowCart={props.onShowCart}
                        onAdd={addToCartHandler}
                      />
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={{ marginTop: "2rem" }}>
                  <Card.Body>
                    <Card.Header>product Details</Card.Header>
                    <Card.Text>{description}</Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Header>Product Specification</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <b style={{ margin: "0 1rem 0 0" }}>Dimensions</b>
                        {description}
                        <br />
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b style={{ margin: "0 1rem 0 0" }}> Weight in Kg</b>2kg
                        <br />
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b style={{ margin: "0 1rem 0 0" }}> Warranty</b>1 years
                        <br />
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <h6>Related items</h6>
            <Row className={`${styles.singleProduct}`}>
              {products.map((prod) => (
                <Col
                  xs={5}
                  md={3}
                  lg={3}
                  xxl={3}
                  style={{ marginBottom: "2rem" }}
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
            </Row>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default MoreDetails;
