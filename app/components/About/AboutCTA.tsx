import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#C1694F] to-[#8B3A20] text-center relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-40px] w-[400px] h-[400px] rounded-full bg-white/5 pointer-events-none" />

      <div className="relative z-10 max-w-[580px] mx-auto px-6">
        <p className="font-['Nunito'] text-[12px] font-bold tracking-[2px] uppercase text-white/60 mb-4">
          Join Us
        </p>
        <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,38px)] font-bold text-white leading-tight mb-5">
          Be Part of Our Story
        </h2>
        <p className="font-['Nunito'] text-[16px] text-white/85 leading-relaxed mb-10">
          Every widow deserves hope. Every community deserves healing. Join us
          and help write the next chapter.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/register"
            className="font-['Nunito'] font-bold text-[15px] text-[#C1694F] bg-white px-7 py-3.5 rounded-lg transition-all duration-300 hover:bg-[#FAF7F2] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
          >
            Register as a Widow
          </Link>
          <Link
            href="/register"
            className="font-['Nunito'] font-bold text-[15px] text-white border-2 border-white px-7 py-3.5 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#C1694F]"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
}