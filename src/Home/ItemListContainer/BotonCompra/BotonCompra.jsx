import { useState } from "react";

// eslint-disable-next-line react/prop-types
const BotonCompra = ({ cantidad }) => {
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    if (counter < cantidad) {
      setCounter(counter + 1);
    } else {
      alert("No tenemos tanto stock disponible");
    }
  };

  const restar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("No puede ser menor a 0");
    }
  };

  const eliminar = () => setCounter(0);

  return (
    <div>
      <p>Cantidad comprada = {counter}</p>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={eliminar}>Eliminar</button>
    </div>
  );
};

export default BotonCompra;