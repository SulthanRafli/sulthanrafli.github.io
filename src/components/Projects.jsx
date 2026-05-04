import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch, ArrowRight, Calendar, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function Projects({ lang }) {
  const [visibleCount, setVisibleCount] = useState(4);

  const t = {
    title: { en: 'Featured Projects', id: 'Proyek Unggulan' },
    loadMore: { en: 'Load More', id: 'Tampilkan Lebih Banyak' }
  };

  const getYear = (project) => {
    const timeline = project.timeline?.en || '';
    if (timeline.includes('Present') || timeline.includes('On Progress')) return 2026;
    const match = timeline.match(/(\d{4})/);
    if (match) return parseInt(match[1], 10);
    if (project.id === 'pupr-doc-sign') return 2023;
    if (project.id === 'calma-stories') return 2023;
    return 2022;
  };

  const displayYear = (project) => {
    const timeline = project.timeline?.en || '';
    if (timeline.includes('Present')) return 'Present';
    if (timeline.includes('On Progress')) return 'On Progress';
    const match = timeline.match(/(\d{4})/);
    if (match) return match[1];
    if (project.id === 'pupr-doc-sign') return '2023';
    if (project.id === 'calma-stories') return '2023';
    return '2022';
  };

  const sortedProjects = [...projectsData].sort((a, b) => getYear(b) - getYear(a));
  const visibleProjects = sortedProjects.slice(0, visibleCount);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          {t.title[lang]}
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="h-1 w-20 bg-rose-500 rounded-full origin-left"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
        {visibleProjects.map((project, index) => {
          const content = (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group glass-panel rounded-3xl overflow-hidden flex flex-col shine-effect h-full"
            >
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-block px-4 py-1.5 bg-gray-100 dark:bg-slate-800 rounded-full text-xs font-semibold text-[var(--fg-muted)]">
                      {project.type[lang]}
                    </span>
                    <span className="inline-block px-3 py-1.5 bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full text-xs font-semibold flex items-center gap-1">
                      {displayYear(project) === 'Present' ? (lang === 'id' ? 'Sekarang' : 'Present') : 
                       displayYear(project) === 'On Progress' ? (lang === 'id' ? 'Berjalan' : 'On Progress') : 
                       displayYear(project)}
                    </span>
                  </div>
                  {!project.isInternal && (
                    <div className="flex gap-3 z-10 relative">
                      {project.link && project.link !== '#' && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-[var(--fg-muted)] hover:text-rose-500 transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  )}
                  {project.isInternal && (
                    <div className="flex items-center gap-3 text-[var(--fg-muted)] group-hover:text-rose-500 transition-colors z-10 relative">
                      {project.github && project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-[var(--fg)] transition-colors text-[var(--fg-muted)]">
                          <GitBranch size={20} />
                        </a>
                      )}
                      <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform" />
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-rose-500 transition-colors">{project.title[lang]}</h3>
                <p className="text-[var(--fg-muted)] mb-6 leading-relaxed">
                  {project.cardDesc ? project.cardDesc[lang] : project.subtitle ? project.subtitle[lang] : ''}
                </p>
              </div>
              <div className="px-8 py-5 border-t border-gray-100 dark:border-slate-700 bg-gray-50/50 dark:bg-slate-800/50">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium text-[var(--fg-muted)] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );

          return (
            <Link to={`/project/${project.id}`} key={project.id} className="block h-full">
              {content}
            </Link>
          );
        })}
        </AnimatePresence>
      </div>

      {visibleCount < sortedProjects.length && (
        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => setVisibleCount(prev => prev + 4)}
            className="px-8 py-3 rounded-xl bg-rose-500 text-white font-medium hover:bg-rose-600 transition-all active:scale-95 cursor-pointer flex items-center gap-2 shine-effect group"
          >
            {t.loadMore[lang]}
            <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      )}
    </section>
  );
}
