/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
var hostJquery;
var host$;
if (typeof jQuery !== 'undefined') {
	hostJquery = jQuery;
	host$ = $;
}
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});
var mg$ = $.noConflict(true);
if (hostJquery) {
	jQuery = hostJquery;
	$ = host$;
}
if (GmCXt === undefined) var GmCXt = {};

GmCXt.browserApp = false;
GmCXt.isFirefox = typeof InstallTrigger !== 'undefined';
GmCXt.isChrome = !!window.chrome;

if (GmCXt.isFirefox && typeof browser !== 'undefined') {
	GmCXt.browserApp = 'firefox';
} else if (GmCXt.isChrome && chrome.storage) {
	GmCXt.browserApp = 'chrome';
} else if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
	GmCXt.browserApp = "Opera";
} else if (navigator.userAgent.indexOf("Safari") != -1) {
	GmCXt.browserApp = "Safari";
}

GmCXt.isIE = /*@cc_on!@*/ false || !!document.documentMode;
if (GmCXt.isIE) {
	var PROMISES_POLYFILL = "";
	if (!window.Promise && typeof Promise !== 'undefined') {
		window.Promise = Promise;
	}
	GmCXt.browserApp = 'ie';
}
if (GmCXt === undefined) var GmCXt = {};

if (GmCXt.requestHandler === undefined) GmCXt.requestHandler = {};

var GuideMeXt = GmCXt;
var senderTabId;
GmCXt.stopVideoUpload = false;
GmCXt.isPageReloaded = false;

GmCXt.ELEMENT_FOUND = 'elementFound';
GmCXt.ELEMENT_NOT_FOUND = 'elementNotFound';
GmCXt.ELEMENT_PRECISION_MEDIUM = 'Medium';
GmCXt.DOM_CRITERIA_DEFAULT = 'default';
GmCXt.DOM_CRITERIA_TEXT = 'identify_by_text';
GmCXt.DOM_CRITERIA_JQUERY = 'jquery_selector';
GmCXt.DOM_CRITERIA_CUSTOM = 'custom_selector';
GmCXt.ANALYTICS_EVENT_CHAIN_ID = '';
GmCXt.INSIGHTS_EVENT_CHAIN_ID = '';
GmCXt.STEP_TEXT_SLIDE_TYPE = 'textSlide';
GmCXt.isSFDCApp = false;
GmCXt.ONBOARDING_SINGLE_SCREEN = 'single_screen';
GmCXt.ONBOARDING_SIDE_BY = 'side_by_side';
GmCXt.tooltipValidRulesArr = ['value', 'message', 'alignment', 'selectionMode', 'customPosition'];
GmCXt.validImageFiles = ['png', 'jpg', 'jpeg', 'gif'];
GmCXt.unknownError = 'Unknown error';
GmCXt.accessibility = false;
GmCXt.sourceDesktop = 'desktop';
GmCXt.videoFileExtns = ['.webm', '.mpg', '.mp2', '.mpeg', '.mpe', '.mpv', '.ogg', '.mp4', '.m4p', '.m4v', '.avi', '.wmv', '.mov', '.qt', '.flv', '.swf'];
GmCXt.notiTimeOpts = ["1", "2", "3", "4", "5", "7", "10", "12", "15", "18", "20", "24", "36", "48"];
GmCXt.defaultWidgetZindex = '2147483646';

/**
 * Note that following constant values must match to the values of
 *  $scope.playVideoTour = 'video';
 *  $scope.playSlideshow = 'slideshow';
 * defined in angular app
 */
GmCXt.TOUR_PLAYER_SLIDESHOW = 'slideshow';
GmCXt.TOUR_PLAYER_VIDEO = 'video';
GmCXt.TOUR_PLAYER_GIPHY = 'giphy';

GmCXt.ruleTextLimit = 200;

GmCXt.failedImages = [];
GmCXt.creatorInterval = null;
GmCXt.playedTour = [];
GmCXt.isMediaPlayerOn = false;

// For test Automation
GmCXt.testResultsFromCreator = {};

GmCXt.showPlayer = false;
GmCXt.isMiniPlayer = false;

GmCXt.variables = [];

GmCXt.keyInputGuides = [];

GmCXt.feedbackImgSrc = '';

if (!GmCXt.domSelectorTracker) {
    GmCXt.domSelectorTracker = {};
}

if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function(predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];

            // 5. Let k be 0.
            var k = 0;

            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }

            // 7. Return undefined.
            return undefined;
        }
    });
}

if (Element.prototype.getAttributeNames == undefined) {
    Element.prototype.getAttributeNames = function() {
        var attributes = this.attributes;
        var length = attributes.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = attributes[i].name;
        }
        return result;
    };
}

if (typeof Object.assign != 'function') {
    Object.assign = function(target) {
        'use strict';
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
}

// Rules Engine
GmCXt.EXISTS = 'Exists';
GmCXt.NOT_EXISTS = 'Not Exists';
GmCXt.EQUALS = 'Equals';
GmCXt.NOT_EQUAL = 'Not Equals';
GmCXt.TXT_EQUALS = 'Text Is';
GmCXt.NOT_TXT = 'Text Is Not';
GmCXt.CONTAINS = 'Contains';
GmCXt.NOT_CONTAINS = 'Does Not Contain';
GmCXt.STARTS_WITH = 'Starts With';
GmCXt.ENDS_WITH = 'Ends With';
GmCXt.GREAT_THAN = 'Greater Than';
GmCXt.LESS_THAN = 'Less Than';
GmCXt.TXT_MATCHES = 'Text Matches';
GmCXt.TXT_CONTAINS = 'Text Contains';
GmCXt.ATTRIBUTES = 'Has Attribute(s)';
GmCXt.NOT_ATTRIBUTES = 'Excludes Attribute(s)';
GmCXt.CLASSES = 'Has CSS Class(s)';
GmCXt.NOT_CLASSES = 'Excludes CSS Class(s)';
GmCXt.SELECTED = 'Is Selected';
GmCXt.NOT_SELECTED = 'Is Not Selected';
GmCXt.CHECKED = 'Checked';
GmCXt.NOT_CHECKED = 'Unchecked';
GmCXt.DISABLED = 'Is Disabled';
GmCXt.NOT_DISABLED = 'Not Disabled';
GmCXt.DAY_OF_WEEK = 'Day of the Week';
GmCXt.FIX_TIME = 'Fixed Time in the Day';
GmCXt.DATE_RANGE = 'Date Range';
GmCXt.IS_VALID = 'Get Validity';
GmCXt.VISIBLE = 'Visible';
GmCXt.NOT_VISIBLE = 'Not Visible';

GmCXt.getHostnameFromUrl = function(url) {
    if (url) {
        if (url.includes('https://')) {
            url = url.split('https://')[1];
        }
        if (url.includes('http://')) {
            url = url.split('http://')[1];
        }
        if (url.includes('/')) {
            url = url.split('/')[0];
        }
    }

    return url;
};

GmCXt.getUrlScheme = function() {
    var scheme = "http";
    var url = GmCXt._location().href;

    if (url.indexOf('https://') !== -1) {
        scheme = "https";
    }

    return scheme;
};

/**
 * @function filter URL scheme  
 */
GmCXt.filterUrlScheme = function(url) {
    if (url.length) {
        if (url[url.length - 1] === "#") {
            url = url.substr(0, url.length - 1);
        }
        if (url[url.length - 1] === "/") {
            url = url.substr(0, url.length - 1);
        }
    }

    if (url.indexOf('https://') !== -1) {
        url = url.split('https://')[1];
    }
    if (url.indexOf('http://') !== -1) {
        url = url.split('http://')[1];
    }

    return url;
};

GmCXt.sendMessageToBackgroundService = function(m, cb) {
    if (m.data) {
        m.mgdata = m.data;
        delete m.data;
    }
    if (m && GmCXt.isExtension()) {
        if (GmCXt.browserApp === 'chrome') {
            chrome.runtime.sendMessage(m, cb);
        } else if (GmCXt.browserApp === 'Safari') {
            safari.extension.dispatchMessage(m.action, m.mgdata);
            if (cb) {
                cb(1);
            }
        } else if (typeof browser !== 'undefined') {
            browser.runtime.sendMessage(m, cb);
        }
    } else if (cb) {
        cb(1);
    }
};

GmCXt.loader = function() {
    return GmCXt.getBasePath('common/img/g_new_loader.gif');
};

GmCXt.decodeVersion = function(v) {

    if (!v) return 0;

    var num = [0, 0, 0];
    v = v.split('.');
    num[0] = v[0];
    num[1] = doubleDigit(v[1]);
    num[2] = doubleDigit(v[2]);
    if (v[3]) {
        num.push(doubleDigit(v[3]));
    } else {
        num.push("00");
    }

    return parseInt(num.join(''));

    function doubleDigit(num) {
        if (num && num <= 9 && num.length === 1) {
            num = "0" + num.slice(-2);
        }
        return num;
    }
};

GmCXt.getRuleTypeAnd = function() {
    var rule = GmCXt.getEmptyRule();
    rule.logical_condition = "&&";

    return rule;
};

GmCXt.arrayMerge = function(array1, array2) {
    return array1.concat(array2.filter(function(item) {
        return array1.indexOf(item) < 0;
    }));
};

GmCXt.isNotNull = function(val) {
    if (val != null) return true;
    else return false;
};

GmCXt.isNumeric = function(val) {
    if (val !== undefined && mg$.isNumeric(val)) return true;
    else return false;
};

GmCXt.isTagged = function(el) {
    var val = false;
    if (el) {
        var className = el.attr('class');
        var parentClassName = el.parent().attr('class');

        if (className && className.indexOf('mg-ft-tag') !== -1)
            val = className;
        else if (parentClassName && parentClassName.indexOf('mg-ft-tag') !== -1)
            val = parentClassName;
    }

    return val;
};

GmCXt.getTagStepAndTourId = function(classStr) {
    var classes = classStr.split(' ');
    for (var i = 0; i < classes.length; i++) {
        if (classes[i].indexOf('mgftag') !== -1) {
            var ids = classes[i].split('-');
            return {
                step_id: ids[1],
                tour_id: ids[2],
                group_id: ids[3].replaceAll(':', "-")
            };
        }
    }
};

GmCXt.tagClassName = function(step) {
    return 'mgftag-' + step.step_id + '-' + step.tour_id + '-' + step.step_settings.groupId.replaceAll('-', ":");
};

GmCXt.isGmElement = function(el) {
    var isGmElement = false;

    isGmElement = (
        el &&
        (
            el.parent('wmgPlayerJSTest2_').length ||
            el.parent('.mgPlayerJSTest2_beacon-icon').length ||
            el.parent('.mgPlayerJSTest2_smarttip-icon').length ||
            el.parents('wmgPlayerJSTest2_').length
        )
    );

    if (!isGmElement && el) {
        var className = el.attr('class');
        var parentClassName = el.parent().attr('class');

        if ((className && className.indexOf('mgPlayerJSTest2_') !== -1) || (parentClassName && parentClassName.indexOf('mgPlayerJSTest2_') !== -1))
            isGmElement = true;
    }

    return isGmElement;
};

GmCXt.onImageLoadError = function(obj) {

    var isCDNCheck = obj.hasClass('mgPlayerJSTest2_cdnChecked');
    var cn, isMyGuideImage, isSrcEmpty, src;

    var updateSign = function() {
        if (isMyGuideImage && !isSrcEmpty) {

            GmCXt.failedImages.push(obj);

            if (window.self === window.top) {
                GmCXt.getCdnSignature(true);
            } else {
                var m = {
                    action: 'mgPlayerJSTest2_action:get_cdn_signature',
                };
                GmCXt.sendToParentWindow(m);
            }
        } else if (obj.hasClass('mgPlayerJSTest2_dap-card-image')) {
            obj.attr('src', GmCXt.conf.staticContentPath + 'technology.jpg');
        }
    };

    if (obj && obj.length && (obj[0].tagName === 'IMG' || GmCXt.isGmElement(obj)) && !isCDNCheck) {

        cn = 'mgPlayerJSTest2_custom-image'; // Never do this 'gss'
        isMyGuideImage = obj.hasClass(cn);
        if (GmCXt.isGmElement(obj) && obj[0].tagName === 'SOURCE') {
            isMyGuideImage = true;
        }

        isSrcEmpty = (obj.attr('src') && obj.attr('src').length) ? false : true;

        src = obj.attr('src');

        obj.addClass('mgPlayerJSTest2_cdnChecked');
        updateSign();
    }
};

GmCXt.isLXP = function() {
    if (GmCXt.conf.appConfig.isLXP)
        return true;
    else
        return false;
};

GmCXt.isAutomationStep = function(step) {
    return step && (step.step_type !== GmCXt.STEP_TYPE_TAG && (step.step_type === GmCXt.STEP_TYPE_AUTOMATION || step.step_settings.creation_type === GmCXt.STEP_TYPE_AUTOMATION));
};

GmCXt.currentTimeStamp = function() {
    return Math.floor((new Date()).getTime() / 1000);
};

GmCXt.inArray = function(id, array) {
    if (mg$.inArray(parseInt(id), array) !== -1) return true;
    else return false;
};

GmCXt.removeDuplicates = function(iArr) {
    var oArr = [];
    mg$.each(iArr, function(i, el) {
        if (mg$.inArray(el, oArr) === -1) oArr.push(el);
    });
    return oArr;
};

GmCXt.convertToInt = function(arr) {
    return arr.map(function(v) {
        return parseInt(v, 10);
    });
};

GmCXt.textTruncate = function(str, length, ending) {
    if (length == null) {
        length = 100;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
};

GmCXt.migrateMatchAlgoSetting = function(de) {

    var c = mg$.extend(true, {}, de.criteria);
    var m = mg$.extend(true, {}, de.meta);
    var tempde = mg$.extend(true, {}, de);

    if ((c.precision_type === GmCXt.DOM_CRITERIA_JQUERY && c.jquery_selector_builder) ||
        (c.precision_type === GmCXt.DOM_CRITERIA_CUSTOM && !c.jquery_selector)) {
        // Old jQuery selector builder (later renamed as custom selector)
        c.jquery_selector = null;
        delete c.jquery_selector_builder;
        c.precision_type = GmCXt.DOM_CRITERIA_DEFAULT;
    }

    if (c.precision_level === "High" && (GmCXt.decodeVersion(tempde.version) < 2020041502)) {
        c.precision_level = "Medium";
    }

    if (c.precision_type === GmCXt.DOM_CRITERIA_JQUERY) {
        c.precision_type = GmCXt.DOM_CRITERIA_CUSTOM;
        var selectorArray = [c.jquery_selector];
        c.matchAttributes = Object.keys(GmCXt.dom.getAttributes(selectorArray)[0]);
        c.matchAttributes.splice(c.matchAttributes.indexOf('tagName'), 1);
    }

    if (c.precision_type === GmCXt.DOM_CRITERIA_TEXT)
        c.precision_type = GmCXt.DOM_CRITERIA_DEFAULT;

    if (!GmCXt.isEmpty(tempde.selector)) {
        for (var key in tempde.selector) {
            if (GmCXt.isEmpty(tempde.selector[key]))
                delete tempde.selector[key];
        }

        if (tempde.selector.hasOwnProperty('css')) {
            delete tempde.selector.css;
        }

        if (m.attributes && m.attributes.hasOwnProperty('js')) {
            m.selectorAttributes = mg$.extend(true, {}, m.attributes);
            for (key in tempde.selector) {
                if (!m.selectorAttributes.hasOwnProperty(key)) {
                    m.selectorAttributes[key] = [];
                }
            }
            delete m.attributes;
        }

        if (!m.hasOwnProperty('executionPriority')) {
            if (GmCXt.isEmpty(m.selectorAttributes)) {
                m.selectorAttributes = GmCXt.getAttributesFromSelector(tempde.selector);
            }
            m.executionPriority = GmCXt.getSelectorExecutionPriority(m.selectorAttributes);
        }
    } else {
        m.executionPriority = ['text'];
    }

    tempde.criteria = c;
    tempde.meta = m;

    return tempde;
};

GmCXt.getAttributesFromSelector = function(sel) {
    var matchedAttr = {};
    for (var key in sel) {
        matchedAttr[key] = [];

        var selectorAttr = GmCXt.dom.getMatchAttributes(key);
        var jsSelector = sel[key];

        for (var i = 0; i < selectorAttr.length; i++) {
            var attr = selectorAttr[i];

            for (var j = 0; j < jsSelector.length; j++) {

                var present = false;
                if (jsSelector[j].includes("[" + attr + "=")) {
                    present = true;
                } else if (attr === 'text') {
                    if (jsSelector[j].includes("[placeholder=") || jsSelector[j].includes("[value="))
                        present = true;
                }

                if (present) {
                    matchedAttr[key].push(attr);
                    break;
                }
            }
        }
    }
    return matchedAttr;
};

GmCXt.getSelectorExecutionPriority = function(selectorAttributes) {
    var priority = Object.keys(selectorAttributes);
    priority.push('text');

    function getNumberOfAttrs(s) {
        if (s === 'text')
            return 3; // Prioritize text selector above jsSelectors with attribute length < 3
        else if (s === 'custom')
            return 0;
        else
            return selectorAttributes[s].length;
    }

    priority = priority.sort(function(a, b) {
        l1 = getNumberOfAttrs(a);
        l2 = getNumberOfAttrs(b);

        // Sort in desc order of length
        if (l2 > l1) return 1;
        if (l2 < l1) return -1;

        return 0;
    });

    return priority;
};

GmCXt.containBranchStep = function(tour) {
    if (!tour && !GmCXt.isDefined(tour.steps)) return false;

    var steps = mg$.extend({}, tour.steps);
    for (var ind in steps) {
        var step = steps[ind];
        if (GmCXt.checkForBranchVariationSteps(step)) {
            return true;
        }
    }
    return false;
};

GmCXt.extendArray = function(arr) {
    var p = mg$.extend({}, arr);
    var newArr = [];
    for (var k in p) {
        if (p.hasOwnProperty(k)) {
            newArr.push(p[k]);
        }
    }
    return newArr;
};

GmCXt.getRuleText = function(el) {
    var elValue = '';
    var elTagName = el.tagName.toLowerCase();

    if (elTagName === 'select') {
        elValue = el.options[el.selectedIndex].textContent;
    } else if (elTagName === 'input' && el.value) {
        elValue = el.value;
    } else {
        elValue = el.textContent.trim();
    }
    return elValue;
};

GmCXt.getElementText = function(el) {

    var elValue = GmCXt.getRuleText(el);

    if (!elValue) {

        var value = el.getAttribute('value');
        var placeholder = el.getAttribute('placeholder');
        var name = el.getAttribute('name');

        if ((el.tagName === 'INPUT' || el.tagName === 'BUTTON') &&
            (el.type === 'submit' || el.type === 'button') &&
            value
        ) {
            elValue = value;
        }

        if (!elValue && el.tagName === 'INPUT' && placeholder) {
            elValue = placeholder;
        }
        if (!elValue && el.tagName === 'INPUT' && name) {
            elValue = name;
        }
    }

    return elValue.trim();
};

GmCXt.defaultTrue = function(val) {
    if (typeof val === 'undefined')
        return true;
    else
        return val;
};

GmCXt.getOrgLevelBrandLogoSetting = function() {
    return GmCXt.getStepSettings().hideBrandLogo;
};

GmCXt.convertType = function(value) {
    var v = Number(value);
    return !isNaN(v) ? v :
        value === "undefined" ? undefined :
        value === "null" ? null :
        value === "true" ? true :
        value === "false" ? false :
        value;
};

GmCXt.isMyGuideIframe = function(url) {
    if (url.indexOf('side_panel/src/index.html') !== -1) {
        return true;
    } else
        return false;
};

GmCXt.getCurrentStepIndex = function(t, step_id) {
    var index = -1;
    if (t && step_id) {
        t.steps.forEach(function(step, i) {
            if (step.step_id === step_id) {
                index = i;
            }
        });
    } else {
        GmCXt.playerI.tour.steps.forEach(function(step, i) {
            if (step.step_id == GmCXt.playerI.currentStepId) {
                index = i;
            }
        });
    }
    return index;
};

GmCXt.isOne = function(val) {
    if (val && val.length === 1) return true;
    else return false;
};

GmCXt.isZero = function(val) {
    if (val && val.length === 0) return true;
    else return false;
};

GmCXt.isMoreThanOne = function(val) {
    if (val && val.length > 1) return true;
    else return false;
};

GmCXt.isMany = function(val) {
    if (val && val.length > 0) return true;
    else return false;
};

GmCXt.reverse = function(s) {
    return mg$.extend([], s).reverse();
};

GmCXt.getValidationTypes = function(val) {
    return {
        required: val,
        numeric: val,
        date: val,
        time: val,
        email: val,
        url: val,
        phone: val,
        charCount: val,
        bulletCount: val,
        regex: val
    };
};

GmCXt.getDiableEleDefaultVal = function() {
    return {
        opacity: '0.5',
        color: '#C0C0C0'
    };
};

GmCXt.isFalse = function(val) {
    if (val === 0 || val === 'false' || val === false || val === '0' || val === '' || val === "undefined" || val === undefined)
        return true;
    else
        return false;
};

GmCXt.validateText = function(str) {
    str = str.trim();
    return str != '' && str.length > 0 && str.length < 100;
};

GmCXt.getStepInfoLog = function(step) {
    var title = step.step_title;
    if (step.step_type === 'smartTip') {
        title = step.step_settings.smartTip.guidanceMessage;
    }

    title = mg$('<span />').html(GmCXt.updateOrgAndAddSignature(title)).text().trim();
    if (title.length > 50) {
        title = title.substr(0, 50);
    }
    return "[" + step.step_type.toUpperCase() + "] [" + step.step_id + "] " + title;
};

GmCXt.isAnonymousUser = function() {
    if (GmCXt.user && !GmCXt.isEmpty(GmCXt.organization)) {
        var anonymous = 'anonymous-' + GmCXt.organization.organization_id;
        var userEmail = GmCXt.user.user_email;

        if ((userEmail.indexOf(anonymous) !== -1 || userEmail === 'End+user@edcast.com') && !GmCXt.user.signin_user_email) 
            return true;
        else
            return false;
    } else
        return false;
};

GmCXt.getAttributePriority = function(attr, el) {
    switch (attr) {
        case 'id':
            return 1;
        case 'class':
            return 2;
        case 'text':
        case 'name':
        case 'title':
        case 'placeholder':
            return 3;
        default: {
            if (attr === 'value' && el.tagName !== 'INPUT')
                return 3;

            if (attr.includes('Id') || attr.toLowerCase().indexOf('id') === 0 ||
                attr.toLowerCase().includes('_id') || attr.toLowerCase().includes('-id')) {
                return 1;
            }

            if (attr.indexOf('aria') === 0)
                return 4;

            if (typeof el.getAttribute(attr) === 'boolean')
                return 5;

            return 6;
        }
    }
};

GmCXt.skipMyGuideAttributes = function(attr) {
    attr = attr.filter(function(attr) {
        return (attr.indexOf('gm') !== 0);
    });
    return attr;
};

GmCXt.skipSpecialCharValues = function(attrList, he) {

    var textAttr = ['text', 'placeholder', 'value', 'title', 'name'];

    attrList = attrList.filter(function(attr) {
        if (attr === 'text') return true;

        value = he.getAttribute(attr);
        if (!GmCXt.isEmpty(value)) {
            if (textAttr.includes(attr)) return true;

            if (!value.match(/[[\]{}():*+?.,\\^$|#]/g)) return true;
        }

        return false;
    });

    return attrList;
};

GmCXt.skipMyGuideClasses = function(attrList, meta) {
    if (meta && meta.elAttributes && !meta.elAttributes.class) {
        var index = attrList.indexOf('class');
        if (index > -1) {
            attrList.splice(index, 1);
        }
    }
    return attrList;
};

GmCXt.getCustomMatchAttributes = function(he, meta) {
    var attrList = he.getAttributeNames();

    if (!GmCXt.isEmpty(meta.textPropertyValue) && meta.textPropertyName === 'textContent')
        attrList.push('text');

    attrList = GmCXt.skipMyGuideAttributes(attrList);

    attrList = GmCXt.skipSpecialCharValues(attrList, he);

    attrList = GmCXt.skipMyGuideClasses(attrList, meta);

    return attrList;
};

GmCXt.isClickableColumnHeader = function(el) {
    if (!GmCXt.isEmpty(el.customSettings)) {
        for (var key in el.customSettings) {
            if (!GmCXt.isEmpty(el.customSettings[key])) {
                var s = el.customSettings[key];
                break;
            }
        }
        if (s && s.tableCategory && s.isClickable) {
            return true;
        }
    }
    return false;
};

GmCXt.visibleInViewport = function(pos, winHeight, winWidth) {

    var elHeight = Math.abs(pos.height);
    var elWidth = Math.abs(pos.width);

    var elTop = pos.top;
    var elBottom = pos.top + elHeight;
    var elLeft = pos.left;
    var elRight = pos.left + elWidth;

    var bufferH = Math.round(winHeight * 12 / 100);
    var bufferW = Math.round(winWidth * 12 / 100); // 12% buffer

    bufferH = bufferH > elHeight ? 0 : bufferH;
    bufferW = bufferW > elWidth ? 0 : bufferW; // Do not use buffer for elements smaller than buffer

    if (elTop > (winHeight - bufferH) || elBottom < bufferH ||
        elLeft > (winWidth - bufferW) || elRight < bufferW) { // Completely outside window
        return false;
    }

    if (elHeight > winHeight || elWidth > winWidth) { // Do not check partially-in-viewport for el bigger than viewport
        return true;
    }

    return !(elTop < 0 || elBottom > winHeight ||
        elLeft < 0 || elRight > winWidth); //partially in viewport
};

GmCXt.sendToParentWindow = function(m) {
    if (m.data) {
        if (GmCXt.isDefined(GmCXt.isSidePanelApp)) {
            m.data.fromSidePanel = GmCXt.isSidePanelApp;
        }

        if (m.action !== "mgPlayerJSTest2_action:update_custom_labels" &&
            m.action !== "mgPlayerJSTest2_action:set_lang_content_script" &&
            m.action !== "mgPlayerJSTest2_action:update:player_mode" &&
            m.action !== "mgPlayerJSTest2_action:save_user_info" &&
            m.action !== "mgPlayerJSTest2_action:payload_event_call"
        ) {
            m.data.user = GmCXt.user;
        }

        if (m.action === "mgPlayerJSTest2_action:payload_event_call") {
            delete m.data.fromSidePanel;
        }
    }
    parent.postMessage(GmCXt.formatMsg(m), "*");
};

GmCXt.msgToThisWin = function(m) {
    window.postMessage(GmCXt.formatMsg(m), "*");
};

GmCXt.handleError = function(apiName) {
    console.dir("There is error in API response: " + apiName);
};

GmCXt.getBrandingSetting = function() {
    var setting = false;
    if (GmCXt.appList) {
        var activeApp = GmCXt.appList['app:' + GmCXt.activeAppId];
    }

    if (activeApp && activeApp.settings) {
        setting = activeApp.settings;
    }
    return setting;
};

GmCXt.getBrandLogo = function() {
    return GmCXt.getBrandingSetting().logo;
};

GmCXt.brandLogo = function() {

    var brandLogo = GmCXt.getDefaultIcon();
    var logo = GmCXt.getBrandLogo();

    if (logo && !GmCXt.isDefaultIcon(logo)) {
        brandLogo = logo + GmCXt.getCdnSign();
    }

    return brandLogo;
};

GmCXt.getPopupLogo = function() {
    var brandLogo = GmCXt.getDefaultIcon();

    var logo = GmCXt.getBrandLogo();
    if (logo && !GmCXt.isDefaultIcon(logo)) {
        brandLogo = logo + GmCXt.getCdnSign();
    }

    return "<img class='mgPlayerJSTest2_logo-image' src='" + brandLogo + "' alt='" + GmCXt.label.brandLogo + "' />";
};

GmCXt.seggregateRules = function(ruleGroup) {
    var rules = {
        dom: [],
        url: [],
        api: []
    };
    for (var i = 0; i < ruleGroup.length; i++) {
        rule = ruleGroup[i];
        if (rule.type.includes('Select ')) {
            rule.domRule = true;
            rules.dom.push(rule);
            ruleGroup.checkDom = true;
        } else if (rule.condition === 'Get Validity') {
            rule.apiRule = true;
            rules.api.push(rule);
            ruleGroup.checkApi = true;
        } else {
            rules.url.push(rule);
        }
    }
    return rules;
};

GmCXt.numberOfDomRules = function(rules) {
    var count = 0;
    for (var i = 0; i < rules.length; i++) {
        if (rules[i].type === 'Select Element' || rules[i].type === 'Select Table') {
            count++;
        }
    }
    return count;
};

GmCXt.buildGuidePlayStructure = function(tour) {
    var steps = tour.steps;
    var playStructure = [];
    for (var i = 0, j = steps.length; i < j; i++) {
        var item = {
            id: steps[i].step_id
        };
        if (steps[i + 1]) item.tail = steps[i + 1].step_id;
        else item.tail = null;

        playStructure.push(item);
    }

    return playStructure;
};

GmCXt.getStepsForPS = function(steps, type) {
    if (GmCXt.playerI && (GmCXt.playerI.automate || GmCXt.playerI.isAutomation) || GmCXt.isAutomationRunning() || type === "doitforme") {
        return steps;
    } else {
        return GmCXt.filterOutAutomationSteps(steps);
    }
};

GmCXt.getGuidePlayStructure = function(tour, type) {

    var playStructure = tour.tour_settings.play_structure;
    tour.steps = GmCXt.getStepsForPS(tour.steps, type);

    if (!GmCXt.containBranchStep(tour)) {
        return GmCXt.buildGuidePlayStructure(tour);

    } else if (mg$.isArray(playStructure) && playStructure.length) {
        playStructure = GmCXt.repairPlayStructure(playStructure, tour.steps);
        return playStructure;
    }
};

GmCXt.initialiseRuleGroup = function() {
    var rule = GmCXt.getEmptyRule();
    return GmCXt.ruleEngine.getGroupedRules([rule]);
};

GmCXt.reloadFailedImages = function() {
    if (GmCXt.failedImages && GmCXt.failedImages.length) {
        for (var i = 0; i < GmCXt.failedImages.length; i++) {
            var obj = GmCXt.failedImages[i];
            if (obj.length) {
                var src = obj.attr('src');
                if (src) {
                    src = src.split("?");
                    if (src[0] && src.length > 1) {
                        var newSrc = src[0] + GmCXt.getCdnSign();
                        obj.attr('src', newSrc);
                    }
                }
            }
        }

        GmCXt.failedImages = [];
    }

    if (window.self === window.top) {
        var msg = "mgPlayerJSTest2_action:reload_images";
        GmCXt.sendMessageToApp(msg);
        GmCXt.sendMessageToStepFrame(msg);
    }

    GmCXt.waitForCdnSignature = false;
};

GmCXt.getRuleTypes = function(urlOnly, skipFreq, skipEl, skipVar, showUserCreationDate, showDate, showTime) {

    var rules = [{
        'name': `${GmCXt.label.url}`,
        'value': 'URL'
    }, {
        'name': `${GmCXt.label.urlHostname}`,
        'value': 'URL Hostname'
    }, {
        'name': `${GmCXt.label.urlPath}`,
        'value': 'URL Path'
    }, {
        'name': `${GmCXt.label.urlParameter}`,
        'value': 'URL Parameters'
    }, {
        'name': `${GmCXt.label.urlHash}`,
        'value': 'URL Hash'
    }, {
        'name': `${GmCXt.label.pageTitle}`,
        'value': 'Page Title'
    }];

    if (!urlOnly) {
        if (!skipFreq) {
            rules.push({
                'name': `${GmCXt.label.displayFrequency}`,
                'value': 'Display Frequency'
            });
        }
        var variable = GmCXt.getVariableData();

        if (!skipVar && variable && variable.length > 0) {
            rules.push({
                'name': `${GmCXt.label.variables}`,
                'value': 'Variables'
            });
        }

        if (!skipEl) {
            rules.push({
                'name': `${GmCXt.label.selectElement}`,
                'value': 'Select Element'
            });
        }
    }

    if (showUserCreationDate) {
        rules.push({
            'name': `${GmCXt.label.userCreationDate}`,
            'value': 'Creation Date'
        });
    }

    if (showDate) {
        rules.push({
            'name': `${GmCXt.label.date}`,
            'value': 'Date'
        });
    }

    if (showTime) {
        rules.push({
            'name': `${GmCXt.label.time}`,
            'value': 'Time'
        });
    }

    return rules;
};

GmCXt.getRuleOperators = function(apiRule) {
    var conditionsArr = [{
        'type': 'URL',
        'condition': [GmCXt.EQUALS, GmCXt.NOT_EQUAL, GmCXt.CONTAINS, GmCXt.NOT_CONTAINS, GmCXt.STARTS_WITH, GmCXt.ENDS_WITH]
    }, {
        'type': 'URL Hostname',
        'condition': [GmCXt.EQUALS, GmCXt.NOT_EQUAL, GmCXt.CONTAINS, GmCXt.NOT_CONTAINS, GmCXt.STARTS_WITH, GmCXt.ENDS_WITH]
    }, {
        'type': 'URL Path',
        'condition': [GmCXt.EQUALS, GmCXt.NOT_EQUAL, GmCXt.CONTAINS, GmCXt.NOT_CONTAINS, GmCXt.STARTS_WITH, GmCXt.ENDS_WITH]
    }, {
        'type': 'URL Parameters',
        'condition': [GmCXt.EQUALS, GmCXt.NOT_EQUAL, GmCXt.CONTAINS, GmCXt.NOT_CONTAINS, GmCXt.STARTS_WITH, GmCXt.ENDS_WITH]
    }, {
        'type': 'URL Hash',
        'condition': [GmCXt.EQUALS, GmCXt.NOT_EQUAL, GmCXt.CONTAINS, GmCXt.NOT_CONTAINS, GmCXt.STARTS_WITH, GmCXt.ENDS_WITH]
    }, {
        'type': 'Page Title',
        'condition': [GmCXt.EQUALS, GmCXt.NOT_EQUAL, GmCXt.CONTAINS, GmCXt.NOT_CONTAINS, GmCXt.STARTS_WITH, GmCXt.ENDS_WITH]
    }, {
        'type': 'Other Element on Page',
        'condition': [GmCXt.EXISTS, GmCXt.NOT_EXISTS]
    }, {
        'type': 'Window Variable',
        'condition': [GmCXt.EQUALS, GmCXt.NOT_EQUAL, GmCXt.CONTAINS, GmCXt.NOT_CONTAINS, GmCXt.STARTS_WITH, GmCXt.ENDS_WITH]
    }, {
        'type': 'Display Frequency',
        'condition': [GmCXt.DAY_OF_WEEK, GmCXt.FIX_TIME, GmCXt.DATE_RANGE]
    }, {
        'type': 'Select Element',
        'condition': [GmCXt.EXISTS, GmCXt.NOT_EXISTS, GmCXt.VISIBLE, GmCXt.NOT_VISIBLE]
    }, {
        'type': 'Variables',
        'condition': [GmCXt.TXT_EQUALS, GmCXt.NOT_TXT, GmCXt.TXT_CONTAINS, GmCXt.NOT_CONTAINS, GmCXt.TXT_MATCHES],
        'variableData': GmCXt.getVariableData()
    }, {
        'type': 'Creation Date',
        'condition': [GmCXt.EQUALS, GmCXt.GREAT_THAN, GmCXt.LESS_THAN],
    }, {
        'type': 'Date',
        'condition': [GmCXt.EQUALS, GmCXt.GREAT_THAN, GmCXt.LESS_THAN],
    }, {
        'type': 'Time',
        'condition': [GmCXt.EQUALS, GmCXt.GREAT_THAN, GmCXt.LESS_THAN],
    }];

    if (apiRule) {
        conditionsArr[10].condition.push(GmCXt.IS_VALID);
    }

    return conditionsArr;
};

GmCXt.getEmptyRule = function() {
    return {
        'type': '',
        'name': '',
        'condition': '',
        'value': '',
        'logical_condition': ''
    };
};

GmCXt.getLXPLang = function() {
    if (GmCXt.isLXP() && !GmCXt.isFalse(GmCXt.mgActiveLang) && GmCXt.mgActiveLang.indexOf('en-') === -1)
        return GmCXt.mgActiveLang;
    else
        return false;
};

GmCXt.getOrgSettings = function() {

    var os = false;

    if (GmCXt.organization && !GmCXt.isEmpty(GmCXt.organization)) {
        os = GmCXt.organization.settings;
    }

    return os;
};

GmCXt.getWidgetSettings = function() {

    var ws = false;

    if (GmCXt.appList && GmCXt.activeAppId) {
        var activeApp = GmCXt.appList['app:' + GmCXt.activeAppId];

        if (activeApp && activeApp.settings) {
            ws = activeApp.settings;
            ws.clientVersion = activeApp.settings.version;
        }
    }
    if (GmCXt.isWestpac()) {
        ws.guide_count_on_widget = false;
    }

    return ws;
};

GmCXt.getStepSettings = function() {

    var appSettings = false;

    if (!GmCXt.isEmpty(GmCXt.appList)) {
        var activeApp = GmCXt.appList['app:' + GmCXt.activeAppId];

        if (activeApp && activeApp.settings) {
            appSettings = activeApp.settings;
        }
    } else if (window.self !== window.top && !GmCXt.isEmpty(GmCXt.activeAppSettings)) {
        appSettings = GmCXt.activeAppSettings;
    }

    if (GmCXt.isDesktop()) {
        appSettings = (!GmCXt.isEmpty(GmCXt.playerI.tour.steps[0].orgSettings)) ? GmCXt.playerI.tour.steps[0].orgSettings : GmCXt.playerI.tour.steps[0].appSettings;
        appSettings = GmCXt.validateDataModel(appSettings, GmCXt.model.organization.settings._obj);
    }

    return appSettings;
};

GmCXt.getAppSetting = function(opt) {
    var appSettings = false;
    if (!GmCXt.isEmpty(GmCXt.appList) && GmCXt.activeAppId) {

        if (!GmCXt.appList['app:' + GmCXt.activeAppId] && GmCXt.user) {
            GmCXt.logoutUser();
        } else {
            appSettings = GmCXt.appList['app:' + GmCXt.activeAppId].settings;
        }

    } else if (window.self !== window.top && !GmCXt.isEmpty(GmCXt.activeAppSettings)) {
        appSettings = GmCXt.activeAppSettings;
    }

    if (appSettings && opt) {
        return appSettings[opt];
    }

    return appSettings;
};

GmCXt.getCdnSign = function() {
    var sign = '';

    if (GmCXt.user) {
        sign = GmCXt.user.cdn_signature;
    }

    return sign;
};

GmCXt.serviceNow = function() {
    if (GmCXt.urlParts.host.indexOf("service-now.com") !== -1)
        return true;
    else
        return false;
};

GmCXt.getDefaultIcon = function() {
    return GmCXt.conf.staticContentPath + GmCXt.conf.appConfig.defaultIcon;
};

GmCXt.getChatDefaultIcon = function() {
    return GmCXt.conf.staticContentPath + "chat_bot_icon.png";
};

GmCXt.getDefaultGuideIcon = function() {
    return GmCXt.conf.staticContentPath + 'default_guide.png';
};

GmCXt.isFalseObj = function(o) {
    if (!o || typeof o !== "object") return true;

    var r = true;
    for (var i in o) {
        if (o[i] === true) {
            r = false;
            break;
        }
    }
    return r;
};

GmCXt.getRectObject = function(rect) {
    var obj = {
        top: rect.top,
        left: rect.left,
        bottom: rect.bottom,
        right: rect.right,
        width: rect.width,
        height: rect.height,
        x: rect.x,
        y: rect.y
    };
    return obj;
};

GmCXt.redirect = function(to) {
    GmCXt.log(1, "ROUTE to " + to);
    GmCXt.timeout(function() {
        location.replace(to);
    }, 0);
};

GmCXt.getPosition = function(cssPos) {
    if (cssPos) {
        return 'mgPlayerJSTest2_fixed-position';
    } else {
        return 'mgPlayerJSTest2_absolute-position';
    }
};

GmCXt.isInspectToolON = function() {

    if ((GmCXt.selectorTool && GmCXt.selectorTool.status !== 'inactive') ||
        (GmCXt.selectorToolFill && GmCXt.selectorToolFill.status !== 'inactive') ||
        (GmCXt.selectorToolRules && GmCXt.selectorToolRules.status !== 'inactive')
    ) {
        return true;
    }

    return false;
};

GmCXt.getExtUrl = function(localUrl) {
    var url = GmCXt.getBrowserUrl(localUrl);

    return url;
};

GmCXt.getBaseUrl = function(f) {

    if (GmCXt.isExtension()) {
        return GmCXt.getExtUrl(f);
    } else {
        if (GmCXt.isClientJs() && !GmCXt.conf.baseUrl && GmCXt.conf.clientJsBaseUrl) {
            GmCXt.conf.baseUrl = GmCXt.conf.clientJsBaseUrl;
        }
        return GmCXt.conf.baseUrl + f;
    }
};

GmCXt.capitalizeFirstLetter = function(str) {
    str = str || "";
    return str.charAt(0).toUpperCase() + str.slice(1);
};

GmCXt.encode = function(args) {
    var data = '';
    if (args) {
        var argcount = 0;
        for (var key in args) {
            if (args.hasOwnProperty(key)) {
                if (argcount++) data += '&';
                data += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
            }
        }
    }
    return data;
};

GmCXt.returnNavigator = function() {
    return navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia;
};

GmCXt.getDefaultError = function() {
    return {
        code: 403,
        message: [GmCXt.unknownError]
    };
};

GmCXt.getCodeError = function() {
    return {
        code: 405,
        message: [GmCXt.unknownError]
    };
};

GmCXt.getIcons = function(imgPath, target, cb) {

    var p = 'common/icons/' + imgPath;
    p = GmCXt.getBaseUrl(p);

    mg$.get(p, function(data) {
        target.html(data);
        if (cb) cb();
    });
};

GmCXt.externalApiCall = function(url) {
    var params = {
        url: url,
        method: 'GET',
        data: '',
    };
    var promise = GmCXt.xhr(params, true, true);

    return promise;
};

GmCXt.checkFileExist = function(url) {

    var params = {
        url: url,
        method: 'GET',
    };
    var promise = GmCXt.xhr(params, true);

    return promise;
};

/**
 * @function
 * @returns Current webpage url
 */
GmCXt.getUrl = function() {
    var url = GmCXt._location().href;
    return GmCXt.filterUrlScheme(url);
};

GmCXt.checkWorkdayTextfield = function(el, identifier) {
    var customSettings = el.customSettings;
    if (customSettings && customSettings.workday && !customSettings.workday.isTableHeader) {
        var workday = customSettings.workday;
        if (!workday.isWDCustomSelect || identifier !== 'rules-engine-request') {
            return Object.keys(workday).some(function(k) {
                return workday[k];
            });
        }
    }

    return false;
};

GmCXt.hasPageScroll = function() {
    if (mg$(document).height() > mg$(window).height()) {
        return true;
    } else {
        return false;
    }
};

GmCXt.filterMyguideClassValue = function(classVal) {
    var classes = [];
    classes = classVal.split(/\s+/);
    classes = classes.filter(function(className) {
        if (className.indexOf("doitforme-") === -1 && className.indexOf("mg-smarttip") === -1) {
            return true;
        }
    });

    classVal = classes.join(' ');
    return classVal.trim();
};

GmCXt.getAttributeValues = function(el, attributes) {

    if (el.nodeType !== 1) {
        return {};
    }

    var attrList = attributes || el.getAttributeNames();

    var attrObj = {
        tagName: el.tagName
    };

    attrList.forEach(function(attr) {
        var value = el.getAttribute(attr);

        if (!GmCXt.isEmpty(value)) {
            attrObj[attr] = value;
        }
    });

    if (attrObj.class) {
        attrObj.class = GmCXt.filterMyguideClassValue(attrObj.class);
        if (GmCXt.isEmpty(attrObj.class)) {
            delete attrObj.class;
        }
    }

    if (el.textContent && el.textContent.length > 500) {
        delete attrObj.text;
    } else if (!GmCXt.isEmpty(el.textContent)) {
        attrObj.text = el.textContent.trim();
    }

    return attrObj;
};

GmCXt.isOnboarding = function(t) {
    if (t && t.tour_type && t.tour_type.indexOf('onboarding_tour') !== -1) return true;
    else return false;
};

GmCXt.isFeatureTags = function(t) {
    if (t && t.tour_type.indexOf('insights') >= 0) return true;
    else return false;
};

GmCXt.isBotGuide = function(t) {
    if (t && t.tour_type === 'bot') return true;
    else return false;
};

GmCXt.isChatEnable = function() {
    var flag = false;
    if (!GmCXt.isEmpty(GmCXt.appList)) {
        var activeApp = GmCXt.appList['app:' + GmCXt.activeAppId];
        if (activeApp && activeApp.settings.enable_chatbot) {
            flag = true;
        }
    }
    return flag;
};

GmCXt.isGuide = function(t) {

    if (GmCXt.isOnboarding(t))
        return false;
    if (t && (
            t.tour_type.indexOf('walkthrough_tour') !== -1 ||
            t.tour_type.indexOf('videoScreencast') !== -1 ||
            t.tour_type.indexOf('videoCapture') !== -1
        )) {
        return true;
    } else
        return false;
};

GmCXt.updateScrollTop = function() {
    if (GmCXt.stepReq.changeElement && GmCXt.stepReq.changeElement.isChanged) {
        var scrollTo = GmCXt.stepReq.changeElement.scrollTo;
        if (GmCXt.stepReq.step.step_type === GmCXt.STEP_TYPE_SMART_TIP) {
            mg$('.create-smarttip-step-wrapper').scrollTop(scrollTo);
        } else {
            mg$('.step-create-section-wrapper').scrollTop(scrollTo);
        }
        delete GmCXt.stepReq.changeElement;
    }
};

GmCXt.printStorageSize = function() {
    var x, xLen, log = [],
        total = 0;
    for (x in localStorage) {
        if (!localStorage.hasOwnProperty(x)) {
            continue;
        }
        xLen = ((localStorage[x].length + x.length) / 1024);
        log.push(x.substr(0, 30) + " = " + xLen.toFixed(2) + " KB");
        total += xLen;
    }
    if (total > 1024) {
        log.unshift("Total = " + (total / 1024).toFixed(2) + " MB");
    } else {
        log.unshift("Total = " + total.toFixed(2) + " KB");
    }

    console.dir(log.join("\n"));
};

GmCXt.getVarSize = function(data) {
    var total = 0;
    data = JSON.stringify(data);
    total = data.length / 1024;
    return total.toFixed(2);
};

GmCXt.enableContinueInParent = function(tour, order) {

    if (GmCXt.containBranchStep(tour)) {
        return true;
    } else if (tour.steps.length) {
        var steps = tour.steps;
        for (var i = 0; i < order - 1; i++) {
            if (steps[i].step_settings.pageReloadOption === 'new_tab') {
                return true;
            }
        }
    }
    return false;
};

GmCXt.initPlayerModeFeatures = function(showPlayer, isMiniPlayer, isPlayerMode) {
    GmCXt.showPlayer = showPlayer;
    GmCXt.isMiniPlayer = isMiniPlayer;
    GmCXt.playerMode = isPlayerMode;
    if (GmCXt.isPlayer()) {
        GmCXt.FT = GmCXt.getPlayerFeatures();
    } else {
        GmCXt.FT = GmCXt.getCreatorAppFeatures();
    }

    if (GmCXt.isMicroPlayer()) {
        mg$(".mgPlayerJSTest2_panel").addClass('mgPlayerJSTest2_theme-mplayer');
    } else {
        mg$(".mgPlayerJSTest2_panel").removeClass('mgPlayerJSTest2_theme-mplayer');
    }
};

GmCXt.matchUrlRegEx = function(regExUrl, url2) {
    var match = false;

    var regexString = '';
    var splitArr = regExUrl.split("[*.]");

    for (var i = 0; i < splitArr.length; i++) {

        if (i === splitArr.length - 1) {
            regexString += splitArr[i];
        } else {
            regexString += splitArr[i] + "([a-zA-Z0-9:!+@#$&()?\\-_`.%+,=\\/]*)";
        }
    }
    var regexPattern = new RegExp("^" + regexString + '$');
    match = regexPattern.test(url2);

    return match;
};

GmCXt.trimAndLowerCaseURL = function(url) {
    var newURL = '';
    url = GmCXt.filterUrlScheme(url);
    if (url) {
        newURL = url.toLowerCase();
        if (newURL.indexOf("www.") === 0) {
            newURL = newURL.slice(4, newURL.length);
        }
    }
    return newURL;
};

function getTailFromBranchStep(branches, e, sId, tour) {
    var bInd = 0;
    var retVal = null;
    var pi = GmCXt.playerI;
    var currentStep = null;
    var getStep = function(stepId, tour) {
        if (stepId) {
            for (var i = 0; i < tour.steps.length; i++) {
                if (parseInt(tour.steps[i].step_id) === parseInt(stepId)) {
                    return tour.steps[i];
                }
            }
        } else {
            return false;
        }
    };

    if (pi) {
        currentStep = getStep(pi.currentStepId, pi.tour);
    } else {
        currentStep = getStep(sId, tour);
    }

    for (bInd = 0; bInd < branches.length; bInd++) {
        if (GmCXt.isStepInlineBranch(currentStep)) {
            if (e) {
                if (bInd === 1) {
                    var b = branches[bInd];
                    if (b.tail) {
                        retVal = b.tail;
                        break;
                    }
                }
            } else {
                var b = branches[bInd];
                if (b.tail) {
                    retVal = b.tail;
                    break;
                }
            }
        } else {
            var b = branches[bInd];
            if (b.tail) {
                retVal = b.tail;
                break;
            }
        }
    }

    return retVal;
}

GmCXt.getTail = function(id, playStructure, e, t) {
    if (!id || !playStructure) return false;

    var tail = null;

    for (var i = 0; i < playStructure.length; i++) {

        if (!GmCXt.isEmpty(playStructure[i]) && parseInt(playStructure[i].id) === parseInt(id)) {

            if (playStructure[i].branch) {
                tail = getTailFromBranchStep(playStructure[i].branch, e, id, t);
            } else {
                tail = playStructure[i].tail;
            }

        }
    }
    let sameTail = GmCXt.numberOfSameTail(tail, playStructure);
    if (sameTail > 1) {
        GmCXt.playerI.mergingFromId = id;
    }
    return tail;
};

GmCXt.getPageDomain = function() {
    var d = (GmCXt._location().host.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[1];
    if (d)
        return d;
    else
        return GmCXt._location().host;
};

GmCXt.getDomain = function(url) {
    url = url.split("/")[0];
    var d = (url.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[1];
    if (d)
        return d;
    else
        return url;
};

GmCXt.getUrlParam = function() {
    var param = '';
    var temp = GmCXt.urlParts.href.split("?");
    if (temp[1]) {
        param = '?' + temp[1];
    }

    return param;
};

GmCXt.getURLWithPort = function() {
    var url = GmCXt.urlParts.host;
    if (GmCXt.urlParts.port) {
        url += ":" + GmCXt.urlParts.port;
    }
    return url;
};

GmCXt.isFQDN = function() {
    var os = GmCXt.getOrgSettings();
    var as = (GmCXt.organization && !GmCXt.isEmpty(GmCXt.organization)) ? GmCXt.organization.admin_settings : {};

    if (!GmCXt.isEmpty(os) && os.fqdn) {
        return true;
    } else if (GmCXt.isPlayer() && as.app_switcher === false) {
        return true;
    } else {
        return false;
    }
};

GmCXt.isDomainInActiveApp = function() {
    if (!GmCXt.isFQDN()) {
        return true;
    }

    var domainMatch = false;
    if (!GmCXt.isEmpty(GmCXt.appList) && GmCXt.activeAppId) {
        var activeApp = GmCXt.appList['app:' + GmCXt.activeAppId];
        var domains = activeApp && activeApp.settings.domains;

        if (activeApp && activeApp.settings && activeApp.settings.sandbox) {
            domainMatch = true;
        } else if (domains) {

            var matchedDomain = GmCXt.getCurrentDomainApp(domains, GmCXt.urlParts.fullUrl);

            if (!GmCXt.isEmpty(matchedDomain)) {
                domainMatch = true;
            }
        }
    }
    return domainMatch;
};

GmCXt.getActiveAppSetting = function() {
    if (GmCXt.isEmpty(GmCXt.appList)) return {};

    var app = GmCXt.appList['app:' + GmCXt.activeAppId];
    if (app && app.settings) {
        return app.settings;
    } else {
        return {};
    }
};

GmCXt.findDomainMatch = function(domainList, fullUrl, oldPathLength) {

    var match = {};

    var url = GmCXt.getHostnameFromUrl(fullUrl);
    url = GmCXt.trimAndLowerCaseURL(url);

    for (var i = 0; i < domainList.length; i++) {
        var appUrl = domainList[i].url;
        appUrl = GmCXt.trimAndLowerCaseURL(appUrl);
        fullUrl = GmCXt.trimAndLowerCaseURL(fullUrl);
        if (appUrl.indexOf('/') >= 0 && fullUrl.indexOf(appUrl) >= 0) {
            var pathLength = (appUrl.match(/\//g) || []).length;
            if (oldPathLength && oldPathLength > pathLength) {
                continue;
            } else {
                match = domainList[i];
                match.pathMatch = true;
                match.pathLength = pathLength;
            }
        } else if (url === appUrl && !oldPathLength) {
            match = domainList[i];
        } else if (appUrl.indexOf("[*.]") > -1) {
            var regExMatch = GmCXt.matchUrlRegEx(appUrl, url);

            if (regExMatch) {
                match = domainList[i];
            }
        }
    }

    return match;
};

GmCXt.getCurrentDomainApp = function(domainList, currUrl, pathLength) {

    if (!domainList) {
        return {};
    }

    if (GmCXt.isElectron()) {
        return GmCXt.getCurrentMyGuideApp(domainList);
    } else {
        return GmCXt.findDomainMatch(domainList, currUrl, pathLength);
    }
};

GmCXt.getCurrentMyGuideApp = function(domainList) {

    var match = {};
    var hostApp = GmCXt.elAppName.toLowerCase();

    for (var i = 0; i < domainList.length; i++) {
        if (domainList[i].appName && (hostApp === domainList[i].appName.toLowerCase())) {
            match = domainList[i];
            break;
        }
    }

    return match;
};

GmCXt.isMirrorApp = function() {
    var isMirrorApp = false;
    if (GmCXt.organization && !GmCXt.isEmpty(GmCXt.organization) && GmCXt.organization.has_mirror_apps &&
        parseInt(GmCXt.organization.has_mirror_apps) !== 0) {
        isMirrorApp = true;
    }
    return isMirrorApp;
};

GmCXt.getBaseAppId = function() {
    var baseAppId = GmCXt.activeAppId;
    if (GmCXt.activeAppId && GmCXt.appList && !GmCXt.inPlayer) {
        for (var key in GmCXt.appList) {
            var app = GmCXt.appList[key];
            if (GmCXt.activeAppId === app.application_id &&
                app.base_app_id && parseInt(app.base_app_id) !== 0) {
                baseAppId = app.base_app_id;
                break;
            }
        }
    }
    return baseAppId;
};

GmCXt.checkDomainInApps = function(url) {

    var ob = {
        domainMatch: false,
        appName: false
    };
    var pathLength = false;

    for (var key in GmCXt.appList) {
        var app = GmCXt.appList[key];
        var domains = app.settings.domains;
        var matchedDomain = GmCXt.getCurrentDomainApp(domains, url, pathLength);

        if (!GmCXt.isEmpty(matchedDomain)) {

            ob = {
                domainMatch: true,
                appName: app.title,
                appId: app.application_id,
                env: matchedDomain.env,
                app_env: matchedDomain.app_env,
                baseAppId: app.base_app_id
            };
        }
        if (matchedDomain.pathLength) {
            pathLength = matchedDomain.pathLength;
        }
    }
    var str = "DOMAIN CHECK. [" + url + "] " + (ob.domainMatch ? "EXISTS" : "DOES NOT EXIST");
    GmCXt.log(1, str, ob);

    return ob;
};

GmCXt.getAppEnvByDomain = function() {

    var activeDomain = GmCXt.checkDomainInApps(GmCXt.urlParts.fullUrl);
    var env;

    if (!GmCXt.isDefined(activeDomain.app_env)) {
        env = 'env_3';
    } else if (GmCXt.isDefined(activeDomain.app_env)) {
        env = activeDomain.app_env;
    }

    GmCXt.log(1, "DOMAIN ENVIRONMENT: " + env);

    return env;
};

GmCXt.updateOrgAndAddSignature = function(str) {

    if (str && GmCXt.containsMedia(str)) {

        if (GmCXt.organization && !GmCXt.isEmpty(GmCXt.organization)) {
            var orgId = GmCXt.organization.organization_id;
            str = str.replace(/[-][0-9]*[/]/g, '-' + orgId + '/');
        }

        str = str.replace(/.mp4(.*?)\"/g, '.mp4' + GmCXt.getCdnSign() + '"');
        str = str.replace(/.gif(.*?)\"/g, '.gif' + GmCXt.getCdnSign() + '"');

        str = str.replace(/.png(.*?)\"/g, '.png' + GmCXt.getCdnSign() + '"');
        str = str.replace(/.html(.*?)\"/g, '.html' + GmCXt.getCdnSign() + '"');
        str = str.replace(/.txt(.*?)\"/g, '.txt' + GmCXt.getCdnSign() + '"');
        str = str.replace(/\.pdf(.*?)\"/g, '.pdf' + GmCXt.getCdnSign() + '"');
    }

    return str;
};

GmCXt.containsMedia = function(str) {
    if (str.indexOf('.png') >= 0 ||
        str.indexOf('.gif') >= 0 ||
        str.indexOf('.mp4') >= 0 ||
        str.indexOf('.html') >= 0 ||
        str.indexOf('.txt') >= 0 ||
        str.indexOf('.pdf') >= 0)
        return true;
    else
        return false;
};

GmCXt.isUrlAbsolute = function(url) {
    if (url.indexOf('//') === 0) {
        return true;
    } // URL is protocol-relative (= absolute)
    if (url.indexOf('://') === -1) {
        return false;
    } // URL has no protocol (= relative)
    if (url.indexOf('.') === -1) {
        return false;
    } // URL does not contain a dot, i.e. no TLD (= relative, possibly REST)
    if (url.indexOf('/') === -1) {
        return false;
    } // URL does not contain a single slash (= relative)
    if (url.indexOf(':') > url.indexOf('/')) {
        return false;
    } // The first colon comes after the first slash (= relative)
    if (url.indexOf('://') < url.indexOf('.')) {
        return true;
    } // Protocol is defined before first dot (= absolute)
    return false; // Anything else must be relative
};

GmCXt.getOnPremJsonURL = function() {
    var retUrl = GmCXt.conf.webServiceUrl;
    return retUrl;
};

GmCXt.branchStepExist = function(t) {
    var isBranch = false;

    if (t && t.tour_settings && t.tour_settings.play_structure) {
        t.tour_settings.play_structure.forEach(function(s, key) {
            if (s.branch) {
                isBranch = true;
            }
        });
    }

    return isBranch;
};

GmCXt.branchStepExistInPS = function() {
    var isBranch = false;

    if (GmCXt.playerI.playStructure) {
        GmCXt.playerI.playStructure.forEach(function(s, key) {
            if (s.branch) {
                isBranch = true;
            }
        });
    }

    return isBranch;
};

GmCXt.restartInParent = function(hideLog) {
    if (!hideLog) {
        GmCXt.log(33, "BACK to parent window");
    }
    GmCXt.storage().set({
        'restartInParent': true
    });
};

GmCXt.getSleepTime = function(lbls) {
    var t = 24;

    var nt = GmCXt.getAppSetting('notificationsTime');

    if (nt) {
        t = parseFloat(nt);
        if (t < 1) t = 1;
    }

    var hourString = t > 1 ? lbls.hours : lbls.hour;
    t = t + ' ' + hourString;

    if ((nt && typeof nt !== 'number') && (nt.includes("week") || nt.includes("hour"))) {
        t = nt;
    }

    return t;
};

GmCXt.getIframeAttributes = function(node) {
    var attrs = {};
    mg$.each(node[0].attributes, function(index, attribute) {
        attrs[attribute.name] = attribute.value;
    });

    attrs.isVisible = GmCXt.getElVisibility(node[0], true) === 'visible';

    return attrs;
};

GmCXt.isDomainMatch = function(startURLDomain, stepDomain) {
    return (GmCXt.getDomain(startURLDomain) === GmCXt.getDomain(stepDomain));
};

GmCXt.getDefaultDomain = function(stepURL, tour) {
    var defaultURL = stepURL;
    if (tour.allDomains.length > 0) {
        var allDomains = tour.allDomains;
        for (var i = 0; i < allDomains.length; i++) {
            if (allDomains[i].isDefault) {
                defaultURL = allDomains[i].url;
                break;
            }
        }
    }
    return GmCXt.getHostnameFromUrl(defaultURL);
};

GmCXt.getRedirectUrlForAuto = function(stepURL, tour, startURLDomain) {
    var stepDomain = GmCXt.getHostnameFromUrl(stepURL);
    if (startURLDomain) {
        if (GmCXt.isDomainMatch(startURLDomain, stepDomain)) {
            stepURL = stepURL.replace(stepDomain, startURLDomain);
        }
    }

    // Change this flag to true when multiple domain support is needed.
    var redirectToDefaultDomain = false;
    if (redirectToDefaultDomain) {
        var appDomain = GmCXt.getDefaultDomain(stepURL, tour);
        if (appDomain) {
            stepURL = stepURL.replace(stepDomain, appDomain);
        }
    }
    var completeURL = '';
    if (!stepURL.startsWith('http')) {
        completeURL = location.protocol + '//' + stepURL;
    } else {
        completeURL = stepURL;
    }
    GmCXt.log(33, "REDIRECTING TO URL - ", {
        URL: completeURL
    });
    return completeURL;
};

function showDomainNotConfiguredPopup(redirectUrl) {
    GmCXt.cleanPlayer();
    GmCXt.auto.destroyAutomation();
    var option = {
        description: GmCXt.label.missingDomainAppConfig,
        button1: GmCXt.label.ok,
        closeTour: true
    };
    GmCXt.alertV2(option).show();
}

GmCXt.changeUrl = function(stepURL, tour, startURLDomain) {
    var redirectUrl = GmCXt.getRedirectUrlForAuto(stepURL, tour, startURLDomain);

    // When redirected by tour player
    if (!startURLDomain) {
        window.location = redirectUrl;
        return;
    }

    // When triggered by Automation
    var source = GmCXt.checkDomainInApps(stepURL);
    var destination = GmCXt.checkDomainInApps(redirectUrl);
    var os = GmCXt.getOrgSettings();

    if (os.fqdn && (!source.domainMatch || !destination.domainMatch)) {

        if (GmCXt.isAutomationRunning()) {

            var errorDomains = '';
            if (!source.domainMatch) {
                errorDomains += 'Source (' + GmCXt.getHostnameFromUrl(stepURL) + ') domain not configured. ';
            }
            if (!destination.domainMatch) {
                errorDomains += 'Destination (' + GmCXt.getHostnameFromUrl(redirectUrl) + ') domain not configured.';
            }

            GmCXt.auto.fail(null, {
                errorMessage: errorDomains
            });
        } else {
            showDomainNotConfiguredPopup(redirectUrl);
        }
    } else {
        window.location = redirectUrl;
    }
};

GmCXt.validateTargetFrame = function(stepFrame, currentFrame) {
    if (!GmCXt.isEmpty(stepFrame) && !GmCXt.isEmpty(currentFrame)) {

        if (!GmCXt.isEmpty(currentFrame.isVisible) && !currentFrame.isVisible) {
            return false; // Current frame not visible
        }

        return GmCXt.compareObjectsByPercentMatch(stepFrame, currentFrame);

    }
    return false;
};

GmCXt.cleanPlayerI = function() {
    GmCXt.tourPlayerI = null;
    GmCXt.playerI = null;
};

GmCXt.cleanPlayer = function() {

    GmCXt.log(33, 'Player instance cleared.');

    if (GmCXt.playerI) {
        GmCXt.trackGuide();
        window.removeEventListener("mouseup", GmCXt.registerClickListner, true);
        window.removeEventListener("mousedown", GmCXt.registerClickListner, true);
        window.removeEventListener("keyup", GmCXt.registerClickListner, true);
        window.removeEventListener("keydown", GmCXt.registerClickListner, true);
    }

    GmCXt.cleanPlayerI();

    GmCXt.sendMessageToApp("mgPlayerJSTest2_action:clean_tour_player");

    GmCXt.storage().set({
        'mgPlayerJSTest2_GM_PLAYER_STORAGE_KEY': null
    });

    GmCXt.storage().remove(['mgPlayerJSTest2_GM_PLAYER_STORAGE_KEY']);
};

GmCXt.compareAttributes = function(el, topEl) {

    var topElAttrs = GmCXt.getAttributeValues(topEl);
    var elAttrs = GmCXt.getAttributeValues(el);
    var attrsMatch = GmCXt.compareObjectsByPercentMatch(topElAttrs, elAttrs, 100);

    return attrsMatch;
};

GmCXt.filterParentNodes = function(nodes, text) {

    // filter parent nodes retured by "text contains" query.
    var text = text.trim().toLowerCase();

    nodes = nodes.filter(function(index, node) {
        if (node.innerText && node.innerText.trim().toLowerCase() === text) {
            mg$(node).parents().addClass('mgPlayerJSTest2_dummy-class');
            return true;
        }
        return false;
    });

    var childNodes = nodes.filter(function(index, node) {
        return !mg$(node).hasClass('mgPlayerJSTest2_dummy-class');
    });

    mg$('.mgPlayerJSTest2_dummy-class').removeClass('mgPlayerJSTest2_dummy-class');

    if (childNodes.length === 1) {
        GmCXt.l.add('All nodes resulting from the query are hierachichally linked (parent-child)');
        return nodes;
    }

    if (childNodes.length === 2 && GmCXt.compareAttributes(nodes[0], nodes[1])) {
        // LXP header has two identical elements placed on top of each other
        if (GmCXt.getElVisibility(nodes[0]) === 'visible') {
            return nodes.slice(0, 1);
        } else if (GmCXt.getElVisibility(nodes[1]) === 'visible') {
            return nodes.slice(1);
        }
    }

    GmCXt.l.add('Text is present at multiple places on the screen');
    return [];
};

GmCXt.getElectronAppName = function() {
    var app = require('electron').remote.app;
    return app.name || app.getName();
};

GmCXt.getErrObj = function(msg, data, isAnalytics) {
    var code = isAnalytics ? data.code : parseInt(data.code);

    if (msg[0] && msg[0].message) {
        msg = msg[0].message;
    }

    if (typeof data.info === "string") {
        msg += " : " + data.info;
    }

    var eObj = {
        build: GmCXt.conf.appName,
        version: GmCXt.conf.version,
        type: 'CODE ERROR',
        code: code,
        message: msg,
        browser: GmCXt.browserApp
    };

    if (!GmCXt.isBackgroundPage) {
        eObj.current_url = GmCXt.urlParts.fullUrl;
    } else {
        eObj.current_url = '';
    }

    if (data.info.apiUrl) {
        eObj.type = "Insights";
        eObj.message += " , api: " + data.info.apiUrl;

        if (data.apiData)
            eObj.apiData = JSON.stringify(data.apiData);
    }

    if (GmCXt.user && GmCXt.organization && !GmCXt.isEmpty(GmCXt.organization)) {
        eObj.organization_id = GmCXt.organization.organization_id;
        eObj.organization_name = GmCXt.organization.name;
        eObj.application_id = GmCXt.activeAppId;
        eObj.user_id = GmCXt.user.user_id;
        eObj.user_email = GmCXt.user.user_email;
    }
    return eObj;
};

// Elements might have classes like 'mgPlayerJSTest2_select-outline' or 'mgPlayerJSTest2_dummy-class'
GmCXt.checkMyGuideClass = function(className) {

    var mgClass = false;
    if (className && typeof className === 'string') {
        var arrClass = className.split(/\s+/).filter(Boolean);
        mgClass = arrClass.filter(function(cls) {
            return cls.indexOf('mgPlayerJSTest2_') === 0;
        })[0];
    }
    return mgClass;
};

GmCXt.hasMyGuideEl = function(nodes) {
    if (nodes) {
        for (var i = 0; i < nodes.length; i++) {
            if (GmCXt.checkMyGuideClass(nodes[i].className)) {
                return true;
            }
        }
    }
    return false;
};

GmCXt.isSelect = function(el) {
    if (!GmCXt.isEmpty(el.customSettings)) {
        var s = el.customSettings.salesforce;
        var wd = el.customSettings.workday;

        if (!GmCXt.isEmpty(s) && (s.customSelect || s.customInput || s.globalSearch)) {
            return true;
        }
        if (!GmCXt.isEmpty(wd) && (wd.isWDCustomSelect || wd.isSelectBox)) {
            return true;
        }
    }
    if (!GmCXt.isEmpty(el.meta.elAttributes)) {
        if (el.meta.elAttributes.tagName === 'SELECT') {
            return true;
        }
    }
    if (!GmCXt.isEmpty(el.targetInfo) && el.targetInfo.tagName === 'SELECT') {
        return true;
    }
    return false;
};

GmCXt.isInput = function(el) {

    var inputType = ['text', 'password', 'email', 'search'];

    if (!GmCXt.isEmpty(el.customSettings)) {
        var s = el.customSettings.salesforce;
        var wd = el.customSettings.workday;
        if (!GmCXt.isEmpty(s) && s.isInput) {
            return true;
        }
        if (!GmCXt.isEmpty(wd) && wd.isInput && !wd.isCheckbox) {
            return true;
        }
    }
    if (!GmCXt.isEmpty(el.meta.elAttributes)) {
        if (el.meta.elAttributes.tagName === 'INPUT' && inputType.includes(el.meta.elAttributes.type)) {
            return true;
        }
    }
    if (!GmCXt.isEmpty(el.targetInfo) && el.targetInfo.tagName === 'INPUT' && inputType.includes(el.targetInfo.type)) {
        return true;
    }

    return false;
};

GmCXt.sortToursByModifcationDate = function(tours) {
    return tours.sort(function(a, b) {
        return parseInt(b.modification_date) - parseInt(a.modification_date);
    });
};

GmCXt.getStepDelayOptions = function() {
    return [{
        'value': 1
    }, {
        'value': 2
    }, {
        'value': 3
    }, {
        'value': 4
    }, {
        'value': 5
    }, {
        'value': 6
    }, {
        'value': 7
    }, {
        'value': 8
    }, {
        'value': 9
    }, {
        'value': 10
    }, {
        'value': 15
    }, {
        'value': 20
    }, {
        'value': 25
    }, {
        'value': 30
    }];
};

GmCXt.getRuleDelayOptions = function() {
    return [{
        'key': 1,
        'value': 1000
    }, {
        'key': 2,
        'value': 2000
    }, {
        'key': 3,
        'value': 3000
    }, {
        'key': 4,
        'value': 4000
    }, {
        'key': 5,
        'value': 5000
    }, {
        'key': 6,
        'value': 6000
    }, {
        'key': 7,
        'value': 7000
    }, {
        'key': 8,
        'value': 8000
    }, {
        'key': 9,
        'value': 9000
    }, {
        'key': 10,
        'value': 10000
    }];
};

GmCXt.checkStepLimit = function(stepCount) {
    var adminStepLimit = GmCXt.organization.admin_settings.step_limit;
    return stepCount >= adminStepLimit ? true : false;
};

GmCXt.getOrgColor = function() {
    var color_map = [];
    var getOrg = GmCXt.getOrgSettings();
    if (!GmCXt.isEmpty(getOrg.stepDefaultColorArray)) {
        var colorArr = mg$.extend([], getOrg.stepDefaultColorArray);
        for (var key in colorArr.reverse()) {
            if (getOrg.stepDefaultColorArray.hasOwnProperty(key)) {
                color_map.push(colorArr[key], '');
            }
        }
    }
    return color_map;
};

GmCXt.getFontFile = function() {
    var i = 'common/lib/fonts/';
    if (GmCXt.isExtension()) {
        i = GmCXt.getBrowserUrl(i);
    } else {
        i = GmCXt.conf.baseUrl + i;
    }

    return i;
};

GmCXt.getCustomFontStyle = function() {
    var styleElem = document.getElementById('mgPlayerJSTest2_nunito-font-style');
    if (!GmCXt.isEmpty(styleElem)) styleElem.remove();

    var newStyle = document.createElement('style');
    newStyle.id = "mgPlayerJSTest2_nunito-font-style";
    var FontName = "Nunito";
    var FontUrl = GmCXt.getFontFile() + "Nunito-Regular.woff";
    newStyle.appendChild(document.createTextNode("@font-face { font-family: '" + FontName + "'; src: url('" + FontUrl + "') format('woff');}"));

    var FontName = "Calibri";
    var FontUrl = GmCXt.getFontFile() + "Calibri-Regular.woff";
    newStyle.appendChild(document.createTextNode("@font-face { font-family: '" + FontName + "'; src: url('" + FontUrl + "') format('woff');}"));

    var FontName = "Frutiger";
    var FontUrl = GmCXt.getFontFile() + "Frutiger.woff";
    newStyle.appendChild(document.createTextNode("@font-face { font-family: '" + FontName + "'; src: url('" + FontUrl + "') format('woff');}"));

    return newStyle;
};

GmCXt.isUrlValid = function(userInput) {
    if (GmCXt.isEmpty(userInput)) return true;
    var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if (res == null)
        return false;
    else
        return true;
};

GmCXt.getURLMediaType = function(url) {
    if (!GmCXt.isUrlValid(url)) return false;

    if (url.search(/^http[s]?\:\/\//) === -1) {
        return 'https://' + url;
    }

    var ext = url.split('/').pop().match(/^[\w\s-,.]+\.([a-zA-Z0-9]{3,4})/);
    if (ext) {
        ext = ext[1];
    }

    url = new URL(url);
    var mediaType = "";
    if (ext && GmCXt.videoFileExtns.indexOf("." + ext) !== -1) {
        mediaType = "video";
    } else if (ext === "pdf") {
        mediaType = "pdf";
    }

    return mediaType;
};

function tinyMceEditLink(editor) {
    function onUrlTextChange(urlElem, modelElems) {
        if (urlElem.value && GmCXt.getURLMediaType(urlElem.value)) {
            modelElems[3].style.display = "none";
        } else {
            modelElems[3].style.display = "block";
        }
    }

    editor.windowManager.oldOpen = editor.windowManager.open;
    editor.windowManager.open = function(t, r) {
        var modal = this.oldOpen.apply(this, [t, r]);

        var modelElems = mg$(".tox-form__group");
        var modelBtnElems = mg$(".tox-button");
        var urlElem = modelElems[0].getElementsByTagName("input")[0];

        if (t.title === "Insert/Edit Image") {

            modelBtnElems[modelBtnElems.length - 1].onclick = function(event) {
                if (urlElem.value && GmCXt.isUrlValid(urlElem.value)) {
                    var image = new Image();
                    image.onerror = function(e) {
                        GmCXt.toastMsg("Invalid Image URL").show();

                        var i = 0;
                        var elImg = editor.selection.getSel().baseNode.children;
                        for (i; i < elImg.length; i++) {
                            if ((elImg[i].tagName === 'IMG') && (elImg[i].src === urlElem.value)) {
                                editor.selection.getSel().baseNode.children[i].remove();
                            }
                        }

                        editor.execCommand('mceInsertContent', false, '');
                    };
                    image.src = urlElem.value;
                }
            };
        }

        if (t.title === "Insert/Edit Link") {

            urlElem.onkeyup = function() {
                onUrlTextChange(urlElem, modelElems);
            };

            urlElem.onchange = function() {
                onUrlTextChange(urlElem, modelElems);
            };

            if (urlElem.value) {
                onUrlTextChange(urlElem, modelElems);
            }
        }
        return modal; // Template plugin is dependent on this return value
    };
}

GmCXt.getTitleEditor = function(identifier, flag) {

    var toolbar1 = "undo redo | code | bold italic underline | alignleft aligncenter alignright alignjustify";
    if (flag) toolbar1 = toolbar1.replace('bold', '');

    var orgColor = GmCXt.getOrgColor();

    var newStyle = GmCXt.getCustomFontStyle();

    var returnObj = {
        selector: identifier,
        height: 300,
        min_height: 200,
        max_chars: 250, // max. allowed chars
        skin_url: "../../common/lib/tinymce/skins/ui/oxide",
        content_css: "../../common/lib/tinymce/skins/ui/oxide/content.min.css",
        content_style: newStyle.innerHTML,
        plugins: [
            "autolink link charmap anchor",
            "visualblocks code",
            "paste textpattern fullscreen"
        ],
        target_list: GmCXt.tinymceTargetList,
        toolbar2: "link| forecolor backcolor | outdent indent | bullist numlist",
        font_formats: "Arial=arial, sans-serif;Calibri=calibri, sans-serif; Comic Sans MS='comic sans ms',sans-serif; Courier New='courier new', monospace; Cursive=cursive, sans-serif; Fantasy=fantasy, sans-serif; Frutiger=Frutiger, sans-serif; Garamond=garamond, serif; Georgia=georgia, serif; Helvetica='Helvetica Neue', Helvetica, Arial, sans-serif; Monospace=monospace, sans-serif; Narrow='arial narrow', sans-serif; Nunito='Nunito', sans-serif; Proxima Nova=proxima_nova_rgregular; Sans-Serif=Arial, Helvetica, sans-serif; Serif='times new roman', serif; Tahoma=tahoma, sans-serif; Trebuchet MS='trebuchet ms', sans-serif; Verdana=verdana, sans-serif; Wide='arial black', sans-serif;",
        fontsize_formats: "xx-small x-small small medium large x-large xx-large",
        init_instance_callback: function(editor) {
            editor.name = identifier;

            var pathElem = mg$('#' + editor.id).next().find('.tox-statusbar__path');

            mg$('<div class="mgPlayerJSTest2_char_count mgPlayerJSTest2_display-flex mgPlayerJSTest2_align-items-center" style="text-align:right"></div>').insertAfter(pathElem);

            var toolElem2 = mg$('#' + editor.id).next().find('.tox-toolbar');
            toolElem2[0].childNodes[1].firstElementChild.setAttribute('id', 'mgPlayerJSTest2_title-tool-text-color');
            toolElem2[0].childNodes[1].lastElementChild.setAttribute('id', 'mgPlayerJSTest2_title-tool-bg-color');

            GmCXt.tinymce_updateCharCounter(this, GmCXt.tinymce_getContentLength());

        },
        setup: GmCXt.tinyMcePasteSetup,
        paste_preprocess: GmCXt.tinyMcePasteProcess,
        menubar: 'format'
    };
    if (orgColor.length > 1) {
        returnObj.color_map = orgColor;
    }
    returnObj.toolbar1 = toolbar1;
    return returnObj;
};

GmCXt.getDescEditor = function(identifier, maxChar) {
    var char = 800;
    if (maxChar) char = maxChar;
    var orgColor = GmCXt.getOrgColor();

    var newStyle = GmCXt.getCustomFontStyle();

    var returnObj = {
        selector: identifier,
        plugins: [
            "advlist autolink lists link image charmap hr anchor",
            "searchreplace visualblocks visualchars code",
            "insertdatetime media nonbreaking save table directionality",
            "paste textpattern fullscreen"
        ],
        content_style: newStyle.innerHTML,
        target_list: GmCXt.tinymceTargetList,
        toolbar1: "insertfile undo redo | code | bold italic underline | alignleft aligncenter alignright alignjustify",
        toolbar2: "link image | forecolor backcolor | outdent indent | bullist numlist",
        font_formats: "Arial=arial, sans-serif;Calibri=calibri, sans-serif; Comic Sans MS='comic sans ms',sans-serif; Courier New='courier new', monospace; Cursive=cursive, sans-serif; Fantasy=fantasy, sans-serif; Frutiger=Frutiger, sans-serif; Garamond=garamond, serif; Georgia=georgia, serif; Helvetica='Helvetica Neue', Helvetica, Arial, sans-serif; Monospace=monospace, sans-serif; Narrow='arial narrow', sans-serif; Nunito='Nunito', sans-serif; Proxima Nova=proxima_nova_rgregular; Sans-Serif=Arial, Helvetica, sans-serif; Serif='times new roman', serif; Tahoma=tahoma, sans-serif; Trebuchet MS='trebuchet ms', sans-serif; Verdana=verdana, sans-serif; Wide='arial black', sans-serif;",
        fontsize_formats: "xx-small x-small small medium large x-large xx-large",
        image_advtab: false,
        media_live_embeds: true,
        media_poster: false,
        min_height: 200,
        height: 300,
        max_chars: char,
        skin_url: '../../common/lib/tinymce/skins/ui/oxide',
        content_css: "../../common/lib/tinymce/skins/ui/oxide/content.min.css",
        image_class_list: [{
            title: 'Custom Class',
            value: 'mgPlayerJSTest2_custom-image'
        }],
        file_picker_types: "image media",
        file_picker_callback: function(callback, value, meta) {
            if (meta.filetype == 'image') {
                mg$('#mgPlayerJSTest2_upload-image').val('');
                mg$('#mgPlayerJSTest2_upload-image').trigger('click');
                mg$('#mgPlayerJSTest2_upload-image').off('change');
                mg$('#mgPlayerJSTest2_upload-image').on('change', function() {
                    var file = this.files[0];

                    if (file) {
                        var fileName = file.name;
                        var ext = fileName.split('.').pop().toLowerCase();

                        if (GmCXt.validImageFiles.indexOf(ext) === -1) {
                            GmCXt.showAlertToastMsg(GmCXt.label.invalidImageFileFormat);
                            return;
                        }
                    }

                    if (file && file.size > 5240000) {
                        GmCXt.showAlertToastMsg(GmCXt.label.beaconMaxSizeMessage);
                        return;
                    } else if (file && file.size < 5240000) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            GmCXt.vidImageLoader();
                            GmCXt.saveImage(e.target.result).then(function(result) {
                                GmCXt.removeVidImageLoader();
                                if (result) {
                                    callback(result.image_path + GmCXt.user.cdn_signature, {
                                        alt: ''
                                    });
                                }
                                mg$(".mgPlayerJSTest2_spinner-wrapper").remove();
                            }).catch(function(error) {
                                throw new Error(error);
                            });
                        };
                        reader.readAsDataURL(file);
                    }
                });
            } else if (meta.filetype == 'media') {
                mg$('#mgPlayerJSTest2_upload-video').val('');
                mg$('#mgPlayerJSTest2_upload-video').trigger('click');
                mg$('#mgPlayerJSTest2_upload-video').off('change');
                mg$('#mgPlayerJSTest2_upload-video').on('change', function() {
                    var file = this.files[0];
                    if (file) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            GmCXt.readFile(file, callback);
                        };
                        reader.readAsDataURL(file);
                    }
                });
            }
        },
        init_instance_callback: function(editor) {
            editor.name = identifier;

            var pathElem = mg$('#' + editor.id).next().find('.tox-statusbar__path');

            mg$('<div class="mgPlayerJSTest2_char_count mgPlayerJSTest2_display-flex mgPlayerJSTest2_align-items-center" style="text-align:right"></div>').insertAfter(pathElem);

            var toolElem = mg$('#' + editor.id).next().find('.tox-toolbar');
            toolElem[1].childNodes[1].firstElementChild.setAttribute('id', 'mgPlayerJSTest2_desc-tool-text-color');
            toolElem[1].childNodes[1].lastElementChild.setAttribute('id', 'mgPlayerJSTest2_desc-tool-bg-color');

            GmCXt.tinymce_updateCharCounter(this, GmCXt.tinymce_getContentLength());

            editor.on('ExecCommand', function(e) {
                console.log('The ' + e.command + ' command was fired.');
                if (e.command === "InsertOrderedList" || e.command === "InsertUnorderedList" || e.command === "mceApplyTextcolor") {
                    var node = tinymce.get(tinymce.activeEditor.id).contentDocument.body;
                    if (node) {
                        mg$(node).find("li").each(function() {
                            var children = mg$(this).find("span:first");
                            if (children.length > 0) {
                                mg$(this).removeAttr('data-mce-style');
                                if (children.css("color") != "undefined") {
                                    mg$(this).css("color", children.css("color"));
                                }
                            }
                        });
                    }
                }
            });
        },

        setup: GmCXt.tinyMcePasteSetup,
        paste_preprocess: GmCXt.tinyMcePasteProcess
    };

    if (orgColor.length > 1) {
        returnObj.color_map = orgColor;
    }
    return returnObj;
};

GmCXt.tinymce_getContentLength = function() {
    return tinymce.get(tinymce.activeEditor.id).contentDocument.body.textContent.trim().length;
};

GmCXt.tinymce_updateCharCounter = function(el, len) {
    mg$('#' + el.id).next().find('.mgPlayerJSTest2_char_count').html('<div id="mgPlayerJSTest2_text_count-' + el.id + '">' + len + '</div>/' + el.settings.max_chars);

    if (len > el.settings.max_chars) {
        mg$('#mgPlayerJSTest2_text_count-' + el.id).css('color', 'red');
    } else {
        mg$('#mgPlayerJSTest2_text_count-' + el.id).css('color', '');
    }
};

GmCXt.attachDragEvents = function(elmnt, dragEl) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    dragEl.onmousedown = dragMouseDown;
    dragEl.onmouseup = dragMouseUp;

    if (window.matchMedia("(max-width: 480px)").matches) {
        dragEl.ontouchstart = dragMouseDown;
        dragEl.ontouchend = dragMouseUp;
    }

    function resetDragEvents() {
        document.onmouseup = null;
        document.onmousemove = null;
        document.onmouseout = null;

        if (window.matchMedia("(max-width: 480px)").matches) {
            document.ontouchstart = null;
            document.ontouchmove = null;
            document.ontouchend = null;
        }
    }

    function dragMouseUp(e) {
        resetDragEvents();

        if (GmCXt.isMicroPlayer()) {
            mg$("#mgPlayerJSTest2_micro_player_drag .mgPlayerJSTest2_title-tooltip-wrapper").removeAttr("style");
        }
    }

    function dragOutEvent(e) {
        GmCXt.timeout(function() {
            mg$('.mgPlayerJSTest2_slideshow_drag_over').hide();
        }, GmCXt.t.drag);

        if (dragEl.id === 'mgPlayerJSTest2_mPlayer-drag') {
            resetDragEvents();
        }
    }

    function dragMouseDown(e) {
        e.preventDefault();
        e = e || window.event;
        // get the mouse cursor position at startup:
        if (window.matchMedia("(max-width: 480px)").matches) {
            e.clientX = e.targetTouches[0].clientX;
            e.clientY = e.targetTouches[0].clientY;
        }

        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmouseout = dragOutEvent;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;

        if (window.matchMedia("(max-width: 480px)").matches) {
            document.ontouchend = closeDragElement;
            document.ontouchcancel = dragOutEvent;
            document.ontouchmove = elementDrag;
        }

        if (GmCXt.isMicroPlayer()) {
            mg$("#mgPlayerJSTest2_micro_player_drag .mgPlayerJSTest2_title-tooltip-wrapper").css("display", "none");
        }
    }

    function elementDrag(e) {
        mg$('.mgPlayerJSTest2_slideshow_drag_over').show();
        e = e || window.event;
        // calculate the new cursor position:
        var wWdth = mg$(window).width();
        var wHgth = mg$(window).height();
        var offset = 50;

        if (window.matchMedia("(max-width: 480px)").matches) {
            e.clientX = e.targetTouches[0].clientX;
            e.clientY = e.targetTouches[0].clientY;
        }

        if (e.clientX > offset && e.clientY > offset && e.clientX < (wWdth - offset) && e.clientY < (wHgth - offset)) {
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

            if (GmCXt.isMicroPlayer()) {
                elmnt.style.right = "initial";
                elmnt.style.transition = "initial";
            }

            if (!GmCXt.isMicroPlayer()) {
                mg$(elmnt)
                    .removeClass('top-left')
                    .removeClass('top-middle')
                    .removeClass('top-right')
                    .removeClass('right-top')
                    .removeClass('right-middle')
                    .removeClass('right-bottom')
                    .removeClass('bottom-left')
                    .removeClass('bottom-middle')
                    .removeClass('bottom-right')
                    .removeClass('left-top')
                    .removeClass('left-middle')
                    .removeClass('left-bottom');
            }
        }
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        resetDragEvents();

        mg$('.mgPlayerJSTest2_slideshow_drag_over').hide();
    }
};

GmCXt.removeInvalidRules = function(rules) {

    var conditionArray = [GmCXt.STARTS_WITH, GmCXt.ENDS_WITH,
        GmCXt.EQUALS, GmCXt.NOT_EQUAL,
        GmCXt.CONTAINS, GmCXt.NOT_CONTAINS,
        GmCXt.TXT_EQUALS, GmCXt.NOT_TXT,
        GmCXt.TXT_CONTAINS, GmCXt.TXT_MATCHES,
        GmCXt.GREAT_THAN, GmCXt.LESS_THAN,
        GmCXt.CLASSES, GmCXt.NOT_CLASSES,
        GmCXt.ATTRIBUTES, GmCXt.NOT_ATTRIBUTES
    ];

    for (var i = rules.length - 1; i >= 0; i--) {
        if (rules[i].type === 'Select Table') {
            delete rules[i].filteredColumns;
            rules[i].columnConditions = rules[i].columnConditions.filter(function(col) {
                if (col.key && col.value) {
                    return col;
                }
            });

            if (rules[i].columnConditions.length === 0) {
                GmCXt.removeFromRuleArray(rules, i);
            }

        } else if (rules[i].type === 'Select Element') {

            if (GmCXt.isEmpty(rules[i].element) ||
                (GmCXt.isEmpty(rules[i].value) && conditionArray.includes(rules[i].condition))) {
                GmCXt.removeFromRuleArray(rules, i);
            }
        } else if (GmCXt.isEmpty(rules[i].value) || GmCXt.isEmpty(rules[i].type) || GmCXt.isEmpty(rules[i].condition)) {
            GmCXt.removeFromRuleArray(rules, i);
        } else if (rules[i].type === 'Creation Date' && rules[i].userCreationDate) {
            delete rules[i].userCreationDate;
        } else if (rules[i].type === 'Date' && rules[i].date) {
            delete rules[i].date;
        } else if (rules[i].type === 'Time' && rules[i].time) {
            delete rules[i].time;
        } else if (i === 0) {
            rules[i].logical_condition = '';
        }
    }

    return rules;
};

GmCXt.removeFromRuleArray = function(rules, i) {
    if (rules[i].logical_condition === '' || rules[i].logical_condition === '||') {

        if (rules[i + 1]) {
            if (i === 0)
                rules[i + 1].logical_condition = '';
            else if (rules[i + 1].logical_condition === '&&')
                rules[i + 1].logical_condition = rules[i].logical_condition;
        }

    }
    rules.splice(i, 1);
};

GmCXt.replaceCdnSignFromString = function(str) {

    if (!str) return str;

    var c = GmCXt.user.cdn_signature;

    if (!c) return str;

    var cdnFirstFive = c.slice(0, 5);
    var cdnStart = str.indexOf(cdnFirstFive);

    if (cdnStart > 0) {
        var cdnLastFive = c.slice(c.length - 5, c.length);
        var cdnEnd = str.indexOf(cdnLastFive) + 5;
        var modCdn = str.slice(cdnStart, cdnEnd);

        str = str.replace(modCdn, "");

        str = GmCXt.replaceCdnSignFromString(str);
    }

    return str;
};

GmCXt.replaceCdnSignFromMsgStep = function(s) {

    var domElems = s.step_settings.domElems;

    if (domElems) {
        for (var i = 0; i < domElems.length; i++) {

            if (domElems[i].title) {
                domElems[i].title = GmCXt.replaceCdnSignFromString(domElems[i].title);
            }
        }
    }
    return s;
};

GmCXt.replaceCdnSignFromImgStep = function(s) {

    var highArea = s.highlightedArea;
    if (highArea) {
        for (var i = 0; i < highArea.length; i++) {
            if (highArea[i].title)
                highArea[i].title = GmCXt.replaceCdnSignFromString(highArea[i].title);

        }
    }
    return s;
};

GmCXt.replaceCdnSignFromStep = function(s) {

    s.step_title = GmCXt.replaceCdnSignFromString(s.step_title);
    s.step_description = GmCXt.replaceCdnSignFromString(s.step_description);

    switch (s.step_type) {
        case GmCXt.STEP_TYPE_MESSAGE:
            s = GmCXt.replaceCdnSignFromMsgStep(s);
            break;
        case GmCXt.STEP_TYPE_IMAGE:
            s = GmCXt.replaceCdnSignFromImgStep(s);
            break;
    }
    return s;
};

GmCXt.isDefaultIcon = function(str) {
    if (str &&
        (str.indexOf('edcast.png') >= 0 ||
            str.indexOf('guidemeg.png') >= 0 ||
            str.indexOf('widget_icon.png') >= 0 ||
            str.indexOf('chat_bot_icon.png') >= 0 ||
            str.indexOf('default') >= 0 ||
            str.indexOf('myguide.png') >= 0 ||
            str.indexOf(GmCXt.conf.appConfig.defaultIcon) >= 0)) {
        return true;
    } else {
        return false;
    }
};

GmCXt.syncPlayerInst = function(m) {
    if (m === "mgPlayerJSTest2_action:started;task:select_existing_dom_element" ||
        m === "mgPlayerJSTest2_action:started;task:select_existing_dom_element:target_frame_only" ||
        m === "mgPlayerJSTest2_action:started;task:select_dom_element_tooltips" ||
        m === "mgPlayerJSTest2_action:task:init_new_iframe" ||
        m === "mgPlayerJSTest2_action:update_player_instance" ||
        m === "mgPlayerJSTest2_action:play_slideshow" ||
        m === "mgPlayerJSTest2_action:play_video_step" ||
        m === "mgPlayerJSTest2_action:play_image_step" ||
        m === "mgPlayerJSTest2_action:click; on:mgPlayerJSTest2_slideshow-close" ||
        m === "mgPlayerJSTest2_action:mark_auto_tour_donotshow" ||
        m === "mgPlayerJSTest2_action:update_player_instance_app" ||
        m === "mgPlayerJSTest2_action:set_audio_mode_off" ||
        m === "mgPlayerJSTest2_action:set_audio_mode_on" ||
        m === "mgPlayerJSTest2_action:close_guide" ||
        m === "mgPlayerJSTest2_action:set_style_audio_icon_response") {
        return true;
    } else {
        return false;
    }
};

GmCXt.syncCreateInst = function(m) {
    if (m === "mgPlayerJSTest2_action:started;task:highlight_element" ||
        m === "mgPlayerJSTest2_action:started;task:edit_step_select_existing_dom_element" ||
        m === "mgPlayerJSTest2_action:completed;task:edit_step_select_existing_dom_element" ||
        m === "mgPlayerJSTest2_action:started;task:edit_step_select_existing_dom_element:target_frame_only" ||
        m === "mgPlayerJSTest2_action:started;task:select_new_dom_element" ||
        m === "mgPlayerJSTest2_action:started;task:select_new_dom_element_for_edit_step" ||
        m === "mgPlayerJSTest2_action:narrow_element_selection" ||
        m === "mgPlayerJSTest2_action:started;task:narrow_element_selection" ||
        m === "mgPlayerJSTest2_action:expand_element_selection" ||
        m === "mgPlayerJSTest2_action:started;task:expand_element_selection" ||
        m === "mgPlayerJSTest2_action:started;task:select_element_for_message_step" ||
        m === "mgPlayerJSTest2_action:started;task:select_element_for_branching_step" ||
        m === "mgPlayerJSTest2_action:started;task:select_new_element_for_dom_select_rule" ||
        m === "mgPlayerJSTest2_action:started;task:select_new_table_for_dom_select_rule" ||
        m === "mgPlayerJSTest2_action:started;task:delete_element_for_message_step" ||
        m === "mgPlayerJSTest2_action:started;task:select_dom_element_for_beacon" ||
        m === "mgPlayerJSTest2_action:started;task:blackout_dom_element" ||
        m === "mgPlayerJSTest2_action:started;task:edit_message_step_select_existing_dom_element" ||
        m === "mgPlayerJSTest2_action:started;task:step_blackout_area_existing_dom_element" ||
        m === "mgPlayerJSTest2_action:started;task:edit_beacon_select_existing_dom_element" ||
        m === "mgPlayerJSTest2_action:started;task:edit_beacon_select_existing_dom_element:target_frame_only" ||
        m === "mgPlayerJSTest2_action:started:select_new_dom_element_for_smart_tip" ||
        m === "mgPlayerJSTest2_action:find_element_to_get_precision" ||
        m === "mgPlayerJSTest2_action:find_element_to_get_precision_for_rules" ||
        m === "mgPlayerJSTest2_action:started;task:select_dom_element_for_matching_in_rules" ||
        m === "mgPlayerJSTest2_action:do;task:enable_jQuery_selector" ||
        m === "mgPlayerJSTest2_action:save_step" ||
        m === "mgPlayerJSTest2_action:click;on:save-beacon-settings" ||
        m === "mgPlayerJSTest2_action:reselect_beacon_element" ||
        m === "mgPlayerJSTest2_action:reselect_element" ||
        m === "mgPlayerJSTest2_action:select_element" ||
        m === "mgPlayerJSTest2_action:blackout_element" ||
        m === "mgPlayerJSTest2_action:delete_step_element" ||
        m === "mgPlayerJSTest2_action:find_element_precision" ||
        m === "mgPlayerJSTest2_action:find_element_precision_for_rules" ||
        m === "mgPlayerJSTest2_action:save_elem" ||
        m === "mgPlayerJSTest2_action:update_elem_tag" ||
        m === "mgPlayerJSTest2_action:select_element_tag" ||
        m === "mgPlayerJSTest2_action:started;task:edit_tag_select_existing_dom_element") {
        return true;
    } else {
        return false;
    }
};

GmCXt.setAutoTour = function(id) {
    if (window.self === window.top) {
        localStorage.setItem(GmCXt.storagePrefix + 'autoLaunchTour', id);
    } else {
        var data = {
            tourId: id
        };
        if (GmCXt.isSidePanelApp) {
            var m = {
                action: "mgPlayerJSTest2_action:set_auto_tour"
            };
            m.data = data;
            GmCXt.sendToParentWindow(m);
        } else {
            GmCXt.sendMessageToParentWindow('mgPlayerJSTest2_action:set_auto_tour', data);
        }
    }
};

GmCXt.getPreviousStep = function() {
    if (GmCXt.playerI) {
        var previousStepId = GmCXt.getPreviousStepId(GmCXt.playerI.currentStepId);
        if (previousStepId) {
            var step = GmCXt.createDeepCopy(GmCXt.getStepFromPlayerI(previousStepId));
            return step;
        } else {
            return null;
        }
    } else {
        return null;
    }
};

GmCXt.getPreviousStepId = function(id, mode) {
    var previousStepId = null;
    var PS = GmCXt.playerI.playStructure;
    var sameTail = GmCXt.numberOfSameTail(id, PS);
    if (sameTail > 1) {
        previousStepId = GmCXt.playerI.mergingFromId;
    } else {
        if (PS && PS.length) {
            for (var i = 0; i < PS.length; i++) {
                if (PS[i] && parseInt(PS[i].tail) === parseInt(id)) {
                    previousStepId = PS[i].id;
                    break;
                } else if (PS[i] && PS[i].branch) {
                    for (var j = 0; j < PS[i].branch.length; j++) {
                        if (parseInt(PS[i].branch[j].tail) === id) {

                            if (mode === 'slideshow') previousStepId = PS[i].id;
                            else previousStepId = GmCXt.getPreviousStepId(PS[i].id);

                            break;
                        }
                    }
                }
            }
        }
    }
    return previousStepId;
};

GmCXt.getPreviousStepsList = function(id) {
    var previousSteps = [];
    var PS = GmCXt.playerI.tour.tour_settings.play_structure;

    if (PS && PS.length) {
        for (var i = 0; i < PS.length; i++) {
            if (PS[i] && parseInt(PS[i].tail) === parseInt(id)) {
                previousSteps.push(PS[i].id);
            } else if (PS[i] && PS[i].branch) {
                for (var j = 0; j < PS[i].branch.length; j++) {
                    if (parseInt(PS[i].branch[j].tail) === id) {
                        previousSteps.push(PS[i].id);
                    }
                }
            }
        }
    }
    return previousSteps;
};

GmCXt.getFirstStepId = function() {
    var id = null;
    var playStructure = GmCXt.playerI.playStructure;

    if (playStructure && playStructure.length) {
        var firstStepObj = playStructure[0];
        if (firstStepObj && firstStepObj.id) {
            id = firstStepObj.id;
        }
    }
    return id;
};

//Always extract/extend data returned by this function before use. 
GmCXt.getStepFromPlayerI = function(step_id) {
    var step = false;
    var steps = [];

    var steps = GmCXt.playerI.tour.steps;

    for (var i = 0; i < steps.length; i++) {
        if (parseInt(steps[i].step_id) === parseInt(step_id)) {
            step = steps[i];
            break;
        }
    }
    return step;
};

GmCXt.getStepFromTourData = function(step_id, tour) {
    var step = false;
    var steps = [];

    var steps = tour.steps;

    for (var i = 0; i < steps.length; i++) {
        if (parseInt(steps[i].step_id) === parseInt(step_id)) {
            step = steps[i];
            break;
        }
    }
    return step;
};

GmCXt.getNextBotStepFromTour = function(step_id, tour) {
    var step = false;
    var steps = tour.steps;

    for (var i = 0; i < steps.length; i++) {
        if (parseInt(steps[i].step_id) === parseInt(step_id)) {
            if ((steps[i].step_settings.automation.enableBot &&
                    steps[i].step_settings.automation.botQuestion) ||
                (steps[i].step_type === GmCXt.STEP_TYPE_GUIDE ||
                    steps[i].step_type === GmCXt.STEP_TYPE_BRANCH ||
                    steps[i].step_type === "textSlide")) {
                step = steps[i];
                break;
            } else {
                step_id = GmCXt.getTail(steps[i].step_id, tour.tour_settings.play_structure, null, tour);
                GmCXt.getNextBotStepFromTour(step_id, tour);
            }
        }
    }
    return step;
};

GmCXt.isGuideAudioDisabled = function() {

    if (!GmCXt.isEmpty(GmCXt.playerI) && !GmCXt.isEmpty(GmCXt.playerI.tour)) {
        var s = GmCXt.playerI.tour.tour_settings;
        var val = s.disableAudio;

        return typeof val === 'undefined' ? false : val;
    } else {
        return false;
    }
};

GmCXt.setTourUuid = function(tourId) {

    if (!GmCXt.playerI.uuids) GmCXt.playerI.uuids = {};

    if (!GmCXt.playerI.uuids["tour:" + tourId])
        GmCXt.playerI.uuids["tour:" + tourId] = GmCXt.getUUID();
};

GmCXt.getGlobalAudioPrference = function() {
    var val = GmCXt.getStepSettings().playAudio;
    return typeof val === 'undefined' ? true : val;
};

GmCXt.getAudioPreference = function(pref) {

    var flag = false;
    var userPref = (pref === undefined || pref === true);

    if (GmCXt.getGlobalAudioPrference()) {

        if (!GmCXt.isGuideAudioDisabled()) {

            if (userPref) flag = true;
        }

    } else if (GmCXt.isGuideAudioEnabled()) {
        if (userPref) flag = true;
    }
    return flag;
};

GmCXt.isGuideAudioEnabled = function() {

    var s = GmCXt.playerI.tour.tour_settings;
    var val = s.enableAudio;

    return typeof val === 'undefined' ? true : val;
};

GmCXt.isLastStep = function(stepId, playStructure) {

    var flag = false;

    if (GmCXt.getTail(stepId, playStructure) === null) {
        flag = true;
    }
    return flag;
};

GmCXt.isFirstStep = function(sid) {

    if (!GmCXt.playerI) return false;

    var stepId = sid || GmCXt.playerI.currentStepId;

    // TODO, need to check behaviour when first step of tour in branch step
    if (stepId && GmCXt.playerI.tour) {
        var PS = GmCXt.getGuidePlayStructure(GmCXt.playerI.tour);

        if (PS && PS[0]) {
            var first = PS[0];

            if (first.id === stepId) {
                return true;
            }
        }
    }

    return false;
};

GmCXt.getFirstNonAutomationStep = function() {
    var id = null;
    var playStructure = GmCXt.getGuidePlayStructure(GmCXt.playerI.tour);
    if (playStructure) {
        for (var i = 0; i < playStructure.length; i++) {
            var stepObj = playStructure[i];
            if (stepObj && stepObj.id) {
                id = stepObj.id;
            }
            var step = GmCXt.getStepFromPlayerI(id);
            if (!GmCXt.isAutomationStep(step)) {
                return step;
            }
        }
    }
};

GmCXt.isFirstNonAutomationStep = function() {
    if (!GmCXt.playerI) return false;

    if (GmCXt.playerI.currentStepId && GmCXt.playerI.tour) {
        var s = GmCXt.getFirstNonAutomationStep();
        if (s && (s.step_id === GmCXt.playerI.currentStepId)) {
            return true;
        }
    }
    return false;
};

GmCXt.filterOutAutomationSteps = function(steps) {
    return steps.filter(function(s) {
        return (!GmCXt.isAutomationStep(s));
    });
};

GmCXt.initGlobals = function(action, data) {

    if (data) {

        if (data.debugMode) GmCXt.debugMode = data.debugMode;

        if (data.urlParts) GmCXt.urlParts = data.urlParts;

        if (GmCXt.syncCreateInst(action)) {
            if (window.self !== window.top) {
                if (data.stepReq || data.stepReq === null) {
                    GmCXt.stepReq = data.stepReq;
                }
            } else {
                if (GmCXt.stepReq && data.syncStepReq) {
                    GmCXt.stepReq = data.stepReq;
                }
            }
        }
        if (GmCXt.syncPlayerInst(action)) {
            if (window.self !== window.top) {
                if (data.playerInstance || data.playerInstance === null) {
                    GmCXt.playerI = data.playerInstance;
                }
            } else if (data.playerInstance && data.fromSidePanel) {
                GmCXt.playerI = data.playerInstance;
            }
        }
    }
};

GmCXt.verifyMsg = function(event) {
    if (mg$(window).width() <= 1 || mg$(window).height() <= 1) {
        return false;
    }

    event.data = GmCXt.parseJSON(event.data);
    event.data = GmCXt.convertMgdata(event.data);

    var message = event.data;
    var action = message ? message.action : '';

    GmCXt.log(3, "VERIFY MESSAGE " + action);
    if (!message || !action) return false;

    if (action && action.indexOf('MyGuideReporting:Ack') !== -1 &&
        message.data === GmCXt.getAppName()) {
        return; //Reject acknowledgement from self 
    }

    if (action && action.indexOf('MyGuideReporting') !== -1) {
        GmCXt.saveAppPresence(message);
    }

    var valid = false;
    var data = message.data;

    var fromSelf = (action.indexOf('mgPlayerJSTest2_action:') !== -1);

    // for salesforce and service now app backword compatibility 
    if (action === "gmPlayerXt_action:init_sfdc_env" ||
        action === "gmPlayerXt_action:sfdc_play_tour" ||
        action === "gmPlayerXt_action:init_snow" ||
        action === "myguide_action:find_element_request_from_insight" ||
        action === "myguide_action:paste_tour_from_myguide_library" ||
        action === "gmPlayerXt_action:snow_panel_open") {
        fromSelf = true;
    }

    if (fromSelf) {
        if (message && message.data && message.data.sender === "other") {
            delete message.data.organization;
            delete message.data.user;
        }
        GmCXt.initGlobalUser(message);
        GmCXt.initGlobals(action, data);
        valid = true;
    }

    return valid;
};

GmCXt.getMsgPrefix = function() {
    var newPrefix = 'GM:action';

    if (GmCXt.conf.msgPrefix !== "") {
        newPrefix = (GmCXt.conf.msgPrefix + "action");
    }
    return newPrefix;
};

GmCXt.initGlobalUser = function(m) {
    if (m.data && (window.self !== window.top || m.data.fromSidePanel)) {
        if (m.data.user && !GmCXt.isEmpty(m.data.user)) {
            GmCXt.updateGlobalUser(m.data.user);
        }
    }
};

GmCXt.getTourUuid = function(tourId) {
    if (GmCXt.playerI.uuids && GmCXt.playerI.uuids["tour:" + tourId])
        return GmCXt.playerI.uuids["tour:" + tourId];
    else {
        GmCXt.setTourUuid(tourId);
        GmCXt.getTourUuid(tourId);
    }
};

GmCXt.editStepWrapper = function(tour, step, previousStep, language, isDefaultLang, isEditOnImage) {

    var ts = tour.tour_settings;

    var tourStepSettings = false;
    if (!GmCXt.isEmpty(ts.step_settings)) {
        tourStepSettings = ts.step_settings;
    }

    if (step.step_type === GmCXt.STEP_TYPE_INLINE && tour.tour_settings.enableBot) {
        tourStepSettings.tourEnableBot = true;
    }

    var message = {
        data: {
            tourId: tour.tour_id,
            category_id: tour.category_id,
            stepCount: tour.steps.length,
            step: step,
            tourStepSettings: tourStepSettings,
            isGuide: GmCXt.isGuide(tour),
            language: language,
            isDefaultLang: isDefaultLang,
            guideRule: tour.tour_settings.rules,
            previousStep: previousStep || {},
            enableContinueInParent: GmCXt.enableContinueInParent(tour, step.step_order)
        }
    };

    if (isEditOnImage) {
        message.data.isEditOnImage = true;
    }

    if (step.step_type === 'smartTip') {
        message.data.appCode = GmCXt.appList['app:' + GmCXt.activeAppId].external_id;
    }

    if (step.step_type === 'inline' ||
        step.step_type === 'smartTip' ||
        step.step_type === GmCXt.STEP_TYPE_EXTERNAL_AUTOMATION) {

        message.action = "mgPlayerJSTest2_action:edit_step,type:inline";

        if (!isEditOnImage)
            step.step_settings.element = GmCXt.migrateMatchAlgoSetting(step.step_settings.element);

    } else if (GmCXt.isAutomationStep(step)) {
        message.action = "mgPlayerJSTest2_action:edit_step,type:automation";

        if (!isEditOnImage)
            step.step_settings.element = GmCXt.migrateMatchAlgoSetting(step.step_settings.element);

    } else if (step.step_type === 'message') {

        message.action = "mgPlayerJSTest2_action:edit_step,type:message";

        var domElems = step.step_settings.domElems;
        for (var index in domElems) {
            domElems[index].element = GmCXt.migrateMatchAlgoSetting(domElems[index].element);
        }

    } else if (step.step_type === 'image') {
        message.action = "mgPlayerJSTest2_action:edit_step,type:image";
    }

    GmCXt.sendToParentWindow(message);
};

GmCXt.toastMsg = function(message) {

    var self = {
        message: message || 'Default message'
    };

    return {
        show: function() {
            mg$("#mgPlayerJSTest2_toast-msg").remove();

            var html = "<wmgPlayerJSTest2_ id='mgPlayerJSTest2_toast-msg'></wmgPlayerJSTest2_>";
            if (GmCXt.browserApp === 'ie') {
                mg$("body").append(html);
            } else {
                mg$("html").append(html);
            }

            mg$("#mgPlayerJSTest2_toast-msg").html(self.message);
            mg$("#mgPlayerJSTest2_toast-msg").fadeIn();
            GmCXt.timeout(function() {
                mg$('#mgPlayerJSTest2_toast-msg').fadeOut(500);
            }, GmCXt.t.toastMsg);
        }
    };
};

GmCXt.showToastMsg = function(message) {
    mg$("#mgPlayerJSTest2_toast-msg").html(message);
    mg$("#mgPlayerJSTest2_toast-msg").fadeIn();
};

GmCXt.hideToastMsg = function() {
    mg$('#mgPlayerJSTest2_toast-msg').fadeOut(100);
};

GmCXt.toastMsgPersistent = function(message) {
    return {
        show: function() {
            var htmlstr = "<div class='mgPlayerJSTest2_toast-msg-wrapper'><div id='mgPlayerJSTest2_toast-msg-close' >x</div>";
            htmlstr += "<div id='mgPlayerJSTest2_toast-msg-text' >" + message + "</div></div>";
            mg$("#mgPlayerJSTest2_toast-msg").html(htmlstr);
            mg$("#mgPlayerJSTest2_toast-msg").fadeIn();

            mg$("#mgPlayerJSTest2_toast-msg-close").click(function() {
                GmCXt.toastMsgPersistent().hide();
            });
        },
        hide: function() {
            mg$('#mgPlayerJSTest2_toast-msg').fadeOut(500);
        }
    };
};

GmCXt.clearScreen = function() {
    mg$('.mgPlayerJSTest2_inline-step-capture-screen').remove();
};

GmCXt.unlockScroll = function() {

    if (GmCXt.lockScrollPosition === true) {
        GmCXt.lockScrollPosition = false;
        mg$('html').css('overflow', '');
        //mg$('body').css('overflow', '');
        document.removeEventListener('wheel', stopEventPropagation, true);
    }
};

GmCXt.getNewGroup = function() {
    var rule = GmCXt.getEmptyRule();
    rule.logical_condition = "||";

    return [rule];
};

GmCXt.showAlertToastMsg = function(msg) {
    var obj = {
        action: "mgPlayerJSTest2_action:show_toast_message",
        data: msg
    };
    GmCXt.sendToParentWindow(obj);
};

GmCXt.setDefault = function(data, prop, val) {
    if (!data[prop]) {
        data[prop] = val;
    }
};

GmCXt.sanitizeText = function(text) {
    return mg$('<span />').html(text).text();
};

GmCXt.sanitizeTextHtml = function(step) {
    var s = mg$.extend({}, step);
    if (s.step_audio_text)
        s.step_audio_text = GmCXt.sanitizeText(s.step_audio_text);
    s = GmCXt.replaceCdnSignFromStep(s);
    return s;
};

GmCXt.tinymceTargetList = [{
    title: 'Current tab',
    value: '_self'
}, {
    title: 'New tab',
    value: '_blank'
}];

GmCXt.saveImage = function(imageStr) {

    return new Promise(function(resolve, reject) {
        var formData = new FormData();
        formData.append('image_data', imageStr.replace('data:image/jpeg;base64,', ''));

        var options = {
            args: formData
        };
        GmCXt.api.uploadFileBase64(options).then(function(result) {
            resolve(result.data);
        }).catch(function(result) {
            resolve(false);
        });
    });
};

GmCXt.tinyMcePasteSetup = function(ed) {
    var allowedKeys = [8, 37, 38, 39, 40, 46]; // backspace, delete and cursor keys
    ed.on('init', function(e) {
        tinyMceEditLink(ed);
    });
    ed.on('keydown', function(e) {
        if (allowedKeys.indexOf(e.keyCode) != -1) return true;
        if (GmCXt.tinymce_getContentLength() + 1 > this.settings.max_chars) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        return true;
    });
    ed.on('keyup', function(e) {
        if (GmCXt.tinymce_getContentLength() === 0) {
            var scope = angular.element('.step-create-section-container').scope();
            if (scope) {
                if (this.name === "#mgPlayerJSTest2_step_title") {
                    scope.step.step_title = "";
                    mg$("#mgPlayerJSTest2_title-tool-text-color #tox-icon-text-color__color").attr({
                        'fill': '#222f3e',
                        'stroke': '#222f3e'
                    });

                    mg$("#mgPlayerJSTest2_title-tool-bg-color #tox-icon-highlight-bg-color__color").attr({
                        'fill': '#222f3e',
                        'stroke': '#222f3e'
                    });
                }
                if (this.name === "#mgPlayerJSTest2_step_description") {
                    scope.step.step_description = "";
                    mg$("#mgPlayerJSTest2_desc-tool-text-color #tox-icon-text-color__color").attr({
                        'fill': '#222f3e',
                        'stroke': '#222f3e'
                    });

                    mg$("#mgPlayerJSTest2_desc-tool-bg-color #tox-icon-highlight-bg-color__color").attr({
                        'fill': '#222f3e',
                        'stroke': '#222f3e'
                    });
                }

                if (this.name === "#mgPlayerJSTest2_smart_textarea")
                    scope.step.step_settings.smartTip.guidanceMessage = "";
                if (this.name === "#mgPlayerJSTest2_step_tooltip") {
                    if (scope.stepDomElms) {
                        scope.stepDomElms[scope.elemSelectedIndex].title = "";
                    }
                    if (scope.tooltips) {
                        scope.tooltips[scope.elemSelectedIndex].title = "";
                    }
                }
            }
        }
        GmCXt.tinymce_updateCharCounter(this, GmCXt.tinymce_getContentLength());
    });
};

GmCXt.tinyMcePasteProcess = function(plugin, args) {
    var editor = tinymce.get(tinymce.activeEditor.id);
    var len = editor.contentDocument.body.textContent.trim().length;
    var pasteTextLen = GmCXt.sanitizeText(args.content).trim().length;

    if (len + pasteTextLen > editor.settings.max_chars) {
        GmCXt.toastMsg('Pasting this exceeds the maximum allowed number of ' + editor.settings.max_chars + ' characters.').show();
        args.content = '';
    } else {
        GmCXt.tinymce_updateCharCounter(editor, len + pasteTextLen);
    }
};

GmCXt.tinyMCETextContentChange = function() {
    if (tinyMCE.activeEditor && tinyMCE.activeEditor.selection) {
        tinyMCE.activeEditor.selection.collapse(false);
    }
};

GmCXt.videoReturnListener = function(callback) {

    var listen = function(event) {

        event = GmCXt.parseJSON(event);
        event = GmCXt.convertMgdata(event);

        if (event.action === "mgPlayerJSTest2_action:save_video_in_background;task:upload_video;completed") {
            GmCXt.removeVidImageLoader();
            callback(event.data.videoUrl + GmCXt.user.cdn_signature, {
                alt: ''
            });
        }

        return true;
    };

    if (GmCXt.isExtension()) {
        if (GmCXt.browserApp === 'chrome') {
            chrome.runtime.onMessage.addListener(listen);
        }
    }
};

GmCXt.sendVideoUploadMessage = function(url, cb) {
    var m = {
        data: {
            videoUrl: url,
        },
        action: "mgPlayerJSTest2_action:save_video_in_background;task:upload_video"
    };
    GmCXt.videoReturnListener(cb);
    GmCXt.sendMessageToBackgroundService(m);
};

GmCXt.readFile = function(file, cb) {
    if (file) {
        var fileSize = file.size;
        fileSize = ((fileSize / 1024) / 1024).toFixed(4);

        if (!file.type || file.type !== 'video/mp4') {
            GmCXt.showAlertToastMsg(GmCXt.label.imgUploadErr);
            return;
        }

        if (fileSize > 10) {
            GmCXt.showAlertToastMsg(GmCXt.label.imgUploadErr);
            return;
        }
        mg$(".disabledSaveBtn").prop("disabled", true);
        mg$(".disabledSaveBtn").addClass("mgPlayerJSTest2_disabled");
        var url = window.URL.createObjectURL(file);
        var vid = document.getElementById('mgPlayerJSTest2_video-container-currupt-file-test');
        vid.src = url;
        var promise = vid.play();
        if (promise !== undefined) {
            promise.then(function() {
                mg$('.mgPlayerJSTest2_screen-container').show();
                GmCXt.vidImageLoader();
                GmCXt.sendVideoUploadMessage(url, cb);
                vid.pause();
            }).catch(function() {
                mg$('.mgPlayerJSTest2_screen-container').hide();
                GmCXt.showAlertToastMsg(GmCXt.label.curruptVideoFileMsg);
                return;
            });
        }
    }
};

GmCXt.vidImageLoader = function() {
    mg$(".disabledSaveBtn").prop("disabled", true);
    mg$(".disabledSaveBtn").addClass("mgPlayerJSTest2_disabled");
    mg$(".tox-button").addClass("mgPlayerJSTest2_disabled");
    var spinner = "<div class='mgPlayerJSTest2_spinner-wrapper'><img src='" + GmCXt.getBasePath('common/img/g_new_loader.gif') + "'/></div>";
    mg$('.tox-dialog').append(spinner);
};

GmCXt.removeVidImageLoader = function() {
    mg$(".disabledSaveBtn").prop("disabled", false);
    mg$(".disabledSaveBtn").removeClass("mgPlayerJSTest2_disabled");
    mg$(".tox-button").removeClass("mgPlayerJSTest2_disabled");
    mg$('.mgPlayerJSTest2_spinner-wrapper').remove();
};

GmCXt.getStepSortedByPS = function(PS, stepId) {

    var steps = [];

    var firstStep;
    if (stepId) {
        firstStep = GmCXt.getStepFromPlayerI(stepId);
    } else {
        firstStep = GmCXt.getStepFromPlayerI(PS[0].id);
    }

    steps.push(firstStep);

    var seedStepID = firstStep.step_id;
    if (firstStep.step_type !== GmCXt.STEP_TYPE_BRANCH || !stepId) {
        for (var i = 0; i < PS.length; i++) {
            var nextStepId = GmCXt.getTail(seedStepID, PS);
            if (nextStepId) {
                stepToPush = GmCXt.getStepFromPlayerI(nextStepId);
                if (stepToPush) {
                    seedStepID = stepToPush.step_id;
                    steps.push(stepToPush);
                    if (stepToPush.step_type === GmCXt.STEP_TYPE_BRANCH &&
                        stepToPush.step_id !== GmCXt.playerI.currentStepId) {
                        break;
                    }
                } else {
                    break;
                }

            } else {
                break;
            }
        }
    }
    return steps;
};

GmCXt.isEditAnywhere = function(step) {

    var type = step.step_type;
    var el = step.step_settings.element;

    if (type === GmCXt.STEP_TYPE_SMART_TIP) {
        if (el.version && GmCXt.decodeVersion(el.version) < 2020041500) {
            return false;
        } else if (step.image_url && step.image_url.indexOf('default') >= 0) {
            return false;
        } else {
            return true;
        }
    }
    if (step.image_url && step.image_url.indexOf('default') >= 0) {
        return false;
    } else {
        return true;
    }
};

GmCXt.getDoNotShowTours = function(isNotif) {

    return GmCXt.storage().get(['tourIdArray', 'tourIdOnBoardingArray'])
        .then(function(st) {
            return GmCXt.processDoNotShowGuides(st, isNotif);
        });
};

GmCXt.saveSeenToursInDb = function(tour, userSettings) {

    if (!GmCXt.isEmpty(tour)) {

        userSettings.viewed_guide_notifications = tour;

        GmCXt.updateUserProfileSettings(userSettings);

        GmCXt.storage().remove(['tourIdArray']);
    }
};

GmCXt.processDoNotShowGuides = function(st, isNotif) {

    var obj = {};
    var tours = [];
    var userSettings = GmCXt.user.settings || {};

    if (GmCXt.isAnonymousUser()) {
        tours = st.tourIdArray || {};
        if (mg$.isArray(st.tourIdOnBoardingArray)) {
            tours = mg$.extend({}, tours, GmCXt.arrayToObjectNot(st.tourIdOnBoardingArray));
            GmCXt.storage().set({
                'tourIdArray': tours
            });
            GmCXt.storage().remove(['tourIdOnBoardingArray']);
        }
    } else {
        tours = userSettings.viewed_guide_notifications || {};
        if (mg$.isArray(userSettings.viewed_onboarding_guide_notifications)) {
            tours = mg$.extend({}, tours, GmCXt.arrayToObjectNot(userSettings.viewed_onboarding_guide_notifications));
            delete userSettings.viewed_onboarding_guide_notifications;
            GmCXt.saveSeenToursInDb(tours, userSettings);
        }
    }

    if (Array.isArray(tours)) {
        obj = GmCXt.arrayToObjectNot(tours);
        if (!GmCXt.isAnonymousUser()) GmCXt.saveSeenToursInDb(obj, userSettings);
    } else {
        obj = tours;
    }

    return obj;
};

GmCXt.arrayToObjectNot = function(tours) {
    var tempObj = {};
    for (var key in tours) {
        if (tours[key]) tempObj[tours[key]] = 1;
    }
    return tempObj;
};

GmCXt.escapeHtml = function(str) {
    if (str) {
        str = str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
    return str;
};

GmCXt.removeNotif = function() {
    mg$(".mgPlayerJSTest2_overlay-tours-popup").remove();
    mg$(".mgPlayerJSTest2_overlay-container").remove();
};

GmCXt.getObjectSize = function(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key))
            size++;
    }
    return size;
};

GmCXt.updateUserProfileSettings = function(userSettings) {
    var user = GmCXt.user;
    user.settings = userSettings;

    GmCXt.sendMessageToApp('mgPlayerJSTest2_action:update_user_data', {
        user: user
    });

    GmCXt.sendMessageToApp('mgPlayerJSTest2_action:update_organization_data', {
        organization: GmCXt.organization
    });
};

GmCXt.updatePlayedSteps = function(step) {
    GmCXt.sendMessageToApp("mgPlayerJSTest2_action:update_played_step", {
        playedStep: step
    });
};

GmCXt.lastCheckWidgetIcon = 0;

GmCXt.getWidgetIcon = function() {

    return new Promise(function(resolve, reject) {

        var i = 'common/img/widget_icon.png';

        if (GmCXt.isExtension()) {
            i = GmCXt.getBrowserUrl(i);
        } else {
            i = GmCXt.conf.baseUrl + i;
        }

        var s = GmCXt.getWidgetSettings();

        if (s && s.widget_icon_path && !GmCXt.isDefaultIcon(s.widget_icon_path)) {
            i = s.widget_icon_path + GmCXt.getCdnSign();
        }

        //check if widgetIcon needs to get new signature. 
        var isSignExp = (GmCXt.getCurrentTimeInMilSec() - GmCXt.lastCheckWidgetIcon > GmCXt.t.refreshWidget) ? true : false;

        resolve(i);
    });
};

GmCXt.getChatIcon = function() {

    return new Promise(function(resolve, reject) {
        var i = GmCXt.conf.staticContentPath + "chat_bot_icon.png";

        var s = GmCXt.getAppSetting();

        if (s && s.chat_icon_path && !GmCXt.isDefaultIcon(s.chat_icon_path)) {
            i = s.chat_icon_path + GmCXt.getCdnSign();
        }

        //check if widgetIcon needs to get new signature. 
        var isSignExp = (GmCXt.getCurrentTimeInMilSec() - GmCXt.lastCheckWidgetIcon > GmCXt.t.refreshWidget) ? true : false;

        resolve(i);
    });
};

GmCXt.getWidgetAlignment = function() {
    var alignment = "right";
    return alignment;
};

GmCXt.visibleWindow = function(data) {
    if (data.checkIframe) {
        if (!GmCXt.isEmpty(data.frame.attributes) &&
            !data.frame.attributes.isVisible) {
            return false;
        }
    }
    return true;
};

GmCXt.getSteps = function(data) {

    if (GmCXt.isSidePanelApp) {
        return new Promise(function(resolve, reject) {
            GmCXt.api.getTour(data).then(function(_tour) {
                resolve(_tour);
            });
        });
    } else {
        return new Promise(function(resolve, reject) {
            GmCXt.callApi(data, "tour")
                .then(function(_tour) {
                    resolve(_tour);
                });
        });
    }
};

GmCXt.checkIfInvalidSegment = function(data) {
    return new Promise(function(resolve, reject) {
        GmCXt.getSteps(data).then(function(_tour) {
            var flag = true;
            if (!_tour) {
                flag = false;
            }
            resolve(flag);
        });
    });
};

GmCXt.updatePlayStructureLinkGuide = function(tour, playerInstance, cb) {

    var linkPS = GmCXt.getGuidePlayStructure(tour);

    var pi;
    if (GmCXt.playerI) {
        pi = GmCXt.playerI;
    } else if (playerInstance) {
        pi = playerInstance;
    }

    var tailCurrent = linkPS[0].id;
    var PS = pi.playStructure;
    var isFirstStepLink = false;

    for (var i = 0; i < PS.length; i++) {
        if (PS[i].tail === pi.currentStepId) {
            PS[i].tail = tailCurrent;
        } else if (PS[i].branch) {
            for (var j = 0; j < PS[i].branch.length; j++) {
                if (PS[i].branch[j].tail === pi.currentStepId) {
                    PS[i].branch[j].tail = tailCurrent;
                }
            }
        }
        if (PS[i].id === pi.currentStepId) {
            linkPS = GmCXt.updatePSLastTail(linkPS, PS[i].tail);
            PS[i].tail = null;
            if (i === 0) {
                isFirstStepLink = true;
            }
        }
    }

    pi.linkGuideFS = linkPS[0].id;

    if (isFirstStepLink) {
        PS[0] = linkPS[0];
        linkPS.splice(0, 1);
        pi.startStepId = PS[0].id;
    }

    var finalPS = mg$.extend([], PS.concat(linkPS));
    if (pi.type === GmCXt.TOUR_PLAYER_SLIDESHOW) {
        GmCXt.playerI = pi;
        GmCXt.playerI.playStructure = finalPS;
    } else if (playerInstance && !GmCXt.playerI) {
        if (cb) cb(finalPS);
    } else {
        GmCXt.sendMessageToParentWindow("mgPlayerJSTest2_action:update_PI_PS", finalPS);
    }
};

GmCXt.updatePSLastTail = function(PS, tail) {
    for (var i = 0; i < PS.length; i++) {
        if (PS[i].branch) {
            for (var j = 0; j < PS[i].branch.length; j++) {
                if (PS[i].branch[j].tail === null) {
                    PS[i].branch[j].tail = tail;
                }
            }
        } else if (PS[i].tail === null) {
            PS[i].tail = tail;
        }
    }
    return PS;
};

GmCXt.concatLinkGuideSteps = function(newSteps, tour, step_id, cb) {

    var guideStepIndex;
    if (tour && step_id) {
        guideStepIndex = GmCXt.getCurrentStepIndex(tour, step_id);
    } else {
        guideStepIndex = GmCXt.getCurrentStepIndex();
    }

    var steps = [];
    if (tour) {
        steps = mg$.extend([], tour.steps);
    } else {
        steps = mg$.extend([], GmCXt.playerI.tour.steps);
    }

    if (tour && step_id) {
        steps = steps.filter(function(step, i) {
            return step.step_id !== step_id;
        });
    } else {
        steps = steps.filter(function(step, i) {
            return step.step_id !== GmCXt.playerI.currentStepId;
        });
    }

    steps.splice.apply(steps, [guideStepIndex, 0].concat(newSteps));
    if (GmCXt.playerI) {
        if (GmCXt.playerI.type === GmCXt.TOUR_PLAYER_SLIDESHOW) {
            GmCXt.playerI.tour.steps = steps;
        } else {
            GmCXt.sendMessageToParentWindow("mgPlayerJSTest2_action:update_PI_steps", steps);
        }
        GmCXt.playerI.totalStepCount = steps.length;
        GmCXt.playerI.tour.step_count = steps.length;
    } else {
        if (cb) cb(steps);
    }
};

GmCXt.stopNotification = function(isPreview) {
    var flag = false;
    var reason = '';

    if (!GmCXt.isPlayer() && !isPreview) {
        reason = "app is not a player";
        flag = true;
    } else if (mg$('.mgPlayerJSTest2_image-step-screen').is(':visible') || mg$('.mgPlayerJSTest2_preview-step-popup-container').is(':visible')) {
        reason = "step is playing";
        flag = true;
    } else if (mg$('.mgPlayerJSTest2_user-guide-container').is(':visible')) {
        reason = "survey is open";
        flag = true;
    } else if (mg$('.mgPlayerJSTest2_notifcation-popup').is(':visible')) {
        reason = "org notification";
        flag = true;
    } else if (mg$('.mgPlayerJSTest2_slideshow-panel').is(':visible')) {
        reason = "slideshow playing";
        flag = true;
    } else if (mg$('.mgPlayerJSTest2_play-pause-toolbar').is(':visible')) {
        reason = "pause guide";
        flag = true;
    } else if (GmCXt.APP_PANEL_OPEN && !GmCXt.getAppSetting('keep_player_panel_open')) {
        reason = "side panel open";
        flag = true;
    } else if (GmCXt.playerI) {
        reason = "tour is active";
        flag = true;
    } else if (!GmCXt.isEmpty(GmCXt.testMe)) {
        reason = "test me active";
        flag = true;
    }

    if (flag) {
        GmCXt.log(10, "STOP notification because " + reason);
    }
    return flag;
};

GmCXt.initializeAudio = function(audioElement, stream) {
    try {
        audioElement[0].srcObject = stream;
    } catch (error) {
        audioElement[0].src = window.URL.createObjectURL(stream);
    }

    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
    return mediaRecorder;
};

GmCXt.populateValueField = function(rule) {
    if (rule.condition === "Is Visible") {
        rule.condition = GmCXt.VISIBLE;
    } else if (rule.condition === "Is Not Visible") {
        rule.condition = GmCXt.NOT_VISIBLE;
    }

    if (rule.type === 'Select Element') {
        rule.showValueField = false;

        var txtValArr = [GmCXt.STARTS_WITH, GmCXt.ENDS_WITH,
            GmCXt.EQUALS, GmCXt.NOT_EQUAL, GmCXt.CONTAINS, GmCXt.NOT_CONTAINS,
            GmCXt.TXT_EQUALS, GmCXt.NOT_TXT, GmCXt.GREAT_THAN, GmCXt.LESS_THAN,
            GmCXt.TXT_CONTAINS, GmCXt.TXT_MATCHES
        ];

        var cssValArr = [GmCXt.CLASSES, GmCXt.NOT_CLASSES, GmCXt.ATTRIBUTES, GmCXt.NOT_ATTRIBUTES];

        var index = mg$.inArray(rule.condition, cssValArr);
        if (index > -1) {
            if (!rule.txtValue) {
                rule.txtValue = rule.value;
            }

            var attrs = mg$.extend({}, rule.element.meta.elAttributes);
            delete attrs.tagName;

            if (index < 2) {
                rule.value = attrs.class ? attrs.class.replace(/ /g, ', ') : '';
            } else {
                rule.value = Object.keys(attrs).join(', ');
            }

            rule.showValueField = true;

        } else if (mg$.inArray(rule.condition, txtValArr) > -1) {
            if (rule.txtValue) {
                rule.value = rule.txtValue;
                rule.txtValue = null;
            }
            rule.showValueField = true;
        } else {
            rule.showValueField = false;
        }

    } else if (rule.type === 'Display Frequency') {
        var freqValArr = [GmCXt.DAY_OF_WEEK, GmCXt.FIX_TIME];
        if (mg$.inArray(rule.condition, freqValArr) > -1) {
            rule.value = '';
            rule.showValueField = true;
        } else {
            rule.showValueField = false;
        }
    } else if (rule.type === 'Variables') {
        if (rule.condition === GmCXt.IS_VALID) {
            rule.value = '';
        } else {
            rule.value = GmCXt.getVariableValue(rule.variableData);
        }
        rule.showValueField = true;
    } else {
        rule.showValueField = true;
    }
};

GmCXt.sendMsgToParentFromStepPanel = function(action, data) {

    data = data || {};
    data.stepReq = GmCXt.stepReq;
    data.syncStepReq = true;

    var object = {
        action: action,
        data: data
    };

    GmCXt.sendToParentWindow(object);
};

GmCXt.setCustomAttributesChecked = function(el) {
    var matchAttr = {};

    if (el && el.criteria && el.criteria.matchAttributes) {
        var attrList = el.criteria.matchAttributes;

        if (attrList) {
            for (var index in attrList) {
                matchAttr[attrList[index]] = true;
            }
        }
    }

    return matchAttr;
};

GmCXt.checkSalesForceSite = function() {
    var url = GmCXt.getUrl();
    if (url.indexOf('salesforce.com') > 0 || url.indexOf('lightning.force.com') > 0)
        return true;
    else
        return false;
};

GmCXt.checkWorkdaySite = function() {
    var url = GmCXt.getUrl();
    if (url.indexOf('workday.com') > 0)
        return true;
    else
        return false;
};

GmCXt.checkUBS = function() {
    var url = GmCXt.getUrl();
    if (url.indexOf('ubs.net') > -1 || url.indexOf('pwj.com') > -1)
        return true;
    else
        return false;
};

GmCXt.checkServiceNow = function() {
    var url = GmCXt.getUrl();
    if (url.indexOf('service-now.com') > -1)
        return true;
    else
        return false;
};

GmCXt.getCurrentStep = function(stepId) {

    var step = mg$.extend({}, GmCXt.getStepFromPlayerI(stepId));

    if (!step.step_description) step.step_description = " ";

    // Map properties
    step.image_url = step.image_url + GmCXt.getCdnSign();
    step.screen_url = step.screen_url + GmCXt.getCdnSign();

    return step;
};

GmCXt.getNextStep = function() {
    if (GmCXt.playerI) {
        var step = GmCXt.getCurrentStep(GmCXt.playerI.currentStepId);
        var nextStepId = GmCXt.getTail(step.step_id, GmCXt.playerI.playStructure);

        if (nextStepId) {
            return GmCXt.getStepFromPlayerI(nextStepId);
        } else {
            return null;
        }
    } else {
        return null;
    }
};

GmCXt.getProcessedLang = function(l) {
    var langList = {
        'ar': 'ar-SA',
        'ar-EG': 'ar-EG',
        'ar-SA': 'ar-SA',
        'zh': 'zh-CN',
        'zh-HK': 'zh-HK',
        'zh-CN': 'zh-CN',
        'zh-TW': 'zh-TW',
        'zh-Hant': 'zh-TW',
        'cs': 'cs-CZ',
        'cs-CZ': 'cs-CZ',
        'da': 'da-DK',
        'da-DK': 'da-DK',
        'nl': 'nl-NL',
        'nl-NL': 'nl-NL',
        'en': '',
        'fi': 'fi-FI',
        'fi-FI': 'fi-FI',
        'fr': 'fr-FR',
        'fr-FR': 'fr-FR',
        'fr-CH': 'fr-CH',
        'fr-CA': 'fr-CA',
        'de': 'de-DE',
        'de-AT': 'de-AT',
        'de-DE': 'de-DE',
        'de-CH': 'de-CH',
        'el': 'el-GR',
        'el-GR': 'el-GR',
        'he': 'he-IL',
        'he-IL': 'he-IL',
        'hi': 'hi-IN',
        'hi-IN': 'hi-IN',
        'hu': 'hu-HU',
        'hu-HU': 'hu-HU',
        'id': 'id-ID',
        'id-ID': 'id-ID',
        'it': 'it-IT',
        'it-IT': 'it-IT',
        'ja': 'ja-JP',
        'ja-JP': 'ja-JP',
        'ko': 'ko-KR',
        'ko-KR': 'ko-KR',
        'pl': 'pl-PL',
        'pl-PL': 'pl-PL',
        'pt': 'pt-PT',
        'pt-PT': 'pt-PT',
        'pt-BR': 'pt-BR',
        'ro': 'ro-RO',
        'ro-RO': 'ro-RO',
        'ru': 'ru-RU',
        'ru-RU': 'ru-RU',
        'sk': 'sk-SK',
        'sk-SK': 'sk-SK',
        'es': 'es-ES',
        'es-ES': 'es-ES',
        'es-MX': 'es-MX',
        'sv': 'sv-SE',
        'sv-SE': 'sv-SE',
        'ta': 'ta-IN',
        'ta-IN': 'ta-IN',
        'te': 'te-IN',
        'te-IN': 'te-IN',
        'th': 'th-TH',
        'th-TH': 'th-TH',
        'tr': 'tr-TR',
        'tr-TR': 'tr-TR',
        'vi': 'vi-VN',
        'vi-VN': 'vi-VN'
    };

    var lang = langList[l];

    if (lang)
        return lang;
    else
        return 'en-US';
};

GmCXt.parseMsg = function(e) {

    e = mg$.extend({}, e);
    e.data = GmCXt.parseJSON(e.data);
    GmCXt.log(3, "PARSE MESSAGE " + e.data.action);
    return e.data;
};

GmCXt.browserLang = GmCXt.getProcessedLang(window.navigator.language);

GmCXt.checkLangExist = function(lArr, lang) {
    var retVal = false;

    if (lArr && !GmCXt.isFalse(lang)) {

        for (var i = 0; i < lArr.length; i++) {
            if (lArr[i].language === lang) {
                retVal = true;
                break;
            }
        }
    }

    return retVal;
};

GmCXt.removePreviewFrame = function() {

    mg$('.mgPlayerJSTest2_preview-beacon').remove();
    mg$('.mgPlayerJSTest2_preview-smarttip').remove();
    mg$('.gssSmarttip-form-submit').removeClass('mgPlayerJSTest2_form-submit-preview gssSmarttip-form-submit');
    mg$('.mgPlayerJSTest2_duct-tape-invisible-preview').removeClass('mgPlayerJSTest2_duct-tape-invisible-preview');

    if (mg$('.mgPlayerJSTest2_preview-smarttip-pwr-html').length)
        mg$('.mgPlayerJSTest2_preview-smarttip-pwr-html').val('');
};

GmCXt.clearSession = function() {

    if (GmCXt.user) {
        GmCXt.user = false;
    }

    GmCXt.clearBeaconsAndTooltips(true);
    GmCXt.highlighter.clear();

    GmCXt.playedTour = [];
    GmCXt.storage().remove(['playedTour', 'stepsPlayed']);

    if (mg$('.mgPlayerJSTest2_task-list-button').length > 0) {
        mg$('.mgPlayerJSTest2_task-list-button').remove();
    }
};

GmCXt.clearBeaconsAndTooltips = function(isLogout, idList) {

    if (idList) {
        // Clear specific (if parameter is passed)
        if (idList.length) {
            for (var i = 0; i < idList.length; i++) {
                GmCXt.log(43, 'Clearing tooltips for tour: ' + idList[i]);
                mg$('.mgPlayerJSTest2_smarttip-tour-' + idList[i]).remove();
                mg$('.mgPlayerJSTest2_duct-tape-smarttip-tour-' + idList[i]).removeClass('mgPlayerJSTest2_duct-tape-invisible');
                delete GmCXt.onScreenTooltipGuideInfo['tour_' + idList[i]];
            }

            GmCXt.onScreenTooltipGuideIds = GmCXt.onScreenTooltipGuideIds.filter(function(id) {
                return idList.indexOf(id) === -1;
            });

            GmCXt.partialVisibleTooltipsIds = GmCXt.partialVisibleTooltipsIds.filter(function(id) {
                return idList.indexOf(id) === -1;
            });
        }
    } else {
        // Clear all
        mg$('.mgPlayerJSTest2_smarttip-icon').remove();
        mg$('.smarttip-guidance-msg').remove();
        mg$('.mgPlayerJSTest2_smarttip').remove();
        mg$('.mgPlayerJSTest2_smarttip-valid').remove();
        mg$('.mgPlayerJSTest2_duct-tape').remove();
        mg$('.mgPlayerJSTest2_duct-tape-invisible').removeClass('mgPlayerJSTest2_duct-tape-invisible');
    }

    mg$(".mgPlayerJSTest2_beacon-icon").remove();
    GmCXt.beaconsOnScreen = [];

    if (!isLogout) {
        GmCXt.closePowerForm();
    }

    GmCXt.sendMessageToAllWindows('mgPlayerJSTest2_action:forward;remove_active_smarttip_beacon', {
        idList: idList
    });
};

GmCXt.closePowerForm = function() {
    GmCXt.sendMessageToApp("mgPlayerJSTest2_action:close_power_form", {});
};

GmCXt.closeAppPanel = function() {
    GmCXt.APP_PANEL_OPEN = false;
    GmCXt.displayWidget();
    GmCXt.displayChatIcon();
    var alignment = GmCXt.getWidgetAlignment();
    mg$(".mgPlayerJSTest2_panel .mgPlayerJSTest2_app").css(alignment, "-9550px");
    mg$(".mgPlayerJSTest2_panel").css(alignment, "-9550px");
    if (alignment === 'right') {
        mg$(".mgPlayerJSTest2_panel").css('left', "initial");
    }

    if (GmCXt.isMicroPlayer() || GmCXt.isWBMicroPlayer()) {
        mg$(".mgPlayerJSTest2_panel").css("left", "initial");
        mg$(".mgPlayerJSTest2_panel").css("top", "50%");
    }
    
    mg$(".mgPlayerJSTest2_panel").attr({'aria-hidden':true, 'tabindex':-1});
    mg$("#mgPlayerJSTest2_app").attr({'aria-hidden':true, 'tabindex':-1});
    mg$(".mgPlayerJSTest2_panel").focus();

    GmCXt.sendMessageToApp("mgPlayerJSTest2_action:app_panel_closed", {});
};

GmCXt.legacyWildChar = function(v) {
    return GmCXt.decodeVersion(v) <= 2020063002;
};

GmCXt.getMd5 = function(val) {
    return md5(val);
};

GmCXt.getAppsArray = function(apps) {
    var r = [];

    for (var k in apps) {
        if (apps.hasOwnProperty(k)) {
            r.push(k);
        }
    }
    return r;
};

GmCXt.checkGmailSite = function() {
    var url = GmCXt.getUrl();
    if (url.indexOf('mail.google.com') === 0)
        return true;
    else
        return false;
};

GmCXt.sendMessageToDesktopApp = function(msg, d) {
    GmCXt.log(38, "Send message to Desktop App - ", msg, d);
    var url = '';
    var eventList = {
        "clickNext": 'click',
        "onRightClickNext": 'right-click',
        "onKeyupNext": 'keyup',
        "onChangeNext": 'change',
        "hoverNext": 'hover'
    };

    GmCXt.log(33, "Sending message to CAD");
    GmCXt.log(33, msg);

    switch (msg) {
        case 'step_complete':
            url = "event/step_complete" +
                "?step_id=" + d.step_id + "&step_order" + d.step_order;
            break;

        case 'step_failed':
            url = "event/step_failed" +
                "?step_id=" + d.step_id + "&tour_id=" + GmCXt.deskReq.testCaseId + "&jobId=" + GmCXt.deskReq.jobId;
            break;

        case 'trigger_event':
            var event = d.step_settings.completionEvent;
            var as = d.step_settings.automation;
            var query = '';

            if (as.enableDefaultData) {
                query += 'value=' + escape(as.defaultData);
            }
            query += '&human_interaction=' + escape(as.hasHumanInteraction);

            if (as.element && as.element.dataOptionsType) {
                query += '&type=' + escape(as.element.dataOptionsType);
            }

            if (as.file) {
                query += '&filePath=' + escape(as.file);
            }

            var cname = 'doitforme-' + d.step_id;

            url = "action/" + eventList[event] + "/" + cname + "?" + query;

            break;

        case 'image_comparison':
            var msg = 'Finding image match';
            if (!GmCXt.isEmpty(d.step_title)) {
                msg += (" for step '<b>" + d.step_title + "</b>' ");
            }
            GmCXt.toastMsg(msg).show();

            url = 'image_comparison/doitforme-' + d.step_id + '?';
            break;

        case 'task_complete':
            var query = '';

            if (GmCXt.deskReq) {
                if (GmCXt.deskReq.testCaseId) {
                    query += 'tour_id=' + GmCXt.deskReq.testCaseId;
                }
                if (GmCXt.deskReq.jobId) {
                    query += '&jobId=' + GmCXt.deskReq.jobId;
                }

                if (GmCXt.deskReq.jobRunId) {
                    query += '&jobRunId=' + GmCXt.deskReq.jobRunId;
                }
                if (d && d.isError) {
                    query += '&isError=true&errorMessage=' + d.errorMessage;
                }
            }
            if (d && d.entity_code) {
                query += '&entityCode=' + d.entity_code;
            }
            url = "event/task_complete?" + query;
            break;
    }

    if (GmCXt.deskReq && GmCXt.deskReq.driverId) {
        url += "&driver=" + GmCXt.deskReq.driverId;
    }

    GmCXt.log(33, url);

    function cb(tabId) {

        url += '&tabid=' + tabId;

        GmCXt.timeout(function() {
            var params = {
                url: url,
                stepType: (d && d.step_settings) ? d.step_settings.stepType : '',
            };

            if (d && d.step_type === GmCXt.STEP_TYPE_IMAGE) {
                params.info = d;
            }

            GmCXt.callApi(params, "connectMgDesktop");
        }, 3000);
    }
    GmCXt.log(37, "msg send to desktop", url);
    if (GmCXt.isBackgroundPage) {
        cb(GmCXt.trackerUtil.tabId);
    } else {
        GmCXt.sendMessageToBackgroundService({
            action: "mgPlayerJSTest2_action:get_current_tab_id"
        }, cb);
    }
};

GmCXt.compareArraysByPercentMatch = function(arr1, arr2, val) {
    var similar = arr1.filter(function(n) {
        return this.has(n);
    }, new Set(arr2));

    var pc = 100 * (similar.length * 2) / (arr1.length + arr2.length);

    val = val || 75;
    return pc >= val;
};


GmCXt.migrateOldRules = function(rules) {
    if (rules && rules.length > 0) {
        for (var i = 0; i < rules.length; i++) {
            var rule = rules[i];
            if (rule.value.indexOf("*") !== -1 && rule.value.indexOf("{*}") === -1) {
                rule.value = rule.value.replaceAll('*', "{*}");
            }

            if (rule.value.indexOf("+") !== -1 && rule.value.indexOf("{+}") === -1) {
                rule.value = rule.value.replaceAll('+', "{+}");
            }
        }
    }

    return rules;
};

GmCXt.compareObjectsByPercentMatch = function(o1, o2, val, keys) {

    if (!GmCXt.isEmpty(o1) && !GmCXt.isEmpty(o2)) {

        var textKeys = ['aria-label'];
        var matched = 0;
        var compared = 0;
        keys = keys || Object.keys(o1);
        var len = keys.length;

        for (var i = 0; i < len; i++) {
            var key = keys[i];
            if (o1.hasOwnProperty(key) && o2.hasOwnProperty(key)) {
                compared++;
                if (typeof o1[key] === 'object') {
                    if (Array.isArray(o1[key])) {
                        if (GmCXt.compareArraysByPercentMatch(o1[key], o2[key], 50)) matched++;
                    } else if (GmCXt.compareObjectsByPercentMatch(o1[key], o2[key], 50)) matched++;
                } else {
                    if (textKeys.includes(key) && o1[key] !== o2[key]) return false;
                    if (o1[key] === o2[key]) matched++;
                }
            }
        }

        if (!compared) return false;

        var currentPc = 100 * matched / compared;
        var pc = val || 75;

        if (currentPc >= pc) {
            return true;
        }
    }

    return false;
};

GmCXt.checkInsightEnabled = function() {
    var org = GmCXt.organization;
    if (org && org.admin_settings.insights.enabled && org.admin_settings.insights.guide) {
        return true;
    }
    return false;
};

GmCXt.toggleStepSelectionToolbar = function(show, showDone, inlineStepReq) {
    if (show) {
        mg$('.mgPlayerJSTest2_toolbar-panel').show();

        if (showDone) {
            GmCXt.sendMessageToolbar("mgPlayerJSTest2_action:show_done_button", {
                isQuick: inlineStepReq
            });
        } else {
            GmCXt.sendMessageToolbar("mgPlayerJSTest2_action:hide_done_button");
        }

        var u = GmCXt.user.settings || {};
        if (u.showToolbarTooltip) {
            mg$('.mgPlayerJSTest2_toolbar-tooltip').show();
        }

    } else {
        mg$('.mgPlayerJSTest2_toolbar-panel').hide();
        mg$('.mgPlayerJSTest2_toolbar-tooltip').hide();
        GmCXt.sendMessageToolbar("mgPlayerJSTest2_action:hide_done_button");
        // disable_mouse_hover
        window.removeEventListener('mouseover', stopEventPropagation, true);
    }
};

GmCXt.resizeBase64Image = function(base64Str, quality) {
    return new Promise(function(resolve) {
        var img = new Image();
        img.src = base64Str;
        img.onload = function() {
            var canvas = document.createElement('canvas');
            canvas.width = this.naturalWidth;
            canvas.height = this.naturalHeight;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, this.naturalWidth, this.naturalHeight);
            resolve(canvas.toDataURL("image/jpeg", quality));
        };
    });
};

GmCXt.getBase64ImageSize = function(base64Image) {
    var base64Data = base64Image.split(',')[1];
    var size = (base64Data.length * (3 / 4)) - (base64Data.indexOf('=') > 0 ? (4 - base64Data.indexOf('=')) : 0);
    return Math.round(size / 1024);
};

GmCXt.toDataURL = function(url) {
    return new Promise(function(resolve) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
                resolve(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    });
};

GmCXt.cropTemplate = function(base64Str, x, y, width, height) {
    return new Promise(function(resolve) {
        var img = new Image();
        img.src = base64Str;
        img.onload = function() {
            var canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, x, y, width, height, 0, 0, width, height);
            resolve(canvas.toDataURL("image/png", 1.0));
        };
    });
};

GmCXt.getBasePath = function(i) {
    var url = "";
    if (GmCXt.isExtension()) {
        url = GmCXt.getBrowserUrl(i);
    } else {
        url = GmCXt.conf.baseUrl + i;
    }

    return url;
};

// Only applicable after version 2021.01.30.1
GmCXt.checkTourCreatedBefore = function(tourSettings, version) {
    return (!tourSettings.hasOwnProperty('created_version') || GmCXt.decodeVersion(tourSettings.created_version) < version);
};

GmCXt.reassignTourURls = function(urls, tour) {

    var updateStepUrl = function(u, key, tour) {
        var stepId = key.split('-')[1];
        var p = key.split('-')[0];

        for (var i = 0; i < tour.steps.length; i++) {

            var step = tour.steps[i];

            if (step.step_id === stepId) {

                if (p === 'smartTip_icon') {
                    step.step_settings.smartTip.icon = u;
                } else {
                    step[p] = u;
                }

                tour.steps[i] = step;
            }
        }
        return tour;
    };

    for (var key in urls) {
        var u = urls[key];

        switch (key) {
            case 'image_url':
                tour.image_url = u;
                break;

            case 'thumbnail_url':
                tour.thumbnail_url = u;
                break;

            case 'beaconIcon':
                tour.tour_settings.beacon.beaconIcon = u;
                break;

            case 'beaconPreviewImagePath':
                tour.tour_settings.beacon.beaconPreviewImagePath = u;
                break;

            case 'beaconIcon':
                tour.tour_settings.beacon.beaconIcon = u;
                break;

            case 'first_slide_img':
                tour.tour_settings.video_settings.first_slide_img = u;
                break;

            case 'last_slide_img':
                tour.tour_settings.video_settings.last_slide_img = u;
                break;

            case 'first_slide_recorded_audio_url':
                tour.tour_settings.video_settings.first_slide_recorded_audio_url = u;
                break;

            case 'last_slide_recorded_audio_url':
                tour.tour_settings.video_settings.last_slide_recorded_audio_url = u;
                break;

            case 'pdf':
                tour.media_files[0].pdf = u;
                break;

            case 'ppt':
                tour.media_files[0].ppt = u;
                break;

            case 'text':
                tour.media_files[0].text = u;
                break;

            case 'video':

                tour.media_files[0].video = u;
                break;

            case 'doc':
                tour.media_files[0].doc = u;
                break;

            case 'gify':
                tour.media_files[0].gify = u;
                break;

            default:
                tour = updateStepUrl(u, key, tour);
        }
    }

    return tour;
};

GmCXt.replaceNthOccurence = function(text, pattern, replaceStr, n) {
    var i = 0;

    text = text.replace(pattern, function(match) {
        i++;
        return (i === n) ? replaceStr : match;
    });

    return text;
};

GmCXt.getEtagBundle = function(eTagsArr) {
    var str = "<CompleteMultipartUpload>";
    for (var i = 0; i < eTagsArr.length; i++) {
        str += '<Part><PartNumber>' + (i + 1);
        str += '</PartNumber><ETag>"' + eTagsArr[i] + '"</ETag></Part>';
    }
    str += "</CompleteMultipartUpload>";
    return str;
};

GmCXt.getEtagFromHeader = function(reqHeader) {
    if (reqHeader.indexOf("etag:") > 0) {
        var arr = reqHeader.split("etag: \"");
        var arr2 = arr[1].split("\"");
        return arr2[0];
    } else {
        return false;
    }
};

GmCXt.getTourSegmentDetail = function(tour) {
    var segmentDetails = [];
    var tour_segs = tour.tour_settings.segment_groups;
    tour_segs.forEach(function(s) {
        var sg = GmCXt.getSegmentById(s);
        if (!GmCXt.isEmpty(sg)) {
            segmentDetails.push(sg);
        }
    });
    return segmentDetails;
};

GmCXt.getSegmentById = function(id) {
    if (GmCXt.allSegments) {
        return GmCXt.allSegments.filter(function(g) {
            return parseInt(g.group_id) === parseInt(id);
        })[0];
    } else return {};
};

GmCXt.validatedSegments = {};

GmCXt.areUserSegmentsValid = function(segments, segmentId) {
    var userProfileData = GmCXt.user.profile ? JSON.parse(GmCXt.user.profile) : "";
    var isValid = false;

    var userData = [];
    if (userProfileData && Object.prototype.toString.call(userProfileData) !== '[object Array]') {
        for (var i = 0; i < Object.keys(userProfileData).length; i++) {
            key = Object.keys(userProfileData)[i];
            value = userProfileData[key];
            userData.push({
                data: value
            });
        }
    } else {
        userData = userProfileData;
    }

    if (!userData) return isValid;

    if (!segments || !segments.length) return true;

    if (GmCXt.user.role !== "user") return true;

    for (var i = 0; i < segments.length; i++) { // For each segment in the segmentation
        if (!GmCXt.isEmpty(segments[i].data)) {
            for (var j = 0; j < userData.length; j++) {
                if (userData[j].id && !GmCXt.isEmpty(userData[j].data) && parseInt(segments[i].id) === parseInt(userData[j].id)) {
                    isValid = false;
                    for (var k = 0; k < segments[i].data.length; k++) {
                        if (userData[j].data.includes(segments[i].data[k])) {
                            isValid = true;
                            break;
                        }
                    }
                } else if (!GmCXt.isDefined(userData[j].id) && !GmCXt.isEmpty(userData[j].data)) {
                    for (var k = 0; k < segments[i].data.length; k++) {
                        if (userData[j].data.includes(segments[i].data[k])) {
                            isValid = true;
                            break;
                        }
                    }
                }
            }
            if (!isValid) break;
        }
    }

    GmCXt.log(68, "Valid User Segments: ", isValid);
    return isValid;
};

GmCXt.checkGuidesBasedOnSegment = function(tours, cb, from) {

    if (!tours || !tours.length) {
        cb({});
        return;
    }

    var allSegment = [];
    var totalSegment = 0;
    var toursProcessed = 0;
    var segmentProcessed = 0;
    var validatedTours = [];

    var totalTours = tours.length;

    function checkTourSegment() {
        tours.forEach(function(tour) {

            GmCXt.log(68, "Check Segments in Tour: " + GmCXt.tourLog(tour));

            var isSegmentValid = false;
            var segments = tour.tour_settings.segment_groups;
            for (var i = 0; i < segments.length; i++) { // For each segmentation added
                if (GmCXt.validatedSegments[segments[i]]) {
                    isSegmentValid = true;
                    break;
                }
            }

            if (isSegmentValid && !GmCXt.inArray(tour.tour_id, validatedTours)) {

                validatedTours.push(parseInt(tour.tour_id));

                toursProcessed++;

                GmCXt.log(68, "VALID Tour segments: " + GmCXt.tourLog(tour));

                cb(tour);
            }
        });
    }

    // segment rules call back 
    function segmentRuleCallBack(r) {

        segmentProcessed++;

        if (GmCXt.isTrue(r.valid)) {
            GmCXt.validatedSegments[r.segmentId] = true;
            GmCXt.log(68, "Validat Segment ", r);
        }

        if (toursProcessed !== totalTours) {
            checkTourSegment();
        }

        // if all segment is validated and no tour is processed
        if (segmentProcessed === totalSegment && toursProcessed === 0) {
            cb({});
        }

    }

    // get all segments from the tour 
    tours.forEach(function(tour, i) {
        if (tour.tour_settings.segment_groups.length > 0) {
            allSegment.push(tour.tour_settings.segment_groups);
        } else {
            validatedTours.push(parseInt(tour.tour_id));
            toursProcessed++;
            cb(tour);
        }
    });

    var flattenAllsegment = allSegment.reduce(function(seg, val) {
        return seg.concat(val);
    }, []);

    allSegment = GmCXt.removeDuplicates(flattenAllsegment);
    totalSegment = allSegment.length;

    allSegment.forEach(function(segmentId, i) {

        GmCXt.log(68, "Validating Segment: ", segmentId);
        var segment = GmCXt.getSegmentById(segmentId);

        //if role based segments inside a segment group are not in user.profile, Invalidate those segment groups
        if (segment && !GmCXt.areUserSegmentsValid(segment.segments, segmentId)) {

            GmCXt.log(68, "Invalid User Segments: ", segmentId);
            segmentRuleCallBack({
                valid: false,
                segmentId: segmentId
            });
        } else if (GmCXt.validatedSegments[segmentId] && (segment && !segment.rule_check)) {
            //re-eval seg rules only if On page click option is selected
            segmentRuleCallBack({
                valid: true,
                segmentId: segmentId
            });
        } else {
            var rules = (segment && segment.rules && segment.rules.length) ? GmCXt.parseJSON(segment.rules) : [];
            var title = segment ? segment.title : "Segment not found";

            if (GmCXt.validatedSegments[segmentId]) {
                delete GmCXt.validatedSegments[segmentId];
            }

            var data = {
                rules: rules,
                tour: {
                    tour_id: segmentId,
                    tour_settings: {},
                    tour_title: title
                },
                timeoutVal: GmCXt.t.ruleTimeOut10s,
                timeout: GmCXt.t.ruleTimeOut10s,
                cb: segmentRuleCallBack,
                isTour: true,
                initiator: from,
                segmentId: segmentId
            };

            GmCXt.ruleEngine.queue(data);
        }

    });
};

GmCXt.takeScreenshot = function() {
    var promise = new Promise(function(resolve, reject) {
        if (GmCXt.isElectron()) {
            var _electron = require('electron').remote;
            _electron.getCurrentWindow().capturePage().then(function(img) {
                resolve(img.toDataURL());
            });
        } else if (GmCXt.isExtension()) {
            var m = {
                action: "mgPlayerJSTest2_action:capture_browser_screen"
            };
            GmCXt.sendMessageToBackgroundService(m, function(resp) {
                resolve(resp.imgSrc);
            });
        } else {
            resolve(0);
        }
    });
    return promise;
};

GmCXt.triggerForOtherFunctions = function(id, ev) {
    switch (id) {
        case "mgPlayerJSTest2_play_step_popup_drag":
        case "mgPlayerJSTest2_play-step-popup-drag-icon":

            break;
        case "mgPlayerJSTest2_play-step-audio-off":
            if (GmCXt.previewStepPopupInstance) {
                GmCXt.previewStepPopupInstance.setOnAudioMode();
            }
            break;
        case "mgPlayerJSTest2_play-step-audio-on":
            if (GmCXt.previewStepPopupInstance) {
                GmCXt.previewStepPopupInstance.setOffAudioMode();
            }
            break;
    }
};

GmCXt.checkAndCallClick = function(target, ev) {
    if (GmCXt.isIDinGuidePlayList(target.id)) {
        if (ev.type === "mousedown") {
            GmCXt.tourPlayerI.triggerMyGuideClickMouseDown(ev);
        }
        GmCXt.tourPlayerI.triggerMyGuideClick(target.id, ev);
    } else if (GmCXt.isIDinOtherList(target.id)) {
        GmCXt.triggerForOtherFunctions(target.id, ev);
    } else if (GmCXt.checkMyGuideClass(target.className)) {
        GmCXt.checkAndCallClick(target.parentElement, ev);
    }
};

GmCXt.checkForSVGInstance = function(target) {
    var retTarget = target;
    if (target instanceof SVGElement) {
        retTarget = GmCXt.checkForSVGInstance(target.parentNode);
    }
    return retTarget;
};

GmCXt.registerClickListner = function(e) {
    var target = GmCXt.checkForSVGInstance(e.target);
    if (target && GmCXt.checkMyGuideClass(target.className)) {
        GmCXt.checkAndCallClick(target, e);
        if (GmCXt.playerI && GmCXt.playerI.automate) {
            GmCXt.checkSkipStepForTracking();
        }
    }
};

GmCXt.isIDinOtherList = function(id) {
    var retVal = false;
    var idList = ["mgPlayerJSTest2_play_step_popup_drag", "mgPlayerJSTest2_play-step-popup-drag-icon", "mgPlayerJSTest2_play-step-audio-off",
        "mgPlayerJSTest2_play-step-audio-on"
    ];

    if (GmCXt.inArrayString(id, idList)) {
        retVal = true;
    }

    return retVal;
};

GmCXt.isIDinGuidePlayList = function(id) {
    var retVal = false;
    var idList = ["mgPlayerJSTest2_play_step_pause_classic", "mgPlayerJSTest2_play_step_next", "mgPlayerJSTest2_play_step_next_classic",
        "mgPlayerJSTest2_play_step_prev", "mgPlayerJSTest2_play_step_prev_classic", "mgPlayerJSTest2_play_step_popup_close",
        "mgPlayerJSTest2_play_step_pause", "mgPlayerJSTest2_play_step_next_done", "mgPlayerJSTest2_play_step_next_done_classic",
        "mgPlayerJSTest2_play_step_popup_edit",
        "mgPlayerJSTest2_play-step-popup-close-svg", "mgPlayerJSTest2_play-step-popup-edit-icon",
        "mgPlayerJSTest2_play-step-pause-svg"
    ];

    if (GmCXt.inArrayString(id, idList)) {
        retVal = true;
    }

    return retVal;
};

GmCXt.tooltipTitle = function(os, pEle) {
    var tTitleCss = "<div class='mgPlayerJSTest2_tooltip-title-css'><style type='text/css'>" +
        "." + pEle + " p:first-child {" + "color: " + os.popupDesign.current.stepTitleColor + " !important; " +
        "font-family: " + os.popupDesign.current.stepTitleFontFamily + " !important; " +
        "font-size: " + os.popupDesign.current.stepTitleFontSize + " !important; " +
        "font-weight: " + os.popupDesign.current.stepTitleFontWeight + " !important; " +
        "padding-bottom: 10px !important;" +
        "}" +
        "</style></div>";

    return mg$("html").append(tTitleCss);
};

GmCXt.tooltipPopupCss = function(os, customEle) {
    var popUpCSS = "<div class='mgPlayerJSTest2_tooltip-popup-css'><style type='text/css'>" +
        customEle + ".smarttip-guidance-msg-top:before {" +
        "border-top-color:" + os.popupDesign.current.bgColor + " !important;" +
        "}" +
        customEle + ".smarttip-guidance-msg-top:after {" +
        "border-top-color:" + os.popupDesign.current.borderColor + " !important;" +
        "}" +
        customEle + ".smarttip-guidance-msg-right:before {" +
        "border-right-color:" + os.popupDesign.current.bgColor + " !important;" +
        "}" +
        customEle + ".smarttip-guidance-msg-right:after {" +
        "border-right-color:" + os.popupDesign.current.borderColor + " !important;" +
        "}" +
        customEle + ".smarttip-guidance-msg-bottom:before {" +
        "border-bottom-color:" + os.popupDesign.current.bgColor + " !important;" +
        "}" +
        customEle + ".smarttip-guidance-msg-bottom:after {" +
        "border-bottom-color:" + os.popupDesign.current.borderColor + " !important;" +
        "}" +
        customEle + ".smarttip-guidance-msg-left:before {" +
        "border-left-color:" + os.popupDesign.current.bgColor + " !important;" +
        "}" +
        customEle + ".smarttip-guidance-msg-left:after {" +
        "border-left-color:" + os.popupDesign.current.borderColor + " !important;" +
        "}" +
        customEle + ".smarttip-guidance-msg-center:before {" +
        "border-left-color:" + os.popupDesign.current.bgColor + " !important;" +
        "}" +
        customEle + ".smarttip-guidance-msg-center:after {" +
        "border-left-color:" + os.popupDesign.current.borderColor + " !important;" +
        "}" +
        "</style></div>";

    return mg$("html").append(popUpCSS);
};

GmCXt.tooltipTheme = function(os, customEle) {
    var isTooltipTheme = os.tooltipTheme;

    var tObj = {
        'tooltipBgColor': '',
        'tooltipDescColor': '',
        'tooltipDescFfamily': '',
        'tooltipDescFsize': '',
        'tooltipBorderC': '',
        'tooltipBorderW': '',
        'tooltipBorderRadius': '',
        'tooltipMwidth': '',
        'tooltipWidth': '',
        'tooltipPaddingTop': '',
        'tooltipPaddingBottom': '',
        'tooltipPaddingLeft': '',
        'tooltipPaddingRight': ''
    };

    if (isTooltipTheme) {
        tObj.tooltipBgColor = "background:" + os.popupDesign.current.bgColor + " !important; box-shadow: rgb(0 0 0 / 50%) 0 0 10px -2px !important;";
        tObj.tooltipDescColor = "color:" + os.popupDesign.current.stepDescColor + " !important; ";
        tObj.tooltipDescFfamily = ("font-family:" + os.popupDesign.current.stepDesFontFamily + " !important; ").replace(/'/g, "\"");
        tObj.tooltipDescFsize = "font-size:" + os.popupDesign.current.stepDesFontSize + " !important; ";
        tObj.tooltipBorderC = "border-color:" + os.popupDesign.current.borderColor + " !important; ";
        tObj.tooltipBorderW = "border-width:" + os.popupDesign.current.borderWidth + "px !important; ";
        tObj.tooltipBorderRadius = "border-radius:" + os.popupDesign.current.borderRadius + "px !important; ";
        tObj.tooltipMwidth = "max-width:" + os.stepPopupWidth + "px !important; ";
        tObj.tooltipWidth = "width:" + os.stepPopupWidth + "px !important; padding: 15px 15px 5px 15px !important; white-space: normal !important; line-height: initial !important;";
        tObj.tooltipPaddingTop = "padding-top:" + os.popupDesign.current.padding.top + "px !important; ";
        tObj.tooltipPaddingBottom = "padding-bottom:" + os.popupDesign.current.padding.bottom + "px !important; ";
        tObj.tooltipPaddingLeft = "padding-left:" + os.popupDesign.current.padding.left + "px !important; ";
        tObj.tooltipPaddingRight = "padding-right:" + os.popupDesign.current.padding.right + "px !important; ";

        GmCXt.tooltipPopupCss(os, customEle);
        GmCXt.tooltipTitle(os, 'smarttip-msg-inner');
    } else {
        tObj.tooltipBorderC = "border-color:" + os.tooltipColor + " !important; ";

        mg$(".mgPlayerJSTest2_tooltip-popup-css").remove();
        mg$(".mgPlayerJSTest2_tooltip-title-css").remove();
    }

    return tObj;
};

GmCXt.addCSSRules = function(arr, tag) {
    arr.push(GmCXt.CLASSES, GmCXt.NOT_CLASSES, GmCXt.ATTRIBUTES, GmCXt.NOT_ATTRIBUTES);

    var tagArr = ['INPUT', 'SELECT', 'BUTTON'];
    if (tagArr.includes(tag)) {
        arr.push(GmCXt.DISABLED, GmCXt.NOT_DISABLED);
    }

    return arr;
};

GmCXt.getOptionsForSelectElRule = function(rule) {
    var element = null;

    if (rule.element) {
        element = rule.element;
    }

    var tagName = '';
    if (element) {
        tagName = element.meta.tagName;
        if (element.selector && element.selector.js) {
            var selector = element.selector.js[0].toLowerCase();
        }
    }

    var conditionsArr = [GmCXt.EXISTS, GmCXt.NOT_EXISTS, GmCXt.VISIBLE, GmCXt.NOT_VISIBLE];
    var defaultCondition = '';
    var value = '';

    if (tagName === "INPUT") {
        if ((selector.indexOf("radio")) > -1) {

            conditionsArr.push(GmCXt.SELECTED, GmCXt.NOT_SELECTED);
            defaultCondition = GmCXt.SELECTED;

        } else if ((selector.indexOf("checkbox")) > -1) {

            conditionsArr.push(GmCXt.CHECKED, GmCXt.NOT_CHECKED);
            defaultCondition = GmCXt.CHECKED;

        }
    }

    var elementText = rule.value.trim();
    if (GmCXt.isEmpty(elementText)) {
        if (!GmCXt.isEmpty(element.targetInfo) && element.targetInfo.text) {
            elementText = element.targetInfo.text.trim();
        } else {
            elementText = !GmCXt.isEmpty(element.meta.textPropertyValue) ? element.meta.textPropertyValue.trim().substring(0, GmCXt.ruleTextLimit).trim() : "";
        }
    }

    if (elementText) {
        value = elementText;
        conditionsArr.push(GmCXt.TXT_EQUALS, GmCXt.NOT_TXT, GmCXt.TXT_CONTAINS, GmCXt.TXT_MATCHES);

        var numeric = elementText.match(/\d+/g);
        if (numeric) {
            conditionsArr.push(GmCXt.GREAT_THAN, GmCXt.LESS_THAN);
        }

        if (GmCXt.isEmpty(defaultCondition))
            defaultCondition = GmCXt.TXT_EQUALS;
    }

    GmCXt.addCSSRules(conditionsArr, tagName);

    return {
        conditionsArr: conditionsArr,
        defaultCondition: defaultCondition || GmCXt.EXISTS,
        value: value.trim()
    };
};

GmCXt.showRuleInfo = function(condition) {
    var infoRequired = [GmCXt.TXT_MATCHES, GmCXt.CLASSES, GmCXt.ATTRIBUTES, GmCXt.DAY_OF_WEEK, GmCXt.FIX_TIME, GmCXt.DATE_RANGE, GmCXt.IS_VALID];
    return infoRequired.includes(condition);
};

GmCXt.getGuidanceMessage = function(condition) {
    var html = '';
    switch (condition) {
        case GmCXt.TXT_MATCHES:
            html = GmCXt.label.rule_textMatches;
            break;
        case GmCXt.CLASSES:
            html = GmCXt.label.rule_classes;
            break;
        case GmCXt.ATTRIBUTES:
            html = GmCXt.label.rule_attributes;
            break;
        case GmCXt.DAY_OF_WEEK:
            html = GmCXt.label.rule_dayOfWeek;
            break;
        case GmCXt.FIX_TIME:
            html = GmCXt.label.rule_fixTime;
            break;
        case GmCXt.DATE_RANGE:
            html = GmCXt.label.rule_dateRange;
            break;
        case GmCXt.IS_VALID:
            html = GmCXt.label.rule_isValid;
            break;
    }
    return html;
};

GmCXt.storeVariableValue = function(varIndex) {
    var appId = GmCXt.activeAppId;
    if (GmCXt.isMirrorApp()) appId = GmCXt.getBaseAppId();
    var activeApp = GmCXt.appList['app:' + appId];

    if (activeApp && activeApp.settings && activeApp.settings.variables) {
        var variable = activeApp.settings.variables[varIndex];

        var data = {
            varElem: variable.element,
            varData: variable,
            varId: varIndex,
            varTitle: variable.name,
            timeout: Date.now() + GmCXt.t.findElTimeout
        };
        GmCXt.sendMessageToAllWindows('mgPlayerJSTest2_action:find_element_for_variable', data);
    }
};

GmCXt.getVariables = function() {
    if (!GmCXt.appList) {
        return;
    }

    var appId = GmCXt.activeAppId;
    if (GmCXt.isMirrorApp()) appId = GmCXt.getBaseAppId();

    var activeApp = GmCXt.appList['app:' + appId];
    if (activeApp && activeApp.settings && activeApp.settings.variables) {
        var variables = activeApp.settings.variables;
        var storedVars = {};

        for (var i = 0; i < GmCXt.variables.length; i++) {
            storedVars[GmCXt.variables[i].name] = GmCXt.variables[i];
        }

        for (var i = 0; i < variables.length; i++) {

            if (!storedVars.hasOwnProperty(variables[i].name)) {

                var data = {
                    rules: variables[i].rules,
                    tour: {
                        tour_id: i,
                        tour_settings: variables[i].element.version,
                        tour_title: variables[i].name
                    },
                    timeoutVal: GmCXt.t.variableTimeout,
                    timeout: GmCXt.t.variableTimeout,
                    cb: onMatch,
                    isTour: true,
                    initiator: 'variable'
                };

                GmCXt.ruleEngine.queue(data);
            } else if (!storedVars.hasOwnProperty(variables[i].value)) {
                GmCXt.storeVariableValue(i);
            }
        }
    }

    function onMatch(result) {
        if (result.valid) {
            var newVar = {
                name: variables[result.tour.tour_id].name,
                isValid: result.valid,
                value: variables[result.tour.tour_id].value
            };
            GmCXt.variables.push(newVar);
            GmCXt.storeVariableValue(result.tour.tour_id);
        }
    }
};

GmCXt.requestHandler.updateVariableValues = function(message) {
    GmCXt.variables.map(function(v) {
        if (v.name === message.data.name) {
            if (message.data.he) {
                v.value = message.data.value;
                v.he = message.data.he.outerHTML;
            }
        }
    });

    GmCXt.sendMessageToStepFrame('mgPlayerJSTest2_action:set_variables', {
        data: GmCXt.variables
    });

    GmCXt.sendMessageToApp('mgPlayerJSTest2_action:set_variables', {
        variables: GmCXt.variables
    });
};

GmCXt.getVariableValue = function(name) {

    if (GmCXt.variables) {

        var variables = [];

        if (GmCXt.variables) {
            variables = GmCXt.variables;
        } else {
            variables = GmCXt.getVariableData();
        }

        for (var i = 0; i < variables.length; i++) {
            if (variables[i].name === name) {
                return variables[i].value || '';
            }
        }
    }
    return '';
};

GmCXt.defaultTourUrls = function(u) {
    if (GmCXt.isEmpty(u) || GmCXt.isDefaultIcon(u)) {
        return true;
    } else {
        return false;
    }
};

GmCXt.stringUsesVariable = function(str) {
    return (str.includes('{{') && str.includes('}}'));
};

GmCXt.replaceVariableWithValue = function(str) {
    if (GmCXt.stringUsesVariable(str)) {
        var isValid = false;
        for (var i = 0; i < GmCXt.variables.length; i++) {
            var regex = new RegExp('\{\{(?:\\s+)?(' + RegExp.escape(GmCXt.variables[i].name) + ')(?:\\s+)?\}\}', "g");
            isValid = regex.test(str);
            if (isValid && GmCXt.variables[i].value) {
                str = str.replace(regex, GmCXt.variables[i].value);
            }
        }
    }
    return str;
};

GmCXt.replaceVariableInText = function(str) {
    var regex = new RegExp('\{\{(?:\\s+)?(.+?)(?:\\s+)?\}\}', "g");
    var isValid = false;
    isValid = regex.test(str);
    if (isValid) {
        str = str.replace(regex, '').replace(/\s\s+/g, ' ');
    }
    return str;
};

GmCXt.variableRuleExistInGuide = function(rules) {
    for (var k = 0, l = rules.length; k < l; k++) {
        if (rules[k].type === 'Variables') {
            return true;
        }
    }
    return false;
};

GmCXt.updateZIndex = function(zIndex, add) {
    if (zIndex) {
        var updateBy = add ? 1 : -1;
        return (parseInt(zIndex) + updateBy).toString();
    }
    return "";
};

GmCXt.blockMcKessonIFrame = function(frame) {
    if (GmCXt.isMcKesson() && frame.name === "dieCommFrame" && frame.id === 'IFrame') {
        return true;
    } else if (GmCXt.isMcKesson() && frame && frame.src && frame.src.includes('SpinSciSnap__AgentaSnap')) {
        return true;
    } else {
        return false;
    }
};

GmCXt.skipTags = function(he) {
    if (GmCXt.isSvgTag(he.tagName)) {

        he = he.parentNode;

        while (he && he.parentNode && GmCXt.isSvgTag(he.tagName)) {
            he = he.parentNode;
        }
    }

    if (GmCXt.checkSalesForceSite()) {
        if (he.tagName === 'LIGHTNING-PRIMITIVE-ICON') {
            he = he.parentNode;
        }

        var parent = he.parentNode;
        if (parent && he.tagName === 'BUTTON' &&
            (parent.tagName === 'LIGHTNING-BUTTON-ICON' || parent.tagName === 'LIGHTNING-BUTTON')) {
            he = parent;
        }
    }
    return he;
};

GmCXt.validateUrl = function(url) {

    var expression = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (expression.test(url)) {
        return true;
    } else {
        return false;
    }
};

GmCXt.trackElNotFound = function(d) {

    GmCXt.log(27, "track Element Not Found");

    return; // Stop "mi_rule_enhancement" events temporary for MG-25171

    // if (window.self === window.top) {
    //     GmCXt.trackerV1.trackElNotFound(d);
    // } else {
    //     GmCXt.sendMessageToTheTopWindow('mgPlayerJSTest2_action:track_element_not_found', d);
    // }
};

GmCXt.onPopupRerender = function() {
    if (mg$('#mgPlayerJSTest2_popup-reload').length > 0) {
        var forceClose = !GmCXt.playerI.testAutomation;
        GmCXt.confirmTourClose(forceClose);
    }
};

GmCXt.concatHTMLStringWithSpace = function(str) {
    str = str.split('</p>').join(' ');
    str = str.split('</div>').join(' ');
    str = str.split('</li>').join(' ');
    str = mg$('<span />').html(str).text().trim();
    return str;
};

GmCXt.removeHtmlFromText = function(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
};

GmCXt.getSurveyCompletedData = function(isNotif) {
    return GmCXt.storage().get(['surveyCompleted'])
        .then(function(st) {
            var tours = [];
            if (GmCXt.isAnonymousUser()) {
                tours = st.surveyCompleted || {};
            } else {
                var userSettings = GmCXt.user.settings || {};
                tours = userSettings.surveyCompleted || {};
            }
            return tours;
        });
};

GmCXt.resetElTracker = function() {
    if (window.self === window.top) {
        GmCXt.sendMessageToAllWindows('mgPlayerJSTest2_action:reset_dom_tracker');
    }
};

GmCXt.resetElTrackerVariable = function() {
    if (!GmCXt.isEmpty(GmCXt.domSelectorTracker) && !GmCXt.isEmpty(GmCXt.domSelectorTracker[GmCXt.id])) {
        // Reset tracker
        GmCXt.domSelectorTracker = {};
    }
};

GmCXt.logElTracker = function() {
    if (window.self === window.top) {
        GmCXt.logTrackerData = false;
        GmCXt.sendMessageToAllWindows('mgPlayerJSTest2_action:request_dom_tracker_info');
    }
};

GmCXt.shareDomTrackerInfo = function() {
    if (window.self !== window.top) {
        if (GmCXt.isEmpty(GmCXt.domSelectorTracker)) {
            GmCXt.domSelectorTracker[GmCXt.id] = {};
        }
        GmCXt.sendMessageToTheTopWindow('mgPlayerJSTest2_action:send_dom_tracker_info', GmCXt.domSelectorTracker);
    } else {
        GmCXt.combineDomTrackerData();
    }
};

GmCXt.combineDomTrackerData = function(info) {
    if (window.self === window.top) {
        var finder = {};
        var query = {};
        var totalFinder = 0;
        var totalQuery = 0;
        var iFrameTally = 0;

        if (info) {
            GmCXt.domSelectorTracker = Object.assign(GmCXt.domSelectorTracker, info);
        }

        GmCXt.timeout(function() {
            if (!GmCXt.logTrackerData) {
                for (var i in GmCXt.domSelectorTracker) {
                    if (!GmCXt.isEmpty(GmCXt.domSelectorTracker[i])) {
                        iFrameTally++;
                        var iframeInfo = GmCXt.domSelectorTracker[i];
                        for (var key in iframeInfo) {
                            var elInfo = iframeInfo[key];

                            finder[key] = elInfo.finder;
                            totalFinder += elInfo.finder;

                            query[key] = elInfo.query;
                            totalQuery += elInfo.query;
                        }
                    }
                }
                var css = "color:#00a6d9;";
                console.log("%cNo. of iframes Searched –", css, iFrameTally);
                console.log("%cTotal calls to dom.finder() –", css, totalFinder);
                console.log("%cCalls to dom.finder() segregated by element –", css, finder);
                console.log("%cTotal calls to dom.query() –", css, totalQuery);
                console.log("%cCalls to dom.query() segregated by element –", css, query);

                GmCXt.logTrackerData = true;
            }
        }, 1500);
    }
};

GmCXt.handleLinkClickEvent = function(e) {
    var url = e.currentTarget.href;
    var mediaType = GmCXt.getURLMediaType(url);

    if (mediaType) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (mediaType === "pdf") {
            GmCXt.sendMessageToApp("mgPlayerJSTest2_action:open_pdf", e.target.href);
        } else {
            GmCXt.sendMessageToApp("mgPlayerJSTest2_action:open_video_player", e.target.href);
        }
    } else if (GmCXt.isElectron()) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        GmCXt.redirectLinkToBrowser(e);
    }

    GmCXt.storage().set({
        'linkClickOnStep': url
    });
};

GmCXt.isStepInlineBranch = function(s) {
    var retVal = false;
    if (s && s.step_settings && GmCXt.isTrue(s.step_settings.inlineBranch)) {
        retVal = true;
    }
    return retVal;
};

GmCXt.getVariableData = function() {
    var varData = false;

    if (!GmCXt.isEmpty(GmCXt.appList) && GmCXt.activeAppId && GmCXt.appList['app:' + GmCXt.activeAppId]) {
        var appId = GmCXt.getBaseAppId();
        varData = GmCXt.appList['app:' + appId].settings.variables;
    }

    return varData;
};

GmCXt.workdayAutoClick = function(index) {
    if (GmCXt.playerI) {
        var editIcon = "[data-automation-id='actionImage']";
        var el = mg$(editIcon)[index];
        mg$(el).trigger("click");
    }
};

GmCXt.blockAbbvieIframe = function(frame) {
    if (GmCXt.isAbbvie() && frame.id.includes('emailFrame')) {
        return true;
    } else {
        return false;
    }
};

GmCXt.captureScreenForFeedback = function(mailTo) {
    if (mailTo) {
        GmCXt.mailTo = mailTo;
    }

    GmCXt.takeScreenshot().then(function(imageSrc) {

        if (GmCXt.isEmpty(imageSrc)) {
            mg$(".mgPlayerJSTest2_feedback-overlay-svg-error").show();
            mg$(".mgPlayerJSTest2_feedback-re-edit-btn").hide();
            mg$("#mg-feedback-screenshot-check").removeAttr("checked");
        } else {
            mg$(".mgPlayerJSTest2_feedback-overlay-svg-error").hide();
            mg$(".mgPlayerJSTest2_feedback-re-edit-btn").show();
        }

        var img = mg$("#mg-feedback-screenshot-image");
        img.attr('src', imageSrc);
        GmCXt.feedbackImgSrc = imageSrc;
        GmCXt.showFeedBackToolbar();
    });
};

GmCXt.showFeedBackToolbar = function() {
    mg$("#mg-feedback-container-wrapper").show();
    GmCXt.showFeedBackPopup();
};

GmCXt.showFeedBackPopup = function() {
    mg$('DIV#mg-feedback-selector-toolbar').hide();
    mg$('DIV#mg-feedback-popup').show();
};

GmCXt.showFeedBackSelectorToolbar = function() {
    mg$('DIV#mg-feedback-popup').hide();
    mg$('DIV#mg-feedback-selector-toolbar').show();
};

GmCXt.onEditScreenshotClick = function() {
    GmCXt.showFeedBackSelectorToolbar();
};

GmCXt.onClickFeedbackHighlightArea = function() {
    var div = document.getElementById('mgPlayerJSTest2_highlight');
    GmCXt.feedbackMarkArea(div);
};

GmCXt.onClickFeedbackHideArea = function() {
    var div = document.getElementById('mgPlayerJSTest2_blackout');
    GmCXt.feedbackMarkArea(div, true);
};

GmCXt.onClickFeedbackEditDone = function() {
    mg$('DIV#mg-feedback-selector-toolbar').hide();
    GmCXt.captureScreenForFeedback();
};

GmCXt.feedbackMarkArea = function(div, hide) {
    var toolbar = mg$('DIV#mg-feedback-selector-toolbar');
    toolbar.hide();

    var wrapper = document.getElementById("mg-feedback-flex-container");
    wrapper.style.cursor = 'crosshair';
    wrapper.style.background = 'transparent';

    var x1 = 0,
        y1 = 0,
        x2 = 0,
        y2 = 0;

    function reCalc() {
        var x3 = Math.min(x1, x2);
        var x4 = Math.max(x1, x2);
        var y3 = Math.min(y1, y2);
        var y4 = Math.max(y1, y2);
        div.style.left = x3 + 'px';
        div.style.top = y3 + 'px';
        div.style.width = x4 - x3 + 'px';
        div.style.height = y4 - y3 + 'px';
    }

    var onmousedown = function(e) {
        e.preventDefault();
        div.style.display = 'block';
        x1 = e.clientX;
        y1 = e.clientY;
        reCalc();
    };

    var onmousemove = function(e) {
        x2 = e.clientX;
        y2 = e.clientY;
        reCalc();
    };

    var onmouseup = function(e) {
        var el = {
            id: 'r_' + Math.floor(Math.random() * 1000),
            element: {
                position: {
                    top: y1,
                    left: x1,
                    height: y2 - y1,
                    width: x2 - x1
                }
            }
        };
        div.style.display = 'none';
        wrapper.style.cursor = 'default';

        if (hide) {
            if (!GmCXt.sfHideElements) {
                GmCXt.sfHideElements = [];
            }
            GmCXt.sfHideElements.push(el);
            GmCXt.drawArea(GmCXt.sfHideElements, 'blackout-feedback');
        } else {
            if (!GmCXt.sfMarkElements) {
                GmCXt.sfMarkElements = [];
            }
            GmCXt.sfMarkElements.push(el);
            GmCXt.drawArea(GmCXt.sfMarkElements, 'highlight');
        }

        wrapper.style.background = '#26273b33';
        toolbar.show();

        wrapper.removeEventListener('mousedown', onmousedown);
        wrapper.removeEventListener('mouseup', onmouseup);
        wrapper.removeEventListener('mousemove', onmousemove);
    };

    wrapper.addEventListener('mousedown', onmousedown);
    wrapper.addEventListener('mouseup', onmouseup);
    wrapper.addEventListener('mousemove', onmousemove);
    div.onmouseup = onmouseup;
};

GmCXt.drawArea = function(arr, className) {
    var elems = arr;
    mg$('DIV.mgPlayerJSTest2_selector-' + className).remove();

    for (var i = 0; i < elems.length && elems[i].id; i++) {
        var el = elems[i].element.position;

        var closeBtn = '<div class="mgPlayerJSTest2_close-area mgPlayerJSTest2_' + className + '-close" id=' + elems[i].id + '><div class="close-text">&times;</div></div>';
        var blackoutEl = mg$('<div class="mgPlayerJSTest2_selector-' + className + '" id="mgPlayerJSTest2_selector-' + className + '-' + elems[i].id + '">' +
                closeBtn +
                '</div>')
            .appendTo('#mg-feedback-flex-container')
            .css({
                'width': el.width,
                'height': el.height,
                'left': el.left,
                'top': el.top
            });
    }

    mg$("DIV.mgPlayerJSTest2_" + className + "-close").on('click', function(e) {
        var oArr = [];
        arr.forEach(function(el, i) {
            if (el.id !== e.currentTarget.id) oArr.push(el);
        });
        arr = oArr;
        mg$("#mgPlayerJSTest2_selector-" + className + "-" + e.currentTarget.id).remove();
    });
};

GmCXt.sendFeedback = function() {
    var feedbackText = document.getElementById("mg-feedback").value;
    var emailBody = {};

    if (GmCXt.isEmpty(feedbackText)) {
        var option = {
            description: GmCXt.label.feedbackRequired,
            button1: GmCXt.label.ok
        };
        GmCXt.alertV2(option).show();
        return;
    }

    emailBody.feedbackText = feedbackText;

    if (GmCXt.mailTo) {
        emailBody.mailTo = GmCXt.mailTo;
    }

    if (GmCXt.user) {
        var userInfo = {
            email: GmCXt.user.user_email,
            firstName: GmCXt.user.first_name,
            lastName: GmCXt.user.last_name
        };
        emailBody.userInfo = JSON.stringify(userInfo);
    }

    if (mg$('#mg-feedback-screenshot-check')[0].checked) {
        emailBody.imgSrc = GmCXt.feedbackImgSrc;
    }

    GmCXt.clearFeedBackView();

    GmCXt.api.sendFeedbackEmail(emailBody);
};

GmCXt.clearFeedBackView = function() {
    mg$("#mg-feedback-container-wrapper").remove();
    mg$('.mgPlayerJSTest2_selector-highlight').remove();
    GmCXt.sfMarkElements = [];
    mg$('.mgPlayerJSTest2_selector-blackout-feedback').remove();
    GmCXt.sfHideElements = [];
    GmCXt.mailTo = '';
    GmCXt.openAppPanel();
};

GmCXt.numberOfSameTail = function(id, ps) {
    let counter = 0;
    if (ps && ps.length) {
        for (var i = 0; i < ps.length; i++) {
            if (parseInt(ps[i].tail) === parseInt(id)) {
                counter++;
            }
        }
    }
    return counter;
};

GmCXt.getExcludedDomainList = function() {
    var excludedDomains = [];
    var os = GmCXt.getOrgSettings();
    if (os && os.excludeDomains && !GmCXt.isEmpty(os.excludeDomains)) {
        excludedDomains = os.excludeDomains;
    }
    return excludedDomains;
};

GmCXt.isExcludeDomain = function() {
    var isEx = false;
    if (GmCXt.urlParts && GmCXt.urlParts.fullUrl && GmCXt.isPlayer()) {
        var url = GmCXt.urlParts.host + GmCXt.urlParts.pathname;
        var excludeDomainList = GmCXt.getExcludedDomainList();

        if (excludeDomainList) {
            for (var x = 0; x < excludeDomainList.length; x++) {
                if (url && url.toLowerCase().includes(GmCXt.trimAndLowerCaseURL(excludeDomainList[x]))) {
                    isEx = true;
                    break;
                }
            }
        }
    }
    return isEx;
};

GmCXt.getStepPosFromPs = function(t, sId) {
    var pos = "";
    var PS = t.tour_settings.play_structure;

    for (var i = 0; i < PS.length; i++) {
        if (PS[i].id === sId) {
            pos = i + 1;
            break;
        }
    }

    return pos;
};

GmCXt.isValueInArray = function(array, keyToFind, valueToFind) {
    return array.some(function(obj) {
        return obj[keyToFind] === valueToFind;
    });
};

GmCXt.checkDomainInPublishedEnv = function(pubEnv) {
    var domainInPublishedEnv = false;
    if (GmCXt.isDefined(pubEnv)) {
        var domainEnv = GmCXt.getAppEnvByDomain();
        if (pubEnv.includes(domainEnv)) {
            domainInPublishedEnv = true;
        }
    } else {
        domainInPublishedEnv = true;
    }
    return domainInPublishedEnv;
};

GmCXt.updateNumericKeys = function(key) {
    var lastKey = key.slice(-1);
    var numKey = parseInt(lastKey);

    var specialCharArr = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];

    if (!isNaN(numKey)) {
        return key.slice(0, -1) + specialCharArr[numKey];
    } else {
        return key;
    }
};

GmCXt.addHttpIfMissing = function(url) {
    if (!url.trim().startsWith('http://') && !url.trim().startsWith('https://')) {
        url = 'https://' + url;
    }
    return url;
};

GmCXt.isShortcutExist = function(inputKey, restrictedKeys) {
    var lastKey = inputKey[inputKey.length - 1];

    if (inputKey.indexOf('shift+' + lastKey) === 0) {
        if (restrictedKeys && restrictedKeys.indexOf(inputKey) !== -1) {
            return true;
        }
    }

    return false;
};

GmCXt.getCombinedDateFromTimestamp = function(timestamp) {
    // Create a new Date object with the timestamp in milliseconds
    var date = new Date(timestamp * 1000);

    // Extract the day, month, and year components from the Date object
    var day = date.getDate().toString().padStart(2, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so we add 1
    var year = date.getFullYear();

    // Combine the components into a date string in the format "YYYY-MM-DD"
    var combinedDate = `${year}-${month}-${day}`;

    // Return the combined date string
    return combinedDate;
};

GmCXt.compareDates = function(dateStr1, dateStr2) {
    // Split the date strings into arrays of year, month, and day components
    var date1Components = dateStr1.split('-').map(Number);
    var date2Components = dateStr2.split('-').map(Number);

    // Compare year first
    if (date1Components[0] < date2Components[0]) {
        return -1;
    } else if (date1Components[0] > date2Components[0]) {
        return 1;
    }

    // If years are equal, compare months
    if (date1Components[1] < date2Components[1]) {
        return -1;
    } else if (date1Components[1] > date2Components[1]) {
        return 1;
    }

    // If months are equal, compare days
    if (date1Components[2] < date2Components[2]) {
        return -1;
    } else if (date1Components[2] > date2Components[2]) {
        return 1;
    }

    // If all components are equal, return 0
    return 0;
};

GmCXt.compareTimes = function (timeStr1, timeStr2) {
    // Split the time strings into hours and minutes
    var hoursMinutes1 = timeStr1.split(':');
    var hoursMinutes2 = timeStr2.split(':');
    var hours1 = parseInt(hoursMinutes1[0], 10);
    var hours2 = parseInt(hoursMinutes2[0], 10);
    var minutes1 = parseInt(hoursMinutes1[1], 10);
    var minutes2 = parseInt(hoursMinutes2[1], 10);
    
    // Compare hours
    if (hours1 < hours2) {
        return -1;
    } else if (hours1 > hours2) {
        return 1;
    } else {
        // Hours are equal, compare minutes
        if (minutes1 < minutes2) {
            return -1;
        } else if (minutes1 > minutes2) {
            return 1;
        } else {
            // Minutes are equal
            return 0;
        }
    }
};
/**
	* @author Nilesh Pachpande
	*/

if (GmCXt === undefined) var GmCXt = {};

if (GmCXt.requestHandler === undefined) GmCXt.requestHandler = {};

// Extending string property for the StartsWith and EndWith for IE

if (!String.prototype.startsWith) {
	String.prototype.startsWith = function(search, pos) {
		return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
	};
}

if (!String.prototype.endsWith) {
	String.prototype.endsWith = function(search, this_len) {
		if (this_len === undefined || this_len > this.length) {
			this_len = this.length;
		}
		return this.substring(this_len - search.length, this_len) === search;
	};
}

if (!String.prototype.includes) {
	String.prototype.includes = function(str) {
		return this.indexOf(str) !== -1;
	};
}

if (!Array.prototype.includes) {
	Array.prototype.includes = function(val) {
		return this.indexOf(val) !== -1;
	};
}

GmCXt.stepPopupWidth = 300;
GmCXt.stepPopupMaxHeight = 400;

GmCXt.tourActivity = {};

GmCXt.validateAlphanumeric = function(str) {
	if (!str || !str.trim()) {
		return false;
	} else if (str.match(".*[a-zA-Z].*")) {
		return true;
	} else {
		return false;
	}
};

GmCXt.validateEmpty = function(str) {
	if (!str || !str.trim()) {
		return false;
	} else if (str.length > 0) {
		return true;
	} else {
		return false;
	}
};

GmCXt.validateLength = function(str, limit) {

	if (str && str.length) {
		str = mg$('<div />').html(str).text().trim();
		if (str.length <= limit) {
			return true;
		} else {
			return false;
		}
	}

	return false;
};

GmCXt.openAppPanel = function(action, source) {

	if (GmCXt.APP_PANEL_OPEN) return;

	GmCXt.removeChatIcon();

	if (GmCXt.initialization && GmCXt.initialization.sidePanel && GmCXt.playerDomainCheck()) {

		GmCXt.hideWidgetIcon();

		if (GmCXt.editStepTout) {
			clearTimeout(GmCXt.editStepTout);
			mg$('.mgPlayerJSTest2_edit-step-loader').hide();
		}

		var byPassRoute = (action === "byPassRoute" || action === "playSlideShow") ? true : false;
		if (!byPassRoute) {
			GmCXt.sendMessageToApp("mgPlayerJSTest2_action:open_side_panel", {
				action: action
			});
		}

		if (GmCXt.tourPlayerI && (action !== "playSlideShow")) {
			GmCXt.tourPlayerI.stop(true);
			GmCXt.closePopup();
		} else if (GmCXt.isAutomationRunning()) {
			GmCXt.auto.stop(true);
		}

		if (GmCXt.user && GmCXt.user.user_key && source && !GmCXt.APP_PANEL_OPEN) {
			GmCXt.trackerV1.trackPanelOpen(source, action);
		}

		GmCXt.timeout(function() {
			var alignment = GmCXt.getWidgetAlignment();
			mg$(".mgPlayerJSTest2_panel .mgPlayerJSTest2_app").css(alignment, "0px");
			mg$(".mgPlayerJSTest2_panel").css(alignment, "0px");
			
			if (GmCXt.isMicroPlayer() || GmCXt.isWBMicroPlayer()) {
				mg$(".mgPlayerJSTest2_panel .mgPlayerJSTest2_app").css("right", "50px");
				mg$(".mgPlayerJSTest2_panel").css("right", "50px");
				GmCXt.taskListOpen = false;
			} else {
				mg$(".mgPlayerJSTest2_panel").removeClass('mgPlayerJSTest2_theme-mplayer');
				mg$(".mgPlayerJSTest2_panel").css("top", "0");
				GmCXt.showPanelCloseBtn();
			}

			GmCXt.removePreviewTop();
			mg$(".mgPlayerJSTest2_panel").attr({'aria-hidden':false, 'tabindex':0});
			mg$("#mgPlayerJSTest2_app").attr({'aria-hidden':false, 'tabindex':0});

		}, GmCXt.t.appPanel);

		GmCXt.smartTipPreviewOn = false;
		GmCXt.closeNotificationPopup(true);
		GmCXt.APP_PANEL_OPEN = true;
	} else {
		GmCXt.showPanelDisabledPopup();
	}
};

GmCXt.showPanelDisabledPopup = function() {
	if (GmCXt.isExtension()) {
		var m = {
			action: 'mgPlayerJSTest2_action:to_background;task:show_panel_disabled_popup'
		};
		GmCXt.sendMessageToBackgroundService(m);
	}
};

GmCXt.hideTips = function() {
	GmCXt.hideBeacons();
	GmCXt.hideSmartTips();
	GmCXt.removePreviewTop();
};

GmCXt.filterApps = function(apps, search) {
	var r = [];
	for (var i = 0; i < apps.length; i++) {
		if (apps[i].indexOf(search) !== -1)
			r.push(apps[i]);
	}
	return r;
};

GmCXt.getByPrecedence = function(apps, p) {
	var r = [];

	for (var i = 0; i < p.length; i++) {
		if (!r.length && p[i])
			r = GmCXt.filterApps(apps, p[i]);
		else
			break;
	}

	return r;
};

GmCXt.appPrecedence = [
	GmCXt.conf.creatorApp,
	GmCXt.conf.playerExtension,
	GmCXt.conf.creatorJS,
	GmCXt.conf.playerJS
];
GmCXt.envPrecedence = ["Test", "Stage", "Prod"];

GmCXt.checkPrecedence = function() {

	var app = "";
	var r = GmCXt.getAppsArray(GmCXt.myGuideApps);

	if (r.length === 0 && GmCXt.user) {
		// First time, after user logins
		return true;
	}

	r = GmCXt.getByPrecedence(r, GmCXt.appPrecedence);

	if (r.length > 1) r = GmCXt.getByPrecedence(r, GmCXt.envPrecedence);

	if (r.length === 1) app = r[0];

	if (GmCXt.getAppName() === app) return true;
	else return false;
};

GmCXt.getChatIconVisibility = function() {
	var s = GmCXt.getAppSetting();

	if (GmCXt.isEmpty(s)) return false;

	var rules = s.chatBotrules || [];
	var match = true;
	if (s.enable_chatbot) {
		if (rules.length > 0 && rules[0].value !== '') {

			var oldRegEx = true;
			if (GmCXt.isDefined(s.clientVersion)) {
				oldRegEx = false;
			}

			match = GmCXt.ruleEngine.evaluateRules(rules, oldRegEx);
		}

		if (!match) {
			GmCXt.log(21, "RULES NOT MATCHED, Hide chat widget");
			return false;
		}
		return true;
	} else {
		return false;
	}
};

GmCXt.getWidgetVisibility = function(forceShowWidget) {

	if (GmCXt.tourPlayerI && !forceShowWidget) {
		GmCXt.log(8, "PLAYER INSTANCE EXIST. HIDE WIDGET " + GmCXt.getAppName());
		return false;
	}

	if (GmCXt.isAutomationRunning()) {
		GmCXt.log(8, "AUTOMATION RUNNING. HIDE WIDGET " + GmCXt.getAppName());
		return false;
	}

	if (!GmCXt.checkPrecedence() && !GmCXt.conf.showWidget) {
		GmCXt.log(8, "NO PREFERENCE. HIDE WIDGET " + GmCXt.getAppName());
		return false;
	}

	if (GmCXt.isLXP() || GmCXt.snowApp) {
		GmCXt.log(8, "HIDE WIDGET on LXP || snowApp");
		return false;
	}

	if (GmCXt.isMcKessonClientJS()) {
		GmCXt.log(8, "HIDE WIDGET on McKesson ClientJS");
		return false;
	}

	var s = GmCXt.getWidgetSettings();

	if (!GmCXt.isEmpty(s) && s) {
		if (GmCXt.isFalse(s.showWidgetIcon)) {
			GmCXt.log(8, "HIDDEN IN ORG SETTINGS");
			return false;
		}

		var rules = s.rules || [];
		var match = true;

		if (rules.length > 0 && rules[0].value !== '') {

			var oldRegEx = true;
			if (GmCXt.isDefined(s.clientVersion)) {
				oldRegEx = false;
			}

			match = GmCXt.ruleEngine.evaluateRules(rules, oldRegEx);
		}

		if (!match) {
			GmCXt.log(8, "RULES NOT MATCHED, hide widget");
			return false;
		}

		if (s.hide_widget_if_noguide && GmCXt.isPlayer()) {
			if (!GmCXt.ifGuidesOnCurrentPage) {
				GmCXt.log(8, "NO GUIDES ON CURRENT PAGE. HIDE WIDGET " + GmCXt.getAppName());
				return false;
			}
		}

	} else if (!GmCXt.conf.showWidget) {
		return false;
	} 

	return true;
};

GmCXt.displayWidget = function(forceShowWidget) {
	if (GmCXt.getWidgetVisibility(forceShowWidget)) {
		var widget = GmCXt.getWidgetInstance();
		if (widget.length) {
			GmCXt.getWidgetInstance().show();
			GmCXt.showCurrentPageGuidesIndicator();
		} else {
			GmCXt.showWidget();
		}
	} else {
		GmCXt.hideWidgetIcon();
	}
};

GmCXt.displayChatIcon = function(forceShowWidget) {
	if (!GmCXt.organization) {
		GmCXt.removeChatIcon();
		return;
	}

	if (GmCXt.isPlayer() && GmCXt.isChatEnable()) {
		var chat = GmCXt.getChatIconInstance();
		if (chat.length) {
			GmCXt.getChatIconInstance().show();
		} else {
			GmCXt.showChatIcon();
		}
	} else {
		GmCXt.removeChatIcon();
	}
};

GmCXt.getDocTitle = function() {
	var email_regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
	var title = document.title;
	title = title.replace(email_regex, "");
	return title;
};

/** @function Alert function to show message to a user
	* @param {object} options - having properties
	*  title: Popup title.
	*  message: Popup description.
	*  callback: Callback function to call on 'Ok' button click event.
	*  type: Popup type. For 'Confirm' type, 'Cancel' button is shown.
	*/
GmCXt.alert = function(options) {
	options = options || {};

	var pub = {};

	var self = {
		title: options.title,
		description: options.description,
		callback: options.callback,
		type: options.type
	};

	pub.show = function() {
		var popupType = 'mgPlayerJSTest2_popup-info';
		var popupDescription = "";

		if (self.description) {
			popupDescription = "<wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-content-info'>" + self.description + "</wmgPlayerJSTest2_>";
		}

		var cancelButton = "";
		var okButton = "<wmgPlayerJSTest2_ class='mgPlayerJSTest2_panel-popup-ok mgPlayerJSTest2_btn-default mgPlayerJSTest2_ok-btn mgPlayerJSTest2_inline-block-vt'>" + GmCXt.label.ok + "</wmgPlayerJSTest2_>";

		if (self.type === "confirm") {
			cancelButton = "<wmgPlayerJSTest2_ class='mgPlayerJSTest2_panel-popup-cancel mgPlayerJSTest2_btn-default mgPlayerJSTest2_btn-neutral mgPlayerJSTest2_inline-block-vt'>" + GmCXt.label.btnCancel + "</wmgPlayerJSTest2_>";

		} else if (self.type === "onboarding") {
			okButton = "<wmgPlayerJSTest2_ class='mgPlayerJSTest2_panel-popup-ok mgPlayerJSTest2_btn-default mgPlayerJSTest2_inline-block-vt'>" + GmCXt.label.btnGuideMe + "</wmgPlayerJSTest2_>";
			cancelButton = "<wmgPlayerJSTest2_ class='mgPlayerJSTest2_panel-popup-cancel mgPlayerJSTest2_btn-default mgPlayerJSTest2_inline-block-vt'>" + GmCXt.label.btnSkip + "</wmgPlayerJSTest2_>";
		}

		var html = " <wmgPlayerJSTest2_ class='mgPlayerJSTest2_panel-popup-outer'></wmgPlayerJSTest2_>" +
			" <wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup " + popupType + "'>" +
			"    <div class='mgPlayerJSTest2_popup-header-wrapper'>" +
			"	    <div class='mgPlayerJSTest2_popup-header-icon-wrapper'><div class='mgPlayerJSTest2_popup-header-icon'></div></div>" +
			"     </div>" +
			" 	  <wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-content-wrapper'>" + self.title + "</wmgPlayerJSTest2_>" +
			popupDescription +
			"     <wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-btn-wrapper'>" +
			okButton +
			cancelButton +
			"    </wmgPlayerJSTest2_>" +
			" </wmgPlayerJSTest2_>";

		mg$("body").append(html);

		mg$(".mgPlayerJSTest2_popup-header-icon").html(GmCXt.svgs.popup_info);

		mg$(".mgPlayerJSTest2_panel-popup-outer").css('height', mg$(document).height());

		mg$(".mgPlayerJSTest2_panel-popup-ok").on("click", function() {
			if (mg$.isFunction(self.callback))
				self.callback();
			pub.close();
		});

		mg$(".mgPlayerJSTest2_panel-popup-cancel").on("click", function() {
			pub.close();
		});
	};

	pub.close = function() {
		mg$(".mgPlayerJSTest2_popup").remove();
		mg$(".mgPlayerJSTest2_panel-popup-outer").remove();
	};

	return pub;
};

function stopEventPropagation(e) {
	e.preventDefault();
	GmCXt.stopPropagation(e);
}

GmCXt.lockScroll = function() {

	if (GmCXt.lockScrollPosition === false || GmCXt.lockScrollPosition === undefined) {
		GmCXt.lockScrollPosition = true;
		mg$('html').css('overflow', 'hidden');
	}
};

GmCXt.getAutoLaunchTourId = function() {
	return localStorage.getItem(GmCXt.storagePrefix + 'autoLaunchTour');
};

GmCXt.isAutoTour = function() {
	var auto = localStorage.getItem(GmCXt.storagePrefix + 'autoLaunchTour');
	auto = parseInt(auto);
	if (!isNaN(auto) && auto > 0) {
		return true;
	} else {
		return false;
	}
};

GmCXt.alertV2 = function(options) {
	options = options || {};

	var pub = {};

	var self = {
		description: GmCXt.escapeHtml(options.description),
		button1: options.button1,
		button1Callback: options.button1Callback,
		button2: options.button2,
		button2Callback: options.button2Callback,
		button3: options.button3,
		button3Callback: options.button3Callback,
		keepScrollLock: options.keepScrollLock || false,
		closeTour: options.closeTour ? options.closeTour : false,
		showInputField: options.showInputField || false
	};

	var popupInputField = 'none';
	if (self.showInputField) {
		popupInputField = 'block';
	}
	pub.show = function() {
		var alt = GmCXt.getAutoLaunchTourId();
		var pi = GmCXt.playerI;
		var popupType = 'mgPlayerJSTest2_popup-info';

		var html = " <wmgPlayerJSTest2_ class='mgPlayerJSTest2_overlay-container'></wmgPlayerJSTest2_>" +
			"<wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup " + popupType + "'>" +
			"   <div class='mgPlayerJSTest2_popup-header-wrapper'>" +
			"	   <div class='mgPlayerJSTest2_popup-header-icon-wrapper'><div class='mgPlayerJSTest2_popup-header-icon'></div></div>" +
			"   </div>" +
			"<wmgPlayerJSTest2_ style='display:" + popupInputField + "'><input type='text' class='mgPlayerJSTest2_popup-input-field' maxlength='1000' /></wmgPlayerJSTest2_>" +
			"<wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-content-wrapper'>" + self.description + "</wmgPlayerJSTest2_>" +
			"<wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-btn-wrapper'>";

		if (self.button1) {
			html += "<wmgPlayerJSTest2_ title='" + self.button1 + "' aria-label='" + self.button1 + "' class='mgPlayerJSTest2_popup-ok-btn mgPlayerJSTest2_btn-default mgPlayerJSTest2_ok-btn mgPlayerJSTest2_text-overflow-ellipsis mgPlayerJSTest2_inline-block-vt'>" + self.button1 + "</wmgPlayerJSTest2_>";
		}

		if (self.button3) {
			html += "<wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-play-inapp mgPlayerJSTest2_btn-default mgPlayerJSTest2_ok-btn mgPlayerJSTest2_inline-block-vt' aria-label='" + self.button3 + "'>" + self.button3 + "</wmgPlayerJSTest2_>";
		}

		if (self.button2) {
			html += "<wmgPlayerJSTest2_ title='" + self.button2 + "' aria-label='" + self.button2 + "' class='mgPlayerJSTest2_popup-cancel-btn mgPlayerJSTest2_btn-default mgPlayerJSTest2_text-overflow-ellipsis mgPlayerJSTest2_inline-block-vt'>" + self.button2 + "</wmgPlayerJSTest2_>";
		}

		html += "</wmgPlayerJSTest2_>";

		if (pi && alt && alt === pi.tour.tour_id)
			html += "<wmgPlayerJSTest2_><input type='checkbox' class='mgPlayerJSTest2_popup-checkbox mgPlayerJSTest2_input-checkbox-custom'>" + GmCXt.label.doNotShowAgain + "</wmgPlayerJSTest2_>" +
			"</wmgPlayerJSTest2_>";

		mg$("html").append(html);

		mg$(".mgPlayerJSTest2_popup-header-icon").html(GmCXt.svgs.popup_info);
		mg$(".mgPlayerJSTest2_popup").on("mousedown", function(e) {
			GmCXt.stopPropagation(e);
		});

		mg$(".mgPlayerJSTest2_overlay-container").on("mousedown", function(e) {
			GmCXt.stopPropagation(e);
		});

		mg$(".mgPlayerJSTest2_popup-ok-btn").on("click", function(e) {
			GmCXt.stopPropagation(e);
			var popupInputFieldValue = mg$('.mgPlayerJSTest2_popup-input-field').val();
			if (pi && alt && alt === pi.tour.tour_id) {

				var checked = mg$('.mgPlayerJSTest2_popup-checkbox:checkbox:checked').length > 0;

				if (checked)
					GmCXt.setDoNotShowTours(pi.tour);
				else
					GmCXt.setSnoozedTour(pi.tour);
			}
			self.closeTour = false;
			pub.close();
			if (mg$.isFunction(self.button1Callback))
				self.button1Callback(popupInputFieldValue);
		});

		mg$(".mgPlayerJSTest2_popup-play-inapp").on("click", function(e) {
			GmCXt.stopPropagation(e);
			pub.close();
			if (mg$.isFunction(self.button3Callback))
				self.button3Callback();
		});

		mg$(".mgPlayerJSTest2_popup-cancel-btn").on("click", function(e) {
			GmCXt.stopPropagation(e);
			pub.close(self.keepScrollLock);
			if (mg$.isFunction(self.button2Callback))
				self.button2Callback();
		});

		mg$(".mgPlayerJSTest2_popup-close-button").on("click", function(e) {
			GmCXt.stopPropagation(e);
			pub.close(self.keepScrollLock);
		});
	};

	pub.close = function(keepScrollLock) {

		if (!keepScrollLock)
			GmCXt.unlockScroll();

		if (self.closeTour) GmCXt.cleanPlayer();

		GmCXt.closePopup();
	};

	return pub;
};

GmCXt.showForceMode = function() {
	GmCXt.closePopup();
	var popupType = 'mgPlayerJSTest2_popup-info';
	var html =
		"<wmgPlayerJSTest2_ class='mgPlayerJSTest2_overlay-container'></wmgPlayerJSTest2_>" +
		"<wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup " + popupType + "'>" +
		"   <div class='mgPlayerJSTest2_popup-header-wrapper'>" +
		"	   <div class='mgPlayerJSTest2_popup-header-icon-wrapper'><div class='mgPlayerJSTest2_popup-header-icon'></div></div>" +
		"   </div>" +
		"<wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-content-wrapper'>" + GmCXt.escapeHtml(GmCXt.label.userNotFollowingGuideMessage) + "</wmgPlayerJSTest2_>" +
		"<wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-btn-wrapper'>" +
		"<wmgPlayerJSTest2_ class='mgPlayerJSTest2_btn-default mgPlayerJSTest2_btn-continue-guide mgPlayerJSTest2_ok-btn mgPlayerJSTest2_inline-block-vt'>" + GmCXt.label.continueGuide + "</wmgPlayerJSTest2_>" +
		"<wmgPlayerJSTest2_ class='mgPlayerJSTest2_btn-default mgPlayerJSTest2_btn-neutral mgPlayerJSTest2_btn-exit-guide mgPlayerJSTest2_inline-block-vt'>" + GmCXt.label.exitGuide + "</wmgPlayerJSTest2_>" +
		"</wmgPlayerJSTest2_>" +
		"</wmgPlayerJSTest2_>";

	mg$("html").append(html);

	GmCXt.stopAudioTrack();

	mg$(".mgPlayerJSTest2_popup-header-icon").html(GmCXt.svgs.popup_info);
	GmCXt.enforceGuideMePopup = true;
	GmCXt.pauseAutomation();

	var windowHeight = mg$(window).height();
	var popupTop = (windowHeight - mg$('.mgPlayerJSTest2_popup').height()) / 2;
	mg$('.mgPlayerJSTest2_popup').css("top", popupTop);

	function close(e) {
		GmCXt.stopPropagation(e);
		GmCXt.closePopup();
		GmCXt.enforceGuideMePopup = false;
		if (GmCXt.playerI) GmCXt.resumeAutomation();
	}

	mg$(".mgPlayerJSTest2_btn-continue-guide").on("click", close);

	mg$(".mgPlayerJSTest2_btn-exit-guide").on("click", function(e) {
		if (GmCXt.isExitSurvey()) {
			GmCXt.showExitSurvey();
		}
		if (GmCXt.tourPlayerI) {
			GmCXt.tourPlayerI.stop();
		}
		close(e);
	});

	mg$(".mgPlayerJSTest2_popup-close-button").on("click", close);
};

GmCXt.firstStepAutoLaunch = function() {

	// if user has played first step already than going previously at 1st step 
	// don't show the option for the auto launch

	var t = GmCXt.playerI && GmCXt.playerI.tour;
	var viewNot = (GmCXt.user && GmCXt.user.settings.viewed_guide_notifications) || {};
	var result = false;

	if (GmCXt.isAutoTour() && GmCXt.isFirstNonAutomationStep()) {
		if (!GmCXt.isDefined(viewNot[t.tour_id]) || (viewNot[t.tour_id] < parseInt(t.version))) {
			result = true;
		}
	}

	return result;
};

GmCXt.showAutoLaunchCloseOptions = function(tour, closeStep) {
	var options = {
		tour: tour
	};

	if (closeStep) {
		options.isTour = true;
		options.okClose = closeStep;
	}

	GmCXt.showPushOptions(options).show();
};

GmCXt.pauseAutomation = function() {
	if (GmCXt.playerI && GmCXt.playerI.automate) {
		GmCXt.playerI.pauseAutomate = true;
		GmCXt.sendMessageToSyncPlayerI();
	}
};

GmCXt.resumeAutomation = function() {
	if (GmCXt.playerI) {
		GmCXt.playerI.pauseAutomate = false;
		GmCXt.sendMessageToSyncPlayerI();
	}
};

GmCXt.sendMessageToSyncPlayerI = function() {
	var msg = "mgPlayerJSTest2_action:sync_playerinstance_for_automation";
	var data = {};
	data.playerInstance = GmCXt.playerI;
	GmCXt.sendMessageToAllWindows(msg, data);
};

GmCXt.getUrlParameter = function(sParam) {
	var pageURL = decodeURIComponent(GmCXt._location().search.substring(1));
	return GmCXt.getParameterValue(sParam, pageURL);
};

GmCXt.getParameterValue = function(sParam, url) {
	if (sParam && url) {
		var sURLVariables = url.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	}

	return false;
};

GmCXt.setCookie = function(cname, cvalue, exdays) {
	document.cookie = cname + "=" + cvalue + ";path=/";
};

GmCXt.getCookie = function(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
};

GmCXt.hideTooltipDelay = function(step, options) {

	if (window.self === window.top) {
		GmCXt.hideTooltipTimeout = GmCXt.timeout(function() {
			GmCXt.hideTooltip(step, options);
		}, GmCXt.t.hiteTooltip);
	} else {
		var data = {
			stepId: step.step_id,
			options: options
		};
		GmCXt.sendMessageToTheTopWindow('mgPlayerJSTest2_action:hide_smarttip_delay', data);
	}
};

GmCXt.clearTooltipTimeout = function() {

	if (window.self === window.top) {
		clearTimeout(GmCXt.hideTooltipTimeout);
	} else {
		GmCXt.sendMessageToTheTopWindow('mgPlayerJSTest2_action:clear_smarttip_delay_timeout');
	}
};

GmCXt.hideValidationTooltip = function(step, showGuidanceTooltip) {
	var data = {
		stepId: step.step_id,
		showGuidanceTooltip: showGuidanceTooltip
	};
	if (window.self === window.top) {
		GmCXt.requestHandler.hideValidationSmarttip(data);
	} else {
		GmCXt.sendMessageToTheTopWindow('mgPlayerJSTest2_action:hide_validation_smarttip', data);
	}

	mg$("#mgPlayerJSTest2_smarttip-valid-" + step.step_id).hide();
};

GmCXt.hideTooltip = function(step, options) {
	var data = {
		stepId: step.step_id
	};

	if (window.self === window.top) {
		GmCXt.requestHandler.hideSmartTip(data, options);
	} else {
		GmCXt.sendMessageToTheTopWindow('mgPlayerJSTest2_action:hide_smarttip', data);
	}
};

GmCXt.validateDateFormat = function(str) {
	var matches = /^(\d{1,2})[:](\d{1,2})[:](\d{4})$/.exec(str) || /^(\d{1,2})[-](\d{1,2})[-](\d{4})$/.exec(str) || /^(\d{1,2})[/](\d{1,2})[/](\d{4})$/.exec(str);
	if (matches == null) return false;
	var d = matches[2];
	var m = matches[1] - 1;
	var y = matches[3];
	var composedDate = new Date(y, m, d);
	return composedDate.getDate() == d &&
		composedDate.getMonth() == m &&
		composedDate.getFullYear() == y;
};

GmCXt.validateTimeFormat = function(str) {
	var isValid = false;
	if (str.length > 8)
		isValid = false;
	else if (str.length < 6) {
		isValid = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(str);
	} else {
		isValid = /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/.test(str);
	}
	return isValid;
};

GmCXt.validateNumeric = function(str) {
	//  check for valid numeric strings
	var strValidChars = "0123456789.-";
	var strChar;
	var blnResult = true;

	if (str.length === 0) return false;

	//  test strString consists of valid characters listed above
	for (i = 0; i < str.length && blnResult === true; i++) {
		strChar = str.charAt(i);
		if (strValidChars.indexOf(strChar) == -1) {
			blnResult = false;
		}
	}
	return blnResult;
};

GmCXt.validatePhonenumber = function(str) {
	var isValid = /^[1-9][0-9]{4,14}$/.test(str);
	return isValid;
};

GmCXt.validateEmail = function(str) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(str);
};

GmCXt.validateRegex = function(regex, value) {
	var re = new RegExp(regex);
	return re.test(value);
};

GmCXt.getBulletCount = function(value) {
	return (value.match(/<li/g) || []).length;
};

GmCXt.validateWebUrl = function(str) {
	var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
	return re.test(str);
};

GmCXt.getMatchingFrame = function(frames, event, match) {
	for (var i = 0, len = frames.length; i < len; i++) {
		frame = frames[i];
		// check if frame window matches to the sender window
		if (frame.contentWindow == event.source) {
			match.found = true;
			match.frame = frame;
			break;
		}
	}
	return match;
};

GmCXt.addFrameOffset = function(event, pos) {
	var match = {
		found: false,
		frame: null
	};

	var frames = document.getElementsByTagName('iframe');
	match = GmCXt.getMatchingFrame(frames, event, match);

	if (!match.found) {
		frames = document.getElementsByTagName('frame');
		match = GmCXt.getMatchingFrame(frames, event, match);
	}

	if (!match.found) {
		frames = GmCXt.getIframesFromShadowDom();
		match = GmCXt.getMatchingFrame(frames, event, match);
	}

	if (match.found) {
		var rect = match.frame.getBoundingClientRect();
		pos.left += rect.left;
		pos.top += rect.top;
	}

	pos.windowWidth = mg$(window).width();
	pos.windowHeight = mg$(window).height();

	return pos;
};

GmCXt.addScrollOffset = function(position, cssPosition) {
	if (!cssPosition) {
		var top = mg$(window).scrollTop();
		var left = mg$(window).scrollLeft();

		position.left += left;
		position.origTop = position.top;
		position.top += top;
	}

	return position;
};

GmCXt.extractFileName = function(url) {
	var arr = url.split("/");
	if (arr.length > 1) {
		return GmCXt.conf.webServiceUrl + arr[arr.length - 1];
	} else {
		return url;
	}
};

GmCXt.clearPreviewPopupAlignment = function($popup) {
	$popup
		.removeClass('top-left')
		.removeClass('top-middle')
		.removeClass('top-right')
		.removeClass('right-top')
		.removeClass('right-middle')
		.removeClass('right-bottom')
		.removeClass('bottom-left')
		.removeClass('bottom-middle')
		.removeClass('bottom-right')
		.removeClass('left-top')
		.removeClass('left-middle')
		.removeClass('left-bottom');
};

GmCXt.alignMessagePreview = function($popup, $container, alignment, stepSettings) {

	GmCXt.clearPreviewPopupAlignment($popup);
	var popupWidth = $popup.width();
	var popupHeight = $popup.height();
	var windowWidth = $container.width();
	var windowHeight = $container.height();
	var left = (windowWidth - popupWidth) / 2;
	var top = 0;

	if (!popupWidth || !popupHeight) return;

	switch (alignment) {

		case 'top':
			top = 20;
			left = (windowWidth - popupWidth) / 2;
			break;

		case 'center':
			top = (windowHeight - popupHeight) / 2;
			left = (windowWidth - popupWidth) / 2;
			break;

		case 'bottom':
			top = windowHeight - popupHeight - 20;
			left = (windowWidth - popupWidth) / 2;
			break;

		case 'left-top':
			top = 20;
			left = 20;
			break;

		case 'left-center':
			top = (windowHeight - popupHeight) / 2;
			left = 20;
			break;

		case 'left-bottom':
			top = windowHeight - popupHeight - 20;
			left = 20;
			break;

		case 'right-top':
			top = 20;
			left = windowWidth - popupWidth - 20;
			break;

		case 'right-center':
			top = (windowHeight - popupHeight) / 2;
			left = windowWidth - popupWidth - 20;
			break;

		case 'right-bottom':
			top = windowHeight - popupHeight - 20;
			left = windowWidth - popupWidth - 20;
			break;

		case 'custom':
			top = (stepSettings.elementTop * windowHeight) / 100;
			left = (stepSettings.elementLeft * windowWidth) / 100;
			break;
	}

	$popup.css({
		left: left,
		top: top,
		position: 'fixed'
	});
};

GmCXt.closeNotificationPopup = function(isSidePanelOpen) {
	GmCXt.sendMessageToApp('mgPlayerJSTest2_action:close_notification_popup', {
		isSidePanelOpen: isSidePanelOpen
	});
};

GmCXt.removePreviewTop = function() {
	GmCXt.removePreviewFrame();
	GmCXt.sendMessageToAllWindows("mgPlayerJSTest2_action:remove_preview");
};

GmCXt.hideSmartTipsIfOptionON = function() {
	var org = GmCXt.organization;
	if (org && org.admin_settings.show_tooltips_during_workflow_guide) {
		return;
	}
	GmCXt.hideSmartTips();
};

GmCXt.hideSmartTips = function() {
	mg$('.mgPlayerJSTest2_smarttip-icon').addClass('tooltip-hidden');
	mg$('.mgPlayerJSTest2_smarttip').addClass('tooltip-hidden');
	mg$('.mgPlayerJSTest2_smarttip-valid').addClass('tooltip-hidden');
	GmCXt.smarttipAreHidden = true;
	GmCXt.sendMessageToAllWindows("mgPlayerJSTest2_action:hide_all_smarttip");
};

GmCXt.showSmartTips = function(forceShow) {

	if ((GmCXt.tourPlayerI && !forceShow) || GmCXt.isSurveyVisible) return;

	mg$('.mgPlayerJSTest2_smarttip-icon').removeClass('tooltip-hidden');
	mg$('.mgPlayerJSTest2_smarttip').removeClass('tooltip-hidden');
	mg$('.mgPlayerJSTest2_smarttip-valid').removeClass('tooltip-hidden');
	GmCXt.smarttipAreHidden = false;
	GmCXt.sendMessageToAllWindows("mgPlayerJSTest2_action:show_all_smarttip");
};

GmCXt.previewSmartTips = function(id) {
	mg$('.mgPlayerJSTest2_smarttip-icon-wrapper-' + id).removeClass('tooltip-hidden');
	mg$('.mgPlayerJSTest2_smarttip-icon-wrapper-' + id).show();
	GmCXt.sendMessageToAllWindows("mgPlayerJSTest2_action:show_preview_smarttip", {
		id: id
	});
};

GmCXt.hideBeacons = function() {
	mg$('.mgPlayerJSTest2_beacon-icon').addClass('mgPlayerJSTest2_hidden');
	mg$('#mgPlayerJSTest2_beacon-icon-pos-select').show();
	GmCXt.beaconsAreHidden = true;
	GmCXt.sendMessageToAllWindows("mgPlayerJSTest2_action:hide_beacons");
};

GmCXt.showBeacons = function(forceShow) {

	if ((GmCXt.tourPlayerI && !forceShow) || GmCXt.isSurveyVisible) {
		GmCXt.log(48, "STOP showing beacons. player instance || survey on screen");
		return;
	}

	mg$('.mgPlayerJSTest2_beacon-icon').removeClass('mgPlayerJSTest2_hidden');
	mg$('#mgPlayerJSTest2_beacon-icon-pos-select').hide();
	GmCXt.beaconsAreHidden = false;
	GmCXt.sendMessageToAllWindows("mgPlayerJSTest2_action:show_beacons");
};

GmCXt.previewBeacons = function(id) {
	mg$('.mgPlayerJSTest2_beacon-icon-tour-' + id).removeClass('mgPlayerJSTest2_hidden');
	GmCXt.sendMessageToAllWindows("mgPlayerJSTest2_action:show_preview_beacons", {
		id: id
	});
};

GmCXt.getScrollParent = function(node) {

	if (node == null || node.nodeType !== 1) return null;

	var tag = node.tagName;
	if (tag) tag = tag.toLowerCase();

	if (tag == 'body' || tag == 'html') return null;

	var overflowY = getComputedStyle(node).overflowY;

	var isScrollable = overflowY !== 'visible';

	if (isScrollable && node.scrollHeight > (node.clientHeight + 5)) {
		return node;
	} else {
		return GmCXt.getScrollParent(node.parentNode);
	}
};

GmCXt.setPopUpForImage = function(description, parentClassName) {
	// Check for image exist if yes then add popup js
	var imgSrc = '';
	GmCXt.setImagePopUp();
	var fsBtn = "<div class='mgPlayerJSTest2_full-screen-icon-cont'><button class='mgPlayerJSTest2_full-screen-icon'>&#x26F6;</button></div>";

	mg$(parentClassName).addClass('mgPlayerJSTest2_play-step-popup-loader');

	var stepPopupImgList = mg$(parentClassName + ' img');

	var finalStepPopupContent = "";

	stepPopupImgList.each(function(e) {
		var stepPopupContent = mg$(parentClassName)[0].innerHTML;
		var stepImgVar = stepPopupImgList[e].outerHTML;
		var stepImgOverlay = "<div class='mgPlayerJSTest2_step-img-popup-overlay'></div>";
		var newStepImgVar = "<div class='mgPlayerJSTest2_display-inline-block mgPlayerJSTest2_position-relative mgPlayerJSTest2_step-img-popup-cont'>" + stepImgOverlay + fsBtn + stepImgVar + "</div>";
		finalStepPopupContent = stepPopupContent.replace(stepImgVar, newStepImgVar);
		mg$(parentClassName)[0].innerHTML = finalStepPopupContent;
	}).addClass('mgPlayerJSTest2_custom-image');

	mg$(".mgPlayerJSTest2_full-screen-icon").html(GmCXt.svgs.fullscreen);

	mg$('.mgPlayerJSTest2_full-screen-icon').on("click", function(e) {
		var modalImg = document.getElementById("mgPlayerJSTest2_img_desc");
		var container = this.closest('.mgPlayerJSTest2_step-img-popup-cont');
		var imgElem = container.getElementsByTagName('img')[0];
		imgSrc = imgElem.src;
		var imgWrp = document.getElementsByClassName('mgPlayerJSTest2_image-popup')[0];
		GmCXt.stopPropagation(e);
		imgWrp.style.display = "block";
		modalImg.src = imgSrc;
		mg$('.mgPlayerJSTest2_preview-step-popup-container').css({
			'z-index': '2147483646'
		});
	});



	mg$(parentClassName + ' img').on("load", function() {
		if (GmCXt.alignPopupI) GmCXt.alignPopupI.redo();
		mg$(parentClassName).removeClass('mgPlayerJSTest2_play-step-popup-loader');
	});
};

GmCXt.getText = function(s) {
	if (s) {
		s = mg$('<gssdummy />').html(s).text();
	}
	return s;
};

GmCXt.singleLineTitle = function(t) {
	var c = '';
	if (t && t.length < 28) c = 'mgPlayerJSTest2_nowrap-div';
	return c;
};

GmCXt.setLinkClickhandler = function(description, parentClassName) {
	if (description && description.indexOf("<a ") !== -1) {
		mg$(parentClassName + ' a').each(function() {
			mg$(parentClassName + ' a').on("click", function(e) {
				GmCXt.handleLinkClickEvent(e);
			});
		});
	}
};

GmCXt.getPageHostPathName = function() {
	var hostname = GmCXt._location().hostname;
	var pathname = GmCXt._location().pathname;
	return hostname + pathname;
};

GmCXt.getAppName = function() {
	var a = GmCXt.conf.appName;

	if (GmCXt.isPlayer() && !GmCXt.playerMode) a += GmCXt.conf.appType;

	return a + GmCXt.conf.env;
};

GmCXt.reportPresence = function() {
	var message = {
		action: 'MyGuideReporting',
		data: GmCXt.getAppName()
	};

	GmCXt.log(63, "Broadcast presence of: " + GmCXt.getAppName());
	GmCXt.sendToParentWindow(message);
};

GmCXt.setOnAudioMode = function() {
	GmCXt.sendMessageToAllWindows('mgPlayerJSTest2_action:set_audio_mode_on');
};

GmCXt.setOffAudioMode = function() {
	GmCXt.sendMessageToAllWindows('mgPlayerJSTest2_action:set_audio_mode_off');
};

GmCXt.setOnOnBoarAudioMode = function() {
	mg$('.mgPlayerJSTest2_tooltip-title-mute').show();
	mg$('.mgPlayerJSTest2_tooltip-title-unmute').hide();
	mg$('.mgPlayerJSTest2_onboarding-audio-off').hide();
	mg$('.mgPlayerJSTest2_onboarding-audio-on').show();
	mg$('.mgPlayerJSTest2_onboarding-audio').addClass('playing-audio');
};

GmCXt.setOffOnBoarAudioMode = function() {
	mg$('.mgPlayerJSTest2_tooltip-title-mute').hide();
	mg$('.mgPlayerJSTest2_tooltip-title-unmute').show();
	mg$('.mgPlayerJSTest2_onboarding-audio-on').hide();
	mg$('.mgPlayerJSTest2_onboarding-audio-off').show();
	mg$('.mgPlayerJSTest2_onboarding-audio').removeClass('playing-audio');
};

GmCXt.getBoundingRect = function(he) {
	try {
		return he.getBoundingClientRect();
	} catch (e) {
		return false;
	}
};

GmCXt.getElVisibility = function(el, isFrame) {
	var display = 'visible';

	if (!isFrame && isUBSDrawerEl(el)) {
		return 'visible';
	}

	if (!el || !isVisibleByElStyle(el, true)) {
		display = 'hidden';
	} else {
		var pos = GmCXt.getBoundingRect(el);
		if (!pos) return 'hidden';

		var xPosMid = pos.left + (pos.width / 2);
		var yPosMid = pos.top + (pos.height / 2);

		if (xPosMid > window.innerWidth) {
			xPosMid = pos.left + (window.innerWidth - pos.left) / 2;
		} else if (xPosMid < 0) {
			xPosMid = (pos.left + pos.width) / 2;
		}

		if (yPosMid > window.innerHeight) {
			yPosMid = pos.top + (window.innerHeight - pos.top) / 2;
		} else if (yPosMid < 0) {
			yPosMid = (pos.top + pos.height) / 2;
		}

		disable('.mgPlayerJSTest2_smarttip-icon');
		disable('.mgPlayerJSTest2_beacon-icon');

		var topEl = document.elementFromPoint(xPosMid, yPosMid);

		if (!isFrame && isUBSDrawerOpen(topEl)) {
			return 'hidden';
		}

		enable('.mgPlayerJSTest2_smarttip-icon');
		enable('.mgPlayerJSTest2_beacon-icon');

		if (topEl === null) {
			topEl = document.elementFromPoint(pos.left, pos.top);

			if (topEl === null) {
				topEl = document.elementFromPoint(pos.left + pos.width, pos.top);
			}
			if (topEl === null) {
				topEl = document.elementFromPoint(pos.left, pos.top + pos.height);
			}
			if (topEl === null) {
				topEl = document.elementFromPoint(pos.left + pos.width, pos.top + pos.height);
			}
		}

		if (topEl === null) {
			display = 'hidden';
		} else {

			if (el !== topEl && !GmCXt.isMyGuideEl(topEl)) {
				var containsShadowRoot = (el.getRootNode !== undefined && el.getRootNode() instanceof ShadowRoot);

				if (mg$.contains(topEl, el) || (containsShadowRoot && !isFrame)) {

					if (!checkParentVisibility(topEl, el, containsShadowRoot) && !GmCXt.checkServiceNow()) {
						display = 'hidden';
					}

				} else if (!mg$.contains(topEl, el) && !mg$.contains(el, topEl) &&
					(el.parentNode && !mg$.contains(el.parentNode, topEl)) &&
					isElCompletelyCovered(el, topEl)) {

					display = 'hidden';

				}
			}
		}
	}

	function isUBSDrawerEl(el) {
		if (el && GmCXt.checkUBS()) {
			var temp = el;
			while (temp && temp !== document) {
				if (temp.classList.contains('drawer-dialog') || temp.tagName === 'BRML-DRAWER') {
					return true;
				}
				temp = findParent(temp);
			}
		}
		return false;
	}

	function isUBSDrawerOpen(topEl) {

		/*
		HTML structure: 
		'BR-PLUTUX-RCAP-GEN5' >
			'shadowRoot' >
				'div.rcap-container' > 'BR-PLUTUX-CONTEXT-BASED-DRAWERS-GEN5'
					3 children '<type>-DRAWER-GEN5' each of which is populated by HTML if either kind of drawer is opened
		*/

		if (GmCXt.checkUBS() && topEl && topEl.tagName === 'BR-PLUTUX-RCAP-GEN5') {
			// Element in background; checking if drawer is open
			var temp = topEl.shadowRoot;
			if (temp) {
				temp = mg$(temp).find('BR-PLUTUX-CONTEXT-BASED-DRAWERS-GEN5');
				if (temp.length) {
					temp = temp[0].shadowRoot;
					var nodes = mg$(temp).children();
					for (var i in nodes) {
						var node = nodes[i];
						if (node.tagName && node.tagName.includes('-DRAWER-GEN5')) {
							temp = node.shadowRoot;
							temp = mg$(temp).find('BRML-DRAWER');
							if (temp.length) {
								temp = temp[0].shadowRoot;
								temp = mg$(temp).find('DIV.drawer-dialog');
								if (temp.length) return true;
							}
						}
					}
				}
			}
		}
		return false;
	}

	function checkParentVisibility(topEl, el, checkPosition) {
		var visible = true;

		while (el !== topEl && el !== document) {

			if (el && GmCXt.checkUBS() && el.classList.contains('hydrated')) {
				// Custom handling for UBS
				// Skip elements with 'hydrated' class as they return incorrect visibility by style
				el = findParent(el);
				continue;
			}

			el = findParent(el);

			if (!el || !isVisibleByElStyle(el, checkPosition)) {
				visible = false;
				break;
			}
		}

		return visible;
	}

	function findParent(el) {
		if (el) {
			var temp = el.parentElement || el.getRootNode().host || el.getRootNode();
			if (temp !== el) {
				return temp;
			}
		}
		return null;
	}

	function isVisibleByElStyle(el, checkPosition) {
		if (!mg$(el).is(':visible')) {
			return false;
		}

		var style = getComputedStyle(el);
		if (style.visibility === 'hidden') {
			return false;
		}

		if (parseInt(style.opacity) <= 0) {
			return false;
		}

		if (checkPosition) {
			if (parseInt(style.height) <= 0 || parseInt(style.width) <= 0) {
				return false;
			}
			if (style.position === 'fixed' && (parseInt(style.left) + parseInt(style.width) <= 0 || parseInt(style.top) + parseInt(style.height) <= 0)) {
				return false;
			}
		}

		return true;
	}

	function isElCompletelyCovered(el, topEl) {

		var pos = GmCXt.getBoundingRect(el);
		var topElPos = topEl.getBoundingClientRect();

		if (topElPos.height < pos.height || topElPos.width < pos.width) {
			var tempTop = topEl;
			while (tempTop !== document && !mg$.contains(tempTop.parentNode, el)) {
				tempTop = tempTop.parentNode;
				if (tempTop.offsetHeight > pos.height && tempTop.offsetWidth > pos.width) {
					return true;
				}
			}
			if (GmCXt.checkSalesForceSite()) {
				var calender = mg$(topEl).parents("lightning-calendar");
				if (calender.length && GmCXt.dom.levelCheck(calender[0], topEl, 10)) {
					return true;
				}
			}
			return false;
		}

		var width20pc = (20 / 100) * pos.width;
		var height20pc = (20 / 100) * pos.height;

		var left = pos.left + width20pc;
		var right = pos.right - width20pc;
		var top = pos.top + height20pc;
		var bottom = pos.bottom - height20pc;

		if (topElPos.top <= pos.top && topElPos.bottom >= pos.bottom &&
			topElPos.left <= pos.left && topElPos.right >= pos.right) {
			return true;
		} else if (document.elementFromPoint(left, top) !== el &&
			document.elementFromPoint(right, top) !== el &&
			document.elementFromPoint(left, bottom) !== el &&
			document.elementFromPoint(right, bottom) !== el) {
			return true;
		}

		return false;
	}

	function disable(selector) {
		mg$(selector).css("pointer-events", "none");
	}

	function enable(selector) {
		mg$(selector).css("pointer-events", "initial");
	}

	return display;
};

// Extracts Tag name from GuideMe JS Selector
GmCXt.getTagName = function(selector) {
	var tag = selector.match(/^(.*?)\[/g);
	if (tag === null) {
		tag = selector.match(/^(.*?)(:visible|:eq)/g);
		tag = tag[0].replace(/:visible|:eq/g, '');
		return tag;
	} else {
		tag = tag[0].replace(/\[/g, '');
		return tag;
	}
};

GmCXt.alignImageStepPreview = function($popup, $container, alignment, addScroll, stepSettings) {

	GmCXt.clearPreviewPopupAlignment($popup);

	var popupWidth = $popup.width();
	var popupHeight = $popup.height();
	var windowWidth = $container.width();
	var windowHeight = $container.height();
	var left = (windowWidth - popupWidth) / 2;
	var top = 0;

	if (!popupWidth || !popupHeight) {
		return;
	}

	switch (alignment) {
		case 'top':
			top = 20;
			left = (windowWidth - popupWidth) / 2;
			break;

		case 'center':
			top = (windowHeight - popupHeight) / 2;
			left = (windowWidth - popupWidth) / 2;
			break;

		case 'bottom':
			top = windowHeight - popupHeight - 20;
			left = (windowWidth - popupWidth) / 2;
			break;

		case 'left-top':
			top = 20;
			left = 20;
			break;

		case 'left-center':
			top = (windowHeight - popupHeight) / 2;
			left = 20;
			break;

		case 'left-bottom':
			top = windowHeight - popupHeight - 20;
			left = 20;
			break;

		case 'right-top':
			top = 20;
			left = windowWidth - popupWidth - 20;
			break;

		case 'right-center':
			top = (windowHeight - popupHeight) / 2;
			left = windowWidth - popupWidth - 20;
			break;

		case 'right-bottom':
			top = windowHeight - popupHeight - 20;
			left = windowWidth - popupWidth - 20;
			break;

		case 'custom':
			top = (stepSettings.elementTop * windowHeight) / 100;
			left = (stepSettings.elementLeft * windowWidth) / 100;
			break;
	}

	if (addScroll === true) {
		top += $container.scrollTop();
		left += $container.scrollLeft();
	}

	top += $container.offset().top;
	left += $container.offset().left;

	$popup.css({
		left: left,
		top: top
	});
};

GmCXt.isLooping = function() {

	var PI = GmCXt.playerI;
	var flag = false;

	if (PI.loops - PI.currentLoop > 0) {
		flag = true;
		GmCXt.log(33, "Current loop: " + PI.currentLoop);
	}
	return flag;
};

GmCXt.isCurrentHost = function(host) {
	if (GmCXt.urlParts && GmCXt.urlParts.host.indexOf(host) !== -1)
		return true;
	else
		return false;
};

GmCXt.openPowerForm = function(data) {

	if (window.self === window.top) {
		GmCXt.sendMessageToApp('mgPlayerJSTest2_action:show_power_form', data);
	} else {
		GmCXt.sendMessageToTheTopWindow('mgPlayerJSTest2_action:open_power_form', data);
	}
};

GmCXt.rotateGear = function() {
	var c = 1;
	var i = null;

	var id = '#mgPlayerJSTest2_auto-progress-';
	var cls = 'mgPlayerJSTest2_active-progress';

	i = setInterval(function() {
		if (c === 1 || mg$(id + (c - 1)).hasClass(cls)) { // check for the previous gear
			mg$(id + c).addClass(cls);
		}
		c++;
		if (c > 3) clearInterval(i);
	}, 900);
};

GmCXt.removeTooltips = function(t) {

	GmCXt.log(43, "REMOVE Tooltip" + GmCXt.tourLog(t));

	for (var j = 0; j < t.steps.length; j++) {
		var step = t.steps[j];
		var data = {
			step_id: step.step_id,
			tour_id: t.tour_id
		};

		if (GmCXt.inTopWindow(step.step_settings)) {
			GmCXt.requestHandler.removeToolip(data);
		} else {
			GmCXt.sendMessageToAllWindows("mgPlayerJSTest2_action:remove_tooltip", data);
		}

		if (t.steps[j].step_settings.smartTip.type === 'injector') {
			GmCXt.sendMessageToApp("mgPlayerJSTest2_action:remove_power_form", data);
		}

	}
};

GmCXt.updateBeaconsOnScreen = function(tourId, isValid) {

	if (window.self === window.top) {
		tourId = parseInt(tourId);
		var i = GmCXt.beaconsOnScreen.indexOf(tourId);

		if (isValid && i < 0) {
			GmCXt.beaconsOnScreen.push(tourId);
			GmCXt.log(49, "ADDED on screen: " + tourId);
			GmCXt.auto.setBeaconsAutoDataToStorage(GmCXt.beaconsOnScreen);
			GmCXt.setBeaconsDisplayFrequency(tourId);
		} else if (!isValid) {
			GmCXt.beaconsOnScreen.splice(i, 1);
			GmCXt.log(49, "REMOVED from screen: " + tourId);
		}
	} else {
		var data = {
			jobId: tourId,
			isValid: isValid
		};
		GmCXt.sendMessageToTheTopWindow("mgPlayerJSTest2_action:update_beacons_on_screen", data);
	}
};

GmCXt.setOnScreenTooltipGuideInfo = function(tour) {

	GmCXt.log(43, "INFO SET: " + GmCXt.tourLog(tour));

	var tid = "tour_" + tour.tour_id;
	var t = GmCXt.onScreenTooltipGuideInfo[tid];

	if (t) {
		GmCXt.onScreenTooltipGuideInfo[tid].total = tour.steps.length;
	} else {
		GmCXt.onScreenTooltipGuideInfo[tid] = {
			total: tour.steps.length,
			visible: [],
			watchRules: tour.tour_settings.ruleCheckOnClick
		};
	}
	GmCXt.onScreenTooltipGuideInfo[tid].rules = tour.tour_settings.rules.map(function(rule) {
		return rule.type;
	});

	if (GmCXt.isAutomationRunning()) {
		GmCXt.tooltipInfoForAutomation = Object.assign({}, GmCXt.onScreenTooltipGuideInfo);
	}
};

GmCXt.updateOnScreenTooltipGuideIds = function(t, tid) {
	var i = GmCXt.onScreenTooltipGuideIds.indexOf(tid);

	var pid = GmCXt.partialVisibleTooltipsIds.indexOf(tid);

	if (t.total === t.visible.length) {
		// All tooltips visible

		if (i < 0) {
			// Entry not present in 'onScreenTooltipGuideIds'
			GmCXt.onScreenTooltipGuideIds.push(tid);
			GmCXt.log(43, "ADDED on screen: " + tid);

			if (pid >= 0) {
				GmCXt.partialVisibleTooltipsIds.splice(pid, 1);
			}
		}
	} else {
		// One or more tooltips in the guide are hidden

		if (i >= 0) {
			// Entry present in 'onScreenTooltipGuideIds'
			GmCXt.onScreenTooltipGuideIds.splice(i, 1);
			GmCXt.log(43, "REMOVED from screen: " + tid);
		}

		if (t.visible.length === 0) {
			// All tooltips in the guide are hidden
			if (pid >= 0) {
				GmCXt.partialVisibleTooltipsIds.splice(pid, 1);
				GmCXt.log(43, "REMOVED from screen (ALL HIDDEN): " + tid);
			}
		} else {
			if (pid < 0) {
				// Update partially loaded tooltip list 
				GmCXt.partialVisibleTooltipsIds.push(tid);
				GmCXt.log(43, "ADDED on screen (PARTIALLY): " + tid);
			}
		}
	}
};

GmCXt.updateOnScreenTooltipGuideInfo = function(tour, tourId, stepId, isValid, smartTip, url) {
	if (window.self === window.top) {
		var t = GmCXt.onScreenTooltipGuideInfo["tour_" + tourId];

		//FOR: tooltip tracking
		//if valid => tooltip rendered
		if (isValid) {
			GmCXt.setTooltipRenderInfo(tour, tourId, stepId, smartTip, url);
		}

		//FOR: on screen tooltip rendering
		if (t) {
			var stepIndex = t.visible.indexOf(stepId);

			if (isValid) {
				if (stepIndex < 0) {
					t.visible.push(stepId);

					GmCXt.log(43, "VISIBLE: " + GmCXt.stepLog(stepId, tourId));

					if (GmCXt.isAutomationRunning()) {
						GmCXt.tooltipInfoForAutomation["tour_" + tourId].visible.push(stepId);
					}
				}
			} else {
				if (stepIndex >= 0) {
					t.visible.splice(stepIndex, 1);

					GmCXt.log(43, "HIDDEN: " + GmCXt.stepLog(stepId, tourId));
				}
			}

			GmCXt.updateOnScreenTooltipGuideIds(t, tourId);
			GmCXt.auto.setTooltipAutoDataToStorage(GmCXt.tooltipInfoForAutomation);
		}

	} else {
		var data = {
			tour: tour,
			tourId: tourId,
			stepId: stepId,
			isValid: isValid,
			smartTip: smartTip,
			url: url
		};
		GmCXt.sendMessageToTheTopWindow("mgPlayerJSTest2_action:update_smarttip_on_screen", data);
	}
};

GmCXt.getTooltipName = function(type) {
	var name = '';
	switch (type) {
		case 'disableElement':
			name = "digital_duct_tape";
			break;

		case 'injector':
			name = "power_html";
			break;

		case 'formSubmit':
			name = "form_submit";
			break;

		case 'both':
			name = "guidance_validation";
			break;

		default:
			name = type;
			break;
	}
	return name;
};

GmCXt.clearDataOnLogout = function(d) {

	GmCXt.beaconTours = [];
	GmCXt.beaconsOnScreen = [];

	GmCXt.urlBasedTours = [];

	GmCXt.tooltipTours = [];
	GmCXt.fTags = [];
	GmCXt.onScreenTooltipGuideInfo = {};
	GmCXt.onScreenTooltipGuideIds = [];
	GmCXt.partialVisibleTooltipsIds = [];

	GmCXt.closeNotificationPopup();

	GmCXt.trackerV1.trackPageVisit();

	if (GmCXt.creatorInterval) {
		clearInterval(GmCXt.creatorInterval);
	}
	//Triggering login without delay
	if(d.instantReLogin) {
		GmCXt.loginUsingAuthKey();
	}

	// If player and user was logged in before
	if (GmCXt.inPlayer && d.startInterval) {
		GmCXt.startReloginInterval();
	}

	if (GmCXt.isClientJs() || GmCXt.isCreatorJS()) {
		GmCXt.trackerV1.sendEvents(true);
	}

	GmCXt.storage().remove(['trackingTours', 'guideTrackingInProcess', 'userPulsePayloadTime', 'tooltipTrackData']);

	GmCXt.user = false;
	GmCXt.organization = false;

	GmCXt.clearSession();
	GmCXt.sendMessageToAllWindows('mgPlayerJSTest2_action:clear_session');
};

GmCXt.startReloginInterval = function() {

	GmCXt.log(21, "Start re-login Interval");

	if (GmCXt.reloginInterval) {
		clearInterval(GmCXt.reloginInterval);
	}

	GmCXt.reloginInterval = setInterval(function() {
		if (GmCXt.user) {

			GmCXt.log(21, "CLEAR: re-login interval");
			clearInterval(GmCXt.reloginInterval);
		} else {
			GmCXt.log(21, "RE-LOGIN using orgkey");
			GmCXt.storage().remove(['user']).then(function() {
				GmCXt.log(21, "CLEARED user data ");
				GmCXt.loginUsingAuthKey();
			});
		}
	}, GmCXt.t.autoRelogin);
};

GmCXt.checkIfSurveySubmitted = function(playerInstance, data, isExitSurvey, cb) {
	var flag = false;
	GmCXt.storage().get(['surveyCompleted'])
		.then(function(st) {
			function checkSurveySubmited(version, surveyObj) {
				if (surveyObj[data.tourId]) {
					if (version > surveyObj[data.tourId]) {
						return true;
					} else {
						return false;
					}
				} else {
					return true;
				}
			}

			data.instance = {
				tour: {
					tour_settings: playerInstance.tour.tour_settings
				}
			};

			if (GmCXt.isAnonymousUser()) {
				if (GmCXt.getObjectSize(st) === 0) st.surveyCompleted = {};
				flag = checkSurveySubmited(parseInt(data.version), st.surveyCompleted);
			} else {
				var userSettings = GmCXt.user.settings || {};
				userSettings.surveyCompleted = userSettings.surveyCompleted || {};
				flag = checkSurveySubmited(parseInt(data.version), userSettings.surveyCompleted);
			}

		}).then(function() {
			if (cb) {
				cb(flag);
			}
		});
};

GmCXt.showSurveyScreen = function(data, isExitSurvey) {
	return new Promise(function(resolve, reject) {
		GmCXt.isSurveyVisible = false;

		if (isExitSurvey) {
			GmCXt.isSurveyVisible = true;
			GmCXt.sendMessageToParentWindow('mgPlayerJSTest2_action:exit_survey_start;task:show_survey', data);
			resolve(GmCXt.isSurveyVisible);

		} else if (data.type === "stepPlay") {
			GmCXt.isSurveyVisible = true;
			GmCXt.sendMessageToParentWindow('mgPlayerJSTest2_action:survey_start;task:show_survey', data);
			resolve(GmCXt.isSurveyVisible);

		} else {
			var playerInstance = mg$.extend({}, data.playerInstance);

			if (GmCXt.isEmpty(playerInstance)) return;

			GmCXt.checkIfSurveySubmitted(playerInstance, data, isExitSurvey, function(f) {
				if (f) {
					GmCXt.isSurveyVisible = true;
					GmCXt.sendMessageToParentWindow('mgPlayerJSTest2_action:survey_start;task:show_survey', data);
				}
				resolve(GmCXt.isSurveyVisible);
			});
		}

		if (!GmCXt.isSidePanelApp) GmCXt.closeAppPanel();
	});
};

GmCXt.checkCurrentStepSurvey = function(pi) {

	var currentStep = GmCXt.getCurrentStep(pi.currentStepId);
	if (currentStep.step_type === "survey") {
		return true;
	} else {
		return false;
	}
};

GmCXt.getSurveyScreen = function(PI, guideNotCompleted) {
	return new Promise(function(resolve, reject) {
		var f = false;

		if (GmCXt.playerI && GmCXt.isLooping()) {
			resolve(f);

		} else if (PI && PI.tour && GmCXt.checkInsightEnabled()) {

			var tour = PI.tour;

			var data = {
				tourId: tour.tour_id,
				version: tour.version,
				playerInstance: PI
			};

			if (guideNotCompleted) {
				f = true;

				if (PI && GmCXt.checkCurrentStepSurvey(PI)) {

					var currentStep = GmCXt.getCurrentStep(PI.currentStepId);
					var sentiment = currentStep.step_settings.sentiment;
					data.data = {};
					data.data.sentimentCode = sentiment.sentiment_code;
					data.step = currentStep;
					data.type = 'stepPlay';
					GmCXt.showSurveyScreen(data, false, guideNotCompleted).then(function() {
						resolve(f);
					});

				} else if (GmCXt.isExitSurvey()) {

					if (GmCXt.isPlayer()) {
						GmCXt.showSurveyScreen(data, true).then(function() {
							resolve(f);
						});

					} else {
						var ti = GmCXt.tourPlayerI;
						if (ti) {
							ti.closeGuide();
						}
						resolve(f);
					}
				}

			} else if (GmCXt.showSurvey(PI) && GmCXt.isPlayer()) {
				data.type = 'guide';
				GmCXt.showSurveyScreen(data).then(function(f) {
					resolve(f);
				});
			}
		}
	});
};

GmCXt.showSurvey = function(PI) {

	var tour = PI.tour;

	if (tour.is_published &&
		tour.tour_settings.enableSentiment &&
		PI.completeEventTracked &&
		GmCXt.isLastStep(PI.currentStepId, PI.playStructure))
		return true;
	else if (!GmCXt.playerI && tour && tour.is_published && tour.tour_settings.enableSentiment) {
		return true;
	} else
		return false;
};

GmCXt.getOpacity = function(step) {

	var opacity = 0;
	var setting = step.step_settings;

	if (setting && GmCXt.isNumeric(setting.overlayOpacity)) {
		opacity = parseInt(setting.overlayOpacity);
	}
	return opacity;
};

GmCXt.recordGuideEvents = function() {
	var PI = GmCXt.playerI;

	if (!PI || PI.length === 0) return;

	if (GmCXt.isFirstNonAutomationStep()) PI.firstStepPlayed = true;

	var tour = PI.tour;

	if (!GmCXt.guidePlayTracker["tour:" + tour.tour_id]) {
		GmCXt.setGuidePlayTracker(tour.tour_id);
	}

	if (PI.completeEventTracked !== true &&
		PI.firstStepPlayed === true &&
		GmCXt.isLastStep(PI.currentStepId, PI.playStructure)
	) {
		PI.completeEventTracked = true;

		//Update Guide tracker
		var completionEventType = 'guide_complete';

		GmCXt.guidePlayTracker["tour:" + tour.tour_id][completionEventType] = 1;

		if (PI.linkedGuides) {
			PI.linkedGuides.forEach(function(tourId) {
				if (!GmCXt.guidePlayTracker["tour:" + tourId]) GmCXt.setGuidePlayTracker(tourId);

				if (GmCXt.guidePlayTracker["tour:" + tourId]) {
					GmCXt.guidePlayTracker["tour:" + tourId][completionEventType] = 1;
					GmCXt.guidePlayTracker["tour:" + tourId].play_instance_id = GmCXt.guidePlayTracker["tour:" + tour.tour_id].play_instance_id;
				}
			});
		}
	}

	if (PI.linkedGuides) {
		PI.linkedGuides.forEach(function(tourId) {
			if (GmCXt.guidePlayTracker["tour:" + tourId]) {
				GmCXt.guidePlayTracker["tour:" + tourId].play_instance_id = GmCXt.guidePlayTracker["tour:" + tour.tour_id].play_instance_id;
			}
		});
	}

	if (GmCXt.isLastStep(PI.currentStepId, PI.playStructure) && GmCXt.tourActivity['t:' + PI.tour.tour_id]) {
		delete GmCXt.tourActivity['t:' + PI.tour.tour_id];
		GmCXt.sendMessageToApp("mgPlayerJSTest2_action:update_tour_activity", {
			tourActivity: GmCXt.tourActivity
		});
	}
};

GmCXt.isClickInStepPopup = function(e) {
	if (mg$(e.target).parents('.mgPlayerJSTest2_preview-step-popup-container').length ||
		mg$(e.target).hasClass('mgPlayerJSTest2_image-popup') ||
		mg$(e.target).parents('.mgPlayerJSTest2_image-popup').length ||
		mg$(e.target).hasClass('mgPlayerJSTest2_icon-image-prev-button') ||
		mg$(e.target).parents('.mgPlayerJSTest2_icon-image-prev-button').length ||
		mg$(e.target).hasClass('mgPlayerJSTest2_image-step-prev') ||
		mg$(e.target).parents('.mgPlayerJSTest2_play-pause-toolbar').length ||
		mg$(e.target).hasClass('mgPlayerJSTest2_popup') ||
		mg$(e.target).parents('.mgPlayerJSTest2_popup').length ||
		mg$(e.target).hasClass('mgPlayerJSTest2_overlay-container')
	) {
		return true;
	} else {
		return false;
	}
};

GmCXt.isClickInSurveyPopup = function(e) {
	if (mg$(e.target).parents('.mgPlayerJSTest2_survey-popup-wrapper').length) {
		return true;
	} else {
		return false;
	}
};

GmCXt.getSingleVisibility = function(el) {

	if (mg$(el).css("display") === "none" || mg$(el).css("visibility") === "hidden" || !mg$(el).is(":visible")) {
		return false;
	} else {
		return true;
	}
};

GmCXt.getVisibilityTillParent = function(el) {

	if (!el || !GmCXt.getSingleVisibility(el)) return false;

	var visible = true;
	var all = mg$(el).add(mg$(el).parents());

	for (var i = 0; i < all.length; i++) {
		if (!GmCXt.getSingleVisibility(all[i])) {
			visible = false;
			break;
		}
	}
	return visible;
};

GmCXt.confirmTourClose = function(forceClose) {
	var pi = GmCXt.playerI;
	var ti = GmCXt.tourPlayerI;
	if (pi && ti) {
		if (pi.currentStepId && pi.playStructure &&
			GmCXt.getTail(pi.currentStepId, pi.playStructure) !== null &&
			GmCXt.isExitSurvey() && GmCXt.isPlayer()) {
			GmCXt.showExitSurvey();
		}
		ti.closeGuide(forceClose);
	}
};

GmCXt.requiredWidth = function() {
	if (mg$(window).width() > 550) return true;
	else return false;
};

GmCXt.getPopupHtml = function(msg, ok, cancel) {
	var popupType = 'mgPlayerJSTest2_popup-info';
	var html = " <wmgPlayerJSTest2_ class='mgPlayerJSTest2_overlay-container'></wmgPlayerJSTest2_>" +
		"<wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup " + popupType + "' id='mgPlayerJSTest2_popup-reload'>" +
		"   <div class='mgPlayerJSTest2_popup-header-wrapper'>" +
		"	   <div class='mgPlayerJSTest2_popup-header-icon-wrapper'><div class='mgPlayerJSTest2_popup-header-icon'></div></div>" +
		"   </div>" +
		" <wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-content-wrapper'>" + msg + "</wmgPlayerJSTest2_>" +
		" <wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-btn-wrapper'>" +
		"   <button title='" + ok + "' aria-label='" + ok + "' class='mgPlayerJSTest2_popup-ok-btn mgPlayerJSTest2_btn-default mgPlayerJSTest2_ok-btn mgPlayerJSTest2_text-overflow-ellipsis mgPlayerJSTest2_inline-block-vt mgPlayerJSTest2_lbl-btn'>" + ok + "</button>" +
		"   <button title='" + cancel + "' aria-label='" + cancel + "' class='mgPlayerJSTest2_popup-cancel-btn mgPlayerJSTest2_btn-default mgPlayerJSTest2_text-overflow-ellipsis mgPlayerJSTest2_inline-block-vt mgPlayerJSTest2_lbl-btn'>" + cancel + "</button>" +
		" </wmgPlayerJSTest2_>" +
		"</wmgPlayerJSTest2_>";
	return html;
};

GmCXt.getKeyShortPopupHtml = function(tourList) {
	var tourListStr = "";
	if (tourList && tourList.length) {
		for (var i = 0; i < tourList.length; i++) {
			tourListStr = tourListStr + "<wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-row-content-wrapper'><wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-colmn-content-wrapper mgPlayerJSTest2_col-lt' > " + tourList[i].tour_settings.keyboardKeyInput + " : </wmgPlayerJSTest2_>" +
				"<wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-colmn-content-wrapper mgPlayerJSTest2_col-rt' > " + tourList[i].tour_title + " </wmgPlayerJSTest2_></wmgPlayerJSTest2_>";
		}
	} else {
		tourListStr = "<wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-row-content-wrapper'><wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-colmn-content-wrapper' > No shortcuts available </wmgPlayerJSTest2_> " +
			"</wmgPlayerJSTest2_>";
	}


	var html = "<wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup mgPlayerJSTest2_popup-info mgPlayerJSTest2_popup-keyshort' id='mgPlayerJSTest2_popup-reload'>" +
		"   <wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-header-wrapper'>" +
		"	   <wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-keyshort-header-title'>Keyboard shortcuts</wmgPlayerJSTest2_>" +
		"	   <wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-keyshort-close'>" + GmCXt.label.close + "</wmgPlayerJSTest2_>" +
		"   </wmgPlayerJSTest2_>" +
		" <wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-content-wrapper'> " +
		" 	<wmgPlayerJSTest2_ class='mgPlayerJSTest2_popup-main-content-wrapper'>" +
		tourListStr +
		" 	</wmgPlayerJSTest2_>" +
		" </wmgPlayerJSTest2_>" +
		"</wmgPlayerJSTest2_>";
	return html;
};

GmCXt.stopPropagation = function(e) {
	e.stopImmediatePropagation();
};

GmCXt.addPopupEvents = function(onOK, onCancel, onClose) {

	mg$(".mgPlayerJSTest2_popup").on("mousedown", GmCXt.stopPropagation);
	mg$(".mgPlayerJSTest2_overlay-container").on("mousedown", GmCXt.stopPropagation);

	mg$(".mgPlayerJSTest2_popup-ok-btn").on("click", onOK);
	mg$(".mgPlayerJSTest2_popup-cancel-btn").on("click", onCancel);
	mg$(".mgPlayerJSTest2_popup-close-button").on("click", onClose);
	mg$(".mgPlayerJSTest2_popup-keyshort-close").on("click", onOK);
};

GmCXt.showPushOptions = function(opts) {

	var pub = {};

	pub.show = function() {

		GmCXt.isAutoNotifEnable = true;

		var msg = GmCXt.label.notifSnoozeDonotMsg;
		var ok = GmCXt.label.neverShowAgain;
		var cancel = GmCXt.label.watchLater;

		mg$("html").append(GmCXt.getPopupHtml(msg, ok, cancel));

		mg$(".mgPlayerJSTest2_popup-header-icon").html(GmCXt.svgs.popup_info);

		function closeGuide() {
			if (opts.slideshow) {
				GmCXt.sendMessageToApp('mgPlayerJSTest2_action:stop_slideshow');
				GmCXt.cleanPlayer();
			} else if (opts.isTour) {
				var pi = GmCXt.playerI;
				if (pi && GmCXt.isExitSurvey() &&
					GmCXt.isPlayer() && !GmCXt.isLastStep(pi.currentStepId, pi.playStructure)) {
					GmCXt.showExitSurvey();
				}

				opts.okClose();
			}
		}

		function onCancel(e) {
			GmCXt.stopPropagation(e);
			GmCXt.setSnoozedTour(opts.tour);
			closeGuide();
			pub.close();
		}

		function onClose(e) {
			GmCXt.stopPropagation(e);
			pub.close();
		}

		function onOK(e) {
			GmCXt.stopPropagation(e);
			GmCXt.setDoNotShowTours(opts.tour);
			closeGuide();
			pub.close();
		}

		GmCXt.addPopupEvents(onOK, onCancel, onClose);
	};

	pub.close = function() {
		GmCXt.unlockScroll();
		GmCXt.closePopup();
	};
	return pub;
};

GmCXt.closePopup = function() {
	mg$(".mgPlayerJSTest2_popup").remove();
	mg$(".mgPlayerJSTest2_overlay-container").remove();
};

GmCXt.showExitSurvey = function(opts) {

	var pi = GmCXt.playerI;
	GmCXt.unlockScroll();
	mg$(".mgPlayerJSTest2_popup").remove();
	GmCXt.getSurveyScreen(pi, true);
};

GmCXt.zoomImage = function(text, popClass) {

	if (text && text.indexOf("<img ") !== -1 && text.indexOf('src=""') === -1) {
		if (window.self === window.top) {
			GmCXt.setPopUpForImage(text, popClass);
		} else {
			GmCXt.setZoomImageFromIframe(text, popClass);
		}
	}
};

GmCXt.redirectLinkToBrowser = function(e) {
	var url = e.target.href;
	var shell = require('electron').shell;
	shell.openExternal(url);
};

GmCXt.setLinkGuidePlay = function(text, popClass) {
	mg$(popClass + ' a').each(function() {
		var t = mg$(this).attr('target');
		if (t === 'gssPlayGuide') {
			mg$(this).on("click", function(e) {
				var url = mg$(this).attr('href');
				url = url.split('?')[1];
				var tourId = GmCXt.getParameterValue('guideMe-tourId', url);
				var automation = GmCXt.getParameterValue('automation', url);

				if (tourId) {
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
					automation = automation === "true" ? true : false;
					var initiator = 'urlTour';
					if (automation) {
						initiator = 'doitforme';
					}

					if (GmCXt.tourPlayerI) {
						GmCXt.tourPlayerI.stop();
					}
					if (window.self === window.top) {
						GmCXt.getTourAndPlay(tourId, initiator);
					} else {
						var data = {
							tourId: tourId,
							initiator: initiator
						};
						GmCXt.sendMessageToParentWindow('mgPlayerJSTest2_action:play_guide_from_link', data);
					}
				}
			});
		}
	});
};

GmCXt.saveAppPresence = function(m) {

	m = GmCXt.convertMgdata(m);

	if (GmCXt.conf.appConfig.requireLogin && !GmCXt.isClientJs()) {
		GmCXt.storage().get(['login_state']).then(function(o) {
			if (o.login_state) {
				saveAndAcknowledge();
			}
		});
	} else {
		saveAndAcknowledge();
	}

	function saveAndAcknowledge() {

		GmCXt.myGuideApps[m.data] = true;

		// Send acknowledgement
		if (m.action === 'MyGuideReporting') {
			var message = {
				action: 'MyGuideReporting:Ack',
				data: GmCXt.getAppName()
			};

			GmCXt.log(63, 'Send acknowledgement of: ' + message.data);

			GmCXt.sendToParentWindow(message);
		}

		GmCXt.log(63, 'MyGuide apps found: ', GmCXt.myGuideApps);
	}
};

GmCXt.isLessThan = function(d, val) {
	if (d === undefined || d === null || d < val)
		return true;
	else
		return false;
};

GmCXt.isGreaterThan = function(d, val) {
	if (d === undefined || d === null || d > val)
		return true;
	else
		return false;
};

GmCXt.setSnoozedTours = function(tour, msg) {

	GmCXt.storage().get(['toursClosed', 'tourIdArray']).then(function(st) {

		GmCXt.showSnoozeMessage(msg, tour);

		var toursClosedByUser = GmCXt.parseJSON(st.toursClosed);

		if (GmCXt.getObjectSize(toursClosedByUser) === 0) toursClosedByUser = {};

		if (mg$.isArray(tour)) {
			tour.forEach(function(tour) {
				toursClosedByUser[tour.tour_id] = new Date().getTime() + ':' + parseInt(tour.version);
			});
		} else {
			toursClosedByUser[tour.tour_id] = new Date().getTime() + ':' + parseInt(tour.version);
		}

		GmCXt.storage()
			.set({
				'toursClosed': JSON.stringify(toursClosedByUser)
			});
		GmCXt.updNotifDataSidePanel(toursClosedByUser, st.tourIdArray);
	});
};

GmCXt.showSnoozeMessage = function(str, tour) {
	var t = GmCXt.getSleepTime(GmCXt.label);

	if (t !== '0 ' + GmCXt.label.hour) {
		var msg = str + t;
		GmCXt.toastMsg(msg).show();
	}
};

GmCXt.updNotifDataSidePanel = function(toursClosed, tourIdArray) {
	var data = {
		toursClosed: toursClosed,
		tourIdArray: ''
	};
	if (GmCXt.isAnonymousUser()) {
		data.tourIdArray = tourIdArray;
	}
	GmCXt.sendMessageToApp("mgPlayerJSTest2_action:update_notification_info", data);
};

GmCXt.updateNotification = function(tours) {
	GmCXt.storage().get(['toursClosed']).then(function(st) {
		var userSettings = GmCXt.user.settings || {};
		userSettings.viewed_guide_notifications = tours;
		
		if (GmCXt.isAnonymousUser()) {
			GmCXt.storage().set({
				'tourIdArray': tours
			});
		} else {
			GmCXt.updateUserProfileSettings(userSettings);
		}

		GmCXt.updNotifDataSidePanel(GmCXt.parseJSON(st.toursClosed), tours);
	});
};

GmCXt.setSnoozedTour = function(tour) {
	var msg = GmCXt.label.pushTourSnoozeMsg + ' ';
	GmCXt.setSnoozedTours(tour, msg);
};

GmCXt.isTourDisplayFrequencyReached = function(tour) {
	var retVal = false;
	var dispFreqGuides = GmCXt.user.settings.display_frequency_guides ? GmCXt.user.settings.display_frequency_guides : {};
	if (!GmCXt.isEmpty(dispFreqGuides)) {
		var countObj = dispFreqGuides[parseInt(tour.tour_id)];
		if (GmCXt.isDefined(countObj)) {
			if (parseInt(countObj.version) === parseInt(tour.version)) {
				if (tour.tour_settings.displayFrequencyTimes - countObj.playedCount <= 0) {
					return true;
				}
			}
		}
	}

	if (tour.tour_settings.displayFrequency && tour.tour_settings.displayFrequencyTimes === 1) {
		return true;
	}

	return retVal;
};

GmCXt.setDoNotShowTours = function(tour) {
	if (GmCXt.isTourDisplayFrequencyReached(tour)) {
		return;
	}
	GmCXt.getDoNotShowTours(false)
		.then(function(t) {
			doNotShowTours = t;
			doNotShowTours[tour.tour_id] = parseInt(tour.version);
			GmCXt.updateNotification(doNotShowTours);
		});
};

GmCXt.setDefaultStepSetting = function(data, prop, val) {
	if (!data.step_settings[prop] || data.step_settings[prop] === 'keepNext') {
		data.step_settings[prop] = val;
	}
};

GmCXt.getHostErrorId = function() {

	var errorIds = {
		'workday.com': ['#errorWidgetMessageCount'],
		'coupahost.com': ['#dynamic_errors', '#errorExplanation']
	};

	for (var host in errorIds) {
		if (errorIds.hasOwnProperty(host)) {
			if (GmCXt.isCurrentHost(host)) {
				return errorIds[host];
			}
		}
	}
	return [];
};

GmCXt.checkHostError = function(id) {
	var ids = GmCXt.getHostErrorId();

	for (var i = 0; i < ids.length; i++) {
		var id = ids[i];
		if (id && mg$(id).length > 0) {
			return true;
		}
	}

	return false;
};

GmCXt.checkForErrorOnScreen = function() {

	var err = false;

	if (GmCXt.checkHostError()) {

		err = true;
		GmCXt.log(33, "Error on screen.");

		var msg = GmCXt.label.hostJsError;
		GmCXt.toastMsgPersistent(msg).show();

	} else {
		GmCXt.toastMsgPersistent().hide();
	}

	return err;
};

GmCXt.isParentElementId = function(elem, id) {

	var el = mg$(elem);
	var all = el.add(el.parents());

	var retVal = all.filter(function() {
		return mg$(this).attr("id") === id;
	}).length > 0;

	return retVal;
};

GmCXt.setZoomImageFromIframe = function(desc, parentClassName) {
	GmCXt.initialiseImagePopUp();
	mg$(parentClassName + ' img').each(function() {
		mg$(parentClassName + ' img').on("click", function(e) {
			GmCXt.stopPropagation(e);
			GmCXt.openModalFromTopWindow(this.src);
		});
	});
};

GmCXt.initialiseImagePopUp = function() {
	GmCXt.sendMessageToParentWindow('mgPlayerJSTest2_action:initialize_image_iframe_popup', {});
};

GmCXt.openModalFromTopWindow = function(src) {
	var data = {};
	data.imageSrc = src;
	GmCXt.sendMessageToParentWindow('mgPlayerJSTest2_action:open_image_iframe_popup', data);
};

GmCXt.setImagePopUp = function() {
	mg$('#mgPlayerJSTest2_image_popup').remove();
	GmCXt.addImagePopHtml();
	var modal = document.getElementById('mgPlayerJSTest2_image_popup');

	if (modal) {
		modal.style.display = "none";
		modal.onclick = function(e) {
			GmCXt.stopPropagation(e);
		};
	}
	var closeBtn = document.getElementsByClassName("mgPlayerJSTest2_close-img-popup")[0];
	if (closeBtn) {
		closeBtn.onclick = function(e) {
			GmCXt.stopPropagation(e);
			modal.style.display = "none";
			mg$('.mgPlayerJSTest2_preview-step-popup-container').css({
				'z-index': '2147483647'
			});
		};
	}
};

GmCXt.openImagePopup = function(data) {
	var modal = document.getElementById('mgPlayerJSTest2_image_popup');
	var modalImg = document.getElementById("mgPlayerJSTest2_img_desc");
	modal.style.display = "block";
	modalImg.src = data.imageSrc;
};

GmCXt.addEventOnTooltip = function(req) {

	clearTimeout(GmCXt.tooltipTimeout);

	GmCXt.tooltipTimeout = GmCXt.timeout(function() {
		var el = mg$('#mgPlayerJSTest2_smarttip-' + req.step.step_id);

		el.off("click").on('click', function(e) {
			if (!req.isPreview) {
				GmCXt.tooltipAction(e, req.settings.smartTip, req.step);
			}
		});

	}, GmCXt.t.addTooltipEvent);
};

GmCXt.isEventToolTip = function(event, stepId) {
	var targetId = event.target.id;
	var cTargetId = event.currentTarget.id;
	var isSmartipEvent = false;

	switch (targetId) {
		case 'mgPlayerJSTest2_smarttip-icon-' + stepId:
			isSmartipEvent = true;
			break;
		case 'mgPlayerJSTest2_smarttip-' + stepId:
			isSmartipEvent = true;
			break;
		default:
	}

	switch (cTargetId) {
		case 'mgPlayerJSTest2_smarttip-icon-' + stepId:
			isSmartipEvent = true;
			break;
		case 'mgPlayerJSTest2_smarttip-' + stepId:
			isSmartipEvent = true;
			break;
		default:
			break;
	}

	if (mg$(event.currentTarget).hasClass("mgPlayerJSTest2_smarttip-icon-wrapper-" + stepId)) {
		isSmartipEvent = true;
	} else if (mg$(event.target).hasClass("mgPlayerJSTest2_smarttip-icon-wrapper-" + stepId)) {
		isSmartipEvent = true;
	}

	return isSmartipEvent;
};

GmCXt.tooltipAction = function(event, tooltip, step) {
	GmCXt.updateTooltipActionInfo(step.tour_id, step.step_id, tooltip, "click");

	if (!GmCXt.isEventToolTip(event, step.step_id)) {
		return;
	}

	if (tooltip.clickAction === 'openCurrentPage') {
		event.preventDefault();
		event.stopImmediatePropagation();
		if (window.self === window.top) {
			GmCXt.openAppPanel('currentPage');
		} else {
			GmCXt.sendMessageToParentWindow("mgPlayerJSTest2_action:open_app_panel");
		}

	} else if (tooltip.clickAction === 'openUrl') {
		event.preventDefault();
		event.stopImmediatePropagation();

		var url = tooltip.openUrlText;

		if (url.indexOf('http') !== 0) {
			url = 'https://' + url;
		}

		window.open(url, '_blank');
	} else if (tooltip.clickAction === 'sentiment' && GmCXt.checkInsightEnabled()) {
		event.preventDefault();
		event.stopImmediatePropagation();
		var data = {
			sentiment_code: tooltip.sentimentCode,
			tourId: step.tour_id,
			stepId: step.step_id
		};
		if (window.self === window.top) {
			GmCXt.sendMessageToApp("mgPlayerJSTest2_action:get_survey_detail_tooltip", data);
		} else {
			GmCXt.sendMessageToParentWindow("mgPlayerJSTest2_action:get_survey_data_from_sidepanel", data);
		}

	}
};

GmCXt.clearStepReqObj = function() {
	mg$("[gm_visited='true']").removeAttr('gm_visited');
	delete GmCXt.currentHe;
	delete GmCXt.stepReq;
	GmCXt.storage().remove(['stepReq']);
	if (GmCXt.fastSteps && GmCXt.fastSteps.length) {
		GmCXt.fastSteps = [];
		GmCXt.storage().remove(['gm_quick_steps']);
	}
};

GmCXt.isLastStepPlayed = function() {
	var flag = false;

	if (GmCXt.playerI && (GmCXt.playerI.currentStepId === GmCXt.playerI.lastPlayedStepId))
		flag = true;

	return flag;
};

GmCXt.getNextBtnElem = function() {
	var nxtBtn = document.getElementById("mgPlayerJSTest2_play_step_next");
	var doneBtn = document.getElementById("mgPlayerJSTest2_play_step_next_done");
	var nxtClassic = document.getElementById("mgPlayerJSTest2_play_step_next_classic");
	var doneClassic = document.getElementById("mgPlayerJSTest2_play_step_next_done_classic");
	var pauseBtn = document.getElementById("mgPlayerJSTest2_play_step_pause");
	var pauseClassic = document.getElementById("mgPlayerJSTest2_play_step_pause_classic");
	var btn;

	if (mg$(nxtBtn).is(':visible'))
		btn = nxtBtn;
	else if (mg$(doneBtn).is(':visible'))
		btn = doneBtn;
	else if (mg$(nxtClassic).is(':visible'))
		btn = nxtClassic;
	else if (mg$(doneClassic).is(':visible'))
		btn = doneClassic;
	else if (mg$(pauseBtn).is(':visible'))
		btn = nxtBtn;
	else if (mg$(pauseClassic).is(':visible'))
		btn = nxtBtn;

	return btn;
};

GmCXt.triggerClick = function(he, req) {
	if (!he) return;

	var d = {
		bubbles: true,
		cancelable: true
	};

	var clientRect = GmCXt.getBoundingRect(he);
	if (clientRect) {
		d.clientX = clientRect.x;
		d.clientY = clientRect.y;
	}

	he.focus();
	GmCXt.log(33, "Event trigger: mouseup");
	he.dispatchEvent(new MouseEvent('mouseup', d));
	if (req && req.data) {
		var s = req.data.settings;
	}

	he.dispatchEvent(new MouseEvent('mouseover', d));
	he.dispatchEvent(new MouseEvent('mousedown', d));

	var aTags = mg$(he).find('a');
	if (aTags.length > 0) {
		he = aTags[0];
	}

	GmCXt.log(33, "Event trigger: click");

	he.dispatchEvent(new MouseEvent('click', d));
};

GmCXt.markAutoLaunchTourDoNotShow = function(tour) {
	if (!tour.tour_settings.displayFrequency && GmCXt.firstStepAutoLaunch()) {
		GmCXt.setDoNotShowTours(tour);
	}
};

GmCXt.checkProceedToPlay = function(step, tour) {

	return new Promise(function(resolve, reject) {

		var stepSetting = step.step_settings;
		var stepRuleMatched = false,
			stepRuleExist = false;

		var tourSetting = tour.tour_settings;

		var guideRuleExist = (tourSetting.rules && tourSetting.rules.length);
		var checkRules = false;
		var isVariableExistInGuide = guideRuleExist && GmCXt.variableRuleExistInGuide(tourSetting.rules);

		var stepUrlHost = GmCXt.getDomain(step.step_url);
		var windowHost = GmCXt.getPageDomain();

		if (GmCXt.playerI) {
			checkRules = (GmCXt.playerI.initiator !== "beaconTour" && GmCXt.playerI.initiator !== "Current Page");
			GmCXt.log(33, 'Launched From ' + GmCXt.playerI.initiator);
		}

		function validate(step) {
			if (!step && isVariableExistInGuide) {
				GmCXt.timeout(function() {
					validateRules();
				}, GmCXt.t.checkVariable);
			} else {
				validateRules(step);
			}
		}

		if (stepSetting.rules && stepSetting.rules.length) {

			stepRuleExist = true;
			var oldRegEx = false;

			if (stepSetting.version) {
				oldRegEx = GmCXt.legacyWildChar(stepSetting.version);
			} else if (stepSetting.element && stepSetting.element.version) {
				oldRegEx = GmCXt.legacyWildChar(stepSetting.element.version);
			}

			stepRuleMatched = GmCXt.ruleEngine.evaluateRules(stepSetting.rules, oldRegEx);
		}

		if (stepRuleExist) {
			if (stepRuleMatched && stepSetting.hasElRule) {
				validate(true);
			} else {
				if (GmCXt.playerI) {
					GmCXt.playerI.stepRuleMatch = stepRuleMatched;
				}

				if (stepRuleMatched) {
					GmCXt.log(33, 'MATCHED step rules');
					resolve(true);
				} else {
					GmCXt.log(33, 'Step rules did not MATCH');
					if (GmCXt.playerI.testAutomation) {
						GmCXt.auto.fail(step, {
							errorMessage: 'Step Rules Not Matched.'
						});
					} else {
						resolve(false);
					}
				}
			}
		} else if (guideRuleExist && GmCXt.isFirstNonAutomationStep() && checkRules) {
			if (GmCXt.isAutomationRunning() && GmCXt.isAutomationStep(GmCXt.playerI.tour.steps[0])) {
				// During guide automation, guide rules are executed after all the guide level automation steps.
				// So element capturing for rule validation should be done after guide level automation steps.
				// Ignore any elements captured before it."
				GmCXt.domElStore = [];
			}
			validate();
		} else if (!GmCXt.playerI && guideRuleExist) {
			// Always validate rules for workflow tracking
			validate();
		} else if (!GmCXt.isFQDN() &&
			!guideRuleExist &&
			windowHost && windowHost !== stepUrlHost &&
			step.step_type !== 'video' && step.step_type !== 'image' && step.step_type !== 'guide' && step.step_type !== GmCXt.STEP_TYPE_WEB_INLINE) {

			resolve(false);
		} else {
			resolve(true);
		}

		function onResult(result) {
			var status = result.valid ? true : false;

			var log = 'MATCHED? [' + status + '] guide rules on first step ' + GmCXt.stepLog(step.step_id, tour.tour_title);

			GmCXt.log(33, log);
			GmCXt.log(27, log);

			if (GmCXt.playerI) {
				GmCXt.playerI.guideRuleMatch = status;
			}

			if (GmCXt.isAutomationRunning()) {
				if (status === false) {
					GmCXt.auto.fail(step, {
						errorMessage: 'Guide Rules Not Matched.'
					});
				} else {
					resolve(status);
				}
			} else {
				resolve(status);
			}
		}

		function onStepElRuleCheck(result) {
			var status = result.valid ? true : false;

			var log = 'MATCHED? [' + status + '] step rules ' + GmCXt.stepLog(step.step_id, tour.tour_title);

			GmCXt.log(33, log);
			GmCXt.log(27, log);

			if (GmCXt.playerI) {
				GmCXt.playerI.stepRuleMatch = status;
			}

			resolve(status);
		}

		function validateRules(step) {
			var waitTime = tourSetting.ruleDelayTime || 0;
			var timeout = GmCXt.t.ruleTimeOut25ms;
			if (GmCXt.checkTourCreatedBefore(tourSetting, 2021013001)) {
				timeout = GmCXt.t.ruleTimeOut10s;
			}
			var obj = {
				rules: tourSetting.rules,
				tour: tour,
				timeoutVal: timeout,
				timeout: timeout,
				cb: onResult,
				isTour: true,
				initiator: 'tourPlay'
			};

			if (step) {
				waitTime = stepSetting.stepDelayTime || 0;
				obj.rules = stepSetting.rules;
				obj.cb = onStepElRuleCheck;
			}

			GmCXt.timeout(function() {
				GmCXt.ruleEngine.queue(obj);
			}, waitTime);
		}
	});
};

GmCXt.setPanelTopLeft = function(isClose) {
	if (GmCXt.isMicroPlayer() || GmCXt.isWBMicroPlayer()) {
		mg$(".mgPlayerJSTest2_panel").css("left", "initial");
		mg$(".mgPlayerJSTest2_panel").css("top", "50%");
		if (GmCXt.APP_PANEL_OPEN) {
			mg$(".mgPlayerJSTest2_panel").css("right", "50px");
		}
	} else {
		mg$(".mgPlayerJSTest2_panel").css("left", "initial");
		mg$(".mgPlayerJSTest2_panel").css("top", "0");
		if (GmCXt.APP_PANEL_OPEN) {
			var alignment = GmCXt.getWidgetAlignment();
			mg$(".mgPlayerJSTest2_panel").css(alignment, "0");
		}
	}
};

GmCXt.myGuideLogout = function() {
	GmCXt.sendMessageToApp('mgPlayerJSTest2_action:logout_user');
};

GmCXt.reloadElectronApp = function() {
	require('electron').remote.getCurrentWindow().reload();
};

GmCXt.getContainerOffSet = function(container) {
	var d;

	if (container.length > 0) {

		d = container.offset();

		if (d !== undefined) {

			if (d.top < 0) d.top = 0;

			if (d.left < 0) d.left = 0;
		}

		d.width = parseInt(container.width());
		d.height = parseInt(container.height());
	} else {
		d = {
			top: 0,
			left: 0,
			width: mg$(document).width(),
			height: mg$(document).height()
		};
	}

	return d;
};

GmCXt.removeScreenOverlay = function() {
	GmCXt.screenOverlayI = undefined;
	mg$('.mgPlayerJSTest2_screen-blackout').hide();
	mg$('.mgPlayerJSTest2_screen-blackout').html('');
};

GmCXt.getWidgetInstance = function() {
	return mg$('.mgPlayerJSTest2_start-button');
};

GmCXt.getChatIconInstance = function() {
	return mg$('#mgPlayerJSTest2_btn-chat-button');
};

GmCXt.hideWidgetIcon = function() {
	GmCXt.log(8, "HIDE WIDGET");

	var widget = GmCXt.getWidgetInstance();
	if (widget.length) {
		widget.hide();
	}
};

GmCXt.getTaskListVisibility = function() {
	if (GmCXt.isTrue(GmCXt.APP_PANEL_OPEN) || !GmCXt.checkPrecedence()) {
		return false;
	}

	if (GmCXt.user && GmCXt.isPlayer() && GmCXt.taskListCount > 0) {
		return true;
	}
	return false;
};

GmCXt.imageSizeStyle = function(selector) {
	var len = mg$(selector).length;

	if (len) {
		for (var i = 0; i < len; i++) {
			var imgW = mg$(selector)[i].getAttribute('width');
			var imgH = mg$(selector)[i].getAttribute('height');

			mg$(selector)[i].style.setProperty('width', imgW + 'px', 'important');
			mg$(selector)[i].style.setProperty('height', imgH + 'px', 'important');
		}
	}
};

GmCXt.updateGuideDisplayFrequency = function(tours) {

	GmCXt.user.settings.display_frequency_guides = tours;
	GmCXt.updateUserProfileSettings(GmCXt.user.settings);
};

function markBeaconDisplayFrequency(tour) {

	if (tour) {
		var beaconGuides = {};
		if (GmCXt.isDefined(GmCXt.user.settings.display_frequency_beacons)) {
			beaconGuides = GmCXt.createDeepCopy(GmCXt.user.settings.display_frequency_beacons);
		}

		if (beaconGuides[tour.tour_id] && parseInt(tour.version) === parseInt(beaconGuides[tour.tour_id].version)) {
			beaconGuides[tour.tour_id].playedCount++;
		} else {
			beaconGuides[tour.tour_id] = {};
			beaconGuides[tour.tour_id].version = parseInt(tour.version);
			beaconGuides[tour.tour_id].playedCount = 1;
		}

		GmCXt.user.settings.display_frequency_beacons = beaconGuides;
		GmCXt.updateUserProfileSettings(GmCXt.user.settings);
	}
}

GmCXt.setBeaconsDisplayFrequency = function(tourId) {
	for (var i = 0; i < GmCXt.beaconTours.length; i++) {
		if (parseInt(GmCXt.beaconTours[i].tour_id) === parseInt(tourId)) {
			var beacSett = GmCXt.beaconTours[i].tour_settings.beacon;
			if (beacSett.displayFrequency) {
				markBeaconDisplayFrequency(GmCXt.beaconTours[i]);
			}
			break;
		}
	}
};

GmCXt.updateSurveyCompletedData = function(data) {
	GmCXt.storage().get(['surveyCompleted']).then(function(st) {
		var userSettings = GmCXt.user.settings || {};
		if (GmCXt.isAnonymousUser()) {
			st.surveyCompleted[data.tourId] = parseInt(data.version);
			GmCXt.storage().set({
				'surveyCompleted': st.surveyCompleted
			});
		} else {
			userSettings.surveyCompleted = userSettings.surveyCompleted || {};
			userSettings.surveyCompleted[data.tourId] = parseInt(data.version);
			GmCXt.updateUserProfileSettings(userSettings);
		}
	});
};

GmCXt.resetMplayerPos = function() {
	mg$('.mgPlayerJSTest2_panel').removeAttr("style");
	mg$('.mgPlayerJSTest2_panel').css({
		'left': 'initial',
		'top': '50%',
		'right': '50px'
	});
};

GmCXt.isMyGuideEl = function(el) {

	if (el.nodeName.toLowerCase() === 'wmgPlayerJSTest2_over' ||
		mg$(el).closest('wmgPlayerJSTest2_').length > 0 ||
		(el.name && el.name.includes('guideme-iframe')) ||
		(typeof el.className === 'string' && (el.className.indexOf("mgPlayerJSTest2_") === 0 || el.className.indexOf(" mgPlayerJSTest2_") > 0)) ||
		(el.id && el.id.indexOf("mgPlayerJSTest2_beacon-icon-") === 0)
	) {
		return true;
	}
	return false;
};

GmCXt.playerDomainCheck = function() {
	if (GmCXt.isPlayer()) {
		if (GmCXt.isDomainInActiveApp() || GmCXt.user.signedInWithSso) {
			return true;
		} else {
			return false;
		}
	}
	return true;
};
GmCXt.lastUserAction = 0;
GmCXt.iframeCount = 0;
GmCXt.prevEnv = [];
GmCXt.storagePrefix = GmCXt.conf.appName + "_";
GmCXt.ruleOpsUILabels = {};

GmCXt.timeout = function(fn, t) {
	return setTimeout(fn, t);
};

GmCXt.trackerUtil = {
	guidePayload: [],
	trackPI: false,
	enableTracking: false,
	ePayload: {},
	ttPayload: {},
	page_url: "",
	featureTracking: false,
	pageTracking: false
};
GmCXt.guidePlayTracker = {};

GmCXt.STEP_TYPE_INLINE = 'inline';
GmCXt.STEP_TYPE_WEB_INLINE = 'web_inline';
GmCXt.STEP_TYPE_MESSAGE = 'message';
GmCXt.STEP_TYPE_IMAGE = 'image';
GmCXt.STEP_BEACON_TYPE = 'BEACON';
GmCXt.STEP_TYPE_EXTERNAL_AUTOMATION = 'external_automation_step';
GmCXt.CAPTURE_SCREEN_STEP = 'capture-screen-step';
GmCXt.UPLOAD_IMAGE_STEP = 'upload-image-step';
GmCXt.STEP_TYPE_VIDEO = 'video';
GmCXt.STEP_TYPE_SMART_TIP = 'smartTip';
GmCXt.STEP_TYPE_AUTOMATION = 'automation';

GmCXt.STEP_TYPE_GUIDE = 'guide';
GmCXt.STEP_TYPE_BRANCH = 'branch';
GmCXt.STEP_TYPE_SURVEY = 'survey';
GmCXt.ANALYTICS_EVENT_CHAIN_ID = '';
GmCXt.INSIGHTS_EVENT_CHAIN_ID = '';
GmCXt.STEP_TEXT_SLIDE_TYPE = 'textSlide';
GmCXt.STEP_TYPE_ERROR_HANDLER = 'errorHandler';
GmCXt.isLogoutTrackApi = false;


GmCXt.STEP_TYPE_TAG = 'tag';

GmCXt.t_ = {
	hr1: 60 * 60 * 1000,
	hr8: 8 * 60 * 60 * 1000,
	hr24: 24 * 60 * 60 * 1000,
	hr24inSec: 24 * 60 * 60,
	hr12inSec: 12 * 60 * 60,
	min30: 30 * 60 * 1000,
	min15: 15 * 60 * 1000,
	min10_s: 10 * 60,
	min5_s: 5 * 60,
	min5: 300000,
	min4: 240000,
	min2_s: 2 * 60,
	min1_s: 60,
	min1: 60000,
	sec15: 15000,
	sec10: 10000,
	sec5: 5000,
	sec4: 4000,
	sec3: 3000,
	sec2: 2000,
	sec1: 1000,
	ms25: 2500,
	ms15: 1500,
	ms8: 800,
	ms5: 500,
	ms3: 300,
	ms2: 200,
	ms1: 100
};
GmCXt.t = {
	sync24: GmCXt.t_.hr24,
	notifExp24: GmCXt.t_.hr24,
	syncSegment: GmCXt.t_.hr24,
	tracking24hr: GmCXt.t_.hr24inSec,
	tracking12hr: GmCXt.t_.hr12inSec,
	tracking8hr: GmCXt.t_.hr8,

	cdnExp: GmCXt.t_.hr1,
	openSso: GmCXt.t_.hr1,
	snoozeNotif: GmCXt.t_.hr1,
	refreshBrandLogo: GmCXt.t_.hr1,
	refreshWidget: GmCXt.t_.hr1,

	pageTrackWait: GmCXt.t_.min30,

	workflowIdle: GmCXt.t_.min15,
	workflowSync: GmCXt.t_.min15,
	clickSync: GmCXt.t_.min15,

	playerSync: GmCXt.t_.min5_s,

	fileStackExp: GmCXt.t_.min5,
	elLookupTime5m: GmCXt.t_.min5,
	autoRelogin: GmCXt.t_.min5,

	autoWaitTime: GmCXt.t_.min4,
	createStepTimeout: GmCXt.t_.min4,

	trackerSync: GmCXt.t_.min2_s,

	creatorSync: GmCXt.t_.min1_s,
	trackerInt: GmCXt.t_.min1,
	autoEndTime: GmCXt.t_.min1,

	trackerInt2: GmCXt.t_.sec15,
	highlighterDefautWT: GmCXt.t_.sec15,
	tooltipTimeout: GmCXt.t_.sec15,
	elLookupTime15s: GmCXt.t_.sec15,
	elLookupTime10s: GmCXt.t_.sec10,
	stepMTimeout: GmCXt.t_.sec15,

	waitForNotifications: GmCXt.t_.sec10,
	guideAutoWatch: GmCXt.t_.sec10,
	ruleTimeOut10s: GmCXt.t_.sec10,
	stepITimeout: GmCXt.t_.sec10,
	findElTimeout: GmCXt.t_.sec10,
	branchDecision_domRule: GmCXt.t_.sec10,
	branchDecision_domRule_quickBranch: GmCXt.t_.sec4,

	branchDecision: GmCXt.t_.sec2,
	branchDecision_errorHandler: GmCXt.t_.sec1,
	stepComplition: GmCXt.t_.sec4,

	drag: GmCXt.t_.sec2,
	checkVariable: GmCXt.t_.sec2,
	loginEdCast: GmCXt.t_.sec2,

	branchDecisionInterval_domRule: GmCXt.t_.sec1,
	plsWaitMsg: GmCXt.t_.sec1,
	stopRecorder: GmCXt.t_.sec1,

	toastMsg: GmCXt.t_.ms25,
	variableTimeout: GmCXt.t_.ms25,
	ruleTimeOut25ms: GmCXt.t_.ms25,

	eventGuideCompleteAuto: GmCXt.t_.ms15,
	tragetFrameWT: GmCXt.t_.ms15,
	ruleTimeOut15ms: GmCXt.t_.ms15,
	currentPageSpinner: GmCXt.t_.ms15,
	bgmsg: GmCXt.t_.ms15,

	screenrecording: GmCXt.t_.ms8,

	branchDecisionInterval: GmCXt.t_.ms5,
	msgToframes: GmCXt.t_.ms5,
	desktopCapture: GmCXt.t_.ms5,

	appPanel: GmCXt.t_.ms3,
	hiteTooltip: GmCXt.t_.ms2,
	addTooltipEvent: GmCXt.t_.ms1
};

GmCXt._location = function() {
	return window && window.location;
};

GmCXt.isWestpacOneUI = function() {
	if (window &&
		window.location &&
		window.location.href.indexOf('about:blank') !== -1 &&
		parent.window &&
		parent.window.location &&
		parent.window.location.href.indexOf('ui.westpac.com.au') !== -1) {
		return true;
	} else {
		return false;
	}
};

GmCXt.parseJSON__ = function(str) {
	try {
		if (typeof str === 'object') {
			return str;
		} else if (str === '' || str === 'AS' ||
			str === 'na' || str === '[object Object]' ||
			str === undefined || str === 'undefined'
		) {
			return {};
		} else {
			var ob = JSON.parse(str);
			if (typeof ob === 'string') ob = JSON.parse(ob);

			return ob;
		}

	} catch (e) {
		return null;
	}
};

GmCXt.isEmpty = function(val) {
	if (typeof val === "boolean" || typeof val === "number") return false; // for 'false' & zero

	if (!val) return true;

	if (typeof val === "object" && val.constructor === Object) return Object.keys(val).length ? false : true;

	if (typeof val === "object" && val.constructor === Array) return val.length ? false : true;

	if (typeof val === 'string' && !val.trim()) return true;

	return false;
};

GmCXt.isDefined = function(val) {
	if (val === undefined || val === "undefined")
		return false;
	else
		return true;
};

GmCXt.updateGlobalUser = function(user) {
	if (!user) {
		return;
	}

	if (!GmCXt.isBackgroundPage) {
		GmCXt.user = GmCXt.validateDataModel(user, GmCXt.model.user);
	} else {
		GmCXt.user = user;
	}
	if (user.organization) {
		GmCXt.updateGlobalOrg(user.organization);
	}
};

GmCXt.updateGlobalOrg = function(org) {
	if (!org) {
		return;
	}

	if (!GmCXt.isBackgroundPage) {
		GmCXt.organization = GmCXt.validateDataModel(org, GmCXt.model.organization);
	} else {
		GmCXt.organization = org;
	}
	delete GmCXt.organization.applications;
};

GmCXt.playerIntervalValidator = function(boxUrl) {

	GmCXt.log(70, "GET TIMESTAMP at " + new Date());

	GmCXt.getJsonTimeStamp(boxUrl).then(function(r) {
		var lastRefresh = r.last_updated_time;

		GmCXt.log(70, "LAST REFRESH from server " + lastRefresh);

		if (lastRefresh != GmCXt.refreshTime ) {
			GmCXt.log(70, "START PLAYER DATA REFRESH");

			GmCXt.msgToApp('mgPlayerJSTest2_action:refresh_player', r, senderTabId);
		} else {
			GmCXt.msgToApp('mgPlayerJSTest2_action:update_timestamp_sync_time', r, senderTabId);
			GmCXt.log(70, "NO UPDATE FOUND " + new Date());
		}

		GmCXt.refreshTime = r.last_updated_time;
		GmCXt.lastTimeStampSync = GmCXt.getCurrentTimeInSec();
	});
};
GmCXt.creatorIntervalValidator = function(boxUrl) {

	GmCXt.log(70, "GET TIMESTAMP at " + new Date());

	GmCXt.getModifiedObjects().then(function(updates) {
		if (updates.length) {
			GmCXt.msgToApp('mgPlayerJSTest2_action:creator_updates', {
				updates: updates,
				refreshTime: GmCXt.creatorRefreshTime
			}, senderTabId);
		}
	}).catch(function(err) {
		GmCXt.log(1, "ERROR: Creator sync failed", err);
	});
};

GmCXt.processLastActionTime = function(boxUrl) {

	var cTime = GmCXt.getCurrentTimeInSec();

	var jsonURL = GmCXt.onPrem() ? boxUrl || GmCXt.getOnPremJsonURL() : '';

	if (GmCXt.inPlayer && (cTime - GmCXt.lastTimeStampSync) > GmCXt.t.playerSync) {
		GmCXt.log(70, "TRIGGER PLAYER UPDATE " + new Date());
		GmCXt.playerIntervalValidator(jsonURL);
	}

	if (GmCXt.isEnt() && (cTime - GmCXt.creatorRefreshTime) > GmCXt.t.creatorSync) {
		GmCXt.log(70, "TRIGGER CREATOR UPDATE " + new Date());
		GmCXt.creatorIntervalValidator(jsonURL);
	}

	GmCXt.log(45, "SEND Traker event " + new Date());
	GmCXt.trackerV1.sendEvents();

	GmCXt.log(70, "LAST USER ACTION TIME: " + new Date());
};

GmCXt.startCreatorUpdateInterval = function() {

	var callSync = function() {
		GmCXt.getModifiedObjects().then(function(updates) {
			if (updates.length) {
				GmCXt.msgToApp('mgPlayerJSTest2_action:creator_updates', {
					updates: updates,
					refreshTime: GmCXt.creatorRefreshTime
				}, senderTabId);
			}
		}).catch(function(err) {
			GmCXt.log(1, "ERROR: Creator sync failed", err);
		});
	};

	GmCXt.creatorRefreshTime = GmCXt.refreshTime || GmCXt.getCurrentTimeInSec();

	if (GmCXt.creatorInterval) {
		return;
	}

	GmCXt.creatorInterval = setInterval(callSync, GmCXt.t.creatorSync);
};

GmCXt.sendMessageToApp = function(type, data) {
	data = data || {};
	data.config = GmCXt.conf;
	if (GmCXt.playerI) {
		data.playerInstance = GmCXt.playerI;
	}
	if ((GmCXt.initialization && GmCXt.initialization.sidePanel === true) ||
		type.indexOf('receive_lxp_storage') > -1) {

		GmCXt.sendMessageToAppIn(type, data);
	} else {
		GmCXt.timeout(function() {
			GmCXt.sendMessageToApp(type, data);
		}, GmCXt.t_.sec1);
	}
};

GmCXt.sendMessageToAppIn = function(type, data) {
	var appWindow = mg$(".mgPlayerJSTest2_app");
	if (appWindow.length) {
		var message = {
			action: type,
			data: data
		};
		message = GmCXt.formatMsg(message);
		appWindow.get(0).contentWindow.postMessage(message, "*");
	}
};

GmCXt.msgToApp = function(action, data, tabId) {
	if (GmCXt.isBackgroundPage === true) {
		GmCXt.sendMessageToPanel(action, data, tabId);

	} else if (GmCXt.isSidePanelApp) {
		var m = {
			action: action,
			data: data
		};
		GmCXt.msgToThisWin(m);
	} else if (window.top === window.self) {
		GmCXt.sendMessageToApp(action, data);
	} else if (GmCXt.isStepFrame) {
		var message = {
			action: action,
			data: data
		};
		GmCXt.sendToParentWindow(message);
	} 
};

GmCXt.sendMessageToPanel = function(action, data, senderTabId) {

	data = (data === undefined || data === null || !data) ? {} : data;

	var ob = {
		action: action,
		data: data
	};

	chrome.tabs.query({
		active: true,
		highlighted: true
	}, function(tabs) {
		var activeTab = false;
		for (var i = 0; i < tabs.length; i++) {
			var tab = tabs[i];
			if (tab.id === senderTabId) {
				activeTab = true;
			}
		}

		// This below condition to send an message to source tab even it is not highlighted
		// This will solve image loader issue in case of create/update steps
		if (!activeTab && senderTabId) {
			GmCXt.msgToTab(senderTabId, ob);
		}

		if (GmCXt.FT.creatorApp && tabs.length && !activeTab) {
			var tab = tabs[0];
			senderTabId = tab.id;
			GmCXt.updateVideoUploadStatus(senderTabId, {
				data: {
					operation: "get"
				}
			});
		}

		if (GmCXt.FT.isPlayer && tabs.length && !activeTab) {
			var tab = tabs[0];
			senderTabId = tab.id;
		}

		GmCXt.msgToTab(senderTabId, ob);
	});
};

GmCXt.getCdnSignature = function(sendMessage) {

	if (GmCXt.waitForCdnSignature) return true;

	GmCXt.waitForCdnSignature = true;

	if (sendMessage) {

		GmCXt.msgToApp('mgPlayerJSTest2_action:get_cdn_signature_from_app');

	} else { //this is used in Background.js for player and cretor sync
		GmCXt.callGetCdnSignature({
			organization_id: GmCXt.organization.organization_id
		}).then(function(response) {

			var r = response.data;
			if (r && r.cdn_signature && r.cdn_signature_expiry) {

				if (GmCXt.user) {
					GmCXt.user.cdn_signature = r.cdn_signature;
					GmCXt.user.cdn_signature_expiry = r.cdn_signature_expiry;
				}
			}
		});
	}
};

GmCXt.getCurrentTimeInMilSec = function() {
	return new Date().getTime();
};

GmCXt.getCurrentTimeInSec = function() {
	return Math.floor(new Date().getTime() / 1000);
};

GmCXt.getModifiedObjects = function(boxUrl) {

	return new Promise(function(resolve, reject) {
		var timestamp = GmCXt.creatorRefreshTime;
		var apiUrl = GmCXt.conf.webServiceUrl + 'organization/modified/objects?';
		GmCXt.log(61, "Check for updates. From timestamp: " + timestamp);

		var data = {
			timestamp: timestamp,
			organization_id: GmCXt.organization.organization_id
		};

		var headers = {
			'AppKey': GmCXt.conf.apiSecrret,
			'accesstoken': GmCXt.user.accesstoken,
			'Content-Type': 'application/json'
		};

		GmCXt.creatorRefreshTime = GmCXt.getCurrentTimeInSec();

		fetch(apiUrl + new URLSearchParams(data), {
			headers: headers
		}).then(function(response) {

			if (response.status === 200) {

				response.json()
					.then(function(result) {

						if (result.error) {

							GmCXt.creatorRefreshTime = timestamp;

							if (result.code === 1003 || result.code === 2004) {
								GmCXt.msgToApp('mgPlayerJSTest2_action:logout_user');
							} else if (result.code === 1007) {
								GmCXt.getAccessToken().then(function(r) {
									GmCXt.saveToken(r);
								});
							}
							reject(result);
						} else if (result.data && result.data.objects) {
							var updates = result.data.objects;
							resolve(updates);
						} else {
							reject();
						}
					}).catch(function(error) {
						reject();
					});

			} else {
				reject();
			}
		}).catch(function(e) {
			GmCXt.log(1, "Creator could not refresh", e);
		});
	});
};

GmCXt.getJsonTimeStamp = function(boxUrl) {

	return new Promise(function(resolve, reject) {

		var apiCall = function(url) {

			fetch(url)
				.then(function(response) {

					if (response.status === 200) {
						response.json()
							.then(function(d) {
								resolve(d);
							}).catch(function(error) {
								GmCXt.log(1, "ERROR: Timestamp fetch failed", error);
							});
					} else {
						GmCXt.log(1, "ERROR: Timestamp fetch failed" + response.status);
						GmCXt.waitForCdnSignature = false;
						GmCXt.getCdnSignature();
					}
				});
		};

		var apiUrl = "";

		if (GmCXt.onPrem()) {
			apiUrl = boxUrl + '/json/timestamp.json';
		} else if (GmCXt.organization && !GmCXt.isEmpty(GmCXt.organization)) {
			apiUrl = GmCXt.conf.cdnStorage + GmCXt.organization.bucket +
				'/json/timestamp.json' + GmCXt.user.cdn_signature;
		}

		if (!GmCXt.isEmpty(apiUrl)) apiCall(apiUrl);
	});
};

GmCXt.encode = function(args) {
	var data = '';
	if (args) {
		var argcount = 0;
		for (var key in args) {
			if (args.hasOwnProperty(key)) {
				if (argcount++) data += '&';
				data += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
			}
		}
	}
	return data;
};

GmCXt.getOrgKeyFromJwToken = function(myGuideOrgKey) {
	try {

		var splitMyguideKey = myGuideOrgKey.split('.')[1];
		var jwJson = atob(splitMyguideKey);
		var jwOrgKey = jwJson ? GmCXt.parseJSON(jwJson).org_key : "";
		return jwOrgKey;

	} catch (e) {
		return {};
	}
};

GmCXt.parseJSON = function(str) {
	try {
		if (typeof str === 'object') {
			return str;
		} else if (str === '' || str === 'AS' ||
			str === 'na' || str === '[object Object]' ||
			str === undefined || str === 'undefined'
		) {
			return {};
		} else {
			return JSON.parse(str);
		}

	} catch (e) {
		return {};
	}
};

GmCXt.sendMessageToTabs = function(data) {
	chrome.tabs.query({}, function(tabs) {
		tabs.forEach(function(tab) {
			GmCXt.msgToTab(tab.id, data);
		});
	});
};

GmCXt.msgToTab = function(tabId, m) {
	chrome.tabs.sendMessage(tabId, GmCXt.formatMsg(m));
};

GmCXt.formatMsg = function(message) {

	if ((GmCXt.isWestpac() && message.action.indexOf("MyGuideReporting") !== -1)) {
		return message;
	}

	if (message.data) {
		message.mgdata = message.data;
		delete message.data;
	}
	return JSON.stringify(message);
};

GmCXt.getStepFromSteps = function(stepId, steps) {

	var s = false;
	if (stepId) {
		for (var i = 0; i < steps.length; i++) {
			if (parseInt(steps[i].step_id) === parseInt(stepId)) {
				s = steps[i];
				break;
			}
		}
	}
	return s;
};

GmCXt.getStartpointStepFromSteps = function(stepId, steps) {
	var s = false;
	if (stepId) {
		for (var i = 0; i < steps.length; i++) {
			if (parseInt(steps[i].step_id) === parseInt(stepId) && steps[i].step_settings.startPoint) {
				s = steps[i];
				break;
			}
		}
	}
	return s;
};

GmCXt.removePSStepId = function(stepId, PS, index) {
	for (var i = 0; i < PS.length; i++) {
		if (PS[i].tail === stepId) {
			PS[i].tail = PS[index].tail;
			break;
		}
	}
	PS.splice(index, 1);
	return PS;
};

GmCXt.repairPlayStructure = function(PS, steps) {

	for (var i = 0; i < PS.length; i++) {
		var step = GmCXt.getStepFromSteps(PS[i].id, steps);
		if (step) {
			continue;
		} else {
			PS = GmCXt.removePSStepId(PS[i].id, PS, i);
			PS = GmCXt.repairPlayStructure(PS, steps);
			break;
		}
	}

	return PS;
};

GmCXt.isAutomationRunning = function() {
	return (GmCXt.auto && GmCXt.auto.isAutomationRunning());
};

GmCXt.getAutomatedCurrentTour = function() {
	return (GmCXt.auto && GmCXt.auto.getAutomatedCurrentTour());
};

GmCXt.isAutomationStepRunning = function() {
	if (GmCXt.playerI) {
		var step = GmCXt.getStepFromPlayerI(GmCXt.playerI.currentStepId);
		return GmCXt.isAutomationStep(step);
	}
	return false;
};

GmCXt.callApi = function(data, api) {

	return new Promise(function(resolve, reject) {

		var mid = 'id' + Math.random();

		function sendResponse(m) {

			if (m && m.action === 'mgPlayerJSTest2_action:call_api_response') {

				if (m.data && m.data.id === mid) {
					window.removeEventListener('message', winListener);
					window.removeEventListener('message', chromeListener);
					resolve(m.data.items);
				}
			}
		}

		function winListener(event) {
			var message = GmCXt.parseMsg(event);
			message = GmCXt.convertMgdata(message);

			sendResponse(message);
		}

		function chromeListener(event) {
			var message = GmCXt.parseJSON(event);
			message = GmCXt.convertMgdata(message);

			sendResponse(message);

			return true;
		}

		var d = {
			id: mid,
			option: data,
			api: api
		};

		if (GmCXt.isBackgroundPage === true) {
			chrome.runtime.onMessage.addListener(chromeListener);
			GmCXt.sendMessageToPanel('mgPlayerJSTest2_action:call_api', d, senderTabId);

		} else if (GmCXt.isSidePanelApp) {
			GmCXt.msgToThisWin({
				action: 'mgPlayerJSTest2_action:call_api',
				data: d
			});
		} else {
			window.addEventListener('message', winListener);
			GmCXt.sendMessageToApp('mgPlayerJSTest2_action:call_api', d);
		}
	});
};

GmCXt.cdnPlayer = GmCXt.conf.provider === 'Cdn';
GmCXt.apiPlayer = GmCXt.conf.provider === 'playerApi';
GmCXt.inPlayer = GmCXt.apiPlayer || GmCXt.cdnPlayer;

GmCXt.convertMgdata = function(m) {
	if (m.action && m.action.indexOf("init_sfdc_env") !== -1) {
		return m;
	} else if (GmCXt.isWestpac() && m.action && m.action.indexOf("MyGuideReporting") !== -1) {
		return m;
	}
	m.data = m.mgdata;
	return m;
};

GmCXt.inArray = function(id, array) {
	if (array.indexOf(parseInt(id)) !== -1) return true;
	else return false;
};

GmCXt.inArrayString = function(str, array) {
	if (array.indexOf(str) !== -1) return true;
	else return false;
};

GmCXt.createDeepCopy = function(data) {
	if (GmCXt.isDefined(data) && !GmCXt.isEmpty(data)) {
		return JSON.parse(JSON.stringify(data));
	}
};

GmCXt.getBrowserUrl = function(i) {

	var url = '';

	if (GmCXt.browserApp === 'Safari') {
		url = safari.extension.baseURI + i;
	} else if (GmCXt.browserApp === 'firefox' || GmCXt.isClientJs()) {
		url = chrome.extension.getURL(i);
	} else {
		url = chrome.runtime.getURL(i);
	}

	return url;
};

GmCXt.getAccessToken = function() {
	var params = {
		url: "user/token?",
		headers: {
			"Content-Type": "application/json",
			RefreshToken: GmCXt.user.refreshtoken
		},
		data: {
			force_update: true,
			mg_source_name: GmCXt.conf.appConfig.customer
		},
		method: 'GET'
	};
	return GmCXt.xhr(params);
};

GmCXt.saveToken = function(r) {

	if (r.data && r.data.accesstoken) {

		var data = r.data;

		GmCXt.user.accesstoken = data.accesstoken;
		GmCXt.user.refreshtoken = data.refreshtoken;

		if (GmCXt.isDefined(data.app_access)) {
			GmCXt.user.app_access = data.app_access;
		}

		if (GmCXt.isDefined(data.profile)) {
			GmCXt.user.profile = data.profile;
		}

		if (!GmCXt.isBackgroundPage) {

			GmCXt.getWidgetIcon().then(function(wUrl) {
				mg$(".mgPlayerJSTest2_start-button img").attr('src', wUrl);
			});
		}

		GmCXt.msgToApp('mgPlayerJSTest2_action:update_access_token', data, senderTabId);
	}
};

GmCXt.addStoragePrefix = function(key) {
	if (key.indexOf(GmCXt.storagePrefix) === -1) {
		key = GmCXt.storagePrefix + key;
	}
	return key;
};

GmCXt.removeStoragePrefix = function(key) {
	if (key.indexOf(GmCXt.storagePrefix) !== -1) {
		key = key.split(GmCXt.storagePrefix)[1];
	}
	return key;
};

GmCXt.getUUID = function() {
	var date = new Date().getTime();
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var randomNumber = (date + Math.random() * 16) % 16 | 0;
		date = Math.floor(date / 16);
		return (c == 'x' ? randomNumber : (randomNumber & 0x3 | 0x8)).toString(16);
	});
	return uuid;
};

GmCXt.categoryLog = function(c) {
	return "APP: " + c.application_id + " : [" + c.category_id + ", " + c.category_title + "] ";
};

GmCXt.tourLog = function(t) {
	return " [" + t.tour_id + ", " + t.tour_title + "] ";
};

GmCXt.stepLog = function(s, t) {
	return " [ step: " + s + ", tour: " + t + "] ";
};
GmCXt.isTrue = function(prop) {
	if (parseInt(prop) === 1 || prop === true) return true;
	else return false;
};

// Returns false if it could not update tour play structure
GmCXt.updateTourPlayStructure = function(data) {

	var stepObj = data.step;
	var prevStepData = data.prevStepData;

	GmCXt.log(54, "GmCXt.updateTourPlayStructure ", data);

	if (prevStepData && prevStepData.tour && prevStepData.tour.tour_settings &&
		prevStepData.tour.tour_settings.play_structure) {

		GmCXt.log(54, "GmCXt.updateTourPlayStructure check 1");

		var oldTail = null;
		var playStructure = prevStepData.tour.tour_settings.play_structure;

		if (playStructure.length > 0) {

			if (prevStepData.step_id) {

				for (var i = 0; i < playStructure.length; i++) {

					// Get the prevStepData.step_id from the plus node
					// Search for the step from that node

					if (playStructure[i].id === prevStepData.step_id) {

						if (GmCXt.checkForBranchVariationSteps(prevStepData)) {

							if (!playStructure[i].branch) {
								playStructure[i].branch = [];
							}

							var branchIndex = prevStepData.branch_index;

							if (playStructure[i].branch[branchIndex].tail && playStructure[i].branch[branchIndex].tail !== -1) {
								oldTail = playStructure[i].branch[branchIndex].tail;
							} else if (playStructure[i].branch[branchIndex].tail === -1) {
								for (var j = 0; j < playStructure[i].branch.length; j++) {
									if (playStructure[i].branch[j].tail === -1) {
										playStructure[i].branch[j].tail = stepObj.step_id;
									}
								}
							}
							playStructure[i].branch[branchIndex].tail = stepObj.step_id;

						} else {
							// Update the tail 
							if (playStructure[i].tail) {
								oldTail = playStructure[i].tail;
							}
							playStructure[i].tail = stepObj.step_id;
							break;
						}
					}
				}
			} else {
				oldTail = playStructure[0].id;
			}

		}

		var obj = {
			id: stepObj.step_id,
			tail: oldTail
		};

		var stepSettings = stepObj.step_settings;

		if (stepObj.step_type === GmCXt.STEP_TYPE_BRANCH) {
			obj.branch = [];
			obj.tail = null;
			for (var i = 0; i < stepSettings.branch.length; i++) {
				if (stepSettings.branch[i].tail) {
					obj.branch.push({
						tail: stepSettings.branch[i].tail
					});
				} else {
					obj.branch.push({
						tail: null
					});
				}
			}
		} else if (GmCXt.isTrue(stepObj.step_settings.inlineBranch) || stepObj.step_type === GmCXt.STEP_TYPE_ERROR_HANDLER) {
			obj.branch = [];
			obj.branch.push({
				tail: oldTail
			}, {
				tail: null
			});
			obj.tail = null;
		}

		if (prevStepData.step_id) {
			playStructure.push(obj);
		} else {
			playStructure.splice(0, 0, obj);
		}
		prevStepData.tour.tour_settings.play_structure = playStructure;

		data.prevStepData = prevStepData;

		return data;
	}

	return false;
};

// These labels are always in english
// "wb" prefix are all Worldbank labels
GmCXt.engLbls = {
	px: "px",
	Guide: "Guide",
	wbTitle: "Welcome to the iGuide Content Panel",
	wbDescription: "This panel provides users with an alternate way to view applicable iGuide learning tools such as step-by-step walk-throughs, slide demos, videos, etc",
	wbViewiGuideInfo: "View iGuide info",
	wbiGuideTools: "iGuide Tools",
	wbWalkThrus: "Walk-thrus & demos",
	wbTooltips: "Tooltips",
	wbVideos: "Videos",
	wbPopupNotification: "Pop-up notifications &",
	wbMessages: "messages",
	defaultTestMe: "TestMe",
	defaultShowMe: "ShowMe",
	defaultGuideMe: "GuideMe",
	defaultVLab: "TeachMe",
	defaultDoItForMe: "DoItForMe",
	testMe: "TestMe",
	showMe: "ShowMe",
	guideMe: "GuideMe",
	vLab: "TeachMe",
	doItForMe: "DoItForMe",
	microPlayer: "Mini Player",
	myGuides: "My Guides",
	powerHTML: "Power HTML",
	defaultNext: "Next",
	defaultBtnPrev: "Prev"
};

GmCXt.getPlayerLabels = function(lang) {
	var lab = GmCXt.playerLbls.en_US;

	if (lang) {
		lang = lang.replace("-", "_");

		if (GmCXt.playerLbls[lang]) {
			lab = GmCXt.playerLbls[lang];
		}
	}

	lab = GmCXt.mergeLabels(lab, GmCXt.engLbls);
	return lab;
};

GmCXt.getCreatorLabels = function(lang) {
	var lab = GmCXt.creatorLbls.en_US;

	if (lang) {
		lang = lang.replace("-", "_");

		if (GmCXt.creatorLbls[lang]) {
			lab = GmCXt.creatorLbls[lang];
		}
	}

	return lab;
};

GmCXt.mergeLabels = function(labels, lbs) {
	for (var attr in lbs) {
		labels[attr] = lbs[attr];
	}

	return labels;
};

GmCXt.setRuleOpsUILabels = function() {
    GmCXt.ruleOpsUILabels[GmCXt.EXISTS] = GmCXt.label.opExists;
    GmCXt.ruleOpsUILabels[GmCXt.NOT_EXISTS] = GmCXt.label.opNotExists;
    GmCXt.ruleOpsUILabels[GmCXt.EQUALS] = GmCXt.label.opEquals;
    GmCXt.ruleOpsUILabels[GmCXt.NOT_EQUAL] = GmCXt.label.opNotEquals;
    GmCXt.ruleOpsUILabels[GmCXt.TXT_EQUALS] = GmCXt.label.opTxEquals;
    GmCXt.ruleOpsUILabels[GmCXt.NOT_TXT] = GmCXt.label.opTxNotEquals;
    GmCXt.ruleOpsUILabels[GmCXt.CONTAINS] = GmCXt.label.opContains;
    GmCXt.ruleOpsUILabels[GmCXt.NOT_CONTAINS] = GmCXt.label.opNotContains;
    GmCXt.ruleOpsUILabels[GmCXt.STARTS_WITH] = GmCXt.label.opStWith;
    GmCXt.ruleOpsUILabels[GmCXt.ENDS_WITH] = GmCXt.label.opEndWith;
    GmCXt.ruleOpsUILabels[GmCXt.GREAT_THAN] = GmCXt.label.opGrThan;
    GmCXt.ruleOpsUILabels[GmCXt.LESS_THAN] = GmCXt.label.opLeThan;
    GmCXt.ruleOpsUILabels[GmCXt.TXT_MATCHES] = GmCXt.label.opTxMatch;
    GmCXt.ruleOpsUILabels[GmCXt.TXT_CONTAINS] = GmCXt.label.opTxContains;
    GmCXt.ruleOpsUILabels[GmCXt.ATTRIBUTES] = GmCXt.label.opAttrs;
    GmCXt.ruleOpsUILabels[GmCXt.NOT_ATTRIBUTES] = GmCXt.label.opNoAttrs;
    GmCXt.ruleOpsUILabels[GmCXt.CLASSES] = GmCXt.label.opClasses;
    GmCXt.ruleOpsUILabels[GmCXt.NOT_CLASSES] = GmCXt.label.opNoClasses;
    GmCXt.ruleOpsUILabels[GmCXt.SELECTED] = GmCXt.label.opSelect;
    GmCXt.ruleOpsUILabels[GmCXt.NOT_SELECTED] = GmCXt.label.opNoSelect;
    GmCXt.ruleOpsUILabels[GmCXt.CHECKED] = GmCXt.label.opChecked;
    GmCXt.ruleOpsUILabels[GmCXt.NOT_CHECKED] = GmCXt.label.opNoChecked;
    GmCXt.ruleOpsUILabels[GmCXt.DISABLED] = GmCXt.label.opDisabled;
    GmCXt.ruleOpsUILabels[GmCXt.NOT_DISABLED] = GmCXt.label.opNoDisable;
    GmCXt.ruleOpsUILabels[GmCXt.DAY_OF_WEEK] = GmCXt.label.opDayOfWeek;
    GmCXt.ruleOpsUILabels[GmCXt.FIX_TIME] = GmCXt.label.opFixTime;
    GmCXt.ruleOpsUILabels[GmCXt.DATE_RANGE] = GmCXt.label.opDateRange;
    GmCXt.ruleOpsUILabels[GmCXt.IS_VALID] = GmCXt.label.opIsValid;
	GmCXt.ruleOpsUILabels[GmCXt.VISIBLE] = GmCXt.label.opVisible;
	GmCXt.ruleOpsUILabels[GmCXt.NOT_VISIBLE] = GmCXt.label.opNotVisible;
};

GmCXt.getAllLabels = function(lang) {
	GmCXt.label = GmCXt.getPlayerLabels(lang);

	if (GmCXt.FT.creatorApp) {
		GmCXt.label = GmCXt.mergeLabels(GmCXt.label, GmCXt.getCreatorLabels(lang));
	}

	// to replace missing lang labels with eng lang labels
	if (lang !== "en_US" && lang !== "en-US") {
		var enLabels = GmCXt.getEngLabels();

		var lbl = Object.assign({}, enLabels, GmCXt.label);
		GmCXt.label = lbl;
	}

	GmCXt.setRuleOpsUILabels();

	return GmCXt.label;
};

GmCXt.getEngLabels = function() {
	var engLabels = GmCXt.getPlayerLabels('en_US');

	if (GmCXt.FT.creatorApp) {
		engLabels = GmCXt.mergeLabels(engLabels, GmCXt.getCreatorLabels('en_US'));
	}

	return engLabels;
};

GmCXt.checkForBranchVariationSteps = function(step) {
	if (step && (step.step_type === GmCXt.STEP_TYPE_BRANCH ||
			step.step_type === GmCXt.STEP_TYPE_ERROR_HANDLER ||
			GmCXt.isTrue(step.step_settings && step.step_settings.inlineBranch))) {
		return true;
	}
	return false;
};

GmCXt.convertWeeksToHours = function(w) {
	var h = parseFloat(w) * 7 * 24;
	return h;
};

GmCXt.getDatafromPanel = function() {

	return new Promise(function(resolve, reject) {

		function sendResponse(m) {
			if (m && m.action === 'mgPlayerJSTest2_action:get_data_from_panel_response') {
				removeEventListener('message', chromeListener);
				resolve(m.data);
			}
		}

		function chromeListener(event) {
			var message = GmCXt.parseJSON(event);
			message = GmCXt.convertMgdata(message);

			sendResponse(message);
		}


		if (GmCXt.isBackgroundPage === true) {
			chrome.runtime.onMessage.addListener(chromeListener);
			GmCXt.sendMessageToPanel('mgPlayerJSTest2_action:get_data_from_panel');
		} else {
			resolve(false);
		}

	});
};
GmCXt.getCreatorAppFeatures = function() {

	return {
		quickFilters: true,
		hasEmbedMenu: true,
		tourDownload: true,
		publish: true,
		copyTour: true,
		toolTips: true,
		branchStep: true,
		inlineStep: true,
		messageStep: true,
		imageStep: true,
		creatorApp: true,
		guideApp: true,
		onboardingGuide: true,
		showMe: GmCXt.conf.appConfig.tourViewOptions.showMe,
		audio: GmCXt.conf.appConfig.tourViewOptions.audio,
		testme: GmCXt.conf.appConfig.tourViewOptions.testme,
		addSubCat: true,
		addTour: true,
		importTour: true,
		uploadTour: true,
		advancedFilter: true,
		tourUserInfo: true,
		manageAccount: true,
		analytics: true,
		userSettings: true,
		taskStatus: true,
		userDetails: true,
		defaultDomain: true
	};
};

GmCXt.getPlayerFeatures = function() {

	return {
		publishedGuides: true,
		publishedCat: true,
		isPlayer: true,
		showMe: GmCXt.conf.appConfig.tourViewOptions.showMe,
		audio: GmCXt.conf.appConfig.tourViewOptions.audio,
		testme: GmCXt.conf.appConfig.tourViewOptions.testme
	};
};

GmCXt.isWB = function() {
	if (GmCXt.FT.isPlayer && GmCXt.conf.appConfig.customer === 'wb')
		return true;
	else
		return false;
};

GmCXt.isWestpac = function() {
	if (GmCXt.conf.appConfig.customer === 'westpac') return true;
	else return false;
};

GmCXt.isMyGuide = function() {
	if (GmCXt.conf.appConfig.customer === 'myguide') return true;
	else return false;
};

GmCXt.isPlayer = function() {
	if (GmCXt.conf.appName === GmCXt.conf.playerApp || GmCXt.showPlayer)
		return true;
	else
		return false;
};

GmCXt.isExtension = function() {
	if (GmCXt.conf.appType === GmCXt.conf.appTypeExt)
		return true;
	else
		return false;
};

GmCXt.isClientJs = function() {
	if (GmCXt.conf.appType === GmCXt.conf.appTypeScript)
		return true;
	else
		return false;
};

GmCXt.isMicroPlayer = function() {
	if (GmCXt.isPlayer() && !GmCXt.isWB() && GmCXt.isMiniPlayer) {
		return true;
	} else {
		return false;
	}
};

GmCXt.isWBMicroPlayer = function() {
	if (GmCXt.isPlayer() && GmCXt.isWB() && GmCXt.isMiniPlayer) {
		return true;
	} else {
		return false;
	}
};

GmCXt.isWBC = function() {
	if (GmCXt.isPlayer() && GmCXt.conf.appConfig.customer === 'wbc') {
		return true;
	} else {
		return false;
	}
};

GmCXt.isEnt = function() {
	if (GmCXt.conf.appName === GmCXt.conf.creatorApp)
		return true;
	else
		return false;
};

GmCXt.onPrem = function() {
	if (GmCXt.conf.provider === GmCXt.conf.Premise)
		return true;
	else
		return false;
};

GmCXt.isCreatorJS = function() {
	if (GmCXt.conf.appName === GmCXt.conf.creatorJS)
		return true;
	else
		return false;
};

GmCXt.isElectron = function() {
	if (GmCXt.conf.runEnv === GmCXt.conf.appTypeElectron)
		return true;
	else
		return false;
};

GmCXt.isHumana = function() {
	if (GmCXt.isPlayer() && GmCXt.conf.appConfig.customer === 'humana') {
		return true;
	} else {
		return false;
	}
};

GmCXt.isMcKesson = function() {
	if (GmCXt.conf.appConfig.customer === 'mckesson') {
		return true;
	} else {
		return false;
	}
};

GmCXt.isMcKessonClientJS = function() {
	if (GmCXt.isClientJs() && GmCXt.conf.appConfig.customer === 'mckesson') {
		return true;
	} else {
		return false;
	}
};

GmCXt.isSalesForcePopOutSide = function() {
	var url = GmCXt.getUrl();
	if (GmCXt.checkSalesForceSite() && url.indexOf('lightning/popout') !== -1)
		return true;
	else
		return false;
};

if (GmCXt.isEnt() || GmCXt.isCreatorJS()) {
	GmCXt.FT = GmCXt.getCreatorAppFeatures();
} else {
	GmCXt.FT = GmCXt.getPlayerFeatures(); // Default is guide app
}

GmCXt.isAbbvie = function() {
	if (GmCXt.conf.appConfig.customer === 'abbvie') {
		return true;
	} else {
		return false;
	}
};

GmCXt.isSumtotal = function() {
	if (GmCXt.conf.appConfig.customer === 'sumtotal') {
		return true;
	} else {
		return false;
	}
};

GmCXt.isSbx = function() {
	if (GmCXt.conf.appConfig.customer === 'sbx') {
		return true;
	} else {
		return false;
	}
};

GmCXt.isDesktop = function() {
    if (GmCXt.playerI && GmCXt.playerI.source === GmCXt.sourceDesktop) {
        return true;
    } else {
        return false;
    }
};
/**
	* @file Guideme HTTP service
	* @author Nilesh Pachpande
	*/

GmCXt.userApiKeySignin = function(data) {

	var myGuideOrgKey = data.myGuideOrgKey;
	delete data.myGuideOrgKey;

	var serviceName = 'user/sso/login?mg_source_name=' + GmCXt.conf.appConfig.customer;

	var params = {
		url: serviceName,
		method: 'POST',
		headers: {
			'Content-Type': "application/json",
			"Authorization": myGuideOrgKey
		},
		data: JSON.stringify(data)
	};
	return GmCXt.xhr(params);
};

GmCXt.getAnonymousUserPrefrence = function(data, accesstoken) {

	var params = {
		url: 'user/preference',
		method: 'POST',
		headers: {
			'Content-Type': "application/json",
			AccessToken: accesstoken
		},
		data: JSON.stringify(data)
	};
	return GmCXt.xhr(params);
};

GmCXt.setAnonymousUserPrefrence = function(data) {

	var params = {
		url: 'user/preference',
		method: 'PUT',
		headers: {
			'Content-Type': "application/json",
			AccessToken: GmCXt.user.accesstoken
		},
		data: JSON.stringify(data)
	};
	return GmCXt.xhr(params);
};


GmCXt.apiGetHandOffToken = function() {
	var params = {
		url: "accounts/v1/handoff-token/generate/",
		method: 'GET',
		headers: {
			'Content-Type': "application/json",
			AccessToken: GmCXt.user.accesstoken,
			AppKey: GmCXt.conf.apiSecrret,
			RefreshToken: GmCXt.user.refreshtoken
		},
		data: ''
	};
	return GmCXt.xhrAnalytics(params);
};

GmCXt.apiRegisterClientInsight = function() {
	var params = {
		url: "event/v1/client/register/?org_id=" + GmCXt.organization.organization_id,
		method: 'POST',
		headers: {
			'Content-Type': "application/json",
			AccessToken: GmCXt.user.accesstoken,
			AppKey: GmCXt.conf.apiSecrret
		},
		data: ''
	};
	return GmCXt.xhrAnalytics(params, true);
};

GmCXt.apiGetClientSecretInsight = function(o) {
	var params = {
		url: "event/v1/client/secret/?org_id=" + GmCXt.organization.organization_id,
		method: 'POST',
		headers: {
			'Content-Type': "application/json"
		},
		data: JSON.stringify({
			"app_client_id": o
		})
	};
	return GmCXt.xhrAnalytics(params, true);
};

GmCXt.apiTrackEventV3 = function(o) {
	var params = {
		url: "v3/push_events/",
		method: 'POST',
		headers: {
			'Content-Type': "application/json"
		},
		data: JSON.stringify(o)
	};
	return GmCXt.xhrAnalytics(params);
};

GmCXt.apiTrackEventV1 = function(o) {

	var params = {
		url: "event/v1/push/?org_id=" + o.payload[0].org_id + "&app_code=" + o.payload[0].app_code + "&event_type=" + o.payload[0].event_type,
		method: 'POST',
		headers: {
			'Content-Type': "application/json"
		},
		data: JSON.stringify(o)
	};
	return GmCXt.xhrAnalytics(params);
};

GmCXt.apitrackSentiment = function(o) {
	var params = {
		url: "register/v1/sentiment/report/",
		method: 'POST',
		headers: {
			'Content-Type': "application/json",
			accesstoken: GmCXt.user.accesstoken,
			appkey: GmCXt.conf.apiSecrret
		},
		data: JSON.stringify(o)
	};
	return GmCXt.xhrAnalytics(params);
};

GmCXt.apitrackConversation = function(o) {
	var params = {
		url: "register/v1/conversation/report/",
		method: 'POST',
		headers: {
			'Content-Type': "application/json",
			accesstoken: GmCXt.user.accesstoken,
			appkey: GmCXt.conf.apiSecrret
		},
		data: JSON.stringify(o)
	};
	return GmCXt.xhrAnalytics(params);
};

GmCXt.apiUpdateSentiment = function(o) {
	var params = {
		url: "sentiments/v1/questionaire/",
		method: 'PUT',
		headers: {
			'Content-Type': "application/json",
			accesstoken: GmCXt.user.accesstoken,
			key: GmCXt.trackerUtil.clientKey,
			appkey: GmCXt.conf.apiSecrret
		},
		data: JSON.stringify(o)
	};
	return GmCXt.xhrAnalytics(params);
};

GmCXt.apiDeleteSentiment = function(o) {
	var url = "";
	if (o.app_code) {
		url = "sentiments/v1/questionaire/?app_code=" + o.app_code + "&sentiment_code=" + o.sentiment_code +
			"&time_zone=utc+0530";
	} else {
		url = "sentiments/v1/questionaire/?sentiment_code=" + o.sentiment_code +
			"&time_zone=utc+0530";
	}

	var params = {
		url: url,
		method: 'DELETE',
		headers: {
			'Content-Type': "application/json",
			accesstoken: GmCXt.user.accesstoken,
			appkey: GmCXt.conf.apiSecrret
		},
		data: ''
	};

	return GmCXt.xhrAnalytics(params);
};

GmCXt.apiGetSentiment = function(o) {
	var url = "";
	if (o.app_code) {
		url = "sentiments/v1/questionaire/?app_code=" + o.app_code + "&sentiment_code=" + o.sentiment_code +
			"&time_zone=utc+0530";
	} else {
		url = "sentiments/v1/questionaire/?sentiment_code=" + o.sentiment_code +
			"&time_zone=utc+0530";
	}
	var params = {
		url: url,
		method: 'GET',
		headers: {
			'Content-Type': "application/json",
			accesstoken: GmCXt.user.accesstoken,
			appkey: GmCXt.conf.apiSecrret
		},
		data: ''
	};

	return GmCXt.xhrAnalytics(params);
};

GmCXt.apiGetBotConv = function(o) {
	var url = "";
	if (o.app_code) {
		url = "conversations/v1/questionaire/?app_code=" + o.app_code + "&conversation_code=" + o.conversation_code +
			"&time_zone=utc+0530";
	} else {
		url = "conversations/v1/questionaire/?conversation_code=" + o.conversation_code +
			"&time_zone=utc+0530";
	}
	var params = {
		url: url,
		method: 'GET',
		headers: {
			'Content-Type': "application/json",
			accesstoken: GmCXt.user.accesstoken,
			appkey: GmCXt.conf.apiSecrret
		},
		data: ''
	};

	return GmCXt.xhrAnalytics(params);
};

GmCXt.apiGetSentiments = function(o) {
	var url = "";
	if (o.app_code) {
		url = "sentiments/v1/list/?app_code=" + o.app_code + "&sort_by=sentiment_title&order=asc&page_index=" +
			o.pageIndex + "&page_size=" + o.pageSize;
	} else {
		url = "sentiments/v1/list/?sort_by=sentiment_title&order=asc&page_index=" +
			o.pageIndex + "&page_size=" + o.pageSize;
	}
	var params = {
		url: url,
		method: 'GET',
		headers: {
			'Content-Type': "application/json",
			accesstoken: GmCXt.user.accesstoken,
			appkey: GmCXt.conf.apiSecrret
		},
		data: ''
	};

	return GmCXt.xhrAnalytics(params);
};

GmCXt.apiGetBotConvList = function(o) {
	var url = "";
	if (o.app_code) {
		url = "conversations/v1/list/?app_code=" + o.app_code + "&sort_by=conversation_title&order=asc&page_index=" +
			o.pageIndex + "&page_size=" + o.pageSize;
	} else {
		url = "conversations/v1/list/?sort_by=conversation_title&order=asc&page_index=" +
			o.pageIndex + "&page_size=" + o.pageSize;
	}
	var params = {
		url: url,
		method: 'GET',
		headers: {
			'Content-Type': "application/json",
			accesstoken: GmCXt.user.accesstoken,
			appkey: GmCXt.conf.apiSecrret
		},
		data: ''
	};

	return GmCXt.xhrAnalytics(params);
};

GmCXt.apiPostSurvey = function(o, user) {
	var params = {
		url: "v3/survey/questionnaire/" + o.guide_id + "/",
		method: 'POST',
		headers: {
			'Content-Type': "application/json",
			accesstoken: user.accesstoken,
			key: GmCXt.trackerUtil.clientKey,
			appkey: GmCXt.conf.apiSecrret
		},
		data: JSON.stringify(o)
	};
	return GmCXt.xhrAnalytics(params);
};

GmCXt.apiPostSentiment = function(o) {
	var params = {
		url: "sentiments/v1/questionaire/",
		method: 'POST',
		headers: {
			'Content-Type': "application/json",
			accesstoken: GmCXt.user.accesstoken,
			key: GmCXt.trackerUtil.clientKey,
			appkey: GmCXt.conf.apiSecrret
		},
		data: JSON.stringify(o)
	};
	return GmCXt.xhrAnalytics(params);
};

GmCXt.apiUpdateUserProfile = function(user) {
	user.settings = JSON.stringify(user.settings);
	var params = {
		url: "user",
		method: 'PUT',
		data: JSON.stringify(user)
	};
	return GmCXt.xhr(params);
};

GmCXt.apiUpdateUserGuidevView = function(data) {
	var guideView = {
		guide_view: JSON.stringify(data)
	};

	var params = {
		url: "user/guide_view",
		method: 'PUT',
		data: JSON.stringify(guideView)
	};
	return GmCXt.xhr(params);
};

GmCXt.logoutUser = function() {
	GmCXt.msgToApp('mgPlayerJSTest2_action:to_signin_page', {}, senderTabId);
};

GmCXt.loginFromConsole = function(email, password) {
	if (!GmCXt.isBackgroundPage) {
		GmCXt.msgToApp('mgPlayerJSTest2_action:signin_from_console', {
			email: email,
			password: password
		}, senderTabId);
	}
};

GmCXt.saveMyBotReport = function(o) {
	var params = {
		url: "register/v1/mybot/report/",
		method: 'POST',
		headers: {
			'Content-Type': "application/json",
			'AccessToken': GmCXt.user.accesstoken,
			appkey: GmCXt.conf.apiSecrret
		},
		data: JSON.stringify(o)
	};
	return GmCXt.xhrAnalytics(params);
};

GmCXt.getElementsDetailInsights = function(id) {
	var params = {
		url: "tracker/v1/element/metedata/contextual/?app_code=" + id + "&url=" + GmCXt.urlParts.host,
		method: 'GET',
		headers: {
			'Content-Type': "application/json",
			'AccessToken': GmCXt.user.accesstoken,
			appkey: GmCXt.conf.apiSecrret
		}
	};
	return GmCXt.xhrAnalytics(params);
};

GmCXt.createNewElTrackObject = function(obj) {
	var params = {
		url: "tracker/v1/element/metedata/",
		method: 'POST',
		headers: {
			'Content-Type': "application/json",
			'AccessToken': GmCXt.user.accesstoken,
			appkey: GmCXt.conf.apiSecrret
		},
		data: JSON.stringify(obj)
	};
	return GmCXt.xhrAnalytics(params);
};

GmCXt.updateElTrackObject = function(obj) {
	var params = {
		url: "tracker/v1/element/metedata/",
		method: 'PUT',
		headers: {
			'Content-Type': "application/json",
			'AccessToken': GmCXt.user.accesstoken,
			appkey: GmCXt.conf.apiSecrret
		},
		data: JSON.stringify(obj)
	};
	return GmCXt.xhrAnalytics(params);
};

GmCXt.apiGetSegmentGroupList = function(o) {
	var params = {
		url: "segment/group/list?organization_id=" + o.organization_id,
		method: "GET",
		headers: {
			'Content-Type': "application/json"
		},
		data: ''
	};
	return GmCXt.xhr(params);
};

GmCXt.apiPostSegmentGroupList = function(data) {
	var params = {
		url: "segment/group",
		method: "POST",
		headers: {
			'Content-Type': "application/json"
		},
		data: JSON.stringify(data)
	};
	return GmCXt.xhr(params);
};

GmCXt.apiPutSegmentGroupList = function(data) {
	var params = {
		url: "segment/group",
		method: "PUT",
		headers: {
			'Content-Type': "application/json"
		},
		data: JSON.stringify(data)
	};
	return GmCXt.xhr(params);
};

GmCXt.apiDeleteSegmentGroupList = function(data) {

	var params = {
		url: 'segment/group',
		method: 'DELETE',
		headers: {
			'Content-Type': "application/json"
		},
		data: JSON.stringify(data)
	};
	return GmCXt.xhr(params);
};

GmCXt.callGetCdnSignature = function(data) {

	var params = {
		url: 'organization/signature?',
		method: 'GET',
		headers: {
			'Content-Type': "application/json"
		},
		data: GmCXt.encode(data)
	};
	return GmCXt.xhr(params);
};

GmCXt.sendFeedbackEmail = function(obj) {
	var params = {
		url: "organization/feedback",
		method: 'POST',
		headers: {
			'Content-Type': "application/json"
		},
		data: JSON.stringify(obj)
	};
	return GmCXt.xhr(params);
};

GmCXt.getSearchURL = function(url, searchData) {
	var searchParams = new URLSearchParams(searchData);
	var searchParamsStr = searchParams.toString();
	if (searchParamsStr.length && searchParamsStr.indexOf("?") === -1 && url.indexOf("?") === -1) {
		searchParams = "?" + searchParams.toString();
	}
	url = url + searchParams;
	return url;
};

GmCXt.xhr = function(params, doNotAddWebURL, extApi) {

	return new Promise(function(resolve, reject) {
		var host = "";

		if(!GmCXt.isEmpty(GmCXt.urlParts)){
			host = GmCXt.urlParts.host;
		}

		var headers = {
			"appkey": GmCXt.conf.apiSecrret,
			'x-mg-host': host,
			'x-mg-source': GmCXt.conf.appName,
			'x-mg-orgId': ''
		};

		var showMaintenance = function() {
			if (GmCXt.isBackgroundPage === true) {
				GmCXt.sendMessageToPanel('mgPlayerJSTest2_action:maintenance');
			} else {
				GmCXt.sendMessageToApp('mgPlayerJSTest2_action:maintenance');
			}
		};

		var onError = function(error) {
			console.log(error);
			if (error) {
				error.url = params.url;
				error.paramsData = params.data;
				error.method = params.method;

				var code = error.code;

				if (code == 1003 || code === 2004 || (code === 2036 && (error.url.indexOf('user/signout') > 0 || error.url.indexOf('user/token') > 0))) { // AccessToken Invalid || Session Expired
					if (GmCXt.isBackgroundPage) {
						GmCXt.createStepJobs = [];
					}
					GmCXt.logoutUser();
					reject(error);

				} else if (code == 1007) { // AccessToken expired
					GmCXt.getAccessToken().then(function(r) {
						GmCXt.saveToken(r);
						params.headers.AccessToken = GmCXt.user.accesstoken;
						ajax();
					}).catch(function() {
						GmCXt.logoutUser();
					});

				} else if (code === 1014) {
					showMaintenance();
					reject(error);

				} else {
					reject(error);
				}

			} else {
				reject();
			}
		};

		var onSuccess = function(result) {

			result.code = parseInt(result.code);

			if (doNotAddWebURL) {
				resolve(result);
				return;
			}

			var code = result.code;
			if (result.error === false) {

				if (params.url && params.url.indexOf('user/token') !== -1) {
					result = GmCXt.validateDataModel(result.data, GmCXt.model.userToken);
				}
				if (params.onSuccess) {
					params.onSuccess(result);
				}

				resolve(result);
			} else if (code === 1005) {
				resolve(result);

			} else if (code === 1018) {
				resolve(result);

			} else if (code === 1014) {
				showMaintenance();
				reject(result);

			} else if (code == 1003 || code == 2004 || (code === 2036 && (params.url.indexOf('user/signout') > 0 || params.url.indexOf('user/token') > 0))) { // AccessToken Invalid || Session Expired

				if (GmCXt.isBackgroundPage) {
					GmCXt.createStepJobs = [];
				}
				GmCXt.logoutUser();
				reject(result);

			} else if (code == 1007) { // AccessToken expired
				GmCXt.getAccessToken().then(function(r) {
					GmCXt.saveToken(r);
					params.headers.AccessToken = GmCXt.user.accesstoken;
					callApi_();
				}).catch(function() {
					GmCXt.logoutUser();
				});

			} else {
				reject(result);
			}
		};

		function callApi_() {

			for (var key in params.headers) {
				if (params.headers.hasOwnProperty(key)) headers[key] = params.headers[key];
			}

			if (GmCXt.user && GmCXt.organization) {
				headers.appType = GmCXt.conf.appType;
				headers.orgId = GmCXt.organization.organization_id;
				headers['x-mg-orgId'] = GmCXt.organization.organization_id;

				headers.AccessToken = GmCXt.user.accesstoken;

				processApi();
			} else {
				GmCXt.getDatafromPanel().then(function(d) {
					GmCXt.user = d.user;
					GmCXt.organization = d.organization;
					if (GmCXt.user) {
						headers.appType = GmCXt.conf.appType;
						headers.orgId = GmCXt.organization.organization_id;
						headers.AccessToken = GmCXt.user.accesstoken;
						headers['x-mg-orgId'] = GmCXt.organization.organization_id;
					}
					processApi();
				}).catch(function(e) {
					console.log('Error while fetching user data', e);
				});
			}
		}

		function processApi() {

			var url = GmCXt.conf.webServiceUrl + "" + params.url;
			
			if (doNotAddWebURL) {
				url = params.url;
			}

			if (params.method === 'GET') {

				fetch(GmCXt.getSearchURL(url, params.data), {
						headers: headers,
						method: params.method
					})
					.then(function(response) {

						if (doNotAddWebURL && !extApi) {

							if (response.status === 200) {
								resolve();
							} else {
								reject();
							}

						} else {
							response.json()
								.then(onSuccess)
								.catch(onError);
						}

					}).catch(onError);

			} else {
				fetch(url, {
						headers: headers,
						method: params.method,
						body: params.data
					})
					.then(function(response) {
						response.json()
							.then(onSuccess)
							.catch(onError);
					}).catch(onError);
			}
		}

		callApi_();
	});
};

GmCXt.getDetailTour = function(o) {
	return new Promise(function(resolve, reject) {
		var params = {
			url: "tour",
			method: 'GET',
			headers: {
				'Content-Type': "application/json"
			},
			data: GmCXt.encode(o)
		};

		function gotTour(tour) {
			tour = GmCXt.migrateTour(tour);

			resolve(tour);
		}

		function onSuccess(r) {
			if (r && r.data) {
				GmCXt.validateApiResp(gotTour,
					"tour",
					r.data.tour,
					GmCXt.model.guide);
			} else {
				resolve();
			}
		}

		GmCXt.xhr(params).then(onSuccess);
	});
};

GmCXt.xhrAnalytics = function(params, isInsight) {

	return new Promise(function(resolve, reject) {

		function OnAccessTokenError() {
			GmCXt.getAccessToken().then(function(r) {
				r = r || {};
				GmCXt.saveToken(r);

				params.headers.accesstoken = GmCXt.user.accesstoken;
				ajax();
			}).catch(function() {
				GmCXt.logoutUser();
			});
		}

		var onSuccess = function(result) {

			result = GmCXt.parseJSON(result);

			if (result.status === 'success') {

				if (result.data.event_chain_id) {
					if (isInsight) {
						GmCXt.INSIGHTS_EVENT_CHAIN_ID = result.data.event_chain_id;
					} else {
						GmCXt.ANALYTICS_EVENT_CHAIN_ID = result.data.event_chain_id;
					}
				}
				resolve(result);
			} else {
				if (!GmCXt.isEmpty(result) && GmCXt.isDefined(result.status) &&
					result.status === 'error' &&
					result.description === "Access token expired.") {
					OnAccessTokenError();
				} else {
					reject(result);
				}
			}
		};

		var onError = function(xhr) {

			console.log(xhr);
			if (xhr.responseJSON) {

				if (xhr.responseJSON.description == "Access token expired.") {
					OnAccessTokenError();

				} else {
					var error = xhr.responseJSON;
					error.apiUrl = params.url;
					reject(error);
				}
			} else {
				reject(error);
			}
		};

		function ajax() {

			url = GmCXt.conf.analyticsPath + "" + params.url;

			if (params.method === 'GET') {

				fetch(GmCXt.getSearchURL(url, params.data), {
						headers: params.headers,
						method: params.method
					})
					.then(function(response) {
						response.json()
							.then(function(r) {
								onSuccess(r);
							})
							.catch(onError);
					});

			} else {
				fetch(url, {
						headers: params.headers,
						method: params.method,
						body: params.data
					})
					.then(function(response) {
						response.json()
							.then(onSuccess)
							.catch(onError);
					});
			}
		}

		var org = GmCXt.organization;

		if (!GmCXt.isEmpty(GmCXt.conf.analyticsPath) &&
			((org && org.admin_settings.insights.enabled) || params.url.indexOf("handoff-token") != -1 || GmCXt.isLogoutTrackApi)) {
			ajax();
		} else {
			reject();
		}
	});
};
GmCXt.guideMeApiProvider = function() {

	var pub = {};

	pub.getUser = function(o) {
		var params = {
			url: "user",
			method: 'GET',
			headers: {
				'Content-Type': "application/json"
			},
			data: GmCXt.encode(o)
		};
		return GmCXt.xhr(params);
	};

	pub.getOrganization = function(o) {
		var params = {
			url: "organization",
			method: 'GET',
			headers: {
				'Content-Type': "application/json"
			},
			data: GmCXt.encode(o)
		};
		return GmCXt.xhr(params);
	};

	pub.getOrgSettings = function(o) {
		var params = {
			url: "organization",
			method: 'GET',
			headers: {
				'Content-Type': "application/json"
			},
			data: GmCXt.encode(o)
		};
		return GmCXt.xhr(params);
	};

	pub.getTours = function(o) {
		var params = {
			url: "tour/list",
			method: 'GET',
			headers: {
				'Content-Type': "application/json"
			},
			data: GmCXt.encode(o)
		};
		return GmCXt.xhr(params);

		// 4830:
		//GmCXt.validateApiResp( cb,
		//    params.url, 
		//    r.data.tours, 
		//    GmCXt.model.guides 
		//);
	};

	pub.getVideoUploadUrl = function(data) {
		data.organization_id = GmCXt.organization.organization_id;
		var params = {
			url: "file/upload/url?",
			method: 'GET',
			headers: {},
			data: GmCXt.encode(data)
		};
		return GmCXt.xhr(params);
	};

	pub.getVideoUploadUrl_IBM = function(data) {
		data.organization_id = GmCXt.organization.organization_id;
		var params = {
			url: "file/presigned/upload/url?",
			method: "GET",
			headers: {},
			data: GmCXt.encode(data)
		};
		return GmCXt.xhr(params);
	};

	pub.videoUploadStatus = function(data) {
		data.organization_id = GmCXt.organization.organization_id;
		var params = {
			url: "file/upload/status",
			method: 'POST',
			headers: {},
			data: JSON.stringify(data)
		};
		return GmCXt.xhr(params);
	};

	pub.getVideoLocator = function(data) {
		data.organization_id = GmCXt.organization.organization_id;
		var params = {
			url: "file/upload/status",
			method: 'GET',
			headers: {},
			data: GmCXt.encode(data)
		};
		return GmCXt.xhr(params);
	};

	pub.uploadFTPFile = function(data, successCb, errorCb) {
		data.organization_id = GmCXt.organization.organization_id;
		var params = {
			url: "file/upload/ftp",
			method: "POST",
			serviceType: "",
			data: data,
			fileInput: true,
			onSuccess: successCb,
			onFail: errorCb
		};
		return GmCXt.xhr(params);
	};

	pub.createStep = function(o) {
		var params = {
			url: "step",
			method: 'POST',
			headers: {},
			data: JSON.stringify(o.args)
		};
		return GmCXt.xhr(params);
	};

	pub.deleteStep = function(data) {

		var params = {
			url: 'step',
			method: 'DELETE',
			data: JSON.stringify(data)
		};

		return GmCXt.xhr(params);
	};

	pub.updateTour = function(data) {
		var params = {
			url: 'tour',
			method: 'PUT',
			headers: {},
			data: JSON.stringify(data)
		};

		return GmCXt.xhr(params);
	};

	pub.updateStep = function(o) {
		var params = {
			url: "step",
			method: 'PUT',
			headers: {},
			data: JSON.stringify(o.args)
		};
		return GmCXt.xhr(params);
	};

	pub.updateStepLang = function(o) {
		var params = {
			url: "step/language/update",
			method: 'PUT',
			headers: {},
			data: JSON.stringify(o.args)
		};
		return GmCXt.xhr(params);
	};

	pub.uploadFileBase64 = function(o) {
		var params = {
			url: "file/base64image",
			method: 'POST',
			headers: {},
			data: o.args
		};
		return GmCXt.xhr(params);
	};

	pub.uploadBase64Image = function(o) {
		var params = {
			url: "file/upload/base64image",
			method: 'POST',
			headers: {},
			data: o.args
		};
		return GmCXt.xhr(params);
	};

	pub.uploadFile = function(o) {
		o.args.append("organization_id", GmCXt.organization.organization_id);
		var params = {
			url: "file/image",
			method: 'POST',
			headers: {},
			data: o.args
		};
		return GmCXt.xhr(params);
	};

	pub.uploadAudio = function(o) {
		var params = {
			url: "file/audio",
			method: 'POST',
			headers: {},
			data: o.args
		};
		return GmCXt.xhr(params);
	};

	pub.getAudio = function(o) {
		var params = {
			url: "file/audio",
			method: 'GET',
			data: GmCXt.encode(o.args)
		};
		return GmCXt.xhr(params);
	};

	pub.updateSurvey = function(o, user) {
		var params = {
			url: "v3/survey/questionnaire/" + o.guide_id + "/",
			method: 'PUT',
			headers: {
				'Content-Type': "application/json",
				accesstoken: user.accesstoken,
				key: GmCXt.trackerUtil.clientKey,
				appkey: GmCXt.conf.apiSecrret
			},
			data: JSON.stringify(o)
		};
		return GmCXt.xhrAnalytics(params);
	};

	pub.updateUserProfile = GmCXt.apiUpdateUserProfile;
	pub.getHandOffToken = GmCXt.apiGetHandOffToken;
	pub.getSentiments = GmCXt.apiGetSentiments;
	pub.getBotConvList = GmCXt.apiGetBotConvList;
	pub.updateSentiment = GmCXt.apiUpdateSentiment;
	pub.postSentiment = GmCXt.apiPostSentiment;
	pub.deleteSentiment = GmCXt.apiDeleteSentiment;
	pub.getSentiment = GmCXt.apiGetSentiment;
	pub.getGetBotConv = GmCXt.apiGetBotConv;
	pub.postSurvey = GmCXt.apiPostSurvey;
	pub.getSegmentGroupList = GmCXt.apiGetSegmentGroupList;
	pub.postSegmentGroupList = GmCXt.apiPostSegmentGroupList;
	pub.putSegmentGroupList = GmCXt.apiPutSegmentGroupList;
	pub.deleteSegmentGroupList = GmCXt.apiDeleteSegmentGroupList;
	pub.userApiKeySignin = GmCXt.userApiKeySignin;
	pub.registerClientInsight = GmCXt.apiRegisterClientInsight;
	pub.getClientSecretInsight = GmCXt.apiGetClientSecretInsight;
	pub.trackEventV1 = GmCXt.apiTrackEventV1;
	pub.trackEventV3 = GmCXt.apiTrackEventV3;
	pub.saveMyBotReport = GmCXt.saveMyBotReport;
	pub.getOneTimeTokenInsights = GmCXt.getOneTimeTokenInsights;
	pub.trackSentiment = GmCXt.apitrackSentiment;
	pub.trackConversation = GmCXt.apitrackConversation;
	pub.createNewElTrackObject = GmCXt.createNewElTrackObject;
	pub.getElementsDetailInsights = GmCXt.getElementsDetailInsights;
	pub.updateElTrackObject = GmCXt.updateElTrackObject;
	pub.getCdnSignature = GmCXt.callGetCdnSignature;
	pub.getTour = GmCXt.getDetailTour;
	pub.sendFeedbackEmail = GmCXt.sendFeedbackEmail;
	pub.getAnonymousUserPrefrence = GmCXt.getAnonymousUserPrefrence;
	pub.setAnonymousUserPrefrence = GmCXt.setAnonymousUserPrefrence;

	return pub;
};

if (GmCXt.conf.provider === 'GuideMe') {
	GmCXt.api = GmCXt.guideMeApiProvider();
}
if (GmCXt === undefined) {
	var GmCXt = {};
}

GmCXt.sendMessageToAllWindows = function(type, data) {
	var data = mg$.extend({}, data || {});

	if (GmCXt.syncPlayerInst(type)) {
		if (GmCXt.playerI || GmCXt.playerI === null) {
			data.playerInstance = GmCXt.playerI;
		}
	}

	if (GmCXt.syncCreateInst(type)) {
		if (GmCXt.stepReq || GmCXt.stepReq === null) {
			data.stepReq = GmCXt.stepReq;
		}
	}

	if(type !== "mgPlayerJSTest2_action:clear_rule_jobs" || type !== "mgPlayerJSTest2_action:remove_tooltip"){
		data.user = GmCXt.user;
		data.organization = GmCXt.organization;
	}

	var message = {
		action: type,
		data: data
	};

	if (message.data) {
		var f = {};
		message.data.frame = mg$.extend({}, f);
	}

	if (GmCXt.inTopWindow(data.settings)) {

		if (type === "mgPlayerJSTest2_action:started;task:select_existing_dom_element") {
			GmCXt.requestHandler.selectExistingDomElement(message.data);
			return;
		}

		if (type === "mgPlayerJSTest2_action:started;task:edit_step_select_existing_dom_element") {
			GmCXt.requestHandler.selectDomElementEditStep(message);
			return;
		}

		if (type === "mgPlayerJSTest2_action:started;task:edit_tag_select_existing_dom_element") {
			GmCXt.requestHandler.selectDomElementEditTag(message);
			return;
		}

		if (type === "mgPlayerJSTest2_action:started;task:select_dom_element_tooltips") {
			GmCXt.requestHandler.selectDomElement(message);
			return;
		}

		if (type === "mgPlayerJSTest2_action:started;task:edit_beacon_select_existing_dom_element") {
			GmCXt.selectorTool = null;
			GmCXt.requestHandler.selectDomElementBeaconEdit(message);
			return;
		}

		if (type === "mgPlayerJSTest2_action:started;task:search_next_step") {
			GmCXt.requestHandler.searchDomElement(message.data);
			return;
		}

	} else if (GmCXt.inTopWindow(data.beaconSettings)) {
		if (type === "mgPlayerJSTest2_action:show_beacon_on_dom_element") {
			GmCXt.highlighter.queueBeacon(message);
			return;
		}
	}

	if (type === "mgPlayerJSTest2_action:started;task:select_dom_element_for_rules") {

		if (data.rule && data.rule.element && data.rule.element.meta) {
			var el = data.rule.element;

			if (el.meta.inTopWindow === true) {
				GmCXt.requestHandler.findElementToCheckDomRule(data);
				return;
			} else {
				GmCXt.rulesIframeQueue.push(mg$.extend({}, data));
			}
		}
	}

	if (type === "mgPlayerJSTest2_action:started;task:select_dom_element_for_matching_in_rules") {
		if (data.element && data.element.meta) {
			var el = data.element;
			if (el.meta.inTopWindow === true) {
				GmCXt.requestHandler.findElementToCheckMatchingAlgo(data);
				return;
			}
		}
	}

	if (type === "mgPlayerJSTest2_action:update_session_info") {
		GmCXt.sessionInfo = data.sessionInfo;
	}

	GmCXt.timeout(function() {
		GmCXt.sendToIframes(message);
		GmCXt.sendToFrames(message);
	}, GmCXt.t.msgToframes);

	GmCXt.msgToThisWin(message);
};

GmCXt.inTopWindow = function(s) {
	if (s) {
		if (s.element) {
			var el = s.element;
		} else if (s.selectedDOMElement) {
			var el = s.selectedDOMElement;
		}

		if (el) {
			if (el.version && GmCXt.decodeVersion(el.version) >= 10000) {
				if (el.meta.inTopWindow === true)
					return true;
			} else if (el.isTopWindow === true) {
				return true;
			}
		}
	}

	return false;
};

GmCXt.myGuideFrame = function(f) {
	return f.name.indexOf('guideme-iframe') !== -1;
};

GmCXt.isEntIframe = function(fr) {
	return (fr.className.indexOf(GmCXt.conf.creatorApp) !== -1);
};

GmCXt.isPlayerIframe = function(fr) {
	return (fr.className.indexOf(GmCXt.conf.playerApp) !== -1);
};

GmCXt.passMessage = function(message, frames) {

	for (var i = 0, len = frames.length; i < len; i++) {

		var frame = frames[i];

		if (GmCXt.blockMcKessonIFrame(frame)) continue;

		if(GmCXt.blockAbbvieIframe(frame)) continue;

		if (frame.clientHeight === 0 || frame.clientWidth === 0) {
			continue;
		}

		if (!GmCXt.myGuideFrame(frame)) {
			if (message.mgdata && message.mgdata.frame && !GmCXt.isEmpty(message.mgdata.frame)) {
				message.mgdata.frame.iframeTitle = frame.getAttribute("title");
				message.mgdata.frame.attributes = GmCXt.getIframeAttributes(mg$(frame));
				message.mgdata.frame.pos = frame.getBoundingClientRect();
			}

			try {
				frame.contentWindow.postMessage(GmCXt.formatMsg(message), "*");
			} catch (e) {
				console.dir(e);
				console.dir(message);
			}
		}
	}
};

GmCXt.sendToIframes = function(message) {

	var iframes = window.document.getElementsByTagName('iframe');
	var framesInShadowDoms = GmCXt.getIframesFromShadowDom();

	GmCXt.passMessage(message, iframes);
	GmCXt.passMessage(message, framesInShadowDoms);
};

GmCXt.sendToFrames = function(message) {

	var frameTags = window.document.getElementsByTagName('frame');

	for (var j = 0, len = frameTags.length; j < len; j++) {

		var frame = frameTags[j];

		if (frame.clientHeight === 0 || frame.clientWidth === 0) {
			continue;
		}

		if (message.mgdata && message.mgdata.frame && !GmCXt.isEmpty(message.mgdata.frame)) {
			message.mgdata.frame.iframeTitle = frame.getAttribute("title");
			message.mgdata.frame.attributes = GmCXt.getIframeAttributes(mg$(frame));
			message.mgdata.frame.pos = frame.getBoundingClientRect();
		}

		try {
			frame.contentWindow.postMessage(GmCXt.formatMsg(message), "*");
		} catch (e) {
			console.dir(e);
			console.dir(message);
		}
	}
};

GmCXt.sendMessageToolbar = function(type, data) {
	data = data || {};
	data.config = GmCXt.conf;
	data.user = GmCXt.user;

	if (GmCXt.initialization && GmCXt.initialization.toolbar === true) {
		GmCXt.sendMessageToolbarIn(type, data);
	} else {
		GmCXt.timeout(function() {
			GmCXt.sendMessageToolbar(type, data);
		}, GmCXt.t_.sec1);
	}
};

GmCXt.sendMessageToolbarIn = function(type, data) {
	var appWindow = mg$("#mgPlayerJSTest2_toolbar-iframe");
	if (appWindow.length) {
		var message = {
			action: type,
			data: data
		};
		message = GmCXt.formatMsg(message);
		appWindow.get(0).contentWindow.postMessage(message, "*");
	}
};

GmCXt.sendMessageToStepFrame = function(type, data) {

	var sent = false;

	if (mg$("#mgPlayerJSTest2_step-iframe").length) {
		var newStepFrame = mg$("#mgPlayerJSTest2_step-iframe").get(0).contentWindow;

		data = data || {};
		data.config = GmCXt.conf;
		data.user = GmCXt.user;
		data.organization = GmCXt.organization;

		if (GmCXt.stepReq || GmCXt.stepReq === null) {
			if (GmCXt.stepReq && GmCXt.stepReq.action) {
				if (GmCXt.stepReq.action.indexOf('beacon') === -1) {
					data.stepReq = GmCXt.stepReq;
				} else {
					data.beaconReq = GmCXt.stepReq;
				}
			}
		}

		var message = {
			action: type,
			data: data
		};

		try {
			newStepFrame.postMessage(GmCXt.formatMsg(message), "*");
			sent = true;
		} catch (e) {
			console.dir(e);
			console.dir(message);
		}
	}

	return sent;
};
GmCXt.model = {};

GmCXt.model.api = {
	code: {
		_type: "number",
		_required: true
	},
	data: {
		_type: "object",
		_required: true,
		_obj: {}
	},
	error: {
		_type: "bool",
		_required: true
	},
	message: {
		_type: "array",
		_required: true
	},
	version: {
		_type: "string"
	}
};

GmCXt.model.rule = {
	type: {
		_type: "string"
	},
	name: {
		_type: "string"
	},
	condition: {
		_type: "string"
	},
	value: {
		_type: "string"
	},
	logical_condition: {
		_type: "string"
	},
	showValueField: {
		_type: "bool"
	},
	isValid: {
		_type: "bool"
	}
};

GmCXt.model.langOption = {
	language: {
		_type: "string",
		_default: "en-US"
	},
	name: {
		_type: "string",
		_default: "English (United States)"
	},
	voice: {
		_type: "string",
		_default: "AriaNeural"
	}
};

GmCXt.model.segment = {
	id: {
		_type: "string"
	},
	key_name: {
		_type: "string"
	},
	data: {
		_type: "array",
		_obj: {
			_arrOf: 'string'
		},
	}
};

GmCXt.model.segmentGroup = {
	group_id: {
		_type: "string"
	},
	rules: {
		_type: "array",
		_obj: GmCXt.createDeepCopy(GmCXt.model.rule)
	},
	segments: {
		_type: "array",
		_obj: GmCXt.createDeepCopy(GmCXt.model.segment)
	},
	title: {
		_type: "string"
	},
	rule_check: {
		_type: "bool",
		_default: false
	}
};

GmCXt.model.segmentGroups = {
	_type: "array",
	_obj: GmCXt.createDeepCopy(GmCXt.model.segmentGroup)
};

GmCXt.validate = function(data, prop, validation) {

	var input = data[prop];
	var val = 'a(1f2'; // added val as random string

	switch (validation._type) {
		case "array":
			var input = GmCXt.validateModelArray(input, validation._obj);
			if (input) val = input;
			break;

		case "object":
			var input = GmCXt.validateObject(input, validation);
			if (input) val = input;
			break;

		case "bool":
			if (typeof input === 'boolean') val = input;
			else {
				var i = parseInt(input);
				if (i === 1 || input === 'true') val = true;
				else val = false;
			}
			break;

		case "number":
			if (!input) val = 0;
			else if (!isNaN(input)) val = input;
			else if (isNaN(input)) val = 1; //For any value, convert it to number, default 1
			break;

		case "string":
			if (typeof input === 'string' && GmCXt.isEmpty(input) && GmCXt.isDefined(validation._default)) val = validation._default;
			else if (typeof input === 'string') val = input;
			else if (!input) val = "";
			else if (validation._default) val = validation._default;
			else if (!isNaN(input)) val = String(input);
			break;

		case "number_or_null":
			if (!isNaN(input)) val = input;
			else val = null;
			break;
	}

	return val;
};

GmCXt.getDefault = function(type, _default) {

	var def = {
		"array": [],
		//"object": {}, 
		//Do not initialise object. Because simply checking if(obj) is true. 
		//It has to be if(GmCXt.isEmpty(obj)). In code, at all places this change 
		//must be done, before initiating to default object.
		"bool": false,
		"number": 0,
		"string": ""
	};

	if (type) return (typeof _default !== "undefined") ? _default : def[type];
	else return null;
};

GmCXt.validateObject = function(data, validation) {
	data = GmCXt.parseJSON__(data);

	if (typeof data !== 'object') return false;

	if (validation._obj)
		return GmCXt.validateDataModel(data, validation._obj);
	else
		return true;
};

GmCXt.validateModelArray = function(data, model) {
	data = GmCXt.parseJSON__(data);

	if (!Array.isArray(data)) return false;

	for (var i = 0, j = data.length; i < j; i++) {
		var valid = true;
		if (model) {

			if (model._arrOf === 'string') {
				valid = data[i];
			} else {
				if (typeof data[i] === 'string') {
					data[i] = GmCXt.parseJSON__(data[i]);
				}
				valid = GmCXt.validateDataModel(data[i], model);
			}
		}

		if (!valid) return false;
		else data[i] = valid;
	}

	return data;
};

GmCXt.cloneObject = function(model) {
	var obj = {};

	if (!GmCXt.isEmpty(model)) {
		for (var prop in model) {
			if (model.hasOwnProperty(prop)) {
				obj[prop] = GmCXt.getDefault(model[prop]._type, model[prop]._default);
			}
		}
	}

	return obj;
};

GmCXt.validateLanguageData = function(data, model) {
	data = GmCXt.parseJSON__(data);
	for (var prop in data) {
		data[prop] = GmCXt.validateDataModel(data[prop], model._obj);
	}
	return data;
};

GmCXt.validateDataModel = function(data, model) {

	var isValid = true;

	if (!GmCXt.isEmpty(data)) {
		for (var prop in model) {

			if (model.hasOwnProperty(prop)) {

				if ((model[prop]._type === 'object' || model[prop]._type === 'array') && typeof data[prop] === 'string') {
					data[prop] = GmCXt.parseJSON__(data[prop]);
					if (data[prop] === null) {
						if (model[prop]._type === 'array') {
							data[prop] = [];
						} else {
							data[prop] = {};
						}
					}
				}

				if (prop === 'widget_icon_zindex' && !GmCXt.isEmpty(data[prop]) && typeof data[prop] !== 'string') {
					data[prop] = data[prop].toString();
				}

				if (prop === 'language_data') {
					data[prop] = GmCXt.validateLanguageData(data[prop], model[prop]);
				} else if (typeof data[prop] === 'undefined' ||
					(typeof data[prop] !== 'boolean' && !data[prop] && model[prop]._inherit === true) ||
					(typeof data[prop] !== 'object' && model[prop]._type == 'object' && !GmCXt.isEmpty(data[prop])) ||
					(data[prop] && typeof data[prop] === 'object' && !Object.keys(data[prop]).length && model[prop]._clone)) {

					if (model[prop]._inherit === true) {
						if (model === GmCXt.model.application.settings._obj) {
							data[prop] = GmCXt.organization.settings[prop];

						} else if (model === GmCXt.model.application.settings._obj.popupDesign._obj) {
							data[prop] = GmCXt.organization.settings.popupDesign[prop];

						} else if (model === GmCXt.model.application.settings._obj.widget_icon_pos._obj) {
							data[prop] = GmCXt.organization.settings.widget_icon_pos[prop];

						} else if (model === GmCXt.model.application.settings._obj.selectorStyle._obj) {
							data[prop] = GmCXt.organization.settings.selectorStyle[prop];

						} else if (model === GmCXt.model.application.settings._obj.widgetIconSize._obj) {
							data[prop] = GmCXt.organization.settings.widgetIconSize[prop];

						} else if (model === GmCXt.model.application.settings._obj.notifications._obj) {
							data[prop] = GmCXt.organization.settings.notifications[prop];

						} else if (model === GmCXt.model.application.settings._obj.userLabels._obj) {
							data[prop] = GmCXt.organization.settings.userLabels[prop];
						}
						
					} else if (model[prop]._type !== 'object') {
						data[prop] = GmCXt.getDefault(model[prop]._type, model[prop]._default);
					
					} else if (model[prop]._type == 'object' && model[prop]._clone) {
						data[prop] = GmCXt.cloneObject(model[prop]._obj);
						GmCXt.validateDataModel(data[prop], model[prop]._obj);
					}

				} else if ((data[prop] === null || data[prop] === 'na' || data[prop] === '') && model[prop]._type === 'object') {
					data[prop] = {};

				} else if ((data[prop] === null || data[prop] === 'na' || data[prop] === '' || data[prop] === 0) && model[prop]._type === 'array') {
					data[prop] = [];
				} else {

					var valid = GmCXt.validate(data, prop, model[prop]);

					if (valid === 'a(1f2') {

						if (model[prop]._type == 'object' && model[prop]._clone) {
							data[prop] = GmCXt.cloneObject(model[prop]._obj);
							GmCXt.validateDataModel(data[prop], model[prop]._obj);
						} else {
							GmCXt.log(15, "Validation failed for prop: " + prop + "; invalid value: ", data[prop]);
							isValid = false;
						}

					} else {
						data[prop] = valid;
					}
				}

			}
		}
	}

	if (isValid) return data;
	else return false;

};

GmCXt.validateApiResp = function(cb, apiName, data, model, pin_tours) {

	if (Array.isArray(data))
		var valid = GmCXt.validateModelArray(data, model._obj);
	else
		var valid = GmCXt.validateDataModel(data, model);

	if (valid) {
		if (cb && pin_tours) cb(valid, pin_tours);
		else if (cb) cb(valid);
	} else {
		GmCXt.handleError(apiName);
	}
};
if (GmCXt === undefined) var GmCXt = {};
if (!GmCXt.l) GmCXt.l = {};

GmCXt.l.resetAll = function() {
	GmCXt.l.logStack = {};
	GmCXt.l.currentStack = [];
	GmCXt.l.primaryInfo = [];
};

GmCXt.l.reset = function() {
	GmCXt.l.currentStack = [];
	GmCXt.l.logStack[GmCXt.id] = GmCXt.l.currentStack;
	GmCXt.l.primaryInfo = [];
};

GmCXt.l.resetAll();

GmCXt.l.addRCA = function(c, meta) {

	var rca = meta.selectorAttributes;
	if (c.precision_type === GmCXt.DOM_CRITERIA_DEFAULT && rca) {

		var attr = [];

		// Concat arrays from all selectors, i.e. js, js1, js2, etc..
		for (var key in rca) {
			attr = attr.concat(rca[key]);
		}

		// Pick unique
		attr = attr.filter(function(value, index, self) {
			return self.indexOf(value) === index;
		}).sort();

		var logStr = "[RCA] HTML structure appears to have changed since element selection. Check for presence and/or values of HTML attributes: " + attr.join(', ');

		if (c.ignoreText) {
			logStr += "\nAlso, could not find text: " + meta.textPropertyValue;
		}
		GmCXt.l.add(logStr, true);

	} else if (c.precision_type === GmCXt.DOM_CRITERIA_CUSTOM) {
		GmCXt.l.add("[RCA] Could not find element by the user provided jQuery selector", true);
	}
};

GmCXt.l.start = function(type, identifier, params, isPrimary) {

	obj = {
		'calls': [],
		'identifier': type + '_' + identifier
	};

	if (params) {
		obj.params = params;
	}

	if (GmCXt.l.currentStack.length) {

		GmCXt.l.add('START: ' + type + ' – ' + identifier, isPrimary);

		GmCXt.l.currentStack[GmCXt.l.currentStack.length - 1].calls.push(obj);
	}
	GmCXt.l.currentStack.push(obj);
};

GmCXt.l.end = function(returnValue) {

	if (returnValue) {
		GmCXt.l.currentStack[GmCXt.l.currentStack.length - 1].returnValue = returnValue;
	}

	if (returnValue === null || (typeof returnValue === 'object' && returnValue.he === null)) {
		GmCXt.l.add('null value returned by: ' + GmCXt.l.currentStack[GmCXt.l.currentStack.length - 1].identifier);
	}

	if (GmCXt.l.currentStack.length > 1) {
		GmCXt.l.currentStack.pop();
	}
};

GmCXt.l.return = function(val) {
	GmCXt.l.end(val);
	return val;
};

GmCXt.l.add = function(message, isPrimary) {

	if (!GmCXt.isEmpty(GmCXt.l.currentStack)) {
		if (GmCXt.l.currentStack[GmCXt.l.currentStack.length - 1]) {
			if (!GmCXt.l.currentStack[GmCXt.l.currentStack.length - 1].log) {
				GmCXt.l.currentStack[GmCXt.l.currentStack.length - 1].log = [message];
			} else {
				GmCXt.l.currentStack[GmCXt.l.currentStack.length - 1].log.push(message);
			}
		}

		if (isPrimary) {
			GmCXt.l.primaryInfo.push(message);
		}
	}
};

GmCXt.l.getPrimaryLogs = function() {
	return GmCXt.l.primaryInfo;
};

GmCXt.l.getLogStack = function() {

	if (Object.keys(GmCXt.l.logStack).length === 1) {
		return GmCXt.l.currentStack[0];
	}
	return GmCXt.l.logStack;
};

GmCXt.getDebugOptions = function() {
	return {
		1: "Global",
		2: "Page tracking",
		3: "Messages",
		5: "Rules engine",
		6: "Rules engine (Detailed)",
		8: "MyGuide widget",
		10: "Notification",
		12: "Matching algorithm",
		15: "API",
		16: "Features tags",
		17: "Features tags matching",
		21: "Initialisation",
		24: "LXP",
		27: "Workflow Insights",
		28: "Workflow Insights (Detailed)",
		30: "Current Page",
		33: "Workflow guide player",
		36: "Test automation",
		37: "Test automation (Detailed)",
		38: "QA Automator",
		39: "Onboarding guide",
		42: "Tooltips",
		43: "Tooltips (Detailed)",
		45: "Analytics",
		48: "Beacons",
		49: "Beacons (Detailed)",
		51: "Export tasks",
		54: "Step create/edit",
		57: "Click tracking",
		58: "Test Me",
		61: "Creator background sync",
		63: "Precedence",
		67: "Variables",
		68: "Segment Validation",
		70: "Player Background Sync",
		74: "Desktop Creator"
	};
};

GmCXt.getDebugColor = function(m) {
	var colors = {
		1: "",
		2: "#fd5e53",
		3: "#ff0066",
		5: "#21bf73",
		6: "#192965",
		8: "#faafff",
		10: "#d15a7c",
		12: "#af460f",
		15: "#ffb677",
		21: "#40bfc1",
		24: "#0f4c75",
		27: "#3029f2", // Same for 28
		30: "#52de97",
		33: "#07b513",
		36: "#8cba51",
		39: "#fe8761",
		42: "#1c819e", // Same for 43
		45: "#d89cf6",
		48: "#eb8242", // Same for 49
		51: "#9dab86",
		54: "#5f6caf",
		57: "#4681ec",
		58: "#0097a7",
		63: "#ff1a8c",
		67: "#e3564f",
		61: "#ff0066",
		70: "#ff0066",
		74: "#6600cc"
	};

	if (colors[m]) return colors[m];
	else if (colors[m - 1]) return colors[m - 1];
	else return "#010038";
};

GmCXt.debugHelp = function() {
	var str = "Debug logs are feature wise. " +
		"You can enable logs for upto 3 features at a time. Every feature logs come in different colors. " +
		"E.g. Workflow guide logs are colored in blue, while Rules engine logs are colored in yellow. ";

	console.log(str);

	console.log("Call 'GmCXt.debug(op1, op2, op3)' to enable. Where op1, op2, op3 are debug options. E.g. Call 'GmCXt.debug(1)' for global logs. 'GmCXt.debug(33, 27, 54)' for Workflow guide and Rules engine and Matching algo.");
	console.log("Call 'GmCXt.debugStop()' to disable.");	

	console.log("Call 'GmCXt.logElTracker()' – To log matching algo calls counter.");	
	console.log("Call 'GmCXt.resetElTracker()' – To reset counter to zero.");	

	console.log("Filter logs using 'Gm' to see only MyGuide logs.");

	console.log("Debug features list", GmCXt.getDebugOptions());
	
	console.log("ALWAYS remember to disable after use.");
};

GmCXt.getDebugKey = function() {
	return GmCXt.storagePrefix + 'debugMode';
};

GmCXt.initDebugMode = function() {
	GmCXt.debugMode = localStorage.getItem(GmCXt.getDebugKey());
	if (GmCXt.debugMode) {
		GmCXt.debugMode = GmCXt.debugMode.split('"').join('');
	}
	GmCXt.updateDebugMode(GmCXt.debugMode);
};

GmCXt.updateDebugMode = function(mode) {
	GmCXt.debugMode = mode;

	if (!GmCXt.isBackgroundPage) {
		var m = {
			debugMode: GmCXt.debugMode
		};

		if (GmCXt.isDefined(GmCXt.sendMessageToAllWindows)) {
			GmCXt.sendMessageToAllWindows("mgPlayerJSTest2_action:update_debug_mode", m);
		}

		if (!GmCXt.isSidePanelApp) {
			GmCXt.sendMessageToApp('mgPlayerJSTest2_action:update_debug_mode', m);
		}

		GmCXt.sendMessageToBackgroundService({
			action: 'mgPlayerJSTest2_action:update_debug_mode',
			data: m
		});

		if (GmCXt.isDefined(GmCXt.sendMessageToStepFrame)) {
			GmCXt.sendMessageToStepFrame('mgPlayerJSTest2_action:update_debug_mode', m);
		}
	}
};

GmCXt.debugStop = function() {

	if (!GmCXt.isBackgroundPage) {
		localStorage.removeItem(GmCXt.storagePrefix + 'debugMode');
	}
	GmCXt.updateDebugMode('');

	return "Logs disabled";
};

GmCXt.debug = function(m1, m2, m3) {

	var modes = GmCXt.getDebugOptions();
	var str = "";
	var mode = "";
	var invalid = "";

	if (m1) {
		if (!modes.hasOwnProperty(m1)) {
			invalid += m1;
		} else {
			mode += m1;
			str += modes[m1];
		}
	}

	if (m2) {
		if (!modes.hasOwnProperty(m2)) {
			invalid += "," + m2;
		} else {
			mode += ":" + m2;
			str += ", " + modes[m2];
		}
	}

	if (m3) {
		if (!modes.hasOwnProperty(m3)) {
			invalid += "," + m3;
		} else {
			mode += ":" + m3;
			str += ", " + modes[m3];
		}
	}

	if (invalid) {
		return 'Invalid debug mode: ' + invalid;

	} else if (mode) {

		if (!GmCXt.isBackgroundPage) {
			localStorage.setItem(GmCXt.storagePrefix + 'debugMode', mode);
		}

		GmCXt.updateDebugMode(mode);

		return "Logs enabled: " + str;
	} else {
		return "Please provide debug mode";
	}
};

GmCXt.showLogs = function(m) {

	if (!GmCXt.debugMode)
		return false;

	if (m === 1)
		return true;

	var modes = (GmCXt.debugMode + "").split(":");
	var m1 = m + 1;

	if (modes.indexOf(m + "") !== -1 || modes.indexOf(m1 + "") !== -1)
		return true;

	return false;
};

GmCXt.updateLogMetadata = function(str) {

	if (GmCXt.id)
		str = str + " [" + GmCXt.id + "]";

	return str + "[" + GmCXt.logtime() + "]";
};

GmCXt.log = function(mode, str, opt) {
	if (GmCXt.showLogs(mode)) {
		if (mode !== 12 && (GmCXt.isSidePanelApp || GmCXt.isStepFrame)) {
			GmCXt.sendMessageToPrintLog(mode, str, opt);
		} else {
			GmCXt.printLog(mode, str, opt);
		}
	}
};

GmCXt.sendMessageToPrintLog = function(m, s, o) {
	var message = {
		action: "mgPlayerJSTest2_action:print_debug_log",
		data: {
			mode: m,
			str: s,
			opt: o
		}
	};
	GmCXt.sendToParentWindow(message);
};

GmCXt.printLog = function(mode, str, opt) {

	var css = "color:" + GmCXt.getDebugColor(mode) + ";";
	var data = null;

	if (mode === 1 || opt === 1) {
		css += 'font-weight: bold;';
	}
	// opt is either bold or data object to print
	if (opt !== 1) {
		data = opt;
	}

	str = GmCXt.updateLogMetadata(str);
	str = '%c' + str;

	if (data)
		console.log(str, css, GmCXt.createDeepCopy(data));
	else
		console.log(str, css);
};

GmCXt.logArrayProp = function(mode, tours, prop) {
	if (GmCXt.showLogs(mode)) {
		for (var i = 0, len = tours.length; i < len; i++) {
			var str = (i + 1) + ") " + tours[i][prop];
			str = GmCXt.updateLogMetadata(str);
			str = '%c' + str;

			var css = "color:" + GmCXt.getDebugColor(mode) + ";";
			console.log(str, css);
		}
	}
};

GmCXt.logtime = function() {
	return (Date.now() + "").substring(7);
};

GmCXt.printMatchingAlgoLogs = function() {

	GmCXt.log(12, "Detailed logs", GmCXt.l.getLogStack());
	GmCXt.log(12, "Primary debug info", {
		logs: GmCXt.l.getPrimaryLogs()
	});
};

GmCXt.primaryErrorReport = function() {
	var str = GmCXt.l.primaryInfo.join("<br>");
	return str;
};

GmCXt.debugErrorReport = function() {
	//var str = JSON.stringify(GmCXt.l.getLogStack());
	//return str;
};
if (GmCXt === undefined) {
	var GmCXt = {};
}

GmCXt.getAppStorage = function(keys) {

	if (GmCXt.isBackgroundPage || window.top !== window.self) {

		return new Promise(function(resolve, reject) {

			var items = {};
			for (var i = 0; i < keys.length; i++) {

				var key = GmCXt.addStoragePrefix(keys[i]);
				var data = localStorage.getItem(key);

				if (data && data !== 'undefined') {
					data = GmCXt.parseJSON(data);
					items[keys[i]] = data;
				}
			}
			resolve(items);
		});
	} else {

		return new Promise(function(resolve, reject) {

			var mid = 'id' + Math.random();

			function listen(event) {
				var message = GmCXt.parseMsg(event);
				message = GmCXt.convertMgdata(message);
				if (message.data && (mid === message.data.id)) {
					if (message.action && (message.action === 'mgPlayerJSTest2_action:get_local_storage_response')) {
						window.removeEventListener('message', listen);
						resolve(message.data.items);
					}
				}
			}

			window.addEventListener('message', listen);
			var d = {
				id: mid,
				keys: keys
			};
			GmCXt.sendMessageToApp('mgPlayerJSTest2_action:get_local_storage', d);
		});
	}
};

GmCXt.setAppStorage = function(data) {

	if (GmCXt.isBackgroundPage || window.top !== window.self) {

		return new Promise(function(resolve, reject) {
			mg$.each(data, function(key, value) {
				key = GmCXt.addStoragePrefix(key);
				localStorage.setItem(key, JSON.stringify(value));
			});
			resolve();
		});
	} else {

		return new Promise(function(resolve, reject) {

			function listen(event) {
				var message = GmCXt.parseMsg(event);
				message = GmCXt.convertMgdata(message);
				if (message.action && (message.action === 'mgPlayerJSTest2_action:set_local_storage_response')) {
					window.removeEventListener('message', listen);
					resolve();
				}
			}

			window.addEventListener('message', listen);
			GmCXt.sendMessageToApp('mgPlayerJSTest2_action:set_local_storage', data);
		});
	}
};

GmCXt.removeAppStorage = function(keys) {

	if (GmCXt.isBackgroundPage || window.top !== window.self) {

		return new Promise(function(resolve, reject) {
			for (var i = 0; i < keys.length; i++) {
				keys[i] = GmCXt.addStoragePrefix(keys[i]);
				localStorage.removeItem(keys[i]);
			}
			resolve();
		});
	} else {

		return new Promise(function(resolve, reject) {

			function listen(event) {

				var message = GmCXt.parseMsg(event);
				message = GmCXt.convertMgdata(message);
				if (message.action && (message.action === 'mgPlayerJSTest2_action:remove_local_storage_response')) {
					window.removeEventListener('message', listen);
					resolve();
				}
			}

			window.addEventListener('message', listen);
			GmCXt.sendMessageToApp('mgPlayerJSTest2_action:remove_local_storage', keys);
		});
	}
};

GmCXt.getLocalStorage = function(keys) {

	return new Promise(function(resolve, reject) {

		var items = {};
		for (var i = 0; i < keys.length; i++) {
			var key = "mgLxp" + keys[i];
			var data = localStorage.getItem(key);

			if (data && data !== 'undefined') {
				data = GmCXt.parseJSON(data);
				items[keys[i]] = data;
			}
		}
		resolve(items);
	});
};

GmCXt.setLocalStorage = function(data) {

	return new Promise(function(resolve, reject) {
		mg$.each(data, function(key, value) {
			key = "mgLxp" + key;
			localStorage.setItem(key, JSON.stringify(value));
		});
		resolve();
	});
};

GmCXt.removeLocalStorage = function(keys) {
	return new Promise(function(resolve, reject) {
		for (var i = 0; i < keys.length; i++) {
			var key = "mgLxp" + keys[i];
			localStorage.removeItem(key);
		}
		resolve();
	});
};

GmCXt.getChromeStorage = function(keys) {
	var promise = new Promise(function(resolve, reject) {
		try {

			for (var i = 0; i < keys.length; i++) {
				keys[i] = GmCXt.addStoragePrefix(keys[i]);
			}

			chrome.storage.local.get(keys, function(items) {

				var d = {};
				for (var i in items) {
					var key = GmCXt.removeStoragePrefix(i);
					d[key] = items[i];
				}

				resolve(d);
			});
		} catch (e) {}
	});
	return promise;
};

GmCXt.setChromeStorage = function(data) {
	var promise = new Promise(function(resolve, reject) {
		if (data) {
			var keys = {};
			for (var d in data) {
				var key = GmCXt.addStoragePrefix(d);
				keys[key] = data[d];
			}

			try {
				chrome.storage.local.set(keys, function() {
					resolve();
				});
			} catch (e) {}
		}
	});
	return promise;
};

GmCXt.removeChromeStorage = function(data) {

	var promise = new Promise(function(resolve, reject) {
		try {
			if (data) {
				for (var i = 0; i < data.length; i++) {
					data[i] = GmCXt.addStoragePrefix(data[i]);
				}
				chrome.storage.local.remove(data, function() {
					resolve();
				});

			}
		} catch (e) {}
	});

	return promise;

};

GmCXt.storage = function(options) {
	options = options || {};
	var pub = {};

	if (GmCXt.conf && GmCXt.isExtension() && GmCXt.browserApp !== 'Safari') {

		pub.get = GmCXt.getChromeStorage;
		pub.set = GmCXt.setChromeStorage;
		pub.remove = GmCXt.removeChromeStorage;

	} else {

		if (GmCXt.isLXP()) {
			pub.get = GmCXt.getLocalStorage;
			pub.set = GmCXt.setLocalStorage;
			pub.remove = GmCXt.removeLocalStorage;
		} else {
			pub.get = GmCXt.getAppStorage;
			pub.set = GmCXt.setAppStorage;
			pub.remove = GmCXt.removeAppStorage;
		}
	}

	return pub;
};
if (GmCXt === undefined) var GmCXt = {};
var stepAudio = {};
var userPrefAudio = false;

function setAudioModeOn() {
	mg$('.mgPlayerJSTest2_play-step-audio-on').show();
	mg$('.mgPlayerJSTest2_play-step-audio-off').hide();
	mg$('.mgPlayerJSTest2_play-step-audio').addClass('playing-audio');

	if (userPrefAudio) {

		var action = "mgPlayerJSTest2_action:set_audio_storage";
		var data = {
			'stepAudioRunningStatus': true
		};
		formatAndSendToParentWindow(action, data);
	}
}

function setAudioModeOff() {
	mg$('.mgPlayerJSTest2_play-step-audio-on').hide();
	mg$('.mgPlayerJSTest2_play-step-audio-off').show();
	mg$('.mgPlayerJSTest2_play-step-audio').removeClass('playing-audio');

	if (userPrefAudio) {

		var action = "mgPlayerJSTest2_action:set_audio_storage";
		var data = {
			'stepAudioRunningStatus': false
		};
		formatAndSendToParentWindow(action, data);
	}
}

window.addEventListener('error', function(event) {
	if (event && event.target) {
		GmCXt.onImageLoadError(mg$(event.target));
	}
}, true);

if (GmCXt.requestHandler === undefined) {
	GmCXt.requestHandler = {};
}

GmCXt.requestHandler.playAudioTrack = function(message) {
	if (GmCXt.FT.audio) {
		if (message.data.playerInstance) {
			GmCXt.playerI = message.data.playerInstance;
		}
		GmCXt.playStepAudio(message.data);
	}
};

GmCXt.requestHandler.stopAudioTrack = function(message) {
	GmCXt.stopAudio();
};

window.addEventListener('message', function(event) {
	if (!GmCXt) {
		GmCXt = event.target.GmCXt;
	}
	var message = GmCXt.parseMsg(event);

	if (!message) return;
	if (!message.action || message.action.indexOf('mgPlayerJSTest2_action:') !== 0) return;
	message = GmCXt.convertMgdata(message);

	if (message.data) {

		if (message.data.config) {
			GmCXt.conf = message.data.config;
		}

		if (message.data.user && !GmCXt.isEmpty(message.data.user)) {
			GmCXt.updateGlobalUser(message.data.user);
		}

		stepAudio.tour = (message.data.tour) ? message.data.tour : {};
		stepAudio.type = (message.data.type) ? message.data.type : '';
		stepAudio.stepIndex = (message.data.stepIndex) ? message.data.stepIndex : -1;

		if (GmCXt.syncPlayerInst(message.action)) {
			if (message.data.playerInstance) {
				GmCXt.playerI = message.data.playerInstance;
			}
		}
	}

	switch (message.action) {

		case 'mgPlayerJSTest2_action:set_audio_mode_on':
			setAudioModeOn();
			break;

		case 'mgPlayerJSTest2_action:set_audio_mode_off':
			setAudioModeOff();
			break;

		case 'mgPlayerJSTest2_action:stop_audio':
			GmCXt.requestHandler.stopAudioTrack();
			break;

		case 'mgPlayerJSTest2_action:set_style_audio_icon_response':
			mg$("html:first").append(message.data.data);
			mg$('.mgPlayerJSTest2_audio-iframe-icons').removeAttr('style');
			formatAndSendToParentWindow('mgPlayerJSTest2_action:hide_pop_audio_ctrl', {});
			break;
	}

}, false);

function pauseAudio() {
	if (GmCXt.audioObject) {
		GmCXt.audioObject.pause();
	}
}

GmCXt.checkAssetUrl = function(tempUrl, url, cb) {
	if (tempUrl === url) {
		cb(tempUrl);
	} else {
		var promise = GmCXt.checkFileExist(tempUrl);
		promise.then(function() {
			cb(tempUrl);
		}).catch(function(e) {
			cb(url);
		});
	}
};

GmCXt.playStepAudio = function(message) {
	GmCXt.isPageReloaded = false;
	setAudioModeOn();
	if (!message || !message.data) {
		if (GmCXt.playerI) {
			var step = GmCXt.getCurrentStep(GmCXt.playerI.currentStepId);
			message = {
				audioTrack: step.step_audio,
				step: step
			}
		}
	}

	var audioTrack = message.audioTrack;

	var play = function(url) {
		if (url) {
			audioTrack = url;
		}
		var stepObj = message.step;

		if (GmCXt.audioObject) {
			GmCXt.audioObject.pause();
		}

		GmCXt.audioObject = new Audio(audioTrack);

		var action = "mgPlayerJSTest2_action:start_step_completion_timeout";
		var data = {
			step: stepObj
		};

		GmCXt.audioObject.onended = function() {
			// Set Complete step timeout after audio is finished
			formatAndSendToParentWindow(action, data);
		};

		var promise = GmCXt.audioObject.play();
		if (promise !== undefined) {
			promise.then(function() {
				// Autoplay started!
			}).catch(function(e) {
				// Autoplay was prevented.
				// disbaled audio button
				formatAndSendToParentWindow(action, data);
				setAudioModeOff();
			});
		}
	};

	if (audioTrack && audioTrack.indexOf('?st=') === -1) {
		audioTrack = audioTrack + GmCXt.getCdnSign();
	}

	GmCXt.checkAssetUrl(audioTrack, audioTrack, play);

};

GmCXt.stopAudio = function() {
	if (GmCXt.audioObject) GmCXt.audioObject.pause();
};

function formatAndSendToParentWindow(action, data) {

	var obj = {};
	obj.action = action;
	obj.data = data || {};

	if (GmCXt.playerI || GmCXt.playerI === null) {
		obj.data.playerInstance = GmCXt.playerI;
	}

	GmCXt.sendToParentWindow(obj);
}

mg$('.mgPlayerJSTest2_play-step-audio-on').off('click').on('click', function() {
	userPrefAudio = true;
	GmCXt.stopAudio();
	formatAndSendToParentWindow('mgPlayerJSTest2_action:stop_audio', {});
	setAudioModeOff();
});

mg$('.mgPlayerJSTest2_play-step-audio-off').off('click').on('click', function() {
	userPrefAudio = true;
	setAudioModeOn();
	if (GmCXt.playerI) {
		var step = GmCXt.getCurrentStep(GmCXt.playerI.currentStepId);
		message = {
			audioTrack: step.step_audio,
			step: step
		}
		GmCXt.isPageReloaded = false;
		GmCXt.playStepAudio(message);
	}
});

mg$(document).ready(function() {
	formatAndSendToParentWindow('mgPlayerJSTest2_action:set_style_audio_icon', {});
});