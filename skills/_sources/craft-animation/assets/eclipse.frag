#version 330
uniform vec2 resolution;
uniform float time;
out vec4 color;

// A four-second orbital transit. The surface stays attached to the light source.
void main() {
    vec2 p = (gl_FragCoord.xy - .5*resolution)/resolution.y;
    float phase = 6.2831853 * time / 4.;
    vec2 moon = vec2(.49*cos(phase), .032*sin(phase));
    float r = length(p);
    float occult = length(p-moon);
    float aa = 1.4/resolution.y;
    float star = 1.-smoothstep(.189-aa, .189+aa, r);
    float disk = 1.-smoothstep(.20-aa, .20+aa, occult);
    float angle = atan(p.y,p.x);
    float grain = .5+.5*sin(87.*p.y + 3.*sin(13.*p.x) + 1.4*sin(39.*r));
    vec3 sky = mix(vec3(.025,.043,.11),vec3(.085,.16,.23),exp(-2.3*r));
    float fringe = exp(-12.*abs(r-.189))*(.76+.12*cos(5.*angle)+.09*sin(9.*angle));
    vec3 light = mix(vec3(.96,.32,.105),vec3(1.,.86,.49),.34+.50*(1.-smoothstep(0.,.189,r))+.14*grain);
    vec3 col = mix(sky+fringe*vec3(.49,.19,.054), light, star);
    float rim = exp(-120.*abs(occult-.197));
    float side = clamp(dot((p-moon)/max(occult,.0001),-moon/max(length(moon),.0001)),0.,1.);
    vec3 shadow = vec3(.045,.072,.14)+vec3(.45,.30,.16)*rim*(.17+.83*side);
    color = vec4(mix(col,shadow,disk),1.);
}
