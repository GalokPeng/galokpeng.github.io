import * as T from 'three';
import { household } from './household.js';
import { adoptCat } from './cat.js';
import {smartGlass,casement,wallButton,bedroomSkylight,ceilingLayer,ceilingBeam,roofAroundSkylight} from './glazing.js';
import { M, V, asset, material, glass, cotton, box, group, mesh, ball, cylinder, rod, tube, bake, contact, furnish } from './studio.js';

const H=3.82, Z=-6.1;
const archSpring=2.54,archRise=.72;
const lampGlass=new T.MeshStandardMaterial({color:0xffe8be,emissive:0xffcf91,emissiveIntensity:.65,roughness:.47});
const grille=material(0x32332e,.91), porcelain=material(0xece9db,.27);
const curtainLinen=cotton.clone();
curtainLinen.side=T.DoubleSide;

function arch(p,x,w,base,doorFilm,operable){
  const spring=archSpring,rise=archRise, top=H+.05, r=w/2;
  const shape=new T.Shape();shape.moveTo(-r,top);shape.lineTo(r,top);shape.lineTo(r,spring);
  const curve=[];
  for(let i=0;i<=36;i++){
    const a=i*Math.PI/36,px=Math.cos(a)*r,py=spring+Math.sin(a)*rise;
    shape.lineTo(px,py);curve.push(V(x+px,py,Z+.15));
  }
  shape.closePath();
  mesh(p,new T.ExtrudeGeometry(shape,{depth:.32,bevelEnabled:false}),M.plaster,x,0,Z-.17);
  tube(p,curve,.083,M.trim);
  for(const sign of [-1,1]){
    box(p,x+sign*r,spring/2,Z,.13,spring,.41,M.trim);
    box(p,x+sign*(r-.049),(spring+base)/2,Z,.054,spring-base,.073,M.walnut);
  }
  box(p,x,spring,Z,w,.07,.084,M.walnut);
  const fan=curve.map(v=>V(x+(v.x-x)*.968,spring+(v.y-spring)*.93,Z));
  tube(p,fan,.027,M.walnut);
  for(const f of [.25,.5,.75]){
    const a=f*Math.PI; rod(p,V(x,spring,Z),V(x+Math.cos(a)*r*.97,spring+Math.sin(a)*rise*.94,Z),.019,M.bronze);
  }
  if(doorFilm){
    const half=new T.Shape();half.moveTo(-r+.035,0);half.lineTo(r-.035,0);
    half.absellipse(0,0,r-.035,rise-.023,0,Math.PI,false,0);half.closePath();
    mesh(p,new T.ShapeGeometry(half,32),doorFilm,x,spring,Z-.012);
    return;
  }
  box(p,x,base/2,Z,w,base,.32,M.plaster);
  box(p,x,base+.025,Z+.025,w+.18,.085,.48,M.stone);
  box(p,x,(spring+base)/2,Z,.072,spring-base,.079,M.walnut);
  const paneX=operable?x+w/4:x,paneW=operable?w/2:w;
  box(p,paneX,1.36,Z,paneW,.042,.075,M.walnut);
  box(p,paneX,(spring+base)/2,Z-.035,paneW-.08,spring-base,.012,glass);
}

