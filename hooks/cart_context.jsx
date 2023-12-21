import { createContext, useState } from "react";

const CartContext = createContext({})

export const CartContextProvider = ({children}) => {
    const [cartProduct, setCartProduct] = useState([]);

    return (
        <CartContext.Provider value={{cartProduct, setCartProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext