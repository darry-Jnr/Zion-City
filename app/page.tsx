import type { Metadata } from 'next';
import Hero from './components/Home/Hero';
import OurStory from './components/Home/OurStory';
import ImpactStats from './components/Home/ImpactStats';
import StoriesOfHope from './components/Home/StoriesOfHope';
import JoinCTA from './components/Home/JoinCTA';


export const metadata: Metadata = {
  title: 'Zion City for Widows — A Place to Heal, Learn & Thrive',
  description:
    'Zion City for Widows is a non-profit community initiative empowering widows in Nigeria through skills training, community support, and economic opportunity. Founded in honour of a mother\'s 70th birthday.',
  keywords: [
    'widows support Nigeria',
    'skills training for widows',
    'widow empowerment',
    'Zion City for Widows',
    'widow community Nigeria',
    'vocational training Nigeria',
  ],

};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <OurStory />
      <ImpactStats />
      <StoriesOfHope />
      <JoinCTA />
    </main>
  );
}