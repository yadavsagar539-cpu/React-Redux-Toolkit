import Header from "./Header"
import './App.css'
import Product from "./Product"
import Cartlist from "./CartList"
import Cart from "./Cart"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {


  return (

    <>

      <BrowserRouter>

        <Header />



        <Routes>

          <Route path="/" element={<Product />}></Route>

          <Route path="/cartlist" element={<Cartlist />}></Route>

        </Routes>

      </BrowserRouter>



    </>

  )
}

export default App
