export const projectsData = [
  {
    id: 'ycab-foundation',
    title: { en: 'YCAB Foundation', id: 'YCAB Foundation' },
    subtitle: { en: 'Corporate website for a leading non-profit organization.', id: 'Situs web perusahaan untuk organisasi nirlaba terkemuka.' },
    type: { en: 'Web Platform', id: 'Platform Web' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '3 Months', id: '3 Bulan' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['PHP', 'CodeIgniter 3', 'MySQL', 'Bootstrap'],
    link: '#',
    github: '#',
    overview: { 
      en: 'A corporate web platform for YCAB Foundation designed to showcase their impact, manage donations, and coordinate volunteers.', 
      id: 'Platform web perusahaan untuk YCAB Foundation yang dirancang untuk menampilkan dampak mereka, mengelola donasi, dan mengoordinasikan sukarelawan.' 
    },
    challenge: { 
      en: 'The organization needed a reliable platform capable of handling high traffic during donation campaigns while maintaining an intuitive content management system.', 
      id: 'Organisasi membutuhkan platform andal yang mampu menangani lalu lintas tinggi selama kampanye donasi sambil mempertahankan sistem manajemen konten yang intuitif.' 
    },
    solution: { 
      en: 'Developed a robust architecture using CodeIgniter 3 and optimized MySQL queries to ensure fast load times and secure transactions.', 
      id: 'Mengembangkan arsitektur yang kuat menggunakan CodeIgniter 3 dan mengoptimalkan kueri MySQL untuk memastikan waktu muat yang cepat dan transaksi yang aman.' 
    },
    features: {
      en: ['Donation Gateway Integration', 'Dynamic Content Management', 'Volunteer Dashboard', 'Impact Analytics'],
      id: ['Integrasi Gateway Donasi', 'Manajemen Konten Dinamis', 'Dasbor Sukarelawan', 'Analitik Dampak']
    },
    isInternal: true,
    cardDesc: { 
      en: 'Corporate website for a leading non-profit organization, featuring donation gateways and impact reporting.', 
      id: 'Situs web perusahaan untuk organisasi nirlaba terkemuka, menampilkan gateway donasi dan pelaporan dampak.' 
    },
    tags: ['CodeIgniter 3', 'PHP', 'MySQL']
  },
  {
    id: 'rusun-system',
    title: { en: 'Rusun System', id: 'Sistem Rusun' },
    subtitle: { en: 'Web application for managing apartment operations.', id: 'Aplikasi web untuk mengelola operasional rusun.' },
    type: { en: 'Management System', id: 'Sistem Manajemen' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '6 Months', id: '6 Bulan' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['Angular', 'Node.js', 'Express', 'PostgreSQL'],
    link: '#',
    github: '#',
    overview: { 
      en: 'An end-to-end management system built for local government to streamline apartment (rusun) operations, billing, and tenant management.', 
      id: 'Sistem manajemen end-to-end yang dibangun untuk pemerintah daerah untuk merampingkan operasional apartemen (rusun), penagihan, dan manajemen penyewa.' 
    },
    challenge: { 
      en: 'Managing complex billing cycles, tracking tenant histories, and generating dynamic reports required a scalable frontend and backend.', 
      id: 'Mengelola siklus penagihan yang kompleks, melacak riwayat penyewa, dan menghasilkan laporan dinamis membutuhkan frontend dan backend yang scalable.' 
    },
    solution: { 
      en: 'Built an Angular SPA backed by a Node.js API, integrating automated cron jobs for billing and a PostgreSQL database for complex relational data.', 
      id: 'Membangun SPA Angular yang didukung oleh API Node.js, mengintegrasikan cron job otomatis untuk penagihan dan database PostgreSQL untuk data relasional yang kompleks.' 
    },
    features: {
      en: ['Tenant Management', 'Automated Billing', 'Maintenance Ticketing', 'Financial Reporting'],
      id: ['Manajemen Penyewa', 'Penagihan Otomatis', 'Sistem Tiket Pemeliharaan', 'Pelaporan Keuangan']
    },
    isInternal: true,
    cardDesc: { 
      en: 'Web application for managing apartment/rusun operations including billing and tenant tracking.', 
      id: 'Aplikasi web untuk mengelola operasional rusun/apartemen termasuk penagihan dan pelacakan penyewa.' 
    },
    tags: ['Angular', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'calma-stories',
    title: { en: 'Calma Stories', id: 'Calma Stories' },
    type: { en: 'E-Commerce App', id: 'Aplikasi E-Commerce' },
    cardDesc: { 
      en: 'Sustainable fashion platform enabling women to rent designer outfits.', 
      id: 'Platform mode berkelanjutan yang memungkinkan wanita menyewa pakaian desainer.' 
    },
    tags: ['Ionic', 'Angular', 'Node.js'],
    link: '#',
    github: '#',
    isInternal: false
  },
  {
    id: 'pupr-doc-sign',
    title: { en: 'PUPR Doc Sign', id: 'PUPR Doc Sign' },
    type: { en: 'Middleware', id: 'Middleware' },
    cardDesc: { 
      en: 'Middleware bridging AutoCAD engineering workflows with BSrE digital signature services.', 
      id: 'Middleware yang menjembatani alur kerja rekayasa AutoCAD dengan layanan tanda tangan digital BSrE.' 
    },
    tags: ['Go', 'Microservices', 'Redis'],
    link: '#',
    github: '#',
    isInternal: false
  }
];
