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
          items: [
            { name: 'SaaS 架构设计', level: 95 },
            { name: '项目交付管理', level: 90 },
            { name: '大客户运营', level: 90 },
            { name: '数字化转型咨询', level: 85 }
          ]
        },
        {
          category: '技术栈',
          items: [
            { name: '微服务架构', level: 90 },
            { name: 'Java / Go', level: 85 },
            { name: 'ETL / 数据集成', level: 85 },
            { name: '.NET / SharePoint', level: 80 },
            { name: 'React / 前端基础', level: 70 }
          ]
        },
        {
          category: '工具与方法论',
          items: [
            { name: 'PMP / Agile', level: 90 },
            { name: 'CRM / JIRA', level: 95 },
            { name: 'Power Automate', level: 85 },
            { name: 'AI / LLM 应用', level: 80 }
          ]
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
          items: [
            { name: 'SaaS Architecture', level: 95 },
            { name: 'Project Delivery', level: 90 },
            { name: 'KA Management', level: 90 },
            { name: 'Digital Transformation', level: 85 }
          ]
        },
        {
          category: 'Tech Stack',
          items: [
            { name: 'Microservices', level: 90 },
            { name: 'Java / Go', level: 85 },
            { name: 'ETL / Data Integration', level: 85 },
            { name: '.NET / SharePoint', level: 80 },
            { name: 'React / Frontend', level: 70 }
          ]
        },
        {
          category: 'Tools & Methodologies',
          items: [
            { name: 'PMP / Agile', level: 90 },
            { name: 'CRM / JIRA', level: 95 },
            { name: 'Power Automate', level: 85 },
            { name: 'AI / LLM Application', level: 80 }
          ]
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.skills.map((category, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-gunpla-blue dark:hover:border-gunpla-blue transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 border-b-2 border-gunpla-blue pb-2 inline-block">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-gray-300">{item.name}</span>
                      <span className="text-sm font-medium text-slate-500 dark:text-gray-500">{item.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-gunpla-blue h-2.5 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${item.level}%`, transitionDelay: `${idx * 100}ms` }}
                      ></div>
                    </div>
                  </div>
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