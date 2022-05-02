import { Grid } from '@mui/material';
import React, { useContext } from 'react'
import SearchContext from '../SearchContext';
import BeerCard from './BeerCard';



export default function BeerContainer() {
    const { search, setSearch,fetchedArr } = useContext(SearchContext);
    console.log(fetchedArr);
  return (
    <Grid container spacing={2}>
        {fetchedArr ? fetchedArr.filter(beer => beer.name.toLowerCase().startsWith(search.toLowerCase())).map(input => 
        (
              <Grid item xs={3}>
                <BeerCard key={input.name} image={input.image_url} title={input.name} description={input.description}/>
              </Grid>
        
)
        
        ):null}
    </Grid>
  )
}
