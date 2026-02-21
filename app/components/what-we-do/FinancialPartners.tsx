import Link from 'next/link';
import { Heart, Users, BookOpen, Gift } from 'lucide-react';

const ways = [
  {
    icon: <Heart size={22} className="text-[#C1694F]" />,
    title: 'Sponsor a Widow',
    desc: 'Cover the full training cost for one widow — her materials, tutor fees, and starter kit — and receive updates on her progress.',
  },
  {
    icon: <Users size={22} className="text-[#C1694F]" />,
    title: 'Fund a Cohort',
    desc: 'Sponsor an entire training group and enable multiple widows to graduate together, amplifying your impact across a community.',
  },
  {
    icon: <BookOpen size={22} className="text-[#C1694F]" />,
    title: 'Support Training Materials',
    desc: 'Donate toward sewing machines, cooking equipment, craft supplies, or digital devices that equip widows for their chosen skill.',
  },
  {
    icon: <Gift size={22} className="text-[#C1694F]" />,
    title: 'Provide Starter Kits',
    desc: 'After graduation, every widow receives a starter kit to launch her business. Your donation makes this possible.',
  },
];

export default function FinancialPartners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Ways to help */}
          <div>
            <p className="font-['Nunito'] text-[12px] font-bold tracking-[2px] uppercase text-[#C1694F] mb-3">
              Financial Partners
            </p>
            <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] font-bold text-[#2C1810] leading-tight mb-5">
              How Your Support <br />
              <em className="text-[#C1694F]">Changes Lives</em>
            </h2>
            <p className="font-['Nunito'] text-[16px] text-[#5C3D2E] leading-relaxed mb-10">
              Financial partners are the backbone of our programme. Without
              their generosity, widows cannot access training, materials, or
              the support they need to rebuild their lives.
            </p>

            <div className="flex flex-col gap-4">
              {ways.map((way, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start bg-[#FAF7F2] p-5 rounded-2xl border border-[#C1694F]/10 hover:shadow-[0_4px_20px_rgba(193,105,79,0.08)] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F9E8E0] flex items-center justify-center flex-shrink-0">
                    {way.icon}
                  </div>
                  <div>
                    <h4 className="font-['Nunito'] font-bold text-[15px] text-[#2C1810] mb-1">
                      {way.title}
                    </h4>
                    <p className="font-['Nunito'] text-[13px] text-[#5C3D2E] leading-relaxed">
                      {way.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — CTA card */}
          <div className="bg-gradient-to-br from-[#C1694F] to-[#8B3A20] rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute bottom-[-60px] left-[-30px] w-[250px] h-[250px] rounded-full bg-white/5 pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-6">
                <Heart size={30} className="text-white" />
              </div>

              <h3 className="font-['Playfair_Display'] text-[28px] font-bold text-white leading-tight mb-4">
                Ready to Make <br /> a Difference?
              </h3>
              <p className="font-['Nunito'] text-[15px] text-white/80 leading-relaxed mb-8">
                Every contribution — big or small — directly funds the
                training and growth of a widow in need. Join our network of
                financial partners today.
              </p>

              <Link
                href="/register"
                className="inline-block font-['Nunito'] font-bold text-[15px] text-[#C1694F] bg-white px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-[#FAF7F2] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] no-underline"
              >
                Become a Financial Partner
              </Link>

              <p className="font-['Nunito'] text-[12px] text-white/50 mt-5 italic">
                All contributions are acknowledged and reported back to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}