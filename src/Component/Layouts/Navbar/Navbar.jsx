import { Link } from "react-router";
import Boton from "../../common/Boton/Boton";
import Cartwidjet from "../../common/Cartwidjet/Cartwidjet";
import logo from "../../Img/img/logo1.png";



const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to={"/"}><h1>Nebula</h1></Link>
      <Link to={"/"}><img src={logo} alt="Nebula" className="imgLogo" /></Link>
      <nav className="navegar">
      <Link to={"/"}><Boton pestaña="inicio" /></Link>
      <Link to={"/productos"}><Boton pestaña="productos" /></Link>
      <Link to={"/ubicacion"}><Boton pestaña="ubicacion" /></Link>  
      <Link to={"/contactenos"}><Boton pestaña="contactanos" /></Link>  
      </nav>
      <Link to={"/carrito"}><Cartwidjet /></Link>  

    </div>
  );
};

export default Navbar;