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
      xiaohongshu: '小红书',
      website: '个人网站',
      directContact: '直接联系',
      socialMedia: '社交媒体',
      scanText: '扫码关注',
      actionCall: '点击拨打',
      actionMail: '发送邮件',
      actionCopy: '查看 ID',
      actionVisit: '查看主页',
      wechatId: 'Joe_povons',
      douyinId: '6888zy1023',
      xiaohongshuId: '566860318',
      douyinUrl: 'https://v.douyin.com/9rcj4rkPCEg/',
      xiaohongshuUrl: 'https://www.xiaohongshu.com/user/profile/5c0213aa6b58b724ed0a49ce',
      douyinIcon: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAESDT5pwOX3h-ANyfNunXBev2ljsYmikwACOSAAAiLeCFa2iyU9tqlaKzoE.jpeg',
      xiaohongshuIcon: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAESDTppwOXnhyUsAYV6Ogbl2cry7umimQACNCAAAiLeCFadCG0l4xGJXjoE.jpeg',
      websiteUrl: 'home.kunkun1023.xyz',
      icp: '沪ICP备2025153381号-1' 
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
      xiaohongshu: 'Xiaohongshu',
      website: 'Website',
      directContact: 'Direct Contact',
      socialMedia: 'Social Media',
      scanText: 'Scan to Follow',
      actionCall: 'Call Now',
      actionMail: 'Send Mail',
      actionCopy: 'View ID',
      actionVisit: 'Visit Profile',
      wechatId: 'Joe_povons',
      douyinId: '6888zy1023',
      xiaohongshuId: '566860318',
      douyinUrl: 'https://v.douyin.com/9rcj4rkPCEg/',
      xiaohongshuUrl: 'https://www.xiaohongshu.com/user/profile/5c0213aa6b58b724ed0a49ce',
      douyinIcon: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAESDT5pwOX3h-ANyfNunXBev2ljsYmikwACOSAAAiLeCFa2iyU9tqlaKzoE.jpeg',
      xiaohongshuIcon: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAESDTppwOXnhyUsAYV6Ogbl2cry7umimQACNCAAAiLeCFadCG0l4xGJXjoE.jpeg',
      websiteUrl: 'home.kunkun1023.xyz',
      icp: 'ICP License No. 沪ICP备2025153381号'
    }
  };

  const t = content[language];

  // Compact Card for Direct Contact
  const CompactContactCard = ({ 
    icon, 
    title, 
    value, 
    href, 
    colorClass 
  }: any) => (
    <a 
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 shadow-md transform group-hover:scale-110 transition-transform duration-300 ${colorClass}`}>
        {icon}
      </div>
      <div className="text-left overflow-hidden">
        <div className="text-xs text-slate-500 dark:text-gray-400 font-bold uppercase tracking-widest mb-1">{title}</div>
        <div className="text-sm md:text-base text-slate-900 dark:text-white font-bold font-mono truncate">{value}</div>
      </div>
    </a>
  );

  // QR Code Card for Social Media
  const QRCodeCard = ({ 
    title, 
    imageUrl, 
    colorClass,
    icon,
    id,
    url
  }: any) => (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
    >
      <div className="flex items-center gap-2 mb-3 w-full justify-center">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white overflow-hidden ${colorClass}`}>
          {typeof icon === 'string' ? (
            <img src={icon} alt="" className="w-full h-full object-cover" />
          ) : icon}
        </div>
        <span className="text-sm font-bold text-slate-700 dark:text-gray-300">{title}</span>
      </div>
      
      <div className="w-full aspect-square bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden p-1 border border-slate-100 dark:border-slate-700 mb-3">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      
      <div className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded border border-slate-100 dark:border-slate-700">
        ID: {id}
      </div>
    </a>
  );

  return (
    <footer className="bg-white dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden print:py-4 print:border-gray-200" id="contact">
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto print:mb-6 print:text-left print:max-w-none">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 print:text-xl print:mb-1">
            {t.title} <span className="text-blue-800 dark:text-blue-400">{t.titleHighlight}</span>
          </h2>
          <div className="w-12 h-1 bg-yellow-600 dark:bg-yellow-500 mx-auto mb-6 print:hidden"></div>
          <p className="text-slate-600 dark:text-gray-400 text-base leading-relaxed print:text-[10px] print:leading-normal print:text-slate-500">
            {t.desc}
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 print:mb-6 print:grid-cols-1 print:gap-4">
          
          {/* Left: Direct Contact */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-3 print:md:col-span-12 print:space-y-3">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1.5 flex items-center gap-2 print:text-base print:mb-1">
              <span className="w-1.5 h-5 bg-blue-800 dark:bg-blue-400 rounded-full print:hidden"></span>
              {t.directContact}
            </h3>
            
            <div className="print:grid print:grid-cols-3 print:gap-4">
              {/* Phone */}
              <div className="print:flex print:flex-col">
                <span className="hidden print:block print:text-[8px] print:text-gray-500 print:font-bold print:uppercase">{t.phone}</span>
                <span className="hidden print:block print:text-[10px] print:font-bold">+86 135 2425 2203</span>
                <div className="print:hidden">
                  <CompactContactCard 
                    title={t.phone}
                    value="+86 135 2425 2203"
                    href="tel:+8613524252203"
                    colorClass="bg-blue-600"
                    icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="print:flex print:flex-col">
                <span className="hidden print:block print:text-[8px] print:text-gray-500 print:font-bold print:uppercase">{t.email}</span>
                <span className="hidden print:block print:text-[10px] print:font-bold">313455055@qq.com</span>
                <div className="print:hidden">
                  <CompactContactCard 
                    title={t.email}
                    value="313455055@qq.com"
                    href="mailto:313455055@qq.com"
                    colorClass="bg-yellow-500"
                    icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                  />
                </div>
              </div>

              {/* WeChat */}
              <div className="print:flex print:flex-col">
                <span className="hidden print:block print:text-[8px] print:text-gray-500 print:font-bold print:uppercase">{t.wechat}</span>
                <span className="hidden print:block print:text-[10px] print:font-bold">{t.wechatId}</span>
                <div className="print:hidden">
                  <CompactContactCard 
                    title={t.wechat}
                    value={t.wechatId}
                    href="#"
                    colorClass="bg-green-500"
                    icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.5,13.5A1.5,1.5 0 0,1 7,12A1.5,1.5 0 0,1 8.5,10.5A1.5,1.5 0 0,1 10,12A1.5,1.5 0 0,1 8.5,13.5M15.5,13.5A1.5,1.5 0 0,1 14,12A1.5,1.5 0 0,1 15.5,10.5A1.5,1.5 0 0,1 17,12A1.5,1.5 0 0,1 15.5,13.5M12,2C6.5,2 2,6 2,11C2,13.8 3.6,16.3 6,17.7C5.8,18.6 5.3,20.3 4.4,21.2C6.1,21.3 8.3,20.2 9.7,19.1C10.4,19.2 11.2,19.3 12,19.3C17.5,19.3 22,15.3 22,10.3C22,5.3 17.5,2 12,2Z" /></svg>}
                  />
                </div>
              </div>

              {/* Douyin (Print Only) */}
              <div className="hidden print:flex print:flex-col">
                <span className="print:text-[8px] print:text-gray-500 print:font-bold print:uppercase">{t.douyin}</span>
                <span className="print:text-[10px] print:font-bold">{t.douyinId}</span>
              </div>

              {/* Xiaohongshu (Print Only) */}
              <div className="hidden print:flex print:flex-col">
                <span className="print:text-[8px] print:text-gray-500 print:font-bold print:uppercase">{t.xiaohongshu}</span>
                <span className="print:text-[10px] print:font-bold">{t.xiaohongshuId}</span>
              </div>
            </div>
          </div>

          {/* Right: Social Media QR Codes - Hidden in Print */}
          <div className="md:col-span-7 flex flex-col justify-center print:hidden">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-red-800 dark:bg-red-400 rounded-full"></span>
              {t.socialMedia}
            </h3>
            
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {/* Douyin */}
              <QRCodeCard 
                title={t.douyin}
                imageUrl="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAESCrhpwLeELrZFMnDXtQ8kEjtwyHr28gACLDMAAiLeAAFWgo1ZblI4BCI6BA.jpg"
                colorClass="bg-slate-900 dark:bg-slate-700"
                icon={t.douyinIcon}
                id={t.douyinId}
                url={t.douyinUrl}
              />

              {/* Xiaohongshu */}
              <QRCodeCard 
                title={t.xiaohongshu}
                imageUrl="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAESCrNpwLdKPrgdzL0kYqSjablqJdOA2gACJzMAAiLeAAFWnrru3SNoyqg6BA.jpg"
                colorClass="bg-red-500"
                icon={t.xiaohongshuIcon}
                id={t.xiaohongshuId}
                url={t.xiaohongshuUrl}
              />
            </div>
          </div>

        </div>

        {/* Personal Website Link */}
        <div className="flex justify-center mb-10 print:mb-6 print:justify-start">
           <a href={`https://${t.websiteUrl}`} target="_blank" className="inline-flex items-center gap-2.5 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group print:p-0 print:bg-transparent print:text-slate-900 print:shadow-none print:font-medium print:text-[10px]">
              <span className="text-lg print:hidden">🚀</span>
              <span>{t.website}: <span className="font-mono underline underline-offset-4 decoration-white/50 dark:decoration-slate-900/50 group-hover:decoration-white dark:group-hover:decoration-slate-900 transition-all print:no-underline">{t.websiteUrl}</span></span>
           </a>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 text-center space-y-2 print:mt-4 print:pt-2 print:border-gray-100 print:text-left print:space-y-1">
           <p className="text-xs text-slate-400 dark:text-gray-600 font-mono print:text-[10px]">
            © {new Date().getFullYear()} 陈子卓野 (Joe.Chen) | Shanghai | v7.0
          </p>
          {/* ICP License */}
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-300 dark:text-gray-700 hover:text-slate-500 dark:hover:text-gray-500 transition-colors block print:hidden">
            {t.icp}
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
