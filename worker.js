// 这是一个极简的 Worker 脚本
// 它的存在是为了让 Cloudflare 解锁 "Variables and Secrets" 设置页面
export default {
  async fetch(request, env, ctx) {
    // 如果请求没有匹配到静态资源 (assets)，返回 404
    return new Response("Page Not Found", { status: 404 });
  },
};