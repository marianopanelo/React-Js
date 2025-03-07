import { useContext, useState } from "react";
import { toast } from "sonner";
import { CarritoContext } from "../../../Context/CarritoContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";





const Checkout = () => {

    const {cart,totalAPagar,vaciarCarrito } = useContext(CarritoContext)
    const [ordenId, setOrdenId] = useState(null);    
    const [cargando, setCargando] = useState(false)

    const [user, setUser] = useState({
        nombre : "",
        telefono:"",
        email:"",
        direccion:"",
        metodoDePago :"",
    })


    
    const handleSubmit = (evento) => {
        evento.preventDefault();
        setCargando (true)
        let orden = {
            buyer : user,
            carrito : cart,
            totalAPagar : totalAPagar,
        }
        let infoBaseDeDatos = collection(db,"ordenes")
        const valudarCompra = addDoc(infoBaseDeDatos,orden)   
        valudarCompra.then((res) => {
            setOrdenId(res.id)
            vaciarCarrito()
            setCargando (false)
        }).catch((error)=>{console.log(error);
        });
        let restaStock = collection(db, "products")       
        

        orden.carrito.forEach((item) => {
            let productoActualizado = doc (restaStock ,item.id )
            updateDoc(productoActualizado, {stock : item.stock -item.cantidadComprada })
        });

        toast.success("gracias por comprar con nosotros");


    };


    const handleChange = (evento) =>{
        const {value , name} = evento.target

        setUser({...user, [name] :value})
    }
    
    const metodo_de_pago = [
        {label : "medio de pago" , value :""},
        {label : "efectivo" , value :"efectivo"},
        {label : "mercado pago" , value :"mercado pago"},
        {label : "cuenta dni" , value :"cuenta DNI"},
        {label : "MODO" , value :"MODO"},

    ]
    


    return (
        <div>
            {
                !cargando && ordenId && (<h2>gracias por su compra , su id de comra es {ordenId}</h2>)
            }

            {!cargando && !ordenId &&(
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" name="nombre" onChange={handleChange} />
                <input type="text" placeholder="Teléfono" name="telefono" onChange={handleChange} />
                <input type="text" placeholder="Email" name="email" onChange={handleChange} />
                <input type="text" placeholder="Dirección" name="direccion" onChange={handleChange} />

                <select name="metodoDePago" onChange={handleChange}>
                    {metodo_de_pago.map((metodoDePago) => (
                        <option key={metodoDePago.value} value={metodoDePago.value}>
                            {metodoDePago.label}
                        </option>
                    ))}
                </select>

                <button type="submit">Comprar</button>
                <button type="button">Cancelar</button>
            </form>
            )
            }
            
            {
                cargando && <h2>cargando ...</h2>
            }

        </div>
    );
};

export default Checkout