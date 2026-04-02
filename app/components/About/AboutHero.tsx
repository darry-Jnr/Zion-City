export default function AboutHero() {
  const heroImage = "https://res.cloudinary.com/dwlgcj8ht/image/upload/q_100,f_auto,w_1200/v1775076226/WhatsApp_Image_2026-04-01_at_4.30.36_PM_t7n2at.jpg";

  return (
    <>
      {/* ── MOBILE layout ── */}
      <section className="lg:hidden relative w-full min-h-[92vh] overflow-hidden flex flex-col justify-end">
        <img
          src={heroImage}
          alt="Zion City for Widows"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/95 via-[#2C1810]/40 to-transparent" />

        <div className="relative z-10 px-5 pb-10 pt-32">
          <p className="font-['Nunito'] text-[10px] font-bold tracking-[3px] uppercase text-[#E8927A] mb-3">
            Our Story
          </p>
          <h1 className="font-['Playfair_Display'] text-[38px] font-bold text-white leading-tight mb-4">
            About Zion City <br />
            <em className="text-[#E8927A]">for Widows</em>
          </h1>
          <p className="font-['Nunito'] text-[14px] text-white/75 leading-relaxed mb-5">
            Founded in honour of a mother's 70th birthday — a tribute to the strength, 
            resilience, and love of mothers everywhere.
          </p>

          <div className="border-l-[3px] border-[#E8927A] pl-4 py-0.5 mb-6">
            <p className="font-['Playfair_Display'] text-[15px] italic text-[#E8927A] leading-snug">
              &ldquo;A woman who births visions.&rdquo;
            </p>
          </div>

          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-4 py-3">
            <div className="w-8 h-8 rounded-full bg-[#C1694F] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[14px]">🕯️</span>
            </div>
            <div>
              <p className="font-['Playfair_Display'] text-[13px] font-bold text-white leading-tight">
                Commemorative Project
              </p>
              <p className="font-['Nunito'] text-[11px] text-white/55 mt-0.5">
                Mummy's 70th Birthday
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESKTOP layout ── */}
      <section className="hidden lg:block py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 gap-16 items-center">

            {/* Left — Text */}
            <div>
              <p className="font-['Nunito'] text-[12px] font-bold tracking-[2px] uppercase text-[#C1694F] mb-4">
                Our Story
              </p>
              <h1 className="font-['Playfair_Display'] text-[clamp(32px,5vw,56px)] font-bold text-[#2C1810] leading-tight mb-6">
                About Zion City <br />
                <em className="text-[#C1694F]">for Widows</em>
              </h1>
              <p className="font-['Nunito'] text-[17px] text-[#5C3D2E] leading-relaxed mb-5">
                Zion City for Widows was founded in honour of a mother's 70th birthday — 
                a tribute to the strength, resilience, and love of mothers everywhere. 
              </p>
              <p className="font-['Nunito'] text-[17px] text-[#5C3D2E] leading-relaxed mb-8">
                What began as a heartfelt gesture has grown into a transformative 
                movement, giving widows a platform that empowers and strengthens.
              </p>
              <div className="border-l-4 border-[#C1694F] pl-5 py-1">
                <p className="font-['Playfair_Display'] text-[18px] italic text-[#C1694F] leading-snug">
                  &ldquo;A gift that would outlive the giver.&rdquo;
                </p>
              </div>
            </div>

            {/* Right — Image */}
            <div className="relative">
              <div className="w-full h-[480px] rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(193,105,79,0.18)]">
                <img
                  src={heroImage}
                  alt="Zion City Founder"
                  className="w-full h-full object-cover object-top antialiased"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#2C1810] text-white px-6 py-4 rounded-2xl shadow-xl">
                <p className="font-['Playfair_Display'] text-[15px] font-bold leading-tight text-[#E8927A]">
                  70th Birthday Project
                </p>
                <p className="font-['Nunito'] text-[12px] text-white/60 mt-0.5 uppercase tracking-wider">
                  Commemorative Tribute
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}