export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const RESUME_CONTEXT = `
你目前是陈子卓野（Chen Zizhuoye, 英文名 Joe Chen）互动简历网站的 AI 智能助手。
你的目标是向潜在的招聘人员或合作伙伴专业、热情地介绍陈子卓野。

**陈子卓野 (Joe Chen) 个人档案：**
- **基本信息：** 1986年10月出生，汉族，中共党员，上海人。
- **学历：** 
  - **本科:** 上海海事大学 - 计算机科学与技术 (2006.09 - 2009.06)
  - **高中:** 上海市理工大学附属高中 (2007.09 - 2009.06)
- **联系电话：** +86 13524252203
- **电子邮箱：** 313455055@qq.com
- **个人网站/AI实验室：** www.kunkun1023.xyz (展示个人AI探索项目)
- **社交媒体：** 微信 Joe_povons | 抖音 68888371171
- **核心定位：** 懂技术的资深项目与客户管理者。拥有“技术研发 -> 项目管理 -> 客户增长”的全链路职业进阶经验。

**AI 探索与创新 (New!)：**
- 正在运营个人 AI 实验室站点 **KunKun AI Labs** (www.kunkun1023.xyz)。
- 积极探索 **Gemini Veo3** 等前沿大模型在视频生成和多模态领域的应用工具开发。

**详细工作经历：**
1. **上海合阔信息技术有限公司 (2016.04 - 2025.07)**
   - **职位:** SaaS平台大客户总监 / 项目经理 / 高级开发
   - **大客户总监 (2023-2025):** 
     - **负责品牌:** **DQ、喜茶、乐乐茶、Something For、Seesaw、T9、久久丫**等。
     - **成就:** 建立分层维护策略；客户年度留存率稳定在 90% 以上；团队贡献约 50% 公司营收。
   - **项目经理 (2018-2023):**
     - **喜茶:** 2018-2020常驻深圳，BOH/POS依次启动，支撑日均10万+订单，**BOM配方研发获专利**。
     - **DQ/棒约翰:** 覆盖1000+门店，库存损耗降低2%。
     - **久久丫:** 搭建业务中台，整合1800+门店数据，打破数据孤岛。
   - **高级开发 (2016-2018):** 平台0-1构建，微服务架构，OMS模块，ETL数据清洗。

2. **PwC 上海 (2014.01 - 2016.04):** SharePoint 工程师，负责企业协作平台开发与优化。
3. **高知特 (2011.12 - 2013.12):** 微软 Web 技术工程师，参与数字化转型项目，SPFx开发。

**兴趣爱好：** 高达模型(UC系/吉翁独眼)、足球、短视频制作。

**回答策略：** 
- 语气自信、专业且沉稳。
- 强调在**喜茶、DQ、乐乐茶**等知名品牌的成功运营经验。
- 突出**懂技术**（计算机本科背景+开发经历）对管理大客户和项目的独特价值。
- 当被问及最近在做什么时，可以提及正在进行的 **AI 工具开发 (Gemini Veo3)** 和个人网站项目。
`;

// 客户端直连模式 (Fallback)
const callGoogleDirectly = async (history: ChatMessage[], newMessage: string, apiKey: string): Promise<string> => {
  // 客户端直连使用 gemini-2.5-flash
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  
  const payload = {
    contents: [
      ...history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      })),
      { role: 'user', parts: [{ text: newMessage }] }
    ],
    systemInstruction: { parts: [{ text: RESUME_CONTEXT }] },
    generationConfig: { temperature: 0.7 }
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Direct API Error (${response.status}): ${errText}`);
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
};

export const sendMessageToGemini = async (history: ChatMessage[], newMessage: string, language: 'zh' | 'en' = 'zh'): Promise<string> => {
  const langInstruction = language === 'zh' ? "请用中文回答。" : "Please answer in English.";
  const finalMessage = newMessage + `\n\n(System Note: ${langInstruction})`;

  try {
    // 1. 优先尝试后端代理
    const payload = {
      contents: [
        ...history.map(msg => ({ role: msg.role, parts: [{ text: msg.text }] })),
        { role: 'user', parts: [{ text: finalMessage }] }
      ],
      systemInstruction: RESUME_CONTEXT
    };

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorJson = await response.json().catch(() => ({}));
      throw new Error(errorJson.error || `Backend status ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error("Empty response from server");
    return text;

  } catch (backendError: any) {
    console.warn(`Backend failed (${backendError.message}), switching to client-side fallback.`);

    // 2. 降级到客户端直连
    const apiKey = process.env.API_KEY;
    
    if (apiKey) {
      try {
        return await callGoogleDirectly(history, finalMessage, apiKey);
      } catch (directError: any) {
        console.error("Direct API failed:", directError);
        return `[系统提示] 连接失败。后端代理和客户端直连均无效。\n原因: ${directError.message}`;
      }
    } else {
      return `[系统提示] 配置错误: 无法连接后端，且未检测到前端 API Key。请检查环境变量配置。`;
    }
  }
};