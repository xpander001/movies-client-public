import React from 'react';
import { Link } from 'react-router-dom';

const MovieListItem = ({ title, id }) => {
  const url = `/movies/${id}`;
  return (
    <article className="border mb-2 p-2">
      <Link to={url}>{title}</Link>
    </article>
  );
};

export default MovieListItem;
