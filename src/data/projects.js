export const projectsData = [
  {
    id: 'lost-and-found',
    title: { en: 'Lost and Found', id: 'Lost and Found' },
    subtitle: { en: 'Application for finding lost items in an organization.', id: 'Aplikasi untuk menemukan barang hilang di suatu organisasi.' },
    type: { en: 'Mobile App', id: 'Aplikasi Mobile' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2020)', id: '1 Bulan (2020)' },
    role: { en: 'Android Developer', id: 'Android Developer' },
    techStack: ['Android Studio', 'Firebase Realtime Database'],
    link: 'https://github.com/SulthanRafli/LostAndFound',
    github: 'https://github.com/SulthanRafli/LostAndFound',
    overview: { 
      en: 'A mobile application built as a final year college project in 2020. It serves as a centralized platform to report and find lost items within an organization or place, such as a university campus.', 
      id: 'Aplikasi seluler yang dibangun sebagai proyek tugas akhir kuliah pada tahun 2020. Aplikasi ini berfungsi sebagai tempat untuk melaporkan dan menemukan barang hilang di dalam organisasi atau tempat, seperti kampus.' 
    },
    challenge: { 
      en: 'Implementing a reliable real-time chat feature within a strictly limited development timeframe of only 1 month.', 
      id: 'Menerapkan fitur obrolan (chat) karena perlu real-time dalam waktu pembuatan yang sangat terbatas, yaitu hanya 1 bulan.' 
    },
    solution: { 
      en: 'Utilized Firebase Realtime Database to efficiently build and integrate the real-time chat functionality, enabling seamless communication between users while meeting the strict deadline.', 
      id: 'Memanfaatkan Firebase Realtime Database untuk membangun dan mengintegrasikan fungsionalitas obrolan secara efisien, sehingga komunikasi antar pengguna dapat berjalan real-time dan tepat waktu sesuai target.' 
    },
    features: {
      en: ['Lost Item Reporting', 'Real-time Chat', 'Item Search', 'User Authentication'],
      id: ['Pelaporan Barang Hilang', 'Obrolan Real-time', 'Pencarian Barang', 'Autentikasi Pengguna']
    },
    isInternal: true,
    cardDesc: { 
      en: 'Final year college project in 2020. An Android app to find lost items featuring real-time chat.', 
      id: 'Proyek tugas akhir kuliah tahun 2020. Aplikasi Android untuk menemukan barang hilang di suatu tempat dengan fitur chat.' 
    },
    tags: ['Android Studio', 'Firebase']
  },
  {
    id: 'rusun-muka-kuning',
    title: { en: 'Rusun Muka Kuning', id: 'Rusun Muka Kuning' },
    subtitle: { en: 'Web application for managing flats and rental transactions.', id: 'Aplikasi web untuk mengelola rusun dan transaksi sewa.' },
    type: { en: 'Web Application', id: 'Aplikasi Web' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2022)', id: '1 Bulan (2022)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['CodeIgniter 3', 'PHP', 'MySQL'],
    link: '#',
    github: 'https://github.com/SulthanRafli/RusunMukaKuning',
    overview: { 
      en: 'A comprehensive web application designed to manage flats, operators, rental prices, and service rental transactions. This system was built to significantly facilitate and streamline the daily operations of flat owners.', 
      id: 'Aplikasi web komprehensif yang dirancang untuk mengelola unit rusun, operator, harga sewa, dan transaksi sewa layanan. Sistem ini dibangun untuk memudahkan pekerjaan dan operasional harian para pemilik rusun.' 
    },
    challenge: { 
      en: 'Designing a robust database architecture to handle complex relationships between operators, flats, and transactions, all while delivering a fully functional system within a strict 1-month deadline.', 
      id: 'Merancang arsitektur database yang kuat untuk menangani hubungan kompleks antara operator, unit rusun, dan transaksi, sekaligus memberikan sistem yang berfungsi penuh dalam tenggat waktu 1 bulan yang ketat.' 
    },
    solution: { 
      en: 'Leveraged CodeIgniter 3\'s MVC framework alongside a well-normalized MySQL database to accelerate development. This approach ensured data integrity and allowed for rapid implementation of all required features on time.', 
      id: 'Memanfaatkan arsitektur MVC dari CodeIgniter 3 bersama dengan database MySQL yang terstruktur dengan baik untuk mempercepat pengembangan. Pendekatan ini memastikan integritas data dan memungkinkan implementasi cepat dari semua fitur tepat pada waktunya.' 
    },
    features: {
      en: ['Flat Management', 'Operator Management', 'Rental Pricing Control', 'Transaction Tracking'],
      id: ['Manajemen Unit Rusun', 'Manajemen Operator', 'Pengaturan Harga Sewa', 'Pelacakan Transaksi']
    },
    isInternal: true,
    cardDesc: { 
      en: 'Web application for managing flats, operators, and rental transactions.', 
      id: 'Aplikasi web untuk mengelola unit rusun, operator, dan transaksi sewa.' 
    },
    tags: ['CodeIgniter 3', 'PHP', 'MySQL']
  },
  {
    id: 'badminton-court',
    title: { en: 'Badminton Court', id: 'Badminton Court' },
    subtitle: { en: 'Web application for badminton court rental and invoicing.', id: 'Aplikasi web untuk penyewaan lapangan badminton dan pembuatan invoice.' },
    type: { en: 'Web Application', id: 'Aplikasi Web' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2022)', id: '1 Bulan (2022)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['CodeIgniter 3', 'PHP', 'MySQL'],
    link: '#',
    github: 'https://github.com/SulthanRafli/BadmintonCourt',
    overview: { 
      en: 'A web application built to facilitate the rental of badminton courts. The system handles court scheduling and generates invoices for users, while actual payments are completed on-site.', 
      id: 'Aplikasi web yang dibangun untuk memfasilitasi penyewaan lapangan badminton. Sistem ini menangani penjadwalan lapangan dan membuat invoice untuk pengguna, sementara pembayaran aktual diselesaikan langsung di tempat.' 
    },
    challenge: { 
      en: 'Developing a reliable scheduling system to prevent double-booking of courts and ensuring the invoice generation was seamless, all within a tight 1-month timeframe.', 
      id: 'Mengembangkan sistem penjadwalan yang andal untuk mencegah pemesanan ganda lapangan dan memastikan pembuatan invoice berjalan lancar, semua dalam jangka waktu 1 bulan yang ketat.' 
    },
    solution: { 
      en: 'Utilized CodeIgniter 3 to rapidly develop the application. Implemented robust database constraints for scheduling and a streamlined automated invoice generator to meet the strict deadline.', 
      id: 'Memanfaatkan CodeIgniter 3 untuk mengembangkan aplikasi dengan cepat. Menerapkan struktur database yang kuat untuk penjadwalan dan pembuat invoice otomatis untuk memenuhi tenggat waktu yang ketat.' 
    },
    features: {
      en: ['Court Scheduling', 'Invoice Generation', 'Availability Checking', 'Booking Management'],
      id: ['Penjadwalan Lapangan', 'Pembuatan Invoice', 'Pengecekan Ketersediaan', 'Manajemen Pemesanan']
    },
    isInternal: true,
    cardDesc: { 
      en: 'Web app for badminton court rentals with automated invoice generation for on-site payments.', 
      id: 'Aplikasi web untuk sewa lapangan badminton dengan pembuatan invoice otomatis untuk pembayaran di tempat.' 
    },
    tags: ['CodeIgniter 3', 'PHP', 'MySQL']
  },
  {
    id: 'burgers-app',
    title: { en: 'Burgers', id: 'Burgers' },
    subtitle: { en: 'Web application for online burger ordering.', id: 'Aplikasi web untuk pemesanan burger secara online.' },
    type: { en: 'E-Commerce', id: 'E-Commerce' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2022)', id: '1 Bulan (2022)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['CodeIgniter 3', 'PHP', 'MySQL'],
    link: '#',
    github: 'https://github.com/SulthanRafli/Burgers',
    overview: { 
      en: 'An online food ordering platform specifically designed for a burger restaurant. The app features a shopping cart, invoice generation, and a bank transfer payment system with unique 3-digit codes for easy verification.', 
      id: 'Platform pemesanan makanan online yang dirancang khusus untuk restoran burger. Aplikasi ini memiliki fitur keranjang belanja, cetak invoice, dan sistem pembayaran transfer bank dengan kode unik 3 digit untuk verifikasi yang mudah.' 
    },
    challenge: { 
      en: 'Implementing a seamless shopping cart experience and a reliable automated payment verification system using unique 3-digit codes within a strict 1-month development window.', 
      id: 'Menerapkan pengalaman keranjang belanja yang lancar dan sistem verifikasi pembayaran otomatis yang andal menggunakan kode unik 3 digit dalam waktu pengembangan 1 bulan yang ketat.' 
    },
    solution: { 
      en: 'Used CodeIgniter 3 to efficiently handle cart sessions and database operations. Implemented a logic to generate a unique 3-digit code appended to the total transaction amount to track bank transfers accurately.', 
      id: 'Menggunakan CodeIgniter 3 untuk menangani sesi keranjang belanja dan operasi database secara efisien. Menerapkan logika untuk menghasilkan kode unik 3 digit yang ditambahkan ke jumlah total transaksi untuk melacak transfer bank secara akurat.' 
    },
    features: {
      en: ['Shopping Cart', 'Invoice Generation', 'Unique Code Bank Transfer', 'Order Management'],
      id: ['Keranjang Belanja', 'Cetak Invoice', 'Transfer Bank Kode Unik', 'Manajemen Pesanan']
    },
    isInternal: true,
    cardDesc: { 
      en: 'Online burger ordering app featuring a shopping cart and unique code bank transfer payments.', 
      id: 'Aplikasi pesan burger online yang dilengkapi keranjang belanja dan pembayaran transfer bank dengan kode unik.' 
    },
    tags: ['CodeIgniter 3', 'PHP', 'MySQL']
  },
  {
    id: 'ukm-trilogi',
    title: { en: 'UKM Trilogi', id: 'UKM Trilogi' },
    subtitle: { en: 'Information and registration platform for university student clubs.', id: 'Platform informasi dan pendaftaran untuk Unit Kegiatan Mahasiswa (UKM) universitas.' },
    type: { en: 'Web Platform', id: 'Platform Web' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2022)', id: '1 Bulan (2022)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['Angular', 'Firebase', 'Firestore'],
    link: '#',
    github: 'https://github.com/SulthanRafli/UkmTrilogi',
    overview: { 
      en: 'A web platform built for Universitas Trilogi to centralize information about student clubs (UKM). The app allows students to explore clubs and register within a specific timeframe governed by a countdown system, and includes a comprehensive CMS for administrators to manage club and student data.', 
      id: 'Platform web yang dibangun untuk Universitas Trilogi guna memusatkan informasi mengenai Unit Kegiatan Mahasiswa (UKM). Aplikasi ini memungkinkan mahasiswa untuk menjelajahi UKM dan mendaftar dalam rentang waktu tertentu yang diatur oleh sistem hitung mundur (countdown), serta dilengkapi dengan CMS komprehensif bagi administrator untuk mengelola data UKM dan mahasiswa.' 
    },
    challenge: { 
      en: 'Building a dynamic registration system synchronized with a countdown timer and developing a fully functional CMS for real-time data management, all within a tight 1-month deadline.', 
      id: 'Membangun sistem pendaftaran dinamis yang disinkronkan dengan timer hitung mundur dan mengembangkan CMS yang berfungsi penuh untuk manajemen data real-time, semuanya dalam tenggat waktu 1 bulan yang ketat.' 
    },
    solution: { 
      en: 'Leveraged Angular to build a responsive, component-based user interface and CMS. Utilized Firebase Firestore for real-time data syncing, seamlessly handling the countdown logic to reliably lock registrations once the timer expires.', 
      id: 'Memanfaatkan Angular untuk membangun antarmuka pengguna berbasis komponen yang responsif beserta CMS-nya. Menggunakan Firebase Firestore untuk sinkronisasi data real-time, menangani logika hitung mundur dengan lancar untuk mengunci pendaftaran dengan andal setelah timer berakhir.' 
    },
    features: {
      en: ['Club Directory', 'Time-Limited Registration', 'Student CMS', 'Club Management CMS'],
      id: ['Direktori UKM', 'Pendaftaran Berbatas Waktu', 'CMS Mahasiswa', 'CMS Manajemen UKM']
    },
    isInternal: true,
    cardDesc: { 
      en: 'University club platform featuring a countdown-based registration system and comprehensive CMS.', 
      id: 'Platform UKM universitas yang dilengkapi sistem pendaftaran berbasis hitung mundur dan CMS komprehensif.' 
    },
    tags: ['Angular', 'Firestore', 'Firebase']
  },
  {
    id: 'kuisioner-ptun',
    title: { en: 'Kuisioner PTUN Makassar', id: 'Kuisioner PTUN Makassar' },
    subtitle: { en: 'Community satisfaction survey application for the State Administrative Court.', id: 'Aplikasi survei kepuasan masyarakat untuk Pengadilan Tata Usaha Negara.' },
    type: { en: 'Web Application', id: 'Aplikasi Web' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2022)', id: '1 Bulan (2022)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['CodeIgniter 3', 'PHP', 'MySQL'],
    link: '#',
    github: 'https://github.com/SulthanRafli/Kuisioner',
    overview: { 
      en: 'A web-based questionnaire application developed for the Makassar State Administrative Court (PTUN) to conduct Community Satisfaction Surveys (Kuisioner IPAK and Kuisioner IKM). The application features a dynamic CMS for admins to manage questions and scoring, and includes an accessibility feature with text-to-speech functionality targeted at elderly users.', 
      id: 'Aplikasi kuesioner berbasis web yang dikembangkan untuk Pengadilan Tata Usaha Negara (PTUN) Makassar guna melaksanakan Survei Kepuasan Masyarakat (Kuisioner IPAK dan Kuisioner IKM). Aplikasi ini memiliki CMS dinamis bagi admin untuk mengelola pertanyaan dan penilaian, serta mencakup fitur aksesibilitas text-to-speech yang diperuntukkan bagi pengguna lansia.' 
    },
    challenge: { 
      en: 'Creating a highly accessible user interface with an integrated text-to-speech feature and building a flexible CMS that allows dynamic management of survey structures within a tight 1-month timeline.', 
      id: 'Menciptakan antarmuka pengguna yang sangat mudah diakses dengan fitur text-to-speech yang terintegrasi dan membangun CMS fleksibel yang memungkinkan manajemen struktur survei secara dinamis dalam batas waktu 1 bulan yang ketat.' 
    },
    solution: { 
      en: 'Utilized CodeIgniter 3 to rapidly develop the application and its dynamic CMS. Implemented JavaScript-based text-to-speech APIs to ensure the survey content is easily understandable for elderly users, completing all requirements on schedule.', 
      id: 'Memanfaatkan CodeIgniter 3 untuk mengembangkan aplikasi beserta CMS dinamisnya dengan cepat. Menerapkan API text-to-speech berbasis JavaScript untuk memastikan konten survei mudah dipahami oleh pengguna lansia, menyelesaikan semua persyaratan sesuai jadwal.' 
    },
    features: {
      en: ['Dynamic CMS for Questions', 'Text-to-Speech Accessibility', 'Survey Scoring System', 'IPAK & IKM Questionnaires'],
      id: ['CMS Dinamis untuk Pertanyaan', 'Aksesibilitas Text-to-Speech', 'Sistem Penilaian Survei', 'Kuesioner IPAK & IKM']
    },
    isInternal: true,
    cardDesc: { 
      en: 'Survey application for PTUN Makassar featuring dynamic questionnaires and text-to-speech for accessibility.', 
      id: 'Aplikasi survei untuk PTUN Makassar yang menampilkan kuesioner dinamis dan fitur text-to-speech untuk aksesibilitas.' 
    },
    tags: ['CodeIgniter 3', 'PHP', 'MySQL']
  },
  {
    id: 'least-square-petshop',
    title: { en: 'Least Square Petshop', id: 'Prediksi Penjualan Petshop' },
    subtitle: { en: 'Sales prediction application using the Least Square Method.', id: 'Aplikasi prediksi penjualan menggunakan Metode Least Square.' },
    type: { en: 'Data Analytics', id: 'Analitik Data' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2022)', id: '1 Bulan (2022)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['CodeIgniter 3', 'PHP', 'MySQL'],
    link: '#',
    github: 'https://github.com/SulthanRafli/MetodeLeastSquare',
    overview: { 
      en: 'A web application developed for a pet shop to predict future sales of specific items in specific months. The system utilizes the Least Square Method based on historical sales data to generate accurate forecasts.', 
      id: 'Aplikasi web yang dikembangkan untuk pet shop guna memprediksi penjualan barang tertentu di bulan-bulan mendatang. Sistem ini menggunakan Metode Least Square berdasarkan data penjualan historis untuk menghasilkan prakiraan yang akurat.' 
    },
    challenge: { 
      en: 'Implementing the mathematical logic of the Least Square algorithm into PHP and ensuring accurate prediction calculations for various items across different timeframes, all within a strict 1-month development window.', 
      id: 'Menerapkan logika matematika dari algoritma Least Square ke dalam PHP dan memastikan perhitungan prediksi yang akurat untuk berbagai barang di berbagai rentang waktu, semuanya dalam tenggat waktu pengembangan 1 bulan yang ketat.' 
    },
    solution: { 
      en: 'Used CodeIgniter 3 to build a robust backend that efficiently processes historical data from MySQL. Structured the Least Square algorithm into reusable modules to calculate trend equations and project accurate future sales.', 
      id: 'Menggunakan CodeIgniter 3 untuk membangun backend kuat yang secara efisien memproses data historis dari MySQL. Menyusun algoritma Least Square menjadi modul yang dapat digunakan kembali untuk menghitung persamaan tren dan memproyeksikan penjualan masa depan secara akurat.' 
    },
    features: {
      en: ['Least Square Calculation', 'Sales Data Management', 'Item-specific Forecasting', 'Monthly Prediction Reports'],
      id: ['Perhitungan Least Square', 'Manajemen Data Penjualan', 'Prakiraan per Barang', 'Laporan Prediksi Bulanan']
    },
    isInternal: true,
    cardDesc: { 
      en: 'Sales prediction app for a pet shop utilizing the Least Square Method based on historical data.', 
      id: 'Aplikasi prediksi penjualan untuk pet shop yang memanfaatkan Metode Least Square berdasarkan data historis.' 
    },
    tags: ['CodeIgniter 3', 'PHP', 'MySQL']
  },
  {
    id: 'skripsi-chat',
    title: { en: 'SkripsiChat', id: 'SkripsiChat' },
    subtitle: { en: 'Communication platform for thesis students and lecturers.', id: 'Platform komunikasi untuk mahasiswa skripsi dan dosen pembimbing.' },
    type: { en: 'Web Application', id: 'Aplikasi Web' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2024)', id: '1 Bulan (2024)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['Laravel Livewire', 'PHP', 'MySQL'],
    link: '#',
    github: 'https://github.com/SulthanRafli/SkripsiChat',
    overview: { 
      en: 'A dedicated chat application designed to facilitate communication between students working on their thesis and their supervising lecturers. The system enforces a specific hierarchy where only students can initiate conversations, ensuring lecturers are only responding to active student queries.', 
      id: 'Aplikasi obrolan khusus yang dirancang untuk memfasilitasi komunikasi antara mahasiswa yang sedang mengerjakan skripsi dan dosen pembimbing mereka. Sistem ini menerapkan hierarki khusus di mana hanya mahasiswa yang dapat memulai percakapan, memastikan dosen hanya merespons pertanyaan aktif dari mahasiswa.' 
    },
    challenge: { 
      en: 'Building a real-time chat interface and implementing strict role-based access control rules to prevent lecturers from initiating chats, all within a constrained 1-month development timeline.', 
      id: 'Membangun antarmuka obrolan real-time dan menerapkan aturan kontrol akses berbasis peran yang ketat untuk mencegah dosen memulai obrolan, semuanya dalam batas waktu pengembangan 1 bulan.' 
    },
    solution: { 
      en: 'Utilized Laravel Livewire to create a seamless, real-time reactive chat interface without writing extensive custom JavaScript. Implemented robust authorization policies on the backend to enforce the student-first chat initiation rule securely.', 
      id: 'Memanfaatkan Laravel Livewire untuk membuat antarmuka obrolan reaktif real-time yang mulus tanpa perlu banyak menulis JavaScript kustom. Menerapkan kebijakan otorisasi yang kuat di backend untuk menegakkan aturan inisiasi obrolan mahasiswa-pertama secara aman.' 
    },
    features: {
      en: ['Real-time Messaging', 'Role-based Restrictions', 'Thesis Group Management', 'Chat History'],
      id: ['Pesan Real-time', 'Pembatasan Berbasis Peran', 'Manajemen Grup Skripsi', 'Riwayat Obrolan']
    },
    isInternal: true,
    cardDesc: { 
      en: 'Thesis communication app featuring role-restricted real-time chat built with Laravel Livewire.', 
      id: 'Aplikasi komunikasi skripsi dengan fitur obrolan real-time yang dibatasi peran, dibangun dengan Laravel Livewire.' 
    },
    tags: ['Laravel Livewire', 'PHP', 'MySQL']
  },
  {
    id: 'wedding-invitation',
    title: { en: 'Digital Wedding Invitation', id: 'Undangan Pernikahan Digital' },
    subtitle: { en: 'Personal digital wedding invitation with interactive features.', id: 'Undangan pernikahan digital pribadi dengan fitur interaktif.' },
    type: { en: 'Web Application', id: 'Aplikasi Web' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2024)', id: '1 Bulan (2024)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['Laravel', 'PHP', 'MySQL'],
    link: '#',
    github: 'https://github.com/SulthanRafli/WeddingInvitation',
    overview: { 
      en: 'A personal project to create a beautiful, custom digital wedding invitation for my own wedding. The website features elegant animations to create a memorable experience for guests and includes a dynamic comment section for guests to leave their wishes and greetings.', 
      id: 'Proyek pribadi untuk membuat undangan pernikahan digital kustom yang indah untuk pernikahan saya sendiri. Situs web ini menampilkan animasi elegan untuk menciptakan pengalaman yang berkesan bagi tamu dan mencakup bagian komentar dinamis bagi tamu untuk meninggalkan harapan dan ucapan selamat.' 
    },
    challenge: { 
      en: 'Designing smooth, cross-browser compatible animations that feel premium without affecting performance, while also building a reliable backend to securely store and display guest comments within a 1-month timeframe.', 
      id: 'Merancang animasi yang halus dan kompatibel di berbagai browser yang terasa premium tanpa memengaruhi kinerja, sekaligus membangun backend yang andal untuk menyimpan dan menampilkan komentar tamu secara aman dalam jangka waktu 1 bulan.' 
    },
    solution: { 
      en: 'Utilized custom CSS animations and optimized assets for a seamless frontend experience. Leveraged Laravel and MySQL to rapidly build a secure and efficient comment system, allowing friends and family to easily share their joy.', 
      id: 'Memanfaatkan animasi CSS kustom dan mengoptimalkan aset untuk pengalaman frontend yang mulus. Menggunakan Laravel dan MySQL untuk dengan cepat membangun sistem komentar yang aman dan efisien, memungkinkan teman dan keluarga untuk dengan mudah berbagi kebahagiaan mereka.' 
    },
    features: {
      en: ['Interactive Animations', 'Guest Greetings & Comments', 'Event Details', 'Responsive Design'],
      id: ['Animasi Interaktif', 'Ucapan & Komentar Tamu', 'Detail Acara', 'Desain Responsif']
    },
    isInternal: true,
    cardDesc: { 
      en: 'Personal digital wedding invitation featuring beautiful animations and a guest comment board.', 
      id: 'Undangan pernikahan digital pribadi yang menampilkan animasi indah dan papan komentar tamu.' 
    },
    tags: ['Laravel', 'PHP', 'MySQL']
  },
  {
    id: 'eval-360-sys',
    title: { en: 'Eval360Sys', id: 'Eval360Sys' },
    subtitle: { en: '360-degree employee evaluation system using AHP method.', id: 'Sistem evaluasi karyawan 360 derajat menggunakan metode AHP.' },
    type: { en: 'HR Management', id: 'Manajemen SDM' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2025)', id: '1 Bulan (2025)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['Angular', 'Firebase', 'Firestore'],
    link: '#',
    github: 'https://github.com/SulthanRafli/Eval360Sys',
    overview: { 
      en: 'A 360-degree employee evaluation system built for corporate HR departments. The platform facilitates performance reviews involving managers, subordinates, and peers. It utilizes the Analytical Hierarchy Process (AHP) method to process scores and rank employees to identify top performers.', 
      id: 'Sistem evaluasi karyawan 360 derajat yang dibangun untuk departemen SDM perusahaan. Platform ini memfasilitasi tinjauan kinerja yang melibatkan atasan, bawahan, dan rekan kerja. Sistem ini menggunakan metode Analytical Hierarchy Process (AHP) untuk memproses nilai dan mengurutkan karyawan untuk mengidentifikasi yang terbaik.' 
    },
    challenge: { 
      en: 'Implementing the complex mathematical logic of the AHP method while ensuring a dynamic, highly customizable CMS for HR to manage questions and criteria weights, all within a tight 1-month development cycle.', 
      id: 'Menerapkan logika matematika kompleks dari metode AHP sekaligus memastikan CMS yang dinamis dan sangat dapat disesuaikan bagi HR untuk mengelola pertanyaan dan bobot kriteria, semuanya dalam siklus pengembangan 1 bulan yang ketat.' 
    },
    solution: { 
      en: 'Leveraged Angular to build a robust reactive frontend and implemented the AHP logic into reusable services. Utilized Firebase Firestore to provide real-time data syncing, allowing HR to dynamically update questions and weights, while strictly managing read-only access for general employees.', 
      id: 'Memanfaatkan Angular untuk membangun frontend reaktif yang kuat dan mengimplementasikan logika AHP ke dalam layanan (services) yang dapat digunakan kembali. Memanfaatkan Firebase Firestore untuk menyediakan sinkronisasi data real-time, memungkinkan HR untuk memperbarui pertanyaan dan bobot secara dinamis, sembari mengelola akses hanya-baca secara ketat untuk karyawan umum.' 
    },
    features: {
      en: ['360-Degree Feedback', 'AHP Method Integration', 'Dynamic HR CMS', 'Employee Ranking System'],
      id: ['Umpan Balik 360 Derajat', 'Integrasi Metode AHP', 'CMS HR Dinamis', 'Sistem Peringkat Karyawan']
    },
    isInternal: true,
    cardDesc: { 
      en: '360-degree employee evaluation platform featuring dynamic HR controls and AHP-based ranking.', 
      id: 'Platform evaluasi karyawan 360 derajat yang menampilkan kontrol HR dinamis dan peringkat berbasis AHP.' 
    },
    tags: ['Angular', 'Firestore', 'Firebase']
  },
  {
    id: 'calma-stories',
    title: { en: 'Calma Stories', id: 'Calma Stories' },
    subtitle: { en: 'Sustainable fashion rental platform for women.', id: 'Platform penyewaan pakaian mode berkelanjutan untuk wanita.' },
    type: { en: 'E-Commerce App', id: 'Aplikasi E-Commerce' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '6 Months', id: '6 Bulan' },
    role: { en: 'Frontend Developer', id: 'Frontend Developer' },
    techStack: ['Angular', 'Golang', 'MySQL'],
    link: 'https://calmastories.com/',
    github: '#',
    overview: { 
      en: 'A comprehensive sustainable fashion platform that allows women to rent designer outfits. The system includes an e-commerce storefront, an interactive location pin feature for precise deliveries via Paxel integration, and Midtrans payment gateway processing. It also features a CMS for managing inventory and generating useful reports.', 
      id: 'Platform mode berkelanjutan komprehensif yang memungkinkan wanita menyewa pakaian desainer. Sistem ini mencakup etalase e-commerce, fitur pin lokasi interaktif untuk pengiriman presisi via integrasi Paxel, dan pemrosesan gateway pembayaran Midtrans. Terdapat juga CMS untuk mengelola inventaris dan menghasilkan laporan yang berguna.' 
    },
    challenge: { 
      en: 'Translating complex Figma designs into responsive Angular components and integrating third-party services like Paxel and Midtrans seamlessly, while collaborating effectively within a team over a 6-month period.', 
      id: 'Menerjemahkan desain Figma yang kompleks ke dalam komponen Angular yang responsif dan mengintegrasikan layanan pihak ketiga seperti Paxel dan Midtrans secara mulus, sembari berkolaborasi secara efektif dalam tim selama periode 6 bulan.' 
    },
    solution: { 
      en: 'Focused on pixel-perfect Figma slicing and built a highly interactive frontend with Angular. Handled partial Golang backend tasks to ensure smooth API integration with the Midtrans payment gateway and Paxel delivery system, resulting in a cohesive user experience.', 
      id: 'Fokus pada slicing Figma yang pixel-perfect dan membangun frontend interaktif dengan Angular. Menangani sebagian tugas backend Golang untuk memastikan integrasi API yang lancar dengan gateway pembayaran Midtrans dan sistem pengiriman Paxel, menghasilkan pengalaman pengguna yang kohesif.' 
    },
    features: {
      en: ['Interactive Location Pin', 'Midtrans Payment Integration', 'Paxel Delivery Integration', 'Inventory & Reporting CMS'],
      id: ['Pin Lokasi Interaktif', 'Integrasi Pembayaran Midtrans', 'Integrasi Pengiriman Paxel', 'CMS Inventaris & Laporan']
    },
    isInternal: false,
    cardDesc: { 
      en: 'Sustainable fashion rental platform featuring location pins, Paxel delivery, and Midtrans payments.', 
      id: 'Platform sewa pakaian mode berkelanjutan yang menampilkan pin lokasi, pengiriman Paxel, dan pembayaran Midtrans.' 
    },
    tags: ['Angular', 'Golang', 'MySQL']
  },
  {
    id: 'pupr-doc-sign',
    title: { en: 'PUPR Doc Sign', id: 'PUPR Doc Sign' },
    subtitle: { en: 'Middleware bridging Autodesk engineering workflows with BSrE digital signatures.', id: 'Middleware yang menjembatani alur kerja Autodesk dengan layanan tanda tangan digital BSrE.' },
    type: { en: 'Middleware Application', id: 'Aplikasi Middleware' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '3 Months', id: '3 Bulan' },
    role: { en: 'Frontend Developer', id: 'Frontend Developer' },
    techStack: ['Angular', 'Golang', 'MySQL'],
    link: '#',
    github: '#',
    overview: { 
      en: 'A middleware application developed to bridge Autodesk workflows with the BSrE digital signature system. It enables officials to digitally sign engineering documents directly within their workflows. The application replicates the exact Autodesk file structure, allowing users to navigate and bulk download files from various subfolders.', 
      id: 'Aplikasi middleware yang dikembangkan untuk menjembatani alur kerja Autodesk dengan sistem tanda tangan digital BSrE. Aplikasi ini memungkinkan pejabat untuk menandatangani dokumen teknik secara digital langsung dalam alur kerja mereka. Aplikasi ini mereplikasi struktur file Autodesk, memungkinkan pengguna untuk menavigasi dan mengunduh file dari berbagai subfolder.' 
    },
    challenge: { 
      en: 'Integrating the secure Autodesk OAuth2 authentication flow and accurately recreating complex Autodesk folder structures on the frontend to allow seamless sorting and downloading, all within a 3-month timeline.', 
      id: 'Mengintegrasikan alur autentikasi OAuth2 Autodesk yang aman dan menciptakan kembali struktur folder Autodesk yang kompleks di frontend untuk memungkinkan penyortiran dan pengunduhan yang lancar, semuanya dalam waktu 3 bulan.' 
    },
    solution: { 
      en: 'Focused on high-fidelity UI slicing with Angular to perfectly recreate the Autodesk folder experience. Successfully integrated the Autodesk OAuth2 flow to ensure secure communication between the middleware, Autodesk APIs, and the BSrE system.', 
      id: 'Fokus pada slicing UI dengan Angular untuk menciptakan kembali pengalaman folder Autodesk secara sempurna. Berhasil mengintegrasikan alur OAuth2 Autodesk untuk memastikan komunikasi yang aman antara middleware, API Autodesk, dan sistem BSrE.' 
    },
    features: {
      en: ['Autodesk OAuth2 Integration', 'BSrE Digital Signatures', 'Autodesk Folder Replication', 'Bulk File Downloading'],
      id: ['Integrasi Autodesk OAuth2', 'Tanda Tangan Digital BSrE', 'Replikasi Folder Autodesk', 'Unduhan File Massal']
    },
    isInternal: true,
    cardDesc: { 
      en: 'Middleware connecting Autodesk with BSrE digital signatures, featuring exact Autodesk folder replication.', 
      id: 'Middleware yang menghubungkan Autodesk dengan tanda tangan digital BSrE, menampilkan replikasi struktur folder Autodesk.' 
    },
    tags: ['Angular', 'Golang', 'MySQL']
  },
  {
    id: 'ycab-foundation',
    title: { en: 'YCAB Foundation', id: 'YCAB Foundation' },
    subtitle: { en: 'Company profile website with interactive animations.', id: 'Situs web profil perusahaan dengan animasi interaktif.' },
    type: { en: 'Web Platform', id: 'Platform Web' },
    status: { en: 'On Progress', id: 'Sedang Berjalan' },
    timeline: { en: 'On Progress', id: 'Sedang Berjalan' },
    role: { en: 'Frontend Developer', id: 'Frontend Developer' },
    techStack: ['Next.js', 'Strapi', 'React'],
    link: '#',
    github: '#',
    overview: { 
      en: 'A modern company profile website currently being developed for the YCAB Foundation. The platform serves to showcase their impact and initiatives using a headless CMS architecture powered by Strapi and a highly interactive Next.js frontend.', 
      id: 'Situs web profil perusahaan modern yang saat ini sedang dikembangkan untuk YCAB Foundation. Platform ini berfungsi untuk menampilkan dampak dan inisiatif mereka menggunakan arsitektur headless CMS yang didukung oleh Strapi dan frontend Next.js yang sangat interaktif.' 
    },
    challenge: { 
      en: 'Translating UI designs into complex, smooth animations on the frontend while ensuring the website remains highly performant and SEO-friendly during the ongoing development phase.', 
      id: 'Menerjemahkan desain UI ke dalam animasi yang kompleks dan halus di frontend sambil memastikan situs web tetap berkinerja tinggi dan ramah SEO selama fase pengembangan yang sedang berlangsung.' 
    },
    solution: { 
      en: 'Focusing on high-quality UI slicing utilizing Next.js capabilities to implement seamless animations and optimized components, while successfully consuming APIs from the headless Strapi CMS.', 
      id: 'Berfokus pada slicing UI berkualitas tinggi dengan memanfaatkan kemampuan Next.js untuk mengimplementasikan animasi yang mulus dan komponen yang dioptimalkan, sekaligus berhasil mengonsumsi API dari headless CMS Strapi.' 
    },
    features: {
      en: ['Interactive UI Animations', 'Headless CMS Integration', 'Responsive Design', 'SEO Optimization'],
      id: ['Animasi UI Interaktif', 'Integrasi Headless CMS', 'Desain Responsif', 'Optimisasi SEO']
    },
    isInternal: true,
    cardDesc: { 
      en: 'Company profile website for YCAB Foundation featuring complex animations built with Next.js and Strapi.', 
      id: 'Situs web profil perusahaan untuk YCAB Foundation yang menampilkan animasi kompleks dibangun dengan Next.js dan Strapi.' 
    },
    tags: ['Next.js', 'Strapi']
  },
  {
    id: 'periksa-id',
    title: { en: 'Periksa.id', id: 'Periksa.id (SIMRS)' },
    subtitle: { en: 'Comprehensive hospital and healthcare management system.', id: 'Sistem manajemen rumah sakit dan layanan kesehatan komprehensif.' },
    type: { en: 'Enterprise System', id: 'Sistem Enterprise' },
    status: { en: 'Production', id: 'Produksi' },
    timeline: { en: '2019 - Present', id: '2019 - Sekarang' },
    role: { en: 'Senior Full Stack Developer', id: 'Senior Full Stack Developer' },
    techStack: ['Golang', 'Angular', 'Node.js', 'Elasticsearch', 'Redis', 'RabbitMQ', 'Docker'],
    link: 'https://klinik.periksa.tech/',
    github: '#',
    overview: { 
      en: 'An enterprise-grade Hospital Management System (SIMRS) handling diverse modules including Financial, Logistics, Cashier, Nutrition, and dynamic forms. The platform is highly scalable and integrated with national healthcare standards such as BPJS (VClaim, Mobile JKN, I-Care) and SATUSEHAT interoperability.', 
      id: 'Sistem Manajemen Rumah Sakit (SIMRS) skala enterprise yang menangani berbagai modul termasuk Keuangan, Logistik, Kasir, Gizi, dan formulir dinamis. Platform ini sangat scalable dan terintegrasi dengan standar layanan kesehatan nasional seperti BPJS (VClaim, Mobile JKN, I-Care) dan interoperabilitas SATUSEHAT.' 
    },
    challenge: { 
      en: 'Migrating legacy monolithic architectures (CodeIgniter 3 to Angular, Express.js to Golang microservices) while ensuring 98-99% uptime for critical BPJS integration services and maintaining ISO 27001 compliance standards.', 
      id: 'Memigrasikan arsitektur monolitik lama (CodeIgniter 3 ke Angular, Express.js ke microservices Golang) sembari memastikan uptime 98-99% untuk layanan integrasi BPJS yang krusial dan mempertahankan standar kepatuhan ISO 27001.' 
    },
    solution: { 
      en: 'Architected and deployed a highly scalable ecosystem of 10+ Golang microservices utilizing Docker, Redis, and RabbitMQ. Established robust CI/CD pipelines via GitHub Actions and mentored the engineering team to ensure high-quality, secure software delivery.', 
      id: 'Merancang dan menerapkan ekosistem yang sangat scalable yang terdiri dari 10+ microservices Golang dengan memanfaatkan Docker, Redis, dan RabbitMQ. Membangun pipeline CI/CD yang kuat melalui GitHub Actions dan membimbing tim engineering untuk memastikan pengiriman perangkat lunak yang berkualitas tinggi dan aman.' 
    },
    features: {
      en: ['Golang Microservices', 'BPJS & SATUSEHAT Integration', 'Complex Hospital Modules', 'High Availability (99% Uptime)'],
      id: ['Microservices Golang', 'Integrasi BPJS & SATUSEHAT', 'Modul Rumah Sakit Kompleks', 'Ketersediaan Tinggi (Uptime 99%)']
    },
    isInternal: false,
    cardDesc: { 
      en: 'Enterprise hospital management system with Golang microservices and national healthcare integrations.', 
      id: 'Sistem manajemen rumah sakit enterprise dengan microservices Golang dan integrasi layanan kesehatan nasional.' 
    },
    tags: ['Golang', 'Angular', 'Microservices']
  },
  {
    id: 'mobile-periksa-id',
    title: { en: 'Mobile Periksa.id', id: 'Mobile Periksa.id' },
    subtitle: { en: 'Mobile application extension for the Periksa.id hospital management system.', id: 'Ekstensi aplikasi seluler untuk sistem manajemen rumah sakit Periksa.id.' },
    type: { en: 'Mobile App', id: 'Aplikasi Mobile' },
    status: { en: 'Production', id: 'Produksi' },
    timeline: { en: '2019 - Present', id: '2019 - Sekarang' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['Ionic', 'Angular', 'Golang', 'Node.js'],
    link: 'https://mobileperiksa.id/',
    github: '#',
    overview: { 
      en: 'The official mobile application for the Periksa.id ecosystem. It extends the core Hospital Management System accessibility directly to mobile platforms, allowing doctors, nurses, and hospital staff to manage patients, access medical records, and perform critical administrative tasks on the go.', 
      id: 'Aplikasi seluler resmi untuk ekosistem Periksa.id. Aplikasi ini memperluas aksesibilitas Sistem Manajemen Rumah Sakit inti langsung ke platform seluler, memungkinkan dokter, perawat, dan staf rumah sakit untuk mengelola pasien, mengakses rekam medis, dan melakukan tugas administratif penting saat bepergian.' 
    },
    challenge: { 
      en: 'Translating complex, data-heavy enterprise hospital workflows into an intuitive and responsive mobile interface while ensuring seamless, secure synchronization with the backend microservices.', 
      id: 'Menerjemahkan alur kerja rumah sakit enterprise yang kompleks dan padat data ke dalam antarmuka seluler yang intuitif dan responsif sambil memastikan sinkronisasi yang mulus dan aman dengan microservices backend.' 
    },
    solution: { 
      en: 'Utilized the Ionic framework to build a highly performant, cross-platform mobile application. Integrated robust APIs connected to the Golang and Node.js backend to ensure real-time data updates and high reliability for medical professionals.', 
      id: 'Memanfaatkan framework Ionic untuk membangun aplikasi seluler lintas platform yang berkinerja tinggi. Mengintegrasikan API tangguh yang terhubung ke backend Golang dan Node.js untuk memastikan pembaruan data real-time dan keandalan tinggi bagi para profesional medis.' 
    },
    features: {
      en: ['Cross-Platform Compatibility', 'Real-time Medical Records', 'Mobile Task Management', 'Secure API Integration'],
      id: ['Kompatibilitas Lintas Platform', 'Rekam Medis Real-time', 'Manajemen Tugas Seluler', 'Integrasi API Aman']
    },
    isInternal: false,
    cardDesc: { 
      en: 'Cross-platform mobile application extending the Periksa.id hospital management system, built with Ionic.', 
      id: 'Aplikasi seluler lintas platform yang merupakan ekstensi dari sistem manajemen rumah sakit Periksa.id, dibangun dengan Ionic.' 
    },
    tags: ['Ionic', 'Angular', 'Mobile']
  },
  {
    id: 'project-furniture',
    title: { en: 'Project Furniture', id: 'Project Furniture' },
    subtitle: { en: 'Company profile and custom furniture booking platform.', id: 'Profil perusahaan dan platform pemesanan furniture kustom.' },
    type: { en: 'Web Application', id: 'Aplikasi Web' },
    status: { en: 'Completed', id: 'Selesai' },
    timeline: { en: '1 Month (2021)', id: '1 Bulan (2021)' },
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    techStack: ['CodeIgniter 3', 'PHP', 'MySQL'],
    link: '#',
    github: 'https://github.com/SulthanRafli/ProjectFurniture',
    overview: { 
      en: 'A company profile website for a custom furniture business. The platform showcases a gallery of completed projects, such as gaming rooms and living room decor. It allows users to request site surveys by paying a down payment (DP) via bank transfer with a unique validation code. Full payment is collected only after the project is completed.', 
      id: 'Situs web profil perusahaan untuk bisnis furniture kustom. Platform ini menampilkan galeri proyek yang telah selesai, seperti dekorasi ruang gaming dan ruang tamu. Platform ini memungkinkan pengguna untuk meminta survei lokasi dengan membayar uang muka (DP) melalui transfer bank dengan kode validasi unik. Pembayaran penuh baru ditagih setelah proyek selesai dikerjakan.' 
    },
    challenge: { 
      en: 'Developing a reliable booking and invoicing system that integrates unique bank transfer codes for DP verification, all within a short 1-month development timeline.', 
      id: 'Mengembangkan sistem pemesanan dan pembuatan invoice yang andal yang mengintegrasikan kode transfer bank unik untuk verifikasi DP, semuanya dalam waktu pengembangan yang singkat, yaitu 1 bulan.' 
    },
    solution: { 
      en: 'Utilized CodeIgniter 3 to rapidly build the company profile and ordering system. Implemented logic to automatically generate invoices and append unique 3-digit codes to the DP transfer amounts, streamlining the verification process for the business owner.', 
      id: 'Memanfaatkan CodeIgniter 3 untuk membangun profil perusahaan dan sistem pemesanan dengan cepat. Menerapkan logika untuk secara otomatis membuat invoice dan menambahkan 3 digit kode unik ke jumlah transfer DP, sehingga memperlancar proses verifikasi bagi pemilik bisnis.' 
    },
    features: {
      en: ['Project Gallery Showcase', 'Site Survey Booking', 'Unique Code DP Transfer', 'Invoice Generation'],
      id: ['Galeri Portofolio Proyek', 'Pemesanan Survei Lokasi', 'Transfer DP Kode Unik', 'Pembuatan Invoice']
    },
    isInternal: true,
    cardDesc: { 
      en: 'Custom furniture showcase platform with site survey bookings and automated DP invoicing.', 
      id: 'Platform pameran furniture kustom dengan pemesanan survei lokasi dan pembuatan invoice DP otomatis.' 
    },
    tags: ['CodeIgniter 3', 'PHP', 'MySQL']
  }
];
