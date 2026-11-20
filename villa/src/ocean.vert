

uniform mat4 textureMatrix;
varying vec4 mirrorUv;
varying vec3 world;
void main(){
  mirrorUv=textureMatrix*vec4(position,1.);
  world=(modelMatrix*vec4(position,1.)).xyz;
  float height;vec2 slope,drift;swell(world.xz,height,slope,drift);world.y+=height;world.xz+=drift;
  gl_Position=projectionMatrix*viewMatrix*vec4(world,1.);
}
