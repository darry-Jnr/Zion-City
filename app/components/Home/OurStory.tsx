import Link from 'next/link';

export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <div className="relative">
            <div className="w-full h-[420px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop"
                alt="Women in community"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#C1694F] text-white px-6 py-5 rounded-2xl shadow-[0_8px_32px_rgba(193,105,79,0.35)]">
              <p className="font-['Playfair_Display'] text-[22px] font-bold leading-tight">
                Founded
              </p>
              <p className="font-['Nunito'] text-[13px] opacity-85 mt-0.5">
                In honour of Mummy's 70th birthday
              </p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="font-['Nunito'] text-[12px] font-bold tracking-[2px] uppercase text-[#C1694F] mb-3">
              Our Story
            </p>
            <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] font-bold text-[#2C1810] leading-tight mb-5">
              Born from Love,<br />
              <em className="text-[#C1694F]">Built for Purpose</em>
            </h2>
            <p className="font-['Nunito'] text-[16px] text-[#5C3D2E] leading-relaxed mb-4">
              Zion City  was founded in honour of a mother's 70th birthday —
              a tribute to the strength, resilience, and love of mothers everywhere.
            </p>
            <p className="font-['Nunito'] text-[16px] text-[#5C3D2E] leading-relaxed mb-8">
              What began as a heartfelt gesture has grown into a transformative
              initiative that touches the lives of widows across Nigeria, providing
              them with skills, support, and a renewed sense of purpose.
            </p>
            <Link
              href="/about"
              className="inline-block font-['Nunito'] font-bold text-[15px] text-white bg-[#C1694F] px-7 py-3.5 rounded-lg transition-all duration-300 hover:bg-[#A85540] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(193,105,79,0.3)]"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}