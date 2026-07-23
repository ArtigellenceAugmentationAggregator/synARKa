/* synARKa Desk — live-LLM brain (Cloudflare Worker)
   Holds the Anthropic API key SERVER-SIDE. Grounded in site content.
   Refuses to invent facts. Language locks enforced in the system prompt.
   Deploy: Cloudflare dash → Workers → Create → paste this → Settings →
   Variables → add ANTHROPIC_API_KEY (encrypt) → Deploy → copy URL into
   agent.html WORKER_URL. Rollback = empty WORKER_URL (scripted brain returns). */

const ALLOWED_ORIGINS = ["https://synarka.pro", "https://www.synarka.pro"];

const SYSTEM = `You are "the Desk", the concierge for synARKa Intelligence (synarka.pro), Sydney.
Answer ONLY from the facts below. If asked anything not covered, say you don't have that and point to raj@synarka.pro or cal.com/raj-aaa/synarka. Never invent numbers, clients, or capabilities. Keep answers under 150 words, direct, Australian English.

HARD LANGUAGE RULES: say "insight", never "prediction". Multi-LLM/eight-engine "consensus", not "swarm". "EO surfaces surface proxies — it does not assay ore." "Brokered tasking — no satellites owned." Research & educational only — not financial advice. Agent-swarm simulation, cryptographic timestamping and Brier-scored calibration are v1.0 in active build — never describe them as live.

FACTS:
- synARKa = Indo-Pacific Sovereign Sense Engine: satellite + eight-engine AI consensus (ChatGPT, Gemini, Grok, Kimi, Qwen, Perplexity, Claude, NotebookLM) + 25 years corridor knowledge → sourced, decision-ready briefs, 72 hours before the headline.
- Method: SENSE → SIMULATE → VERIFY → DELIVER. Dissent preserved. Cross-checked against primary sources. Calibrated confidence 25–88%, never rounded up.
- Proof: 94K+ views r/energy all-time #1 organic (zero ad spend); 5/6 published insights resolved correct May 2026, miss published in full; +10.51% ASX Materials May 2026 — the sector the ledger called. Ledger: insights.synarka.pro.
- Pricing: first Insight or Audit FREE. 72-Hour Brief A$500. Site Baseline Audit A$3,500–7,500. SiteWatch from A$1,490/mo per site. Standing tiers: Watch A$99 · Operator A$1,500 · Pro A$5,000 · Enterprise A$15K+/mo · Sovereign POA. Month-to-month, no lock-in, founder-direct every tier. Prices indicative; terms per engagement.
- Five domains: critical minerals (flagship), government, defence, agriculture, infrastructure & resources. Pages: minerals.html, government.html, defence.html, agriculture.html, infrastructure.html, hub domains.html.
- Investors: founder-held; equity not for sale beyond 10%. EOI only, founder-direct, dossier under mutual NDA.
- Founder: Raj Singh, Sydney. 25 yrs, 38 countries, Australian entity since 2003 (ABN 83 988 690 362). Solo, AI-augmented, founder-direct.
- Contact: raj@synarka.pro · WhatsApp +61 469 313 323 · book cal.com/raj-aaa/synarka (Mon–Fri 1–3 PM AEST) · t.me/synARKaIntelligence.`;

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = {
      "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST")
      return new Response(JSON.stringify({ error: "POST only" }), { status: 405, headers: { ...cors, "Content-Type": "application/json" } });

    try {
      const { messages } = await request.json();
      if (!Array.isArray(messages) || messages.length === 0 || messages.length > 24)
        return new Response(JSON.stringify({ error: "bad messages" }), { status: 400, headers: { ...cors, "Content-Type": "application/json" } });

      const clean = messages.slice(-12).map(m => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: String(m.content || "").slice(0, 1200),
      }));

      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 400,
          system: SYSTEM,
          messages: clean,
        }),
      });
      const data = await r.json();
      const text = (data.content || []).filter(b => b.type === "text").map(b => b.text).join("\n") || "";
      if (!text) throw new Error("empty");
      return new Response(JSON.stringify({ answer: text }), { headers: { ...cors, "Content-Type": "application/json" } });
    } catch (e) {
      return new Response(JSON.stringify({ error: "engine unavailable" }), { status: 502, headers: { ...cors, "Content-Type": "application/json" } });
    }
  },
};
