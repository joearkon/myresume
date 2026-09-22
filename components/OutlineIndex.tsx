import React, { useState, useEffect } from 'react';
import { Language } from '../App';

interface OutlineIndexProps {
  language: Language;
}

interface OutlineNode {
  id: string;
  titleZh: string;
  titleEn: string;
  badgeZh?: string;
  badgeEn?: string;
  level: 1 | 2 | 3;
  children?: OutlineNode[];
}

const outlineTree: OutlineNode[] = [
  {
    id: 'home',
    titleZh: '个人优势与定位',
    titleEn: 'Overview & Strengths',
    level: 1,
  },
  {
    id: 'product-achievements',
    titleZh: '核心产品成就',
    titleEn: 'Product Achievements',
    level: 1,
    children: [
      {
        id: 'prod-ai-inventory',
        titleZh: 'AI 库存研判与门店闭环',
        titleEn: 'AI Inventory & Store Loop',
        badgeZh: '最新自研',
        badgeEn: 'New Agent',
        level: 2,
      },
      {
        id: 'prod-hipos',
        titleZh: '喜茶 HiPOS 全渠道收银履约',
        titleEn: 'HEYTEA HiPOS Fulfillment',
        badgeZh: '800+ 门店',
        badgeEn: '800+ Stores',
        level: 2,
      },
      {
        id: 'prod-mrp',
        titleZh: '喜茶建议订货 (MRP) 算法',
        titleEn: 'HEYTEA MRP Replenishment',
        badgeZh: '年降千万',
        badgeEn: 'Cost Saved',
        level: 2,
      },
      {
        id: 'prod-jiujiuya',
        titleZh: '久久丫 3000+ 门店数字化中台',
        titleEn: 'Dingyu 3000+ Stores Mid-Platform',
        badgeZh: '6大中心',
        badgeEn: '6 Centers',
        level: 2,
      },
      {
        id: 'prod-bom-oms',
        titleZh: 'OMS 与动态 BOM (发明专利)',
        titleEn: 'OMS & Patented Dynamic BOM',
        badgeZh: '国家专利',
        badgeEn: 'Patent',
        level: 2,
      },
      {
        id: 'prod-b2b-pay',
        titleZh: '喜茶加盟 B2B 支付资金中台',
        titleEn: 'HEYTEA Franchisee B2B Payment',
        badgeZh: '数千万流水',
        badgeEn: 'PayFac',
        level: 2,
      },
      {
        id: 'prod-tamjai-zendesk',
        titleZh: '谭仔国际全球化服务平台',
        titleEn: 'TamJai Global Support',
        badgeZh: '多国出海',
        badgeEn: 'Global',
        level: 2,
      },
      {
        id: 'prod-ai-matrix',
        titleZh: 'AI 决策系统与开源智能体',
        titleEn: 'AI Decision & Agent Matrix',
        badgeZh: '79.2% 命中',
        badgeEn: 'Open Source',
        level: 2,
      },
    ],
  },
  {
    id: 'projects',
    titleZh: '核心交付、推广与大客户运营',
    titleEn: 'Delivery, Rollout & KA Operations',
    level: 1,
    children: [
      {
        id: 'proj-group-rollout',
        titleZh: '标杆品牌交付与全国推广',
        titleEn: 'Benchmark Rollout & Delivery',
        level: 2,
      },
      {
        id: 'proj-group-ka',
        titleZh: '大客户成功与精细化运营',
        titleEn: 'KA Success & Tiered Ops',
        level: 2,
      },
      {
        id: 'proj-group-presales',
        titleZh: '数字化咨询与千万级售前',
        titleEn: 'Consulting & Presales Bids',
        level: 2,
      },
    ],
  },
  {
    id: 'experience',
    titleZh: '职业履历',
    titleEn: 'Work Experience',
    level: 1,
    children: [
      {
        id: 'exp-0',
        titleZh: 'AI 编程 Agent / 开源工程',
        titleEn: 'AI Coding Agent & Open Source',
        badgeZh: '2025.08-',
        badgeEn: '2025.08-',
        level: 2,
      },
      {
        id: 'exp-1',
        titleZh: '大客户总监 / 方案架构',
        titleEn: 'KA Director / Solution Arch',
        badgeZh: '2023-2025',
        badgeEn: '2023-2025',
        level: 2,
      },
      {
        id: 'exp-2',
        titleZh: '项目经理 / 解决方案架构',
        titleEn: 'Project Manager / Solution Arch',
        badgeZh: '2018-2023',
        badgeEn: '2018-2023',
        level: 2,
      },
      {
        id: 'exp-3',
        titleZh: 'SaaS 产品研发核心 / 工程师',
        titleEn: 'SaaS Product R&D Core',
        badgeZh: '2016-2018',
        badgeEn: '2016-2018',
        level: 2,
      },
    ],
  },
  {
    id: 'skills',
    titleZh: '专业技能',
    titleEn: 'Skills',
    level: 1,
  },
  {
    id: 'education',
    titleZh: '教育背景',
    titleEn: 'Education',
    level: 1,
  },
  {
    id: 'hobbies',
    titleZh: '个人探索',
    titleEn: 'Interests',
    level: 1,
  },
  {
    id: 'contact',
    titleZh: '联系方式',
    titleEn: 'Contact',
    level: 1,
  },
];

