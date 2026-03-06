"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
// import { projectsData } from "@/data/portfolio-data";

export function ProjectCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Dados mockados comentados - usar projectsData quando houver projetos reais
  const projectsData: any[] = [];

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative px-16">
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        aria-label="Scroll left"
        className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/30 transition-all ${!canScrollLeft && "opacity-30"}`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div
        ref={carouselRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto py-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="min-w-[350px] max-w-[350px] snap-center bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all"
          >
            <div className="text-5xl mb-4">{project.image}</div>
            <h3 className="text-xl font-bold mb-2 text-white">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-emerald-400 hover:text-emerald-300 font-medium text-sm"
            >
              Ver projeto →
            </a>
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        aria-label="Scroll right"
        className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/30 transition-all ${!canScrollRight && "opacity-30"}`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
