import { CalendarDays } from 'lucide-react';

const phases = [
  {
    week: 'Week 1–2',
    title: 'Orientation & Assessment',
    desc: 'Meet your cohort, get assessed for your chosen skill level, and receive your training materials and starter resources.',
  },
  {
    week: 'Week 3–6',
    title: 'Core Skills Training',
    desc: 'Hands-on training sessions with your assigned tutor — building foundational skills through guided practice and feedback.',
  },
  {
    week: 'Week 7–10',
    title: 'Advanced Practice',
    desc: 'Apply your skills to real projects. Begin producing goods or offering services under tutor supervision with community support.',
  },
  {
    week: 'Week 11–12',
    title: 'Graduation & Launch',
    desc: 'Receive your certificate of completion, a starter kit, and an introduction to the Zion City support network. Your journey begins.',
  },
];

export default function ProgrammeTimeline() {
  return (
    <section className="py-20 bg-[#F9E8E0]">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <p className="font-['Nunito'] text-[12px] font-bold tracking-[2px] uppercase text-[#C1694F] mb-3">
              Programme Structure
            </p>
            <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] font-bold text-[#2C1810] leading-tight mb-5">
              What to Expect <br />
              <em className="text-[#C1694F]">Week by Week</em>
            </h2>
            <p className="font-['Nunito'] text-[16px] text-[#5C3D2E] leading-relaxed mb-6">
              Our programme runs over 12 weeks and is designed to take a
              complete beginner to a confident, income-earning skilled woman.
              Every phase builds on the last.
            </p>
            <div className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl border border-[#C1694F]/10 w-fit">
              <CalendarDays size={20} className="text-[#C1694F]" />
              <p className="font-['Nunito'] font-bold text-[14px] text-[#2C1810]">
                Duration: 8 – 12 weeks per cohort
              </p>
            </div>
          </div>

          {/* Right — Timeline */}
          <div className="flex flex-col gap-0">
            {phases.map((phase, i) => (
              <div key={i} className="flex gap-5 relative">

                {/* Line + dot */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#C1694F] flex-shrink-0 mt-1 shadow-[0_0_0_4px_rgba(193,105,79,0.15)]" />
                  {i < phases.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[#C1694F]/20 my-1" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-8 ${i === phases.length - 1 ? 'pb-0' : ''}`}>
                  <span className="inline-block font-['Nunito'] font-bold text-[11px] text-[#C1694F] bg-[#C1694F]/10 px-3 py-1 rounded-full mb-2 uppercase tracking-wider">
                    {phase.week}
                  </span>
                  <h4 className="font-['Playfair_Display'] text-[18px] font-bold text-[#2C1810] mb-2">
                    {phase.title}
                  </h4>
                  <p className="font-['Nunito'] text-[14px] text-[#5C3D2E] leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}