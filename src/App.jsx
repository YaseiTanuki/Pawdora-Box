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
import CartPage from './pages/cart/cart';
import UserPage from "./pages/user/user"
import SubCartPage from "./pages/sub_cart_page/sub_cart_page"
import StorePage from "./pages/store_page/store_page"
import ThanksPage from "./pages/thanks_page/thanks_page"

function App() {
  const {productID, setProductID} = useContext(ProductContext)
  const [viewProductID, setViewProductID] = useState(1)

  useEffect(() => {
    function getProductID () {
      if(document.URL.includes("/detail")) {
        let myURL = document.URL.replace("/detail", '')
        myURL = myURL.replace("http://localhost:1707/", '')
        let id = Number(myURL)
        console.log(id - 1)
        setViewProductID(id - 1)
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
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/:id/detail"  element={<ProductDetail product={productsData[viewProductID]}/>}/>
        <Route path="/user-info" element={<UserPage />} />
        <Route path="/subcartpage" element={<SubCartPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/thanks" element={<ThanksPage />} />
      </Routes>
    </>
  )
}

export default App
