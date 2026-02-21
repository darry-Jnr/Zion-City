export default function BlogHero() {
  return (
    <section className="bg-white pt-10 pb-0 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left — Text */}
          <div className="pb-6 lg:pb-16">
            <p className="font-['Nunito'] text-[11px] font-bold tracking-[2px] uppercase text-[#C1694F] mb-3">
              Our Blog
            </p>
            <h1 className="font-['Playfair_Display'] text-[clamp(30px,8vw,56px)] font-bold text-[#2C1810] leading-tight mb-4">
              News, Updates <br />
              <em className="text-[#C1694F]">&amp; Stories</em>
            </h1>
            <p className="font-['Nunito'] text-[15px] text-[#5C3D2E] leading-relaxed mb-8 max-w-[480px]">
              Stay up to date with what is happening in our community — from
              programme updates and graduation events to skills tips and
              inspiring stories from the field.
            </p>

            {/* Category pills */}
            <div className="flex gap-2 flex-wrap">
              {['News', 'Skills', 'Stories', 'Events'].map((cat) => (
                <span
                  key={cat}
                  className="font-['Nunito'] font-bold text-[12px] text-[#5C3D2E] bg-[#F9E8E0] px-4 py-2 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Featured post card preview */}
          <div className="pb-6 lg:pb-16">
            <div className="bg-[#FAF7F2] rounded-[24px] overflow-hidden border border-[#C1694F]/10 shadow-[0_8px_32px_rgba(193,105,79,0.08)]">

              {/* Image */}
              <div className="h-[200px] sm:h-[240px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&h=400&fit=crop"
                  alt="Graduation ceremony"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#C1694F] text-white font-['Nunito'] font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="bg-purple-50 text-purple-600 font-['Nunito'] font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                    Events
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-[18px] sm:text-[20px] font-bold text-[#2C1810] leading-snug mb-2">
                  Our First Graduation Ceremony — A Day of Joy and New Beginnings
                </h3>
                <p className="font-['Nunito'] text-[13px] text-[#5C3D2E] leading-relaxed line-clamp-2 mb-4">
                  Twenty-four widows received their certificates of completion. It was a day filled with tears, laughter, and quiet confidence.
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-['Nunito'] text-[12px] text-[#6B7280]">
                    February 10, 2026 · 4 min read
                  </span>
                  <span className="font-['Nunito'] font-bold text-[12px] text-[#C1694F]">
                    Read →
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Fade into blog section */}
      <div className="h-8 bg-gradient-to-b from-white to-[#FAF7F2]" />
    </section>
  );
}