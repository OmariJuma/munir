import {
  FaFacebookF,
  FaTwitter,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer
        className="text-center text-lg-start text-dark"
        style={{ backgroundColor: "#ECEFF1" }}
      >
        {/* <!-- Section: Social media --> */}
        <div
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
            <Link
              to="https://www.tiktok.com/@mahmudawadh2"
              target="_blank"
              rel="noreferrer"
              className="text-white me-4"
            >
              <span>
                <FaTiktok />
              </span>
            </Link>

            <Link
              to="www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-white me-4"
            >
              <span>
                <FaFacebookF />
              </span>
            </Link>
            <Link
              to="www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-white me-4"
            >
              <span>
                <FaTwitter />
              </span>
            </Link>
          </div>
          {/* <!-- Right --> */}
        </div>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <div className="">
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
                  <Link to="/booking" className="text-dark">
                    Book an Appointment
                  </Link>
                </p>

                <p>
                  <Link to="/products/tyres" className="text-dark">
                    Commercial Tyres
                  </Link>
                </p>
                <p>
                  <Link to="/products/tyres" className="text-dark">
                    All Terrain Tyres
                  </Link>
                </p>
                <p>
                  <Link to="/products/tyres" className="text-dark">
                    Mud Terrain Tyres
                  </Link>
                </p>

                <p>
                  <Link to="/products/tyres" className="text-dark">
                    Highway Tyres
                  </Link>
                </p>
                <p>
                  <Link to="/products/rims" className="text-dark">
                    Normal Rims{" "}
                  </Link>
                </p>

                <p>
                  <Link to="/products/rims" className="text-dark">
                    small-Offset rims
                  </Link>
                </p>
                <p>
                  <Link to="/products/rims" className="text-dark">
                    Offset rims
                  </Link>
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
                  <Link to="/" className="text-dark">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/products/tyres" className="text-dark">
                    Tyres
                  </Link>
                </p>
                <p>
                  <Link to="/products/rims" className="text-dark">
                    Rims
                  </Link>
                </p>
                <p>
                  <Link to="/about-us" className="text-dark">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to="/termsAndConditions" className="text-dark">
                    Terms and Conditions
                  </Link>
                </p>
                <p>
                  <Link to="/privacyPolicy" className="text-dark">
                    Privacy Policy
                  </Link>
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
                <br />

                <Link
                  to="https://www.google.com/maps/place/Muneer+Auto+tyres+Limited/@-1.2799975,36.8234224,17z/data=!4m14!1m7!3m6!1s0x182f1176595e53e1:0xc94667e686bce87a!2sMuneer+Auto+tyres+Limited!8m2!3d-1.2799145!4d36.8244032!16s%2Fg%2F11sf5rs3d7!3m5!1s0x182f1176595e53e1:0xc94667e686bce87a!8m2!3d-1.2799145!4d36.8244032!16s%2Fg%2F11sf5rs3d7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  34 Kirinyaga Rd Next To Kenya Canvas, Nairobi Kenya
                </Link>
                <br />
                <br />
                <Link to="mailto:muneerautomotive@gmail.com">
                  <span>
                    <FaEnvelope />
                  </span>{" "}
                  muneerautomotive@gmail.com{" "}
                </Link>
                <br />
                <br />

                <Link to="tel:+254722174444">
                  <span>
                    <FaPhone />
                  </span>{" "}
                  +254722174444
                </Link>
                <br />
                <br />
                <Link to="tel:+254707686784">
                  <span>
                    <FaPhone />
                  </span>{" "}
                  +254707686784
                </Link>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </div>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <Link className="text-dark" to="/">
            Muneer Automotive
          </Link>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
};

export default Footer;
