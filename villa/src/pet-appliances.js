import * as T from 'three';
import {V,M,box,ball,cylinder,tube,rod,mesh,group,bake,material} from './studio.js';
import {litterPosition} from './bathroom.js';

export const feeder={x:3.34,z:-1.69};
export const fountain={x:3.37,z:-.37};
export const meals=[7,12,18];
export function mealAt(now){
  const local=new Date(now+8*3600000);
  const midnight=Date.UTC(local.getUTCFullYear(),local.getUTCMonth(),local.getUTCDate())-8*3600000;
  const hour=meals.filter(h=>midnight+h*3600000<=now).at(-1);
  return hour===undefined?midnight-86400000+meals.at(-1)*3600000:midnight+hour*3600000;
}

export function petAppliances(scene,fixed,block){
  const grain=material(0x97633c,.92),water=material(0x78aaaa,.17,.24);
  const machine=group(fixed,feeder.x,0,feeder.z);
  machine.rotation.y=Math.PI/2;
  box(machine,0,.004,-.068,.56,.008,.7,M.green,.003);
  box(machine,0,.30,.055,.39,.54,.33,M.ivory,.055);
  box(machine,0,.56,.055,.39,.055,.33,M.walnut,.018);
  box(machine,0,.287,-.120,.15,.105,.022,M.ink,.008);
  box(machine,0,.38,-.119,.13,.050,.012,M.black,.008);
  box(machine,0,.38,-.129,.085,.009,.008,new T.MeshBasicMaterial({color:0x8bcbd0}));
  const metalBowl=new T.LatheGeometry([[.045,0],[.105,.012],[.151,.09],[.149,.10],[.137,.094],[.100,.033],[.042,.024]].map(([x,y])=>new T.Vector2(x,y)),36);
  cylinder(machine,0,.071,-.245,.116,.133,.126,M.green);
  mesh(machine,metalBowl,M.metal,0,.134,-.245);
  const serving=group(scene,feeder.x-.245,.213,feeder.z);
  for(let i=0;i<32;i++){
    const a=i*2.399,r=.114*Math.sqrt(i/32);
    ball(serving,r*Math.cos(a),.022*(1-r/.12),r*Math.sin(a),.014,.01,.012,grain);
  }
  bake(serving);block(feeder.x-.06,feeder.z,.71,.55);
  const falling=group(scene,feeder.x-.18,.16,feeder.z);
  for(let i=0;i<5;i++)ball(falling,-i*.011,i*.023,(i%3-1)*.024,.012,.009,.011,grain);
  bake(falling);
  const drink=group(fixed,fountain.x,0,fountain.z);
  cylinder(drink,0,.10,0,.21,.205,.19,M.ivory);
  cylinder(drink,0,.198,0,.18,.18,.008,water);
  tube(drink,[V(.08,.19,0),V(.08,.33,0),V(-.02,.32,0),V(-.06,.20,0)],.012,water);
  block(fountain.x,fountain.z,.46,.46);

  // Open-entry self-cleaning tray. The comb travels through the bed to a covered rear bin.
  const {x,z}=litterPosition,base=group(fixed,x,0,z);
  const sand=material(0xcaba9d,.98),liner=material(0x788e83,.67);
  box(base,0,.061,0,.78,.12,.94,M.ivory,.045);
  box(base,0,.138,-.061,.674,.045,.66,sand,.014);
  for(const side of [-1,1]){
    box(base,side*.365,.235,.012,.059,.33,.90,liner,.025);
    rod(base,V(side*.334,.284,-.375),V(side*.334,.284,.286),.014,M.metal);
  }
  box(base,0,.225,.405,.77,.33,.16,M.ivory,.025);
  box(base,0,.037,-.471,.53,.069,.18,liner,.022);
  const lid=group(scene,x,.40,z+.48);
  box(lid,0,0,-.11,.73,.037,.22,liner,.016);bake(lid);
  const comb=group(scene,x,.391,z+.295);
  box(comb,0,0,0,.69,.043,.034,M.metal,.008);
  for(let i=0;i<17;i++)rod(comb,V(-.303+i*.038,-.012,0),V(-.303+i*.038,-.112,-.012),.005,M.metal);
  bake(comb);
  const led=new T.MeshBasicMaterial({color:0x9bd6a0});
  box(base,.365,.413,-.24,.039,.014,.075,led,.006);
  for(let i=0;i<80;i++){
    const xx=Math.sin(i*34.23)*.307,zz=Math.sin(i*12.71)*.285-.05;
    const fleck=mesh(base,new T.IcosahedronGeometry(.009,0),i%3?M.cream:sand,xx,.160,zz);
    fleck.scale.y=.28;
  }
  const clump=group(scene,x-.12,.173,z-.080);
  ball(clump,0,0,0,.049,.019,.034,grain);ball(clump,.04,0,-.016,.029,.017,.026,grain);bake(clump);
  clump.visible=false;block(x,z,.82,1.04);
  let manual=0;
  try{manual=Number(localStorage.getItem('villa.extraMeal'))||0;}catch{}
  addEventListener('storage',e=>{if(e.key==='villa.extraMeal')manual=Number(e.newValue)||0;});
  let slot=0,portion=0,checked=-1;
  function feed(now){
    slot=Math.max(mealAt(now),manual<=now?manual:0);
    portion=Math.max(0,1-(now-slot)/(14*60000));
    serving.visible=portion>.02;serving.scale.setScalar(.44+.56*portion);
  }
  let phase='idle',away=0,cycle=0,dirty=false,wasInside=false,repeat=false;
  function clean(dt,cat){
    const dx=Math.abs(cat.x-x),dz=cat.z-z;
    const inside=dx<.34&&Math.abs(dz)<.40;
    const near=dx<.70&&dz>-.91&&dz<.75;
    if(inside){
      dirty=true;
      if(!wasInside&&cycle>0)repeat=true;
    }
    if(wasInside&&!inside)clump.visible=true;
    wasInside=inside;
    if(near){
      away=0;
      if(dirty||phase!=='idle')phase='occupied';
    }else if(dirty){
      away+=dt;
      phase=away<5?'waiting':'cleaning';
      if(phase==='cleaning'){
        cycle=Math.min(1,cycle+dt/5.2);
        const out=T.MathUtils.smoothstep(cycle,.02,.28),sweep=T.MathUtils.smoothstep(cycle,.36,.82);
        comb.position.z=z+.295-.66*(out-sweep);
        comb.position.y=.391-.115*(T.MathUtils.smoothstep(cycle,.28,.36)-T.MathUtils.smoothstep(cycle,.82,.91));
        lid.rotation.x=.92*(T.MathUtils.smoothstep(cycle,.61,.78)-T.MathUtils.smoothstep(cycle,.92,1));
        if(cycle>.36)clump.position.z=Math.max(z-.08,comb.position.z+.025);
        if(cycle>.82)clump.visible=false;
        if(cycle===1){
          dirty=repeat;repeat=false;phase=dirty?'waiting':'idle';away=cycle=0;
          clump.position.z=z-.08;clump.visible=dirty;
        }
      }
    }
    led.color.setHex(phase==='cleaning'?0x7dcadd:dirty?0xedbe74:0x9bd6a0);
  }
  return {get meal(){return portion>.02?slot:0;},get cleaning(){return phase;},actions:[
    {label:()=>'喂食器 · 加一份猫粮',point:V(feeder.x-.18,.36,feeder.z),size:[.55,.60,.50],range:2.3,run(api){
      manual=Date.now();try{localStorage.setItem('villa.extraMeal',String(manual));}catch{}
      feed(manual);api.hint('已出粮 · 每日 07:00、12:00、18:00 自动投喂（上海时间）',4200);
    }},
    {label:()=>'查看猫咪饮水机',point:V(fountain.x,.22,fountain.z),size:[.46,.42,.46],range:2,run(api){api.hint('循环饮水机正在供水',2400);}},
    {label:()=>'自动猫砂盆 · 清理',point:V(x+.31,.34,z-.18),size:[.75,.68,.80],range:2.4,run(api){
      if(phase==='cleaning'){api.hint('耙齿正在把结团送入后方集便仓',2600);return;}
      dirty=true;api.hint(phase==='occupied'?'猫还在附近，离开后会开始清理':'已排队清理，感应区空出五秒后启动',3200);
    }}
  ],update(t,dt,cat){
    const now=Date.now(),second=Math.floor(now/1000);
    if(second!==checked){checked=second;feed(now);}
    falling.visible=now-slot<2800;falling.position.y=.222+(.085-(t*.4%.085));
    clean(dt,cat);
  }};
}
