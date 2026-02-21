export default function AboutHero() {
  return (
    <>
      {/* ── MOBILE layout — cinematic image with text overlaid ── */}
      <section className="lg:hidden relative w-full min-h-[92vh] overflow-hidden flex flex-col justify-end">

        {/* Full bleed image */}
        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop&crop=top"
          alt="Zion City for Widows community"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Gradient — transparent top, dark bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/95 via-[#2C1810]/40 to-transparent" />

        {/* Content floats at the bottom */}
        <div className="relative z-10 px-5 pb-10 pt-32">
          <p className="font-['Nunito'] text-[10px] font-bold tracking-[3px] uppercase text-[#E8927A] mb-3">
            Our Story
          </p>
          <h1 className="font-['Playfair_Display'] text-[38px] font-bold text-white leading-tight mb-4">
            About Zion City <br />
            <em className="text-[#E8927A]">for Widows</em>
          </h1>
          <p className="font-['Nunito'] text-[14px] text-white/75 leading-relaxed mb-5">
            Founded in honour of a mother&apos;s 70th birthday — what began as a
            heartfelt gesture has grown into a transformative movement across Nigeria.
          </p>

          {/* Pull quote */}
          <div className="border-l-[3px] border-[#E8927A] pl-4 py-0.5 mb-6">
            <p className="font-['Playfair_Display'] text-[15px] italic text-[#E8927A] leading-snug">
              &ldquo;You are not alone, you are worthy, and your future is bright.&rdquo;
            </p>
          </div>

          {/* Founded tag */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-4 py-3">
            <div className="w-8 h-8 rounded-full bg-[#C1694F] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[14px]">🕯️</span>
            </div>
            <div>
              <p className="font-['Playfair_Display'] text-[13px] font-bold text-white leading-tight">
                Founded with Love
              </p>
              <p className="font-['Nunito'] text-[11px] text-white/55 mt-0.5">
                Mummy&apos;s 70th Birthday Project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESKTOP layout — original split ── */}
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
                Founded in honour of a mother&apos;s 70th birthday, Zion City for
                Widows is a tribute to the strength, resilience, and unconditional
                love that mothers embody. What began as a heartfelt gesture has
                grown into a transformative movement across Nigeria.
              </p>
              <p className="font-['Nunito'] text-[17px] text-[#5C3D2E] leading-relaxed mb-8">
                We exist to change the narrative for widows — giving them not just
                support, but skills, community, and a renewed sense of purpose.
              </p>
              <div className="border-l-4 border-[#C1694F] pl-5 py-1">
                <p className="font-['Playfair_Display'] text-[18px] italic text-[#C1694F] leading-snug">
                  &ldquo;You are not alone, you are worthy, and your future is bright.&rdquo;
                </p>
              </div>
            </div>

            {/* Right — Image */}
            <div className="relative">
              <div className="w-full h-[480px] rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(193,105,79,0.18)]">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&h=700&fit=crop"
                  alt="Zion City for Widows community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#2C1810] text-white px-6 py-4 rounded-2xl shadow-xl">
                <p className="font-['Playfair_Display'] text-[15px] font-bold leading-tight">
                  Founded with Love
                </p>
                <p className="font-['Nunito'] text-[12px] text-white/60 mt-0.5">
                  Mummy&apos;s 70th Birthday Project
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}