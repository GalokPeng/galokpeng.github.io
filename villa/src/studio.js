import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new T.TextureLoader();
const models = new GLTFLoader();
const surfaceMaps=new Map();
export const asset = name => import.meta.env.BASE_URL + 'assets/' + name;
export function material(color, roughness=.67, metalness=0) {
  return new T.MeshStandardMaterial({color,roughness,metalness});
}
function surface(id, tint, roughness, tiles, normal=.45) {
  const mat=material(tint,roughness);
  for(const [field,file] of [['map','color'],['normalMap','normal']]) {
    const url=asset(id+'/'+file+'.jpg');
    let t=surfaceMaps.get(url);
    if(!t){
      t=loader.load(url);t.wrapS=t.wrapT=T.RepeatWrapping;t.anisotropy=4;
      if(field==='map')t.colorSpace=T.SRGBColorSpace;
      surfaceMaps.set(url,t);
    }
    mat[field]=t;
  }
  mat.normalScale.setScalar(normal);
  mat.userData.meters=tiles;
  return mat;
}
export const M={
  plaster:surface('plastered_wall_02',0xfff5de,.88,2.3,.19),
  floor:surface('herringbone_parquet',0xe9cba8,.58,2.45,.44),
  oak:surface('wood_floor_deck',0xc09b72,.56,2,.26),
  table:surface('wood_table_001',0xd6b99b,.49,1.2,.24),
  walnut:surface('wood_floor_deck',0x705441,.49,1.5,.27),
  stone:surface('marble_01',0xf0e6d6,.33,1.35,.18),
  linen:surface('rough_linen',0xf5e9ce,.91,.8,.29),
  brocade:surface('quatrefoil_jacquard_fabric',0xe1c9a6,.93,.69,.32),
  roof:surface('clay_roof_tiles_03',0xe7cab2,.84,2.1,.56),
  rock:surface('rock_face_03',0xc3b89b,.97,3.8,.63),
  sand:surface('aerial_sand',0xe8d5b2,.98,3,.36),
  trim:material(0xe4dbc5,.60), cream:material(0xf2ead7,.68),
  green:material(0x526c62,.61), brass:material(0xb29a63,.31,.72),
  bronze:material(0x4c4638,.39,.64), ink:material(0x282a25,.48),
  black:material(0x161916,.68), metal:material(0x929790,.27,.76),
  clay:material(0xb07454,.84), blue:material(0x657e85,.82),
  ivory:material(0xece5d8,.87), velvet:material(0x68766c,.89),
};
export const cotton=material(0xf1e5d0,.94);
cotton.normalMap=M.linen.normalMap;cotton.normalScale.setScalar(.36);cotton.userData.meters=.85;
export const glass = new T.MeshStandardMaterial({color:0xc7e7e3,metalness:.2,roughness:.09,transparent:true,opacity:.048,depthWrite:false});
export const V=(x=0,y=0,z=0)=>new T.Vector3(x,y,z);
export const group=(parent,x=0,y=0,z=0)=>{const g=new T.Group();parent.add(g);g.position.set(x,y,z);return g;};
export function mesh(parent,geo,mat,x=0,y=0,z=0) {
  const m=new T.Mesh(geo,mat);parent.add(m);m.position.set(x,y,z);
  m.castShadow=!mat.transparent;m.receiveShadow=true;return m;
}
function scaleUVs(geo,dims,meters) {
  if(!meters)return geo;
  const uv=geo.attributes.uv,n=geo.attributes.normal;
  for(let i=0;i<uv.count;i++){
    const nx=Math.abs(n.getX(i)),ny=Math.abs(n.getY(i));
    const w=nx>.65?dims[2]:dims[0],h=ny>.65?dims[2]:dims[1];
    uv.setXY(i,uv.getX(i)*w/meters,uv.getY(i)*h/meters);
  }
  return geo;
}
// Most mouldings, bulbs, book spines and balusters share their original shape.
// bake() copies vertices into world-space batches without changing these templates.
const primitives=new Map();
export function finishGeometryBuild(){primitives.clear();}

// A StandardMaterial's direct diffuse and specular terms are both zero at N·L <= 0.
// Keep Three's BRDF and shadow code for contributing lights. Skip its shadow taps
// and BRDF for back-facing fixtures, out-of-range point lights and an inactive flash.
const localLighting=T.ShaderChunk.lights_fragment_begin
  .replace('getPointLightInfo( pointLight, geometryPosition, directLight );',
    '$&\n directLight.visible = directLight.visible && dot(geometryNormal, directLight.direction) > 0.0;')
  .replace('getDirectionalLightInfo( directionalLight, directLight );',
    '$&\n directLight.visible = directLight.color != vec3(0.0) && dot(geometryNormal, directLight.direction) > 0.0;')
  .replaceAll('RE_Direct( directLight,','if (directLight.visible) RE_Direct( directLight,');
