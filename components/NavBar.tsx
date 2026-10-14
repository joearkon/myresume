import React, { useState, useEffect } from 'react';
import { Language, ResumeVersion } from '../App';

interface NavBarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  language: Language;
  toggleLanguage: () => void;
  resumeVersion: ResumeVersion;
  setResumeVersion: (version: ResumeVersion) => void;
}

const NavBar: React.FC<NavBarProps> = ({ 
  darkMode, 
  toggleTheme, 
  language, 
  toggleLanguage,
  resumeVersion,
  setResumeVersion
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    zh: {
      general: {
        home: '首页',
        productAchievements: '产品成就',
        projects: '核心交付',
        experience: '职业生涯',
        skills: '专业技能',
        education: '教育背景',
        hobbies: '个人兴趣',
        contact: '联系我'
      },
      mihoyo: {
        home: '求职意向',
        projects: '代表项目',
        experience: '工作经历',
        skills: '专业能力',
        hobbies: '游戏经历',
        education: '教育背景',
        contact: '联系我'
      },
      versionGeneral: '通用数字化架构',
      versionMihoyo: 'AI 产品经理',
      switchTip: '切换简历版本'
    },
    en: {
      general: {
        home: 'Home',
        productAchievements: 'Products',
        projects: 'Delivery',
        experience: 'Experience',
        skills: 'Skills',
        education: 'Education',
        hobbies: 'Hobbies',
        contact: 'Contact'
      },
      mihoyo: {
        home: 'Overview',
        projects: 'Projects',
        experience: 'Experience',
        skills: 'Capabilities',
        hobbies: 'Gaming',
        education: 'Education',
        contact: 'Contact'
      },
      versionGeneral: 'General Architecture',
      versionMihoyo: 'AI Product Manager',
      switchTip: 'Switch Resume Target'
    }
  };

  const t = translations[language];

  const generalNavLinks = [
    { name: t.general.home, link: '#home' },
    { name: t.general.productAchievements, link: '#product-achievements' },
    { name: t.general.projects, link: '#projects' },
    { name: t.general.experience, link: '#experience' },
    { name: t.general.skills, link: '#skills' },
    { name: t.general.education, link: '#education' },
    { name: t.general.hobbies, link: '#hobbies' },
    { name: t.general.contact, link: '#contact' }
  ];

  const mihoyoNavLinks = [
    { name: t.mihoyo.home, link: '#mihoyo-home' },
    { name: t.mihoyo.projects, link: '#mihoyo-projects' },
    { name: t.mihoyo.experience, link: '#mihoyo-experience' },
    { name: t.mihoyo.skills, link: '#skills' },
    { name: t.mihoyo.hobbies, link: '#hobbies' },
    { name: t.mihoyo.education, link: '#education' },
    { name: t.mihoyo.contact, link: '#contact' }
  ];

  const activeLinks = resumeVersion === 'mihoyo' ? mihoyoNavLinks : generalNavLinks;

  const handleVersionChange = (newVer: ResumeVersion) => {
    if (newVer === resumeVersion) return;
    setResumeVersion(newVer);
    // Smoothly scroll to top of that version
    const targetId = newVer === 'mihoyo' ? 'mihoyo-home' : 'home';
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        const offset = 80;
        const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <nav 
      id="navbar"
      data-navbar="true"
      className={`fixed top-0 w-full z-40 transition-all duration-300 print:hidden print:invisible print:h-0 print:max-h-0 print:overflow-hidden print:m-0 print:p-0 print:border-none ${
      scrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3 shadow-sm' 
        : 'bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm py-4 border-b border-slate-100 dark:border-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-2">
        
        {/* Left: Brand Name & Version Switcher */}
        <div className="flex items-center gap-3">
          <div className="font-bold text-lg text-slate-800 dark:text-white tracking-wider flex items-center gap-2 shrink-0">
            <span>{language === 'zh' ? '陈' : 'Joe'}<span className="text-blue-700 dark:text-blue-400">{language === 'zh' ? '子卓野' : '.Chen'}</span></span>
          </div>

          {/* Version Switcher Pills */}
          <div 
            className="flex items-center p-1 bg-slate-100 dark:bg-slate-800/90 rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-inner"
            title={t.switchTip}
          >
            <button
              onClick={() => handleVersionChange('general')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                resumeVersion === 'general'
                  ? 'bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-300 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <span>📋</span>
              <span className="hidden sm:inline">{t.versionGeneral}</span>
              <span className="sm:hidden">{language === 'zh' ? '通用' : 'Gen'}</span>
            </button>

            <button
              onClick={() => handleVersionChange('mihoyo')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                resumeVersion === 'mihoyo'
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-sm ring-1 ring-blue-400/30'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <span>🎮</span>
              <span>{t.versionMihoyo}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse hidden md:inline"></span>
            </button>
          </div>
        </div>
        
        {/* Right: Section Links & Utilities */}
        <div className="flex items-center gap-3 lg:gap-5">
          <div className="hidden xl:flex gap-4 2xl:gap-6">
            {activeLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.link} 
                className="text-xs text-slate-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium tracking-wide transition-colors relative group py-1"
              >
                {item.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-700 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-full p-0.5 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-blue-700 dark:hover:border-blue-400 transition-all"
              title={language === 'zh' ? 'Switch to English' : '切换到中文'}
            >
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all ${language === 'zh' ? 'bg-white dark:bg-slate-600 shadow-sm text-blue-700 dark:text-white' : 'text-slate-400 dark:text-slate-500'}`}>
                中
              </span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all ${language === 'en' ? 'bg-white dark:bg-slate-600 shadow-sm text-blue-700 dark:text-white' : 'text-slate-400 dark:text-slate-500'}`}>
                En
              </span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:scale-105 transition-all duration-300 shadow-sm border border-slate-200 dark:border-slate-700"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