const OutlineIndex: React.FC<OutlineIndexProps> = ({ language }) => {
  const [activeId, setActiveId] = useState<string>('home');
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // Account for fixed Navbar height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  // ScrollSpy listener
  useEffect(() => {
    const allIds: string[] = [];
    const flattenIds = (nodes: OutlineNode[]) => {
      nodes.forEach((n) => {
        allIds.push(n.id);
        if (n.children) flattenIds(n.children);
      });
    };
    flattenIds(outlineTree);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      let current = 'home';

      for (const id of allIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            current = id;
          }
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderItem = (node: OutlineNode) => {
    const title = language === 'zh' ? node.titleZh : node.titleEn;
    const badge = language === 'zh' ? node.badgeZh : node.badgeEn;
    const isActive = activeId === node.id;

    let levelStyles = '';
    let activeStyles = '';

    if (node.level === 1) {
      levelStyles = 'font-bold text-slate-800 dark:text-slate-200 text-[12px] mt-2.5 mb-1 px-1.5 py-0.5 rounded transition-colors';
      activeStyles = isActive
        ? 'text-blue-700 dark:text-blue-400 font-bold'
        : 'hover:text-blue-600 dark:hover:text-blue-300';
    } else if (node.level === 2) {
      levelStyles = 'pl-2.5 border-l-2 text-[11px] font-medium py-0.5 ml-1 transition-colors';
      activeStyles = isActive
        ? 'text-blue-700 dark:text-blue-400 font-bold border-blue-600 dark:border-blue-400'
        : 'text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-300 hover:border-slate-400';
    } else {
      levelStyles = 'pl-3.5 border-l text-[10.5px] py-0.5 ml-2.5 transition-colors';
      activeStyles = isActive
        ? 'text-blue-700 dark:text-blue-400 font-bold border-blue-500 dark:border-blue-400'
        : 'text-slate-500 dark:text-slate-400 border-slate-200/80 dark:border-slate-800/80 hover:text-blue-600 dark:hover:text-blue-300';
    }

    return (
      <div key={node.id} className="group">
        <a
          href={`#${node.id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollTo(node.id);
          }}
          className={`w-full text-left flex items-center justify-between gap-1.5 cursor-pointer ${levelStyles} ${activeStyles}`}
        >
          <span className="truncate">{title}</span>
          {badge && (
            <span
              className={`shrink-0 text-[8.5px] font-mono px-1 py-0.2 rounded ${
                isActive
                  ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
              }`}
            >
              {badge}
            </span>
          )}
        </a>

        {node.children && node.children.length > 0 && (
          <div className="space-y-0.5 my-0.5">
            {node.children.map((child) => renderItem(child))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* 1. Desktop / Tablet Floating Outline Sidebar (lg:block) */}
      <aside
        id="outline-aside"
        className={`hidden lg:block fixed right-3 xl:right-4 top-24 z-40 transition-all duration-300 print:hidden ${
          isCollapsed ? 'w-10' : 'w-56 xl:w-60 2xl:w-64'
        }`}
      >
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/90 shadow-xl rounded-2xl p-3 text-slate-800 dark:text-slate-200 max-h-[calc(100vh-8rem)] flex flex-col">
          
          {/* Header Bar */}
          <div id="outline-header" className={`flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800 shrink-0 ${isCollapsed ? 'hidden' : ''}`}>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-blue-700 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10M4 18h7" />
              </svg>
              <span className="text-[12px] font-bold text-slate-900 dark:text-white tracking-tight">
                {language === 'zh' ? '大纲索引' : 'Outline Index'}
              </span>
            </div>

            <button
              id="outline-toggle-btn"
              onClick={() => setIsCollapsed(true)}
              title={language === 'zh' ? '收起大纲' : 'Collapse'}
              className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Tree Content (Always in DOM, toggled via class) */}
          <div
            id="outline-expanded-content"
            className={`overflow-y-auto pr-1 space-y-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
              isCollapsed ? 'hidden' : ''
            }`}
          >
            {outlineTree.map((node) => renderItem(node))}
          </div>

          {/* Collapsed Icon Pill */}
          <button
            id="outline-collapsed-pill"
            onClick={() => setIsCollapsed(false)}
            title={language === 'zh' ? '展开大纲目录' : 'Expand Outline'}
            className={`flex flex-col items-center gap-1.5 py-2 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-xl transition-colors cursor-pointer ${
              isCollapsed ? '' : 'hidden'
            }`}
          >
            <svg className="w-4 h-4 text-slate-400 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10M4 18h7" />
            </svg>
            <span className="text-[10px] font-bold tracking-tighter writing-vertical">
              {language === 'zh' ? '大纲' : 'Index'}
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default OutlineIndex;
