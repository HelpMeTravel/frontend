import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <div>Home Page</div>,
      },
      {
        path: "about",
        element: <div>About Us</div>,
      },
    ],
  },
]);