(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-045a4477"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a630"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3");var r=n("6b75");function i(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},"07ac":function(t,e,n){var r=n("23e7"),i=n("6f53").values;r({target:"Object",stat:!0},{values:function(t){return i(t)}})},"13d5":function(t,e,n){"use strict";var r=n("23e7"),i=n("d58f").left,o=n("a640"),a=n("ae40"),u=n("2d00"),c=n("605d"),f=o("reduce"),s=a("reduce",{1:0}),l=!c&&u>79&&u<83;r({target:"Array",proto:!0,forced:!f||!s||l},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("6b75");function i(t){if(Array.isArray(t))return Object(r["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var a=n("06c5");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||o(t)||Object(a["a"])(t)||u()}},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("69f3"),o=n("7dd0"),a="String Iterator",u=i.set,c=i.getterFor(a);o(String,"String",(function(t){u(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),o=n("9bdd"),a=n("e95a"),u=n("50c4"),c=n("8418"),f=n("35a1");t.exports=function(t){var e,n,s,l,d,v,h=i(t),g="function"==typeof this?this:Array,p=arguments.length,b=p>1?arguments[1]:void 0,y=void 0!==b,x=f(h),S=0;if(y&&(b=r(b,p>2?arguments[2]:void 0,2)),void 0==x||g==Array&&a(x))for(e=u(h.length),n=new g(e);e>S;S++)v=y?b(h[S],S):h[S],c(n,S,v);else for(l=x.call(h),d=l.next,n=new g;!(s=d.call(l)).done;S++)v=y?o(l,b,[s.value,S],!0):s.value,c(n,S,v);return n.length=S,n}},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),o=n("7b0b"),a=n("50c4"),u=n("a691"),c=n("1d80"),f=n("8aa5"),s=n("14c3"),l=Math.max,d=Math.min,v=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var b=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=r.REPLACE_KEEPS_$0,x=b?"$":"$0";return[function(n,r){var i=c(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!b&&y||"string"===typeof r&&-1===r.indexOf(x)){var o=n(e,t,this,r);if(o.done)return o.value}var c=i(t),v=String(this),h="function"===typeof r;h||(r=String(r));var g=c.global;if(g){var w=c.unicode;c.lastIndex=0}var m=[];while(1){var O=s(c,v);if(null===O)break;if(m.push(O),!g)break;var E=String(O[0]);""===E&&(c.lastIndex=f(v,a(c.lastIndex),w))}for(var I="",j=0,A=0;A<m.length;A++){O=m[A];for(var T=String(O[0]),k=l(d(u(O.index),v.length),0),R=[],$=1;$<O.length;$++)R.push(p(O[$]));var z=O.groups;if(h){var D=[T].concat(R,k,v);void 0!==z&&D.push(z);var C=String(r.apply(void 0,D))}else C=S(T,v,k,R,z,r);k>=j&&(I+=v.slice(j,k)+C,j=k+T.length)}return I+v.slice(j)}];function S(t,n,r,i,a,u){var c=r+t.length,f=i.length,s=g;return void 0!==a&&(a=o(a),s=h),e.call(u,s,(function(e,o){var u;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":u=a[o.slice(1,-1)];break;default:var s=+o;if(0===s)return e;if(s>f){var l=v(s/10);return 0===l?e:l<=f?void 0===i[l-1]?o.charAt(1):i[l-1]+o.charAt(1):e}u=i[s-1]}return void 0===u?"":u}))}}))},6062:function(t,e,n){"use strict";var r=n("6d61"),i=n("6566");t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,n){"use strict";var r=n("9bf2").f,i=n("7c73"),o=n("e2cc"),a=n("0366"),u=n("19aa"),c=n("2266"),f=n("7dd0"),s=n("2626"),l=n("83ab"),d=n("f183").fastKey,v=n("69f3"),h=v.set,g=v.getterFor;t.exports={getConstructor:function(t,e,n,f){var s=t((function(t,r){u(t,s,e),h(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),l||(t.size=0),void 0!=r&&c(r,t[f],{that:t,AS_ENTRIES:n})})),v=g(e),p=function(t,e,n){var r,i,o=v(t),a=b(t,e);return a?a.value=n:(o.last=a={index:i=d(e,!0),key:e,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=a),r&&(r.next=a),l?o.size++:t.size++,"F"!==i&&(o.index[i]=a)),t},b=function(t,e){var n,r=v(t),i=d(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return o(s.prototype,{clear:function(){var t=this,e=v(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,l?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),r=b(e,t);if(r){var i=r.next,o=r.previous;delete n.index[r.index],r.removed=!0,o&&(o.next=i),i&&(i.previous=o),n.first==r&&(n.first=i),n.last==r&&(n.last=o),l?n.size--:e.size--}return!!r},forEach:function(t){var e,n=v(this),r=a(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),o(s.prototype,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return p(this,0===t?0:t,e)}}:{add:function(t){return p(this,t=0===t?0:t,t)}}),l&&r(s.prototype,"size",{get:function(){return v(this).size}}),s},setStrong:function(t,e,n){var r=e+" Iterator",i=g(e),o=g(r);f(t,e,(function(t,e){h(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),s(e)}}},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},"6d61":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("94ca"),a=n("6eeb"),u=n("f183"),c=n("2266"),f=n("19aa"),s=n("861d"),l=n("d039"),d=n("1c7e"),v=n("d44e"),h=n("7156");t.exports=function(t,e,n){var g=-1!==t.indexOf("Map"),p=-1!==t.indexOf("Weak"),b=g?"set":"add",y=i[t],x=y&&y.prototype,S=y,w={},m=function(t){var e=x[t];a(x,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(p&&!s(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return p&&!s(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(p&&!s(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(o(t,"function"!=typeof y||!(p||x.forEach&&!l((function(){(new y).entries().next()})))))S=n.getConstructor(e,t,g,b),u.REQUIRED=!0;else if(o(t,!0)){var O=new S,E=O[b](p?{}:-0,1)!=O,I=l((function(){O.has(1)})),j=d((function(t){new y(t)})),A=!p&&l((function(){var t=new y,e=5;while(e--)t[b](e,e);return!t.has(-0)}));j||(S=e((function(e,n){f(e,S,t);var r=h(new y,e,S);return void 0!=n&&c(n,r[b],{that:r,AS_ENTRIES:g}),r})),S.prototype=x,x.constructor=S),(I||A)&&(m("delete"),m("has"),g&&m("get")),(A||E)&&m(b),p&&x.clear&&delete x.clear}return w[t]=S,r({global:!0,forced:S!=y},w),v(S,t),p||n.setStrong(S,t,g),S}},"6f53":function(t,e,n){var r=n("83ab"),i=n("df75"),o=n("fc6a"),a=n("d1e7").f,u=function(t){return function(e){var n,u=o(e),c=i(u),f=c.length,s=0,l=[];while(f>s)n=c[s++],r&&!a.call(u,n)||l.push(t?[n,u[n]]:u[n]);return l}};t.exports={entries:u(!0),values:u(!1)}},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(a){throw i(t),a}}},a15b:function(t,e,n){"use strict";var r=n("23e7"),i=n("44ad"),o=n("fc6a"),a=n("a640"),u=[].join,c=i!=Object,f=a("join",",");r({target:"Array",proto:!0,forced:c||!f},{join:function(t){return u.call(o(this),void 0===t?",":t)}})},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),a=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:a},{from:i})},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,o=Function.prototype,a=o.toString,u=/^\s*function ([^ (]*)/,c="name";r&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return a.call(this).match(u)[1]}catch(t){return""}}})},bb2f:function(t,e,n){var r=n("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c975:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").indexOf,o=n("a640"),a=n("ae40"),u=[].indexOf,c=!!u&&1/[1].indexOf(1,-0)<0,f=o("indexOf"),s=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:c||!f||!s},{indexOf:function(t){return c?u.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},d28b:function(t,e,n){var r=n("746f");r("iterator")},d58f:function(t,e,n){var r=n("1c0b"),i=n("7b0b"),o=n("44ad"),a=n("50c4"),u=function(t){return function(e,n,u,c){r(n);var f=i(e),s=o(f),l=a(f.length),d=t?l-1:0,v=t?-1:1;if(u<2)while(1){if(d in s){c=s[d],d+=v;break}if(d+=v,t?d<0:l<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:l>d;d+=v)d in s&&(c=n(c,s[d],d,f));return c}};t.exports={left:u(!1),right:u(!0)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,o=n("1dde"),a=n("ae40"),u=o("map"),c=a("map");r({target:"Array",proto:!0,forced:!u||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("e260"),a=n("9112"),u=n("b622"),c=u("iterator"),f=u("toStringTag"),s=o.values;for(var l in i){var d=r[l],v=d&&d.prototype;if(v){if(v[c]!==s)try{a(v,c,s)}catch(g){v[c]=s}if(v[f]||a(v,f,l),i[l])for(var h in o)if(v[h]!==o[h])try{a(v,h,o[h])}catch(g){v[h]=o[h]}}}},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),a=n("5135"),u=n("861d"),c=n("9bf2").f,f=n("e893"),s=o.Symbol;if(i&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new s(t):void 0===t?s():s(t);return""===t&&(l[e]=!0),e};f(d,s);var v=d.prototype=s.prototype;v.constructor=d;var h=v.toString,g="Symbol(test)"==String(s("test")),p=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,e=h.call(t);if(a(l,t))return"";var n=g?e.slice(7,-1):e.replace(p,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},f183:function(t,e,n){var r=n("d012"),i=n("861d"),o=n("5135"),a=n("9bf2").f,u=n("90e3"),c=n("bb2f"),f=u("meta"),s=0,l=Object.isExtensible||function(){return!0},d=function(t){a(t,f,{value:{objectID:"O"+ ++s,weakData:{}}})},v=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,f)){if(!l(t))return"F";if(!e)return"E";d(t)}return t[f].objectID},h=function(t,e){if(!o(t,f)){if(!l(t))return!0;if(!e)return!1;d(t)}return t[f].weakData},g=function(t){return c&&p.REQUIRED&&l(t)&&!o(t,f)&&d(t),t},p=t.exports={REQUIRED:!1,fastKey:v,getWeakData:h,onFreeze:g};r[f]=!0},f8cb:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Day",{attrs:{day:21,solutions:t.solutions},on:{"input-changed":t.onInputChanged}})},i=[],o=(n("99af"),n("4de4"),n("4160"),n("c975"),n("a15b"),n("d81d"),n("13d5"),n("b64b"),n("d3b7"),n("07ac"),n("ac1f"),n("6062"),n("3ca3"),n("5319"),n("1276"),n("159b"),n("ddb0"),n("2909")),a=n("4a87"),u={components:{Day:a["default"]},data:function(){return{solutions:{partOne:null,partTwo:null}}},methods:{onInputChanged:function(t){var e=this;this.ingredients=new Set,this.foods=t.map((function(t){var n=t.split(" (contains "),r=n[0].split(" "),i=n[1].replace(/\)/g,"").split(", ");return r.forEach((function(t){return e.ingredients.add(t)})),{ingredients:new Set(r),allergens:new Set(i)}})),this.solvePartOne(),this.solvePartTwo()},intersect:function(t,e){return new Set(Object(o["a"])(t).filter((function(t){return e.has(t)})))},union:function(t,e){return new Set([].concat(Object(o["a"])(t),Object(o["a"])(e)))},solvePartOne:function(){var t=this;this.allergenToIngredient={},this.foods.forEach((function(e){e.allergens.forEach((function(n){t.allergenToIngredient[n]?t.allergenToIngredient[n]=t.intersect(t.allergenToIngredient[n],e.ingredients):t.allergenToIngredient[n]=new Set(e.ingredients)}))}));var e=new Set(Object.values(this.allergenToIngredient).reduce((function(e,n){return t.union(e,n)}))),n=Object(o["a"])(this.ingredients).filter((function(t){return!e.has(t)}));this.solutions.partOne=n.map((function(e){return t.foods.filter((function(t){return t.ingredients.has(e)})).length})).reduce((function(t,e){return t+e}))},solvePartTwo:function(){var t=this,e=[],n={},r=Object.keys(this.allergenToIngredient).length;while(e.length<r){var i=Object.keys(this.allergenToIngredient).filter((function(n){return-1===e.indexOf(n)&&1===t.allergenToIngredient[n].size}));i.forEach((function(r){e.push(r);var i=t.allergenToIngredient[r].values().next().value;n[r]=i,Object.keys(t.allergenToIngredient).forEach((function(e){return t.allergenToIngredient[e].delete(i)}))}))}this.solutions.partTwo=Object.keys(n).sort((function(t,e){return t.localeCompare(e)})).map((function(t){return n[t]})).join(",")}}},c=u,f=n("2877"),s=Object(f["a"])(c,r,i,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-045a4477.5949f8f8.js.map