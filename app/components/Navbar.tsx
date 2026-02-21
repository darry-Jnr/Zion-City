'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileCommunityOpen, setMobileCommunityOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/what-we-do', label: 'What We Do' },
    { href: '/learn', label: 'Learn' },
    { href: '/contact', label: 'Contact' },
  ];

  const communityLinks = [
    { href: '/stories', label: 'Stories', desc: 'Widow testimonies & journeys' },
    { href: '/blog', label: 'Blog', desc: 'News, updates & events' },
  ];

  const isCommunityActive = pathname === '/stories' || pathname === '/blog';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[#C1694F]/10 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/98 shadow-[0_2px_20px_rgba(44,24,16,0.08)]'
          : 'bg-[#FAF7F2]/95'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[68px]">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-9 h-9 rounded-full bg-[#C1694F] flex items-center justify-center flex-shrink-0">
            <span className="font-['Playfair_Display'] text-base font-bold text-white leading-none">Z</span>
          </div>
          <div className="leading-tight">
            <span className="block font-['Playfair_Display'] text-[18px] font-bold text-[#C1694F] tracking-tight">Zion City</span>
            
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-['Nunito'] text-[15px] font-semibold pb-0.5 border-b-2 transition-all duration-200 no-underline whitespace-nowrap ${
                pathname === link.href
                  ? 'text-[#C1694F] border-[#C1694F]'
                  : 'text-[#2C1810] border-transparent hover:text-[#C1694F]'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Community Hover Dropdown */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 font-['Nunito'] text-[15px] font-semibold pb-0.5 border-b-2 transition-all duration-200 whitespace-nowrap bg-transparent border-x-0 border-t-0 cursor-pointer ${
                isCommunityActive
                  ? 'text-[#C1694F] border-[#C1694F]'
                  : 'text-[#2C1810] border-transparent group-hover:text-[#C1694F] group-hover:border-[#C1694F]'
              }`}
            >
              Community
              <ChevronDown
                size={15}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </button>

            {/* Invisible bridge — fills the gap so hover doesn't break */}
            <div className="absolute top-full left-0 right-0 h-4 bg-transparent" />

            {/* Dropdown panel */}
            <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[220px] bg-white rounded-2xl shadow-[0_8px_40px_rgba(44,24,16,0.12)] border border-[#C1694F]/10 overflow-hidden
              opacity-0 -translate-y-1 pointer-events-none
              group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
              transition-all duration-200 ease-out">

              {/* Arrow tip */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-[#C1694F]/10 rotate-45" />

              <div className="p-2">
                {communityLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex flex-col px-4 py-3 rounded-xl no-underline transition-all duration-150 group/item ${
                      pathname === link.href ? 'bg-[#F9E8E0]' : 'hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <span className={`font-['Nunito'] font-bold text-[14px] transition-colors duration-150 ${
                      pathname === link.href ? 'text-[#C1694F]' : 'text-[#2C1810] group-hover/item:text-[#C1694F]'
                    }`}>
                      {link.label}
                    </span>
                    <span className="font-['Nunito'] text-[12px] text-[#6B7280] mt-0.5">
                      {link.desc}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Register CTA */}
          <Link
            href="/register"
            className="font-['Nunito'] text-[14px] font-bold text-white bg-[#C1694F] px-5 py-2 rounded-full whitespace-nowrap transition-all duration-200 hover:bg-[#A85540] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(193,105,79,0.35)]"
          >
            Register
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 bg-transparent border-none cursor-pointer gap-[5px]"
        >
          <span className={`block w-6 h-0.5 bg-[#2C1810] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#2C1810] rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-0.5 bg-[#2C1810] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-[#FAF7F2] border-t border-[#C1694F]/10 overflow-hidden transition-all duration-300 ease-in-out ${
        menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-6 pt-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3.5 font-['Nunito'] text-base font-semibold border-b border-[#C1694F]/10 transition-colors duration-200 no-underline ${
                pathname === link.href ? 'text-[#C1694F]' : 'text-[#2C1810] hover:text-[#C1694F]'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Community — tap to expand */}
          <div className="border-b border-[#C1694F]/10">
            <button
              onClick={() => setMobileCommunityOpen(!mobileCommunityOpen)}
              className={`w-full flex items-center justify-between py-3.5 font-['Nunito'] text-base font-semibold bg-transparent border-none cursor-pointer ${
                isCommunityActive ? 'text-[#C1694F]' : 'text-[#2C1810]'
              }`}
            >
              Community
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileCommunityOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileCommunityOpen ? 'max-h-[200px] mb-2' : 'max-h-0'}`}>
              {communityLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-2.5 py-2.5 pl-4 font-['Nunito'] text-[15px] font-semibold no-underline transition-colors duration-200 ${
                    pathname === link.href ? 'text-[#C1694F]' : 'text-[#5C3D2E] hover:text-[#C1694F]'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C1694F]/40 flex-shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/register"
            onClick={() => setMenuOpen(false)}
            className="block mt-5 text-center bg-[#C1694F] text-white py-3.5 rounded-full font-['Nunito'] text-[15px] font-bold no-underline hover:bg-[#A85540] transition-colors duration-200"
          >
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
}