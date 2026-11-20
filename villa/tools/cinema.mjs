import {chromium} from 'playwright-core';
import {fileURLToPath} from 'node:url';
import {spawn} from 'node:child_process';
import {mkdir} from 'node:fs/promises';
import {join} from 'node:path';
import {tmpdir} from 'node:os';

export const extension=fileURLToPath(new URL('../projector-link/',import.meta.url)).replace(/[\\/]$/,'');
export function cinemaContext(profile,headless=false){
  return chromium.launchPersistentContext(profile,{channel:'chromium',headless,
    viewport:headless?{width:1440,height:900}:null,
    args:['--disable-extensions-except='+extension,'--load-extension='+extension]});
}
if(process.argv.includes('--open')){
  const url='http://127.0.0.1:4176/',root=fileURLToPath(new URL('../',import.meta.url));
  async function present(){try{return (await (await fetch(url,{signal:AbortSignal.timeout(1200)})).text()).includes('<title>Galok的世界</title>');}catch{return false;}}
  let server;
  if(!await present()){
    server=spawn(process.execPath,['node_modules/vite/bin/vite.js','--host','127.0.0.1','--port','4176','--strictPort'],{cwd:root,windowsHide:true,stdio:'inherit'});
    for(let i=0;i<30&&!await present();i++)await new Promise(r=>setTimeout(r,250));
    if(!await present()){server.kill();throw Error('本地预览未能启动，请检查 4176 端口。');}
  }
  try{
    const profile=join(process.env.LOCALAPPDATA || tmpdir(),'GalokVilla','cinema-browser');await mkdir(profile,{recursive:true});
    const context=await cinemaContext(profile);
    const page=context.pages()[0]||await context.newPage();await page.goto(url);await page.bringToFront();
    console.log('已打开海景房投影预览窗口',page.url());
    await new Promise(resolve=>context.on('close',resolve));
  }finally{server?.kill();}
}
