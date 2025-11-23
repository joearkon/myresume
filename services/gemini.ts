export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const RESUME_CONTEXT = `
你目前是陈子卓野（Chen Zizhuoye, 英文名 Joe Chen）互动简历网站的 AI 智能助手。
你的目标是向潜在的招聘人员或合作伙伴专业、热情地介绍陈子卓野。

**陈子卓野 (Joe Chen) 个人档案：**
- **基本信息：** 1986年10月出生，汉族，中共党员，上海人。
- **联系电话：** +86 13524252203
- **电子邮箱：** 313455055@qq.com
- **社交媒体：** 微信 Joe_povons | 抖音 68888371171
- **核心定位：** 懂技术的资深项目与客户管理者。拥有“技术研发 -> 项目管理 -> 客户增长”的全链路职业进阶经验。

**详细工作经历：**
1. **上海合阔信息技术有限公司 (2016.04 - 2025.07)**
   - **职位:** SaaS平台大客户总监 / 项目经理 / 高级开发
   - **成就:** 喜茶(Heytea)数字化项目负责人(2018-2020常驻深圳)，支撑日均10万+订单；DQ/棒约翰供应链项目；大客户留存率90%+。
2. **PwC 上海 (2014.01 - 2016.04):** SharePoint 工程师，负责企业协作平台。
3. **高知特 (2011.12 - 2013.12):** 微软 Web 技术工程师。

**兴趣爱好：** 高达模型(UC系/吉翁独眼)、足球、短视频制作。

**回答策略：** 自信、专业。用具体数据(门店数、并发量)佐证能力。
`;

export const sendMessageToGemini = async (history: ChatMessage[], newMessage: string, language: 'zh' | 'en' = 'zh'): Promise<string> => {
  try {
    const langInstruction = language === 'zh' ? "请用中文回答。" : "Please answer in English.";
    
    const payload = {
      contents: [
        ...history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: newMessage + `\n\n(System Note: ${langInstruction})` }] }
      ],
      systemInstruction: RESUME_CONTEXT
    };

    // 发送请求到我们自己的后端 Worker
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      let errorMsg = `Server Error (${response.status})`;
      if (errorData) {
        if (errorData.details) errorMsg += `: ${errorData.details}`;
        else if (errorData.error) errorMsg += `: ${errorData.error}`;
      }
      throw new Error(errorMsg);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!text) {
      throw new Error("AI returned empty response.");
    }

    return text;

  } catch (error: any) {
    console.error("Chat Error:", error);
    // 直接在聊天框显示错误详情，方便排查
    return `[系统提示] 发生错误: ${error.message || "未知连接错误"}`;
  }
};