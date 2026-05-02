import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function Projects({ lang }) {
  const t = {
    title: { en: 'Featured Projects', id: 'Proyek Unggulan' }
  };

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
        {projectsData.map((project, index) => {
          const content = (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-panel rounded-3xl overflow-hidden flex flex-col shine-effect h-full"
            >
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <span className="inline-block px-4 py-1.5 bg-gray-100 dark:bg-slate-800 rounded-full text-xs font-semibold text-[var(--fg-muted)]">
                    {project.type[lang]}
                  </span>
                  {!project.isInternal && (
                    <div className="flex gap-3">
                      <a href={project.github} className="text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors">
                        <GitBranch size={20} />
                      </a>
                      <a href={project.link} className="text-[var(--fg-muted)] hover:text-rose-500 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  )}
                  {project.isInternal && (
                    <div className="text-[var(--fg-muted)] group-hover:text-rose-500 transition-colors">
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

          return project.isInternal ? (
            <Link to={`/project/${project.id}`} key={project.id} className="block h-full">
              {content}
            </Link>
          ) : (
            <div key={project.id} className="h-full">{content}</div>
          );
        })}
      </div>
    </section>
  );
}
