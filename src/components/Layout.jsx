import { Outlet } from 'react-router-dom';

export const Layout = () => (
  <>
    <header>My App Header</header>
    <main>
      <Outlet />
    </main>
  </>
);
