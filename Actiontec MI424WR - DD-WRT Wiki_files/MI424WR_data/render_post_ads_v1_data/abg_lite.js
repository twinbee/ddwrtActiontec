(function(){var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={a:!0},ea={};try{ea.__proto__=da;ca=ea.a;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;function ha(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ba=b.prototype}var l=this;function n(a){return"string"==typeof a}var ia=/^[\w+/_-]+[=]{0,2}$/,p=null;function ja(){}function q(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function r(a){return"function"==q(a)}function ka(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function la(a,b,c){return a.call.apply(a.bind,arguments)}function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=la:t=ma;return t.apply(null,arguments)}var na=Date.now||function(){return+new Date};function u(a,b){function c(){}c.prototype=b.prototype;a.ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ca=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}};function w(a){if(Error.captureStackTrace)Error.captureStackTrace(this,w);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}u(w,Error);w.prototype.name="CustomError";var oa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(n(a))return n(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},pa=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=n(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};var x;a:{var qa=l.navigator;if(qa){var ra=qa.userAgent;if(ra){x=ra;break a}}x=""};function sa(a){sa[" "](a);return a}sa[" "]=ja;var ta=-1!=x.indexOf("Trident")||-1!=x.indexOf("MSIE");function ua(){}var va="function"==typeof Uint8Array;function ya(a,b,c){a.h=null;b||(b=[]);a.u=void 0;a.l=-1;a.g=b;a:{if(b=a.g.length){--b;var d=a.g[b];if(null!==d&&"object"==typeof d&&"array"!=q(d)&&!(va&&d instanceof Uint8Array)){a.m=b-a.l;a.j=d;break a}}a.m=Number.MAX_VALUE}a.o={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.m)d+=a.l,a.g[d]=a.g[d]||y;else{var e=a.m+a.l;a.g[e]||(a.j=a.g[e]={});a.j[d]=a.j[d]||y}}var y=[];function z(a,b){if(b<a.m){b+=a.l;var c=a.g[b];return c===y?a.g[b]=[]:c}if(a.j)return c=a.j[b],c===y?a.j[b]=[]:c}function B(a,b,c){a=z(a,b);return null==a?c:a}function C(a,b){a=z(a,b);a=null==a?a:!!a;return null==a?!1:a}function za(a){var b=Aa;a.h||(a.h={});if(!a.h[1]){var c=z(a,1);c&&(a.h[1]=new b(c))}return a.h[1]}function Ba(a){if(a.h)for(var b in a.h){var c=a.h[b];if("array"==q(c))for(var d=0;d<c.length;d++)c[d]&&Ba(c[d]);else c&&Ba(c)}}ua.prototype.toString=function(){Ba(this);return this.g.toString()};function Ca(a){ya(this,a,Da)}u(Ca,ua);function Aa(a){ya(this,a,Ea)}u(Aa,ua);var Da=[21],Ea=[28];function Fa(){this.g="";this.h=Ga}var Ga={};function D(a){var b=document;return n(a)?b.getElementById(a):a}function Ha(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):Ia(b,a)[0]||null);return a||null}function Ia(a,b){var c,d;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var e=a.getElementsByClassName(b);return e}e=a.getElementsByTagName("*");if(b){var f={};for(c=d=0;a=e[c];c++){var g=a.className,h;if(h="function"==typeof g.split)h=0<=oa(g.split(/\s+/),b);h&&(f[d++]=a)}f.length=d;return f}return e}function Ja(a){a&&a.parentNode&&a.parentNode.removeChild(a)};function E(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{sa(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function Ka(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}function F(a){a.preventDefault?a.preventDefault():a.returnValue=!1};var La=/^true$/.test("false"),Ma=/^true$/.test("true");var G=document,H=window;function I(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)}function Na(a,b){a.removeEventListener&&a.removeEventListener("message",b,!1)};function Oa(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)};function Pa(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var Qa=!!window.google_async_iframe_id,J=Qa&&window.parent||window;function Ra(a){try{var b=H;a=a||H;for(var c=0;20>c;c++){if(b==a)return!0;if(b==a.top)break;b=b.parent}}catch(d){}return!1}function K(a,b){a&&Pa(b,function(c,d){a.style[d]=c})};function Sa(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var Ta=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function Ua(a,b){this.g=a;this.h=b}function Va(a,b){this.url=a;this.O=!!b;this.depth=null};function Wa(){this.j="&";this.l=!1;this.h={};this.m=0;this.g=[]}function Xa(a,b){var c={};c[a]=b;return[c]}function Ya(a,b,c,d,e){var f=[];Ka(a,function(g,h){(g=Za(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)}function Za(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(Za(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Ya(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function L(a,b,c,d){a.g.push(b);a.h[b]=Xa(c,d)}function $a(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=ab(a)-c.length;if(0>d)return"";a.g.sort(function(v,O){return v-O});c=null;for(var e="",f=0;f<a.g.length;f++)for(var g=a.g[f],h=a.h[g],k=0;k<h.length;k++){if(!d){c=null==c?g:c;break}var m=Ya(h[k],a.j,",$");if(m){m=e+m;if(d>=m.length){d-=m.length;b+=m;e=a.j;break}else a.l&&(e=d,m[e-1]==a.j&&--e,b+=m.substr(0,e),e=a.j,d=0);c=null==c?g:c}}a="";null!=c&&(a=e+"trn="+c);return b+a}function ab(a){var b=1,c;for(c in a.h)b=c.length>b?c.length:b;return 3997-b-a.j.length-1};function bb(a,b,c,d){if(Math.random()<(d||.01))try{if(c instanceof Wa)var e=c;else e=new Wa,Ka(c,function(g,h){var k=e,m=k.m++;g=Xa(h,g);k.g.push(m);k.h[m]=g});var f=$a(e,a.g,"/pagead/gen_204?id="+b+"&");f&&Oa(l,f)}catch(g){}};var cb=null;function db(){var a=l.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):na()}function eb(){var a=void 0===a?l:a;return(a=a.performance)&&a.now?a.now():null};function fb(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var M=l.performance,gb=!!(M&&M.mark&&M.measure&&M.clearMarks),N=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=gb){var b;if(null===cb){cb="";try{a="";try{a=l.top.location.hash}catch(c){a=l.location.hash}a&&(cb=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=cb;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function hb(){var a=ib;this.h=[];this.j=a||l;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=N()||(null!=b?b:1>Math.random())}function jb(a){a&&M&&N()&&(M.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),M.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}hb.prototype.start=function(a,b){if(!this.g)return null;var c=eb()||db();a=new fb(a,b,c);b="goog_"+a.label+"_"+a.uniqueId+"_start";M&&N()&&M.mark(b);return a};function kb(){var a=lb;this.j=mb;this.l=this.h;this.g=void 0===a?null:a}function nb(a,b,c){try{if(a.g&&a.g.g){var d=a.g.start(b.toString(),3);var e=c();var f=a.g;c=d;if(f.g&&"number"==typeof c.value){var g=eb()||db();c.duration=g-c.value;var h="goog_"+c.label+"_"+c.uniqueId+"_end";M&&N()&&M.mark(h);!f.g||2048<f.h.length||f.h.push(c)}}else e=c()}catch(k){f=!0;try{jb(d),f=a.l(b,new Sa(k,{message:ob(k)}),void 0,void 0)}catch(m){a.h(217,m)}if(!f)throw k;}return e}function pb(a,b){var c=qb;return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];return nb(c,a,function(){return b.apply(void 0,e)})}}kb.prototype.h=function(a,b,c,d,e){e=e||"jserror";try{var f=new Wa;f.l=!0;L(f,1,"context",a);b.error&&b.meta&&b.id||(b=new Sa(b,{message:ob(b)}));b.msg&&L(f,2,"msg",b.msg.substring(0,512));var g=b.meta||{};if(d)try{d(g)}catch(wa){}b=[g];f.g.push(3);f.h[3]=b;d=l;b=[];g=null;do{var h=d;if(E(h)){var k=h.location.href;g=h.document&&h.document.referrer||null}else k=g,g=null;b.push(new Va(k||""));try{d=h.parent}catch(wa){d=null}}while(d&&h!=d);k=0;for(var m=b.length-1;k<=m;++k)b[k].depth=m-k;h=l;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==b.length-1)for(m=1;m<b.length;++m){var v=b[m];v.url||(v.url=h.location.ancestorOrigins[m-1]||"",v.O=!0)}var O=new Va(l.location.href,!1);h=null;var xa=b.length-1;for(v=xa;0<=v;--v){var A=b[v];!h&&Ta.test(A.url)&&(h=A);if(A.url&&!A.O){O=A;break}}A=null;var hc=b.length&&b[xa].url;0!=O.depth&&hc&&(A=b[xa]);var Q=new Ua(O,A);Q.h&&L(f,4,"top",Q.h.url||"");L(f,5,"url",Q.g.url||"");bb(this.j,e,f,c)}catch(wa){try{bb(this.j,e,{context:"ecmserr",rctx:a,msg:ob(wa),url:Q&&Q.g.url},c)}catch(Qc){}}return!0};function ob(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};var mb,qb;if(Qa&&!E(J)){var rb="."+G.domain;try{for(;2<rb.split(".").length&&!E(J);)G.domain=rb=rb.substr(rb.indexOf(".")+1),J=window.parent}catch(a){}E(J)||(J=window)}var ib=J,lb=new hb;function sb(){if(!ib.google_measure_js_timing){var a=lb;a.g=!1;a.h!=a.j.google_js_reporting_queue&&(N()&&pa(a.h,jb),a.h.length=0)}}mb=new function(){var a=void 0===a?H:a;this.g="http:"===a.location.protocol?"http:":"https:"};qb=new kb;"complete"==ib.document.readyState?sb():lb.g&&I(ib,"load",function(){sb()});function P(a,b){return pb(a,b)};function tb(a,b,c,d){this.xOffset=a;this.yOffset=b;this.height=d;this.width=c;this.g=null}function ub(){this.referenceFrameArray=[]}function vb(a){return{referenceFrameArray:a.referenceFrameArray.map(function(b){return{xOffset:b.xOffset,yOffset:b.yOffset,height:b.height,width:b.width}})}}function wb(a){var b=void 0===b?new ub:b;for(var c=0,d=0,e=0;20>e;++e){var f=a.document.body;var g=f.parentElement;var h=a===l.top?f.scrollHeight||g.scrollHeight:a.innerHeight;g=a===l.top?f.scrollWidth||g.scrollWidth:a.innerWidth;f=b;c=new tb(c,d,g,h);c.g=f;f.referenceFrameArray.push(c);if(!(c=!a.frameElement)){c=!1;try{a.parent.document.body&&(c=!1)}catch(k){c=!0}}if(c)break;else d=a.frameElement.getBoundingClientRect(),c=d.left+a.parent.pageXOffset,d=d.top+a.parent.pageYOffset,a=a.parent}return b};function xb(a){this.j=a;this.h=(this.g=!!this.j&&null!=z(this.j,1))?za(this.j):null}xb.prototype.is_mutable_impression=function(){return this.g?C(this.h,33):!1};function yb(a){return a.g?B(a.h,5,""):""}function zb(a){return a.g?null!=z(a.h,5):!1}function Ab(a){return a.g?B(a.h,19,""):""}function Bb(a){return a.g?B(a.h,6,""):""}function Cb(a){return a.g?null!=z(a.h,6):!1};function Db(a,b){a.classList?b=a.classList.contains(b):(a.classList?a=a.classList:(a=a.className,a=n(a)&&a.match(/\S+/g)||[]),b=0<=oa(a,b));return b}function R(a,b){a.classList?a.classList.add(b):Db(a,b)||(a.className+=0<a.className.length?" "+b:b)};function Eb(a){this.g=(this.serializedAttributionData=a)?new Ca(a):null;C(this.g,2);this.isMutableImpression=null!=z(this.g,1)&&!!C(za(this.g),33);this.T=B(this.g,30,"")||"";this.$=!!C(this.g,11);this.u=(this.hasUserFeedbackData=this.hasJspbUserFeedbackData=!!this.g&&null!=z(this.g,1))?new xb(this.g):null;this.S=!!C(this.g,4);this.W=!!C(this.g,6);this.H=!!C(this.g,13);B(this.g,8,0);this.creativeIndexSuffix=1<B(this.g,8,0)?B(this.g,7,0).toString():"";this.aa=!!C(this.g,17);this.Z=!!C(this.g,18);this.R=!!C(this.g,14);this.I=!!C(this.g,15);C(this.g,5);this.X=1==C(this.g,9);this.openAttributionInline=1==C(this.g,10);this.isMobileDevice=!!C(this.g,12);this.M=null;this.V=(a=G.querySelector("[data-slide]"))?"true"===a.getAttribute("data-slide"):!1;(this.K=""!==this.creativeIndexSuffix)&&void 0===H.goog_multislot_cache&&(H.goog_multislot_cache={});if(this.K&&!this.V){if(a=H.goog_multislot_cache.hd,void 0===a){a=!1;var b=G.querySelector("[data-dim]");if(b)if(b=b.getBoundingClientRect(),150<=b.right-b.left&&150<=b.bottom-b.top)a=!1;else{var c=document.body.getBoundingClientRect();150>(1>=Math.abs(c.left-b.left)&&1>=Math.abs(c.right-b.right)?b.bottom-b.top:b.right-b.left)&&(a=!0)}else a=!1;window.goog_multislot_cache.hd=a}}else a=!1;this.J=a;this.A=D("abgcp"+this.creativeIndexSuffix);this.D=D("abgc"+this.creativeIndexSuffix);this.h=D("abgs"+this.creativeIndexSuffix);this.C=D("abgl"+this.creativeIndexSuffix);this.v=D("abgb"+this.creativeIndexSuffix);this.G=D("abgac"+this.creativeIndexSuffix);D("mute_panel"+this.creativeIndexSuffix);this.F=Ha("goog_delegate_attribution"+this.creativeIndexSuffix);this.isDelegateAttributionActive=!!this.F&&!!this.R&&!Ha("goog_delegate_disabled")&&!this.I;if(this.h)a:{a=this.h;b="A";c=a.childNodes;for(var d=0;d<c.length;d++){var e=c.item(d);if("undefined"!=typeof e.tagName&&e.tagName.toUpperCase()==b){a=e;break a}}}else a=null;this.l=a;this.Y="left"==this.T;this.m=this.isDelegateAttributionActive?this.F:D("cbb"+this.creativeIndexSuffix);this.U=this.J?"0"===this.creativeIndexSuffix:!0;this.enableDelegateDismissableMenu=!!this.m&&Db(this.m,"goog_dismissable_menu");this.o=null;this.L=0;this.j=this.isDelegateAttributionActive?this.F:this.W&&this.A?this.A:this.D;this.B=null;this.w=H;this.P=!!C(this.g,19);this.adbadgeEnabled=!!C(this.g,24);this.enableNativeSurveyLoadIndicator=!!C(this.g,25);C(this.g,26);this.enableAltNativeJakeUi=(this.enableNativeJakeUi=!!C(this.g,27))&&!!C(this.g,28);this.isPoliticalAd=!!C(this.g,29)};function Fb(a,b){this.j=a;this.l=b;this.h=0;this.g=null}Fb.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.j();return a};function Gb(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)};function Hb(a){l.setTimeout(function(){throw a;},0)}var Ib;function Jb(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==x.indexOf("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";e.src="";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write("");e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=t(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&-1==x.indexOf("Trident")&&-1==x.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.N;c.N=null;e()}};return function(e){d.next={N:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};document.documentElement.appendChild(f)}:function(e){l.setTimeout(e,0)}};function Kb(){this.h=this.g=null}var Mb=new Fb(function(){return new Lb},function(a){a.reset()});Kb.prototype.add=function(a,b){var c=Mb.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};function Nb(){var a=Ob,b=null;a.g&&(b=a.g,a.g=a.g.next,a.g||(a.h=null),b.next=null);return b}function Lb(){this.next=this.h=this.g=null}Lb.prototype.set=function(a,b){this.g=a;this.h=b;this.next=null};Lb.prototype.reset=function(){this.next=this.h=this.g=null};function Pb(a,b){Qb||Rb();Sb||(Qb(),Sb=!0);Ob.add(a,b)}var Qb;function Rb(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);Qb=function(){a.then(Tb)}}else Qb=function(){var b=Tb,c;!(c=!r(l.setImmediate))&&(c=l.Window&&l.Window.prototype)&&(c=-1==x.indexOf("Edge")&&l.Window.prototype.setImmediate==l.setImmediate);c?(Ib||(Ib=Jb()),Ib(b)):l.setImmediate(b)}}var Sb=!1,Ob=new Kb;function Tb(){for(var a;a=Nb();){try{a.g.call(a.h)}catch(b){Hb(b)}Gb(Mb,a)}Sb=!1};function S(a){this.g=0;this.u=void 0;this.l=this.h=this.j=null;this.m=this.o=!1;if(a!=ja)try{var b=this;a.call(void 0,function(c){T(b,2,c)},function(c){T(b,3,c)})}catch(c){T(this,3,c)}}function Ub(){this.next=this.context=this.h=this.j=this.g=null;this.l=!1}Ub.prototype.reset=function(){this.context=this.h=this.j=this.g=null;this.l=!1};var Vb=new Fb(function(){return new Ub},function(a){a.reset()});function Wb(a,b,c){var d=Vb.get();d.j=a;d.h=b;d.context=c;return d}function Xb(){var a,b=new S(function(c){a=c});return new Yb(b,a)}S.prototype.then=function(a,b,c){return Zb(this,r(a)?a:null,r(b)?b:null,c)};S.prototype.$goog_Thenable=!0;S.prototype.cancel=function(a){0==this.g&&Pb(function(){var b=new U(a);$b(this,b)},this)};function $b(a,b){if(0==a.g)if(a.j){var c=a.j;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?$b(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ac(c),bc(c,e,3,b)))}a.j=null}else T(a,3,b)}function cc(a,b){a.h||2!=a.g&&3!=a.g||dc(a);a.l?a.l.next=b:a.h=b;a.l=b}function Zb(a,b,c,d){var e=Wb(null,null,null);e.g=new S(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof U?g(h):f(k)}catch(m){g(m)}}:g});e.g.j=a;cc(a,e);return e.g}S.prototype.w=function(a){this.g=0;T(this,2,a)};S.prototype.A=function(a){this.g=0;T(this,3,a)};function T(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.w,f=a.A;if(d instanceof S){cc(d,Wb(e||ja,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(ka(d))try{var k=d.then;if(r(k)){ec(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.u=c,a.g=b,a.j=null,dc(a),3!=b||c instanceof U||fc(a,c))}}function ec(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}function g(k){h||(h=!0,c.call(e,k))}var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}function dc(a){a.o||(a.o=!0,Pb(a.v,a))}function ac(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}S.prototype.v=function(){for(var a;a=ac(this);)bc(this,a,this.g,this.u);this.o=!1};function bc(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.g)b.g.j=null,gc(b,c,d);else try{b.l?b.j.call(b.context):gc(b,c,d)}catch(e){ic.call(null,e)}Gb(Vb,b)}function gc(a,b,c){2==b?a.j.call(a.context,c):a.h&&a.h.call(a.context,c)}function fc(a,b){a.m=!0;Pb(function(){a.m&&ic.call(null,b)})}var ic=Hb;function U(a){w.call(this,a)}u(U,w);U.prototype.name="cancel";function Yb(a,b){this.h=a;this.g=b};function V(){this.h=this.h;this.w=this.w}V.prototype.h=!1;V.prototype.g=function(){if(this.w)for(;this.w.length;)this.w.shift()()};function jc(a){var b=[];kc(new lc,a,b);return b.join("")}function lc(){}function kc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==q(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),kc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),mc(d,c),c.push(":"),kc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":mc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var nc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},oc=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function mc(a,b){b.push('"',a.replace(oc,function(c){var d=nc[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),nc[c]=d);return d}),'"')};function W(a,b,c,d,e,f){V.call(this);this.o=a;this.status=1;this.j=b;this.m=c;this.I=d;this.G=!!e;this.v=Math.random();this.B={};this.u=null;this.A=t(this.H,this);this.F=f}ha(W,V);W.prototype.H=function(a){if(a.origin===this.m&&(this.G||a.source==this.j)){var b=null;try{b=JSON.parse(a.data)}catch(c){}if(ka(b)&&(a=b.i,b.c===this.o&&a!=this.v)){if(2!==this.status)try{this.status=2,pc(this),this.u&&(this.u(),this.u=null)}catch(c){}a=b.s;b=b.p;if(n(a)&&(n(b)||ka(b))&&this.B.hasOwnProperty(a))this.B[a](b)}}};function pc(a){var b={};b.c=a.o;b.i=a.v;a.F&&(b.e=a.F);a.j.postMessage(jc(b),a.m)}W.prototype.D=function(){if(1===this.status){try{this.j.postMessage&&pc(this)}catch(a){}window.setTimeout(t(this.D,this),50)}};W.prototype.connect=function(a){a&&(this.u=a);I(window,"message",this.A);this.I&&this.D()};function qc(a,b,c){a.B[b]=c}W.prototype.l=function(a,b){var c={};c.c=this.o;c.i=this.v;c.s=a;c.p=b;try{this.j.postMessage(jc(c),this.m)}catch(d){}};W.prototype.g=function(){this.status=3;Na(window,this.A);V.prototype.g.call(this)};function rc(a,b,c,d,e){W.call(this,a,b,c,d);this.C=e}ha(rc,W);rc.prototype.l=function(a,b){sc(this,a,b)};function tc(a,b){var c=new S(function(d,e){l.setTimeout(function(){return e(Error("apmc:nocon"))},4E3);ta?l.setTimeout(function(){return a.connect(d)},0):a.connect(d)});c.then(function(){return a.A(b)},function(){});return c}function sc(a,b,c){c=void 0===c?{}:c;var d={},e=(d.c=a.o,d.i=a.v,d.s=b,d.p=c,d);a.C&&(e.msg_type=a.C);ta?l.setTimeout(function(){a.j.postMessage(JSON.stringify(e),a.m)},0):a.j.postMessage(JSON.stringify(e),a.m)}function uc(a,b){return new S(function(c,d){l.setTimeout(function(){return d(Error("apmc:timeout"))},4E3);try{var e=JSON.parse(a.data),f=e.c;if("apmc:bc:cr"===e.s&&f===b&&null!=a.source&&"string"==typeof a.origin){var g=new rc(f,a.source,a.origin,!0);tc(g,a).then(function(){return c(g)},function(){g.h||(g.h=!0,g.g())})}else throw Error("Invalid connection event");}catch(h){d(Error("apmc:error"))}})};function vc(a,b){V.call(this);var c=this;this.v=a;this.o=null;this.m=Xb();this.l=!1;this.u=b;this.j=P(276,function(d){return wc(c,d)})}ha(vc,V);function xc(a){var b={};b=(b.msg_type=a.v,b);I(H,"message",a.j);a=H.top;b.googMsgType="sth";a.postMessage(jc(b),"*")}function wc(a,b){Ra(b.source)&&!a.l&&(a.l=!0,uc(b,a.u).then(function(c){Na(H,a.j);a.o=c;a.m.g&&a.m.g(c)},function(){a.l=!1}))}vc.prototype.g=function(){Na(H,this.j);if(this.o){var a=this.o;a.h||(a.h=!0,a.g())}V.prototype.g.call(this)};function yc(a,b,c){if(!a)throw Error("bad conv util ctor args");this.h=a;this.g=c};function zc(a,b){var c=this;this.g=a;this.h=b;this.g.aa||(this.o=!1,this.l=this.m=this.j=null,!this.g.J||this.g.adbadgeEnabled||this.g.U?Ac(this):(a={display:"none"},b={width:"15px",height:"15px"},this.g.isMobileDevice?(K(this.g.v,a),K(this.g.h,a),K(this.g.A,b),K(this.g.D,b)):K(this.g.D,a)),Bc(this),this.g.enableNativeJakeUi&&this.g.enableNativeSurveyLoadIndicator&&R(this.g.G,"abgnac"),this.g.isDelegateAttributionActive?(R(document.body,"goog_delegate_active"),R(document.body,"jaa")):(!this.g.isMutableImpression&&this.g.m&&Ja(this.g.m),this.m=setTimeout(function(){R(document.body,"jar")},this.g.H?750:100)),this.g.I&&R(document.body,"goog_delegate_disabled"),this.g.P&&H.addEventListener("load",function(){return c.h()}),Cc(this))}function Bc(a){if(a.g.$)I(a.g.j,"click",P(365,function(c){var d=H.goog_interstitial_display;d&&(d(c),c&&(c.stopPropagation(),c.preventDefault()))}));else if(a.g.isMutableImpression&&a.g.isMobileDevice)I(a.g.j,"click",function(){return a.h()});else if(a.g.isMutableImpression&&!a.g.isMobileDevice&&a.g.m&&I(a.g.m,"click",function(){return a.h()}),a.g.S)Dc(a);else{I(a.g.j,"mouseover",P(367,function(){return Dc(a)}));I(a.g.j,"mouseout",P(369,function(){return Ec(a,500)}));I(a.g.j,"touchstart",P(368,function(){return Dc(a)}));var b=P(370,function(){return Ec(a,4E3)});I(a.g.j,"mouseup",b);I(a.g.j,"touchend",b);I(a.g.j,"touchcancel",b);a.g.l&&I(a.g.l,"click",P(371,function(c){return a.preventDefault(c)}))}}function Ac(a){a.g.l&&a.g.Z&&(a.g.u&&zb(a.g.u)&&Cb(a.g.u)&&(a.j=new yc(yb(a.g.u),Bb(a.g.u),Ab(a.g.u))),I(a.g.l,"click",P(452,function(){if(!a.o&&(a.o=!0,a.j)){var b=a.j,c=b.h+"&label=closebutton_whythisad_click";c+="&label_instance=1";b.g&&(c+="&cid="+b.g);Oa(window,c)}})))}function Cc(a){a.g.H&&(a.l=new vc("xcat","xca-ch"),a.l.m.h.then(function(b){qc(b,"xca-rdy",function(){a.g.B=wb(a.g.w);var c={abgp:a.g.w.abgp,name:a.g.w.name,abg_href:a.g.C.getAttribute("href"),abg_target:a.g.C.getAttribute("target"),is_mutable_impression:a.g.isMutableImpression,is_mobile:!!a.g.A,is_rtl:a.g.Y,has_aria_hidden:"true"===a.g.C.getAttribute("aria-hidden"),serializable_reference_frame_set:vb(a.g.B)};b.l("render-xca",c)});qc(b,"req-pos-xca",function(){a.g.B=wb(a.g.w);var c={serializable_reference_frame_set:vb(a.g.B)};b.l("pos-xca",c)});qc(b,"xca-dis",function(){clearTimeout(a.m);a.m=null;R(document.body,"jaa")});qc(b,"xca-clk",function(){a.g.M.expandAttributionCard();b.l("hide-xca",{})});b.l("chk-xca",{})}),xc(a.l))}function Fc(a){var b=a.g.G;b.style.display="block";a.g.enableNativeJakeUi&&a.g.enableNativeSurveyLoadIndicator&&window.requestAnimationFrame(function(){R(b,"abgacfo")})}function Dc(a){window.clearTimeout(a.g.o);a.g.o=null;a.g.h&&"block"==a.g.h.style.display||(a.g.L=na(),a.g.v&&a.g.h&&(a.g.v.style.display="none",a.g.h.style.display="block",window.goog_extracreative_attribution&&window.postMessage("xca_exp","*")))}function Ec(a,b){window.clearTimeout(a.g.o);a.g.o=window.setTimeout(function(){return Gc(a)},b)}function Gc(a){window.clearTimeout(a.g.o);a.g.o=null;a.g.v&&a.g.h&&(a.g.v.style.display="block",a.g.h.style.display="none");window.goog_extracreative_attribution&&window.postMessage("xca_col","*")}zc.prototype.preventDefault=function(a){if(this.g.h&&"block"==this.g.h.style.display&&500>na()-this.g.L)F(a);else if(this.g.openAttributionInline){var b=this.g.l.getAttribute("href");window.adSlot?window.adSlot.openAttribution(b)&&F(a):window.openAttribution&&(window.openAttribution(b),F(a))}else this.g.X&&(b=this.g.l.getAttribute("href"),window.adSlot?window.adSlot.openSystemBrowser(b)&&F(a):window.openSystemBrowser&&(window.openSystemBrowser(b),F(a)))};function Hc(a){var b=Ic,c=this;if(!b)throw Error("bad ctor");this.j=b;this.h=a;this.g=!1;Ha("goog_delegate_deferred")?void 0!==H.goog_delegate_deferred_token?Jc(this):(a=function(){Jc(c)},H.goog_delegate_deferred_token=a,setTimeout(a,5E3)):Jc(this)}function Jc(a){if(!a.g&&(a.g=!0,H.goog_delegate_deferred_token=void 0,a.h)){var b=a.j;a=a.h;if(!a)throw Error("bad attrdata");a=new Eb(a);new b(a)}};function Kc(){a:{if(La)try{var a=H.google_cafe_host||H.top.google_cafe_host;if(a){var b=a;break a}}catch(c){}b="pagead2.googlesyndication.com"}a=Ma?"https":"http";l.location&&"https:"==l.location.protocol&&"http"==a&&(a="https");return[a,"://",b,"/pagead/js/r20190410/r20110914/abg_survey.js"].join("")};function Lc(){var a=Xb();this.promise=a.h;this.resolve=a.g}function Mc(a,b){a.google_llp||(a.google_llp={});a=a.google_llp;a[5]||(a[5]=new Lc,b&&b());return a[5]}function Nc(){var a=window,b=Kc();return Mc(a,function(){var c=a.document,d=c.createElement("script"),e=new Fa;e.g=b;e instanceof Fa&&e.constructor===Fa&&e.h===Ga?e=e.g:(q(e),e="type_error:TrustedResourceUrl");d.src=e;if(null===p)a:{e=l.document;if((e=e.querySelector&&e.querySelector("script[nonce]"))&&(e=e.nonce||e.getAttribute("nonce"))&&ia.test(e)){p=e;break a}p=""}(e=p)&&d.setAttribute("nonce",e);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(d,c)}).promise};function Ic(a){var b=this;this.g=a;this.h=new zc(this.g,P(359,function(){return Oc(b)}))}function Oc(a){nb(qb,373,function(){Gc(a.h);Fc(a.h)});window.goog_extracreative_attribution||Nc().then(function(b){b.createAttributionCard(a.g);a.g.M=b;b.expandAttributionCard()})};function Pc(a){var b=[a];b=void 0===b?[]:b;l.google_logging_queue||(l.google_logging_queue=[]);l.google_logging_queue.push([11,b]);new Hc(a)}var X=["buildAttribution"],Y=l;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Pc?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Pc;}).call(this);
