import { SimpleGrid, Text, Container } from '@mantine/core';
import { projects } from '@/pagesDefinition';
import { CardGradient } from './CardGradient';

export function CardGradientGrid() {
  return (
    <Container py="xl">
      <Text size="xl" fw={700} mb="md">
        What I do...
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        {projects.map((project) => (
          <CardGradient
            key={project.path}
            icon={project.icon}
            title={project.title}
            description={project.description}
            color={project.color}
            href={project.path}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}