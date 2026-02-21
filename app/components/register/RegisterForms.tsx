'use client';
import { useState } from 'react';

const inputClass =
  "w-full px-4 py-3 rounded-xl border-[1.5px] border-[#C1694F]/20 bg-white font-['Nunito'] text-[15px] text-[#2C1810] outline-none transition-all duration-200 focus:border-[#C1694F] focus:shadow-[0_0_0_3px_rgba(193,105,79,0.08)] placeholder:text-[#6B7280]/60";

const labelClass =
  "block font-['Nunito'] font-bold text-[13px] text-[#2C1810] mb-2";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  );
}

function WidowForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert('Thank you! We will be in touch soon.');
      }}
      className="flex flex-col gap-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name *">
          <input required className={inputClass} placeholder="Your full name" />
        </Field>
        <Field label="Age *">
          <input required type="number" className={inputClass} placeholder="Your age" />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Phone Number *">
          <input required type="tel" className={inputClass} placeholder="+234 901 234 5678" />
        </Field>
        <Field label="State / Location *">
          <input required className={inputClass} placeholder="Your state or location" />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Number of Children *">
          <input required type="number" min="0" className={inputClass} placeholder="0" />
        </Field>
        <Field label="Skill of Interest *">
          <select required className={`${inputClass} cursor-pointer`}>
            <option value="">Select a skill</option>
            <option>Tailoring</option>
            <option>Catering &amp; Cooking</option>
            <option>Crafts &amp; Handicrafts</option>
            <option>Hairdressing</option>
            <option>Soap Making</option>
            <option>Digital Literacy</option>
            <option>Farming</option>
            <option>Other</option>
          </select>
        </Field>
      </div>

      <Field label="How did you hear about us? *">
        <input required className={inputClass} placeholder="e.g., Friend, Social Media, Community Leader..." />
      </Field>

      <Field label="Tell Us About Yourself (Optional)">
        <textarea
          className={`${inputClass} resize-y min-h-[110px]`}
          placeholder="Share your story, needs, or any additional information..."
        />
      </Field>

      <button
        type="submit"
        className="w-full mt-2 py-4 bg-[#C1694F] text-white font-['Nunito'] font-bold text-[16px] rounded-xl transition-all duration-300 hover:bg-[#A85540] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(193,105,79,0.35)]"
      >
        Submit Registration
      </button>
    </form>
  );
}

function FinancialForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert('Thank you for your generosity! We will contact you shortly.');
      }}
      className="flex flex-col gap-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name or Organisation *">
          <input required className={inputClass} placeholder="Your name or organisation" />
        </Field>
        <Field label="Email Address *">
          <input required type="email" className={inputClass} placeholder="your@email.com" />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Phone Number *">
          <input required type="tel" className={inputClass} placeholder="+234 901 234 5678" />
        </Field>
        <Field label="Contribution Type *">
          <select required className={`${inputClass} cursor-pointer`}>
            <option value="">Select type</option>
            <option>One-time donation</option>
            <option>Monthly contribution</option>
            <option>Corporate sponsorship</option>
          </select>
        </Field>
      </div>

      <Field label="Approximate Amount (Optional)">
        <input className={inputClass} placeholder="e.g., ₦100,000 or $500" />
      </Field>

      <Field label="Message / How you want to help (Optional)">
        <textarea
          className={`${inputClass} resize-y min-h-[110px]`}
          placeholder="Tell us about your motivations or specific programmes you'd like to support..."
        />
      </Field>

      <button
        type="submit"
        className="w-full mt-2 py-4 bg-[#C1694F] text-white font-['Nunito'] font-bold text-[16px] rounded-xl transition-all duration-300 hover:bg-[#A85540] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(193,105,79,0.35)]"
      >
        Become a Partner
      </button>
    </form>
  );
}

function TutorForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you! We'll be in touch about next steps.");
      }}
      className="flex flex-col gap-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name *">
          <input required className={inputClass} placeholder="Your full name" />
        </Field>
        <Field label="Email Address *">
          <input required type="email" className={inputClass} placeholder="your@email.com" />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Phone Number *">
          <input required type="tel" className={inputClass} placeholder="+234 901 234 5678" />
        </Field>
        <Field label="Years of Experience *">
          <input required type="number" min="0" className={inputClass} placeholder="e.g., 5" />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Skills You Can Teach *">
          <input required className={inputClass} placeholder="e.g., Tailoring, Sewing, Pattern Making" />
        </Field>
        <Field label="Location *">
          <input required className={inputClass} placeholder="Your state or location" />
        </Field>
      </div>

      <Field label="Available to Travel?">
        <select className={`${inputClass} cursor-pointer`}>
          <option value="">Select an option</option>
          <option>Yes, I can travel</option>
          <option>No, local only</option>
          <option>Online teaching preferred</option>
        </select>
      </Field>

      <Field label="Message (Optional)">
        <textarea
          className={`${inputClass} resize-y min-h-[110px]`}
          placeholder="Tell us about your expertise, teaching approach, and why you want to volunteer..."
        />
      </Field>

      <button
        type="submit"
        className="w-full mt-2 py-4 bg-[#C1694F] text-white font-['Nunito'] font-bold text-[16px] rounded-xl transition-all duration-300 hover:bg-[#A85540] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(193,105,79,0.35)]"
      >
        Join as a Tutor
      </button>
    </form>
  );
}

const tabs = [
  {
    id: 'widow',
    label: 'Register as a Widow',
    heading: 'Register as a Widow',
    sub: "Fill in the form below and we'll reach out to you as soon as possible.",
  },
  {
    id: 'financial',
    label: 'Financial Partner',
    heading: 'Become a Financial Partner',
    sub: 'Your contribution directly transforms the lives of widows and their families.',
  },
  {
    id: 'tutor',
    label: 'Skill Tutor',
    heading: 'Become a Skill Tutor',
    sub: 'Share your skills and expertise to help widows build sustainable livelihoods.',
  },
];

export default function RegisterForms() {
  const [activeTab, setActiveTab] = useState('widow');
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <>
      {/* Sticky Tabs */}
      <div className="sticky top-[68px] z-40 bg-[#F9E8E0] border-b border-[#C1694F]/15">
        <div className="max-w-[1200px] mx-auto px-6 flex overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-5 font-['Nunito'] font-bold text-[14px] whitespace-nowrap border-b-[3px] transition-all duration-200 flex-shrink-0 ${
                activeTab === tab.id
                  ? 'border-[#C1694F] text-[#C1694F]'
                  : 'border-transparent text-[#5C3D2E] hover:text-[#C1694F]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[760px] mx-auto px-6">

          {/* Form header */}
          <div className="mb-10">
            <h2 className="font-['Playfair_Display'] text-[clamp(26px,4vw,36px)] font-bold text-[#2C1810] mb-2">
              {active.heading}
            </h2>
            <p className="font-['Nunito'] text-[15px] text-[#6B7280]">{active.sub}</p>
            <div className="w-12 h-1 bg-[#C1694F] rounded-full mt-5" />
          </div>

          {/* Form card */}
          <div className="bg-[#FAF7F2] rounded-2xl p-8 border border-[#C1694F]/10 shadow-[0_4px_24px_rgba(193,105,79,0.06)]">
            {activeTab === 'widow' && <WidowForm />}
            {activeTab === 'financial' && <FinancialForm />}
            {activeTab === 'tutor' && <TutorForm />}
          </div>

          {/* Privacy note */}
          <p className="font-['Nunito'] text-[13px] text-[#6B7280] text-center mt-6 leading-relaxed">
            🔒 Your information is safe with us and will never be shared with third parties.
          </p>
        </div>
      </section>
    </>
  );
}