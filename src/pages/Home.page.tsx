import { HeaderMenu } from '@/components/HeaderMenu/HeaderMenu';
import { UserInfoAction } from '@/components/UserInfoAction/UserInfoAction';
import { Container, Text } from '@mantine/core';
import { FooterLinks } from '@/components/FooterLinks/FooterLinks';
import { CardGradientGrid } from '@/components/CardGradient/CardGradientGrid';
import { HeroTitle } from '@/components/HeroTitle/HeroTitle';
import { Interests } from '@/components/Interests/Interests';

export function HomePage() {
  return (
    <>
      <HeaderMenu />
      <HeroTitle />
      <Container py="xl">
        <CardGradientGrid />
        <Interests />
      </Container>
      <FooterLinks />
    </>
  );
}
