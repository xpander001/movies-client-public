import React from 'react';

const MovieListItem = (props) => {
  return <article className="border mb-2 p-2">{props.title}</article>;
};

export default MovieListItem;
