/* eslint-disable react/prop-types */
import { useState } from "react";

const BotonCompra = ({cantidad}) => {
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
    const eliminar = () => setCounter (0);

    return(
    <div>
        <p>cantidad comprada = {counter}</p>
        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>
        <button onClick={eliminar}>eliminar</button>
    </div>
    )
} 

export default BotonCompra