import React, { useState } from 'react';
import { Language } from '../App';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    zh: {
      tagline: '产品设计与方案架构｜KA 大客户成功｜SaaS 售前咨询｜连锁零售餐饮数字化',
      tagline2: '求职意向',
      name: '陈子卓野',
      role1: '产品设计',
      role2: '方案架构',
      role3: '项目交付',
      role4: 'AI 智能应用',
      info1Title: '基本信息',
      info1Val: '1986年10月 | 汉族',
      info2Title: '现居 / 政治面貌',
      info2Val: '上海 | 中共党员',
      info3Title: '学历',
      info3Val: '本科',
      info4Title: '经验年限',
      info4Val: '10年',
      desc: (
        <div className="space-y-4 my-2">
          <p className="border-l-4 border-indigo-600 dark:border-indigo-400 pl-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3 print:mb-2 print:text-[9.5pt]">
            拥有 10 年餐饮连锁 SaaS 全链路实战经验，覆盖底层平台产品构建、复杂方案架构设计与千万级 KA 客户项目交付与运营。深度精通供应链、销售端的实际业务与行业痛点，擅长跨越业务、技术与资金边界梳理连锁企业数字化共性痛点；
          </p>
          <p className="border-l-4 border-purple-600 dark:border-purple-400 pl-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3 print:mb-2 print:text-[9.5pt]">
            同时熟练运用 Claude Code、Codex 等 AI 智能体工具搭建自动化分析与多模态内容管线。擅长融合产品设计、解决方案架构与项目交付三重能力，独立完成客户需求诊断、千店级中台蓝图规划、MVP 试点直至全域规模化落地。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 print:grid-cols-3 print:gap-4 print:mt-2">
            <div className="group print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white print:text-slate-900">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 print:bg-blue-600"></span>
                <h4 className="text-sm font-bold uppercase tracking-wider print:text-[10pt]">专业沉淀</h4>
              </div>
              <p className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors print:text-[9pt] print:text-slate-600">
                深耕连锁消费 SaaS 行业 10 年 +，掌握数字化项目全流程闭环：需求调研、方案设计、实施交付、培训直至验收回款；可面向连锁品牌输出一体化数字化方案，精通门店管理与运营。
              </p>
            </div>

            <div className="group print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white print:text-slate-900">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 print:bg-emerald-600"></span>
                <h4 className="text-sm font-bold uppercase tracking-wider print:text-[10pt]">AI 智能与实战应用能力</h4>
              </div>
              <p className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors print:text-[9pt] print:text-slate-600">
                熟练调优主流大模型，运用 Claude Code、Codex 等 AI 智能编程工具搭建 LLM 自动化数据处理工作流；落地 AIGC 多模态内容生产全链路，具备用户分层、多渠道触达实践，可协助连锁客户落地轻量化 AI 运营试点方案。
              </p>
            </div>

            <div className="group print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white print:text-slate-900">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 print:bg-amber-600"></span>
                <h4 className="text-sm font-bold uppercase tracking-wider print:text-[10pt]">核心价值与标签</h4>
              </div>
              <p className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors print:text-[9pt] print:text-slate-600">
                融合行业经验、技术认知与 AI 落地实操能力，擅长锚定客户业务痛点，设计分阶段数字化实施路径，依托产品与 AI 工具创造可量化运营价值。
              </p>
            </div>
          </div>
        </div>
      ),
      btnResume: '查看完整履历',
      btnContact: '联系方式',
      btnExport: '导出简历',
      exportPdf: '导出为 PDF 格式',
      exportHtml: '下载为 HTML 网页',
      pdfTip: '支持浏览器直接打印/保存为 PDF',
      htmlTip: '单文件完整离线网页，双击即开'
    },
    en: {
      tagline: 'Product Design & Solution Architecture / KA Customer Success / SaaS Pre-sales Consulting / Catering Digitalization',
      tagline2: 'Job Intention',
      name: 'Joe.Chen',
      role1: 'Product Design',
      role2: 'Solution Arch',
      role3: 'Delivery',
      role4: 'AI Application',
      info1Title: 'Basic Info',
      info1Val: 'Oct 1986 | Han',
      info2Title: 'Location / Status',
      info2Val: 'Shanghai | Party Member',
      info3Title: 'Education',
      info3Val: 'Bachelor',
      info4Title: 'Experience',
      info4Val: '10 Years +',
      desc: (
        <div className="space-y-4 my-2">
          <p className="border-l-4 border-indigo-600 dark:border-indigo-400 pl-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3 print:mb-2 print:text-[9.5pt]">
            10 years of full-stack practical experience in catering chain SaaS, covering foundational product R&D, solution architecture, and multi-million KA project delivery and operation. Deeply proficient in frontline supply chain & sales business workflows and core industry pain points, with proven expertise in bridging business, technical, and financial boundaries.
          </p>
          <p className="border-l-4 border-purple-600 dark:border-purple-400 pl-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3 print:mb-2 print:text-[9.5pt]">
            Proficient in leveraging Claude Code, Codex, and leading LLMs to build automated data and content production pipelines. Seamlessly blends product design, solution architecture, and project delivery to drive requirement diagnostics, enterprise blueprinting, and scaled rollout across 5000+ stores.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 print:grid-cols-3 print:gap-4 print:mt-2">
            <div className="group print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white print:text-slate-900">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 print:bg-blue-600"></span>
                <h4 className="text-[11px] font-bold uppercase tracking-widest print:text-[9pt]">Professional Expertise</h4>
              </div>
              <p className="text-[12px] leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors print:text-[8.5pt] print:text-slate-600">
                Dedicated to catering SaaS for over 10 years. Expert in the full-cycle closed loop from requirement survey to project acceptance. Specialized in customized solutions that drive efficiency.
              </p>
            </div>

            <div className="group print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white print:text-slate-900">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 print:bg-emerald-600"></span>
                <h4 className="text-[11px] font-bold uppercase tracking-widest print:text-[9pt]">AI Intelligence & Cross-domain</h4>
              </div>
              <p className="text-[12px] leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors print:text-[8.5pt] print:text-slate-600">
                Actively embracing AI. Proficient in applying global & domestic LLMs, leveraging Claude Code & Codex AI Coding Agents to build automated research workflows and cross-platform AIGC content pipelines.
              </p>
            </div>

            <div className="group print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white print:text-slate-900">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 print:bg-amber-600"></span>
                <h4 className="text-[11px] font-bold uppercase tracking-widest print:text-[9pt]">Core Value & Brand</h4>
              </div>
              <p className="text-[12px] leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors print:text-[8.5pt] print:text-slate-600">
                Combining technical depth with catering industry expertise and AI-era agility. Result-oriented and specialized in aligning tech with customer needs to create measurable commercial value.
              </p>
            </div>
          </div>
        </div>
      ),
      btnResume: 'View Experience',
      btnContact: 'Contact Me',
      btnExport: 'Export Resume',
      exportPdf: 'Export as PDF',
      exportHtml: 'Download as HTML',
      pdfTip: 'Print or save as PDF directly',
      htmlTip: 'Standalone offline web page'
    }
  };

  const t = content[language];
  const [showExportMenu, setShowExportMenu] = useState(false);

  // Function to trigger browser print dialog for PDF
  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowExportMenu(false);
    window.print();
  };

  // Function to export standalone single-file HTML resume
  const handleExportHtml = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowExportMenu(false);

    try {
      // Clone the entire document HTML
      const docClone = document.documentElement.cloneNode(true) as HTMLElement;

      // Clean up interactive widgets that aren't needed in offline view (chat, buttons menu)
      const chatWidget = docClone.querySelector('#chat-widget');
      if (chatWidget) chatWidget.remove();
      
      const scrollToTop = docClone.querySelector('#scroll-to-top');
      if (scrollToTop) scrollToTop.remove();

      // Collect all active stylesheets so the exported HTML is visually self-contained
      let inlineStyles = '';
      Array.from(document.styleSheets).forEach((sheet) => {
        try {
          if (sheet.cssRules) {
            Array.from(sheet.cssRules).forEach((rule) => {
              inlineStyles += rule.cssText + '\n';
            });
          }
        } catch (e) {
          // Ignore potential CORS cross-origin rules
        }
      });

      const styleEl = document.createElement('style');
      styleEl.innerHTML = inlineStyles;
      docClone.querySelector('head')?.appendChild(styleEl);

      const htmlContent = '<!DOCTYPE html>\n' + docClone.outerHTML;
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const filename = language === 'zh'
        ? '陈子卓野_JoeChen_个人简历.html'
        : 'JoeChen_Resume.html';
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to export HTML:', err);
      window.print();
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start relative px-4 pt-20 pb-16 md:pt-16 transition-colors duration-500 print:min-h-0 print:py-4 print:block">
      <div className="z-10 max-w-5xl w-full mx-auto">
        
        {/* Unified Header for Web and Print */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-8 print:mb-4 print:flex-row print:items-start print:gap-6">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left print:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-1 tracking-tighter text-slate-900 dark:text-white transition-all duration-500 print:text-2xl print:mb-0 print:tracking-tight">
              {t.name}
            </h1>
            
            <div className="text-xl md:text-2xl font-light text-slate-400 dark:text-slate-500 mb-6 tracking-[0.2em] uppercase print:text-base print:mb-0.5 print:tracking-tight">
              {language === 'zh' ? 'Joe.Chen' : '陈子卓野'}
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-8 transition-all duration-300 print:text-sm print:mb-2 print:gap-2">
              <span className="px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-lg text-[13px] font-bold uppercase tracking-tight border border-blue-100 dark:border-blue-800/50 shadow-sm print:px-0 print:py-0 print:border-0 print:bg-transparent print:shadow-none print:text-blue-800 print:text-[11pt]">
                {t.tagline}
              </span>
              <span className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-[12px] font-medium tracking-tight border border-slate-200 dark:border-slate-700 shadow-sm print:px-0 print:py-0 print:border-0 print:bg-transparent print:shadow-none print:text-slate-500 print:text-[10pt] print:before:content-['|'] print:before:mx-2 print:before:text-slate-300">
                {t.tagline2}
              </span>
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[13px] md:text-sm mb-8 print:mb-4 print:grid-cols-3 print:gap-2">
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
        </div>
        
        <div className="mb-10 print:mb-4">
          {t.desc}
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center md:justify-start items-center print:hidden relative z-30">
          <a href="#experience" className="px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-md hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm">
            {t.btnResume}
          </a>

          {/* Dual Export Dropdown (PDF and HTML) */}
          <div className="relative">
            <button 
              onClick={() => setShowExportMenu(!showExportMenu)}
              className="px-5 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-sm font-medium rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
            >
               <svg className="w-4 h-4 text-blue-700 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
               </svg>
               <span>{t.btnExport}</span>
               <svg className={`w-3.5 h-3.5 text-slate-400 ml-0.5 transition-transform duration-200 ${showExportMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
               </svg>
            </button>

            {/* Dropdown Menu */}
            {showExportMenu && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowExportMenu(false)}
                />
                <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  {/* PDF Option */}
                  <button
                    onClick={handlePrint}
                    className="w-full px-4 py-2.5 text-left flex items-start gap-3 hover:bg-slate-50 dark:hover:bg-slate-700/70 transition-colors cursor-pointer group"
                  >
                    <div className="p-1.5 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400">
                        {t.exportPdf}
                      </div>
                      <div className="text-[11px] text-slate-400 dark:text-slate-400">
                        {t.pdfTip}
                      </div>
                    </div>
                  </button>

                  <div className="h-px bg-slate-100 dark:bg-slate-700/60 my-1" />

                  {/* HTML Option */}
                  <button
                    onClick={handleExportHtml}
                    className="w-full px-4 py-2.5 text-left flex items-start gap-3 hover:bg-slate-50 dark:hover:bg-slate-700/70 transition-colors cursor-pointer group"
                  >
                    <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400">
                        {t.exportHtml}
                      </div>
                      <div className="text-[11px] text-slate-400 dark:text-slate-400">
                        {t.htmlTip}
                      </div>
                    </div>
                  </button>
                </div>
              </>
            )}
          </div>

          <a href="#contact" className="px-5 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-sm font-medium rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
            {t.btnContact}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