function curtain(scene,anchor,sign,travel,{z=Z+.28,bottom=.085,top=3.42,scale=1}={}){
  const rail=group(scene,anchor,0,z);
  const stack=.32*scale, folds=Math.ceil(travel/(.31*scale));
  function drape(width,depth){
    const geo=new T.PlaneGeometry(1,1,folds*6,8),pos=geo.attributes.position;
    for(let i=0;i<pos.count;i++){
      const u=.5+sign*pos.getX(i),v=pos.getY(i)+.5;
      const phase=2*Math.PI*folds*u+.12*(1-v)*Math.sin(u*Math.PI);
      const x=sign*(u*width+.012*(1-v)*Math.sin(Math.PI*u));
      const fold=Math.cos(phase);
      // Each crest at the top meets the bottom of its ring on the rail.
      pos.setXYZ(i,x,bottom+(top-bottom)*v+.014*scale*(1-v)*fold,scale*(depth*(1-fold)+.014*(1-v)));
    }
    geo.computeVertexNormals();return geo;
  }
  const fabric=drape(stack,.068),extended=drape(travel,.042);
  fabric.morphAttributes.position=[extended.attributes.position];
  fabric.morphAttributes.normal=[extended.attributes.normal];
  fabric.computeBoundingSphere();
  const cloth=mesh(rail,fabric,curtainLinen);
  const ringGeo=new T.TorusGeometry(.042*scale,.007*scale,6,12);
  ringGeo.rotateY(Math.PI/2);
  const rings=new T.InstancedMesh(ringGeo,M.brass,folds+1);
  rings.castShadow=false;rail.add(rings);
  const matrix=new T.Matrix4();
  function setFraction(value){
    cloth.morphTargetInfluences[0]=value;
    const width=T.MathUtils.lerp(stack,travel,value);
    for(let i=0;i<=folds;i++){
      rings.setMatrixAt(i,matrix.makeTranslation(sign*i/folds*width,top+.04*scale,0));
    }
    rings.instanceMatrix.needsUpdate=true;
  }
  // The bounds include the entire rail travel, including the two stacked end states.
  setFraction(1);rings.computeBoundingSphere();setFraction(0);
  return {cloth,rings,setFraction};
}
function panel(p,cx,cy,z,w,h,mat=M.trim) {
  for(const side of [-1,1]){
    box(p,cx+side*w/2,cy,z,.038,h+.038,.035,mat,.009);
    box(p,cx,cy+side*h/2,z,w,.039,.035,mat,.009);
  }
}
function baseboard(p,x,z,length,angle=0) {
  const s=group(p,x,0,z);s.rotation.y=angle;
  box(s,0,.085,0,length,.17,.087,M.trim);
  box(s,0,.178,0,length,.038,.11,M.trim,.009);
}
function lamp(p,x,y,z,bulb=lampGlass) {
  cylinder(p,x,y+.025,z,.18,.21,.05,M.brass);
  cylinder(p,x,y+.265,z,.027,.043,.46,M.brass);
  ball(p,x,y+.37,z,.075,.12,.075,M.brass);
  cylinder(p,x,y+.63,z,.17,.25,.31,M.linen,40);
  cylinder(p,x,y+.48,z,.234,.234,.012,bulb,40);
}
function chandelier(p,x,z,drop=.67,rad=.70,bulb=lampGlass){
  cylinder(p,x,H-.03,z,.14,.16,.07,M.brass);
  rod(p,V(x,H,z),V(x,H-drop,z),.017,M.brass);
  const y=H-drop;
  ball(p,x,y-.06,z,.11,.14,.11,M.brass);
  for(let i=0;i<6;i++){
    const dx=Math.cos(i*Math.PI/3)*rad,dz=Math.sin(i*Math.PI/3)*rad;
    tube(p,[V(x,y-.04,z),V(x+dx*.46,y-.19,z+dz*.46),V(x+dx*.91,y-.11,z+dz*.91),V(x+dx,y+.02,z+dz)],.022,M.brass);
    cylinder(p,x+dx,y+.055,z+dz,.063,.059,.07,M.brass);
    ball(p,x+dx,y+.15,z+dz,.087,.108,.087,bulb);
  }
}

function hipRoof(p){
  const corners=[V(-11.55,4.1,-6.62),V(11.55,4.1,-6.62),V(11.55,4.1,6.62),V(-11.55,4.1,6.62)];
  const left=V(-5.65,7,0),right=V(5.65,7,0);
  const faces=[[corners[0],left,right,corners[1]],[corners[1],right,corners[2]],
    [corners[2],right,left,corners[3]],[corners[3],left,corners[0]]];
  for(const [i,face] of faces.entries()){
    for(const f of i===2?roofAroundSkylight():[face]){
      const g=new T.BufferGeometry(),coordinates=[],uv=[];
      for(const v of f){
        coordinates.push(v.x,v.y,v.z);
        uv.push((i%2?v.z:v.x)/2.1,(v.y-4.1)/.91);
      }
      g.setAttribute('position',new T.Float32BufferAttribute(coordinates,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));
      g.setIndex(f.length===3?[0,1,2]:[0,1,2,0,2,3]);g.computeVertexNormals();
      mesh(p,g,M.roof);
    }
  }
  rod(p,left,right,.085,M.clay);
  corners.forEach((v,i)=>rod(p,v,i===0||i===3?left:right,.075,M.clay));
}

// A quilt falls over both sides of the mattress. The broad folds continue down the hanging edges.
function bedcover(p,x,y,z,width,depth,drop,mat){
  const geo=new T.PlaneGeometry(width+drop*2,depth,72,44);geo.rotateX(-Math.PI/2);
  const pts=geo.attributes.position;
  for(let i=0;i<pts.count;i++){
    const u=pts.getX(i),v=pts.getZ(i),edge=Math.max(0,Math.abs(u)-width*.5);
    const fold=.015*Math.sin(10*u+2.4*v+.8*Math.cos(v*4))+.009*Math.sin(7*v-2.2*u);
    const lip=.018*Math.cos(9*u+v)*Math.pow(Math.abs(2*v/depth),4);
    pts.setXYZ(i,Math.sign(u)*(Math.min(Math.abs(u),width*.5)+.065*Math.sin(Math.min(edge/.115,1)*1.57)),
      fold+lip-edge*.89,v+.015*Math.sin(u*5));
  }
  geo.computeVertexNormals();mesh(p,geo,mat,x,y,z);
}

