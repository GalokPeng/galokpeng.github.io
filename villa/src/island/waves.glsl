// Original Galok Phillips spectrum with Gerstner displacement and Stokes crests, in metres.
uniform vec4 uWaves[14];
uniform vec2 uWaveShape[14];
uniform float time,wind;
void swell(vec2 p,out float height,out vec2 slope,out vec2 drift){
  height=0.;slope=vec2(0.);drift=vec2(0.);
  for(int i=0;i<14;i++){
    vec4 w=uWaves[i];float a=w.z,steep=uWaveShape[i].x;
    float phase=dot(w.xy,p)+w.w;
    float c=cos(phase),s=sin(phase);
    height+=a*(c+.5*steep*(2.*c*c-1.));
    slope-=a*w.xy*s*(1.+2.*steep*c);
    drift+=w.xy*uWaveShape[i].y*a*s*(.3+.4*wind);
  }
}
