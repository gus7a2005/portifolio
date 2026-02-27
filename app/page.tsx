"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Marquee } from "@/components/ui/marquee";
import { IconCloud } from "@/components/ui/icon-cloud";
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  GitBranch, 
  Figma, 
  Terminal,
  Layers,
  Palette,
  Box,
  Globe,
  FileText,
  Award,
  Download,
  ExternalLink,
  Github
} from "lucide-react";

function TypeWriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, started]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
}

const projectsData = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel admin.",
    tags: ["Next.js", "Stripe", "Prisma"],
    image: "🛒",
    link: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard interativo com gráficos e métricas em tempo real.",
    tags: ["React", "D3.js", "Firebase"],
    image: "📊",
    link: "#",
  },
  {
    title: "App de Tarefas",
    description: "Aplicativo de gerenciamento de tarefas com drag and drop.",
    tags: ["TypeScript", "Redux", "Node.js"],
    image: "✅",
    link: "#",
  },
  {
    title: "Rede Social",
    description: "Plataforma social com feed e mensagens em tempo real.",
    tags: ["Next.js", "Socket.io", "MongoDB"],
    image: "💬",
    link: "#",
  },
  {
    title: "Sistema de Reservas",
    description: "Sistema de agendamento com calendário interativo.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "📅",
    link: "#",
  },
];

function ProjectCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
        className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/30 transition-all ${!canScrollLeft && "opacity-30"}`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div
        ref={carouselRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto py-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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
            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full">{tag}</span>
              ))}
            </div>
            <a href={project.link} className="text-emerald-400 hover:text-emerald-300 font-medium text-sm">Ver projeto →</a>
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/30 transition-all ${!canScrollRight && "opacity-30"}`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

const skillCategories = [
  {
    title: "Frontend",
    titleColor: "text-emerald-400",
    dotColor: "bg-emerald-400",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    iconHoverBg: "group-hover:bg-emerald-500/20",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Layers },
      { name: "Tailwind CSS", icon: Palette },
    ]
  },
  {
    title: "Backend",
    titleColor: "text-teal-400",
    dotColor: "bg-teal-400",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-400",
    iconHoverBg: "group-hover:bg-teal-500/20",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Python", icon: Terminal },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
    ]
  },
  {
    title: "DevOps & Tools",
    titleColor: "text-cyan-400",
    dotColor: "bg-cyan-400",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    iconHoverBg: "group-hover:bg-cyan-500/20",
    skills: [
      { name: "Docker", icon: Box },
      { name: "AWS", icon: Cloud },
      { name: "Git", icon: GitBranch },
      { name: "Figma", icon: Figma },
    ]
  }
];

const experienceData = [
  {
    role: "Desenvolvedor Full Stack Senior",
    company: "Tech Company",
    period: "2024 - Presente",
    description: "Liderança técnica no desenvolvimento de aplicações web escaláveis. Implementação de arquiteturas modernas e mentoria de desenvolvedores junior.",
    technologies: ["Next.js", "TypeScript", "AWS"],
  },
  {
    role: "Desenvolvedor Full Stack Pleno",
    company: "Startup XYZ",
    period: "2022 - 2024",
    description: "Desenvolvimento de features end-to-end, desde o design da API até a implementação do frontend. Participação ativa em decisões de arquitetura.",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    role: "Desenvolvedor Frontend",
    company: "Agência Digital",
    period: "2021 - 2022",
    description: "Criação de interfaces responsivas e acessíveis. Colaboração direta com designers para implementar experiências de usuário de alta qualidade.",
    technologies: ["React", "Tailwind CSS", "Figma"],
  },
  {
    role: "Desenvolvedor Junior",
    company: "Software House",
    period: "2020 - 2021",
    description: "Início da carreira desenvolvendo features em projetos web. Aprendizado intensivo de boas práticas e metodologias ágeis.",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];

const certificatesData = [
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2024",
    link: "#",
  },
  {
    title: "React Advanced Patterns",
    issuer: "Frontend Masters",
    date: "2023",
    link: "#",
  },
  {
    title: "Full Stack Development",
    issuer: "Rocketseat",
    date: "2022",
    link: "#",
  },
  {
    title: "Node.js Microservices",
    issuer: "Udemy",
    date: "2022",
    link: "#",
  },
  {
    title: "TypeScript Mastery",
    issuer: "Alura",
    date: "2023",
    link: "#",
  },
  {
    title: "Docker & Kubernetes",
    issuer: "LinuxTips",
    date: "2023",
    link: "#",
  },
  {
    title: "Next.js & React",
    issuer: "Vercel",
    date: "2024",
    link: "#",
  },
  {
    title: "Database Design",
    issuer: "Coursera",
    date: "2022",
    link: "#",
  },
];

