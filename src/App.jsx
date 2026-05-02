import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'id' : 'en');
  };

  return (
    <div className="min-h-screen bg-dot-pattern relative transition-colors duration-300">
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<Home isDark={isDark} toggleTheme={toggleTheme} lang={lang} toggleLang={toggleLang} />} />
        <Route path="/project/:id" element={<ProjectDetail isDark={isDark} toggleTheme={toggleTheme} lang={lang} toggleLang={toggleLang} />} />
      </Routes>
    </div>
  );
}

export default App;
