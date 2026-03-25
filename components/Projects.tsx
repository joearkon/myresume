import React from 'react';
import { Language } from '../App';

interface ProjectsProps {
  language: Language;
}

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const content = {
    zh: {
      title: '',
      titleHighlight: '核心数据',
      subtitle: '用数据说话，以结果导向',
      metrics: [
        { value: '5000+', label: '连锁门店落地', color: 'text-blue-500' },
        { value: '90%', label: '大客户年度留存', color: 'text-green-500' },
        { value: '50%', label: '团队营收贡献', color: 'text-purple-500' },
        { value: '5000+', label: 'AIGC 账号单月涨粉', color: 'text-pink-500' }
      ],
      archTitle: '全链路数字化架构体系',
      archDesc: '打通 BOH 供应链与 POS 全渠道，消除数据孤岛，构建一体化业务中台。',
      brandsTitle: '曾经合作品牌',
      casesTitle: '明星案例',
      cases: [
        {
          brand: 'HEYTEA 喜茶',
          role: '项目负责人 (2018 - 2020 | 常驻深圳)',
          colSpan: true,
          background: '作为喜茶全国门店核心收银与运营中台，HiPOS 系统覆盖全国 500+ 门店（2020年数据，2024年已突破 2000 家），对接小程序、美团外卖、会员、支付、财务、BOH 后厨、物业等全链路系统，支撑喜茶直营 + 海外门店规模化运营。',
          coreWork: [
            {
              title: '一、项目管理与数字化落地',
              items: [
                '主导 HiPOS 系统从 0 到 1 落地与全国 2000+ 门店规模化推广，负责从需求评审、SOW 签署、UAT 验收、试点验证到全国分阶段上线的全生命周期管理。',
                '统筹跨系统全域对接（小程序、支付、BOH、EHR 人事等），统一订单与商品口径，支撑日峰值 10万+ 订单的高并发业务场景。',
                '实现 BOH 供应链与 POS 全渠道打通，落地智能拆解与建议订货量自动计算，保障 500+ 门店高效、低成本运营。'
              ]
            },
            {
              title: '二、客户成功与运营',
              items: [
                '建立全国门店报修与监控体系，制定异常处理流程（10 分钟响应、2 小时闭环），显著降低重复报修率并提升系统稳定性。',
                '定期拜访喜茶总部营运、财务、IT 部门，实地走访一线门店收集店长/收银员真实痛点，输出《客户拜访报告》并推动需求闭环，极大提升客户满意度。',
                '通过数据看板实时监控收银成功率与订单处理效率，建立日报/周报机制，用数据驱动产品迭代与运营优化。'
              ]
            }
          ],
          achievements: [
            '支撑日峰值 10万+ 订单',
            '主导 2000+ 门店系统打通',
            'BOM配方的设计研发曾经申请专利'
          ],
          tags: ['2000+ 门店', '高并发', 'BOM专利'],
          highlight: '日订单峰值 10万+'
        },
        {
          brand: '久久丫 / 留夫鸭',
          role: '业务中台负责人 (2021 - 2022 | 常驻上海)',
          colSpan: true,
          background: '我全程主导久久丫、留夫鸭数字化中台一期从 0 到 1 落地，覆盖需求调研→蓝图设计→系统对接→功能落地→培训赋能→上线验收→全国推广全流程，作为项目核心负责人，统筹顶誉集团与合阔智云双方资源，保障系统按期上线、稳定运行、全国规模化推广。',
          coreWork: [
            {
              title: '一、全流程项目主导与落地',
              items: [
                '负责从需求调研、蓝图设计到全国 3000+ 门店规模化推广的全流程，主导商品、库存、订单、价格、对账等六大核心模块落地。',
                '成功集成 SAP ERP、云徙会员、自研小程序等第三方系统，实现全渠道商品、价格、库存、交易的一体化履约与财务自动对账。',
                '搭建总部→分部→门店三级推广组织与培训赋能体系，实现 6 批次全国快速切换，保障业务平稳过渡。'
              ]
            },
            {
              title: '二、客户成功与运营',
              items: [
                '主动上门拜访顶誉总部及区域负责人，深入一线门店实地巡检，解决订货不准、盘点复杂、对账麻烦等真实痛点。',
                '定期输出运营指标复盘（订货准确率、库存差异率等），用数据证明系统价值，强化客户认可并为后续增补续费打下基础。',
                '建立问题快速响应与周复盘机制，通过实地带教与远程指导，实现区域团队的自主运维与持续成功。'
              ]
            }
          ],
          achievements: [
            '完成 5 家试点门店上线及全国 3000+ 门店规模化推广',
            '成功对接全域系统，实现线上线下一体化、供应链自动化与财务智能对账',
            '构建六大中心，实现商品、库存、价格、订单、门店的全面互联互通'
          ],
          tags: ['3000+ 门店', '全流程主导', '业务中台'],
          highlight: '从0到1全流程主导'
        },
        {
          brand: '自媒体 IP 矩阵',
          role: '内容主理人',
          colSpan: true,
          background: '独立搭建抖音 + 小红书双平台二次元动漫 IP 矩阵，依托 AIGC 实现1 个月高效涨粉 5000 + 高粘性垂直粉丝，构建从角色原创设计、剧本分镜到 AI 视频生成的全链路标准化工作流，实现内容规模化、低成本、高效率持续产出。',
          coreWork: [
            {
              title: '一、IP 视觉全案设计',
              items: [
                '独立完成角色人设、三视图、道具、场景、表情体系设计，形成统一可复用的原创视觉资产。'
              ]
            },
            {
              title: '二、内容体系搭建',
              items: [
                '自主策划动漫小剧场、剧情脚本、分镜设计、连载系列化内容，保障内容稳定输出与爆款潜力。'
              ]
            },
            {
              title: '三、AIGC 全流程工作流搭建',
              items: [
                '熟练运用 Gemini、ComfyUI、Seedance、可灵 等 AI 工具，打通 “剧本→分镜→角色→画面→视频→剪辑” 自动化生产闭环，内容产出效率提升 80%。'
              ]
            },
            {
              title: '四、账号冷启动与增长',
              items: [
                '通过精准定位、系列化内容、高频互动完成账号冷启动，单月涨粉 5000+，粉丝粘性、互动率显著高于行业平均。'
              ]
            }
          ],
          achievements: [
            '1 个月高效涨粉 5000+ 高粘性垂直粉丝',
            '打通自动化生产闭环，内容产出效率提升 80%',
            '形成统一可复用的原创视觉资产与连载系列化内容'
          ],
          tags: ['小红书', '抖音', 'AIGC'],
          highlight: '1个月涨粉5000+'
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
      title: '',
      titleHighlight: 'Key Data',
      subtitle: 'Data-driven results and proven success',
      metrics: [
        { value: '5000+', label: 'Stores Deployed', color: 'text-blue-500' },
        { value: '90%', label: 'Key Account Retention', color: 'text-green-500' },
        { value: '50%', label: 'Team Revenue Contribution', color: 'text-purple-500' },
        { value: '5000+', label: 'AIGC Monthly Followers', color: 'text-pink-500' }
      ],
      archTitle: 'Digital Architecture System',
      archDesc: 'Integrating BOH Supply Chain with Omni-channel POS to eliminate data silos.',
      brandsTitle: 'PAST COLLABORATIONS',
      casesTitle: 'Star Cases',
      cases: [
        {
          brand: 'HEYTEA',
          role: 'Project Lead (2018 - 2020 | Shenzhen)',
          colSpan: true,
          background: 'As the core POS and operational middle-platform for Heytea\'s national stores, the HiPOS system covers 500+ stores nationwide (as of 2020, exceeding 2000 stores by 2024), integrating with mini-programs, Meituan delivery, membership, payment, finance, BOH, property, and other full-link systems, supporting the scaled operation of Heytea\'s direct-sale and overseas stores.',
          coreWork: [
            {
              title: '1. Project Management & Digital Implementation',
              items: [
                'Led 0-to-1 implementation and national rollout for 2000+ stores, managing the full lifecycle from requirement review and SOW signing to UAT and phased rollout.',
                'Coordinated cross-system integration (mini-programs, payment, BOH, etc.), unifying data standards to support 100k+ peak daily orders.',
                'Integrated BOH supply chain with POS, implementing auto-BOM breakdown and suggested ordering for 500+ stores to ensure efficient operations.'
              ]
            },
            {
              title: '2. Customer Success & Operational Visits',
              items: [
                'Established a national maintenance system with a 2-hour resolution SLA, significantly improving system stability and reducing recurring tickets.',
                'Conducted regular HQ visits and on-site store inspections to resolve real pain points (e.g., ordering accuracy), driving requirement implementation and satisfaction.',
                'Monitored operational metrics via real-time dashboards, using data to drive product iterations and operational excellence.'
              ]
            }
          ],
          achievements: [
            'Supported a daily peak of 100,000+ orders.',
            'Led the system integration for 2000+ stores.',
            'Patented BOM recipe design and development.'
          ],
          tags: ['2000+ Stores', 'High Concurrency', 'Patented BOM'],
          highlight: '100k+ Peak Daily Orders'
        },
        {
          brand: 'Juewei Duck / Liufu Duck',
          role: 'Middle Platform Lead (2021 - 2022 | Shanghai)',
          colSpan: true,
          background: 'Fully led the 0-to-1 implementation of the Phase I digital middle-platform for Juewei Duck and Liufu Duck, covering the entire process from requirement research → blueprint design → system integration → feature implementation → training & empowerment → go-live acceptance → national rollout. As the core project lead, coordinated resources between Dingyu Group and Hekuo Zhiyun to ensure on-time launch, stable operation, and scaled national promotion.',
          coreWork: [
            {
              title: '1. Full-Process Project Leadership & Implementation',
              items: [
                'Responsible for the 0-to-1 digital middle-platform rollout across 3000+ stores, leading 6 core modules including product, inventory, and automated reconciliation.',
                'Integrated SAP ERP, membership, and in-house mini-programs, achieving omni-channel fulfillment and intelligent supply chain automation.',
                'Built a 3-tier promotion and training system (HQ-Branch-Store), ensuring rapid national transition and business continuity.'
              ]
            },
            {
              title: '2. Customer Success & Operational Visits',
              items: [
                'Proactively visited HQ and regional leaders, solving real pain points like inaccurate ordering and complex reconciliation through on-site coaching.',
                'Delivered regular operational reviews (ordering accuracy, variance rates), proving system value with data and securing long-term customer recognition.',
                'Established rapid response and weekly retrospective mechanisms, empowering regional teams for self-maintenance and continuous success.'
              ]
            }
          ],
          achievements: [
            'Completed the launch of 5 pilot stores and nationwide scaled rollout to 3000+ stores.',
            'Successfully integrated full-domain systems, achieving online-offline integration, supply chain automation, and intelligent financial reconciliation.',
            'Built six major centers, realizing comprehensive interoperability of products, inventory, pricing, orders, and stores.'
          ],
          tags: ['3000+ Stores', 'Full Process Lead', 'Middle Platform'],
          highlight: '0 to 1 Full Process Lead'
        },
        {
          brand: 'Social Media IP Matrix',
          role: 'Content Creator',
          colSpan: true,
          background: 'Independently built a 2D anime IP matrix across Douyin and Xiaohongshu. Leveraged AIGC to efficiently gain 5000+ highly engaged vertical followers in one month. Constructed a full-link standardized workflow from original character design, script, and storyboard to AI video generation, achieving scalable, low-cost, and high-efficiency continuous content production.',
          coreWork: [
            {
              title: '1. Comprehensive IP Visual Design',
              items: [
                'Independently completed the design of character personas, three-view drawings, props, scenes, and expression systems, forming unified and reusable original visual assets.'
              ]
            },
            {
              title: '2. Content System Construction',
              items: [
                'Autonomously planned anime short theaters, plot scripts, storyboard designs, and serialized content, ensuring stable content output and viral potential.'
              ]
            },
            {
              title: '3. AIGC Full-Process Workflow Setup',
              items: [
                'Proficiently utilized AI tools such as Gemini, ComfyUI, Seedance, and Kling to bridge the automated production loop of "Script → Storyboard → Character → Visuals → Video → Editing," increasing content production efficiency by 80%.'
              ]
            },
            {
              title: '4. Account Cold Start & Growth',
              items: [
                'Achieved account cold start through precise positioning, serialized content, and high-frequency interaction, gaining 5000+ followers in a single month. Follower stickiness and interaction rates are significantly higher than the industry average.'
              ]
            }
          ],
          achievements: [
            'Efficiently gained 5000+ highly engaged vertical followers in 1 month.',
            'Bridged the automated production loop, increasing content production efficiency by 80%.',
            'Formed unified and reusable original visual assets and serialized content.'
          ],
          tags: ['Xiaohongshu', 'Douyin', 'AIGC'],
          highlight: '5000+ Followers in 1 Month'
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
    "喜茶 (HEYTEA)", "久久丫", "DQ (Dairy Queen)",
    "Peets (皮爷咖啡)", "T9 Tea", "Linlee (邻里)", 
    "谭仔 (TamJai)", "Something For", "果呀呀"
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 relative transition-colors duration-500 print:py-4">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 print:mb-6 print:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300 print:text-xl print:mb-1">
            {t.title} <span className="text-blue-800 dark:text-blue-400">{t.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 print:text-[10px] print:text-slate-500">{t.subtitle}</p>
        </div>

        {/* 1. Key Metrics Bar - Simplified */}
        <div className="border-y border-slate-100 dark:border-slate-800 py-8 mb-16 flex flex-wrap justify-between items-center gap-8 print:py-3 print:mb-6 print:gap-2 print:border-gray-200 print:bg-slate-50/50 print:rounded-xl">
          {t.metrics.map((metric, idx) => (
            <div key={idx} className="flex-1 min-w-[120px] text-center print:min-w-0 print:text-center">
              <div className={`text-3xl font-bold mb-1 ${metric.color.replace('text-', 'text-slate-900 dark:text-white')} print:text-sm print:mb-0`}>
                {metric.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-gray-400 font-medium uppercase tracking-wider print:text-[8px] print:tracking-normal">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* 3. Case Study Cards - Simplified to List Style */}
        <div className="mb-16 print:mb-6">
            <h3 className="text-2xl font-bold text-center mb-10 text-slate-800 dark:text-white print:text-base print:mb-3 print:text-left">{t.casesTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 print:grid-cols-1 print:gap-y-6">
            {t.cases.map((item: any, index) => (
                <div key={index} className={`group border-b border-slate-100 dark:border-slate-800 pb-8 last:border-0 md:last:border-b print:pb-4 print:border-gray-100 print:break-inside-avoid ${item.colSpan ? 'md:col-span-2' : ''}`}>
                  <div className="flex justify-between items-start mb-2 print:mb-1">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors print:text-base">
                      {item.brand}
                    </h4>
                    <span className="text-[10px] font-bold text-blue-800 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded uppercase print:bg-transparent print:border print:border-blue-100 print:text-[8px]">
                      {item.highlight}
                    </span>
                  </div>
                  
                  <div className="text-[11px] font-bold text-slate-400 dark:text-gray-500 mb-2 uppercase tracking-wider print:text-[9px] print:mb-1 print:tracking-normal">
                      {item.role}
                  </div>

                  {item.desc && (
                    <p className="text-sm text-slate-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all print:text-[10px] print:mb-2 print:leading-normal print:line-clamp-none">
                        {item.desc}
                    </p>
                  )}

                  {item.background && (
                    <div className="mb-4 print:mb-2">
                      <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1 print:text-[10px]">{language === 'zh' ? '项目背景' : 'Background'}</h5>
                      <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed print:text-[10px]">{item.background}</p>
                    </div>
                  )}

                  {item.coreWork && (
                    <div className="mb-4 print:mb-2">
                      <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2 print:mb-1 print:text-[10px]">{language === 'zh' ? '核心工作内容' : 'Core Responsibilities'}</h5>
                      <div className="space-y-3 print:space-y-1.5">
                        {item.coreWork.map((work: any, wIdx: number) => (
                          <div key={wIdx}>
                            <h6 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 print:text-[10px]">{work.title}</h6>
                            <ul className="list-disc list-outside ml-4 text-sm text-slate-600 dark:text-gray-400 space-y-1 print:text-[9px] print:space-y-0.5">
                              {work.items.map((wi: string, iIdx: number) => <li key={iIdx}>{wi}</li>)}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.achievements && (
                    <div className="mb-4 print:mb-2">
                      <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1 print:text-[10px]">{language === 'zh' ? '核心成就数据' : 'Core Achievement Data'}</h5>
                      <ul className="list-disc list-outside ml-4 text-sm text-slate-600 dark:text-gray-400 space-y-1 print:text-[9px] print:space-y-0.5">
                        {item.achievements.map((ach: string, aIdx: number) => <li key={aIdx}>{ach}</li>)}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 print:gap-1 mt-4 print:mt-2">
                      {item.tags.map((tag: string, i: number) => (
                      <span key={i} className="text-[10px] bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-gray-400 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700 print:bg-transparent print:border-gray-200 print:text-[8px] print:px-1 print:py-0">
                          {tag}
                      </span>
                      ))}
                  </div>
                </div>
            ))}
            </div>
        </div>

        {/* 2.5 Brand Wall - Simplified & Moved Below Cases */}
        <div className="mb-16 pt-12 border-t border-slate-100 dark:border-slate-800 print:mb-6 print:pt-4 print:border-gray-200">
            <h3 className="text-xs font-bold text-center mb-8 text-slate-400 dark:text-gray-500 uppercase tracking-[0.2em] print:text-[8px] print:mb-3 print:text-left">{t.brandsTitle}</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 opacity-60 hover:opacity-100 transition-opacity duration-500 print:opacity-100 print:justify-start print:gap-x-4 print:gap-y-2">
                {brandList.map((brand, idx) => (
                    <span key={idx} className="text-sm md:text-base font-bold text-slate-400 dark:text-slate-500 hover:text-blue-800 dark:hover:text-blue-400 transition-colors cursor-default print:text-[10px] print:text-gray-600">
                        {brand}
                    </span>
                ))}
            </div>
        </div>

        {/* 4. AI Innovation Lab - Simplified */}
        <div className="pt-16 border-t border-slate-100 dark:border-slate-800 print:pt-4 print:border-gray-200">
            <div className="text-center mb-10 print:mb-2 print:text-left">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 print:text-lg print:mb-0.5">{t.aiTitle}</h3>
                <p className="text-slate-600 dark:text-gray-400 print:text-xs print:text-gray-500">{t.aiDesc}</p>
            </div>
            <div className="space-y-6 print:space-y-2">
                {t.aiProjects.map((proj, idx) => (
                    <a 
                        key={idx} 
                        href={proj.link}
                        target="_blank"
                        className="block p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-800 dark:hover:border-blue-400 transition-all group print:p-0 print:bg-transparent print:border-0 print:break-inside-avoid"
                    >
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 print:flex-row print:gap-2">
                          <div className="shrink-0 grayscale group-hover:grayscale-0 transition-all print:hidden">{proj.icon}</div>
                          <div className="text-center sm:text-left print:text-left">
                              <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors mb-2 print:text-sm print:mb-0.5">
                                  {proj.name} 
                                  <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all print:hidden">→</span>
                              </h4>
                              <p className="text-sm text-slate-600 dark:text-gray-400 mb-4 leading-relaxed print:text-xs print:mb-1 print:leading-normal">{proj.desc}</p>
                              <div className="flex flex-wrap justify-center sm:justify-start gap-2 print:gap-1">
                                  {proj.tags.map((tag, i) => (
                                      <span key={i} className="text-xs font-mono bg-white dark:bg-slate-800 text-slate-500 dark:text-gray-400 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 print:bg-transparent print:border-gray-200 print:text-[8px] print:px-1.5 print:py-0">
                                          {tag}
                                      </span>
                                  ))}
                              </div>
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
