import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Layout, Database, Box, Cpu, Sparkles } from 'lucide-react';

export default function About({ lang }) {
  const t = {
    title: { en: 'About Me', id: 'Tentang Saya' },
    cards: [
      {
        title: { en: 'Frontend Development', id: 'Pengembangan Frontend' },
        icon: <Layout className="text-rose-500 mb-4" size={32} />,
        desc: { 
          en: 'Building responsive and intuitive web applications using Angular and modern CSS frameworks.', 
          id: 'Membangun aplikasi web yang responsif dan intuitif menggunakan Angular dan framework CSS modern.' 
        }
      },
      {
        title: { en: 'Backend Systems', id: 'Sistem Backend' },
        icon: <Server className="text-blue-500 mb-4" size={32} />,
        desc: { 
          en: 'Architecting scalable microservices and robust APIs using Go and Node.js.', 
          id: 'Merancang microservices yang scalable dan API yang tangguh menggunakan Go dan Node.js.' 
        }
      },
      {
        title: { en: 'Infrastructure & DB', id: 'Infrastruktur & DB' },
        icon: <Database className="text-purple-500 mb-4" size={32} />,
        desc: { 
          en: 'Managing reliable data storage and containerized deployments with Docker and Redis.', 
          id: 'Mengelola penyimpanan data yang andal dan deployment container dengan Docker dan Redis.' 
        }
      },
      {
        title: { en: 'AI Native Engineer', id: 'AI Native Engineer' },
        icon: <Sparkles className="text-amber-500 mb-4" size={32} />,
        desc: { 
          en: 'Leveraging AI tools to accelerate development, automate repetitive tasks, and boost overall productivity.',
          id: 'Memanfaatkan tools AI untuk mempercepat pengembangan, mengotomasi tugas repetitif, dan meningkatkan produktivitas secara keseluruhan.'
        }
      }
    ],
    techDesc: {
      en: 'I specialize in full-stack web development and system integration. As an AI Native Engineer, I leverage AI-powered tools to maximize productivity and deliver high-quality solutions faster. Here are the technologies I frequently use:',
      id: 'Saya memiliki spesialisasi dalam pengembangan full-stack dan integrasi sistem. Sebagai AI Native Engineer, saya memanfaatkan tools berbasis AI untuk memaksimalkan produktivitas dan menghasilkan solusi berkualitas tinggi dengan lebih cepat. Berikut adalah teknologi yang sering saya gunakan:'
    }
  };

  const skills = [
    { name: 'Angular', category: 'Frontend' },
    { name: 'Node.js (Express)', category: 'Backend' },
    { name: 'Go (Golang)', category: 'Backend' },
    { name: 'CodeIgniter 3', category: 'Backend' },
    { name: 'Laravel', category: 'Backend' },
    { name: 'Ionic', category: 'Mobile' },
    { name: 'MySQL / PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Infrastructure' },
    { name: 'Elasticsearch', category: 'Infrastructure' },
    { name: 'RabbitMQ', category: 'Infrastructure' },
    { name: 'Docker', category: 'Infrastructure' },
    { name: 'CI/CD (GitHub Actions)', category: 'Tools' },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {t.cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-6 rounded-2xl shine-effect hover:-translate-y-1 transition-transform"
          >
            {card.icon}
            <h3 className="text-xl font-bold mb-2">{card.title[lang]}</h3>
            <p className="text-[var(--fg-muted)] leading-relaxed">{card.desc[lang]}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-8 rounded-3xl"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Code2 className="text-rose-500" /> Tech Stack
            </h3>
            <p className="text-[var(--fg-muted)] mb-6 leading-relaxed">
              {t.techDesc[lang]}
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-sm font-medium border border-gray-200 dark:border-slate-700"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-square rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/40 dark:to-pink-900/40 flex items-center justify-center p-8">
             <div className="grid grid-cols-2 gap-4 w-full h-full">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="glass-panel rounded-xl shadow-sm flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-md p-4"
                >
                  <img src="/angular.png" alt="Angular" className="w-12 h-12 object-contain" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="glass-panel rounded-xl shadow-sm flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-md p-4"
                >
                  <img src="/CI.png" alt="Node.js" className="w-12 h-12 object-contain" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="glass-panel rounded-xl shadow-sm flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-md p-4"
                >
                  <img src="/redis.png" alt="Go" className="w-12 h-12 object-contain" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="glass-panel rounded-xl shadow-sm flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-md p-4"
                >
                  <img src="/laravel.png" alt="CodeIgniter" className="w-12 h-12 object-contain" />
                </motion.div>
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
