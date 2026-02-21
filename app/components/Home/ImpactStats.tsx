'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { number: 150, suffix: '+', label: 'Widows Supported' },
  { number: 4,   suffix: '+', label: 'Skills Taught' },
  { number: 40,  suffix: '+', label: 'Partners' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function ImpactStats() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section ref={sectionRef} className="py-20 bg-[#2C1810]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-['Nunito'] text-[11px] font-bold tracking-[3px] uppercase text-[#E8927A] mb-3">
            Our Impact
          </p>
          <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] font-bold text-white leading-tight">
            Real Lives. Real Change.
          </h2>
        </motion.div>

        {/* Stats — 3 col on all screens */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 group
                ${i === 1
                  ? 'bg-[#C1694F] hover:shadow-[0_16px_48px_rgba(193,105,79,0.4)]'
                  : 'bg-white/8 border border-white/10 hover:bg-white/12'
                }`}
            >
              <div className={`font-['Playfair_Display'] text-[36px] sm:text-[64px] font-bold leading-none mb-2
                ${i === 1 ? 'text-white' : 'text-[#E8927A]'}`}
              >
                <CountUp target={s.number} suffix={s.suffix} />
              </div>
              <div className={`w-6 h-[2px] rounded-full mb-3
                ${i === 1 ? 'bg-white/40' : 'bg-[#C1694F]/50'}`}
              />
              <p className={`font-['Nunito'] font-bold text-[12px] sm:text-[16px] leading-snug
                ${i === 1 ? 'text-white' : 'text-white/70'}`}
              >
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}