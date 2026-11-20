uniform vec3 deep,shallow,moonDir,sunTint;
uniform float night,moon,sun;
uniform float storm;
uniform vec3 sunDir;
uniform vec3 skyColor;
uniform sampler2D tDiffuse;
varying vec4 mirrorUv;
varying vec3 world;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),u=fract(p);u=u*u*(3.-2.*u);return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),mix(hash(i+vec2(0,1)),hash(i+1.),u.x),u.y);}
void main(){
  vec2 p=world.xz;
  vec3 view=normalize(cameraPosition-world);
  float d=distance(cameraPosition,world), farFade=exp(-d*.012);
  float height;vec2 slope,drift;swell(p,height,slope,drift);
  vec2 q=p+1.4*noise(p*.24+time*.12);
  for(int i=0;i<4;i++){
    float f=float(i),k=1.6+f*1.74;
    vec2 dir=vec2(sin(2.29*f+1.2),cos(2.29*f+1.2));
    slope+=dir*(.052/(1.+f*.31))*cos(dot(q,dir)*k-time*sqrt(9.81*k))*farFade;
  }
  vec2 cell=floor(p*2.);
  vec2 radial=fract(p*2.)-vec2(hash(cell),hash(cell+3.1));
  float rippleAge=fract(time*1.35+hash(cell+9.));
  float ring=length(radial)-rippleAge*.83;
  slope+=normalize(radial+.00001)*cos(ring*46.)*exp(-ring*ring*95.)*(1.-rippleAge)*storm*.19*farFade;
  vec3 n=normalize(vec3(-slope.x*(1.+wind),1.,-slope.y*(1.+wind)));
  float rad=length(vec2(p.x/39.,(p.y-15.)/32.));
  float coast=1.-smoothstep(.96,1.42,rad);
  vec3 water=mix(deep,shallow,clamp(.14+.43*coast+.34*smoothstep(-.5,.8,height),0.,1.))*mix(1.,.35,night);
  float fres=.038+.962*pow(1.-max(dot(view,n),0.),4.);
  vec2 reflectionUv=mirrorUv.xy/mirrorUv.w;
  vec2 ripple=vec2(slope.x,slope.x*.26+slope.y)*vec2(.034,.096)/(1.+d*.008);
  vec3 reflection=texture2D(tDiffuse,clamp(reflectionUv+ripple,vec2(.002),vec2(.998))).rgb;
  float spec=max(dot(n,normalize(view+sunDir)),0.);
  float glitter=7.5*pow(spec,1100.)+.10*pow(spec,90.);
  vec3 col=mix(water,reflection*vec3(.80,.85,1.),fres)+sunTint*glitter*sun*(1.-storm*.83);
  float whitecap=smoothstep(.25,.65,length(slope))*smoothstep(.03,.24,height);
  col=mix(col,vec3(.85,.94,1.)*mix(1.,.14,night),whitecap*.30*(.5+.5*noise(p*5.)));
  float ndm=max(0.,dot(n,normalize(view+moonDir)));
  col+=vec3(.15,.35,.65)*(2.5*pow(ndm,1800.)+.03*pow(ndm,150.))*moon*(1.-storm*.8);
  float run=sin(rad*252.-time*2.4+noise(p*.58)*4.);
  col+=vec3(.46,.53,.49)*mix(1.,.10,night)*smoothstep(.47,.96,run)*(1.-smoothstep(.012,.057,abs(rad-.925)))*smoothstep(.25,.78,noise(p*1.71));
  col=mix(col,col*vec3(.48,.59,.65),storm*.70);
  col=mix(col,skyColor*.53,1.-exp(-d*(.0026+storm*.003)));
  gl_FragColor=vec4(col,1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
