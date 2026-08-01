/* ============================================================================
   synarka-flow.js — THE FLOW layer · v1.2 · 01 Aug 2026

   ONE-LINE INSTALL. Add this beside the other layers in index.html:

       <script src="synarka-flow.js" defer></script>

   ROLLBACK = delete that one line. This file never edits index.html and
   removes nothing. Everything it adds carries a data-synarka-flow attribute.

   Injects four things, each independently guarded:
     0. Gold pill in .hero-meta — "⚡ UNDERSTAND SYNARKA · 60 SECONDS" → how.html
     1. Gold pill at the FRONT of .hero-meta
        "▶ THE FLOW · ALL 4 DOCUMENTS · OPEN NOW"          → pitch.html
     2. Matching button at the FRONT of .hero-cta-row
        "▶ THE FLOW · READ · FILL · CHECK · SHARE →"        → pitch.html
     3. WhatsApp pack sender appended inside #documents .skdoc-in
        Phone field + send button. Opens wa.me pre-loaded with all four
        document links, the flow URL, the booking link and the sign-off.

   Honest limit, printed on the page: a web page cannot attach PDFs into
   WhatsApp without a Business API account. This opens the app with the
   message written; a human presses send. Nothing is sent automatically,
   no number is stored, and no number is seen by synARKa.

   Guards: whole body in try/catch · every injection idempotent · silent
   no-op if the host markup is absent · inherits the site's CSS custom
   properties so light-mode is automatic · prefers-reduced-motion respected.
   ============================================================================ */
