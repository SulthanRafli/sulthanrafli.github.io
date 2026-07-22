export const projectsData = [
  {
    id: 'lost-and-found',
    title: { en: 'Lost and Found', id: 'Lost and Found' },
    subtitle: { en: 'A campus-wide app that reunites lost items with their owners in real time.', id: 'Aplikasi lintas kampus yang mempertemukan barang hilang dengan pemiliknya secara real-time.' },
    type: { en: 'Mobile App', id: 'Aplikasi Mobile' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2020)', id: '1 Bulan (2020)' },
    role: { en: 'Android Developer', id: 'Android Developer' },
    techStack: ['Android Studio', 'Firebase Realtime Database'],
    link: 'https://github.com/SulthanRafli/LostAndFound',
    github: 'https://github.com/SulthanRafli/LostAndFound',
    overview: {
      en: 'Built and shipped a centralized Android platform, as a final year college project, that let students and staff report and recover lost items across an entire campus within a single month.',
      id: 'Membangun dan merilis platform Android terpusat, sebagai proyek tugas akhir kuliah, yang memungkinkan mahasiswa dan staf melaporkan serta menemukan kembali barang hilang di seluruh kampus hanya dalam waktu satu bulan.'
    },
    challenge: {
      en: 'Delivering a reliable real-time chat feature between item reporters and finders, inside a strict one-month development window.',
      id: 'Menghadirkan fitur chat real-time yang andal antara pelapor dan penemu barang, dalam waktu pengembangan yang sangat terbatas, yaitu hanya satu bulan.'
    },
    solution: {
      en: 'Met the deadline by integrating Firebase Realtime Database, enabling instant, synced messaging between users without building a custom messaging backend from scratch.',
      id: 'Memenuhi tenggat waktu dengan mengintegrasikan Firebase Realtime Database, menghadirkan pesan instan yang tersinkronisasi antar pengguna tanpa perlu membangun backend messaging kustom dari nol.'
    },
    features: {
      en: ['Lost Item Reporting', 'Real-time Chat', 'Item Search', 'User Authentication'],
      id: ['Pelaporan Barang Hilang', 'Obrolan Real-time', 'Pencarian Barang', 'Autentikasi Pengguna']
    },
    isInternal: true,
    cardDesc: {
      en: 'Final year college project (2020): an Android app that reunites lost items with owners through real-time in-app chat.',
      id: 'Proyek tugas akhir kuliah (2020): aplikasi Android yang mempertemukan barang hilang dengan pemiliknya lewat fitur chat real-time.'
    },
    tags: ['Android Studio', 'Firebase']
  },
  {
    id: 'rusun-muka-kuning',
    title: { en: 'Rusun Muka Kuning', id: 'Rusun Muka Kuning' },
    subtitle: { en: 'An all-in-one system that automates daily flat rental operations for owners.', id: 'Sistem all-in-one yang mengotomatisasi operasional harian sewa rusun bagi pemiliknya.' },
    type: { en: 'Web Application', id: 'Aplikasi Web' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2022)', id: '1 Bulan (2022)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['CodeIgniter 3', 'PHP', 'MySQL'],
    link: '#',
    github: 'https://github.com/SulthanRafli/RusunMukaKuning',
    overview: {
      en: 'Delivered a full-cycle web system — covering flats, operators, rental pricing, and service transactions — that replaced manual, paper-based tracking for a flat owner\'s daily operations.',
      id: 'Menghadirkan sistem web end-to-end — mencakup unit rusun, operator, harga sewa, dan transaksi layanan — yang menggantikan pencatatan manual berbasis kertas untuk operasional harian pemilik rusun.'
    },
    challenge: {
      en: 'Designing a database architecture robust enough to handle complex, interlinked relationships between operators, units, and transactions, while shipping a fully working system in just 1 month.',
      id: 'Merancang arsitektur database yang cukup kuat untuk menangani hubungan kompleks dan saling terkait antara operator, unit, dan transaksi, sekaligus merilis sistem yang berfungsi penuh hanya dalam 1 bulan.'
    },
    solution: {
      en: 'Hit the deadline by pairing CodeIgniter 3\'s MVC structure with a normalized MySQL schema, keeping data integrity intact while implementing every required feature on time.',
      id: 'Mencapai tenggat waktu dengan memadukan struktur MVC CodeIgniter 3 dan skema MySQL yang ternormalisasi, menjaga integritas data tetap terjaga sembari mengimplementasikan semua fitur yang dibutuhkan tepat waktu.'
    },
    features: {
      en: ['Flat Management', 'Operator Management', 'Rental Pricing Control', 'Transaction Tracking'],
      id: ['Manajemen Unit Rusun', 'Manajemen Operator', 'Pengaturan Harga Sewa', 'Pelacakan Transaksi']
    },
    isInternal: true,
    cardDesc: {
      en: 'Replaced manual tracking with a single web system for managing flats, operators, and rental transactions.',
      id: 'Menggantikan pencatatan manual dengan satu sistem web untuk mengelola unit rusun, operator, dan transaksi sewa.'
    },
    tags: ['CodeIgniter 3', 'PHP', 'MySQL']
  },
  {
    id: 'badminton-court',
    title: { en: 'Badminton Court', id: 'Badminton Court' },
    subtitle: { en: 'A booking system that eliminates double-bookings and manual invoicing for court rentals.', id: 'Sistem pemesanan yang menghilangkan bentrok jadwal dan pembuatan invoice manual untuk sewa lapangan.' },
    type: { en: 'Web Application', id: 'Aplikasi Web' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2022)', id: '1 Bulan (2022)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['CodeIgniter 3', 'PHP', 'MySQL'],
    link: '#',
    github: 'https://github.com/SulthanRafli/BadmintonCourt',
    overview: {
      en: 'Built a scheduling and invoicing system for badminton court rentals, automatically generating invoices while keeping on-site cash payment as the final step.',
      id: 'Membangun sistem penjadwalan dan invoice untuk sewa lapangan badminton, secara otomatis membuat invoice sementara pembayaran tunai tetap dilakukan langsung di tempat.'
    },
    challenge: {
      en: 'Preventing double-booked courts and keeping invoice generation seamless, all within a tight 1-month timeframe.',
      id: 'Mencegah bentrok jadwal pemesanan lapangan dan memastikan pembuatan invoice berjalan lancar, semua dalam waktu 1 bulan yang ketat.'
    },
    solution: {
      en: 'Prevented scheduling conflicts entirely by enforcing database-level booking constraints in CodeIgniter 3, paired with an automated invoice generator that met the deadline with zero manual invoice work.',
      id: 'Mencegah bentrok jadwal sepenuhnya dengan menerapkan batasan pemesanan di level database menggunakan CodeIgniter 3, dipadukan dengan pembuat invoice otomatis yang memenuhi tenggat waktu tanpa perlu pembuatan invoice manual.'
    },
    features: {
      en: ['Court Scheduling', 'Invoice Generation', 'Availability Checking', 'Booking Management'],
      id: ['Penjadwalan Lapangan', 'Pembuatan Invoice', 'Pengecekan Ketersediaan', 'Manajemen Pemesanan']
    },
    isInternal: true,
    cardDesc: {
      en: 'Booking system for badminton courts with automated, conflict-free scheduling and invoicing.',
      id: 'Sistem pemesanan lapangan badminton dengan penjadwalan bebas bentrok dan invoice otomatis.'
    },
    tags: ['CodeIgniter 3', 'PHP', 'MySQL']
  },
  {
    id: 'burgers-app',
    title: { en: 'Burgers', id: 'Burgers' },
    subtitle: { en: 'An online ordering app with self-verifying bank transfer payments.', id: 'Aplikasi pemesanan online dengan pembayaran transfer bank yang terverifikasi otomatis.' },
    type: { en: 'E-Commerce', id: 'E-Commerce' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2022)', id: '1 Bulan (2022)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['CodeIgniter 3', 'PHP', 'MySQL'],
    link: '#',
    github: 'https://github.com/SulthanRafli/Burgers',
    overview: {
      en: 'Built an online ordering platform for a burger restaurant, cutting manual payment-matching work by giving every order a unique 3-digit transfer code for instant verification.',
      id: 'Membangun platform pemesanan online untuk restoran burger, memangkas kerja pencocokan pembayaran manual dengan memberi setiap pesanan kode transfer unik 3 digit untuk verifikasi instan.'
    },
    challenge: {
      en: 'Making the shopping cart experience seamless and the bank-transfer verification fully automated, within a strict 1-month development window.',
      id: 'Membuat pengalaman keranjang belanja berjalan lancar dan verifikasi transfer bank sepenuhnya otomatis, dalam waktu pengembangan 1 bulan yang ketat.'
    },
    solution: {
      en: 'Automated payment matching by generating a unique 3-digit code appended to each order\'s total, letting the restaurant confirm any bank transfer at a glance instead of manually cross-checking bank mutations.',
      id: 'Mengotomatisasi pencocokan pembayaran dengan membuat kode unik 3 digit yang ditambahkan ke total setiap pesanan, memungkinkan restoran mengonfirmasi transfer bank hanya dengan sekali lihat tanpa perlu mengecek mutasi bank secara manual.'
    },
    features: {
      en: ['Shopping Cart', 'Invoice Generation', 'Unique Code Bank Transfer', 'Order Management'],
      id: ['Keranjang Belanja', 'Cetak Invoice', 'Transfer Bank Kode Unik', 'Manajemen Pesanan']
    },
    isInternal: true,
    cardDesc: {
      en: 'Online burger ordering app that auto-verifies bank transfers using unique order codes.',
      id: 'Aplikasi pesan burger online yang otomatis memverifikasi transfer bank menggunakan kode pesanan unik.'
    },
    tags: ['CodeIgniter 3', 'PHP', 'MySQL']
  },
  {
    id: 'ukm-trilogi',
    title: { en: 'UKM Trilogi', id: 'UKM Trilogi' },
    subtitle: { en: 'A university-wide platform that centralizes and time-gates student club registration.', id: 'Platform kampus yang memusatkan dan mengatur waktu pendaftaran Unit Kegiatan Mahasiswa (UKM).' },
    type: { en: 'Web Platform', id: 'Platform Web' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2022)', id: '1 Bulan (2022)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['Angular', 'Firebase', 'Firestore'],
    link: '#',
    github: 'https://github.com/SulthanRafli/UkmTrilogi',
    overview: {
      en: 'Delivered a single platform for Universitas Trilogi that centralized every student club (UKM), letting students browse and register within a countdown-controlled window, backed by a full admin CMS.',
      id: 'Menghadirkan satu platform untuk Universitas Trilogi yang memusatkan seluruh Unit Kegiatan Mahasiswa (UKM), memungkinkan mahasiswa menjelajah dan mendaftar dalam jendela waktu yang dikendalikan sistem hitung mundur, didukung CMS admin yang lengkap.'
    },
    challenge: {
      en: 'Synchronizing a live registration system with a countdown timer and shipping a fully functional CMS for real-time data management, all within a tight 1-month deadline.',
      id: 'Menyinkronkan sistem pendaftaran aktif dengan timer hitung mundur dan merilis CMS yang berfungsi penuh untuk manajemen data real-time, semuanya dalam tenggat waktu 1 bulan yang ketat.'
    },
    solution: {
      en: 'Delivered on time by building a component-based Angular UI and CMS backed by Firebase Firestore, reliably auto-locking registrations the moment the countdown hit zero with no manual intervention.',
      id: 'Terselesaikan tepat waktu dengan membangun UI dan CMS berbasis komponen Angular yang didukung Firebase Firestore, secara andal mengunci pendaftaran otomatis begitu timer mencapai nol tanpa perlu intervensi manual.'
    },
    features: {
      en: ['Club Directory', 'Time-Limited Registration', 'Student CMS', 'Club Management CMS'],
      id: ['Direktori UKM', 'Pendaftaran Berbatas Waktu', 'CMS Mahasiswa', 'CMS Manajemen UKM']
    },
    isInternal: true,
    cardDesc: {
      en: 'University club platform with countdown-gated registration and a full admin CMS.',
      id: 'Platform UKM universitas dengan pendaftaran berbatas waktu hitung mundur dan CMS admin lengkap.'
    },
    tags: ['Angular', 'Firestore', 'Firebase']
  },
  {
    id: 'kuisioner-ptun',
    title: { en: 'Kuisioner PTUN Makassar', id: 'Kuisioner PTUN Makassar' },
    subtitle: { en: 'An accessible survey system built for elderly-friendly public service evaluation.', id: 'Sistem survei yang mudah diakses, dirancang untuk evaluasi layanan publik ramah lansia.' },
    type: { en: 'Web Application', id: 'Aplikasi Web' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2022)', id: '1 Bulan (2022)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['CodeIgniter 3', 'PHP', 'MySQL'],
    link: '#',
    github: 'https://github.com/SulthanRafli/Kuisioner',
    overview: {
      en: 'Built a web-based survey system for the Makassar State Administrative Court (PTUN) to run Community Satisfaction Surveys (IPAK & IKM), making the surveys accessible to elderly respondents via text-to-speech.',
      id: 'Membangun sistem survei berbasis web untuk Pengadilan Tata Usaha Negara (PTUN) Makassar guna melaksanakan Survei Kepuasan Masyarakat (IPAK & IKM), membuat survei dapat diakses oleh responden lansia lewat fitur text-to-speech.'
    },
    challenge: {
      en: 'Making the survey genuinely usable for elderly users via text-to-speech, while building a CMS flexible enough to let admins restructure the survey dynamically — all within a tight 1-month timeline.',
      id: 'Membuat survei benar-benar dapat digunakan oleh pengguna lansia lewat text-to-speech, sekaligus membangun CMS yang cukup fleksibel bagi admin untuk menyusun ulang struktur survei secara dinamis — semuanya dalam batas waktu 1 bulan yang ketat.'
    },
    solution: {
      en: 'Closed the accessibility gap by implementing JavaScript-based text-to-speech across the survey flow, while a CodeIgniter 3-powered dynamic CMS let admins manage questions and scoring without touching code — completed on schedule.',
      id: 'Menutup kesenjangan aksesibilitas dengan menerapkan text-to-speech berbasis JavaScript di seluruh alur survei, sementara CMS dinamis berbasis CodeIgniter 3 memungkinkan admin mengelola pertanyaan dan penilaian tanpa menyentuh kode — selesai sesuai jadwal.'
    },
    features: {
      en: ['Dynamic CMS for Questions', 'Text-to-Speech Accessibility', 'Survey Scoring System', 'IPAK & IKM Questionnaires'],
      id: ['CMS Dinamis untuk Pertanyaan', 'Aksesibilitas Text-to-Speech', 'Sistem Penilaian Survei', 'Kuesioner IPAK & IKM']
    },
    isInternal: true,
    cardDesc: {
      en: 'Accessible survey system for PTUN Makassar, built with text-to-speech and a dynamic CMS.',
      id: 'Sistem survei yang mudah diakses untuk PTUN Makassar, dibangun dengan text-to-speech dan CMS dinamis.'
    },
    tags: ['CodeIgniter 3', 'PHP', 'MySQL']
  },
  {
    id: 'least-square-petshop',
    title: { en: 'Least Square Petshop', id: 'Prediksi Penjualan Petshop' },
    subtitle: { en: 'A forecasting tool that turns historical sales data into monthly demand predictions.', id: 'Alat prakiraan yang mengubah data penjualan historis menjadi prediksi permintaan bulanan.' },
    type: { en: 'Data Analytics', id: 'Analitik Data' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2022)', id: '1 Bulan (2022)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['CodeIgniter 3', 'PHP', 'MySQL'],
    link: '#',
    github: 'https://github.com/SulthanRafli/MetodeLeastSquare',
    overview: {
      en: 'Built a forecasting tool for a pet shop that turns historical sales records into item-specific, month-by-month sales predictions using the Least Square Method.',
      id: 'Membangun alat prakiraan untuk pet shop yang mengubah catatan penjualan historis menjadi prediksi penjualan bulanan per barang menggunakan Metode Least Square.'
    },
    challenge: {
      en: 'Translating the Least Square algorithm\'s math into accurate, reusable PHP logic that works across different items and timeframes, all within a strict 1-month window.',
      id: 'Menerjemahkan logika matematika algoritma Least Square menjadi kode PHP yang akurat dan dapat digunakan kembali untuk berbagai barang dan rentang waktu, semuanya dalam waktu 1 bulan yang ketat.'
    },
    solution: {
      en: 'Delivered accurate, repeatable forecasts by structuring the Least Square trend calculation into reusable CodeIgniter 3 modules that process historical MySQL data on demand.',
      id: 'Menghasilkan prakiraan yang akurat dan dapat diulang dengan menyusun perhitungan tren Least Square menjadi modul CodeIgniter 3 yang dapat digunakan kembali dan memproses data historis MySQL sesuai kebutuhan.'
    },
    features: {
      en: ['Least Square Calculation', 'Sales Data Management', 'Item-specific Forecasting', 'Monthly Prediction Reports'],
      id: ['Perhitungan Least Square', 'Manajemen Data Penjualan', 'Prakiraan per Barang', 'Laporan Prediksi Bulanan']
    },
    isInternal: true,
    cardDesc: {
      en: 'Sales forecasting app for a pet shop, turning historical data into monthly predictions via the Least Square Method.',
      id: 'Aplikasi prakiraan penjualan untuk pet shop, mengubah data historis menjadi prediksi bulanan lewat Metode Least Square.'
    },
    tags: ['CodeIgniter 3', 'PHP', 'MySQL']
  },
  {
    id: 'skripsi-chat',
    title: { en: 'SkripsiChat', id: 'SkripsiChat' },
    subtitle: { en: 'A structured chat platform that keeps thesis supervision requests student-initiated.', id: 'Platform obrolan terstruktur yang menjaga permintaan bimbingan skripsi selalu dimulai oleh mahasiswa.' },
    type: { en: 'Web Application', id: 'Aplikasi Web' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2024)', id: '1 Bulan (2024)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['Laravel Livewire', 'PHP', 'MySQL'],
    link: '#',
    github: 'https://github.com/SulthanRafli/SkripsiChat',
    overview: {
      en: 'Built a dedicated chat platform connecting thesis students with supervising lecturers, enforcing a student-first hierarchy so lecturers only ever respond to active queries instead of managing outreach themselves.',
      id: 'Membangun platform obrolan khusus yang menghubungkan mahasiswa skripsi dengan dosen pembimbing, menerapkan hierarki mahasiswa-pertama sehingga dosen hanya perlu merespons pertanyaan aktif, bukan mengelola komunikasi awal sendiri.'
    },
    challenge: {
      en: 'Building a genuinely real-time chat interface while enforcing strict role-based rules that block lecturers from starting conversations — all within a 1-month development window.',
      id: 'Membangun antarmuka obrolan yang benar-benar real-time sembari menerapkan aturan berbasis peran yang ketat untuk mencegah dosen memulai percakapan — semuanya dalam waktu pengembangan 1 bulan.'
    },
    solution: {
      en: 'Shipped a reactive, real-time chat experience without heavy custom JavaScript by using Laravel Livewire, and locked in the student-first rule through backend authorization policies rather than relying on frontend checks alone.',
      id: 'Merilis pengalaman obrolan reaktif dan real-time tanpa banyak JavaScript kustom dengan Laravel Livewire, serta mengunci aturan mahasiswa-pertama lewat kebijakan otorisasi di backend, bukan hanya mengandalkan pengecekan di frontend.'
    },
    features: {
      en: ['Real-time Messaging', 'Role-based Restrictions', 'Thesis Group Management', 'Chat History'],
      id: ['Pesan Real-time', 'Pembatasan Berbasis Peran', 'Manajemen Grup Skripsi', 'Riwayat Obrolan']
    },
    isInternal: true,
    cardDesc: {
      en: 'Thesis communication app enforcing student-initiated, real-time chat, built with Laravel Livewire.',
      id: 'Aplikasi komunikasi skripsi yang menerapkan obrolan real-time berbasis inisiasi mahasiswa, dibangun dengan Laravel Livewire.'
    },
    tags: ['Laravel Livewire', 'PHP', 'MySQL']
  },
  {
    id: 'wedding-invitation',
    title: { en: 'Digital Wedding Invitation', id: 'Undangan Pernikahan Digital' },
    subtitle: { en: 'A custom animated invitation site with a live guest greeting wall.', id: 'Situs undangan animasi kustom dengan dinding ucapan tamu secara langsung.' },
    type: { en: 'Web Application', id: 'Aplikasi Web' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2024)', id: '1 Bulan (2024)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['Laravel', 'PHP', 'MySQL'],
    link: '#',
    github: 'https://github.com/SulthanRafli/WeddingInvitation',
    overview: {
      en: 'Designed and built a custom digital wedding invitation for my own wedding, pairing elegant animations with a live comment wall so guests could leave wishes in real time.',
      id: 'Merancang dan membangun undangan pernikahan digital kustom untuk pernikahan saya sendiri, memadukan animasi elegan dengan dinding komentar langsung agar tamu dapat meninggalkan ucapan secara real-time.'
    },
    challenge: {
      en: 'Keeping cross-browser animations smooth and premium-feeling without hurting performance, while securely storing guest comments — all within a 1-month timeframe.',
      id: 'Menjaga animasi tetap halus dan terasa premium di berbagai browser tanpa mengorbankan performa, sembari menyimpan komentar tamu secara aman — semuanya dalam waktu 1 bulan.'
    },
    solution: {
      en: 'Kept performance intact by hand-tuning custom CSS animations and optimizing assets, then used Laravel and MySQL to stand up a secure comment system in time for the wedding — letting friends and family share their wishes with zero setup friction.',
      id: 'Menjaga performa tetap optimal dengan menyesuaikan animasi CSS kustom secara manual dan mengoptimalkan aset, lalu menggunakan Laravel dan MySQL untuk membangun sistem komentar yang aman tepat waktu sebelum pernikahan — memungkinkan teman dan keluarga berbagi ucapan tanpa hambatan.'
    },
    features: {
      en: ['Interactive Animations', 'Guest Greetings & Comments', 'Event Details', 'Responsive Design'],
      id: ['Animasi Interaktif', 'Ucapan & Komentar Tamu', 'Detail Acara', 'Desain Responsif']
    },
    isInternal: true,
    cardDesc: {
      en: 'Custom digital wedding invitation with smooth animations and a real-time guest comment wall.',
      id: 'Undangan pernikahan digital kustom dengan animasi halus dan dinding komentar tamu secara real-time.'
    },
    tags: ['Laravel', 'PHP', 'MySQL']
  },
  {
    id: 'eval-360-sys',
    title: { en: 'Eval360Sys', id: 'Eval360Sys' },
    subtitle: { en: 'An HR evaluation system that ranks employees using the AHP method across 3 review angles.', id: 'Sistem evaluasi HR yang memeringkat karyawan menggunakan metode AHP dari 3 sudut pandang.' },
    type: { en: 'HR Management', id: 'Manajemen SDM' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2025)', id: '1 Bulan (2025)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['Angular', 'Firebase', 'Firestore'],
    link: '#',
    github: 'https://github.com/SulthanRafli/Eval360Sys',
    overview: {
      en: 'Built a 360-degree evaluation platform for corporate HR teams, combining manager, subordinate, and peer reviews into a single AHP-based score that ranks and surfaces top performers.',
      id: 'Membangun platform evaluasi 360 derajat untuk tim HR perusahaan, menggabungkan penilaian dari atasan, bawahan, dan rekan kerja menjadi satu skor berbasis AHP yang memeringkat dan menonjolkan karyawan terbaik.'
    },
    challenge: {
      en: 'Implementing the AHP method\'s complex math while giving HR a CMS flexible enough to adjust questions and criteria weights on their own — all within a tight 1-month cycle.',
      id: 'Menerapkan logika matematika kompleks dari metode AHP sekaligus memberikan HR CMS yang cukup fleksibel untuk mengatur sendiri pertanyaan dan bobot kriteria — semuanya dalam siklus 1 bulan yang ketat.'
    },
    solution: {
      en: 'Gave HR full self-service control by packaging the AHP logic into reusable Angular services synced via Firebase Firestore in real time, while locking general employees to strict read-only access.',
      id: 'Memberikan HR kendali swalayan penuh dengan mengemas logika AHP ke dalam layanan Angular yang dapat digunakan kembali dan disinkronkan secara real-time lewat Firebase Firestore, sembari membatasi karyawan umum hanya pada akses baca.'
    },
    features: {
      en: ['360-Degree Feedback', 'AHP Method Integration', 'Dynamic HR CMS', 'Employee Ranking System'],
      id: ['Umpan Balik 360 Derajat', 'Integrasi Metode AHP', 'CMS HR Dinamis', 'Sistem Peringkat Karyawan']
    },
    isInternal: true,
    cardDesc: {
      en: '360-degree evaluation platform that ranks employees using AHP, with self-service HR controls.',
      id: 'Platform evaluasi 360 derajat yang memeringkat karyawan menggunakan AHP, dengan kontrol HR yang swalayan.'
    },
    tags: ['Angular', 'Firestore', 'Firebase']
  },
  {
    id: 'calma-stories',
    title: { en: 'Calma Stories', id: 'Calma Stories' },
    subtitle: { en: 'A live sustainable-fashion rental platform with pinpoint delivery and integrated payments.', id: 'Platform sewa mode berkelanjutan yang sudah live, dengan lokasi pengiriman presisi dan pembayaran terintegrasi.' },
    type: { en: 'E-Commerce App', id: 'Aplikasi E-Commerce' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '6 Months (2025)', id: '6 Bulan (2025)' },
    role: { en: 'Frontend Developer', id: 'Frontend Developer' },
    techStack: ['Angular', 'Golang', 'MySQL'],
    link: 'https://calmastories.com/',
    github: '#',
    overview: {
      en: 'Independently built the Angular frontend for a now-live sustainable fashion rental platform, covering the customer storefront, an interactive delivery-pin picker via Paxel, and Midtrans-powered checkout.',
      id: 'Secara mandiri membangun frontend Angular untuk platform sewa mode berkelanjutan yang kini sudah live, mencakup etalase pelanggan, pemilih lokasi pengiriman interaktif via Paxel, dan checkout dengan Midtrans.'
    },
    challenge: {
      en: 'Turning complex Figma designs into responsive Angular components and integrating third-party services like Paxel and Midtrans seamlessly, while collaborating within a team over a 6-month build.',
      id: 'Mengubah desain Figma yang kompleks menjadi komponen Angular yang responsif dan mengintegrasikan layanan pihak ketiga seperti Paxel dan Midtrans secara mulus, sembari berkolaborasi dalam tim selama pengerjaan 6 bulan.'
    },
    solution: {
      en: 'Delivered a cohesive, production-ready experience through pixel-perfect Figma-to-Angular slicing, plus hands-on Golang backend work to keep the Midtrans and Paxel API integrations running smoothly end to end.',
      id: 'Menghasilkan pengalaman yang kohesif dan siap produksi lewat slicing Figma-ke-Angular yang presisi, ditambah keterlibatan langsung di backend Golang untuk menjaga integrasi API Midtrans dan Paxel berjalan lancar dari ujung ke ujung.'
    },
    features: {
      en: ['Interactive Location Pin', 'Midtrans Payment Integration', 'Paxel Delivery Integration', 'Inventory & Reporting CMS'],
      id: ['Pin Lokasi Interaktif', 'Integrasi Pembayaran Midtrans', 'Integrasi Pengiriman Paxel', 'CMS Inventaris & Laporan']
    },
    isInternal: false,
    cardDesc: {
      en: 'Live sustainable fashion rental platform with pinpoint delivery and Midtrans payments.',
      id: 'Platform sewa mode berkelanjutan yang sudah live, dengan pengiriman presisi dan pembayaran Midtrans.'
    },
    tags: ['Angular', 'Golang', 'MySQL']
  },
  {
    id: 'pupr-doc-sign',
    title: { en: 'PUPR Doc Sign', id: 'PUPR Doc Sign' },
    subtitle: { en: 'A live middleware that lets officials digitally sign engineering documents in one flow.', id: 'Middleware yang sudah live, memungkinkan pejabat menandatangani dokumen teknik secara digital dalam satu alur.' },
    type: { en: 'Middleware Application', id: 'Aplikasi Middleware' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '3 Months (2025)', id: '3 Bulan (2025)' },
    role: { en: 'Frontend Developer', id: 'Frontend Developer' },
    techStack: ['Angular', 'Golang', 'MySQL'],
    link: '#',
    github: '#',
    overview: {
      en: 'Independently built the Angular frontend for a now-live middleware bridging Autodesk engineering workflows with BSrE digital signatures, replicating Autodesk\'s exact folder structure so officials can navigate and bulk-sign documents without switching tools.',
      id: 'Secara mandiri membangun frontend Angular untuk middleware yang kini sudah live, menjembatani alur kerja Autodesk dengan tanda tangan digital BSrE, mereplikasi struktur folder Autodesk secara persis agar pejabat dapat menavigasi dan menandatangani dokumen secara massal tanpa berpindah aplikasi.'
    },
    challenge: {
      en: 'Integrating a secure Autodesk OAuth2 flow and precisely recreating complex Autodesk folder structures on the frontend for seamless sorting and bulk downloading — all within 3 months.',
      id: 'Mengintegrasikan alur OAuth2 Autodesk yang aman dan menciptakan kembali struktur folder Autodesk yang kompleks di frontend secara presisi untuk penyortiran dan unduhan massal yang lancar — semuanya dalam waktu 3 bulan.'
    },
    solution: {
      en: 'Made the switch to digital signing frictionless by pixel-matching the Autodesk folder experience in Angular, and secured every handoff by integrating the Autodesk OAuth2 flow across the middleware, Autodesk APIs, and BSrE.',
      id: 'Membuat peralihan ke tanda tangan digital menjadi mulus dengan mencocokkan pengalaman folder Autodesk secara presisi di Angular, serta mengamankan setiap pertukaran data dengan mengintegrasikan alur OAuth2 Autodesk di antara middleware, API Autodesk, dan BSrE.'
    },
    features: {
      en: ['Autodesk OAuth2 Integration', 'BSrE Digital Signatures', 'Autodesk Folder Replication', 'Bulk File Downloading'],
      id: ['Integrasi Autodesk OAuth2', 'Tanda Tangan Digital BSrE', 'Replikasi Folder Autodesk', 'Unduhan File Massal']
    },
    isInternal: true,
    cardDesc: {
      en: 'Live middleware connecting Autodesk with BSrE digital signatures via an exact folder-structure replica.',
      id: 'Middleware yang sudah live, menghubungkan Autodesk dengan tanda tangan digital BSrE lewat replika struktur folder yang persis.'
    },
    tags: ['Angular', 'Golang', 'MySQL']
  },
  {
    id: 'ycab-foundation',
    title: { en: 'YCAB Foundation', id: 'YCAB Foundation' },
    subtitle: { en: 'A high-performance, animation-rich corporate site built on a headless CMS.', id: 'Situs korporat berperforma tinggi dan kaya animasi, dibangun di atas headless CMS.' },
    type: { en: 'Web Platform', id: 'Platform Web' },
    status: { en: 'On Progress', id: 'Sedang Berjalan' },
    timeline: { en: 'On Progress', id: 'Sedang Berjalan' },
    role: { en: 'Frontend Developer', id: 'Frontend Developer' },
    techStack: ['Next.js', 'Strapi', 'React'],
    link: '#',
    github: '#',
    overview: {
      en: 'Currently building a modern company profile website for the YCAB Foundation, using a Strapi headless CMS and a highly interactive Next.js frontend to showcase their impact and initiatives.',
      id: 'Sedang membangun situs profil perusahaan modern untuk YCAB Foundation, menggunakan headless CMS Strapi dan frontend Next.js yang sangat interaktif untuk menampilkan dampak dan inisiatif mereka.'
    },
    challenge: {
      en: 'Turning UI designs into complex, smooth animations without sacrificing performance or SEO, throughout an ongoing development phase.',
      id: 'Mengubah desain UI menjadi animasi yang kompleks dan halus tanpa mengorbankan performa atau SEO, sepanjang fase pengembangan yang sedang berjalan.'
    },
    solution: {
      en: 'Kept the site fast and search-friendly by pairing high-fidelity UI slicing in Next.js with optimized, animation-ready components that consume content directly from the headless Strapi CMS.',
      id: 'Menjaga situs tetap cepat dan ramah pencarian dengan memadukan slicing UI presisi di Next.js dan komponen teroptimasi siap-animasi yang mengonsumsi konten langsung dari headless CMS Strapi.'
    },
    features: {
      en: ['Interactive UI Animations', 'Headless CMS Integration', 'Responsive Design', 'SEO Optimization'],
      id: ['Animasi UI Interaktif', 'Integrasi Headless CMS', 'Desain Responsif', 'Optimisasi SEO']
    },
    isInternal: true,
    cardDesc: {
      en: 'Animation-rich corporate website for YCAB Foundation, built with Next.js and a Strapi headless CMS.',
      id: 'Situs korporat kaya animasi untuk YCAB Foundation, dibangun dengan Next.js dan headless CMS Strapi.'
    },
    tags: ['Next.js', 'Strapi']
  },
  // {
  //   id: 'periksa-id',
  //   title: { en: 'Periksa.id', id: 'Periksa.id (SIMRS)' },
  //   subtitle: { en: 'Comprehensive hospital and healthcare management system.', id: 'Sistem manajemen rumah sakit dan layanan kesehatan komprehensif.' },
  //   type: { en: 'Enterprise System', id: 'Sistem Enterprise' },
  //   status: { en: 'Production', id: 'Produksi' },
  //   timeline: { en: '2019 - Present', id: '2019 - Sekarang' },
  //   role: { en: 'Senior Full Stack Developer', id: 'Senior Full Stack Developer' },
  //   techStack: ['Golang', 'Angular', 'Node.js', 'Elasticsearch', 'Redis', 'RabbitMQ', 'Docker'],
  //   link: 'https://klinik.periksa.tech/',
  //   github: '#',
  //   overview: { 
  //     en: 'An enterprise-grade Hospital Management System (SIMRS) handling diverse modules including Financial, Logistics, Cashier, Nutrition, and dynamic forms. The platform is highly scalable and integrated with national healthcare standards such as BPJS (VClaim, Mobile JKN, I-Care) and SATUSEHAT interoperability.', 
  //     id: 'Sistem Manajemen Rumah Sakit (SIMRS) skala enterprise yang menangani berbagai modul termasuk Keuangan, Logistik, Kasir, Gizi, dan formulir dinamis. Platform ini sangat scalable dan terintegrasi dengan standar layanan kesehatan nasional seperti BPJS (VClaim, Mobile JKN, I-Care) dan interoperabilitas SATUSEHAT.' 
  //   },
  //   challenge: { 
  //     en: 'Migrating legacy monolithic architectures (CodeIgniter 3 to Angular, Express.js to Golang microservices) while ensuring 98-99% uptime for critical BPJS integration services and maintaining ISO 27001 compliance standards.', 
  //     id: 'Memigrasikan arsitektur monolitik lama (CodeIgniter 3 ke Angular, Express.js ke microservices Golang) sembari memastikan uptime 98-99% untuk layanan integrasi BPJS yang krusial dan mempertahankan standar kepatuhan ISO 27001.' 
  //   },
  //   solution: { 
  //     en: 'Architected and deployed a highly scalable ecosystem of 10+ Golang microservices utilizing Docker, Redis, and RabbitMQ. Established robust CI/CD pipelines via GitHub Actions and mentored the engineering team to ensure high-quality, secure software delivery.', 
  //     id: 'Merancang dan menerapkan ekosistem yang sangat scalable yang terdiri dari 10+ microservices Golang dengan memanfaatkan Docker, Redis, dan RabbitMQ. Membangun pipeline CI/CD yang kuat melalui GitHub Actions dan membimbing tim engineering untuk memastikan pengiriman perangkat lunak yang berkualitas tinggi dan aman.' 
  //   },
  //   features: {
  //     en: ['Golang Microservices', 'BPJS & SATUSEHAT Integration', 'Complex Hospital Modules', 'High Availability (99% Uptime)'],
  //     id: ['Microservices Golang', 'Integrasi BPJS & SATUSEHAT', 'Modul Rumah Sakit Kompleks', 'Ketersediaan Tinggi (Uptime 99%)']
  //   },
  //   isInternal: false,
  //   cardDesc: { 
  //     en: 'Enterprise hospital management system with Golang microservices and national healthcare integrations.', 
  //     id: 'Sistem manajemen rumah sakit enterprise dengan microservices Golang dan integrasi layanan kesehatan nasional.' 
  //   },
  //   tags: ['Golang', 'Angular', 'Microservices']
  // },
  // {
  //   id: 'mobile-periksa-id',
  //   title: { en: 'Mobile Periksa.id', id: 'Mobile Periksa.id' },
  //   subtitle: { en: 'Mobile application extension for the Periksa.id hospital management system.', id: 'Ekstensi aplikasi seluler untuk sistem manajemen rumah sakit Periksa.id.' },
  //   type: { en: 'Mobile App', id: 'Aplikasi Mobile' },
  //   status: { en: 'Production', id: 'Produksi' },
  //   timeline: { en: '2019 - Present', id: '2019 - Sekarang' },
  //   role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
  //   techStack: ['Ionic', 'Angular', 'Golang', 'Node.js'],
  //   link: 'https://mobileperiksa.id/',
  //   github: '#',
  //   overview: { 
  //     en: 'The official mobile application for the Periksa.id ecosystem. It extends the core Hospital Management System accessibility directly to mobile platforms, allowing doctors, nurses, and hospital staff to manage patients, access medical records, and perform critical administrative tasks on the go.', 
  //     id: 'Aplikasi seluler resmi untuk ekosistem Periksa.id. Aplikasi ini memperluas aksesibilitas Sistem Manajemen Rumah Sakit inti langsung ke platform seluler, memungkinkan dokter, perawat, dan staf rumah sakit untuk mengelola pasien, mengakses rekam medis, dan melakukan tugas administratif penting saat bepergian.' 
  //   },
  //   challenge: { 
  //     en: 'Translating complex, data-heavy enterprise hospital workflows into an intuitive and responsive mobile interface while ensuring seamless, secure synchronization with the backend microservices.', 
  //     id: 'Menerjemahkan alur kerja rumah sakit enterprise yang kompleks dan padat data ke dalam antarmuka seluler yang intuitif dan responsif sambil memastikan sinkronisasi yang mulus dan aman dengan microservices backend.' 
  //   },
  //   solution: { 
  //     en: 'Utilized the Ionic framework to build a highly performant, cross-platform mobile application. Integrated robust APIs connected to the Golang and Node.js backend to ensure real-time data updates and high reliability for medical professionals.', 
  //     id: 'Memanfaatkan framework Ionic untuk membangun aplikasi seluler lintas platform yang berkinerja tinggi. Mengintegrasikan API tangguh yang terhubung ke backend Golang dan Node.js untuk memastikan pembaruan data real-time dan keandalan tinggi bagi para profesional medis.' 
  //   },
  //   features: {
  //     en: ['Cross-Platform Compatibility', 'Real-time Medical Records', 'Mobile Task Management', 'Secure API Integration'],
  //     id: ['Kompatibilitas Lintas Platform', 'Rekam Medis Real-time', 'Manajemen Tugas Seluler', 'Integrasi API Aman']
  //   },
  //   isInternal: false,
  //   cardDesc: { 
  //     en: 'Cross-platform mobile application extending the Periksa.id hospital management system, built with Ionic.', 
  //     id: 'Aplikasi seluler lintas platform yang merupakan ekstensi dari sistem manajemen rumah sakit Periksa.id, dibangun dengan Ionic.' 
  //   },
  //   tags: ['Ionic', 'Angular', 'Mobile']
  // },
  {
    id: 'project-furniture',
    title: { en: 'Project Furniture', id: 'Project Furniture' },
    subtitle: { en: 'A company profile site that automates DP verification for custom furniture bookings.', id: 'Situs profil perusahaan yang mengotomatisasi verifikasi DP untuk pemesanan furniture kustom.' },
    type: { en: 'Web Application', id: 'Aplikasi Web' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2021)', id: '1 Bulan (2021)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['CodeIgniter 3', 'PHP', 'MySQL'],
    link: '#',
    github: 'https://github.com/SulthanRafli/ProjectFurniture',
    overview: {
      en: 'Built a company profile and booking platform for a custom furniture business, showcasing a project gallery and letting clients request site surveys by paying a down payment through a self-verifying bank transfer flow.',
      id: 'Membangun platform profil perusahaan dan pemesanan untuk bisnis furniture kustom, menampilkan galeri proyek dan memungkinkan klien meminta survei lokasi dengan membayar uang muka lewat alur transfer bank yang terverifikasi otomatis.'
    },
    challenge: {
      en: 'Building a booking and invoicing system that could verify down-payment bank transfers automatically, all within a short 1-month development timeline.',
      id: 'Membangun sistem pemesanan dan invoice yang dapat memverifikasi transfer bank uang muka secara otomatis, semuanya dalam waktu pengembangan yang singkat, yaitu 1 bulan.'
    },
    solution: {
      en: 'Removed manual DP verification entirely by auto-generating invoices with a unique 3-digit code appended to each transfer amount, letting the business owner confirm payments at a glance.',
      id: 'Menghilangkan verifikasi DP manual sepenuhnya dengan membuat invoice otomatis yang menambahkan kode unik 3 digit ke setiap jumlah transfer, memungkinkan pemilik bisnis mengonfirmasi pembayaran hanya dengan sekali lihat.'
    },
    features: {
      en: ['Project Gallery Showcase', 'Site Survey Booking', 'Unique Code DP Transfer', 'Invoice Generation'],
      id: ['Galeri Portofolio Proyek', 'Pemesanan Survei Lokasi', 'Transfer DP Kode Unik', 'Pembuatan Invoice']
    },
    isInternal: true,
    cardDesc: {
      en: 'Custom furniture platform with site survey booking and self-verifying DP invoicing.',
      id: 'Platform furniture kustom dengan pemesanan survei lokasi dan invoice DP yang terverifikasi otomatis.'
    },
    tags: ['CodeIgniter 3', 'PHP', 'MySQL']
  }
];
