// May also be included by the ShareAll player itself. Only activate after a verified villa handshake.
(()=>{
  if(window.parent===window||location.origin!=='https://pgxcg.qzz.io')return;
  const villaOrigins=['https://galok.cn','http://127.0.0.1:4176','http://localhost:4176'];
  let host=null,active=null,oldStyle,oldPopover,audio,points,linked=new WeakSet();
  const nativeElement=Object.getOwnPropertyDescriptor(Document.prototype,'fullscreenElement')?.get;
  const tell=type=>parent.postMessage({app:'galok.projector',type},host);
  function exit(){
    if(!active)return;
    const el=active;active=null;
    if(el.matches(':popover-open'))el.hidePopover();
    if(oldPopover===null)el.removeAttribute('popover');else el.setAttribute('popover',oldPopover);
    if(oldStyle===null)el.removeAttribute('style');else el.setAttribute('style',oldStyle);
    el.dispatchEvent(new Event('fullscreenchange',{bubbles:true}));
  }
  function fill(el){
    if(active===el)return;
    exit();oldStyle=el.getAttribute('style');oldPopover=el.getAttribute('popover');
    active=el;el.setAttribute('popover','manual');
    const rules={position:'fixed',inset:'0',margin:'0',padding:'0',border:'0',width:'100vw',height:'100vh','max-width':'none','max-height':'none',background:'black','box-sizing':'border-box'};
    for(const [name,value] of Object.entries(rules))el.style.setProperty(name,value,'important');
    el.showPopover();el.dispatchEvent(new Event('fullscreenchange',{bubbles:true}));
  }
  function route(el){
    if(!(el instanceof HTMLMediaElement)||linked.has(el))return;
    const src=el.currentSrc||el.src;if(!src)return;
    const url=new URL(src,location.href);
    if(url.origin!==location.origin&&!el.crossOrigin)return;
    audio??=GalokRoomAudio();if(points)audio.pose(points);
    try{audio.ctx.createMediaElementSource(el).connect(audio.input);linked.add(el);audio.ctx.resume().catch(()=>{});tell('audio');}catch{}
  }
  function install(){
    const original=Element.prototype.requestFullscreen,leave=document.exitFullscreen?.bind(document);
    Element.prototype.requestFullscreen=function(...args){if(!host)return original.apply(this,args);fill(this);return Promise.resolve();};
    document.exitFullscreen=()=>{if(!active)return leave?.();exit();return Promise.resolve();};
    Object.defineProperty(document,'fullscreenElement',{configurable:true,get:()=>active||nativeElement?.call(document)||null});
    Object.defineProperty(document,'fullscreenEnabled',{configurable:true,get:()=>true});
    document.addEventListener('keydown',e=>{if(active&&e.key==='Escape'){e.preventDefault();exit();}},true);
    for(const event of ['playing','loadeddata'])document.addEventListener(event,e=>{if(!e.target.paused)route(e.target);},true);
    document.addEventListener('pointerdown',()=>{audio?.ctx.resume().catch(()=>{});},true);
    document.querySelectorAll('video,audio').forEach(el=>{if(!el.paused)route(el);});
  }
  addEventListener('message',e=>{
    if(e.source!==parent||!villaOrigins.includes(e.origin)||e.data?.app!=='galok.villa')return;
    if(!host){host=e.origin;install();}
    if(e.data.type==='connect')tell('connected');
    if(e.data.type==='pose'&&Array.isArray(e.data.points)&&e.data.points.length===2&&e.data.points.every(p=>Array.isArray(p)&&p.length===3&&p.every(Number.isFinite))){
      points=e.data.points;audio?.pose(points);
    }
    if(e.data.type==='fill'){
      const video=document.querySelector('video');
      if(active)exit();else if(video)fill(video);else tell('no-video');
    }
  });
  const viewer=location.ancestorOrigins?.[0];
  if(villaOrigins.includes(viewer))parent.postMessage({app:'galok.projector',type:'ready'},viewer);
})();
