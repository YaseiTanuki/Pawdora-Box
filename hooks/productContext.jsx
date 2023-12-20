import { createContext, useState } from "react";

const ProductContext = createContext({})

export const ProductContextProvider = ({children}) => {
    const [productID, setProductID] = useState(0);

    return (
        <ProductContext.Provider value={{productID, setProductID}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext