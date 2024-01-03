import React, { useState, useEffect } from 'react';
import {
  Box,
  CircularProgress,
  useMediaQuerry,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MovieList';

function Movies() {
  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No Movies that match that name.
          <br />
          Please Search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) return 'An error has occured.';
  // console.log(data);

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
}

export default Movies;
