/* eslint-disable react/prop-types */

import { createContext, useMemo, useState } from "react";
import { toast } from "sonner";

export const CarritoContext = createContext();

export const CarritoContextExport = ({ children }) => {
  const [cart, setCart] = useState([]);
  ;

  const totalAPagar = useMemo(
    () => cart.reduce((acc, producto) => acc + producto.precioPorLosProductos, 0),
    [cart]
  );

  const agregarACarrito = (dataProducto) => {
    let productoYAAgregado = cart.some((elemento) => elemento.id === dataProducto.id);

    if (productoYAAgregado) {
      let stockExcedido = false;

      const nuevoCarrito = cart.map((elemento) => {
        if (elemento.id === dataProducto.id) {
          const nuevaCantidad = elemento.cantidadComprada + dataProducto.cantidadComprada;

          if (nuevaCantidad > dataProducto.stock) {
            stockExcedido = true;
            return elemento;
          }

          return { ...elemento, cantidadComprada: nuevaCantidad };
        }
        return elemento;
      });

      if (stockExcedido) {
        toast.error("no se tiene tanto stock para seguir sumando componentes");
        return; 
      }

      setCart(nuevoCarrito);
      toast.success("Se sumaron componentes al carrito");
    } else {
      if (dataProducto.cantidadComprada > dataProducto.stock) {
        toast.error("No tenemos suficiente stock para agregar este producto al carrito");
        return;
      }

      setCart([...cart, dataProducto]);
      toast.success("Producto agregado");
    }
  };

  const eliminarProductoCarrito = (id) => {
    const nuevoCarrito = cart.filter((elemento) => elemento.id !== id);
    setCart(nuevoCarrito);
    toast.success("Producto eliminado");
  };

  const vaciarCarrito = () => {
    setCart([]);
    toast.success("Carrito eliminado");
  };

  const totalProductos = useMemo(
    () => cart.reduce((acc, producto) => acc + producto.cantidadComprada, 0),
    [cart]
  );

  let DatosPasados = {
    agregarACarrito,
    eliminarProductoCarrito,
    vaciarCarrito,
    cart,
    totalAPagar,
    totalProductos,
  };

  return <CarritoContext.Provider value={DatosPasados}>{children}</CarritoContext.Provider>;
};
