export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. 拦截 API 请求: /api/chat
    if (url.pathname === '/api/chat' && request.method === 'POST') {
      
      // 安全检查: 确保 API_KEY 已在 Cloudflare 后台配置
      if (!env.API_KEY) {
        return new Response(JSON.stringify({ 
          error: "配置错误: Cloudflare 后台未检测到 API_KEY。请在 Settings -> Variables and Secrets 中添加。" 
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      try {
        const reqBody = await request.json();
        const { contents, systemInstruction } = reqBody;

        // [修改点] 使用 v1beta gemini-1.5-flash，这是目前最稳定、兼容性最好的模型版本
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${env.API_KEY}`;
        
        const payload = {
          contents: contents,
          // 格式化 System Instruction
          systemInstruction: systemInstruction ? { parts: [{ text: systemInstruction }] } : undefined,
          generationConfig: {
            temperature: 0.7
          }
        };

        const geminiResponse = await fetch(geminiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        // 如果 Google API 返回错误，读取详细信息并返回给前端
        if (!geminiResponse.ok) {
          const errorText = await geminiResponse.text();
          let errorDetail = errorText;
          try {
            const jsonError = JSON.parse(errorText);
            if (jsonError.error && jsonError.error.message) {
              errorDetail = jsonError.error.message;
            }
          } catch (e) { /* ignore parse error */ }

          return new Response(JSON.stringify({ 
            error: `Gemini API Error (${geminiResponse.status})`, 
            details: errorDetail
          }), {
            status: geminiResponse.status,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        const data = await geminiResponse.json();
        return new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json' }
        });

      } catch (error) {
        return new Response(JSON.stringify({ error: `Worker Internal Error: ${error.message}` }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // 2. 静态资源托管 (Cloudflare Assets)
    return env.ASSETS.fetch(request);
  },
};