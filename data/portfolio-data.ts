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
} from "lucide-react";

export const projectsData = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma completa de e-commerce com carrinho, pagamentos e painel admin.",
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

export const skillCategories = [
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
    ],
  },
  {
    title: "Backend",
    titleColor: "text-teal-400",
    dotColor: "bg-teal-400",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-400",
    iconHoverBg: "group-hover:bg-teal-500/20",
    skills: [
      { name: "Java (Spring)", icon: Server },
      { name: "Node.js", icon: Terminal },
      { name: "Python", icon: Code2 },
      { name: "MySQL", icon: Database },
      { name: "Prisma", icon: Database },
    ],
  },
  {
    title: "DevOps & Tools",
    titleColor: "text-cyan-400",
    dotColor: "bg-cyan-400",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    iconHoverBg: "group-hover:bg-cyan-500/20",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Clerk", icon: Cloud },
      { name: "Blockchain", icon: Box },
      { name: "IAs Generativas", icon: Terminal },
      { name: "Figma", icon: Figma },
    ],
  },
];

export const experienceData = [
  {
    role: "Estágio em Desenvolvimento Web",
    company: "10X Digital",
    period: "Set/2025 - Fev/2025",
    description:
      "Aprendizado técnico no desenvolvimento de aplicações web escaláveis. Implementação de arquiteturas modernas e boas práticas de desenvolvimento.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Clerk"],
  },
];

export const certificatesData = [
  {
    title: "Blockchain",
    issuer: "FIAP",
    date: "2024",
    link: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=a7d13e290ad7a2525ad66a15b5718d0c&action=view",
  },
  {
    title: "Design Thinking - Process",
    issuer: "FIAP",
    date: "2024",
    link: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=7cb5089d53d2b3a9592dda3c570af9b3&action=view",
  },
  {
    title: "Formação Social e Sustentabilidade ",
    issuer: "FIAP",
    date: "2024",
    link: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=2b19c8e5a444c2c7fc455aa51aedef0b&action=view",
  },
  {
    title: "Python",
    issuer: "FIAP",
    date: "2025",
    link: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=4372b3ff255fb28656f11e77cea1a50d&action=view",
  },
  {
    title: "Python Development",
    issuer: "FIAP",
    date: "2025",
    link: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=92a513f8e71994ada25964dd5329865d&action=view",
  },
  {
    title: "React: desenvolvendo com JavaScript",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/react-desenvolvendo-javascript/certificate",
  },
  {
    title: "Java: criando a sua primeira aplicação",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/java-criando-primeira-aplicacao/certificate",
  },
  {
    title: "Java: consumindo API, gravando arquivos e lidando com erros",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/java-consumindo-api-gravando-arquivos-lidando-erros/certificate",
  },
    {
    title: "Praticando Java: data e hora",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/praticando-java-data-hora/certificate",
  },
    {
    title: "Java: trabalhando com lambdas, streams e Spring Framework",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/java-trabalhando-lambdas-streams-spring-framework/certificate",
  },
    {
    title: "Java: trabalhando com listas e coleções de dados",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/java-listas-colecoes-dados/certificate",
  },
    {
    title: "Praticando Java: coleções e streams",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/praticando-java-colecoes-streams/certificate",
  },
    {
    title: "Praticando Java: variáveis e tipos",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/praticando-java-variaveis-tipos/certificate",
  },
    {
    title: "Praticando Java: Strings e Regex",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/praticando-java-strings-regex/certificate",
  },
      {
    title: "Excel: domine o editor de planilhas",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/excel-domine-editor-planilhas/certificate",
  },
      {
    title: "Java: aplicando a Orientação a Objetos",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/java-aplicando-orientacao-objetos/certificate",
  },
      {
    title: "JavaScript: construindo páginas dinâmicas",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/construindo-paginas-dinamicas-javascript/certificate",
  },
      {
    title: "JavaScript: entendendo promises e async/await",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/javascript-entendendo-promises-async-await/certificate",
  },
      {
    title: "JavaScript: métodos de array",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/javascript-metodos-array/certificate",
  },
      {
    title: "React: como os componentes funcionam",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/react-componentes-funcionam/certificate",
  },
          {
    title: "Next.js: conheça o framework React",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/next-js-conheca-framework-react/certificate",
  },
      {
    title: "React: desenvolvendo em React Router com JavaScript",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/React-desenvolvendo-react-router-javaScript/certificate",
  },
        {
    title: "Python para Dados: trabalhando com funções, estruturas de dados e exceções",
    issuer: "Alura",
    date: "2026",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/python-data-science-funcoes-estruturas-dados-excecoes/certificate",
  },
        {
    title: "Python: aplicando a Orientação a Objetos",
    issuer: "Alura",
    date: "2026",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/python-aplicando-orientacao-objetos/certificate",
  },
        {
    title: "Python: avance na Orientação a Objetos e consuma API",
    issuer: "Alura",
    date: "2026",
    link: "https://cursos.alura.com.br/user/gumorenocoelho/course/python-avance-orientacao-objetos-consuma-api/certificate",
  },
];

export const documentsData = [
  {
    title: "Currículo Completo",
    description: "PDF com todas as experiências e formações",
    icon: FileText,
    downloadLink: "/Curriculo_GustavoCoelho%20(12).pdf",
  },
];

export const iconCloudImages = [
  "https://cdn.simpleicons.org/typescript/3178C6",
  "https://cdn.simpleicons.org/javascript/F7DF1E",
  "https://cdn.simpleicons.org/react/61DAFB",
  "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  "https://cdn.simpleicons.org/nodedotjs/339933",
  "https://cdn.simpleicons.org/python/3776AB",
  "https://cdn.simpleicons.org/java/007396",
  "https://cdn.simpleicons.org/spring/6DB33F",
  "https://cdn.simpleicons.org/mysql/4479A1",
  "https://cdn.simpleicons.org/prisma/2D3748",
  "https://cdn.simpleicons.org/clerk/6C47FF",
  "https://cdn.simpleicons.org/git/F05032",
  "https://cdn.simpleicons.org/github/FFFFFF",
  "https://cdn.simpleicons.org/figma/F24E1E",
  "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "https://cdn.simpleicons.org/vercel/FFFFFF",
];

export const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Experiência", href: "#experiencia" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Certificados", href: "#certificados" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
];
