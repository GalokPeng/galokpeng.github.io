// Run against the local Vite server. Camera inspection is injected only into this test browser.
import { chromium } from 'playwright-core';
import { mkdir,readFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';
import { strict as assert } from 'node:assert';
import {cinemaContext} from './cinema.mjs';
import {checkResidence,sampleFlash} from './house-coast.mjs';

const enhanced=process.argv.includes('--cinema');
const browser=enhanced?await cinemaContext('',true):await chromium.launch({channel:process.env.CHROME_CHANNEL||'chrome',headless:true});
const page=enhanced?await browser.newPage():await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1});
const base=process.env.VILLA_TEST_URL||'http://127.0.0.1:4176/';
const errors=[];
if(enhanced)await page.addInitScript(()=>{
  const make=AudioContext.prototype.createPanner;
  AudioContext.prototype.createPanner=function(){
    const emitter=make.call(this),meter=this.createAnalyser();meter.fftSize=512;emitter.connect(meter);
    (window.qaSpeakers??=[]).push({emitter,meter});return emitter;
  };
});
page.on('pageerror',e=>errors.push(e.message));
page.on('console',m=>{if(m.type()==='error'||m.text().includes('Shader Error'))console.log('browser:',m.text().slice(0,420));});
page.on('requestfailed',r=>console.log('request:',r.url().slice(0,95),r.failure()?.errorText));
await mkdir('.qa',{recursive:true});
await page.route('**/src/main.js*',async route=>{
  const res=await route.fetch(),source=await res.text();
  const marker='const tick=now=>{';
  assert.ok(source.includes(marker),'Vite development entry point');
  const hook=[
    'window.villaTest={',
    'state:()=>({mode, moving:!!transition, pos:player.toArray(), cam:camera.position.toArray(), angle:door.angle, sound:music.on, target:target?.name(), devices:devices.map(d=>d.powered), draw:renderer.info.render.calls, triangles:renderer.info.render.triangles}),',
    'pose:(x,z,at)=>{player.set(x,walkHeight(x,z)+eye,z);camera.position.copy(player);camera.lookAt(V(...at));yaw=camera.rotation.y;pitch=camera.rotation.x;aim.set(0,0);},',
    'screenPoint:(x,y,z)=>{camera.updateMatrixWorld();const v=V(x,y,z).project(camera);return [(v.x+1)*innerWidth/2,(1-v.y)*innerHeight/2];},',
    'blocked:(x,z)=>blocked(x,z)',
    ',lights:()=>house.life.circuits.map(c=>[c.on,c.sources[0].light.intensity]),curtain:()=>house.curtains[0].fraction,linked:()=>devices[0].linked,cat:()=>house.pet.position.toArray()',
    ',petState:()=>({activity:house.pet.activity,cleaning:house.pet.cleaning}),',
    'advancePetUntil:(key,value,limit)=>{for(let i=0;i<limit*30;i++){house.pet.update(elapsed+i/30,1/30);if(house.pet[key]===value)return true;}return false;},',
    'bones:()=>{const skins=[];scene.traverse(o=>{if(o.isSkinnedMesh)skins.push(o.skeleton.bones.length);});return skins;}',
    ',curtainHits:(x,y,outside=false)=>{const dir=outside?1:-1;const r=new T.Raycaster(V(x,y,outside?-7:-4.3),V(0,0,dir));return r.intersectObjects(house.curtains[0].panels.map(p=>p.cloth),false).length>0;}',
    ',doorCurtain:()=>door.curtain.fraction,wallSwitch:()=>door.switchPoint.toArray(),handle:(side=0)=>door.pivot.localToWorld(door.handles[side].clone()).toArray(),',
    'controlState:()=>[door.target,...house.curtains.map(pair=>pair.closed)],',
    'doorClothAt:(x,y)=>{const r=new T.Raycaster(V(door.pivot.position.x+x,y,door.pivot.position.z+.65),V(0,0,-1),0,1);return r.intersectObjects(door.curtain.panels.map(p=>p.cloth)).length>0;},',
    'boat:()=>({z:harbor.vessel.position.z,heading:harbor.heading}),',
    'floorHits:(x,z)=>new T.Raycaster(V(x,.19,z),V(0,-1,0),0,.20).intersectObjects(scene.children,true).filter(h=>Math.abs(h.point.y)<.00001).map(h=>h.object.material.map?.image?.src||""),',
    'facing:()=>camera.getWorldDirection(V()).toArray(),',
    'flashPixels:()=>('+sampleFlash.toString()+')(T,scene,renderer)',
    '};',
  ].join('\n');
  await route.fulfill({response:res,body:source.replace(marker,hook+'\n'+marker)});
});
const pose=(x,z,at)=>page.evaluate(([x,z,at])=>window.villaTest.pose(x,z,at),[x,z,at]);
const state=()=>page.evaluate(()=>window.villaTest.state());
const settle=()=>page.waitForFunction(()=>!window.villaTest.state().moving);
async function pressInteraction(){
  await page.waitForTimeout(170);
  await page.keyboard.press('KeyE');await settle();
}
async function clickWorld(x,y,z){
  const [sx,sy]=await page.evaluate(args=>window.villaTest.screenPoint(...args),[x,y,z]);
  await page.mouse.click(sx,sy);await settle();
}
async function testPetRooms(){
  await page.clock.setFixedTime(new Date('2026-11-21T07:43:00+08:00'));
  assert.ok((await page.evaluate(()=>villaTest.bones())).some(n=>n>=30),'Cat has an articulated skin');
  const advance=(key,value,limit)=>page.evaluate(args=>villaTest.advancePetUntil(...args),[key,value,limit]);
  await pose(1.94,-1.86,[3.18,.36,-1.69]);await pressInteraction();
  assert.ok(await page.evaluate(()=>Number(localStorage.getItem('villa.extraMeal'))>Date.now()-10000));
  assert.ok(await advance('activity','eat',110),'Cat follows the doorways to the feeder');
  await pose(2.24,-2.64,[2.96,.23,-1.69]);await page.waitForTimeout(1400);await page.screenshot({path:'.qa/cat.png'});
  await pose(2.28,-.2,[3.37,.22,-.37]);await pressInteraction();
  assert.match(await page.locator('#hint').innerText(),/供水/);
  await pose(9.84,5.12,[9.84,1.65,8.25]);
  await page.keyboard.down('KeyW');await page.waitForFunction(()=>villaTest.state().pos[2]>6.85);await page.keyboard.up('KeyW');
  assert.equal(await page.locator('#location').innerText(),'卫生间');
  await pose(9.81,7.38,[10.63,1.13,6.1]);await pressInteraction();
  await page.waitForFunction(()=>villaTest.blocked(9.84,6.22));
  await pose(9.77,6.86,[6.45,1.02,9.03]);await page.screenshot({path:'.qa/bathroom.png'});
  assert.ok(await advance('cleaning','occupied',420),'Cat enters its tray even with the pocket door closed');
  assert.ok(await advance('activity','sit',10));
  assert.equal((await page.evaluate(()=>villaTest.petState())).cleaning,'occupied');
  await pose(8.00,8.78,[8.05,.28,10.04]);await page.screenshot({path:'.qa/litter.png'});
  assert.ok(await advance('cleaning','waiting',20));
  assert.ok(await advance('cleaning','cleaning',10));
  assert.ok(await advance('cleaning','idle',8));
  await pose(9.81,7.38,[10.63,1.13,6.1]);await pressInteraction();
  await page.waitForFunction(()=>!villaTest.blocked(9.84,6.22));
  assert.deepEqual(errors,[]);
  console.log('PASS: rigged cat, wall-mounted stations, bathroom threshold and door, litter visit and automatic rake cycle');
}
try{
  await page.goto(base);
  await page.waitForFunction(()=>window.villaTest&&document.getElementById('loading').hidden,null,{timeout:90000});
  await page.waitForTimeout(850);
  console.log('entry',await state());
  await page.screenshot({path:'.qa/living-room.png'});
  assert.ok(Math.abs((await state()).cam[1]-1.65)<1e-6);
  if(process.argv.includes('--house-coast')){await checkResidence(page,pose,pressInteraction,settle,state);assert.deepEqual(errors,[]);}
  else if(process.argv.includes('--pets-only'))await testPetRooms();
  else if(process.argv.includes('--view-only'))process.exitCode=0;
  else{
    if(!process.argv.includes('--devices-only')){
    await pose(2.56,1.0,[3.58,1.26,1.02]);await pressInteraction();
    assert.deepEqual(await page.evaluate(()=>villaTest.lights()[0]),[false,0]);
    await pressInteraction();assert.ok((await page.evaluate(()=>villaTest.lights()[0]))[1]>0);
    await pose(-.08,-4.47,[.35,1.58,-5.65]);await pressInteraction();
    await page.waitForFunction(()=>villaTest.curtain()===1);
    async function checkDrapes(closed){
      const hits=await page.evaluate(()=>[.25,1.58,3.32].flatMap(y=>
        [-10.30,-5.26,-5.19,-.15].flatMap(x=>[false,true].map(side=>villaTest.curtainHits(x,y,side)))));
      assert.ok(hits.every(hit=>hit===closed),'Both faces of the cloth cover the window only when drawn');
    }
    await checkDrapes(true);
    await pose(-5.2,.68,[-5.2,1.68,-6.12]);await page.screenshot({path:'.qa/curtain-closed.png'});
    await pose(-.08,-4.47,[.35,1.58,-5.65]);await pressInteraction();
    await page.waitForFunction(()=>villaTest.curtain()===0);await checkDrapes(false);
    // Reverse mid-travel using the same physical cord.
    await pressInteraction();await page.waitForFunction(()=>villaTest.curtain()>.2&&villaTest.curtain()<.9);
    await page.keyboard.press('KeyE');await page.waitForFunction(()=>villaTest.curtain()===0);await checkDrapes(false);
    await pose(-5.2,.68,[-5.2,1.68,-6.12]);await page.screenshot({path:'.qa/curtain-open.png'});
    await pose(-7.13,2.04,[-7.15,.54,2.85]);await pressInteraction();assert.equal((await state()).mode,'seat');
    await page.click('#stand');await settle();
    await pose(-8.98,5.22,[-8.98,1.65,10.9]);
    await page.keyboard.down('KeyW');await page.waitForFunction(()=>villaTest.state().pos[2]>7.1);await page.keyboard.up('KeyW');
    assert.equal(await page.locator('#location').innerText(),'书房');
    await pose(-7.07,9.75,[-7.07,1.52,10.98]);await pressInteraction();
    assert.equal(await page.locator('#reader h2').innerText(),'窗边观星记');
    const first=await page.locator('#reader article').innerText();await page.click('[data-next]');
    assert.notEqual(await page.locator('#reader article').innerText(),first);await page.click('[data-close]');
    await pose(-7.5,7.35,[-6.9,1.45,11.55]);await page.screenshot({path:'.qa/study.png'});
    const slots=await page.evaluate(async()=>{
      const {mealAt}=await import('/src/cat.js');
      return ['06:59','07:00','11:59','12:00','17:59','18:00','23:59'].map(h=>new Date(mealAt(Date.parse('2026-11-20T'+h+':00+08:00'))+8*3600000).toISOString().slice(8,13));
    });
    assert.deepEqual(slots,['19T18','20T07','20T07','20T12','20T12','20T18','20T18']);
    await testPetRooms();
    await page.selectOption('#sky-time','night');await page.selectOption('#weather','clear');
    await pose(-2,-9.45,[-20,74,-65]);await page.waitForTimeout(300);await page.screenshot({path:'.qa/night-sky.png'});
    assert.equal(await page.locator('#sky-clock').innerText(),'23:00');
    await page.selectOption('#sky-time','day');await page.waitForTimeout(200);
    assert.equal(await page.locator('#sky-clock').innerText(),'12:00');
    await pose(6.17,-7.08,[7.2,.58,-8.15]);await pressInteraction();assert.equal((await state()).mode,'seat');
    const swingStart=(await state()).cam;await page.waitForTimeout(550);assert.notDeepEqual((await state()).cam,swingStart);
    await page.click('#stand');await settle();
    await pose(-4.31,-8.75,[-5.4,.55,-7.95]);await pressInteraction();assert.equal((await state()).mode,'seat');
    await page.click('#stand');await settle();
    await pose(2.34,-4.52,await page.evaluate(()=>villaTest.wallSwitch()));await pressInteraction();
    await page.waitForFunction(()=>villaTest.doorCurtain()===0);
    await pose(1.48,-5.3,await page.evaluate(()=>villaTest.handle()));
    assert.ok(await page.evaluate(()=>window.villaTest.blocked(1.48,-6.1)));
    await pressInteraction();await page.waitForFunction(()=>window.villaTest.state().angle>1.42);
    assert.ok(!await page.evaluate(()=>window.villaTest.blocked(1.48,-6.1)));
    await pose(1.48,-5.3,[1.48,1.65,-8]);
    await page.keyboard.down('KeyW');await page.waitForFunction(()=>window.villaTest.state().pos[2]<-7.0);await page.keyboard.up('KeyW');
    assert.equal(await page.locator('#location').innerText(),'露台');
    await page.keyboard.down('KeyW');await page.waitForFunction(()=>window.villaTest.state().pos[2]<-13.25);await page.keyboard.up('KeyW');
    assert.equal(await page.locator('#location').innerText(),'码头');
    await pose(1.50,-13.5,[1.50,1.54,-5.1]);
    await page.keyboard.down('KeyW');await page.waitForFunction(()=>window.villaTest.state().pos[2]>-5.32);await page.keyboard.up('KeyW');
    assert.equal(await page.locator('#location').innerText(),'客厅');
    await pose(1.60,-6.76,await page.evaluate(()=>villaTest.handle()));await pressInteraction();await page.waitForFunction(()=>window.villaTest.state().angle<.04);
    assert.ok(await page.evaluate(()=>window.villaTest.blocked(1.48,-6.10)));
    await pose(1.5,-9.5,[-28,4,-99]);await page.screenshot({path:'.qa/terrace.png'});
    await page.selectOption('#weather','storm');await page.waitForTimeout(2000);
    await page.screenshot({path:'.qa/rain.png'});await page.selectOption('#weather','clear');
    await pose(2.6,2.05,[2.6,1.65,-6]);
    await page.keyboard.down('KeyD');await page.waitForFunction(()=>window.villaTest.state().pos[0]>4.7);await page.keyboard.up('KeyD');
    assert.equal(await page.locator('#location').innerText(),'卧室');
    await pose(5.22,4.08,[7.05,.7,4.32]);await pressInteraction();
    assert.equal((await state()).mode,'bed');assert.ok((await state()).cam[1]<1.15);
    await page.screenshot({path:'.qa/bed-view.png'});await page.click('#stand');await settle();
    assert.equal((await state()).mode,'walk');
    await pose(-8.63,-3.2,[-10.27,.66,-3.94]);await pressInteraction();
    await page.waitForFunction(()=>window.villaTest.state().sound);
    await pressInteraction();
    }
    for(const s of [
      {x:-7.36,z:-1.38,at:[-10.74,2.03,-1.38],url:'pgxcg.qzz.io',shot:'projector'},
      {x:9,z:-3.55,at:[10.24,1.36,-2.65],url:'lightblock.galok.cn',shot:'computer'},
    ]){
      await pose(s.x,s.z,s.at);await clickWorld(...s.at);
      assert.equal((await state()).mode,'screen',s.shot+' click from reachable floor');
      const frame=page.frameLocator('iframe');
      await frame.locator('body').waitFor({timeout:35000});
      const child=page.frames().find(f=>f.url().includes(s.url));
      assert.ok(child,s.url+' loaded in the room');
      console.log('screen',s.shot,child.url(),await child.title());
      if(s.shot==='computer'){
        await child.locator('#content:not([aria-busy="true"])').waitFor({timeout:60000});
        await child.locator('#rail button').first().waitFor({timeout:20000});
      }
      await page.waitForTimeout(500);
      if(s.shot==='projector'){
        const search=child.locator('input[placeholder]').first();
        await search.click({timeout:10000});await page.keyboard.type('GitHub');
        assert.equal(await search.inputValue(),'GitHub');
        await page.click('#leave-screen');await settle();
        assert.equal((await state()).devices[0],true);
        await clickWorld(...s.at);
        assert.equal(await search.inputValue(),'GitHub');
        await search.click();await search.press('Control+a');await search.press('Backspace');
        if(enhanced){
          await page.waitForFunction(()=>villaTest.linked(),null,{timeout:10000});
          // A self-authored in-memory clip exercises the real cross-origin player without relying on film licences.
          const bytes=Array.from(await readFile(new URL('./fixtures/stereo.webm',import.meta.url)));
          await page.evaluate(()=>addEventListener('message',e=>{if(e.origin==='https://pgxcg.qzz.io'&&e.data.type==='audio')document.body.dataset.testAudio='linked';}));
          await child.evaluate(bytes=>{
            const v=document.createElement('video');v.src=URL.createObjectURL(new Blob([new Uint8Array(bytes)],{type:'video/webm'}));v.loop=true;v.id='qa-film';v.controls=true;
            const b=document.createElement('button');b.textContent='播放测试影片';b.style.cssText='position:fixed;top:4px;left:4px;z-index:100000';
            document.body.append(v,b);b.onclick=async()=>{try{await v.requestFullscreen();await v.play();}catch(e){v.dataset.failure=e.message;}};
          },bytes);
          await child.getByRole('button',{name:'播放测试影片'}).click();
          await child.waitForFunction(()=>document.fullscreenElement?.id==='qa-film'&&document.fullscreenElement.matches(':popover-open'));
          assert.equal(await page.evaluate(()=>document.fullscreenElement),null);
          assert.ok(!await child.locator('#qa-film').getAttribute('data-failure'));
          await page.waitForFunction(()=>document.body.dataset.testAudio==='linked');
          await child.waitForFunction(()=>window.qaSpeakers?.length===2&&window.qaSpeakers.every(({meter})=>{
            const samples=new Float32Array(meter.fftSize);meter.getFloatTimeDomainData(samples);return samples.some(s=>Math.abs(s)>.0001);
          }),null,{timeout:12000});
          const [left,right]=await child.evaluate(()=>qaSpeakers.map(({emitter})=>emitter.positionX.value));
          assert.ok(left<0&&right>0,'Independent left and right speaker positions');
          const bounds=await child.locator('#qa-film').boundingBox();assert.ok(bounds.width<1440&&bounds.width>850);
          await page.click('#screen-fill');await child.waitForFunction(()=>!document.fullscreenElement);
          await page.locator('#film-file').setInputFiles({name:'测试.webm',mimeType:'video/webm',buffer:Buffer.from(bytes)});
          await page.waitForFunction(()=>document.querySelector('.web-device video')?.currentTime>.02);
          await page.click('#screen-web');await page.frameLocator('iframe').locator('input[placeholder]').first().waitFor();
        }else assert.equal(await child.evaluate(()=>document.fullscreenEnabled),false);
      }else{
        const menu=child.locator('#rail button[data-act^="show:"][aria-pressed="false"]').first();
        const action=await menu.getAttribute('data-act');await menu.click();
        assert.equal(await child.locator('#rail button[data-act="'+action+'"]').getAttribute('aria-pressed'),'true');
      }
      await page.screenshot({path:'.qa/'+s.shot+'.png'});
      await page.click('#power-off');await settle();assert.equal(page.frames().length,1);
    }
    await pose(-1,2.5,[.8,1.3,5.5]);await page.screenshot({path:'.qa/kitchen.png'});
    await pose(4.8,1.22,[7.25,1.23,4.97]);await page.screenshot({path:'.qa/bedroom.png'});
    assert.deepEqual(errors,[]);
    if(!process.argv.includes('--devices-only'))console.log('PASS: sky, switches, curtains, study, seating, feeding schedule, doors and walking');
    console.log('PASS: both web devices'+(enhanced?', confined fullscreen and nonzero audio at both spatial emitters':''));
  }
}finally{await browser.close();}
