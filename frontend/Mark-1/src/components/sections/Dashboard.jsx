import { useState } from "react";
import hero1 from "../../assets/images/hero-dashboard-1.webp";
import hero2 from "../../assets/images/hero-dashboard-2.webp";
import hero3 from "../../assets/images/hero-dashboard-3.webp";
import hero4 from "../../assets/images/hero-dashboard-4.webp";
import circleBg from "../../assets/images/dashboard-circle.png";
import {
  Squares2X2Icon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

export default function DashboardSection() {
  const [activeTab, setActiveTab] = useState(0);

  const dashboards = [hero1, hero2, hero3, hero4];
  const icons = [
    { icon: Squares2X2Icon, label: "Overview" },
    { icon: WrenchScrewdriverIcon, label: "Tools" },
    { icon: ChartBarIcon, label: "Analytics" },
    { icon: CalendarDaysIcon, label: "Schedule" },
  ];

  return (
    <section className="relative bg-[#121212] text-white flex flex-col items-center justify-center pb-20 sm:pb-28 md:pb-32 pt-10 sm:pt-16 md:pt-20 overflow-hidden">
      {/* Glowing background */}
      <img
        src={circleBg}
        alt="Decorative glow"
        className="absolute left-1/2 top-1/2 
                   -translate-x-1/2 -translate-y-1/2
                   w-[800px] sm:w-[1000px] md:w-[1200px]
                   object-contain opacity-100 brightness-125
                   mix-blend-screen z-0 pointer-events-none select-none"
      />

      {/* Frame */}
      <div
        className="light-section relative rounded-[10px] sm:rounded-[12px] md:rounded-[16px]
                   bg-black border border-[#e5e7eb3d]
                   shadow-[0_0_20px_rgba(255,255,255,0.15)]
                   p-[10px] sm:p-[16px] md:p-[23px]
                   flex items-center justify-center z-10"
      >
        {/* Dashboard Image */}
        <img
          src={dashboards[activeTab]}
          alt="Dashboard preview"
          className="w-[90vw] sm:w-[600px] md:w-[800px] lg:w-[900px] 
                     rounded-[8px] transition-all duration-500 ease-in-out"
        />

        {/* Tabs controller */}
        <div
          className="absolute left-1/2 translate-x-[-50%]
                     -bottom-[24px] sm:-bottom-[28px] md:-bottom-[32px]
                     flex items-center justify-center
                     bg-white/20 backdrop-blur-[8px] sm:backdrop-blur-[10px]
                     border border-white/30
                     rounded-[10px] sm:rounded-[12px]
                     p-[6px] sm:p-[8px] md:p-[10px]
                     gap-[10px] sm:gap-[14px] md:gap-[16px]
                     z-[20]"
        >
          {icons.map((item, i) => {
            const Icon = item.icon;
            const isActive = activeTab === i;

            return (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center justify-center transition-all duration-300 
                            rounded-[6px] sm:rounded-[8px]
                            h-[36px] sm:h-[40px] md:h-[44px]
                            ${
                              isActive
                                ? "w-[80px] sm:w-[90px] md:w-[100px] bg-[#FFFFFF33] border border-white/30 shadow-[0_0_4px_0_#FFFFFF]"
                                : "w-[36px] sm:w-[40px] md:w-[44px] border border-transparent hover:border-white/20"
                            }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
