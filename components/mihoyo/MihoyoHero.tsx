import React from 'react';
import { Language } from '../../App';

interface MihoyoHeroProps {
  language: Language;
}

const MihoyoHero: React.FC<MihoyoHeroProps> = ({ language }) => {
  const content = {
    zh: {
      targetCompany: '求职意向：AI 产品经理',
      targetRole: '产品经理｜AI 应用与连锁 SaaS',
      name: '陈子卓野',
      nameEn: 'Joe Chen',
      statusTag: 'AI 应用 · 连锁 SaaS',
      info1Title: '现居地',
      info1Val: '上海',
      info2Title: '求职方向',
      info2Val: 'AI 产品经理',
      info3Title: '教育背景',
      info3Val: '上海海事大学｜计算机｜本科',
      info4Title: '从业经历',
      info4Val: '十年以上企业软件与连锁餐饮SaaS',
      statement: '软件研发背景，具备产品设计、解决方案架构与落地运营经验。十年以上企业软件与连锁餐饮 SaaS 经验，参与喜茶 POS、建议订货、OMS 与 BOM 等产品建设。近期独立开发游戏桌宠、视觉巡检、餐饮助手及数据分析工具，实践大模型对话、工具调用、多模态识别与业务流程结合。长期体验主机动作与 JRPG 游戏，是《绝区零》资深玩家。希望结合玩家视角、工程背景和产品落地经验，做出可靠、易用、有实际价值的 AI 产品。',
      btnProjects: '查看代表项目',
      btnExperience: '查看工作经历',
      btnExportPdf: '下载简历',
      btnContact: '联系我',
      btnExportHtml: '下载离线 HTML',
      pdfTip: '支持浏览器直接打印或保存为 PDF',
      htmlTip: '导出为单文件离线网页，双击即可直接浏览'
    },
    en: {
      targetCompany: 'TARGET: AI Product Manager',
      targetRole: 'Product Manager | AI Applications & Chain SaaS',
      name: 'Joe Chen',
      nameEn: '陈子卓野',
      statusTag: 'AI Applications · Chain SaaS',
      info1Title: 'Location',
      info1Val: 'Shanghai',
      info2Title: 'Target Role',
      info2Val: 'AI Product Manager',
      info3Title: 'Education',
      info3Val: 'Shanghai Maritime Univ | CS | B.S.',
      info4Title: 'Experience',
      info4Val: '10+ Years Enterprise & F&B SaaS',
      statement: 'Software engineering background with product design, solution architecture, and operational delivery experience. Over 10 years in enterprise software and F&B chain SaaS, participating in products like HEYTEA POS, suggested ordering, OMS, and BOM. Recently independently developed gaming desktop companions, vision inspection, F&B assistants, and analytical tools—practicing LLM dialogues, tool calls, multimodal vision, and business workflows. Longtime console action and JRPG player, experienced Zenless Zone Zero player.',
      btnProjects: 'View Projects',
      btnExperience: 'View Work Experience',
      btnExportPdf: 'Download Resume',
      btnContact: 'Contact Me',
      btnExportHtml: 'Download Offline HTML',
      pdfTip: 'Print or save as PDF directly',
      htmlTip: 'Standalone offline HTML'
    }
  };

  const t = content[language];

  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  const handleExportHtml = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
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
      const mihoyoHomeSection = docClone.querySelector('#mihoyo-home');
      if (mihoyoHomeSection) {
        mihoyoHomeSection.classList.remove('pt-24', 'md:pt-20', 'min-h-screen');
        mihoyoHomeSection.classList.add('pt-8', 'md:pt-10');
      }

      let inlineStyles = '';
      Array.from(document.styleSheets).forEach((sheet) => {
        try {
          if (sheet.cssRules) {
            Array.from(sheet.cssRules).forEach((rule) => {
              inlineStyles += rule.cssText + '\n';
            });
          }
        } catch {
          // ignore CORS
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
        ? '陈子卓野_JoeChen_米哈游AI产品经理专项简历.html'
        : 'JoeChen_miHoYo_AI_PM_Resume.html';
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      window.print();
    }
  };

  return (
    <section id="mihoyo-home" className="min-h-screen flex flex-col justify-center items-start relative px-4 pt-24 pb-16 md:pt-20 transition-colors duration-500 print:min-h-0 print:py-3 print:block print:break-after-page">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none print:hidden"></div>

      <div className="z-10 max-w-5xl w-full mx-auto relative">
        {/* Banner Pill for miHoYo Target */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-900/10 via-indigo-900/15 to-purple-900/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 border border-blue-500/30 text-blue-700 dark:text-blue-300 mb-6 backdrop-blur-sm shadow-sm print:mb-2 print:border-blue-700 print:text-blue-800">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse print:hidden"></span>
          <span className="tracking-widest font-mono uppercase">{t.targetCompany}</span>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <span className="text-indigo-600 dark:text-indigo-300 font-bold">{t.targetRole}</span>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-6 print:mb-4 print:flex-row print:items-start print:gap-6">
          <div className="flex-1 text-center md:text-left print:text-left">
            <div className="flex flex-wrap items-baseline gap-3 justify-center md:justify-start">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white print:text-3xl">
                {t.name}
              </h1>
              <span className="text-2xl md:text-3xl font-light text-slate-400 dark:text-slate-500">
                {t.nameEn}
              </span>
              <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 ml-1">
                {t.statusTag}
              </span>
            </div>

            <p className="mt-2 text-base md:text-lg font-medium text-blue-600 dark:text-blue-400 tracking-wide print:text-sm print:text-blue-800">
              {t.targetRole}
            </p>

            <blockquote className="mt-3 p-3 bg-slate-50 dark:bg-slate-900/80 border-l-4 border-blue-600 dark:border-blue-400 rounded-r-lg text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic print:text-[9pt] print:bg-transparent print:p-1">
              "{t.statement}"
            </blockquote>
          </div>

          {/* Quick Info Grid */}
          <div className="w-full md:w-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-2 text-xs print:grid-cols-4 print:gap-2">
            <div className="p-2.5 bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-lg">
              <span className="text-slate-400 dark:text-slate-500 block text-[11px]">{t.info1Title}</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{t.info1Val}</span>
            </div>
            <div className="p-2.5 bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-lg">
              <span className="text-slate-400 dark:text-slate-500 block text-[11px]">{t.info2Title}</span>
              <span className="font-semibold text-red-600 dark:text-red-400">{t.info2Val}</span>
            </div>
            <div className="p-2.5 bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-lg">
              <span className="text-slate-400 dark:text-slate-500 block text-[11px]">{t.info3Title}</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{t.info3Val}</span>
            </div>
            <div className="p-2.5 bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-lg">
              <span className="text-slate-400 dark:text-slate-500 block text-[11px]">{t.info4Title}</span>
              <span className="font-semibold text-blue-600 dark:text-blue-400">{t.info4Val}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons & Export */}
        <div className="flex flex-wrap items-center gap-3 pt-2 print:hidden">
          <a
            href="#mihoyo-projects"
            className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wide shadow-md hover:shadow-blue-500/20 transition-all flex items-center gap-2"
          >
            <span>{t.btnProjects}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </a>

          <a
            href="#mihoyo-experience"
            className="px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-300 dark:border-slate-700 transition-colors flex items-center gap-1.5"
          >
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <span>{t.btnExperience}</span>
          </a>

          <button
            id="btn-export-pdf"
            onClick={handlePrint}
            title={t.pdfTip}
            className="px-4 py-2.5 rounded-lg bg-red-50 hover:bg-red-100 dark:bg-red-950/40 dark:hover:bg-red-900/50 text-red-700 dark:text-red-300 text-xs font-semibold border border-red-200 dark:border-red-800/60 transition-colors flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
            <span>{t.btnExportPdf}</span>
          </button>

          <a
            href="#contact"
            className="px-4 py-2.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800/60 transition-colors flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <span>{t.btnContact}</span>
          </a>

          <div className="h-5 w-px bg-slate-300 dark:bg-slate-700 mx-1 hidden sm:block"></div>

          <button
            id="btn-download-html"
            onClick={handleExportHtml}
            title={t.htmlTip}
            className="px-3.5 py-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium border border-slate-200 dark:border-slate-800 transition-colors flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            <span>{t.btnExportHtml}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MihoyoHero;
