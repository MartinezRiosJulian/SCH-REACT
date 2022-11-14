import "./App.css";
import Card from "./components/Cards/card";
import CartWidget from "./components/Cartwidget/cartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/navBar.jsx";

function App() {
  let buttonLlantas = "Llantas";
  let buttonOpticas = "Opticas";
  let buttonPastillas = "Pastillas.F";
  let buttonAmortiguadores = "Amortiguadores";
  return (
    <div className="root">
      <section className="section">
        <header className="logo-container">
          <img
            src="public/assets/SCH.webp"
            className="logo-sch"
            alt="Logo de SCHmecanica"
            width="90"
            height="90"
          />
        </header>
      </section>
      <nav className='menu-container'>
        <a href=""><Navbar boton={buttonLlantas} /></a>
        <a href=""><Navbar boton={buttonOpticas} /></a>
        <a href=""><Navbar boton={buttonPastillas} /></a>
        <a href=""><Navbar boton={buttonAmortiguadores} /></a>
      </nav>
      <div className="card-site-llantas">
        <Card obj={"Producto"} />
      </div>
      <div className="card-site-opticas">
        <Card obj={"Producto"} />
      </div>
      <div className="card-site-pastillas">
        <Card obj={"Producto"} />
      </div>
      <div className="card-site-amortiguadores">
        <Card obj={"Producto"} />
      </div>
      <div className="cart-site">
        <a href=""><CartWidget /></a>
      </div>
      <div>
        <ItemListContainer/>
      </div>

    </div>
  )
}

export default App;
