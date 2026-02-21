export default function MissionVision() {
  return (
    <section className="py-16 bg-[#F9E8E0]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="font-['Nunito'] text-[11px] font-bold tracking-[3px] uppercase text-[#C1694F] mb-3">
            Who We Are
          </p>
          <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] font-bold text-[#2C1810] leading-tight">
            Mission & Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Mission */}
          <div className="relative overflow-hidden bg-[#C1694F] rounded-3xl p-10 lg:min-h-[280px] flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(193,105,79,0.3)]">
            <div className="absolute -bottom-4 -right-2 font-['Playfair_Display'] text-[110px] font-bold leading-none select-none pointer-events-none text-white/10" aria-hidden>
              01
            </div>
            <span className="font-['Nunito'] text-[11px] font-bold tracking-[2px] uppercase text-white/50">01</span>
            <div className="relative z-10 mt-auto">
              <h3 className="font-['Playfair_Display'] text-[26px] font-bold text-white leading-tight mb-3">
                Our Mission
              </h3>
              <div className="w-8 h-[2px] rounded-full bg-white/30 mb-3" />
              <p className="font-['Nunito'] text-[13px] text-white/75 leading-relaxed">
                To provide comprehensive support to widows in Nigeria through
                vocational skills training, counselling, and community engagement —
                enabling them to rebuild their lives with dignity, independence, and hope.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="relative overflow-hidden bg-[#2C1810] rounded-3xl p-10 lg:min-h-[280px] flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(44,24,16,0.3)]">
            <div className="absolute -bottom-4 -right-2 font-['Playfair_Display'] text-[110px] font-bold leading-none select-none pointer-events-none text-white/10" aria-hidden>
              02
            </div>
            <span className="font-['Nunito'] text-[11px] font-bold tracking-[2px] uppercase text-white/30">02</span>
            <div className="relative z-10 mt-auto">
              <h3 className="font-['Playfair_Display'] text-[26px] font-bold text-[#E8927A] leading-tight mb-3">
                Our Vision
              </h3>
              <div className="w-8 h-[2px] rounded-full bg-white/15 mb-3" />
              <p className="font-['Nunito'] text-[13px] text-white/60 leading-relaxed">
                A world where every widow is valued, supported, and empowered to
                thrive — where loss does not define destiny, and where community
                care ensures no one is left behind.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}