import React, { useState, useEffect } from 'react';
import MovieListItem from 'components/movie-list-item';
import GeneralLayout from 'components/general-layout';
import Input from 'components/input';
import apiClient from 'utils/api-client';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    apiClient('api/movie').then(
      (data) => {
        setMovies([...data.movies]);
        setLoaded(true);
      },
      (error) => {
        setLoaded(true);
      },
    );
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.startsWith(query),
  );

  const updateQuery = (e) => {
    setQuery(e.currentTarget.value);
  };

  return (
    <GeneralLayout>
      <div className="mb-4">
        <Input value={query} onChange={updateQuery} />
      </div>
      {!loaded && <p>Loading movies</p>}
      {loaded && filteredMovies.length
        ? filteredMovies.map((movie) => (
            <MovieListItem title={movie.title} key={movie._id} />
          ))
        : null}
      {loaded && !filteredMovies.length ? (
        <p>There are no movies with the required results</p>
      ) : null}
    </GeneralLayout>
  );
};

export default Movies;
