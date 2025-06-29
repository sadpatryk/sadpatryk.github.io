import { IconChevronDown, IconFavicon } from '@tabler/icons-react';
import { Burger, Center, Container, Group, Menu, Drawer, ScrollArea, Text } from '@mantine/core';
import { ActionToggle } from '@/components/ActionToggle/ActionToggle';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import classes from './HeaderMenu.module.scss';

const links = [
  { link: '/home', label: 'Home' },
  { link: '/contact', label: 'Contact' },
  {
    link: '#1',
    label: 'My Work',
    links: [
      { link: '/event-management-platform', label: 'Event Management Platform' },
      { link: '/work-order-management-platform', label: 'Work Order Management Platform' },
      { link: '/research', label: 'Research' },
      { link: '/community', label: 'Design' },
      { link: '/blog', label: 'Blog' },
      { link: '/resources', label: 'Resources' }
    ],
  }
];

export function HeaderMenu() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} component={Link} to={item.link}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <span className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </span>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        key={link.label}
        to={link.link}
        className={classes.link}
      >
        {link.label}
      </Link>
    );
    
  });

  // Mobile nav items (flat list, you can enhance with collapsible sections if you want)
  const mobileItems = (
    <div>
      {links.map((link) =>
        link.links ? (
          <div key={link.label}>
            <Text fw={700} mt="md" mb="xs">{link.label}</Text>
            {link.links.map((sublink) => (
              <Link
                key={sublink.link}
                to={sublink.link}
                className={classes.link}
                onClick={close}
                style={{ display: 'block', padding: '8px 0' }}
              >
                {sublink.label}
              </Link>
            ))}
          </div>
        ) : (
          <Link
            key={link.label}
            to={link.link}
            className={classes.link}
            onClick={close}
            style={{ display: 'block', padding: '8px 0' }}
          >
            {link.label}
          </Link>
        )
      )}
    </div>
  );

  return (
    <>
      <header className={classes.header}>
        <Container size="md">
          <div className={classes.inner}>
            <IconFavicon size={28} />
            <Group gap={5} visibleFrom="sm">
              {items}
            </Group>
            <ActionToggle />
            <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          </div>
        </Container>
      </header>
      <Drawer
        opened={opened}
        onClose={close}
        padding="md"
        size="80%"
        title="Menu"
        hiddenFrom="sm"
        zIndex={1001}
        position="right"
      >
        <ScrollArea style={{ height: '100%' }}>
          {mobileItems}
        </ScrollArea>
      </Drawer>
    </>
  );
}