import "./Products.css";
import "./services.css";
import Caard from "./Caard";

const Products = () => {
  const productArray = [
    {
      id: 1,
      type: "tire",
      name: "Yana 4*4",
      offer: "13%",
      desc: "Some quick example text to build on the card title and make up ",
      price: 4500,
    },
    {
      id: 2,
      type: "Rim",
      name: "Benz rim 5*3",
      offer: "20%",
      desc: "Some quick example text to build on the card title and make up ",
      price: 4500,
    },
    {
      id: 3,
      type: "Rim and tyre",
      name: "Benz rim 5*3",
      offer: "20%",
      desc: "Some quick example text to build on the card title and make up ",
      price: 4500,
    },
    {
      id: 4,
      type: "Rim and tyre",
      name: "Benz rim 5*3",
      offer: "20%",
      desc: "Some quick example text to build on the card title and make up ",
      price: 4500,
    },
  ];
  return (
    <div className="cont">
      <h1 className="text-center" >Products</h1>
      <div className="row">
        {productArray.map((prod) => (
          <Caard
            key={prod.id}
            className="li col-sm-1 col-md-6 col-lg-3 col-xxl-3"
            title={prod.name}
            price={prod.price}
            offer={prod.offer}
            description={prod.desc}
            product={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
