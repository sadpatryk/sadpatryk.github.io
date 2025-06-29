import { Paper, Text, ThemeIcon } from '@mantine/core';
import classes from './CardGradient.module.scss';

interface CardGradientProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color?: string;
  href?: string;
}

export function CardGradient({ icon: Icon, title, description, color = 'blue', href }: CardGradientProps) {
  return (
    <Paper
      withBorder
      radius="md"
      className={classes.card}
      component={href ? 'a' : 'div'}
      href={href}
    >
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: 'pink', to: 'orange' }}
        color={color}
      >
        {Icon && <Icon size={28} stroke={1.5} />}
      </ThemeIcon>
      <Text size="xl" fw={500} mt="md">
        {title}
      </Text>
      <Text size="sm" mt="sm" c="dimmed">
        {description}
      </Text>
    </Paper>
  );
}