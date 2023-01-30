import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Button, Form } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <footer
        className="text-center text-lg-start text-dark"
        style={{ backgroundColor: "#ECEFF1" }}
      >
        {/* <!-- Section: Social media --> */}
        <section
          className="d-flex justify-content-between p-4 text-white"
          style={{ backgroundColor: "#21D192" }}
        >
          {/* <!-- Left --> */}
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <a href="" className="text-white me-4">
              <span>
                <FaTiktok />
              </span>
            </a>

            <a href="" className="text-white me-4">
              <span>
                <FaFacebookF />
              </span>
            </a>
            <a href="" className="text-white me-4">
              <span>
                <FaTwitter />
              </span>
            </a>
            <a href="" className="text-white me-4">
              <span>
                <FaGoogle />
              </span>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold">Leave A comment</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <Form>
                  <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      style={{ width: "100%" }}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      style={{ width: "100%" }}
                      required
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter your message</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Comment..."
                      as="textarea"
                      rows={3}
                      style={{ width: "100%" }}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" className="text-dark">
                    Book an Appointment
                  </a>
                </p>

                <p>
                  <a href="#!" className="text-dark">
                    Commercial Tyres
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    All Terrain Tyres
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Mud Terrain Tyres
                  </a>
                </p>

                <p>
                  <a href="#!" className="text-dark">
                    Highway Tyres/ Saloon Normal Tyres
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Normal Rims{" "}
                  </a>
                </p>

                <p>
                  <a href="#!" className="text-dark">
                    Small-offset Rims
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Offset
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" className="text-dark">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Tyres
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Rims
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    About Us
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <span>
                    <FaMapMarkerAlt />
                  </span>{" "}
                  34 Kirinyaga Rd Next To Kenya Canvas, Nairobi Kenya
                </p>
                <p>
                  <span>
                    <FaEnvelope />
                  </span>{" "}
                  info@example.com
                </p>
                <a href="tel:+254722174444">
                  <span>
                    <FaPhone />
                  </span>{" "}
                  +254722174444
                </a>
                <br/>
                <br/>
                <a href="tel:+254707686784">
                  <span>
                    <FaPhone />
                  </span>{" "}
                  +254707686784
                </a>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-dark" href="#">
           Muneer Automotive
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
};

export default Footer;
