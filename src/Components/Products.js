import styles from "./Products.module.css";
import "./services.css";
import Caard from "./Caard";
import { FaArrowRight } from "react-icons/fa";
import tyre1 from "./../assets/images/goodyear2.jpeg";
import rim1 from "./../assets/images/wheel1.jpeg";
import rimNtyre1 from "./../assets/images/wheel2.jpeg";
import rimNtyre2 from "./../assets/images/wheel3.jpeg";
const Products = () => {
  const productArray = [
    {
      id: 1,
      type: "tyre",
      name: "Yana 4*4",
      offer: "13%",
      desc: "Some quick example text to build on the card title and make up ",
      price: 4500,
      image: tyre1,
    },
    {
      id: 2,
      type: "Rim",
      name: "Benz rim 5*3",
      offer: "20%",
      desc: "Some quick example text to build on the card title and make up ",
      price: 4500,
      image: rim1,
    },
    {
      id: 3,
      type: "Rim and tyre",
      name: "Benz rim 5*3",
      offer: "20%",
      desc: "Some quick example text to build on the card title and make up ",
      price: 4500,
      image: rimNtyre1,
    },
    {
      id: 4,
      type: "Rim and tyre",
      name: "Benz rim 5*3",
      offer: "20%",
      desc: "Some quick example text to build on the card title and make up ",
      price: 4500,
      image: rimNtyre2,
    },
  ];
  return (
    <>
      <div className={styles.productsTitle}>
        <h4 className="text-center">Inventory</h4>
        <a href="" style={{ textAlign: "right" }}>
          See more
          <span>
            <FaArrowRight />
          </span>
        </a>
      </div>
      <div className={"container"}>
        <div className={`${"row"} ${styles.singleProduct}`}>
          {productArray.map((prod) => (
            <div className="col-sm-6 col-md-6 col-lg-3 col-xxl-3">
              <Caard
                key={prod.id}
                title={prod.name}
                price={prod.price}
                offer={prod.offer}
                description={prod.desc}
                image={prod.image}
                product={true}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
