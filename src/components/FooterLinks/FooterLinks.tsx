import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube, IconFavicon } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './FooterLinks.module.scss';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Home', link: '/home' },
      { label: 'Contact', link: '/contact' },
    ],
  },
  {
    title: 'My Work',
    links: [
      { label: 'Event Management Platform', link: '/event-management-platform' },
      { label: 'Work Order Management Platform', link: '/work-order-management-platform' },
      { label: 'Filmography', link: 'https://www.patryk.cc', external: true }, // Example external link
    ],
  }
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) =>
      link.external ? (
        <Text<'a'>
          key={index}
          className={classes.link}
          component="a"
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </Text>
      ) : (
        <Text<typeof Link>
          key={index}
          className={classes.link}
          component={Link}
          to={link.link}
        >
          {link.label}
        </Text>
      )
    );

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <IconFavicon size={30} />
          <Text size="xs" c="dimmed" className={classes.description}>
            UX Practicioner, UI Designer.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © Patryk Zięba, {new Date().getFullYear()}.<br />
          All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}