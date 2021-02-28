import React from 'react';
import MovieListItem from 'components/movie-list-item';
import GeneralLayout from 'components/general-layout';
import Input from 'components/input';
import apiClient from 'utils/api-client';
class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '', movies: [], loading: false, loaded: false };

    this.updateQuery = this.updateQuery.bind(this);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      loading: true,
    });
    apiClient('api/movie').then(
      (data) => {
        this.setState({
          ...this.state,
          movies: data.movies,
          loading: false,
          loaded: true,
        });
      },
      (error) => {
        this.setState({
          ...this.state,
          loading: false,
          loaded: true,
        });
      },
    );
  }

  updateQuery(e) {
    this.setState({ query: e.currentTarget.value });
  }

  render() {
    const { loaded, movies, query } = this.state;
    debugger;
    const filteredMovies = movies.filter((movie) =>
      movie.title.startsWith(query),
    );
    return (
      <GeneralLayout>
        <div className="mb-4">
          <Input value={this.state.query} onChange={this.updateQuery} />
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
  }
}

export default Movies;
