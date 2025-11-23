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
      desc: (
        <>
          无论您是寻找项目合作伙伴，还是想交流高达模型与足球，<br className="hidden md:block" />
          欢迎随时通过以下方式联系我。
        </>
      ),
      wechat: '微信 (WeChat)',
      wechatNote: '添加请注明来意',
      wechatUpdate: 'ID 已更新',
      douyin: '抖音 (Douyin)',
      douyinNote: '关注我的日常动态',
      douyinSearch: '抖音号搜索'
    },
    en: {
      title: 'Contact',
      titleHighlight: 'Me',
      desc: (
        <>
          Whether you are looking for a project partner or want to discuss Gunpla and Football,<br className="hidden md:block" />
          feel free to reach out via the following channels.
        </>
      ),
      wechat: 'WeChat',
      wechatNote: 'Please state reason for adding',
      wechatUpdate: 'ID Updated',
      douyin: 'Douyin (TikTok CN)',
      douyinNote: 'Follow my daily updates',
      douyinSearch: 'Search ID'
    }
  };

  const t = content[language];

  return (
    <footer className="bg-white dark:bg-slate-950 py-16 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500" id="contact">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="font-tech text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
            {t.title} <span className="text-gunpla-blue">{t.titleHighlight}</span>
          </h2>
          <div className="w-16 h-1 bg-gunpla-yellow mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            {t.desc}
          </p>
        </div>

        {/* IDs Column - The Core "Contact Me" Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          
          {/* WeChat Card */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:border-green-500/50 transition-all duration-300 group flex flex-col items-center justify-between min-h-[240px]">
            <div className="flex flex-col items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/30 transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24"><path d="M8.5,13.5A1.5,1.5 0 0,1 7,12A1.5,1.5 0 0,1 8.5,10.5A1.5,1.5 0 0,1 10,12A1.5,1.5 0 0,1 8.5,13.5M15.5,13.5A1.5,1.5 0 0,1 14,12A1.5,1.5 0 0,1 15.5,10.5A1.5,1.5 0 0,1 17,12A1.5,1.5 0 0,1 15.5,13.5M12,2C6.5,2 2,6 2,11C2,13.8 3.6,16.3 6,17.7C5.8,18.6 5.3,20.3 4.4,21.2C6.1,21.3 8.3,20.2 9.7,19.1C10.4,19.2 11.2,19.3 12,19.3C17.5,19.3 22,15.3 22,10.3C22,5.3 17.5,2 12,2Z" /></svg>
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-1">{t.wechat}</h3>
                    <p className="text-sm text-slate-500 dark:text-gray-400">{t.wechatNote}</p>
                </div>
            </div>
            
            <div className="w-full bg-white dark:bg-slate-800 py-4 px-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-inner mb-2">
                 <div className="font-mono text-2xl md:text-3xl font-bold text-slate-800 dark:text-white tracking-wider select-all">
                    Joe_povons
                 </div>
            </div>
            
            <div className="text-xs text-slate-400 dark:text-gray-500 mt-2">
              {t.wechatUpdate}
            </div>
          </div>

          {/* Douyin Card */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:border-pink-500/50 transition-all duration-300 group flex flex-col items-center justify-between min-h-[240px]">
            <div className="flex flex-col items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-black dark:bg-white rounded-2xl flex items-center justify-center text-white dark:text-black shadow-lg shadow-slate-900/20 transform group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                   <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24"><path d="M16.7 5.7C16.7 3.66 15.1 2 13.1 2h-1.8v10.6c0 2.6-2.1 4.7-4.7 4.7-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7.3 0 .6 0 .9.1V4.3c-.3-.1-.6-.1-.9-.1-4.6 0-8.4 3.8-8.4 8.4s3.8 8.4 8.4 8.4 8.4-3.8 8.4-8.4V8.5c1.6 1.1 3.5 1.8 5.6 1.8v-3.7c-1.6 0-3.1-.4-4.5-1.3z"/></svg>
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-1">{t.douyin}</h3>
                    <p className="text-sm text-slate-500 dark:text-gray-400">{t.douyinNote}</p>
                </div>
            </div>

            <div className="w-full bg-white dark:bg-slate-800 py-4 px-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-inner mb-2">
                 <div className="font-mono text-2xl md:text-3xl font-bold text-slate-800 dark:text-white tracking-wider select-all">
                    68888371171
                 </div>
            </div>

            <div className="text-xs text-slate-400 dark:text-gray-500 mt-2">
              {t.douyinSearch}
            </div>
          </div>

        </div>

        {/* Direct Contact Info (Phone/Email) */}
        <div className="bg-slate-100 dark:bg-slate-900/50 rounded-2xl p-8 inline-flex flex-col md:flex-row gap-6 items-center border border-slate-200 dark:border-slate-800">
           <a href="tel:+8613524252203" className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-800 rounded-xl hover:text-gunpla-blue text-slate-700 dark:text-gray-200 transition-all border border-slate-200 dark:border-slate-700 shadow-sm group">
             <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg text-gunpla-blue">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
             </div>
             <span className="font-mono text-lg font-bold group-hover:underline decoration-2 decoration-gunpla-blue underline-offset-4">+86 135-2425-2203</span>
           </a>

           <div className="hidden md:block w-px h-8 bg-slate-300 dark:bg-slate-700"></div>

           <a href="mailto:313455055@qq.com" className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-800 rounded-xl hover:text-gunpla-blue text-slate-700 dark:text-gray-200 transition-all border border-slate-200 dark:border-slate-700 shadow-sm group">
             <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg text-gunpla-blue">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
             </div>
             <span className="font-mono text-lg font-bold group-hover:underline decoration-2 decoration-gunpla-blue underline-offset-4">313455055@qq.com</span>
           </a>
        </div>

        <p className="text-xs text-slate-400 dark:text-gray-600 mt-16">
          © {new Date().getFullYear()} 陈子卓野 (Joe Chen) | Shanghai | v3.7
        </p>
      </div>
    </footer>
  );
};

export default Contact;