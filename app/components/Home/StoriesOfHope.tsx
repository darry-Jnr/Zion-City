import Link from 'next/link';

const stories = [
  {
    name: 'Amara',
    skill: 'Tailoring',
    quote: 'After losing my husband, I felt lost. Zion City for Widows gave me hope and the skills to support my family. Now I sew clothes for my community and earn a living with dignity.',
    img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop',
  },
  {
    name: 'Zainab',
    skill: 'Catering',
    quote: "Through the catering training, I discovered my passion. The community's support gave me confidence. Today, I run a small food business and am rebuilding my life.",
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
  },
  {
    name: 'Chioma',
    skill: 'Crafts',
    quote: 'The craft skills opened new doors for me. Zion City not only taught me, but showed me I am worthy of a second chance at happiness and success.',
    img: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=400&h=400&fit=crop',
  },
];

const cardStyles = [
  {
    radius: '20px 60px 20px 60px',
    bg: 'bg-[#FAF7F2]',
    skillColor: 'text-[#C1694F]',
    nameColor: 'text-[#2C1810]',
    quoteColor: 'text-[#5C3D2E]',
    lineColor: 'bg-[#C1694F]/25',
    imgRadius: '16px 56px 0 0',
  },
  {
    radius: '60px 20px 60px 20px',
    bg: 'bg-[#C1694F]',
    skillColor: 'text-white/70',
    nameColor: 'text-white',
    quoteColor: 'text-white/80',
    lineColor: 'bg-white/30',
    imgRadius: '56px 16px 0 0',
  },
  {
    radius: '20px 60px 20px 60px',
    bg: 'bg-[#2C1810]',
    skillColor: 'text-[#E8927A]',
    nameColor: 'text-white',
    quoteColor: 'text-white/60',
    lineColor: 'bg-[#E8927A]/30',
    imgRadius: '16px 56px 0 0',
  },
];

export default function StoriesOfHope() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="font-['Nunito'] text-[11px] font-bold tracking-[3px] uppercase text-[#C1694F] mb-3">
            Testimonies
          </p>
          <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] font-bold text-[#2C1810] leading-tight">
            Stories of Hope
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {stories.map((s, i) => {
            const style = cardStyles[i];
            return (
              <div
                key={i}
                style={{ borderRadius: style.radius }}
                className={`overflow-hidden ${style.bg} hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(44,24,16,0.15)] ${i === 1 ? 'md:scale-105' : ''}`}
              >
                {/* Image */}
                <div
                  className="h-[200px] overflow-hidden"
                  style={{ borderRadius: `${style.imgRadius}` }}
                >
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-7">
                  {/* Name + skill */}
                  <div className="mb-3">
                    <span className={`font-['Playfair_Display'] font-bold text-[18px] ${style.nameColor}`}>
                      {s.name}
                    </span>
                    <span className={`font-['Nunito'] text-[12px] font-bold tracking-[1px] uppercase ml-2 ${style.skillColor}`}>
                      · {s.skill}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className={`w-8 h-[2px] rounded-full mb-4 ${style.lineColor}`} />

                  {/* Quote */}
                  <p className={`font-['Nunito'] text-[13px] leading-relaxed italic ${style.quoteColor}`}>
                    &ldquo;{s.quote}&rdquo;
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/stories"
            className="inline-block font-['Nunito'] font-bold text-[15px] text-white bg-[#C1694F] px-8 py-3.5 rounded-lg transition-all duration-300 hover:bg-[#A85540] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(193,105,79,0.3)]"
          >
            Read More Stories
          </Link>
        </div>

      </div>
    </section>
  );
}