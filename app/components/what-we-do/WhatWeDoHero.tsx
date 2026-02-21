export default function WhatWeDoHero() {
  return (
    <section className="relative w-full h-[88vh] min-h-[520px] max-h-[720px] overflow-hidden flex items-center">

      {/* Background image — women in a training/community setting */}
      <img
        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1400&h=800&fit=crop"
        alt="Women in skills training"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay — dark left, lighter right so the woman shows */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/92 via-[#2C1810]/65 to-[#2C1810]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/55 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 w-full">
        <div className="max-w-[600px]">
          <p className="font-['Nunito'] text-[11px] font-bold tracking-[3px] uppercase text-[#E8927A] mb-4">
            Our Programme
          </p>
          <h1 className="font-['Playfair_Display'] text-[clamp(32px,7vw,60px)] font-bold text-white leading-tight mb-5">
            What <br />
            <em className="text-[#E8927A]">We Do</em>
          </h1>
          <p className="font-['Nunito'] text-[15px] text-white/75 leading-relaxed mb-8 max-w-[460px]">
            We equip widows with practical, income-generating skills and
            surround them with a community that believes in their potential.
            From the first day of training to the moment they earn their first
            income — we are with them every step of the way.
          </p>

          {/* Quick stats */}
          <div className="flex gap-6 mb-8">
            {[
              { number: '7', label: 'Skills Offered' },
              { number: '12', label: 'Weeks of Training' },
              { number: '150+', label: 'Lives Changed' },
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
            href="/register"
            className="inline-flex items-center gap-2 bg-[#C1694F] text-white font-['Nunito'] font-bold text-[14px] px-6 py-3.5 rounded-xl hover:bg-[#A85540] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(193,105,79,0.4)] transition-all duration-200 no-underline"
          >
            Join the Programme
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}