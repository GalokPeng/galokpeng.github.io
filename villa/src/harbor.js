import * as T from 'three';
import { M,V,material,group,mesh,box,ball,rod,cylinder,bake,glass } from './studio.js';
import { waveUniform } from './island/astronomy.js';

const pierX=1.5,pierStart=-13.16,pierEnd=-24,width=1.82;
const berthX=3.72,berthZ=-22.12;
export function onPier(x,z,inset=0){
  return Math.abs(x-pierX)<=width/2-inset&&z<=pierStart+.16&&z>=pierEnd+inset;
}
export function pierHeight(z){
  return -1.18-.66*T.MathUtils.smoothstep(-z,-pierStart,19.6);
}
function buildPier(world){
  const g=group(world),count=40,step=(pierStart-pierEnd)/count;
  for(let i=0;i<count;i++){
    const z=pierStart-(i+.5)*step,y=pierHeight(z);
    const plank=box(g,pierX,y-.055,z,width,.11,step-.009,M.oak);
    plank.rotation.x=-Math.atan((pierHeight(z+.05)-pierHeight(z-.05))/.1);
  }
  const marker=new T.MeshStandardMaterial({color:0xffecd2,emissive:0xffbd70,emissiveIntensity:.75});
  for(const z of [-14.2,-17.4,-20.7,-23.72])for(const side of [-1,1]){
    const x=pierX+side*(width/2-.09),y=pierHeight(z);
    cylinder(g,x,y-1.18,z,.082,.11,2.30,M.walnut,12);
    if(side<0||z>berthZ+2){
      cylinder(g,x,y+.14,z,.068,.079,.29,M.bronze,12);
      cylinder(g,x,y+.29,z,.071,.071,.035,marker,12);
    }
  }
  for(const z of [-20.4,-23.56]){
    box(g,2.21,-1.79,z,.095,.10,.12,M.bronze);
    box(g,2.21,-1.72,z,.09,.065,.34,M.bronze,.023);
  }
  bake(g);
}
function launchHull(parent){
  const hull=group(parent),green=material(0x234b4d,.36,.13),white=material(0xeee4cd,.42);
  // From stem to transom: station, half-beam and sheer height above the waterline.
  const stations=[[-2.53,.018,.80],[-2.24,.40,.70],[-1.65,.75,.59],[-.83,.95,.55],
    [.05,1.00,.54],[1.08,.98,.53],[1.93,.87,.55]];
  const positions=[],indices=[],geometry=new T.BufferGeometry();
  for(const [z,w,h] of stations){
    const half=[[1,h],[.985,h-.066],[.965,h-.115],[.86,.025],[.64,-.24],[0,-.46]];
    for(const [f,y] of [...half,...half.slice(0,-1).reverse().map(([n,a])=>[-n,a])]){
      positions.push(f*w,y,z);
    }
  }
  // Group by finish to draw each continuous run of hull plating in one call.
  const per=11,bands=[1,2,0,0,0,0,0,0,2,1];
  for(const mat of [0,1,2]){
    const start=indices.length;
    for(let i=0;i<stations.length-1;i++)for(let j=0;j<per-1;j++){
      if(bands[j]!==mat)continue;
      const a=i*per+j;indices.push(a,a+per,a+per+1,a,a+per+1,a+1);
    }
    if(mat===0)for(const row of [0,stations.length-1]){
      const a=row*per;
      for(let j=0;j<5;j++)indices.push(a+j,a+10-j,a+9-j,a+j,a+9-j,a+j+1);
    }
    geometry.addGroup(start,indices.length-start,mat);
  }
  geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));geometry.setIndex(indices);geometry.computeVertexNormals();
  const paints=[green,white,M.brass.clone()];for(const m of paints)m.side=T.DoubleSide;
  const skin=new T.Mesh(geometry,paints);skin.castShadow=skin.receiveShadow=true;parent.add(skin);
  for(const side of [-1,1])for(let i=1;i<stations.length;i++){
    const [z0,w0,h0]=stations[i-1],[z1,w1,h1]=stations[i];
    rod(hull,V(side*w0,h0,z0),V(side*w1,h1,z1),.037,M.table);
  }
  // Laid teak foredeck follows the taper of the bow.
  const fore=new T.Shape();fore.moveTo(0,-2.49);
  for(const [z,w] of stations.slice(1,4))fore.lineTo(w*.99,z);
  fore.lineTo(.952,-.47);fore.lineTo(-.952,-.47);
  for(const [z,w] of stations.slice(1,4).reverse())fore.lineTo(-w*.99,z);
  fore.closePath();
  const foreGeo=new T.ShapeGeometry(fore);foreGeo.rotateX(Math.PI/2);
  const deck=foreGeo.attributes.position;
  for(let i=0;i<deck.count;i++){
    deck.setY(i,.54+.22*Math.pow(Math.max(0,(-deck.getZ(i)-.47)/2.02),2));
  }
  foreGeo.computeVertexNormals();
  mesh(hull,foreGeo,M.table.clone()).material.side=T.DoubleSide;
  for(const side of [-1,1])for(const z of [-1.06,1.36]){
    const x=side*.81;
    box(hull,x,.57,z,.08,.09,.13,M.bronze,.015);
    box(hull,x,.62,z,.065,.038,.28,M.metal,.015);
  }
  for(const z of [-.53,1.02]){
    rod(hull,V(-.93,.56,z),V(-1.035,.31,z),.012,M.cream);
    ball(hull,-1.035,.15,z,.081,.208,.081,M.ivory);
  }
  box(hull,0,.11,.57,1.63,.10,2.53,M.oak);
  for(const x of [-.88,.88])box(hull,x,.37,.45,.09,.34,2.63,white,.025);
  box(hull,0,.37,1.83,1.65,.36,.10,white,.03);
  for(const [x,z,w] of [[.39,.84,.61],[-.39,.84,.61],[0,1.57,1.54]]){
    box(hull,x,.32,z,w*.83,.32,.31,M.green,.035);
    box(hull,x,.51,z,w,.11,.39,M.ivory,.048);
    box(hull,x,.66,z+.16,w,.29,.092,M.ivory,.038);
  }
  box(hull,0,.54,-.51,1.64,.45,.39,white,.055);
  box(hull,0,.78,-.48,1.75,.08,.44,M.table,.032);
  const screen=box(hull,0,.99,-.65,1.66,.37,.021,glass);screen.rotation.x=-.18;
  for(const x of [-.83,0,.83])rod(hull,V(x,.8,-.62),V(x,1.18,-.69),.016,M.metal);
  rod(hull,V(-.83,1.18,-.69),V(.83,1.18,-.69),.019,M.metal);
  const column=group(parent,.39,.81,-.16);column.rotation.order='XYZ';column.rotation.x=-.30;
  mesh(column,new T.TorusGeometry(.152,.021,8,24),M.walnut);
  for(let i=0;i<3;i++)rod(column,V(),V(.14*Math.sin(i*2.094),.14*Math.cos(i*2.094),0),.012,M.metal);
  ball(column,0,0,0,.040,.040,.035,M.brass);
  for(const x of [.28,.49]){
    const dial=cylinder(hull,x,.825,-.40,.054,.054,.016,M.ink);
    dial.rotation.x=Math.PI*.37;
  }
  box(hull,0,.35,2.07,.41,.48,.34,M.ink,.060);
  box(hull,0,-.11,2.08,.14,.62,.19,M.metal,.035);
  bake(hull);bake(column);return column;
}
const frequencies=Array.from({length:waveUniform.length/4},(_,i)=>Math.hypot(waveUniform[4*i],waveUniform[4*i+1]));
function waterY(x,z,time,wind){
  let y=-2.56;
  for(let i=0;i<frequencies.length;i++){
    const k=frequencies[i],n=i*4,a=waveUniform[n+2]*(.72+.78*wind);
    const c=Math.cos(waveUniform[n]*x+waveUniform[n+1]*z-Math.sqrt(9.81*k)*time+waveUniform[n+3]);
    y+=a*(c+.5*Math.min(.55,k*a)*(2*c*c-1));
  }
  return y;
}
export function buildHarbor(world,ground,rocks){
  buildPier(world);
  const vessel=group(world,berthX,-2.56,berthZ);vessel.rotation.order='YXZ';
  const wheel=launchHull(vessel);
  let speed=0,heading=0,piloting=false;
  const xz=vessel.position,helm=V(.39,1.40,.83);
  function navigable(x,z){
    if(Math.abs(x)>64||z< -80||z> -13||ground(x,z)>-2.99||onPier(x,z))return false;
    return !rocks.some(([rx,rz,length])=>Math.hypot(x-rx,z-rz)<length*.57);
  }
  function fits(x,z,angle){
    const s=Math.sin(angle),c=Math.cos(angle);
    for(const [side,end] of footprint){
      if(!navigable(x+side*c+end*s,z-side*s+end*c))return false;
    }
    return true;
  }
  const footprint=[[0,-2.48],[-.92,-.88],[.92,-.88],[-.89,1.85],[.89,1.85],[0,0]];
  function canMoor(){return Math.abs(speed)<.95&&Math.abs(xz.x-berthX)<1.9&&Math.abs(xz.z-berthZ)<2.85;}
  return {vessel,get heading(){return heading;},get speed(){return speed;},canMoor,
    get distance(){return Math.hypot(xz.x-berthX,xz.z-berthZ);},
    canBoard(x,z){return !piloting&&onPier(x,z)&&Math.abs(z-berthZ)<2.5;},
    board(){piloting=true;},
    moor(){piloting=false;speed=heading=0;xz.x=berthX;xz.z=berthZ;},
    eye(out){return vessel.localToWorld(out.copy(helm));},
    update(dt,sky,throttle,steer){
      if(piloting){
        wheel.rotation.z=T.MathUtils.damp(wheel.rotation.z,-steer*1.05,5,dt);
        const demand=throttle*(throttle>=0?6.5:2.6);
        speed=T.MathUtils.damp(speed,demand,throttle?.90:1.55,dt);
        const angle=heading-steer*dt*T.MathUtils.clamp(speed*1.05,-1.18,1.18);
        if(fits(xz.x,xz.z,angle))heading=angle;
        const x=xz.x-Math.sin(heading)*speed*dt,z=xz.z-Math.cos(heading)*speed*dt;
        if(fits(x,z,heading)){xz.x=x;xz.z=z;}else speed=0;
      }
      else wheel.rotation.z=0;
      const s=Math.sin(heading),c=Math.cos(heading);
      const sample=(dx,dz)=>waterY(xz.x+dx,xz.z+dz,sky.phase,sky.wind);
      const fore=sample(-1.6*s,-1.6*c),aft=sample(1.6*s,1.6*c);
      const port=sample(-.82*c,.82*s),starboard=sample(.82*c,-.82*s);
      xz.y=T.MathUtils.damp(xz.y,(fore+aft+port+starboard)/4,4,dt);
      vessel.rotation.set(T.MathUtils.damp(vessel.rotation.x,Math.atan2(fore-aft,3.2)*.65,3,dt),heading,
        T.MathUtils.damp(vessel.rotation.z,Math.atan2(starboard-port,1.64)*.55,3,dt),'YXZ');
    }};
}
