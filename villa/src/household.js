import * as T from 'three';
import {M,V,box,ball,group,cylinder,rod,tube,material,mesh,bake,glass} from './studio.js';
import {books} from './books.js';
import {buildBathroom} from './bathroom.js';

function enamel(text,bg,fg,w=384,h=466){
  const c=document.createElement('canvas');c.width=w;c.height=h;
  const ctx=c.getContext('2d');ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
  ctx.strokeStyle=fg;ctx.lineWidth=3;ctx.strokeRect(20,20,w-40,h-40);
  ctx.lineWidth=1;ctx.strokeRect(27,27,w-54,h-54);
  ctx.fillStyle=fg;ctx.font='bold 77px "Songti SC","SimSun",serif';
  ctx.textAlign='center';ctx.textBaseline='middle';
  const split=Math.ceil(text.length/2);
  ctx.fillText(text.slice(0,split),w/2,h*.41,w*.84);ctx.fillText(text.slice(split),w/2,h*.62,w*.84);
  const map=new T.CanvasTexture(c);map.colorSpace=T.SRGBColorSpace;map.anisotropy=4;
  return new T.MeshStandardMaterial({map,roughness:.75});
}

export function household(scene,fixed,shell,block,model,studyFloorStart){
  const actions=[],seats=[],circuits=[],streams=[];
  const interact=(label,point,size,run,range=2.6)=>actions.push({label,point,size,run,range});
  function circuit(name,x,z,yaw,lights,castShadow=true){
    const plate=group(scene,x,1.26,z);plate.rotation.y=yaw;
    box(plate,0,0,0,.145,.205,.026,M.brass,.008);
    const rocker=box(plate,0,0,.025,.079,.112,.032,M.cream,.008);
    const bulb=new T.MeshStandardMaterial({color:0xfff0d5,emissive:0xffc478});
    const sources=lights.map(([lx,ly,lz,power,range])=>{
      const light=new T.PointLight(0xffe8d2,power,range,2);light.position.set(lx,ly,lz);scene.add(light);
      return {light,power};
    });
    // One shadow-casting emitter per circuit. A static shadow map also contains the curtains.
    sources[0].light.castShadow=castShadow;sources[0].light.shadow.mapSize.set(256,256);
    sources[0].light.shadow.autoUpdate=false;sources[0].light.shadow.needsUpdate=true;
    sources[0].light.shadow.camera.near=.10;sources[0].light.shadow.bias=-.001;
    sources[0].light.shadow.normalBias=.018;sources[0].light.shadow.camera.far=lights[0][4];
    sources[0].light.shadow.radius=2.3;
    const state={name,on:true,bulb,sources};
    const apply=()=>{rocker.rotation.x=state.on?-.21:.21;bulb.emissiveIntensity=state.on?1.8:0;
      for(const {light,power} of sources)light.intensity=state.on?power:0;};
    apply();circuits.push(state);
    interact(()=>name+(state.on?' · 关灯':' · 开灯'),V(x,1.26,z),[.28,.34,.26],()=>{state.on=!state.on;apply();});
    return bulb;
  }
  const livingBulb=circuit('客厅灯',3.58,1.02,-Math.PI/2,[[-5.5,3.19,-1.25,54,15],[-6.25,3.15,3.65,30,10],[-10.38,1.10,.38,4,3.6]]);
  const bedroomBulb=circuit('卧室灯',3.98,3.24,Math.PI/2,[[7.3,3.12,1.1,32,10],[5.42,1.31,5.22,6,3.8]]);
  const kitchenBulb=circuit('厨房灯',2.94,5.85,Math.PI,[[.52,2.46,5.00,17,7],[2.6,2.46,5,13,6]]);
  for(const x of [.6,2.6])cylinder(fixed,x,2.48,5.02,.17,.17,.014,kitchenBulb);
  // The rear library has its own threshold, ceiling, seaward side window and open doorway.
  function wall(x,z,w,h,d,y=h/2){box(shell,x,y,z,w,h,d,M.plaster);if(y===h/2)block(x,z,w,d,'墙');}
  const study=group(scene);
  const studyFloorEnd=11.82;
  box(study,-6.85,-.10,(studyFloorStart+studyFloorEnd)/2,8.30,.20,studyFloorEnd-studyFloorStart,M.table);
  wall(-2.74,8.93,.20,3.55,5.82);wall(-6.85,11.79,8.32,3.55,.22);
  wall(-10.94,6.73,.20,3.55,1.32);wall(-10.94,11.06,.20,3.55,1.59);
  wall(-10.94,8.83,.20,.81,2.87);box(shell,-10.94,3.13,8.83,.2,.84,2.87,M.plaster);
  box(study,-10.94,1.76,8.83,.02,1.92,2.87,glass);
  for(const zz of [7.42,8.83,10.24])box(study,-10.93,1.77,zz,.12,1.95,.055,M.walnut);
  box(shell,-6.85,3.65,8.94,8.6,.20,6.12,M.trim);
  box(shell,-6.85,3.83,8.94,8.78,.18,6.27,M.roof);
  box(study,-8.99,3.08,6.1,1.68,1.47,.27,M.plaster);
  for(const x of [-9.84,-8.14])box(study,x,1.20,6.1,.10,2.43,.33,M.trim);
  const studyBulb=circuit('书房灯',-7.90,6.29,0,[[-6.85,2.81,8.85,36,10],[-4.25,1.26,9.89,4.6,4]]);
  rod(study,V(-6.85,3.54,8.85),V(-6.85,3.00,8.85),.017,M.brass);
  cylinder(study,-6.85,2.98,8.85,.12,.31,.23,M.green);cylinder(study,-6.85,2.85,8.85,.27,.27,.018,studyBulb);
  box(study,-6.95,1.20,11.44,6.50,2.40,.29,M.walnut);
  for(const xx of [-10.13,-8.56,-6.94,-5.32,-3.77])box(study,xx,1.19,11.26,.073,2.42,.52,M.oak);
  for(const y of [.19,.70,1.24,1.80,2.38])box(study,-6.95,y,11.23,6.5,.070,.57,M.oak);
  block(-6.95,11.30,6.55,.6);
  const jackets=[M.green,M.clay,M.blue,M.velvet,M.ivory,M.walnut];
  for(let row=0;row<4;row++)for(let i=0;i<38;i++){
    if(row===2&&i>5&&i<33)continue;
    const x=-10+i*.162,h=.28+.105*(.5+.5*Math.sin(i*4.3+row)),y=[.23,.74,1.28,1.84][row];
    box(study,x,y+h/2,11.12,.112,h,.25,jackets[(row*3+i)%6]);
    box(study,x,y+h*.78,10.99,.095,.011,.008,M.brass);
  }
  books.slice(0,3).forEach((book,i)=>{
    const x=-8.65+i*1.58;box(study,x,1.52,11.02,.39,.49,.12,material(book.color),.011);
    const face=mesh(study,new T.PlaneGeometry(.375,.45),enamel(book.title,book.color,'#efddb1'),x,1.52,10.953);
    face.rotation.y=Math.PI;
    interact(()=>'翻开《'+book.title+'》',V(x,1.52,10.91),[.66,.55,.19],api=>api.read(i));
  });
  box(study,-4.59,.77,9.22,1.13,.09,2.23,M.table,.04);
  for(const xx of [-5.02,-4.16])for(const zz of [8.36,10.06])box(study,xx,.37,zz,.079,.73,.079,M.walnut);
  block(-4.59,9.22,1.13,2.23);model('dining_chair_02',-5.59,9.16,.52,Math.PI/2);
  cylinder(study,-4.25,.84,9.89,.14,.17,.044,M.brass);rod(study,V(-4.25,.84,9.89),V(-4.25,1.30,9.89),.027,M.brass);
  cylinder(study,-4.25,1.37,9.89,.12,.20,.19,M.green);
  cylinder(study,-4.25,1.272,9.89,.185,.185,.012,studyBulb);
  bake(study);
  function seat(label,x,z,y,at,width=.62,depth=.77){seats.push({label,point:V(x,y-.65,z),size:[width,.79,depth],eye:V(x,y,z),at});}
  for(const z of [-2.37,-1.40,-.43])seat('客厅沙发',-4.60,z,1.16,V(-10.74,1.96,-1.38),.96,.94);
  const chairX=-1.18,chairZ=-1.76;
  model('mid_century_lounge_chair',chairX,chairZ,.96,Math.PI);
  block(chairX,chairZ,.96,1.13);
  seat('观海单人椅',chairX,chairZ,1.15,V(chairX,1.20,-18),.94,1.06);
  model('mid_century_lounge_chair',-9.52,8.55,.91,.57);block(-9.52,8.55,.88,.88);
  seat('书房阅读椅',-9.52,8.55,1.13,V(-7.55,1.47,11.30),.93,.89);
  seat('书桌椅',-5.59,9.16,1.20,V(-4.4,1.03,9.17));block(-5.59,9.16,.5,.5);
  for(const x of [-7.15,-5.55])for(const z of [2.85,4.83])seat('餐椅',x,z,1.19,V(x,1.03,3.83));
  // Slatted bench faces the sea. The swing seat and its eye point use the same pendulum.
  for(let i=0;i<5;i++)box(fixed,-5.4,.46,-8.14+i*.10,2.08,.065,.089,M.table,.014);
  for(const x of [-6.24,-4.56])for(const z of [-8.09,-7.76])box(fixed,x,.22,z,.083,.42,.083,M.bronze);
  for(let i=0;i<3;i++)box(fixed,-5.4,.65+i*.14,-7.69,2.08,.109,.060,M.table,.014);
  block(-5.4,-7.92,2.12,.55);seat('露台长椅',-5.4,-7.95,1.21,V(-5.4,1.46,-22),2.0);
  const sx=7.2,sz=-8.15;
  for(const x of [sx-1.25,sx+1.25]){
    for(const dz of [-.78,.78])rod(fixed,V(x,0,sz+dz),V(x,2.72,sz),.067,M.oak);
    block(x,sz,.13,1.54);
  }
  rod(fixed,V(sx-1.37,2.72,sz),V(sx+1.37,2.72,sz),.082,M.oak);
  const swing=group(scene,sx,2.65,sz);
  for(const dx of [-.59,.59])for(const dz of [-.16,.16])rod(swing,V(dx,0,0),V(dx,-2.15,dz),.014,M.bronze);
  box(swing,0,-2.16,0,1.44,.084,.48,M.table,.025);bake(swing);
  block(sx,sz,1.52,.59);seat('海景秋千',sx,sz,1.24,V(sx,1.5,-20),1.5);
  const swingSeat=seats.at(-1);swingSeat.pivot=swing;
  // Both machines dispense into a cup. The stream and liquid surface run only during a pour.
  function dispenser(label,x,z,y,coffee){
    const g=group(fixed,x,y,z),width=coffee?.43:.52,height=coffee?.48:1.05;
    box(g,0,height/2,.05,width,height,.32,coffee?M.ink:M.cream,.04);
    box(g,0,height*.09,-.12,width,.065,.36,M.metal,.018);
    box(g,0,height*.79,-.08,width,.14,.33,coffee?M.metal:M.green,.023);
    cylinder(g,0,height*.66,-.185,.027,.024,.09,M.metal);
    if(!coffee){cylinder(g,0,1.25,.045,.19,.17,.39,material(0x8ab0bc,.23));block(x,z,.57,.56);}
    const bottom=height*.09+.038;
    cylinder(g,0,bottom+.048,-.19,.064,.048,.096,M.ivory);
    const fluid=coffee?material(0x432913,.26):material(0x87bac0,.18);
    const stream=cylinder(scene,x,y+height*.45,z-.185,.009,.009,height*.38,fluid,10);stream.visible=false;
    const liquid=cylinder(scene,x,y+bottom+.05,z-.19,.055,.05,.008,fluid);liquid.visible=false;
    const pour={stream,liquid,remaining:0,base:y+bottom};streams.push(pour);
    interact(()=>label,V(x,y+height*.64,z-.12),[width+.1,height+.10,.49],()=>{pour.remaining=3;liquid.visible=true;});
  }
  dispenser('咖啡机 · 萃取一杯',2.71,5.33,1.05,true);dispenser('饮水机 · 接水',-2.77,5.35,0,false);
  const bath=group(scene);
  const bathroom=buildBathroom(scene,bath,shell,block,circuit);
  bake(bath);
  actions.push(bathroom.action);
  return {actions,seats,circuits,livingBulb,bedroomBulb,bathroom,update(t,dt,occupied){
    const amplitude=occupied===swingSeat?.19:.025;
    swing.rotation.x=T.MathUtils.damp(swing.rotation.x,Math.sin(t*1.62)*amplitude,5,dt);
    for(const p of streams){if(p.remaining<=0)continue;p.remaining=Math.max(0,p.remaining-dt);
      p.stream.visible=p.remaining>0;p.liquid.position.y=p.base+.018+.079*(1-p.remaining/3);}
  }};
}
