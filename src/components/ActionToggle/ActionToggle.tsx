import { IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, useComputedColorScheme, useMantineColorScheme, rem } from '@mantine/core';

export function ActionToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="subtle"
      size={rem(38)} // smaller than xl
      radius="xl"
      aria-label="Toggle color scheme"
      style={{ marginLeft: 8 }}
      visibleFrom="sm"
    >
      {computedColorScheme === 'light' ? (
        <IconSun stroke={1.2} size={20} />
      ) : (
        <IconMoon stroke={1.2} size={20} />
      )}
    </ActionIcon>
  );
}