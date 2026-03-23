import React from 'react';
import { Language } from '../App';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    zh: {
      tagline: '全链路数字化专家',
      tagline2: 'AIGC 新媒体运营',
      name: '陈子卓野',
      role1: '技术架构',
      role2: '项目交付',
      role3: '客户增长',
      info1Title: '基本信息',
      info1Val: '1986年10月 | 汉族',
      info2Title: '现居 / 政治面貌',
      info2Val: '上海 | 中共党员',
      info3Title: '学历',
      info3Val: '本科 (上海海事)',
      info4Title: '经验年限',
      info4Val: '10余年 +',
      desc: (
        <>
          从代码到底层架构，从单项目交付到大客户运营。我不仅懂技术实现，更懂如何将技术转化为商业价值。
          曾主导 <span className="text-slate-900 dark:text-white font-bold">喜茶、DQ、棒约翰</span> 等头部品牌的数字化落地。<br className="hidden md:block mt-2" />
          目前正全面拥抱 AI 时代，深度探索 <span className="text-purple-600 dark:text-purple-400 font-bold">AIGC 与新媒体运营</span>。熟练运用 Gemini、Nano Banana、ComfyUI 等前沿 AI 工具进行图文创作与短视频剪辑，在小红书和抖音打造高粘性个人 IP 矩阵，并独立开发了基于大模型的量化交易助手。
        </>
      ),
      btnResume: '查看完整履历',
      btnContact: '联系方式',
      btnExport: '导出 PDF 简历'
    },
    en: {
      tagline: 'Digital Transformation Expert',
      tagline2: 'AIGC Social Media',
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
          Led digital transformation for top brands like <span className="text-slate-900 dark:text-white font-bold">Heytea, DQ, and Papa John's</span>.<br className="hidden md:block mt-2" />
          Currently fully embracing the AI era, deeply exploring <span className="text-purple-600 dark:text-purple-400 font-bold">AIGC and social media operations</span>. Proficient in cutting-edge AI tools like Gemini, Nano Banana, and ComfyUI for content creation and short video editing, building a highly engaging personal IP matrix on Xiaohongshu and Douyin, alongside developing LLM-based quantitative trading assistants.
        </>
      ),
      btnResume: 'View Experience',
      btnContact: 'Contact Me',
      btnExport: 'Export to PDF'
    }
  };

  const t = content[language];

  // Function to trigger browser print dialog
  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start relative overflow-hidden px-4 pt-28 pb-12 md:pt-20 transition-colors duration-500 print:min-h-0 print:py-0 print:block">
      <div className="z-10 max-w-5xl w-full mx-auto print:text-left">
        
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight text-slate-900 dark:text-white transition-all duration-500 print:text-black print:text-4xl print:mb-2">
              {t.name}
            </h1>
            
            <div className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 mb-6 tracking-wide uppercase print:text-xl print:text-gray-600 print:mb-4">
              {language === 'zh' ? 'Joe.Chen' : '陈子卓野'}
            </div>
            
            <h2 className="text-lg md:text-xl font-normal text-slate-600 dark:text-gray-300 mb-6 flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-4 transition-colors duration-300 print:text-lg print:text-black print:justify-start print:mb-4">
              <span>{t.role1}</span> <span className="hidden md:inline text-slate-300 dark:text-slate-600 print:text-black">|</span>
              <span>{t.role2}</span> <span className="hidden md:inline text-slate-300 dark:text-slate-600 print:text-black">|</span>
              <span>{t.role3}</span>
            </h2>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm text-slate-600 dark:text-slate-400 mb-6 font-medium print:text-black">
                <div className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> +86 135 2425 2203</div>
                <div className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> 313455055@qq.com</div>
                <div className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg> home.kunkun1023.xyz</div>
            </div>
          </div>

          {/* Avatar Section */}
          <div className="relative shrink-0 print:float-right print:w-32 print:mb-0">
             <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-lg p-1 bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 print:shadow-none print:p-0 print:w-32 print:h-32 print:border-none">
                <img 
                    src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAESCqxpwLYLP8Jhn6EnyGll64FUqPbl9gACHjMAAiLeAAFWZRBcwlspcNM6BA.jpg" 
                    alt="陈子卓野 (Joe Chen)" 
                    className="w-full h-full rounded-md object-cover print:border-none print:rounded-md"
                />
             </div>
          </div>
        </div>

        {/* Personal Info Card - Optimized for Print */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-base mb-8 print:grid-cols-2 print:gap-2 print:mb-6 print:text-left">
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-lg transition-colors duration-300 print:border-none print:shadow-none print:p-0 print:bg-transparent">
                <div className="text-slate-500 dark:text-gray-400 text-xs mb-1 print:text-gray-500 uppercase tracking-wider">{t.info1Title}</div>
                <div className="text-slate-900 dark:text-white font-medium print:text-black">{t.info1Val}</div>
            </div>
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-lg transition-colors duration-300 print:border-none print:shadow-none print:p-0 print:bg-transparent">
                <div className="text-slate-500 dark:text-gray-400 text-xs mb-1 print:text-gray-500 uppercase tracking-wider">{t.info2Title}</div>
                <div className="text-slate-900 dark:text-white font-medium print:text-black">{t.info2Val}</div>
            </div>
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-lg transition-colors duration-300 print:border-none print:shadow-none print:p-0 print:bg-transparent">
                <div className="text-slate-500 dark:text-gray-400 text-xs mb-1 print:text-gray-500 uppercase tracking-wider">{t.info3Title}</div>
                <div className="text-slate-900 dark:text-white font-medium print:text-black">{t.info3Val}</div>
            </div>
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-lg transition-colors duration-300 print:border-none print:shadow-none print:p-0 print:bg-transparent">
                <div className="text-slate-500 dark:text-gray-400 text-xs mb-1 print:text-gray-500 uppercase tracking-wider">{t.info4Title}</div>
                <div className="text-slate-900 dark:text-white font-medium print:text-black">{t.info4Val}</div>
            </div>
        </div>
        
        <p className="text-base md:text-lg text-slate-700 dark:text-gray-300 mb-12 leading-relaxed transition-colors duration-300 print:text-sm print:text-black print:text-left print:mb-6">
          {t.desc}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center print:hidden">
          <a href="#experience" className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-md hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm">
            {t.btnResume}
          </a>

          {/* Export PDF Button - Triggers Print */}
          <button 
            onClick={handlePrint}
            className="px-6 py-2.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-medium rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
          >
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
             {t.btnExport}
          </button>

          <a href="#contact" className="px-6 py-2.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-medium rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
            {t.btnContact}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;