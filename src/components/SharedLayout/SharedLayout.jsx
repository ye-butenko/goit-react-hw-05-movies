import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledNavLink } from './SharedLayout.styled';
import Loader from 'components/Loader';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
