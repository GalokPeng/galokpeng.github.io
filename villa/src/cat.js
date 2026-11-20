import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {V,group,contact,asset} from './studio.js';
import {bathDoorX,litterPosition} from './bathroom.js';
import {petAppliances,feeder,fountain} from './pet-appliances.js';
export {mealAt} from './pet-appliances.js';

// Waypoints follow the clear side of the sofa, both doorways and the foot of the bed.
// A meal can interrupt any activity. Replan at the next waypoint so the cat never cuts through a wall.
const points={
  window:[-3.62,-3.72],rug:[-2.79,-1.49],lounge:[-2.33,.85],hall:[1.55,1.96],
  junction:[2.68,2.08],bowls:[2.66,-.38],feedApproach:[2.15,feeder.z],feed:[feeder.x-.49,feeder.z],
  water:[fountain.x-.28,fountain.z],bedroom:[4.62,2.05],bedFoot:[bathDoorX,2.08],
  threshold:[bathDoorX,5.53],bath:[bathDoorX,6.94],tiles:[8.05,8.35],
  mat:[litterPosition.x,litterPosition.z-.91],tray:[litterPosition.x,litterPosition.z-.08],
};
const paths=[
  ['window','rug','lounge','hall','junction','bowls','feedApproach','feed'],['bowls','water'],
  ['junction','bedroom','bedFoot','threshold','bath','tiles','mat','tray'],
];
const graph=new Map(Object.keys(points).map(k=>[k,[]]));
for(const path of paths)for(let i=1;i<path.length;i++){
  graph.get(path[i-1]).push(path[i]);graph.get(path[i]).push(path[i-1]);
}
function route(from,to){
  const via=new Map([[from,null]]),queue=[from];
  for(const current of queue){
    if(current===to)break;
    for(const n of graph.get(current))if(!via.has(n)){via.set(n,current);queue.push(n);}
  }
  const stops=[];
  for(let n=to;n!==from;n=via.get(n))stops.unshift(n);
  return stops;
}
const itinerary=['water','rug','tray','window','lounge'];
const quietPlaces=['window','rug','lounge'];
// Each real Shanghai hour has a reproducible rest window. Dawn, dusk and meals stay active.
function napPlace(now){
  const hourIndex=Math.floor(now/3600000)+8,hour=hourIndex%24;
  if((hour>=6&&hour<9)||(hour>=17&&hour<20))return null;
  const seed=Math.imul(hourIndex,2654435761)>>>0,minute=(now%3600000)/60000;
  const start=seed%12,end=start+((hour<6||hour>=22)?47:29)+(seed>>>8)%6;
  return minute>=start&&minute<end?quietPlaces[(seed>>>16)%quietPlaces.length]:null;
}

function catAnimation(model,clips){
  const mixer=new T.AnimationMixer(model);
  const actions=new Map(clips.map(clip=>[clip.name,mixer.clipAction(clip)]));
  for(const name of ['SitDown','StandUp']){
    const a=actions.get(name);a.setLoop(T.LoopOnce,1);a.clampWhenFinished=true;
  }
  let active=null;
  function play(name){
    const next=actions.get(name);if(next===active)return;
    next.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).play();
    if(active)next.crossFadeFrom(active,.16,false);
    active=next;
  }
  play('Idle');
  const bends=['Neck_23','Head_22','TailBase_11'].map(name=>{
    const bone=model.getObjectByName(name);return {bone,rest:bone.quaternion.clone()};
  });
  const q=new T.Quaternion(),turn=new T.Quaternion(),axis=V();
  let bend=0;
  return {play,done:()=>active.time>=active.getClip().duration-.015,update(dt,t,activity,speed,tuck){
    for(const joint of bends)joint.bone.quaternion.copy(joint.rest);
    // At house scale a planted forepaw travels 11.3 cm in half of the 1.33 s walk cycle.
    if(active===actions.get('WalkClean'))active.timeScale=T.MathUtils.clamp(speed/.17,.32,2.5);
    if(active===actions.get('SittingIdle'))active.timeScale=activity==='nap'?.32:1;
    mixer.update(dt);
    const feeding=activity==='eat'||activity==='drink';
    const resting=activity==='nap';
    const targetBend=feeding?.90+.08*Math.sin(t*(activity==='eat'?4.4:6.6)):resting?.53+.022*Math.sin(t*1.7):0;
    bend=T.MathUtils.damp(bend,targetBend,resting?1.4:6,dt);
    for(const [i,joint] of bends.entries()){
      const bone=joint.bone;joint.rest.copy(bone.quaternion);
      const angle=i===2?tuck*1.30:-bend*(i===0?.67:.33);
      if(Math.abs(angle)<.001)continue;
      axis.set(1,0,0).applyQuaternion(model.parent.quaternion);
      axis.applyQuaternion(bone.parent.getWorldQuaternion(q).invert());
      bone.quaternion.premultiply(turn.setFromAxisAngle(axis,angle));
    }
  }};
}

