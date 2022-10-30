import "./App.css";
import "./components/navBar.jsx"
import Navbar from "./components/navBar.jsx";
import "./components/navBar.css";

function App() {
  let buttonServicios = "Servicios";
  let buttonProductos = "Productos";
  let buttonNosotros = "Nosotros";
  let buttonContacto = "Contactos";
  return (
    <div className="root">
      <section className="section">
        <header className="logo-container">
          <img
            src="./src/assets/SCH.webp"
            className="logo-sch"
            alt="Logo de SCHmecanica"
            width="90"
            height="90"
          />
        </header>
      </section>
      <nav className='menu-container'>
        <a href=""><Navbar boton={buttonServicios} /></a>
        <a href=""><Navbar boton={buttonProductos} /></a>
        <a href=""><Navbar boton={buttonNosotros} /></a>
        <a href=""><Navbar boton={buttonContacto} /></a>
      </nav>
    </div>
  )
}

export default App;
