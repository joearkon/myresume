import React from 'react';
import { Language } from '../App';

interface SkillsProps {
  language: Language;
}

const Skills: React.FC<SkillsProps> = ({ language }) => {
  const content = {
    zh: {
      title: '专业',
      titleHighlight: '能力',
      subtitle: '产品设计 · AI 应用 · 工程协作 · 落地与运营 · 沟通与语言',
      skills: [
        {
          category: '产品设计',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          ),
          description: '从使用场景和用户任务出发，梳理流程、状态、数据和异常边界，形成产品方案与交互原型。具备总部后台、门店操作和跨系统协同场景的设计经验。',
          items: ['使用场景梳理', '用户任务分解', '状态流转与边界', '交互原型设计', '总部后台', '门店操作与协同']
        },
        {
          category: 'AI 应用',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
          ),
          description: '实践大模型对话、Prompt、上下文组织、工具调用、多模态识别与知识增强。关注模型回答依据、数据可用性、人工确认、失败处理和调用成本。',
          items: ['大模型对话', 'Prompt 工程', '上下文组织', '工具调用 (Function Calling)', '多模态识别', '知识增强', '失败处理与成本']
        },
        {
          category: '工程协作',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
          ),
          description: '具备软件研发背景，能够参与 API、数据模型、状态机和测试条件讨论，并借助 AI 编程工具构建原型及应用。近期项目涉及 Python、PyQt、React、FastAPI、Cloudflare Worker、SQLite、D1、R2 及模型 API。',
          items: ['API 与数据模型', '状态机与测试', 'Python / FastAPI', 'PyQt / 桌面客户端', 'React / 前端', 'Cloudflare Worker / D1 / R2', 'SQLite']
        },
        {
          category: '落地与运营',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
          ),
          description: '具备连锁门店部署、培训、上线切换和反馈迭代经验，能够协调研发、实施、客户及外部平台，推动产品进入实际业务流程。',
          items: ['连锁门店部署', '业务培训与答疑', '试点与上线切换', '反馈驱动迭代', '多方跨团队协调', '5000+ 门店经验']
        },
        {
          category: '沟通与语言',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
          ),
          description: '大学英语六级，具有海外项目沟通与协作经验，能够阅读英文技术文档并参与业务沟通。',
          items: ['大学英语六级 (CET-6)', '海外项目沟通', '英文技术文档阅读', '跨地区团队协作', '跨文化业务沟通']
        }
      ]
    },
    en: {
      title: 'Professional',
      titleHighlight: 'Capabilities',
      subtitle: 'Product Design · AI Applications · Engineering Collaboration · Delivery & Operations · Communication & Languages',
      skills: [
        {
          category: 'Product Design',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          ),
          description: 'Starting from usage scenarios and user tasks to map workflows, state machines, data lineage, and error boundaries into clear specs and prototypes. Experienced across HQ consoles, store operations, and cross-system collaboration.',
          items: ['Scenario Mapping', 'User Task Breakdown', 'State Machines', 'Prototypes', 'HQ Consoles', 'Store Operations']
        },
        {
          category: 'AI Applications',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
          ),
          description: 'Hands-on practice with LLM dialogues, prompt engineering, context orchestration, tool calling, multimodal recognition, and knowledge grounding. Focused on grounded evidence, data availability, human confirmation, exception handling, and cost.',
          items: ['LLM Dialogues', 'Prompt Engineering', 'Context Dock', 'Tool Calling', 'Multimodal Vision', 'Knowledge Grounding', 'Cost & Fallbacks']
        },
        {
          category: 'Engineering Collaboration',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
          ),
          description: 'Software engineering background to participate in API contracts, data models, state machines, and testing discussions, leveraging AI coding tools to build prototypes. Recent stack: Python, PyQt, React, FastAPI, Cloudflare Worker, SQLite, D1, R2, and model APIs.',
          items: ['API & Data Models', 'State Machines', 'Python / FastAPI', 'PyQt / Desktop', 'React / Frontend', 'Cloudflare Worker / D1', 'SQLite']
        },
        {
          category: 'Delivery & Operations',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
          ),
          description: 'Experienced in nationwide chain store deployment, training, cutovers, and feedback iteration, coordinating R&D, implementation, clients, and external platforms into actual production workflows.',
          items: ['Chain Store Rollout', 'Training & SOPs', 'Cutover Rehearsal', 'Feedback Iterations', 'Cross-Team Coordination', '5000+ Stores']
        },
        {
          category: 'Communication & Languages',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
          ),
          description: 'CET-6 certified with overseas project coordination experience, fluent in reading English technical specs and participating in cross-border business discussions.',
          items: ['CET-6', 'Overseas Projects', 'Technical Documentation', 'Cross-Border Teams', 'Fluent Communication']
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="skills" className="py-14 bg-white dark:bg-slate-950 relative transition-colors duration-500 print:py-2">
      <div className="max-w-6xl mx-auto px-4 print:px-0">
        <div className="mb-10 text-center print:mb-3 print:text-left">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2 font-mono">
            CORE CAPABILITIES
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-slate-900 dark:text-white transition-colors duration-300 print:text-lg print:mb-0">
            {t.title} <span className="text-blue-600 dark:text-blue-400">{t.titleHighlight}</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-gray-400 print:text-[9.5pt] print:text-gray-500">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 print:grid-cols-2 print:gap-2">
          {t.skills.map((category, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 flex flex-col print:p-2 print:border-slate-300 print:break-inside-avoid ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-3 print:mb-1 print:gap-2">
                <div className="p-2.5 bg-blue-50 dark:bg-slate-800 rounded-xl text-blue-600 dark:text-blue-400 shadow-sm group-hover:scale-105 transition-transform duration-300 print:hidden">
                  {category.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white print:text-[11pt]">
                  {category.category}
                </h3>
              </div>

              <p className="text-xs text-slate-600 dark:text-gray-300 mb-4 leading-relaxed print:text-[8.5pt] print:mb-1">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-slate-100 dark:border-slate-800 print:pt-1 print:gap-1">
                {category.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 print:px-1 print:py-0 print:text-[8pt] print:bg-transparent print:border print:border-slate-200"
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