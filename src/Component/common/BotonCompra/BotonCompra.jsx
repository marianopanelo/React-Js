import { useState } from "react";

// eslint-disable-next-line react/prop-types
const BotonCompra = ( { producto } ) => {
  const [counter, setCounter] = useState(1);

  let carrito = []

  const sumar = () => {
    if (counter < producto.stock) {
      setCounter(counter + 1);
    } else {
      alert("No tenemos tanto stock disponible");
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      alert("No puede comprar 0 cosas");
    }
  };

  const eliminar = () => setCounter(0);
 
  const onAdd = () => {
    console.log("agregar al carrito");
    console.log(producto);
    console.log("cantidad comprada = " + counter);
    let precioPorProductos = (producto.price * counter)
    let productoCarrito = {...producto,
      cantidadComprada : counter,
      precioPorLosProductos : precioPorProductos
    }
    carrito.push(productoCarrito)
    console.log(carrito);
    

  };
   

  return (
    <div>
      <p>Cantidad a comprar = {counter}</p>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={eliminar}>Eliminar</button>
      <button onClick={onAdd}>agregar al carrito</button>

    </div>
  );
};

export default BotonCompra;