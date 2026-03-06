"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Minha <span className="text-emerald-400">Experiência</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-12"
        >
          Minha trajetória profissional
        </motion.p>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-emerald-500/20" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-500/50 z-10" />

              <div
                className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/30 rounded-2xl p-6 transition-all"
                >
                  <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-semibold rounded-full mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-emerald-400 font-medium mb-3">
                    {exp.company}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
