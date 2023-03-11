import { v4 as uuidv4 } from "uuid";
import { Card } from "react-bootstrap";
import ig from "./../assets/images/notes.jpg";
import client from "./../assets/images/client.png";
import call from "./../assets/images/realPhone.png";
import mechanic from "./../assets/images/spanners.png";

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
      title: "Qualified & Friendly Mechanics",
      text: "Our mechanics are highly qualified with years of experience. Moreover, they are so friendly hence you won't be bored at all.",
      image: mechanic,
    },
    {
      id: uuidv4(),
      title: "24/7 Customer support",
      text: "Need someone to talk to ASAP? Just dial the phone number and one of our agents will talk to you. You can also check us out on social media. click on the icons on the right and explore our social media handles",
      image: call,
    },
    {
      id: uuidv4(),
      title: "1450+ Happy Clients",
      text: "... Be the next one",
      image: client,
    },
  ];

  return (<div>
          <h2>Why Us</h2>

     <div  className="row" style={{justifyContent:'center',gap:'2rem'}}>

      {reasons.map((i) => (
        <Card className={`${"text-white"} ${styles.whyus}`} key={i.id} style={{width:"250px",padding:"0"}}>
          <Card.Img src={i.image} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>{i.title}</Card.Title>
            <Card.Text>
              {i.text}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      ))}
      </div>
</div>
  );
};

export default WhyUs;
