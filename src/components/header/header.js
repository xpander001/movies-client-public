import React from 'react';
import classnames from 'classnames';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { routes } from 'utils/constants';
import Button from 'components/button';
import { useAuth } from 'context/auth-context';

const HeaderLink = ({ path, children }) => {
  const match = useRouteMatch({
    path,
  });
  const linkClass = classnames({
    'p-2': true,
    border: match,
  });
  return (
    <span className={linkClass}>
      <RouterLink to={path}>{children}</RouterLink>
    </span>
  );
};

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
      <p className="h5 my-0 me-md-auto flex-fill">My movies</p>
      {user ? (
        <>
          <div className="mr-2">Hello, {user.name}</div>
          <Button primary outline onClick={logout}>
            Logout
          </Button>
        </>
      ) : (
        <nav className="my-2 my-md-0 me-md-3">
          <HeaderLink path={routes.login}>Login</HeaderLink>
          <HeaderLink path={routes.signup}>Sign Up</HeaderLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
