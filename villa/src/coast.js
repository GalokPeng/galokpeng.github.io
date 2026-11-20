import * as T from 'three';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
import { Reflector } from 'three/addons/objects/Reflector.js';
import { M,V,asset,group,mesh,rod,bake,furnish } from './studio.js';
import { islandSky } from './island/sky.js';
import { plantGarden } from './garden.js';
import { insideBathroom } from './bathroom.js';
import {buildHarbor,onPier,pierHeight} from './harbor.js';
import { waveUniform } from './island/astronomy.js';
import spectrum from './island/waves.glsl?raw';
import oceanVertex from './ocean.vert?raw';
import oceanFragment from './ocean.frag?raw';

const clamp=T.MathUtils.clamp, smooth=T.MathUtils.smoothstep;
const hash=(x,y)=>{const n=Math.sin(x*127.1+y*311.7)*43758.5453;return n-Math.floor(n);};
function noise(x,z){
  const a=Math.floor(x), b=Math.floor(z);
  const u=smooth(x-a,0,1),v=smooth(z-b,0,1);
  return T.MathUtils.lerp(T.MathUtils.lerp(hash(a,b),hash(a+1,b),u),T.MathUtils.lerp(hash(a,b+1),hash(a+1,b+1),u),v);
}
function fbm(x,z){return .59*noise(x,z)+.27*noise(2.03*x+8,2.03*z)+.14*noise(4.21*x,4.21*z+19);}
export function islandRadius(x,z){return Math.hypot(x/39,(z-15)/32);}
export function ground(x,z){
  const r=islandRadius(x,z);
  const beach=-.34-3.4*smooth(r,.71,1.04)+.17*(fbm(x*.32,z*.32)-.5);
  const path=(1-smooth(Math.abs(x-1.5),1.24,3.8))*(1-smooth(Math.abs(z+13.1),.8,3.3));
  return T.MathUtils.lerp(beach,-1.2+.14*(z+13.19),path);
}
export function walkHeight(x,z) {
  if(onPier(x,z))return pierHeight(z);
  if(insideBathroom(x,z))return 0;
  if(x>=-11.02&&x<=-2.64&&z>=6&&z<=11.9)return 0;
  if(Math.abs(x)<11.30 && z>=-10.25 && z<6.28)return 0;
  if(Math.abs(x-1.5)<1.24 && z< -10.25 && z>=-13.20)return -.17*Math.floor((-z-10.25)/.42);
  return ground(x,z);
}
function land(p,width,depth,nx,nz,x,z,height,mat,tint,tile){
  const g=new T.PlaneGeometry(width,depth,nx,nz);g.rotateX(-Math.PI/2);
  const pos=g.attributes.position,uv=g.attributes.uv,colors=new Float32Array(pos.count*3),c=new T.Color();
  for(let i=0;i<pos.count;i++){
    const px=pos.getX(i)+x,pz=pos.getZ(i)+z,h=height(px,pz);
    pos.setY(i,h);uv.setXY(i,px/tile,pz/tile);
    tint(c,px,pz,h);c.toArray(colors,i*3);
  }
  g.setAttribute('color',new T.BufferAttribute(colors,3));g.computeVertexNormals();
  const m=mat.clone();m.vertexColors=true;
  const o=mesh(p,g,m,x,0,z);o.castShadow=false;return o;
}
function coastalPine(parent, foliage,x,z,h,seed){
  const y=ground(x,z),stem=V(x,y,z),joint=V(x+.048*h,y+.57*h,z+.02*h);
  rod(parent,stem,joint,.022*h,M.walnut);
  for(let i=0;i<9;i++){
    const angle=i*2.4+seed,rad=(.17+hash(i,seed)*.20)*h;
    const top=V(x+Math.cos(angle)*rad,y+h*(.81+.13*hash(seed,i)),z+Math.sin(angle)*rad);
    rod(parent,joint,top,.009*h,M.walnut);
    for(let j=0;j<14;j++){
      const a=hash(j+i*9,seed)*Math.PI*2, r=Math.sqrt(hash(i,j+seed))*.18*h;
      const leaf=new T.Object3D();
      leaf.position.set(top.x+r*Math.cos(a),top.y+h*(.02+.065*hash(j,seed)),top.z+r*Math.sin(a));
      leaf.rotation.set((hash(i,j)-.5)*1.3,a,(hash(seed,j)-.5)*.7);
      leaf.scale.set(h*.35,h*.17,1);leaf.updateMatrix();foliage.push(leaf.matrix);
    }
  }
}
function needleTexture(){
  const c=document.createElement('canvas');c.width=256;c.height=160;
  const ctx=c.getContext('2d');
  for(let i=0;i<4200;i++){
    const a=hash(i,2)*Math.PI*2,r=Math.sqrt(hash(i,5)),x=128+116*r*Math.cos(a),y=82+64*r*Math.sin(a);
    const light=Math.round(35+hash(i,8)*45+30*(1-y/160));
    ctx.strokeStyle='rgb('+Math.round(light*.81)+','+Math.round(light*1.04)+','+Math.round(light*.63)+')';
    ctx.lineWidth=1.8+hash(i,9)*1.8;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+7*Math.cos(a),y-2+5*Math.sin(a));ctx.stroke();
  }
  const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;return t;
}

