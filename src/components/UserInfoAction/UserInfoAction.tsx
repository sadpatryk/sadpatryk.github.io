import { Avatar, Button, Paper, Text } from '@mantine/core';

export function UserInfoAction() {
  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
      <Avatar
        src="https://avatars.githubusercontent.com/u/60116754?v=4"
        size={120}
        radius={120}
        mx="auto"
      />
      <Text ta="center" fz="lg" fw={500} mt="md">
        Patryk Zięba
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        hello@patryk.cc • UX Practicioner
      </Text>

      <Button
        component="a"
        href="mailto:hello@patryk.cc"
        variant="default"
        fullWidth
        mt="md"
      >
        Send message
      </Button>
    </Paper>
  );
}