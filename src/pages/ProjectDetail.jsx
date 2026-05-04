import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, GitBranch, Calendar, User, Code2, Moon, Sun, Languages } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function ProjectDetail({ isDark, toggleTheme, lang, toggleLang }) {
  const { id } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const t = {
    back: { en: 'Back', id: 'Kembali' },
    visit: { en: 'Visit Live Site', id: 'Kunjungi Situs Live' },
    source: { en: 'Source Code', id: 'Kode Sumber' },
    mockup: { en: 'Screenshot Mockup', id: 'Mockup Tangkapan Layar' },
    overview: { en: 'Overview', id: 'Gambaran Umum' },
    challenge: { en: 'The Challenge', id: 'Tantangan' },
    solution: { en: 'The Solution', id: 'Solusi' },
    features: { en: 'Key Features', id: 'Fitur Utama' },
    techStack: { en: 'Tech Stack', id: 'Teknologi' },
    role: { en: 'Role', id: 'Peran' },
    timeline: { en: 'Timeline', id: 'Linimasa' }
  };

  return (
    <>
      {/* Simple Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors">
            <ArrowLeft size={16} />
            {t.back[lang]}
          </Link>
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full py-2 px-4 cursor-pointer"
            >
              <Languages size={16} />
              <span>{lang === 'en' ? 'ID' : 'EN'}</span>
            </button>
            <button 
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full p-2 cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20 relative z-10 px-6 max-w-6xl mx-auto">
        {/* Project Hero */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="px-4 py-1.5 bg-rose-500/10 text-rose-500 rounded-full text-xs font-bold tracking-wide uppercase">
              {project.type[lang]}
            </span>
            <span className="px-4 py-1.5 glass-panel rounded-full text-xs font-semibold text-[var(--fg-muted)]">
              {project.status[lang]}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            {project.title[lang]}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[var(--fg-muted)] max-w-3xl leading-relaxed mb-10"
          >
            {project.subtitle[lang]}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            {!project.isInternal && project.link && project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-rose-500 text-white font-medium hover:bg-rose-600 transition-colors flex items-center gap-2 shine-effect">
                {t.visit[lang]}
                <ExternalLink size={18} />
              </a>
            )}
            {project.isInternal && project.github && project.github !== '#' && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl glass-panel font-medium transition-colors flex items-center gap-2 hover:opacity-80">
                {t.source[lang]}
                <GitBranch size={18} />
              </a>
            )}
          </motion.div>
        </div>

        {/* Dynamic Abstract Project Cover */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full aspect-[21/9] md:aspect-[21/7] rounded-3xl overflow-hidden mb-20 relative group bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-indigo-500/5 to-pink-500/10"></div>
          
          {/* Animated Blobs */}
          <motion.div 
            animate={{ 
              x: [0, 50, 0], 
              y: [0, -30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-rose-400/20 dark:bg-rose-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70"
          ></motion.div>
          
          <motion.div 
            animate={{ 
              x: [0, -50, 0], 
              y: [0, 40, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70"
          ></motion.div>

          <div className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-10"></div>

          {/* Large Watermark Title */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
            <h2 className="text-[8vw] md:text-[6vw] font-black text-[var(--fg)] opacity-5 whitespace-nowrap">
              {project.title[lang].toUpperCase()}
            </h2>
          </div>

          {/* Center Glass Panel */}
          <div className="absolute inset-0 flex items-center justify-center z-10 p-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-panel w-full max-w-xl px-6 md:px-10 py-8 rounded-3xl flex flex-col items-center gap-6 border border-white/40 dark:border-slate-700/50 shadow-2xl backdrop-blur-md bg-white/40 dark:bg-slate-900/40 transition-transform"
            >
              <div className="flex items-center gap-3 w-full border-b border-gray-300/50 dark:border-slate-600/50 pb-4">
                <div className="w-3.5 h-3.5 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              </div>
              <div className="text-center w-full">
                <p className="text-xs md:text-sm font-bold tracking-widest text-rose-500 uppercase mb-2">System Architecture</p>
                <h3 className="text-xl md:text-3xl font-bold text-[var(--fg)] mb-6">{project.title[lang]}</h3>
                <div className="flex flex-wrap justify-center gap-2 w-full">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/60 dark:bg-slate-800/60 rounded-lg text-xs md:text-sm font-medium text-[var(--fg)] border border-gray-200/50 dark:border-slate-700/50 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content */}
          <div className="flex-[2] space-y-16">
            <section>
              <h2 className="text-3xl font-bold mb-6">{t.overview[lang]}</h2>
              <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
                {project.overview && project.overview[lang]}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">{t.challenge[lang]}</h2>
              <div className="glass-panel p-8 rounded-3xl border-l-4 border-l-orange-500">
                <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
                  {project.challenge && project.challenge[lang]}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">{t.solution[lang]}</h2>
              <div className="glass-panel p-8 rounded-3xl border-l-4 border-l-rose-500">
                <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
                  {project.solution && project.solution[lang]}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">{t.features[lang]}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features && project.features[lang] && project.features[lang].map((feature, i) => (
                  <div key={i} className="glass-panel p-6 rounded-2xl flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="flex-1 space-y-8">
            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Code2 className="text-rose-500" size={20} />
                {t.techStack[lang]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-sm font-medium border border-gray-200 dark:border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--fg-muted)] mb-2 flex items-center gap-2">
                  <User size={16} /> {t.role[lang]}
                </h3>
                <p className="font-medium text-lg">{project.role && project.role[lang]}</p>
              </div>
              
              <div className="w-full h-px bg-gray-200 dark:bg-slate-700"></div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--fg-muted)] mb-2 flex items-center gap-2">
                  <Calendar size={16} /> {t.timeline[lang]}
                </h3>
                <p className="font-medium text-lg">{project.timeline && project.timeline[lang]}</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="text-center py-8 text-[var(--fg-muted)] text-sm border-t border-gray-200 dark:border-slate-700 relative z-10">
        <p>© {new Date().getFullYear()} Sulthan Rafli. All rights reserved.</p>
      </footer>
    </>
  );
}
