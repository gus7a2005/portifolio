"use client";

import { motion } from "framer-motion";
import { IconCloud } from "@/components/ui/icon-cloud";
import { skillCategories, iconCloudImages } from "@/data/portfolio-data";

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Minhas <span className="text-emerald-400">Habilidades</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-12"
        >
          Tecnologias que utilizo no dia a dia
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />
              <IconCloud images={iconCloudImages} />
            </div>
          </motion.div>

          <div className="grid gap-6 order-1 lg:order-2">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.15 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 hover:border-emerald-500/30 transition-all"
              >
                <h3
                  className={`text-lg font-semibold mb-4 ${category.titleColor} flex items-center gap-2`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${category.dotColor}`}
                  ></span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800/50 border border-gray-700/30 hover:border-emerald-500/30 transition-all cursor-default group"
                      >
                        <div
                          className={`p-1.5 rounded-md ${category.iconBg} ${category.iconColor} ${category.iconHoverBg} transition-colors`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
