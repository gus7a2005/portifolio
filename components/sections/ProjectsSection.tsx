"use client";

import { motion } from "framer-motion";
// import { ProjectCarousel } from "@/components/shared/ProjectCarousel";
import { Rocket } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Meus <span className="text-emerald-400">Projetos</span>
        </motion.h2>
        {/* <ProjectCarousel /> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center py-16"
        >
          <div className="p-6 rounded-full bg-emerald-500/10 mb-6">
            <Rocket className="w-16 h-16 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Em breve</h3>
          <p className="text-gray-400 text-center max-w-md">
            Novos projetos incríveis estão sendo desenvolvidos e em breve serão
            adicionados ao portfólio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
