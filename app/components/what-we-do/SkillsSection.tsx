import { Scissors, UtensilsCrossed, Sparkles, Flower2, Cookie, Landmark, GraduationCap } from 'lucide-react';

const skills = [
  {
    icon: <Scissors size={28} className="text-[#C1694F]" />,
    title: 'Fashion Design',
    desc: 'Professional garment construction and tailoring. Widows learn to design and produce high-quality clothing for sustainable income.',
  },
  {
    icon: <UtensilsCrossed size={28} className="text-[#C1694F]" />,
    title: 'Professional Cooking',
    desc: 'Advanced culinary techniques and food preparation, focusing on skills that meet the high demand of local markets and catering needs.',
  },
  {
    icon: <Cookie size={28} className="text-[#C1694F]" />,
    title: 'Baking',
    desc: 'Pastry making and confectionery arts. A specialized skill set designed to help widows start small-scale bakery businesses.',
  },
  {
    icon: <Flower2 size={28} className="text-[#C1694F]" />,
    title: 'Hairdressing',
    desc: 'Modern hair styling and salon management. This training allows widows to provide in-demand beauty services within their communities.',
  },
  {
    icon: <Landmark size={28} className="text-[#C1694F]" />,
    title: 'Entrepreneurship',
    desc: 'Essential business management training, teaching widows how to manage funds, market their services, and sustain their new ventures.',
  },
  {
    icon: <GraduationCap size={28} className="text-[#C1694F]" />,
    title: 'Spiritual & Emotional Support',
    desc: 'Integral to our Academy, providing the spiritual guidance and emotional healing needed to rebuild life with restored dignity.',
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20 bg-[#F9E8E0]">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="text-center mb-14">
          <p className="font-['Nunito'] text-[12px] font-bold tracking-[2px] uppercase text-[#C1694F] mb-3">
            The Academy
          </p>
          <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] font-bold text-[#2C1810] leading-tight mb-4">
            Vocational Empowerment
          </h2>
          <p className="font-['Nunito'] text-[16px] text-[#5C3D2E] max-w-[650px] mx-auto leading-relaxed">
            Registered widows enroll in our Academy to master high-demand skills. 
            Upon graduation, we don't just provide knowledge—we fund their startup 
            to ensure a journey toward total independence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-[#C1694F]/10 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(193,105,79,0.12)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F9E8E0] flex items-center justify-center mb-5 group-hover:bg-[#C1694F]/10 transition-colors duration-300">
                {skill.icon}
              </div>
              <h3 className="font-['Playfair_Display'] text-[19px] font-bold text-[#2C1810] mb-3">
                {skill.title}
              </h3>
              <div className="w-8 h-0.5 bg-[#C1694F]/40 mb-4" />
              <p className="font-['Nunito'] text-[14px] text-[#5C3D2E] leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}

          {/* Funding/Call to Action card */}
          <div className="bg-[#2C1810] rounded-2xl p-7 flex flex-col justify-between lg:col-span-3 mt-4 md:flex-row md:items-center">
            <div className="md:max-w-[70%]">
              <h3 className="font-['Playfair_Display'] text-[22px] font-bold text-[#E8927A] mb-2">
                From Training to Business Ownership
              </h3>
              <p className="font-['Nunito'] text-[14px] text-white/70 leading-relaxed">
                Every successful graduate is provided with the necessary funding to set up her 
                own business, ensuring the transition from student to entrepreneur is fully supported.
              </p>
            </div>
            <button className="mt-6 md:mt-0 px-8 py-3 bg-[#C1694F] text-white font-['Nunito'] text-[13px] font-bold rounded-full hover:bg-[#a85840] transition-colors">
              Register as a Widow
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}