const documentsData = [
  {
    title: "Currículo Completo",
    description: "PDF com todas as experiências e formações",
    icon: FileText,
    downloadLink: "#", // Adicione o link para download do currículo
  },
  {
    title: "Currículo Resumido",
    description: "Versão de uma página",
    icon: FileText,
    downloadLink: "#",
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Experiência", href: "#experiencia" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Certificados", href: "#certificados" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.15}
          duration={3}
          repeatDelay={1}
          className="text-emerald-500 mask-[radial-gradient(600px_circle_at_center,white,transparent)]"
        />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-gray-950/80 backdrop-blur-md py-3 border-b border-emerald-500/10" : "py-5"}`}>
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <motion.a href="#inicio" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Gustavo
          </motion.a>
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.li key={link.name} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <a href={link.href} className="text-gray-300 hover:text-emerald-400 transition-colors relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
          </ul>
          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </nav>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-gray-900/95 backdrop-blur-md mt-2 mx-4 rounded-xl p-4 border border-emerald-500/20">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}><a href={link.href} className="text-gray-300 hover:text-emerald-400 block py-2" onClick={() => setMobileMenuOpen(false)}>{link.name}</a></li>
              ))}
            </ul>
          </motion.div>
        )}
      </header>

      <section id="inicio" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400 text-lg mb-4">
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
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Criando experiências digitais incríveis com código limpo e design moderno.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 4 }} className="flex gap-4 justify-center flex-wrap">
            <a 
              href="/cv-gustavo.pdf" 
              download 
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-full font-medium transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
            <a 
              href="https://github.com/gustavo10xdev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3 border border-emerald-500/50 hover:border-emerald-400 hover:bg-emerald-500/10 rounded-full font-medium transition-all flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-6 h-10 border-2 border-emerald-500/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      <section id="sobre" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-12">
            Sobre <span className="text-emerald-400">Mim</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              className="relative mx-auto"
            >
              {/* Container da foto com borda decorativa */}
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Borda decorativa animada */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 animate-pulse opacity-50 blur-xl" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600" />
                
                {/* Área da foto - substitua o src pela sua foto */}
                <div className="absolute inset-4 rounded-full bg-gray-900 overflow-hidden border-4 border-gray-800">
                  {/* Placeholder - remova e adicione sua foto aqui */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    {/* Substitua por: <img src="/sua-foto.jpg" alt="Gustavo" className="w-full h-full object-cover" /> */}
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>

                {/* Decorações flutuantes */}
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
                  �
                </motion.div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">Sou um desenvolvedor apaixonado por criar soluções inovadoras e interfaces intuitivas. Com experiência em desenvolvimento web full stack, transformo ideias em produtos digitais de alta qualidade.</p>
              <p className="text-gray-300 text-lg leading-relaxed">Sempre em busca de novos desafios e tecnologias, mantenho-me atualizado com as melhores práticas do mercado.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiência Timeline */}
      <section id="experiencia" className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-4">
            Minha <span className="text-emerald-400">Experiência</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-gray-400 text-center mb-12">
            Minha trajetória profissional
          </motion.p>

          <div className="relative">
            {/* Linha vertical */}
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
                {/* Ponto na linha */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-500/50 z-10" />

                {/* Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/30 rounded-2xl p-6 transition-all"
                  >
                    <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-emerald-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Espaço vazio do outro lado */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="habilidades" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-4">
            Minhas <span className="text-emerald-400">Habilidades</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-gray-400 text-center mb-12">
            Tecnologias que utilizo no dia a dia
          </motion.p>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Icon Cloud */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />
                <IconCloud 
                  images={[
                    "https://cdn.simpleicons.org/typescript/3178C6",
                    "https://cdn.simpleicons.org/javascript/F7DF1E",
                    "https://cdn.simpleicons.org/react/61DAFB",
                    "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
                    "https://cdn.simpleicons.org/nodedotjs/339933",
                    "https://cdn.simpleicons.org/python/3776AB",
                    "https://cdn.simpleicons.org/postgresql/4169E1",
                    "https://cdn.simpleicons.org/mongodb/47A248",
                    "https://cdn.simpleicons.org/docker/2496ED",
                    "https://cdn.simpleicons.org/amazonaws/FF9900",
                    "https://cdn.simpleicons.org/git/F05032",
                    "https://cdn.simpleicons.org/figma/F24E1E",
                    "https://cdn.simpleicons.org/tailwindcss/06B6D4",
                    "https://cdn.simpleicons.org/prisma/2D3748",
                    "https://cdn.simpleicons.org/vercel/FFFFFF",
                    "https://cdn.simpleicons.org/github/FFFFFF",
                    "https://cdn.simpleicons.org/redux/764ABC",
                    "https://cdn.simpleicons.org/graphql/E10098",
                  ]}
                />
              </div>
            </motion.div>

            {/* Skills Cards */}
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
                  <h3 className={`text-lg font-semibold mb-4 ${category.titleColor} flex items-center gap-2`}>
                    <span className={`w-2 h-2 rounded-full ${category.dotColor}`}></span>
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
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800/50 border border-gray-700/30 hover:border-emerald-500/30 transition-all cursor-default group"
                        >
                          <div className={`p-1.5 rounded-md ${category.iconBg} ${category.iconColor} ${category.iconHoverBg} transition-colors`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{skill.name}</span>
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

      {/* Certificados e Currículo */}
      <section id="certificados" className="py-20 px-6 bg-gray-900/30 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-4">
            Certificados & <span className="text-emerald-400">Currículo</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-gray-400 text-center mb-12">
            Minhas certificações e documentos profissionais
          </motion.p>

          {/* Download de Currículos */}
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
                      <h4 className="font-medium text-white group-hover:text-emerald-400 transition-colors">{doc.title}</h4>
                      <p className="text-sm text-gray-400">{doc.description}</p>
                    </div>
                    <Download className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Certificados com Marquee */}
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
              {/* Gradient overlay esquerda */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-gray-900/90 to-transparent z-10" />
              
              {/* Primeira linha do Marquee */}
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
                    <h4 className="font-medium text-white group-hover:text-teal-400 transition-colors mb-1">{cert.title}</h4>
                    <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                    <span className="text-xs px-2 py-1 bg-teal-500/10 text-teal-400 rounded-full">{cert.date}</span>
                  </a>
                ))}
              </Marquee>

              {/* Segunda linha do Marquee (direção reversa) */}
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
                    <h4 className="font-medium text-white group-hover:text-teal-400 transition-colors mb-1">{cert.title}</h4>
                    <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                    <span className="text-xs px-2 py-1 bg-teal-500/10 text-teal-400 rounded-full">{cert.date}</span>
                  </a>
                ))}
              </Marquee>

              {/* Gradient overlay direita */}
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-gray-900/90 to-transparent z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projetos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meus <span className="text-emerald-400">Projetos</span>
          </motion.h2>
          <ProjectCarousel />
        </div>
      </section>

      <section id="contato" className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-4">
            Vamos <span className="text-emerald-400">Conversar</span>?
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-gray-400 text-lg mb-12">
            Estou sempre aberto a novos projetos e oportunidades. Entre em contato!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="flex justify-center gap-6"
          >
            {/* Email */}
            <motion.a
              href="mailto:gustavo@email.com"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/50 hover:bg-emerald-500/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/50 hover:bg-emerald-500/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/50 hover:bg-emerald-500/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/50 hover:bg-emerald-500/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://instagram.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/50 hover:bg-emerald-500/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-sm mt-8"
          >
            gustavo@email.com
          </motion.p>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-emerald-500/10">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2026 Gustavo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
