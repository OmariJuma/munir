import styles from "./Products.module.css";
import "./../services.css";
import Caard from "../Caard";
import { FaArrowRight } from "react-icons/fa";
import tyre1 from "./../../assets/images/goodyear2.jpeg";
import rim1 from "./../../assets/images/wheel1.jpeg";
import rimNtyre1 from "./../../assets/images/wheel2.jpeg";
import rimNtyre2 from "./../../assets/images/wheel3.jpeg";
import { Col, Row } from "react-bootstrap";
import { getDatabase, onValue, ref, set } from "firebase/database";
import data from "./../../fire";
import { useEffect } from "react";
const Products = (props) => {
  const productArray = [
    {
      id: 1,
      type: "tyre",
      name: "Yana 4*4",
      offer: "5300",
      desc: "Some quick example text to build on the card title and make up ",
      price: 4500,
      image: tyre1,
    },
    {
      id: 2,
      type: "Rim",
      name: "Benz rim 5*3",
      offer: "5300",
      desc: "Some quick example text to build on the card title and make up ",
      price: 4500,
      image: rim1,
    },
    {
      id: 3,
      type: "Rim and tyre",
      name: "Benz rim 5*3",
      offer: "5300",
      desc: "Some quick example text to build on the card title and make up ",
      price: 4500,
      image: rimNtyre1,
    },
    {
      id: 4,
      type: "Rim and tyre",
      name: "Benz rim 5*3",
      offer: "5300",
      desc: "Some quick example text to build on the card title and make up ",
      price: 4500,
      image: rimNtyre2,
    },
    {
      id: 5,
      type: "Rim and tyre",
      name: "Benz rim 5*3",
      offer: "5300",
      desc: "Some quick example text to build on the card title and make up ",
      price: 4500,
      image: rimNtyre2,
    },
    {
      id: 6,
      type: "Rim and tyre",
      name: "Benz rim 5*3",
      offer: "5300",
      desc: "Some quick example text to build on the card title and make up ",
      price: 4500,
      image: rimNtyre2,
    },
    {
      id: 7,
      type: "Rim and tyre",
      name: "Benz rim 5*3",
      offer: "5300",
      desc: "Some quick example text to build on the card title and make up ",
      price: 4500,
      image: rimNtyre2,
    },
    {
      id: 8,
      type: "Rim and tyre",
      name: "Benz rim 5*3",
      offer: "5300",
      desc: "Some quick example text to build on the card title and make up ",
      price: 4500,
      image: rimNtyre2,
    },
  ];
  const x = {
    id: 1,
    type: "tyre",
    name: "Yana 4*4",
    offer: "5300",
    desc: "Some quick example text to build on the card title and make up ",
    price: 4500,
    image: tyre1,
  };

  //   fetch("https://muneer-a787d-default-rtdb.firebaseio.com/products/tires.json?print=silent",{
  //   method:"POST",
  //   body:JSON.stringify(x),
  //   headers:{"Content-Type":"application/json"}
  // })
  // function writeUserData() {
  //   const db = data;
  //   productArray.map((d) => {
  //     set(ref(db, "products/tyres/" +d.id), {
  //       type: d.type,
  //       name: d.name,
  //       offer: d.offer,
  //       desc: d.desc,
  //       price: d.price,
  //       image: d.image,
  //     });
  //   });
  // }
  // writeUserData();
const getData=()=>{
  const db=data;
  onValue(ref(db,"products/tyres/"),snapshot=>{
    const data=snapshot.val();
   data.map(i=>{console.log(i)})
  })

}
getData();
  return (
    <div>
      <section>
        <div className={styles.productsTitle}>
          <h4 className="text-center">Rims and Tyres</h4>
          <a href="#rim" style={{ textAlign: "right" }}>
            See more
            <span>
              <FaArrowRight />
            </span>
          </a>
        </div>
        <div to="products/details" className="container-flex">
          <Row className={`${styles.singleProduct}`}>
            {productArray.map((prod) => (
              <Col xs={5} md={3} lg={3} xxl={3}>
                <Caard
                  key={prod.id}
                  title={prod.name}
                  price={prod.price}
                  offer={prod.offer}
                  description={prod.desc}
                  image={prod.image}
                  product={true}
                />
              </Col>
            ))}
          </Row>
        </div>
      </section>
      <section>
        <div className={styles.productsTitle}>
          <h4 className="text-center">Rims</h4>
          <a href="#rim" style={{ textAlign: "right" }}>
            See more
            <span>
              <FaArrowRight />
            </span>
          </a>
        </div>
        <div className="container-flex">
          <Row className={`${styles.singleProduct}`}>
            {productArray.map((prod) => (
              <Col xs={5} md={3} lg={3} xxl={3}>
                <Caard
                  key={prod.id}
                  title={prod.name}
                  price={prod.price}
                  offer={prod.offer}
                  description={prod.desc}
                  image={prod.image}
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
          <a href="#rim" style={{ textAlign: "right" }}>
            See more
            <span>
              <FaArrowRight />
            </span>
          </a>
        </div>
        <div className="container-flex">
          <Row className={`${styles.singleProduct}`}>
            {productArray.map((prod) => (
              <Col xs={5} md={3} lg={3} xxl={3}>
                <Caard
                  key={prod.id}
                  title={prod.name}
                  price={prod.price}
                  offer={prod.offer}
                  description={prod.desc}
                  image={prod.image}
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
