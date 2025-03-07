import { useState,useEffect } from "react"
//import { Products } from "../../products"
import BotonCompra from "../BotonCompra/BotonCompra";
import { Link, useParams } from "react-router";
import ItemListContainer from "../../Pages/ItemListContainer/ItemListContainer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";




export const ItemDetail = () => {
  let { id } = useParams();
  const Products = ItemListContainer.listaProductos

    const [itemParaCarrito , setItemParaCarrito] = useState({})



    useEffect(() => {
      const obtenerProducto = async () => {
          const productoRef = doc(db, "products", id);
          const productoSnap = await getDoc(productoRef);

          if (productoSnap.exists()) {
              setItemParaCarrito({ id: productoSnap.id, ...productoSnap.data() });
          } else {
              console.error("Producto no encontrado");
          }
      };

      obtenerProducto();
  }, [id]);

  if (!itemParaCarrito) {
      return <h2>Cargando producto...</h2>;
  }


  return (
    <div>
        <h2>{itemParaCarrito.title}</h2>
        <img src={itemParaCarrito.imageURL} alt={itemParaCarrito.title} className="product-image" />        
        <h2>{itemParaCarrito.description}</h2>
        <h2>precio : {itemParaCarrito.price}</h2>
        <h2>stock : {itemParaCarrito.stock}</h2>
        <BotonCompra producto={itemParaCarrito} />
        <Link to={"/productos"}><button >volver atras</button></Link>
    </div>
  )
}
