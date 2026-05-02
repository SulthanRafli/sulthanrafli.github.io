import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Server, Database, Activity } from 'lucide-react';

export default function Services({ lang }) {
  const t = {
    title: { en: 'Services', id: 'Layanan' },
    subtitle: {
      en: 'I provide end-to-end software development services, specializing in scalable architectures and healthcare integrations.',
      id: 'Saya menyediakan layanan pengembangan perangkat lunak end-to-end, berspesialisasi dalam arsitektur yang tangguh dan integrasi layanan kesehatan.'
    }
  };

  const services = [
    {
      title: { en: 'Full Stack Development', id: 'Pengembangan Full Stack' },
      desc: { 
        en: 'Building responsive, high-performance web applications using modern frameworks like Angular and Node.js.', 
        id: 'Membangun aplikasi web yang responsif dan berkinerja tinggi menggunakan framework modern seperti Angular dan Node.js.' 
      },
      icon: <MonitorSmartphone size={32} className="text-rose-500" />
    },
    {
      title: { en: 'Backend & Microservices', id: 'Backend & Microservices' },
      desc: { 
        en: 'Designing scalable APIs, microservices, and robust server-side logic using Go (Golang) and Node.js.', 
        id: 'Merancang API yang scalable, microservices, dan logika server yang tangguh menggunakan Go (Golang) dan Node.js.' 
      },
      icon: <Server size={32} className="text-blue-500" />
    },
    {
      title: { en: 'System Integration', id: 'Integrasi Sistem' },
      desc: { 
        en: 'Developing custom enterprise solutions and integrating complex third-party services like BPJS and SATUSEHAT.', 
        id: 'Mengembangkan solusi perusahaan khusus dan mengintegrasikan layanan pihak ketiga yang kompleks seperti BPJS dan SATUSEHAT.' 
      },
      icon: <Activity size={32} className="text-orange-500" />
    },
    {
      title: { en: 'Infrastructure & DB', id: 'Infrastruktur & DB' },
      desc: { 
        en: 'Structuring and managing reliable data storage and containerized deployments with Docker, Redis, and Elasticsearch.', 
        id: 'Menyusun dan mengelola penyimpanan data yang andal serta deployment container dengan Docker, Redis, dan Elasticsearch.' 
      },
      icon: <Database size={32} className="text-purple-500" />
    }
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16 text-center">
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
          className="h-1 w-20 bg-rose-500 rounded-full origin-left mx-auto"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-[var(--fg-muted)] max-w-2xl mx-auto"
        >
          {t.subtitle[lang]}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-8 rounded-3xl shine-effect hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-slate-700">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title[lang]}</h3>
            <p className="text-[var(--fg-muted)] text-sm leading-relaxed">
              {service.desc[lang]}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
