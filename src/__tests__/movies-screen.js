import React from 'react';
import GlobalProviders from 'context/global-providers';
import { logout } from 'utils/auth-utils';
import {
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
  act,
} from '@testing-library/react';

import App from '../main-app';

const moviesResponse = {
  movies: [
    { title: 'movie 1', description: 'desc 1', _id: 1 },
    { title: 'movie 2', description: 'desc 2', _id: 2 },
    { title: 'movie 3', description: 'desc 3', _id: 3 },
    { title: 'movie 4', description: 'desc 4', _id: 4 },
    { title: 'movie 5', description: 'desc 5', _id: 5 },
    { title: 'movie 6', description: 'desc 6', _id: 6 },
  ],
};

const filteredResponse = {
  movies: [
    { title: 'ha 1', description: 'desc 1', _id: 11 },
    { title: 'ha 2', description: 'desc 2', _id: 12 },
  ],
};

describe('Movies screen', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    const _fetch = window.fetch;
    window.localStorage.setItem('__auth_token__', 'mytoken');
    window.fetch = async (url, config) => {
      if (url.endsWith('/me')) {
        return {
          ok: true,
          json: async () => ({
            user: { name: 'Ander', email: 'xpander001@gmail.com' },
          }),
        };
      }
      if (url.endsWith('/movie')) {
        return {
          ok: true,
          json: async () => ({ ...moviesResponse }),
        };
      }
      if (url.endsWith('/movie?title=ha')) {
        return {
          ok: true,
          json: async () => ({ ...filteredResponse }),
        };
      }
      return _fetch(url, config);
    };
  });

  afterEach(() => {
    logout();
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should render a list of movies', async () => {
    window.history.pushState({}, 'title', '/movies');
    render(<App />, { wrapper: GlobalProviders });
    await waitForElementToBeRemoved(() => screen.getByText(/loading app/));
    moviesResponse.movies.forEach((movie) => {
      expect(screen.getByText(movie.title)).toBeInTheDocument();
    });
  });

  test('should search by movie name', async () => {
    window.history.pushState({}, 'title', '/movies');
    render(<App />, { wrapper: GlobalProviders });
    await waitForElementToBeRemoved(() => screen.getByText(/loading app/));
    const inputElement = screen.getByLabelText('Search');
    await act(async () => {
      fireEvent.change(inputElement, { target: { value: 'ha' } });
      jest.runTimersToTime(500);
    });
    filteredResponse.movies.forEach((movie) => {
      expect(screen.getByText(movie.title)).toBeInTheDocument();
    });
  });
});
