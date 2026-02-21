import Link from 'next/link';
import { Mail, MessageCircle, MapPin, Facebook } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/what-we-do', label: 'What We Do' },
    { href: '/learn', label: 'Learn' },
    { href: '/stories', label: 'Stories' },
    { href: '/blog', label: 'Blog' },
    { href: '/register', label: 'Register' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#1a0e0a] text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#C1694F] flex items-center justify-center flex-shrink-0">
                <span className="font-['Playfair_Display'] text-base font-bold text-white leading-none">Z</span>
              </div>
              <div className="leading-tight">
                <span className="block font-['Playfair_Display'] text-[18px] font-bold text-[#E8927A] tracking-tight">Zion City</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-[240px]">
              Empowering widows through skills training, community support, and economic opportunity — founded in love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Nunito'] text-[12px] font-bold text-white/40 uppercase tracking-[1.5px] mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/60 hover:text-[#E8927A] transition-colors duration-200 no-underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Nunito'] text-[12px] font-bold text-white/40 uppercase tracking-[1.5px] mb-4">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-[#E8927A] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@zioncityforwidows.org" className="text-sm text-white/60 hover:text-[#E8927A] transition-colors duration-200 no-underline">
                  info@zioncityforwidows.org
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle size={15} className="text-[#E8927A] mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-[#E8927A] transition-colors duration-200 no-underline font-semibold">
                  WhatsApp: +234 901 234 5678
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#E8927A] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/60">Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-['Nunito'] text-[12px] font-bold text-white/40 uppercase tracking-[1.5px] mb-4">
              Follow Us
            </h4>
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-white/60 hover:text-[#E8927A] transition-colors duration-200 no-underline group">
              <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-[#C1694F]/20 flex items-center justify-center transition-colors duration-200">
                <Facebook size={16} />
              </div>
              Facebook Page
            </a>
            <a href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-white/60 hover:text-[#25D366] transition-colors duration-200 no-underline group mt-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-[#25D366]/20 flex items-center justify-center transition-colors duration-200">
                <MessageCircle size={16} />
              </div>
              WhatsApp Community
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[13px] text-white/40">
            © 2026 Zion City for Widows. All rights reserved.
          </p>
          <p className="text-[13px] text-white/40 italic">
            Dedicated with love to Mummy on her 70th birthday 🌿
          </p>
        </div>

      </div>
    </footer>
  );
}