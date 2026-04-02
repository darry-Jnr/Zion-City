import Link from 'next/link';

export default function OurStory() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <div className="relative">
            <div className="w-full h-[480px] lg:h-[520px] rounded-2xl overflow-hidden bg-gray-50 shadow-xl">
              <img
                // Added w_1200 for higher resolution and q_100 for zero compression
                src="https://res.cloudinary.com/dwlgcj8ht/image/upload/q_100,f_auto,w_1200/v1775076226/WhatsApp_Image_2026-04-01_at_4.30.36_PM_t7n2at.jpg"
                alt="Zion City Founder"
                className="w-full h-full object-cover object-top antialiased"
                // This inline style forces the browser to prioritize sharpness over smoothing
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-2 md:-right-6 bg-[#C1694F] text-white px-8 py-6 rounded-2xl shadow-[0_12px_40px_rgba(193,105,79,0.4)] z-10 transition-transform hover:scale-105 duration-300">
              <p className="font-['Playfair_Display'] text-[24px] font-bold leading-tight">
                Founded
              </p>
              <p className="font-['Nunito'] text-[14px] opacity-90 mt-1">
                In honour of Mummy's 70th birthday
              </p>
            </div>
          </div>

          {/* Text side */}
          <div className="lg:pl-4">
            <p className="font-['Nunito'] text-[13px] font-extrabold tracking-[3px] uppercase text-[#C1694F] mb-4">
              Our Story
            </p>
            <h2 className="font-['Playfair_Display'] text-[clamp(32px,5vw,48px)] font-bold text-[#2C1810] leading-[1.1] mb-6">
              A Woman Who <br />
              <span className="text-[#C1694F] italic">Births Visions</span>
            </h2>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {['Mother', 'Pastor', 'Visioneer', 'Philanthropist'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-[#FDF4F1] text-[#C1694F] text-[12px] font-bold rounded-full uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            <p className="font-['Nunito'] text-[17px] text-[#5C3D2E] leading-relaxed mb-5">
              Zion City was founded in honour of a mother's 70th birthday —
              a tribute to the strength, resilience, and love of mothers everywhere.
            </p>
            <p className="font-['Nunito'] text-[17px] text-[#5C3D2E] leading-relaxed mb-10">
              Our Founder is not merely a mother to her own children — she is a mother to everyone
              around her. She did not just birth children; she birthed visions that build, empower and
              inspire lives. As described in Isaiah 66:8, she is a woman who has brought forth many 
              through the power of prayer and purpose.
            </p>
            
            <Link
              href="/about"
              className="inline-block font-['Nunito'] font-bold text-[16px] text-white bg-[#C1694F] px-10 py-4 rounded-xl transition-all duration-300 hover:bg-[#A85540] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(193,105,79,0.35)]"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}