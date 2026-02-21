import { ClipboardList, GraduationCap, BadgeDollarSign } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <ClipboardList size={28} className="text-white" />,
    title: 'Register',
    desc: 'Fill out a simple registration form online or through a community referral. Tell us your location, your needs, and the skill you\'re interested in learning.',
    detail: 'Takes less than 5 minutes',
  },
  {
    number: '02',
    icon: <GraduationCap size={28} className="text-white" />,
    title: 'Learn',
    desc: 'Join a skills training cohort led by experienced tutors in your area or online. Learn at your own pace with hands-on, practical sessions tailored for beginners.',
    detail: 'Typical programme: 8–12 weeks',
  },
  {
    number: '03',
    icon: <BadgeDollarSign size={28} className="text-white" />,
    title: 'Earn',
    desc: 'Graduate with a new skill, a starter kit, and the support of our community. Begin offering your services or products and build a sustainable income for your family.',
    detail: 'Ongoing community support',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="text-center mb-16">
          <p className="font-['Nunito'] text-[12px] font-bold tracking-[2px] uppercase text-[#C1694F] mb-3">
            The Process
          </p>
          <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] font-bold text-[#2C1810] leading-tight mb-4">
            How It Works
          </h2>
          <p className="font-['Nunito'] text-[16px] text-[#5C3D2E] max-w-[480px] mx-auto leading-relaxed">
            Three simple steps from where you are now to a life of
            independence and purpose.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-0.5 bg-gradient-to-r from-[#C1694F] via-[#E8927A] to-[#C1694F] z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">

              {/* Icon circle */}
              <div className="w-[72px] h-[72px] rounded-full bg-[#C1694F] flex items-center justify-center mb-6 shadow-[0_8px_24px_rgba(193,105,79,0.35)] flex-shrink-0">
                {step.icon}
              </div>

              {/* Card */}
              <div className="bg-[#FAF7F2] rounded-2xl p-7 w-full border border-[#C1694F]/10 hover:shadow-[0_8px_32px_rgba(193,105,79,0.1)] transition-all duration-300">
                <div className="font-['Playfair_Display'] text-[40px] font-bold text-[#C1694F]/15 leading-none mb-2">
                  {step.number}
                </div>
                <h3 className="font-['Playfair_Display'] text-[22px] font-bold text-[#2C1810] mb-3">
                  {step.title}
                </h3>
                <div className="w-8 h-0.5 bg-[#C1694F]/40 mx-auto mb-4" />
                <p className="font-['Nunito'] text-[14px] text-[#5C3D2E] leading-relaxed mb-5">
                  {step.desc}
                </p>
                <span className="inline-block bg-[#C1694F]/10 text-[#C1694F] font-['Nunito'] font-bold text-[12px] px-3 py-1.5 rounded-full">
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}