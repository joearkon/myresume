import React, { useState, useEffect } from 'react';
import { Language } from '../App';

interface NavBarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  language: Language;
  toggleLanguage: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ darkMode, toggleTheme, language, toggleLanguage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    zh: {
      home: '首页',
      projects: '项目成就', // Added
      experience: '职业生涯',
      skills: '专业技能', // Added
      education: '教育背景',
      hobbies: '个人兴趣',
      contact: '联系我'
    },
    en: {
      home: 'Home',
      projects: 'Projects', // Added
      experience: 'Experience',
      skills: 'Skills', // Added
      education: 'Education',
      hobbies: 'Hobbies',
      contact: 'Contact'
    }
  };

  const t = translations[language];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="font-tech font-bold text-xl text-slate-800 dark:text-white tracking-wider transition-colors duration-300 flex items-center gap-3">
          <span>{language === 'zh' ? '陈' : 'Joe'}<span className="text-gunpla-blue">{language === 'zh' ? '子卓野' : '.Chen'}</span></span>
          <span className="hidden lg:inline text-slate-300 dark:text-slate-700">|</span>
          <span className="hidden lg:block text-lg text-slate-500 dark:text-slate-400 font-medium tracking-widest">
            {language === 'zh' ? 'Joe.Chen' : '陈子卓野'}
          </span>
        </div>
        
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex gap-6 lg:gap-8">
            {[
              { name: t.home, link: '#home' },
              { name: t.projects, link: '#projects' }, // Added
              { name: t.experience, link: '#experience' },
              { name: t.skills, link: '#skills' }, // Added
              { name: t.education, link: '#education' },
              { name: t.hobbies, link: '#hobbies' },
              { name: t.contact, link: '#contact' }
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.link} 
                className="text-sm text-slate-600 dark:text-gray-400 hover:text-gunpla-blue dark:hover:text-gunpla-blue font-medium tracking-wide transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gunpla-blue group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Language Toggle - Segmented Control Style */}
            <button
              onClick={toggleLanguage}
              className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-full p-1 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-gunpla-blue dark:hover:border-gunpla-blue transition-all"
              title={language === 'zh' ? 'Switch to English' : '切换到中文'}
            >
              <span className={`px-2 py-1 rounded-full text-xs font-bold transition-all min-w-[32px] text-center ${language === 'zh' ? 'bg-white dark:bg-slate-600 shadow-sm text-gunpla-blue dark:text-white' : 'text-slate-400 dark:text-slate-500'}`}>
                中
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-bold transition-all min-w-[32px] text-center ${language === 'en' ? 'bg-white dark:bg-slate-600 shadow-sm text-gunpla-blue dark:text-white' : 'text-slate-400 dark:text-slate-500'}`}>
                En
              </span>
            </button>

            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-gunpla-yellow hover:scale-110 transition-all duration-300 shadow-sm border border-slate-200 dark:border-slate-700"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                // Moon Icon (Dark Mode)
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              ) : (
                // Sun Icon (Light Mode)
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;