import './App.css'
import { Routes, Route } from "react-router-dom"
import "./utils/FontAwesome/font_awesome"
import Home from "./pages/home/home"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
