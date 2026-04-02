import { Check } from 'lucide-react';

export default function MissionVision() {
  const objectives = [
    "Establish and operate temporary home shelters for widows in need.",
    "Provide care, counselling, and spiritual support to widows.",
    "Offer vocational training and economic empowerment programmes.",
    "Provide material assistance including food and basic welfare.",
    "Prepare widows for independent living and reintegration.",
    "Promote the welfare, dignity, and rights of widows in society.",
    "Collaborate with donors to fulfil the Foundation’s mission."
  ];

  return (
    <section className="py-16 bg-[#F9E8E0]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <p className="font-['Nunito'] text-[11px] font-bold tracking-[3px] uppercase text-[#C1694F] mb-3">
            02 ABOUT THE PROJECT
          </p>
          <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] font-bold text-[#2C1810] leading-tight">
            Our Purpose & Path
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Vision */}
          <div className="relative overflow-hidden bg-[#2C1810] rounded-3xl p-8 lg:p-10 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -bottom-4 -right-2 font-['Playfair_Display'] text-[110px] font-bold leading-none select-none pointer-events-none text-white/5" aria-hidden>
              01
            </div>
            <span className="font-['Nunito'] text-[10px] font-bold tracking-[2px] uppercase text-white/30 mb-8">VISION</span>
            <div className="relative z-10">
              <h3 className="font-['Playfair_Display'] text-[24px] font-bold text-[#E8927A] leading-tight mb-3">
                Our Vision
              </h3>
              <div className="w-8 h-[2px] rounded-full bg-white/15 mb-4" />
              <p className="font-['Nunito'] text-[14px] text-white/80 leading-relaxed max-w-[400px]">
                To restore hope, dignity, and independence to widows through shelter, 
                care, spiritual support, and empowerment.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="relative overflow-hidden bg-[#C1694F] rounded-3xl p-8 lg:p-10 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -bottom-4 -right-2 font-['Playfair_Display'] text-[110px] font-bold leading-none select-none pointer-events-none text-white/10" aria-hidden>
              02
            </div>
            <span className="font-['Nunito'] text-[10px] font-bold tracking-[2px] uppercase text-white/50 mb-8">MISSION</span>
            <div className="relative z-10">
              <h3 className="font-['Playfair_Display'] text-[24px] font-bold text-white leading-tight mb-3">
                Our Mission
              </h3>
              <div className="w-8 h-[2px] rounded-full bg-white/30 mb-4" />
              <p className="font-['Nunito'] text-[14px] text-white/90 leading-relaxed max-w-[400px]">
                To provide safe temporary shelter while equipping widows with 
                spiritual and vocational skills for successful reintegration.
              </p>
            </div>
          </div>

          {/* Aims & Objectives - Optimized for Mobile */}
          <div className="md:col-span-2 bg-white/50 backdrop-blur-sm border border-[#C1694F]/10 rounded-3xl p-6 md:p-10">
             <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <h3 className="font-['Playfair_Display'] text-[24px] font-bold text-[#2C1810]">
                  Aims & Objectives
                </h3>
                <div className="h-[1px] flex-1 bg-[#C1694F]/10 hidden md:block ml-6" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
                {objectives.map((aim, index) => (
                  <div key={index} className="flex gap-3 items-start py-2 border-b border-[#C1694F]/5 md:border-none">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#C1694F]/10 flex items-center justify-center">
                      <Check size={12} className="text-[#C1694F]" strokeWidth={3} />
                    </div>
                    <p className="font-['Nunito'] text-[13.5px] text-[#2C1810]/80 leading-snug">
                      {aim}
                    </p>
                  </div>
                ))}
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}