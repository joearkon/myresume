import React, { useState } from 'react';
import { Language } from '../../App';

interface MihoyoGamerDossierProps {
  language: Language;
}

const MihoyoGamerDossier: React.FC<MihoyoGamerDossierProps> = ({ language }) => {
  // Collapsed by default as requested: user can expand if needed
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const content = {
    zh: {
      badge: 'GAMER ARCHIVE · COLLAPSED',
      titlePrefix: '25 年硬核主机玩家与',
      titleHighlight: '《绝区零》微观拆解',
      summary: 'PS1~PS5 跨世代主机玩家，ACT 动作全白金战绩（只狼/鬼泣5/怪猎/战神），米哈游全系深度玩家与《绝区零》打击判定帧/招架支援视听工程微观拆解。',
      toggleExpand: '展开查看完整玩家档案与微观机制拆解',
      toggleCollapse: '收起玩家档案详情',
      stats: [
        { label: '主机游戏年限', value: '25 年+', desc: 'PS1 时代启蒙至今' },
        { label: 'ACT 动作全白金', value: '10+ 款', desc: '只狼 / 鬼泣 / 战神 / 怪猎' },
        { label: '核心动作游戏时长', value: '4000+ h', desc: '手感判定与帧数本能' },
        { label: '米哈游游戏总投入', value: '全家桶', desc: '原神/崩铁/绝区零/崩3' }
      ],
      zzzTitle: '米哈游《绝区零》(Zenless Zone Zero) 微观机制解构与产品思考',
      points: [
        {
          tag: '手感标杆',
          title: '招架支援 (Parry Assist) 与慢放顿挫帧 (Hitstop) 视听协同',
          desc: '绝区零打击爽感核心源自对微秒级「受击顿挫帧 (Hitstop)」的极致调校。当触发招架支援或极限闪避时，画面精准插入 3~6 帧轻度慢动作/定格，伴随金属火花粒子溅射与高频打铁声向低频重低音骤降的声学调制，给玩家带来无与伦比的确认感与正反馈。这不仅是动作手感，更是视听多模态工程的精密协同。'
        },
        {
          tag: '门槛与上限',
          title: '连携技 (Chain Attack) 状态机与邦布 (Bangboo) 协同',
          desc: '通过重击击破失衡值触发连携技，UI 界面无缝呈现选择卡片，极大地降低了移动端搓招门槛，让泛二次元玩家也能打出华丽演出；而在硬核维度，通过喧响值管理、换人取消后摇 (Animation Canceling) 与邦布的主动技能插槽，保留了极具深度的速通竞速与配队策略上限。'
        },
        {
          tag: 'AI 赋能展望',
          title: 'AI 智能体对米哈游虚拟世界生态的落地赋能展望',
          desc: '米哈游的愿景是“2030年打造十亿人生活的虚拟世界”。在这宏大蓝图下，AI Agent 可大放异彩：① 邦布/派蒙化身为具备真情实感、长期记忆与拟真 TTS 的原生桌面/移动随身伴侣；② 大世界 NPC 告别固定文本树，具备动态行为与环境互动；③ 工业化端：借助 AIGC 与 CV 质检管线，大幅压缩动作帧打磨、贴图质检与分支剧情测试周期。'
        }
      ]
    },
    en: {
      badge: 'GAMER ARCHIVE · COLLAPSED',
      titlePrefix: '25 Yrs Hardcore Console Gamer &',
      titleHighlight: 'Zenless Zone Zero Deconstruction',
      summary: 'PS1 to PS5 cross-generation gamer, Platinum hunter in hardcore ACT (Sekiro, DMC5, MHW, God of War), active miHoYo player with micro-analysis on ZZZ parry assist, hitstop frames & AI pipelines.',
      toggleExpand: 'Expand Gamer Dossier & Micro Breakdown',
      toggleCollapse: 'Collapse Gamer Dossier',
      stats: [
        { label: 'Console Gaming', value: '25+ Yrs', desc: 'From PS1 to PS5' },
        { label: 'Hardcore ACT Platinum', value: '10+ Titles', desc: 'Sekiro / DMC5 / GoW' },
        { label: 'Action Game Hours', value: '4000+ h', desc: 'Frame instincts' },
        { label: 'miHoYo Ecosystem', value: 'Full Suite', desc: 'Genshin/HSR/ZZZ/HI3' }
      ],
      zzzTitle: 'miHoYo Zenless Zone Zero (ZZZ) Micro-Mechanics & Product Insight',
      points: [
        {
          tag: 'Hitstop Craft',
          title: 'Parry Assist & Hitstop Frame Audio-Visual Synergy',
          desc: 'ZZZ combat feedback hinges on millisecond-level Hitstop frame tuning. Parry assists trigger a precise 3-6 frame micro-freeze, coupled with metallic particle sparks and acoustic frequencies descending into deep sub-bass, maximizing sensory confirmation.'
        },
        {
          tag: 'Flow & Depth',
          title: 'Chain Attack State Machine & Bangboo Synergy',
          desc: 'Triggered upon Daze thresholds, seamless card selection lowers execution barriers for casual mobile players, while animation cancelling, decibel management, and Bangboo active skill slots maintain deep competitive ceiling.'
        },
        {
          tag: 'AI Vision',
          title: 'AI Agent Empowerment for miHoYo 2030 Virtual World',
          desc: 'Realizing "1 Billion Virtual World by 2030": ① Bangboo & Paimon evolving into persistent desktop/mobile companions with realtime TTS; ② Dynamic living NPCs beyond static text trees; ③ Automated CV QA & AIGC speeding production loops.'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="mihoyo-gamer" className="py-8 bg-white dark:bg-slate-950 relative transition-colors duration-500 border-y border-slate-200/60 dark:border-slate-800/80 print:py-2">
      <div className="max-w-6xl mx-auto px-4 print:px-0">
        {/* Condensed Banner Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                {t.badge}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500">
                PS1 ~ PS5 · 4000h+ ACT · miHoYo Player
              </span>
            </div>
            <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1">
              {t.titlePrefix} <span className="text-amber-600 dark:text-amber-400">{t.titleHighlight}</span>
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
              {t.summary}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 print:hidden">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 transition-all cursor-pointer"
            >
              <span>{isExpanded ? '▲' : '▼'}</span>
              <span>{isExpanded ? t.toggleCollapse : t.toggleExpand}</span>
            </button>
          </div>
        </div>

        {/* Expandable Content (Collapsed by default) */}
        {isExpanded && (
          <div className="mt-6 space-y-6 animate-in fade-in duration-300">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {t.stats.map((s, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                  <div className="text-lg font-extrabold text-amber-600 dark:text-amber-400">{s.value}</div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">{s.label}</div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500">{s.desc}</div>
                </div>
              ))}
            </div>

            {/* ZZZ Deep Dive Points */}
            <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span>🎯</span>
                <span>{t.zzzTitle}</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {t.points.map((p, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-2">
                      {p.tag}
                    </span>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white mb-1.5">{p.title}</h5>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MihoyoGamerDossier;
