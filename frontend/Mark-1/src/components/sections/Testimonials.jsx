import { useState, useEffect } from "react";
import reviewsShadeBg from "../../assets/images/reviews-shade-bg.webp";
import reviewsBg from "../../assets/images/reviews-bg.webp";
import avatar1 from "../../assets/images/avatar-1.webp";
import avatar2 from "../../assets/images/avatar-2.webp";

const testimonials = [
  {
    id: 1,
    name: "Michael Doe",
    role: "Head of Marketing, DTC Beauty",
    text: "We went from 'where do we start?' to a full monthly plan in an afternoon.",
    avatar: avatar1,
  },
  {
    id: 2,
    name: "John Doe",
    role: "Creative Lead, Fintech",
    text: "Design briefs are actually usable. Our designers love the guardrails.",
    avatar: avatar2,
  },
  {
    id: 3,
    name: "Kinnan Cooper",
    role: "Marketing Director, SaaS",
    text: "Finally a dashboard that tells me what changed and what to do next.",
    avatar: avatar1,
  },
  {
    id: 4,
    name: "Michael Doe",
    role: "Head of Marketing, DTC Beauty",
    text: "We went from 'where do we start?' to a full monthly plan in an afternoon.",
    avatar: avatar2,
  },
];

export default function Testimonials() {
  /* determine slides per view based on width */
  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth < 768 ? 1 : 2,
  );
  const [page, setPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / slidesToShow);

  /* auto slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <section className="relative bg-[#121212] text-white overflow-hidden py-16 md:py-20">
      {/* glowing background */}
      <img
        src={reviewsShadeBg}
        alt="Decorative shade"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] md:w-[1200px] object-contain object-top opacity-100 pointer-events-none select-none z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 md:mb-12">
          <h2 className="font-atkinson text-3xl sm:text-4xl md:text-5xl font-bold">
            Testimonials
          </h2>
          <p
            className="font-inter text-[#666666] w-full md:max-w-[320px]
                       text-left md:text-right text-base sm:text-lg md:text-[20px]
                       font-semibold mt-4 md:mt-0"
          >
            Listen from our satisfied customers who are with us
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${page * 100}%)`,
            }}
          >
            {testimonials.map((review, i) => (
              <div
                key={review.id + "-" + i}
                className="w-full md:w-1/2 flex-shrink-0 p-2"
              >
                <div
                  className="bg-[#191919]/80 rounded-[16px] border border-[#2C2C2C]
                     overflow-hidden p-4 sm:p-5 md:p-6
                     h-auto md:h-[290px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${reviewsBg})` }}
                >
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#00FFD8] object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-white text-lg md:text-xl">
                        {review.name}
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-[#ccc]">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-[#E0E0E0] text-xs sm:text-sm md:text-base leading-relaxed">
                    “{review.text}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* pagination */}
        <div className="flex justify-center items-center gap-2 md:gap-3 mt-8 md:mt-10 rounded-[20px] px-3 py-2 md:px-4 md:py-3 w-fit mx-auto bg-[#303030] shadow-[0_0_12px_#FFFFFF]">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-[14px] w-[14px] md:h-[20px] md:w-[20px] rounded-full transition-all duration-300 ${
                i === page
                  ? "bg-gradient-to-br from-[#446DFFCC] to-[#8FA7FFCC] shadow-[0_0_4px_#FFFFFF]"
                  : "bg-[#FFFFFF24]"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
