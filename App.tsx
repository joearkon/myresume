import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import ChatWidget from './components/ChatWidget';
import Contact from './components/Contact';

export type Language = 'zh' | 'en';

const App: React.FC = () => {
  // Initialize with true (Dark Mode) by default
  const [darkMode, setDarkMode] = useState(true);
  // Initialize Language state
  const [language, setLanguage] = useState<Language>('zh');

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    // Check saved language
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    const newLang = language === 'zh' ? 'en' : 'zh';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-gray-100 transition-colors duration-500 selection:bg-gunpla-blue selection:text-white">
      <NavBar 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
        language={language} 
        toggleLanguage={toggleLanguage} 
      />
      <main>
        <Hero language={language} />
        <Experience language={language} />
        <Education language={language} />
        <Hobbies language={language} />
      </main>
      <Contact language={language} />
      <ChatWidget language={language} />
    </div>
  );
};

export default App;