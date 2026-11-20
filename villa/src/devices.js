import * as T from 'three';
import { CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { M,V,material,box,group,mesh } from './studio.js';
import '../projector-link/room-audio.js';

export function buildDevice(scene,webScene,spec) {
  const body=group(scene);body.position.copy(spec.center);body.rotation.y=spec.yaw;
  const monitor=spec.id==='computer',edge=monitor?.033:.026;
  box(body,0,0,-.057,spec.width+edge*2,spec.height+edge*2,.082,monitor?M.ink:M.bronze,.016);
  const blank=material(monitor?0x182021:0xe4e0d4,monitor?.25:.83);
  box(body,0,0,-.012,spec.width,spec.height,.014,blank);
  const aperture=mesh(body,new T.PlaneGeometry(spec.width,spec.height),new T.ShaderMaterial({
    vertexShader:'void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:'void main(){gl_FragColor=vec4(0.);}',
    blending:T.NoBlending,depthWrite:true,toneMapped:false,
  }),0,0,.003);
  aperture.renderOrder=5;aperture.castShadow=false;aperture.visible=false;
  const led=box(body,spec.width*.46,-spec.height*.5-.013,-.005,.022,.008,.012,new T.MeshBasicMaterial({color:0x946451}));
  const normal=V(0,0,1).applyQuaternion(body.quaternion);
  const g=new T.PointLight(monitor?0xc1d7ff:0xffe8c7,0,monitor?2.1:4,2);g.position.copy(spec.center).addScaledVector(normal,.2);scene.add(g);
  let object=null,iframe=null,video=null,blobURL=null,connected=false,poseAt=0,releaseFilm=null;
  const origin=new URL(spec.url).origin;
  function send(type,extras={}){if(!monitor&&iframe&&!video)iframe.contentWindow?.postMessage({app:'galok.villa',type,...extras},origin);}
  addEventListener('message',e=>{
    if(monitor||!iframe||e.source!==iframe.contentWindow||e.origin!==origin||e.data?.app!=='galok.projector')return;
    if(e.data.type==='ready')send('connect');
    if(e.data.type==='connected')connected=true;
    if(e.data.type==='audio')document.getElementById('media-status').textContent='站内视频 · 双音箱已接通';
    if(e.data.type==='no-video')document.getElementById('media-status').textContent='请先在在线影视中播放影片。';
  });
  function clearFilm(){releaseFilm?.();releaseFilm=null;if(video){video.pause();video.removeAttribute('src');video.load();video.remove();video=null;}
    if(blobURL){URL.revokeObjectURL(blobURL);blobURL=null;}}
  function showWeb(){if(!video)return;clearFilm();if(iframe){iframe.hidden=false;iframe.src=spec.url;}}
  async function film(file,sound){
    if(!object||monitor)return;clearFilm();iframe.hidden=true;iframe.src='about:blank';connected=false;
    video=document.createElement('video');video.controls=true;video.playsInline=true;video.disablePictureInPicture=true;
    video.controlsList?.add('nofullscreen');blobURL=URL.createObjectURL(file);video.src=blobURL;
    video.ondblclick=e=>e.preventDefault();object.element.append(video);
    const film=video,disconnect=await sound.connect(film);
    if(video!==film){disconnect();return;}releaseFilm=disconnect;await film.play();
  }
  function powerOn(){
    if(object)return;
    const div=document.createElement('div');div.className='web-device';
    // Websites retain their own DOM, focus handling and same-origin boundary.
    const width=1366,height=width*spec.height/spec.width;
    div.style.width=width+'px';div.style.height=height+'px';
    iframe=document.createElement('iframe');iframe.title=spec.label;iframe.src=spec.url;
    iframe.allow=monitor?'fullscreen; autoplay':"fullscreen 'none'; autoplay";iframe.referrerPolicy='strict-origin-when-cross-origin';
    iframe.onload=()=>{connected=false;send('connect');};
    div.append(iframe);object=new CSS3DObject(div);object.position.copy(spec.center).addScaledVector(normal,.003);
    object.quaternion.copy(body.quaternion);object.scale.setScalar(spec.width/width);
    webScene.add(object);div.style.pointerEvents='none';iframe.tabIndex=-1;
    aperture.visible=true;led.material.color.setHex(0xb9dfbd);g.intensity=monitor?.65:2.1;
  }
  function powerOff(){
    aperture.visible=false;if(!object)return;
    clearFilm();iframe.onload=null;iframe.src='about:blank';webScene.remove(object);object.element.remove();connected=false;
    object=null;iframe=null;led.material.color.setHex(0x946451);g.intensity=0;
  }
  function input(enabled){
    if(!object)return;object.element.style.pointerEvents=enabled?'auto':'none';
    object.element.classList.toggle('active-web',enabled);
    iframe.style.pointerEvents=enabled?'auto':'none';iframe.tabIndex=enabled?0:-1;
  }
  return {...spec,normal,body,powerOn,powerOff,input,film,showWeb,get linked(){return connected;},get playingFile(){return !!video;},
    fill(){send('fill');},pose(points,now){if(!monitor&&connected&&now-poseAt>80){send('pose',{points});poseAt=now;}},
    get powered(){return Boolean(object);}};
}

export function stereo(){
  let ctx,out,bus,timer,step=0;
  async function ready(){
    if(!bus){bus=GalokRoomAudio();ctx=bus.ctx;out=ctx.createGain();out.connect(bus.input);}
    await ctx.resume();
  }
  const chords=[[174.61,220,261.63,329.63],[146.83,196,246.94,293.66],[164.81,196,261.63,329.63],[130.81,174.61,220,293.66]];
  function note(){
    const chord=chords[Math.floor(step/6)%chords.length];
    const f=chord[[0,2,1,3,2,1][step++%6]],t=ctx.currentTime;
    const osc=ctx.createOscillator(),env=ctx.createGain();osc.type='triangle';osc.frequency.value=f;
    env.gain.setValueAtTime(.0001,t);env.gain.exponentialRampToValueAtTime(.15,t+.03);
    env.gain.exponentialRampToValueAtTime(.0001,t+1.9);
    osc.connect(env).connect(out);osc.start(t);osc.stop(t+2);
    osc.onended=()=>{osc.disconnect();env.disconnect();};
  }
  return {get on(){return Boolean(timer);},async toggle(){
    if(timer){clearInterval(timer);timer=null;out.gain.setTargetAtTime(0,ctx.currentTime,.07);return;}
    await ready();out.gain.value=.28;note();timer=setInterval(note,480);
  },async connect(video){await ready();const source=ctx.createMediaElementSource(video);source.connect(bus.input);return ()=>source.disconnect();},
  update(points){bus?.pose(points);}};
}
