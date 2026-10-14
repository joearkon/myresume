import React from 'react';
import { Language } from '../App';

interface HobbiesProps {
  language: Language;
}

const Hobbies: React.FC<HobbiesProps> = ({ language }) => {
  const content = {
    zh: {
      title: '游戏',
      titleHighlight: '经历',
      subtitle: '玩家视角与深度体验，为游戏交互与 AI 伴侣产品注入真实同理心',
      items: [
        {
          title: '《绝区零》',
          category: '米哈游动作游戏 · 深度玩家',
          icon: '🎮',
          desc: '资深玩家，尤其喜爱动作设计与三人队伍搭配。除了实际游玩，也将自身需求延伸为桌宠、游戏信息查询与提醒功能，探索角色陪伴和低打扰交互。',
          tags: ['三人队伍搭配', '动作设计', '维琳娜桌宠研发', '低打扰交互']
        },
        {
          title: '主机动作游戏',
          category: 'PS4 / PS5 白金探索 · 动作手感',
          icon: '🏆',
          desc: '拥有 PS4、PS5《战神》作品白金经历，同时深入体验《怪物猎人》《鬼泣》等动作游戏。长期偏好动作游戏，关注操作反馈、学习过程与战斗体验。',
          tags: ['战神双白金', '怪物猎人', '鬼泣', '操作反馈与心流']
        },
        {
          title: 'JRPG',
          category: '经典叙事 · 队伍搭配与养成',
          icon: '⚔️',
          desc: '长期喜爱 JRPG 类型，关注角色、队伍搭配、养成与叙事体验。深刻理解玩家与虚拟角色之间的情感羁绊与世界观沉浸感。',
          tags: ['角色沉浸感', '队伍搭配', '养成系统', '情感羁绊']
        }
      ]
    },
    en: {
      title: 'Gaming',
      titleHighlight: 'Experience',
      subtitle: 'Deep gamer perspective infusing empathy and domain intuition into companion agents',
      items: [
        {
          title: 'Zenless Zone Zero (ZZZ)',
          category: 'miHoYo Action Title · Dedicated Player',
          icon: '🎮',
          desc: 'Experienced player especially fond of action combat mechanics and 3-agent team synergy. Translated personal player needs into the Verina desktop companion, in-game stats queries, and low-distraction HUD widgets.',
          tags: ['Team Synergy', 'Combat Dynamics', 'Verina Pet', 'Low-distraction UX']
        },
        {
          title: 'Console Action Games',
          category: 'PS4 / PS5 Platinum Trophy Hunter',
          icon: '🏆',
          desc: 'Earned Platinum trophies for God of War on PS4 & PS5, alongside extensive experience in Monster Hunter and Devil May Cry. Focused on tactile feedback, learning curves, and combat mastery.',
          tags: ['God of War Platinum', 'Monster Hunter', 'Devil May Cry', 'Tactile Feedback']
        },
        {
          title: 'JRPG',
          category: 'Narrative, Team Builds & Progression',
          icon: '⚔️',
          desc: 'Longtime aficionado of JRPG titles, paying close attention to character personalities, party builds, progression systems, and storytelling immersion.',
          tags: ['Character Bonding', 'Party Builds', 'Progression Loop', 'Narrative Immersion']
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="hobbies" className="py-14 px-4 bg-slate-50/70 dark:bg-slate-900/40 relative overflow-hidden transition-colors duration-500 print:py-2 print:bg-white">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10 print:mb-4 print:text-left">
          <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2 font-mono">
            GAMER PROFILE
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-slate-900 dark:text-white transition-colors duration-300 print:text-xl print:mb-0.5">
            {t.title} <span className="text-blue-600 dark:text-blue-400">{t.titleHighlight}</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-gray-400 transition-colors duration-300 print:text-[9.5pt] print:text-slate-500">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:grid-cols-3 print:gap-3">
          {t.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-blue-600 dark:hover:border-blue-400 shadow-sm transition-all duration-300 flex flex-col justify-between print:p-2 print:border-slate-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl p-2.5 rounded-xl bg-blue-50 dark:bg-slate-800 shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white print:text-base">{item.title}</h3>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">{item.category}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed mb-4 print:text-[8.5pt]">
                  {item.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800 print:pt-1">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[10px] rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono"
                  >
                    #{tag}
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

export default Hobbies;