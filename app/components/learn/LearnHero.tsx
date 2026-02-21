export default function LearnHero() {
  return (
    <section className="relative w-full h-[88vh] min-h-[520px] max-h-[720px] overflow-hidden flex items-center">

      {/* Background image — woman sewing */}
      <img
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=800&fit=crop"
        alt="Woman sewing"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/90 via-[#2C1810]/60 to-[#2C1810]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 w-full">
        <div className="max-w-[560px]">
          <p className="font-['Nunito'] text-[11px] font-bold tracking-[3px] uppercase text-[#E8927A] mb-4">
            Video Library
          </p>
          <h1 className="font-['Playfair_Display'] text-[clamp(32px,7vw,60px)] font-bold text-white leading-tight mb-5">
            Learn at Your <br />
            <em className="text-[#E8927A]">Own Pace</em>
          </h1>
          <p className="font-['Nunito'] text-[15px] text-white/75 leading-relaxed mb-8 max-w-[440px]">
            Free skills training videos for every woman ready to grow. No login,
            no cost — just learn.
          </p>

          {/* Stats */}
          <div className="flex gap-6 mb-8">
            {[
              { number: '10+', label: 'Free Videos' },
              { number: '6', label: 'Skill Topics' },
              { number: '0', label: 'Login Needed' },
            ].map((stat, i) => (
              <div key={i} className="flex-shrink-0">
                <p className="font-['Playfair_Display'] text-[26px] font-bold text-[#E8927A] leading-none">
                  {stat.number}
                </p>
                <p className="font-['Nunito'] text-[11px] text-white/55 mt-1 whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#videos"
            className="inline-flex items-center gap-2 bg-[#C1694F] text-white font-['Nunito'] font-bold text-[14px] px-6 py-3.5 rounded-xl hover:bg-[#A85540] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(193,105,79,0.4)] transition-all duration-200 no-underline"
          >
            Browse Videos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#FAF7F2] to-transparent" />
    </section>
  );
}