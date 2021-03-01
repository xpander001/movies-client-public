import React from 'react';
import MovieListItem from 'components/movie-list-item';
import GeneralLayout from 'components/general-layout';
import Input from 'components/input';
import Button from 'components/button';
import apiClient from 'utils/api-client';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      movies: [],
      loaded: false,
    };

    this.updateQuery = this.updateQuery.bind(this);
  }

  componentDidMount() {
    apiClient('api/movie').then((data) =>
      this.setState({
        ...this.state,
        movies: data.movies,
        loaded: true,
      }),
    );
  }

  updateQuery(e) {
    this.setState({ ...this.state, query: e.currentTarget.value });
  }

  render() {
    const { movies, loaded, query } = this.state;
    const filteredMovies = movies.filter((movie) =>
      movie.title.startsWith(query),
    );

    return (
      <GeneralLayout>
        <div className="mb-4">
          <Input label="Search" value={query} onChange={this.updateQuery} />
        </div>
        {!loaded && <p>Loading</p>}

        {filteredMovies.map((movie) => (
          <MovieListItem title={movie.title} key={movie._id} />
        ))}
        <NoResults loaded={loaded} moviesLength={filteredMovies.length} />
      </GeneralLayout>
    );
  }
}

const NoResults = ({ loaded, moviesLength }) => {
  if (loaded && !moviesLength) {
    return <p>No hay pelis colega</p>;
  }
  return null;
};

export default Movies;
