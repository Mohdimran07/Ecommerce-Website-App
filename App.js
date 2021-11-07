// import Products from "./components/Header/Products";
import "./App.css";
import Items from "./components/Header/Items";
import Headers from "./components/Header/Headers";
import Arr from "./components/Header/Arr";
import Button from "./components/Header/Button";
import Footer from "./components/Header/Footer";

function App() {
  return (
    <div>
      <div>
        <Headers />
         <Items items={Arr} />
        <Button />
      </div>
      <Footer />
    </div>
  );
}

export default App;
