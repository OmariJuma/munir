import Card from "react-bootstrap/Card";
import "./Caard.css";
import Rating from "./UI/Rating";
import { Link } from "react-router-dom";

const Caard = (props) => {
  const product = props.product;
  const data = {
    id: props.id,
    // price: props.price,
    title: props.title,
    description: props.description,
    offer: props.offer,
    image: `https://test.muneerautomotive.co.ke/${props.image}`,
    brand: props.brand,
    material: props.material,
    units: props.units,
  };

  return (
    <>
      {product && (
        <div className="products">
          <Link to={`/details/${data.id}`} state={data}>
            <Card style={{ textAlign: "left", marginBottom: "1.5rem" }}>
              <div id="aboveCardContainer">
                <h5 id="aboveCard">{props.title}</h5>
              </div>
              <Card.Img
                src={`https://test.muneerautomotive.co.ke/${props.image}`}
              />
              {props.category === "rims" ? (
                ""
              ) : (
                <Card.Body id={"cardBody"}>
                  <Card.Text style={{ marginBottom: "2rem" }}>
                    <>
                      {props.description.slice(0, 25) + "..."}
                      <div className="priceNstrike">
                        <strong>KSH {props.price}</strong>
                        <s>KSH {props.offer}</s>
                      </div>
                      <Rating />
                    </>
                  </Card.Text>
                </Card.Body>
              )}
              {/* <ButtonCustom text='view product'/> */}
            </Card>
          </Link>
        </div>
      )}
    </>
  );
};

export default Caard;
