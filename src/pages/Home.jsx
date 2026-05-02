import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Contact from '../components/Contact';
import FloatingButton from '../components/FloatingButton';

export default function Home({ isDark, toggleTheme, lang, toggleLang }) {
  return (
    <>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} lang={lang} toggleLang={toggleLang} />
      
      <main className="relative z-10">
        <Hero lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Services lang={lang} />
        <Contact lang={lang} />
      </main>

      <FloatingButton />

      <footer className="text-center py-8 text-[var(--fg-muted)] text-sm border-t border-gray-200 dark:border-slate-700">
        <p>© {new Date().getFullYear()} Sulthan Rafli. {lang === 'en' ? 'All rights reserved.' : 'Hak cipta dilindungi.'}</p>
      </footer>
    </>
  );
}
