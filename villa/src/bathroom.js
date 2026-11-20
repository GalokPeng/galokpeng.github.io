import * as T from 'three';
import {M,V,box,ball,group,cylinder,rod,tube,material,mesh,bake} from './studio.js';

export const bathBounds={left:4.05,right:11,front:6.10,back:10.64};
export const bathDoorX=9.84;
export const litterPosition={x:8.05,z:10.04};
export function insideBathroom(x,z){
  const b=bathBounds;return x>b.left&&x<b.right&&z>b.front&&z<b.back;
}

function tileFloor(){
  const c=document.createElement('canvas');c.width=c.height=128;
  const ctx=c.getContext('2d');ctx.fillStyle='#aca697';ctx.fillRect(0,0,128,128);
  for(let x=0;x<2;x++)for(let y=0;y<2;y++){
    ctx.fillStyle=(x+y)%2?'#b9c6ba':'#ede7d6';ctx.fillRect(x*64+1,y*64+1,62,62);
  }
  const map=new T.CanvasTexture(c);map.colorSpace=T.SRGBColorSpace;
  map.wrapS=map.wrapT=T.RepeatWrapping;map.repeat.set(8,5);map.anisotropy=4;
  return new T.MeshStandardMaterial({map,roughness:.48});
}

function wallTile(){
  const c=document.createElement('canvas');c.width=c.height=192;
  const pen=c.getContext('2d');pen.fillStyle='#c6c5af';pen.fillRect(0,0,192,192);
  for(let row=0;row<4;row++)for(let col=-1;col<2;col++){
    const x=col*96+(row%2)*48,y=row*48;
    pen.fillStyle=(col+row)%2?'#8da597':'#91a89b';pen.fillRect(x+1,y+1,94,46);
    pen.fillStyle='#a1b4a7';pen.fillRect(x+2,y+2,92,1);
  }
  const map=new T.CanvasTexture(c);map.colorSpace=T.SRGBColorSpace;map.wrapS=map.wrapT=T.RepeatWrapping;map.anisotropy=4;
  const mat=new T.MeshStandardMaterial({map,roughness:.40});mat.userData.meters=.64;return mat;
}

