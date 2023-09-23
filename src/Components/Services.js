import "./services.css";
import "../App.css";
import lottie from "./../assets/images/animations/illustration.png";
import lottie2 from "./../assets/images/animations/illustration2.png";
import ButtonCustom from "./UI/ButtonCustom";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <div className="holder">
      <motion.h1
            initial={{ opacity: 0, y: 20 }}
            transition={{delay:"0.25", ease:"easeIn"}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        className="text-center 
    servicesTitle"
      >
        Services We Provide
      </motion.h1>
      <div className="container">
        <div
          className="row"
          style={{ margin: "auto", justifyContent: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{delay:"0.25", ease:"easeIn"}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-sm-12 col-md-4 col--lg-4"
          >
            <img src={lottie} id="lottie" alt="" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{delay:"0.25", ease:"easeIn"}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-sm-12 col-md-8 col-lg-8 textArea"
          >
            <h2>We Sell Tyres</h2>
            <p>
              We sell a range of tires at cost effective prices. Our tyres are
              durable, of high quality and approved for usage by the Bureau of
              standards
            </p>
            <p>We have the following types of tires namely:</p>
            <div className="rimTypes">
              <ButtonCustom variant="tyres" text="All Terrain" />
              <ButtonCustom variant="tyres" text="Mud Terrain" />
              <ButtonCustom variant="tyres" text="Normal Tyre" />
              <ButtonCustom variant="tyres" text="Commercial Tyres" />
            </div>
          </motion.div>
        </div>
        <div
          className="row"
          id="reverse"
          style={{ margin: "auto", justifyContent: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{delay:"0.25", ease:"easeIn"}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-sm-12 col-md-8 col-lg-8 textArea"
          >
            <h2>Dealers In Rims</h2>
            <p>
              At Muneer Automotive, you get access to wide range of rims at very
              low discounted prices. Our enterprise has a variety of rims that
              you can choose from.{" "}
            </p>
            <p>We have the following types of rims namely:</p>
            <div className="rimTypes">
              <ButtonCustom variant="rims" text="Normal rim" />
              <ButtonCustom variant="rims" text="Small Offset" />
              <ButtonCustom variant="rims" text="Offset" />
              <ButtonCustom variant="rims" text="All sizes are available" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{delay:"0.25", ease:"easeIn"}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-sm-12 col-md-4 col--lg-4"
          >
            <img src={lottie2} id="lottie" alt="" />
          </motion.div>
        </div>
        <div
          className="row"
          style={{ margin: "auto", justifyContent: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{delay:"0.25", ease:"easeIn"}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-sm-12 col-md-4 col--lg-4"
          >
            <img src={lottie} id="lottie" alt="" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{delay:"0.25", ease:"easeIn"}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-sm-12 col-md-8 col-lg-8 textArea"
          >
            <h2>Booking</h2>
            <p>
              As key players in the rims and tyres sector, we are always
              available for clients with a tight schedule. If you want to visit
              us at a specific time kindly click the button below so that we can
              avail a parking slot for you. Are you wondering if you'll be
              charged for the booking and parking? Of course no, its absolutely
              FREE!!
            </p>
            <div className="rimTypes">
              <ButtonCustom variant="booking" text="Schedule Booking" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
