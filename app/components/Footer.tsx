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
           <Link href="/" className="flex items-center gap-3 no-underline group">
             <div className="w-10 h-10 rounded-full bg-[#C1694F] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-lg">
               <span className="font-['Playfair_Display'] text-lg font-bold text-white leading-none">Z</span>
             </div>
             <div className="flex flex-col justify-center">
               <span className="block font-['Playfair_Display'] text-[19px] font-bold text-[#E8927A] leading-[1.1] tracking-tight">
                 Zion City
               </span>
               <span className="block font-['Nunito'] text-[10px] font-bold uppercase tracking-[0.05em] text-white/40 leading-tight mt-0.5">
                 Courtyard Widows Foundation
               </span>
             </div>
           </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-[240px] font-['Nunito'] mt-6">
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
                  <Link href={href} className="text-sm text-white/60 hover:text-[#E8927A] transition-colors duration-200 no-underline font-['Nunito']">
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
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-2.5 group">
                <MessageCircle size={16} className="text-[#E8927A] mt-0.5 flex-shrink-0" />
                <a 
                  href="https://wa.me/2349012345678" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-white/60 group-hover:text-[#E8927A] transition-colors duration-200 no-underline font-semibold font-['Nunito']"
                >
                  WhatsApp: +234 901 234 5678
                </a>
              </li>

              <li className="flex items-start gap-2.5 group">
                <Mail size={16} className="text-[#E8927A] mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:contact@zioncity.org" 
                  className="text-sm text-white/60 group-hover:text-[#E8927A] transition-colors duration-200 no-underline font-['Nunito']"
                >
                  contact@zioncity.org
                </a>
              </li>
              
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#E8927A] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/60 font-['Nunito']">Nigeria</span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-white/40 font-['Nunito']">
            © {new Date().getFullYear()} Zion City for Widows. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-[11px] text-white/40 italic tracking-wider font-['Nunito']">
              Non-Denominational · Non-Profit · NGO
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}