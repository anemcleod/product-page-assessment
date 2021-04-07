import React, {createContext, useState} from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(false)
    const [cart, setCart] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    return (
        <div>
            <DataContext.Provider value={{cart, setCart, isLoading, setIsLoading, cartItems, setCartItems}}>
                {children}
            </DataContext.Provider>
        </div>
    )
}