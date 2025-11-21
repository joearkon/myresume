import React from 'react';
import { Language } from '../App';

interface HobbiesProps {
  language: Language;
}

const Hobbies: React.FC<HobbiesProps> = ({ language }) => {
  const content = {
    zh: {
      title: '个人',
      titleHighlight: '兴趣',
      subtitle: '工作之外的热爱，为创造力供能',
      gunplaTitle: '高达模型 (Gunpla)',
      gunplaDesc: '精密工程的艺术。拼装复杂的机械结构需要极大的耐心和专注，看着数百个零件最终组合成一个整体，能极大锻炼我的细节把控能力。',
      footballTitle: '足球',
      footballDesc: '动态的战略博弈。无论是在球场上还是项目管理中，理解团队协作、即时调整战术以及为了共同目标冲刺，都是胜利的关键。',
      videoTitle: '短视频制作',
      videoDesc: '视觉化的叙事艺术。捕捉瞬间并将其剪辑成引人入胜的故事，这保持了我的创造力，也锻炼了我用最简练的语言传达核心信息的能力。'
    },
    en: {
      title: 'My',
      titleHighlight: 'Hobbies',
      subtitle: 'Passions outside of work that fuel creativity',
      gunplaTitle: 'Gunpla Model',
      gunplaDesc: 'The art of precision engineering. Assembling complex mechanical structures requires immense patience and focus. It hones my attention to detail and systemic thinking.',
      footballTitle: 'Football',
      footballDesc: 'Strategic teamwork in motion. Whether on the pitch or in project management, understanding collaboration, tactical adjustments, and sprinting for a common goal is key to victory.',
      videoTitle: 'Short Video Creation',
      videoDesc: 'Visual storytelling. Capturing moments and editing them into compelling stories keeps my creativity sharp and trains me to convey core messages concisely.'
    }
  };

  const t = content[language];

  return (
    <section id="hobbies" className="py-20 px-4 relative overflow-hidden transition-colors duration-500">
       {/* Decorative Background */}
       <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-200/20 dark:bg-gunpla-blue/10 rounded-full blur-3xl transition-colors duration-500"></div>
       <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-red-200/20 dark:bg-gunpla-red/10 rounded-full blur-3xl transition-colors duration-500"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300">
            {t.title} <span className="text-yellow-500 dark:text-gunpla-yellow">{t.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 transition-colors duration-300">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Hobby 1: Gundam */}
          <div className="group relative bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:border-gunpla-blue transition-all duration-500 shadow-sm hover:shadow-lg">
            <div className="h-48 bg-slate-100 dark:bg-slate-900 flex items-center justify-center group-hover:bg-white dark:group-hover:bg-slate-800 transition-colors relative overflow-hidden">
               {/* Placeholder for Gunpla Image or Icon */}
               <div className="text-gunpla-blue transform group-hover:scale-110 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent opacity-60 dark:opacity-60"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-gunpla-blue transition-colors">{t.gunplaTitle}</h3>
              <p className="text-sm text-slate-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors">
                {t.gunplaDesc}
              </p>
              <div className="w-full bg-slate-200 dark:bg-gray-700 h-1 rounded overflow-hidden">
                <div className="bg-gunpla-blue h-full w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
              </div>
            </div>
          </div>

          {/* Hobby 2: Football */}
          <div className="group relative bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:border-green-500 transition-all duration-500 shadow-sm hover:shadow-lg">
             <div className="h-48 bg-slate-100 dark:bg-slate-900 flex items-center justify-center group-hover:bg-white dark:group-hover:bg-slate-800 transition-colors relative overflow-hidden">
               <div className="text-green-500 transform group-hover:scale-110 transition-transform duration-500">
                 <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="2"/></svg>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent opacity-60 dark:opacity-60"></div>
             </div>
             <div className="p-6">
               <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-green-500 transition-colors">{t.footballTitle}</h3>
               <p className="text-sm text-slate-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors">
                 {t.footballDesc}
               </p>
               <div className="w-full bg-slate-200 dark:bg-gray-700 h-1 rounded overflow-hidden">
                  <div className="bg-green-500 h-full w-0 group-hover:w-full transition-all duration-1000 ease-out delay-100"></div>
               </div>
             </div>
           </div>

          {/* Hobby 3: Short Video */}
          <div className="group relative bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:border-pink-500 transition-all duration-500 shadow-sm hover:shadow-lg">
             <div className="h-48 bg-slate-100 dark:bg-slate-900 flex items-center justify-center group-hover:bg-white dark:group-hover:bg-slate-800 transition-colors relative overflow-hidden">
               <div className="text-pink-500 transform group-hover:scale-110 transition-transform duration-500">
                 <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a2 2 0 0 0-2-2h-4v13h4a2 2 0 0 0 2-2z"/><polygon points="8 22 8 5 12 5 12 22 8 22"/><polygon points="16 5 16 22 20 22 20 8 18 8"/><circle cx="4" cy="13" r="2"/></svg>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent opacity-60 dark:opacity-60"></div>
             </div>
             <div className="p-6">
               <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-pink-500 transition-colors">{t.videoTitle}</h3>
               <p className="text-sm text-slate-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors">
                 {t.videoDesc}
               </p>
               <div className="w-full bg-slate-200 dark:bg-gray-700 h-1 rounded overflow-hidden">
                  <div className="bg-pink-500 h-full w-0 group-hover:w-full transition-all duration-1000 ease-out delay-200"></div>
               </div>
             </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Hobbies;