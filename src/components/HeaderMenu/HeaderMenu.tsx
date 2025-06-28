import { IconChevronDown, IconFavicon } from '@tabler/icons-react';
import { Burger, Center, Container, Group, Menu } from '@mantine/core';
import { ActionToggle } from '@/components/ActionToggle/ActionToggle';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import classes from './HeaderMenu.module.scss';

const links = [
  { link: '/home', label: 'Home' },
  {
    link: '#1',
    label: 'My Work',
    links: [
      { link: '/research', label: 'Research' },
      { link: '/community', label: 'Design' },
      { link: '/blog', label: 'Blog' },
      { link: '/resources', label: 'Resources' }
    ],
  },
  { link: '/about', label: 'About' },
  { link: '/contact', label: 'Contact' }
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

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

  return (
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
  );
}