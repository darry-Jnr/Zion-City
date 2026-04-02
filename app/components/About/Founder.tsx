export default function Founder() {
  return (
    <section className="py-24 bg-[#F9E8E0]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <div className="relative">
            <div className="w-full max-w-[450px] mx-auto lg:mx-0 aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(44,24,16,0.15)]">
              <img
                src="https://res.cloudinary.com/dwlgcj8ht/image/upload/q_100,f_auto,w_1200/v1775076226/WhatsApp_Image_2026-04-01_at_4.30.36_PM_t7n2at.jpg"
                alt="Pastor & Philanthropist - Zion City Founder"
                className="w-full h-full object-cover object-top antialiased"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </div>
            {/* Scripture Badge */}
            <div className="absolute -bottom-6 -right-2 md:-right-6 bg-[#2C1810] text-white px-8 py-6 rounded-2xl shadow-xl max-w-[280px]">
              <p className="font-['Playfair_Display'] text-[16px] italic leading-relaxed text-[#E8927A]">
                "She travails in the place of prayer"
              </p>
              <p className="font-['Nunito'] text-[12px] font-bold uppercase tracking-widest mt-3 text-white/50">
                — Isaiah 66:8
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <p className="font-['Nunito'] text-[13px] font-extrabold tracking-[3px] uppercase text-[#C1694F] mb-4">
              Our Founder & Visionary
            </p>
            <h2 className="font-['Playfair_Display'] text-[clamp(32px,4.5vw,48px)] font-bold text-[#2C1810] leading-[1.1] mb-6">
              A Woman Who <br />
              <span className="text-[#C1694F]">Births Visions</span>
            </h2>

            <div className="space-y-5 font-['Nunito'] text-[17px] text-[#5C3D2E] leading-relaxed">
              <p>
                Our Founder is not merely a mother to her own children — she is a mother to everyone around her. 
                She did not just birth children; she birthed visions that build, empower and inspire lives. 
              </p>
              <p>
                As a widow herself, she understands the journey intimately. In commemoration of her 70th birthday, 
                she has decided to give to society a gift that will outlive the giver — a platform that strengthens 
                widows through the same faith and resilience that has carried her life.
              </p>
              <p className="text-[15px] opacity-80 border-l-2 border-[#C1694F]/30 pl-5">
                Having served faithfully alongside her husband in the Redeemed Christian Church of God (RCCG), 
                her life is a testament that one is a woman of God not merely by title, but by the fruits of Gospel work.
              </p>
            </div>

            {/* Core Values / Tags from the Pamphlet */}
            <div className="flex flex-wrap gap-3 mt-10">
              {['Spiritual Discipline', 'Empathy', 'Generosity', 'Vision'].map((item) => (
                <div key={item} className="px-4 py-2 bg-white/50 border border-[#C1694F]/20 rounded-lg shadow-sm">
                  <span className="font-['Nunito'] text-[12px] font-bold uppercase tracking-wider text-[#C1694F]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            
            <p className="mt-8 font-['Playfair_Display'] text-[18px] font-bold text-[#2C1810] italic">
              "A gift that would outlive the giver."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}