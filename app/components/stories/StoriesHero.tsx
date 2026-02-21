export default function StoriesHero() {
  return (
    <section className="bg-white pt-10 pb-0 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left — Text */}
          <div className="pb-6 lg:pb-20">
            <p className="font-['Nunito'] text-[11px] font-bold tracking-[2px] uppercase text-[#C1694F] mb-3">
              Testimonies
            </p>
            <h1 className="font-['Playfair_Display'] text-[clamp(30px,8vw,56px)] font-bold text-[#2C1810] leading-tight mb-4">
              Stories of <br />
              <em className="text-[#C1694F]">Hope &amp; Healing</em>
            </h1>
            <p className="font-['Nunito'] text-[15px] text-[#5C3D2E] leading-relaxed mb-7 max-w-[500px]">
              These are real stories from real women — widows who faced loss,
              found community, learned a skill, and rebuilt their lives. Every
              story is a reminder that it is never too late to begin again.
            </p>

            {/* Stats — always one straight line */}
            <div className="flex gap-6">
              {[
                { number: '150+', label: 'Widows Supported' },
                { number: '6', label: 'Skills Taught' },
                { number: '4+', label: 'States Reached' },
              ].map((stat, i) => (
                <div key={i} className="flex-shrink-0">
                  <p className="font-['Playfair_Display'] text-[28px] font-bold text-[#C1694F] leading-none">
                    {stat.number}
                  </p>
                  <p className="font-['Nunito'] text-[12px] text-[#6B7280] mt-1 whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Original collage, now visible on ALL screens */}
          <div className="relative h-[300px] sm:h-[380px] lg:h-[460px]">

            {/* Large image — top left */}
            <div className="absolute top-0 left-0 w-[55%] h-[62%] rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(193,105,79,0.18)]">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&h=400&fit=crop"
                alt="Widow smiling"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small image — top right */}
            <div className="absolute top-0 right-0 w-[42%] h-[44%] rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(193,105,79,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop"
                alt="Community member"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Terracotta accent block */}
            <div className="absolute top-[47%] right-0 w-[42%] h-[26%] rounded-[20px] bg-gradient-to-br from-[#C1694F] to-[#8B3A20] flex items-center justify-center p-3 shadow-[0_8px_24px_rgba(193,105,79,0.3)]">
              <p className="font-['Playfair_Display'] text-[11px] sm:text-[13px] lg:text-[15px] italic text-white text-center leading-snug">
                &ldquo;It is never too late to begin again.&rdquo;
              </p>
            </div>

            {/* Bottom image — bottom left */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[34%] rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(193,105,79,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=240&fit=crop"
                alt="Skills training"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating pill badge */}
            <div className="absolute top-[37%] left-[45%] -translate-x-1/2 bg-white border border-[#C1694F]/20 shadow-[0_4px_20px_rgba(193,105,79,0.15)] rounded-full px-3 py-1.5 z-10">
              <p className="font-['Nunito'] font-bold text-[10px] sm:text-[12px] text-[#C1694F] whitespace-nowrap">
                🌿 Real Women. Real Stories.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Fade into next section */}
      <div className="h-8 bg-gradient-to-b from-white to-[#FAF7F2] mt-6" />
    </section>
  );
}