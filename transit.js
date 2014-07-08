;(function(){var aa=this;
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function h(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b};function k(a,b){this.j=a|0;this.g=b|0}var ca={};function l(a){if(-128<=a&&128>a){var b=ca[a];if(b)return b}b=new k(a|0,0>a?-1:0);-128<=a&&128>a&&(ca[a]=b);return b}function m(a){return isNaN(a)||!isFinite(a)?n:a<=-da?r:a+1>=da?ea:0>a?s(m(-a)):new k(a%t|0,a/t|0)}function u(a,b){return new k(a,b)}
function v(a,b){if(0==a.length)throw Error("number format error: empty string");var c=b||10;if(2>c||36<c)throw Error("radix out of range: "+c);if("-"==a.charAt(0))return s(v(a.substring(1),c));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character: '+a);for(var d=m(Math.pow(c,8)),e=n,f=0;f<a.length;f+=8){var g=Math.min(8,a.length-f),p=parseInt(a.substring(f,f+g),c);8>g?(g=m(Math.pow(c,g)),e=e.multiply(g).add(m(p))):(e=e.multiply(d),e=e.add(m(p)))}return e}
var t=4294967296,da=t*t/2,n=l(0),w=l(1),fa=l(-1),ea=u(-1,2147483647),r=u(0,-2147483648),ga=l(16777216);function x(a){return a.g*t+(0<=a.j?a.j:t+a.j)}
k.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(y(this))return"0";if(0>this.g){if(A(this,r)){var b=m(a),c=B(this,b),b=C(c.multiply(b),this);return c.toString(a)+b.j.toString(a)}return"-"+s(this).toString(a)}for(var c=m(Math.pow(a,6)),b=this,d="";;){var e=B(b,c),f=C(b,e.multiply(c)).j.toString(a),b=e;if(y(b))return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};function y(a){return 0==a.g&&0==a.j}function A(a,b){return a.g==b.g&&a.j==b.j}
k.prototype.compare=function(a){if(A(this,a))return 0;var b=0>this.g,c=0>a.g;return b&&!c?-1:!b&&c?1:0>C(this,a).g?-1:1};function s(a){return A(a,r)?r:u(~a.j,~a.g).add(w)}k.prototype.add=function(a){var b=this.g>>>16,c=this.g&65535,d=this.j>>>16,e=a.g>>>16,f=a.g&65535,g=a.j>>>16,p;p=0+((this.j&65535)+(a.j&65535));a=0+(p>>>16);a+=d+g;d=0+(a>>>16);d+=c+f;c=0+(d>>>16);c=c+(b+e)&65535;return u((a&65535)<<16|p&65535,c<<16|d&65535)};function C(a,b){return a.add(s(b))}
k.prototype.multiply=function(a){if(y(this)||y(a))return n;if(A(this,r))return 1==(a.j&1)?r:n;if(A(a,r))return 1==(this.j&1)?r:n;if(0>this.g)return 0>a.g?s(this).multiply(s(a)):s(s(this).multiply(a));if(0>a.g)return s(this.multiply(s(a)));if(0>this.compare(ga)&&0>a.compare(ga))return m(x(this)*x(a));var b=this.g>>>16,c=this.g&65535,d=this.j>>>16,e=this.j&65535,f=a.g>>>16,g=a.g&65535,p=a.j>>>16;a=a.j&65535;var D,q,z,za;za=0+e*a;z=0+(za>>>16);z+=d*a;q=0+(z>>>16);z=(z&65535)+e*p;q+=z>>>16;z&=65535;q+=
c*a;D=0+(q>>>16);q=(q&65535)+d*p;D+=q>>>16;q&=65535;q+=e*g;D+=q>>>16;q&=65535;D=D+(b*a+c*p+d*g+e*f)&65535;return u(z<<16|za&65535,D<<16|q)};
function B(a,b){if(y(b))throw Error("division by zero");if(y(a))return n;if(A(a,r)){if(A(b,w)||A(b,fa))return r;if(A(b,r))return w;var c;c=1;if(0==c)c=a;else{var d=a.g;c=32>c?u(a.j>>>c|d<<32-c,d>>c):u(d>>c-32,0<=d?0:-1)}c=B(c,b).shiftLeft(1);if(A(c,n))return 0>b.g?w:fa;d=C(a,b.multiply(c));return c.add(B(d,b))}if(A(b,r))return n;if(0>a.g)return 0>b.g?B(s(a),s(b)):s(B(s(a),b));if(0>b.g)return s(B(a,s(b)));for(var e=n,d=a;0<=d.compare(b);){c=Math.max(1,Math.floor(x(d)/x(b)));for(var f=Math.ceil(Math.log(c)/
Math.LN2),f=48>=f?1:Math.pow(2,f-48),g=m(c),p=g.multiply(b);0>p.g||0<p.compare(d);)c-=f,g=m(c),p=g.multiply(b);y(g)&&(g=w);e=e.add(g);d=C(d,p)}return e}k.prototype.shiftLeft=function(a){a&=63;if(0==a)return this;var b=this.j;return 32>a?u(b<<a,this.g<<a|b>>>32-a):u(0,b<<a-32)};function ha(a,b){b&=63;if(0==b)return a;var c=a.g;return 32>b?u(a.j>>>b|c<<32-b,c>>>b):32==b?u(c,0):u(c>>>b-32,0)};var E="undefined"!=typeof Object.keys?function(a){return Object.keys(a)}:function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},F="undefined"!=typeof Array.isArray?function(a){return Array.isArray(a)}:function(a){return"array"===ba(a)};function G(a,b){if(null==a)return null==b;if(a===b)return!0;if("object"===typeof a){if(F(a)){if(F(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!G(a[c],b[c]))return!1;return!0}return!1}if(a.v)return a.v(b);if(null!=b&&"object"===typeof b){if(b.v)return b.v(a);var d=c=0,e=E(b).length,f;for(f in a)if(a.hasOwnProperty(f))if(d++,"$com$cognitect$transit$hashCode$"==f)b[f]||(c=-1);else if(!b.hasOwnProperty(f)||!G(a[f],b[f]))return!1;return d+c===e}}return!1}var ia={},ja=0;
function ka(a){var b=0;if(null!=a.forEach)a.forEach(function(a,c){b=(b+(H(c)^H(a)))%4503599627370496});else for(var c=E(a),d=0;d<c.length;d++){var e=c[d];if("$com$cognitect$transit$hashCode$"!==e)var f=a[e],b=(b+(H(e)^H(f)))%4503599627370496}return b}
function H(a){if(null==a)return 0;switch(typeof a){case "number":return a;case "boolean":return!0===a?1:0;case "string":var b=ia[a];if(null==b){for(var c=b=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;ja++;256<=ja&&(ia={},ja=1);ia[a]=b}a=b;return a;default:if(a instanceof Date)return a.valueOf();if(F(a)){for(c=b=0;c<a.length;c++)var d=H(a[c]),b=b^d+2654435769+(b<<6)+(b>>2);return b}if(a.B)return a.B();if(a.$com$cognitect$transit$hashCode$)return a.$com$cognitect$transit$hashCode$;b=ka(a);
return a.$com$cognitect$transit$hashCode$=b}};var la={},ma=v("9007199254740992"),na=v("-9007199254740992");function oa(a){if("number"===typeof a||a instanceof k)return a;a=v(a,10);return 0<a.compare(ma)||0>a.compare(na)?a:x(a)}k.prototype.v=function(a){return a instanceof k&&A(this,a)};k.prototype.B=function(){return this.j};function I(a){this.value=a}I.prototype.toString=function(){return"[BigInteger: "+this.value+"]"};I.prototype.v=function(a){return a instanceof I&&this.value===a.value};I.prototype.B=function(){return H(this.value)};
function J(a){this.value=a}J.prototype.toString=function(){return"[BigDecimal: "+this.value+"]"};function pa(a){return new J(a)}function K(a){this.name=a;this.p=-1}K.prototype.toString=function(){return":"+this.name};K.prototype.v=function(a){return a instanceof K&&this.name==a.name};K.prototype.B=function(){-1===this.p&&(this.p=H(this.name));return this.p};function qa(a){return new K(a)}function L(a){this.name=a;this.p=-1}L.prototype.toString=function(){return"[Symbol: "+this.name+"]"};
L.prototype.v=function(a){return a instanceof L&&this.name==a.name};L.prototype.B=function(){-1===this.p&&(this.p=H(this.name));return this.p};function ra(a){return new L(a)}function M(a,b,c){var d="";c=c||b+1;for(var e=8*(7-b),f=l(255).shiftLeft(e);b<c;b++,e-=8,f=ha(f,8)){var g=ha(u(a.j&f.j,a.g&f.g),e).toString(16);1==g.length&&(g="0"+g);d+=g}return d}function N(a,b){this.U=a;this.W=b;this.p=-1}
N.prototype.toString=function(a){var b=this.U,c=this.W;a=""+(M(b,0,4)+"-");a+=M(b,4,6)+"-";a+=M(b,6,8)+"-";a+=M(c,0,2)+"-";return a+=M(c,2,8)};N.prototype.v=function(a){return a instanceof N&&A(this.U,a.U)&&A(this.W,a.W)};
function sa(a){a=a.replace(/-/g,"");for(var b=null,c=null,d=c=0,e=24,f=0,f=c=0,e=24;8>f;f+=2,e-=8)c|=parseInt(a.substring(f,f+2),16)<<e;d=0;f=8;for(e=24;16>f;f+=2,e-=8)d|=parseInt(a.substring(f,f+2),16)<<e;b=u(d,c);c=0;f=16;for(e=24;24>f;f+=2,e-=8)c|=parseInt(a.substring(f,f+2),16)<<e;d=0;for(e=f=24;32>f;f+=2,e-=8)d|=parseInt(a.substring(f,f+2),16)<<e;c=u(d,c);return new N(b,c)}function ta(a){a="number"===typeof a?a:parseInt(a,10);return new Date(a)}
Date.prototype.v=function(a){return a instanceof Date?this.valueOf()===a.valueOf():!1};Date.prototype.B=function(){return this.valueOf()};function ua(a){this.ba=a}function va(a){return new ua(a)}function wa(a){this.uri=a}wa.prototype.toString=function(){return"[URI: "+this.uri+"]"};function xa(a){return new wa(a)}function O(a,b){this.w=a;this.type=b||0;this.k=0}
O.prototype.next=function(){if(this.k<this.w.length){var a=null,a=0===this.type?this.w[this.k]:1===this.type?this.w[this.k+1]:[this.w[this.k],this.w[this.k+1]],a={value:a,done:!1};this.k+=2;return a}return{value:null,done:!0}};O.prototype.next=O.prototype.next;function P(a,b){this.map=a;this.type=b||0;this.keys=ya(this.map);this.k=0;this.H=null;this.D=0}
P.prototype.next=function(){if(this.k<this.map.size){null!=this.H&&this.D<this.H.length||(this.H=this.map.map[this.keys[this.k]],this.D=0);var a=null,a=0===this.type?this.H[this.D]:1===this.type?this.H[this.D+1]:[this.H[this.D],this.H[this.D+1]],a={value:a,done:!1};this.k++;this.D+=2;return a}return{value:null,done:!0}};P.prototype.next=P.prototype.next;
function Aa(a,b){if((b instanceof Q||b instanceof R)&&a.size===b.size){for(var c in a.map)for(var d=a.map[c],e=0;e<d.length;e+=2)if(!G(d[e+1],b.get(d[e])))return!1;return!0}if(null!=b&&"object"===typeof b&&(c=E(b).length-(b.hasOwnProperty("$com$cognitect$transit$hashCode$")&&1||0),a.size===c)){for(d in b)if("$com$cognitect$transit$hashCode$"!==d&&!G(b[d],a.get(d)))return!1;return!0}return!1}function R(a){this.h=a;this.e=null;this.p=-1;this.size=a.length/2;this.Z=0}R.prototype.toString=function(){return"[TransitArrayMap]"};
function Ba(a){if(a.e)throw Error("Invalid operation, already converted");if(8>a.size)return!1;a.Z++;return 32<a.Z?(a.e=S(a.h,!1,!0),a.h=[],!0):!1}R.prototype.clear=function(){this.e?this.e.clear():this.h=[];this.size=0};R.prototype.clear=R.prototype.clear;R.prototype.keys=function(){return this.e?this.e.keys():new O(this.h,0)};R.prototype.keys=R.prototype.keys;R.prototype.G=function(){if(this.e)return this.e.G();for(var a=[],b=0,c=0;c<this.h.length;b++,c+=2)a[b]=this.h[c];return a};
R.prototype.keySet=R.prototype.G;R.prototype.w=function(){return this.e?this.e.w():new O(this.h,2)};R.prototype.entries=R.prototype.w;R.prototype.I=function(){return this.e?this.e.I():new O(this.h,1)};R.prototype.values=R.prototype.I;R.prototype.forEach=function(a){if(this.e)this.e.forEach(a);else for(var b=0;b<this.h.length;b+=2)a(this.h[b+1],this.h[b])};R.prototype.forEach=R.prototype.forEach;
R.prototype.get=function(a){if(this.e)return this.e.get(a);if(Ba(this))return this.get(a);for(var b=0;b<this.h.length;b+=2)if(G(this.h[b],a))return this.h[b+1];return null};R.prototype.get=R.prototype.get;R.prototype.F=function(a){if(this.e)return this.e.F(a);if(Ba(this))return this.F(a);for(var b=0;b<this.h.length;b+=2)if(G(this.h[b],a))return!0;return!1};R.prototype.has=R.prototype.F;
R.prototype.set=function(a,b){if(this.e)this.e.set(a,b),this.size=this.e.size;else{for(var c=0;c<this.h.length;c+=2)if(G(this.h[c],a)){this.h[c+1]=b;return}this.h.push(a);this.h.push(b);this.size++;32<this.size&&(this.e=S(this.h,!1,!0),this.h=null)}};R.prototype.set=R.prototype.set;R.prototype["delete"]=function(a){if(this.e)this.e["delete"](a),this.size=this.e.size;else for(var b=0;b<this.h.length;b+=2)if(G(this.h[b],a)){this.h.splice(b,2);this.size--;break}};
R.prototype.B=function(){return this.e?this.e.B():-1!=this.p?this.p:this.p=ka(this)};R.prototype.v=function(a){return this.e?Aa(this.e,a):Aa(this,a)};function Q(a,b,c){this.map=b||{};this.J=a||[];this.size=c||0;this.p=-1}Q.prototype.toString=function(){return"[TransitMap]"};Q.prototype.clear=function(){this.map={};this.J=[];this.size=0;this.p=-1};Q.prototype.clear=Q.prototype.clear;function ya(a){return null!=a.J?a.J:E(a.map)}
Q.prototype["delete"]=function(a){this.J=null;for(var b=H(a),c=this.map[b],d=0;d<c.length;d+=2)if(G(a,c[d])){c.splice(d,2);0===c.length&&delete this.map[b];this.size--;break}};Q.prototype.w=function(){return new P(this,2)};Q.prototype.entries=Q.prototype.w;Q.prototype.forEach=function(a){for(var b=ya(this),c=0;c<b.length;c++)for(var d=this.map[b[c]],e=0;e<d.length;e+=2)a(d[e+1],d[e],this)};Q.prototype.forEach=Q.prototype.forEach;
Q.prototype.get=function(a){var b=H(a),b=this.map[b];if(null!=b)for(var c=0;c<b.length;c+=2){if(G(a,b[c]))return b[c+1]}else return null};Q.prototype.get=Q.prototype.get;Q.prototype.F=function(a){var b=H(a),b=this.map[b];if(null!=b)for(var c=0;c<b.length;c+=2)if(G(a,b[c]))return!0;return!1};Q.prototype.has=Q.prototype.F;Q.prototype.keys=function(){return new P(this,0)};Q.prototype.keys=Q.prototype.keys;
Q.prototype.G=function(){for(var a=ya(this),b=[],c=0;c<a.length;c++)for(var d=this.map[a[c]],e=0;e<d.length;e+=2)b.push(d[e]);return b};Q.prototype.keySet=Q.prototype.G;Q.prototype.set=function(a,b){var c=H(a),d=this.map[c];if(null==d)this.J&&this.J.push(c),this.map[c]=[a,b],this.size++;else{for(var c=!0,e=0;e<d.length;e+=2)if(G(b,d[e])){c=!1;d[e]=b;break}c&&(d.push(a),d.push(b),this.size++)}};Q.prototype.set=Q.prototype.set;Q.prototype.I=function(){return new P(this,1)};Q.prototype.values=Q.prototype.I;
Q.prototype.B=function(){return-1!=this.p?this.p:this.p=ka(this)};Q.prototype.v=function(a){return Aa(this,a)};
function S(a,b,c){a=a||[];b=!1===b?b:!0;if((!0!==c||!c)&&64>=a.length){if(b){var d=a;a=[];for(b=0;b<d.length;b+=2){var e=!1;for(c=0;c<a.length;c+=2)if(G(a[c],d[b])){a[c+1]=d[b+1];e=!0;break}e||(a.push(d[b]),a.push(d[b+1]))}}return new R(a)}var d={},e=[],f=0;for(b=0;b<a.length;b+=2){c=H(a[b]);var g=d[c];if(null==g)e.push(c),d[c]=[a[b],a[b+1]],f++;else{var p=!0;for(c=0;c<g.length;c+=2)if(G(g[c],a[b])){g[c+1]=a[b+1];p=!1;break}p&&(g.push(a[b]),g.push(a[b+1]),f++)}}return new Q(e,d,f)}
function T(a){this.map=a;this.size=a.size}T.prototype.toString=function(){return"[TransitSet]"};T.prototype.add=function(){throw Error("Unsupported operation: add");};T.prototype.add=T.prototype.add;T.prototype.clear=function(){this.map=new Q;this.size=0};T.prototype.clear=T.prototype.clear;T.prototype["delete"]=function(a){this.map["delete"](a);this.size=this.map.size};T.prototype.w=function(){return this.map.w()};T.prototype.entries=T.prototype.w;
T.prototype.forEach=function(a){var b=this;this.map.forEach(function(c,d){a(d,b)})};T.prototype.forEach=T.prototype.forEach;T.prototype.F=function(a){return this.map.F(a)};T.prototype.has=T.prototype.F;T.prototype.keys=function(){return this.map.keys()};T.prototype.keys=T.prototype.keys;T.prototype.G=function(){return this.map.G()};T.prototype.keySet=T.prototype.G;T.prototype.I=function(){return this.map.I()};T.prototype.values=T.prototype.I;
T.prototype.v=function(a){if(a instanceof T){if(this.size===a.size)return G(this.map,a.map)}else return!1};T.prototype.B=function(){return H(this.map)};function Ca(a){for(var b={},c=[],d=0,e=0;e<a.length;e++){var f=H(a[e]),g=b[f];if(null==g)c.push(f),b[f]=[a[e],a[e]],d++;else{for(var f=!0,p=0;p<g.length;p+=2)if(G(g[p],a[e])){f=!1;break}f&&(g.push(a[e]),g.push(a[e]),d++)}}return new T(new Q(c,b,d))}function Da(a){this.K=a}Da.prototype.toString=function(){return"[Quoted]"};
function Ea(a){return new Da(a)}function Fa(a,b){this.tag=a;this.a=b}Fa.prototype.toString=function(){return"[TaggedValue: "+tag+", "+rep+"]"};function U(a,b){return new Fa(a,b)}function Ga(a){this.ca=a}function Ha(a){return new Ga(a)}function Ia(a){this.a=a};function Ja(a,b){if(3<a.length){if(b)return!0;var c=a[1];return"~"===a[0]?":"===c||"$"===c||"#"===c:!1}return!1}function Ka(a){var b=Math.floor(a/94);a=String.fromCharCode(a%94+33);return 0===b?"^"+a:"^"+String.fromCharCode(b+33)+a}function La(){this.da=this.M=this.k=0;this.s={}}
La.prototype.write=function(a,b){if(Ja(a,b)){4096===this.da?(this.clear(),this.M=0,this.s={}):8836===this.k&&this.clear();var c=this.s[a];return null==c?(this.s[a]=[Ka(this.k),this.M],this.k++,a):c[1]!=this.M?(c[1]=this.M,c[0]=Ka(this.k),this.k++,a):c[0]}return a};La.prototype.clear=function(){this.k=0;this.M++};function Ma(){this.k=0;this.s=[]}Ma.prototype.write=function(a){8836==this.k&&(this.k=0);this.s[this.k]=a;this.k++;return a};
Ma.prototype.X=function(a){return this.s[2===a.length?a.charCodeAt(1)-33:94*(a.charCodeAt(1)-33)+(a.charCodeAt(2)-33)]};Ma.prototype.clear=function(){this.k=0};function V(a){this.options=a||{};this.q={};for(var b in this.O.q)this.q[b]=this.O.q[b];for(b in this.options.handlers){a:{switch(b){case "_":case "s":case "?":case "i":case "d":case "b":case "'":case "array":case "map":a=!0;break a}a=!1}if(a)throw Error("Cannot override handler for ground types");this.q[b]=this.options.handlers[b]}this.P=null!=this.options.preferStrings?this.options.preferStrings:this.O.P;this.R=this.options.defaultHandler||this.O.R;this.A=this.options.mapBuilder;this.N=this.options.arrayBuilder}
V.prototype.O={q:{_:function(){return null},"?":function(a){return"t"===a},b:function(a){return va(a)},i:function(a){return oa(a)},n:function(a){return new I(a)},d:function(a){return parseFloat(a)},f:function(a){return pa(a)},c:function(a){return a},":":function(a){return qa(a)},$:function(a){return ra(a)},r:function(a){return xa(a)},"'":function(a){return a},m:function(a){return ta(a)},t:function(a){return new Date(a)},u:function(a){return sa(a)},set:function(a){return Ca(a)},list:function(a){return Ha(a)},
ints:function(a){return a},longs:function(a){return a},floats:function(a){return a},doubles:function(a){return a},bools:function(a){return a},cmap:function(a){return S(a,!1)}},R:function(a,b){return U(a,b)},P:!0};
V.prototype.o=function(a,b,c,d){if(null==a)return null;switch(typeof a){case "string":return Ja(a,c)?(a=Na(this,a),b&&b.write(a,c),b=a):b="^"===a[0]?b.X(a,c):Na(this,a),b;case "object":if(F(a))if("^ "===a[0])if(this.A)if(17>a.length&&this.A.T){d=[];for(c=1;c<a.length;c+=2)d.push(this.o(a[c],b,!0,!1)),d.push(this.o(a[c+1],b,!1,!1));b=this.A.T(d)}else{d=this.A.V();for(c=1;c<a.length;c+=2)d=this.A.add(d,this.o(a[c],b,!0,!1),this.o(a[c+1],b,!1,!1));b=this.A.S(d)}else{d=[];for(c=1;c<a.length;c+=2)d.push(this.o(a[c],
b,!0,!1)),d.push(this.o(a[c+1],b,!1,!1));b=S(d,!1)}else if(d){c=[];for(d=0;d<a.length;d++)c.push(this.o(a[d],b,!1,!1));b=c}else if(this.N){c=this.N.V();for(d=0;d<a.length;d++)c=this.N.add(c,this.o(a[d],b,!1,!1));b=this.N.S(c)}else{c=[];for(d=0;d<a.length;d++)c.push(this.o(a[d],b,!1,!1));b=c}else{c=E(a);var e=c[0];d=1==c.length?this.o(e,b,!1,!1):null;if(null!=d&&"~"===d[0]&&"#"===d[1])a=a[e],c=this.q[d.substring(2)],b=null!=c?c(this.o(a,b,!1,!0)):U(d.substring(2),this.o(a,b,!1,!1));else if(this.A)if(16>
c.length&&this.A.T){var f=[];for(d=0;d<c.length;d++)e=c[d],f.push(this.o(e,b,!0,!1)),f.push(this.o(a[e],b,!1,!1));b=this.A.T(f)}else{f=this.A.V();for(d=0;d<c.length;d++)e=c[d],f=this.A.add(f,this.o(e,b,!0,!1),this.o(a[e],b,!1,!1));b=this.A.S(f)}else{f=[];for(d=0;d<c.length;d++)e=c[d],f.push(this.o(e,b,!0,!1)),f.push(this.o(a[e],b,!1,!1));b=S(f,!1)}}return b}return a};V.prototype.decode=V.prototype.o;
function Na(a,b){if("~"===b[0]){var c=b[1];if("~"===c||"^"===c||"`"===c)return b.substring(1);if("#"===c)return b;var d=a.q[c];return null==d?a.R(c,b.substring(2)):d(b.substring(2))}return b};function Oa(a){this.ea=new V(a)}function Pa(a,b){this.ga=a;this.options=b||{};this.s=this.options.cache?this.options.cache:new Ma}Pa.prototype.X=function(a){var b=this.s;a=this.ga.ea.o(JSON.parse(a),b);this.s.clear();return a};Pa.prototype.read=Pa.prototype.X;var Qa=0;function Ra(a){if(null==a)return"null";if(a===String)return"string";if(a===Boolean)return"boolean";if(a===Number)return"number";if(a===Array)return"array";if(a===Object)return"map";var b=a.com$cognitect$transit$ctor$guid;null==b&&(a.com$cognitect$transit$ctor$guid=b=++Qa);return b}function W(a){return null==a?null:a.constructor}function X(a,b){for(var c=a.toString(),d=c.length;d<b;d++)c="0"+c;return c}function Sa(){}Sa.prototype.tag=function(){return"_"};Sa.prototype.a=function(){return null};
Sa.prototype.l=function(){return"null"};function Ta(){}Ta.prototype.tag=function(){return"s"};Ta.prototype.a=function(a){return a};Ta.prototype.l=function(a){return a};function Ua(){}Ua.prototype.tag=function(){return"i"};Ua.prototype.a=function(a){return a};Ua.prototype.l=function(a){return a.toString()};function Va(){}Va.prototype.tag=function(){return"i"};Va.prototype.a=function(a){return a.toString()};Va.prototype.l=function(a){return a.toString()};function Wa(){}Wa.prototype.tag=function(){return"n"};
Wa.prototype.a=function(a){return a.value};Wa.prototype.l=function(a){return a.value};function Xa(){}Xa.prototype.tag=function(){return"f"};Xa.prototype.a=function(a){return a.value};Xa.prototype.l=function(a){return a.value};function Ya(){}Ya.prototype.tag=function(){return"?"};Ya.prototype.a=function(a){return a};Ya.prototype.l=function(a){return a.toString()};function Za(){}Za.prototype.tag=function(){return"array"};Za.prototype.a=function(a){return a};Za.prototype.l=function(){return null};
function $a(){}$a.prototype.tag=function(){return"map"};$a.prototype.a=function(a){return a};$a.prototype.l=function(){return null};function ab(){}ab.prototype.tag=function(){return"t"};ab.prototype.a=function(a){return a.getUTCFullYear()+"-"+X(a.getUTCMonth()+1,2)+"-"+X(a.getUTCDate(),2)+"T"+X(a.getUTCHours(),2)+":"+X(a.getUTCMinutes(),2)+":"+X(a.getUTCSeconds(),2)+"."+X(a.getUTCMilliseconds(),3)+"Z"};ab.prototype.l=function(a,b){return b.a(a)};function bb(){}bb.prototype.tag=function(){return"m"};
bb.prototype.a=function(a){return a.valueOf()};bb.prototype.l=function(a){return a.valueOf().toString()};function cb(){}cb.prototype.tag=function(){return"b"};cb.prototype.a=function(a){return a.ba};cb.prototype.l=function(a){return a.ba};function db(){}db.prototype.tag=function(){return"u"};db.prototype.a=function(a){return a.toString()};db.prototype.l=function(a){return a.toString()};function eb(){}eb.prototype.tag=function(){return"r"};eb.prototype.a=function(a){return a.uri};eb.prototype.l=function(a){return a.uri};
function fb(){}fb.prototype.tag=function(){return":"};fb.prototype.a=function(a){return a.name};fb.prototype.l=function(a,b){return b.a(a)};function gb(){}gb.prototype.tag=function(){return"$"};gb.prototype.a=function(a){return a.name};gb.prototype.l=function(a,b){return b.a(a)};function hb(){}hb.prototype.tag=function(){return"'"};hb.prototype.a=function(a){return a.K};hb.prototype.l=function(){return null};function ib(){}ib.prototype.tag=function(a){return a.tag};ib.prototype.a=function(a){return a.a};
ib.prototype.l=function(){return null};function jb(){}jb.prototype.tag=function(){return"set"};jb.prototype.a=function(a){var b=[];a.forEach(function(a){b.push(a)});return U("array",b)};jb.prototype.l=function(){return null};function kb(){}kb.prototype.tag=function(){return"map"};kb.prototype.a=function(a){return a};kb.prototype.l=function(){return null};function lb(){}lb.prototype.tag=function(){return"map"};lb.prototype.a=function(a){return a};lb.prototype.l=function(){return null};
function mb(){}mb.prototype.tag=function(){return"list"};mb.prototype.a=function(a){return U("array",a.ca)};mb.prototype.l=function(){return null};
function nb(){this.q={};this.set(null,new Sa);this.set(String,new Ta);this.set(Number,new Ua);this.set(k,new Va);this.set(I,new Wa);this.set(J,new Xa);this.set(Boolean,new Ya);this.set(Array,new Za);this.set(Object,new $a);this.set(Date,new bb);this.set(ua,new cb);this.set(N,new db);this.set(wa,new eb);this.set(K,new fb);this.set(L,new gb);this.set(Da,new hb);this.set(Fa,new ib);this.set(T,new jb);this.set(R,new kb);this.set(Q,new lb);this.set(Ga,new mb)}nb.prototype.get=function(a){return this.q[Ra(a)]};
nb.prototype.set=function(a,b){this.q[Ra(a)]=b};function ob(){this.buffer=""}ob.prototype.write=function(a){this.buffer+=a};function pb(a){this.C=a||{};this.buffer=this.C.buffer||new ob;this.P=null!=this.C.preferStrings?this.C.preferStrings:!0;this.aa=this.C.objectBuilder||null;this.q=new nb;if(this.C.handlers){var b=this;this.C.handlers.forEach(function(a,d){b.q.set(d,a)})}this.Q=this.C.unpack||function(a){return a instanceof R&&null===a.e?a.h:!1};this.Y=this.C&&this.C.verbose||!1}function Y(a,b,c,d,e){a=a+b+c;return e?e.write(a,d):a}
function qb(a,b,c){var d=[];if(F(b))for(var e=0;e<b.length;e++)d.push(Z(a,b[e],!1,c));else b.forEach(function(b){d.push(Z(a,b,!1,c))});return d}function rb(a,b){if("string"!==typeof b){var c=a.q.get(W(b));return c&&1===c.tag(b).length}return!0}function sb(a,b){var c=a.Q(b),d=!0;if(c)for(var e=0;e<c.length&&(d=rb(a,c[e]),d);e+=2);else for(c=b.G(),e=0;e<c.length&&(d=rb(a,c[e]),d);e++);return d}
function tb(a,b,c){if(b.constructor===Object||null!=b.forEach){if(a.Y){if(null!=b.forEach){if(sb(a,b)){var d={};b.forEach(function(b,e){d[Z(a,e,!0,!1)]=Z(a,b,!1,c)});return d}var e=a.Q(b),f=[];if(e)for(var g=0;g<e.length;g+=2)f.push(Z(a,e[g],!0,!1)),f.push(Z(a,e[g+1],!1,c));else b.forEach(function(b,d){f.push(Z(a,d,!0,!1));f.push(Z(a,b,!1,c))});return{"~#cmap":f}}d={};e=E(b);for(g=0;g<e.length;g++)d[Z(a,e[g],!0,!1)]=Z(a,b[e[g]],!1,c);return d}if(null!=b.forEach){if(sb(a,b)){e=a.Q(b);d=["^ "];if(e)for(g=
0;g<e.length;g+=2)d.push(Z(a,e[g],!0,c)),d.push(Z(a,e[g+1],!1,c));else b.forEach(function(b,e){d.push(Z(a,e,!0,c));d.push(Z(a,b,!1,c))});return d}e=a.Q(b);f=[];if(e)for(g=0;g<e.length;g+=2)f.push(Z(a,e[g],!0,c)),f.push(Z(a,e[g+1],!1,c));else b.forEach(function(b,d){f.push(Z(a,d,!0,c));f.push(Z(a,b,!1,c))});return{"~#cmap":f}}d=["^ "];e=E(b);for(g=0;g<e.length;g++)d.push(Z(a,e[g],!0,c)),d.push(Z(a,b[e[g]],!1,c));return d}if(null!=a.aa)return a.aa(b,function(b){return Z(a,b,!0,c)},function(b){return Z(a,
b,!1,c)});g=Error("Not supported");g.data={K:b,type:W(b).name};throw g;}function ub(a,b,c,d){var e={};e[Y("~#",b,"",!0,d)]=Z(a,c,!1,d);return e}
function Z(a,b,c,d){var e=a.q.get(W(b)),f=e?e.tag(b):null,g=e?e.a(b):null;if(null!=e&&null!=f)switch(f){case "_":return c?Y("~","_","",c,d):null;case "s":return 0<g.length?(b=g[0],b="`"===b&&"~"===g[1]?g.substring(1):"~"===b||"^"===b||"`"===b?"~"+g:g):b=g,Y("","",b,c,d);case "?":return c?Y("~","?",g.toString()[0],c,d):g;case "i":return c||"string"===typeof g||g instanceof k?Y("~","i",g.toString(),c,d):g;case "d":return c?Y(g.ha,"d",g,c,d):g;case "b":return Y("~","b",g,c,d);case "'":return b={},c=
Y("~#","'","",!0,d),b[c]=Z(a,g,!1,d),b;case "array":return qb(a,g,d);case "map":return tb(a,g,d);default:a:if(1===f.length)if("string"===typeof g)d=Y("~",f,g,c,d);else{if(c||a.P){(a=a.Y&&new ab)?(f=a.tag(b),g=a.l(b,a)):g=e.l(b,e);if(null!==g){d=Y("~",f,g,c,d);break a}d=Error("Cannot be encoded as string");d.data={tag:f,a:g,K:b};throw d;}d=ub(a,f,g,d)}else{if(c)throw d=Error("Cannot be used as map key"),d.data={tag:f,a:g,K:b},d;d=ub(a,f,g,d)}return d}else throw d=Error("Not supported"),d.data={K:b,
type:W(b).name},d;}function vb(a,b){var c=a.q.get(W(b));if(null!=c)return 1===c.tag(b).length?Ea(b):b;c=Error("Not supported");c.data={K:b,type:W(b).name};throw c;}function $(a,b){this.L=a;this.options=b||{};this.s=!1===this.options.cache?null:this.options.cache?this.options.cache:new La}$.prototype.fa=function(){return this.L};$.prototype.marshaller=$.prototype.fa;
$.prototype.write=function(a,b){var c=null,c=b||{};asMapKey=c.asMapKey||!1;cache=this.L.Y?!1:this.s;if(!1===c.marshalTop)c=Z(this.L,a,asMapKey,cache);else var c=this.L,d=asMapKey,e=cache,c=JSON.stringify(Z(c,vb(c,a),d,e));null!=this.s&&this.s.clear();return c};$.prototype.write=$.prototype.write;$.prototype.register=function(a,b){this.L.q.set(a,b)};$.prototype.register=$.prototype.register;h("transit.reader",function(a,b){if("json"===a||"json-verbose"===a||null==a){var c=new Oa(b);return new Pa(c,b)}throw Error("Cannot create reader of type "+a);});h("transit.writer",function(a,b){if("json"===a||"json-verbose"===a||null==a){"json-verbose"===a&&(null==b&&(b={}),b.verbose=!0);var c=new pb(b);return new $(c,b)}c=Error('Type must be "json"');c.data={type:a};throw c;});h("transit.makeBuilder",function(a){function b(){}b.prototype.V=a.init;b.prototype.add=a.add;b.prototype.S=a.finalize;return new b});
h("transit.makeWriteHandler",function(a){function b(){}b.prototype.tag=a.tag;b.prototype.a=a.rep;b.prototype.l=a.stringRep;return new b});h("transit.date",ta);h("transit.integer",oa);h("transit.isInteger",function(a){return a instanceof k});h("transit.uuid",function(a){return sa(a)});h("transit.isUUID",function(a){return a instanceof N});h("transit.bigdec",pa);h("transit.isBigDecimal",function(a){return a instanceof J});h("transit.keyword",qa);
h("transit.isKeyword",function(a){return a instanceof K});h("transit.symbol",ra);h("transit.isSymbol",function(a){return a instanceof L});h("transit.binary",va);h("transit.isBinary",function(a){return a instanceof ua});h("transit.uri",xa);h("transit.isURI",function(a){return a instanceof wa});h("transit.map",S);h("transit.isMap",function(a){return a instanceof R||a instanceof Q});h("transit.set",Ca);h("transit.isSet",function(a){return a instanceof T});h("transit.list",Ha);
h("transit.isList",function(a){return a instanceof Ga});h("transit.quoted",Ea);h("transit.isQuoted",function(a){return a instanceof la.ia});h("transit.tagged",U);h("transit.isTaggedValue",la.ja);h("transit.link",function(a){return new Ia(a)});h("transit.isLink",function(a){return a instanceof Ia});h("transit.hash",H);h("transit.equals",G);h("transit.extendToEQ",function(a,b){a.B=b.hashCode;a.v=b.equals;return a});
h("transit.mapToObject",function(a){var b={};a.forEach(function(a,d){if("string"!==typeof d)throw Error("Cannot convert map with non-string keys");b[d]=a});return b});h("transit.decoder",function(a){return new V(a)});h("transit.UUIDfromString",sa);h("transit.randomUUID",function(){});h("transit.stringableKeys",sb);})();
