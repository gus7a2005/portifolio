"use client";

import { motion } from "framer-motion";
import { Download, Github } from "lucide-react";
import { TypeWriter } from "@/components/shared/TypeWriter";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-emerald-400 text-lg mb-4"
        >
          <TypeWriter text="Olá, eu sou" delay={300} />
        </motion.p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            <TypeWriter text="Gustavo" delay={1200} />
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
          <TypeWriter text="Desenvolvedor Full Stack" delay={2000} />
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
        >
          Criando experiências digitais incríveis com código limpo e design
          moderno.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="/Curriculo_GustavoCoelho (12).pdf"
            download
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-full font-medium transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
          <a
            href="https://github.com/gus7a2005"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-emerald-500/50 hover:border-emerald-400 hover:bg-emerald-500/10 rounded-full font-medium transition-all flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-emerald-500/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
