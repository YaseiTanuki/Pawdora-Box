import "./App.scss"
import { Routes, Route } from "react-router-dom"
import "./utils/FontAwesome/font_awesome"
//pages
import Home from "./pages/home/home"
import CatPage from "./pages/cat_page/cat_page"
import LoginPage from "./pages/login/login"
import RegisterPage from "./pages/register/register"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cat" element={<CatPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </>
  )
}

export default App
