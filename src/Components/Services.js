import './services.css';
import '../App.css';
import Rim from '../assets/images/landing.jpeg'
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import {FaArrowRight} from 'react-icons/fa'
const Services = () => {
    return (<div className="container-fluid bg row" id='container'>
        <h1 className='text-center'>Services We Provide</h1>
<Card style={{ width: '300px'}} className="md-4 xl-3" id="no1" >
<Card.Title className='text-center'>Rims</Card.Title>
      <Card.Img  src={Rim}/>
      <Card.Body>
        
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Button>See more<span bg="success"><FaArrowRight/></span></Button>
    </Card>
    <Card style={{ width: '18rem'}} className="md-4 xl-3" id='no2'>
    <Card.Title className='text-center bb'>Tires</Card.Title>
      <Card.Img  src={Rim}/>
      <Card.Body>
        
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Button className='warning' bg="warning">See more<span bg="success"><FaArrowRight/></span></Button>
    </Card>
    
    <Card style={{ width: '18rem'}} className="md-4 xl-3" id='no3'>
    <Card.Title className='text-center'>Tyres</Card.Title>
      <Card.Img  src={Rim}/>
      <Card.Body>
        
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Button>See more<span bg="success"><FaArrowRight/></span></Button>
    </Card>




    </div>);
}
 
export default Services;