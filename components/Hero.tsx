import React from 'react';
import { Language } from '../App';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    zh: {
      tagline: 'AI 产品经理｜垂类大模型与智能体方案架构｜10年连锁餐饮数字化｜KA 客户成功',
      tagline2: '求职意向',
      name: '陈子卓野',
      role1: 'AI 产品经理',
      role2: '方案架构',
      role3: '项目交付',
      role4: '智能体落地',
      info1Title: '基本信息',
      info1Val: '1986年10月 | 汉族',
      info2Title: '现居 / 政治面貌',
      info2Val: '上海 | 中共党员',
      info3Title: '学历',
      info3Val: '本科',
      info4Title: '经验年限',
      info4Val: '10年',
      desc: (
        <div className="space-y-4 my-2 print:space-y-1.5 print:my-0.5">
          <p className="border-l-4 border-indigo-600 dark:border-indigo-400 pl-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3 print:mb-1 print:pl-2.5 print:text-[8pt] print:leading-normal">
            拥有 10 年实体消费与连锁供应链核心业务沉淀，曾主导千万级 KA 平台规划与千店级系统落地。精通供应链精细化运营、门店履约与销售全链路痛点，擅长将复杂的线下业务场景抽象为高商业价值的数字化与智能化落地方案；
          </p>
          <p className="border-l-4 border-purple-600 dark:border-purple-400 pl-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3 print:mb-1.5 print:pl-2.5 print:text-[8pt] print:leading-normal">
            聚焦生成式 AI、多模态视觉大模型与 Agent 智能体在企业复杂场景下的商业化落地。主导设计并上线过「连锁门店 AI 视觉巡检整改平台」与「AI 智能库存研判决策系统」；深度掌握多模态推理架构、端云协同低成本部署、确定性规则兜底防幻觉及人机协作闭环，具备从 0-1 场景定义、模型评测、MVP 验证到千店规模化推广的完整 AI 产品操盘能力。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 print:grid-cols-3 print:gap-2 print:mt-1 print:pt-0">
            <div className="group print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white print:text-slate-900 print:mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 print:bg-blue-600"></span>
                <h4 className="text-sm font-bold uppercase tracking-wider print:text-[8.5pt]">行业深度与专业沉淀</h4>
              </div>
              <p className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors print:text-[7.5pt] print:leading-snug print:text-slate-600">
                深耕连锁消费 SaaS 与实体产业 10 年 +，掌握数字化全流程闭环：需求调研、方案设计、实施交付、培训直至验收回款；具备千店级中台蓝图规划与全域规模化交付能力。
              </p>
            </div>

            <div className="group print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white print:text-slate-900 print:mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 print:bg-emerald-600"></span>
                <h4 className="text-sm font-bold uppercase tracking-wider print:text-[8.5pt]">AI 产品与落地架构</h4>
              </div>
              <p className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors print:text-[7.5pt] print:leading-snug print:text-slate-600">
                精通垂直场景 Agent 规划、多模态视觉大模型与业务流融合；熟练设计多模态端云双层推理、自适应抽帧降本 70%+ 与确定性规则防幻觉引擎，搭建从算法到业务闭环的人机工单系统。
              </p>
            </div>

            <div className="group print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white print:text-slate-900 print:mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 print:bg-amber-600"></span>
                <h4 className="text-sm font-bold uppercase tracking-wider print:text-[8.5pt]">核心价值与复合标签</h4>
              </div>
              <p className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors print:text-[7.5pt] print:leading-snug print:text-slate-600">
                融合行业厚度、产品架构与 AI 落地实操三重能力，擅长锚定企业高价值业务痛点，以低成本、高稳定性的 Agent 和 AI 视觉方案创造可量化商业 ROI。
              </p>
            </div>
          </div>
        </div>
      ),
      btnResume: '查看完整履历',
      btnContact: '联系方式',
      btnExportPdf: '导出 PDF',
      btnExportHtml: '下载 HTML',
      pdfTip: '支持浏览器直接打印或保存为 PDF',
      htmlTip: '导出为单文件离线网页，双击即可直接浏览'
    },
    en: {
      tagline: 'AI Product Manager / Vertical LLM & Agent Architecture / 10+ Yrs Retail & Catering / KA Success',
      tagline2: 'Job Intention',
      name: 'Joe.Chen',
      role1: 'AI Product Manager',
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
        <div className="space-y-4 my-2 print:space-y-1.5 print:my-0.5">
          <p className="border-l-4 border-indigo-600 dark:border-indigo-400 pl-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3 print:mb-1 print:pl-2.5 print:text-[8pt] print:leading-normal">
            10 years of deep domain experience in enterprise catering SaaS and supply chains, leading multi-million KA platform planning and multi-thousand-store rollouts. Highly proficient in frontline supply chain operations, store fulfillment, and sales workflows, with proven mastery in transforming complex offline scenarios into high-value digital and intelligent solutions.
          </p>
          <p className="border-l-4 border-purple-600 dark:border-purple-400 pl-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3 print:mb-1.5 print:pl-2.5 print:text-[8pt] print:leading-normal">
            Dedicated to commercializing Generative AI, Multimodal Vision Models, and Agentic Workflows in complex enterprise environments. Spearheaded the design and deployment of the "Store AI Vision Compliance & Inspection Platform" and the "AI Intelligent Inventory Decision System". Deeply versed in multimodal inference architecture, edge-cloud low-cost deployment, deterministic rule fallbacks to eliminate hallucination, and human-in-the-loop workflows, demonstrating full-cycle AI product ownership from 0-to-1 scenario definition and benchmark evaluation to scaled rollout across thousands of stores.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 print:grid-cols-3 print:gap-2 print:mt-1 print:pt-0">
            <div className="group print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white print:text-slate-900 print:mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 print:bg-blue-600"></span>
                <h4 className="text-[11px] font-bold uppercase tracking-widest print:text-[8.5pt]">Industry Depth & Expertise</h4>
              </div>
              <p className="text-[12px] leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors print:text-[7.5pt] print:leading-snug print:text-slate-600">
                10+ years dedicated to retail & catering SaaS. Master of full-lifecycle delivery: discovery, blueprinting, implementation, training, and acceptance across 5000+ stores.
              </p>
            </div>

            <div className="group print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white print:text-slate-900 print:mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 print:bg-emerald-600"></span>
                <h4 className="text-[11px] font-bold uppercase tracking-widest print:text-[8.5pt]">AI Product & Architecture</h4>
              </div>
              <p className="text-[12px] leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors print:text-[7.5pt] print:leading-snug print:text-slate-600">
                Specialized in vertical Agent orchestration, multimodal CV models, edge-cloud dual-tier inference, adaptive frame sampling (70%+ cost reduction), and deterministic anti-hallucination engines.
              </p>
            </div>

            <div className="group print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white print:text-slate-900 print:mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 print:bg-amber-600"></span>
                <h4 className="text-[11px] font-bold uppercase tracking-widest print:text-[8.5pt]">Core Value & ROI</h4>
              </div>
              <p className="text-[12px] leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors print:text-[7.5pt] print:leading-snug print:text-slate-600">
                Combining industry depth, solution architecture, and hands-on AI execution to target high-impact business pain points, delivering cost-effective and resilient AI solutions with measurable ROI.
              </p>
            </div>
          </div>
        </div>
      ),
      btnResume: 'View Experience',
      btnContact: 'Contact Me',
      btnExportPdf: 'Export PDF',
      btnExportHtml: 'Download HTML',
      pdfTip: 'Print or save as PDF directly',
      htmlTip: 'Standalone offline web page, view anywhere'
    }
  };

  const t = content[language];

  // Function to trigger browser print dialog for PDF
  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  // Function to export standalone single-file HTML resume
  const handleExportHtml = (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      // Clone the entire document HTML
      const docClone = document.documentElement.cloneNode(true) as HTMLElement;

      // Clean up top navigation bar, version switchers, and non-printable widgets from exported HTML
      const navElements = docClone.querySelectorAll('nav, #navbar, [data-navbar="true"]');
      navElements.forEach((el) => el.remove());

      const chatWidget = docClone.querySelector('#chat-widget');
      if (chatWidget) chatWidget.remove();
      
      const scrollToTop = docClone.querySelector('#scroll-to-top');
      if (scrollToTop) scrollToTop.remove();

      // Clean up web-only export buttons from the downloaded document
      const exportBtns = docClone.querySelectorAll('#btn-download-html, #btn-export-pdf');
      exportBtns.forEach((el) => el.remove());

      // Adjust top padding of the first section since the fixed navbar is removed
      const homeSection = docClone.querySelector('#home');
      if (homeSection) {
        homeSection.classList.remove('pt-20', 'md:pt-16', 'min-h-screen');
        homeSection.classList.add('pt-8', 'md:pt-10');
      }

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

      // Inject explicit print and navbar suppression rules into offline document
      inlineStyles += `
        nav, #navbar, [data-navbar="true"] { display: none !important; }
        @media print {
          nav, #navbar, [data-navbar="true"], #outline-aside, .print\\:hidden, button {
            display: none !important;
            height: 0 !important;
            visibility: hidden !important;
          }
        }
      `;

      const styleEl = document.createElement('style');
      styleEl.innerHTML = inlineStyles;
      docClone.querySelector('head')?.appendChild(styleEl);

      // Inject standalone script for offline HTML: smooth scrolling and interactive outline toggle
      const scriptEl = document.createElement('script');
      scriptEl.innerHTML = `
        (function() {
          // 1. Smooth scroll for anchor links with navbar offset
          document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
              var targetId = this.getAttribute('href').substring(1);
              var targetEl = document.getElementById(targetId);
              if (targetEl) {
                e.preventDefault();
                var offset = 80;
                var targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
              }
            });
          });

          // 2. Outline toggle for offline HTML
          var outlineAside = document.getElementById('outline-aside');
          var outlinePill = document.getElementById('outline-collapsed-pill');
          var outlineContent = document.getElementById('outline-expanded-content');
          var outlineHeader = document.getElementById('outline-header');
          var outlineToggleBtn = document.getElementById('outline-toggle-btn');

          function expandOutline() {
            if (!outlineAside) return;
            outlineAside.classList.remove('w-10');
            outlineAside.classList.add('w-56', 'xl:w-60', '2xl:w-64');
            if (outlinePill) outlinePill.classList.add('hidden');
            if (outlineHeader) outlineHeader.classList.remove('hidden');
            if (outlineContent) outlineContent.classList.remove('hidden');
          }

          function collapseOutline() {
            if (!outlineAside) return;
            outlineAside.classList.remove('w-56', 'xl:w-60', '2xl:w-64');
            outlineAside.classList.add('w-10');
            if (outlinePill) outlinePill.classList.remove('hidden');
            if (outlineHeader) outlineHeader.classList.add('hidden');
            if (outlineContent) outlineContent.classList.add('hidden');
          }

          if (outlinePill) outlinePill.onclick = expandOutline;
          if (outlineToggleBtn) outlineToggleBtn.onclick = collapseOutline;
        })();
      `;
      docClone.querySelector('body')?.appendChild(scriptEl);

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
    <section id="home" className="min-h-screen flex flex-col justify-center items-start relative px-4 pt-20 pb-16 md:pt-16 transition-colors duration-500 print:min-h-0 print:pt-0 print:pb-2 print:block print:break-after-auto print:mb-2">
      <div className="z-10 max-w-5xl w-full mx-auto">
        
        {/* Unified Header for Web and Print */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-8 print:mb-2 print:flex-row print:items-start print:gap-4">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left print:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-1 tracking-tighter text-slate-900 dark:text-white transition-all duration-500 print:text-2xl print:mb-0 print:tracking-tight">
              {t.name}
            </h1>
            
            <div className="text-xl md:text-2xl font-light text-slate-400 dark:text-slate-500 mb-6 tracking-[0.2em] uppercase print:text-sm print:mb-0.5 print:tracking-tight">
              {language === 'zh' ? 'Joe.Chen' : '陈子卓野'}
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-8 transition-all duration-300 print:text-sm print:mb-1.5 print:gap-2">
              <span className="px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-lg text-[13px] font-bold uppercase tracking-tight border border-blue-100 dark:border-blue-800/50 shadow-sm print:px-0 print:py-0 print:border-0 print:bg-transparent print:shadow-none print:text-blue-800 print:text-[10pt]">
                {t.tagline}
              </span>
              <span className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-[12px] font-medium tracking-tight border border-slate-200 dark:border-slate-700 shadow-sm print:px-0 print:py-0 print:border-0 print:bg-transparent print:shadow-none print:text-slate-500 print:text-[9pt] print:before:content-['|'] print:before:mx-2 print:before:text-slate-300">
                {t.tagline2}
              </span>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-[13px] text-slate-600 dark:text-slate-400 mb-4 font-medium print:mb-1 print:gap-2.5 print:text-[8.5pt]">
                <div className="flex items-center gap-1"><svg className="w-4 h-4 print:w-3 print:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> +86 135 2425 2203</div>
                <div className="flex items-center gap-1"><svg className="w-4 h-4 print:w-3 print:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> 313455055@qq.com</div>
                <div className="flex items-center gap-1"><svg className="w-4 h-4 print:w-3 print:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg> home.kunkun1023.xyz</div>
            </div>
          </div>

          {/* Avatar Section */}
          <div className="relative shrink-0 print:ml-0">
             <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full p-1 bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden print:w-16 print:h-16">
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[13px] md:text-sm mb-8 print:mb-2 print:grid-cols-3 print:gap-1.5">
            <div className="bg-slate-50/50 dark:bg-slate-900/30 border-l-2 border-blue-500 py-2 px-4 transition-colors duration-300 print:p-1.5 print:border-slate-200">
                <div className="text-slate-400 dark:text-slate-500 text-[10px] mb-0.5 uppercase tracking-[0.1em] font-semibold print:text-[7.5pt]">{t.info1Title}</div>
                <div className="text-slate-900 dark:text-white font-semibold print:text-[8.5pt]">{t.info1Val}</div>
            </div>
            <div className="bg-slate-50/50 dark:bg-slate-900/30 border-l-2 border-emerald-500 py-2 px-4 transition-colors duration-300 print:p-1.5 print:border-slate-200">
                <div className="text-slate-400 dark:text-slate-500 text-[10px] mb-0.5 uppercase tracking-[0.1em] font-semibold print:text-[7.5pt]">{t.info2Title}</div>
                <div className="text-slate-900 dark:text-white font-semibold print:text-[8.5pt]">{t.info2Val}</div>
            </div>
            <div className="bg-slate-50/50 dark:bg-slate-900/30 border-l-2 border-amber-500 py-2 px-4 transition-colors duration-300 print:p-1.5 print:border-slate-200">
                <div className="text-slate-400 dark:text-slate-500 text-[10px] mb-0.5 uppercase tracking-[0.1em] font-semibold print:text-[7.5pt]">{t.info3Title}</div>
                <div className="text-slate-900 dark:text-white font-semibold print:text-[8.5pt]">{t.info3Val}</div>
            </div>
        </div>
        
        <div className="mb-10 print:mb-2">
          {t.desc}
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center md:justify-start items-center print:hidden relative z-30">
          <a href="#experience" className="px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-md hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm">
            {t.btnResume}
          </a>

          {/* Export PDF Button */}
          <button 
            id="btn-export-pdf"
            onClick={handlePrint}
            title={t.pdfTip}
            className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-sm font-medium rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
          >
             <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
             </svg>
             <span>{t.btnExportPdf}</span>
          </button>

          {/* Download HTML Button */}
          <button 
            id="btn-download-html"
            onClick={handleExportHtml}
            title={t.htmlTip}
            className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-sm font-medium rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
          >
             <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
             </svg>
             <span>{t.btnExportHtml}</span>
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
