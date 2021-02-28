import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const MovieListItem = ({ title, description, id }) => {
  return (
    <article className="border mb-2 p-2">
      <RouterLink to={`/movies/${id}`}>{title}</RouterLink>
    </article>
  );
};

export default MovieListItem;
