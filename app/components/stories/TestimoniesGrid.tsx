'use client';
import { useState } from 'react';
import { Share2 } from 'lucide-react';

const testimonies = [
  {
    name: 'Amara Okafor',
    skill: 'Tailoring',
    location: 'Lagos State',
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop',
    story: 'After losing my husband, I felt like my world had ended. I had three children to feed and no income. Zion City for Widows gave me the courage to try again. After 12 weeks of tailoring training, I now sew school uniforms for families in my community. My children are in school and I am proud of what I have built.',
  },
  {
    name: 'Zainab Musa',
    skill: 'Catering',
    location: 'Kano State',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
    story: 'The catering programme changed everything for me. I always loved cooking but never believed I could make money from it. Today I run a small food business, supplying meals to offices near my home. The community here showed me I was not alone — and that made all the difference.',
  },
  {
    name: 'Chioma Eze',
    skill: 'Crafts & Handicrafts',
    location: 'Enugu State',
    photo: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=400&h=500&fit=crop',
    story: 'I came to Zion City broken. I left with a skill, a certificate, and a sisterhood I did not expect. My handmade jewellery and bags now sell at local markets. I even have a small Instagram page. Zion City did not just teach me crafts — it taught me that I am worthy of a second chance.',
  },
  {
    name: 'Fatima Abdullahi',
    skill: 'Soap Making',
    location: 'Kaduna State',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop',
    story: 'I never imagined I could start a business. With the soap making training and the starter kit I received at graduation, I began producing and selling handmade soaps. My neighbours are my first customers. Every bar of soap I sell reminds me of how far I have come.',
  },
  {
    name: 'Grace Nwosu',
    skill: 'Hairdressing',
    location: 'Rivers State',
    photo: 'https://images.unsplash.com/photo-1607748851687-ba9a10438621?w=400&h=500&fit=crop',
    story: 'My husband passed away when my youngest was just two years old. I did not know what to do. A neighbour told me about Zion City and I registered not knowing what to expect. The hairdressing training gave me a skill and the confidence to open a small salon from my home.',
  },
  {
    name: 'Blessing Adeyemi',
    skill: 'Digital Literacy',
    location: 'Oyo State',
    photo: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=500&fit=crop',
    story: 'I thought technology was not for people like me. But the digital literacy programme proved me wrong. I can now use a smartphone confidently, manage mobile money, and even help my children with their school assignments online. Knowledge is power and Zion City gave me both.',
  },
];

function InitialsAvatar({ name }: { name: string }) {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#C1694F] to-[#8B3A20] flex items-center justify-center">
      <span className="font-['Playfair_Display'] text-[40px] font-bold text-white">{initials}</span>
    </div>
  );
}

function ShareButtons({ name, story }: { name: string; story: string }) {
  const shareText = encodeURIComponent(
    `"${story.slice(0, 100)}..." — ${name}'s story at Zion City for Widows`
  );

  return (
    <div className="flex items-center gap-3">
      <span className="font-['Nunito'] text-[12px] text-[#6B7280] font-semibold flex items-center gap-1">
        <Share2 size={12} />
        Share
      </span>

      {/* WhatsApp — grey icon only, no text, not disabled — just grey coloured */}
      <a
        href={`https://wa.me/?text=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-[#f3f4f6] flex items-center justify-center hover:bg-[#e5e7eb] transition-colors duration-200"
        title="Share on WhatsApp"
      >
        <svg className="w-4 h-4 fill-[#9ca3af]" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.845L.057 23.57a.75.75 0 0 0 .906.919l5.857-1.533A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.694 9.694 0 0 1-4.944-1.354l-.355-.21-3.676.963.981-3.584-.232-.369A9.699 9.699 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
        </svg>
      </a>
    </div>
  );
}

function StoryCard({ t, isEven }: { t: typeof testimonies[0]; isEven: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-[28px] border border-[#C1694F]/10 hover:shadow-[0_16px_56px_rgba(193,105,79,0.12)] transition-all duration-300 group overflow-hidden">
      <div className={`flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''}`}>

        {/* Image block */}
        <div className="md:w-[260px] md:min-w-[260px] flex-shrink-0 relative bg-[#F9E8E0]">
          {/* On mobile: fixed height. On desktop: full height of card */}
          <div className="h-[200px] md:h-full relative">
            <div
              className="absolute inset-3 md:inset-4 overflow-hidden shadow-[0_8px_32px_rgba(193,105,79,0.25)]"
              style={{
                borderRadius: isEven ? '16px 60px 60px 16px' : '60px 16px 16px 60px',
              }}
            >
              {t.photo ? (
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <InitialsAvatar name={t.name} />
              )}
            </div>

            {/* Skill badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#C1694F] text-white font-['Nunito'] font-bold text-[11px] px-4 py-1.5 rounded-full shadow-[0_4px_12px_rgba(193,105,79,0.4)] whitespace-nowrap z-10">
              {t.skill}
            </div>
          </div>
        </div>

        {/* Content block */}
        <div className="flex-1 p-6 md:p-9 flex flex-col justify-between">
          <div>
            {/* Name + location — horizontal on mobile */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="font-['Playfair_Display'] text-[18px] md:text-[22px] font-bold text-[#2C1810] leading-tight">
                  {t.name}
                </h3>
                <p className="font-['Nunito'] text-[12px] text-[#6B7280] mt-0.5">
                  {t.location}
                </p>
              </div>
              {/* Quote icon — mobile only decoration */}
              <div className="font-['Playfair_Display'] text-[48px] leading-none text-[#C1694F]/15 font-bold select-none flex-shrink-0">
                &ldquo;
              </div>
            </div>

            {/* Story — clamped on mobile, expandable */}
            <p className={`font-['Nunito'] text-[14px] md:text-[15px] text-[#5C3D2E] leading-[1.75] italic transition-all duration-300 ${expanded ? '' : 'line-clamp-3 md:line-clamp-none'}`}>
              {t.story}
            </p>

            {/* Read more — mobile only */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="md:hidden mt-2 font-['Nunito'] font-bold text-[12px] text-[#C1694F] bg-transparent border-none cursor-pointer p-0"
            >
              {expanded ? 'Read less ↑' : 'Read more ↓'}
            </button>
          </div>

          <div className="mt-5 pt-4 border-t border-[#C1694F]/10">
            <ShareButtons name={t.name} story={t.story} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimoniesGrid() {
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="text-center mb-12">
          <p className="font-['Nunito'] text-[12px] font-bold tracking-[2px] uppercase text-[#C1694F] mb-3">
            Testimonies
          </p>
          <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] font-bold text-[#2C1810] leading-tight">
            Voices from Our Community
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {testimonies.map((t, i) => (
            <StoryCard key={i} t={t} isEven={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}