// Keep the original wave grid in one draw. Only upload indices again when a tile
// enters or leaves the camera frustum; a swell can cross its undisplaced bounds.
function waterView(geometry,segments,level){
  const indices=geometry.index,source=indices.array.slice(),pos=geometry.attributes.position;
  indices.setUsage(T.DynamicDrawUsage);
  const frame=new T.Matrix4(),previous=new T.Matrix4(),frustum=new T.Frustum(),tiles=[];
  const tileSize=16,padding=2;
  for(let row=0;row<segments;row+=tileSize)for(let col=0;col<segments;col+=tileSize){
    const endRow=Math.min(row+tileSize,segments),endCol=Math.min(col+tileSize,segments);
    const first=row*(segments+1)+col,last=endRow*(segments+1)+endCol;
    const box=new T.Box3(V(pos.getX(first),level,-pos.getY(first)),V(pos.getX(last),level,-pos.getY(last))).expandByScalar(padding);
    const block=new source.constructor((endRow-row)*(endCol-col)*6);
    for(let r=row;r<endRow;r++){
      block.set(source.subarray((r*segments+col)*6,(r*segments+endCol)*6),(r-row)*(endCol-col)*6);
    }
    tiles.push({box,block,visible:true});
  }
  return camera=>{
    camera.updateMatrixWorld();
    frame.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);
    if(frame.equals(previous))return;
    previous.copy(frame);frustum.setFromProjectionMatrix(frame);
    let changed=false;
    for(const tile of tiles){
      const visible=frustum.intersectsBox(tile.box);
      if(visible!==tile.visible){tile.visible=visible;changed=true;}
    }
    if(!changed)return;
    let count=0;
    for(const {visible,block} of tiles)if(visible){indices.array.set(block,count);count+=block.length;}
    geometry.setDrawRange(0,count);
    if(count){indices.clearUpdateRanges();indices.addUpdateRange(0,count);indices.needsUpdate=true;}
  };
}

