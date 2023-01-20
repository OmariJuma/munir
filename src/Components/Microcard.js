import "./Microcard.css";
import styles from "../App.css";
import Card from "react-bootstrap/Card";

const Microcard = (props) => {
  return (<div className={`${'suContainer'} ${props.un}`}>
      
       <Card.Title className="above-card">{props.title}</Card.Title>
     </div>
  )
};

export default Microcard;
