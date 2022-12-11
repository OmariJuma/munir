import "./App.css";
import NavBar from "./Components/NavBar";
// import Crsl from "./Components/Crsl";
import HomeSection from "./Components/HomeSection";
import Cardie from "./Components/Cardie";
import Services from "./Components/Services";
import Products from "./Components/Products";


function App() {
  return (
    <div className="Container-fluid">
      <HomeSection/>
      <NavBar />
      <Cardie/>
      <Services/>
      <Products/>
        {/* <Crsl /> */}
    </div>
  );
}

export default App;
