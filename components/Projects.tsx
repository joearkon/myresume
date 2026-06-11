import React from 'react';
import { Language } from '../App';

interface ProjectsProps {
  language: Language;
}

const ProjectCard: React.FC<{ item: any; language: Language }> = ({ item, language }) => (
  <div className={`group border-b border-slate-100 dark:border-slate-800 pb-6 last:border-0 md:last:border-b print:pb-2 print:border-gray-100 print:break-inside-avoid ${item.colSpan ? 'md:col-span-2' : ''}`}>
    <div className="flex justify-between items-start mb-1.5 print:mb-1">
      <h4 className="text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors print:text-base print:tracking-tight">
        {item.brand}
      </h4>
      <span className="text-[9px] font-bold text-blue-800 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded uppercase print:bg-transparent print:border print:border-blue-100 print:text-[8pt]">
        {item.highlight}
      </span>
    </div>
    
    <div className="text-[10px] font-bold text-slate-400 dark:text-gray-500 mb-1.5 uppercase tracking-normal print:text-[8.5pt] print:mb-0.5 print:tracking-normal">
        {item.role}
    </div>

    {item.desc && (
      <p className="text-[13px] text-slate-600 dark:text-gray-300 mb-3 leading-snug line-clamp-3 group-hover:line-clamp-none transition-all print:text-[9.5pt] print:mb-1.5 print:leading-normal print:line-clamp-none">
          {item.desc}
      </p>
    )}

    {item.background && (
      <div className="mb-3 print:mb-1.5">
        <h5 className="text-[11px] font-bold text-slate-800 dark:text-slate-200 mb-0.5 print:text-[9.5pt]">{language === 'zh' ? '项目背景' : 'Background'}</h5>
        <p className="text-[13px] text-slate-600 dark:text-gray-300 leading-snug print:text-[9.5pt] print:leading-snug">{item.background}</p>
      </div>
    )}

    {item.coreWork && (
      <div className="mb-3 print:mb-1.5">
        <h5 className="text-[11px] font-bold text-slate-800 dark:text-slate-200 mb-1.5 print:mb-0.5 print:text-[9.5pt]">{language === 'zh' ? '核心工作内容' : 'Core Responsibilities'}</h5>
        <div className="space-y-2 print:space-y-1">
          {item.coreWork.map((work: any, wIdx: number) => (
            <div key={wIdx}>
              <h6 className="text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-0.5 print:text-[9.5pt]">{work.title}</h6>
              <ul className="list-disc list-outside ml-4 text-[13px] text-slate-600 dark:text-gray-400 space-y-0.5 leading-snug print:text-[9pt] print:space-y-0 print:leading-snug">
                {work.items.map((wi: string, iIdx: number) => <li key={iIdx}>{wi}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )}

    {item.achievements && (
      <div className="mb-3 print:mb-1.5">
        <h5 className="text-[11px] font-bold text-slate-800 dark:text-slate-200 mb-0.5 print:text-[9.5pt]">{language === 'zh' ? '核心成就数据' : 'Core Achievement Data'}</h5>
        <ul className="list-disc list-outside ml-4 text-[13px] text-slate-600 dark:text-gray-400 space-y-0.5 leading-snug print:text-[9pt] print:space-y-0 print:leading-snug">
          {item.achievements.map((ach: string, aIdx: number) => <li key={aIdx}>{ach}</li>)}
        </ul>
      </div>
    )}

    <div className="flex flex-wrap gap-1 print:gap-1 mt-3 print:mt-1.5">
        {item.tags.map((tag: string, i: number) => (
        <span key={i} className="text-[10px] bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-gray-400 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700 print:bg-transparent print:border-gray-200 print:text-[8pt] print:px-1 print:py-0">
            {tag}
        </span>
        ))}
    </div>
  </div>
);

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const content = {
    zh: {
      title: '过去',
      titleHighlight: '成就',
      subtitle: '用数据说话，以结果导向',
      metrics: [
        { value: '5000+', label: '连锁门店落地', color: 'text-blue-500' },
        { value: '90%', label: '大客户年度留存', color: 'text-green-500' },
        { value: '50%', label: '团队营收贡献', color: 'text-purple-500' },
        { value: '3000+', label: 'AIGC 账号月增粉', color: 'text-pink-500' }
      ],
      archTitle: '数字化架构体系',
      archDesc: '打通 BOH 供应链与 POS 全渠道，消除数据孤岛，构建一体化业务中台。',
      group0Title: '售前解决方案管理',
      group1Title: '客户成功与运营管理',
      group2Title: '项目落地成果案例',
      group3Title: 'AIGC 敏捷开发与创新自媒体实践',
      cases: [
        {
          brand: 'AIGC 智能系统与爆款自媒体矩阵实践',
          role: 'AIGC 独立开发者 / 运营项目负责人 (2026.01 - 至今 | 个人敏捷开发)',
          colSpan: true,
          background: '在前沿大模型技术落地探索中，自主探索“个人AI工程师”与“一人内容创作室”的高效能、高性价比落地链路。涵盖使用 Claude Code 敏捷搭建的端到端投资分析系统，以及完全以高品质为导向实现的小红书爆款涨粉起号。',
          coreWork: [
            {
              title: '一、AI 投资交易智能决策系统（Claude Code 自主搭建）',
              items: [
                '架设端到端研报与资讯深度提取系统：自主解决接口和逻辑痛点。针对原本需要花费数天时间精力深度研读的专业研报与新闻资讯，如今在几分钟内即可借助 AI 实现从‘抓取-整理-分析-核心结论’全自动贯通，高效消除碎片化信息滞后。',
                '多维传导与景气度打分模型落地：从第一层抓取海外上游产能传导逻辑、层级要素级批量拆解券商核心预期与风险变量，直接提纯出最关键的业务指标。整套体系直接服务于个人实盘资金的前置研判、仓位节奏与风险排雷。'
              ]
            },
            {
              title: '二、小红书 AI 二创自媒体矩阵与爆款跑通',
              items: [
                '落实高品质、自闭环的 AI 视频生产线：集成 Seedance（画面生成及原创角色一致性）、Claude 与剪映 AI。坚持“品质至上、精益求精”的策略，不以频繁或低质刷量为基础。通过高精准控词与一致性引导，大幅优化落地成本（如降低“图片抽卡”损耗，使角色更符合画面预期）。',
                '高转化爆款起号逻辑：深入研究平台 AIGC 推荐扶持标签、热搜变动与流量分发机制。结合高粘性原创 IP 二创，5 月单月结合平台活动和流量，实现净暴涨 3000+ 专属粉丝，验证转化逻辑。'
              ]
            }
          ],
          achievements: [
            '多维 AI 决策大模型全流程贯通，原本繁冗的研报与海量资讯深度研读，如今只需几分钟即可完成提炼分析与决策规避；',
            '自媒体账号 5 月份单月高性价比、低损跑通，净增粉 3000+ 专业粉，多条漫改爆发式作品流量破万验证价值；',
            '沉淀出一套包含工程开发与内容放大在内的、极具敏捷开发参考价值的一人闭环数字化流程。'
          ],
          tags: ['Claude Code', 'AI 交易模型', '小红书增长', 'AIGC 视频工程', '敏捷闭环'],
          highlight: '单月快速涨粉 3000+'
        },
        {
          brand: '数字化咨询与售前解决方案管理',
          role: '数字化解决方案顾问 (2024 - 2025 | 全链路售前赋能)',
          colSpan: true,
          background: '深度参与头部连锁餐饮品牌数字化项目售前管理，主导从需求挖掘、蓝图设计到投标讲标的全流程交付，支撑数千万级项目成功中标。',
          coreWork: [
            {
              title: '一、深度售前咨询与架构蓝图策划',
              items: [
                '深度参与头部连锁餐饮品牌数字化项目售前全流程管理，独立完成需求调研、业务蓝图规划、技术架构设计、SaaS 解决方案输出及 POC 验证方案。',
                '主导技术标 + 商务标双轨编制，独立完成投标文件撰写、方案评审与答疑准备，针对品牌业务场景定制数字化转型路径与实施路线图。'
              ]
            },
            {
              title: '二、现场讲标与业务价值传递',
              items: [
                '负责现场讲标与客户技术答疑，针对客户决策层与业务部门开展方案宣讲、系统演示与业务价值解读，精准传递 SaaS 产品核心能力与行业适配性。',
                '曾多次独立主导大中型连锁企业的售前讲标，通过专业方案演示推动客户对方案的高度认可。'
              ]
            },
            {
              title: '三、标准化赋能与售前交付闭环机制',
              items: [
                '将 KA 客户成功案例沉淀为行业最佳实践白皮书与标准化售前方案库，为销售团队提供可复用的模板，支撑投标效率提升 40%+。',
                '建立售前-交付闭环机制，通过售前深度调研提前识别项目实施难点并输出风险预案，显著提升项目交付成功率。'
              ]
            }
          ],
          achievements: [
            '支撑多个百万/千万级标杆项目成功中标（某茶饮，某咖啡品牌），讲标通过率位居团队前列。',
            '为项目落地奠定坚实基础，讲标专业度与方案匹配度获得客户决策层高度认可。'
          ],
          tags: ['售前咨询', '标书编制', '解决方案', '行业白皮书'],
          highlight: '千万级项目成功中标'
        },
        {
          brand: '核心运营逻辑与体系建设',
          role: '大客户运营负责人 / 客户成功总监 (2023 - 2025 | 存量与增量业务管理)',
          colSpan: true,
          background: '负责管理公司核心大客户及中小客户矩阵，通过构建独立运营体系、精细化 CSM 服务模型及生态合作伙伴网络，驱动客户价值增长与 SaaS 产品持续迭代。',
          coreWork: [
            {
              title: '一、大客户 (KA) 独立运营体系建设',
              items: [
                '针对喜茶、星巴克、DQ、久久丫等头部品牌，制定“一客一策”的独立运营体系，确保服务逻辑与客户业务高度匹配。',
                '喜茶专项：成立“产研+业务”专项项目小组，深度匹配其业务的高速扩张与内部系统协同需求。',
                '星巴克专项：组建独立运维团队，负责一线业务的 7x24 小时高可用运维保障。',
                '大型连锁 (DQ/久久丫)：针对年营收百万级以上的门店，分配独立客户成功经理 (CSM)，深度挖掘潜在需求并掌握客户动向，通过周报/月报机制实现精细化管理。'
              ]
            },
            {
              title: '二、中小客户 (SMB) 精细化运营与产品赋能',
              items: [
                '针对 SomethingFor、果呀呀、Seesaw 等品牌，采用“AM+PM”共同维护机制，践行“小而精”的服务理念。',
                '痛点提炼：通过调研中小客户的共性痛点，提炼出符合 SaaS 路径的核心需求，定期与产品团队沟通，推动产品功能迭代，显著提升 SaaS 使用率与客户满意度。'
              ]
            },
            {
              title: '三、生态合作伙伴与全球化布局',
              items: [
                '深度联动国内外合作伙伴，筛选并培养优质代理商，协助进行更大规模的拓客、实施与运维，实现业务的快速复制与全球化覆盖。'
              ]
            },
            {
              title: '四、售前赋能与最佳实践输出',
              items: [
                '与售前团队紧密合作，将实际客户成功案例转化为“行业最佳实践”白皮书，辅助售前团队在投标与方案宣讲阶段提供强有力的数字化支撑。'
              ]
            }
          ],
          achievements: [
            '构建了覆盖全国及海外市场的多级客户服务体系',
            '通过需求提炼驱动 SaaS 产品核心功能迭代 10+ 项',
            '辅助售前团队成功拿下多个百万级标杆项目'
          ],
          tags: ['KA 运营', '客户成功', '生态赋能', 'SaaS 迭代'],
          highlight: '大客户独立运营体系'
        },
        {
          brand: 'HEYTEA 喜茶',
          role: '项目负责人 (2019 - 2021 | 常驻深圳)',
          colSpan: false,
          background: '2020 年喜茶处于高速扩张期，为支撑全国直营门店规模化运营、线上线下一体化履约及供应链精细化管理，启动内部核心系统战略升级。我主导 HiPOS 收银中台与 BOH 供应链系统从 0 到 1 落地，覆盖全国门店，成为喜茶数字化转型关键项目。',
          coreWork: [
            {
              title: '项目管理与数字化落地',
              items: [
                '负责喜茶全国 800+ 直营门店供应链 BOH 体系 + POS 收银系统的整体搭建与落地。',
                '主导门店供应链深度调研、业务方案设计、系统开发落地，独立负责核心商品 BOM 配方模块设计。',
                '主导 HiPOS 全域收银中台项目，实现线上小程序、外卖平台、线下 POS、BOH 供应链全域数据打通。'
              ]
            },
            {
              title: '客户成功与运营',
              items: [
                '搭建喜茶大客户专属服务团队，统筹产研、测试、实施资源配置。',
                '建立全国门店报修与系统监控体系，制定标准化异常处理流程（10分钟响应、2小时闭环）。'
              ]
            }
          ],
          achievements: [
            '主导落地动态配方管理体系，助力年度损耗降低1%。',
            '系统稳定支撑日订单峰值 10万+，保障业务高效运转。',
            'BOM 配方设计成功申请发明专利。'
          ],
          tags: ['高并发', 'BOM专利', '数字化转型'],
          highlight: '日订单峰值 10万+'
        },
        {
          brand: '久久丫',
          role: '业务中台负责人 (2021 - 2023 | 常驻上海-嘉善)',
          colSpan: false,
          background: '主导集团核心数字化转型战略项目，旨在建设统一业务中台，打通 ERP、SAP、财务、小程序、POS、CRM 等孤立系统，解决加盟销售与订货流程割裂、数据孤岛等痛点。',
          coreWork: [
            {
              title: '全流程项目主导与实施',
              items: [
                '独立负责从需求调研、蓝图设计到全国 3000+ 门店规模化落地的全生命周期管理。',
                '主导商品、库存、订单、价格、结算六大核心中台模块的方案设计与落地。',
                '建立三级推广与分层培训体系，在紧迫工期内完成从试点到 6 批次全国上线的切换。'
              ]
            },
            {
              title: '客户成功与运营',
              items: [
                '深度走访一线门店，精准捕获加盟商在订货、盘点、对账等场景的真实痛点并闭环解决。',
                '建立长效复盘与运维管理机制，形成“问题台账-复盘分析-优化响应”的闭环管理。'
              ]
            }
          ],
          achievements: [
            '完成全国 3000+ 门店规模化上线。',
            '实现全域系统集成，达成线上线下一体化与财务智能对账。',
            '构建六大中心，实现产供销存全链路互联互通。'
          ],
          tags: ['3000+ 门店', '业务中台', '全流程主导'],
          highlight: '0 到 1 全流程主导'
        }
      ]
    },
    en: {
      title: 'Past',
      titleHighlight: 'Achievements',
      subtitle: 'Data-driven, result-oriented approach',
      metrics: [
        { value: '5000+', label: 'Stores Implemented', color: 'text-blue-500' },
        { value: '90%', label: 'KA Annual Retention', color: 'text-green-500' },
        { value: '50%', label: 'Team Revenue Contribution', color: 'text-purple-500' },
        { value: '3000+', label: 'AIGC Monthly Followers', color: 'text-pink-500' }
      ],
      archTitle: 'Digital Architecture',
      archDesc: 'Bridging BOH supply chain and POS omni-channel to eliminate data silos.',
      group0Title: 'Pre-sales Solution Management',
      group1Title: 'Customer Success & Operations Management',
      group2Title: 'Project Implementation Cases',
      group3Title: 'AIGC Engineering & Creative Media Practice',
      cases: [
        {
          brand: 'AIGC Intelligent Decision System & Red Media Growth Matrix',
          role: 'AIGC Lead & Media Creator (2026.01 - Present | Agile Personal Studio)',
          colSpan: true,
          background: 'Pioneered the concept of the "Solo AI Engineer" and "1-Person Creative Hub" focusing on high fidelity and cost-effective scaling. Delivered an end-to-end investment analysis model using Claude Code, alongside a quality-first, highly optimized short-video content pipeline.',
          coreWork: [
            {
              title: '1. AI Investment Analysis & Quant System (Built with Claude Code)',
              items: [
                'End-to-End Extraction & Parsing: Automated ingestion and token-cleaning workflows for multi-source financial report analyses. Compressed traditional days-long deep-dive readings into minutes of automated summary generation, efficiently mitigating intelligence lags.',
                'Multi-layered Logical Modeling: Structured First-layer overseas capacity, Second-layer key parameter extraction from broker deep dives, and Third-layer cycle indicators—directly serving proactive spot hedging and capital risk shielding.'
              ]
            },
            {
              title: '2. Xiaohongshu AI Media Viral Playbook & Scaling',
              items: [
                'Quality-First AIGC Production: Combined Seedance (high-fidelity custom generation and character consistency control), Claude, and CapCut AI editing. Rejected high-frequency low-quality posting and adapted to rising production overheads by optimizing prompt coherence to minimize generation wastes and ensure characters fit specific artistic specifications.',
                'Audience-Tuned Organic Growth: Leveraged viral IP modifications and high-conversion topic planning, combining platform-sponsored campaigns and organic traffic pushes within May to rapidly convert 3,000+ targeted niche followers.'
              ]
            }
          ],
          achievements: [
            'Successfully mapped global market intelligence to real portfolio risk mitigation, compressing laborious broker deep-dives and market news loops into minute-level insights.',
            'Acquired 3,000+ highly engaged niche followers on Xiaohongshu within a single month with premium cost-effectiveness, validating the organic viral loop.',
            'Pioneered a robust, cost-effective blueprint illustrating how AI amplifies single-person output metrics'
          ],
          tags: ['Claude Code', 'AI Quant system', 'Social Media Growth', 'CapCut AI Pipeline', 'Solopreneur'],
          highlight: '3,000+ Followers in 1 Month'
        },
        {
          brand: 'Digital Consulting & Pre-sales Solution Management',
          role: 'Digital Solution Consultant (2024 - 2025 | Full-link Enablement)',
          colSpan: true,
          background: 'Deeply involved in pre-sales management for top-tier catering brands, leading the full process from requirement mining to successful bidding for multi-million projects.',
          coreWork: [
            {
              title: '1. In-depth Pre-sales Consulting & Architecture Blueprinting',
              items: [
                'Deeply involved in full pre-sales management for top-tier catering brands, completing surveys, blueprints, SaaS solutions, and POC verification.',
                'Led technical and commercial bid preparation, drafting proposals and customizing digital transformation roadmaps for chain brands.'
              ]
            },
            {
              title: '2. On-site Bidding & Business Value Delivery',
              items: [
                'Responsible for live bidding and technical Q&A, conducting solution presentations and system demos for decision-makers and business departments.',
                'Successfully led multiple pre-sales bidding cases for large enterprises, achieving high approval through professional demonstrations.'
              ]
            },
            {
              title: '3. Standardization Enablement & Pre-sales/Delivery Loop',
              items: [
                'Transformed KA success stories into industry white papers and standard solution libraries, providing reusable templates that boosted bidding efficiency by 40%+.',
                'Established a closed-loop mechanism between pre-sales and delivery to early-identify implementation risks, significantly improving project success rates.'
              ]
            }
          ],
          achievements: [
            'Supported successful bidding for multiple million/multi-million level projects (Top Tea & Coffee Brands) with a top-tier success rate.',
            'Precision of solutions and professionalism of bidding recognized highly by client decision-makers.'
          ],
          tags: ['Pre-sales Consulting', 'Bidding', 'SaaS Solution', 'White Papers'],
          highlight: 'Multi-million Bid Success'
        },
        {
          brand: 'Core Operation Logic & System Construction',
          role: 'Head of KA Operations / Customer Success Director (2023 - 2025)',
          colSpan: true,
          background: 'Responsible for managing the core KA and SMB matrix, driving customer value growth and SaaS product iteration through independent operation systems, refined CSM models, and ecosystem partner networks.',
          coreWork: [
            {
              title: '1. KA Independent Operation System',
              items: [
                'Developed customized operation systems for top-tier brands (HEYTEA, Starbucks, DQ, Jiujiuya, etc.) to ensure high alignment with client business logic.',
                'HEYTEA Special: Established a dedicated "R&D + Business" task force to support rapid expansion and internal synergy.',
                'Starbucks Special: Formed a dedicated O&M team to ensure high-availability support for frontline operations.',
                'Large Chains (DQ/Jiujiuya): Assigned dedicated CSMs for 1M+ revenue accounts to track dynamics, mine latent needs, and ensure high-quality reporting.'
              ]
            },
            {
              title: '2. SMB Refined Operations & Product Synergy',
              items: [
                'Implemented a joint "AM + PM" mechanism for brands like SomethingFor, Guoyaya, and Seesaw, practicing a "Small but Exquisite" service philosophy.',
                'Pain Point Extraction: Identified common SMB pain points to define SaaS product requirements, collaborating with the product team to drive feature iterations and improve adoption.'
              ]
            },
            {
              title: '3. Ecosystem Partnership & Global Expansion',
              items: [
                'Collaborated with domestic and international partners to empower agents for large-scale acquisition, implementation, and O&M, facilitating global business growth.'
              ]
            },
            {
              title: '4. Pre-sales Enablement & Best Practices',
              items: [
                'Partnered with the pre-sales team to output "Best Practice" case studies, providing critical support for bidding and technical proposals.'
              ]
            }
          ],
          achievements: [
            'Built a multi-level customer service system covering domestic and overseas markets.',
            'Driven 10+ core SaaS feature iterations through requirement extraction.',
            'Assisted pre-sales in winning multiple million-level benchmark projects.'
          ],
          tags: ['KA Ops', 'Customer Success', 'Ecosystem', 'SaaS Iteration'],
          highlight: 'KA Independent Ops System'
        },
        {
          brand: 'HEYTEA',
          role: 'Project Lead (2019 - 2021 | Shenzhen)',
          colSpan: false,
          background: 'Led the 0-to-1 implementation of the HiPOS middle-platform and BOH supply chain system, covering all stores nationwide during HEYTEA\'s rapid expansion phase.',
          coreWork: [
            {
              title: 'Project Management & Implementation',
              items: [
                'Responsible for the overall construction of BOH and POS systems for 800+ stores.',
                'Led supply chain research, business solution design, and BOM recipe module R&D.',
                'Integrated mini-programs, delivery platforms, and POS data to build a closed-loop system.'
              ]
            },
            {
              title: 'Customer Success & Operations',
              items: [
                'Established a dedicated service team and coordinated resources across R&D and testing.',
                'Built a nationwide monitoring system with standardized exception handling (10-min response).'
              ]
            }
          ],
          achievements: [
            'Reduced annual internal loss by 1% through dynamic recipe management.',
            'Supported 100k+ peak daily orders stably.',
            'Successfully applied for an invention patent for BOM design.'
          ],
          tags: ['High Concurrency', 'Patented BOM', 'Digitalization'],
          highlight: '100k+ Peak Daily Orders'
        },
        {
          brand: 'Jiujiuya',
          role: 'Middle Platform Lead (2021 - 2023 | Shanghai-Jiashan)',
          colSpan: false,
          background: 'Led the digital transformation to build a unified business middle-platform, integrating ERP, SAP, POS, and CRM for 3000+ stores.',
          coreWork: [
            {
              title: 'Full-Process Leadership',
              items: [
                'Managed the full lifecycle from research to scaled rollout across 3000+ stores.',
                'Led the design of core modules: product, inventory, order, price, and reconciliation.',
                'Established a three-tier training system to ensure smooth transition for franchisees.'
              ]
            },
            {
              title: 'Customer Success & Operations',
              items: [
                'Conducted on-site research to solve real pain points in ordering and reconciliation.',
                'Established long-term O&M mechanisms and a closed-loop problem management system.'
              ]
            }
          ],
          achievements: [
            'Scaled rollout to 3000+ stores nationwide.',
            'Achieved online-offline integration and automated financial reconciliation.',
            'Built six major centers for full supply chain interoperability.'
          ],
          tags: ['3000+ Stores', 'Middle Platform', 'Full Process Lead'],
          highlight: '0 to 1 Full Process Lead'
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
            {t.title} <span className="text-blue-800 dark:text-blue-400">{t.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 tracking-tight print:text-[9.5pt] print:text-slate-500 print:tracking-tight">{t.subtitle}</p>
        </div>

        {/* 1. Key Metrics Bar - Simplified */}
        <div className="border-y border-slate-100 dark:border-slate-800 py-5 mb-10 flex flex-wrap justify-between items-center gap-4 print:py-1.5 print:mb-3 print:gap-1 print:border-gray-200 print:bg-slate-50/50 print:rounded-xl">
          {t.metrics.map((metric, idx) => (
            <div key={idx} className="flex-1 min-w-[100px] text-center print:min-w-0 print:text-center">
              <div className={`text-2xl font-bold mb-0.5 ${metric.color.replace('text-', 'text-slate-900 dark:text-white')} print:text-base print:mb-0`}>
                {metric.value}
              </div>
              <div className="text-[10px] text-slate-500 dark:text-gray-400 font-medium uppercase tracking-wider print:text-[8pt] print:tracking-normal">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* 3. Case Study Cards - Simplified to List Style */}
        <div className="mb-10 print:mb-3">
            <div className="space-y-10 print:space-y-3">
              {/* Group 3: AIGC Project */}
              <div>
                <h3 className="text-xl font-bold text-left mb-6 text-slate-800 dark:text-white print:text-base print:mb-2 border-b-2 border-blue-800 dark:border-blue-400 inline-block pb-1.5 px-3">
                  {t.group3Title}
                </h3>
                <div className="grid grid-cols-1 gap-y-6 mt-4 print:mt-2">
                  {t.cases.slice(0, 1).map((item: any, index) => (
                    <ProjectCard key={index} item={item} language={language} />
                  ))}
                </div>
              </div>

              {/* Group 0: Pre-sales Management */}
              <div>
                <h3 className="text-xl font-bold text-left mb-6 text-slate-800 dark:text-white print:text-base print:mb-2 border-b-2 border-blue-800 dark:border-blue-400 inline-block pb-1.5 px-3">
                  {t.group0Title}
                </h3>
                <div className="grid grid-cols-1 gap-y-6 mt-4 print:mt-2">
                  {t.cases.slice(1, 2).map((item: any, index) => (
                    <ProjectCard key={index} item={item} language={language} />
                  ))}
                </div>
              </div>

              {/* Group 1: KA Operations */}
              <div>
                <h3 className="text-xl font-bold text-left mb-6 text-slate-800 dark:text-white print:text-base print:mb-2 border-b-2 border-blue-800 dark:border-blue-400 inline-block pb-1.5 px-3">
                  {t.group1Title}
                </h3>
                <div className="grid grid-cols-1 gap-y-6 mt-4 print:mt-2">
                  {t.cases.slice(2, 3).map((item: any, index) => (
                    <ProjectCard key={index} item={item} language={language} />
                  ))}
                </div>
              </div>

              {/* Group 2: Implementation Cases */}
              <div>
                <h3 className="text-xl font-bold text-left mb-6 text-slate-800 dark:text-white print:text-base print:mb-2 border-b-2 border-blue-800 dark:border-blue-400 inline-block pb-1.5 px-3">
                  {t.group2Title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 print:grid-cols-1 print:gap-y-4 print:mt-2">
                  {t.cases.slice(3).map((item: any, index) => (
                    <ProjectCard key={index} item={item} language={language} />
                  ))}
                </div>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
