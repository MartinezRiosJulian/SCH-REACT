import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./components/Cards/card.css";
import "./components/Count/Count";
import Cart from "./pages/Cart/cart";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/navBar.jsx";

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Logo />
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/" element={<Logo />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
        <Cart />
      </BrowserRouter>
    </div>
  );
}

export default App;
