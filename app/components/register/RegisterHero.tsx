export default function RegisterHero() {
    return (
      <section className="py-20 bg-gradient-to-br from-[#C1694F] to-[#8B3A20] text-center relative overflow-hidden">
        <div className="absolute top-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute bottom-[-80px] right-[-40px] w-[400px] h-[400px] rounded-full bg-white/5 pointer-events-none" />
  
        <div className="relative z-10 max-w-[680px] mx-auto px-6">
          <p className="font-['Nunito'] text-[12px] font-bold tracking-[2px] uppercase text-white/60 mb-4">
            Get Started
          </p>
          <h1 className="font-['Playfair_Display'] text-[clamp(32px,5vw,52px)] font-bold text-white leading-tight mb-5">
            Join Our Community
          </h1>
          <p className="font-['Nunito'] text-[17px] text-white/88 leading-relaxed">
            Whether you seek support, want to contribute, or are ready to teach —
            we welcome you. Choose the form below that matches your role.
          </p>
        </div>
      </section>
    );
  }