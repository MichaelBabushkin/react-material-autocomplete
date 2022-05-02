import React, { useContext, useEffect, useState }  from 'react';
import SearchContext from '../SearchContext';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete, { createFilterOptions }  from '@mui/material/Autocomplete';
import axios from 'axios';
import { Grid } from '@mui/material';



export default function SearchBar() {
    const { search, setSearch,fetchedArr, setFetchedArr} = useContext(SearchContext);
    const [ beers, setBeers ] = useState({});

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
      });

    useEffect(() => {
        const fetchBeers = async () => {
        const result = await axios(
            'https://api.punkapi.com/v2/beers',
          );
      if(result.status === 200){
          setBeers(result.data);
          setFetchedArr(Object.values(result.data));
      }
        };
        fetchBeers();
        
    }, [])

  return (
<Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  margin={2}
  >
        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
                freeSolo
                options={Object.values(beers).map((option) => option.name)}
                filterOptions={filterOptions}
                onInputChange={(event, newInputValue) => {
                    setSearch(newInputValue);
                }}
                renderInput={(params) =>
                    <TextField {...params}
                    label="Search for Beer"
                    onChange={(e) =>setSearch(e.target.value)}
                    
                    
                    />}
                />
            </Stack>
                    </Grid>
    

  )
}
