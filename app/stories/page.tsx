import type { Metadata } from 'next';
import StoriesHero from '../components/stories/StoriesHero';
import TestimoniesGrid from '../components/stories/TestimoniesGrid';
import VideoTestimonies from '../components/stories/VideoTestimonies';


export const metadata: Metadata = {
  title: 'Stories — Zion City for Widows',
  description:
    'Read the real stories of widows whose lives have been transformed through Zion City for Widows. Testimonies of healing, learning, and new beginnings.',
  openGraph: {
    title: 'Stories — Zion City for Widows',
    description:
      'Real stories of hope, resilience, and transformation from widows in our community.',
    type: 'website',
  },
};

export default function StoriesPage() {
  return (
    <main>
      <StoriesHero />
      <TestimoniesGrid />
      <VideoTestimonies />
    </main>
  );
}