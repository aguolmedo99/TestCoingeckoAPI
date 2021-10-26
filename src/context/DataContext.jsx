import React, { Children, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    
    const [coins, setCoins] = useState([]);
    const [page,setPage] = useState([]);
    
    return (

        <DataContext.Provider>
            { children }
        </DataContext.Provider>

    )
}