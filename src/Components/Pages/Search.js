import { useParams } from "react-router";
import Caard from "../Caard";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Spinner from "../UI/Spinner";
import NoInternet from "../UI/NoInternet";

const Search = (props) => {
  const { key } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  const getRecords = async () => {
    setIsLoading(true)
    await axios
      .get(
        `https://test.muneerautomotive.co.ke/api/products/someProducts/${key}`
      )
      .then((res) => {
        setIsLoading(false)
        if (res.data.length !== 0) {
          setSearchResults(res.data);
          console.log(res.data);
        } else {
          alert("search did not match any product");
        }
      })
      .catch((err) => {
        setIsLoading(false)
        setFailed(true)
        console.log(err);
      });
  };
  useEffect(() => {
    getRecords();
  }, [key]);
  return (
    <div className="container">
      <p>Search Results</p>
      {isLoading && <Spinner />}
      {failed && <NoInternet />}

      {!isLoading&&<Row>
          {searchResults.map((state) => (
            <Col xs={5} md={3} lg={3} xxl={3}>
              <div style={{ marginTop: "3rem" }}>
                <Caard
                  key={v4()}
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
      }
    </div>
  );
};

export default Search;
