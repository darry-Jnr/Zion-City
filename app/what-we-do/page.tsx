import type { Metadata } from 'next';
import WhatWeDoHero from '../components/what-we-do/WhatWeDoHero';
import SkillsSection from '../components/what-we-do/SkillsSection';
import HowItWorks from '../components/what-we-do/HowItWorks';
import ProgrammeTimeline from '../components/what-we-do/ProgrammeTimeline';
import FinancialPartners from '../components/what-we-do/FinancialPartners';
import WhatWeDoCTA from '../components/what-we-do/WhatWeDoCTA'

export const metadata: Metadata = {
  title: 'What We Do — Zion City for Widows',
  description:
    'Discover the skills programmes, training structure, and support systems at Zion City for Widows. From tailoring to catering — we help widows learn, grow, and earn.',
  openGraph: {
    title: 'What We Do — Zion City for Widows',
    description:
      'Skills training, community support, and economic empowerment for widows across Nigeria.',
    type: 'website',
  },
};

export default function WhatWeDoPage() {
  return (
    <main>
      <WhatWeDoHero />
      <SkillsSection />
      <HowItWorks />
      <ProgrammeTimeline />
      <FinancialPartners />
      <WhatWeDoCTA />
    </main>
  );
}