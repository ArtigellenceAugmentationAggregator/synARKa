/* synARKa Desk widget — one-line install: <script src="synarka-widget.js" defer></script>
   Injects its own CSS. Rollback = delete the line. Additive only. */
(function(){try{
var CSS='#skw-b{position:fixed;right:22px;bottom:22px;z-index:9998;background:#C9A227;color:#0E0C08;border:none;border-radius:26px;padding:13px 20px;font-family:"IBM Plex Mono",Consolas,monospace;font-size:11px;letter-spacing:.08em;font-weight:600;cursor:pointer;box-shadow:0 4px 22px rgba(201,162,39,.35)}'+
'#skw-p{position:fixed;right:22px;bottom:76px;z-index:9999;width:min(360px,calc(100vw - 34px));background:#14110B;border:1px solid #4A3F26;border-radius:6px;display:none;flex-direction:column;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,.55)}'+
'#skw-p.open{display:flex}'+
'#skw-h{padding:12px 16px;border-bottom:1px solid #2C2618;font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.2em;color:#C9A227;display:flex;justify-content:space-between;align-items:center}'+
'#skw-x{background:none;border:none;color:#6B6453;cursor:pointer;font-size:14px}'+
'#skw-c{padding:14px;max-height:320px;overflow-y:auto;background:#0E0C08}'+
'.skw-m{margin-bottom:11px;font-family:"IBM Plex Sans",sans-serif;font-size:13px;line-height:1.5;color:#9E957F;border:1px solid #2C2618;border-radius:3px;padding:9px 12px;background:#1C180F}'+
'.skw-m.d{border-left:3px solid #C9A227;color:#ECE6D8}.skw-m.u{text-align:right}'+
'.skw-m strong{color:#E6C254}.skw-m a{color:#C9A227}'+
'#skw-ch{display:flex;flex-wrap:wrap;gap:6px;padding:0 14px 10px;background:#0E0C08}'+
'.skw-cp{font-family:"IBM Plex Mono",monospace;font-size:9.5px;color:#9E957F;border:1px solid #2C2618;background:#14110B;border-radius:12px;padding:4px 10px;cursor:pointer}'+
'#skw-r{display:flex;border-top:1px solid #2C2618}'+
'#skw-i{flex:1;background:#1C180F;border:none;color:#ECE6D8;font-family:"IBM Plex Sans",sans-serif;font-size:13px;padding:11px 13px;outline:none}'+
'#skw-s{background:#C9A227;color:#0E0C08;border:none;font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.06em;padding:0 16px;cursor:pointer;font-weight:600}'+
'@media(max-width:560px){#skw-b{right:14px;bottom:14px}#skw-p{right:8px;bottom:66px}}';
var B=[
 [['price','pricing','cost','tier','pay','how much','ladder','fee'],"<strong>Start with one question:</strong> first Insight <strong>free</strong> · 72-Hour Brief <strong>A$500</strong> · Baseline Audit <strong>A$3,500\u20137,500</strong> · SiteWatch from <strong>A$1,490/mo</strong> · tiers to A$15K+/mo. Month-to-month, no lock-in."],
 [['free','start','trial','first','begin'],"<strong>Your first Insight is free.</strong> Name your sharpest exposure \u2014 one synthesised, decision-ready answer, on us. Email <a href='mailto:raj@synarka.pro?subject=Free%20first%20Insight'>raj@synarka.pro</a> \u2014 three lines is enough."],
 [['method','engine','how','work','consensus','ai'],"<strong>SENSE \u2192 SIMULATE \u2192 VERIFY \u2192 DELIVER.</strong> Eight AI engines in consensus, dissent preserved, verified against primary sources \u2014 a timestamped, calibrated brief inside 72 hours. Full story: <a href='start.html'>the 90-second version</a>."],
 [['proof','ledger','track','result','miss'],"<strong>94K+</strong> r/energy #1 organic \u00b7 <strong>5/6</strong> resolved correct May 2026, miss published \u00b7 <strong>+10.51%</strong> ASX Materials \u2014 the sector the ledger called. Receipts: <a href='https://insights.synarka.pro' target='_blank' rel='noopener'>insights.synarka.pro</a>"],
 [['mineral','rare earth','mining','defence','government','agri','infra','domain'],"One engine, five verticals \u2014 critical minerals leads. Pain and delivery per domain: <a href='domains.html'>domains.html</a>. Or ask the full Desk: <a href='agent.html'>agent.html</a>"],
 [['contact','book','email','call','raj','whatsapp'],"Email <a href='mailto:raj@synarka.pro'>raj@synarka.pro</a> \u00b7 WhatsApp <strong>+61 469 313 323</strong> \u00b7 <a href='https://cal.com/raj-aaa/synarka' target='_blank' rel='noopener'>Book 15 minutes</a> \u2014 founder-direct, every engagement."],
 [['investor','equity','raise','invest'],"<strong>Founder-held; equity not for sale beyond 10%.</strong> Expressions of interest, founder-direct, dossier under NDA. <a href='https://cal.com/raj-aaa/synarka' target='_blank' rel='noopener'>15 minutes \u2192</a>"]
];
var FB="Beyond my script \u2014 the full Desk answers more: <a href='agent.html'>agent.html</a>. Or founder-direct: <a href='mailto:raj@synarka.pro'>raj@synarka.pro</a>";
function ans(q){var s=q.toLowerCase(),b=null,sc=0;B.forEach(function(x){var n=0;x[0].forEach(function(k){if(s.indexOf(k)>-1)n+=k.length});if(n>sc){sc=n;b=x[1]}});return b||FB}
function el(t,a,h){var e=document.createElement(t);for(var k in a)e.setAttribute(k,a[k]);if(h)e.innerHTML=h;return e}
function mount(){
 var st=el('style');st.textContent=CSS;document.head.appendChild(st);
 var btn=el('button',{id:'skw-b'},'\u25B6 ASK THE DESK');
 var p=el('div',{id:'skw-p'});
 p.appendChild(el('div',{id:'skw-h'},'<span>\u25B6 THE DESK \u00b7 SYNARKA</span><button id="skw-x">\u2715</button>'));
 var c=el('div',{id:'skw-c'});p.appendChild(c);
 var ch=el('div',{id:'skw-ch'});p.appendChild(ch);
 var r=el('div',{id:'skw-r'});
 var inp=el('input',{id:'skw-i',placeholder:'Pricing, method, proof\u2026'});
 var snd=el('button',{id:'skw-s'},'ASK');r.appendChild(inp);r.appendChild(snd);p.appendChild(r);
 document.body.appendChild(btn);document.body.appendChild(p);
 function add(who,html){var m=el('div',{class:'skw-m '+(who==='d'?'d':'u')},html);c.appendChild(m);c.scrollTop=c.scrollHeight}
 function go(q){if(!q)return;inp.value='';add('u',q.replace(/</g,'&lt;'));setTimeout(function(){add('d',ans(q))},320)}
 ['What does it cost?','How does it work?','Show me proof','Start free'].forEach(function(t){
   var b2=el('button',{class:'skw-cp'},t);b2.onclick=function(){go(t)};ch.appendChild(b2)});
 btn.onclick=function(){var o=p.classList.toggle('open');
   if(o&&!c.children.length)add('d',"G'day \u2014 the Desk here. Pricing, method, proof, or the five domains \u2014 ask away. First insight is free.");};
 p.querySelector('#skw-x').onclick=function(){p.classList.remove('open')};
 snd.onclick=function(){go(inp.value.trim())};
 inp.addEventListener('keydown',function(e){if(e.key==='Enter')go(inp.value.trim())});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
}catch(e){}})();
