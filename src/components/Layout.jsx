import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { BreadcrumbsNav } from './BreadcrumbsNav';
import { CenteredContent } from './shared/ui/CenteredContent';

export const Layout = () => (
  <>
    <Header />
    <CenteredContent component="main">
      <BreadcrumbsNav />
      <Outlet />
    </CenteredContent>
    <Footer />
  </>
);