export function buildBathroom(scene,fixed,shell,block,circuit){
  const {left,right,front,back}=bathBounds,mid=(left+right)/2,depth=back-front;
  const h=3.39,green=material(0x779387,.48),china=material(0xf3eee1,.20);
  function wall(x,z,w,d){
    box(shell,x,h/2,z,w,h,d,M.plaster);block(x,z,w,d,'墙');
  }
  wall(left,(front+back)/2,.22,depth);wall(right,(front+back)/2,.22,depth);
  const windowX=6.64,windowW=1.52,sill=1.83,top=2.78;
  const west=windowX-windowW/2,east=windowX+windowW/2;
  wall((left+west)/2,back,west-left,.22);wall((east+right)/2,back,right-east,.22);
  box(shell,windowX,sill/2,back,windowW,sill,.22,M.plaster);
  box(shell,windowX,(h+top)/2,back,windowW,h-top,.22,M.plaster);
  block(windowX,back,windowW,.22,'窗');
  const frost=new T.MeshStandardMaterial({color:0xc5d8cf,roughness:.82,transparent:true,opacity:.74});
  box(shell,windowX,(sill+top)/2,back,windowW,top-sill,.021,frost);
  for(const x of [west,windowX,east])box(shell,x,(sill+top)/2,back,.054,top-sill+.08,.14,M.trim);
  for(const y of [sill,top])box(shell,windowX,y,back,windowW+.1,.082,.25,M.trim);
  box(shell,mid,-.115,front+depth/2,right-left+.2,.22,depth,M.stone);
  box(shell,mid,h+.09,front+depth/2,right-left+.4,.18,depth+.32,M.trim);
  box(shell,mid,h+.22,front+depth/2,right-left+.56,.13,depth+.48,M.roof);
  const floor=mesh(fixed,new T.PlaneGeometry(right-left,depth),tileFloor(),mid,.004,front+depth/2);
  floor.rotation.x=-Math.PI/2;
  const tiles=wallTile();
  for(const [x,z,w,d] of [[mid,back-.13,right-left,.055],[left+.13,front+depth/2,.055,depth],[right-.13,front+depth/2,.055,depth]]){
    box(fixed,x,.58,z,w,1.16,d,tiles);
    box(fixed,x,1.17,z,w+.018,.047,d+.018,M.trim);
  }

  // Pocket door slides west. The low arched opening stays aligned with the cat's path when shut.
  const width=1.30,leaf=group(scene,bathDoorX,0,front+.11);
  const shape=new T.Shape(),hole=.21,spring=.31;
  shape.moveTo(-width/2,0);shape.lineTo(-hole,0);shape.lineTo(-hole,spring);
  shape.absarc(0,spring,hole,Math.PI,0,true);shape.lineTo(hole,0);shape.lineTo(width/2,0);
  shape.lineTo(width/2,2.35);shape.lineTo(-width/2,2.35);shape.closePath();
  mesh(leaf,new T.ExtrudeGeometry(shape,{depth:.052,bevelEnabled:false,curveSegments:12}),M.green);
  for(const face of [-.015,.068]){
    for(const side of [-1,1])box(leaf,side*.49,1.42,face,.038,1.52,.019,M.trim);
    for(const y of [.66,2.18])box(leaf,0,y,face,1.02,.04,.019,M.trim);
    box(leaf,.52,1.01,face,.045,.21,.014,M.brass,.008);
  }
  bake(leaf);
  for(const x of [bathDoorX-width/2-.055,bathDoorX+width/2+.055]){
    box(fixed,x,1.22,front,.10,2.44,.37,M.trim);
  }
  box(shell,bathDoorX,2.95,front,1.42,1.05,.31,M.plaster);
  box(fixed,bathDoorX,2.40,front,1.56,.12,.39,M.trim);
  const bulb=circuit('卫生间灯',9.02,6.34,0,[[7.83,2.75,8.42,28,5.8]],false);
  cylinder(fixed,7.83,3.34,8.42,.16,.16,.08,M.brass);
  cylinder(fixed,7.83,3.14,8.42,.018,.018,.36,M.brass);
  ball(fixed,7.83,2.91,8.42,.18,.16,.18,bulb);

  // A vanity on the east wall, a separate WC and a walk-in shower.
  const vanity=group(fixed,10.52,0,8.32);vanity.rotation.y=Math.PI/2;
  box(vanity,0,.43,0,1.46,.73,.59,M.green,.036);
  for(const x of [-.35,.35]){
    box(vanity,x,.45,-.306,.65,.57,.035,green,.012);
    box(vanity,x,.61,-.335,.18,.02,.024,M.brass);
  }
  box(vanity,0,.85,0,1.58,.095,.72,M.stone,.025);
  const basin=new T.LatheGeometry([[.06,0],[.22,.02],[.30,.095],[.295,.106],[.265,.093],[.18,.025],[.035,.012]].map(([x,y])=>new T.Vector2(x,y)),36);
  mesh(vanity,basin,china,0,.9,-.045).scale.z=.72;
  tube(vanity,[V(0,.89,.232),V(0,1.125,.232),V(0,1.14,.10),V(0,1.09,.06)],.016,M.brass);
  const mirror=cylinder(vanity,0,1.77,.27,.50,.50,.032,M.brass,48);mirror.rotation.x=Math.PI/2;
  const silver=cylinder(vanity,0,1.77,.24,.471,.471,.018,material(0xb8cccc,.12,.93),48);silver.rotation.x=Math.PI/2;
  block(10.52,8.32,.74,1.6);
  const wc=group(fixed,5.34,0,10.04);
  box(wc,0,.22,.15,.25,.42,.22,china,.042);
  box(wc,0,.037,.008,.28,.072,.39,china,.028);
  box(wc,0,.65,.23,.42,.43,.21,china,.055);
  box(wc,0,.88,.23,.46,.043,.24,china,.016);
  cylinder(wc,0,.907,.22,.034,.034,.009,M.metal);
  ball(wc,0,.21,-.015,.145,.215,.21,china);
  const bowl=mesh(wc,new T.LatheGeometry([[.08,0],[.15,.035],[.202,.125],[.20,.17],[.145,.16],[.07,.06]].map(([x,y])=>new T.Vector2(x,y)),32),china,0,.25,-.085);
  bowl.scale.z=1.42;
  const seat=mesh(wc,new T.TorusGeometry(.179,.023,8,40),M.ivory,0,.43,-.092);seat.rotation.x=-Math.PI/2;seat.scale.y=1.47;
  block(5.34,10.00,.49,.73);
  const showerGlass=new T.MeshStandardMaterial({color:0xb7d9d8,transparent:true,opacity:.15,roughness:.16,depthWrite:false});
  box(fixed,5.09,.035,7.04,1.76,.065,1.60,M.stone,.018);
  box(fixed,5.94,1.05,6.77,.024,2.10,1.05,showerGlass);
  block(5.94,6.77,.04,1.05);
  for(const z of [6.25,7.29])rod(fixed,V(5.94,.065,z),V(5.94,2.13,z),.012,M.brass);
  rod(fixed,V(4.28,.97,7.02),V(4.28,2.23,7.02),.016,M.brass);
  rod(fixed,V(4.28,2.23,7.02),V(4.65,2.23,7.02),.019,M.brass);
  cylinder(fixed,4.65,2.19,7.02,.14,.16,.045,M.brass);
  cylinder(fixed,5.1,.073,7.13,.065,.065,.008,M.metal);
  box(fixed,4.22,.95,7.02,.13,.085,.24,M.brass,.016);
  rod(fixed,V(6.32,1.13,back-.24),V(7.12,1.13,back-.24),.018,M.brass);
  box(fixed,6.72,.91,back-.25,.41,.48,.052,M.linen,.018);

  let open=true;
  leaf.position.x=bathDoorX-width;
  const doorBox=new T.Box3();
  function setBounds(){
    doorBox.min.set(leaf.position.x-width/2,0,leaf.position.z);
    doorBox.max.set(leaf.position.x+width/2,2.35,leaf.position.z+.052);
  }
  setBounds();
  const action={label:()=>open?'合上卫生间移门':'推开卫生间移门',point:V(10.63,1.13,front),size:[.24,.48,.52],range:2.5,run(){open=!open;}};
  for(const z of [front-.205,front+.20])box(fixed,10.63,1.13,z,.085,.20,.030,M.brass,.012);
  return {action,doorBox,blocks(x,z,r){
    return x>doorBox.min.x-r&&x<doorBox.max.x+r&&z>doorBox.min.z-r&&z<doorBox.max.z+r;
  },update(dt,player,cat){
    const end=bathDoorX-(open?width:0),next=T.MathUtils.damp(leaf.position.x,end,7,dt);
    if(leaf.position.x===end)return false;
    if([player,cat].some(p=>Math.abs(p.z-leaf.position.z)<.35&&Math.abs(p.x-next)<width/2+.25))return false;
    leaf.position.x=Math.abs(end-next)<.002?end:next;setBounds();return true;
  }};
}
