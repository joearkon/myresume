export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (url.pathname === '/api/chat') {
      if (request.method !== 'POST') {
         return new Response("Method Not Allowed", { status: 405 });
      }
      
      if (!env.API_KEY) {
        return new Response(JSON.stringify({ 
          error: "Cloudflare Config Error: API_KEY missing." 
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      try {
        const reqBody = await request.json();
        const { contents, systemInstruction } = reqBody;

        // [Cloudflare 修正] 强制使用 gemini-1.5-flash
        // 原因: 2.5-flash (预览版) 对 Cloudflare 节点 IP 有严格的地区限制 (返回 400 Location Error)。
        // 1.5-flash 全球可用性更好，能解决这个问题。
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
        return new Response(JSON.stringify({ error: `Worker Error: ${error.message}` }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    } else {
      return new Response("Static Assets Binding Not Found", { status: 500 });
    }
  },
};