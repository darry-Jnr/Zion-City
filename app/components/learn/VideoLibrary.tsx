'use client';
import { useState } from 'react';
import { Clock, PlayCircle, Play } from 'lucide-react';

const categories = ['All', 'Tailoring', 'Catering', 'Crafts', 'Finance Basics', 'Farming'];

const videos = [
  {
    title: 'Introduction to Hand Stitching',
    desc: 'Learn the basic hand stitches every beginner needs — running stitch, backstitch, and whip stitch.',
    category: 'Tailoring',
    duration: '18 mins',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumb: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
    featured: true,
  },
  {
    title: 'How to Take Body Measurements',
    desc: 'A step-by-step guide to measuring clients accurately — the foundation of good tailoring.',
    category: 'Tailoring',
    duration: '22 mins',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumb: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop',
    featured: false,
  },
  {
    title: 'Making Your First Blouse',
    desc: 'Follow along as we cut, pin, and sew a simple blouse pattern from start to finish.',
    category: 'Tailoring',
    duration: '45 mins',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumb: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&h=400&fit=crop',
    featured: false,
  },
  {
    title: 'Food Preservation Basics',
    desc: 'Learn simple, affordable techniques to preserve food longer and reduce waste in your kitchen.',
    category: 'Catering',
    duration: '25 mins',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumb: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    featured: false,
  },
  {
    title: 'Starting a Small Food Business',
    desc: 'Practical advice on pricing, packaging, and selling your cooked meals to local customers.',
    category: 'Catering',
    duration: '30 mins',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumb: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop',
    featured: false,
  },
  {
    title: 'Bead Jewellery for Beginners',
    desc: 'Make your first beaded necklace and bracelet set using affordable local materials.',
    category: 'Crafts',
    duration: '35 mins',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumb: 'https://images.unsplash.com/photo-1573408301185-9519f94ae8c2?w=600&h=400&fit=crop',
    featured: false,
  },
  {
    title: 'Handmade Soap Recipe',
    desc: 'A cold process soap recipe using palm oil and shea butter — safe, affordable, and sellable.',
    category: 'Crafts',
    duration: '28 mins',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumb: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=600&h=400&fit=crop',
    featured: false,
  },
  {
    title: 'Managing Your Money as a Small Business Owner',
    desc: 'Understand income, expenses, and how to keep business finances separate from personal.',
    category: 'Finance Basics',
    duration: '20 mins',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumb: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    featured: false,
  },
  {
    title: 'Using Mobile Money Safely',
    desc: 'A beginner-friendly guide to mobile banking and transferring money safely on your phone.',
    category: 'Finance Basics',
    duration: '15 mins',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumb: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    featured: false,
  },
  {
    title: 'Growing Vegetables at Home',
    desc: 'Start a small kitchen garden — tomatoes, peppers, and leafy greens for your family.',
    category: 'Farming',
    duration: '32 mins',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumb: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop',
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Tailoring: 'bg-[#F9E8E0] text-[#C1694F]',
  Catering: 'bg-orange-50 text-orange-600',
  Crafts: 'bg-pink-50 text-pink-600',
  'Finance Basics': 'bg-green-50 text-green-600',
  Farming: 'bg-emerald-50 text-emerald-600',
};

/* ── Featured large card ── */
function FeaturedCard({ video }: { video: typeof videos[0] }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="bg-white rounded-[28px] overflow-hidden border border-[#C1694F]/10 shadow-[0_4px_24px_rgba(193,105,79,0.07)] mb-6 group hover:shadow-[0_12px_48px_rgba(193,105,79,0.12)] transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">

        {/* Video / Thumb */}
        <div className="relative aspect-video lg:aspect-auto lg:min-h-[300px] bg-[#2C1810] overflow-hidden">
          {playing ? (
            <iframe
              src={`${video.embedUrl}?autoplay=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <>
              <img src={video.thumb} alt={video.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#2C1810]/30" />
              {/* Big play button */}
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform duration-200">
                  <Play size={24} className="fill-[#C1694F] text-[#C1694F] ml-1" />
                </div>
              </button>
              {/* Featured badge */}
              <div className="absolute top-4 left-4 bg-[#C1694F] text-white font-['Nunito'] font-bold text-[10px] px-3 py-1.5 rounded-full uppercase tracking-wider">
                Featured
              </div>
            </>
          )}
        </div>

        {/* Info */}
        <div className="p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className={`font-['Nunito'] font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider ${categoryColors[video.category]}`}>
                {video.category}
              </span>
              <span className="font-['Nunito'] text-[12px] text-[#6B7280] flex items-center gap-1">
                <Clock size={12} /> {video.duration}
              </span>
            </div>
            <h2 className="font-['Playfair_Display'] text-[clamp(18px,3vw,24px)] font-bold text-[#2C1810] leading-snug mb-3">
              {video.title}
            </h2>
            <p className="font-['Nunito'] text-[14px] text-[#5C3D2E] leading-relaxed">
              {video.desc}
            </p>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={() => setPlaying(true)}
              className="inline-flex items-center gap-2 bg-[#C1694F] text-white font-['Nunito'] font-bold text-[13px] px-5 py-2.5 rounded-xl hover:bg-[#A85540] transition-all duration-200 cursor-pointer"
            >
              <PlayCircle size={15} /> Watch Now
            </button>
            <a
              href={video.embedUrl.replace('/embed/', '/watch?v=')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Nunito'] font-bold text-[13px] text-[#6B7280] hover:text-[#C1694F] transition-colors duration-200 no-underline"
            >
              Open in YouTube →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Standard card — thumbnail + info ── */
function VideoCard({ video }: { video: typeof videos[0] }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="bg-white rounded-[20px] overflow-hidden border border-[#C1694F]/10 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(193,105,79,0.1)] transition-all duration-300 flex flex-col group">
      {/* Thumbnail with play overlay */}
      <div className="relative aspect-video bg-[#2C1810] flex-shrink-0 overflow-hidden">
        {playing ? (
          <iframe
            src={`${video.embedUrl}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            <img src={video.thumb} alt={video.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-[#2C1810]/20 group-hover:bg-[#2C1810]/40 transition-colors duration-300" />
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                <Play size={18} className="fill-[#C1694F] text-[#C1694F] ml-0.5" />
              </div>
            </button>
            {/* Duration pill */}
            <div className="absolute bottom-3 right-3 bg-[#2C1810]/80 text-white font-['Nunito'] font-bold text-[10px] px-2 py-1 rounded-md flex items-center gap-1">
              <Clock size={9} /> {video.duration}
            </div>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <span className={`self-start font-['Nunito'] font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 ${categoryColors[video.category]}`}>
          {video.category}
        </span>
        <h3 className="font-['Playfair_Display'] text-[15px] font-bold text-[#2C1810] leading-snug mb-1.5 flex-1">
          {video.title}
        </h3>
        <p className="font-['Nunito'] text-[12px] text-[#5C3D2E] leading-relaxed line-clamp-2">
          {video.desc}
        </p>
      </div>
    </div>
  );
}

/* ── Dark overlay card ── */
function DarkVideoCard({ video }: { video: typeof videos[0] }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative rounded-[20px] overflow-hidden aspect-video group hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(44,24,16,0.25)] transition-all duration-300">
      {playing ? (
        <iframe
          src={`${video.embedUrl}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <>
          <img src={video.thumb} alt={video.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/90 via-[#2C1810]/30 to-transparent" />
          {/* Play button */}
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/60 flex items-center justify-center hover:bg-white/40 transition-colors duration-200">
              <Play size={18} className="fill-white text-white ml-0.5" />
            </div>
          </button>
          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className={`inline-block font-['Nunito'] font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 ${categoryColors[video.category]}`}>
              {video.category}
            </span>
            <h3 className="font-['Playfair_Display'] text-[14px] font-bold text-white leading-snug line-clamp-2">
              {video.title}
            </h3>
            <span className="font-['Nunito'] text-[11px] text-white/60 flex items-center gap-1 mt-1">
              <Clock size={10} /> {video.duration}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default function VideoLibrary() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? videos : videos.filter((v) => v.category === activeCategory);
  const featured = filtered.find((v) => v.featured) || filtered[0];
  const rest = filtered.filter((v) => v !== featured);

  return (
    <section id="videos" className="py-6 pb-24 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
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
                  {videos.filter((v) => v.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="font-['Nunito'] text-[13px] text-[#6B7280] mb-5">
          Showing <strong className="text-[#2C1810]">{filtered.length}</strong> video{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'All' && <span> in <strong className="text-[#C1694F]">{activeCategory}</strong></span>}
        </p>

        {/* Featured */}
        {featured && <FeaturedCard video={featured} />}

        {/* Rest — creative layout */}
        {rest.length > 0 && (
          <>
            {/* Row 1 — 3 standard cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {rest.slice(0, 3).map((v, i) => <VideoCard key={i} video={v} />)}
            </div>

            {/* Row 2 — 2 dark overlay cards + 1 standard */}
            {rest.length > 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                {rest.slice(3, 5).map((v, i) => <DarkVideoCard key={i} video={v} />)}
                {rest[5] && <VideoCard video={rest[5]} />}
              </div>
            )}

            {/* Row 3 — any remaining as standard */}
            {rest.length > 6 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {rest.slice(6).map((v, i) => <VideoCard key={i} video={v} />)}
              </div>
            )}
          </>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-['Playfair_Display'] text-[22px] font-bold text-[#2C1810] mb-2">No videos yet</p>
            <p className="font-['Nunito'] text-[15px] text-[#6B7280]">Videos for this category are coming soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}