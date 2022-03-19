import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Nosotros from "./components/nosotros/Nosotros";
import Productos from "./components/productos/ItemListContainer/ItemListContainer.jsx";
import Galeria from "./components/galeria/GaleriaListContainer/GaleriaListContainer";
import Contacto from "./components/contacto/Contacto";
import ItemDetailContainer from "./components/productos/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nosotros" element={<Nosotros />} />
        <Route exact path="/productos" element={<Productos />} />
        <Route exact path="detalle/:itemId" element={<ItemDetailContainer />} />
        <Route exact path="/galeria" element={<Galeria />} />
        <Route exact path="/contacto" element={<Contacto />} />

        {/* <ItemDetailContainer/>
        <Cart/>   */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
