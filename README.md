# synARKa Intelligence — synarka.pro

> The intelligence layer that sees the shift 72 hours before it becomes the headline.

**synARKa Intelligence** is the Indo-Pacific Sovereign Sense Engine. A geopolitical
consensus engine running multi-engine convergence synthesis across critical minerals,
geopolitics, defence, logistics, infrastructure, national resources and markets.

- **Live:** [synarka.pro](https://synarka.pro)
- **Ledger:** [insights.synarka.pro](https://insights.synarka.pro)
- **Services brief (PDF, 10-page):** [synarka.pro/synARKa-brief.pdf](https://synarka.pro/synARKa-brief.pdf)
- **90-second voice brief:** [synarka.pro/synarka-voice-brief.mp3](https://synarka.pro/synarka-voice-brief.mp3)
- **Operating entity:** Artigellence Augmentation Aggregator · ABN 83 988 690 362 · Australian entity active since 2003 · Sydney

---

## The receipts · May 2026

**5 of 6 published insights resolved correct.** The one miss — Hormuz → AUD cascade,
25% conviction, lowest on the ledger — was published as openly as the hits; its
falsification trigger fired exactly as written. Every price verified at source, every
insight timestamped and resolution-dated at
[insights.synarka.pro](https://insights.synarka.pro).

> A ledger that hides its misses is not a ledger.

---

## What this repo is

A single self-contained `index.html` (~653 KB, ~4,864 lines) that powers synarka.pro —
the **classified-dossier build**. No build step. No framework. No backend. Static
deployment to Netlify or GitHub Pages.

Alongside it, the buyer assets and crawler layer:

| File | Purpose |
|---|---|
| `synARKa-brief.pdf` | 10-page Services & Solutions brief — ladder, protocols, method, founder |
| `synarka-voice-brief.mp3` | 90-second founder voice brief, wired to the on-page player |
| `llms.txt` · `robots.txt` · `sitemap.xml` | AEO / crawler layer |
| `og-image.jpg` | 1200×630 social-share card |
| `privacy.html` · `terms.html` · `cookies.html` | Legal & compliance pages |

---

## Design · Classified dossier

The site reads as a **classified intelligence publication**, not a SaaS dashboard:

- **Palette** — warm near-black (`#0E0C08`) with a single brass-gold signature
  (`#C9A227`) and one alert-red. No rainbow, no glassy gradients.
- **Type** — Fraunces serif masthead · IBM Plex Mono for classification markings ·
  IBM Plex Sans for body.
- **Signature** — insights render as **declassified cables**: a `REF · CONFIDENCE ·
  RESOLVES` header, a serif headline, a calibration bar, and a resolution **stamp**
  (gold `PENDING`, red `DRAFT`).
- **Motif** — the **72-Hour Cascade**: signal detected → +72h sovereign window →
  the world reacts.
- **Themes** — dark dossier + a warm-paper light mode, both fully styled.

---

## Architecture · The Three Engines

1. **Satellite** — commodity SAR (Sentinel-1 · ICEYE · Capella · Umbra on tasking),
   LWIR thermal (Landsat · ECOSTRESS), multispectral baselines (Sentinel-2 · Landsat),
   and hyperspectral for surface mineralogy — ingested via developer aggregators,
   archive plus pay-per-pass tasking brokered across commercial constellations.
   synARKa operates **no satellites** — no hardware capex. EO surfaces structural-change
   **proxies**, it does not assay ore. *v1.0 in active build.*
2. **Consensus-Simulation** — convergence synthesis across 8 up-to-date frontier
   reasoning engines. Adversarial debate · dissent capture · founder-layer calibration.
   *Phase 2: scaling toward 1,000+ psychometric agent swarms (OASIS / MiroFish).*
3. **Intelligence** — 25 years of Indo-Pacific corridor knowledge. Compounding daily.

Four-stage architecture: **SENSE → SIMULATE → VERIFY → DELIVER.**

---

## Domain surfaces

Five self-explanatory domain tabs plus a live tab:

`Critical Minerals · Government · Defence & Sovereignty · Agriculture · Infrastructure & Resources · LIVE`

Each domain tab is built to the same anatomy: a who-it's-for line, a thesis
infographic, a declassified-cable insight (timestamped + resolution-dated), three
analyst/think-tank voices, and a free-first call to action.

---

## Features

- TELEMETRY bar — collapsible Live Signal Pulse · live markets · Indo-Pacific clocks
- Hero with Sovereign Domain Intelligence overlay (Space · Air · Land · Sea · Undersea)
  and the **72-Hour Cascade** thesis visual
- **The Entry Ladder** — First Insight (free) → A$500 72-hr brief → Site Baseline Audit
  → SiteWatch → Sovereign retainer
- **Resolved-ledger receipts block** — 5/6 with published conviction numbers, miss included
- **Free-first buyer-journey flowchart** — pain → email/WhatsApp → discovery → free first
  insight → fork (walk away · we talk)
- Per-tab declassified-cable insights with `PENDING` / `DRAFT` resolution stamps
- Three Engines · Sovereign Moat Matrix · Competitive Landscape table · 4-Stage Architecture
- **Pricing doors** — Subscribe / Engage / Project Work / All Eight → the standing protocols
- Founder section — direct line, founder-held, no outside capital
- **Onboarding** — 90-second voice brief player · 6-Question Intelligence-Gap Check ·
  two-tap persona path (Fund · Miner · Defence/Gov · Logistics · Legal/M&A · Trading ·
  **Agriculture**)
- FAQ · weekly Sovereign Brief signup (Beehiiv)
- 15-language selector (RTL for Arabic) · dark/light theme toggle
- Live data: RSS ticker (ASPI · Lowy · gCaptain) · market strip (Frankfurter · CoinGecko · Yahoo)

---

## Data sources

All public, free APIs. (The weather and satellite-catalog widgets from the earlier
build were retired in the declutter; current live feeds are below.)

| Source | Use | Refresh |
|---|---|---|
| Frankfurter (ECB) | FX rates | 5 min |
| CoinGecko | Gold (PAXG proxy) · BTC · crypto | 5 min |
| RSS via rss2json | ASPI · Lowy · gCaptain · Mining.com · Reuters · AFR | 5 min |
| Yahoo (~15min delayed) | ASX equity prices | Static |

No proprietary feeds. No Bloomberg terminal. No paid subscriptions.

---

## Honesty discipline

Every "Phase 2" or "v1.0 in active build" marker is intentional. The site never
describes capabilities-under-construction as live. The word **insight** is used —
never **prediction**; the engine is **Consensus-Simulation** — never
"Predictive-Simulation" (ACMA + ASIC compliance). Confidence numbers range 25%–88%,
calibrated, never rounded up. EO/satellite signals are flagged as proxies, not
ground-truth. Misses are published as openly as hits.

---

## Deployment

### Netlify (recommended)

```
1. Drag this folder onto app.netlify.com
2. Configure custom domain → synarka.pro
3. Hard refresh after deploy
```

### GitHub Pages

```
1. Push to repo root or /docs
2. Repo Settings → Pages → source: main / root (or /docs)
3. Custom domain → synarka.pro
4. Hard refresh
```

### Local preview

```bash
python3 -m http.server 8000
# http://localhost:8000
```

---

## Configuration

The only embedded URL that may need editing:

- **Beehiiv newsletter endpoint** — search `index.html` for `synarka.beehiiv.com/subscribe`
  and replace with your actual publication URL once Beehiiv is live.

All other endpoints (raj@synarka.pro · t.me/synARKaIntelligence · rajsingh.online ·
insights.synarka.pro · +61 469 313 323) are pre-wired and live.

---

## Browser support

- Chromium-based (Chrome · Edge · Brave · Opera)
- Firefox 120+
- Safari 17+
- Mobile Safari · Chrome Android

Hard requirements: ES2020 JavaScript · Fetch API · CSS Grid · CSS custom properties ·
Canvas 2D · `localStorage`.

---

## Engagement tiers

| Tier | AUD/mo | Audience |
|---|---|---|
| Free · Public | 0 | Curious professionals · journalists · students |
| Watch · Test | 99 | SME owners · single-corridor analysts |
| Operator | 1,500 | Mining consultants · defence staff · policy analysts |
| Pro ★ | 5,000 | ASX miners · defence primes · M&A law · trading desks |
| Enterprise | 15,000+ | Sovereign-grade · government · tier-1 boards |
| Tailored · Sovereign | POA | Bespoke architecture · multi-jurisdiction |
| Audit · One-time | 5K–15K + GST | Diagnostic before subscription |
| Consultancy · Bespoke | Case-by-case | M&A · tender prep · strategic briefings |

Entry ladder sits in front of all tiers: **First Insight (free)** → **A$500** single-question
72-hr brief → Site Baseline Audit (A$3,500–7,500) → SiteWatch (from A$1,490/mo per site) →
Sovereign retainer.

---

## Contact

- **Email:** raj@synarka.pro
- **Telegram:** [t.me/synARKaIntelligence](https://t.me/synARKaIntelligence)
- **X:** [@synARKa](https://x.com/synARKa)
- **LinkedIn:** [/in/synarka-intelligence](https://www.linkedin.com/in/synarka-intelligence)
- **Founder:** [rajsingh.online](https://rajsingh.online)
- **Phone / WhatsApp:** +61 469 313 323

---

## License

© MMXXVI · Artigellence Augmentation Aggregator · Sydney, Australia.
All rights reserved. The orchestration, prompt library, persona taxonomy and
Indo-Pacific corridor topology are proprietary IP and not exposed in this repository.

This repository contains the public-facing static site only — not the engine.

---

## Status

🟡 **Public · v1.0 production engine in active build** — classified-dossier build
shipped 29 June 2026 · public launch 1 May 2026 · the Five (Manifesto · Charter ·
Masterplan · Fairness Metric · Changelog) in progress before "active" is claimed.

---

> *Satellite data is cheap. Frontier reasoning models are cheap. Raw intelligence is
> cheap. The last mile of context — that is the moat. And it cannot be bought.*
>
> — Raj Singh, Founder
