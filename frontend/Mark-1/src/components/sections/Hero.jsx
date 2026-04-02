import heroTopLeft from "../../assets/images/hero-top-left.png";
import {
  PlayIcon,
  CreditCardIcon,
  XCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative font-inter bg-[#121212] text-white min-h-screen flex flex-col items-center justify-start text-center overflow-hidden">
      {/* Top‑left decorative image */}
      <img
        src={heroTopLeft}
        alt="Decoration"
        className="absolute top-0 left-0 w-[900px] h-auto opacity-80 pointer-events-none select-none"
      />

      <div className="mx-auto z-10 px-6 pt-[120px] pb-[40px] sm:pt-[180px] sm:pb-[60px]">
        {/* Heading */}
        <h1
          className="font-atkinson font-bold
                     text-[38px] sm:text-[54px] md:text-[72px] lg:text-[82px]
                     leading-tight text-white capitalize mb-8"
        >
          Marketing That Plan Itself. <br /> You Just Approve.
        </h1>

        <p className="font-inter text-[16px] sm:text-[18px] text-[#E0E0E0] max-w-2xl mx-auto mb-8">
          Mark turns your brand data and competitors into a monthly plan, drafts
          the content, predicts performance, and schedules it—all with
          guardrails.
        </p>

        {/* Feature badges (responsive) */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center sm:items-start gap-6 sm:gap-8 mb-10 py-4">
          {/* Card 1 */}
          <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
            <div className="flex items-center justify-center w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-[8px] bg-[#99FF991A] border border-[#71D77180]">
              <CreditCardIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#71D771]" />
            </div>
            <span className="text-[14px] sm:text-[16px] text-[#E0E0E0] text-center">
              No Credit Card Needed
            </span>
          </div>

          {/* Divider (hidden on mobile) */}
          <div className="hidden sm:block h-[30px] w-[1px] bg-[#6B6B6B]" />

          {/* Card 2 */}
          <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
            <div className="flex items-center justify-center w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-[8px] bg-[#FF00001A] border border-[#FF000080]">
              <XCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF0000]" />
            </div>
            <span className="text-[14px] sm:text-[16px] text-[#E0E0E0] text-center">
              Cancel Anytime
            </span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-[30px] w-[1px] bg-[#6B6B6B]" />

          {/* Card 3 */}
          <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
            <div className="flex items-center justify-center w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-[8px] bg-[#FFA5001A] border border-[#FFA50080]">
              <GlobeAltIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFA500]" />
            </div>
            <span className="text-[14px] sm:text-[16px] text-[#E0E0E0] text-center">
              Arabic / English Supported
            </span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <button className="[background:linear-gradient(0deg,#446DFF_-1.15%,#00FFD8_194.69%)] text-white px-6 py-3 rounded-[10px] font-medium transition hover:opacity-90">
            Get Started
          </button>
          <button
            className="flex items-center justify-center gap-2 px-5 py-2 text-sm sm:text-base
                       bg-[#FFFFFF33] border border-white text-white
                       rounded-[10px] backdrop-blur-sm hover:bg-[#FFFFFF4D] transition"
          >
            <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            Watch 2 min Demo
          </button>
        </div>
      </div>
    </section>
  );
}
