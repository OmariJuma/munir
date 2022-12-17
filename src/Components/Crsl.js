import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import borek from "../assets/images/WhatsApp Image 2022-12-05 at 07.52.30 (2).jpeg";
import guy from "../assets/images/guy.jpeg";

const Crsl = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={guy} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={borek} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Crsl;
