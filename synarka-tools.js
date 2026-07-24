/* synARKa tools — SEARCH + 60-SEC MATCH. One-line install:
   <script src="synarka-tools.js" defer></script>  Rollback = delete the line.
   Injects two pills beside the "All Domains Active" badge. Additive only. */
(function(){try{
var CSS='.skt-pill{display:inline-flex;align-items:center;gap:6px;margin-left:10px;padding:6px 13px;border:1px solid #4A3F26;border-radius:3px;background:rgba(20,17,11,.85);color:#C9A227;font-family:"IBM Plex Mono",Consolas,monospace;font-size:10.5px;letter-spacing:.1em;cursor:pointer;vertical-align:middle;transition:border-color .2s}'+
'.skt-pill:hover{border-color:#C9A227}'+
'.skt-ov{position:fixed;inset:0;z-index:99999;background:rgba(8,7,4,.82);backdrop-filter:blur(5px);display:none;align-items:flex-start;justify-content:center;padding:9vh 18px 18px}'+
'.skt-ov.open{display:flex}'+
'.skt-box{width:min(620px,100%);background:#14110B;border:1px solid #4A3F26;border-radius:6px;overflow:hidden;box-shadow:0 18px 70px rgba(0,0,0,.6)}'+
'.skt-h{display:flex;justify-content:space-between;align-items:center;padding:13px 18px;border-bottom:1px solid #2C2618;font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.22em;color:#C9A227}'+
'.skt-x{background:none;border:none;color:#6B6453;font-size:15px;cursor:pointer}'+
'.skt-in{width:100%;background:#1C180F;border:none;border-bottom:1px solid #2C2618;color:#ECE6D8;font-family:"IBM Plex Sans",sans-serif;font-size:15px;padding:14px 18px;outline:none}'+
'.skt-list{max-height:52vh;overflow-y:auto;padding:8px}'+
'.skt-it{display:block;padding:10px 12px;border-radius:3px;text-decoration:none;cursor:pointer}'+
'.skt-it:hover,.skt-it.sel{background:#1C180F}'+
'.skt-it .t{font-family:"IBM Plex Sans",sans-serif;font-size:14px;color:#ECE6D8;font-weight:600}'+
'.skt-it .s{font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.08em;color:#6B6453;margin-top:2px}'+
'.skt-body{padding:22px}'+
'.skt-q{font-family:"Fraunces",Georgia,serif;font-size:20px;color:#ECE6D8;margin-bottom:14px}'+
'.skt-opts{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px}'+
'.skt-opt{border:1px solid #2C2618;background:#1C180F;border-radius:3px;padding:13px;cursor:pointer;transition:border-color .15s}'+
'.skt-opt:hover{border-color:#C9A227}'+
'.skt-opt .ot{font-family:"IBM Plex Sans",sans-serif;font-size:13.5px;color:#ECE6D8;font-weight:600}'+
'.skt-opt .os{font-family:"IBM Plex Mono",monospace;font-size:9.5px;color:#6B6453;margin-top:3px;letter-spacing:.05em}'+
'.skt-dots{display:flex;gap:6px;margin-bottom:16px}'+
'.skt-dot{width:22px;height:3px;background:#2C2618;border-radius:2px}'+
'.skt-dot.on{background:#C9A227}'+
'.skt-res .rt{font-family:"Fraunces",Georgia,serif;font-size:22px;color:#E6C254;margin-bottom:8px}'+
'.skt-res .rd{font-size:13.5px;color:#9E957F;margin-bottom:16px;line-height:1.55}'+
'.skt-res .rd strong{color:#ECE6D8}'+
'.skt-cta{display:inline-block;margin:0 8px 8px 0;padding:11px 18px;border-radius:2px;font-family:"IBM Plex Mono",monospace;font-size:10.5px;letter-spacing:.08em;text-decoration:none}'+
'.skt-cta.p{background:#C9A227;color:#0E0C08;font-weight:700}'+
'.skt-cta.s{border:1px solid #4A3F26;color:#ECE6D8}'+
'.skt-back{background:none;border:none;color:#6B6453;font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.1em;cursor:pointer;margin-top:14px}'+
'@media(max-width:760px){.skt-pill{margin:6px 6px 0 0}}';

/* ── SEARCH index — curated destinations ── */
var IDX=[
 {t:"Critical Minerals — flagship domain",s:"DOMAIN · OFFTAKE & EXPORT-CONTROL READ",u:"minerals.html",k:"minerals rare earth lithium mining asx offtake mofcom dysprosium export"},
 {t:"Government & Policy",s:"DOMAIN · THE CORRIDOR MOVE, 72H EARLY",u:"government.html",k:"government policy dfat think tank canberra osint"},
 {t:"Defence",s:"DOMAIN · SOVEREIGN, AUDITABLE, NO LOCK-IN",u:"defence.html",k:"defence defense aukus asca palantir prime sme military"},
 {t:"Agriculture",s:"DOMAIN · A DOLLAR ACTION",u:"agriculture.html",k:"agriculture farm crop insurer lender seasonal"},
 {t:"Infrastructure & Resources",s:"DOMAIN · INSPECT ZONE B",u:"infrastructure.html",k:"infrastructure tailings pipeline insar port fuel diesel hormuz resources"},
 {t:"All five domains — the hub",s:"ONE ENGINE, FIVE VERTICALS",u:"domains.html",k:"domains verticals hub industries"},
 {t:"Pricing — the entry ladder",s:"FREE FIRST INSIGHT → A$500 → TIERS",u:"agent.html?i=pricing",k:"pricing price cost tiers ladder fee pay sitewatch audit free"},
 {t:"The 90-second version",s:"THE FAST LANE",u:"start.html",k:"start 90 second quick summary tldr fast"},
 {t:"Ask the Desk — concierge",s:"PRICING · METHOD · PROOF · DOMAINS",u:"agent.html",k:"desk chat concierge ask agent bot help question"},
 {t:"The resolved ledger",s:"5/6 MAY 2026 · MISSES PUBLISHED",u:"https://insights.synarka.pro",k:"ledger proof track record insights resolved miss brier receipts"},
 {t:"The 10-page brief (PDF)",s:"SERVICES & SOLUTIONS · EVERYTHING SOURCED",u:"synARKa-brief.pdf",k:"brief pdf services solutions document complete"},
 {t:"Investor pack",s:"EXEC SUMMARY + BRIEF · CONFIDENTIAL",u:"pitch.html",k:"investor pitch deck pack equity raise summary executive"},
 {t:"Book 15 minutes with Raj",s:"MON–FRI 1–3 PM AEST · FOUNDER-DIRECT",u:"https://cal.com/raj-aaa/synarka",k:"book call meeting calendar contact raj founder 15"},
 {t:"Email one corridor question",s:"REPLY IN 24–48H, DIRECT FROM THE FOUNDER",u:"mailto:raj@synarka.pro",k:"email contact question free insight claim"},
 {t:"Telegram — the signal channel",s:"DAILY SIGNAL LOG",u:"https://t.me/synARKaIntelligence",k:"telegram channel signal daily"}
];

/* ── 60-SEC MATCH decision tree ── */
var WHO=[
 {t:"ASX miner / explorer",s:"OR COMMODITY DESK",v:"minerals"},
 {t:"Government / policy",s:"DFAT-ADJACENT · THINK TANK",v:"government"},
 {t:"Defence prime / SME",s:"~3,300 AUSTRALIAN SMES",v:"defence"},
 {t:"Ag-lender / insurer",s:"PRICING SEASONAL RISK",v:"agriculture"},
 {t:"Infra / resources operator",s:"SITES · CORRIDORS · FUEL",v:"infrastructure"},
 {t:"Investor / operator",s:"STRATEGIC CAPITAL",v:"investor"}];
var NEED=[
 {t:"One burning question",s:"A DECISION THIS WEEK",v:"question"},
 {t:"Watch a named asset",s:"SITE · ROUTE · COUNTERPARTY",v:"watch"},
 {t:"Standing intelligence",s:"WEEKLY CADENCE + ALERTS",v:"standing"},
 {t:"Just exploring",s:"SHOW ME THE PROOF FIRST",v:"explore"}];
function verdict(who,need){
 if(who==="investor")return{rt:"The Investor Pack",rd:"synARKa is <strong>founder-held; equity not for sale beyond 10%</strong>. Start with the one-page executive summary and the 10-page brief — then 15 minutes, founder-direct.",
   c:[["p","Open the investor pack","pitch.html"],["s","Book 15 minutes","https://cal.com/raj-aaa/synarka"]]};
 if(need==="question")return{rt:"Start free — then A$500",rd:"<strong>Your first Insight is free.</strong> Name the exposure; one synthesised, decision-ready answer from the eight-engine consensus. After that, one corridor question is A$500, inside 72 hours.",
   c:[["p","Claim your free Insight","mailto:raj@synarka.pro?subject=Free%20first%20Insight"],["s","See your domain","DOM.html"]]};
 if(need==="watch")return{rt:"Site Baseline Audit → SiteWatch",rd:"One named asset: <strong>Baseline Audit A$3,500–7,500</strong> (archive EO baseline + structural read + geopolitical context), then <strong>SiteWatch from A$1,490/mo</strong> — continuous monitoring with 48h alerts.",
   c:[["p","Book 15 minutes","https://cal.com/raj-aaa/synarka"],["s","Your domain page","DOM.html"]]};
 if(need==="standing")return{rt:"Standing tiers — month-to-month",rd:"<strong>Watch A$99 · Operator A$1,500 · Pro A$5,000 · Enterprise A$15K+/mo.</strong> No lock-in, founder-direct at every tier. Start with the free first insight and climb only if it earns it.",
   c:[["p","Ask the Desk about tiers","agent.html?i=pricing"],["s","Book 15 minutes","https://cal.com/raj-aaa/synarka"]]};
 return{rt:"Read the receipts first",rd:"Fair. <strong>5/6 published insights resolved correct in May 2026 — the miss published in full.</strong> The ledger is public, timestamped and resolution-dated. Then the 90-second version.",
   c:[["p","The resolved ledger","https://insights.synarka.pro"],["s","The 90-second version","start.html"]]};}

function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
function overlay(title){var ov=el('div','skt-ov');var bx=el('div','skt-box');
 var hd=el('div','skt-h','<span>\u25B6 '+title+'</span>');
 var x=el('button','skt-x','\u2715');x.onclick=function(){ov.classList.remove('open')};hd.appendChild(x);
 bx.appendChild(hd);ov.appendChild(bx);
 ov.addEventListener('click',function(e){if(e.target===ov)ov.classList.remove('open')});
 document.body.appendChild(ov);return{ov:ov,bx:bx}}

function mount(){
 var st=el('style');st.textContent=CSS;document.head.appendChild(st);
 var badge=document.querySelector('.sdi-domains-live');
 if(!badge)return;

 /* ── SEARCH ── */
 var so=overlay('SEARCH \u00b7 SYNARKA');
 var sin=el('input','skt-in');sin.placeholder='Search domains, pricing, proof, the brief\u2026';
 var slist=el('div','skt-list');so.bx.appendChild(sin);so.bx.appendChild(slist);
 function draw(q){slist.innerHTML='';var n=0;
  IDX.forEach(function(it){if(q&&(it.t+' '+it.k).toLowerCase().indexOf(q)===-1)return;
   if(n++>11)return;var a=el('a','skt-it','<div class="t">'+it.t+'</div><div class="s">'+it.s+'</div>');
   a.href=it.u;if(it.u.indexOf('http')===0){a.target='_blank';a.rel='noopener';}
   slist.appendChild(a);});
  if(!n)slist.appendChild(el('div','skt-it','<div class="t">Nothing here \u2014 ask the Desk instead</div><div class="s">AGENT.HTML \u00b7 OR RAJ@SYNARKA.PRO</div>'));}
 sin.addEventListener('input',function(){draw(sin.value.trim().toLowerCase())});
 draw('');

 /* ── 60-SEC MATCH ── */
 var mo=overlay('60-SEC MATCH \u00b7 FIND YOUR LANE');
 var mb=el('div','skt-body');mo.bx.appendChild(mb);
 var pick={};
 function step(n){mb.innerHTML='';
  var dots=el('div','skt-dots');for(var i=0;i<3;i++){var d=el('div','skt-dot'+(i<n?' on':''));dots.appendChild(d);}mb.appendChild(dots);
  if(n===0){mb.appendChild(el('div','skt-q','Who are you?'));var g=el('div','skt-opts');
   WHO.forEach(function(o){var b=el('div','skt-opt','<div class="ot">'+o.t+'</div><div class="os">'+o.s+'</div>');
    b.onclick=function(){pick.who=o.v;step(1)};g.appendChild(b);});mb.appendChild(g);}
  else if(n===1){mb.appendChild(el('div','skt-q','What do you need right now?'));var g2=el('div','skt-opts');
   NEED.forEach(function(o){var b=el('div','skt-opt','<div class="ot">'+o.t+'</div><div class="os">'+o.s+'</div>');
    b.onclick=function(){pick.need=o.v;step(2)};g2.appendChild(b);});mb.appendChild(g2);
   var bk=el('button','skt-back','\u2190 BACK');bk.onclick=function(){step(0)};mb.appendChild(bk);}
  else{var v=verdict(pick.who,pick.need);var dom=(pick.who==='investor')?'pitch':pick.who;
   var res=el('div','skt-res','<div class="rt">'+v.rt+'</div><div class="rd">'+v.rd+'</div>');
   v.c.forEach(function(c){var a=el('a','skt-cta '+c[0],c[1]);
    a.href=c[2].replace('DOM',dom);if(a.href.indexOf('http')===0){a.target='_blank';a.rel='noopener';}
    res.appendChild(a);});
   mb.appendChild(res);
   var bk2=el('button','skt-back','\u2190 START OVER');bk2.onclick=function(){pick={};step(0)};mb.appendChild(bk2);}}

 /* ── pills beside the badge ── */
 var p1=el('button','skt-pill','\u2315 SEARCH');
 p1.onclick=function(){so.ov.classList.add('open');draw('');sin.value='';setTimeout(function(){sin.focus()},60)};
 var p2=el('button','skt-pill','\u26A1 60-SEC MATCH');
 p2.onclick=function(){pick={};step(0);mo.ov.classList.add('open')};
 /* mount pills INSIDE the badge so they travel with it wherever site JS puts it */
 badge.style.display='inline-flex';badge.style.alignItems='center';badge.style.flexWrap='wrap';
 badge.appendChild(p1);badge.appendChild(p2);

 document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){so.ov.classList.remove('open');mo.ov.classList.remove('open');}
  if((e.ctrlKey||e.metaKey)&&e.key==='k'){e.preventDefault();p1.click();}});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
}catch(e){}})();
