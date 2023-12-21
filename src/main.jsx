import React from "react"
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { ProductContextProvider } from "../hooks/productContext.jsx"
import { CartContextProvider } from "../hooks/cart_context.jsx"
import { PayContextProvider } from "../hooks/pay_context.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <CartContextProvider>
          <PayContextProvider>
            <App />
          </PayContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)