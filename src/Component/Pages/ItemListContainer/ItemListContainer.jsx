import ProductCard from "../../common/ProductCard/ProductCard";
import { Link, useParams } from "react-router";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, /*addDoc*/ } from "firebase/firestore";
import { useEffect, useState } from "react";
//import { Products } from "../../products";  para rellenar con adddoc

const ItemListContainer = () => {
  const [listaProductos1, setListaProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const coleccioProductos = collection(db, "products");
      const productos = await getDocs(coleccioProductos);

      let productosCompletos = productos.docs.map((elemento) => ({
        id: elemento.id,
        ...elemento.data(),
      }));

      setListaProductos(productosCompletos);
    };

    obtenerProductos();
  }, []);

  /*const rellenarBaseDeDatos = () => {
    let coleccioProductos = collection(db, "products");
    Products.forEach((Products) => {
      addDoc(coleccioProductos, Products);
    });
   alert ("productos agregados")
  };*/

  const listaProductos = listaProductos1;

  const { category } = useParams();

  const arrayFiltrado = listaProductos.filter(
    (elemento) => elemento.category === category
  );

  if (listaProductos.length === 0) {
    return <h2>cargando productos .....</h2>;
  } else {
    if (category) {
      return (
        <div>
          <button className="boton_filtro">
            <Link to={`/productos`}>todos los productos</Link>
          </button>
          <h2>filtro usado en {category}</h2>

          <div className="product-container">
            {arrayFiltrado.map((producto) => (
              <ProductCard key={producto.id} {...producto} />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>filtrar</h2>
          <button className="boton_filtro">
            <Link to={`/categoria/periféricos`}>periféricos</Link>
          </button>
          <button className="boton_filtro">
            <Link to={`/categoria/accesorios y extras`}>
              accesorios y extras
            </Link>
          </button>
          <button className="boton_filtro">
            <Link to={`/categoria/componentes internos`}>
              componentes internos
            </Link>
          </button>
          <h2>PRODUCTOS</h2>

          <div className="product-container">
            {listaProductos.map((producto) => (
              <ProductCard key={producto.id} {...producto} />
            ))}
          </div>
          {/*<button onClick={rellenarBaseDeDatos}>cargar productos</button>*/}
        </div>
      );
    }
  }
};

export default ItemListContainer;
