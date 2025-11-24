export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
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

  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const API_KEY = process.env.API_KEY;

  if (!API_KEY) {
    return new Response(JSON.stringify({ 
      error: "Vercel Config Error: API_KEY missing." 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const reqBody = await request.json();
    const { contents, systemInstruction } = reqBody;

    // [Vercel] 保持使用 gemini-2.5-flash，因为已验证在 Vercel 环境下可用且更智能
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;
    
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
    return new Response(JSON.stringify({ error: `Vercel Error: ${error.message}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}