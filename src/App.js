import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import Home from "./Components/Home";
import Product from "./Components/product";
import Faq from "./faq";
import Contacts from "./contacts";
import About from "./about";
import ChangeUi from "./Components/Admin/common/changeUi";




export default function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="admin" element={<Admin></Admin>}></Route>
    <Route path="admin/changeUI" element={<ChangeUi></ChangeUi>}></Route>
    <Route path="" element={<Home></Home>}/>
    <Route path="/faq" element={<Faq></Faq>}/>

    <Route path="/contact" element={<Contacts></Contacts>}/>

    <Route path="/about" element={<About></About>}/>
    <Route path="/product/:type" element={<Product></Product>}>
      </Route></Routes></BrowserRouter>
  )
}