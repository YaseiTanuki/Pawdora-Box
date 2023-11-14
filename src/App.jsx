import "./App.scss"
import { Routes, Route } from "react-router-dom"
import "./utils/FontAwesome/font_awesome"
//pages
import Home from "./pages/home/home"
import CatPage from "./pages/cat_page/cat_page"
import LoginPage from "./pages/login/login"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cat" element={<CatPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </>
  )
}

export default App
