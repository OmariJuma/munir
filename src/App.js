import "./App.css";
import NavBar from "./Components/NavBar";
import Crsl from "./Components/Crsl";
import Services from "./Components/Services";
import Products from "./Components/Products";


function App() {
  return (
    <div className="Container-fluid">
      <NavBar />
      <Crsl />
      <Services/>
      {/* <Products/> */}
    </div>
  );
}

export default App;
