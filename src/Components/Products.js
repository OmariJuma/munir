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
    <div className="container-flex row bg" id="cont">
      <h1>Products</h1>
      {productArray.map((prod) => (
        <div key={prod.id} >
          <Caard
            title={prod.name}
            price={prod.price}
            offer={prod.offer}
            description={prod.desc}
            product={true}
            className='lg-4 md-3'
          />
        </div>
      ))}
    </div>
  );
};

export default Products;
