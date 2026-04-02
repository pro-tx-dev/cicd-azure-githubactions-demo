import logo1 from "../../assets/images/slider-logo-1.webp";
import logo2 from "../../assets/images/slider-logo-2.webp";
import logo3 from "../../assets/images/slider-logo-3.webp";
import logo4 from "../../assets/images/slider-logo-4.webp";
import logo5 from "../../assets/images/slider-logo-5.webp";

export default function TrustedSection() {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <section className="w-full bg-[#0B0B0B] py-10 overflow-hidden">
      {/* Outer container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10 relative px-4">
        {/* Heading */}
        <h3 className="font-inter text-center md:text-left text-lg sm:text-xl md:text-[23px] text-[#BFBFBF] whitespace-nowrap md:pl-4">
          Trusted by <span className="font-semibold text-white">Top Names</span>
        </h3>

        {/* Logos slider container */}
        <div className="relative w-full md:flex-1 overflow-hidden">
          {/* fading gradients */}
          <div className="absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10" />

          {/* Logos row */}
          <div className="flex items-center gap-10 sm:gap-12 md:gap-16 animate-slide whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-6 sm:h-8 md:h-10 w-auto object-contain inline-block select-none opacity-80"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
