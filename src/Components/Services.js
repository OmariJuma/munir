import "./services.css";
import "../App.css";
import Caard from "./Caard";
const Services = () => {
  return (
    <div className="container holder">
      <h1
        className="text-center 
    servicesTitle"
      >
        Services We Provide
      </h1>
      <div className="container-fluid bg row" id="container">
        <Caard
          className="col-sm-6 col-md-6 col-lg-4"
          title="Rims"
          text="Some quick example text to build on the card title and make up the
bulk of the card's content."
          product={false}
        />
        <Caard
          title="Tyres"
          className="col-sm-6 col-md-6 col-lg-4"
          text="Some quick example text to build on the card title and make up the
bulk of the card's content."
          product={false}
        />
        <Caard
          title="Fitting rims and tires"
          className="col-sm-6 col-md-6 col-lg-4"
          text="Some quick example text to build on the card title and make up the
bulk of the card's content."
          product={false}
        />
                <Caard
          title="Fitting rims and tires"
          className="col-sm-6 col-md-6 col-lg-4"
          text="Some quick example text to build on the card title and make up the
bulk of the card's content."
          product={false}
        />

      </div>
      
    </div>
  );
};

export default Services;
