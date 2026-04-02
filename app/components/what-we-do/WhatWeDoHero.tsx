export default function WhatWeDoHero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] max-h-[850px] overflow-hidden flex items-center">

      {/* Background image — represents the dignity and community of Zion City */}
      <img
        src="https://images.unsplash.com/photo-1531266752426-aad4966d839d?auto=format&fit=crop&q=80&w=1600"
        alt="Empowered women in community"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Sophisticated Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810] via-[#2C1810]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        <div className="max-w-[650px]">
          <p className="font-['Nunito'] text-[12px] font-bold tracking-[4px] uppercase text-[#E8927A] mb-4">
            The Zion City Academy
          </p>
          <h1 className="font-['Playfair_Display'] text-[clamp(36px,8vw,64px)] font-bold text-white leading-[1.1] mb-6">
            Restoring <br />
            <em className="text-[#E8927A] italic">Hope & Dignity</em>
          </h1>
          <p className="font-['Nunito'] text-[16px] text-white/80 leading-relaxed mb-10 max-w-[500px]">
            More than just a platform—we are a community. Through our 6-month 
            residency, we provide the spiritual, emotional, and financial 
            aid widows deserve to rebuild their lives and achieve true independence.
          </p>

          {/* Program Highlights / Stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            {[
              { number: '6', label: 'Months Residency' },
              { number: '100%', label: 'Business Funding' },
              { number: 'Certified', label: 'Skill Training' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col border-l border-[#E8927A]/30 pl-4">
                <p className="font-['Playfair_Display'] text-[28px] font-bold text-[#E8927A] leading-none">
                  {stat.number}
                </p>
                <p className="font-['Nunito'] text-[11px] font-bold tracking-[1px] uppercase text-white/50 mt-2 whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/register"
              className="inline-flex items-center gap-3 bg-[#C1694F] text-white font-['Nunito'] font-bold text-[14px] px-8 py-4 rounded-xl hover:bg-[#A85540] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(193,105,79,0.4)] transition-all duration-300 no-underline"
            >
              Enroll in the Academy
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#FAF7F2] to-transparent" />
    </section>
  );
}