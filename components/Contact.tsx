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
      subtitle: '随时欢迎交流与合作',
      desc: '无论您是寻找项目合作伙伴，想交流高达模型心得，还是探讨数字化转型经验，都欢迎通过以下方式联系我。',
      phone: '电话',
      email: '邮箱',
      wechat: '微信',
      douyin: '抖音',
      actionCall: '点击拨打',
      actionMail: '发送邮件',
      actionCopy: '查看 ID',
      wechatId: 'Joe_povons',
      douyinId: '68888371171'
    },
    en: {
      title: 'Contact',
      titleHighlight: 'Me',
      subtitle: 'Open for collaboration',
      desc: 'Whether you are looking for a project partner, want to discuss Gunpla, or share insights on digital transformation, feel free to reach out.',
      phone: 'Phone',
      email: 'Email',
      wechat: 'WeChat',
      douyin: 'Douyin',
      actionCall: 'Call Now',
      actionMail: 'Send Mail',
      actionCopy: 'View ID',
      wechatId: 'Joe_povons',
      douyinId: '68888371171'
    }
  };

  const t = content[language];

  // Reusable Card Component
  const ContactCard = ({ 
    icon, 
    title, 
    value, 
    actionLabel, 
    href, 
    colorClass, 
    hoverBorderClass 
  }: any) => (
    <a 
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      className={`group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${hoverBorderClass}`}
    >
      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300 ${colorClass}`}>
        {icon}
      </div>
      <h3 className="text-slate-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">{title}</h3>
      <p className="text-slate-900 dark:text-white font-bold text-lg lg:text-xl font-mono break-all">{value}</p>
      
      <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <span className="text-xs font-bold px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
          {actionLabel}
        </span>
      </div>
    </a>
  );

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 py-24 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden" id="contact">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gunpla-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gunpla-red/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-slate-900 dark:text-white mb-6">
            {t.title} <span className="text-gunpla-blue">{t.titleHighlight}</span>
          </h2>
          <div className="w-16 h-1 bg-gunpla-yellow mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Phone */}
          <ContactCard 
            title={t.phone}
            value="+86 135 2425 2203"
            actionLabel={t.actionCall}
            href="tel:+8613524252203"
            colorClass="bg-blue-600"
            hoverBorderClass="hover:border-blue-500/50"
            icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
          />

          {/* Email */}
          <ContactCard 
            title={t.email}
            value="313455055@qq.com"
            actionLabel={t.actionMail}
            href="mailto:313455055@qq.com"
            colorClass="bg-yellow-500"
            hoverBorderClass="hover:border-yellow-500/50"
            icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
          />

          {/* WeChat */}
          <ContactCard 
            title={t.wechat}
            value={t.wechatId}
            actionLabel={t.actionCopy}
            href="#"
            colorClass="bg-green-500"
            hoverBorderClass="hover:border-green-500/50"
            icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8.5,13.5A1.5,1.5 0 0,1 7,12A1.5,1.5 0 0,1 8.5,10.5A1.5,1.5 0 0,1 10,12A1.5,1.5 0 0,1 8.5,13.5M15.5,13.5A1.5,1.5 0 0,1 14,12A1.5,1.5 0 0,1 15.5,10.5A1.5,1.5 0 0,1 17,12A1.5,1.5 0 0,1 15.5,13.5M12,2C6.5,2 2,6 2,11C2,13.8 3.6,16.3 6,17.7C5.8,18.6 5.3,20.3 4.4,21.2C6.1,21.3 8.3,20.2 9.7,19.1C10.4,19.2 11.2,19.3 12,19.3C17.5,19.3 22,15.3 22,10.3C22,5.3 17.5,2 12,2Z" /></svg>}
          />

          {/* Douyin */}
          <ContactCard 
            title={t.douyin}
            value={t.douyinId}
            actionLabel={t.actionCopy}
            href="#"
            colorClass="bg-slate-800 dark:bg-white dark:text-black"
            hoverBorderClass="hover:border-pink-500/50"
            icon={<svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M16.7 5.7C16.7 3.66 15.1 2 13.1 2h-1.8v10.6c0 2.6-2.1 4.7-4.7 4.7-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7.3 0 .6 0 .9.1V4.3c-.3-.1-.6-.1-.9-.1-4.6 0-8.4 3.8-8.4 8.4s3.8 8.4 8.4 8.4 8.4-3.8 8.4-8.4V8.5c1.6 1.1 3.5 1.8 5.6 1.8v-3.7c-1.6 0-3.1-.4-4.5-1.3z"/></svg>}
          />

        </div>

        <div className="mt-24 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
           <p className="text-sm text-slate-400 dark:text-gray-600 font-mono">
            © {new Date().getFullYear()} 陈子卓野 (Joe.Chen) | Shanghai | v5.0
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Contact;