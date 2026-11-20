// Each article supplies its spine title and the pages shown in the reader.
export const books=[
  {title:'岛上潮声',color:'#506d68',pages:[
    '清晨，推开露台门，先听见的是水。近处的波峰在礁石旁碎开，远处的海面却只剩细细一条亮边。坐在木椅上看久了，才能分辨那条亮边也在移动。',
    '傍晚的潮声比白天清楚。关上客厅的灯，玻璃里的倒影慢慢淡去，窗框把海湾分成了几幅不同的画。']},
  {title:'窗边观星记',color:'#394b65',pages:[
    '初到岛上，我以为每天同一时间抬头，看到的星空也会一样。过了一季才发现，旧日记里画在窗框左侧的亮星，已经悄悄挪了位置。',
    '晴夜适合把灯调暗，走到露台尽头。等眼睛适应以后，银河才从星点之间浮现出来。云经过的时候，星星一颗一颗消失，又重新亮起。']},
  {title:'海岸花园手记',color:'#815b48',pages:[
    '海风带着盐雾。园里的花沿墙而生，草叶贴近地面，在风停的间隙重新挺起。午后，猫常隔着窗看那些摇晃的花头。',
    '晚饭前再绕花园走一圈。秋千的绳索轻响，远处的山先暗下去。回头看，书房的灯已经把一小块草地照亮。']}
];

export function openBook(index,onClose){
  const dialog=document.getElementById('reader'),catalog=dialog.querySelector('select');let book=books[index],page=0;
  catalog.replaceChildren(...books.map((b,i)=>new Option(b.title,String(i))));
  catalog.value=String(index);catalog.onchange=()=>{book=books[Number(catalog.value)];page=0;show();};
  const prev=dialog.querySelector('[data-prev]'),next=dialog.querySelector('[data-next]');
  function show(){
    dialog.querySelector('h2').textContent=book.title;
    dialog.querySelector('article').textContent=book.pages[page];
    dialog.querySelector('output').textContent=(page+1)+' / '+book.pages.length;
    prev.disabled=page===0;next.disabled=page===book.pages.length-1;
  }
  prev.onclick=()=>{page--;show();};next.onclick=()=>{page++;show();};
  dialog.querySelector('[data-close]').onclick=()=>dialog.close();
  dialog.onclose=onClose;show();dialog.showModal();
}
