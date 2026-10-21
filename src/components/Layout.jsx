import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export const Layout = () => (
  <>
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);