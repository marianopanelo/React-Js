import Footer from "./Component/Layouts/Footer/Footer"
import Navbar from "./Component/Layouts/Navbar/Navbar"
import FetchingData from "./Component/Pages/FetchingData/FetchingData"
import Home from "./Component/Pages/Home/Home"
import { ItemDetail } from "./Component/common/itemDetail/itemDetail"
import ItemListContainer from "./Component/Pages/ItemListContainer/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router"
import { Contactenos } from "./Component/Pages/Contactenos/Contactenos"
import { Ubicacion } from "./Component/Pages/ubicacion/ubicacion"
import NotFound from "./Component/Pages/Erro/Error"



function App() {

  return(

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/productos" element={<ItemListContainer/>}/>
        <Route path="/ubicacion" element={<Ubicacion/>}/>
        <Route path="/contactenos" element={<Contactenos/>}/>
        <Route path="/producto_detalle/:id" element={<ItemDetail/>}/>
        <Route path="/categoria/:category" element={<ItemListContainer/>}/>
        <Route path="/carrito" element={<h2> mi carrito </h2>}/>
        <Route path="/usuarios" element={<FetchingData/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  ) 
  }


export default App
