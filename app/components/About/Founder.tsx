export default function Founder() {
    return (
      <section className="py-20 bg-[#F9E8E0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
  
            {/* Image */}
            <div className="relative">
              <div className="w-full max-w-[420px] mx-auto lg:mx-0 aspect-square rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(193,105,79,0.2)]">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=500&fit=crop"
                  alt="Founder of Zion City for Widows"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative quote mark */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#C1694F] rounded-2xl flex items-center justify-center shadow-lg">
                <span className="font-['Playfair_Display'] text-[32px] text-white leading-none font-bold">&ldquo;</span>
              </div>
            </div>
  
            {/* Text */}
            <div>
              <p className="font-['Nunito'] text-[12px] font-bold tracking-[2px] uppercase text-[#C1694F] mb-4">
                Our Founder
              </p>
              <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,40px)] font-bold text-[#2C1810] leading-tight mb-6">
                Meet the Heart <br />
                <em className="text-[#C1694F]">Behind the Vision</em>
              </h2>
              <p className="font-['Nunito'] text-[16px] text-[#5C3D2E] leading-relaxed mb-5">
                Our founder envisioned Zion City for Widows as a tribute to maternal
                strength and love. Inspired by the 70th birthday celebration of a
                beloved mother, she recognised that the care, wisdom, and resilience
                of mothers extends far beyond individual families — it can transform
                entire communities.
              </p>
              <p className="font-['Nunito'] text-[16px] text-[#5C3D2E] leading-relaxed mb-8">
                With a deep commitment to social justice and women&apos;s empowerment,
                she founded this organisation to ensure that widows are not left
                behind — but lifted up, celebrated, and given the tools to build
                futures filled with dignity and purpose.
              </p>
  
              {/* Dedication tag */}
              <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-[#C1694F]/20 shadow-sm">
                <span className="text-lg">🌿</span>
                <span className="font-['Nunito'] text-[14px] font-semibold text-[#5C3D2E] italic">
                  Dedicated with love to Mummy on her 70th birthday
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }