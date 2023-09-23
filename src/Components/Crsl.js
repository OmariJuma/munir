import styles from "./Carousel.module.css";
import poster1 from "./../assets/images/Poster/general.jpg";
import poster2 from "./../assets/images/Poster/ServicesPost.png";
import { Carousel } from "react-bootstrap";
const Crsl = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={poster1} alt="poster1" id={styles.def} />
        <img src={poster1} alt="poster1" id={styles.sub} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={poster2} alt="poster2" id={styles.sub} />
        <img src={poster2} alt="poster2" id={styles.def} />
      </Carousel.Item>
    </Carousel>
  );
};
export default Crsl;
