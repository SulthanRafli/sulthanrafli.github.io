import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience({ lang }) {
  const t = {
    title: { en: 'Experience', id: 'Pengalaman' }
  };

  const experiences = [
    {
      role: { en: 'Senior Full Stack Developer', id: 'Senior Full Stack Developer' },
      company: 'PT Periksa Solusi Indonesia',
      period: '2022 - Present',
      desc: {
        en: [
          'Designed and developed system modules including Financial, Logistics, Cashier, Nutrition, and Dynamic Form Builder.',
          'Managed system infrastructure using Redis, Elasticsearch, RabbitMQ, and Docker for scalable services.',
          'Developed and maintained BPJS Bridging integrations (Applicares, VClaim, Antrean Online, Mobile JKN, I-Care, etc.).',
          'Contributed to SATUSEHAT integration to support national healthcare interoperability.',
          'Managed release and deployment processes using GitHub Releases and GitHub Actions.',
          'Mentored and trained 10+ interns through code reviews and technical guidance.',
          'Participated as Internal Auditor for ISO 27001, focusing on physical security compliance.',
          'Led migration from monolithic Node.js (Express) to Golang microservices (10+ services), improving scalability.',
          'Achieved 98–99% uptime/success rate on all BPJS Bridging integrations.'
        ],
        id: [
          'Merancang dan mengembangkan modul sistem termasuk Keuangan, Logistik, Kasir, Gizi, dan Dynamic Form Builder.',
          'Mengelola infrastruktur sistem menggunakan Redis, Elasticsearch, RabbitMQ, dan Docker untuk layanan yang terukur.',
          'Mengembangkan dan memelihara integrasi Bridging BPJS (Applicares, VClaim, Antrean Online, Mobile JKN, I-Care, dll.).',
          'Berkontribusi pada integrasi SATUSEHAT untuk mendukung interoperabilitas layanan kesehatan nasional.',
          'Mengelola proses rilis dan deployment menggunakan GitHub Releases dan GitHub Actions.',
          'Membimbing dan melatih lebih dari 10 peserta magang melalui code review dan bimbingan teknis.',
          'Berpartisipasi sebagai Auditor Internal untuk ISO 27001, dengan fokus pada kepatuhan keamanan fisik.',
          'Memimpin migrasi dari monolitik Node.js ke microservices Golang (10+ layanan), meningkatkan skalabilitas sistem.',
          'Mencapai 98–99% uptime pada semua integrasi Bridging BPJS.'
        ]
      }
    },
    {
      role: { en: 'Junior Full Stack Developer', id: 'Junior Full Stack Developer' },
      company: 'PT Periksa Solusi Indonesia',
      period: '2019 - 2022',
      desc: {
        en: [
          'Built and maintained core system features using CodeIgniter 3 and Express.js.',
          'Participated in mobile application development using Ionic, extending system accessibility to mobile platforms.',
          'Created printable medical documents including forms, reports, and administrative outputs tailored to hospital needs.',
          'Led full system migration from CodeIgniter 3 to Angular, modernizing the application architecture.'
        ],
        id: [
          'Membangun dan memelihara fitur sistem inti menggunakan CodeIgniter 3 dan Express.js.',
          'Berpartisipasi dalam pengembangan aplikasi mobile menggunakan Ionic, memperluas aksesibilitas sistem.',
          'Membuat dokumen medis yang dapat dicetak termasuk formulir, laporan, dan output administratif.',
          'Memimpin migrasi sistem penuh dari CodeIgniter 3 ke Angular, memodernisasi arsitektur aplikasi.'
        ]
      }
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="mb-12 text-center md:text-left">
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
          className="h-1 w-20 bg-rose-500 rounded-full origin-left mx-auto md:mx-0"
        />
      </div>

      <div className="relative border-l border-gray-200 dark:border-slate-700 ml-4 md:ml-0">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="mb-10 ml-8 relative"
          >
            <span className="absolute -left-[49px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-rose-500 text-rose-500 z-10">
              <Briefcase size={14} />
            </span>
            <div className="glass-panel p-6 rounded-2xl shine-effect">
              <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-full text-xs font-semibold tracking-wider mb-3 text-[var(--fg-muted)]">
                {exp.period}
              </span>
              <h3 className="text-xl font-bold mb-1">{exp.role[lang]}</h3>
              <h4 className="text-rose-500 font-medium mb-4">{exp.company}</h4>
              <ul className="text-[var(--fg-muted)] leading-relaxed list-disc list-outside ml-4 space-y-2">
                {exp.desc[lang].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
