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
          company: "独立项目 / 自由职业",
          period: "2025.08 - 至今",
          description: "全面拥抱 AI 时代，探索 AIGC 技术在内容创作与商业变现中的应用，构建高效的自动化工作流。",
          achievements: [
            "独立搭建抖音 + 小红书双平台二次元动漫 IP 矩阵，依托 AIGC 实现 1 个月高效涨粉 5000 + 高粘性垂直粉丝",
            "构建从角色原创设计、剧本分镜到 AI 视频生成的全链路标准化工作流，实现内容规模化、低成本、高效率产出",
            "深入研究 AI 提示词工程（Prompt Engineering）与 ComfyUI 工作流编排，内容生产效率提升 80%"
          ],
          tags: ["AIGC", "ComfyUI", "Gemini AI", "内容运营"],
          color: "border-purple-500 dark:border-purple-400",
          isPromoted: false
        },
        {
          id: 1,
          role: "SaaS 平台大客户总监",
          company: "上海合阔信息技术有限公司",
          period: "2023 - 2025.07 (后期)",
          description: "聚焦 SaaS 平台上线后大客户全生命周期运营。以客户价值为核心，构建系统化客户维护与增长体系。",
          achievements: [
            "负责维护大客户平台产品运营，包括 DQ，喜茶，乐乐茶，Something For，Seesaw，T9，久久丫等品牌",
            "制定分层客户维护策略，针对头部连锁品牌的个性化需求，提供定制化增值服务，建立季度走访、月度复盘机制",
            "0-1 搭建客户留存监控体系，实时跟踪系统使用率，大客户年度留存率稳定在 90% 以上",
            "牵头客户续约与增收工作，深度挖掘需求，负责团队每年为公司贡献 50% 左右的营收"
          ],
          tags: ["客户增长", "CRM体系", "商业价值", "团队管理"],
          color: "border-red-500 dark:border-red-400",
          isPromoted: true
        },
        {
          id: 2,
          role: "SaaS 平台项目经理",
          company: "上海合阔信息技术有限公司",
          period: "2018 - 2023 (中期)",
          description: "核心项目交付负责人。统筹 SaaS 项目全生命周期管理，从需求对接、方案设计到落地上线、验收交付，主导多个头部餐饮品牌数字化转型项目，累计覆盖超 5000 家连锁门店。",
          achievements: [
            "上海适达餐饮集团 (DQ 冰雪皇后、PPJ 棒约翰): 负责 BOH 门店供应链项目交付。对接全国 1000+ 门店需求，设计库存管理、采购补货、物流追踪全流程解决方案，上线后供应链周转效率明显提升，库存损耗率降低 2%。",
            "深圳喜茶 (HEYTEA): 2018-2020年常驻深圳总部，主导核心项目交付。完成 BOH 供应链与全渠道 POS 系统打通，支撑 2000+ 门店及线上多渠道订单一体化处理，实现“下单-履约-结算”全链路数字化，峰值订单处理能力达 10万+ 笔/日；(BOM配方设计研发曾获专利)",
            "浙江久久丫食品: 2021-2022年常驻客户现场，负责业务中台项目。搭建集订单、库存、会员、财务于一体的业务中台，整合全国 1800+ 门店数据，打破数据孤岛，为品牌精细化运营与业务经营决策提供有力支撑。",
            "交付管理：统筹 SaaS 项目全生命周期管理，负责进度、风险及质量控制，确保多个大型项目按期保质交付，获得客户高度认可。"
          ],
          tags: ["PMP", "项目交付", "全生命周期管理", "专利研发"],
          color: "border-blue-500 dark:border-blue-400",
          isPromoted: true
        },
        {
          id: 3,
          role: "SaaS 云平台高级软件开发",
          company: "上海合阔信息技术有限公司",
          period: "2016.04 - 2018 (早期)",
          description: "初创阶段核心成员。牵头 SaaS 餐饮云平台从 0 到 1 的底层构建，奠定平台技术基石。",
          achievements: [
            "主导平台底层架构设计，采用微服务架构，支撑多租户隔离与高并发处理",
            "聚焦订单 OMS 核心模块开发，设计标准化数据整合与清洗流程，解决订单来源分散痛点",
            "打造统一数据接口体系，覆盖订单、库存、营收等核心业务维度"
          ],
          tags: ["微服务", "Java/Go", "ETL", "底层架构"],
          color: "border-yellow-500 dark:border-yellow-400",
          isPromoted: false
        },
        {
          id: 4,
          role: "SharePoint 工程师",
          company: "PwC 上海技术有限公司",
          period: "2014.01 - 2016.04",
          description: "聚焦企业数字化协作效率提升。主导 SharePoint 平台的设计、部署与优化，支撑普华永道内部信息管理需求。",
          achievements: [
            "负责公司内部 SharePoint 平台软件的开发与维护",
            "定制开发 Web 部件与流程自动化配置，集成 Microsoft 365",
            "利用 Power Automate 简化跨部门审批流程，提升文档协作效率"
          ],
          tags: ["SharePoint", "C#/.NET", "Power Automate", "企业协作"],
          color: "border-slate-500 dark:border-gray-500",
          isPromoted: false
        },
        {
          id: 5,
          role: "微软 Web 技术 / SharePoint 工程师",
          company: "高知特信息技术（上海）有限公司",
          period: "2011.12 - 2013.12",
          description: "作为技术组成员参与企业数字化转型项目，兼顾开发与运维，服务金融医疗行业客户。",
          achievements: [
            "采用 SharePoint Framework (SPFx) 开发自定义组件，实现业务流程自动化",
            "搭建客户内部审批流、文档协作门户等场景化解决方案",
            "负责技术运维工单处理与复盘，输出分析报告推动平台迭代"
          ],
          tags: ["Web开发", "SPFx", "IT运维", "数字化转型"],
          color: "border-purple-500 dark:border-purple-400",
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
          description: "Fully embraced the AI era, exploring the application of AIGC technologies in content creation and commercial monetization, building highly efficient automated workflows.",
          achievements: [
            "Independently built a 2D anime IP matrix across Douyin and Xiaohongshu, gaining 5000+ vertical followers in 1 month via AIGC.",
            "Constructed a full-link standardized workflow from original character design and script to AI video generation, achieving scalable and efficient output.",
            "Deeply researched AI Prompt Engineering and ComfyUI workflow orchestration, increasing content production efficiency by 80%."
          ],
          tags: ["AIGC", "ComfyUI", "Gemini AI", "Content Operation"],
          color: "border-purple-500 dark:border-purple-400",
          isPromoted: false
        },
        {
          id: 1,
          role: "Key Account Director (SaaS)",
          company: "Shanghai Hekuo Info Tech",
          period: "2023 - 2025.07 (Late Stage)",
          description: "Focused on full lifecycle management of key accounts post-launch. Built a systematic customer maintenance and growth system centered on customer value.",
          achievements: [
            "Managed platform operations for brands including DQ, Heytea, Lelecha, Something For, Seesaw, T9, Juewei Duck.",
            "Developed tiered customer maintenance strategies and provided customized value-added services.",
            "Built customer retention monitoring system from 0-1, maintaining 90%+ retention for key accounts.",
            "Led renewal and upselling, team contributed ~50% of company revenue annually."
          ],
          tags: ["Customer Growth", "CRM", "Business Value", "Management"],
          color: "border-red-500 dark:border-red-400",
          isPromoted: true
        },
        {
          id: 2,
          role: "SaaS Project Manager",
          company: "Shanghai Hekuo Info Tech",
          period: "2018 - 2023 (Mid Stage)",
          description: "Head of core project delivery. Managed full SaaS project lifecycles, from requirement alignment and solution design to go-live and acceptance, leading digital transformation for top catering brands covering 5000+ stores.",
          achievements: [
            "Shanghai Shida Catering Group (DQ, Papa John's): Responsible for BOH store supply chain project delivery. Aligned requirements for 1000+ stores nationwide, designed full-process solutions for inventory, procurement, and logistics, reducing inventory loss by 2%.",
            "Shenzhen HEYTEA: Stationed in Shenzhen HQ (2018-2020), led core project delivery. Integrated BOH supply chain with omni-channel POS, supporting integrated order processing for 2000+ stores and online channels, with peak daily capacity of 100k+ orders; (Patented BOM recipe design).",
            "Zhejiang Juewei Duck: Stationed on-site (2021-2022), responsible for business middle-platform project. Built an integrated platform for orders, inventory, membership, and finance, consolidating data for 1800+ stores to support refined operations and business decisions.",
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
          period: "2016.04 - 2018 (Early Stage)",
          description: "Core founding member. Led the 0-to-1 underlying architecture construction of the SaaS Cloud Platform.",
          achievements: [
            "Led microservices architecture design, supporting multi-tenancy and high concurrency.",
            "Focused on Order Management System (OMS) and standardized data integration/cleaning processes.",
            "Built unified data interfaces and optimized data processing efficiency via ETL tools."
          ],
          tags: ["Microservices", "Java/Go", "ETL", "Architecture"],
          color: "border-yellow-500 dark:border-yellow-400",
          isPromoted: false
        },
        {
          id: 4,
          role: "SharePoint Engineer",
          company: "PwC Shanghai",
          period: "2014.01 - 2016.04",
          description: "Focused on improving enterprise digital collaboration. Led SharePoint platform design, deployment, and optimization.",
          achievements: [
            "Responsible for internal SharePoint platform development and maintenance.",
            "Customized Web Parts and process automation; integrated Microsoft 365.",
            "Used Power Automate to simplify cross-department approvals and improve efficiency."
          ],
          tags: ["SharePoint", "C#/.NET", "Power Automate", "Collaboration"],
          color: "border-slate-500 dark:border-gray-500",
          isPromoted: false
        },
        {
          id: 5,
          role: "Microsoft Web / SharePoint Engineer",
          company: "Cognizant Technology Solutions",
          period: "2011.12 - 2013.12",
          description: "Member of the tech team for digital transformation projects, covering development and IT operations for financial/medical clients.",
          achievements: [
            "Developed custom components using SharePoint Framework (SPFx) for automation.",
            "Built scenario-based solutions like internal approval flows and document portals.",
            "Managed IT operation tickets, established review mechanisms, and drove platform iterations."
          ],
          tags: ["Web Dev", "SPFx", "IT Ops", "Digital Trans"],
          color: "border-purple-500 dark:border-purple-400",
          isPromoted: false
        }
      ];
    }
  };

  const experiences = getExperiences(language);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900/50 relative transition-colors duration-500 print:py-4">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-16 text-center print:mb-6 print:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300 print:text-xl print:mb-1">
            <span className="text-blue-800 dark:text-blue-400">{language === 'zh' ? '职业' : 'Work'}</span> {language === 'zh' ? '生涯' : 'Experience'}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-gray-400 transition-colors duration-300 print:mt-0 print:text-[10px] print:text-slate-500">
            {language === 'zh' 
              ? '十年磨一剑 • 从技术底层到商业顶层的全链路进阶'
              : '10+ Years • From Technical Foundation to Business Leadership'}
          </p>
        </div>

        <div className="space-y-12 print:space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="group relative border-b border-slate-200 dark:border-slate-800 pb-12 last:border-0 last:pb-0 print:pb-6 print:break-inside-avoid">
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 gap-2 print:mb-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors print:text-base">
                  {exp.role}
                </h3>
                <span className="text-sm font-medium text-slate-500 dark:text-gray-400 whitespace-nowrap print:text-[10px]">
                  {exp.period}
                </span>
              </div>
              
              <div className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4 print:text-xs print:mb-1">
                {exp.company}
                {exp.isPromoted && (
                  <span className="ml-3 text-xs font-normal bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-gray-400 px-2 py-1 rounded print:px-1.5 print:py-0.5 print:text-[9px]">
                    {language === 'zh' ? '内部晋升' : 'Promoted Internally'}
                  </span>
                )}
              </div>
              
              <p className="text-slate-600 dark:text-gray-300 mb-4 leading-relaxed text-justify print:text-[10px] print:mb-2 print:leading-normal">
                {exp.description}
              </p>

              {exp.achievements && (
                <ul className="mb-6 space-y-2 list-disc list-inside text-slate-600 dark:text-gray-400 marker:text-blue-800 dark:marker:text-blue-400 print:mb-3 print:space-y-1 print:text-[10px]">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="leading-relaxed print:leading-normal">
                      <span className="-ml-2">{ach}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 print:gap-1.5">
                {exp.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-gray-400 px-3 py-1 rounded border border-slate-200 dark:border-slate-700 print:px-2 print:py-0.5 print:text-[9px]">
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