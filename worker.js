export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 处理 CORS 预检
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // 1. 拦截 API 请求
    if (url.pathname === '/api/chat') {
      if (request.method !== 'POST') {
         return new Response("Method Not Allowed", { status: 405 });
      }
      
      // [调试] 检查 API_KEY 是否存在
      if (!env.API_KEY) {
        // 获取当前所有可用变量名，帮助排查是否注入成功
        const availableKeys = env ? Object.keys(env).join(', ') : 'env is null';
        
        return new Response(JSON.stringify({ 
          error: "Cloudflare 配置错误: 未检测到 API_KEY。",
          tip: "请确保在后台添加了变量，并重新部署(Retry Deployment)。",
          debug_available_keys: `[${availableKeys}]` 
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      try {
        const reqBody = await request.json();
        const { contents, systemInstruction } = reqBody;

        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${env.API_KEY}`;
        
        const payload = {
          contents: contents,
          systemInstruction: systemInstruction ? { parts: [{ text: systemInstruction }] } : undefined,
          generationConfig: { temperature: 0.7 }
        };

        const geminiResponse = await fetch(geminiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!geminiResponse.ok) {
          const errorText = await geminiResponse.text();
          return new Response(JSON.stringify({ 
            error: `Gemini API Error (${geminiResponse.status})`, 
            details: errorText 
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
        return new Response(JSON.stringify({ error: `Worker Exception: ${error.message}` }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // 2. 静态资源托管
    // Cloudflare Workers with Assets 模式下，env.ASSETS 用于获取静态文件
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    } else {
      return new Response("Static Assets Binding Not Found", { status: 500 });
    }
  },
};