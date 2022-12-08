import './services.css';
import Spare from '../assets/images/spare.png'
import Card from "react-bootstrap/Card";
const Services = () => {
    return (<div className="container-fluid bg ">
        <h1 className='text-center'>Services We Provide</h1>
<Card style={{ width: '300px'}} className="md-6 xl-6" id="no1" >
      <Card.Img  src={Spare}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem'}} className="md-6 xl-6" id='no2'>
      <Card.Img  src={Spare}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem'}} className="md-6 xl-6" id='no3'>
      <Card.Img  src={Spare}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>




    </div>);
}
 
export default Services;