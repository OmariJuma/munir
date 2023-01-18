import styles from"./Carousel.module.css";
import bugatti from "./../assets/images/buggati.webp";
import bugatti2 from "./../assets/images/hh.webp";
import MiniCard from "./UI/MiniCard";
const Crsl = () => {
  return (
    <div className={styles.contain}>
      <img src={bugatti} alt="the home screen" id={styles.def} />
      <img src={bugatti2} alt="the home screen" id={styles.sub} />
      <h1>Muneer Automotive, The home of Tires & Rims</h1>
      <MiniCard/>
    </div>
  );
};
export default Crsl;
