(function(){var h,p=this;function q(a,b){a=a.split(".");var c=p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}var aa=/^[\w+/_-]+[=]{0,2}$/,u=null;function v(){}function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b}var w=Date.now||function(){return+new Date};var ca=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"==typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};var x=document,da=window;function y(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};function z(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)}function B(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)};var C;a:{var D=p.navigator;if(D){var ea=D.userAgent;if(ea){C=ea;break a}}C=""};function E(a){E[" "](a);return a}E[" "]=v;function F(){this.a="";this.b=fa}var fa={};function G(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{E(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function ha(a,b){if(!ia()){var c=Math.random();if(c<b)return c=ja(),a[Math.floor(c*a.length)]}return null}function ja(){if(!p.crypto)return Math.random();try{var a=new Uint32Array(1);p.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}}function ka(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var ia=y(function(){return-1!=C.indexOf("Google Web Preview")||1E-4>Math.random()});function la(a,b){a:{for(var c=a.length,d="string"==typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0<=b?(c=a[b],Array.prototype.splice.call(a,b,1),c):null};function H(a,b){p.google_image_requests||(p.google_image_requests=[]);var c=p.document.createElement("img");if(b){var d=function(e){b&&b(e);B(c,"load",d);B(c,"error",d)};z(c,"load",d);z(c,"error",d)}c.src=a;p.google_image_requests.push(c)};var ma=/^true$/.test("false"),na=/^true$/.test("true")||!ma;function oa(){var a=I();"google_onload_fired"in a||(a.google_onload_fired=!1,z(a,"load",function(){a.google_onload_fired=!0}))}var pa=!!window.google_async_iframe_id,J=pa&&window.parent||window;function I(){if(pa&&!G(J)){var a="."+x.domain;try{for(;2<a.split(".").length&&!G(J);)x.domain=a=a.substr(a.indexOf(".")+1),J=window.parent}catch(b){}G(J)||(J=window)}return J};var qa=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function ra(a,b){this.a=a;this.b=b}function sa(a,b){this.url=a;this.h=!!b;this.depth=null};function K(){this.c="&";this.f=!1;this.b={};this.g=0;this.a=[]}function ta(a,b){var c={};c[a]=b;return[c]}function ua(a,b,c,d,e){var f=[];ka(a,function(g,k){(g=va(g,b,c,d,e))&&f.push(k+"="+g)});return f.join(b)}function va(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(va(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(ua(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function L(a,b,c,d){a.a.push(b);a.b[b]=ta(c,d)}function wa(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=xa(a)-c.length;if(0>d)return"";a.a.sort(function(n,r){return n-r});c=null;for(var e="",f=0;f<a.a.length;f++)for(var g=a.a[f],k=a.b[g],m=0;m<k.length;m++){if(!d){c=null==c?g:c;break}var l=ua(k[m],a.c,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;b+=l;e=a.c;break}else a.f&&(e=d,l[e-1]==a.c&&--e,b+=l.substr(0,e),e=a.c,d=0);c=null==c?g:c}}a="";null!=c&&(a=e+"trn="+c);return b+a}function xa(a){var b=1,c;for(c in a.b)b=c.length>b?c.length:b;return 3997-b-a.c.length-1};function ya(){var a=za,b=Aa;if(!(window&&Math.random&&navigator))return-1;if(window.__google_ad_urls){var c=window.__google_ad_urls;try{if(c&&c.getOseId())return c.getOseId()}catch(e){}}if(!window.__google_ad_urls_id){c=window.google_enable_ose;if(!0===c)var d=2;else!1!==c&&(d=ha([0],a),null==d&&((d=ha([2],b))||(d=3)));if(!d)return 0;window.__google_ad_urls_id=d}return window.__google_ad_urls_id};w();function Ba(a,b,c){a&&(c?z(a,"load",b):B(a,"load",b))}function Ca(){var a=(I()||p).google_osd_amcb;return"function"==ba(a)?a:null}function Da(a){return((void 0===a?0:a)?"http:":"https:")+"//www.googletagservices.com/activeview/js/current/osd.js?cb="+encodeURIComponent("/r20110914")};function M(){var a=p.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):w()}function Ea(){var a=void 0===a?p:a;return(a=a.performance)&&a.now?a.now():null};function N(a,b){this.b=b&&b.b?b.b:0;this.c=b?b.c:"";this.a=b&&b.a?b.a:[];this.f=!0;if(b)for(a=0;a<this.a.length;++a)this.a[a].f=!0}function Fa(a){a=a.f?I():p;var b=O;a=a||p;if(a.google_osd_loaded)a=!1;else{var c=a.document,d=c.createElement("script"),e=new F;e.a=b;d.src=e instanceof F&&e.constructor===F&&e.b===fa?e.a:"type_error:TrustedResourceUrl";if(null===u)b:{b=p.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&aa.test(b)){u=b;break b}u=""}(b=u)&&d.setAttribute("nonce",b);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(d,c);a=a.google_osd_loaded=!0}a&&oa()}h=N.prototype;h.getNewBlocks=function(a,b){for(var c=this.a.length,d=0;d<c;d++){var e=this.a[d];!e.c&&e.a&&(e.c=!0,a(e.a,e.i,e.o,e.b,void 0,e.f,e.j,e.m,e.l))}b&&((I()||p).google_osd_amcb=a)};h.setupOse=function(a){if(this.getOseId())return this.getOseId();var b=ya();if(!b)return 0;this.b=b;this.c=String(a||0);return this.getOseId()};h.getOseId=function(){return window&&Math.random&&navigator?this.b:-1};h.getCorrelator=function(){return this.c};h.numBlocks=function(){return this.a.length};h.registerAdBlock=function(a,b,c,d,e,f,g){g=void 0===g?function(){return null}:g;c=Ca();e=M()||-1;f=p.pageYOffset;0<=f||(f=-1);c&&d?c(d,a,b,!1,void 0,!1,g,e,f):(g=new Ga(a,b,d,g,e,f),this.a.push(g),Ba(d,g.g,!0),O||(H("//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs="+b+("&req="+a),null),O=Da(!na)),Fa(this))};h.unloadAdBlock=function(a,b,c){b=void 0===b?!1:b;c=void 0===c?!1:c;var d=this.f?I():window;void 0!==d.Goog_Osd_UnloadAdBlock&&d.Goog_Osd_UnloadAdBlock(a,b);c&&(b=la(this.a,function(e){return e.a==a}))&&Ba(a,b.g,!1)};h.setLoadOsdJsOnPubWindow=function(a){this.f=a};function Ha(){var a=I(),b=a.__google_ad_urls;if(!b)return a.__google_ad_urls=new N(a);try{if(0<=b.getOseId())return b}catch(c){}try{return a.__google_ad_urls=new N(a,b)}catch(c){return a.__google_ad_urls=new N(a)}}var O="",Aa=0,za=0;function Ga(a,b,c,d,e,f){var g=this;d=void 0===d?v:d;this.i=a;this.o=b;this.a=c;this.f=this.c=this.b=!1;this.j=d;this.m=void 0===e?-1:e;this.l=void 0===f?-1:f;this.g=function(){return g.b=!0}}q("Goog_AdSense_getAdAdapterInstance",Ha);q("Goog_AdSense_OsdAdapter",N);function Ia(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};function P(a,b,c,d,e,f){if((d?a.b:Math.random())<(e||.01))try{if(c instanceof K)var g=c;else g=new K,ka(c,function(m,l){var n=g,r=n.g++;m=ta(l,m);n.a.push(r);n.b[r]=m});var k=wa(g,a.a,"/pagead/gen_204?id="+b+"&");k&&("undefined"===typeof f?H(k,null):H(k,void 0===f?null:f))}catch(m){}};var Q=null;function Ja(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var R=p.performance,Ka=!!(R&&R.mark&&R.measure&&R.clearMarks),S=y(function(){var a;if(a=Ka){var b;if(null===Q){Q="";try{a="";try{a=p.top.location.hash}catch(c){a=p.location.hash}a&&(Q=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Q;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function La(){var a=V;this.b=[];this.c=a||p;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.b=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.a=S()||(null!=b?b:1>Math.random())}function Ma(a){a&&R&&S()&&(R.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),R.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}La.prototype.start=function(a,b){if(!this.a)return null;var c=Ea()||M();a=new Ja(a,b,c);b="goog_"+a.label+"_"+a.uniqueId+"_start";R&&S()&&R.mark(b);return a};function Na(){var a=W;this.c=X;this.g=!0;this.f=this.b;this.a=void 0===a?null:a}Na.prototype.b=function(a,b,c,d,e){e=e||"jserror";try{var f=new K;f.f=!0;L(f,1,"context",a);b.error&&b.meta&&b.id||(b=new Ia(b,{message:Y(b)}));b.msg&&L(f,2,"msg",b.msg.substring(0,512));var g=b.meta||{};if(d)try{d(g)}catch(T){}b=[g];f.a.push(3);f.b[3]=b;d=p;b=[];g=null;do{var k=d;if(G(k)){var m=k.location.href;g=k.document&&k.document.referrer||null}else m=g,g=null;b.push(new sa(m||""));try{d=k.parent}catch(T){d=null}}while(d&&k!=d);m=0;for(var l=b.length-1;m<=l;++m)b[m].depth=l-m;k=p;if(k.location&&k.location.ancestorOrigins&&k.location.ancestorOrigins.length==b.length-1)for(l=1;l<b.length;++l){var n=b[l];n.url||(n.url=k.location.ancestorOrigins[l-1]||"",n.h=!0)}var r=new sa(p.location.href,!1);k=null;var U=b.length-1;for(n=U;0<=n;--n){var t=b[n];!k&&qa.test(t.url)&&(k=t);if(t.url&&!t.h){r=t;break}}t=null;var Pa=b.length&&b[U].url;0!=r.depth&&Pa&&(t=b[U]);var A=new ra(r,t);A.b&&L(f,4,"top",A.b.url||"");L(f,5,"url",A.a.url||"");P(this.c,e,f,!1,c)}catch(T){try{P(this.c,e,{context:"ecmserr",rctx:a,msg:Y(T),url:A&&A.a.url},!1,c)}catch(Ra){}}return!0};function Y(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};var X,Z,V=I(),W=new La;function Oa(){if(!V.google_measure_js_timing){var a=W;a.a=!1;a.b!=a.c.google_js_reporting_queue&&(S()&&ca(a.b,Ma),a.b.length=0)}}X=new function(){var a=void 0===a?da:a;this.a="http:"===a.location.protocol?"http:":"https:";this.b=Math.random()};Z=new Na;"complete"==V.document.readyState?Oa():W.a&&z(V,"load",function(){Oa()});function Qa(a){try{if(Z.a&&Z.a.a){var b=Z.a.start((464).toString(),3);a();a=b;var c=Z.a;if(c.a&&"number"==typeof a.value){var d=Ea()||M();a.duration=d-a.value;var e="goog_"+a.label+"_"+a.uniqueId+"_end";R&&S()&&R.mark(e);!c.a||2048<c.b.length||c.b.push(a)}}else a()}catch(f){c=Z.g;try{Ma(b),c=Z.f(464,new Ia(f,{message:Y(f)}),void 0,void 0)}catch(g){Z.b(217,g)}if(!c)throw f;}};q("r3px",function(a,b){Qa(function(){var c=document.getElementById("google_decrypt_frame_"+a);if(c){window.google_enable_ose=!0;O=Da(!1);za=Aa=0;var d=Ha();d.setupOse(+new Date);d.getOseId()&&d.registerAdBlock(b||c.src,9,"",c)}else P(X,"3px",{"no-frame":"1"},!0,void 0,void 0)})});}).call(this);
