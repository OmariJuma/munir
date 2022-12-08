import "./App.css";
import NavBar from "./Components/NavBar";
// import Crsl from "./Components/Crsl";
import HomeSection from "./Components/HomeSection";
import Cardie from "./Components/Cardie";
import Services from "./Components/Services";


function App() {
  return (
    <div className="Container-fluid">
      <HomeSection/>
      <NavBar />
      <Cardie/>
      <Services/>
        {/* <Crsl /> */}
    </div>
  );
}

export default App;
