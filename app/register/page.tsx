import type { Metadata } from 'next';
import RegisterHero from '../components/register/RegisterHero';
import RegisterForms from '../components/register/RegisterForms';


export const metadata: Metadata = {
  title: 'Register — Zion City for Widows',
  description:
    'Register as a widow seeking support, become a financial partner, or sign up as a skill tutor. Join the Zion City for Widows community today.',
  openGraph: {
    title: 'Register — Zion City for Widows',
    description:
      'Whether you seek support, want to contribute, or are ready to teach — there is a place for you here.',
    type: 'website',
  },
};

export default function RegisterPage() {
  return (
    <main>
      <RegisterHero />
      <RegisterForms />
    </main>
  );
}