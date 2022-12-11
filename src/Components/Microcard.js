import './Microcard.css';
import '../App.css';
import Card from 'react-bootstrap/Card';

const Microcard = (props) => {
    return (<div id='hang'> <Card.Title className='above-card' >{props.title}</Card.Title> </div>);
}
 
export default Microcard;