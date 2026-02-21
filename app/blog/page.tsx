import type { Metadata } from 'next';
import BlogHero from '../components/blog/BlogHero';
import BlogGrid from '../components/blog/BlogGrid';


export const metadata: Metadata = {
  title: 'Blog — Zion City for Widows',
  description:
    'News, updates, stories and events from Zion City for Widows. Stay informed about our community, programmes, and the lives we are changing together.',
  openGraph: {
    title: 'Blog — Zion City for Widows',
    description:
      'News, skills tips, stories and events from the Zion City for Widows community.',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogGrid />
    </main>
  );
}