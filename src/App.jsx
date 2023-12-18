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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cat" element={<CatPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/pay" element={<PayPage/>}/>
        <Route path="/dog" element={<ProductPage/>}/>
      </Routes>
    </>
  )
}

export default App
