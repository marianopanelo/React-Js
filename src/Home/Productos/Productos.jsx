import BotonCompra from "./BotonCompra/BotonCompra"


const Productos = () => {
    const productos = [
        { nombre: "producto 1", cantidad: 10 },
        { nombre: "producto 2", cantidad: 5 },
        { nombre: "producto 3", cantidad: 7 },
    ];

    
    return (
        <div>
            {productos.map((producto, index) => (
                <div key={index}>
                    <p>{producto.nombre}</p>
                    <p>Cantidad: {producto.cantidad}</p>
                    <BotonCompra cantidad={producto.cantidad} />
                </div>
            ))}
        </div>
    );
};

export default Productos