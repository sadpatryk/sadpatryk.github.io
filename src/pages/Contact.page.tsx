import { HeaderMenu } from '@/components/HeaderMenu/HeaderMenu';
import { ContactUs } from '@/components/ContactUs/ContactUs';
import { FooterLinks } from '@/components/FooterLinks/FooterLinks';
import { Container } from '@mantine/core';

export function ContactPage() {
  return (
    <>
      <HeaderMenu />
      <Container size="md" mt="xl">
        <ContactUs/>
    </Container>
      
      <FooterLinks />
    </>
  );
}
