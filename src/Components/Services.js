import './services.css';
import '../App.css';
import Caard from './Caard';
const Services = () => {
    return (<div className="container-fluid bg row" id='container'>
        <h1 className='text-center'>Services We Provide</h1>
        <Caard title='Rims' text="Some quick example text to build on the card title and make up the
bulk of the card's content."/>
                <Caard title='Tyres' text="Some quick example text to build on the card title and make up the
bulk of the card's content."/>
        <Caard title='Fitting rims and tires' text="Some quick example text to build on the card title and make up the
bulk of the card's content."/>
        
        

    </div>);
}
 
export default Services;