import { Scissors, UtensilsCrossed, Sparkles, Flower2, FlaskConical, Monitor, Leaf } from 'lucide-react';

const skills = [
  {
    icon: <Scissors size={28} className="text-[#C1694F]" />,
    title: 'Tailoring & Sewing',
    desc: 'From basic stitching to pattern cutting and garment construction. Widows learn to make and sell clothing for their communities.',
  },
  {
    icon: <UtensilsCrossed size={28} className="text-[#C1694F]" />,
    title: 'Catering & Cooking',
    desc: 'Food preparation, preservation, and small-scale catering business skills — turning passion for cooking into a sustainable income.',
  },
  {
    icon: <Sparkles size={28} className="text-[#C1694F]" />,
    title: 'Crafts & Handicrafts',
    desc: 'Beadwork, weaving, and handmade goods creation. Skills that produce sellable products with low startup costs.',
  },
  {
    icon: <Flower2 size={28} className="text-[#C1694F]" />,
    title: 'Hairdressing',
    desc: 'Hair braiding, styling, and salon skills that allow widows to set up their own service-based businesses close to home.',
  },
  {
    icon: <FlaskConical size={28} className="text-[#C1694F]" />,
    title: 'Soap Making',
    desc: 'Production of soaps and hygiene products using affordable local ingredients — a high-demand product in every community.',
  },
  {
    icon: <Monitor size={28} className="text-[#C1694F]" />,
    title: 'Digital Literacy',
    desc: 'Basic computer skills, mobile money, and digital tools to help widows navigate and participate in the modern economy.',
  },
  {
    icon: <Leaf size={28} className="text-[#C1694F]" />,
    title: 'Farming & Agriculture',
    desc: 'Small-scale farming techniques, crop cultivation, and produce processing to support food security and income generation.',
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20 bg-[#F9E8E0]">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="text-center mb-14">
          <p className="font-['Nunito'] text-[12px] font-bold tracking-[2px] uppercase text-[#C1694F] mb-3">
            Skills Training
          </p>
          <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] font-bold text-[#2C1810] leading-tight mb-4">
            Skills We Teach
          </h2>
          <p className="font-['Nunito'] text-[16px] text-[#5C3D2E] max-w-[520px] mx-auto leading-relaxed">
            Every skill is chosen for its income potential, low startup cost,
            and relevance to the communities our widows live in.
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

          {/* More skills coming card */}
          <div className="bg-[#C1694F] rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <h3 className="font-['Playfair_Display'] text-[19px] font-bold text-white mb-3">
                More Skills Coming
              </h3>
              <div className="w-8 h-0.5 bg-white/40 mb-4" />
              <p className="font-['Nunito'] text-[14px] text-white/85 leading-relaxed">
                Our programme is always growing. New skills are added based on
                community needs and partner expertise.
              </p>
            </div>
            <p className="font-['Nunito'] text-[13px] text-white/60 mt-6 italic">
              Want to teach a skill? Register as a tutor →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}