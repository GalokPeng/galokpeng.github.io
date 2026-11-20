import * as T from 'three';
import {M,V,group,box,mesh,rod,ball,bake,glass} from './studio.js';

// The fanlight and the door leaf share the same switchable interlayer.
export function smartGlass(){
  const film=glass.clone();film.side=T.DoubleSide;film.forceSinglePass=true;
  const clear=glass.color,opal=new T.Color(0xdbe9e6);
  let privateMode=false,amount=0;
  return {film,get privateMode(){return privateMode;},get amount(){return amount;},
    toggle(){privateMode=!privateMode;},
    update(dt,sky){
      const goal=Number(privateMode),next=T.MathUtils.damp(amount,goal,9,dt);
      amount=Math.abs(next-goal)<.002?goal:next;
      film.color.copy(clear).lerp(opal,amount);
      film.opacity=T.MathUtils.lerp(glass.opacity,.982,amount);
      film.roughness=T.MathUtils.lerp(glass.roughness,.84,amount);
      film.metalness=T.MathUtils.lerp(glass.metalness,.025,amount);
      film.emissive.fromArray(sky.p.skyHorizon);
      film.emissiveIntensity=amount*(.035+.58*(1-sky.p.nightness))*(1-.42*sky.dark);
    }};
}

export function wallButton(fixed,point,yaw,caption){
  const plate=group(fixed,point.x,point.y,point.z);plate.rotation.y=yaw;
  box(plate,0,0,-.022,.177,.232,.036,M.brass,.011);
  box(plate,0,0,.001,.143,.195,.022,M.cream,.008);
  box(plate,0,-.047,.018,.088,.055,.018,M.green,.006);
  const canvas=document.createElement('canvas');canvas.width=192;canvas.height=86;
  const ctx=canvas.getContext('2d');ctx.fillStyle='#eee6d4';ctx.fillRect(0,0,192,86);
  ctx.fillStyle='#3c5148';ctx.font='bold 60px "Microsoft YaHei", sans-serif';ctx.textAlign='center';
  ctx.textBaseline='middle';ctx.fillText(caption,96,44);
  const map=new T.CanvasTexture(canvas);map.colorSpace=T.SRGBColorSpace;
  mesh(plate,new T.PlaneGeometry(.124,.056),new T.MeshStandardMaterial({map,roughness:.75}),0,.049,.014);
}

export function casement(exterior,fixed,x,z,width,bottom,top,room){
  const pivot=group(exterior,x,0,z),y=(bottom+top)/2;
  for(const dx of [.032,width-.032])box(pivot,dx,y,0,.064,top-bottom,.066,M.walnut);
  for(const h of [bottom+.032,1.36,top-.032])box(pivot,width/2,h,0,width-.09,.058,.065,M.walnut);
  box(pivot,width/2,y,-.012,width-.09,top-bottom-.085,.013,glass);
  bake(pivot);
  // A fixed crank on the middle mullion remains within reach when the sash swings out.
  const point=V(x+width+.032,1.08,z+.19);
  box(fixed,point.x,point.y,z+.067,.103,.159,.092,M.bronze,.009);
  rod(fixed,V(point.x,point.y,z+.093),point,.016,M.brass);
  const crank=group(exterior,point.x,point.y,point.z);
  rod(crank,V(),V(-.080,-.054,.018),.013,M.brass);
  ball(crank,-.080,-.054,.043,.024,.024,.042,M.walnut);bake(crank);
  const leaf={pivot,width,angle:0,target:0,room:room+'灯',crank};
  leaf.action={label:()=>(leaf.target?'关上':'打开')+room+'窗',point,size:[.30,.30,.14],range:2.65,directOnly:true,
    run(){leaf.target=leaf.target?0:Math.PI*.37;}};
  return leaf;
}

const opening={left:6.20,right:7.90,front:3.08,back:4.97};
const roofY=z=>7-(7-4.1)*z/6.62;

