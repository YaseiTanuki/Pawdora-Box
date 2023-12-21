import { createContext, useState } from "react";

const PayContext = createContext({})

export const PayContextProvider = ({children}) => {
    const [payProduct, setPayProduct] = useState([]);

    return (
        <PayContext.Provider value={{payProduct, setPayProduct}}>
            {children}
        </PayContext.Provider>
    )
}

export default PayContext