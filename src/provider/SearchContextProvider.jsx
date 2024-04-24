/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { SearchContext } from "../context";

const SearchContextProvider = ({ children }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    // Function to update isMobileView based on screen width
    const updateIsMobileView = () => {
      setIsMobileView(window.innerWidth <= 1024); // Adjust this value according to your design
    };

    // Call the function once to initialize
    updateIsMobileView();

    // Add event listener to update isMobileView when window is resized
    window.addEventListener("resize", updateIsMobileView);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateIsMobileView);
    };
  }, []);

  const val = {
    isSearch,
    setIsSearch,
    isMobileView,
    setIsMobileView,
  };
  return (
    <SearchContext.Provider value={val}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;
