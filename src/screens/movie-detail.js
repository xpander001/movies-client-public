import React, { useState, useEffect } from 'react';
import ContainedLayout from 'components/contained-layout';
import { useParams } from 'react-router-dom';
import apiClient from 'utils/api-client';
import useApiCall from 'hooks/use-api-call';

const MovieDetail = ({ user, logout }) => {
  const { movieId } = useParams();
  const { data: movie, loaded, run } = useApiCall();

  useEffect(() => {
    run(apiClient(`api/movie/${movieId}`));
  }, [movieId, run]);

  if (!loaded) {
    return (
      <ContainedLayout user={user} logout={logout}>
        <p>Loading</p>
      </ContainedLayout>
    );
  }

  if (movie) {
    return (
      <ContainedLayout user={user} logout={logout}>
        <p>{movie.title}</p>
        <p>{movie.description}</p>
      </ContainedLayout>
    );
  }

  if (loaded && !movie) {
    return (
      <ContainedLayout user={user} logout={logout}>
        <p>Movie for id {movieId} not found!</p>
      </ContainedLayout>
    );
  }
};

export default MovieDetail;
