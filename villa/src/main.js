import * as T from 'three';
import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';
import { buildHouse } from './house.js';
import { buildCoast, walkHeight, islandRadius } from './coast.js';
import { buildDevice, stereo } from './devices.js';
import { V, finishGeometryBuild, prepareMaterials } from './studio.js';
import { openBook } from './books.js';
import { insideBathroom } from './bathroom.js';
import {onPier} from './harbor.js';

const $=id=>document.getElementById(id);
const view=$('view'),status=$('loading');
function launch(){
  const renderer=new T.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});
  renderer.setClearColor(0x000000,0);
  renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.04;renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFShadowMap;
  renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;
  renderer.domElement.tabIndex=0;renderer.domElement.setAttribute('aria-label','海景房漫游画面');
  const css=new CSS3DRenderer();css.domElement.className='web-space';
  view.append(css.domElement,renderer.domElement);
  const scene=new T.Scene(),webScene=new T.Scene();
  const camera=new T.PerspectiveCamera(65,1,.055,540);camera.rotation.order='YXZ';
  const house=buildHouse(scene),coast=buildCoast(scene,renderer,house.exterior);
  const devices=house.devices.map(d=>buildDevice(scene,webScene,d)),music=stereo();
  finishGeometryBuild();
  const eye=1.65,radius=.225;
  const player=V(-7.25,eye,1.86);camera.position.copy(player);camera.lookAt(V(-4.02,1.50,-6.05));
  let yaw=camera.rotation.y,pitch=camera.rotation.x,mode='walk',activeDevice=null,transition=null;
  let saved=null,target=null,elapsed=0,last=performance.now(),drag=null,mouseLook=false;
  const keys=new Set(),touch={x:0,y:0},aim=new T.Vector2(),ray=new T.Raycaster();
  ray.far=5.6;
  const selectable=[],items=[];
  const pickMat=new T.MeshBasicMaterial({visible:false});
  function addTarget(name,center,size,distance,action,angle=0){
    const o=new T.Mesh(new T.BoxGeometry(...size),pickMat);o.position.copy(center);o.rotation.y=angle;
    o.updateMatrixWorld();const item={name,object:o,distance,action};o.userData.item=item;selectable.push(o);items.push(item);return item;
  }
  const door=house.doors[0];
  const leaves=[door,...house.windows];
  const doorHandles=door.handles.map(handle=>{
    const item=addTarget(()=>door.target?'关露台门':'开露台门',V(),[.33,.22,.12],3.3,()=>{
      door.target=door.target?0:Math.PI*.49;
    });
    item.directOnly=true;
    return {item,handle};
  });
  const harbor=coast.harbor;
  const boatItem=addTarget(()=>'登船驾驶',V(),[1.98,1.2,3.6],3.2,board);
  boatItem.enabled=()=>harbor.canBoard(player.x,player.z);
  function board(){
    if(mode!=='walk'||!boatItem.enabled())return;
    remember();harbor.board();mode='boat';yaw=harbor.heading;pitch=-.07;
    harbor.eye(camera.position);camera.rotation.set(pitch,yaw,0,'YXZ');
    renderer.domElement.focus();showHint('W / S 前进、倒车　·　A / D 转向　·　回码头减速后按 E 下船',5000);
  }
  function disembark(){
    if(mode!=='boat'||!harbor.canMoor())return;
    harbor.moor();player.copy(saved.pos);camera.position.copy(player);yaw=saved.yaw;pitch=saved.pitch;
    camera.rotation.set(pitch,yaw,0,'YXZ');keys.clear();touch.x=touch.y=0;mode='walk';hint.hidden=true;
    renderer.domElement.focus();
  }
  for(const device of devices)addTarget(()=>device.powered?'使用'+device.label:'开启'+device.label,device.center,
    [device.width+.14,device.height+.14,.25],device.id==='projector'?5.6:2.7,()=>useDevice(device),device.yaw);
  const bedPoint=house.bed.position.clone();bedPoint.z-=.90;bedPoint.y=.6;
  addTarget(()=>'躺到床上',bedPoint,[2.4,1.1,2.9],3.3,lieDown);
  for(const z of [-3.94,1.16])addTarget(()=>music.on?'关闭音响':'播放音响',V(-10.27,.66,z),[.55,1.30,.56],3.2,()=>music.toggle().catch(showAudioError));
  let occupied=null;
  const api={hint:showHint,read(i){
    remember();mode='book';openBook(i,()=>{mode='walk';renderer.domElement.focus();});
  }};
  for(const item of [...house.life.actions,...house.pet.actions]){
    const target=addTarget(item.label,item.point,item.size,item.range,()=>item.run(api));
    target.directOnly=item.directOnly;
  }
  for(const seat of house.life.seats)addTarget(()=> '坐上'+seat.label,seat.point,seat.size,2.9,()=>{
    remember();occupied=seat;mode='seat';document.body.classList.add('in-bed');
    moveTo(seat.eye,orientation(seat.eye,seat.at),()=>{yaw=camera.rotation.y;pitch=camera.rotation.x;$('stand').hidden=false;});
  });
  function showAudioError(){showHint('浏览器未启用音频，请再次点击音响。',3200);}
  const hint=$('hint');let hintTimer;
  function showHint(text,ms=6300){hint.textContent=text;hint.hidden=false;clearTimeout(hintTimer);hintTimer=setTimeout(()=>hint.hidden=true,ms);}
  hintTimer=setTimeout(()=>hint.hidden=true,9000);
  let maxRatio=1,minRatio=1,resolutionScale=1,sampleTime=0,sampleFrames=0,fastWindows=0;
  function resize(){
    const w=view.clientWidth,h=view.clientHeight;
    maxRatio=Math.min(devicePixelRatio,1.45,Math.sqrt(1650000/(w*h)));
    minRatio=Math.min(maxRatio,.70,Math.sqrt(650000/(w*h)));
    renderer.setPixelRatio(Math.max(minRatio,maxRatio*resolutionScale));
    camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h);css.setSize(w,h);
    if(mode==='screen'&&activeDevice){
      const pos=screenPosition(activeDevice);
      if(transition)transition.to.copy(pos);else camera.position.copy(pos);
    }
  }
  function adaptResolution(frameMs){
    if(!status.hidden||mode==='screen'||document.hidden){
      sampleTime=sampleFrames=fastWindows=0;return;
    }
    sampleTime+=Math.min(frameMs,150);sampleFrames++;
    if(sampleTime<1500)return;
    const average=sampleTime/sampleFrames;
    sampleTime=sampleFrames=0;
    fastWindows=average<18?fastWindows+1:0;
    const current=renderer.getPixelRatio();
    let next=current;
    if(average>21)next=Math.max(minRatio,current*.84);
    else if(fastWindows>=6){next=Math.min(maxRatio,current*1.08);fastWindows=0;}
    if(Math.abs(next-current)>.01){resolutionScale=next/maxRatio;renderer.setPixelRatio(next);}
  }
  addEventListener('resize',resize);resize();
  function screenRay(){camera.updateMatrixWorld();ray.setFromCamera(aim,camera);}
  const blockBoxes=house.blockers.filter(o=>o.name==='墙'||o.name==='窗').map(b=>new T.Box3(V(b.x-b.w/2,0,b.z-b.d/2),V(b.x+b.w/2,3.82,b.z+b.d/2)));
  blockBoxes.push(house.life.bathroom.doorBox);
  const hit=V();
  function occluded(length){
    return blockBoxes.some(b=>ray.ray.intersectBox(b,hit)&&hit.distanceTo(camera.position)<length-.13);
  }
  function pick(){
    if(mode!=='walk'||transition)return null;
    screenRay();
    for(const r of ray.intersectObjects(selectable,false)){
      const item=r.object.userData.item;
      if((!item.enabled||item.enabled())&&r.distance<=item.distance&&!occluded(r.distance))return item;
    }
    return null;
  }
  function nearby(){
    const cursorAim=aim.clone();aim.set(0,0);const direct=pick();aim.copy(cursorAim);
    if(direct)return direct.directOnly?null:direct;
    const forward=camera.getWorldDirection(V());
    return items.map(item=>{
      if(item.directOnly||(item.enabled&&!item.enabled()))return null;
      const delta=item.object.position.clone().sub(camera.position),distance=delta.length();
      const facing=delta.normalize().dot(forward);
      if(distance>Math.min(2.9,item.distance)||facing<.34)return null;
      ray.set(camera.position,delta);return occluded(distance)?null:{item,score:distance+1-facing};
    }).filter(Boolean).sort((a,b)=>a.score-b.score)[0]?.item;
  }
  function moveTo(pos,rotation,done){
    transition={from:camera.position.clone(),to:pos.clone(),q0:camera.quaternion.clone(),q1:rotation.clone(),t:0,done};
    keys.clear();touch.x=touch.y=0;
  }
  function orientation(pos,at){
    const dummy=new T.PerspectiveCamera();dummy.position.copy(pos);dummy.lookAt(at);return dummy.quaternion;
  }
  function remember(){saved={pos:player.clone(),yaw,pitch};document.exitPointerLock?.();keys.clear();target=null;$('prompt').hidden=true;hint.hidden=true;}
  function screenPosition(device){
    const tan=Math.tan(T.MathUtils.degToRad(camera.fov/2));
    const distance=Math.max(device.height/(2*tan*.71),device.width/(2*tan*camera.aspect*.90));
    const px=view.clientHeight/(2*tan*(distance-.003));
    view.style.setProperty('--web-width',(device.width*px)+'px');
    view.style.setProperty('--web-height',(device.height*px)+'px');
    return device.center.clone().addScaledVector(device.normal,distance);
  }
  function useDevice(device){
    if(mode!=='walk'||transition)return;
    remember();mode='screen';activeDevice=device;device.powerOn();
    const pos=screenPosition(device);
    moveTo(pos,orientation(pos,device.center),()=>{
      document.body.classList.add('using-screen');device.input(true);$('screen-tools').hidden=false;
      $('device-name').textContent=device.label;$('open-site').href=device.url;
      $('film-controls').hidden=device.id!=='projector';$('media-status').textContent='';
    });
  }
  function leaveDevice(off=false){
    if(!activeDevice)return;
    activeDevice.input(false);if(off)activeDevice.powerOff();activeDevice=null;
    document.body.classList.remove('using-screen');$('screen-tools').hidden=true;
    const q=new T.Quaternion().setFromEuler(new T.Euler(saved.pitch,saved.yaw,0,'YXZ'));
    moveTo(saved.pos,q,()=>{mode='walk';yaw=saved.yaw;pitch=saved.pitch;renderer.domElement.focus();});
  }
  function lieDown(){
    if(mode!=='walk'||transition)return;remember();mode='bed';
    document.body.classList.add('in-bed');
    const pos=house.bed.position,q=orientation(pos,house.skylight.open?house.skylight.center:pos.clone().add(V(0,.29,-1)));
    moveTo(pos,q,()=>{yaw=camera.rotation.y;pitch=camera.rotation.x;$('stand').hidden=false;});
  }
  function stand(){
    if(!['bed','seat'].includes(mode)||transition)return;
    occupied=null;
    $('stand').hidden=true;document.body.classList.remove('in-bed');
    // Return to the reachable side from which the bed was approached.
    const q=new T.Quaternion().setFromEuler(new T.Euler(saved.pitch,saved.yaw,0,'YXZ'));
    moveTo(saved.pos,q,()=>{mode='walk';yaw=saved.yaw;pitch=saved.pitch;});
  }
  function leafDistance(leaf,x,z,angle){
    const a=leaf.pivot.position,dx=x-a.x,dz=z-a.z,c=Math.cos(angle),s=Math.sin(angle);
    const along=T.MathUtils.clamp(dx*c-dz*s,0,leaf.width);
    return Math.hypot(dx-c*along,dz+s*along);
  }
  function blocked(x,z){
    if(house.life.bathroom.blocks(x,z,radius))return true;
    if((islandRadius(x,z)>.943&&!onPier(x,z,radius))||leaves.some(leaf=>leafDistance(leaf,x,z,leaf.angle)<radius+.045))return true;
    return house.blockers.some(b=>{
      const dx=Math.max(Math.abs(x-b.x)-b.w/2,0),dz=Math.max(Math.abs(z-b.z)-b.d/2,0);
      return dx*dx+dz*dz<radius*radius;
    });
  }
  const forwardInput=()=>Number(keys.has('KeyW')||keys.has('ArrowUp'))-Number(keys.has('KeyS')||keys.has('ArrowDown'))-touch.y;
  const sideInput=()=>Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft'))+touch.x;
  function walk(dt){
    let f=forwardInput(),s=sideInput();
    const mag=Math.hypot(f,s);if(mag>1){f/=mag;s/=mag;}
    const speed=keys.has('ShiftLeft')||keys.has('ShiftRight')?3.7:2.25;
    const dx=(-Math.sin(yaw)*f+Math.cos(yaw)*s)*dt*speed,dz=(-Math.cos(yaw)*f-Math.sin(yaw)*s)*dt*speed;
    if(dx&&!blocked(player.x+dx,player.z))player.x+=dx;
    if(dz&&!blocked(player.x,player.z+dz))player.z+=dz;
    player.y=T.MathUtils.damp(player.y,walkHeight(player.x,player.z)+eye,13,dt);camera.position.copy(player);
  }
  function look(dx,dy){
    if(transition||mode==='screen'||mode==='book')return;
    yaw-=dx*.0024;pitch=T.MathUtils.clamp(pitch-dy*.0024,-1.38,1.37);camera.rotation.set(pitch,yaw,0,'YXZ');
  }
  function aimAtEvent(e){
    if(mouseLook){aim.set(0,0);return;}
    const rect=view.getBoundingClientRect();
    aim.set((e.clientX-rect.left)/rect.width*2-1,1-(e.clientY-rect.top)/rect.height*2);
  }
  const canvas=renderer.domElement;
  canvas.addEventListener('pointerdown',e=>{
    if(e.button!==0||mode==='screen'||transition)return;
    aimAtEvent(e);drag={id:e.pointerId,x:e.clientX,y:e.clientY,dist:0};canvas.focus();
    if(!mouseLook)canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove',e=>{
    if(mouseLook)return;
    if(drag?.id===e.pointerId){const dx=e.clientX-drag.x,dy=e.clientY-drag.y;drag.dist+=Math.hypot(dx,dy);look(dx,dy);drag.x=e.clientX;drag.y=e.clientY;}
    aimAtEvent(e);
  });
  canvas.addEventListener('pointerup',e=>{
    if(drag?.id!==e.pointerId)return;
    const click=drag.dist<5;drag=null;if(!click||transition)return;
    aimAtEvent(e);const selected=pick();if(selected){selected.action();return;}
    if(!mouseLook&&e.pointerType==='mouse'&&['walk','boat'].includes(mode))canvas.requestPointerLock?.()?.catch?.(()=>{});
  });
  canvas.addEventListener('pointercancel',()=>{drag=null;});
  document.addEventListener('pointerlockchange',()=>{
    mouseLook=document.pointerLockElement===canvas;aim.set(0,0);$('reticle').hidden=!mouseLook;
    drag=null;keys.clear();
  });
  document.addEventListener('mousemove',e=>{if(mouseLook)look(e.movementX,e.movementY);});
  addEventListener('keydown',e=>{
    if(mode==='book'||e.target.matches('select,input,textarea')||e.ctrlKey||e.metaKey||e.altKey)return;
    if(mode==='screen'){if(e.code==='Escape'&&!transition)leaveDevice();return;}
    if(mode==='bed'||mode==='seat'){if(['KeyE','Escape'].includes(e.code)&&!e.repeat)stand();return;}
    if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code))e.preventDefault();
    if(e.code==='KeyE'&&!e.repeat&&!transition){
      if(mode==='boat')disembark();else (pick()||nearby())?.action();return;
    }
    keys.add(e.code);
  });
  addEventListener('keyup',e=>keys.delete(e.code));
  const release=()=>{keys.clear();touch.x=touch.y=0;drag=null;};
  addEventListener('blur',release);document.addEventListener('visibilitychange',release);
  $('leave-screen').onclick=()=>leaveDevice();$('power-off').onclick=()=>leaveDevice(true);$('stand').onclick=stand;
  $('prompt').onclick=()=>{if(mode==='boat')disembark();else target?.action();};
  $('weather').onchange=e=>{coast.setWeather(e.target.value);if(mode==='walk')canvas.focus();};
  $('sky-time').onchange=e=>{coast.setTime(e.target.value);canvas.focus();};
  $('wind').onchange=e=>{coast.setWind(e.target.value);canvas.focus();};
  $('lightning').onchange=e=>coast.setLightning(e.target.value);
  $('choose-film').onclick=()=>$('film-file').click();
  $('film-file').onchange=async e=>{
    const file=e.target.files[0];if(!file||!activeDevice)return;
    try{await activeDevice.film(file,music);$('media-status').textContent='影片 · 双音箱';}
    catch{$('media-status').textContent='无法播放此文件，请选择浏览器支持的视频。';}
    e.target.value='';
  };
  $('screen-fill').onclick=()=>{
    if(activeDevice?.playingFile)$('media-status').textContent='影片已铺满幕布。';
    else if(activeDevice?.linked)activeDevice.fill();
    else $('media-status').textContent='站内视频需连接 ShareAll 投影扩展。本机影片可直接在幕布播放。';
  };
  $('screen-web').onclick=()=>{activeDevice?.showWeb();$('media-status').textContent='';};
  $('help').onclick=()=>{const guide=$('guide');guide.hidden=!guide.hidden;$('help').setAttribute('aria-expanded',String(!guide.hidden));};
  const stick=$('joystick');
  function steer(e){
    const r=stick.getBoundingClientRect(),dx=(e.clientX-r.left-r.width/2)/32,dy=(e.clientY-r.top-r.height/2)/32;
    const n=Math.max(1,Math.hypot(dx,dy));touch.x=dx/n;touch.y=dy/n;
    stick.firstElementChild.style.transform='translate('+touch.x*25+'px,'+touch.y*25+'px)';
  }
  stick.onpointerdown=e=>{stick.setPointerCapture(e.pointerId);steer(e);};stick.onpointermove=e=>{if(stick.hasPointerCapture(e.pointerId))steer(e);};
  stick.onlostpointercapture=()=>{touch.x=touch.y=0;stick.firstElementChild.style.transform='';};
  let lastScreenDraw=0,lastPose=0,lastShadow=0;
  const speakers=[V(-10.03,.72,1.16),V(-10.03,.72,-3.94)],ear=V();
  function refreshRoomShadow(room){
    const circuit=house.life.circuits.find(c=>c.name===room);
    circuit.sources[0].light.shadow.needsUpdate=true;
    coast.sunShadow();
  }
  const tick=now=>{
    requestAnimationFrame(tick);if(document.hidden){last=now;return;}
    const frameMs=Math.max(0,now-last),dt=Math.min(.075,frameMs/1000);last=now;elapsed+=dt;
    adaptResolution(frameMs);
    let movingCaster=false;
    for(const leaf of leaves){
      if(leaf.angle===leaf.target)continue;
      let next=T.MathUtils.damp(leaf.angle,leaf.target,6,dt);
      if(Math.abs(next-leaf.target)<.001)next=leaf.target;
      if(mode!=='walk'||leafDistance(leaf,player.x,player.z,next)>radius+.045){
        leaf.angle=next;leaf.pivot.rotation.y=next;movingCaster=true;
        if(leaf.crank)leaf.crank.rotation.z=-next*7;
        if(next===leaf.target)refreshRoomShadow(leaf.room);
      }
    }
    for(const {item,handle} of doorHandles){
      door.pivot.localToWorld(item.object.position.copy(handle));
      item.object.rotation.y=door.angle;item.object.updateMatrixWorld();
    }
    if(transition){
      const tr=transition;tr.t=Math.min(1,tr.t+dt/.46);const s=tr.t*tr.t*(3-2*tr.t);
      camera.position.lerpVectors(tr.from,tr.to,s);camera.quaternion.slerpQuaternions(tr.q0,tr.q1,s);
      if(tr.t===1){transition=null;tr.done();}
    }else if(mode==='walk'){walk(dt);camera.rotation.set(pitch,yaw,0,'YXZ');}
    house.life.update(elapsed,dt,occupied);house.pet.update(elapsed,dt);
    if(house.life.bathroom.update(dt,player,house.pet.position))movingCaster=true;
    if(occupied?.pivot&&!transition){
      occupied.pivot.updateMatrixWorld();camera.position.copy(occupied.pivot.localToWorld(V(0,occupied.eye.y-2.65,0)));
    }
    for(const pair of house.curtains){
      const goal=Number(pair.closed);
      if(pair.fraction===goal)continue;
      const next=T.MathUtils.damp(pair.fraction,goal,6,frameMs/1000);
      pair.fraction=Math.abs(next-goal)<.002?goal:next;
      for(const panel of pair.panels)panel.setFraction(pair.fraction);
      movingCaster=true;
      if(pair.fraction===goal)refreshRoomShadow(pair.room);
    }
    if(house.skylight.update(dt)){
      movingCaster=true;
      if(house.skylight.fraction===Number(house.skylight.open))refreshRoomShadow('卧室灯');
    }
    const sky=coast.update(elapsed,movingCaster);house.privacy.update(dt,sky);
    const prevHeading=harbor.heading;
    harbor.update(dt,sky,T.MathUtils.clamp(forwardInput(),-1,1),T.MathUtils.clamp(sideInput(),-1,1));
    if(mode==='boat'){
      yaw+=harbor.heading-prevHeading;harbor.eye(camera.position);camera.rotation.set(pitch,yaw,0,'YXZ');
    }else if(boatItem.enabled()){
      boatItem.object.position.copy(harbor.vessel.position);boatItem.object.position.y+=.52;boatItem.object.updateMatrixWorld();
    }
    if($('sky-clock').textContent!==sky.clock)$('sky-clock').textContent=sky.clock;
    if(now-lastPose>80){
      camera.updateMatrixWorld();const points=speakers.map(s=>ear.copy(s).applyMatrix4(camera.matrixWorldInverse).toArray());
      music.update(points);devices[0].pose(points,now);lastPose=now;
    }
    target=pick();$('prompt').hidden=!target||mode!=='walk'||!!transition;
    if(target){const label='E　'+target.name();if($('prompt').textContent!==label)$('prompt').textContent=label;hint.hidden=true;}
    let area=player.z< -6.14?(player.z>=-10.3&&Math.abs(player.x)<11.3?'露台':'岛岸'):player.x>3.8?'卧室':player.z>3&&player.x> -2.7?'厨房':'客厅';
    if(Math.abs(player.x)>11.3||player.z>6.3)area='岛岸';
    if(player.z>6.10&&player.z<11.91&&player.x< -2.63&&player.x> -11.05)area='书房';
    if(insideBathroom(player.x,player.z))area='卫生间';
    if(mode==='bed')area='卧室 · 床上';
    if(occupied)area=occupied.label;
    if(onPier(player.x,player.z))area='码头';
    if(mode==='boat'){
      area='驾驶中 · 距泊位 '+Math.round(harbor.distance)+' 米';
      if(harbor.canMoor()){
        $('prompt').textContent='E　靠岸下船';$('prompt').hidden=false;
      }
    }
    if($('location').textContent!==area)$('location').textContent=area;
    if(movingCaster&&now-lastShadow>250){coast.sunShadow();lastShadow=now;}
    // Sitting at a powered screen leaves the room camera fixed. The browser paints its iframe independently.
    if(mode==='screen'&&!transition&&now-lastScreenDraw<125)return;
    lastScreenDraw=now;
    coast.prepareView(camera);
    if(webScene.children.length)css.render(webScene,camera);
    renderer.render(scene,camera);
  };
  Promise.allSettled([coast.skyReady,house.modelReady]).then(async ([sky,models])=>{
    if(sky.status==='rejected')console.error('环境光资源加载失败',sky.reason);
    const missing=models.value?.filter(r=>r.status==='rejected')||[];
    if(missing.length)console.error('家具资源加载失败',missing);
    for(const circuit of house.life.circuits)circuit.sources[0].light.shadow.needsUpdate=true;
    coast.sunShadow();
    // Compile against the final lighting environment before the first walkable frame.
    // An early draw would synchronously link every material, then repeat it when the HDR arrives.
    try{
      prepareMaterials(scene);
      await renderer.compileAsync(scene,camera);
      await coast.prepareReflection(camera);
    }catch(error){console.warn('预编译未完成，将在绘制时准备材质',error);}
    last=performance.now();
    requestAnimationFrame(now=>{tick(now);status.hidden=true;});
  });
}
try{launch();}catch(error){console.error(error);status.textContent='3D 房间启动失败。请使用支持 WebGL 2 的浏览器，并启用硬件加速。';}
