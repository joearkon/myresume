import React from 'react';
import { Language } from '../App';
import { generateWord } from '../services/export';

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
      role4: 'AI 自媒体创作',
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
          <span className="text-slate-900 dark:text-white font-bold">10 年高端品牌大客户运营与全链路项目管理专家</span>，同时是拥有 <span className="text-slate-900 dark:text-white font-bold">2 年用车体验的蔚来 ET5T 车主</span>。深度认同蔚来用户企业理念，长期关注新能源行业发展，对汽车用户运营、客户关系经营、高端服务体系具备天然理解与热情。
          <br className="hidden md:block mt-2" />
          擅长头部客户全生命周期运营、大型项目落地、全国体系化推广、客户留存与增长，过往服务 <span className="text-slate-900 dark:text-white font-bold">喜茶、久久丫</span> 等头部品牌，<span className="text-slate-900 dark:text-white font-bold">大客户留存率 90%+</span>。
          <br className="hidden md:block mt-2" />
          希望以 <span className="text-blue-600 dark:text-blue-400 font-bold">车主 + 资深运营者</span> 的双重身份加入蔚来，将高端服务经验、用户思维与项目能力投入到蔚来客户发展与用户运营中，长期陪伴品牌成长。
        </>
      ),
      btnResume: '查看完整履历',
      btnContact: '联系方式',
      btnExport: '导出 PDF 简历',
      btnDownloadWord: '下载 Word 简历'
    },
    en: {
      tagline: 'Digital Transformation Expert',
      tagline2: 'AIGC Social Media',
      name: 'Joe.Chen',
      role1: 'Tech Arch',
      role2: 'Delivery',
      role3: 'Growth',
      role4: 'AI Social Media',
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
          <span className="text-slate-900 dark:text-white font-bold">10-year expert in high-end brand KA operations and full-link project management</span>, and a <span className="text-slate-900 dark:text-white font-bold">NIO ET5T owner with 2 years of experience</span>. Deeply resonate with NIO's user-centric philosophy, with a natural understanding and passion for automotive user operations and high-end service systems.
          <br className="hidden md:block mt-2" />
          Specialized in full-lifecycle operations for top-tier clients and nationwide systematic promotion. Previously served leading brands such as <span className="text-slate-900 dark:text-white font-bold">Heytea and Jiujiuya</span>, with a <span className="text-slate-900 dark:text-white font-bold">KA retention rate of 90%+</span>.
          <br className="hidden md:block mt-2" />
          Aspiring to join NIO with the <span className="text-blue-600 dark:text-blue-400 font-bold">dual identity of an owner and a senior operator</span>, contributing high-end service experience and user-centric thinking to NIO's customer development and user operations.
        </>
      ),
      btnResume: 'View Experience',
      btnContact: 'Contact Me',
      btnExport: 'Export to PDF',
      btnDownloadWord: 'Download Word'
    }
  };

  const t = content[language];

  // Function to trigger browser print dialog
  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  // Function to handle Word download
  const handleDownloadWord = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      // Use local avatar path which is more reliable and avoids CORS issues
      await generateWord(language, "/avatar.jpg");
    } catch (error) {
      console.error("Word download failed:", error);
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start relative overflow-hidden px-4 pt-28 pb-12 md:pt-20 transition-colors duration-500 print:min-h-0 print:py-4 print:block">
      <div className="z-10 max-w-5xl w-full mx-auto">
        
        {/* Unified Header for Web and Print */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-12 print:mb-4 print:flex-row print:items-start print:gap-6">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left print:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight text-slate-900 dark:text-white transition-all duration-500 print:text-3xl print:mb-1 print:tracking-tight">
              {t.name}
            </h1>
            
            <div className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 mb-6 tracking-wide uppercase print:text-lg print:mb-1 print:tracking-tight">
              {language === 'zh' ? 'Joe.Chen' : '陈子卓野'}
            </div>
            
            <h2 className="text-lg md:text-xl font-normal text-slate-600 dark:text-gray-300 mb-6 flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-4 transition-colors duration-300 print:text-sm print:mb-2 print:gap-2">
              <span>{t.role1}</span> <span className="hidden md:inline text-slate-300 dark:text-slate-600 print:inline">|</span>
              <span>{t.role2}</span> <span className="hidden md:inline text-slate-300 dark:text-slate-600 print:inline">|</span>
              <span>{t.role3}</span> <span className="hidden md:inline text-slate-300 dark:text-slate-600 print:inline">|</span>
              <span>{t.role4}</span>
            </h2>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm text-slate-600 dark:text-slate-400 mb-6 font-medium print:mb-1 print:gap-3 print:text-[9pt]">
                <div className="flex items-center gap-1"><svg className="w-4 h-4 print:w-3 print:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> +86 135 2425 2203</div>
                <div className="flex items-center gap-1"><svg className="w-4 h-4 print:w-3 print:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> 313455055@qq.com</div>
                <div className="flex items-center gap-1"><svg className="w-4 h-4 print:w-3 print:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg> home.kunkun1023.xyz</div>
            </div>
          </div>

          {/* Avatar Section */}
          <div className="relative shrink-0 print:ml-0">
             <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden print:w-20 print:h-20">
                <img 
                    src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAESCqxpwLYLP8Jhn6EnyGll64FUqPbl9gACHjMAAiLeAAFWZRBcwlspcNM6BA.jpg" 
                    alt="陈子卓野 (Joe Chen)" 
                    className="w-full h-full rounded-full object-cover"
                    referrerPolicy="no-referrer"
                />
             </div>
          </div>
        </div>

        {/* Personal Info Card - Web View */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-base mb-8 print:mb-4 print:grid-cols-4 print:gap-2">
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-lg transition-colors duration-300 print:p-2 print:border-slate-100">
                <div className="text-slate-500 dark:text-gray-400 text-xs mb-1 uppercase tracking-wider print:text-[8pt]">{t.info1Title}</div>
                <div className="text-slate-900 dark:text-white font-medium print:text-[9pt]">{t.info1Val}</div>
            </div>
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-lg transition-colors duration-300 print:p-2 print:border-slate-100">
                <div className="text-slate-500 dark:text-gray-400 text-xs mb-1 uppercase tracking-wider print:text-[8pt]">{t.info2Title}</div>
                <div className="text-slate-900 dark:text-white font-medium print:text-[9pt]">{t.info2Val}</div>
            </div>
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-lg transition-colors duration-300 print:p-2 print:border-slate-100">
                <div className="text-slate-500 dark:text-gray-400 text-xs mb-1 uppercase tracking-wider print:text-[8pt]">{t.info3Title}</div>
                <div className="text-slate-900 dark:text-white font-medium print:text-[9pt]">{t.info3Val}</div>
            </div>
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-lg transition-colors duration-300 print:p-2 print:border-slate-100">
                <div className="text-slate-500 dark:text-gray-400 text-xs mb-1 uppercase tracking-wider print:text-[8pt]">{t.info4Title}</div>
                <div className="text-slate-900 dark:text-white font-medium print:text-[9pt]">{t.info4Val}</div>
            </div>
        </div>
        
        <p className="text-base md:text-lg text-slate-700 dark:text-gray-300 mb-12 leading-relaxed transition-colors duration-300 print:text-[10pt] print:text-slate-700 print:text-left print:mb-4 print:leading-snug">
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

          {/* Download Word Button */}
          <button 
            onClick={handleDownloadWord}
            className="px-6 py-2.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-medium rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
          >
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
             {t.btnDownloadWord}
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
