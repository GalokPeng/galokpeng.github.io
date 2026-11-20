import * as T from 'three';
import {computePalette,queryPlanState,localMidnightMs,findEventTime,SKY_LOCATION} from './astronomy.js';
import fragmentShader from './sky.frag?raw';

export function islandSky(scene){
  const uniforms={};
  for(const name of ['SunDir','MoonDir','SkyHorizon','SkyZenith','CelestialColor'])uniforms['u'+name]={value:new T.Vector3()};
  for(const name of ['Time','CloudTime','SunVisibility','MoonVisibility','MoonPhase','Night','Sidereal','CloudCover','CloudDarken','Flash','LightningSeed','StarSeed','Aurora','WindLevel'])uniforms['u'+name]={value:0};
  uniforms.uWindOffset={value:new T.Vector2()};uniforms.uLatitude={value:SKY_LOCATION.latitude*Math.PI/180};
  const sky=new T.Mesh(new T.SphereGeometry(1,32,18),new T.ShaderMaterial({
    uniforms,fragmentShader,side:T.BackSide,depthWrite:false,
    vertexShader:'varying vec3 sight;void main(){sight=position;vec4 clip=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);gl_Position=clip.xyww;}'
  }));
  sky.frustumCulled=false;sky.renderOrder=2;sky.layers.enable(1);scene.add(sky);
  let reference=Date.now(),simReference=reference,rate=1,manual='auto',windMode='auto',lightning='follow';
  let dark=0,rain=0,cloud=0,wind=.3,nextWind=0,angle=.7,lastReal=0,nextFlash=0,flashStart=-20,bolt=0,initial=true;
  let cachedSecond=-1,p,plan,local,dayKey;
  const timeAt=now=>simReference+(now-reference)*rate;
  function setTime(value){
    const now=Date.now(),before=timeAt(now),midnight=localMidnightMs(new Date(now));
    simReference=now;reference=now;rate=1;
    if(['100','1000','10000'].includes(value)){simReference=before;rate=Number(value);}
    else if(value==='night')simReference=midnight+23*3600000;
    else if(value==='day')simReference=midnight+12*3600000;
    else if(value!=='real')simReference=findEventTime(new Date(now),value)??now;
    initial=true;cachedSecond=-1;
  }
  return {setTime,setWeather(value){manual=value;nextFlash=0;},setWind(value){windMode=value;nextWind=0;},
    setLightning(value){lightning=value;nextFlash=0;flashStart=-20;},
    update(real){
      const now=timeAt(Date.now()),second=Math.floor(now/1000),dt=lastReal?Math.min(1,real-lastReal):0;lastReal=real;
      if(cachedSecond!==second){
        local=new Date(now+8*3600000);plan=queryPlanState(local);p=computePalette(new Date(now),dark);cachedSecond=second;
        dayKey=local.getUTCFullYear()*10000+(local.getUTCMonth()+1)*100+local.getUTCDate();
      }
      const manualWet=manual==='storm'||manual==='rain',automatic=manual==='auto';
      const thunderOn=lightning==='on'||(lightning==='follow'&&manual==='storm');
      const thunderAuto=lightning==='auto'||(lightning==='follow'&&automatic);
      const cloudTarget=thunderOn?1:automatic?plan.cloudTarget:Number(manualWet);
      const darkTarget=thunderOn?.85:automatic?(plan.darkenTarget||0):manualWet?.85:0;
      const rainTarget=automatic?plan.rainTarget: Number(manualWet);
      const step=initial?1e4:dt*rate;initial=false;
      cloud=T.MathUtils.damp(cloud,cloudTarget,1/(automatic?90:4),step);
      dark=T.MathUtils.damp(dark,darkTarget,1/(automatic?45:3),step);
      rain=T.MathUtils.damp(rain,rainTarget*cloud*(.3+.7*dark),1/(automatic?20:2),step);
      if(real>=nextWind){
        const gust=Math.random();wind=windMode==='auto'?(gust<.25?0:gust<.75?.15+.25*Math.random():.5+.35*Math.random()):({off:0,low:.3,high:.8}[windMode]??.3);
        angle=Math.random()*Math.PI*2;nextWind=real+120+Math.random()*240;
      }
      if((thunderOn||(thunderAuto&&plan.lightningAllow&&cloud>.75&&dark>.5))&&real>=nextFlash){
        flashStart=real;bolt=Math.random()*100;nextFlash=real+(thunderOn?3+Math.random()*3:60+Math.random()*180);
      }
      const age=real-flashStart;
      const pulse=(start,width)=>age>=start?Math.max(0,1-(age-start)/width):0;
      const flash=Math.max(pulse(0,.15),pulse(.24,.12)*.72,pulse(.52,.17)*.86);
      const u=uniforms,seconds=(now/1000+8*3600)%86400;
      u.uTime.value=seconds;u.uCloudTime.value=seconds%1570.7963;
      u.uSunDir.value.fromArray(p.sunDir);u.uMoonDir.value.fromArray(p.moonDir);
      u.uSkyZenith.value.fromArray(p.skyZenith);u.uSkyHorizon.value.fromArray(p.skyHorizon);u.uCelestialColor.value.fromArray(p.celestialColor);
      u.uSunVisibility.value=p.sunVisibility;u.uMoonVisibility.value=p.moonVisibility;u.uMoonPhase.value=p.moonPhase;
      u.uNight.value=p.nightness;u.uSidereal.value=p.sidereal;u.uStarSeed.value=(dayKey*2654435761%1e6)/1e6;
      const auroraDay=(dayKey*40503%1000)/1000<.08+(SKY_LOCATION.latitude-30)/40*.5;
      u.uAurora.value=auroraDay?(.4+(dayKey*7919%600)/1000)*Math.max(0,(p.nightness-.3)/.7):0;
      u.uCloudCover.value=.36+.64*Math.max(dark,cloud*.55);u.uCloudDarken.value=dark;
      u.uFlash.value=flash;u.uLightningSeed.value=bolt;u.uWindLevel.value=wind;
      u.uWindOffset.value.x=(u.uWindOffset.value.x+(.0009+Math.cos(angle)*wind*.012)*dt*rate+256)%256;
      u.uWindOffset.value.y=(u.uWindOffset.value.y+(.0012+Math.sin(angle)*wind*.012)*dt*rate+256)%256;
      return {p,flash,bolt,rain,dark,wind,angle,phase:seconds%3600,clock:local.toISOString().slice(11,16)};
    }};
}
