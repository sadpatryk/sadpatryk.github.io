import { Card, Container, SimpleGrid, Text, Box } from '@mantine/core';
import classes from './ArticlesCardsGrid.module.scss';
import { projects } from '@/pagesDefinition';

export function ArticlesCardsGrid() {
  const cards = projects.map((project) => {
    const Icon = project.icon;
    return (
      <Card
        key={project.path}
        p="md"
        radius="md"
        component="a"
        href={project.path}
        className={classes.card}
        withBorder
        bg="var(--mantine-color-body)"
      >
        <Box mb="sm">
          {Icon && <Icon size={32} />}
        </Box>
        <Text className={classes.title}>{project.title}</Text>
        <Text className={classes.date}>{project.description}</Text>
      </Card>
    );
  });

  return (
    <Container py="xl">
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={{ base: 'md', sm: 'md' }}
      >
        {cards}
      </SimpleGrid>
    </Container>
  );
}