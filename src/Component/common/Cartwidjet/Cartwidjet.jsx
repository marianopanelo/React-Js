import { useContext } from "react";
import carritoImagen from "../../Img/img/carrito1.png";
import { CarritoContext } from "../../../Context/CarritoContext";


const Cartwidjet = () => {

  let {totalProductos} =  useContext(CarritoContext)


  return (
    <div className="carrito">
      <button>
        <img src={carritoImagen} alt="carrito" className="imgCarrito" />
      </button>
      <h2>{totalProductos}</h2>
    </div>
  );
};

export default Cartwidjet;