import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import apiClient from 'utils/api-client';
import GeneralLayout from 'components/general-layout';

const MovieDetail = () => {
  // api/movie/:movieId
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const url = `api/movie/${id}`;
    apiClient(url).then(
      (movie) => {
        setMovie(movie);
        setLoaded(true);
      },
      (error) => {
        setLoaded(true);
      },
    );
  }, [id]);
  return (
    <GeneralLayout>
      {loaded && movie ? (
        <div>
          <h1>{movie.title}</h1>
          <h3>{movie.description}</h3>
        </div>
      ) : null}
    </GeneralLayout>
  );
};

export default MovieDetail;
