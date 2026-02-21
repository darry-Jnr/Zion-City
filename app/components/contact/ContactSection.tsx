'use client';
import { useState } from 'react';
import { Mail, MessageCircle, Facebook, MapPin, Send } from 'lucide-react';

const inputClass =
  "w-full px-4 py-3 rounded-xl border-[1.5px] border-[#C1694F]/20 bg-white font-['Nunito'] text-[15px] text-[#2C1810] outline-none transition-all duration-200 focus:border-[#C1694F] focus:shadow-[0_0_0_3px_rgba(193,105,79,0.08)] placeholder:text-[#6B7280]/60";

const labelClass =
  "block font-['Nunito'] font-bold text-[13px] text-[#2C1810] mb-2";

const contactItems = [
  {
    icon: <Mail size={20} className="text-[#C1694F]" />,
    title: 'Email Us',
    value: 'info@zioncityforwidows.org',
    href: 'mailto:info@zioncityforwidows.org',
  },
  {
    icon: <MessageCircle size={20} className="text-[#C1694F]" />,
    title: 'WhatsApp',
    value: '+234 901 234 5678',
    href: 'https://wa.me/234XXXXXXXXXX',
  },
  {
    icon: <Facebook size={20} className="text-[#C1694F]" />,
    title: 'Facebook',
    value: 'Zion City for Widows',
    href: '#',
  },
  {
    icon: <MapPin size={20} className="text-[#C1694F]" />,
    title: 'Location',
    value: 'Nigeria',
    href: null,
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-16 pb-24 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Contact Info */}
          <div>
            <p className="font-['Nunito'] text-[12px] font-bold tracking-[2px] uppercase text-[#C1694F] mb-4">
              Contact Info
            </p>
            <h2 className="font-['Playfair_Display'] text-[clamp(24px,3vw,34px)] font-bold text-[#2C1810] leading-tight mb-8">
              Reach Us Directly
            </h2>

            <div className="flex flex-col gap-4 mb-10">
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white px-5 py-4 rounded-2xl border border-[#C1694F]/10 shadow-[0_2px_12px_rgba(193,105,79,0.05)] hover:shadow-[0_4px_20px_rgba(193,105,79,0.1)] transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#F9E8E0] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-['Nunito'] font-bold text-[12px] text-[#6B7280] uppercase tracking-wider mb-0.5">
                      {item.title}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="font-['Nunito'] font-semibold text-[15px] text-[#2C1810] hover:text-[#C1694F] transition-colors duration-200 no-underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-['Nunito'] font-semibold text-[15px] text-[#2C1810]">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-['Nunito'] font-bold text-[15px] px-7 py-3.5 rounded-xl transition-all duration-300 hover:bg-[#1ebe5d] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.35)] no-underline"
            >
              <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.845L.057 23.57a.75.75 0 0 0 .906.919l5.857-1.533A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.694 9.694 0 0 1-4.944-1.354l-.355-.21-3.676.963.981-3.584-.232-.369A9.699 9.699 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Right — Contact Form */}
          <div>
            <div className="bg-white rounded-2xl p-8 border border-[#C1694F]/10 shadow-[0_4px_24px_rgba(193,105,79,0.06)]">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-[#F9E8E0] rounded-full flex items-center justify-center mx-auto mb-5">
                    <Send size={28} className="text-[#C1694F]" />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-[24px] font-bold text-[#2C1810] mb-3">
                    Message Received!
                  </h3>
                  <p className="font-['Nunito'] text-[15px] text-[#6B7280] leading-relaxed">
                    Thank you for reaching out. We&apos;ll get back to you as
                    soon as possible.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-['Playfair_Display'] text-[24px] font-bold text-[#2C1810] mb-1">
                    Send a Message
                  </h3>
                  <p className="font-['Nunito'] text-[14px] text-[#6B7280] mb-7">
                    We typically respond within 24 hours.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <input required className={inputClass} placeholder="Your name" />
                      </div>
                      <div>
                        <label className={labelClass}>Email Address *</label>
                        <input required type="email" className={inputClass} placeholder="your@email.com" />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Subject *</label>
                      <select required className={`${inputClass} cursor-pointer`}>
                        <option value="">Select a subject</option>
                        <option>General Enquiry</option>
                        <option>Partnership Opportunity</option>
                        <option>Widow Support</option>
                        <option>Volunteering</option>
                        <option>Media &amp; Press</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>Message *</label>
                      <textarea
                        required
                        className={`${inputClass} resize-y min-h-[130px]`}
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#C1694F] text-white font-['Nunito'] font-bold text-[16px] rounded-xl transition-all duration-300 hover:bg-[#A85540] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(193,105,79,0.35)] flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>

                  <div className="flex items-center justify-center gap-2 mt-5">
                    <MapPin size={13} className="text-[#6B7280]" />
                    <p className="font-['Nunito'] text-[12px] text-[#6B7280]">
                      Your information is safe and will never be shared.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}