export function buildCoast(scene,renderer,exterior){
  const world=group(scene);
  world.add(exterior);
  plantGarden(world,ground);
  land(world,90,76,96,80,0,15,ground,M.sand,(c,x,z)=>{
    const t=smooth(islandRadius(x,z),.71,.98);
    c.set(0x67704e).lerp(new T.Color(0xf4e5ce),t).multiplyScalar(.77+.4*fbm(x*.41,z*.41));
  },3.4);
  // Uneven rock ridges, with an eroded littoral shelf and patches of Mediterranean scrub.
  const ridges=[
    [-68,-110,114,43,25,1.4],[-4,-160,135,39,30,8.1],[88,-117,100,52,33,2.6],
    [-108,-47,64,33,17,11],[-113,42,90,61,33,4.1],[96,74,98,59,30,17],
  ];
  const green=new T.Color(0x627258),limestone=new T.Color(0xc0b5a1),beach=new T.Color(0xd7c7ac);
  for(const [cx,cz,w,d,peak,seed] of ridges){
    const elevation=(x,z)=>{
      const u=(x-cx)/(w*.5),v=(z-cz)/(d*.5);
      const ridge=.15*Math.sin(4*u+seed)+.16*Math.sin(6*u+seed*.7);
      const dist=Math.hypot(u,(v-ridge)*.94);
      const silhouette=1-smooth(dist+.31*(fbm(x*.08+seed,z*.08)-.5),.08,1);
      return -3.5+peak*silhouette*(.27+.84*fbm(x*.055+seed,z*.073))+
        silhouette*(1-Math.abs(2*noise(x*.20,z*.19)-1))*2.65;
    };
    land(world,w*1.30,d*1.4,80,48,cx,cz,elevation,M.rock,(c,x,z,h)=>{
      const slope=Math.hypot(elevation(x+.65,z)-h,elevation(x,z+.65)-h);
      const shrub=smooth(fbm(x*.27+seed,z*.24)-slope*.3,.13,.62);
      c.copy(limestone).lerp(green,shrub).lerp(beach,1-smooth(h,-2.8,.6)).multiplyScalar(.84+.27*noise(x*.65,z*.48));
    },4.8);
  }
  const outcrops=[];
  const rocks=[[-29,-28,13,4.1,-.6],[-33,-30,6,2.6,.6],[32,-40,18,6.5,.4],
      [40,-45,10,3.5,.9],[21,-35,3,1.1,-.2],[-23,-24,4,1.55,.2],[-18,-16,2.8,.88,.3]];
  const harbor=buildHarbor(world,ground,rocks);
  for(const [x,z,length,height,turn] of rocks){
    const width=length*.51;
    outcrops.push(furnish(world,'rock_09',x,z,width,turn+Math.PI/2,-3.05).then(g=>{
      g.scale.y=height/(width*.44);g.traverse(o=>o.layers.enable(1));
    }));
  }
  const grove=group(world),leaves=[];
  for(let i=0;i<32;i++){
    const a=i*2.399963,r=18+hash(i,15)*12,x=Math.cos(a)*r,z=15+Math.sin(a)*r*.78;
    if((Math.abs(x)<13&&z<8)||islandRadius(x,z)>.86)continue;
    coastalPine(grove,leaves,x,z,3.5+hash(i,3)*3.6,i+19);
  }
  coastalPine(grove,leaves,-15.8,-2.3,5.2,81);coastalPine(grove,leaves,15.8,-1.5,6.8,99);
  bake(grove);
  const foliage=new T.InstancedMesh(new T.PlaneGeometry(1,1),new T.MeshStandardMaterial({map:needleTexture(),side:T.DoubleSide,alphaTest:.46,roughness:1}),leaves.length);
  leaves.forEach((m,i)=>foliage.setMatrixAt(i,m));foliage.castShadow=true;foliage.receiveShadow=true;world.add(foliage);
  const hemi=new T.HemisphereLight(0xf4f8ff,0xa49a7e,1.22);scene.add(hemi);
  const sunlight=new T.DirectionalLight(0xffe5bd,2.20);
  sunlight.position.set(-17,15,-23);sunlight.target.position.set(-1,0,0);scene.add(sunlight,sunlight.target);
  sunlight.castShadow=true;sunlight.shadow.mapSize.set(1024,1024);
  sunlight.shadow.autoUpdate=false;sunlight.shadow.needsUpdate=true;
  Object.assign(sunlight.shadow.camera,{left:-18,right:18,bottom:-13,top:15,near:1,far:76});
  sunlight.shadow.normalBias=.022;sunlight.shadow.bias=-.00018;
  const lightning=new T.DirectionalLight(0xe2ecff,0);lightning.name='Lightning';
  lightning.target.position.set(0,1,1);scene.add(lightning,lightning.target);
  lightning.castShadow=true;lightning.shadow.mapSize.set(1024,1024);
  Object.assign(lightning.shadow.camera,{left:-19,right:19,bottom:-16,top:16,near:1,far:82});
  lightning.shadow.autoUpdate=false;lightning.shadow.normalBias=.012;lightning.shadow.bias=-.00012;
  lightning.layers.enable(1);
  let lastBolt=null,flashShadowDirty=true;
  // The mirror sees the landscape and its light, without a second render of the furnished rooms.
  world.traverse(o=>o.layers.enable(1));hemi.layers.enable(1);sunlight.layers.enable(1);
  const sky=islandSky(world);
  scene.background=new T.Color(0xbdd6e1);scene.fog=new T.FogExp2(0xb1c5c6,.0042);
  const segments=144,seaGeometry=new T.PlaneGeometry(1150,1150,segments,segments),grid=seaGeometry.attributes.position;
  const spread=v=>{const t=v/575;return 47*t+528*t*t*t;};
  for(let i=0;i<grid.count;i++)grid.setXY(i,spread(grid.getX(i)),spread(grid.getY(i)));
  const sea=new Reflector(seaGeometry,{
    textureWidth:448,textureHeight:256,multisample:0,clipBias:.004,
    shader:{name:'Coastal water',vertexShader:spectrum+oceanVertex,fragmentShader:spectrum+oceanFragment,
      uniforms:{tDiffuse:{value:null},textureMatrix:{value:null},color:{value:null},time:{value:0},wind:{value:.36},
        storm:{value:0},sunDir:{value:V(-16,15,-23).normalize()},skyColor:{value:new T.Color(0xa6c9d8)}}}
  });
  sea.rotation.x=-Math.PI/2;sea.position.y=-2.56;sea.renderOrder=1;scene.add(sea);
  const prepareView=waterView(seaGeometry,segments,sea.position.y);
  const uniforms=sea.material.uniforms,reflect=sea.onBeforeRender,renderedPose=new T.Matrix4();
  const waves=waveUniform.slice(),shapes=new Float32Array(waves.length/2);
  const omega=Array.from({length:waves.length/4},(_,i)=>{
    const k=Math.hypot(waves[i*4],waves[i*4+1]);shapes[i*2+1]=1/k;return Math.sqrt(9.81*k);
  });
  Object.assign(uniforms,{uWaves:{value:waves},uWaveShape:{value:shapes},deep:{value:new T.Color()},shallow:{value:new T.Color()},moonDir:{value:V()},night:{value:0},moon:{value:0},sun:{value:0},sunTint:{value:new T.Color()}});
  let lastReflection=-1000;
  sea.onBeforeRender=function(r,s,camera){
    if(!seaGeometry.drawRange.count)return;
    const now=performance.now(),moved=!camera.matrixWorld.equals(renderedPose);
    if(now-lastReflection>(moved?90:650)){
      sea.getReflectionCamera(camera).layers.set(1);
      reflect.call(this,r,s,camera);lastReflection=now;renderedPose.copy(camera.matrixWorld);
    }
  };
  const skyReady=new HDRLoader().loadAsync(asset('coastal-sky.hdr')).then(tex=>{
    tex.mapping=T.EquirectangularReflectionMapping;
    scene.environment=tex;scene.environmentIntensity=.66;
    scene.environmentRotation.y=1.15;
    scene.backgroundIntensity=.66;renderer.shadowMap.needsUpdate=true;
  });
  const n=2400,rainGeo=new T.BufferGeometry(),arr=new Float32Array(n*6),ends=new Float32Array(n*2);
  for(let i=0;i<n;i++){
    const x=(hash(i,63)-.5)*76,z=(hash(i,72)-.55)*75,y=hash(i,27)*17;
    arr.set([x,y,z,x,y,z],i*6);ends[i*2+1]=.16+hash(i,91)*.12;
  }
  rainGeo.setAttribute('position',new T.BufferAttribute(arr,3));
  rainGeo.setAttribute('tail',new T.BufferAttribute(ends,1));
  const rainMat=new T.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{time:uniforms.time,amount:{value:0},drift:{value:new T.Vector2()}},
    vertexShader:'attribute float tail; uniform float time; uniform vec2 drift; varying vec3 drop; void main(){drop=position;drop.y=mod(position.y-time*8.0,17.0)-2.5+tail;drop.xz+=drop.y*drift; gl_Position=projectionMatrix*modelViewMatrix*vec4(drop,1.0);}',
    fragmentShader:'varying vec3 drop; uniform float amount; void main(){float roof=4.1+2.9*min((11.55-abs(drop.x))/5.90,1.-abs(drop.z)/6.62);bool house=abs(drop.x)<11.55&&abs(drop.z)<6.62&&drop.y<roof+.05;bool library=abs(drop.x+6.85)<4.39&&abs(drop.z-8.94)<3.14&&drop.y<3.91;bool bath=abs(drop.x-7.525)<3.68&&abs(drop.z-8.37)<2.45&&drop.y<3.7;if(house||library||bath)discard;gl_FragColor=vec4(.73,.82,.87,.31*amount);}'});
  const rain=new T.LineSegments(rainGeo,rainMat);rain.frustumCulled=false;scene.add(rain);
  let shadowAt=-100;
  const lastLightPosition=V();
  function sunShadow(){sunlight.shadow.needsUpdate=true;renderer.shadowMap.needsUpdate=true;}
  const daylightTint=new T.Color(0xf4f4ef);
  function prepareReflection(camera){
    const mirror=sea.getReflectionCamera(camera);
    mirror.layers.set(1);
    const previous=renderer.getRenderTarget();
    renderer.setRenderTarget(sea.getRenderTarget());
    try{return renderer.compileAsync(world,mirror,scene);}
    finally{renderer.setRenderTarget(previous);}
  }
  return {harbor,skyReady:Promise.all([skyReady,...outcrops]),prepareView,prepareReflection,sunShadow,setWeather:sky.setWeather,setLightning:sky.setLightning,setTime(value){sky.setTime(value);shadowAt=-100;lastReflection=-1000;},setWind:sky.setWind,update(t,movingCaster){
    const state=sky.update(performance.now()/1000),{p,flash,rain:wet,dark,wind,phase}=state;
    const day=1-p.nightness;
    // Dispersion, wind amplitude and steepness are uniform across the entire water surface.
    for(let i=0;i<omega.length;i++){
      const n=4*i,a=waveUniform[n+2]*(.72+.78*wind);
      waves[n+2]=a;waves[n+3]=waveUniform[n+3]-omega[i]*phase;
      shapes[2*i]=Math.min(.55,a/shapes[2*i+1]);
    }
    uniforms.time.value=phase;uniforms.wind.value=wind;uniforms.storm.value=dark;
    uniforms.sunDir.value.fromArray(p.sunDir);uniforms.moonDir.value.fromArray(p.moonDir);
    uniforms.skyColor.value.fromArray(p.skyHorizon);uniforms.sunTint.value.fromArray(p.celestialColor);
    uniforms.deep.value.fromArray(p.waterDeep);uniforms.shallow.value.fromArray(p.waterShallow);
    uniforms.night.value=p.nightness;uniforms.sun.value=p.sunVisibility;uniforms.moon.value=p.moonPhase*p.moonVisibility;
    rain.visible=wet>.015;rainMat.uniforms.amount.value=wet;
    rainMat.uniforms.drift.value.set(Math.cos(state.angle)*wind*.38,Math.sin(state.angle)*wind*.38);
    sunlight.position.fromArray(p.sunDir[1]>0?p.sunDir:p.moonDir).multiplyScalar(32);
    sunlight.color.fromArray(p.sunDir[1]>0?p.celestialColor:[.39,.51,.81]);
    sunlight.intensity=(2.8*Math.sqrt(Math.max(0,p.sunDir[1]))+.13*uniforms.moon.value)*(1-.82*dark);
    lightning.intensity=flash*4.8;
    if(movingCaster)flashShadowDirty=true;
    if(flash>0&&(lastBolt!==state.bolt||flashShadowDirty)){
      const bearing=state.bolt*2.399963,dist=7.75+4.75*Math.sin(state.bolt);
      lightning.position.set(Math.sin(bearing)*dist,3.3,Math.cos(bearing)*dist).setLength(36).add(lightning.target.position);
      lightning.shadow.needsUpdate=true;renderer.shadowMap.needsUpdate=true;lastBolt=state.bolt;flashShadowDirty=false;
    }
    hemi.color.fromArray(p.skyHorizon).lerp(daylightTint,.45*day);
    hemi.intensity=.19+.95*day;scene.environmentIntensity=.035+.46*day*(1-.6*dark);
    scene.fog.color.fromArray(p.skyHorizon);scene.fog.density=.0032+dark*.004;
    // A shadow texel is about 3.5 cm across. Refresh when the source has travelled appreciably.
    if(t-shadowAt>.35&&lastLightPosition.distanceToSquared(sunlight.position)>.0025){
      sunShadow();lastLightPosition.copy(sunlight.position);shadowAt=t;
    }
    return state;
  }};
}
