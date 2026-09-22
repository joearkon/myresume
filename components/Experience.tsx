import React from 'react';
import { Language } from '../App';

interface ExperienceProps {
  language: Language;
}

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
  brands?: string[];
  aiProjects?: {
    name: string;
    desc: string;
    link: string;
    tags: string[];
  }[];
  tags: string[];
  color: string;
  isPromoted: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ language }) => {
  
  const getExperiences = (lang: Language): ExperienceItem[] => {
    if (lang === 'zh') {
      return [
        {
          id: 0,
          role: "AIGC 独立开发者 / 运营者",
          company: "独立项目｜自由职业",
          period: "2025.08 - 至今",
          description: "围绕AI应用，AI视频，AI业务的崛起，结合自身的想法探索AIGC工程化思维和落地；熟练运用 Gemini、GPT-4o、DeepSeek、Kimi、Qwen 等主流大模型，依托 Claude Code、Codex AI 编程 Agent 搭建单人闭环智能化工作流，根据业务场景完成模型选型与流程封装，沉淀可迁移至企业服务的 AI 落地方法论。",
          achievements: [
            "大模型数据处理与智能分析工作流搭建：依托 AI 编程 Agent 开发多源文本萃取、研报清洗、景气度量化分析流水线，搭建多模型融合研判系统，实现产业链信息自动解析与传导建模，验证 LLM 调度、自动化数据处理方案。",
            "面向连锁 SaaS 场景的企业级 Prompt 工程沉淀：深耕大模型提示词调优，沉淀 20 余套标准化 Prompt 模板库，覆盖餐饮 / 连锁 SaaS 方案撰写、选址测算、竞品追踪、行业标书自动化生成，搭建轻量化 AI 业务提效流水线，赋能客户方案交付效率提升。",
            "AIGC 标准化内容生产与用户运营链路实践：搭建「选题规划 - 多帧一致性图像生成 - 文案重构 - AI 剪辑」自动化短视频生产链路，落地跨平台内容运营，积累用户分层、私域社群运营与流量闭环搭建经验，可迁移用于连锁品牌用户运营场景。",
            "开源原型项目技术验证：落地多项开源验证项目（赛事预测系统、AI 桌面助手/Velina Pet），完成第三方接口联动、消息自动化推送等技术原型验证，持续打磨系统集成、自动化触发等工程实践能力。"
          ],
          tags: ["AIGC", "Claude Code", "Codex Agent", "Prompt工程", "LLM 自动化工作流"],
          color: "border-purple-500 dark:border-purple-400",
          isPromoted: false
        },
        {
          id: 1,
          role: "SaaS 平台大客户总监 / 客户成功总监 (兼解决方案架构)",
          company: "上海合阔信息技术有限公司",
          period: "2023 - 2025.07 (后期)",
          description: "由核心项目负责人晋升为客户成功部门负责人（CSM 总监兼解决方案架构）。全面负责大客户全生命周期留存、增购续约及复杂方案治理；重点主导喜茶加盟 B2B 支付中台演进（业务事实与资金事实解耦）、汇付天下大额资金闭环方案，以及谭仔跨国全域数字化运营体系搭建。",
          achievements: [
            "喜茶加盟 B2B 支付与资金闭环方案：主导 BOH 供应链与喜茶支付中台集成方案评审与业务解耦设计——由 BOH 拥有订货/差异/退货业务事实，支付中台负责实付、手续费、补贴分摊与退款资金事实；协同设计按门店灰度切流、旧入口动态隐藏（防重复扣款）及汇付天下网银/U盾大额转账资金匹配方案，保障日终流水与 JDE 财务入账严格一致。",
            "售前解决方案咨询与投标架构：主导行业头部品牌数字化项目售前全流程，独立完成需求调研、业务蓝图规划、系统架构设计与软硬件拓扑，覆盖技术标+商务标全模块；针对千万级项目独立负责现场方案演示与答疑，讲标通过率位居团队前列，支撑多个大型标杆项目成功中标。",
            "大客户 (KA) 独立运营与持续演进：针对喜茶、星巴克、DQ、久久丫等品牌制定“一客一策”运营体系。设立“产研+业务”敏捷小组，将一线反馈持续反哺为通用 SaaS 产品能力（如动态库存校验、紧急订货、差异单复盘）。",
            "全球化全域客服方案（谭仔 TamJai 专项）：主导谭仔国际 (TamJai, 2024-2025) 港、新、日、澳、马、菲等多国连锁数字化运营；从 0 搭建 Zendesk+WhatsApp 全域客服工单平台，配置跨时区智能路由与分级 SLA 规则，建立海外 issue 报修总览可视化与标准化运维流程。"
          ],
          brands: [
            "喜茶 (HEYTEA)", "久久丫", "DQ (Dairy Queen)", "乐乐茶 (LELECHA)",
            "绝绝紫 / 绝味鸭脖", "Seesaw Coffee", "T9 Tea", "Linlee (邻里)", 
            "谭仔 (TamJai)", "Something For", "果呀呀"
          ],
          tags: ["支付中台方案", "业务资金解耦", "售前架构", "KA 客户成功", "全球化运营"],
          color: "border-red-500 dark:border-red-400",
          isPromoted: true
        },
        {
          id: 2,
          role: "SaaS 平台项目经理 / 解决方案架构师",
          company: "上海合阔信息技术有限公司",
          period: "2018 - 2023 (中期)",
          description: "核心项目交付与解决方案负责人。承担技术负责人与项目经理双重职责，深度深入一线门店与客户现场，统筹业务调研、产品规划、系统集成、UAT 与规模化推广上线全流程，主导多个头部品牌数字化转型，累计覆盖超 5000 家连锁门店。",
          achievements: [
            "喜茶 HiPOS 全渠道履约产品演化：规划并落地「渠道接入 -> POS统一中台 -> 资金结算 -> 能力开放」四阶段演化路径；设计线上小程序订单定向 POS 接单路由、定制小票/杯贴 XML 模板引擎，并将打印与路由抽象为独立微服务（uprint/ulabel），支撑 800+ 直营门店日峰值 10万+ 订单平稳履约。",
            "喜茶建议订货 (MRP) 产品设计与闭环飞轮：从移动加权平均逐步演进至「营业额与销量预测 + 动态 BOM 配方物耗拆解 + 万元营业额耗材用量 + 新品冷启动预估」；设计「总部定规则 -> 系统算建议 -> 门店只处理例外必填原因 -> 经营指标反向验证」的闭环机制，助力下半年报损率+盘点差异率由 5.9% 压降至 3.9%，日订货时间缩减 40 分钟/店。",
            "久久丫 / 顶誉千店级数字化中台蓝图规划：主导 71 天跨 7+ 部门深度调研，制定「一期打基石（商品、库存、订单、价格、结算 5 通）-> 二期赋能力（加盟订货供应链）-> 三期优服务」的业务蓝图；在客户阿里云私有化环境完成 59 个存量系统接口打通，支撑久久丫 1000+、留夫鸭 500+ 门店规模化切换上线与稳定运营。",
            "上海适达餐饮集团 (DQ、棒约翰): 负责 BOH 门店供应链交付，对接全国 1000+ 门店，设计实时库存、门店补货与物流追踪全流程方案，库存损耗率降低 2%。"
          ],
          tags: ["MRP 反馈飞轮", "HiPOS 履约架构", "业务中台蓝图", "PMP", "全生命周期交付"],
          color: "border-blue-500 dark:border-blue-400",
          isPromoted: true
        },
        {
          id: 3,
          role: "SaaS 云平台高级软件开发工程师 (产品研发核心)",
          company: "上海合阔信息技术有限公司",
          period: "2016.04 - 2018 (初创核心成员)",
          description: "作为初创阶段核心技术与产品架构成员，参与 BOH 基本架构与产品设计理念，主导 OMS 订单管理、动态配方 BOM、全渠道报表等核心业务域的设计与实现，为后续合阔产品体系奠定标准化底座。",
          achievements: [
            "OMS 统一交易与履约模型设计：主导全渠道订单中心（OMS）数据模型与状态机（OPEN -> CHECKOUT -> WAITING -> PAYING -> SALE -> TICKET 快照）设计，建立订单幂等去重、异常补偿与门店履约分发机制，让每笔订单成为库存、BOM 物耗、报表与对账结算的统一事实源。",
            "动态配方 (BOM) 产品引擎设计：打破传统 ERP 静态物料结构，主导设计「基础配方 + 规格缩放 / 糖度减量 / 奶基底替换 / 加料新增 / 温度覆盖」的动态物料拆解引擎，实现销售品精确还原为生产原料与耗材消耗，该设计后续成功获得发明专利。",
            "微服务业务域解耦与基础平台：参与 BOH 云原生架构搭建，将商品(SPU)、菜单(ODM)、订单(OMS)、配方(BOM)、库存(INV)、报表拆分为独立业务域，基于 Python、OAuth 多租户与 K8s 支撑平台平滑承载日活跃 10 万级订单。"
          ],
          tags: ["OMS 交易状态机", "动态 BOM 专利", "微服务业务域", "0-1 产品设计", "Python/OAuth"],
          color: "border-yellow-500 dark:border-yellow-400",
          isPromoted: false
        },
        {
          id: 4,
          role: "SharePoint 工程师",
          company: "普华永道（PwC）上海技术有限公司",
          period: "2014.01 - 2016.04",
          description: "作为企业数字化协作核心技术成员，参与普华永道内部 SharePoint 平台的架构设计、部署实施、定制开发与运维优化，打造高可用、高效的企业级协作门户。",
          achievements: [
            "平台架构与工作流体系：参与企业级从 0 到 1 的部署实施，完成场集与权限体系设计，并深度参与企业内部工作流平台的搭建、部署与运维工作。",
            "定制化开发与 M365 集成：基于 C#/.NET 开发自定义 Web 部件实现审批自动化，并深度集成 Teams/Exchange 打通流程孤岛，打破信息闭环。",
            "流程自动化与国际化项目：利用 Power Automate 设计跨部门自动化审批流程（请假、采购等），并与海外 PwC 技术团队高效协作，成功交付海外医疗相关数字化项目。",
            "运维优化与技术沉淀：负责 7x24 小时高可用性保障，输出标准化部署手册与开发规范，为后续平台扩容提供体系化指引。"
          ],
          tags: ["SharePoint 专家", "C#/.NET", "Power Automate", "企业协作"],
          color: "border-slate-500 dark:border-gray-500",
          isPromoted: false
        },
        {
          id: 5,
          role: "微软 Web 技术 / SharePoint 工程师",
          company: "高知特信息技术（上海）有限公司",
          period: "2011.12 - 2013.12",
          description: "作为技术团队核心成员，深度参与金融、医疗行业客户的数字化转型项目，基于微软 SharePoint 技术栈提供定制化解决方案，推动业务流程线上化。",
          achievements: [
            "行业解决方案开发：基于 SPFx 开发自定义组件，为金融客户构建合规文档管理、为医疗客户搭建病历协作等场景化门户，实现业务流程自动化。",
            "技术运维与服务闭环：负责客户平台日常运维与工单处理，快速响应瓶颈问题，客户问题解决率与满意度位居团队前列。",
            "跨团队协作与集成：主导 SharePoint 与客户 ERP/HIS 系统无缝集成，沉淀行业标准化解决方案模板，提升团队交付专业性。"
          ],
          tags: ["金融/医疗行业", "SPFx 开发", "系统实施", "IT 运维"],
          color: "border-purple-500 dark:border-purple-400",
          isPromoted: false
        },
        {
          id: 6,
          role: ".NET & Web 技术支持工程师",
          company: "微软（中国）有限公司",
          period: "2010 - 2011",
          description: "为企业级客户与内部团队提供 .NET 平台全栈技术支持，同时负责微软官方技术社区的开发维护，兼具一线客户服务、技术排障与内部平台建设能力。",
          achievements: [
            "企业级客户技术支持（Web/.NET/SharePoint）：负责微软官方技术支持中心（CSS）Web 板块，为企业客户提供 .NET Framework、C#、ASP.NET 与 SharePoint Server 相关的技术咨询与问题解决。",
            "核心系统排障与优化：覆盖 ASP.NET 性能调优、IIS 部署排障、.NET 程序兼容性优化及 SharePoint 工作流开发定制化支持。",
            "客户沟通与闭环：对接企业 IT 部门，通过远程协助定位根因并输出最佳实践文档，保障业务系统稳定运行，满意度位居团队前列。",
            "知识库沉淀：整理典型案例与排障流程，沉淀为技术支持知识库，显著提升团队整体响应效率。"
          ],
          tags: [".NET", "SharePoint", "CSS技术支持", "故障排除"],
          color: "border-blue-600 dark:border-blue-500",
          isPromoted: false
        }
      ];
    } else {
      // English Data
      return [
        {
          id: 0,
          role: "AIGC Independent Developer / Operator",
          company: "Independent Project / Freelance",
          period: "2025.08 - Present",
          description: "Fully embraced the AI era, deeply exploring the engineering convergence of AIGC core technologies with content creation and investment decision-making. Proficient in applying global & domestic LLMs (Gemini, GPT-4o, DeepSeek, Kimi, Qwen), utilizing advanced AI Coding Agents (Claude Code, Codex) into efficient solo workflows, matching the right model & tool to each scenario.",
          achievements: [
            "AI Coding Agents & Open Source Projects: Built an AI Investment Analysis System using Claude Code & Codex Agents. Open-sourced WorldCup 2026 Predictions (Finals record: 101 matches predicted, 79.2% direction accuracy, 29.7% scoreline accuracy) and Velina Pet Desktop Mascot (integrating HoYoverse APIs for daily game check-ins and social media distribution).",
            "AIGC Cross-Platform Media (10,000+ Total Followers): Strategically leveraged Gemini, DeepSeek, GPT, and Claude to build a quality-first short-video pipeline, reaching 10,000+ total followers to date across Xiaohongshu (7,000+) and Douyin (3,000+).",
            "Enterprise Prompt Engineering & Workflow Automation: Mastered multi-model prompt tuning to craft 20+ specialized standard prompt sets (for SaaS site routing and corporate bidding) to multiply execution metrics."
          ],
          aiProjects: [
            {
              name: 'AI Investment Analysis & Decision System',
              desc: 'Built with Claude Code & Codex Agents to feature-extract broker reports with Gemini & DeepSeek, tracking capacity shifts for real-market decisions.',
              link: 'https://stock-mind.kunkun1023.xyz/',
              tags: ['Claude Code / Codex', 'Gemini / DeepSeek', 'AI Quant', 'Data Synthesis']
            },
            {
              name: 'WorldCup 2026 Predictions System',
              desc: 'Open-source match prediction system leveraging multi-LLM (GPT/DeepSeek/Qwen) data processing on GitHub. Achieved 79.2% match direction accuracy and 29.7% scoreline accuracy across 101 predicted matches.',
              link: 'https://github.com/joearkon/worldcup2026-predictions',
              tags: ['Multi-LLM', '79.2% Win Rate', 'WorldCup 2026', 'Open Source']
            },
            {
              name: 'Velina Pet Desktop Mascot',
              desc: 'Open-source AI desktop companion on GitHub. Integrated game APIs for auto check-ins and daily alerts, distributed to social media fans for community engagement.',
              link: 'https://github.com/joearkon/velina-pet',
              tags: ['AI Agent', 'HoYoverse API', 'Desktop Alerts', 'Fan Engagement']
            },
            {
              name: 'AIGC Cross-Platform Media',
              desc: 'Quality-centric social growth engine with Seedance and Claude/Kimi across Xiaohongshu (7,000+) and Douyin (3,000+), reaching 10,000+ followers.',
              link: '',
              tags: ['AIGC Media', 'Xiaohongshu 7000+', 'Douyin 3000+', '10k+ Followers']
            }
          ],
          tags: ["AIGC", "Claude Code", "Codex Agent", "DeepSeek / Gemini / GPT", "LLM Decision"],
          color: "border-purple-500 dark:border-purple-400",
          isPromoted: false
        },
        {
          id: 1,
          role: "SaaS Platform KA Director / Customer Success Director (Solution Architecture)",
          company: "Shanghai Hekuo Info Tech",
          period: "2023 - 2025.07 (Late Stage)",
          description: "Promoted from core project lead to Head of Customer Success (CSM Director & Solution Architecture). Responsible for full lifecycle retention, upsell renewal, and complex solution governance. Spearheaded HEYTEA franchisee B2B payment platform evolution (decoupling business facts from financial facts), Huifu PayFac large-amount capital reconciliation, and TamJai global digital operations.",
          achievements: [
            "HEYTEA Franchisee B2B Payment & Settlement Architecture: Led the solution review and decoupling design between BOH supply chain and HEYTEA payment middle-platform—BOH owns ordering, fulfillment differences, and return facts, while the payment platform owns actual deduction, fee/subsidy distribution, and refund facts; designed store-level canary routing, dynamic hiding of legacy payment buttons, and Huifu PayFac wire transfer reconciliation, ensuring complete alignment with JDE ledger.",
            "Pre-sales Solution Consulting & Architecture: Directed full-cycle pre-sales for top-tier catering chains, independently producing requirement surveys, business blueprints, system architecture, and technical/commercial bidding documents; delivered live defense and high-impact demos for multi-million projects with a top-tier success rate.",
            "KA Custom Operations & Continuous Evolution: Established bespoke operational mechanisms for brands like HEYTEA, Starbucks, DQ, and Jiujiuya. Deployed agile 'R&D + Business' squads to feed frontline customer feedback back into universal SaaS capabilities (e.g. dynamic inventory check, emergency ordering, variance review).",
            "Global Omni-channel Support (TamJai International): Orchestrated cross-border digital operations across HK, Singapore, Japan, Australia, Malaysia, and the Philippines; built Zendesk+WhatsApp multi-lingual ticketing with cross-time-zone smart routing and tiered SLAs from scratch."
          ],
          brands: [
            "HEYTEA", "Jiujiuya", "DQ (Dairy Queen)",
            "T9 Tea", "Linlee", 
            "TamJai", "Something For", "Guoyaya"
          ],
          tags: ["Payment Architecture", "Fact Decoupling", "Pre-sales Arch", "KA Success", "Global Operations"],
          color: "border-red-500 dark:border-red-400",
          isPromoted: true
        },
        {
          id: 2,
          role: "SaaS Project Manager / Solution Architect",
          company: "Shanghai Hekuo Info Tech",
          period: "2018 - 2023 (Mid Stage)",
          description: "Head of core project delivery and solution architecture. Led both tech lead and PM responsibilities, deeply stationing at frontline stores and client headquarters. Orchestrated requirement surveys, product roadmap planning, system integration, UAT, and nationwide cutovers across 5000+ chain stores.",
          achievements: [
            "HEYTEA HiPOS Omni-channel Fulfillment Evolution: Planned and delivered the 4-phase roadmap of 'Channel Ingestion -> Unified POS -> Payment Settlement -> Open API'; designed mini-program orders routing to dedicated POS terminals, custom XML receipt/cup-label template engines, and abstracted printing/routing into an independent microservice (uprint/ulabel) supporting 100k+ peak daily orders across 800+ stores.",
            "HEYTEA Suggested Ordering (MRP) Product Design & Feedback Flywheel: Evolved from moving weighted average to 'Revenue/Sales Forecasting + Dynamic BOM Recipe Breakdown + Non-sales Consumable Usage per 10k GMV + New Item Cold Start'; architected the closed loop of 'HQ Sets Rules -> System Calculates Suggestions -> Stores Handle Exceptions with Mandatory Reasons -> Business Metric Dual Verification', reducing loss+variance rate from 5.9% to 3.9% and saving 40 min/store daily.",
            "Jiujiuya / Dingyu 1000+ Store Digital Middle-Platform Blueprint: Spearheaded a 71-day survey across 7+ departments, establishing the blueprint of 'Phase 1 Foundations (5 unified domains) -> Phase 2 Enablement (Franchisee Ordering & Supply Chain) -> Phase 3 Consumer Services'; completed 59 system interfaces in client's private Alibaba Cloud environment, supporting 1000+ Jiujiuya and 500+ Liufu Duck stores.",
            "Shanghai Shida Catering Group (DQ, Papa John's): Delivered BOH store supply chain for 1000+ stores nationwide, designing real-time inventory, procurement replenishment, and logistics tracking, cutting inventory loss by 2%."
          ],
          tags: ["MRP Feedback Flywheel", "HiPOS Fulfillment", "Business Blueprint", "PMP", "Full Lifecycle"],
          color: "border-blue-500 dark:border-blue-400",
          isPromoted: true
        },
        {
          id: 3,
          role: "Senior Software Engineer / Product R&D Core",
          company: "Shanghai Hekuo Info Tech",
          period: "2016.04 - 2018 (Founding Core Member)",
          description: "Core founding technical and product architecture member. Participated in BOH underlying framework and product philosophy, leading the design and implementation of OMS order management, dynamic BOM recipe engine, and omni-channel reporting.",
          achievements: [
            "OMS Unified Transaction & Fulfillment Modeling: Led data modeling and state machine design (OPEN -> CHECKOUT -> WAITING -> PAYING -> SALE -> TICKET snapshot) for the Omnichannel Order Center (OMS), establishing idempotency, exception compensation, and store dispatch mechanisms as the single source of truth for inventory, BOM, reports, and financial reconciliation.",
            "Dynamic BOM Recipe Engine Design: Shattered legacy ERP static BOM constraints by designing a dynamic recipe breakdown engine ('Base BOM + Attribute Rules: Size scaling, Sugar reduction, Milk substitution, Topping addition, Temperature override'), translating sales items into exact raw ingredient and packaging depletion (patented invention).",
            "Microservices Domain Decoupling & Platform Infrastructure: Co-architected BOH cloud-native services, decomposing Product (SPU), Menu (ODM), Order (OMS), Recipe (BOM), Inventory (INV), and Reports into independent domains, leveraging Python, OAuth multi-tenancy, and K8s to support 100k+ daily active orders."
          ],
          tags: ["OMS State Machine", "Patented BOM", "Microservices Domains", "0-to-1 Product Design", "Python/OAuth"],
          color: "border-yellow-500 dark:border-yellow-400",
          isPromoted: false
        },
        {
          id: 4,
          role: "SharePoint Engineer (Digital Solutions)",
          company: "PwC Shanghai Tech",
          period: "2014.01 - 2016.04",
          description: "As a key technical member for digital collaboration, involved in the architectural design, deployment, custom development, and O&M of PwC's internal SharePoint platform to create a high-availability enterprise portal.",
          achievements: [
            "Architecture & Workflow Platform: Participated in 0-to-1 enterprise implementation and site collection planning; involved in the core construction and deployment of the internal corporate workflow platform.",
            "Custom Development & M365: Developed custom Web Parts via C#/.NET for automated approvals and integrated Teams/Exchange to eliminate data silos and streamline workflows.",
            "Automation & Global Collaboration: Designed automated workflows via Power Automate and collaborated with overseas PwC technical teams to deliver international medical digital projects.",
            "O&M Excellence: Ensured 7x24 stability and established standardized deployment/development manuals to provide structural guidance for future platform expansion."
          ],
          tags: ["SharePoint Expert", "C#/.NET", "Power Automate", "Enterprise Collaboration"],
          color: "border-slate-500 dark:border-gray-500",
          isPromoted: false
        },
        {
          id: 5,
          role: "Microsoft Web / SharePoint Engineer",
          company: "Cognizant Technology Solutions",
          period: "2011.12 - 2013.12",
          description: "Core member of the tech team supporting digital transformation in Finance and Healthcare industries, delivering customized SharePoint solutions to digitize business processes.",
          achievements: [
            "Industry Solutions: Developed custom components via SPFx, building compliance document management for Finance and record collaboration portals for Healthcare clients.",
            "Ops & Service Loop: Managed daily O&M and ticket resolution with rapid response, maintaining top-tier customer satisfaction and issue resolution rates.",
            "System Integration: Coordinated seamless integration between SharePoint and client ERP/HIS systems, establishing industry-standard templates for professional delivery."
          ],
          tags: ["Fin/Medical Tech", "SPFx Dev", "Implementation", "IT Ops"],
          color: "border-purple-500 dark:border-purple-400",
          isPromoted: false
        },
        {
          id: 6,
          role: ".NET & Web Technical Support Engineer",
          company: "Microsoft (China) Co., Ltd.",
          period: "2010 - 2011",
          description: "Provided full-stack technical support for the .NET platform to enterprise clients and internal teams, while maintaining the official Microsoft technical community.",
          achievements: [
            "Enterprise Technical Support (Web/.NET/SharePoint): Provided technical consulting and troubleshooting for .NET Framework, C#, ASP.NET, and SharePoint Server in Microsoft's CSS department.",
            "System Troubleshooting & Optimization: Handled performance tuning for ASP.NET apps, IIS deployment issues, .NET compatibility optimization, and custom SharePoint workflow support.",
            "Customer Communication & Resolution: Partnered with enterprise IT departments to root-cause issues via remote sessions, delivering high-quality documentation and top-tier satisfaction rates.",
            "Knowledge Management: Documented high-frequency issues into a technical knowledge base, significantly improving team response and resolution efficiency."
          ],
          tags: [".NET", "SharePoint", "CSS Support", "Troubleshooting"],
          color: "border-blue-600 dark:border-blue-500",
          isPromoted: false
        }
      ];
    }
  };

  const experiences = getExperiences(language);

  return (
    <section id="experience" className="py-12 bg-white dark:bg-slate-900/50 relative transition-colors duration-500 print:py-2 print:break-before-page">
      <div className="max-w-4xl mx-auto px-4 print:px-0">
        <div className="mb-10 text-center print:mb-3 print:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight text-slate-900 dark:text-white transition-colors duration-300 print:text-xl print:mb-0.5 print:tracking-tight">
            <span className="text-blue-800 dark:text-blue-400">{language === 'zh' ? '职业' : 'Work'}</span> {language === 'zh' ? '生涯' : 'Experience'}
          </h2>
          <p className="mt-2 text-slate-600 dark:text-gray-400 tracking-tight transition-colors duration-300 print:mt-0 print:text-[9.5pt] print:text-slate-500 print:tracking-tight">
            {language === 'zh' 
              ? '八年磨一剑 • 从技术底层到商业顶层的全链路进阶'
              : '8+ Years • From Technical Foundation to Business Leadership'}
          </p>
        </div>

        <div className="space-y-8 print:space-y-3">
          {experiences.map((exp) => (
            <div key={exp.id} id={`exp-${exp.id}`} className="group relative border-b border-slate-200 dark:border-slate-800 pb-8 last:border-0 last:pb-0 print:pb-3 print:last:pb-0 print:mb-2">
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1.5 gap-2 print:mb-0.5 print:break-inside-avoid">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors print:text-base print:tracking-tight">
                  {exp.role}
                </h3>
                <span className="text-xs font-medium text-slate-500 dark:text-gray-400 whitespace-nowrap print:text-[8.5pt]">
                  {exp.period}
                </span>
              </div>
              
              <div className="text-base font-medium text-slate-700 dark:text-slate-300 mb-2.5 print:text-[9.5pt] print:mb-0.5">
                {exp.company}
                {exp.isPromoted && (
                  <span className="ml-2 text-[10px] font-normal bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-gray-400 px-1.5 py-0.5 rounded print:px-1 print:py-0 print:text-[7.5pt]">
                    {language === 'zh' ? '内部晋升' : 'Promoted Internally'}
                  </span>
                )}
              </div>
              
              <p className="text-[13px] text-slate-600 dark:text-gray-300 mb-3 leading-snug text-justify print:text-[9.5pt] print:mb-1.5 print:leading-snug">
                {exp.description}
              </p>

              {exp.achievements && (
                <ul className="mb-4 space-y-1.5 list-disc list-inside text-[13px] text-slate-600 dark:text-gray-400 marker:text-blue-800 dark:marker:text-blue-400 print:mb-2 print:space-y-0.5 print:text-[9pt] print:leading-snug">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="leading-snug print:leading-normal">
                      <span className="-ml-2">{ach}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Brands Section */}
              {exp.brands && (
                <div className="mb-4 print:mb-2">
                  <ul className="space-y-1.5 list-disc list-inside text-[13px] text-slate-600 dark:text-gray-400 marker:text-blue-800 dark:marker:text-blue-400 print:space-y-0.5 print:text-[9pt] print:leading-snug">
                    <li className="leading-snug print:leading-normal">
                      <span className="-ml-2">{language === 'zh' ? '曾经合作品牌：' : 'Brands Worked With: '}</span>
                      <span className="-ml-2">{exp.brands.join(language === 'zh' ? '、' : ', ')}</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* AI Projects Section */}
              {exp.aiProjects && (
                <div className="mb-4 print:mb-2">
                  <ul className="space-y-1.5 list-disc list-inside text-[13px] text-slate-600 dark:text-gray-400 marker:text-blue-800 dark:marker:text-blue-400 print:space-y-0.5 print:text-[9pt] print:leading-snug">
                    {exp.aiProjects.map((proj, idx) => (
                      <li key={idx} className="leading-snug print:leading-normal">
                        <span className="-ml-2">{proj.name}：</span>
                        <span className="-ml-2">{proj.desc}</span>
                        {proj.link && <a href={proj.link} target="_blank" className="ml-2 text-blue-800 dark:text-blue-400 hover:underline print:hidden text-[10px]">Visit →</a>}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 print:gap-1">
                {exp.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-medium bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-gray-400 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 print:px-1.5 print:py-0 print:text-[8pt]">
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

export default Experience;