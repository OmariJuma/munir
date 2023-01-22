import "./services.css";
import "../App.css";
import Caard from "./Caard";
import tyres from "./../assets/images/wheels5.jpeg";
import rims from "./../assets/images/many.avif";
import fitting from "./../assets/images/fitting.jpeg";
import booking from "./../assets/images/date.jpg";
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
          un={"mc1"}
          className="col-sm-6 col-md-6 col-lg-6"
          title="Tyres"
          text="We provide high quality and durable tyres at very pocket friendly prices"
          product={false}
          image={tyres}
        />
        <Caard
          un={"mc2"}
          title="Rims"
          className="col-sm-6 col-md-6 col-lg-6"
          text="We provide high quality and durable rims at very affordable price"
          product={false}
          image={rims}
        />
        <Caard
          un={"mc3"}
          title="Fitting rims and tires"
          className="col-sm-6 col-md-6 col-lg-6"
          text="We fit tires and rims free of charge"
          product={false}
          image={fitting}
        />
        <Caard
          un={"mc4"}
          title="Booking"
          className="col-sm-6 col-md-6 col-lg-6"
          text="Do you need assistance? Stress no further. Click the button below to get assisted"
          product={false}
          image={booking}
        />
      </div>
    </div>
  );
};

export default Services;
