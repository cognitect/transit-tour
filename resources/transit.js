;(function(){var aa=this;
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function h(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b};function k(a,b){this.k=a|0;this.h=b|0}var ca={};function l(a){if(-128<=a&&128>a){var b=ca[a];if(b)return b}b=new k(a|0,0>a?-1:0);-128<=a&&128>a&&(ca[a]=b);return b}function m(a){return isNaN(a)||!isFinite(a)?n:a<=-da?p:a+1>=da?ea:0>a?q(m(-a)):new k(a%s|0,a/s|0)}function u(a,b){return new k(a,b)}
function fa(a,b){if(0==a.length)throw Error("number format error: empty string");var c=b||10;if(2>c||36<c)throw Error("radix out of range: "+c);if("-"==a.charAt(0))return q(fa(a.substring(1),c));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character: '+a);for(var d=m(Math.pow(c,8)),e=n,f=0;f<a.length;f+=8){var g=Math.min(8,a.length-f),r=parseInt(a.substring(f,f+g),c);8>g?(g=m(Math.pow(c,g)),e=e.multiply(g).add(m(r))):(e=e.multiply(d),e=e.add(m(r)))}return e}
var s=4294967296,da=s*s/2,n=l(0),ga=l(1),ha=l(-1),ea=u(-1,2147483647),p=u(0,-2147483648),ia=l(16777216);function ja(a){return a.h*s+(0<=a.k?a.k:s+a.k)}
k.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(v(this))return"0";if(0>this.h){if(w(this,p)){var b=m(a),c=x(this,b),b=ka(c.multiply(b),this);return c.toString(a)+b.k.toString(a)}return"-"+q(this).toString(a)}for(var c=m(Math.pow(a,6)),b=this,d="";;){var e=x(b,c),f=ka(b,e.multiply(c)).k.toString(a),b=e;if(v(b))return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};function v(a){return 0==a.h&&0==a.k}function w(a,b){return a.h==b.h&&a.k==b.k}
k.prototype.compare=function(a){if(w(this,a))return 0;var b=0>this.h,c=0>a.h;return b&&!c?-1:!b&&c?1:0>ka(this,a).h?-1:1};function q(a){return w(a,p)?p:u(~a.k,~a.h).add(ga)}k.prototype.add=function(a){var b=this.h>>>16,c=this.h&65535,d=this.k>>>16,e=a.h>>>16,f=a.h&65535,g=a.k>>>16,r;r=0+((this.k&65535)+(a.k&65535));a=0+(r>>>16);a+=d+g;d=0+(a>>>16);d+=c+f;c=0+(d>>>16);c=c+(b+e)&65535;return u((a&65535)<<16|r&65535,c<<16|d&65535)};function ka(a,b){return a.add(q(b))}
k.prototype.multiply=function(a){if(v(this)||v(a))return n;if(w(this,p))return 1==(a.k&1)?p:n;if(w(a,p))return 1==(this.k&1)?p:n;if(0>this.h)return 0>a.h?q(this).multiply(q(a)):q(q(this).multiply(a));if(0>a.h)return q(this.multiply(q(a)));if(0>this.compare(ia)&&0>a.compare(ia))return m(ja(this)*ja(a));var b=this.h>>>16,c=this.h&65535,d=this.k>>>16,e=this.k&65535,f=a.h>>>16,g=a.h&65535,r=a.k>>>16;a=a.k&65535;var N,t,A,Ea;Ea=0+e*a;A=0+(Ea>>>16);A+=d*a;t=0+(A>>>16);A=(A&65535)+e*r;t+=A>>>16;A&=65535;
t+=c*a;N=0+(t>>>16);t=(t&65535)+d*r;N+=t>>>16;t&=65535;t+=e*g;N+=t>>>16;t&=65535;N=N+(b*a+c*r+d*g+e*f)&65535;return u(A<<16|Ea&65535,N<<16|t)};
function x(a,b){if(v(b))throw Error("division by zero");if(v(a))return n;if(w(a,p)){if(w(b,ga)||w(b,ha))return p;if(w(b,p))return ga;var c;c=1;if(0==c)c=a;else{var d=a.h;c=32>c?u(a.k>>>c|d<<32-c,d>>c):u(d>>c-32,0<=d?0:-1)}c=x(c,b).shiftLeft(1);if(w(c,n))return 0>b.h?ga:ha;d=ka(a,b.multiply(c));return c.add(x(d,b))}if(w(b,p))return n;if(0>a.h)return 0>b.h?x(q(a),q(b)):q(x(q(a),b));if(0>b.h)return q(x(a,q(b)));for(var e=n,d=a;0<=d.compare(b);){c=Math.max(1,Math.floor(ja(d)/ja(b)));for(var f=Math.ceil(Math.log(c)/
Math.LN2),f=48>=f?1:Math.pow(2,f-48),g=m(c),r=g.multiply(b);0>r.h||0<r.compare(d);)c-=f,g=m(c),r=g.multiply(b);v(g)&&(g=ga);e=e.add(g);d=ka(d,r)}return e}k.prototype.shiftLeft=function(a){a&=63;if(0==a)return this;var b=this.k;return 32>a?u(b<<a,this.h<<a|b>>>32-a):u(0,b<<a-32)};function la(a,b){b&=63;if(0==b)return a;var c=a.h;return 32>b?u(a.k>>>b|c<<32-b,c>>>b):32==b?u(c,0):u(c>>>b-32,0)};var y="undefined"!=typeof Object.keys?function(a){return Object.keys(a)}:function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},ma="undefined"!=typeof Array.isArray?function(a){return Array.isArray(a)}:function(a){return"array"===ba(a)};function z(a,b){if(null==a)return null==b;if(a===b)return!0;if("object"===typeof a){if(ma(a)){if(ma(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!z(a[c],b[c]))return!1;return!0}return!1}if(a.s)return a.s(b);if(null!=b&&"object"===typeof b){if(b.s)return b.s(a);var d=c=0,e=y(b).length,f;for(f in a)if(a.hasOwnProperty(f))if(d++,"$com$cognitect$transit$hashCode$"==f)b[f]||(c=-1);else if(!b.hasOwnProperty(f)||!z(a[f],b[f]))return!1;return d+c===e}}return!1}
function na(a,b){return a^b+2654435769+(a<<6)+(a>>2)}var oa={},pa=0;function qa(a){var b=0;if(null!=a.forEach)a.forEach(function(a,c){b=(b+(B(c)^B(a)))%4503599627370496});else for(var c=y(a),d=0;d<c.length;d++){var e=c[d];if("$com$cognitect$transit$hashCode$"!==e)var f=a[e],b=(b+(B(e)^B(f)))%4503599627370496}return b}
function B(a){if(null==a)return 0;switch(typeof a){case "number":return a;case "boolean":return!0===a?1:0;case "string":var b=oa[a];if(null==b){for(var c=b=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;pa++;256<=pa&&(oa={},pa=1);oa[a]=b}a=b;return a;default:if(a instanceof Date)return a.valueOf();if(ma(a)){for(c=b=0;c<a.length;c++)b=na(b,B(a[c]));return b}if(a.v)return a.v();if(a.$com$cognitect$transit$hashCode$)return a.$com$cognitect$transit$hashCode$;b=qa(a);return a.$com$cognitect$transit$hashCode$=
b}};var ra={},sa=fa("9007199254740992"),ta=fa("-9007199254740992");function ua(a){if("number"===typeof a||a instanceof k)return a;a=fa(a,10);return 0<a.compare(sa)||0>a.compare(ta)?a:ja(a)}k.prototype.q=function(a){return z(this,a)};k.prototype.equiv=k.prototype.q;k.prototype.s=function(a){return a instanceof k&&w(this,a)};k.prototype.v=function(){return this.k};function C(a){this.value=a}C.prototype.toString=function(){return"[BigInteger: "+this.value+"]"};C.prototype.q=function(a){return z(this,a)};
C.prototype.equiv=C.prototype.q;C.prototype.s=function(a){return a instanceof C&&this.value===a.value};C.prototype.v=function(){return B(this.value)};function D(a){this.value=a}D.prototype.toString=function(){return"[BigDecimal: "+this.value+"]"};D.prototype.q=function(a){return z(this,a)};D.prototype.equiv=D.prototype.q;D.prototype.s=function(a){return a instanceof D&&this.value===a.value};D.prototype.v=function(){return B(this.value)};function va(a){return new D(a)}
function E(a){this.name=a;this.a=-1}E.prototype.toString=function(){return":"+this.name};E.prototype.q=function(a){return z(this,a)};E.prototype.equiv=E.prototype.q;E.prototype.s=function(a){return a instanceof E&&this.name==a.name};E.prototype.v=function(){-1===this.a&&(this.a=B(this.name));return this.a};function wa(a){return new E(a)}function F(a){this.name=a;this.a=-1}F.prototype.toString=function(){return"[Symbol: "+this.name+"]"};F.prototype.q=function(a){return z(this,a)};
F.prototype.equiv=F.prototype.q;F.prototype.s=function(a){return a instanceof F&&this.name==a.name};F.prototype.v=function(){-1===this.a&&(this.a=B(this.name));return this.a};function xa(a){return new F(a)}function ya(a,b,c){var d="";c=c||b+1;for(var e=8*(7-b),f=l(255).shiftLeft(e);b<c;b++,e-=8,f=la(f,8)){var g=la(u(a.k&f.k,a.h&f.h),e).toString(16);1==g.length&&(g="0"+g);d+=g}return d}function G(a,b){this.Y=a;this.aa=b;this.a=-1}
G.prototype.toString=function(a){var b=this.Y,c=this.aa;a=""+(ya(b,0,4)+"-");a+=ya(b,4,6)+"-";a+=ya(b,6,8)+"-";a+=ya(c,0,2)+"-";return a+=ya(c,2,8)};G.prototype.q=function(a){return z(this,a)};G.prototype.equiv=G.prototype.q;G.prototype.s=function(a){return a instanceof G&&w(this.Y,a.Y)&&w(this.aa,a.aa)};
function za(a){a=a.replace(/-/g,"");for(var b=null,c=null,d=c=0,e=24,f=0,f=c=0,e=24;8>f;f+=2,e-=8)c|=parseInt(a.substring(f,f+2),16)<<e;d=0;f=8;for(e=24;16>f;f+=2,e-=8)d|=parseInt(a.substring(f,f+2),16)<<e;b=u(d,c);c=0;f=16;for(e=24;24>f;f+=2,e-=8)c|=parseInt(a.substring(f,f+2),16)<<e;d=0;for(e=f=24;32>f;f+=2,e-=8)d|=parseInt(a.substring(f,f+2),16)<<e;c=u(d,c);return new G(b,c)}function Aa(a){a="number"===typeof a?a:parseInt(a,10);return new Date(a)}
Date.prototype.s=function(a){return a instanceof Date?this.valueOf()===a.valueOf():!1};Date.prototype.v=function(){return this.valueOf()};function H(a){this.Q=a;this.a=-1}H.prototype.q=function(a){return z(this,a)};H.prototype.equiv=H.prototype.q;H.prototype.s=function(a){return a instanceof H?this.Q=a.Q:!1};H.prototype.v=function(){-1===this.a&&(this.a=B(this.Q));return this.a};function Ba(a){return new H(a)}function I(a){this.uri=a;this.a=-1}
I.prototype.toString=function(){return"[URI: "+this.uri+"]"};I.prototype.q=function(a){return z(this,a)};I.prototype.equiv=I.prototype.q;I.prototype.s=function(a){return a instanceof I?this.uri=a.uri:!1};I.prototype.v=function(){-1===this.a&&(this.a=B(this.uri));return this.a};function Ca(a){return new I(a)}function J(a,b){this.B=a;this.type=b||0;this.o=0}
J.prototype.next=function(){if(this.o<this.B.length){var a=null,a=0===this.type?this.B[this.o]:1===this.type?this.B[this.o+1]:[this.B[this.o],this.B[this.o+1]],a={value:a,done:!1};this.o+=2;return a}return{value:null,done:!0}};J.prototype.next=J.prototype.next;function K(a,b){this.map=a;this.type=b||0;this.keys=Da(this.map);this.o=0;this.J=null;this.G=0}
K.prototype.next=function(){if(this.o<this.map.size){null!=this.J&&this.G<this.J.length||(this.J=this.map.map[this.keys[this.o]],this.G=0);var a=null,a=0===this.type?this.J[this.G]:1===this.type?this.J[this.G+1]:[this.J[this.G],this.J[this.G+1]],a={value:a,done:!1};this.o++;this.G+=2;return a}return{value:null,done:!0}};K.prototype.next=K.prototype.next;
function Fa(a,b){if((b instanceof L||b instanceof M)&&a.size===b.size){for(var c in a.map)for(var d=a.map[c],e=0;e<d.length;e+=2)if(!z(d[e+1],b.get(d[e])))return!1;return!0}if(null!=b&&"object"===typeof b&&(c=y(b).length-(b.hasOwnProperty("$com$cognitect$transit$hashCode$")&&1||0),a.size===c)){for(d in b)if("$com$cognitect$transit$hashCode$"!==d&&!z(b[d],a.get(d)))return!1;return!0}return!1}function M(a){this.j=a;this.g=null;this.a=-1;this.size=a.length/2;this.ca=0}M.prototype.toString=function(){return"[TransitArrayMap]"};
function Ga(a){if(a.g)throw Error("Invalid operation, already converted");if(8>a.size)return!1;a.ca++;return 32<a.ca?(a.g=O(a.j,!1,!0),a.j=[],!0):!1}M.prototype.clear=function(){this.g?this.g.clear():this.j=[];this.size=0};M.prototype.clear=M.prototype.clear;M.prototype.keys=function(){return this.g?this.g.keys():new J(this.j,0)};M.prototype.keys=M.prototype.keys;M.prototype.I=function(){if(this.g)return this.g.I();for(var a=[],b=0,c=0;c<this.j.length;b++,c+=2)a[b]=this.j[c];return a};
M.prototype.keySet=M.prototype.I;M.prototype.B=function(){return this.g?this.g.B():new J(this.j,2)};M.prototype.entries=M.prototype.B;M.prototype.K=function(){return this.g?this.g.K():new J(this.j,1)};M.prototype.values=M.prototype.K;M.prototype.forEach=function(a){if(this.g)this.g.forEach(a);else for(var b=0;b<this.j.length;b+=2)a(this.j[b+1],this.j[b])};M.prototype.forEach=M.prototype.forEach;
M.prototype.get=function(a){if(this.g)return this.g.get(a);if(Ga(this))return this.get(a);for(var b=0;b<this.j.length;b+=2)if(z(this.j[b],a))return this.j[b+1];return null};M.prototype.get=M.prototype.get;M.prototype.H=function(a){if(this.g)return this.g.H(a);if(Ga(this))return this.H(a);for(var b=0;b<this.j.length;b+=2)if(z(this.j[b],a))return!0;return!1};M.prototype.has=M.prototype.H;
M.prototype.set=function(a,b){if(this.g)this.g.set(a,b),this.size=this.g.size;else{for(var c=0;c<this.j.length;c+=2)if(z(this.j[c],a)){this.j[c+1]=b;return}this.j.push(a);this.j.push(b);this.size++;32<this.size&&(this.g=O(this.j,!1,!0),this.j=null)}};M.prototype.set=M.prototype.set;M.prototype["delete"]=function(a){if(this.g)this.g["delete"](a),this.size=this.g.size;else for(var b=0;b<this.j.length;b+=2)if(z(this.j[b],a)){this.j.splice(b,2);this.size--;break}};
M.prototype.v=function(){if(this.g)return this.g.v();-1===this.a&&(this.a=qa(this));return this.a};M.prototype.s=function(a){return this.g?Fa(this.g,a):Fa(this,a)};function L(a,b,c){this.map=b||{};this.L=a||[];this.size=c||0;this.a=-1}L.prototype.toString=function(){return"[TransitMap]"};L.prototype.clear=function(){this.map={};this.L=[];this.size=0;this.a=-1};L.prototype.clear=L.prototype.clear;function Da(a){return null!=a.L?a.L:y(a.map)}
L.prototype["delete"]=function(a){this.L=null;for(var b=B(a),c=this.map[b],d=0;d<c.length;d+=2)if(z(a,c[d])){c.splice(d,2);0===c.length&&delete this.map[b];this.size--;break}};L.prototype.B=function(){return new K(this,2)};L.prototype.entries=L.prototype.B;L.prototype.forEach=function(a){for(var b=Da(this),c=0;c<b.length;c++)for(var d=this.map[b[c]],e=0;e<d.length;e+=2)a(d[e+1],d[e],this)};L.prototype.forEach=L.prototype.forEach;
L.prototype.get=function(a){var b=B(a),b=this.map[b];if(null!=b)for(var c=0;c<b.length;c+=2){if(z(a,b[c]))return b[c+1]}else return null};L.prototype.get=L.prototype.get;L.prototype.H=function(a){var b=B(a),b=this.map[b];if(null!=b)for(var c=0;c<b.length;c+=2)if(z(a,b[c]))return!0;return!1};L.prototype.has=L.prototype.H;L.prototype.keys=function(){return new K(this,0)};L.prototype.keys=L.prototype.keys;
L.prototype.I=function(){for(var a=Da(this),b=[],c=0;c<a.length;c++)for(var d=this.map[a[c]],e=0;e<d.length;e+=2)b.push(d[e]);return b};L.prototype.keySet=L.prototype.I;L.prototype.set=function(a,b){var c=B(a),d=this.map[c];if(null==d)this.L&&this.L.push(c),this.map[c]=[a,b],this.size++;else{for(var c=!0,e=0;e<d.length;e+=2)if(z(b,d[e])){c=!1;d[e]=b;break}c&&(d.push(a),d.push(b),this.size++)}};L.prototype.set=L.prototype.set;L.prototype.K=function(){return new K(this,1)};L.prototype.values=L.prototype.K;
L.prototype.v=function(){-1===this.a&&(this.a=qa(this));return this.a};L.prototype.s=function(a){return Fa(this,a)};
function O(a,b,c){a=a||[];b=!1===b?b:!0;if((!0!==c||!c)&&64>=a.length){if(b){var d=a;a=[];for(b=0;b<d.length;b+=2){var e=!1;for(c=0;c<a.length;c+=2)if(z(a[c],d[b])){a[c+1]=d[b+1];e=!0;break}e||(a.push(d[b]),a.push(d[b+1]))}}return new M(a)}var d={},e=[],f=0;for(b=0;b<a.length;b+=2){c=B(a[b]);var g=d[c];if(null==g)e.push(c),d[c]=[a[b],a[b+1]],f++;else{var r=!0;for(c=0;c<g.length;c+=2)if(z(g[c],a[b])){g[c+1]=a[b+1];r=!1;break}r&&(g.push(a[b]),g.push(a[b+1]),f++)}}return new L(e,d,f)}
function P(a){this.map=a;this.size=a.size}P.prototype.toString=function(){return"[TransitSet]"};P.prototype.add=function(){throw Error("Unsupported operation: add");};P.prototype.add=P.prototype.add;P.prototype.clear=function(){this.map=new L;this.size=0};P.prototype.clear=P.prototype.clear;P.prototype["delete"]=function(a){this.map["delete"](a);this.size=this.map.size};P.prototype.B=function(){return this.map.B()};P.prototype.entries=P.prototype.B;
P.prototype.forEach=function(a){var b=this;this.map.forEach(function(c,d){a(d,b)})};P.prototype.forEach=P.prototype.forEach;P.prototype.H=function(a){return this.map.H(a)};P.prototype.has=P.prototype.H;P.prototype.keys=function(){return this.map.keys()};P.prototype.keys=P.prototype.keys;P.prototype.I=function(){return this.map.I()};P.prototype.keySet=P.prototype.I;P.prototype.K=function(){return this.map.K()};P.prototype.values=P.prototype.K;
P.prototype.s=function(a){if(a instanceof P){if(this.size===a.size)return z(this.map,a.map)}else return!1};P.prototype.v=function(){return B(this.map)};function Ha(a){for(var b={},c=[],d=0,e=0;e<a.length;e++){var f=B(a[e]),g=b[f];if(null==g)c.push(f),b[f]=[a[e],a[e]],d++;else{for(var f=!0,r=0;r<g.length;r+=2)if(z(g[r],a[e])){f=!1;break}f&&(g.push(a[e]),g.push(a[e]),d++)}}return new P(new L(c,b,d))}function Q(a){this.D=a;this.a=-1}Q.prototype.q=function(a){return z(this,a)};Q.prototype.equiv=Q.prototype.q;
Q.prototype.s=function(a){return a instanceof Q?z(this.D,a.D):!1};Q.prototype.v=function(){-1===this.a&&(this.a=B(this.D));return this.a};Q.prototype.toString=function(){return"[Quoted]"};function Ia(a){return new Q(a)}function R(a,b){this.tag=a;this.e=b;this.a=-1}R.prototype.toString=function(){return"[TaggedValue: "+tag+", "+rep+"]"};R.prototype.q=function(a){return z(this,a)};R.prototype.equiv=R.prototype.q;R.prototype.s=function(a){return a instanceof R?this.tag===a.tag&&z(this.e,a.e):!1};
R.prototype.v=function(){-1===this.a&&(this.a=na(B(this.tag),B(this.e)));return this.a};function S(a,b){return new R(a,b)}function T(a){this.V=a}T.prototype.q=function(a){return z(this,a)};T.prototype.equiv=T.prototype.q;T.prototype.s=function(a){return a instanceof T?z(this.V,a.V):!1};T.prototype.v=function(){-1==this.a&&(this.a=B(this.D));return this.a};function Ja(a){return new T(a)}function U(a){this.e=a;this.a=-1}U.prototype.q=function(a){return z(this,a)};U.prototype.equiv=U.prototype.q;
U.prototype.s=function(a){return a instanceof U?z(this.e,a.e):!1};U.prototype.v=function(){-1===this.a&&(this.a=B(this.e));return this.a};function Ka(a,b){if(3<a.length){if(b)return!0;var c=a.charAt(1);return"~"===a.charAt(0)?":"===c||"$"===c||"#"===c:!1}return!1}function La(a){var b=Math.floor(a/94);a=String.fromCharCode(a%94+33);return 0===b?"^"+a:"^"+String.fromCharCode(b+33)+a}function Ma(){this.ea=this.P=this.o=0;this.A={}}
Ma.prototype.write=function(a,b){if(Ka(a,b)){4096===this.ea?(this.clear(),this.P=0,this.A={}):8836===this.o&&this.clear();var c=this.A[a];return null==c?(this.A[a]=[La(this.o),this.P],this.o++,a):c[1]!=this.P?(c[1]=this.P,c[0]=La(this.o),this.o++,a):c[0]}return a};Ma.prototype.clear=function(){this.o=0;this.P++};function Na(){this.o=0;this.A=[]}Na.prototype.write=function(a){8836==this.o&&(this.o=0);this.A[this.o]=a;this.o++;return a};
Na.prototype.ba=function(a){return this.A[2===a.length?a.charCodeAt(1)-33:94*(a.charCodeAt(1)-33)+(a.charCodeAt(2)-33)]};Na.prototype.clear=function(){this.o=0};function V(a){this.options=a||{};this.w={};for(var b in this.R.w)this.w[b]=this.R.w[b];for(b in this.options.handlers){a:{switch(b){case "_":case "s":case "?":case "i":case "d":case "b":case "'":case "array":case "map":a=!0;break a}a=!1}if(a)throw Error("Cannot override handler for ground types");this.w[b]=this.options.handlers[b]}this.S=null!=this.options.preferStrings?this.options.preferStrings:this.R.S;this.W=this.options.defaultHandler||this.R.W;this.C=this.options.mapBuilder;this.M=this.options.arrayBuilder}
V.prototype.R={w:{_:function(){return null},"?":function(a){return"t"===a},b:function(a){return Ba(a)},i:function(a){return ua(a)},n:function(a){return new C(a)},d:function(a){return parseFloat(a)},f:function(a){return va(a)},c:function(a){return a},":":function(a){return wa(a)},$:function(a){return xa(a)},r:function(a){return Ca(a)},"'":function(a){return a},m:function(a){return Aa(a)},t:function(a){return new Date(a)},u:function(a){return za(a)},set:function(a){return Ha(a)},list:function(a){return Ja(a)},
ints:function(a){return a},longs:function(a){return a},floats:function(a){return a},doubles:function(a){return a},bools:function(a){return a},cmap:function(a){return O(a,!1)}},W:function(a,b){return S(a,b)},S:!0};
V.prototype.l=function(a,b,c,d){if(null==a)return null;switch(typeof a){case "string":return Ka(a,c)?(a=Oa(this,a),b&&b.write(a,c),b=a):b="^"===a.charAt(0)?b.ba(a,c):Oa(this,a),b;case "object":if(ma(a))if("^ "===a[0])if(this.C)if(17>a.length&&this.C.O){d=[];for(c=1;c<a.length;c+=2)d.push(this.l(a[c],b,!0,!1)),d.push(this.l(a[c+1],b,!1,!1));b=this.C.O(d)}else{d=this.C.Z();for(c=1;c<a.length;c+=2)d=this.C.add(d,this.l(a[c],b,!0,!1),this.l(a[c+1],b,!1,!1));b=this.C.X(d)}else{d=[];for(c=1;c<a.length;c+=
2)d.push(this.l(a[c],b,!0,!1)),d.push(this.l(a[c+1],b,!1,!1));b=O(d,!1)}else b=Pa(this,a,b,d);else{c=y(a);var e=c[0];d=1==c.length?this.l(e,b,!1,!1):null;if(null!=d&&"string"===typeof d&&"~"===d.charAt(0)&&"#"===d.charAt(1))a=a[e],c=this.w[d.substring(2)],b=null!=c?c(this.l(a,b,!1,!0)):S(d.substring(2),this.l(a,b,!1,!1));else if(this.C)if(16>c.length&&this.C.O){var f=[];for(d=0;d<c.length;d++)e=c[d],f.push(this.l(e,b,!0,!1)),f.push(this.l(a[e],b,!1,!1));b=this.C.O(f)}else{f=this.C.Z();for(d=0;d<c.length;d++)e=
c[d],f=this.C.add(f,this.l(e,b,!0,!1),this.l(a[e],b,!1,!1));b=this.C.X(f)}else{f=[];for(d=0;d<c.length;d++)e=c[d],f.push(this.l(e,b,!0,!1)),f.push(this.l(a[e],b,!1,!1));b=O(f,!1)}}return b}return a};V.prototype.decode=V.prototype.l;
function Pa(a,b,c,d){if(d){var e=[];for(d=0;d<b.length;d++)e.push(a.l(b[d],c,!1,!1));return e}if(2===b.length&&"string"===typeof b[0]&&(d=a.l(b[0],c,!1,!1),null!=d&&"string"===typeof d&&"~"===d.charAt(0)&&"#"===d.charAt(1)))return b=b[1],e=a.w[d.substring(2)],null!=e?e=e(a.l(b,c,!1,!0)):S(d.substring(2),a.l(b,c,!1,!1));if(a.M){if(32>=b.length&&a.M.O){e=[];for(d=0;d<b.length;d++)e.push(a.l(b[d],c,!1,!1));return a.M.O(e)}e=a.M.Z();for(d=0;d<b.length;d++)e=a.M.add(e,a.l(b[d],c,!1,!1));return a.M.X(e)}e=
[];for(d=0;d<b.length;d++)e.push(a.l(b[d],c,!1,!1));return e}function Oa(a,b){if("~"===b.charAt(0)){var c=b.charAt(1);if("~"===c||"^"===c||"`"===c)return b.substring(1);if("#"===c)return b;var d=a.w[c];return null==d?a.W(c,b.substring(2)):d(b.substring(2))}return b};function Qa(a){this.fa=new V(a)}function Ra(a,b){this.ha=a;this.options=b||{};this.A=this.options.cache?this.options.cache:new Na}Ra.prototype.ba=function(a){var b=this.A;a=this.ha.fa.l(JSON.parse(a),b);this.A.clear();return a};Ra.prototype.read=Ra.prototype.ba;var Sa=0;function Ta(a){if(null==a)return"null";if(a===String)return"string";if(a===Boolean)return"boolean";if(a===Number)return"number";if(a===Array)return"array";if(a===Object)return"map";var b=a.com$cognitect$transit$ctor$guid;null==b&&(a.com$cognitect$transit$ctor$guid=b=++Sa);return b}function W(a){return null==a?null:a.constructor}function X(a,b){for(var c=a.toString(),d=c.length;d<b;d++)c="0"+c;return c}function Ua(){}Ua.prototype.tag=function(){return"_"};Ua.prototype.e=function(){return null};
Ua.prototype.p=function(){return"null"};function Va(){}Va.prototype.tag=function(){return"s"};Va.prototype.e=function(a){return a};Va.prototype.p=function(a){return a};function Wa(){}Wa.prototype.tag=function(){return"i"};Wa.prototype.e=function(a){return a};Wa.prototype.p=function(a){return a.toString()};function Xa(){}Xa.prototype.tag=function(){return"i"};Xa.prototype.e=function(a){return a.toString()};Xa.prototype.p=function(a){return a.toString()};function Ya(){}Ya.prototype.tag=function(){return"n"};
Ya.prototype.e=function(a){return a.value};Ya.prototype.p=function(a){return a.value};function Za(){}Za.prototype.tag=function(){return"f"};Za.prototype.e=function(a){return a.value};Za.prototype.p=function(a){return a.value};function $a(){}$a.prototype.tag=function(){return"?"};$a.prototype.e=function(a){return a};$a.prototype.p=function(a){return a.toString()};function ab(){}ab.prototype.tag=function(){return"array"};ab.prototype.e=function(a){return a};ab.prototype.p=function(){return null};
function bb(){}bb.prototype.tag=function(){return"map"};bb.prototype.e=function(a){return a};bb.prototype.p=function(){return null};function cb(){}cb.prototype.tag=function(){return"t"};cb.prototype.e=function(a){return a.getUTCFullYear()+"-"+X(a.getUTCMonth()+1,2)+"-"+X(a.getUTCDate(),2)+"T"+X(a.getUTCHours(),2)+":"+X(a.getUTCMinutes(),2)+":"+X(a.getUTCSeconds(),2)+"."+X(a.getUTCMilliseconds(),3)+"Z"};cb.prototype.p=function(a,b){return b.e(a)};function db(){}db.prototype.tag=function(){return"m"};
db.prototype.e=function(a){return a.valueOf()};db.prototype.p=function(a){return a.valueOf().toString()};function eb(){}eb.prototype.tag=function(){return"b"};eb.prototype.e=function(a){return a.Q};eb.prototype.p=function(a){return a.Q};function fb(){}fb.prototype.tag=function(){return"u"};fb.prototype.e=function(a){return a.toString()};fb.prototype.p=function(a){return a.toString()};function gb(){}gb.prototype.tag=function(){return"r"};gb.prototype.e=function(a){return a.uri};gb.prototype.p=function(a){return a.uri};
function hb(){}hb.prototype.tag=function(){return":"};hb.prototype.e=function(a){return a.name};hb.prototype.p=function(a,b){return b.e(a)};function ib(){}ib.prototype.tag=function(){return"$"};ib.prototype.e=function(a){return a.name};ib.prototype.p=function(a,b){return b.e(a)};function jb(){}jb.prototype.tag=function(){return"'"};jb.prototype.e=function(a){return a.D};jb.prototype.p=function(){return null};function kb(){}kb.prototype.tag=function(a){return a.tag};kb.prototype.e=function(a){return a.e};
kb.prototype.p=function(){return null};function lb(){}lb.prototype.tag=function(){return"set"};lb.prototype.e=function(a){var b=[];a.forEach(function(a){b.push(a)});return S("array",b)};lb.prototype.p=function(){return null};function mb(){}mb.prototype.tag=function(){return"map"};mb.prototype.e=function(a){return a};mb.prototype.p=function(){return null};function nb(){}nb.prototype.tag=function(){return"map"};nb.prototype.e=function(a){return a};nb.prototype.p=function(){return null};
function ob(){}ob.prototype.tag=function(){return"list"};ob.prototype.e=function(a){return S("array",a.V)};ob.prototype.p=function(){return null};
function pb(){this.w={};this.set(null,new Ua);this.set(String,new Va);this.set(Number,new Wa);this.set(k,new Xa);this.set(C,new Ya);this.set(D,new Za);this.set(Boolean,new $a);this.set(Array,new ab);this.set(Object,new bb);this.set(Date,new db);this.set(H,new eb);this.set(G,new fb);this.set(I,new gb);this.set(E,new hb);this.set(F,new ib);this.set(Q,new jb);this.set(R,new kb);this.set(P,new lb);this.set(M,new mb);this.set(L,new nb);this.set(T,new ob)}pb.prototype.get=function(a){return this.w[Ta(a)]};
pb.prototype.set=function(a,b){this.w[Ta(a)]=b};function qb(){this.buffer=""}qb.prototype.write=function(a){this.buffer+=a};function rb(a){this.F=a||{};this.buffer=this.F.buffer||new qb;this.S=null!=this.F.preferStrings?this.F.preferStrings:!0;this.da=this.F.objectBuilder||null;this.w=new pb;if(this.F.handlers){var b=this;this.F.handlers.forEach(function(a,d){b.w.set(d,a)})}this.T=this.F.unpack||function(a){return a instanceof M&&null===a.g?a.j:!1};this.U=this.F&&this.F.verbose||!1}function Y(a,b,c,d,e){a=a+b+c;return e?e.write(a,d):a}
function sb(a,b,c){var d=[];if(ma(b))for(var e=0;e<b.length;e++)d.push(Z(a,b[e],!1,c));else b.forEach(function(b){d.push(Z(a,b,!1,c))});return d}function tb(a,b){if("string"!==typeof b){var c=a.w.get(W(b));return c&&1===c.tag(b).length}return!0}function ub(a,b){var c=a.T(b),d=!0;if(c)for(var e=0;e<c.length&&(d=tb(a,c[e]),d);e+=2);else for(c=b.I(),e=0;e<c.length&&(d=tb(a,c[e]),d);e++);return d}
function vb(a,b,c){if(b.constructor===Object||null!=b.forEach){if(a.U){if(null!=b.forEach){if(ub(a,b)){var d={};b.forEach(function(b,e){d[Z(a,e,!0,!1)]=Z(a,b,!1,c)});return d}var e=a.T(b),f=[];if(e)for(var g=0;g<e.length;g+=2)f.push(Z(a,e[g],!0,!1)),f.push(Z(a,e[g+1],!1,c));else b.forEach(function(b,d){f.push(Z(a,d,!0,!1));f.push(Z(a,b,!1,c))});return{"~#cmap":f}}d={};e=y(b);for(g=0;g<e.length;g++)d[Z(a,e[g],!0,!1)]=Z(a,b[e[g]],!1,c);return d}if(null!=b.forEach){if(ub(a,b)){e=a.T(b);d=["^ "];if(e)for(g=
0;g<e.length;g+=2)d.push(Z(a,e[g],!0,c)),d.push(Z(a,e[g+1],!1,c));else b.forEach(function(b,e){d.push(Z(a,e,!0,c));d.push(Z(a,b,!1,c))});return d}e=a.T(b);f=[];if(e)for(g=0;g<e.length;g+=2)f.push(Z(a,e[g],!0,c)),f.push(Z(a,e[g+1],!1,c));else b.forEach(function(b,d){f.push(Z(a,d,!0,c));f.push(Z(a,b,!1,c))});return["~#cmap",f]}d=["^ "];e=y(b);for(g=0;g<e.length;g++)d.push(Z(a,e[g],!0,c)),d.push(Z(a,b[e[g]],!1,c));return d}if(null!=a.da)return a.da(b,function(b){return Z(a,b,!0,c)},function(b){return Z(a,
b,!1,c)});g=Error("Not supported");g.data={D:b,type:W(b).name};throw g;}
function Z(a,b,c,d){var e=a.w.get(W(b)),f=e?e.tag(b):null,g=e?e.e(b):null;if(null!=e&&null!=f)switch(f){case "_":return c?Y("~","_","",c,d):null;case "s":return 0<g.length?(a=g.charAt(0),a="`"===a&&"~"===g.charAt(1)?g.substring(1):"~"===a||"^"===a||"`"===a?"~"+g:g):a=g,Y("","",a,c,d);case "?":return c?Y("~","?",g.toString()[0],c,d):g;case "i":return c||"string"===typeof g||g instanceof k?Y("~","i",g.toString(),c,d):g;case "d":return c?Y(g.ia,"d",g,c,d):g;case "b":return Y("~","b",g,c,d);case "'":return b=
{},c=Y("~#","'","",!0,d),b[c]=Z(a,g,!1,d),b;case "array":return sb(a,g,d);case "map":return vb(a,g,d);default:a:{if(1===f.length){if("string"===typeof g){d=Y("~",f,g,c,d);break a}if(c||a.S){(a=a.U&&new cb)?(f=a.tag(b),g=a.p(b,a)):g=e.p(b,e);if(null!==g){d=Y("~",f,g,c,d);break a}d=Error("Cannot be encoded as string");d.data={tag:f,e:g,D:b};throw d;}}b=f;c=g;a.U?(g={},g[Y("~#",b,"",!0,d)]=Z(a,c,!1,d),d=g):d=[Y("~#",b,"",!0,d),Z(a,c,!1,d)]}return d}else throw d=Error("Not supported"),d.data={D:b,type:W(b).name},
d;}function wb(a,b){var c=a.w.get(W(b));if(null!=c)return 1===c.tag(b).length?Ia(b):b;c=Error("Not supported");c.data={D:b,type:W(b).name};throw c;}function $(a,b){this.N=a;this.options=b||{};this.A=!1===this.options.cache?null:this.options.cache?this.options.cache:new Ma}$.prototype.ga=function(){return this.N};$.prototype.marshaller=$.prototype.ga;
$.prototype.write=function(a,b){var c=null,c=b||{};asMapKey=c.asMapKey||!1;cache=this.N.U?!1:this.A;if(!1===c.marshalTop)c=Z(this.N,a,asMapKey,cache);else var c=this.N,d=asMapKey,e=cache,c=JSON.stringify(Z(c,wb(c,a),d,e));null!=this.A&&this.A.clear();return c};$.prototype.write=$.prototype.write;$.prototype.register=function(a,b){this.N.w.set(a,b)};$.prototype.register=$.prototype.register;h("transit.reader",function(a,b){if("json"===a||"json-verbose"===a||null==a){var c=new Qa(b);return new Ra(c,b)}throw Error("Cannot create reader of type "+a);});h("transit.writer",function(a,b){if("json"===a||"json-verbose"===a||null==a){"json-verbose"===a&&(null==b&&(b={}),b.verbose=!0);var c=new rb(b);return new $(c,b)}c=Error('Type must be "json"');c.data={type:a};throw c;});h("transit.makeBuilder",function(a){function b(){}b.prototype.Z=a.init;b.prototype.add=a.add;b.prototype.X=a.finalize;return new b});
h("transit.makeWriteHandler",function(a){function b(){}b.prototype.tag=a.tag;b.prototype.e=a.rep;b.prototype.p=a.stringRep;return new b});h("transit.date",Aa);h("transit.integer",ua);h("transit.isInteger",function(a){return a instanceof k});h("transit.uuid",function(a){return za(a)});h("transit.isUUID",function(a){return a instanceof G});h("transit.bigdec",va);h("transit.isBigDecimal",function(a){return a instanceof D});h("transit.keyword",wa);
h("transit.isKeyword",function(a){return a instanceof E});h("transit.symbol",xa);h("transit.isSymbol",function(a){return a instanceof F});h("transit.binary",Ba);h("transit.isBinary",function(a){return a instanceof H});h("transit.uri",Ca);h("transit.isURI",function(a){return a instanceof I});h("transit.map",O);h("transit.isMap",function(a){return a instanceof M||a instanceof L});h("transit.set",Ha);h("transit.isSet",function(a){return a instanceof P});h("transit.list",Ja);
h("transit.isList",function(a){return a instanceof T});h("transit.quoted",Ia);h("transit.isQuoted",function(a){return a instanceof ra.ja});h("transit.tagged",S);h("transit.isTaggedValue",ra.ka);h("transit.link",function(a){return new U(a)});h("transit.isLink",function(a){return a instanceof U});h("transit.hash",B);h("transit.equals",z);h("transit.extendToEQ",function(a,b){a.v=b.hashCode;a.s=b.equals;return a});
h("transit.mapToObject",function(a){var b={};a.forEach(function(a,d){if("string"!==typeof d)throw Error("Cannot convert map with non-string keys");b[d]=a});return b});h("transit.decoder",function(a){return new V(a)});h("transit.UUIDfromString",za);h("transit.randomUUID",ra.la);h("transit.stringableKeys",ub);})();
