(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c6227c0"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a630"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3");var r=n("6b75");function i(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},"13d5":function(t,e,n){"use strict";var r=n("23e7"),i=n("d58f").left,o=n("a640"),a=n("ae40"),u=n("2d00"),c=n("605d"),f=o("reduce"),s=a("reduce",{1:0}),l=!c&&u>79&&u<83;r({target:"Array",proto:!0,forced:!f||!s||l},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("6b75");function i(t){if(Array.isArray(t))return Object(r["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var a=n("06c5");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||o(t)||Object(a["a"])(t)||u()}},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("69f3"),o=n("7dd0"),a="String Iterator",u=i.set,c=i.getterFor(a);o(String,"String",(function(t){u(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),o=n("9bdd"),a=n("e95a"),u=n("50c4"),c=n("8418"),f=n("35a1");t.exports=function(t){var e,n,s,l,d,v,h=i(t),y="function"==typeof this?this:Array,p=arguments.length,b=p>1?arguments[1]:void 0,g=void 0!==b,x=f(h),m=0;if(g&&(b=r(b,p>2?arguments[2]:void 0,2)),void 0==x||y==Array&&a(x))for(e=u(h.length),n=new y(e);e>m;m++)v=g?b(h[m],m):h[m],c(n,m,v);else for(l=x.call(h),d=l.next,n=new y;!(s=d.call(l)).done;m++)v=g?o(l,b,[s.value,m],!0):s.value,c(n,m,v);return n.length=m,n}},"53ca":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}},6062:function(t,e,n){"use strict";var r=n("6d61"),i=n("6566");t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,n){"use strict";var r=n("9bf2").f,i=n("7c73"),o=n("e2cc"),a=n("0366"),u=n("19aa"),c=n("2266"),f=n("7dd0"),s=n("2626"),l=n("83ab"),d=n("f183").fastKey,v=n("69f3"),h=v.set,y=v.getterFor;t.exports={getConstructor:function(t,e,n,f){var s=t((function(t,r){u(t,s,e),h(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),l||(t.size=0),void 0!=r&&c(r,t[f],{that:t,AS_ENTRIES:n})})),v=y(e),p=function(t,e,n){var r,i,o=v(t),a=b(t,e);return a?a.value=n:(o.last=a={index:i=d(e,!0),key:e,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=a),r&&(r.next=a),l?o.size++:t.size++,"F"!==i&&(o.index[i]=a)),t},b=function(t,e){var n,r=v(t),i=d(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return o(s.prototype,{clear:function(){var t=this,e=v(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,l?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),r=b(e,t);if(r){var i=r.next,o=r.previous;delete n.index[r.index],r.removed=!0,o&&(o.next=i),i&&(i.previous=o),n.first==r&&(n.first=i),n.last==r&&(n.last=o),l?n.size--:e.size--}return!!r},forEach:function(t){var e,n=v(this),r=a(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),o(s.prototype,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return p(this,0===t?0:t,e)}}:{add:function(t){return p(this,t=0===t?0:t,t)}}),l&&r(s.prototype,"size",{get:function(){return v(this).size}}),s},setStrong:function(t,e,n){var r=e+" Iterator",i=y(e),o=y(r);f(t,e,(function(t,e){h(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),s(e)}}},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},"6d61":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("94ca"),a=n("6eeb"),u=n("f183"),c=n("2266"),f=n("19aa"),s=n("861d"),l=n("d039"),d=n("1c7e"),v=n("d44e"),h=n("7156");t.exports=function(t,e,n){var y=-1!==t.indexOf("Map"),p=-1!==t.indexOf("Weak"),b=y?"set":"add",g=i[t],x=g&&g.prototype,m=g,S={},w=function(t){var e=x[t];a(x,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(p&&!s(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return p&&!s(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(p&&!s(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(o(t,"function"!=typeof g||!(p||x.forEach&&!l((function(){(new g).entries().next()})))))m=n.getConstructor(e,t,y,b),u.REQUIRED=!0;else if(o(t,!0)){var O=new m,E=O[b](p?{}:-0,1)!=O,j=l((function(){O.has(1)})),k=d((function(t){new g(t)})),A=!p&&l((function(){var t=new g,e=5;while(e--)t[b](e,e);return!t.has(-0)}));k||(m=e((function(e,n){f(e,m,t);var r=h(new g,e,m);return void 0!=n&&c(n,r[b],{that:r,AS_ENTRIES:y}),r})),m.prototype=x,x.constructor=m),(j||A)&&(w("delete"),w("has"),y&&w("get")),(A||E)&&w(b),p&&x.clear&&delete x.clear}return S[t]=m,r({global:!0,forced:m!=g},S),v(m,t),p||n.setStrong(m,t,y),m}},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(a){throw i(t),a}}},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),a=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:a},{from:i})},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,o=Function.prototype,a=o.toString,u=/^\s*function ([^ (]*)/,c="name";r&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return a.call(this).match(u)[1]}catch(t){return""}}})},bb2f:function(t,e,n){var r=n("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d28b:function(t,e,n){var r=n("746f");r("iterator")},d58f:function(t,e,n){var r=n("1c0b"),i=n("7b0b"),o=n("44ad"),a=n("50c4"),u=function(t){return function(e,n,u,c){r(n);var f=i(e),s=o(f),l=a(f.length),d=t?l-1:0,v=t?-1:1;if(u<2)while(1){if(d in s){c=s[d],d+=v;break}if(d+=v,t?d<0:l<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:l>d;d+=v)d in s&&(c=n(c,s[d],d,f));return c}};t.exports={left:u(!1),right:u(!0)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,o=n("1dde"),a=n("ae40"),u=o("map"),c=a("map");r({target:"Array",proto:!0,forced:!u||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("e260"),a=n("9112"),u=n("b622"),c=u("iterator"),f=u("toStringTag"),s=o.values;for(var l in i){var d=r[l],v=d&&d.prototype;if(v){if(v[c]!==s)try{a(v,c,s)}catch(y){v[c]=s}if(v[f]||a(v,f,l),i[l])for(var h in o)if(v[h]!==o[h])try{a(v,h,o[h])}catch(y){v[h]=o[h]}}}},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),a=n("5135"),u=n("861d"),c=n("9bf2").f,f=n("e893"),s=o.Symbol;if(i&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new s(t):void 0===t?s():s(t);return""===t&&(l[e]=!0),e};f(d,s);var v=d.prototype=s.prototype;v.constructor=d;var h=v.toString,y="Symbol(test)"==String(s("test")),p=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,e=h.call(t);if(a(l,t))return"";var n=y?e.slice(7,-1):e.replace(p,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},f183:function(t,e,n){var r=n("d012"),i=n("861d"),o=n("5135"),a=n("9bf2").f,u=n("90e3"),c=n("bb2f"),f=u("meta"),s=0,l=Object.isExtensible||function(){return!0},d=function(t){a(t,f,{value:{objectID:"O"+ ++s,weakData:{}}})},v=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,f)){if(!l(t))return"F";if(!e)return"E";d(t)}return t[f].objectID},h=function(t,e){if(!o(t,f)){if(!l(t))return!0;if(!e)return!1;d(t)}return t[f].weakData},y=function(t){return c&&p.REQUIRED&&l(t)&&!o(t,f)&&d(t),t},p=t.exports={REQUIRED:!1,fastKey:v,getWeakData:h,onFreeze:y};r[f]=!0},f70c:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Day",{attrs:{day:15,year:2018,solutions:t.solutions},on:{"input-changed":t.onInputChanged}})},i=[],o=(n("99af"),n("4de4"),n("4160"),n("d81d"),n("13d5"),n("d3b7"),n("ac1f"),n("6062"),n("3ca3"),n("1276"),n("159b"),n("ddb0"),n("53ca")),a=n("2909"),u=n("4a87"),c={components:{Day:u["default"]},data:function(){return{solutions:{partOne:null,partTwo:null},directions:[[0,-1],[-1,0],[1,0],[0,1]]}},methods:{onInputChanged:function(t){this.grid=t.map((function(t){return t.split("")})),this.players=[];for(var e=0;e<this.grid.length;e++)for(var n=0;n<this.grid[e].length;n++)"G"!==this.grid[e][n]&&"E"!==this.grid[e][n]||this.players.push({attack:3,health:200,type:this.grid[e][n],x:n,y:e});this.solvePartOne(),this.solvePartTwo()},findEnemy:function(t,e,n){return e.filter((function(e){return e.type!==t.type&&e.health>0})).filter((function(e){return Math.abs(t.x-e.x)+Math.abs(t.y-e.y)===1})).reduce((function(t,e){return null===t||t.health>e.health?e:t}),null)},findNextMovement:function(t,e,n){var r=this,i={};e.filter((function(e){return e.type!==t.type&&e.health>0})).map((function(t){return r.getAdjacents({x:t.x,y:t.y}).filter((function(t){return"."===n[t.y][t.x]}))})).reduce((function(t,e){return t.concat.apply(t,Object(a["a"])(e))}),[]).forEach((function(t){i["".concat(t.x,",").concat(t.y)]=t}));var u=new Set;u.add("".concat(t.x,",").concat(t.y));var c=[[{x:t.x,y:t.y}]],f=function(){var t=[],e=[];return c.forEach((function(o){r.getAdjacents(o[o.length-1]).forEach((function(r){var c="".concat(r.x,",").concat(r.y);i[c]?e.push([].concat(Object(a["a"])(o),[r,i[c]])):u.has(c)||"."!==n[r.y][r.x]||t.push([].concat(Object(a["a"])(o),[r])),u.add(c)}))})),e.length>0?(e=e.sort((function(t,e){var n=t[t.length-1],r=e[e.length-1];return n.y===r.y?n.x-r.x:n.y-r.y})),{v:e[0][1]}):(c=t,c.length<1?{v:null}:void 0)};while(1){var s=f();if("object"===Object(o["a"])(s))return s.v}},getAdjacents:function(t){return this.directions.map((function(e){return{x:t.x+e[0],y:t.y+e[1]}}))},solve:function(t,e,n){var r=this;e.filter((function(t){return"E"===t.type})).forEach((function(t){t.attack=n}));var i=0;while(1){e=e.sort((function(t,e){return t.y===e.y?t.x-e.x:t.y-e.y}));for(var a=function(o){var a=e[o];if(a.health>0){if(e.filter((function(t){return t.health>0&&t.type!==a.type})).length<1)return{v:i*e.filter((function(t){return t.health>0})).map((function(t){return t.health})).reduce((function(t,e){return t+e}))};var u=r.findEnemy(a,e,t),c=u?null:r.findNextMovement(a,e,t);if(!u&&c&&(t[a.y][a.x]=".",a.x=c.x,a.y=c.y,t[a.y][a.x]=a.type,u=r.findEnemy(a,e,t)),u&&(u.health-=a.attack,u.health<1&&(t[u.y][u.x]=".","E"===u.type&&3!==n)))return{v:null}}},u=0;u<e.length;u++){var c=a(u);if("object"===Object(o["a"])(c))return c.v}i++}},solvePartOne:function(){this.solutions.partOne=this.solve(JSON.parse(JSON.stringify(this.grid)),JSON.parse(JSON.stringify(this.players)),3)},solvePartTwo:function(){var t=4;while(1){var e=this.solve(JSON.parse(JSON.stringify(this.grid)),JSON.parse(JSON.stringify(this.players)),t);if(null!==e)return void(this.solutions.partTwo=e);t++}}}},f=c,s=n("2877"),l=Object(s["a"])(f,r,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-1c6227c0.527bb788.js.map