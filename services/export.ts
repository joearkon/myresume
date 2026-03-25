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
    title: '全链路数字化专家 | AIGC 新媒体运营',
    roles: ['技术架构', '项目交付', '客户增长', 'AI 自媒体创作'],
    contact: '男 | 32岁 | 135 2425 2203 | 313455055@qq.com | home.kunkun1023.xyz',
    info: '10年经验 | 期望城市: 上海 | 正在寻找机会 | 本科',
    desc: '从代码到底层架构，从单项目交付到大客户运营。我不仅懂技术实现，更懂如何将技术转化为商业价值。曾主导喜茶、DQ、棒约翰等头部品牌的数字化落地。目前正全面拥抱 AI 时代，深耕 AIGC 与新媒体运营。由对游戏动漫的热爱驱动，探索利用 AI 工具进行内容二创与剪辑。通过构建标准化的 AI 内容产出工作流，在抖音、小红书成功打造个人账号与高粘性 IP 矩阵，并独立开发了基于大模型的量化交易助手。'
  } : {
    name: 'Joe.Chen',
    title: 'Digital Transformation Expert | AIGC Social Media',
    roles: ['Tech Arch', 'Delivery', 'Growth', 'AI Social Media'],
    contact: 'Male | 32 Years Old | +86 135 2425 2203 | 313455055@qq.com | home.kunkun1023.xyz',
    info: '10 Years Exp | City: Shanghai | Actively Seeking Opportunities | Bachelor',
    desc: 'From coding to architecture, from project delivery to key account growth. I bridge the gap between technical implementation and business value. Led digital transformation for top brands like Heytea, DQ, and Papa John\'s. Currently fully embracing the AI era, deeply engaged in AIGC and social media operations. Driven by a passion for gaming and anime, exploring AI-powered secondary creation and video editing. By building standardized AI content production workflows, successfully established personal accounts and high-engagement IP matrices on Douyin and Xiaohongshu, alongside developing LLM-based quantitative trading assistants.'
  };

  const experience = isZh ? [
    {
      role: "AIGC 独立开发者 / 运营者",
      company: "独立项目 / 自由职业",
      period: "2025.08 - 至今",
      description: "全面拥抱 AI 时代，探索 AIGC 技术在内容创作与商业变现中的应用，构建高效的自动化工作流。",
      achievements: [
        "独立搭建抖音 + 小红书双平台二次元动漫 IP 矩阵，依托 AIGC 实现 1 个月高效涨粉 5000 + 高粘性垂直粉丝",
        "构建从角色原创设计、剧本分镜到 AI 视频生成的全链路标准化工作流，实现内容规模化、低成本、高效率产出",
        "深入研究 AI 提示词工程（Prompt Engineering）与 ComfyUI 工作流编排，内容生产效率提升 80%"
      ]
    },
    {
      role: "SaaS 平台大客户总监",
      company: "上海合阔信息技术有限公司",
      period: "2023 - 2025.07",
      description: "聚焦 SaaS 平台上线后大客户全生命周期运营。以客户价值为核心，构建系统化客户维护与增长体系。",
      achievements: [
        "负责维护大客户平台产品运营，包括 DQ，喜茶，乐乐茶，Something For，Seesaw，T9，久久丫等品牌",
        "制定分层客户维护策略，针对头部连锁品牌的个性化需求，提供定制化增值服务，建立季度走访、月度复盘机制",
        "0-1 搭建客户留存监控体系，实时跟踪系统使用率，大客户年度留存率稳定在 90% 以上",
        "牵头客户续约与增收工作，深度挖掘需求，负责团队每年为公司贡献 50% 左右的营收"
      ]
    },
    {
      role: "SaaS 项目经理",
      company: "上海合阔信息技术有限公司",
      period: "2018 - 2023",
      description: "核心项目交付负责人。统筹 SaaS 项目全生命周期管理，从需求对接、方案设计到落地上线、验收交付，主导多个头部餐饮品牌数字化转型项目，累计覆盖超 5000 家连锁门店。",
      achievements: [
        "上海适达餐饮集团 (DQ 冰雪皇后、PPJ 棒约翰): 负责 BOH 门店供应链项目交付。对接全国 1000+ 门店需求，设计库存管理、采购补货、物流追踪全流程解决方案，上线后供应链周转效率明显提升，库存损耗率降低 2%。",
        "深圳喜茶 (HEYTEA): 2018-2020年常驻深圳总部，主导核心项目交付。完成 BOH 供应链与全渠道 POS 系统打通，支撑 2000+ 门店及线上多渠道订单一体化处理，实现“下单-履约-结算”全链路数字化，峰值订单处理能力达 10万+ 笔/日；(BOM配方设计研发曾获专利)",
        "浙江久久丫食品: 2021-2022年常驻客户现场，负责业务中台项目。搭建集订单、库存、会员、财务于一体的业务中台，整合全国 1800+ 门店数据，打破数据孤岛，为品牌精细化运营与业务经营决策提供有力支撑。",
        "交付管理：统筹 SaaS 项目全生命周期管理，负责进度、风险及质量控制，确保多个大型项目按期保质交付，获得客户高度认可。"
      ]
    },
    {
      role: "SaaS 云平台高级软件开发",
      company: "上海合阔信息技术有限公司",
      period: "2016.04 - 2018",
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
      description: "Fully embraced the AI era, exploring the application of AIGC technologies in content creation and commercial monetization, building highly efficient automated workflows.",
      achievements: [
        "Independently built a 2D anime IP matrix across Douyin and Xiaohongshu, gaining 5000+ vertical followers in 1 month via AIGC.",
        "Constructed a full-link standardized workflow from original character design and script to AI video generation, achieving scalable and efficient output.",
        "Deeply researched AI Prompt Engineering and ComfyUI workflow orchestration, increasing content production efficiency by 80%."
      ]
    },
    {
      role: "Key Account Director (SaaS)",
      company: "Shanghai Hekuo Info Tech",
      period: "2023 - 2025.07",
      description: "Focused on full lifecycle management of key accounts post-launch. Built a systematic customer maintenance and growth system centered on customer value.",
      achievements: [
        "Managed platform operations for brands including DQ, Heytea, Lelecha, Something For, Seesaw, T9, Juewei Duck.",
        "Developed tiered customer maintenance strategies and provided customized value-added services.",
        "Built customer retention monitoring system from 0-1, maintaining 90%+ retention for key accounts.",
        "Led renewal and upselling, team contributed ~50% of company revenue annually."
      ]
    },
    {
      role: "SaaS Project Manager",
      company: "Shanghai Hekuo Info Tech",
      period: "2018 - 2023",
      description: "Head of core project delivery. Managed full SaaS project lifecycles, from requirement alignment and solution design to go-live and acceptance, leading digital transformation for top catering brands covering 5000+ stores.",
      achievements: [
        "Shanghai Shida Catering Group (DQ, Papa John's): Responsible for BOH store supply chain project delivery. Aligned requirements for 1000+ stores nationwide, designed full-process solutions for inventory, procurement, and logistics, reducing inventory loss by 2%.",
        "Shenzhen HEYTEA: Stationed in Shenzhen HQ (2018-2020), led core project delivery. Integrated BOH supply chain with omni-channel POS, supporting integrated order processing for 2000+ stores and online channels, with peak daily capacity of 100k+ orders; (Patented BOM recipe design).",
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
      { value: '5000+', label: 'AIGC 账号单月涨粉' }
    ],
    brands: ["喜茶 (HEYTEA)", "久久丫 / 留夫鸭", "DQ (Dairy Queen)", "Peets (皮爷咖啡)", "T9 Tea", "Linlee (邻里)", "谭仔 (TamJai)", "Something For", "果呀呀"],
    cases: [
      {
        brand: 'HEYTEA 喜茶',
        role: '项目负责人 (2018 - 2020 | 常驻深圳)',
        desc: '全渠道数字化转型标杆项目。HiPOS 系统覆盖全国 500+ 门店（2020年数据，2024年已突破 2000 家），支撑喜茶直营 + 海外门店规模化运营。',
        highlight: '日订单峰值 10万+',
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
        ]
      },
      {
        brand: '久久丫 / 留夫鸭',
        role: '业务中台负责人 (2021 - 2022 | 常驻上海)',
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
        brand: '自媒体 IP 矩阵',
        role: '内容主理人',
        desc: '独立搭建抖音 + 小红书双平台二次元动漫 IP 矩阵，依托 AIGC 实现1 个月高效涨粉 5000 + 高粘性垂直粉丝，构建从角色原创设计、剧本分镜到 AI 视频生成的全链路标准化工作流。',
        highlight: '1个月涨粉5000+',
        coreWork: [
          {
            title: 'IP 视觉全案设计',
            items: [
              '独立完成角色人设、三视图、道具、场景、表情体系设计，形成统一可复用的原创视觉资产。'
            ]
          },
          {
            title: '内容体系搭建',
            items: [
              '自主策划动漫小剧场、剧情脚本、分镜设计、连载系列化内容，保障内容稳定输出与爆款潜力。'
            ]
          },
          {
            title: 'AIGC 全流程工作流搭建',
            items: [
              '熟练运用 Gemini、ComfyUI、Seedance、可灵 等 AI 工具，打通 “剧本→分镜→角色→画面→视频→剪辑” 自动化生产闭环，内容产出效率提升 80%。'
            ]
          }
        ]
      }
    ],
    aiProjects: [
      {
        name: "AIGC 动漫 IP 矩阵",
        desc: "基于 AIGC 技术的二次元动漫内容生产与运营，实现月度涨粉 5000+。",
        tags: ["ComfyUI", "Seedance", "Kling", "CapCut"],
        link: "Douyin / Xiaohongshu"
      },
      {
        name: "LLM 量化交易助手",
        desc: "基于大语言模型的量化交易辅助系统，提供市场情绪分析与策略建议。",
        tags: ["Python", "LLM", "Quant"],
        link: "Private Project"
      }
    ]
  } : {
    metrics: [
      { value: '5000+', label: 'Stores Deployed' },
      { value: '90%', label: 'Key Account Retention' },
      { value: '50%', label: 'Team Revenue Contribution' },
      { value: '5000+', label: 'AIGC Monthly Followers' }
    ],
    brands: ["HEYTEA", "Juewei Duck", "DQ", "Peets", "T9 Tea", "Linlee", "TamJai", "Something For", "Guoyaya"],
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
              'Led 0-to-1 implementation and national rollout for 2000+ stores, managing the full lifecycle from requirement review to phased rollout.',
              'Coordinated cross-system integration (mini-programs, payment, BOH, etc.), supporting 100k+ peak daily orders.',
              'Integrated BOH supply chain with POS, implementing auto-BOM breakdown and suggested ordering for 500+ stores.'
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
        role: 'Middle Platform Lead (2021 - 2022 | Shanghai)',
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
        brand: 'Social Media IP Matrix',
        role: 'Content Creator',
        desc: 'Independently built a 2D anime IP matrix. Leveraged AIGC to gain 5000+ followers in one month. Constructed a full-link standardized workflow.',
        highlight: '5000+ Followers in 1 Month',
        coreWork: [
          {
            title: '1. Comprehensive IP Visual Design',
            items: [
              'Independently completed the design of character personas and reusable original visual assets.'
            ]
          },
          {
            title: '2. Content System Construction',
            items: [
              'Autonomously planned anime short theaters and serialized content with viral potential.'
            ]
          },
          {
            title: '3. AIGC Full-Process Workflow Setup',
            items: [
              'Utilized AI tools to bridge the automated production loop, increasing efficiency by 80%.'
            ]
          }
        ]
      }
    ],
    aiProjects: [
      {
        name: "AIGC Anime IP Matrix",
        desc: "Anime content production and operation based on AIGC technology, achieving 5000+ monthly followers.",
        tags: ["ComfyUI", "Seedance", "Kling", "CapCut"],
        link: "Douyin / Xiaohongshu"
      },
      {
        name: "LLM Quant Assistant",
        desc: "Quantitative trading assistant system based on LLMs, providing market sentiment analysis.",
        tags: ["Python", "LLM", "Quant"],
        link: "Private Project"
      }
    ]
  };

  const skills = [
    { category: isZh ? "核心能力" : "Core Competencies", items: isZh ? ["SaaS 项目管理", "大客户运营", "数字化转型", "AIGC 应用", "全生命周期交付"] : ["SaaS Project Management", "Key Account Operations", "Digital Transformation", "AIGC Application", "Full Lifecycle Delivery"] },
    { category: isZh ? "技术栈" : "Tech Stack", items: ["Microservices", "OMS/POS Systems", "SharePoint", "Microsoft 365", "Python", "Prompt Engineering"] },
    { category: isZh ? "工具" : "Tools", items: ["ComfyUI", "Gemini", "Seedance", "Kling", "Power Automate", "Jira", "Confluence"] }
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
          createSectionTitle(isZh ? "明星案例与核心数据" : "Star Cases & Key Data"),
          
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
                        new TextRun({ text: m.value, bold: true, size: 28, color: "1e40af" }),
                      ],
                      spacing: { before: 120 }
                    }),
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [
                        new TextRun({ text: m.label, size: 16, color: "64748b" }),
                      ],
                      spacing: { after: 120 }
                    })
                  ]
                }))
              })
            ],
          }),

          ...projects.cases.flatMap((c: any) => [
            new Paragraph({
              children: [
                new TextRun({ text: `${c.brand} | ${c.role}`, bold: true, size: 22 }),
              ],
              spacing: { before: 200 },
            }),
            new Paragraph({
              children: [
                new TextRun({ 
                  text: `${isZh ? '核心成就' : 'Highlight'}: ${c.highlight}`, 
                  bold: true, 
                  color: "16a34a", // Green color for highlights
                  size: 20 
                }),
              ],
              spacing: { after: 100 },
            }),
            new Paragraph({
              text: c.desc,
              spacing: { after: 100 },
            }),
            ...(c.coreWork ? c.coreWork.flatMap((work: any) => [
              new Paragraph({
                children: [
                  new TextRun({ text: work.title, bold: true, size: 20, color: "333333" }),
                ],
                spacing: { before: 100, after: 50 },
              }),
              ...work.items.map((item: string) => 
                new Paragraph({
                  text: item,
                  bullet: { level: 0 },
                  spacing: { after: 50 },
                })
              )
            ]) : [])
          ]),

          // Brand Wall in Word - Moved Below Case Studies
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 2, color: "f1f5f9" },
              bottom: { style: BorderStyle.SINGLE, size: 2, color: "f1f5f9" },
              left: { style: BorderStyle.SINGLE, size: 2, color: "f1f5f9" },
              right: { style: BorderStyle.SINGLE, size: 2, color: "f1f5f9" },
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    shading: { fill: "ffffff" },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: isZh ? "曾经合作品牌" : "PAST COLLABORATIONS", bold: true, size: 18, color: "94a3b8" }),
                        ],
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 100, after: 100 },
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: projects.brands.join("  •  "), size: 18, color: "475569" }),
                        ],
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 100, after: 200 },
                      }),
                    ]
                  })
                ]
              })
            ],
          }),

          // AI Innovation Lab in Word
          new Paragraph({
            children: [
              new TextRun({ 
                text: isZh ? "AI 创新实验室" : "AI Innovation Lab", 
                bold: true, 
                size: 24,
                color: "3b82f6" 
              }),
            ],
            spacing: { before: 400, after: 200 },
          }),
          ...projects.aiProjects.flatMap((p) => [
            new Paragraph({
              children: [
                new TextRun({ text: p.name, bold: true, size: 22 }),
              ],
            }),
            new Paragraph({
              text: p.desc,
              spacing: { after: 100 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: `${isZh ? '技术栈' : 'Tags'}: ${p.tags.join(", ")}`, italics: true, color: "666666", size: 18 }),
              ],
              spacing: { after: 100 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: `${isZh ? '访问链接' : 'Link'}: ${p.link}`, color: "3b82f6", size: 18 }),
              ],
              spacing: { after: 200 },
            }),
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
                size: 22,
              }),
            ],
            spacing: { after: 200 },
          }),

          // Experience
          ...experience.flatMap((exp) => [
            new Paragraph({
              children: [
                new TextRun({ text: `${exp.role} | ${exp.company}`, bold: true, size: 24 }),
              ],
              spacing: { before: 200 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: exp.period, italics: true, color: "666666" }),
              ],
              spacing: { after: 100 },
            }),
            new Paragraph({
              text: exp.description,
              spacing: { after: 100 },
            }),
            ...exp.achievements.map(
              (ach) =>
                new Paragraph({
                  text: ach,
                  bullet: { level: 0 },
                  spacing: { after: 50 },
                })
            ),
          ]),

          // Skills
          createSectionTitle(isZh ? "专业技能" : "Skills"),
          ...skills.map(
            (skill) =>
              new Paragraph({
                children: [
                  new TextRun({ text: `${skill.category}: `, bold: true }),
                  new TextRun({ text: skill.items.join(", ") }),
                ],
                spacing: { after: 100 },
              })
          ),

          // Education
          createSectionTitle(isZh ? "教育背景" : "Education"),
          ...education.map(
            (edu) =>
              new Paragraph({
                children: [
                  new TextRun({ text: edu.school, bold: true }),
                  new TextRun({ text: ` | ${edu.degree} (${edu.date})` }),
                ],
                spacing: { after: 100 },
              })
          ),

          // Hobbies
          createSectionTitle(isZh ? "个人兴趣" : "Hobbies"),
          ...hobbies.map(
            (hobby) =>
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({ text: `${hobby.title}: `, bold: true, size: 20 }),
                  new TextRun({ text: hobby.desc, size: 18 }),
                ],
                spacing: { after: 100 },
              })
          ),

          // Contact Me Section
          createSectionTitle(contactMe.title),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun({ text: contactMe.phone, size: 18 }),
              new TextRun({ text: "", break: 1 }),
              new TextRun({ text: contactMe.email, size: 18 }),
              new TextRun({ text: "", break: 1 }),
              new TextRun({ text: contactMe.wechat, size: 18 }),
              new TextRun({ text: "", break: 1 }),
              new TextRun({ text: contactMe.douyin, size: 18 }),
              new TextRun({ text: "", break: 1 }),
              new TextRun({ text: contactMe.xiaohongshu, size: 18 }),
              new TextRun({ text: "", break: 1 }),
              new TextRun({ text: contactMe.website, size: 18 }),
            ],
            spacing: { before: 100, after: 200 },
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
