import Boton from "./Boton/Boton";
import Cartwidjet from "./Cartwidjet/Cartwidjet";
import logo from "./img/logo1.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <h1>Nebula</h1>
      <img src={logo} alt="Nebula" className="imgLogo" />
      <nav className="navegar">
        <Boton pestaña="productos" />
        <Boton pestaña="ubicacion" />
        <Boton pestaña="nosotros" />
        <Boton pestaña="contactanos" />
      </nav>
      <Cartwidjet />
    </div>
  );
};

export default Navbar;