(function () {
  'use strict';

  var FLAG = 'data-synarka-flow';
  var HREF = 'pitch.html';
  var SITE = 'https://synarka.pro';

  /* ---------- the shared pack message ---------- */
  var MSG = [
    "Have a look at synARKa Intelligence — the consensus engine for the Indo-Pacific. All four documents are open, no form, no email wall:",
    "",
    "1. Executive Summary, one page — " + SITE + "/synARKa-exec-summary.pdf",
    "2. Services & Solutions, every tier and price (10pp) — " + SITE + "/synARKa-brief.pdf",
    "3. 1st-Insight Intake, free (2pp) — " + SITE + "/synARKa-1st-insight-intake.pdf",
    "4. Sample Mutual NDA & Engagement Terms (2pp) — " + SITE + "/synARKa-sample-nda-terms.pdf",
    "",
    "The whole flow: " + SITE + "/pitch.html",
    "Book 15 minutes: https://cal.com/raj-aaa/synarka",
    "",
    "The first Insight is free — one corridor question in, a calibrated Insight back, timestamped on the ledger. Month-to-month after that, no lock-in.",
    "",
    "— Raj Singh · +61 469 313 323 · raj@synarka.pro",
    "My card: " + SITE + "/card"
  ].join("\n");

  /* ---------- number normaliser (same logic as pitch.html) ---------- */
  function normalise(raw) {
    var v = (raw || "").replace(/[\s()\-.]/g, "");
    if (!v) return null;
    if (v.charAt(0) === "+") {                        // international, as typed
      v = v.slice(1).replace(/\D/g, "");
      return v.length >= 8 ? v : null;
    }
    v = v.replace(/\D/g, "");
    if (/^61\d{9}$/.test(v)) return v;                // 61412345678
    if (/^0\d{9}$/.test(v))  return "61" + v.slice(1);// 0412345678 -> AU
    if (/^\d{9}$/.test(v))   return "61" + v;         // 412345678  -> AU
    return null;
  }

  /* ---------- styles ---------- */
  function css() {
    try {
      if (document.getElementById('synarka-flow-css')) return;
      var s = document.createElement('style');
      s.id = 'synarka-flow-css';
      s.setAttribute(FLAG, '1');
      s.textContent = [
        /* --- 1. pill: matches .hero-meta span metrics, gold instead of muted --- */
        'a.synflow-pill{',
          'font-family:var(--font-mono,monospace);font-size:10px;letter-spacing:.18em;',
          'text-transform:uppercase;padding:6px 12px;border-radius:2px;',
          'color:var(--gold,#E6C254);border:1px solid var(--amber,#C9A227);',
          'background:rgba(201,162,39,.10);text-decoration:none;font-weight:600;',
          'display:inline-flex;align-items:center;gap:6px;white-space:nowrap;',
          'transition:background .2s ease,color .2s ease;}',
        'a.synflow-pill:hover,a.synflow-pill:focus-visible{',
          'background:var(--amber,#C9A227);color:#0E0C08;outline:none;}',
        'body.light-mode a.synflow-pill{background:rgba(201,162,39,.14)}',
        /* --- 2. button: borrows .btn-secondary metrics, gold border --- */
        'a.synflow-btn{border-color:var(--amber,#C9A227)!important;color:var(--gold,#E6C254)!important;}',
        'a.synflow-btn:hover,a.synflow-btn:focus-visible{background:rgba(201,162,39,.12)!important;outline:none;}',
        /* --- 3. WhatsApp sender --- */
        '.synflow-wa{margin-top:22px;border:1px solid rgba(37,211,102,.30);border-radius:6px;',
          'background:rgba(37,211,102,.045);padding:18px 20px;max-width:100%;}',
        '.synflow-wa .swa-k{font-family:var(--font-mono,monospace);font-size:10px;letter-spacing:.18em;',
          'text-transform:uppercase;color:#25D366;font-weight:700;margin-bottom:8px;}',
        '.synflow-wa .swa-s{font-size:13.5px;color:var(--text-2,#9E957F);line-height:1.6;margin-bottom:13px;max-width:640px;}',
        '.synflow-wa .swa-s em{color:var(--text-3,#6B6453);font-style:italic;}',
        '.synflow-wa .swa-row{display:flex;gap:9px;flex-wrap:wrap;align-items:stretch;}',
        '.synflow-wa input{flex:1 1 180px;min-width:0;background:var(--canvas,#0E0C08);',
          'border:1px solid var(--border-strong,#4A3F26);border-radius:4px;padding:12px 14px;',
          'color:var(--text,#ECE6D8);font-family:var(--font-mono,monospace);font-size:13px;}',
        '.synflow-wa input:focus{outline:none;border-color:#25D366;}',
        '.synflow-wa button{font-family:var(--font-mono,monospace);font-size:11px;letter-spacing:.1em;',
          'text-transform:uppercase;font-weight:700;background:#25D366;color:#08130c;',
          'border:1px solid #25D366;border-radius:4px;padding:12px 20px;cursor:pointer;white-space:nowrap;}',
        '.synflow-wa button:hover{opacity:.9}',
        '.synflow-wa .swa-err{display:none;margin-top:9px;font-size:13px;color:#F87171;line-height:1.5;}',
        '.synflow-wa .swa-note{margin-top:11px;font-family:var(--font-mono,monospace);font-size:9.5px;',
          'letter-spacing:.05em;color:var(--text-3,#6B6453);line-height:1.75;}',
        '.synflow-wa .swa-note b{color:var(--text-2,#9E957F)}',
        'body.light-mode .synflow-wa input{background:#fff;color:#17120A}',
        '@media(prefers-reduced-motion:reduce){a.synflow-pill{transition:none}}',
        /* small phones: never let the pill or the row push the page wide */
        '@media(max-width:420px){',
          'a.synflow-pill{white-space:normal;text-align:center;letter-spacing:.12em}',
          '.synflow-wa{padding:15px 14px}',
          /* row stacks — kill flex-grow or the input balloons on the main axis */
          '.synflow-wa .swa-row{flex-direction:column;align-items:stretch}',
          '.synflow-wa input{flex:0 0 auto;width:100%}',
          '.synflow-wa button{flex:0 0 auto;width:100%}',
        '}'
      ].join('');
      (document.head || document.documentElement).appendChild(s);
    } catch (e) {}
  }

  /* ---------- 1. hero pill ---------- */
  function pill() {
    try {
      var host = document.querySelector('.hero-meta');
      if (!host || host.querySelector('a.synflow-pill')) return;
      var a = document.createElement('a');
      a.className = 'synflow-pill';
      a.setAttribute(FLAG, '1');
      a.href = HREF;
      a.textContent = '▶ THE FLOW · ALL 4 DOCUMENTS · OPEN NOW';
      a.setAttribute('aria-label', 'The Flow — all four documents, open now');
      host.insertBefore(a, host.firstChild);
    } catch (e) {}
  }

  /* ---------- 1b. "understand" pill → how.html ---------- */
  function pillHow() {
    try {
      var host = document.querySelector('.hero-meta');
      if (!host || host.querySelector('a.synflow-pill-how')) return;
      var a = document.createElement('a');
      a.className = 'synflow-pill synflow-pill-how';
      a.setAttribute(FLAG, '1');
      a.href = 'how.html';
      a.textContent = '⚡ UNDERSTAND SYNARKA · 60 SECONDS';
      a.setAttribute('aria-label', 'Understand synARKa in 60 seconds — who are you, what you get, what it costs');
      /* place immediately after the FLOW pill if present, else first */
      var flow = host.querySelector('a.synflow-pill:not(.synflow-pill-how)');
      if (flow && flow.nextSibling) host.insertBefore(a, flow.nextSibling);
      else host.insertBefore(a, host.firstChild);
    } catch (e) {}
  }

  /* ---------- 2. hero CTA button ---------- */
  function button() {
    try {
      var row = document.querySelector('.hero-cta-row');
      if (!row || row.querySelector('a.synflow-btn')) return;
      var a = document.createElement('a');
      a.className = 'btn-secondary synflow-btn';   // borrow the page's own metrics
      a.setAttribute(FLAG, '1');
      a.href = HREF;
      a.innerHTML = '<span>▶ THE FLOW · READ · FILL · CHECK · SHARE →</span>';
      row.insertBefore(a, row.firstChild);
    } catch (e) {}
  }

  /* ---------- 3. WhatsApp pack sender in #documents ---------- */
  function sender() {
    try {
      var host = document.querySelector('#documents .skdoc-in') || document.querySelector('#documents');
      if (!host || host.querySelector('.synflow-wa')) return;

      var box = document.createElement('div');
      box.className = 'synflow-wa';
      box.setAttribute(FLAG, '1');

      var k = document.createElement('div');
      k.className = 'swa-k';
      k.textContent = '↳ Send all four documents by WhatsApp';

      var s = document.createElement('p');
      s.className = 'swa-s';
      s.innerHTML = 'Type their mobile number. WhatsApp opens with all four document links already written out — ' +
                    'you just press send. <em>Australian numbers work as 0412 345 678; overseas, start with +.</em>';

      var row = document.createElement('div');
      row.className = 'swa-row';

      var input = document.createElement('input');
      input.type = 'tel';
      input.id = 'synflowWaNum';
      input.setAttribute('inputmode', 'tel');
      input.setAttribute('autocomplete', 'tel');
      input.placeholder = '0412 345 678';
      input.setAttribute('aria-label', 'Mobile number to send the document pack to');

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.id = 'synflowWaGo';
      btn.textContent = 'Send the pack →';

      var err = document.createElement('div');
      err.className = 'swa-err';
      err.id = 'synflowWaErr';
      err.setAttribute('role', 'alert');

      var note = document.createElement('div');
      note.className = 'swa-note';
      note.innerHTML = 'Opens WhatsApp on your device with the message ready — ' +
        '<b>nothing is sent until you press send in WhatsApp</b>, and no number is stored or seen by synARKa. ' +
        'A web page cannot attach PDFs into WhatsApp without a Business API account, so the message carries links, not files.';

      row.appendChild(input); row.appendChild(btn);
      box.appendChild(k); box.appendChild(s); box.appendChild(row);
      box.appendChild(err); box.appendChild(note);
      host.appendChild(box);

      function fail(m) { err.textContent = m; err.style.display = 'block'; }

      function send() {
        try {
          err.style.display = 'none';
          var n = normalise(input.value);
          if (!n) {
            fail("That doesn't look like a mobile number. Try 0412 345 678, or start with + for overseas.");
            input.focus();
            return;
          }
          window.open('https://wa.me/' + n + '?text=' + encodeURIComponent(MSG), '_blank', 'noopener');
        } catch (e) {}
      }

      btn.addEventListener('click', send);
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); send(); }
      });
      input.addEventListener('input', function () {
        if (err.style.display === 'block') err.style.display = 'none';
      });
    } catch (e) {}
  }

  function mount() {
    try { css(); pill(); pillHow(); button(); sender(); } catch (e) {}
  }

  try {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', mount, { once: true });
    } else {
      mount();
    }
  } catch (e) {
    try { mount(); } catch (e2) {}
  }
})();
