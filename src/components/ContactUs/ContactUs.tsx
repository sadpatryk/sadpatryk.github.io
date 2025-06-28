import { IconBrandInstagram, IconBrandBluesky, IconBrandYoutube, IconBrandVimeo, IconBrandLinkedin, IconBrandFigma } from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import classes from './ContactUs.module.css';

// Add your actual profile URLs here
const socialLinks = [
  { icon: IconBrandLinkedin, url: 'https://www.linkedin.com/in/patryk-zieba' },
  { icon: IconBrandFigma, url: 'https://www.figma.com/@sadpatryk' },
  { icon: IconBrandBluesky, url: 'https://bsky.app/profile/sadpatryk.bsky.social' },
  { icon: IconBrandInstagram, url: 'https://instagram.com/sadpatryk' },
  { icon: IconBrandYoutube, url: 'https://youtube.com/@sad.patryk' },
  { icon: IconBrandVimeo, url: 'https://vimeo.com/sadpatryk' },
];

export function ContactUs() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const titleColor = isDark ? 'var(--mantine-color-white)' : 'var(--mantine-color-dark-6)';
  const descColor = isDark ? 'var(--mantine-color-gray-3)' : 'var(--mantine-color-dark-5)';

  const icons = socialLinks.map(({ icon: Icon, url }, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={Icon.displayName || 'Social link'}
    >
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper}>
      <div>
        <Title
          className={classes.title}
          style={{ color: titleColor }}
        >
          Get in touch.
        </Title>
        <Text
          className={classes.description}
          mt="sm"
          mb={30}
          style={{ color: descColor }}
        >
          Send through an email, shoot me a text, or find me on social media. I will get back to you.
        </Text>

        <ContactIconsList />

        <Group mt="xl">{icons}</Group>
      </div>
    </div>
  );
}