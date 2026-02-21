const values = [
  {
    number: '01',
    title: 'Dignity',
    desc: 'We honour the inherent worth of every widow, treating each person as a valued member of our community.',
    bg: 'bg-[#F9E8E0]',
    titleColor: 'text-[#C1694F]',
    descColor: 'text-[#5C3D2E]',
    numColor: 'text-[#C1694F]/12',
    numSmColor: 'text-[#C1694F]/40',
    lineColor: 'bg-[#C1694F]/25',
    radiusMobile: '20px 60px 20px 60px',
    radiusDesktop: '20px 80px 20px 80px',
    height: 'lg:min-h-[320px]',
  },
  {
    number: '02',
    title: 'Empowerment',
    desc: 'We equip widows with skills, knowledge, and confidence to take control of their futures and achieve economic independence.',
    bg: 'bg-[#2C1810]',
    titleColor: 'text-[#E8927A]',
    descColor: 'text-white/60',
    numColor: 'text-white/8',
    numSmColor: 'text-white/30',
    lineColor: 'bg-white/15',
    radiusMobile: '60px 20px 60px 20px',
    radiusDesktop: '80px 20px 80px 20px',
    height: 'lg:min-h-[260px]',
  },
  {
    number: '03',
    title: 'Community',
    desc: 'We believe in the power of collective care, support networks, and shared responsibility to lift one another.',
    bg: 'bg-[#C1694F]',
    titleColor: 'text-white',
    descColor: 'text-white/75',
    numColor: 'text-white/12',
    numSmColor: 'text-white/35',
    lineColor: 'bg-white/30',
    radiusMobile: '20px 60px 20px 60px',
    radiusDesktop: '20px 80px 20px 80px',
    height: 'lg:min-h-[320px]',
  },
  {
    number: '04',
    title: 'Faith',
    desc: 'We trust in hope, resilience, and the transformative power of compassion and spiritual support.',
    bg: 'bg-white',
    titleColor: 'text-[#2C1810]',
    descColor: 'text-[#5C3D2E]',
    numColor: 'text-[#2C1810]/8',
    numSmColor: 'text-[#2C1810]/25',
    lineColor: 'bg-[#C1694F]/25',
    radiusMobile: '60px 20px 60px 20px',
    radiusDesktop: '80px 20px 80px 20px',
    height: 'lg:min-h-[260px]',
    border: true,
  },
];

export default function CoreValues() {
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Header */}
        <div className="mb-10">
          <p className="font-['Nunito'] text-[11px] font-bold tracking-[3px] uppercase text-[#C1694F] mb-3">
            What We Stand For
          </p>
          <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] font-bold text-[#2C1810] leading-tight">
            Our Core Values
          </h2>
        </div>

        {/* Mobile — single column horizontal cards */}
        <div className="flex flex-col gap-4 lg:hidden">
          {values.map((v, i) => (
            <div
              key={i}
              style={{ borderRadius: v.radiusMobile }}
              className={`
                relative overflow-hidden flex items-center gap-5 px-6 py-5 ${v.bg}
                ${v.border ? 'border border-[#C1694F]/12' : ''}
              `}
            >
              {/* Left — big faded number */}
              <div className={`flex-shrink-0 font-['Playfair_Display'] text-[56px] font-bold leading-none select-none ${v.numSmColor}`}>
                {v.number}
              </div>

              {/* Vertical divider */}
              <div className={`w-px self-stretch ${v.lineColor}`} />

              {/* Right — title + desc */}
              <div className="flex-1 min-w-0">
                <h4 className={`font-['Playfair_Display'] text-[18px] font-bold leading-tight mb-1.5 ${v.titleColor}`}>
                  {v.title}
                </h4>
                <p className={`font-['Nunito'] text-[12px] leading-relaxed ${v.descColor}`}>
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop — 4 col varied height grid */}
        <div className="hidden lg:grid grid-cols-4 gap-4 items-end">
          {values.map((v, i) => (
            <div
              key={i}
              style={{ borderRadius: v.radiusDesktop }}
              className={`
                relative overflow-hidden flex flex-col justify-between
                p-8 ${v.height} ${v.bg}
                hover:-translate-y-2 transition-all duration-300
                ${v.border ? 'border border-[#C1694F]/12 shadow-[0_2px_16px_rgba(193,105,79,0.06)] hover:shadow-[0_16px_48px_rgba(193,105,79,0.1)]' : 'hover:shadow-[0_16px_48px_rgba(44,24,16,0.15)]'}
              `}
            >
              {/* Huge background number */}
              <div
                className={`absolute -bottom-4 -right-2 font-['Playfair_Display'] text-[120px] font-bold leading-none select-none pointer-events-none ${v.numColor}`}
                aria-hidden
              >
                {v.number}
              </div>

              {/* Top label */}
              <div className="relative z-10">
                <span className={`font-['Nunito'] text-[11px] font-bold tracking-[2px] uppercase ${v.titleColor} opacity-50`}>
                  {v.number}
                </span>
              </div>

              {/* Bottom content */}
              <div className="relative z-10 mt-auto">
                <h4 className={`font-['Playfair_Display'] text-[24px] font-bold leading-tight mb-3 ${v.titleColor}`}>
                  {v.title}
                </h4>
                <div className={`w-8 h-[2px] rounded-full mb-3 ${v.lineColor}`} />
                <p className={`font-['Nunito'] text-[13px] leading-relaxed ${v.descColor}`}>
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}