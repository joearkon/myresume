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
      subtitle: '上海海事大学｜计算机科学与技术｜本科',
      edu: [
        {
          school: '上海海事大学',
          degree: '计算机科学与技术｜本科',
          date: '2005.09—2009.06',
          desc: '系统学习计算机体系结构、软件工程、数据结构与算法设计，建立扎实的工程底座。'
        }
      ]
    },
    en: {
      title: 'Education',
      titleHighlight: 'Background',
      subtitle: 'Shanghai Maritime University | Computer Science and Technology | Bachelor',
      edu: [
        {
          school: 'Shanghai Maritime University',
          degree: 'Computer Science and Technology | Bachelor',
          date: '2005.09—2009.06',
          desc: 'Systematic study in computer architecture, software engineering, data structures, and algorithms, building solid technical foundations.'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="education" className="py-12 bg-white dark:bg-slate-950 relative transition-colors duration-500 print:py-2">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8 text-center print:mb-3 print:text-left">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2 font-mono">
            EDUCATION
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-slate-900 dark:text-white transition-colors duration-300 print:text-lg print:mb-0">
            {t.title} <span className="text-blue-600 dark:text-blue-400">{t.titleHighlight}</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-gray-400 print:text-[9.5pt] print:text-gray-500">{t.subtitle}</p>
        </div>

        <div className="space-y-4 print:space-y-1.5">
          {t.edu.map((item, index) => (
            <div
              key={index}
              className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 print:p-2 print:border-slate-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-1.5 h-6 bg-blue-600 dark:bg-blue-400 rounded-full print:hidden"></div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white print:text-base">{item.school}</h3>
                </div>
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1 ml-4.5 print:text-[9.5pt] print:ml-0">
                  {item.degree}
                </div>
                <p className="text-xs text-slate-500 dark:text-gray-400 ml-4.5 leading-relaxed print:text-[9pt] print:ml-0">
                  {item.desc}
                </p>
              </div>

              <div className="shrink-0 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 text-xs font-bold font-mono print:p-0 print:bg-transparent">
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