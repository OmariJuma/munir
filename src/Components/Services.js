import { Button, Row } from "react-bootstrap";
import "./services.css";
import "../App.css";
import Caard from "./Caard";
import tyres from "./../assets/images/wheels5.jpeg";
import rims from "./../assets/images/many.avif";
import fitting from "./../assets/images/fitting.jpeg";
import booking from "./../assets/images/date.jpg";
import lottie from "./../assets/images/animations/illustration.png";
import ButtonCustom from "./UI/ButtonCustom";
const Services = () => {
  return (
    <div className="holder">
      <h1
        className="text-center 
    servicesTitle"
      >
        Services We Provide
      </h1>
      <div className="container">
        <div
          className="row"
          style={{ margin: "auto", justifyContent: "center" }}
        >
          <div className="col-sm-12 col-md-4 col--lg-4">
            <img src={lottie} id="lottie" alt="" />
          </div>

          <div className="col-sm-12 col-md-8 col-lg-8 textArea">
            <h2>We Sell Tyres</h2>
            <p>
              We sell a range of tires at cost effective prices. Our tyres are
              durable, of high quality and approved for usage by the Bureau of
              standards
            </p>
            <p>We have the following types of tires namely:</p>
            <div className="rimTypes">
              <ButtonCustom text="All Terrain" />
              <ButtonCustom text="Mud Terrain" />
              <ButtonCustom text="Normal Tyre" />
              <ButtonCustom text="Commercial Tyres" />
            </div>
          </div>
        </div>
        <div
          className="row" id="reverse"
          style={{ margin: "auto", justifyContent: "center" }}
        >

          <div className="col-sm-12 col-md-8 col-lg-8 textArea" >
            <h2>Dealers In Rims</h2>
            <p>At Muneer Automotive, you get access to wide range of rims at very low discounted prices.
Our enterprise has a variety of rims that you can choose from. </p>
            <p>We have the following types of tires namely:</p>
            <div className="rimTypes">
              <ButtonCustom variant={true} text="Normal rim" />
              <ButtonCustom variant={true} text="Small Offset" />
              <ButtonCustom variant={true} text="Offset" />
              <ButtonCustom  text="All sizes are available" />

            </div>
          </div>
          <div className="col-sm-12 col-md-4 col--lg-4">
            <img src={lottie} id="lottie" alt="" />
          </div>

        </div>
        <div
          className="row"
          style={{ margin: "auto", justifyContent: "center" }}
        >
          <div className="col-sm-12 col-md-4 col--lg-4">
            <img src={lottie} id="lottie" alt="" />
          </div>

          <div className="col-sm-12 col-md-8 col-lg-8 textArea">
            <h2>Booking</h2>
            <p>As key players in the rims and tyres sector, we are always available for clients with a tight schedule. If you want to visit us at a specific time kindly click the button below so that we can avail a parking slot for you. Are you wondering if you'll be charged for the booking and parking? Of course no, its absolutely FREE!!
            </p>
            <div className="rimTypes">
              <ButtonCustom variant={true} text="Schedule Booking" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
