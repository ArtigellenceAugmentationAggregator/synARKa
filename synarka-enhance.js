/* synARKa enhancement layer — one-line install: <script src="synarka-enhance.js" defer></script>
   Rollback = delete the line. Desktop + fine pointer only for heavy effects.
   ADAPTIVE GUARD: particle field mounts ONLY on light pages (<9000px tall) —
   the heavy live dashboard automatically gets the lean set. Every block try/caught. */
(function(){try{
 var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 var fine=window.matchMedia('(pointer: fine)').matches && window.innerWidth>920;
 function mount(){
  /* 1 — scroll progress bar (all devices, cheap) */
  try{
   var bar=document.createElement('div');
   bar.style.cssText='position:fixed;top:0;left:0;height:2px;width:0;background:linear-gradient(90deg,#C9A227,#E6C254);z-index:99997;pointer-events:none;transition:width .08s linear';
   document.body.appendChild(bar);
   var tick=false;
   addEventListener('scroll',function(){if(tick)return;tick=true;requestAnimationFrame(function(){
     var h=document.documentElement,max=h.scrollHeight-h.clientHeight;
     bar.style.width=(max>0?(h.scrollTop/max*100):0)+'%';tick=false;});},{passive:true});
  }catch(e){}
  if(rm)return; /* reduced motion: progress bar only */
  /* 2 — CTA shine on existing primary buttons (keyed to existing classes) */
  try{
   var st=document.createElement('style');
   st.textContent='.btn-primary,.btn-p{position:relative;overflow:hidden}'+
    '.btn-primary::after,.btn-p::after{content:"";position:absolute;top:0;left:-80%;width:50%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.45),transparent);transform:skewX(-20deg);animation:skshine 4.2s ease-in-out infinite}'+
    '@keyframes skshine{14%{left:130%}100%{left:130%}}'+
    '.sk-reveal{opacity:0;transform:translateY(12px);transition:opacity .6s ease,transform .6s ease}'+
    '.sk-reveal.sk-in{opacity:1;transform:none}';
   document.head.appendChild(st);
  }catch(e){}
  /* 3 — scroll reveals keyed to existing section-ish blocks */
  try{
   var sels='.traction-cell,.dcard,.truth,.pf,.step,.blk';
   var els=document.querySelectorAll(sels);
   if(els.length&&els.length<160){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('sk-in');io.unobserve(e.target);}});},{threshold:.12});
    els.forEach(function(el,i){el.classList.add('sk-reveal');el.style.transitionDelay=(i%4)*70+'ms';io.observe(el);});
   }
  }catch(e){}
  if(!fine)return; /* mobile/touch stop here */
  /* 4 — 3D tilt on cards (desktop only, capped) */
  try{
   var cards=document.querySelectorAll('.traction-cell,.dcard,.truth,.pf');
   Array.prototype.slice.call(cards,0,40).forEach(function(c){
    c.style.transformStyle='preserve-3d';c.style.willChange='transform';
    c.addEventListener('mousemove',function(ev){var r=c.getBoundingClientRect();
      var x=(ev.clientX-r.left)/r.width-.5,y=(ev.clientY-r.top)/r.height-.5;
      c.style.transform='perspective(700px) rotateY('+(x*7)+'deg) rotateX('+(-y*7)+'deg)';});
    c.addEventListener('mouseleave',function(){c.style.transform='';});
   });
  }catch(e){}
  /* 5 — gold-dust particles: ADAPTIVE — only on light pages */
  try{
   if(document.documentElement.scrollHeight<9000){
    var cv=document.createElement('canvas');
    cv.style.cssText='position:fixed;inset:0;z-index:-1;pointer-events:none;opacity:.5';
    document.body.appendChild(cv);var cx=cv.getContext('2d');
    var W,H,ps=[],mx=-999,my=-999;
    function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;}rs();addEventListener('resize',rs);
    for(var i=0;i<38;i++)ps.push({x:Math.random(),y:Math.random(),r:.6+Math.random()*1.3,s:.02+Math.random()*.05,o:.15+Math.random()*.3});
    addEventListener('mousemove',function(e){mx=e.clientX/W-.5;my=e.clientY/H-.5;},{passive:true});
    (function loop(){cx.clearRect(0,0,W,H);
     ps.forEach(function(p){p.y-=p.s/100;if(p.y<0)p.y=1;
      var px=(p.x+mx*.02*p.r)*W,py=(p.y+my*.02*p.r)*H;
      cx.beginPath();cx.arc(px,py,p.r,0,6.283);
      cx.fillStyle='rgba(230,194,84,'+p.o+')';cx.fill();});
     requestAnimationFrame(loop);})();
   }
  }catch(e){}
 }
 if('requestIdleCallback' in window)requestIdleCallback(mount,{timeout:2500});
 else setTimeout(mount,900);
}catch(e){}})();
