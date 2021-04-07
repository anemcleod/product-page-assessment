import React, {createContext, useState} from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    return (
        <div>
            <DataContext.Provider value={{cart, setCart, isLoading, setIsLoading}}>
                {children}
            </DataContext.Provider>
        </div>
    )
}