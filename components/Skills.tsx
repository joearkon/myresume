import React from 'react';
import { Language } from '../App';

interface SkillsProps {
  language: Language;
}

const Skills: React.FC<SkillsProps> = ({ language }) => {
  const content = {
    zh: {
      title: '专业',
      titleHighlight: '技能',
      subtitle: '技术与管理的双重引擎',
      skills: [
        {
          category: '核心能力',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          ),
          description: '深耕SaaS领域10年，具备从0-1到1-100的全周期实战经验',
          items: ['SaaS 架构设计', '项目交付管理', '大客户运营', '数字化转型咨询', '团队建设', '业务中台搭建']
        },
        {
          category: '技术栈',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
          ),
          description: '扎实的技术底座，能够深入理解业务痛点并转化为技术方案',
          items: ['微服务架构', 'Java / Go', 'ETL / 数据集成', '.NET / SharePoint', 'React / 前端基础', '高并发处理']
        },
        {
          category: '工具与方法论',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
          ),
          description: '熟练运用专业工具与管理方法，提升团队协作效率',
          items: ['PMP / Agile', 'CRM / JIRA', 'Power Automate', 'AI / LLM 应用', 'Axure / 原型设计', 'DevOps']
        }
      ]
    },
    en: {
      title: 'Professional',
      titleHighlight: 'Skills',
      subtitle: 'Dual engines of Technology & Management',
      skills: [
        {
          category: 'Core Competencies',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          ),
          description: '10 years in SaaS, experienced in full lifecycle from 0-1 to 1-100',
          items: ['SaaS Architecture', 'Project Delivery', 'KA Management', 'Digital Transformation', 'Team Building', 'Business Middle-Platform']
        },
        {
          category: 'Tech Stack',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
          ),
          description: 'Solid technical foundation, translating business needs into technical solutions',
          items: ['Microservices', 'Java / Go', 'ETL / Data Integration', '.NET / SharePoint', 'React / Frontend', 'High Concurrency']
        },
        {
          category: 'Tools & Methodologies',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
          ),
          description: 'Proficient in tools and methodologies to enhance team efficiency',
          items: ['PMP / Agile', 'CRM / JIRA', 'Power Automate', 'AI / LLM', 'Axure / Prototyping', 'DevOps']
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300">
            {t.title} <span className="text-gunpla-blue">{t.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.skills.map((category, index) => (
            <div key={index} className="group bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-gunpla-blue dark:hover:border-gunpla-blue transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl text-gunpla-blue shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  {category.category}
                </h3>
              </div>

              <p className="text-sm text-slate-500 dark:text-gray-400 mb-6 h-10 leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {category.items.map((item, idx) => (
                  <span 
                    key={idx} 
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-300
                      ${index === 0 
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-900/50' 
                        : index === 1
                          ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200 dark:border-purple-800 hover:bg-purple-200 dark:hover:bg-purple-900/50 font-mono text-xs pt-2'
                          : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:bg-slate-300 dark:hover:bg-slate-600'
                      }
                    `}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;