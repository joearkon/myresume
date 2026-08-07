import { 
  Document, 
  Packer, 
  Paragraph, 
  TextRun, 
  HeadingLevel, 
  AlignmentType, 
  BorderStyle, 
  Table, 
  TableRow, 
  TableCell, 
  WidthType,
  VerticalAlign,
  HeightRule,
  ImageRun,
  ShadingType
} from 'docx';
import { saveAs } from 'file-saver';
import { Language } from '../App';

export const generateWord = async (language: Language, avatarUrl?: string) => {
  const isZh = language === 'zh';
  const fileName = isZh ? '陈子卓野_简历.docx' : 'Joe_Chen_Resume.docx';

  // Fetch avatar image
  let avatarImage: Uint8Array | null = null;
  let imageType: "jpg" | "png" = "jpg";

  if (avatarUrl) {
    try {
      const isExternal = avatarUrl.startsWith('http');
      const fetchUrl = isExternal 
        ? `https://api.allorigins.win/raw?url=${encodeURIComponent(avatarUrl)}`
        : avatarUrl;

      console.log("Word Export: Fetching avatar from:", fetchUrl);
      const response = await fetch(fetchUrl);
      if (response.ok) {
        const buffer = await response.arrayBuffer();
        avatarImage = new Uint8Array(buffer);
        
        // Detect image type from magic numbers
        if (avatarImage[0] === 0x89 && avatarImage[1] === 0x50 && avatarImage[2] === 0x4E && avatarImage[3] === 0x47) {
          imageType = "png";
        } else {
          imageType = "jpg";
        }
        
        console.log(`Word Export: Avatar fetched, size: ${avatarImage.length}, detected type: ${imageType}`);
      } else {
        console.warn(`Word Export: Failed to fetch avatar: ${response.status} ${response.statusText}`);
      }
    } catch (e) {
      console.error("Word Export: Error fetching avatar:", e);
    }
  }

  // Data
  const hero = isZh ? {
    name: '陈子卓野',
    title: 'AIGC 新媒体 | 大客户成功（售前售后） | 项目管理（餐饮O2O SaaS）',
    roles: ['AIGC 新媒体', '大客户成功', '项目管理', '餐饮O2O SaaS'],
    contact: '+86 135 2425 2203 | 313455055@qq.com | home.kunkun1023.xyz',
    info: '1986年10月 | 汉族 | 上海 | 中共党员 | 本科 | 10余年 +',
    desc: '拥有 10 年餐饮连锁 SaaS 全链路实战经验，覆盖底层平台建设、千万级 KA 客户项目交付。熟知门店运营、总部内系统运营流程，擅长梳理企业内部多系统、多部门协同等连锁餐饮企业经营问题并分析企业数字化共性痛点以及改进方式；\n\n同时深耕 LLM 智能体工程与 AIGC AI视频营销等相关落地，能够熟练运用 Claude Code、Codex等多款主流大模型搭建自动化分析、内容生产工作流，擅长融合底层技术理解、项目全周期交付、售前方案咨询三重能力，能够独立完成客户需求诊断、数字化方案设计、MVP 试点规划直至全域规模化落地，适配消息底座 + AI 数字化工具分阶段渐进落地的客户实施体系。'
  } : {
    name: 'Joe.Chen',
    title: 'AIGC New Media | KA Success (Pre- & Post-Sales) | Project Management (Catering O2O SaaS)',
    roles: ['AIGC New Media', 'KA Success', 'Project Management', 'Catering SaaS'],
    contact: '+86 135 2425 2203 | 313455055@qq.com | home.kunkun1023.xyz',
    info: 'Oct 1986 | Han | Shanghai | Party Member | Bachelor | 10 Years +',
    desc: '10 years of full-stack practical experience in catering chain SaaS, covering underlying platform R&D and multi-million KA project delivery. Well-versed in store operations and HQ system workflows; skilled at addressing catering chain operational issues such as multi-system and multi-department collaboration, while analyzing common enterprise digitalization pain points and improvement paths.\n\nDeeply engaged in LLM agent engineering and AIGC AI video marketing implementation. Proficient in leveraging leading LLMs and AI coding agents (Claude Code, Codex) to build automated analysis and content production workflows. Blends technical understanding, end-to-end project delivery, and pre-sales consulting capabilities to independently conduct client requirement diagnostics, solution architecture design, MVP pilot planning, and full-scale rollout—adapting to a phased implementation framework powered by messaging foundations and AI digital tools.'
  };

  const experience = isZh ? [
    {
      role: "AIGC 独立开发者 / 运营者",
      company: "独立项目 / 自由职业",
      period: "2025.08 - 至今",
      description: "全面拥抱 AI 时代，深入探索 AIGC 核心技术在内容创意、金融决策辅助等领域的工程化结合。熟练运用 Gemini、GPT、DeepSeek、Kimi、Qwen 等国内外大模型，结合 Claude Code 与 Codex Agent 打造单人闭环生产力。",
      achievements: [
        "AI 编程智能体与开源工程项目：基于 Claude Code 与 Codex Agent 搭建 AI 投资交易辅助系统（https://stock-mind.kunkun1023.xyz/）；开源 2026 世界杯预测系统（决赛收官战绩：101 场预测，胜负方向命中率 79.2%，比分命中率 29.7%）；开源 Velina Pet 桌面宠物系统，联动米哈游开源接口支持游戏签到与日常提醒，分发至自媒体粉丝群建立流量与产品互动闭环。",
        "AIGC 跨平台自媒体（小红书 7000+ / 抖音 3000+，全网粉丝 1w+）：跑通高质量短视频“选题-生图-脚本-剪辑”全闭环管线，精控 Seedance 多帧角色一致性与生图损耗，截止目前全网精准涨粉 10,000+。",
        "利用大模型 Prompt 工程技术沉淀了 20 多套涵盖餐饮 SaaS 选址预测、行业招投标自动化等企业级 Prompt 标准库。"
      ],
      aiProjects: [
        {
          name: 'AI 投资交易辅助与智能分析系统（Claude Code / Codex）',
          desc: '基于大模型（Gemini/DeepSeek/GPT）的智能分析与决策系统，自动提炼财报与资讯并自动分析归纳。',
          tags: ['AI 决策', 'Claude Code / Codex', 'Gemini / DeepSeek', 'LLM']
        },
        {
          name: '2026 世界杯预测系统 (WorldCup Predictions)',
          desc: '开源基于 LLM 与数据模型的赛事预测系统（GitHub）。决赛收官战绩：预测 101 场，胜负方向命中率 79.2%（80 场正确），比分命中率 29.7%（含 16 场精确比分）。',
          tags: ['LLM', '方向命中率 79.2%', '世界杯 2026', '开源项目']
        },
        {
          name: '桌面宠物系统 (Velina Pet)',
          desc: '开源 AI 桌面宠物伴侣（GitHub）。联动米哈游开源接口实现游戏签到、体力与任务提醒，分发至自媒体粉丝群建立互动闭环。',
          tags: ['AI Agent', '米哈游接口', '桌面提醒', '粉丝闭环']
        },
        {
          name: 'AIGC 跨平台自媒体',
          desc: '小红书 7000+ 粉丝，抖音 3000+ 粉丝，全网累计 1w+ 粉丝。精控多帧角色一致性与生图损耗。',
          tags: ['AIGC 自媒体', '小红书 7000+', '抖音 3000+', '全网粉丝 1w+']
        }
      ]
    },
    {
      role: "SaaS 平台大客户总监",
      company: "上海合阔信息技术有限公司",
      period: "2023 - 2025.07 (后期)",
      description: "聚焦 SaaS 平台上线后大客户全生命周期运营。以客户价值为核心，构建 system 化客户维护与增长体系。",
      achievements: [
        "大客户 (KA) 独立运营体系：针对喜茶、星巴克、DQ、久久丫等头部品牌制定独立运营逻辑。为喜茶成立“产研+业务”专项小组以匹配其快速扩张；为星巴克组建独立运维团队保障一线业务；为 DQ、久久丫等百万级品牌分配独立 CSM 深度挖掘潜在需求。",
        "中小客户 (SMB) 精细化管理：针对 SomethingFor、果呀呀、Seesaw 等品牌采用“AM+PM”共同维护机制。通过提炼共性痛点并转化为 SaaS 产品需求，定期与产品团队沟通，显著提升系统使用率与客户满意度。",
        "生态伙伴与全球化布局：深度联动国内外合作伙伴，筛选并培养优质代理商，协助进行更大规模的拓客、实施与运维，实现业务快速复制。",
        "售前赋能与最佳实践：与售前团队紧密合作，输出实际客户成功案例与行业最佳实践白皮书，辅助售前团队在投标打标阶段提供强有力的数字化支撑。"
      ],
      brands: ["喜茶 (HEYTEA)", "久久丫", "DQ (Dairy Queen)", "T9 Tea", "Linlee (邻里)", "谭仔 (TamJai)", "Something For", "果呀呀"]
    },
    {
      role: "SaaS 平台项目经理",
      company: "上海合阔信息技术有限公司",
      period: "2018 - 2023 (中期)",
      description: "核心项目交付负责人。统筹 SaaS 项目全生命周期管理，从需求对接、方案设计到落地上线、验收交付，主导多个头部餐饮品牌数字化转型项目，累计覆盖超 5000 家连锁门店。",
      achievements: [
        "上海适达餐饮集团 (DQ 冰雪皇后、PPJ 棒约翰): 负责 BOH 门店供应链项目交付。对接全国 1000+ 门店需求，设计库存管理、采购补货、物流追踪全流程解决方案，上线后供应链周转效率明显提升，库存损耗率降低 2%。",
        "深圳喜茶 (HEYTEA): 2018-2020年常驻深圳总部，作为核心对接人主导门店供应链 BOH 与 HiPOS 系统从 0 到 1 落地。统筹线上小程序、外卖平台、线下 POS 与 BOH 供应链全域打通，实现“下单-履约-结算”一体化数字化闭环，支撑全国门店规模化运营；(BOM配方设计研发曾获专利)",
        "浙江久久丫食品: 2021-2022年常驻客户现场，负责业务中台项目。搭建集订单、库存、会员、财务于一体的业务中台，整合全国 1800+ 门店数据，打破数据孤岛，为品牌精细化运营与业务经营决策提供有力支撑。",
        "交付管理：统筹 SaaS 项目全生命周期管理，负责进度、风险及质量控制，确保多个大型项目按期保质交付，获得客户高度认可。"
      ]
    },
    {
      role: "SaaS 云平台高级软件开发",
      company: "上海合阔信息技术有限公司",
      period: "2016.04 - 2018 (早期)",
      description: "初创阶段核心成员。牵头 SaaS 餐饮云平台从 0 到 1 的底层构建，奠定平台技术基石。",
      achievements: [
        "主导平台底层架构设计，采用微服务架构，支撑多租户隔离与高并发处理",
        "聚焦订单 OMS 核心模块开发，设计标准化数据整合与清洗流程，解决订单来源分散痛点",
        "打造统一数据接口体系，覆盖订单、库存、营收等核心业务维度"
      ]
    },
    {
      role: "SharePoint 工程师",
      company: "PwC 上海技术有限公司",
      period: "2014.01 - 2016.04",
      description: "聚焦企业数字化协作效率提升。主导 SharePoint 平台的设计、部署与优化，支撑普华永道内部信息管理需求。",
      achievements: [
        "负责公司内部 SharePoint 平台软件的开发与维护",
        "定制开发 Web 部件与流程自动化配置，集成 Microsoft 365",
        "利用 Power Automate 简化跨部门审批流程，提升文档协作效率"
      ]
    },
    {
      role: "微软 Web 技术 / SharePoint 工程师",
      company: "高知特信息技术（上海）有限公司",
      period: "2011.12 - 2013.12",
      description: "作为技术组成员参与企业数字化转型项目，兼顾开发与运维，服务金融医疗行业客户。",
      achievements: [
        "采用 SharePoint Framework (SPFx) 开发自定义组件，实现业务流程自动化",
        "搭建客户内部审批流、文档协作门户等场景化解决方案",
        "负责技术运维工单处理与复盘，输出分析报告推动平台迭代"
      ]
    }
  ] : [
    {
      role: "AIGC Independent Developer / Operator",
      company: "Independent Project / Freelance",
      period: "2025.08 - Present",
      description: "Fully embraced the AI era, deeply exploring the engineering convergence of AIGC core technologies with content creation and investment decision-making. Proficient in global & domestic LLMs (Gemini, GPT, DeepSeek, Kimi, Qwen) and AI Coding Agents (Claude Code, Codex).",
      achievements: [
        "AI Coding Agents & Open Source Projects: Built an AI Investment Analysis System with Claude Code & Codex Agents. Open-sourced WorldCup 2026 Predictions (Finals record: 101 matches predicted, 79.2% direction accuracy, 29.7% scoreline accuracy) and Velina Pet Desktop Mascot (integrating HoYoverse APIs for daily game check-ins and social media distribution).",
        "AIGC Cross-Platform Media (10,000+ Followers): Established a quality-first AIGC short-video pipeline across Xiaohongshu (7,000+ followers) and Douyin (3,000+ followers), reaching 10,000+ total followers to date.",
        "Crafted 20+ specialized enterprise standard prompt sets (for SaaS site routing and corporate bidding) to multiply single-person execution metrics."
      ],
      aiProjects: [
        {
          name: 'AI Investment Analysis System',
          desc: 'Automates raw report crawling, token cleaning, and logical parameter extraction using Claude Code, Codex, Gemini, and DeepSeek.',
          tags: ['AI Decision Support', 'Claude Code / Codex', 'Gemini / DeepSeek', 'LLM']
        },
        {
          name: 'WorldCup 2026 Predictions System',
          desc: 'Open-source match prediction system on GitHub. Achieved 79.2% match direction accuracy and 29.7% scoreline accuracy across 101 predicted matches.',
          tags: ['LLM', '79.2% Win Rate', 'WorldCup 2026', 'Open Source']
        },
        {
          name: 'Velina Pet Desktop Mascot',
          desc: 'Open-source AI desktop companion on GitHub. Integrated game APIs for auto check-ins and daily alerts, distributed to social media fans.',
          tags: ['AI Agent', 'HoYoverse API', 'Desktop Alerts', 'Fan Engagement']
        },
        {
          name: 'AIGC Cross-Platform Media',
          desc: 'Quality-centric social growth engine across Xiaohongshu (7,000+) and Douyin (3,000+), reaching 10,000+ followers.',
          tags: ['AIGC Media', 'Xiaohongshu 7000+', 'Douyin 3000+', '10k+ Followers']
        }
      ]
    },
    {
      role: "Key Account Director (SaaS)",
      company: "Shanghai Hekuo Info Tech",
      period: "2023 - 2025.07",
      description: "Focused on full lifecycle management of key accounts post-launch. Built a systematic customer maintenance and growth system centered on customer value.",
      achievements: [
        "KA Independent Operation System: Developed customized operation systems for top-tier brands (HEYTEA, Starbucks, DQ, Jiujiuya, etc.). Established a dedicated 'R&D + Business' task force for HEYTEA and a specialized O&M team for Starbucks. Assigned dedicated CSMs for 1M+ revenue accounts to track dynamics and mine latent needs.",
        "SMB Refined Operations & Product Synergy: Implemented a joint 'AM + PM' mechanism for brands like SomethingFor, Guoyaya, and Seesaw. Identified common pain points to define SaaS product requirements, collaborating with the product team to drive feature iterations and improve adoption.",
        "Ecosystem Partnership & Global Expansion: Collaborated with domestic and international partners to empower agents for large-scale acquisition, implementation, and O&M, facilitating global business growth.",
        "Pre-sales Enablement & Best Practices: Partnered with the pre-sales team to output 'Best Practice' case studies and white papers, providing critical support for bidding and technical proposals."
      ],
      brands: ["HEYTEA", "Jiujiuya", "DQ (Dairy Queen)", "T9 Tea", "Linlee", "TamJai", "Something For", "Guoyaya"]
    },
    {
      role: "SaaS Project Manager",
      company: "Shanghai Hekuo Info Tech",
      period: "2018 - 2023",
      description: "Head of core project delivery. Managed full SaaS project lifecycles, from requirement alignment and solution design to go-live and acceptance, leading digital transformation for top catering brands covering 5000+ stores.",
      achievements: [
        "Shanghai Shida Catering Group (DQ, Papa John's): Responsible for BOH store supply chain project delivery. Aligned requirements for 1000+ stores nationwide, designed full-process solutions for inventory, procurement, and logistics, reducing inventory loss by 2%.",
        "Shenzhen HEYTEA: Stationed in Shenzhen HQ (2018-2020), as the core contact led the 0-to-1 implementation of BOH supply chain and HiPOS systems. Coordinated the integration of mini-programs, delivery platforms, offline POS, and BOH supply chain, achieving an integrated 'Order-Fulfillment-Settlement' digital loop to support nationwide scaled operations; (Patented BOM recipe design).",
        "Zhejiang Juewei Duck: Stationed on-site (2021-2022), responsible for business middle-platform project. Built an integrated platform for orders, inventory, membership, and finance, consolidating data for 1800+ stores to support refined operations and business decisions.",
        "Delivery Management: Managed full SaaS project lifecycles, responsible for schedule, risk, and quality control, ensuring on-time and high-quality delivery of multiple large-scale projects."
      ]
    },
    {
      role: "Senior Software Developer (SaaS Cloud)",
      company: "Shanghai Hekuo Info Tech",
      period: "2016.04 - 2018",
      description: "Core member during the startup phase. Led the 0-to-1 construction of the SaaS catering cloud platform.",
      achievements: [
        "Led platform architecture design using microservices to support multi-tenant isolation and high concurrency.",
        "Focused on OMS core module development, designing standardized data integration and cleaning processes.",
        "Built a unified data interface system covering core business dimensions like orders, inventory, and revenue."
      ]
    },
    {
      role: "SharePoint Engineer",
      company: "PwC Shanghai Technology",
      period: "2014.01 - 2016.04",
      description: "Focused on improving enterprise digital collaboration efficiency. Led the design, deployment, and optimization of the SharePoint platform.",
      achievements: [
        "Responsible for the development and maintenance of internal SharePoint software.",
        "Customized Web Parts and workflow automation, integrating with Microsoft 365.",
        "Used Power Automate to simplify cross-departmental approval processes."
      ]
    },
    {
      role: "Microsoft Web Tech / SharePoint Engineer",
      company: "Cognizant Technology Solutions",
      period: "2011.12 - 2013.12",
      description: "Member of the technical team for enterprise digital transformation projects, serving clients in finance and healthcare.",
      achievements: [
        "Developed custom components using SharePoint Framework (SPFx) to automate business processes.",
        "Built scenario-based solutions such as internal approval flows and document collaboration portals.",
        "Responsible for technical maintenance ticket handling and analysis reports for platform iteration."
      ]
    }
  ];

  const projects = isZh ? {
    metrics: [
      { value: '5000+', label: '连锁门店落地' },
      { value: '90%', label: '大客户年度留存' },
      { value: '50%', label: '团队营收贡献' },
      { value: '3000+', label: 'AIGC 账号单月涨粉' }
    ],
    cases: [
      {
        brand: 'HEYTEA 喜茶',
        role: '项目负责人 (2018 - 2020 | 常驻深圳)',
        desc: '全渠道数字化转型标杆项目。HiPOS 系统覆盖全国 500+ 门店（2020年数据，2024年已突破 2000 家），支撑喜茶直营 + 海外门店规模化运营。',
        highlight: '订单单峰值 10 万+',
        coreWork: [
          {
            title: '一、项目管理与数字化落地',
            items: [
              '负责覆盖全国 800+ 门店（2020 年）的门店供应链 BOH 和 POS 收银体系的搭建。',
              '作为喜茶核心对接人，全流程主导门店供应链调研、设计、开发实施（期间也负责开发核心的商品 BOM 配方模块）及上线运营。',
              '凭借 BOH 项目的出色交付赢得信任，继而主导 HiPOS 项目从 0 到 1 落地，负责与喜茶内部产研开发团队对接，统筹线上小程序、外卖平台、线下 POS 与 BOH 供应链全域打通，实现“下单-履约-结算”一体化。',
              '负责从需求调研、蓝图规划、项目排期到全国上线与验收的闭环全生命周期管理。'
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
        ]
      },
      {
        brand: '久久丫 / 留夫鸭',
        role: '业务中台负责人 (2022 - 2024 | 常驻上海-嘉善)',
        desc: '全程主导久久丫、留夫鸭数字化中台一期从 0 到 1 落地，覆盖需求调研→蓝图设计→系统对接→功能落地→培训赋能→上线验收→全国推广全流程。',
        highlight: '从0到1全流程主导',
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
        ]
      },
      {
        brand: 'AI编程智能体与开源工程项目',
        role: 'AIGC 独立开发者 / 开源作者 (2025.08 - 至今)',
        desc: '包含基于 Claude Code 自研的大模型投资决策系统、2026 世界杯预测系统（WorldCup Predictions）以及 Velina Pet 桌面宠物系统，贯通金融量化、数据预测与 Agent 桌面交互。',
        highlight: '开源与 AI Agent',
        coreWork: [
          {
            title: '一、AI 投资交易辅助与智能分析系统',
            items: [
              '基于 Claude Code 构建研报与资讯自动提炼平台，数分钟内自动完成‘抓取-整理-分析-核心结论’全自动贯通。'
            ]
          },
          {
            title: '二、2026 世界杯预测系统（WorldCup Predictions）',
            items: [
              '开源基于 LLM 与数据模型的赛事预测系统（GitHub: joearkon/worldcup2026-predictions）。2026-07-20 决赛收官：101 场预测，胜负方向命中率 79.2%（80 场正确），比分命中率 29.7%（30 场，含 16 场精确比分）。'
            ]
          },
          {
            title: '三、桌面宠物系统（Velina Pet）',
            items: [
              '开源 AI 动态交互桌面伴侣（GitHub: joearkon/velina-pet）。联动米哈游等开源接口实现游戏内容联动、签到、状态查询与日常提醒，分发给自媒体粉丝，构建互动体验闭环。'
            ]
          }
        ]
      },
      {
        brand: 'AIGC 跨平台自媒体',
        role: '内容主理人 / 独立运营者 (2025.08 - 至今)',
        desc: '建立精细化的 AIGC 动漫/IP 短视频生成线。精控多帧视觉一致性与提示词算法，2 个月内实现小红书 7000+、抖音 3000+，全网累计涨粉 10,000+。',
        highlight: '全网粉丝 1w+',
        coreWork: [
          {
            title: '一、多帧视觉与一致性攻坚',
            items: [
              '使用 Seedance 控制同一原创角色的多场景视觉一致性，大幅降低生图耗损。'
            ]
          },
          {
            title: '二、高转化选题与脚本重构',
            items: [
              '使用 Claude 精准微调高转化选题并重构脚本，结合剪映 AI 实现高性价比产出。'
            ]
          },
          {
            title: '三、跨平台粉丝突破（1w+）',
            items: [
              '小红书 7000+ 粉丝，抖音 3000+ 粉丝，全网累计吸引 10,000+ 垂直高粘性粉丝。'
            ]
          }
        ]
      }
    ]
  } : {
    metrics: [
      { value: '5000+', label: 'Stores Deployed' },
      { value: '90%', label: 'Key Account Retention' },
      { value: '50%', label: 'Team Revenue Contribution' },
      { value: '10,000+', label: 'AIGC Total Followers' }
    ],
    cases: [
      {
        brand: 'HEYTEA',
        role: 'Project Lead (2018 - 2020 | Shenzhen)',
        desc: 'Benchmark project for omni-channel digital transformation. HiPOS system covers 500+ stores (2020 data), supporting scaled operation of direct-sale and overseas stores.',
        highlight: '100k+ Peak Daily Orders',
        coreWork: [
          {
            title: '1. Project Management & Digital Implementation',
            items: [
              'Responsible for building the BOH supply chain and POS system for 800+ stores nationwide (as of 2020).',
              'As the core contact for HEYTEA, led the full lifecycle of store supply chain research, design, development (including core BOM recipe module), and implementation.',
              'Due to the successful delivery of the BOH project, won the responsibility for the HiPOS project in the following year, leading the 0-to-1 implementation.',
              'Coordinated with HEYTEA\'s internal R&D team to integrate mini-programs, delivery platforms, offline POS, and BOH supply chain, achieving an integrated "Order-Fulfillment-Settlement" loop.',
              'Managed the full project lifecycle from requirement research and blueprint planning to nationwide rollout and acceptance.'
            ]
          },
          {
            title: '2. Customer Success & Operational Visits',
            items: [
              'Established a national maintenance system with a 2-hour resolution SLA, significantly improving system stability.',
              'Conducted regular HQ visits and on-site store inspections to resolve real pain points, driving requirement implementation.',
              'Monitored operational metrics via real-time dashboards, using data to drive product iterations.'
            ]
          }
        ]
      },
      {
        brand: 'Juewei Duck / Liufu Duck',
        role: 'Middle Platform Lead (2022 - 2024 | Shanghai-Jiashan)',
        desc: 'Fully led the 0-to-1 implementation of the Phase I digital middle-platform, covering the entire process from requirement research to national rollout.',
        highlight: '0 to 1 Full Process Lead',
        coreWork: [
          {
            title: '1. Full-Process Project Leadership & Implementation',
            items: [
              'Responsible for the 0-to-1 digital middle-platform rollout across 3000+ stores, leading 6 core modules.',
              'Integrated SAP ERP, membership, and in-house mini-programs, achieving omni-channel fulfillment.',
              'Built a 3-tier promotion and training system, ensuring rapid national transition and business continuity.'
            ]
          },
          {
            title: '2. Customer Success & Operational Visits',
            items: [
              'Proactively visited HQ and regional leaders, solving real pain points through on-site coaching.',
              'Delivered regular operational reviews, proving system value with data and securing long-term recognition.',
              'Established rapid response and weekly retrospective mechanisms, empowering regional teams.'
            ]
          }
        ]
      },
      {
        brand: 'AI Coding Agents & Open Source Projects',
        role: 'AIGC Developer / Open Source Creator (2025.08 - Present)',
        desc: 'Architected AI Investment Decision System with Claude Code and released open-source projects on GitHub (WorldCup 2026 Predictions & Velina Pet Desktop Mascot).',
        highlight: 'Open Source & AI Agent',
        coreWork: [
          {
            title: '1. AI Investment Analysis System',
            items: [
              'Built automated report extraction pipelines with Claude Code, parsing deep report insights in minutes.'
            ]
          },
          {
            title: '2. WorldCup 2026 Predictions System',
            items: [
              'Open-sourced match prediction system (GitHub: joearkon/worldcup2026-predictions). Tournament final record (July 20, 2026): 101 matches predicted, 79.2% match direction accuracy (80/101 correct) and 29.7% scoreline accuracy (30/101, 16 exact).'
            ]
          },
          {
            title: '3. Velina Pet Desktop Mascot',
            items: [
              'Open-sourced desktop AI companion (GitHub: joearkon/velina-pet). Integrated HoYoverse APIs for game check-ins, daily task alerts, and stamina tracking, distributed to social media followers.'
            ]
          }
        ]
      },
      {
        brand: 'AIGC Cross-Platform Media',
        role: 'Content Creator / Operator (2025.08 - Present)',
        desc: 'Quality-first short video AIGC pipeline across Xiaohongshu (7,000+) and Douyin (3,000+), reaching 10,000+ total followers in 2 months.',
        highlight: '10,000+ Followers',
        coreWork: [
          {
            title: '1. Multi-frame Integrity & Visual Consistency',
            items: [
              'Utilized Seedance to maintain character visual consistency and reduce image generation waste.'
            ]
          },
          {
            title: '2. Script Optimization with Claude',
            items: [
              'Refined scripts and topic blueprints with Claude for maximum engagement and click rates.'
            ]
          },
          {
            title: '3. Cross-Platform Organic Growth',
            items: [
              'Grew Xiaohongshu to 7,000+ followers and Douyin to 3,000+ followers, totaling 10,000+ followers.'
            ]
          }
        ]
      }
    ]
  };

  const skills = [
    { category: isZh ? "核心能力" : "Core Competencies", items: isZh ? ["SaaS 项目管理", "大客户运营", "数字化转型", "AIGC 应用", "全生命周期交付"] : ["SaaS Project Management", "Key Account Operations", "Digital Transformation", "AIGC Application", "Full Lifecycle Delivery"] },
    { category: isZh ? "技术栈" : "Tech Stack", items: ["Microservices", "OMS/POS Systems", "SharePoint", "Microsoft 365", "Python", "Prompt Engineering"] },
    { category: isZh ? "工具" : "Tools", items: ["ComfyUI", "Gemini", "Seedance", "Kling", "Power Automate", "Jira", "Confluence"] },
    { category: isZh ? "语言" : "Languages", items: isZh ? ["英语六级 (CET-6)", "商务英语沟通", "技术文档阅读", "海外项目协作", "口语流利"] : ["CET-6", "Business English", "Technical Reading", "Global Collaboration", "Fluent Speaking"] }
  ];

  const education = [
    { 
      school: isZh ? "上海海事大学" : "Shanghai Maritime University", 
      degree: isZh ? "本科" : "Bachelor", 
      date: "2006.09 - 2009.06" 
    },
    { 
      school: isZh ? "上海市理工大学附属高中" : "High School Affiliated to USST", 
      degree: isZh ? "高中" : "High School", 
      date: "2007.09 - 2009.06" 
    }
  ];

  const hobbies = [
    { title: isZh ? "游戏与动漫" : "Gaming & Anime", desc: isZh ? "资深玩家与动漫爱好者，关注二次元文化与 AI 创作。" : "Hardcore gamer and anime fan, focusing on ACG culture and AI creation." },
    { title: isZh ? "量化交易" : "Quant Trading", desc: isZh ? "探索 AI 在金融领域的应用，开发量化辅助工具。" : "Exploring AI applications in finance, developing quantitative tools." }
  ];

  const contactMe = {
    title: isZh ? "联系我" : "Contact Me",
    phone: "Phone: +86 135 2425 2203",
    email: "Email: 313455055@qq.com",
    wechat: "WeChat: kunkun1023",
    douyin: "Douyin: AI 动漫 IP (AIGC)",
    xiaohongshu: "Xiaohongshu: AI 动漫 IP (AIGC)",
    website: "Website: home.kunkun1023.xyz"
  };

  const createSectionTitle = (text: string) => {
    return new Paragraph({
      children: [
        new TextRun({
          text: text,
          bold: true,
          size: 28,
          color: "2563eb",
        }),
      ],
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 400, after: 200 },
      border: {
        bottom: {
          color: "2563eb",
          space: 1,
          style: BorderStyle.SINGLE,
          size: 6,
        },
      },
    });
  };

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // Header
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.NONE },
              bottom: { style: BorderStyle.NONE },
              left: { style: BorderStyle.NONE },
              right: { style: BorderStyle.NONE },
              insideHorizontal: { style: BorderStyle.NONE },
              insideVertical: { style: BorderStyle.NONE },
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: 70, type: WidthType.PERCENTAGE },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: hero.name, bold: true, size: 48 }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: hero.title, size: 24, color: "666666" }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: hero.contact, size: 18, color: "666666" }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: hero.info, size: 18, color: "666666" }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    verticalAlign: VerticalAlign.CENTER,
                    children: [
                      // Avatar
                      new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        children: avatarImage ? [
                          new ImageRun({
                            data: avatarImage,
                            transformation: { width: 100, height: 100 },
                            type: imageType,
                          }),
                        ] : [],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),

          // Profile
          createSectionTitle(isZh ? "个人简介" : "Profile"),
          new Paragraph({
            children: [
              new TextRun({ text: hero.desc }),
            ],
            spacing: { after: 200 },
          }),

          // Projects / Star Cases
          createSectionTitle(isZh ? "客户成功与运营管理 (2024~2025年)" : "Customer Success & Operations Management (2024-2025)"),
          
          // Metrics in Word
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 4, color: "e2e8f0" },
              bottom: { style: BorderStyle.SINGLE, size: 4, color: "e2e8f0" },
              left: { style: BorderStyle.NONE },
              right: { style: BorderStyle.NONE },
              insideHorizontal: { style: BorderStyle.NONE },
              insideVertical: { style: BorderStyle.NONE },
            },
            rows: [
              new TableRow({
                children: projects.metrics.map(m => new TableCell({
                  shading: { fill: "f8fafc" },
                  verticalAlign: VerticalAlign.CENTER,
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [
                        new TextRun({ text: m.value, bold: true, size: 24, color: "1e40af" }),
                      ],
                      spacing: { before: 100 }
                    }),
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [
                        new TextRun({ text: m.label, size: 14, color: "64748b" }),
                      ],
                      spacing: { after: 100 }
                    })
                  ]
                }))
              })
            ],
          }),

          ...projects.cases.flatMap((c: any) => [
            new Paragraph({
              children: [
                new TextRun({ text: `${c.brand} | ${c.role}`, bold: true, size: 20 }),
              ],
              spacing: { before: 150 },
            }),
            new Paragraph({
              children: [
                new TextRun({ 
                  text: `${isZh ? '核心成就' : 'Highlight'}: ${c.highlight}`, 
                  bold: true, 
                  color: "16a34a", // Green color for highlights
                  size: 18 
                }),
              ],
              spacing: { after: 50 },
            }),
            new Paragraph({
              text: c.desc,
              spacing: { after: 50 },
            }),
            ...(c.coreWork ? c.coreWork.flatMap((work: any) => [
              new Paragraph({
                children: [
                  new TextRun({ text: work.title, bold: true, size: 18, color: "333333" }),
                ],
                spacing: { before: 50, after: 25 },
              }),
              ...work.items.map((item: string) => 
                new Paragraph({
                  text: item,
                  bullet: { level: 0 },
                  spacing: { after: 25 },
                })
              )
            ]) : [])
          ]),

          // Career Path
          createSectionTitle(isZh ? "职业生涯 • Career Path" : "Career Path"),
          new Paragraph({
            children: [
              new TextRun({
                text: isZh ? "十年磨一剑 • 从技术底层到商业顶层的全链路进阶" : "10+ Years • From Technical Foundation to Business Leadership",
                italics: true,
                bold: true,
                color: "333333",
                size: 20,
              }),
            ],
            spacing: { after: 150 },
          }),

          // Experience
          ...experience.flatMap((exp) => [
            new Paragraph({
              children: [
                new TextRun({ text: `${exp.role} | ${exp.company}`, bold: true, size: 22 }),
              ],
              spacing: { before: 150 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: exp.period, italics: true, color: "666666", size: 16 }),
              ],
              spacing: { after: 50 },
            }),
            new Paragraph({
              text: exp.description,
              spacing: { after: 50 },
            }),
            ...exp.achievements.map(
              (ach) =>
                new Paragraph({
                  text: ach,
                  bullet: { level: 0 },
                  spacing: { after: 25 },
                })
            ),
            // Brands in Experience
            ...(exp.brands ? [
              new Paragraph({
                children: [
                  new TextRun({ text: isZh ? "曾经合作品牌：" : "Brands Worked With: ", bold: true, size: 18, color: "475569" }),
                  new TextRun({ text: exp.brands.join(isZh ? "、" : ", "), size: 18, color: "475569" }),
                ],
                bullet: { level: 0 },
                spacing: { before: 50, after: 50 },
              })
            ] : []),
            // AI Projects in Experience
            ...(exp.aiProjects ? [
              ...exp.aiProjects.flatMap((p: any) => [
                new Paragraph({
                  children: [
                    new TextRun({ text: `${p.name}：`, bold: true, size: 18, color: "475569" }),
                    new TextRun({ text: p.desc, size: 18, color: "475569" }),
                  ],
                  bullet: { level: 0 },
                  spacing: { after: 25 },
                })
              ])
            ] : []),
          ]),

          // Skills
          createSectionTitle(isZh ? "专业技能" : "Skills"),
          ...skills.map(
            (skill) =>
              new Paragraph({
                children: [
                  new TextRun({ text: `${skill.category}: `, bold: true, size: 18 }),
                  new TextRun({ text: skill.items.join(", "), size: 18 }),
                ],
                spacing: { after: 50 },
              })
          ),

          // Education
          createSectionTitle(isZh ? "教育背景" : "Education"),
          ...education.map(
            (edu) =>
              new Paragraph({
                children: [
                  new TextRun({ text: edu.school, bold: true, size: 18 }),
                  new TextRun({ text: ` | ${edu.degree} (${edu.date})`, size: 18 }),
                ],
                spacing: { after: 50 },
              })
          ),

          // Hobbies
          createSectionTitle(isZh ? "个人兴趣" : "Hobbies"),
          ...hobbies.map(
            (hobby) =>
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({ text: `${hobby.title}: `, bold: true, size: 18 }),
                  new TextRun({ text: hobby.desc, size: 18 }),
                ],
                spacing: { after: 50 },
              })
          ),

          // Contact Me Section
          createSectionTitle(contactMe.title),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun({ text: contactMe.phone, size: 16 }),
              new TextRun({ text: "", break: 1 }),
              new TextRun({ text: contactMe.email, size: 16 }),
              new TextRun({ text: "", break: 1 }),
              new TextRun({ text: contactMe.wechat, size: 16 }),
              new TextRun({ text: "", break: 1 }),
              new TextRun({ text: contactMe.douyin, size: 16 }),
              new TextRun({ text: "", break: 1 }),
              new TextRun({ text: contactMe.xiaohongshu, size: 16 }),
              new TextRun({ text: "", break: 1 }),
              new TextRun({ text: contactMe.website, size: 16 }),
            ],
            spacing: { before: 50, after: 100 },
          }),
        ],
      },
    ],
  });

  try {
    console.log("Word Export: Packing document to blob...");
    const blob = await Packer.toBlob(doc);
    console.log("Word Export: Blob generated successfully. Size:", blob.size);
    
    // Manual download implementation for better iframe compatibility
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      console.log("Word Export: Download triggered and cleanup done.");
    }, 100);

  } catch (error) {
    console.error("Word Export Error during document generation or download:", error);
    throw error;
  }
};

export const downloadFile = (content: string, fileName: string, contentType: string) => {
  const a = document.createElement('a');
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);
};
