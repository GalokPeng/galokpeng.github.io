// Shared by the villa and the optional ShareAll player integration. Coordinates are relative to the listener.
(()=>{
  if(location.hostname==='pgxcg.qzz.io'&&!['https://galok.cn','http://127.0.0.1:4176','http://localhost:4176'].includes(location.ancestorOrigins?.[0]))return;
  function roomAudio(){
    const ctx=new AudioContext(),input=ctx.createGain(),split=ctx.createChannelSplitter(2);
    input.channelCountMode='explicit';input.channelCount=2;input.channelInterpretation='speakers';
    input.connect(split);
    const room=ctx.createConvolver(),wet=ctx.createGain(),buffer=ctx.createBuffer(2,Math.ceil(ctx.sampleRate*.43),ctx.sampleRate);
    for(let ch=0;ch<2;ch++){const data=buffer.getChannelData(ch);
      for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*Math.pow(1-i/data.length,3);}
    room.buffer=buffer;wet.gain.value=.12;room.connect(wet).connect(ctx.destination);
    const speakers=[0,1].map(channel=>{
      const emitter=ctx.createPanner();emitter.panningModel='HRTF';emitter.distanceModel='inverse';
      emitter.refDistance=2.6;emitter.rolloffFactor=.72;emitter.maxDistance=65;
      split.connect(emitter,channel);emitter.connect(ctx.destination);emitter.connect(room);return emitter;
    });
    function pose(points){
      speakers.forEach((p,i)=>{const [x,y,z]=points[i];
        if(p.positionX){p.positionX.setTargetAtTime(x,ctx.currentTime,.035);p.positionY.setTargetAtTime(y,ctx.currentTime,.035);p.positionZ.setTargetAtTime(z,ctx.currentTime,.035);}
        else p.setPosition(x,y,z);
      });
    }
    pose([[-2,0,-3],[2,0,-3]]);
    return {ctx,input,pose};
  }
  globalThis.GalokRoomAudio=roomAudio;
})();
