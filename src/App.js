import "./App.css";
import NavBar from "./Components/NavBar";
import Crsl from "./Components/Crsl";
import Cardie from "./Components/Cardie";
import Services from "./Components/Services";
import Products from "./Components/Products";


function App() {
  return (
    <div className="Container-fluid">
      <Crsl />
      <NavBar />
      <Cardie/>
      <Services/>
      <Products/>
    </div>
  );
}

export default App;