function compileRoomMaterial(shader){
  shader.fragmentShader=shader.fragmentShader.replace('#include <lights_fragment_begin>',localLighting);
}
export function prepareMaterials(scene){
  scene.traverse(o=>{
    for(const m of Array.isArray(o.material)?o.material:[o.material]){
      if(m?.type==='MeshStandardMaterial'&&m.onBeforeCompile===T.Material.prototype.onBeforeCompile){
        m.onBeforeCompile=compileRoomMaterial;
      }
    }
  });
}
export function box(p,x,y,z,w,h,d,m=M.trim,r=0) {
  const key=['box',w,h,d,r,m.userData.meters].join('/');
  let g=primitives.get(key);
  if(!g){
    g=r?new RoundedBoxGeometry(w,h,d,r<.04?1:2,Math.min(r,w/2,h/2,d/2)):new T.BoxGeometry(w,h,d);
    scaleUVs(g,[w,h,d],m.userData.meters);primitives.set(key,g);
  }
  return mesh(p,g,m,x,y,z);
}
export function ball(p,x,y,z,sx,sy,sz,m) {
  const small=Math.max(sx,sy,sz)<.19;
  const key=small?'sphere-small':'sphere';
  if(!primitives.has(key))primitives.set(key,new T.SphereGeometry(1,small?14:22,small?9:16));
  const o=mesh(p,primitives.get(key),m,x,y,z);o.scale.set(sx,sy,sz);return o;
}
export function cylinder(p,x,y,z,rt,rb,h,m,n=24) {
  const key=['cylinder',rt,rb,h,n].join('/');
  if(!primitives.has(key))primitives.set(key,new T.CylinderGeometry(rt,rb,h,n));
  return mesh(p,primitives.get(key),m,x,y,z);
}
export function rod(p,a,b,r,m) {
  const v=b.clone().sub(a);const c=cylinder(p,0,0,0,r,r,v.length(),m,12);
  c.position.copy(a).lerp(b,.5);c.quaternion.setFromUnitVectors(V(0,1,0),v.normalize());return c;
}
export function tube(p,points,r,m) {
  return mesh(p,new T.TubeGeometry(new T.CatmullRomCurve3(points),Math.max(12,points.length*2),r,8,false),m);
}
const modelCache=new Map();
export async function furnish(parent,id,x,z,width,rotation=0,y=0) {
  if(!modelCache.has(id))modelCache.set(id,models.loadAsync(asset(id+'/model.gltf')));
  const gltf=await modelCache.get(id), model=gltf.scene.clone(true);
  const bounds=new T.Box3().setFromObject(model), size=bounds.getSize(V()), center=bounds.getCenter(V());
  const anchor=group(parent,x,y,z);anchor.rotation.y=rotation;
  const k=width/size.x;model.scale.multiplyScalar(k);
  model.position.set(-center.x*k,-bounds.min.y*k,-center.z*k);
  model.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
  anchor.add(model);return anchor;
}
// Batch only fixed architecture; doors, rendering masks and furnishings retain their own transforms.
export function bake(root) {
  root.updateWorldMatrix(true,true);
  const inv=root.matrixWorld.clone().invert(), batches=new Map();
  root.traverse(o=>{
    if(!o.isMesh)return;
    const g=new T.BufferGeometry().copy(o.geometry);
    // Keep shared vertices through the merge. All members of an indexed batch need an index.
    if(!g.index)g.setIndex(Array.from({length:g.attributes.position.count},(_,i)=>i));
    g.applyMatrix4(new T.Matrix4().multiplyMatrices(inv,o.matrixWorld));
    g.clearGroups();if(!batches.has(o.material))batches.set(o.material,[]);
    batches.get(o.material).push(g);
  });
  root.clear();
  for(const [m,parts] of batches){
    const geometry=mergeGeometries(parts,false);if(!geometry)throw Error('Geometry batch mismatch');
    const o=mesh(root,geometry,m);o.castShadow=!m.transparent;
    for(const p of parts)p.dispose();
  }
}
let shade;
export function contact(p,x,z,w,d,alpha=.22,y=.012) {
  if(!shade){
    const c=document.createElement('canvas');c.width=c.height=96;
    const ctx=c.getContext('2d'),g=ctx.createRadialGradient(48,48,3,48,48,47);
    g.addColorStop(0,'#18160deb');g.addColorStop(.48,'#18160db5');g.addColorStop(1,'#18160d00');
    ctx.fillStyle=g;ctx.fillRect(0,0,96,96);shade=new T.CanvasTexture(c);
  }
  const mat=new T.MeshBasicMaterial({map:shade,transparent:true,opacity:alpha,depthWrite:false});
  const o=mesh(p,new T.PlaneGeometry(w,d),mat,x,y,z);o.rotation.x=-Math.PI/2;o.castShadow=false;return o;
}
