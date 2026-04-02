'use client';
import { useState } from 'react';
import { Info, Upload, UserCheck } from 'lucide-react';

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
    <div className="flex flex-col gap-6">
      {/* Notice Banner */}
      <div className="bg-[#C1694F]/10 border border-[#C1694F]/20 rounded-xl p-4 flex gap-4 items-start">
        <UserCheck className="text-[#C1694F] shrink-0" size={20} />
        <p className="font-['Nunito'] text-[13px] text-[#2C1810] leading-relaxed">
          <strong>Important:</strong> After submitting this form, eligible candidates will be invited for a <strong>personal live check-in and physical interview</strong> at our offices before final admission.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Registration received! Please prepare for the physical interview process.');
        }}
        className="flex flex-col gap-5"
      >
        {/* Personal Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Full Name *">
            <input required className={inputClass} placeholder="Your full name" />
          </Field>
          <Field label="Denomination / Religion *">
            <input required className={inputClass} placeholder="e.g. Christian (Catholic), etc." />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Phone Number *">
            <input required type="tel" className={inputClass} placeholder="+234 901 234 5678" />
          </Field>
          <Field label="Profile Picture *">
            <input required type="file" accept="image/*" className={`${inputClass} pt-2`} />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Do you wish to reside in Zion City? *">
            <select required className={`${inputClass} cursor-pointer`}>
              <option value="">Select option</option>
              <option value="yes">Yes, I need accommodation</option>
              <option value="no">No, I will commute</option>
            </select>
          </Field>
          <Field label="Skill of Interest *">
            <select required className={`${inputClass} cursor-pointer`}>
              <option value="">Select a skill</option>
              <option>Fashion Design</option>
              <option>Catering & Baking</option>
              <option>Hairdressing</option>
              <option>Entrepreneurship</option>
              <option>Other</option>
            </select>
          </Field>
        </div>

        <hr className="border-[#C1694F]/10 my-2" />
        
        {/* Guarantor Section */}
        <p className="font-['Playfair_Display'] font-bold text-[16px] text-[#2C1810]">Guarantor Details</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Guarantor Full Name *">
            <input required className={inputClass} placeholder="Name of person vouching for you" />
          </Field>
          <Field label="Guarantor ID/Letter Upload *">
            <input required type="file" className={`${inputClass} pt-2`} />
          </Field>
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-4 bg-[#C1694F] text-white font-['Nunito'] font-bold text-[16px] rounded-xl transition-all duration-300 hover:bg-[#A85540] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(193,105,79,0.35)]"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
}

// FinancialForm and TutorForm remain the same as your original snippet...
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
            placeholder="Tell us about your motivations..."
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
  
        <Field label="Skills You Can Teach *">
          <input required className={inputClass} placeholder="e.g., Fashion Design, Baking, Business" />
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
  { id: 'widow', label: 'Register as a Widow', heading: 'Academy Registration', sub: "Apply to join Zion City for Widows and start your journey to independence." },
  { id: 'financial', label: 'Financial Partner', heading: 'Become a Partner', sub: 'Your contribution transforms lives.' },
  { id: 'tutor', label: 'Skill Tutor', heading: 'Become a Skill Tutor', sub: 'Share your expertise with our community.' },
];

export default function RegisterForms() {
  const [activeTab, setActiveTab] = useState('widow');
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <>
      <div className="sticky top-0 z-40 bg-[#F9E8E0] border-b border-[#C1694F]/15">
        <div className="max-w-[1200px] mx-auto px-6 flex overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-5 font-['Nunito'] font-bold text-[14px] whitespace-nowrap border-b-[3px] transition-all duration-200 ${
                activeTab === tab.id ? 'border-[#C1694F] text-[#C1694F]' : 'border-transparent text-[#5C3D2E]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-[760px] mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="font-['Playfair_Display'] text-[32px] font-bold text-[#2C1810] mb-2">{active.heading}</h2>
            <p className="font-['Nunito'] text-[15px] text-[#6B7280]">{active.sub}</p>
          </div>

          <div className="bg-[#FAF7F2] rounded-2xl p-8 border border-[#C1694F]/10">
            {activeTab === 'widow' && <WidowForm />}
            {activeTab === 'financial' && <FinancialForm />}
            {activeTab === 'tutor' && <TutorForm />}
          </div>
        </div>
      </section>
    </>
  );
}