export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. 拦截 API 请求: /api/chat
    if (url.pathname === '/api/chat' && request.method === 'POST') {
      
      // 安全检查: 确保 API_KEY 已在后台配置
      if (!env.API_KEY) {
        return new Response(JSON.stringify({ 
          error: "Server Configuration Error: API_KEY is missing in Cloudflare Settings." 
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      try {
        const reqBody = await request.json();
        const { contents, systemInstruction } = reqBody;

        // 调用 Google Gemini REST API (通过后端调用，安全且稳定)
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.API_KEY}`;
        
        const payload = {
          contents: contents,
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

        if (!geminiResponse.ok) {
          const errorText = await geminiResponse.text();
          return new Response(JSON.stringify({ error: `Gemini API Error: ${geminiResponse.status}`, details: errorText }), {
            status: geminiResponse.status,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        const data = await geminiResponse.json();

        // 将 Google 的结果原样返回给前端
        return new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json' }
        });

      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // 2. 对于非 API 请求，返回前端静态资源 (HTML/JS/CSS)
    // Cloudflare 会自动将静态资源绑定到 env.ASSETS
    return env.ASSETS.fetch(request);
  },
};