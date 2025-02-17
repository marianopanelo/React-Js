import { useState,useEffect } from "react"
import { Products } from "../../products"
import BotonCompra from "../BotonCompra/BotonCompra";
import { Link, useParams } from "react-router";

export const ItemDetail = () => {
    let {id} = useParams();
    

    const [itemParaCarrito , setItemParaCarrito] = useState({})

    useEffect (()=>{
        let productoSeleccionado = Products.find((Products)=>Products.id === id)
        setItemParaCarrito(productoSeleccionado)
    },[id])


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
