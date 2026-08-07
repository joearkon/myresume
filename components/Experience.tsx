import React from 'react';
import { Language } from '../App';

interface ExperienceProps {
  language: Language;
}

const Experience: React.FC<ExperienceProps> = ({ language }) => {
  
  const getExperiences = (lang: Language) => {
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
          role: "SaaS 平台大客户总监 / 客户成功总监",
          company: "上海合阔信息技术有限公司",
          period: "2023 - 2025.07 (后期)",
          description: "凭借覆盖客户全生命周期管理、头部连锁客户深度运营及存量价值深耕的突出成果，由项目经理正式晋升为客户成功部门负责人（CSM 总监）。全面负责大客户留存、增购续约及长期价值运营，主导搭建客户成功体系，建立标准化服务流程、客户分层运营机制与全生命周期管理策略，推动核心指标持续保持行业标杆水平。",
          achievements: [
            "售前解决方案管理：曾多次主导售前讲标投标案例，独立完成大中型连锁企业的售前方案演示和讲标工作。主导行业头部品牌数字化项目全流程售前与投标工作，独立完成需求调研、业务蓝图规划、技术方案设计、系统架构规划、投标文件编制，覆盖技术标 + 商务标全模块；针对多个千万级标杆项目，独立负责现场讲标、答疑及全场景方案演示，精准传递产品价值。支撑多个百万/千万级项目成功中标，讲标通过率位居团队前列，为项目落地奠定坚实基石。",
            "大客户 (KA) 独立运营体系：针对多个头部品牌制定独立运营逻辑。成立“产研+业务”专项小组以匹配客户的高速扩张需求；组建专业运维团队保障高可用业务运行；针对百万级以上营收品牌分配独立 CSM 经理，深度挖掘潜在需求并实现精细化价值深耕。同时，与品牌的业务负责人及 IT 负责人长期保持良好合作关系，全方位保障项目稳健运行与价值落地。",
            "中小客户 (SMB) 精细化管理：采用“AM+PM”共同维护机制。通过提炼全行业共性痛点并将其闭环转化为 SaaS 产品迭代需求，显著提升系统使用率与客户满意度。",
            "生态环节与全球化布局（谭仔 TamJai 专项）：主导谭仔国际 (TamJai, 2024-2025) 港、新、日、澳、马、菲等多国跨国连锁数字化运营；从 0 搭建 Zendesk+WhatsApp 全域客服工单平台，配置跨时区智能路由与 SLA 规则；实现海外相关 issue 报修总览可视化浏览、统计与复盘，建立标准化客户服务体系流程，输出标准化运维流程支撑售前投标。",
            "售前赋能与最佳实践：将 KA 客户成功案例沉淀为行业最佳实践白皮书，辅助售前团队在投标阶段提供强有力的数字化交付支撑。"
          ],
          brands: [
            "喜茶 (HEYTEA)", "久久丫", "DQ (Dairy Queen)", "乐乐茶 (LELECHA)",
            "绝绝紫 / 绝味鸭脖", "Seesaw Coffee", "T9 Tea", "Linlee (邻里)", 
            "谭仔 (TamJai)", "Something For", "果呀呀"
          ],
          tags: ["售前方案", "客户增长", "CRM体系", "商业价值", "团队管理"],
          color: "border-red-500 dark:border-red-400",
          isPromoted: true
        },
        {
          id: 2,
          role: "SaaS 平台项目经理",
          company: "上海合阔信息技术有限公司",
          period: "2018 - 2023 (中期)",
          description: "核心项目交付负责人。因项目中展现出极强的跨部门协作、客户沟通与方案表达能力，被团队推举同时负责技术负责人与项目经理双职责，成为技术与业务的核心衔接枢纽，正式奠定从技术向项目管理转型的基础。后续直接独立负责头部客户新项目，担任全职项目经理，统筹需求、方案、实施、交付与验收全流程，主导多个头部品牌数字化转型，累计覆盖超 5000 家连锁门店。",
          achievements: [
            "上海适达餐饮集团 (DQ 冰雪皇后、PPJ 棒约翰): 负责 BOH 门店供应链项目交付。对接全国 1000+ 门店需求，设计库存管理、采购补货、物流追踪全流程解决方案，上线后供应链周转效率明显提升，库存损耗率降低 2%。",
            "深圳喜茶 (HEYTEA): 2019-2021年常驻深圳总部，作为核心对接人主导门店供应链 BOH 与 HiPOS 系统从 0 到 1 落地。统筹线上小程序、外卖平台、线下 POS 与 BOH 供应链全域打通，实现“下单-履约-结算”一体化数字化闭环，支撑全国门店规模化运营；(BOM配方设计研发曾获专利)",
            "浙江久久丫食品: 2021-2023年常驻客户现场，负责业务中台项目。搭建集订单、库存、会员、财务于一体的业务中台，整合全国 1800+ 门店数据，打破数据孤岛，为品牌精细化运营与业务经营决策提供有力支撑。",
            "交付管理：统筹 SaaS 项目全生命周期管理，负责进度、风险及质量控制，确保多个大型项目按期保质交付，获得客户高度认可。"
          ],
          tags: ["PMP", "项目交付", "全生命周期管理", "专利研发"],
          color: "border-blue-500 dark:border-blue-400",
          isPromoted: true
        },
        {
          id: 3,
          role: "SaaS 云平台高级软件开发工程师",
          company: "上海合阔信息技术有限公司",
          period: "2016.04 - 2018 (初创核心成员)",
          description: "作为初创阶段核心技术成员，牵头餐饮 SaaS 云平台从 0 到 1 的全栈技术构建，主导底层架构设计、核心模块开发、部署运维体系搭建，为平台后续规模化扩张奠定技术基石。",
          achievements: [
            "SaaS 平台架构从 0 到 1 搭建：主导基于 Python 框架与自研微服务框架的设计与落地，集成 OAuth 统一认证体系，实现多租户隔离与高并发处理，并利用 Jenkins + K8s 搭建自动化流水线支撑业务弹性伸缩。",
            "核心业务模块深度开发：聚焦 OMS 订单管理系统，设计标准化数据整合清洗流程，实现全渠道订单统一接入，并通过分库分表与异步优化支撑日活跃订单处理量平滑扩容至 10 万级。",
            "平台运维与技术沉淀：负责线上高频故障排查与性能调优（如库存超卖、延迟优化），并沉淀 SaaS 平台开发运维规范文档，为后续团队扩张与客户规模化接入门槛降低提供标准化指引。"
          ],
          tags: ["Python 框架", "OAuth/认证", "OMS 核心", "自研微服务"],
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
          role: "SaaS Platform KA Director / Customer Success Director",
          company: "Shanghai Hekuo Info Tech",
          period: "2023 - 2025.07 (Late Stage)",
          description: "Promoted from Project Manager to Head of Customer Success (CSM Director) following outstanding results in full lifecycle management and deep operation of top-tier chain brands. Led the construction of the Customer Success framework, establishing standardized service processes and client-tiering mechanisms to drive retention, upsell rates, and long-term value.",
          achievements: [
            "Pre-sales Solution Management: Led multiple pre-sales bidding cases for major chain enterprises. Managed the full cycle of pre-sales and bidding for top-tier catering brands, including requirement survey, business blueprinting, technical solution design, and bid document preparation. Responsible for on-site bidding and high-impact solution demonstrations for multi-million projects, effectively communicating product value to decision-makers. Supported the successful bid of multiple million/multi-million level projects with a top-tier success rate.",
            "KA Independent Operation System: Developed customized operation systems for multiple top-tier brands. Established dedicated 'R&D + Business' task forces to support rapid client expansion and specialized O&M teams for high-availability business. Assigned dedicated CSMs for high-revenue accounts to track dynamics and mine latent needs. Maintained long-term, positive relationships with brand business and IT heads to ensure stable project operation and value delivery.",
            "SMB Refined Operations: Implemented a joint 'AM + PM' mechanism. Identified common industry pain points to define SaaS product requirements, collaborating with the product team to drive feature iterations.",
            "Ecosystem & Global Expansion: Empowered domestic and international partners/agents for large-scale acquisition and implementation, facilitating global business growth.",
            "Pre-sales Enablement: Transformed KA success stories into industry best practice white papers, providing critical support for strategic bidding and technical proposals."
          ],
          brands: [
            "HEYTEA", "Jiujiuya", "DQ (Dairy Queen)",
            "T9 Tea", "Linlee", 
            "TamJai", "Something For", "Guoyaya"
          ],
          tags: ["Pre-sales", "Customer Growth", "CRM", "Business Value", "Management"],
          color: "border-red-500 dark:border-red-400",
          isPromoted: true
        },
        {
          id: 2,
          role: "SaaS Project Manager",
          company: "Shanghai Hekuo Info Tech",
          period: "2018 - 2023 (Mid Stage)",
          description: "Head of core project delivery. Due to exceptional cross-department collaboration and communication skills, I was selected to serve as both Technical Lead and Project Manager, bridging technology and business—a role that established my transition to project management. Subsequently took independent charge of top-tier projects as a full-time PM, overseeing the entire lifecycle from requirements to delivery for 5000+ stores.",
          achievements: [
            "Shanghai Shida Catering Group (DQ, Papa John's): Responsible for BOH store supply chain project delivery. Aligned requirements for 1000+ stores nationwide, designed full-process solutions for inventory, procurement, and logistics, reducing inventory loss by 2%.",
            "Shenzhen HEYTEA: Stationed in Shenzhen HQ (2019-2021), as the core contact led the 0-to-1 implementation of BOH supply chain and HiPOS systems. Coordinated the integration of mini-programs, delivery platforms, offline POS, and BOH supply chain, achieving an integrated 'Order-Fulfillment-Settlement' digital loop to support nationwide scaled operations; (Patented BOM recipe design).",
            "Zhejiang Juewei Duck: Stationed on-site (2021-2023), responsible for business middle-platform project. Built an integrated platform for orders, inventory, membership, and finance, consolidating data for 1800+ stores to support refined operations and business decisions.",
            "Delivery Management: Managed full SaaS project lifecycles, responsible for schedule, risk, and quality control, ensuring on-time and high-quality delivery of multiple large-scale projects."
          ],
          tags: ["PMP", "Delivery", "Full Lifecycle", "Patents"],
          color: "border-blue-500 dark:border-blue-400",
          isPromoted: true
        },
        {
          id: 3,
          role: "Senior Software Engineer (SaaS)",
          company: "Shanghai Hekuo Info Tech",
          period: "2016.04 - 2018 (Founding Core Member)",
          description: "As a core founding technical member, led the 0-to-1 full-stack construction of the catering SaaS cloud platform. Directed underlying architecture design, core module development, and deployment systems, laying the technical foundation for scalable expansion.",
          achievements: [
            "0-to-1 SaaS Platform Architecture: Led the design and implementation of a custom microservices framework based on Python, integrating OAuth unified authentication for secure multi-tenancy and high-concurrency handling.",
            "Core Business Module Development: Focused on OMS development, designing standardized data processing for omnichannel orders and optimizing performance via database partitioning and asynchronous messaging to support 100k+ daily orders.",
            "Ops & Technical Excellence: Managed troubleshooting for high-frequency issues (e.g., inventory overselling, latency) and established SaaS development/Ops documentation standards to facilitate rapid team scale-up and client boarding."
          ],
          tags: ["Python Framework", "OAuth/Auth", "OMS Core", "Custom Microservices"],
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
            <div key={exp.id} className="group relative border-b border-slate-200 dark:border-slate-800 pb-8 last:border-0 last:pb-0 print:pb-3 print:last:pb-0 print:mb-2">
              
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