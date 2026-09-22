import React from 'react';
import { Language } from '../App';

interface ProjectsProps {
  language: Language;
}

interface ProjectCaseItem {
  id: string;
  name: string;
  group: 'rollout' | 'csm' | 'presales';
  category: string;
  role: string;
  scale: string;
  badge?: string;
  brandBadges?: string[];
  challenge: string;
  solutions: string[];
  achievements: string[];
  links?: { title: string; url: string }[];
  tags: string[];
}

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const content = {
    zh: {
      titlePrefix: '核心项目交付、',
      titleHighlight: '推广落地与大客户运营',
      subtitle: '从千万级售前咨询到 5000+ 门店标杆割接与精细化运营，以实战成果证明业务拿结果能力',
      metrics: [
        { value: '5000+', label: '全国连锁门店交付落地', color: 'text-blue-600' },
        { value: '90%', label: '头部 KA 客户年度留存率', color: 'text-emerald-600' },
        { value: '50%', label: '团队年度核心营收贡献', color: 'text-purple-600' },
        { value: '3000+', label: '千店级中台平滑割接', color: 'text-amber-600' }
      ],
      groups: {
        rollout: '标杆品牌千万级项目交付与全国推广落地',
        csm: '大客户成功 (CSM) 与头部连锁精细化运营体系',
        presales: '数字化咨询、售前方案设计与千万级招投标'
      },
      cases: [
        {
          id: 'proj-case-jiujiuya',
          name: '久久丫 · 顶誉集团：3000+ 连锁门店数字化业务中台全面割接与推广',
          group: 'rollout' as const,
          category: '千店级复杂中台交付与实施推广',
          role: '交付总指挥 / 业务中台负责人 (常驻嘉善生产基地与上海总部)',
          scale: '3000+ 门店分 6 批平滑割接 | 59 套异构系统打通',
          badge: '千店级中台交付',
          brandBadges: ['久久丫', '留夫鸭', '顶誉集团', '阿里云私有化'],
          challenge: '旗下久久丫、留夫鸭 3000+ 门店遍布全国，直营与特许加盟双轨并行，存量林立着 SAP、金蝶、自研 POS 等 59 套异构系统孤岛。价格策略混乱、加盟对账耗时数周，生产与门店要货脱节，业务系统割接对稳定性要求极高。',
          solutions: [
            '【现场驻场调研与流程梳理】常驻嘉善供应链生产基地与上海总部，带领团队历时 71 天走访 7 大核心部门，梳理 120+ 流程泳道图，输出业务中台落地蓝图。',
            '【千店千价与加盟订货推广】针对短保卤味加盟商，推广落地移动端要货门户；在阿里云私有化环境中打通 59 个存量接口，支撑千店千价下发与履约协同。',
            '【分批平滑割接战役部署】制定「单店打样跑通 -> 片区集群验证 -> 全国 6 批次推进」的稳健割接策略，建立作战指挥室与应急回滚演练机制。'
          ],
          achievements: [
            '【平滑割接与业务连续性】分 6 批次推进全国 3000+ 门店系统平稳割接上线，有效保障了全国门店营业与供应链发货的连续性；',
            '【加盟对账效率跃升 80%+】改变跨月手工对账模式，加盟商订货至资金核销流程线上化，大幅缩减对账周期；',
            '【产销协同与周转优化】打通门店要货与中央工厂排产，供应链库存周转率提升超 15%，获集团高管团队认可。'
          ],
          tags: ['久久丫 3000+ 门店', '平滑割接', '59 系统打通', '对账提效 80%', '产销协同', '大型项目总控']
        },
        {
          id: 'proj-case-heytea',
          name: '喜茶 (HEYTEA) 深圳总部：全国 800+ 直营门店收银履约与建议订货全国推广',
          group: 'rollout' as const,
          category: '头部新茶饮全域标杆交付与精细化运营',
          role: '项目总负责人 / 方案架构师 (常驻喜茶深圳总部 2 年)',
          scale: '全国 800+ 直营门店 | 日峰值 10万+ 订单 | 物耗降本千万级',
          badge: '新茶饮标杆落地',
          brandBadges: ['喜茶 HEYTEA', '800+ 直营店', '建议订货 MRP', '深圳总部'],
          challenge: '喜茶处于全国狂飙突进期，日峰值 10 万+ 订单严重冲击前台造成卡单漏单；极短保鲜果与高单价乳品严重依赖店长拍脑袋订货，全国门店报损率高达 5.9%，频现断货与爆仓并存。',
          solutions: [
            '【全渠道收银全国上线推广】常驻喜茶总部统筹全国 800+ 门店 HiPOS 收银系统与自研 uprint 打印微服务分批割接，针对小红书/小程序爆单场景定制分吧台出单规范。',
            '【建议订货飞轮机制落地运营】推行「总部统一策略参数 -> 算法输出建议订货量 -> 店长仅处理例外并必填原因 -> 经营指标反向校准」的落地推行宣贯与督导培训机制。',
            '【跨部门作战与指标责任制】协同营运部、供应链大仓与督导团队建立周度物耗对焦机制，将订货提报准时率与报损指标挂钩门店 KPI。'
          ],
          achievements: [
            '【全国门店极速稳定履约】平稳支撑 800+ 直营门店日峰值 10 万+ 订单，出单故障与错单率降至历史最低，成为茶饮行业收银履约典范；',
            '【报损率压降挽回千万物耗】全国门店报损与盘点差异率自 5.9% 显著压降至 3.9%，年化直接挽回超千万元级鲜果原料损耗；',
            '【店长作业提效与供应链稳定】店长日均订货操作时间缩减 40 分钟/店/天，订货提报准时率达 99.2%，大仓原料缺货率下降 45%。'
          ],
          tags: ['喜茶全国推广', 'HiPOS 落地', '损耗 5.9%->3.9%', '年降千万元', '门店订货飞轮', '营运协同']
        },
        {
          id: 'proj-case-shida',
          name: '适达餐饮集团 (DQ 冰雪皇后 / 棒约翰)：1000+ 跨国连锁门店 BOH 供应链交付',
          group: 'rollout' as const,
          category: '外资快餐跨国供应链实施交付',
          role: '实施交付经理 / 解决方案架构师',
          scale: '全国 1000+ 门店 | 盘点提效 50% | 食材损耗降低 2%',
          badge: '跨国连锁交付',
          brandBadges: ['DQ 冰雪皇后', '棒约翰 Papa John\'s', '适达餐饮', '1000+ 门店'],
          challenge: '知名跨国快餐冰品原料保鲜要求严苛，此前门店进销存与冷链大仓数据割裂，手工盘点效率低下且账实不符，损耗与食品安全隐患难以溯源。',
          solutions: [
            '【BOH 进销存标准化交付】实施交付标准化门店 BOH 进销存系统，覆盖日盘、周盘、月盘实时盘点与耗损智能预警。',
            '【冷链仓店一体化打通】打通门店端要货与中央冷链大仓直连，规范跨国连锁门店物料收发与温控流转 SOP。',
            '【全国督导与店组培训认证】制定多语言培训手册，分大区推进店长、值班经理数字化实操认证考核。'
          ],
          achievements: [
            '【赋能千店盘点提效 50%】成功推广覆盖全国 1000+ DQ 与棒约翰门店，单店盘点用时缩减一半；',
            '【损耗降低与合规达标】食材综合损耗降低 2%，全面达成跨国连锁企业内控审计与食品安全合规要求。'
          ],
          tags: ['DQ / 棒约翰', '门店 BOH 供应链', '1000+ 门店', '盘点提效 50%', '损耗降 2%', '标准化 SOP']
        },
        {
          id: 'proj-case-tamjai',
          name: '谭仔国际 (TamJai International)：全球化多国跨国连锁数字化运营与智能运维',
          group: 'rollout' as const,
          category: '跨国连锁出海数字化运营与服务交付',
          role: '全球数字化运营负责人 / 解决方案架构师',
          scale: '覆盖港、新、日、澳、马、菲等多国连锁 | 工单响应闭环提效 50%',
          badge: '全球化出海运营',
          brandBadges: ['谭仔三哥', '谭仔云南米线', 'Zendesk', '多国出海运营'],
          challenge: '品牌高速拓展香港、新加坡、日本、澳大利亚、马来西亚及菲律宾等多国市场，跨时区、多语言导致跨国门店软硬件故障申报迟缓，服务体验与响应严重滞后。',
          solutions: [
            '【全球化智能客服平台构建】以 WhatsApp Business 与 Zendesk 为核心纽带，从 0 搭建多时区、多语种全球服务工单协同体系。',
            '【跨时区智能路由与 SLA 分级】配置多国语言常见问题自助知识库，制定跨时区紧急事件智能分流派单机制与三级 SLA 升级规则。',
            '【海外 Issue 可视化与运营复盘】建立海外门店硬件与系统故障报修看板，定期向海外管理层输出数字化运营与产品优化建议。'
          ],
          achievements: [
            '【跨国工单流转提效 50%】有效覆盖海外数百家门店，工单平均响应与闭环处理时效提升 50%；',
            '【输出成熟出海运营体系】建立标准化跨国数字化运维体系，为国内 SaaS 解决方案出海赋能积累关键实战方法论。'
          ],
          tags: ['谭仔国际', '全球化出海', '跨时区智能运维', '工单提效 50%', '多语种服务', 'Zendesk']
        },
        {
          id: 'proj-ka-csm',
          name: '头部连锁品牌大客户成功 (CSM) 与精细化分层运营体系',
          group: 'csm' as const,
          category: '存量大客户精细化运营与商业增购',
          role: '大客户运营负责人 / 客户成功总监 (CSM Director)',
          scale: '90% 核心 KA 年度留存率 | 贡献团队 50% 核心营收',
          badge: '核心运营机制',
          brandBadges: ['喜茶', '星巴克', 'SomethingFor', '果呀呀'],
          challenge: '存量大客户系统定制深、容错门槛高且决策链条长；中小品牌诉求散乱，若无体系化分层运营机制，极易导致售后救火、客户流失与增购乏力。',
          solutions: [
            '【“一客一策”分层运营矩阵】喜茶配备产研专班实现双周敏捷迭代；星巴克组建 7x24 高可用保障团队；重点大型连锁配置专属 CSM 深度驻场挖潜。',
            '【中小客户联合运维网格】针对 SomethingFor、果呀呀等成长型连锁，采用 AM（客户经理）+ PM（项目经理）网格化联合机制，提炼共性痛点反哺产研。',
            '【服务即增购与交付认证】联动国内外生态服务商建立交付运维认证机制，以高满意度续约与模块增购驱动业务长效增长。'
          ],
          achievements: [
            '【核心 KA 客户 90% 高留存】核心头部标杆客户年度续约留存率稳定达 90% 以上，建立起深厚互信的高管客情关系；',
            '【贡献团队 50% 核心营收】通过精细化深度运营、功能模块增购与新品牌签约，持续贡献团队一半的年度核心营收；',
            '【产研反哺产品正向迭代】提炼一线客户共性痛点，驱动底层 SaaS 产品完成 10+ 项核心功能标准化重构。'
          ],
          tags: ['KA 一客一策', '90% 留存率', '50% 营收贡献', 'CSM 精细化运营', '增购拓展', '产研反哺']
        },
        {
          id: 'proj-presales-framework',
          name: '企业级数字化咨询、方案架构与千万级售前招投标',
          group: 'presales' as const,
          category: '售前咨询与商业化招投标拓展',
          role: '数字化解决方案专家 / 资深售前顾问',
          scale: '深度支撑千万级项目中标 | 现场讲标高通过率',
          badge: '千万级招投标',
          brandBadges: ['头部知名茶饮', '大型咖啡连锁', '全国知名快餐', '数字化蓝图'],
          challenge: '大型连锁企业数字化转型决策链长、利益诉求复杂，通用 PPT 方案无法切中客户 C-Level 业务痛点，售前与交付存在断层风险。',
          solutions: [
            '【端到端顶层规划与 POC 攻坚】主导大型连锁客户业务蓝图规划、系统架构设计与场景化 POC（概念验证），精准击中客户降本增效痛点。',
            '【技术商务双标与高管讲标答辩】高质量统筹编制技术标与商务标书，现场主导竞品对标剖析、高水准讲标答辩及高管技术质疑拆解。',
            '【方案武器库与售前交付闭环】沉淀《连锁餐饮数字化最佳实践白皮书》与标准化售前方案库，建立售前-交付前置风险排查闭环。'
          ],
          achievements: [
            '【支撑多个百万/千万级项目中标】深度支撑某知名头部茶饮、大型咖啡连锁等标杆项目成功中标，开拓数千万元级商业盘子；',
            '【讲标通过率位居团队前列】专业的技术深度与精准的行业理解获得客户 C-Level 决策层高度认可，讲标中标率名列前茅；',
            '【方案编制效率提升 40%+】建立标准化售前工具与标书模板资产，大幅缩短前期立项周期并降低交付履约风险。'
          ],
          tags: ['售前蓝图规划', '千万级项目中标', '技术商务标书', '高管讲标答辩', '行业白皮书', 'POC 验证']
        }
      ]
    },
    en: {
      titlePrefix: 'Key Project Delivery,',
      titleHighlight: 'Rollout & KA Operations',
      subtitle: 'From multi-million presales bids to 5000+ chain store cutovers and refined customer success operations',
      metrics: [
        { value: '5000+', label: 'Stores Successfully Delivered', color: 'text-blue-600' },
        { value: '90%', label: 'Key Account Annual Retention', color: 'text-emerald-600' },
        { value: '50%', label: 'Team Core Revenue Contribution', color: 'text-purple-600' },
        { value: '3000+', label: 'Stores Platform Cutover', color: 'text-amber-600' }
      ],
      groups: {
        rollout: 'Benchmark Brand Multi-Million Delivery & Nationwide Rollout',
        csm: 'Key Account Success (CSM) & Operations Architecture',
        presales: 'Digital Consulting, Pre-sales Solutions & Bidding'
      },
      cases: [
        {
          id: 'proj-case-jiujiuya',
          name: 'Jiujiuya · Dingyu Group: 3000+ Stores Middle-Platform Cutover & Nationwide Rollout',
          group: 'rollout' as const,
          category: 'Large-Scale Enterprise Platform Delivery & Implementation',
          role: 'Head of Delivery / Middle-Platform Lead (Stationed in Jiashan Factory & Shanghai HQ)',
          scale: '3000+ Stores in 6 Batches Smooth Cutover | 59 Systems Connected',
          badge: 'Large-Scale Delivery',
          brandBadges: ['Jiujiuya', 'Liufu Duck', 'Dingyu Group', 'Alibaba Cloud Private'],
          challenge: '3000+ direct and franchise stores across China were trapped by 59 siloed systems (SAP, Kingdee, legacy POS). Chaotic pricing and multi-week reconciliation delays severely decoupled production from store orders.',
          solutions: [
            'Stationed on-site at Jiashan supply base and Shanghai HQ for 71 days across 7 departments, mapping 120+ swimlane workflows into an actionable blueprint.',
            'Rolled out mobile ordering for short-shelf-life braised food franchise stores, connecting 59 legacy APIs on private cloud with sub-second price dispatching.',
            'Executed a 3-tier cutover campaign: single store pilot -> regional cluster trial -> 6-batch nationwide deployment with an operational war-room and rollback drills.'
          ],
          achievements: [
            'Conducted smooth cutover across 3000+ stores nationwide in 6 batches, ensuring business continuity for stores and supply chains;',
            'Accelerated franchisee reconciliation efficiency by 80%+, transitioning from manual cross-month audits to digitized closing;',
            'Synchronized store demand with factory scheduling, boosting inventory turnover by over 15%.'
          ],
          tags: ['Jiujiuya 3000+ Stores', 'Smooth Cutover', '59 Integrations', 'Reconciliation +80%', 'Supply-Demand Loop']
        },
        {
          id: 'proj-case-heytea',
          name: 'HEYTEA Shenzhen HQ: Nationwide 800+ Direct Stores POS & MRP Implementation',
          group: 'rollout' as const,
          category: 'Tier-1 Tea-Drink Flagship Delivery & Field Operations',
          role: 'Core Project Manager / Solution Architect (Stationed at Shenzhen HQ for 2 Years)',
          scale: '800+ Direct Stores | 100k+ Peak Orders | Tens of Millions in Waste Savings',
          badge: 'Industry Benchmark',
          brandBadges: ['HEYTEA', '800+ Direct Stores', 'MRP Smart Ordering', 'Shenzhen HQ'],
          challenge: 'Rapid store expansion faced 100k+ daily peak orders choking front counters; highly perishable fruit and dairy relied on subjective guesswork, resulting in 5.9% waste rates and frequent stockouts.',
          solutions: [
            'Stationed at Shenzhen HQ to orchestrate nationwide HiPOS cutover across 800+ direct stores with uprint microservices, tailoring bar-level ticketing workflows.',
            'Operationalized the MRP feedback flywheel: HQ sets policy -> system calculates recommendations -> store managers handle exceptions with mandatory reasons -> metrics calibration.',
            'Instituted weekly loss review cadences across operations, supply chain, and district managers, linking submission punctuality to store KPIs.'
          ],
          achievements: [
            'Seamlessly sustained 100k+ peak orders across 800+ direct stores nationwide with historically low ticketing fault rates;',
            'Cut store-level waste and audit variance from 5.9% to 3.9%, saving tens of millions RMB in annual fresh ingredient costs;',
            'Saved 40 mins/day in store manager ordering time, achieved 99.2% on-time submission, and cut warehouse stockouts by 45%.'
          ],
          tags: ['HEYTEA Rollout', 'HiPOS Delivery', 'Waste 5.9%->3.9%', 'Millions Saved', 'Ordering Flywheel']
        },
        {
          id: 'proj-case-shida',
          name: 'Shanghai Shida (DQ / Papa John\'s): 1000+ Chain Stores BOH Supply Chain Rollout',
          group: 'rollout' as const,
          category: 'Multinational Fast-Food Supply Chain Delivery',
          role: 'Implementation Delivery Manager / Solution Architect',
          scale: '1000+ Stores Nationwide | Stocktaking Efficiency +50% | Food Waste -2%',
          badge: 'Global Chain Delivery',
          brandBadges: ['DQ Ice Cream', 'Papa John\'s', 'Shida Group', '1000+ Stores'],
          challenge: 'Strict shelf-life criteria in global ice cream/pizza operations suffered from disconnected store inventory and manual stocktaking errors, obscuring waste and food safety tracking.',
          solutions: [
            'Delivered standardized BOH store inventory management covering real-time daily/weekly/monthly audits and smart loss alerts.',
            'Linked store demand directly to central cold-chain distribution, standardizing multinational temperature and stock handling SOPs.',
            'Authored bilingual training curricula, running structured certification for regional store managers and shift leaders.'
          ],
          achievements: [
            'Empowered 1000+ stores across China, boosting daily inventory counting speed by 50%;',
            'Reduced overall food waste by 2%, ensuring full compliance with international internal audit standards.'
          ],
          tags: ['DQ / Papa John\'s', 'BOH Supply Chain', '1000+ Stores', 'Audit +50%', 'Waste -2%']
        },
        {
          id: 'proj-case-tamjai',
          name: 'TamJai International: Global Chain Multi-Region Digital Operations & Support',
          group: 'rollout' as const,
          category: 'Global Chain Digital Operations & Service Delivery',
          role: 'Global Digital Operations Lead / Solution Architect',
          scale: 'Covering HK, Singapore, Japan, Australia, Malaysia, Philippines | Resolution Speed +50%',
          badge: 'Global Operations',
          brandBadges: ['TamJai SamGor', 'TamJai Yunnan', 'Zendesk', 'Global Rollout'],
          challenge: 'Rapid expansion across HK, Singapore, Japan, Australia, Malaysia, and the Philippines suffered from multi-timezone, multilingual barriers and sluggish field equipment repair loops.',
          solutions: [
            'Built an omnichannel global support infrastructure from scratch leveraging WhatsApp Business and Zendesk.',
            'Configured multi-lingual self-service bots, cross-timezone emergency dispatching, and tiered SLA escalation rules.',
            'Established global issue visibility dashboards, providing regular performance and product insights to executives.'
          ],
          achievements: [
            'Empowered hundreds of stores globally, boosting incident turnaround and resolution speed by 50%;',
            'Documented standardized multinational digital support playbooks, establishing a scalable methodology for SaaS globalization.'
          ],
          tags: ['TamJai International', 'Global Rollout', 'Cross-Timezone O&M', 'Speed +50%', 'Zendesk']
        },
        {
          id: 'proj-ka-csm',
          name: 'Tier-1 Key Account Customer Success (CSM) & Tiered Operations Framework',
          group: 'csm' as const,
          category: 'Enterprise Account Retention & Expansion',
          role: 'Head of KA Operations / Customer Success Director (CSM Director)',
          scale: '90% Core KA Annual Retention | 50% Team Core Revenue Share',
          badge: 'Core Operations',
          brandBadges: ['HEYTEA', 'Starbucks', 'SomethingFor', 'Guoyaya'],
          challenge: 'Enterprise accounts required high availability and complex workflows, while SMB accounts faced fragmented needs, causing high churn risks without a structured tiered model.',
          solutions: [
            'Designed a tiered matrix: dedicated R&D squads for HEYTEA, 24/7 high-availability squads for Starbucks, and embedded CSMs for key chains.',
            'Created combined AM (Account Manager) + PM (Project Manager) squads for high-growth SMBs like SomethingFor and Guoyaya.',
            'Partnered with domestic and global agencies to establish certified implementation and service delivery training.'
          ],
          achievements: [
            'Sustained a 90%+ annual retention rate across tier-1 key accounts with deep executive-level trust;',
            'Account expansions, module upsells, and renewals consistently generated 50% of the team’s total revenue;',
            'Extracted universal client bottlenecks to guide 10+ core feature standardizations in the base SaaS platform.'
          ],
          tags: ['KA Operations', '90% Retention', '50% Revenue Share', 'CSM Framework', 'Upsell Expansion']
        },
        {
          id: 'proj-presales-framework',
          name: 'Digital Consulting, Architecture Blueprinting & Multi-Million Presales Bidding',
          group: 'presales' as const,
          category: 'Presales Consulting & Commercial Bidding',
          role: 'Digital Solution Specialist / Senior Presales Consultant',
          scale: 'Supported Multi-Million Bid Wins | High Executive Defense Approval',
          badge: 'Multi-Million Bidding',
          brandBadges: ['Leading Tea Chain', 'Major Coffee Chain', 'Fast Food Enterprise', 'Digital Blueprint'],
          challenge: 'Enterprise digital initiatives involved long decision cycles and multifaceted stakeholders; generic decks failed to address C-level priorities.',
          solutions: [
            'Led discovery, business architecture design, and scenario-based POC (Proof of Concept) demonstrations addressing cost and efficiency.',
            'Authored comprehensive technical and commercial proposals; delivered live executive pitches and technical defense.',
            'Authored the Chain Catering Digitalization Best Practices White Paper and standard proposal repositories.'
          ],
          achievements: [
            'Directly supported multi-million contract wins for prominent tea and coffee enterprises, unlocking tens of millions in market value;',
            'Consistently achieved industry-leading pitch-win ratios with high praise from client executive boards;',
            'Accelerated proposal turnaround by 40%+ while mitigating downstream delivery risks.'
          ],
          tags: ['Presales Blueprinting', 'Multi-Million Bids', 'Proposal Authoring', 'Executive Defense', 'White Paper']
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="projects" className="py-12 bg-white dark:bg-slate-900 relative transition-colors duration-500 print:py-2">
      <div className="max-w-4xl mx-auto px-4 print:px-0">
        
        {/* Section Header */}
        <div className="text-center mb-10 print:mb-3 print:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight text-slate-900 dark:text-white transition-colors duration-300 print:text-xl print:mb-0.5 print:tracking-tight">
            {t.titlePrefix} <span className="text-blue-800 dark:text-blue-400">{t.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 tracking-tight print:text-[9.5pt] print:text-slate-500 print:tracking-tight">
            {t.subtitle}
          </p>
        </div>

        {/* 1. Key Metrics Bar */}
        <div className="border-y border-slate-200/80 dark:border-slate-800 py-4 mb-10 flex flex-wrap justify-between items-center gap-4 bg-slate-50/50 dark:bg-slate-900/50 rounded-xl px-4 print:py-1.5 print:mb-3 print:gap-1 print:border-gray-200 print:bg-slate-50/50 print:rounded-none">
          {t.metrics.map((metric, idx) => (
            <div key={idx} className="flex-1 min-w-[110px] text-center print:min-w-0">
              <div className="text-2xl font-bold mb-0.5 text-slate-900 dark:text-white print:text-base print:mb-0">
                {metric.value}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-gray-400 font-medium uppercase tracking-wider print:text-[8pt] print:tracking-normal">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* 2. Structured Groups */}
        <div className="space-y-10 print:space-y-3">
          
          {/* Group 1: Benchmark Rollout & Nationwide Implementation */}
          <div id="proj-group-rollout">
            <h3 className="text-lg sm:text-xl font-bold text-left mb-4 text-slate-900 dark:text-white print:text-base print:mb-2 border-b-2 border-blue-800 dark:border-blue-400 inline-block pb-1">
              {t.groups.rollout}
            </h3>
            <div className="space-y-6 print:space-y-2 mt-2">
              {t.cases.filter(c => c.group === 'rollout').map((item) => (
                <ProjectCardItem key={item.id} item={item} language={language} />
              ))}
            </div>
          </div>

          {/* Group 2: KA Operations & CSM */}
          <div id="proj-group-ka">
            <h3 className="text-lg sm:text-xl font-bold text-left mb-4 text-slate-900 dark:text-white print:text-base print:mb-2 border-b-2 border-blue-800 dark:border-blue-400 inline-block pb-1">
              {t.groups.csm}
            </h3>
            <div className="space-y-6 print:space-y-2 mt-2">
              {t.cases.filter(c => c.group === 'csm').map((item) => (
                <ProjectCardItem key={item.id} item={item} language={language} />
              ))}
            </div>
          </div>

          {/* Group 3: Presales & Consulting */}
          <div id="proj-group-presales">
            <h3 className="text-lg sm:text-xl font-bold text-left mb-4 text-slate-900 dark:text-white print:text-base print:mb-2 border-b-2 border-blue-800 dark:border-blue-400 inline-block pb-1">
              {t.groups.presales}
            </h3>
            <div className="space-y-6 print:space-y-2 mt-2">
              {t.cases.filter(c => c.group === 'presales').map((item) => (
                <ProjectCardItem key={item.id} item={item} language={language} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

const ProjectCardItem: React.FC<{ item: ProjectCaseItem; language: Language }> = ({ item, language }) => (
  <div 
    id={item.id}
    className="group border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 rounded-xl p-5 sm:p-6 transition-all hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md dark:hover:shadow-slate-950/40 print:p-2.5 print:mb-2 print:border-slate-300 print:rounded-none print:shadow-none print:break-inside-avoid"
  >
    {/* Card Header */}
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2 print:mb-1">
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h4 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors print:text-base print:tracking-tight">
            {item.name}
          </h4>
          {item.badge && (
            <span className="text-[10px] font-semibold text-blue-800 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800 print:text-[8pt] print:px-1 print:py-0 print:border-slate-300">
              {item.badge}
            </span>
          )}
        </div>
        
        {/* Brand Badges Bar */}
        {item.brandBadges && item.brandBadges.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 mb-1.5 print:mb-0.5">
            <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 mr-0.5">
              {language === 'zh' ? '代表品牌/实体:' : 'Brands/Entities:'}
            </span>
            {item.brandBadges.map((brand, bIdx) => (
              <span
                key={bIdx}
                className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/90 px-2 py-0.5 rounded border border-slate-200/80 dark:border-slate-700/80 print:text-[8pt] print:px-1 print:py-0"
              >
                {brand}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-2 text-[12px] print:text-[8.5pt]">
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            {item.role}
          </span>
          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>
          <span className="text-slate-500 dark:text-gray-400 font-medium">
            {item.category}
          </span>
        </div>
      </div>

      <div className="text-xs sm:text-right font-medium text-blue-800 dark:text-blue-400 shrink-0 bg-slate-50 dark:bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-200/80 dark:border-slate-700/80 print:text-[8pt] print:bg-transparent print:border-none print:p-0">
        {item.scale}
      </div>
    </div>

    {/* 1. Challenge & Pain Points */}
    <div className="mt-3 mb-3 print:mt-1 print:mb-1">
      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 print:text-[8pt] print:mb-0">
        {language === 'zh' ? '【交付运营挑战与痛点】' : '[Delivery & Operations Challenge]'}
      </div>
      <p className="text-[13px] text-slate-600 dark:text-gray-300 leading-snug text-justify print:text-[9pt] print:leading-snug">
        {item.challenge}
      </p>
    </div>

    {/* 2. Core Actions & Solutions */}
    <div className="mb-3 print:mb-1">
      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 print:text-[8pt] print:mb-0">
        {language === 'zh' ? '【实施破局、组织推进与运营机制】' : '[Implementation, Execution & Operations SOP]'}
      </div>
      <ul className="space-y-1 list-disc list-inside text-[13px] text-slate-600 dark:text-gray-400 marker:text-blue-800 dark:marker:text-blue-400 print:space-y-0.5 print:text-[9pt] print:leading-snug">
        {item.solutions.map((sol, sIdx) => (
          <li key={sIdx} className="leading-snug print:leading-normal">
            <span className="-ml-1.5">{sol}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* 3. Delivery Achievements & Data */}
    <div className="mb-3.5 print:mb-1.5 bg-blue-50/40 dark:bg-slate-800/40 p-3 rounded-lg border border-blue-100/60 dark:border-slate-800 print:bg-transparent print:p-0 print:border-none">
      <div className="text-[11px] font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 mb-1 print:text-[8.5pt] print:mb-0">
        {language === 'zh' ? '【量化业务收益与里程碑成果】' : '[Business Impact & Milestone Outcomes]'}
      </div>
      <ul className="space-y-1 list-disc list-inside text-[13px] text-slate-700 dark:text-gray-300 marker:text-blue-800 dark:marker:text-blue-400 print:space-y-0.5 print:text-[9pt] print:leading-snug font-medium">
        {item.achievements.map((ach, acIdx) => (
          <li key={acIdx} className="leading-snug print:leading-normal">
            <span className="-ml-1.5">{ach}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Optional External Links */}
    {item.links && item.links.length > 0 && (
      <div className="mb-3 flex flex-wrap items-center gap-2 print:hidden">
        <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500">
          {language === 'zh' ? '相关链接：' : 'Links:'}
        </span>
        {item.links.map((link, lIdx) => (
          <a
            key={lIdx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 underline font-medium"
          >
            {link.title} ↗
          </a>
        ))}
      </div>
    )}

    {/* Tags */}
    <div className="flex flex-wrap gap-1.5 print:gap-1">
      {item.tags.map((tag, tIdx) => (
        <span 
          key={tIdx} 
          className="text-[10.5px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-gray-400 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 print:px-1 print:py-0 print:text-[8pt] print:bg-transparent print:border-slate-300"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default Projects;
