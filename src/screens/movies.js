import React, { useState, useEffect } from 'react';
import MovieListItem from 'components/movie-list-item';
import GeneralLayout from 'components/general-layout';
import apiClient from 'utils/api-client';
import SearchForm from 'components/search-form';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    apiClient(`api/movie?title=${query}`).then(
      (data) => {
        setMovies(data.movies);
        setLoaded(true);
      },
      (error) => {
        setLoaded(true);
      },
    );
  }, [query]);

  const updateQuery = (query) => {
    setQuery(query);
  };

  return (
    <GeneralLayout>
      <SearchForm initialQuery={query} onSearch={updateQuery} />
      {!loaded && <p>Loading movies</p>}
      {movies.map((movie) => (
        <MovieListItem title={movie.title} key={movie._id} />
      ))}
      {loaded && !movies.length ? <div> No results</div> : null}
    </GeneralLayout>
  );
};

export default Movies;
