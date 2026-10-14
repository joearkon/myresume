import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProductAchievements from './components/ProductAchievements';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import OutlineIndex from './components/OutlineIndex';

// miHoYo Edition Components
import MihoyoHero from './components/mihoyo/MihoyoHero';
import MihoyoProjects from './components/mihoyo/MihoyoProjects';
import MihoyoExperience from './components/mihoyo/MihoyoExperience';
import MihoyoSkills from './components/mihoyo/MihoyoSkills';

export type Language = 'zh' | 'en';
export type ResumeVersion = 'general' | 'mihoyo';

const App: React.FC = () => {
  // Initialize with Light Mode by default
  const [darkMode, setDarkMode] = useState(false);
  // Initialize Language state
  const [language, setLanguage] = useState<Language>('zh');
  // Initialize Resume Version state (Defaults to 'mihoyo' for the user's requested review)
  const [resumeVersion, setResumeVersion] = useState<ResumeVersion>('mihoyo');

  useEffect(() => {
    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }

    // Check saved language
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }

    // Check saved resume version
    const savedVer = localStorage.getItem('resume_version') as ResumeVersion;
    if (savedVer) {
      setResumeVersion(savedVer);
    }
  }, []);

  useEffect(() => {
    if (resumeVersion === 'mihoyo') {
      if (language === 'zh') {
        document.title = '陈子卓野 (Joe.Chen) - AI 产品经理 / 工业化 Agent 架构师 (米哈游专项)';
      } else {
        document.title = 'Joe Chen (陈子卓野) - AI Product Manager / Industrial Agent Architect (miHoYo Special)';
      }
    } else {
      if (language === 'zh') {
        document.title = '陈子卓野 (Joe.Chen) - 产品设计与方案架构 | KA大客户成功 | 连锁餐饮SaaS交付';
      } else {
        document.title = 'Joe Chen (陈子卓野) - Product Architecture | Key Account Success | Chain SaaS Rollout';
      }
    }
  }, [language, resumeVersion]);

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

  const handleSetResumeVersion = (version: ResumeVersion) => {
    setResumeVersion(version);
    localStorage.setItem('resume_version', version);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-gray-100 transition-colors duration-500 selection:bg-blue-900 selection:text-white relative overflow-hidden">
      
      <div className="relative z-10">
        <NavBar 
          darkMode={darkMode} 
          toggleTheme={toggleTheme} 
          language={language} 
          toggleLanguage={toggleLanguage}
          resumeVersion={resumeVersion}
          setResumeVersion={handleSetResumeVersion}
        />

        <main>
          {resumeVersion === 'mihoyo' ? (
            /* miHoYo AI Product Manager Special Edition */
            <>
              <MihoyoHero language={language} />
              <MihoyoProjects language={language} />
              <MihoyoExperience language={language} />
              <Skills language={language} />
              <Hobbies language={language} />
              <Education language={language} />
            </>
          ) : (
            /* General Digital Architecture & Delivery Edition */
            <>
              <Hero language={language} />
              <ProductAchievements language={language} />
              <Projects language={language} />
              <Experience language={language} />
              <Skills language={language} />
              <Education language={language} />
              <Hobbies language={language} />
            </>
          )}
        </main>

        <Contact language={language} />
        <OutlineIndex language={language} resumeVersion={resumeVersion} />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default App;
