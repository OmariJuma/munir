import ICard from "./UI/ICard";
import { v4 as uuidv4 } from "uuid";
import ig from "./../assets/images/money.jpg";
import client from "./../assets/images/client.png";
import call from "./../assets/images/realPhone.png";
import mechanic from "./../assets/images/mechanic.png";

import styles from "./WhyUs.module.css";
const WhyUs = (props) => {
  const reasons = [
    {
      id: uuidv4(),
      title: "Affordable Prices",
      text: "We provide you with very low and discounted prices therefore you can buy more for less ",
      image: ig,
    },
    {
      id: uuidv4(),
      title: "Affordable Prices",
      text: "We provide you with very low and discounted prices therefore you can buy more for less ",
      image: mechanic,
    },
    {
      id: uuidv4(),
      title: "Affordable Prices",
      text: "We provide you with very low and discounted prices therefore you can buy more for less ",
      image: call,
    },
    {
      id: uuidv4(),
      title: "Affordable Prices",
      text: "We provide you with very low and discounted prices therefore you can buy more for less ",
      image: client,
    },
  ];

  return (
    <>
      {reasons.map((i) => (
        <ICard key={i.id} text={i.text} image={i.image} id={styles.pop1}/>
      ))}
    </>
  );
};

export default WhyUs;
