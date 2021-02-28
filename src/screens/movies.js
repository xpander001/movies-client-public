import React, { useState, useEffect } from 'react';
import MovieListItem from 'components/movie-list-item';
import ContainedLayout from 'components/contained-layout';
import apiClient from 'utils/api-client';
import useApiCall from 'hooks/use-api-call';
import SearchForm from 'components/search-form';

const Movies = () => {
  const { data, loaded, run } = useApiCall();
  const [query, setQuery] = useState('');

  const movies = data && data.movies ? data.movies : [];

  useEffect(() => {
    const url = query ? `api/movie?title=${query}` : 'api/movie';
    run(apiClient(url));
  }, [query, run]);

  const onSearch = (newSearch) => {
    setQuery(newSearch);
  };

  return (
    <ContainedLayout>
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
    </ContainedLayout>
  );
};

export default Movies;
