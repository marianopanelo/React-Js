import { useContext, useState } from "react";
import { CarritoContext } from "../../../Context/CarritoContext";
import { toast } from "sonner";

const BotonCompra = ({ producto }) => {
  const { agregarACarrito } = useContext(CarritoContext);
  const [counter, setCounter] = useState(1);
  const sumar = () => {
    if (counter < producto.stock) {
      setCounter(counter + 1);
    } else {
      toast.error("No hay suficiente stock");
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      toast.error("No puede comprar 0 cosas");
    }
  };

  const eliminar = () => setCounter(0);

  const onAdd = () => {
    let precioPorProductos = producto.price * counter;
    let productoCarrito = {
      ...producto,
      cantidadComprada: counter,
      precioPorLosProductos: precioPorProductos,
    };
    
    agregarACarrito(productoCarrito);
    setCounter(0);
  };

  return (
    <div>
      <p>Cantidad a comprar = {counter}</p>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={eliminar}>Eliminar</button>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default BotonCompra;
