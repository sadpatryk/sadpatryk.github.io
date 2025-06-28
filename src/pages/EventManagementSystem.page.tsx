import { HeaderMenu } from '@/components/HeaderMenu/HeaderMenu';
import { UserInfoAction } from '@/components/UserInfoAction/UserInfoAction';
import { Container } from '@mantine/core';
import { FooterLinks } from '@/components/FooterLinks/FooterLinks';

export function EventManagementSystemPage() {
  return (
    <>
      <HeaderMenu />
      <Container size="xs" mt="xl">
        <UserInfoAction />
      </Container>
      <FooterLinks />
    </>
  );
}
