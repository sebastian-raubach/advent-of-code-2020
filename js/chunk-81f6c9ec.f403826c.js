(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81f6c9ec"],{"06c5":function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));r("a630"),r("fb6a"),r("b0c0"),r("d3b7"),r("25f0"),r("3ca3");var e=r("6b75");function o(t,n){if(t){if("string"===typeof t)return Object(e["a"])(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(e["a"])(t,n):void 0}}},"3ca3":function(t,n,r){"use strict";var e=r("6547").charAt,o=r("69f3"),i=r("7dd0"),a="String Iterator",c=o.set,s=o.getterFor(a);i(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,n=s(this),r=n.string,o=n.index;return o>=r.length?{value:void 0,done:!0}:(t=e(r,o),n.index+=t.length,{value:t,done:!1})}))},"45fc":function(t,n,r){"use strict";var e=r("23e7"),o=r("b727").some,i=r("a640"),a=r("ae40"),c=i("some"),s=a("some");e({target:"Array",proto:!0,forced:!c||!s},{some:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,n,r){"use strict";var e=r("0366"),o=r("7b0b"),i=r("9bdd"),a=r("e95a"),c=r("50c4"),s=r("8418"),u=r("35a1");t.exports=function(t){var n,r,f,l,d,v,h=o(t),p="function"==typeof this?this:Array,b=arguments.length,g=b>1?arguments[1]:void 0,y=void 0!==g,m=u(h),O=0;if(y&&(g=e(g,b>2?arguments[2]:void 0,2)),void 0==m||p==Array&&a(m))for(n=c(h.length),r=new p(n);n>O;O++)v=y?g(h[O],O):h[O],s(r,O,v);else for(l=m.call(h),d=l.next,r=new p;!(f=d.call(l)).done;O++)v=y?i(l,g,[f.value,O],!0):f.value,s(r,O,v);return r.length=O,r}},"62ad":function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("Day",{attrs:{day:12,year:2018,solutions:t.solutions},on:{"input-changed":t.onInputChanged}})},o=[];r("99af"),r("4de4"),r("c975"),r("baa5"),r("d81d"),r("fb6a"),r("45fc"),r("ac1f"),r("1276");function i(t){if(Array.isArray(t))return t}r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");function a(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],e=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(e=(a=c.next()).done);e=!0)if(r.push(a.value),n&&r.length===n)break}catch(s){o=!0,i=s}finally{try{e||null==c["return"]||c["return"]()}finally{if(o)throw i}}return r}}var c=r("06c5");function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,n){return i(t)||a(t,n)||Object(c["a"])(t,n)||s()}var f=r("4a87"),l={components:{Day:f["default"]},data:function(){return{solutions:{partOne:null,partTwo:null}}},methods:{onInputChanged:function(t){this.startGrid=t[0].split(": ")[1].split("").map((function(t){return"#"===t})),t.shift(),t.shift(),this.rules=t.map((function(t){var n=t.split(" => "),r=n[0].split("").map((function(t){return"#"===t})),e="#"===n[1];return{positions:r,result:e}})),this.solvePartOne(),this.solvePartTwo()},solve:function(t){for(var n=this,r=0,e=this.startGrid.concat(),o=1;o<=t;o++){var i=e.concat();while(i.indexOf(!0)<5)r++,i.unshift(!1);while(i.lastIndexOf(!0)>i.length-6)i.push(!1);for(var a=i.concat(),c=function(t){var r=i.slice(t-2,t+3),e=u(r,5),o=e[0],c=e[1],s=e[2],f=e[3],l=e[4],d=n.rules.filter((function(t){return t.positions[0]===o&&t.positions[1]===c&&t.positions[2]===s&&t.positions[3]===f&&t.positions[4]===l})).map((function(t){return t.result}))[0];a[t]=void 0!==d&&!1!==d&&d},s=2;s<i.length-3;s++)c(s);e=a.concat()}for(var f=0,l=0;l<e.length;l++){var d=l-r;e[l]&&(f+=d)}return f},solvePartOne:function(){this.solutions.partOne=this.solve(20)},solvePartTwo:function(){var t=[],n=1,r=0;while(t.length<10||t.some((function(n){return n!==t[0]}))){var e=this.solve(n++);t.push(e-r),r=e,t.length>10&&t.shift()}this.solutions.partTwo=(5e10-n+11)*t[0]+this.solve(n-11)}}},d=l,v=r("2877"),h=Object(v["a"])(d,e,o,!1,null,null,null);n["default"]=h.exports},"6b75":function(t,n,r){"use strict";function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}r.d(n,"a",(function(){return e}))},"9bdd":function(t,n,r){var e=r("825a"),o=r("2a62");t.exports=function(t,n,r,i){try{return i?n(e(r)[0],r[1]):n(r)}catch(a){throw o(t),a}}},a630:function(t,n,r){var e=r("23e7"),o=r("4df4"),i=r("1c7e"),a=!i((function(t){Array.from(t)}));e({target:"Array",stat:!0,forced:a},{from:o})},b0c0:function(t,n,r){var e=r("83ab"),o=r("9bf2").f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,s="name";e&&!(s in i)&&o(i,s,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},baa5:function(t,n,r){var e=r("23e7"),o=r("e58c");e({target:"Array",proto:!0,forced:o!==[].lastIndexOf},{lastIndexOf:o})},c975:function(t,n,r){"use strict";var e=r("23e7"),o=r("4d64").indexOf,i=r("a640"),a=r("ae40"),c=[].indexOf,s=!!c&&1/[1].indexOf(1,-0)<0,u=i("indexOf"),f=a("indexOf",{ACCESSORS:!0,1:0});e({target:"Array",proto:!0,forced:s||!u||!f},{indexOf:function(t){return s?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},d28b:function(t,n,r){var e=r("746f");e("iterator")},d81d:function(t,n,r){"use strict";var e=r("23e7"),o=r("b727").map,i=r("1dde"),a=r("ae40"),c=i("map"),s=a("map");e({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(t,n,r){var e=r("da84"),o=r("fdbc"),i=r("e260"),a=r("9112"),c=r("b622"),s=c("iterator"),u=c("toStringTag"),f=i.values;for(var l in o){var d=e[l],v=d&&d.prototype;if(v){if(v[s]!==f)try{a(v,s,f)}catch(p){v[s]=f}if(v[u]||a(v,u,l),o[l])for(var h in i)if(v[h]!==i[h])try{a(v,h,i[h])}catch(p){v[h]=i[h]}}}},e01a:function(t,n,r){"use strict";var e=r("23e7"),o=r("83ab"),i=r("da84"),a=r("5135"),c=r("861d"),s=r("9bf2").f,u=r("e893"),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[n]=!0),n};u(d,f);var v=d.prototype=f.prototype;v.constructor=d;var h=v.toString,p="Symbol(test)"==String(f("test")),b=/^Symbol\((.*)\)[^)]+$/;s(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,n=h.call(t);if(a(l,t))return"";var r=p?n.slice(7,-1):n.replace(b,"$1");return""===r?void 0:r}}),e({global:!0,forced:!0},{Symbol:d})}},e58c:function(t,n,r){"use strict";var e=r("fc6a"),o=r("a691"),i=r("50c4"),a=r("a640"),c=r("ae40"),s=Math.min,u=[].lastIndexOf,f=!!u&&1/[1].lastIndexOf(1,-0)<0,l=a("lastIndexOf"),d=c("indexOf",{ACCESSORS:!0,1:0}),v=f||!l||!d;t.exports=v?function(t){if(f)return u.apply(this,arguments)||0;var n=e(this),r=i(n.length),a=r-1;for(arguments.length>1&&(a=s(a,o(arguments[1]))),a<0&&(a=r+a);a>=0;a--)if(a in n&&n[a]===t)return a||0;return-1}:u}}]);
//# sourceMappingURL=chunk-81f6c9ec.f403826c.js.map