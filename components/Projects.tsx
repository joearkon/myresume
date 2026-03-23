import React from 'react';
import { Language } from '../App';

interface ProjectsProps {
  language: Language;
}

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const content = {
    zh: {
      title: '项目',
      titleHighlight: '成就',
      subtitle: '用数据说话，以结果导向',
      metrics: [
        { value: '5000+', label: '连锁门店落地', color: 'text-blue-500' },
        { value: '90%', label: '大客户年度留存', color: 'text-green-500' },
        { value: '10W+', label: '日处理订单峰值', color: 'text-purple-500' },
        { value: '50%', label: '团队营收贡献', color: 'text-yellow-500' }
      ],
      archTitle: '全链路数字化架构体系',
      archDesc: '打通 BOH 供应链与 POS 全渠道，消除数据孤岛，构建一体化业务中台。',
      brandsTitle: '合作客户',
      casesTitle: '明星案例',
      cases: [
        {
          brand: 'HEYTEA 喜茶',
          role: '项目负责人 (常驻深圳)',
          desc: '全渠道数字化转型标杆项目。打通线上小程序与线下门店，实现“下单-履约-结算”全链路闭环。',
          tags: ['2000+ 门店', '高并发', 'BOM专利'],
          highlight: '日订单峰值 10万+'
        },
        {
          brand: 'DQ / 棒约翰',
          role: '供应链项目经理',
          desc: '构建 BOH 门店供应链系统，覆盖采购、库存、物流全流程，显著提升周转效率。',
          tags: ['1000+ 门店', '供应链优化', '降本增效'],
          highlight: '库存损耗率 ↓2%'
        },
        {
          brand: '久久丫',
          role: '业务中台负责人',
          desc: '搭建集订单、会员、财务于一体的业务中台，整合全国门店数据，支持精细化运营。',
          tags: ['1800+ 门店', '数据整合', '业务中台'],
          highlight: '数据孤岛打通'
        },
        {
          brand: '自媒体 IP 矩阵',
          role: '内容主理人',
          desc: '沉淀头部品牌数字化落地与大客户运营经验，以数据导向思维操盘个人 IP。借助 AI 工具赋能内容创作，将个人热爱与兴趣转化为小红书与抖音的高粘性矩阵，实现从 0 到 1 的高效起号。',
          tags: ['小红书', '抖音', 'AIGC'],
          highlight: '5000+ 高粘性粉丝'
        }
      ],
      aiTitle: 'AI 创新实验室',
      aiDesc: '探索 AIGC 前沿技术，构建个人 AI 工具箱。',
      aiProjects: [
        {
          name: 'StockMind 股票量化助手',
          desc: '基于 AI 大模型的智能股票量化分析与辅助决策系统，提供实时数据洞察与策略回测。',
          link: 'https://stock-mind.kunkun1023.xyz/',
          tags: ['AI Quant', 'Stock Analysis', 'LLM', 'Data Visualization'],
          icon: (
            <div className="relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
          )
        }
      ]
    },
    en: {
      title: 'Project',
      titleHighlight: 'Achievements',
      subtitle: 'Data-driven results and proven success',
      metrics: [
        { value: '5000+', label: 'Stores Deployed', color: 'text-blue-500' },
        { value: '90%', label: 'Key Account Retention', color: 'text-green-500' },
        { value: '100k+', label: 'Peak Daily Orders', color: 'text-purple-500' },
        { value: '50%', label: 'Revenue Contribution', color: 'text-yellow-500' }
      ],
      archTitle: 'Digital Architecture System',
      archDesc: 'Integrating BOH Supply Chain with Omni-channel POS to eliminate data silos.',
      brandsTitle: 'Cooperated Brands',
      casesTitle: 'Star Cases',
      cases: [
        {
          brand: 'HEYTEA',
          role: 'Project Lead (Shenzhen)',
          desc: 'Benchmark project for omni-channel transformation. Integrated online mini-apps with offline stores.',
          tags: ['2000+ Stores', 'High Concurrency', 'Patented BOM'],
          highlight: '100k+ Peak Daily Orders'
        },
        {
          brand: 'DQ / Papa John\'s',
          role: 'Supply Chain PM',
          desc: 'Built BOH supply chain system covering procurement, inventory, and logistics.',
          tags: ['1000+ Stores', 'Optimization', 'Cost Reduction'],
          highlight: 'Inventory Loss ↓2%'
        },
        {
          brand: 'Juewei Duck',
          role: 'Middle Platform Lead',
          desc: 'Built a business middle platform integrating orders, membership, and finance.',
          tags: ['1800+ Stores', 'Data Integration', 'Middle Platform'],
          highlight: 'Data Silos Eliminated'
        },
        {
          brand: 'Social Media IP',
          role: 'Content Creator',
          desc: 'Leveraging enterprise digital transformation experience, I applied a data-driven approach to personal IP building. Empowered by AI, I transformed personal passions into a high-stickiness content matrix on Xiaohongshu and Douyin, achieving rapid growth from zero.',
          tags: ['Xiaohongshu', 'Douyin', 'AIGC'],
          highlight: '5000+ Active Followers'
        }
      ],
      aiTitle: 'AI Innovation Lab',
      aiDesc: 'Exploring frontier AIGC technologies and building personal AI tools.',
      aiProjects: [
        {
          name: 'StockMind Quant Assistant',
          desc: 'An intelligent stock quantitative analysis and decision-support system based on LLMs, providing real-time data insights and strategy backtesting.',
          link: 'https://stock-mind.kunkun1023.xyz/',
          tags: ['AI Quant', 'Stock Analysis', 'LLM', 'Data Visualization'],
          icon: (
            <div className="relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
          )
        }
      ]
    }
  };

  const t = content[language];

  // Brand list
  const brandList = [
    "喜茶 (HEYTEA)", "DQ (Dairy Queen)", "棒约翰 (Papa John's)", 
    "Peets (皮爷咖啡)", "T9 Tea", "Linlee (邻里)", 
    "谭仔 (TamJai)", "Something For", "果呀呀", "久久丫"
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300">
            {t.title} <span className="text-blue-800 dark:text-blue-400">{t.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400">{t.subtitle}</p>
        </div>

        {/* 1. Key Metrics Bar */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 mb-20 flex flex-col md:flex-row justify-between items-center divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-700">
          {t.metrics.map((metric, idx) => (
            <div key={idx} className="w-full md:w-1/4 py-4 md:py-0 px-4 text-center group">
              <div className={`text-3xl md:text-4xl font-black mb-1 ${metric.color} group-hover:scale-105 transition-transform`}>
                {metric.value}
              </div>
              <div className="text-xs md:text-sm text-slate-500 dark:text-gray-400 font-medium uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* 2. Abstract Architecture Visualization */}
        <div className="mb-20 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 md:p-12 shadow-sm relative overflow-hidden">
           <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.archTitle}</h3>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">{t.archDesc}</p>
              <div className="flex flex-wrap justify-center gap-3">
                 {['POS', 'BOH', 'CRM', 'OMS', 'ERP'].map(tag => (
                   <span key={tag} className="px-4 py-2 bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-md border border-slate-200 dark:border-slate-600 shadow-sm">
                     {tag}
                   </span>
                 ))}
              </div>
           </div>
        </div>

        {/* 2.5 Brand Wall */}
        <div className="mb-20">
            <h3 className="text-xl font-bold text-center mb-8 text-slate-500 dark:text-gray-400 uppercase tracking-widest">{t.brandsTitle}</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {brandList.map((brand, idx) => (
                    <span key={idx} className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-gray-300 font-medium hover:border-blue-800 dark:hover:border-blue-400 hover:text-blue-800 dark:hover:text-blue-400 transition-all cursor-default shadow-sm">
                        {brand}
                    </span>
                ))}
            </div>
        </div>

        {/* 3. Case Study Cards */}
        <div className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-white">{t.casesTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.cases.map((item, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 hover:border-blue-800 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col group">
                <div className="mb-4 flex justify-between items-start">
                    <div className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors">
                    {item.brand}
                    </div>
                    {index === 0 && <span className="text-xs font-bold bg-red-100 text-red-600 px-2 py-1 rounded">HOT</span>}
                </div>
                
                <div className="text-sm font-bold text-slate-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                    {item.role}
                </div>

                <p className="text-sm text-slate-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                    {item.desc}
                </p>

                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 mb-4 text-center">
                    <span className="text-sm font-bold text-blue-800 dark:text-blue-400">{item.highlight}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded border border-slate-200 dark:border-slate-600">
                        {tag}
                    </span>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* 4. AI Innovation Lab (NEW) */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 md:p-12">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t.aiTitle}</h3>
                <p className="text-slate-600 dark:text-gray-400">{t.aiDesc}</p>
            </div>
            <div className="grid grid-cols-1 max-w-3xl mx-auto gap-6">
                {t.aiProjects.map((proj, idx) => (
                    <a 
                        key={idx} 
                        href={proj.link}
                        target="_blank"
                        className="bg-white dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all hover:shadow-xl hover:-translate-y-1 group flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left"
                    >
                        <div className="shrink-0">{proj.icon}</div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors mb-2">
                                {proj.name} 
                                <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-gray-400 mb-4 leading-relaxed">{proj.desc}</p>
                            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                                {proj.tags.map((tag, i) => (
                                    <span key={i} className="text-xs font-mono bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-800/50">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;