"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/ui/terminal";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Sobre <span className="text-emerald-400">Mim</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 animate-pulse opacity-50 blur-xl" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600" />
              <div className="absolute inset-4 rounded-full bg-gray-900 overflow-hidden border-4 border-gray-800">
                <Image
                  src="/profile-image.jpeg"
                  alt="Gustavo Coelho"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <motion.div
                animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-2 -right-2 w-12 h-12 bg-emerald-500/20 rounded-lg backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center text-2xl"
              >
                💻
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
                className="absolute -bottom-2 -left-2 w-12 h-12 bg-teal-500/20 rounded-lg backdrop-blur-sm border border-teal-500/30 flex items-center justify-center text-2xl"
              >
                🚀
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Terminal className="shadow-2xl">
              <TypingAnimation className="text-emerald-400">
                cat apresentacao.txt
              </TypingAnimation>
              <AnimatedSpan className="block mt-3 text-gray-300 leading-relaxed">
                Sou um desenvolvedor apaixonado por criar soluções
              </AnimatedSpan>
              <AnimatedSpan className="block text-gray-300 leading-relaxed">
                inovadoras e interfaces intuitivas. Com experiência
              </AnimatedSpan>
              <AnimatedSpan className="block text-gray-300 leading-relaxed">
                em desenvolvimento web full stack, transformo ideias
              </AnimatedSpan>
              <AnimatedSpan className="block text-gray-300 leading-relaxed mb-3">
                em produtos digitais de alta qualidade.
              </AnimatedSpan>
              <AnimatedSpan className="block text-gray-300 leading-relaxed">
                Sempre em busca de novos desafios e tecnologias,
              </AnimatedSpan>
              <AnimatedSpan className="block text-gray-300 leading-relaxed">
                mantenho-me atualizado com as melhores práticas
              </AnimatedSpan>
              <AnimatedSpan className="block text-gray-300 leading-relaxed mb-3">
                do mercado.
              </AnimatedSpan>
              <AnimatedSpan className="block text-gray-400">---</AnimatedSpan>
              <TypingAnimation className="text-emerald-400 block mt-3">
                ./info.sh --personal
              </TypingAnimation>
              <AnimatedSpan className="block mt-2 text-gray-300">
                <span className="text-cyan-400">Nome:</span> Gustavo Coelho
              </AnimatedSpan>
              <AnimatedSpan className="block text-gray-300">
                <span className="text-cyan-400">Cargo:</span> Desenvolvedor Full Stack
              </AnimatedSpan>
              <AnimatedSpan className="block text-gray-300">
                <span className="text-cyan-400">Local:</span> Brasil
              </AnimatedSpan>
              <AnimatedSpan className="block text-gray-400">---</AnimatedSpan>
              <TypingAnimation className="text-emerald-400 block mt-3">
                echo $SKILLS
              </TypingAnimation>
              <AnimatedSpan className="block mt-2 text-gray-300">
                <span className="text-teal-400">✓</span> TypeScript/JavaScript
              </AnimatedSpan>
              <AnimatedSpan className="block text-gray-300">
                <span className="text-teal-400">✓</span> React.js & Next.js
              </AnimatedSpan>
              <AnimatedSpan className="block text-gray-300">
                <span className="text-teal-400">✓</span> Node.js & Python
              </AnimatedSpan>
              <AnimatedSpan className="block text-gray-300">
                <span className="text-teal-400">✓</span> PostgreSQL & Oracle DB
              </AnimatedSpan>
              <AnimatedSpan className="block text-gray-300">
                <span className="text-teal-400">✓</span> Tailwind CSS & Figma
              </AnimatedSpan>
              <AnimatedSpan className="block text-gray-300 mb-3">
                <span className="text-teal-400">✓</span> Docker & AWS
              </AnimatedSpan>
              <AnimatedSpan className="block text-cyan-300 italic">
                💡 Transformando café em código desde 2024
              </AnimatedSpan>
            </Terminal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
