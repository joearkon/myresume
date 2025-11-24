import React from 'react';
import { Language } from '../App';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    zh: {
      tagline: '全链路数字化专家',
      name: '陈子卓野',
      role1: '技术架构',
      role2: '项目交付',
      role3: '客户增长',
      info1Title: '基本信息',
      info1Val: '1986年10月 | 汉族',
      info2Title: '现居 / 政治面貌',
      info2Val: '上海 | 中共党员',
      info3Title: '学历',
      info3Val: '本科',
      info4Title: '经验年限',
      info4Val: '10余年 +',
      desc: (
        <>
          从代码到底层架构，从单项目交付到大客户运营。我不仅懂技术实现，更懂如何将技术转化为商业价值。
          曾主导 <span className="text-slate-900 dark:text-white font-bold">喜茶、DQ、棒约翰</span> 等头部品牌的数字化落地。
        </>
      ),
      btnResume: '查看完整履历',
      btnContact: '联系方式'
    },
    en: {
      tagline: 'Digital Transformation Expert',
      name: 'Joe.Chen',
      role1: 'Tech Arch',
      role2: 'Delivery',
      role3: 'Growth',
      info1Title: 'Basic Info',
      info1Val: 'Oct 1986 | Han',
      info2Title: 'Location / Status',
      info2Val: 'Shanghai | Party Member',
      info3Title: 'Education',
      info3Val: 'Bachelor',
      info4Title: 'Experience',
      info4Val: '10 Years +',
      desc: (
        <>
          From coding to architecture, from project delivery to key account growth. 
          I bridge the gap between technical implementation and business value.
          Led digital transformation for top brands like <span className="text-slate-900 dark:text-white font-bold">Heytea, DQ, and Papa John's</span>.
        </>
      ),
      btnResume: 'View Experience',
      btnContact: 'Contact Me'
    }
  };

  const t = content[language];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 pt-28 pb-12 md:pt-20 transition-colors duration-500">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none transition-opacity duration-500">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="z-10 text-center max-w-5xl w-full">
        
        {/* Avatar Section */}
        <div className="mb-8 relative inline-block animate-fade-in-up">
             <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-full blur-lg opacity-40 dark:opacity-60 animate-pulse-glow"></div>
             <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1.5 bg-white dark:bg-slate-800 shadow-2xl">
                <img 
                    src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEKY6tpIA8Tk6OK3QdiWsYI1WRZtPNRYAACiToAAlVBAVWDSr2SC4BhWjYE.jpg" 
                    alt="陈子卓野 (Joe Chen)" 
                    className="w-full h-full rounded-full object-cover border-2 border-slate-100 dark:border-slate-700 hover:scale-105 transition-transform duration-500"
                />
             </div>
        </div>

        <div className="mb-6 inline-block animate-float" style={{ animationDelay: '0.1s' }}>
            <span className="bg-blue-50/80 dark:bg-gunpla-blue/20 text-blue-600 dark:text-gunpla-blue border border-blue-200 dark:border-gunpla-blue px-4 py-1 rounded-full text-sm font-tech tracking-widest uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.2)] dark:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-colors duration-300">
              {t.tagline}
            </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-600 to-slate-800 dark:from-gunpla-white dark:via-gunpla-blue dark:to-gunpla-white animate-fade-in-up transition-all duration-500" style={{ animationDelay: '0.2s' }}>
          {t.name}
        </h1>
        
        <div className="text-2xl md:text-4xl font-tech font-bold text-slate-400 dark:text-slate-600 mb-8 tracking-[0.3em] uppercase animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
          {language === 'zh' ? 'Joe.Chen' : '陈子卓野'}
        </div>
        
        <h2 className="text-xl md:text-3xl font-light text-slate-600 dark:text-gray-300 mb-10 opacity-0 animate-fade-in-up flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 transition-colors duration-300" style={{ animationDelay: '0.4s' }}>
          <span>{t.role1}</span> <span className="hidden md:inline text-gunpla-blue">→</span>
          <span>{t.role2}</span> <span className="hidden md:inline text-gunpla-red">→</span>
          <span>{t.role3}</span>
        </h2>

        {/* Personal Info Card */}
        <div className="max-w-4xl mx-auto mb-12 opacity-0 animate-fade-in-up grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-base" style={{ animationDelay: '0.5s' }}>
            <div className="bg-white/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-3 rounded-lg backdrop-blur-sm transition-colors duration-300 shadow-sm">
                <div className="text-slate-500 dark:text-gray-400 text-xs mb-1">{t.info1Title}</div>
                <div className="text-slate-900 dark:text-white font-bold">{t.info1Val}</div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-3 rounded-lg backdrop-blur-sm transition-colors duration-300 shadow-sm">
                <div className="text-slate-500 dark:text-gray-400 text-xs mb-1">{t.info2Title}</div>
                <div className="text-slate-900 dark:text-white font-bold">{t.info2Val}</div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-3 rounded-lg backdrop-blur-sm transition-colors duration-300 shadow-sm">
                <div className="text-slate-500 dark:text-gray-400 text-xs mb-1">{t.info3Title}</div>
                <div className="text-slate-900 dark:text-white font-bold">{t.info3Val}</div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-3 rounded-lg backdrop-blur-sm transition-colors duration-300 shadow-sm">
                <div className="text-slate-500 dark:text-gray-400 text-xs mb-1">{t.info4Title}</div>
                <div className="text-yellow-600 dark:text-gunpla-yellow font-bold">{t.info4Val}</div>
            </div>
        </div>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in-up leading-relaxed transition-colors duration-300" style={{ animationDelay: '0.7s' }}>
          {t.desc}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-fade-in-up items-center" style={{ animationDelay: '0.9s' }}>
          <a href="#experience" className="px-8 py-4 bg-gunpla-blue text-white font-bold rounded hover:bg-blue-600 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] clip-path-slope">
            {t.btnResume}
          </a>
          <a href="#contact" className="px-8 py-4 border border-slate-300 dark:border-gray-600 text-slate-600 dark:text-gray-300 font-bold rounded hover:border-gunpla-yellow hover:text-yellow-600 dark:hover:text-gunpla-yellow transition-all">
            {t.btnContact}
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;