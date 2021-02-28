import React from 'react';
import MovieListItem from 'components/movie-list-item';
import GeneralLayout from 'components/general-layout';
import Input from 'components/input';
import Button from 'components/button';

const movies = {
  movies: [
    {
      _id: '60381f292d88eb50bc5a3618',
      title: '10,000 B.C.',
      description: 'This is a description',
    },
    {
      _id: '60381f292d88eb50bc5a3616',
      title: '102 Dalmatians',
      description: 'This is a description',
    },
    {
      _id: '60381f292d88eb50bc5a3619',
      title: '10th & Wolf',
      description: 'This is a description',
    },
    {
      _id: '60381f292d88eb50bc5a361a',
      title: '11:14',
      description: 'This is a description',
    },
    {
      _id: '60381f282d88eb50bc5a3207',
      title: '12 Angry Men',
      description: 'This is a description',
    },
    {
      _id: '60381f292d88eb50bc5a361c',
      title: '12 Rounds',
      description: 'This is a description',
    },
    {
      _id: '60381f292d88eb50bc5a361e',
      title: '13 Going On 30',
      description: 'This is a description',
    },
    {
      _id: '60381f292d88eb50bc5a3620',
      title: '1408',
      description: 'This is a description',
    },
    {
      _id: '60381f292d88eb50bc5a3621',
      title: '15 Minutes',
      description: 'This is a description',
    },
    {
      _id: '60381f292d88eb50bc5a3623',
      title: '16 Blocks',
      description: 'This is a description',
    },
  ],
  totalPages: 321,
  currentPage: 1,
};

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };

    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery(e) {
    this.setState({ query: e.currentTarget.value });
  }

  render() {
    const filteredMovies = movies.movies.filter((movie) =>
      movie.title.startsWith(this.state.query),
    );
    return (
      <GeneralLayout>
        <div className="mb-4">
          <Input value={this.state.query} onChange={this.updateQuery} />
        </div>
        {filteredMovies.length ? (
          filteredMovies.map((movie) => (
            <MovieListItem title={movie.title} key={movie._id} />
          ))
        ) : (
          <p>There are no movies with the required results</p>
        )}
      </GeneralLayout>
    );
  }
}

export default Movies;
