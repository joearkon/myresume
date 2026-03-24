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
          role: '项目负责人 (2018 - 2020 | 常驻深圳)',
          colSpan: true,
          background: '作为喜茶全国门店核心收银与运营中台，HiPOS 系统覆盖全国 500+ 门店（2020年数据，2024年已突破 2000 家），对接小程序、美团外卖、会员、支付、财务、BOH 后厨、物业等全链路系统，支撑喜茶直营 + 海外门店规模化运营。',
          coreWork: [
            {
              title: '一、大客户全生命周期项目管理',
              items: [
                '作为喜茶核心项目对接人，负责 HiPOS 系统从 0 到 1 落地、需求沟通、进度管控、验收全流程。',
                '主导需求评审、SOW 签署、费用确认、账单核对，管理月度 CR 需求与项目款项，确保回款与验收闭环。',
                '分阶段上线推广：制定月度上线排期表（9-12 月逐月推进），明确各批次上线门店、责任人、时间节点；完成 5 家试点门店上线验证，输出试点总结与优化方案；统筹全国门店上线，覆盖一线城市核心店→二线城市→下沉市场。'
              ]
            },
            {
              title: '二、连锁门店数字化系统落地',
              items: [
                '负责POS 点单、支付、小票、杯贴、日结、外卖接单全流程功能落地，提升门店点单效率。',
                '推动闪结、一键重印、订单备注、渠道区分等效率功能上线，降低门店操作失误。',
                '对接美团外卖、小程序自取、堂食、外带多渠道订单统一履约，提升接单与制作准确率。'
              ]
            },
            {
              title: '三、跨系统全域对接与数据打通',
              items: [
                '负责HiPOS 与小程序、会员系统、支付系统、BOH 后厨、EHR 人事、电子发票、物业全接口对接。',
                '统一订单、商品、会员、支付、日结数据口径，支撑财务对账与运营分析。',
                '推动海外门店（日本 / 澳门）多时区、多税率、多币种适配，支持喜茶全球化扩张。'
              ]
            },
            {
              title: '四、门店体验优化与 UAT 验收',
              items: [
                '收集门店营运痛点，推动UI 交互优化、键盘布局、商品展示、错误防呆等体验升级。',
                '组织UAT 测试、问题跟踪、闭环修复，确保系统稳定可用。',
                '输出操作手册、培训、上线支持，保障全国门店快速上手。'
              ]
            },
            {
              title: '五、BOH 供应链运营中台全流程管理',
              items: [
                '负责喜茶全国门店 BOH 供应链运营中台全流程管理，覆盖订货、收货、盘点、报废、调拨、库存管控与报表分析，保障 500+ 门店高效、稳定、低成本运营。',
                '实现原料智能拆解与建议订货量自动计算：通过系统化规则，实现「成品订货 → 自动拆 BOM → 算出原料建议订货量」，确保库存账实一致。',
                '构建自动化订货与审批闭环：系统自动生成每日订货单，并严格按安全库存、最小订量、订货周期规则控制；实现审核流、驳回、重新提交的全闭环管理。'
              ]
            },
            {
              title: '六、上线后运营与监控体系搭建',
              items: [
                '运营监控体系落地：搭建实时监控看板，监控门店收银成功率、订单处理效率、系统稳定性、异常订单占比；建立日报/周报/月报机制，输出运营数据、问题分析、优化建议；制定异常处理流程（小票异常、支付失败、订单卡顿等问题 10 分钟响应、2 小时闭环）。',
                '门店报修与问题闭环：建立全国门店报修体系，接收门店报修需求，分类分级处理；输出《喜茶 HIPOS 门店报修汇总表》，跟踪问题处理进度、解决率、满意度；定期复盘高频问题，推动研发优化，降低重复报修率。',
                '客户拜访与需求收集：定期拜访喜茶总部营运、财务、IT 部门，沟通系统使用情况、运营痛点、优化需求；实地走访一线门店，了解店长/收银员操作体验，收集改进建议；输出《客户拜访报告》，推动需求落地，提升客户满意度。'
              ]
            },
            {
              title: '七、项目验收与回款跟进',
              items: [
                '多阶段验收推进：按月度完成需求验收、功能验收、上线验收、运维验收；整理验收材料（测试报告、上线清单、运营数据、用户反馈），完成签字确认。',
                '回款全流程跟进：对接喜茶财务部门，按合同节点推进阶段性回款；解决回款过程中的疑问（验收证明、发票开具、流程审批），确保款项按期到账。'
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
              title: '一、项目全流程主导（从 0 到 1 总负责）',
              items: [
                '前期调研与蓝图规划：牵头门店、营运、财务、新零售、IT 多部门调研，梳理 13 个核心业务流程；输出业务现状分析、系统蓝图方案、接口集成方案，完成蓝图汇报与确认；制定项目实施计划、里程碑节点、风险管控方案，确保方向一致。',
                '系统落地与功能实现：主导商品、库存、订单、价格、对账、账号六大核心模块落地；完成 HiPOS 收银、BOH 库存、全渠道交易、移动大掌柜四大系统上线；负责需求评审、功能验收、UAT 测试、问题闭环，保障系统符合业务实际。',
                '上线验收与交付：制定上线切换方案、应急预案、数据迁移方案；完成 5 家试点门店上线验证、首次月结、系统终验；输出操作手册、培训文档、验收报告，完成项目正式交付。',
                '全国规模化推广：搭建总部→分部→门店三级推广组织，制定 6 批次全国推广计划；统筹五大区域，覆盖 3000+ 门店；建立推广评审机制、周复盘机制、问题快速响应机制，保障推广效率。'
              ]
            },
            {
              title: '二、核心系统对接落地',
              items: [
                '外卖平台对接落地：负责美团、饿了么全渠道对接，完成门店、商品、团单映射；实现订单自动接单、语音播报、小票自动打印、渠道统一管理；落地外卖菜单中台统一管控、价格同步、库存共享、自动沽清。',
                '第三方系统集成对接：对接 SAP ERP（商品、库存、订货、退货、盘点、营收数据双向同步）；对接云徙会员（会员认证、优惠券核销、积分/储值支付）；对接自研小程序（菜单、库存、订单、支付、履约一体化）；对接聚合支付、物流配送、电子发票，实现全链路自动化。',
                '数据与报表对接：搭建全渠道数据口径，实现 POS、外卖、小程序数据统一；落地门店实时报表、营收报表、库存报表、对账报表自动化；完成异常电子小票修复机制，保障数据准确可追溯。'
              ]
            },
            {
              title: '三、关键业务功能落地',
              items: [
                '全渠道商品 & 价格体系落地：建立统一商品库、多规格管理、BOM 配方、套餐组合标准化；落地价格中心、渠道价、门店价、菜单分组、新门店快速复制；实现美团/饿了么/POS/小程序商品通、价格通、库存通。',
                '智能库存 & 订货体系落地：落地订货→收货→退货→报废→调拨→盘点全流程闭环；实现日盘/月盘、移动盘点、库存实时扣减、自动预警；搭建建议订货量模型，按销量、库存、损耗自动计算订货量。',
                '全渠道交易 & 履约落地：统一堂食、外卖、自提、小程序订单，实现一站式收银；落地促销引擎、满减、折扣、会员价、平台券统一核销；实现自动日结、财务自动对账、加盟商分账自动化。'
              ]
            },
            {
              title: '四、培训方案与赋能落地',
              items: [
                '分层培训体系设计：制定总部→分部→门店三级培训方案，覆盖运维、运营、店长、收银员；输出操作手册、培训 PPT、教学视频、FAQ 全套资料；设计场景化培训（收银操作、外卖接单、库存管理、日结合规）。',
                '培训执行与赋能：组织集中培训、现场带教、远程指导，确保全员会用；建立考核机制、答疑群、紧急支持通道，降低上线阻力；知识转移给分部团队，实现区域自主运维、自主培训。'
              ]
            },
            {
              title: '五、项目管理与跨部门协同',
              items: [
                '项目管控：主导周例会、进度跟踪、风险预警、问题闭环、里程碑验收；协调顶誉营运、财务、新零售、IT、加盟商与合阔产研、实施团队；管控需求范围、变更流程、交付质量、上线节奏。',
                '运营规则落地：制定门店运营 SOP、权限管理、业务流程、审批规则；建立异常处理机制、数据核对机制、月结机制；保障系统上线后可运行、可管理、可迭代。'
              ]
            },
            {
              title: '六、上线后运营拜访与客户成功（大客户运营能力）',
              items: [
                '总部/区域定期拜访：主动上门拜访顶誉总部、区域负责人，沟通系统使用情况；收集需求、反馈体验、协调优化、提升满意度。',
                '门店实地巡检与辅导：下门店看实操、查流程、纠错误、提效率；解决订货不准、盘点复杂、对账麻烦、操作繁琐等真实痛点。',
                '运营指标复盘：定期输出订货准确率、盘点完成率、库存差异率、问题关闭率；用数据证明系统价值，强化客户认可。'
              ]
            },
            {
              title: '七、验收与回款跟进（商务 + 项目闭环能力）',
              items: [
                '项目验收材料准备：整理实施报告、测试报告、培训记录、上线清单、功能清单；协助完成验收流程、签字盖章、阶段验收。',
                '回款全流程跟进：按合同节点对接财务、销管、总部管理层；推动验收确认→开票→回款全闭环；确保项目款项按期到账，无拖欠、无争议。',
                '售后与续费基础：建立良好客户关系，为后续二期增补、三期拓展、续费打下基础。'
              ]
            }
          ],
          achievements: [
            '完成 5 家试点门店上线与全国 3000+ 门店规模化推广',
            '成功打通全域系统，实现线上线下一体化、供应链自动化、财务对账智能化',
            '构建六大中心，实现商品、库存、价格、订单、门店的全面互通'
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
          role: 'Project Lead (2018 - 2020 | Shenzhen)',
          colSpan: true,
          background: 'As the core POS and operational middle-platform for Heytea\'s national stores, the HiPOS system covers 500+ stores nationwide (as of 2020, exceeding 2000 stores by 2024), integrating with mini-programs, Meituan delivery, membership, payment, finance, BOH, property, and other full-link systems, supporting the scaled operation of Heytea\'s direct-sale and overseas stores.',
          coreWork: [
            {
              title: '1. Key Account Lifecycle Project Management',
              items: [
                'Acted as the core project contact for Heytea, responsible for the 0-to-1 implementation of the HiPOS system, requirement communication, schedule control, and acceptance.',
                'Led requirement reviews, SOW signing, fee confirmation, and billing verification. Managed monthly CR requirements and project funds to ensure closed-loop collection and acceptance.',
                'Phased Rollout: Formulated monthly rollout schedules (Sept-Dec), defining target stores, owners, and timelines for each batch; completed validations for 5 pilot stores, delivering summaries and optimization plans; coordinated national rollout covering tier-1 core stores → tier-2 cities → lower-tier markets.'
              ]
            },
            {
              title: '2. Chain Store Digital System Implementation',
              items: [
                'Responsible for the full-process feature implementation of POS ordering, payment, receipts, cup stickers, daily settlement, and delivery order receiving, improving store ordering efficiency.',
                'Promoted the launch of efficiency features such as quick checkout, one-click reprint, order remarks, and channel differentiation, reducing store operational errors.',
                'Integrated multi-channel order fulfillment across Meituan delivery, mini-program pickup, dine-in, and takeout, improving order receiving and production accuracy.'
              ]
            },
            {
              title: '3. Cross-system Integration & Data Connectivity',
              items: [
                'Responsible for full API integration between HiPOS and mini-programs, membership systems, payment systems, BOH, EHR, e-invoices, and property management.',
                'Unified data standards for orders, products, members, payments, and daily settlements to support financial reconciliation and operational analysis.',
                'Drove multi-timezone, multi-tax, and multi-currency adaptation for overseas stores (Japan/Macau), supporting Heytea\'s global expansion.'
              ]
            },
            {
              title: '4. Store Experience Optimization & UAT Acceptance',
              items: [
                'Collected operational pain points to drive experience upgrades such as UI interaction optimization, keyboard layout, product display, and error prevention.',
                'Organized UAT testing, issue tracking, and closed-loop fixes to ensure system stability and availability.',
                'Delivered operation manuals, training, and go-live support to ensure quick onboarding for stores nationwide.'
              ]
            },
            {
              title: '5. BOH Supply Chain Operations Middle-Platform Management',
              items: [
                'Responsible for the full-process management of Heytea\'s national store BOH supply chain operations middle-platform, covering ordering, receiving, inventory counting, scrapping, transferring, inventory control, and report analysis, ensuring efficient, stable, and low-cost operations for 500+ stores.',
                'Implemented intelligent raw material breakdown and automatic calculation of suggested order quantities: Achieved "finished goods ordering → auto BOM breakdown → calculate suggested raw material order quantity" through systematic rules, ensuring inventory accuracy.',
                'Built an automated ordering and approval closed-loop: The system automatically generates daily orders controlled by safety stock, minimum order quantity, and order cycle rules; realized a full closed-loop management of approval flows, rejections, and resubmissions.'
              ]
            },
            {
              title: '6. Post-Launch Operations & Monitoring System',
              items: [
                'Operations Monitoring: Built real-time dashboards to monitor checkout success rates, order processing efficiency, system stability, and exception rates; established daily/weekly/monthly reporting mechanisms; formulated exception handling workflows (10-min response, 2-hour resolution for receipt errors, payment failures, etc.).',
                'Store Maintenance & Issue Resolution: Established a national store maintenance system to classify and process requests; tracked progress and satisfaction via maintenance summary reports; regularly reviewed high-frequency issues to drive R&D optimizations and reduce recurring tickets.',
                'Client Visits & Requirement Gathering: Regularly visited Heytea HQ (Operations, Finance, IT) to communicate system usage and optimization needs; conducted on-site store visits to gather feedback from managers and cashiers; delivered client visit reports to drive requirement implementation and improve satisfaction.'
              ]
            },
            {
              title: '7. Project Acceptance & Payment Collection',
              items: [
                'Multi-Phase Acceptance: Completed monthly requirement, feature, go-live, and maintenance acceptances; organized acceptance materials (test reports, go-live checklists, operational data, user feedback) and secured sign-offs.',
                'Full-Process Payment Follow-up: Liaised with Heytea\'s finance department to drive milestone-based payments; resolved queries during the payment process (acceptance proofs, invoicing, approvals) to ensure on-time fund collection without delays.'
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
              title: '1. Full-Process Project Leadership (0 to 1)',
              items: [
                'Preliminary Research & Blueprint Planning: Led multi-department research (stores, operations, finance, new retail, IT), mapped 13 core business processes; delivered current state analysis, system blueprint, and API integration plans; established implementation schedules, milestones, and risk control plans.',
                'System Implementation & Feature Realization: Led the implementation of 6 core modules (products, inventory, orders, pricing, reconciliation, accounts); launched 4 major systems (HiPOS, BOH, Omni-channel Trading, Mobile Manager); managed requirement reviews, UAT, and issue resolution.',
                'Go-Live Acceptance & Delivery: Formulated cutover plans, emergency response, and data migration strategies; completed 5 pilot store validations, first monthly closing, and final system acceptance; delivered operation manuals, training docs, and acceptance reports.',
                'National Scaled Rollout: Built a 3-tier promotion org (HQ → Branch → Store), planned 6 rollout phases; coordinated 5 major regions covering 3000+ stores; established review, weekly retrospective, and rapid response mechanisms.'
              ]
            },
            {
              title: '2. Core System Integration',
              items: [
                'Delivery Platform Integration: Managed omni-channel integration for Meituan and Ele.me, completing store, product, and group order mapping; implemented auto-receiving, voice broadcasting, auto-printing, and unified channel management; enabled centralized delivery menu control, price sync, inventory sharing, and auto-sell-out.',
                '3rd-Party System Integration: Integrated SAP ERP (two-way sync for products, inventory, orders, returns, counting, revenue); CloudHub Membership (auth, coupon verification, points/value payment); in-house mini-program (unified menu, inventory, orders, payment, fulfillment); aggregated payments, logistics, and e-invoices.',
                'Data & Report Integration: Built omni-channel data standards unifying POS, delivery, and mini-program data; automated real-time store, revenue, inventory, and reconciliation reports; implemented an exception e-receipt repair mechanism for data traceability.'
              ]
            },
            {
              title: '3. Key Business Feature Implementation',
              items: [
                'Omni-channel Product & Pricing System: Established a unified product library, multi-spec management, BOM recipes, and combo standardization; implemented the pricing center, channel pricing, store pricing, menu grouping, and rapid new store replication.',
                'Intelligent Inventory & Ordering System: Implemented a full closed-loop for ordering → receiving → returning → scrapping → transferring → counting; enabled daily/monthly counting, mobile counting, real-time deduction, and auto-warnings; built a suggested order model based on sales, inventory, and loss.',
                'Omni-channel Trading & Fulfillment: Unified dine-in, delivery, pickup, and mini-program orders for one-stop checkout; implemented a promotion engine for unified verification of discounts, membership prices, and platform coupons; automated daily settlement, financial reconciliation, and franchisee revenue sharing.'
              ]
            },
            {
              title: '4. Training & Empowerment',
              items: [
                'Tiered Training System Design: Formulated a 3-tier training plan (HQ → Branch → Store) covering IT, operations, managers, and cashiers; delivered operation manuals, PPTs, videos, and FAQs; designed scenario-based training (checkout, delivery receiving, inventory, daily settlement).',
                'Training Execution: Organized centralized training, on-site coaching, and remote guidance; established assessment mechanisms, Q&A groups, and emergency support channels; transferred knowledge to branch teams for regional self-maintenance and training.'
              ]
            },
            {
              title: '5. Project Management & Cross-Department Collaboration',
              items: [
                'Project Control: Led weekly meetings, progress tracking, risk warnings, issue resolution, and milestone acceptance; coordinated Dingyu operations, finance, new retail, IT, franchisees, and Hekuo R&D/implementation teams; managed scope, change processes, delivery quality, and go-live pacing.',
                'Operational Rule Implementation: Formulated store operation SOPs, permission management, business processes, and approval rules; established exception handling, data verification, and monthly closing mechanisms; ensured the system was operable, manageable, and iterable post-launch.'
              ]
            },
            {
              title: '6. Post-Launch Operations Visits & Customer Success',
              items: [
                'Regular HQ/Regional Visits: Proactively visited Dingyu HQ and regional leaders to communicate system usage; collected requirements, gathered feedback, coordinated optimizations, and improved satisfaction.',
                'On-site Store Inspections & Coaching: Visited stores to observe operations, check processes, correct errors, and improve efficiency; resolved real pain points such as inaccurate ordering, complex counting, troublesome reconciliation, and cumbersome operations.',
                'Operational Metrics Review: Regularly delivered reports on ordering accuracy, counting completion rate, inventory variance rate, and issue closure rate; proved system value with data to strengthen customer recognition.'
              ]
            },
            {
              title: '7. Acceptance & Payment Collection Follow-up',
              items: [
                'Project Acceptance Material Preparation: Organized implementation reports, test reports, training records, go-live checklists, and feature lists; assisted in completing the acceptance process, signing/stamping, and phased acceptance.',
                'Full-Process Payment Follow-up: Liaised with finance, sales management, and HQ management according to contract milestones; drove the full closed-loop of acceptance confirmation → invoicing → payment collection; ensured project funds arrived on time without delays or disputes.',
                'Foundation for After-Sales & Renewals: Established strong customer relationships, laying the groundwork for subsequent Phase II additions, Phase III expansions, and contract renewals.'
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
        <div className="text-center mb-16 print:mb-4 print:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300 print:text-xl print:mb-1">
            {t.title} <span className="text-blue-800 dark:text-blue-400">{t.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 print:text-xs print:text-gray-500">{t.subtitle}</p>
        </div>

        {/* 1. Key Metrics Bar - Simplified */}
        <div className="border-y border-slate-100 dark:border-slate-800 py-8 mb-16 flex flex-wrap justify-between items-center gap-8 print:py-2 print:mb-4 print:gap-2 print:border-gray-200">
          {t.metrics.map((metric, idx) => (
            <div key={idx} className="flex-1 min-w-[120px] text-center print:min-w-0 print:text-left">
              <div className={`text-3xl font-bold mb-1 ${metric.color.replace('text-', 'text-slate-900 dark:text-white')} print:text-sm print:mb-0`}>
                {metric.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-gray-400 font-medium uppercase tracking-wider print:text-[8px] print:tracking-normal">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* 2.5 Brand Wall - Simplified */}
        <div className="mb-16 print:mb-4">
            <h3 className="text-sm font-bold text-center mb-6 text-slate-400 dark:text-gray-500 uppercase tracking-widest print:text-[10px] print:mb-2 print:text-left print:tracking-normal">{t.brandsTitle}</h3>
            <div className="flex flex-wrap justify-center gap-3 print:justify-start print:gap-1.5">
                {brandList.map((brand, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-600 dark:text-gray-300 text-xs font-medium hover:border-blue-800 dark:hover:border-blue-400 hover:text-blue-800 dark:hover:border-blue-400 transition-all cursor-default print:px-2 print:py-0.5 print:text-[10px] print:border-gray-200">
                        {brand}
                    </span>
                ))}
            </div>
        </div>

        {/* 3. Case Study Cards - Simplified to List Style */}
        <div className="mb-16 print:mb-4">
            <h3 className="text-2xl font-bold text-center mb-10 text-slate-800 dark:text-white print:text-lg print:mb-2 print:text-left">{t.casesTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 print:grid-cols-1 print:gap-y-4">
            {t.cases.map((item: any, index) => (
                <div key={index} className={`group border-b border-slate-100 dark:border-slate-800 pb-8 last:border-0 md:last:border-b print:pb-2 print:border-gray-100 print:break-inside-avoid ${item.colSpan ? 'md:col-span-2' : ''}`}>
                  <div className="flex justify-between items-start mb-2 print:mb-0.5">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors print:text-sm">
                      {item.brand}
                    </h4>
                    <span className="text-[10px] font-bold text-blue-800 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded uppercase print:bg-transparent print:border print:border-blue-100 print:text-[8px]">
                      {item.highlight}
                    </span>
                  </div>
                  
                  <div className="text-[11px] font-bold text-slate-400 dark:text-gray-500 mb-2 uppercase tracking-wider print:text-[9px] print:mb-0.5 print:tracking-normal">
                      {item.role}
                  </div>

                  {item.desc && (
                    <p className="text-sm text-slate-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all print:text-xs print:mb-1 print:leading-normal print:line-clamp-none">
                        {item.desc}
                    </p>
                  )}

                  {item.background && (
                    <div className="mb-4">
                      <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">{language === 'zh' ? '项目背景' : 'Background'}</h5>
                      <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed print:text-xs">{item.background}</p>
                    </div>
                  )}

                  {item.coreWork && (
                    <div className="mb-4">
                      <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">{language === 'zh' ? '核心工作内容' : 'Core Responsibilities'}</h5>
                      <div className="space-y-3">
                        {item.coreWork.map((work: any, wIdx: number) => (
                          <div key={wIdx}>
                            <h6 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 print:text-[11px]">{work.title}</h6>
                            <ul className="list-disc list-outside ml-4 text-sm text-slate-600 dark:text-gray-400 space-y-1 print:text-[10px]">
                              {work.items.map((wi: string, iIdx: number) => <li key={iIdx}>{wi}</li>)}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.achievements && (
                    <div className="mb-4">
                      <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">{language === 'zh' ? '项目成就' : 'Achievements'}</h5>
                      <ul className="list-disc list-outside ml-4 text-sm text-slate-600 dark:text-gray-400 space-y-1 print:text-[10px]">
                        {item.achievements.map((ach: string, aIdx: number) => <li key={aIdx}>{ach}</li>)}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 print:gap-1 mt-4">
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
