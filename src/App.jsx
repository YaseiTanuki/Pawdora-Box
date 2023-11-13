import "./App.scss"
import { Routes, Route } from "react-router-dom"
import "./utils/FontAwesome/font_awesome"
import Header from "./components/big_components/header/header"
import Footer from "./components/big_components/footer/footer"
//pages
import Home from "./pages/home/home"
import CatPage from "./pages/cat_page/cat_page"
import LoginPage from "./pages/login/login"

function App() {
  return (
    <>
      {
        window.location.pathname !== "/login" ? <Header/> : <></>
      }
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cat" element={<CatPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
