import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./components/Cards/card.css";
import "./components/Count/Count";
import Cart from "./pages/Cart/Cart";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/navBar.jsx";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <CartContextProvider>
          <Logo />
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/" element={<Logo />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
