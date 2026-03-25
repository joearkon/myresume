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
          category: 'AI 与 数字化工具',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
          ),
          description: '深度应用 AIGC 技术赋能业务增长、内容创作与流程自动化',
          items: ['LLM 大模型应用', 'Gemini / GPT', '提示词工程 (Prompt)', 'AIGC 自动化', 'ComfyUI / SD', 'AI 智能体开发']
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
          category: 'AI & Digital Tools',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
          ),
          description: 'Deep application of AIGC to empower business growth and content creation',
          items: ['LLM Application', 'Gemini / GPT', 'Prompt Engineering', 'AIGC Automation', 'ComfyUI / SD', 'AI Agent Dev']
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 relative transition-colors duration-500 print:py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center print:mb-4 print:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300 print:text-xl print:mb-1">
            {t.title} <span className="text-blue-800 dark:text-blue-400">{t.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 print:text-[10pt] print:text-gray-500">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 print:grid-cols-1 print:gap-4">
          {t.skills.map((category, index) => (
            <div key={index} className="group bg-white dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-800 dark:hover:border-blue-400 transition-all duration-300 flex flex-col print:p-0 print:border-0 print:break-inside-avoid">
              
              <div className="flex items-center gap-4 mb-6 print:mb-1">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl text-blue-800 dark:text-blue-400 shadow-sm group-hover:scale-110 transition-transform duration-300 print:hidden">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white print:text-base">
                  {category.category}
                </h3>
              </div>

              <p className="text-sm text-slate-500 dark:text-gray-400 mb-6 h-10 leading-relaxed print:text-[10pt] print:mb-2 print:h-auto print:leading-normal">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto print:mt-0 print:gap-1">
                {category.items.map((item, idx) => (
                  <span 
                    key={idx} 
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-300 print:px-2 print:py-0.5 print:text-[9pt] print:bg-transparent print:border-gray-200
                      ${index === 0 
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-900/50' 
                        : index === 1
                          ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200 dark:border-purple-800 hover:bg-purple-200 dark:hover:bg-purple-900/50'
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