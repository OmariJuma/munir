import styles from "./Carousel.module.css";
import bugatti from "./../assets/images/buggati.webp";
import bugatti2 from "./../assets/images/hh.webp";
import MiniCard from "./UI/MiniCard";
import Input from "./UI/Input";
import { Carousel } from "react-bootstrap";
const Crsl = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={bugatti} alt="the home screen" id={styles.def} />
        <img src={bugatti2} alt="the home screen" id={styles.sub} />
        <h1 style={{ color: "white", position: "absolute", top: "2rem",textAlign:"center",right:"0",left:"0" }} id={styles.crslH1}>
          Muneer Automotive, The home of Tires & Rims
        </h1>
        <Carousel.Caption>
          <MiniCard />
          <div className={styles.mini}>
            <Input />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={bugatti} alt="the home screen" id={styles.def} />
        <img src={bugatti2} alt="the home screen" id={styles.sub} />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={bugatti} alt="the home screen" id={styles.def} />
        <img src={bugatti2} alt="the home screen" id={styles.sub} />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Crsl;
