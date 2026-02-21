'use client';
import { useState } from 'react';
import { Clock, ChevronRight } from 'lucide-react';

const categories = ['All', 'News', 'Skills', 'Stories', 'Events'];

const posts = [
  {
    title: 'Our First Graduation Ceremony — A Day of Joy and New Beginnings',
    excerpt: 'Twenty-four widows received their certificates of completion at our very first graduation ceremony last Saturday. It was a day filled with tears, laughter, and the quiet confidence of women who have rediscovered their worth.',
    category: 'Events',
    date: 'Feb 10, 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&h=500&fit=crop',
    featured: true,
    slug: 'first-graduation-ceremony',
  },
  {
    title: '5 Tips for Starting a Tailoring Business with Little Capital',
    excerpt: 'Many of our graduates ask the same question — how do I start earning when I have very little to invest? Here are five practical steps to get your tailoring business off the ground.',
    category: 'Skills',
    date: 'Jan 28, 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop',
    featured: false,
    slug: '5-tips-tailoring-business',
  },
  {
    title: 'Meet Fatima — How Soap Making Changed Her Life',
    excerpt: 'Fatima joined our programme with nothing but hope. Six months later, she is supplying handmade soaps to three local shops.',
    category: 'Stories',
    date: 'Jan 15, 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop',
    featured: false,
    slug: 'meet-fatima-soap-making',
  },
  {
    title: 'New Cohort Applications Now Open for March 2026',
    excerpt: 'Spots are limited — if you know a widow who would benefit, please share this with her today.',
    category: 'News',
    date: 'Jan 5, 2026',
    readTime: '2 min',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=400&fit=crop',
    featured: false,
    slug: 'march-2026-cohort-open',
  },
  {
    title: 'How to Price Your Handmade Products Fairly',
    excerpt: 'Pricing is one of the biggest challenges for new entrepreneurs. Here is a simple formula that works.',
    category: 'Skills',
    date: 'Dec 20, 2025',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1607748851687-ba9a10438621?w=600&h=400&fit=crop',
    featured: false,
    slug: 'how-to-price-products',
  },
  {
    title: 'Thank You to Our Financial Partners — Year in Review',
    excerpt: 'Because of you, over 150 widows received training, support, and a new start in 2025.',
    category: 'News',
    date: 'Dec 31, 2025',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=400&fit=crop',
    featured: false,
    slug: 'year-in-review-2025',
  },
];

const categoryColors: Record<string, string> = {
  News: 'bg-blue-50 text-blue-600',
  Skills: 'bg-green-50 text-green-600',
  Stories: 'bg-[#F9E8E0] text-[#C1694F]',
  Events: 'bg-purple-50 text-purple-600',
};

