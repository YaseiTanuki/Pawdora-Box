import "./App.scss"
import { Routes, Route } from "react-router-dom"
import "./utils/FontAwesome/font_awesome"
import Header from "./components/big_components/header/header"
import Footer from "./components/big_components/footer/footer"
//pages
import Home from "./pages/home/home"
import CatPage from "./pages/cat_page/cat_page"

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cat" element={<CatPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
