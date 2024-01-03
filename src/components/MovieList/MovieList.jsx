import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';
import Movie from '../Movie/Movie';

function MovieList({ movies }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie, i) => (
        <Movie key={movie.id} movie={movie} i={i} />
      ))}
    </Grid>
  );
}

export default MovieList;
