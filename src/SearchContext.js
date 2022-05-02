import React from 'react';
import { createContext } from "react";


const SearchContext = createContext({
    search: "",
    setSearch: () => {},
    fetchedArr : [],
    setFetchedArr: () => {}
  });
export default SearchContext;