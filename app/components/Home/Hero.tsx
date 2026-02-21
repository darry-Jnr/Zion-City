import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1600&h=900&fit=crop"
        alt="African women community"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810]/80 via-[#2C1810]/60 to-[#C1694F]/50" />

      {/* Decorative circle */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#C1694F]/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[800px] mx-auto pt-20 md:pt-0">
        <p className="text-[11px] sm:text-[12px] font-['Nunito'] font-bold tracking-[3px] uppercase text-white/70 mb-4 sm:mb-5">
          🌿 A Place to Heal, Learn & Thrive
        </p>

        <h1 className="font-['Playfair_Display'] text-[36px] sm:text-[50px] md:text-[clamp(40px,6vw,72px)] font-bold text-white leading-[1.15] mb-4 sm:mb-6">
          A Safe Home for <br />
          <em className="text-[#E8927A] not-italic">Widows to Rise</em>
        </h1>

        <p className="font-['Nunito'] text-[15px] sm:text-[17px] md:text-[18px] text-white/85 leading-relaxed max-w-[560px] mx-auto mb-8 sm:mb-10">
          Zion City provides skills training, community support, and
          economic opportunity to help widows across Nigeria rebuild their lives
          with dignity and hope.
        </p>

        <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
          <Link
            href="/register"
            className="font-['Nunito'] font-bold text-[14px] sm:text-[16px] text-white bg-[#C1694F] px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg transition-all duration-300 hover:bg-[#A85540] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(193,105,79,0.4)]"
          >
            Register as a Widow
          </Link>
          <Link
            href="/register"
            className="font-['Nunito'] font-bold text-[14px] sm:text-[16px] text-white border-2 border-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#C1694F]"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
}