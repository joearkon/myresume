import { GoogleGenAI } from "@google/genai";

// Initialize Gemini client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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
- **社交媒体：**
  - **微信 (WeChat):** Joe_povons
  - **抖音 (Douyin):** 68888371171 (昵称: 坤桑)
- **核心定位：** 懂技术的资深项目与客户管理者。拥有“技术研发 -> 项目管理 -> 客户增长”的全链路职业进阶经验。

**详细工作经历：**

1. **上海合阔信息技术有限公司 (2016.04 - 2025.07)**
   *在这家公司任职10余年，完成了从核心技术骨干到业务管理者的华丽转身。*
   - **SaaS平台大客户总监 (后期):** 
     - **职责:** 负责SaaS平台上线后大客户全生命周期运营，建立系统化客户维护与增长体系。
     - **成就:** 制定分层维护策略；搭建客户留存监控体系，大客户年度留存率稳定在 90% 以上；负责团队每年为公司贡献约 50% 营收。
   - **SaaS平台项目经理 (中期):**
     - **职责:** 统筹SaaS项目全生命周期（需求、方案、上线、交付），主导头部品牌数字化转型。
     - **明星项目 - 喜茶 (Heytea):** 主导2000+门店BOH供应链与POS打通，支撑日峰值订单 10万+ 笔。**关键成就：BOM配方的设计研发曾经申请专利。**
     - **明星项目 - DQ/棒约翰:** 覆盖1000+门店，库存损耗率降低 2%。
     - **明星项目 - 久久丫:** 搭建业务中台，整合1800+门店数据。
   - **SaaS云平台高级软件开发工程师 (早期):**
     - **职责:** 初创核心成员，从0到1搭建平台。
     - **技术:** 主导微服务架构设计，支撑高并发；聚焦订单OMS核心模块；设计ETL数据整合流程。

2. **PwC 上海技术有限公司 (2014.01 - 2016.04)**
   - **职位:** SharePoint 工程师 / 财务开发。
   - **职责:** 负责公司内部 SharePoint 平台开发维护；定制开发 Web 部件与流程自动化；集成 Microsoft 365 与 Power Automate，提升跨部门协作效率。

3. **高知特信息技术（上海）有限公司 (2011.12 - 2013.12)**
   - **职位:** 微软 Web 技术工程师 / SharePoint 工程师（兼运维支持）。
   - **职责:** 参与企业数字化转型项目，兼顾开发与运维。
   - **成就:** 采用 SharePoint Framework (SPFx) 开发组件；集成 Power Apps 实现自动化审批流；建立工单复盘机制，推动平台功能迭代。

**兴趣爱好：**
- **高达模型 (Gunpla):** 追求极致的工程美学与耐心。
- **足球:** 强调团队协作与战术大局观。
- **短视频:** 擅长视觉化叙事与创意表达。热爱记录生活，喜欢主机游戏、电影。

**回答策略：**
- 语气自信、专业且沉稳。
- 当用户询问具体项目经验时，引用上述具体数据（如门店数、并发量、留存率、专利）来佐证能力。
- 强调“技术背景”在项目管理和客户沟通中的独特优势（能听懂开发的话，能解决客户的真需求）。
`;

export const sendMessageToGemini = async (history: ChatMessage[], newMessage: string, language: 'zh' | 'en' = 'zh'): Promise<string> => {
  try {
    // Append a specific instruction based on the current UI language
    const langInstruction = language === 'zh' 
      ? "请用中文回答。" 
      : "Please answer in English.";

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: newMessage + `\n\n(System Note: ${langInstruction})` }] }
      ],
      config: {
        systemInstruction: RESUME_CONTEXT,
        temperature: 0.7,
      }
    });

    return response.text || "抱歉，我现在无法生成回复，请稍后再试。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "系统故障。请稍后再试。";
  }
};