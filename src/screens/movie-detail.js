import React, { useState, useEffect } from 'react';
import GeneralLayout from 'components/general-layout';
import { useParams } from 'react-router-dom';
import apiClient from 'utils/api-client';
import useApiCall from 'hooks/use-api-call';

const MovieDetail = () => {
  const { movieId } = useParams();
  const { data: movie, loaded, run } = useApiCall();

  useEffect(() => {
    run(apiClient(`api/movie/${movieId}`));
  }, [movieId, run]);

  if (!loaded) {
    return (
      <GeneralLayout>
        <p>Loading</p>
      </GeneralLayout>
    );
  }

  if (movie) {
    return (
      <GeneralLayout>
        <p>{movie.title}</p>
        <p>{movie.description}</p>
      </GeneralLayout>
    );
  }

  if (loaded && !movie) {
    return (
      <GeneralLayout>
        <p>Movie for id {movieId} not found!</p>
      </GeneralLayout>
    );
  }
};

export default MovieDetail;
