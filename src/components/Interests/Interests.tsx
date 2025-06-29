import { Text, Container, Badge, Group, Stack, Paper } from '@mantine/core';

export function Interests() {
  return (
    <Container py="xl">
      <Text size="xl" fw={700} mb="lg">
        What I know...
      </Text>

      <Stack gap="md">
        <Paper shadow="none" radius="md" p="lg" withBorder>
          <Text size="md" fw={700} mb="sm">
            Software
          </Text>
          <Group gap="sm" mt="xs">
            <Badge color="indigo" variant="light">Figma</Badge>
            <Badge color="cyan" variant="light">JIRA</Badge>
            <Badge color="grape" variant="light">Confluence</Badge>
          </Group>
        </Paper>

        <Paper shadow="none" radius="md" p="lg" withBorder>
          <Text size="md" fw={700} mb="sm">
            Process
          </Text>
          <Group gap="sm" mt="xs">
            <Badge color="lime" variant="light">Impact Assessment</Badge>
            <Badge color="yellow" variant="light">Discovery</Badge>
            <Badge color="orange" variant="light">User Acceptance Testing</Badge>
            <Badge color="teal" variant="light">User Interivews</Badge>
          </Group>
        </Paper>
      </Stack>
    </Container>
  );
}