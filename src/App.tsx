/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Zap, 
  Target, 
  Layout, 
  Code, 
  MessageCircle, 
  CheckCircle2, 
  ChevronRight,
  Plus,
  ArrowUpRight
} from "lucide-react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[200] bg-brand-black flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="font-display text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-2">
            Texla
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-mono text-[8px] tracking-[0.6em] uppercase text-white/20"
          >
            Tecnologia • Estratégia • Resultados
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal line indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-full bg-brand-purple"
        />
      </div>
    </motion.div>
  );
};

const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 40 : 80, parseInt((Math.random() * 100).toString())));
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="inline-block min-w-[1ch]">
      {words[index].substring(0, subIndex)}
      <span className="inline-block w-[4px] h-[0.8em] bg-brand-purple ml-2 animate-pulse align-middle" />
    </span>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-[100] p-4 md:p-8 flex justify-between items-center bg-brand-black/50 backdrop-blur-md md:bg-transparent md:backdrop-blur-none md:mix-blend-difference">
    <div className="flex items-center gap-2">
      <span className="font-mono text-xs md:text-sm tracking-tighter text-white uppercase font-bold">Texla Soluções</span>
    </div>
    <div className="hidden md:flex items-center gap-12 text-[10px] font-mono tracking-[0.3em] uppercase text-white/50">
      <a href="#hero" className="hover:text-white transition-colors">Sobre</a>
      <a href="#portfolio" className="hover:text-white transition-colors">Projetos</a>
      <a href="#contact" className="hover:text-white transition-colors">Contato</a>
    </div>
    <div className="flex items-center gap-4 md:gap-6">
      <div className="hidden sm:flex items-center gap-4 text-white/30">
        <a href="#" className="hover:text-white transition-colors"><Code size={16} /></a>
        <a href="#" className="hover:text-white transition-colors"><Layout size={16} /></a>
        <a href="#" className="hover:text-white transition-colors"><MessageCircle size={16} /></a>
      </div>
      <div className="w-[1px] h-4 bg-white/10 hidden sm:block" />
      <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors">
        <Zap size={14} />
      </button>
    </div>
  </nav>
);

const Constellation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="rgba(124, 58, 237, 0.2)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#glow)" />
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.1" fill="white" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* More detailed constellation lines */}
        <g stroke="white" strokeWidth="0.03" opacity="0.5">
          <line x1="10" y1="20" x2="30" y2="40" />
          <line x1="30" y1="40" x2="20" y2="70" />
          <line x1="20" y1="70" x2="50" y2="80" />
          <line x1="50" y1="80" x2="80" y2="60" />
          <line x1="80" y1="60" x2="70" y2="30" />
          <line x1="70" y1="30" x2="40" y2="10" />
          <line x1="40" y1="10" x2="10" y2="20" />
          <line x1="30" y1="40" x2="70" y2="30" />
          <line x1="20" y1="70" x2="80" y2="60" />
          <line x1="40" y1="10" x2="50" y2="80" />
          <line x1="15" y1="45" x2="85" y2="45" strokeDasharray="1,1" />
          <line x1="50" y1="5" x2="50" y2="95" strokeDasharray="1,1" />
        </g>

        {/* Floating nodes */}
        {[
          {x: 10, y: 20}, {x: 30, y: 40}, {x: 20, y: 70}, 
          {x: 50, y: 80}, {x: 80, y: 60}, {x: 70, y: 30}, {x: 40, y: 10}
        ].map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="0.4" fill="white" opacity="0.8" />
        ))}
      </svg>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-8 text-center overflow-hidden">
      <Constellation />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-brand-purple/50" />
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-brand-purple font-bold">
            Tecnologia que traz Clientes
          </span>
          <div className="w-12 h-[1px] bg-brand-purple/50" />
        </div>

        <h1 className="text-7xl md:text-[10rem] font-display leading-[0.9] mb-12 tracking-tight">
          Texla <br />
          <span className="text-brand-blue">Soluções</span>
        </h1>

        <div className="max-w-2xl mx-auto mb-12 min-h-[4em]">
          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
            <Typewriter words={[
              "Construímos experiências digitais com código limpo e design pensado.",
              "Da interface ao back-end, transformamos ideias em produtos.",
              "Criamos produtos que funcionam de verdade.",
              "Entregamos tecnologia simples e eficiente para o seu negócio crescer."
            ]} />
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a 
            href="#portfolio" 
            className="group flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-white bg-brand-purple px-10 py-5 rounded-sm hover:bg-brand-blue hover:text-black transition-all"
          >
            Ver Projetos
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="https://wa.me/5521986970285" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-white border border-white/10 px-10 py-5 rounded-sm hover:border-brand-purple transition-all"
          >
            Entrar em contato
          </a>
        </div>
      </motion.div>

      <div className="absolute bottom-8 md:bottom-12 right-8">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="font-mono text-[8px] tracking-[0.5em] uppercase text-white/20">
            Disponível para projetos
          </span>
        </div>
      </div>
    </section>
  );
};

