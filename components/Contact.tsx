import React from 'react';
import { Language } from '../App';

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const content = {
    zh: {
      title: '联系',
      titleHighlight: '我',
      subtitle: '欢迎探讨 AI 产品、游戏交互或连锁业务智能化',
      desc: '希望寻找 AI 产品相关机会，将已有的产品设计、工程协作和业务落地经验，用于游戏交互或业务智能化场景。',
      phone: '电话',
      phoneVal: '135 2425 2203',
      email: '邮箱',
      emailVal: '313455055@qq.com',
      github: 'GitHub',
      githubVal: 'https://github.com/joearkon',
      website: '个人主页',
      websiteVal: 'https://my-resume.kunkun1023.xyz/',
      wechat: '微信',
      wechatId: 'Joe_povons',
      douyin: '抖音',
      xiaohongshu: '小红书',
      directContact: '直接联系',
      socialMedia: '社交媒体',
      btnMail: '发送邮件',
      btnGithub: '查看 GitHub',
      btnDownloadResume: '下载简历',
      douyinId: '6888zy1023',
      xiaohongshuId: '566860318',
      douyinUrl: 'https://v.douyin.com/9rcj4rkPCEg/',
      xiaohongshuUrl: 'https://www.xiaohongshu.com/user/profile/5c0213aa6b58b724ed0a49ce',
      douyinIcon: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAESDT5pwOX3h-ANyfNunXBev2ljsYmikwACOSAAAiLeCFa2iyU9tqlaKzoE.jpeg',
      xiaohongshuIcon: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAESDTppwOXnhyUsAYV6Ogbl2cry7umimQACNCAAAiLeCFadCG0l4xGJXjoE.jpeg',
      icp: '沪ICP备2025153381号-1'
    },
    en: {
      title: 'Contact',
      titleHighlight: 'Me',
      subtitle: 'Open for AI Product, Gaming Companion & Business Intelligence roles',
      desc: 'Seeking opportunities in AI product management, applying proven product design, engineering collaboration, and operational rollout to gaming interactions or business intelligence.',
      phone: 'Phone',
      phoneVal: '135 2425 2203',
      email: 'Email',
      emailVal: '313455055@qq.com',
      github: 'GitHub',
      githubVal: 'https://github.com/joearkon',
      website: 'Personal Site',
      websiteVal: 'https://my-resume.kunkun1023.xyz/',
      wechat: 'WeChat',
      wechatId: 'Joe_povons',
      douyin: 'Douyin',
      xiaohongshu: 'Xiaohongshu',
      directContact: 'Direct Contact',
      socialMedia: 'Social Media',
      btnMail: 'Send Email',
      btnGithub: 'View GitHub',
      btnDownloadResume: 'Download Resume',
      douyinId: '6888zy1023',
      xiaohongshuId: '566860318',
      douyinUrl: 'https://v.douyin.com/9rcj4rkPCEg/',
      xiaohongshuUrl: 'https://www.xiaohongshu.com/user/profile/5c0213aa6b58b724ed0a49ce',
      douyinIcon: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAESDT5pwOX3h-ANyfNunXBev2ljsYmikwACOSAAAiLeCFa2iyU9tqlaKzoE.jpeg',
      xiaohongshuIcon: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAESDTppwOXnhyUsAYV6Ogbl2cry7umimQACNCAAAiLeCFadCG0l4xGJXjoE.jpeg',
      icp: 'ICP License No. 沪ICP备2025153381号'
    }
  };

  const t = content[language];

  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  return (
    <footer className="bg-white dark:bg-slate-950 py-14 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden print:py-4 print:border-gray-200" id="contact">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto print:mb-4 print:text-left print:max-w-none">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2 font-mono">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3 print:text-xl print:mb-1">
            {t.title} <span className="text-blue-600 dark:text-blue-400">{t.titleHighlight}</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed print:text-[10px] print:text-slate-500">
            {t.desc}
          </p>
        </div>

        {/* Action Button Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 print:hidden">
          <a
            href={`mailto:${t.emailVal}`}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wide shadow-md transition-all flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <span>{t.btnMail}</span>
          </a>

          <a
            href={t.githubVal}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold text-xs tracking-wide shadow-md transition-all flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
            <span>{t.btnGithub}</span>
          </a>

          <button
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-xl bg-red-50 hover:bg-red-100 dark:bg-red-950/40 dark:hover:bg-red-900/50 text-red-700 dark:text-red-300 text-xs font-semibold border border-red-200 dark:border-red-800/60 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
            <span>{t.btnDownloadResume}</span>
          </button>
        </div>

        {/* 4 Contact Channels Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 print:grid-cols-4 print:gap-2">
          {/* Phone */}
          <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-600 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div className="overflow-hidden">
              <span className="text-[11px] font-bold text-slate-400 block uppercase">{t.phone}</span>
              <a href={`tel:${t.phoneVal}`} className="text-sm font-bold text-slate-900 dark:text-white font-mono hover:text-blue-600">
                {t.phoneVal}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-slate-800 text-amber-600 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div className="overflow-hidden">
              <span className="text-[11px] font-bold text-slate-400 block uppercase">{t.email}</span>
              <a href={`mailto:${t.emailVal}`} className="text-sm font-bold text-slate-900 dark:text-white font-mono truncate block hover:text-amber-600">
                {t.emailVal}
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
            </div>
            <div className="overflow-hidden">
              <span className="text-[11px] font-bold text-slate-400 block uppercase">{t.github}</span>
              <a href={t.githubVal} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-900 dark:text-white font-mono truncate block hover:text-blue-600">
                github.com/joearkon
              </a>
            </div>
          </div>

          {/* Personal Website */}
          <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-slate-800 text-purple-600 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
            </div>
            <div className="overflow-hidden">
              <span className="text-[11px] font-bold text-slate-400 block uppercase">{t.website}</span>
              <a href={t.websiteVal} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-900 dark:text-white font-mono truncate block hover:text-purple-600">
                my-resume.kunkun1023.xyz
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note & ICP */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-center space-y-1.5 print:mt-2 print:pt-2">
          <p className="text-xs text-slate-400 dark:text-gray-600 font-mono">
            © {new Date().getFullYear()} 陈子卓野 (Joe Chen) · AI 产品经理 · 上海
          </p>
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-[11px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 block print:hidden">
            {t.icp}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
