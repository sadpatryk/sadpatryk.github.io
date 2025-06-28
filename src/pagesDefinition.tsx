import { HomePage } from './pages/Home.page';
import { ContactPage } from './pages/Contact.page';
import { EventManagementSystemPage } from './pages/EventManagementSystem.page';
import { IconHome, IconMail, IconCalendar } from '@tabler/icons-react';
// import other project pages as needed

export const projects = [
  {
    path: '/',
    element: <HomePage />,
    title: 'Home',
    description: 'Welcome to my portfolio homepage.',
    pageType: 'page',
    icon: IconHome,
  },
  {
    path: '/contact',
    element: <ContactPage />,
    title: 'Contact',
    description: 'Get in touch with me.',
    pageType: 'page',
    icon: IconMail,
  },
  {
    path: '/event-management-system',
    element: <EventManagementSystemPage />,
    title: 'Event Management System',
    description: 'A project for managing events efficiently.',
    pageType: 'project',
    icon: IconCalendar,
  },
  // Add more projects/pages as needed
];