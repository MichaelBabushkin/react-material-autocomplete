import React, { useState } from 'react';
import './App.css';
import BeerContainer from './components/BeerContainer';

import SearchBar from './components/SearchBar';
import SearchContext from './SearchContext';



function App() {
  const [search, setSearch] = useState("");
  const [fetchedArr, setFetchedArr] = useState([]);

  return (
    <SearchContext.Provider value={{search, setSearch,fetchedArr, setFetchedArr}}>

    <div className="App">
      <SearchBar/>
      <BeerContainer/>
    </div>
    </SearchContext.Provider>
  );
}

export default App;
