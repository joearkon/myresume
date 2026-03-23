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
  HeightRule
} from 'docx';
import { saveAs } from 'file-saver';
import { Language } from '../App';

export const generateMarkdown = (language: Language): string => {
  const isZh = language === 'zh';

  const hero = isZh ? {
    name: '陈子卓野',
    title: '全链路数字化专家 | AIGC 新媒体运营',
    contact: '电话: +86 135 2425 2203 | 邮箱: 313455055@qq.com | 网站: home.kunkun1023.xyz',
    desc: '从代码到底层架构，从单项目交付到大客户运营。我不仅懂技术实现，更懂如何将技术转化为商业价值。曾主导喜茶、DQ、棒约翰等头部品牌的数字化落地。目前正全面拥抱 AI 时代，深度探索 AIGC 与新媒体运营。熟练运用 Gemini、Nano Banana、ComfyUI 等前沿 AI 工具进行图文创作与短视频剪辑，在小红书和抖音打造高粘性个人 IP 矩阵，并独立开发了基于大模型的量化交易助手。'
  } : {
    name: 'Joe.Chen',
    title: 'Digital Transformation Expert | AIGC Social Media',
    contact: 'Phone: +86 135 2425 2203 | Email: 313455055@qq.com | Web: home.kunkun1023.xyz',
    desc: 'From coding to architecture, from project delivery to key account growth. I bridge the gap between technical implementation and business value. Led digital transformation for top brands like Heytea, DQ, and Papa John\'s. Currently fully embracing the AI era, deeply exploring AIGC and social media operations. Proficient in cutting-edge AI tools like Gemini, Nano Banana, and ComfyUI for content creation and short video editing, building a highly engaging personal IP matrix on Xiaohongshu and Douyin, alongside developing LLM-based quantitative trading assistants.'
  };

  const experience = isZh ? [
    {
      role: "AIGC 独立开发者 / 新媒体运营专家",
      company: "独立项目 / 自由职业",
      period: "2025.08 - 至今",
      description: "全面拥抱 AI 时代，探索 AIGC 技术在新媒体内容创作与商业变现中的应用，构建高效的自动化工作流。",
      achievements: [
        "基于 Gemini AI 进行剧本创作与分镜设计，结合 ComfyUI 构建图像与视频生成工作流，实现内容产出的标准化与自动化",
        "专注于游戏与动漫 IP 的二创内容矩阵运营，单月内在小红书与抖音双平台实现从 0 到 1 的突破，累计精准粉丝 5000+",
        "深入研究 AI 提示词工程（Prompt Engineering）与工作流编排，大幅降低内容制作成本，提升产出效率"
      ]
    },
    {
      role: "SaaS 平台大客户总监",
      company: "上海合阔信息技术有限公司",
      period: "2023 - 2025.07",
      description: "聚焦 SaaS 平台上线后大客户全生命周期运营。以客户价值为核心，构建系统化客户维护与增长体系。",
      achievements: [
        "负责维护大客户平台产品运营，包括DQ，喜茶，乐乐茶，Something For，Seesaw，T9，久久丫等品牌",
        "制定分层客户维护策略，针对头部连锁品牌的个性化需求，提供定制化增值服务，建立季度走访、月度复盘机制",
        "0-1 搭建客户留存监控体系，实时跟踪系统使用率，大客户年度留存率稳定在 90% 以上",
        "牵头客户续约与增收工作，深度挖掘需求，负责团队每年为公司贡献 50% 左右的营收"
      ]
    },
    {
      role: "SaaS 平台项目经理",
      company: "上海合阔信息技术有限公司",
      period: "2018 - 2023",
      description: "核心项目交付负责人。统筹 SaaS 项目全生命周期管理，主导多个头部餐饮品牌数字化转型，累计覆盖超 5000 家连锁门店。",
      achievements: [
        "喜茶 (Heytea): 2018-2020年常驻深圳，BOH与POS项目依次启动。主导 2000+ 门店系统打通，支撑日峰值 10万+ 订单；(BOM配方的设计研发曾经申请专利)",
        "DQ/棒约翰: 覆盖 1000+ 门店，设计全流程解决方案，库存损耗率降低 2%",
        "久久丫 (2021-2022): 搭建集订单、库存、会员、财务于一体的业务中台，整合 1800+ 门店数据"
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
      role: "AIGC Independent Developer / Social Media Expert",
      company: "Independent Project / Freelance",
      period: "2025.08 - Present",
      description: "Fully embraced the AI era, exploring the application of AIGC technologies in social media content creation and commercial monetization, building highly efficient automated workflows.",
      achievements: [
        "Leveraged Gemini AI for scriptwriting and storyboarding, combined with ComfyUI to build image and video generation workflows, achieving standardized and automated content production.",
        "Focused on secondary creation of game and anime IPs. Reached 5000+ targeted followers on Xiaohongshu and Douyin within a single month from scratch.",
        "Deeply researched AI Prompt Engineering and workflow orchestration, significantly reducing content production costs and improving output efficiency."
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
      description: "Head of core project delivery. Managed full SaaS project lifecycles, leading digital transformation for top catering brands covering 5000+ stores.",
      achievements: [
        "Heytea: Integrated 2000+ stores, handling 100k+ daily orders; (Patented BOM recipe design)",
        "DQ/Papa John's: Covered 1000+ stores, designed full-process solutions, reducing inventory loss by 2%.",
        "Juewei Duck: Built business middle-platform integrating orders, inventory, and finance for 1800+ stores."
      ]
    },
    {
      role: "Senior Software Engineer (SaaS)",
      company: "Shanghai Hekuo Info Tech",
      period: "2016.04 - 2018",
      description: "Core founding member. Led the 0-to-1 underlying architecture construction of the SaaS Cloud Platform.",
      achievements: [
        "Led microservices architecture design, supporting multi-tenancy and high concurrency.",
        "Focused on Order Management System (OMS) and standardized data integration/cleaning processes.",
        "Built unified data interfaces and optimized data processing efficiency via ETL tools."
      ]
    },
    {
      role: "SharePoint Engineer",
      company: "PwC Shanghai",
      period: "2014.01 - 2016.04",
      description: "Focused on improving enterprise digital collaboration. Led SharePoint platform design, deployment, and optimization.",
      achievements: [
        "Responsible for internal SharePoint platform development and maintenance.",
        "Customized Web Parts and process automation; integrated Microsoft 365.",
        "Used Power Automate to simplify cross-department approvals and improve efficiency."
      ]
    },
    {
      role: "Microsoft Web / SharePoint Engineer",
      company: "Cognizant Technology Solutions",
      period: "2011.12 - 2013.12",
      description: "Member of the tech team for digital transformation projects, covering development and IT operations for financial/medical clients.",
      achievements: [
        "Developed custom components using SharePoint Framework (SPFx) for automation.",
        "Built scenario-based solutions like internal approval flows and document portals.",
        "Managed IT operation tickets, established review mechanisms, and drove platform iterations."
      ]
    }
  ];

  const projects = isZh ? {
    cases: [
      {
        brand: 'HEYTEA 喜茶',
        role: '项目负责人 (常驻深圳)',
        desc: '全渠道数字化转型标杆项目。打通线上小程序与线下门店，实现“下单-履约-结算”全链路闭环。',
        highlight: '日订单峰值 10万+'
      },
      {
        brand: 'DQ / 棒约翰',
        role: '供应链项目经理',
        desc: '构建 BOH 门店供应链系统，覆盖采购、库存、物流全流程，显著提升周转效率。',
        highlight: '库存损耗率 ↓2%'
      },
      {
        brand: '久久丫',
        role: '业务中台负责人',
        desc: '搭建集订单、会员、财务于一体的业务中台，整合全国门店数据，支持精细化运营。',
        highlight: '数据孤岛打通'
      },
      {
        brand: '自媒体 IP 矩阵',
        role: '内容主理人',
        desc: '将对动漫与游戏的热爱与大客户运营经验相结合，借助 AI 工具赋能创意想法，在小红书与抖音等平台打造高粘性自媒体 IP 矩阵，实现从兴趣到商业价值的高效转化。',
        highlight: '5000+ 高粘性粉丝'
      }
    ]
  } : {
    cases: [
      {
        brand: 'HEYTEA',
        role: 'Project Lead (Shenzhen)',
        desc: 'Benchmark project for omni-channel transformation. Integrated online mini-apps with offline stores.',
        highlight: '100k+ Peak Daily Orders'
      },
      {
        brand: 'DQ / Papa John\'s',
        role: 'Supply Chain PM',
        desc: 'Built BOH supply chain system covering procurement, inventory, and logistics.',
        highlight: 'Inventory Loss ↓2%'
      },
      {
        brand: 'Juewei Duck',
        role: 'Middle Platform Lead',
        desc: 'Built a business middle platform integrating orders, membership, and finance.',
        highlight: 'Data Silos Eliminated'
      },
      {
        brand: 'Social Media IP',
        role: 'Content Creator',
        desc: 'Combining a passion for anime and games with key account operation experience, I leverage AI tools to empower creative ideas and build high-engagement social media IP matrices on platforms like Xiaohongshu and Douyin, achieving efficient conversion from personal interest to business value.',
        highlight: '5000+ Active Followers'
      }
    ]
  };

  const skills = isZh ? [
    { category: '核心能力', items: ['SaaS 架构设计', '项目交付管理', '大客户运营', '数字化转型咨询', '团队建设', '业务中台搭建'] },
    { category: '技术栈', items: ['微服务架构', 'Java / Go', 'ETL / 数据集成', '.NET / SharePoint', 'React / 前端基础', '高并发处理'] },
    { category: 'AI 与 数字化工具', items: ['LLM 大模型应用', 'Gemini / GPT', '提示词工程 (Prompt)', 'AIGC 自动化', 'ComfyUI / SD', 'AI 智能体开发'] }
  ] : [
    { category: 'Core Competencies', items: ['SaaS Architecture', 'Project Delivery', 'KA Management', 'Digital Transformation', 'Team Building', 'Business Middle-Platform'] },
    { category: 'Tech Stack', items: ['Microservices', 'Java / Go', 'ETL / Data Integration', '.NET / SharePoint', 'React / Frontend', 'High Concurrency'] },
    { category: 'AI & Digital Tools', items: ['LLM Application', 'Gemini / GPT', 'Prompt Engineering', 'AIGC Automation', 'ComfyUI / SD', 'AI Agent Dev'] }
  ];

  const education = isZh ? [
    { school: '上海海事大学', degree: '本科 | 计算机科学与技术', date: '2006.09 - 2009.06' },
    { school: '上海市理工大学附属高中', degree: '高中', date: '2007.09 - 2009.06' }
  ] : [
    { school: 'Shanghai Maritime University', degree: 'Bachelor | Computer Science & Tech', date: '2006.09 - 2009.06' },
    { school: 'High School Affiliated to USST', degree: 'High School', date: '2007.09 - 2009.06' }
  ];

  let md = `# ${hero.name}\n\n`;
  md += `**${hero.title}**\n\n`;
  md += `${hero.contact}\n\n`;
  md += `---\n\n`;
  md += `## ${isZh ? '个人简介' : 'Profile'}\n\n`;
  md += `${hero.desc}\n\n`;

  md += `## ${isZh ? '职业生涯' : 'Career Path'}\n\n`;
  md += `*${isZh ? '十年磨一剑 • 从技术底层到商业顶层的全链路进阶' : '10+ Years • From Technical Foundation to Business Leadership'}*\n\n`;
  experience.forEach(exp => {
    md += `### ${exp.role} | ${exp.company}\n`;
    md += `*${exp.period}*\n\n`;
    md += `${exp.description}\n\n`;
    exp.achievements.forEach(ach => {
      md += `- ${ach}\n`;
    });
    md += `\n`;
  });

  md += `## ${isZh ? '项目案例' : 'Project Cases'}\n\n`;
  projects.cases.forEach(c => {
    md += `### ${c.brand} | ${c.role}\n`;
    md += `**${isZh ? '亮点' : 'Highlight'}: ${c.highlight}**\n\n`;
    md += `${c.desc}\n\n`;
  });

  md += `## ${isZh ? '专业技能' : 'Skills'}\n\n`;
  skills.forEach(skill => {
    md += `**${skill.category}**: ${skill.items.join(', ')}\n\n`;
  });

  md += `## ${isZh ? '教育背景' : 'Education'}\n\n`;
  education.forEach(edu => {
    md += `- **${edu.school}** | ${edu.degree} (${edu.date})\n`;
  });

  md += `\n## ${isZh ? '个人兴趣' : 'Hobbies'}\n\n`;
  if (isZh) {
    md += `- **高达模型 (Gunpla)**: 精密工程的艺术。拼装复杂的机械结构需要极大的耐心和专注，看着数百个零件最终组合成一个整体，能极大锻炼我的细节把控能力。\n`;
    md += `- **足球**: 动态的战略博弈。无论是在球场上还是项目管理中，理解团队协作、即时调整战术以及为了共同目标冲刺，都是胜利的关键。\n`;
    md += `- **短视频制作**: 视觉化的叙事艺术。捕捉瞬间并将其剪辑成引人入胜的故事，这保持了我的创造力，也锻炼了我用最简练的语言传达核心信息的能力。\n`;
  } else {
    md += `- **Gunpla Model**: The art of precision engineering. Assembling complex mechanical structures requires immense patience and focus. It hones my attention to detail and systemic thinking.\n`;
    md += `- **Football**: Strategic teamwork in motion. Whether on the pitch or in project management, understanding collaboration, tactical adjustments, and sprinting for a common goal is key to victory.\n`;
    md += `- **Short Video Creation**: Visual storytelling. Capturing moments and editing them into compelling stories keeps my creativity sharp and trains me to convey core messages concisely.\n`;
  }

  return md;
};

export const generateWord = async (language: Language) => {
  const isZh = language === 'zh';
  const fileName = isZh ? '陈子卓野_简历.docx' : 'Joe_Chen_Resume.docx';

  // Data (Same as Markdown)
  const hero = isZh ? {
    name: '陈子卓野',
    title: '全链路数字化专家 | AIGC 新媒体运营',
    contact: '电话: +86 135 2425 2203 | 邮箱: 313455055@qq.com | 网站: home.kunkun1023.xyz',
    desc: '从代码到底层架构，从单项目交付到大客户运营。我不仅懂技术实现，更懂如何将技术转化为商业价值。曾主导喜茶、DQ、棒约翰等头部品牌的数字化落地。目前正全面拥抱 AI 时代，深度探索 AIGC 与新媒体运营。熟练运用 Gemini、Nano Banana、ComfyUI 等前沿 AI 工具进行图文创作与短视频剪辑，在小红书和抖音打造高粘性个人 IP 矩阵，并独立开发了基于大模型的量化交易助手。'
  } : {
    name: 'Joe.Chen',
    title: 'Digital Transformation Expert | AIGC Social Media',
    contact: 'Phone: +86 135 2425 2203 | Email: 313455055@qq.com | Web: home.kunkun1023.xyz',
    desc: 'From coding to architecture, from project delivery to key account growth. I bridge the gap between technical implementation and business value. Led digital transformation for top brands like Heytea, DQ, and Papa John\'s. Currently fully embracing the AI era, deeply exploring AIGC and social media operations. Proficient in cutting-edge AI tools like Gemini, Nano Banana, and ComfyUI for content creation and short video editing, building a highly engaging personal IP matrix on Xiaohongshu and Douyin, alongside developing LLM-based quantitative trading assistants.'
  };

  const experience = isZh ? [
    {
      role: "AIGC 独立开发者 / 新媒体运营专家",
      company: "独立项目 / 自由职业",
      period: "2025.08 - 至今",
      description: "全面拥抱 AI 时代，探索 AIGC 技术在新媒体内容创作与商业变现中的应用，构建高效的自动化工作流。",
      achievements: [
        "基于 Gemini AI 进行剧本创作与分镜设计，结合 ComfyUI 构建图像与视频生成工作流，实现内容产出的标准化与自动化",
        "专注于游戏与动漫 IP 的二创内容矩阵运营，单月内在小红书与抖音双平台实现从 0 到 1 的突破，累计精准粉丝 5000+",
        "深入研究 AI 提示词工程（Prompt Engineering）与工作流编排，大幅降低内容制作成本，提升产出效率"
      ]
    },
    {
      role: "SaaS 平台大客户总监",
      company: "上海合阔信息技术有限公司",
      period: "2023 - 2025.07",
      description: "聚焦 SaaS 平台上线后大客户全生命周期运营。以客户价值为核心，构建系统化客户维护与增长体系。",
      achievements: [
        "负责维护大客户平台产品运营，包括DQ，喜茶，乐乐茶，Something For，Seesaw，T9，久久丫等品牌",
        "制定分层客户维护策略，针对头部连锁品牌的个性化需求，提供定制化增值服务，建立季度走访、月度复盘机制",
        "0-1 搭建客户留存监控体系，实时跟踪系统使用率，大客户年度留存率稳定在 90% 以上",
        "牵头客户续约与增收工作，深度挖掘需求，负责团队每年为公司贡献 50% 左右的营收"
      ]
    },
    {
      role: "SaaS 平台项目经理",
      company: "上海合阔信息技术有限公司",
      period: "2018 - 2023",
      description: "核心项目交付负责人。统筹 SaaS 项目全生命周期管理，主导多个头部餐饮品牌数字化转型，累计覆盖超 5000 家连锁门店。",
      achievements: [
        "喜茶 (Heytea): 2018-2020年常驻深圳，BOH与POS项目依次启动。主导 2000+ 门店系统打通，支撑日峰值 10万+ 订单；(BOM配方的设计研发曾经申请专利)",
        "DQ/棒约翰: 覆盖 1000+ 门店，设计全流程解决方案，库存损耗率降低 2%",
        "久久丫 (2021-2022): 搭建集订单、库存、会员、财务于一体的业务中台，整合 1800+ 门店数据"
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
      role: "AIGC Independent Developer / Social Media Expert",
      company: "Independent Project / Freelance",
      period: "2025.08 - Present",
      description: "Fully embraced the AI era, exploring the application of AIGC technologies in social media content creation and commercial monetization, building highly efficient automated workflows.",
      achievements: [
        "Leveraged Gemini AI for scriptwriting and storyboarding, combined with ComfyUI to build image and video generation workflows, achieving standardized and automated content production.",
        "Focused on secondary creation of game and anime IPs. Reached 5000+ targeted followers on Xiaohongshu and Douyin within a single month from scratch.",
        "Deeply researched AI Prompt Engineering and workflow orchestration, significantly reducing content production costs and improving output efficiency."
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
      description: "Head of core project delivery. Managed full SaaS project lifecycles, leading digital transformation for top catering brands covering 5000+ stores.",
      achievements: [
        "Heytea: Integrated 2000+ stores, handling 100k+ daily orders; (Patented BOM recipe design)",
        "DQ/Papa John's: Covered 1000+ stores, designed full-process solutions, reducing inventory loss by 2%.",
        "Juewei Duck: Built business middle-platform integrating orders, inventory, and finance for 1800+ stores."
      ]
    },
    {
      role: "Senior Software Engineer (SaaS)",
      company: "Shanghai Hekuo Info Tech",
      period: "2016.04 - 2018",
      description: "Core founding member. Led the 0-to-1 underlying architecture construction of the SaaS Cloud Platform.",
      achievements: [
        "Led microservices architecture design, supporting multi-tenancy and high concurrency.",
        "Focused on Order Management System (OMS) and standardized data integration/cleaning processes.",
        "Built unified data interfaces and optimized data processing efficiency via ETL tools."
      ]
    },
    {
      role: "SharePoint Engineer",
      company: "PwC Shanghai",
      period: "2014.01 - 2016.04",
      description: "Focused on improving enterprise digital collaboration. Led SharePoint platform design, deployment, and optimization.",
      achievements: [
        "Responsible for internal SharePoint platform development and maintenance.",
        "Customized Web Parts and process automation; integrated Microsoft 365.",
        "Used Power Automate to simplify cross-department approvals and improve efficiency."
      ]
    },
    {
      role: "Microsoft Web / SharePoint Engineer",
      company: "Cognizant Technology Solutions",
      period: "2011.12 - 2013.12",
      description: "Member of the tech team for digital transformation projects, covering development and IT operations for financial/medical clients.",
      achievements: [
        "Developed custom components using SharePoint Framework (SPFx) for automation.",
        "Built scenario-based solutions like internal approval flows and document portals.",
        "Managed IT operation tickets, established review mechanisms, and drove platform iterations."
      ]
    }
  ];

  const skills = isZh ? [
    { category: '核心能力', items: ['SaaS 架构设计', '项目交付管理', '大客户运营', '数字化转型咨询', '团队建设', '业务中台搭建'] },
    { category: '技术栈', items: ['微服务架构', 'Java / Go', 'ETL / 数据集成', '.NET / SharePoint', 'React / 前端基础', '高并发处理'] },
    { category: 'AI 与 数字化工具', items: ['LLM 大模型应用', 'Gemini / GPT', '提示词工程 (Prompt)', 'AIGC 自动化', 'ComfyUI / SD', 'AI 智能体开发'] }
  ] : [
    { category: 'Core Competencies', items: ['SaaS Architecture', 'Project Delivery', 'KA Management', 'Digital Transformation', 'Team Building', 'Business Middle-Platform'] },
    { category: 'Tech Stack', items: ['Microservices', 'Java / Go', 'ETL / Data Integration', '.NET / SharePoint', 'React / Frontend', 'High Concurrency'] },
    { category: 'AI & Digital Tools', items: ['LLM Application', 'Gemini / GPT', 'Prompt Engineering', 'AIGC Automation', 'ComfyUI / SD', 'AI Agent Dev'] }
  ];

  const education = isZh ? [
    { school: '上海海事大学', degree: '本科 | 计算机科学与技术', date: '2006.09 - 2009.06' },
    { school: '上海市理工大学附属高中', degree: '高中', date: '2007.09 - 2009.06' }
  ] : [
    { school: 'Shanghai Maritime University', degree: 'Bachelor | Computer Science & Tech', date: '2006.09 - 2009.06' },
    { school: 'High School Affiliated to USST', degree: 'High School', date: '2007.09 - 2009.06' }
  ];

  const hobbies = isZh ? [
    { title: '高达模型 (Gunpla)', desc: '精密工程的艺术。拼装复杂的机械结构需要极大的耐心和专注，看着数百个零件最终组合成一个整体，能极大锻炼我的细节把控能力。' },
    { title: '足球', desc: '动态的战略博弈。无论是在球场上还是项目管理中，理解团队协作、即时调整战术以及为了共同目标冲刺，都是胜利的关键。' },
    { title: '短视频制作', desc: '视觉化的叙事艺术。捕捉瞬间并将其剪辑成引人入胜的故事，这保持了我的创造力，也锻炼了我用最简练的语言传达核心信息的能力。' }
  ] : [
    { title: 'Gunpla Model', desc: 'The art of precision engineering. Assembling complex mechanical structures requires immense patience and focus. It hones my attention to detail and systemic thinking.' },
    { title: 'Football', desc: 'Strategic teamwork in motion. Whether on the pitch or in project management, understanding collaboration, tactical adjustments, and sprinting for a common goal is key to victory.' },
    { title: 'Short Video Creation', desc: 'Visual storytelling. Capturing moments and editing them into compelling stories keeps my creativity sharp and trains me to convey core messages concisely.' }
  ];

  // Helper to create a section title with a border bottom
  const createSectionTitle = (text: string) => {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 400, after: 200 },
      border: {
        bottom: {
          color: "333333",
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
          new Paragraph({
            text: hero.name,
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.LEFT,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: hero.title,
                bold: true,
                color: "666666",
                size: 24,
              }),
            ],
            spacing: { after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: hero.contact,
                size: 20,
                color: "333333",
              }),
            ],
            spacing: { after: 400 },
          }),

          // Profile
          createSectionTitle(isZh ? "个人简介" : "Profile"),
          new Paragraph({
            text: hero.desc,
            spacing: { after: 200 },
          }),

          // Career Path
          createSectionTitle(isZh ? "职业生涯" : "Career Path"),
          new Paragraph({
            children: [
              new TextRun({
                text: isZh ? "十年磨一剑 • 从技术底层到商业顶层的全链路进阶" : "10+ Years • From Technical Foundation to Business Leadership",
                italics: true,
                color: "666666",
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
                children: [
                  new TextRun({ text: `${hobby.title}: `, bold: true }),
                  new TextRun({ text: hobby.desc }),
                ],
                spacing: { after: 100 },
              })
          ),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, fileName);
};

export const downloadFile = (content: string, fileName: string, contentType: string) => {
  const a = document.createElement('a');
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);
};
