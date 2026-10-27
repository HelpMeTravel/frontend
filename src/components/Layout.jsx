import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { CenteredContent } from './shared/ui/CenteredContent';

export const Layout = () => (
  <>
    <Header />
    <CenteredContent component="main">
      <Outlet />
    </CenteredContent>
    <Footer />
  </>
);
