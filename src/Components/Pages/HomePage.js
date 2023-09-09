import { lazy} from "react";
import Crsl from "../Crsl";
import Products from "./Products";
import Services from "../Services";
import WhyUs from "../WhyUs";
import Success from "../Success";
import MySwiper from "../UI/MySwiper";
const Footer = lazy(() => import("../UI/Footer"))

const HomePage = () => {
  return (
    <>
      <div className="Container-fluid">
        <Crsl />
        <Products />
        <Services />
        <WhyUs />
        <Success />
        <MySwiper />
      </div>
      <Footer />
    </>
  );
};
export default HomePage;
