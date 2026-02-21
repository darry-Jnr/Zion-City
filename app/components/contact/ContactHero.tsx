export default function ContactHero() {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[600px]">
            <p className="font-['Nunito'] text-[12px] font-bold tracking-[2px] uppercase text-[#C1694F] mb-4">
              Get In Touch
            </p>
            <h1 className="font-['Playfair_Display'] text-[clamp(32px,5vw,56px)] font-bold text-[#2C1810] leading-tight mb-5">
              We&apos;d Love to <br />
              <em className="text-[#C1694F]">Hear From You</em>
            </h1>
            <p className="font-['Nunito'] text-[17px] text-[#5C3D2E] leading-relaxed">
              Whether you have a question, want to get involved, or simply want
              to say hello — our team is here and happy to help.
            </p>
          </div>
        </div>
      </section>
    );
  }