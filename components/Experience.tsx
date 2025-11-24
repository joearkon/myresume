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
          id: 1,
          role: "SaaS 平台大客户总监",
          company: "上海合阔信息技术有限公司",
          period: "2023 - 2025.07 (后期)",
          description: "聚焦 SaaS 平台上线后大客户全生命周期运营。以客户价值为核心，构建系统化客户维护与增长体系。",
          achievements: [
            "负责维护大客户平台产品运营，包括DQ，喜茶，乐乐茶，Something For，Seesaw，T9，久久丫等品牌",
            "制定分层客户维护策略，针对头部连锁品牌的个性化需求，提供定制化增值服务，建立季度走访、月度复盘机制",
            "0-1 搭建客户留存监控体系，实时跟踪系统使用率，大客户年度留存率稳定在 90% 以上",
            "牵头客户续约与增收工作，深度挖掘需求，负责团队每年为公司贡献 50% 左右的营收"
          ],
          tags: ["客户增长", "CRM体系", "商业价值", "团队管理"],
          color: "border-red-500 dark:border-gunpla-red",
          isPromoted: true
        },
        {
          id: 2,
          role: "SaaS 平台项目经理",
          company: "上海合阔信息技术有限公司",
          period: "2018 - 2023 (中期)",
          description: "核心项目交付负责人。统筹 SaaS 项目全生命周期管理，主导多个头部餐饮品牌数字化转型，累计覆盖超 5000 家连锁门店。",
          achievements: [
            "喜茶 (Heytea): 2018-2020年常驻深圳，BOH与POS项目依次启动。主导 2000+ 门店系统打通，支撑日峰值 10万+ 订单；(BOM配方的设计研发曾经申请专利)",
            "DQ/棒约翰: 覆盖 1000+ 门店，设计全流程解决方案，库存损耗率降低 2%",
            "久久丫 (2021-2022): 搭建集订单、库存、会员、财务于一体的业务中台，整合 1800+ 门店数据"
          ],
          tags: ["PMP", "项目交付", "高并发架构", "专利研发"],
          color: "border-blue-500 dark:border-gunpla-blue",
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
          color: "border-yellow-500 dark:border-gunpla-yellow",
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
          color: "border-red-500 dark:border-gunpla-red",
          isPromoted: true
        },
        {
          id: 2,
          role: "SaaS Project Manager",
          company: "Shanghai Hekuo Info Tech",
          period: "2018 - 2023 (Mid Stage)",
          description: "Head of core project delivery. Managed full SaaS project lifecycles, leading digital transformation for top catering brands covering 5000+ stores.",
          achievements: [
            "Heytea: Stationed in Shenzhen (2018-2020). Launched BOH & POS projects sequentially. Integrated 2000+ stores, handling 100k+ daily orders; (Patented BOM recipe design)",
            "DQ/Papa John's: Covered 1000+ stores, designed full-process solutions, reducing inventory loss by 2%.",
            "Juewei Duck (2021-2022): Built business middle-platform integrating orders, inventory, and finance for 1800+ stores."
          ],
          tags: ["PMP", "Delivery", "High Concurrency", "Patents"],
          color: "border-blue-500 dark:border-gunpla-blue",
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
          color: "border-yellow-500 dark:border-gunpla-yellow",
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
    <section id="experience" className="py-20 bg-slate-100 dark:bg-slate-900/50 relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300">
            <span className="text-gunpla-blue">{language === 'zh' ? '职业' : 'Work'}</span> {language === 'zh' ? '生涯' : 'Experience'}
          </h2>
          <div className="w-24 h-1 bg-gunpla-red mx-auto"></div>
          <p className="mt-4 text-slate-600 dark:text-gray-400 transition-colors duration-300">
            {language === 'zh' 
              ? '十年磨一剑 • 从技术底层到商业顶层的全链路进阶'
              : '10+ Years • From Technical Foundation to Business Leadership'}
          </p>
        </div>

        <div className="relative space-y-8">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-gray-700 transform md:-translate-x-1/2 transition-colors duration-300"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex flex-col md:flex-row items-stretch ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Dot on timeline */}
              <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 transform -translate-x-1/2 z-10 mt-6 ${exp.color.replace('border', 'border')} transition-colors duration-300`}></div>

              {/* Content Wrapper */}
              <div className="ml-12 md:ml-0 md:w-1/2 p-4">
                 <div className={`group relative bg-white dark:bg-slate-800 p-6 rounded-lg border-l-4 ${exp.color} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full`}>
                    
                    {/* Connecting logic for promoted roles at same company */}
                    {exp.isPromoted && (
                      <div className="absolute -top-3 right-4 bg-slate-100 dark:bg-slate-700 text-xs text-slate-500 dark:text-gray-300 px-2 py-1 rounded border border-slate-200 dark:border-slate-600 transition-colors duration-300">
                        {language === 'zh' ? `${exp.company} - 内部晋升` : `Promoted Internally`}
                      </div>
                    )}

                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-1 group-hover:text-gunpla-blue transition-colors">{exp.role}</h3>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                      <span className="text-lg text-slate-600 dark:text-gray-400 font-tech transition-colors">{exp.company}</span>
                      <span className="text-sm text-slate-500 dark:text-gray-500 bg-slate-50 dark:bg-slate-900 px-2 py-1 rounded border border-slate-200 dark:border-gray-700 w-fit transition-colors">{exp.period}</span>
                    </div>
                    
                    <p className="text-slate-600 dark:text-gray-300 mb-4 leading-relaxed text-justify text-sm transition-colors">
                      {exp.description}
                    </p>

                    {/* Achievements List */}
                    {exp.achievements && (
                      <ul className="mb-4 space-y-2">
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-600 dark:text-gray-400 transition-colors">
                            <span className="mr-2 text-gunpla-blue mt-1">▹</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {exp.tags.map(tag => (
                        <span key={tag} className="text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-gray-300 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-600 transition-colors">
                          #{tag}
                        </span>
                      ))}
                    </div>
                 </div>
              </div>
              
              {/* Empty side for spacing */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;