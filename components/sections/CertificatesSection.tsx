"use client";

import { motion } from "framer-motion";
import { Award, Download, ExternalLink, FileText } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { certificatesData, documentsData } from "@/data/portfolio-data";

export function CertificatesSection() {
  return (
    <section
      id="certificados"
      className="py-20 px-6 bg-gray-900/30 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Certificados & <span className="text-emerald-400">Currículo</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-12"
        >
          Minhas certificações e documentos profissionais
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-6 text-white flex items-center justify-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            Currículo
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {documentsData.map((doc, index) => {
              const IconComponent = doc.icon;
              return (
                <motion.a
                  key={doc.title}
                  href={doc.downloadLink}
                  download
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/50 rounded-xl transition-all group cursor-pointer min-w-[280px]"
                >
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                      {doc.title}
                    </h4>
                    <p className="text-sm text-gray-400">{doc.description}</p>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 text-white flex items-center justify-center gap-2">
            <Award className="w-5 h-5 text-teal-400" />
            Certificados
          </h3>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-gray-900/90 to-transparent z-10" />

            <Marquee pauseOnHover className="[--duration:30s] mb-4">
              {certificatesData.slice(0, 4).map((cert) => (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 p-4 bg-gray-800/70 border border-gray-700/50 hover:border-teal-500/50 rounded-xl transition-all group cursor-pointer min-w-[250px] backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-teal-400 transition-colors" />
                  </div>
                  <h4 className="font-medium text-white group-hover:text-teal-400 transition-colors mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                  <span className="text-xs px-2 py-1 bg-teal-500/10 text-teal-400 rounded-full">
                    {cert.date}
                  </span>
                </a>
              ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:35s]">
              {certificatesData.slice(4).map((cert) => (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 p-4 bg-gray-800/70 border border-gray-700/50 hover:border-teal-500/50 rounded-xl transition-all group cursor-pointer min-w-[250px] backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-teal-400 transition-colors" />
                  </div>
                  <h4 className="font-medium text-white group-hover:text-teal-400 transition-colors mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                  <span className="text-xs px-2 py-1 bg-teal-500/10 text-teal-400 rounded-full">
                    {cert.date}
                  </span>
                </a>
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-gray-900/90 to-transparent z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
