import React, { useState } from 'react';
import { Language } from '../../App';

interface MihoyoExperienceProps {
  language: Language;
}

const MihoyoExperience: React.FC<MihoyoExperienceProps> = ({ language }) => {
  const [showEarlierCareer, setShowEarlierCareer] = useState<boolean>(true);

  const content = {
    zh: {
      badge: 'CAREER EXPERIENCE',
      titlePrefix: '',
      titleHighlight: '工作经历',
      subtitle: '十年以上企业软件与连锁餐饮 SaaS 经验，近期独立开展 AI 应用研发与创业实践',
      toggleEarlier: '展开查看早期企业软件经历 (2010—2016.04)',
      collapseEarlier: '收起早期企业软件经历',
      experiences: [
        {
          period: '2025.08—至今｜上海',
          role: 'AI 产品经理 / 独立开发者 (应用研发与内容运营)',
          company: '独立 AI 原生产品孵化与智能体研发',
          tag: '独立实践 · B端/C端 AI 原生',
          tagColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
          desc: '深度融合 10 年连锁数字化架构经验与 AI 原生思维。在 B 端利用行业 Know-how 构建垂直业务主体库与三层知识研判体系（门店视觉巡检防损、库存异常智能研判与闭环）；在 C 端敏锐捕捉用户心智与高频交互，敏捷落地桌面伴侣、赛事推演与工业化 AIGC 内容矩阵，实现 B 端与 C 端双轮驱动。',
          bullets: [
            'B 端业务主体库与三层研判体系：结合 10 年供应链经验，将商品、原料 BOM、批次、工装合规、开门超时等抽象为垂直主体库，搭建“确定性规则基线 + LLM 竞争假设”的闭环知识研判体系。',
            '门店视觉巡检与盘点闭环双开源 Agent：独立落地门店 AI 视觉巡检整改（多模态 CV 双层分析，Token 降本 70%+）与库存异常闭环研判系统（库存可信度分级与自适应订货降级），并在 GitHub 开源。',
            'C 端 AI 原生应用与开源矩阵：开源发布 Velina Pet 游戏桌宠（打通游戏 API、流式 TTS 与本地记忆）及 2026 世界杯赛事预测系统（101 场实战 79.2% 胜率），交付高可用 Web 在线系统。',
            '将确定性规则、模型建议和人工执行严格解耦，坚守“AI 只给建议、不越权改账”的企业级工业化安全红线。',
            '深度运用 Claude Code、Codex 等 AI 智能体工具提升交付人效，沉淀 20+ 套行业标准化 Prompt 模板资产。',
            '端到端 AIGC 内容工业化：依托 Liblib、Seedance 独立完成动漫游戏原创/二创剧情、分镜与剪辑全流程，跨平台沉淀 10,000+ 真实粉丝。'
          ],
          tech: ['行业 Know-how', '主体库与知识研判', 'Claude Code / Codex', '多模态 CV', 'GitHub 开源', 'Prompt 资产库']
        },
        {
          period: '2016.04—2025.07｜上海',
          role: '核心职能：产品经理／解决方案架构师／SaaS 运营',
          company: '上海合阔信息技术有限公司',
          tag: '十年餐饮连锁 SaaS · 5000+ 门店交付',
          tagColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
          desc: '职业路径由 SaaS 核心研发发展至项目、解决方案及客户运营，主要围绕连锁餐饮产品规划、业务建模、系统落地和持续使用开展工作。',
          careerPath: '职位演进：高级软件开发工程师 → 项目经理／解决方案架构 → 大客户／客户成功总监，兼解决方案架构。',
          bullets: [
            '围绕总部与门店开展需求调研、业务蓝图、功能设计及迭代规划。',
            '参与 OMS、动态 BOM、POS、库存和建议订货等产品建设，将业务规则转化为系统能力。',
            '推进喜茶 HiPOS、建议订货、加盟支付，以及久久丫中台等项目，协调业务、研发、实施与外部合作伙伴。',
            '组织测试、门店部署、培训、上线切换和问题反馈，相关交付累计覆盖 5,000+ 门店。',
            '将客户使用问题与运营反馈带回产品迭代，兼顾标准化能力和不同品牌的业务差异。',
            '推进谭仔国际客服平台等海外项目，积累跨地区协作与业务适配经验。'
          ],
          tech: ['OMS & 动态 BOM', '喜茶 HiPOS', '建议订货 (MRP)', 'B2B 支付中台', '久久丫中台', '谭仔国际客服平台']
        }
      ],
      earlierExperience: {
        period: '2010—2016.04',
        title: '早期企业软件经历',
        desc: '从事 .NET、Web、SharePoint 相关开发与技术支持，积累企业系统需求沟通、软件实现和问题排查经验，后续逐步转向产品与解决方案工作。',
        details: [
          '普华永道 (PwC Shanghai)：负责企业数字化协作体系架构设计与定制研发，服务全球化跨部门与海外医疗数字化项目；',
          '高知特 (Cognizant)：为顶级金融、医疗外资企业提供定制化企业中枢与工作流实施方案，打通 ERP 异构核心库；',
          '微软 (Microsoft China)：在微软官方客户技术支持中心 (CSS)，为全球与大中华区企业级客户提供 .NET/Web 原厂级底层排查与性能调优。'
        ]
      }
    },
    en: {
      badge: 'CAREER EXPERIENCE',
      titlePrefix: '',
      titleHighlight: 'Work Experience',
      subtitle: 'Over 10 years of enterprise software and F&B SaaS experience, recently pursuing independent AI application R&D and startup practice',
      toggleEarlier: 'Expand early enterprise software experience (2010—2016.04)',
      collapseEarlier: 'Collapse early enterprise software experience',
      experiences: [
        {
          period: '2025.08—Present | Shanghai',
          role: 'AI Product Manager / Independent Developer (R&D & Content Ops)',
          company: 'Independent AI Native Product Incubation & Agent Engineering',
          tag: 'Independent Practice · B2B / B2C AI Native',
          tagColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
          desc: 'Fusing 10+ years of enterprise SaaS architecture with AI-native methodologies. In B2B: leveraging domain know-how to build vertical business entity libraries and a three-tier knowledge diagnosis framework (store visual loss prevention, inventory variance resolution); in B2C: capturing gamer affinity and high-frequency engagement to ship desktop companions, predictive sports analytics, and an industrialized AIGC content matrix.',
          bullets: [
            'B2B Business Entity Libraries & 3-Tier Diagnosis Stack: Synthesizing 10 years of supply chain expertise to model raw material BOMs, shelf-life batches, and SOP violation topologies, coupling deterministic baselines with LLM competing hypotheses.',
            'Dual Open-Source B2B Inspection & Stocktake Agents: Delivered Store AI Vision Inspection (two-tier multimodal CV reducing token cost by 70%+) and Inventory Count Closure (stock trustworthiness scoring & fallback replenishment) on GitHub.',
            'B2C AI-Native Apps & Open-Source Portfolio: Shipped Velina Pet game desktop companion (game API hooks, streaming TTS, local memory) and WorldCup 2026 Predictions System (multi-LLM ensemble with 79.2% win rate across 101 matches) with live web systems.',
            'Decoupled deterministic rules, LLM suggestions, and human execution, strictly upholding the enterprise guardrail: "AI advises, never alters ledger without authorization."',
            'Leveraged Claude Code and Codex to accelerate delivery, curating 20+ standardized prompt assets for catering & retail SaaS.',
            'End-to-End AIGC Content Industrialization: Orchestrated Liblib and Seedance pipelines for anime/game storytelling, storyboarding, and editing, building a community of 10,000+ authentic followers across platforms.'
          ],
          tech: ['Domain Know-how', 'Entity & Diagnosis', 'Claude Code / Codex', 'Multimodal CV', 'GitHub Open Source', 'Prompt Assets']
        },
        {
          period: '2016.04—2025.07 | Shanghai',
          role: 'Core Roles: Product Manager / Solution Architect / SaaS Operations',
          company: 'Shanghai Hekuo Information Technology Co., Ltd.',
          tag: '10+ Years F&B Chain SaaS · 5,000+ Stores',
          tagColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
          desc: 'Evolved career from core SaaS engineering to project leadership, solution architecture, and customer success, focusing on F&B chain product planning, business modeling, delivery, and ongoing adoption.',
          careerPath: 'Career Progression: Senior Software Engineer → Project Manager / Solution Architect → Strategic Accounts / Customer Success Director & Solution Architect.',
          bullets: [
            'Conducted user research, business blueprints, functional specifications, and release roadmaps for HQ and store users.',
            'Contributed to core products including OMS, Dynamic BOM, POS, Inventory, and Suggested Ordering, transforming rules into system capabilities.',
            'Drove key projects such as HEYTEA HiPOS, MRP Replenishment, Franchisee Payment, and Jiujiuya Middle Platform, orchestrating business, R&D, and field teams.',
            'Organized testing, nationwide store rollouts, training, cutovers, and feedback loops, cumulatively covering over 5,000+ chain stores.',
            'Channeled operational anomalies back into product iterations, balancing standardized platform scalability with brand customizations.',
            'Spearheaded international projects like TamJai Customer Support Platform, gaining valuable cross-border collaboration and localization expertise.'
          ],
          tech: ['OMS & Dynamic BOM', 'HEYTEA HiPOS', 'Suggested Replenishment (MRP)', 'B2B Payment Platform', 'Jiujiuya Platform', 'TamJai Platform']
        }
      ],
      earlierExperience: {
        period: '2010—2016.04',
        title: 'Early Enterprise Software Experience',
        desc: 'Engaged in .NET, Web, and SharePoint development and technical support, accumulating requirements discovery, engineering execution, and troubleshooting experience before transitioning to product and solutions.',
        details: [
          'PwC Shanghai: Architected digital workflow automation portals across global departments and healthcare projects;',
          'Cognizant Technology Solutions: Implemented enterprise portals and ERP integrations for Fortune 500 financial and medical clients;',
          'Microsoft China: Provided tier-3 kernel and web troubleshooting and performance tuning for mission-critical enterprise deployments at Microsoft CSS.'
        ]
      }
    }
  };

  const t = content[language];

  return (
    <section id="mihoyo-experience" className="py-14 bg-slate-50/70 dark:bg-slate-900/40 relative transition-colors duration-500 print:py-3 print:bg-white">
      <div className="max-w-5xl mx-auto px-4 print:px-0">
        <div className="mb-10 text-center print:mb-3 print:text-left">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2 font-mono">
            {t.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-slate-900 dark:text-white transition-colors duration-300 print:text-xl print:mb-1">
            {t.titlePrefix && <span>{t.titlePrefix} </span>}
            <span className="text-blue-600 dark:text-blue-400">{t.titleHighlight}</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto print:text-[9.5pt] print:text-slate-600 print:max-w-none">
            {t.subtitle}
          </p>
        </div>

        {/* Primary Experience List */}
        <div className="space-y-6 print:space-y-3">
          {t.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm print:p-2.5 print:border-slate-300 print:shadow-none print:break-inside-auto print:mb-2"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                    {exp.period}
                  </span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${exp.tagColor}`}>
                    {exp.tag}
                  </span>
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {exp.company}
                </span>
              </div>

              <h3 className="text-base font-bold text-blue-600 dark:text-blue-400 mb-2 print:text-[11pt] print:mb-1">
                {exp.role}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3 print:text-[8.5pt]">
                {exp.desc}
              </p>

              <div className="space-y-1.5 mb-3.5">
                {exp.bullets.map((b, i) => (
                  <p key={i} className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pl-2.5 border-l-2 border-blue-500/30 print:text-[8.5pt]">
                    • {b}
                  </p>
                ))}
              </div>

              {/* Career Path (if any) */}
              {exp.careerPath && (
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 mb-3 print:text-[8pt]">
                  🎯 <span className="font-bold">{exp.careerPath}</span>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                {exp.tech.map((tItem, i) => (
                  <span key={i} className="px-2 py-0.5 text-[10px] rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
                    #{tItem}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 早期企业软件经历 (2010—2016.04) */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm print:p-3 print:border-slate-300">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                  {t.earlierExperience.period}
                </span>
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  {t.earlierExperience.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowEarlierCareer(!showEarlierCareer)}
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline print:hidden cursor-pointer flex items-center gap-1 font-semibold"
              >
                <span>{showEarlierCareer ? '▲ 收起详细背景' : '▼ 展开详细背景'}</span>
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3 print:text-[8.5pt]">
              {t.earlierExperience.desc}
            </p>

            {showEarlierCareer && (
              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 animate-in fade-in duration-200">
                {t.earlierExperience.details.map((item, i) => (
                  <p key={i} className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pl-2.5 border-l-2 border-slate-300 dark:border-slate-700 print:text-[8pt]">
                    • {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MihoyoExperience;