export function ceilingLayer(shell,y,w,h,d,material){
  const {left,right,front,back}=opening;
  function slab(x0,x1,z0,z1){box(shell,(x0+x1)/2,y,(z0+z1)/2,x1-x0,h,z1-z0,material);}
  slab(-w/2,w/2,-d/2,front);slab(-w/2,w/2,back,d/2);
  slab(-w/2,left,front,back);slab(right,w/2,front,back);
}
export function ceilingBeam(p,x,y){
  const {left,right,front,back}=opening;
  if(x<left||x>right){box(p,x,y,0,.18,.14,12,M.trim);return;}
  for(const [a,b] of [[-6,front],[back,6]])box(p,x,y,(a+b)/2,.18,.14,b-a,M.trim);
}
export function roofAroundSkylight(){
  const {left,right,front,back}=opening;
  const span=z=>5.65+(11.55-5.65)*z/6.62;
  function strip(a,b,l0,r0,l1,r1){
    return [V(l0,roofY(a),a),V(l1,roofY(b),b),V(r1,roofY(b),b),V(r0,roofY(a),a)];
  }
  return [strip(0,front,-span(0),span(0),-span(front),span(front)),
    strip(front,back,-span(front),left,-span(back),left),strip(front,back,right,span(front),right,span(back)),
    strip(back,6.62,-span(back),span(back),-11.55,11.55)];
}
export function bedroomSkylight(exterior,shell,fixed,ceiling){
  const {left,right,front,back}=opening,w=right-left,d=back-front,x=(left+right)/2,z=(front+back)/2;
  const tilt=Math.atan(2.9/6.62),slopeLength=d/Math.cos(tilt);
  const roofWindow=group(exterior,x,roofY(z)+.04,z);roofWindow.rotation.x=tilt;
  const pane=box(roofWindow,0,.015,0,w,.026,slopeLength,glass);
  for(const side of [-1,1]){
    box(roofWindow,side*w/2,.022,0,.083,.11,slopeLength+.10,M.bronze);
    box(roofWindow,0,.022,side*slopeLength/2,w+.10,.11,.085,M.bronze);
    box(fixed,x+side*w/2,ceiling-.025,z,.078,.068,d+.09,M.trim);
    box(fixed,x,ceiling-.025,z+side*d/2,w+.09,.068,.078,M.trim);
  }
  // Line the light well up to the glass on the pitched roof.
  for(const zz of [front,back]){
    const h=roofY(zz)-ceiling;box(shell,x,ceiling+h/2,zz,w+.08,h,.047,M.trim);
  }
  const profile=new T.Shape();
  profile.moveTo(front-z,ceiling);profile.lineTo(back-z,ceiling);
  profile.lineTo(back-z,roofY(back));profile.lineTo(front-z,roofY(front));profile.closePath();
  for(const edge of [left,right]){
    const g=new T.ExtrudeGeometry(profile,{depth:.046,bevelEnabled:false});
    g.rotateY(-Math.PI/2);mesh(shell,g,M.trim,edge+(edge===right?.046:0),0,z);
  }
  const white=new T.MeshStandardMaterial({color:0xf4f0e5,roughness:.91});
  const shutter=box(exterior,x,ceiling+.039,z,w+.026,.064,d+.032,white);
  const point=V(8.74,1.47,5.88);wallButton(fixed,point,Math.PI,'天窗');
  let open=false,fraction=0;
  return {pane,shutter,center:V(x,roofY(z),z),get fraction(){return fraction;},get open(){return open;},
    action:{label:()=>open?'合上天窗白色遮板':'拉开天窗白色遮板',point,size:[.26,.33,.12],range:2.8,directOnly:true,run(){open=!open;}},
    update(dt){
      const goal=Number(open);if(fraction===goal)return false;
      fraction+=T.MathUtils.clamp(goal-fraction,-dt/2.25,dt/2.25);
      shutter.position.x=x+(w+.09)*fraction;return true;
    }};
}