const ProjectModal = ({ project, onClose }: { project: any; onClose: () => void }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8 bg-brand-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="w-full max-w-3xl glass-premium border border-white/10 rounded-sm overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-brand-purple transition-all z-10"
        >
          <Plus className="rotate-45" size={20} />
        </button>

        <div className="p-8 md:p-12">
          <div className="mb-8">
            <span className="font-mono text-[10px] tracking-[0.5em] text-brand-purple uppercase mb-4 block">
              {project.id}
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter leading-none mb-6">
              {project.title}
            </h2>
            <div className="w-full h-[1px] bg-white/10" />
          </div>

          <p className="text-lg text-white/60 font-light leading-relaxed mb-12">
            {project.desc}
          </p>

          <div className="mb-12">
            <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-white/30 mb-4 block">Tecnologias</span>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t: string) => (
                <span key={t} className="px-4 py-2 border border-white/5 bg-white/5 font-mono text-[9px] tracking-widest uppercase text-brand-blue rounded-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-white bg-brand-purple px-8 py-4 rounded-sm hover:bg-brand-blue hover:text-black transition-all"
            >
              <ArrowUpRight size={14} />
              Ver projeto
            </a>
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-white border border-white/10 px-8 py-4 rounded-sm hover:border-brand-purple transition-all"
              >
                <Code size={14} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const categories = ["Todos", "Landing Pages", "Sites Institucionais", "Sistemas"];
  
  const projects = [
    { 
      id: "001",
      title: "TELEFORWARDER", 
      cat: "Landing Pages", 
      size: "col-span-1", 
      img: "https://picsum.photos/seed/tech-1/1200/800", 
      url: "https://teleforwarder-landing.vercel.app/",
      desc: "Plataforma avançada de logística e rastreamento em tempo real. Interface focada em performance e clareza de dados para operações complexas.",
      tech: ["React", "Tailwind", "Framer Motion", "Vite"],
      github: "#"
    },
    { 
      id: "002",
      title: "ANNA PSI", 
      cat: "Landing Pages", 
      size: "col-span-1", 
      img: "https://picsum.photos/seed/tech-2/1200/800", 
      url: "https://annapsi-lp.vercel.app/",
      desc: "Landing page de alta conversão para serviços de psicologia, focada em empatia, clareza e agendamento facilitado.",
      tech: ["Next.js", "Tailwind", "Lucide Icons"],
      github: "#"
    }
  ];

  const filteredProjects = activeTab === "Todos" 
    ? projects 
    : projects.filter(p => p.cat === activeTab);

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 md:px-24 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 md:mb-24 gap-8">
        <h2 className="text-5xl md:text-8xl font-display leading-none">Projetos <br /> <span className="italic font-light lowercase text-white/20 pr-2">Selecionados</span></h2>
        <div className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
          [{projects.length}] Trabalhos Ativos
        </div>
      </div>

      {/* Tabs System - Editorial Style */}
      <div className="flex flex-wrap gap-8 mb-16 border-b border-white/5 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className="relative group py-2"
          >
            <span className={`font-mono text-[10px] tracking-[0.4em] uppercase transition-colors duration-300 ${
              activeTab === cat ? "text-white" : "text-white/30 group-hover:text-white/60"
            }`}>
              {cat}
            </span>
            {activeTab === cat && (
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-purple"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((item, i) => (
          <motion.div 
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            key={item.title}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedProject(item)}
            className="group relative bg-white/[0.02] border border-white/5 rounded-sm p-8 cursor-pointer transition-all duration-500 hover:border-brand-purple/50 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(124,58,237,0.05)]"
          >
            {/* Project ID */}
            <div className="flex justify-between items-start mb-12">
              <span className="font-mono text-[10px] text-white/20 tracking-widest group-hover:text-brand-purple transition-colors">
                {item.id}
              </span>
              <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-brand-purple transition-colors" />
            </div>

            {/* Content */}
            <div className="space-y-4 mb-8">
              <h3 className="text-3xl font-display font-bold tracking-tight group-hover:text-brand-purple transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-white/40 font-light leading-relaxed line-clamp-3 group-hover:text-white/60 transition-colors">
                {item.desc}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {item.tech.slice(0, 3).map((t) => (
                <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 rounded-sm font-mono text-[8px] uppercase tracking-widest text-white/40 group-hover:text-brand-blue group-hover:border-brand-blue/30 transition-colors">
                  {t}
                </span>
              ))}
            </div>

            {/* Link */}
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 group-hover:text-brand-purple transition-colors">
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              ver detalhes
            </div>

            {/* Technical Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.05),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div 
              className="absolute inset-0 -z-20 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500"
              style={{ 
                backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="py-32 px-8 md:px-24 border-t border-white/5 relative overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h2 className="text-7xl md:text-[10vw] font-display leading-[0.8] mb-12 italic">Vamos <br /> Vender.</h2>
        <a 
          href="https://wa.me/5521986970285"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-6 text-2xl font-display font-bold hover:text-brand-purple transition-colors"
        >
          Seu site trabalhando pra você
          <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-purple transition-colors">
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </div>
        </a>
      </div>
      <div className="grid grid-cols-2 gap-12 font-mono text-[10px] tracking-[0.3em] uppercase text-white/30">
        <div className="space-y-6">
          <p className="text-white/60">Navegação</p>
          <a href="#hero" className="block hover:text-white">Sobre</a>
          <a href="#portfolio" className="block hover:text-white">Projetos</a>
          <a href="#contact" className="block hover:text-white">Contato</a>
        </div>
        <div className="space-y-6">
          <p className="text-white/60">Social</p>
          <a href="#" className="block hover:text-white">Instagram</a>
          <a href="https://wa.me/5521986970285" target="_blank" rel="noopener noreferrer" className="block hover:text-white">WhatsApp</a>
        </div>
      </div>
    </div>
    
    <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 font-mono text-[8px] tracking-[0.5em] uppercase text-white/10">
      <p>© 2024 TEXLA SOLUÇÕES • TECNOLOGIA PARA NEGÓCIOS LOCAIS</p>
      <p>MAIS CLIENTES, MENOS DEPENDÊNCIA DE INDICAÇÃO</p>
    </div>
  </footer>
);

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative bg-brand-black text-brand-white font-sans selection:bg-brand-purple selection:text-white">
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="grain" />
      <Navbar />
      <Hero />
      <Portfolio />
      <Footer />
    </div>
  );
}
