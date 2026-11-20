import * as T from 'three';

// One instanced batch per plant part. Seeded clumps leave the stair landing and the path open.
export function plantGarden(scene,ground){
  let seed=31415;
  const random=()=>((seed=(Math.imul(1664525,seed)+1013904223)>>>0)/4294967296);
  const obj=new T.Object3D();
  const blade=new T.BufferGeometry();
  blade.setAttribute('position',new T.Float32BufferAttribute([0,0,0,-.38,.52,.09,.38,.52,.09,0,1,.55],3));
  blade.setIndex([0,1,2,1,3,2]);blade.computeVertexNormals();
  const petal=new T.IcosahedronGeometry(1,0),mat=new T.MeshStandardMaterial({side:T.DoubleSide,roughness:.9});
  function place(batch,x,y,z,sx,sy,sz,rx,ry,rz,color){
    obj.position.set(x,y,z);obj.scale.set(sx,sy,sz);obj.rotation.set(rx,ry,rz);obj.updateMatrix();
    batch.push([obj.matrix.clone(),new T.Color(color)]);
  }
  for(const [cx,cz,rx,rz] of [[-5.6,-11.35,5,.75],[6.8,-11.32,3.7,.65],[-12.15,3.3,1.0,8],[12.45,1.7,1.25,8],[-6.7,13.1,5.8,1.1]]){
    const leaves=[],flowers=[];
    for(let i=0;i<170;i++){
      const a=random()*6.283,r=Math.sqrt(random()),x=cx+Math.cos(a)*rx*r,z=cz+Math.sin(a)*rz*r;
      if(Math.abs(x-1.5)<1.5&&z<0)continue;
      const y=ground(x,z),h=.16+random()*.38;
      for(let j=0;j<6;j++){const yaw=random()*6.28;
        place(leaves,x,y,z,.05+random()*.05,h*(.5+random()*.55),.06,0,yaw,.25+random()*.65,['#63754c','#778853','#465c37'][j%3]);}
      if(i%4)continue;
      place(leaves,x,y,z,.018,h,.018,0,0,.02,'#657847');
      const color=['#b497b9','#dbcfb0','#bf7486','#ae9bc4'][i%7%4];
      for(let j=0;j<5;j++){const a=j*1.2566;place(flowers,x+.032*Math.cos(a),y+h,z+.032*Math.sin(a),.040,.016,.027,0,-a,.22,color);}
      place(flowers,x,y+h+.01,z,.021,.018,.021,0,0,0,'#d1a94e');
    }
    for(const [parts,geo] of [[leaves,blade],[flowers,petal]]){
      const batch=new T.InstancedMesh(geo,mat,parts.length);
      parts.forEach(([m,c],i)=>{batch.setMatrixAt(i,m);batch.setColorAt(i,c);});
      batch.computeBoundingSphere();batch.receiveShadow=true;scene.add(batch);
    }
  }
}
