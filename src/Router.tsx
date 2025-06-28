import { HomePage } from './pages/Home.page';
import { ContactPage } from './pages/Contact.page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