function framedPrint(p,id,x,y,z,w,h,angle){
  const frame=group(p,x,y,z);frame.rotation.y=angle;
  box(frame,0,0,0,w+.14,h+.14,.063,M.walnut,.016);
  box(frame,0,0,.024,w+.089,h+.089,.034,M.brass,.009);
  box(frame,0,0,.041,w+.044,h+.044,.017,M.trim);
  const map=new T.TextureLoader().load(asset('art-'+id+'.webp'));map.colorSpace=T.SRGBColorSpace;map.anisotropy=4;
  mesh(frame,new T.PlaneGeometry(w,h),new T.MeshStandardMaterial({map,roughness:.94}),0,0,.054);
}

function wovenRug(p,x,z,w,d){
  const c=document.createElement('canvas');c.width=960;c.height=832;
  const g=c.getContext('2d'),palette=['#574b3c','#d2b68a','#9d7961','#667066','#b9aa8b'];
  g.fillStyle='#bbaa91';g.fillRect(0,0,c.width,c.height);
  function diamond(x,y,a,b,ink){
    g.fillStyle=ink;g.beginPath();g.moveTo(x-a,y);g.lineTo(x,y-b);g.lineTo(x+a,y);g.lineTo(x,y+b);g.closePath();g.fill();
  }
  function flower(x,y,r){
    g.fillStyle=palette[2];
    for(let i=0;i<8;i++){
      const a=i*Math.PI/4;g.beginPath();g.ellipse(x+Math.cos(a)*r*.54,y+Math.sin(a)*r*.54,r*.48,r*.20,a,0,Math.PI*2);g.fill();
    }
    diamond(x,y,r*.27,r*.27,palette[0]);
  }
  for(let row=0;row<12;row++)for(let col=0;col<14;col++){
    const xx=col*72+(row%2)*36,yy=row*72;
    diamond(xx,yy,29,31,'#aa9379');diamond(xx,yy,25,27,'#bca88c');
    flower(xx,yy,15);
  }
  for(const [inset,line,color] of [[5,10,palette[0]],[16,8,palette[1]],[36,30,palette[3]],[55,6,palette[1]],[63,6,palette[2]]]){
    g.strokeStyle=color;g.lineWidth=line;g.strokeRect(inset,inset,c.width-2*inset,c.height-2*inset);
  }
  for(let xx=40;xx<c.width-30;xx+=26)for(const yy of [36,c.height-36])diamond(xx,yy,9,5,palette[1]);
  for(let yy=48;yy<c.height-38;yy+=26)for(const xx of [36,c.width-36])diamond(xx,yy,5,9,palette[1]);
  for(const [a,b,ink] of [[167,225,palette[3]],[155,212,palette[1]],[143,199,palette[2]],[132,187,'#9b8069'],[96,141,palette[4]],[86,131,palette[1]]])diamond(480,416,a,b,ink);
  flower(480,416,63);
  const pixels=g.getImageData(0,0,c.width,c.height),rgb=pixels.data;
  let seed=7123;
  for(let i=0;i<rgb.length;i+=4){
    seed=(Math.imul(1664525,seed)+1013904223)>>>0;
    const thread=(seed/4294967296-.5)*16+((i/4)%2?1.8:-1.8);
    for(let k=0;k<3;k++)rgb[i+k]+=thread;
  }
  g.putImageData(pixels,0,0);
  const map=new T.CanvasTexture(c);map.colorSpace=T.SRGBColorSpace;map.anisotropy=8;
  const mat=new T.MeshStandardMaterial({map,roughness:.99});
  box(p,x,.017,z,w,.024,d,M.velvet);
  const carpet=mesh(p,new T.PlaneGeometry(w,d),mat,x,.031,z);carpet.rotation.x=-Math.PI/2;
  return carpet;
}

