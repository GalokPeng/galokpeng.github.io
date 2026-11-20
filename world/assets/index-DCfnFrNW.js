(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Fl="187",nf=0,Pc=1,sf=2,ir=1,rf=2,Js=3,Di=0,gn=1,mn=2,qi=0,sr=1,Ic=2,Lc=3,Dc=4,of=5,fs=100,af=101,lf=102,cf=103,uf=104,hf=200,df=201,ff=202,pf=203,Ah=204,Rh=205,mf=206,gf=207,_f=208,xf=209,vf=210,Mf=211,yf=212,Sf=213,bf=214,Fa=0,Oa=1,Ba=2,dr=3,za=4,ka=5,Ha=6,Ga=7,Ch=0,Ef=1,Tf=2,pi=0,Ph=1,Ih=2,Lh=3,Ol=4,Dh=5,Nh=6,Uh=7,Nc="attached",wf="detached",Fh=300,Ms=301,fr=302,co=303,Jo=304,_i=1e3,Pn=1001,yo=1002,Xt=1003,Oh=1004,$s=1005,Ot=1006,uo=1007,On=1008,Tn=1009,Bh=1010,zh=1011,pr=1012,Bl=1013,Qn=1014,_n=1015,vn=1016,zl=1017,kl=1018,ys=1020,kh=35902,Hh=35899,Gh=1021,Vh=1022,Bn=1023,Ni=1026,Ci=1027,Oo=1028,Hl=1029,Yi=1030,Gl=1031,Vl=1033,ho=33776,fo=33777,po=33778,mo=33779,Va=35840,Wa=35841,Xa=35842,qa=35843,Ya=36196,Ka=37492,Za=37496,Ja=37488,$a=37489,So=37490,Qa=37491,ja=37808,el=37809,tl=37810,nl=37811,il=37812,sl=37813,rl=37814,ol=37815,al=37816,ll=37817,cl=37818,ul=37819,hl=37820,dl=37821,fl=36492,pl=36494,ml=36495,gl=36283,_l=36284,bo=36285,xl=36286,Wh=2200,Af=2201,Rf=2202,mr=2300,gr=2301,$o=2302,Uc=2303,ms=2400,gs=2401,Eo=2402,Wl=2500,Cf=2501,Pf=0,Xh=1,vl=2,If=3200,Ml=0,Lf=1,Ri="",Lt="srgb",Mn="srgb-linear",To="linear",bt="srgb",Qo=7680,Df=519,Nf=512,Uf=513,Ff=514,qh=515,Of=516,Bf=517,Yh=518,Kh=519,Zh=35044,zf=35048,Fc="300 es",zn=2e3,_r=2001;function kf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Hf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function xr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gf(){const s=xr("canvas");return s.style.display="block",s}const Oc={};function wo(...s){const e="THREE."+s.shift();console.log(e,...s)}function Jh(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function qe(...s){s=Jh(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Qe(...s){s=Jh(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function _s(...s){const e=s.join(" ");e in Oc||(Oc[e]=!0,qe(...s))}function Vf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Wf={[Fa]:Fa,[Ba]:Ha,[za]:za,[dr]:ka,[Oa]:Oa,[Ha]:Ba,[Ga]:Ga,[ka]:dr};class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bc=1234567;const rr=Math.PI/180,Ss=180/Math.PI;function Wn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[s&255]+sn[s>>8&255]+sn[s>>16&255]+sn[s>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ut(s,e,t){return Math.max(e,Math.min(t,s))}function Xl(s,e){return(s%e+e)%e}function Xf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function qf(s,e,t){return s!==e?(t-s)/(e-s):0}function or(s,e,t){return(1-t)*s+t*e}function Yf(s,e,t,n){return or(s,e,1-Math.exp(-t*n))}function Kf(s,e=1){return e-Math.abs(Xl(s,e*2)-e)}function Zf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Jf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function $f(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Qf(s,e){return s+Math.random()*(e-s)}function jf(s){return s*(.5-Math.random())}function ep(s){s!==void 0&&(Bc=s);let e=Bc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tp(s){return s*rr}function np(s){return s*Ss}function ip(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function sp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $h(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function rp(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*u,a*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bo(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ql(s,e){if(e.constructor===Float32Array)return s;const t=Bo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Yl(s,e){if(e.constructor===Float32Array)return s;const t=Bo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const ot={DEG2RAD:rr,RAD2DEG:Ss,generateUUID:Wn,clamp:ut,euclideanModulo:Xl,mapLinear:Xf,inverseLerp:qf,lerp:or,damp:Yf,pingpong:Kf,smoothstep:Zf,smootherstep:Jf,randInt:$f,randFloat:Qf,randFloatSpread:jf,seededRandom:ep,degToRad:tp,radToDeg:np,isPowerOfTwo:ip,ceilPowerOfTwo:sp,floorPowerOfTwo:$h,setQuaternionFromProperEuler:rp,normalize:Yl,denormalize:ql},gc=class gc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gc.prototype.isVector2=!0;let _e=gc;class Qt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(h!==v||l!==d||c!==f||u!==g){let m=l*d+c*f+u*g+h*v;m<0&&(d=-d,f=-f,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){const _=Math.acos(m),S=Math.sin(_);p=Math.sin(p*_)/S,a=Math.sin(a*_)/S,l=l*p+d*a,c=c*p+f*a,u=u*p+g*a,h=h*p+v*a}else{l=l*p+d*a,c=c*p+f*a,u=u*p+g*a,h=h*p+v*a;const _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _c=class _c{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jo.copy(this).projectOnVector(e),this.sub(jo)}reflect(e){return this.sub(jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_c.prototype.isVector3=!0;let B=_c;const jo=new B,zc=new Qt,xc=class xc{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],_=i[1],S=i[4],M=i[7],b=i[2],E=i[5],x=i[8];return r[0]=o*v+a*_+l*b,r[3]=o*m+a*S+l*E,r[6]=o*p+a*M+l*x,r[1]=c*v+u*_+h*b,r[4]=c*m+u*S+h*E,r[7]=c*p+u*M+h*x,r[2]=d*v+f*_+g*b,r[5]=d*m+f*S+g*E,r[8]=d*p+f*M+g*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(i*c-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(u*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ea.makeScale(e,t)),this}rotate(e){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ea.makeRotation(-e)),this}translate(e,t){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xc.prototype.isMatrix3=!0;let tt=xc;const ea=new tt,kc=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function op(){const s={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===bt&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(i.r=xs(i.r),i.g=xs(i.g),i.b=xs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ri?To:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Mn]:{primaries:e,whitePoint:n,transfer:To,toXYZ:kc,fromXYZ:Hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:kc,fromXYZ:Hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),s}const pt=op();function mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let $i;class ap{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$i===void 0&&($i=xr("canvas")),$i.width=e.width,$i.height=e.height;const i=$i.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lp=0;class Kl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ta(i[o].image)):r.push(ta(i[o]))}else r=ta(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ta(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ap.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let cp=0;const na=new B;class qt extends Ui{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=Pn,i=Pn,r=Ot,o=On,a=Bn,l=Tn,c=qt.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Wn(),this.name="",this.source=new Kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(na).x}get height(){return this.source.getSize(na).y}get depth(){return this.source.getSize(na).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _i:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _i:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Fh;qt.DEFAULT_ANISOTROPY=1;const vc=class vc{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,M=(f+1)/2,b=(p+1)/2,E=(u+d)/4,x=(h+v)/4,y=(g+m)/4;return S>M&&S>b?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=x/n):M>b?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=y/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=x/r,i=y/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-v)/_,this.z=(d-u)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vc.prototype.isVector4=!0;let yt=vc;class up extends Ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new qt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Kl(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends up{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qh extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hp extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Fo=class Fo{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,v,m)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fo().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dp,e,fp)}lookAt(e,t,n){const i=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),vi.crossVectors(n,Sn),vi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),vi.crossVectors(n,Sn)),vi.normalize(),Ir.crossVectors(Sn,vi),i[0]=vi.x,i[4]=Ir.x,i[8]=Sn.x,i[1]=vi.y,i[5]=Ir.y,i[9]=Sn.y,i[2]=vi.z,i[6]=Ir.z,i[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],S=n[7],M=n[11],b=n[15],E=i[0],x=i[4],y=i[8],I=i[12],w=i[1],C=i[5],N=i[9],W=i[13],R=i[2],P=i[6],k=i[10],z=i[14],V=i[3],q=i[7],j=i[11],$=i[15];return r[0]=o*E+a*w+l*R+c*V,r[4]=o*x+a*C+l*P+c*q,r[8]=o*y+a*N+l*k+c*j,r[12]=o*I+a*W+l*z+c*$,r[1]=u*E+h*w+d*R+f*V,r[5]=u*x+h*C+d*P+f*q,r[9]=u*y+h*N+d*k+f*j,r[13]=u*I+h*W+d*z+f*$,r[2]=g*E+v*w+m*R+p*V,r[6]=g*x+v*C+m*P+p*q,r[10]=g*y+v*N+m*k+p*j,r[14]=g*I+v*W+m*z+p*$,r[3]=_*E+S*w+M*R+b*V,r[7]=_*x+S*C+M*P+b*q,r[11]=_*y+S*N+M*k+b*j,r[15]=_*I+S*W+M*z+b*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],_=l*f-c*d,S=a*f-c*h,M=a*d-l*h,b=o*f-c*u,E=o*d-l*u,x=o*h-a*u;return t*(v*_-m*S+p*M)-n*(g*_-m*b+p*E)+i*(g*S-v*b+p*x)-r*(g*M-v*E+m*x)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+i*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],_=t*a-n*o,S=t*l-i*o,M=t*c-r*o,b=n*l-i*a,E=n*c-r*a,x=i*c-r*l,y=u*v-h*g,I=u*m-d*g,w=u*p-f*g,C=h*m-d*v,N=h*p-f*v,W=d*p-f*m,R=_*W-S*N+M*C+b*w-E*I+x*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=(a*W-l*N+c*C)*P,e[1]=(i*N-n*W-r*C)*P,e[2]=(v*x-m*E+p*b)*P,e[3]=(d*E-h*x-f*b)*P,e[4]=(l*w-o*W-c*I)*P,e[5]=(t*W-i*w+r*I)*P,e[6]=(m*M-g*x-p*S)*P,e[7]=(u*x-d*M+f*S)*P,e[8]=(o*N-a*w+c*y)*P,e[9]=(n*w-t*N-r*y)*P,e[10]=(g*E-v*M+p*_)*P,e[11]=(h*M-u*E-f*_)*P,e[12]=(a*I-o*C-l*y)*P,e[13]=(t*C-n*I+i*y)*P,e[14]=(v*S-g*b-m*_)*P,e[15]=(u*b-h*S+d*_)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,v=o*u,m=o*h,p=a*h,_=l*c,S=l*u,M=l*h,b=n.x,E=n.y,x=n.z;return i[0]=(1-(v+p))*b,i[1]=(f+M)*b,i[2]=(g-S)*b,i[3]=0,i[4]=(f-M)*E,i[5]=(1-(d+p))*E,i[6]=(m+_)*E,i[7]=0,i[8]=(g+S)*x,i[9]=(m-_)*x,i[10]=(1-(d+v))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Qi.set(i[0],i[1],i[2]).length();const a=Qi.set(i[4],i[5],i[6]).length(),l=Qi.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Ln.copy(this);const c=1/o,u=1/a,h=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,t.setFromRotationMatrix(Ln),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=zn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===zn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===_r)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=zn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===zn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===_r)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Fo.prototype.isMatrix4=!0;let Ze=Fo;const Qi=new B,Ln=new Ze,dp=new B(0,0,0),fp=new B(1,1,1),vi=new B,Ir=new B,Sn=new B,Gc=new Ze,Vc=new Qt;class jn{constructor(e=0,t=0,n=0,i=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Zl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pp=0;const Wc=new B,ji=new Qt,ii=new Ze,Lr=new B,Bs=new B,mp=new B,gp=new Qt,Xc=new B(1,0,0),qc=new B(0,1,0),Yc=new B(0,0,1),Kc={type:"added"},_p={type:"removed"},es={type:"childadded",child:null},ia={type:"childremoved",child:null};class At extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new B,t=new jn,n=new Qt,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new tt}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(Xc,e)}rotateY(e){return this.rotateOnAxis(qc,e)}rotateZ(e){return this.rotateOnAxis(Yc,e)}translateOnAxis(e,t){return Wc.copy(e).applyQuaternion(this.quaternion),this.position.add(Wc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xc,e)}translateY(e){return this.translateOnAxis(qc,e)}translateZ(e){return this.translateOnAxis(Yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lr.copy(e):Lr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Bs,Lr,this.up):ii.lookAt(Lr,Bs,this.up),this.quaternion.setFromRotationMatrix(ii),i&&(ii.extractRotation(i.matrixWorld),ji.setFromRotationMatrix(ii),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kc),es.child=e,this.dispatchEvent(es),es.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_p),ia.child=e,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kc),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}At.DEFAULT_UP=new B(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pi extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xp={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function ra(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=Xl(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ra(o,r,e+1/3),this.g=ra(o,r,e),this.b=ra(o,r,e-1/3)}return pt.colorSpaceToWorking(this,i),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=jh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return pt.workingToColorSpace(rn.copy(this),e),Math.round(ut(rn.r*255,0,255))*65536+Math.round(ut(rn.g*255,0,255))*256+Math.round(ut(rn.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(rn.copy(this),t);const n=rn.r,i=rn.g,r=rn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Lt){pt.workingToColorSpace(rn.copy(this),e);const t=rn.r,n=rn.g,i=rn.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Dr);const n=or(Mi.h,Dr.h,t),i=or(Mi.s,Dr.s,t),r=or(Mi.l,Dr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Ve;Ve.NAMES=jh;class Jl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new Jl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zc extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Dn=new B,si=new B,oa=new B,ri=new B,ts=new B,ns=new B,Jc=new B,aa=new B,la=new B,ca=new B,ua=new yt,ha=new yt,da=new yt;class Fn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Dn.subVectors(e,t),i.cross(Dn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Dn.subVectors(i,t),si.subVectors(n,t),oa.subVectors(e,t);const o=Dn.dot(Dn),a=Dn.dot(si),l=Dn.dot(oa),c=si.dot(si),u=si.dot(oa),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return ua.setScalar(0),ha.setScalar(0),da.setScalar(0),ua.fromBufferAttribute(e,t),ha.fromBufferAttribute(e,n),da.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ua,r.x),o.addScaledVector(ha,r.y),o.addScaledVector(da,r.z),o}static isFrontFacing(e,t,n,i){return Dn.subVectors(n,t),si.subVectors(e,t),Dn.cross(si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Dn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Fn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ts.subVectors(i,n),ns.subVectors(r,n),aa.subVectors(e,n);const l=ts.dot(aa),c=ns.dot(aa);if(l<=0&&c<=0)return t.copy(n);la.subVectors(e,i);const u=ts.dot(la),h=ns.dot(la);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(ts,o);ca.subVectors(e,r);const f=ts.dot(ca),g=ns.dot(ca);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ns,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Jc.subVectors(r,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Jc,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),Ur.subVectors(this.max,zs),is.subVectors(e.a,zs),ss.subVectors(e.b,zs),rs.subVectors(e.c,zs),yi.subVectors(ss,is),Si.subVectors(rs,ss),ki.subVectors(is,rs);let t=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-ki.z,ki.y,yi.z,0,-yi.x,Si.z,0,-Si.x,ki.z,0,-ki.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-ki.y,ki.x,0];return!fa(t,is,ss,rs,Ur)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,is,ss,rs,Ur))?!1:(Fr.crossVectors(yi,Si),t=[Fr.x,Fr.y,Fr.z],fa(t,is,ss,rs,Ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oi=[new B,new B,new B,new B,new B,new B,new B,new B],Nn=new B,Nr=new yn,is=new B,ss=new B,rs=new B,yi=new B,Si=new B,ki=new B,zs=new B,Ur=new B,Fr=new B,Hi=new B;function fa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Hi.fromArray(s,r);const a=i.x*Math.abs(Hi.x)+i.y*Math.abs(Hi.y)+i.z*Math.abs(Hi.z),l=e.dot(Hi),c=t.dot(Hi),u=n.dot(Hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ui=vp();function vp(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Mp(s){Math.abs(s)>65504&&qe("DataUtils.toHalfFloat(): Value out of range."),s=ut(s,-65504,65504),ui.floatView[0]=s;const e=ui.uint32View[0],t=e>>23&511;return ui.baseTable[t]+((e&8388607)>>ui.shiftTable[t])}function yp(s){const e=s>>10;return ui.uint32View[0]=ui.mantissaTable[ui.offsetTable[e]+(s&1023)]+ui.exponentTable[e],ui.floatView[0]}class Or{static toHalfFloat(e){return Mp(e)}static fromHalfFloat(e){return yp(e)}}const Ht=new B,Br=new _e;let Sp=0;class jt extends Ui{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zh,this.updateRanges=[],this.gpuType=_n,this.version=0,this._normalizationScale=e!==void 0?Bo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix3(e),this.setXY(t,Br.x,Br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ql(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Yl(e,this.array)}}class ed extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class td extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const bp=new yn,ks=new B,pa=new B;class ei{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ks,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(pa)),this.expandByPoint(ks.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ep=0;const wn=new Ze,ma=new At,os=new B,bn=new yn,Hs=new yn,Jt=new B;class Dt extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kf(e)?td:ed)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(bn.min,Hs.min),bn.expandByPoint(Jt),Jt.addVectors(bn.max,Hs.max),bn.expandByPoint(Jt)):(bn.expandByPoint(Hs.min),bn.expandByPoint(Hs.max))}bn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(e,c),Jt.add(os)),i=Math.max(i,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)a[I]=new B,l[I]=new B;const u=new B,h=new B,d=new B,f=new _e,g=new _e,v=new _e,m=new B,p=new B;function _(I,w,C){c[I]=c[w]=c[C]=1,u.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),f.fromBufferAttribute(r,I),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,C),h.sub(u),d.sub(u),g.sub(f),v.sub(f);const N=1/(g.x*v.y-v.x*g.y);isFinite(N)&&(m.copy(h).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(N),p.copy(d).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(N),a[I].add(m),a[w].add(m),a[C].add(m),l[I].add(p),l[w].add(p),l[C].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,w=S.length;I<w;++I){const C=S[I],N=C.start,W=C.count;for(let R=N,P=N+W;R<P;R+=3)_(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const M=new B,b=new B,E=new B,x=new B;function y(I){E.fromBufferAttribute(i,I),x.copy(E);const w=a[I];M.copy(w),M.sub(E.multiplyScalar(E.dot(w))).normalize(),b.crossVectors(x,w);const N=b.dot(l[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,N)}for(let I=0,w=n.count;I<w;++I)c[I]&&y(I);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new jt(d,u,h)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zh,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=$c(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=$c(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function $c(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Wn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const cn=new B;class $l{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Bo(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){wo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $l(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){wo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ql(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Yl(e,this.data.array)}}const ga=new B,wp=new B,Ap=new tt;class ci{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ga.subVectors(n,t).cross(wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(ga),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ap.getNormalMatrix(e),i=this.coplanarPoint(ga).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Rp=0;class Gn extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=sr,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Rh,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qo,this.stencilZFail=Qo,this.stencilZPass=Qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ci().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ai=new B,_a=new B,zr=new B,kr=new B;class Tr{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_a.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(_a);const r=e.distanceTo(t)*.5,o=-this.direction.dot(zr),a=kr.dot(this.direction),l=-kr.dot(zr),c=kr.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(_a).addScaledVector(zr,d),f}intersectSphere(e,t){if(e.radius<0)return null;ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),i=ai.dot(ai)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,i,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,d=e.y-o.y,f=e.z-o.z,g=t.x-o.x,v=t.y-o.y,m=t.z-o.z,p=n.x-o.x,_=n.y-o.y,S=n.z-o.z,M=Math.abs(l),b=Math.abs(c),E=Math.abs(u);let x,y,I,w,C,N,W,R,P,k,z,V;if(M>=b&&M>=E?(I=l,N=h,P=g,V=p,l>=0?(x=c,y=u,w=d,C=f,W=v,R=m,k=_,z=S):(x=u,y=c,w=f,C=d,W=m,R=v,k=S,z=_)):b>=E?(I=c,N=d,P=v,V=_,c>=0?(x=u,y=l,w=f,C=h,W=m,R=g,k=S,z=p):(x=l,y=u,w=h,C=f,W=g,R=m,k=p,z=S)):(I=u,N=f,P=m,V=S,u>=0?(x=l,y=c,w=h,C=d,W=g,R=v,k=p,z=_):(x=c,y=l,w=d,C=h,W=v,R=g,k=_,z=p)),I===0)return null;const q=x/I,j=y/I,$=1/I,ue=w-q*N,he=C-j*N,Q=W-q*P,ge=R-j*P,te=k-q*V,Te=z-j*V,me=te*ge-Te*Q,D=ue*Te-he*te,ee=Q*he-ge*ue;if(i){if(me<0||D<0||ee<0)return null}else if((me<0||D<0||ee<0)&&(me>0||D>0||ee>0))return null;const oe=me+D+ee;if(oe===0)return null;const pe=$*(me*N+D*P+ee*V);return(oe>0?pe<0:pe>0)?null:this.at(pe/oe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kn extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qc=new Ze,Gi=new Tr,Hr=new ei,jc=new B,Gr=new B,Vr=new B,Wr=new B,xa=new B,Xr=new B,eu=new B,qr=new B;class on extends At{constructor(e=new Dt,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(xa.fromBufferAttribute(h,e),o?Xr.addScaledVector(xa,u):Xr.addScaledVector(xa.sub(t),u))}t.add(Xr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(Hr.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Hr,jc)===null||Gi.origin.distanceToSquared(jc)>(e.far-e.near)**2))&&(Qc.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Qc),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,b=S;M<b;M+=3){const E=a.getX(M),x=a.getX(M+1),y=a.getX(M+2);i=Yr(this,p,e,n,c,u,h,E,x,y),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);i=Yr(this,o,e,n,c,u,h,_,S,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,b=S;M<b;M+=3){const E=M,x=M+1,y=M+2;i=Yr(this,p,e,n,c,u,h,E,x,y),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,S=m+1,M=m+2;i=Yr(this,o,e,n,c,u,h,_,S,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Cp(s,e,t,n,i,r,o,a){let l;if(e.side===gn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Di,a),l===null)return null;qr.copy(a),qr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(qr);return c<t.near||c>t.far?null:{distance:c,point:qr.clone(),object:s}}function Yr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Gr),s.getVertexPosition(l,Vr),s.getVertexPosition(c,Wr);const u=Cp(s,e,t,n,Gr,Vr,Wr,eu);if(u){const h=new B;Fn.getBarycoord(eu,Gr,Vr,Wr,h),i&&(u.uv=Fn.getInterpolatedAttribute(i,a,l,c,h,new _e)),r&&(u.uv1=Fn.getInterpolatedAttribute(r,a,l,c,h,new _e)),o&&(u.normal=Fn.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};Fn.getNormal(Gr,Vr,Wr,d.normal),u.face=d,u.barycoord=h}return u}const Gs=new yt,tu=new yt,nu=new yt,Pp=new yt,iu=new Ze,Kr=new B,va=new ei,su=new Ze,Ma=new Tr;class Ip extends on{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nc,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Kr),this.boundingBox.expandByPoint(Kr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Kr),this.boundingSphere.expandByPoint(Kr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),va.copy(this.boundingSphere),va.applyMatrix4(i),e.ray.intersectsSphere(va)!==!1&&(su.copy(i).invert(),Ma.copy(e.ray).applyMatrix4(su),!(this.boundingBox!==null&&Ma.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ma)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wf?this.bindMatrixInverse.copy(this.bindMatrix).invert():qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;tu.fromBufferAttribute(i.attributes.skinIndex,e),nu.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Gs.copy(t),t.set(0,0,0,0)):(Gs.set(t.x,t.y,t.z,1),t.set(0,0,0)),Gs.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=nu.getComponent(r);if(o!==0){const a=tu.getComponent(r);iu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Pp.copy(Gs).applyMatrix4(iu),o)}}return t.isVector4&&(t.w=Gs.w),t.applyMatrix4(this.bindMatrixInverse)}}class nd extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bs extends qt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Xt,u=Xt,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ru=new Ze,Lp=new Ze;class Ql{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Lp;ru.multiplyMatrices(a,t[r]),ru.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ql(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new bs(t,e,e,Bn,_n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(qe("Skeleton: No bone found with UUID:",r),o=new nd),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ao extends jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const as=new Ze,ou=new Ze,Zr=[],au=new yn,Dp=new Ze,Vs=new on,Ws=new ei;class zo extends on{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ao(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Dp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),au.copy(e.boundingBox).applyMatrix4(as),this.boundingBox.union(au)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),Ws.copy(e.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Ws)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),e.ray.intersectsSphere(Ws)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,as),ou.multiplyMatrices(n,as),Vs.matrixWorld=ou,Vs.raycast(e,Zr);for(let o=0,a=Zr.length;o<a;o++){const l=Zr[o];l.instanceId=r,l.object=this,t.push(l)}Zr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ao(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bs(new Float32Array(i*this.count),i,this.count,Oo,_n));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Vi=new ei,Np=new _e(.5,.5),Jr=new B;class Es{constructor(e=new ci,t=new ci,n=new ci,i=new ci,r=new ci,o=new ci){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],_=r[12],S=r[13],M=r[14],b=r[15];if(i[0].setComponents(c-o,f-u,p-g,b-_).normalize(),i[1].setComponents(c+o,f+u,p+g,b+_).normalize(),i[2].setComponents(c+a,f+h,p+v,b+S).normalize(),i[3].setComponents(c-a,f-h,p-v,b-S).normalize(),n)i[4].setComponents(l,d,m,M).normalize(),i[5].setComponents(c-l,f-d,p-m,b-M).normalize();else if(i[4].setComponents(c-l,f-d,p-m,b-M).normalize(),t===zn)i[5].setComponents(c+l,f+d,p+m,b+M).normalize();else if(t===_r)i[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);const t=Np.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Jr.x=i.normal.x>0?e.max.x:e.min.x,Jr.y=i.normal.y>0?e.max.y:e.min.y,Jr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const lu=new Ze;class jl{constructor(){this.coordinateSystem=zn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const r=t[i];lu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Es),n[i].setFromProjectionMatrix(lu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Es),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new jl().copy(this)}}class id extends Gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ro=new B,Co=new B,cu=new Ze,Xs=new Tr,$r=new ei,ya=new B,uu=new B;class ec extends At{constructor(e=new Dt,t=new id){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ro.fromBufferAttribute(t,i-1),Co.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ro.distanceTo(Co);e.setAttribute("lineDistance",new ft(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;cu.copy(i).invert(),Xs.copy(e.ray).applyMatrix4(cu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=u.getX(v),_=u.getX(v+1),S=Qr(this,e,Xs,l,p,_,v);S&&t.push(S)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=Qr(this,e,Xs,l,v,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=Qr(this,e,Xs,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Qr(this,e,Xs,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Qr(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Ro.fromBufferAttribute(a,i),Co.fromBufferAttribute(a,r),t.distanceSqToSegment(Ro,Co,ya,uu)>n)return;ya.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ya);if(!(c<e.near||c>e.far))return{distance:c,point:uu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const hu=new B,du=new B;class sd extends ec{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)hu.fromBufferAttribute(t,i),du.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hu.distanceTo(du);e.setAttribute("lineDistance",new ft(n,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Up extends ec{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class rd extends Gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fu=new Ze,yl=new Tr,jr=new ei,eo=new B;class Fp extends At{constructor(e=new Dt,t=new rd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(i),jr.radius+=r,e.ray.intersectsSphere(jr)===!1)return;fu.copy(i).invert(),yl.copy(e.ray).applyMatrix4(fu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);eo.fromBufferAttribute(h,m),pu(eo,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,v=f;g<v;g++)eo.fromBufferAttribute(h,g),pu(eo,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function pu(s,e,t,n,i,r,o){const a=yl.distanceSqToPoint(s);if(a<t){const l=new B;yl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class od extends qt{constructor(e=[],t=Ms,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ls extends qt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ts extends qt{constructor(e,t,n=Qn,i,r,o,a=Xt,l=Xt,c,u=Ni,h=1){if(u!==Ni&&u!==Ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ad extends Ts{constructor(e,t=Qn,n=Ms,i,r,o=Xt,a=Xt,l,c=Ni){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ld extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fi extends Dt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(h,2));function g(v,m,p,_,S,M,b,E,x,y,I){const w=M/x,C=b/y,N=M/2,W=b/2,R=E/2,P=x+1,k=y+1;let z=0,V=0;const q=new B;for(let j=0;j<k;j++){const $=j*C-W;for(let ue=0;ue<P;ue++){const he=ue*w-N;q[v]=he*_,q[m]=$*S,q[p]=R,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[p]=E>0?1:-1,u.push(q.x,q.y,q.z),h.push(ue/x),h.push(1-j/y),z+=1}}for(let j=0;j<y;j++)for(let $=0;$<x;$++){const ue=d+$+P*j,he=d+$+P*(j+1),Q=d+($+1)+P*(j+1),ge=d+($+1)+P*j;l.push(ue,he,ge),l.push(he,Q,ge),V+=6}a.addGroup(f,V,I),f+=V,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class tc extends Dt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;_(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new ft(h,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function _(){const M=new B,b=new B;let E=0;const x=(t-e)/n;for(let y=0;y<=r;y++){const I=[],w=y/r,C=w*(t-e)+e;for(let N=0;N<=i;N++){const W=N/i,R=W*l+a,P=Math.sin(R),k=Math.cos(R);b.x=C*P,b.y=-w*n+m,b.z=C*k,h.push(b.x,b.y,b.z),M.set(P,x,k).normalize(),d.push(M.x,M.y,M.z),f.push(W,1-w),I.push(g++)}v.push(I)}for(let y=0;y<i;y++)for(let I=0;I<r;I++){const w=v[I][y],C=v[I+1][y],N=v[I+1][y+1],W=v[I][y+1];(e>0||I!==0)&&(u.push(w,C,W),E+=3),(t>0||I!==r-1)&&(u.push(C,N,W),E+=3)}c.addGroup(p,E,0),p+=E}function S(M){const b=g,E=new _e,x=new B;let y=0;const I=M===!0?e:t,w=M===!0?1:-1;for(let N=1;N<=i;N++)h.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;const C=g;for(let N=0;N<=i;N++){const R=N/i*l+a,P=Math.cos(R),k=Math.sin(R);x.x=I*k,x.y=m*w,x.z=I*P,h.push(x.x,x.y,x.z),d.push(0,w,0),E.x=P*.5+.5,E.y=k*.5*w+.5,f.push(E.x,E.y),g++}for(let N=0;N<i;N++){const W=b+N,R=C+N;M===!0?u.push(R,R+1,W):u.push(R+1,R,W),y+=3}c.addGroup(p,y,M===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nc extends Dt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const S=new B,M=new B,b=new B;for(let E=0;E<t.length;E+=3)f(t[E+0],S),f(t[E+1],M),f(t[E+2],b),l(S,M,b,_)}function l(_,S,M,b){const E=b+1,x=[];for(let y=0;y<=E;y++){x[y]=[];const I=_.clone().lerp(M,y/E),w=S.clone().lerp(M,y/E),C=E-y;for(let N=0;N<=C;N++)N===0&&y===E?x[y][N]=I:x[y][N]=I.clone().lerp(w,N/C)}for(let y=0;y<E;y++)for(let I=0;I<2*(E-y)-1;I++){const w=Math.floor(I/2);I%2===0?(d(x[y][w+1]),d(x[y+1][w]),d(x[y][w])):(d(x[y][w+1]),d(x[y+1][w+1]),d(x[y+1][w]))}}function c(_){const S=new B;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(_),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function u(){const _=new B;for(let S=0;S<r.length;S+=3){_.x=r[S+0],_.y=r[S+1],_.z=r[S+2];const M=m(_)/2/Math.PI+.5,b=p(_)/Math.PI+.5;o.push(M,1-b)}g(),h()}function h(){for(let _=0;_<o.length;_+=6){const S=o[_+0],M=o[_+2],b=o[_+4],E=Math.max(S,M,b),x=Math.min(S,M,b);E>.9&&x<.1&&(S<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,S){const M=_*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function g(){const _=new B,S=new B,M=new B,b=new B,E=new _e,x=new _e,y=new _e;for(let I=0,w=0;I<r.length;I+=9,w+=6){_.set(r[I+0],r[I+1],r[I+2]),S.set(r[I+3],r[I+4],r[I+5]),M.set(r[I+6],r[I+7],r[I+8]),E.set(o[w+0],o[w+1]),x.set(o[w+2],o[w+3]),y.set(o[w+4],o[w+5]),b.copy(_).add(S).add(M).divideScalar(3);const C=m(b);v(E,w+0,_,C),v(x,w+2,S,C),v(y,w+4,M,C)}}function v(_,S,M,b){b<0&&_.x===1&&(o[S]=_.x-1),M.x===0&&M.z===0&&(o[S]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.vertices,e.indices,e.radius,e.detail)}}class ti{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new _e:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new B,i=[],r=[],o=[],a=new B,l=new Ze;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ut(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(ut(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class ic extends ti{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new _e){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Op extends ic{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sc(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const mu=new B,gu=new B,Sa=new sc,ba=new sc,Ea=new sc;class cd extends ti{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new B){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(gu.subVectors(i[0],i[1]).add(i[0]),c=gu);const h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(mu.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=mu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Sa.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,m),ba.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,m),Ea.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Sa.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ba.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Ea.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Sa.calc(l),ba.calc(l),Ea.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new B().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _u(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Bp(s,e){const t=1-s;return t*t*e}function zp(s,e){return 2*(1-s)*s*e}function kp(s,e){return s*s*e}function ar(s,e,t,n){return Bp(s,e)+zp(s,t)+kp(s,n)}function Hp(s,e){const t=1-s;return t*t*t*e}function Gp(s,e){const t=1-s;return 3*t*t*s*e}function Vp(s,e){return 3*(1-s)*s*s*e}function Wp(s,e){return s*s*s*e}function lr(s,e,t,n,i){return Hp(s,e)+Gp(s,t)+Vp(s,n)+Wp(s,i)}class ud extends ti{constructor(e=new _e,t=new _e,n=new _e,i=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new _e){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lr(e,i.x,r.x,o.x,a.x),lr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xp extends ti{constructor(e=new B,t=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new B){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lr(e,i.x,r.x,o.x,a.x),lr(e,i.y,r.y,o.y,a.y),lr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hd extends ti{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qp extends ti{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dd extends ti{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ar(e,i.x,r.x,o.x),ar(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fd extends ti{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ar(e,i.x,r.x,o.x),ar(e,i.y,r.y,o.y),ar(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pd extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(_u(a,l.x,c.x,u.x,h.x),_u(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new _e().fromArray(i))}return this}}var Po=Object.freeze({__proto__:null,ArcCurve:Op,CatmullRomCurve3:cd,CubicBezierCurve:ud,CubicBezierCurve3:Xp,EllipseCurve:ic,LineCurve:hd,LineCurve3:qp,QuadraticBezierCurve:dd,QuadraticBezierCurve3:fd,SplineCurve:pd});class Yp extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Po[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Po[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class xu extends Yp{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new hd(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new dd(this.currentPoint.clone(),new _e(e,t),new _e(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new ud(this.currentPoint.clone(),new _e(e,t),new _e(n,i),new _e(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new pd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new ic(e,t,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wr extends xu{constructor(e){super(e),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new xu().fromJSON(i))}return this}}function Kp(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=md(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=jp(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let u=a,h=l;for(let d=t;d<i;d+=t){const f=s[d],g=s[d+1];f<a&&(a=f),g<l&&(l=g),f>u&&(u=f),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return vr(r,o,t,a,l,c,0),o}function md(s,e,t,n,i){let r;if(i===um(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=vu(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=vu(o/n|0,s[o],s[o+1],r);return r&&ws(r,r.next)&&(yr(r),r=r.next),r}function Ki(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ws(t,t.next)||Ft(t.prev,t,t.next)===0)){if(yr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function vr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&sm(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Jp(s,n,i,r):Zp(s)){e.push(l.i,s.i,c.i),yr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=$p(Ki(s),e),vr(s,e,t,n,i,r,2)):o===2&&Qp(s,e,t,n,i,r):vr(Ki(s),e,t,n,i,r,1);break}}}function Zp(s){const e=s.prev,t=s,n=s.next;if(Ft(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,r,o),h=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Qs(i,a,r,l,o,c,g.x,g.y)&&Ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Jp(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Ft(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(u,h,d),v=Math.max(a,l,c),m=Math.max(u,h,d),p=Sl(f,g,e,t,n),_=Sl(v,m,e,t,n);let S=s.prevZ,M=s.nextZ;for(;S&&S.z>=p&&M&&M.z<=_;){if(S.x>=f&&S.x<=v&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&Qs(a,u,l,h,c,d,S.x,S.y)&&Ft(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&Qs(a,u,l,h,c,d,M.x,M.y)&&Ft(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=v&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&Qs(a,u,l,h,c,d,S.x,S.y)&&Ft(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=_;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&Qs(a,u,l,h,c,d,M.x,M.y)&&Ft(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function $p(s,e){let t=s;do{const n=t.prev,i=t.next.next;!ws(n,i)&&_d(n,t,t.next,i)&&Mr(n,i)&&Mr(i,n)&&(e.push(n.i,t.i,i.i),yr(t),yr(t.next),t=s=i),t=t.next}while(t!==s);return Ki(t)}function Qp(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&am(o,a)){let l=xd(o,a);o=Ki(o,o.next),l=Ki(l,l.next),vr(o,e,t,n,i,r,0),vr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function jp(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=md(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(om(c))}i.sort(em);for(let r=0;r<i.length;r++)t=tm(i[r],t);return t}function em(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function tm(s,e){const t=nm(s,e);if(!t)return e;const n=xd(t,s);return Ki(n,n.next),Ki(t,t.next)}function nm(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(ws(s,t))return t;do{if(ws(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&gd(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const h=Math.abs(i-t.y)/(n-t.x);Mr(t,s)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&im(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function im(s,e){return Ft(s.prev,s,e.prev)<0&&Ft(e.next,s,s.next)<0}function sm(s,e,t,n){let i=s;do i.z===0&&(i.z=Sl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,rm(i)}function rm(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Sl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function om(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function gd(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Qs(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&gd(s,e,t,n,i,r,o,a)}function am(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!lm(s,e)&&(Mr(s,e)&&Mr(e,s)&&cm(s,e)&&(Ft(s.prev,s,e.prev)||Ft(s,e.prev,e))||ws(s,e)&&Ft(s.prev,s,s.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ws(s,e){return s.x===e.x&&s.y===e.y}function _d(s,e,t,n){const i=no(Ft(s,e,t)),r=no(Ft(s,e,n)),o=no(Ft(t,n,s)),a=no(Ft(t,n,e));return!!(i!==r&&o!==a||i===0&&to(s,t,e)||r===0&&to(s,n,e)||o===0&&to(t,s,n)||a===0&&to(t,e,n))}function to(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function no(s){return s>0?1:s<0?-1:0}function lm(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&_d(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Mr(s,e){return Ft(s.prev,s,s.next)<0?Ft(s,e,s.next)>=0&&Ft(s,s.prev,e)>=0:Ft(s,e,s.prev)<0||Ft(s,s.next,e)<0}function cm(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function xd(s,e){const t=bl(s.i,s.x,s.y),n=bl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function vu(s,e,t,n){const i=bl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function yr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function bl(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function um(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class hm{static triangulate(e,t,n=2){return Kp(e,t,n)}}class hi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return hi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Mu(e),yu(n,e);let o=e.length;t.forEach(Mu);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,yu(n,t[l]);const a=hm.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Mu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function yu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class ko extends Dt{constructor(e=new wr([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ft(i,3)),this.setAttribute("uv",new ft(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:dm;let S,M=!1,b,E,x,y;if(p){S=p.getSpacedPoints(u),M=!0,d=!1;const se=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(u,se),E=new B,x=new B,y=new B}d||(m=0,f=0,g=0,v=0);const I=a.extractPoints(c);let w=I.shape;const C=I.holes;if(!hi.isClockWise(w)){w=w.reverse();for(let se=0,Me=C.length;se<Me;se++){const xe=C[se];hi.isClockWise(xe)&&(C[se]=xe.reverse())}}function W(se){const xe=10000000000000001e-36;let Le=se[0];for(let Se=1;Se<=se.length;Se++){const ze=Se%se.length,Fe=se[ze],$e=Fe.x-Le.x,at=Fe.y-Le.y,dt=$e*$e+at*at,G=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(Le.x),Math.abs(Le.y)),Rt=xe*G*G;if(dt<=Rt){se.splice(ze,1),Se--;continue}Le=Fe}}W(w),C.forEach(W);const R=C.length,P=w;for(let se=0;se<R;se++){const Me=C[se];w=w.concat(Me)}function k(se,Me,xe){return Me||Qe("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(Me,xe)}const z=w.length;function V(se,Me,xe){let Le,Se,ze;const Fe=se.x-Me.x,$e=se.y-Me.y,at=xe.x-se.x,dt=xe.y-se.y,G=Fe*Fe+$e*$e,Rt=Fe*dt-$e*at;if(Math.abs(Rt)>Number.EPSILON){const lt=Math.sqrt(G),St=Math.sqrt(at*at+dt*dt),Pe=Me.x-$e/lt,Nt=Me.y+Fe/lt,Ke=xe.x-dt/St,Je=xe.y+at/St,L=((Ke-Pe)*dt-(Je-Nt)*at)/(Fe*dt-$e*at);Le=Pe+Fe*L-se.x,Se=Nt+$e*L-se.y;const T=Le*Le+Se*Se;if(T<=2)return new _e(Le,Se);ze=Math.sqrt(T/2)}else{let lt=!1;Fe>Number.EPSILON?at>Number.EPSILON&&(lt=!0):Fe<-Number.EPSILON?at<-Number.EPSILON&&(lt=!0):Math.sign($e)===Math.sign(dt)&&(lt=!0),lt?(Le=-$e,Se=Fe,ze=Math.sqrt(G)):(Le=Fe,Se=$e,ze=Math.sqrt(G/2))}return new _e(Le/ze,Se/ze)}const q=[];for(let se=0,Me=P.length,xe=Me-1,Le=se+1;se<Me;se++,xe++,Le++)xe===Me&&(xe=0),Le===Me&&(Le=0),q[se]=V(P[se],P[xe],P[Le]);const j=[];let $,ue=q.concat();for(let se=0,Me=R;se<Me;se++){const xe=C[se];$=[];for(let Le=0,Se=xe.length,ze=Se-1,Fe=Le+1;Le<Se;Le++,ze++,Fe++)ze===Se&&(ze=0),Fe===Se&&(Fe=0),$[Le]=V(xe[Le],xe[ze],xe[Fe]);j.push($),ue=ue.concat($)}let he;if(m===0)he=hi.triangulateShape(P,C);else{const se=[],Me=[];for(let xe=0;xe<m;xe++){const Le=xe/m,Se=f*Math.cos(Le*Math.PI/2),ze=g*Math.sin(Le*Math.PI/2)+v;for(let Fe=0,$e=P.length;Fe<$e;Fe++){const at=k(P[Fe],q[Fe],ze);D(at.x,at.y,-Se),Le===0&&se.push(at)}for(let Fe=0,$e=R;Fe<$e;Fe++){const at=C[Fe];$=j[Fe];const dt=[];for(let G=0,Rt=at.length;G<Rt;G++){const lt=k(at[G],$[G],ze);D(lt.x,lt.y,-Se),Le===0&&dt.push(lt)}Le===0&&Me.push(dt)}}he=hi.triangulateShape(se,Me)}const Q=he.length,ge=g+v;for(let se=0;se<z;se++){const Me=d?k(w[se],ue[se],ge):w[se];M?(x.copy(b.normals[0]).multiplyScalar(Me.x),E.copy(b.binormals[0]).multiplyScalar(Me.y),y.copy(S[0]).add(x).add(E),D(y.x,y.y,y.z)):D(Me.x,Me.y,0)}for(let se=1;se<=u;se++)for(let Me=0;Me<z;Me++){const xe=d?k(w[Me],ue[Me],ge):w[Me];M?(x.copy(b.normals[se]).multiplyScalar(xe.x),E.copy(b.binormals[se]).multiplyScalar(xe.y),y.copy(S[se]).add(x).add(E),D(y.x,y.y,y.z)):D(xe.x,xe.y,h/u*se)}for(let se=m-1;se>=0;se--){const Me=se/m,xe=f*Math.cos(Me*Math.PI/2),Le=g*Math.sin(Me*Math.PI/2)+v;for(let Se=0,ze=P.length;Se<ze;Se++){const Fe=k(P[Se],q[Se],Le);D(Fe.x,Fe.y,h+xe)}for(let Se=0,ze=C.length;Se<ze;Se++){const Fe=C[Se];$=j[Se];for(let $e=0,at=Fe.length;$e<at;$e++){const dt=k(Fe[$e],$[$e],Le);M?D(dt.x,dt.y+S[u-1].y,S[u-1].x+xe):D(dt.x,dt.y,h+xe)}}}te(),Te();function te(){const se=i.length/3;if(d){let Me=0,xe=z*Me;for(let Le=0;Le<Q;Le++){const Se=he[Le];ee(Se[2]+xe,Se[1]+xe,Se[0]+xe)}Me=u+m*2,xe=z*Me;for(let Le=0;Le<Q;Le++){const Se=he[Le];ee(Se[0]+xe,Se[1]+xe,Se[2]+xe)}}else{for(let Me=0;Me<Q;Me++){const xe=he[Me];ee(xe[2],xe[1],xe[0])}for(let Me=0;Me<Q;Me++){const xe=he[Me];ee(xe[0]+z*u,xe[1]+z*u,xe[2]+z*u)}}n.addGroup(se,i.length/3-se,0)}function Te(){const se=i.length/3;let Me=0;me(P,Me),Me+=P.length;for(let xe=0,Le=C.length;xe<Le;xe++){const Se=C[xe];me(Se,Me),Me+=Se.length}n.addGroup(se,i.length/3-se,1)}function me(se,Me){let xe=se.length;for(;--xe>=0;){const Le=xe;let Se=xe-1;Se<0&&(Se=se.length-1);for(let ze=0,Fe=u+m*2;ze<Fe;ze++){const $e=z*ze,at=z*(ze+1),dt=Me+Le+$e,G=Me+Se+$e,Rt=Me+Se+at,lt=Me+Le+at;oe(dt,G,Rt,lt)}}}function D(se,Me,xe){l.push(se),l.push(Me),l.push(xe)}function ee(se,Me,xe){pe(se),pe(Me),pe(xe);const Le=i.length/3,Se=_.generateTopUV(n,i,Le-3,Le-2,Le-1);Be(Se[0]),Be(Se[1]),Be(Se[2])}function oe(se,Me,xe,Le){pe(se),pe(Me),pe(Le),pe(Me),pe(xe),pe(Le);const Se=i.length/3,ze=_.generateSideWallUV(n,i,Se-6,Se-3,Se-2,Se-1);Be(ze[0]),Be(ze[1]),Be(ze[3]),Be(ze[1]),Be(ze[2]),Be(ze[3])}function pe(se){i.push(l[se*3+0]),i.push(l[se*3+1]),i.push(l[se*3+2])}function Be(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return fm(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Po[i.type]().fromJSON(i)),new ko(n,e.options)}}const dm={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new _e(r,o),new _e(a,l),new _e(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new _e(o,1-l),new _e(c,1-h),new _e(d,1-g),new _e(v,1-p)]:[new _e(a,1-l),new _e(u,1-h),new _e(f,1-g),new _e(m,1-p)]}};function fm(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ho extends nc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ho(e.radius,e.detail)}}class As extends Dt{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ut(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new B,d=new _e,f=new B,g=new B,v=new B;let m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:v.normalize(),l.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let _=0;_<=t;_++){const S=n+_*u*i,M=Math.sin(S),b=Math.cos(S);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*M,h.y=e[E].y,h.z=e[E].x*b,o.push(h.x,h.y,h.z),d.x=_/t,d.y=E/(e.length-1),a.push(d.x,d.y);const x=l[3*E+0]*M,y=l[3*E+1],I=l[3*E+0]*b;c.push(x,y,I)}}for(let _=0;_<t;_++)for(let S=0;S<e.length-1;S++){const M=S+_*e.length,b=M,E=M+e.length,x=M+e.length+1,y=M+1;r.push(b,E,y),r.push(x,y,E)}this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("uv",new ft(a,2)),this.setAttribute("normal",new ft(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.points,e.segments,e.phiStart,e.phiLength)}}class an extends Dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const _=p*d-o;for(let S=0;S<c;S++){const M=S*h-r;g.push(M,-_,0),v.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const S=_+c*p,M=_+c*(p+1),b=_+1+c*(p+1),E=_+1+c*p;f.push(S,M,E),f.push(M,b,E)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.width,e.height,e.widthSegments,e.heightSegments)}}class rc extends Dt{constructor(e=new wr([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ft(i,3)),this.setAttribute("normal",new ft(r,3)),this.setAttribute("uv",new ft(o,2));function c(u){const h=i.length/3,d=u.extractPoints(t);let f=d.shape;const g=d.holes;hi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const _=g[m];hi.isClockWise(_)===!0&&(g[m]=_.reverse())}const v=hi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){const _=f[m];i.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,p=v.length;m<p;m++){const _=v[m],S=_[0]+h,M=_[1]+h,b=_[2]+h;n.push(S,M,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return pm(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new rc(n,e.curveSegments)}}function pm(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Go extends Dt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new B,d=new B,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const _=[],S=p/n,M=o+S*a,b=e*Math.cos(M),E=Math.sqrt(e*e-b*b);let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let y=0;y<=t;y++){const I=y/t,w=i+I*r;h.x=-E*Math.cos(w),h.y=b,h.z=E*Math.sin(w),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(I+x,1-S),_.push(c++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){const S=u[p][_+1],M=u[p][_],b=u[p+1][_],E=u[p+1][_+1];(p!==0||o>0)&&f.push(S,M,E),(p!==n-1||l<Math.PI)&&f.push(M,b,E)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Li extends Dt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],h=[],d=new B,f=new B,g=new B;for(let v=0;v<=n;v++){const m=o+v/n*a;for(let p=0;p<=i;p++){const _=p/i*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),g.subVectors(f,d).normalize(),u.push(g.x,g.y,g.z),h.push(p/i),h.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=i;m++){const p=(i+1)*v+m-1,_=(i+1)*(v-1)+m-1,S=(i+1)*(v-1)+m,M=(i+1)*v+m;l.push(p,_,M),l.push(_,S,M)}this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class oc extends Dt{constructor(e=new fd(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,l=new B,c=new _e;let u=new B;const h=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ft(h,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function v(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),_(),p()}function m(S){u=e.getPointAt(S/t,u);const M=o.normals[S],b=o.binormals[S];for(let E=0;E<=i;E++){const x=E/i*Math.PI*2,y=Math.sin(x),I=-Math.cos(x);l.x=I*M.x+y*b.x,l.y=I*M.y+y*b.y,l.z=I*M.z+y*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=t;S++)for(let M=1;M<=i;M++){const b=(i+1)*(S-1)+(M-1),E=(i+1)*S+(M-1),x=(i+1)*S+M,y=(i+1)*(S-1)+M;g.push(b,E,y),g.push(E,x,y)}}function _(){for(let S=0;S<=t;S++)for(let M=0;M<=i;M++)c.x=S/t,c.y=M/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new oc(new Po[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Rs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(Su(i))i.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Su(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function hn(s){const e={};for(let t=0;t<s.length;t++){const n=Rs(s[t]);for(const i in n)e[i]=n[i]}return e}function Su(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function mm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function vd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const Md={clone:Rs,merge:hn};var gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gm,this.fragmentShader=_m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=mm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(i.value);break;case"v2":this.uniforms[n].value=new _e().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ze().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class xm extends Vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class en extends Gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xn extends en{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return _s('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){_s('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class vm extends Gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=If,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mm extends Gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function wi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function js(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function ym(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function bu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Sm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Ds{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class bm extends Ds{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ms,endingEnd:ms}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case gs:r=e,a=2*t-n;break;case Eo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gs:o=e,l=2*n-t;break;case Eo:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*v+.5*g,M=f*m-f*v;for(let b=0;b!==a;++b)r[b]=p*o[u+b]+_*o[c+b]+S*o[l+b]+M*o[h+b];return r}}class yd extends Ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class Em extends Ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Tm extends Ds{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){const g=(n-t)/(i-t),v=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*v+o[l+m]*g;return r}const d=a*2,f=e-1;for(let g=0;g!==a;++g){const v=o[c+g],m=o[l+g],p=f*d+g*2,_=h[p],S=h[p+1],M=e*d+g*2,b=u[M],E=u[M+1],x=Am(n,t,_,b,i);r[g]=Sd(x,v,S,E,m)}return r}}function Sd(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function wm(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Am(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){const a=Sd(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;const l=wm(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class qn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wi(t,this.TimeBufferType),this.values=wi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wi(e.times,Array),values:wi(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),js(e.settings)&&(n.settings={inTangents:wi(e.settings.inTangents,Array),outTangents:wi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Em(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Tm(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case mr:t=this.InterpolantFactoryMethodDiscrete;break;case gr:t=this.InterpolantFactoryMethodLinear;break;case $o:t=this.InterpolantFactoryMethodSmooth;break;case Uc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return gr;case this.InterpolantFactoryMethodSmooth:return $o;case this.InterpolantFactoryMethodBezier:return Uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;js(this.settings)&&(Eu(this.settings.inTangents,e),Eu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;js(this.settings)&&(Tu(this.settings.inTangents,e),Tu(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Hf(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$o,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const v=t[h+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,js(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Eu(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function Tu(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=gr;class Ns extends qn{constructor(e,t,n){super(e,t,n)}}Ns.prototype.ValueTypeName="bool";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=mr;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class bd extends qn{constructor(e,t,n,i){super(e,t,n,i)}}bd.prototype.ValueTypeName="color";class Sr extends qn{constructor(e,t,n,i){super(e,t,n,i)}}Sr.prototype.ValueTypeName="number";class Rm extends Ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Qt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class br extends qn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Rm(this.times,this.values,this.getValueSize(),e)}}br.prototype.ValueTypeName="quaternion";br.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends qn{constructor(e,t,n){super(e,t,n)}}Us.prototype.ValueTypeName="string";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=mr;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class Io extends qn{constructor(e,t,n,i){super(e,t,n,i)}}Io.prototype.ValueTypeName="vector";class El{constructor(e="",t=-1,n=[],i=Wl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Wn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Pm(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=ym(l);l=bu(l,1,u),c=bu(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Sr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Cm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Sr;case"vector":case"vector2":case"vector3":case"vector4":return Io;case"color":return bd;case"quaternion":return br;case"bool":case"boolean":return Ns;case"string":return Us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Pm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Cm(s.type);if(s.times===void 0){const n=[],i=[];Sm(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),js(s.settings)&&(t.settings={inTangents:wi(s.settings.inTangents,Float32Array),outTangents:wi(s.settings.outTangents,Float32Array)}),t}const di={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(wu(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!wu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function wu(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Im{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Lm=new Im;class Zi{constructor(e){this.manager=e!==void 0?e:Lm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Zi.DEFAULT_MATERIAL_NAME="__DEFAULT";const li={};class Dm extends Error{constructor(e,t){super(e),this.response=t}}class ac extends Zi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=di.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(li[e]!==void 0){li[e].push({onLoad:t,onProgress:n,onError:i});return}li[e]=[],li[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=li[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){_();function _(){h.read().then(({done:S,value:M})=>{if(S)p.close();else{v+=M.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let E=0,x=u.length;E<x;E++){const y=u[E];y.onProgress&&y.onProgress(b)}p.enqueue(M),_()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Dm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{di.add(`file:${e}`,c);const u=li[e];delete li[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=li[e];if(u===void 0)throw this.manager.itemError(e),c;delete li[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ls=new WeakMap;class Nm extends Zi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=di.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=ls.get(o);h===void 0&&(h=[],ls.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=xr("img");function l(){u(),t&&t(this);const h=ls.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}ls.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),di.remove(`image:${e}`);const d=ls.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),di.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}}class Um extends Zi{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new bs,a=new ac(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){i!==void 0?i(u):Qe(u);return}r._applyTexData(o,c),t&&t(o,c)},n,i),o}createDataTexture(e){const t=new bs;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Pn,e.wrapT=t.wrapT!==void 0?t.wrapT:Pn,e.magFilter=t.magFilter!==void 0?t.magFilter:Ot,e.minFilter=t.minFilter!==void 0?t.minFilter:Ot,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=On),t.mipmapCount===1&&(e.minFilter=Ot),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class lc extends Zi{constructor(e){super(e)}load(e,t,n,i){const r=new qt,o=new Nm(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Vo extends At{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Fm extends Vo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ta=new Ze,Au=new B,Ru=new B;class cc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Au.setFromMatrixPosition(e.matrixWorld),t.position.copy(Au),Ru.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ru),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ta,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===_r||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const io=new B,so=new Qt,Yn=new B;class Ed extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(io,so,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,so,Yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(io,so,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,so,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const bi=new B,Cu=new _e,Pu=new _e;class pn extends Ed{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Cu,Pu),t.subVectors(Pu,Cu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Om extends cc{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ss*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Bm extends Vo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Om}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class zm extends cc{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}}class uc extends Vo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new zm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class hc extends Ed{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class km extends cc{constructor(){super(new hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tl extends Vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new km}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class cr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const wa=new WeakMap;class Hm extends Zi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=di.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{wa.has(o)===!0?(i&&i(wa.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}const a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return di.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),wa.set(l,c),di.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});di.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const cs=-90,us=1;class wl extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new pn(cs,us,e,t);i.layers=this.layers,this.add(i);const r=new pn(cs,us,e,t);r.layers=this.layers,this.add(r);const o=new pn(cs,us,e,t);o.layers=this.layers,this.add(o);const a=new pn(cs,us,e,t);a.layers=this.layers,this.add(a);const l=new pn(cs,us,e,t);l.layers=this.layers,this.add(l);const c=new pn(cs,us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gm extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Vm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Qt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Qt.multiplyQuaternionsFlat(e,o,e,t,e,n),Qt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const dc="\\[\\]\\.:\\/",Wm=new RegExp("["+dc+"]","g"),fc="[^"+dc+"]",Xm="[^"+dc.replace("\\.","")+"]",qm=/((?:WC+[\/:])*)/.source.replace("WC",fc),Ym=/(WCOD+)?/.source.replace("WCOD",Xm),Km=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),Zm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),Jm=new RegExp("^"+qm+Ym+Km+Zm+"$"),$m=["material","materials","bones","map"];class Qm{constructor(e,t,n){const i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wm,"")}static parseTrackName(e){const t=Jm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);$m.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=Qm;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class jm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:ms,endingEnd:ms};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Af,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Cf:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Wl:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Rf;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Wh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=gs,i.endingEnd=gs):(e?i.endingStart=this.zeroSlopeAtStart?gs:ms:i.endingStart=Eo,t?i.endingEnd=this.zeroSlopeAtEnd?gs:ms:i.endingEnd=Eo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const e0=new Float32Array(1);class t0 extends Ui{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const d=i[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;g=new Vm(Mt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new yd(new Float32Array(2),new Float32Array(2),1,e0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?El.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Wl),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new jm(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?El.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Iu=new Ze;class n0{constructor(e,t,n=0,i=1/0){this.ray=new Tr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Iu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Iu),this}intersectObject(e,t=!0,n=[]){return Al(e,this,n,t),n.sort(Lu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Al(e[i],this,n,t);return n.sort(Lu),n}}function Lu(s,e){return s.distance-e.distance}function Al(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Al(r[o],e,t,!0)}}function Du(s,e,t,n){const i=i0(n);switch(t){case Gh:return s*e;case Oo:return s*e/i.components*i.byteLength;case Hl:return s*e/i.components*i.byteLength;case Yi:return s*e*2/i.components*i.byteLength;case Gl:return s*e*2/i.components*i.byteLength;case Vh:return s*e*3/i.components*i.byteLength;case Bn:return s*e*4/i.components*i.byteLength;case Vl:return s*e*4/i.components*i.byteLength;case ho:case fo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case po:case mo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wa:case qa:return Math.max(s,16)*Math.max(e,8)/4;case Va:case Xa:return Math.max(s,8)*Math.max(e,8)/2;case Ya:case Ka:case Ja:case $a:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Za:case So:case Qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case tl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case nl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case il:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case sl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case rl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ol:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case al:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ll:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case cl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ul:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case hl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case dl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case fl:case pl:case ml:return Math.ceil(s/4)*Math.ceil(e/4)*16;case gl:case _l:return Math.ceil(s/4)*Math.ceil(e/4)*8;case bo:case xl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function i0(s){switch(s){case Tn:case Bh:return{byteLength:1,components:1};case pr:case zh:case vn:return{byteLength:2,components:1};case zl:case kl:return{byteLength:2,components:4};case Qn:case Bl:case _n:return{byteLength:4,components:1};case kh:case Hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);function Td(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function s0(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];s.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var r0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o0=`#ifdef USE_ALPHAHASH
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
#endif`,a0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,u0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h0=`#ifdef USE_AOMAP
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
#endif`,d0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f0=`#ifdef USE_BATCHING
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
#endif`,p0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,x0=`#ifdef USE_IRIDESCENCE
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
#endif`,v0=`#ifdef USE_BUMPMAP
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
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,T0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,A0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,R0=`#define PI 3.141592653589793
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
} // validated`,C0=`vec3 transformedNormal = objectNormal;
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
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N0="gl_FragColor = linearToOutputTexel( gl_FragColor );",U0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
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
#endif`,H0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X0=`#ifdef USE_GRADIENTMAP
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
}`,q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,J0=`#ifdef USE_ENVMAP
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
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tg=`PhysicalMaterial material;
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
#endif`,ng=`uniform sampler2D dfgLUT;
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
}`,ig=`
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
#endif`,sg=`#if defined( RE_IndirectDiffuse )
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
#endif`,rg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,og=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pg=`#if defined( USE_POINTS_UV )
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
#endif`,mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_g=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xg=`#if defined( USE_MORPHCOLORS )
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
#endif`,vg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`#ifdef USE_MORPHTARGETS
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
#endif`,yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ag=`#ifdef USE_NORMALMAP
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
#endif`,Rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vg=`float getShadowMask() {
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
}`,Wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yg=`#ifdef USE_SKINNING
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
#endif`,Kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$g=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qg=`#ifdef USE_TRANSMISSION
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
#endif`,jg=`#ifdef USE_TRANSMISSION
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
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r_=`uniform sampler2D t2D;
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
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`uniform float backgroundBlurriness;
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`#include <common>
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
}`,h_=`#if DEPTH_PACKING == 3200
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
}`,d_=`#define DISTANCE
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
}`,f_=`#define DISTANCE
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
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`uniform float scale;
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
}`,__=`uniform vec3 diffuse;
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
}`,x_=`#include <common>
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
}`,v_=`uniform vec3 diffuse;
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
}`,M_=`#define LAMBERT
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
}`,y_=`#define LAMBERT
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
}`,S_=`#define MATCAP
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
}`,b_=`#define MATCAP
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
}`,E_=`#define NORMAL
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
}`,T_=`#define NORMAL
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
}`,w_=`#define PHONG
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
}`,A_=`#define PHONG
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
}`,R_=`#define STANDARD
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
}`,C_=`#define STANDARD
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
}`,P_=`#define TOON
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
}`,I_=`#define TOON
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
}`,L_=`uniform float size;
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
}`,D_=`uniform vec3 diffuse;
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
}`,N_=`#include <common>
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
}`,U_=`uniform vec3 color;
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
}`,F_=`uniform float rotation;
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
}`,O_=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:r0,alphahash_pars_fragment:o0,alphamap_fragment:a0,alphamap_pars_fragment:l0,alphatest_fragment:c0,alphatest_pars_fragment:u0,aomap_fragment:h0,aomap_pars_fragment:d0,batching_pars_vertex:f0,batching_vertex:p0,begin_vertex:m0,beginnormal_vertex:g0,bsdfs:_0,iridescence_fragment:x0,bumpmap_pars_fragment:v0,clipping_planes_fragment:M0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:S0,clipping_planes_vertex:b0,color_fragment:E0,color_pars_fragment:T0,color_pars_vertex:w0,color_vertex:A0,common:R0,defaultnormal_vertex:C0,displacementmap_pars_vertex:P0,displacementmap_vertex:I0,emissivemap_fragment:L0,emissivemap_pars_fragment:D0,colorspace_fragment:N0,colorspace_pars_fragment:U0,envmap_fragment:F0,envmap_common_pars_fragment:O0,envmap_pars_fragment:B0,envmap_pars_vertex:z0,envmap_physical_pars_fragment:J0,envmap_vertex:k0,fog_vertex:H0,fog_pars_vertex:G0,fog_fragment:V0,fog_pars_fragment:W0,gradientmap_pars_fragment:X0,lightmap_pars_fragment:q0,lights_lambert_fragment:Y0,lights_lambert_pars_fragment:K0,lights_pars_begin:Z0,lights_toon_fragment:$0,lights_toon_pars_fragment:Q0,lights_phong_fragment:j0,lights_phong_pars_fragment:eg,lights_physical_fragment:tg,lights_physical_pars_fragment:ng,lights_fragment_begin:ig,lights_fragment_maps:sg,lights_fragment_end:rg,lightprobes_pars_fragment:og,logdepthbuf_fragment:ag,logdepthbuf_pars_fragment:lg,logdepthbuf_pars_vertex:cg,logdepthbuf_vertex:ug,map_fragment:hg,map_pars_fragment:dg,map_particle_fragment:fg,map_particle_pars_fragment:pg,metalnessmap_fragment:mg,metalnessmap_pars_fragment:gg,morphinstance_vertex:_g,morphcolor_vertex:xg,morphnormal_vertex:vg,morphtarget_pars_vertex:Mg,morphtarget_vertex:yg,normal_fragment_begin:Sg,normal_fragment_maps:bg,normal_pars_fragment:Eg,normal_pars_vertex:Tg,normal_vertex:wg,normalmap_pars_fragment:Ag,clearcoat_normal_fragment_begin:Rg,clearcoat_normal_fragment_maps:Cg,clearcoat_pars_fragment:Pg,iridescence_pars_fragment:Ig,opaque_fragment:Lg,packing:Dg,premultiplied_alpha_fragment:Ng,project_vertex:Ug,dithering_fragment:Fg,dithering_pars_fragment:Og,roughnessmap_fragment:Bg,roughnessmap_pars_fragment:zg,shadowmap_pars_fragment:kg,shadowmap_pars_vertex:Hg,shadowmap_vertex:Gg,shadowmask_pars_fragment:Vg,skinbase_vertex:Wg,skinning_pars_vertex:Xg,skinning_vertex:qg,skinnormal_vertex:Yg,specularmap_fragment:Kg,specularmap_pars_fragment:Zg,tonemapping_fragment:Jg,tonemapping_pars_fragment:$g,transmission_fragment:Qg,transmission_pars_fragment:jg,uv_pars_fragment:e_,uv_pars_vertex:t_,uv_vertex:n_,worldpos_vertex:i_,background_vert:s_,background_frag:r_,backgroundCube_vert:o_,backgroundCube_frag:a_,cube_vert:l_,cube_frag:c_,depth_vert:u_,depth_frag:h_,distance_vert:d_,distance_frag:f_,equirect_vert:p_,equirect_frag:m_,linedashed_vert:g_,linedashed_frag:__,meshbasic_vert:x_,meshbasic_frag:v_,meshlambert_vert:M_,meshlambert_frag:y_,meshmatcap_vert:S_,meshmatcap_frag:b_,meshnormal_vert:E_,meshnormal_frag:T_,meshphong_vert:w_,meshphong_frag:A_,meshphysical_vert:R_,meshphysical_frag:C_,meshtoon_vert:P_,meshtoon_frag:I_,points_vert:L_,points_frag:D_,shadow_vert:N_,shadow_frag:U_,sprite_vert:F_,sprite_frag:O_},Ue={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},$n={basic:{uniforms:hn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:hn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:hn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:hn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:hn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:hn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:hn([Ue.points,Ue.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:hn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:hn([Ue.common,Ue.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:hn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:hn([Ue.sprite,Ue.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:hn([Ue.common,Ue.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:hn([Ue.lights,Ue.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};$n.physical={uniforms:hn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const ro={r:0,b:0,g:0},B_=new Ze,wd=new tt;wd.set(-1,0,0,0,1,0,0,0,1);function z_(s,e,t,n,i,r){const o=new Ve(0);let a=i===!0?0:1,l,c,u=null,h=0,d=null;function f(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){const M=_.backgroundBlurriness>0;S=e.get(S,M)}return S}function g(_){let S=!1;const M=f(_);M===null?m(o,a):M&&M.isColor&&(m(M,1),S=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(_,S){const M=f(S);M&&M.isCubeTexture?(c===void 0&&(c=new on(new Fi(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Rs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(B_.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wd),c.material.toneMapped=pt.getTransfer(M.colorSpace)!==bt,(u!==M||h!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new on(new an(2,2),new Vn({name:"BackgroundMaterial",uniforms:Rs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=pt.getTransfer(M.colorSpace)!==bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,S){_.getRGB(ro,vd(s)),t.buffers.color.setClear(ro.r,ro.g,ro.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,S=1){o.set(_),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:g,addToRenderList:v,dispose:p}}function k_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(C,N,W,R,P){let k=!1;const z=h(C,R,W,N);r!==z&&(r=z,c(r.object)),k=f(C,R,W,P),k&&g(C,R,W,P),P!==null&&e.update(P,s.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,M(C,N,W,R),P!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return s.createVertexArray()}function c(C){return s.bindVertexArray(C)}function u(C){return s.deleteVertexArray(C)}function h(C,N,W,R){const P=R.wireframe===!0;let k=n[N.id];k===void 0&&(k={},n[N.id]=k);const z=C.isInstancedMesh===!0?C.id:0;let V=k[z];V===void 0&&(V={},k[z]=V);let q=V[W.id];q===void 0&&(q={},V[W.id]=q);let j=q[P];return j===void 0&&(j=d(l()),q[P]=j),j}function d(C){const N=[],W=[],R=[];for(let P=0;P<t;P++)N[P]=0,W[P]=0,R[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:R,object:C,attributes:{},index:null}}function f(C,N,W,R){const P=r.attributes,k=N.attributes;let z=0;const V=W.getAttributes();for(const q in V)if(V[q].location>=0){const $=P[q];let ue=k[q];if(ue===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),$===void 0||$.attribute!==ue||ue&&$.data!==ue.data)return!0;z++}return r.attributesNum!==z||r.index!==R}function g(C,N,W,R){const P={},k=N.attributes;let z=0;const V=W.getAttributes();for(const q in V)if(V[q].location>=0){let $=k[q];$===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&($=C.instanceColor));const ue={};ue.attribute=$,$&&$.data&&(ue.data=$.data),P[q]=ue,z++}r.attributes=P,r.attributesNum=z,r.index=R}function v(){const C=r.newAttributes;for(let N=0,W=C.length;N<W;N++)C[N]=0}function m(C){p(C,0)}function p(C,N){const W=r.newAttributes,R=r.enabledAttributes,P=r.attributeDivisors;W[C]=1,R[C]===0&&(s.enableVertexAttribArray(C),R[C]=1),P[C]!==N&&(s.vertexAttribDivisor(C,N),P[C]=N)}function _(){const C=r.newAttributes,N=r.enabledAttributes;for(let W=0,R=N.length;W<R;W++)N[W]!==C[W]&&(s.disableVertexAttribArray(W),N[W]=0)}function S(C,N,W,R,P,k,z){z===!0?s.vertexAttribIPointer(C,N,W,P,k):s.vertexAttribPointer(C,N,W,R,P,k)}function M(C,N,W,R){v();const P=R.attributes,k=W.getAttributes(),z=N.defaultAttributeValues;for(const V in k){const q=k[V];if(q.location>=0){let j=P[V];if(j===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(j=C.instanceColor)),j!==void 0){const $=j.normalized,ue=j.itemSize,he=e.get(j);if(he===void 0)continue;const Q=he.buffer,ge=he.type,te=he.bytesPerElement,Te=ge===s.INT||ge===s.UNSIGNED_INT||j.gpuType===Bl;if(j.isInterleavedBufferAttribute){const me=j.data,D=me.isInterleavedBuffer===!0?me.stride:me.itemSize,ee=j.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let oe=0;oe<q.locationSize;oe++)p(q.location+oe,me.meshPerAttribute);C.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let oe=0;oe<q.locationSize;oe++)m(q.location+oe);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let oe=0;oe<q.locationSize;oe++)S(q.location+oe,ue/q.locationSize,ge,$,D*te,(ee+ue/q.locationSize*oe)*te,Te)}else{if(j.isInstancedBufferAttribute){for(let me=0;me<q.locationSize;me++)p(q.location+me,j.meshPerAttribute);C.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let me=0;me<q.locationSize;me++)m(q.location+me);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let me=0;me<q.locationSize;me++)S(q.location+me,ue/q.locationSize,ge,$,ue*te,ue/q.locationSize*me*te,Te)}}else if(z!==void 0){const $=z[V];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(q.location,$);break;case 3:s.vertexAttrib3fv(q.location,$);break;case 4:s.vertexAttrib4fv(q.location,$);break;default:s.vertexAttrib1fv(q.location,$)}}}}_()}function b(){I();for(const C in n){const N=n[C];for(const W in N){const R=N[W];for(const P in R){const k=R[P];for(const z in k)u(k[z].object),delete k[z];delete R[P]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;const N=n[C.id];for(const W in N){const R=N[W];for(const P in R){const k=R[P];for(const z in k)u(k[z].object),delete k[z];delete R[P]}}delete n[C.id]}function x(C){for(const N in n){const W=n[N];for(const R in W){const P=W[R];if(P[C.id]===void 0)continue;const k=P[C.id];for(const z in k)u(k[z].object),delete k[z];delete P[C.id]}}}function y(C){for(const N in n){const W=n[N],R=C.isInstancedMesh===!0?C.id:0,P=W[R];if(P!==void 0){for(const k in P){const z=P[k];for(const V in z)u(z[V].object),delete z[V];delete P[k]}delete W[R],Object.keys(W).length===0&&delete n[N]}}}function I(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function H_(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function G_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Bn&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){const y=x===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Tn&&x!==_n&&!y&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:M,maxSamples:b,samples:E}}function V_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ci,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const _=r?0:n,S=_*4;let M=p.clippingState||null;l.value=M,M=u(g,d,S,f);for(let b=0;b!==S;++b)M[b]=t[b];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=f;S!==v;++S,M+=4)o.copy(h[S]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}class pc extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new od(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fi(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:qi});r.uniforms.tEquirect.value=t;const o=new on(i,r),a=t.minFilter;return t.minFilter===On&&(t.minFilter=Ot),new wl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Nu=256,W_=3,X_=20,Ad=256,Rd=16,q_=3,Y_=new B,K_=new Ve;class Lo{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wl(1,10,null),this._boxMesh=new on(new Fi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=Y_}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(K_));const m=new wl(n,i,u);return m.position.copy(a),m.update(l,e),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=v,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Nu,$h(e))}_fromTexture(e,t){e.mapping===Ms||e.mapping===fr?this._setSize(e.image.length===0?Nu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Uu(e,!1,!1),n=Math.log2(e)-W_;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Uu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ms||e.mapping===fr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Fu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Z_(),this._integrationMaterial=J_());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Rd);for(let o=0;o<=n;o++){const a=Lo.lodToRoughness(o,n);if(o>n-q_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{const l=a>0?Math.log2(t)+.5*Math.log2(6/(Ad*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=$_());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}}function Uu(s,e,t){return new pc(s,{minFilter:On,generateMipmaps:e,type:vn,colorSpace:Mn,depthBuffer:t})}function Ar(s,e,t){return new Vn({name:s,uniforms:e,vertexShader:ct.cube_vert,fragmentShader:t,side:gn,blending:qi,depthTest:!1,depthWrite:!1})}function Z_(){return Ar("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ad}u

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
	`)}function J_(){return Ar("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Rd}},`

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
	`)}function $_(){return Ar("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${X_}
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
	`)}function Fu(){return Ar("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ou(){return Ar("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Q_(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===co||f===Jo)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new pc(g.height);return v.fromEquirectangularTexture(s,d),e.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,g=f===co||f===Jo,v=f===Ms||f===fr;if(g||v){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Lo(s)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const _=d.image;return g&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new Lo(s)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,f){return f===co?d.mapping=Ms:f===Jo&&(d.mapping=fr),d}function l(d){let f=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function j_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&_s("WebGLRenderer: "+n+" extension not supported."),i}}}function ex(s,e,t,n){const i={},r=new WeakMap,o=new FinalizationRegistry(g=>delete i[g]);function a(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete i[g.id],o.unregister(g);const v=r.get(g);v&&(e.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,v){return i[v.id]!==void 0||(v.addEventListener("dispose",a),i[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function u(g){const v=g.attributes;for(const m in v)e.update(v[m],s.ARRAY_BUFFER)}function h(g){const v=g.index,m=g.attributes.position;let p=0;if(m===void 0)return;const _=v!==null?v.array.length:m.array.length/3-1,S=m.count>=65535?td:ed,M=new S(Math.ceil(_/3)*6,1),b=M.array;if(v!==null){const x=v.array;p=v.version;for(let y=0,I=0;y<_;y+=3){const w=x[y+0],C=x[y+1],N=x[y+2];b[I++]=w,b[I++]=C,b[I++]=C,b[I++]=N,b[I++]=N,b[I++]=w}}else{p=m.version;for(let x=0,y=0;x<_;x+=3){const I=x+0,w=x+1,C=x+2;b[y++]=I,b[y++]=w,b[y++]=w,b[y++]=C,b[y++]=C,b[y++]=I}}M.version=p;const E=r.get(g);E&&e.remove(E),r.set(g,M)}function d(g){const v=r.get(g);if(v){const m=g.index;m!==null&&v.version<m.version&&h(g)}else h(g);return r.get(g)}function f(){for(const g in i){const v=i[g].deref();v!==void 0&&l(v)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function tx(s,e,t){let n;function i(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){s.drawElements(n,d,r,h*o),t.update(d,n,1)}function c(h,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,h*o,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];t.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function nx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ix(s,e,t){const n=new WeakMap,i=new yt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let w=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var f=w;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let b=a.attributes.position.count*M,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const x=new Float32Array(b*E*4*h),y=new Qh(x,b,E,h);y.type=_n,y.needsUpdate=!0;const I=M*4;for(let C=0;C<h;C++){const N=p[C],W=_[C],R=S[C],P=b*E*4*C;for(let k=0;k<N.count;k++){const z=k*I;g===!0&&(i.fromBufferAttribute(N,k),x[P+z+0]=i.x,x[P+z+1]=i.y,x[P+z+2]=i.z,x[P+z+3]=0),v===!0&&(i.fromBufferAttribute(W,k),x[P+z+4]=i.x,x[P+z+5]=i.y,x[P+z+6]=i.z,x[P+z+7]=0),m===!0&&(i.fromBufferAttribute(R,k),x[P+z+8]=i.x,x[P+z+9]=i.y,x[P+z+10]=i.z,x[P+z+11]=R.itemSize===4?i.w:1)}}d={count:h,texture:y,size:new _e(b,E)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function sx(s,e,t,n,i){let r=new WeakMap;function o(c){const u=i.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const rx={[Ph]:"LINEAR_TONE_MAPPING",[Ih]:"REINHARD_TONE_MAPPING",[Lh]:"CINEON_TONE_MAPPING",[Ol]:"ACES_FILMIC_TONE_MAPPING",[Nh]:"AGX_TONE_MAPPING",[Uh]:"NEUTRAL_TONE_MAPPING",[Dh]:"CUSTOM_TONE_MAPPING"};function ox(s,e,t,n,i,r){const o=new Hn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const u=new Dt;u.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ft([0,2,0,0,2,0],2));const h=new xm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new on(u,h),f=new hc(-1,1,1,-1,0,1);let g=null,v=null,m=!1,p,_=null,S=[],M=!1;this.setSize=function(b,E){o.setSize(b,E),a!==null&&a.setSize(b,E),l!==null&&l.setSize(b,E);for(let x=0;x<S.length;x++){const y=S[x];y.setSize&&y.setSize(b,E)}},this.setEffects=function(b){S=b,M=S.length>0&&S[0].isRenderPass===!0;const E=o.width,x=o.height;S.length>0&&a===null&&(a=new Hn(E,x,{type:vn,depthBuffer:!1,stencilBuffer:!1}),l=new Hn(E,x,{type:vn,depthBuffer:!1,stencilBuffer:!1}));const y=i===!0&&S.some(I=>I.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new Ts(E,x),r===!0&&(c.format=Ci,c.type=ys)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let I=0;I<S.length;I++){const w=S[I];w.setSize&&w.setSize(E,x),y&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(b,E){if(m||b.toneMapping===pi&&S.length===0)return!1;if(_=E,E!==null){const x=E.width,y=E.height;(o.width!==x||o.height!==y)&&this.setSize(x,y)}return M===!1&&b.setRenderTarget(o),p=b.toneMapping,b.toneMapping=pi,!0},this.hasRenderPass=function(){return M},this.end=function(b,E){b.toneMapping=p,m=!0;let x=o,y=a;for(let I=0;I<S.length;I++){const w=S[I];w.enabled!==!1&&(w.render(b,y,x,E),w.needsSwap!==!1&&(x=y,y=y===a?l:a))}if(g!==b.outputColorSpace||v!==b.toneMapping){g=b.outputColorSpace,v=b.toneMapping,h.defines={},pt.getTransfer(g)===bt&&(h.defines.SRGB_TRANSFER="");const I=rx[v];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(_),b.render(d,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}const Cd=new qt,Pd=new Ts(1,1),Id=new ad(1),Ld=new Qh,Dd=new hp,Nd=new od,Bu=[],zu=[],ku=new Float32Array(16),Hu=new Float32Array(9),Gu=new Float32Array(4);function Fs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Bu[i];if(r===void 0&&(r=new Float32Array(i),Bu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Yt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Kt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Wo(s,e){let t=zu[e];t===void 0&&(t=new Int32Array(e),zu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ax(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function lx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2fv(this.addr,e),Kt(t,e)}}function cx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;s.uniform3fv(this.addr,e),Kt(t,e)}}function ux(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4fv(this.addr,e),Kt(t,e)}}function hx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;Gu.set(n),s.uniformMatrix2fv(this.addr,!1,Gu),Kt(t,n)}}function dx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;Hu.set(n),s.uniformMatrix3fv(this.addr,!1,Hu),Kt(t,n)}}function fx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;ku.set(n),s.uniformMatrix4fv(this.addr,!1,ku),Kt(t,n)}}function px(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function mx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2iv(this.addr,e),Kt(t,e)}}function gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;s.uniform3iv(this.addr,e),Kt(t,e)}}function _x(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4iv(this.addr,e),Kt(t,e)}}function xx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function vx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2uiv(this.addr,e),Kt(t,e)}}function Mx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;s.uniform3uiv(this.addr,e),Kt(t,e)}}function yx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4uiv(this.addr,e),Kt(t,e)}}function Xo(s){return s.version===0&&(s.compareFunction=Kh,s.needsUpdate=!0),s}function Sx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Xo(Pd):r=Cd,t.setTexture2D(e||r,i)}function bx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Dd,i)}function Ex(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Xo(Id):r=Nd,t.setTextureCube(e||r,i)}function Tx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ld,i)}function wx(s){switch(s){case 5126:return ax;case 35664:return lx;case 35665:return cx;case 35666:return ux;case 35674:return hx;case 35675:return dx;case 35676:return fx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return _x;case 5125:return xx;case 36294:return vx;case 36295:return Mx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Tx}}function Ax(s,e){s.uniform1fv(this.addr,e)}function Rx(s,e){const t=Fs(e,this.size,2);s.uniform2fv(this.addr,t)}function Cx(s,e){const t=Fs(e,this.size,3);s.uniform3fv(this.addr,t)}function Px(s,e){const t=Fs(e,this.size,4);s.uniform4fv(this.addr,t)}function Ix(s,e){const t=Fs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Lx(s,e){const t=Fs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Dx(s,e){const t=Fs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Nx(s,e){s.uniform1iv(this.addr,e)}function Ux(s,e){s.uniform2iv(this.addr,e)}function Fx(s,e){s.uniform3iv(this.addr,e)}function Ox(s,e){s.uniform4iv(this.addr,e)}function Bx(s,e){s.uniform1uiv(this.addr,e)}function zx(s,e){s.uniform2uiv(this.addr,e)}function kx(s,e){s.uniform3uiv(this.addr,e)}function Hx(s,e){s.uniform4uiv(this.addr,e)}function Gx(s,e,t){const n=this.cache,i=e.length,r=Wo(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Xo(Pd):o=Cd;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function Vx(s,e,t){const n=this.cache,i=e.length,r=Wo(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Dd,r[o])}function Wx(s,e,t){const n=this.cache,i=e.length,r=Wo(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Xo(Id):o=Nd;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function Xx(s,e,t){const n=this.cache,i=e.length,r=Wo(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ld,r[o])}function qx(s){switch(s){case 5126:return Ax;case 35664:return Rx;case 35665:return Cx;case 35666:return Px;case 35674:return Ix;case 35675:return Lx;case 35676:return Dx;case 5124:case 35670:return Nx;case 35667:case 35671:return Ux;case 35668:case 35672:return Fx;case 35669:case 35673:return Ox;case 5125:return Bx;case 36294:return zx;case 36295:return kx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Xx}}class Yx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wx(t.type)}}class Kx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qx(t.type)}}class Zx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function Vu(s,e){s.seq.push(e),s.map[e.id]=e}function Jx(s,e,t){const n=s.name,i=n.length;for(Aa.lastIndex=0;;){const r=Aa.exec(n),o=Aa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Vu(t,c===void 0?new Yx(a,s,e):new Kx(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Zx(a),Vu(t,h)),t=h}}}class go{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Jx(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Wu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const $x=37297;let Qx=0;function jx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Xu=new tt;function ev(s){pt._getMatrix(Xu,pt.workingColorSpace,s);const e=`mat3( ${Xu.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(s)){case To:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function qu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+jx(s.getShaderSource(e),a)}else return r}function tv(s,e){const t=ev(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const nv={[Ph]:"Linear",[Ih]:"Reinhard",[Lh]:"Cineon",[Ol]:"ACESFilmic",[Nh]:"AgX",[Uh]:"Neutral",[Dh]:"Custom"};function iv(s,e){const t=nv[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oo=new B;function sv(){pt.getLuminanceCoefficients(oo);const s=oo.x.toFixed(4),e=oo.y.toFixed(4),t=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function ov(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function av(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function er(s){return s!==""}function Yu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ku(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(s){return s.replace(lv,cv)}function cv(s,e){const t=ct[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Rl(t)}const uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(s){return s.replace(uv,hv)}function hv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ju(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const dv={[ir]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function fv(s){return dv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pv={[fr]:"ENVMAP_MODE_REFRACTION"};function mv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":pv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gv={[Ch]:"ENVMAP_BLENDING_MULTIPLY",[Ef]:"ENVMAP_BLENDING_MIX",[Tf]:"ENVMAP_BLENDING_ADD"};function _v(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":gv[s.combine]||"ENVMAP_BLENDING_NONE"}function xv(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=fv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=mv(t),h=_v(t),d=rv(t),f=ov(r),g=i.createProgram();let v,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(er).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(er).join(`
`),m.length>0&&(m+=`
`)):(v=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),m=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?ct.tonemapping_pars_fragment:"",t.toneMapping!==pi?iv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,tv("linearToOutputTexel",t.outputColorSpace),sv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),o=Rl(o),o=Yu(o,t),o=Ku(o,t),a=Rl(a),a=Yu(a,t),a=Ku(a,t),o=Zu(o),a=Zu(a),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=p+v+o,S=p+m+a,M=Wu(i,i.VERTEX_SHADER,_),b=Wu(i,i.FRAGMENT_SHADER,S);i.attachShader(g,M),i.attachShader(g,b),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(w){if(s.debug.checkShaderErrors){const C=i.getProgramInfoLog(g)||"",N=i.getShaderInfoLog(M)||"",W=i.getShaderInfoLog(b)||"",R=C.trim(),P=N.trim(),k=W.trim();let z=!0,V=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,M,b);else{const q=qu(i,M,"vertex"),j=qu(i,b,"fragment");Qe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+R+`
`+q+`
`+j)}else R!==""?qe("WebGLProgram: Program Info Log:",R):(P===""||k==="")&&(V=!1);V&&(w.diagnostics={runnable:z,programLog:R,vertexShader:{log:P,prefix:v},fragmentShader:{log:k,prefix:m}})}i.deleteShader(M),i.deleteShader(b),x=new go(i,g),y=av(i,g)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(g,$x)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=b,this}let vv=0;class Mv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yv(e),t.set(e,n)),n}}class yv{constructor(e){this.id=vv++,this.code=e,this.usedTimes=0}}function Sv(s){return s===Yi||s===So||s===bo}function bv(s,e,t,n,i,r){const o=new Zl,a=new Mv,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,y,I,w,C,N){const W=w.fog,R=C.geometry,P=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||P,k),V=d[x.type];let q=n.precision;x.precision!==null&&(q=n.getMaxPrecision(x.precision),q!==x.precision&&qe("WebGLProgram.getParameters:",x.precision,"not supported, using",q,"instead."));const j=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,$=j!==void 0?j.length:0;let ue=0;R.morphAttributes.position!==void 0&&(ue=1),R.morphAttributes.normal!==void 0&&(ue=2),R.morphAttributes.color!==void 0&&(ue=3);let he,Q,ge,te;if(V){const ve=$n[V];he=ve.vertexShader,Q=ve.fragmentShader}else{he=x.vertexShader,Q=x.fragmentShader;const ve=a.getVertexShaderStage(x),it=a.getFragmentShaderStage(x);a.update(x,ve,it),ge=ve.id,te=it.id}const Te=s.getRenderTarget(),me=s.state.buffers.depth.getReversed(),D=C.isInstancedMesh===!0,ee=C.isBatchedMesh===!0,oe=!!x.map,pe=!!x.matcap,Be=!!z,se=Be&&z.isPMREMTexture===!0,Me=!!x.aoMap,xe=!!x.lightMap,Le=!!x.bumpMap&&x.wireframe===!1,Se=!!x.normalMap,ze=!!x.displacementMap,Fe=!!x.emissiveMap,$e=!!x.metalnessMap,at=!!x.roughnessMap,dt=x.anisotropy>0,G=x.clearcoat>0,Rt=x.diffuseRoughness>0,lt=x.dispersion>0,St=x.retroreflectivity>0,Pe=x.iridescence>0,Nt=x.sheen>0,Ke=x.transmission>0,Je=dt&&!!x.anisotropyMap,L=G&&!!x.clearcoatMap,T=G&&!!x.clearcoatNormalMap,K=G&&!!x.clearcoatRoughnessMap,ye=Rt&&!!x.diffuseRoughnessMap,de=Pe&&!!x.iridescenceMap,we=Pe&&!!x.iridescenceThicknessMap,be=Nt&&!!x.sheenColorMap,ae=Nt&&!!x.sheenRoughnessMap,re=!!x.specularMap,Ce=!!x.specularColorMap,F=!!x.specularIntensityMap,ce=Ke&&!!x.transmissionMap,ie=Ke&&!!x.thicknessMap,Ie=!!x.gradientMap,Ee=!!x.alphaMap,Re=x.alphaTest>0,We=!!x.alphaHash,O=!!x.extensions;let Y=pi;x.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Y=s.toneMapping);const fe=se?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Ae={shaderID:V,shaderType:x.type,shaderName:x.name,vertexShader:he,fragmentShader:Q,defines:x.defines,customVertexShaderID:ge,customFragmentShaderID:te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:q,batching:ee,batchingColor:ee&&C._colorsTexture!==null,instancing:D,instancingColor:D&&C.instanceColor!==null,instancingMorph:D&&C.morphTexture!==null,outputColorSpace:Te===null?s.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:oe,matcap:pe,envMap:Be,envMapMode:Be&&z.mapping,envMapPMREM:se,envMapMaxLod:se?fe.length-1:null,envMapSize:se?fe[0].width:null,aoMap:Me,lightMap:xe,bumpMap:Le,normalMap:Se,displacementMap:ze,emissiveMap:Fe,normalMapObjectSpace:Se&&x.normalMapType===Lf,normalMapTangentSpace:Se&&x.normalMapType===Ml,packedNormalMap:Se&&x.normalMapType===Ml&&Sv(x.normalMap.format),metalnessMap:$e,roughnessMap:at,anisotropy:dt,anisotropyMap:Je,clearcoat:G,clearcoatMap:L,clearcoatNormalMap:T,clearcoatRoughnessMap:K,diffuseRoughness:Rt,diffuseRoughnessMap:ye,dispersion:lt,retroreflection:St,iridescence:Pe,iridescenceMap:de,iridescenceThicknessMap:we,sheen:Nt,sheenColorMap:be,sheenRoughnessMap:ae,specularMap:re,specularColorMap:Ce,specularIntensityMap:F,transmission:Ke,transmissionMap:ce,thicknessMap:ie,gradientMap:Ie,opaque:x.transparent===!1&&x.blending===sr&&x.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Re,alphaHash:We,combine:x.combine,mapUv:oe&&f(x.map.channel),aoMapUv:Me&&f(x.aoMap.channel),lightMapUv:xe&&f(x.lightMap.channel),bumpMapUv:Le&&f(x.bumpMap.channel),normalMapUv:Se&&f(x.normalMap.channel),displacementMapUv:ze&&f(x.displacementMap.channel),emissiveMapUv:Fe&&f(x.emissiveMap.channel),metalnessMapUv:$e&&f(x.metalnessMap.channel),roughnessMapUv:at&&f(x.roughnessMap.channel),anisotropyMapUv:Je&&f(x.anisotropyMap.channel),clearcoatMapUv:L&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:de&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:we&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:be&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:ae&&f(x.sheenRoughnessMap.channel),specularMapUv:re&&f(x.specularMap.channel),specularColorMapUv:Ce&&f(x.specularColorMap.channel),specularIntensityMapUv:F&&f(x.specularIntensityMap.channel),transmissionMapUv:ce&&f(x.transmissionMap.channel),thicknessMapUv:ie&&f(x.thicknessMap.channel),alphaMapUv:Ee&&f(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Se||dt),vertexNormals:!!R.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!R.attributes.uv&&(oe||Ee),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||R.attributes.normal===void 0&&Se===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ue,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:N.filter(ve=>ve.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Y,decodeVideoTexture:oe&&x.map.isVideoTexture===!0&&pt.getTransfer(x.map.colorSpace)===bt,decodeVideoTextureEmissive:Fe&&x.emissiveMap.isVideoTexture===!0&&pt.getTransfer(x.emissiveMap.colorSpace)===bt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===mn,flipSided:x.side===gn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:O&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(O&&x.extensions.multiDraw===!0||ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function v(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)y.push(I),y.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(m(y,x),p(y,x),y.push(s.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function m(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapPMREM),x.push(y.envMapMaxLod),x.push(y.envMapSize),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.diffuseRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.numLightProbeGrids),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function p(x,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function _(x){const y=d[x.type];let I;if(y){const w=$n[y];I=Md.clone(w.uniforms)}else I=x.uniforms;return I}function S(x,y){let I=u.get(y);return I!==void 0?++I.usedTimes:(I=new xv(s,y,x,i),c.push(I),u.set(y,I)),I}function M(x){if(--x.usedTimes===0){const y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function E(){a.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:_,acquireProgram:S,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:E}}function Ev(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Tv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function $u(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,v,m,p){let _=s[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},s[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.materialVariant=o(d),_.groupOrder=v,_.renderOrder=d.renderOrder,_.z=m,_.group=p),e++,_}function l(d,f,g,v,m,p,_){_.reversedDepth===!0&&(m=-m);const S=a(d,f,g,v,m,p);g.transmission>0?n.push(S):g.transparent===!0?i.push(S):t.push(S)}function c(d,f,g,v,m,p){const _=a(d,f,g,v,m,p);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function u(d,f){t.length>1&&t.sort(d||Tv),n.length>1&&n.sort(f||$u),i.length>1&&i.sort(f||$u)}function h(){for(let d=e,f=s.length;d<f;d++){const g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:h,sort:u}}function wv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Qu,s.set(n,[o])):i>=r.length?(o=new Qu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Av(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Ve};break;case"SpotLight":t={position:new B,direction:new B,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function Rv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Cv=0;function Pv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Iv(s){const e=new Av,t=Rv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,r=new Ze,o=new Ze;function a(c){let u=0,h=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,S=0,M=0,b=0,E=0,x=0,y=0,I=0,w=0;c.sort(Pv);for(let N=0,W=c.length;N<W;N++){const R=c[N],P=R.color,k=R.intensity,z=R.distance;let V=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Yi?V=R.shadow.map.texture:V=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=P.r*k,h+=P.g*k,d+=P.b*k;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],k);w++}else if(R.isSunLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,$=t.get(R);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=$,n.sunShadowMap[g]=V;const ue=j.getViewportCount();for(let he=0;he<ue;he++)n.sunShadowMatrix[v+he]=j.getMatrix(he),n.sunShadowCascade[v+he]=j._cascadeData[he];v+=ue,g++}n.sun[f]=q,f++}else if(R.isDirectionalLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,$=t.get(R);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=V,n.directionalShadowMatrix[m]=R.shadow.matrix,b++}n.directional[m]=q,m++}else if(R.isSpotLight){const q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(P).multiplyScalar(k),q.distance=z,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[_]=q;const j=R.shadow;if(R.map&&(n.spotLightMap[y]=R.map,y++,j.updateMatrices(R),R.castShadow&&I++),n.spotLightMatrix[_]=j.matrix,R.castShadow){const $=t.get(R);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=V,x++}_++}else if(R.isRectAreaLight){const q=e.get(R);q.color.copy(P).multiplyScalar(k),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[S]=q,S++}else if(R.isPointLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const j=R.shadow,$=t.get(R);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,$.shadowCameraNear=j.camera.near,$.shadowCameraFar=j.camera.far,n.pointShadow[p]=$,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=R.shadow.matrix,E++}n.point[p]=q,p++}else if(R.isHemisphereLight){const q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(k),q.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[M]=q,M++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==p||C.spotLength!==_||C.rectAreaLength!==S||C.hemiLength!==M||C.numSunShadows!==g||C.numDirectionalShadows!==b||C.numPointShadows!==E||C.numSpotShadows!==x||C.numSpotMaps!==y||C.numLightProbes!==w)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=S,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+y-I,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=w,C.sunLength=f,C.directionalLength=m,C.pointLength=p,C.spotLength=_,C.rectAreaLength=S,C.hemiLength=M,C.numSunShadows=g,C.numDirectionalShadows=b,C.numPointShadows=E,C.numSpotShadows=x,C.numSpotMaps=y,C.numLightProbes=w,n.version=Cv++)}function l(c,u){let h=0,d=0,f=0,g=0,v=0,m=0;const p=u.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){const M=c[_];if(M.isSunLight){const b=n.sun[h];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),h++}else if(M.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),d++}else if(M.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function ju(s){const e=new Iv(s),t=[],n=[],i=[];function r(h){u.camera=h,t.length=0,n.length=0,i.length=0}function o(h){h.isLightProbeGrid?i.push(h):t.push(h)}function a(h){n.push(h)}function l(){e.setup(t),i.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Lv(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new ju(s),e.set(i,[a])):r>=o.length?(a=new ju(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nv=`uniform sampler2D shadow_pass;
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
}`,Uv=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Fv=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],eh=new Ze,qs=new B,Ra=new B;function Ov(s,e,t){let n=new Es;const i=new _e,r=new _e,o=new yt,a=new vm,l=new Mm,c={},u=t.maxTextureSize,h={[Di]:gn,[gn]:Di,[mn]:mn},d=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:Dv,fragmentShader:Nv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new on(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ir;let p=this.type;this.render=function(E,x,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===rf&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ir);const I=s.getRenderTarget(),w=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),N=s.state;N.setBlending(qi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const W=p!==this.type;W&&x.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(P=>P.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,P=E.length;R<P;R++){const k=E[R],z=k.shadow;if(z===void 0){qe("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const V=z.getFrameExtents();i.multiply(V),r.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/V.x),i.x=r.x*V.x,z.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/V.y),i.y=r.y*V.y,z.mapSize.y=r.y));const q=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=q,z.map===null||W===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Js){if(k.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Hn(i.x,i.y,{format:Yi,type:vn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),z.map.texture.name=k.name+".shadowMap",z.map.depthTexture=new Ts(i.x,i.y,_n),z.map.depthTexture.name=k.name+".shadowMapDepth",z.map.depthTexture.format=Ni,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Xt,z.map.depthTexture.magFilter=Xt}else k.isPointLight?(z.map=new pc(i.x),z.map.depthTexture=new ad(i.x,Qn)):(z.map=new Hn(i.x,i.y),z.map.depthTexture=new Ts(i.x,i.y,Qn)),z.map.depthTexture.name=k.name+".shadowMap",z.map.depthTexture.format=Ni,this.type===ir?(z.map.depthTexture.compareFunction=q?Yh:qh,z.map.depthTexture.minFilter=Ot,z.map.depthTexture.magFilter=Ot):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Xt,z.map.depthTexture.magFilter=Xt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);const j=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();k.isPointLight!==!0&&z.updateMatrices(k,y);const $=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:y.layers;for(let ue=0;ue<j;ue++){const he=z.getCamera(ue);if(k.isPointLight){const Q=z.camera,ge=z.matrix,te=k.distance||Q.far;te!==Q.far&&(Q.far=te,Q.updateProjectionMatrix()),qs.setFromMatrixPosition(k.matrixWorld),Q.position.copy(qs),Ra.copy(Q.position),Ra.add(Uv[ue]),Q.up.copy(Fv[ue]),Q.lookAt(Ra),Q.updateMatrixWorld(),ge.makeTranslation(-qs.x,-qs.y,-qs.z),eh.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),z._frustum.setFromProjectionMatrix(eh,Q.coordinateSystem,Q.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,ue),s.clear();else{ue===0&&(s.setRenderTarget(z.map),s.clear());const Q=z.getViewport(ue);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),N.viewport(o)}n=z.getFrustum(ue),M(x,y,he,k,$,this.type)}z.isPointLightShadow!==!0&&this.type===Js&&_(z,y),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(I,w,C)};function _(E,x){const y=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Hn(i.x,i.y,{format:Yi,type:vn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(x,null,y,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(x,null,y,f,v,null)}function S(E,x,y,I){let w=null;const C=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)w=C;else if(w=y.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const N=w.uuid,W=x.uuid;let R=c[N];R===void 0&&(R={},c[N]=R);let P=R[W];P===void 0&&(P=w.clone(),R[W]=P,x.addEventListener("dispose",b)),w=P}if(w.visible=x.visible,w.wireframe=x.wireframe,I===Js?w.side=x.shadowSide!==null?x.shadowSide:x.side:w.side=x.shadowSide!==null?x.shadowSide:h[x.side],w.alphaMap=x.alphaMap,w.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,w.map=x.map,w.clipShadows=x.clipShadows,w.clippingPlanes=x.clippingPlanes,w.clipIntersection=x.clipIntersection,w.displacementMap=x.displacementMap,w.displacementScale=x.displacementScale,w.displacementBias=x.displacementBias,w.wireframeLinewidth=x.wireframeLinewidth,w.linewidth=x.linewidth,y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const N=s.properties.get(w);N.light=y}return w}function M(E,x,y,I,w,C){if(E.visible===!1)return;if(E.layers.test(w)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Js)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const R=e.update(E),P=E.material;if(Array.isArray(P)){const k=R.groups;for(let z=0,V=k.length;z<V;z++){const q=k[z],j=P[q.materialIndex];if(j&&j.visible){const $=S(E,j,I,C);E.onBeforeShadow(s,E,x,y,R,$,q),s.renderBufferDirect(y,null,R,$,E,q),E.onAfterShadow(s,E,x,y,R,$,q)}}}else if(P.visible){const k=S(E,P,I,C);E.onBeforeShadow(s,E,x,y,R,k,null),s.renderBufferDirect(y,null,R,k,E,null),E.onAfterShadow(s,E,x,y,R,k,null)}}const W=E.children;for(let R=0,P=W.length;R<P;R++)M(W[R],x,y,I,w,C)}function b(E){E.target.removeEventListener("dispose",b);for(const y in c){const I=c[y],w=E.target.uuid;w in I&&(I[w].dispose(),delete I[w])}}}function Bv(s,e){function t(){let F=!1;const ce=new yt;let ie=null;const Ie=new yt(0,0,0,0);return{setMask:function(Ee){ie!==Ee&&!F&&(s.colorMask(Ee,Ee,Ee,Ee),ie=Ee)},setLocked:function(Ee){F=Ee},setClear:function(Ee,Re,We,O,Y){Y===!0&&(Ee*=O,Re*=O,We*=O),ce.set(Ee,Re,We,O),Ie.equals(ce)===!1&&(s.clearColor(Ee,Re,We,O),Ie.copy(ce))},reset:function(){F=!1,ie=null,Ie.set(-1,0,0,0)}}}function n(){let F=!1,ce=!1,ie=null,Ie=null,Ee=null;return{setReversed:function(Re){if(ce!==Re){const We=e.get("EXT_clip_control");Re?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),ce=Re;const O=Ee;Ee=null,this.setClear(O)}},getReversed:function(){return ce},setTest:function(Re){Re?me(s.DEPTH_TEST):D(s.DEPTH_TEST)},setMask:function(Re){ie!==Re&&!F&&(s.depthMask(Re),ie=Re)},setFunc:function(Re){if(ce&&(Re=Wf[Re]),Ie!==Re){switch(Re){case Fa:s.depthFunc(s.NEVER);break;case Oa:s.depthFunc(s.ALWAYS);break;case Ba:s.depthFunc(s.LESS);break;case dr:s.depthFunc(s.LEQUAL);break;case za:s.depthFunc(s.EQUAL);break;case ka:s.depthFunc(s.GEQUAL);break;case Ha:s.depthFunc(s.GREATER);break;case Ga:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=Re}},setLocked:function(Re){F=Re},setClear:function(Re){Ee!==Re&&(Ee=Re,ce&&(Re=1-Re),s.clearDepth(Re))},reset:function(){F=!1,ie=null,Ie=null,Ee=null,ce=!1}}}function i(){let F=!1,ce=null,ie=null,Ie=null,Ee=null,Re=null,We=null,O=null,Y=null;return{setTest:function(fe){F||(fe?me(s.STENCIL_TEST):D(s.STENCIL_TEST))},setMask:function(fe){ce!==fe&&!F&&(s.stencilMask(fe),ce=fe)},setFunc:function(fe,Ae,ve){(ie!==fe||Ie!==Ae||Ee!==ve)&&(s.stencilFunc(fe,Ae,ve),ie=fe,Ie=Ae,Ee=ve)},setOp:function(fe,Ae,ve){(Re!==fe||We!==Ae||O!==ve)&&(s.stencilOp(fe,Ae,ve),Re=fe,We=Ae,O=ve)},setLocked:function(fe){F=fe},setClear:function(fe){Y!==fe&&(s.clearStencil(fe),Y=fe)},reset:function(){F=!1,ce=null,ie=null,Ie=null,Ee=null,Re=null,We=null,O=null,Y=null}}}const r=new t,o=new n,a=new i;let l={};const c=new WeakMap;let u={},h={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,_=null,S=null,M=null,b=null,E=null,x=null,y=new Ve(0,0,0),I=0,w=!1,C=null,N=null,W=null,R=null,P=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,V=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=V>=2);let j=null,$={};const ue=s.getParameter(s.SCISSOR_BOX),he=s.getParameter(s.VIEWPORT),Q=new yt().fromArray(ue),ge=new yt().fromArray(he);function te(F,ce,ie,Ie){const Ee=new Uint8Array(4),Re=s.createTexture();s.bindTexture(F,Re),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<ie;We++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(ce+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return Re}const Te={};Te[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(s.DEPTH_TEST),o.setFunc(dr),Le(!1),Se(Pc),me(s.CULL_FACE),Me(qi);function me(F){u[F]!==!0&&(s.enable(F),u[F]=!0)}function D(F){u[F]!==!1&&(s.disable(F),u[F]=!1)}function ee(F,ce){return d[F]!==ce?(s.bindFramebuffer(F,ce),d[F]=ce,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ce),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function oe(F,ce){let ie=g,Ie=!1;if(F){ie=f.get(ce),ie===void 0&&(ie=[],f.set(ce,ie));const Ee=F.textures;if(ie.length!==Ee.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let Re=0,We=Ee.length;Re<We;Re++)ie[Re]=s.COLOR_ATTACHMENT0+Re;ie.length=Ee.length,Ie=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(ie)}function pe(F){return v!==F?(s.useProgram(F),v=F,!0):!1}const Be={[fs]:s.FUNC_ADD,[af]:s.FUNC_SUBTRACT,[lf]:s.FUNC_REVERSE_SUBTRACT};Be[cf]=s.MIN,Be[uf]=s.MAX;const se={[hf]:s.ZERO,[df]:s.ONE,[ff]:s.SRC_COLOR,[Ah]:s.SRC_ALPHA,[vf]:s.SRC_ALPHA_SATURATE,[_f]:s.DST_COLOR,[mf]:s.DST_ALPHA,[pf]:s.ONE_MINUS_SRC_COLOR,[Rh]:s.ONE_MINUS_SRC_ALPHA,[xf]:s.ONE_MINUS_DST_COLOR,[gf]:s.ONE_MINUS_DST_ALPHA,[Mf]:s.CONSTANT_COLOR,[yf]:s.ONE_MINUS_CONSTANT_COLOR,[Sf]:s.CONSTANT_ALPHA,[bf]:s.ONE_MINUS_CONSTANT_ALPHA};function Me(F,ce,ie,Ie,Ee,Re,We,O,Y,fe){if(F===qi){m===!0&&(D(s.BLEND),m=!1);return}if(m===!1&&(me(s.BLEND),m=!0),F!==of){if(F!==p||fe!==w){if((_!==fs||b!==fs)&&(s.blendEquation(s.FUNC_ADD),_=fs,b=fs),fe)switch(F){case sr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ic:s.blendFunc(s.ONE,s.ONE);break;case Lc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Qe("WebGLState: Invalid blending: ",F);break}else switch(F){case sr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ic:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Lc:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dc:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",F);break}S=null,M=null,E=null,x=null,y.set(0,0,0),I=0,p=F,w=fe}return}Ee=Ee||ce,Re=Re||ie,We=We||Ie,(ce!==_||Ee!==b)&&(s.blendEquationSeparate(Be[ce],Be[Ee]),_=ce,b=Ee),(ie!==S||Ie!==M||Re!==E||We!==x)&&(s.blendFuncSeparate(se[ie],se[Ie],se[Re],se[We]),S=ie,M=Ie,E=Re,x=We),(O.equals(y)===!1||Y!==I)&&(s.blendColor(O.r,O.g,O.b,Y),y.copy(O),I=Y),p=F,w=!1}function xe(F,ce){F.side===mn?D(s.CULL_FACE):me(s.CULL_FACE);let ie=F.side===gn;ce&&(ie=!ie),Le(ie),F.blending===sr&&F.transparent===!1?Me(qi):Me(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Ie=F.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Fe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):D(s.SAMPLE_ALPHA_TO_COVERAGE)}function Le(F){C!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),C=F)}function Se(F){F!==nf?(me(s.CULL_FACE),F!==N&&(F===Pc?s.cullFace(s.BACK):F===sf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):D(s.CULL_FACE),N=F}function ze(F){F!==W&&(z&&s.lineWidth(F),W=F)}function Fe(F,ce,ie){F?(me(s.POLYGON_OFFSET_FILL),(R!==ce||P!==ie)&&(R=ce,P=ie,o.getReversed()&&(ce=-ce,ie=-ie),s.polygonOffset(ce,ie))):D(s.POLYGON_OFFSET_FILL)}function $e(F){F?me(s.SCISSOR_TEST):D(s.SCISSOR_TEST)}function at(F){F===void 0&&(F=s.TEXTURE0+k-1),j!==F&&(s.activeTexture(F),j=F)}function dt(F,ce,ie){ie===void 0&&(j===null?ie=s.TEXTURE0+k-1:ie=j);let Ie=$[ie];Ie===void 0&&(Ie={type:void 0,texture:void 0},$[ie]=Ie),(Ie.type!==F||Ie.texture!==ce)&&(j!==ie&&(s.activeTexture(ie),j=ie),s.bindTexture(F,ce||Te[F]),Ie.type=F,Ie.texture=ce)}function G(){const F=$[j];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Rt(){try{s.compressedTexImage2D(...arguments)}catch(F){Qe("WebGLState:",F)}}function lt(){try{s.compressedTexImage3D(...arguments)}catch(F){Qe("WebGLState:",F)}}function St(){try{s.texSubImage2D(...arguments)}catch(F){Qe("WebGLState:",F)}}function Pe(){try{s.texSubImage3D(...arguments)}catch(F){Qe("WebGLState:",F)}}function Nt(){try{s.compressedTexSubImage2D(...arguments)}catch(F){Qe("WebGLState:",F)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(F){Qe("WebGLState:",F)}}function Je(){try{s.texStorage2D(...arguments)}catch(F){Qe("WebGLState:",F)}}function L(){try{s.texStorage3D(...arguments)}catch(F){Qe("WebGLState:",F)}}function T(){try{s.texImage2D(...arguments)}catch(F){Qe("WebGLState:",F)}}function K(){try{s.texImage3D(...arguments)}catch(F){Qe("WebGLState:",F)}}function ye(F){return h[F]!==void 0?h[F]:s.getParameter(F)}function de(F,ce){h[F]!==ce&&(s.pixelStorei(F,ce),h[F]=ce)}function we(F){Q.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Q.copy(F))}function be(F){ge.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),ge.copy(F))}function ae(F,ce){let ie=c.get(ce);ie===void 0&&(ie=new WeakMap,c.set(ce,ie));let Ie=ie.get(F);Ie===void 0&&(Ie=s.getUniformBlockIndex(ce,F.name),s.uniformBlockBinding(ce,Ie,Ie),ie.set(F,Ie))}function re(F,ce,ie){const Ee=c.get(ce).get(F);l[Ee]!==ie&&(s.bindBufferBase(s.UNIFORM_BUFFER,Ee,ie),l[Ee]=ie)}function Ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},h={},j=null,$={},d={},l={},f=new WeakMap,g=[],v=null,m=!1,p=null,_=null,S=null,M=null,b=null,E=null,x=null,y=new Ve(0,0,0),I=0,w=!1,C=null,N=null,W=null,R=null,P=null,Q.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:D,bindFramebuffer:ee,drawBuffers:oe,useProgram:pe,setBlending:Me,setMaterial:xe,setFlipSided:Le,setCullFace:Se,setLineWidth:ze,setPolygonOffset:Fe,setScissorTest:$e,activeTexture:at,bindTexture:dt,unbindTexture:G,compressedTexImage2D:Rt,compressedTexImage3D:lt,texImage2D:T,texImage3D:K,pixelStorei:de,getParameter:ye,updateUBOMapping:ae,uniformBlockBinding:re,texStorage2D:Je,texStorage3D:L,texSubImage2D:St,texSubImage3D:Pe,compressedTexSubImage2D:Nt,compressedTexSubImage3D:Ke,scissor:we,viewport:be,reset:Ce}}function zv(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,u=new WeakMap,h=new Set;let d;const f=new WeakMap,g=new Set,v=new FinalizationRegistry(L=>g.delete(L));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,T){return m?new OffscreenCanvas(L,T):xr("canvas")}function _(L,T,K){let ye=1;const de=Je(L);if((de.width>K||de.height>K)&&(ye=K/Math.max(de.width,de.height)),ye<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const we=Math.floor(ye*de.width),be=Math.floor(ye*de.height);d===void 0&&(d=p(we,be));const ae=T?p(we,be):d;return ae.width=we,ae.height=be,ae.getContext("2d").drawImage(L,0,0,we,be),qe("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+we+"x"+be+")."),ae}else return"data"in L&&qe("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),L;return L}function S(L){return L.generateMipmaps}function M(L){s.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(L,T,K,ye,de,we=!1){if(L!==null){if(s[L]!==void 0)return s[L];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let be;ye&&(be=e.get("EXT_texture_norm16"),be||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=T;if(T===s.RED&&(K===s.FLOAT&&(ae=s.R32F),K===s.HALF_FLOAT&&(ae=s.R16F),K===s.UNSIGNED_BYTE&&(ae=s.R8),K===s.UNSIGNED_SHORT&&be&&(ae=be.R16_EXT),K===s.SHORT&&be&&(ae=be.R16_SNORM_EXT)),T===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ae=s.R8UI),K===s.UNSIGNED_SHORT&&(ae=s.R16UI),K===s.UNSIGNED_INT&&(ae=s.R32UI),K===s.BYTE&&(ae=s.R8I),K===s.SHORT&&(ae=s.R16I),K===s.INT&&(ae=s.R32I)),T===s.RG&&(K===s.FLOAT&&(ae=s.RG32F),K===s.HALF_FLOAT&&(ae=s.RG16F),K===s.UNSIGNED_BYTE&&(ae=s.RG8),K===s.UNSIGNED_SHORT&&be&&(ae=be.RG16_EXT),K===s.SHORT&&be&&(ae=be.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(ae=s.RG8UI),K===s.UNSIGNED_SHORT&&(ae=s.RG16UI),K===s.UNSIGNED_INT&&(ae=s.RG32UI),K===s.BYTE&&(ae=s.RG8I),K===s.SHORT&&(ae=s.RG16I),K===s.INT&&(ae=s.RG32I)),T===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(ae=s.RGB8UI),K===s.UNSIGNED_SHORT&&(ae=s.RGB16UI),K===s.UNSIGNED_INT&&(ae=s.RGB32UI),K===s.BYTE&&(ae=s.RGB8I),K===s.SHORT&&(ae=s.RGB16I),K===s.INT&&(ae=s.RGB32I)),T===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(ae=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(ae=s.RGBA16UI),K===s.UNSIGNED_INT&&(ae=s.RGBA32UI),K===s.BYTE&&(ae=s.RGBA8I),K===s.SHORT&&(ae=s.RGBA16I),K===s.INT&&(ae=s.RGBA32I)),T===s.RGB&&(K===s.UNSIGNED_SHORT&&be&&(ae=be.RGB16_EXT),K===s.SHORT&&be&&(ae=be.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(ae=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(ae=s.R11F_G11F_B10F)),T===s.RGBA){const re=we?To:pt.getTransfer(de);K===s.FLOAT&&(ae=s.RGBA32F),K===s.HALF_FLOAT&&(ae=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ae=re===bt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&be&&(ae=be.RGBA16_EXT),K===s.SHORT&&be&&(ae=be.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)}return(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function x(L,T){let K;return L?T===null||T===Qn||T===ys?K=s.DEPTH24_STENCIL8:T===_n?K=s.DEPTH32F_STENCIL8:T===pr&&(K=s.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qn||T===ys?K=s.DEPTH_COMPONENT24:T===_n?K=s.DEPTH_COMPONENT32F:T===pr&&(K=s.DEPTH_COMPONENT16),K}function y(L,T){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Xt&&L.minFilter!==Ot?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function I(L){const T=new WeakRef(L);n.get(L).__ref=T,g.add(T),v.register(L,T,T)}function w(L){const T=n.get(L).__ref;T!==void 0&&(g.delete(T),v.unregister(T))}function C(L){W(L.target)}function N(L){R(L.target)}function W(L){L.removeEventListener("dispose",C),w(L),k(L),L.isVideoTexture&&u.delete(L),L.isHTMLTexture&&h.delete(L)}function R(L){L.removeEventListener("dispose",N),w(L),V(L)}function P(){for(const L of g){const T=L.deref();T!==void 0&&(T.isRenderTarget===!0?R(T):W(T))}g.clear(),h.clear()}function k(L){const T=n.get(L);if(T.__webglInit===void 0)return;const K=L.source,ye=f.get(K);if(ye){const de=ye[T.__cacheKey];de.usedTimes--,de.usedTimes===0&&z(L),Object.keys(ye).length===0&&f.delete(K)}n.remove(L)}function z(L){const T=n.get(L);s.deleteTexture(T.__webglTexture);const K=L.source,ye=f.get(K);delete ye[T.__cacheKey],o.memory.textures--}function V(L){const T=n.get(L);T.__depthDisposeCallback&&T.__depthDisposeCallback();const K=L.depthTexture;if(K&&K.renderTarget===L&&W(K),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let we=0;we<T.__webglFramebuffer[de].length;we++)s.deleteFramebuffer(T.__webglFramebuffer[de][we]);else s.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)s.deleteFramebuffer(T.__webglFramebuffer[de]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ye=L.textures;for(let de=0,we=ye.length;de<we;de++){const be=n.get(ye[de]);be.__webglTexture&&(s.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(ye[de])}n.remove(L)}let q=0;function j(){q=0}function $(){return q}function ue(L){q=L}function he(){const L=q;return L>=i.maxTextures&&qe("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),q+=1,L}function Q(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.mipmapsAutoUpdate),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ge(L,T){const K=n.get(L);if(L.isVideoTexture&&Nt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&K.__version!==L.version){const ye=L.image;if(ye===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(K,L,T);return}}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+T)}function te(L,T){const K=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){xe(K,L,T);return}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+T)}function Te(L,T){const K=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){xe(K,L,T);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+T)}function me(L,T){const K=n.get(L);if(L.version>0&&K.__version!==L.version){Le(K,L,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+T)}const D={[_i]:s.REPEAT,[Pn]:s.CLAMP_TO_EDGE,[yo]:s.MIRRORED_REPEAT},ee={[Xt]:s.NEAREST,[Oh]:s.NEAREST_MIPMAP_NEAREST,[$s]:s.NEAREST_MIPMAP_LINEAR,[Ot]:s.LINEAR,[uo]:s.LINEAR_MIPMAP_NEAREST,[On]:s.LINEAR_MIPMAP_LINEAR},oe={[Nf]:s.NEVER,[Kh]:s.ALWAYS,[Uf]:s.LESS,[qh]:s.LEQUAL,[Ff]:s.EQUAL,[Yh]:s.GEQUAL,[Of]:s.GREATER,[Bf]:s.NOTEQUAL};function pe(L,T){if(T.type===_n&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ot||T.magFilter===uo||T.magFilter===$s||T.magFilter===On||T.minFilter===Ot||T.minFilter===uo||T.minFilter===$s||T.minFilter===On)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,D[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,D[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,D[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ee[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ee[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,oe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Xt||T.minFilter!==$s&&T.minFilter!==On||T.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Be(L,T){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",C),I(T));const ye=T.source;let de=f.get(ye);de===void 0&&(de={},f.set(ye,de));const we=Q(T);if(we!==L.__cacheKey){de[we]===void 0&&(de[we]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,K=!0),de[we].usedTimes++;const be=de[L.__cacheKey];be!==void 0&&(de[L.__cacheKey].usedTimes--,be.usedTimes===0&&z(T)),L.__cacheKey=we,L.__webglTexture=de[we].texture}return K}function se(L,T,K){return Math.floor(Math.floor(L/K)/T)}function Me(L,T,K,ye){const we=L.updateRanges;if(we.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,K,ye,T.data);else{we.sort((F,ce)=>F.start-ce.start);let be=0;for(let F=1;F<we.length;F++){const ce=we[be],ie=we[F],Ie=ce.start+ce.count,Ee=se(ie.start,T.width,4),Re=se(ce.start,T.width,4);ie.start<=Ie+1&&Ee===Re&&se(ie.start+ie.count-1,T.width,4)===Ee?ce.count=Math.max(ce.count,ie.start+ie.count-ce.start):(++be,we[be]=ie)}we.length=be+1;const ae=t.getParameter(s.UNPACK_ROW_LENGTH),re=t.getParameter(s.UNPACK_SKIP_PIXELS),Ce=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let F=0,ce=we.length;F<ce;F++){const ie=we[F],Ie=Math.floor(ie.start/4),Ee=Math.ceil(ie.count/4),Re=Ie%T.width,We=Math.floor(Ie/T.width),O=Ee,Y=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(s.UNPACK_SKIP_ROWS,We),t.texSubImage2D(s.TEXTURE_2D,0,Re,We,O,Y,K,ye,T.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ae),t.pixelStorei(s.UNPACK_SKIP_PIXELS,re),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function xe(L,T,K){let ye=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ye=s.TEXTURE_3D);const de=Be(L,T),we=T.source;t.bindTexture(ye,L.__webglTexture,s.TEXTURE0+K);const be=n.get(we);if(we.version!==be.__version||de===!0){if(t.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Y=pt.getPrimaries(pt.workingColorSpace),fe=T.colorSpace===Ri?null:pt.getPrimaries(T.colorSpace),Ae=T.colorSpace===Ri||Y===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let re=_(T.image,!1,i.maxTextureSize);re=Ke(T,re);const Ce=r.convert(T.format,T.colorSpace),F=r.convert(T.type);let ce=E(T.internalFormat,Ce,F,T.normalized,T.colorSpace,T.isVideoTexture);pe(ye,T);let ie;const Ie=T.mipmaps,Ee=T.isVideoTexture!==!0,Re=be.__version===void 0||de===!0,We=we.dataReady,O=y(T,re);if(T.isDepthTexture)ce=x(T.format===Ci,T.type),Re&&(Ee?t.texStorage2D(s.TEXTURE_2D,1,ce,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,ce,re.width,re.height,0,Ce,F,null));else if(T.isDataTexture)if(Ie.length>0){Ee&&Re&&t.texStorage2D(s.TEXTURE_2D,O,ce,Ie[0].width,Ie[0].height);for(let Y=0,fe=Ie.length;Y<fe;Y++)ie=Ie[Y],Ee?We&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ie.width,ie.height,Ce,F,ie.data):t.texImage2D(s.TEXTURE_2D,Y,ce,ie.width,ie.height,0,Ce,F,ie.data);T.generateMipmaps=!1}else Ee?(Re&&t.texStorage2D(s.TEXTURE_2D,O,ce,re.width,re.height),We&&Me(T,re,Ce,F)):t.texImage2D(s.TEXTURE_2D,0,ce,re.width,re.height,0,Ce,F,re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ee&&Re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,O,ce,Ie[0].width,Ie[0].height,re.depth);for(let Y=0,fe=Ie.length;Y<fe;Y++)if(ie=Ie[Y],T.format!==Bn)if(Ce!==null)if(Ee){if(We)if(T.layerUpdates.size>0){const Ae=Du(ie.width,ie.height,T.format,T.type);for(const ve of T.layerUpdates){const it=ie.data.subarray(ve*Ae/ie.data.BYTES_PER_ELEMENT,(ve+1)*Ae/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ve,ie.width,ie.height,1,Ce,it)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ie.width,ie.height,re.depth,Ce,ie.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,ce,ie.width,ie.height,re.depth,0,ie.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?We&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ie.width,ie.height,re.depth,Ce,F,ie.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,ce,ie.width,ie.height,re.depth,0,Ce,F,ie.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Ee&&Re&&t.texStorage2D(s.TEXTURE_2D,O,ce,Ie[0].width,Ie[0].height);for(let Y=0,fe=Ie.length;Y<fe;Y++)ie=Ie[Y],T.format!==Bn?Ce!==null?Ee?We&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ie.width,ie.height,Ce,ie.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,ce,ie.width,ie.height,0,ie.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?We&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ie.width,ie.height,Ce,F,ie.data):t.texImage2D(s.TEXTURE_2D,Y,ce,ie.width,ie.height,0,Ce,F,ie.data)}else if(T.isDataArrayTexture)if(Ee){if(Re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,O,ce,re.width,re.height,re.depth),We)if(T.layerUpdates.size>0){const Y=Du(re.width,re.height,T.format,T.type);for(const fe of T.layerUpdates){const Ae=re.data.subarray(fe*Y/re.data.BYTES_PER_ELEMENT,(fe+1)*Y/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,re.width,re.height,1,Ce,F,Ae)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ce,F,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ce,re.width,re.height,re.depth,0,Ce,F,re.data);else if(T.isData3DTexture)Ee?(Re&&t.texStorage3D(s.TEXTURE_3D,O,ce,re.width,re.height,re.depth),We&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ce,F,re.data)):t.texImage3D(s.TEXTURE_3D,0,ce,re.width,re.height,re.depth,0,Ce,F,re.data);else if(T.isFramebufferTexture){if(Re)if(Ee)t.texStorage2D(s.TEXTURE_2D,O,ce,re.width,re.height);else{let Y=re.width,fe=re.height;for(let Ae=0;Ae<O;Ae++)t.texImage2D(s.TEXTURE_2D,Ae,ce,Y,fe,0,Ce,F,null),Y>>=1,fe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const Y=s.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),re.parentNode!==Y){Y.appendChild(re),h.add(T),Y.onpaint=fe=>{const Ae=fe.changedElements;for(const ve of h)Ae.includes(ve.image)&&(ve.needsUpdate=!0)},Y.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,re);else{const Ae=s.RGBA,ve=s.RGBA,it=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ae,ve,it,re)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Ee&&Re){const Y=Je(Ie[0]);t.texStorage2D(s.TEXTURE_2D,O,ce,Y.width,Y.height)}for(let Y=0,fe=Ie.length;Y<fe;Y++)ie=Ie[Y],Ee?We&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Ce,F,ie):t.texImage2D(s.TEXTURE_2D,Y,ce,Ce,F,ie);T.generateMipmaps=!1}else if(Ee){if(Re){const Y=Je(re);t.texStorage2D(s.TEXTURE_2D,O,ce,Y.width,Y.height)}We&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,F,re)}else t.texImage2D(s.TEXTURE_2D,0,ce,Ce,F,re);S(T)&&T.mipmapsAutoUpdate===!0&&M(ye),be.__version=we.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Le(L,T,K){if(T.image.length!==6)return;const ye=Be(L,T),de=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+K);const we=n.get(de);if(de.version!==we.__version||ye===!0){t.activeTexture(s.TEXTURE0+K);const be=pt.getPrimaries(pt.workingColorSpace),ae=T.colorSpace===Ri?null:pt.getPrimaries(T.colorSpace),re=T.colorSpace===Ri||be===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Ce=T.isCompressedTexture||T.image[0].isCompressedTexture,F=T.image[0]&&T.image[0].isDataTexture,ce=[];for(let ve=0;ve<6;ve++)!Ce&&!F?ce[ve]=_(T.image[ve],!0,i.maxCubemapSize):ce[ve]=F?T.image[ve].image:T.image[ve],ce[ve]=Ke(T,ce[ve]);const ie=ce[0],Ie=r.convert(T.format,T.colorSpace),Ee=r.convert(T.type);let Re=E(T.internalFormat,Ie,Ee,T.normalized,T.colorSpace);const We=T.isVideoTexture!==!0,O=we.__version===void 0||ye===!0,Y=de.dataReady;let fe=y(T,ie);pe(s.TEXTURE_CUBE_MAP,T);let Ae;if(T.isDepthTexture){if(Re=x(T.format===Ci,T.type),O)if(We)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Re,ie.width,ie.height);else for(let ve=0;ve<6;ve++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Re,ie.width,ie.height,0,Ie,Ee,null)}else if(Ce){We&&O&&t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,Re,ie.width,ie.height);for(let ve=0;ve<6;ve++){Ae=ce[ve].mipmaps;for(let it=0;it<Ae.length;it++){const je=Ae[it];T.format!==Bn?Ie!==null?We?Y&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,0,0,je.width,je.height,Ie,je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,Re,je.width,je.height,0,je.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,0,0,je.width,je.height,Ie,Ee,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,Re,je.width,je.height,0,Ie,Ee,je.data)}}}else{if(Ae=T.mipmaps,We&&O){Ae.length>0&&fe++;const ve=Je(ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,Re,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(F){We?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ce[ve].width,ce[ve].height,Ie,Ee,ce[ve].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Re,ce[ve].width,ce[ve].height,0,Ie,Ee,ce[ve].data);for(let it=0;it<Ae.length;it++){const Ye=Ae[it].image[ve].image;We?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,0,0,Ye.width,Ye.height,Ie,Ee,Ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,Re,Ye.width,Ye.height,0,Ie,Ee,Ye.data)}}else{We?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ie,Ee,ce[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Re,Ie,Ee,ce[ve]);for(let it=0;it<Ae.length;it++){const je=Ae[it];We?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,0,0,Ie,Ee,je.image[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,Re,Ie,Ee,je.image[ve])}}}S(T)&&T.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),we.__version=de.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Se(L,T,K,ye,de,we){const be=r.convert(K.format,K.colorSpace),ae=r.convert(K.type),re=E(K.internalFormat,be,ae,K.normalized,K.colorSpace),Ce=n.get(T),F=n.get(K);if(F.__renderTarget=T,!Ce.__hasExternalTextures){const ce=Math.max(1,T.width>>we),ie=Math.max(1,T.height>>we);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,we,re,ce,ie,T.depth,0,be,ae,null):t.texImage2D(de,we,re,ce,ie,0,be,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Pe(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,de,F.__webglTexture,0,St(T)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,de,F.__webglTexture,we),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(L,T,K){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const ye=T.depthTexture,de=ye&&ye.isDepthTexture?ye.type:null,we=x(T.stencilBuffer,de),be=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Pe(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St(T),we,T.width,T.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,St(T),we,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,we,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,L)}else{const ye=T.textures;for(let de=0;de<ye.length;de++){const we=ye[de],be=r.convert(we.format,we.colorSpace),ae=r.convert(we.type),re=E(we.internalFormat,be,ae,we.normalized,we.colorSpace);Pe(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St(T),re,T.width,T.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,St(T),re,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,re,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Fe(L,T,K){const ye=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=n.get(T.depthTexture);de.__renderTarget=T;const we=ye?T.depthTexture.image[0]:T.depthTexture.image;(!de.__webglTexture||we.width!==T.width||we.height!==T.height)&&(we.width=T.width,we.height=T.height,T.depthTexture.needsUpdate=!0),ye?me(T.depthTexture,0):ge(T.depthTexture,0);const be=de.__webglTexture,ae=St(T),re=ye?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,Ce=T.depthTexture.format===Ci?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ni)Pe(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,re,be,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,re,be,0);else if(T.depthTexture.format===Ci)Pe(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,re,be,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,re,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(L){const T=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ye=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ye){const de=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ye.removeEventListener("dispose",de)};ye.addEventListener("dispose",de),T.__depthDisposeCallback=de}T.__boundDepthTexture=ye}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(K)for(let ye=0;ye<6;ye++)Fe(T.__webglFramebuffer[ye],L,ye);else L.texture.mipmaps.length>0?Fe(T.__webglFramebuffer[0],L,0):Fe(T.__webglFramebuffer,L,0);else if(K){T.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ye]),T.__webglDepthbuffer[ye]===void 0)T.__webglDepthbuffer[ye]=s.createRenderbuffer(),ze(T.__webglDepthbuffer[ye],L,!1);else{const de=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=T.__webglDepthbuffer[ye];s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,we)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ze(T.__webglDepthbuffer,L,!1);else{const de=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,we)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function at(L,T,K){const ye=n.get(L);T!==void 0&&Se(ye.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&$e(L)}function dt(L){const T=L.texture,K=n.get(L),ye=n.get(T);L.addEventListener("dispose",N),I(L);const de=L.textures,we=L.isWebGLCubeRenderTarget===!0,be=de.length>1;if(be||(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=T.version,o.memory.textures++),we){K.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(T.mipmaps.length>0){K.__webglFramebuffer[ae]=[];for(let re=0;re<T.mipmaps.length;re++)K.__webglFramebuffer[ae][re]=s.createFramebuffer()}else K.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(T.mipmaps.length>0){K.__webglFramebuffer=[];for(let ae=0;ae<T.mipmaps.length;ae++)K.__webglFramebuffer[ae]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(be)for(let ae=0,re=de.length;ae<re;ae++){const Ce=n.get(de[ae]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&Pe(L)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ae=0;ae<de.length;ae++){const re=de[ae];K.__webglColorRenderbuffer[ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[ae]);const Ce=r.convert(re.format,re.colorSpace),F=r.convert(re.type),ce=E(re.internalFormat,Ce,F,re.normalized,re.colorSpace,L.isXRRenderTarget===!0),ie=St(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,ce,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,K.__webglColorRenderbuffer[ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(we){t.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),pe(s.TEXTURE_CUBE_MAP,T);for(let ae=0;ae<6;ae++)if(T.mipmaps.length>0)for(let re=0;re<T.mipmaps.length;re++)Se(K.__webglFramebuffer[ae][re],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,re);else Se(K.__webglFramebuffer[ae],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);S(T)?M(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(be){for(let ae=0,re=de.length;ae<re;ae++){const Ce=de[ae],F=n.get(Ce);let ce=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,F.__webglTexture),pe(ce,Ce),Se(K.__webglFramebuffer,L,Ce,s.COLOR_ATTACHMENT0+ae,ce,0),S(Ce)&&M(ce)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ae=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,ye.__webglTexture),pe(ae,T),T.mipmaps.length>0)for(let re=0;re<T.mipmaps.length;re++)Se(K.__webglFramebuffer[re],L,T,s.COLOR_ATTACHMENT0,ae,re);else Se(K.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,ae,0);S(T)?M(ae):T.mipmaps.length>0&&s.texParameteri(ae,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&$e(L)}function G(L){const T=L.textures;for(let K=0,ye=T.length;K<ye;K++){const de=T[K];if(S(de)&&de.mipmapsAutoUpdate===!0){const we=b(L),be=n.get(de).__webglTexture;t.bindTexture(we,be),M(we),t.unbindTexture()}}}const Rt=[];function lt(L){if(L.samples>0){if(Pe(L)===!1){const T=L.textures,K=L.width,ye=L.height;let de=s.COLOR_BUFFER_BIT;const we=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(L),ae=T.length>1;if(ae)for(let Ce=0;Ce<T.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ce=0;Ce<T.length;Ce++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[Ce]);const F=n.get(T[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,F,0)}s.blitFramebuffer(0,0,K,ye,0,0,K,ye,de,s.NEAREST),l===!0&&(Rt.length=0,Rt.push(s.COLOR_ATTACHMENT0+Ce),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Rt.push(we),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ae)for(let Ce=0;Ce<T.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,be.__webglColorRenderbuffer[Ce]);const F=n.get(T[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,F,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function St(L){return Math.min(i.maxSamples,L.samples)}function Pe(L){const T=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Nt(L){const T=o.render.frame;u.get(L)!==T&&(u.set(L,T),L.update())}function Ke(L,T){const K=L.colorSpace,ye=L.format,de=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==Mn&&K!==Ri&&(pt.getTransfer(K)===bt?(ye!==Bn||de!==Tn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",K)),T}function Je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=he,this.resetTextureUnits=j,this.getTextureUnits=$,this.setTextureUnits=ue,this.setTexture2D=ge,this.setTexture2DArray=te,this.setTexture3D=Te,this.setTextureCube=me,this.rebindTextures=at,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Pe,this.dispose=P}function kv(s,e){function t(n,i=Ri){let r;const o=pt.getTransfer(i);if(n===Tn)return s.UNSIGNED_BYTE;if(n===zl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===kl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===kh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Hh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bh)return s.BYTE;if(n===zh)return s.SHORT;if(n===pr)return s.UNSIGNED_SHORT;if(n===Bl)return s.INT;if(n===Qn)return s.UNSIGNED_INT;if(n===_n)return s.FLOAT;if(n===vn)return s.HALF_FLOAT;if(n===Gh)return s.ALPHA;if(n===Vh)return s.RGB;if(n===Bn)return s.RGBA;if(n===Ni)return s.DEPTH_COMPONENT;if(n===Ci)return s.DEPTH_STENCIL;if(n===Oo)return s.RED;if(n===Hl)return s.RED_INTEGER;if(n===Yi)return s.RG;if(n===Gl)return s.RG_INTEGER;if(n===Vl)return s.RGBA_INTEGER;if(n===ho||n===fo||n===po||n===mo)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Wa||n===Xa||n===qa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===Ka||n===Za||n===Ja||n===$a||n===So||n===Qa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ya||n===Ka)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Za)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ja)return r.COMPRESSED_R11_EAC;if(n===$a)return r.COMPRESSED_SIGNED_R11_EAC;if(n===So)return r.COMPRESSED_RG11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ja||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl||n===dl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ja)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===il)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ol)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===al)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ll)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fl||n===pl||n===ml)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===fl)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gl||n===_l||n===bo||n===xl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===gl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gv=`
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

}`;class Vv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ld(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vn({vertexShader:Hv,fragmentShader:Gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new on(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wv extends Ui{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Vv,p={},_=t.getContextAttributes();let S=null,M=null;const b=[],E=[],x=new _e;let y=null,I=null;const w=new pn;w.viewport=new yt;const C=new pn;C.viewport=new yt;const N=[w,C],W=new Gm;let R=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ge=b[Q];return ge===void 0&&(ge=new sa,b[Q]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Q){let ge=b[Q];return ge===void 0&&(ge=new sa,b[Q]=ge),ge.getGripSpace()},this.getHand=function(Q){let ge=b[Q];return ge===void 0&&(ge=new sa,b[Q]=ge),ge.getHandSpace()};function k(Q){const ge=E.indexOf(Q.inputSource);if(ge===-1)return;const te=b[ge];te!==void 0&&(te.update(Q.inputSource,Q.frame,c||o),te.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",V);for(let Q=0;Q<b.length;Q++){const ge=E[Q];ge!==null&&(E[Q]=null,b[Q].disconnect(ge))}R=null,P=null,m.reset();for(const Q in p)delete p[Q];if(e.setRenderTarget(S),f=null,d=null,h=null,i=null,M=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(x.width,x.height,!1),I!==null){const Q=I.camera;Q.fov=I.fov,Q.zoom=I.zoom,Q.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",z),i.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Te=null,me=null;_.depth&&(me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=_.stencil?Ci:Ni,Te=_.stencil?ys:Qn);const D={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(D),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Hn(d.textureWidth,d.textureHeight,{format:Bn,type:Tn,depthTexture:new Ts(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const te={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Hn(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(Q){for(let ge=0;ge<Q.removed.length;ge++){const te=Q.removed[ge],Te=E.indexOf(te);Te>=0&&(E[Te]=null,b[Te].disconnect(te))}for(let ge=0;ge<Q.added.length;ge++){const te=Q.added[ge];let Te=E.indexOf(te);if(Te===-1){for(let D=0;D<b.length;D++)if(D>=E.length){E.push(te),Te=D;break}else if(E[D]===null){E[D]=te,Te=D;break}if(Te===-1)break}const me=b[Te];me&&me.connect(te)}}function q(Q,ge){ge===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ge.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let ge=Q.near,te=Q.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(te=m.depthFar)),W.near=C.near=w.near=ge,W.far=C.far=w.far=te,(R!==W.near||P!==W.far)&&(i.updateRenderState({depthNear:W.near,depthFar:W.far}),R=W.near,P=W.far),W.layers.mask=Q.layers.mask|6,w.layers.mask=W.layers.mask&-5,C.layers.mask=W.layers.mask&-3;const Te=Q.parent,me=W.cameras;q(W,Te);for(let D=0;D<me.length;D++)q(me[D],Te);W.projectionMatrix.copy(w.projectionMatrix),W.projectionMatrixInverse.copy(w.projectionMatrixInverse),I===null&&Q.isPerspectiveCamera&&(I={camera:Q,fov:Q.fov,zoom:Q.zoom}),j(Q,W,Te)};function j(Q,ge,te){te===null?Q.matrix.copy(ge.matrixWorld):(Q.matrix.copy(te.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ge.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ge.projectionMatrix),Q.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ss*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(Q){return p[Q]};let $=null;function ue(Q,ge){if(u=ge.getViewerPose(c||o),g=ge,u!==null){const te=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Te=!1;te.length!==W.cameras.length&&(W.cameras.length=0,Te=!0);for(let oe=0;oe<te.length;oe++){const pe=te[oe];let Be=null;if(f!==null)Be=f.getViewport(pe);else{const Me=h.getViewSubImage(d,pe);Be=Me.viewport,oe===0&&(e.setRenderTargetTextures(M,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(M))}let se=N[oe];se===void 0&&(se=new pn,se.layers.enable(oe),se.viewport=new yt,N[oe]=se),se.matrix.fromArray(pe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(pe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Be.x,Be.y,Be.width,Be.height),oe===0&&(W.matrix.copy(se.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Te===!0&&W.cameras.push(se)}const me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const oe=h.getDepthInformation(te[0]);oe&&oe.isValid&&oe.texture&&m.init(oe,i.renderState)}if(me&&me.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let oe=0;oe<te.length;oe++){const pe=te[oe].camera;if(pe){let Be=p[pe];Be||(Be=new ld,p[pe]=Be);const se=h.getCameraImage(pe);Be.sourceTexture=se}}}}for(let te=0;te<b.length;te++){const Te=E[te],me=b[te];Te!==null&&me!==void 0&&me.update(Te,ge,c||o)}$&&$(Q,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),g=null}const he=new Td;he.setAnimationLoop(ue),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const Xv=new Ze,Ud=new tt;Ud.set(-1,0,0,0,1,0,0,0,1);function qv(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,S,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p),S=_.envMap,M=_.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Xv.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ud),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Yv(s,e,t,n){let i={},r={};function o(_,S){const M=S.program;n.uniformBlockBinding(_,M,i[_.id])}function a(_,S){let M=i[_.id];M===void 0&&(g(_),M=l(_),i[_.id]=M,_.addEventListener("dispose",m));const b=S.program;n.updateUBOMapping(_,b);const E=e.render.frame;r[_.id]!==E&&(c(_),r[_.id]=E)}function l(_){const S=s.createBuffer(),M=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,M,b),s.bindBuffer(s.UNIFORM_BUFFER,null),S}function c(_){const S=i[_.id],M=_.uniforms,b=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let E=0,x=M.length;E<x;E++){const y=M[E];if(Array.isArray(y))for(let I=0,w=y.length;I<w;I++)u(y[I],E,I,b);else u(y,E,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(_,S,M,b){if(d(_,S,M,b)===!0){const E=_.__offset,x=_.value;if(Array.isArray(x)){let y=0;for(let I=0;I<x.length;I++){const w=x[I],C=v(w,!0);h(w,_.__data,y),y+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,_.__data)}}function h(_,S,M){typeof _=="number"||typeof _=="boolean"?S[M]=_:_.isMatrix3?(S[M]=_.elements[0],S[M+1]=_.elements[1],S[M+2]=_.elements[2],S[M+3]=0,S[M+4]=_.elements[3],S[M+5]=_.elements[4],S[M+6]=_.elements[5],S[M+7]=0,S[M+8]=_.elements[6],S[M+9]=_.elements[7],S[M+10]=_.elements[8],S[M+11]=0):ArrayBuffer.isView(_)?S.set(_.subarray(0,S.length-M),M):_.toArray(S,M)}function d(_,S,M,b){const E=_.value,x=S+"_"+M;if(Array.isArray(E)){b[x]===void 0&&(b[x]=[]);const y=b[x];let I=!1;for(let w=0;w<E.length;w++)f(E[w],y,w)===!0&&(I=!0);return I}return f(E,b,x)}function f(_,S,M){if(S[M]===void 0)return typeof _=="number"||typeof _=="boolean"?S[M]=_:ArrayBuffer.isView(_)?S[M]=_.slice():S[M]=_.clone(),!0;{const b=S[M];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return S[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function g(_){const S=_.uniforms;let M=0;const b=16;for(let x=0,y=S.length;x<y;x++){const I=Array.isArray(S[x])?S[x]:[S[x]];for(let w=0,C=I.length;w<C;w++){const N=I[w],W=Array.isArray(N.value)?N.value:[N.value],R=Array.isArray(S[x])||Array.isArray(N.value);let P=M;for(let z=0,V=W.length;z<V;z++){const q=W[z],j=v(q,R),$=M%b,ue=$%j.boundary,he=$+ue;M+=ue,he!==0&&b-he<j.storage&&(M+=b-he),z===0&&(P=M),M+=j.storage}const k=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new k((M-P)/Float32Array.BYTES_PER_ELEMENT),N.__offset=P}}const E=M%b;return E>0&&(M+=b-E),_.__size=M,_.__cache={},this}function v(_,S){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",_),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(_){const S=_.target;S.removeEventListener("dispose",m),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const _ in i)s.deleteBuffer(i[_]);i={},r={}}return{bind:o,update:a,dispose:p}}const Kv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Kn=null;function Zv(){return Kn===null&&(Kn=new bs(Kv,16,16,Yi,vn),Kn.name="DFG_LUT",Kn.minFilter=Ot,Kn.magFilter=Ot,Kn.wrapS=Pn,Kn.wrapT=Pn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}class Jv{constructor(e={}){const{canvas:t=Gf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Tn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const v=f,m=new Set([Vl,Gl,Hl]),p=new Set([Tn,Qn,pr,ys,zl,kl]),_=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let b=null,E=null;const x=[],y=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let C=!1,N=null,W=null,R=null,P=null;this._outputColorSpace=Lt;let k=0,z=0,V=null,q=-1,j=null;const $=new yt,ue=new yt;let he=null;const Q=new Ve(0);let ge=0,te=t.width,Te=t.height,me=1,D=null,ee=null;const oe=new yt(0,0,te,Te),pe=new yt(0,0,te,Te);let Be=!1;const se=new Es,Me=new jl;let xe=!1,Le=!1;const Se=new Ze,ze=new B,Fe=new yt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function dt(){return V===null?me:1}let G=n;function Rt(A,H){return t.getContext(A,H)}let lt,St,Pe,Nt,Ke,Je,L,T,K,ye,de,we,be,ae,re,Ce,F,ce,ie,Ie,Ee,Re,We;try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fl}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",ve,!1),G===null){const H="webgl2";if(G=Rt(H,A),G===null)throw Rt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}O()}catch(A){throw t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Qe("WebGLRenderer: "+A.message),A}function O(){lt=new j_(G),lt.init(),Ee=new kv(G,lt),St=new G_(G,lt,e,Ee),Pe=new Bv(G,lt),St.reversedDepthBuffer&&d&&Pe.buffers.depth.setReversed(!0),W=G.createFramebuffer(),R=G.createFramebuffer(),P=G.createFramebuffer(),Nt=new nx(G),Ke=new Ev,Je=new zv(G,lt,Pe,Ke,St,Ee,Nt),L=new Q_(w),T=new s0(G),Re=new k_(G,T),K=new ex(G,T,Nt,Re),ye=new sx(G,K,T,Re,Nt),ce=new ix(G,St,Je),re=new V_(Ke),de=new bv(w,L,lt,St,Re,re),we=new qv(w,Ke),be=new wv,ae=new Lv(lt),F=new z_(w,L,Pe,ye,g,l),Ce=new Ov(w,ye,St),We=new Yv(G,Nt,St,Pe),ie=new H_(G,lt,Nt),Ie=new tx(G,lt,Nt),Nt.programs=de.programs,w.capabilities=St,w.extensions=lt,w.properties=Ke,w.renderLists=be,w.shadowMap=Ce,w.state=Pe,w.info=Nt}v!==Tn&&(I=new ox(v,t.width,t.height,a,i,r));const Y=new Wv(w,G);this.xr=Y,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=lt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=lt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(A){A!==void 0&&(me=A,this.setSize(te,Te,!1))},this.getSize=function(A){return A.set(te,Te)},this.setSize=function(A,H,ne=!0){if(Y.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}te=A,Te=H,t.width=Math.floor(A*me),t.height=Math.floor(H*me),ne===!0&&(t.style.width=A+"px",t.style.height=H+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(te*me,Te*me).floor()},this.setDrawingBufferSize=function(A,H,ne){te=A,Te=H,me=ne,t.width=Math.floor(A*ne),t.height=Math.floor(H*ne),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(v===Tn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy($)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,H,ne,Z){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,H,ne,Z),Pe.viewport($.copy(oe).multiplyScalar(dt()).round())},this.getScissor=function(A){return A.copy(pe)},this.setScissor=function(A,H,ne,Z){A.isVector4?pe.set(A.x,A.y,A.z,A.w):pe.set(A,H,ne,Z),Pe.scissor(ue.copy(pe).multiplyScalar(dt()).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(A){Pe.setScissorTest(Be=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){ee=A},this.getClearColor=function(A){return A.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,ne=!0){let Z=0;if(A){let J=!1;if(V!==null){const Ne=V.texture.format;J=m.has(Ne)}if(J){const Ne=V.texture.type,ke=p.has(Ne),De=F.getClearColor(),Oe=F.getClearAlpha(),Xe=De.r,st=De.g,mt=De.b;ke?(_[0]=Xe,_[1]=st,_[2]=mt,_[3]=Oe,G.clearBufferuiv(G.COLOR,0,_)):(S[0]=Xe,S[1]=st,S[2]=mt,S[3]=Oe,G.clearBufferiv(G.COLOR,0,S))}else Z|=G.COLOR_BUFFER_BIT}H&&(Z|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(Z|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&G.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),F.dispose(),be.dispose(),ae.dispose(),Je.dispose(),Ke.dispose(),L.dispose(),ye.dispose(),K.dispose(),Re.dispose(),We.dispose(),de.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Mc),Y.removeEventListener("sessionend",yc),Oi.stop()};function fe(A){A.preventDefault(),wo("WebGLRenderer: Context Lost."),C=!0}function Ae(){wo("WebGLRenderer: Context Restored."),C=!1;const A=Nt.autoReset,H=Ce.enabled,ne=Ce.autoUpdate,Z=Ce.needsUpdate,J=Ce.type;O(),Nt.autoReset=A,Ce.enabled=H,Ce.autoUpdate=ne,Ce.needsUpdate=Z,Ce.type=J}function ve(A){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function it(A){const H=A.target;H.removeEventListener("dispose",it),je(H)}function je(A){Ye(A),Ke.remove(A)}function Ye(A){const H=Ke.get(A).programs;H!==void 0&&(H.forEach(function(ne){de.releaseProgram(ne)}),A.isShaderMaterial&&de.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,ne,Z,J,Ne){H===null&&(H=$e);const ke=J.isMesh&&J.matrixWorld.determinantAffine()<0,De=jd(A,H,ne,Z,J);Pe.setMaterial(Z,ke);let Oe=ne.index,Xe=1;if(Z.wireframe===!0){if(Oe=K.getWireframeAttribute(ne),Oe===void 0)return;Xe=2}const st=ne.drawRange,mt=ne.attributes.position;let He=st.start*Xe,gt=(st.start+st.count)*Xe;Ne!==null&&(He=Math.max(He,Ne.start*Xe),gt=Math.min(gt,(Ne.start+Ne.count)*Xe)),Oe!==null?(He=Math.max(He,0),gt=Math.min(gt,Oe.count)):mt!=null&&(He=Math.max(He,0),gt=Math.min(gt,mt.count));const kt=gt-He;if(kt<0||kt===1/0)return;Re.setup(J,Z,De,ne,Oe);let Ct,wt=ie;if(Oe!==null&&(Ct=T.get(Oe),wt=Ie,wt.setIndex(Ct)),J.isMesh)Z.wireframe===!0?(Pe.setLineWidth(Z.wireframeLinewidth*dt()),wt.setMode(G.LINES)):wt.setMode(G.TRIANGLES);else if(J.isLine){let tn=Z.linewidth;tn===void 0&&(tn=1),Pe.setLineWidth(tn*dt()),J.isLineSegments?wt.setMode(G.LINES):J.isLineLoop?wt.setMode(G.LINE_LOOP):wt.setMode(G.LINE_STRIP)}else J.isPoints?wt.setMode(G.POINTS):J.isSprite&&wt.setMode(G.TRIANGLES);if(J.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))wt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const tn=J._multiDrawStarts,Ge=J._multiDrawCounts,ln=J._multiDrawCount,vt=Oe?T.get(Oe).bytesPerElement:1,Bi=Ke.get(Z).currentProgram.getUniforms();for(let nn=0;nn<ln;nn++)Bi.setValue(G,"_gl_DrawID",nn),wt.render(tn[nn]/vt,Ge[nn])}else if(J.isInstancedMesh)wt.renderInstances(He,kt,J.count);else if(ne.isInstancedBufferGeometry){const tn=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ge=Math.min(ne.instanceCount,tn);wt.renderInstances(He,kt,Ge)}else wt.render(He,kt)};function Vt(A,H,ne,Z){N!==null&&A.isNodeMaterial&&N.setObject(Z,A),xe===!0&&re.setState(A,ne,!1),A.transparent===!0&&A.side===mn&&A.forceSinglePass===!1?(A.side=gn,A.needsUpdate=!0,Os(A,H,Z),A.side=Di,A.needsUpdate=!0,Os(A,H,Z),A.side=mn):Os(A,H,Z)}this.compile=function(A,H,ne=null){ne===null&&(ne=A),N!==null&&N.renderStart(A,H,ne),E=ae.get(ne),E.init(H),y.push(E),ne.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(E.pushLight(J),J.castShadow&&E.pushShadow(J))}),A!==ne&&A.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(E.pushLight(J),J.castShadow&&E.pushShadow(J))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),Le=this.localClippingEnabled,xe=re.init(this.clippingPlanes,Le),xe===!0&&re.setGlobalState(this.clippingPlanes,H),N!==null&&Ce.render(E.state.shadowsArray,ne,H);const Z=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ne=J.material;if(Ne)if(Array.isArray(Ne))for(let ke=0;ke<Ne.length;ke++){const De=Ne[ke];Vt(De,ne,H,J),Z.add(De)}else Vt(Ne,ne,H,J),Z.add(Ne)}),E=y.pop(),N!==null&&N.renderEnd(),Z},this.compileAsync=function(A,H,ne=null){const Z=this.compile(A,H,ne);return new Promise(J=>{function Ne(){if(Z.forEach(function(ke){const Oe=Ke.get(ke).currentProgram;(Oe===void 0||Oe.isReady())&&Z.delete(ke)}),Z.size===0){J(A);return}setTimeout(Ne,10)}lt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Ji=null;function Ko(A){Ji&&Ji(A)}function Mc(){Oi.stop()}function yc(){Oi.start()}const Oi=new Td;Oi.setAnimationLoop(Ko),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(A){Ji=A,Y.setAnimationLoop(A),A===null?Oi.stop():Oi.start()},Y.addEventListener("sessionstart",Mc),Y.addEventListener("sessionend",yc),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N!==null&&N.renderStart(A,H);const ne=Y.enabled===!0&&Y.isPresenting===!0,Z=I!==null&&(V===null||ne)&&I.begin(w,V);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(H),H=Y.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,H,V),E=ae.get(A,y.length),E.init(H),E.state.textureUnits=Je.getTextureUnits(),y.push(E),Se.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?Me.setFromArrayCamera(H):se.setFromProjectionMatrix(Se,zn,H.reversedDepth),Le=this.localClippingEnabled,xe=re.init(this.clippingPlanes,Le),b=be.get(A,x.length),b.init(),x.push(b),this.info.render.frame++,Y.enabled===!0&&Y.isPresenting===!0){const ke=w.xr.getDepthSensingMesh();ke!==null&&Zo(ke,H,-1/0,w.sortObjects)}Zo(A,H,0,w.sortObjects),b.finish(),N!==null&&N.updateLights(E.state.lightsArray),w.sortObjects===!0&&b.sort(D,ee),at=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,at&&F.addToRenderList(b,A),this.info.autoReset===!0&&this.info.reset(),xe===!0&&re.beginShadows();const J=E.state.shadowsArray;if(Ce.render(J,A,H),xe===!0&&re.endShadows(),(Z&&I.hasRenderPass())===!1){const ke=b.opaque,De=b.transmissive;if(E.setupLights(),H.isArrayCamera){const Oe=H.cameras;if(De.length>0)for(let Xe=0,st=Oe.length;Xe<st;Xe++){const mt=Oe[Xe];bc(ke,De,A,mt)}at&&F.render(A);for(let Xe=0,st=Oe.length;Xe<st;Xe++){const mt=Oe[Xe];Sc(b,A,mt,mt.viewport)}}else De.length>0&&bc(ke,De,A,H),at&&F.render(A),Sc(b,A,H)}V!==null&&z===0&&(Je.updateMultisampleRenderTarget(V),Je.updateRenderTargetMipmap(V)),Z&&I.end(w),A.isScene===!0&&A.onAfterRender(w,A,H),Re.resetDefaultState(),q=-1,j=null,y.pop(),y.length>0?(E=y[y.length-1],Je.setTextureUnits(E.state.textureUnits),xe===!0&&re.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,N!==null&&N.renderEnd()};function Zo(A,H,ne,Z){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){const ke=H.isArrayCamera?Me:se;if(!A.frustumCulled||A.intersectsFrustum(ke)){Z&&Fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Se);const De=ye.update(A),Oe=A.material;Oe.visible&&b.push(A,De,Oe,ne,Fe.z,null,H)}}else if(A.isMesh||A.isLine||A.isPoints){const ke=H.isArrayCamera?Me:se;if(!A.frustumCulled||A.intersectsFrustum(ke)){const De=ye.update(A),Oe=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Fe.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Fe.copy(De.boundingSphere.center)),Fe.applyMatrix4(A.matrixWorld).applyMatrix4(Se)),Array.isArray(Oe)){const Xe=De.groups;for(let st=0,mt=Xe.length;st<mt;st++){const He=Xe[st],gt=Oe[He.materialIndex];gt&&gt.visible&&b.push(A,De,gt,ne,Fe.z,He,H)}}else Oe.visible&&b.push(A,De,Oe,ne,Fe.z,null,H)}}}const Ne=A.children;for(let ke=0,De=Ne.length;ke<De;ke++)Zo(Ne[ke],H,ne,Z)}function Sc(A,H,ne,Z){const{opaque:J,transmissive:Ne,transparent:ke}=A;E.setupLightsView(ne),xe===!0&&re.setGlobalState(w.clippingPlanes,ne),Z&&Pe.viewport($.copy(Z)),J.length>0&&Cr(J,H,ne),Ne.length>0&&Cr(Ne,H,ne),ke.length>0&&Cr(ke,H,ne),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function bc(A,H,ne,Z){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Z.id]===void 0){const He=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Z.id]=new Hn(1,1,{generateMipmaps:!0,type:He?vn:Tn,minFilter:On,samples:Math.max(4,St.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}const Ne=E.state.transmissionRenderTarget[Z.id],ke=Z.viewport||$;Ne.setSize(ke.z*w.transmissionResolutionScale,ke.w*w.transmissionResolutionScale);const De=w.getRenderTarget(),Oe=w.getActiveCubeFace(),Xe=w.getActiveMipmapLevel();w.setRenderTarget(Ne),w.getClearColor(Q),ge=w.getClearAlpha(),ge<1&&w.setClearColor(16777215,.5),w.clear(),at&&F.render(ne);const st=w.toneMapping;w.toneMapping=pi;const mt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),E.setupLightsView(Z),xe===!0&&re.setGlobalState(w.clippingPlanes,Z),Cr(A,ne,Z),Je.updateMultisampleRenderTarget(Ne),Je.updateRenderTargetMipmap(Ne),lt.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let gt=0,kt=H.length;gt<kt;gt++){const Ct=H[gt],{object:wt,geometry:tn,material:Ge,group:ln}=Ct;if(Ge.side===mn&&wt.layers.test(Z.layers)){const vt=Ge.side;Ge.side=gn,Ge.needsUpdate=!0,Ec(wt,ne,Z,tn,Ge,ln),Ge.side=vt,Ge.needsUpdate=!0,He=!0}}He===!0&&(Je.updateMultisampleRenderTarget(Ne),Je.updateRenderTargetMipmap(Ne))}w.setRenderTarget(De,Oe,Xe),w.setClearColor(Q,ge),mt!==void 0&&(Z.viewport=mt),w.toneMapping=st}function Cr(A,H,ne){const Z=H.isScene===!0?H.overrideMaterial:null;for(let J=0,Ne=A.length;J<Ne;J++){const ke=A[J],{object:De,geometry:Oe,group:Xe}=ke;let st=ke.material;st.allowOverride===!0&&Z!==null&&(st=Z),De.layers.test(ne.layers)&&Ec(De,H,ne,Oe,st,Xe)}}function Ec(A,H,ne,Z,J,Ne){N!==null&&J.isNodeMaterial&&N.setObject(A,J),A.onBeforeRender(w,H,ne,Z,J,Ne),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(w,H,ne,Z,A,Ne),J.transparent===!0&&J.side===mn&&J.forceSinglePass===!1?(J.side=gn,J.needsUpdate=!0,w.renderBufferDirect(ne,H,Z,J,A,Ne),J.side=Di,J.needsUpdate=!0,w.renderBufferDirect(ne,H,Z,J,A,Ne),J.side=mn):w.renderBufferDirect(ne,H,Z,J,A,Ne),A.onAfterRender(w,H,ne,Z,J,Ne)}function Tc(A){let H=0;for(const ne of A)ne.texture!==null&&H++;return H}function Os(A,H,ne){H.isScene!==!0&&(H=$e);const Z=Ke.get(A),J=E.state.lights,Ne=E.state.shadowsArray,ke=J.state.version,De=de.getParameters(A,J.state,Ne,H,ne,E.state.lightProbeGridArray),Oe=de.getProgramCacheKey(De);let Xe=Z.programs;Z.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,Z.fog=H.fog;const st=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Z.envMap=L.get(A.envMap||Z.environment,st),Z.envMapRotation=Z.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",it),Xe=new Map,Z.programs=Xe,Z.programVariants=new Map);let mt=Xe.get(Oe);if(mt!==void 0){if(Z.currentProgram===mt&&Z.lightsStateVersion===ke)return Ac(A,De),mt}else De.uniforms=de.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,ne,De),A.onBeforeCompile(De,w),mt=de.acquireProgram(De,Oe),Xe.set(Oe,mt),Z.uniforms=De.uniforms;const He=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=re.uniform),Ac(A,De),Z.needsLights=tf(A),Z.lightsStateVersion=ke,Z.needsLights&&(He.ambientLightColor.value=J.state.ambient,He.lightProbe.value=J.state.probe,He.sunLights.value=J.state.sun,He.sunLightShadows.value=J.state.sunShadow,He.directionalLights.value=J.state.directional,He.directionalLightShadows.value=J.state.directionalShadow,He.spotLights.value=J.state.spot,He.spotLightShadows.value=J.state.spotShadow,He.rectAreaLights.value=J.state.rectArea,He.ltc_1.value=J.state.rectAreaLTC1,He.ltc_2.value=J.state.rectAreaLTC2,He.pointLights.value=J.state.point,He.pointLightShadows.value=J.state.pointShadow,He.hemisphereLights.value=J.state.hemi,He.sunShadowMatrix.value=J.state.sunShadowMatrix,He.sunShadowCascade.value=J.state.sunShadowCascade,He.directionalShadowMatrix.value=J.state.directionalShadowMatrix,He.spotLightMatrix.value=J.state.spotLightMatrix,He.spotLightMap.value=J.state.spotLightMap,He.pointShadowMatrix.value=J.state.pointShadowMatrix),Z.numLightProbeGrids=Tc(E.state.lightProbeGridArray),Z.currentProgram=mt,Z.uniformsList=null,mt}function Qd(A,H,ne,Z,J){const Ne=Ke.get(A),ke=Ne.currentProgram.id+","+Z+","+J;let De=Ne.programVariants.get(ke);return De===void 0?(De=Os(A,H,ne),Ne.programVariants.set(ke,De)):(Ne.currentProgram=De,Ne.uniformsList=null,Ne.outputColorSpace=Z,Ne.toneMapping=J),De}function wc(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=go.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Ac(A,H){const ne=Ke.get(A);ne.outputColorSpace=H.outputColorSpace,ne.batching=H.batching,ne.batchingColor=H.batchingColor,ne.instancing=H.instancing,ne.instancingColor=H.instancingColor,ne.instancingMorph=H.instancingMorph,ne.skinning=H.skinning,ne.morphTargets=H.morphTargets,ne.morphNormals=H.morphNormals,ne.morphColors=H.morphColors,ne.morphTargetsCount=H.morphTargetsCount,ne.numClippingPlanes=H.numClippingPlanes,ne.numIntersection=H.numClipIntersection,ne.vertexAlphas=H.vertexAlphas,ne.vertexTangents=H.vertexTangents,ne.toneMapping=H.toneMapping}function jd(A,H,ne,Z,J){H.isScene!==!0&&(H=$e),Je.resetTextureUnits();const Ne=H.fog,ke=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?H.environment:null,De=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:pt.workingColorSpace,Oe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Xe=L.get(Z.envMap||ke,Oe),st=Z.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,mt=!!ne.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!ne.morphAttributes.position,gt=!!ne.morphAttributes.normal,kt=!!ne.morphAttributes.color;let Ct=pi;Z.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ct=w.toneMapping);const wt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,tn=wt!==void 0?wt.length:0,Ge=Ke.get(Z),ln=E.state.lights;if(xe===!0&&(Le===!0||A!==j)){const Ut=A===j&&Z.id===q;re.setState(Z,A,Ut)}let vt=!1,Bi=!1;Z.version===Ge.__version?Ge.needsLights&&Ge.lightsStateVersion!==ln.state.version||J.isBatchedMesh&&Ge.batching===!1||!J.isBatchedMesh&&Ge.batching===!0||J.isBatchedMesh&&Ge.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Ge.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Ge.instancing===!1||!J.isInstancedMesh&&Ge.instancing===!0||J.isSkinnedMesh&&Ge.skinning===!1||!J.isSkinnedMesh&&Ge.skinning===!0||J.isInstancedMesh&&Ge.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ge.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ge.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ge.instancingMorph===!1&&J.morphTexture!==null||Ge.envMap!==Xe||Z.fog===!0&&Ge.fog!==Ne||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==re.numPlanes||Ge.numIntersection!==re.numIntersection)||Ge.vertexAlphas!==st||Ge.vertexTangents!==mt||Ge.morphTargets!==He||Ge.morphNormals!==gt||Ge.morphColors!==kt||Ge.morphTargetsCount!==tn||Ge.numLightProbeGrids!==Tc(E.state.lightProbeGridArray)?vt=!0:(Ge.outputColorSpace!==De||Ge.toneMapping!==Ct)&&(Bi=!0):(vt=!0,Ge.__version=Z.version);let nn=Ge.currentProgram;(vt===!0||Bi===!0)&&(nn=Bi===!0?Qd(Z,H,J,De,Ct):Os(Z,H,J),N&&Z.isNodeMaterial&&N.onUpdateProgram(Z,nn,Ge));let Pr=!1,xi=!1,zi=!1;const xt=nn.getUniforms(),$t=Ge.uniforms;if(Pe.useProgram(nn.program)&&(Pr=!0,xi=!0,zi=!0),Z.id!==q&&(q=Z.id,xi=!0),Pr||j!==A){Pe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),xt.setValue(G,"projectionMatrix",A.projectionMatrix),xt.setValue(G,"viewMatrix",A.matrixWorldInverse);const Zt=xt.map.cameraPosition;Zt!==void 0&&Zt.setValue(G,ze.setFromMatrixPosition(A.matrixWorld)),St.logarithmicDepthBuffer&&xt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&xt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),j!==A&&(j=A,xi=!0,zi=!0)}if(Ge.needsLights&&(ln.state.sunShadowMap.length>0&&xt.setValue(G,"sunShadowMap",ln.state.sunShadowMap,Je),ln.state.directionalShadowMap.length>0&&xt.setValue(G,"directionalShadowMap",ln.state.directionalShadowMap,Je),ln.state.spotShadowMap.length>0&&xt.setValue(G,"spotShadowMap",ln.state.spotShadowMap,Je),ln.state.pointShadowMap.length>0&&xt.setValue(G,"pointShadowMap",ln.state.pointShadowMap,Je)),J.isSkinnedMesh){xt.setOptional(G,J,"bindMatrix"),xt.setOptional(G,J,"bindMatrixInverse");const Ut=J.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),xt.setValue(G,"boneTexture",Ut.boneTexture,Je))}J.isBatchedMesh&&(xt.setOptional(G,J,"batchingTexture"),xt.setValue(G,"batchingTexture",J._matricesTexture,Je),xt.setOptional(G,J,"batchingIdTexture"),xt.setValue(G,"batchingIdTexture",J._indirectTexture,Je),xt.setOptional(G,J,"batchingColorTexture"),J._colorsTexture!==null&&xt.setValue(G,"batchingColorTexture",J._colorsTexture,Je));const In=ne.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&ce.update(J,ne,nn),(xi||Ge.receiveShadow!==J.receiveShadow)&&(Ge.receiveShadow=J.receiveShadow,xt.setValue(G,"receiveShadow",J.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&H.environment!==null&&($t.envMapIntensity.value=H.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=Zv()),xi){if(xt.setValue(G,"toneMappingExposure",w.toneMappingExposure),Ge.needsLights&&ef($t,zi),Ne&&Z.fog===!0&&we.refreshFogUniforms($t,Ne),we.refreshMaterialUniforms($t,Z,me,Te,E.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.numLightProbeGrids>0){const Ut=M;let Zt=0;for(const ni of E.state.lightProbeGridArray)ni.texture!==null&&(Ut.textures[Zt]=ni.texture,Ut.min[Zt]=ni.boundingBox.min,Ut.max[Zt]=ni.boundingBox.max,Ut.resolution[Zt]=ni.resolution,Zt++);for(const ni in Ut)Ut[ni].length=Zt;$t.probesSH.value=Ut.textures,$t.probesMin.value=Ut.min,$t.probesMax.value=Ut.max,$t.probesResolution.value=Ut.resolution}go.upload(G,wc(Ge),$t,Je)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(go.upload(G,wc(Ge),$t,Je),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&xt.setValue(G,"center",J.center),xt.setValue(G,"modelViewMatrix",J.modelViewMatrix),xt.setValue(G,"normalMatrix",J.normalMatrix),xt.setValue(G,"modelMatrix",J.matrixWorld),Z.uniformsGroups!==void 0){const Ut=Z.uniformsGroups;for(let Zt=0,ni=Ut.length;Zt<ni;Zt++){const Cc=Ut[Zt];We.update(Cc,nn),We.bind(Cc,nn)}}return nn}function ef(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function tf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,H,ne){const Z=Ke.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Ke.get(A.texture).__webglTexture=H,Ke.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ne,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const ne=Ke.get(A);ne.__webglFramebuffer=H,ne.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,ne=0){V=A,k=H,z=ne;let Z=null,J=!1,Ne=!1;if(A){const De=Ke.get(A);if(De.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(G.FRAMEBUFFER,De.__webglFramebuffer),$.copy(A.viewport),ue.copy(A.scissor),he=A.scissorTest,Pe.viewport($),Pe.scissor(ue),Pe.setScissorTest(he),q=-1;return}else if(De.__webglFramebuffer===void 0)Je.setupRenderTarget(A);else if(De.__hasExternalTextures)Je.rebindTextures(A,Ke.get(A.texture).__webglTexture,Ke.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const st=A.depthTexture;if(De.__boundDepthTexture!==st){if(st!==null&&Ke.has(st)&&(A.width!==st.image.width||A.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(A)}}const Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ne=!0);const Xe=Ke.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[H])?Z=Xe[H][ne]:Z=Xe[H],J=!0):A.samples>0&&Je.useMultisampledRTT(A)===!1?Z=Ke.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?Z=Xe[ne]:Z=Xe,$.copy(A.viewport),ue.copy(A.scissor),he=A.scissorTest}else $.copy(oe).multiplyScalar(me).floor(),ue.copy(pe).multiplyScalar(me).floor(),he=Be;if(ne!==0&&(Z=W),Pe.bindFramebuffer(G.FRAMEBUFFER,Z)&&Pe.drawBuffers(A,Z),Pe.viewport($),Pe.scissor(ue),Pe.setScissorTest(he),J){const De=Ke.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,De.__webglTexture,ne)}else if(Ne){const De=H;for(let Oe=0;Oe<A.textures.length;Oe++){const Xe=Ke.get(A.textures[Oe]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Oe,Xe.__webglTexture,ne,De)}}else if(A!==null&&ne!==0){const De=Ke.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,De.__webglTexture,ne)}q=-1};function Rc(A){const H=Ke.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=St.textureFormatReadable(A.format),H.__typeReadable=St.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,ne,Z,J,Ne,ke,De=0){if(!(A&&A.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Oe=Oe[ke],Array.isArray(Oe)&&(Oe=Oe[0])),Oe){Pe.bindFramebuffer(G.FRAMEBUFFER,Oe);try{const Xe=A.textures[De],st=Xe.format,mt=Xe.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+De);const He=Rc(Xe);if(He.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Z&&ne>=0&&ne<=A.height-J&&G.readPixels(H,ne,Z,J,Ee.convert(st),Ee.convert(mt),Ne)}finally{const Xe=V!==null?Ke.get(V).__webglFramebuffer:null;Pe.bindFramebuffer(G.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,H,ne,Z,J,Ne,ke,De=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Oe=Oe[ke],Array.isArray(Oe)&&(Oe=Oe[0])),Oe)if(H>=0&&H<=A.width-Z&&ne>=0&&ne<=A.height-J){Pe.bindFramebuffer(G.FRAMEBUFFER,Oe);const Xe=A.textures[De],st=Xe.format,mt=Xe.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+De);const He=Rc(Xe);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,gt),G.bufferData(G.PIXEL_PACK_BUFFER,Ne.byteLength,G.STREAM_READ),G.readPixels(H,ne,Z,J,Ee.convert(st),Ee.convert(mt),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);const kt=V!==null?Ke.get(V).__webglFramebuffer:null;Pe.bindFramebuffer(G.FRAMEBUFFER,kt);const Ct=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Vf(G,Ct,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,gt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ne),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(gt),G.deleteSync(Ct),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,ne=0){const Z=Math.pow(2,-ne),J=Math.floor(A.image.width*Z),Ne=Math.floor(A.image.height*Z),ke=H!==null?H.x:0,De=H!==null?H.y:0;Je.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,ne,0,0,ke,De,J,Ne),Pe.unbindTexture()},this.copyTextureToTexture=function(A,H,ne=null,Z=null,J=0,Ne=0){let ke,De,Oe,Xe,st,mt,He,gt,kt;const Ct=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(ne!==null)ke=ne.max.x-ne.min.x,De=ne.max.y-ne.min.y,Oe=ne.isBox3?ne.max.z-ne.min.z:1,Xe=ne.min.x,st=ne.min.y,mt=ne.isBox3?ne.min.z:0;else{const xt=Math.pow(2,-J);ke=Math.floor(Ct.width*xt),De=Math.floor(Ct.height*xt),A.isDataArrayTexture?Oe=Ct.depth:A.isData3DTexture?Oe=Math.floor(Ct.depth*xt):Oe=1,Xe=0,st=0,mt=0}Z!==null?(He=Z.x,gt=Z.y,kt=Z.z):(He=0,gt=0,kt=0);const wt=Ee.convert(H.format),tn=Ee.convert(H.type);let Ge;H.isData3DTexture?(Je.setTexture3D(H,0),Ge=G.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Je.setTexture2DArray(H,0),Ge=G.TEXTURE_2D_ARRAY):(Je.setTexture2D(H,0),Ge=G.TEXTURE_2D),Pe.activeTexture(G.TEXTURE0),Pe.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,H.flipY),Pe.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),Pe.pixelStorei(G.UNPACK_ALIGNMENT,H.unpackAlignment);const ln=Pe.getParameter(G.UNPACK_ROW_LENGTH),vt=Pe.getParameter(G.UNPACK_IMAGE_HEIGHT),Bi=Pe.getParameter(G.UNPACK_SKIP_PIXELS),nn=Pe.getParameter(G.UNPACK_SKIP_ROWS),Pr=Pe.getParameter(G.UNPACK_SKIP_IMAGES);Pe.pixelStorei(G.UNPACK_ROW_LENGTH,Ct.width),Pe.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ct.height),Pe.pixelStorei(G.UNPACK_SKIP_PIXELS,Xe),Pe.pixelStorei(G.UNPACK_SKIP_ROWS,st),Pe.pixelStorei(G.UNPACK_SKIP_IMAGES,mt);const xi=A.isDataArrayTexture||A.isData3DTexture,zi=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const xt=Ke.get(A),$t=Ke.get(H),In=Ke.get(xt.__renderTarget),Ut=Ke.get($t.__renderTarget);Pe.bindFramebuffer(G.READ_FRAMEBUFFER,In.__webglFramebuffer),Pe.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Zt=0;Zt<Oe;Zt++)xi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ke.get(A).__webglTexture,J,mt+Zt),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ke.get(H).__webglTexture,Ne,kt+Zt)),G.blitFramebuffer(Xe,st,Xe+ke,st+De,He,gt,He+ke,gt+De,G.DEPTH_BUFFER_BIT,G.NEAREST);Pe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||Ke.has(A)){const xt=Ke.get(A),$t=Ke.get(H);Pe.bindFramebuffer(G.READ_FRAMEBUFFER,R),Pe.bindFramebuffer(G.DRAW_FRAMEBUFFER,P);for(let In=0;In<Oe;In++)xi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,xt.__webglTexture,J,mt+In):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,xt.__webglTexture,J),zi?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,$t.__webglTexture,Ne,kt+In):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,$t.__webglTexture,Ne),J!==0?G.blitFramebuffer(Xe,st,Xe+ke,st+De,He,gt,He+ke,gt+De,G.COLOR_BUFFER_BIT,G.NEAREST):zi?G.copyTexSubImage3D(Ge,Ne,He,gt,kt+In,Xe,st,ke,De):G.copyTexSubImage2D(Ge,Ne,He,gt,Xe,st,ke,De);Pe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else zi?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Ge,Ne,He,gt,kt,ke,De,Oe,wt,tn,Ct.data):H.isCompressedArrayTexture?G.compressedTexSubImage3D(Ge,Ne,He,gt,kt,ke,De,Oe,wt,Ct.data):G.texSubImage3D(Ge,Ne,He,gt,kt,ke,De,Oe,wt,tn,Ct):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ne,He,gt,ke,De,wt,tn,Ct.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ne,He,gt,Ct.width,Ct.height,wt,Ct.data):G.texSubImage2D(G.TEXTURE_2D,Ne,He,gt,ke,De,wt,tn,Ct);Pe.pixelStorei(G.UNPACK_ROW_LENGTH,ln),Pe.pixelStorei(G.UNPACK_IMAGE_HEIGHT,vt),Pe.pixelStorei(G.UNPACK_SKIP_PIXELS,Bi),Pe.pixelStorei(G.UNPACK_SKIP_ROWS,nn),Pe.pixelStorei(G.UNPACK_SKIP_IMAGES,Pr),Ne===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&G.generateMipmap(Ge),Pe.unbindTexture()},this.initRenderTarget=function(A){Ke.get(A).__webglFramebuffer===void 0&&Je.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Je.setTextureCube(A,0):A.isData3DTexture?Je.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Je.setTexture2DArray(A,0):Je.setTexture2D(A,0),Pe.unbindTexture()},this.resetState=function(){k=0,z=0,V=null,Pe.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}const th=new B,$v=new Qt,nh=new B;class Qv extends At{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const Zn=new Ze,jv=new Ze;class e1{constructor(e={}){const t=this;let n,i,r,o;const a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const u=document.createElement("div");u.style.transformStyle="preserve-3d",c.appendChild(u),this.getSize=function(){return{width:n,height:i}},this.render=function(m,p){const _=p.projectionMatrix.elements[5]*o;p.view&&p.view.enabled?(c.style.transform=`translate( ${-p.view.offsetX*(n/p.view.width)}px, ${-p.view.offsetY*(i/p.view.height)}px )`,c.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let S,M;p.isOrthographicCamera&&(S=-(p.right+p.left)/2,M=(p.top+p.bottom)/2);const b=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,E=p.isOrthographicCamera?`scale( ${b} )scale(`+_+")translate("+h(S)+"px,"+h(M)+"px)"+d(p.matrixWorldInverse):`scale( ${b} )translateZ(`+_+"px)"+d(p.matrixWorldInverse),y=(p.isPerspectiveCamera?"perspective("+_+"px) ":"")+E+"translate("+r+"px,"+o+"px)";a.camera.style!==y&&(u.style.transform=y,a.camera.style=y),v(m,m,p)},this.setSize=function(m,p){n=m,i=p,r=n/2,o=i/2,l.style.width=m+"px",l.style.height=p+"px",c.style.width=m+"px",c.style.height=p+"px",u.style.width=m+"px",u.style.height=p+"px"};function h(m){return Math.abs(m)<1e-10?0:m}function d(m){const p=m.elements;return"matrix3d("+h(p[0])+","+h(-p[1])+","+h(p[2])+","+h(p[3])+","+h(p[4])+","+h(-p[5])+","+h(p[6])+","+h(p[7])+","+h(p[8])+","+h(-p[9])+","+h(p[10])+","+h(p[11])+","+h(p[12])+","+h(-p[13])+","+h(p[14])+","+h(p[15])+")"}function f(m){const p=m.elements;return"translate(-50%,-50%)"+("matrix3d("+h(p[0])+","+h(p[1])+","+h(p[2])+","+h(p[3])+","+h(-p[4])+","+h(-p[5])+","+h(-p[6])+","+h(-p[7])+","+h(p[8])+","+h(p[9])+","+h(p[10])+","+h(p[11])+","+h(p[12])+","+h(p[13])+","+h(p[14])+","+h(p[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let p=0,_=m.children.length;p<_;p++)g(m.children[p])}function v(m,p,_,S){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){const M=m.layers.test(_.layers)===!0,b=m.element;if(b.style.display=M===!0?"":"none",M===!0){m.onBeforeRender(t,p,_);let E;m.isCSS3DSprite?(Zn.copy(_.matrixWorldInverse),Zn.transpose(),m.rotation2D!==0&&Zn.multiply(jv.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(th,$v,nh),Zn.setPosition(th),Zn.scale(nh),Zn.elements[3]=0,Zn.elements[7]=0,Zn.elements[11]=0,Zn.elements[15]=1,E=f(Zn)):E=f(m.matrixWorld);const x=a.objects.get(m);if(x===void 0||x.style!==E){b.style.transform=E;const y={style:E};a.objects.set(m,y)}b.parentNode!==u&&u.appendChild(b),m.onAfterRender(t,p,_)}}for(let M=0,b=m.children.length;M<b;M++)v(m.children[M],p,_)}}}const Ys=new B;function An(s,e,t,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;Ys.copy(e),Ys[n]=0,Ys.normalize();const c=.5*o/(o+a),u=1-Ys.angleTo(s)/l;return Math.sign(Ys[t])===1?u*c:a/(o+a)+c+c*(1-u)}class mc extends Fi{constructor(e=1,t=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new B,c=new B,u=new B(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=h.length/6,v=new B,m=.5/o;for(let p=0,_=0;p<h.length;p+=3,_+=2)switch(l.fromArray(h,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[p+0]=u.x*Math.sign(l.x)+c.x*r,h[p+1]=u.y*Math.sign(l.y)+c.y*r,h[p+2]=u.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:v.set(1,0,0),f[_+0]=An(v,c,"z","y",r,n),f[_+1]=1-An(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),f[_+0]=1-An(v,c,"z","y",r,n),f[_+1]=1-An(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),f[_+0]=1-An(v,c,"x","z",r,e),f[_+1]=An(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),f[_+0]=1-An(v,c,"x","z",r,e),f[_+1]=1-An(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),f[_+0]=1-An(v,c,"x","y",r,e),f[_+1]=1-An(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),f[_+0]=An(v,c,"x","y",r,e),f[_+1]=1-An(v,c,"y","x",r,t);break}}static fromJSON(e){return new mc(e.width,e.height,e.depth,e.segments,e.radius)}}function t1(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Dt;l.morphTargetsRelative=a;let c=0;for(let u=0;u<s.length;++u){const h=s[u];let d=0,f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const g in h.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(h.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const g in h.morphAttributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[g].length!==s[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(h.morphAttributes[g]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=h.index.count;else if(h.attributes.position!==void 0)g=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,u),c+=g}}if(t){let u=0;const h=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=s[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=ih(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][d]);const g=ih(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function ih(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new jt(o,t,n);let l=0;for(let c=0;c<s.length;++c){const u=s[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const v=u.getComponent(d,g);a.setComponent(d+h,g,v)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function sh(s,e){if(e===Pf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===vl||e===Xh){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===vl)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function n1(s){const e=new Map,t=new Map,n=s.clone();return Fd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Fd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Fd(s.children[n],e.children[n],t)}class Od extends Zi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new a1(t)}),this.register(function(t){return new l1(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new x1(t)}),this.register(function(t){return new v1(t)}),this.register(function(t){return new M1(t)}),this.register(function(t){return new h1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new f1(t)}),this.register(function(t){return new p1(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new _1(t)}),this.register(function(t){return new g1(t)}),this.register(function(t){return new s1(t)}),this.register(function(t){return new rh(t,ht.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new rh(t,ht.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new y1(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=cr.extractUrlBase(e);o=cr.resolveURL(c,this.path)}else o=cr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ac(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Bd){try{o[ht.KHR_BINARY_GLTF]=new S1(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new U1(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ht.KHR_MATERIALS_UNLIT:o[h]=new r1;break;case ht.KHR_DRACO_MESH_COMPRESSION:o[h]=new b1(r,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:o[h]=new E1;break;case ht.KHR_MESH_QUANTIZATION:o[h]=new T1;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function i1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Bt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class s1{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ve(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Mn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Tl(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new uc(u),c.distance=h;break;case"spot":c=new Bm(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Jn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class r1{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return kn}extendParams(e,t,n){const i=[];e.color=new Ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Mn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(i)}}class o1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Bt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class a1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(r,r)}return Promise.all(i)}}class l1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class c1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=Bt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class u1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class h1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Mn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Lt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class d1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class f1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(r[0],r[1],r[2],Mn),Promise.all(i)}}class p1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=Bt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class m1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(r[0],r[1],r[2],Mn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Lt)),Promise.all(i)}}class g1{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class _1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Xn:null}extendMaterialParams(e,t){const n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class x1{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class v1{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class M1{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class rh{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class y1{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Rn.TRIANGLES&&c.mode!==Rn.TRIANGLE_STRIP&&c.mode!==Rn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const v=new Ze,m=new B,p=new Qt,_=new B(1,1,1),S=new zo(g.geometry,g.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&_.fromBufferAttribute(l.SCALE,b),S.setMatrixAt(b,v.compose(m,p,_));let M=null;for(const b in l)if(b==="_COLOR_0"){const E=l[b];S.instanceColor=new Ao(E.array,E.itemSize,E.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(M===null){const x=S.geometry;M=new Dt,M.name=x.name;for(const y in x.attributes)M.setAttribute(y,x.attributes[y]);for(const y in x.morphAttributes)M.morphAttributes[y]=x.morphAttributes[y];x.index!==null&&M.setIndex(x.index),M.morphTargetsRelative=x.morphTargetsRelative;for(const y of x.groups)M.addGroup(y.start,y.count,y.materialIndex);x.boundingBox!==null&&(M.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(M.boundingSphere=x.boundingSphere.clone()),M.drawRange.start=x.drawRange.start,M.drawRange.count=x.drawRange.count,M.userData=Object.assign({},x.userData),S.geometry=M}const E=l[b];M.setAttribute(b,new Ao(E.array,E.itemSize,E.normalized))}At.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Bd="glTF",Ks=12,oh={JSON:1313821514,BIN:5130562};class S1{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ks),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ks,r=new DataView(e,Ks);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===oh.JSON){const c=new Uint8Array(e,Ks+o,a);this.content=n.decode(c)}else if(l===oh.BIN){const c=Ks+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class b1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Cl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Cl[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=vs[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}h(f)},a,c,Mn,d)})})}}class E1{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class T1{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class zd extends Ds{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,_=1-m,S=p-d+h;for(let M=0;M!==a;M++){const b=o[v+M+a],E=o[v+M+l]*u,x=o[g+M+a],y=o[g+M]*u;r[M]=_*b+S*E+m*x+p*y}return r}}const w1=new Qt;class A1 extends zd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return w1.fromArray(r).normalize().toArray(r),r}}const Rn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},vs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ah={9728:Xt,9729:Ot,9984:Oh,9985:uo,9986:$s,9987:On},lh={33071:Pn,33648:yo,10497:_i},Ca={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},R1={CUBICSPLINE:void 0,LINEAR:gr,STEP:mr},Pa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function C1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new en({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Di})),s.DefaultMaterial}function Wi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Jn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function P1(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function I1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function L1(s){let e;const t=s.extensions&&s.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ia(t.attributes):e=s.indices+":"+Ia(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ia(s.targets[n]);return e}function Ia(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Pl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function D1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const N1=new Ze;class U1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new i1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new lc(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Hm(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ac(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Wi(r,a,i),Jn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(cr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ca[i.type],a=vs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new jt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ca[i.type],c=vs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(f&&f!==h){const p=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(_);S||(v=new c(a,p*f,i.count*f/u),S=new Tp(v,f/u),t.cache.add(_,S)),m=new $l(S,l,d%f/u,g)}else a===null?v=new c(i.count*l):v=new c(a,d,i.count*l),m=new jt(v,l,g);if(i.sparse!==void 0){const p=Ca.SCALAR,_=vs[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,b=new _(o[1],S,i.sparse.count*p),E=new c(o[2],M,i.sparse.count*l);a!==null&&(m=new jt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,y=b.length;x<y;x++){const I=b[x];if(m.setX(I,E[x*l]),l>=2&&m.setY(I,E[x*l+1]),l>=3&&m.setZ(I,E[x*l+2]),l>=4&&m.setW(I,E[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=ah[d.magFilter]||Ot,u.minFilter=ah[d.minFilter]||On,u.wrapS=lh[d.wrapS]||_i,u.wrapT=lh[d.wrapT]||_i,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Xt&&u.minFilter!==Ot,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,g){t.parse(d,f,g)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(d){return new Promise(function(f,g){let v=f;t.isImageBitmapLoader===!0&&(v=function(m){const p=new qt(m);p.needsUpdate=!0,f(p)}),t.load(cr.resolveURL(d,r.path),v,void 0,g)})})}const h=u.then(function(d){return c===!0&&a.revokeObjectURL(l),Jn(d,o),d.userData.mimeType=o.mimeType||D1(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ht.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new rd,Gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new id,Gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return en}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ht.KHR_MATERIALS_UNLIT]){const h=i[ht.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ve(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Mn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Lt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=mn);const u=r.alphaMode||Pa.OPAQUE;if(u===Pa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Pa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==kn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new _e(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==kn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==kn){const h=r.emissiveFactor;a.emissive=new Ve().setRGB(h[0],h[1],h[2],Mn)}return r.emissiveTexture!==void 0&&o!==kn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Jn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Wi(i,h,r),h})}createUniqueName(e){const t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ch(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=L1(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=ch(new Dt,c,t),c.mode===Rn.TRIANGLE_STRIP?d=d.then(f=>sh(f,Xh)):c.mode===Rn.TRIANGLE_FAN&&(d=d.then(f=>sh(f,vl))),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?C1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const v=u[f],m=o[f];let p;const _=c[f];if(m.mode===Rn.TRIANGLES||m.mode===Rn.TRIANGLE_STRIP||m.mode===Rn.TRIANGLE_FAN||m.mode===void 0){const S=r.isSkinnedMesh===!0,M=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");S&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=S&&M?new Ip(v,_):new on(v,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===Rn.LINES)p=new sd(v,_);else if(m.mode===Rn.LINE_STRIP)p=new ec(v,_);else if(m.mode===Rn.LINE_LOOP)p=new Up(v,_);else if(m.mode===Rn.POINTS)p=new Fp(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&I1(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Jn(p,r),m.extensions&&Wi(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Wi(i,h[0],r),h[0];const d=new Pi;r.extensions&&Wi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new pn(ot.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new hc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new Ze;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ql(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],v=f.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],v=h[3],m=h[4],p=[];for(let S=0,M=d.length;S<M;S++){const b=d[S],E=f[S],x=g[S],y=v[S],I=m[S];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const w=n._createAnimationTracks(b,E,x,y,I);if(w)for(let C=0;C<w.length;C++)p.push(w[C])}const _=new El(r,void 0,p);return Jn(_,i),_})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,N1)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){const f=u.userData.pivot,g=h[0];u.pivot=new B().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new nd:c.length>1?u=new Pi:c.length===1?u=c[0]:u=new At,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Jn(u,r),r.extensions&&Wi(n,u,r),r.matrix!==void 0){const h=new Ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Pi;n.name&&(r.name=i.createUniqueName(n.name)),Jn(r,n),n.extensions&&Wi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){const d=l[u];d.parent!==null?r.add(n1(d)):r.add(d)}const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof Gn||d instanceof qt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Ei[r.path]===Ei.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(Ei[r.path]){case Ei.weights:u=Sr;break;case Ei.rotation:u=br;break;case Ei.translation:case Ei.scale:u=Io;break;default:n.itemSize===1?u=Sr:u=Io;break}const h=i.interpolation!==void 0?R1[i.interpolation]:gr,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){const v=new u(l[f]+"."+Ei[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Pl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof br?A1:zd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function F1(s,e,t){const n=e.attributes,i=new yn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){const u=Pl(vs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new B,l=new B;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=Pl(vs[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new ei;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function ch(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Cl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return pt.workingColorSpace!==Mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Jn(s,e),F1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?P1(s,e.targets,t):s})}const O1=new lc,B1=new Od,uh=new Map,Rr=s=>"./assets/"+s;function _t(s,e=.67,t=0){return new en({color:s,roughness:e,metalness:t})}function Un(s,e,t,n,i=.45){const r=_t(e,t);for(const[o,a]of[["map","color"],["normalMap","normal"]]){const l=Rr(s+"/"+a+".jpg");let c=uh.get(l);c||(c=O1.load(l),c.wrapS=c.wrapT=_i,c.anisotropy=4,o==="map"&&(c.colorSpace=Lt),uh.set(l,c)),r[o]=c}return r.normalScale.setScalar(i),r.userData.meters=n,r}const U={plaster:Un("plastered_wall_02",16774622,.88,2.3,.19),floor:Un("herringbone_parquet",15322024,.58,2.45,.44),oak:Un("wood_floor_deck",12622706,.56,2,.26),table:Un("wood_table_001",14072219,.49,1.2,.24),walnut:Un("wood_floor_deck",7361601,.49,1.5,.27),stone:Un("marble_01",15787734,.33,1.35,.18),linen:Un("rough_linen",16116174,.91,.8,.29),brocade:Un("quatrefoil_jacquard_fabric",14797222,.93,.69,.32),roof:Un("clay_roof_tiles_03",15190706,.84,2.1,.56),rock:Un("rock_face_03",12826779,.97,3.8,.63),sand:Un("aerial_sand",15259058,.98,3,.36),trim:_t(14998469,.6),cream:_t(15919831,.68),green:_t(5401698,.61),brass:_t(11704931,.31,.72),bronze:_t(4998712,.39,.64),ink:_t(2632229,.48),black:_t(1448214,.68),metal:_t(9607056,.27,.76),clay:_t(11564116,.84),blue:_t(6651525,.82),ivory:_t(15525336,.87),velvet:_t(6846060,.89)},Cs=_t(15853008,.94);Cs.normalMap=U.linen.normalMap;Cs.normalScale.setScalar(.36);Cs.userData.meters=.85;const qo=new en({color:13101027,metalness:.2,roughness:.09,transparent:!0,opacity:.048,depthWrite:!1}),le=(s=0,e=0,t=0)=>new B(s,e,t),nt=(s,e=0,t=0,n=0)=>{const i=new Pi;return s.add(i),i.position.set(e,t,n),i};function Tt(s,e,t,n=0,i=0,r=0){const o=new on(e,t);return s.add(o),o.position.set(n,i,r),o.castShadow=!t.transparent,o.receiveShadow=!0,o}function z1(s,e,t){if(!t)return s;const n=s.attributes.uv,i=s.attributes.normal;for(let r=0;r<n.count;r++){const o=Math.abs(i.getX(r)),a=Math.abs(i.getY(r)),l=o>.65?e[2]:e[0],c=a>.65?e[2]:e[1];n.setXY(r,n.getX(r)*l/t,n.getY(r)*c/t)}return s}const gi=new Map;function k1(){gi.clear()}const H1=ct.lights_fragment_begin.replace("getPointLightInfo( pointLight, geometryPosition, directLight );",`$&
 directLight.visible = directLight.visible && dot(geometryNormal, directLight.direction) > 0.0;`).replace("getDirectionalLightInfo( directionalLight, directLight );",`$&
 directLight.visible = directLight.color != vec3(0.0) && dot(geometryNormal, directLight.direction) > 0.0;`).replaceAll("RE_Direct( directLight,","if (directLight.visible) RE_Direct( directLight,");function G1(s){s.fragmentShader=s.fragmentShader.replace("#include <lights_fragment_begin>",H1)}function V1(s){s.traverse(e=>{for(const t of Array.isArray(e.material)?e.material:[e.material])t?.type==="MeshStandardMaterial"&&t.onBeforeCompile===Gn.prototype.onBeforeCompile&&(t.onBeforeCompile=G1)})}function X(s,e,t,n,i,r,o,a=U.trim,l=0){const c=["box",i,r,o,l,a.userData.meters].join("/");let u=gi.get(c);return u||(u=l?new mc(i,r,o,l<.04?1:2,Math.min(l,i/2,r/2,o/2)):new Fi(i,r,o),z1(u,[i,r,o],a.userData.meters),gi.set(c,u)),Tt(s,u,a,e,t,n)}function It(s,e,t,n,i,r,o,a){const l=Math.max(i,r,o)<.19,c=l?"sphere-small":"sphere";gi.has(c)||gi.set(c,new Go(1,l?14:22,l?9:16));const u=Tt(s,gi.get(c),a,e,t,n);return u.scale.set(i,r,o),u}function rt(s,e,t,n,i,r,o,a,l=24){const c=["cylinder",i,r,o,l].join("/");return gi.has(c)||gi.set(c,new tc(i,r,o,l)),Tt(s,gi.get(c),a,e,t,n)}function Et(s,e,t,n,i){const r=t.clone().sub(e),o=rt(s,0,0,0,n,n,r.length(),i,12);return o.position.copy(e).lerp(t,.5),o.quaternion.setFromUnitVectors(le(0,1,0),r.normalize()),o}function Ps(s,e,t,n){return Tt(s,new oc(new cd(e),Math.max(12,e.length*2),t,8,!1),n)}const La=new Map;async function kd(s,e,t,n,i,r=0,o=0){La.has(e)||La.set(e,B1.loadAsync(Rr(e+"/model.gltf")));const a=await La.get(e),l=a.scene.clone(!0),c=new yn().setFromObject(l),u=c.getSize(le()),h=c.getCenter(le()),d=nt(s,t,o,n);d.rotation.y=r;const f=i/u.x;return l.scale.multiplyScalar(f),l.position.set(-h.x*f,-c.min.y*f,-h.z*f),l.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.receiveShadow=!0)}),d.add(l),d}function Gt(s){s.updateWorldMatrix(!0,!0);const e=s.matrixWorld.clone().invert(),t=new Map;s.traverse(n=>{if(!n.isMesh)return;const i=new Dt().copy(n.geometry);i.index||i.setIndex(Array.from({length:i.attributes.position.count},(r,o)=>o)),i.applyMatrix4(new Ze().multiplyMatrices(e,n.matrixWorld)),i.clearGroups(),t.has(n.material)||t.set(n.material,[]),t.get(n.material).push(i)}),s.clear();for(const[n,i]of t){const r=t1(i,!1);if(!r)throw Error("Geometry batch mismatch");const o=Tt(s,r,n);o.castShadow=!n.transparent;for(const a of i)a.dispose()}}let Da;function _o(s,e,t,n,i,r=.22,o=.012){if(!Da){const c=document.createElement("canvas");c.width=c.height=96;const u=c.getContext("2d"),h=u.createRadialGradient(48,48,3,48,48,47);h.addColorStop(0,"#18160deb"),h.addColorStop(.48,"#18160db5"),h.addColorStop(1,"#18160d00"),u.fillStyle=h,u.fillRect(0,0,96,96),Da=new Ls(c)}const a=new kn({map:Da,transparent:!0,opacity:r,depthWrite:!1}),l=Tt(s,new an(n,i),a,e,o,t);return l.rotation.x=-Math.PI/2,l.castShadow=!1,l}const xo=[{title:"岛上潮声",color:"#506d68",pages:["清晨，推开露台门，先听见的是水。近处的波峰在礁石旁碎开，远处的海面却只剩细细一条亮边。坐在木椅上看久了，才能分辨那条亮边也在移动。","傍晚的潮声比白天清楚。关上客厅的灯，玻璃里的倒影慢慢淡去，窗框把海湾分成了几幅不同的画。"]},{title:"窗边观星记",color:"#394b65",pages:["初到岛上，我以为每天同一时间抬头，看到的星空也会一样。过了一季才发现，旧日记里画在窗框左侧的亮星，已经悄悄挪了位置。","晴夜适合把灯调暗，走到露台尽头。等眼睛适应以后，银河才从星点之间浮现出来。云经过的时候，星星一颗一颗消失，又重新亮起。"]},{title:"海岸花园手记",color:"#815b48",pages:["海风带着盐雾。园里的花沿墙而生，草叶贴近地面，在风停的间隙重新挺起。午后，猫常隔着窗看那些摇晃的花头。","晚饭前再绕花园走一圈。秋千的绳索轻响，远处的山先暗下去。回头看，书房的灯已经把一小块草地照亮。"]}];function W1(s,e){const t=document.getElementById("reader"),n=t.querySelector("select");let i=xo[s],r=0;n.replaceChildren(...xo.map((c,u)=>new Option(c.title,String(u)))),n.value=String(s),n.onchange=()=>{i=xo[Number(n.value)],r=0,l()};const o=t.querySelector("[data-prev]"),a=t.querySelector("[data-next]");function l(){t.querySelector("h2").textContent=i.title,t.querySelector("article").textContent=i.pages[r],t.querySelector("output").textContent=r+1+" / "+i.pages.length,o.disabled=r===0,a.disabled=r===i.pages.length-1}o.onclick=()=>{r--,l()},a.onclick=()=>{r++,l()},t.querySelector("[data-close]").onclick=()=>t.close(),t.onclose=e,l(),t.showModal()}const Hd={left:4.05,right:11,front:6.1,back:10.64},Cn=9.84,Ii={x:8.05,z:10.04};function Gd(s,e){const t=Hd;return s>t.left&&s<t.right&&e>t.front&&e<t.back}function X1(){const s=document.createElement("canvas");s.width=s.height=128;const e=s.getContext("2d");e.fillStyle="#aca697",e.fillRect(0,0,128,128);for(let n=0;n<2;n++)for(let i=0;i<2;i++)e.fillStyle=(n+i)%2?"#b9c6ba":"#ede7d6",e.fillRect(n*64+1,i*64+1,62,62);const t=new Ls(s);return t.colorSpace=Lt,t.wrapS=t.wrapT=_i,t.repeat.set(8,5),t.anisotropy=4,new en({map:t,roughness:.48})}function q1(){const s=document.createElement("canvas");s.width=s.height=192;const e=s.getContext("2d");e.fillStyle="#c6c5af",e.fillRect(0,0,192,192);for(let i=0;i<4;i++)for(let r=-1;r<2;r++){const o=r*96+i%2*48,a=i*48;e.fillStyle=(r+i)%2?"#8da597":"#91a89b",e.fillRect(o+1,a+1,94,46),e.fillStyle="#a1b4a7",e.fillRect(o+2,a+2,92,1)}const t=new Ls(s);t.colorSpace=Lt,t.wrapS=t.wrapT=_i,t.anisotropy=4;const n=new en({map:t,roughness:.4});return n.userData.meters=.64,n}function Y1(s,e,t,n,i){const{left:r,right:o,front:a,back:l}=Hd,c=(r+o)/2,u=l-a,h=3.39,d=_t(7836551,.48),f=_t(15986401,.2);function g(te,Te,me,D){X(t,te,h/2,Te,me,h,D,U.plaster),n(te,Te,me,D,"墙")}g(r,(a+l)/2,.22,u),g(o,(a+l)/2,.22,u);const v=6.64,m=1.52,p=1.83,_=2.78,S=v-m/2,M=v+m/2;g((r+S)/2,l,S-r,.22),g((M+o)/2,l,o-M,.22),X(t,v,p/2,l,m,p,.22,U.plaster),X(t,v,(h+_)/2,l,m,h-_,.22,U.plaster),n(v,l,m,.22,"窗");const b=new en({color:12966095,roughness:.82,transparent:!0,opacity:.74});X(t,v,(p+_)/2,l,m,_-p,.021,b);for(const te of[S,v,M])X(t,te,(p+_)/2,l,.054,_-p+.08,.14,U.trim);for(const te of[p,_])X(t,v,te,l,m+.1,.082,.25,U.trim);X(t,c,-.115,a+u/2,o-r+.2,.22,u,U.stone),X(t,c,h+.09,a+u/2,o-r+.4,.18,u+.32,U.trim),X(t,c,h+.22,a+u/2,o-r+.56,.13,u+.48,U.roof);const E=Tt(e,new an(o-r,u),X1(),c,.004,a+u/2);E.rotation.x=-Math.PI/2;const x=q1();for(const[te,Te,me,D]of[[c,l-.13,o-r,.055],[r+.13,a+u/2,.055,u],[o-.13,a+u/2,.055,u]])X(e,te,.58,Te,me,1.16,D,x),X(e,te,1.17,Te,me+.018,.047,D+.018,U.trim);const y=1.3,I=nt(s,Cn,0,a+.11),w=new wr,C=.21,N=.31;w.moveTo(-y/2,0),w.lineTo(-C,0),w.lineTo(-C,N),w.absarc(0,N,C,Math.PI,0,!0),w.lineTo(C,0),w.lineTo(y/2,0),w.lineTo(y/2,2.35),w.lineTo(-y/2,2.35),w.closePath(),Tt(I,new ko(w,{depth:.052,bevelEnabled:!1,curveSegments:12}),U.green);for(const te of[-.015,.068]){for(const Te of[-1,1])X(I,Te*.49,1.42,te,.038,1.52,.019,U.trim);for(const Te of[.66,2.18])X(I,0,Te,te,1.02,.04,.019,U.trim);X(I,.52,1.01,te,.045,.21,.014,U.brass,.008)}Gt(I);for(const te of[Cn-y/2-.055,Cn+y/2+.055])X(e,te,1.22,a,.1,2.44,.37,U.trim);X(t,Cn,2.95,a,1.42,1.05,.31,U.plaster),X(e,Cn,2.4,a,1.56,.12,.39,U.trim);const W=i("卫生间灯",9.02,6.34,0,[[7.83,2.75,8.42,28,5.8]],!1);rt(e,7.83,3.34,8.42,.16,.16,.08,U.brass),rt(e,7.83,3.14,8.42,.018,.018,.36,U.brass),It(e,7.83,2.91,8.42,.18,.16,.18,W);const R=nt(e,10.52,0,8.32);R.rotation.y=Math.PI/2,X(R,0,.43,0,1.46,.73,.59,U.green,.036);for(const te of[-.35,.35])X(R,te,.45,-.306,.65,.57,.035,d,.012),X(R,te,.61,-.335,.18,.02,.024,U.brass);X(R,0,.85,0,1.58,.095,.72,U.stone,.025);const P=new As([[.06,0],[.22,.02],[.3,.095],[.295,.106],[.265,.093],[.18,.025],[.035,.012]].map(([te,Te])=>new _e(te,Te)),36);Tt(R,P,f,0,.9,-.045).scale.z=.72,Ps(R,[le(0,.89,.232),le(0,1.125,.232),le(0,1.14,.1),le(0,1.09,.06)],.016,U.brass);const k=rt(R,0,1.77,.27,.5,.5,.032,U.brass,48);k.rotation.x=Math.PI/2;const z=rt(R,0,1.77,.24,.471,.471,.018,_t(12111052,.12,.93),48);z.rotation.x=Math.PI/2,n(10.52,8.32,.74,1.6);const V=nt(e,5.34,0,10.04);X(V,0,.22,.15,.25,.42,.22,f,.042),X(V,0,.037,.008,.28,.072,.39,f,.028),X(V,0,.65,.23,.42,.43,.21,f,.055),X(V,0,.88,.23,.46,.043,.24,f,.016),rt(V,0,.907,.22,.034,.034,.009,U.metal),It(V,0,.21,-.015,.145,.215,.21,f);const q=Tt(V,new As([[.08,0],[.15,.035],[.202,.125],[.2,.17],[.145,.16],[.07,.06]].map(([te,Te])=>new _e(te,Te)),32),f,0,.25,-.085);q.scale.z=1.42;const j=Tt(V,new Li(.179,.023,8,40),U.ivory,0,.43,-.092);j.rotation.x=-Math.PI/2,j.scale.y=1.47,n(5.34,10,.49,.73);const $=new en({color:12048856,transparent:!0,opacity:.15,roughness:.16,depthWrite:!1});X(e,5.09,.035,7.04,1.76,.065,1.6,U.stone,.018),X(e,5.94,1.05,6.77,.024,2.1,1.05,$),n(5.94,6.77,.04,1.05);for(const te of[6.25,7.29])Et(e,le(5.94,.065,te),le(5.94,2.13,te),.012,U.brass);Et(e,le(4.28,.97,7.02),le(4.28,2.23,7.02),.016,U.brass),Et(e,le(4.28,2.23,7.02),le(4.65,2.23,7.02),.019,U.brass),rt(e,4.65,2.19,7.02,.14,.16,.045,U.brass),rt(e,5.1,.073,7.13,.065,.065,.008,U.metal),X(e,4.22,.95,7.02,.13,.085,.24,U.brass,.016),Et(e,le(6.32,1.13,l-.24),le(7.12,1.13,l-.24),.018,U.brass),X(e,6.72,.91,l-.25,.41,.48,.052,U.linen,.018);let ue=!0;I.position.x=Cn-y;const he=new yn;function Q(){he.min.set(I.position.x-y/2,0,I.position.z),he.max.set(I.position.x+y/2,2.35,I.position.z+.052)}Q();const ge={label:()=>ue?"合上卫生间移门":"推开卫生间移门",point:le(10.63,1.13,a),size:[.24,.48,.52],range:2.5,run(){ue=!ue}};for(const te of[a-.205,a+.2])X(e,10.63,1.13,te,.085,.2,.03,U.brass,.012);return{action:ge,doorBox:he,blocks(te,Te,me){return te>he.min.x-me&&te<he.max.x+me&&Te>he.min.z-me&&Te<he.max.z+me},update(te,Te,me){const D=Cn-(ue?y:0),ee=ot.damp(I.position.x,D,7,te);return I.position.x===D||[Te,me].some(oe=>Math.abs(oe.z-I.position.z)<.35&&Math.abs(oe.x-ee)<y/2+.25)?!1:(I.position.x=Math.abs(D-ee)<.002?D:ee,Q(),!0)}}}function K1(s,e,t,n=384,i=466){const r=document.createElement("canvas");r.width=n,r.height=i;const o=r.getContext("2d");o.fillStyle=e,o.fillRect(0,0,n,i),o.strokeStyle=t,o.lineWidth=3,o.strokeRect(20,20,n-40,i-40),o.lineWidth=1,o.strokeRect(27,27,n-54,i-54),o.fillStyle=t,o.font='bold 77px "Songti SC","SimSun",serif',o.textAlign="center",o.textBaseline="middle";const a=Math.ceil(s.length/2);o.fillText(s.slice(0,a),n/2,i*.41,n*.84),o.fillText(s.slice(a),n/2,i*.62,n*.84);const l=new Ls(r);return l.colorSpace=Lt,l.anisotropy=4,new en({map:l,roughness:.75})}function Z1(s,e,t,n,i,r){const o=[],a=[],l=[],c=[],u=(R,P,k,z,V=2.6)=>o.push({label:R,point:P,size:k,run:z,range:V});function h(R,P,k,z,V,q=!0){const j=nt(s,P,1.26,k);j.rotation.y=z,X(j,0,0,0,.145,.205,.026,U.brass,.008);const $=X(j,0,0,.025,.079,.112,.032,U.cream,.008),ue=new en({color:16773333,emissive:16761976}),he=V.map(([te,Te,me,D,ee])=>{const oe=new uc(16771282,D,ee,2);return oe.position.set(te,Te,me),s.add(oe),{light:oe,power:D}});he[0].light.castShadow=q,he[0].light.shadow.mapSize.set(256,256),he[0].light.shadow.autoUpdate=!1,he[0].light.shadow.needsUpdate=!0,he[0].light.shadow.camera.near=.1,he[0].light.shadow.bias=-.001,he[0].light.shadow.normalBias=.018,he[0].light.shadow.camera.far=V[0][4],he[0].light.shadow.radius=2.3;const Q={name:R,on:!0,bulb:ue,sources:he},ge=()=>{$.rotation.x=Q.on?-.21:.21,ue.emissiveIntensity=Q.on?1.8:0;for(const{light:te,power:Te}of he)te.intensity=Q.on?Te:0};return ge(),l.push(Q),u(()=>R+(Q.on?" · 关灯":" · 开灯"),le(P,1.26,k),[.28,.34,.26],()=>{Q.on=!Q.on,ge()}),ue}const d=h("客厅灯",3.58,1.02,-Math.PI/2,[[-5.5,3.19,-1.25,54,15],[-6.25,3.15,3.65,30,10],[-10.38,1.1,.38,4,3.6]]),f=h("卧室灯",3.98,3.24,Math.PI/2,[[7.3,3.12,1.1,32,10],[5.42,1.31,5.22,6,3.8]]),g=h("厨房灯",2.94,5.85,Math.PI,[[.52,2.46,5,17,7],[2.6,2.46,5,13,6]]);for(const R of[.6,2.6])rt(e,R,2.48,5.02,.17,.17,.014,g);function v(R,P,k,z,V,q=z/2){X(t,R,q,P,k,z,V,U.plaster),q===z/2&&n(R,P,k,V,"墙")}const m=nt(s),p=11.82;X(m,-6.85,-.1,(r+p)/2,8.3,.2,p-r,U.table),v(-2.74,8.93,.2,3.55,5.82),v(-6.85,11.79,8.32,3.55,.22),v(-10.94,6.73,.2,3.55,1.32),v(-10.94,11.06,.2,3.55,1.59),v(-10.94,8.83,.2,.81,2.87),X(t,-10.94,3.13,8.83,.2,.84,2.87,U.plaster),X(m,-10.94,1.76,8.83,.02,1.92,2.87,qo);for(const R of[7.42,8.83,10.24])X(m,-10.93,1.77,R,.12,1.95,.055,U.walnut);X(t,-6.85,3.65,8.94,8.6,.2,6.12,U.trim),X(t,-6.85,3.83,8.94,8.78,.18,6.27,U.roof),X(m,-8.99,3.08,6.1,1.68,1.47,.27,U.plaster);for(const R of[-9.84,-8.14])X(m,R,1.2,6.1,.1,2.43,.33,U.trim);const _=h("书房灯",-7.9,6.29,0,[[-6.85,2.81,8.85,36,10],[-4.25,1.26,9.89,4.6,4]]);Et(m,le(-6.85,3.54,8.85),le(-6.85,3,8.85),.017,U.brass),rt(m,-6.85,2.98,8.85,.12,.31,.23,U.green),rt(m,-6.85,2.85,8.85,.27,.27,.018,_),X(m,-6.95,1.2,11.44,6.5,2.4,.29,U.walnut);for(const R of[-10.13,-8.56,-6.94,-5.32,-3.77])X(m,R,1.19,11.26,.073,2.42,.52,U.oak);for(const R of[.19,.7,1.24,1.8,2.38])X(m,-6.95,R,11.23,6.5,.07,.57,U.oak);n(-6.95,11.3,6.55,.6);const S=[U.green,U.clay,U.blue,U.velvet,U.ivory,U.walnut];for(let R=0;R<4;R++)for(let P=0;P<38;P++){if(R===2&&P>5&&P<33)continue;const k=-10+P*.162,z=.28+.105*(.5+.5*Math.sin(P*4.3+R)),V=[.23,.74,1.28,1.84][R];X(m,k,V+z/2,11.12,.112,z,.25,S[(R*3+P)%6]),X(m,k,V+z*.78,10.99,.095,.011,.008,U.brass)}xo.slice(0,3).forEach((R,P)=>{const k=-8.65+P*1.58;X(m,k,1.52,11.02,.39,.49,.12,_t(R.color),.011);const z=Tt(m,new an(.375,.45),K1(R.title,R.color,"#efddb1"),k,1.52,10.953);z.rotation.y=Math.PI,u(()=>"翻开《"+R.title+"》",le(k,1.52,10.91),[.66,.55,.19],V=>V.read(P))}),X(m,-4.59,.77,9.22,1.13,.09,2.23,U.table,.04);for(const R of[-5.02,-4.16])for(const P of[8.36,10.06])X(m,R,.37,P,.079,.73,.079,U.walnut);n(-4.59,9.22,1.13,2.23),i("dining_chair_02",-5.59,9.16,.52,Math.PI/2),rt(m,-4.25,.84,9.89,.14,.17,.044,U.brass),Et(m,le(-4.25,.84,9.89),le(-4.25,1.3,9.89),.027,U.brass),rt(m,-4.25,1.37,9.89,.12,.2,.19,U.green),rt(m,-4.25,1.272,9.89,.185,.185,.012,_),Gt(m);function M(R,P,k,z,V,q=.62,j=.77){a.push({label:R,point:le(P,z-.65,k),size:[q,.79,j],eye:le(P,z,k),at:V})}for(const R of[-2.37,-1.4,-.43])M("客厅沙发",-4.6,R,1.16,le(-10.74,1.96,-1.38),.96,.94);const b=-1.18,E=-1.76;i("mid_century_lounge_chair",b,E,.96,Math.PI),n(b,E,.96,1.13),M("观海单人椅",b,E,1.15,le(b,1.2,-18),.94,1.06),i("mid_century_lounge_chair",-9.52,8.55,.91,.57),n(-9.52,8.55,.88,.88),M("书房阅读椅",-9.52,8.55,1.13,le(-7.55,1.47,11.3),.93,.89),M("书桌椅",-5.59,9.16,1.2,le(-4.4,1.03,9.17)),n(-5.59,9.16,.5,.5);for(const R of[-7.15,-5.55])for(const P of[2.85,4.83])M("餐椅",R,P,1.19,le(R,1.03,3.83));for(let R=0;R<5;R++)X(e,-5.4,.46,-8.14+R*.1,2.08,.065,.089,U.table,.014);for(const R of[-6.24,-4.56])for(const P of[-8.09,-7.76])X(e,R,.22,P,.083,.42,.083,U.bronze);for(let R=0;R<3;R++)X(e,-5.4,.65+R*.14,-7.69,2.08,.109,.06,U.table,.014);n(-5.4,-7.92,2.12,.55),M("露台长椅",-5.4,-7.95,1.21,le(-5.4,1.46,-22),2);const x=7.2,y=-8.15;for(const R of[x-1.25,x+1.25]){for(const P of[-.78,.78])Et(e,le(R,0,y+P),le(R,2.72,y),.067,U.oak);n(R,y,.13,1.54)}Et(e,le(x-1.37,2.72,y),le(x+1.37,2.72,y),.082,U.oak);const I=nt(s,x,2.65,y);for(const R of[-.59,.59])for(const P of[-.16,.16])Et(I,le(R,0,0),le(R,-2.15,P),.014,U.bronze);X(I,0,-2.16,0,1.44,.084,.48,U.table,.025),Gt(I),n(x,y,1.52,.59),M("海景秋千",x,y,1.24,le(x,1.5,-20),1.5);const w=a.at(-1);w.pivot=I;function C(R,P,k,z,V){const q=nt(e,P,z,k),j=V?.43:.52,$=V?.48:1.05;X(q,0,$/2,.05,j,$,.32,V?U.ink:U.cream,.04),X(q,0,$*.09,-.12,j,.065,.36,U.metal,.018),X(q,0,$*.79,-.08,j,.14,.33,V?U.metal:U.green,.023),rt(q,0,$*.66,-.185,.027,.024,.09,U.metal),V||(rt(q,0,1.25,.045,.19,.17,.39,_t(9089212,.23)),n(P,k,.57,.56));const ue=$*.09+.038;rt(q,0,ue+.048,-.19,.064,.048,.096,U.ivory);const he=V?_t(4401427,.26):_t(8895168,.18),Q=rt(s,P,z+$*.45,k-.185,.009,.009,$*.38,he,10);Q.visible=!1;const ge=rt(s,P,z+ue+.05,k-.19,.055,.05,.008,he);ge.visible=!1;const te={stream:Q,liquid:ge,remaining:0,base:z+ue};c.push(te),u(()=>R,le(P,z+$*.64,k-.12),[j+.1,$+.1,.49],()=>{te.remaining=3,ge.visible=!0})}C("咖啡机 · 萃取一杯",2.71,5.33,1.05,!0),C("饮水机 · 接水",-2.77,5.35,0,!1);const N=nt(s),W=Y1(s,N,t,n,h);return Gt(N),o.push(W.action),{actions:o,seats:a,circuits:l,livingBulb:d,bedroomBulb:f,bathroom:W,update(R,P,k){const z=k===w?.19:.025;I.rotation.x=ot.damp(I.rotation.x,Math.sin(R*1.62)*z,5,P);for(const V of c)V.remaining<=0||(V.remaining=Math.max(0,V.remaining-P),V.stream.visible=V.remaining>0,V.liquid.position.y=V.base+.018+.079*(1-V.remaining/3))}}}const En={x:3.34,z:-1.69},Ai={x:3.37,z:-.37},hh=[7,12,18];function J1(s){const e=new Date(s+288e5),t=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())-8*36e5,n=hh.filter(i=>t+i*36e5<=s).at(-1);return n===void 0?t-864e5+hh.at(-1)*36e5:t+n*36e5}function $1(s,e,t){const n=_t(9921340,.92),i=_t(7908010,.17,.24),r=nt(e,En.x,0,En.z);r.rotation.y=Math.PI/2,X(r,0,.004,-.068,.56,.008,.7,U.green,.003),X(r,0,.3,.055,.39,.54,.33,U.ivory,.055),X(r,0,.56,.055,.39,.055,.33,U.walnut,.018),X(r,0,.287,-.12,.15,.105,.022,U.ink,.008),X(r,0,.38,-.119,.13,.05,.012,U.black,.008),X(r,0,.38,-.129,.085,.009,.008,new kn({color:9161680}));const o=new As([[.045,0],[.105,.012],[.151,.09],[.149,.1],[.137,.094],[.1,.033],[.042,.024]].map(([P,k])=>new _e(P,k)),36);rt(r,0,.071,-.245,.116,.133,.126,U.green),Tt(r,o,U.metal,0,.134,-.245);const a=nt(s,En.x-.245,.213,En.z);for(let P=0;P<32;P++){const k=P*2.399,z=.114*Math.sqrt(P/32);It(a,z*Math.cos(k),.022*(1-z/.12),z*Math.sin(k),.014,.01,.012,n)}Gt(a),t(En.x-.06,En.z,.71,.55);const l=nt(s,En.x-.18,.16,En.z);for(let P=0;P<5;P++)It(l,-P*.011,P*.023,(P%3-1)*.024,.012,.009,.011,n);Gt(l);const c=nt(e,Ai.x,0,Ai.z);rt(c,0,.1,0,.21,.205,.19,U.ivory),rt(c,0,.198,0,.18,.18,.008,i),Ps(c,[le(.08,.19,0),le(.08,.33,0),le(-.02,.32,0),le(-.06,.2,0)],.012,i),t(Ai.x,Ai.z,.46,.46);const{x:u,z:h}=Ii,d=nt(e,u,0,h),f=_t(13286045,.98),g=_t(7900803,.67);X(d,0,.061,0,.78,.12,.94,U.ivory,.045),X(d,0,.138,-.061,.674,.045,.66,f,.014);for(const P of[-1,1])X(d,P*.365,.235,.012,.059,.33,.9,g,.025),Et(d,le(P*.334,.284,-.375),le(P*.334,.284,.286),.014,U.metal);X(d,0,.225,.405,.77,.33,.16,U.ivory,.025),X(d,0,.037,-.471,.53,.069,.18,g,.022);const v=nt(s,u,.4,h+.48);X(v,0,0,-.11,.73,.037,.22,g,.016),Gt(v);const m=nt(s,u,.391,h+.295);X(m,0,0,0,.69,.043,.034,U.metal,.008);for(let P=0;P<17;P++)Et(m,le(-.303+P*.038,-.012,0),le(-.303+P*.038,-.112,-.012),.005,U.metal);Gt(m);const p=new kn({color:10213024});X(d,.365,.413,-.24,.039,.014,.075,p,.006);for(let P=0;P<80;P++){const k=Math.sin(P*34.23)*.307,z=Math.sin(P*12.71)*.285-.05,V=Tt(d,new Ho(.009,0),P%3?U.cream:f,k,.16,z);V.scale.y=.28}const _=nt(s,u-.12,.173,h-.08);It(_,0,0,0,.049,.019,.034,n),It(_,.04,0,-.016,.029,.017,.026,n),Gt(_),_.visible=!1,t(u,h,.82,1.04);let S=0;try{S=Number(localStorage.getItem("villa.extraMeal"))||0}catch{}addEventListener("storage",P=>{P.key==="villa.extraMeal"&&(S=Number(P.newValue)||0)});let M=0,b=0,E=-1;function x(P){M=Math.max(J1(P),S<=P?S:0),b=Math.max(0,1-(P-M)/(14*6e4)),a.visible=b>.02,a.scale.setScalar(.44+.56*b)}let y="idle",I=0,w=0,C=!1,N=!1,W=!1;function R(P,k){const z=Math.abs(k.x-u),V=k.z-h,q=z<.34&&Math.abs(V)<.4,j=z<.7&&V>-.91&&V<.75;if(q&&(C=!0,!N&&w>0&&(W=!0)),N&&!q&&(_.visible=!0),N=q,j)I=0,(C||y!=="idle")&&(y="occupied");else if(C&&(I+=P,y=I<5?"waiting":"cleaning",y==="cleaning")){w=Math.min(1,w+P/5.2);const $=ot.smoothstep(w,.02,.28),ue=ot.smoothstep(w,.36,.82);m.position.z=h+.295-.66*($-ue),m.position.y=.391-.115*(ot.smoothstep(w,.28,.36)-ot.smoothstep(w,.82,.91)),v.rotation.x=.92*(ot.smoothstep(w,.61,.78)-ot.smoothstep(w,.92,1)),w>.36&&(_.position.z=Math.max(h-.08,m.position.z+.025)),w>.82&&(_.visible=!1),w===1&&(C=W,W=!1,y=C?"waiting":"idle",I=w=0,_.position.z=h-.08,_.visible=C)}p.color.setHex(y==="cleaning"?8243933:C?15580788:10213024)}return{get meal(){return b>.02?M:0},get cleaning(){return y},actions:[{label:()=>"喂食器 · 加一份猫粮",point:le(En.x-.18,.36,En.z),size:[.55,.6,.5],range:2.3,run(P){S=Date.now();try{localStorage.setItem("villa.extraMeal",String(S))}catch{}x(S),P.hint("已出粮 · 每日 07:00、12:00、18:00 自动投喂（上海时间）",4200)}},{label:()=>"查看猫咪饮水机",point:le(Ai.x,.22,Ai.z),size:[.46,.42,.46],range:2,run(P){P.hint("循环饮水机正在供水",2400)}},{label:()=>"自动猫砂盆 · 清理",point:le(u+.31,.34,h-.18),size:[.75,.68,.8],range:2.4,run(P){if(y==="cleaning"){P.hint("耙齿正在把结团送入后方集便仓",2600);return}C=!0,P.hint(y==="occupied"?"猫还在附近，离开后会开始清理":"已排队清理，感应区空出五秒后启动",3200)}}],update(P,k,z){const V=Date.now(),q=Math.floor(V/1e3);q!==E&&(E=q,x(V)),l.visible=V-M<2800,l.position.y=.222+(.085-P*.4%.085),R(k,z)}}}const vo={window:[-3.62,-3.72],rug:[-2.79,-1.49],lounge:[-2.33,.85],hall:[1.55,1.96],junction:[2.68,2.08],bowls:[2.66,-.38],feedApproach:[2.15,En.z],feed:[En.x-.49,En.z],water:[Ai.x-.28,Ai.z],bedroom:[4.62,2.05],bedFoot:[Cn,2.08],threshold:[Cn,5.53],bath:[Cn,6.94],tiles:[8.05,8.35],mat:[Ii.x,Ii.z-.91],tray:[Ii.x,Ii.z-.08]},Q1=[["window","rug","lounge","hall","junction","bowls","feedApproach","feed"],["bowls","water"],["junction","bedroom","bedFoot","threshold","bath","tiles","mat","tray"]],Il=new Map(Object.keys(vo).map(s=>[s,[]]));for(const s of Q1)for(let e=1;e<s.length;e++)Il.get(s[e-1]).push(s[e]),Il.get(s[e]).push(s[e-1]);function dh(s,e){const t=new Map([[s,null]]),n=[s];for(const r of n){if(r===e)break;for(const o of Il.get(r))t.has(o)||(t.set(o,r),n.push(o))}const i=[];for(let r=e;r!==s;r=t.get(r))i.unshift(r);return i}const fh=["water","rug","tray","window","lounge"],ph=["window","rug","lounge"];function mh(s){const e=Math.floor(s/36e5)+8,t=e%24;if(t>=6&&t<9||t>=17&&t<20)return null;const n=Math.imul(e,2654435761)>>>0,i=s%36e5/6e4,r=n%12,o=r+(t<6||t>=22?47:29)+(n>>>8)%6;return i>=r&&i<o?ph[(n>>>16)%ph.length]:null}function j1(s,e){const t=new t0(s),n=new Map(e.map(h=>[h.name,t.clipAction(h)]));for(const h of["SitDown","StandUp"]){const d=n.get(h);d.setLoop(Wh,1),d.clampWhenFinished=!0}let i=null;function r(h){const d=n.get(h);d!==i&&(d.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).play(),i&&d.crossFadeFrom(i,.16,!1),i=d)}r("Idle");const o=["Neck_23","Head_22","TailBase_11"].map(h=>{const d=s.getObjectByName(h);return{bone:d,rest:d.quaternion.clone()}}),a=new Qt,l=new Qt,c=le();let u=0;return{play:r,done:()=>i.time>=i.getClip().duration-.015,update(h,d,f,g,v){for(const S of o)S.bone.quaternion.copy(S.rest);i===n.get("WalkClean")&&(i.timeScale=ot.clamp(g/.17,.32,2.5)),i===n.get("SittingIdle")&&(i.timeScale=f==="nap"?.32:1),t.update(h);const m=f==="eat"||f==="drink",p=f==="nap",_=m?.9+.08*Math.sin(d*(f==="eat"?4.4:6.6)):p?.53+.022*Math.sin(d*1.7):0;u=ot.damp(u,_,p?1.4:6,h);for(const[S,M]of o.entries()){const b=M.bone;M.rest.copy(b.quaternion);const E=S===2?v*1.3:-u*(S===0?.67:.33);Math.abs(E)<.001||(c.set(1,0,0).applyQuaternion(s.parent.quaternion),c.applyQuaternion(b.parent.getWorldQuaternion(a).invert()),b.quaternion.premultiply(l.setFromAxisAngle(c,E)))}}}}function eM(s,e,t,n){const i=$1(s,e,t);let r=mh(Date.now()),o=r||"window";const a=nt(s,vo[o][0],0,vo[o][1]);_o(a,0,0,.32,.6,.26,.008);let l=null;const c=new Od().loadAsync(Rr("somali-cat/cat.glb")).then(({scene:E,animations:x})=>{E.scale.setScalar(.123),E.position.y=1.76*.123,a.add(E),E.traverse(y=>{y.isMesh&&(y.receiveShadow=!0,y.castShadow=!1)}),l=j1(E,x),r&&p("nap")});let u=o,h=[],d="rest",f=2.8,g=0,v=0,m=0;function p(E,x=0){d=E,f=x;const y={walk:"WalkClean",sitDown:"SitDown",sit:"SittingIdle",nap:"SittingIdle",stand:"StandUp"}[E]||"Idle";l.play(y)}function _(){u=i.meal&&i.meal!==v?"feed":r||fh[g++%fh.length],h=dh(o,u),h.length?p("walk"):S()}function S(){m=0,u==="feed"?(v=i.meal,p("eat",8)):u==="water"?p("drink",6):p("sitDown")}function M(E,x){const y=Math.atan2(Math.sin(E-a.rotation.y),Math.cos(E-a.rotation.y));return a.rotation.y+=ot.clamp(y,-3.5*x,3.5*x),y}function b(E){if(!h.length){S();return}const[x,y]=vo[h[0]],I=x-a.position.x,w=y-a.position.z,C=Math.hypot(I,w),N=M(Math.atan2(-I,-w),E),W=(u==="feed"?.415:.32)*Math.max(.03,Math.cos(N));m=ot.damp(m,Math.min(W,.1+C*2.7),6,E);const R=Math.min(C,m*E);if(C>0&&(a.position.x+=I/C*R,a.position.z+=w/C*R),C-R<.015){a.position.x=x,a.position.z=y,o=h.shift();const P=i.meal&&i.meal!==v?"feed":r;P&&P!==u&&(u=P,h=dh(o,u)),h.length||S()}}return{position:a.position,ready:c,actions:i.actions,get activity(){return d},get cleaning(){return i.cleaning},update(E,x){if(i.update(E,x,a.position),!l)return;const y=i.meal&&i.meal!==v;r=mh(Date.now()),f-=x,d==="walk"?b(x):d==="sitDown"&&l.done()?p(o===r?"nap":"sit",o==="tray"?4:25+Math.random()*45):d==="nap"&&(o!==r||y)?p("stand"):d==="sit"&&o===r&&!y?p("nap"):d==="sit"&&(f<=0||y)?p("stand"):d==="stand"&&l.done()?_():["rest","eat","drink"].includes(d)&&(d!=="rest"&&M(-Math.PI/2,x),(f<=0||y)&&_());const I=Math.abs(a.position.x-Ii.x)<.42;a.position.y=I?.144*ot.smoothstep(a.position.z,Ii.z-.62,Ii.z-.39):0;const C=Math.abs(a.position.x-Cn)<.45&&n.blocks(Cn,6.22,0)?1-ot.smoothstep(Math.abs(a.position.z-6.22),.58,1.05):0;l.update(x,E,d,m,C)}}}const fn=3.82,Pt=-6.1,Vd=2.54,Wd=.72,Xd=new en({color:16771262,emissive:16764817,emissiveIntensity:.65,roughness:.47}),gh=_t(3289902,.91),hs=_t(15526363,.27),Do=Cs.clone();Do.side=mn;function tM(s,e,t,n=.42,i=!1){const r=Vd,o=Wd,a=fn+.05,l=t/2,c=new wr;c.moveTo(-l,a),c.lineTo(l,a),c.lineTo(l,r);const u=[];for(let d=0;d<=36;d++){const f=d*Math.PI/36,g=Math.cos(f)*l,v=r+Math.sin(f)*o;c.lineTo(g,v),u.push(le(e+g,v,Pt+.15))}c.closePath(),Tt(s,new ko(c,{depth:.32,bevelEnabled:!1}),U.plaster,e,0,Pt-.17),Ps(s,u,.083,U.trim);for(const d of[-1,1])X(s,e+d*l,r/2,Pt,.13,r,.41,U.trim),X(s,e+d*(l-.049),(r+n)/2,Pt,.054,r-n,.073,U.walnut);X(s,e,r,Pt,t,.07,.084,U.walnut);const h=u.map(d=>le(e+(d.x-e)*.968,r+(d.y-r)*.93,Pt));Ps(s,h,.027,U.walnut);for(const d of[.25,.5,.75]){const f=d*Math.PI;Et(s,le(e,r,Pt),le(e+Math.cos(f)*l*.97,r+Math.sin(f)*o*.94,Pt),.019,U.bronze)}i||(X(s,e,n/2,Pt,t,n,.32,U.plaster),X(s,e,n+.025,Pt+.025,t+.18,.085,.48,U.stone),X(s,e,(r+n)/2,Pt,.072,r-n,.079,U.walnut),X(s,e,1.36,Pt,t,.042,.075,U.walnut),X(s,e,(r+n)/2,Pt-.035,t-.1,r-n,.012,qo))}function nM(s,e,t,n,{z:i=Pt+.28,bottom:r=.085,top:o=3.42,scale:a=1}={}){const l=nt(s,e,0,i),c=.32*a,u=Math.ceil(n/(.31*a));function h(S,M){const b=new an(1,1,u*6,8),E=b.attributes.position;for(let x=0;x<E.count;x++){const y=.5+t*E.getX(x),I=E.getY(x)+.5,w=2*Math.PI*u*y+.12*(1-I)*Math.sin(y*Math.PI),C=t*(y*S+.012*(1-I)*Math.sin(Math.PI*y)),N=Math.cos(w);E.setXYZ(x,C,r+(o-r)*I+.014*a*(1-I)*N,a*(M*(1-N)+.014*(1-I)))}return b.computeVertexNormals(),b}const d=h(c,.068),f=h(n,.042);d.morphAttributes.position=[f.attributes.position],d.morphAttributes.normal=[f.attributes.normal],d.computeBoundingSphere();const g=Tt(l,d,Do),v=new Li(.042*a,.007*a,6,12);v.rotateY(Math.PI/2);const m=new zo(v,U.brass,u+1);m.castShadow=!1,l.add(m);const p=new Ze;function _(S){g.morphTargetInfluences[0]=S;const M=ot.lerp(c,n,S);for(let b=0;b<=u;b++)m.setMatrixAt(b,p.makeTranslation(t*b/u*M,o+.04*a,0));m.instanceMatrix.needsUpdate=!0}return _(1),m.computeBoundingSphere(),_(0),{cloth:g,rings:m,setFraction:_}}function iM(s,e,t){const o=t-.055,a=.065,l=nt(s);for(const p of[-1,1]){const _=p*(e/2+.018);X(l,_,t,.174,.081,.136,.032,U.bronze,.008),X(l,_,t,.245,.032,.085,.168,U.brass,.006)}Gt(l);const c=nt(s,0,t,.31);c.rotation.z=-Math.PI/2;const u=rt(c,0,0,0,.027,.027,e,Do,32),h=new an(e,1);h.translate(0,-.5,0);const d=Tt(s,h,Do,0,t,.31),f=X(s,0,t,.31,e+.014,.028,.024,U.bronze,.007),g=h.attributes.uv,v=new yn;for(let p=0;p<g.count;p++)g.setX(p,g.getX(p)*e/.85);function m(p){const _=ot.lerp(a,o,p),S=Math.sqrt(.027*.027+(o-_)*.0014/Math.PI);u.scale.set(S/.027,1,S/.027),u.rotation.y=-(S-.027)*2*Math.PI/.0014,d.scale.y=_,d.position.z=.31+S;for(let M=0;M<g.count;M++)g.setY(M,(1+h.attributes.position.getY(M))*_/.85);g.needsUpdate=!0,f.position.set(0,t-_,d.position.z),v.setFromObject(d).expandByScalar(.008)}return m(1),{cloth:d,bounds:v,setFraction:m}}function Zs(s,e,t,n,i,r,o=U.trim){for(const a of[-1,1])X(s,e+a*i/2,t,n,.038,r+.038,.035,o,.009),X(s,e,t+a*r/2,n,i,.039,.035,o,.009)}function ds(s,e,t,n,i=0){const r=nt(s,e,0,t);r.rotation.y=i,X(r,0,.085,0,n,.17,.087,U.trim),X(r,0,.178,0,n,.038,.11,U.trim,.009)}function _h(s,e,t,n,i=Xd){rt(s,e,t+.025,n,.18,.21,.05,U.brass),rt(s,e,t+.265,n,.027,.043,.46,U.brass),It(s,e,t+.37,n,.075,.12,.075,U.brass),rt(s,e,t+.63,n,.17,.25,.31,U.linen,40),rt(s,e,t+.48,n,.234,.234,.012,i,40)}function Na(s,e,t,n=.67,i=.7,r=Xd){rt(s,e,fn-.03,t,.14,.16,.07,U.brass),Et(s,le(e,fn,t),le(e,fn-n,t),.017,U.brass);const o=fn-n;It(s,e,o-.06,t,.11,.14,.11,U.brass);for(let a=0;a<6;a++){const l=Math.cos(a*Math.PI/3)*i,c=Math.sin(a*Math.PI/3)*i;Ps(s,[le(e,o-.04,t),le(e+l*.46,o-.19,t+c*.46),le(e+l*.91,o-.11,t+c*.91),le(e+l,o+.02,t+c)],.022,U.brass),rt(s,e+l,o+.055,t+c,.063,.059,.07,U.brass),It(s,e+l,o+.15,t+c,.087,.108,.087,r)}}function sM(s){const e=[le(-11.55,4.1,-6.62),le(11.55,4.1,-6.62),le(11.55,4.1,6.62),le(-11.55,4.1,6.62)],t=le(-5.65,7,0),n=le(5.65,7,0),i=[[e[0],t,n,e[1]],[e[1],n,e[2]],[e[2],n,t,e[3]],[e[3],t,e[0]]];for(const[r,o]of i.entries()){const a=new Dt,l=[],c=[];for(const u of o)l.push(u.x,u.y,u.z),c.push((r%2?u.z:u.x)/2.1,(u.y-4.1)/.91);a.setAttribute("position",new ft(l,3)),a.setAttribute("uv",new ft(c,2)),a.setIndex(o.length===3?[0,1,2]:[0,1,2,0,2,3]),a.computeVertexNormals(),Tt(s,a,U.roof)}Et(s,t,n,.085,U.clay),e.forEach((r,o)=>Et(s,r,o===0||o===3?t:n,.075,U.clay))}function xh(s,e,t,n,i,r,o,a){const l=new an(i+o*2,r,72,44);l.rotateX(-Math.PI/2);const c=l.attributes.position;for(let u=0;u<c.count;u++){const h=c.getX(u),d=c.getZ(u),f=Math.max(0,Math.abs(h)-i*.5),g=.015*Math.sin(10*h+2.4*d+.8*Math.cos(d*4))+.009*Math.sin(7*d-2.2*h),v=.018*Math.cos(9*h+d)*Math.pow(Math.abs(2*d/r),4);c.setXYZ(u,Math.sign(h)*(Math.min(Math.abs(h),i*.5)+.065*Math.sin(Math.min(f/.115,1)*1.57)),g+v-f*.89,d+.015*Math.sin(h*5))}l.computeVertexNormals(),Tt(s,l,a,e,t,n)}function vh(s,e,t,n,i,r,o,a){const l=nt(s,t,n,i);l.rotation.y=a,X(l,0,0,0,r+.14,o+.14,.063,U.walnut,.016),X(l,0,0,.024,r+.089,o+.089,.034,U.brass,.009),X(l,0,0,.041,r+.044,o+.044,.017,U.trim);const c=new lc().load(Rr("art-"+e+".jpg"));c.colorSpace=Lt,c.anisotropy=4,Tt(l,new an(r,o),new en({map:c,roughness:.94}),0,0,.054)}function rM(s,e,t,n,i){const r=document.createElement("canvas");r.width=960,r.height=832;const o=r.getContext("2d"),a=["#574b3c","#d2b68a","#9d7961","#667066","#b9aa8b"];o.fillStyle="#bbaa91",o.fillRect(0,0,r.width,r.height);function l(m,p,_,S,M){o.fillStyle=M,o.beginPath(),o.moveTo(m-_,p),o.lineTo(m,p-S),o.lineTo(m+_,p),o.lineTo(m,p+S),o.closePath(),o.fill()}function c(m,p,_){o.fillStyle=a[2];for(let S=0;S<8;S++){const M=S*Math.PI/4;o.beginPath(),o.ellipse(m+Math.cos(M)*_*.54,p+Math.sin(M)*_*.54,_*.48,_*.2,M,0,Math.PI*2),o.fill()}l(m,p,_*.27,_*.27,a[0])}for(let m=0;m<12;m++)for(let p=0;p<14;p++){const _=p*72+m%2*36,S=m*72;l(_,S,29,31,"#aa9379"),l(_,S,25,27,"#bca88c"),c(_,S,15)}for(const[m,p,_]of[[5,10,a[0]],[16,8,a[1]],[36,30,a[3]],[55,6,a[1]],[63,6,a[2]]])o.strokeStyle=_,o.lineWidth=p,o.strokeRect(m,m,r.width-2*m,r.height-2*m);for(let m=40;m<r.width-30;m+=26)for(const p of[36,r.height-36])l(m,p,9,5,a[1]);for(let m=48;m<r.height-38;m+=26)for(const p of[36,r.width-36])l(p,m,5,9,a[1]);for(const[m,p,_]of[[167,225,a[3]],[155,212,a[1]],[143,199,a[2]],[132,187,"#9b8069"],[96,141,a[4]],[86,131,a[1]]])l(480,416,m,p,_);c(480,416,63);const u=o.getImageData(0,0,r.width,r.height),h=u.data;let d=7123;for(let m=0;m<h.length;m+=4){d=Math.imul(1664525,d)+1013904223>>>0;const p=(d/4294967296-.5)*16+(m/4%2?1.8:-1.8);for(let _=0;_<3;_++)h[m+_]+=p}o.putImageData(u,0,0);const f=new Ls(r);f.colorSpace=Lt,f.anisotropy=8;const g=new en({map:f,roughness:.99});X(s,e,.017,t,n,.024,i,U.velvet);const v=Tt(s,new an(n,i),g,e,.031,t);return v.rotation.x=-Math.PI/2,v}function oM(s,e,t){const r=new Uint8Array(36864);r.fill(255);for(const a of t){if(Math.abs(a.z)>6.3)continue;const l=a.name==="墙",c=a.name==="窗",u=l?1.42:c?.45:.56,h=l?.5:c?.23:.6,d=(a.x/22.2+.5)*256,f=(a.z/12.42+.5)*144,g=(a.w*.5+u)*256/22.2,v=(a.d*.5+u)*144/12.42;for(let m=Math.max(0,Math.floor(f-v));m<Math.min(144,f+v);m++)for(let p=Math.max(0,Math.floor(d-g));p<Math.min(256,d+g);p++){const _=Math.max(0,Math.abs(p+.5-d)*22.2/256-a.w*.5),S=Math.max(0,Math.abs(m+.5-f)*12.42/144-a.d*.5),M=1-ot.smoothstep(Math.hypot(_,S),0,u),b=m*256+p;r[b]=Math.max(39,r[b]*(1-h*M))}}const o=new bs(r,256,144,Oo);o.channel=1,o.minFilter=o.magFilter=Ot,o.needsUpdate=!0;for(const a of[s,e]){a.updateWorldMatrix(!0,!1);const l=a.geometry.attributes.position,c=new Float32Array(l.count*2),u=le();for(let h=0;h<l.count;h++)u.fromBufferAttribute(l,h).applyMatrix4(a.matrixWorld),c[2*h]=u.x/22.2+.5,c[2*h+1]=u.z/12.42+.5;a.geometry.setAttribute("uv1",new jt(c,2)),a.material.aoMap=o}}function aM(s){const e=nt(s),t=nt(s),n=nt(s),i=nt(n),r=[],o=[],a=[],l=[],c=(D,ee,oe,pe,Be="家具")=>o.push({x:D,z:ee,w:oe,d:pe,name:Be}),u=(D,ee,oe,pe,Be=0,se=0)=>r.push(kd(t,D,ee,oe,pe,Be,se));function h(D,ee,oe,pe,Be=i){X(Be,D,fn/2,ee,oe,fn,pe,U.plaster),c(D,ee,oe,pe,"墙")}const d=12.42,f=X(e,0,-.105,0,22.2,.21,d,U.floor);X(i,0,fn+.09,0,22.5,.18,12.64,U.trim),X(i,0,fn+.28,0,22.9,.2,12.95,U.oak),sM(i),h(-11,0,.33,12.4),h(11,0,.33,12.4),h(-10.495,6.1,1.21,.32),h(.55,6.1,17.28,.32),h(10.795,6.1,.61,.32);const g=Z1(s,e,i,c,u,d/2),v=eM(s,e,c,g.bathroom),m=[];h(3.78,-2.45,.23,7.29,e),h(3.78,4.52,.23,3.17,e),X(e,3.78,3.26,2.06,.23,1.12,1.77,U.plaster);for(const D of[1.2,2.92])X(e,3.78,1.38,D,.35,2.76,.12,U.trim);X(e,3.78,2.76,2.06,.37,.13,1.88,U.trim),ds(e,-10.79,0,12.1,Math.PI/2),ds(e,10.79,0,12.1,Math.PI/2),ds(e,.53,5.89,17.19),ds(e,10.77,5.89,.28),ds(e,-10.39,5.89,1.05),ds(e,3.62,-2.45,7.29,Math.PI/2);const p=[[-10.69,-7.29],[-6.92,-3.52],[-3.15,.22],[.66,2.26],[4.08,7.22],[7.58,10.69]];let _=-11;for(const[D,ee]of p){D>_&&h((D+_)/2,Pt,D-_,.34);const oe=D===.66;tM(i,(D+ee)/2,ee-D,oe?.01:.42,oe),oe||c((D+ee)/2,Pt,ee-D,.23,"窗"),_=ee}h((11+_)/2,Pt,11-_,.34);for(const[D,ee]of[[-10.8,.35],[4,10.79]]){Et(e,le(D,3.48,Pt+.28),le(ee,3.48,Pt+.28),.024,U.brass);const oe={closed:!1,fraction:0,panels:[],room:D<0?"客厅灯":"卧室灯"};m.push(oe);for(const[pe,Be]of[[D,1],[ee,-1]])oe.panels.push(nM(s,pe,Be,(ee-D)/2)),Et(e,le(pe,3.45,Pt+.41),le(pe,1.14,Pt+.41),.011,U.brass),It(e,pe,1.1,Pt+.41,.03,.07,.03,U.brass),g.actions.push({label:()=>oe.closed?"拉开窗帘":"合上窗帘",point:le(pe,1.58,Pt+.45),size:[.45,1.65,.3],range:2.75,directOnly:!0,run(){oe.closed=!oe.closed}})}for(const D of[-5.91,5.91])X(e,0,fn-.11,D,21.9,.18,.22,U.trim),X(e,0,fn-.2,D,21.91,.055,.27,U.trim);for(const D of[-10.81,3.77,10.81])X(e,D,fn-.12,0,.2,.22,12.1,U.trim);for(const D of[-7,-2.8,1.44,7.65])X(e,D,fn-.035,0,.18,.14,12,U.trim);const S=nt(e,-10.816,0,0);S.rotation.y=Math.PI/2,X(S,0,.53,0,12,.97,.042,U.trim),X(S,0,1.015,.026,12,.064,.106,U.trim,.012);for(let D=0;D<8;D++)Zs(S,-5.16+D*1.47,.52,.038,1.24,.68,U.cream);for(const D of[-6.4,-3.8])Zs(e,D,1.95,5.91,2.18,2.82),Zs(e,D,.61,5.87,1.82,.51);const M=nt(s);Na(M,-5.5,-1.25,.67,.7,g.livingBulb),Na(M,-6.25,3.65,.72,.47,g.livingBulb),Na(M,7.3,1.1,.44,.45,g.bedroomBulb),Gt(M);for(const D of M.children)D.castShadow=!1;const b=nt(n,.66,0,Pt+.015),E=1.6;for(const D of[.047,E-.047])X(b,D,1.24,0,.092,2.48,.092,U.walnut);for(const D of[.1,.82,2.44])X(b,E/2,D,0,E,D===.1?.19:.085,.087,U.walnut);X(b,E/2,.43,0,E-.13,.61,.067,U.green),X(b,E/2,1.63,0,E-.13,1.56,.019,qo),X(b,E/2,1.61,0,.041,1.63,.062,U.walnut),X(b,E/2,1.59,0,E-.1,.039,.064,U.walnut);const x=[];for(const D of[1,-1]){const ee=le(E-.14,1.04,D*.205),oe=E-.055;X(b,oe,ee.y,D*.052,.082,.21,.024,U.bronze,.011),Et(b,le(oe,ee.y,D*.056),le(oe,ee.y,ee.z),.022,U.brass),X(b,ee.x,ee.y,ee.z,.208,.042,.045,U.brass,.012),x.push(ee)}Gt(b);const y=nt(n,b.position.x+E/2,0,Pt),I=iM(y,E+.2,Vd+Wd+.155),w={closed:!0,fraction:1,panels:[I],room:"客厅灯",travelSeconds:2.8};m.push(w);const C=le(2.97,1.43,Pt+.215),N=nt(e,C.x,C.y,C.z);X(N,0,0,-.024,.172,.226,.036,U.brass,.012),X(N,0,0,0,.126,.174,.023,U.cream,.009),X(N,0,.052,.016,.091,.009,.009,U.bronze),X(N,0,.018,.016,.077,.057,.007,U.green),X(N,0,-.016,.016,.087,.008,.009,U.bronze),Et(N,le(0,-.022,.019),le(0,-.057,.019),.004,U.bronze);for(const D of[-1,1])Et(N,le(0,-.057,.019),le(D*.014,-.044,.019),.004,U.bronze);a.push({pivot:b,width:E,angle:0,target:0,handles:x,curtain:w,shadeBounds:I.bounds,switchPoint:C});const W=rM(e,-6.7,-1.62,5.7,4.92);vh(e,437039,3.62,1.94,-2.13,2.06,1.52,-Math.PI/2),u("sofa_03",-4.57,-1.4,3.25,-Math.PI/2),c(-4.57,-1.4,1,3.22),_o(t,-4.57,-1.4,1.8,3.65,.3,.045),u("modern_coffee_table_01",-6.72,-1.42,.76,0,.043),c(-6.72,-1.42,.76,1.52),_o(t,-6.72,-1.42,1.3,1.95,.28,.045);for(const[D,ee]of[U.green,U.clay].entries()){const oe=nt(e,-6.74,.548+D*.045,-1.71);oe.rotation.y=.11-D*.26,X(oe,0,.016,0,.245,.029,.31,U.cream),X(oe,0,.033,0,.256,.008,.32,ee)}rt(e,-6.69,.55,-1.17,.115,.1,.014,hs),rt(e,-6.69,.599,-1.17,.064,.046,.09,hs),rt(e,-6.69,.645,-1.17,.055,.055,.004,U.walnut),Tt(e,new Li(.031,.009,8,16),hs,-6.619,.607,-1.17),u("potted_plant_02",-10.05,-5.23,.86),u("potted_plant_02",3.03,-4.99,.74),X(S,1.38,.36,.37,4.25,.51,.6,U.walnut,.032);for(const D of[-.45,.8,2.03,3.22])X(S,D,.13,.37,.11,.25,.39,U.bronze);for(let D=0;D<36;D++)X(S,-.58+D*.11,.36,.682,.028,.41,.028,U.oak);c(-10.42,-1.38,.78,4.25);function R(D){const ee=nt(e,-10.28,0,D);ee.rotation.y=Math.PI/2,X(ee,0,.61,0,.38,1.18,.4,U.walnut,.026),X(ee,0,.62,.205,.33,1.1,.018,gh,.012);for(const[oe,pe]of[[.35,.112],[.72,.113],[.993,.042]])Tt(ee,new Li(pe,.012,9,32),U.bronze,0,oe,.225),It(ee,0,oe,.221,pe*.9,pe*.9,.024,U.black),It(ee,0,oe,.245,pe*.36,pe*.36,.016,gh);return c(-10.28,D,.47,.45),le(-10,.7,D)}const P=R(-3.94);R(1.16);const k={id:"projector",label:"客厅投影",url:"https://pgxcg.qzz.io/",center:le(-10.74,2.03,-1.38),yaw:Math.PI/2,width:3.68,height:2.07};l.push(k),X(S,1.38,3.14,.08,3.99,.114,.16,U.trim,.03),X(S,1.38,.96,.082,3.77,.044,.068,U.bronze),Et(e,le(-4.1,fn,-1.38),le(-4.1,3.43,-1.38),.036,U.metal),X(e,-4.1,3.34,-1.38,.37,.15,.42,U.ivory,.032);const z=rt(e,-4.31,3.34,-1.44,.045,.057,.068,U.ink);z.rotation.z=Math.PI/2,_h(e,-10.38,.632,.38,g.livingBulb),u("ceramic_vase_01",-10.44,-2.89,.25,0,.63),X(e,-6.35,.79,3.83,2.72,.12,1.22,U.table,.065);for(const D of[-7.36,-5.34])for(const ee of[3.46,4.2])X(e,D,.38,ee,.11,.77,.11,U.walnut,.019);c(-6.35,3.83,2.76,1.25);for(const D of[-7.15,-5.55])for(const[ee,oe]of[[2.85,0],[4.83,Math.PI]])u("dining_chair_02",D,ee,.51,oe),c(D,ee,.51,.49);u("ceramic_vase_01",-6.38,3.81,.28,0,.852);const V=nt(s);for(let D=0;D<6;D++){const ee=-1.72+D*.87;X(V,ee,.49,5.47,.85,.91,.96,U.green,.018),X(V,ee,.49,4.974,.75,.74,.033,U.green,.018),Zs(V,ee,.48,4.949,.62,.56,U.green),X(V,ee,.73,4.92,.27,.033,.046,U.brass,.013),X(V,ee,.12,5.51,.81,.2,.85,U.ink)}X(V,-.52,.998,5.46,3.44,.1,1.12,U.stone,.016),X(V,2.65,.998,5.46,.98,.1,1.12,U.stone,.016);for(const D of[5.038,5.891])X(V,1.68,.998,D,.97,.1,.27,U.stone,.015);X(V,.45,1.54,5.88,5.4,1.02,.072,U.stone),c(.45,5.46,5.4,1.1);const q=_t(11909039,.32,.72);X(V,1.68,.958,5.465,.97,.012,.59,q,.009);for(const D of[5.178,5.753])X(V,1.68,1.006,D,.98,.093,.023,q,.008);for(const D of[1.205,2.154])X(V,D,1.006,5.465,.023,.093,.59,q,.008);rt(V,1.68,.967,5.48,.043,.043,.004,U.ink),Ps(V,[le(1.99,1.06,5.77),le(1.99,1.44,5.77),le(1.98,1.51,5.57),le(1.98,1.4,5.49)],.025,U.brass),X(V,-.95,1.06,5.4,1.03,.024,.67,U.ink,.027);for(const D of[-1.21,-.72])for(const ee of[5.24,5.55]){const oe=Tt(V,new Li(.113,.009,8,32),U.metal,D,1.082,ee);oe.rotation.x=Math.PI/2}X(V,-.95,.5,4.91,.76,.51,.043,U.ink,.026),X(V,-.95,.72,4.87,.6,.035,.04,U.metal),X(V,-.94,2.23,5.61,1.32,.15,.63,U.brass,.033),X(V,-.94,2.94,5.8,.58,1.34,.28,U.trim);for(const D of[1.91,2.46]){X(V,1.79,D,5.7,2.45,.061,.4,U.oak);for(let ee=0;ee<5;ee++)rt(V,.98+ee*.26,D+.116,5.65,.076,.059,.17,hs);for(let ee=0;ee<4;ee++)rt(V,2.53,D+.042+ee*.022,5.65,.18,.135,.018,hs,36)}for(const D of[.6,2.6])Et(V,le(D,fn,5.02),le(D,2.71,5.02),.012,U.bronze),rt(V,D,2.6,5.02,.06,.19,.23,U.green,36);const j=Tt(V,new As([new _e(.055,0),new _e(.13,.03),new _e(.21,.085),new _e(.205,.095),new _e(.12,.046),new _e(.045,.018)],36),hs,.35,1.055,5.29);for(let D=0;D<5;D++)It(j,.095*Math.cos(D*2.2),.093+(D===4?.055:0),.085*Math.sin(D*2.2),.062,.049,.05,_t(D%2?14988361:11042618,.68));Gt(V);const $=nt(s),ue=7.05,he=4.32;vh($,436535,ue,2.49,5.87,1.49,1.18,Math.PI),X($,ue,.24,he,2.36,.41,2.71,U.walnut,.075),X($,ue,.52,he,2.28,.33,2.67,U.ivory,.11),X($,ue,.82,he+1.37,2.53,1.49,.16,U.green,.075);for(let D=0;D<9;D++)X($,ue-1.06+D*.265,.96,he+1.25,.258,1.03,.12,U.velvet,.075);xh($,ue,.738,he-.31,2.24,2.01,.28,Cs);const Q=_t(7111031,.91);Q.normalMap=U.brocade.normalMap,Q.normalScale.setScalar(.41),xh($,ue,.812,he-.86,2.27,.58,.32,Q);for(const D of[ue-.56,ue+.56]){const ee=X($,D,.77,he+.86,1.01,.21,.59,Cs,.1);ee.rotation.x=-.15}c(ue,he,2.42,2.79),_o(t,ue,he,3.25,3.4,.28);for(const D of[ue-1.63,ue+1.63])X($,D,.39,he+.89,.72,.67,.58,U.walnut,.028),X($,D,.75,he+.89,.77,.064,.63,U.stone,.022),X($,D,.49,he+.58,.25,.035,.035,U.brass),c(D,he+.89,.76,.62);_h($,ue-1.63,.79,he+.9,g.bedroomBulb);const ge=nt($,ue+1.63,.79,he+.88),te=_t(11237714,.96),Te=_t(15783601,.96);It(ge,0,.17,0,.135,.16,.11,te),It(ge,0,.38,-.015,.14,.14,.12,te);for(const D of[-1,1])It(ge,D*.113,.485,0,.064,.06,.043,te),It(ge,D*.12,.205,-.02,.062,.1,.07,te),It(ge,D*.085,.065,-.07,.078,.058,.08,te),It(ge,D*.052,.405,-.122,.014,.015,.009,U.black);It(ge,0,.346,-.12,.069,.049,.03,Te),It(ge,0,.37,-.147,.023,.016,.012,U.walnut),X($,9.98,.77,-2.6,1.31,.12,2.73,U.table,.04);for(const D of[-3.72,-1.48])X($,10.02,.36,D,1.03,.71,.1,U.walnut);c(9.98,-2.6,1.31,2.74),X($,10.2,.871,-2.65,.37,.047,.56,U.metal,.02),X($,10.32,1.05,-2.65,.063,.37,.11,U.metal),l.push({id:"computer",label:"卧室电脑",url:"https://lightblock.galok.cn/desktop/?lang=zh",center:le(10.24,1.36,-2.65),yaw:-Math.PI/2,width:1.1,height:.619}),X($,9.68,.852,-2.66,.22,.031,.63,U.ink,.018);for(let D=0;D<5;D++)for(let ee=0;ee<14;ee++)X($,9.59+D*.035,.873,-2.92+ee*.039,.027,.009,.03,U.metal);It($,9.7,.869,-2.12,.071,.037,.048,U.ink),u("dining_chair_02",9,-2.64,.52,Math.PI/2),c(9,-2.64,.49,.54),u("potted_plant_02",4.58,-5.16,.76);const me=nt($,4.12,0,-1.87);me.rotation.y=Math.PI/2,X(me,0,1.52,0,3.8,2.98,.48,U.trim);for(let D=0;D<4;D++){const ee=-1.425+D*.95;Zs(me,ee,1.53,.25,.79,2.64,U.cream),X(me,ee+.33,1.2,.27,.025,.19,.041,U.brass)}c(4.12,-1.87,.51,3.81),Gt($),X(i,0,-.155,-8.18,22.55,.29,4.12,U.oak);for(const[D,ee]of[[-11.2,.25],[2.75,11.2]]){X(i,(D+ee)/2,1.03,-10.17,ee-D,.11,.15,U.oak,.022),X(i,(D+ee)/2,.13,-10.17,ee-D,.13,.2,U.trim);const oe=Math.ceil((ee-D)/.39);for(let pe=0;pe<=oe;pe++){const Be=D+(ee-D)*pe/oe;rt(i,Be,.57,-10.17,.056,.065,.8,U.trim,12),It(i,Be,.54,-10.17,.078,.16,.078,U.trim)}c((D+ee)/2,-10.17,ee-D,.18,"栏杆")}for(const D of[-11.17,11.17]){X(i,D,1.03,-8.17,.14,.11,4.05,U.oak),c(D,-8.17,.17,4.05,"栏杆");for(let ee=0;ee<=10;ee++)rt(i,D,.55,-10.17+ee*.4,.057,.06,.91,U.trim,12)}for(let D=0;D<7;D++)X(i,1.5,-.095-D*.17,-10.45-D*.42,2.48,.19,.46,U.stone);return oM(f,W,o),Gt(e),Gt(i),{exterior:n,blockers:o,doors:a,devices:l,soundAt:P,life:g,pet:v,curtains:m,bed:{position:le(ue,.99,he+.85),exit:le(ue-1.74,1.65,he-.18)},modelReady:Promise.allSettled([...r,v.ready])}}class lM extends Um{constructor(e){super(e),this.type=vn}parse(e){const o=function(y,I){switch(y){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(I||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(I||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(I||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(I||""))}},h=function(y,I,w){I=I||1024;let N=y.pos,W=-1,R=0,P="",k=String.fromCharCode.apply(null,new Uint16Array(y.subarray(N,N+128)));for(;0>(W=k.indexOf(`
`))&&R<I&&N<y.byteLength;)P+=k,R+=k.length,N+=128,k=String.fromCharCode.apply(null,new Uint16Array(y.subarray(N,N+128)));return-1<W?(y.pos+=R+W+1,P+k.slice(0,W)):!1},d=function(y){const I=/^#\?(\S+)/,w=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,W=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,R={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let P,k;for((y.pos>=y.byteLength||!(P=h(y)))&&o(1,"no header found"),(k=P.match(I))||o(3,"bad initial token"),R.valid|=1,R.programtype=k[1],R.string+=P+`
`;P=h(y),P!==!1;){if(R.string+=P+`
`,P.charAt(0)==="#"){R.comments+=P+`
`;continue}if((k=P.match(w))&&(R.gamma=parseFloat(k[1])),(k=P.match(C))&&(R.exposure=parseFloat(k[1])),(k=P.match(N))&&(R.valid|=2,R.format=k[1]),(k=P.match(W))&&(R.valid|=4,R.height=parseInt(k[1],10),R.width=parseInt(k[2],10)),R.valid&2&&R.valid&4)break}return R.valid&2||o(3,"missing format specifier"),R.valid&4||o(3,"missing image size specifier"),R},f=function(y,I,w){const C=I;if(C<8||C>32767||y[0]!==2||y[1]!==2||y[2]&128)return new Uint8Array(y);C!==(y[2]<<8|y[3])&&o(3,"wrong scanline width");const N=new Uint8Array(4*I*w);N.length||o(4,"unable to allocate buffer space");let W=0,R=0;const P=4*C,k=new Uint8Array(4),z=new Uint8Array(P);let V=w;for(;V>0&&R<y.byteLength;){R+4>y.byteLength&&o(1),k[0]=y[R++],k[1]=y[R++],k[2]=y[R++],k[3]=y[R++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=C)&&o(3,"bad rgbe scanline format");let q=0,j;for(;q<P&&R<y.byteLength;){j=y[R++];const ue=j>128;if(ue&&(j-=128),(j===0||q+j>P)&&o(3,"bad scanline data"),ue){const he=y[R++];for(let Q=0;Q<j;Q++)z[q++]=he}else z.set(y.subarray(R,R+j),q),q+=j,R+=j}const $=C;for(let ue=0;ue<$;ue++){let he=0;N[W]=z[ue+he],he+=C,N[W+1]=z[ue+he],he+=C,N[W+2]=z[ue+he],he+=C,N[W+3]=z[ue+he],W+=4}V--}return N},g=function(y,I,w,C){const N=y[I+3],W=Math.pow(2,N-128)/255;w[C+0]=y[I+0]*W,w[C+1]=y[I+1]*W,w[C+2]=y[I+2]*W,w[C+3]=1},v=function(y,I,w,C){const N=y[I+3],W=Math.pow(2,N-128)/255;w[C+0]=Or.toHalfFloat(Math.min(y[I+0]*W,65504)),w[C+1]=Or.toHalfFloat(Math.min(y[I+1]*W,65504)),w[C+2]=Or.toHalfFloat(Math.min(y[I+2]*W,65504)),w[C+3]=Or.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=d(m),_=p.width,S=p.height,M=f(m.subarray(m.pos),_,S);let b,E,x;switch(this.type){case _n:x=M.length/4;const y=new Float32Array(x*4);for(let w=0;w<x;w++)g(M,w*4,y,w*4);b=y,E=_n;break;case vn:x=M.length/4;const I=new Uint16Array(x*4);for(let w=0;w<x;w++)v(M,w*4,I,w*4);b=I,E=vn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:_,height:S,data:b,header:p.string,gamma:p.gamma,exposure:p.exposure,type:E,colorSpace:Mn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}class Yo extends on{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;const n=this,i=t.color!==void 0?new Ve(t.color):new Ve(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||Yo.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new ci,h=new B,d=new B,f=new B,g=new Ze,v=new B(0,0,-1),m=new yt,p=new B,_=new B,S=new yt,M=new Ze,b=new Hn(r,o,{samples:c,type:vn}),E=new Vn({name:l.name!==void 0?l.name:"unspecified",uniforms:Md.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=b.texture,E.uniforms.color.value=i,E.uniforms.textureMatrix.value=M,this.material=E,this.onBeforeRender=function(x,y,I){const w=this.getReflectionCamera(I);if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(I.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(d,f),p.dot(h)>0===!0&&this.forceUpdate===!1)return;p.reflect(h).negate(),p.add(d),g.extractRotation(I.matrixWorld),v.set(0,0,-1),v.applyMatrix4(g),v.add(f),_.subVectors(d,v),_.reflect(h).negate(),_.add(d),w.position.copy(p),w.up.set(0,1,0),w.up.applyMatrix4(g),w.up.reflect(h),w.lookAt(_),w.far=I.far,w.updateMatrixWorld(),w.projectionMatrix.copy(I.projectionMatrix),w.projectionMatrix.elements[8]*=-1,w.projectionMatrix.elements[12]*=-1,M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(w.projectionMatrix),M.multiply(w.matrixWorldInverse),M.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(w.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const N=w.projectionMatrix;w.isOrthographicCamera?(S.x=(Math.sign(m.x)+N.elements[8])/N.elements[0],S.y=(Math.sign(m.y)+N.elements[9])/N.elements[5],S.z=-I.far,S.w=1):(S.x=(Math.sign(m.x)+N.elements[8])/N.elements[0],S.y=(Math.sign(m.y)+N.elements[9])/N.elements[5],S.z=-1,S.w=(1+N.elements[10])/N.elements[14]),m.multiplyScalar(2/m.dot(S)),N.elements[2]=m.x,N.elements[6]=m.y,w.isOrthographicCamera?(N.elements[10]=m.z-a,N.elements[14]=m.w-1):(N.elements[10]=m.z+1-a,N.elements[14]=m.w),n.visible=!1;const W=x.getRenderTarget(),R=x.xr.enabled,P=x.shadowMap.autoUpdate;x.xr.enabled=!1,x.shadowMap.autoUpdate=!1,x.setRenderTarget(b),x.state.buffers.depth.setMask(!0),x.autoClear===!1&&x.clear(),x.render(y,w),x.xr.enabled=R,x.shadowMap.autoUpdate=P,x.setRenderTarget(W);const k=I.viewport;k!==void 0&&x.state.viewport(k),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()},this.getReflectionCamera=function(x){let y=this._reflectionCameras.get(x);return y===void 0&&(y=x.clone(),this._reflectionCameras.set(x,y)),y}}}Yo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};const Mo=14,xn=new Float32Array(Mo*4);function qd(s){return function(){s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function cM(){const t=7.36493374108053,n=Math.PI/4,i=Math.cos(n),r=Math.sin(n),o=qd(1195461711),a=1.35,l=32;let c=0;const u=[];for(let d=0;d<Mo;d++){const f=(d+.18+o()*.64)/Mo,g=a*Math.pow(l/a,f),v=2*Math.PI/g,m=.95-f*.55,p=(o()-.5)*m*Math.PI,_=n+p,S=Math.cos(_),M=Math.sin(_);let b=Math.exp(-1/(v*v*t*t))/(v*v*v*v);const E=Math.max(0,S*i+M*r);b*=E*E*Math.exp(-v*v*.018);const x=Math.sqrt(Math.max(b,0))*v;c+=x*x,u.push({kx:v*S,kz:v*M,amp:x,phi:o()*Math.PI*2})}const h=.23/Math.sqrt(Math.max(c,1e-6));for(let d=0;d<Mo;d++){const f=u[d];xn[d*4]=f.kx,xn[d*4+1]=f.kz,xn[d*4+2]=f.amp*h,xn[d*4+3]=f.phi}}cM();const Is=Object.freeze({latitude:31.2304,longitude:121.4737,utcOffset:8,label:"上海"}),dn=Math.PI/180,Mh=36e5,uM=864e5;function Yd(s){return Math.max(0,Math.min(1,s))}function un(s,e,t){const n=Yd((t-s)/(e-s||1));return n*n*(3-2*n)}function Wt(s,e,t){return[s[0]+(e[0]-s[0])*t,s[1]+(e[1]-s[1])*t,s[2]+(e[2]-s[2])*t]}function Kd(s,e,t){const n=Math.hypot(s,e,t)||1;return[s/n,e/n,t/n]}function Ti(s){return s%=Math.PI*2,s<0?s+Math.PI*2:s}function yh(s,e,t){const n=Math.cos(e),i=n*Math.cos(s),r=n*Math.sin(s)*Math.cos(t)-Math.sin(e)*Math.sin(t),o=n*Math.sin(s)*Math.sin(t)+Math.sin(e)*Math.cos(t);return{ra:Ti(Math.atan2(r,i)),dec:Math.asin(o),vector:Kd(i,r,o)}}function Sh(s,e,t){const n=Is.latitude*dn,i=t-s,r=Math.cos(e),o=Math.sin(e),a=-r*Math.sin(i),l=Math.sin(n)*o+Math.cos(n)*r*Math.cos(i),c=Math.cos(n)*o-Math.sin(n)*r*Math.cos(i);return Kd(a,l,-c)}function Ll(s){const e=s.getTime()/uM+24405875e-1-2451545,t=(23.4393-3563e-10*e)*dn,n=Ti((280.46+.9856474*e)*dn),i=Ti((357.528+.9856003*e)*dn),r=n+(1.915*Math.sin(i)+.02*Math.sin(2*i))*dn,o=yh(r,0,t),a=Ti((218.316+13.176396*e)*dn),l=Ti((134.963+13.064993*e)*dn),c=Ti((93.272+13.22935*e)*dn),u=Ti((297.85+12.190749*e)*dn),h=a+(6.289*Math.sin(l)+1.274*Math.sin(2*u-l)+.658*Math.sin(2*u)+.214*Math.sin(2*l)-.186*Math.sin(i)-.059*Math.sin(2*u-2*l)-.057*Math.sin(2*u-i-l)+.053*Math.sin(2*u+l)+.046*Math.sin(2*u-i))*dn,d=(5.128*Math.sin(c)+.28*Math.sin(l+c)+.277*Math.sin(l-c)+.173*Math.sin(2*u-c)+.055*Math.sin(2*u+c-l))*dn,f=yh(h,d,t),g=Ti((280.46061837+360.98564736629*e+Is.longitude)*dn),v=Sh(o.ra,o.dec,g),m=Sh(f.ra,f.dec,g),p=Yd(.5*(1-(o.vector[0]*f.vector[0]+o.vector[1]*f.vector[1]+o.vector[2]*f.vector[2])));return{sunDir:v,moonDir:m,sidereal:g,moonPhase:p,sunElevation:Math.asin(v[1]),moonElevation:Math.asin(m[1])}}function hM(s,e=0){const t=Ll(s),n=t.sunElevation/dn,i=t.moonElevation/dn,r=n,o=un(-3,5,r),a=un(2,55,r),l=un(-1,8,r)*(1-un(8,20,r)),c=un(-6,-.5,r)*(1-un(1,5,r)),u=un(-12,-6,r)*(1-un(-4,0,r)),h=un(-18,-12,r)*(1-un(-10,-6,r)),d=1-un(-16,-4,r),f=e;Math.floor((s.getTime()-new Date(s.getUTCFullYear(),0,0).getTime())/864e5);const g=1,v=[.02,.12,.4],m=[.08,.32,.65],p=1-f;let _=Wt([.004,.008,.03],[.1,.36,.68],o);_=Wt(_,[.2,.46,.74],a*o*.35),_=Wt(_,v,g*p*o),_=Wt(_,[.18,.2,.24],f*.55*o),_=Wt(_,[.06,.09,.18],h*.7),_=Wt(_,[.075,.105,.235],u*.6),_=Wt(_,[.12,.1,.18],c*.4);let S=Wt([.018,.028,.072],[.42,.66,.8],o);S=Wt(S,[.58,.74,.84],a*o*.3),S=Wt(S,m,g*p*o),S=Wt(S,[.22,.24,.28],f*.6*o),S=Wt(S,[.95,.45,.18],l*.65),S=Wt(S,[.45,.18,.16],c*.55),S=Wt(S,[.1,.08,.16],u*.5);const M=un(-2,50,r);let b=Wt([.008,.025,.055],[.025,.25,.36],M),E=Wt([.035,.105,.17],[.12,.52,.67],M);const x=[.01,.08,.28],y=[.04,.25,.5];b=Wt(b,x,g*p*o),E=Wt(E,y,g*p*o);const C=Ll(new Date(s.getTime()+12*6e4)).sunElevation>t.sunElevation?[1,.6,.32]:[.95,.22,.1],N=Wt(C,[1,.95,.8],un(-1,18,n));return Object.assign(t,{skyZenith:_,skyHorizon:S,waterDeep:b,waterShallow:E,celestialColor:N,sunVisibility:un(-2.7,.3,n),moonVisibility:un(-2.7,.4,i),nightness:d,isNight:n<-6,period:n>5?"day":n>-9?"dusk":"night"})}function Zd(s){const e=new Date(s.getTime()+Is.utcOffset*Mh);return Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())-Is.utcOffset*Mh}function dM(s,e){const t=Zd(s),n=e==="sunrise"||e==="sunset",i=e==="sunrise"||e==="moonrise";let r=null;for(let o=0;o<=1800;o+=5){const a=t+o*6e4,l=Ll(new Date(a)),c=(n?l.sunElevation:l.moonElevation)/dn;if(r!==null&&(i?r<0&&c>=0:r>=0&&c<0)){const h=r/(r-c);return a-5*6e4+h*5*6e4}r=c}return null}function Jd(s){return s.getUTCFullYear()*1e4+(s.getUTCMonth()+1)*100+s.getUTCDate()}function fM(s){const e=Jd(s),t=qd(e),n=[],i=1+Math.floor(t()*3);let r=6+t()*4;for(let o=0;o<i;o++){const a=.8+t()*.7,l=1+t()*2,c=.5+t()*.5,u=r,h=u+a,d=h+l,f=d+c,g=t()<.6,v=g?.3+t()*.6:0,m=g?h+l*(.2+t()*.2):0,p=g?h+l*(.7+t()*.2):0,_=g?t()<.4:t()<.1;if(n.push({cloudStart:u,matureStart:h,decayStart:d,clearStart:f,hasRain:g,rainIntensity:v,rainStart:m,rainEnd:p,hasLightning:_}),r=f+2+t()*3,r>22)break}return{dateSeed:e,events:n}}let ao=null,bh=-1;function pM(s){const e=Jd(s);return ao&&bh===e||(ao=fM(s),bh=e),ao}function mM(s){const e=pM(s),t=s.getUTCHours()+s.getUTCMinutes()/60+s.getUTCSeconds()/3600;let n=null;for(const r of e.events)if(t>=r.cloudStart&&t<r.clearStart){n=r;break}if(!n)return{phase:"clear",cloudTarget:0,rainTarget:0,lightningAllow:!1};if(t<n.matureStart)return{phase:"building",cloudTarget:.95,rainTarget:0,lightningAllow:!1};if(t<n.decayStart){const r=n.hasRain&&t>=n.rainStart&&t<n.rainEnd,o=n.hasRain&&t>=n.rainStart-1/6&&t<n.rainStart,a=r||o?.85:.15;return{phase:"mature",cloudTarget:1,rainTarget:r?n.rainIntensity:0,lightningAllow:n.hasLightning,darkenTarget:a}}const i=(t-n.decayStart)/(n.clearStart-n.decayStart);return{phase:"decaying",cloudTarget:Math.max(0,1-i),rainTarget:0,lightningAllow:!1,darkenTarget:Math.max(0,.85*(1-i*2))}}const gM=`// Sky, stellar catalogue, Milky Way, lunar terminator and lightning from the original water.js.\r
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
`;function _M(s){const e={};for(const C of["SunDir","MoonDir","SkyHorizon","SkyZenith","CelestialColor"])e["u"+C]={value:new B};for(const C of["Time","CloudTime","SunVisibility","MoonVisibility","MoonPhase","Night","Sidereal","CloudCover","CloudDarken","Flash","LightningSeed","StarSeed","Aurora","WindLevel"])e["u"+C]={value:0};e.uWindOffset={value:new _e},e.uLatitude={value:Is.latitude*Math.PI/180};const t=new on(new Go(1,32,18),new Vn({uniforms:e,fragmentShader:gM,side:gn,depthWrite:!1,vertexShader:"varying vec3 sight;void main(){sight=position;vec4 clip=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);gl_Position=clip.xyww;}"}));t.frustumCulled=!1,t.renderOrder=2,t.layers.enable(1),s.add(t);let n=Date.now(),i=n,r=1,o="auto",a="auto",l="follow",c=0,u=0,h=0,d=.3,f=0,g=.7,v=0,m=0,p=-20,_=0,S=!0,M=-1,b,E,x,y;const I=C=>i+(C-n)*r;function w(C){const N=Date.now(),W=I(N),R=Zd(new Date(N));i=N,n=N,r=1,["100","1000","10000"].includes(C)?(i=W,r=Number(C)):C==="night"?i=R+23*36e5:C==="day"?i=R+12*36e5:C!=="real"&&(i=dM(new Date(N),C)??N),S=!0,M=-1}return{setTime:w,setWeather(C){o=C,m=0},setWind(C){a=C,f=0},setLightning(C){l=C,m=0,p=-20},update(C){const N=I(Date.now()),W=Math.floor(N/1e3),R=v?Math.min(1,C-v):0;v=C,M!==W&&(x=new Date(N+8*36e5),E=mM(x),b=hM(new Date(N),c),M=W,y=x.getUTCFullYear()*1e4+(x.getUTCMonth()+1)*100+x.getUTCDate());const P=o==="storm"||o==="rain",k=o==="auto",z=l==="on"||l==="follow"&&o==="storm",V=l==="auto"||l==="follow"&&k,q=z?1:k?E.cloudTarget:Number(P),j=z?.85:k?E.darkenTarget||0:P?.85:0,$=k?E.rainTarget:Number(P),ue=S?1e4:R*r;if(S=!1,h=ot.damp(h,q,1/(k?90:4),ue),c=ot.damp(c,j,1/(k?45:3),ue),u=ot.damp(u,$*h*(.3+.7*c),1/(k?20:2),ue),C>=f){const D=Math.random();d=a==="auto"?D<.25?0:D<.75?.15+.25*Math.random():.5+.35*Math.random():{off:0,low:.3,high:.8}[a]??.3,g=Math.random()*Math.PI*2,f=C+120+Math.random()*240}(z||V&&E.lightningAllow&&h>.75&&c>.5)&&C>=m&&(p=C,_=Math.random()*100,m=C+(z?3+Math.random()*3:60+Math.random()*180));const he=C-p,Q=(D,ee)=>he>=D?Math.max(0,1-(he-D)/ee):0,ge=Math.max(Q(0,.15),Q(.24,.12)*.72,Q(.52,.17)*.86),te=e,Te=(N/1e3+8*3600)%86400;te.uTime.value=Te,te.uCloudTime.value=Te%1570.7963,te.uSunDir.value.fromArray(b.sunDir),te.uMoonDir.value.fromArray(b.moonDir),te.uSkyZenith.value.fromArray(b.skyZenith),te.uSkyHorizon.value.fromArray(b.skyHorizon),te.uCelestialColor.value.fromArray(b.celestialColor),te.uSunVisibility.value=b.sunVisibility,te.uMoonVisibility.value=b.moonVisibility,te.uMoonPhase.value=b.moonPhase,te.uNight.value=b.nightness,te.uSidereal.value=b.sidereal,te.uStarSeed.value=y*2654435761%1e6/1e6;const me=y*40503%1e3/1e3<.08+(Is.latitude-30)/40*.5;return te.uAurora.value=me?(.4+y*7919%600/1e3)*Math.max(0,(b.nightness-.3)/.7):0,te.uCloudCover.value=.36+.64*Math.max(c,h*.55),te.uCloudDarken.value=c,te.uFlash.value=ge,te.uLightningSeed.value=_,te.uWindLevel.value=d,te.uWindOffset.value.x=(te.uWindOffset.value.x+(9e-4+Math.cos(g)*d*.012)*R*r+256)%256,te.uWindOffset.value.y=(te.uWindOffset.value.y+(.0012+Math.sin(g)*d*.012)*R*r+256)%256,{p:b,flash:ge,bolt:_,rain:u,dark:c,wind:d,angle:g,phase:Te%3600,clock:x.toISOString().slice(11,16)}}}}function xM(s,e){let t=31415;const n=()=>(t=Math.imul(1664525,t)+1013904223>>>0)/4294967296,i=new At,r=new Dt;r.setAttribute("position",new ft([0,0,0,-.38,.52,.09,.38,.52,.09,0,1,.55],3)),r.setIndex([0,1,2,1,3,2]),r.computeVertexNormals();const o=new Ho(1,0),a=new en({side:mn,roughness:.9});function l(c,u,h,d,f,g,v,m,p,_,S){i.position.set(u,h,d),i.scale.set(f,g,v),i.rotation.set(m,p,_),i.updateMatrix(),c.push([i.matrix.clone(),new Ve(S)])}for(const[c,u,h,d]of[[-5.6,-11.35,5,.75],[6.8,-11.32,3.7,.65],[-12.15,3.3,1,8],[12.45,1.7,1.25,8],[-6.7,13.1,5.8,1.1]]){const f=[],g=[];for(let v=0;v<170;v++){const m=n()*6.283,p=Math.sqrt(n()),_=c+Math.cos(m)*h*p,S=u+Math.sin(m)*d*p;if(Math.abs(_-1.5)<1.5&&S<0)continue;const M=e(_,S),b=.16+n()*.38;for(let x=0;x<6;x++){const y=n()*6.28;l(f,_,M,S,.05+n()*.05,b*(.5+n()*.55),.06,0,y,.25+n()*.65,["#63754c","#778853","#465c37"][x%3])}if(v%4)continue;l(f,_,M,S,.018,b,.018,0,0,.02,"#657847");const E=["#b497b9","#dbcfb0","#bf7486","#ae9bc4"][v%7%4];for(let x=0;x<5;x++){const y=x*1.2566;l(g,_+.032*Math.cos(y),M+b,S+.032*Math.sin(y),.04,.016,.027,0,-y,.22,E)}l(g,_,M+b+.01,S,.021,.018,.021,0,0,0,"#d1a94e")}for(const[v,m]of[[f,r],[g,o]]){const p=new zo(m,a,v.length);v.forEach(([_,S],M)=>{p.setMatrixAt(M,_),p.setColorAt(M,S)}),p.computeBoundingSphere(),p.receiveShadow=!0,s.add(p)}}}const Dl=1.5,No=-13.16,$d=-24,Nl=1.82,lo=3.72,ps=-22.12;function Er(s,e,t=0){return Math.abs(s-Dl)<=Nl/2-t&&e<=No+.16&&e>=$d+t}function tr(s){return-1.18-.66*ot.smoothstep(-s,-No,19.6)}function vM(s){const e=nt(s),t=40,n=(No-$d)/t;for(let r=0;r<t;r++){const o=No-(r+.5)*n,a=tr(o),l=X(e,Dl,a-.055,o,Nl,.11,n-.009,U.oak);l.rotation.x=-Math.atan((tr(o+.05)-tr(o-.05))/.1)}const i=new en({color:16772306,emissive:16760176,emissiveIntensity:.75});for(const r of[-14.2,-17.4,-20.7,-23.72])for(const o of[-1,1]){const a=Dl+o*(Nl/2-.09),l=tr(r);rt(e,a,l-1.18,r,.082,.11,2.3,U.walnut,12),(o<0||r>ps+2)&&(rt(e,a,l+.14,r,.068,.079,.29,U.bronze,12),rt(e,a,l+.29,r,.071,.071,.035,i,12))}for(const r of[-20.4,-23.56])X(e,2.21,-1.79,r,.095,.1,.12,U.bronze),X(e,2.21,-1.72,r,.09,.065,.34,U.bronze,.023);Gt(e)}function MM(s){const e=nt(s),t=_t(2313037,.36,.13),n=_t(15656141,.42),i=[[-2.53,.018,.8],[-2.24,.4,.7],[-1.65,.75,.59],[-.83,.95,.55],[.05,1,.54],[1.08,.98,.53],[1.93,.87,.55]],r=[],o=[],a=new Dt;for(const[p,_,S]of i){const M=[[1,S],[.985,S-.066],[.965,S-.115],[.86,.025],[.64,-.24],[0,-.46]];for(const[b,E]of[...M,...M.slice(0,-1).reverse().map(([x,y])=>[-x,y])])r.push(b*_,E,p)}const l=11,c=[1,2,0,0,0,0,0,0,2,1];for(const p of[0,1,2]){const _=o.length;for(let S=0;S<i.length-1;S++)for(let M=0;M<l-1;M++){if(c[M]!==p)continue;const b=S*l+M;o.push(b,b+l,b+l+1,b,b+l+1,b+1)}if(p===0)for(const S of[0,i.length-1]){const M=S*l;for(let b=0;b<5;b++)o.push(M+b,M+10-b,M+9-b,M+b,M+9-b,M+b+1)}a.addGroup(_,o.length-_,p)}a.setAttribute("position",new ft(r,3)),a.setIndex(o),a.computeVertexNormals();const u=[t,n,U.brass.clone()];for(const p of u)p.side=mn;const h=new on(a,u);h.castShadow=h.receiveShadow=!0,s.add(h);for(const p of[-1,1])for(let _=1;_<i.length;_++){const[S,M,b]=i[_-1],[E,x,y]=i[_];Et(e,le(p*M,b,S),le(p*x,y,E),.037,U.table)}const d=new wr;d.moveTo(0,-2.49);for(const[p,_]of i.slice(1,4))d.lineTo(_*.99,p);d.lineTo(.952,-.47),d.lineTo(-.952,-.47);for(const[p,_]of i.slice(1,4).reverse())d.lineTo(-_*.99,p);d.closePath();const f=new rc(d);f.rotateX(Math.PI/2);const g=f.attributes.position;for(let p=0;p<g.count;p++)g.setY(p,.54+.22*Math.pow(Math.max(0,(-g.getZ(p)-.47)/2.02),2));f.computeVertexNormals(),Tt(e,f,U.table.clone()).material.side=mn;for(const p of[-1,1])for(const _ of[-1.06,1.36]){const S=p*.81;X(e,S,.57,_,.08,.09,.13,U.bronze,.015),X(e,S,.62,_,.065,.038,.28,U.metal,.015)}for(const p of[-.53,1.02])Et(e,le(-.93,.56,p),le(-1.035,.31,p),.012,U.cream),It(e,-1.035,.15,p,.081,.208,.081,U.ivory);X(e,0,.11,.57,1.63,.1,2.53,U.oak);for(const p of[-.88,.88])X(e,p,.37,.45,.09,.34,2.63,n,.025);X(e,0,.37,1.83,1.65,.36,.1,n,.03);for(const[p,_,S]of[[.39,.84,.61],[-.39,.84,.61],[0,1.57,1.54]])X(e,p,.32,_,S*.83,.32,.31,U.green,.035),X(e,p,.51,_,S,.11,.39,U.ivory,.048),X(e,p,.66,_+.16,S,.29,.092,U.ivory,.038);X(e,0,.54,-.51,1.64,.45,.39,n,.055),X(e,0,.78,-.48,1.75,.08,.44,U.table,.032);const v=X(e,0,.99,-.65,1.66,.37,.021,qo);v.rotation.x=-.18;for(const p of[-.83,0,.83])Et(e,le(p,.8,-.62),le(p,1.18,-.69),.016,U.metal);Et(e,le(-.83,1.18,-.69),le(.83,1.18,-.69),.019,U.metal);const m=nt(s,.39,.81,-.16);m.rotation.order="XYZ",m.rotation.x=-.3,Tt(m,new Li(.152,.021,8,24),U.walnut);for(let p=0;p<3;p++)Et(m,le(),le(.14*Math.sin(p*2.094),.14*Math.cos(p*2.094),0),.012,U.metal);It(m,0,0,0,.04,.04,.035,U.brass);for(const p of[.28,.49]){const _=rt(e,p,.825,-.4,.054,.054,.016,U.ink);_.rotation.x=Math.PI*.37}return X(e,0,.35,2.07,.41,.48,.34,U.ink,.06),X(e,0,-.11,2.08,.14,.62,.19,U.metal,.035),Gt(e),Gt(m),m}const Eh=Array.from({length:xn.length/4},(s,e)=>Math.hypot(xn[4*e],xn[4*e+1]));function yM(s,e,t,n){let i=-2.56;for(let r=0;r<Eh.length;r++){const o=Eh[r],a=r*4,l=xn[a+2]*(.72+.78*n),c=Math.cos(xn[a]*s+xn[a+1]*e-Math.sqrt(9.81*o)*t+xn[a+3]);i+=l*(c+.5*Math.min(.55,o*l)*(2*c*c-1))}return i}function SM(s,e,t){vM(s);const n=nt(s,lo,-2.56,ps);n.rotation.order="YXZ";const i=MM(n);let r=0,o=0,a=!1;const l=n.position,c=le(.39,1.4,.83);function u(g,v){return Math.abs(g)>64||v<-80||v>-13||e(g,v)>-2.99||Er(g,v)?!1:!t.some(([m,p,_])=>Math.hypot(g-m,v-p)<_*.57)}function h(g,v,m){const p=Math.sin(m),_=Math.cos(m);for(const[S,M]of d)if(!u(g+S*_+M*p,v-S*p+M*_))return!1;return!0}const d=[[0,-2.48],[-.92,-.88],[.92,-.88],[-.89,1.85],[.89,1.85],[0,0]];function f(){return Math.abs(r)<.95&&Math.abs(l.x-lo)<1.9&&Math.abs(l.z-ps)<2.85}return{vessel:n,get heading(){return o},get speed(){return r},canMoor:f,get distance(){return Math.hypot(l.x-lo,l.z-ps)},canBoard(g,v){return!a&&Er(g,v)&&Math.abs(v-ps)<2.5},board(){a=!0},moor(){a=!1,r=o=0,l.x=lo,l.z=ps},eye(g){return n.localToWorld(g.copy(c))},update(g,v,m,p){if(a){i.rotation.z=ot.damp(i.rotation.z,-p*1.05,5,g);const I=m*(m>=0?6.5:2.6);r=ot.damp(r,I,m?.9:1.55,g);const w=o-p*g*ot.clamp(r*1.05,-1.18,1.18);h(l.x,l.z,w)&&(o=w);const C=l.x-Math.sin(o)*r*g,N=l.z-Math.cos(o)*r*g;h(C,N,o)?(l.x=C,l.z=N):r=0}else i.rotation.z=0;const _=Math.sin(o),S=Math.cos(o),M=(I,w)=>yM(l.x+I,l.z+w,v.phase,v.wind),b=M(-1.6*_,-1.6*S),E=M(1.6*_,1.6*S),x=M(-.82*S,.82*_),y=M(.82*S,-.82*_);l.y=ot.damp(l.y,(b+E+x+y)/4,4,g),n.rotation.set(ot.damp(n.rotation.x,Math.atan2(b-E,3.2)*.65,3,g),o,ot.damp(n.rotation.z,Math.atan2(y-x,1.64)*.55,3,g),"YXZ")}}}const Th=`// Original Galok Phillips spectrum with Gerstner displacement and Stokes crests, in metres.\r
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
`,bM=`\r
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
`,EM=`uniform vec3 deep,shallow,moonDir,sunTint;\r
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
`,fi=ot.smoothstep,zt=(s,e)=>{const t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)};function ur(s,e){const t=Math.floor(s),n=Math.floor(e),i=fi(s-t,0,1),r=fi(e-n,0,1);return ot.lerp(ot.lerp(zt(t,n),zt(t+1,n),i),ot.lerp(zt(t,n+1),zt(t+1,n+1),i),r)}function nr(s,e){return .59*ur(s,e)+.27*ur(2.03*s+8,2.03*e)+.14*ur(4.21*s,4.21*e+19)}function Uo(s,e){return Math.hypot(s/39,(e-15)/32)}function hr(s,e){const t=Uo(s,e),n=-.34-3.4*fi(t,.71,1.04)+.17*(nr(s*.32,e*.32)-.5),i=(1-fi(Math.abs(s-1.5),1.24,3.8))*(1-fi(Math.abs(e+13.1),.8,3.3));return ot.lerp(n,-1.2+.14*(e+13.19),i)}function TM(s,e){return Er(s,e)?tr(e):Gd(s,e)||s>=-11.02&&s<=-2.64&&e>=6&&e<=11.9||Math.abs(s)<11.3&&e>=-10.25&&e<6.28?0:Math.abs(s-1.5)<1.24&&e<-10.25&&e>=-13.2?-.17*Math.floor((-e-10.25)/.42):hr(s,e)}function wh(s,e,t,n,i,r,o,a,l,c,u){const h=new an(e,t,n,i);h.rotateX(-Math.PI/2);const d=h.attributes.position,f=h.attributes.uv,g=new Float32Array(d.count*3),v=new Ve;for(let _=0;_<d.count;_++){const S=d.getX(_)+r,M=d.getZ(_)+o,b=a(S,M);d.setY(_,b),f.setXY(_,S/u,M/u),c(v,S,M,b),v.toArray(g,_*3)}h.setAttribute("color",new jt(g,3)),h.computeVertexNormals();const m=l.clone();m.vertexColors=!0;const p=Tt(s,h,m,r,0,o);return p.castShadow=!1,p}function Ua(s,e,t,n,i,r){const o=hr(t,n),a=le(t,o,n),l=le(t+.048*i,o+.57*i,n+.02*i);Et(s,a,l,.022*i,U.walnut);for(let c=0;c<9;c++){const u=c*2.4+r,h=(.17+zt(c,r)*.2)*i,d=le(t+Math.cos(u)*h,o+i*(.81+.13*zt(r,c)),n+Math.sin(u)*h);Et(s,l,d,.009*i,U.walnut);for(let f=0;f<14;f++){const g=zt(f+c*9,r)*Math.PI*2,v=Math.sqrt(zt(c,f+r))*.18*i,m=new At;m.position.set(d.x+v*Math.cos(g),d.y+i*(.02+.065*zt(f,r)),d.z+v*Math.sin(g)),m.rotation.set((zt(c,f)-.5)*1.3,g,(zt(r,f)-.5)*.7),m.scale.set(i*.35,i*.17,1),m.updateMatrix(),e.push(m.matrix)}}}function wM(){const s=document.createElement("canvas");s.width=256,s.height=160;const e=s.getContext("2d");for(let n=0;n<4200;n++){const i=zt(n,2)*Math.PI*2,r=Math.sqrt(zt(n,5)),o=128+116*r*Math.cos(i),a=82+64*r*Math.sin(i),l=Math.round(35+zt(n,8)*45+30*(1-a/160));e.strokeStyle="rgb("+Math.round(l*.81)+","+Math.round(l*1.04)+","+Math.round(l*.63)+")",e.lineWidth=1.8+zt(n,9)*1.8,e.beginPath(),e.moveTo(o,a),e.lineTo(o+7*Math.cos(i),a-2+5*Math.sin(i)),e.stroke()}const t=new Ls(s);return t.colorSpace=Lt,t}function AM(s,e,t){const n=s.index,i=n.array.slice(),r=s.attributes.position;n.setUsage(zf);const o=new Ze,a=new Ze,l=new Es,c=[],u=16,h=2;for(let d=0;d<e;d+=u)for(let f=0;f<e;f+=u){const g=Math.min(d+u,e),v=Math.min(f+u,e),m=d*(e+1)+f,p=g*(e+1)+v,_=new yn(le(r.getX(m),t,-r.getY(m)),le(r.getX(p),t,-r.getY(p))).expandByScalar(h),S=new i.constructor((g-d)*(v-f)*6);for(let M=d;M<g;M++)S.set(i.subarray((M*e+f)*6,(M*e+v)*6),(M-d)*(v-f)*6);c.push({box:_,block:S,visible:!0})}return d=>{if(d.updateMatrixWorld(),o.multiplyMatrices(d.projectionMatrix,d.matrixWorldInverse),o.equals(a))return;a.copy(o),l.setFromProjectionMatrix(o);let f=!1;for(const v of c){const m=l.intersectsBox(v.box);m!==v.visible&&(v.visible=m,f=!0)}if(!f)return;let g=0;for(const{visible:v,block:m}of c)v&&(n.array.set(m,g),g+=m.length);s.setDrawRange(0,g),g&&(n.clearUpdateRanges(),n.addUpdateRange(0,g),n.needsUpdate=!0)}}function RM(s,e,t){const n=nt(s);n.add(t),xM(n,hr),wh(n,90,76,96,80,0,15,hr,U.sand,(D,ee,oe)=>{const pe=fi(Uo(ee,oe),.71,.98);D.set(6778958).lerp(new Ve(16049614),pe).multiplyScalar(.77+.4*nr(ee*.41,oe*.41))},3.4);const i=[[-68,-110,114,43,25,1.4],[-4,-160,135,39,30,8.1],[88,-117,100,52,33,2.6],[-108,-47,64,33,17,11],[-113,42,90,61,33,4.1],[96,74,98,59,30,17]],r=new Ve(6451800),o=new Ve(12629409),a=new Ve(14141356);for(const[D,ee,oe,pe,Be,se]of i){const Me=(xe,Le)=>{const Se=(xe-D)/(oe*.5),ze=(Le-ee)/(pe*.5),Fe=.15*Math.sin(4*Se+se)+.16*Math.sin(6*Se+se*.7),$e=Math.hypot(Se,(ze-Fe)*.94),at=1-fi($e+.31*(nr(xe*.08+se,Le*.08)-.5),.08,1);return-3.5+Be*at*(.27+.84*nr(xe*.055+se,Le*.073))+at*(1-Math.abs(2*ur(xe*.2,Le*.19)-1))*2.65};wh(n,oe*1.3,pe*1.4,80,48,D,ee,Me,U.rock,(xe,Le,Se,ze)=>{const Fe=Math.hypot(Me(Le+.65,Se)-ze,Me(Le,Se+.65)-ze),$e=fi(nr(Le*.27+se,Se*.24)-Fe*.3,.13,.62);xe.copy(o).lerp(r,$e).lerp(a,1-fi(ze,-2.8,.6)).multiplyScalar(.84+.27*ur(Le*.65,Se*.48))},4.8)}const l=[],c=[[-29,-28,13,4.1,-.6],[-33,-30,6,2.6,.6],[32,-40,18,6.5,.4],[40,-45,10,3.5,.9],[21,-35,3,1.1,-.2],[-23,-24,4,1.55,.2],[-18,-16,2.8,.88,.3]],u=SM(n,hr,c);for(const[D,ee,oe,pe,Be]of c){const se=oe*.51;l.push(kd(n,"rock_09",D,ee,se,Be+Math.PI/2,-3.05).then(Me=>{Me.scale.y=pe/(se*.44),Me.traverse(xe=>xe.layers.enable(1))}))}const h=nt(n),d=[];for(let D=0;D<32;D++){const ee=D*2.399963,oe=18+zt(D,15)*12,pe=Math.cos(ee)*oe,Be=15+Math.sin(ee)*oe*.78;Math.abs(pe)<13&&Be<8||Uo(pe,Be)>.86||Ua(h,d,pe,Be,3.5+zt(D,3)*3.6,D+19)}Ua(h,d,-15.8,-2.3,5.2,81),Ua(h,d,15.8,-1.5,6.8,99),Gt(h);const f=new zo(new an(1,1),new en({map:wM(),side:mn,alphaTest:.46,roughness:1}),d.length);d.forEach((D,ee)=>f.setMatrixAt(ee,D)),f.castShadow=!0,f.receiveShadow=!0,n.add(f);const g=new Fm(16054527,10787454,1.22);s.add(g);const v=new Tl(16770493,2.2);v.position.set(-17,15,-23),v.target.position.set(-1,0,0),s.add(v,v.target),v.castShadow=!0,v.shadow.mapSize.set(1024,1024),v.shadow.autoUpdate=!1,v.shadow.needsUpdate=!0,Object.assign(v.shadow.camera,{left:-18,right:18,bottom:-13,top:15,near:1,far:76}),v.shadow.normalBias=.022,v.shadow.bias=-18e-5;const m=new Tl(14871807,0);m.name="Lightning",m.target.position.set(0,1,1),s.add(m,m.target),m.castShadow=!0,m.shadow.mapSize.set(1024,1024),Object.assign(m.shadow.camera,{left:-19,right:19,bottom:-16,top:16,near:1,far:82}),m.shadow.autoUpdate=!1,m.shadow.normalBias=.012,m.shadow.bias=-12e-5,m.layers.enable(1);let p=null,_=!0;n.traverse(D=>D.layers.enable(1)),g.layers.enable(1),v.layers.enable(1);const S=_M(n);s.background=new Ve(12441313),s.fog=new Jl(11650502,.0042);const M=144,b=new an(1150,1150,M,M),E=b.attributes.position,x=D=>{const ee=D/575;return 47*ee+528*ee*ee*ee};for(let D=0;D<E.count;D++)E.setXY(D,x(E.getX(D)),x(E.getY(D)));const y=new Yo(b,{textureWidth:448,textureHeight:256,multisample:0,clipBias:.004,shader:{name:"Coastal water",vertexShader:Th+bM,fragmentShader:Th+EM,uniforms:{tDiffuse:{value:null},textureMatrix:{value:null},color:{value:null},time:{value:0},wind:{value:.36},storm:{value:0},sunDir:{value:le(-16,15,-23).normalize()},skyColor:{value:new Ve(10930648)}}}});y.rotation.x=-Math.PI/2,y.position.y=-2.56,y.renderOrder=1,s.add(y);const I=AM(b,M,y.position.y),w=y.material.uniforms,C=y.onBeforeRender,N=new Ze,W=xn.slice(),R=new Float32Array(W.length/2),P=Array.from({length:W.length/4},(D,ee)=>{const oe=Math.hypot(W[ee*4],W[ee*4+1]);return R[ee*2+1]=1/oe,Math.sqrt(9.81*oe)});Object.assign(w,{uWaves:{value:W},uWaveShape:{value:R},deep:{value:new Ve},shallow:{value:new Ve},moonDir:{value:le()},night:{value:0},moon:{value:0},sun:{value:0},sunTint:{value:new Ve}});let k=-1e3;y.onBeforeRender=function(D,ee,oe){if(!b.drawRange.count)return;const pe=performance.now(),Be=!oe.matrixWorld.equals(N);pe-k>(Be?90:650)&&(y.getReflectionCamera(oe).layers.set(1),C.call(this,D,ee,oe),k=pe,N.copy(oe.matrixWorld))};const z=new lM().loadAsync(Rr("coastal-sky.hdr")).then(D=>{D.mapping=co,s.environment=D,s.environmentIntensity=.66,s.environmentRotation.y=1.15,s.backgroundIntensity=.66,e.shadowMap.needsUpdate=!0}),V=2400,q=new Dt,j=new Float32Array(V*6),$=new Float32Array(V*2);for(let D=0;D<V;D++){const ee=(zt(D,63)-.5)*76,oe=(zt(D,72)-.55)*75,pe=zt(D,27)*17;j.set([ee,pe,oe,ee,pe,oe],D*6),$[D*2+1]=.16+zt(D,91)*.12}q.setAttribute("position",new jt(j,3)),q.setAttribute("tail",new jt($,1));const ue=new Vn({transparent:!0,depthWrite:!1,uniforms:{time:w.time,amount:{value:0},drift:{value:new _e}},vertexShader:"attribute float tail; uniform float time; uniform vec2 drift; varying vec3 drop; void main(){drop=position;drop.y=mod(position.y-time*8.0,17.0)-2.5+tail;drop.xz+=drop.y*drift; gl_Position=projectionMatrix*modelViewMatrix*vec4(drop,1.0);}",fragmentShader:"varying vec3 drop; uniform float amount; void main(){bool house=abs(drop.x)<11.55&&abs(drop.z)<6.62&&drop.y<4.1;bool library=abs(drop.x+6.85)<4.39&&abs(drop.z-8.94)<3.14&&drop.y<3.91;bool bath=abs(drop.x-7.525)<3.68&&abs(drop.z-8.37)<2.45&&drop.y<3.7;if(house||library||bath)discard;gl_FragColor=vec4(.73,.82,.87,.31*amount);}"}),he=new sd(q,ue);he.frustumCulled=!1,s.add(he);let Q=-100;const ge=le();function te(){v.shadow.needsUpdate=!0,e.shadowMap.needsUpdate=!0}const Te=new Ve(16053487);function me(D){const ee=y.getReflectionCamera(D);ee.layers.set(1);const oe=e.getRenderTarget();e.setRenderTarget(y.getRenderTarget());try{return e.compileAsync(n,ee,s)}finally{e.setRenderTarget(oe)}}return{harbor:u,skyReady:Promise.all([z,...l]),prepareView:I,prepareReflection:me,sunShadow:te,setWeather:S.setWeather,setLightning:S.setLightning,setTime(D){S.setTime(D),Q=-100,k=-1e3},setWind:S.setWind,update(D,ee){const oe=S.update(performance.now()/1e3),{p:pe,flash:Be,rain:se,dark:Me,wind:xe,phase:Le}=oe,Se=1-pe.nightness;for(let ze=0;ze<P.length;ze++){const Fe=4*ze,$e=xn[Fe+2]*(.72+.78*xe);W[Fe+2]=$e,W[Fe+3]=xn[Fe+3]-P[ze]*Le,R[2*ze]=Math.min(.55,$e/R[2*ze+1])}if(w.time.value=Le,w.wind.value=xe,w.storm.value=Me,w.sunDir.value.fromArray(pe.sunDir),w.moonDir.value.fromArray(pe.moonDir),w.skyColor.value.fromArray(pe.skyHorizon),w.sunTint.value.fromArray(pe.celestialColor),w.deep.value.fromArray(pe.waterDeep),w.shallow.value.fromArray(pe.waterShallow),w.night.value=pe.nightness,w.sun.value=pe.sunVisibility,w.moon.value=pe.moonPhase*pe.moonVisibility,he.visible=se>.015,ue.uniforms.amount.value=se,ue.uniforms.drift.value.set(Math.cos(oe.angle)*xe*.38,Math.sin(oe.angle)*xe*.38),v.position.fromArray(pe.sunDir[1]>0?pe.sunDir:pe.moonDir).multiplyScalar(32),v.color.fromArray(pe.sunDir[1]>0?pe.celestialColor:[.39,.51,.81]),v.intensity=(2.8*Math.sqrt(Math.max(0,pe.sunDir[1]))+.13*w.moon.value)*(1-.82*Me),m.intensity=Be*4.8,ee&&(_=!0),Be>0&&(p!==oe.bolt||_)){const ze=oe.bolt*2.399963,Fe=7.75+4.75*Math.sin(oe.bolt);m.position.set(Math.sin(ze)*Fe,3.3,Math.cos(ze)*Fe).setLength(36).add(m.target.position),m.shadow.needsUpdate=!0,e.shadowMap.needsUpdate=!0,p=oe.bolt,_=!1}return g.color.fromArray(pe.skyHorizon).lerp(Te,.45*Se),g.intensity=.19+.95*Se,s.environmentIntensity=.035+.46*Se*(1-.6*Me),s.fog.color.fromArray(pe.skyHorizon),s.fog.density=.0032+Me*.004,D-Q>.35&&ge.distanceToSquared(v.position)>.0025&&(te(),ge.copy(v.position),Q=D),oe}}}(()=>{if(location.hostname==="pgxcg.qzz.io"&&!["https://galok.cn","http://127.0.0.1:4176","http://localhost:4176"].includes(location.ancestorOrigins?.[0]))return;function s(){const e=new AudioContext,t=e.createGain(),n=e.createChannelSplitter(2);t.channelCountMode="explicit",t.channelCount=2,t.channelInterpretation="speakers",t.connect(n);const i=e.createConvolver(),r=e.createGain(),o=e.createBuffer(2,Math.ceil(e.sampleRate*.43),e.sampleRate);for(let c=0;c<2;c++){const u=o.getChannelData(c);for(let h=0;h<u.length;h++)u[h]=(Math.random()*2-1)*Math.pow(1-h/u.length,3)}i.buffer=o,r.gain.value=.12,i.connect(r).connect(e.destination);const a=[0,1].map(c=>{const u=e.createPanner();return u.panningModel="HRTF",u.distanceModel="inverse",u.refDistance=2.6,u.rolloffFactor=.72,u.maxDistance=65,n.connect(u,c),u.connect(e.destination),u.connect(i),u});function l(c){a.forEach((u,h)=>{const[d,f,g]=c[h];u.positionX?(u.positionX.setTargetAtTime(d,e.currentTime,.035),u.positionY.setTargetAtTime(f,e.currentTime,.035),u.positionZ.setTargetAtTime(g,e.currentTime,.035)):u.setPosition(d,f,g)})}return l([[-2,0,-3],[2,0,-3]]),{ctx:e,input:t,pose:l}}globalThis.GalokRoomAudio=s})();function CM(s,e,t){const n=nt(s);n.position.copy(t.center),n.rotation.y=t.yaw;const i=t.id==="computer",r=i?.033:.026;X(n,0,0,-.057,t.width+r*2,t.height+r*2,.082,i?U.ink:U.bronze,.016);const o=_t(i?1581089:14999764,i?.25:.83);X(n,0,0,-.012,t.width,t.height,.014,o);const a=Tt(n,new an(t.width,t.height),new Vn({vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"void main(){gl_FragColor=vec4(0.);}",blending:qi,depthWrite:!0,toneMapped:!1}),0,0,.003);a.renderOrder=5,a.castShadow=!1,a.visible=!1;const l=X(n,t.width*.46,-t.height*.5-.013,-.005,.022,.008,.012,new kn({color:9725009})),c=le(0,0,1).applyQuaternion(n.quaternion),u=new uc(i?12703743:16771271,0,i?2.1:4,2);u.position.copy(t.center).addScaledVector(c,.2),s.add(u);let h=null,d=null,f=null,g=null,v=!1,m=0,p=null;const _=new URL(t.url).origin;function S(w,C={}){!i&&d&&!f&&d.contentWindow?.postMessage({app:"galok.villa",type:w,...C},_)}addEventListener("message",w=>{i||!d||w.source!==d.contentWindow||w.origin!==_||w.data?.app!=="galok.projector"||(w.data.type==="ready"&&S("connect"),w.data.type==="connected"&&(v=!0),w.data.type==="audio"&&(document.getElementById("media-status").textContent="站内视频 · 双音箱已接通"),w.data.type==="no-video"&&(document.getElementById("media-status").textContent="请先在在线影视中播放影片。"))});function M(){p?.(),p=null,f&&(f.pause(),f.removeAttribute("src"),f.load(),f.remove(),f=null),g&&(URL.revokeObjectURL(g),g=null)}function b(){f&&(M(),d&&(d.hidden=!1,d.src=t.url))}async function E(w,C){if(!h||i)return;M(),d.hidden=!0,d.src="about:blank",v=!1,f=document.createElement("video"),f.controls=!0,f.playsInline=!0,f.disablePictureInPicture=!0,f.controlsList?.add("nofullscreen"),g=URL.createObjectURL(w),f.src=g,f.ondblclick=R=>R.preventDefault(),h.element.append(f);const N=f,W=await C.connect(N);if(f!==N){W();return}p=W,await N.play()}function x(){if(h)return;const w=document.createElement("div");w.className="web-device";const C=1366,N=C*t.height/t.width;w.style.width=C+"px",w.style.height=N+"px",d=document.createElement("iframe"),d.title=t.label,d.src=t.url,d.allow=i?"fullscreen; autoplay":"fullscreen 'none'; autoplay",d.referrerPolicy="strict-origin-when-cross-origin",d.onload=()=>{v=!1,S("connect")},w.append(d),h=new Qv(w),h.position.copy(t.center).addScaledVector(c,.003),h.quaternion.copy(n.quaternion),h.scale.setScalar(t.width/C),e.add(h),w.style.pointerEvents="none",d.tabIndex=-1,a.visible=!0,l.material.color.setHex(12181437),u.intensity=i?.65:2.1}function y(){a.visible=!1,h&&(M(),d.onload=null,d.src="about:blank",e.remove(h),h.element.remove(),v=!1,h=null,d=null,l.material.color.setHex(9725009),u.intensity=0)}function I(w){h&&(h.element.style.pointerEvents=w?"auto":"none",h.element.classList.toggle("active-web",w),d.style.pointerEvents=w?"auto":"none",d.tabIndex=w?0:-1)}return{...t,normal:c,body:n,powerOn:x,powerOff:y,input:I,film:E,showWeb:b,get linked(){return v},get playingFile(){return!!f},fill(){S("fill")},pose(w,C){!i&&v&&C-m>80&&(S("pose",{points:w}),m=C)},get powered(){return!!h}}}function PM(){let s,e,t,n,i=0;async function r(){t||(t=GalokRoomAudio(),s=t.ctx,e=s.createGain(),e.connect(t.input)),await s.resume()}const o=[[174.61,220,261.63,329.63],[146.83,196,246.94,293.66],[164.81,196,261.63,329.63],[130.81,174.61,220,293.66]];function a(){const c=o[Math.floor(i/6)%o.length][[0,2,1,3,2,1][i++%6]],u=s.currentTime,h=s.createOscillator(),d=s.createGain();h.type="triangle",h.frequency.value=c,d.gain.setValueAtTime(1e-4,u),d.gain.exponentialRampToValueAtTime(.15,u+.03),d.gain.exponentialRampToValueAtTime(1e-4,u+1.9),h.connect(d).connect(e),h.start(u),h.stop(u+2),h.onended=()=>{h.disconnect(),d.disconnect()}}return{get on(){return!!n},async toggle(){if(n){clearInterval(n),n=null,e.gain.setTargetAtTime(0,s.currentTime,.07);return}await r(),e.gain.value=.28,a(),n=setInterval(a,480)},async connect(l){await r();const c=s.createMediaElementSource(l);return c.connect(t.input),()=>c.disconnect()},update(l){t?.pose(l)}}}const et=s=>document.getElementById(s),Xi=et("view"),Ul=et("loading");function IM(){const s=new Jv({antialias:!0,alpha:!0,powerPreference:"high-performance"});s.setClearColor(0,0),s.outputColorSpace=Lt,s.toneMapping=Ol,s.toneMappingExposure=1.04,s.shadowMap.enabled=!0,s.shadowMap.type=ir,s.shadowMap.autoUpdate=!1,s.shadowMap.needsUpdate=!0,s.domElement.tabIndex=0,s.domElement.setAttribute("aria-label","海景房漫游画面");const e=new e1;e.domElement.className="web-space",Xi.append(e.domElement,s.domElement);const t=new Zc,n=new Zc,i=new pn(65,1,.055,540);i.rotation.order="YXZ";const r=aM(t),o=RM(t,s,r.exterior),a=r.devices.map(O=>CM(t,n,O)),l=PM();k1();const c=1.65,u=.225,h=le(-7.25,c,1.86);i.position.copy(h),i.lookAt(le(-4.02,1.5,-6.05));let d=i.rotation.y,f=i.rotation.x,g="walk",v=null,m=null,p=null,_=null,S=0,M=performance.now(),b=null,E=!1;const x=new Set,y={x:0,y:0},I=new _e,w=new n0;w.far=5.6;const C=[],N=[],W=new kn({visible:!1});function R(O,Y,fe,Ae,ve,it=0){const je=new on(new Fi(...fe),W);je.position.copy(Y),je.rotation.y=it,je.updateMatrixWorld();const Ye={name:O,object:je,distance:Ae,action:ve};return je.userData.item=Ye,C.push(je),N.push(Ye),Ye}const P=r.doors[0],k=P.handles.map(O=>{const Y=R(()=>P.target?"关露台门":"开露台门",le(),[.33,.22,.12],3.3,()=>{P.target=P.target?0:Math.PI*.49});return Y.directOnly=!0,{item:Y,handle:O}}),z=R(()=>P.curtain.closed?"收起门帘":"放下门帘",P.switchPoint,[.25,.31,.08],2.75,()=>{P.curtain.closed=!P.curtain.closed});z.directOnly=!0;const V=o.harbor,q=R(()=>"登船驾驶",le(),[1.98,1.2,3.6],3.2,j);q.enabled=()=>V.canBoard(h.x,h.z);function j(){g!=="walk"||!q.enabled()||(Rt(),V.board(),g="boat",d=V.heading,f=-.07,V.eye(i.position),i.rotation.set(f,d,0,"YXZ"),s.domElement.focus(),me("W / S 前进、倒车　·　A / D 转向　·　回码头减速后按 E 下船",5e3))}function $(){g!=="boat"||!V.canMoor()||(V.moor(),h.copy(p.pos),i.position.copy(h),d=p.yaw,f=p.pitch,i.rotation.set(f,d,0,"YXZ"),x.clear(),y.x=y.y=0,g="walk",te.hidden=!0,s.domElement.focus())}for(const O of a)R(()=>O.powered?"使用"+O.label:"开启"+O.label,O.center,[O.width+.14,O.height+.14,.25],O.id==="projector"?5.6:2.7,()=>St(O),O.yaw);const ue=r.bed.position.clone();ue.z-=.9,ue.y=.6,R(()=>"躺到床上",ue,[2.4,1.1,2.9],3.3,Nt);for(const O of[-3.94,1.16])R(()=>l.on?"关闭音响":"播放音响",le(-10.27,.66,O),[.55,1.3,.56],3.2,()=>l.toggle().catch(ge));let he=null;const Q={hint:me,read(O){Rt(),g="book",W1(O,()=>{g="walk",s.domElement.focus()})}};for(const O of[...r.life.actions,...r.pet.actions]){const Y=R(O.label,O.point,O.size,O.range,()=>O.run(Q));Y.directOnly=O.directOnly}for(const O of r.life.seats)R(()=>"坐上"+O.label,O.point,O.size,2.9,()=>{Rt(),he=O,g="seat",document.body.classList.add("in-bed"),dt(O.eye,G(O.eye,O.at),()=>{d=i.rotation.y,f=i.rotation.x,et("stand").hidden=!1})});function ge(){me("浏览器未启用音频，请再次点击音响。",3200)}const te=et("hint");let Te;function me(O,Y=6300){te.textContent=O,te.hidden=!1,clearTimeout(Te),Te=setTimeout(()=>te.hidden=!0,Y)}Te=setTimeout(()=>te.hidden=!0,9e3);let D=1,ee=1,oe=1,pe=0,Be=0,se=0;function Me(){const O=Xi.clientWidth,Y=Xi.clientHeight;if(D=Math.min(devicePixelRatio,1.45,Math.sqrt(165e4/(O*Y))),ee=Math.min(D,.7,Math.sqrt(65e4/(O*Y))),s.setPixelRatio(Math.max(ee,D*oe)),i.aspect=O/Y,i.updateProjectionMatrix(),s.setSize(O,Y),e.setSize(O,Y),g==="screen"&&v){const fe=lt(v);m?m.to.copy(fe):i.position.copy(fe)}}function xe(O){if(!Ul.hidden||g==="screen"||document.hidden){pe=Be=se=0;return}if(pe+=Math.min(O,150),Be++,pe<1500)return;const Y=pe/Be;pe=Be=0,se=Y<18?se+1:0;const fe=s.getPixelRatio();let Ae=fe;Y>21?Ae=Math.max(ee,fe*.84):se>=6&&(Ae=Math.min(D,fe*1.08),se=0),Math.abs(Ae-fe)>.01&&(oe=Ae/D,s.setPixelRatio(Ae))}addEventListener("resize",Me),Me();function Le(){i.updateMatrixWorld(),w.setFromCamera(I,i)}const Se=r.blockers.filter(O=>O.name==="墙"||O.name==="窗").map(O=>new yn(le(O.x-O.w/2,0,O.z-O.d/2),le(O.x+O.w/2,3.82,O.z+O.d/2)));Se.push(r.life.bathroom.doorBox);const ze=le();function Fe(O){return w.ray.intersectBox(P.shadeBounds,ze)&&ze.distanceTo(i.position)<O-.012?!0:Se.some(Y=>w.ray.intersectBox(Y,ze)&&ze.distanceTo(i.position)<O-.13)}function $e(){if(g!=="walk"||m)return null;Le();for(const O of w.intersectObjects(C,!1)){const Y=O.object.userData.item;if((!Y.enabled||Y.enabled())&&O.distance<=Y.distance&&!Fe(O.distance))return Y}return null}function at(){const O=I.clone();I.set(0,0);const Y=$e();if(I.copy(O),Y)return Y.directOnly?null:Y;const fe=i.getWorldDirection(le());return N.map(Ae=>{if(Ae.directOnly||Ae.enabled&&!Ae.enabled())return null;const ve=Ae.object.position.clone().sub(i.position),it=ve.length(),je=ve.normalize().dot(fe);return it>Math.min(2.9,Ae.distance)||je<.34?null:(w.set(i.position,ve),Fe(it)?null:{item:Ae,score:it+1-je})}).filter(Boolean).sort((Ae,ve)=>Ae.score-ve.score)[0]?.item}function dt(O,Y,fe){m={from:i.position.clone(),to:O.clone(),q0:i.quaternion.clone(),q1:Y.clone(),t:0,done:fe},x.clear(),y.x=y.y=0}function G(O,Y){const fe=new pn;return fe.position.copy(O),fe.lookAt(Y),fe.quaternion}function Rt(){p={pos:h.clone(),yaw:d,pitch:f},document.exitPointerLock?.(),x.clear(),_=null,et("prompt").hidden=!0,te.hidden=!0}function lt(O){const Y=Math.tan(ot.degToRad(i.fov/2)),fe=Math.max(O.height/(2*Y*.71),O.width/(2*Y*i.aspect*.9)),Ae=Xi.clientHeight/(2*Y*(fe-.003));return Xi.style.setProperty("--web-width",O.width*Ae+"px"),Xi.style.setProperty("--web-height",O.height*Ae+"px"),O.center.clone().addScaledVector(O.normal,fe)}function St(O){if(g!=="walk"||m)return;Rt(),g="screen",v=O,O.powerOn();const Y=lt(O);dt(Y,G(Y,O.center),()=>{document.body.classList.add("using-screen"),O.input(!0),et("screen-tools").hidden=!1,et("device-name").textContent=O.label,et("open-site").href=O.url,et("film-controls").hidden=O.id!=="projector",et("media-status").textContent=""})}function Pe(O=!1){if(!v)return;v.input(!1),O&&v.powerOff(),v=null,document.body.classList.remove("using-screen"),et("screen-tools").hidden=!0;const Y=new Qt().setFromEuler(new jn(p.pitch,p.yaw,0,"YXZ"));dt(p.pos,Y,()=>{g="walk",d=p.yaw,f=p.pitch,s.domElement.focus()})}function Nt(){if(g!=="walk"||m)return;Rt(),g="bed",document.body.classList.add("in-bed");const O=r.bed.position,Y=G(O,O.clone().add(le(0,.29,-1)));dt(O,Y,()=>{d=i.rotation.y,f=i.rotation.x,et("stand").hidden=!1})}function Ke(){if(!["bed","seat"].includes(g)||m)return;he=null,et("stand").hidden=!0,document.body.classList.remove("in-bed");const O=new Qt().setFromEuler(new jn(p.pitch,p.yaw,0,"YXZ"));dt(p.pos,O,()=>{g="walk",d=p.yaw,f=p.pitch})}function Je(O,Y,fe){const Ae=P.pivot.position,ve=O-Ae.x,it=Y-Ae.z,je=Math.cos(fe),Ye=Math.sin(fe),Vt=ot.clamp(ve*je-it*Ye,0,P.width);return Math.hypot(ve-je*Vt,it+Ye*Vt)}function L(O,Y){return r.life.bathroom.blocks(O,Y,u)||Uo(O,Y)>.943&&!Er(O,Y,u)||Je(O,Y,P.angle)<u+.045?!0:r.blockers.some(fe=>{const Ae=Math.max(Math.abs(O-fe.x)-fe.w/2,0),ve=Math.max(Math.abs(Y-fe.z)-fe.d/2,0);return Ae*Ae+ve*ve<u*u})}const T=()=>Number(x.has("KeyW")||x.has("ArrowUp"))-Number(x.has("KeyS")||x.has("ArrowDown"))-y.y,K=()=>Number(x.has("KeyD")||x.has("ArrowRight"))-Number(x.has("KeyA")||x.has("ArrowLeft"))+y.x;function ye(O){let Y=T(),fe=K();const Ae=Math.hypot(Y,fe);Ae>1&&(Y/=Ae,fe/=Ae);const ve=x.has("ShiftLeft")||x.has("ShiftRight")?3.7:2.25,it=(-Math.sin(d)*Y+Math.cos(d)*fe)*O*ve,je=(-Math.cos(d)*Y-Math.sin(d)*fe)*O*ve;it&&!L(h.x+it,h.z)&&(h.x+=it),je&&!L(h.x,h.z+je)&&(h.z+=je),h.y=ot.damp(h.y,TM(h.x,h.z)+c,13,O),i.position.copy(h)}function de(O,Y){m||g==="screen"||g==="book"||(d-=O*.0024,f=ot.clamp(f-Y*.0024,-1.38,1.37),i.rotation.set(f,d,0,"YXZ"))}function we(O){if(E){I.set(0,0);return}const Y=Xi.getBoundingClientRect();I.set((O.clientX-Y.left)/Y.width*2-1,1-(O.clientY-Y.top)/Y.height*2)}const be=s.domElement;be.addEventListener("pointerdown",O=>{O.button!==0||g==="screen"||m||(we(O),b={id:O.pointerId,x:O.clientX,y:O.clientY,dist:0},be.focus(),E||be.setPointerCapture(O.pointerId))}),be.addEventListener("pointermove",O=>{if(!E){if(b?.id===O.pointerId){const Y=O.clientX-b.x,fe=O.clientY-b.y;b.dist+=Math.hypot(Y,fe),de(Y,fe),b.x=O.clientX,b.y=O.clientY}we(O)}}),be.addEventListener("pointerup",O=>{if(b?.id!==O.pointerId)return;const Y=b.dist<5;if(b=null,!Y||m)return;we(O);const fe=$e();if(fe){fe.action();return}!E&&O.pointerType==="mouse"&&["walk","boat"].includes(g)&&be.requestPointerLock?.()?.catch?.(()=>{})}),be.addEventListener("pointercancel",()=>{b=null}),document.addEventListener("pointerlockchange",()=>{E=document.pointerLockElement===be,I.set(0,0),et("reticle").hidden=!E,b=null,x.clear()}),document.addEventListener("mousemove",O=>{E&&de(O.movementX,O.movementY)}),addEventListener("keydown",O=>{if(!(g==="book"||O.target.matches("select,input,textarea")||O.ctrlKey||O.metaKey||O.altKey)){if(g==="screen"){O.code==="Escape"&&!m&&Pe();return}if(g==="bed"||g==="seat"){["KeyE","Escape"].includes(O.code)&&!O.repeat&&Ke();return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(O.code)&&O.preventDefault(),O.code==="KeyE"&&!O.repeat&&!m){g==="boat"?$():($e()||at())?.action();return}x.add(O.code)}}),addEventListener("keyup",O=>x.delete(O.code));const ae=()=>{x.clear(),y.x=y.y=0,b=null};addEventListener("blur",ae),document.addEventListener("visibilitychange",ae),et("leave-screen").onclick=()=>Pe(),et("power-off").onclick=()=>Pe(!0),et("stand").onclick=Ke,et("prompt").onclick=()=>{g==="boat"?$():_?.action()},et("weather").onchange=O=>{o.setWeather(O.target.value),g==="walk"&&be.focus()},et("sky-time").onchange=O=>{o.setTime(O.target.value),be.focus()},et("wind").onchange=O=>{o.setWind(O.target.value),be.focus()},et("lightning").onchange=O=>o.setLightning(O.target.value),et("choose-film").onclick=()=>et("film-file").click(),et("film-file").onchange=async O=>{const Y=O.target.files[0];if(!(!Y||!v)){try{await v.film(Y,l),et("media-status").textContent="影片 · 双音箱"}catch{et("media-status").textContent="无法播放此文件，请选择浏览器支持的视频。"}O.target.value=""}},et("screen-fill").onclick=()=>{v?.playingFile?et("media-status").textContent="影片已铺满幕布。":v?.linked?v.fill():et("media-status").textContent="站内视频需连接 ShareAll 投影扩展。本机影片可直接在幕布播放。"},et("screen-web").onclick=()=>{v?.showWeb(),et("media-status").textContent=""},et("help").onclick=()=>{const O=et("guide");O.hidden=!O.hidden,et("help").setAttribute("aria-expanded",String(!O.hidden))};const re=et("joystick");function Ce(O){const Y=re.getBoundingClientRect(),fe=(O.clientX-Y.left-Y.width/2)/32,Ae=(O.clientY-Y.top-Y.height/2)/32,ve=Math.max(1,Math.hypot(fe,Ae));y.x=fe/ve,y.y=Ae/ve,re.firstElementChild.style.transform="translate("+y.x*25+"px,"+y.y*25+"px)"}re.onpointerdown=O=>{re.setPointerCapture(O.pointerId),Ce(O)},re.onpointermove=O=>{re.hasPointerCapture(O.pointerId)&&Ce(O)},re.onlostpointercapture=()=>{y.x=y.y=0,re.firstElementChild.style.transform=""};let F=0,ce=0,ie=0;const Ie=[le(-10.03,.72,1.16),le(-10.03,.72,-3.94)],Ee=le();function Re(O){const Y=r.life.circuits.find(fe=>fe.name===O);Y.sources[0].light.shadow.needsUpdate=!0,o.sunShadow()}const We=O=>{if(requestAnimationFrame(We),document.hidden){M=O;return}const Y=Math.max(0,O-M),fe=Math.min(.075,Y/1e3);M=O,S+=fe,xe(Y);let Ae=!1;if(P.angle!==P.target){let Ye=ot.damp(P.angle,P.target,6,fe);Math.abs(Ye-P.target)<.001&&(Ye=P.target),(g!=="walk"||Je(h.x,h.z,Ye)>u+.045)&&(P.angle=Ye,P.pivot.rotation.y=Ye,Ae=!0,Ye===P.target&&Re("客厅灯"))}for(const{item:Ye,handle:Vt}of k)P.pivot.localToWorld(Ye.object.position.copy(Vt)),Ye.object.rotation.y=P.angle,Ye.object.updateMatrixWorld();if(m){const Ye=m;Ye.t=Math.min(1,Ye.t+fe/.46);const Vt=Ye.t*Ye.t*(3-2*Ye.t);i.position.lerpVectors(Ye.from,Ye.to,Vt),i.quaternion.slerpQuaternions(Ye.q0,Ye.q1,Vt),Ye.t===1&&(m=null,Ye.done())}else g==="walk"&&(ye(fe),i.rotation.set(f,d,0,"YXZ"));r.life.update(S,fe,he),r.pet.update(S,fe),r.life.bathroom.update(fe,h,r.pet.position)&&(Ae=!0),he?.pivot&&!m&&(he.pivot.updateMatrixWorld(),i.position.copy(he.pivot.localToWorld(le(0,he.eye.y-2.65,0))));for(const Ye of r.curtains){const Vt=Number(Ye.closed);if(Ye.fraction===Vt)continue;const Ji=Ye.travelSeconds?Ye.fraction+ot.clamp(Vt-Ye.fraction,-fe/Ye.travelSeconds,fe/Ye.travelSeconds):ot.damp(Ye.fraction,Vt,6,Y/1e3);Ye.fraction=Math.abs(Ji-Vt)<.002?Vt:Ji;for(const Ko of Ye.panels)Ko.setFraction(Ye.fraction);Ae=!0,Ye.fraction===Vt&&Re(Ye.room)}const ve=o.update(S,Ae),it=V.heading;if(V.update(fe,ve,ot.clamp(T(),-1,1),ot.clamp(K(),-1,1)),g==="boat"?(d+=V.heading-it,V.eye(i.position),i.rotation.set(f,d,0,"YXZ")):q.enabled()&&(q.object.position.copy(V.vessel.position),q.object.position.y+=.52,q.object.updateMatrixWorld()),et("sky-clock").textContent!==ve.clock&&(et("sky-clock").textContent=ve.clock),O-ce>80){i.updateMatrixWorld();const Ye=Ie.map(Vt=>Ee.copy(Vt).applyMatrix4(i.matrixWorldInverse).toArray());l.update(Ye),a[0].pose(Ye,O),ce=O}if(_=$e(),et("prompt").hidden=!_||g!=="walk"||!!m,_){const Ye="E　"+_.name();et("prompt").textContent!==Ye&&(et("prompt").textContent=Ye),te.hidden=!0}let je=h.z<-6.14?h.z>=-10.3&&Math.abs(h.x)<11.3?"露台":"岛岸":h.x>3.8?"卧室":h.z>3&&h.x>-2.7?"厨房":"客厅";(Math.abs(h.x)>11.3||h.z>6.3)&&(je="岛岸"),h.z>6.1&&h.z<11.91&&h.x<-2.63&&h.x>-11.05&&(je="书房"),Gd(h.x,h.z)&&(je="卫生间"),g==="bed"&&(je="卧室 · 床上"),he&&(je=he.label),Er(h.x,h.z)&&(je="码头"),g==="boat"&&(je="驾驶中 · 距泊位 "+Math.round(V.distance)+" 米",V.canMoor()&&(et("prompt").textContent="E　靠岸下船",et("prompt").hidden=!1)),et("location").textContent!==je&&(et("location").textContent=je),Ae&&O-ie>250&&(o.sunShadow(),ie=O),!(g==="screen"&&!m&&O-F<125)&&(F=O,o.prepareView(i),n.children.length&&e.render(n,i),s.render(t,i))};Promise.allSettled([o.skyReady,r.modelReady]).then(async([O,Y])=>{O.status==="rejected"&&console.error("环境光资源加载失败",O.reason);const fe=Y.value?.filter(Ae=>Ae.status==="rejected")||[];fe.length&&console.error("家具资源加载失败",fe);for(const Ae of r.life.circuits)Ae.sources[0].light.shadow.needsUpdate=!0;o.sunShadow();try{V1(t),await s.compileAsync(t,i),await o.prepareReflection(i)}catch(Ae){console.warn("预编译未完成，将在绘制时准备材质",Ae)}M=performance.now(),requestAnimationFrame(Ae=>{We(Ae),Ul.hidden=!0})})}try{IM()}catch(s){console.error(s),Ul.textContent="3D 房间启动失败。请使用支持 WebGL 2 的浏览器，并启用硬件加速。"}
