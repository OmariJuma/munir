import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import fitting2 from "../assets/images/fitting2.jpeg";
import rim1 from "../assets/images/rim1.jpeg";
import rim2 from "../assets/images/rim2.jpeg";
import rims from "../assets/images/rims.jpeg";
import wheel1 from "../assets/images/wheel1.jpeg";
import wheel2 from "../assets/images/wheel2.jpeg";
import wheel3 from "../assets/images/wheel3.jpeg";
import wheel4 from "../assets/images/wheel4.jpeg";
import wheels5guy from "../assets/images/wheels5.jpeg";
// import guy from "../assets/images/guy.jpeg";

const Crsl = () => {
  return (
<Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={rim1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={wheel1}
          alt="The first wheel picture"
        />

        <Carousel.Caption>
          <h3>Awesome classy wheels for your vehicle</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={wheel2}
          alt="Second wheel in the slider"
        />

        <Carousel.Caption>
          <h3>Our products are cheap... like this one here</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={wheel2}
          alt="Second wheel in the slider"
        />

        <Carousel.Caption>
          <h3>Why go to a store when we have when we have a vast collection?</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>  );
};
export default Crsl;
