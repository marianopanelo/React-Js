/* eslint-disable react/prop-types */
import { Link } from "react-router";
import BotonCompra from "../BotonCompra/BotonCompra";
import "./ProductCard.css"; 

const ProductCard = ({ id, title, price, stock, category, description, imageURL }) => {
  return (
    <div className="product-card">
      <img src={imageURL} alt={title} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">Precio: ${price}</p>
        <p className="product-stock">stock: {stock}</p>

        <BotonCompra producto={{ id, title, price, stock, category, description, imageURL }} />
        <button><Link to={`/producto_detalle/${id}`}>Ver Detalle</Link></button>
        </div>
    </div>
  );
};

export default ProductCard;