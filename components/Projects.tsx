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
          background: '2020 年喜茶处于高速扩张期，为支撑全国直营门店规模化运营、线上线下一体化履约及供应链精细化管理，启动内部核心系统战略升级。我主导 HiPOS 收银中台与 BOH 供应链系统从 0 到 1 落地，覆盖全国门店，成为喜茶数字化转型关键项目。',
          coreWork: [
            {
              title: '一、项目管理与数字化落地',
              items: [
                '负责喜茶全国 800 + 直营门店（2020 年）供应链 BOH 体系 + POS 收银系统的整体搭建与落地，是喜茶早期数字化核心项目负责人。',
                '作为喜茶唯一核心对接人，全流程主导门店供应链深度调研、业务方案设计、系统开发落地，期间独立负责核心商品 BOM 配方模块的设计与研发，为门店标准化、成本管控与智能订货奠定底层基础。',
                '凭借 BOH 项目的高质量交付，次年成功拿下喜茶 HiPOS 全域收银中台项目总负责人资格，从 0 到 1 主导系统规划、研发协同、全国上线与运营验收；',
                '同步统筹对接喜茶内部产研团队，实现线上小程序、外卖平台、线下 POS、BOH 供应链全域数据打通，构建 “下单 — 履约 — 结算” 一体化闭环，全面支撑喜茶高速扩张期的直营体系数字化战略。',
                '全程负责需求调研、蓝图规划、项目排期、全国门店上线、UAT 验收、问题闭环及全生命周期运营管理，确保项目高质量落地、稳定运行并支撑全国规模化扩张。'
              ]
            },
            {
              title: '二、客户成功与运营',
              items: [
                '牵头搭建喜茶大客户专属服务团队，统筹产品研发、测试、实施全流程资源配置，实现大客户需求优先响应、资源定向倾斜，全面负责团队管理与向上汇报。',
                '常态化对接喜茶总部营运、财务、IT 等核心部门，实地走访一线门店，深度挖掘店长与收银员真实业务痛点，输出调研分析报告并推动需求闭环；通过与客户业务团队深度协同挖掘增量需求，大幅提升客户满意度，当年即实现团队成本全覆盖并创造可观营收，为公司树立优质对外服务形象。',
                '搭建全国门店报修与系统监控体系，制定标准化异常处理流程（10 分钟响应、2 小时闭环），有效降低重复报修率，显著提升系统稳定性。'
              ]
            }
          ],
          achievements: [
            '主导落地动态配方管理体系，助力喜茶内部年度损耗降低1%，实现精细化成本管控。',
            '系统稳定支撑线上线下全渠道10 万级规模履约订单，保障业务高效运转。',
            '牵头完成 BOM 配方设计相关创新，成功申请发明专利，形成技术与知识产权壁垒。'
          ],
          tags: ['高并发', 'BOM专利'],
          highlight: '日订单峰值 10万+'
        },
        {
          brand: '久久丫',
          role: '业务中台负责人 (2022 - 2024 | 常驻上海-嘉善)',
          colSpan: true,
          background: '作为集团核心数字化转型战略项目，项目旨在自上而下统一管理层至基层门店的数字化认知与建设标准。当前企业痛点突出，各系统高度孤立：ERP、SAP、财务、小程序、POS、CRM、加盟商订货等平台均为独立建设，未形成协同；同时旗下拥有久久丫、留夫鸭、玩儿串串、e 铺多等多品牌运营，存在严重的数据孤岛问题。业务层面存在加盟销售与订货流程割裂、财务与加盟商回款管理不清晰等问题。亟需建设统一业务中台，从三大维度实现一体化管控：系统层面（打通销售—订货—分销—回款全链路）、管理层面（覆盖加盟商门店、总部、O2O 线上、POS 线下、运营及财务全角色协同）、数据层面（整合上游供应链订货数据、库存数据、总部门店销售管控数据，实现全域数据互通与统一管理）。',
          coreWork: [
            {
              title: '一、全流程项目主导与落地',
              items: [
                '全面统筹项目全生命周期管理，独立负责从需求调研、蓝图设计到全国 3000 + 门店规模化推广的全过程，主导商品、库存、订单、价格、对账等六大核心模块的方案设计与落地实施。',
                '面对多部门协同复杂、业务流程分散的现状，主动建立常态化跨部门协同机制，每周组织 3~4 次专项会议，联动运营、财务、O2O、IT 及加盟商代表，高效梳理并重构核心业务流程；牵头完成 SAP ERP、云徙会员、自研小程序等多系统深度集成，实现全渠道商品、价格、库存、交易一体化履约与财务自动对账，彻底打通数据与业务壁垒。',
                '针对加盟商推进阻力大、接受度低的难题，搭建三级推广与分层培训体系，制定周密方案，在紧张工期内完成试点到6批次全国切换，扭转加盟商认知，以强管控与执行力保障门店平稳过渡、中台系统顺利上线。'
              ]
            },
            {
              title: '二、客户成功与运营',
              items: [
                '主动上门走访顶誉总部及各区域核心负责人，并深入一线门店实地调研巡检，精准捕捉加盟商在订货不准、盘点繁琐、对账低效等场景下的真实业务痛点，针对性输出解决方案并落地闭环。',
                '项目交付后，与总部信息化及 IT 团队建立长效复盘与运维管理机制，定期汇总系统运行问题、使用异常及业务新诉求，形成问题台账 — 复盘分析 — 优化应对的闭环管理，持续提升系统稳定性与适用性。',
                '深度提炼项目中的核心业务要素与关键功能价值，沉淀并迭代至公司 SaaS 标准化平台，为后续中小客户快速交付、场景化落地提供可复用能力，显著提升同类客户的实施效率与客户价值。'
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
          background: 'In 2020, HEYTEA was in a period of rapid expansion. To support the large-scale operation of direct-sale stores nationwide, integrated online-offline fulfillment, and refined supply chain management, a strategic upgrade of core internal systems was launched. I led the 0-to-1 implementation of the HiPOS middle-platform and BOH supply chain system, covering all stores nationwide and becoming a key project in HEYTEA\'s digital transformation.',
          coreWork: [
            {
              title: '1. Project Management & Digital Implementation',
              items: [
                'Responsible for the overall construction and implementation of the BOH supply chain system and POS system for HEYTEA\'s 800+ direct-sale stores nationwide (2020), serving as the core project lead for HEYTEA\'s early digitalization.',
                'As the sole core contact, led the full process of deep supply chain research, business solution design, and system implementation. Independently responsible for the design and R&D of the core product BOM recipe module, laying the foundation for store standardization, cost control, and intelligent ordering.',
                'Leveraging the high-quality delivery of the BOH project, won the role of General Project Lead for the HEYTEA HiPOS omni-channel middle-platform the following year, leading system planning, R&D coordination, national rollout, and operational acceptance from 0 to 1.',
                'Coordinated with HEYTEA\'s internal R&D team to integrate mini-programs, delivery platforms, offline POS, and BOH supply chain data, building an integrated "Order-Fulfillment-Settlement" loop to support HEYTEA\'s rapid expansion strategy.',
                'Managed the full lifecycle from requirement research and blueprint planning to national rollout, UAT acceptance, and operational management, ensuring stable system operation and supporting large-scale national expansion.'
              ]
            },
            {
              title: '2. Customer Success & Operations',
              items: [
                'Led the establishment of a dedicated service team for HEYTEA, coordinating resources across product R&D, testing, and implementation to ensure priority response and resource allocation for key accounts, with full responsibility for team management and reporting.',
                'Regularly engaged with HEYTEA\'s HQ Operations, Finance, and IT departments, conducting on-site store visits to uncover real pain points from store managers and cashiers. Delivered research reports and drove requirement closure; significantly improved customer satisfaction through deep collaboration, achieving full cost coverage and generating substantial revenue within the same year, establishing a high-quality service image for the company.',
                'Built a nationwide store repair and system monitoring system, establishing standardized exception handling processes (10-minute response, 2-hour closure), effectively reducing recurring tickets and significantly improving system stability.'
              ]
            }
          ],
          achievements: [
            'Led the implementation of a dynamic recipe management system, helping HEYTEA reduce annual internal loss by 1% and achieving refined cost control.',
            'The system stably supported 100,000-level omni-channel fulfillment orders, ensuring efficient business operations.',
            'Led the innovation of BOM recipe design, successfully applying for an invention patent and establishing technical and intellectual property barriers.'
          ],
          tags: ['High Concurrency', 'Patented BOM'],
          highlight: '100k+ Peak Daily Orders'
        },
        {
          brand: 'Jiujiuya',
          role: 'Middle Platform Lead (2022 - 2024 | Shanghai-Jiashan)',
          colSpan: true,
          background: 'As a core strategic project for the group\'s digital transformation, it aimed to unify digital awareness and construction standards from management to grassroots stores. The enterprise faced significant pain points with highly isolated systems: ERP, SAP, Finance, Mini-programs, POS, CRM, and franchisee ordering platforms were built independently without synergy. Operating multiple brands like Juewei Duck, Liufu Duck, Waner Chuanchuan, and ePuduo further exacerbated data silos. Business-wise, there were gaps between franchisee sales and ordering processes, and unclear financial/collection management. A unified business middle-platform was urgently needed to achieve integrated control across three dimensions: System (linking sales-ordering-distribution-collection), Management (coordinating franchisees, HQ, O2O, POS, operations, and finance), and Data (integrating supply chain, inventory, and sales data for unified management).',
          coreWork: [
            {
              title: '1. Full-Process Project Leadership & Implementation',
              items: [
                'Fully coordinated the entire project lifecycle, independently responsible for the whole process from requirement research and blueprint design to the scaled rollout across 3000+ stores nationwide. Led the solution design and implementation of six core modules: product, inventory, order, price, and reconciliation.',
                'Addressed complex multi-departmental coordination and fragmented business processes by establishing a normalized cross-departmental synergy mechanism. Organized 3-4 specialized meetings weekly, linking Operations, Finance, O2O, IT, and franchisee representatives to efficiently streamline and reconstruct core business processes. Led the deep integration of multiple systems including SAP ERP, Yunxi Membership, and in-house mini-programs, achieving omni-channel fulfillment of products, prices, inventory, and transactions, along with automated financial reconciliation, completely breaking down data and business barriers.',
                'Addressed the challenge of high resistance and low acceptance among franchisees by establishing a three-tier promotion and layered training system. Developed meticulous plans and completed the transition from pilot to 6 batches of nationwide rollout within a tight schedule, shifting franchisee perceptions and ensuring a smooth transition for stores and the successful launch of the middle-platform through strong control and execution.'
              ]
            },
            {
              title: '2. Customer Success & Operations',
              items: [
                'Proactively visited Dingyu HQ and regional core leaders, and conducted in-depth on-site research and inspections at frontline stores. Accurately captured real business pain points of franchisees in scenarios such as inaccurate ordering, cumbersome inventory counting, and inefficient reconciliation, delivering targeted solutions and closing the loop.',
                'After project delivery, established a long-term retrospective and operation/maintenance management mechanism with the HQ information and IT teams. Regularly summarized system operation issues, usage anomalies, and new business requirements, forming a closed-loop management of "problem ledger - retrospective analysis - optimization response" to continuously improve system stability and suitability.',
                'Deeply extracted core business elements and key functional values from the project, precipitating and iterating them into the company\'s SaaS standardized platform. Provided reusable capabilities for rapid delivery and scenario-based implementation for subsequent small and medium-sized customers, significantly improving implementation efficiency and customer value for similar clients.'
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
    "T9 Tea", "Linlee (邻里)", 
    "谭仔 (TamJai)", "Something For", "果呀呀"
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 relative transition-colors duration-500 print:py-4">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 print:mb-6 print:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white transition-colors duration-300 print:text-xl print:mb-1 print:tracking-tight">
            {t.title} <span className="text-blue-800 dark:text-blue-400">{t.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 tracking-tight print:text-[10pt] print:text-slate-500 print:tracking-tight">{t.subtitle}</p>
        </div>

        {/* 1. Key Metrics Bar - Simplified */}
        <div className="border-y border-slate-100 dark:border-slate-800 py-8 mb-16 flex flex-wrap justify-between items-center gap-8 print:py-3 print:mb-6 print:gap-2 print:border-gray-200 print:bg-slate-50/50 print:rounded-xl">
          {t.metrics.map((metric, idx) => (
            <div key={idx} className="flex-1 min-w-[120px] text-center print:min-w-0 print:text-center">
              <div className={`text-3xl font-bold mb-1 ${metric.color.replace('text-', 'text-slate-900 dark:text-white')} print:text-base print:mb-0`}>
                {metric.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-gray-400 font-medium uppercase tracking-wider print:text-[8.5pt] print:tracking-normal">
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
                <div key={index} className={`group border-b border-slate-100 dark:border-slate-800 pb-8 last:border-0 md:last:border-b print:pb-4 print:border-gray-100 ${item.colSpan ? 'md:col-span-2' : ''}`}>
                  <div className="flex justify-between items-start mb-2 print:mb-1">
                    <h4 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors print:text-base print:tracking-tight">
                      {item.brand}
                    </h4>
                    <span className="text-[10px] font-bold text-blue-800 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded uppercase print:bg-transparent print:border print:border-blue-100 print:text-[8.5pt]">
                      {item.highlight}
                    </span>
                  </div>
                  
                  <div className="text-[11px] font-bold text-slate-400 dark:text-gray-500 mb-2 uppercase tracking-normal print:text-[9pt] print:mb-1 print:tracking-normal">
                      {item.role}
                  </div>

                  {item.desc && (
                    <p className="text-sm text-slate-600 dark:text-gray-300 mb-4 leading-snug line-clamp-3 group-hover:line-clamp-none transition-all print:text-[10pt] print:mb-2 print:leading-normal print:line-clamp-none">
                        {item.desc}
                    </p>
                  )}

                  {item.background && (
                    <div className="mb-4 print:mb-2">
                      <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1 print:text-[10pt]">{language === 'zh' ? '项目背景' : 'Background'}</h5>
                      <p className="text-sm text-slate-600 dark:text-gray-300 leading-snug print:text-[10pt] print:leading-snug">{item.background}</p>
                    </div>
                  )}

                  {item.coreWork && (
                    <div className="mb-4 print:mb-2">
                      <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2 print:mb-1 print:text-[10pt]">{language === 'zh' ? '核心工作内容' : 'Core Responsibilities'}</h5>
                      <div className="space-y-3 print:space-y-1.5">
                        {item.coreWork.map((work: any, wIdx: number) => (
                          <div key={wIdx}>
                            <h6 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 print:text-[10pt]">{work.title}</h6>
                            <ul className="list-disc list-outside ml-4 text-sm text-slate-600 dark:text-gray-400 space-y-1 leading-snug print:text-[9.5pt] print:space-y-0.5 print:leading-snug">
                              {work.items.map((wi: string, iIdx: number) => <li key={iIdx}>{wi}</li>)}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.achievements && (
                    <div className="mb-4 print:mb-2">
                      <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1 print:text-[10pt]">{language === 'zh' ? '核心成就数据' : 'Core Achievement Data'}</h5>
                      <ul className="list-disc list-outside ml-4 text-sm text-slate-600 dark:text-gray-400 space-y-1 leading-snug print:text-[9.5pt] print:space-y-0.5 print:leading-snug">
                        {item.achievements.map((ach: string, aIdx: number) => <li key={aIdx}>{ach}</li>)}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 print:gap-1 mt-4 print:mt-2">
                      {item.tags.map((tag: string, i: number) => (
                      <span key={i} className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-gray-400 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700 print:bg-transparent print:border-gray-200 print:text-[8.5pt] print:px-1 print:py-0">
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
            <h3 className="text-xs font-bold text-center mb-8 text-slate-400 dark:text-gray-500 uppercase tracking-tight print:text-[8.5pt] print:mb-3 print:text-left">{t.brandsTitle}</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 opacity-60 hover:opacity-100 transition-opacity duration-500 print:opacity-100 print:justify-start print:gap-x-4 print:gap-y-2">
                {brandList.map((brand, idx) => (
                    <span key={idx} className="text-sm md:text-base font-bold text-slate-400 dark:text-slate-500 hover:text-blue-800 dark:hover:text-blue-400 transition-colors cursor-default print:text-[10pt] print:text-gray-600">
                        {brand}
                    </span>
                ))}
            </div>
        </div>

        {/* 4. AI Innovation Lab - Simplified */}
        <div className="pt-16 border-t border-slate-100 dark:border-slate-800 print:pt-4 print:border-gray-200">
            <div className="text-center mb-10 print:mb-2 print:text-left">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 print:text-lg print:mb-0.5">{t.aiTitle}</h3>
                <p className="text-slate-600 dark:text-gray-400 print:text-[10pt] print:text-gray-500">{t.aiDesc}</p>
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
                              <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors mb-2 print:text-base print:mb-0.5">
                                  {proj.name} 
                                  <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all print:hidden">→</span>
                              </h4>
                              <p className="text-sm text-slate-600 dark:text-gray-400 mb-4 leading-snug print:text-[10pt] print:mb-1 print:leading-normal">{proj.desc}</p>
                              <div className="flex flex-wrap justify-center sm:justify-start gap-2 print:gap-1">
                                  {proj.tags.map((tag, i) => (
                                      <span key={i} className="text-xs font-mono bg-white dark:bg-slate-800 text-slate-500 dark:text-gray-400 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 print:bg-transparent print:border-gray-200 print:text-[8.5pt] print:px-1.5 print:py-0">
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
