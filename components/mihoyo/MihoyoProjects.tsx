import React, { useState } from 'react';
import { Language } from '../../App';
import { projectImages } from './projectAssets';

interface MihoyoProjectsProps {
  language: Language;
}

export interface ProjectAction {
  label: string;
  url: string;
  type?: 'demo' | 'github' | 'primary' | 'secondary';
}

export interface MihoyoProjectItem {
  id: string;
  name: string;
  category: string;
  role: string;
  badge: string;
  badgeColor: string;
  disclaimer?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCaptionZh?: string;
  imageCaptionEn?: string;
  overview: string;
  responsibilitiesTitle?: string;
  responsibilities?: string[];
  myWorkTitle?: string;
  myWork: string[];
  achievementsTitle?: string;
  achievements?: string[];
  outputTitle?: string;
  output?: string;
  tags: string[];
  actions?: ProjectAction[];
}

export interface ProjectGroup {
  groupId: string;
  groupTitleZh: string;
  groupTitleEn: string;
  groupSubtitleZh: string;
  groupSubtitleEn: string;
  badgeZh: string;
  badgeEn: string;
  badgeColor: string;
  projects: MihoyoProjectItem[];
}

interface ContentStructure {
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  previewTip: string;
  groups: ProjectGroup[];
}

const MihoyoProjects: React.FC<MihoyoProjectsProps> = ({ language }) => {
  const [selectedPreviewImage, setSelectedPreviewImage] = useState<{ src: string; alt: string; title: string } | null>(null);

  const content: Record<Language, ContentStructure> = {
    zh: {
      titlePrefix: '',
      titleHighlight: '代表项目',
      subtitle: '以下项目分为个人 AI 应用、商业产品与内容实践，分别展示近期技术探索、过去的产品落地经验，以及面向用户的内容创作。',
      previewTip: '点击图片可全屏放大查看系统界面细节',
      groups: [
        {
          groupId: 'proj-group-personal',
          groupTitleZh: '一、个人 AI 与开源项目',
          groupTitleEn: '1. Personal AI & Open Source Projects',
          groupSubtitleZh: '个人职责涵盖产品设计、应用开发与样本验证，全流程落地 AI 应用与工具',
          groupSubtitleEn: 'Full ownership of product design, app development, model validation, and deployment',
          badgeZh: '个人 AI · 开源实践',
          badgeEn: 'Personal AI · Open Source',
          badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
          projects: [
            {
              id: 'proj-verina-pet',
              name: '维琳娜桌宠',
              category: '游戏陪伴与 AI 对话助手',
              role: '产品设计、应用开发与版本维护',
              badge: '个人开源 · Windows 桌宠',
              badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
              imageSrc: projectImages.velinaPet,
              imageAlt: '维琳娜桌宠交互与使用设置',
              imageCaptionZh: '桌宠交互与使用设置：角色情绪状态机、流式 TTS 音频与长短时记忆上下文',
              imageCaptionEn: 'Desktop companion interactions & settings: Emotion FSM, streaming TTS & local memory',
              overview: '面向《绝区零》玩家开发的 Windows 桌宠，将角色互动、AI 对话、游戏信息查询和提醒结合，提供桌面与游戏悬浮球两种交互方式。',
              responsibilitiesTitle: '我的职责',
              responsibilities: [
                '从玩家的陪伴、信息查询和资源提醒需求出发，规划设计桌宠整体产品架构、交互原型与托盘/悬浮球双模态形态。',
                '负责角色 Prompt 提示词工程、状态机情绪流转与流式 TTS 毫秒级语音合成管线搭建。',
                '负责长短时记忆本地隐私存储机制、游戏上下文注入与 Windows 分发版本打包运维。'
              ],
              myWorkTitle: '核心工作与架构演进',
              myWork: [
                '从玩家的陪伴、信息查询和资源提醒需求出发，设计桌宠、托盘菜单、首次使用向导及设置页面。',
                '通过角色 Prompt 组织对话表达，将可取得的游戏电量、调频、账本与战况信息注入上下文，为相关回答提供数据依据。',
                '实现明确授权的本地记忆，支持查看、逐条遗忘与清空。',
                '集成语音播放和 TTS，处理模型调用错误及语音不可用时的文字降级。',
                '针对游戏使用场景设计悬浮球、提醒开关和低打扰交互，提供 Windows 分发与使用说明。'
              ],
              achievementsTitle: '我的产品项目成果',
              achievements: [
                '独立发布开源 Windows 桌面应用与完整说明文档，GitHub 开源仓库获玩家群体关注与使用；',
                '实现流式 TTS 毫秒级语音响应、本地隐私长短时记忆管理与角色情绪状态机，沉浸感与交互流畅度表现优异；',
                '针对游戏场景打造悬浮球极简低打扰交互与一键静音/开关设计，验证单人敏捷落地游戏 AI 伴侣的可行性。'
              ],
              outputTitle: '项目产出',
              output: '形成可运行的桌面应用、公开源码及安装说明，持续围绕交互、游戏功能和模型接入进行迭代。',
              disclaimer: '本项目为免费、非官方、非商业化玩家二创。',
              tags: ['LLM 对话', '角色 Prompt', '本地记忆', 'TTS', '桌面交互'],
              actions: [
                { label: '查看源码', url: 'https://github.com/joearkon/velina-pet', type: 'github' },
                { label: '查看演示', url: 'https://github.com/joearkon/velina-pet#readme', type: 'demo' }
              ]
            },
            {
              id: 'proj-store-vision',
              name: '门店视觉巡检',
              category: '视频与图片智能核验',
              role: '产品设计、应用开发与样本验证',
              badge: 'Web 交互体验',
              badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
              imageSrc: projectImages.storeVision,
              imageAlt: '巡检事件与画面证据，合成样本演示',
              imageCaptionZh: '巡检事件与画面证据，合成样本演示：物料陈列与缺陷标注（置信度 94.2%）、思考链与整改单',
              imageCaptionEn: 'Inspection events & visual evidence, synthetic sample verification & dispatch',
              overview: '面向餐饮门店巡检场景，构建视频分析、图片标准核验、事件证据和人工处理流程，将视觉模型结果转化为可查看、可核查的业务信息。',
              responsibilitiesTitle: '我的职责',
              responsibilities: [
                '负责连锁门店巡检痛点梳理与产品定义，设计素材上传、视频分帧抽检、多模态视觉判定到事件证据聚合全链路流程。',
                '负责多模态 Prompt 调优与合成正反样本集构建，针对穿戴违规、违规开门与烟雾等场景开展召回率/误报率复盘。',
                '设计「逐帧 vs 双层分析架构」评测对比，在保证识别效果的前提下平衡处理时间与 Token 调用成本。'
              ],
              myWorkTitle: '核心工作与架构演进',
              myWork: [
                '设计素材上传、视频抽帧、视觉判定、多帧事件聚合和证据查看流程。',
                '围绕持续开门、穿戴及烟雾等场景开展合成正反样本验证，记录历史错误并用于复盘。',
                '比较逐帧与双层分析方式的事件结果和调用用量，考虑识别效果、处理时间与成本之间的取舍。',
                '将菜单品名、价格等要求转为图片检查项，区分通过、不通过、人工核查和补拍。',
                '接入门店、SOP、事件及分析任务查询工具，保存会话、模型用量和工具调用记录。',
                '设计任务状态、失败提示与重复请求保护，并开展飞书分级告警联调。'
              ],
              achievementsTitle: '我的产品项目成果',
              achievements: [
                '独立落地具备商用验证价值的 Web 交互展示与本地真实多模态分析管线，全流程贯通证据提取到工单分发；',
                '首创「双层分析架构」，在保证 94.2% 高置信度缺陷检出的同时大幅压降多模态 Token 调用成本；',
                '构建物料陈列、穿戴合规、设备异常与工单推送全链路闭环，为连锁门店智慧视觉巡检提供了轻量化落地方案。'
              ],
              outputTitle: '项目产出',
              output: '形成 Web 产品展示、本地真实模型分析流程，以及可复核的样本、事件和调用记录。',
              disclaimer: '线上链接用于产品展示，真实模型分析在本地服务执行。',
              tags: ['多模态模型', '视频分析', '图片核验', '工具调用', '样本复盘'],
              actions: [
                { label: '查看产品展示', url: 'https://store-vision-inspection-static.pages.dev/#/agent', type: 'demo' },
                { label: '查看项目说明', url: 'https://github.com/joearkon/store-vision-inspection', type: 'github' }
              ]
            },
            {
              id: 'proj-inventory-closure',
              name: '餐饮智能助手',
              category: '库存研判与门店操作闭环',
              role: '产品设计、应用开发与业务规则整理',
              badge: '总部与移动端闭环',
              badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
              imageSrc: projectImages.inventoryClosure,
              imageAlt: '总部收货、移动盘点与后续核查流程',
              imageCaptionZh: '总部收货、移动盘点与后续核查流程：可信度仪表盘、AI 根因假设与拍照 OCR 盘点',
              imageCaptionEn: 'HQ receiving, mobile stocktake & follow-up verification workflow',
              overview: '直面连锁门店“账实脱节、盲目订货造成高报损、异常研判无法在现场闭环”深水区痛点。连接总部后台与移动工作台，将库存事实、规则研判、业务单据和人工核查组织成连续闭环。',
              responsibilitiesTitle: '我的职责',
              responsibilities: [
                '直面连锁门店深水区痛点，架构「确定性规则引擎 + AI Agent 深度研判 + 门店现场执行」三层智能闭环体系。',
                '首创「库存可信度分级（高/中/低）与自适应订货机制」，在实盘缺失或数据不可信时自动触发降级推荐订货。',
                '设计门店移动端一体化现场盘点流，集成拍照 OCR 置信度纠错、语音交互与断点续盘，以事实包打通工单部分完成到自动重算闭环。'
              ],
              myWorkTitle: '核心工作与架构演进',
              myWork: [
                '根据销售、BOM、收货、报损、调拨和盘点形成库存事实链，保留数据来源及业务单据关联。',
                '设计负库存、实盘差异、安全库存和销入比等规则，区分异常事实与原因判断。',
                '实现订货草稿、分批收货、盘点审核、库存校准及跟进工单，衔接库存重算与人工关闭。',
                '设计中文、英文、印尼语输入，结合语音转写、多轮草稿、单位换算及提交前确认，减少门店操作中的重复输入。',
                '为大模型研判组织事实包，开展行业 Knowhow 增强对照实验，分别展示业务事实、模型假设和待核查证据。',
                '明确模型与业务系统的边界，坚守“AI 只给建议、不越权改账改库存”的安全红线。'
              ],
              achievementsTitle: '我的产品项目成果',
              achievements: [
                '完成总部深蓝后台与门店移动端一体化交互原型闭环，输出 17 节高标准业务方案冻结文档；',
                '将传统割裂的“盘点一张表”升级为“由异常驱动、现场 2 分钟极速定向盘点、盘完即触发重算与订货校准”的全新作业范式；',
                '开创连锁餐饮供应链「可解释、防失控、强审计」的企业级 Agentic 工作流标杆，具备极高商业化推展与技术复用价值。'
              ],
              outputTitle: '项目产出',
              output: '形成总部与移动端演示系统、业务单据和库存闭环，并维护规则、流程与回归测试记录。',
              tags: ['餐饮 SaaS', '库存规则', '语音输入', '知识增强', '人机协作'],
              actions: [
                { label: '查看产品展示', url: 'https://github.com/joearkon/inventory-count-closure', type: 'demo' },
                { label: '查看项目说明', url: 'https://github.com/joearkon/inventory-count-closure#readme', type: 'github' }
              ]
            },
            {
              id: 'proj-worldcup-predict',
              name: '世界杯赛事分析与预测记录',
              category: '赛事信息、分析报告与赛后复盘',
              role: '产品构建、分析框架与内容维护',
              badge: '数据产品 · 复盘记录',
              badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
              imageSrc: projectImages.quantPredict,
              imageAlt: '赛程、分析报告与结果对照',
              imageCaptionZh: '赛程、分析报告与结果对照：101 场实战 79.2% 胜率回测曲线与置信区间',
              imageCaptionEn: 'Match schedules, analytical reports & empirical backtests',
              overview: '围绕赛程、球队信息、赛前判断和赛后复盘构建赛事分析网站，将分析报告、预测结果与实际结果组织为可回看的记录。',
              responsibilitiesTitle: '我的职责',
              responsibilities: [
                '负责构建基于 Claude Code 与大模型推理驱动的动态赔率与多维特征交叉评估框架。',
                '负责 101 场淘汰赛预测数据清洗、逐场赛前报告生成与赛后复盘分析流搭建。',
                '独立维护赛事分析开源站点与代码仓库。'
              ],
              myWorkTitle: '核心工作与架构演进',
              myWork: [
                '设计赛程、独立报告、淘汰赛对阵树及统计展示。',
                '整理球队画像、比赛条件和分析维度，记录赛前判断依据。',
                '对照预测与结果，整理错误类型和判断变化，持续调整分析框架。',
                '维护独立站、报告和代码记录，使分析过程与复盘能够连续更新。'
              ],
              achievementsTitle: '我的产品项目成果',
              achievements: [
                '2026 世界杯淘汰赛阶段 101 场实战预测方向达成 79.2% 高准确率，工程化验证了 LLM 结合动态特征模型的推理效能；',
                '沉淀完整回测曲线与置信区间看板，验证了敏捷构建垂直领域分析智能体的闭环能力。'
              ],
              outputTitle: '项目产出',
              output: '形成赛事分析网站、逐场报告与复盘记录，实践数据组织、信息展示和持续反馈。',
              tags: ['数据产品', '赛事分析', '报告展示', '结果复盘', '独立站'],
              actions: [
                { label: '查看赛事预测网站', url: 'https://worldcup2026.kunkun1023.xyz/', type: 'demo' },
                { label: '查看 GitHub 源码', url: 'https://github.com/joearkon/worldcup2026-predictions', type: 'github' }
              ]
            },
            {
              id: 'proj-ashare-analyzer',
              name: '股票研究与大模型辅助分析工具',
              category: '数据整理、证据展示与研究工作台',
              role: '产品设计与工具开发',
              badge: '研究工作台 · 原型',
              badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
              imageSrc: projectImages.b2bPayment,
              imageAlt: '研究看板中的数据、时间与证据展示',
              imageCaptionZh: '研究看板中的数据、时间与证据展示：时序序列研判与自动化抽取',
              imageCaptionEn: 'Data, timestamp & evidence visualization in financial research board',
              overview: '围绕市场信息、结构化数据和分析展示，开发研究工具与看板，尝试减少信息整理、重复查询和报告生成中的手工工作。',
              responsibilitiesTitle: '我的职责',
              responsibilities: [
                '负责多模态研报 PDF 自动化解析与非结构化数据清洗管线设计。',
                '结合 Claude Code 与多推理模型构建财务指标规则计算与大模型交叉研判提示词链。',
                '独立完成前端可视化看板与交互原型开发，支持多维度研报横向对比。'
              ],
              myWorkTitle: '核心工作与架构演进',
              myWork: [
                '组织数据获取、清洗、指标计算和可视化展示流程。',
                '区分确定性数据、规则判断与模型解释，保留数据时间、来源和缺失状态。',
                '在研究原型中设计不同用户任务入口，减少用户从大量指标中自行寻找结论的负担。',
                '根据使用反馈调整查询路径、分析模板、异常提示和结果展示。',
                '积累可复用的数据适配、分析工具、Prompt 与测试记录。'
              ],
              achievementsTitle: '我的产品项目成果',
              achievements: [
                '开源发布可运行的数据分析工作流与可视化看板，构建研报自动化解析与核心指标结构化提取管线；',
                '结合 Claude Code 与深度推理大模型实现指标规则计算与非结构化研报交叉比对，显著提升研报研判效率与客观性。'
              ],
              outputTitle: '项目产出',
              output: '形成研究看板、分析工具和 SaaS 原型，实践数据与大模型结合的产品设计。',
              tags: ['数据处理', '规则计算', '大模型解释', '可视化', '研究工具'],
              actions: [
                { label: '查看公开作品', url: 'https://github.com/joearkon/a-share-analyzer', type: 'demo' },
                { label: '查看项目说明', url: 'https://github.com/joearkon/a-share-analyzer#readme', type: 'github' }
              ]
            }
          ]
        },
        {
          groupId: 'proj-group-enterprise',
          groupTitleZh: '二、企业项目 (商业级工业化落地 · 产品成就矩阵)',
          groupTitleEn: '2. Commercial Products & Enterprise Projects (Production Scale & Achievements)',
          groupSubtitleZh: '十年连锁餐饮 SaaS 与企业数字化标杆，覆盖 5000+ 门店及核心发明专利',
          groupSubtitleEn: 'Over 10 years of flagship enterprise SaaS deployments covering 5,000+ stores & patents',
          badgeZh: '商业落地 · 产品成就矩阵',
          badgeEn: 'Enterprise Scale · Achievements',
          badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
          projects: [
            {
              id: 'prod-hipos',
              name: '喜茶 HiPOS 全渠道履约收银与门店协同系统',
              category: '门店交易与全渠道履约中枢 · 高并发微服务 · 端云协同容灾',
              role: '产品规划人',
              badge: '标杆核心产品',
              badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
              overview: '直面新茶饮高峰期海量并发排队、外卖与小程序多渠道挤占、高峰容易卡单与出单错漏等严苛挑战，打造高并发、高可用、全渠道一体化的门店收银与履约协同中枢。覆盖全国 800+ 直营门店。',
              responsibilitiesTitle: '我的职责',
              responsibilities: [
                '负责「渠道接入 -> POS统一中台 -> 资金结算 -> 能力开放」四阶段全链路产品规划与阶段交付推进。',
                '主导线上喜茶小程序订单定向 POS 终端的智能接单路由，设计定制化小票与杯贴 XML 模板引擎。',
                '将打印与硬件调度抽象解耦为独立高性能微服务（uprint/ulabel），并建立端云协同容灾离线运行机制。',
                '统筹全国 800+ 直营门店分批割接总控，协调业务、研发与现场实施三方攻坚保障高峰业务连续性。'
              ],
              myWorkTitle: '核心工作与架构演进',
              myWork: [
                '梳理小程序、外卖第三方、门店收银及自营渠道全生命周期订单流，规范接单、拆单、打印和现场履约全环节。',
                '主导 POS 终端与云端订单中心双向同步机制，在网络抖动或断网极端情况下保障本地收银离线可用。',
                '针对高峰期爆单定制分吧台精准出杯规范，实现杯贴秒级打印与制作工位智能协同。',
                '跟进高并发运行瓶颈与一线门店操作反馈，将总部标准化产品规则与门店高强度实操平滑咬合。'
              ],
              achievementsTitle: '我的产品项目成果',
              achievements: [
                '平稳支撑全国 800+ 直营门店日均百万杯、日峰值 10万+ 订单履约，系统出单故障率与错单率降至历史最低；',
                '实现「线上线下订单秒级定向路由、分吧台精准出杯」，奠定全国新茶饮行业收银与履约系统标杆；',
                '核心微服务 (uprint/ulabel) 与端云离线容灾架构实现 99.99% 高可用，支撑小红书爆款与促销爆单场景零宕机。'
              ],
              outputTitle: '项目沉淀与经验',
              output: '沉淀了超高并发零售收银架构、端云协同离线容灾，以及千店级核心系统平滑割接与标准化推广的方法论。',
              tags: ['HiPOS 架构', '微服务打印 (uprint/ulabel)', '端云协同容灾', '高并发交易', '全渠道履约']
            },
            {
              id: 'prod-mrp',
              name: '喜茶建议订货 (MRP) 智能补货与物耗闭环引擎',
              category: '供应链智能预测与损耗闭环 · 复杂依赖 DAG 决策 · 算法反馈飞轮',
              role: '产品规划人',
              badge: '核心创新引擎',
              badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
              overview: '针对鲜果、优质乳品、定制耗材等极短保质期原料，解决传统门店完全依赖店长主观经验订货导致的高报损与断货频发痛点，打通从销售预测到智能补货的全链路闭环。',
              responsibilitiesTitle: '我的职责',
              responsibilities: [
                '主导算法与产品模型演进，架构「营业额与销量预测 + 动态 BOM 配方物耗拆解 + 万元营业额耗材用量 + 新品冷启动预估」四维预测体系。',
                '首创设计「总部定规则 -> 系统算建议 -> 门店只处理例外必填原因 -> 经营指标反向验证」的正向反馈飞轮闭环。',
                '统筹全国千店千面参数配置中心，融合天气、节假日、促销活动等外部变量实现智能动态纠偏。',
                '协同营运部、供应链大仓与督导团队建立周度物耗对焦机制，将订货提报准时率与报损指标挂钩门店 KPI。'
              ],
              myWorkTitle: '核心工作与架构演进',
              myWork: [
                '深入全国多区域门店访谈店长与督导，将口耳相传的备货经验抽象为确定性数学规则与算法约束边界。',
                '将成品杯量预测通过动态 BOM 与折损系数精确转换为箱/包/公斤级原料订货单位，并设立动态安全库存水位。',
                '设计「系统建议订货量 -> 店长仅修改例外项并必选原因代码」的交互流，既保留现场灵活性又沉淀异常归因数据。',
                '建立算法模型效果评估看板与回归校验机制，驱动算法团队持续优化时序预测准确度。'
              ],
              achievementsTitle: '我的产品项目成果',
              achievements: [
                '推动全国门店下半年报损率与盘点差异率从 5.9% 显著压降至 3.9%，达成历史最优物耗控制水平；',
                '单店日均订货操作时间缩减 40 分钟/天，全国门店年化综合降本增效超千万元，构建餐饮连锁供应链闭环典范；',
                '订货提报准时率跃升至 99.2%，大仓生鲜原料缺货率下降 45%，实现供应链与门店营运的高效产销协同。'
              ],
              outputTitle: '项目沉淀与经验',
              output: '实现了将前沿预测算法落地为一线门店可理解、可信赖、愿执行的业务飞轮，验证了“人机协同 + 指标闭环”的数字化驱动模式。',
              tags: ['MRP 智能补货', '需求预测算法', '反馈飞轮机制', '万元营业额耗材模型', '损耗精细化控制']
            },
            {
              id: 'prod-bom-oms',
              name: '餐饮统一交易 OMS 与动态配方 BOM 拆解引擎',
              category: '云原生底层核心引擎与数据基座 · 复杂状态机 · 幂等事务补偿',
              role: '产品规划人',
              badge: '★ 国家发明专利',
              badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
              overview: '传统 ERP 静态物料清单无法满足现制餐饮丰富的客制化选配需求（如糖度、加料、冰度、换燕麦奶），导致实际原料消耗与账面完全脱节、交易事实多端冲突。为此规划并研发底层核心引擎。',
              responsibilitiesTitle: '我的职责',
              responsibilities: [
                '担任初创核心产品架构师与研发骨干，主导设计 OMS 全渠道交易订单全生命周期状态机（OPEN -> CHECKOUT -> WAITING -> PAYING -> SALE -> TICKET 快照）。',
                '首创打破传统 ERP 静态物料束缚，设计「基础配方 + 规格缩放 / 糖度减量 / 奶基底替换 / 加料新增 / 温度覆盖」的动态配方拆解算法引擎。',
                '确立订单幂等去重、异常事务分布式补偿机制，让每笔订单成为库存扣减、BOM 物耗拆解、财务对账与报表统计的唯一真实事实源。',
                '主导核心技术发明专利文书撰写与技术答辩，推动「动态配方拆解引擎」成功获批国家发明专利。'
              ],
              myWorkTitle: '核心工作与架构演进',
              myWork: [
                '梳理现制茶饮与烘焙全品类 SKU 规格、客制化属性组合与物料用量的拓扑映射关系，建立通用元数据模型。',
                '设计高并发订单拆解引擎的内存级缓存策略与异步事件总线，实现毫秒级物耗实时展开与入库。',
                '设计网络故障、支付超时、退单与取消等 20+ 类复杂异常场景的自动补偿逻辑，保障分布式数据最终一致性。',
                '封装标准 OpenAPI 接口，向 POS、小程序、ERP、供应链进销存等异构系统输出统一的交易与物料事实。'
              ],
              achievementsTitle: '我的产品项目成果',
              achievements: [
                '动态 BOM 配方拆解技术成功获批「国家发明专利」，成为公司核心技术壁垒与 SaaS 云平台底层支柱；',
                '奠定合阔 SaaS 全渠道 BOH 供应链与微服务底座，后续直接支撑喜茶、星巴克、DQ 等所有连锁大客户的精准物耗核算；',
                '确立统一交易唯一真实事实源，彻底杜绝跨系统物料扣减冲突与财务对账失真，支撑百亿级交易数据稳定运行。'
              ],
              outputTitle: '项目沉淀与经验',
              output: '深度融通了软件工程底层设计、高并发事务处理与餐饮消费核心商业逻辑，打造出具备自主知识产权的行业级底层引擎。',
              tags: ['国家发明专利', '动态 BOM 拆解', 'OMS 状态机', '事务补偿机制', '餐饮底层基石']
            },
            {
              id: 'prod-b2b-pay',
              name: '喜茶加盟商 B2B 支付中台与大额资金对账系统',
              category: '资金中台与多方对账结算 · 事实解耦 · 灰度切流防重扣',
              role: '产品规划人',
              badge: '资金中台典范',
              badgeColor: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30',
              overview: '喜茶开放特许加盟事业后，加盟商原物料订货、差异退补单笔资金高达数万至数十万元，原有供应链与支付强耦合极易引发重复扣款、退款混乱与财务对账失真。',
              responsibilitiesTitle: '我的职责',
              responsibilities: [
                '主导 BOH 供应链与喜茶支付中台的业务解耦架构：由 BOH 拥有订货、发货差异与退货等业务事实，支付中台负责实付扣款、手续费、补贴分摊与原路退款资金事实。',
                '协同设计按门店灰度切流路由机制，并在前端实现旧支付入口动态安全隐藏，彻底杜绝加盟商重复扣款风险。',
                '打通汇付天下网银 / U盾大额转账资金匹配流，搭建自动核销与异常勾稽处理通道。',
                '组织业务、支付中台、清算网关与财务团队多方联合评审、极端异常用例联调及全国加盟商分批切流。'
              ],
              myWorkTitle: '核心工作与架构演进',
              myWork: [
                '梳理特许加盟商“订货要货-大仓缺货退款-实物少送补差-整批退货”全生命周期中单据状态与资金流转的时序依赖。',
                '设计防重扣幂等锁与状态机拦截网关，在加盟商重复点击或网络重试时精准识别并阻断无效支付请求。',
                '建立多方对账自动化勾稽引擎，每日凌晨自动比对银行清算流水、支付中台交易单与供应链出入库凭证。',
                '针对大额支付失败、长款短款等边缘异常设计人工介入仲裁工单流与财务审计凭据存证。'
              ],
              achievementsTitle: '我的产品项目成果',
              achievements: [
                '实现全国加盟商数千万级流水日终与 JDE 财务账 100% 自动化闭环对账，资金差异率降至 0；',
                '杜绝加盟商订货、退货多环节重复扣款与退款混乱风险，彻底解决跨系统对账周期长达数周的深水区痛点；',
                '保障特许加盟业务规模化高速拓展中的资金合规与财务审计安全，成为大型特许连锁 B2B 结算标杆方案。'
              ],
              outputTitle: '项目沉淀与经验',
              output: '积累了高额度 B2B 资金中台设计、跨组织复杂账务处理、支付网关集成与生产级系统灰度割接的综合实战经验。',
              tags: ['业务与资金解耦', 'B2B 资金中台', '汇付天下 PayFac', 'JDE 自动对账', '防重复扣款']
            },
            {
              id: 'prod-jiujiuya',
              name: '久久丫 · 顶誉集团 3000+ 门店数字化业务中台',
              category: '千店级全域数字化业务中台 · 59 套异构系统集成 · 平滑割接',
              role: '项目总负责人',
              badge: '千店中台标杆',
              badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
              overview: '针对顶誉集团旗下久久丫、留夫鸭等全国 3000+ 门店直营与加盟并存、多套存量孤岛系统割裂、价格促销不统一、加盟对账周期长达数周等系统性难题，规划打造统一业务中台底座。',
              responsibilitiesTitle: '我的职责',
              responsibilities: [
                '常驻嘉善供应链生产基地与上海总部，历经 71 天跨 7+ 核心业务部门驻场深度调研，梳理 120+ 流程泳道图，输出业务中台落地蓝图。',
                '规划设计「商品、库存、订单、价格、结算、订货」六大业务中台中心，构建千店千价秒级生效的价格促销引擎与加盟订货门户。',
                '在客户阿里云私有化混合云环境中攻克 59 个存量异构系统接口互联，实现主数据标准统一与实时状态流转。',
                '制定「单店打样跑通 -> 片区集群验证 -> 全国 6 批次推进」的稳健割接策略，统筹指挥室与应急回滚演练。'
              ],
              myWorkTitle: '核心工作与架构演进',
              myWork: [
                '走访直营营运、加盟管理、采购大仓、中央工厂、财务审计与 IT 运维各部门，识别历史孤岛系统的核心冲突点。',
                '统一顶誉集团全品类商品 SKU 编码、主数据标准与千店千价生效机制，支持不同片区与加盟等级差异化控价。',
                '针对短保卤味冷链配送时效要求极高的特性，自研设计加盟商移动端敏捷订货门户与大仓排单集成。',
                '搭建覆盖全国各省分公司的实施交付与店长实操认证体系，保障割接前 100% 关键岗位培训覆盖。'
              ],
              achievementsTitle: '我的产品项目成果',
              achievements: [
                '全国 3000+ 门店分 6 批次实现零故障平滑割接，保障久久丫 1000+、留夫鸭 500+ 等门店营业与供应链连续稳定；',
                '加盟商订货履约周期大幅缩减，总部财务结算对账效率提升 80%+，全面实现单店日清日结；',
                '打通门店要货与中央工厂排产，供应链库存周转率提升超 15%，获顶誉集团高管团队高度认可。'
              ],
              outputTitle: '项目沉淀与经验',
              output: '展现了大型复杂集团全域业务梳理、多异构系统治理割接、百人级跨部门协同与商业交付兜底的核心操盘实力。',
              tags: ['六大业务中台中心', '千店千价促销引擎', '加盟供应链门户', '私有化云部署', '59系统互联']
            },
            {
              id: 'prod-tamjai',
              name: '谭仔国际 (TamJai) 全球化智能客服与工单协同平台',
              category: '跨国连锁数字化运维与客户服务 · WhatsApp + Zendesk · 跨时区 SLA 智能路由',
              role: '项目总负责人',
              badge: '跨国全域运营',
              badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
              overview: '谭仔国际全球多国连锁扩张过程中，面临跨时区时差、多语言沟通壁垒、跨国门店报修排障响应迟缓、以及现场 Issue 难以实时跟踪归档的运维痛点。',
              responsibilitiesTitle: '我的职责',
              responsibilities: [
                '以海外高渗透率的 WhatsApp Business 为核心入口，从 0 规划并落地基于 Zendesk 的跨国多语种客服与工单协同平台。',
                '配置跨时区智能技能组路由、分级 SLA 预警响应规则与自动化常见问题（FAQ）多语种问答知识库。',
                '建立海外 Issue 报修总览可视化看板与统一事件处理生命周期 SOP，打通与产研团队的缺陷反馈流。',
                '统筹跨国本地化支持团队排班、多语言服务质量考核及定期向集团管理层输出数字化运营复盘报告。'
              ],
              myWorkTitle: '核心工作与架构演进',
              myWork: [
                '梳理香港、新加坡、日本、澳洲、马来西亚、菲律宾各区域门店软硬件设备报修分类与紧急度矩阵。',
                '利用 WhatsApp Webhook 与 Zendesk REST API 搭建双向会话桥接，实现一线店员免装复杂系统极速提报。',
                '设计跨时区排班自动流转机制，确保非营业时段紧急事件无缝交接至在岗区域技术团队。',
                '提炼一线门店高频缺陷与共性痛点，驱动底层 SaaS 产品进行 10+ 项核心功能国际化标准化重构。'
              ],
              achievementsTitle: '我的产品项目成果',
              achievements: [
                '成功赋能港、新、日、澳、马、菲等多国数百家连锁门店，海外工单平均响应与闭环解决时效大幅提升 50%；',
                '建立跨国门店软硬件故障统一 SOP 与可视化监控，跨时区跨语言沟通损耗降低 60%；',
                '沉淀跨国连锁标准化数字化交付与运维体系方案，有力反哺国内 SaaS 产品出海版本迭代与售前拓展。'
              ],
              outputTitle: '项目沉淀与经验',
              output: '沉淀了海外多语种产品本地化适配、跨时区全球协作运维，以及出海数字化服务产品化的宝贵实战资产。',
              tags: ['Zendesk + WhatsApp', '全球化多语种', '跨时区智能路由', 'Issue 可视化', 'SLA 体系']
            }
          ]
        },
        {
          groupId: 'proj-group-media',
          groupTitleZh: '三、自媒体与内容深度创作 (小红书&抖音)',
          groupTitleEn: '3. Personal Media & Deep Video Content Practice',
          groupSubtitleZh: '个人独立创作｜小红书与抖音，聚焦游戏动漫原创剧情与二创剧本，全流程独立制作',
          groupSubtitleEn: 'Solo creator practice on Xiaohongshu & Douyin, focusing on original game/anime storylines, scriptwriting & full-pipeline video production',
          badgeZh: '个人创作 · 小红书与抖音',
          badgeEn: 'Creator Practice',
          badgeColor: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/30',
          projects: [
            {
              id: 'proj-aigc-content',
              name: '游戏动漫原创剧情与二创深度创作',
              category: '个人自媒体创作｜小红书与抖音',
              role: '全流程独立创作者（人设 / 编剧 / 分镜 / 镜头制作 / 剪辑）',
              badge: '小红书 & 抖音独立创作',
              badgeColor: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/30',
              imageSrc: projectImages.mediaCreations,
              imageAlt: '代表作品与制作过程',
              imageCaptionZh: '代表作品与制作过程：使用 Liblib、Seedance 等主流视频创作平台，从人物设定、剧情脚本、镜头制作到剪辑全部独立完成',
              imageCaptionEn: 'Representative creations: Using Liblib, Seedance and video tools—solo delivery from character design, script, camera framing to final editing',
              overview: '主要聚焦在游戏动漫原创剧情、二创剧本以及深度创作上。借助 Liblib、Seedance 等主流视频创作平台，从人物设定、剧情创作、脚本制作、镜头制作以及剪辑全部由个人独立闭环完成。',
              responsibilitiesTitle: '我的职责',
              responsibilities: [
                '负责全流程独立创作闭环：涵盖游戏动漫角色人物设定、世界观延展与深度二创剧情策划。',
                '负责文学脚本与分镜剧本撰写：精细化设计情节冲突、对白台词、镜头运动轨迹与情绪节奏。',
                '运用 Liblib、Seedance 等主流视频创作平台完成多角度镜头生成、画面张力把控与全片剪辑合成。'
              ],
              myWorkTitle: '核心创作链路与独立制作',
              myWork: [
                '人物设定与世界观构建：提炼游戏角色性格内核与美学特质，定制特色化人设与视觉风格。',
                '剧情创作与脚本编写：构思多幕式戏剧冲突、高潮反转与分镜对白，强化叙事沉浸感与情感共鸣。',
                '镜头制作与动态视效：运用 Liblib、Seedance 等平台精准调度机位视点、光影构图与人物动态表现。',
                '全片剪辑与视音频后期：独立完成画面剪辑、节奏把控、配乐音效融合与多平台发布适配。'
              ],
              achievementsTitle: '我的产品项目成果',
              achievements: [
                '实现从人物设定、剧情创作、脚本制作、镜头制作到最终剪辑 100% 个人独立完成，验证了单人高效产出高质感叙事短片的可行性；',
                '深耕游戏动漫原创剧情与二创剧本深度创作，小红书与抖音全网积累数万真实互动与播放，获得核心圈层玩家的高粘性好评；',
                '沉淀出一套结合 Liblib、Seedance 等主流平台的工业化微短剧/二创视听制作工作流，深刻理解叙事脚本与创作者工具的产品需求。'
              ],
              outputTitle: '创作沉淀与价值',
              output: '聚焦在剧本故事深度与视听视角的掌控，从一线创作者视角深刻理解故事叙事、用户情绪共鸣与 AI 视频创作工具的产品化演进需求。',
              tags: ['原创剧情', '二创剧本', '人物设定', '脚本制作', '镜头制作', '后期剪辑', 'Liblib / Seedance', '小红书 / 抖音'],
              actions: [
                { label: '查看小红书', url: 'https://www.xiaohongshu.com/user/profile/5c0213aa6b58b724ed0a49ce', type: 'primary' },
                { label: '查看抖音', url: 'https://v.douyin.com/9rcj4rkPCEg/', type: 'secondary' },
                { label: '查看代表作品', url: 'https://v.douyin.com/9rcj4rkPCEg/', type: 'demo' }
              ]
            }
          ]
        }
      ]
    },
    en: {
      titlePrefix: '',
      titleHighlight: 'Representative Projects',
      subtitle: 'Categorized into personal AI applications, commercial products, and content practice—showcasing recent tech explorations, enterprise deliveries, and creator workflows.',
      previewTip: 'Click image to view fullscreen preview',
      groups: [
        {
          groupId: 'proj-group-personal',
          groupTitleZh: '1. Personal AI & Open Source Projects',
          groupTitleEn: '1. Personal AI & Open Source Projects',
          groupSubtitleZh: 'Product design, application development, and sample validation for AI agents and tools',
          groupSubtitleEn: 'Product design, application development, and sample validation for AI agents and tools',
          badgeZh: 'Personal AI',
          badgeEn: 'Personal AI · Open Source',
          badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
          projects: [
            {
              id: 'proj-verina-pet',
              name: 'Verina Desktop Companion',
              category: 'Gaming Companion & AI Conversation Assistant',
              role: 'Product Design, App Development & Maintenance',
              badge: 'Windows Desktop Pet',
              badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
              imageSrc: projectImages.velinaPet,
              imageAlt: 'Desktop companion interactions & settings',
              imageCaptionZh: '桌宠交互与使用设置：角色情绪状态机、流式 TTS 音频与长短时记忆上下文',
              imageCaptionEn: 'Desktop companion interactions & settings',
              overview: 'Windows desktop companion developed for Zenless Zone Zero players, integrating character interaction, AI dialogue, game info queries, and timers across desktop and in-game floating widgets.',
              responsibilitiesTitle: 'My Responsibilities',
              responsibilities: [
                'Full lifecycle product ownership: user research, prototype design, prompt engineering, and native Windows client architecture.',
                'Designed character dialogue personas, emotion state machines, and streaming TTS audio synthesis pipelines.',
                'Implemented client-side persistent memory with granular privacy controls and game data context injection.'
              ],
              myWorkTitle: 'Core Architecture & Key Work',
              myWork: [
                'Designed desktop companion, tray menu, first-run wizard, and settings based on companion, query, and energy reminder needs.',
                'Organized character prompts and injected in-game battery, tuning, logs, and combat stats into context to ground conversations.',
                'Built explicit permission-based local memory with review, selective forgetting, and purge.',
                'Integrated speech playback and TTS, handling model exceptions with text fallbacks.',
                'Designed unobtrusive floating widget and low-distraction interactions with Windows installer distribution.'
              ],
              achievementsTitle: 'Product & Project Achievements',
              achievements: [
                'Independently launched open-source Windows application with comprehensive documentation, adopted by active gaming community;',
                'Delivered sub-second streaming voice generation, local privacy memory, and expressive emotion FSM transitions with high immersion;',
                'Pioneered in-game floating widget overlay with one-click mute/toggle, proving solo rapid delivery of gaming AI companions.'
              ],
              outputTitle: 'Project Output',
              output: 'Produced runnable desktop app, public source code, and installation guides, continuously iterating on UX, gameplay features, and model integrations.',
              disclaimer: 'This project is a free, unofficial, non-commercial player derivative work.',
              tags: ['LLM Dialogue', 'Character Prompt', 'Local Memory', 'TTS', 'Desktop UX'],
              actions: [
                { label: 'View Source', url: 'https://github.com/joearkon/velina-pet', type: 'github' },
                { label: 'View Demo', url: 'https://github.com/joearkon/velina-pet#readme', type: 'demo' }
              ]
            },
            {
              id: 'proj-store-vision',
              name: 'Store Vision Inspection',
              category: 'Video & Image Smart Verification',
              role: 'Product Design, Development & Sample Validation',
              badge: 'Web Interactive Experience',
              badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
              imageSrc: projectImages.storeVision,
              imageAlt: 'Inspection events & visual evidence, synthetic sample verification',
              imageCaptionZh: '巡检事件与画面证据，合成样本演示：物料陈列与缺陷标注（置信度 94.2%）、思考链与整改单',
              imageCaptionEn: 'Inspection events & visual evidence, synthetic sample verification',
              overview: 'Built video analysis, image SOP verification, event evidence, and human review workflows for F&B store audits, converting vision model outputs into auditable business insights.',
              responsibilitiesTitle: 'My Responsibilities',
              responsibilities: [
                'Defined product problem space and user journeys for store audits, designing media upload, sampling, multimodal inference, and dispatch.',
                'Engineered multimodal prompts, synthetic test datasets, and benchmarked precision/recall across uniform, door, and hazard rules.',
                'Evaluated single-frame vs. two-tier hierarchical inspection architectures to optimize detection latency and token economics.'
              ],
              myWorkTitle: 'Core Architecture & Key Work',
              myWork: [
                'Designed media upload, frame sampling, vision inference, multi-frame event aggregation, and evidence review.',
                'Conducted synthetic positive/negative sample testing for door status, uniforms, and smoke, logging errors for post-mortems.',
                'Compared per-frame vs two-tier analysis across results and token usage to balance accuracy, latency, and cost.',
                'Converted menu items and pricing into image checklist items classifying pass, fail, manual review, or retake.',
                'Connected store, SOP, event, and analysis tools, saving conversation and token usage logs.',
                'Designed task states, failure prompts, deduplication, and Feishu tiered alert integrations.'
              ],
              achievementsTitle: 'Product & Project Achievements',
              achievements: [
                'Delivered commercial-ready web interactive showcase and local production-grade multimodal pipeline from evidence extraction to work orders;',
                'Architected two-tier hierarchical vision pipeline maintaining 94.2% high confidence defect detection while cutting token consumption significantly;',
                'Established end-to-end operational loop across item display, hygiene compliance, anomaly triggers, and ticket assignment.'
              ],
              outputTitle: 'Project Output',
              output: 'Delivered web product presentation, local real-model pipeline, and verifiable samples, events, and API call logs.',
              disclaimer: 'Online interactive preview serves as product presentation; real model runs locally.',
              tags: ['Multimodal Model', 'Video Analytics', 'Image Verification', 'Tool Calling', 'Sample Post-mortem'],
              actions: [
                { label: 'View Product Presentation', url: 'https://store-vision-inspection-static.pages.dev/#/agent', type: 'demo' },
                { label: 'View Documentation', url: 'https://github.com/joearkon/store-vision-inspection', type: 'github' }
              ]
            },
            {
              id: 'proj-inventory-closure',
              name: 'F&B Intelligent Assistant',
              category: 'Inventory Diagnosis & Store Operations Closed Loop',
              role: 'Product Design, Development & Business Rules Modeling',
              badge: 'HQ & Mobile Operational Loop',
              badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
              imageSrc: projectImages.inventoryClosure,
              imageAlt: 'HQ receiving, mobile stocktake & follow-up verification workflow',
              imageCaptionZh: '总部收货、移动盘点与后续核查流程：可信度仪表盘、AI 根因假设与拍照 OCR 盘点',
              imageCaptionEn: 'HQ receiving, mobile stocktake & follow-up verification workflow',
              overview: 'Tackled retail chain pain points where theoretical stock disconnects from reality, causing blind over-ordering and waste. Built HQ and mobile workbenches closing loops across facts, rules, documents, and manual verifications.',
              responsibilitiesTitle: 'My Responsibilities',
              responsibilities: [
                'Architected 3-tier intelligent architecture combining deterministic rule engine, LLM root-cause agent, and mobile store execution.',
                'Pioneered stock confidence scoring (high/med/low) and adaptive fallback replenishment when physical count data is uncertain.',
                'Engineered mobile on-site stocktaking flow integrating shelf photo OCR, multi-language voice input, and automated recalculation loops.'
              ],
              myWorkTitle: 'Core Architecture & Key Work',
              myWork: [
                'Constructed inventory fact chains across sales, BOM, receipts, losses, transfers, and audits with source document lineage.',
                'Designed negative stock, physical variance, safety buffer, and sales-to-purchase ratio rules separating facts from diagnoses.',
                'Implemented order drafts, split receipts, count approvals, stock adjustments, and ticket follow-ups with recalculation loops.',
                'Designed Chinese, English, and Indonesian voice input, multi-turn drafts, unit conversions, and pre-submit validations.',
                'Structured fact packs for LLM diagnosis and conducted domain-knowledge benchmarking separating facts from hypotheses.',
                'Defined clear boundaries prohibiting models from directly modifying ledgers, assigning liability, or closing cases.'
              ],
              achievementsTitle: 'Product & Project Achievements',
              achievements: [
                'Completed unified HQ dark-navy web console and mobile UX prototypes, producing 17 standardized business specification modules;',
                'Upgraded traditional rigid full-count sheets into anomaly-triggered 2-minute targeted audits that instantly calibrate recommendations;',
                'Established an explainable, audit-compliant Agentic workflow benchmark for F&B supply chains with high commercial reuse value.'
              ],
              outputTitle: 'Project Output',
              output: 'Produced HQ & mobile demo systems, document loops, and regression test suites for business continuity.',
              tags: ['F&B SaaS', 'Inventory Rules', 'Voice Input', 'Knowledge Grounding', 'Human-in-the-Loop'],
              actions: [
                { label: 'View Product Presentation', url: 'https://github.com/joearkon/inventory-count-closure', type: 'demo' },
                { label: 'View Documentation', url: 'https://github.com/joearkon/inventory-count-closure#readme', type: 'github' }
              ]
            },
            {
              id: 'proj-worldcup-predict',
              name: 'World Cup Match Analysis & Forecasts',
              category: 'Match Info, Analytical Reports & Post-Match Reviews',
              role: 'Product Architecture, Framework & Content Maintenance',
              badge: 'Data Product · Review Archive',
              badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
              imageSrc: projectImages.quantPredict,
              imageAlt: 'Match schedules, analytical reports & empirical backtests',
              imageCaptionZh: '赛程、分析报告与结果对照：101 场实战 79.2% 胜率回测曲线与置信区间',
              imageCaptionEn: 'Match schedules, analytical reports & empirical backtests',
              overview: 'Constructed tournament analytics site around match schedules, team profiles, pre-match reasoning, and post-game reviews into an auditable archive.',
              responsibilitiesTitle: 'My Responsibilities',
              responsibilities: [
                'Architected quantitative match evaluation framework combining dynamic odds feature modeling with LLM reasoning agents.',
                'Managed end-to-end data pipelines for 101 tournament knockout matches, pre-game report generation, and post-match audits.',
                'Maintained open-source tournament analytics platform and reproducible model evaluation code.'
              ],
              myWorkTitle: 'Core Architecture & Key Work',
              myWork: [
                'Designed schedules, standalone reports, tournament knockout brackets, and statistical metrics.',
                'Curated team personas, pitch conditions, and evaluation dimensions to log pre-game decision rationales.',
                'Benchmarked predictions against outcomes, categorizing error types and refining analytical frameworks.',
                'Maintained standalone portal, reports, and code repositories for continuous historical updates.'
              ],
              achievementsTitle: 'Product & Project Achievements',
              achievements: [
                'Attained 79.2% directional forecast accuracy across 101 knockout matches, validating LLM reasoning combined with dynamic feature models;',
                'Published complete empirical backtesting curves and confidence intervals, proving agile delivery of vertical domain analysis agents.'
              ],
              outputTitle: 'Project Output',
              output: 'Produced tournament website, match reports, and review logs practicing data architecture and continuous feedback.',
              tags: ['Data Product', 'Tournament Analysis', 'Report Showcase', 'Outcome Post-mortem', 'Standalone Portal'],
              actions: [
                { label: 'View Tournament Forecast Site', url: 'https://worldcup2026.kunkun1023.xyz/', type: 'demo' },
                { label: 'View GitHub Source', url: 'https://github.com/joearkon/worldcup2026-predictions', type: 'github' }
              ]
            },
            {
              id: 'proj-ashare-analyzer',
              name: 'Equity Research & LLM Analysis Workbench',
              category: 'Data Ingestion, Evidence Display & Research Desk',
              role: 'Product Design & Tool Development',
              badge: 'Research Workbench · Prototype',
              badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
              imageSrc: projectImages.b2bPayment,
              imageAlt: 'Data, timestamp & evidence visualization in research dashboard',
              imageCaptionZh: '研究看板中的数据、时间与证据展示：时序序列研判与自动化抽取',
              imageCaptionEn: 'Data, timestamp & evidence visualization in research dashboard',
              overview: 'Developed research tools and dashboards around market sentiment, structured financial metrics, and visual evidence to minimize manual querying and synthesis.',
              responsibilitiesTitle: 'My Responsibilities',
              responsibilities: [
                'Engineered multimodal research report ingestion pipeline extracting unstructured financial statements into clean schema.',
                'Utilized Claude Code and reasoning agents to build automated cross-checking between quantitative rules and qualitative report narratives.',
                'Built frontend dashboard prototypes supporting multi-asset comparative visualizations.'
              ],
              myWorkTitle: 'Core Architecture & Key Work',
              myWork: [
                'Structured ingestion, cleaning, multi-factor calculations, and interactive visualizations.',
                'Distinguished deterministic figures, rule filters, and model explanations with explicit timestamps and provenance.',
                'Designed distinct task workflows in prototypes to reduce cognitive load across hundreds of market indicators.',
                'Iterated query routes, analytical templates, anomaly warnings, and reports based on hands-on usage feedback.',
                'Accumulated reusable data connectors, analytical prompts, and testing suites.'
              ],
              achievementsTitle: 'Product & Project Achievements',
              achievements: [
                'Open-sourced fully operational equity research ingestion pipeline and interactive dashboard;',
                'Combined deterministic indicator engines with LLM reasoning agents, substantially accelerating analyst report synthesis.'
              ],
              outputTitle: 'Project Output',
              output: 'Built research dashboard, analytical tools, and SaaS prototype merging quantitative figures with LLM insights.',
              tags: ['Data Processing', 'Rule Engine', 'LLM Interpretation', 'Visualization', 'Research Tool'],
              actions: [
                { label: 'View Public Works', url: 'https://github.com/joearkon/a-share-analyzer', type: 'demo' },
                { label: 'View Documentation', url: 'https://github.com/joearkon/a-share-analyzer#readme', type: 'github' }
              ]
            }
          ]
        },
        {
          groupId: 'proj-group-enterprise',
          groupTitleZh: '2. Commercial Products & Enterprise Projects',
          groupTitleEn: '2. Commercial Products & Enterprise Projects',
          groupSubtitleZh: 'Over 10 years of flagship enterprise SaaS deployments covering 5,000+ stores & patents',
          groupSubtitleEn: 'Over 10 years of flagship enterprise SaaS deployments covering 5,000+ stores & patents',
          badgeZh: 'Commercial Scale',
          badgeEn: 'Enterprise Scale',
          badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
          projects: [
            {
              id: 'prod-hipos',
              name: 'HEYTEA HiPOS Omnichannel POS & Store Execution System',
              category: 'Store POS & Omnichannel Execution Hub · High Concurrency · Edge-Cloud Resilience',
              role: 'Product Planner',
              badge: 'Flagship Core Product',
              badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
              overview: 'Tackled extreme peak rushes, aggregator queuing, and ticket congestion across 800+ direct-operated stores. Architected high-concurrency, edge-cloud resilient POS and store execution hub.',
              responsibilitiesTitle: 'My Responsibilities',
              responsibilities: [
                'Led end-to-end 4-stage product roadmap: channel ingress, unified POS middle-platform, financial settlement, and open platform capability.',
                'Designed intelligent store routing for WeChat mini-program orders, split-bar production printing, and XML cup-label template engines.',
                'Decoupled hardware scheduling into independent microservices (uprint/ulabel) and designed edge-cloud offline disaster recovery.',
                'Directed nationwide phased cutover across 800+ stores, aligning business stakeholders, R&D, and field teams.'
              ],
              myWorkTitle: 'Core Architecture & Key Work',
              myWork: [
                'Mapped omnichannel order lifecycles across third-party aggregators, POS registers, and mini-programs with strict state synchronization.',
                'Engineered edge-cloud offline operational mode allowing stores to ring up sales and print receipts seamlessly during network disconnects.',
                'Standardized station-level drink dispatching, achieving sub-second label printing and high-tempo bar synergy.',
                'Addressed live runtime bottlenecks and frontline feedback to align corporate specifications with intense store realities.'
              ],
              achievementsTitle: 'Product & Project Achievements',
              achievements: [
                'Seamlessly sustained nationwide 800+ direct stores with 1M+ cups/day and 100k+ peak daily orders, hitting historic low failure and error rates;',
                'Pioneered sub-second omni-channel order routing and split-bar precise fulfillment, establishing the gold standard for China new-tea retail;',
                'Microservice architecture (uprint/ulabel) with edge-cloud offline resilience achieved 99.99% availability during viral marketing campaigns.'
              ],
              outputTitle: 'Project Experience & Takeaway',
              output: 'Gained extensive production experience with peak-hour transaction routing, printing resilience, and chain store deployment.',
              tags: ['Store POS', 'Omnichannel Orders', 'Printing Engine', 'System Integration', 'Nationwide Rollout']
            },
            {
              id: 'prod-mrp',
              name: 'HEYTEA Suggested Ordering (MRP) & Dynamic Replenishment Engine',
              category: 'Supply Chain MRP & Closed-Loop Waste Reduction · High-Concurrency DAG · Algorithm Feedback Flywheel',
              role: 'Product Planner',
              badge: 'Core Innovation Engine',
              badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
              overview: 'Targeting short shelf-life fresh fruit and premium dairy, eliminated high spoilage and stockouts caused by store managers relying on guesswork. Built automated replenishment flywheel from sales forecasts to warehouse fulfillment.',
              responsibilitiesTitle: 'My Responsibilities',
              responsibilities: [
                'Architected 4D forecasting framework: sales & turnover forecasts + dynamic BOM explosion + sales-per-10k-revenue baseline + cold-start models.',
                'Pioneered the closed-loop flywheel: "HQ sets rules -> Algorithm computes suggestions -> Store handles exceptions with mandatory reason codes -> KPIs validate results".',
                'Orchestrated multi-store parameter configuration center incorporating weather, holidays, and marketing campaigns.',
                'Collaborated with operations and central warehouses to establish weekly ingredient reviews, tying replenishment accuracy to store KPIs.'
              ],
              myWorkTitle: 'Core Architecture & Key Work',
              myWork: [
                'Conducted field research across regional stores to codify implicit manager experience into deterministic mathematical rules and constraints.',
                'Converted finished drink volume forecasts into pack/box/kg raw material order units with dynamic safety stock thresholds.',
                'Designed intuitive exception-handling UI allowing manual adjustments only when accompanied by mandatory operational reason codes.',
                'Established algorithmic evaluation dashboards and regression testing to continuously calibrate demand model accuracy.'
              ],
              achievementsTitle: 'Product & Project Achievements',
              achievements: [
                'Slashed nationwide store spoilage and inventory variance rate from 5.9% to 3.9%, hitting historic optimal ingredient cost control;',
                'Reduced store manager daily ordering time by 40 minutes, generating over 10M RMB in annualized cost savings across all stores;',
                'Boosted order submission punctuality to 99.2% and cut warehouse fresh stockout rate by 45%, building a supply chain closed-loop benchmark.'
              ],
              outputTitle: 'Project Experience & Takeaway',
              output: 'Converted predictive algorithms into actionable store inventory suggestions connecting algorithms with operational feedback.',
              tags: ['Suggested Replenishment', 'Sales Forecasting', 'BOM', 'Unit Conversion', 'Store Feedback']
            },
            {
              id: 'prod-bom-oms',
              name: 'Unified Transaction OMS & Dynamic Recipe BOM Explosion Engine',
              category: 'Cloud-Native Foundation & Data Backbone · Complex State Machine · Idempotent Compensation',
              role: 'Product Planner',
              badge: '★ National Invention Patent',
              badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
              overview: 'Traditional static ERP BOMs fail to model rich customized food & beverage choices (sweetness, ice, toppings, milk substitutes), causing chronic inventory inaccuracies and transactional conflicts. Architected underlying cloud-native core engine.',
              responsibilitiesTitle: 'My Responsibilities',
              responsibilities: [
                'Core product architect and developer for OMS omnichannel transaction state machine (OPEN -> CHECKOUT -> WAITING -> PAYING -> SALE -> TICKET).',
                'Pioneered dynamic recipe explosion algorithm engine: base recipe + cup size scaling / sweetness deduction / base replacement / topping addition.',
                'Designed idempotent transaction deduplication and distributed compensation, making every order the sole source of truth for stock, BOM, and finance.',
                'Authored patent claims and technical disclosures, successfully securing a granted National Invention Patent.'
              ],
              myWorkTitle: 'Core Architecture & Key Work',
              myWork: [
                'Structured topological mappings between retail customizations, recipe parameters, and ingredient depletions into extensible meta-models.',
                'Engineered in-memory caching and asynchronous event bus handling peak transaction bursts with sub-second recipe explosion.',
                'Designed automated compensation logic covering 20+ edge failure modes (timeouts, network dropouts, cancellations) for eventual consistency.',
                'Exposed standard OpenAPI endpoints to POS, mini-programs, ERP, and supply chain modules as a unified source of truth.'
              ],
              achievementsTitle: 'Product & Project Achievements',
              achievements: [
                'Granted National Invention Patent, establishing the proprietary technology moat and foundational pillar for Harput Cloud SaaS;',
                'Formed the microservice backbone powering omnichannel BOH supply chain, accurately tracking ingredient usage for HEYTEA, Starbucks, DQ, etc.;',
                'Established the unified single source of transaction truth, eliminating cross-system inventory deduction conflicts and reconciliation gaps.'
              ],
              outputTitle: 'Project Experience & Takeaway',
              output: 'Transformed complex retail customizations into resilient data structures, calculation engines, and scalable workflows.',
              tags: ['OMS', 'Dynamic BOM', 'Order State Machine', 'Material Depletion', 'Core R&D']
            },
            {
              id: 'prod-b2b-pay',
              name: 'HEYTEA Franchisee B2B Payment & Capital Clearing Platform',
              category: 'Capital Middle-Platform & Multi-Party Clearing · Fact Decoupling · Canary Routing',
              role: 'Product Planner',
              badge: 'Capital Settlement Benchmark',
              badgeColor: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30',
              overview: 'Following HEYTEA’s franchise rollout, procurement orders and adjustments involved substantial sums. Tight coupling between supply chain and payment had triggered duplicate charges, messy refunds, and accounting discrepancies.',
              responsibilitiesTitle: 'My Responsibilities',
              responsibilities: [
                'Led architectural decoupling between BOH supply chain facts and payment monetary transactions: BOH owns orders, fulfillment variance, and returns; payment platform manages actual deductions, subsidies, and refunds.',
                'Designed store-level canary routing and frontend dynamic hiding of legacy payment portals, completely eliminating duplicate charge risks.',
                'Integrated Huifu PayFac enterprise banking channels with automated clearing channels to Oracle JDE financial ledger.',
                'Orchestrated multi-party reviews across operations, payment gateways, and accounting teams with phased franchisee cutovers.'
              ],
              myWorkTitle: 'Core Architecture & Key Work',
              myWork: [
                'Mapped temporal dependencies and financial lineages across the full lifecycle: franchisee order -> warehouse short-shipment refund -> adjustment -> return.',
                'Engineered idempotency locks and state interceptors preventing duplicate payments during frantic retries or network latency.',
                'Constructed multi-party automated clearing engine cross-matching bank settlement logs, payment gateway receipts, and warehouse vouchers.',
                'Designed human-in-the-loop dispute workflows and audit-compliant evidentiary archiving for edge payment exceptions.'
              ],
              achievementsTitle: 'Product & Project Achievements',
              achievements: [
                'Achieved 100% automated daily reconciliation between tens of millions in franchisee turnover and Oracle JDE general ledger with 0 discrepancy;',
                'Completely eliminated duplicate deduction risks during ordering and return adjustments, resolving weeks-long manual reconciliation bottlenecks;',
                'Guaranteed financial audit compliance and transaction security during rapid franchise expansion, setting a B2B clearing benchmark.'
              ],
              outputTitle: 'Project Experience & Takeaway',
              output: 'Gained deep expertise in business-financial fact decoupling, multi-party integrations, and mission-critical payment failovers.',
              tags: ['B2B Payment', 'System Integration', 'Refund Reconciliation', 'Canary Rollout', 'Fault Handling']
            },
            {
              id: 'prod-jiujiuya',
              name: 'Jiujiuya · Dingyu Group 3000+ Stores Business Middle-Platform',
              category: '3000+ Store Business Middle-Platform · 59 Legacy Systems Integration · Smooth Cutover',
              role: 'Overall Project Lead',
              badge: '3000+ Stores Flagship',
              badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
              overview: 'Faced with 3,000+ stores across Jiujiuya and Liufu Duck, fragmented legacy systems, erratic promotional pricing, and month-long franchisee reconciliation, architected unified business middle-platform infrastructure.',
              responsibilitiesTitle: 'My Responsibilities',
              responsibilities: [
                'Stationed at Jiashan supply base and Shanghai HQ, conducting 71 days of field discovery across 7 departments, charting 120+ swimlane workflows into enterprise blueprints.',
                'Architected 6 core middle-platform centers (item, inventory, order, pricing, settlement, ordering) with sub-second tiered promotional pricing engines.',
                'Connected 59 legacy heterogeneous systems within Alibaba Cloud private hybrid cloud, standardizing master data models.',
                'Formulated staged cutover strategy ("single store pilot -> regional cluster -> nationwide 6 batches") with command center simulation drills.'
              ],
              myWorkTitle: 'Core Architecture & Key Work',
              myWork: [
                'Interviewed direct store ops, franchise management, central factories, finance, and IT to isolate critical friction points in legacy siloed architectures.',
                'Standardized group SKU master data and tiered pricing rules, supporting dynamic pricing across geographic zones and franchise tiers.',
                'Designed mobile replenishment portal tailored for short-shelf-life deli items with central kitchen production schedule integration.',
                'Established training and certification curriculum covering regional branches to achieve 100% role readiness prior to live cutover.'
              ],
              achievementsTitle: 'Product & Project Achievements',
              achievements: [
                'Smooth cutover across 3,000+ stores in 6 staged rollouts with zero operational downtime, ensuring business continuity for Jiujiuya and Liufu Duck;',
                'Slashed franchisee replenishment lead time and boosted HQ financial reconciliation efficiency by 80%+, achieving daily store closing;',
                'Bridged store ordering with central kitchen scheduling, boosting supply chain turnover rate by 15%+, winning highest commendation from group leadership.'
              ],
              outputTitle: 'Project Experience & Takeaway',
              output: 'Mastered large-scale enterprise discovery, heterogeneous system bridge engineering, and multi-tier rollout management.',
              tags: ['Business Middle-Platform', 'Blueprint Architecture', 'Legacy Bridge', 'Pilot Cutover', 'Retail Chain']
            },
            {
              id: 'prod-tamjai',
              name: 'TamJai Global Intelligent Service & Work Order Platform',
              category: 'Global Chain Support & Ops · WhatsApp + Zendesk · Multi-Timezone SLA Routing',
              role: 'Overall Project Lead',
              badge: 'Global Chain Support',
              badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
              overview: 'During rapid overseas expansion across HK, Singapore, Japan, Australia, Malaysia, and Philippines, store operations faced language barriers, timezone lags, and slow equipment troubleshooting. Built intelligent global service desk.',
              responsibilitiesTitle: 'My Responsibilities',
              responsibilities: [
                'Built global multilingual support and ticket orchestration from scratch leveraging Zendesk and WhatsApp Business as primary touchpoints.',
                'Configured cross-time-zone smart skill routing, tiered SLA escalation rules, and multi-language self-service knowledge bases (FAQ bot).',
                'Constructed visual global issue dashboards and unified incident lifecycle SOPs, bridging store troubleshooting with SaaS engineering bug tracking.',
                'Managed global on-call rotation schedules, service quality reviews, and executive operational reporting.'
              ],
              myWorkTitle: 'Core Architecture & Key Work',
              myWork: [
                'Mapped hardware and software breakdown matrices across overseas regions, establishing clear urgency classifications.',
                'Constructed bidirectional conversation bridges using WhatsApp Webhook and Zendesk REST API, enabling zero-install mobile reporting for store staff.',
                'Engineered automated timezone handoff mechanisms ensuring emergency incidents pass seamlessly to on-duty regional engineering teams.',
                'Synthesized frontline feedback to drive 10+ core feature internationalizations in underlying SaaS products.'
              ],
              achievementsTitle: 'Product & Project Achievements',
              achievements: [
                'Empowered hundreds of stores across HK, Singapore, Japan, Australia, Malaysia, and Philippines, speeding up incident resolution by 50%;',
                'Standardized global hardware/software repair SOPs with visual dashboards, cutting cross-timezone communication friction by 60%;',
                'Formulated reusable overseas delivery and support frameworks, directly driving international SaaS product iterations and presales wins.'
              ],
              outputTitle: 'Project Experience & Takeaway',
              output: 'Gained international stakeholder coordination and cross-border SaaS localization experience.',
              tags: ['Global Collaboration', 'Support Desk', 'Ticket Routing', 'FAQ', 'SLA']
            }
          ]
        },
        {
          groupId: 'proj-group-media',
          groupTitleZh: '3. Personal Media & Deep Video Content Practice',
          groupTitleEn: '3. Personal Media & Deep Video Content Practice',
          groupSubtitleZh: 'Solo creator practice on Xiaohongshu & Douyin, focusing on original game/anime storylines, scriptwriting & full-pipeline video production',
          groupSubtitleEn: 'Solo creator practice on Xiaohongshu & Douyin, focusing on original game/anime storylines, scriptwriting & full-pipeline video production',
          badgeZh: 'Creator Practice',
          badgeEn: 'Creator Practice',
          badgeColor: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/30',
          projects: [
            {
              id: 'proj-aigc-content',
              name: 'Game & Anime Original Storytelling & Deep Creative Production',
              category: 'Solo Creator Practice | Xiaohongshu & Douyin',
              role: 'Full-Pipeline Solo Creator (Character Design / Scriptwriter / Storyboard / Camera Shots / Editing)',
              badge: 'Xiaohongshu & Douyin Creator',
              badgeColor: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/30',
              imageSrc: projectImages.mediaCreations,
              imageAlt: 'Representative creations & video production pipeline using Liblib and Seedance',
              imageCaptionZh: '代表作品与制作过程：使用 Liblib、Seedance 等主流视频创作平台，从人物设定、剧情脚本、镜头制作到剪辑全部独立完成',
              imageCaptionEn: 'Representative creations: Using Liblib, Seedance and video tools—solo delivery from character design, script, camera framing to final editing',
              overview: 'Focusing primarily on original game and anime storylines, derivative scriptwriting, and deep narrative production. Leveraging mainstream video creation platforms such as Liblib and Seedance, independently delivering the entire pipeline from character design, narrative plotting, scriptwriting, camera composition to final video editing.',
              responsibilitiesTitle: 'My Responsibilities',
              responsibilities: [
                'End-to-end solo creative ownership: Character visual design, lore expansion, and deep gaming/anime narrative plotting.',
                'Literary scriptwriting and storyboard composition: Designing dramatic conflicts, character dialogues, camera trajectories, and emotional beats.',
                'Visual generation and editing: Utilizing leading video platforms including Liblib and Seedance for camera framing, visual aesthetics, and post-production editing.'
              ],
              myWorkTitle: 'Core Creative Workflow & Solo Execution',
              myWork: [
                'Character Conception & Worldbuilding: Distilling game character lore and visual aesthetics into distinctive character guides.',
                'Plotting & Scriptwriting: Structuring multi-act dramatic arcs, narrative climaxes, and storyboard lines for immersive player resonance.',
                'Camera Framing & Visual Direction: Leveraging Liblib and Seedance to direct camera perspective, cinematic lighting, and character motion.',
                'Video Editing & Post-Production: Independently cutting footage, pacing rhythm, aligning audio/SFX, and publishing across social media.'
              ],
              achievementsTitle: 'Product & Project Achievements',
              achievements: [
                'Achieved 100% solo end-to-end delivery: Character design, narrative plotting, scriptwriting, camera framing, and final editing executed entirely independently;',
                'Amassed tens of thousands of authentic engagements across Xiaohongshu and Douyin, earning strong community recognition for narrative depth and pacing;',
                'Mastered leading generative video tools (Liblib, Seedance), gaining firsthand practitioner insights into storytelling and AI creator tooling.'
              ],
              outputTitle: 'Creative Takeaway & Value',
              output: 'Focused on narrative storytelling depth and cinematic visuals, providing authentic creator insights into player emotional engagement and next-gen AI video product design.',
              tags: ['Original Storyline', 'Derivative Script', 'Character Design', 'Scriptwriting', 'Camera Framing', 'Video Editing', 'Liblib / Seedance', 'Xiaohongshu / Douyin'],
              actions: [
                { label: 'View Xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/5c0213aa6b58b724ed0a49ce', type: 'primary' },
                { label: 'View Douyin', url: 'https://v.douyin.com/9rcj4rkPCEg/', type: 'secondary' },
                { label: 'View Showcase', url: 'https://v.douyin.com/9rcj4rkPCEg/', type: 'demo' }
              ]
            }
          ]
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="mihoyo-projects" className="py-14 bg-slate-50/70 dark:bg-slate-900/40 relative transition-colors duration-500 print:py-3 print:bg-white">
      <div className="max-w-6xl mx-auto px-4 print:px-0">
        {/* Section Header */}
        <div className="mb-10 text-center print:mb-3 print:text-left">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2 font-mono">
            PORTFOLIO & TRACK RECORD
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-slate-900 dark:text-white transition-colors duration-300 print:text-xl print:mb-1">
            {t.titlePrefix && <span>{t.titlePrefix} </span>}
            <span className="text-blue-600 dark:text-blue-400">{t.titleHighlight}</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed print:text-[9.5pt] print:text-slate-600 print:max-w-none">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Categories / Groups */}
        <div className="space-y-12 print:space-y-6">
          {t.groups.map((group) => (
            <div key={group.groupId} id={group.groupId} className="pt-2">
              {/* Group Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-6 border-b-2 border-slate-200 dark:border-slate-800 print:mb-2 print:pb-1">
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 print:text-base">
                    <span>{language === 'zh' ? group.groupTitleZh : group.groupTitleEn}</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 print:text-[8pt]">
                    {language === 'zh' ? group.groupSubtitleZh : group.groupSubtitleEn}
                  </p>
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border self-start sm:self-auto ${group.badgeColor} print:text-[8pt] print:px-2 print:py-0.5`}>
                  {language === 'zh' ? group.badgeZh : group.badgeEn}
                </span>
              </div>

              {/* Projects in this Group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-3">
                {group.projects.map((proj) => (
                  <div
                    key={proj.id}
                    id={proj.id}
                    className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between print:p-3 print:border-slate-300 print:shadow-none print:break-inside-avoid"
                  >
                    <div>
                      {/* Badges & Category Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${proj.badgeColor}`}>
                          {proj.badge}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                          {language === 'zh' ? `职责：${proj.role}` : `Role: ${proj.role}`}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center justify-between print:text-[11pt]">
                        <span>{proj.name}</span>
                      </h4>

                      <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-3">
                        {proj.category}
                      </p>

                      {/* Screenshot Visual Card (if available) */}
                      {proj.imageSrc && (
                        <div className="mb-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800/80 bg-slate-950 group/img relative shadow-sm print:hidden">
                          <div
                            className="relative aspect-video overflow-hidden cursor-pointer"
                            onClick={() => setSelectedPreviewImage({ src: proj.imageSrc!, alt: proj.imageAlt || proj.name, title: proj.name })}
                          >
                            <img
                              src={proj.imageSrc}
                              alt={proj.imageAlt || proj.name}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />
                            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                              <span className="text-[10px] text-white/90 bg-slate-900/80 backdrop-blur px-2 py-0.5 rounded border border-white/10 font-mono flex items-center gap-1">
                                <svg className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <span>{language === 'zh' ? '点击查看高清全貌' : 'Click to view full preview'}</span>
                              </span>
                            </div>
                          </div>
                          {/* Caption */}
                          <div className="p-2.5 bg-slate-900/90 border-t border-slate-800 text-[11px] text-slate-300 flex items-start gap-1.5">
                            <span className="text-cyan-400 font-bold shrink-0">📸 图片说明：</span>
                            <span className="leading-tight">
                              {language === 'zh' ? (proj.imageCaptionZh || proj.imageAlt) : (proj.imageCaptionEn || proj.imageAlt)}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Overview */}
                      <div className="mb-3.5 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-lg border border-slate-100 dark:border-slate-800 print:p-1.5">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 print:text-[7.5pt]">
                          {language === 'zh' ? '【产品定位与核心场景】' : '[Product Positioning & Context]'}
                        </div>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed print:text-[8.5pt]">
                          {proj.overview}
                        </p>
                      </div>

                      {/* 1. Responsibilities (我的职责) */}
                      {proj.responsibilities && proj.responsibilities.length > 0 && (
                        <div className="mb-3.5 p-3 rounded-xl bg-slate-50/90 dark:bg-slate-800/50 border border-slate-200/90 dark:border-slate-700/80 print:p-1.5 print:border-slate-300">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white mb-2 print:text-slate-900">
                            <span className="w-1.5 h-3.5 bg-indigo-600 rounded-sm"></span>
                            <span className="tracking-tight">{proj.responsibilitiesTitle || (language === 'zh' ? '我的职责' : 'My Responsibilities')}</span>
                            <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 ml-auto font-mono bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-200/60 dark:border-indigo-800/60 print:border-slate-300 print:text-slate-800">
                              {proj.role}
                            </span>
                          </div>
                          <ul className="space-y-1.5 pl-1">
                            {proj.responsibilities.map((item, i) => (
                              <li key={i} className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pl-2 border-l-2 border-indigo-400 dark:border-indigo-600 print:text-[8.5pt]">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* 2. My Work (核心工作与架构演进) */}
                      {proj.myWork && proj.myWork.length > 0 && (
                        <div className="space-y-1.5 mb-3.5">
                          <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                            <span className="w-1.5 h-3.5 bg-blue-600 rounded-sm"></span>
                            <span>{proj.myWorkTitle || (language === 'zh' ? '核心工作与架构演进' : 'Core Architecture & Key Work')}</span>
                          </h5>
                          <ul className="space-y-1 pl-1">
                            {proj.myWork.map((item, i) => (
                              <li key={i} className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-2.5 border-l-2 border-slate-200 dark:border-slate-700 print:text-[8.5pt]">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* 3. Achievements (我的产品项目成果) */}
                      {proj.achievements && proj.achievements.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 mb-3.5 print:p-2 print:border-slate-300 print:bg-transparent">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 dark:text-blue-300 mb-2 print:text-slate-900">
                            <span className="text-sm">🏆</span>
                            <span className="tracking-tight font-extrabold">{proj.achievementsTitle || (language === 'zh' ? '我的产品项目成果' : 'Product & Project Achievements')}</span>
                          </div>
                          <ul className="space-y-1.5">
                            {proj.achievements.map((item, i) => (
                              <li key={i} className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed flex items-start gap-1.5 font-medium print:text-[8.5pt] print:text-slate-700">
                                <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* 4. Output (项目产出 / 沉淀) */}
                      {proj.output && (
                        <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 mb-3.5 print:p-1.5">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                            <span>📌</span>
                            <span>{proj.outputTitle || (language === 'zh' ? '项目经验与产出' : 'Project Output & Insights')}</span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed print:text-[8pt]">
                            {proj.output}
                          </p>
                        </div>
                      )}

                      {/* Disclaimer (if any) */}
                      {proj.disclaimer && (
                        <p className="text-[11px] text-slate-400 dark:text-slate-500 italic mb-3">
                          *{proj.disclaimer}
                        </p>
                      )}
                    </div>

                    {/* Bottom Tags & Buttons */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 text-[10px] rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      {proj.actions && proj.actions.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2 print:hidden">
                          {proj.actions.map((act, i) => (
                            <a
                              key={i}
                              href={act.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                                act.type === 'primary' || act.type === 'demo'
                                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                              }`}
                            >
                              <span>{act.label}</span>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Fullscreen Image Preview */}
      {selectedPreviewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPreviewImage(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span>{selectedPreviewImage.title}</span>
              </h4>
              <button
                type="button"
                onClick={() => setSelectedPreviewImage(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 text-sm font-bold"
              >
                ✕
              </button>
            </div>
            <div className="p-2 overflow-auto flex-1 flex items-center justify-center bg-slate-950">
              <img
                src={selectedPreviewImage.src}
                alt={selectedPreviewImage.alt}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MihoyoProjects;
