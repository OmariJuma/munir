import "./App.css";
import NavBar from "./Components/NavBar";
// import Crsl from "./Components/Crsl";
import HomeSection from "./Components/HomeSection";
import Cardie from "./Components/Cardie";
import AbtGnrl from "./Components/AbtGnrl";

function App() {
  return (
    <div className="Container">
      <HomeSection/>
      <NavBar />
      <Cardie/>
      {/* <AbtGnrl/> */}
        {/* <Crsl /> */}
    </div>
  );
}

export default App;
