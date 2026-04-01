import React from 'react';
import { Language } from '../App';

interface EducationProps {
  language: Language;
}

const Education: React.FC<EducationProps> = ({ language }) => {
  const content = {
    zh: {
      title: '教育',
      titleHighlight: '背景',
      subtitle: '学习与成长的基石',
      edu: [
        {
          school: '上海海事大学',
          degree: '本科',
          date: '2006.09 - 2009.06',
          desc: '系统掌握计算机软硬件基础知识，具备扎实的编程能力与逻辑思维。'
        },
        {
          school: '上海市理工大学附属高中',
          degree: '高中',
          date: '2007.09 - 2009.06',
          desc: '建立良好的理科基础与学习习惯。'
        }
      ]
    },
    en: {
      title: 'Education',
      titleHighlight: 'Background',
      subtitle: 'Foundation of learning and growth',
      edu: [
        {
          school: 'Shanghai Maritime University',
          degree: 'Bachelor',
          date: '2006.09 - 2009.06',
          desc: 'Mastered fundamentals of computer software and hardware, developing strong programming skills and logical thinking.'
        },
        {
          school: 'High School Affiliated to USST',
          degree: 'High School',
          date: '2007.09 - 2009.06',
          desc: 'Established a solid foundation in science and study habits.'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="education" className="py-12 bg-white dark:bg-slate-950 relative transition-colors duration-500 print:py-2">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-10 text-center print:mb-4 print:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white transition-colors duration-300 print:text-xl print:mb-0.5">
            {t.title} <span className="text-blue-800 dark:text-blue-400">{t.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 print:text-[9.5pt] print:text-gray-500">{t.subtitle}</p>
        </div>

        <div className="space-y-5 print:space-y-1.5">
          {t.edu.map((item, index) => (
            <div key={index} className="group relative bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-800 dark:hover:border-blue-400 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 print:p-0 print:border-0 print:flex-row print:justify-between print:items-baseline print:break-inside-avoid">
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1.5 print:mb-0.5">
                   <div className="w-1.5 h-6 bg-blue-800 dark:bg-blue-400 rounded-full print:hidden"></div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors print:text-base">{item.school}</h3>
                </div>
                <div className="text-base font-medium text-slate-700 dark:text-slate-300 mb-1.5 ml-4.5 print:text-[9.5pt] print:ml-0 print:mb-0.5">
                  {item.degree}
                </div>
                <p className="text-slate-500 dark:text-gray-400 text-[13px] ml-4.5 leading-relaxed print:text-[9.5pt] print:ml-0 print:leading-normal">
                  {item.desc}
                </p>
              </div>

              <div className="flex-shrink-0 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-[13px] font-bold group-hover:bg-blue-800 dark:group-hover:bg-blue-400 group-hover:text-white dark:group-hover:text-slate-900 transition-all print:p-0 print:bg-transparent print:border-0 print:text-[8.5pt] print:font-medium">
                {item.date}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;