// Static furniture footprints and walls reduce diffuse sky light where it cannot reach the floor.
// A shared world-space occlusion map keeps the contact shading continuous across rug and parquet.
function floorOcclusion(floor,carpet,blockers){
  const width=256,height=144,data=new Uint8Array(width*height);
  data.fill(255);
  for(const b of blockers){
    if(Math.abs(b.z)>6.3)continue;
    const wall=b.name==='墙',window=b.name==='窗',reach=wall?1.42:window?.45:.56;
    const darkness=wall?.50:window?.23:.60;
    const cx=(b.x/22.2+.5)*width,cz=(b.z/12.42+.5)*height;
    const maxX=(b.w*.5+reach)*width/22.2,maxZ=(b.d*.5+reach)*height/12.42;
    for(let j=Math.max(0,Math.floor(cz-maxZ));j<Math.min(height,cz+maxZ);j++){
      for(let i=Math.max(0,Math.floor(cx-maxX));i<Math.min(width,cx+maxX);i++){
        const dx=Math.max(0,Math.abs(i+.5-cx)*22.2/width-b.w*.5);
        const dz=Math.max(0,Math.abs(j+.5-cz)*12.42/height-b.d*.5);
        const shade=1-T.MathUtils.smoothstep(Math.hypot(dx,dz),0,reach);
        const n=j*width+i;data[n]=Math.max(39,data[n]*(1-darkness*shade));
      }
    }
  }
  const ao=new T.DataTexture(data,width,height,T.RedFormat);
  ao.channel=1;ao.minFilter=ao.magFilter=T.LinearFilter;ao.needsUpdate=true;
  for(const mesh of [floor,carpet]){
    mesh.updateWorldMatrix(true,false);
    const p=mesh.geometry.attributes.position,uv=new Float32Array(p.count*2),point=V();
    for(let i=0;i<p.count;i++){
      point.fromBufferAttribute(p,i).applyMatrix4(mesh.matrixWorld);
      uv[2*i]=point.x/22.2+.5;uv[2*i+1]=point.z/12.42+.5;
    }
    mesh.geometry.setAttribute('uv1',new T.BufferAttribute(uv,2));
    mesh.material.aoMap=ao;
  }
}

