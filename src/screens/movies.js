import React from 'react';
import MovieListItem from 'components/movie-list-item';
import GeneralLayout from 'components/general-layout';

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

// Tenemos que pintar:
// Un input, que cuando escribamos filtre las pelis de la lista por titulo
// La lista de las pelis usando MovieListItem
// Si no hay resultados, un p que diga 'There are no movies with the required results'.

class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchQuery: '' };

    this.onQueryChanged = this.onQueryChanged.bind(this);
  }

  onQueryChanged(e) {
    this.setState({ searchQuery: e.currentTarget.value });
  }

  render() {
    const filteredMovies = movies.movies.filter((movie) =>
      movie.title.startsWith(this.state.searchQuery),
    );
    return (
      <GeneralLayout>
        <div className="mb-4">
          <input className="form-control" onChange={this.onQueryChanged} />
        </div>
        <p>{this.state.searchQuery}</p>
        <div>
          {filteredMovies.map((movie) => (
            <MovieListItem key={movie._id} title={movie.title} />
          ))}
        </div>
      </GeneralLayout>
    );
  }
}

export default Movies;
