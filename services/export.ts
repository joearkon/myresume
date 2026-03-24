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
  let avatarImage = null;
  if (avatarUrl) {
    try {
      // Use a CORS proxy to bypass potential restrictions in the browser environment
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(avatarUrl)}`;
      const response = await fetch(proxyUrl);
      const buffer = await response.arrayBuffer();
      avatarImage = buffer;
    } catch (e) {
      console.error("Failed to fetch avatar image", e);
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

  const projects = {
    metrics: [
      { value: '90%', label: '大客户年度留存' },
      { value: '10W+', label: '日处理订单峰值' },
      { value: '50%', label: '团队营收贡献' }
    ],
    brands: ["喜茶 (HEYTEA)", "久久丫 / 留夫鸭", "DQ (Dairy Queen)", "Peets (皮爷咖啡)", "T9 Tea", "Linlee (邻里)", "谭仔 (TamJai)", "Something For", "果呀呀"],
    cases: [
      {
        brand: 'HEYTEA 喜茶',
        role: '项目负责人 (2018 - 2020 | 常驻深圳)',
        desc: '全渠道数字化转型标杆项目。打通线上小程序与线下门店，HiPOS 系统覆盖全国 500+ 门店（2020年数据，2024年已突破 2000 家），实现“下单-履约-结算”全链路闭环。',
        highlight: '日订单峰值 10万+',
        coreWork: [
          {
            title: '大客户全生命周期项目管理',
            items: [
              '作为喜茶核心项目对接人，负责 HiPOS 系统从 0 到 1 落地、需求沟通、进度管控、验收全流程。',
              '主导需求评审、SOW 签署、费用确认、账单核对，管理月度 CR 需求与项目款项，确保回款与验收闭环。',
              '分阶段上线推广：制定月度上线排期表，统筹全国门店上线，覆盖一线城市核心店→二线城市→下沉市场。'
            ]
          },
          {
            title: '连锁门店数字化系统落地',
            items: [
              '负责POS 点单、支付、小票、杯贴、日结、外卖接单全流程功能落地，提升门店点单效率。',
              '推动闪结、一键重印、订单备注、渠道区分等效率功能上线，降低门店操作失误。'
            ]
          },
          {
            title: '跨系统全域对接与数据打通',
            items: [
              '负责HiPOS 与小程序、会员系统、支付系统、BOH 后厨、EHR 人事、电子发票、物业全接口对接。',
              '统一订单、商品、会员、支付、日结数据口径，支撑财务对账与运营分析。'
            ]
          },
          {
            title: 'BOH 供应链运营中台全流程管理',
            items: [
              '负责 BOH 供应链项目交付。对接全国 1000+ 门店需求，设计库存管理、采购补货、物流追踪全流程解决方案。',
              '完成 BOH 供应链与全渠道 POS 系统打通，支撑 2000+ 门店及线上多渠道订单一体化处理。',
              '实现“下单-履约-结算”全链路数字化，峰值订单处理能力达 10万+ 笔/日。'
            ]
          },
          {
            title: '核心功能研发与专利贡献',
            items: [
              '主导 BOM 配方设计与研发，该项技术曾获得相关专利。',
              '负责核心 OMS 模块开发，设计标准化数据整合与清洗流程，解决订单来源分散痛点。'
            ]
          },
          {
            title: '大客户运营与持续优化',
            items: [
              '监控门店收银成功率、订单处理效率、系统稳定性、异常订单占比；建立日报/周报/月报机制，输出运营数据、问题分析、优化建议；制定异常处理流程（小票异常、支付失败、订单卡顿等问题 10 分钟响应、2 小时闭环）。',
              '门店报修与问题闭环：建立全国门店报修体系，接收门店报修需求，分类分级处理；输出《喜茶 HIPOS 门店报修汇总表》，跟踪问题处理进度、解决率、满意度；定期复盘高频问题，推动研发优化，降低重复报修率。',
              '客户拜访与需求收集：定期拜访喜茶总部营运、财务、IT 部门，沟通系统使用情况、运营痛点、优化需求；实地走访一线门店，了解店长/收银员操作体验，收集改进建议；输出《客户拜访报告》，推动需求落地，提升客户满意度。'
            ]
          },
          {
            title: '项目验收与回款跟进',
            items: [
              '多阶段验收推进：按月度完成需求验收、功能验收、上线验收、运维验收；整理验收材料（测试报告、上线清单、运营数据、用户反馈），完成签字确认。',
              '回款全流程跟进：对接喜茶财务部门，按合同节点推进阶段性回款；解决回款过程中的疑问（验收证明、发票开具、流程审批），确保款项按期到账。'
            ]
          }
        ]
      },
      {
        brand: '久久丫 / 留夫鸭',
        role: '业务中台负责人 (2021 - 2022 | 常驻上海)',
        desc: '我全程主导久久丫、留夫鸭数字化中台一期从 0 到 1 落地，覆盖需求调研→蓝图设计→系统对接→功能落地→培训赋能→上线验收→全国推广全流程。',
        highlight: '从0到1全流程主导',
        coreWork: [
          {
            title: '项目全流程主导（从 0 到 1 总负责）',
            items: [
              '前期调研与蓝图规划：牵头门店、营运、财务、新零售、IT 多部门调研，梳理 13 个核心业务流程；输出业务现状分析、系统蓝图方案、接口集成方案，完成蓝图汇报与确认；制定项目实施计划、里程碑节点、风险管控方案，确保方向一致。',
              '系统落地与功能实现：主导商品、库存、订单、价格、对账、账号六大核心模块落地；完成 HiPOS 收银、BOH 库存、全渠道交易、移动大掌柜四大系统上线；负责需求评审、功能验收、UAT 测试、问题闭环，保障系统符合业务实际。',
              '上线验收与交付：制定上线切换方案、应急预案、数据迁移方案；完成 5 家试点门店上线验证、首次月结、系统终验；输出操作手册、培训文档、验收报告，完成项目正式交付。',
              '全国规模化推广：搭建总部→分部→门店三级推广组织，制定 6 批次全国推广计划；统筹五大区域，覆盖 3000+ 门店；建立推广评审机制、周复盘机制、问题快速响应机制，保障推广效率。'
            ]
          },
          {
            title: '核心系统对接落地',
            items: [
              '外卖平台对接落地：负责美团、饿了么全渠道对接，完成门店、商品、团单映射；实现订单自动接单、语音播报、小票自动打印、渠道统一管理；落地外卖菜单中台统一管控、价格同步、库存共享、自动沽清。',
              '第三方系统集成对接：对接 SAP ERP（商品、库存、订货、退货、盘点、营收数据双向同步）；对接云徙会员（会员认证、优惠券核销、积分/储值支付）；对接自研小程序（菜单、库存、订单、支付、履约一体化）；对接聚合支付、物流配送、电子发票，实现全链路自动化。',
              '数据与报表对接：搭建全渠道数据口径，实现 POS、外卖、小程序数据统一；落地门店实时报表、营收报表、库存报表、对账报表自动化；完成异常电子小票修复机制，保障数据准确可追溯。'
            ]
          },
          {
            title: '关键业务功能落地',
            items: [
              '全渠道商品 & 价格体系落地：建立统一商品库、多规格管理、BOM 配方、套餐组合标准化；落地价格中心、渠道价、门店价、菜单分组、新门店快速复制；实现美团/饿了么/POS/小程序商品通、价格通、库存通。',
              '智能库存 & 订货体系落地：落地订货→收货→退货→报废→调拨→盘点全流程闭环；实现日盘/月盘、移动盘点、库存实时扣减、自动预警；搭建建议订货量模型，按销量、库存、损耗自动计算订货量。',
              '全渠道交易 & 履约落地：统一堂食、外卖、自提、小程序订单，实现一站式收银；落地促销引擎、满减、折扣、会员价、平台券统一核销；实现自动日结、财务自动对账、加盟商分账自动化。'
            ]
          },
          {
            title: '培训方案与赋能落地',
            items: [
              '分层培训体系设计：制定总部→分部→门店三级培训方案，覆盖运维、运营、店长、收银员；输出操作手册、培训 PPT、教学视频、FAQ 全套资料；设计场景化培训（收银操作、外卖接单、库存管理、日结合规）。',
              '培训执行与赋能：组织集中培训、现场带教、远程指导，确保全员会用；建立考核机制、答疑群、紧急支持通道，降低上线阻力；知识转移给分部团队，实现区域自主运维、自主培训。'
            ]
          },
          {
            title: '项目管理与跨部门协同',
            items: [
              '项目管控：主导周例会、进度跟踪、风险预警、问题闭环、里程碑验收；协调顶誉营运、财务、新零售、IT、加盟商与合阔产研、实施团队；管控需求范围、变更流程、交付质量、上线节奏。',
              '运营规则落地：制定门店运营 SOP、权限管理、业务流程、审批规则；建立异常处理机制、数据核对机制、月结机制；保障系统上线后可运行、可管理、可迭代。'
            ]
          },
          {
            title: '上线后运营拜访与客户成功（大客户运营能力）',
            items: [
              '总部/区域定期拜访：主动上门拜访顶誉总部、区域负责人，沟通系统使用情况；收集需求、反馈体验、协调优化、提升满意度。',
              '门店实地巡检与辅导：下门店看实操、查流程、纠错误、提效率；解决订货不准、盘点复杂、对账麻烦、操作繁琐等真实痛点。',
              '运营指标复盘：定期输出订货准确率、盘点完成率、库存差异率、问题关闭率；用数据证明系统价值，强化客户认可。'
            ]
          },
          {
            title: '验收与回款跟进（商务 + 项目闭环能力）',
            items: [
              '项目验收材料准备：整理实施报告、测试报告、培训记录、上线清单、功能清单；协助完成验收流程、签字盖章、阶段验收。',
              '回款全流程跟进：按合同节点对接财务、销管、总部管理层；推动验收确认→开票→回款全闭环；确保项目款项按期到账，无拖欠、无争议。',
              '售后与续费基础：建立良好客户关系，为后续二期增补、三期拓展、续费打下基础。'
            ]
          }
        ]
      },
      {
        brand: '自媒体 IP 矩阵',
        role: '内容主理人',
        desc: '独立搭建抖音 + 小红书双平台二次元动漫 IP 矩阵，依托 AIGC 实现1 个月高效涨粉 5000 + 高粘性垂直粉丝，构建从角色原创设计、剧本分镜到 AI 视频生成的全链路标准化工作流，实现内容规模化、低成本、高效率持续产出。',
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
          },
          {
            title: '账号冷启动与增长',
            items: [
              '通过精准定位、系列化内容、高频互动完成账号冷启动，单月涨粉 5000+，粉丝粘性、互动率显著高于行业平均。'
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
                            type: "jpg",
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
          createSectionTitle(isZh ? "明星案例与项目成就" : "Star Cases & Project Achievements"),
          
          // Metrics in Word
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
                children: projects.metrics.map(m => new TableCell({
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [
                        new TextRun({ text: m.value, bold: true, size: 28, color: "3b82f6" }),
                      ]
                    }),
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [
                        new TextRun({ text: m.label, size: 16, color: "666666" }),
                      ]
                    })
                  ]
                }))
              })
            ]
          }),

          // Brand Wall in Word
          new Paragraph({
            children: [
              new TextRun({ text: isZh ? "合作客户: " : "Cooperated Brands: ", bold: true, size: 18, color: "666666" }),
              new TextRun({ text: projects.brands.join(" | "), size: 18, color: "666666" }),
            ],
            spacing: { before: 200, after: 200 },
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
