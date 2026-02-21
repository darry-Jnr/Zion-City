import type { Metadata } from 'next';
import AboutHero from '../components/About/AboutHero';
import MissionVision from '../components/About/MissionVision';
import CoreValues from '../components/About/CoreValues';
import Founder from '../components/About/Founder';
import Gallery from '../components/About/Gallery';
import AboutCTA from '../components/About/AboutCTA';


export const metadata: Metadata = {
  title: 'About Us — Zion City for Widows',
  description:
    'Learn the story, mission, vision, and values behind Zion City for Widows — a community initiative founded in honour of a mother\'s 70th birthday to empower widows across Nigeria.',
  openGraph: {
    title: 'About Us — Zion City for Widows',
    description:
      'Founded in love, built for purpose. Discover the heart behind Zion City for Widows.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <Founder />
      <Gallery />
      <AboutCTA />
    </main>
  );
}