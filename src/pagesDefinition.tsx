import { HomePage } from './pages/Home.page';
import { ContactPage } from './pages/Contact.page';
import { EventManagementPlatformPage } from './pages/EventManagementPlatform.page';
import { WorkOrderManagementPlatformPage } from './pages/WorkOrderManagementPlatform.page';
import { IconHome, IconMail, IconCalendar, IconFileText } from '@tabler/icons-react';
// import other project pages as needed

export const projects = [
  {
    path: '#/event-management-platform',
    element: <EventManagementPlatformPage />,
    title: 'Event Management Platform',
    description: 'A project for managing events efficiently.',
    pageType: 'project',
    icon: IconCalendar,
    color: 'orange',
  },
  {
    path: '#/work-order-management-platform',
    element: <WorkOrderManagementPlatformPage />,
    title: 'Work Order Management Platform',
    description: 'A project for managing events efficiently.',
    pageType: 'project',
    icon: IconFileText,
    color: 'orange',
  },
  // Add more projects/pages as needed
];