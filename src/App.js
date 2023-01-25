import "./App.css";
import NavBar from "./Components/NavBar";
import Crsl from "./Components/Crsl";
import Services from "./Components/Services";
import Products from "./Components/Products";
import Success from "./Components/Success";
import WhyUs from "./Components/WhyUs";
import Footer from "./Components/UI/Footer";
import MySwiper from "./Components/UI/MySwiper";



function App() {
  return (<>
    <div className="Container-fluid">
      <NavBar />
      <Crsl />
      <Services/>
      <WhyUs/>

      <Success/>

      <Products/>
      <MySwiper/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
