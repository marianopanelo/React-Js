import carrito from "../img/carrito1.png";

const Cartwidjet = () => {
  return (
    <div className="carrito">
      <button>
        <img src={carrito} alt="carrito" className="imgCarrito" />
      </button>
      <h2>0</h2>
    </div>
  );
};

export default Cartwidjet;