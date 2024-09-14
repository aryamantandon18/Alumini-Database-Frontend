import { useState } from "react";
import { SearchContext } from "./SearchContext";
import React from "react";

export const SearchContextProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
       
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
                {children}
        </SearchContext.Provider>
    );
};