import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Languages, Menu, X } from 'lucide-react';

export default function Navbar({ isDark, toggleTheme, lang, toggleLang }) {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-panel rounded-full px-4 py-2 flex items-center justify-between shadow-lg w-[90%] md:w-auto"
    >
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-1">
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
      
      {/* Mobile Hamburger */}
      <div className="flex md:hidden items-center mr-auto">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-600 dark:text-gray-400 p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2"></div>

      {/* Toggles */}
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

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-4 glass-panel rounded-2xl p-4 flex flex-col gap-2 shadow-xl md:hidden"
          >
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 rounded-xl py-3 px-4 flex items-center gap-2 ${activeSection === item.id ? 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
              >              
                {item.label[lang]}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
