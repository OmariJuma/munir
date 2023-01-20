import "./App.css";
import NavBar from "./Components/NavBar";
import Crsl from "./Components/Crsl";
import Services from "./Components/Services";
import Products from "./Components/Products";
import Success from "./Components/Success";


function App() {
  return (
    <div className="Container-fluid">
      <NavBar />
      <Crsl />
      <Services/>
      <Success/>
      {/* <Products/> */}
    </div>
  );
}

export default App;
