import { IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';
import { Box, Group, Text, useMantineColorScheme } from '@mantine/core';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
  uri?: string;
}

function ContactIcon({ icon: Icon, title, description, uri, ...others }: ContactIconProps) {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const iconColor = isDark ? 'var(--mantine-color-gray-3)' : 'var(--mantine-color-dark-5)';
  const titleColor = isDark ? 'var(--mantine-color-gray-2)' : 'var(--mantine-color-dark-6)';
  const descColor = isDark ? 'var(--mantine-color-gray-1)' : 'var(--mantine-color-dark-5)';

  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon size={24} color={iconColor} />
      </Box>

      <div>
        <Text size="xs" className={classes.title} style={{ color: titleColor }}>
          {title}
        </Text>
        {uri ? (
          <a
            href={uri}
            className={classes.description}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: descColor, textDecoration: 'none' }}
          >
            {description}
          </a>
        ) : (
          <Text className={classes.description} style={{ color: descColor }}>
            {description}
          </Text>
        )}
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'hello@patryk.cc', icon: IconAt, uri: 'mailto:hello@patryk.cc' },
  { title: 'Phone', description: '+44 (0) 7432 255153', icon: IconPhone, uri: 'tel:+447432255153' },
  { title: 'Location', description: 'Manchester, UK', icon: IconMapPin }
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Group gap={32}>{items}</Group>;
}