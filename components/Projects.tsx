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
        }
      ]
    }
  };

  const t = content[language];

  // 品牌列表：基于用户提供的文件夹资料
  const brandList = [
    "喜茶 (HEYTEA)", "DQ (Dairy Queen)", "棒约翰 (Papa John's)", 
    "Peets (皮爷咖啡)", "T9 Tea", "Linlee (邻里)", 
    "谭仔 (TamJai)", "Something For", "果呀呀", "久久丫"
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300">
            {t.title} <span className="text-gunpla-red">{t.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400">{t.subtitle}</p>
        </div>

        {/* 1. Key Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {t.metrics.map((metric, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-center group hover:-translate-y-1 transition-all duration-300">
              <div className={`text-3xl md:text-4xl font-black font-mono mb-2 ${metric.color} group-hover:scale-110 transition-transform`}>
                {metric.value}
              </div>
              <div className="text-sm text-slate-500 dark:text-gray-400 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* 2. Abstract Architecture Visualization */}
        <div className="mb-20 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 md:p-12 shadow-lg relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-gunpla-blue/5 rounded-full blur-3xl group-hover:bg-gunpla-blue/10 transition-colors"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              {/* Left: Text Info */}
              <div className="flex-1 text-center md:text-left">
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.archTitle}</h3>
                 <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6">{t.archDesc}</p>
                 <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {['POS', 'BOH', 'CRM', 'OMS', 'ERP'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-mono rounded-md border border-slate-200 dark:border-slate-600">
                        {tag}
                      </span>
                    ))}
                 </div>
              </div>

              {/* Right: Abstract Diagram (SVG) */}
              <div className="flex-1 w-full max-w-md">
                <svg viewBox="0 0 400 200" className="w-full h-auto drop-shadow-xl">
                  {/* Connecting Lines (Animated) */}
                  <path d="M100 100 L200 100 L300 50" stroke="currentColor" className="text-slate-300 dark:text-slate-600" strokeWidth="2" fill="none" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
                  </path>
                  <path d="M100 100 L200 100 L300 150" stroke="currentColor" className="text-slate-300 dark:text-slate-600" strokeWidth="2" fill="none" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" begin="1.5s"/>
                  </path>

                  {/* Nodes */}
                  {/* Store Node */}
                  <circle cx="100" cy="100" r="30" className="fill-white dark:fill-slate-800 stroke-gunpla-blue" strokeWidth="4" />
                  <text x="100" y="105" textAnchor="middle" fontSize="10" className="fill-slate-600 dark:fill-slate-300 font-bold">Store/POS</text>

                  {/* Middle Platform Node */}
                  <rect x="170" y="70" width="60" height="60" rx="8" className="fill-gunpla-blue stroke-white dark:stroke-slate-700" strokeWidth="2" />
                  <text x="200" y="105" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">SaaS Core</text>

                  {/* Supply Chain Node */}
                  <circle cx="300" cy="50" r="25" className="fill-white dark:fill-slate-800 stroke-gunpla-red" strokeWidth="3" />
                  <text x="300" y="54" textAnchor="middle" fontSize="9" className="fill-slate-600 dark:fill-slate-300">Supply</text>

                  {/* Finance Node */}
                  <circle cx="300" cy="150" r="25" className="fill-white dark:fill-slate-800 stroke-yellow-500" strokeWidth="3" />
                  <text x="300" y="154" textAnchor="middle" fontSize="9" className="fill-slate-600 dark:fill-slate-300">Finance</text>
                </svg>
              </div>
           </div>
        </div>

        {/* 2.5 Brand Wall */}
        <div className="mb-20">
            <h3 className="text-xl font-bold text-center mb-8 text-slate-500 dark:text-gray-400 uppercase tracking-widest">{t.brandsTitle}</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {brandList.map((brand, idx) => (
                    <span key={idx} className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-gray-300 font-medium hover:border-gunpla-blue dark:hover:border-gunpla-blue hover:text-gunpla-blue dark:hover:text-gunpla-blue transition-all cursor-default shadow-sm">
                        {brand}
                    </span>
                ))}
            </div>
        </div>

        {/* 3. Case Study Cards */}
        <h3 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-white">{t.casesTitle}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.cases.map((item, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 hover:border-gunpla-blue dark:hover:border-gunpla-blue transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col group">
              <div className="mb-4 flex justify-between items-start">
                <div className="text-xl font-black font-tech text-slate-900 dark:text-white group-hover:text-gunpla-blue transition-colors">
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
                 <span className="text-sm font-bold text-gunpla-blue">{item.highlight}</span>
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
    </section>
  );
};

export default Projects;