const categoryDots: Record<string, string> = {
  News: 'bg-blue-500',
  Skills: 'bg-green-500',
  Stories: 'bg-[#C1694F]',
  Events: 'bg-purple-500',
};

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 font-['Nunito'] font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider ${categoryColors[category]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${categoryDots[category]}`} />
      {category}
    </span>
  );
}

/* ── Card style A — Big image top, content below (tall) ── */
function CardA({ post }: { post: typeof posts[0] }) {
  return (
    <a href={`/blog/${post.slug}`} className="no-underline group block">
      <div className="bg-white rounded-[24px] overflow-hidden border border-[#C1694F]/10 hover:shadow-[0_16px_48px_rgba(193,105,79,0.12)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        <div className="h-[200px] overflow-hidden flex-shrink-0 relative">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute top-4 left-4">
            <CategoryBadge category={post.category} />
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-['Playfair_Display'] text-[17px] font-bold text-[#2C1810] leading-snug mb-2 group-hover:text-[#C1694F] transition-colors duration-200">
            {post.title}
          </h3>
          <p className="font-['Nunito'] text-[13px] text-[#5C3D2E] leading-relaxed line-clamp-2 flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#C1694F]/8">
            <span className="font-['Nunito'] text-[11px] text-[#6B7280] flex items-center gap-1">
              <Clock size={11} /> {post.readTime} · {post.date}
            </span>
            <ChevronRight size={16} className="text-[#C1694F] group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </a>
  );
}

/* ── Card style B — Horizontal, image left, text right ── */
function CardB({ post }: { post: typeof posts[0] }) {
  return (
    <a href={`/blog/${post.slug}`} className="no-underline group block">
      <div className="bg-white rounded-[24px] overflow-hidden border border-[#C1694F]/10 hover:shadow-[0_12px_40px_rgba(193,105,79,0.1)] hover:-translate-y-0.5 transition-all duration-300 flex h-full">
        <div className="w-[110px] min-w-[110px] sm:w-[130px] sm:min-w-[130px] overflow-hidden flex-shrink-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-4 flex flex-col justify-between flex-1 min-w-0">
          <div>
            <CategoryBadge category={post.category} />
            <h3 className="font-['Playfair_Display'] text-[14px] font-bold text-[#2C1810] leading-snug mt-2 line-clamp-2 group-hover:text-[#C1694F] transition-colors duration-200">
              {post.title}
            </h3>
          </div>
          <span className="font-['Nunito'] text-[11px] text-[#6B7280] flex items-center gap-1 mt-2">
            <Clock size={10} /> {post.readTime} · {post.date}
          </span>
        </div>
      </div>
    </a>
  );
}

/* ── Card style C — Dark editorial card ── */
function CardC({ post }: { post: typeof posts[0] }) {
  return (
    <a href={`/blog/${post.slug}`} className="no-underline group block h-full">
      <div className="relative rounded-[24px] overflow-hidden h-full min-h-[200px] hover:shadow-[0_16px_48px_rgba(44,24,16,0.2)] hover:-translate-y-1 transition-all duration-300">
        <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/90 via-[#2C1810]/40 to-transparent" />
        <div className="absolute inset-0 p-5 flex flex-col justify-between">
          <CategoryBadge category={post.category} />
          <div>
            <h3 className="font-['Playfair_Display'] text-[16px] font-bold text-white leading-snug mb-2 line-clamp-3">
              {post.title}
            </h3>
            <span className="font-['Nunito'] text-[11px] text-white/60 flex items-center gap-1">
              <Clock size={10} /> {post.readTime} · {post.date}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

/* ── Featured card — big horizontal ── */
function FeaturedCard({ post }: { post: typeof posts[0] }) {
  return (
    <a href={`/blog/${post.slug}`} className="no-underline group block mb-8">
      <div className="bg-white rounded-[28px] overflow-hidden border border-[#C1694F]/10 hover:shadow-[0_16px_56px_rgba(193,105,79,0.12)] transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[220px] lg:h-auto overflow-hidden relative">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-[#C1694F] text-white font-['Nunito'] font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Featured</span>
              <CategoryBadge category={post.category} />
            </div>
          </div>
          <div className="p-7 lg:p-9 flex flex-col justify-between">
            <div>
              <h2 className="font-['Playfair_Display'] text-[clamp(18px,3vw,26px)] font-bold text-[#2C1810] leading-tight mb-3 group-hover:text-[#C1694F] transition-colors duration-200">
                {post.title}
              </h2>
              <p className="font-['Nunito'] text-[14px] text-[#5C3D2E] leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>
            <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#C1694F]/10">
              <span className="font-['Nunito'] text-[12px] text-[#6B7280] flex items-center gap-1.5">
                <Clock size={12} /> {post.readTime} read · {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5 font-['Nunito'] font-bold text-[13px] text-white bg-[#C1694F] px-4 py-2 rounded-xl group-hover:bg-[#A85540] transition-colors duration-200">
                Read <ChevronRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory);
  const featured = filtered.find((p) => p.featured);
  const gridPosts = activeCategory === 'All' ? filtered.filter((p) => !p.featured) : filtered;

  return (
    <section className="py-6 pb-24 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Category filter */}
        <div className="flex gap-2 flex-wrap mb-10 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 font-['Nunito'] font-bold text-[13px] px-5 py-2.5 rounded-full border-2 transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#C1694F] text-white border-[#C1694F] shadow-[0_4px_12px_rgba(193,105,79,0.3)]'
                  : 'bg-white text-[#5C3D2E] border-[#C1694F]/20 hover:border-[#C1694F] hover:text-[#C1694F]'
              }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className={`ml-1.5 text-[11px] ${activeCategory === cat ? 'opacity-75' : 'opacity-50'}`}>
                  {posts.filter((p) => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Featured */}
        {activeCategory === 'All' && featured && <FeaturedCard post={featured} />}

        {/* Results count */}
        <p className="font-['Nunito'] text-[13px] text-[#6B7280] mb-5">
          Showing <strong className="text-[#2C1810]">{filtered.length}</strong> post{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'All' && <span> in <strong className="text-[#C1694F]">{activeCategory}</strong></span>}
        </p>

        {/* Creative magazine layout */}
        {gridPosts.length > 0 && (
          <>
            {/* Row 1 — 3 tall cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {gridPosts.slice(0, 3).map((post, i) => (
                <CardA key={i} post={post} />
              ))}
            </div>

            {/* Row 2 — dark editorial card + 2 horizontal compact cards stacked */}
            {gridPosts.length > 3 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Left — dark image card */}
                <div className="min-h-[220px]">
                  <CardC post={gridPosts[3]} />
                </div>
                {/* Right — 2 compact horizontal cards stacked */}
                <div className="flex flex-col gap-4">
                  {gridPosts.slice(4, 6).map((post, i) => (
                    <CardB key={i} post={post} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-['Playfair_Display'] text-[22px] font-bold text-[#2C1810] mb-2">No posts yet</p>
            <p className="font-['Nunito'] text-[15px] text-[#6B7280]">Posts in this category are coming soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}