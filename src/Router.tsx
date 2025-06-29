import { HomePage } from './pages/Home.page';
import { ContactPage } from './pages/Contact.page';
import { EventManagementPlatformPage } from './pages/EventManagementPlatform.page';
import { WorkOrderManagementPlatformPage } from './pages/WorkOrderManagementPlatform.page';
import { createHashRouter, RouterProvider } from 'react-router-dom'; // changed here

const router = createHashRouter([ // changed here
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
  {
    path: '/event-management-platform',
    element: <EventManagementPlatformPage />,
  },
  {
    path: '/work-order-management-platform',
    element: <WorkOrderManagementPlatformPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
