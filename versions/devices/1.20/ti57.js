(function(){/*
 https://www.pcjs.org/modules/devices/lib/stdio.js (C) Jeff Parsons 2012-2019
 https://www.pcjs.org/modules/devices/device.js (C) Jeff Parsons 2012-2019
 https://www.pcjs.org/modules/devices/input.js (C) Jeff Parsons 2012-2019
 https://www.pcjs.org/modules/devices/led.js (C) Jeff Parsons 2012-2019
 https://www.pcjs.org/modules/devices/rom.js (C) Jeff Parsons 2012-2019
 https://www.pcjs.org/modules/devices/time.js (C) Jeff Parsons 2012-2019
 https://www.pcjs.org/modules/devices/tms1500.js (C) Jeff Parsons 2012-2019
 https://www.pcjs.org/modules/devices/machine.js (C) Jeff Parsons 2012-2019
*/
var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function ca(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var da="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ea;
if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={Ja:!0},ia={};try{ia.__proto__=ha;fa=ia.Ja;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ea;
function r(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Qa=b.prototype}var ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},la="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function u(a,b){if(b){var c=la;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ka(c,a,{configurable:!0,writable:!0,value:b})}}u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});u("Number.parseInt",function(a){return a||parseInt});
u("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});u("Math.log2",function(a){return a?a:function(b){return Math.log(b)/Math.LN2}});function v(){this.ea=""}
function ma(a,b){var c=0,d=null;"pcjs:8088"==(window?window.location.host:"localhost")&&(a=a.replace(/^(http:\/\/archive\.pcjs\.org|https:\/\/[a-z0-9-]+\.amazonaws\.com\/archive\.pcjs\.org)(\/.*)\/([^/]*)$/,"$2/archive/$3"),a=a.replace(/^https:\/\/jeffpar\.github\.io\/(pcjs-[a-z]+|private-[a-z]+)\/(.*)$/,"/$1/$2"));var e=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");e.onreadystatechange=function(){4===e.readyState&&(d=e.responseText,200==e.status||!e.status&&
d.length&&"file:"==(window?window.location.protocol:"file:")||(c=e.status||-1));b(a,d,e.readyState,c)};e.open("GET",a,!0);e.send()}v.prototype.ia=function(a,b){b||(b=a.lastIndexOf("\n"),0<=b&&(console.log(this.ea+a.substr(0,b)),this.ea="",a=a.substr(b+1)));this.ea+=a};function y(a,b){a.ia(b+"\n")}v.prototype.ma=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.ia(this.ca.apply(this,[a].concat(c instanceof Array?c:ca(ba(c)))))};
v.prototype.ca=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d="";var e=a.split(/%([-+ 0#]*)([0-9]*|\*)(\.[0-9]+|)([hlL]?)([A-Za-z%])/),f=0,h;for(h=0;h<e.length-6;h+=6){d+=e[h];var l=e[h+5];if(0>"dfjcsXx".indexOf(l))d+=e[h+1]+e[h+2]+e[h+3]+e[h+4]+l;else{var g=c[f++],q=e[h+1],k=e[h+2];"*"==k?(k=g,g=c[f++]):k=+k||0;var n=e[h+3];n=n?+n.substr(1):-1;var m=null;switch(l){case "d":g=Math.trunc(g);case "f":l=g+"";0<n&&(k-=n+1);l.length<k&&(0<=q.indexOf("0")?(0>g&&k--,l=("0000000000"+
Math.abs(g)).slice(-k),0>g&&(l="-"+l)):l=("          "+l).slice(-k));0<n&&(g=Math.round((g-Math.trunc(g))*Math.pow(10,n)),l+="."+("0000000000"+Math.abs(g)).slice(-n));d+=l;break;case "j":d+=JSON.stringify(g,null,k||null);break;case "c":g=String.fromCharCode(g);case "s":if("string"==typeof g)for(;g.length<k;)g=0<=q.indexOf("-")?g+" ":" "+g;d+=g;break;case "X":m=z;case "x":m||(m=na);l="";"string"==typeof g&&(g=Number.parseInt(g,g.match(/(^0x|[a-f])/i)?16:10));do n=g&15,g>>>=4,0<=q.indexOf("0")||""==
l||n||g?l=m[n]+l:k&&(l=" "+l);while(0<--k||g);d+=l;break;default:d+="(unimplemented printf type %"+l+")"}}}return d+=e[h]};var na="0123456789abcdef",z="0123456789ABCDEF",oa="Machine";function A(a,b,c,d){this.ea="";this.M=d||{};this.w=a;this.oa=b;this.version=c||0;this.O={};this.ka="";B[this.w]||(B[this.w]=[]);B[this.w].push(this);pa(this,this.M);qa(this,this.M);ra(this,this.M.bindings);this.ga=""}var sa;r(A,v);
A.prototype.ja=function(a,b){var c=this;switch(a){case ta.Da:b.onclick=function(){var d=ua(c);d&&(d.value="")};break;case ta.ya:b.value="",b.addEventListener("keypress",function(d){d=d||window.event;var e=d.which||d.keyCode;if(e){var f=b.value;b.setSelectionRange(f.length,f.length);d.stopPropagation();13==e&&(d.preventDefault(),f=b.value+="\n",b.blur(),b.focus(),va(c,f))}})}};
function ra(a,b){var c=Array.isArray(b),d;for(d in b){var e=b[d];c&&(d=e);if(e=document.getElementById(e))a.O[d]=e,a.ja(d,e)}}
function qa(a,b){if(b.overrides){var c,d=sa;if(!d){d={};if(window){c||(c=window.location.search.substr(1));for(var e,f=/\+/g,h=/([^&=]+)=?([^&]*)/g;e=h.exec(c);)d[decodeURIComponent(e[1].replace(f," ")).trim()]=decodeURIComponent(e[2].replace(f," ")).trim()}sa=d}c=d;for(var l in c)0<=b.overrides.indexOf(l)&&(e=c[l],e.match(/^[+-]?[0-9.]+$/)?d=Number.parseInt(e,10):"true"==e?d=!0:"false"==e?d=!1:(d=e,e='"'+e+'"'),b[l]=d,y(a,"overriding "+a.oa+" property '"+l+"' with "+e))}}
function pa(a,b){if(a.version){var c="",d=wa(a,a.w);if(d.version!=a.version){c="Machine";var e=d.version}else b.version&&b.version>a.version&&(c="Config",e=b.version);c&&(b="Error: "+a.ca("%s Device version (%3.2f) incompatible with %s version (%3.2f)",b.Pa,a.version,c,e)+"\n\nClearing your browser's cache may resolve the issue.",(c=xa.Ia)&&0>xa.list.indexOf(c)&&(alert(b),xa.list.push(c)),y(a,b))}}
function va(a,b){var c=ya(a);if(c){var d=b.lastIndexOf("\n",b.length-2);d=b.slice(d+1,-1)||a.ga;a.ga="";d=d.trim();b=d.split(" ");switch(b[0]){case "c":(c=b[1])?(y(a,"set category '"+c+"'"),za(a,c)):(c=za(a))?y(a,"cleared category '"+c+"'"):y(a,"no category set");break;case "?":var e="";Aa.forEach(function(f){e+="\n"+f});e&&y(a,"default commands:"+e);default:for(b.unshift(d),d=0;d<c.length&&!c[d](b,a);d++);}}}
function ua(a){var b=ta.ya,c=a.O[b];if(void 0===c){var d=B[a.w],e;for(e in d)if(c=d[e].O[b])break;c||(c=null);a.O[b]=c}return c}function wa(a,b){if(a=B[a.w])for(var c in a)if(a[c].oa==b){var d=a[c];break}return d}function C(a,b){if(a=B[a.w])for(var c in a)if(a[c].M["class"]==b){var d=a[c];break}return d}function ya(a){var b=Ba.xa;return D[a.w]&&D[a.w][b]}function Ca(a){var b=Da;return a.M.bindings&&a.M.bindings[b]}function Ea(a){if(a=a.O[Fa])var b=a.textContent;return b}
function E(a,b,c){a=+a||0;a<b&&(a=b);a>c&&(a=c);return a}function F(a,b,c){a=a.M[b];void 0===a?a=c:(b=typeof c,typeof a!=b&&("boolean"==b?a=!!a:"number"==typeof c&&(a=+a)));return a}function Ga(a){if(void 0===G.va){var b=!1;if(window)try{window.localStorage.setItem(G.la,G.la),b=window.localStorage.getItem(G.la)==G.la,window.localStorage.removeItem(G.la)}catch(c){y(a,c.message),b=!1}G.va=b}return!!G.va}
function Ha(a){if(window){var b=window.navigator.userAgent;return"iOS"==a&&!!b.match(/(iPod|iPhone|iPad)/)&&!!b.match(/AppleWebKit/)||"MSIE"==a&&!!b.match(/(MSIE|Trident)/)||0<=b.indexOf(a)}return!1}A.prototype.ia=function(a){var b=!0;if(!(0<=this.ka.indexOf(Ia.wa))){b=!1;var c=ua(this);if(c){c.value+=a;8192<c.value.length&&(c.value=c.value.substr(c.value.length-4096));c.scrollTop=c.scrollHeight;return}}v.prototype.ia.call(this,a,b)};function H(a,b,c){if(a=a.O[b])a.textContent=c}
function za(a,b){b=void 0===b?"":b;var c=a.ka,d=!b&&0<=a.ka.indexOf(Ia.wa);a.ka=b;d&&(b=a.ea,a.ea="",a.ia(b));return c}var ta={Da:"clear",ya:"print"},Ia={Ha:"time",wa:"buffer"},Aa=["c\t\tset category"],Ba={xa:"command"},xa={list:[],Ia:"version"},G={va:void 0,la:"PCjs.localStorage"},D={},B={};
function I(a,b,c){A.call(this,a,b,Ja,c);this.time=C(this,J);this.N=this.L=this.f=this.K=null;this.qa=F(this,"drag",!1);this.V=F(this,"scroll",!1);this.h=!1;if(a=this.O[Ka]){b=this.M.location;this.sa=b[0];this.ua=b[1];this.g=b[2];this.s=b[3];this.u=b[4]||1;this.I=b[5]||1;this.fa=b[6]||a.naturalWidth||this.g;this.pa=b[7]||a.naturalHeight||this.s;this.Z=b[8]||0;this.$=b[9]||0;this.da=b[10]||0;this.na=b[11]||0;(this.b=this.M.map)?(this.H=this.b.length,this.l=this.b[0].length):(this.l=this.u,this.H=this.I,
this.u=this.I=0);this.aa=F(this,"hexagonal",!1);this.a=F(this,"buttonDelay",0);this.S=this.g/(this.l+this.l*this.u)|0;this.T=this.s/(this.H+this.H*this.I)|0;this.ba=this.S*this.u|0;this.U=this.T*this.I|0;this.m=this.J=-1;La(this,a);Ma(this,a);if(this.time){var d=this;this.a&&(this.Y=Na(this.time,"timerInputRelease",function(){0>d.m&&0>d.J&&K(d,-1,-1)}));this.b&&(this.a&&(this.ra=Na(this.time,"timerKeyRelease",function(){Oa(d)})),this.j=0,this.v=[],Pa(this))}this.R=this.W=-1}}r(I,A);
I.prototype.ja=function(a,b){var c=this;switch(a){case Qa:b.onclick=function(){c.f&&c.f()};break;case Ra:b.onclick=function(){c.L&&c.L()}}A.prototype.ja.call(this,a,b)};function Sa(a,b){a.N=b}function Ta(a){a.a?L(a.time,a.ra,a.a):Oa(a)}
function Pa(a){var b=document;b.addEventListener("keydown",function(c){c=c||window.event;if(document.activeElement==a.O[Qa]){var d=Ua[c.which||c.keyCode];d&&Va(a,d)&&c.preventDefault()}});b.addEventListener("keypress",function(c){c=c||window.event;var d=String.fromCharCode(c.which||c.charCode);d&&Va(a,d)&&c.preventDefault()})}
function La(a,b){b.addEventListener("mousedown",function(c){if(!a.h){var d=a.O[Qa];if(d){var e=window.scrollX,f=window.scrollY;d.focus();window.scrollTo(e,f)}c.button||M(a,b,Wa,c)}});b.addEventListener("mousemove",function(c){a.h||M(a,b,N,c)});b.addEventListener("mouseup",function(c){a.h||c.button||M(a,b,O,c)});b.addEventListener("mouseout",function(c){a.h||(0>a.m?M(a,b,N,c):M(a,b,O,c))})}
function Ma(a,b){b.addEventListener("touchstart",function(c){a.V&&(a.h=!0);M(a,b,Wa,c)});b.addEventListener("touchmove",function(c){M(a,b,N,c)});b.addEventListener("touchend",function(c){M(a,b,O,c)})}function Va(a,b){for(var c=0;c<a.b.length;c++)for(var d=a.b[c],e=0;e<d.length;e++)if(0<=d[e].split("|").indexOf(b))return a.j?16>a.v.length&&a.v.push(b):(a.j=1,K(a,e,c),Ta(a)),!0;a.ma("unrecognized key '%s' (0x%02x)\n",b,b.charCodeAt(0));return!1}
function Oa(a){1==a.j?(a.j++,K(a,-1,-1),Ta(a)):(a.j=0,a.v.length&&Va(a,a.v.shift()))}
function M(a,b,c,d){var e=-1,f=-1,h=!1,l;if(c<O){d=d||window.event;if(d.targetTouches&&d.targetTouches.length){var g=d.targetTouches[0].pageX;var q=d.targetTouches[0].pageY;h=1<d.targetTouches.length}else g=d.pageX,q=d.pageY;var k=l=0;var n=b;do isNaN(n.offsetLeft)||(l+=n.offsetLeft,k+=n.offsetTop);while(n=n.offsetParent);g=a.fa/b.offsetWidth*(g-l)|0;q=a.pa/b.offsetHeight*(q-k)|0;b=g-a.sa;var m=q-a.ua;k=l=!1;n=g>=a.Z&&g<a.Z+a.da&&q>=a.$&&q<a.$+a.na;if(0<=b&&b<a.g&&0<=m+a.U||n)if(h||a.V||d.preventDefault(),
0<=b&&b<a.g&&0<=m&&m<a.s){k=!0;d=a.g/a.l|0;var t=a.s/a.H|0,w=b/d|0,x=m/t|0;!a.aa||x&1||(b-=d>>1,w=b/d|0,w==a.l-1&&(b=-1));t=x*t+(a.U>>1);b-=w*d+(a.ba>>1);m-=t;0<=b&&b<a.S&&0<=m&&m<a.T&&(e=w,f=x,l=!0)}}if(!h)if(c==Wa)a.m=g,a.J=q,k?(K(a,e,f),l&&a.a&&L(a.time,a.Y,a.a,!0)):n&&a.f&&a.f();else if(c==N)0<=a.m&&0<=a.J&&a.qa?K(a,e,f):a.N&&a.N(e,f);else if(c==O){if(c=a.a)c=a.time,e=a.Y,c=c.a&&0<e&&e<=c.b.length?0<=c.b[e-1].X:!1;c||K(a,-1,-1);a.m=a.J=-1}else y(a,"unrecognized action: "+c)}
function K(a,b,c){if(b!=a.R||c!=a.W)a.R=b,a.W=c,a.K&&a.K(b,c)}var Wa=1,N=2,O=3,Qa="power",Ra="reset",Ka="surface",Ua={8:"\b"},Ja=1.2;
function Xa(a,b,c){A.call(this,a,b,Ya,c);a=this.O[Za];if(!a)throw Error("LED binding for '"+Za+"' missing: '"+this.M.O[Za]+"'");b=document.createElement("canvas");if(!b||!b.getContext)throw a.innerHTML="LED device requires HTML5 canvas support",Error("LED device requires HTML5 canvas support");this.na=a;this.type=E(F(this,"type",$a),ab,bb);this.f=cb[this.type][0];this.j=cb[this.type][1];this.width=F(this,"width",this.f);this.height=F(this,"height",this.j);this.g=F(this,"cols",1);this.H=this.g+F(this,
"colsExtra",0);this.T=F(this,"rows",1);this.K=this.T+F(this,"rowsExtra",0);this.V=this.width*this.g;this.N=this.height*this.T;this.s=P("black",0);this.h=db(this.M.color)||this.s;this.$=P(this.h,1,.25);this.Z=P(this.h,1,2);this.m=db(this.M.backgroundColor);this.aa=F(this,"fixed",!1);this.aa||(b.style.width="100%",b.style.height="auto");this.Y=F(this,"hexagonal",!1);this.ba=F(this,"highlight",!0);this.L=F(this,"persistent",this.type<bb);b.setAttribute("width",this.V.toString());b.setAttribute("height",
this.N.toString());b.style.backgroundColor=this.s;a.appendChild(b);this.W=b.getContext("2d");if(this.l=document.createElement("canvas"))this.l.width=this.U=this.f*this.g,this.l.height=this.u=this.j*this.T,this.a=this.l.getContext("2d");this.da=(this.K+1)*this.H*4;this.b=Array(this.da);this.fa=this.g<this.H?4*(this.H-this.g):0;this.I=this.J=!1;this.v=this.S=0;this.R=-1;var d=this;(this.time=C(this,J))&&eb(this.time,function(e){Q(d,!1,e)})}r(Xa,A);
function fb(a){for(var b=a.b,c=0;c<b.length;c+=4){var d=a,e=b,f=c;e[f]=d.type<bb?gb:" ";e[f+1]=d.h==d.s?null:d.h;e[f+2]=0;e[f+3]=R}a.I=a.J=!0;Q(a,!0)}function hb(a){a.m?(a.a.fillStyle=a.m,a.a.fillRect(0,0,a.U,a.u)):a.a.clearRect(0,0,a.U,a.u)}
function Q(a,b,c){b=void 0===b?!1:b;c=void 0===c?0:c;if(a.I||b){if(a.type<bb){var d=0;if(!a.L||b)hb(a);else if(a.v){d=a.g-a.v;var e=a.f*d;a.a.drawImage(a.l,a.f*a.v,0,e,a.u,0,0,e,a.u)}for(var f=e=0;f<a.K;f++){for(var h=0;h<a.g;h++){var l=a.b[e],g=a.b[e+1]||a.s,q=a.ba&&e==a.R;if(a.b[e+3]&R||q||b){if(h>=d)a:{var k=a,n=l;l=g;var m=h;g=f;var t=q;m=void 0===m?0:m;g=void 0===g?0:g;t=void 0===t?!1:t;var w=0;if(k.Y&&!(g&1)&&(w=k.f>>1,m==k.g-1))break a;if(l&&l!=k.h){t=t?P(l,1,2):l;var x=P(l,1,.25)}else t=t?
k.Z:k.h,x=k.$;l=!1;n=n?t:x;t==k.s&&(n=k.m,l=!0);t=m*k.f+w;x=g*k.j;k.L&&(m=m*k.f+w,g*=k.j,k.m?(k.a.fillStyle=k.m,k.a.fillRect(m,g,k.f,k.j)):k.a.clearRect(m,g,k.f,k.j));k.a.fillStyle=n;g=ib[k.type];3==g.length?(k.a.beginPath(),k.a.arc(t+g[0],x+g[1],g[2],0,2*Math.PI),l?(k.a.globalCompositeOperation="destination-out",k.a.fill(),k.a.globalCompositeOperation="source-over"):k.a.fill()):k.a.fillRect(t+g[0],x+g[1],g[2],g[3])}a.b[e+3]=q?a.b[e+3]|R:a.b[e+3]&~R}e+=4}e+=a.fa}a.v=0}else{b="";for(d=0;d<a.b.length;d+=
4)b+=a.b[d]||" ",a.b[d+3]&jb&&(b+=".");hb(a);for(f=e=d=0;d<b.length;d++){g=b[d];"."==g&&e&&e--;h=a;q=e;k=f;q=void 0===q?0:q;k=void 0===k?0:k;if(g=kb[g])for(l=0;l<g.length;l++)if(m=h,w=lb[g[l]]){n=(void 0===q?0:q)*m.f;t=(void 0===k?0:k)*m.j;m.a.fillStyle=m.h;m.a.beginPath();if(3==w.length)m.a.arc(n+w[0],t+w[1],w[2],0,2*Math.PI);else for(x=0;x<w.length;x+=2)x?m.a.lineTo(n+w[x],t+w[x+1]):m.a.moveTo(n+w[x],t+w[x+1]);m.a.closePath();m.a.fill()}if(++e==a.g&&(e=0,++f==a.K))break}}a.W.globalCompositeOperation=
a.m&&a.h!=a.s?"source-over":"copy";a.W.drawImage(a.l,0,0,a.U,a.u,0,0,a.V,a.N);a.I=!1;a.R=-1}else a.L||a.J||(!c||!a.S||c-a.S>=(1E3/60|0))&&fb(a);a.J=!1;c&&(a.S=c)}function db(a){return(a=a||void 0)&&mb[a]||a}
function P(a,b,c){b=void 0===b?1:b;c=void 0===c?1:c;if(a){var d=[];a=mb[a]||a;var e=a;var f=16;var h=e.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);h||(f=10,h=e.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,?\s*(\d+|)\)$/i));if(h){for(e=1;e<h.length;e++)d[e-1]=Number.parseInt(h[e],f);d.length=e-1;f=!0}else f=!1;if(f){a="rgba(";for(f=0;3>f;f++)h=Math.round(d[f]*c),h=0>h?0:255<h?255:h,a+=h+",";a+=(f<d.length?d[f]:b)+")"}}return a}
function nb(a,b,c,d,e){var f=!1;e=(void 0===e?0:e)&ob;b=4*(c*a.H+b);if(b<=a.b.length-4){if(a.b[b]!==d||(a.b[b+3]&ob)!==e)a.b[b]=d,a.b[b+3]=a.b[b+3]&~ob|e|R,a.I=f=!0;a.R=b;a.J=!0;a.v=0}return f}
var ab=0,$a=1,bb=3,Za="container",mb={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",
darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",
goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",
lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",
olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",
slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},gb=0,ob=129,jb=1,R=128,pb={},ib=(pb[ab]=[4,4,4],pb[$a]=[16,16,14],pb[2]=[2,2,28,28],pb),cb=[[8,8],[32,32],[32,32],[96,128]],lb={A:[30,8,79,8,67,19,37,19],B:[83,10,77,52,67,46,70,22],C:[77,59,71,100,61,89,64,64],
D:[28,91,58,91,69,104,15,104],E:[18,59,28,64,25,88,12,100],F:[24,10,34,21,31,47,18,52],G:[24,56,34,50,60,50,71,56,61,61,33,61],P:[80,102,8]},kb={" ":[],0:"ABCDEF".split(""),1:["B","C"],2:["A","B","D","E","G"],3:["A","B","C","D","G"],4:["B","C","F","G"],5:["A","C","D","F","G"],6:"ACDEFG".split(""),7:["A","B","C"],8:"ABCDEFG".split(""),9:"ABCDFG".split(""),"-":["G"],E:["A","D","E","F","G"],".":["P"]},Ya=1.2;
function qb(a,b,c){A.call(this,a,b,rb,c);this.data=c.values;this.h=this.data.length-1;if(this.O[Da]){var d=this;c=Math.log2(this.data.length)/2;this.f=Math.pow(2,Math.ceil(c));this.g=Math.pow(2,Math.floor(c));this.a=new Xa(a,b+"LEDs",{"class":"LED",bindings:{container:Ca(this)},type:$a,cols:this.f,rows:this.g,color:F(this,"colorROM","green"),backgroundColor:F(this,"backgroundColorROM","black"),persistent:!0}),fb(this.a);this.j=new I(a,b+"Input",{"class":"Input",location:[0,0,this.a.V,this.a.N,this.f,
this.g],bindings:{surface:Ca(this)}});this.l=Ea(this);Sa(this.j,function(e,f){if(d.b){var h=d.l;0<=e&&0<=f&&(e=f*d.f+e,h=sb(d.b,d.data[e],e));H(d,Fa,h)}})}}r(qb,A);function tb(a,b,c){a.a&&!c&&nb(a.a,b%a.f,b/a.f|0,1,R);return a.data[b]}function ub(a,b){(b=b.shift())&&a.a&&a.a.b.length==b.length&&(a.a.b=b,Q(a.a,!0))}function vb(a,b){a.a&&b.push(a.a.b)}var Da="array",Fa="cellDesc",rb=1.2;
function S(a,b,c){A.call(this,a,b,wb,c);this.da=F(this,"cyclesMinimum",1E5);this.sa=F(this,"cyclesMaximum",3E6);this.S=E(F(this,"cyclesPerSecond",65E4),this.da,this.sa);this.L=E(F(this,"yieldsPerSecond",xb),30,120);this.ua=E(F(this,"yieldsPerUpdate",yb),1,this.L);this.aa=(this.j=F(this,"clockByFrame",120>=this.S))||F(this,"requestAnimationFrame",!0);this.pa=this.qa=this.V=1;this.ba=this.S/1E4/100;this.h=this.u=this.ba*this.V;this.H=0;this.Y=Math.round(1E3/this.L);this.Z=[];this.W=[];this.b=[];this.$=
[];this.a=this.I=this.s=!1;this.J=this.g=0;this.Ca=this.Oa.bind(this);this.za=this.na.bind(this);this.fa=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.setTimeout).bind(window);if(this.j)this.K=this.ra=0;else{var d=this;Na(this,"timerYield",function(){d.I=!0;var e=d.H,f=zb(d);f>=d.L?d.H++:d.H+=Math.ceil(d.L/f);d.H>=d.ua&&e<d.ua&&T(d);d.H>=d.L&&(d.H=0)},this.Y)}this.T=this.R=this.m=0;Ab(this)||Bb(this,this.pa)}r(S,A);function eb(a,b){a.Z.push(b)}
S.prototype.ja=function(a,b){var c=this;switch(a){case Cb:b.onclick=function(){c.a?U(c):c.start()};break;case Db:b.onclick=function(){Eb(c)};break;case Fb:b.addEventListener("mousedown",function(){c.s=!0}),b.addEventListener("mouseup",function(){Ab(c);c.s=!1}),b.addEventListener("mousemove",function(){c.s&&Ab(c)}),b.addEventListener("change",function(){c.s=!0;Ab(c);c.s=!1})}A.prototype.ja.call(this,a,b)};
function Na(a,b,c,d){d=void 0===d?-1:d;var e=a.b.length+1;a.b.push({id:b,Ka:c,ta:d,X:-1});0<=d&&L(a,e,d);return e}S.prototype.na=function(a){if(this.j){if(!this.a)return;Gb(this);try{this.I=!1;do Hb(this,V(this,Ib(this,Jb(this))));while(this.a&&!this.I)}catch(c){y(this,c.message);U(this);return}Kb(this)}for(var b=0;b<this.Z.length;b++)this.Z[b](a);this.a&&this.aa&&this.fa(this.za)};function Lb(a){var b=a.h/a.ba;if(!b||b>a.V)b=a.V;a.Na=a.S/a.L*b;a.qa=b}
function Ib(a,b){a.R=a.m=b;if(!a.W.length)return a.m=0,a.R;for(var c=0;0<a.m;)c<a.W.length?b=a.W[c++](b)||1:c=b=0,a.m-=b;return a.R-a.m}function Mb(a,b){var c=Date.now();b()&&(a.N+=Date.now()-c)}function V(a,b){b=void 0===b?a.R-a.m:b;a.j&&(a.K-=b,1>a.K&&(a.I=!0));a.R=a.m=0;a.U+=b;a.T+=b;a.a||(a.T=0);return b}function zb(a,b){return Math.ceil(a.S*a.qa/1E3*(void 0===b?1E3:b))}
function Jb(a){var b=a.K+=a.ra;if(1>b)b=0;else{b|=0;for(var c=a.b.length;0<c;c--){var d=a.b[c-1];!(0>d.X)&&b>d.X&&(b=d.X)}}return b}function Nb(a){1<=a?a=a.toFixed(2)+"Mhz":(a=Math.round(1E6*a),a=999>=a?a+"Hz":Math.ceil(a/1E3)+"Khz");return a}function Eb(a,b){a.a?y(a,"already running"):a.g?U(a):Ob(a,b)}
S.prototype.Oa=function(){this.J=0;if(this.a){Gb(this);try{this.I=!1;do{for(var a=zb(this,this.Y),b=this.b.length;0<b;b--){var c=this.b[b-1];!(0>c.X)&&a>c.X&&(a=c.X)}Hb(this,V(this,Ib(this,a)))}while(this.a&&!this.I)}catch(d){y(this,d.message);U(this);return}this.a&&(this.J=setTimeout(this.Ca,Kb(this)),this.aa||this.na())}};function Ab(a){var b=a.O[Fb];return b?(Bb(a,Math.floor((b.value-b.min)/(b.max-b.min)*(a.sa-a.da)+a.da)/a.S),!0):!1}
function Bb(a,b){void 0!==b&&(!a.s&&0<a.h&&a.h<.9*a.u&&(b=a.pa),a.V=b,b=a.ba*a.V,a.u!=b&&(a.u=b,H(a,Pb,Nb(a.u))),a.h=a.u);a.j&&(a.ra=1E6*a.h/60+1E-8,a.K=0);a.T=0;a.f=a.l=0;Lb(a);for(b=a.b.length;0<b;b--){var c=a.b[b-1];0<=c.ta&&L(a,b,c.ta,!0)}}function L(a,b,c,d){0<b&&b<=a.b.length&&(b=a.b[b-1],d||0>b.X)&&(c=zb(a,c),a.a&&(c+=V(a)),b.X=c)}function Gb(a){Lb(a);a.U=0;a.N=0;a.v=Date.now();a.f||(a.f=a.v);if(a.l){var b=a.v-a.l;b>a.Y&&(a.f+=b,a.f>a.v&&(a.f=a.v))}}
function Kb(a){a.l=Date.now();a.N&&(a.f+=a.N,a.v+=a.N);var b=a.Y;a.U&&(b=Math.round(b*a.U/a.Na));b-=a.l-a.v;var c=a.l-a.f;c&&(a.h=a.T/(10*c)/100);0>b?(-1E3>b&&(a.f-=b),b=0):a.h<a.u&&(b=0);a.l+=b;0<=a.ka.indexOf(Ia.Ha)&&a.ma("after running %d cycles, resting for %dms\n",a.U,b);return b}S.prototype.start=function(){if(this.a||this.g)return!1;this.J&&(clearTimeout(this.J),this.J=0);this.a=!0;this.f=this.l=0;T(this,!0);this.j||(this.J=setTimeout(this.Ca,0));this.aa&&this.fa(this.za);return!0};
function Ob(a,b){b=void 0===b?1:b;a.a||(b&&!a.g&&(a.g=b),a.g&&(b=a.j?Jb(a)||1:1,a.g--,Hb(a,V(a,Ib(a,b))),T(a),a.g&&setTimeout(function(){Ob(a,0)},0)))}function U(a){return a.g?(a.g=0,T(a,!0),!0):a.a?(a.a=!1,V(a),T(a,!0),!0):!1}function T(a,b){b&&(a.a?(y(a,"starting ("+Nb(a.u)+" target by "+(a.j?"frame":"timer")+")"),b=!1):y(a,"stopping"));H(a,Cb,a.a?"Halt":"Run");H(a,Db,a.g?"Stop":"Step");a.s||H(a,Pb,a.a&&a.h?Nb(a.h):"Stopped");for(var c=0;c<a.$.length;c++)a.$[c](b)}
function Hb(a,b){if(1<=b)for(var c=a.b.length;0<c;c--){var d=a.b[c-1];0>d.X||(d.X-=b,0>=d.X&&(d.X=-1,d.Ka(),0<=d.ta&&L(a,c,d.ta)))}}var Cb="run",Pb="speed",Db="step",Fb="throttle",xb=120,yb=60,wb=1.2;function W(a,b,c){A.call(this,a.w,b,a.version);this.b=a;this.name=b;this.c=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];if(!c){b=[];c="reg"+this.name;b.push(c);a.Y[c]=[this,-1];for(var d=0;d<this.c.length;d++)c=this.ca("reg%s-%02d",this.name,d),b.push(c),a.Y[c]=[this,d];ra(a,b)}}r(W,A);p=W.prototype;
p.add=function(a,b,c,d){for(var e=0,f=c[0],h=c[1];f<=h;f++)this.c[f]=a.c[f]+b.c[f]+e,e=0,this.c[f]>=d&&(this.c[f]-=d,e=1);e&&(this.b.l=!0);X(this,c)};p.get=function(){return this.c};function Qb(a,b,c){c=void 0===c?[0,15]:c;for(var d=0;d<a.c.length;d++)a.c[d]=0;d=c[0];for(c=c[1];d<=c;d++)a.c[d]=b&15,b>>>=4;return a}p.move=function(a,b){for(var c=b[0],d=b[1];c<=d;c++)this.c[c]=a.c[c];X(a,b)};p.set=function(a){if(a&&a.length==this.c.length)for(var b=0;b<this.c.length;b++)this.c[b]=a[b]};
p.store=function(a){for(var b=0,c=this.c.length;b<c;b++)this.c[b]=a.c[b]};p.sub=function(a,b,c,d){for(var e=0,f=c[0],h=c[1];f<=h;f++)this.c[f]=a.c[f]-b.c[f]-e,e=0,0>this.c[f]&&(this.c[f]+=d,e=1);e&&(this.b.l=!0);X(this,c)};p.toString=function(a){a=void 0===a?!1:a;var b=this.oa+"=";a&&3>b.length&&(b+=" ");for(var c=this.c.length-1;0<=c;c--)b=a?b+z[this.c[c]]:b+(na[this.c[c]]+(c%4?"":" "));return b};function X(a,b){a.b.j=a.c[b[0]];b[0]<b[1]&&(a.b.j|=a.c[b[0]+1]<<4)}
function Rb(a,b,c){A.call(this,a,b,Sb,c);this.type=Number.parseInt(F(this,"type","1501").slice(-4),10);this.Y={};this.a=Array(4);for(a=0;4>a;a++)this.a[a]=new W(this,String.fromCharCode(65+a));this.I=this.a[0];this.L=this.a[1];this.aa=this.a[2];this.ba=this.a[3];this.v=Array(8);for(a=0;8>a;a++)this.v[a]=new W(this,"X"+a);this.J=Array(8);for(a=0;8>a;a++)this.J[a]=new W(this,"Y"+a);this.Z=new W(this,"Supp",!0);this.R=new W(this,"Temp",!0);this.s=10;this.l=!1;this.N=this.b=this.j=this.m=0;this.h=[-1,
-1,-1];this.u=0;this.$=wa(this,this.M.input);this.$.K=this.Ea.bind(this);a=this.$;b=this.Fa.bind(this);a.f=this.ha.bind(this);a.L=b;this.g=wa(this,this.M.output);if(this.f=C(this,Tb))this.f.b=this;(this.time=C(this,J))&&this.f&&(this.time.W.push(this.La.bind(this)),this.time.$.push(this.Ga.bind(this)));this.V=this.W=this.K=void 0;this.U=this.S=-1;this.H={};this.T=Ub;a=this.Ma.bind(this);b=Ba.xa;D[this.w]||(D[this.w]={});D[this.w][b]||(D[this.w][b]=[]);D[this.w][b].push(a)}r(Rb,A);
function Vb(a,b){a.H[b]&&(a.H[b]=!1,y(a,"break on "+Wb[b]),U(a.time))}function Xb(a){a.g&&fb(a.g);if(a.f){var b=a.f;b.a&&fb(b.a)}Yb(a,!1)}p=Rb.prototype;p.La=function(a){a=void 0===a?0:a;for(this.u=0;this.u<=a;){if(this.U==this.b){this.U=-1;y(this,"break");U(this.time);break}var b=tb(this.f,this.b),c=this.b;this.b=c+1&this.f.h;if(void 0==b||!Zb(this,b,c)){this.b=c;y(this,"unimplemented opcode");U(this.time);break}this.u+=$b}if(0>=a){var d=this;Mb(this.time,function(){var e=d.f;e.a&&Q(e.a);y(d,d.toString())})}return this.u};
function Zb(a,b,c){if(b&4096)return b&2048?!!(b&1024)==a.l&&(a.b=c&1024|b&1023):(a.push(a.b),a.b=b&2047),a.l=!1,!0;var d;c=b&ac;switch(c){case bc:case cc:case dc:case ec:case fc:case gc:case hc:case ic:case jc:case kc:case lc:case mc:c=nc[c];var e=(b&oc)>>pc;var f=(b&qc)>>rc;var h=(b&sc)>>tc;var l=(d=b&uc)?vc:wc;switch(f){case 0:case 1:case 2:case 3:var g=a.a[f];break;case 4:g=Qb(a.R,1,c);break;case 5:l=d?xc:yc;break;case 6:g=Qb(a.R,a.j&15,c);break;case 7:g=Qb(a.R,a.j&255,c)}switch(h){case 0:var q=
a.a[e];break;case 1:q=4>f?a.a[f]:void 0;break;case 2:q=5>f?a.Z:5==f?a.a[e]:void 0;break;case 3:if(d)a.a[e].move(g,c);else{a=a.I;e=g;b=c[0];for(g=c[1];b<=g;b++)q=a.c[b],a.c[b]=e.c[b],e.c[b]=q;X(e,c)}return!0}if(!q)break;b=b>=ic?16:a.s;switch(l){case wc:q.add(a.a[e],g,c,b);break;case vc:q.sub(a.a[e],g,c,b);break;case yc:b=q;a=a.a[e];e=c[1];for(g=c[0];e>g;e--)b.c[e]=a.c[e-1];b.c[e]=0;X(b,c);break;case xc:b=q;a=a.a[e];e=c[0];for(g=c[1];e<g;e++)b.c[e]=a.c[e+1];b.c[e]=0;X(b,c)}return!0;case zc:e=(b&Ac)>>
Bc;c=(b&Cc)>>Dc;g=1<<((b&Ec)>>Fc);if(!c)break;c+=12;switch(b&Gc){case Hc:a.a[e].c[c]|=g;break;case Ic:a.a[e].c[c]&=~g;break;case Jc:a.a[e].c[c]&g&&(a.l=!0);break;case Kc:a.a[e].c[c]^=g}return!0;case Lc:switch(b&Mc){case Nc:a.I.store(a.J[a.m]);break;case Oc:a.m=b>>4&7;break;case Pc:a.b=a.j;break;case Qc:a.l=!1;c=a.h[0];e=0;for(b=a.h.length-1;e<b;)a.h[e]=a.h[++e];a.h[e]=-1;a.b=c;break;case Rc:a.v[a.m].store(a.I);break;case Sc:a.I.store(a.v[a.m]);break;case Tc:a.J[a.m].store(a.I);break;case Uc:Vb(a,
"o");if(a.g){c=0;for(e=11;0<=e;c++,e--)b=void 0,a.L.c[e]&8?b=" ":a.L.c[e]&1?b="-":b=z[a.I.c[e]],nb(a.g,c,0,b,a.L.c[e]&2?jb:0)&&Vb(a,"om");Yb(a)}a.u+=31*$b;a.N&&(a.j=a.N,a.l=!0,Vb(a,"i"));break;case Vc:a.s=10;break;case Wc:a.s=16;break;case Xc:a.m=a.j&7;break;default:return!1}return!0}return!1}
function sb(a,b,c,d){d=void 0===d?!1:d;var e="???",f="";if(b&4096)b&2048?(e="BR",e=b&1024?e+"C":e+"NC",f=c&1024|b&1023):(e="CALL",f=b&2047),f=a.ca("0x%04x",f);else if(0<=b){var h=b&ac;var l;switch(h){case bc:case cc:case dc:case ec:case fc:case gc:case hc:case ic:case jc:case kc:case lc:case mc:f="";e=nc[h];for(h=0;16>h;h++)h%4||(f=" "+f),f=(e?h>=e[0]&&h<=e[1]?"F":"0":"?")+f;h=(b&oc)>>pc;var g=(b&qc)>>rc;var q=(b&sc)>>tc;var k=b&uc;e="LOAD";var n=l="?";var m=k?5==g?">>":"-":5==g?"<<":"+";switch(q){case 0:l=
Y[h];break;case 1:4>g&&(l=Y[g]);break;case 2:6>g&&(l="NUL");break;case 3:k?(e="MOVE",l=Y[h],n=Y[g]):(e="XCHG",h||(l="A"),4>g&&(n=Y[g])),g=-1}switch(g){case 0:case 1:case 2:case 3:n=Y[h]+m+Y[g];break;case 4:case 5:n=Y[h]+m+"1";break;case 6:n=Y[h]+m+"R5L";break;case 7:n=Y[h]+m+"R5"}f=l+","+n+","+f;break;case zc:switch(b&Gc){case Hc:e="SET";break;case Ic:e="CLR";break;case Jc:e="TST";break;case Kc:e="NOT"}f=a.a[(b&Ac)>>Bc].name;h=(b&Cc)>>Dc;f+="["+(h?h+12:"?")+":"+((b&Ec)>>Fc)+"]";break;case Lc:switch(b&
Mc){case Nc:e="STORE";f="A,Y[RAB]";break;case Oc:e="STORE";f="RAB,"+((b&112)>>4);break;case Pc:e="BR";f="R5";break;case Qc:e="RET";break;case Rc:e="STORE";f="X[RAB],A";break;case Sc:e="STORE";f="A,X[RAB]";break;case Tc:e="STORE";f="Y[RAB],A";break;case Uc:e="DISP";break;case Vc:e="BCDS";break;case Wc:e="BCDR";break;case Xc:e="STORE",f="RAB,R5L"}}}return a.ca(d?"%03X %04X\n":"0x%04x: 0x%04x  %-8s%s\n",c,b,e,f)}
function Yc(a,b){if(b){var c=b.stateChip||b[0];if(c&&c.length){var d=c.shift();if((d|0)!==(Sb|0))a.ma("Saved state version mismatch: %3.2f\n",d);else{try{a.a.forEach(function(e){return e.set(c.shift())}),a.v.forEach(function(e){return e.set(c.shift())}),a.J.forEach(function(e){return e.set(c.shift())}),a.Z.set(c.shift()),a.R.set(c.shift()),a.s=c.shift(),a.l=c.shift(),a.m=c.shift(),a.j=c.shift(),a.b=c.shift(),a.h=c.shift(),a.N=c.shift()}catch(e){y(a,"Chip state error: "+e.message);return}(b=b.stateROM||
b[1])&&a.f&&ub(a.f,b)}}else y(a,"Invalid saved state")}}
p.Ma=function(a,b){var c="",d=a[1],e=Number.parseInt(a[2],16);isNaN(e)&&(e=-1);var f=Number.parseInt(a[3],10)||8;this.T=Ub;switch(d[0]){case "b":a=d.substr(1);if("l"==a){for(a in Wb)b=Wb[a],c+="break on "+b+" (b"+a+"): "+(this.H[a]||!1)+"\n";break}(b=Wb[a])?(this.H[a]=!this.H[a],c="break on "+b+" (b"+a+"): "+this.H[a]):a&&(c="unrecognized break option '"+a+"'");break;case "g":this.time.start()?this.U=e:c="already started";break;case "h":U(this.time)||(c="already stopped");break;case "t":"c"==d[1]&&
(this.T=Zc);f=Number.parseInt(a[2],10)||1;Eb(this.time,f);b&&(b.ga=a[0]);break;case "r":"c"==d[1]&&(this.T=Zc);$c(this,d.substr(1),e);c+=this.toString(d[1]);b&&(b.ga=a[0]);break;case "u":for(e=0<=e?e:0<=this.S?this.S:this.b;f--;){d=this.f&&tb(this.f,e,!0);if(void 0==d)break;c+=sb(this,d,e++)}this.S=e;b&&(b.ga=a[0]);break;case "?":c="additional commands:";ad.forEach(function(h){c+="\n"+h});break;default:a[0]&&(c="unrecognized command '"+a[0]+"' (try '?')")}c&&y(this,c.trim());return!0};
p.Ea=function(a,b){var c=0;0<=a&&0<=b&&(c=b|a+1<<4);this.N=c};p.Aa=function(){var a=null;if(Ga(this)){var b;if(window)try{(b=window.localStorage.getItem(this.w))&&(a=JSON.parse(b))}catch(c){y(this,c.message)}}Yc(this,a)};p.ha=function(a){void 0==a&&(a=!this.time.a)&&(this.b=0);a?this.time.start():(U(this.time),Xb(this))};p.Fa=function(){y(this,"reset");this.b=0;Xb(this);this.time.a||this.status()};
p.Ba=function(){var a=bd(this);if(Ga(this)){a=JSON.stringify(a);try{window.localStorage.setItem(this.w,a)}catch(b){y(this,b.message)}}};p.push=function(a){for(var b=this.h.length-1;0<b;)this.h[b]=this.h[--b];this.h[0]=a};
function bd(a){var b=[[],[]],c=b[0],d=b[1];c.push(Sb);a.a.forEach(function(e){return c.push(e.get())});a.v.forEach(function(e){return c.push(e.get())});a.J.forEach(function(e){return c.push(e.get())});c.push(a.Z.get());c.push(a.R.get());c.push(a.s);c.push(a.l);c.push(a.m);c.push(a.j);c.push(a.b);c.push(a.h);c.push(a.N);a.f&&vb(a.f,d);return b}function $c(a,b,c){if(b&&!(0>c))switch(b){case "pc":a.b=c;break;default:y(a,"unrecognized register: "+b)}}p.status=function(){y(this,this.toString())};
p.toString=function(a,b){var c=this;a=void 0===a?"":a;b=void 0===b?null:b;var d="";if(this.T){this.f&&(d+=sb(this,tb(this.f,this.b,!0),this.b,!0));d+="  ";b=0;for(a=this.a.length;b<a;b++)d+=this.a[b].toString()+" ";d+="\n ";d+=" COND="+(this.l?1:0);d+=" BASE="+this.s;d+=" R5="+this.ca("%02X",this.j);d+=" RAB="+this.m+" ST=";this.h.forEach(function(f){d+=c.ca("%03X ",0>f?0:f&4095)});return d.trim()}if(b){a=0;for(var e=b.length>>1;a<e;a++)d+=b[a].toString(!0)+"  "+b[a+e].toString(!0)+"\n";return d}d+=
this.toString(a,this.a);0<=a.indexOf("a")&&(d+=this.toString(a,this.v),d+=this.toString(a,this.J));d+="COND="+(this.l?1:0);d+=" BASE="+this.s;d+=" R5="+this.ca("0x%02x",this.j);d+=" RAB="+this.m+" ";this.h.forEach(function(f,h){d+=c.ca("ST%d=0x%04x ",h,f&65535)});this.f&&(d+="\n"+sb(this,tb(this.f,this.b,!0),this.b));this.S=this.b;return d.trim()};
function Yb(a,b){b=void 0===b?!0:b;var c,d=b&&(a.type==cd?!!(a.aa.c[14]&8):!!(a.L.c[15]&4));if(a.V!==d){if(c=a.O["2nd"])c.style.opacity=d?"1":"0",void 0===a.V&&a.g&&(c.style.color=a.g.color);a.V=d}d=b&&(a.type==cd?!!(a.L.c[15]&4):!!(a.ba.c[15]&8));if(a.W!==d){if(c=a.O.INV)c.style.opacity=d?"1":"0",void 0===a.W&&a.g&&(c.style.color=a.g.color);a.W=d}c=a.type==cd?a.v[4].c[15]>>2:a.aa.c[15];b=b?c?1==c?dd:ed:fd:gd;if(a.K!==b){if(c=a.O.Deg)c.style.opacity=b==fd?"1":"0",void 0===a.K&&a.g&&(c.style.color=
a.g.color);if(c=a.O.Rad)c.style.opacity=b==dd?"1":"0",void 0===a.K&&a.g&&(c.style.color=a.g.color);if(c=a.O.Grad)c.style.opacity=b==ed?"1":"0",void 0===a.K&&a.g&&(c.style.color=a.g.color);a.K=b}}p.Ga=function(a){for(var b in this.O){var c=this.Y[b];if(c){var d=c[0];c=c[1];H(this,b,0>c?d.toString():z[d.c[c]])}}if(a||!this.time.a)a=this.f,a.a&&Q(a.a),y(this,this.toString())};
var ac=3840,bc=0,cc=256,dc=512,ec=768,fc=1024,gc=1280,hc=1792,ic=2048,jc=2304,kc=2560,zc=3072,lc=3328,Lc=3584,mc=3840,oc=192,pc=6,qc=56,rc=3,sc=6,tc=1,uc=1,Gc=3,Hc=0,Ic=1,Jc=2,Kc=3,Ac=192,Bc=6,Cc=48,Dc=4,Ec=12,Fc=2,Mc=15,Nc=0,Oc=1,Pc=2,Qc=3,Rc=4,Sc=5,Tc=6,Uc=7,Vc=8,Wc=9,Xc=10,Z={},nc=(Z[bc]=[12,12],Z[cc]=[0,15],Z[dc]=[2,12],Z[ec]=[0,12],Z[fc]=[2,2],Z[gc]=[0,1],Z[hc]=[0,13],Z[ic]=[14,14],Z[jc]=[13,15],Z[kc]=[14,15],Z[lc]=[13,13],Z[mc]=[15,15],Z),$b=128,wc=0,vc=1,yc=2,xc=3,cd=1501,gd=0,fd=1,dd=2,ed=
3,Wb={i:"input",o:"output",om:"output modification"},Ub=0,Zc=1,Y="A B C D 1 ? R5L R5".split(" "),ad="b[c]\t\tbreak on condition c;bl\t\tlist break conditions;g [addr]\trun (to addr);h\t\thalt;r[a]\t\tdump (all) registers;t [n]\t\tstep (n instructions);u [addr] [n]\tdisassemble (at addr)".split(";"),Sb=1.2;oa="TMS1500";
function hd(a,b){A.call(this,a,a,id);var c=this;this.b=null;this.a="";this.f=this.g=!1;b=b.trim();"{"==b[0]?jd(this,b):(this.a=b,ma(this.a,function(d,e,f,h){4==f&&(!h&&e?(jd(c,e),kd(c)):c.ma("Error (%d) loading configuration: %s\n",h,d))}));window.addEventListener("load",function(){c.g=!0;kd(c)});window.addEventListener((Ha("iOS")?"pagehide":Ha("Opera")?"unload":void 0)||"beforeunload",function(){var d;if(d=c.b)d.Ba&&d.Ba(),d.ha&&d.ha(!1)})}r(hd,A);
function kd(a){if(a.f&&a.g){for(var b=0;b<ld.length;b++)for(var c in a.M){var d=void 0,e=void 0;try{var f=a.M[c],h="";e=f["class"];if(e==ld[b]){switch(e){case md:d=new Rb(a.w,c,f);a.b=d;break;case nd:new I(a.w,c,f);break;case od:new Xa(a.w,c,f);break;case Tb:d=new qb(a.w,c,f);d.M.revision&&(h="revision "+d.M.revision);break;case J:new S(a.w,c,f);break;case pd:a.ma("PCjs %s v%3.2f\n",f.name,id);y(a,qd);y(a,rd);a.a&&y(a,"Configuration: "+a.a);continue;default:y(a,"unrecognized device class: "+e);continue}y(a,
e+" device initialized"+(h?" ("+h+")":""))}}catch(l){a:if(y(a,"error initializing "+e+" device '"+c+"':\n"+l.message),d=void 0,e=c,h=B[a.w])for(d in h)if(h[d].oa==e){h.splice(d,1);break a}}}if(b=a.b)b.Aa&&a.h&&b.Aa(),b.ha&&a.j&&b.ha(!0)}}
function jd(a,b){try{a.M=JSON.parse(b);var c=a.M[a.w];pa(a,c);qa(a,c);ra(a,c.bindings);a.j=!1!==c.autoStart;a.h=!1!==c.autoRestore;a.f=!0}catch(e){c=e.message;var d=c.match(/position ([0-9]+)/);d&&(c+=" ('"+b.substr(+d[1],40).replace(/\s+/g," ")+"...')");y(a,"machine '"+a.w+"' initialization error: "+c)}}
var md="Chip",nd="Input",od="LED",pd="Machine",Tb="ROM",J="Time",ld=[pd,J,od,nd,Tb,md],qd="Copyright \u00a9 2012-2019 Jeff Parsons <Jeff@pcjs.org>",rd="License: GPL version 3 or later <http://gnu.org/licenses/gpl.html>",id=1.2;window[oa]=hd;})()

//# sourceMappingURL=ti57.js.map
