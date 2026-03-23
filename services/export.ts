import { Language } from '../App';

export const generateMarkdown = (language: Language): string => {
  const isZh = language === 'zh';

  // This is a simplified version of the data. 
  // In a real app, you might want to pass the data as an argument or use a central store.
  // For now, I'll hardcode the key parts based on what I read from components.

  const hero = isZh ? {
    name: '陈子卓野',
    title: '全链路数字化专家 | AIGC 新媒体运营',
    contact: '电话: +86 135 2425 2203 | 邮箱: 313455055@qq.com | 网站: home.kunkun1023.xyz',
    desc: '从代码到底层架构，从单项目交付到大客户运营。我不仅懂技术实现，更懂如何将技术转化为商业价值。曾主导喜茶、DQ、棒约翰等头部品牌的数字化落地。目前正全面拥抱 AI 时代，深度探索 AIGC 与新媒体运营。'
  } : {
    name: 'Joe.Chen',
    title: 'Digital Transformation Expert | AIGC Social Media',
    contact: 'Phone: +86 135 2425 2203 | Email: 313455055@qq.com | Web: home.kunkun1023.xyz',
    desc: 'From coding to architecture, from project delivery to key account growth. I bridge the gap between technical implementation and business value. Led digital transformation for top brands like Heytea, DQ, and Papa John\'s. Currently fully embracing the AI era, deeply exploring AIGC and social media operations.'
  };

  const experience = isZh ? [
    {
      role: "AIGC 独立开发者 / 新媒体运营专家",
      company: "独立项目 / 自由职业",
      period: "2025.08 - 至今",
      achievements: [
        "基于 Gemini AI 进行剧本创作与分镜设计，结合 ComfyUI 构建图像与视频生成工作流",
        "专注于游戏与动漫 IP 的二创内容矩阵运营，单月内全平台累计精准粉丝 5000+",
        "深入研究 AI 提示词工程与工作流编排，大幅提升产出效率"
      ]
    },
    {
      role: "SaaS 平台大客户总监",
      company: "上海合阔信息技术有限公司",
      period: "2023 - 2025.07",
      achievements: [
        "负责维护 DQ，喜茶，乐乐茶等品牌大客户平台产品运营",
        "制定分层客户维护策略，大客户年度留存率稳定在 90% 以上",
        "牵头客户续约与增收工作，团队每年为公司贡献约 50% 营收"
      ]
    },
    {
      role: "SaaS 平台项目经理",
      company: "上海合阔信息技术有限公司",
      period: "2018 - 2023",
      achievements: [
        "喜茶 (Heytea): 主导 2000+ 门店系统打通，支撑日峰值 10万+ 订单",
        "DQ/棒约翰: 覆盖 1000+ 门店，库存损耗率降低 2%",
        "久久丫: 搭建业务中台，整合 1800+ 门店数据"
      ]
    }
  ] : [
    {
      role: "AIGC Independent Developer / Social Media Expert",
      company: "Independent Project / Freelance",
      period: "2025.08 - Present",
      achievements: [
        "Leveraged Gemini AI and ComfyUI for automated content production workflows",
        "Reached 5000+ targeted followers on social media within a single month from scratch",
        "Researched AI Prompt Engineering to significantly reduce production costs"
      ]
    },
    {
      role: "Key Account Director (SaaS)",
      company: "Shanghai Hekuo Info Tech",
      period: "2023 - 2025.07",
      achievements: [
        "Managed platform operations for brands like DQ, Heytea, and Lelecha",
        "Maintained 90%+ retention for key accounts through tiered strategies",
        "Led team contributing ~50% of total company revenue annually"
      ]
    },
    {
      role: "SaaS Project Manager",
      company: "Shanghai Hekuo Info Tech",
      period: "2018 - 2023",
      achievements: [
        "Heytea: Integrated 2000+ stores, handling 100k+ daily orders",
        "DQ/Papa John's: Covered 1000+ stores, reduced inventory loss by 2%",
        "Juewei Duck: Built business middle-platform for 1800+ stores"
      ]
    }
  ];

  const skills = isZh ? [
    { category: '核心能力', items: ['SaaS 架构设计', '项目交付管理', '大客户运营', '数字化转型咨询'] },
    { category: '技术栈', items: ['微服务架构', 'Java / Go', 'ETL / 数据集成', '.NET / SharePoint'] },
    { category: 'AI 工具', items: ['LLM 大模型应用', 'Gemini / GPT', '提示词工程', 'ComfyUI / SD'] }
  ] : [
    { category: 'Core Competencies', items: ['SaaS Architecture', 'Project Delivery', 'KA Management', 'Digital Transformation'] },
    { category: 'Tech Stack', items: ['Microservices', 'Java / Go', 'ETL / Data Integration', '.NET / SharePoint'] },
    { category: 'AI Tools', items: ['LLM Application', 'Gemini / GPT', 'Prompt Engineering', 'ComfyUI / SD'] }
  ];

  let md = `# ${hero.name}\n\n`;
  md += `**${hero.title}**\n\n`;
  md += `${hero.contact}\n\n`;
  md += `---\n\n`;
  md += `## ${isZh ? '个人简介' : 'Profile'}\n\n`;
  md += `${hero.desc}\n\n`;

  md += `## ${isZh ? '工作经历' : 'Experience'}\n\n`;
  experience.forEach(exp => {
    md += `### ${exp.role} | ${exp.company}\n`;
    md += `*${exp.period}*\n\n`;
    exp.achievements.forEach(ach => {
      md += `- ${ach}\n`;
    });
    md += `\n`;
  });

  md += `## ${isZh ? '专业技能' : 'Skills'}\n\n`;
  skills.forEach(skill => {
    md += `**${skill.category}**: ${skill.items.join(', ')}\n\n`;
  });

  md += `## ${isZh ? '教育背景' : 'Education'}\n\n`;
  if (isZh) {
    md += `- **上海海事大学** | 本科 | 计算机科学与技术 (2006 - 2009)\n`;
  } else {
    md += `- **Shanghai Maritime University** | Bachelor | Computer Science & Tech (2006 - 2009)\n`;
  }

  return md;
};

export const downloadFile = (content: string, fileName: string, contentType: string) => {
  const a = document.createElement('a');
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);
};
