import ProductCard from "../../common/ProductCard/ProductCard";
import { Products } from "../../products";
import useProductos from "../../../hooks/useProductos";
import { Link, useParams } from "react-router";

const ItemListContainer = () => {
  const listaProductos = useProductos(Products); 
  const {category} = useParams()
  console.log(category);
  let arrayFiltrado = Products.filter(elemento=>elemento.category === category)

  if(category){
    return (
      <div>
        <button className="boton_filtro"><Link to={`/productos`}>todos los productos</Link></button>
        <h2>filtro usado en {category}</h2>
  
        <div className="product-container">
          {arrayFiltrado.map((producto) => (
            <ProductCard key={producto.id} {...producto} />
          ))}
        </div>
      </div>
    );
  }else{
    return (
      <div>
        <h2>filtrar</h2>
        <button className="boton_filtro"><Link to={`/categoria/periféricos`}>periféricos</Link></button>
        <button className="boton_filtro"><Link to={`/categoria/accesorios y extras`}>accesorios y extras</Link></button>
        <button className="boton_filtro"><Link to={`/categoria/componentes internos`}>componentes internos</Link></button>
        <h2>PRODUCTOS</h2>
  
        <div className="product-container">
          {listaProductos.map((producto) => (
            <ProductCard key={producto.id} {...producto} />
          ))}
        </div>
      </div>
    );
  };
  }


export default ItemListContainer;