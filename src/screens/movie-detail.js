import React, { useState, useEffect } from 'react';
import GeneralLayout from 'components/general-layout';
import { useParams } from 'react-router-dom';
import apiClient from 'utils/api-client';

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const url = `api/movie/${movieId}`;
    apiClient(url).then(
      (data) => {
        setMovie(data);
        setLoaded(true);
      },
      (error) => {
        setLoaded(true);
      },
    );
  }, [movieId]);

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
