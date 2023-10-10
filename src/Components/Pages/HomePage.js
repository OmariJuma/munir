import { lazy } from "react";
import Crsl from "../Crsl";
import Services from "../Services";
import WhyUs from "../WhyUs";
import MySwiper from "../UI/MySwiper";
import ProductUi from "../UI/ImageGallery/ProductUi";
import VehicleSelect from "../UI/VehicleSelect";
import RimGallery from "../UI/RimGallery/RimGallery";
const Footer = lazy(() => import("../UI/Footer"));

const HomePage = () => {
  return (
    <>
      <div className="Container-fluid">
        <Crsl />
        <VehicleSelect/>
        <ProductUi />
        <RimGallery/>
        <Services />
        <WhyUs />
        <MySwiper />
      </div>
      <Footer />
    </>
  );
};
export default HomePage;
