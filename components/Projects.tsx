import React from 'react';
import { Language } from '../App';

interface ProjectsProps {
  language: Language;
}

const renderTextWithLinks = (text: string) => {
  if (!text) return text;
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline print:no-underline print:text-slate-800 break-all font-mono"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

const ProjectCard: React.FC<{ item: any; language: Language }> = ({ item, language }) => (
  <div className={`group border-b border-slate-100 dark:border-slate-800 pb-6 last:border-0 md:last:border-b print:pb-2.5 print:mb-2 print:border-gray-200 ${item.colSpan ? 'md:col-span-2' : ''}`}>
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
          {renderTextWithLinks(item.desc)}
      </p>
    )}

    {item.background && (
      <div className="mb-3 print:mb-1.5">
        <h5 className="text-[11px] font-bold text-slate-800 dark:text-slate-200 mb-0.5 print:text-[9.5pt]">{language === 'zh' ? '项目背景' : 'Background'}</h5>
        <p className="text-[13px] text-slate-600 dark:text-gray-300 leading-snug print:text-[9.5pt] print:leading-snug">{renderTextWithLinks(item.background)}</p>
      </div>
    )}

    {item.coreWork && (
      <div className="mb-3 print:mb-1.5">
        <h5 className="text-[11px] font-bold text-slate-800 dark:text-slate-200 mb-1.5 print:mb-0.5 print:text-[9.5pt]">{language === 'zh' ? '核心工作内容' : 'Core Responsibilities'}</h5>
        <div className="space-y-2 print:space-y-1">
          {item.coreWork.map((work: any, wIdx: number) => (
            <div key={wIdx} className="print:break-inside-avoid">
              <h6 className="text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-0.5 print:text-[9.5pt]">{work.title}</h6>
              <ul className="list-disc list-outside ml-4 text-[13px] text-slate-600 dark:text-gray-400 space-y-0.5 leading-snug print:text-[9pt] print:space-y-0 print:leading-snug">
                {work.items.map((wi: string, iIdx: number) => <li key={iIdx}>{renderTextWithLinks(wi)}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )}

    {item.achievements && (
      <div className="mb-3 print:mb-1.5 print:break-inside-avoid">
        <h5 className="text-[11px] font-bold text-slate-800 dark:text-slate-200 mb-0.5 print:text-[9.5pt]">{language === 'zh' ? '核心成就数据' : 'Core Achievement Data'}</h5>
        <ul className="list-disc list-outside ml-4 text-[13px] text-slate-600 dark:text-gray-400 space-y-0.5 leading-snug print:text-[9pt] print:space-y-0 print:leading-snug">
          {item.achievements.map((ach: string, aIdx: number) => <li key={aIdx}>{renderTextWithLinks(ach)}</li>)}
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
        { value: '1w+', label: 'AIGC 全网粉丝', color: 'text-pink-500' }
      ],
      archTitle: '数字化架构体系',
      archDesc: '打通 BOH 供应链与 POS 全渠道，消除数据孤岛，构建一体化业务中台。',
      group0Title: '数字化咨询与售前解决方案管理',
      group1Title: '大客户成功与体系化运营管理',
      group2Title: '标杆项目落地成果案例',
      group3Title: 'AI 智能、AIGC 跨平台实践与创业',
      cases: [
        {
          brand: 'AI 编程智能体与开源工程项目',
          role: 'AIGC 独立开发者 / 开源作者 (2025.08 - 至今 | 个人敏捷开发)',
          colSpan: true,
          background: '熟练运用 Claude Code、Codex Agent 结合多厂商大模型搭建自动化数据处理、行业研判工作流，沉淀可复用 LLM 自动化处理架构，适配企业多源数据清洗、行业信息拆解、标准化报告自动生成等数字化场景：',
          coreWork: [
            {
              title: '一、AI产业链条与A股行情智能分析系统',
              items: [
                '搭建端到端资讯、研报自动化解析流程，实现海外产业数据抓取、国内产业链传导逻辑拆解、行业景气度量化打分全流程自动化；整套数据建模、批量文本结构化处理思路，可迁移服务连锁客户做行业经营研判、全域用户数据分层分析、客户经营报表自动生成。'
              ]
            },
            {
              title: '二、轻量化 AI 辅助工具与赛事预测开源实践',
              items: [
                '开发轻量化桌面智能助手 Velina Pet，依托 LLM Agent 实现自动化提醒、动态语音（TTS服务）、信息汇总、定时任务处理；结合实用 MCP 组成接口联动，实现特定业务场景调用和任务处理。',
                '构建 2026 世界杯赛事预测系统，依托大模型与数据模型对球队阵容、赔率动态与历史对阵数据进行智能分析与精准预测。'
              ]
            },
            {
              title: '三、核心开源项目地址',
              items: [
                'https://github.com/joearkon/worldcup2026-predictions',
                'https://github.com/joearkon/A-stock-dashboard',
                'https://github.com/joearkon/velina-pet'
              ]
            }
          ],
          achievements: [
            '沉淀可复用 LLM 自动化处理架构，适配企业多源数据清洗、行业信息拆解与标准化报告自动生成；',
            '贯通端到端产业数据抓取与景气度打分模型，可直接迁移服务连锁客户做数据分层与经营报表生成；',
            '开发轻量化桌面 Agent 并结合 MCP 联动，沉淀需求设计至用户反馈闭环，可复用至企业运营自动化。'
          ],
          tags: ['Claude Code / Codex Agent', 'LLM 自动化架构', 'MCP 接口联动', '桌面 Agent', '开源工程'],
          highlight: 'LLM 自动化架构 / 开源 Agent'
        },
        {
          brand: 'AIGC 跨平台内容实践',
          role: 'AIGC 内容主理人 / 独立运营者 (2025.08 - 至今 | 独立内容管线)',
          colSpan: true,
          background: '独立搭建标准化 AIGC 内容全流程工作管线，覆盖需求梳理、提示词工程、多模态素材生成、AI 剪辑、数据复盘完整闭环；长期研究多渠道用户行为与触达逻辑，沉淀标准化低成本内容生产流程。相关实践经验可复用在为客户输出标准化运营物料、多渠道用户触达内容、方案可视化素材等售前与客户运营场景。（目前小红书和抖音转化1w+粉丝）',
          coreWork: [
            {
              title: '一、轻量化 AI 辅助工具与桌面智能助手',
              items: [
                '开发轻量化桌面智能助手，依托 LLM Agent 实现自动化提醒、动态语音系统、信息汇总、定时任务处理；项目完整沉淀需求设计、迭代测试、用户反馈闭环流程，可复用至企业内部运营自动化、客户维护等场景。'
              ]
            }
          ],
          achievements: [
            '小红书与抖音全网累计转化粉丝 10,000+；',
            '独立搭建“需求-提示词-多模态素材-AI剪辑-数据复盘”标准化 AIGC 全流程工作管线；',
            '沉淀低成本内容生产与自动化工具流程，可复用至售前方案可视化素材与客户运营支持场景。'
          ],
          tags: ['AIGC 跨平台', '小红书 / 抖音 1w+ 粉丝', '提示词工程', '多模态素材生成', '全流程工作管线'],
          highlight: '全网粉丝 1w+'
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
        },
        {
          brand: '谭仔 (Tam Jai International) 全域数字化运营专项',
          role: 'CSM 总监 (2024 - 2025 | 全球化运营)',
          colSpan: false,
          background: '覆盖香港、新加坡、日本、澳洲、马来西亚、菲律宾多区域连锁门店，统筹海内外点餐、客服与系统协同运维。',
          coreWork: [
            {
              title: '一、海外 Zendesk+WhatsApp 全域客服专项落地',
              items: [
                '从零搭建企业级多语种工单平台，以 WhatsApp Business 作为海外客户核心沟通渠道，打通 WhatsApp、海外 APP、社交平台全渠道咨询会话统一归集。',
                '配置跨时区、多语种智能工单路由与分级 SLA 响应规则，搭建多国语言自助知识库，支持 WhatsApp 关键词自动推送答疑素材。',
                '依托工单数据提炼海外门店高频系统痛点，反向推动海外版 SaaS 功能迭代。'
              ]
            },
            {
              title: '二、海外 Issue 报修可视化与标准化服务体系构建',
              items: [
                '实现海外相关 issue 报修总览可视化浏览、统计与复盘，建立起标准化的客户服务体系流程。',
                '沉淀跨国连锁客户服务、系统故障处置标准化流程，输出海外数字化落地方案支撑售前投标。'
              ]
            }
          ],
          achievements: [
            '覆盖香港、新加坡、日本、澳洲、马来西亚、菲律宾多区域连锁门店；',
            '海外相关 issue 报修总览可视化浏览、统计与复盘，同时建立起标准化的客户服务体系流程；',
            '输出海外数字化落地标准化方案支撑售前投标。'
          ],
          tags: ['Zendesk+WhatsApp', '跨国连锁', 'Issue报修可视化', 'SaaS 海外迭代', '标准化客服体系'],
          highlight: '搭建标准化客服体系'
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
        { value: '10,000+', label: 'AIGC Total Followers', color: 'text-pink-500' }
      ],
      archTitle: 'Digital Architecture',
      archDesc: 'Bridging BOH supply chain and POS omni-channel to eliminate data silos.',
      group0Title: 'Digital Consulting & Pre-sales Solution Management',
      group1Title: 'KA Customer Success & Operations Management',
      group2Title: 'Benchmark Project Implementation Cases',
      group3Title: 'AI Agents & AIGC Cross-Platform Practice',
      cases: [
        {
          brand: 'AI Coding Agents & Open-Source Projects',
          role: 'AIGC Independent Developer / Open Source Creator (2025.08 - Present | Personal Studio)',
          colSpan: true,
          background: 'Engineered and released multiple practical AI Agent and open-source applications using Claude Code and LLM engineering, covering financial decision support, sports prediction analytics, and interactive desktop mascots.',
          coreWork: [
            {
              title: '1. AI Investment Analysis & Quant System (Claude Code & Codex Agent)',
              items: [
                'End-to-End Ingestion & Parsing: Leveraged Gemini, GPT, DeepSeek, and Qwen for automated ingestion and token-cleaning workflows. Compressed days of manual reading into minutes of automated summary generation.',
                'Multi-layered Logical Modeling: Structured overseas capacity tracking and broker deep-dive parameter extraction, serving spot hedging and capital risk shielding.'
              ]
            },
            {
              title: '2. 2026 World Cup Predictions System (WorldCup 2026 Predictions)',
              items: [
                'Open-source match prediction system (GitHub: joearkon/worldcup2026-predictions) leveraging LLM and data models to ingest rosters, odds dynamics, and head-to-head records.',
                'Tournament Record (Finals July 20, 2026): Predicted 101 out of 104 matches, achieving a 79.2% match direction accuracy (80/101 correct win/qualification outcomes) and 29.7% scoreline accuracy (30/101, including 16 exact score predictions), backed by daily retrospectives.'
              ]
            },
            {
              title: '3. Desktop Mascot System (Velina Pet)',
              items: [
                'Open-source AI desktop companion featuring LLM Agent interactive dialogue, desktop animations, and status tracking.',
                'Integrated with game APIs (e.g., HoYoverse APIs) for automated daily check-ins, stamina/task queries, and desktop alerts. Distributed to social media followers (Xiaohongshu/Douyin) to build a strong "Content - Open-Source Tool/Community" engagement flywheel.'
              ]
            },
            {
              title: '4. Open-Source Repository Links',
              items: [
                'https://github.com/joearkon/worldcup2026-predictions',
                'https://github.com/joearkon/A-stock-dashboard',
                'https://github.com/joearkon/velina-pet'
              ]
            }
          ],
          achievements: [
            'Independently built and open-sourced 3 engineering applications in quant finance, sports prediction, and desktop agents.',
            'Compressed laborious research and multi-platform development cycles into minutes with automated workflows.',
            'Maintained clean repository architecture, documentation, and detailed README guides on GitHub.'
          ],
          tags: ['Claude Code / Codex', 'Gemini / DeepSeek / GPT', 'WorldCup 2026', 'Velina Pet', 'Open Source'],
          highlight: 'Open Source & AI Agents'
        },
        {
          brand: 'AIGC Cross-Platform Media',
          role: 'AIGC Content Creator & Operator (2025.08 - Present | Independent Pipeline)',
          colSpan: true,
          background: 'Established a refined, quality-first AIGC short-video content pipeline across Xiaohongshu (7,000+ followers) and Douyin (3,000+ followers), surpassing 10,000+ total followers to date while minimizing generation overheads.',
          coreWork: [
            {
              title: '1. Multi-Frame Visuals & Character Consistency Control',
              items: [
                'Mastered Seedance and specialized prompt engineering to enforce character visual consistency across scenes, eliminating generation waste and reducing compute costs.'
              ]
            },
            {
              title: '2. High-Conversion Scripting & End-to-End Pipeline',
              items: [
                'Utilized Claude to re-structure short video scripts and topics, paired with CapCut AI for rapid automated editing.'
              ]
            },
            {
              title: '3. Cross-Platform Growth (10,000+ Total Followers)',
              items: [
                'Studied algorithm recommendation mechanisms on Xiaohongshu and Douyin, creating viral hits (10k+ views per video) and converting 10,000+ engaged niche followers.'
              ]
            }
          ],
          achievements: [
            'Gained 7,000+ Xiaohongshu followers and 3,000+ Douyin followers, reaching 10,000+ total followers cross-platform.',
            'Achieved high engagement and viral reach across multiple original and modified AIGC anime videos.',
            'Documented cost-effective, low-loss AIGC media production guidelines.'
          ],
          tags: ['AIGC Media', 'Xiaohongshu 7000+', 'Douyin 3000+', '10k+ Followers', 'Seedance'],
          highlight: '10,000+ Followers'
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
        },
        {
          brand: 'Tam Jai International (TamJai) Global Digital Operations',
          role: 'CSM Director (2024 - 2025)',
          colSpan: false,
          background: 'Covered multi-region chain stores across Hong Kong, Singapore, Japan, Australia, Malaysia, and the Philippines, coordinating ordering, customer support, and system O&M.',
          coreWork: [
            {
              title: '1. Overseas Zendesk + WhatsApp Omni-channel Customer Support',
              items: [
                'Built an enterprise multi-language ticketing platform from scratch with WhatsApp Business as the core channel, unifying inquiries from WhatsApp, mobile apps, and social platforms.',
                'Configured cross-time-zone and multi-language smart routing with SLA rules, establishing self-service knowledge bases and automated keyword responses on WhatsApp.',
                'Extracted high-frequency store pain points from ticketing data to drive overseas SaaS product iterations.'
              ]
            },
            {
              title: '2. Overseas Issue Repair Visualization & Standardized Service Framework',
              items: [
                'Implemented visual browsing, statistics, and review for overseas issue tickets, while establishing a standardized customer service workflow.',
                'Documented standardized O&M and troubleshooting workflows for multinational chain clients, outputting digital implementation solutions to support pre-sales bidding.'
              ]
            }
          ],
          achievements: [
            'Covered multi-region chain operations across Hong Kong, Singapore, Japan, Australia, Malaysia, and Philippines.',
            'Implemented visual browsing, statistics, and review for overseas issue tickets, establishing a standardized customer service workflow.',
            'Empowered pre-sales bidding with standardized delivery frameworks.'
          ],
          tags: ['Zendesk + WhatsApp', 'Global Chains', 'Issue Repair Visualization', 'SaaS Iteration'],
          highlight: 'Standardized Support Framework'
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
              {/* Group 3: AI Projects & AIGC Practice */}
              <div>
                <h3 className="text-xl font-bold text-left mb-6 text-slate-800 dark:text-white print:text-base print:mb-2 border-b-2 border-blue-800 dark:border-blue-400 inline-block pb-1.5 px-3">
                  {t.group3Title}
                </h3>
                <div className="grid grid-cols-1 gap-y-6 mt-4 print:mt-2">
                  {t.cases.slice(0, 2).map((item: any, index) => (
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
                  {t.cases.slice(2, 3).map((item: any, index) => (
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
                  {t.cases.slice(3, 4).map((item: any, index) => (
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
                  {t.cases.slice(4).map((item: any, index) => (
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
