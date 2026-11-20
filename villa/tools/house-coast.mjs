import assert from 'node:assert/strict';

// Runs only in the development test browser. Read actual GPU pixels on two identical
// diffuse cards behind the window and the adjacent solid wall, in the furnished scene.
export function sampleFlash(T,scene,renderer){
  const light=scene.getObjectByName('Lightning'),previous=renderer.getRenderTarget();
  const oldPos=light.position.clone(),oldPower=light.intensity,rt=new T.WebGLRenderTarget(8,8);
  const card=new T.Mesh(new T.PlaneGeometry(.18,.18),new T.MeshStandardMaterial({color:0x888888}));
  card.rotation.y=Math.PI;card.receiveShadow=true;scene.add(card);
  const camera=new T.OrthographicCamera(-.05,.05,.05,-.05,.02,.45);
  try{
    light.position.copy(light.target.position).add(new T.Vector3(0,8,-36));
    light.shadow.needsUpdate=true;renderer.shadowMap.needsUpdate=true;
    const pixel=new Uint8Array(4);
    function sample(x,y,power){
      light.intensity=power;card.position.set(x,y,-4.9);
      camera.position.copy(card.position);camera.position.z-=.26;camera.lookAt(card.position);
      renderer.setRenderTarget(rt);renderer.render(scene,camera);
      renderer.readRenderTargetPixels(rt,4,4,1,1,pixel);return pixel[1];
    }
    return [[-1.02,1.78],[2.81,1.78],[1.18,1.78],[1.18,.98]].map(([x,y])=>sample(x,y,4.8)-sample(x,y,0));
  }finally{
    scene.remove(card);card.geometry.dispose();card.material.dispose();renderer.setRenderTarget(previous);rt.dispose();
    light.position.copy(oldPos);light.intensity=oldPower;light.shadow.needsUpdate=true;renderer.shadowMap.needsUpdate=true;
  }
}
export async function checkResidence(page,pose,press,settle,state){
  const qa=(fn,...args)=>page.evaluate(fn,...args);
  const wait=fn=>page.waitForFunction(fn,null,{timeout:45000});
  const shot=name=>page.screenshot({path:'.qa/'+name+'.png'});
  await page.selectOption('#sky-time','day');await page.selectOption('#weather','clear');
  assert.equal(await page.title(),'Galok的世界');
  assert.equal(await page.locator('.place strong').innerText(),'Galok的世界');
  for(const x of [-9.61,-9.03,-8.35])for(const z of [6.01,6.08,6.20,6.2099,6.2101,6.31]){
    const hits=await qa(([x,z])=>villaTest.floorHits(x,z),[x,z]);
    assert.equal(hits.length,1,'One floor surface at '+[x,z]);
    assert.ok(hits[0].includes(z<6.21?'herringbone_parquet':'wood_table_001'));
  }
  await pose(-9.03,4.78,[-9.03,0,6.21]);await shot('study-threshold');
  assert.equal(await qa(()=>villaTest.blocked(-8.30,.39)),false);
  assert.equal(await qa(()=>villaTest.blocked(-1.18,-1.76)),true);
  const delta=await qa(()=>villaTest.flashPixels());
  console.log('Flash pixel change [window, masonry, upper and lower door glass]',delta);
  assert.ok(delta[0]>24&&Math.abs(delta[1])<5&&delta.slice(2).every(d=>d>24));
  for(const [x,z,at,name] of [
    [-5.75,-1.4,[-4.6,.55,-1.4],'客厅沙发'],[-8.35,8.50,[-9.52,.51,8.55],'书房阅读椅'],
    [-6.7,9.15,[-5.59,.54,9.16],'书桌椅'],[.12,-.30,[-1.18,.54,-1.76],'观海单人椅']]){
    await pose(x,z,at);await press();assert.equal((await state()).mode,'seat');
    assert.equal(await page.locator('#location').innerText(),name);
    if(name==='观海单人椅'){
      assert.ok((await qa(()=>villaTest.facing()))[2]<-.99);
      await shot('sea-chair-view');
    }
    await page.click('#stand');await settle();assert.equal((await state()).mode,'walk');
  }
  const clickCenter=()=>page.locator('#view canvas').click({position:{x:page.viewportSize().width/2,y:page.viewportSize().height/2}});
  await pose(2.34,-4.52,[2.97,1.43,-5.885]);await wait(()=>villaTest.state().target?.includes('切换雾化'));await press();
  await wait(()=>villaTest.glass().amount===1);assert.equal((await state()).angle,0);
  await pose(1.47,-2.62,[1.47,1.69,-6.10]);await shot('privacy-on');
  await pose(2.05,-7.63,await qa(()=>villaTest.handle(1)));await wait(()=>villaTest.state().target==='开露台门');
  await clickCenter();await wait(()=>villaTest.state().angle===Math.PI*.49);assert.ok((await qa(()=>villaTest.glass())).privacy);
  await pose(2.34,-4.52,[2.97,1.43,-5.885]);await press();await wait(()=>villaTest.glass().amount===0);
  assert.equal((await state()).angle,Math.PI*.49);
  await pose(-.55,-7.68,await qa(()=>villaTest.handle(1)));await wait(()=>villaTest.state().target==='关露台门');await press();
  await wait(()=>villaTest.state().angle===0);
  await pose(1.47,-2.62,[1.47,1.69,-6.10]);await shot('privacy-clear');
  for(const [i,name] of ['客厅','卧室'].entries()){
    const [, ,point]=(await qa(()=>villaTest.windowState()))[i];
    await pose(point[0]+.34,-4.36,point);await page.waitForFunction(name=>villaTest.state().target==='打开'+name+'窗',name);
    assert.equal(await qa(i=>villaTest.windowPaneAt(i),i),true);
    await press();await page.waitForFunction(i=>villaTest.windowState()[i][0]>1.14,i);
    assert.equal(await qa(i=>villaTest.windowPaneAt(i),i),false);
    assert.equal((await qa(()=>villaTest.windowState()))[1-i][0],0);
    await pose(point[0]+.45,-3.30,[point[0]-.35,1.6,-6.25]);await shot(i?'bedroom-window':'living-window');
    await pose(point[0]+.34,-4.36,point);await press();await page.waitForFunction(i=>villaTest.windowState()[i][0]===0,i);
    assert.equal(await qa(i=>villaTest.windowPaneAt(i),i),true);
  }
  const roof=await qa(()=>villaTest.skylight());
  const samples=[[6.45,3.38],[7.05,4.08],[7.65,4.67]];
  for(const p of samples)assert.deepEqual(await qa(p=>villaTest.roofAt(...p),p),{glass:true,solid:true});
  await pose(8.99,4.40,roof.point);await wait(()=>villaTest.state().target==='拉开天窗白色遮板');
  await clickCenter();await wait(()=>villaTest.skylight().fraction===1);
  for(const p of samples)assert.deepEqual(await qa(p=>villaTest.roofAt(...p),p),{glass:true,solid:false});
  assert.deepEqual((await qa(()=>villaTest.skylight())).pane,roof.pane);
  await page.selectOption('#sky-time','night');
  await pose(5.22,4.08,[7.05,.7,4.32]);await press();assert.equal((await state()).mode,'bed');await shot('skylight-from-bed');
  await page.click('#stand');await settle();await page.selectOption('#sky-time','day');
  await pose(8.99,4.40,roof.point);await press();await wait(()=>villaTest.skylight().fraction===0);
  for(const p of samples)assert.deepEqual(await qa(p=>villaTest.roofAt(...p),p),{glass:true,solid:true});
  await pose(1.72,-4.57,await qa(()=>villaTest.handle()));await press();await wait(()=>villaTest.state().angle>1.52);
  // Walk continuously from inside, across the open threshold, down the stairs and onto the pier.
  await pose(1.50,-5.11,[1.50,1.65,-22]);await page.keyboard.down('ShiftLeft');await page.keyboard.down('KeyW');
  await wait(()=>villaTest.state().pos[2]<-21.6);await page.keyboard.up('KeyW');await page.keyboard.up('ShiftLeft');
  const dock=(await state()).pos;assert.equal(await page.locator('#location').innerText(),'码头');
  await pose(dock[0],dock[2],[3.72,-2.03,-22.12]);await shot('launch-berth');await press();
  assert.equal((await state()).mode,'boat');
  await page.keyboard.down('KeyW');await wait(()=>villaTest.boat().z< -29);await page.keyboard.up('KeyW');
  await page.keyboard.down('KeyE');await page.keyboard.up('KeyE');assert.equal((await state()).mode,'boat');
  await page.keyboard.down('KeyD');await page.keyboard.down('KeyW');await wait(()=>villaTest.boat().heading<-.30);
  await page.keyboard.up('KeyD');await page.keyboard.down('KeyA');await wait(()=>villaTest.boat().heading>=-.015);
  await page.keyboard.up('KeyA');await page.keyboard.up('KeyW');
  await shot('launch-helm');
  await page.keyboard.down('KeyS');await wait(()=>villaTest.boat().z> -23.0);await page.keyboard.up('KeyS');
  await wait(()=>!document.getElementById('prompt').hidden);await press();
  assert.equal((await state()).mode,'walk');await wait(()=>document.getElementById('location').textContent==='码头');
  await page.clock.setFixedTime(new Date('2026-11-21T02:23:00+08:00'));
  assert.ok(await qa(()=>villaTest.advancePetUntil('activity','nap',180)));
  const resting=await qa(()=>villaTest.cat());
  await page.clock.setFixedTime(new Date('2026-11-21T02:31:00+08:00'));
  assert.equal(await qa(()=>villaTest.advancePetUntil('activity','walk',30)),false);
  assert.deepEqual(await qa(()=>villaTest.cat()),resting);
  await pose(1.94,-1.86,[3.18,.36,-1.69]);await press();
  assert.ok(await qa(()=>villaTest.advancePetUntil('activity','eat',150)));
  console.log('PASS: privacy glass, two operable casements, fixed skylight glazing and sliding ceiling panel, seating, pets and boat');
}
