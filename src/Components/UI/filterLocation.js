import { Col, Form, Row } from "react-bootstrap";
import styles from "./Checkout.module.css";
import { useState, useEffect } from "react";
import counties from "../Utilities/counties";
import constituencies from "../Utilities/Constituencies";

const FilterLocation = () => {
  const [selectedCounty, setSelectedCounty] = useState("");
  const [filteredConstituencies, setFilteredConstituencies] = useState([]);
  const [selectedConstituency, setSelectedConstituency] = useState('')

  useEffect(() => {
    // Filter constituencies based on the selectedCounty code
    const filtered = constituencies.filter(
      (constituency) => constituency["county-code"] === Number(selectedCounty)
    );
    setFilteredConstituencies(filtered);
    console.log("Selected County:", selectedCounty);
    console.log("selected Constituency:", selectedConstituency);
  }, [selectedCounty, selectedConstituency]);

  return (
    <>
          <Row>
            <Col md={6} lg={6} xxl={6}>
              <Form.Group className="mb-3" controlId="countyAndConstituency">
                <Form.Label>Select County</Form.Label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="county"
                  value={selectedCounty}
                  onChange={(e) => setSelectedCounty(e.target.value)}
                >
                  <option value="">Open this menu</option>
                  {counties.map((county) => (
                    <option key={county.code} value={county.code}>
                      {county.county}
                    </option>
                  ))}
                </select>
              </Form.Group>
            </Col>
            <Col md={6} lg={6} xxl={6}>
              <Form.Group className="mb-3" controlId="formBasicInput">
                <Form.Label>City/ Constituency/ Location</Form.Label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="constituency"
                  value={selectedConstituency}
                  onChange={(e) => setSelectedConstituency(e.target.value)}
                >
                  <option value="">Open this select menu</option>
                  {filteredConstituencies.map((constituency) => (
                    <option
                      key={constituency.code}
                      value={constituency.code}
                    >
                      {constituency.name}
                    </option>
                  ))}
                </select>{" "}
              </Form.Group>
            </Col>
          </Row>
    </>
  );
};

export default FilterLocation;