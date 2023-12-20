import "./App.scss"
import { Routes, Route } from "react-router-dom"
import "./utils/FontAwesome/font_awesome"
//pages
import Home from "./pages/home/home"
import CatPage from "./pages/cat_page/cat_page"
import LoginPage from "./pages/login/login"
import RegisterPage from "./pages/register/register"
import PayPage from "./pages/pay_page/pay_page"
import ProductPage from "./pages/product_page/product_page"
import ProductDetail from './pages/product_detail/productdetail';
import ProductContext from "../hooks/productContext"
import { productsData } from "./pages/product_page/product_page"
import React, { useEffect, useState, useContext } from 'react'
function App() {
  const {productID, setProductID} = useContext(ProductContext)
  const [viewProductID, setViewProductID] = useState("1")

  useEffect(() => {
    function getProductID () {
      if(document.URL.includes("/detail")) {
        let myURL = document.URL.replace("/detail", '')
        setViewProductID(myURL.slice(-1) - 1)
        console.log(myURL.slice(-1))
      }
    }

    getProductID();
  }, [productID])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cat" element={<CatPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/pay" element={<PayPage/>}/>
        <Route path="/dog" element={<ProductPage/>}/>
        <Route path="/:id/detail"  element={<ProductDetail product={productsData[viewProductID]}/>}/>
      </Routes>
    </>
  )
}

export default App
