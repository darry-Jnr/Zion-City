import Link from 'next/link';

export default function WhatWeDoCTA() {
  return (
    <section className="py-20 bg-[#F9E8E0]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-[#2C1810] rounded-3xl px-10 py-14 text-center relative overflow-hidden">
          <div className="absolute top-[-50px] right-[-50px] w-[280px] h-[280px] rounded-full bg-[#C1694F]/10 pointer-events-none" />
          <div className="absolute bottom-[-60px] left-[-30px] w-[300px] h-[300px] rounded-full bg-[#C1694F]/8 pointer-events-none" />

          <div className="relative z-10 max-w-[580px] mx-auto">
            <p className="font-['Nunito'] text-[12px] font-bold tracking-[2px] uppercase text-[#C1694F] mb-4">
              Take the First Step
            </p>
            <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] font-bold text-white leading-tight mb-5">
              Your New Chapter <br />
              <em className="text-[#E8927A]">Starts Here</em>
            </h2>
            <p className="font-['Nunito'] text-[16px] text-white/75 leading-relaxed mb-10">
              Whether you are a widow ready to learn, a tutor ready to teach,
              or a partner ready to give — there is a place for you in Zion City.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/register"
                className="font-['Nunito'] font-bold text-[15px] text-[#2C1810] bg-white px-7 py-3.5 rounded-xl transition-all duration-300 hover:bg-[#FAF7F2] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)] no-underline"
              >
                Register as a Widow
              </Link>
              <Link
                href="/register"
                className="font-['Nunito'] font-bold text-[15px] text-white border-2 border-white/30 px-7 py-3.5 rounded-xl transition-all duration-300 hover:border-white hover:bg-white/10 no-underline"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}