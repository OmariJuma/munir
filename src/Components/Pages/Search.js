import { useLocation } from "react-router";
import Caard from "../Caard";
import { Col, Row } from "react-bootstrap";

const Search = (props) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  return (
    <div className="container">
      <p>Search Results</p>
      <Row>
        {state.map((state) => (
          <Col xs={5} md={3} lg={3} xxl={3}>
            <div style={{ marginTop: "3rem" }}>
              <Caard
                id={state.id}
                price={state.price}
                title={state.name}
                description={state.description}
                offer={Math.floor(1.1 * state.price)}
                image={state.image}
                brand={state.brand}
                material={state.material}
                units={state.units}
                product={true}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Search;
