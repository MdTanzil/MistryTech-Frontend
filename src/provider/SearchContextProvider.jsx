/* eslint-disable react/prop-types */
import { useState } from "react";
import { SearchContext } from "../context";


const SearchContextProvider = ({children }) => {
    const [isSearch, setIsSearch] = useState(false);
    const val = {
        isSearch,
        setIsSearch
    }
    return (
        <SearchContext.Provider value={val}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContextProvider;