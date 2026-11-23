(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Bl="187",od=0,Ic=1,ad=2,or=1,ld=2,js=3,Fi=0,gn=1,ln=2,Zi=0,ar=1,Lc=2,Dc=3,Nc=4,cd=5,_s=100,ud=101,hd=102,fd=103,dd=104,pd=200,md=201,gd=202,_d=203,Ch=204,Ph=205,xd=206,vd=207,yd=208,Md=209,Sd=210,bd=211,Td=212,Ed=213,wd=214,Ba=0,za=1,ka=2,mr=3,Ha=4,Ga=5,Va=6,Wa=7,Ih=0,Ad=1,Rd=2,_i=0,Lh=1,Dh=2,Nh=3,zl=4,Uh=5,Fh=6,Oh=7,Uc="attached",Cd="detached",Bh=300,Ts=301,gr=302,fo=303,Qo=304,yi=1e3,Pn=1001,To=1002,Xt=1003,zh=1004,er=1005,Bt=1006,po=1007,On=1008,Tn=1009,kh=1010,Hh=1011,_r=1012,kl=1013,jn=1014,_n=1015,vn=1016,Hl=1017,Gl=1018,Es=1020,Gh=35902,Vh=35899,Wh=1021,Xh=1022,Bn=1023,Oi=1026,Li=1027,zo=1028,Vl=1029,Ji=1030,Wl=1031,Xl=1033,mo=33776,go=33777,_o=33778,xo=33779,Xa=35840,qa=35841,Ya=35842,Ka=35843,Za=36196,Ja=37492,$a=37496,Qa=37488,ja=37489,Eo=37490,el=37491,tl=37808,nl=37809,il=37810,sl=37811,rl=37812,ol=37813,al=37814,ll=37815,cl=37816,ul=37817,hl=37818,fl=37819,dl=37820,pl=37821,ml=36492,gl=36494,_l=36495,xl=36283,vl=36284,wo=36285,yl=36286,qh=2200,Pd=2201,Id=2202,xr=2300,vr=2301,jo=2302,Fc=2303,vs=2400,ys=2401,Ao=2402,ql=2500,Ld=2501,Dd=0,Yh=1,Ml=2,Nd=3200,Sl=0,Ud=1,Ii="",Dt="srgb",yn="srgb-linear",Ro="linear",Tt="srgb",ea=7680,Fd=519,Od=512,Bd=513,zd=514,Kh=515,kd=516,Hd=517,Zh=518,Jh=519,$h=35044,Gd=35048,Oc="300 es",zn=2e3,yr=2001;function Vd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Wd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xd(){const s=Mr("canvas");return s.style.display="block",s}const Bc={};function Co(...s){const e="THREE."+s.shift();console.log(e,...s)}function Qh(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function qe(...s){s=Qh(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Qe(...s){s=Qh(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ms(...s){const e=s.join(" ");e in Bc||(Bc[e]=!0,qe(...s))}function qd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Yd={[Ba]:Ba,[ka]:Va,[Ha]:Ha,[mr]:Ga,[za]:za,[Va]:ka,[Wa]:Wa,[Ga]:mr};class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zc=1234567;const lr=Math.PI/180,ws=180/Math.PI;function Wn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[s&255]+rn[s>>8&255]+rn[s>>16&255]+rn[s>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function ut(s,e,t){return Math.max(e,Math.min(t,s))}function Yl(s,e){return(s%e+e)%e}function Kd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Zd(s,e,t){return s!==e?(t-s)/(e-s):0}function cr(s,e,t){return(1-t)*s+t*e}function Jd(s,e,t,n){return cr(s,e,1-Math.exp(-t*n))}function $d(s,e=1){return e-Math.abs(Yl(s,e*2)-e)}function Qd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function jd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ep(s,e){return s+Math.floor(Math.random()*(e-s+1))}function tp(s,e){return s+Math.random()*(e-s)}function np(s){return s*(.5-Math.random())}function ip(s){s!==void 0&&(zc=s);let e=zc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sp(s){return s*lr}function rp(s){return s*ws}function op(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function ap(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function jh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lp(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*u,a*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ko(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Kl(s,e){if(e.constructor===Float32Array)return s;const t=ko(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Zl(s,e){if(e.constructor===Float32Array)return s;const t=ko(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const it={DEG2RAD:lr,RAD2DEG:ws,generateUUID:Wn,clamp:ut,euclideanModulo:Yl,mapLinear:Kd,inverseLerp:Zd,lerp:cr,damp:Jd,pingpong:$d,smoothstep:Qd,smootherstep:jd,randInt:ep,randFloat:tp,randFloatSpread:np,seededRandom:ip,degToRad:sp,radToDeg:rp,isPowerOfTwo:op,ceilPowerOfTwo:ap,floorPowerOfTwo:jh,setQuaternionFromProperEuler:lp,normalize:Zl,denormalize:Kl},_c=class _c{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_c.prototype.isVector2=!0;let me=_c;class jt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(h!==x||l!==f||c!==d||u!==g){let p=l*f+c*d+u*g+h*x;p<0&&(f=-f,d=-d,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){const v=Math.acos(p),S=Math.sin(v);m=Math.sin(m*v)/S,a=Math.sin(a*v)/S,l=l*m+f*a,c=c*m+d*a,u=u*m+g*a,h=h*m+x*a}else{l=l*m+f*a,c=c*m+d*a,u=u*m+g*a,h=h*m+x*a;const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xc=class xc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xc.prototype.isVector3=!0;let z=xc;const ta=new z,kc=new jt,vc=class vc{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],x=i[0],p=i[3],m=i[6],v=i[1],S=i[4],y=i[7],b=i[2],T=i[5],_=i[8];return r[0]=o*x+a*v+l*b,r[3]=o*p+a*S+l*T,r[6]=o*m+a*y+l*_,r[1]=c*x+u*v+h*b,r[4]=c*p+u*S+h*T,r[7]=c*m+u*y+h*_,r[2]=f*x+d*v+g*b,r[5]=f*p+d*S+g*T,r[8]=f*m+d*y+g*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(i*c-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(u*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(na.makeScale(e,t)),this}rotate(e){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(na.makeRotation(-e)),this}translate(e,t){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};vc.prototype.isMatrix3=!0;let tt=vc;const na=new tt,Hc=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gc=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cp(){const s={enabled:!0,workingColorSpace:yn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Tt&&(i.r=xi(i.r),i.g=xi(i.g),i.b=xi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(i.r=Ss(i.r),i.g=Ss(i.g),i.b=Ss(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ii?Ro:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[yn]:{primaries:e,whitePoint:n,transfer:Ro,toXYZ:Hc,fromXYZ:Gc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:Hc,fromXYZ:Gc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),s}const pt=cp();function xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ss(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ts;class up{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=Mr("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hp=0;class Jl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ia(i[o].image)):r.push(ia(i[o]))}else r=ia(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ia(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?up.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let fp=0;const sa=new z;class qt extends Bi{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=Pn,i=Pn,r=Bt,o=On,a=Bn,l=Tn,c=qt.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Wn(),this.name="",this.source=new Jl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(sa).x}get height(){return this.source.getSize(sa).y}get depth(){return this.source.getSize(sa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yi:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yi:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Bh;qt.DEFAULT_ANISOTROPY=1;const yc=class yc{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(d+1)/2,b=(m+1)/2,T=(u+f)/4,_=(h+x)/4,M=(g+p)/4;return S>y&&S>b?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=T/n,r=_/n):y>b?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=M/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=_/r,i=M/r),this.set(n,i,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yc.prototype.isVector4=!0;let St=yc;class dp extends Bi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new qt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Jl(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends dp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ef extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pp extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Bo=class Bo{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,x,p)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,x,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bo().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),o=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mp,e,gp)}lookAt(e,t,n){const i=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Si.crossVectors(n,Mn),Si.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Si.crossVectors(n,Mn)),Si.normalize(),Nr.crossVectors(Mn,Si),i[0]=Si.x,i[4]=Nr.x,i[8]=Mn.x,i[1]=Si.y,i[5]=Nr.y,i[9]=Mn.y,i[2]=Si.z,i[6]=Nr.z,i[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],x=n[6],p=n[10],m=n[14],v=n[3],S=n[7],y=n[11],b=n[15],T=i[0],_=i[4],M=i[8],C=i[12],w=i[1],P=i[5],N=i[9],W=i[13],R=i[2],I=i[6],k=i[10],U=i[14],K=i[3],q=i[7],Z=i[11],ee=i[15];return r[0]=o*T+a*w+l*R+c*K,r[4]=o*_+a*P+l*I+c*q,r[8]=o*M+a*N+l*k+c*Z,r[12]=o*C+a*W+l*U+c*ee,r[1]=u*T+h*w+f*R+d*K,r[5]=u*_+h*P+f*I+d*q,r[9]=u*M+h*N+f*k+d*Z,r[13]=u*C+h*W+f*U+d*ee,r[2]=g*T+x*w+p*R+m*K,r[6]=g*_+x*P+p*I+m*q,r[10]=g*M+x*N+p*k+m*Z,r[14]=g*C+x*W+p*U+m*ee,r[3]=v*T+S*w+y*R+b*K,r[7]=v*_+S*P+y*I+b*q,r[11]=v*M+S*N+y*k+b*Z,r[15]=v*C+S*W+y*U+b*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],p=e[11],m=e[15],v=l*d-c*f,S=a*d-c*h,y=a*f-l*h,b=o*d-c*u,T=o*f-l*u,_=o*h-a*u;return t*(x*v-p*S+m*y)-n*(g*v-p*b+m*T)+i*(g*S-x*b+m*_)-r*(g*y-x*T+p*_)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+i*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],p=e[14],m=e[15],v=t*a-n*o,S=t*l-i*o,y=t*c-r*o,b=n*l-i*a,T=n*c-r*a,_=i*c-r*l,M=u*x-h*g,C=u*p-f*g,w=u*m-d*g,P=h*p-f*x,N=h*m-d*x,W=f*m-d*p,R=v*W-S*N+y*P+b*w-T*C+_*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return e[0]=(a*W-l*N+c*P)*I,e[1]=(i*N-n*W-r*P)*I,e[2]=(x*_-p*T+m*b)*I,e[3]=(f*T-h*_-d*b)*I,e[4]=(l*w-o*W-c*C)*I,e[5]=(t*W-i*w+r*C)*I,e[6]=(p*y-g*_-m*S)*I,e[7]=(u*_-f*y+d*S)*I,e[8]=(o*N-a*w+c*M)*I,e[9]=(n*w-t*N-r*M)*I,e[10]=(g*T-x*y+m*v)*I,e[11]=(h*y-u*T-d*v)*I,e[12]=(a*C-o*P-l*M)*I,e[13]=(t*P-n*C+i*M)*I,e[14]=(x*S-g*b-p*v)*I,e[15]=(u*b-h*S+f*v)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,x=o*u,p=o*h,m=a*h,v=l*c,S=l*u,y=l*h,b=n.x,T=n.y,_=n.z;return i[0]=(1-(x+m))*b,i[1]=(d+y)*b,i[2]=(g-S)*b,i[3]=0,i[4]=(d-y)*T,i[5]=(1-(f+m))*T,i[6]=(p+v)*T,i[7]=0,i[8]=(g+S)*_,i[9]=(p-v)*_,i[10]=(1-(f+x))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ns.set(i[0],i[1],i[2]).length();const a=ns.set(i[4],i[5],i[6]).length(),l=ns.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Ln.copy(this);const c=1/o,u=1/a,h=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,t.setFromRotationMatrix(Ln),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=zn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===zn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===yr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=zn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===zn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===yr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Bo.prototype.isMatrix4=!0;let Ze=Bo;const ns=new z,Ln=new Ze,mp=new z(0,0,0),gp=new z(1,1,1),Si=new z,Nr=new z,Mn=new z,Vc=new Ze,Wc=new jt;class ei{constructor(e=0,t=0,n=0,i=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class $l{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _p=0;const Xc=new z,is=new jt,ri=new Ze,Ur=new z,Hs=new z,xp=new z,vp=new jt,qc=new z(1,0,0),Yc=new z(0,1,0),Kc=new z(0,0,1),Zc={type:"added"},yp={type:"removed"},ss={type:"childadded",child:null},ra={type:"childremoved",child:null};class Rt extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new z,t=new ei,n=new jt,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new tt}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(qc,e)}rotateY(e){return this.rotateOnAxis(Yc,e)}rotateZ(e){return this.rotateOnAxis(Kc,e)}translateOnAxis(e,t){return Xc.copy(e).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qc,e)}translateY(e){return this.translateOnAxis(Yc,e)}translateZ(e){return this.translateOnAxis(Kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ur.copy(e):Ur.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Hs,Ur,this.up):ri.lookAt(Ur,Hs,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),is.setFromRotationMatrix(ri),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zc),ss.child=e,this.dispatchEvent(ss),ss.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yp),ra.child=e,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zc),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,vp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rt.DEFAULT_UP=new z(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Di extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mp={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Di;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function aa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=Yl(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=aa(o,r,e+1/3),this.g=aa(o,r,e),this.b=aa(o,r,e-1/3)}return pt.colorSpaceToWorking(this,i),this}setStyle(e,t=Dt){function n(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const n=tf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return pt.workingToColorSpace(on.copy(this),e),Math.round(ut(on.r*255,0,255))*65536+Math.round(ut(on.g*255,0,255))*256+Math.round(ut(on.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(on.copy(this),t);const n=on.r,i=on.g,r=on.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Dt){pt.workingToColorSpace(on.copy(this),e);const t=on.r,n=on.g,i=on.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(Fr);const n=cr(bi.h,Fr.h,t),i=cr(bi.s,Fr.s,t),r=cr(bi.l,Fr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new Ge;Ge.NAMES=tf;class Ql{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new Ql(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Jc extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Dn=new z,oi=new z,la=new z,ai=new z,rs=new z,os=new z,$c=new z,ca=new z,ua=new z,ha=new z,fa=new St,da=new St,pa=new St;class Fn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Dn.subVectors(e,t),i.cross(Dn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Dn.subVectors(i,t),oi.subVectors(n,t),la.subVectors(e,t);const o=Dn.dot(Dn),a=Dn.dot(oi),l=Dn.dot(la),c=oi.dot(oi),u=oi.dot(la),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return fa.setScalar(0),da.setScalar(0),pa.setScalar(0),fa.fromBufferAttribute(e,t),da.fromBufferAttribute(e,n),pa.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(fa,r.x),o.addScaledVector(da,r.y),o.addScaledVector(pa,r.z),o}static isFrontFacing(e,t,n,i){return Dn.subVectors(n,t),oi.subVectors(e,t),Dn.cross(oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Dn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Fn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;rs.subVectors(i,n),os.subVectors(r,n),ca.subVectors(e,n);const l=rs.dot(ca),c=os.dot(ca);if(l<=0&&c<=0)return t.copy(n);ua.subVectors(e,i);const u=rs.dot(ua),h=os.dot(ua);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(rs,o);ha.subVectors(e,r);const d=rs.dot(ha),g=os.dot(ha);if(g>=0&&d<=g)return t.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(os,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return $c.subVectors(r,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector($c,a);const m=1/(p+x+f);return o=x*m,a=f*m,t.copy(n).addScaledVector(rs,o).addScaledVector(os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class En{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)),Or.applyMatrix4(e.matrixWorld),this.union(Or)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Br.subVectors(this.max,Gs),as.subVectors(e.a,Gs),ls.subVectors(e.b,Gs),cs.subVectors(e.c,Gs),Ti.subVectors(ls,as),Ei.subVectors(cs,ls),Vi.subVectors(as,cs);let t=[0,-Ti.z,Ti.y,0,-Ei.z,Ei.y,0,-Vi.z,Vi.y,Ti.z,0,-Ti.x,Ei.z,0,-Ei.x,Vi.z,0,-Vi.x,-Ti.y,Ti.x,0,-Ei.y,Ei.x,0,-Vi.y,Vi.x,0];return!ma(t,as,ls,cs,Br)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,as,ls,cs,Br))?!1:(zr.crossVectors(Ti,Ei),t=[zr.x,zr.y,zr.z],ma(t,as,ls,cs,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const li=[new z,new z,new z,new z,new z,new z,new z,new z],Nn=new z,Or=new En,as=new z,ls=new z,cs=new z,Ti=new z,Ei=new z,Vi=new z,Gs=new z,Br=new z,zr=new z,Wi=new z;function ma(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Wi.fromArray(s,r);const a=i.x*Math.abs(Wi.x)+i.y*Math.abs(Wi.y)+i.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),u=n.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const fi=Sp();function Sp(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function bp(s){Math.abs(s)>65504&&qe("DataUtils.toHalfFloat(): Value out of range."),s=ut(s,-65504,65504),fi.floatView[0]=s;const e=fi.uint32View[0],t=e>>23&511;return fi.baseTable[t]+((e&8388607)>>fi.shiftTable[t])}function Tp(s){const e=s>>10;return fi.uint32View[0]=fi.mantissaTable[fi.offsetTable[e]+(s&1023)]+fi.exponentTable[e],fi.floatView[0]}class kr{static toHalfFloat(e){return bp(e)}static fromHalfFloat(e){return Tp(e)}}const Vt=new z,Hr=new me;let Ep=0;class en extends Bi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ep++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$h,this.updateRanges=[],this.gpuType=_n,this.version=0,this._normalizationScale=e!==void 0?ko(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Kl(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Zl(e,this.array)}}class nf extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sf extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}const wp=new En,Vs=new z,ga=new z;class ti{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(ga)),this.expandByPoint(Vs.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ap=0;const wn=new Ze,_a=new Rt,us=new z,Sn=new En,Ws=new En,$t=new z;class Nt extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vd(e)?sf:nf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Sn.min,Ws.min),Sn.expandByPoint($t),$t.addVectors(Sn.max,Ws.max),Sn.expandByPoint($t)):(Sn.expandByPoint(Ws.min),Sn.expandByPoint(Ws.max))}Sn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)$t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared($t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$t.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(e,c),$t.add(us)),i=Math.max(i,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new en(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)a[C]=new z,l[C]=new z;const u=new z,h=new z,f=new z,d=new me,g=new me,x=new me,p=new z,m=new z;function v(C,w,P){c[C]=c[w]=c[P]=1,u.fromBufferAttribute(n,C),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,P),d.fromBufferAttribute(r,C),g.fromBufferAttribute(r,w),x.fromBufferAttribute(r,P),h.sub(u),f.sub(u),g.sub(d),x.sub(d);const N=1/(g.x*x.y-x.x*g.y);isFinite(N)&&(p.copy(h).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(N),m.copy(f).multiplyScalar(g.x).addScaledVector(h,-x.x).multiplyScalar(N),a[C].add(p),a[w].add(p),a[P].add(p),l[C].add(m),l[w].add(m),l[P].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,w=S.length;C<w;++C){const P=S[C],N=P.start,W=P.count;for(let R=N,I=N+W;R<I;R+=3)v(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const y=new z,b=new z,T=new z,_=new z;function M(C){T.fromBufferAttribute(i,C),_.copy(T);const w=a[C];y.copy(w),y.sub(T.multiplyScalar(T.dot(w))).normalize(),b.crossVectors(_,w);const N=b.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,N)}for(let C=0,w=n.count;C<w;++C)c[C]&&M(C);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new en(f,u,h)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$h,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Qc(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Qc(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Qc(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Wn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const hn=new z;class jl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?ko(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Co("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Co("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Kl(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Zl(e,this.data.array)}}const xa=new z,Cp=new z,Pp=new tt;class hi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=xa.subVectors(n,t).cross(Cp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(xa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pp.getNormalMatrix(e),i=this.coplanarPoint(xa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Ip=0;class Gn extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=ar,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Ph,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new hi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new me().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ci=new z,va=new z,Gr=new z,Vr=new z;class Rr{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){va.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(va);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Gr),a=Vr.dot(this.direction),l=-Vr.dot(Gr),c=Vr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(va).addScaledVector(Gr,f),d}intersectSphere(e,t){if(e.radius<0)return null;ci.subVectors(e.center,this.origin);const n=ci.dot(this.direction),i=ci.dot(ci)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,i,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,g=t.x-o.x,x=t.y-o.y,p=t.z-o.z,m=n.x-o.x,v=n.y-o.y,S=n.z-o.z,y=Math.abs(l),b=Math.abs(c),T=Math.abs(u);let _,M,C,w,P,N,W,R,I,k,U,K;if(y>=b&&y>=T?(C=l,N=h,I=g,K=m,l>=0?(_=c,M=u,w=f,P=d,W=x,R=p,k=v,U=S):(_=u,M=c,w=d,P=f,W=p,R=x,k=S,U=v)):b>=T?(C=c,N=f,I=x,K=v,c>=0?(_=u,M=l,w=d,P=h,W=p,R=g,k=S,U=m):(_=l,M=u,w=h,P=d,W=g,R=p,k=m,U=S)):(C=u,N=d,I=p,K=S,u>=0?(_=l,M=c,w=h,P=f,W=g,R=x,k=m,U=v):(_=c,M=l,w=f,P=h,W=x,R=g,k=v,U=m)),C===0)return null;const q=_/C,Z=M/C,ee=1/C,ce=w-q*N,de=P-Z*N,$=W-q*I,ge=R-Z*I,ne=k-q*K,Te=U-Z*K,F=ne*ge-Te*$,G=ce*Te-de*ne,pe=$*de-ge*ce;if(i){if(F<0||G<0||pe<0)return null}else if((F<0||G<0||pe<0)&&(F>0||G>0||pe>0))return null;const ue=F+G+pe;if(ue===0)return null;const Me=ee*(F*N+G*I+pe*K);return(ue>0?Me<0:Me>0)?null:this.at(Me/ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kn extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jc=new Ze,Xi=new Rr,Wr=new ti,eu=new z,Xr=new z,qr=new z,Yr=new z,ya=new z,Kr=new z,tu=new z,Zr=new z;class cn extends Rt{constructor(e=new Nt,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ya.fromBufferAttribute(h,e),o?Kr.addScaledVector(ya,u):Kr.addScaledVector(ya.sub(t),u))}t.add(Kr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(r),Xi.copy(e.ray).recast(e.near),!(Wr.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Wr,eu)===null||Xi.origin.distanceToSquared(eu)>(e.far-e.near)**2))&&(jc.copy(r).invert(),Xi.copy(e.ray).applyMatrix4(jc),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const p=f[g],m=o[p.materialIndex],v=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=v,b=S;y<b;y+=3){const T=a.getX(y),_=a.getX(y+1),M=a.getX(y+2);i=Jr(this,m,e,n,c,u,h,T,_,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const v=a.getX(p),S=a.getX(p+1),y=a.getX(p+2);i=Jr(this,o,e,n,c,u,h,v,S,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const p=f[g],m=o[p.materialIndex],v=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=v,b=S;y<b;y+=3){const T=y,_=y+1,M=y+2;i=Jr(this,m,e,n,c,u,h,T,_,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const v=p,S=p+1,y=p+2;i=Jr(this,o,e,n,c,u,h,v,S,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Lp(s,e,t,n,i,r,o,a){let l;if(e.side===gn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Fi,a),l===null)return null;Zr.copy(a),Zr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Zr);return c<t.near||c>t.far?null:{distance:c,point:Zr.clone(),object:s}}function Jr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Xr),s.getVertexPosition(l,qr),s.getVertexPosition(c,Yr);const u=Lp(s,e,t,n,Xr,qr,Yr,tu);if(u){const h=new z;Fn.getBarycoord(tu,Xr,qr,Yr,h),i&&(u.uv=Fn.getInterpolatedAttribute(i,a,l,c,h,new me)),r&&(u.uv1=Fn.getInterpolatedAttribute(r,a,l,c,h,new me)),o&&(u.normal=Fn.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};Fn.getNormal(Xr,qr,Yr,f.normal),u.face=f,u.barycoord=h}return u}const Xs=new St,nu=new St,iu=new St,Dp=new St,su=new Ze,$r=new z,Ma=new ti,ru=new Ze,Sa=new Rr;class Np extends cn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uc,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new En),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$r),this.boundingBox.expandByPoint($r)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ti),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$r),this.boundingSphere.expandByPoint($r)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(i),e.ray.intersectsSphere(Ma)!==!1&&(ru.copy(i).invert(),Sa.copy(e.ray).applyMatrix4(ru),!(this.boundingBox!==null&&Sa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Sa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Uc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cd?this.bindMatrixInverse.copy(this.bindMatrix).invert():qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;nu.fromBufferAttribute(i.attributes.skinIndex,e),iu.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Xs.copy(t),t.set(0,0,0,0)):(Xs.set(t.x,t.y,t.z,1),t.set(0,0,0)),Xs.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=iu.getComponent(r);if(o!==0){const a=nu.getComponent(r);su.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Dp.copy(Xs).applyMatrix4(su),o)}}return t.isVector4&&(t.w=Xs.w),t.applyMatrix4(this.bindMatrixInverse)}}class rf extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class As extends qt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Xt,u=Xt,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ou=new Ze,Up=new Ze;class ec{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Up;ou.multiplyMatrices(a,t[r]),ou.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ec(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new As(t,e,e,Bn,_n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(qe("Skeleton: No bone found with UUID:",r),o=new rf),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Po extends en{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hs=new Ze,au=new Ze,Qr=[],lu=new En,Fp=new Ze,qs=new cn,Ys=new ti;class Ho extends cn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Po(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Fp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new En),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),lu.copy(e.boundingBox).applyMatrix4(hs),this.boundingBox.union(lu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),Ys.copy(e.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),e.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,hs),au.multiplyMatrices(n,hs),qs.matrixWorld=au,qs.raycast(e,Qr);for(let o=0,a=Qr.length;o<a;o++){const l=Qr[o];l.instanceId=r,l.object=this,t.push(l)}Qr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Po(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new As(new Float32Array(i*this.count),i,this.count,zo,_n));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qi=new ti,Op=new me(.5,.5),jr=new z;class Rs{constructor(e=new hi,t=new hi,n=new hi,i=new hi,r=new hi,o=new hi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],x=r[9],p=r[10],m=r[11],v=r[12],S=r[13],y=r[14],b=r[15];if(i[0].setComponents(c-o,d-u,m-g,b-v).normalize(),i[1].setComponents(c+o,d+u,m+g,b+v).normalize(),i[2].setComponents(c+a,d+h,m+x,b+S).normalize(),i[3].setComponents(c-a,d-h,m-x,b-S).normalize(),n)i[4].setComponents(l,f,p,y).normalize(),i[5].setComponents(c-l,d-f,m-p,b-y).normalize();else if(i[4].setComponents(c-l,d-f,m-p,b-y).normalize(),t===zn)i[5].setComponents(c+l,d+f,m+p,b+y).normalize();else if(t===yr)i[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){qi.center.set(0,0,0);const t=Op.distanceTo(e.center);return qi.radius=.7071067811865476+t,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(jr.x=i.normal.x>0?e.max.x:e.min.x,jr.y=i.normal.y>0?e.max.y:e.min.y,jr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const cu=new Ze;class tc{constructor(){this.coordinateSystem=zn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const r=t[i];cu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Rs),n[i].setFromProjectionMatrix(cu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Rs),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new tc().copy(this)}}class of extends Gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Io=new z,Lo=new z,uu=new Ze,Ks=new Rr,eo=new ti,ba=new z,hu=new z;class nc extends Rt{constructor(e=new Nt,t=new of){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Io.fromBufferAttribute(t,i-1),Lo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Io.distanceTo(Lo);e.setAttribute("lineDistance",new dt(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(i),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;uu.copy(i).invert(),Ks.copy(e.ray).applyMatrix4(uu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=c){const m=u.getX(x),v=u.getX(x+1),S=to(this,e,Ks,l,m,v,x);S&&t.push(S)}if(this.isLineLoop){const x=u.getX(g-1),p=u.getX(d),m=to(this,e,Ks,l,x,p,g-1);m&&t.push(m)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=c){const m=to(this,e,Ks,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){const x=to(this,e,Ks,l,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function to(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Io.fromBufferAttribute(a,i),Lo.fromBufferAttribute(a,r),t.distanceSqToSegment(Io,Lo,ba,hu)>n)return;ba.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ba);if(!(c<e.near||c>e.far))return{distance:c,point:hu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const fu=new z,du=new z;class af extends nc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)fu.fromBufferAttribute(t,i),du.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fu.distanceTo(du);e.setAttribute("lineDistance",new dt(n,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bp extends nc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class lf extends Gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pu=new Ze,bl=new Rr,no=new ti,io=new z;class zp extends Rt{constructor(e=new Nt,t=new lf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(i),no.radius+=r,e.ray.intersectsSphere(no)===!1)return;pu.copy(i).invert(),bl.copy(e.ray).applyMatrix4(pu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){const p=c.getX(g);io.fromBufferAttribute(h,p),mu(io,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)io.fromBufferAttribute(h,g),mu(io,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mu(s,e,t,n,i,r,o){const a=bl.distanceSqToPoint(s);if(a<t){const l=new z;bl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class cf extends qt{constructor(e=[],t=Ts,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ji extends qt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cs extends qt{constructor(e,t,n=jn,i,r,o,a=Xt,l=Xt,c,u=Oi,h=1){if(u!==Oi&&u!==Li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class uf extends Cs{constructor(e,t=jn,n=Ts,i,r,o=Xt,a=Xt,l,c=Oi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hf extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zi extends Nt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(h,2));function g(x,p,m,v,S,y,b,T,_,M,C){const w=y/_,P=b/M,N=y/2,W=b/2,R=T/2,I=_+1,k=M+1;let U=0,K=0;const q=new z;for(let Z=0;Z<k;Z++){const ee=Z*P-W;for(let ce=0;ce<I;ce++){const de=ce*w-N;q[x]=de*v,q[p]=ee*S,q[m]=R,c.push(q.x,q.y,q.z),q[x]=0,q[p]=0,q[m]=T>0?1:-1,u.push(q.x,q.y,q.z),h.push(ce/_),h.push(1-Z/M),U+=1}}for(let Z=0;Z<M;Z++)for(let ee=0;ee<_;ee++){const ce=f+ee+I*Z,de=f+ee+I*(Z+1),$=f+(ee+1)+I*(Z+1),ge=f+(ee+1)+I*Z;l.push(ce,de,ge),l.push(de,$,ge),K+=6}a.addGroup(d,K,C),d+=K,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ic extends Nt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const x=[],p=n/2;let m=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(d,2));function v(){const y=new z,b=new z;let T=0;const _=(t-e)/n;for(let M=0;M<=r;M++){const C=[],w=M/r,P=w*(t-e)+e;for(let N=0;N<=i;N++){const W=N/i,R=W*l+a,I=Math.sin(R),k=Math.cos(R);b.x=P*I,b.y=-w*n+p,b.z=P*k,h.push(b.x,b.y,b.z),y.set(I,_,k).normalize(),f.push(y.x,y.y,y.z),d.push(W,1-w),C.push(g++)}x.push(C)}for(let M=0;M<i;M++)for(let C=0;C<r;C++){const w=x[C][M],P=x[C+1][M],N=x[C+1][M+1],W=x[C][M+1];(e>0||C!==0)&&(u.push(w,P,W),T+=3),(t>0||C!==r-1)&&(u.push(P,N,W),T+=3)}c.addGroup(m,T,0),m+=T}function S(y){const b=g,T=new me,_=new z;let M=0;const C=y===!0?e:t,w=y===!0?1:-1;for(let N=1;N<=i;N++)h.push(0,p*w,0),f.push(0,w,0),d.push(.5,.5),g++;const P=g;for(let N=0;N<=i;N++){const R=N/i*l+a,I=Math.cos(R),k=Math.sin(R);_.x=C*k,_.y=p*w,_.z=C*I,h.push(_.x,_.y,_.z),f.push(0,w,0),T.x=I*.5+.5,T.y=k*.5*w+.5,d.push(T.x,T.y),g++}for(let N=0;N<i;N++){const W=b+N,R=P+N;y===!0?u.push(R,R+1,W):u.push(R+1,R,W),M+=3}c.addGroup(m,M,y===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sc extends Nt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const S=new z,y=new z,b=new z;for(let T=0;T<t.length;T+=3)d(t[T+0],S),d(t[T+1],y),d(t[T+2],b),l(S,y,b,v)}function l(v,S,y,b){const T=b+1,_=[];for(let M=0;M<=T;M++){_[M]=[];const C=v.clone().lerp(y,M/T),w=S.clone().lerp(y,M/T),P=T-M;for(let N=0;N<=P;N++)N===0&&M===T?_[M][N]=C:_[M][N]=C.clone().lerp(w,N/P)}for(let M=0;M<T;M++)for(let C=0;C<2*(T-M)-1;C++){const w=Math.floor(C/2);C%2===0?(f(_[M][w+1]),f(_[M+1][w]),f(_[M][w])):(f(_[M][w+1]),f(_[M+1][w+1]),f(_[M+1][w]))}}function c(v){const S=new z;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(v),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function u(){const v=new z;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];const y=p(v)/2/Math.PI+.5,b=m(v)/Math.PI+.5;o.push(y,1-b)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const S=o[v+0],y=o[v+2],b=o[v+4],T=Math.max(S,y,b),_=Math.min(S,y,b);T>.9&&_<.1&&(S<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,S){const y=v*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function g(){const v=new z,S=new z,y=new z,b=new z,T=new me,_=new me,M=new me;for(let C=0,w=0;C<r.length;C+=9,w+=6){v.set(r[C+0],r[C+1],r[C+2]),S.set(r[C+3],r[C+4],r[C+5]),y.set(r[C+6],r[C+7],r[C+8]),T.set(o[w+0],o[w+1]),_.set(o[w+2],o[w+3]),M.set(o[w+4],o[w+5]),b.copy(v).add(S).add(y).divideScalar(3);const P=p(b);x(T,w+0,v,P),x(_,w+2,S,P),x(M,w+4,y,P)}}function x(v,S,y,b){b<0&&v.x===1&&(o[S]=v.x-1),y.x===0&&y.z===0&&(o[S]=b/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.vertices,e.indices,e.radius,e.detail)}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new me:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new z,i=[],r=[],o=[],a=new z,l=new Ze;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ut(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(ut(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class rc extends ni{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new me){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class kp extends rc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function oc(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const gu=new z,_u=new z,Ta=new oc,Ea=new oc,wa=new oc;class ff extends ni{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new z){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(_u.subVectors(i[0],i[1]).add(i[0]),c=_u);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(gu.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=gu),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Ta.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,x,p),Ea.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,x,p),wa.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,x,p)}else this.curveType==="catmullrom"&&(Ta.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ea.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),wa.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Ta.calc(l),Ea.calc(l),wa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new z().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function xu(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Hp(s,e){const t=1-s;return t*t*e}function Gp(s,e){return 2*(1-s)*s*e}function Vp(s,e){return s*s*e}function ur(s,e,t,n){return Hp(s,e)+Gp(s,t)+Vp(s,n)}function Wp(s,e){const t=1-s;return t*t*t*e}function Xp(s,e){const t=1-s;return 3*t*t*s*e}function qp(s,e){return 3*(1-s)*s*s*e}function Yp(s,e){return s*s*s*e}function hr(s,e,t,n,i){return Wp(s,e)+Xp(s,t)+qp(s,n)+Yp(s,i)}class df extends ni{constructor(e=new me,t=new me,n=new me,i=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new me){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hr(e,i.x,r.x,o.x,a.x),hr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kp extends ni{constructor(e=new z,t=new z,n=new z,i=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new z){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hr(e,i.x,r.x,o.x,a.x),hr(e,i.y,r.y,o.y,a.y),hr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pf extends ni{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zp extends ni{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mf extends ni{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ur(e,i.x,r.x,o.x),ur(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gf extends ni{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ur(e,i.x,r.x,o.x),ur(e,i.y,r.y,o.y),ur(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _f extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(xu(a,l.x,c.x,u.x,h.x),xu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new me().fromArray(i))}return this}}var Do=Object.freeze({__proto__:null,ArcCurve:kp,CatmullRomCurve3:ff,CubicBezierCurve:df,CubicBezierCurve3:Kp,EllipseCurve:rc,LineCurve:pf,LineCurve3:Zp,QuadraticBezierCurve:mf,QuadraticBezierCurve3:gf,SplineCurve:_f});class Jp extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Do[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Do[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class vu extends Jp{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new pf(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new mf(this.currentPoint.clone(),new me(e,t),new me(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new df(this.currentPoint.clone(),new me(e,t),new me(n,i),new me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new _f(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new rc(e,t,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $i extends vu{constructor(e){super(e),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new vu().fromJSON(i))}return this}}function $p(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=xf(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=nm(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let u=a,h=l;for(let f=t;f<i;f+=t){const d=s[f],g=s[f+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Sr(r,o,t,a,l,c,0),o}function xf(s,e,t,n,i){let r;if(i===dm(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=yu(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=yu(o/n|0,s[o],s[o+1],r);return r&&Ps(r,r.next)&&(Tr(r),r=r.next),r}function Qi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ps(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Tr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Sr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&am(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?jp(s,n,i,r):Qp(s)){e.push(l.i,s.i,c.i),Tr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=em(Qi(s),e),Sr(s,e,t,n,i,r,2)):o===2&&tm(s,e,t,n,i,r):Sr(Qi(s),e,t,n,i,r,1);break}}}function Qp(s){const e=s.prev,t=s,n=s.next;if(Ot(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,r,o),h=Math.min(a,l,c),f=Math.max(i,r,o),d=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&tr(i,a,r,l,o,c,g.x,g.y)&&Ot(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jp(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Ot(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(u,h,f),x=Math.max(a,l,c),p=Math.max(u,h,f),m=Tl(d,g,e,t,n),v=Tl(x,p,e,t,n);let S=s.prevZ,y=s.nextZ;for(;S&&S.z>=m&&y&&y.z<=v;){if(S.x>=d&&S.x<=x&&S.y>=g&&S.y<=p&&S!==i&&S!==o&&tr(a,u,l,h,c,f,S.x,S.y)&&Ot(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&tr(a,u,l,h,c,f,y.x,y.y)&&Ot(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=m;){if(S.x>=d&&S.x<=x&&S.y>=g&&S.y<=p&&S!==i&&S!==o&&tr(a,u,l,h,c,f,S.x,S.y)&&Ot(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&tr(a,u,l,h,c,f,y.x,y.y)&&Ot(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function em(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Ps(n,i)&&yf(n,t,t.next,i)&&br(n,i)&&br(i,n)&&(e.push(n.i,t.i,i.i),Tr(t),Tr(t.next),t=s=i),t=t.next}while(t!==s);return Qi(t)}function tm(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&um(o,a)){let l=Mf(o,a);o=Qi(o,o.next),l=Qi(l,l.next),Sr(o,e,t,n,i,r,0),Sr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function nm(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=xf(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(cm(c))}i.sort(im);for(let r=0;r<i.length;r++)t=sm(i[r],t);return t}function im(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function sm(s,e){const t=rm(s,e);if(!t)return e;const n=Mf(t,s);return Qi(n,n.next),Qi(t,t.next)}function rm(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(Ps(s,t))return t;do{if(Ps(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&vf(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const h=Math.abs(i-t.y)/(n-t.x);br(t,s)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&om(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function om(s,e){return Ot(s.prev,s,e.prev)<0&&Ot(e.next,s,s.next)<0}function am(s,e,t,n){let i=s;do i.z===0&&(i.z=Tl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,lm(i)}function lm(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Tl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function cm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function vf(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function tr(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&vf(s,e,t,n,i,r,o,a)}function um(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!hm(s,e)&&(br(s,e)&&br(e,s)&&fm(s,e)&&(Ot(s.prev,s,e.prev)||Ot(s,e.prev,e))||Ps(s,e)&&Ot(s.prev,s,s.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ps(s,e){return s.x===e.x&&s.y===e.y}function yf(s,e,t,n){const i=ro(Ot(s,e,t)),r=ro(Ot(s,e,n)),o=ro(Ot(t,n,s)),a=ro(Ot(t,n,e));return!!(i!==r&&o!==a||i===0&&so(s,t,e)||r===0&&so(s,n,e)||o===0&&so(t,s,n)||a===0&&so(t,e,n))}function so(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ro(s){return s>0?1:s<0?-1:0}function hm(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&yf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function br(s,e){return Ot(s.prev,s,s.next)<0?Ot(s,e,s.next)>=0&&Ot(s,s.prev,e)>=0:Ot(s,e,s.prev)<0||Ot(s,s.next,e)<0}function fm(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Mf(s,e){const t=El(s.i,s.x,s.y),n=El(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function yu(s,e,t,n){const i=El(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Tr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function El(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dm(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class pm{static triangulate(e,t,n=2){return $p(e,t,n)}}class pi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return pi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Mu(e),Su(n,e);let o=e.length;t.forEach(Mu);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Su(n,t[l]);const a=pm.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Mu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Su(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Cr extends Nt{constructor(e=new $i([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new dt(i,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:mm;let S,y=!1,b,T,_,M;if(m){S=m.getSpacedPoints(u),y=!0,f=!1;const oe=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(u,oe),T=new z,_=new z,M=new z}f||(p=0,d=0,g=0,x=0);const C=a.extractPoints(c);let w=C.shape;const P=C.holes;if(!pi.isClockWise(w)){w=w.reverse();for(let oe=0,ve=P.length;oe<ve;oe++){const _e=P[oe];pi.isClockWise(_e)&&(P[oe]=_e.reverse())}}function W(oe){const _e=10000000000000001e-36;let Le=oe[0];for(let Se=1;Se<=oe.length;Se++){const He=Se%oe.length,Fe=oe[He],$e=Fe.x-Le.x,at=Fe.y-Le.y,ft=$e*$e+at*at,V=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(Le.x),Math.abs(Le.y)),Ct=_e*V*V;if(ft<=Ct){oe.splice(He,1),Se--;continue}Le=Fe}}W(w),P.forEach(W);const R=P.length,I=w;for(let oe=0;oe<R;oe++){const ve=P[oe];w=w.concat(ve)}function k(oe,ve,_e){return ve||Qe("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(ve,_e)}const U=w.length;function K(oe,ve,_e){let Le,Se,He;const Fe=oe.x-ve.x,$e=oe.y-ve.y,at=_e.x-oe.x,ft=_e.y-oe.y,V=Fe*Fe+$e*$e,Ct=Fe*ft-$e*at;if(Math.abs(Ct)>Number.EPSILON){const lt=Math.sqrt(V),bt=Math.sqrt(at*at+ft*ft),Pe=ve.x-$e/lt,Ut=ve.y+Fe/lt,Ke=_e.x-ft/bt,Je=_e.y+at/bt,L=((Ke-Pe)*ft-(Je-Ut)*at)/(Fe*ft-$e*at);Le=Pe+Fe*L-oe.x,Se=Ut+$e*L-oe.y;const E=Le*Le+Se*Se;if(E<=2)return new me(Le,Se);He=Math.sqrt(E/2)}else{let lt=!1;Fe>Number.EPSILON?at>Number.EPSILON&&(lt=!0):Fe<-Number.EPSILON?at<-Number.EPSILON&&(lt=!0):Math.sign($e)===Math.sign(ft)&&(lt=!0),lt?(Le=-$e,Se=Fe,He=Math.sqrt(V)):(Le=Fe,Se=$e,He=Math.sqrt(V/2))}return new me(Le/He,Se/He)}const q=[];for(let oe=0,ve=I.length,_e=ve-1,Le=oe+1;oe<ve;oe++,_e++,Le++)_e===ve&&(_e=0),Le===ve&&(Le=0),q[oe]=K(I[oe],I[_e],I[Le]);const Z=[];let ee,ce=q.concat();for(let oe=0,ve=R;oe<ve;oe++){const _e=P[oe];ee=[];for(let Le=0,Se=_e.length,He=Se-1,Fe=Le+1;Le<Se;Le++,He++,Fe++)He===Se&&(He=0),Fe===Se&&(Fe=0),ee[Le]=K(_e[Le],_e[He],_e[Fe]);Z.push(ee),ce=ce.concat(ee)}let de;if(p===0)de=pi.triangulateShape(I,P);else{const oe=[],ve=[];for(let _e=0;_e<p;_e++){const Le=_e/p,Se=d*Math.cos(Le*Math.PI/2),He=g*Math.sin(Le*Math.PI/2)+x;for(let Fe=0,$e=I.length;Fe<$e;Fe++){const at=k(I[Fe],q[Fe],He);G(at.x,at.y,-Se),Le===0&&oe.push(at)}for(let Fe=0,$e=R;Fe<$e;Fe++){const at=P[Fe];ee=Z[Fe];const ft=[];for(let V=0,Ct=at.length;V<Ct;V++){const lt=k(at[V],ee[V],He);G(lt.x,lt.y,-Se),Le===0&&ft.push(lt)}Le===0&&ve.push(ft)}}de=pi.triangulateShape(oe,ve)}const $=de.length,ge=g+x;for(let oe=0;oe<U;oe++){const ve=f?k(w[oe],ce[oe],ge):w[oe];y?(_.copy(b.normals[0]).multiplyScalar(ve.x),T.copy(b.binormals[0]).multiplyScalar(ve.y),M.copy(S[0]).add(_).add(T),G(M.x,M.y,M.z)):G(ve.x,ve.y,0)}for(let oe=1;oe<=u;oe++)for(let ve=0;ve<U;ve++){const _e=f?k(w[ve],ce[ve],ge):w[ve];y?(_.copy(b.normals[oe]).multiplyScalar(_e.x),T.copy(b.binormals[oe]).multiplyScalar(_e.y),M.copy(S[oe]).add(_).add(T),G(M.x,M.y,M.z)):G(_e.x,_e.y,h/u*oe)}for(let oe=p-1;oe>=0;oe--){const ve=oe/p,_e=d*Math.cos(ve*Math.PI/2),Le=g*Math.sin(ve*Math.PI/2)+x;for(let Se=0,He=I.length;Se<He;Se++){const Fe=k(I[Se],q[Se],Le);G(Fe.x,Fe.y,h+_e)}for(let Se=0,He=P.length;Se<He;Se++){const Fe=P[Se];ee=Z[Se];for(let $e=0,at=Fe.length;$e<at;$e++){const ft=k(Fe[$e],ee[$e],Le);y?G(ft.x,ft.y+S[u-1].y,S[u-1].x+_e):G(ft.x,ft.y,h+_e)}}}ne(),Te();function ne(){const oe=i.length/3;if(f){let ve=0,_e=U*ve;for(let Le=0;Le<$;Le++){const Se=de[Le];pe(Se[2]+_e,Se[1]+_e,Se[0]+_e)}ve=u+p*2,_e=U*ve;for(let Le=0;Le<$;Le++){const Se=de[Le];pe(Se[0]+_e,Se[1]+_e,Se[2]+_e)}}else{for(let ve=0;ve<$;ve++){const _e=de[ve];pe(_e[2],_e[1],_e[0])}for(let ve=0;ve<$;ve++){const _e=de[ve];pe(_e[0]+U*u,_e[1]+U*u,_e[2]+U*u)}}n.addGroup(oe,i.length/3-oe,0)}function Te(){const oe=i.length/3;let ve=0;F(I,ve),ve+=I.length;for(let _e=0,Le=P.length;_e<Le;_e++){const Se=P[_e];F(Se,ve),ve+=Se.length}n.addGroup(oe,i.length/3-oe,1)}function F(oe,ve){let _e=oe.length;for(;--_e>=0;){const Le=_e;let Se=_e-1;Se<0&&(Se=oe.length-1);for(let He=0,Fe=u+p*2;He<Fe;He++){const $e=U*He,at=U*(He+1),ft=ve+Le+$e,V=ve+Se+$e,Ct=ve+Se+at,lt=ve+Le+at;ue(ft,V,Ct,lt)}}}function G(oe,ve,_e){l.push(oe),l.push(ve),l.push(_e)}function pe(oe,ve,_e){Me(oe),Me(ve),Me(_e);const Le=i.length/3,Se=v.generateTopUV(n,i,Le-3,Le-2,Le-1);Ye(Se[0]),Ye(Se[1]),Ye(Se[2])}function ue(oe,ve,_e,Le){Me(oe),Me(ve),Me(Le),Me(ve),Me(_e),Me(Le);const Se=i.length/3,He=v.generateSideWallUV(n,i,Se-6,Se-3,Se-2,Se-1);Ye(He[0]),Ye(He[1]),Ye(He[3]),Ye(He[1]),Ye(He[2]),Ye(He[3])}function Me(oe){i.push(l[oe*3+0]),i.push(l[oe*3+1]),i.push(l[oe*3+2])}function Ye(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return gm(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Do[i.type]().fromJSON(i)),new Cr(n,e.options)}}const mm={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new me(r,o),new me(a,l),new me(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],x=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new me(o,1-l),new me(c,1-h),new me(f,1-g),new me(x,1-m)]:[new me(a,1-l),new me(u,1-h),new me(d,1-g),new me(p,1-m)]}};function gm(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Go extends sc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Go(e.radius,e.detail)}}class Is extends Nt{constructor(e=[new me(0,-.5),new me(.5,0),new me(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ut(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new z,f=new me,d=new z,g=new z,x=new z;let p=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,d.x=m*1,d.y=-p,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let v=0;v<=t;v++){const S=n+v*u*i,y=Math.sin(S),b=Math.cos(S);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*y,h.y=e[T].y,h.z=e[T].x*b,o.push(h.x,h.y,h.z),f.x=v/t,f.y=T/(e.length-1),a.push(f.x,f.y);const _=l[3*T+0]*y,M=l[3*T+1],C=l[3*T+0]*b;c.push(_,M,C)}}for(let v=0;v<t;v++)for(let S=0;S<e.length-1;S++){const y=S+v*e.length,b=y,T=y+e.length,_=y+e.length+1,M=y+1;r.push(b,T,M),r.push(_,M,T)}this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("uv",new dt(a,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.points,e.segments,e.phiStart,e.phiLength)}}class tn extends Nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],x=[],p=[];for(let m=0;m<u;m++){const v=m*f-o;for(let S=0;S<c;S++){const y=S*h-r;g.push(y,-v,0),x.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const S=v+c*m,y=v+c*(m+1),b=v+1+c*(m+1),T=v+1+c*m;d.push(S,y,T),d.push(y,b,T)}this.setIndex(d),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vo extends Nt{constructor(e=new $i([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new dt(i,3)),this.setAttribute("normal",new dt(r,3)),this.setAttribute("uv",new dt(o,2));function c(u){const h=i.length/3,f=u.extractPoints(t);let d=f.shape;const g=f.holes;pi.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const v=g[p];pi.isClockWise(v)===!0&&(g[p]=v.reverse())}const x=pi.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const v=g[p];d=d.concat(v)}for(let p=0,m=d.length;p<m;p++){const v=d[p];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let p=0,m=x.length;p<m;p++){const v=x[p],S=v[0]+h,y=v[1]+h,b=v[2]+h;n.push(S,y,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return _m(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Vo(n,e.curveSegments)}}function _m(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Wo extends Nt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new z,f=new z,d=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){const v=[],S=m/n,y=o+S*a,b=e*Math.cos(y),T=Math.sqrt(e*e-b*b);let _=0;m===0&&o===0?_=.5/t:m===n&&l===Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){const C=M/t,w=i+C*r;h.x=-T*Math.cos(w),h.y=b,h.z=T*Math.sin(w),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),p.push(C+_,1-S),v.push(c++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const S=u[m][v+1],y=u[m][v],b=u[m+1][v],T=u[m+1][v+1];(m!==0||o>0)&&d.push(S,y,T),(m!==n-1||l<Math.PI)&&d.push(y,b,T)}this.setIndex(d),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ui extends Nt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],h=[],f=new z,d=new z,g=new z;for(let x=0;x<=n;x++){const p=o+x/n*a;for(let m=0;m<=i;m++){const v=m/i*r;d.x=(e+t*Math.cos(p))*Math.cos(v),d.y=(e+t*Math.cos(p))*Math.sin(v),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),g.subVectors(d,f).normalize(),u.push(g.x,g.y,g.z),h.push(m/i),h.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=i;p++){const m=(i+1)*x+p-1,v=(i+1)*(x-1)+p-1,S=(i+1)*(x-1)+p,y=(i+1)*x+p;l.push(m,v,y),l.push(v,S,y)}this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class ac extends Nt{constructor(e=new gf(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new z,l=new z,c=new me;let u=new z;const h=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(d,2));function x(){for(let S=0;S<t;S++)p(S);p(r===!1?t:0),v(),m()}function p(S){u=e.getPointAt(S/t,u);const y=o.normals[S],b=o.binormals[S];for(let T=0;T<=i;T++){const _=T/i*Math.PI*2,M=Math.sin(_),C=-Math.cos(_);l.x=C*y.x+M*b.x,l.y=C*y.y+M*b.y,l.z=C*y.z+M*b.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let S=1;S<=t;S++)for(let y=1;y<=i;y++){const b=(i+1)*(S-1)+(y-1),T=(i+1)*S+(y-1),_=(i+1)*S+y,M=(i+1)*(S-1)+y;g.push(b,T,M),g.push(T,_,M)}}function v(){for(let S=0;S<=t;S++)for(let y=0;y<=i;y++)c.x=S/t,c.y=y/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ac(new Do[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ls(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(bu(i))i.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(bu(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function dn(s){const e={};for(let t=0;t<s.length;t++){const n=Ls(s[t]);for(const i in n)e[i]=n[i]}return e}function bu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function xm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Sf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const bf={clone:Ls,merge:dn};var vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=xm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ge().setHex(i.value);break;case"v2":this.uniforms[n].value=new me().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new St().fromArray(i.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ze().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Mm extends Vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yt extends Gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xn extends Yt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ms('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ms('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Sm extends Gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bm extends Gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ci(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function nr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Tm(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Tu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Em(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Fs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class wm extends Fs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vs,endingEnd:vs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ys:r=e,a=2*t-n;break;case Ao:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ys:o=e,l=2*n-t;break;case Ao:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),x=g*g,p=x*g,m=-f*p+2*f*x-f*g,v=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,S=(-1-d)*p+(1.5+d)*x+.5*g,y=d*p-d*x;for(let b=0;b!==a;++b)r[b]=m*o[u+b]+v*o[c+b]+S*o[l+b]+y*o[h+b];return r}}class Tf extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class Am extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rm extends Fs{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){const g=(n-t)/(i-t),x=1-g;for(let p=0;p!==a;++p)r[p]=o[c+p]*x+o[l+p]*g;return r}const f=a*2,d=e-1;for(let g=0;g!==a;++g){const x=o[c+g],p=o[l+g],m=d*f+g*2,v=h[m],S=h[m+1],y=e*f+g*2,b=u[y],T=u[y+1],_=Pm(n,t,v,b,i);r[g]=Ef(_,x,S,T,p)}return r}}function Ef(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Cm(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Pm(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){const a=Ef(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;const l=Cm(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class qn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ci(t,this.TimeBufferType),this.values=Ci(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ci(e.times,Array),values:Ci(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),nr(e.settings)&&(n.settings={inTangents:Ci(e.settings.inTangents,Array),outTangents:Ci(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Am(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Rm(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case xr:t=this.InterpolantFactoryMethodDiscrete;break;case vr:t=this.InterpolantFactoryMethodLinear;break;case jo:t=this.InterpolantFactoryMethodSmooth;break;case Fc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return jo;case this.InterpolantFactoryMethodBezier:return Fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;nr(this.settings)&&(Eu(this.settings.inTangents,e),Eu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;nr(this.settings)&&(wu(this.settings.inTangents,e),wu(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Wd(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===jo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,nr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Eu(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function wu(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=vr;class Os extends qn{constructor(e,t,n){super(e,t,n)}}Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=xr;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class wf extends qn{constructor(e,t,n,i){super(e,t,n,i)}}wf.prototype.ValueTypeName="color";class Er extends qn{constructor(e,t,n,i){super(e,t,n,i)}}Er.prototype.ValueTypeName="number";class Im extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)jt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class wr extends qn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Im(this.times,this.values,this.getValueSize(),e)}}wr.prototype.ValueTypeName="quaternion";wr.prototype.InterpolantFactoryMethodSmooth=void 0;class Bs extends qn{constructor(e,t,n){super(e,t,n)}}Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=xr;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class No extends qn{constructor(e,t,n,i){super(e,t,n,i)}}No.prototype.ValueTypeName="vector";class wl{constructor(e="",t=-1,n=[],i=ql){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Wn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Dm(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Tm(l);l=Tu(l,1,u),c=Tu(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Er(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Lm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Er;case"vector":case"vector2":case"vector3":case"vector4":return No;case"color":return wf;case"quaternion":return wr;case"bool":case"boolean":return Os;case"string":return Bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Dm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Lm(s.type);if(s.times===void 0){const n=[],i=[];Em(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),nr(s.settings)&&(t.settings={inTangents:Ci(s.settings.inTangents,Float32Array),outTangents:Ci(s.settings.outTangents,Float32Array)}),t}const mi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Au(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Au(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Au(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Nm{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Um=new Nm;class es{constructor(e){this.manager=e!==void 0?e:Um,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}es.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class Fm extends Error{constructor(e,t){super(e),this.response=t}}class lc extends es{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=mi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:n,onError:i});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ui[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let x=0;const p=new ReadableStream({start(m){v();function v(){h.read().then(({done:S,value:y})=>{if(S)m.close();else{x+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let T=0,_=u.length;T<_;T++){const M=u[T];M.onProgress&&M.onProgress(b)}m.enqueue(y),v()}},S=>{m.error(S)})}}});return new Response(p)}else throw new Fm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{mi.add(`file:${e}`,c);const u=ui[e];delete ui[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ui[e];if(u===void 0)throw this.manager.itemError(e),c;delete ui[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const fs=new WeakMap;class Om extends es{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=mi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=fs.get(o);h===void 0&&(h=[],fs.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=Mr("img");function l(){u(),t&&t(this);const h=fs.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}fs.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),mi.remove(`image:${e}`);const f=fs.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}fs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),mi.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}}class Bm extends es{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new As,a=new lc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){i!==void 0?i(u):Qe(u);return}r._applyTexData(o,c),t&&t(o,c)},n,i),o}createDataTexture(e){const t=new As;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Pn,e.wrapT=t.wrapT!==void 0?t.wrapT:Pn,e.magFilter=t.magFilter!==void 0?t.magFilter:Bt,e.minFilter=t.minFilter!==void 0?t.minFilter:Bt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=On),t.mipmapCount===1&&(e.minFilter=Bt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class cc extends es{constructor(e){super(e)}load(e,t,n,i){const r=new qt,o=new Om(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Xo extends Rt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class zm extends Xo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Aa=new Ze,Ru=new z,Cu=new z;class uc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ru),Cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Aa,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===yr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Aa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const oo=new z,ao=new jt,Yn=new z;class Af extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oo,ao,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,ao,Yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(oo,ao,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,ao,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wi=new z,Pu=new me,Iu=new me;class mn extends Af{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Pu,Iu),t.subVectors(Iu,Pu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class km extends uc{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ws*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Hm extends Xo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new km}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Gm extends uc{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}}class hc extends Xo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class fc extends Af{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vm extends uc{constructor(){super(new fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Al extends Xo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Vm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class fr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ra=new WeakMap;class Wm extends es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=mi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Ra.has(o)===!0?(i&&i(Ra.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}const a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return mi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ra.set(l,c),mi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});mi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ds=-90,ps=1;class Rl extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new mn(ds,ps,e,t);i.layers=this.layers,this.add(i);const r=new mn(ds,ps,e,t);r.layers=this.layers,this.add(r);const o=new mn(ds,ps,e,t);o.layers=this.layers,this.add(o);const a=new mn(ds,ps,e,t);a.layers=this.layers,this.add(a);const l=new mn(ds,ps,e,t);l.layers=this.layers,this.add(l);const c=new mn(ds,ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xm extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class qm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){jt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;jt.multiplyQuaternionsFlat(e,o,e,t,e,n),jt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const dc="\\[\\]\\.:\\/",Ym=new RegExp("["+dc+"]","g"),pc="[^"+dc+"]",Km="[^"+dc.replace("\\.","")+"]",Zm=/((?:WC+[\/:])*)/.source.replace("WC",pc),Jm=/(WCOD+)?/.source.replace("WCOD",Km),$m=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pc),Qm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pc),jm=new RegExp("^"+Zm+Jm+$m+Qm+"$"),e0=["material","materials","bones","map"];class t0{constructor(e,t,n){const i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ym,"")}static parseTrackName(e){const t=jm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);e0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=t0;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class n0{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:vs,endingEnd:vs};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Pd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ld:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case ql:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Id;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===qh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ys,i.endingEnd=ys):(e?i.endingStart=this.zeroSlopeAtStart?ys:vs:i.endingStart=Ao,t?i.endingEnd=this.zeroSlopeAtEnd?ys:vs:i.endingEnd=Ao)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const i0=new Float32Array(1);class s0 extends Bi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const f=i[h],d=f.name;let g=u[d];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const x=t&&t._propertyBindings[h].binding.parsedPath;g=new qm(Mt.create(n,d,x),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Tf(new Float32Array(2),new Float32Array(2),1,i0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?wl.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ql),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new n0(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?wl.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Lu=new Ze;class r0{constructor(e,t,n=0,i=1/0){this.ray=new Rr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new $l,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lu),this}intersectObject(e,t=!0,n=[]){return Cl(e,this,n,t),n.sort(Du),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Cl(e[i],this,n,t);return n.sort(Du),n}}function Du(s,e){return s.distance-e.distance}function Cl(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Cl(r[o],e,t,!0)}}function Nu(s,e,t,n){const i=o0(n);switch(t){case Wh:return s*e;case zo:return s*e/i.components*i.byteLength;case Vl:return s*e/i.components*i.byteLength;case Ji:return s*e*2/i.components*i.byteLength;case Wl:return s*e*2/i.components*i.byteLength;case Xh:return s*e*3/i.components*i.byteLength;case Bn:return s*e*4/i.components*i.byteLength;case Xl:return s*e*4/i.components*i.byteLength;case mo:case go:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _o:case xo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qa:case Ka:return Math.max(s,16)*Math.max(e,8)/4;case Xa:case Ya:return Math.max(s,8)*Math.max(e,8)/2;case Za:case Ja:case Qa:case ja:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $a:case Eo:case el:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case sl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case rl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ll:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case cl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ul:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case fl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case dl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ml:case gl:case _l:return Math.ceil(s/4)*Math.ceil(e/4)*16;case xl:case vl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case wo:case yl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o0(s){switch(s){case Tn:case kh:return{byteLength:1,components:1};case _r:case Hh:case vn:return{byteLength:2,components:1};case Hl:case Gl:return{byteLength:2,components:4};case jn:case kl:case _n:return{byteLength:4,components:1};case Gh:case Vh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bl}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bl);function Rf(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function a0(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const x=h[d];s.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var l0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,u0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,m0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,M0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,S0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,I0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,L0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O0="gl_FragColor = linearToOutputTexel( gl_FragColor );",B0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,W0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,j0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,og=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ag=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_g=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,o_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u_=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,S_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,w_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,L_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,F_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:l0,alphahash_pars_fragment:c0,alphamap_fragment:u0,alphamap_pars_fragment:h0,alphatest_fragment:f0,alphatest_pars_fragment:d0,aomap_fragment:p0,aomap_pars_fragment:m0,batching_pars_vertex:g0,batching_vertex:_0,begin_vertex:x0,beginnormal_vertex:v0,bsdfs:y0,iridescence_fragment:M0,bumpmap_pars_fragment:S0,clipping_planes_fragment:b0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:E0,clipping_planes_vertex:w0,color_fragment:A0,color_pars_fragment:R0,color_pars_vertex:C0,color_vertex:P0,common:I0,defaultnormal_vertex:L0,displacementmap_pars_vertex:D0,displacementmap_vertex:N0,emissivemap_fragment:U0,emissivemap_pars_fragment:F0,colorspace_fragment:O0,colorspace_pars_fragment:B0,envmap_fragment:z0,envmap_common_pars_fragment:k0,envmap_pars_fragment:H0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:j0,envmap_vertex:V0,fog_vertex:W0,fog_pars_vertex:X0,fog_fragment:q0,fog_pars_fragment:Y0,gradientmap_pars_fragment:K0,lightmap_pars_fragment:Z0,lights_lambert_fragment:J0,lights_lambert_pars_fragment:$0,lights_pars_begin:Q0,lights_toon_fragment:eg,lights_toon_pars_fragment:tg,lights_phong_fragment:ng,lights_phong_pars_fragment:ig,lights_physical_fragment:sg,lights_physical_pars_fragment:rg,lights_fragment_begin:og,lights_fragment_maps:ag,lights_fragment_end:lg,lightprobes_pars_fragment:cg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:hg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:dg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:gg,map_particle_pars_fragment:_g,metalnessmap_fragment:xg,metalnessmap_pars_fragment:vg,morphinstance_vertex:yg,morphcolor_vertex:Mg,morphnormal_vertex:Sg,morphtarget_pars_vertex:bg,morphtarget_vertex:Tg,normal_fragment_begin:Eg,normal_fragment_maps:wg,normal_pars_fragment:Ag,normal_pars_vertex:Rg,normal_vertex:Cg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Dg,iridescence_pars_fragment:Ng,opaque_fragment:Ug,packing:Fg,premultiplied_alpha_fragment:Og,project_vertex:Bg,dithering_fragment:zg,dithering_pars_fragment:kg,roughnessmap_fragment:Hg,roughnessmap_pars_fragment:Gg,shadowmap_pars_fragment:Vg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:qg,skinbase_vertex:Yg,skinning_pars_vertex:Kg,skinning_vertex:Zg,skinnormal_vertex:Jg,specularmap_fragment:$g,specularmap_pars_fragment:Qg,tonemapping_fragment:jg,tonemapping_pars_fragment:e_,transmission_fragment:t_,transmission_pars_fragment:n_,uv_pars_fragment:i_,uv_pars_vertex:s_,uv_vertex:r_,worldpos_vertex:o_,background_vert:a_,background_frag:l_,backgroundCube_vert:c_,backgroundCube_frag:u_,cube_vert:h_,cube_frag:f_,depth_vert:d_,depth_frag:p_,distance_vert:m_,distance_frag:g_,equirect_vert:__,equirect_frag:x_,linedashed_vert:v_,linedashed_frag:y_,meshbasic_vert:M_,meshbasic_frag:S_,meshlambert_vert:b_,meshlambert_frag:T_,meshmatcap_vert:E_,meshmatcap_frag:w_,meshnormal_vert:A_,meshnormal_frag:R_,meshphong_vert:C_,meshphong_frag:P_,meshphysical_vert:I_,meshphysical_frag:L_,meshtoon_vert:D_,meshtoon_frag:N_,points_vert:U_,points_frag:F_,shadow_vert:O_,shadow_frag:B_,sprite_vert:z_,sprite_frag:k_},Ue={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},$n={basic:{uniforms:dn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:dn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:dn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:dn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:dn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:dn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:dn([Ue.points,Ue.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:dn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:dn([Ue.common,Ue.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:dn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:dn([Ue.sprite,Ue.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:dn([Ue.common,Ue.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:dn([Ue.lights,Ue.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};$n.physical={uniforms:dn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const lo={r:0,b:0,g:0},H_=new Ze,Cf=new tt;Cf.set(-1,0,0,0,1,0,0,0,1);function G_(s,e,t,n,i,r){const o=new Ge(0);let a=i===!0?0:1,l,c,u=null,h=0,f=null;function d(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const y=v.backgroundBlurriness>0;S=e.get(S,y)}return S}function g(v){let S=!1;const y=d(v);y===null?p(o,a):y&&y.isColor&&(p(y,1),S=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,S){const y=d(S);y&&y.isCubeTexture?(c===void 0&&(c=new cn(new zi(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Ls($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(H_.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cf),c.material.toneMapped=pt.getTransfer(y.colorSpace)!==Tt,(u!==y||h!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new cn(new tn(2,2),new Vn({name:"BackgroundMaterial",uniforms:Ls($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=pt.getTransfer(y.colorSpace)!==Tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,S){v.getRGB(lo,Sf(s)),t.buffers.color.setClear(lo.r,lo.g,lo.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:g,addToRenderList:x,dispose:m}}function V_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(P,N,W,R,I){let k=!1;const U=h(P,R,W,N);r!==U&&(r=U,c(r.object)),k=d(P,R,W,I),k&&g(P,R,W,I),I!==null&&e.update(I,s.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(P,N,W,R),I!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function u(P){return s.deleteVertexArray(P)}function h(P,N,W,R){const I=R.wireframe===!0;let k=n[N.id];k===void 0&&(k={},n[N.id]=k);const U=P.isInstancedMesh===!0?P.id:0;let K=k[U];K===void 0&&(K={},k[U]=K);let q=K[W.id];q===void 0&&(q={},K[W.id]=q);let Z=q[I];return Z===void 0&&(Z=f(l()),q[I]=Z),Z}function f(P){const N=[],W=[],R=[];for(let I=0;I<t;I++)N[I]=0,W[I]=0,R[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:R,object:P,attributes:{},index:null}}function d(P,N,W,R){const I=r.attributes,k=N.attributes;let U=0;const K=W.getAttributes();for(const q in K)if(K[q].location>=0){const ee=I[q];let ce=k[q];if(ce===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),ee===void 0||ee.attribute!==ce||ce&&ee.data!==ce.data)return!0;U++}return r.attributesNum!==U||r.index!==R}function g(P,N,W,R){const I={},k=N.attributes;let U=0;const K=W.getAttributes();for(const q in K)if(K[q].location>=0){let ee=k[q];ee===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));const ce={};ce.attribute=ee,ee&&ee.data&&(ce.data=ee.data),I[q]=ce,U++}r.attributes=I,r.attributesNum=U,r.index=R}function x(){const P=r.newAttributes;for(let N=0,W=P.length;N<W;N++)P[N]=0}function p(P){m(P,0)}function m(P,N){const W=r.newAttributes,R=r.enabledAttributes,I=r.attributeDivisors;W[P]=1,R[P]===0&&(s.enableVertexAttribArray(P),R[P]=1),I[P]!==N&&(s.vertexAttribDivisor(P,N),I[P]=N)}function v(){const P=r.newAttributes,N=r.enabledAttributes;for(let W=0,R=N.length;W<R;W++)N[W]!==P[W]&&(s.disableVertexAttribArray(W),N[W]=0)}function S(P,N,W,R,I,k,U){U===!0?s.vertexAttribIPointer(P,N,W,I,k):s.vertexAttribPointer(P,N,W,R,I,k)}function y(P,N,W,R){x();const I=R.attributes,k=W.getAttributes(),U=N.defaultAttributeValues;for(const K in k){const q=k[K];if(q.location>=0){let Z=I[K];if(Z===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){const ee=Z.normalized,ce=Z.itemSize,de=e.get(Z);if(de===void 0)continue;const $=de.buffer,ge=de.type,ne=de.bytesPerElement,Te=ge===s.INT||ge===s.UNSIGNED_INT||Z.gpuType===kl;if(Z.isInterleavedBufferAttribute){const F=Z.data,G=F.isInterleavedBuffer===!0?F.stride:F.itemSize,pe=Z.offset;if(F.isInstancedInterleavedBuffer||F.isInstancedBufferAttribute){for(let ue=0;ue<q.locationSize;ue++)m(q.location+ue,F.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ue=0;ue<q.locationSize;ue++)p(q.location+ue);s.bindBuffer(s.ARRAY_BUFFER,$);for(let ue=0;ue<q.locationSize;ue++)S(q.location+ue,ce/q.locationSize,ge,ee,G*ne,(pe+ce/q.locationSize*ue)*ne,Te)}else{if(Z.isInstancedBufferAttribute){for(let F=0;F<q.locationSize;F++)m(q.location+F,Z.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let F=0;F<q.locationSize;F++)p(q.location+F);s.bindBuffer(s.ARRAY_BUFFER,$);for(let F=0;F<q.locationSize;F++)S(q.location+F,ce/q.locationSize,ge,ee,ce*ne,ce/q.locationSize*F*ne,Te)}}else if(U!==void 0){const ee=U[K];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(q.location,ee);break;case 3:s.vertexAttrib3fv(q.location,ee);break;case 4:s.vertexAttrib4fv(q.location,ee);break;default:s.vertexAttrib1fv(q.location,ee)}}}}v()}function b(){C();for(const P in n){const N=n[P];for(const W in N){const R=N[W];for(const I in R){const k=R[I];for(const U in k)u(k[U].object),delete k[U];delete R[I]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;const N=n[P.id];for(const W in N){const R=N[W];for(const I in R){const k=R[I];for(const U in k)u(k[U].object),delete k[U];delete R[I]}}delete n[P.id]}function _(P){for(const N in n){const W=n[N];for(const R in W){const I=W[R];if(I[P.id]===void 0)continue;const k=I[P.id];for(const U in k)u(k[U].object),delete k[U];delete I[P.id]}}}function M(P){for(const N in n){const W=n[N],R=P.isInstancedMesh===!0?P.id:0,I=W[R];if(I!==void 0){for(const k in I){const U=I[k];for(const K in U)u(U[K].object),delete U[K];delete I[k]}delete W[R],Object.keys(W).length===0&&delete n[N]}}}function C(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function W_(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function X_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(_){return!(_!==Bn&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){const M=_===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Tn&&_!==_n&&!M&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,maxSamples:b,samples:T}}function q_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new hi,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const v=r?0:n,S=v*4;let y=m.clippingState||null;l.value=y,y=u(g,f,S,d);for(let b=0;b!==S;++b)y[b]=t[b];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,y=d;S!==x;++S,y+=4)o.copy(h[S]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}class mc extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new cf(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new zi(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Zi});r.uniforms.tEquirect.value=t;const o=new cn(i,r),a=t.minFilter;return t.minFilter===On&&(t.minFilter=Bt),new Rl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Uu=256,Y_=3,K_=20,Pf=256,If=16,Z_=3,J_=new z,$_=new Ge;class Uo{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Rl(1,10,null),this._boxMesh=new cn(new zi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=J_}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const h=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor($_));const p=new Rl(n,i,u);return p.position.copy(a),p.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=g,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Uu,jh(e))}_fromTexture(e,t){e.mapping===Ts||e.mapping===gr?this._setSize(e.image.length===0?Uu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Fu(e,!1,!1),n=Math.log2(e)-Y_;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Fu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ts||e.mapping===gr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ou()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Q_(),this._integrationMaterial=j_());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/If);for(let o=0;o<=n;o++){const a=Uo.lodToRoughness(o,n);if(o>n-Z_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{const l=a>0?Math.log2(t)+.5*Math.log2(6/(Pf*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=ex());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}}function Fu(s,e,t){return new mc(s,{minFilter:On,generateMipmaps:e,type:vn,colorSpace:yn,depthBuffer:t})}function Pr(s,e,t){return new Vn({name:s,uniforms:e,vertexShader:ct.cube_vert,fragmentShader:t,side:gn,blending:Zi,depthTest:!1,depthWrite:!1})}function Q_(){return Pr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Pf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function j_(){return Pr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:If}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ex(){return Pr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${K_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ou(){return Pr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Bu(){return Pr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function tx(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===fo||d===Qo)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const x=new mc(g.height);return x.fromEquirectangularTexture(s,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const d=f.mapping,g=d===fo||d===Qo,x=d===Ts||d===gr;if(g||x){let p=t.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Uo(s)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const v=f.image;return g&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Uo(s)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,d){return d===fo?f.mapping=Ts:d===Qo&&(f.mapping=gr),f}function l(f){let d=0;const g=6;for(let x=0;x<g;x++)f[x]!==void 0&&d++;return d===g}function c(f){const d=f.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function nx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ms("WebGLRenderer: "+n+" extension not supported."),i}}}function ix(s,e,t,n){const i={},r=new WeakMap,o=new FinalizationRegistry(g=>delete i[g]);function a(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete i[g.id],o.unregister(g);const x=r.get(g);x&&(e.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(g){const x=g.attributes;for(const p in x)e.update(x[p],s.ARRAY_BUFFER)}function h(g){const x=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const v=x!==null?x.array.length:p.array.length/3-1,S=p.count>=65535?sf:nf,y=new S(Math.ceil(v/3)*6,1),b=y.array;if(x!==null){const _=x.array;m=x.version;for(let M=0,C=0;M<v;M+=3){const w=_[M+0],P=_[M+1],N=_[M+2];b[C++]=w,b[C++]=P,b[C++]=P,b[C++]=N,b[C++]=N,b[C++]=w}}else{m=p.version;for(let _=0,M=0;_<v;_+=3){const C=_+0,w=_+1,P=_+2;b[M++]=C,b[M++]=w,b[M++]=w,b[M++]=P,b[M++]=P,b[M++]=C}}y.version=m;const T=r.get(g);T&&e.remove(T),r.set(g,y)}function f(g){const x=r.get(g);if(x){const p=g.index;p!==null&&x.version<p.version&&h(g)}else h(g);return r.get(g)}function d(){for(const g in i){const x=i[g].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:f,dispose:d}}function sx(s,e,t){let n;function i(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){s.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let x=0;for(let p=0;p<d;p++)x+=f[p];t.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function rx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ox(s,e,t){const n=new WeakMap,i=new St;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let w=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var d=w;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),p===!0&&(y=3);let b=a.attributes.position.count*y,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const _=new Float32Array(b*T*4*h),M=new ef(_,b,T,h);M.type=_n,M.needsUpdate=!0;const C=y*4;for(let P=0;P<h;P++){const N=m[P],W=v[P],R=S[P],I=b*T*4*P;for(let k=0;k<N.count;k++){const U=k*C;g===!0&&(i.fromBufferAttribute(N,k),_[I+U+0]=i.x,_[I+U+1]=i.y,_[I+U+2]=i.z,_[I+U+3]=0),x===!0&&(i.fromBufferAttribute(W,k),_[I+U+4]=i.x,_[I+U+5]=i.y,_[I+U+6]=i.z,_[I+U+7]=0),p===!0&&(i.fromBufferAttribute(R,k),_[I+U+8]=i.x,_[I+U+9]=i.y,_[I+U+10]=i.z,_[I+U+11]=R.itemSize===4?i.w:1)}}f={count:h,texture:M,size:new me(b,T)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function ax(s,e,t,n,i){let r=new WeakMap;function o(c){const u=i.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const lx={[Lh]:"LINEAR_TONE_MAPPING",[Dh]:"REINHARD_TONE_MAPPING",[Nh]:"CINEON_TONE_MAPPING",[zl]:"ACES_FILMIC_TONE_MAPPING",[Fh]:"AGX_TONE_MAPPING",[Oh]:"NEUTRAL_TONE_MAPPING",[Uh]:"CUSTOM_TONE_MAPPING"};function cx(s,e,t,n,i,r){const o=new Hn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const u=new Nt;u.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new dt([0,2,0,0,2,0],2));const h=new Mm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new cn(u,h),d=new fc(-1,1,1,-1,0,1);let g=null,x=null,p=!1,m,v=null,S=[],y=!1;this.setSize=function(b,T){o.setSize(b,T),a!==null&&a.setSize(b,T),l!==null&&l.setSize(b,T);for(let _=0;_<S.length;_++){const M=S[_];M.setSize&&M.setSize(b,T)}},this.setEffects=function(b){S=b,y=S.length>0&&S[0].isRenderPass===!0;const T=o.width,_=o.height;S.length>0&&a===null&&(a=new Hn(T,_,{type:vn,depthBuffer:!1,stencilBuffer:!1}),l=new Hn(T,_,{type:vn,depthBuffer:!1,stencilBuffer:!1}));const M=i===!0&&S.some(C=>C.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new Cs(T,_),r===!0&&(c.format=Li,c.type=Es)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let C=0;C<S.length;C++){const w=S[C];w.setSize&&w.setSize(T,_),M&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(b,T){if(p||b.toneMapping===_i&&S.length===0)return!1;if(v=T,T!==null){const _=T.width,M=T.height;(o.width!==_||o.height!==M)&&this.setSize(_,M)}return y===!1&&b.setRenderTarget(o),m=b.toneMapping,b.toneMapping=_i,!0},this.hasRenderPass=function(){return y},this.end=function(b,T){b.toneMapping=m,p=!0;let _=o,M=a;for(let C=0;C<S.length;C++){const w=S[C];w.enabled!==!1&&(w.render(b,M,_,T),w.needsSwap!==!1&&(_=M,M=M===a?l:a))}if(g!==b.outputColorSpace||x!==b.toneMapping){g=b.outputColorSpace,x=b.toneMapping,h.defines={},pt.getTransfer(g)===Tt&&(h.defines.SRGB_TRANSFER="");const C=lx[x];C&&(h.defines[C]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(v),b.render(f,d),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}const Lf=new qt,Df=new Cs(1,1),Nf=new uf(1),Uf=new ef,Ff=new pp,Of=new cf,zu=[],ku=[],Hu=new Float32Array(16),Gu=new Float32Array(9),Vu=new Float32Array(4);function zs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=zu[i];if(r===void 0&&(r=new Float32Array(i),zu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Kt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Zt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function qo(s,e){let t=ku[e];t===void 0&&(t=new Int32Array(e),ku[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ux(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function hx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2fv(this.addr,e),Zt(t,e)}}function fx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;s.uniform3fv(this.addr,e),Zt(t,e)}}function dx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4fv(this.addr,e),Zt(t,e)}}function px(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,n))return;Vu.set(n),s.uniformMatrix2fv(this.addr,!1,Vu),Zt(t,n)}}function mx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,n))return;Gu.set(n),s.uniformMatrix3fv(this.addr,!1,Gu),Zt(t,n)}}function gx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,n))return;Hu.set(n),s.uniformMatrix4fv(this.addr,!1,Hu),Zt(t,n)}}function _x(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function xx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2iv(this.addr,e),Zt(t,e)}}function vx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3iv(this.addr,e),Zt(t,e)}}function yx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4iv(this.addr,e),Zt(t,e)}}function Mx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2uiv(this.addr,e),Zt(t,e)}}function bx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3uiv(this.addr,e),Zt(t,e)}}function Tx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4uiv(this.addr,e),Zt(t,e)}}function Yo(s){return s.version===0&&(s.compareFunction=Jh,s.needsUpdate=!0),s}function Ex(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Yo(Df):r=Lf,t.setTexture2D(e||r,i)}function wx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ff,i)}function Ax(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Yo(Nf):r=Of,t.setTextureCube(e||r,i)}function Rx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Uf,i)}function Cx(s){switch(s){case 5126:return ux;case 35664:return hx;case 35665:return fx;case 35666:return dx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return _x;case 35667:case 35671:return xx;case 35668:case 35672:return vx;case 35669:case 35673:return yx;case 5125:return Mx;case 36294:return Sx;case 36295:return bx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Rx}}function Px(s,e){s.uniform1fv(this.addr,e)}function Ix(s,e){const t=zs(e,this.size,2);s.uniform2fv(this.addr,t)}function Lx(s,e){const t=zs(e,this.size,3);s.uniform3fv(this.addr,t)}function Dx(s,e){const t=zs(e,this.size,4);s.uniform4fv(this.addr,t)}function Nx(s,e){const t=zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ux(s,e){const t=zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Fx(s,e){const t=zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ox(s,e){s.uniform1iv(this.addr,e)}function Bx(s,e){s.uniform2iv(this.addr,e)}function zx(s,e){s.uniform3iv(this.addr,e)}function kx(s,e){s.uniform4iv(this.addr,e)}function Hx(s,e){s.uniform1uiv(this.addr,e)}function Gx(s,e){s.uniform2uiv(this.addr,e)}function Vx(s,e){s.uniform3uiv(this.addr,e)}function Wx(s,e){s.uniform4uiv(this.addr,e)}function Xx(s,e,t){const n=this.cache,i=e.length,r=qo(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Yo(Df):o=Lf;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function qx(s,e,t){const n=this.cache,i=e.length,r=qo(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ff,r[o])}function Yx(s,e,t){const n=this.cache,i=e.length,r=qo(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Yo(Nf):o=Of;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function Kx(s,e,t){const n=this.cache,i=e.length,r=qo(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Uf,r[o])}function Zx(s){switch(s){case 5126:return Px;case 35664:return Ix;case 35665:return Lx;case 35666:return Dx;case 35674:return Nx;case 35675:return Ux;case 35676:return Fx;case 5124:case 35670:return Ox;case 35667:case 35671:return Bx;case 35668:case 35672:return zx;case 35669:case 35673:return kx;case 5125:return Hx;case 36294:return Gx;case 36295:return Vx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return Kx}}class Jx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cx(t.type)}}class $x{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zx(t.type)}}class Qx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function Wu(s,e){s.seq.push(e),s.map[e.id]=e}function jx(s,e,t){const n=s.name,i=n.length;for(Ca.lastIndex=0;;){const r=Ca.exec(n),o=Ca.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Wu(t,c===void 0?new Jx(a,s,e):new $x(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Qx(a),Wu(t,h)),t=h}}}class vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);jx(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Xu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const ev=37297;let tv=0;function nv(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const qu=new tt;function iv(s){pt._getMatrix(qu,pt.workingColorSpace,s);const e=`mat3( ${qu.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(s)){case Ro:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Yu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+nv(s.getShaderSource(e),a)}else return r}function sv(s,e){const t=iv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const rv={[Lh]:"Linear",[Dh]:"Reinhard",[Nh]:"Cineon",[zl]:"ACESFilmic",[Fh]:"AgX",[Oh]:"Neutral",[Uh]:"Custom"};function ov(s,e){const t=rv[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const co=new z;function av(){pt.getLuminanceCoefficients(co);const s=co.x.toFixed(4),e=co.y.toFixed(4),t=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function cv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ir(s){return s!==""}function Ku(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Zu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(s){return s.replace(hv,fv)}function fv(s,e){const t=ct[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Pl(t)}const dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(s){return s.replace(dv,pv)}function pv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $u(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const mv={[or]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function gv(s){return mv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _v={[gr]:"ENVMAP_MODE_REFRACTION"};function xv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":_v[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vv={[Ih]:"ENVMAP_BLENDING_MULTIPLY",[Ad]:"ENVMAP_BLENDING_MIX",[Rd]:"ENVMAP_BLENDING_ADD"};function yv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":vv[s.combine]||"ENVMAP_BLENDING_NONE"}function Mv(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=xv(t),h=yv(t),f=lv(t),d=cv(r),g=i.createProgram();let x,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ir).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ir).join(`
`),p.length>0&&(p+=`
`)):(x=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),p=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?ct.tonemapping_pars_fragment:"",t.toneMapping!==_i?ov("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,sv("linearToOutputTexel",t.outputColorSpace),av(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),o=Pl(o),o=Ku(o,t),o=Zu(o,t),a=Pl(a),a=Ku(a,t),a=Zu(a,t),o=Ju(o),a=Ju(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=m+x+o,S=m+p+a,y=Xu(i,i.VERTEX_SHADER,v),b=Xu(i,i.FRAGMENT_SHADER,S);i.attachShader(g,y),i.attachShader(g,b),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(w){if(s.debug.checkShaderErrors){const P=i.getProgramInfoLog(g)||"",N=i.getShaderInfoLog(y)||"",W=i.getShaderInfoLog(b)||"",R=P.trim(),I=N.trim(),k=W.trim();let U=!0,K=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,y,b);else{const q=Yu(i,y,"vertex"),Z=Yu(i,b,"fragment");Qe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+R+`
`+q+`
`+Z)}else R!==""?qe("WebGLProgram: Program Info Log:",R):(I===""||k==="")&&(K=!1);K&&(w.diagnostics={runnable:U,programLog:R,vertexShader:{log:I,prefix:x},fragmentShader:{log:k,prefix:p}})}i.deleteShader(y),i.deleteShader(b),_=new vo(i,g),M=uv(i,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(g,ev)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=b,this}let Sv=0;class bv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Tv(e),t.set(e,n)),n}}class Tv{constructor(e){this.id=Sv++,this.code=e,this.usedTimes=0}}function Ev(s){return s===Ji||s===Eo||s===wo}function wv(s,e,t,n,i,r){const o=new $l,a=new bv,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,M,C,w,P,N){const W=w.fog,R=P.geometry,I=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?w.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=e.get(_.envMap||I,k),K=f[_.type];let q=n.precision;_.precision!==null&&(q=n.getMaxPrecision(_.precision),q!==_.precision&&qe("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));const Z=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ee=Z!==void 0?Z.length:0;let ce=0;R.morphAttributes.position!==void 0&&(ce=1),R.morphAttributes.normal!==void 0&&(ce=2),R.morphAttributes.color!==void 0&&(ce=3);let de,$,ge,ne;if(K){const xe=$n[K];de=xe.vertexShader,$=xe.fragmentShader}else{de=_.vertexShader,$=_.fragmentShader;const xe=a.getVertexShaderStage(_),st=a.getFragmentShaderStage(_);a.update(_,xe,st),ge=xe.id,ne=st.id}const Te=s.getRenderTarget(),F=s.state.buffers.depth.getReversed(),G=P.isInstancedMesh===!0,pe=P.isBatchedMesh===!0,ue=!!_.map,Me=!!_.matcap,Ye=!!U,oe=Ye&&U.isPMREMTexture===!0,ve=!!_.aoMap,_e=!!_.lightMap,Le=!!_.bumpMap&&_.wireframe===!1,Se=!!_.normalMap,He=!!_.displacementMap,Fe=!!_.emissiveMap,$e=!!_.metalnessMap,at=!!_.roughnessMap,ft=_.anisotropy>0,V=_.clearcoat>0,Ct=_.diffuseRoughness>0,lt=_.dispersion>0,bt=_.retroreflectivity>0,Pe=_.iridescence>0,Ut=_.sheen>0,Ke=_.transmission>0,Je=ft&&!!_.anisotropyMap,L=V&&!!_.clearcoatMap,E=V&&!!_.clearcoatNormalMap,J=V&&!!_.clearcoatRoughnessMap,ye=Ct&&!!_.diffuseRoughnessMap,he=Pe&&!!_.iridescenceMap,Ae=Pe&&!!_.iridescenceThicknessMap,be=Ut&&!!_.sheenColorMap,ae=Ut&&!!_.sheenRoughnessMap,se=!!_.specularMap,Ce=!!_.specularColorMap,O=!!_.specularIntensityMap,le=Ke&&!!_.transmissionMap,ie=Ke&&!!_.thicknessMap,Ie=!!_.gradientMap,Ee=!!_.alphaMap,Re=_.alphaTest>0,Ve=!!_.alphaHash,B=!!_.extensions;let Y=_i;_.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Y=s.toneMapping);const fe=oe?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,we={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:de,fragmentShader:$,defines:_.defines,customVertexShaderID:ge,customFragmentShaderID:ne,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:pe,batchingColor:pe&&P._colorsTexture!==null,instancing:G,instancingColor:G&&P.instanceColor!==null,instancingMorph:G&&P.morphTexture!==null,outputColorSpace:Te===null?s.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ue,matcap:Me,envMap:Ye,envMapMode:Ye&&U.mapping,envMapPMREM:oe,envMapMaxLod:oe?fe.length-1:null,envMapSize:oe?fe[0].width:null,aoMap:ve,lightMap:_e,bumpMap:Le,normalMap:Se,displacementMap:He,emissiveMap:Fe,normalMapObjectSpace:Se&&_.normalMapType===Ud,normalMapTangentSpace:Se&&_.normalMapType===Sl,packedNormalMap:Se&&_.normalMapType===Sl&&Ev(_.normalMap.format),metalnessMap:$e,roughnessMap:at,anisotropy:ft,anisotropyMap:Je,clearcoat:V,clearcoatMap:L,clearcoatNormalMap:E,clearcoatRoughnessMap:J,diffuseRoughness:Ct,diffuseRoughnessMap:ye,dispersion:lt,retroreflection:bt,iridescence:Pe,iridescenceMap:he,iridescenceThicknessMap:Ae,sheen:Ut,sheenColorMap:be,sheenRoughnessMap:ae,specularMap:se,specularColorMap:Ce,specularIntensityMap:O,transmission:Ke,transmissionMap:le,thicknessMap:ie,gradientMap:Ie,opaque:_.transparent===!1&&_.blending===ar&&_.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Re,alphaHash:Ve,combine:_.combine,mapUv:ue&&d(_.map.channel),aoMapUv:ve&&d(_.aoMap.channel),lightMapUv:_e&&d(_.lightMap.channel),bumpMapUv:Le&&d(_.bumpMap.channel),normalMapUv:Se&&d(_.normalMap.channel),displacementMapUv:He&&d(_.displacementMap.channel),emissiveMapUv:Fe&&d(_.emissiveMap.channel),metalnessMapUv:$e&&d(_.metalnessMap.channel),roughnessMapUv:at&&d(_.roughnessMap.channel),anisotropyMapUv:Je&&d(_.anisotropyMap.channel),clearcoatMapUv:L&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:E&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:he&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:be&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:ae&&d(_.sheenRoughnessMap.channel),specularMapUv:se&&d(_.specularMap.channel),specularColorMapUv:Ce&&d(_.specularColorMap.channel),specularIntensityMapUv:O&&d(_.specularIntensityMap.channel),transmissionMapUv:le&&d(_.transmissionMap.channel),thicknessMapUv:ie&&d(_.thicknessMap.channel),alphaMapUv:Ee&&d(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Se||ft),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!R.attributes.uv&&(ue||Ee),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&Se===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:F,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ce,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:N.filter(xe=>xe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Y,decodeVideoTexture:ue&&_.map.isVideoTexture===!0&&pt.getTransfer(_.map.colorSpace)===Tt,decodeVideoTextureEmissive:Fe&&_.emissiveMap.isVideoTexture===!0&&pt.getTransfer(_.emissiveMap.colorSpace)===Tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ln,flipSided:_.side===gn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:B&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(B&&_.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function x(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)M.push(C),M.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(M,_),m(M,_),M.push(s.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function p(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function m(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){const M=f[_.type];let C;if(M){const w=$n[M];C=bf.clone(w.uniforms)}else C=_.uniforms;return C}function S(_,M){let C=u.get(M);return C!==void 0?++C.usedTimes:(C=new Mv(s,M,_,i),c.push(C),u.set(M,C)),C}function y(_){if(--_.usedTimes===0){const M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function T(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:v,acquireProgram:S,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:T}}function Av(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Rv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Qu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ju(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,x,p,m){let v=s[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:m},s[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=g,v.materialVariant=o(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=p,v.group=m),e++,v}function l(f,d,g,x,p,m,v){v.reversedDepth===!0&&(p=-p);const S=a(f,d,g,x,p,m);g.transmission>0?n.push(S):g.transparent===!0?i.push(S):t.push(S)}function c(f,d,g,x,p,m){const v=a(f,d,g,x,p,m);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}function u(f,d){t.length>1&&t.sort(f||Rv),n.length>1&&n.sort(d||Qu),i.length>1&&i.sort(d||Qu)}function h(){for(let f=e,d=s.length;f<d;f++){const g=s[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:h,sort:u}}function Cv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new ju,s.set(n,[o])):i>=r.length?(o=new ju,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Pv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Ge};break;case"SpotLight":t={position:new z,direction:new z,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new z,halfWidth:new z,halfHeight:new z};break}return s[e.id]=t,t}}}function Iv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Lv=0;function Dv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Nv(s){const e=new Pv,t=Iv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,r=new Ze,o=new Ze;function a(c){let u=0,h=0,f=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,v=0,S=0,y=0,b=0,T=0,_=0,M=0,C=0,w=0;c.sort(Dv);for(let N=0,W=c.length;N<W;N++){const R=c[N],I=R.color,k=R.intensity,U=R.distance;let K=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ji?K=R.shadow.map.texture:K=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=I.r*k,h+=I.g*k,f+=I.b*k;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],k);w++}else if(R.isSunLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,ee=t.get(R);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[g]=ee,n.sunShadowMap[g]=K;const ce=Z.getViewportCount();for(let de=0;de<ce;de++)n.sunShadowMatrix[x+de]=Z.getMatrix(de),n.sunShadowCascade[x+de]=Z._cascadeData[de];x+=ce,g++}n.sun[d]=q,d++}else if(R.isDirectionalLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,ee=t.get(R);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=R.shadow.matrix,b++}n.directional[p]=q,p++}else if(R.isSpotLight){const q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(I).multiplyScalar(k),q.distance=U,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[v]=q;const Z=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,Z.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[v]=Z.matrix,R.castShadow){const ee=t.get(R);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.spotShadow[v]=ee,n.spotShadowMap[v]=K,_++}v++}else if(R.isRectAreaLight){const q=e.get(R);q.color.copy(I).multiplyScalar(k),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[S]=q,S++}else if(R.isPointLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const Z=R.shadow,ee=t.get(R);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,n.pointShadow[m]=ee,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=R.shadow.matrix,T++}n.point[m]=q,m++}else if(R.isHemisphereLight){const q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(k),q.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[y]=q,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.sunLength!==d||P.directionalLength!==p||P.pointLength!==m||P.spotLength!==v||P.rectAreaLength!==S||P.hemiLength!==y||P.numSunShadows!==g||P.numDirectionalShadows!==b||P.numPointShadows!==T||P.numSpotShadows!==_||P.numSpotMaps!==M||P.numLightProbes!==w)&&(n.sun.length=d,n.directional.length=p,n.spot.length=v,n.rectArea.length=S,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-C,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,P.sunLength=d,P.directionalLength=p,P.pointLength=m,P.spotLength=v,P.rectAreaLength=S,P.hemiLength=y,P.numSunShadows=g,P.numDirectionalShadows=b,P.numPointShadows=T,P.numSpotShadows=_,P.numSpotMaps=M,P.numLightProbes=w,n.version=Lv++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0,p=0;const m=u.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){const y=c[v];if(y.isSunLight){const b=n.sun[h];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),h++}else if(y.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),f++}else if(y.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const b=n.hemi[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function eh(s){const e=new Nv(s),t=[],n=[],i=[];function r(h){u.camera=h,t.length=0,n.length=0,i.length=0}function o(h){h.isLightProbeGrid?i.push(h):t.push(h)}function a(h){n.push(h)}function l(){e.setup(t),i.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Uv(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new eh(s),e.set(i,[a])):r>=o.length?(a=new eh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ov=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Bv=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],zv=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],th=new Ze,Zs=new z,Pa=new z;function kv(s,e,t){let n=new Rs;const i=new me,r=new me,o=new St,a=new Sm,l=new bm,c={},u=t.maxTextureSize,h={[Fi]:gn,[gn]:Fi,[ln]:ln},f=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:Fv,fragmentShader:Ov}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new cn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=or;let m=this.type;this.render=function(T,_,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===ld&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=or);const C=s.getRenderTarget(),w=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Zi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const W=m!==this.type;W&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(I=>I.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,I=T.length;R<I;R++){const k=T[R],U=k.shadow;if(U===void 0){qe("WebGLShadowMap:",k,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const K=U.getFrameExtents();i.multiply(K),r.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/K.x),i.x=r.x*K.x,U.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/K.y),i.y=r.y*K.y,U.mapSize.y=r.y));const q=s.state.buffers.depth.getReversed();if(U.camera._reversedDepth=q,U.map===null||W===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===js){if(k.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Hn(i.x,i.y,{format:Ji,type:vn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),U.map.texture.name=k.name+".shadowMap",U.map.depthTexture=new Cs(i.x,i.y,_n),U.map.depthTexture.name=k.name+".shadowMapDepth",U.map.depthTexture.format=Oi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Xt,U.map.depthTexture.magFilter=Xt}else k.isPointLight?(U.map=new mc(i.x),U.map.depthTexture=new uf(i.x,jn)):(U.map=new Hn(i.x,i.y),U.map.depthTexture=new Cs(i.x,i.y,jn)),U.map.depthTexture.name=k.name+".shadowMap",U.map.depthTexture.format=Oi,this.type===or?(U.map.depthTexture.compareFunction=q?Zh:Kh,U.map.depthTexture.minFilter=Bt,U.map.depthTexture.magFilter=Bt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Xt,U.map.depthTexture.magFilter=Xt);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==i.x||U.map.height!==i.y)&&U.map.setSize(i.x,i.y);const Z=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();k.isPointLight!==!0&&U.updateMatrices(k,M);const ee=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:M.layers;for(let ce=0;ce<Z;ce++){const de=U.getCamera(ce);if(k.isPointLight){const $=U.camera,ge=U.matrix,ne=k.distance||$.far;ne!==$.far&&($.far=ne,$.updateProjectionMatrix()),Zs.setFromMatrixPosition(k.matrixWorld),$.position.copy(Zs),Pa.copy($.position),Pa.add(Bv[ce]),$.up.copy(zv[ce]),$.lookAt(Pa),$.updateMatrixWorld(),ge.makeTranslation(-Zs.x,-Zs.y,-Zs.z),th.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),U._frustum.setFromProjectionMatrix(th,$.coordinateSystem,$.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)s.setRenderTarget(U.map,ce),s.clear();else{ce===0&&(s.setRenderTarget(U.map),s.clear());const $=U.getViewport(ce);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),N.viewport(o)}n=U.getFrustum(ce),y(_,M,de,k,ee,this.type)}U.isPointLightShadow!==!0&&this.type===js&&v(U,M),U.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(C,w,P)};function v(T,_){const M=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Hn(i.x,i.y,{format:Ji,type:vn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(_,null,M,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(_,null,M,d,x,null)}function S(T,_,M,C){let w=null;const P=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)w=P;else if(w=M.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const N=w.uuid,W=_.uuid;let R=c[N];R===void 0&&(R={},c[N]=R);let I=R[W];I===void 0&&(I=w.clone(),R[W]=I,_.addEventListener("dispose",b)),w=I}if(w.visible=_.visible,w.wireframe=_.wireframe,C===js?w.side=_.shadowSide!==null?_.shadowSide:_.side:w.side=_.shadowSide!==null?_.shadowSide:h[_.side],w.alphaMap=_.alphaMap,w.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,w.map=_.map,w.clipShadows=_.clipShadows,w.clippingPlanes=_.clippingPlanes,w.clipIntersection=_.clipIntersection,w.displacementMap=_.displacementMap,w.displacementScale=_.displacementScale,w.displacementBias=_.displacementBias,w.wireframeLinewidth=_.wireframeLinewidth,w.linewidth=_.linewidth,M.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const N=s.properties.get(w);N.light=M}return w}function y(T,_,M,C,w,P){if(T.visible===!1)return;if(T.layers.test(w)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===js)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);const R=e.update(T),I=T.material;if(Array.isArray(I)){const k=R.groups;for(let U=0,K=k.length;U<K;U++){const q=k[U],Z=I[q.materialIndex];if(Z&&Z.visible){const ee=S(T,Z,C,P);T.onBeforeShadow(s,T,_,M,R,ee,q),s.renderBufferDirect(M,null,R,ee,T,q),T.onAfterShadow(s,T,_,M,R,ee,q)}}}else if(I.visible){const k=S(T,I,C,P);T.onBeforeShadow(s,T,_,M,R,k,null),s.renderBufferDirect(M,null,R,k,T,null),T.onAfterShadow(s,T,_,M,R,k,null)}}const W=T.children;for(let R=0,I=W.length;R<I;R++)y(W[R],_,M,C,w,P)}function b(T){T.target.removeEventListener("dispose",b);for(const M in c){const C=c[M],w=T.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}function Hv(s,e){function t(){let O=!1;const le=new St;let ie=null;const Ie=new St(0,0,0,0);return{setMask:function(Ee){ie!==Ee&&!O&&(s.colorMask(Ee,Ee,Ee,Ee),ie=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,Re,Ve,B,Y){Y===!0&&(Ee*=B,Re*=B,Ve*=B),le.set(Ee,Re,Ve,B),Ie.equals(le)===!1&&(s.clearColor(Ee,Re,Ve,B),Ie.copy(le))},reset:function(){O=!1,ie=null,Ie.set(-1,0,0,0)}}}function n(){let O=!1,le=!1,ie=null,Ie=null,Ee=null;return{setReversed:function(Re){if(le!==Re){const Ve=e.get("EXT_clip_control");Re?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),le=Re;const B=Ee;Ee=null,this.setClear(B)}},getReversed:function(){return le},setTest:function(Re){Re?F(s.DEPTH_TEST):G(s.DEPTH_TEST)},setMask:function(Re){ie!==Re&&!O&&(s.depthMask(Re),ie=Re)},setFunc:function(Re){if(le&&(Re=Yd[Re]),Ie!==Re){switch(Re){case Ba:s.depthFunc(s.NEVER);break;case za:s.depthFunc(s.ALWAYS);break;case ka:s.depthFunc(s.LESS);break;case mr:s.depthFunc(s.LEQUAL);break;case Ha:s.depthFunc(s.EQUAL);break;case Ga:s.depthFunc(s.GEQUAL);break;case Va:s.depthFunc(s.GREATER);break;case Wa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=Re}},setLocked:function(Re){O=Re},setClear:function(Re){Ee!==Re&&(Ee=Re,le&&(Re=1-Re),s.clearDepth(Re))},reset:function(){O=!1,ie=null,Ie=null,Ee=null,le=!1}}}function i(){let O=!1,le=null,ie=null,Ie=null,Ee=null,Re=null,Ve=null,B=null,Y=null;return{setTest:function(fe){O||(fe?F(s.STENCIL_TEST):G(s.STENCIL_TEST))},setMask:function(fe){le!==fe&&!O&&(s.stencilMask(fe),le=fe)},setFunc:function(fe,we,xe){(ie!==fe||Ie!==we||Ee!==xe)&&(s.stencilFunc(fe,we,xe),ie=fe,Ie=we,Ee=xe)},setOp:function(fe,we,xe){(Re!==fe||Ve!==we||B!==xe)&&(s.stencilOp(fe,we,xe),Re=fe,Ve=we,B=xe)},setLocked:function(fe){O=fe},setClear:function(fe){Y!==fe&&(s.clearStencil(fe),Y=fe)},reset:function(){O=!1,le=null,ie=null,Ie=null,Ee=null,Re=null,Ve=null,B=null,Y=null}}}const r=new t,o=new n,a=new i;let l={};const c=new WeakMap;let u={},h={},f={},d=new WeakMap,g=[],x=null,p=!1,m=null,v=null,S=null,y=null,b=null,T=null,_=null,M=new Ge(0,0,0),C=0,w=!1,P=null,N=null,W=null,R=null,I=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,K=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),U=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),U=K>=2);let Z=null,ee={};const ce=s.getParameter(s.SCISSOR_BOX),de=s.getParameter(s.VIEWPORT),$=new St().fromArray(ce),ge=new St().fromArray(de);function ne(O,le,ie,Ie){const Ee=new Uint8Array(4),Re=s.createTexture();s.bindTexture(O,Re),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<ie;Ve++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(le+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return Re}const Te={};Te[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(s.DEPTH_TEST),o.setFunc(mr),Le(!1),Se(Ic),F(s.CULL_FACE),ve(Zi);function F(O){u[O]!==!0&&(s.enable(O),u[O]=!0)}function G(O){u[O]!==!1&&(s.disable(O),u[O]=!1)}function pe(O,le){return f[O]!==le?(s.bindFramebuffer(O,le),f[O]=le,O===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=le),O===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=le),!0):!1}function ue(O,le){let ie=g,Ie=!1;if(O){ie=d.get(le),ie===void 0&&(ie=[],d.set(le,ie));const Ee=O.textures;if(ie.length!==Ee.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let Re=0,Ve=Ee.length;Re<Ve;Re++)ie[Re]=s.COLOR_ATTACHMENT0+Re;ie.length=Ee.length,Ie=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(ie)}function Me(O){return x!==O?(s.useProgram(O),x=O,!0):!1}const Ye={[_s]:s.FUNC_ADD,[ud]:s.FUNC_SUBTRACT,[hd]:s.FUNC_REVERSE_SUBTRACT};Ye[fd]=s.MIN,Ye[dd]=s.MAX;const oe={[pd]:s.ZERO,[md]:s.ONE,[gd]:s.SRC_COLOR,[Ch]:s.SRC_ALPHA,[Sd]:s.SRC_ALPHA_SATURATE,[yd]:s.DST_COLOR,[xd]:s.DST_ALPHA,[_d]:s.ONE_MINUS_SRC_COLOR,[Ph]:s.ONE_MINUS_SRC_ALPHA,[Md]:s.ONE_MINUS_DST_COLOR,[vd]:s.ONE_MINUS_DST_ALPHA,[bd]:s.CONSTANT_COLOR,[Td]:s.ONE_MINUS_CONSTANT_COLOR,[Ed]:s.CONSTANT_ALPHA,[wd]:s.ONE_MINUS_CONSTANT_ALPHA};function ve(O,le,ie,Ie,Ee,Re,Ve,B,Y,fe){if(O===Zi){p===!0&&(G(s.BLEND),p=!1);return}if(p===!1&&(F(s.BLEND),p=!0),O!==cd){if(O!==m||fe!==w){if((v!==_s||b!==_s)&&(s.blendEquation(s.FUNC_ADD),v=_s,b=_s),fe)switch(O){case ar:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lc:s.blendFunc(s.ONE,s.ONE);break;case Dc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Qe("WebGLState: Invalid blending: ",O);break}else switch(O){case ar:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Dc:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",O);break}S=null,y=null,T=null,_=null,M.set(0,0,0),C=0,m=O,w=fe}return}Ee=Ee||le,Re=Re||ie,Ve=Ve||Ie,(le!==v||Ee!==b)&&(s.blendEquationSeparate(Ye[le],Ye[Ee]),v=le,b=Ee),(ie!==S||Ie!==y||Re!==T||Ve!==_)&&(s.blendFuncSeparate(oe[ie],oe[Ie],oe[Re],oe[Ve]),S=ie,y=Ie,T=Re,_=Ve),(B.equals(M)===!1||Y!==C)&&(s.blendColor(B.r,B.g,B.b,Y),M.copy(B),C=Y),m=O,w=!1}function _e(O,le){O.side===ln?G(s.CULL_FACE):F(s.CULL_FACE);let ie=O.side===gn;le&&(ie=!ie),Le(ie),O.blending===ar&&O.transparent===!1?ve(Zi):ve(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Ie=O.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Fe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?F(s.SAMPLE_ALPHA_TO_COVERAGE):G(s.SAMPLE_ALPHA_TO_COVERAGE)}function Le(O){P!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),P=O)}function Se(O){O!==od?(F(s.CULL_FACE),O!==N&&(O===Ic?s.cullFace(s.BACK):O===ad?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):G(s.CULL_FACE),N=O}function He(O){O!==W&&(U&&s.lineWidth(O),W=O)}function Fe(O,le,ie){O?(F(s.POLYGON_OFFSET_FILL),(R!==le||I!==ie)&&(R=le,I=ie,o.getReversed()&&(le=-le,ie=-ie),s.polygonOffset(le,ie))):G(s.POLYGON_OFFSET_FILL)}function $e(O){O?F(s.SCISSOR_TEST):G(s.SCISSOR_TEST)}function at(O){O===void 0&&(O=s.TEXTURE0+k-1),Z!==O&&(s.activeTexture(O),Z=O)}function ft(O,le,ie){ie===void 0&&(Z===null?ie=s.TEXTURE0+k-1:ie=Z);let Ie=ee[ie];Ie===void 0&&(Ie={type:void 0,texture:void 0},ee[ie]=Ie),(Ie.type!==O||Ie.texture!==le)&&(Z!==ie&&(s.activeTexture(ie),Z=ie),s.bindTexture(O,le||Te[O]),Ie.type=O,Ie.texture=le)}function V(){const O=ee[Z];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ct(){try{s.compressedTexImage2D(...arguments)}catch(O){Qe("WebGLState:",O)}}function lt(){try{s.compressedTexImage3D(...arguments)}catch(O){Qe("WebGLState:",O)}}function bt(){try{s.texSubImage2D(...arguments)}catch(O){Qe("WebGLState:",O)}}function Pe(){try{s.texSubImage3D(...arguments)}catch(O){Qe("WebGLState:",O)}}function Ut(){try{s.compressedTexSubImage2D(...arguments)}catch(O){Qe("WebGLState:",O)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(O){Qe("WebGLState:",O)}}function Je(){try{s.texStorage2D(...arguments)}catch(O){Qe("WebGLState:",O)}}function L(){try{s.texStorage3D(...arguments)}catch(O){Qe("WebGLState:",O)}}function E(){try{s.texImage2D(...arguments)}catch(O){Qe("WebGLState:",O)}}function J(){try{s.texImage3D(...arguments)}catch(O){Qe("WebGLState:",O)}}function ye(O){return h[O]!==void 0?h[O]:s.getParameter(O)}function he(O,le){h[O]!==le&&(s.pixelStorei(O,le),h[O]=le)}function Ae(O){$.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),$.copy(O))}function be(O){ge.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),ge.copy(O))}function ae(O,le){let ie=c.get(le);ie===void 0&&(ie=new WeakMap,c.set(le,ie));let Ie=ie.get(O);Ie===void 0&&(Ie=s.getUniformBlockIndex(le,O.name),s.uniformBlockBinding(le,Ie,Ie),ie.set(O,Ie))}function se(O,le,ie){const Ee=c.get(le).get(O);l[Ee]!==ie&&(s.bindBufferBase(s.UNIFORM_BUFFER,Ee,ie),l[Ee]=ie)}function Ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},h={},Z=null,ee={},f={},l={},d=new WeakMap,g=[],x=null,p=!1,m=null,v=null,S=null,y=null,b=null,T=null,_=null,M=new Ge(0,0,0),C=0,w=!1,P=null,N=null,W=null,R=null,I=null,$.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:F,disable:G,bindFramebuffer:pe,drawBuffers:ue,useProgram:Me,setBlending:ve,setMaterial:_e,setFlipSided:Le,setCullFace:Se,setLineWidth:He,setPolygonOffset:Fe,setScissorTest:$e,activeTexture:at,bindTexture:ft,unbindTexture:V,compressedTexImage2D:Ct,compressedTexImage3D:lt,texImage2D:E,texImage3D:J,pixelStorei:he,getParameter:ye,updateUBOMapping:ae,uniformBlockBinding:se,texStorage2D:Je,texStorage3D:L,texSubImage2D:bt,texSubImage3D:Pe,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Ke,scissor:Ae,viewport:be,reset:Ce}}function Gv(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,u=new WeakMap,h=new Set;let f;const d=new WeakMap,g=new Set,x=new FinalizationRegistry(L=>g.delete(L));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,E){return p?new OffscreenCanvas(L,E):Mr("canvas")}function v(L,E,J){let ye=1;const he=Je(L);if((he.width>J||he.height>J)&&(ye=J/Math.max(he.width,he.height)),ye<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ae=Math.floor(ye*he.width),be=Math.floor(ye*he.height);f===void 0&&(f=m(Ae,be));const ae=E?m(Ae,be):f;return ae.width=Ae,ae.height=be,ae.getContext("2d").drawImage(L,0,0,Ae,be),qe("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ae+"x"+be+")."),ae}else return"data"in L&&qe("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),L;return L}function S(L){return L.generateMipmaps}function y(L){s.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(L,E,J,ye,he,Ae=!1){if(L!==null){if(s[L]!==void 0)return s[L];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let be;ye&&(be=e.get("EXT_texture_norm16"),be||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=E;if(E===s.RED&&(J===s.FLOAT&&(ae=s.R32F),J===s.HALF_FLOAT&&(ae=s.R16F),J===s.UNSIGNED_BYTE&&(ae=s.R8),J===s.UNSIGNED_SHORT&&be&&(ae=be.R16_EXT),J===s.SHORT&&be&&(ae=be.R16_SNORM_EXT)),E===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ae=s.R8UI),J===s.UNSIGNED_SHORT&&(ae=s.R16UI),J===s.UNSIGNED_INT&&(ae=s.R32UI),J===s.BYTE&&(ae=s.R8I),J===s.SHORT&&(ae=s.R16I),J===s.INT&&(ae=s.R32I)),E===s.RG&&(J===s.FLOAT&&(ae=s.RG32F),J===s.HALF_FLOAT&&(ae=s.RG16F),J===s.UNSIGNED_BYTE&&(ae=s.RG8),J===s.UNSIGNED_SHORT&&be&&(ae=be.RG16_EXT),J===s.SHORT&&be&&(ae=be.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(ae=s.RG8UI),J===s.UNSIGNED_SHORT&&(ae=s.RG16UI),J===s.UNSIGNED_INT&&(ae=s.RG32UI),J===s.BYTE&&(ae=s.RG8I),J===s.SHORT&&(ae=s.RG16I),J===s.INT&&(ae=s.RG32I)),E===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(ae=s.RGB8UI),J===s.UNSIGNED_SHORT&&(ae=s.RGB16UI),J===s.UNSIGNED_INT&&(ae=s.RGB32UI),J===s.BYTE&&(ae=s.RGB8I),J===s.SHORT&&(ae=s.RGB16I),J===s.INT&&(ae=s.RGB32I)),E===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(ae=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(ae=s.RGBA16UI),J===s.UNSIGNED_INT&&(ae=s.RGBA32UI),J===s.BYTE&&(ae=s.RGBA8I),J===s.SHORT&&(ae=s.RGBA16I),J===s.INT&&(ae=s.RGBA32I)),E===s.RGB&&(J===s.UNSIGNED_SHORT&&be&&(ae=be.RGB16_EXT),J===s.SHORT&&be&&(ae=be.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(ae=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(ae=s.R11F_G11F_B10F)),E===s.RGBA){const se=Ae?Ro:pt.getTransfer(he);J===s.FLOAT&&(ae=s.RGBA32F),J===s.HALF_FLOAT&&(ae=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ae=se===Tt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&be&&(ae=be.RGBA16_EXT),J===s.SHORT&&be&&(ae=be.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)}return(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function _(L,E){let J;return L?E===null||E===jn||E===Es?J=s.DEPTH24_STENCIL8:E===_n?J=s.DEPTH32F_STENCIL8:E===_r&&(J=s.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===jn||E===Es?J=s.DEPTH_COMPONENT24:E===_n?J=s.DEPTH_COMPONENT32F:E===_r&&(J=s.DEPTH_COMPONENT16),J}function M(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Xt&&L.minFilter!==Bt?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function C(L){const E=new WeakRef(L);n.get(L).__ref=E,g.add(E),x.register(L,E,E)}function w(L){const E=n.get(L).__ref;E!==void 0&&(g.delete(E),x.unregister(E))}function P(L){W(L.target)}function N(L){R(L.target)}function W(L){L.removeEventListener("dispose",P),w(L),k(L),L.isVideoTexture&&u.delete(L),L.isHTMLTexture&&h.delete(L)}function R(L){L.removeEventListener("dispose",N),w(L),K(L)}function I(){for(const L of g){const E=L.deref();E!==void 0&&(E.isRenderTarget===!0?R(E):W(E))}g.clear(),h.clear()}function k(L){const E=n.get(L);if(E.__webglInit===void 0)return;const J=L.source,ye=d.get(J);if(ye){const he=ye[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&U(L),Object.keys(ye).length===0&&d.delete(J)}n.remove(L)}function U(L){const E=n.get(L);s.deleteTexture(E.__webglTexture);const J=L.source,ye=d.get(J);delete ye[E.__cacheKey],o.memory.textures--}function K(L){const E=n.get(L);E.__depthDisposeCallback&&E.__depthDisposeCallback();const J=L.depthTexture;if(J&&J.renderTarget===L&&W(J),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let Ae=0;Ae<E.__webglFramebuffer[he].length;Ae++)s.deleteFramebuffer(E.__webglFramebuffer[he][Ae]);else s.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)s.deleteFramebuffer(E.__webglFramebuffer[he]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ye=L.textures;for(let he=0,Ae=ye.length;he<Ae;he++){const be=n.get(ye[he]);be.__webglTexture&&(s.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(ye[he])}n.remove(L)}let q=0;function Z(){q=0}function ee(){return q}function ce(L){q=L}function de(){const L=q;return L>=i.maxTextures&&qe("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),q+=1,L}function $(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.mipmapsAutoUpdate),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ge(L,E){const J=n.get(L);if(L.isVideoTexture&&Ut(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const ye=L.image;if(ye===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(J,L,E);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+E)}function ne(L,E){const J=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){_e(J,L,E);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+E)}function Te(L,E){const J=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){_e(J,L,E);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+E)}function F(L,E){const J=n.get(L);if(L.version>0&&J.__version!==L.version){Le(J,L,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+E)}const G={[yi]:s.REPEAT,[Pn]:s.CLAMP_TO_EDGE,[To]:s.MIRRORED_REPEAT},pe={[Xt]:s.NEAREST,[zh]:s.NEAREST_MIPMAP_NEAREST,[er]:s.NEAREST_MIPMAP_LINEAR,[Bt]:s.LINEAR,[po]:s.LINEAR_MIPMAP_NEAREST,[On]:s.LINEAR_MIPMAP_LINEAR},ue={[Od]:s.NEVER,[Jh]:s.ALWAYS,[Bd]:s.LESS,[Kh]:s.LEQUAL,[zd]:s.EQUAL,[Zh]:s.GEQUAL,[kd]:s.GREATER,[Hd]:s.NOTEQUAL};function Me(L,E){if(E.type===_n&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Bt||E.magFilter===po||E.magFilter===er||E.magFilter===On||E.minFilter===Bt||E.minFilter===po||E.minFilter===er||E.minFilter===On)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,G[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,G[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,G[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,pe[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,pe[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,ue[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Xt||E.minFilter!==er&&E.minFilter!==On||E.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ye(L,E){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",P),C(E));const ye=E.source;let he=d.get(ye);he===void 0&&(he={},d.set(ye,he));const Ae=$(E);if(Ae!==L.__cacheKey){he[Ae]===void 0&&(he[Ae]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,J=!0),he[Ae].usedTimes++;const be=he[L.__cacheKey];be!==void 0&&(he[L.__cacheKey].usedTimes--,be.usedTimes===0&&U(E)),L.__cacheKey=Ae,L.__webglTexture=he[Ae].texture}return J}function oe(L,E,J){return Math.floor(Math.floor(L/J)/E)}function ve(L,E,J,ye){const Ae=L.updateRanges;if(Ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,J,ye,E.data);else{Ae.sort((O,le)=>O.start-le.start);let be=0;for(let O=1;O<Ae.length;O++){const le=Ae[be],ie=Ae[O],Ie=le.start+le.count,Ee=oe(ie.start,E.width,4),Re=oe(le.start,E.width,4);ie.start<=Ie+1&&Ee===Re&&oe(ie.start+ie.count-1,E.width,4)===Ee?le.count=Math.max(le.count,ie.start+ie.count-le.start):(++be,Ae[be]=ie)}Ae.length=be+1;const ae=t.getParameter(s.UNPACK_ROW_LENGTH),se=t.getParameter(s.UNPACK_SKIP_PIXELS),Ce=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let O=0,le=Ae.length;O<le;O++){const ie=Ae[O],Ie=Math.floor(ie.start/4),Ee=Math.ceil(ie.count/4),Re=Ie%E.width,Ve=Math.floor(Ie/E.width),B=Ee,Y=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ve),t.texSubImage2D(s.TEXTURE_2D,0,Re,Ve,B,Y,J,ye,E.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ae),t.pixelStorei(s.UNPACK_SKIP_PIXELS,se),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function _e(L,E,J){let ye=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ye=s.TEXTURE_3D);const he=Ye(L,E),Ae=E.source;t.bindTexture(ye,L.__webglTexture,s.TEXTURE0+J);const be=n.get(Ae);if(Ae.version!==be.__version||he===!0){if(t.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Y=pt.getPrimaries(pt.workingColorSpace),fe=E.colorSpace===Ii?null:pt.getPrimaries(E.colorSpace),we=E.colorSpace===Ii||Y===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let se=v(E.image,!1,i.maxTextureSize);se=Ke(E,se);const Ce=r.convert(E.format,E.colorSpace),O=r.convert(E.type);let le=T(E.internalFormat,Ce,O,E.normalized,E.colorSpace,E.isVideoTexture);Me(ye,E);let ie;const Ie=E.mipmaps,Ee=E.isVideoTexture!==!0,Re=be.__version===void 0||he===!0,Ve=Ae.dataReady,B=M(E,se);if(E.isDepthTexture)le=_(E.format===Li,E.type),Re&&(Ee?t.texStorage2D(s.TEXTURE_2D,1,le,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,le,se.width,se.height,0,Ce,O,null));else if(E.isDataTexture)if(Ie.length>0){Ee&&Re&&t.texStorage2D(s.TEXTURE_2D,B,le,Ie[0].width,Ie[0].height);for(let Y=0,fe=Ie.length;Y<fe;Y++)ie=Ie[Y],Ee?Ve&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ie.width,ie.height,Ce,O,ie.data):t.texImage2D(s.TEXTURE_2D,Y,le,ie.width,ie.height,0,Ce,O,ie.data);E.generateMipmaps=!1}else Ee?(Re&&t.texStorage2D(s.TEXTURE_2D,B,le,se.width,se.height),Ve&&ve(E,se,Ce,O)):t.texImage2D(s.TEXTURE_2D,0,le,se.width,se.height,0,Ce,O,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ee&&Re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,B,le,Ie[0].width,Ie[0].height,se.depth);for(let Y=0,fe=Ie.length;Y<fe;Y++)if(ie=Ie[Y],E.format!==Bn)if(Ce!==null)if(Ee){if(Ve)if(E.layerUpdates.size>0){const we=Nu(ie.width,ie.height,E.format,E.type);for(const xe of E.layerUpdates){const st=ie.data.subarray(xe*we/ie.data.BYTES_PER_ELEMENT,(xe+1)*we/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,xe,ie.width,ie.height,1,Ce,st)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ie.width,ie.height,se.depth,Ce,ie.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,le,ie.width,ie.height,se.depth,0,ie.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?Ve&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ie.width,ie.height,se.depth,Ce,O,ie.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,le,ie.width,ie.height,se.depth,0,Ce,O,ie.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ee&&Re&&t.texStorage2D(s.TEXTURE_2D,B,le,Ie[0].width,Ie[0].height);for(let Y=0,fe=Ie.length;Y<fe;Y++)ie=Ie[Y],E.format!==Bn?Ce!==null?Ee?Ve&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ie.width,ie.height,Ce,ie.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,le,ie.width,ie.height,0,ie.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?Ve&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ie.width,ie.height,Ce,O,ie.data):t.texImage2D(s.TEXTURE_2D,Y,le,ie.width,ie.height,0,Ce,O,ie.data)}else if(E.isDataArrayTexture)if(Ee){if(Re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,B,le,se.width,se.height,se.depth),Ve)if(E.layerUpdates.size>0){const Y=Nu(se.width,se.height,E.format,E.type);for(const fe of E.layerUpdates){const we=se.data.subarray(fe*Y/se.data.BYTES_PER_ELEMENT,(fe+1)*Y/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,se.width,se.height,1,Ce,O,we)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Ce,O,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,le,se.width,se.height,se.depth,0,Ce,O,se.data);else if(E.isData3DTexture)Ee?(Re&&t.texStorage3D(s.TEXTURE_3D,B,le,se.width,se.height,se.depth),Ve&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Ce,O,se.data)):t.texImage3D(s.TEXTURE_3D,0,le,se.width,se.height,se.depth,0,Ce,O,se.data);else if(E.isFramebufferTexture){if(Re)if(Ee)t.texStorage2D(s.TEXTURE_2D,B,le,se.width,se.height);else{let Y=se.width,fe=se.height;for(let we=0;we<B;we++)t.texImage2D(s.TEXTURE_2D,we,le,Y,fe,0,Ce,O,null),Y>>=1,fe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const Y=s.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),se.parentNode!==Y){Y.appendChild(se),h.add(E),Y.onpaint=fe=>{const we=fe.changedElements;for(const xe of h)we.includes(xe.image)&&(xe.needsUpdate=!0)},Y.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,se);else{const we=s.RGBA,xe=s.RGBA,st=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,we,xe,st,se)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Ee&&Re){const Y=Je(Ie[0]);t.texStorage2D(s.TEXTURE_2D,B,le,Y.width,Y.height)}for(let Y=0,fe=Ie.length;Y<fe;Y++)ie=Ie[Y],Ee?Ve&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Ce,O,ie):t.texImage2D(s.TEXTURE_2D,Y,le,Ce,O,ie);E.generateMipmaps=!1}else if(Ee){if(Re){const Y=Je(se);t.texStorage2D(s.TEXTURE_2D,B,le,Y.width,Y.height)}Ve&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,O,se)}else t.texImage2D(s.TEXTURE_2D,0,le,Ce,O,se);S(E)&&E.mipmapsAutoUpdate===!0&&y(ye),be.__version=Ae.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Le(L,E,J){if(E.image.length!==6)return;const ye=Ye(L,E),he=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+J);const Ae=n.get(he);if(he.version!==Ae.__version||ye===!0){t.activeTexture(s.TEXTURE0+J);const be=pt.getPrimaries(pt.workingColorSpace),ae=E.colorSpace===Ii?null:pt.getPrimaries(E.colorSpace),se=E.colorSpace===Ii||be===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const Ce=E.isCompressedTexture||E.image[0].isCompressedTexture,O=E.image[0]&&E.image[0].isDataTexture,le=[];for(let xe=0;xe<6;xe++)!Ce&&!O?le[xe]=v(E.image[xe],!0,i.maxCubemapSize):le[xe]=O?E.image[xe].image:E.image[xe],le[xe]=Ke(E,le[xe]);const ie=le[0],Ie=r.convert(E.format,E.colorSpace),Ee=r.convert(E.type);let Re=T(E.internalFormat,Ie,Ee,E.normalized,E.colorSpace);const Ve=E.isVideoTexture!==!0,B=Ae.__version===void 0||ye===!0,Y=he.dataReady;let fe=M(E,ie);Me(s.TEXTURE_CUBE_MAP,E);let we;if(E.isDepthTexture){if(Re=_(E.format===Li,E.type),B)if(Ve)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Re,ie.width,ie.height);else for(let xe=0;xe<6;xe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Re,ie.width,ie.height,0,Ie,Ee,null)}else if(Ce){Ve&&B&&t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,Re,ie.width,ie.height);for(let xe=0;xe<6;xe++){we=le[xe].mipmaps;for(let st=0;st<we.length;st++){const je=we[st];E.format!==Bn?Ie!==null?Ve?Y&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,0,0,je.width,je.height,Ie,je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,Re,je.width,je.height,0,je.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,0,0,je.width,je.height,Ie,Ee,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,Re,je.width,je.height,0,Ie,Ee,je.data)}}}else{if(we=E.mipmaps,Ve&&B){we.length>0&&fe++;const xe=Je(le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,Re,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(O){Ve?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,le[xe].width,le[xe].height,Ie,Ee,le[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Re,le[xe].width,le[xe].height,0,Ie,Ee,le[xe].data);for(let st=0;st<we.length;st++){const We=we[st].image[xe].image;Ve?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,0,0,We.width,We.height,Ie,Ee,We.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,Re,We.width,We.height,0,Ie,Ee,We.data)}}else{Ve?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ie,Ee,le[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Re,Ie,Ee,le[xe]);for(let st=0;st<we.length;st++){const je=we[st];Ve?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,0,0,Ie,Ee,je.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,Re,Ie,Ee,je.image[xe])}}}S(E)&&E.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),Ae.__version=he.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Se(L,E,J,ye,he,Ae){const be=r.convert(J.format,J.colorSpace),ae=r.convert(J.type),se=T(J.internalFormat,be,ae,J.normalized,J.colorSpace),Ce=n.get(E),O=n.get(J);if(O.__renderTarget=E,!Ce.__hasExternalTextures){const le=Math.max(1,E.width>>Ae),ie=Math.max(1,E.height>>Ae);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,Ae,se,le,ie,E.depth,0,be,ae,null):t.texImage2D(he,Ae,se,le,ie,0,be,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Pe(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,he,O.__webglTexture,0,bt(E)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,he,O.__webglTexture,Ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(L,E,J){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const ye=E.depthTexture,he=ye&&ye.isDepthTexture?ye.type:null,Ae=_(E.stencilBuffer,he),be=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Pe(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt(E),Ae,E.width,E.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt(E),Ae,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,L)}else{const ye=E.textures;for(let he=0;he<ye.length;he++){const Ae=ye[he],be=r.convert(Ae.format,Ae.colorSpace),ae=r.convert(Ae.type),se=T(Ae.internalFormat,be,ae,Ae.normalized,Ae.colorSpace);Pe(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt(E),se,E.width,E.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt(E),se,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,se,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Fe(L,E,J){const ye=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=n.get(E.depthTexture);he.__renderTarget=E;const Ae=ye?E.depthTexture.image[0]:E.depthTexture.image;(!he.__webglTexture||Ae.width!==E.width||Ae.height!==E.height)&&(Ae.width=E.width,Ae.height=E.height,E.depthTexture.needsUpdate=!0),ye?F(E.depthTexture,0):ge(E.depthTexture,0);const be=he.__webglTexture,ae=bt(E),se=ye?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,Ce=E.depthTexture.format===Li?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Oi)Pe(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,se,be,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,se,be,0);else if(E.depthTexture.format===Li)Pe(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,se,be,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,se,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(L){const E=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ye=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ye){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ye.removeEventListener("dispose",he)};ye.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=ye}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let ye=0;ye<6;ye++)Fe(E.__webglFramebuffer[ye],L,ye);else L.texture.mipmaps.length>0?Fe(E.__webglFramebuffer[0],L,0):Fe(E.__webglFramebuffer,L,0);else if(J){E.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ye]),E.__webglDepthbuffer[ye]===void 0)E.__webglDepthbuffer[ye]=s.createRenderbuffer(),He(E.__webglDepthbuffer[ye],L,!1);else{const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer[ye];s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Ae)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),He(E.__webglDepthbuffer,L,!1);else{const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Ae)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function at(L,E,J){const ye=n.get(L);E!==void 0&&Se(ye.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&$e(L)}function ft(L){const E=L.texture,J=n.get(L),ye=n.get(E);L.addEventListener("dispose",N),C(L);const he=L.textures,Ae=L.isWebGLCubeRenderTarget===!0,be=he.length>1;if(be||(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=E.version,o.memory.textures++),Ae){J.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(E.mipmaps.length>0){J.__webglFramebuffer[ae]=[];for(let se=0;se<E.mipmaps.length;se++)J.__webglFramebuffer[ae][se]=s.createFramebuffer()}else J.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(E.mipmaps.length>0){J.__webglFramebuffer=[];for(let ae=0;ae<E.mipmaps.length;ae++)J.__webglFramebuffer[ae]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(be)for(let ae=0,se=he.length;ae<se;ae++){const Ce=n.get(he[ae]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&Pe(L)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ae=0;ae<he.length;ae++){const se=he[ae];J.__webglColorRenderbuffer[ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[ae]);const Ce=r.convert(se.format,se.colorSpace),O=r.convert(se.type),le=T(se.internalFormat,Ce,O,se.normalized,se.colorSpace,L.isXRRenderTarget===!0),ie=bt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,le,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,J.__webglColorRenderbuffer[ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),He(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),Me(s.TEXTURE_CUBE_MAP,E);for(let ae=0;ae<6;ae++)if(E.mipmaps.length>0)for(let se=0;se<E.mipmaps.length;se++)Se(J.__webglFramebuffer[ae][se],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,se);else Se(J.__webglFramebuffer[ae],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);S(E)?y(s.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(be){for(let ae=0,se=he.length;ae<se;ae++){const Ce=he[ae],O=n.get(Ce);let le=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(le=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,O.__webglTexture),Me(le,Ce),Se(J.__webglFramebuffer,L,Ce,s.COLOR_ATTACHMENT0+ae,le,0),S(Ce)&&y(le)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ae=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,ye.__webglTexture),Me(ae,E),E.mipmaps.length>0)for(let se=0;se<E.mipmaps.length;se++)Se(J.__webglFramebuffer[se],L,E,s.COLOR_ATTACHMENT0,ae,se);else Se(J.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,ae,0);S(E)?y(ae):E.mipmaps.length>0&&s.texParameteri(ae,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&$e(L)}function V(L){const E=L.textures;for(let J=0,ye=E.length;J<ye;J++){const he=E[J];if(S(he)&&he.mipmapsAutoUpdate===!0){const Ae=b(L),be=n.get(he).__webglTexture;t.bindTexture(Ae,be),y(Ae),t.unbindTexture()}}}const Ct=[];function lt(L){if(L.samples>0){if(Pe(L)===!1){const E=L.textures,J=L.width,ye=L.height;let he=s.COLOR_BUFFER_BIT;const Ae=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(L),ae=E.length>1;if(ae)for(let Ce=0;Ce<E.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ce=0;Ce<E.length;Ce++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[Ce]);const O=n.get(E[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,O,0)}s.blitFramebuffer(0,0,J,ye,0,0,J,ye,he,s.NEAREST),l===!0&&(Ct.length=0,Ct.push(s.COLOR_ATTACHMENT0+Ce),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Ct.push(Ae),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ae)for(let Ce=0;Ce<E.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,be.__webglColorRenderbuffer[Ce]);const O=n.get(E[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,O,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function bt(L){return Math.min(i.maxSamples,L.samples)}function Pe(L){const E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ut(L){const E=o.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function Ke(L,E){const J=L.colorSpace,ye=L.format,he=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==yn&&J!==Ii&&(pt.getTransfer(J)===Tt?(ye!==Bn||he!==Tn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",J)),E}function Je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=de,this.resetTextureUnits=Z,this.getTextureUnits=ee,this.setTextureUnits=ce,this.setTexture2D=ge,this.setTexture2DArray=ne,this.setTexture3D=Te,this.setTextureCube=F,this.rebindTextures=at,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Pe,this.dispose=I}function Vv(s,e){function t(n,i=Ii){let r;const o=pt.getTransfer(i);if(n===Tn)return s.UNSIGNED_BYTE;if(n===Hl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Gl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Gh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Vh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===kh)return s.BYTE;if(n===Hh)return s.SHORT;if(n===_r)return s.UNSIGNED_SHORT;if(n===kl)return s.INT;if(n===jn)return s.UNSIGNED_INT;if(n===_n)return s.FLOAT;if(n===vn)return s.HALF_FLOAT;if(n===Wh)return s.ALPHA;if(n===Xh)return s.RGB;if(n===Bn)return s.RGBA;if(n===Oi)return s.DEPTH_COMPONENT;if(n===Li)return s.DEPTH_STENCIL;if(n===zo)return s.RED;if(n===Vl)return s.RED_INTEGER;if(n===Ji)return s.RG;if(n===Wl)return s.RG_INTEGER;if(n===Xl)return s.RGBA_INTEGER;if(n===mo||n===go||n===_o||n===xo)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===qa||n===Ya||n===Ka)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ja||n===$a||n===Qa||n===ja||n===Eo||n===el)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Ja)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qa)return r.COMPRESSED_R11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Eo)return r.COMPRESSED_RG11_EAC;if(n===el)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl||n===fl||n===dl||n===pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ll)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ul)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ml||n===gl||n===_l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ml)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xl||n===vl||n===wo||n===yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Wv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new hf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vn({vertexShader:Wv,fragmentShader:Xv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new cn(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yv extends Bi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const x=typeof XRWebGLBinding<"u",p=new qv,m={},v=t.getContextAttributes();let S=null,y=null;const b=[],T=[],_=new me;let M=null,C=null;const w=new mn;w.viewport=new St;const P=new mn;P.viewport=new St;const N=[w,P],W=new Xm;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ge=b[$];return ge===void 0&&(ge=new oa,b[$]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function($){let ge=b[$];return ge===void 0&&(ge=new oa,b[$]=ge),ge.getGripSpace()},this.getHand=function($){let ge=b[$];return ge===void 0&&(ge=new oa,b[$]=ge),ge.getHandSpace()};function k($){const ge=T.indexOf($.inputSource);if(ge===-1)return;const ne=b[ge];ne!==void 0&&(ne.update($.inputSource,$.frame,c||o),ne.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",K);for(let $=0;$<b.length;$++){const ge=T[$];ge!==null&&(T[$]=null,b[$].disconnect(ge))}R=null,I=null,p.reset();for(const $ in m)delete m[$];if(e.setRenderTarget(S),d=null,f=null,h=null,i=null,y=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),C!==null){const $=C.camera;$.fov=C.fov,$.zoom=C.zoom,$.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",U),i.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Te=null,F=null;v.depth&&(F=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=v.stencil?Li:Oi,Te=v.stencil?Es:jn);const G={colorFormat:t.RGBA8,depthFormat:F,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(G),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Hn(f.textureWidth,f.textureHeight,{format:Bn,type:Tn,depthTexture:new Cs(f.textureWidth,f.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ne={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Hn(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),de.setContext(i),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K($){for(let ge=0;ge<$.removed.length;ge++){const ne=$.removed[ge],Te=T.indexOf(ne);Te>=0&&(T[Te]=null,b[Te].disconnect(ne))}for(let ge=0;ge<$.added.length;ge++){const ne=$.added[ge];let Te=T.indexOf(ne);if(Te===-1){for(let G=0;G<b.length;G++)if(G>=T.length){T.push(ne),Te=G;break}else if(T[G]===null){T[G]=ne,Te=G;break}if(Te===-1)break}const F=b[Te];F&&F.connect(ne)}}function q($,ge){ge===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ge.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ge=$.near,ne=$.far;p.texture!==null&&(p.depthNear>0&&(ge=p.depthNear),p.depthFar>0&&(ne=p.depthFar)),W.near=P.near=w.near=ge,W.far=P.far=w.far=ne,(R!==W.near||I!==W.far)&&(i.updateRenderState({depthNear:W.near,depthFar:W.far}),R=W.near,I=W.far),W.layers.mask=$.layers.mask|6,w.layers.mask=W.layers.mask&-5,P.layers.mask=W.layers.mask&-3;const Te=$.parent,F=W.cameras;q(W,Te);for(let G=0;G<F.length;G++)q(F[G],Te);W.projectionMatrix.copy(w.projectionMatrix),W.projectionMatrixInverse.copy(w.projectionMatrixInverse),C===null&&$.isPerspectiveCamera&&(C={camera:$,fov:$.fov,zoom:$.zoom}),Z($,W,Te)};function Z($,ge,ne){ne===null?$.matrix.copy(ge.matrixWorld):($.matrix.copy(ne.matrixWorld),$.matrix.invert(),$.matrix.multiply(ge.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ge.projectionMatrix),$.projectionMatrixInverse.copy(ge.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ws*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(W)},this.getCameraTexture=function($){return m[$]};let ee=null;function ce($,ge){if(u=ge.getViewerPose(c||o),g=ge,u!==null){const ne=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Te=!1;ne.length!==W.cameras.length&&(W.cameras.length=0,Te=!0);for(let ue=0;ue<ne.length;ue++){const Me=ne[ue];let Ye=null;if(d!==null)Ye=d.getViewport(Me);else{const ve=h.getViewSubImage(f,Me);Ye=ve.viewport,ue===0&&(e.setRenderTargetTextures(y,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(y))}let oe=N[ue];oe===void 0&&(oe=new mn,oe.layers.enable(ue),oe.viewport=new St,N[ue]=oe),oe.matrix.fromArray(Me.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Me.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ue===0&&(W.matrix.copy(oe.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Te===!0&&W.cameras.push(oe)}const F=i.enabledFeatures;if(F&&F.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const ue=h.getDepthInformation(ne[0]);ue&&ue.isValid&&ue.texture&&p.init(ue,i.renderState)}if(F&&F.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let ue=0;ue<ne.length;ue++){const Me=ne[ue].camera;if(Me){let Ye=m[Me];Ye||(Ye=new hf,m[Me]=Ye);const oe=h.getCameraImage(Me);Ye.sourceTexture=oe}}}}for(let ne=0;ne<b.length;ne++){const Te=T[ne],F=b[ne];Te!==null&&F!==void 0&&F.update(Te,ge,c||o)}ee&&ee($,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),g=null}const de=new Rf;de.setAnimationLoop(ce),this.setAnimationLoop=function($){ee=$},this.dispose=function(){}}}const Kv=new Ze,Bf=new tt;Bf.set(-1,0,0,0,1,0,0,0,1);function Zv(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Sf(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,S,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===gn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===gn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m),S=v.envMap,y=v.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Bf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jv(s,e,t,n){let i={},r={};function o(v,S){const y=S.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,S){let y=i[v.id];y===void 0&&(g(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",p));const b=S.program;n.updateUBOMapping(v,b);const T=e.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){const S=s.createBuffer(),y=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,y,b),s.bindBuffer(s.UNIFORM_BUFFER,null),S}function c(v){const S=i[v.id],y=v.uniforms,b=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let T=0,_=y.length;T<_;T++){const M=y[T];if(Array.isArray(M))for(let C=0,w=M.length;C<w;C++)u(M[C],T,C,b);else u(M,T,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(v,S,y,b){if(f(v,S,y,b)===!0){const T=v.__offset,_=v.value;if(Array.isArray(_)){let M=0;for(let C=0;C<_.length;C++){const w=_[C],P=x(w,!0);h(w,v.__data,M),M+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else h(_,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,v.__data)}}function h(v,S,y){typeof v=="number"||typeof v=="boolean"?S[y]=v:v.isMatrix3?(S[y]=v.elements[0],S[y+1]=v.elements[1],S[y+2]=v.elements[2],S[y+3]=0,S[y+4]=v.elements[3],S[y+5]=v.elements[4],S[y+6]=v.elements[5],S[y+7]=0,S[y+8]=v.elements[6],S[y+9]=v.elements[7],S[y+10]=v.elements[8],S[y+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-y),y):v.toArray(S,y)}function f(v,S,y,b){const T=v.value,_=S+"_"+y;if(Array.isArray(T)){b[_]===void 0&&(b[_]=[]);const M=b[_];let C=!1;for(let w=0;w<T.length;w++)d(T[w],M,w)===!0&&(C=!0);return C}return d(T,b,_)}function d(v,S,y){if(S[y]===void 0)return typeof v=="number"||typeof v=="boolean"?S[y]=v:ArrayBuffer.isView(v)?S[y]=v.slice():S[y]=v.clone(),!0;{const b=S[y];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return S[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function g(v){const S=v.uniforms;let y=0;const b=16;for(let _=0,M=S.length;_<M;_++){const C=Array.isArray(S[_])?S[_]:[S[_]];for(let w=0,P=C.length;w<P;w++){const N=C[w],W=Array.isArray(N.value)?N.value:[N.value],R=Array.isArray(S[_])||Array.isArray(N.value);let I=y;for(let U=0,K=W.length;U<K;U++){const q=W[U],Z=x(q,R),ee=y%b,ce=ee%Z.boundary,de=ee+ce;y+=ce,de!==0&&b-de<Z.storage&&(y+=b-de),U===0&&(I=y),y+=Z.storage}const k=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new k((y-I)/Float32Array.BYTES_PER_ELEMENT),N.__offset=I}}const T=y%b;return T>0&&(y+=b-T),v.__size=y,v.__cache={},this}function x(v,S){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){const S=v.target;S.removeEventListener("dispose",p),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function m(){for(const v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:m}}const $v=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Kn=null;function Qv(){return Kn===null&&(Kn=new As($v,16,16,Ji,vn),Kn.name="DFG_LUT",Kn.minFilter=Bt,Kn.magFilter=Bt,Kn.wrapS=Pn,Kn.wrapT=Pn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}class jv{constructor(e={}){const{canvas:t=Xd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Tn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const x=d,p=new Set([Xl,Wl,Vl]),m=new Set([Tn,jn,_r,Es,Hl,Gl]),v=new Uint32Array(4),S=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let b=null,T=null;const _=[],M=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let P=!1,N=null,W=null,R=null,I=null;this._outputColorSpace=Dt;let k=0,U=0,K=null,q=-1,Z=null;const ee=new St,ce=new St;let de=null;const $=new Ge(0);let ge=0,ne=t.width,Te=t.height,F=1,G=null,pe=null;const ue=new St(0,0,ne,Te),Me=new St(0,0,ne,Te);let Ye=!1;const oe=new Rs,ve=new tc;let _e=!1,Le=!1;const Se=new Ze,He=new z,Fe=new St,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function ft(){return K===null?F:1}let V=n;function Ct(A,H){return t.getContext(A,H)}let lt,bt,Pe,Ut,Ke,Je,L,E,J,ye,he,Ae,be,ae,se,Ce,O,le,ie,Ie,Ee,Re,Ve;try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bl}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",xe,!1),V===null){const H="webgl2";if(V=Ct(H,A),V===null)throw Ct(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}B()}catch(A){throw t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Qe("WebGLRenderer: "+A.message),A}function B(){lt=new nx(V),lt.init(),Ee=new Vv(V,lt),bt=new X_(V,lt,e,Ee),Pe=new Hv(V,lt),bt.reversedDepthBuffer&&f&&Pe.buffers.depth.setReversed(!0),W=V.createFramebuffer(),R=V.createFramebuffer(),I=V.createFramebuffer(),Ut=new rx(V),Ke=new Av,Je=new Gv(V,lt,Pe,Ke,bt,Ee,Ut),L=new tx(w),E=new a0(V),Re=new V_(V,E),J=new ix(V,E,Ut,Re),ye=new ax(V,J,E,Re,Ut),le=new ox(V,bt,Je),se=new q_(Ke),he=new wv(w,L,lt,bt,Re,se),Ae=new Zv(w,Ke),be=new Cv,ae=new Uv(lt),O=new G_(w,L,Pe,ye,g,l),Ce=new kv(w,ye,bt),Ve=new Jv(V,Ut,bt,Pe),ie=new W_(V,lt,Ut),Ie=new sx(V,lt,Ut),Ut.programs=he.programs,w.capabilities=bt,w.extensions=lt,w.properties=Ke,w.renderLists=be,w.shadowMap=Ce,w.state=Pe,w.info=Ut}x!==Tn&&(C=new cx(x,t.width,t.height,a,i,r));const Y=new Yv(w,V);this.xr=Y,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=lt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=lt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(ne,Te,!1))},this.getSize=function(A){return A.set(ne,Te)},this.setSize=function(A,H,te=!0){if(Y.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=A,Te=H,t.width=Math.floor(A*F),t.height=Math.floor(H*F),te===!0&&(t.style.width=A+"px",t.style.height=H+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(ne*F,Te*F).floor()},this.setDrawingBufferSize=function(A,H,te){ne=A,Te=H,F=te,t.width=Math.floor(A*te),t.height=Math.floor(H*te),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(x===Tn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ee)},this.getViewport=function(A){return A.copy(ue)},this.setViewport=function(A,H,te,Q){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,H,te,Q),Pe.viewport(ee.copy(ue).multiplyScalar(ft()).round())},this.getScissor=function(A){return A.copy(Me)},this.setScissor=function(A,H,te,Q){A.isVector4?Me.set(A.x,A.y,A.z,A.w):Me.set(A,H,te,Q),Pe.scissor(ce.copy(Me).multiplyScalar(ft()).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(A){Pe.setScissorTest(Ye=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){pe=A},this.getClearColor=function(A){return A.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,te=!0){let Q=0;if(A){let j=!1;if(K!==null){const Ne=K.texture.format;j=p.has(Ne)}if(j){const Ne=K.texture.type,Be=m.has(Ne),De=O.getClearColor(),Oe=O.getClearAlpha(),Xe=De.r,rt=De.g,mt=De.b;Be?(v[0]=Xe,v[1]=rt,v[2]=mt,v[3]=Oe,V.clearBufferuiv(V.COLOR,0,v)):(S[0]=Xe,S[1]=rt,S[2]=mt,S[3]=Oe,V.clearBufferiv(V.COLOR,0,S))}else Q|=V.COLOR_BUFFER_BIT}H&&(Q|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&V.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),O.dispose(),be.dispose(),ae.dispose(),Je.dispose(),Ke.dispose(),L.dispose(),ye.dispose(),J.dispose(),Re.dispose(),Ve.dispose(),he.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Mc),Y.removeEventListener("sessionend",Sc),ki.stop()};function fe(A){A.preventDefault(),Co("WebGLRenderer: Context Lost."),P=!0}function we(){Co("WebGLRenderer: Context Restored."),P=!1;const A=Ut.autoReset,H=Ce.enabled,te=Ce.autoUpdate,Q=Ce.needsUpdate,j=Ce.type;B(),Ut.autoReset=A,Ce.enabled=H,Ce.autoUpdate=te,Ce.needsUpdate=Q,Ce.type=j}function xe(A){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const H=A.target;H.removeEventListener("dispose",st),je(H)}function je(A){We(A),Ke.remove(A)}function We(A){const H=Ke.get(A).programs;H!==void 0&&(H.forEach(function(te){he.releaseProgram(te)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,te,Q,j,Ne){H===null&&(H=$e);const Be=j.isMesh&&j.matrixWorld.determinantAffine()<0,De=id(A,H,te,Q,j);Pe.setMaterial(Q,Be);let Oe=te.index,Xe=1;if(Q.wireframe===!0){if(Oe=J.getWireframeAttribute(te),Oe===void 0)return;Xe=2}const rt=te.drawRange,mt=te.attributes.position;let ze=rt.start*Xe,gt=(rt.start+rt.count)*Xe;Ne!==null&&(ze=Math.max(ze,Ne.start*Xe),gt=Math.min(gt,(Ne.start+Ne.count)*Xe)),Oe!==null?(ze=Math.max(ze,0),gt=Math.min(gt,Oe.count)):mt!=null&&(ze=Math.max(ze,0),gt=Math.min(gt,mt.count));const Gt=gt-ze;if(Gt<0||Gt===1/0)return;Re.setup(j,Q,De,te,Oe);let It,wt=ie;if(Oe!==null&&(It=E.get(Oe),wt=Ie,wt.setIndex(It)),j.isMesh)Q.wireframe===!0?(Pe.setLineWidth(Q.wireframeLinewidth*ft()),wt.setMode(V.LINES)):wt.setMode(V.TRIANGLES);else if(j.isLine){let nn=Q.linewidth;nn===void 0&&(nn=1),Pe.setLineWidth(nn*ft()),j.isLineSegments?wt.setMode(V.LINES):j.isLineLoop?wt.setMode(V.LINE_LOOP):wt.setMode(V.LINE_STRIP)}else j.isPoints?wt.setMode(V.POINTS):j.isSprite&&wt.setMode(V.TRIANGLES);if(j.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))wt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const nn=j._multiDrawStarts,ke=j._multiDrawCounts,un=j._multiDrawCount,yt=Oe?E.get(Oe).bytesPerElement:1,Hi=Ke.get(Q).currentProgram.getUniforms();for(let sn=0;sn<un;sn++)Hi.setValue(V,"_gl_DrawID",sn),wt.render(nn[sn]/yt,ke[sn])}else if(j.isInstancedMesh)wt.renderInstances(ze,Gt,j.count);else if(te.isInstancedBufferGeometry){const nn=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,ke=Math.min(te.instanceCount,nn);wt.renderInstances(ze,Gt,ke)}else wt.render(ze,Gt)};function Pt(A,H,te,Q){N!==null&&A.isNodeMaterial&&N.setObject(Q,A),_e===!0&&se.setState(A,te,!1),A.transparent===!0&&A.side===ln&&A.forceSinglePass===!1?(A.side=gn,A.needsUpdate=!0,ks(A,H,Q),A.side=Fi,A.needsUpdate=!0,ks(A,H,Q),A.side=ln):ks(A,H,Q)}this.compile=function(A,H,te=null){te===null&&(te=A),N!==null&&N.renderStart(A,H,te),T=ae.get(te),T.init(H),M.push(T),te.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),A!==te&&A.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),Le=this.localClippingEnabled,_e=se.init(this.clippingPlanes,Le),_e===!0&&se.setGlobalState(this.clippingPlanes,H),N!==null&&Ce.render(T.state.shadowsArray,te,H);const Q=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ne=j.material;if(Ne)if(Array.isArray(Ne))for(let Be=0;Be<Ne.length;Be++){const De=Ne[Be];Pt(De,te,H,j),Q.add(De)}else Pt(Ne,te,H,j),Q.add(Ne)}),T=M.pop(),N!==null&&N.renderEnd(),Q},this.compileAsync=function(A,H,te=null){const Q=this.compile(A,H,te);return new Promise(j=>{function Ne(){if(Q.forEach(function(Be){const Oe=Ke.get(Be).currentProgram;(Oe===void 0||Oe.isReady())&&Q.delete(Be)}),Q.size===0){j(A);return}setTimeout(Ne,10)}lt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let ii=null;function Jo(A){ii&&ii(A)}function Mc(){ki.stop()}function Sc(){ki.start()}const ki=new Rf;ki.setAnimationLoop(Jo),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(A){ii=A,Y.setAnimationLoop(A),A===null?ki.stop():ki.start()},Y.addEventListener("sessionstart",Mc),Y.addEventListener("sessionend",Sc),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(A,H);const te=Y.enabled===!0&&Y.isPresenting===!0,Q=C!==null&&(K===null||te)&&C.begin(w,K);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(H),H=Y.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,H,K),T=ae.get(A,M.length),T.init(H),T.state.textureUnits=Je.getTextureUnits(),M.push(T),Se.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?ve.setFromArrayCamera(H):oe.setFromProjectionMatrix(Se,zn,H.reversedDepth),Le=this.localClippingEnabled,_e=se.init(this.clippingPlanes,Le),b=be.get(A,_.length),b.init(),_.push(b),this.info.render.frame++,Y.enabled===!0&&Y.isPresenting===!0){const Be=w.xr.getDepthSensingMesh();Be!==null&&$o(Be,H,-1/0,w.sortObjects)}$o(A,H,0,w.sortObjects),b.finish(),N!==null&&N.updateLights(T.state.lightsArray),w.sortObjects===!0&&b.sort(G,pe),at=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,at&&O.addToRenderList(b,A),this.info.autoReset===!0&&this.info.reset(),_e===!0&&se.beginShadows();const j=T.state.shadowsArray;if(Ce.render(j,A,H),_e===!0&&se.endShadows(),(Q&&C.hasRenderPass())===!1){const Be=b.opaque,De=b.transmissive;if(T.setupLights(),H.isArrayCamera){const Oe=H.cameras;if(De.length>0)for(let Xe=0,rt=Oe.length;Xe<rt;Xe++){const mt=Oe[Xe];Tc(Be,De,A,mt)}at&&O.render(A);for(let Xe=0,rt=Oe.length;Xe<rt;Xe++){const mt=Oe[Xe];bc(b,A,mt,mt.viewport)}}else De.length>0&&Tc(Be,De,A,H),at&&O.render(A),bc(b,A,H)}K!==null&&U===0&&(Je.updateMultisampleRenderTarget(K),Je.updateRenderTargetMipmap(K)),Q&&C.end(w),A.isScene===!0&&A.onAfterRender(w,A,H),Re.resetDefaultState(),q=-1,Z=null,M.pop(),M.length>0?(T=M[M.length-1],Je.setTextureUnits(T.state.textureUnits),_e===!0&&se.setGlobalState(w.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,N!==null&&N.renderEnd()};function $o(A,H,te,Q){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){const Be=H.isArrayCamera?ve:oe;if(!A.frustumCulled||A.intersectsFrustum(Be)){Q&&Fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Se);const De=ye.update(A),Oe=A.material;Oe.visible&&b.push(A,De,Oe,te,Fe.z,null,H)}}else if(A.isMesh||A.isLine||A.isPoints){const Be=H.isArrayCamera?ve:oe;if(!A.frustumCulled||A.intersectsFrustum(Be)){const De=ye.update(A),Oe=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Fe.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Fe.copy(De.boundingSphere.center)),Fe.applyMatrix4(A.matrixWorld).applyMatrix4(Se)),Array.isArray(Oe)){const Xe=De.groups;for(let rt=0,mt=Xe.length;rt<mt;rt++){const ze=Xe[rt],gt=Oe[ze.materialIndex];gt&&gt.visible&&b.push(A,De,gt,te,Fe.z,ze,H)}}else Oe.visible&&b.push(A,De,Oe,te,Fe.z,null,H)}}}const Ne=A.children;for(let Be=0,De=Ne.length;Be<De;Be++)$o(Ne[Be],H,te,Q)}function bc(A,H,te,Q){const{opaque:j,transmissive:Ne,transparent:Be}=A;T.setupLightsView(te),_e===!0&&se.setGlobalState(w.clippingPlanes,te),Q&&Pe.viewport(ee.copy(Q)),j.length>0&&Lr(j,H,te),Ne.length>0&&Lr(Ne,H,te),Be.length>0&&Lr(Be,H,te),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Tc(A,H,te,Q){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Q.id]===void 0){const ze=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Q.id]=new Hn(1,1,{generateMipmaps:!0,type:ze?vn:Tn,minFilter:On,samples:Math.max(4,bt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}const Ne=T.state.transmissionRenderTarget[Q.id],Be=Q.viewport||ee;Ne.setSize(Be.z*w.transmissionResolutionScale,Be.w*w.transmissionResolutionScale);const De=w.getRenderTarget(),Oe=w.getActiveCubeFace(),Xe=w.getActiveMipmapLevel();w.setRenderTarget(Ne),w.getClearColor($),ge=w.getClearAlpha(),ge<1&&w.setClearColor(16777215,.5),w.clear(),at&&O.render(te);const rt=w.toneMapping;w.toneMapping=_i;const mt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),T.setupLightsView(Q),_e===!0&&se.setGlobalState(w.clippingPlanes,Q),Lr(A,te,Q),Je.updateMultisampleRenderTarget(Ne),Je.updateRenderTargetMipmap(Ne),lt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let gt=0,Gt=H.length;gt<Gt;gt++){const It=H[gt],{object:wt,geometry:nn,material:ke,group:un}=It;if(ke.side===ln&&wt.layers.test(Q.layers)){const yt=ke.side;ke.side=gn,ke.needsUpdate=!0,Ec(wt,te,Q,nn,ke,un),ke.side=yt,ke.needsUpdate=!0,ze=!0}}ze===!0&&(Je.updateMultisampleRenderTarget(Ne),Je.updateRenderTargetMipmap(Ne))}w.setRenderTarget(De,Oe,Xe),w.setClearColor($,ge),mt!==void 0&&(Q.viewport=mt),w.toneMapping=rt}function Lr(A,H,te){const Q=H.isScene===!0?H.overrideMaterial:null;for(let j=0,Ne=A.length;j<Ne;j++){const Be=A[j],{object:De,geometry:Oe,group:Xe}=Be;let rt=Be.material;rt.allowOverride===!0&&Q!==null&&(rt=Q),De.layers.test(te.layers)&&Ec(De,H,te,Oe,rt,Xe)}}function Ec(A,H,te,Q,j,Ne){N!==null&&j.isNodeMaterial&&N.setObject(A,j),A.onBeforeRender(w,H,te,Q,j,Ne),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(w,H,te,Q,A,Ne),j.transparent===!0&&j.side===ln&&j.forceSinglePass===!1?(j.side=gn,j.needsUpdate=!0,w.renderBufferDirect(te,H,Q,j,A,Ne),j.side=Fi,j.needsUpdate=!0,w.renderBufferDirect(te,H,Q,j,A,Ne),j.side=ln):w.renderBufferDirect(te,H,Q,j,A,Ne),A.onAfterRender(w,H,te,Q,j,Ne)}function wc(A){let H=0;for(const te of A)te.texture!==null&&H++;return H}function ks(A,H,te){H.isScene!==!0&&(H=$e);const Q=Ke.get(A),j=T.state.lights,Ne=T.state.shadowsArray,Be=j.state.version,De=he.getParameters(A,j.state,Ne,H,te,T.state.lightProbeGridArray),Oe=he.getProgramCacheKey(De);let Xe=Q.programs;Q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,Q.fog=H.fog;const rt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Q.envMap=L.get(A.envMap||Q.environment,rt),Q.envMapRotation=Q.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",st),Xe=new Map,Q.programs=Xe,Q.programVariants=new Map);let mt=Xe.get(Oe);if(mt!==void 0){if(Q.currentProgram===mt&&Q.lightsStateVersion===Be)return Rc(A,De),mt}else De.uniforms=he.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,te,De),A.onBeforeCompile(De,w),mt=he.acquireProgram(De,Oe),Xe.set(Oe,mt),Q.uniforms=De.uniforms;const ze=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=se.uniform),Rc(A,De),Q.needsLights=rd(A),Q.lightsStateVersion=Be,Q.needsLights&&(ze.ambientLightColor.value=j.state.ambient,ze.lightProbe.value=j.state.probe,ze.sunLights.value=j.state.sun,ze.sunLightShadows.value=j.state.sunShadow,ze.directionalLights.value=j.state.directional,ze.directionalLightShadows.value=j.state.directionalShadow,ze.spotLights.value=j.state.spot,ze.spotLightShadows.value=j.state.spotShadow,ze.rectAreaLights.value=j.state.rectArea,ze.ltc_1.value=j.state.rectAreaLTC1,ze.ltc_2.value=j.state.rectAreaLTC2,ze.pointLights.value=j.state.point,ze.pointLightShadows.value=j.state.pointShadow,ze.hemisphereLights.value=j.state.hemi,ze.sunShadowMatrix.value=j.state.sunShadowMatrix,ze.sunShadowCascade.value=j.state.sunShadowCascade,ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ze.spotLightMatrix.value=j.state.spotLightMatrix,ze.spotLightMap.value=j.state.spotLightMap,ze.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.numLightProbeGrids=wc(T.state.lightProbeGridArray),Q.currentProgram=mt,Q.uniformsList=null,mt}function nd(A,H,te,Q,j){const Ne=Ke.get(A),Be=Ne.currentProgram.id+","+Q+","+j;let De=Ne.programVariants.get(Be);return De===void 0?(De=ks(A,H,te),Ne.programVariants.set(Be,De)):(Ne.currentProgram=De,Ne.uniformsList=null,Ne.outputColorSpace=Q,Ne.toneMapping=j),De}function Ac(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=vo.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Rc(A,H){const te=Ke.get(A);te.outputColorSpace=H.outputColorSpace,te.batching=H.batching,te.batchingColor=H.batchingColor,te.instancing=H.instancing,te.instancingColor=H.instancingColor,te.instancingMorph=H.instancingMorph,te.skinning=H.skinning,te.morphTargets=H.morphTargets,te.morphNormals=H.morphNormals,te.morphColors=H.morphColors,te.morphTargetsCount=H.morphTargetsCount,te.numClippingPlanes=H.numClippingPlanes,te.numIntersection=H.numClipIntersection,te.vertexAlphas=H.vertexAlphas,te.vertexTangents=H.vertexTangents,te.toneMapping=H.toneMapping}function id(A,H,te,Q,j){H.isScene!==!0&&(H=$e),Je.resetTextureUnits();const Ne=H.fog,Be=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?H.environment:null,De=K===null?w.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:pt.workingColorSpace,Oe=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Xe=L.get(Q.envMap||Be,Oe),rt=Q.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,mt=!!te.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ze=!!te.morphAttributes.position,gt=!!te.morphAttributes.normal,Gt=!!te.morphAttributes.color;let It=_i;Q.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(It=w.toneMapping);const wt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,nn=wt!==void 0?wt.length:0,ke=Ke.get(Q),un=T.state.lights;if(_e===!0&&(Le===!0||A!==Z)){const Ft=A===Z&&Q.id===q;se.setState(Q,A,Ft)}let yt=!1,Hi=!1;Q.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==un.state.version||j.isBatchedMesh&&ke.batching===!1||!j.isBatchedMesh&&ke.batching===!0||j.isBatchedMesh&&ke.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&ke.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&ke.instancing===!1||!j.isInstancedMesh&&ke.instancing===!0||j.isSkinnedMesh&&ke.skinning===!1||!j.isSkinnedMesh&&ke.skinning===!0||j.isInstancedMesh&&ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ke.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ke.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ke.instancingMorph===!1&&j.morphTexture!==null||ke.envMap!==Xe||Q.fog===!0&&ke.fog!==Ne||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==se.numPlanes||ke.numIntersection!==se.numIntersection)||ke.vertexAlphas!==rt||ke.vertexTangents!==mt||ke.morphTargets!==ze||ke.morphNormals!==gt||ke.morphColors!==Gt||ke.morphTargetsCount!==nn||ke.numLightProbeGrids!==wc(T.state.lightProbeGridArray)?yt=!0:(ke.outputColorSpace!==De||ke.toneMapping!==It)&&(Hi=!0):(yt=!0,ke.__version=Q.version);let sn=ke.currentProgram;(yt===!0||Hi===!0)&&(sn=Hi===!0?nd(Q,H,j,De,It):ks(Q,H,j),N&&Q.isNodeMaterial&&N.onUpdateProgram(Q,sn,ke));let Dr=!1,Mi=!1,Gi=!1;const xt=sn.getUniforms(),Qt=ke.uniforms;if(Pe.useProgram(sn.program)&&(Dr=!0,Mi=!0,Gi=!0),Q.id!==q&&(q=Q.id,Mi=!0),Dr||Z!==A){Pe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),xt.setValue(V,"projectionMatrix",A.projectionMatrix),xt.setValue(V,"viewMatrix",A.matrixWorldInverse);const Jt=xt.map.cameraPosition;Jt!==void 0&&Jt.setValue(V,He.setFromMatrixPosition(A.matrixWorld)),bt.logarithmicDepthBuffer&&xt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&xt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,Mi=!0,Gi=!0)}if(ke.needsLights&&(un.state.sunShadowMap.length>0&&xt.setValue(V,"sunShadowMap",un.state.sunShadowMap,Je),un.state.directionalShadowMap.length>0&&xt.setValue(V,"directionalShadowMap",un.state.directionalShadowMap,Je),un.state.spotShadowMap.length>0&&xt.setValue(V,"spotShadowMap",un.state.spotShadowMap,Je),un.state.pointShadowMap.length>0&&xt.setValue(V,"pointShadowMap",un.state.pointShadowMap,Je)),j.isSkinnedMesh){xt.setOptional(V,j,"bindMatrix"),xt.setOptional(V,j,"bindMatrixInverse");const Ft=j.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),xt.setValue(V,"boneTexture",Ft.boneTexture,Je))}j.isBatchedMesh&&(xt.setOptional(V,j,"batchingTexture"),xt.setValue(V,"batchingTexture",j._matricesTexture,Je),xt.setOptional(V,j,"batchingIdTexture"),xt.setValue(V,"batchingIdTexture",j._indirectTexture,Je),xt.setOptional(V,j,"batchingColorTexture"),j._colorsTexture!==null&&xt.setValue(V,"batchingColorTexture",j._colorsTexture,Je));const In=te.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&le.update(j,te,sn),(Mi||ke.receiveShadow!==j.receiveShadow)&&(ke.receiveShadow=j.receiveShadow,xt.setValue(V,"receiveShadow",j.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&H.environment!==null&&(Qt.envMapIntensity.value=H.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=Qv()),Mi){if(xt.setValue(V,"toneMappingExposure",w.toneMappingExposure),ke.needsLights&&sd(Qt,Gi),Ne&&Q.fog===!0&&Ae.refreshFogUniforms(Qt,Ne),Ae.refreshMaterialUniforms(Qt,Q,F,Te,T.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.numLightProbeGrids>0){const Ft=y;let Jt=0;for(const si of T.state.lightProbeGridArray)si.texture!==null&&(Ft.textures[Jt]=si.texture,Ft.min[Jt]=si.boundingBox.min,Ft.max[Jt]=si.boundingBox.max,Ft.resolution[Jt]=si.resolution,Jt++);for(const si in Ft)Ft[si].length=Jt;Qt.probesSH.value=Ft.textures,Qt.probesMin.value=Ft.min,Qt.probesMax.value=Ft.max,Qt.probesResolution.value=Ft.resolution}vo.upload(V,Ac(ke),Qt,Je)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(vo.upload(V,Ac(ke),Qt,Je),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&xt.setValue(V,"center",j.center),xt.setValue(V,"modelViewMatrix",j.modelViewMatrix),xt.setValue(V,"normalMatrix",j.normalMatrix),xt.setValue(V,"modelMatrix",j.matrixWorld),Q.uniformsGroups!==void 0){const Ft=Q.uniformsGroups;for(let Jt=0,si=Ft.length;Jt<si;Jt++){const Pc=Ft[Jt];Ve.update(Pc,sn),Ve.bind(Pc,sn)}}return sn}function sd(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function rd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,H,te){const Q=Ke.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Ke.get(A.texture).__webglTexture=H,Ke.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:te,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const te=Ke.get(A);te.__webglFramebuffer=H,te.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,te=0){K=A,k=H,U=te;let Q=null,j=!1,Ne=!1;if(A){const De=Ke.get(A);if(De.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(V.FRAMEBUFFER,De.__webglFramebuffer),ee.copy(A.viewport),ce.copy(A.scissor),de=A.scissorTest,Pe.viewport(ee),Pe.scissor(ce),Pe.setScissorTest(de),q=-1;return}else if(De.__webglFramebuffer===void 0)Je.setupRenderTarget(A);else if(De.__hasExternalTextures)Je.rebindTextures(A,Ke.get(A.texture).__webglTexture,Ke.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const rt=A.depthTexture;if(De.__boundDepthTexture!==rt){if(rt!==null&&Ke.has(rt)&&(A.width!==rt.image.width||A.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(A)}}const Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ne=!0);const Xe=Ke.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[H])?Q=Xe[H][te]:Q=Xe[H],j=!0):A.samples>0&&Je.useMultisampledRTT(A)===!1?Q=Ke.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?Q=Xe[te]:Q=Xe,ee.copy(A.viewport),ce.copy(A.scissor),de=A.scissorTest}else ee.copy(ue).multiplyScalar(F).floor(),ce.copy(Me).multiplyScalar(F).floor(),de=Ye;if(te!==0&&(Q=W),Pe.bindFramebuffer(V.FRAMEBUFFER,Q)&&Pe.drawBuffers(A,Q),Pe.viewport(ee),Pe.scissor(ce),Pe.setScissorTest(de),j){const De=Ke.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+H,De.__webglTexture,te)}else if(Ne){const De=H;for(let Oe=0;Oe<A.textures.length;Oe++){const Xe=Ke.get(A.textures[Oe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Oe,Xe.__webglTexture,te,De)}}else if(A!==null&&te!==0){const De=Ke.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,De.__webglTexture,te)}q=-1};function Cc(A){const H=Ke.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=bt.textureFormatReadable(A.format),H.__typeReadable=bt.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,te,Q,j,Ne,Be,De=0){if(!(A&&A.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Be!==void 0&&(Oe=Oe[Be],Array.isArray(Oe)&&(Oe=Oe[0])),Oe){Pe.bindFramebuffer(V.FRAMEBUFFER,Oe);try{const Xe=A.textures[De],rt=Xe.format,mt=Xe.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+De);const ze=Cc(Xe);if(ze.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Q&&te>=0&&te<=A.height-j&&V.readPixels(H,te,Q,j,Ee.convert(rt),Ee.convert(mt),Ne)}finally{const Xe=K!==null?Ke.get(K).__webglFramebuffer:null;Pe.bindFramebuffer(V.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,H,te,Q,j,Ne,Be,De=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Be!==void 0&&(Oe=Oe[Be],Array.isArray(Oe)&&(Oe=Oe[0])),Oe)if(H>=0&&H<=A.width-Q&&te>=0&&te<=A.height-j){Pe.bindFramebuffer(V.FRAMEBUFFER,Oe);const Xe=A.textures[De],rt=Xe.format,mt=Xe.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+De);const ze=Cc(Xe);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,gt),V.bufferData(V.PIXEL_PACK_BUFFER,Ne.byteLength,V.STREAM_READ),V.readPixels(H,te,Q,j,Ee.convert(rt),Ee.convert(mt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const Gt=K!==null?Ke.get(K).__webglFramebuffer:null;Pe.bindFramebuffer(V.FRAMEBUFFER,Gt);const It=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await qd(V,It,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,gt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ne),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(gt),V.deleteSync(It),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,te=0){const Q=Math.pow(2,-te),j=Math.floor(A.image.width*Q),Ne=Math.floor(A.image.height*Q),Be=H!==null?H.x:0,De=H!==null?H.y:0;Je.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,te,0,0,Be,De,j,Ne),Pe.unbindTexture()},this.copyTextureToTexture=function(A,H,te=null,Q=null,j=0,Ne=0){let Be,De,Oe,Xe,rt,mt,ze,gt,Gt;const It=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(te!==null)Be=te.max.x-te.min.x,De=te.max.y-te.min.y,Oe=te.isBox3?te.max.z-te.min.z:1,Xe=te.min.x,rt=te.min.y,mt=te.isBox3?te.min.z:0;else{const xt=Math.pow(2,-j);Be=Math.floor(It.width*xt),De=Math.floor(It.height*xt),A.isDataArrayTexture?Oe=It.depth:A.isData3DTexture?Oe=Math.floor(It.depth*xt):Oe=1,Xe=0,rt=0,mt=0}Q!==null?(ze=Q.x,gt=Q.y,Gt=Q.z):(ze=0,gt=0,Gt=0);const wt=Ee.convert(H.format),nn=Ee.convert(H.type);let ke;H.isData3DTexture?(Je.setTexture3D(H,0),ke=V.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Je.setTexture2DArray(H,0),ke=V.TEXTURE_2D_ARRAY):(Je.setTexture2D(H,0),ke=V.TEXTURE_2D),Pe.activeTexture(V.TEXTURE0),Pe.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,H.flipY),Pe.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),Pe.pixelStorei(V.UNPACK_ALIGNMENT,H.unpackAlignment);const un=Pe.getParameter(V.UNPACK_ROW_LENGTH),yt=Pe.getParameter(V.UNPACK_IMAGE_HEIGHT),Hi=Pe.getParameter(V.UNPACK_SKIP_PIXELS),sn=Pe.getParameter(V.UNPACK_SKIP_ROWS),Dr=Pe.getParameter(V.UNPACK_SKIP_IMAGES);Pe.pixelStorei(V.UNPACK_ROW_LENGTH,It.width),Pe.pixelStorei(V.UNPACK_IMAGE_HEIGHT,It.height),Pe.pixelStorei(V.UNPACK_SKIP_PIXELS,Xe),Pe.pixelStorei(V.UNPACK_SKIP_ROWS,rt),Pe.pixelStorei(V.UNPACK_SKIP_IMAGES,mt);const Mi=A.isDataArrayTexture||A.isData3DTexture,Gi=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const xt=Ke.get(A),Qt=Ke.get(H),In=Ke.get(xt.__renderTarget),Ft=Ke.get(Qt.__renderTarget);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,In.__webglFramebuffer),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Jt=0;Jt<Oe;Jt++)Mi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ke.get(A).__webglTexture,j,mt+Jt),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ke.get(H).__webglTexture,Ne,Gt+Jt)),V.blitFramebuffer(Xe,rt,Xe+Be,rt+De,ze,gt,ze+Be,gt+De,V.DEPTH_BUFFER_BIT,V.NEAREST);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Ke.has(A)){const xt=Ke.get(A),Qt=Ke.get(H);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,R),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,I);for(let In=0;In<Oe;In++)Mi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,xt.__webglTexture,j,mt+In):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,xt.__webglTexture,j),Gi?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Qt.__webglTexture,Ne,Gt+In):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Qt.__webglTexture,Ne),j!==0?V.blitFramebuffer(Xe,rt,Xe+Be,rt+De,ze,gt,ze+Be,gt+De,V.COLOR_BUFFER_BIT,V.NEAREST):Gi?V.copyTexSubImage3D(ke,Ne,ze,gt,Gt+In,Xe,rt,Be,De):V.copyTexSubImage2D(ke,Ne,ze,gt,Xe,rt,Be,De);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Gi?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(ke,Ne,ze,gt,Gt,Be,De,Oe,wt,nn,It.data):H.isCompressedArrayTexture?V.compressedTexSubImage3D(ke,Ne,ze,gt,Gt,Be,De,Oe,wt,It.data):V.texSubImage3D(ke,Ne,ze,gt,Gt,Be,De,Oe,wt,nn,It):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ne,ze,gt,Be,De,wt,nn,It.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ne,ze,gt,It.width,It.height,wt,It.data):V.texSubImage2D(V.TEXTURE_2D,Ne,ze,gt,Be,De,wt,nn,It);Pe.pixelStorei(V.UNPACK_ROW_LENGTH,un),Pe.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yt),Pe.pixelStorei(V.UNPACK_SKIP_PIXELS,Hi),Pe.pixelStorei(V.UNPACK_SKIP_ROWS,sn),Pe.pixelStorei(V.UNPACK_SKIP_IMAGES,Dr),Ne===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&V.generateMipmap(ke),Pe.unbindTexture()},this.initRenderTarget=function(A){Ke.get(A).__webglFramebuffer===void 0&&Je.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Je.setTextureCube(A,0):A.isData3DTexture?Je.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Je.setTexture2DArray(A,0):Je.setTexture2D(A,0),Pe.unbindTexture()},this.resetState=function(){k=0,U=0,K=null,Pe.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}const nh=new z,e1=new jt,ih=new z;class t1 extends Rt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const Zn=new Ze,n1=new Ze;class i1{constructor(e={}){const t=this;let n,i,r,o;const a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const u=document.createElement("div");u.style.transformStyle="preserve-3d",c.appendChild(u),this.getSize=function(){return{width:n,height:i}},this.render=function(p,m){const v=m.projectionMatrix.elements[5]*o;m.view&&m.view.enabled?(c.style.transform=`translate( ${-m.view.offsetX*(n/m.view.width)}px, ${-m.view.offsetY*(i/m.view.height)}px )`,c.style.transform+=`scale( ${m.view.fullWidth/m.view.width}, ${m.view.fullHeight/m.view.height} )`):c.style.transform="",p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),m.parent===null&&m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld();let S,y;m.isOrthographicCamera&&(S=-(m.right+m.left)/2,y=(m.top+m.bottom)/2);const b=m.view&&m.view.enabled?m.view.height/m.view.fullHeight:1,T=m.isOrthographicCamera?`scale( ${b} )scale(`+v+")translate("+h(S)+"px,"+h(y)+"px)"+f(m.matrixWorldInverse):`scale( ${b} )translateZ(`+v+"px)"+f(m.matrixWorldInverse),M=(m.isPerspectiveCamera?"perspective("+v+"px) ":"")+T+"translate("+r+"px,"+o+"px)";a.camera.style!==M&&(u.style.transform=M,a.camera.style=M),x(p,p,m)},this.setSize=function(p,m){n=p,i=m,r=n/2,o=i/2,l.style.width=p+"px",l.style.height=m+"px",c.style.width=p+"px",c.style.height=m+"px",u.style.width=p+"px",u.style.height=m+"px"};function h(p){return Math.abs(p)<1e-10?0:p}function f(p){const m=p.elements;return"matrix3d("+h(m[0])+","+h(-m[1])+","+h(m[2])+","+h(m[3])+","+h(m[4])+","+h(-m[5])+","+h(m[6])+","+h(m[7])+","+h(m[8])+","+h(-m[9])+","+h(m[10])+","+h(m[11])+","+h(m[12])+","+h(-m[13])+","+h(m[14])+","+h(m[15])+")"}function d(p){const m=p.elements;return"translate(-50%,-50%)"+("matrix3d("+h(m[0])+","+h(m[1])+","+h(m[2])+","+h(m[3])+","+h(-m[4])+","+h(-m[5])+","+h(-m[6])+","+h(-m[7])+","+h(m[8])+","+h(m[9])+","+h(m[10])+","+h(m[11])+","+h(m[12])+","+h(m[13])+","+h(m[14])+","+h(m[15])+")")}function g(p){p.isCSS3DObject&&(p.element.style.display="none");for(let m=0,v=p.children.length;m<v;m++)g(p.children[m])}function x(p,m,v,S){if(p.visible===!1){g(p);return}if(p.isCSS3DObject){const y=p.layers.test(v.layers)===!0,b=p.element;if(b.style.display=y===!0?"":"none",y===!0){p.onBeforeRender(t,m,v);let T;p.isCSS3DSprite?(Zn.copy(v.matrixWorldInverse),Zn.transpose(),p.rotation2D!==0&&Zn.multiply(n1.makeRotationZ(p.rotation2D)),p.matrixWorld.decompose(nh,e1,ih),Zn.setPosition(nh),Zn.scale(ih),Zn.elements[3]=0,Zn.elements[7]=0,Zn.elements[11]=0,Zn.elements[15]=1,T=d(Zn)):T=d(p.matrixWorld);const _=a.objects.get(p);if(_===void 0||_.style!==T){b.style.transform=T;const M={style:T};a.objects.set(p,M)}b.parentNode!==u&&u.appendChild(b),p.onAfterRender(t,m,v)}}for(let y=0,b=p.children.length;y<b;y++)x(p.children[y],m,v)}}}const Js=new z;function An(s,e,t,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;Js.copy(e),Js[n]=0,Js.normalize();const c=.5*o/(o+a),u=1-Js.angleTo(s)/l;return Math.sign(Js[t])===1?u*c:a/(o+a)+c+c*(1-u)}class gc extends zi{constructor(e=1,t=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new z,c=new z,u=new z(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=h.length/6,x=new z,p=.5/o;for(let m=0,v=0;m<h.length;m+=3,v+=2)switch(l.fromArray(h,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),h[m+0]=u.x*Math.sign(l.x)+c.x*r,h[m+1]=u.y*Math.sign(l.y)+c.y*r,h[m+2]=u.z*Math.sign(l.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/g)){case 0:x.set(1,0,0),d[v+0]=An(x,c,"z","y",r,n),d[v+1]=1-An(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),d[v+0]=1-An(x,c,"z","y",r,n),d[v+1]=1-An(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),d[v+0]=1-An(x,c,"x","z",r,e),d[v+1]=An(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),d[v+0]=1-An(x,c,"x","z",r,e),d[v+1]=1-An(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),d[v+0]=1-An(x,c,"x","y",r,e),d[v+1]=1-An(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),d[v+0]=An(x,c,"x","y",r,e),d[v+1]=1-An(x,c,"y","x",r,t);break}}static fromJSON(e){return new gc(e.width,e.height,e.depth,e.segments,e.radius)}}function s1(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Nt;l.morphTargetsRelative=a;let c=0;for(let u=0;u<s.length;++u){const h=s[u];let f=0,d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const g in h.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(h.attributes[g]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const g in h.morphAttributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[g].length!==s[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(h.morphAttributes[g]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=h.index.count;else if(h.attributes.position!==void 0)g=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,u),c+=g}}if(t){let u=0;const h=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=s[f].attributes.position.count}l.setIndex(h)}for(const u in r){const h=sh(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);const g=sh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function sh(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new en(o,t,n);let l=0;for(let c=0;c<s.length;++c){const u=s[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){const x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function rh(s,e){if(e===Dd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ml||e===Yh){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Ml)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function r1(s){const e=new Map,t=new Map,n=s.clone();return zf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function zf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)zf(s.children[n],e.children[n],t)}class kf extends es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new u1(t)}),this.register(function(t){return new h1(t)}),this.register(function(t){return new f1(t)}),this.register(function(t){return new M1(t)}),this.register(function(t){return new S1(t)}),this.register(function(t){return new b1(t)}),this.register(function(t){return new p1(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new g1(t)}),this.register(function(t){return new _1(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new x1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new y1(t)}),this.register(function(t){return new v1(t)}),this.register(function(t){return new a1(t)}),this.register(function(t){return new oh(t,ht.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new oh(t,ht.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new T1(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=fr.extractUrlBase(e);o=fr.resolveURL(c,this.path)}else o=fr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new lc(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Hf){try{o[ht.KHR_BINARY_GLTF]=new E1(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new B1(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ht.KHR_MATERIALS_UNLIT:o[h]=new l1;break;case ht.KHR_DRACO_MESH_COMPRESSION:o[h]=new w1(r,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:o[h]=new A1;break;case ht.KHR_MESH_QUANTIZATION:o[h]=new R1;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function o1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function zt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class a1{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ge(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],yn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Al(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new hc(u),c.distance=h;break;case"spot":c=new Hm(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Jn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class l1{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return kn}extendParams(e,t,n){const i=[];e.color=new Ge(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],yn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Dt))}return Promise.all(i)}}class c1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class u1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new me(r,r)}return Promise.all(i)}}class h1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class f1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class d1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class p1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],yn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Dt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class m1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class g1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(r[0],r[1],r[2],yn),Promise.all(i)}}class _1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class x1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(r[0],r[1],r[2],yn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Dt)),Promise.all(i)}}class v1{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class y1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class M1{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class S1{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class b1{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class oh{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class T1{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Rn.TRIANGLES&&c.mode!==Rn.TRIANGLE_STRIP&&c.mode!==Rn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const x=new Ze,p=new z,m=new jt,v=new z(1,1,1),S=new Ho(g.geometry,g.material,f);for(let b=0;b<f;b++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,b),l.SCALE&&v.fromBufferAttribute(l.SCALE,b),S.setMatrixAt(b,x.compose(p,m,v));let y=null;for(const b in l)if(b==="_COLOR_0"){const T=l[b];S.instanceColor=new Po(T.array,T.itemSize,T.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(y===null){const _=S.geometry;y=new Nt,y.name=_.name;for(const M in _.attributes)y.setAttribute(M,_.attributes[M]);for(const M in _.morphAttributes)y.morphAttributes[M]=_.morphAttributes[M];_.index!==null&&y.setIndex(_.index),y.morphTargetsRelative=_.morphTargetsRelative;for(const M of _.groups)y.addGroup(M.start,M.count,M.materialIndex);_.boundingBox!==null&&(y.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(y.boundingSphere=_.boundingSphere.clone()),y.drawRange.start=_.drawRange.start,y.drawRange.count=_.drawRange.count,y.userData=Object.assign({},_.userData),S.geometry=y}const T=l[b];y.setAttribute(b,new Po(T.array,T.itemSize,T.normalized))}Rt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Hf="glTF",$s=12,ah={JSON:1313821514,BIN:5130562};class E1{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,$s),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-$s,r=new DataView(e,$s);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===ah.JSON){const c=new Uint8Array(e,$s+o,a);this.content=n.decode(c)}else if(l===ah.BIN){const c=$s+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class w1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Il[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Il[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=bs[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const x=d.attributes[g],p=l[g];p!==void 0&&(x.normalized=p)}h(d)},a,c,yn,f)})})}}class A1{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class R1{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class Gf extends Fs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,x=g-c,p=-2*d+3*f,m=d-f,v=1-p,S=m-f+h;for(let y=0;y!==a;y++){const b=o[x+y+a],T=o[x+y+l]*u,_=o[g+y+a],M=o[g+y]*u;r[y]=v*b+S*T+p*_+m*M}return r}}const C1=new jt;class P1 extends Gf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return C1.fromArray(r).normalize().toArray(r),r}}const Rn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lh={9728:Xt,9729:Bt,9984:zh,9985:po,9986:er,9987:On},ch={33071:Pn,33648:To,10497:yi},Ia={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Il={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},I1={CUBICSPLINE:void 0,LINEAR:vr,STEP:xr},La={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function L1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Yt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fi})),s.DefaultMaterial}function Yi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Jn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function D1(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function N1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function U1(s){let e;const t=s.extensions&&s.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Da(t.attributes):e=s.indices+":"+Da(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Da(s.targets[n]);return e}function Da(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ll(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function F1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const O1=new Ze;class B1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new o1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new cc(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Wm(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new lc(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Yi(r,a,i),Jn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(fr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ia[i.type],a=bs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new en(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ia[i.type],c=bs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,p;if(d&&d!==h){const m=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let S=t.cache.get(v);S||(x=new c(a,m*d,i.count*d/u),S=new Rp(x,d/u),t.cache.add(v,S)),p=new jl(S,l,f%d/u,g)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),p=new en(x,l,g);if(i.sparse!==void 0){const m=Ia.SCALAR,v=bs[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,b=new v(o[1],S,i.sparse.count*m),T=new c(o[2],y,i.sparse.count*l);a!==null&&(p=new en(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let _=0,M=b.length;_<M;_++){const C=b[_];if(p.setX(C,T[_*l]),l>=2&&p.setY(C,T[_*l+1]),l>=3&&p.setZ(C,T[_*l+2]),l>=4&&p.setW(C,T[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=lh[f.magFilter]||Bt,u.minFilter=lh[f.minFilter]||On,u.wrapS=ch[f.wrapS]||yi,u.wrapT=ch[f.wrapT]||yi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Xt&&u.minFilter!==Bt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,g){t.parse(f,d,g)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(f){return new Promise(function(d,g){let x=d;t.isImageBitmapLoader===!0&&(x=function(p){const m=new qt(p);m.needsUpdate=!0,d(m)}),t.load(fr.resolveURL(f,r.path),x,void 0,g)})})}const h=u.then(function(f){return c===!0&&a.revokeObjectURL(l),Jn(f,o),f.userData.mimeType=o.mimeType||F1(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ht.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new lf,Gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new of,Gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Yt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ht.KHR_MATERIALS_UNLIT]){const h=i[ht.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ge(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],yn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Dt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ln);const u=r.alphaMode||La.OPAQUE;if(u===La.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===La.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==kn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new me(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==kn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==kn){const h=r.emissiveFactor;a.emissive=new Ge().setRGB(h[0],h[1],h[2],yn)}return r.emissiveTexture!==void 0&&o!==kn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Dt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Jn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Yi(i,h,r),h})}createUniqueName(e){const t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return uh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=U1(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=uh(new Nt,c,t),c.mode===Rn.TRIANGLE_STRIP?f=f.then(d=>rh(d,Yh)):c.mode===Rn.TRIANGLE_FAN&&(f=f.then(d=>rh(d,Ml))),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?L1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const x=u[d],p=o[d];let m;const v=c[d];if(p.mode===Rn.TRIANGLES||p.mode===Rn.TRIANGLE_STRIP||p.mode===Rn.TRIANGLE_FAN||p.mode===void 0){const S=r.isSkinnedMesh===!0,y=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");S&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=S&&y?new Np(x,v):new cn(x,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===Rn.LINES)m=new af(x,v);else if(p.mode===Rn.LINE_STRIP)m=new nc(x,v);else if(p.mode===Rn.LINE_LOOP)m=new Bp(x,v);else if(p.mode===Rn.POINTS)m=new zp(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&N1(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Jn(m,r),p.extensions&&Yi(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Yi(i,h[0],r),h[0];const f=new Di;r.extensions&&Yi(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new mn(it.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new fc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Ze;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ec(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],x=d.target,p=x.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],x=h[3],p=h[4],m=[];for(let S=0,y=f.length;S<y;S++){const b=f[S],T=d[S],_=g[S],M=x[S],C=p[S];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const w=n._createAnimationTracks(b,T,_,M,C);if(w)for(let P=0;P<w.length;P++)m.push(w[P])}const v=new wl(r,void 0,m);return Jn(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,O1)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){const d=u.userData.pivot,g=h[0];u.pivot=new z().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new rf:c.length>1?u=new Di:c.length===1?u=c[0]:u=new Rt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Jn(u,r),r.extensions&&Yi(n,u,r),r.matrix!==void 0){const h=new Ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Di;n.name&&(r.name=i.createUniqueName(n.name)),Jn(r,n),n.extensions&&Yi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){const f=l[u];f.parent!==null?r.add(r1(f)):r.add(f)}const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Gn||f instanceof qt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Ai[r.path]===Ai.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(Ai[r.path]){case Ai.weights:u=Er;break;case Ai.rotation:u=wr;break;case Ai.translation:case Ai.scale:u=No;break;default:n.itemSize===1?u=Er:u=No;break}const h=i.interpolation!==void 0?I1[i.interpolation]:vr,f=this._getArrayFromAccessor(n);for(let d=0,g=l.length;d<g;d++){const x=new u(l[d]+"."+Ai[r.path],t.array,f,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ll(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof wr?P1:Gf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function z1(s,e,t){const n=e.attributes,i=new En;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),a.normalized){const u=Ll(bs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new z,l=new z;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const x=Ll(bs[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new ti;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function uh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Il[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return pt.workingColorSpace!==yn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Jn(s,e),z1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?D1(s,e.targets,t):s})}const k1=new cc,H1=new kf,hh=new Map,Ir=s=>"./assets/"+s;function _t(s,e=.67,t=0){return new Yt({color:s,roughness:e,metalness:t})}function Un(s,e,t,n,i=.45){const r=_t(e,t);for(const[o,a]of[["map","color"],["normalMap","normal"]]){const l=Ir(s+"/"+a+".webp");let c=hh.get(l);c||(c=k1.load(l),c.wrapS=c.wrapT=yi,c.anisotropy=4,o==="map"&&(c.colorSpace=Dt),hh.set(l,c)),r[o]=c}return r.normalScale.setScalar(i),r.userData.meters=n,r}const D={plaster:Un("plastered_wall_02",16774622,.88,2.3,.19),floor:Un("herringbone_parquet",15322024,.58,2.45,.44),oak:Un("wood_floor_deck",12622706,.56,2,.26),table:Un("wood_table_001",14072219,.49,1.2,.24),walnut:Un("wood_floor_deck",7361601,.49,1.5,.27),stone:Un("marble_01",15787734,.33,1.35,.18),linen:Un("rough_linen",16116174,.91,.8,.29),brocade:Un("quatrefoil_jacquard_fabric",14797222,.93,.69,.32),roof:Un("clay_roof_tiles_03",15190706,.84,2.1,.56),rock:Un("rock_face_03",12826779,.97,3.8,.63),sand:Un("aerial_sand",15259058,.98,3,.36),trim:_t(14998469,.6),cream:_t(15919831,.68),green:_t(5401698,.61),brass:_t(11704931,.31,.72),bronze:_t(4998712,.39,.64),ink:_t(2632229,.48),black:_t(1448214,.68),metal:_t(9607056,.27,.76),clay:_t(11564116,.84),blue:_t(6651525,.82),ivory:_t(15525336,.87),velvet:_t(6846060,.89)},Ds=_t(15853008,.94);Ds.normalMap=D.linen.normalMap;Ds.normalScale.setScalar(.36);Ds.userData.meters=.85;const Qn=new Yt({color:13101027,metalness:.2,roughness:.09,transparent:!0,opacity:.048,depthWrite:!1}),re=(s=0,e=0,t=0)=>new z(s,e,t),nt=(s,e=0,t=0,n=0)=>{const i=new Di;return s.add(i),i.position.set(e,t,n),i};function vt(s,e,t,n=0,i=0,r=0){const o=new cn(e,t);return s.add(o),o.position.set(n,i,r),o.castShadow=!t.transparent,o.receiveShadow=!0,o}function G1(s,e,t){if(!t)return s;const n=s.attributes.uv,i=s.attributes.normal;for(let r=0;r<n.count;r++){const o=Math.abs(i.getX(r)),a=Math.abs(i.getY(r)),l=o>.65?e[2]:e[0],c=a>.65?e[2]:e[1];n.setXY(r,n.getX(r)*l/t,n.getY(r)*c/t)}return s}const vi=new Map;function V1(){vi.clear()}const W1=ct.lights_fragment_begin.replace("getPointLightInfo( pointLight, geometryPosition, directLight );",`$&
 directLight.visible = directLight.visible && dot(geometryNormal, directLight.direction) > 0.0;`).replace("getDirectionalLightInfo( directionalLight, directLight );",`$&
 directLight.visible = directLight.color != vec3(0.0) && dot(geometryNormal, directLight.direction) > 0.0;`).replaceAll("RE_Direct( directLight,","if (directLight.visible) RE_Direct( directLight,");function X1(s){s.fragmentShader=s.fragmentShader.replace("#include <lights_fragment_begin>",W1)}function q1(s){s.traverse(e=>{for(const t of Array.isArray(e.material)?e.material:[e.material])t?.type==="MeshStandardMaterial"&&t.onBeforeCompile===Gn.prototype.onBeforeCompile&&(t.onBeforeCompile=X1)})}function X(s,e,t,n,i,r,o,a=D.trim,l=0){const c=["box",i,r,o,l,a.userData.meters].join("/");let u=vi.get(c);return u||(u=l?new gc(i,r,o,l<.04?1:2,Math.min(l,i/2,r/2,o/2)):new zi(i,r,o),G1(u,[i,r,o],a.userData.meters),vi.set(c,u)),vt(s,u,a,e,t,n)}function Lt(s,e,t,n,i,r,o,a){const l=Math.max(i,r,o)<.19,c=l?"sphere-small":"sphere";vi.has(c)||vi.set(c,new Wo(1,l?14:22,l?9:16));const u=vt(s,vi.get(c),a,e,t,n);return u.scale.set(i,r,o),u}function ot(s,e,t,n,i,r,o,a,l=24){const c=["cylinder",i,r,o,l].join("/");return vi.has(c)||vi.set(c,new ic(i,r,o,l)),vt(s,vi.get(c),a,e,t,n)}function Et(s,e,t,n,i){const r=t.clone().sub(e),o=ot(s,0,0,0,n,n,r.length(),i,12);return o.position.copy(e).lerp(t,.5),o.quaternion.setFromUnitVectors(re(0,1,0),r.normalize()),o}function Ns(s,e,t,n){return vt(s,new ac(new ff(e),Math.max(12,e.length*2),t,8,!1),n)}const Na=new Map;async function Vf(s,e,t,n,i,r=0,o=0){Na.has(e)||Na.set(e,H1.loadAsync(Ir(e+"/model.gltf")));const a=await Na.get(e),l=a.scene.clone(!0),c=new En().setFromObject(l),u=c.getSize(re()),h=c.getCenter(re()),f=nt(s,t,o,n);f.rotation.y=r;const d=i/u.x;return l.scale.multiplyScalar(d),l.position.set(-h.x*d,-c.min.y*d,-h.z*d),l.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.receiveShadow=!0)}),f.add(l),f}function Ht(s){s.updateWorldMatrix(!0,!0);const e=s.matrixWorld.clone().invert(),t=new Map;s.traverse(n=>{if(!n.isMesh)return;const i=new Nt().copy(n.geometry);i.index||i.setIndex(Array.from({length:i.attributes.position.count},(r,o)=>o)),i.applyMatrix4(new Ze().multiplyMatrices(e,n.matrixWorld)),i.clearGroups(),t.has(n.material)||t.set(n.material,[]),t.get(n.material).push(i)}),s.clear();for(const[n,i]of t){const r=s1(i,!1);if(!r)throw Error("Geometry batch mismatch");const o=vt(s,r,n);o.castShadow=!n.transparent;for(const a of i)a.dispose()}}let Ua;function yo(s,e,t,n,i,r=.22,o=.012){if(!Ua){const c=document.createElement("canvas");c.width=c.height=96;const u=c.getContext("2d"),h=u.createRadialGradient(48,48,3,48,48,47);h.addColorStop(0,"#18160deb"),h.addColorStop(.48,"#18160db5"),h.addColorStop(1,"#18160d00"),u.fillStyle=h,u.fillRect(0,0,96,96),Ua=new ji(c)}const a=new kn({map:Ua,transparent:!0,opacity:r,depthWrite:!1}),l=vt(s,new tn(n,i),a,e,o,t);return l.rotation.x=-Math.PI/2,l.castShadow=!1,l}const Mo=[{title:"岛上潮声",color:"#506d68",pages:["清晨，推开露台门，先听见的是水。近处的波峰在礁石旁碎开，远处的海面却只剩细细一条亮边。坐在木椅上看久了，才能分辨那条亮边也在移动。","傍晚的潮声比白天清楚。关上客厅的灯，玻璃里的倒影慢慢淡去，窗框把海湾分成了几幅不同的画。"]},{title:"窗边观星记",color:"#394b65",pages:["初到岛上，我以为每天同一时间抬头，看到的星空也会一样。过了一季才发现，旧日记里画在窗框左侧的亮星，已经悄悄挪了位置。","晴夜适合把灯调暗，走到露台尽头。等眼睛适应以后，银河才从星点之间浮现出来。云经过的时候，星星一颗一颗消失，又重新亮起。"]},{title:"海岸花园手记",color:"#815b48",pages:["海风带着盐雾。园里的花沿墙而生，草叶贴近地面，在风停的间隙重新挺起。午后，猫常隔着窗看那些摇晃的花头。","晚饭前再绕花园走一圈。秋千的绳索轻响，远处的山先暗下去。回头看，书房的灯已经把一小块草地照亮。"]}];function Y1(s,e){const t=document.getElementById("reader"),n=t.querySelector("select");let i=Mo[s],r=0;n.replaceChildren(...Mo.map((c,u)=>new Option(c.title,String(u)))),n.value=String(s),n.onchange=()=>{i=Mo[Number(n.value)],r=0,l()};const o=t.querySelector("[data-prev]"),a=t.querySelector("[data-next]");function l(){t.querySelector("h2").textContent=i.title,t.querySelector("article").textContent=i.pages[r],t.querySelector("output").textContent=r+1+" / "+i.pages.length,o.disabled=r===0,a.disabled=r===i.pages.length-1}o.onclick=()=>{r--,l()},a.onclick=()=>{r++,l()},t.querySelector("[data-close]").onclick=()=>t.close(),t.onclose=e,l(),t.showModal()}const Wf={left:4.05,right:11,front:6.1,back:10.64},Cn=9.84,Ni={x:8.05,z:10.04};function Xf(s,e){const t=Wf;return s>t.left&&s<t.right&&e>t.front&&e<t.back}function K1(){const s=document.createElement("canvas");s.width=s.height=128;const e=s.getContext("2d");e.fillStyle="#aca697",e.fillRect(0,0,128,128);for(let n=0;n<2;n++)for(let i=0;i<2;i++)e.fillStyle=(n+i)%2?"#b9c6ba":"#ede7d6",e.fillRect(n*64+1,i*64+1,62,62);const t=new ji(s);return t.colorSpace=Dt,t.wrapS=t.wrapT=yi,t.repeat.set(8,5),t.anisotropy=4,new Yt({map:t,roughness:.48})}function Z1(){const s=document.createElement("canvas");s.width=s.height=192;const e=s.getContext("2d");e.fillStyle="#c6c5af",e.fillRect(0,0,192,192);for(let i=0;i<4;i++)for(let r=-1;r<2;r++){const o=r*96+i%2*48,a=i*48;e.fillStyle=(r+i)%2?"#8da597":"#91a89b",e.fillRect(o+1,a+1,94,46),e.fillStyle="#a1b4a7",e.fillRect(o+2,a+2,92,1)}const t=new ji(s);t.colorSpace=Dt,t.wrapS=t.wrapT=yi,t.anisotropy=4;const n=new Yt({map:t,roughness:.4});return n.userData.meters=.64,n}function J1(s,e,t,n,i){const{left:r,right:o,front:a,back:l}=Wf,c=(r+o)/2,u=l-a,h=3.39,f=_t(7836551,.48),d=_t(15986401,.2);function g(ne,Te,F,G){X(t,ne,h/2,Te,F,h,G,D.plaster),n(ne,Te,F,G,"墙")}g(r,(a+l)/2,.22,u),g(o,(a+l)/2,.22,u);const x=6.64,p=1.52,m=1.83,v=2.78,S=x-p/2,y=x+p/2;g((r+S)/2,l,S-r,.22),g((y+o)/2,l,o-y,.22),X(t,x,m/2,l,p,m,.22,D.plaster),X(t,x,(h+v)/2,l,p,h-v,.22,D.plaster),n(x,l,p,.22,"窗");const b=new Yt({color:12966095,roughness:.82,transparent:!0,opacity:.74});X(t,x,(m+v)/2,l,p,v-m,.021,b);for(const ne of[S,x,y])X(t,ne,(m+v)/2,l,.054,v-m+.08,.14,D.trim);for(const ne of[m,v])X(t,x,ne,l,p+.1,.082,.25,D.trim);X(t,c,-.115,a+u/2,o-r+.2,.22,u,D.stone),X(t,c,h+.09,a+u/2,o-r+.4,.18,u+.32,D.trim),X(t,c,h+.22,a+u/2,o-r+.56,.13,u+.48,D.roof);const T=vt(e,new tn(o-r,u),K1(),c,.004,a+u/2);T.rotation.x=-Math.PI/2;const _=Z1();for(const[ne,Te,F,G]of[[c,l-.13,o-r,.055],[r+.13,a+u/2,.055,u],[o-.13,a+u/2,.055,u]])X(e,ne,.58,Te,F,1.16,G,_),X(e,ne,1.17,Te,F+.018,.047,G+.018,D.trim);const M=1.3,C=nt(s,Cn,0,a+.11),w=new $i,P=.21,N=.31;w.moveTo(-M/2,0),w.lineTo(-P,0),w.lineTo(-P,N),w.absarc(0,N,P,Math.PI,0,!0),w.lineTo(P,0),w.lineTo(M/2,0),w.lineTo(M/2,2.35),w.lineTo(-M/2,2.35),w.closePath(),vt(C,new Cr(w,{depth:.052,bevelEnabled:!1,curveSegments:12}),D.green);for(const ne of[-.015,.068]){for(const Te of[-1,1])X(C,Te*.49,1.42,ne,.038,1.52,.019,D.trim);for(const Te of[.66,2.18])X(C,0,Te,ne,1.02,.04,.019,D.trim);X(C,.52,1.01,ne,.045,.21,.014,D.brass,.008)}Ht(C);for(const ne of[Cn-M/2-.055,Cn+M/2+.055])X(e,ne,1.22,a,.1,2.44,.37,D.trim);X(t,Cn,2.95,a,1.42,1.05,.31,D.plaster),X(e,Cn,2.4,a,1.56,.12,.39,D.trim);const W=i("卫生间灯",9.02,6.34,0,[[7.83,2.75,8.42,28,5.8]],!1);ot(e,7.83,3.34,8.42,.16,.16,.08,D.brass),ot(e,7.83,3.14,8.42,.018,.018,.36,D.brass),Lt(e,7.83,2.91,8.42,.18,.16,.18,W);const R=nt(e,10.52,0,8.32);R.rotation.y=Math.PI/2,X(R,0,.43,0,1.46,.73,.59,D.green,.036);for(const ne of[-.35,.35])X(R,ne,.45,-.306,.65,.57,.035,f,.012),X(R,ne,.61,-.335,.18,.02,.024,D.brass);X(R,0,.85,0,1.58,.095,.72,D.stone,.025);const I=new Is([[.06,0],[.22,.02],[.3,.095],[.295,.106],[.265,.093],[.18,.025],[.035,.012]].map(([ne,Te])=>new me(ne,Te)),36);vt(R,I,d,0,.9,-.045).scale.z=.72,Ns(R,[re(0,.89,.232),re(0,1.125,.232),re(0,1.14,.1),re(0,1.09,.06)],.016,D.brass);const k=ot(R,0,1.77,.27,.5,.5,.032,D.brass,48);k.rotation.x=Math.PI/2;const U=ot(R,0,1.77,.24,.471,.471,.018,_t(12111052,.12,.93),48);U.rotation.x=Math.PI/2,n(10.52,8.32,.74,1.6);const K=nt(e,5.34,0,10.04);X(K,0,.22,.15,.25,.42,.22,d,.042),X(K,0,.037,.008,.28,.072,.39,d,.028),X(K,0,.65,.23,.42,.43,.21,d,.055),X(K,0,.88,.23,.46,.043,.24,d,.016),ot(K,0,.907,.22,.034,.034,.009,D.metal),Lt(K,0,.21,-.015,.145,.215,.21,d);const q=vt(K,new Is([[.08,0],[.15,.035],[.202,.125],[.2,.17],[.145,.16],[.07,.06]].map(([ne,Te])=>new me(ne,Te)),32),d,0,.25,-.085);q.scale.z=1.42;const Z=vt(K,new Ui(.179,.023,8,40),D.ivory,0,.43,-.092);Z.rotation.x=-Math.PI/2,Z.scale.y=1.47,n(5.34,10,.49,.73);const ee=new Yt({color:12048856,transparent:!0,opacity:.15,roughness:.16,depthWrite:!1});X(e,5.09,.035,7.04,1.76,.065,1.6,D.stone,.018),X(e,5.94,1.05,6.77,.024,2.1,1.05,ee),n(5.94,6.77,.04,1.05);for(const ne of[6.25,7.29])Et(e,re(5.94,.065,ne),re(5.94,2.13,ne),.012,D.brass);Et(e,re(4.28,.97,7.02),re(4.28,2.23,7.02),.016,D.brass),Et(e,re(4.28,2.23,7.02),re(4.65,2.23,7.02),.019,D.brass),ot(e,4.65,2.19,7.02,.14,.16,.045,D.brass),ot(e,5.1,.073,7.13,.065,.065,.008,D.metal),X(e,4.22,.95,7.02,.13,.085,.24,D.brass,.016),Et(e,re(6.32,1.13,l-.24),re(7.12,1.13,l-.24),.018,D.brass),X(e,6.72,.91,l-.25,.41,.48,.052,D.linen,.018);let ce=!0;C.position.x=Cn-M;const de=new En;function $(){de.min.set(C.position.x-M/2,0,C.position.z),de.max.set(C.position.x+M/2,2.35,C.position.z+.052)}$();const ge={label:()=>ce?"合上卫生间移门":"推开卫生间移门",point:re(10.63,1.13,a),size:[.24,.48,.52],range:2.5,run(){ce=!ce}};for(const ne of[a-.205,a+.2])X(e,10.63,1.13,ne,.085,.2,.03,D.brass,.012);return{action:ge,doorBox:de,blocks(ne,Te,F){return ne>de.min.x-F&&ne<de.max.x+F&&Te>de.min.z-F&&Te<de.max.z+F},update(ne,Te,F){const G=Cn-(ce?M:0),pe=it.damp(C.position.x,G,7,ne);return C.position.x===G||[Te,F].some(ue=>Math.abs(ue.z-C.position.z)<.35&&Math.abs(ue.x-pe)<M/2+.25)?!1:(C.position.x=Math.abs(G-pe)<.002?G:pe,$(),!0)}}}function $1(s,e,t,n=384,i=466){const r=document.createElement("canvas");r.width=n,r.height=i;const o=r.getContext("2d");o.fillStyle=e,o.fillRect(0,0,n,i),o.strokeStyle=t,o.lineWidth=3,o.strokeRect(20,20,n-40,i-40),o.lineWidth=1,o.strokeRect(27,27,n-54,i-54),o.fillStyle=t,o.font='bold 77px "Songti SC","SimSun",serif',o.textAlign="center",o.textBaseline="middle";const a=Math.ceil(s.length/2);o.fillText(s.slice(0,a),n/2,i*.41,n*.84),o.fillText(s.slice(a),n/2,i*.62,n*.84);const l=new ji(r);return l.colorSpace=Dt,l.anisotropy=4,new Yt({map:l,roughness:.75})}function Q1(s,e,t,n,i,r){const o=[],a=[],l=[],c=[],u=(R,I,k,U,K=2.6)=>o.push({label:R,point:I,size:k,run:U,range:K});function h(R,I,k,U,K,q=!0){const Z=nt(s,I,1.26,k);Z.rotation.y=U,X(Z,0,0,0,.145,.205,.026,D.brass,.008);const ee=X(Z,0,0,.025,.079,.112,.032,D.cream,.008),ce=new Yt({color:16773333,emissive:16761976}),de=K.map(([ne,Te,F,G,pe])=>{const ue=new hc(16771282,G,pe,2);return ue.position.set(ne,Te,F),s.add(ue),{light:ue,power:G}});de[0].light.castShadow=q,de[0].light.shadow.mapSize.set(256,256),de[0].light.shadow.autoUpdate=!1,de[0].light.shadow.needsUpdate=!0,de[0].light.shadow.camera.near=.1,de[0].light.shadow.bias=-.001,de[0].light.shadow.normalBias=.018,de[0].light.shadow.camera.far=K[0][4],de[0].light.shadow.radius=2.3;const $={name:R,on:!0,bulb:ce,sources:de},ge=()=>{ee.rotation.x=$.on?-.21:.21,ce.emissiveIntensity=$.on?1.8:0;for(const{light:ne,power:Te}of de)ne.intensity=$.on?Te:0};return ge(),l.push($),u(()=>R+($.on?" · 关灯":" · 开灯"),re(I,1.26,k),[.28,.34,.26],()=>{$.on=!$.on,ge()}),ce}const f=h("客厅灯",3.58,1.02,-Math.PI/2,[[-5.5,3.19,-1.25,54,15],[-6.25,3.15,3.65,30,10],[-10.38,1.1,.38,4,3.6]]),d=h("卧室灯",3.98,3.24,Math.PI/2,[[7.3,3.12,1.1,32,10],[5.42,1.31,5.22,6,3.8]]),g=h("厨房灯",2.94,5.85,Math.PI,[[.52,2.46,5,17,7],[2.6,2.46,5,13,6]]);for(const R of[.6,2.6])ot(e,R,2.48,5.02,.17,.17,.014,g);function x(R,I,k,U,K,q=U/2){X(t,R,q,I,k,U,K,D.plaster),q===U/2&&n(R,I,k,K,"墙")}const p=nt(s),m=11.82;X(p,-6.85,-.1,(r+m)/2,8.3,.2,m-r,D.table),x(-2.74,8.93,.2,3.55,5.82),x(-6.85,11.79,8.32,3.55,.22),x(-10.94,6.73,.2,3.55,1.32),x(-10.94,11.06,.2,3.55,1.59),x(-10.94,8.83,.2,.81,2.87),X(t,-10.94,3.13,8.83,.2,.84,2.87,D.plaster),X(p,-10.94,1.76,8.83,.02,1.92,2.87,Qn);for(const R of[7.42,8.83,10.24])X(p,-10.93,1.77,R,.12,1.95,.055,D.walnut);X(t,-6.85,3.65,8.94,8.6,.2,6.12,D.trim),X(t,-6.85,3.83,8.94,8.78,.18,6.27,D.roof),X(p,-8.99,3.08,6.1,1.68,1.47,.27,D.plaster);for(const R of[-9.84,-8.14])X(p,R,1.2,6.1,.1,2.43,.33,D.trim);const v=h("书房灯",-7.9,6.29,0,[[-6.85,2.81,8.85,36,10],[-4.25,1.26,9.89,4.6,4]]);Et(p,re(-6.85,3.54,8.85),re(-6.85,3,8.85),.017,D.brass),ot(p,-6.85,2.98,8.85,.12,.31,.23,D.green),ot(p,-6.85,2.85,8.85,.27,.27,.018,v),X(p,-6.95,1.2,11.44,6.5,2.4,.29,D.walnut);for(const R of[-10.13,-8.56,-6.94,-5.32,-3.77])X(p,R,1.19,11.26,.073,2.42,.52,D.oak);for(const R of[.19,.7,1.24,1.8,2.38])X(p,-6.95,R,11.23,6.5,.07,.57,D.oak);n(-6.95,11.3,6.55,.6);const S=[D.green,D.clay,D.blue,D.velvet,D.ivory,D.walnut];for(let R=0;R<4;R++)for(let I=0;I<38;I++){if(R===2&&I>5&&I<33)continue;const k=-10+I*.162,U=.28+.105*(.5+.5*Math.sin(I*4.3+R)),K=[.23,.74,1.28,1.84][R];X(p,k,K+U/2,11.12,.112,U,.25,S[(R*3+I)%6]),X(p,k,K+U*.78,10.99,.095,.011,.008,D.brass)}Mo.slice(0,3).forEach((R,I)=>{const k=-8.65+I*1.58;X(p,k,1.52,11.02,.39,.49,.12,_t(R.color),.011);const U=vt(p,new tn(.375,.45),$1(R.title,R.color,"#efddb1"),k,1.52,10.953);U.rotation.y=Math.PI,u(()=>"翻开《"+R.title+"》",re(k,1.52,10.91),[.66,.55,.19],K=>K.read(I))}),X(p,-4.59,.77,9.22,1.13,.09,2.23,D.table,.04);for(const R of[-5.02,-4.16])for(const I of[8.36,10.06])X(p,R,.37,I,.079,.73,.079,D.walnut);n(-4.59,9.22,1.13,2.23),i("dining_chair_02",-5.59,9.16,.52,Math.PI/2),ot(p,-4.25,.84,9.89,.14,.17,.044,D.brass),Et(p,re(-4.25,.84,9.89),re(-4.25,1.3,9.89),.027,D.brass),ot(p,-4.25,1.37,9.89,.12,.2,.19,D.green),ot(p,-4.25,1.272,9.89,.185,.185,.012,v),Ht(p);function y(R,I,k,U,K,q=.62,Z=.77){a.push({label:R,point:re(I,U-.65,k),size:[q,.79,Z],eye:re(I,U,k),at:K})}for(const R of[-2.37,-1.4,-.43])y("客厅沙发",-4.6,R,1.16,re(-10.74,1.96,-1.38),.96,.94);const b=-1.18,T=-1.76;i("mid_century_lounge_chair",b,T,.96,Math.PI),n(b,T,.96,1.13),y("观海单人椅",b,T,1.15,re(b,1.2,-18),.94,1.06),i("mid_century_lounge_chair",-9.52,8.55,.91,.57),n(-9.52,8.55,.88,.88),y("书房阅读椅",-9.52,8.55,1.13,re(-7.55,1.47,11.3),.93,.89),y("书桌椅",-5.59,9.16,1.2,re(-4.4,1.03,9.17)),n(-5.59,9.16,.5,.5);for(const R of[-7.15,-5.55])for(const I of[2.85,4.83])y("餐椅",R,I,1.19,re(R,1.03,3.83));for(let R=0;R<5;R++)X(e,-5.4,.46,-8.14+R*.1,2.08,.065,.089,D.table,.014);for(const R of[-6.24,-4.56])for(const I of[-8.09,-7.76])X(e,R,.22,I,.083,.42,.083,D.bronze);for(let R=0;R<3;R++)X(e,-5.4,.65+R*.14,-7.69,2.08,.109,.06,D.table,.014);n(-5.4,-7.92,2.12,.55),y("露台长椅",-5.4,-7.95,1.21,re(-5.4,1.46,-22),2);const _=7.2,M=-8.15;for(const R of[_-1.25,_+1.25]){for(const I of[-.78,.78])Et(e,re(R,0,M+I),re(R,2.72,M),.067,D.oak);n(R,M,.13,1.54)}Et(e,re(_-1.37,2.72,M),re(_+1.37,2.72,M),.082,D.oak);const C=nt(s,_,2.65,M);for(const R of[-.59,.59])for(const I of[-.16,.16])Et(C,re(R,0,0),re(R,-2.15,I),.014,D.bronze);X(C,0,-2.16,0,1.44,.084,.48,D.table,.025),Ht(C),n(_,M,1.52,.59),y("海景秋千",_,M,1.24,re(_,1.5,-20),1.5);const w=a.at(-1);w.pivot=C;function P(R,I,k,U,K){const q=nt(e,I,U,k),Z=K?.43:.52,ee=K?.48:1.05;X(q,0,ee/2,.05,Z,ee,.32,K?D.ink:D.cream,.04),X(q,0,ee*.09,-.12,Z,.065,.36,D.metal,.018),X(q,0,ee*.79,-.08,Z,.14,.33,K?D.metal:D.green,.023),ot(q,0,ee*.66,-.185,.027,.024,.09,D.metal),K||(ot(q,0,1.25,.045,.19,.17,.39,_t(9089212,.23)),n(I,k,.57,.56));const ce=ee*.09+.038;ot(q,0,ce+.048,-.19,.064,.048,.096,D.ivory);const de=K?_t(4401427,.26):_t(8895168,.18),$=ot(s,I,U+ee*.45,k-.185,.009,.009,ee*.38,de,10);$.visible=!1;const ge=ot(s,I,U+ce+.05,k-.19,.055,.05,.008,de);ge.visible=!1;const ne={stream:$,liquid:ge,remaining:0,base:U+ce};c.push(ne),u(()=>R,re(I,U+ee*.64,k-.12),[Z+.1,ee+.1,.49],()=>{ne.remaining=3,ge.visible=!0})}P("咖啡机 · 萃取一杯",2.71,5.33,1.05,!0),P("饮水机 · 接水",-2.77,5.35,0,!1);const N=nt(s),W=J1(s,N,t,n,h);return Ht(N),o.push(W.action),{actions:o,seats:a,circuits:l,livingBulb:f,bedroomBulb:d,bathroom:W,update(R,I,k){const U=k===w?.19:.025;C.rotation.x=it.damp(C.rotation.x,Math.sin(R*1.62)*U,5,I);for(const K of c)K.remaining<=0||(K.remaining=Math.max(0,K.remaining-I),K.stream.visible=K.remaining>0,K.liquid.position.y=K.base+.018+.079*(1-K.remaining/3))}}}const bn={x:3.34,z:-1.69},Pi={x:3.37,z:-.37},fh=[7,12,18];function j1(s){const e=new Date(s+288e5),t=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())-8*36e5,n=fh.filter(i=>t+i*36e5<=s).at(-1);return n===void 0?t-864e5+fh.at(-1)*36e5:t+n*36e5}function ey(s,e,t){const n=_t(9921340,.92),i=_t(7908010,.17,.24),r=nt(e,bn.x,0,bn.z);r.rotation.y=Math.PI/2,X(r,0,.004,-.068,.56,.008,.7,D.green,.003),X(r,0,.3,.055,.39,.54,.33,D.ivory,.055),X(r,0,.56,.055,.39,.055,.33,D.walnut,.018),X(r,0,.287,-.12,.15,.105,.022,D.ink,.008),X(r,0,.38,-.119,.13,.05,.012,D.black,.008),X(r,0,.38,-.129,.085,.009,.008,new kn({color:9161680}));const o=new Is([[.045,0],[.105,.012],[.151,.09],[.149,.1],[.137,.094],[.1,.033],[.042,.024]].map(([I,k])=>new me(I,k)),36);ot(r,0,.071,-.245,.116,.133,.126,D.green),vt(r,o,D.metal,0,.134,-.245);const a=nt(s,bn.x-.245,.213,bn.z);for(let I=0;I<32;I++){const k=I*2.399,U=.114*Math.sqrt(I/32);Lt(a,U*Math.cos(k),.022*(1-U/.12),U*Math.sin(k),.014,.01,.012,n)}Ht(a),t(bn.x-.06,bn.z,.71,.55);const l=nt(s,bn.x-.18,.16,bn.z);for(let I=0;I<5;I++)Lt(l,-I*.011,I*.023,(I%3-1)*.024,.012,.009,.011,n);Ht(l);const c=nt(e,Pi.x,0,Pi.z);ot(c,0,.1,0,.21,.205,.19,D.ivory),ot(c,0,.198,0,.18,.18,.008,i),Ns(c,[re(.08,.19,0),re(.08,.33,0),re(-.02,.32,0),re(-.06,.2,0)],.012,i),t(Pi.x,Pi.z,.46,.46);const{x:u,z:h}=Ni,f=nt(e,u,0,h),d=_t(13286045,.98),g=_t(7900803,.67);X(f,0,.061,0,.78,.12,.94,D.ivory,.045),X(f,0,.138,-.061,.674,.045,.66,d,.014);for(const I of[-1,1])X(f,I*.365,.235,.012,.059,.33,.9,g,.025),Et(f,re(I*.334,.284,-.375),re(I*.334,.284,.286),.014,D.metal);X(f,0,.225,.405,.77,.33,.16,D.ivory,.025),X(f,0,.037,-.471,.53,.069,.18,g,.022);const x=nt(s,u,.4,h+.48);X(x,0,0,-.11,.73,.037,.22,g,.016),Ht(x);const p=nt(s,u,.391,h+.295);X(p,0,0,0,.69,.043,.034,D.metal,.008);for(let I=0;I<17;I++)Et(p,re(-.303+I*.038,-.012,0),re(-.303+I*.038,-.112,-.012),.005,D.metal);Ht(p);const m=new kn({color:10213024});X(f,.365,.413,-.24,.039,.014,.075,m,.006);for(let I=0;I<80;I++){const k=Math.sin(I*34.23)*.307,U=Math.sin(I*12.71)*.285-.05,K=vt(f,new Go(.009,0),I%3?D.cream:d,k,.16,U);K.scale.y=.28}const v=nt(s,u-.12,.173,h-.08);Lt(v,0,0,0,.049,.019,.034,n),Lt(v,.04,0,-.016,.029,.017,.026,n),Ht(v),v.visible=!1,t(u,h,.82,1.04);let S=0;try{S=Number(localStorage.getItem("villa.extraMeal"))||0}catch{}addEventListener("storage",I=>{I.key==="villa.extraMeal"&&(S=Number(I.newValue)||0)});let y=0,b=0,T=-1;function _(I){y=Math.max(j1(I),S<=I?S:0),b=Math.max(0,1-(I-y)/(14*6e4)),a.visible=b>.02,a.scale.setScalar(.44+.56*b)}let M="idle",C=0,w=0,P=!1,N=!1,W=!1;function R(I,k){const U=Math.abs(k.x-u),K=k.z-h,q=U<.34&&Math.abs(K)<.4,Z=U<.7&&K>-.91&&K<.75;if(q&&(P=!0,!N&&w>0&&(W=!0)),N&&!q&&(v.visible=!0),N=q,Z)C=0,(P||M!=="idle")&&(M="occupied");else if(P&&(C+=I,M=C<5?"waiting":"cleaning",M==="cleaning")){w=Math.min(1,w+I/5.2);const ee=it.smoothstep(w,.02,.28),ce=it.smoothstep(w,.36,.82);p.position.z=h+.295-.66*(ee-ce),p.position.y=.391-.115*(it.smoothstep(w,.28,.36)-it.smoothstep(w,.82,.91)),x.rotation.x=.92*(it.smoothstep(w,.61,.78)-it.smoothstep(w,.92,1)),w>.36&&(v.position.z=Math.max(h-.08,p.position.z+.025)),w>.82&&(v.visible=!1),w===1&&(P=W,W=!1,M=P?"waiting":"idle",C=w=0,v.position.z=h-.08,v.visible=P)}m.color.setHex(M==="cleaning"?8243933:P?15580788:10213024)}return{get meal(){return b>.02?y:0},get cleaning(){return M},actions:[{label:()=>"喂食器 · 加一份猫粮",point:re(bn.x-.18,.36,bn.z),size:[.55,.6,.5],range:2.3,run(I){S=Date.now();try{localStorage.setItem("villa.extraMeal",String(S))}catch{}_(S),I.hint("已出粮 · 每日 07:00、12:00、18:00 自动投喂（上海时间）",4200)}},{label:()=>"查看猫咪饮水机",point:re(Pi.x,.22,Pi.z),size:[.46,.42,.46],range:2,run(I){I.hint("循环饮水机正在供水",2400)}},{label:()=>"自动猫砂盆 · 清理",point:re(u+.31,.34,h-.18),size:[.75,.68,.8],range:2.4,run(I){if(M==="cleaning"){I.hint("耙齿正在把结团送入后方集便仓",2600);return}P=!0,I.hint(M==="occupied"?"猫还在附近，离开后会开始清理":"已排队清理，感应区空出五秒后启动",3200)}}],update(I,k,U){const K=Date.now(),q=Math.floor(K/1e3);q!==T&&(T=q,_(K)),l.visible=K-y<2800,l.position.y=.222+(.085-I*.4%.085),R(k,U)}}}const So={window:[-3.62,-3.72],rug:[-2.79,-1.49],lounge:[-2.33,.85],hall:[1.55,1.96],junction:[2.68,2.08],bowls:[2.66,-.38],feedApproach:[2.15,bn.z],feed:[bn.x-.49,bn.z],water:[Pi.x-.28,Pi.z],bedroom:[4.62,2.05],bedFoot:[Cn,2.08],threshold:[Cn,5.53],bath:[Cn,6.94],tiles:[8.05,8.35],mat:[Ni.x,Ni.z-.91],tray:[Ni.x,Ni.z-.08]},ty=[["window","rug","lounge","hall","junction","bowls","feedApproach","feed"],["bowls","water"],["junction","bedroom","bedFoot","threshold","bath","tiles","mat","tray"]],Dl=new Map(Object.keys(So).map(s=>[s,[]]));for(const s of ty)for(let e=1;e<s.length;e++)Dl.get(s[e-1]).push(s[e]),Dl.get(s[e]).push(s[e-1]);function dh(s,e){const t=new Map([[s,null]]),n=[s];for(const r of n){if(r===e)break;for(const o of Dl.get(r))t.has(o)||(t.set(o,r),n.push(o))}const i=[];for(let r=e;r!==s;r=t.get(r))i.unshift(r);return i}const ph=["water","rug","tray","window","lounge"],mh=["window","rug","lounge"];function gh(s){const e=Math.floor(s/36e5)+8,t=e%24;if(t>=6&&t<9||t>=17&&t<20)return null;const n=Math.imul(e,2654435761)>>>0,i=s%36e5/6e4,r=n%12,o=r+(t<6||t>=22?47:29)+(n>>>8)%6;return i>=r&&i<o?mh[(n>>>16)%mh.length]:null}function ny(s,e){const t=new s0(s),n=new Map(e.map(h=>[h.name,t.clipAction(h)]));for(const h of["SitDown","StandUp"]){const f=n.get(h);f.setLoop(qh,1),f.clampWhenFinished=!0}let i=null;function r(h){const f=n.get(h);f!==i&&(f.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).play(),i&&f.crossFadeFrom(i,.16,!1),i=f)}r("Idle");const o=["Neck_23","Head_22","TailBase_11"].map(h=>{const f=s.getObjectByName(h);return{bone:f,rest:f.quaternion.clone()}}),a=new jt,l=new jt,c=re();let u=0;return{play:r,done:()=>i.time>=i.getClip().duration-.015,update(h,f,d,g,x){for(const S of o)S.bone.quaternion.copy(S.rest);i===n.get("WalkClean")&&(i.timeScale=it.clamp(g/.17,.32,2.5)),i===n.get("SittingIdle")&&(i.timeScale=d==="nap"?.32:1),t.update(h);const p=d==="eat"||d==="drink",m=d==="nap",v=p?.9+.08*Math.sin(f*(d==="eat"?4.4:6.6)):m?.53+.022*Math.sin(f*1.7):0;u=it.damp(u,v,m?1.4:6,h);for(const[S,y]of o.entries()){const b=y.bone;y.rest.copy(b.quaternion);const T=S===2?x*1.3:-u*(S===0?.67:.33);Math.abs(T)<.001||(c.set(1,0,0).applyQuaternion(s.parent.quaternion),c.applyQuaternion(b.parent.getWorldQuaternion(a).invert()),b.quaternion.premultiply(l.setFromAxisAngle(c,T)))}}}}function iy(s,e,t,n){const i=ey(s,e,t);let r=gh(Date.now()),o=r||"window";const a=nt(s,So[o][0],0,So[o][1]);yo(a,0,0,.32,.6,.26,.008);let l=null;const c=new kf().loadAsync(Ir("somali-cat/cat.glb")).then(({scene:T,animations:_})=>{T.scale.setScalar(.123),T.position.y=1.76*.123,a.add(T),T.traverse(M=>{M.isMesh&&(M.receiveShadow=!0,M.castShadow=!1)}),l=ny(T,_),r&&m("nap")});let u=o,h=[],f="rest",d=2.8,g=0,x=0,p=0;function m(T,_=0){f=T,d=_;const M={walk:"WalkClean",sitDown:"SitDown",sit:"SittingIdle",nap:"SittingIdle",stand:"StandUp"}[T]||"Idle";l.play(M)}function v(){u=i.meal&&i.meal!==x?"feed":r||ph[g++%ph.length],h=dh(o,u),h.length?m("walk"):S()}function S(){p=0,u==="feed"?(x=i.meal,m("eat",8)):u==="water"?m("drink",6):m("sitDown")}function y(T,_){const M=Math.atan2(Math.sin(T-a.rotation.y),Math.cos(T-a.rotation.y));return a.rotation.y+=it.clamp(M,-3.5*_,3.5*_),M}function b(T){if(!h.length){S();return}const[_,M]=So[h[0]],C=_-a.position.x,w=M-a.position.z,P=Math.hypot(C,w),N=y(Math.atan2(-C,-w),T),W=(u==="feed"?.415:.32)*Math.max(.03,Math.cos(N));p=it.damp(p,Math.min(W,.1+P*2.7),6,T);const R=Math.min(P,p*T);if(P>0&&(a.position.x+=C/P*R,a.position.z+=w/P*R),P-R<.015){a.position.x=_,a.position.z=M,o=h.shift();const I=i.meal&&i.meal!==x?"feed":r;I&&I!==u&&(u=I,h=dh(o,u)),h.length||S()}}return{position:a.position,ready:c,actions:i.actions,get activity(){return f},get cleaning(){return i.cleaning},update(T,_){if(i.update(T,_,a.position),!l)return;const M=i.meal&&i.meal!==x;r=gh(Date.now()),d-=_,f==="walk"?b(_):f==="sitDown"&&l.done()?m(o===r?"nap":"sit",o==="tray"?4:25+Math.random()*45):f==="nap"&&(o!==r||M)?m("stand"):f==="sit"&&o===r&&!M?m("nap"):f==="sit"&&(d<=0||M)?m("stand"):f==="stand"&&l.done()?v():["rest","eat","drink"].includes(f)&&(f!=="rest"&&y(-Math.PI/2,_),(d<=0||M)&&v());const C=Math.abs(a.position.x-Ni.x)<.42;a.position.y=C?.144*it.smoothstep(a.position.z,Ni.z-.62,Ni.z-.39):0;const P=Math.abs(a.position.x-Cn)<.45&&n.blocks(Cn,6.22,0)?1-it.smoothstep(Math.abs(a.position.z-6.22),.58,1.05):0;l.update(_,T,f,p,P)}}}function sy(){const s=Qn.clone();s.side=ln,s.forceSinglePass=!0;const e=Qn.color,t=new Ge(14412262);let n=!1,i=0;return{film:s,get privateMode(){return n},get amount(){return i},toggle(){n=!n},update(r,o){const a=Number(n),l=it.damp(i,a,9,r);i=Math.abs(l-a)<.002?a:l,s.color.copy(e).lerp(t,i),s.opacity=it.lerp(Qn.opacity,.982,i),s.roughness=it.lerp(Qn.roughness,.84,i),s.metalness=it.lerp(Qn.metalness,.025,i),s.emissive.fromArray(o.p.skyHorizon),s.emissiveIntensity=i*(.035+.58*(1-o.p.nightness))*(1-.42*o.dark)}}}function qf(s,e,t,n){const i=nt(s,e.x,e.y,e.z);i.rotation.y=t,X(i,0,0,-.022,.177,.232,.036,D.brass,.011),X(i,0,0,.001,.143,.195,.022,D.cream,.008),X(i,0,-.047,.018,.088,.055,.018,D.green,.006);const r=document.createElement("canvas");r.width=192,r.height=86;const o=r.getContext("2d");o.fillStyle="#eee6d4",o.fillRect(0,0,192,86),o.fillStyle="#3c5148",o.font='bold 60px "Microsoft YaHei", sans-serif',o.textAlign="center",o.textBaseline="middle",o.fillText(n,96,44);const a=new ji(r);a.colorSpace=Dt,vt(i,new tn(.124,.056),new Yt({map:a,roughness:.75}),0,.049,.014)}function ry(s,e,t,n,i,r,o,a){const l=nt(s,t,0,n),c=(r+o)/2;for(const d of[.032,i-.032])X(l,d,c,0,.064,o-r,.066,D.walnut);for(const d of[r+.032,1.36,o-.032])X(l,i/2,d,0,i-.09,.058,.065,D.walnut);X(l,i/2,c,-.012,i-.09,o-r-.085,.013,Qn),Ht(l);const u=re(t+i+.032,1.08,n+.19);X(e,u.x,u.y,n+.067,.103,.159,.092,D.bronze,.009),Et(e,re(u.x,u.y,n+.093),u,.016,D.brass);const h=nt(s,u.x,u.y,u.z);Et(h,re(),re(-.08,-.054,.018),.013,D.brass),Lt(h,-.08,-.054,.043,.024,.024,.042,D.walnut),Ht(h);const f={pivot:l,width:i,angle:0,target:0,room:a+"灯",crank:h};return f.action={label:()=>(f.target?"关上":"打开")+a+"窗",point:u,size:[.3,.3,.14],range:2.65,directOnly:!0,run(){f.target=f.target?0:Math.PI*.37}},f}const Ko={left:6.2,right:7.9,front:3.08,back:4.97},di=s=>7-(7-4.1)*s/6.62;function _h(s,e,t,n,i,r){const{left:o,right:a,front:l,back:c}=Ko;function u(h,f,d,g){X(s,(h+f)/2,e,(d+g)/2,f-h,n,g-d,r)}u(-t/2,t/2,-i/2,l),u(-t/2,t/2,c,i/2),u(-t/2,o,l,c),u(a,t/2,l,c)}function oy(s,e,t){const{left:n,right:i,front:r,back:o}=Ko;if(e<n||e>i){X(s,e,t,0,.18,.14,12,D.trim);return}for(const[a,l]of[[-6,r],[o,6]])X(s,e,t,(a+l)/2,.18,.14,l-a,D.trim)}function ay(){const{left:s,right:e,front:t,back:n}=Ko,i=o=>5.65+(11.55-5.65)*o/6.62;function r(o,a,l,c,u,h){return[re(l,di(o),o),re(u,di(a),a),re(h,di(a),a),re(c,di(o),o)]}return[r(0,t,-i(0),i(0),-i(t),i(t)),r(t,n,-i(t),s,-i(n),s),r(t,n,e,i(t),e,i(n)),r(n,6.62,-i(n),i(n),-11.55,11.55)]}function ly(s,e,t,n){const{left:i,right:r,front:o,back:a}=Ko,l=r-i,c=a-o,u=(i+r)/2,h=(o+a)/2,f=Math.atan(2.9/6.62),d=c/Math.cos(f),g=nt(s,u,di(h)+.04,h);g.rotation.x=f;const x=X(g,0,.015,0,l,.026,d,Qn);for(const T of[-1,1])X(g,T*l/2,.022,0,.083,.11,d+.1,D.bronze),X(g,0,.022,T*d/2,l+.1,.11,.085,D.bronze),X(t,u+T*l/2,n-.025,h,.078,.068,c+.09,D.trim),X(t,u,n-.025,h+T*c/2,l+.09,.068,.078,D.trim);for(const T of[o,a]){const _=di(T)-n;X(e,u,n+_/2,T,l+.08,_,.047,D.trim)}const p=new $i;p.moveTo(o-h,n),p.lineTo(a-h,n),p.lineTo(a-h,di(a)),p.lineTo(o-h,di(o)),p.closePath();for(const T of[i,r]){const _=new Cr(p,{depth:.046,bevelEnabled:!1});_.rotateY(-Math.PI/2),vt(e,_,D.trim,T+(T===r?.046:0),0,h)}const m=new Yt({color:16052453,roughness:.91}),v=X(s,u,n+.039,h,l+.026,.064,c+.032,m),S=re(8.74,1.47,5.88);qf(t,S,Math.PI,"天窗");let y=!1,b=0;return{pane:x,shutter:v,center:re(u,di(h),h),get fraction(){return b},get open(){return y},action:{label:()=>y?"合上天窗白色遮板":"拉开天窗白色遮板",point:S,size:[.26,.33,.12],range:2.8,directOnly:!0,run(){y=!y}},update(T){const _=Number(y);return b===_?!1:(b+=it.clamp(_-b,-T/2.25,T/2.25),v.position.x=u+(l+.09)*b,!0)}}}const an=3.82,At=-6.1,Yf=2.54,cy=.72,Kf=new Yt({color:16771262,emissive:16764817,emissiveIntensity:.65,roughness:.47}),xh=_t(3289902,.91),ms=_t(15526363,.27),Zf=Ds.clone();Zf.side=ln;function uy(s,e,t,n,i,r){const o=Yf,a=cy,l=an+.05,c=t/2,u=new $i;u.moveTo(-c,l),u.lineTo(c,l),u.lineTo(c,o);const h=[];for(let x=0;x<=36;x++){const p=x*Math.PI/36,m=Math.cos(p)*c,v=o+Math.sin(p)*a;u.lineTo(m,v),h.push(re(e+m,v,At+.15))}u.closePath(),vt(s,new Cr(u,{depth:.32,bevelEnabled:!1}),D.plaster,e,0,At-.17),Ns(s,h,.083,D.trim);for(const x of[-1,1])X(s,e+x*c,o/2,At,.13,o,.41,D.trim),X(s,e+x*(c-.049),(o+n)/2,At,.054,o-n,.073,D.walnut);X(s,e,o,At,t,.07,.084,D.walnut);const f=h.map(x=>re(e+(x.x-e)*.968,o+(x.y-o)*.93,At));Ns(s,f,.027,D.walnut);for(const x of[.25,.5,.75]){const p=x*Math.PI;Et(s,re(e,o,At),re(e+Math.cos(p)*c*.97,o+Math.sin(p)*a*.94,At),.019,D.bronze)}if(i){const x=new $i;x.moveTo(-c+.035,0),x.lineTo(c-.035,0),x.absellipse(0,0,c-.035,a-.023,0,Math.PI,!1,0),x.closePath(),vt(s,new Vo(x,32),i,e,o,At-.012);return}X(s,e,n/2,At,t,n,.32,D.plaster),X(s,e,n+.025,At+.025,t+.18,.085,.48,D.stone),X(s,e,(o+n)/2,At,.072,o-n,.079,D.walnut);const d=r?e+t/4:e,g=r?t/2:t;X(s,d,1.36,At,g,.042,.075,D.walnut),X(s,d,(o+n)/2,At-.035,g-.08,o-n,.012,Qn)}function hy(s,e,t,n,{z:i=At+.28,bottom:r=.085,top:o=3.42,scale:a=1}={}){const l=nt(s,e,0,i),c=.32*a,u=Math.ceil(n/(.31*a));function h(S,y){const b=new tn(1,1,u*6,8),T=b.attributes.position;for(let _=0;_<T.count;_++){const M=.5+t*T.getX(_),C=T.getY(_)+.5,w=2*Math.PI*u*M+.12*(1-C)*Math.sin(M*Math.PI),P=t*(M*S+.012*(1-C)*Math.sin(Math.PI*M)),N=Math.cos(w);T.setXYZ(_,P,r+(o-r)*C+.014*a*(1-C)*N,a*(y*(1-N)+.014*(1-C)))}return b.computeVertexNormals(),b}const f=h(c,.068),d=h(n,.042);f.morphAttributes.position=[d.attributes.position],f.morphAttributes.normal=[d.attributes.normal],f.computeBoundingSphere();const g=vt(l,f,Zf),x=new Ui(.042*a,.007*a,6,12);x.rotateY(Math.PI/2);const p=new Ho(x,D.brass,u+1);p.castShadow=!1,l.add(p);const m=new Ze;function v(S){g.morphTargetInfluences[0]=S;const y=it.lerp(c,n,S);for(let b=0;b<=u;b++)p.setMatrixAt(b,m.makeTranslation(t*b/u*y,o+.04*a,0));p.instanceMatrix.needsUpdate=!0}return v(1),p.computeBoundingSphere(),v(0),{cloth:g,rings:p,setFraction:v}}function Qs(s,e,t,n,i,r,o=D.trim){for(const a of[-1,1])X(s,e+a*i/2,t,n,.038,r+.038,.035,o,.009),X(s,e,t+a*r/2,n,i,.039,.035,o,.009)}function gs(s,e,t,n,i=0){const r=nt(s,e,0,t);r.rotation.y=i,X(r,0,.085,0,n,.17,.087,D.trim),X(r,0,.178,0,n,.038,.11,D.trim,.009)}function vh(s,e,t,n,i=Kf){ot(s,e,t+.025,n,.18,.21,.05,D.brass),ot(s,e,t+.265,n,.027,.043,.46,D.brass),Lt(s,e,t+.37,n,.075,.12,.075,D.brass),ot(s,e,t+.63,n,.17,.25,.31,D.linen,40),ot(s,e,t+.48,n,.234,.234,.012,i,40)}function Fa(s,e,t,n=.67,i=.7,r=Kf){ot(s,e,an-.03,t,.14,.16,.07,D.brass),Et(s,re(e,an,t),re(e,an-n,t),.017,D.brass);const o=an-n;Lt(s,e,o-.06,t,.11,.14,.11,D.brass);for(let a=0;a<6;a++){const l=Math.cos(a*Math.PI/3)*i,c=Math.sin(a*Math.PI/3)*i;Ns(s,[re(e,o-.04,t),re(e+l*.46,o-.19,t+c*.46),re(e+l*.91,o-.11,t+c*.91),re(e+l,o+.02,t+c)],.022,D.brass),ot(s,e+l,o+.055,t+c,.063,.059,.07,D.brass),Lt(s,e+l,o+.15,t+c,.087,.108,.087,r)}}function fy(s){const e=[re(-11.55,4.1,-6.62),re(11.55,4.1,-6.62),re(11.55,4.1,6.62),re(-11.55,4.1,6.62)],t=re(-5.65,7,0),n=re(5.65,7,0),i=[[e[0],t,n,e[1]],[e[1],n,e[2]],[e[2],n,t,e[3]],[e[3],t,e[0]]];for(const[r,o]of i.entries())for(const a of r===2?ay():[o]){const l=new Nt,c=[],u=[];for(const h of a)c.push(h.x,h.y,h.z),u.push((r%2?h.z:h.x)/2.1,(h.y-4.1)/.91);l.setAttribute("position",new dt(c,3)),l.setAttribute("uv",new dt(u,2)),l.setIndex(a.length===3?[0,1,2]:[0,1,2,0,2,3]),l.computeVertexNormals(),vt(s,l,D.roof)}Et(s,t,n,.085,D.clay),e.forEach((r,o)=>Et(s,r,o===0||o===3?t:n,.075,D.clay))}function yh(s,e,t,n,i,r,o,a){const l=new tn(i+o*2,r,72,44);l.rotateX(-Math.PI/2);const c=l.attributes.position;for(let u=0;u<c.count;u++){const h=c.getX(u),f=c.getZ(u),d=Math.max(0,Math.abs(h)-i*.5),g=.015*Math.sin(10*h+2.4*f+.8*Math.cos(f*4))+.009*Math.sin(7*f-2.2*h),x=.018*Math.cos(9*h+f)*Math.pow(Math.abs(2*f/r),4);c.setXYZ(u,Math.sign(h)*(Math.min(Math.abs(h),i*.5)+.065*Math.sin(Math.min(d/.115,1)*1.57)),g+x-d*.89,f+.015*Math.sin(h*5))}l.computeVertexNormals(),vt(s,l,a,e,t,n)}function Mh(s,e,t,n,i,r,o,a){const l=nt(s,t,n,i);l.rotation.y=a,X(l,0,0,0,r+.14,o+.14,.063,D.walnut,.016),X(l,0,0,.024,r+.089,o+.089,.034,D.brass,.009),X(l,0,0,.041,r+.044,o+.044,.017,D.trim);const c=new cc().load(Ir("art-"+e+".webp"));c.colorSpace=Dt,c.anisotropy=4,vt(l,new tn(r,o),new Yt({map:c,roughness:.94}),0,0,.054)}function dy(s,e,t,n,i){const r=document.createElement("canvas");r.width=960,r.height=832;const o=r.getContext("2d"),a=["#574b3c","#d2b68a","#9d7961","#667066","#b9aa8b"];o.fillStyle="#bbaa91",o.fillRect(0,0,r.width,r.height);function l(p,m,v,S,y){o.fillStyle=y,o.beginPath(),o.moveTo(p-v,m),o.lineTo(p,m-S),o.lineTo(p+v,m),o.lineTo(p,m+S),o.closePath(),o.fill()}function c(p,m,v){o.fillStyle=a[2];for(let S=0;S<8;S++){const y=S*Math.PI/4;o.beginPath(),o.ellipse(p+Math.cos(y)*v*.54,m+Math.sin(y)*v*.54,v*.48,v*.2,y,0,Math.PI*2),o.fill()}l(p,m,v*.27,v*.27,a[0])}for(let p=0;p<12;p++)for(let m=0;m<14;m++){const v=m*72+p%2*36,S=p*72;l(v,S,29,31,"#aa9379"),l(v,S,25,27,"#bca88c"),c(v,S,15)}for(const[p,m,v]of[[5,10,a[0]],[16,8,a[1]],[36,30,a[3]],[55,6,a[1]],[63,6,a[2]]])o.strokeStyle=v,o.lineWidth=m,o.strokeRect(p,p,r.width-2*p,r.height-2*p);for(let p=40;p<r.width-30;p+=26)for(const m of[36,r.height-36])l(p,m,9,5,a[1]);for(let p=48;p<r.height-38;p+=26)for(const m of[36,r.width-36])l(m,p,5,9,a[1]);for(const[p,m,v]of[[167,225,a[3]],[155,212,a[1]],[143,199,a[2]],[132,187,"#9b8069"],[96,141,a[4]],[86,131,a[1]]])l(480,416,p,m,v);c(480,416,63);const u=o.getImageData(0,0,r.width,r.height),h=u.data;let f=7123;for(let p=0;p<h.length;p+=4){f=Math.imul(1664525,f)+1013904223>>>0;const m=(f/4294967296-.5)*16+(p/4%2?1.8:-1.8);for(let v=0;v<3;v++)h[p+v]+=m}o.putImageData(u,0,0);const d=new ji(r);d.colorSpace=Dt,d.anisotropy=8;const g=new Yt({map:d,roughness:.99});X(s,e,.017,t,n,.024,i,D.velvet);const x=vt(s,new tn(n,i),g,e,.031,t);return x.rotation.x=-Math.PI/2,x}function py(s,e,t){const r=new Uint8Array(36864);r.fill(255);for(const a of t){if(Math.abs(a.z)>6.3)continue;const l=a.name==="墙",c=a.name==="窗",u=l?1.42:c?.45:.56,h=l?.5:c?.23:.6,f=(a.x/22.2+.5)*256,d=(a.z/12.42+.5)*144,g=(a.w*.5+u)*256/22.2,x=(a.d*.5+u)*144/12.42;for(let p=Math.max(0,Math.floor(d-x));p<Math.min(144,d+x);p++)for(let m=Math.max(0,Math.floor(f-g));m<Math.min(256,f+g);m++){const v=Math.max(0,Math.abs(m+.5-f)*22.2/256-a.w*.5),S=Math.max(0,Math.abs(p+.5-d)*12.42/144-a.d*.5),y=1-it.smoothstep(Math.hypot(v,S),0,u),b=p*256+m;r[b]=Math.max(39,r[b]*(1-h*y))}}const o=new As(r,256,144,zo);o.channel=1,o.minFilter=o.magFilter=Bt,o.needsUpdate=!0;for(const a of[s,e]){a.updateWorldMatrix(!0,!1);const l=a.geometry.attributes.position,c=new Float32Array(l.count*2),u=re();for(let h=0;h<l.count;h++)u.fromBufferAttribute(l,h).applyMatrix4(a.matrixWorld),c[2*h]=u.x/22.2+.5,c[2*h+1]=u.z/12.42+.5;a.geometry.setAttribute("uv1",new en(c,2)),a.material.aoMap=o}}function my(s){const e=nt(s),t=nt(s),n=nt(s),i=nt(n),r=[],o=[],a=[],l=[],c=[],u=sy(),h=(F,G,pe,ue,Me="家具")=>o.push({x:F,z:G,w:pe,d:ue,name:Me}),f=(F,G,pe,ue,Me=0,Ye=0)=>r.push(Vf(t,F,G,pe,ue,Me,Ye));function d(F,G,pe,ue,Me=i){X(Me,F,an/2,G,pe,an,ue,D.plaster),h(F,G,pe,ue,"墙")}const g=12.42,x=X(e,0,-.105,0,22.2,.21,g,D.floor);_h(i,an+.09,22.5,.18,12.64,D.trim),_h(i,an+.28,22.9,.2,12.95,D.oak),fy(i),d(-11,0,.33,12.4),d(11,0,.33,12.4),d(-10.495,6.1,1.21,.32),d(.55,6.1,17.28,.32),d(10.795,6.1,.61,.32);const p=Q1(s,e,i,h,f,g/2),m=iy(s,e,h,p.bathroom),v=[],S=ly(n,i,e,an);p.actions.push(S.action),d(3.78,-2.45,.23,7.29,e),d(3.78,4.52,.23,3.17,e),X(e,3.78,3.26,2.06,.23,1.12,1.77,D.plaster);for(const F of[1.2,2.92])X(e,3.78,1.38,F,.35,2.76,.12,D.trim);X(e,3.78,2.76,2.06,.37,.13,1.88,D.trim),gs(e,-10.79,0,12.1,Math.PI/2),gs(e,10.79,0,12.1,Math.PI/2),gs(e,.53,5.89,17.19),gs(e,10.77,5.89,.28),gs(e,-10.39,5.89,1.05),gs(e,3.62,-2.45,7.29,Math.PI/2);const y=[[-10.69,-7.29],[-6.92,-3.52],[-3.15,.22],[.66,2.26],[4.08,7.22],[7.58,10.69]];let b=-11;for(const[F,G]of y){F>b&&d((F+b)/2,At,F-b,.34);const pe=F===.66,ue=F===-3.15||F===4.08;if(uy(i,(F+G)/2,G-F,pe?.01:.42,pe?u.film:null,ue),ue){const Me=ry(n,e,F+.077,At+.012,(G-F)/2-.112,.478,Yf-.047,F<0?"客厅":"卧室");l.push(Me),p.actions.push(Me.action)}pe||h((F+G)/2,At,G-F,.23,"窗"),b=G}d((11+b)/2,At,11-b,.34);for(const[F,G]of[[-10.8,.35],[4,10.79]]){Et(e,re(F,3.48,At+.28),re(G,3.48,At+.28),.024,D.brass);const pe={closed:!1,fraction:0,panels:[],room:F<0?"客厅灯":"卧室灯"};v.push(pe);for(const[ue,Me]of[[F,1],[G,-1]])pe.panels.push(hy(s,ue,Me,(G-F)/2)),Et(e,re(ue,3.45,At+.41),re(ue,1.14,At+.41),.011,D.brass),Lt(e,ue,1.1,At+.41,.03,.07,.03,D.brass),p.actions.push({label:()=>pe.closed?"拉开窗帘":"合上窗帘",point:re(ue,1.58,At+.45),size:[.45,1.65,.3],range:2.75,directOnly:!0,run(){pe.closed=!pe.closed}})}for(const F of[-5.91,5.91])X(e,0,an-.11,F,21.9,.18,.22,D.trim),X(e,0,an-.2,F,21.91,.055,.27,D.trim);for(const F of[-10.81,3.77,10.81])X(e,F,an-.12,0,.2,.22,12.1,D.trim);for(const F of[-7,-2.8,1.44,7.65])oy(e,F,an-.035);const T=nt(e,-10.816,0,0);T.rotation.y=Math.PI/2,X(T,0,.53,0,12,.97,.042,D.trim),X(T,0,1.015,.026,12,.064,.106,D.trim,.012);for(let F=0;F<8;F++)Qs(T,-5.16+F*1.47,.52,.038,1.24,.68,D.cream);for(const F of[-6.4,-3.8])Qs(e,F,1.95,5.91,2.18,2.82),Qs(e,F,.61,5.87,1.82,.51);const _=nt(s);Fa(_,-5.5,-1.25,.67,.7,p.livingBulb),Fa(_,-6.25,3.65,.72,.47,p.livingBulb),Fa(_,7.3,1.1,.44,.45,p.bedroomBulb),Ht(_);for(const F of _.children)F.castShadow=!1;const M=nt(n,.66,0,At+.015),C=1.6;for(const F of[.047,C-.047])X(M,F,1.24,0,.092,2.48,.092,D.walnut);for(const F of[.1,.82,2.44])X(M,C/2,F,0,C,F===.1?.19:.085,.087,D.walnut);X(M,C/2,.43,0,C-.13,.61,.067,D.green),vt(M,new tn(C-.13,1.56),u.film,C/2,1.63,0),X(M,C/2,1.61,0,.041,1.63,.062,D.walnut),X(M,C/2,1.59,0,C-.1,.039,.064,D.walnut);const w=[];for(const F of[1,-1]){const G=re(C-.14,1.04,F*.205),pe=C-.055;X(M,pe,G.y,F*.052,.082,.21,.024,D.bronze,.011),Et(M,re(pe,G.y,F*.056),re(pe,G.y,G.z),.022,D.brass),X(M,G.x,G.y,G.z,.208,.042,.045,D.brass,.012),w.push(G)}Ht(M);const P=re(2.97,1.43,At+.215);qf(e,P,0,"调光"),p.actions.push({label:()=>u.privateMode?"门玻璃 · 切换透明":"门玻璃 · 切换雾化",point:P,size:[.25,.31,.08],range:2.75,directOnly:!0,run:u.toggle}),a.push({pivot:M,width:C,angle:0,target:0,handles:w,room:"客厅灯"});const N=dy(e,-6.7,-1.62,5.7,4.92);Mh(e,437039,3.62,1.94,-2.13,2.06,1.52,-Math.PI/2),f("sofa_03",-4.57,-1.4,3.25,-Math.PI/2),h(-4.57,-1.4,1,3.22),yo(t,-4.57,-1.4,1.8,3.65,.3,.045),f("modern_coffee_table_01",-6.72,-1.42,.76,0,.043),h(-6.72,-1.42,.76,1.52),yo(t,-6.72,-1.42,1.3,1.95,.28,.045);for(const[F,G]of[D.green,D.clay].entries()){const pe=nt(e,-6.74,.548+F*.045,-1.71);pe.rotation.y=.11-F*.26,X(pe,0,.016,0,.245,.029,.31,D.cream),X(pe,0,.033,0,.256,.008,.32,G)}ot(e,-6.69,.55,-1.17,.115,.1,.014,ms),ot(e,-6.69,.599,-1.17,.064,.046,.09,ms),ot(e,-6.69,.645,-1.17,.055,.055,.004,D.walnut),vt(e,new Ui(.031,.009,8,16),ms,-6.619,.607,-1.17),f("potted_plant_02",-10.05,-5.23,.86),f("potted_plant_02",3.03,-4.99,.74),X(T,1.38,.36,.37,4.25,.51,.6,D.walnut,.032);for(const F of[-.45,.8,2.03,3.22])X(T,F,.13,.37,.11,.25,.39,D.bronze);for(let F=0;F<36;F++)X(T,-.58+F*.11,.36,.682,.028,.41,.028,D.oak);h(-10.42,-1.38,.78,4.25);function W(F){const G=nt(e,-10.28,0,F);G.rotation.y=Math.PI/2,X(G,0,.61,0,.38,1.18,.4,D.walnut,.026),X(G,0,.62,.205,.33,1.1,.018,xh,.012);for(const[pe,ue]of[[.35,.112],[.72,.113],[.993,.042]])vt(G,new Ui(ue,.012,9,32),D.bronze,0,pe,.225),Lt(G,0,pe,.221,ue*.9,ue*.9,.024,D.black),Lt(G,0,pe,.245,ue*.36,ue*.36,.016,xh);return h(-10.28,F,.47,.45),re(-10,.7,F)}const R=W(-3.94);W(1.16);const I={id:"projector",label:"客厅投影",url:"https://pgxcg.qzz.io/",center:re(-10.74,2.03,-1.38),yaw:Math.PI/2,width:3.68,height:2.07};c.push(I),X(T,1.38,3.14,.08,3.99,.114,.16,D.trim,.03),X(T,1.38,.96,.082,3.77,.044,.068,D.bronze),Et(e,re(-4.1,an,-1.38),re(-4.1,3.43,-1.38),.036,D.metal),X(e,-4.1,3.34,-1.38,.37,.15,.42,D.ivory,.032);const k=ot(e,-4.31,3.34,-1.44,.045,.057,.068,D.ink);k.rotation.z=Math.PI/2,vh(e,-10.38,.632,.38,p.livingBulb),f("ceramic_vase_01",-10.44,-2.89,.25,0,.63),X(e,-6.35,.79,3.83,2.72,.12,1.22,D.table,.065);for(const F of[-7.36,-5.34])for(const G of[3.46,4.2])X(e,F,.38,G,.11,.77,.11,D.walnut,.019);h(-6.35,3.83,2.76,1.25);for(const F of[-7.15,-5.55])for(const[G,pe]of[[2.85,0],[4.83,Math.PI]])f("dining_chair_02",F,G,.51,pe),h(F,G,.51,.49);f("ceramic_vase_01",-6.38,3.81,.28,0,.852);const U=nt(s);for(let F=0;F<6;F++){const G=-1.72+F*.87;X(U,G,.49,5.47,.85,.91,.96,D.green,.018),X(U,G,.49,4.974,.75,.74,.033,D.green,.018),Qs(U,G,.48,4.949,.62,.56,D.green),X(U,G,.73,4.92,.27,.033,.046,D.brass,.013),X(U,G,.12,5.51,.81,.2,.85,D.ink)}X(U,-.52,.998,5.46,3.44,.1,1.12,D.stone,.016),X(U,2.65,.998,5.46,.98,.1,1.12,D.stone,.016);for(const F of[5.038,5.891])X(U,1.68,.998,F,.97,.1,.27,D.stone,.015);X(U,.45,1.54,5.88,5.4,1.02,.072,D.stone),h(.45,5.46,5.4,1.1);const K=_t(11909039,.32,.72);X(U,1.68,.958,5.465,.97,.012,.59,K,.009);for(const F of[5.178,5.753])X(U,1.68,1.006,F,.98,.093,.023,K,.008);for(const F of[1.205,2.154])X(U,F,1.006,5.465,.023,.093,.59,K,.008);ot(U,1.68,.967,5.48,.043,.043,.004,D.ink),Ns(U,[re(1.99,1.06,5.77),re(1.99,1.44,5.77),re(1.98,1.51,5.57),re(1.98,1.4,5.49)],.025,D.brass),X(U,-.95,1.06,5.4,1.03,.024,.67,D.ink,.027);for(const F of[-1.21,-.72])for(const G of[5.24,5.55]){const pe=vt(U,new Ui(.113,.009,8,32),D.metal,F,1.082,G);pe.rotation.x=Math.PI/2}X(U,-.95,.5,4.91,.76,.51,.043,D.ink,.026),X(U,-.95,.72,4.87,.6,.035,.04,D.metal),X(U,-.94,2.23,5.61,1.32,.15,.63,D.brass,.033),X(U,-.94,2.94,5.8,.58,1.34,.28,D.trim);for(const F of[1.91,2.46]){X(U,1.79,F,5.7,2.45,.061,.4,D.oak);for(let G=0;G<5;G++)ot(U,.98+G*.26,F+.116,5.65,.076,.059,.17,ms);for(let G=0;G<4;G++)ot(U,2.53,F+.042+G*.022,5.65,.18,.135,.018,ms,36)}for(const F of[.6,2.6])Et(U,re(F,an,5.02),re(F,2.71,5.02),.012,D.bronze),ot(U,F,2.6,5.02,.06,.19,.23,D.green,36);const q=vt(U,new Is([new me(.055,0),new me(.13,.03),new me(.21,.085),new me(.205,.095),new me(.12,.046),new me(.045,.018)],36),ms,.35,1.055,5.29);for(let F=0;F<5;F++)Lt(q,.095*Math.cos(F*2.2),.093+(F===4?.055:0),.085*Math.sin(F*2.2),.062,.049,.05,_t(F%2?14988361:11042618,.68));Ht(U);const Z=nt(s),ee=7.05,ce=4.32;Mh(Z,436535,ee,2.49,5.87,1.49,1.18,Math.PI),X(Z,ee,.24,ce,2.36,.41,2.71,D.walnut,.075),X(Z,ee,.52,ce,2.28,.33,2.67,D.ivory,.11),X(Z,ee,.82,ce+1.37,2.53,1.49,.16,D.green,.075);for(let F=0;F<9;F++)X(Z,ee-1.06+F*.265,.96,ce+1.25,.258,1.03,.12,D.velvet,.075);yh(Z,ee,.738,ce-.31,2.24,2.01,.28,Ds);const de=_t(7111031,.91);de.normalMap=D.brocade.normalMap,de.normalScale.setScalar(.41),yh(Z,ee,.812,ce-.86,2.27,.58,.32,de);for(const F of[ee-.56,ee+.56]){const G=X(Z,F,.77,ce+.86,1.01,.21,.59,Ds,.1);G.rotation.x=-.15}h(ee,ce,2.42,2.79),yo(t,ee,ce,3.25,3.4,.28);for(const F of[ee-1.63,ee+1.63])X(Z,F,.39,ce+.89,.72,.67,.58,D.walnut,.028),X(Z,F,.75,ce+.89,.77,.064,.63,D.stone,.022),X(Z,F,.49,ce+.58,.25,.035,.035,D.brass),h(F,ce+.89,.76,.62);vh(Z,ee-1.63,.79,ce+.9,p.bedroomBulb);const $=nt(Z,ee+1.63,.79,ce+.88),ge=_t(11237714,.96),ne=_t(15783601,.96);Lt($,0,.17,0,.135,.16,.11,ge),Lt($,0,.38,-.015,.14,.14,.12,ge);for(const F of[-1,1])Lt($,F*.113,.485,0,.064,.06,.043,ge),Lt($,F*.12,.205,-.02,.062,.1,.07,ge),Lt($,F*.085,.065,-.07,.078,.058,.08,ge),Lt($,F*.052,.405,-.122,.014,.015,.009,D.black);Lt($,0,.346,-.12,.069,.049,.03,ne),Lt($,0,.37,-.147,.023,.016,.012,D.walnut),X(Z,9.98,.77,-2.6,1.31,.12,2.73,D.table,.04);for(const F of[-3.72,-1.48])X(Z,10.02,.36,F,1.03,.71,.1,D.walnut);h(9.98,-2.6,1.31,2.74),X(Z,10.2,.871,-2.65,.37,.047,.56,D.metal,.02),X(Z,10.32,1.05,-2.65,.063,.37,.11,D.metal),c.push({id:"computer",label:"卧室电脑",url:"https://lightblock.galok.cn/desktop/?lang=zh",center:re(10.24,1.36,-2.65),yaw:-Math.PI/2,width:1.1,height:.619}),X(Z,9.68,.852,-2.66,.22,.031,.63,D.ink,.018);for(let F=0;F<5;F++)for(let G=0;G<14;G++)X(Z,9.59+F*.035,.873,-2.92+G*.039,.027,.009,.03,D.metal);Lt(Z,9.7,.869,-2.12,.071,.037,.048,D.ink),f("dining_chair_02",9,-2.64,.52,Math.PI/2),h(9,-2.64,.49,.54),f("potted_plant_02",4.58,-5.16,.76);const Te=nt(Z,4.12,0,-1.87);Te.rotation.y=Math.PI/2,X(Te,0,1.52,0,3.8,2.98,.48,D.trim);for(let F=0;F<4;F++){const G=-1.425+F*.95;Qs(Te,G,1.53,.25,.79,2.64,D.cream),X(Te,G+.33,1.2,.27,.025,.19,.041,D.brass)}h(4.12,-1.87,.51,3.81),Ht(Z),X(i,0,-.155,-8.18,22.55,.29,4.12,D.oak);for(const[F,G]of[[-11.2,.25],[2.75,11.2]]){X(i,(F+G)/2,1.03,-10.17,G-F,.11,.15,D.oak,.022),X(i,(F+G)/2,.13,-10.17,G-F,.13,.2,D.trim);const pe=Math.ceil((G-F)/.39);for(let ue=0;ue<=pe;ue++){const Me=F+(G-F)*ue/pe;ot(i,Me,.57,-10.17,.056,.065,.8,D.trim,12),Lt(i,Me,.54,-10.17,.078,.16,.078,D.trim)}h((F+G)/2,-10.17,G-F,.18,"栏杆")}for(const F of[-11.17,11.17]){X(i,F,1.03,-8.17,.14,.11,4.05,D.oak),h(F,-8.17,.17,4.05,"栏杆");for(let G=0;G<=10;G++)ot(i,F,.55,-10.17+G*.4,.057,.06,.91,D.trim,12)}for(let F=0;F<7;F++)X(i,1.5,-.095-F*.17,-10.45-F*.42,2.48,.19,.46,D.stone);return py(x,N,o),Ht(e),Ht(i),{exterior:n,blockers:o,doors:a,windows:l,privacy:u,skylight:S,devices:c,soundAt:R,life:p,pet:m,curtains:v,bed:{position:re(ee,.99,ce+.85),exit:re(ee-1.74,1.65,ce-.18)},modelReady:Promise.allSettled([...r,m.ready])}}class gy extends Bm{constructor(e){super(e),this.type=vn}parse(e){const o=function(M,C){switch(M){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(C||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(C||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(C||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(C||""))}},h=function(M,C,w){C=C||1024;let N=M.pos,W=-1,R=0,I="",k=String.fromCharCode.apply(null,new Uint16Array(M.subarray(N,N+128)));for(;0>(W=k.indexOf(`
`))&&R<C&&N<M.byteLength;)I+=k,R+=k.length,N+=128,k=String.fromCharCode.apply(null,new Uint16Array(M.subarray(N,N+128)));return-1<W?(M.pos+=R+W+1,I+k.slice(0,W)):!1},f=function(M){const C=/^#\?(\S+)/,w=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,W=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,R={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let I,k;for((M.pos>=M.byteLength||!(I=h(M)))&&o(1,"no header found"),(k=I.match(C))||o(3,"bad initial token"),R.valid|=1,R.programtype=k[1],R.string+=I+`
`;I=h(M),I!==!1;){if(R.string+=I+`
`,I.charAt(0)==="#"){R.comments+=I+`
`;continue}if((k=I.match(w))&&(R.gamma=parseFloat(k[1])),(k=I.match(P))&&(R.exposure=parseFloat(k[1])),(k=I.match(N))&&(R.valid|=2,R.format=k[1]),(k=I.match(W))&&(R.valid|=4,R.height=parseInt(k[1],10),R.width=parseInt(k[2],10)),R.valid&2&&R.valid&4)break}return R.valid&2||o(3,"missing format specifier"),R.valid&4||o(3,"missing image size specifier"),R},d=function(M,C,w){const P=C;if(P<8||P>32767||M[0]!==2||M[1]!==2||M[2]&128)return new Uint8Array(M);P!==(M[2]<<8|M[3])&&o(3,"wrong scanline width");const N=new Uint8Array(4*C*w);N.length||o(4,"unable to allocate buffer space");let W=0,R=0;const I=4*P,k=new Uint8Array(4),U=new Uint8Array(I);let K=w;for(;K>0&&R<M.byteLength;){R+4>M.byteLength&&o(1),k[0]=M[R++],k[1]=M[R++],k[2]=M[R++],k[3]=M[R++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=P)&&o(3,"bad rgbe scanline format");let q=0,Z;for(;q<I&&R<M.byteLength;){Z=M[R++];const ce=Z>128;if(ce&&(Z-=128),(Z===0||q+Z>I)&&o(3,"bad scanline data"),ce){const de=M[R++];for(let $=0;$<Z;$++)U[q++]=de}else U.set(M.subarray(R,R+Z),q),q+=Z,R+=Z}const ee=P;for(let ce=0;ce<ee;ce++){let de=0;N[W]=U[ce+de],de+=P,N[W+1]=U[ce+de],de+=P,N[W+2]=U[ce+de],de+=P,N[W+3]=U[ce+de],W+=4}K--}return N},g=function(M,C,w,P){const N=M[C+3],W=Math.pow(2,N-128)/255;w[P+0]=M[C+0]*W,w[P+1]=M[C+1]*W,w[P+2]=M[C+2]*W,w[P+3]=1},x=function(M,C,w,P){const N=M[C+3],W=Math.pow(2,N-128)/255;w[P+0]=kr.toHalfFloat(Math.min(M[C+0]*W,65504)),w[P+1]=kr.toHalfFloat(Math.min(M[C+1]*W,65504)),w[P+2]=kr.toHalfFloat(Math.min(M[C+2]*W,65504)),w[P+3]=kr.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const m=f(p),v=m.width,S=m.height,y=d(p.subarray(p.pos),v,S);let b,T,_;switch(this.type){case _n:_=y.length/4;const M=new Float32Array(_*4);for(let w=0;w<_;w++)g(y,w*4,M,w*4);b=M,T=_n;break;case vn:_=y.length/4;const C=new Uint16Array(_*4);for(let w=0;w<_;w++)x(y,w*4,C,w*4);b=C,T=vn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:v,height:S,data:b,header:m.string,gamma:m.gamma,exposure:m.exposure,type:T,colorSpace:yn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}class Zo extends cn{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;const n=this,i=t.color!==void 0?new Ge(t.color):new Ge(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||Zo.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new hi,h=new z,f=new z,d=new z,g=new Ze,x=new z(0,0,-1),p=new St,m=new z,v=new z,S=new St,y=new Ze,b=new Hn(r,o,{samples:c,type:vn}),T=new Vn({name:l.name!==void 0?l.name:"unspecified",uniforms:bf.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});T.uniforms.tDiffuse.value=b.texture,T.uniforms.color.value=i,T.uniforms.textureMatrix.value=y,this.material=T,this.onBeforeRender=function(_,M,C){const w=this.getReflectionCamera(C);if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(C.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),m.subVectors(f,d),m.dot(h)>0===!0&&this.forceUpdate===!1)return;m.reflect(h).negate(),m.add(f),g.extractRotation(C.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(d),v.subVectors(f,x),v.reflect(h).negate(),v.add(f),w.position.copy(m),w.up.set(0,1,0),w.up.applyMatrix4(g),w.up.reflect(h),w.lookAt(v),w.far=C.far,w.updateMatrixWorld(),w.projectionMatrix.copy(C.projectionMatrix),w.projectionMatrix.elements[8]*=-1,w.projectionMatrix.elements[12]*=-1,y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(w.projectionMatrix),y.multiply(w.matrixWorldInverse),y.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(w.matrixWorldInverse),p.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const N=w.projectionMatrix;w.isOrthographicCamera?(S.x=(Math.sign(p.x)+N.elements[8])/N.elements[0],S.y=(Math.sign(p.y)+N.elements[9])/N.elements[5],S.z=-C.far,S.w=1):(S.x=(Math.sign(p.x)+N.elements[8])/N.elements[0],S.y=(Math.sign(p.y)+N.elements[9])/N.elements[5],S.z=-1,S.w=(1+N.elements[10])/N.elements[14]),p.multiplyScalar(2/p.dot(S)),N.elements[2]=p.x,N.elements[6]=p.y,w.isOrthographicCamera?(N.elements[10]=p.z-a,N.elements[14]=p.w-1):(N.elements[10]=p.z+1-a,N.elements[14]=p.w),n.visible=!1;const W=_.getRenderTarget(),R=_.xr.enabled,I=_.shadowMap.autoUpdate;_.xr.enabled=!1,_.shadowMap.autoUpdate=!1,_.setRenderTarget(b),_.state.buffers.depth.setMask(!0),_.autoClear===!1&&_.clear(),_.render(M,w),_.xr.enabled=R,_.shadowMap.autoUpdate=I,_.setRenderTarget(W);const k=C.viewport;k!==void 0&&_.state.viewport(k),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()},this.getReflectionCamera=function(_){let M=this._reflectionCameras.get(_);return M===void 0&&(M=_.clone(),this._reflectionCameras.set(_,M)),M}}}Zo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const bo=14,xn=new Float32Array(bo*4);function Jf(s){return function(){s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function _y(){const t=7.36493374108053,n=Math.PI/4,i=Math.cos(n),r=Math.sin(n),o=Jf(1195461711),a=1.35,l=32;let c=0;const u=[];for(let f=0;f<bo;f++){const d=(f+.18+o()*.64)/bo,g=a*Math.pow(l/a,d),x=2*Math.PI/g,p=.95-d*.55,m=(o()-.5)*p*Math.PI,v=n+m,S=Math.cos(v),y=Math.sin(v);let b=Math.exp(-1/(x*x*t*t))/(x*x*x*x);const T=Math.max(0,S*i+y*r);b*=T*T*Math.exp(-x*x*.018);const _=Math.sqrt(Math.max(b,0))*x;c+=_*_,u.push({kx:x*S,kz:x*y,amp:_,phi:o()*Math.PI*2})}const h=.23/Math.sqrt(Math.max(c,1e-6));for(let f=0;f<bo;f++){const d=u[f];xn[f*4]=d.kx,xn[f*4+1]=d.kz,xn[f*4+2]=d.amp*h,xn[f*4+3]=d.phi}}_y();const Us=Object.freeze({latitude:31.2304,longitude:121.4737,utcOffset:8,label:"上海"}),pn=Math.PI/180,Sh=36e5,xy=864e5;function $f(s){return Math.max(0,Math.min(1,s))}function fn(s,e,t){const n=$f((t-s)/(e-s||1));return n*n*(3-2*n)}function Wt(s,e,t){return[s[0]+(e[0]-s[0])*t,s[1]+(e[1]-s[1])*t,s[2]+(e[2]-s[2])*t]}function Qf(s,e,t){const n=Math.hypot(s,e,t)||1;return[s/n,e/n,t/n]}function Ri(s){return s%=Math.PI*2,s<0?s+Math.PI*2:s}function bh(s,e,t){const n=Math.cos(e),i=n*Math.cos(s),r=n*Math.sin(s)*Math.cos(t)-Math.sin(e)*Math.sin(t),o=n*Math.sin(s)*Math.sin(t)+Math.sin(e)*Math.cos(t);return{ra:Ri(Math.atan2(r,i)),dec:Math.asin(o),vector:Qf(i,r,o)}}function Th(s,e,t){const n=Us.latitude*pn,i=t-s,r=Math.cos(e),o=Math.sin(e),a=-r*Math.sin(i),l=Math.sin(n)*o+Math.cos(n)*r*Math.cos(i),c=Math.cos(n)*o-Math.sin(n)*r*Math.cos(i);return Qf(a,l,-c)}function Nl(s){const e=s.getTime()/xy+24405875e-1-2451545,t=(23.4393-3563e-10*e)*pn,n=Ri((280.46+.9856474*e)*pn),i=Ri((357.528+.9856003*e)*pn),r=n+(1.915*Math.sin(i)+.02*Math.sin(2*i))*pn,o=bh(r,0,t),a=Ri((218.316+13.176396*e)*pn),l=Ri((134.963+13.064993*e)*pn),c=Ri((93.272+13.22935*e)*pn),u=Ri((297.85+12.190749*e)*pn),h=a+(6.289*Math.sin(l)+1.274*Math.sin(2*u-l)+.658*Math.sin(2*u)+.214*Math.sin(2*l)-.186*Math.sin(i)-.059*Math.sin(2*u-2*l)-.057*Math.sin(2*u-i-l)+.053*Math.sin(2*u+l)+.046*Math.sin(2*u-i))*pn,f=(5.128*Math.sin(c)+.28*Math.sin(l+c)+.277*Math.sin(l-c)+.173*Math.sin(2*u-c)+.055*Math.sin(2*u+c-l))*pn,d=bh(h,f,t),g=Ri((280.46061837+360.98564736629*e+Us.longitude)*pn),x=Th(o.ra,o.dec,g),p=Th(d.ra,d.dec,g),m=$f(.5*(1-(o.vector[0]*d.vector[0]+o.vector[1]*d.vector[1]+o.vector[2]*d.vector[2])));return{sunDir:x,moonDir:p,sidereal:g,moonPhase:m,sunElevation:Math.asin(x[1]),moonElevation:Math.asin(p[1])}}function vy(s,e=0){const t=Nl(s),n=t.sunElevation/pn,i=t.moonElevation/pn,r=n,o=fn(-3,5,r),a=fn(2,55,r),l=fn(-1,8,r)*(1-fn(8,20,r)),c=fn(-6,-.5,r)*(1-fn(1,5,r)),u=fn(-12,-6,r)*(1-fn(-4,0,r)),h=fn(-18,-12,r)*(1-fn(-10,-6,r)),f=1-fn(-16,-4,r),d=e;Math.floor((s.getTime()-new Date(s.getUTCFullYear(),0,0).getTime())/864e5);const g=1,x=[.02,.12,.4],p=[.08,.32,.65],m=1-d;let v=Wt([.004,.008,.03],[.1,.36,.68],o);v=Wt(v,[.2,.46,.74],a*o*.35),v=Wt(v,x,g*m*o),v=Wt(v,[.18,.2,.24],d*.55*o),v=Wt(v,[.06,.09,.18],h*.7),v=Wt(v,[.075,.105,.235],u*.6),v=Wt(v,[.12,.1,.18],c*.4);let S=Wt([.018,.028,.072],[.42,.66,.8],o);S=Wt(S,[.58,.74,.84],a*o*.3),S=Wt(S,p,g*m*o),S=Wt(S,[.22,.24,.28],d*.6*o),S=Wt(S,[.95,.45,.18],l*.65),S=Wt(S,[.45,.18,.16],c*.55),S=Wt(S,[.1,.08,.16],u*.5);const y=fn(-2,50,r);let b=Wt([.008,.025,.055],[.025,.25,.36],y),T=Wt([.035,.105,.17],[.12,.52,.67],y);const _=[.01,.08,.28],M=[.04,.25,.5];b=Wt(b,_,g*m*o),T=Wt(T,M,g*m*o);const P=Nl(new Date(s.getTime()+12*6e4)).sunElevation>t.sunElevation?[1,.6,.32]:[.95,.22,.1],N=Wt(P,[1,.95,.8],fn(-1,18,n));return Object.assign(t,{skyZenith:v,skyHorizon:S,waterDeep:b,waterShallow:T,celestialColor:N,sunVisibility:fn(-2.7,.3,n),moonVisibility:fn(-2.7,.4,i),nightness:f,isNight:n<-6,period:n>5?"day":n>-9?"dusk":"night"})}function jf(s){const e=new Date(s.getTime()+Us.utcOffset*Sh);return Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())-Us.utcOffset*Sh}function yy(s,e){const t=jf(s),n=e==="sunrise"||e==="sunset",i=e==="sunrise"||e==="moonrise";let r=null;for(let o=0;o<=1800;o+=5){const a=t+o*6e4,l=Nl(new Date(a)),c=(n?l.sunElevation:l.moonElevation)/pn;if(r!==null&&(i?r<0&&c>=0:r>=0&&c<0)){const h=r/(r-c);return a-5*6e4+h*5*6e4}r=c}return null}function ed(s){return s.getUTCFullYear()*1e4+(s.getUTCMonth()+1)*100+s.getUTCDate()}function My(s){const e=ed(s),t=Jf(e),n=[],i=1+Math.floor(t()*3);let r=6+t()*4;for(let o=0;o<i;o++){const a=.8+t()*.7,l=1+t()*2,c=.5+t()*.5,u=r,h=u+a,f=h+l,d=f+c,g=t()<.6,x=g?.3+t()*.6:0,p=g?h+l*(.2+t()*.2):0,m=g?h+l*(.7+t()*.2):0,v=g?t()<.4:t()<.1;if(n.push({cloudStart:u,matureStart:h,decayStart:f,clearStart:d,hasRain:g,rainIntensity:x,rainStart:p,rainEnd:m,hasLightning:v}),r=d+2+t()*3,r>22)break}return{dateSeed:e,events:n}}let uo=null,Eh=-1;function Sy(s){const e=ed(s);return uo&&Eh===e||(uo=My(s),Eh=e),uo}function by(s){const e=Sy(s),t=s.getUTCHours()+s.getUTCMinutes()/60+s.getUTCSeconds()/3600;let n=null;for(const r of e.events)if(t>=r.cloudStart&&t<r.clearStart){n=r;break}if(!n)return{phase:"clear",cloudTarget:0,rainTarget:0,lightningAllow:!1};if(t<n.matureStart)return{phase:"building",cloudTarget:.95,rainTarget:0,lightningAllow:!1};if(t<n.decayStart){const r=n.hasRain&&t>=n.rainStart&&t<n.rainEnd,o=n.hasRain&&t>=n.rainStart-1/6&&t<n.rainStart,a=r||o?.85:.15;return{phase:"mature",cloudTarget:1,rainTarget:r?n.rainIntensity:0,lightningAllow:n.hasLightning,darkenTarget:a}}const i=(t-n.decayStart)/(n.clearStart-n.decayStart);return{phase:"decaying",cloudTarget:Math.max(0,1-i),rainTarget:0,lightningAllow:!1,darkenTarget:Math.max(0,.85*(1-i*2))}}const Ty=`// Sky, stellar catalogue, Milky Way, lunar terminator and lightning from the original water.js.\r
uniform vec2  uResolution;\r
uniform float uTime;\r
uniform vec3  uSunDir;\r
uniform vec3  uMoonDir;\r
uniform vec3  uCelestialColor;\r
uniform float uSunVisibility;\r
uniform float uMoonVisibility;\r
uniform float uMoonPhase;\r
uniform float uNight;\r
uniform float uLatitude;\r
uniform float uSidereal;\r
uniform float uCloudCover;\r
uniform float uCameraYaw;    // 相机偏航（弧度，绕 y；0=朝南 +z）\r
uniform float uCameraPitch;  // 相机俯仰（弧度，绕 x；0=水平）\r
uniform vec3  uSkyZenith;\r
uniform vec3  uSkyHorizon;\r
uniform vec3  uWaterDeep;\r
// 天气系统：雨/闪电/乌云（由 JS 状态机驱动，全随机）\r
uniform float uRainIntensity;  // 0-1 当前雨强\r
uniform float uFlash;          // 0-1 闪电闪光强度\r
uniform float uCloudDarken;   // 0-1 乌云暗化（暴风雨时云变灰沉）\r
uniform float uLightningSeed; // 闪电纹随机种子\r
// 风力系统：影响云飘速、水面浪高、雨滴偏向\r
uniform float uWindLevel;     // 0-1 风力等级（即时生效）\r
uniform vec2  uWindDir;       // 风向（xz 平面单位向量，平滑旋转）\r
uniform vec2  uWindOffset;    // 累积云漂移位移（积分 dir*level*dt，风变时云不跳批）\r
// 星空与极光\r
uniform float uStarSeed;      // 星空随机种子（按日期变化，每天星空布局不同）\r
uniform float uAurora;        // 极光强度 0-1（高纬度+夜晚+随机概率才>0）\r
// 云层时间：独立周期 mod，避免与 uTime 的 3600s mod 冲突导致云图案旋转跳变\r
// 周期 = 2π / 0.004 ≈ 1570.7963s，恰为云旋转一圈，mod 边界无缝衔接\r
uniform float uCloudTime;\r
\r
float hash13(vec3 p){\r
  p = fract(p * 0.1031);\r
  p += dot(p, p.yzx + 33.33);\r
  return fract((p.x + p.y) * p.z);\r
}\r
\r
float hash21(vec2 p){\r
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);\r
  p3 += dot(p3, p3.yzx + 33.33);\r
  return fract((p3.x + p3.y) * p3.z);\r
}\r
\r
vec2 hash22(vec2 p){\r
  float n = hash21(p);\r
  return vec2(n, hash21(p + vec2(19.19, 7.23)));\r
}\r
\r
float valueNoise(vec2 p){\r
  vec2 i = floor(p), f = fract(p);\r
  f = f * f * (3.0 - 2.0 * f);\r
  float a = hash21(i);\r
  float b = hash21(i + vec2(1.0, 0.0));\r
  float c = hash21(i + vec2(0.0, 1.0));\r
  float d = hash21(i + vec2(1.0, 1.0));\r
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\r
}\r
\r
// 周期化 valueNoise：格点在 period 边界环绕，保证 mod(p, period) 无缝衔接。\r
// 用于云噪声：windOff 长期累加会溢出 highp float 精度，JS 端 mod 256 后\r
// 配合此函数可实现无缝循环（mod(p+256, 256) = mod(p, 256)，格点 hash 完全一致）。\r
// period=256 远大于视野内坐标范围（约 ±110），看不到重复图案。\r
float valueNoisePeriodic(vec2 p, float period){\r
  p = mod(p, period);\r
  vec2 i = floor(p), f = fract(p);\r
  f = f * f * (3.0 - 2.0 * f);\r
  // 格点环绕：i+1 超过 period 时回到 0，保证边界两侧 hash 连续\r
  float a = hash21(i);\r
  float b = hash21(mod(i + vec2(1.0, 0.0), period));\r
  float c = hash21(mod(i + vec2(0.0, 1.0), period));\r
  float d = hash21(mod(i + vec2(1.0, 1.0), period));\r
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\r
}\r
\r
float cloudNoise(vec2 p){\r
  // 云噪声用周期版（period=256）：配合 JS 端 windOff mod 256 防溢出，且无缝循环\r
  float n = valueNoisePeriodic(p, 256.0) * 0.53;\r
  p = mat2(0.80, -0.60, 0.60, 0.80) * p * 2.03 + 8.7;\r
  n += valueNoisePeriodic(p, 256.0) * 0.29;\r
  p = mat2(0.76, -0.65, 0.65, 0.76) * p * 2.11 + 3.1;\r
  n += valueNoisePeriodic(p, 256.0) * 0.18;\r
  return n;\r
}\r
\r
float cloudField(vec3 dir, float t){\r
  if(dir.y<=.015)return 0.0;\r
  float projection = 1.0 / (0.24 + max(dir.y, 0.0));\r
  // 云漂移 = 累积风位移（JS端积分 dir*level*dt）：风变时云保持形状只改漂速，不跳批\r
  vec2 windOff = uWindOffset;\r
  // 缓慢旋转采样坐标，让云朵形状本身随时间演化（卷云拉伸感）。恒定速率，与风力无关\r
  // 用 uCloudTime（周期 2π/0.004 无缝）而非 t（mod 3600 会在边界跳变 14.4rad≈2.29圈）\r
  float ang = uCloudTime * 0.004;\r
  mat2 rot = mat2(cos(ang), -sin(ang), sin(ang), cos(ang));\r
  vec2 base = rot * (dir.xz * projection * 1.75) + windOff;\r
  vec2 p = base;\r
  // fbm 4 层叠加：粗轮廓 + 中细节 + 细节 + 微纹，增加云的蓬松体积感和不规则边缘\r
  float n = cloudNoise(p * 0.72) * 0.50;\r
  n += cloudNoise(p * 1.85 + vec2(4.2, -1.7)) * 0.27;\r
  n += cloudNoise(p * 3.7 + vec2(8.1, 3.3)) * 0.15;\r
  n += cloudNoise(p * 7.4 + vec2(2.5, 6.7)) * 0.08;\r
  float threshold = mix(0.76, 0.43, uCloudCover);\r
  float cloud = smoothstep(threshold, threshold + 0.10, n);\r
  return cloud * smoothstep(0.015, 0.13, dir.y);\r
}\r
\r
// 高空卷云层：薄纱状，与低层积云共享旋转和漂移方向（同步飘动，只是一层云的高低层次）\r
// 高空风稍快（1.15×），但方向与积云一致，视觉上是同一片云系的纵深，而非两层独立云\r
float cirrusField(vec3 dir, float t){\r
  if (dir.y < 0.12) return 0.0;\r
  // 与 cloudField 共享旋转矩阵，保证两层旋转同步（同样使用 uCloudTime）\r
  float ang = uCloudTime * 0.004;\r
  mat2 rot = mat2(cos(ang), -sin(ang), sin(ang), cos(ang));\r
  float projection = 1.0 / (0.12 + dir.y);\r
  // 漂移方向与积云相同（uWindOffset），仅速率稍快（1.15×，高空风强）\r
  vec2 windOff = uWindOffset * 1.15;\r
  vec2 base = rot * (dir.xz * projection * 2.8) + windOff;\r
  vec2 p = base;\r
  float n = cloudNoise(p * 0.9) * 0.60;\r
  n += cloudNoise(p * 2.3 + vec2(7.3, 2.1)) * 0.40;\r
  float threshold = mix(0.74, 0.55, uCloudCover * 0.6);\r
  float cloud = smoothstep(threshold, threshold + 0.06, n);\r
  return cloud * smoothstep(0.12, 0.30, dir.y) * 0.55;\r
}\r
\r
// 视线 (ro, rd) 到 3D 线段 (a,b) 的最短距离。\r
// 用于把 3D 空间里的折线（雨滴 / 闪电）投影到屏幕，呈现真正的立体感。\r
float raySegDist(vec3 ro, vec3 rd, vec3 a, vec3 b){\r
  vec3 u = b - a;\r
  vec3 w0 = a - ro;\r
  float A = dot(u, u);\r
  float B = dot(u, rd);\r
  float C = dot(rd, rd);\r
  float D = dot(u, w0);\r
  float E = dot(rd, w0);\r
  float denom = A * C - B * B;\r
  float s, t;\r
  if (abs(denom) < 1e-5){\r
    s = 0.0;\r
    t = max(-E / max(C, 1e-5), 0.0);\r
  } else {\r
    s = clamp((B * E - C * D) / denom, 0.0, 1.0);\r
    t = max((A * E - B * D) / denom, 0.0);\r
  }\r
  return length((a + u * s) - (ro + rd * t));\r
}\r
\r
// 3D 雨：沿视线 ray-march，雨滴在世界空间中从云底(y=4)向水面(y=0)下落。\r
// 雨滴存在性由其 xz 位置上的乌云密度(cloudNoise)调制 —— 乌云在哪里，雨就下在哪里。\r
// 雨滴是竖直短线段（拉长的下落感），位置随时间下移，方向恒为向下。\r
vec3 lightning3D(vec3 ro, vec3 rd, float seed, float flash){\r
  if (flash < 0.25) return vec3(0.0);\r
  // 闪电类型：0=云内短闪(35%)，1=云到水面(40%)，2=云底短劈(25%)\r
  float typeRoll = hash13(vec3(seed, 100.0, 50.0));\r
  // 位置全方位分布（极坐标 0-2π）：旋转视角到任何方向都能看到闪电\r
  // Keep the main strike and the exterior shadow light on the same bearing.\r
  float boltAngle = seed * 2.399963;\r
  float boltDist = 7.75 + 4.75 * sin(seed);\r
  float sx = sin(boltAngle) * boltDist;\r
  float sz = cos(boltAngle) * boltDist;\r
  float startY = 5.0 + hash13(vec3(seed, 11.1, 12.2)) * 1.8;   // 5.0-6.8 云层内\r
  vec3 p0 = vec3(sx, startY, sz);\r
  // 终点 y 由类型决定\r
  float endY;\r
  if (typeRoll < 0.35) endY = 3.8 + hash13(vec3(seed, 20.0, 21.0)) * 0.7;  // 云内短闪: 3.8-4.5\r
  else if (typeRoll < 0.75) endY = 0.35;                                     // 云到水面\r
  else endY = 2.5 + hash13(vec3(seed, 20.0, 21.0)) * 1.0;                   // 云底短劈: 2.5-3.5\r
  // 5 段折线，y 等距下降，xz 随机偏移（远处偏移大，锯齿更粗）\r
  float segDy = (p0.y - endY) / 5.0;\r
  float off = 0.8 + boltDist * 0.12;\r
  vec3 p1 = p0 + vec3((hash13(vec3(seed,5.1,1.0))-0.5)*1.2*off, -segDy, (hash13(vec3(seed,6.1,1.0))-0.5)*0.9*off);\r
  vec3 p2 = p1 + vec3((hash13(vec3(seed,5.1,2.0))-0.5)*1.4*off, -segDy, (hash13(vec3(seed,6.1,2.0))-0.5)*1.0*off);\r
  vec3 p3 = p2 + vec3((hash13(vec3(seed,5.1,3.0))-0.5)*1.4*off, -segDy, (hash13(vec3(seed,6.1,3.0))-0.5)*1.0*off);\r
  vec3 p4 = p3 + vec3((hash13(vec3(seed,5.1,4.0))-0.5)*1.3*off, -segDy, (hash13(vec3(seed,6.1,4.0))-0.5)*0.9*off);\r
  vec3 p5 = vec3(p4.x + (hash13(vec3(seed,7.1,1.0))-0.5)*0.7*off, endY, p4.z + (hash13(vec3(seed,7.1,2.0))-0.5)*0.5*off);\r
  // 段距离\r
  float d01 = raySegDist(ro, rd, p0, p1);\r
  float d12 = raySegDist(ro, rd, p1, p2);\r
  float d23 = raySegDist(ro, rd, p2, p3);\r
  float d34 = raySegDist(ro, rd, p3, p4);\r
  float d45 = raySegDist(ro, rd, p4, p5);\r
  // 每段中点 y 判断云内(y>4)/云外(y<4)：云内模糊散射，云外清晰折线\r
  float cT = 4.0;\r
  float ic01 = smoothstep(cT, cT + 0.6, (p0.y + p1.y) * 0.5);\r
  float ic12 = smoothstep(cT, cT + 0.6, (p1.y + p2.y) * 0.5);\r
  float ic23 = smoothstep(cT, cT + 0.6, (p2.y + p3.y) * 0.5);\r
  float ic34 = smoothstep(cT, cT + 0.6, (p3.y + p4.y) * 0.5);\r
  float ic45 = smoothstep(cT, cT + 0.6, (p4.y + p5.y) * 0.5);\r
  // 云内散射光团：保留 smoothstep 体积散射特性（云作为体积散射体，非点光源）\r
  // 1/r² 会让云内闪变成点光源，丢失"云体扩散"的柔和感\r
  float inCloudGlow = (smoothstep(0.14, 0.0, d01) * ic01\r
                     + smoothstep(0.14, 0.0, d12) * ic12\r
                     + smoothstep(0.14, 0.0, d23) * ic23\r
                     + smoothstep(0.14, 0.0, d34) * ic34\r
                     + smoothstep(0.14, 0.0, d45) * ic45) * 0.35;\r
  // 云外最近段（nearestOut 为 999 时自然归零）\r
  float nearestOut = 999.0;\r
  nearestOut = min(nearestOut, mix(d01, 999.0, step(0.5, ic01)));\r
  nearestOut = min(nearestOut, mix(d12, 999.0, step(0.5, ic12)));\r
  nearestOut = min(nearestOut, mix(d23, 999.0, step(0.5, ic23)));\r
  nearestOut = min(nearestOut, mix(d34, 999.0, step(0.5, ic34)));\r
  nearestOut = min(nearestOut, mix(d45, 999.0, step(0.5, ic45)));\r
  // 物理光衰减：核心 1/r² 极细刺眼白心（HDR 过曝），外晕 1/r 宽广电光蓝\r
  // 比 smoothstep 更锐利，模拟 30000K 等离子弧的刺眼感\r
  float trunkCore = 0.0003 / (nearestOut * nearestOut + 0.0001);\r
  float trunkGlow = 0.002 / (nearestOut + 0.01);\r
  // 分叉：仅非云内短闪类型才有（云内短闪纯散射，无分叉），同样用 1/r² + 1/r\r
  float branchMask = step(0.35, typeRoll);\r
  vec3 b1s = p1;\r
  vec3 b1e = b1s + vec3((hash13(vec3(seed,8.1,1.0))-0.5)*2.0*off, -1.3, (hash13(vec3(seed,9.1,1.0))-0.5)*1.7*off);\r
  float db1 = raySegDist(ro, rd, b1s, b1e);\r
  vec3 b2s = p3;\r
  vec3 b2e = b2s + vec3((hash13(vec3(seed,8.1,2.0))-0.5)*1.8*off, -1.1, (hash13(vec3(seed,9.1,2.0))-0.5)*1.6*off);\r
  float db2 = raySegDist(ro, rd, b2s, b2e);\r
  float branchCore = (0.00015 / (db1 * db1 + 0.0001) + 0.00015 / (db2 * db2 + 0.0001)) * branchMask;\r
  float branchGlow = (0.001 / (db1 + 0.01) + 0.001 / (db2 + 0.01)) * branchMask;\r
  // 分层返回：x=白热核心(主干+分叉)，y=电光蓝外晕(主干+分叉)，z=云内散射(暖白光团)\r
  vec3 result;\r
  result.x = (trunkCore + branchCore) * flash;\r
  result.y = (trunkGlow + branchGlow) * flash;\r
  result.z = inCloudGlow * flash;\r
  return result;\r
}\r
\r
// 多道闪电：每次闪光生成 1-3 道闪电，各自独立种子 → 不同方位与形态。\r
// 主闪电必现，副闪电按概率出现且更暗，确保旋转到任何方向都能看到闪电。\r
// 种子是 uniform，分支判断对全画面一致，GPU 无分支发散开销。\r
vec3 lightningBolts(vec3 ro, vec3 rd, float seed, float flash){\r
  vec3 result = lightning3D(ro, rd, seed, flash);\r
  float r2 = hash13(vec3(seed, 99.0, 88.0));\r
  if (r2 > 0.45) result += lightning3D(ro, rd, seed + 7.3, flash) * 0.72;\r
  float r3 = hash13(vec3(seed, 55.0, 44.0));\r
  if (r3 > 0.7) result += lightning3D(ro, rd, seed + 13.7, flash) * 0.55;\r
  return result;\r
}\r
\r
vec2 octahedralMap(vec3 n){\r
  n /= abs(n.x) + abs(n.y) + abs(n.z);\r
  vec2 p = n.xy;\r
  if (n.z < 0.0) p = (1.0 - abs(p.yx)) * sign(p.xy);\r
  return p;\r
}\r
\r
// 世界方向 → 相机空间方向。屏幕投影（太阳圆盘）假设相机朝 +z，\r
// 故先把世界方向转到相机空间再做透视投影。\r
vec3 horizontalToEquatorial(vec3 dir){\r
  // 世界坐标：x=东、y=天顶、z=南；恒星坐标随当地恒星时旋转。\r
  float sinLat = sin(uLatitude), cosLat = cos(uLatitude);\r
  float xH = cosLat * dir.y + sinLat * dir.z;\r
  float yH = -dir.x;\r
  float zH = sinLat * dir.y - cosLat * dir.z;\r
  float c = cos(uSidereal), s = sin(uSidereal);\r
  return normalize(vec3(c * xH + s * yH, s * xH - c * yH, zH));\r
}\r
\r
vec3 proceduralStars(vec3 eq, float scale, float threshold, float t){\r
  // 用 uStarSeed 偏移采样坐标：每天星空布局不同（真实星空随地球公转渐变）\r
  vec2 p = octahedralMap(eq) * scale + vec2(uStarSeed * 17.3, uStarSeed * 29.7);\r
  vec2 id = floor(p), f = fract(p);\r
  float presence = hash21(id + scale);\r
  vec2 center = 0.18 + hash22(id + 31.7) * 0.64;\r
  float radius = mix(0.075, 0.19, hash21(id + 9.4));\r
  float point = 1.0 - smoothstep(radius, radius * 2.2, length(f - center));\r
  point *= step(threshold, presence);\r
  float energy = pow(clamp((presence - threshold) / (1.0 - threshold), 0.0, 1.0), 1.7);\r
  float temperature = hash21(id + 73.1);\r
  vec3 warm = vec3(1.0, 0.72, 0.50);\r
  vec3 cold = vec3(0.62, 0.78, 1.0);\r
  vec3 starColor = mix(warm, cold, smoothstep(0.25, 0.78, temperature));\r
  // 大气闪烁（scintillation）：真实星闪幅度可达 30-50%，亮星闪得更明显\r
  float twinkleSpeed = mix(0.8, 2.6, temperature) + presence * 3.0;\r
  float twinkle = 0.65 + 0.35 * sin(t * twinkleSpeed + presence * 91.0 + uStarSeed * 6.0);\r
  twinkle *= 0.7 + 0.3 * sin(t * twinkleSpeed * 1.7 + presence * 47.0);\r
  return starColor * point * (0.38 + energy * 1.85) * twinkle;\r
}\r
\r
float catalogStar(vec3 eq, vec3 starDir, float radius){\r
  float metric = 1.0 - dot(eq, starDir);\r
  return 1.0 - smoothstep(0.0, 0.5 * radius * radius, metric);\r
}\r
\r
// 极光：高纬度+夜晚+太阳风活动时才出现（JS端按概率控制 uAurora）\r
// 真实极光：绿色最常见（低空氧557.7nm），底部红色（630nm），顶部紫色（氮）\r
// 帘幕状垂直纹理，随时间缓慢波动，朝磁极方向（北半球=北方天空）\r
vec3 auroraColor(vec3 dir, float t){\r
  if (uAurora < 0.01) return vec3(0.0);\r
  // 极光在北方天空（z 负方向）低空（15-55°高度），朝北越正越强\r
  float northness = smoothstep(0.1, 0.6, -dir.z);\r
  float heightBand = smoothstep(0.12, 0.30, dir.y) * (1.0 - smoothstep(0.50, 0.72, dir.y));\r
  if (northness * heightBand < 0.01) return vec3(0.0);\r
  // 帘幕：水平方向用噪声生成垂直条纹，垂直方向有亮度梯度\r
  float t2 = t * 0.08;\r
  float curtain = valueNoise(vec2(dir.x * 6.0 + t2, dir.y * 3.5)) * 0.55;\r
  curtain += valueNoise(vec2(dir.x * 14.0 - t2 * 1.3, dir.y * 5.0)) * 0.30;\r
  curtain += valueNoise(vec2(dir.x * 28.0 + t2 * 0.7, dir.y * 8.0)) * 0.15;\r
  curtain = pow(max(curtain, 0.0), 2.2);\r
  // 垂直波动：帘幕底部亮顶部暗，模拟极光从沉降粒子激发\r
  float vGrad = smoothstep(0.45, 0.15, dir.y);\r
  curtain *= vGrad;\r
  // 颜色随高度：底部红→中部绿（最亮）→顶部紫\r
  float h = smoothstep(0.13, 0.55, dir.y);\r
  vec3 green = vec3(0.20, 1.00, 0.42);  // 557.7nm 氧绿线\r
  vec3 red   = vec3(1.00, 0.32, 0.22);  // 630nm 氧红线\r
  vec3 purple = vec3(0.48, 0.22, 0.78); // 氮紫线\r
  vec3 col = mix(red, green, smoothstep(0.0, 0.35, h));\r
  col = mix(col, purple, smoothstep(0.55, 0.85, h));\r
  return col * curtain * northness * heightBand * uAurora * 0.7;\r
}\r
\r
// 返回水面高度；disp 是 Gerstner 轨道位移，glow 是局部浪尖能量。\r
float sunCloudOcc = 0.0;\r
float moonCloudOcc = 0.0;\r
\r
vec3 skyColor(vec3 dir, float t){\r
  float y = clamp(dir.y, 0.0, 1.0);\r
  float horizon = pow(1.0 - y, 2.2);\r
  float sunDot = max(dot(dir, uSunDir), 0.0);\r
  float sunHeight = uSunDir.y;\r
  float daylight = 1.0 - uNight;\r
\r
  // 大气底色 + 晨昏时的局部 Mie 散射。暖色用 uCelestialColor（JS端已区分日出金粉/日落深红）。\r
  // 渐变指数 0.6：天顶深蓝更集中于高处，与地平线浅蓝形成更强层次对比（保留 uniform 以维持日夜/乌云/晨昏逻辑）\r
  vec3 col = mix(uSkyHorizon, uSkyZenith, pow(y, 0.6));\r
  float twilight = exp(-pow((sunHeight + 0.035) / 0.19, 2.0));\r
  float sunAureole = pow(sunDot, mix(5.0, 15.0, daylight));\r
  col += uCelestialColor * twilight * sunAureole * (0.24 + 0.76 * horizon);\r
  // 太阳光晕多层化：近距强核（白）+ 中距大气散射晕（低空红橙/高空白）+ 远距辉光\r
  // 真实太阳不是固定圆：低空大气厚光晕大而红，高空光晕小而白\r
  // 光晕系数收窄：避免太阳周围大片天空被洗白，保住天顶深蓝的层次感\r
  float sunH = max(sunHeight, 0.0);\r
  float haloLow = pow(sunDot, 28.0);   // 大气散射晕，范围较大\r
  float haloCore = pow(sunDot, 180.0); // 近距强核\r
  vec3 haloColor = mix(uCelestialColor, vec3(1.0, 0.98, 0.92), smoothstep(0.0, 0.25, sunH));\r
  col += haloColor * haloLow * uSunVisibility * (0.18 + 0.20 * twilight);\r
  col += vec3(1.0, 0.98, 0.95) * haloCore * uSunVisibility * 0.50;\r
\r
  float clouds = cloudField(dir, t);\r
  float cirrus = cirrusField(dir, t);\r
  float totalClouds = clamp(max(clouds, cirrus * 0.65), 0.0, 1.0);\r
\r
  if (uNight > 0.015){\r
    vec3 eq = horizontalToEquatorial(dir);\r
    float clearSky = uNight * uNight * smoothstep(0.025, 0.18, y);\r
\r
    // 程序化暗星两层，亮度、色温和闪烁周期均不相同。\r
    vec3 stars = proceduralStars(eq, 185.0, 0.9940, t);\r
    stars += proceduralStars(eq, 330.0, 0.9970, t) * 0.64;\r
\r
    // IAU 银北极（RA 12h51m, Dec +27.13°）定义真实银河平面。\r
    const vec3 galacticNorth = vec3(-0.867666, -0.198076, 0.455984);\r
    float galacticDistance = abs(dot(eq, galacticNorth));\r
\r
    // 银河带基本轮廓：调整指数衰减，使其边缘更柔和\r
    // 将 0.12 缩小到 0.06，让银河带收窄；提高指数到 1.8 增加边缘的对比度\r
    float milkyBand = exp(-pow(galacticDistance / 0.06, 1.8));\r
\r
    // 1. 生成银河专属的"密集群星"（取代原本斑块状的 FBM 噪声）\r
    // 使用极高频的空间映射来生成细小的星尘，让银河由"星点"而非"云斑"组成\r
    vec2 starDustUv = octahedralMap(eq) * 550.0 + vec2(uStarSeed * 7.3);\r
    float starDustNoise = hash21(floor(starDustUv));\r
    // 提取高亮星点，结合微弱的时间函数闪烁\r
    float starDust = smoothstep(0.85, 1.0, starDustNoise) * (0.6 + 0.4 * sin(t * 1.5 + starDustNoise * 100.0));\r
    vec2 core=.25+.50*vec2(hash21(floor(starDustUv)+5.1),hash21(floor(starDustUv)-7.3));\r
    starDust*=1.-smoothstep(.08,.42,length(fract(starDustUv)-core));\r
\r
    // 2. 柔和的星际气体底色（作为星尘的微弱衬托，彻底消除强烈的斑块感）\r
    vec2 gUv = octahedralMap(eq) * 18.0;\r
    float gas = valueNoise(gUv) * 0.5 + valueNoise(gUv * 3.0) * 0.25;\r
\r
    // 3. 细腻的暗星云裂缝（保留银河的结构感）\r
    float dustLanes = valueNoise(gUv * 4.0 + vec2(13.7, 5.1));\r
    float darkRift = smoothstep(0.40, 0.75, dustLanes);\r
\r
    // 4. 颜色交叉与混合：更加合理、自然的星族色彩过渡\r
    const vec3 galacticCenter = normalize(vec3(-0.472, -0.485, -0.737));\r
    float toCenter = max(dot(eq, galacticCenter), 0.0);\r
\r
    // 核心区：年老恒星密集，偏明亮的黄/香槟色\r
    vec3 coreColor = vec3(0.85, 0.65, 0.40);\r
    // 盘面中段：星际尘埃与繁星混合，暖灰紫\r
    vec3 midColor  = vec3(0.45, 0.40, 0.50);\r
    // 边缘散落区：年轻恒星，偏深邃的冷蓝\r
    vec3 edgeColor = vec3(0.12, 0.18, 0.35);\r
\r
    // 利用到盘面的距离(milkyBand)进行基础过渡\r
    vec3 baseGasColor = mix(edgeColor, midColor, milkyBand);\r
    // 叠加中心高亮色彩，加入少量 gas 噪声让颜色有机的交织互相渗透，而非死板渐变\r
    float coreIntensity = pow(toCenter, 3.5) * milkyBand;\r
    vec3 milkyColor = mix(baseGasColor, coreColor, coreIntensity + gas * 0.15);\r
\r
    // 5. 合成银河：柔和气体底色 + 密集的星尘发光 - 暗星云遮挡\r
    // 星点颜色继承所处区域的色彩并大幅提亮，模拟群星璀璨\r
    // 将 4.5 降到 1.5（减弱星尘亮度）\r
    vec3 starDustColor = milkyColor * starDust * 1.5;\r
\r
    vec3 milkyWay = (milkyColor * gas * 0.35 + starDustColor)\r
                  * milkyBand\r
                  * (1.0 - darkRift * 0.6)\r
                  * 0.40;\r
\r
    // 主要亮星使用真实 J2000 赤经/赤纬，可随季节和恒星时转动。\r
    vec3 catalog = vec3(0.0);\r
    catalog += vec3(0.72, 0.82, 1.00) * catalogStar(eq, vec3(-0.187461,  0.939217, -0.287628), 0.0025) * 2.5; // Sirius\r
    catalog += vec3(1.00, 0.78, 0.55) * catalogStar(eq, vec3(-0.783792, -0.526984,  0.328570), 0.0020) * 1.9; // Arcturus\r
    catalog += vec3(0.72, 0.83, 1.00) * catalogStar(eq, vec3( 0.125086, -0.769411,  0.626386), 0.0021) * 2.0; // Vega\r
    catalog += vec3(1.00, 0.86, 0.65) * catalogStar(eq, vec3( 0.130528,  0.682310,  0.719316), 0.0020) * 1.8; // Capella\r
    catalog += vec3(0.66, 0.78, 1.00) * catalogStar(eq, vec3( 0.194873,  0.970398, -0.142663), 0.0018) * 1.6; // Rigel\r
    catalog += vec3(1.00, 0.58, 0.38) * catalogStar(eq, vec3( 0.020897,  0.991435,  0.128917), 0.0018) * 1.4; // Betelgeuse\r
    catalog += vec3(0.84, 0.88, 1.00) * catalogStar(eq, vec3( 0.459133, -0.874890,  0.154159), 0.0018) * 1.5; // Altair\r
    catalog += vec3(0.72, 0.82, 1.00) * catalogStar(eq, vec3( 0.455577, -0.536249,  0.710554), 0.0017) * 1.35; // Deneb\r
    catalog += vec3(1.00, 0.60, 0.42) * catalogStar(eq, vec3(-0.344844, -0.826400, -0.445135), 0.0018) * 1.5; // Antares\r
    catalog += vec3(0.76, 0.84, 1.00) * catalogStar(eq, vec3( 0.010129,  0.007900,  0.999917), 0.0016) * 1.25; // Polaris\r
\r
    col += (stars + milkyWay + catalog) * clearSky * (1.0 - totalClouds * 0.92);\r
    // 极光：在星空之上、云层之下渲染（云会遮挡极光）\r
    col += auroraColor(dir, t) * clearSky * (1.0 - totalClouds * 0.88);\r
  }\r
\r
float sunDisk=(1.0-smoothstep(.024,.038,length(dir-uSunDir)))*uSunVisibility;\r
  // 云层遮挡日面：厚云（sunCloudOcc→1）遮挡 92%，薄云按密度渐变。乌云时遮挡更强。\r
  float sunOcc = 1.0 - sunCloudOcc * mix(0.92, 0.98, uCloudDarken);\r
  col += uCelestialColor * sunDisk * 7.2 * sunOcc;\r
\r
  // 月面按真实太阳方向求终结线：新月、弦月、满月都由几何关系产生。\r
  // 月相不是地球阴影遮挡，而是月亮自身的明暗面（Wikipedia: "caused by the Moon's shadow on itself"）\r
  vec3 moonReference = abs(uMoonDir.y) > 0.94 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);\r
  vec3 moonRight = normalize(cross(moonReference, uMoonDir));\r
  vec3 moonUp = normalize(cross(uMoonDir, moonRight));\r
  // 月面视觉半径约 2.1°（真实 0.26°，8× 兼顾可见性）；日月视大小近乎相同，符合真实天文学。\r
  const float moonRadius = 0.0366;\r
  vec2 moonUv = vec2(dot(dir, moonRight), dot(dir, moonUp)) / moonRadius;\r
  float moonR2 = dot(moonUv, moonUv);\r
  float moonDisk = 1.0 - smoothstep(0.965, 1.00, moonR2);\r
  // antipodal 修复：球面切空间投影在 -uMoonDir 方向也映射到圆盘中心，\r
  // 会在月亮正对面生成"假月亮"（月相反转、随真月亮运动）。用 dot 门控只在前半球渲染。\r
  moonDisk *= smoothstep(0.0, 0.06, dot(dir, uMoonDir));\r
  float moonZ = sqrt(max(0.0, 1.0 - moonR2));\r
  vec3 moonNormal = normalize(moonRight * moonUv.x + moonUp * moonUv.y - uMoonDir * moonZ);\r
  // 终结线柔化：真实月面粗糙度使明暗分界有一定过渡宽度，不是硬边\r
  float moonLit = smoothstep(-0.14, 0.14, dot(moonNormal, uSunDir));\r
  // 双层环形山纹理：粗噪大斑（月海）+ 细噪小点（陨石坑），增强表面真实感\r
  float crater1 = valueNoise(moonUv * 6.5 + vec2(3.7, 8.1));\r
  float crater2 = valueNoise(moonUv * 14.0 + vec2(1.2, 5.6));\r
  float crater = clamp(crater1 * 0.7 + crater2 * 0.3, 0.0, 1.0);\r
  // opposition surge：满月时观测方向与光源一致，表面反向散射增强，月面更亮\r
  vec3 moonAlbedo = mix(vec3(0.36, 0.40, 0.44), vec3(0.92, 0.93, 0.91), crater);\r
  moonAlbedo *= 0.72 + 0.28 * uMoonPhase;\r
  // 地照：地球反射阳光照亮月面暗侧，新月时最强（地球满相），满月时为零\r
  // 极微弱（真实地照仅肉眼勉强可见），避免缺月时看到完整圆轮廓\r
  vec3 earthshine = vec3(0.014, 0.018, 0.026) * (1.0 - uMoonPhase) * (1.0 - uMoonPhase);\r
  vec3 moonColor = mix(earthshine, moonAlbedo, moonLit);\r
  // 月盘可见度随明暗渐变：dark 侧月盘几乎不可见（仅 2%），避免缺月时看到外框圆\r
  // 真实月相：暗面是月亮自身的夜面，不反光，肉眼看不到圆轮廓\r
  // smoothstep 下限必须 ≥0：若 <0，moonLit=0 时 smoothstep 仍 >0，门控失效（曾因 -0.08 导致暗部 21.7% 可见）\r
  float diskVis = mix(0.02, 1.0, smoothstep(0.0, 0.22, moonLit));\r
  moonDisk *= diskVis;\r
  // 低空月光大气散射：月光经厚大气层瑞利散射，短波(蓝)被散射掉，剩长波(红橙)。\r
  // 月出/月落时月亮低空偏橙红，升高后渐变回银白（扩大过渡范围，避免突兀消失）\r
  float moonAtmo = 1.0 - smoothstep(0.0, 0.55, uMoonDir.y);\r
  vec3 moonLowColor = vec3(1.0, 0.55, 0.30);\r
  moonColor = mix(moonColor, moonLowColor * (moonLit * 0.7 + 0.3), moonAtmo * 0.65);\r
  // 云层遮挡月面：月光较柔，薄云也能明显遮蔽；厚云遮挡 88%。\r
  float moonOcc = 1.0 - moonCloudOcc * mix(0.85, 0.95, uCloudDarken);\r
  col += moonColor * moonDisk * uMoonVisibility * 2.15 * moonOcc;\r
  float moonHalo = pow(max(dot(dir, uMoonDir), 0.0), 720.0);\r
  // 月晕：低空偏暖橙晕，高空偏冷蓝晕；满月时最强（过渡范围与月盘一致）\r
  vec3 moonHaloColor = mix(vec3(0.55, 0.35, 0.20), vec3(0.30, 0.40, 0.56), smoothstep(0.0, 0.5, uMoonDir.y));\r
  // 月晕随月相衰减：弯月反射光总量远少于满月，月晕应更弱。\r
  // pow(uMoonPhase, 0.5) 让弯月(uMoonPhase≈0.15)时 halo 仍有 0.387，但不至于勾勒出完整圆框\r
  float haloPhase = pow(uMoonPhase, 0.5);\r
  col += moonHaloColor * moonHalo * uMoonVisibility * (0.15 + 0.85 * haloPhase) * 0.26 * moonOcc;\r
\r
  // 云层最后合成，因此会正确遮挡星光与日月，同时接受晨昏暖光和月光。\r
  // 无月夜云层极暗（仅微弱天光），避免星空上叠加"固定灰云"的视觉\r
  vec3 cloudNight = vec3(0.025,0.038,0.070)\r
                  + vec3(0.12, 0.17, 0.25) * uMoonVisibility * uMoonPhase;\r
  vec3 cloudDay = mix(vec3(0.42, 0.48, 0.52), vec3(0.94, 0.96, 0.97), smoothstep(0.03, 0.75, y));\r
  vec3 cloudColor = mix(cloudNight, cloudDay, daylight);\r
  // 3D 体积感：厚云中心自阴影（变暗），云顶被天光照亮、云底在阴影中\r
  float cloudSelf = mix(1.0, 0.72, clouds * clouds);       // 厚云中心暗\r
  float cloudTopLight = 0.55 + 0.45 * smoothstep(0.0, 0.45, dir.y); // 云顶亮云底暗\r
  cloudColor *= cloudSelf * cloudTopLight;\r
  // 晚霞：太阳方向云层被染橙红；云遮日时云后与边缘透出暖光。\r
  float sunGlow = pow(sunDot, 4.0);\r
  cloudColor += uCelestialColor * sunGlow * (0.25 + 0.75 * twilight) * 0.6;\r
  // 云后透光：太阳被云遮挡时，云从背后被照亮（橙红→暖白），让遮日云团发光\r
  float backLight = pow(sunDot, 3.0) * totalClouds;\r
  cloudColor += mix(vec3(1.0, 0.5, 0.2), vec3(1.0, 0.85, 0.65), backLight)\r
              * backLight * (0.3 + 0.7 * twilight) * 0.7;\r
  // 云边缘透光：薄云 / 云边缘处在太阳方向透出更亮的橙红\r
  float edgeGlow = pow(sunDot, 6.0) * totalClouds * (1.0 - totalClouds) * 4.0;\r
  cloudColor += vec3(1.0, 0.45, 0.15) * edgeGlow * (0.25 + 0.75 * twilight);\r
  // 暴风雨时乌云变暗变灰沉。\r
  cloudColor = mix(cloudColor, cloudColor * vec3(0.38, 0.40, 0.46), uCloudDarken);\r
  // 卷云颜色偏冷蓝白，高空感；在低层云稀薄处叠加卷云层\r
  vec3 cirrusColor = mix(cloudColor, vec3(0.88, 0.92, 0.98), 0.35);\r
  cloudColor = mix(cloudColor, cirrusColor, cirrus * (1.0 - clouds));\r
  // 云层不透明度：厚云接近全遮（0.95），薄云半透，让云后日月被有效遮挡。\r
  // 白天云更实（0.95），黄昏/夜晚稍透（0.72）让月光微透。\r
  float cloudOpacity = totalClouds * mix(0.72, 0.95, daylight);\r
  col = mix(col, cloudColor, cloudOpacity);\r
  // 闪电从云层内部发出：云体被瞬时从内部照亮（云越厚、越接近云底越明显）。\r
  // 在 mix 之后叠加，让天空与水面反射中的云层都正确接受闪电照明。\r
  if (uFlash > 0.05){\r
    float cloudFlash = totalClouds * smoothstep(0.30, 0.0, dir.y) * uFlash;\r
    col += vec3(0.92, 0.96, 1.0) * cloudFlash * 0.65;\r
  }\r
  return col;\r
}\r
\r
varying vec3 sight;\r
void main(){\r
  vec3 dir=normalize(sight);float t=mod(uTime,3600.0);\r
  if(uSunVisibility>0.0 && dot(dir,uSunDir)>.9992)sunCloudOcc=cloudField(uSunDir,t);\r
  if(uMoonVisibility>0.0 && dot(dir,uMoonDir)>.975)moonCloudOcc=cloudField(uMoonDir,t);\r
  vec3 col=skyColor(dir,t);\r
  if(uFlash>.02){\r
    vec3 bolt=lightningBolts(vec3(0.,.7,0.),dir,uLightningSeed,uFlash);\r
    col+=(vec3(1.)*bolt.x+vec3(.5,.7,1.)*bolt.y+vec3(.92,.96,1.)*bolt.z)*2.2*mix(.3,1.,uNight);\r
  }\r
  gl_FragColor=vec4(col,1.);\r
  #include <tonemapping_fragment>\r
  #include <colorspace_fragment>\r
}\r
`;function Ey(s){const e={};for(const P of["SunDir","MoonDir","SkyHorizon","SkyZenith","CelestialColor"])e["u"+P]={value:new z};for(const P of["Time","CloudTime","SunVisibility","MoonVisibility","MoonPhase","Night","Sidereal","CloudCover","CloudDarken","Flash","LightningSeed","StarSeed","Aurora","WindLevel"])e["u"+P]={value:0};e.uWindOffset={value:new me},e.uLatitude={value:Us.latitude*Math.PI/180};const t=new cn(new Wo(1,32,18),new Vn({uniforms:e,fragmentShader:Ty,side:gn,depthWrite:!1,vertexShader:"varying vec3 sight;void main(){sight=position;vec4 clip=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);gl_Position=clip.xyww;}"}));t.frustumCulled=!1,t.renderOrder=2,t.layers.enable(1),s.add(t);let n=Date.now(),i=n,r=1,o="auto",a="auto",l="follow",c=0,u=0,h=0,f=.3,d=0,g=.7,x=0,p=0,m=-20,v=0,S=!0,y=-1,b,T,_,M;const C=P=>i+(P-n)*r;function w(P){const N=Date.now(),W=C(N),R=jf(new Date(N));i=N,n=N,r=1,["100","1000","10000"].includes(P)?(i=W,r=Number(P)):P==="night"?i=R+23*36e5:P==="day"?i=R+12*36e5:P!=="real"&&(i=yy(new Date(N),P)??N),S=!0,y=-1}return{setTime:w,setWeather(P){o=P,p=0},setWind(P){a=P,d=0},setLightning(P){l=P,p=0,m=-20},update(P){const N=C(Date.now()),W=Math.floor(N/1e3),R=x?Math.min(1,P-x):0;x=P,y!==W&&(_=new Date(N+8*36e5),T=by(_),b=vy(new Date(N),c),y=W,M=_.getUTCFullYear()*1e4+(_.getUTCMonth()+1)*100+_.getUTCDate());const I=o==="storm"||o==="rain",k=o==="auto",U=l==="on"||l==="follow"&&o==="storm",K=l==="auto"||l==="follow"&&k,q=U?1:k?T.cloudTarget:Number(I),Z=U?.85:k?T.darkenTarget||0:I?.85:0,ee=k?T.rainTarget:Number(I),ce=S?1e4:R*r;if(S=!1,h=it.damp(h,q,1/(k?90:4),ce),c=it.damp(c,Z,1/(k?45:3),ce),u=it.damp(u,ee*h*(.3+.7*c),1/(k?20:2),ce),P>=d){const G=Math.random();f=a==="auto"?G<.25?0:G<.75?.15+.25*Math.random():.5+.35*Math.random():{off:0,low:.3,high:.8}[a]??.3,g=Math.random()*Math.PI*2,d=P+120+Math.random()*240}(U||K&&T.lightningAllow&&h>.75&&c>.5)&&P>=p&&(m=P,v=Math.random()*100,p=P+(U?3+Math.random()*3:60+Math.random()*180));const de=P-m,$=(G,pe)=>de>=G?Math.max(0,1-(de-G)/pe):0,ge=Math.max($(0,.15),$(.24,.12)*.72,$(.52,.17)*.86),ne=e,Te=(N/1e3+8*3600)%86400;ne.uTime.value=Te,ne.uCloudTime.value=Te%1570.7963,ne.uSunDir.value.fromArray(b.sunDir),ne.uMoonDir.value.fromArray(b.moonDir),ne.uSkyZenith.value.fromArray(b.skyZenith),ne.uSkyHorizon.value.fromArray(b.skyHorizon),ne.uCelestialColor.value.fromArray(b.celestialColor),ne.uSunVisibility.value=b.sunVisibility,ne.uMoonVisibility.value=b.moonVisibility,ne.uMoonPhase.value=b.moonPhase,ne.uNight.value=b.nightness,ne.uSidereal.value=b.sidereal,ne.uStarSeed.value=M*2654435761%1e6/1e6;const F=M*40503%1e3/1e3<.08+(Us.latitude-30)/40*.5;return ne.uAurora.value=F?(.4+M*7919%600/1e3)*Math.max(0,(b.nightness-.3)/.7):0,ne.uCloudCover.value=.36+.64*Math.max(c,h*.55),ne.uCloudDarken.value=c,ne.uFlash.value=ge,ne.uLightningSeed.value=v,ne.uWindLevel.value=f,ne.uWindOffset.value.x=(ne.uWindOffset.value.x+(9e-4+Math.cos(g)*f*.012)*R*r+256)%256,ne.uWindOffset.value.y=(ne.uWindOffset.value.y+(.0012+Math.sin(g)*f*.012)*R*r+256)%256,{p:b,flash:ge,bolt:v,rain:u,dark:c,wind:f,angle:g,phase:Te%3600,clock:_.toISOString().slice(11,16)}}}}function wy(s,e){let t=31415;const n=()=>(t=Math.imul(1664525,t)+1013904223>>>0)/4294967296,i=new Rt,r=new Nt;r.setAttribute("position",new dt([0,0,0,-.38,.52,.09,.38,.52,.09,0,1,.55],3)),r.setIndex([0,1,2,1,3,2]),r.computeVertexNormals();const o=new Go(1,0),a=new Yt({side:ln,roughness:.9});function l(c,u,h,f,d,g,x,p,m,v,S){i.position.set(u,h,f),i.scale.set(d,g,x),i.rotation.set(p,m,v),i.updateMatrix(),c.push([i.matrix.clone(),new Ge(S)])}for(const[c,u,h,f]of[[-5.6,-11.35,5,.75],[6.8,-11.32,3.7,.65],[-12.15,3.3,1,8],[12.45,1.7,1.25,8],[-6.7,13.1,5.8,1.1]]){const d=[],g=[];for(let x=0;x<170;x++){const p=n()*6.283,m=Math.sqrt(n()),v=c+Math.cos(p)*h*m,S=u+Math.sin(p)*f*m;if(Math.abs(v-1.5)<1.5&&S<0)continue;const y=e(v,S),b=.16+n()*.38;for(let _=0;_<6;_++){const M=n()*6.28;l(d,v,y,S,.05+n()*.05,b*(.5+n()*.55),.06,0,M,.25+n()*.65,["#63754c","#778853","#465c37"][_%3])}if(x%4)continue;l(d,v,y,S,.018,b,.018,0,0,.02,"#657847");const T=["#b497b9","#dbcfb0","#bf7486","#ae9bc4"][x%7%4];for(let _=0;_<5;_++){const M=_*1.2566;l(g,v+.032*Math.cos(M),y+b,S+.032*Math.sin(M),.04,.016,.027,0,-M,.22,T)}l(g,v,y+b+.01,S,.021,.018,.021,0,0,0,"#d1a94e")}for(const[x,p]of[[d,r],[g,o]]){const m=new Ho(p,a,x.length);x.forEach(([v,S],y)=>{m.setMatrixAt(y,v),m.setColorAt(y,S)}),m.computeBoundingSphere(),m.receiveShadow=!0,s.add(m)}}}const Ul=1.5,Fo=-13.16,td=-24,Fl=1.82,ho=3.72,xs=-22.12;function Ar(s,e,t=0){return Math.abs(s-Ul)<=Fl/2-t&&e<=Fo+.16&&e>=td+t}function sr(s){return-1.18-.66*it.smoothstep(-s,-Fo,19.6)}function Ay(s){const e=nt(s),t=40,n=(Fo-td)/t;for(let r=0;r<t;r++){const o=Fo-(r+.5)*n,a=sr(o),l=X(e,Ul,a-.055,o,Fl,.11,n-.009,D.oak);l.rotation.x=-Math.atan((sr(o+.05)-sr(o-.05))/.1)}const i=new Yt({color:16772306,emissive:16760176,emissiveIntensity:.75});for(const r of[-14.2,-17.4,-20.7,-23.72])for(const o of[-1,1]){const a=Ul+o*(Fl/2-.09),l=sr(r);ot(e,a,l-1.18,r,.082,.11,2.3,D.walnut,12),(o<0||r>xs+2)&&(ot(e,a,l+.14,r,.068,.079,.29,D.bronze,12),ot(e,a,l+.29,r,.071,.071,.035,i,12))}for(const r of[-20.4,-23.56])X(e,2.21,-1.79,r,.095,.1,.12,D.bronze),X(e,2.21,-1.72,r,.09,.065,.34,D.bronze,.023);Ht(e)}function Ry(s){const e=nt(s),t=_t(2313037,.36,.13),n=_t(15656141,.42),i=[[-2.53,.018,.8],[-2.24,.4,.7],[-1.65,.75,.59],[-.83,.95,.55],[.05,1,.54],[1.08,.98,.53],[1.93,.87,.55]],r=[],o=[],a=new Nt;for(const[m,v,S]of i){const y=[[1,S],[.985,S-.066],[.965,S-.115],[.86,.025],[.64,-.24],[0,-.46]];for(const[b,T]of[...y,...y.slice(0,-1).reverse().map(([_,M])=>[-_,M])])r.push(b*v,T,m)}const l=11,c=[1,2,0,0,0,0,0,0,2,1];for(const m of[0,1,2]){const v=o.length;for(let S=0;S<i.length-1;S++)for(let y=0;y<l-1;y++){if(c[y]!==m)continue;const b=S*l+y;o.push(b,b+l,b+l+1,b,b+l+1,b+1)}if(m===0)for(const S of[0,i.length-1]){const y=S*l;for(let b=0;b<5;b++)o.push(y+b,y+10-b,y+9-b,y+b,y+9-b,y+b+1)}a.addGroup(v,o.length-v,m)}a.setAttribute("position",new dt(r,3)),a.setIndex(o),a.computeVertexNormals();const u=[t,n,D.brass.clone()];for(const m of u)m.side=ln;const h=new cn(a,u);h.castShadow=h.receiveShadow=!0,s.add(h);for(const m of[-1,1])for(let v=1;v<i.length;v++){const[S,y,b]=i[v-1],[T,_,M]=i[v];Et(e,re(m*y,b,S),re(m*_,M,T),.037,D.table)}const f=new $i;f.moveTo(0,-2.49);for(const[m,v]of i.slice(1,4))f.lineTo(v*.99,m);f.lineTo(.952,-.47),f.lineTo(-.952,-.47);for(const[m,v]of i.slice(1,4).reverse())f.lineTo(-v*.99,m);f.closePath();const d=new Vo(f);d.rotateX(Math.PI/2);const g=d.attributes.position;for(let m=0;m<g.count;m++)g.setY(m,.54+.22*Math.pow(Math.max(0,(-g.getZ(m)-.47)/2.02),2));d.computeVertexNormals(),vt(e,d,D.table.clone()).material.side=ln;for(const m of[-1,1])for(const v of[-1.06,1.36]){const S=m*.81;X(e,S,.57,v,.08,.09,.13,D.bronze,.015),X(e,S,.62,v,.065,.038,.28,D.metal,.015)}for(const m of[-.53,1.02])Et(e,re(-.93,.56,m),re(-1.035,.31,m),.012,D.cream),Lt(e,-1.035,.15,m,.081,.208,.081,D.ivory);X(e,0,.11,.57,1.63,.1,2.53,D.oak);for(const m of[-.88,.88])X(e,m,.37,.45,.09,.34,2.63,n,.025);X(e,0,.37,1.83,1.65,.36,.1,n,.03);for(const[m,v,S]of[[.39,.84,.61],[-.39,.84,.61],[0,1.57,1.54]])X(e,m,.32,v,S*.83,.32,.31,D.green,.035),X(e,m,.51,v,S,.11,.39,D.ivory,.048),X(e,m,.66,v+.16,S,.29,.092,D.ivory,.038);X(e,0,.54,-.51,1.64,.45,.39,n,.055),X(e,0,.78,-.48,1.75,.08,.44,D.table,.032);const x=X(e,0,.99,-.65,1.66,.37,.021,Qn);x.rotation.x=-.18;for(const m of[-.83,0,.83])Et(e,re(m,.8,-.62),re(m,1.18,-.69),.016,D.metal);Et(e,re(-.83,1.18,-.69),re(.83,1.18,-.69),.019,D.metal);const p=nt(s,.39,.81,-.16);p.rotation.order="XYZ",p.rotation.x=-.3,vt(p,new Ui(.152,.021,8,24),D.walnut);for(let m=0;m<3;m++)Et(p,re(),re(.14*Math.sin(m*2.094),.14*Math.cos(m*2.094),0),.012,D.metal);Lt(p,0,0,0,.04,.04,.035,D.brass);for(const m of[.28,.49]){const v=ot(e,m,.825,-.4,.054,.054,.016,D.ink);v.rotation.x=Math.PI*.37}return X(e,0,.35,2.07,.41,.48,.34,D.ink,.06),X(e,0,-.11,2.08,.14,.62,.19,D.metal,.035),Ht(e),Ht(p),p}const wh=Array.from({length:xn.length/4},(s,e)=>Math.hypot(xn[4*e],xn[4*e+1]));function Cy(s,e,t,n){let i=-2.56;for(let r=0;r<wh.length;r++){const o=wh[r],a=r*4,l=xn[a+2]*(.72+.78*n),c=Math.cos(xn[a]*s+xn[a+1]*e-Math.sqrt(9.81*o)*t+xn[a+3]);i+=l*(c+.5*Math.min(.55,o*l)*(2*c*c-1))}return i}function Py(s,e,t){Ay(s);const n=nt(s,ho,-2.56,xs);n.rotation.order="YXZ";const i=Ry(n);let r=0,o=0,a=!1;const l=n.position,c=re(.39,1.4,.83);function u(g,x){return Math.abs(g)>64||x<-80||x>-13||e(g,x)>-2.99||Ar(g,x)?!1:!t.some(([p,m,v])=>Math.hypot(g-p,x-m)<v*.57)}function h(g,x,p){const m=Math.sin(p),v=Math.cos(p);for(const[S,y]of f)if(!u(g+S*v+y*m,x-S*m+y*v))return!1;return!0}const f=[[0,-2.48],[-.92,-.88],[.92,-.88],[-.89,1.85],[.89,1.85],[0,0]];function d(){return Math.abs(r)<.95&&Math.abs(l.x-ho)<1.9&&Math.abs(l.z-xs)<2.85}return{vessel:n,get heading(){return o},get speed(){return r},canMoor:d,get distance(){return Math.hypot(l.x-ho,l.z-xs)},canBoard(g,x){return!a&&Ar(g,x)&&Math.abs(x-xs)<2.5},board(){a=!0},moor(){a=!1,r=o=0,l.x=ho,l.z=xs},eye(g){return n.localToWorld(g.copy(c))},update(g,x,p,m){if(a){i.rotation.z=it.damp(i.rotation.z,-m*1.05,5,g);const C=p*(p>=0?6.5:2.6);r=it.damp(r,C,p?.9:1.55,g);const w=o-m*g*it.clamp(r*1.05,-1.18,1.18);h(l.x,l.z,w)&&(o=w);const P=l.x-Math.sin(o)*r*g,N=l.z-Math.cos(o)*r*g;h(P,N,o)?(l.x=P,l.z=N):r=0}else i.rotation.z=0;const v=Math.sin(o),S=Math.cos(o),y=(C,w)=>Cy(l.x+C,l.z+w,x.phase,x.wind),b=y(-1.6*v,-1.6*S),T=y(1.6*v,1.6*S),_=y(-.82*S,.82*v),M=y(.82*S,-.82*v);l.y=it.damp(l.y,(b+T+_+M)/4,4,g),n.rotation.set(it.damp(n.rotation.x,Math.atan2(b-T,3.2)*.65,3,g),o,it.damp(n.rotation.z,Math.atan2(M-_,1.64)*.55,3,g),"YXZ")}}}const Ah=`// Original Galok Phillips spectrum with Gerstner displacement and Stokes crests, in metres.\r
uniform vec4 uWaves[14];\r
uniform vec2 uWaveShape[14];\r
uniform float time,wind;\r
void swell(vec2 p,out float height,out vec2 slope,out vec2 drift){\r
  height=0.;slope=vec2(0.);drift=vec2(0.);\r
  for(int i=0;i<14;i++){\r
    vec4 w=uWaves[i];float a=w.z,steep=uWaveShape[i].x;\r
    float phase=dot(w.xy,p)+w.w;\r
    float c=cos(phase),s=sin(phase);\r
    height+=a*(c+.5*steep*(2.*c*c-1.));\r
    slope-=a*w.xy*s*(1.+2.*steep*c);\r
    drift+=w.xy*uWaveShape[i].y*a*s*(.3+.4*wind);\r
  }\r
}\r
`,Iy=`\r
\r
uniform mat4 textureMatrix;\r
varying vec4 mirrorUv;\r
varying vec3 world;\r
void main(){\r
  mirrorUv=textureMatrix*vec4(position,1.);\r
  world=(modelMatrix*vec4(position,1.)).xyz;\r
  float height;vec2 slope,drift;swell(world.xz,height,slope,drift);world.y+=height;world.xz+=drift;\r
  gl_Position=projectionMatrix*viewMatrix*vec4(world,1.);\r
}\r
`,Ly=`uniform vec3 deep,shallow,moonDir,sunTint;\r
uniform float night,moon,sun;\r
uniform float storm;\r
uniform vec3 sunDir;\r
uniform vec3 skyColor;\r
uniform sampler2D tDiffuse;\r
varying vec4 mirrorUv;\r
varying vec3 world;\r
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}\r
float noise(vec2 p){vec2 i=floor(p),u=fract(p);u=u*u*(3.-2.*u);return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),mix(hash(i+vec2(0,1)),hash(i+1.),u.x),u.y);}\r
void main(){\r
  vec2 p=world.xz;\r
  vec3 view=normalize(cameraPosition-world);\r
  float d=distance(cameraPosition,world), farFade=exp(-d*.012);\r
  float height;vec2 slope,drift;swell(p,height,slope,drift);\r
  vec2 q=p+1.4*noise(p*.24+time*.12);\r
  for(int i=0;i<4;i++){\r
    float f=float(i),k=1.6+f*1.74;\r
    vec2 dir=vec2(sin(2.29*f+1.2),cos(2.29*f+1.2));\r
    slope+=dir*(.052/(1.+f*.31))*cos(dot(q,dir)*k-time*sqrt(9.81*k))*farFade;\r
  }\r
  vec2 cell=floor(p*2.);\r
  vec2 radial=fract(p*2.)-vec2(hash(cell),hash(cell+3.1));\r
  float rippleAge=fract(time*1.35+hash(cell+9.));\r
  float ring=length(radial)-rippleAge*.83;\r
  slope+=normalize(radial+.00001)*cos(ring*46.)*exp(-ring*ring*95.)*(1.-rippleAge)*storm*.19*farFade;\r
  vec3 n=normalize(vec3(-slope.x*(1.+wind),1.,-slope.y*(1.+wind)));\r
  float rad=length(vec2(p.x/39.,(p.y-15.)/32.));\r
  float coast=1.-smoothstep(.96,1.42,rad);\r
  vec3 water=mix(deep,shallow,clamp(.14+.43*coast+.34*smoothstep(-.5,.8,height),0.,1.))*mix(1.,.35,night);\r
  float fres=.038+.962*pow(1.-max(dot(view,n),0.),4.);\r
  vec2 reflectionUv=mirrorUv.xy/mirrorUv.w;\r
  vec2 ripple=vec2(slope.x,slope.x*.26+slope.y)*vec2(.034,.096)/(1.+d*.008);\r
  vec3 reflection=texture2D(tDiffuse,clamp(reflectionUv+ripple,vec2(.002),vec2(.998))).rgb;\r
  float spec=max(dot(n,normalize(view+sunDir)),0.);\r
  float glitter=7.5*pow(spec,1100.)+.10*pow(spec,90.);\r
  vec3 col=mix(water,reflection*vec3(.80,.85,1.),fres)+sunTint*glitter*sun*(1.-storm*.83);\r
  float whitecap=smoothstep(.25,.65,length(slope))*smoothstep(.03,.24,height);\r
  col=mix(col,vec3(.85,.94,1.)*mix(1.,.14,night),whitecap*.30*(.5+.5*noise(p*5.)));\r
  float ndm=max(0.,dot(n,normalize(view+moonDir)));\r
  col+=vec3(.15,.35,.65)*(2.5*pow(ndm,1800.)+.03*pow(ndm,150.))*moon*(1.-storm*.8);\r
  float run=sin(rad*252.-time*2.4+noise(p*.58)*4.);\r
  col+=vec3(.46,.53,.49)*mix(1.,.10,night)*smoothstep(.47,.96,run)*(1.-smoothstep(.012,.057,abs(rad-.925)))*smoothstep(.25,.78,noise(p*1.71));\r
  col=mix(col,col*vec3(.48,.59,.65),storm*.70);\r
  col=mix(col,skyColor*.53,1.-exp(-d*(.0026+storm*.003)));\r
  gl_FragColor=vec4(col,1.);\r
  #include <tonemapping_fragment>\r
  #include <colorspace_fragment>\r
}\r
`,gi=it.smoothstep,kt=(s,e)=>{const t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)};function dr(s,e){const t=Math.floor(s),n=Math.floor(e),i=gi(s-t,0,1),r=gi(e-n,0,1);return it.lerp(it.lerp(kt(t,n),kt(t+1,n),i),it.lerp(kt(t,n+1),kt(t+1,n+1),i),r)}function rr(s,e){return .59*dr(s,e)+.27*dr(2.03*s+8,2.03*e)+.14*dr(4.21*s,4.21*e+19)}function Oo(s,e){return Math.hypot(s/39,(e-15)/32)}function pr(s,e){const t=Oo(s,e),n=-.34-3.4*gi(t,.71,1.04)+.17*(rr(s*.32,e*.32)-.5),i=(1-gi(Math.abs(s-1.5),1.24,3.8))*(1-gi(Math.abs(e+13.1),.8,3.3));return it.lerp(n,-1.2+.14*(e+13.19),i)}function Dy(s,e){return Ar(s,e)?sr(e):Xf(s,e)||s>=-11.02&&s<=-2.64&&e>=6&&e<=11.9||Math.abs(s)<11.3&&e>=-10.25&&e<6.28?0:Math.abs(s-1.5)<1.24&&e<-10.25&&e>=-13.2?-.17*Math.floor((-e-10.25)/.42):pr(s,e)}function Rh(s,e,t,n,i,r,o,a,l,c,u){const h=new tn(e,t,n,i);h.rotateX(-Math.PI/2);const f=h.attributes.position,d=h.attributes.uv,g=new Float32Array(f.count*3),x=new Ge;for(let v=0;v<f.count;v++){const S=f.getX(v)+r,y=f.getZ(v)+o,b=a(S,y);f.setY(v,b),d.setXY(v,S/u,y/u),c(x,S,y,b),x.toArray(g,v*3)}h.setAttribute("color",new en(g,3)),h.computeVertexNormals();const p=l.clone();p.vertexColors=!0;const m=vt(s,h,p,r,0,o);return m.castShadow=!1,m}function Oa(s,e,t,n,i,r){const o=pr(t,n),a=re(t,o,n),l=re(t+.048*i,o+.57*i,n+.02*i);Et(s,a,l,.022*i,D.walnut);for(let c=0;c<9;c++){const u=c*2.4+r,h=(.17+kt(c,r)*.2)*i,f=re(t+Math.cos(u)*h,o+i*(.81+.13*kt(r,c)),n+Math.sin(u)*h);Et(s,l,f,.009*i,D.walnut);for(let d=0;d<14;d++){const g=kt(d+c*9,r)*Math.PI*2,x=Math.sqrt(kt(c,d+r))*.18*i,p=new Rt;p.position.set(f.x+x*Math.cos(g),f.y+i*(.02+.065*kt(d,r)),f.z+x*Math.sin(g)),p.rotation.set((kt(c,d)-.5)*1.3,g,(kt(r,d)-.5)*.7),p.scale.set(i*.35,i*.17,1),p.updateMatrix(),e.push(p.matrix)}}}function Ny(){const s=document.createElement("canvas");s.width=256,s.height=160;const e=s.getContext("2d");for(let n=0;n<4200;n++){const i=kt(n,2)*Math.PI*2,r=Math.sqrt(kt(n,5)),o=128+116*r*Math.cos(i),a=82+64*r*Math.sin(i),l=Math.round(35+kt(n,8)*45+30*(1-a/160));e.strokeStyle="rgb("+Math.round(l*.81)+","+Math.round(l*1.04)+","+Math.round(l*.63)+")",e.lineWidth=1.8+kt(n,9)*1.8,e.beginPath(),e.moveTo(o,a),e.lineTo(o+7*Math.cos(i),a-2+5*Math.sin(i)),e.stroke()}const t=new ji(s);return t.colorSpace=Dt,t}function Uy(s,e,t){const n=s.index,i=n.array.slice(),r=s.attributes.position;n.setUsage(Gd);const o=new Ze,a=new Ze,l=new Rs,c=[],u=16,h=2;for(let f=0;f<e;f+=u)for(let d=0;d<e;d+=u){const g=Math.min(f+u,e),x=Math.min(d+u,e),p=f*(e+1)+d,m=g*(e+1)+x,v=new En(re(r.getX(p),t,-r.getY(p)),re(r.getX(m),t,-r.getY(m))).expandByScalar(h),S=new i.constructor((g-f)*(x-d)*6);for(let y=f;y<g;y++)S.set(i.subarray((y*e+d)*6,(y*e+x)*6),(y-f)*(x-d)*6);c.push({box:v,block:S,visible:!0})}return f=>{if(f.updateMatrixWorld(),o.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),o.equals(a))return;a.copy(o),l.setFromProjectionMatrix(o);let d=!1;for(const x of c){const p=l.intersectsBox(x.box);p!==x.visible&&(x.visible=p,d=!0)}if(!d)return;let g=0;for(const{visible:x,block:p}of c)x&&(n.array.set(p,g),g+=p.length);s.setDrawRange(0,g),g&&(n.clearUpdateRanges(),n.addUpdateRange(0,g),n.needsUpdate=!0)}}function Fy(s,e,t){const n=nt(s);n.add(t),wy(n,pr),Rh(n,90,76,96,80,0,15,pr,D.sand,(G,pe,ue)=>{const Me=gi(Oo(pe,ue),.71,.98);G.set(6778958).lerp(new Ge(16049614),Me).multiplyScalar(.77+.4*rr(pe*.41,ue*.41))},3.4);const i=[[-68,-110,114,43,25,1.4],[-4,-160,135,39,30,8.1],[88,-117,100,52,33,2.6],[-108,-47,64,33,17,11],[-113,42,90,61,33,4.1],[96,74,98,59,30,17]],r=new Ge(6451800),o=new Ge(12629409),a=new Ge(14141356);for(const[G,pe,ue,Me,Ye,oe]of i){const ve=(_e,Le)=>{const Se=(_e-G)/(ue*.5),He=(Le-pe)/(Me*.5),Fe=.15*Math.sin(4*Se+oe)+.16*Math.sin(6*Se+oe*.7),$e=Math.hypot(Se,(He-Fe)*.94),at=1-gi($e+.31*(rr(_e*.08+oe,Le*.08)-.5),.08,1);return-3.5+Ye*at*(.27+.84*rr(_e*.055+oe,Le*.073))+at*(1-Math.abs(2*dr(_e*.2,Le*.19)-1))*2.65};Rh(n,ue*1.3,Me*1.4,80,48,G,pe,ve,D.rock,(_e,Le,Se,He)=>{const Fe=Math.hypot(ve(Le+.65,Se)-He,ve(Le,Se+.65)-He),$e=gi(rr(Le*.27+oe,Se*.24)-Fe*.3,.13,.62);_e.copy(o).lerp(r,$e).lerp(a,1-gi(He,-2.8,.6)).multiplyScalar(.84+.27*dr(Le*.65,Se*.48))},4.8)}const l=[],c=[[-29,-28,13,4.1,-.6],[-33,-30,6,2.6,.6],[32,-40,18,6.5,.4],[40,-45,10,3.5,.9],[21,-35,3,1.1,-.2],[-23,-24,4,1.55,.2],[-18,-16,2.8,.88,.3]],u=Py(n,pr,c);for(const[G,pe,ue,Me,Ye]of c){const oe=ue*.51;l.push(Vf(n,"rock_09",G,pe,oe,Ye+Math.PI/2,-3.05).then(ve=>{ve.scale.y=Me/(oe*.44),ve.traverse(_e=>_e.layers.enable(1))}))}const h=nt(n),f=[];for(let G=0;G<32;G++){const pe=G*2.399963,ue=18+kt(G,15)*12,Me=Math.cos(pe)*ue,Ye=15+Math.sin(pe)*ue*.78;Math.abs(Me)<13&&Ye<8||Oo(Me,Ye)>.86||Oa(h,f,Me,Ye,3.5+kt(G,3)*3.6,G+19)}Oa(h,f,-15.8,-2.3,5.2,81),Oa(h,f,15.8,-1.5,6.8,99),Ht(h);const d=new Ho(new tn(1,1),new Yt({map:Ny(),side:ln,alphaTest:.46,roughness:1}),f.length);f.forEach((G,pe)=>d.setMatrixAt(pe,G)),d.castShadow=!0,d.receiveShadow=!0,n.add(d);const g=new zm(16054527,10787454,1.22);s.add(g);const x=new Al(16770493,2.2);x.position.set(-17,15,-23),x.target.position.set(-1,0,0),s.add(x,x.target),x.castShadow=!0,x.shadow.mapSize.set(1024,1024),x.shadow.autoUpdate=!1,x.shadow.needsUpdate=!0,Object.assign(x.shadow.camera,{left:-18,right:18,bottom:-13,top:15,near:1,far:76}),x.shadow.normalBias=.022,x.shadow.bias=-18e-5;const p=new Al(14871807,0);p.name="Lightning",p.target.position.set(0,1,1),s.add(p,p.target),p.castShadow=!0,p.shadow.mapSize.set(1024,1024),Object.assign(p.shadow.camera,{left:-19,right:19,bottom:-16,top:16,near:1,far:82}),p.shadow.autoUpdate=!1,p.shadow.normalBias=.012,p.shadow.bias=-12e-5,p.layers.enable(1);let m=null,v=!0;n.traverse(G=>G.layers.enable(1)),g.layers.enable(1),x.layers.enable(1);const S=Ey(n);s.background=new Ge(12441313),s.fog=new Ql(11650502,.0042);const y=144,b=new tn(1150,1150,y,y),T=b.attributes.position,_=G=>{const pe=G/575;return 47*pe+528*pe*pe*pe};for(let G=0;G<T.count;G++)T.setXY(G,_(T.getX(G)),_(T.getY(G)));const M=new Zo(b,{textureWidth:448,textureHeight:256,multisample:0,clipBias:.004,shader:{name:"Coastal water",vertexShader:Ah+Iy,fragmentShader:Ah+Ly,uniforms:{tDiffuse:{value:null},textureMatrix:{value:null},color:{value:null},time:{value:0},wind:{value:.36},storm:{value:0},sunDir:{value:re(-16,15,-23).normalize()},skyColor:{value:new Ge(10930648)}}}});M.rotation.x=-Math.PI/2,M.position.y=-2.56,M.renderOrder=1,s.add(M);const C=Uy(b,y,M.position.y),w=M.material.uniforms,P=M.onBeforeRender,N=new Ze,W=xn.slice(),R=new Float32Array(W.length/2),I=Array.from({length:W.length/4},(G,pe)=>{const ue=Math.hypot(W[pe*4],W[pe*4+1]);return R[pe*2+1]=1/ue,Math.sqrt(9.81*ue)});Object.assign(w,{uWaves:{value:W},uWaveShape:{value:R},deep:{value:new Ge},shallow:{value:new Ge},moonDir:{value:re()},night:{value:0},moon:{value:0},sun:{value:0},sunTint:{value:new Ge}});let k=-1e3;M.onBeforeRender=function(G,pe,ue){if(!b.drawRange.count)return;const Me=performance.now(),Ye=!ue.matrixWorld.equals(N);Me-k>(Ye?90:650)&&(M.getReflectionCamera(ue).layers.set(1),P.call(this,G,pe,ue),k=Me,N.copy(ue.matrixWorld))};const U=new gy().loadAsync(Ir("coastal-sky.hdr")).then(G=>{G.mapping=fo,s.environment=G,s.environmentIntensity=.66,s.environmentRotation.y=1.15,s.backgroundIntensity=.66,e.shadowMap.needsUpdate=!0}),K=2400,q=new Nt,Z=new Float32Array(K*6),ee=new Float32Array(K*2);for(let G=0;G<K;G++){const pe=(kt(G,63)-.5)*76,ue=(kt(G,72)-.55)*75,Me=kt(G,27)*17;Z.set([pe,Me,ue,pe,Me,ue],G*6),ee[G*2+1]=.16+kt(G,91)*.12}q.setAttribute("position",new en(Z,3)),q.setAttribute("tail",new en(ee,1));const ce=new Vn({transparent:!0,depthWrite:!1,uniforms:{time:w.time,amount:{value:0},drift:{value:new me}},vertexShader:"attribute float tail; uniform float time; uniform vec2 drift; varying vec3 drop; void main(){drop=position;drop.y=mod(position.y-time*8.0,17.0)-2.5+tail;drop.xz+=drop.y*drift; gl_Position=projectionMatrix*modelViewMatrix*vec4(drop,1.0);}",fragmentShader:"varying vec3 drop; uniform float amount; void main(){float roof=4.1+2.9*min((11.55-abs(drop.x))/5.90,1.-abs(drop.z)/6.62);bool house=abs(drop.x)<11.55&&abs(drop.z)<6.62&&drop.y<roof+.05;bool library=abs(drop.x+6.85)<4.39&&abs(drop.z-8.94)<3.14&&drop.y<3.91;bool bath=abs(drop.x-7.525)<3.68&&abs(drop.z-8.37)<2.45&&drop.y<3.7;if(house||library||bath)discard;gl_FragColor=vec4(.73,.82,.87,.31*amount);}"}),de=new af(q,ce);de.frustumCulled=!1,s.add(de);let $=-100;const ge=re();function ne(){x.shadow.needsUpdate=!0,e.shadowMap.needsUpdate=!0}const Te=new Ge(16053487);function F(G){const pe=M.getReflectionCamera(G);pe.layers.set(1);const ue=e.getRenderTarget();e.setRenderTarget(M.getRenderTarget());try{return e.compileAsync(n,pe,s)}finally{e.setRenderTarget(ue)}}return{harbor:u,skyReady:Promise.all([U,...l]),prepareView:C,prepareReflection:F,sunShadow:ne,setWeather:S.setWeather,setLightning:S.setLightning,setTime(G){S.setTime(G),$=-100,k=-1e3},setWind:S.setWind,update(G,pe){const ue=S.update(performance.now()/1e3),{p:Me,flash:Ye,rain:oe,dark:ve,wind:_e,phase:Le}=ue,Se=1-Me.nightness;for(let He=0;He<I.length;He++){const Fe=4*He,$e=xn[Fe+2]*(.72+.78*_e);W[Fe+2]=$e,W[Fe+3]=xn[Fe+3]-I[He]*Le,R[2*He]=Math.min(.55,$e/R[2*He+1])}if(w.time.value=Le,w.wind.value=_e,w.storm.value=ve,w.sunDir.value.fromArray(Me.sunDir),w.moonDir.value.fromArray(Me.moonDir),w.skyColor.value.fromArray(Me.skyHorizon),w.sunTint.value.fromArray(Me.celestialColor),w.deep.value.fromArray(Me.waterDeep),w.shallow.value.fromArray(Me.waterShallow),w.night.value=Me.nightness,w.sun.value=Me.sunVisibility,w.moon.value=Me.moonPhase*Me.moonVisibility,de.visible=oe>.015,ce.uniforms.amount.value=oe,ce.uniforms.drift.value.set(Math.cos(ue.angle)*_e*.38,Math.sin(ue.angle)*_e*.38),x.position.fromArray(Me.sunDir[1]>0?Me.sunDir:Me.moonDir).multiplyScalar(32),x.color.fromArray(Me.sunDir[1]>0?Me.celestialColor:[.39,.51,.81]),x.intensity=(2.8*Math.sqrt(Math.max(0,Me.sunDir[1]))+.13*w.moon.value)*(1-.82*ve),p.intensity=Ye*4.8,pe&&(v=!0),Ye>0&&(m!==ue.bolt||v)){const He=ue.bolt*2.399963,Fe=7.75+4.75*Math.sin(ue.bolt);p.position.set(Math.sin(He)*Fe,3.3,Math.cos(He)*Fe).setLength(36).add(p.target.position),p.shadow.needsUpdate=!0,e.shadowMap.needsUpdate=!0,m=ue.bolt,v=!1}return g.color.fromArray(Me.skyHorizon).lerp(Te,.45*Se),g.intensity=.19+.95*Se,s.environmentIntensity=.035+.46*Se*(1-.6*ve),s.fog.color.fromArray(Me.skyHorizon),s.fog.density=.0032+ve*.004,G-$>.35&&ge.distanceToSquared(x.position)>.0025&&(ne(),ge.copy(x.position),$=G),ue}}}(()=>{if(location.hostname==="pgxcg.qzz.io"&&!["https://galok.cn","http://127.0.0.1:4176","http://localhost:4176"].includes(location.ancestorOrigins?.[0]))return;function s(){const e=new AudioContext,t=e.createGain(),n=e.createChannelSplitter(2);t.channelCountMode="explicit",t.channelCount=2,t.channelInterpretation="speakers",t.connect(n);const i=e.createConvolver(),r=e.createGain(),o=e.createBuffer(2,Math.ceil(e.sampleRate*.43),e.sampleRate);for(let c=0;c<2;c++){const u=o.getChannelData(c);for(let h=0;h<u.length;h++)u[h]=(Math.random()*2-1)*Math.pow(1-h/u.length,3)}i.buffer=o,r.gain.value=.12,i.connect(r).connect(e.destination);const a=[0,1].map(c=>{const u=e.createPanner();return u.panningModel="HRTF",u.distanceModel="inverse",u.refDistance=2.6,u.rolloffFactor=.72,u.maxDistance=65,n.connect(u,c),u.connect(e.destination),u.connect(i),u});function l(c){a.forEach((u,h)=>{const[f,d,g]=c[h];u.positionX?(u.positionX.setTargetAtTime(f,e.currentTime,.035),u.positionY.setTargetAtTime(d,e.currentTime,.035),u.positionZ.setTargetAtTime(g,e.currentTime,.035)):u.setPosition(f,d,g)})}return l([[-2,0,-3],[2,0,-3]]),{ctx:e,input:t,pose:l}}globalThis.GalokRoomAudio=s})();function Oy(s,e,t){const n=nt(s);n.position.copy(t.center),n.rotation.y=t.yaw;const i=t.id==="computer",r=i?.033:.026;X(n,0,0,-.057,t.width+r*2,t.height+r*2,.082,i?D.ink:D.bronze,.016);const o=_t(i?1581089:14999764,i?.25:.83);X(n,0,0,-.012,t.width,t.height,.014,o);const a=vt(n,new tn(t.width,t.height),new Vn({vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"void main(){gl_FragColor=vec4(0.);}",blending:Zi,depthWrite:!0,toneMapped:!1}),0,0,.003);a.renderOrder=5,a.castShadow=!1,a.visible=!1;const l=X(n,t.width*.46,-t.height*.5-.013,-.005,.022,.008,.012,new kn({color:9725009})),c=re(0,0,1).applyQuaternion(n.quaternion),u=new hc(i?12703743:16771271,0,i?2.1:4,2);u.position.copy(t.center).addScaledVector(c,.2),s.add(u);let h=null,f=null,d=null,g=null,x=!1,p=0,m=null;const v=new URL(t.url).origin;function S(w,P={}){!i&&f&&!d&&f.contentWindow?.postMessage({app:"galok.villa",type:w,...P},v)}addEventListener("message",w=>{i||!f||w.source!==f.contentWindow||w.origin!==v||w.data?.app!=="galok.projector"||(w.data.type==="ready"&&S("connect"),w.data.type==="connected"&&(x=!0),w.data.type==="audio"&&(document.getElementById("media-status").textContent="站内视频 · 双音箱已接通"),w.data.type==="no-video"&&(document.getElementById("media-status").textContent="请先在在线影视中播放影片。"))});function y(){m?.(),m=null,d&&(d.pause(),d.removeAttribute("src"),d.load(),d.remove(),d=null),g&&(URL.revokeObjectURL(g),g=null)}function b(){d&&(y(),f&&(f.hidden=!1,f.src=t.url))}async function T(w,P){if(!h||i)return;y(),f.hidden=!0,f.src="about:blank",x=!1,d=document.createElement("video"),d.controls=!0,d.playsInline=!0,d.disablePictureInPicture=!0,d.controlsList?.add("nofullscreen"),g=URL.createObjectURL(w),d.src=g,d.ondblclick=R=>R.preventDefault(),h.element.append(d);const N=d,W=await P.connect(N);if(d!==N){W();return}m=W,await N.play()}function _(){if(h)return;const w=document.createElement("div");w.className="web-device";const P=1366,N=P*t.height/t.width;w.style.width=P+"px",w.style.height=N+"px",f=document.createElement("iframe"),f.title=t.label,f.src=t.url,f.allow=i?"fullscreen; autoplay":"fullscreen 'none'; autoplay",f.referrerPolicy="strict-origin-when-cross-origin",f.onload=()=>{x=!1,S("connect")},w.append(f),h=new t1(w),h.position.copy(t.center).addScaledVector(c,.003),h.quaternion.copy(n.quaternion),h.scale.setScalar(t.width/P),e.add(h),w.style.pointerEvents="none",f.tabIndex=-1,a.visible=!0,l.material.color.setHex(12181437),u.intensity=i?.65:2.1}function M(){a.visible=!1,h&&(y(),f.onload=null,f.src="about:blank",e.remove(h),h.element.remove(),x=!1,h=null,f=null,l.material.color.setHex(9725009),u.intensity=0)}function C(w){h&&(h.element.style.pointerEvents=w?"auto":"none",h.element.classList.toggle("active-web",w),f.style.pointerEvents=w?"auto":"none",f.tabIndex=w?0:-1)}return{...t,normal:c,body:n,powerOn:_,powerOff:M,input:C,film:T,showWeb:b,get linked(){return x},get playingFile(){return!!d},fill(){S("fill")},pose(w,P){!i&&x&&P-p>80&&(S("pose",{points:w}),p=P)},get powered(){return!!h}}}function By(){let s,e,t,n,i=0;async function r(){t||(t=GalokRoomAudio(),s=t.ctx,e=s.createGain(),e.connect(t.input)),await s.resume()}const o=[[174.61,220,261.63,329.63],[146.83,196,246.94,293.66],[164.81,196,261.63,329.63],[130.81,174.61,220,293.66]];function a(){const c=o[Math.floor(i/6)%o.length][[0,2,1,3,2,1][i++%6]],u=s.currentTime,h=s.createOscillator(),f=s.createGain();h.type="triangle",h.frequency.value=c,f.gain.setValueAtTime(1e-4,u),f.gain.exponentialRampToValueAtTime(.15,u+.03),f.gain.exponentialRampToValueAtTime(1e-4,u+1.9),h.connect(f).connect(e),h.start(u),h.stop(u+2),h.onended=()=>{h.disconnect(),f.disconnect()}}return{get on(){return!!n},async toggle(){if(n){clearInterval(n),n=null,e.gain.setTargetAtTime(0,s.currentTime,.07);return}await r(),e.gain.value=.28,a(),n=setInterval(a,480)},async connect(l){await r();const c=s.createMediaElementSource(l);return c.connect(t.input),()=>c.disconnect()},update(l){t?.pose(l)}}}const et=s=>document.getElementById(s),Ki=et("view"),Ol=et("loading");function zy(){const s=new jv({antialias:!0,alpha:!0,powerPreference:"high-performance"});s.setClearColor(0,0),s.outputColorSpace=Dt,s.toneMapping=zl,s.toneMappingExposure=1.04,s.shadowMap.enabled=!0,s.shadowMap.type=or,s.shadowMap.autoUpdate=!1,s.shadowMap.needsUpdate=!0,s.domElement.tabIndex=0,s.domElement.setAttribute("aria-label","海景房漫游画面");const e=new i1;e.domElement.className="web-space",Ki.append(e.domElement,s.domElement);const t=new Jc,n=new Jc,i=new mn(65,1,.055,540);i.rotation.order="YXZ";const r=my(t),o=Fy(t,s,r.exterior),a=r.devices.map(B=>Oy(t,n,B)),l=By();V1();const c=1.65,u=.225,h=re(-7.25,c,1.86);i.position.copy(h),i.lookAt(re(-4.02,1.5,-6.05));let f=i.rotation.y,d=i.rotation.x,g="walk",x=null,p=null,m=null,v=null,S=0,y=performance.now(),b=null,T=!1;const _=new Set,M={x:0,y:0},C=new me,w=new r0;w.far=5.6;const P=[],N=[],W=new kn({visible:!1});function R(B,Y,fe,we,xe,st=0){const je=new cn(new zi(...fe),W);je.position.copy(Y),je.rotation.y=st,je.updateMatrixWorld();const We={name:B,object:je,distance:we,action:xe};return je.userData.item=We,P.push(je),N.push(We),We}const I=r.doors[0],k=[I,...r.windows],U=I.handles.map(B=>{const Y=R(()=>I.target?"关露台门":"开露台门",re(),[.33,.22,.12],3.3,()=>{I.target=I.target?0:Math.PI*.49});return Y.directOnly=!0,{item:Y,handle:B}}),K=o.harbor,q=R(()=>"登船驾驶",re(),[1.98,1.2,3.6],3.2,Z);q.enabled=()=>K.canBoard(h.x,h.z);function Z(){g!=="walk"||!q.enabled()||(Ct(),K.board(),g="boat",f=K.heading,d=-.07,K.eye(i.position),i.rotation.set(d,f,0,"YXZ"),s.domElement.focus(),F("W / S 前进、倒车　·　A / D 转向　·　回码头减速后按 E 下船",5e3))}function ee(){g!=="boat"||!K.canMoor()||(K.moor(),h.copy(m.pos),i.position.copy(h),f=m.yaw,d=m.pitch,i.rotation.set(d,f,0,"YXZ"),_.clear(),M.x=M.y=0,g="walk",ne.hidden=!0,s.domElement.focus())}for(const B of a)R(()=>B.powered?"使用"+B.label:"开启"+B.label,B.center,[B.width+.14,B.height+.14,.25],B.id==="projector"?5.6:2.7,()=>bt(B),B.yaw);const ce=r.bed.position.clone();ce.z-=.9,ce.y=.6,R(()=>"躺到床上",ce,[2.4,1.1,2.9],3.3,Ut);for(const B of[-3.94,1.16])R(()=>l.on?"关闭音响":"播放音响",re(-10.27,.66,B),[.55,1.3,.56],3.2,()=>l.toggle().catch(ge));let de=null;const $={hint:F,read(B){Ct(),g="book",Y1(B,()=>{g="walk",s.domElement.focus()})}};for(const B of[...r.life.actions,...r.pet.actions]){const Y=R(B.label,B.point,B.size,B.range,()=>B.run($));Y.directOnly=B.directOnly}for(const B of r.life.seats)R(()=>"坐上"+B.label,B.point,B.size,2.9,()=>{Ct(),de=B,g="seat",document.body.classList.add("in-bed"),ft(B.eye,V(B.eye,B.at),()=>{f=i.rotation.y,d=i.rotation.x,et("stand").hidden=!1})});function ge(){F("浏览器未启用音频，请再次点击音响。",3200)}const ne=et("hint");let Te;function F(B,Y=6300){ne.textContent=B,ne.hidden=!1,clearTimeout(Te),Te=setTimeout(()=>ne.hidden=!0,Y)}Te=setTimeout(()=>ne.hidden=!0,9e3);let G=1,pe=1,ue=1,Me=0,Ye=0,oe=0;function ve(){const B=Ki.clientWidth,Y=Ki.clientHeight;if(G=Math.min(devicePixelRatio,1.45,Math.sqrt(165e4/(B*Y))),pe=Math.min(G,.7,Math.sqrt(65e4/(B*Y))),s.setPixelRatio(Math.max(pe,G*ue)),i.aspect=B/Y,i.updateProjectionMatrix(),s.setSize(B,Y),e.setSize(B,Y),g==="screen"&&x){const fe=lt(x);p?p.to.copy(fe):i.position.copy(fe)}}function _e(B){if(!Ol.hidden||g==="screen"||document.hidden){Me=Ye=oe=0;return}if(Me+=Math.min(B,150),Ye++,Me<1500)return;const Y=Me/Ye;Me=Ye=0,oe=Y<18?oe+1:0;const fe=s.getPixelRatio();let we=fe;Y>21?we=Math.max(pe,fe*.84):oe>=6&&(we=Math.min(G,fe*1.08),oe=0),Math.abs(we-fe)>.01&&(ue=we/G,s.setPixelRatio(we))}addEventListener("resize",ve),ve();function Le(){i.updateMatrixWorld(),w.setFromCamera(C,i)}const Se=r.blockers.filter(B=>B.name==="墙"||B.name==="窗").map(B=>new En(re(B.x-B.w/2,0,B.z-B.d/2),re(B.x+B.w/2,3.82,B.z+B.d/2)));Se.push(r.life.bathroom.doorBox);const He=re();function Fe(B){return Se.some(Y=>w.ray.intersectBox(Y,He)&&He.distanceTo(i.position)<B-.13)}function $e(){if(g!=="walk"||p)return null;Le();for(const B of w.intersectObjects(P,!1)){const Y=B.object.userData.item;if((!Y.enabled||Y.enabled())&&B.distance<=Y.distance&&!Fe(B.distance))return Y}return null}function at(){const B=C.clone();C.set(0,0);const Y=$e();if(C.copy(B),Y)return Y.directOnly?null:Y;const fe=i.getWorldDirection(re());return N.map(we=>{if(we.directOnly||we.enabled&&!we.enabled())return null;const xe=we.object.position.clone().sub(i.position),st=xe.length(),je=xe.normalize().dot(fe);return st>Math.min(2.9,we.distance)||je<.34?null:(w.set(i.position,xe),Fe(st)?null:{item:we,score:st+1-je})}).filter(Boolean).sort((we,xe)=>we.score-xe.score)[0]?.item}function ft(B,Y,fe){p={from:i.position.clone(),to:B.clone(),q0:i.quaternion.clone(),q1:Y.clone(),t:0,done:fe},_.clear(),M.x=M.y=0}function V(B,Y){const fe=new mn;return fe.position.copy(B),fe.lookAt(Y),fe.quaternion}function Ct(){m={pos:h.clone(),yaw:f,pitch:d},document.exitPointerLock?.(),_.clear(),v=null,et("prompt").hidden=!0,ne.hidden=!0}function lt(B){const Y=Math.tan(it.degToRad(i.fov/2)),fe=Math.max(B.height/(2*Y*.71),B.width/(2*Y*i.aspect*.9)),we=Ki.clientHeight/(2*Y*(fe-.003));return Ki.style.setProperty("--web-width",B.width*we+"px"),Ki.style.setProperty("--web-height",B.height*we+"px"),B.center.clone().addScaledVector(B.normal,fe)}function bt(B){if(g!=="walk"||p)return;Ct(),g="screen",x=B,B.powerOn();const Y=lt(B);ft(Y,V(Y,B.center),()=>{document.body.classList.add("using-screen"),B.input(!0),et("screen-tools").hidden=!1,et("device-name").textContent=B.label,et("open-site").href=B.url,et("film-controls").hidden=B.id!=="projector",et("media-status").textContent=""})}function Pe(B=!1){if(!x)return;x.input(!1),B&&x.powerOff(),x=null,document.body.classList.remove("using-screen"),et("screen-tools").hidden=!0;const Y=new jt().setFromEuler(new ei(m.pitch,m.yaw,0,"YXZ"));ft(m.pos,Y,()=>{g="walk",f=m.yaw,d=m.pitch,s.domElement.focus()})}function Ut(){if(g!=="walk"||p)return;Ct(),g="bed",document.body.classList.add("in-bed");const B=r.bed.position,Y=V(B,r.skylight.open?r.skylight.center:B.clone().add(re(0,.29,-1)));ft(B,Y,()=>{f=i.rotation.y,d=i.rotation.x,et("stand").hidden=!1})}function Ke(){if(!["bed","seat"].includes(g)||p)return;de=null,et("stand").hidden=!0,document.body.classList.remove("in-bed");const B=new jt().setFromEuler(new ei(m.pitch,m.yaw,0,"YXZ"));ft(m.pos,B,()=>{g="walk",f=m.yaw,d=m.pitch})}function Je(B,Y,fe,we){const xe=B.pivot.position,st=Y-xe.x,je=fe-xe.z,We=Math.cos(we),Pt=Math.sin(we),ii=it.clamp(st*We-je*Pt,0,B.width);return Math.hypot(st-We*ii,je+Pt*ii)}function L(B,Y){return r.life.bathroom.blocks(B,Y,u)||Oo(B,Y)>.943&&!Ar(B,Y,u)||k.some(fe=>Je(fe,B,Y,fe.angle)<u+.045)?!0:r.blockers.some(fe=>{const we=Math.max(Math.abs(B-fe.x)-fe.w/2,0),xe=Math.max(Math.abs(Y-fe.z)-fe.d/2,0);return we*we+xe*xe<u*u})}const E=()=>Number(_.has("KeyW")||_.has("ArrowUp"))-Number(_.has("KeyS")||_.has("ArrowDown"))-M.y,J=()=>Number(_.has("KeyD")||_.has("ArrowRight"))-Number(_.has("KeyA")||_.has("ArrowLeft"))+M.x;function ye(B){let Y=E(),fe=J();const we=Math.hypot(Y,fe);we>1&&(Y/=we,fe/=we);const xe=_.has("ShiftLeft")||_.has("ShiftRight")?3.7:2.25,st=(-Math.sin(f)*Y+Math.cos(f)*fe)*B*xe,je=(-Math.cos(f)*Y-Math.sin(f)*fe)*B*xe;st&&!L(h.x+st,h.z)&&(h.x+=st),je&&!L(h.x,h.z+je)&&(h.z+=je),h.y=it.damp(h.y,Dy(h.x,h.z)+c,13,B),i.position.copy(h)}function he(B,Y){p||g==="screen"||g==="book"||(f-=B*.0024,d=it.clamp(d-Y*.0024,-1.38,1.37),i.rotation.set(d,f,0,"YXZ"))}function Ae(B){if(T){C.set(0,0);return}const Y=Ki.getBoundingClientRect();C.set((B.clientX-Y.left)/Y.width*2-1,1-(B.clientY-Y.top)/Y.height*2)}const be=s.domElement;be.addEventListener("pointerdown",B=>{B.button!==0||g==="screen"||p||(Ae(B),b={id:B.pointerId,x:B.clientX,y:B.clientY,dist:0},be.focus(),T||be.setPointerCapture(B.pointerId))}),be.addEventListener("pointermove",B=>{if(!T){if(b?.id===B.pointerId){const Y=B.clientX-b.x,fe=B.clientY-b.y;b.dist+=Math.hypot(Y,fe),he(Y,fe),b.x=B.clientX,b.y=B.clientY}Ae(B)}}),be.addEventListener("pointerup",B=>{if(b?.id!==B.pointerId)return;const Y=b.dist<5;if(b=null,!Y||p)return;Ae(B);const fe=$e();if(fe){fe.action();return}!T&&B.pointerType==="mouse"&&["walk","boat"].includes(g)&&be.requestPointerLock?.()?.catch?.(()=>{})}),be.addEventListener("pointercancel",()=>{b=null}),document.addEventListener("pointerlockchange",()=>{T=document.pointerLockElement===be,C.set(0,0),et("reticle").hidden=!T,b=null,_.clear()}),document.addEventListener("mousemove",B=>{T&&he(B.movementX,B.movementY)}),addEventListener("keydown",B=>{if(!(g==="book"||B.target.matches("select,input,textarea")||B.ctrlKey||B.metaKey||B.altKey)){if(g==="screen"){B.code==="Escape"&&!p&&Pe();return}if(g==="bed"||g==="seat"){["KeyE","Escape"].includes(B.code)&&!B.repeat&&Ke();return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(B.code)&&B.preventDefault(),B.code==="KeyE"&&!B.repeat&&!p){g==="boat"?ee():($e()||at())?.action();return}_.add(B.code)}}),addEventListener("keyup",B=>_.delete(B.code));const ae=()=>{_.clear(),M.x=M.y=0,b=null};addEventListener("blur",ae),document.addEventListener("visibilitychange",ae),et("leave-screen").onclick=()=>Pe(),et("power-off").onclick=()=>Pe(!0),et("stand").onclick=Ke,et("prompt").onclick=()=>{g==="boat"?ee():v?.action()},et("weather").onchange=B=>{o.setWeather(B.target.value),g==="walk"&&be.focus()},et("sky-time").onchange=B=>{o.setTime(B.target.value),be.focus()},et("wind").onchange=B=>{o.setWind(B.target.value),be.focus()},et("lightning").onchange=B=>o.setLightning(B.target.value),et("choose-film").onclick=()=>et("film-file").click(),et("film-file").onchange=async B=>{const Y=B.target.files[0];if(!(!Y||!x)){try{await x.film(Y,l),et("media-status").textContent="影片 · 双音箱"}catch{et("media-status").textContent="无法播放此文件，请选择浏览器支持的视频。"}B.target.value=""}},et("screen-fill").onclick=()=>{x?.playingFile?et("media-status").textContent="影片已铺满幕布。":x?.linked?x.fill():et("media-status").textContent="站内视频需连接 ShareAll 投影扩展。本机影片可直接在幕布播放。"},et("screen-web").onclick=()=>{x?.showWeb(),et("media-status").textContent=""},et("help").onclick=()=>{const B=et("guide");B.hidden=!B.hidden,et("help").setAttribute("aria-expanded",String(!B.hidden))};const se=et("joystick");function Ce(B){const Y=se.getBoundingClientRect(),fe=(B.clientX-Y.left-Y.width/2)/32,we=(B.clientY-Y.top-Y.height/2)/32,xe=Math.max(1,Math.hypot(fe,we));M.x=fe/xe,M.y=we/xe,se.firstElementChild.style.transform="translate("+M.x*25+"px,"+M.y*25+"px)"}se.onpointerdown=B=>{se.setPointerCapture(B.pointerId),Ce(B)},se.onpointermove=B=>{se.hasPointerCapture(B.pointerId)&&Ce(B)},se.onlostpointercapture=()=>{M.x=M.y=0,se.firstElementChild.style.transform=""};let O=0,le=0,ie=0;const Ie=[re(-10.03,.72,1.16),re(-10.03,.72,-3.94)],Ee=re();function Re(B){const Y=r.life.circuits.find(fe=>fe.name===B);Y.sources[0].light.shadow.needsUpdate=!0,o.sunShadow()}const Ve=B=>{if(requestAnimationFrame(Ve),document.hidden){y=B;return}const Y=Math.max(0,B-y),fe=Math.min(.075,Y/1e3);y=B,S+=fe,_e(Y);let we=!1;for(const We of k){if(We.angle===We.target)continue;let Pt=it.damp(We.angle,We.target,6,fe);Math.abs(Pt-We.target)<.001&&(Pt=We.target),(g!=="walk"||Je(We,h.x,h.z,Pt)>u+.045)&&(We.angle=Pt,We.pivot.rotation.y=Pt,we=!0,We.crank&&(We.crank.rotation.z=-Pt*7),Pt===We.target&&Re(We.room))}for(const{item:We,handle:Pt}of U)I.pivot.localToWorld(We.object.position.copy(Pt)),We.object.rotation.y=I.angle,We.object.updateMatrixWorld();if(p){const We=p;We.t=Math.min(1,We.t+fe/.46);const Pt=We.t*We.t*(3-2*We.t);i.position.lerpVectors(We.from,We.to,Pt),i.quaternion.slerpQuaternions(We.q0,We.q1,Pt),We.t===1&&(p=null,We.done())}else g==="walk"&&(ye(fe),i.rotation.set(d,f,0,"YXZ"));r.life.update(S,fe,de),r.pet.update(S,fe),r.life.bathroom.update(fe,h,r.pet.position)&&(we=!0),de?.pivot&&!p&&(de.pivot.updateMatrixWorld(),i.position.copy(de.pivot.localToWorld(re(0,de.eye.y-2.65,0))));for(const We of r.curtains){const Pt=Number(We.closed);if(We.fraction===Pt)continue;const ii=it.damp(We.fraction,Pt,6,Y/1e3);We.fraction=Math.abs(ii-Pt)<.002?Pt:ii;for(const Jo of We.panels)Jo.setFraction(We.fraction);we=!0,We.fraction===Pt&&Re(We.room)}r.skylight.update(fe)&&(we=!0,r.skylight.fraction===Number(r.skylight.open)&&Re("卧室灯"));const xe=o.update(S,we);r.privacy.update(fe,xe);const st=K.heading;if(K.update(fe,xe,it.clamp(E(),-1,1),it.clamp(J(),-1,1)),g==="boat"?(f+=K.heading-st,K.eye(i.position),i.rotation.set(d,f,0,"YXZ")):q.enabled()&&(q.object.position.copy(K.vessel.position),q.object.position.y+=.52,q.object.updateMatrixWorld()),et("sky-clock").textContent!==xe.clock&&(et("sky-clock").textContent=xe.clock),B-le>80){i.updateMatrixWorld();const We=Ie.map(Pt=>Ee.copy(Pt).applyMatrix4(i.matrixWorldInverse).toArray());l.update(We),a[0].pose(We,B),le=B}if(v=$e(),et("prompt").hidden=!v||g!=="walk"||!!p,v){const We="E　"+v.name();et("prompt").textContent!==We&&(et("prompt").textContent=We),ne.hidden=!0}let je=h.z<-6.14?h.z>=-10.3&&Math.abs(h.x)<11.3?"露台":"岛岸":h.x>3.8?"卧室":h.z>3&&h.x>-2.7?"厨房":"客厅";(Math.abs(h.x)>11.3||h.z>6.3)&&(je="岛岸"),h.z>6.1&&h.z<11.91&&h.x<-2.63&&h.x>-11.05&&(je="书房"),Xf(h.x,h.z)&&(je="卫生间"),g==="bed"&&(je="卧室 · 床上"),de&&(je=de.label),Ar(h.x,h.z)&&(je="码头"),g==="boat"&&(je="驾驶中 · 距泊位 "+Math.round(K.distance)+" 米",K.canMoor()&&(et("prompt").textContent="E　靠岸下船",et("prompt").hidden=!1)),et("location").textContent!==je&&(et("location").textContent=je),we&&B-ie>250&&(o.sunShadow(),ie=B),!(g==="screen"&&!p&&B-O<125)&&(O=B,o.prepareView(i),n.children.length&&e.render(n,i),s.render(t,i))};Promise.allSettled([o.skyReady,r.modelReady]).then(async([B,Y])=>{B.status==="rejected"&&console.error("环境光资源加载失败",B.reason);const fe=Y.value?.filter(we=>we.status==="rejected")||[];fe.length&&console.error("家具资源加载失败",fe);for(const we of r.life.circuits)we.sources[0].light.shadow.needsUpdate=!0;o.sunShadow();try{q1(t),await s.compileAsync(t,i),await o.prepareReflection(i)}catch(we){console.warn("预编译未完成，将在绘制时准备材质",we)}y=performance.now(),requestAnimationFrame(we=>{Ve(we),Ol.hidden=!0})})}try{zy()}catch(s){console.error(s),Ol.textContent="3D 房间启动失败。请使用支持 WebGL 2 的浏览器，并启用硬件加速。"}
