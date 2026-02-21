import type { Metadata } from 'next';
import ContactHero from '../components/contact/ContactHero';
import ContactSection from '../components/contact/ContactSection';


export const metadata: Metadata = {
  title: 'Contact Us — Zion City for Widows',
  description:
    'Get in touch with Zion City for Widows. Reach us via WhatsApp, email, or our contact form. We would love to hear from you.',
  openGraph: {
    title: 'Contact Us — Zion City for Widows',
    description: 'We would love to hear from you. Reach out via WhatsApp, email, or our contact form.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactSection />
    </main>
  );
}