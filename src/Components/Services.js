import "./services.css";
import "../App.css";
import Caard from "./Caard";
import side from"./../assets/images/frontside.png";
import many from"./../assets/images/many.png";
import head from"./../assets/images/head.png";
import square from"./../assets/images/_square.jpg";
import WhyUs from "./WhyUs";
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
        un={'mc1'}
          className="col-sm-6 col-md-6 col-lg-6"
          title="Tyres"
          text="Some quick example text to build on the card title and make up the
bulk of the card's content."
          product={false}
          image={side}
        />
        <Caard un={'mc2'}
          title="Rims"
          className="col-sm-6 col-md-6 col-lg-6"
          text="Some quick example text to build on the card title and make up the
bulk of the card's content."
          product={false}
          image={many}
        />
        <Caard
         un={'mc3'}
          title="Fitting rims and tires"
          className="col-sm-6 col-md-6 col-lg-6"
          text="Some quick example text to build on the card title and make up the
bulk of the card's content."
          product={false}
          image={square}
        />
                <Caard
                 un={'mc4'}
          title="Booking"
          className="col-sm-6 col-md-6 col-lg-6"
          text="Some quick example text to build on the card title and make up the
bulk of the card's content."
          product={false}
          image={head}
        />

      </div>
      <h2>Why Us</h2>

      <div className="container-fluid bg row" id="container">

      <WhyUs/>
      </div>
    </div>
  );
};

export default Services;
