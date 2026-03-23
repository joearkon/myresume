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
    <section id="education" className="py-20 bg-white dark:bg-slate-950 relative transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300">
            {t.title} <span className="text-blue-800 dark:text-blue-400">{t.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400">{t.subtitle}</p>
        </div>

        <div className="space-y-6">
          {t.edu.map((item, index) => (
            <div key={index} className="group relative bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-800 dark:hover:border-blue-400 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-2 h-8 bg-blue-800 dark:bg-blue-400 rounded-full"></div>
                   <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors">{item.school}</h3>
                </div>
                <div className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2 ml-5">
                  {item.degree}
                </div>
                <p className="text-slate-500 dark:text-gray-400 text-sm ml-5 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex-shrink-0 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-bold group-hover:bg-blue-800 dark:group-hover:bg-blue-400 group-hover:text-white dark:group-hover:text-slate-900 transition-all">
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