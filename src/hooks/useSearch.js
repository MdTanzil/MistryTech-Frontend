import { useContext } from "react";
import { SearchContext } from "../context";

const useSearch = () => {
  const auth = useContext(SearchContext);
  return auth;
};

export default useSearch;
