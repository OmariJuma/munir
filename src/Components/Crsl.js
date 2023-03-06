import styles from "./Carousel.module.css";
import bugatti from "./../assets/images/buggati.webp";
import bugatti2 from "./../assets/images/hh.webp";
import MiniCard from "./UI/MiniCard";
import Input from "./UI/Input";
import { Carousel } from "react-bootstrap";
import Mahmoud from "./../assets/images/People/Mr Mahmoud.jpeg"
import Mahmoud2 from "./../assets/images/People/Mr Mahmoud2.jpeg"
import Mahmoud3 from "./../assets/images/People/Mr Mahmoud01.jpeg"
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
        <div style={{display:"flex"}}>
        <img src={Mahmoud3} alt="the home screen"  id={styles.def}/>
        <img src={Mahmoud3} alt="the home screen" id={styles.sub} />
        </div>
        <Carousel.Caption>
          <h3 id={styles.ceoTitle}>CE0 Mr Mahmoud</h3>
          <p id={styles.ceoText}>Hi I hope you are doing fine, this is our business, come and lets do business together. I promise you'll enjoy our services</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Crsl;
