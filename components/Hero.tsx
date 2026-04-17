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
        <div className="space-y-6">
          <p className="border-l-2 border-slate-900 dark:border-white pl-4 italic text-slate-600 dark:text-slate-400">
            拥有 10 余年餐饮数字化转型与 KA 大客户运营实战积淀，深度参与头部连锁品牌从 0 到 1 的数字化体系搭建与规模化落地。主导喜茶、乐乐茶、久久丫等千万级餐饮品牌 SaaS 项目全流程交付，覆盖全国 5000+ 门店，实现客户 90%+ 年度留存与团队营收 50%+ 贡献，在 KA 大客户开发、客户深耕与项目落地方面具备成熟方法论。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 print:grid-cols-3 print:gap-4">
            <div className="group print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white print:text-slate-900">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 print:bg-blue-600"></span>
                <h4 className="text-sm font-bold uppercase tracking-wider print:text-[10pt]">专业沉淀</h4>
              </div>
              <p className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors print:text-[9pt] print:text-slate-600">
                深耕餐饮 SaaS 行业十余年，精通连锁餐饮数字化全链路经营，精通需求调研→方案设计→项目落地→上线培训→验收回款的全流程闭环。
                擅长为连锁品牌定制一套化解决方案，推动门店运营效率提升。
              </p>
            </div>

            <div className="group print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white print:text-slate-900">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 print:bg-emerald-600"></span>
                <h4 className="text-sm font-bold uppercase tracking-wider print:text-[10pt]">AIGC 与跨界能力</h4>
              </div>
              <p className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors print:text-[9pt] print:text-slate-600">
                积极拥抱 AI 时代，构建标准化工作流体系，熟练运用提示词工程、ComfyUI 等工具。
                在短视频平台打造高粘性二次元 IP 矩阵。同时基于大模型开发量化交易助手，具备极强的跨领域效率交付。
              </p>
            </div>

            <div className="group print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white print:text-slate-900">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 print:bg-amber-600"></span>
                <h4 className="text-sm font-bold uppercase tracking-wider print:text-[10pt]">核心价值与标签</h4>
              </div>
              <p className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors print:text-[9pt] print:text-slate-600">
                兼具 10 年行业沉淀度与 AI 时代的快速学习迭代力。以结果为导向，擅长将技术、产品与客户需求深度绑定，创造可量化的商业价值。
              </p>
            </div>
          </div>
        </div>
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
        <div className="space-y-6">
          <p className="border-l-2 border-slate-900 dark:border-white pl-4 italic text-slate-600 dark:text-slate-400">
            10+ years of expertise in catering digital transformation and KA operation. Deeply involved in digital system building and large-scale implementation from 0 to 1 for top-tier brands. Led full-cycle delivery for premium brands like HEYTEA, Lelecha, and Jiujiuya, covering 5,000+ stores with 90%+ annual retention and 50%+ contribution to team revenue.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 print:grid-cols-3 print:gap-4">
            <div className="group print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white print:text-slate-900">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 print:bg-blue-600"></span>
                <h4 className="text-[11px] font-bold uppercase tracking-widest print:text-[9pt]">Professional Expertise</h4>
              </div>
              <p className="text-[12px] leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors print:text-[8.5pt] print:text-slate-600">
                Dedicated to catering SaaS for over a decade. Expert in the full-cycle closed loop from requirement survey to project acceptance. Specialized in customized solutions that drive efficiency.
              </p>
            </div>

            <div className="group print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white print:text-slate-900">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 print:bg-emerald-600"></span>
                <h4 className="text-[11px] font-bold uppercase tracking-widest print:text-[9pt]">AIGC & Cross-domain</h4>
              </div>
              <p className="text-[12px] leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors print:text-[8.5pt] print:text-slate-600">
                Actively embracing AI. Built standardized AIGC workflows for social media. Independently developed an AI-driven quantitative trading assistant, bridging tech with business productivity.
              </p>
            </div>

            <div className="group print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white print:text-slate-900">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 print:bg-amber-600"></span>
                <h4 className="text-[11px] font-bold uppercase tracking-widest print:text-[9pt]">Core Value & Brand</h4>
              </div>
              <p className="text-[12px] leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors print:text-[8.5pt] print:text-slate-600">
                Combining industrial stability with AI-era agility. Result-oriented and specialized in aligning tech with customer needs to create measurable commercial value.
              </p>
            </div>
          </div>
        </div>
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
    <section id="home" className="min-h-screen flex flex-col justify-center items-start relative overflow-hidden px-4 pt-20 pb-8 md:pt-16 transition-colors duration-500 print:min-h-0 print:py-4 print:block">
      <div className="z-10 max-w-5xl w-full mx-auto">
        
        {/* Unified Header for Web and Print */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-8 print:mb-4 print:flex-row print:items-start print:gap-6">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left print:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-1 tracking-tighter text-slate-900 dark:text-white transition-all duration-500 print:text-3xl print:mb-1 print:tracking-tight">
              {t.name}
            </h1>
            
            <div className="text-xl md:text-2xl font-light text-slate-400 dark:text-slate-500 mb-6 tracking-[0.2em] uppercase print:text-lg print:mb-1 print:tracking-tight">
              {language === 'zh' ? 'Joe.Chen' : '陈子卓野'}
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mb-8 transition-colors duration-300 print:text-sm print:mb-2 print:gap-2">
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-[11px] font-bold uppercase tracking-wider border border-slate-200 dark:border-slate-700">{t.role1}</span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-[11px] font-bold uppercase tracking-wider border border-slate-200 dark:border-slate-700">{t.role2}</span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-[11px] font-bold uppercase tracking-wider border border-slate-200 dark:border-slate-700">{t.role3}</span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-[11px] font-bold uppercase tracking-wider border border-slate-200 dark:border-slate-700">{t.role4}</span>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-[13px] text-slate-600 dark:text-slate-400 mb-4 font-medium print:mb-1 print:gap-3 print:text-[9pt]">
                <div className="flex items-center gap-1"><svg className="w-4 h-4 print:w-3 print:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> +86 135 2425 2203</div>
                <div className="flex items-center gap-1"><svg className="w-4 h-4 print:w-3 print:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> 313455055@qq.com</div>
                <div className="flex items-center gap-1"><svg className="w-4 h-4 print:w-3 print:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg> home.kunkun1023.xyz</div>
            </div>
          </div>

          {/* Avatar Section */}
          <div className="relative shrink-0 print:ml-0">
             <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full p-1 bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden print:w-20 print:h-20">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[13px] md:text-sm mb-8 print:mb-4 print:grid-cols-4 print:gap-2">
            <div className="bg-slate-50/50 dark:bg-slate-900/30 border-l-2 border-blue-500 py-2 px-4 transition-colors duration-300 print:p-2 print:border-slate-100">
                <div className="text-slate-400 dark:text-slate-500 text-[10px] mb-0.5 uppercase tracking-[0.1em] font-semibold print:text-[8pt]">{t.info1Title}</div>
                <div className="text-slate-900 dark:text-white font-semibold print:text-[9pt]">{t.info1Val}</div>
            </div>
            <div className="bg-slate-50/50 dark:bg-slate-900/30 border-l-2 border-emerald-500 py-2 px-4 transition-colors duration-300 print:p-2 print:border-slate-100">
                <div className="text-slate-400 dark:text-slate-500 text-[10px] mb-0.5 uppercase tracking-[0.1em] font-semibold print:text-[8pt]">{t.info2Title}</div>
                <div className="text-slate-900 dark:text-white font-semibold print:text-[9pt]">{t.info2Val}</div>
            </div>
            <div className="bg-slate-50/50 dark:bg-slate-900/30 border-l-2 border-amber-500 py-2 px-4 transition-colors duration-300 print:p-2 print:border-slate-100">
                <div className="text-slate-400 dark:text-slate-500 text-[10px] mb-0.5 uppercase tracking-[0.1em] font-semibold print:text-[8pt]">{t.info3Title}</div>
                <div className="text-slate-900 dark:text-white font-semibold print:text-[9pt]">{t.info3Val}</div>
            </div>
            <div className="bg-slate-50/50 dark:bg-slate-900/30 border-l-2 border-rose-500 py-2 px-4 transition-colors duration-300 print:p-2 print:border-slate-100">
                <div className="text-slate-400 dark:text-slate-500 text-[10px] mb-0.5 uppercase tracking-[0.1em] font-semibold print:text-[8pt]">{t.info4Title}</div>
                <div className="text-slate-900 dark:text-white font-semibold print:text-[9pt]">{t.info4Val}</div>
            </div>
        </div>
        
        <div className="mb-10 print:mb-4">
          {t.desc}
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center md:justify-start items-center print:hidden">
          <a href="#experience" className="px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-md hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm">
            {t.btnResume}
          </a>

          {/* Export PDF Button - Triggers Print */}
          <button 
            onClick={handlePrint}
            className="px-5 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-sm font-medium rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
          >
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
             {t.btnExport}
          </button>

          <a href="#contact" className="px-5 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-sm font-medium rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
            {t.btnContact}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
