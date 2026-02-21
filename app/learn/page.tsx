import type { Metadata } from 'next';
import LearnHero from '../components/learn/LearnHero';
import VideoLibrary from '../components/learn/VideoLibrary';


export const metadata: Metadata = {
  title: 'Learn — Zion City for Widows',
  description:
    'Watch free skills training videos from Zion City for Widows. Learn tailoring, catering, crafts, and more at your own pace — no login required.',
  openGraph: {
    title: 'Learn — Zion City for Widows',
    description:
      'Free educational video library for widows. Learn practical skills at your own pace.',
    type: 'website',
  },
};

export default function LearnPage() {
  return (
    <main>
      <LearnHero />
      <VideoLibrary />
    </main>
  );
}