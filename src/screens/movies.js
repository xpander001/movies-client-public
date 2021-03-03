import React, { useState, useEffect } from 'react';
import MovieListItem from 'components/movie-list-item';
import GeneralLayout from 'components/general-layout';
import apiClient from 'utils/api-client';
import SearchForm from 'components/search-form';
import useApiCall from 'hooks/use-api-call';

const Movies = () => {
  const { data, loaded, run } = useApiCall();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const url = query ? `api/movie?title=${query}` : 'api/movie';
    run(apiClient(url));
  }, [query, run]);

  const onSearch = (newSearch) => {
    setQuery(newSearch);
  };

  const movies = data && data.movies ? data.movies : [];

  return (
    <GeneralLayout>
      <SearchForm initialQuery={query} onSearch={onSearch} />
      {!loaded && <p>Loading movies</p>}
      {loaded && movies.length
        ? movies.map((movie) => (
            <MovieListItem title={movie.title} key={movie._id} id={movie._id} />
          ))
        : null}
      {loaded && !movies.length ? (
        <p>There are no movies with the required results</p>
      ) : null}
    </GeneralLayout>
  );
};

export default Movies;