export function adoptCat(scene,fixed,block,bathroom){
  const devices=petAppliances(scene,fixed,block);
  let nap=napPlace(Date.now()),current=nap||'window';
  const cat=group(scene,points[current][0],0,points[current][1]);
  contact(cat,0,0,.32,.60,.26,.008);
  let animation=null;
  const ready=new GLTFLoader().loadAsync(asset('somali-cat/cat.glb')).then(({scene:model,animations})=>{
    // Source faces -Z. The underside of the paws is 1.76 source units below its origin.
    model.scale.setScalar(.123);model.position.y=1.76*.123;cat.add(model);
    model.traverse(o=>{if(o.isMesh){o.receiveShadow=true;o.castShadow=false;}});
    animation=catAnimation(model,animations);
    if(nap)setActivity('nap');
  });
  let goal=current,stops=[],activity='rest',timer=2.8,seq=0,served=0,speed=0;
  function setActivity(value,seconds=0){
    activity=value;timer=seconds;
    const clip={walk:'WalkClean',sitDown:'SitDown',sit:'SittingIdle',nap:'SittingIdle',stand:'StandUp'}[value]||'Idle';
    animation.play(clip);
  }
  function depart(){
    goal=devices.meal&&devices.meal!==served?'feed':nap||itinerary[seq++%itinerary.length];
    stops=route(current,goal);
    if(stops.length)setActivity('walk');else arrive();
  }
  function arrive(){
    speed=0;
    if(goal==='feed'){served=devices.meal;setActivity('eat',8);}
    else if(goal==='water')setActivity('drink',6);
    else setActivity('sitDown');
  }
  function face(angle,dt){
    const diff=Math.atan2(Math.sin(angle-cat.rotation.y),Math.cos(angle-cat.rotation.y));
    cat.rotation.y+=T.MathUtils.clamp(diff,-3.5*dt,3.5*dt);
    return diff;
  }
  function walk(dt){
    if(!stops.length){arrive();return;}
    const [x,z]=points[stops[0]],dx=x-cat.position.x,dz=z-cat.position.z,dist=Math.hypot(dx,dz);
    const angle=face(Math.atan2(-dx,-dz),dt);
    const pace=(goal==='feed'?.415:.32)*Math.max(.03,Math.cos(angle));
    speed=T.MathUtils.damp(speed,Math.min(pace,.10+dist*2.7),6,dt);
    const step=Math.min(dist,speed*dt);
    if(dist>0){cat.position.x+=dx/dist*step;cat.position.z+=dz/dist*step;}
    if(dist-step<.015){
      cat.position.x=x;cat.position.z=z;current=stops.shift();
      const priority=devices.meal&&devices.meal!==served?'feed':nap;
      if(priority&&priority!==goal){goal=priority;stops=route(current,goal);}
      if(!stops.length)arrive();
    }
  }
  return {position:cat.position,ready,actions:devices.actions,
    get activity(){return activity;},get cleaning(){return devices.cleaning;},
    update(t,dt){
      devices.update(t,dt,cat.position);
      if(!animation)return;
      const wantsFood=devices.meal&&devices.meal!==served;
      nap=napPlace(Date.now());
      timer-=dt;
      if(activity==='walk')walk(dt);
      else if(activity==='sitDown'&&animation.done())setActivity(current===nap?'nap':'sit',current==='tray'?4:25+Math.random()*45);
      else if(activity==='nap'&&(current!==nap||wantsFood))setActivity('stand');
      else if(activity==='sit'&&current===nap&&!wantsFood)setActivity('nap');
      else if(activity==='sit'&&(timer<=0||wantsFood))setActivity('stand');
      else if(activity==='stand'&&animation.done())depart();
      else if(['rest','eat','drink'].includes(activity)){
        if(activity!=='rest')face(-Math.PI/2,dt);
        if(timer<=0||wantsFood)depart();
      }
      const inEntry=Math.abs(cat.position.x-litterPosition.x)<.42;
      cat.position.y=inEntry?.144*T.MathUtils.smoothstep(cat.position.z,litterPosition.z-.62,litterPosition.z-.39):0;
      const atDoor=Math.abs(cat.position.x-bathDoorX)<.45&&bathroom.blocks(bathDoorX,6.22,0);
      const tuck=atDoor?1-T.MathUtils.smoothstep(Math.abs(cat.position.z-6.22),.58,1.05):0;
      animation.update(dt,t,activity,speed,tuck);
    }};
}
