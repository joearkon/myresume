import React from 'react';
import { Language } from '../App';

interface ProductAchievementsProps {
  language: Language;
}

interface ProductItem {
  id: string;
  name: string;
  category: string;
  role: string;
  scale: string;
  badge?: string;
  positioning: string;
  architecture: string[];
  achievements: string[];
  tags: string[];
}

const ProductAchievements: React.FC<ProductAchievementsProps> = ({ language }) => {
  const content = {
    zh: {
      titlePrefix: '核心',
      titleHighlight: '产品成就',
      subtitle: '从痛点洞察到顶层架构设计，以量化商业成果印证产品价值',
      cards: [
        {
          id: 'prod-ai-inventory',
          name: 'AI 智能库存研判、自适应订货与门店闭环助手系统',
          category: 'AI Agent + 确定性规则引擎 + 门店现场执行',
          role: '自研业务架构师 / AI 解决方案总设计师 (2026)',
          scale: '贯穿「研判-建单-智能盘点-降级订货」全链路 | Design System v2',
          badge: '最新自研 AI 成果',
          positioning: '直面连锁门店“理论库存与实物脱节、盲目订货造成高报损、异常研判流于纸面而无法在现场闭环”的深水区痛点。创新融合确定性规则引擎与 AI 深度研判，将库存研判、跟进工单、现场智能盘点、库存可信度与自适应订货串联为闭环飞轮。',
          architecture: [
            '架构“三层智能体系”：确定性规则引擎负责判定 D1/D2 异常与可信度基线；预测优化模型计算多级订货量；AI Agent 负责生成竞争假设、归纳根因、证据追问并起草处置方案（坚守“AI 只给建议、不越权改库存”安全红线）。',
            '首创「库存可信度分级（高/中/低）与自适应订货机制」：当实盘缺失或数据不可信时，自动启动保守日均消耗与 1.3 倍安全库存的“降级推荐订货”，并定向触发物料行智能插入盘点计划。',
            '设计门店移动端一体化现场盘点流：集成货架拍照 OCR 置信度纠错、语音交互换算与断点续盘，以「事实包 -> V2 研判 -> 人工采纳 -> 工单部分完成 -> 提交后自动 V2 重算闭环」彻底消除信息孤岛。'
          ],
          achievements: [
            '完成总部 PC 端（统一深蓝视觉规范）与门店移动端一体化架构设计与交互原型闭环，输出 17 节高标准业务方案冻结文档；',
            '将传统割裂的“盘点一张表”升级为“由异常驱动、现场 2 分钟极速定向盘点、盘完即触发重算与订货校准”的全新作业范式；',
            '开创连锁餐饮供应链「可解释、防失控、强审计」的企业级 Agentic 工作流标杆，具备极高商业化推展与技术复用价值。'
          ],
          tags: ['AI Agent 闭环', '确定性规则引擎 V2/V3', '库存可信度分级', '降级推荐订货', 'OCR/语音移动盘点', '工单部分完成']
        },
        {
          id: 'prod-hipos',
          name: '喜茶 HiPOS 全渠道履约收银与门店协同系统',
          category: '门店交易与全渠道履约中枢',
          role: '产品规划&交付落地负责人',
          scale: '全国 800+ 直营门店 | 日峰值 10万+ 订单',
          badge: '标杆核心产品',
          positioning: '直面新茶饮高峰期海量并发排队、外卖与小程序多渠道挤占、高峰容易卡单与出单错漏等严苛挑战，打造高并发、高可用、全渠道一体化的门店收银与履约协同中枢。',
          architecture: [
            '规划并落地「渠道接入 -> POS统一中台 -> 资金结算 -> 能力开放」四阶段产品演化路径。',
            '主导线上喜茶小程序订单定向 POS 终端的智能接单路由，设计定制化小票与杯贴 XML 模板引擎。',
            '将打印与硬件调度抽象解耦为独立高性能微服务（uprint/ulabel），并建立端云协同容灾离线运行机制。'
          ],
          achievements: [
            '平稳支撑全国 800+ 直营门店日均百万杯、日峰值 10万+ 订单履约，系统出单故障率与错单率降至历史最低。',
            '实现「线上线下订单秒级定向路由、分吧台精准出杯」，奠定全国新茶饮行业收银与履约系统标杆。'
          ],
          tags: ['HiPOS 架构', '微服务打印 (uprint/ulabel)', '端云协同容灾', '高并发交易', '全渠道履约']
        },
        {
          id: 'prod-mrp',
          name: '喜茶建议订货 (MRP) 智能补货与物耗闭环引擎',
          category: '供应链智能预测与损耗闭环',
          role: '产品方案规划&业务飞轮设计',
          scale: '全国门店全量覆盖 | 年化降本超千万元',
          badge: '核心创新引擎',
          positioning: '针对鲜果、优质乳品、定制耗材等极短保质期原料，解决传统门店完全依赖店长主观经验订货导致的高报损与断货频发痛点，打通从销售预测到智能补货的全链路闭环。',
          architecture: [
            '算法与产品模型从粗放的移动加权演进为「营业额与销量预测 + 动态 BOM 配方物耗拆解 + 万元营业额耗材用量 + 新品冷启动预估」的四维复合预测体系。',
            '首创设计「总部定规则 -> 系统算建议 -> 门店只处理例外必填原因 -> 经营指标反向验证」的正向反馈飞轮闭环。',
            '提供千店千面参数配置中心，融合天气、节假日、促销活动等外部变量实现智能动态纠偏。'
          ],
          achievements: [
            '推动全国门店下半年报损率与盘点差异率从 5.9% 显著压降至 3.9%，达成历史最优物耗控制水平。',
            '单店日均订货操作时间缩减 40 分钟，全国门店年化综合降本增效超千万元，构建了餐饮连锁数字化供应链闭环典范。'
          ],
          tags: ['MRP 智能补货', '需求预测算法', '反馈飞轮机制', '万元营业额耗材模型', '损耗精细化控制']
        },
        {
          id: 'prod-jiujiuya',
          name: '久久丫 · 顶誉集团 3000+ 门店数字化业务中台',
          category: '千店级全域数字化业务中台',
          role: '业务中台顶层方案架构师 / 调研交付总负责人',
          scale: '全国 3000+ 门店 | 59 个异构系统无缝打通',
          badge: '千店中台标杆',
          positioning: '针对顶誉集团旗下久久丫、留夫鸭等全国 3000+ 门店直营与加盟并存、多套存量孤岛系统割裂、价格促销不统一、加盟对账周期长达数周等系统性难题，规划打造统一业务中台底座。',
          architecture: [
            '历经 71 天跨 7+ 核心业务部门驻场深度调研，规划设计「商品、库存、订单、价格、结算、订货」六大业务中台中心。',
            '构建千店千价秒级生效的价格促销引擎，并自研适配卤味短保冷链特性的加盟订货门户。',
            '在客户阿里云私有化混合云环境中攻克 59 个存量异构系统接口互联，实现主数据标准统一与实时状态流转。'
          ],
          achievements: [
            '全国 3000+ 门店分 6 批次实现零故障平滑割接，保障久久丫 1000+、留夫鸭 500+ 等门店平稳运营。',
            '加盟商订货履约周期大幅缩减，总部财务结算对账效率提升 80%+，全面实现单店日清日结，库存周转率提升 15%+。'
          ],
          tags: ['六大业务中台中心', '千店千价促销引擎', '加盟供应链门户', '私有化云部署', '59系统互联']
        },
        {
          id: 'prod-bom-oms',
          name: '餐饮统一交易 OMS 与动态配方 BOM 拆解引擎',
          category: '云原生底层核心引擎与数据基座',
          role: '初创核心产品架构师 / 核心研发 / 专利发明人',
          scale: '国家发明专利授权 | 支撑合阔 SaaS 全系产品',
          badge: '★ 国家发明专利',
          positioning: '传统 ERP 静态物料清单无法满足现制餐饮丰富的客制化选配需求（如糖度、加料、冰度、换燕麦奶），导致实际原料消耗与账面完全脱节、交易事实多端冲突。',
          architecture: [
            '首创打破传统 ERP 静态物料束缚，设计「基础配方 + 规格缩放 / 糖度减量 / 奶基底替换 / 加料新增 / 温度覆盖」的动态配方拆解算法引擎。',
            '主导设计 OMS 全渠道交易订单状态机（OPEN -> CHECKOUT -> WAITING -> PAYING -> SALE -> TICKET 快照）。',
            '确立订单幂等去重、异常事务补偿机制，让每笔订单成为库存扣减、BOM 物耗拆解、财务对账与报表统计的唯一真实事实源。'
          ],
          achievements: [
            '动态 BOM 配方拆解技术成功获批「国家发明专利」，成为公司核心技术壁垒与 SaaS 云平台底层支柱。',
            '奠定合阔 SaaS 全渠道 BOH 供应链与微服务底座，后续直接支撑喜茶、星巴克、DQ 等所有连锁大客户的精准物耗核算。'
          ],
          tags: ['国家发明专利', '动态 BOM 拆解', 'OMS 状态机', '事务补偿机制', '餐饮底层基石']
        },
        {
          id: 'prod-b2b-pay',
          name: '喜茶加盟商 B2B 支付中台与大额资金对账系统',
          category: '资金中台与多方对账结算',
          role: '方案评审与集成架构设计师',
          scale: '数千万级流水资金闭环 | 0 资金差异',
          badge: '资金中台典范',
          positioning: '喜茶开放特许加盟事业后，加盟商原物料订货、差异退补单笔资金高达数万至数十万元，原有供应链与支付强耦合极易引发重复扣款、退款混乱与财务对账失真。',
          architecture: [
            '主导 BOH 供应链与喜茶支付中台的业务解耦架构：由 BOH 拥有订货、发货差异与退货等业务事实，支付中台负责实付扣款、手续费、补贴分摊与原路退款资金事实。',
            '协同设计按门店灰度切流路由机制，并在前端实现旧支付入口动态安全隐藏，彻底杜绝重复扣款风险。',
            '打通汇付天下网银 / U盾大额转账资金匹配流，搭建自动核销与异常勾稽处理通道。'
          ],
          achievements: [
            '实现全国加盟商数千万级流水日终与 JDE 财务账 100% 自动化闭环对账，资金差异率降至 0。',
            '保障了特许加盟业务规模化高速拓展中的资金合规与财务审计安全，成为大型特许连锁 B2B 结算标杆方案。'
          ],
          tags: ['业务与资金解耦', 'B2B 资金中台', '汇付天下 PayFac', 'JDE 自动对账', '防重复扣款']
        },
        {
          id: 'prod-tamjai-zendesk',
          name: '谭仔国际 (TamJai) 全球化智能客服与工单协同平台',
          category: '跨国连锁数字化运维与客户服务',
          role: '跨国数字化运营总监 / 解决方案架构负责人',
          scale: '覆盖香港、新加坡、日本、澳洲、马来西亚、菲律宾',
          badge: '跨国全域运营',
          positioning: '谭仔国际全球多国连锁扩张过程中，面临跨时区时差、多语言沟通壁垒、跨国门店报修排障响应迟缓、以及现场 Issue 难以实时跟踪归档的运维痛点。',
          architecture: [
            '以海外高渗透率的 WhatsApp Business 为核心入口，从 0 搭建基于 Zendesk 的跨国多语种客服与工单协同平台。',
            '配置跨时区智能技能组路由、分级 SLA 预警响应规则与自动化常见问题（FAQ）问答知识库。',
            '建立海外 Issue 报修总览可视化看板与统一事件处理生命周期 SOP，打通与产研团队的缺陷反馈流。'
          ],
          achievements: [
            '成功赋能港、新、日、澳、马、菲等多国数百家连锁门店，海外工单闭环解决时效大幅提升 50%。',
            '沉淀跨国连锁标准化数字化交付与运维体系方案，有力反哺了 SaaS 产品后续海外版本的迭代与售前拓展。'
          ],
          tags: ['Zendesk + WhatsApp', '全球化多语种', '跨时区智能路由', 'Issue 可视化', 'SLA 体系']
        },
        {
          id: 'prod-ai-matrix',
          name: 'AI 投资决策研判系统与开源智能体矩阵',
          category: 'AI Agent 与自动化工程实践',
          role: 'AIGC 独立开发者 / 开源作者',
          scale: '101 场赛事胜负预测 79.2% 命中率 | 20+ 企业级 Prompt 库',
          badge: 'AIGC 工程前沿',
          positioning: '探索 AI 时代 Agentic 研发与工程化落地，解决海量多源非结构化行业研报萃取耗时、产业链信息传导滞后、以及个人全栈敏捷开发工作流整合等前沿场景。',
          architecture: [
            '依托 Claude Code、Codex Agent 结合主流大模型（Gemini、GPT-4o、DeepSeek、Qwen）构建端到端信息清洗与景气度传导研判系统。',
            '主导开发开源 2026 世界杯赛事预测系统（LLM + 动态赔率与战绩特征工程）并在 GitHub 开源维护。',
            '研发 Velina Pet 智能体桌面伴侣，集成游戏与外部 API 实现自动化签到与桌面智能提醒。'
          ],
          achievements: [
            '世界杯预测系统在决赛阶段 101 场预测中实现 79.2% 胜负方向准确率，完成高质量工程化验证。',
            '深耕大模型提示词工程，沉淀 20 余套连锁 SaaS 行业级 Prompt 资产库，实现自动化方案撰写与竞品分析提效。'
          ],
          tags: ['Claude Code / Codex', '多模型融合调度', 'GitHub 开源工程', '79.2% 胜率预测', 'Prompt 资产库']
        }
      ]
    },
    en: {
      titlePrefix: 'Core',
      titleHighlight: 'Product Achievements',
      subtitle: 'From domain pain-point discovery to enterprise architecture, demonstrating tangible business value',
      cards: [
        {
          id: 'prod-ai-inventory',
          name: 'AI Smart Inventory Diagnosis & Closed-Loop Store Assistant',
          category: 'AI Agent + Deterministic Rule Engine + Storefield Execution',
          role: 'Independent Solution Architect / AI Systems Designer (2026)',
          scale: 'End-to-End Loop from Diagnosis to Replenishment | Design System v2',
          badge: 'Latest In-House AI',
          positioning: 'Directly tackled catering retail bottlenecks where theoretical stock decoupled from actual inventory, guesswork replenishment led to heavy waste, and exception diagnosis stayed on paper. Fused deterministic rules with generative AI to unite diagnosis, work orders, on-site counts, stock trustworthiness, and adaptive replenishment.',
          architecture: [
            'Architected a 3-tier intelligence stack: Deterministic rules govern D1/D2 anomaly triggers and confidence baselines; predictive models calculate tiered replenishment; AI Agents draft competitive hypotheses, root causes, evidence queries, and action items (adhering strictly to "AI recommends, never arbitrarily alters stock").',
            'Pioneered "Stock Trustworthiness (High/Mid/Low) & Fallback Replenishment": Automatically activates a conservative consumption formula with 1.3x safety buffer when stock integrity degrades, while intelligently slotting material lines into store count plans.',
            'Engineered an integrated mobile store count flow: Unified camera OCR confidence correction, voice-input package conversions, and breakpoint draft saves to achieve automated closed-loop recalculation upon submission.'
          ],
          achievements: [
            'Authored a comprehensive 17-section frozen architecture specification, delivering full desktop HQ and mobile store interactive prototypes;',
            'Transformed disconnected annual/monthly spreadsheets into an anomaly-driven, 2-minute spot check workflow that immediately recalculates replenishment;',
            'Established an auditable, enterprise-grade Agentic benchmark for food & beverage supply chains with high commercial and technological reusability.'
          ],
          tags: ['AI Agentic Loop', 'Deterministic Engine V2/V3', 'Stock Trustworthiness', 'Fallback Replenishment', 'Mobile OCR/Voice Count', 'Work Order Engine']
        },
        {
          id: 'prod-hipos',
          name: 'HEYTEA HiPOS Omnichannel POS & Store Execution System',
          category: 'Store POS & Omnichannel Execution Hub',
          role: 'Product Planning & Delivery Lead',
          scale: '800+ Direct-operated Stores | 100k+ Daily Peak Orders',
          badge: 'Flagship Product',
          positioning: 'Tackled severe peak-hour bottlenecks in new tea-drinks retail—including high concurrency order queues, channel contention from mini-programs and delivery aggregators, and printer dropouts—to build a resilient store transaction and fulfillment hub.',
          architecture: [
            'Planned and delivered the 4-phase evolutionary roadmap: Channel Ingestion -> Unified POS -> Payment Settlement -> Open API Platform.',
            'Architected intelligent routing of mini-program orders to designated POS workstations, designing custom XML receipt/cup-label templating engines.',
            'Abstracted hardware control and printing into high-performance microservices (uprint/ulabel) with local-cloud fault-tolerant offline sync.'
          ],
          achievements: [
            'Smoothly supported 1M+ cups/day and 100k+ peak orders across 800+ stores nationwide, reducing missing and erroneous ticket rates to historical lows.',
            'Enabled sub-second order routing and precise bar-station cup dispatching, becoming the benchmark POS standard in the modern beverage industry.'
          ],
          tags: ['HiPOS Architecture', 'Microservice Printing (uprint/ulabel)', 'Cloud-Edge Sync', 'High Concurrency', 'Omnichannel Fulfillment']
        },
        {
          id: 'prod-mrp',
          name: 'HEYTEA Suggested Ordering (MRP) & Replenishment Engine',
          category: 'Supply Chain MRP & Closed-Loop Waste Reduction',
          role: 'Product Solution Planning & Business Flywheel Design',
          scale: 'Nationwide Chain Coverage | Millions in Annual Cost Savings',
          badge: 'Core Innovation',
          positioning: 'Addressed severe inventory write-offs and stockouts caused by store managers relying purely on subjective intuition when ordering ultra-short-shelf-life fresh fruits, dairy, and customized packaging.',
          architecture: [
            'Evolved predictive models from simple moving averages into a 4-dimensional forecasting engine: GMV/Sales Forecasting + Dynamic BOM Material Breakdown + Consumables per 10k GMV + New Item Cold Start.',
            'Pioneered the virtuous feedback loop: HQ sets business rules -> System computes suggested quantities -> Store managers only modify exceptions with mandatory justifications -> Business metrics dual verification.',
            'Built a store-specific parameter center that incorporates weather, holidays, and promotional events for dynamic self-correction.'
          ],
          achievements: [
            'Drove nationwide second-half loss rate and inventory variance rate down from 5.9% to 3.9%, setting a new benchmark for fresh material management.',
            'Cut daily ordering time by 40 minutes per store, saving over 10M RMB annually across nationwide stores and establishing an industry-standard closed loop.'
          ],
          tags: ['MRP Smart Ordering', 'Demand Forecasting', 'Feedback Flywheel', 'Usage per 10k GMV', 'Waste Minimization']
        },
        {
          id: 'prod-jiujiuya',
          name: 'Jiujiuya · Dingyu Group 3000+ Stores Business Middle-Platform',
          category: 'Enterprise-grade 3000+ Store Business Middle-Platform',
          role: 'Chief Solution Architect / Head of Assessment & Delivery',
          scale: '3000+ Stores Nationwide | 59 Heterogeneous Systems Integrated',
          badge: 'Middle-Platform Benchmark',
          positioning: 'Overcame structural fragmentation across 3000+ stores (Jiujiuya, Liufu Duck) characterized by coexisting franchise/direct models, 59 siloed legacy systems, inconsistent promotional pricing, and multi-week reconciliation delays.',
          architecture: [
            'Conducted a 71-day deep dive across 7+ departments to architect 6 core middle-platform centers: Product, Inventory, Order, Price, Settlement, and Procurement.',
            'Developed a sub-second multi-tier pricing promotion engine and a dedicated franchise ordering portal tailored for short-shelf-life braised deli items.',
            'Integrated 59 legacy systems within client’s private Alibaba Cloud environment, establishing standardized master data governance.'
          ],
          achievements: [
            'Achieved seamless zero-downtime cutover across 3000+ stores in 6 phased rollouts, supporting 1000+ Jiujiuya and 500+ Liufu Duck stores.',
            'Drastically shortened franchisee order fulfillment cycles, improved HQ financial reconciliation efficiency by 80%+, achieved daily closing, and boosted inventory turnover by 15%+.'
          ],
          tags: ['6 Middle-Platform Centers', 'Multi-tier Pricing Engine', 'Franchise Portal', 'Private Cloud', '59 System Integrations']
        },
        {
          id: 'prod-bom-oms',
          name: 'Unified Transaction OMS & Dynamic Recipe BOM Engine',
          category: 'Cloud-Native Foundation & Data Backbone',
          role: 'Founding Core Product Architect / Core R&D / Patent Inventor',
          scale: 'Authorized National Invention Patent | Powers Entire SaaS Suite',
          badge: '★ National Invention Patent',
          positioning: 'Traditional ERP static Bills of Materials failed to handle dynamic bespoke customizations (sweetness, ice level, oat milk swap, toppings), disconnecting actual kitchen depletion from theoretical accounts.',
          architecture: [
            'Shattered static BOM constraints by designing a dynamic recipe breakdown engine: Base BOM + Scaling by cup size / Sugar reduction / Base milk replacement / Topping addition / Temperature overrides.',
            'Architected the Omnichannel Order Center (OMS) transaction state machine (OPEN -> CHECKOUT -> WAITING -> PAYING -> SALE -> TICKET snapshot).',
            'Implemented idempotent deduplication and transaction compensation, making each order the single source of truth for inventory, BOM depletion, finance, and BI.'
          ],
          achievements: [
            'Awarded a National Invention Patent for dynamic BOM recipe breakdown, creating a foundational technological moat for the SaaS enterprise.',
            'Served as the bedrock for Hekuo SaaS BOH supply chain, powering precise depletion accounting and real-time gross margin calculation for HEYTEA, Starbucks, DQ, etc.'
          ],
          tags: ['National Invention Patent', 'Dynamic BOM Breakdown', 'OMS State Machine', 'Transaction Compensation', 'SaaS Bedrock']
        },
        {
          id: 'prod-b2b-pay',
          name: 'HEYTEA Franchisee B2B Payment & Capital Clearing Platform',
          category: 'Capital Middle-Platform & Multi-Party Clearing',
          role: 'Solution Review & Integration Architecture Designer',
          scale: 'Tens of Millions in Capital Flow | Zero Reconciliation Variance',
          badge: 'Capital Clearing Model',
          positioning: 'Following HEYTEA’s expansion into franchise partnerships, B2B procurement and credit adjustments involved large transactions (tens of thousands to hundreds of thousands RMB), where tight coupling led to duplicate deductions and audit chaos.',
          architecture: [
            'Architected the decoupling of supply chain BOH business facts from payment financial facts: BOH owns ordering, fulfillment variance, and return facts, while the payment platform owns actual deductions, fee splits, and refunds.',
            'Designed store-level canary routing and dynamic suppression of legacy payment triggers to eliminate duplicate charge risks.',
            'Integrated Huifu PayFac enterprise banking and U-key electronic fund matching for automated write-offs and variance handling.'
          ],
          achievements: [
            'Achieved 100% automated daily reconciliation between tens of millions in franchise transactions and the Oracle JDE financial ledger with 0 variance.',
            'Safeguarded compliance and financial audit integrity during rapid nationwide franchise expansion, becoming a standard for catering B2B settlement.'
          ],
          tags: ['Fact Decoupling', 'B2B Payment Platform', 'Huifu PayFac Integration', 'JDE Automated Clearing', 'Zero Duplicate Deduction']
        },
        {
          id: 'prod-tamjai-zendesk',
          name: 'TamJai Global Intelligent Service & Work Order Platform',
          category: 'Global Chain Digital Operations & Support',
          role: 'Global Operations Director / Solution Architecture Lead',
          scale: 'Covering HK, Singapore, Japan, Australia, Malaysia, Philippines',
          badge: 'Global Digital Operations',
          positioning: 'During TamJai International’s multi-region chain rollout, operations faced cross-time-zone communication barriers, fragmented localized ticketing, and lack of unified SLA tracking for store equipment breakdowns.',
          architecture: [
            'Built an enterprise multi-lingual support platform using Zendesk with WhatsApp Business as the primary engagement channel from scratch.',
            'Configured cross-time-zone smart routing, tiered SLA escalation rules, and self-service knowledge bases (FAQ bot).',
            'Implemented an Issue Visualization Dashboard and unified incident lifecycle SOP, seamlessly bridging store operations with SaaS product engineering.'
          ],
          achievements: [
            'Successfully empowered hundreds of stores across HK, Singapore, Japan, Australia, Malaysia, and the Philippines, accelerating incident resolution by 50%.',
            'Established standard overseas delivery and support frameworks, directly driving international SaaS product iterations.'
          ],
          tags: ['Zendesk + WhatsApp', 'Multi-lingual Support', 'Cross-time-zone Routing', 'Issue Visualization', 'SLA Framework']
        },
        {
          id: 'prod-ai-matrix',
          name: 'AI Investment Analysis & Open-Source Agent Matrix',
          category: 'AI Agents & Automated Quantitative Workflows',
          role: 'AIGC Independent Developer / Open Source Creator',
          scale: '79.2% Prediction Accuracy over 101 Matches | 20+ Enterprise Prompts',
          badge: 'AIGC Engineering',
          positioning: 'Explored frontier Agentic workflows and solo agile engineering to overcome high manual reading overheads in broker research, delayed industrial insights, and fragmented cross-platform automation.',
          architecture: [
            'Leveraged Claude Code and Codex Agents with multiple LLMs (Gemini, GPT-4o, DeepSeek, Qwen) to build end-to-end ingestion, token cleaning, and industry sentiment modeling.',
            'Architected and open-sourced the 2026 World Cup match prediction system (combining LLM reasoning with dynamic odds feature models) on GitHub.',
            'Created Velina Pet desktop mascot, integrating external APIs for automated game check-ins and alert dialogues.'
          ],
          achievements: [
            'Achieved a 79.2% match direction accuracy across 101 predicted matches during tournament knockout phases, validating engineering viability.',
            'Engineered 20+ enterprise prompt templates tailored for catering/retail SaaS, dramatically cutting proposal creation and competitive analysis turnaround.'
          ],
          tags: ['Claude Code / Codex', 'Multi-LLM Fusion', 'GitHub Open Source', '79.2% Match Accuracy', 'Prompt Asset Library']
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="product-achievements" className="py-12 bg-slate-50/60 dark:bg-slate-900/40 relative transition-colors duration-500 border-t border-slate-200/80 dark:border-slate-800/80 print:py-2 print:border-none print:bg-transparent">
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

        {/* Product Achievement Cards */}
        <div className="space-y-8 print:space-y-3">
          {t.cards.map((prod) => (
            <div 
              key={prod.id} 
              id={prod.id} 
              className="group border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 rounded-xl p-5 sm:p-6 transition-all hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md dark:hover:shadow-slate-950/40 print:p-2.5 print:mb-2 print:border-slate-300 print:rounded-none print:shadow-none print:break-inside-avoid"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2 print:mb-1">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors print:text-base print:tracking-tight">
                      {prod.name}
                    </h3>
                    {prod.badge && (
                      <span className="text-[10px] font-semibold text-blue-800 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800 print:text-[8pt] print:px-1 print:py-0 print:border-slate-300">
                        {prod.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-[12px] print:text-[8.5pt]">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {prod.role}
                    </span>
                    <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>
                    <span className="text-slate-500 dark:text-gray-400 font-medium">
                      {prod.category}
                    </span>
                  </div>
                </div>

                <div className="text-xs sm:text-right font-medium text-blue-800 dark:text-blue-400 shrink-0 bg-slate-50 dark:bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-200/80 dark:border-slate-700/80 print:text-[8pt] print:bg-transparent print:border-none print:p-0">
                  {prod.scale}
                </div>
              </div>

              {/* 1. Positioning & Problem Context */}
              <div className="mt-3 mb-3 print:mt-1 print:mb-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 print:text-[8pt] print:mb-0">
                  {language === 'zh' ? '【产品定位与核心场景】' : '[Product Positioning & Mission]'}
                </div>
                <p className="text-[13px] text-slate-600 dark:text-gray-300 leading-snug text-justify print:text-[9pt] print:leading-snug">
                  {prod.positioning}
                </p>
              </div>

              {/* 2. Architecture & Design */}
              <div className="mb-3 print:mb-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 print:text-[8pt] print:mb-0">
                  {language === 'zh' ? '【核心产品设计与架构演进】' : '[Core Architecture & Design]'}
                </div>
                <ul className="space-y-1 list-disc list-inside text-[13px] text-slate-600 dark:text-gray-400 marker:text-blue-800 dark:marker:text-blue-400 print:space-y-0.5 print:text-[9pt] print:leading-snug">
                  {prod.architecture.map((item, aIdx) => (
                    <li key={aIdx} className="leading-snug print:leading-normal">
                      <span className="-ml-1.5">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Achievements & Impact */}
              <div className="mb-3.5 print:mb-1.5 bg-blue-50/40 dark:bg-slate-800/40 p-3 rounded-lg border border-blue-100/60 dark:border-slate-800 print:bg-transparent print:p-0 print:border-none">
                <div className="text-[11px] font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 mb-1 print:text-[8.5pt] print:mb-0">
                  {language === 'zh' ? '【量化产品成就与业务价值】' : '[Quantified Achievements & Business Impact]'}
                </div>
                <ul className="space-y-1 list-disc list-inside text-[13px] text-slate-700 dark:text-gray-300 marker:text-blue-800 dark:marker:text-blue-400 print:space-y-0.5 print:text-[9pt] print:leading-snug font-medium">
                  {prod.achievements.map((ach, acIdx) => (
                    <li key={acIdx} className="leading-snug print:leading-normal">
                      <span className="-ml-1.5">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 print:gap-1">
                {prod.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[10.5px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-gray-400 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 print:px-1 print:py-0 print:text-[8pt] print:bg-transparent print:border-slate-300"
                  >
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

export default ProductAchievements;