export function buildHouse(scene) {
  const fixed=group(scene),loose=group(scene),exterior=group(scene),shell=group(exterior),loaded=[];
  const blockers=[],doors=[],windows=[],devices=[],privacy=smartGlass();
  const block=(x,z,w,d,name='家具')=>blockers.push({x,z,w,d,name});
  const model=(id,x,z,width,rot=0,y=0)=>loaded.push(furnish(loose,id,x,z,width,rot,y));
  function wall(x,z,w,d,parent=shell){box(parent,x,H/2,z,w,H,d,M.plaster);block(x,z,w,d,'墙');}
  const floorDepth=12.42;
  const floor=box(fixed,0,-.105,0,22.2,.21,floorDepth,M.floor);
  ceilingLayer(shell,H+.09,22.5,.18,12.64,M.trim);
  ceilingLayer(shell,H+.28,22.9,.2,12.95,M.oak);
  hipRoof(shell);
  wall(-11,0,.33,12.4);wall(11,0,.33,12.4);
  wall(-10.495,6.1,1.21,.32);wall(.55,6.1,17.28,.32);wall(10.795,6.1,.61,.32);
  const life=household(scene,fixed,shell,block,model,floorDepth/2),pet=adoptCat(scene,fixed,block,life.bathroom),curtains=[];
  const skylight=bedroomSkylight(exterior,shell,fixed,H);life.actions.push(skylight.action);
  wall(3.78,-2.45,.23,7.29,fixed);wall(3.78,4.52,.23,3.17,fixed);
  box(fixed,3.78,3.26,2.06,.23,1.12,1.77,M.plaster);
  for(const z of [1.2,2.92])box(fixed,3.78,1.38,z,.35,2.76,.12,M.trim);
  box(fixed,3.78,2.76,2.06,.37,.13,1.88,M.trim);
  baseboard(fixed,-10.79,0,12.1,Math.PI/2);baseboard(fixed,10.79,0,12.1,Math.PI/2);
  baseboard(fixed,.53,5.89,17.19);baseboard(fixed,10.77,5.89,.28);baseboard(fixed,-10.39,5.89,1.05);baseboard(fixed,3.62,-2.45,7.29,Math.PI/2);
  const bays=[[-10.69,-7.29],[-6.92,-3.52],[-3.15,.22],[.66,2.26],[4.08,7.22],[7.58,10.69]];
  let prev=-11;
  for(const [a,b] of bays){
    if(a>prev)wall((a+prev)/2,Z,a-prev,.34);
    const door=a===.66,operable=a===-3.15||a===4.08;
    arch(shell,(a+b)/2,b-a,door?.01:.42,door?privacy.film:null,operable);
    if(operable){
      const sash=casement(exterior,fixed,a+.077,Z+.012,(b-a)/2-.112,.478,archSpring-.047,a<0?'客厅':'卧室');
      windows.push(sash);life.actions.push(sash.action);
    }
    if(!door)block((a+b)/2,Z,b-a,.23,'窗');
    prev=b;
  }
  wall((11+prev)/2,Z,11-prev,.34);
  for(const [a,b] of [[-10.8,.35],[4,10.79]]){
    rod(fixed,V(a,3.48,Z+.28),V(b,3.48,Z+.28),.024,M.brass);
    const pair={closed:false,fraction:0,panels:[],room:a<0?'客厅灯':'卧室灯'};curtains.push(pair);
    for(const [x,sign] of [[a,1],[b,-1]]){
      pair.panels.push(curtain(scene,x,sign,(b-a)/2));
      rod(fixed,V(x,3.45,Z+.41),V(x,1.14,Z+.41),.011,M.brass);
      ball(fixed,x,1.10,Z+.41,.030,.07,.03,M.brass);
      life.actions.push({label:()=>pair.closed?'拉开窗帘':'合上窗帘',point:V(x,1.58,Z+.45),size:[.45,1.65,.30],range:2.75,directOnly:true,run(){pair.closed=!pair.closed;}});
    }
  }
  for(const z of [-5.91,5.91]){
    box(fixed,0,H-.11,z,21.9,.18,.22,M.trim);
    box(fixed,0,H-.20,z,21.91,.055,.27,M.trim);
  }
  for(const x of [-10.81,3.77,10.81])box(fixed,x,H-.12,0,.20,.22,12.1,M.trim);
  for(const x of [-7,-2.8,1.44,7.65])ceilingBeam(fixed,x,H-.035);

  // Recessed joinery and moulded panels on the interior solid walls.
  const west=group(fixed,-10.816,0,0);west.rotation.y=Math.PI/2;
  box(west,0,.53,0,12,.97,.042,M.trim);
  box(west,0,1.015,.026,12,.064,.106,M.trim,.012);
  for(let i=0;i<8;i++)panel(west,-5.16+i*1.47,.52,.038,1.24,.68,M.cream);
  for(const x of [-6.4,-3.8]){panel(fixed,x,1.95,5.91,2.18,2.82);panel(fixed,x,.61,5.87,1.82,.51);}
  const chandeliers=group(scene);
  chandelier(chandeliers,-5.5,-1.25,.67,.70,life.livingBulb);chandelier(chandeliers,-6.25,3.65,.72,.47,life.livingBulb);
  chandelier(chandeliers,7.3,1.1,.44,.45,life.bedroomBulb);
  // Each chandelier approximates six bulbs with one emitter. Its own arms must not eclipse that central source.
  bake(chandeliers);for(const part of chandeliers.children)part.castShadow=false;

  // The glazed French door pivots about its jamb, including its collision leaf.
  const hinge=group(exterior,.66,0,Z+.015),dw=1.60;
  for(const x of [.047,dw-.047])box(hinge,x,1.24,0,.092,2.48,.092,M.walnut);
  for(const y of [.10,.82,2.44])box(hinge,dw/2,y,0,dw,y===.10?.19:.085,.087,M.walnut);
  box(hinge,dw/2,.43,0,dw-.13,.61,.067,M.green);
  mesh(hinge,new T.PlaneGeometry(dw-.13,1.56),privacy.film,dw/2,1.63,0);
  box(hinge,dw/2,1.61,0,.041,1.63,.062,M.walnut);
  box(hinge,dw/2,1.59,0,dw-.1,.039,.064,M.walnut);
  const handles=[];
  for(const side of [1,-1]){
    const handle=V(dw-.14,1.04,side*.205);
    const spindle=dw-.055;
    box(hinge,spindle,handle.y,side*.052,.082,.21,.024,M.bronze,.011);
    rod(hinge,V(spindle,handle.y,side*.056),V(spindle,handle.y,handle.z),.022,M.brass);
    box(hinge,handle.x,handle.y,handle.z,.208,.042,.045,M.brass,.012);
    handles.push(handle);
  }
  bake(hinge);
  const switchPoint=V(2.97,1.43,Z+.215);
  wallButton(fixed,switchPoint,0,'调光');
  life.actions.push({label:()=>privacy.privateMode?'门玻璃 · 切换透明':'门玻璃 · 切换雾化',point:switchPoint,
    size:[.25,.31,.08],range:2.75,directOnly:true,run:privacy.toggle});
  doors.push({pivot:hinge,width:dw,angle:0,target:0,handles,room:'客厅灯'});

  // Living room and its actual projection equipment.
  const carpet=wovenRug(fixed,-6.7,-1.62,5.70,4.92);
  framedPrint(fixed,437039,3.62,1.94,-2.13,2.06,1.52,-Math.PI/2);
  model('sofa_03',-4.57,-1.40,3.25,-Math.PI/2);
  block(-4.57,-1.4,1.00,3.22);contact(loose,-4.57,-1.4,1.8,3.65,.30,.045);
  model('modern_coffee_table_01',-6.72,-1.42,.76,0,.043);
  block(-6.72,-1.42,.76,1.52);contact(loose,-6.72,-1.42,1.3,1.95,.28,.045);
  for(const [i,cover] of [M.green,M.clay].entries()){
    const book=group(fixed,-6.74,.548+i*.045,-1.71);book.rotation.y=.11-i*.26;
    box(book,0,.016,0,.245,.029,.31,M.cream);box(book,0,.033,0,.256,.008,.32,cover);
  }
  cylinder(fixed,-6.69,.55,-1.17,.115,.1,.014,porcelain);
  cylinder(fixed,-6.69,.599,-1.17,.064,.046,.09,porcelain);
  cylinder(fixed,-6.69,.645,-1.17,.055,.055,.004,M.walnut);
  mesh(fixed,new T.TorusGeometry(.031,.009,8,16),porcelain,-6.619,.607,-1.17);
  model('potted_plant_02',-10.05,-5.23,.86);model('potted_plant_02',3.03,-4.99,.74);
  box(west,1.38,.36,.37,4.25,.51,.60,M.walnut,.032);
  for(const xx of [-.45,.8,2.03,3.22])box(west,xx,.13,.37,.11,.25,.39,M.bronze);
  for(let i=0;i<36;i++)box(west,-.58+i*.11,.36,.682,.028,.41,.028,M.oak);
  block(-10.42,-1.38,.78,4.25);
  function speaker(z){
    const a=group(fixed,-10.28,0,z);a.rotation.y=Math.PI/2;
    box(a,0,.61,0,.38,1.18,.40,M.walnut,.026);
    box(a,0,.62,.205,.33,1.10,.018,grille,.012);
    for(const [y,r] of [[.35,.112],[.72,.113],[.993,.042]]){
      const rim=mesh(a,new T.TorusGeometry(r,.012,9,32),M.bronze,0,y,.225);
      ball(a,0,y,.221,r*.90,r*.90,.024,M.black);ball(a,0,y,.245,r*.36,r*.36,.016,grille);
    }
    block(-10.28,z,.47,.45);return V(-10.0,.70,z);
  }
  const soundAt=speaker(-3.94);speaker(1.16);
  const projection={id:'projector',label:'客厅投影',url:'https://pgxcg.qzz.io/',center:V(-10.74,2.03,-1.38),yaw:Math.PI/2,width:3.68,height:2.07};
  devices.push(projection);
  box(west,1.38,3.14,.08,3.99,.114,.16,M.trim,.030);
  box(west,1.38,.96,.082,3.77,.044,.068,M.bronze);
  rod(fixed,V(-4.1,H,-1.38),V(-4.1,3.43,-1.38),.036,M.metal);
  box(fixed,-4.1,3.34,-1.38,.37,.15,.42,M.ivory,.032);
  const lens=cylinder(fixed,-4.31,3.34,-1.44,.045,.057,.068,M.ink);lens.rotation.z=Math.PI/2;
  lamp(fixed,-10.38,.632,.38,life.livingBulb);model('ceramic_vase_01',-10.44,-2.89,.25,0,.63);

  // Dining room and fitted European kitchen along the landward wall.
  box(fixed,-6.35,.79,3.83,2.72,.12,1.22,M.table,.065);
  for(const x of [-7.36,-5.34])for(const z of [3.46,4.20])box(fixed,x,.38,z,.11,.77,.11,M.walnut,.019);
  block(-6.35,3.83,2.76,1.25);
  for(const x of [-7.15,-5.55])for(const [z,a] of [[2.85,0],[4.83,Math.PI]]){
    model('dining_chair_02',x,z,.51,a);block(x,z,.51,.49);
  }
  model('ceramic_vase_01',-6.38,3.81,.28,0,.852);
  const kitchen=group(scene);
  for(let i=0;i<6;i++){
    const x=-1.72+i*.87;
    box(kitchen,x,.49,5.47,.85,.91,.96,M.green,.018);
    box(kitchen,x,.49,4.974,.75,.74,.033,M.green,.018);
    panel(kitchen,x,.48,4.949,.62,.56,M.green);
    box(kitchen,x,.73,4.92,.27,.033,.046,M.brass,.013);
    box(kitchen,x,.12,5.51,.81,.20,.85,M.ink);
  }
  // Four countertop pieces surround the recessed sink basin.
  box(kitchen,-.52,.998,5.46,3.44,.10,1.12,M.stone,.016);
  box(kitchen,2.65,.998,5.46,.98,.10,1.12,M.stone,.016);
  for(const zz of [5.038,5.891])box(kitchen,1.68,.998,zz,.97,.10,.27,M.stone,.015);
  box(kitchen,.45,1.54,5.88,5.4,1.02,.072,M.stone);
  block(.45,5.46,5.4,1.10);
  const steel=material(0xb5b7af,.32,.72);
  // The cabinet top sits below the basin; the bowl and drain remain visible from standing height.
  box(kitchen,1.68,.958,5.465,.97,.012,.59,steel,.009);
  for(const zz of [5.178,5.753])box(kitchen,1.68,1.006,zz,.98,.093,.023,steel,.008);
  for(const xx of [1.205,2.154])box(kitchen,xx,1.006,5.465,.023,.093,.59,steel,.008);
  cylinder(kitchen,1.68,.967,5.48,.043,.043,.004,M.ink);
  tube(kitchen,[V(1.99,1.06,5.77),V(1.99,1.44,5.77),V(1.98,1.51,5.57),V(1.98,1.40,5.49)],.025,M.brass);
  box(kitchen,-.95,1.06,5.40,1.03,.024,.67,M.ink,.027);
  for(const x of [-1.21,-.72])for(const z of [5.24,5.55]){
    const r=mesh(kitchen,new T.TorusGeometry(.113,.009,8,32),M.metal,x,1.082,z);r.rotation.x=Math.PI/2;
  }
  box(kitchen,-.95,.5,4.91,.76,.51,.043,M.ink,.026);
  box(kitchen,-.95,.72,4.87,.60,.035,.040,M.metal);
  box(kitchen,-.94,2.23,5.61,1.32,.15,.63,M.brass,.033);
  box(kitchen,-.94,2.94,5.80,.58,1.34,.28,M.trim);
  for(const y of [1.91,2.46]){
    box(kitchen,1.79,y,5.70,2.45,.061,.40,M.oak);
    for(let j=0;j<5;j++)cylinder(kitchen,.98+j*.26,y+.116,5.65,.076,.059,.17,porcelain);
    for(let j=0;j<4;j++)cylinder(kitchen,2.53,y+.042+j*.022,5.65,.18,.135,.018,porcelain,36);
  }
  for(const x of [.6,2.6]){
    rod(kitchen,V(x,H,5.02),V(x,2.71,5.02),.012,M.bronze);
    cylinder(kitchen,x,2.60,5.02,.06,.19,.23,M.green,36);
  }
  const bowl=mesh(kitchen,new T.LatheGeometry([new T.Vector2(.055,0),new T.Vector2(.13,.03),new T.Vector2(.21,.085),new T.Vector2(.205,.095),new T.Vector2(.12,.046),new T.Vector2(.045,.018)],36),porcelain,.35,1.055,5.29);
  for(let i=0;i<5;i++)ball(bowl,.095*Math.cos(i*2.2),.093+(i===4?.055:0),.085*Math.sin(i*2.2),.062,.049,.050,material(i%2?0xe4b449:0xa87f3a,.68));
  bake(kitchen);
  // Bedroom. The bed camera uses the same mattress and pillow coordinates as the mesh.
  const bedroom=group(scene);
  const bx=7.05,bz=4.32;
  framedPrint(bedroom,436535,bx,2.49,5.87,1.49,1.18,Math.PI);
  box(bedroom,bx,.24,bz,2.36,.41,2.71,M.walnut,.075);
  box(bedroom,bx,.52,bz,2.28,.33,2.67,M.ivory,.11);
  box(bedroom,bx,.82,bz+1.37,2.53,1.49,.16,M.green,.075);
  for(let j=0;j<9;j++)box(bedroom,bx-1.06+j*.265,.96,bz+1.25,.258,1.03,.12,M.velvet,.075);
  bedcover(bedroom,bx,.738,bz-.31,2.24,2.01,.28,cotton);
  const runner=material(0x6c8177,.91);runner.normalMap=M.brocade.normalMap;runner.normalScale.setScalar(.41);
  bedcover(bedroom,bx,.812,bz-.86,2.27,.58,.32,runner);
  for(const x of [bx-.56,bx+.56]){const pillow=box(bedroom,x,.77,bz+.86,1.01,.21,.59,cotton,.1);pillow.rotation.x=-.15;}
  block(bx,bz,2.42,2.79);contact(loose,bx,bz,3.25,3.4,.28);
  for(const x of [bx-1.63,bx+1.63]){
    box(bedroom,x,.39,bz+.89,.72,.67,.58,M.walnut,.028);
    box(bedroom,x,.75,bz+.89,.77,.064,.63,M.stone,.022);
    box(bedroom,x,.49,bz+.58,.25,.035,.035,M.brass);block(x,bz+.89,.76,.62);
  }
  lamp(bedroom,bx-1.63,.79,bz+.90,life.bedroomBulb);
  const teddy=group(bedroom,bx+1.63,.79,bz+.88),fur=material(0xab7952,.96),snout=material(0xf0d6b1,.96);
  ball(teddy,0,.17,0,.135,.16,.11,fur);ball(teddy,0,.38,-.015,.14,.14,.12,fur);
  for(const s of [-1,1]){
    ball(teddy,s*.113,.485,0,.064,.06,.043,fur);
    ball(teddy,s*.12,.205,-.02,.062,.1,.07,fur);
    ball(teddy,s*.085,.065,-.07,.078,.058,.08,fur);
    ball(teddy,s*.052,.405,-.122,.014,.015,.009,M.black);
  }
  ball(teddy,0,.346,-.12,.069,.049,.03,snout);
  ball(teddy,0,.37,-.147,.023,.016,.012,M.walnut);
  box(bedroom,9.98,.77,-2.60,1.31,.12,2.73,M.table,.04);
  for(const zz of [-3.72,-1.48])box(bedroom,10.02,.36,zz,1.03,.71,.10,M.walnut);
  block(9.98,-2.60,1.31,2.74);
  box(bedroom,10.20,.871,-2.65,.37,.047,.56,M.metal,.02);
  box(bedroom,10.32,1.05,-2.65,.063,.37,.11,M.metal);
  devices.push({id:'computer',label:'卧室电脑',url:'https://lightblock.galok.cn/desktop/?lang=zh',center:V(10.24,1.36,-2.65),yaw:-Math.PI/2,width:1.10,height:.619});
  box(bedroom,9.68,.852,-2.66,.22,.031,.63,M.ink,.018);
  for(let row=0;row<5;row++)for(let k=0;k<14;k++)box(bedroom,9.59+row*.035,.873,-2.92+k*.039,.027,.009,.030,M.metal);
  ball(bedroom,9.70,.869,-2.12,.071,.037,.048,M.ink);
  model('dining_chair_02',9.00,-2.64,.52,Math.PI/2);block(9,-2.64,.49,.54);
  model('potted_plant_02',4.58,-5.16,.76);
  const wardrobe=group(bedroom,4.12,0,-1.87);wardrobe.rotation.y=Math.PI/2;
  box(wardrobe,0,1.52,0,3.8,2.98,.48,M.trim);
  for(let i=0;i<4;i++){
    const x=-1.425+i*.95;panel(wardrobe,x,1.53,.25,.79,2.64,M.cream);
    box(wardrobe,x+.33,1.2,.27,.025,.19,.041,M.brass);
  }
  block(4.12,-1.87,.51,3.81);
  bake(bedroom);
  // Terrace, balustrade with a central opening and stone steps to the shore.
  box(shell,0,-.155,-8.18,22.55,.29,4.12,M.oak);
  for(const [lo,hi] of [[-11.2,.25],[2.75,11.2]]){
    box(shell,(lo+hi)/2,1.03,-10.17,hi-lo,.11,.15,M.oak,.022);
    box(shell,(lo+hi)/2,.13,-10.17,hi-lo,.13,.20,M.trim);
    const n=Math.ceil((hi-lo)/.39);
    for(let i=0;i<=n;i++){
      const x=lo+(hi-lo)*i/n;
      cylinder(shell,x,.57,-10.17,.056,.065,.80,M.trim,12);
      ball(shell,x,.54,-10.17,.078,.16,.078,M.trim);
    }
    block((lo+hi)/2,-10.17,hi-lo,.18,'栏杆');
  }
  for(const x of [-11.17,11.17]) {
    box(shell,x,1.03,-8.17,.14,.11,4.05,M.oak);block(x,-8.17,.17,4.05,'栏杆');
    for(let i=0;i<=10;i++)cylinder(shell,x,.55,-10.17+i*.40,.057,.06,.91,M.trim,12);
  }
  for(let i=0;i<7;i++)box(shell,1.5,-.095-i*.17,-10.45-i*.42,2.48,.19,.46,M.stone);
  floorOcclusion(floor,carpet,blockers);
  bake(fixed);bake(shell);
  return {exterior,blockers,doors,windows,privacy,skylight,devices,soundAt,life,pet,curtains,bed:{position:V(bx,.99,bz+.85),exit:V(bx-1.74,1.65,bz-.18)},
    modelReady:Promise.allSettled([...loaded,pet.ready])};
}
