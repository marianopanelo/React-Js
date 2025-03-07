import { useContext } from "react";
import { Link } from "react-router";
import { CarritoContext } from "../../../Context/CarritoContext";

const Carrito = () => {
  const { vaciarCarrito, cart, totalAPagar, eliminarProductoCarrito } =
    useContext(CarritoContext);

  return (
    <div>
      {cart.length === 0 ? (
        <h3>El carrito está vacío</h3>
      ) : (
        <>
          <h2>Total a pagar: {totalAPagar}</h2> <br />
          <br />
          <Link to={"/Checkout"}>
            <button>Finalizar compra</button>
          </Link>
          <br />
          <br />
          <button onClick={vaciarCarrito}>Eliminar carrito</button>
          <br />
          <br />
          <br />
          {cart.map((elemento) => (
            <div className="articulosCarrito" key={elemento.id}>
              <h2>{elemento.title}</h2>
              <img
                src={elemento.imageURL}
                alt={elemento.title}
                className="imagen-carrito"
              />
              <p>Precio por unidad: ${elemento.price}</p>
              <p>Cantidad: {elemento.cantidadComprada}</p>
              <button onClick={() => eliminarProductoCarrito(elemento.id)}>
                eliminar producto
              </button>
              <br />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Carrito;
