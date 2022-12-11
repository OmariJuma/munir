import Rim from '../assets/images/landing.jpeg'
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import {FaArrowRight} from 'react-icons/fa'
import Microcard from './Microcard';

const Caard = (props) => {
    return ( 
        <Card style={{ width: '300px'}} className="md-4 xl-3 " >
        <Microcard title={props.title}/>
              <Card.Img  src={Rim}/>
              <Card.Body>
                <Card.Text >
                    {props.text}
                </Card.Text>
              </Card.Body>
              <Button>See more<span bg="success"><FaArrowRight/></span></Button>
            </Card>
        );
}
 
export default Caard;