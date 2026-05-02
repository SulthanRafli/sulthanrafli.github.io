import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Languages } from 'lucide-react';

export default function Navbar({ isDark, toggleTheme, lang, toggleLang }) {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: { en: 'Home', id: 'Beranda' }, id: 'home' },
    { label: { en: 'About', id: 'Tentang' }, id: 'about' },
    { label: { en: 'Experience', id: 'Pengalaman' }, id: 'experience' },
    { label: { en: 'Projects', id: 'Proyek' }, id: 'projects' },
    { label: { en: 'Services', id: 'Layanan' }, id: 'services' },
    { label: { en: 'Contact', id: 'Kontak' }, id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset for the sticky navbar

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-panel rounded-full px-4 py-2 flex items-center gap-2 shadow-lg"
    >
      <ul className="flex items-center gap-1">
        {navItems.map((item) => (
          <li key={item.id}>
            <a 
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full py-2 px-4 flex items-center gap-2 ${activeSection === item.id ? 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
            >              
              {item.label[lang]}
            </a>
          </li>
        ))}
      </ul>
      
      <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2"></div>

      <div className="flex items-center gap-2">
        <button 
          onClick={toggleLang}
          className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full py-2 px-4"
        >
          <Languages size={16} />
          <span>{lang === 'en' ? 'ID' : 'EN'}</span>
        </button>

        <button 
          onClick={toggleTheme}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full p-2"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </motion.nav>
  );
}
