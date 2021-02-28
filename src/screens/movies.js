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
    const url = query ? `api/movie?title=${query}` : 'api/movie';
    apiClient(url).then(
      (data) => {
        setMovies([...data.movies]);
        setLoaded(true);
      },
      (error) => {
        setLoaded(true);
      },
    );
  }, [query]);

  const onSearch = (newSearch) => {
    setQuery(newSearch);
  };

  return (
    <GeneralLayout>
      <SearchForm initialQuery={query} onSearch={onSearch} />
      {!loaded && <p>Loading movies</p>}
      {loaded && movies.length
        ? movies.map((movie) => (
            <MovieListItem title={movie.title} key={movie._id} />
          ))
        : null}
      {loaded && !movies.length ? (
        <p>There are no movies with the required results</p>
      ) : null}
    </GeneralLayout>
  );
};

export default Movies;
