import { useEffect, useState } from "react";

const useProductos = (productos) => {
    const [listaProductos, setListaProductos] = useState([]);

    useEffect(() => {
        const getProduct = new Promise((resolve, reject) => {
            const shouldResolve = true;
            if (shouldResolve) {
                resolve(productos);
            } else {
                reject({ status: 404, message: "No se pudieron traer los productos" });
            }
        });

        getProduct
            .then((res) => {
                setListaProductos(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [productos]); 
    return listaProductos; 
};

export default useProductos;