import Link from 'next/link';

export default function JoinCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#C1694F] to-[#8B3A20] text-center relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-40px] w-[400px] h-[400px] rounded-full bg-white/5 pointer-events-none" />

      <div className="relative z-10 max-w-[640px] mx-auto px-6">
        <p className="font-['Nunito'] text-[12px] font-bold tracking-[2px] uppercase text-white/60 mb-4">
          Get Involved
        </p>
        <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] font-bold text-white leading-tight mb-5">
          Join Our Community
        </h2>
        <p className="font-['Nunito'] text-[17px] text-white/85 leading-relaxed mb-10">
          Whether you&apos;re a widow seeking support, a financial partner wanting
          to contribute, or a skilled tutor ready to teach — there&apos;s a place
          for you here.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/register"
            className="font-['Nunito'] font-bold text-[15px] text-[#C1694F] bg-white px-7 py-3.5 rounded-lg transition-all duration-300 hover:bg-[#FAF7F2] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
          >
            Get Involved
          </Link>
          <Link
            href="/contact"
            className="font-['Nunito'] font-bold text-[15px] text-white border-2 border-white px-7 py-3.5 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#C1694F]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}