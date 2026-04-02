import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/images/logo.webp";

export default function Navbar() {
  const [invertColor, setInvertColor] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const light = document.querySelector(".light-section");
      const nav = document.querySelector("header");
      if (!light || !nav) return;

      const rect = light.getBoundingClientRect();
      const navBottom = nav.getBoundingClientRect().bottom;

      // detect overlap
      const isOverLightSection = rect.top < navBottom && rect.bottom > 0;

      setInvertColor(isOverLightSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center bg-transparent pt-4 transition-colors duration-300">
      <div
        className="w-[92%] max-w-7xl h-14 px-6 flex items-center justify-between
                   rounded-[8px]
                   [background:#FFFFFF24]
                   [border:1px_solid_#FFFFFF]
                   shadow-[0_0_12px_0_#FFFFFFB8]
                   backdrop-blur-md"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Mark logo"
            className="w-[100px] object-contain select-none"
          />
        </div>

        {/* Desktop Navigation */}
        <ul
          className={`hidden lg:flex gap-8 text-sm font-inter font-medium transition-colors duration-300 ${
            invertColor ? "text-black" : "text-white/80"
          }`}
        >
          {["Product", "How it Works", "Results", "Pricing", "FAQs"].map(
            (item) => (
              <li key={item} className="hover:opacity-80 cursor-pointer">
                {item}
              </li>
            ),
          )}
        </ul>

        {/* CTA Button */}
        <button
          className="hidden lg:block px-6 py-2.5 text-sm font-inter font-medium text-white
                     rounded-[8px]
                     [background:linear-gradient(0deg,#446DFF_-1.15%,#00FFD8_194.69%)]
                     [border:1px_solid_#FFFFFF4D]
                     backdrop-blur-sm transition-all duration-300
                     hover:shadow-[0_0_16px_rgba(0,255,216,0.4)]"
        >
          Get Started
        </button>

        {/* Mobile Menu */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center w-9 h-9 text-white rounded-[6px] hover:bg-white/10 transition"
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>

          <button
            className="hidden sm:block px-5 py-2 text-sm font-inter font-medium text-white
                       rounded-[8px]
                       [background:linear-gradient(0deg,#446DFF_-1.15%,#00FFD8_194.69%)]
                       [border:1px_solid_#FFFFFF4D]
                       backdrop-blur-sm transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (unchanged) */}
      <div
        className={`absolute top-[68px] left-1/2 -translate-x-1/2 w-[92%] overflow-hidden transition-all duration-500 lg:hidden
        ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div
          className="mt-2 rounded-[8px]
                        [background:#0B0B0B]
                        [border:1px_solid_#FFFFFF4D]
                        backdrop-blur-md
                        shadow-[0_0_12px_rgba(255,255,255,0.3)]
                        flex flex-col items-center py-4 gap-4 text-white/90 font-medium text-sm"
        >
          {["Product", "How it Works", "Results", "Pricing", "FAQs"].map(
            (item) => (
              <button
                key={item}
                className="w-full text-center hover:text-white transition px-4"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </button>
            ),
          )}
          <button
            className="mt-2 px-5 py-2 text-sm font-inter font-medium text-white
                       rounded-[8px]
                       [background:linear-gradient(0deg,#446DFF_-1.15%,#00FFD8_194.69%)]
                       [border:1px_solid_#FFFFFF4D]
                       backdrop-blur-sm transition-all duration-300
                       hover:shadow-[0_0_16px_rgba(0,255,216,0.4)]"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
