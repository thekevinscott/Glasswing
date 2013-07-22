 /* ../js/lib/less.min.js */ // hackety hack hack
var console_backup = window['console'];
window['console'] = { log : function(){} };


//
// LESS - Leaner CSS v1.3.3
// http://lesscss.org
//
// Copyright (c) 2009-2013, Alexis Sellier
// Licensed under the Apache 2.0 License.
//
(function(e,t){function n(t){return e.less[t.split("/")[1]]}function f(){r.env==="development"?(r.optimization=0,r.watchTimer=setInterval(function(){r.watchMode&&g(function(e,t,n,r,i){t&&S(t.toCSS(),r,i.lastModified)})},r.poll)):r.optimization=3}function m(){var e=document.getElementsByTagName("style");for(var t=0;t<e.length;t++)e[t].type.match(p)&&(new r.Parser({filename:document.location.href.replace(/#.*$/,""),dumpLineNumbers:r.dumpLineNumbers})).parse(e[t].innerHTML||"",function(n,r){var i=r.toCSS(),s=e[t];s.type="text/css",s.styleSheet?s.styleSheet.cssText=i:s.innerHTML=i})}function g(e,t){for(var n=0;n<r.sheets.length;n++)w(r.sheets[n],e,t,r.sheets.length-(n+1))}function y(e,t){var n=b(e),r=b(t),i,s,o,u,a="";if(n.hostPart!==r.hostPart)return"";s=Math.max(r.directories.length,n.directories.length);for(i=0;i<s;i++)if(r.directories[i]!==n.directories[i])break;u=r.directories.slice(i),o=n.directories.slice(i);for(i=0;i<u.length-1;i++)a+="../";for(i=0;i<o.length-1;i++)a+=o[i]+"/";return a}function b(e,t){var n=/^((?:[a-z-]+:)?\/\/(?:[^\/\?#]*\/)|([\/\\]))?((?:[^\/\\\?#]*[\/\\])*)([^\/\\\?#]*)([#\?].*)?$/,r=e.match(n),i={},s=[],o,u;if(!r)throw new Error("Could not parse sheet href - '"+e+"'");if(!r[1]||r[2]){u=t.match(n);if(!u)throw new Error("Could not parse page url - '"+t+"'");r[1]=u[1],r[2]||(r[3]=u[3]+r[3])}if(r[3]){s=r[3].replace("\\","/").split("/");for(o=0;o<s.length;o++)s[o]===".."&&o>0&&(s.splice(o-1,2),o-=2)}return i.hostPart=r[1],i.directories=s,i.path=r[1]+s.join("/"),i.fileUrl=i.path+(r[4]||""),i.url=i.fileUrl+(r[5]||""),i}function w(t,n,i,s){var o=t.contents||{},u=t.files||{},a=b(t.href,e.location.href),f=a.url,c=l&&l.getItem(f),h=l&&l.getItem(f+":timestamp"),p={css:c,timestamp:h},d;r.relativeUrls?r.rootpath?t.entryPath?d=b(r.rootpath+y(a.path,t.entryPath)).path:d=r.rootpath:d=a.path:r.rootpath?d=r.rootpath:t.entryPath?d=t.entryPath:d=a.path,x(f,t.type,function(e,l){v+=e.replace(/@import .+?;/ig,"");if(!i&&p&&l&&(new Date(l)).valueOf()===(new Date(p.timestamp)).valueOf())S(p.css,t),n(null,null,e,t,{local:!0,remaining:s},f);else try{o[f]=e,(new r.Parser({optimization:r.optimization,paths:[a.path],entryPath:t.entryPath||a.path,mime:t.type,filename:f,rootpath:d,relativeUrls:t.relativeUrls,contents:o,files:u,dumpLineNumbers:r.dumpLineNumbers})).parse(e,function(r,i){if(r)return k(r,f);try{n(r,i,e,t,{local:!1,lastModified:l,remaining:s},f),N(document.getElementById("less-error-message:"+E(f)))}catch(r){k(r,f)}})}catch(c){k(c,f)}},function(e,t){throw new Error("Couldn't load "+t+" ("+e+")")})}function E(e){return e.replace(/^[a-z]+:\/\/?[^\/]+/,"").replace(/^\//,"").replace(/\.[a-zA-Z]+$/,"").replace(/[^\.\w-]+/g,"-").replace(/\./g,":")}function S(e,t,n){var r,i=t.href||"",s="less:"+(t.title||E(i));if((r=document.getElementById(s))===null){r=document.createElement("style"),r.type="text/css",t.media&&(r.media=t.media),r.id=s;var o=t&&t.nextSibling||null;(o||document.getElementsByTagName("head")[0]).parentNode.insertBefore(r,o)}if(r.styleSheet)try{r.styleSheet.cssText=e}catch(u){throw new Error("Couldn't reassign styleSheet.cssText.")}else(function(e){r.childNodes.length>0?r.firstChild.nodeValue!==e.nodeValue&&r.replaceChild(e,r.firstChild):r.appendChild(e)})(document.createTextNode(e));if(n&&l){C("saving "+i+" to cache.");try{l.setItem(i,e),l.setItem(i+":timestamp",n)}catch(u){C("failed to save")}}}function x(e,t,n,i){function a(t,n,r){t.status>=200&&t.status<300?n(t.responseText,t.getResponseHeader("Last-Modified")):typeof r=="function"&&r(t.status,e)}var s=T(),u=o?r.fileAsync:r.async;typeof s.overrideMimeType=="function"&&s.overrideMimeType("text/css"),s.open("GET",e,u),s.setRequestHeader("Accept",t||"text/x-less, text/css; q=0.9, */*; q=0.5"),s.send(null),o&&!r.fileAsync?s.status===0||s.status>=200&&s.status<300?n(s.responseText):i(s.status,e):u?s.onreadystatechange=function(){s.readyState==4&&a(s,n,i)}:a(s,n,i)}function T(){if(e.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("MSXML2.XMLHTTP.3.0")}catch(t){return C("browser doesn't support AJAX."),null}}function N(e){return e&&e.parentNode.removeChild(e)}function C(e){r.env=="development"&&typeof console!="undefined"&&console.log("less: "+e)}function k(e,t){var n="less-error-message:"+E(t),i='<li><label>{line}</label><pre class="{class}">{content}</pre></li>',s=document.createElement("div"),o,u,a=[],f=e.filename||t,l=f.match(/([^\/]+(\?.*)?)$/)[1];s.id=n,s.className="less-error-message",u="<h3>"+(e.message||"There is an error in your .less file")+"</h3>"+'<p>in <a href="'+f+'">'+l+"</a> ";var c=function(e,t,n){e.extract[t]&&a.push(i.replace(/\{line\}/,parseInt(e.line)+(t-1)).replace(/\{class\}/,n).replace(/\{content\}/,e.extract[t]))};e.stack?u+="<br/>"+e.stack.split("\n").slice(1).join("<br/>"):e.extract&&(c(e,0,""),c(e,1,"line"),c(e,2,""),u+="on line "+e.line+", column "+(e.column+1)+":</p>"+"<ul>"+a.join("")+"</ul>"),s.innerHTML=u,S([".less-error-message ul, .less-error-message li {","list-style-type: none;","margin-right: 15px;","padding: 4px 0;","margin: 0;","}",".less-error-message label {","font-size: 12px;","margin-right: 15px;","padding: 4px 0;","color: #cc7777;","}",".less-error-message pre {","color: #dd6666;","padding: 4px 0;","margin: 0;","display: inline-block;","}",".less-error-message pre.line {","color: #ff0000;","}",".less-error-message h3 {","font-size: 20px;","font-weight: bold;","padding: 15px 0 5px 0;","margin: 0;","}",".less-error-message a {","color: #10a","}",".less-error-message .error {","color: red;","font-weight: bold;","padding-bottom: 2px;","border-bottom: 1px dashed red;","}"].join("\n"),{title:"error-message"}),s.style.cssText=["font-family: Arial, sans-serif","border: 1px solid #e00","background-color: #eee","border-radius: 5px","-webkit-border-radius: 5px","-moz-border-radius: 5px","color: #e00","padding: 15px","margin-bottom: 15px"].join(";"),r.env=="development"&&(o=setInterval(function(){document.body&&(document.getElementById(n)?document.body.replaceChild(s,document.getElementById(n)):document.body.insertBefore(s,document.body.firstChild),clearInterval(o))},10))}Array.isArray||(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"||e instanceof Array}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){var n=this.length>>>0;for(var r=0;r<n;r++)r in this&&e.call(t,this[r],r,this)}),Array.prototype.map||(Array.prototype.map=function(e){var t=this.length>>>0,n=new Array(t),r=arguments[1];for(var i=0;i<t;i++)i in this&&(n[i]=e.call(r,this[i],i,this));return n}),Array.prototype.filter||(Array.prototype.filter=function(e){var t=[],n=arguments[1];for(var r=0;r<this.length;r++)e.call(n,this[r])&&t.push(this[r]);return t}),Array.prototype.reduce||(Array.prototype.reduce=function(e){var t=this.length>>>0,n=0;if(t===0&&arguments.length===1)throw new TypeError;if(arguments.length>=2)var r=arguments[1];else do{if(n in this){r=this[n++];break}if(++n>=t)throw new TypeError}while(!0);for(;n<t;n++)n in this&&(r=e.call(null,r,this[n],n,this));return r}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=this.length,n=arguments[1]||0;if(!t)return-1;if(n>=t)return-1;n<0&&(n+=t);for(;n<t;n++){if(!Object.prototype.hasOwnProperty.call(this,n))continue;if(e===this[n])return n}return-1}),Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),String.prototype.trim||(String.prototype.trim=function(){return String(this).replace(/^\s\s*/,"").replace(/\s\s*$/,"")});var r,i,s;typeof environment=="object"&&{}.toString.call(environment)==="[object Environment]"?(typeof e=="undefined"?r={}:r=e.less={},i=r.tree={},r.mode="rhino"):typeof e=="undefined"?(r=exports,i=n("./tree"),r.mode="node"):(typeof e.less=="undefined"&&(e.less={}),r=e.less,i=e.less.tree={},r.mode="browser"),r.Parser=function(t){function g(){a=c[u],f=o,h=o}function y(){c[u]=a,o=f,h=o}function b(){o>h&&(c[u]=c[u].slice(o-h),h=o)}function w(e){var t=e.charCodeAt(0);return t===32||t===10||t===9}function E(e){var t,n,r,i,a;if(e instanceof Function)return e.call(p.parsers);if(typeof e=="string")t=s.charAt(o)===e?e:null,r=1,b();else{b();if(!(t=e.exec(c[u])))return null;r=t[0].length}if(t)return S(r),typeof t=="string"?t:t.length===1?t[0]:t}function S(e){var t=o,n=u,r=o+c[u].length,i=o+=e;while(o<r){if(!w(s.charAt(o)))break;o++}return c[u]=c[u].slice(e+(o-i)),h=o,c[u].length===0&&u<c.length-1&&u++,t!==o||n!==u}function x(e,t){var n=E(e);if(!!n)return n;T(t||(typeof e=="string"?"expected '"+e+"' got '"+s.charAt(o)+"'":"unexpected token"))}function T(e,t){var n=new Error(e);throw n.index=o,n.type=t||"Syntax",n}function N(e){return typeof e=="string"?s.charAt(o)===e:e.test(c[u])?!0:!1}function C(e,t){return e.filename&&t.filename&&e.filename!==t.filename?p.imports.contents[e.filename]:s}function k(e,t){for(var n=e,r=-1;n>=0&&t.charAt(n)!=="\n";n--)r++;return{line:typeof e=="number"?(t.slice(0,e).match(/\n/g)||"").length:null,column:r}}function L(e){return r.mode==="browser"||r.mode==="rhino"?e.filename:n("path").resolve(e.filename)}function A(e,t,n){return{lineNumber:k(e,t).line+1,fileName:L(n)}}function O(e,t){var n=C(e,t),r=k(e.index,n),i=r.line,s=r.column,o=n.split("\n");this.type=e.type||"Syntax",this.message=e.message,this.filename=e.filename||t.filename,this.index=e.index,this.line=typeof i=="number"?i+1:null,this.callLine=e.call&&k(e.call,n).line+1,this.callExtract=o[k(e.call,n).line],this.stack=e.stack,this.column=s,this.extract=[o[i-1],o[i],o[i+1]]}var s,o,u,a,f,l,c,h,p,d=this,t=t||{};t.contents||(t.contents={}),t.rootpath=t.rootpath||"",t.files||(t.files={});var v=function(){},m=this.imports={paths:t.paths||[],queue:[],files:t.files,contents:t.contents,mime:t.mime,error:null,push:function(e,n){var i=this;this.queue.push(e),r.Parser.importer(e,this.paths,function(t,r,s){i.queue.splice(i.queue.indexOf(e),1);var o=s in i.files;i.files[s]=r,t&&!i.error&&(i.error=t),n(t,r,o),i.queue.length===0&&v(i.error)},t)}};return this.env=t=t||{},this.optimization="optimization"in this.env?this.env.optimization:1,this.env.filename=this.env.filename||null,p={imports:m,parse:function(e,a){var f,d,m,g,y,b,w=[],S,x=null;o=u=h=l=0,s=e.replace(/\r\n/g,"\n"),s=s.replace(/^\uFEFF/,""),c=function(e){var n=0,r=/(?:@\{[\w-]+\}|[^"'`\{\}\/\(\)\\])+/g,i=/\/\*(?:[^*]|\*+[^\/*])*\*+\/|\/\/.*/g,o=/"((?:[^"\\\r\n]|\\.)*)"|'((?:[^'\\\r\n]|\\.)*)'|`((?:[^`]|\\.)*)`/g,u=0,a,f=e[0],l;for(var c=0,h,p;c<s.length;){r.lastIndex=c,(a=r.exec(s))&&a.index===c&&(c+=a[0].length,f.push(a[0])),h=s.charAt(c),i.lastIndex=o.lastIndex=c;if(a=o.exec(s))if(a.index===c){c+=a[0].length,f.push(a[0]);continue}if(!l&&h==="/"){p=s.charAt(c+1);if(p==="/"||p==="*")if(a=i.exec(s))if(a.index===c){c+=a[0].length,f.push(a[0]);continue}}switch(h){case"{":if(!l){u++,f.push(h);break};case"}":if(!l){u--,f.push(h),e[++n]=f=[];break};case"(":if(!l){l=!0,f.push(h);break};case")":if(l){l=!1,f.push(h);break};default:f.push(h)}c++}return u!=0&&(x=new O({index:c-1,type:"Parse",message:u>0?"missing closing `}`":"missing opening `{`",filename:t.filename},t)),e.map(function(e){return e.join("")})}([[]]);if(x)return a(x,t);try{f=new i.Ruleset([],E(this.parsers.primary)),f.root=!0}catch(T){return a(new O(T,t))}f.toCSS=function(e){var s,o,u;return function(s,o){var u=[],a;s=s||{},typeof o=="object"&&!Array.isArray(o)&&(o=Object.keys(o).map(function(e){var t=o[e];return t instanceof i.Value||(t instanceof i.Expression||(t=new i.Expression([t])),t=new i.Value([t])),new i.Rule("@"+e,t,!1,0)}),u=[new i.Ruleset(null,o)]);try{var f=e.call(this,{frames:u}).toCSS([],{compress:s.compress||!1,dumpLineNumbers:t.dumpLineNumbers})}catch(l){throw new O(l,t)}if(a=p.imports.error)throw a instanceof O?a:new O(a,t);return s.yuicompress&&r.mode==="node"?n("ycssmin").cssmin(f):s.compress?f.replace(/(\s)+/g,"$1"):f}}(f.eval);if(o<s.length-1){o=l,b=s.split("\n"),y=(s.slice(0,o).match(/\n/g)||"").length+1;for(var N=o,C=-1;N>=0&&s.charAt(N)!=="\n";N--)C++;x={type:"Parse",message:"Syntax Error on line "+y,index:o,filename:t.filename,line:y,column:C,extract:[b[y-2],b[y-1],b[y]]}}this.imports.queue.length>0?v=function(e){e=x||e,e?a(e):a(null,f)}:a(x,f)},parsers:{primary:function(){var e,t=[];while((e=E(this.mixin.definition)||E(this.rule)||E(this.ruleset)||E(this.mixin.call)||E(this.comment)||E(this.directive))||E(/^[\s\n]+/)||E(/^;+/))e&&t.push(e);return t},comment:function(){var e;if(s.charAt(o)!=="/")return;if(s.charAt(o+1)==="/")return new i.Comment(E(/^\/\/.*/),!0);if(e=E(/^\/\*(?:[^*]|\*+[^\/*])*\*+\/\n?/))return new i.Comment(e)},entities:{quoted:function(){var e,t=o,n;s.charAt(t)==="~"&&(t++,n=!0);if(s.charAt(t)!=='"'&&s.charAt(t)!=="'")return;n&&E("~");if(e=E(/^"((?:[^"\\\r\n]|\\.)*)"|'((?:[^'\\\r\n]|\\.)*)'/))return new i.Quoted(e[0],e[1]||e[2],n)},keyword:function(){var e;if(e=E(/^[_A-Za-z-][_A-Za-z0-9-]*/))return i.colors.hasOwnProperty(e)?new i.Color(i.colors[e].slice(1)):new i.Keyword(e)},call:function(){var e,n,r,s,a=o;if(!(e=/^([\w-]+|%|progid:[\w\.]+)\(/.exec(c[u])))return;e=e[1],n=e.toLowerCase();if(n==="url")return null;o+=e.length;if(n==="alpha"){s=E(this.alpha);if(typeof s!="undefined")return s}E("("),r=E(this.entities.arguments);if(!E(")"))return;if(e)return new i.Call(e,r,a,t.filename)},arguments:function(){var e=[],t;while(t=E(this.entities.assignment)||E(this.expression)){e.push(t);if(!E(","))break}return e},literal:function(){return E(this.entities.ratio)||E(this.entities.dimension)||E(this.entities.color)||E(this.entities.quoted)||E(this.entities.unicodeDescriptor)},assignment:function(){var e,t;if((e=E(/^\w+(?=\s?=)/i))&&E("=")&&(t=E(this.entity)))return new i.Assignment(e,t)},url:function(){var e;if(s.charAt(o)!=="u"||!E(/^url\(/))return;return e=E(this.entities.quoted)||E(this.entities.variable)||E(/^(?:(?:\\[\(\)'"])|[^\(\)'"])+/)||"",x(")"),new i.URL(e.value!=null||e instanceof i.Variable?e:new i.Anonymous(e),t.rootpath)},variable:function(){var e,n=o;if(s.charAt(o)==="@"&&(e=E(/^@@?[\w-]+/)))return new i.Variable(e,n,t.filename)},variableCurly:function(){var e,n,r=o;if(s.charAt(o)==="@"&&(n=E(/^@\{([\w-]+)\}/)))return new i.Variable("@"+n[1],r,t.filename)},color:function(){var e;if(s.charAt(o)==="#"&&(e=E(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/)))return new i.Color(e[1])},dimension:function(){var e,t=s.charCodeAt(o);if(t>57||t<43||t===47||t==44)return;if(e=E(/^([+-]?\d*\.?\d+)(px|%|em|pc|ex|in|deg|s|ms|pt|cm|mm|rad|grad|turn|dpi|dpcm|dppx|rem|vw|vh|vmin|vm|ch)?/))return new i.Dimension(e[1],e[2])},ratio:function(){var e,t=s.charCodeAt(o);if(t>57||t<48)return;if(e=E(/^(\d+\/\d+)/))return new i.Ratio(e[1])},unicodeDescriptor:function(){var e;if(e=E(/^U\+[0-9a-fA-F?]+(\-[0-9a-fA-F?]+)?/))return new i.UnicodeDescriptor(e[0])},javascript:function(){var e,t=o,n;s.charAt(t)==="~"&&(t++,n=!0);if(s.charAt(t)!=="`")return;n&&E("~");if(e=E(/^`([^`]*)`/))return new i.JavaScript(e[1],o,n)}},variable:function(){var e;if(s.charAt(o)==="@"&&(e=E(/^(@[\w-]+)\s*:/)))return e[1]},shorthand:function(){var e,t;if(!N(/^[@\w.%-]+\/[@\w.-]+/))return;g();if((e=E(this.entity))&&E("/")&&(t=E(this.entity)))return new i.Shorthand(e,t);y()},mixin:{call:function(){var e=[],n,r,u=[],a=[],f,l,c,h,p,d,v,m=o,b=s.charAt(o),w,S,C=!1;if(b!=="."&&b!=="#")return;g();while(n=E(/^[#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/))e.push(new i.Element(r,n,o)),r=E(">");if(E("(")){p=[];while(c=E(this.expression)){h=null,S=c;if(c.value.length==1){var k=c.value[0];k instanceof i.Variable&&E(":")&&(p.length>0&&(d&&T("Cannot mix ; and , as delimiter types"),v=!0),S=x(this.expression),h=w=k.name)}p.push(S),a.push({name:h,value:S});if(E(","))continue;if(E(";")||d)v&&T("Cannot mix ; and , as delimiter types"),d=!0,p.length>1&&(S=new i.Value(p)),u.push({name:w,value:S}),w=null,p=[],v=!1}x(")")}f=d?u:a,E(this.important)&&(C=!0);if(e.length>0&&(E(";")||N("}")))return new i.mixin.Call(e,f,m,t.filename,C);y()},definition:function(){var e,t=[],n,r,u,a,f,c=!1;if(s.charAt(o)!=="."&&s.charAt(o)!=="#"||N(/^[^{]*\}/))return;g();if(n=E(/^([#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+)\s*\(/)){e=n[1];do{E(this.comment);if(s.charAt(o)==="."&&E(/^\.{3}/)){c=!0,t.push({variadic:!0});break}if(!(u=E(this.entities.variable)||E(this.entities.literal)||E(this.entities.keyword)))break;if(u instanceof i.Variable)if(E(":"))a=x(this.expression,"expected expression"),t.push({name:u.name,value:a});else{if(E(/^\.{3}/)){t.push({name:u.name,variadic:!0}),c=!0;break}t.push({name:u.name})}else t.push({value:u})}while(E(",")||E(";"));E(")")||(l=o,y()),E(this.comment),E(/^when/)&&(f=x(this.conditions,"expected condition")),r=E(this.block);if(r)return new i.mixin.Definition(e,t,r,f,c);y()}}},entity:function(){return E(this.entities.literal)||E(this.entities.variable)||E(this.entities.url)||E(this.entities.call)||E(this.entities.keyword)||E(this.entities.javascript)||E(this.comment)},end:function(){return E(";")||N("}")},alpha:function(){var e;if(!E(/^\(opacity=/i))return;if(e=E(/^\d+/)||E(this.entities.variable))return x(")"),new i.Alpha(e)},element:function(){var e,t,n,r;n=E(this.combinator),e=E(/^(?:\d+\.\d+|\d+)%/)||E(/^(?:[.#]?|:*)(?:[\w-]|[^\x00-\x9f]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/)||E("*")||E("&")||E(this.attribute)||E(/^\([^()@]+\)/)||E(/^[\.#](?=@)/)||E(this.entities.variableCurly),e||E("(")&&(r=E(this.entities.variableCurly)||E(this.entities.variable)||E(this.selector))&&E(")")&&(e=new i.Paren(r));if(e)return new i.Element(n,e,o)},combinator:function(){var e,t=s.charAt(o);if(t===">"||t==="+"||t==="~"||t==="|"){o++;while(s.charAt(o).match(/\s/))o++;return new i.Combinator(t)}return s.charAt(o-1).match(/\s/)?new i.Combinator(" "):new i.Combinator(null)},selector:function(){var e,t,n=[],r,u;if(E("("))return e=E(this.entity),E(")")?new i.Selector([new i.Element("",e,o)]):null;while(t=E(this.element)){r=s.charAt(o),n.push(t);if(r==="{"||r==="}"||r===";"||r===","||r===")")break}if(n.length>0)return new i.Selector(n)},attribute:function(){var e="",t,n,r;if(!E("["))return;if(t=E(/^(?:[_A-Za-z0-9-]|\\.)+/)||E(this.entities.quoted))(r=E(/^[|~*$^]?=/))&&(n=E(this.entities.quoted)||E(/^[\w-]+/))?e=[t,r,n.toCSS?n.toCSS():n].join(""):e=t;if(!E("]"))return;if(e)return"["+e+"]"},block:function(){var e;if(E("{")&&(e=E(this.primary))&&E("}"))return e},ruleset:function(){var e=[],n,r,u,a;g(),t.dumpLineNumbers&&(a=A(o,s,t));while(n=E(this.selector)){e.push(n),E(this.comment);if(!E(","))break;E(this.comment)}if(e.length>0&&(r=E(this.block))){var f=new i.Ruleset(e,r,t.strictImports);return t.dumpLineNumbers&&(f.debugInfo=a),f}l=o,y()},rule:function(){var e,t,n=s.charAt(o),r,a;g();if(n==="."||n==="#"||n==="&")return;if(e=E(this.variable)||E(this.property)){e.charAt(0)!="@"&&(a=/^([^@+\/'"*`(;{}-]*);/.exec(c[u]))?(o+=a[0].length-1,t=new i.Anonymous(a[1])):e==="font"?t=E(this.font):t=E(this.value),r=E(this.important);if(t&&E(this.end))return new i.Rule(e,t,r,f);l=o,y()}},"import":function(){var e,n,r=o;g();var s=E(/^@import(?:-(once))?\s+/);if(s&&(e=E(this.entities.quoted)||E(this.entities.url))){n=E(this.mediaFeatures);if(E(";"))return new i.Import(e,m,n,s[1]==="once",r,t.rootpath)}y()},mediaFeature:function(){var e,t,n=[];do if(e=E(this.entities.keyword))n.push(e);else if(E("(")){t=E(this.property),e=E(this.entity);if(!E(")"))return null;if(t&&e)n.push(new i.Paren(new i.Rule(t,e,null,o,!0)));else{if(!e)return null;n.push(new i.Paren(e))}}while(e);if(n.length>0)return new i.Expression(n)},mediaFeatures:function(){var e,t=[];do if(e=E(this.mediaFeature)){t.push(e);if(!E(","))break}else if(e=E(this.entities.variable)){t.push(e);if(!E(","))break}while(e);return t.length>0?t:null},media:function(){var e,n,r,u;t.dumpLineNumbers&&(u=A(o,s,t));if(E(/^@media/)){e=E(this.mediaFeatures);if(n=E(this.block))return r=new i.Media(n,e),t.dumpLineNumbers&&(r.debugInfo=u),r}},directive:function(){var e,n,r,u,a,f,l,c,h,p;if(s.charAt(o)!=="@")return;if(n=E(this["import"])||E(this.media))return n;g(),e=E(/^@[a-z-]+/);if(!e)return;l=e,e.charAt(1)=="-"&&e.indexOf("-",2)>0&&(l="@"+e.slice(e.indexOf("-",2)+1));switch(l){case"@font-face":c=!0;break;case"@viewport":case"@top-left":case"@top-left-corner":case"@top-center":case"@top-right":case"@top-right-corner":case"@bottom-left":case"@bottom-left-corner":case"@bottom-center":case"@bottom-right":case"@bottom-right-corner":case"@left-top":case"@left-middle":case"@left-bottom":case"@right-top":case"@right-middle":case"@right-bottom":c=!0;break;case"@page":case"@document":case"@supports":case"@keyframes":c=!0,h=!0;break;case"@namespace":p=!0}h&&(e+=" "+(E(/^[^{]+/)||"").trim());if(c){if(r=E(this.block))return new i.Directive(e,r)}else if((n=p?E(this.expression):E(this.entity))&&E(";")){var d=new i.Directive(e,n);return t.dumpLineNumbers&&(d.debugInfo=A(o,s,t)),d}y()},font:function(){var e=[],t=[],n,r,s,o;while(o=E(this.shorthand)||E(this.entity))t.push(o);e.push(new i.Expression(t));if(E(","))while(o=E(this.expression)){e.push(o);if(!E(","))break}return new i.Value(e)},value:function(){var e,t=[],n;while(e=E(this.expression)){t.push(e);if(!E(","))break}if(t.length>0)return new i.Value(t)},important:function(){if(s.charAt(o)==="!")return E(/^! *important/)},sub:function(){var e;if(E("(")&&(e=E(this.expression))&&E(")"))return e},multiplication:function(){var e,t,n,r;if(e=E(this.operand)){while(!N(/^\/[*\/]/)&&(n=E("/")||E("*"))&&(t=E(this.operand)))r=new i.Operation(n,[r||e,t]);return r||e}},addition:function(){var e,t,n,r;if(e=E(this.multiplication)){while((n=E(/^[-+]\s+/)||!w(s.charAt(o-1))&&(E("+")||E("-")))&&(t=E(this.multiplication)))r=new i.Operation(n,[r||e,t]);return r||e}},conditions:function(){var e,t,n=o,r;if(e=E(this.condition)){while(E(",")&&(t=E(this.condition)))r=new i.Condition("or",r||e,t,n);return r||e}},condition:function(){var e,t,n,r,s=o,u=!1;E(/^not/)&&(u=!0),x("(");if(e=E(this.addition)||E(this.entities.keyword)||E(this.entities.quoted))return(r=E(/^(?:>=|=<|[<=>])/))?(t=E(this.addition)||E(this.entities.keyword)||E(this.entities.quoted))?n=new i.Condition(r,e,t,s,u):T("expected expression"):n=new i.Condition("=",e,new i.Keyword("true"),s,u),x(")"),E(/^and/)?new i.Condition("and",n,E(this.condition)):n},operand:function(){var e,t=s.charAt(o+1);s.charAt(o)==="-"&&(t==="@"||t==="(")&&(e=E("-"));var n=E(this.sub)||E(this.entities.dimension)||E(this.entities.color)||E(this.entities.variable)||E(this.entities.call);return e?new i.Operation("*",[new i.Dimension(-1),n]):n},expression:function(){var e,t,n=[],r;while(e=E(this.addition)||E(this.entity))n.push(e);if(n.length>0)return new i.Expression(n)},property:function(){var e;if(e=E(/^(\*?-?[_a-z0-9-]+)\s*:/))return e[1]}}}};if(r.mode==="browser"||r.mode==="rhino")r.Parser.importer=function(e,t,n,r){!/^([a-z-]+:)?\//.test(e)&&t.length>0&&(e=t[0]+e),w({href:e,title:e,type:r.mime,contents:r.contents,files:r.files,rootpath:r.rootpath,entryPath:r.entryPath,relativeUrls:r.relativeUrls},function(e,i,s,o,u,a){e&&typeof r.errback=="function"?r.errback.call(null,a,t,n,r):n.call(null,e,i,a)},!0)};(function(e){function t(t){return e.functions.hsla(t.h,t.s,t.l,t.a)}function n(t,n){return t instanceof e.Dimension&&t.unit=="%"?parseFloat(t.value*n/100):r(t)}function r(t){if(t instanceof e.Dimension)return parseFloat(t.unit=="%"?t.value/100:t.value);if(typeof t=="number")return t;throw{error:"RuntimeError",message:"color functions take numbers as parameters"}}function i(e){return Math.min(1,Math.max(0,e))}e.functions={rgb:function(e,t,n){return this.rgba(e,t,n,1)},rgba:function(t,i,s,o){var u=[t,i,s].map(function(e){return n(e,256)});return o=r(o),new e.Color(u,o)},hsl:function(e,t,n){return this.hsla(e,t,n,1)},hsla:function(e,t,n,i){function u(e){return e=e<0?e+1:e>1?e-1:e,e*6<1?o+(s-o)*e*6:e*2<1?s:e*3<2?o+(s-o)*(2/3-e)*6:o}e=r(e)%360/360,t=r(t),n=r(n),i=r(i);var s=n<=.5?n*(t+1):n+t-n*t,o=n*2-s;return this.rgba(u(e+1/3)*255,u(e)*255,u(e-1/3)*255,i)},hsv:function(e,t,n){return this.hsva(e,t,n,1)},hsva:function(e,t,n,i){e=r(e)%360/360*360,t=r(t),n=r(n),i=r(i);var s,o;s=Math.floor(e/60%6),o=e/60-s;var u=[n,n*(1-t),n*(1-o*t),n*(1-(1-o)*t)],a=[[0,3,1],[2,0,1],[1,0,3],[1,2,0],[3,1,0],[0,1,2]];return this.rgba(u[a[s][0]]*255,u[a[s][1]]*255,u[a[s][2]]*255,i)},hue:function(t){return new e.Dimension(Math.round(t.toHSL().h))},saturation:function(t){return new e.Dimension(Math.round(t.toHSL().s*100),"%")},lightness:function(t){return new e.Dimension(Math.round(t.toHSL().l*100),"%")},red:function(t){return new e.Dimension(t.rgb[0])},green:function(t){return new e.Dimension(t.rgb[1])},blue:function(t){return new e.Dimension(t.rgb[2])},alpha:function(t){return new e.Dimension(t.toHSL().a)},luma:function(t){return new e.Dimension(Math.round((.2126*(t.rgb[0]/255)+.7152*(t.rgb[1]/255)+.0722*(t.rgb[2]/255))*t.alpha*100),"%")},saturate:function(e,n){var r=e.toHSL();return r.s+=n.value/100,r.s=i(r.s),t(r)},desaturate:function(e,n){var r=e.toHSL();return r.s-=n.value/100,r.s=i(r.s),t(r)},lighten:function(e,n){var r=e.toHSL();return r.l+=n.value/100,r.l=i(r.l),t(r)},darken:function(e,n){var r=e.toHSL();return r.l-=n.value/100,r.l=i(r.l),t(r)},fadein:function(e,n){var r=e.toHSL();return r.a+=n.value/100,r.a=i(r.a),t(r)},fadeout:function(e,n){var r=e.toHSL();return r.a-=n.value/100,r.a=i(r.a),t(r)},fade:function(e,n){var r=e.toHSL();return r.a=n.value/100,r.a=i(r.a),t(r)},spin:function(e,n){var r=e.toHSL(),i=(r.h+n.value)%360;return r.h=i<0?360+i:i,t(r)},mix:function(t,n,r){r||(r=new e.Dimension(50));var i=r.value/100,s=i*2-1,o=t.toHSL().a-n.toHSL().a,u=((s*o==-1?s:(s+o)/(1+s*o))+1)/2,a=1-u,f=[t.rgb[0]*u+n.rgb[0]*a,t.rgb[1]*u+n.rgb[1]*a,t.rgb[2]*u+n.rgb[2]*a],l=t.alpha*i+n.alpha*(1-i);return new e.Color(f,l)},greyscale:function(t){return this.desaturate(t,new e.Dimension(100))},contrast:function(e,t,n,r){return e.rgb?(typeof n=="undefined"&&(n=this.rgba(255,255,255,1)),typeof t=="undefined"&&(t=this.rgba(0,0,0,1)),typeof r=="undefined"?r=.43:r=r.value,(.2126*(e.rgb[0]/255)+.7152*(e.rgb[1]/255)+.0722*(e.rgb[2]/255))*e.alpha<r?n:t):null},e:function(t){return new e.Anonymous(t instanceof e.JavaScript?t.evaluated:t)},escape:function(t){return new e.Anonymous(encodeURI(t.value).replace(/=/g,"%3D").replace(/:/g,"%3A").replace(/#/g,"%23").replace(/;/g,"%3B").replace(/\(/g,"%28").replace(/\)/g,"%29"))},"%":function(t){var n=Array.prototype.slice.call(arguments,1),r=t.value;for(var i=0;i<n.length;i++)r=r.replace(/%[sda]/i,function(e){var t=e.match(/s/i)?n[i].value:n[i].toCSS();return e.match(/[A-Z]$/)?encodeURIComponent(t):t});return r=r.replace(/%%/g,"%"),new e.Quoted('"'+r+'"',r)},unit:function(t,n){return new e.Dimension(t.value,n?n.toCSS():"")},round:function(e,t){var n=typeof t=="undefined"?0:t.value;return this._math(function(e){return e.toFixed(n)},e)},ceil:function(e){return this._math(Math.ceil,e)},floor:function(e){return this._math(Math.floor,e)},_math:function(t,n){if(n instanceof e.Dimension)return new e.Dimension(t(parseFloat(n.value)),n.unit);if(typeof n=="number")return t(n);throw{type:"Argument",message:"argument must be a number"}},argb:function(t){return new e.Anonymous(t.toARGB())},percentage:function(t){return new e.Dimension(t.value*100,"%")},color:function(t){if(t instanceof e.Quoted)return new e.Color(t.value.slice(1));throw{type:"Argument",message:"argument must be a string"}},iscolor:function(t){return this._isa(t,e.Color)},isnumber:function(t){return this._isa(t,e.Dimension)},isstring:function(t){return this._isa(t,e.Quoted)},iskeyword:function(t){return this._isa(t,e.Keyword)},isurl:function(t){return this._isa(t,e.URL)},ispixel:function(t){return t instanceof e.Dimension&&t.unit==="px"?e.True:e.False},ispercentage:function(t){return t instanceof e.Dimension&&t.unit==="%"?e.True:e.False},isem:function(t){return t instanceof e.Dimension&&t.unit==="em"?e.True:e.False},_isa:function(t,n){return t instanceof n?e.True:e.False},multiply:function(e,t){var n=e.rgb[0]*t.rgb[0]/255,r=e.rgb[1]*t.rgb[1]/255,i=e.rgb[2]*t.rgb[2]/255;return this.rgb(n,r,i)},screen:function(e,t){var n=255-(255-e.rgb[0])*(255-t.rgb[0])/255,r=255-(255-e.rgb[1])*(255-t.rgb[1])/255,i=255-(255-e.rgb[2])*(255-t.rgb[2])/255;return this.rgb(n,r,i)},overlay:function(e,t){var n=e.rgb[0]<128?2*e.rgb[0]*t.rgb[0]/255:255-2*(255-e.rgb[0])*(255-t.rgb[0])/255,r=e.rgb[1]<128?2*e.rgb[1]*t.rgb[1]/255:255-2*(255-e.rgb[1])*(255-t.rgb[1])/255,i=e.rgb[2]<128?2*e.rgb[2]*t.rgb[2]/255:255-2*(255-e.rgb[2])*(255-t.rgb[2])/255;return this.rgb(n,r,i)},softlight:function(e,t){var n=t.rgb[0]*e.rgb[0]/255,r=n+e.rgb[0]*(255-(255-e.rgb[0])*(255-t.rgb[0])/255-n)/255;n=t.rgb[1]*e.rgb[1]/255;var i=n+e.rgb[1]*(255-(255-e.rgb[1])*(255-t.rgb[1])/255-n)/255;n=t.rgb[2]*e.rgb[2]/255;var s=n+e.rgb[2]*(255-(255-e.rgb[2])*(255-t.rgb[2])/255-n)/255;return this.rgb(r,i,s)},hardlight:function(e,t){var n=t.rgb[0]<128?2*t.rgb[0]*e.rgb[0]/255:255-2*(255-t.rgb[0])*(255-e.rgb[0])/255,r=t.rgb[1]<128?2*t.rgb[1]*e.rgb[1]/255:255-2*(255-t.rgb[1])*(255-e.rgb[1])/255,i=t.rgb[2]<128?2*t.rgb[2]*e.rgb[2]/255:255-2*(255-t.rgb[2])*(255-e.rgb[2])/255;return this.rgb(n,r,i)},difference:function(e,t){var n=Math.abs(e.rgb[0]-t.rgb[0]),r=Math.abs(e.rgb[1]-t.rgb[1]),i=Math.abs(e.rgb[2]-t.rgb[2]);return this.rgb(n,r,i)},exclusion:function(e,t){var n=e.rgb[0]+t.rgb[0]*(255-e.rgb[0]-e.rgb[0])/255,r=e.rgb[1]+t.rgb[1]*(255-e.rgb[1]-e.rgb[1])/255,i=e.rgb[2]+t.rgb[2]*(255-e.rgb[2]-e.rgb[2])/255;return this.rgb(n,r,i)},average:function(e,t){var n=(e.rgb[0]+t.rgb[0])/2,r=(e.rgb[1]+t.rgb[1])/2,i=(e.rgb[2]+t.rgb[2])/2;return this.rgb(n,r,i)},negation:function(e,t){var n=255-Math.abs(255-t.rgb[0]-e.rgb[0]),r=255-Math.abs(255-t.rgb[1]-e.rgb[1]),i=255-Math.abs(255-t.rgb[2]-e.rgb[2]);return this.rgb(n,r,i)},tint:function(e,t){return this.mix(this.rgb(255,255,255),e,t)},shade:function(e,t){return this.mix(this.rgb(0,0,0),e,t)}}})(n("./tree")),function(e){e.colors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen
:"#9acd32"}}(n("./tree")),function(e){e.Alpha=function(e){this.value=e},e.Alpha.prototype={toCSS:function(){return"alpha(opacity="+(this.value.toCSS?this.value.toCSS():this.value)+")"},eval:function(e){return this.value.eval&&(this.value=this.value.eval(e)),this}}}(n("../tree")),function(e){e.Anonymous=function(e){this.value=e.value||e},e.Anonymous.prototype={toCSS:function(){return this.value},eval:function(){return this},compare:function(e){if(!e.toCSS)return-1;var t=this.toCSS(),n=e.toCSS();return t===n?0:t<n?-1:1}}}(n("../tree")),function(e){e.Assignment=function(e,t){this.key=e,this.value=t},e.Assignment.prototype={toCSS:function(){return this.key+"="+(this.value.toCSS?this.value.toCSS():this.value)},eval:function(t){return this.value.eval?new e.Assignment(this.key,this.value.eval(t)):this}}}(n("../tree")),function(e){e.Call=function(e,t,n,r){this.name=e,this.args=t,this.index=n,this.filename=r},e.Call.prototype={eval:function(t){var n=this.args.map(function(e){return e.eval(t)}),r;if(this.name in e.functions)try{r=e.functions[this.name].apply(e.functions,n);if(r!=null)return r}catch(i){throw{type:i.type||"Runtime",message:"error evaluating function `"+this.name+"`"+(i.message?": "+i.message:""),index:this.index,filename:this.filename}}return new e.Anonymous(this.name+"("+n.map(function(e){return e.toCSS(t)}).join(", ")+")")},toCSS:function(e){return this.eval(e).toCSS()}}}(n("../tree")),function(e){e.Color=function(e,t){Array.isArray(e)?this.rgb=e:e.length==6?this.rgb=e.match(/.{2}/g).map(function(e){return parseInt(e,16)}):this.rgb=e.split("").map(function(e){return parseInt(e+e,16)}),this.alpha=typeof t=="number"?t:1},e.Color.prototype={eval:function(){return this},toCSS:function(){return this.alpha<1?"rgba("+this.rgb.map(function(e){return Math.round(e)}).concat(this.alpha).join(", ")+")":"#"+this.rgb.map(function(e){return e=Math.round(e),e=(e>255?255:e<0?0:e).toString(16),e.length===1?"0"+e:e}).join("")},operate:function(t,n){var r=[];n instanceof e.Color||(n=n.toColor());for(var i=0;i<3;i++)r[i]=e.operate(t,this.rgb[i],n.rgb[i]);return new e.Color(r,this.alpha+n.alpha)},toHSL:function(){var e=this.rgb[0]/255,t=this.rgb[1]/255,n=this.rgb[2]/255,r=this.alpha,i=Math.max(e,t,n),s=Math.min(e,t,n),o,u,a=(i+s)/2,f=i-s;if(i===s)o=u=0;else{u=a>.5?f/(2-i-s):f/(i+s);switch(i){case e:o=(t-n)/f+(t<n?6:0);break;case t:o=(n-e)/f+2;break;case n:o=(e-t)/f+4}o/=6}return{h:o*360,s:u,l:a,a:r}},toARGB:function(){var e=[Math.round(this.alpha*255)].concat(this.rgb);return"#"+e.map(function(e){return e=Math.round(e),e=(e>255?255:e<0?0:e).toString(16),e.length===1?"0"+e:e}).join("")},compare:function(e){return e.rgb?e.rgb[0]===this.rgb[0]&&e.rgb[1]===this.rgb[1]&&e.rgb[2]===this.rgb[2]&&e.alpha===this.alpha?0:-1:-1}}}(n("../tree")),function(e){e.Comment=function(e,t){this.value=e,this.silent=!!t},e.Comment.prototype={toCSS:function(e){return e.compress?"":this.value},eval:function(){return this}}}(n("../tree")),function(e){e.Condition=function(e,t,n,r,i){this.op=e.trim(),this.lvalue=t,this.rvalue=n,this.index=r,this.negate=i},e.Condition.prototype.eval=function(e){var t=this.lvalue.eval(e),n=this.rvalue.eval(e),r=this.index,i,i=function(e){switch(e){case"and":return t&&n;case"or":return t||n;default:if(t.compare)i=t.compare(n);else{if(!n.compare)throw{type:"Type",message:"Unable to perform comparison",index:r};i=n.compare(t)}switch(i){case-1:return e==="<"||e==="=<";case 0:return e==="="||e===">="||e==="=<";case 1:return e===">"||e===">="}}}(this.op);return this.negate?!i:i}}(n("../tree")),function(e){e.Dimension=function(e,t){this.value=parseFloat(e),this.unit=t||null},e.Dimension.prototype={eval:function(){return this},toColor:function(){return new e.Color([this.value,this.value,this.value])},toCSS:function(){var e=this.value+this.unit;return e},operate:function(t,n){return new e.Dimension(e.operate(t,this.value,n.value),this.unit||n.unit)},compare:function(t){return t instanceof e.Dimension?t.value>this.value?-1:t.value<this.value?1:t.unit&&this.unit!==t.unit?-1:0:-1}}}(n("../tree")),function(e){e.Directive=function(t,n){this.name=t,Array.isArray(n)?(this.ruleset=new e.Ruleset([],n),this.ruleset.allowImports=!0):this.value=n},e.Directive.prototype={toCSS:function(e,t){return this.ruleset?(this.ruleset.root=!0,this.name+(t.compress?"{":" {\n  ")+this.ruleset.toCSS(e,t).trim().replace(/\n/g,"\n  ")+(t.compress?"}":"\n}\n")):this.name+" "+this.value.toCSS()+";\n"},eval:function(t){var n=this;return this.ruleset&&(t.frames.unshift(this),n=new e.Directive(this.name),n.ruleset=this.ruleset.eval(t),t.frames.shift()),n},variable:function(t){return e.Ruleset.prototype.variable.call(this.ruleset,t)},find:function(){return e.Ruleset.prototype.find.apply(this.ruleset,arguments)},rulesets:function(){return e.Ruleset.prototype.rulesets.apply(this.ruleset)}}}(n("../tree")),function(e){e.Element=function(t,n,r){this.combinator=t instanceof e.Combinator?t:new e.Combinator(t),typeof n=="string"?this.value=n.trim():n?this.value=n:this.value="",this.index=r},e.Element.prototype.eval=function(t){return new e.Element(this.combinator,this.value.eval?this.value.eval(t):this.value,this.index)},e.Element.prototype.toCSS=function(e){var t=this.value.toCSS?this.value.toCSS(e):this.value;return t==""&&this.combinator.value.charAt(0)=="&"?"":this.combinator.toCSS(e||{})+t},e.Combinator=function(e){e===" "?this.value=" ":this.value=e?e.trim():""},e.Combinator.prototype.toCSS=function(e){return{"":""," ":" ",":":" :","+":e.compress?"+":" + ","~":e.compress?"~":" ~ ",">":e.compress?">":" > ","|":e.compress?"|":" | "}[this.value]}}(n("../tree")),function(e){e.Expression=function(e){this.value=e},e.Expression.prototype={eval:function(t){return this.value.length>1?new e.Expression(this.value.map(function(e){return e.eval(t)})):this.value.length===1?this.value[0].eval(t):this},toCSS:function(e){return this.value.map(function(t){return t.toCSS?t.toCSS(e):""}).join(" ")}}}(n("../tree")),function(e){e.Import=function(t,n,r,i,s,o){var u=this;this.once=i,this.index=s,this._path=t,this.features=r&&new e.Value(r),this.rootpath=o,t instanceof e.Quoted?this.path=/(\.[a-z]*$)|([\?;].*)$/.test(t.value)?t.value:t.value+".less":this.path=t.value.value||t.value,this.css=/css([\?;].*)?$/.test(this.path),this.css||n.push(this.path,function(t,n,r){t&&(t.index=s),r&&u.once&&(u.skip=r),u.root=n||new e.Ruleset([],[])})},e.Import.prototype={toCSS:function(e){var t=this.features?" "+this.features.toCSS(e):"";return this.css?(typeof this._path.value=="string"&&!/^(?:[a-z-]+:|\/)/.test(this._path.value)&&(this._path.value=this.rootpath+this._path.value),"@import "+this._path.toCSS()+t+";\n"):""},eval:function(t){var n,r=this.features&&this.features.eval(t);return this.skip?[]:this.css?this:(n=new e.Ruleset([],this.root.rules.slice(0)),n.evalImports(t),this.features?new e.Media(n.rules,this.features.value):n.rules)}}}(n("../tree")),function(e){e.JavaScript=function(e,t,n){this.escaped=n,this.expression=e,this.index=t},e.JavaScript.prototype={eval:function(t){var n,r=this,i={},s=this.expression.replace(/@\{([\w-]+)\}/g,function(n,i){return e.jsify((new e.Variable("@"+i,r.index)).eval(t))});try{s=new Function("return ("+s+")")}catch(o){throw{message:"JavaScript evaluation error: `"+s+"`",index:this.index}}for(var u in t.frames[0].variables())i[u.slice(1)]={value:t.frames[0].variables()[u].value,toJS:function(){return this.value.eval(t).toCSS()}};try{n=s.call(i)}catch(o){throw{message:"JavaScript evaluation error: '"+o.name+": "+o.message+"'",index:this.index}}return typeof n=="string"?new e.Quoted('"'+n+'"',n,this.escaped,this.index):Array.isArray(n)?new e.Anonymous(n.join(", ")):new e.Anonymous(n)}}}(n("../tree")),function(e){e.Keyword=function(e){this.value=e},e.Keyword.prototype={eval:function(){return this},toCSS:function(){return this.value},compare:function(t){return t instanceof e.Keyword?t.value===this.value?0:1:-1}},e.True=new e.Keyword("true"),e.False=new e.Keyword("false")}(n("../tree")),function(e){e.Media=function(t,n){var r=this.emptySelectors();this.features=new e.Value(n),this.ruleset=new e.Ruleset(r,t),this.ruleset.allowImports=!0},e.Media.prototype={toCSS:function(e,t){var n=this.features.toCSS(t);return this.ruleset.root=e.length===0||e[0].multiMedia,"@media "+n+(t.compress?"{":" {\n  ")+this.ruleset.toCSS(e,t).trim().replace(/\n/g,"\n  ")+(t.compress?"}":"\n}\n")},eval:function(t){t.mediaBlocks||(t.mediaBlocks=[],t.mediaPath=[]);var n=new e.Media([],[]);return this.debugInfo&&(this.ruleset.debugInfo=this.debugInfo,n.debugInfo=this.debugInfo),n.features=this.features.eval(t),t.mediaPath.push(n),t.mediaBlocks.push(n),t.frames.unshift(this.ruleset),n.ruleset=this.ruleset.eval(t),t.frames.shift(),t.mediaPath.pop(),t.mediaPath.length===0?n.evalTop(t):n.evalNested(t)},variable:function(t){return e.Ruleset.prototype.variable.call(this.ruleset,t)},find:function(){return e.Ruleset.prototype.find.apply(this.ruleset,arguments)},rulesets:function(){return e.Ruleset.prototype.rulesets.apply(this.ruleset)},emptySelectors:function(){var t=new e.Element("","&",0);return[new e.Selector([t])]},evalTop:function(t){var n=this;if(t.mediaBlocks.length>1){var r=this.emptySelectors();n=new e.Ruleset(r,t.mediaBlocks),n.multiMedia=!0}return delete t.mediaBlocks,delete t.mediaPath,n},evalNested:function(t){var n,r,i=t.mediaPath.concat([this]);for(n=0;n<i.length;n++)r=i[n].features instanceof e.Value?i[n].features.value:i[n].features,i[n]=Array.isArray(r)?r:[r];return this.features=new e.Value(this.permute(i).map(function(t){t=t.map(function(t){return t.toCSS?t:new e.Anonymous(t)});for(n=t.length-1;n>0;n--)t.splice(n,0,new e.Anonymous("and"));return new e.Expression(t)})),new e.Ruleset([],[])},permute:function(e){if(e.length===0)return[];if(e.length===1)return e[0];var t=[],n=this.permute(e.slice(1));for(var r=0;r<n.length;r++)for(var i=0;i<e[0].length;i++)t.push([e[0][i]].concat(n[r]));return t},bubbleSelectors:function(t){this.ruleset=new e.Ruleset(t.slice(0),[this.ruleset])}}}(n("../tree")),function(e){e.mixin={},e.mixin.Call=function(t,n,r,i,s){this.selector=new e.Selector(t),this.arguments=n,this.index=r,this.filename=i,this.important=s},e.mixin.Call.prototype={eval:function(t){var n,r,i,s=[],o=!1,u,a,f,l,c;i=this.arguments&&this.arguments.map(function(e){return{name:e.name,value:e.value.eval(t)}});for(u=0;u<t.frames.length;u++)if((n=t.frames[u].find(this.selector)).length>0){c=!0;for(a=0;a<n.length;a++){r=n[a],l=!1;for(f=0;f<t.frames.length;f++)if(!(r instanceof e.mixin.Definition)&&r===(t.frames[f].originalRuleset||t.frames[f])){l=!0;break}if(l)continue;if(r.matchArgs(i,t)){if(!r.matchCondition||r.matchCondition(i,t))try{Array.prototype.push.apply(s,r.eval(t,i,this.important).rules)}catch(h){throw{message:h.message,index:this.index,filename:this.filename,stack:h.stack}}o=!0}}if(o)return s}throw c?{type:"Runtime",message:"No matching definition was found for `"+this.selector.toCSS().trim()+"("+(i?i.map(function(e){var t="";return e.name&&(t+=e.name+":"),e.value.toCSS?t+=e.value.toCSS():t+="???",t}).join(", "):"")+")`",index:this.index,filename:this.filename}:{type:"Name",message:this.selector.toCSS().trim()+" is undefined",index:this.index,filename:this.filename}}},e.mixin.Definition=function(t,n,r,i,s){this.name=t,this.selectors=[new e.Selector([new e.Element(null,t)])],this.params=n,this.condition=i,this.variadic=s,this.arity=n.length,this.rules=r,this._lookups={},this.required=n.reduce(function(e,t){return!t.name||t.name&&!t.value?e+1:e},0),this.parent=e.Ruleset.prototype,this.frames=[]},e.mixin.Definition.prototype={toCSS:function(){return""},variable:function(e){return this.parent.variable.call(this,e)},variables:function(){return this.parent.variables.call(this)},find:function(){return this.parent.find.apply(this,arguments)},rulesets:function(){return this.parent.rulesets.apply(this)},evalParams:function(t,n,r,i){var s=new e.Ruleset(null,[]),o,u,a=this.params.slice(0),f,l,c,h,p,d;if(r){r=r.slice(0);for(f=0;f<r.length;f++){u=r[f];if(h=u&&u.name){p=!1;for(l=0;l<a.length;l++)if(!i[l]&&h===a[l].name){i[l]=u.value.eval(t),s.rules.unshift(new e.Rule(h,u.value.eval(t))),p=!0;break}if(p){r.splice(f,1),f--;continue}throw{type:"Runtime",message:"Named argument for "+this.name+" "+r[f].name+" not found"}}}}d=0;for(f=0;f<a.length;f++){if(i[f])continue;u=r&&r[d];if(h=a[f].name)if(a[f].variadic&&r){o=[];for(l=d;l<r.length;l++)o.push(r[l].value.eval(t));s.rules.unshift(new e.Rule(h,(new e.Expression(o)).eval(t)))}else{c=u&&u.value;if(c)c=c.eval(t);else{if(!a[f].value)throw{type:"Runtime",message:"wrong number of arguments for "+this.name+" ("+r.length+" for "+this.arity+")"};c=a[f].value.eval(n)}s.rules.unshift(new e.Rule(h,c)),i[f]=c}if(a[f].variadic&&r)for(l=d;l<r.length;l++)i[l]=r[l].value.eval(t);d++}return s},eval:function(t,n,r){var i=[],s=this.frames.concat(t.frames),o=this.evalParams(t,{frames:s},n,i),u,a,f,l;return o.rules.unshift(new e.Rule("@arguments",(new e.Expression(i)).eval(t))),a=r?this.parent.makeImportant.apply(this).rules:this.rules.slice(0),l=(new e.Ruleset(null,a)).eval({frames:[this,o].concat(s)}),l.originalRuleset=this,l},matchCondition:function(e,t){return this.condition&&!this.condition.eval({frames:[this.evalParams(t,{frames:this.frames.concat(t.frames)},e,[])].concat(t.frames)})?!1:!0},matchArgs:function(e,t){var n=e&&e.length||0,r,i;if(!this.variadic){if(n<this.required)return!1;if(n>this.params.length)return!1;if(this.required>0&&n>this.params.length)return!1}r=Math.min(n,this.arity);for(var s=0;s<r;s++)if(!this.params[s].name&&!this.params[s].variadic&&e[s].value.eval(t).toCSS()!=this.params[s].value.eval(t).toCSS())return!1;return!0}}}(n("../tree")),function(e){e.Operation=function(e,t){this.op=e.trim(),this.operands=t},e.Operation.prototype.eval=function(t){var n=this.operands[0].eval(t),r=this.operands[1].eval(t),i;if(n instanceof e.Dimension&&r instanceof e.Color){if(this.op!=="*"&&this.op!=="+")throw{name:"OperationError",message:"Can't substract or divide a color from a number"};i=r,r=n,n=i}if(!n.operate)throw{name:"OperationError",message:"Operation on an invalid type"};return n.operate(this.op,r)},e.operate=function(e,t,n){switch(e){case"+":return t+n;case"-":return t-n;case"*":return t*n;case"/":return t/n}}}(n("../tree")),function(e){e.Paren=function(e){this.value=e},e.Paren.prototype={toCSS:function(e){return"("+this.value.toCSS(e)+")"},eval:function(t){return new e.Paren(this.value.eval(t))}}}(n("../tree")),function(e){e.Quoted=function(e,t,n,r){this.escaped=n,this.value=t||"",this.quote=e.charAt(0),this.index=r},e.Quoted.prototype={toCSS:function(){return this.escaped?this.value:this.quote+this.value+this.quote},eval:function(t){var n=this,r=this.value.replace(/`([^`]+)`/g,function(r,i){return(new e.JavaScript(i,n.index,!0)).eval(t).value}).replace(/@\{([\w-]+)\}/g,function(r,i){var s=(new e.Variable("@"+i,n.index)).eval(t);return s instanceof e.Quoted?s.value:s.toCSS()});return new e.Quoted(this.quote+r+this.quote,r,this.escaped,this.index)},compare:function(e){if(!e.toCSS)return-1;var t=this.toCSS(),n=e.toCSS();return t===n?0:t<n?-1:1}}}(n("../tree")),function(e){e.Ratio=function(e){this.value=e},e.Ratio.prototype={toCSS:function(e){return this.value},eval:function(){return this}}}(n("../tree")),function(e){e.Rule=function(t,n,r,i,s){this.name=t,this.value=n instanceof e.Value?n:new e.Value([n]),this.important=r?" "+r.trim():"",this.index=i,this.inline=s||!1,t.charAt(0)==="@"?this.variable=!0:this.variable=!1},e.Rule.prototype.toCSS=function(e){return this.variable?"":this.name+(e.compress?":":": ")+this.value.toCSS(e)+this.important+(this.inline?"":";")},e.Rule.prototype.eval=function(t){return new e.Rule(this.name,this.value.eval(t),this.important,this.index,this.inline)},e.Rule.prototype.makeImportant=function(){return new e.Rule(this.name,this.value,"!important",this.index,this.inline)},e.Shorthand=function(e,t){this.a=e,this.b=t},e.Shorthand.prototype={toCSS:function(e){return this.a.toCSS(e)+"/"+this.b.toCSS(e)},eval:function(){return this}}}(n("../tree")),function(e){e.Ruleset=function(e,t,n){this.selectors=e,this.rules=t,this._lookups={},this.strictImports=n},e.Ruleset.prototype={eval:function(t){var n=this.selectors&&this.selectors.map(function(e){return e.eval(t)}),r=new e.Ruleset(n,this.rules.slice(0),this.strictImports),i;r.originalRuleset=this,r.root=this.root,r.allowImports=this.allowImports,this.debugInfo&&(r.debugInfo=this.debugInfo),t.frames.unshift(r),(r.root||r.allowImports||!r.strictImports)&&r.evalImports(t);for(var s=0;s<r.rules.length;s++)r.rules[s]instanceof e.mixin.Definition&&(r.rules[s].frames=t.frames.slice(0));var o=t.mediaBlocks&&t.mediaBlocks.length||0;for(var s=0;s<r.rules.length;s++)r.rules[s]instanceof e.mixin.Call&&(i=r.rules[s].eval(t),r.rules.splice.apply(r.rules,[s,1].concat(i)),s+=i.length-1,r.resetCache());for(var s=0,u;s<r.rules.length;s++)u=r.rules[s],u instanceof e.mixin.Definition||(r.rules[s]=u.eval?u.eval(t):u);t.frames.shift();if(t.mediaBlocks)for(var s=o;s<t.mediaBlocks.length;s++)t.mediaBlocks[s].bubbleSelectors(n);return r},evalImports:function(t){var n,r;for(n=0;n<this.rules.length;n++)this.rules[n]instanceof e.Import&&(r=this.rules[n].eval(t),typeof r.length=="number"?(this.rules.splice.apply(this.rules,[n,1].concat(r)),n+=r.length-1):this.rules.splice(n,1,r),this.resetCache())},makeImportant:function(){return new e.Ruleset(this.selectors,this.rules.map(function(e){return e.makeImportant?e.makeImportant():e}),this.strictImports)},matchArgs:function(e){return!e||e.length===0},resetCache:function(){this._rulesets=null,this._variables=null,this._lookups={}},variables:function(){return this._variables?this._variables:this._variables=this.rules.reduce(function(t,n){return n instanceof e.Rule&&n.variable===!0&&(t[n.name]=n),t},{})},variable:function(e){return this.variables()[e]},rulesets:function(){return this._rulesets?this._rulesets:this._rulesets=this.rules.filter(function(t){return t instanceof e.Ruleset||t instanceof e.mixin.Definition})},find:function(t,n){n=n||this;var r=[],i,s,o=t.toCSS();return o in this._lookups?this._lookups[o]:(this.rulesets().forEach(function(i){if(i!==n)for(var o=0;o<i.selectors.length;o++)if(s=t.match(i.selectors[o])){t.elements.length>i.selectors[o].elements.length?Array.prototype.push.apply(r,i.find(new e.Selector(t.elements.slice(1)),n)):r.push(i);break}}),this._lookups[o]=r)},toCSS:function(t,n){var r=[],i=[],s=[],o=[],u=[],a,f,l;this.root||this.joinSelectors(u,t,this.selectors);for(var c=0;c<this.rules.length;c++){l=this.rules[c];if(l.rules||l instanceof e.Media)o.push(l.toCSS(u,n));else if(l instanceof e.Directive){var h=l.toCSS(u,n);if(l.name==="@charset"){if(n.charset){l.debugInfo&&(o.push(e.debugInfo(n,l)),o.push((new e.Comment("/* "+h.replace(/\n/g,"")+" */\n")).toCSS(n)));continue}n.charset=!0}o.push(h)}else l instanceof e.Comment?l.silent||(this.root?o.push(l.toCSS(n)):i.push(l.toCSS(n))):l.toCSS&&!l.variable?i.push(l.toCSS(n)):l.value&&!l.variable&&i.push(l.value.toString())}o=o.join("");if(this.root)r.push(i.join(n.compress?"":"\n"));else if(i.length>0){f=e.debugInfo(n,this),a=u.map(function(e){return e.map(function(e){return e.toCSS(n)}).join("").trim()}).join(n.compress?",":",\n");for(var c=i.length-1;c>=0;c--)s.indexOf(i[c])===-1&&s.unshift(i[c]);i=s,r.push(f+a+(n.compress?"{":" {\n  ")+i.join(n.compress?"":"\n  ")+(n.compress?"}":"\n}\n"))}return r.push(o),r.join("")+(n.compress?"\n":"")},joinSelectors:function(e,t,n){for(var r=0;r<n.length;r++)this.joinSelector(e,t,n[r])},joinSelector:function(t,n,r){var i,s,o,u,a,f,l,c,h,p,d,v,m,g,y;for(i=0;i<r.elements.length;i++)f=r.elements[i],f.value==="&"&&(u=!0);if(!u){if(n.length>0)for(i=0;i<n.length;i++)t.push(n[i].concat(r));else t.push([r]);return}g=[],a=[[]];for(i=0;i<r.elements.length;i++){f=r.elements[i];if(f.value!=="&")g.push(f);else{y=[],g.length>0&&this.mergeElementsOnToSelectors(g,a);for(s=0;s<a.length;s++){l=a[s];if(n.length==0)l.length>0&&(l[0].elements=l[0].elements.slice(0),l[0].elements.push(new e.Element(f.combinator,"",0))),y.push(l);else for(o=0;o<n.length;o++)c=n[o],h=[],p=[],v=!0,l.length>0?(h=l.slice(0),m=h.pop(),d=new e.Selector(m.elements.slice(0)),v=!1):d=new e.Selector([]),c.length>1&&(p=p.concat(c.slice(1))),c.length>0&&(v=!1,d.elements.push(new e.Element(f.combinator,c[0].elements[0].value,0)),d.elements=d.elements.concat(c[0].elements.slice(1))),v||h.push(d),h=h.concat(p),y.push(h)}a=y,g=[]}}g.length>0&&this.mergeElementsOnToSelectors(g,a);for(i=0;i<a.length;i++)t.push(a[i])},mergeElementsOnToSelectors:function(t,n){var r,i;if(n.length==0){n.push([new e.Selector(t)]);return}for(r=0;r<n.length;r++)i=n[r],i.length>0?i[i.length-1]=new e.Selector(i[i.length-1].elements.concat(t)):i.push(new e.Selector(t))}}}(n("../tree")),function(e){e.Selector=function(e){this.elements=e},e.Selector.prototype.match=function(e){var t=this.elements,n=t.length,r,i,s,o;r=e.elements.slice(e.elements.length&&e.elements[0].value==="&"?1:0),i=r.length,s=Math.min(n,i);if(i===0||n<i)return!1;for(o=0;o<s;o++)if(t[o].value!==r[o].value)return!1;return!0},e.Selector.prototype.eval=function(t){return new e.Selector(this.elements.map(function(e){return e.eval(t)}))},e.Selector.prototype.toCSS=function(e){return this._css?this._css:(this.elements[0].combinator.value===""?this._css=" ":this._css="",this._css+=this.elements.map(function(t){return typeof t=="string"?" "+t.trim():t.toCSS(e)}).join(""),this._css)}}(n("../tree")),function(e){e.UnicodeDescriptor=function(e){this.value=e},e.UnicodeDescriptor.prototype={toCSS:function(e){return this.value},eval:function(){return this}}}(n("../tree")),function(e){e.URL=function(e,t){this.value=e,this.rootpath=t},e.URL.prototype={toCSS:function(){return"url("+this.value.toCSS()+")"},eval:function(t){var n=this.value.eval(t),r;return typeof n.value=="string"&&!/^(?:[a-z-]+:|\/)/.test(n.value)&&(r=this.rootpath,n.quote||(r=r.replace(/[\(\)'"\s]/g,function(e){return"\\"+e})),n.value=r+n.value),new e.URL(n,this.rootpath)}}}(n("../tree")),function(e){e.Value=function(e){this.value=e,this.is="value"},e.Value.prototype={eval:function(t){return this.value.length===1?this.value[0].eval(t):new e.Value(this.value.map(function(e){return e.eval(t)}))},toCSS:function(e){return this.value.map(function(t){return t.toCSS(e)}).join(e.compress?",":", ")}}}(n("../tree")),function(e){e.Variable=function(e,t,n){this.name=e,this.index=t,this.file=n},e.Variable.prototype={eval:function(t){var n,r,i=this.name;i.indexOf("@@")==0&&(i="@"+(new e.Variable(i.slice(1))).eval(t).value);if(this.evaluating)throw{type:"Name",message:"Recursive variable definition for "+i,filename:this.file,index:this.index};this.evaluating=!0;if(n=e.find(t.frames,function(e){if(r=e.variable(i))return r.value.eval(t)}))return this.evaluating=!1,n;throw{type:"Name",message:"variable "+i+" is undefined",filename:this.file,index:this.index}}}}(n("../tree")),function(e){e.debugInfo=function(t,n){var r="";if(t.dumpLineNumbers&&!t.compress)switch(t.dumpLineNumbers){case"comments":r=e.debugInfo.asComment(n);break;case"mediaquery":r=e.debugInfo.asMediaQuery(n);break;case"all":r=e.debugInfo.asComment(n)+e.debugInfo.asMediaQuery(n)}return r},e.debugInfo.asComment=function(e){return"/* line "+e.debugInfo.lineNumber+", "+e.debugInfo.fileName+" */\n"},e.debugInfo.asMediaQuery=function(e){return"@media -sass-debug-info{filename{font-family:"+("file://"+e.debugInfo.fileName).replace(/[\/:.]/g,"\\$&")+"}line{font-family:\\00003"+e.debugInfo.lineNumber+"}}\n"},e.find=function(e,t){for(var n=0,r;n<e.length;n++)if(r=t.call(e,e[n]))return r;return null},e.jsify=function(e){return Array.isArray(e.value)&&e.value.length>1?"["+e.value.map(function(e){return e.toCSS(!1)}).join(", ")+"]":e.toCSS(!1)}}(n("./tree"));var o=/^(file|chrome(-extension)?|resource|qrc|app):/.test(location.protocol);r.env=r.env||(location.hostname=="127.0.0.1"||location.hostname=="0.0.0.0"||location.hostname=="localhost"||location.port.length>0||o?"development":"production"),r.async=r.async||!1,r.fileAsync=r.fileAsync||!1,r.poll=r.poll||(o?1e3:1500);if(r.functions)for(var u in r.functions)r.tree.functions[u]=r.functions[u];var a=/!dumpLineNumbers:(comments|mediaquery|all)/.exec(location.hash);a&&(r.dumpLineNumbers=a[1]),r.watch=function(){return r.watchMode||(r.env="development",f()),this.watchMode=!0},r.unwatch=function(){return clearInterval(r.watchTimer),this.watchMode=!1},/!watch/.test(location.hash)&&r.watch();var l=null;if(r.env!="development")try{l=typeof e.localStorage=="undefined"?null:e.localStorage}catch(c){}var h=document.getElementsByTagName("link"),p=/^text\/(x-)?less$/;r.sheets=[];for(var d=0;d<h.length;d++)(h[d].rel==="stylesheet/less"||h[d].rel.match(/stylesheet/)&&h[d].type.match(p))&&r.sheets.push(h[d]);var v="";r.modifyVars=function(e){var t=v;for(name in e)t+=(name.slice(0,1)==="@"?"":"@")+name+": "+(e[name].slice(-1)===";"?e[name]:e[name]+";");(new r.Parser).parse(t,function(e,t){S(t.toCSS(),r.sheets[r.sheets.length-1])})},r.refresh=function(e){var t,n;t=n=new Date,g(function(e,r,i,s,o){o.local?C("loading "+s.href+" from cache."):(C("parsed "+s.href+" successfully."),S(r.toCSS(),s,o.lastModified)),C("css for "+s.href+" generated in "+(new Date-n)+"ms"),o.remaining===0&&C("css generated in "+(new Date-t)+"ms"),n=new Date},e),m()},r.refreshStyles=m,r.refresh(r.env==="development"),typeof define=="function"&&define.amd&&define("less",[],function(){return r})})(window);

window['console'] = console_backup;; /* ../js/lib/jquery.2.0.2.min.js */ /*! jQuery v2.0.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.2",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=at(),k=at(),N=at(),E=!1,S=function(){return 0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],H=L.pop,q=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){q.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=vt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+xt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return St(e.replace(z,"$1"),t,r,i)}function st(e){return Q.test(e+"")}function at(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[v]=!0,e}function lt(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t,n){e=e.split("|");var r,o=e.length,s=n?null:t;while(o--)(r=i.attrHandle[e[o]])&&r!==t||(i.attrHandle[e[o]]=s)}function pt(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function ft(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:undefined}function dt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function gt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function yt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.parentWindow;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.frameElement&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=lt(function(e){return e.innerHTML="<a href='#'></a>",ct("type|href|height|width",ft,"#"===e.firstChild.getAttribute("href")),ct(R,pt,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),n.input=lt(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),ct("value",ht,n.attributes&&n.input),n.getElementsByTagName=lt(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=lt(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=lt(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=st(t.querySelectorAll))&&(lt(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),lt(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=st(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&lt(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=st(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},n.sortDetached=lt(function(e){return 1&e.compareDocumentPosition(t.createElement("div"))}),S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return dt(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?dt(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:ut,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=vt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?ut(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return ot(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ut(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:yt(function(){return[0]}),last:yt(function(e,t){return[t-1]}),eq:yt(function(e,t,n){return[0>n?n+t:n]}),even:yt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:yt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:yt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:yt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=gt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=mt(t);function vt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function bt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function wt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Tt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function Ct(e,t,n,r,i,o){return r&&!r[v]&&(r=Ct(r)),i&&!i[v]&&(i=Ct(i,o)),ut(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Et(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:Tt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=Tt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=Tt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function kt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=bt(function(e){return e===t},a,!0),p=bt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[bt(wt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return Ct(l>1&&wt(f),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),o>r&&kt(e=e.slice(r)),o>r&&xt(e))}f.push(n)}return wt(f)}function Nt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=H.call(f));y=Tt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?ut(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=vt(e)),n=t.length;while(n--)o=kt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Nt(i,r))}return o};function Et(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function St(e,t,r,o){var s,u,l,c,p,f=vt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&xt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}i.pseudos.nth=i.pseudos.eq;function jt(){}jt.prototype=i.filters=i.pseudos,i.setFilters=new jt,n.sortStable=v.split("").sort(S).join("")===v,c(),[0,0].sort(S),n.detectDuplicates=E,x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!a||n&&!u||(r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,H,q=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){return t===undefined||t&&"string"==typeof t&&n===undefined?this.get(e,t):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,H=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||H.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return H.access(e,t,n)},_removeData:function(e,t){H.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!H.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));H.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:q.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=H.get(e,t),n&&(!r||x.isArray(n)?r=H.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(e,t){var n=t+"queueHooks";return H.get(e,n)||H.access(e,n,{empty:x.Callbacks("once memory").add(function(){H.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=H.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,i="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,s=0,a=x(this),u=t,l=e.match(w)||[];while(o=l[s++])u=i?u:!a.hasClass(o),a[u?"addClass":"removeClass"](o)}else(n===r||"boolean"===n)&&(this.className&&H.set(this,"__className__",this.className),this.className=this.className||e===!1?"":H.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=H.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=H.hasData(e)&&H.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,H.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(H.get(a,"events")||{})[t.type]&&H.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(H.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!H.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.firstChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[H.expando],o&&(t=H.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);H.cache[o]&&delete H.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)H.set(e[r],"globalEval",!t||H.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(H.hasData(e)&&(o=H.access(e),s=H.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function Ht(t){return e.getComputedStyle(t,null)}function qt(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=H.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=H.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&H.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=Ht(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return qt(this,!0)},hide:function(){return qt(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:Lt(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||Ht(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Ht(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&Ht(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");
try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=H.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=H.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;H.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Hn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||H.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=H.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=H.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function Hn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:Hn("show"),slideUp:Hn("hide"),slideToggle:Hn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=qn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=qn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function qn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
; /* ../js/lib/jquery-ui-1.10.3.custom.min.js */ /*! jQuery UI - v1.10.3 - 2013-07-14
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,m,g,v,b,_=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return b=n(_),_[0].preventDefault&&(e.at="left top"),p=b.width,m=b.height,g=b.offset,v=t.extend({},g),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=m:"center"===e.at[1]&&(v.top+=m/2),a=i(k.at,p,m),v.left+=a[0],v.top+=a[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),b=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,T=d+b+s(this,"marginBottom")+w.height,C=t.extend({},v),M=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?C.left-=u:"center"===e.my[0]&&(C.left-=u/2),"bottom"===e.my[1]?C.top-=d:"center"===e.my[1]&&(C.top-=d/2),C.left+=M[0],C.top+=M[1],t.support.offsetFractions||(C.left=h(C.left),C.top=h(C.top)),n={marginLeft:f,marginTop:b},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](C,{targetWidth:p,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:T,offset:[a[0]+M[0],a[1]+M[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=g.left-C.left,s=i+p-u,n=g.top-C.top,a=n+m-d,h={target:{element:_,left:g.left,top:g.top,width:p,height:m},element:{element:c,left:C.left,top:C.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>m&&m>r(n+a)&&(h.vertical="middle"),h.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(C,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-o-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-o-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>c?(s=t.top+p+f+m+e.collisionHeight-o-a,t.top+p+f+m>c&&(0>s||r(c)>s)&&(t.top+=p+f+m)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-h,t.top+p+f+m>u&&(i>0||u>r(i))&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||e.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;return n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,e(document).width()-this.helperProportions.width-this.margins.left,(e(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(t){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=t.pageX,l=t.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var s=e(this).data("ui-draggable"),n=s.options,a=e.extend({},i,{item:s.element});s.sortables=[],e(n.connectToSortable).each(function(){var i=e.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,a))})},stop:function(t,i){var s=e(this).data("ui-draggable"),n=e.extend({},i,{item:s.element});e.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,n))})},drag:function(t,i){var s=e(this).data("ui-draggable"),n=this;e.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,e.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",t),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",t),s.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._opacity&&e(i.helper).css("opacity",s._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var i=e(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-e(document).scrollTop()<s.scrollSensitivity?n=e(document).scrollTop(e(document).scrollTop()-s.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<s.scrollSensitivity&&(n=e(document).scrollTop(e(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-e(document).scrollLeft()<s.scrollSensitivity?n=e(document).scrollLeft(e(document).scrollLeft()-s.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<s.scrollSensitivity&&(n=e(document).scrollLeft(e(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),i=t.options;t.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=e(this),s=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(t,i){var s,n,a,o,r,h,l,u,c,d,p=e(this).data("ui-draggable"),f=p.options,m=f.snapTolerance,g=i.offset.left,v=g+p.helperProportions.width,b=i.offset.top,y=b+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--)r=p.snapElements[c].left,h=r+p.snapElements[c].width,l=p.snapElements[c].top,u=l+p.snapElements[c].height,r-m>v||g>h+m||l-m>y||b>u+m||!e.contains(p.snapElements[c].item.ownerDocument,p.snapElements[c].item)?(p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(s=m>=Math.abs(l-y),n=m>=Math.abs(u-b),a=m>=Math.abs(r-v),o=m>=Math.abs(h-g),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||a||o,"outer"!==f.snapMode&&(s=m>=Math.abs(l-b),n=m>=Math.abs(u-y),a=m>=Math.abs(r-g),o=m>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=s||n||a||o||d)}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,i=this.data("ui-draggable").options,s=e.makeArray(e(i.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});s.length&&(t=parseInt(e(s[0]).css("zIndex"),10)||0,e(s).each(function(i){e(this).css("zIndex",t+i)}),this.css("zIndex",t+s.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._zIndex&&e(i.helper).css("zIndex",s._zIndex)}})})(jQuery);(function(e){function t(e,t,i){return e>t&&t+i>e}e.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t=this.options,i=t.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(i)?i:function(e){return e.is(i)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var t=0,i=e.ui.ddmanager.droppables[this.options.scope];i.length>t;t++)i[t]===this&&i.splice(t,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){"accept"===t&&(this.accept=e.isFunction(i)?i:function(e){return e.is(i)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"ui-droppable");return t.options.greedy&&!t.options.disabled&&t.options.scope===s.options.scope&&t.accept.call(t.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(t,{offset:t.element.offset()}),t.options.tolerance)?(n=!0,!1):undefined}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(e,i,s){if(!i.offset)return!1;var n,a,o=(e.positionAbs||e.position.absolute).left,r=o+e.helperProportions.width,h=(e.positionAbs||e.position.absolute).top,l=h+e.helperProportions.height,u=i.offset.left,c=u+i.proportions.width,d=i.offset.top,p=d+i.proportions.height;switch(s){case"fit":return o>=u&&c>=r&&h>=d&&p>=l;case"intersect":return o+e.helperProportions.width/2>u&&c>r-e.helperProportions.width/2&&h+e.helperProportions.height/2>d&&p>l-e.helperProportions.height/2;case"pointer":return n=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,a=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,t(a,d,i.proportions.height)&&t(n,u,i.proportions.width);case"touch":return(h>=d&&p>=h||l>=d&&p>=l||d>h&&l>p)&&(o>=u&&c>=o||r>=u&&c>=r||u>o&&r>c);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions.height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions={width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight})}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e.data(this,"ui-droppable").options.scope===n}),a.length&&(s=e.data(a[0],"ui-droppable"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}}})(jQuery);; /* ../js/lib/jquery.color.min.js */ /*! jQuery Color v@2.1.2 http://github.com/jquery/jquery-color | jquery.org/license */
(function(a,b){function m(a,b,c){var d=h[b.type]||{};return a==null?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:d.max<a?d.max:a)}function n(b){var c=f(),d=c._rgba=[];return b=b.toLowerCase(),l(e,function(a,e){var f,h=e.re.exec(b),i=h&&e.parse(h),j=e.space||"rgba";if(i)return f=c[j](i),c[g[j].cache]=f[g[j].cache],d=c._rgba=f._rgba,!1}),d.length?(d.join()==="0,0,0,0"&&a.extend(d,k.transparent),c):k[b]}function o(a,b,c){return c=(c+1)%1,c*6<1?a+(b-a)*c*6:c*2<1?b:c*3<2?a+(b-a)*(2/3-c)*6:a}var c="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",d=/^([\-+])=\s*(\d+\.?\d*)/,e=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1]*2.55,a[2]*2.55,a[3]*2.55,a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],f=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},g={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},h={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},i=f.support={},j=a("<p>")[0],k,l=a.each;j.style.cssText="background-color:rgba(1,1,1,.5)",i.rgba=j.style.backgroundColor.indexOf("rgba")>-1,l(g,function(a,b){b.cache="_"+a,b.props.alpha={idx:3,type:"percent",def:1}}),f.fn=a.extend(f.prototype,{parse:function(c,d,e,h){if(c===b)return this._rgba=[null,null,null,null],this;if(c.jquery||c.nodeType)c=a(c).css(d),d=b;var i=this,j=a.type(c),o=this._rgba=[];d!==b&&(c=[c,d,e,h],j="array");if(j==="string")return this.parse(n(c)||k._default);if(j==="array")return l(g.rgba.props,function(a,b){o[b.idx]=m(c[b.idx],b)}),this;if(j==="object")return c instanceof f?l(g,function(a,b){c[b.cache]&&(i[b.cache]=c[b.cache].slice())}):l(g,function(b,d){var e=d.cache;l(d.props,function(a,b){if(!i[e]&&d.to){if(a==="alpha"||c[a]==null)return;i[e]=d.to(i._rgba)}i[e][b.idx]=m(c[a],b,!0)}),i[e]&&a.inArray(null,i[e].slice(0,3))<0&&(i[e][3]=1,d.from&&(i._rgba=d.from(i[e])))}),this},is:function(a){var b=f(a),c=!0,d=this;return l(g,function(a,e){var f,g=b[e.cache];return g&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],l(e.props,function(a,b){if(g[b.idx]!=null)return c=g[b.idx]===f[b.idx],c})),c}),c},_space:function(){var a=[],b=this;return l(g,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var c=f(a),d=c._space(),e=g[d],i=this.alpha()===0?f("transparent"):this,j=i[e.cache]||e.to(i._rgba),k=j.slice();return c=c[e.cache],l(e.props,function(a,d){var e=d.idx,f=j[e],g=c[e],i=h[d.type]||{};if(g===null)return;f===null?k[e]=g:(i.mod&&(g-f>i.mod/2?f+=i.mod:f-g>i.mod/2&&(f-=i.mod)),k[e]=m((g-f)*b+f,d))}),this[d](k)},blend:function(b){if(this._rgba[3]===1)return this;var c=this._rgba.slice(),d=c.pop(),e=f(b)._rgba;return f(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return a==null?b>2?1:0:a});return c[3]===1&&(c.pop(),b="rgb("),b+c.join()+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){return a==null&&(a=b>2?1:0),b&&b<3&&(a=Math.round(a*100)+"%"),a});return c[3]===1&&(c.pop(),b="hsl("),b+c.join()+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(d*255)),"#"+a.map(c,function(a){return a=(a||0).toString(16),a.length===1?"0"+a:a}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),f.fn.parse.prototype=f.fn,g.hsla.to=function(a){if(a[0]==null||a[1]==null||a[2]==null)return[null,null,null,a[3]];var b=a[0]/255,c=a[1]/255,d=a[2]/255,e=a[3],f=Math.max(b,c,d),g=Math.min(b,c,d),h=f-g,i=f+g,j=i*.5,k,l;return g===f?k=0:b===f?k=60*(c-d)/h+360:c===f?k=60*(d-b)/h+120:k=60*(b-c)/h+240,h===0?l=0:j<=.5?l=h/i:l=h/(2-i),[Math.round(k)%360,l,j,e==null?1:e]},g.hsla.from=function(a){if(a[0]==null||a[1]==null||a[2]==null)return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],e=a[3],f=d<=.5?d*(1+c):d+c-d*c,g=2*d-f;return[Math.round(o(g,f,b+1/3)*255),Math.round(o(g,f,b)*255),Math.round(o(g,f,b-1/3)*255),e]},l(g,function(c,e){var g=e.props,h=e.cache,i=e.to,j=e.from;f.fn[c]=function(c){i&&!this[h]&&(this[h]=i(this._rgba));if(c===b)return this[h].slice();var d,e=a.type(c),k=e==="array"||e==="object"?c:arguments,n=this[h].slice();return l(g,function(a,b){var c=k[e==="object"?a:b.idx];c==null&&(c=n[b.idx]),n[b.idx]=m(c,b)}),j?(d=f(j(n)),d[h]=n,d):f(n)},l(g,function(b,e){if(f.fn[b])return;f.fn[b]=function(f){var g=a.type(f),h=b==="alpha"?this._hsla?"hsla":"rgba":c,i=this[h](),j=i[e.idx],k;return g==="undefined"?j:(g==="function"&&(f=f.call(this,j),g=a.type(f)),f==null&&e.empty?this:(g==="string"&&(k=d.exec(f),k&&(f=j+parseFloat(k[2])*(k[1]==="+"?1:-1))),i[e.idx]=f,this[h](i)))}})}),f.hook=function(b){var c=b.split(" ");l(c,function(b,c){a.cssHooks[c]={set:function(b,d){var e,g,h="";if(d!=="transparent"&&(a.type(d)!=="string"||(e=n(d)))){d=f(e||d);if(!i.rgba&&d._rgba[3]!==1){g=c==="backgroundColor"?b.parentNode:b;while((h===""||h==="transparent")&&g&&g.style)try{h=a.css(g,"backgroundColor"),g=g.parentNode}catch(j){}d=d.blend(h&&h!=="transparent"?h:"_default")}d=d.toRgbaString()}try{b.style[c]=d}catch(j){}}},a.fx.step[c]=function(b){b.colorInit||(b.start=f(b.elem,c),b.end=f(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}})},f.hook(c),a.cssHooks.borderColor={expand:function(a){var b={};return l(["Top","Right","Bottom","Left"],function(c,d){b["border"+d+"Color"]=a}),b}},k=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);; /* ../js/lib/underscore.min.js */ (function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);; /* ../js/lib/backbone.min.js */ (function(){var t=this;var e=t.Backbone;var i=[];var r=i.push;var s=i.slice;var n=i.splice;var a;if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.0.0";var h=t._;if(!h&&typeof require!=="undefined")h=require("underscore");a.$=t.jQuery||t.Zepto||t.ender||t.$;a.noConflict=function(){t.Backbone=e;return this};a.emulateHTTP=false;a.emulateJSON=false;var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this;var r=this;var s=h.once(function(){r.off(t,s);e.apply(this,arguments)});s._callback=e;return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f;if(!this._events||!l(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events={};return this}a=t?[t]:h.keys(this._events);for(o=0,u=a.length;o<u;o++){t=a[o];if(n=this._events[t]){this._events[t]=r=[];if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c];if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!l(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)c(i,e);if(r)c(r,arguments);return this},stopListening:function(t,e,i){var r=this._listeners;if(!r)return this;var s=!e&&!i;if(typeof e==="object")i=this;if(t)(r={})[t._listenerId]=t;for(var n in r){r[n].off(e,i,this);if(s)delete this._listeners[n]}return this}};var u=/\s+/;var l=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u);for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}};var f={listenTo:"on",listenToOnce:"once"};h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeners||(this._listeners={});var n=e._listenerId||(e._listenerId=h.uniqueId("l"));s[n]=e;if(typeof i==="object")r=this;e[t](i,r,this);return this}});o.bind=o.on;o.unbind=o.off;h.extend(a,o);var d=a.Model=function(t,e){var i;var r=t||{};e||(e={});this.cid=h.uniqueId("c");this.attributes={};h.extend(this,h.pick(e,p));if(e.parse)r=this.parse(r,e)||{};if(i=h.result(this,"defaults")){r=h.defaults({},r,i)}this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};var p=["url","urlRoot","collection"];h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c;if(t==null)return this;if(typeof t==="object"){s=t;i=e}else{(s={})[t]=e}i||(i={});if(!this._validate(s,i))return false;n=i.unset;o=i.silent;a=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=h.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(r in s){e=s[r];if(!h.isEqual(c[r],e))a.push(r);if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true;for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this;if(!o){while(this._pending){this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed);return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false;var e,i=false;var r=this._changing?this._previousAttributes:this.attributes;for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var i=t.success;t.success=function(r){if(!e.set(e.parse(r,t),t))return false;if(i)i(e,r,t);e.trigger("sync",e,r,t)};R(this,t);return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}if(r&&(!i||!i.wait)&&!this.set(r,i))return false;i=h.extend({validate:true},i);if(!this._validate(r,i))return false;if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true;var o=this;var u=i.success;i.success=function(t){o.attributes=a;var e=o.parse(t,i);if(i.wait)e=h.extend(r||{},e);if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i);o.trigger("sync",o,t,i)};R(this,i);s=this.isNew()?"create":i.patch?"patch":"update";if(s==="patch")i.attrs=r;n=this.sync(s,this,i);if(r&&i.wait)this.attributes=a;return n},destroy:function(t){t=t?h.clone(t):{};var e=this;var i=t.success;var r=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(s){if(t.wait||e.isNew())r();if(i)i(e,s,t);if(!e.isNew())e.trigger("sync",e,s,t)};if(this.isNew()){t.success();return false}R(this,t);var s=this.sync("delete",this,t);if(!t.wait)r();return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U();if(this.isNew())return t;return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=h.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,h.extend(e||{},{validationError:i}));return false}});var v=["keys","values","pairs","invert","pick","omit"];h.each(v,function(t){d.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.attributes);return h[t].apply(h,e)}});var g=a.Collection=function(t,e){e||(e={});if(e.url)this.url=e.url;if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,h.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,merge:false,remove:false};h.extend(g.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.defaults(e||{},y))},remove:function(t,e){t=h.isArray(t)?t.slice():[t];e||(e={});var i,r,s,n;for(i=0,r=t.length;i<r;i++){n=this.get(t[i]);if(!n)continue;delete this._byId[n.id];delete this._byId[n.cid];s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}this._removeReference(n)}return this},set:function(t,e){e=h.defaults(e||{},m);if(e.parse)t=this.parse(t,e);if(!h.isArray(t))t=t?[t]:[];var i,s,a,o,u,l;var c=e.at;var f=this.comparator&&c==null&&e.sort!==false;var d=h.isString(this.comparator)?this.comparator:null;var p=[],v=[],g={};for(i=0,s=t.length;i<s;i++){if(!(a=this._prepareModel(t[i],e)))continue;if(u=this.get(a)){if(e.remove)g[u.cid]=true;if(e.merge){u.set(a.attributes,e);if(f&&!l&&u.hasChanged(d))l=true}}else if(e.add){p.push(a);a.on("all",this._onModelEvent,this);this._byId[a.cid]=a;if(a.id!=null)this._byId[a.id]=a}}if(e.remove){for(i=0,s=this.length;i<s;++i){if(!g[(a=this.models[i]).cid])v.push(a)}if(v.length)this.remove(v,e)}if(p.length){if(f)l=true;this.length+=p.length;if(c!=null){n.apply(this.models,[c,0].concat(p))}else{r.apply(this.models,p)}}if(l)this.sort({silent:true});if(e.silent)return this;for(i=0,s=p.length;i<s;i++){(a=p[i]).trigger("add",a,this,e)}if(l)this.trigger("sort",this,e);return this},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models;this._reset();this.add(t,h.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return this},push:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:this.length},e));return t},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:0},e));return t},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){if(t==null)return void 0;return this._byId[t.id!=null?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},sortedIndex:function(t,e,i){e||(e=this.comparator);var r=h.isFunction(e)?e:function(t){return t.get(e)};return h.sortedIndex(this.models,t,r,i)},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var i=this;t.success=function(r){var s=t.reset?"reset":"set";i[s](r,t);if(e)e(i,r,t);i.trigger("sync",i,r,t)};R(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var i=this;var r=e.success;e.success=function(s){if(e.wait)i.add(t,e);if(r)r(t,s,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this;return t}e||(e={});e.collection=this;var i=new this.model(t,e);if(!i._validate(t,e)){this.trigger("invalid",this,t,e);return false}return i},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];h.each(_,function(t){g.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.models);return h[t].apply(h,e)}});var w=["groupBy","countBy","sortBy"];h.each(w,function(t){g.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)};return h[t](this.models,r,i)}});var b=a.View=function(t){this.cid=h.uniqueId("view");this._configure(t||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];h.extend(b.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,e){if(this.$el)this.undelegateEvents();this.$el=t instanceof a.$?t:a.$(t);this.el=this.$el[0];if(e!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!h.isFunction(i))i=this[t[e]];if(!i)continue;var r=e.match(x);var s=r[1],n=r[2];i=h.bind(i,this);s+=".delegateEvents"+this.cid;if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_configure:function(t){if(this.options)t=h.extend({},h.result(this,"options"),t);h.extend(this,h.pick(t,E));this.options=t},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"));if(this.id)t.id=h.result(this,"id");if(this.className)t["class"]=h.result(this,"className");var e=a.$("<"+h.result(this,"tagName")+">").attr(t);this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}});a.sync=function(t,e,i){var r=k[t];h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON});var s={type:r,dataType:"json"};if(!i.url){s.url=h.result(e,"url")||U()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json";s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded";s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST";if(i.emulateJSON)s.data._method=r;var n=i.beforeSend;i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r);if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i));e.trigger("request",e,o,i);return o};var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};a.ajax=function(){return a.$.ajax.apply(a.$,arguments)};var S=a.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var $=/\((.*?)\)/g;var T=/(\(\?)?:\w+/g;var H=/\*\w+/g;var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(S.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t);if(h.isFunction(e)){i=e;e=""}if(!i)i=this[e];var r=this;a.history.route(t,function(s){var n=r._extractParameters(t,s);i&&i.apply(r,n);r.trigger.apply(r,["route:"+e].concat(n));r.trigger("route",e,n);a.history.trigger("route",r,e,n)});return this},navigate:function(t,e){a.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=h.result(this,"routes");var t,e=h.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(A,"\\$&").replace($,"(?:$1)?").replace(T,function(t,e){return e?t:"([^/]+)"}).replace(H,"(.*?)");return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return h.map(i,function(t){return t?decodeURIComponent(t):null})}});var I=a.History=function(){this.handlers=[];h.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var P=/^\/+|\/+$/g;var O=/msie [\w.]+/;var C=/\/$/;I.started=false;h.extend(I.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.substr(i.length)}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started");I.started=true;this.options=h.extend({},{root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment();var i=document.documentMode;var r=O.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(P,"/");if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e;var s=this.location;var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!n){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._wantsPushState&&this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(N,"");this.history.replaceState({},document.title,this.root+this.fragment+s.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(t){var e=this.fragment=this.getFragment(t);var i=h.any(this.handlers,function(t){if(t.route.test(e)){t.callback(e);return true}});return i},navigate:function(t,e){if(!I.started)return false;if(!e||e===true)e={trigger:e};t=this.getFragment(t||"");if(this.fragment===t)return;this.fragment=t;var i=this.root+t;if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});a.history=new I;var j=function(t,e){var i=this;var r;if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e);var s=function(){this.constructor=r};s.prototype=i.prototype;r.prototype=new s;if(t)h.extend(r.prototype,t);r.__super__=i.prototype;return r};d.extend=g.extend=S.extend=b.extend=I.extend=j;var U=function(){throw new Error('A "url" property or function must be specified')};var R=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}}}).call(this);
/*
//@ sourceMappingURL=backbone-min.map
*/; /* ../js/lib/jquery.easing.min.js */ /*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
; /* ../js/lib/jquery.tablesorter.min.js */ 
(function($){$.extend({tablesorter:new
function(){var parsers=[],widgets=[];this.defaults={cssHeader:"header",cssAsc:"headerSortUp",cssDesc:"headerSortDown",cssChildRow:"expand-child",sortInitialOrder:"asc",sortMultiSortKey:"shiftKey",sortForce:null,sortAppend:null,sortLocaleCompare:true,textExtraction:"simple",parsers:{},widgets:[],widgetZebra:{css:["even","odd"]},headers:{},widthFixed:false,cancelSelection:true,sortList:[],headerList:[],dateFormat:"us",decimal:'/\.|\,/g',onRenderHeader:null,selectorHeaders:'thead th',debug:false};function benchmark(s,d){log(s+","+(new Date().getTime()-d.getTime())+"ms");}this.benchmark=benchmark;function log(s){if(typeof console!="undefined"&&typeof console.debug!="undefined"){console.log(s);}else{alert(s);}}function buildParserCache(table,$headers){if(table.config.debug){var parsersDebug="";}if(table.tBodies.length==0)return;var rows=table.tBodies[0].rows;if(rows[0]){var list=[],cells=rows[0].cells,l=cells.length;for(var i=0;i<l;i++){var p=false;if($.metadata&&($($headers[i]).metadata()&&$($headers[i]).metadata().sorter)){p=getParserById($($headers[i]).metadata().sorter);}else if((table.config.headers[i]&&table.config.headers[i].sorter)){p=getParserById(table.config.headers[i].sorter);}if(!p){p=detectParserForColumn(table,rows,-1,i);}if(table.config.debug){parsersDebug+="column:"+i+" parser:"+p.id+"\n";}list.push(p);}}if(table.config.debug){log(parsersDebug);}return list;};function detectParserForColumn(table,rows,rowIndex,cellIndex){var l=parsers.length,node=false,nodeValue=false,keepLooking=true;while(nodeValue==''&&keepLooking){rowIndex++;if(rows[rowIndex]){node=getNodeFromRowAndCellIndex(rows,rowIndex,cellIndex);nodeValue=trimAndGetNodeText(table.config,node);if(table.config.debug){log('Checking if value was empty on row:'+rowIndex);}}else{keepLooking=false;}}for(var i=1;i<l;i++){if(parsers[i].is(nodeValue,table,node)){return parsers[i];}}return parsers[0];}function getNodeFromRowAndCellIndex(rows,rowIndex,cellIndex){return rows[rowIndex].cells[cellIndex];}function trimAndGetNodeText(config,node){return $.trim(getElementText(config,node));}function getParserById(name){var l=parsers.length;for(var i=0;i<l;i++){if(parsers[i].id.toLowerCase()==name.toLowerCase()){return parsers[i];}}return false;}function buildCache(table){if(table.config.debug){var cacheTime=new Date();}var totalRows=(table.tBodies[0]&&table.tBodies[0].rows.length)||0,totalCells=(table.tBodies[0].rows[0]&&table.tBodies[0].rows[0].cells.length)||0,parsers=table.config.parsers,cache={row:[],normalized:[]};for(var i=0;i<totalRows;++i){var c=$(table.tBodies[0].rows[i]),cols=[];if(c.hasClass(table.config.cssChildRow)){cache.row[cache.row.length-1]=cache.row[cache.row.length-1].add(c);continue;}cache.row.push(c);for(var j=0;j<totalCells;++j){cols.push(parsers[j].format(getElementText(table.config,c[0].cells[j]),table,c[0].cells[j]));}cols.push(cache.normalized.length);cache.normalized.push(cols);cols=null;};if(table.config.debug){benchmark("Building cache for "+totalRows+" rows:",cacheTime);}return cache;};function getElementText(config,node){var text="";if(!node)return"";if(!config.supportsTextContent)config.supportsTextContent=node.textContent||false;if(config.textExtraction=="simple"){if(config.supportsTextContent){text=node.textContent;}else{if(node.childNodes[0]&&node.childNodes[0].hasChildNodes()){text=node.childNodes[0].innerHTML;}else{text=node.innerHTML;}}}else{if(typeof(config.textExtraction)=="function"){text=config.textExtraction(node);}else{text=$(node).text();}}return text;}function appendToTable(table,cache){if(table.config.debug){var appendTime=new Date()}var c=cache,r=c.row,n=c.normalized,totalRows=n.length,checkCell=(n[0].length-1),tableBody=$(table.tBodies[0]),rows=[];for(var i=0;i<totalRows;i++){var pos=n[i][checkCell];rows.push(r[pos]);if(!table.config.appender){var l=r[pos].length;for(var j=0;j<l;j++){tableBody[0].appendChild(r[pos][j]);}}}if(table.config.appender){table.config.appender(table,rows);}rows=null;if(table.config.debug){benchmark("Rebuilt table:",appendTime);}applyWidget(table);setTimeout(function(){$(table).trigger("sortEnd");},0);};function buildHeaders(table){if(table.config.debug){var time=new Date();}var meta=($.metadata)?true:false;var header_index=computeTableHeaderCellIndexes(table);$tableHeaders=$(table.config.selectorHeaders,table).each(function(index){this.column=header_index[this.parentNode.rowIndex+"-"+this.cellIndex];this.order=formatSortingOrder(table.config.sortInitialOrder);this.count=this.order;if(checkHeaderMetadata(this)||checkHeaderOptions(table,index))this.sortDisabled=true;if(checkHeaderOptionsSortingLocked(table,index))this.order=this.lockedOrder=checkHeaderOptionsSortingLocked(table,index);if(!this.sortDisabled){var $th=$(this).addClass(table.config.cssHeader);if(table.config.onRenderHeader)table.config.onRenderHeader.apply($th);}table.config.headerList[index]=this;});if(table.config.debug){benchmark("Built headers:",time);log($tableHeaders);}return $tableHeaders;};function computeTableHeaderCellIndexes(t){var matrix=[];var lookup={};var thead=t.getElementsByTagName('THEAD')[0];var trs=thead.getElementsByTagName('TR');for(var i=0;i<trs.length;i++){var cells=trs[i].cells;for(var j=0;j<cells.length;j++){var c=cells[j];var rowIndex=c.parentNode.rowIndex;var cellId=rowIndex+"-"+c.cellIndex;var rowSpan=c.rowSpan||1;var colSpan=c.colSpan||1
var firstAvailCol;if(typeof(matrix[rowIndex])=="undefined"){matrix[rowIndex]=[];}for(var k=0;k<matrix[rowIndex].length+1;k++){if(typeof(matrix[rowIndex][k])=="undefined"){firstAvailCol=k;break;}}lookup[cellId]=firstAvailCol;for(var k=rowIndex;k<rowIndex+rowSpan;k++){if(typeof(matrix[k])=="undefined"){matrix[k]=[];}var matrixrow=matrix[k];for(var l=firstAvailCol;l<firstAvailCol+colSpan;l++){matrixrow[l]="x";}}}}return lookup;}function checkCellColSpan(table,rows,row){var arr=[],r=table.tHead.rows,c=r[row].cells;for(var i=0;i<c.length;i++){var cell=c[i];if(cell.colSpan>1){arr=arr.concat(checkCellColSpan(table,headerArr,row++));}else{if(table.tHead.length==1||(cell.rowSpan>1||!r[row+1])){arr.push(cell);}}}return arr;};function checkHeaderMetadata(cell){if(($.metadata)&&($(cell).metadata().sorter===false)){return true;};return false;}function checkHeaderOptions(table,i){if((table.config.headers[i])&&(table.config.headers[i].sorter===false)){return true;};return false;}function checkHeaderOptionsSortingLocked(table,i){if((table.config.headers[i])&&(table.config.headers[i].lockedOrder))return table.config.headers[i].lockedOrder;return false;}function applyWidget(table){var c=table.config.widgets;var l=c.length;for(var i=0;i<l;i++){getWidgetById(c[i]).format(table);}}function getWidgetById(name){var l=widgets.length;for(var i=0;i<l;i++){if(widgets[i].id.toLowerCase()==name.toLowerCase()){return widgets[i];}}};function formatSortingOrder(v){if(typeof(v)!="Number"){return(v.toLowerCase()=="desc")?1:0;}else{return(v==1)?1:0;}}function isValueInArray(v,a){var l=a.length;for(var i=0;i<l;i++){if(a[i][0]==v){return true;}}return false;}function setHeadersCss(table,$headers,list,css){$headers.removeClass(css[0]).removeClass(css[1]);var h=[];$headers.each(function(offset){if(!this.sortDisabled){h[this.column]=$(this);}});var l=list.length;for(var i=0;i<l;i++){h[list[i][0]].addClass(css[list[i][1]]);}}function fixColumnWidth(table,$headers){var c=table.config;if(c.widthFixed){var colgroup=$('<colgroup>');$("tr:first td",table.tBodies[0]).each(function(){colgroup.append($('<col>').css('width',$(this).width()));});$(table).prepend(colgroup);};}function updateHeaderSortCount(table,sortList){var c=table.config,l=sortList.length;for(var i=0;i<l;i++){var s=sortList[i],o=c.headerList[s[0]];o.count=s[1];o.count++;}}function multisort(table,sortList,cache){if(table.config.debug){var sortTime=new Date();}var dynamicExp="var sortWrapper = function(a,b) {",l=sortList.length;for(var i=0;i<l;i++){var c=sortList[i][0];var order=sortList[i][1];var s=(table.config.parsers[c].type=="text")?((order==0)?makeSortFunction("text","asc",c):makeSortFunction("text","desc",c)):((order==0)?makeSortFunction("numeric","asc",c):makeSortFunction("numeric","desc",c));var e="e"+i;dynamicExp+="var "+e+" = "+s;dynamicExp+="if("+e+") { return "+e+"; } ";dynamicExp+="else { ";}var orgOrderCol=cache.normalized[0].length-1;dynamicExp+="return a["+orgOrderCol+"]-b["+orgOrderCol+"];";for(var i=0;i<l;i++){dynamicExp+="}; ";}dynamicExp+="return 0; ";dynamicExp+="}; ";if(table.config.debug){benchmark("Evaling expression:"+dynamicExp,new Date());}eval(dynamicExp);cache.normalized.sort(sortWrapper);if(table.config.debug){benchmark("Sorting on "+sortList.toString()+" and dir "+order+" time:",sortTime);}return cache;};function makeSortFunction(type,direction,index){var a="a["+index+"]",b="b["+index+"]";if(type=='text'&&direction=='asc'){return"("+a+" == "+b+" ? 0 : ("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : ("+a+" < "+b+") ? -1 : 1 )));";}else if(type=='text'&&direction=='desc'){return"("+a+" == "+b+" ? 0 : ("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : ("+b+" < "+a+") ? -1 : 1 )));";}else if(type=='numeric'&&direction=='asc'){return"("+a+" === null && "+b+" === null) ? 0 :("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : "+a+" - "+b+"));";}else if(type=='numeric'&&direction=='desc'){return"("+a+" === null && "+b+" === null) ? 0 :("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : "+b+" - "+a+"));";}};function makeSortText(i){return"((a["+i+"] < b["+i+"]) ? -1 : ((a["+i+"] > b["+i+"]) ? 1 : 0));";};function makeSortTextDesc(i){return"((b["+i+"] < a["+i+"]) ? -1 : ((b["+i+"] > a["+i+"]) ? 1 : 0));";};function makeSortNumeric(i){return"a["+i+"]-b["+i+"];";};function makeSortNumericDesc(i){return"b["+i+"]-a["+i+"];";};function sortText(a,b){if(table.config.sortLocaleCompare)return a.localeCompare(b);return((a<b)?-1:((a>b)?1:0));};function sortTextDesc(a,b){if(table.config.sortLocaleCompare)return b.localeCompare(a);return((b<a)?-1:((b>a)?1:0));};function sortNumeric(a,b){return a-b;};function sortNumericDesc(a,b){return b-a;};function getCachedSortType(parsers,i){return parsers[i].type;};this.construct=function(settings){return this.each(function(){if(!this.tHead||!this.tBodies)return;var $this,$document,$headers,cache,config,shiftDown=0,sortOrder;this.config={};config=$.extend(this.config,$.tablesorter.defaults,settings);$this=$(this);$.data(this,"tablesorter",config);$headers=buildHeaders(this);this.config.parsers=buildParserCache(this,$headers);cache=buildCache(this);var sortCSS=[config.cssDesc,config.cssAsc];fixColumnWidth(this);$headers.click(function(e){var totalRows=($this[0].tBodies[0]&&$this[0].tBodies[0].rows.length)||0;if(!this.sortDisabled&&totalRows>0){$this.trigger("sortStart");var $cell=$(this);var i=this.column;this.order=this.count++%2;if(this.lockedOrder)this.order=this.lockedOrder;if(!e[config.sortMultiSortKey]){config.sortList=[];if(config.sortForce!=null){var a=config.sortForce;for(var j=0;j<a.length;j++){if(a[j][0]!=i){config.sortList.push(a[j]);}}}config.sortList.push([i,this.order]);}else{if(isValueInArray(i,config.sortList)){for(var j=0;j<config.sortList.length;j++){var s=config.sortList[j],o=config.headerList[s[0]];if(s[0]==i){o.count=s[1];o.count++;s[1]=o.count%2;}}}else{config.sortList.push([i,this.order]);}};setTimeout(function(){setHeadersCss($this[0],$headers,config.sortList,sortCSS);appendToTable($this[0],multisort($this[0],config.sortList,cache));},1);return false;}}).mousedown(function(){if(config.cancelSelection){this.onselectstart=function(){return false};return false;}});$this.bind("update",function(){var me=this;setTimeout(function(){me.config.parsers=buildParserCache(me,$headers);cache=buildCache(me);},1);}).bind("updateCell",function(e,cell){var config=this.config;var pos=[(cell.parentNode.rowIndex-1),cell.cellIndex];cache.normalized[pos[0]][pos[1]]=config.parsers[pos[1]].format(getElementText(config,cell),cell);}).bind("sorton",function(e,list){$(this).trigger("sortStart");config.sortList=list;var sortList=config.sortList;updateHeaderSortCount(this,sortList);setHeadersCss(this,$headers,sortList,sortCSS);appendToTable(this,multisort(this,sortList,cache));}).bind("appendCache",function(){appendToTable(this,cache);}).bind("applyWidgetId",function(e,id){getWidgetById(id).format(this);}).bind("applyWidgets",function(){applyWidget(this);});if($.metadata&&($(this).metadata()&&$(this).metadata().sortlist)){config.sortList=$(this).metadata().sortlist;}if(config.sortList.length>0){$this.trigger("sorton",[config.sortList]);}applyWidget(this);});};this.addParser=function(parser){var l=parsers.length,a=true;for(var i=0;i<l;i++){if(parsers[i].id.toLowerCase()==parser.id.toLowerCase()){a=false;}}if(a){parsers.push(parser);};};this.addWidget=function(widget){widgets.push(widget);};this.formatFloat=function(s){var i=parseFloat(s);return(isNaN(i))?0:i;};this.formatInt=function(s){var i=parseInt(s);return(isNaN(i))?0:i;};this.isDigit=function(s,config){return/^[-+]?\d*$/.test($.trim(s.replace(/[,.']/g,'')));};this.clearTableBody=function(table){if($.browser.msie){function empty(){while(this.firstChild)this.removeChild(this.firstChild);}empty.apply(table.tBodies[0]);}else{table.tBodies[0].innerHTML="";}};}});$.fn.extend({tablesorter:$.tablesorter.construct});var ts=$.tablesorter;ts.addParser({id:"text",is:function(s){return true;},format:function(s){return $.trim(s.toLocaleLowerCase());},type:"text"});ts.addParser({id:"digit",is:function(s,table){var c=table.config;return $.tablesorter.isDigit(s,c);},format:function(s){return $.tablesorter.formatFloat(s);},type:"numeric"});ts.addParser({id:"currency",is:function(s){return/^[£$€?.]/.test(s);},format:function(s){return $.tablesorter.formatFloat(s.replace(new RegExp(/[£$€]/g),""));},type:"numeric"});ts.addParser({id:"ipAddress",is:function(s){return/^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s);},format:function(s){var a=s.split("."),r="",l=a.length;for(var i=0;i<l;i++){var item=a[i];if(item.length==2){r+="0"+item;}else{r+=item;}}return $.tablesorter.formatFloat(r);},type:"numeric"});ts.addParser({id:"url",is:function(s){return/^(https?|ftp|file):\/\/$/.test(s);},format:function(s){return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//),''));},type:"text"});ts.addParser({id:"isoDate",is:function(s){return/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s);},format:function(s){return $.tablesorter.formatFloat((s!="")?new Date(s.replace(new RegExp(/-/g),"/")).getTime():"0");},type:"numeric"});ts.addParser({id:"percent",is:function(s){return/\%$/.test($.trim(s));},format:function(s){return $.tablesorter.formatFloat(s.replace(new RegExp(/%/g),""));},type:"numeric"});ts.addParser({id:"usLongDate",is:function(s){return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/));},format:function(s){return $.tablesorter.formatFloat(new Date(s).getTime());},type:"numeric"});ts.addParser({id:"shortDate",is:function(s){return/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s);},format:function(s,table){var c=table.config;s=s.replace(/\-/g,"/");if(c.dateFormat=="us"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$1/$2");}else if(c.dateFormat=="uk"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$2/$1");}else if(c.dateFormat=="dd/mm/yy"||c.dateFormat=="dd-mm-yy"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/,"$1/$2/$3");}return $.tablesorter.formatFloat(new Date(s).getTime());},type:"numeric"});ts.addParser({id:"time",is:function(s){return/^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s);},format:function(s){return $.tablesorter.formatFloat(new Date("2000/01/01 "+s).getTime());},type:"numeric"});ts.addParser({id:"metadata",is:function(s){return false;},format:function(s,table,cell){var c=table.config,p=(!c.parserMetadataName)?'sortValue':c.parserMetadataName;return $(cell).metadata()[p];},type:"numeric"});ts.addWidget({id:"zebra",format:function(table){if(table.config.debug){var time=new Date();}var $tr,row=-1,odd;$("tr:visible",table.tBodies[0]).each(function(i){$tr=$(this);if(!$tr.hasClass(table.config.cssChildRow))row++;odd=(row%2==0);$tr.removeClass(table.config.widgetZebra.css[odd?0:1]).addClass(table.config.widgetZebra.css[odd?1:0])});if(table.config.debug){$.tablesorter.benchmark("Applying Zebra widget",time);}}});})(jQuery);; /* ../js/lib/tinymce/tinymce.min.js */ // 4.0.2 (2013-07-18)
!function(e,t){"use strict";function n(e,t){for(var n,r=[],i=0;i<e.length;++i){if(n=s[e[i]]||o(e[i]),!n)throw"module definition dependecy not found: "+e[i];r.push(n)}t.apply(null,r)}function r(e,r,i){if("string"!=typeof e)throw"invalid module definition, module id must be defined and be a string";if(r===t)throw"invalid module definition, dependencies must be specified";if(i===t)throw"invalid module definition, definition function must be specified";n(r,function(){s[e]=i.apply(null,arguments)})}function i(e){return!!s[e]}function o(t){for(var n=e,r=t.split(/[.\/]/),i=0;i<r.length;++i){if(!n[r[i]])return;n=n[r[i]]}return n}function a(n){for(var r=0;r<n.length;r++){for(var i=e,o=n[r],a=o.split(/[.\/]/),l=0;l<a.length-1;++l)i[a[l]]===t&&(i[a[l]]={}),i=i[a[l]];i[a[a.length-1]]=s[o]}}var s={},l="tinymce/dom/Sizzle",c="tinymce/html/Styles",d="tinymce/dom/EventUtils",u="tinymce/dom/TreeWalker",f="tinymce/util/Tools",p="tinymce/dom/Range",h="tinymce/html/Entities",m="tinymce/Env",g="tinymce/dom/DOMUtils",v="tinymce/dom/ScriptLoader",y="tinymce/AddOnManager",b="tinymce/html/Node",C="tinymce/html/Schema",x="tinymce/html/SaxParser",w="tinymce/html/DomParser",_="tinymce/html/Writer",N="tinymce/html/Serializer",E="tinymce/dom/Serializer",k="tinymce/dom/TridentSelection",S="tinymce/util/VK",T="tinymce/dom/ControlSelection",R="tinymce/dom/Selection",A="tinymce/dom/RangeUtils",B="tinymce/Formatter",H="tinymce/UndoManager",M="tinymce/EnterKey",L="tinymce/ForceBlocks",D="tinymce/EditorCommands",P="tinymce/util/URI",O="tinymce/util/Class",I="tinymce/ui/Selector",F="tinymce/ui/Collection",W="tinymce/ui/DomUtils",z="tinymce/ui/Control",V="tinymce/ui/Factory",U="tinymce/ui/Container",q="tinymce/ui/DragHelper",j="tinymce/ui/Scrollable",$="tinymce/ui/Panel",K="tinymce/ui/Movable",G="tinymce/ui/Resizable",Y="tinymce/ui/FloatPanel",X="tinymce/ui/KeyboardNavigation",J="tinymce/ui/Window",Q="tinymce/ui/MessageBox",Z="tinymce/WindowManager",et="tinymce/util/Quirks",tt="tinymce/util/Observable",nt="tinymce/Shortcuts",rt="tinymce/Editor",it="tinymce/util/I18n",ot="tinymce/FocusManager",at="tinymce/EditorManager",st="tinymce/LegacyInput",lt="tinymce/util/XHR",ct="tinymce/util/JSON",dt="tinymce/util/JSONRequest",ut="tinymce/util/JSONP",ft="tinymce/util/LocalStorage",pt="tinymce/Compat",ht="tinymce/ui/Layout",mt="tinymce/ui/AbsoluteLayout",gt="tinymce/ui/Tooltip",vt="tinymce/ui/Widget",yt="tinymce/ui/Button",bt="tinymce/ui/ButtonGroup",Ct="tinymce/ui/Checkbox",xt="tinymce/ui/PanelButton",wt="tinymce/ui/ColorButton",_t="tinymce/ui/ComboBox",Nt="tinymce/ui/Path",Et="tinymce/ui/ElementPath",kt="tinymce/ui/FormItem",St="tinymce/ui/Form",Tt="tinymce/ui/FieldSet",Rt="tinymce/ui/FilePicker",At="tinymce/ui/FitLayout",Bt="tinymce/ui/FlexLayout",Ht="tinymce/ui/FlowLayout",Mt="tinymce/ui/FormatControls",Lt="tinymce/ui/GridLayout",Dt="tinymce/ui/Iframe",Pt="tinymce/ui/Label",Ot="tinymce/ui/Toolbar",It="tinymce/ui/MenuBar",Ft="tinymce/ui/MenuButton",Wt="tinymce/ui/ListBox",zt="tinymce/ui/MenuItem",Vt="tinymce/ui/Menu",Ut="tinymce/ui/Radio",qt="tinymce/ui/ResizeHandle",jt="tinymce/ui/Spacer",$t="tinymce/ui/SplitButton",Kt="tinymce/ui/StackLayout",Gt="tinymce/ui/TabPanel",Yt="tinymce/ui/TextBox",Xt="tinymce/ui/Throbber";r(l,[],function(){function e(e,n,r,i){return t.find(e,n,r,i)}if(!window.jQuery)throw new Error("Load jQuery first");var t=jQuery;return e.matches=function(e,n){return t(n).is(e)?n:[]},e}),r(c,[],function(){return function(e,t){function n(e,t,n,r){function i(e){return e=parseInt(e,10).toString(16),e.length>1?e:"0"+e}return"#"+i(t)+i(n)+i(r)}var r=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,i=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,o=/\s*([^:]+):\s*([^;]+);?/g,a=/\s+$/,s,l,c={},d,u="\ufeff";for(e=e||{},d=("\\\" \\' \\; \\: ; : "+u).split(" "),l=0;l<d.length;l++)c[d[l]]=u+l,c[u+l]=d[l];return{toHex:function(e){return e.replace(r,n)},parse:function(t){function s(e,t){var n,r,i,o;n=h[e+"-top"+t],n&&(r=h[e+"-right"+t],n==r&&(i=h[e+"-bottom"+t],r==i&&(o=h[e+"-left"+t],i==o&&(h[e+t]=o,delete h[e+"-top"+t],delete h[e+"-right"+t],delete h[e+"-bottom"+t],delete h[e+"-left"+t]))))}function l(e){var t=h[e],n;if(t&&!(t.indexOf(" ")<0)){for(t=t.split(" "),n=t.length;n--;)if(t[n]!==t[0])return!1;return h[e]=t[0],!0}}function d(e,t,n,r){l(t)&&l(n)&&l(r)&&(h[e]=h[t]+" "+h[n]+" "+h[r],delete h[t],delete h[n],delete h[r])}function u(e){return y=!0,c[e]}function f(e,t){return y&&(e=e.replace(/\uFEFF[0-9]/g,function(e){return c[e]})),t||(e=e.replace(/\\([\'\";:])/g,"$1")),e}function p(e,t,n,r,i,o){return(i=i||o)?(i=f(i),"'"+i.replace(/\'/g,"\\'")+"'"):(t=f(t||n||r),b&&(t=b.call(C,t,"style")),"url('"+t.replace(/\'/g,"\\'")+"')")}var h={},m,g,v,y,b=e.url_converter,C=e.url_converter_scope||this;if(t){for(t=t.replace(/\\[\"\';:\uFEFF]/g,u).replace(/\"[^\"]+\"|\'[^\']+\'/g,function(e){return e.replace(/[;:]/g,u)});m=o.exec(t);)g=m[1].replace(a,"").toLowerCase(),v=m[2].replace(a,""),g&&v.length>0&&("font-weight"===g&&"700"===v?v="bold":("color"===g||"background-color"===g)&&(v=v.toLowerCase()),v=v.replace(r,n),v=v.replace(i,p),h[g]=y?f(v,!0):v),o.lastIndex=m.index+m[0].length;s("border",""),s("border","-width"),s("border","-color"),s("border","-style"),s("padding",""),s("margin",""),d("border","border-width","border-style","border-color"),"medium none"===h.border&&delete h.border}return h},serialize:function(e,n){function r(n){var r,o,a,l;if(r=t.styles[n])for(o=0,a=r.length;a>o;o++)n=r[o],l=e[n],l!==s&&l.length>0&&(i+=(i.length>0?" ":"")+n+": "+l+";")}var i="",o,a;if(n&&t&&t.styles)r("*"),r(n);else for(o in e)a=e[o],a!==s&&a.length>0&&(i+=(i.length>0?" ":"")+o+": "+a+";");return i}}}}),r(d,[],function(){function e(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)}function t(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,r||!1):e.detachEvent&&e.detachEvent("on"+t,n)}function n(e,t){function n(){return!1}function r(){return!0}var i,o=t||{},s;for(i in e)"layerX"!==i&&"layerY"!==i&&(o[i]=e[i]);if(o.target||(o.target=o.srcElement||document),e&&a.test(e.type)&&e.pageX===s&&e.clientX!==s){var l=o.target.ownerDocument||document,c=l.documentElement,d=l.body;o.pageX=e.clientX+(c&&c.scrollLeft||d&&d.scrollLeft||0)-(c&&c.clientLeft||d&&d.clientLeft||0),o.pageY=e.clientY+(c&&c.scrollTop||d&&d.scrollTop||0)-(c&&c.clientTop||d&&d.clientTop||0)}return o.preventDefault=function(){o.isDefaultPrevented=r,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},o.stopPropagation=function(){o.isPropagationStopped=r,e&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0)},o.stopImmediatePropagation=function(){o.isImmediatePropagationStopped=r,o.stopPropagation()},o.isDefaultPrevented||(o.isDefaultPrevented=n,o.isPropagationStopped=n,o.isImmediatePropagationStopped=n),o}function r(n,r,i){function o(){i.domLoaded||(i.domLoaded=!0,r(c))}function a(){"complete"===l.readyState&&(t(l,"readystatechange",a),o())}function s(){try{l.documentElement.doScroll("left")}catch(e){return setTimeout(s,0),void 0}o()}var l=n.document,c={type:"ready"};return i.domLoaded?(r(c),void 0):(l.addEventListener?e(n,"DOMContentLoaded",o):(e(l,"readystatechange",a),l.documentElement.doScroll&&n===n.top&&s()),e(n,"load",o),void 0)}function i(){function i(e,t){var n,r,i,o;if(n=s[t][e.type])for(r=0,i=n.length;i>r;r++)if(o=n[r],o&&o.func.call(o.scope,e)===!1&&e.preventDefault(),e.isImmediatePropagationStopped())return}var a=this,s={},l,c,d,u,f;c=o+(+new Date).toString(32),u="onmouseenter"in document.documentElement,d="onfocusin"in document.documentElement,f={mouseenter:"mouseover",mouseleave:"mouseout"},l=1,a.domLoaded=!1,a.events=s,a.bind=function(t,o,p,h){function m(e){i(n(e||_.event),g)}var g,v,y,b,C,x,w,_=window;if(t&&3!==t.nodeType&&8!==t.nodeType){for(t[c]?g=t[c]:(g=l++,t[c]=g,s[g]={}),h=h||t,o=o.split(" "),y=o.length;y--;)b=o[y],x=m,C=w=!1,"DOMContentLoaded"===b&&(b="ready"),a.domLoaded&&"ready"===b&&"complete"==t.readyState?p.call(h,n({type:b})):(u||(C=f[b],C&&(x=function(e){var t,r;if(t=e.currentTarget,r=e.relatedTarget,r&&t.contains)r=t.contains(r);else for(;r&&r!==t;)r=r.parentNode;r||(e=n(e||_.event),e.type="mouseout"===e.type?"mouseleave":"mouseenter",e.target=t,i(e,g))})),d||"focusin"!==b&&"focusout"!==b||(w=!0,C="focusin"===b?"focus":"blur",x=function(e){e=n(e||_.event),e.type="focus"===e.type?"focusin":"focusout",i(e,g)}),v=s[g][b],v?"ready"===b&&a.domLoaded?p({type:b}):v.push({func:p,scope:h}):(s[g][b]=v=[{func:p,scope:h}],v.fakeName=C,v.capture=w,v.nativeHandler=x,"ready"===b?r(t,x,a):e(t,C||b,x,w)));return t=v=0,p}},a.unbind=function(e,n,r){var i,o,l,d,u,f;if(!e||3===e.nodeType||8===e.nodeType)return a;if(i=e[c]){if(f=s[i],n){for(n=n.split(" "),l=n.length;l--;)if(u=n[l],o=f[u]){if(r)for(d=o.length;d--;)o[d].func===r&&o.splice(d,1);r&&0!==o.length||(delete f[u],t(e,o.fakeName||u,o.nativeHandler,o.capture))}}else{for(u in f)o=f[u],t(e,o.fakeName||u,o.nativeHandler,o.capture);f={}}for(u in f)return a;delete s[i];try{delete e[c]}catch(p){e[c]=null}}return a},a.fire=function(e,t,r){var o;if(!e||3===e.nodeType||8===e.nodeType)return a;r=n(null,r),r.type=t,r.target=e;do o=e[c],o&&i(r,o),e=e.parentNode||e.ownerDocument||e.defaultView||e.parentWindow;while(e&&!r.isPropagationStopped());return a},a.clean=function(e){var t,n,r=a.unbind;if(!e||3===e.nodeType||8===e.nodeType)return a;if(e[c]&&r(e),e.getElementsByTagName||(e=e.document),e&&e.getElementsByTagName)for(r(e),n=e.getElementsByTagName("*"),t=n.length;t--;)e=n[t],e[c]&&r(e);return a},a.destroy=function(){s={}},a.cancel=function(e){return e&&(e.preventDefault(),e.stopImmediatePropagation()),!1}}var o="mce-data-",a=/^(?:mouse|contextmenu)|click/;return i.Event=new i,i.Event.bind(window,"ready",function(){}),i}),r(u,[],function(){return function(e,t){function n(e,n,r,i){var o,a;if(e){if(!i&&e[n])return e[n];if(e!=t){if(o=e[r])return o;for(a=e.parentNode;a&&a!=t;a=a.parentNode)if(o=a[r])return o}}}var r=e;this.current=function(){return r},this.next=function(e){return r=n(r,"firstChild","nextSibling",e)},this.prev=function(e){return r=n(r,"lastChild","previousSibling",e)}}}),r(f,[],function(){function e(e,n){return n?"array"==n&&g(e)?!0:typeof e==n:e!==t}function n(e){var t=[],n,r;for(n=0,r=e.length;r>n;n++)t[n]=e[n];return t}function r(e,t,n){var r;for(e=e||[],t=t||",","string"==typeof e&&(e=e.split(t)),n=n||{},r=e.length;r--;)n[e[r]]={};return n}function i(e,n,r){var i,o;if(!e)return 0;if(r=r||e,e.length!==t){for(i=0,o=e.length;o>i;i++)if(n.call(r,e[i],i,e)===!1)return 0}else for(i in e)if(e.hasOwnProperty(i)&&n.call(r,e[i],i,e)===!1)return 0;return 1}function o(e,t){var n=[];return i(e,function(e){n.push(t(e))}),n}function a(e,t){var n=[];return i(e,function(e){(!t||t(e))&&n.push(e)}),n}function s(e,t,n){var r=this,i,o,a,s,l,c=0;if(e=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(e),a=e[3].match(/(^|\.)(\w+)$/i)[2],o=r.createNS(e[3].replace(/\.\w+$/,""),n),!o[a]){if("static"==e[2])return o[a]=t,this.onCreate&&this.onCreate(e[2],e[3],o[a]),void 0;t[a]||(t[a]=function(){},c=1),o[a]=t[a],r.extend(o[a].prototype,t),e[5]&&(i=r.resolve(e[5]).prototype,s=e[5].match(/\.(\w+)$/i)[1],l=o[a],o[a]=c?function(){return i[s].apply(this,arguments)}:function(){return this.parent=i[s],l.apply(this,arguments)},o[a].prototype[a]=o[a],r.each(i,function(e,t){o[a].prototype[t]=i[t]}),r.each(t,function(e,t){i[t]?o[a].prototype[t]=function(){return this.parent=i[t],e.apply(this,arguments)}:t!=a&&(o[a].prototype[t]=e)})),r.each(t["static"],function(e,t){o[a][t]=e})}}function l(e,t){var n,r;if(e)for(n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1}function c(e,n){var r,i,o,a=arguments,s;for(r=1,i=a.length;i>r;r++){n=a[r];for(o in n)n.hasOwnProperty(o)&&(s=n[o],s!==t&&(e[o]=s))}return e}function d(e,t,n,r){r=r||this,e&&(n&&(e=e[n]),i(e,function(e,i){return t.call(r,e,i,n)===!1?!1:(d(e,t,n,r),void 0)}))}function u(e,t){var n,r;for(t=t||window,e=e.split("."),n=0;n<e.length;n++)r=e[n],t[r]||(t[r]={}),t=t[r];return t}function f(e,t){var n,r;for(t=t||window,e=e.split("."),n=0,r=e.length;r>n&&(t=t[e[n]],t);n++);return t}function p(t,n){return!t||e(t,"array")?t:o(t.split(n||","),m)}var h=/^\s*|\s*$/g,m=function(e){return null===e||e===t?"":(""+e).replace(h,"")},g=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};return{trim:m,isArray:g,is:e,toArray:n,makeMap:r,each:i,map:o,grep:a,inArray:l,extend:c,create:s,walk:d,createNS:u,resolve:f,explode:p}}),r(p,[f],function(e){function t(n){function r(){return D.createDocumentFragment()}function i(e,t){_(F,e,t)}function o(e,t){_(W,e,t)}function a(e){i(e.parentNode,$(e))}function s(e){i(e.parentNode,$(e)+1)}function l(e){o(e.parentNode,$(e))}function c(e){o(e.parentNode,$(e)+1)}function d(e){e?(L[U]=L[V],L[q]=L[z]):(L[V]=L[U],L[z]=L[q]),L.collapsed=F}function u(e){a(e),c(e)}function f(e){i(e,0),o(e,1===e.nodeType?e.childNodes.length:e.nodeValue.length)}function p(e,t){var n=L[V],r=L[z],i=L[U],o=L[q],a=t.startContainer,s=t.startOffset,l=t.endContainer,c=t.endOffset;return 0===e?w(n,r,a,s):1===e?w(i,o,a,s):2===e?w(i,o,l,c):3===e?w(n,r,l,c):void 0}function h(){N(I)}function m(){return N(P)}function g(){return N(O)}function v(e){var t=this[V],r=this[z],i,o;3!==t.nodeType&&4!==t.nodeType||!t.nodeValue?(t.childNodes.length>0&&(o=t.childNodes[r]),o?t.insertBefore(e,o):t.appendChild(e)):r?r>=t.nodeValue.length?n.insertAfter(e,t):(i=t.splitText(r),t.parentNode.insertBefore(e,i)):t.parentNode.insertBefore(e,t)}function y(e){var t=L.extractContents();L.insertNode(e),e.appendChild(t),L.selectNode(e)}function b(){return j(new t(n),{startContainer:L[V],startOffset:L[z],endContainer:L[U],endOffset:L[q],collapsed:L.collapsed,commonAncestorContainer:L.commonAncestorContainer})}function C(e,t){var n;if(3==e.nodeType)return e;if(0>t)return e;for(n=e.firstChild;n&&t>0;)--t,n=n.nextSibling;return n?n:e}function x(){return L[V]==L[U]&&L[z]==L[q]}function w(e,t,r,i){var o,a,s,l,c,d;if(e==r)return t==i?0:i>t?-1:1;for(o=r;o&&o.parentNode!=e;)o=o.parentNode;if(o){for(a=0,s=e.firstChild;s!=o&&t>a;)a++,s=s.nextSibling;return a>=t?-1:1}for(o=e;o&&o.parentNode!=r;)o=o.parentNode;if(o){for(a=0,s=r.firstChild;s!=o&&i>a;)a++,s=s.nextSibling;return i>a?-1:1}for(l=n.findCommonAncestor(e,r),c=e;c&&c.parentNode!=l;)c=c.parentNode;for(c||(c=l),d=r;d&&d.parentNode!=l;)d=d.parentNode;if(d||(d=l),c==d)return 0;for(s=l.firstChild;s;){if(s==c)return-1;if(s==d)return 1;s=s.nextSibling}}function _(e,t,r){var i,o;for(e?(L[V]=t,L[z]=r):(L[U]=t,L[q]=r),i=L[U];i.parentNode;)i=i.parentNode;for(o=L[V];o.parentNode;)o=o.parentNode;o==i?w(L[V],L[z],L[U],L[q])>0&&L.collapse(e):L.collapse(e),L.collapsed=x(),L.commonAncestorContainer=n.findCommonAncestor(L[V],L[U])}function N(e){var t,n=0,r=0,i,o,a,s,l,c;if(L[V]==L[U])return E(e);for(t=L[U],i=t.parentNode;i;t=i,i=i.parentNode){if(i==L[V])return k(t,e);++n}for(t=L[V],i=t.parentNode;i;t=i,i=i.parentNode){if(i==L[U])return S(t,e);++r}for(o=r-n,a=L[V];o>0;)a=a.parentNode,o--;for(s=L[U];0>o;)s=s.parentNode,o++;for(l=a.parentNode,c=s.parentNode;l!=c;l=l.parentNode,c=c.parentNode)a=l,s=c;return T(a,s,e)}function E(e){var t,n,i,o,a,s,l,c,d;if(e!=I&&(t=r()),L[z]==L[q])return t;if(3==L[V].nodeType){if(n=L[V].nodeValue,i=n.substring(L[z],L[q]),e!=O&&(o=L[V],c=L[z],d=L[q]-L[z],0===c&&d>=o.nodeValue.length-1?o.parentNode.removeChild(o):o.deleteData(c,d),L.collapse(F)),e==I)return;return i.length>0&&t.appendChild(D.createTextNode(i)),t}for(o=C(L[V],L[z]),a=L[q]-L[z];o&&a>0;)s=o.nextSibling,l=H(o,e),t&&t.appendChild(l),--a,o=s;return e!=O&&L.collapse(F),t}function k(e,t){var n,i,o,a,s,l;if(t!=I&&(n=r()),i=R(e,t),n&&n.appendChild(i),o=$(e),a=o-L[z],0>=a)return t!=O&&(L.setEndBefore(e),L.collapse(W)),n;for(i=e.previousSibling;a>0;)s=i.previousSibling,l=H(i,t),n&&n.insertBefore(l,n.firstChild),--a,i=s;return t!=O&&(L.setEndBefore(e),L.collapse(W)),n}function S(e,t){var n,i,o,a,s,l;for(t!=I&&(n=r()),o=A(e,t),n&&n.appendChild(o),i=$(e),++i,a=L[q]-i,o=e.nextSibling;o&&a>0;)s=o.nextSibling,l=H(o,t),n&&n.appendChild(l),--a,o=s;return t!=O&&(L.setStartAfter(e),L.collapse(F)),n}function T(e,t,n){var i,o,a,s,l,c,d,u;for(n!=I&&(o=r()),i=A(e,n),o&&o.appendChild(i),a=e.parentNode,s=$(e),l=$(t),++s,c=l-s,d=e.nextSibling;c>0;)u=d.nextSibling,i=H(d,n),o&&o.appendChild(i),d=u,--c;return i=R(t,n),o&&o.appendChild(i),n!=O&&(L.setStartAfter(e),L.collapse(F)),o}function R(e,t){var n=C(L[U],L[q]-1),r,i,o,a,s,l=n!=L[U];if(n==e)return B(n,l,W,t);for(r=n.parentNode,i=B(r,W,W,t);r;){for(;n;)o=n.previousSibling,a=B(n,l,W,t),t!=I&&i.insertBefore(a,i.firstChild),l=F,n=o;if(r==e)return i;n=r.previousSibling,r=r.parentNode,s=B(r,W,W,t),t!=I&&s.appendChild(i),i=s}}function A(e,t){var n=C(L[V],L[z]),r=n!=L[V],i,o,a,s,l;if(n==e)return B(n,r,F,t);for(i=n.parentNode,o=B(i,W,F,t);i;){for(;n;)a=n.nextSibling,s=B(n,r,F,t),t!=I&&o.appendChild(s),r=F,n=a;if(i==e)return o;n=i.nextSibling,i=i.parentNode,l=B(i,W,F,t),t!=I&&l.appendChild(o),o=l}}function B(e,t,r,i){var o,a,s,l,c;if(t)return H(e,i);if(3==e.nodeType){if(o=e.nodeValue,r?(l=L[z],a=o.substring(l),s=o.substring(0,l)):(l=L[q],a=o.substring(0,l),s=o.substring(l)),i!=O&&(e.nodeValue=s),i==I)return;return c=n.clone(e,W),c.nodeValue=a,c}if(i!=I)return n.clone(e,W)}function H(e,t){return t!=I?t==O?n.clone(e,F):e:(e.parentNode.removeChild(e),void 0)}function M(){return n.create("body",null,g()).outerText}var L=this,D=n.doc,P=0,O=1,I=2,F=!0,W=!1,z="startOffset",V="startContainer",U="endContainer",q="endOffset",j=e.extend,$=n.nodeIndex;return j(L,{startContainer:D,startOffset:0,endContainer:D,endOffset:0,collapsed:F,commonAncestorContainer:D,START_TO_START:0,START_TO_END:1,END_TO_END:2,END_TO_START:3,setStart:i,setEnd:o,setStartBefore:a,setStartAfter:s,setEndBefore:l,setEndAfter:c,collapse:d,selectNode:u,selectNodeContents:f,compareBoundaryPoints:p,deleteContents:h,extractContents:m,cloneContents:g,insertNode:v,surroundContents:y,cloneRange:b,toStringIE:M}),L}return t.prototype.toString=function(){return this.toStringIE()},t}),r(h,[f],function(e){function t(e){var t;return t=document.createElement("div"),t.innerHTML=e,t.textContent||t.innerText||e}function n(e,t){var n,r,i,a={};if(e){for(e=e.split(","),t=t||10,n=0;n<e.length;n+=2)r=String.fromCharCode(parseInt(e[n],t)),o[r]||(i="&"+e[n+1]+";",a[r]=i,a[i]=r);return a}}var r=e.makeMap,i,o,a,s=/[&<>\"\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,l=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,c=/[<>&\"\']/g,d=/&(#x|#)?([\w]+);/g,u={128:"\u20ac",130:"\u201a",131:"\u0192",132:"\u201e",133:"\u2026",134:"\u2020",135:"\u2021",136:"\u02c6",137:"\u2030",138:"\u0160",139:"\u2039",140:"\u0152",142:"\u017d",145:"\u2018",146:"\u2019",147:"\u201c",148:"\u201d",149:"\u2022",150:"\u2013",151:"\u2014",152:"\u02dc",153:"\u2122",154:"\u0161",155:"\u203a",156:"\u0153",158:"\u017e",159:"\u0178"};o={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;"},a={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"},i=n("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32);var f={encodeRaw:function(e,t){return e.replace(t?s:l,function(e){return o[e]||e})},encodeAllRaw:function(e){return(""+e).replace(c,function(e){return o[e]||e})},encodeNumeric:function(e,t){return e.replace(t?s:l,function(e){return e.length>1?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":o[e]||"&#"+e.charCodeAt(0)+";"})},encodeNamed:function(e,t,n){return n=n||i,e.replace(t?s:l,function(e){return o[e]||n[e]||e})},getEncodeFunc:function(e,t){function a(e,n){return e.replace(n?s:l,function(e){return o[e]||t[e]||"&#"+e.charCodeAt(0)+";"||e})}function c(e,n){return f.encodeNamed(e,n,t)}return t=n(t)||i,e=r(e.replace(/\+/g,",")),e.named&&e.numeric?a:e.named?t?c:f.encodeNamed:e.numeric?f.encodeNumeric:f.encodeRaw},decode:function(e){return e.replace(d,function(e,n,r){return n?(r=parseInt(r,2===n.length?16:10),r>65535?(r-=65536,String.fromCharCode(55296+(r>>10),56320+(1023&r))):u[r]||String.fromCharCode(r)):a[e]||i[e]||t(e)})}};return f}),r(m,[],function(){var e=navigator,t=e.userAgent,n,r,i,o,a,s;n=window.opera&&window.opera.buildNumber,r=/WebKit/.test(t),i=!r&&!n&&/MSIE/gi.test(t)&&/Explorer/gi.test(e.appName),i=i&&/MSIE (\w+)\./.exec(t)[1],o=!r&&/Gecko/.test(t),a=-1!=t.indexOf("Mac"),s=/(iPad|iPhone)/.test(t);var l=!s||t.match(/AppleWebKit\/(\d*)/)[1]>=534;return{opera:n,webkit:r,ie:i,gecko:o,mac:a,iOS:s,contentEditable:l,transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",caretAfter:8!=i,range:window.getSelection&&"Range"in window,documentMode:i?document.documentMode||7:10}}),r(g,[l,c,d,u,p,h,m,f],function(e,n,r,i,o,a,s,l){function c(e,t){var i=this,o;i.doc=e,i.win=window,i.files={},i.counter=0,i.stdMode=!g||e.documentMode>=8,i.boxModel=!g||"CSS1Compat"==e.compatMode||i.stdMode,i.hasOuterHTML="outerHTML"in e.createElement("a"),i.settings=t=h({keep_values:!1,hex_colors:1},t),i.schema=t.schema,i.styles=new n({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope},t.schema),i.fixDoc(e),i.events=t.ownEvents?new r(t.proxy):r.Event,o=t.schema?t.schema.getBlockElements():{},i.isBlock=function(e){if(!e)return!1;var t=e.nodeType;return t?!(1!==t||!o[e.nodeName]):!!o[e]}}var d=l.each,u=l.is,f=l.grep,p=l.trim,h=l.extend,m=s.webkit,g=s.ie,v=/^([a-z0-9],?)+$/i,y=/^[ \t\r\n]*$/,b=l.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"," ");return c.prototype={root:null,props:{"for":"htmlFor","class":"className",className:"className",checked:"checked",disabled:"disabled",maxlength:"maxLength",readonly:"readOnly",selected:"selected",value:"value",id:"id",name:"name",type:"type"},fixDoc:function(e){var t=this.settings,n;if(g&&t.schema){"abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video".replace(/\w+/g,function(t){e.createElement(t)});for(n in t.schema.getCustomElements())e.createElement(n)}},clone:function(e,t){var n=this,r,i;return!g||1!==e.nodeType||t?e.cloneNode(t):(i=n.doc,t?r.firstChild:(r=i.createElement(e.nodeName),d(n.getAttribs(e),function(t){n.setAttrib(r,t.nodeName,n.getAttrib(e,t.nodeName))}),r))},getRoot:function(){var e=this;return e.get(e.settings.root_element)||e.doc.body},getViewPort:function(e){var t,n;return e=e?e:this.win,t=e.document,n=this.boxModel?t.documentElement:t.body,{x:e.pageXOffset||n.scrollLeft,y:e.pageYOffset||n.scrollTop,w:e.innerWidth||n.clientWidth,h:e.innerHeight||n.clientHeight}},getRect:function(e){var t=this,n,r;return e=t.get(e),n=t.getPos(e),r=t.getSize(e),{x:n.x,y:n.y,w:r.w,h:r.h}},getSize:function(e){var t=this,n,r;return e=t.get(e),n=t.getStyle(e,"width"),r=t.getStyle(e,"height"),-1===n.indexOf("px")&&(n=0),-1===r.indexOf("px")&&(r=0),{w:parseInt(n,10)||e.offsetWidth||e.clientWidth,h:parseInt(r,10)||e.offsetHeight||e.clientHeight}},getParent:function(e,t,n){return this.getParents(e,t,n,!1)},getParents:function(e,n,r,i){var o=this,a,s=[];for(e=o.get(e),i=i===t,r=r||("BODY"!=o.getRoot().nodeName?o.getRoot().parentNode:null),u(n,"string")&&(a=n,n="*"===n?function(e){return 1==e.nodeType}:function(e){return o.is(e,a)});e&&e!=r&&e.nodeType&&9!==e.nodeType;){if(!n||n(e)){if(!i)return e;s.push(e)}e=e.parentNode}return i?s:null},get:function(e){var t;return e&&this.doc&&"string"==typeof e&&(t=e,e=this.doc.getElementById(e),e&&e.id!==t)?this.doc.getElementsByName(t)[1]:e},getNext:function(e,t){return this._findSib(e,t,"nextSibling")},getPrev:function(e,t){return this._findSib(e,t,"previousSibling")},select:function(t,n){var r=this;return e(t,r.get(n)||r.get(r.settings.root_element)||r.doc,[])},is:function(n,r){var i;if(n.length===t){if("*"===r)return 1==n.nodeType;if(v.test(r)){for(r=r.toLowerCase().split(/,/),n=n.nodeName.toLowerCase(),i=r.length-1;i>=0;i--)if(r[i]==n)return!0;return!1}}return n.nodeType&&1!=n.nodeType?!1:e.matches(r,n.nodeType?[n]:n).length>0},add:function(e,t,n,r,i){var o=this;return this.run(e,function(e){var a;return a=u(t,"string")?o.doc.createElement(t):t,o.setAttribs(a,n),r&&(r.nodeType?a.appendChild(r):o.setHTML(a,r)),i?a:e.appendChild(a)})},create:function(e,t,n){return this.add(this.doc.createElement(e),e,t,n,1)},createHTML:function(e,t,n){var r="",i;r+="<"+e;for(i in t)t.hasOwnProperty(i)&&null!==t[i]&&(r+=" "+i+'="'+this.encode(t[i])+'"');return"undefined"!=typeof n?r+">"+n+"</"+e+">":r+" />"},createFragment:function(e){var t,n,r=this.doc,i;for(i=r.createElement("div"),t=r.createDocumentFragment(),e&&(i.innerHTML=e);n=i.firstChild;)t.appendChild(n);return t},remove:function(e,t){return this.run(e,function(e){var n,r=e.parentNode;if(!r)return null;if(t)for(;n=e.firstChild;)!g||3!==n.nodeType||n.nodeValue?r.insertBefore(n,e):e.removeChild(n);return r.removeChild(e)})},setStyle:function(e,t,n){return this.run(e,function(e){var r=this,i,o;if(t)if("string"==typeof t){i=e.style,t=t.replace(/-(\D)/g,function(e,t){return t.toUpperCase()}),"number"!=typeof n||b[t]||(n+="px"),"opacity"===t&&e.runtimeStyle&&"undefined"==typeof e.runtimeStyle.opacity&&(i.filter=""===n?"":"alpha(opacity="+100*n+")"),"float"==t&&(t="cssFloat"in e.style?"cssFloat":"styleFloat");try{i[t]=n}catch(a){}r.settings.update_styles&&e.removeAttribute("data-mce-style")}else for(o in t)r.setStyle(e,o,t[o])})},getStyle:function(e,n,r){if(e=this.get(e)){if(this.doc.defaultView&&r){n=n.replace(/[A-Z]/g,function(e){return"-"+e});try{return this.doc.defaultView.getComputedStyle(e,null).getPropertyValue(n)}catch(i){return null}}return n=n.replace(/-(\D)/g,function(e,t){return t.toUpperCase()}),"float"==n&&(n=g?"styleFloat":"cssFloat"),n.currentStyle&&r?e.currentStyle[n]:e.style?e.style[n]:t}},setStyles:function(e,t){this.setStyle(e,t)},css:function(e,t,n){this.setStyle(e,t,n)},removeAllAttribs:function(e){return this.run(e,function(e){var t,n=e.attributes;for(t=n.length-1;t>=0;t--)e.removeAttributeNode(n.item(t))})},setAttrib:function(e,t,n){var r=this;if(e&&t)return this.run(e,function(e){var i=r.settings,o=e.getAttribute(t);if(null!==n)switch(t){case"style":if(!u(n,"string"))return d(n,function(t,n){r.setStyle(e,n,t)}),void 0;i.keep_values&&(n?e.setAttribute("data-mce-style",n,2):e.removeAttribute("data-mce-style",2)),e.style.cssText=n;break;case"class":e.className=n||"";break;case"src":case"href":i.keep_values&&(i.url_converter&&(n=i.url_converter.call(i.url_converter_scope||r,n,t,e)),r.setAttrib(e,"data-mce-"+t,n,2));break;case"shape":e.setAttribute("data-mce-style",n)}u(n)&&null!==n&&0!==n.length?e.setAttribute(t,""+n,2):e.removeAttribute(t,2),o!=n&&i.onSetAttrib&&i.onSetAttrib({attrElm:e,attrName:t,attrValue:n})})},setAttribs:function(e,t){var n=this;return this.run(e,function(e){d(t,function(t,r){n.setAttrib(e,r,t)})})},getAttrib:function(e,t,n){var r,i=this,o;if(e=i.get(e),!e||1!==e.nodeType)return n===o?!1:n;if(u(n)||(n=""),/^(src|href|style|coords|shape)$/.test(t)&&(r=e.getAttribute("data-mce-"+t)))return r;if(g&&i.props[t]&&(r=e[i.props[t]],r=r&&r.nodeValue?r.nodeValue:r),r||(r=e.getAttribute(t,2)),/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noshade|nowrap|readonly|selected)$/.test(t))return e[i.props[t]]===!0&&""===r?t:r?t:"";if("FORM"===e.nodeName&&e.getAttributeNode(t))return e.getAttributeNode(t).nodeValue;if("style"===t&&(r=r||e.style.cssText,r&&(r=i.serializeStyle(i.parseStyle(r),e.nodeName),i.settings.keep_values&&e.setAttribute("data-mce-style",r))),m&&"class"===t&&r&&(r=r.replace(/(apple|webkit)\-[a-z\-]+/gi,"")),g)switch(t){case"rowspan":case"colspan":1===r&&(r="");break;case"size":("+0"===r||20===r||0===r)&&(r="");break;case"width":case"height":case"vspace":case"checked":case"disabled":case"readonly":0===r&&(r="");break;case"hspace":-1===r&&(r="");break;case"maxlength":case"tabindex":(32768===r||2147483647===r||"32768"===r)&&(r="");break;case"multiple":case"compact":case"noshade":case"nowrap":return 65535===r?t:n;case"shape":r=r.toLowerCase();break;default:0===t.indexOf("on")&&r&&(r=(""+r).replace(/^function\s+\w+\(\)\s+\{\s+(.*)\s+\}$/,"$1"))}return r!==o&&null!==r&&""!==r?""+r:n},getPos:function(e,t){var n=this,r=0,i=0,o,a=n.doc,s;if(e=n.get(e),t=t||a.body,e){if(t===a.body&&e.getBoundingClientRect)return s=e.getBoundingClientRect(),t=n.boxModel?a.documentElement:a.body,r=s.left+(a.documentElement.scrollLeft||a.body.scrollLeft)-t.clientTop,i=s.top+(a.documentElement.scrollTop||a.body.scrollTop)-t.clientLeft,{x:r,y:i};for(o=e;o&&o!=t&&o.nodeType;)r+=o.offsetLeft||0,i+=o.offsetTop||0,o=o.offsetParent;for(o=e.parentNode;o&&o!=t&&o.nodeType;)r-=o.scrollLeft||0,i-=o.scrollTop||0,o=o.parentNode}return{x:r,y:i}},parseStyle:function(e){return this.styles.parse(e)},serializeStyle:function(e,t){return this.styles.serialize(e,t)},addStyle:function(e){var t=this,n=t.doc,r,i;if(t!==c.DOM&&n===document){var o=c.DOM.addedStyles;if(o=o||[],o[e])return;o[e]=!0,c.DOM.addedStyles=o}i=n.getElementById("mceDefaultStyles"),i||(i=n.createElement("style"),i.id="mceDefaultStyles",i.type="text/css",r=n.getElementsByTagName("head")[0],r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i)),i.styleSheet?i.styleSheet.cssText+=e:i.appendChild(n.createTextNode(e))},loadCSS:function(e){var t=this,n=t.doc,r;return t!==c.DOM&&n===document?(c.DOM.loadCSS(e),void 0):(e||(e=""),r=n.getElementsByTagName("head")[0],d(e.split(","),function(e){var i;t.files[e]||(t.files[e]=!0,i=t.create("link",{rel:"stylesheet",href:e}),g&&n.documentMode&&n.recalc&&(i.onload=function(){n.recalc&&n.recalc(),i.onload=null}),r.appendChild(i))}),void 0)},addClass:function(e,t){return this.run(e,function(e){var n;return t?this.hasClass(e,t)?e.className:(n=this.removeClass(e,t),e.className=n=(""!==n?n+" ":"")+t,n):0})},removeClass:function(e,t){var n=this,r;return n.run(e,function(e){var i;return n.hasClass(e,t)?(r||(r=new RegExp("(^|\\s+)"+t+"(\\s+|$)","g")),i=e.className.replace(r," "),i=p(" "!=i?i:""),e.className=i,i||(e.removeAttribute("class"),e.removeAttribute("className")),i):e.className
})},hasClass:function(e,t){return e=this.get(e),e&&t?-1!==(" "+e.className+" ").indexOf(" "+t+" "):!1},toggleClass:function(e,n,r){r=r===t?!this.hasClass(e,n):r,this.hasClass(e,n)!==r&&(r?this.addClass(e,n):this.removeClass(e,n))},show:function(e){return this.setStyle(e,"display","block")},hide:function(e){return this.setStyle(e,"display","none")},isHidden:function(e){return e=this.get(e),!e||"none"==e.style.display||"none"==this.getStyle(e,"display")},uniqueId:function(e){return(e?e:"mce_")+this.counter++},setHTML:function(e,t){var n=this;return n.run(e,function(e){if(g){for(;e.firstChild;)e.removeChild(e.firstChild);try{e.innerHTML="<br />"+t,e.removeChild(e.firstChild)}catch(r){var i=n.create("div");i.innerHTML="<br />"+t,d(f(i.childNodes),function(t,n){n&&e.canHaveHTML&&e.appendChild(t)})}}else e.innerHTML=t;return t})},getOuterHTML:function(e){var t,n=this;return(e=n.get(e))?1===e.nodeType&&n.hasOuterHTML?e.outerHTML:(t=(e.ownerDocument||n.doc).createElement("body"),t.appendChild(e.cloneNode(!0)),t.innerHTML):null},setOuterHTML:function(e,t,n){var r=this;return r.run(e,function(e){function i(){var i,o;for(o=n.createElement("body"),o.innerHTML=t,i=o.lastChild;i;)r.insertAfter(i.cloneNode(!0),e),i=i.previousSibling;r.remove(e)}if(1==e.nodeType)if(n=n||e.ownerDocument||r.doc,g)try{1==e.nodeType&&r.hasOuterHTML?e.outerHTML=t:i()}catch(o){i()}else i()})},decode:a.decode,encode:a.encodeAllRaw,insertAfter:function(e,t){return t=this.get(t),this.run(e,function(e){var n,r;return n=t.parentNode,r=t.nextSibling,r?n.insertBefore(e,r):n.appendChild(e),e})},replace:function(e,t,n){var r=this;return r.run(t,function(t){return u(t,"array")&&(e=e.cloneNode(!0)),n&&d(f(t.childNodes),function(t){e.appendChild(t)}),t.parentNode.replaceChild(e,t)})},rename:function(e,t){var n=this,r;return e.nodeName!=t.toUpperCase()&&(r=n.create(t),d(n.getAttribs(e),function(t){n.setAttrib(r,t.nodeName,n.getAttrib(e,t.nodeName))}),n.replace(r,e,1)),r||e},findCommonAncestor:function(e,t){for(var n=e,r;n;){for(r=t;r&&n!=r;)r=r.parentNode;if(n==r)break;n=n.parentNode}return!n&&e.ownerDocument?e.ownerDocument.documentElement:n},toHex:function(e){return this.styles.toHex(l.trim(e))},getClasses:function(){function e(t){d(t.imports,function(t){e(t)}),d(t.cssRules||t.rules,function(t){switch(t.type||1){case 1:t.selectorText&&d(t.selectorText.split(","),function(e){e=e.replace(/^\s*|\s*$|^\s\./g,""),!/\.mce/.test(e)&&/\.[\w\-]+$/.test(e)&&(o=e,e=e.replace(/.*\.([a-z0-9_\-]+).*/i,"$1"),(!i||(e=i(e,o)))&&(r[e]||(n.push({"class":e}),r[e]=1)))});break;case 3:e(t.styleSheet)}})}var t=this,n=[],r={},i=t.settings.class_filter,o;if(t.classes)return t.classes;try{d(t.doc.styleSheets,e)}catch(a){}return n.length>0&&(t.classes=n),n},run:function(e,t,n){var r=this,i;return"string"==typeof e&&(e=r.get(e)),e?(n=n||this,e.nodeType||!e.length&&0!==e.length?t.call(n,e):(i=[],d(e,function(e,o){e&&("string"==typeof e&&(e=r.get(e)),i.push(t.call(n,e,o)))}),i)):!1},getAttribs:function(e){var t;if(e=this.get(e),!e)return[];if(g){if(t=[],"OBJECT"==e.nodeName)return e.attributes;"OPTION"===e.nodeName&&this.getAttrib(e,"selected")&&t.push({specified:1,nodeName:"selected"});var n=/<\/?[\w:\-]+ ?|=[\"][^\"]+\"|=\'[^\']+\'|=[\w\-]+|>/gi;return e.cloneNode(!1).outerHTML.replace(n,"").replace(/[\w:\-]+/gi,function(e){t.push({specified:1,nodeName:e})}),t}return e.attributes},isEmpty:function(e,t){var n=this,r,o,a,s,l,c=0;if(e=e.firstChild){s=new i(e,e.parentNode),t=t||n.schema?n.schema.getNonEmptyElements():null;do{if(a=e.nodeType,1===a){if(e.getAttribute("data-mce-bogus"))continue;if(l=e.nodeName.toLowerCase(),t&&t[l]){if("br"===l){c++;continue}return!1}for(o=n.getAttribs(e),r=e.attributes.length;r--;)if(l=e.attributes[r].nodeName,"name"===l||"data-mce-bookmark"===l)return!1}if(8==a)return!1;if(3===a&&!y.test(e.nodeValue))return!1}while(e=s.next())}return 1>=c},createRng:function(){var e=this.doc;return e.createRange?e.createRange():new o(this)},nodeIndex:function(e,t){var n=0,r,i,o;if(e)for(r=e.nodeType,e=e.previousSibling,i=e;e;e=e.previousSibling)o=e.nodeType,(!t||3!=o||o!=r&&e.nodeValue.length)&&(n++,r=o);return n},split:function(e,t,n){function r(e){function t(e){var t=e.previousSibling&&"SPAN"==e.previousSibling.nodeName,n=e.nextSibling&&"SPAN"==e.nextSibling.nodeName;return t&&n}var n,o=e.childNodes,a=e.nodeType;if(1!=a||"bookmark"!=e.getAttribute("data-mce-type")){for(n=o.length-1;n>=0;n--)r(o[n]);if(9!=a){if(3==a&&e.nodeValue.length>0){var s=p(e.nodeValue).length;if(!i.isBlock(e.parentNode)||s>0||0===s&&t(e))return}else if(1==a&&(o=e.childNodes,1==o.length&&o[0]&&1==o[0].nodeType&&"bookmark"==o[0].getAttribute("data-mce-type")&&e.parentNode.insertBefore(o[0],e),o.length||/^(br|hr|input|img)$/i.test(e.nodeName)))return;i.remove(e)}return e}}var i=this,o=i.createRng(),a,s,l;return e&&t?(o.setStart(e.parentNode,i.nodeIndex(e)),o.setEnd(t.parentNode,i.nodeIndex(t)),a=o.extractContents(),o=i.createRng(),o.setStart(t.parentNode,i.nodeIndex(t)+1),o.setEnd(e.parentNode,i.nodeIndex(e)+1),s=o.extractContents(),l=e.parentNode,l.insertBefore(r(a),e),n?l.replaceChild(n,t):l.insertBefore(t,e),l.insertBefore(r(s),e),i.remove(e),n||t):void 0},bind:function(e,t,n,r){return this.events.bind(e,t,n,r||this)},unbind:function(e,t,n){return this.events.unbind(e,t,n)},fire:function(e,t,n){return this.events.fire(e,t,n)},getContentEditable:function(e){var t;return 1!=e.nodeType?null:(t=e.getAttribute("data-mce-contenteditable"),t&&"inherit"!==t?t:"inherit"!==e.contentEditable?e.contentEditable:null)},destroy:function(){var e=this;e.win=e.doc=e.root=e.events=e.frag=null},dumpRng:function(e){return"startContainer: "+e.startContainer.nodeName+", startOffset: "+e.startOffset+", endContainer: "+e.endContainer.nodeName+", endOffset: "+e.endOffset},_findSib:function(e,t,n){var r=this,i=t;if(e)for("string"==typeof i&&(i=function(e){return r.is(e,t)}),e=e[n];e;e=e[n])if(i(e))return e;return null}},c.DOM=new c(document),c}),r(v,[g,f],function(e,t){function n(){function e(e,t){function n(){o.remove(s),a&&(a.onreadystatechange=a.onload=a=null),t()}function i(){"undefined"!=typeof console&&console.log&&console.log("Failed to load: "+e)}var o=r,a,s;s=o.uniqueId(),a=document.createElement("script"),a.id=s,a.type="text/javascript",a.src=e,"onreadystatechange"in a?a.onreadystatechange=function(){/loaded|complete/.test(a.readyState)&&n()}:a.onload=n,a.onerror=i,(document.getElementsByTagName("head")[0]||document.body).appendChild(a)}var t=0,n=1,a=2,s={},l=[],c={},d=[],u=0,f;this.isDone=function(e){return s[e]==a},this.markDone=function(e){s[e]=a},this.add=this.load=function(e,n,r){var i=s[e];i==f&&(l.push(e),s[e]=t),n&&(c[e]||(c[e]=[]),c[e].push({func:n,scope:r||this}))},this.loadQueue=function(e,t){this.loadScripts(l,e,t)},this.loadScripts=function(t,r,l){function p(e){i(c[e],function(e){e.func.call(e.scope)}),c[e]=f}var h;d.push({func:r,scope:l||this}),h=function(){var r=o(t);t.length=0,i(r,function(t){return s[t]==a?(p(t),void 0):(s[t]!=n&&(s[t]=n,u++,e(t,function(){s[t]=a,u--,p(t),h()})),void 0)}),u||(i(d,function(e){e.func.call(e.scope)}),d.length=0)},h()}}var r=e.DOM,i=t.each,o=t.grep;return n.ScriptLoader=new n,n}),r(y,[v,f],function(e,n){function r(){var e=this;e.items=[],e.urls={},e.lookup={}}var i=n.each;return r.prototype={get:function(e){return this.lookup[e]?this.lookup[e].instance:t},dependencies:function(e){var t;return this.lookup[e]&&(t=this.lookup[e].dependencies),t||[]},requireLangPack:function(t){var n=r.settings;n&&n.language&&n.language_load!==!1&&e.ScriptLoader.add(this.urls[t]+"/langs/"+n.language+".js")},add:function(e,t,n){return this.items.push(t),this.lookup[e]={instance:t,dependencies:n},t},createUrl:function(e,t){return"object"==typeof t?t:{prefix:e.prefix,resource:t,suffix:e.suffix}},addComponents:function(t,n){var r=this.urls[t];i(n,function(t){e.ScriptLoader.add(r+"/"+t)})},load:function(n,o,a,s){function l(){var r=c.dependencies(n);i(r,function(e){var n=c.createUrl(o,e);c.load(n.resource,n,t,t)}),a&&(s?a.call(s):a.call(e))}var c=this,d=o;c.urls[n]||("object"==typeof o&&(d=o.prefix+o.resource+o.suffix),0!==d.indexOf("/")&&-1==d.indexOf("://")&&(d=r.baseURL+"/"+d),c.urls[n]=d.substring(0,d.lastIndexOf("/")),c.lookup[n]?l():e.ScriptLoader.add(d,l,s))}},r.PluginManager=new r,r.ThemeManager=new r,r}),r(b,[],function(){function e(e,t,n){var r,i,o=n?"lastChild":"firstChild",a=n?"prev":"next";if(e[o])return e[o];if(e!==t){if(r=e[a])return r;for(i=e.parent;i&&i!==t;i=i.parent)if(r=i[a])return r}}function t(e,t){this.name=e,this.type=t,1===t&&(this.attributes=[],this.attributes.map={})}var n=/^[ \t\r\n]*$/,r={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11};return t.prototype={replace:function(e){var t=this;return e.parent&&e.remove(),t.insert(e,t),t.remove(),t},attr:function(e,t){var n=this,r,i,o;if("string"!=typeof e){for(i in e)n.attr(i,e[i]);return n}if(r=n.attributes){if(t!==o){if(null===t){if(e in r.map)for(delete r.map[e],i=r.length;i--;)if(r[i].name===e)return r=r.splice(i,1),n;return n}if(e in r.map){for(i=r.length;i--;)if(r[i].name===e){r[i].value=t;break}}else r.push({name:e,value:t});return r.map[e]=t,n}return r.map[e]}},clone:function(){var e=this,n=new t(e.name,e.type),r,i,o,a,s;if(o=e.attributes){for(s=[],s.map={},r=0,i=o.length;i>r;r++)a=o[r],"id"!==a.name&&(s[s.length]={name:a.name,value:a.value},s.map[a.name]=a.value);n.attributes=s}return n.value=e.value,n.shortEnded=e.shortEnded,n},wrap:function(e){var t=this;return t.parent.insert(e,t),e.append(t),t},unwrap:function(){var e=this,t,n;for(t=e.firstChild;t;)n=t.next,e.insert(t,e,!0),t=n;e.remove()},remove:function(){var e=this,t=e.parent,n=e.next,r=e.prev;return t&&(t.firstChild===e?(t.firstChild=n,n&&(n.prev=null)):r.next=n,t.lastChild===e?(t.lastChild=r,r&&(r.next=null)):n.prev=r,e.parent=e.next=e.prev=null),e},append:function(e){var t=this,n;return e.parent&&e.remove(),n=t.lastChild,n?(n.next=e,e.prev=n,t.lastChild=e):t.lastChild=t.firstChild=e,e.parent=t,e},insert:function(e,t,n){var r;return e.parent&&e.remove(),r=t.parent||this,n?(t===r.firstChild?r.firstChild=e:t.prev.next=e,e.prev=t.prev,e.next=t,t.prev=e):(t===r.lastChild?r.lastChild=e:t.next.prev=e,e.next=t.next,e.prev=t,t.next=e),e.parent=r,e},getAll:function(t){var n=this,r,i=[];for(r=n.firstChild;r;r=e(r,n))r.name===t&&i.push(r);return i},empty:function(){var t=this,n,r,i;if(t.firstChild){for(n=[],i=t.firstChild;i;i=e(i,t))n.push(i);for(r=n.length;r--;)i=n[r],i.parent=i.firstChild=i.lastChild=i.next=i.prev=null}return t.firstChild=t.lastChild=null,t},isEmpty:function(t){var r=this,i=r.firstChild,o,a;if(i)do{if(1===i.type){if(i.attributes.map["data-mce-bogus"])continue;if(t[i.name])return!1;for(o=i.attributes.length;o--;)if(a=i.attributes[o].name,"name"===a||0===a.indexOf("data-mce-"))return!1}if(8===i.type)return!1;if(3===i.type&&!n.test(i.value))return!1}while(i=e(i,r));return!0},walk:function(t){return e(this,null,t)}},t.create=function(e,n){var i,o;if(i=new t(e,r[e]||1),n)for(o in n)i.attr(o,n[o]);return i},t}),r(C,[f],function(e){function t(e,t){return e?e.split(t||" "):[]}function n(e){function n(e,n,r){function i(e){var t={},n,r;for(n=0,r=e.length;r>n;n++)t[e[n]]={};return t}var o,l,c,d=arguments;for(r=r||[],n=n||"","string"==typeof r&&(r=t(r)),l=3;l<d.length;l++)"string"==typeof d[l]&&(d[l]=t(d[l])),r.push.apply(r,d[l]);for(e=t(e),o=e.length;o--;)c=[].concat(s,t(n)),a[e[o]]={attributes:i(c),attributesOrder:c,children:i(r)}}function i(e,n){var r,i,o,s;for(e=t(e),r=e.length,n=t(n);r--;)for(i=a[e[r]],o=0,s=n.length;s>o;o++)i.attributes[n[o]]={},i.attributesOrder.push(n[o])}var a={},s,l,c,d,u,f,p;return r[e]?r[e]:(s=t("id accesskey class dir lang style tabindex title"),l=t("onabort onblur oncancel oncanplay oncanplaythrough onchange onclick onclose oncontextmenu oncuechange ondblclick ondrag ondragend ondragenter ondragleave ondragover ondragstart ondrop ondurationchange onemptied onended onerror onfocus oninput oninvalid onkeydown onkeypress onkeyup onload onloadeddata onloadedmetadata onloadstart onmousedown onmousemove onmouseout onmouseover onmouseup onmousewheel onpause onplay onplaying onprogress onratechange onreset onscroll onseeked onseeking onseeking onselect onshow onstalled onsubmit onsuspend ontimeupdate onvolumechange onwaiting"),c=t("address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"),d=t("a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"),"html4"!=e&&(s.push.apply(s,t("contenteditable contextmenu draggable dropzone hidden spellcheck translate")),c.push.apply(c,t("article aside details dialog figure header footer hgroup section nav")),d.push.apply(d,t("audio canvas command datalist mark meter output progress time wbr video ruby bdi keygen"))),"html5-strict"!=e&&(s.push("xml:lang"),p=t("acronym applet basefont big font strike tt"),d.push.apply(d,p),o(p,function(e){n(e,"",d)}),f=t("center dir isindex noframes"),c.push.apply(c,f),u=[].concat(c,d),o(f,function(e){n(e,"",u)})),u=u||[].concat(c,d),n("html","manifest","head body"),n("head","","base command link meta noscript script style title"),n("title hr noscript br"),n("base","href target"),n("link","href rel media hreflang type sizes hreflang"),n("meta","name http-equiv content charset"),n("style","media type scoped"),n("script","src async defer type charset"),n("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",u),n("address dt dd div caption","",u),n("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",d),n("blockquote","cite",u),n("ol","reversed start type","li"),n("ul","","li"),n("li","value",u),n("dl","","dt dd"),n("a","href target rel media hreflang type",d),n("q","cite",d),n("ins del","cite datetime",u),n("img","src alt usemap ismap width height"),n("iframe","src name width height",u),n("embed","src type width height"),n("object","data type typemustmatch name usemap form width height",u,"param"),n("param","name value"),n("map","name",u,"area"),n("area","alt coords shape href target rel media hreflang type"),n("table","border","caption colgroup thead tfoot tbody tr"+("html4"==e?" col":"")),n("colgroup","span","col"),n("col","span"),n("tbody thead tfoot","","tr"),n("tr","","td th"),n("td","colspan rowspan headers",u),n("th","colspan rowspan headers scope abbr",u),n("form","accept-charset action autocomplete enctype method name novalidate target",u),n("fieldset","disabled form name",u,"legend"),n("label","form for",d),n("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),n("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"==e?u:d),n("select","disabled form multiple name required size","option optgroup"),n("optgroup","disabled label","option"),n("option","disabled label selected value"),n("textarea","cols dirname disabled form maxlength name readonly required rows wrap"),n("menu","type label",u,"li"),n("noscript","",u),"html4"!=e&&(n("wbr"),n("ruby","",d,"rt rp"),n("figcaption","",u),n("mark rt rp summary bdi","",d),n("canvas","width height",u),n("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height",u,"track source"),n("audio","src crossorigin preload autoplay mediagroup loop muted controls",u,"track source"),n("source","src type media"),n("track","kind src srclang label default"),n("datalist","",d,"option"),n("article section nav aside header footer","",u),n("hgroup","","h1 h2 h3 h4 h5 h6"),n("figure","",u,"figcaption"),n("time","datetime",d),n("dialog","open",u),n("command","type label icon disabled checked radiogroup command"),n("output","for form name",d),n("progress","value max",d),n("meter","value min max low high optimum",d),n("details","open",u,"summary"),n("keygen","autofocus challenge disabled form keytype name")),"html5-strict"!=e&&(i("script","language xml:space"),i("style","xml:space"),i("object","declare classid codebase codetype archive standby align border hspace vspace"),i("param","valuetype type"),i("a","charset name rev shape coords"),i("br","clear"),i("applet","codebase archive code object alt name width height align hspace vspace"),i("img","name longdesc align border hspace vspace"),i("iframe","longdesc frameborder marginwidth marginheight scrolling align"),i("font basefont","size color face"),i("input","usemap align"),i("select","onchange"),i("textarea"),i("h1 h2 h3 h4 h5 h6 div p legend caption","align"),i("ul","type compact"),i("li","type"),i("ol dl menu dir","compact"),i("pre","width xml:space"),i("hr","align noshade size width"),i("isindex","prompt"),i("table","summary width frame rules cellspacing cellpadding align bgcolor"),i("col","width align char charoff valign"),i("colgroup","width align char charoff valign"),i("thead","align char charoff valign"),i("tr","align char charoff valign bgcolor"),i("th","axis align char charoff valign nowrap bgcolor width height"),i("form","accept"),i("td","abbr axis scope align char charoff valign nowrap bgcolor width height"),i("tfoot","align char charoff valign"),i("tbody","align char charoff valign"),i("area","nohref"),i("body","background bgcolor text link vlink alink")),"html4"!=e&&(i("input button select textarea","autofocus"),i("input textarea","placeholder"),i("a","download"),i("link script img","crossorigin"),i("iframe","srcdoc sandbox seamless allowfullscreen")),o(t("a form meter progress dfn"),function(e){a[e]&&delete a[e].children[e]}),delete a.caption.children.table,r[e]=a,a)}var r={},i=e.makeMap,o=e.each,a=e.extend,s=e.explode,l=e.inArray;return function(e){function c(t,n,o){var s=e[t];return s?s=i(s,",",i(s.toUpperCase()," ")):(s=r[t],s||(s=i(n," ",i(n.toUpperCase()," ")),s=a(s,o),r[t]=s)),s}function d(e){return new RegExp("^"+e.replace(/([?+*])/g,".$1")+"$")}function u(e){var n,r,o,a,s,c,u,f,p,h,m,g,y,C,x,w,_,N,E,k=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,S=/^([!\-])?(\w+::\w+|[^=:<]+)?(?:([=:<])(.*))?$/,T=/[*?+]/;if(e)for(e=t(e,","),v["@"]&&(w=v["@"].attributes,_=v["@"].attributesOrder),n=0,r=e.length;r>n;n++)if(s=k.exec(e[n])){if(C=s[1],p=s[2],x=s[3],f=s[5],g={},y=[],c={attributes:g,attributesOrder:y},"#"===C&&(c.paddEmpty=!0),"-"===C&&(c.removeEmpty=!0),"!"===s[4]&&(c.removeEmptyAttrs=!0),w){for(N in w)g[N]=w[N];y.push.apply(y,_)}if(f)for(f=t(f,"|"),o=0,a=f.length;a>o;o++)if(s=S.exec(f[o])){if(u={},m=s[1],h=s[2].replace(/::/g,":"),C=s[3],E=s[4],"!"===m&&(c.attributesRequired=c.attributesRequired||[],c.attributesRequired.push(h),u.required=!0),"-"===m){delete g[h],y.splice(l(y,h),1);continue}C&&("="===C&&(c.attributesDefault=c.attributesDefault||[],c.attributesDefault.push({name:h,value:E}),u.defaultValue=E),":"===C&&(c.attributesForced=c.attributesForced||[],c.attributesForced.push({name:h,value:E}),u.forcedValue=E),"<"===C&&(u.validValues=i(E,"?"))),T.test(h)?(c.attributePatterns=c.attributePatterns||[],u.pattern=d(h),c.attributePatterns.push(u)):(g[h]||y.push(h),g[h]=u)}w||"@"!=p||(w=g,_=y),x&&(c.outputName=p,v[x]=c),T.test(p)?(c.pattern=d(p),b.push(c)):v[p]=c}}function f(e){v={},b=[],u(e),o(x,function(e,t){y[t]=e.children})}function p(e){var n=/^(~)?(.+)$/;e&&o(t(e,","),function(e){var t=n.exec(e),r="~"===t[1],i=r?"span":"div",a=t[2];y[a]=y[i],R[a]=i,r||(k[a.toUpperCase()]={},k[a]={}),v[a]||(v[a]=v[i]),o(y,function(e){e[i]&&(e[a]=e[i])})})}function h(e){var n=/^([+\-]?)(\w+)\[([^\]]+)\]$/;e&&o(t(e,","),function(e){var r=n.exec(e),i,a;r&&(a=r[1],i=a?y[r[2]]:y[r[2]]={"#comment":{}},i=y[r[2]],o(t(r[3],"|"),function(e){"-"===a?delete i[e]:i[e]={}}))})}function m(e){var t=v[e],n;if(t)return t;for(n=b.length;n--;)if(t=b[n],t.pattern.test(e))return t}var g=this,v={},y={},b=[],C,x,w,_,N,E,k,S,T,R={},A={};e=e||{},x=n(e.schema),e.verify_html===!1&&(e.valid_elements="*[*]"),e.valid_styles&&(C={},o(e.valid_styles,function(e,t){C[t]=s(e)})),w=c("whitespace_elements","pre script noscript style textarea video audio iframe object"),_=c("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr"),N=c("short_ended_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track"),E=c("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),S=c("non_empty_elements","td th iframe video audio object",N),T=c("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside nav figure"),k=c("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex samp option datalist select optgroup",T),o((e.special||"script noscript style textarea").split(" "),function(e){A[e]=new RegExp("</"+e+"[^>]*>","gi")}),e.valid_elements?f(e.valid_elements):(o(x,function(e,t){v[t]={attributes:e.attributes,attributesOrder:e.attributesOrder},y[t]=e.children}),"html5"!=e.schema&&o(t("strong/b em/i"),function(e){e=t(e,"/"),v[e[1]].outputName=e[0]}),v.img.attributesDefault=[{name:"alt",value:""}],o(t("ol ul sub sup blockquote span font a table tbody tr strong em b i"),function(e){v[e]&&(v[e].removeEmpty=!0)}),o(t("p h1 h2 h3 h4 h5 h6 th td pre div address caption"),function(e){v[e].paddEmpty=!0}),o(t("span"),function(e){v[e].removeEmptyAttrs=!0})),p(e.custom_elements),h(e.valid_children),u(e.extended_valid_elements),h("+ol[ul|ol],+ul[ul|ol]"),e.invalid_elements&&o(s(e.invalid_elements),function(e){v[e]&&delete v[e]}),m("span")||u("span[!data-mce-type|*]"),g.children=y,g.styles=C,g.getBoolAttrs=function(){return E},g.getBlockElements=function(){return k},g.getTextBlockElements=function(){return T},g.getShortEndedElements=function(){return N},g.getSelfClosingElements=function(){return _},g.getNonEmptyElements=function(){return S},g.getWhiteSpaceElements=function(){return w},g.getSpecialElements=function(){return A},g.isValidChild=function(e,t){var n=y[e];return!(!n||!n[t])},g.isValid=function(e,t){var n,r,i=m(e);if(i){if(!t)return!0;if(i.attributes[t])return!0;if(n=i.attributePatterns)for(r=n.length;r--;)if(n[r].pattern.test(e))return!0}return!1},g.getElementRule=m,g.getCustomElements=function(){return R},g.addValidElements=u,g.setValidElements=f,g.addCustomElements=p,g.addValidChildren=h,g.elements=v}}),r(x,[C,h,f],function(e,t,n){var r=n.each;return function(n,i){var o=this,a=function(){};n=n||{},o.schema=i=i||new e,n.fix_self_closing!==!1&&(n.fix_self_closing=!0),r("comment cdata text start end pi doctype".split(" "),function(e){e&&(o[e]=n[e]||a)}),o.parse=function(e){function r(e){var t,n;for(t=u.length;t--&&u[t].name!==e;);if(t>=0){for(n=u.length-1;n>=t;n--)e=u[n],e.valid&&a.end(e.name);u.length=t}}function o(e,t,n,r,i){var o,a;if(t=t.toLowerCase(),n=t in b?t:I(n||r||i||""),x&&!g&&0!==t.indexOf("data-")){if(o=k[t],!o&&S){for(a=S.length;a--&&(o=S[a],!o.pattern.test(t)););-1===a&&(o=null)}if(!o)return;if(o.validValues&&!(n in o.validValues))return}f.map[t]=n,f.push({name:t,value:n})}var a=this,s,l=0,c,d,u=[],f,p,h,m,g,v,y,b,C,x,w,_,N,E,k,S,T,R,A,B,H,M,L,D,P,O=0,I=t.decode,F;for(M=new RegExp("<(?:(?:!--([\\w\\W]*?)-->)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([^>]+)>)|(?:([A-Za-z0-9\\-\\:\\.]+)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))","g"),L=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,y=i.getShortEndedElements(),H=n.self_closing_elements||i.getSelfClosingElements(),b=i.getBoolAttrs(),x=n.validate,v=n.remove_internals,F=n.fix_self_closing,D=i.getSpecialElements();s=M.exec(e);){if(l<s.index&&a.text(I(e.substr(l,s.index-l))),c=s[6])c=c.toLowerCase(),":"===c.charAt(0)&&(c=c.substr(1)),r(c);else if(c=s[7]){if(c=c.toLowerCase(),":"===c.charAt(0)&&(c=c.substr(1)),C=c in y,F&&H[c]&&u.length>0&&u[u.length-1].name===c&&r(c),!x||(w=i.getElementRule(c))){if(_=!0,x&&(k=w.attributes,S=w.attributePatterns),(E=s[8])?(g=-1!==E.indexOf("data-mce-type"),g&&v&&(_=!1),f=[],f.map={},E.replace(L,o)):(f=[],f.map={}),x&&!g){if(T=w.attributesRequired,R=w.attributesDefault,A=w.attributesForced,B=w.removeEmptyAttrs,B&&!f.length&&(_=!1),A)for(p=A.length;p--;)N=A[p],m=N.name,P=N.value,"{$uid}"===P&&(P="mce_"+O++),f.map[m]=P,f.push({name:m,value:P});if(R)for(p=R.length;p--;)N=R[p],m=N.name,m in f.map||(P=N.value,"{$uid}"===P&&(P="mce_"+O++),f.map[m]=P,f.push({name:m,value:P}));if(T){for(p=T.length;p--&&!(T[p]in f.map););-1===p&&(_=!1)}f.map["data-mce-bogus"]&&(_=!1)}_&&a.start(c,f,C)}else _=!1;if(d=D[c]){d.lastIndex=l=s.index+s[0].length,(s=d.exec(e))?(_&&(h=e.substr(l,s.index-l)),l=s.index+s[0].length):(h=e.substr(l),l=e.length),_&&(h.length>0&&a.text(h,!0),a.end(c)),M.lastIndex=l;continue}C||(E&&E.indexOf("/")==E.length-1?_&&a.end(c):u.push({name:c,valid:_}))}else(c=s[1])?a.comment(c):(c=s[2])?a.cdata(c):(c=s[3])?a.doctype(c):(c=s[4])&&a.pi(c,s[5]);l=s.index+s[0].length}for(l<e.length&&a.text(I(e.substr(l))),p=u.length-1;p>=0;p--)c=u[p],c.valid&&a.end(c.name)}}}),r(w,[b,C,x,f],function(e,t,n,r){var i=r.makeMap,o=r.each,a=r.explode,s=r.extend;return function(r,l){function c(t){var n,r,o,a,s,c,u,f,p,h,m,g,v,y;for(m=i("tr,td,th,tbody,thead,tfoot,table"),h=l.getNonEmptyElements(),g=l.getTextBlockElements(),n=0;n<t.length;n++)if(r=t[n],r.parent&&!r.fixed)if(g[r.name]&&"li"==r.parent.name){for(v=r.next;v&&g[v.name];)v.name="li",v.fixed=!0,r.parent.insert(v,r.parent),v=v.next;r.unwrap(r)}else{for(a=[r],o=r.parent;o&&!l.isValidChild(o.name,r.name)&&!m[o.name];o=o.parent)a.push(o);if(o&&a.length>1){for(a.reverse(),s=c=d.filterNode(a[0].clone()),p=0;p<a.length-1;p++){for(l.isValidChild(c.name,a[p].name)?(u=d.filterNode(a[p].clone()),c.append(u)):u=c,f=a[p].firstChild;f&&f!=a[p+1];)y=f.next,u.append(f),f=y;c=u}s.isEmpty(h)?o.insert(r,a[0],!0):(o.insert(s,a[0],!0),o.insert(r,s)),o=a[0],(o.isEmpty(h)||o.firstChild===o.lastChild&&"br"===o.firstChild.name)&&o.empty().remove()}else if(r.parent){if("li"===r.name){if(v=r.prev,v&&("ul"===v.name||"ul"===v.name)){v.append(r);continue}if(v=r.next,v&&("ul"===v.name||"ul"===v.name)){v.insert(r,v.firstChild,!0);continue}r.wrap(d.filterNode(new e("ul",1)));continue}l.isValidChild(r.parent.name,"div")&&l.isValidChild("div",r.name)?r.wrap(d.filterNode(new e("div",1))):"style"===r.name||"script"===r.name?r.empty().remove():r.unwrap()}}}var d=this,u={},f=[],p={},h={};r=r||{},r.validate="validate"in r?r.validate:!0,r.root_name=r.root_name||"body",d.schema=l=l||new t,d.filterNode=function(e){var t,n,r;n in u&&(r=p[n],r?r.push(e):p[n]=[e]),t=f.length;for(;t--;)n=f[t].name,n in e.attributes.map&&(r=h[n],r?r.push(e):h[n]=[e]);return e},d.addNodeFilter=function(e,t){o(a(e),function(e){var n=u[e];n||(u[e]=n=[]),n.push(t)})},d.addAttributeFilter=function(e,t){o(a(e),function(e){var n;for(n=0;n<f.length;n++)if(f[n].name===e)return f[n].callbacks.push(t),void 0;f.push({name:e,callbacks:[t]})})},d.parse=function(t,o){function a(){function e(e){e&&(t=e.firstChild,t&&3==t.type&&(t.value=t.value.replace(R,"")),t=e.lastChild,t&&3==t.type&&(t.value=t.value.replace(H,"")))}var t=y.firstChild,n,r;if(l.isValidChild(y.name,I.toLowerCase())){for(;t;)n=t.next,3==t.type||1==t.type&&"p"!==t.name&&!T[t.name]&&!t.attr("data-mce-type")?r?r.append(t):(r=d(I,1),y.insert(r,t),r.append(t)):(e(r),r=null),t=n;e(r)}}function d(t,n){var r=new e(t,n),i;return t in u&&(i=p[t],i?i.push(r):p[t]=[r]),r}function m(e){var t,n,r;for(t=e.prev;t&&3===t.type;)n=t.value.replace(H,""),n.length>0?(t.value=n,t=t.prev):(r=t.prev,t.remove(),t=r)}function g(e){var t,n={};for(t in e)"li"!==t&&"p"!=t&&(n[t]=e[t]);return n}var v,y,b,C,x,w,_,N,E,k,S,T,R,A=[],B,H,M,L,D,P,O,I;if(o=o||{},p={},h={},T=s(i("script,style,head,html,body,title,meta,param"),l.getBlockElements()),O=l.getNonEmptyElements(),P=l.children,S=r.validate,I="forced_root_block"in o?o.forced_root_block:r.forced_root_block,D=l.getWhiteSpaceElements(),R=/^[ \t\r\n]+/,H=/[ \t\r\n]+$/,M=/[ \t\r\n]+/g,L=/^[ \t\r\n]+$/,v=new n({validate:S,self_closing_elements:g(l.getSelfClosingElements()),cdata:function(e){b.append(d("#cdata",4)).value=e},text:function(e,t){var n;B||(e=e.replace(M," "),b.lastChild&&T[b.lastChild.name]&&(e=e.replace(R,""))),0!==e.length&&(n=d("#text",3),n.raw=!!t,b.append(n).value=e)},comment:function(e){b.append(d("#comment",8)).value=e},pi:function(e,t){b.append(d(e,7)).value=t,m(b)},doctype:function(e){var t;t=b.append(d("#doctype",10)),t.value=e,m(b)},start:function(e,t,n){var r,i,o,a,s;if(o=S?l.getElementRule(e):{}){for(r=d(o.outputName||e,1),r.attributes=t,r.shortEnded=n,b.append(r),s=P[b.name],s&&P[r.name]&&!s[r.name]&&A.push(r),i=f.length;i--;)a=f[i].name,a in t.map&&(E=h[a],E?E.push(r):h[a]=[r]);T[e]&&m(r),n||(b=r),!B&&D[e]&&(B=!0)}},end:function(t){var n,r,i,o,a;if(r=S?l.getElementRule(t):{}){if(T[t]&&!B){if(n=b.firstChild,n&&3===n.type)if(i=n.value.replace(R,""),i.length>0)n.value=i,n=n.next;else for(o=n.next,n.remove(),n=o;n&&3===n.type;)i=n.value,o=n.next,(0===i.length||L.test(i))&&(n.remove(),n=o),n=o;if(n=b.lastChild,n&&3===n.type)if(i=n.value.replace(H,""),i.length>0)n.value=i,n=n.prev;else for(o=n.prev,n.remove(),n=o;n&&3===n.type;)i=n.value,o=n.prev,(0===i.length||L.test(i))&&(n.remove(),n=o),n=o}if(B&&D[t]&&(B=!1),(r.removeEmpty||r.paddEmpty)&&b.isEmpty(O))if(r.paddEmpty)b.empty().append(new e("#text","3")).value="\xa0";else if(!b.attributes.map.name&&!b.attributes.map.id)return a=b.parent,b.empty().remove(),b=a,void 0;b=b.parent}}},l),y=b=new e(o.context||r.root_name,11),v.parse(t),S&&A.length&&(o.context?o.invalid=!0:c(A)),I&&("body"==y.name||o.isRootContent)&&a(),!o.invalid){for(k in p){for(E=u[k],C=p[k],_=C.length;_--;)C[_].parent||C.splice(_,1);for(x=0,w=E.length;w>x;x++)E[x](C,k,o)}for(x=0,w=f.length;w>x;x++)if(E=f[x],E.name in h){for(C=h[E.name],_=C.length;_--;)C[_].parent||C.splice(_,1);for(_=0,N=E.callbacks.length;N>_;_++)E.callbacks[_](C,E.name,o)}}return y},r.remove_trailing_brs&&d.addNodeFilter("br",function(t){var n,r=t.length,i,o=s({},l.getBlockElements()),a=l.getNonEmptyElements(),c,d,u,f,p,h;for(o.body=1,n=0;r>n;n++)if(i=t[n],c=i.parent,o[i.parent.name]&&i===c.lastChild){for(u=i.prev;u;){if(f=u.name,"span"!==f||"bookmark"!==u.attr("data-mce-type")){if("br"!==f)break;if("br"===f){i=null;break}}u=u.prev}i&&(i.remove(),c.isEmpty(a)&&(p=l.getElementRule(c.name),p&&(p.removeEmpty?c.remove():p.paddEmpty&&(c.empty().append(new e("#text",3)).value="\xa0"))))}else{for(d=i;c&&c.firstChild===d&&c.lastChild===d&&(d=c,!o[c.name]);)c=c.parent;d===c&&(h=new e("#text",3),h.value="\xa0",i.replace(h))}}),r.allow_html_in_named_anchor||d.addAttributeFilter("id,name",function(e){for(var t=e.length,n,r,i,o;t--;)if(o=e[t],"a"===o.name&&o.firstChild&&!o.attr("href")){i=o.parent,n=o.lastChild;do r=n.prev,i.insert(n,o),n=r;while(n)}})}}),r(_,[h,f],function(e,t){var n=t.makeMap;return function(t){var r=[],i,o,a,s,l;return t=t||{},i=t.indent,o=n(t.indent_before||""),a=n(t.indent_after||""),s=e.getEncodeFunc(t.entity_encoding||"raw",t.entities),l="html"==t.element_format,{start:function(e,t,n){var c,d,u,f;if(i&&o[e]&&r.length>0&&(f=r[r.length-1],f.length>0&&"\n"!==f&&r.push("\n")),r.push("<",e),t)for(c=0,d=t.length;d>c;c++)u=t[c],r.push(" ",u.name,'="',s(u.value,!0),'"');r[r.length]=!n||l?">":" />",n&&i&&a[e]&&r.length>0&&(f=r[r.length-1],f.length>0&&"\n"!==f&&r.push("\n"))},end:function(e){var t;r.push("</",e,">"),i&&a[e]&&r.length>0&&(t=r[r.length-1],t.length>0&&"\n"!==t&&r.push("\n"))},text:function(e,t){e.length>0&&(r[r.length]=t?e:s(e))},cdata:function(e){r.push("<![CDATA[",e,"]]>")},comment:function(e){r.push("<!--",e,"-->")},pi:function(e,t){t?r.push("<?",e," ",t,"?>"):r.push("<?",e,"?>"),i&&r.push("\n")},doctype:function(e){r.push("<!DOCTYPE",e,">",i?"\n":"")
},reset:function(){r.length=0},getContent:function(){return r.join("").replace(/\n$/,"")}}}}),r(N,[_,C],function(e,t){return function(n,r){var i=this,o=new e(n);n=n||{},n.validate="validate"in n?n.validate:!0,i.schema=r=r||new t,i.writer=o,i.serialize=function(e){function t(e){var n=i[e.type],s,l,c,d,u,f,p,h,m;if(n)n(e);else{if(s=e.name,l=e.shortEnded,c=e.attributes,a&&c&&c.length>1){for(f=[],f.map={},m=r.getElementRule(e.name),p=0,h=m.attributesOrder.length;h>p;p++)d=m.attributesOrder[p],d in c.map&&(u=c.map[d],f.map[d]=u,f.push({name:d,value:u}));for(p=0,h=c.length;h>p;p++)d=c[p].name,d in f.map||(u=c.map[d],f.map[d]=u,f.push({name:d,value:u}));c=f}if(o.start(e.name,c,l),!l){if(e=e.firstChild)do t(e);while(e=e.next);o.end(s)}}}var i,a;return a=n.validate,i={3:function(e){o.text(e.value,e.raw)},8:function(e){o.comment(e.value)},7:function(e){o.pi(e.name,e.value)},10:function(e){o.doctype(e.value)},4:function(e){o.cdata(e.value)},11:function(e){if(e=e.firstChild)do t(e);while(e=e.next)}},o.reset(),1!=e.type||n.inner?i[11](e):t(e),o.getContent()}}}),r(E,[g,w,h,N,b,C,m,f],function(e,t,n,r,i,o,a,s){var l=s.each,c=s.trim,d=e.DOM;return function(e,i){var s,u,f;return i&&(s=i.dom,u=i.schema),s=s||d,u=u||new o(e),e.entity_encoding=e.entity_encoding||"named",e.remove_trailing_brs="remove_trailing_brs"in e?e.remove_trailing_brs:!0,f=new t(e,u),f.addAttributeFilter("src,href,style",function(t,n){for(var r=t.length,i,o,a="data-mce-"+n,l=e.url_converter,c=e.url_converter_scope,d;r--;)i=t[r],o=i.attributes.map[a],o!==d?(i.attr(n,o.length>0?o:null),i.attr(a,null)):(o=i.attributes.map[n],"style"===n?o=s.serializeStyle(s.parseStyle(o),i.name):l&&(o=l.call(c,o,n,i.name)),i.attr(n,o.length>0?o:null))}),f.addAttributeFilter("class",function(e){for(var t=e.length,n,r;t--;)n=e[t],r=n.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,""),n.attr("class",r.length>0?r:null)}),f.addAttributeFilter("data-mce-type",function(e,t,n){for(var r=e.length,i;r--;)i=e[r],"bookmark"!==i.attributes.map["data-mce-type"]||n.cleanup||i.remove()}),f.addAttributeFilter("data-mce-expando",function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)}),f.addNodeFilter("noscript",function(e){for(var t=e.length,r;t--;)r=e[t].firstChild,r&&(r.value=n.decode(r.value))}),f.addNodeFilter("script,style",function(e,t){function n(e){return e.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"")}for(var r=e.length,i,o;r--;)i=e[r],o=i.firstChild?i.firstChild.value:"","script"===t?(i.attr("type",(i.attr("type")||"text/javascript").replace(/^mce\-/,"")),o.length>0&&(i.firstChild.value="// <![CDATA[\n"+n(o)+"\n// ]]>")):o.length>0&&(i.firstChild.value="<!--\n"+n(o)+"\n-->")}),f.addNodeFilter("#comment",function(e){for(var t=e.length,n;t--;)n=e[t],0===n.value.indexOf("[CDATA[")?(n.name="#cdata",n.type=4,n.value=n.value.replace(/^\[CDATA\[|\]\]$/g,"")):0===n.value.indexOf("mce:protected ")&&(n.name="#text",n.type=3,n.raw=!0,n.value=unescape(n.value).substr(14))}),f.addNodeFilter("xml:namespace,input",function(e,t){for(var n=e.length,r;n--;)r=e[n],7===r.type?r.remove():1===r.type&&("input"!==t||"type"in r.attributes.map||r.attr("type","text"))}),e.fix_list_elements&&f.addNodeFilter("ul,ol",function(e){for(var t=e.length,n,r;t--;)n=e[t],r=n.parent,("ul"===r.name||"ol"===r.name)&&n.prev&&"li"===n.prev.name&&n.prev.append(n)}),f.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected",function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)}),{schema:u,addNodeFilter:f.addNodeFilter,addAttributeFilter:f.addAttributeFilter,serialize:function(t,n){var i=this,o,d,p,h,m;return a.ie&&s.select("script,style,select,map").length>0?(m=t.innerHTML,t=t.cloneNode(!1),s.setHTML(t,m)):t=t.cloneNode(!0),o=t.ownerDocument.implementation,o.createHTMLDocument&&(d=o.createHTMLDocument(""),l("BODY"==t.nodeName?t.childNodes:[t],function(e){d.body.appendChild(d.importNode(e,!0))}),t="BODY"!=t.nodeName?d.body.firstChild:d.body,p=s.doc,s.doc=d),n=n||{},n.format=n.format||"html",n.selection&&(n.forced_root_block=""),n.no_events||(n.node=t,i.onPreProcess(n)),h=new r(e,u),n.content=h.serialize(f.parse(c(n.getInner?t.innerHTML:s.getOuterHTML(t)),n)),n.cleanup||(n.content=n.content.replace(/\uFEFF/g,"")),n.no_events||i.onPostProcess(n),p&&(s.doc=p),n.node=null,n.content},addRules:function(e){u.addValidElements(e)},setRules:function(e){u.setValidElements(e)},onPreProcess:function(e){i&&i.fire("PreProcess",e)},onPostProcess:function(e){i&&i.fire("PostProcess",e)}}}}),r(k,[],function(){function e(e){function t(t,n){var r,i=0,o,a,s,l,c,d,u=-1,f;if(r=t.duplicate(),r.collapse(n),f=r.parentElement(),f.ownerDocument===e.dom.doc){for(;"false"===f.contentEditable;)f=f.parentNode;if(!f.hasChildNodes())return{node:f,inside:1};for(s=f.children,o=s.length-1;o>=i;)if(d=Math.floor((i+o)/2),l=s[d],r.moveToElementText(l),u=r.compareEndPoints(n?"StartToStart":"EndToEnd",t),u>0)o=d-1;else{if(!(0>u))return{node:l};i=d+1}if(0>u)for(l?r.collapse(!1):(r.moveToElementText(f),r.collapse(!0),l=f,a=!0),c=0;0!==r.compareEndPoints(n?"StartToStart":"StartToEnd",t)&&0!==r.move("character",1)&&f==r.parentElement();)c++;else for(r.collapse(!0),c=0;0!==r.compareEndPoints(n?"StartToStart":"StartToEnd",t)&&0!==r.move("character",-1)&&f==r.parentElement();)c++;return{node:l,position:u,offset:c,inside:a}}}function n(){function n(e){var n=t(o,e),r,i,s=0,l,c,d;if(r=n.node,i=n.offset,n.inside&&!r.hasChildNodes())return a[e?"setStart":"setEnd"](r,0),void 0;if(i===c)return a[e?"setStartBefore":"setEndAfter"](r),void 0;if(n.position<0){if(l=n.inside?r.firstChild:r.nextSibling,!l)return a[e?"setStartAfter":"setEndAfter"](r),void 0;if(!i)return 3==l.nodeType?a[e?"setStart":"setEnd"](l,0):a[e?"setStartBefore":"setEndBefore"](l),void 0;for(;l;){if(d=l.nodeValue,s+=d.length,s>=i){r=l,s-=i,s=d.length-s;break}l=l.nextSibling}}else{if(l=r.previousSibling,!l)return a[e?"setStartBefore":"setEndBefore"](r);if(!i)return 3==r.nodeType?a[e?"setStart":"setEnd"](l,r.nodeValue.length):a[e?"setStartAfter":"setEndAfter"](l),void 0;for(;l;){if(s+=l.nodeValue.length,s>=i){r=l,s-=i;break}l=l.previousSibling}}a[e?"setStart":"setEnd"](r,s)}var o=e.getRng(),a=i.createRng(),s,l,c,d,u;if(s=o.item?o.item(0):o.parentElement(),s.ownerDocument!=i.doc)return a;if(l=e.isCollapsed(),o.item)return a.setStart(s.parentNode,i.nodeIndex(s)),a.setEnd(a.startContainer,a.startOffset+1),a;try{n(!0),l||n()}catch(f){if(-2147024809!=f.number)throw f;u=r.getBookmark(2),c=o.duplicate(),c.collapse(!0),s=c.parentElement(),l||(c=o.duplicate(),c.collapse(!1),d=c.parentElement(),d.innerHTML=d.innerHTML),s.innerHTML=s.innerHTML,r.moveToBookmark(u),o=e.getRng(),n(!0),l||n()}return a}var r=this,i=e.dom,o=!1;this.getBookmark=function(n){function r(e){var t,n,r,o,a=[];for(t=e.parentNode,n=i.getRoot().parentNode;t!=n&&9!==t.nodeType;){for(r=t.children,o=r.length;o--;)if(e===r[o]){a.push(o);break}e=t,t=t.parentNode}return a}function o(e){var n;return n=t(a,e),n?{position:n.position,offset:n.offset,indexes:r(n.node),inside:n.inside}:void 0}var a=e.getRng(),s={};return 2===n&&(a.item?s.start={ctrl:!0,indexes:r(a.item(0))}:(s.start=o(!0),e.isCollapsed()||(s.end=o()))),s},this.moveToBookmark=function(e){function t(e){var t,n,r,o;for(t=i.getRoot(),n=e.length-1;n>=0;n--)o=t.children,r=e[n],r<=o.length-1&&(t=o[r]);return t}function n(n){var i=e[n?"start":"end"],a,s,l,c;i&&(a=i.position>0,s=o.createTextRange(),s.moveToElementText(t(i.indexes)),c=i.offset,c!==l?(s.collapse(i.inside||a),s.moveStart("character",a?-c:c)):s.collapse(n),r.setEndPoint(n?"StartToStart":"EndToStart",s),n&&r.collapse(!0))}var r,o=i.doc.body;e.start&&(e.start.ctrl?(r=o.createControlRange(),r.addElement(t(e.start.indexes)),r.select()):(r=o.createTextRange(),n(!0),n(),r.select()))},this.addRange=function(t){function n(e){var t,n,a,u,h;a=i.create("a"),t=e?s:c,n=e?l:d,u=r.duplicate(),(t==f||t==f.documentElement)&&(t=p,n=0),3==t.nodeType?(t.parentNode.insertBefore(a,t),u.moveToElementText(a),u.moveStart("character",n),i.remove(a),r.setEndPoint(e?"StartToStart":"EndToEnd",u)):(h=t.childNodes,h.length?(n>=h.length?i.insertAfter(a,h[h.length-1]):t.insertBefore(a,h[n]),u.moveToElementText(a)):t.canHaveHTML&&(t.innerHTML="<span>&#xFEFF;</span>",a=t.firstChild,u.moveToElementText(a),u.collapse(o)),r.setEndPoint(e?"StartToStart":"EndToEnd",u),i.remove(a))}var r,a,s,l,c,d,u,f=e.dom.doc,p=f.body,h,m;if(s=t.startContainer,l=t.startOffset,c=t.endContainer,d=t.endOffset,r=p.createTextRange(),s==c&&1==s.nodeType){if(l==d&&!s.hasChildNodes()){if(s.canHaveHTML)return u=s.previousSibling,u&&!u.hasChildNodes()&&i.isBlock(u)?u.innerHTML="&#xFEFF;":u=null,s.innerHTML="<span>&#xFEFF;</span><span>&#xFEFF;</span>",r.moveToElementText(s.lastChild),r.select(),i.doc.selection.clear(),s.innerHTML="",u&&(u.innerHTML=""),void 0;l=i.nodeIndex(s),s=s.parentNode}if(l==d-1)try{if(m=s.childNodes[l],a=p.createControlRange(),a.addElement(m),a.select(),h=e.getRng(),h.item&&m===h.item(0))return}catch(g){}}n(!0),n(),r.select()},this.getRangeAt=n}return e}),r(S,[m],function(e){return{BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,modifierPressed:function(e){return e.shiftKey||e.ctrlKey||e.altKey},metaKeyPressed:function(t){return(e.mac?t.ctrlKey||t.metaKey:t.ctrlKey)&&!t.altKey}}}),r(T,[S,f,m],function(e,t,n){return function(r,i){function o(e){return i.settings.object_resizing===!1?!1:/TABLE|IMG|DIV/.test(e.nodeName)?"false"===e.getAttribute("data-mce-resize")?!1:!0:!1}function a(t){var n,r;n=t.screenX-E,r=t.screenY-k,M=n*N[2]+R,L=r*N[3]+A,M=5>M?5:M,L=5>L?5:L,(e.modifierPressed(t)||"IMG"==x.nodeName&&0!==N[2]*N[3])&&(M=Math.round(L/B),L=Math.round(M*B)),b.setStyles(w,{width:M,height:L}),N[2]<0&&w.clientWidth<=M&&b.setStyle(w,"left",S+(R-M)),N[3]<0&&w.clientHeight<=L&&b.setStyle(w,"top",T+(A-L)),H||(i.fire("ObjectResizeStart",{target:x,width:R,height:A}),H=!0)}function s(){function e(e,t){t&&(x.style[e]||!i.schema.isValid(x.nodeName.toLowerCase(),e)?b.setStyle(x,e,t):b.setAttrib(x,e,t))}H=!1,e("width",M),e("height",L),b.unbind(D,"mousemove",a),b.unbind(D,"mouseup",s),P!=D&&(b.unbind(P,"mousemove",a),b.unbind(P,"mouseup",s)),b.remove(w),O&&"TABLE"!=x.nodeName||l(x),i.fire("ObjectResized",{target:x,width:M,height:L}),i.nodeChanged()}function l(e,t,n){var r,l,d,u,f;r=b.getPos(e,i.getBody()),S=r.x,T=r.y,f=e.getBoundingClientRect(),l=f.width||f.right-f.left,d=f.height||f.bottom-f.top,x!=e&&(m(),x=e,M=L=0),u=i.fire("ObjectSelected",{target:e}),o(e)&&!u.isDefaultPrevented()?C(_,function(e,r){function o(t){H=!0,E=t.screenX,k=t.screenY,R=x.clientWidth,A=x.clientHeight,B=A/R,N=e,w=x.cloneNode(!0),b.addClass(w,"mce-clonedresizable"),w.contentEditable=!1,w.unSelectabe=!0,b.setStyles(w,{left:S,top:T,margin:0}),w.removeAttribute("data-mce-selected"),i.getBody().appendChild(w),b.bind(D,"mousemove",a),b.bind(D,"mouseup",s),P!=D&&(b.bind(P,"mousemove",a),b.bind(P,"mouseup",s))}var c,u;return t?(r==t&&o(n),void 0):(c=b.get("mceResizeHandle"+r),c?b.show(c):(u=i.getBody(),c=b.add(u,"div",{id:"mceResizeHandle"+r,"data-mce-bogus":!0,"class":"mce-resizehandle",contentEditable:!1,unSelectabe:!0,style:"cursor:"+r+"-resize; margin:0; padding:0"}),b.bind(c,"mousedown",function(e){e.preventDefault(),o(e)})),b.setStyles(c,{left:l*e[0]+S-c.offsetWidth/2,top:d*e[1]+T-c.offsetHeight/2}),void 0)}):c(),x.setAttribute("data-mce-selected","1")}function c(){var e,t;x&&x.removeAttribute("data-mce-selected");for(e in _)t=b.get("mceResizeHandle"+e),t&&(b.unbind(t),b.remove(t))}function d(e){function t(e,t){do if(e===t)return!0;while(e=e.parentNode)}var n;return C(b.select("img[data-mce-selected],hr[data-mce-selected]"),function(e){e.removeAttribute("data-mce-selected")}),n="mousedown"==e.type?e.target:r.getNode(),n=b.getParent(n,O?"table":"table,img,hr"),n&&(g(),t(r.getStart(),n)&&t(r.getEnd(),n)&&(!O||n!=r.getStart()&&"IMG"!==r.getStart().nodeName))?(l(n),void 0):(c(),void 0)}function u(e,t,n){e&&e.attachEvent&&e.attachEvent("on"+t,n)}function f(e,t,n){e&&e.detachEvent&&e.detachEvent("on"+t,n)}function p(e){var t=e.srcElement,n,r,o,a,s,c,d;n=t.getBoundingClientRect(),c=I.clientX-n.left,d=I.clientY-n.top;for(r in _)if(o=_[r],a=t.offsetWidth*o[0],s=t.offsetHeight*o[1],Math.abs(a-c)<8&&Math.abs(s-d)<8){N=o;break}H=!0,i.getDoc().selection.empty(),l(t,r,I)}function h(e){var t=e.srcElement;if(t!=x){if(m(),0===t.id.indexOf("mceResizeHandle"))return e.returnValue=!1,void 0;("IMG"==t.nodeName||"TABLE"==t.nodeName)&&(c(),x=t,u(t,"resizestart",p))}}function m(){f(x,"resizestart",p)}function g(){try{i.getDoc().execCommand("enableObjectResizing",!1,!1)}catch(e){}}function v(e){var t;if(O){t=D.body.createControlRange();try{return t.addElement(e),t.select(),!0}catch(n){}}}function y(){x=w=null,O&&(m(),f(i.getBody(),"controlselect",h))}var b=i.dom,C=t.each,x,w,_,N,E,k,S,T,R,A,B,H,M,L,D=i.getDoc(),P=document,O=n.ie,I;_={n:[.5,0,0,-1],e:[1,.5,1,0],s:[.5,1,0,1],w:[0,.5,-1,0],nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]};var F=".mce-content-body";return i.contentStyles.push(F+" div.mce-resizehandle {"+"position: absolute;"+"border: 1px solid black;"+"background: #FFF;"+"width: 5px;"+"height: 5px;"+"z-index: 10000"+"}"+F+" .mce-resizehandle:hover {"+"background: #000"+"}"+F+" img[data-mce-selected], hr[data-mce-selected] {"+"outline: 1px solid black;"+"resize: none"+"}"+F+" .mce-clonedresizable {"+"position: absolute;"+(n.gecko?"":"outline: 1px dashed black;")+"opacity: .5;"+"filter: alpha(opacity=50);"+"z-index: 10000"+"}"),i.on("init",function(){O?(i.on("ObjectResized",function(e){"TABLE"!=e.target.nodeName&&(c(),v(e.target))}),u(i.getBody(),"controlselect",h),i.on("mousedown",function(e){I=e})):g(),i.on("nodechange mousedown ResizeEditor",d),i.on("keydown keyup",function(e){x&&"TABLE"==x.nodeName&&d(e)})}),{controlSelect:v,destroy:y}}}),r(R,[u,k,T,m,f],function(e,n,r,i,o){function a(e,t,i,o){var a=this;a.dom=e,a.win=t,a.serializer=i,a.editor=o,a.controlSelection=new r(a,o),a.win.getSelection||(a.tridentSel=new n(a))}var s=o.each,l=o.grep,c=o.trim,d=i.ie,u=i.opera;return a.prototype={setCursorLocation:function(e,t){var n=this,r=n.dom.createRng();r.setStart(e,t),r.setEnd(e,t),n.setRng(r),n.collapse(!1)},getContent:function(e){var n=this,r=n.getRng(),i=n.dom.create("body"),o=n.getSel(),a,s,l;return e=e||{},a=s="",e.get=!0,e.format=e.format||"html",e.selection=!0,n.editor.fire("BeforeGetContent",e),"text"==e.format?n.isCollapsed()?"":r.text||(o.toString?o.toString():""):(r.cloneContents?(l=r.cloneContents(),l&&i.appendChild(l)):r.item!==t||r.htmlText!==t?(i.innerHTML="<br>"+(r.item?r.item(0).outerHTML:r.htmlText),i.removeChild(i.firstChild)):i.innerHTML=r.toString(),/^\s/.test(i.innerHTML)&&(a=" "),/\s+$/.test(i.innerHTML)&&(s=" "),e.getInner=!0,e.content=n.isCollapsed()?"":a+n.serializer.serialize(i,e)+s,n.editor.fire("GetContent",e),e.content)},setContent:function(e,t){var n=this,r=n.getRng(),i,o=n.win.document,a,s;if(t=t||{format:"html"},t.set=!0,t.selection=!0,e=t.content=e,t.no_events||n.editor.fire("BeforeSetContent",t),e=t.content,r.insertNode){e+='<span id="__caret">_</span>',r.startContainer==o&&r.endContainer==o?o.body.innerHTML=e:(r.deleteContents(),0===o.body.childNodes.length?o.body.innerHTML=e:r.createContextualFragment?r.insertNode(r.createContextualFragment(e)):(a=o.createDocumentFragment(),s=o.createElement("div"),a.appendChild(s),s.outerHTML=e,r.insertNode(a))),i=n.dom.get("__caret"),r=o.createRange(),r.setStartBefore(i),r.setEndBefore(i),n.setRng(r),n.dom.remove("__caret");try{n.setRng(r)}catch(l){}}else r.item&&(o.execCommand("Delete",!1,null),r=n.getRng()),/^\s+/.test(e)?(r.pasteHTML('<span id="__mce_tmp">_</span>'+e),n.dom.remove("__mce_tmp")):r.pasteHTML(e);t.no_events||n.editor.fire("SetContent",t)},getStart:function(){var e=this,t=e.getRng(),n,r,i,o;if(t.duplicate||t.item){if(t.item)return t.item(0);for(i=t.duplicate(),i.collapse(1),n=i.parentElement(),n.ownerDocument!==e.dom.doc&&(n=e.dom.getRoot()),r=o=t.parentElement();o=o.parentNode;)if(o==n){n=r;break}return n}return n=t.startContainer,1==n.nodeType&&n.hasChildNodes()&&(n=n.childNodes[Math.min(n.childNodes.length-1,t.startOffset)]),n&&3==n.nodeType?n.parentNode:n},getEnd:function(){var e=this,t=e.getRng(),n,r;return t.duplicate||t.item?t.item?t.item(0):(t=t.duplicate(),t.collapse(0),n=t.parentElement(),n.ownerDocument!==e.dom.doc&&(n=e.dom.getRoot()),n&&"BODY"==n.nodeName?n.lastChild||n:n):(n=t.endContainer,r=t.endOffset,1==n.nodeType&&n.hasChildNodes()&&(n=n.childNodes[r>0?r-1:r]),n&&3==n.nodeType?n.parentNode:n)},getBookmark:function(e,t){function n(e,t){var n=0;return s(a.select(e),function(e,r){e==t&&(n=r)}),n}function r(e){function t(t){var n,r,i,o=t?"start":"end";n=e[o+"Container"],r=e[o+"Offset"],1==n.nodeType&&"TR"==n.nodeName&&(i=n.childNodes,n=i[Math.min(t?r:r-1,i.length-1)],n&&(r=t?0:n.childNodes.length,e["set"+(t?"Start":"End")](n,r)))}return t(!0),t(),e}function i(){function e(e,n){var i=e[n?"startContainer":"endContainer"],a=e[n?"startOffset":"endOffset"],s=[],l,c,d=0;if(3==i.nodeType){if(t)for(l=i.previousSibling;l&&3==l.nodeType;l=l.previousSibling)a+=l.nodeValue.length;s.push(a)}else c=i.childNodes,a>=c.length&&c.length&&(d=1,a=Math.max(0,c.length-1)),s.push(o.dom.nodeIndex(c[a],t)+d);for(;i&&i!=r;i=i.parentNode)s.push(o.dom.nodeIndex(i,t));return s}var n=o.getRng(!0),r=a.getRoot(),i={};return i.start=e(n,!0),o.isCollapsed()||(i.end=e(n)),i}var o=this,a=o.dom,l,c,d,u,f,p,h="&#xFEFF;",m;if(2==e)return p=o.getNode(),f=p.nodeName,"IMG"==f?{name:f,index:n(f,p)}:o.tridentSel?o.tridentSel.getBookmark(e):i();if(e)return{rng:o.getRng()};if(l=o.getRng(),d=a.uniqueId(),u=o.isCollapsed(),m="overflow:hidden;line-height:0px",l.duplicate||l.item){if(l.item)return p=l.item(0),f=p.nodeName,{name:f,index:n(f,p)};c=l.duplicate();try{l.collapse(),l.pasteHTML('<span data-mce-type="bookmark" id="'+d+'_start" style="'+m+'">'+h+"</span>"),u||(c.collapse(!1),l.moveToElementText(c.parentElement()),0===l.compareEndPoints("StartToEnd",c)&&c.move("character",-1),c.pasteHTML('<span data-mce-type="bookmark" id="'+d+'_end" style="'+m+'">'+h+"</span>"))}catch(g){return null}}else{if(p=o.getNode(),f=p.nodeName,"IMG"==f)return{name:f,index:n(f,p)};c=r(l.cloneRange()),u||(c.collapse(!1),c.insertNode(a.create("span",{"data-mce-type":"bookmark",id:d+"_end",style:m},h))),l=r(l),l.collapse(!0),l.insertNode(a.create("span",{"data-mce-type":"bookmark",id:d+"_start",style:m},h))}return o.moveToBookmark({id:d,keep:1}),{id:d}},moveToBookmark:function(e){function t(t){var n=e[t?"start":"end"],r,i,o,s;if(n){for(o=n[0],i=c,r=n.length-1;r>=1;r--){if(s=i.childNodes,n[r]>s.length-1)return;i=s[n[r]]}3===i.nodeType&&(o=Math.min(n[0],i.nodeValue.length)),1===i.nodeType&&(o=Math.min(n[0],i.childNodes.length)),t?a.setStart(i,o):a.setEnd(i,o)}return!0}function n(t){var n=o.get(e.id+"_"+t),r,i,a,c,d=e.keep;if(n&&(r=n.parentNode,"start"==t?(d?(r=n.firstChild,i=1):i=o.nodeIndex(n),f=p=r,h=m=i):(d?(r=n.firstChild,i=1):i=o.nodeIndex(n),p=r,m=i),!d)){for(c=n.previousSibling,a=n.nextSibling,s(l(n.childNodes),function(e){3==e.nodeType&&(e.nodeValue=e.nodeValue.replace(/\uFEFF/g,""))});n=o.get(e.id+"_"+t);)o.remove(n,1);c&&a&&c.nodeType==a.nodeType&&3==c.nodeType&&!u&&(i=c.nodeValue.length,c.appendData(a.nodeValue),o.remove(a),"start"==t?(f=p=c,h=m=i):(p=c,m=i))}}function r(e){return!o.isBlock(e)||e.innerHTML||d||(e.innerHTML='<br data-mce-bogus="1" />'),e}var i=this,o=i.dom,a,c,f,p,h,m;if(e)if(e.start){if(a=o.createRng(),c=o.getRoot(),i.tridentSel)return i.tridentSel.moveToBookmark(e);t(!0)&&t()&&i.setRng(a)}else e.id?(n("start"),n("end"),f&&(a=o.createRng(),a.setStart(r(f),h),a.setEnd(r(p),m),i.setRng(a))):e.name?i.select(o.select(e.name)[e.index]):e.rng&&i.setRng(e.rng)},select:function(t,n){function r(t,n){var r=new e(t,t);do{if(3==t.nodeType&&0!==c(t.nodeValue).length)return n?a.setStart(t,0):a.setEnd(t,t.nodeValue.length),void 0;if("BR"==t.nodeName)return n?a.setStartBefore(t):a.setEndBefore(t),void 0}while(t=n?r.next():r.prev())}var i=this,o=i.dom,a=o.createRng(),s;if(t){if(!n&&i.controlSelection.controlSelect(t))return;s=o.nodeIndex(t),a.setStart(t.parentNode,s),a.setEnd(t.parentNode,s+1),n&&(r(t,1),r(t)),i.setRng(a)}return t},isCollapsed:function(){var e=this,t=e.getRng(),n=e.getSel();return!t||t.item?!1:t.compareEndPoints?0===t.compareEndPoints("StartToEnd",t):!n||t.collapsed},collapse:function(e){var t=this,n=t.getRng(),r;n.item&&(r=n.item(0),n=t.win.document.body.createTextRange(),n.moveToElementText(r)),n.collapse(!!e),t.setRng(n)},getSel:function(){var e=this.win;return e.getSelection?e.getSelection():e.document.selection},getRng:function(e){var t=this,n,r,i,o=t.win.document,a;if(!e&&t.restoreRng)return t.restoreRng;if(e&&t.tridentSel)return t.tridentSel.getRangeAt(0);try{(n=t.getSel())&&(r=n.rangeCount>0?n.getRangeAt(0):n.createRange?n.createRange():o.createRange())}catch(s){}if(d&&r&&r.setStart){try{a=o.selection.createRange()}catch(s){}a&&a.item&&(i=a.item(0),r=o.createRange(),r.setStartBefore(i),r.setEndAfter(i))}return r||(r=o.createRange?o.createRange():o.body.createTextRange()),r.setStart&&9===r.startContainer.nodeType&&r.collapsed&&(i=t.dom.getRoot(),r.setStart(i,0),r.setEnd(i,0)),t.selectedRange&&t.explicitRange&&(0===r.compareBoundaryPoints(r.START_TO_START,t.selectedRange)&&0===r.compareBoundaryPoints(r.END_TO_END,t.selectedRange)?r=t.explicitRange:(t.selectedRange=null,t.explicitRange=null)),r},setRng:function(e,t){var n=this,r;if(e.select)try{e.select()}catch(i){}else if(n.tridentSel){if(e.cloneRange)try{return n.tridentSel.addRange(e),void 0}catch(i){}}else if(r=n.getSel()){n.explicitRange=e;try{r.removeAllRanges()}catch(i){}r.addRange(e),t===!1&&r.extend&&(r.collapse(e.endContainer,e.endOffset),r.extend(e.startContainer,e.startOffset)),n.selectedRange=r.rangeCount>0?r.getRangeAt(0):null}},setNode:function(e){var t=this;return t.setContent(t.dom.getOuterHTML(e)),e},getNode:function(){function e(e,t){for(var n=e;e&&3===e.nodeType&&0===e.length;)e=t?e.nextSibling:e.previousSibling;return e||n}var t=this,n=t.getRng(),r,i=n.startContainer,o=n.endContainer,a=n.startOffset,s=n.endOffset;return n?n.setStart?(r=n.commonAncestorContainer,!n.collapsed&&(i==o&&2>s-a&&i.hasChildNodes()&&(r=i.childNodes[a]),3===i.nodeType&&3===o.nodeType&&(i=i.length===a?e(i.nextSibling,!0):i.parentNode,o=0===s?e(o.previousSibling,!1):o.parentNode,i&&i===o))?i:r&&3==r.nodeType?r.parentNode:r):n.item?n.item(0):n.parentElement():t.dom.getRoot()},getSelectedBlocks:function(t,n){var r=this,i=r.dom,o,a,s=[];if(a=i.getRoot(),t=i.getParent(t||r.getStart(),i.isBlock),n=i.getParent(n||r.getEnd(),i.isBlock),t&&t!=a&&s.push(t),t&&n&&t!=n){o=t;for(var l=new e(t,a);(o=l.next())&&o!=n;)i.isBlock(o)&&s.push(o)}return n&&t!=n&&n!=a&&s.push(n),s},isForward:function(){var e=this.dom,t=this.getSel(),n,r;return t&&t.anchorNode&&t.focusNode?(n=e.createRng(),n.setStart(t.anchorNode,t.anchorOffset),n.collapse(!0),r=e.createRng(),r.setStart(t.focusNode,t.focusOffset),r.collapse(!0),n.compareBoundaryPoints(n.START_TO_START,r)<=0):!0},normalize:function(){function t(t){function a(t,n){for(var r=new e(t,f.getParent(t.parentNode,f.isBlock)||p);t=r[n?"prev":"next"]();)if("BR"===t.nodeName)return!0}function s(e,t){return e.previousSibling&&e.previousSibling.nodeName==t}function l(t,n){var r,a;for(n=n||c,r=new e(n,f.getParent(n.parentNode,f.isBlock)||p);h=r[t?"prev":"next"]();){if(3===h.nodeType&&h.nodeValue.length>0)return c=h,d=t?h.nodeValue.length:0,i=!0,void 0;if(f.isBlock(h)||m[h.nodeName.toLowerCase()])return;a=h}o&&a&&(c=a,i=!0,d=0)}var c,d,u,f=n.dom,p=f.getRoot(),h,m,g;if(c=r[(t?"start":"end")+"Container"],d=r[(t?"start":"end")+"Offset"],m=f.schema.getNonEmptyElements(),9===c.nodeType&&(c=f.getRoot(),d=0),c===p){if(t&&(h=c.childNodes[d>0?d-1:0],h&&(g=h.nodeName.toLowerCase(),m[h.nodeName]||"TABLE"==h.nodeName)))return;if(c.hasChildNodes()&&(d=Math.min(!t&&d>0?d-1:d,c.childNodes.length-1),c=c.childNodes[d],d=0,c.hasChildNodes()&&!/TABLE/.test(c.nodeName))){h=c,u=new e(c,p);do{if(3===h.nodeType&&h.nodeValue.length>0){d=t?0:h.nodeValue.length,c=h,i=!0;break}if(m[h.nodeName.toLowerCase()]){d=f.nodeIndex(h),c=h.parentNode,"IMG"!=h.nodeName||t||d++,i=!0;break}}while(h=t?u.next():u.prev())}}o&&(3===c.nodeType&&0===d&&l(!0),1===c.nodeType&&(h=c.childNodes[d],!h||"BR"!==h.nodeName||s(h,"A")||a(h)||a(h,!0)||l(!0,c.childNodes[d]))),t&&!o&&3===c.nodeType&&d===c.nodeValue.length&&l(!1),i&&r["set"+(t?"Start":"End")](c,d)}var n=this,r,i,o;d||(r=n.getRng(),o=r.collapsed,t(!0),o||t(),i&&(o&&r.collapse(!0),n.setRng(r,n.isForward())))},selectorChanged:function(e,t){var n=this,r;return n.selectorChangedData||(n.selectorChangedData={},r={},n.editor.on("NodeChange",function(e){var t=e.element,i=n.dom,o=i.getParents(t,null,i.getRoot()),a={};s(n.selectorChangedData,function(e,t){s(o,function(n){return i.is(n,t)?(r[t]||(s(e,function(e){e(!0,{node:n,selector:t,parents:o})}),r[t]=e),a[t]=e,!1):void 0})}),s(r,function(e,n){a[n]||(delete r[n],s(e,function(e){e(!1,{node:t,selector:n,parents:o})}))})})),n.selectorChangedData[e]||(n.selectorChangedData[e]=[]),n.selectorChangedData[e].push(t),n},scrollIntoView:function(e){var t,n,r=this,i=r.dom;n=i.getViewPort(r.editor.getWin()),t=i.getPos(e).y,(t<n.y||t+25>n.y+n.h)&&r.editor.getWin().scrollTo(0,t<n.y?t:t-n.h+25)},destroy:function(){this.win=null,this.controlSelection.destroy()}},a}),r(A,[f],function(e){function t(e){this.walk=function(t,r){function i(e){var t;return t=e[0],3===t.nodeType&&t===l&&c>=t.nodeValue.length&&e.splice(0,1),t=e[e.length-1],0===u&&e.length>0&&t===d&&3===t.nodeType&&e.splice(e.length-1,1),e}function o(e,t,n){for(var r=[];e&&e!=n;e=e[t])r.push(e);return r}function a(e,t){do{if(e.parentNode==t)return e;e=e.parentNode}while(e)}function s(e,t,n){var a=n?"nextSibling":"previousSibling";for(m=e,g=m.parentNode;m&&m!=t;m=g)g=m.parentNode,v=o(m==e?m:m[a],a),v.length&&(n||v.reverse(),r(i(v)))}var l=t.startContainer,c=t.startOffset,d=t.endContainer,u=t.endOffset,f,p,h,m,g,v,y;if(y=e.select("td.mce-item-selected,th.mce-item-selected"),y.length>0)return n(y,function(e){r([e])}),void 0;if(1==l.nodeType&&l.hasChildNodes()&&(l=l.childNodes[c]),1==d.nodeType&&d.hasChildNodes()&&(d=d.childNodes[Math.min(u-1,d.childNodes.length-1)]),l==d)return r(i([l]));for(f=e.findCommonAncestor(l,d),m=l;m;m=m.parentNode){if(m===d)return s(l,f,!0);if(m===f)break}for(m=d;m;m=m.parentNode){if(m===l)return s(d,f);if(m===f)break}p=a(l,f)||l,h=a(d,f)||d,s(l,p,!0),v=o(p==l?p:p.nextSibling,"nextSibling",h==d?h.nextSibling:h),v.length&&r(i(v)),s(d,h)},this.split=function(e){function t(e,t){return e.splitText(t)}var n=e.startContainer,r=e.startOffset,i=e.endContainer,o=e.endOffset;return n==i&&3==n.nodeType?r>0&&r<n.nodeValue.length&&(i=t(n,r),n=i.previousSibling,o>r?(o-=r,n=i=t(i,o).previousSibling,o=i.nodeValue.length,r=0):o=0):(3==n.nodeType&&r>0&&r<n.nodeValue.length&&(n=t(n,r),r=0),3==i.nodeType&&o>0&&o<i.nodeValue.length&&(i=t(i,o).previousSibling,o=i.nodeValue.length)),{startContainer:n,startOffset:r,endContainer:i,endOffset:o}}}var n=e.each;return t.compareRanges=function(e,t){if(e&&t){if(!e.item&&!e.duplicate)return e.startContainer==t.startContainer&&e.startOffset==t.startOffset;if(e.item&&t.item&&e.item(0)===t.item(0))return!0;if(e.isEqual&&t.isEqual&&t.isEqual(e))return!0}return!1},t}),r(B,[u,A,f],function(e,t,n){return function(r){function i(e){return e.nodeType&&(e=e.nodeName),!!r.schema.getTextBlockElements()[e.toLowerCase()]}function o(e,t){return I.getParents(e,t,I.getRoot())}function a(e){return 1===e.nodeType&&"_mce_caret"===e.id}function s(){d({alignleft:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{"float":"left"}}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},defaultBlock:"div"},{selector:"img",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"}},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"}}],alignright:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{"float":"right"}}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"justify"},defaultBlock:"div"}],bold:[{inline:"strong",remove:"all"},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all"}],italic:[{inline:"em",remove:"all"},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all"}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:!0},{inline:"u",remove:"all"}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:!0},{inline:"strike",remove:"all"}],forecolor:{inline:"span",styles:{color:"%value"},wrap_links:!1},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},wrap_links:!1},fontname:{inline:"span",styles:{fontFamily:"%value"}},fontsize:{inline:"span",styles:{fontSize:"%value"}},fontsize_class:{inline:"span",attributes:{"class":"%value"}},blockquote:{block:"blockquote",wrapper:1,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:!0,deep:!0,onmatch:function(){return!0},onformat:function(e,t,n){et(n,function(t,n){I.setAttrib(e,n,t)})}},removeformat:[{selector:"b,strong,em,i,font,u,strike",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]}),et("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/),function(e){d(e,{block:e,remove:"all"})}),d(r.settings.formats)}function l(){r.addShortcut("ctrl+b","bold_desc","Bold"),r.addShortcut("ctrl+i","italic_desc","Italic"),r.addShortcut("ctrl+u","underline_desc","Underline");for(var e=1;6>=e;e++)r.addShortcut("ctrl+"+e,"",["FormatBlock",!1,"h"+e]);r.addShortcut("ctrl+7","",["FormatBlock",!1,"p"]),r.addShortcut("ctrl+8","",["FormatBlock",!1,"div"]),r.addShortcut("ctrl+9","",["FormatBlock",!1,"address"])}function c(e){return e?O[e]:O}function d(e,t){e&&("string"!=typeof e?et(e,function(e,t){d(t,e)}):(t=t.length?t:[t],et(t,function(e){e.deep===X&&(e.deep=!e.selector),e.split===X&&(e.split=!e.selector||e.inline),e.remove===X&&e.selector&&!e.inline&&(e.remove="none"),e.selector&&e.inline&&(e.mixed=!0,e.block_expand=!0),"string"==typeof e.classes&&(e.classes=e.classes.split(/\s+/))}),O[e]=t))}function u(e){var t;return r.dom.getParent(e,function(e){return t=r.dom.getStyle(e,"text-decoration"),t&&"none"!==t}),t}function f(e){var t;1===e.nodeType&&e.parentNode&&1===e.parentNode.nodeType&&(t=u(e.parentNode),r.dom.getStyle(e,"color")&&t?r.dom.setStyle(e,"text-decoration",t):r.dom.getStyle(e,"textdecoration")===t&&r.dom.setStyle(e,"text-decoration",null))}function p(t,n,o){function s(e,t){t=t||m,e&&(t.onformat&&t.onformat(e,t,n,o),et(t.styles,function(t,r){I.setStyle(e,r,E(t,n))}),et(t.attributes,function(t,r){I.setAttrib(e,r,E(t,n))}),et(t.classes,function(t){t=E(t,n),I.hasClass(e,t)||I.addClass(e,t)}))}function l(){function t(t,n){var r=new e(n);for(o=r.current();o;o=r.prev())if(o.childNodes.length>1||o==t||"BR"==o.tagName)return o}var n=r.selection.getRng(),i=n.startContainer,a=n.endContainer;if(i!=a&&0===n.endOffset){var s=t(i,a),l=3==s.nodeType?s.length:s.childNodes.length;n.setEnd(s,l)}return n}function d(e,t,n,r,i){var o=[],a=-1,s,l=-1,c=-1,d;return et(e.childNodes,function(e,t){return"UL"===e.nodeName||"OL"===e.nodeName?(a=t,s=e,!1):void 0}),et(e.childNodes,function(e,n){"SPAN"===e.nodeName&&"bookmark"==I.getAttrib(e,"data-mce-type")&&(e.id==t.id+"_start"?l=n:e.id==t.id+"_end"&&(c=n))}),0>=a||a>l&&c>a?(et(tt(e.childNodes),i),0):(d=I.clone(n,K),et(tt(e.childNodes),function(e,t){(a>l&&a>t||l>a&&t>a)&&(o.push(e),e.parentNode.removeChild(e))
}),a>l?e.insertBefore(d,s):l>a&&e.insertBefore(d,s.nextSibling),r.push(d),et(o,function(e){d.appendChild(e)}),d)}function u(e,r,o){var l=[],c,u,f=!0;c=m.inline||m.block,u=I.create(c),s(u),W.walk(e,function(e){function p(e){var y,C,x,_,N;return N=f,y=e.nodeName.toLowerCase(),C=e.parentNode.nodeName.toLowerCase(),1===e.nodeType&&J(e)&&(N=f,f="true"===J(e),_=!0),w(y,"br")?(v=0,m.block&&I.remove(e),void 0):m.wrapper&&g(e,t,n)?(v=0,void 0):f&&!_&&m.block&&!m.wrapper&&i(y)&&z(C,c)?(e=I.rename(e,c),s(e),l.push(e),v=0,void 0):m.selector&&(et(h,function(t){"collapsed"in t&&t.collapsed!==b||I.is(e,t.selector)&&!a(e)&&(s(e,t),x=!0)}),!m.inline||x)?(v=0,void 0):(!f||_||!z(c,y)||!z(C,c)||!o&&3===e.nodeType&&1===e.nodeValue.length&&65279===e.nodeValue.charCodeAt(0)||a(e)||m.inline&&V(e)?"li"==y&&r?v=d(e,r,u,l,p):(v=0,et(tt(e.childNodes),p),_&&(f=N),v=0):(v||(v=I.clone(u,K),e.parentNode.insertBefore(v,e),l.push(v)),v.appendChild(e)),void 0)}var v;et(e,p)}),m.wrap_links===!1&&et(l,function(e){function t(e){var n,r,i;if("A"===e.nodeName){for(r=I.clone(u,K),l.push(r),i=tt(e.childNodes),n=0;n<i.length;n++)r.appendChild(i[n]);e.appendChild(r)}et(tt(e.childNodes),t)}t(e)}),et(l,function(e){function r(e){var t=0;return et(e.childNodes,function(e){k(e)||H(e)||t++}),t}function i(e){var t,n;return et(e.childNodes,function(e){return 1!=e.nodeType||H(e)||a(e)?void 0:(t=e,K)}),t&&x(t,m)&&(n=I.clone(t,K),s(n),I.replace(n,e,G),I.remove(t,1)),n||e}var o;if(o=r(e),(l.length>1||!V(e))&&0===o)return I.remove(e,1),void 0;if(m.inline||m.wrapper){if(m.exact||1!==o||(e=i(e)),et(h,function(t){et(I.select(t.inline,e),function(e){var r;if(t.wrap_links===!1){r=e.parentNode;do if("A"===r.nodeName)return;while(r=r.parentNode)}R(t,n,e,t.exact?e:null)})}),g(e.parentNode,t,n))return I.remove(e,1),e=0,G;m.merge_with_parents&&I.getParent(e.parentNode,function(r){return g(r,t,n)?(I.remove(e,1),e=0,G):void 0}),e&&m.merge_siblings!==!1&&(e=M(B(e),e),e=M(e,B(e,G)))}})}var h=c(t),m=h[0],v,y,b=!o&&F.isCollapsed();if(m)if(o)o.nodeType?(y=I.createRng(),y.setStartBefore(o),y.setEndAfter(o),u(T(y,h),null,!0)):u(o,null,!0);else if(b&&m.inline&&!I.select("td.mce-item-selected,th.mce-item-selected").length)D("apply",t,n);else{var C=r.selection.getNode();U||!h[0].defaultBlock||I.getParent(C,I.isBlock)||p(h[0].defaultBlock),r.selection.setRng(l()),v=F.getBookmark(),u(T(F.getRng(G),h),v),m.styles&&(m.styles.color||m.styles.textDecoration)&&(nt(C,f,"childNodes"),f(C)),F.moveToBookmark(v),P(F.getRng(G)),r.nodeChanged()}}function h(e,t,n){function i(e){var n,r,o,a,s;if(1===e.nodeType&&J(e)&&(a=b,b="true"===J(e),s=!0),n=tt(e.childNodes),b&&!s)for(r=0,o=p.length;o>r&&!R(p[r],t,e,e);r++);if(h.deep&&n.length){for(r=0,o=n.length;o>r;r++)i(n[r]);s&&(b=a)}}function a(n){var r;return et(o(n.parentNode).reverse(),function(n){var i;r||"_start"==n.id||"_end"==n.id||(i=g(n,e,t),i&&i.split!==!1&&(r=n))}),r}function s(e,n,r,i){var o,a,s,l,c,d;if(e){for(d=e.parentNode,o=n.parentNode;o&&o!=d;o=o.parentNode){for(a=I.clone(o,K),c=0;c<p.length;c++)if(R(p[c],t,a,a)){a=0;break}a&&(s&&a.appendChild(s),l||(l=a),s=a)}!i||h.mixed&&V(e)||(n=I.split(e,n)),s&&(r.parentNode.insertBefore(s,r),l.appendChild(r))}return n}function l(e){return s(a(e),e,e,!0)}function d(e){var t=I.get(e?"_start":"_end"),n=t[e?"firstChild":"lastChild"];return H(n)&&(n=n[e?"firstChild":"lastChild"]),I.remove(t,!0),n}function f(e){var t,n;e=T(e,p,G),h.split&&(t=L(e,G),n=L(e),t!=n?(/^(TR|TD)$/.test(t.nodeName)&&t.firstChild&&(t="TD"==t.nodeName?t.firstChild||t:t.firstChild.firstChild||t),t=S(t,"span",{id:"_start","data-mce-type":"bookmark"}),n=S(n,"span",{id:"_end","data-mce-type":"bookmark"}),l(t),l(n),t=d(G),n=d()):t=n=l(t),e.startContainer=t.parentNode,e.startOffset=q(t),e.endContainer=n.parentNode,e.endOffset=q(n)+1),W.walk(e,function(e){et(e,function(e){i(e),1===e.nodeType&&"underline"===r.dom.getStyle(e,"text-decoration")&&e.parentNode&&"underline"===u(e.parentNode)&&R({deep:!1,exact:!0,inline:"span",styles:{textDecoration:"underline"}},null,e)})})}var p=c(e),h=p[0],m,y,b=!0;return n?(n.nodeType?(y=I.createRng(),y.setStartBefore(n),y.setEndAfter(n),f(y)):f(n),void 0):(F.isCollapsed()&&h.inline&&!I.select("td.mce-item-selected,th.mce-item-selected").length?D("remove",e,t):(m=F.getBookmark(),f(F.getRng(G)),F.moveToBookmark(m),h.inline&&v(e,t,F.getStart())&&P(F.getRng(!0)),r.nodeChanged()),void 0)}function m(e,t,n){var r=c(e);!v(e,t,n)||"toggle"in r[0]&&!r[0].toggle?p(e,t,n):h(e,t,n)}function g(e,t,n,r){function i(e,t,i){var o,a,s=t[i],l;if(t.onmatch)return t.onmatch(e,t,i);if(s)if(s.length===X){for(o in s)if(s.hasOwnProperty(o)){if(a="attributes"===i?I.getAttrib(e,o):_(e,o),r&&!a&&!t.exact)return;if((!r||t.exact)&&!w(a,N(E(s[o],n),o)))return}}else for(l=0;l<s.length;l++)if("attributes"===i?I.getAttrib(e,s[l]):_(e,s[l]))return t;return t}var o=c(t),a,s,l;if(o&&e)for(s=0;s<o.length;s++)if(a=o[s],x(e,a)&&i(e,a,"attributes")&&i(e,a,"styles")){if(l=a.classes)for(s=0;s<l.length;s++)if(!I.hasClass(e,l[s]))return;return a}}function v(e,t,n){function r(n){return n=I.getParent(n,function(n){return!!g(n,e,t,!0)}),g(n,e,t)}var i;return n?r(n):(n=F.getNode(),r(n)?G:(i=F.getStart(),i!=n&&r(i)?G:K))}function y(e,t){var n,r=[],i={};return n=F.getStart(),I.getParent(n,function(n){var o,a;for(o=0;o<e.length;o++)a=e[o],!i[a]&&g(n,a,t)&&(i[a]=!0,r.push(a))},I.getRoot()),r}function b(e){var t=c(e),n,r,i,a,s;if(t)for(n=F.getStart(),r=o(n),a=t.length-1;a>=0;a--){if(s=t[a].selector,!s)return G;for(i=r.length-1;i>=0;i--)if(I.is(r[i],s))return G}return K}function C(e,t,n){var i;return Y||(Y={},i={},r.on("NodeChange",function(e){var t=o(e.element),n={};et(Y,function(e,r){et(t,function(o){return g(o,r,{},e.similar)?(i[r]||(et(e,function(e){e(!0,{node:o,format:r,parents:t})}),i[r]=e),n[r]=e,!1):void 0})}),et(i,function(r,o){n[o]||(delete i[o],et(r,function(n){n(!1,{node:e.element,format:o,parents:t})}))})})),et(e.split(","),function(e){Y[e]||(Y[e]=[],Y[e].similar=n),Y[e].push(t)}),this}function x(e,t){return w(e,t.inline)?G:w(e,t.block)?G:t.selector?1==e.nodeType&&I.is(e,t.selector):void 0}function w(e,t){return e=e||"",t=t||"",e=""+(e.nodeName||e),t=""+(t.nodeName||t),e.toLowerCase()==t.toLowerCase()}function _(e,t){return N(I.getStyle(e,t),t)}function N(e,t){return("color"==t||"backgroundColor"==t)&&(e=I.toHex(e)),"fontWeight"==t&&700==e&&(e="bold"),"fontFamily"==t&&(e=e.replace(/[\'\"]/g,"").replace(/,\s+/g,",")),""+e}function E(e,t){return"string"!=typeof e?e=e(t):t&&(e=e.replace(/%(\w+)/g,function(e,n){return t[n]||e})),e}function k(e){return e&&3===e.nodeType&&/^([\t \r\n]+|)$/.test(e.nodeValue)}function S(e,t,n){var r=I.create(t,n);return e.parentNode.insertBefore(r,e),r.appendChild(e),r}function T(t,n,a){function s(e){function t(e){return"BR"==e.nodeName&&e.getAttribute("data-mce-bogus")&&!e.nextSibling}var r,i,o,a,s;if(r=i=e?g:y,a=e?"previousSibling":"nextSibling",s=I.getRoot(),3==r.nodeType&&!k(r)&&(e?v>0:b<r.nodeValue.length))return r;for(;;){if(!n[0].block_expand&&V(i))return i;for(o=i[a];o;o=o[a])if(!H(o)&&!k(o)&&!t(o))return i;if(i.parentNode==s){r=i;break}i=i.parentNode}return r}function l(e,t){for(t===X&&(t=3===e.nodeType?e.length:e.childNodes.length);e&&e.hasChildNodes();)e=e.childNodes[t],e&&(t=3===e.nodeType?e.length:e.childNodes.length);return{node:e,offset:t}}function c(e){for(var t=e;t;){if(1===t.nodeType&&J(t))return"false"===J(t)?t:e;t=t.parentNode}return e}function d(t,n,i){function o(e,t){var n,r,o=e.nodeValue;return"undefined"==typeof t&&(t=i?o.length:0),i?(n=o.lastIndexOf(" ",t),r=o.lastIndexOf("\xa0",t),n=n>r?n:r,-1===n||a||n++):(n=o.indexOf(" ",t),r=o.indexOf("\xa0",t),n=-1!==n&&(-1===r||r>n)?n:r),n}var s,l,c,d;if(3===t.nodeType){if(c=o(t,n),-1!==c)return{container:t,offset:c};d=t}for(s=new e(t,I.getParent(t,V)||r.getBody());l=s[i?"prev":"next"]();)if(3===l.nodeType){if(d=l,c=o(l),-1!==c)return{container:l,offset:c}}else if(V(l))break;return d?(n=i?0:d.length,{container:d,offset:n}):void 0}function u(e,r){var i,a,s,l;for(3==e.nodeType&&0===e.nodeValue.length&&e[r]&&(e=e[r]),i=o(e),a=0;a<i.length;a++)for(s=0;s<n.length;s++)if(l=n[s],!("collapsed"in l&&l.collapsed!==t.collapsed)&&I.is(i[a],l.selector))return i[a];return e}function f(e,t){var r;if(n[0].wrapper||(r=I.getParent(e,n[0].block)),r||(r=I.getParent(3==e.nodeType?e.parentNode:e,i)),r&&n[0].wrapper&&(r=o(r,"ul,ol").reverse()[0]||r),!r)for(r=e;r[t]&&!V(r[t])&&(r=r[t],!w(r,"br")););return r||e}var p,h,m,g=t.startContainer,v=t.startOffset,y=t.endContainer,b=t.endOffset;if(1==g.nodeType&&g.hasChildNodes()&&(p=g.childNodes.length-1,g=g.childNodes[v>p?p:v],3==g.nodeType&&(v=0)),1==y.nodeType&&y.hasChildNodes()&&(p=y.childNodes.length-1,y=y.childNodes[b>p?p:b-1],3==y.nodeType&&(b=y.nodeValue.length)),g=c(g),y=c(y),(H(g.parentNode)||H(g))&&(g=H(g)?g:g.parentNode,g=g.nextSibling||g,3==g.nodeType&&(v=0)),(H(y.parentNode)||H(y))&&(y=H(y)?y:y.parentNode,y=y.previousSibling||y,3==y.nodeType&&(b=y.length)),n[0].inline&&(t.collapsed&&(m=d(g,v,!0),m&&(g=m.container,v=m.offset),m=d(y,b),m&&(y=m.container,b=m.offset)),h=l(y,b),h.node)){for(;h.node&&0===h.offset&&h.node.previousSibling;)h=l(h.node.previousSibling);h.node&&h.offset>0&&3===h.node.nodeType&&" "===h.node.nodeValue.charAt(h.offset-1)&&h.offset>1&&(y=h.node,y.splitText(h.offset-1))}return(n[0].inline||n[0].block_expand)&&(n[0].inline&&3==g.nodeType&&0!==v||(g=s(!0)),n[0].inline&&3==y.nodeType&&b!==y.nodeValue.length||(y=s())),n[0].selector&&n[0].expand!==K&&!n[0].inline&&(g=u(g,"previousSibling"),y=u(y,"nextSibling")),(n[0].block||n[0].selector)&&(g=f(g,"previousSibling"),y=f(y,"nextSibling"),n[0].block&&(V(g)||(g=s(!0)),V(y)||(y=s()))),1==g.nodeType&&(v=q(g),g=g.parentNode),1==y.nodeType&&(b=q(y)+1,y=y.parentNode),{startContainer:g,startOffset:v,endContainer:y,endOffset:b}}function R(e,t,n,r){var i,o,a;if(!x(n,e))return K;if("all"!=e.remove)for(et(e.styles,function(e,i){e=N(E(e,t),i),"number"==typeof i&&(i=e,r=0),(!r||w(_(r,i),e))&&I.setStyle(n,i,""),a=1}),a&&""===I.getAttrib(n,"style")&&(n.removeAttribute("style"),n.removeAttribute("data-mce-style")),et(e.attributes,function(e,i){var o;if(e=E(e,t),"number"==typeof i&&(i=e,r=0),!r||w(I.getAttrib(r,i),e)){if("class"==i&&(e=I.getAttrib(n,i),e&&(o="",et(e.split(/\s+/),function(e){/mce\w+/.test(e)&&(o+=(o?" ":"")+e)}),o)))return I.setAttrib(n,i,o),void 0;"class"==i&&n.removeAttribute("className"),$.test(i)&&n.removeAttribute("data-mce-"+i),n.removeAttribute(i)}}),et(e.classes,function(e){e=E(e,t),(!r||I.hasClass(r,e))&&I.removeClass(n,e)}),o=I.getAttribs(n),i=0;i<o.length;i++)if(0!==o[i].nodeName.indexOf("_"))return K;return"none"!=e.remove?(A(n,e),G):void 0}function A(e,t){function n(e,t,n){return e=B(e,t,n),!e||"BR"==e.nodeName||V(e)}var r=e.parentNode,i;t.block&&(U?r==I.getRoot()&&(t.list_block&&w(e,t.list_block)||et(tt(e.childNodes),function(e){z(U,e.nodeName.toLowerCase())?i?i.appendChild(e):i=S(e,U):i=0})):V(e)&&!V(r)&&(n(e,K)||n(e.firstChild,G,1)||e.insertBefore(I.create("br"),e.firstChild),n(e,G)||n(e.lastChild,K,1)||e.appendChild(I.create("br")))),t.selector&&t.inline&&!w(t.inline,e)||I.remove(e,1)}function B(e,t,n){if(e)for(t=t?"nextSibling":"previousSibling",e=n?e:e[t];e;e=e[t])if(1==e.nodeType||!k(e))return e}function H(e){return e&&1==e.nodeType&&"bookmark"==e.getAttribute("data-mce-type")}function M(e,t){function n(e,t){function n(e){var t={};return et(I.getAttribs(e),function(n){var r=n.nodeName.toLowerCase();0!==r.indexOf("_")&&"style"!==r&&(t[r]=I.getAttrib(e,r))}),t}function r(e,t){var n,r;for(r in e)if(e.hasOwnProperty(r)){if(n=t[r],n===X)return K;if(e[r]!=n)return K;delete t[r]}for(r in t)if(t.hasOwnProperty(r))return K;return G}return e.nodeName!=t.nodeName?K:r(n(e),n(t))?r(I.parseStyle(I.getAttrib(e,"style")),I.parseStyle(I.getAttrib(t,"style")))?G:K:K}function r(e,t){for(i=e;i;i=i[t]){if(3==i.nodeType&&0!==i.nodeValue.length)return e;if(1==i.nodeType&&!H(i))return i}return e}var i,o;if(e&&t&&(e=r(e,"previousSibling"),t=r(t,"nextSibling"),n(e,t))){for(i=e.nextSibling;i&&i!=t;)o=i,i=i.nextSibling,e.appendChild(o);return I.remove(t),et(tt(t.childNodes),function(t){e.appendChild(t)}),e}return t}function L(t,n){var i,o,a;return i=t[n?"startContainer":"endContainer"],o=t[n?"startOffset":"endOffset"],1==i.nodeType&&(a=i.childNodes.length-1,!n&&o&&o--,i=i.childNodes[o>a?a:o]),3===i.nodeType&&n&&o>=i.nodeValue.length&&(i=new e(i,r.getBody()).next()||i),3!==i.nodeType||n||0!==o||(i=new e(i,r.getBody()).prev()||i),i}function D(t,n,o){function a(e){var t=I.create("span",{id:y,"data-mce-bogus":!0,style:b?"color:red":""});return e&&t.appendChild(r.getDoc().createTextNode(j)),t}function s(e,t){for(;e;){if(3===e.nodeType&&e.nodeValue!==j||e.childNodes.length>1)return!1;t&&1===e.nodeType&&t.push(e),e=e.firstChild}return!0}function l(e){for(;e;){if(e.id===y)return e;e=e.parentNode}}function d(t){var n;if(t)for(n=new e(t,t),t=n.current();t;t=n.next())if(3===t.nodeType)return t}function u(e,t){var n,r;if(e)r=F.getRng(!0),s(e)?(t!==!1&&(r.setStartBefore(e),r.setEndBefore(e)),I.remove(e)):(n=d(e),n.nodeValue.charAt(0)===j&&(n=n.deleteData(0,1)),I.remove(e,1)),F.setRng(r);else if(e=l(F.getStart()),!e)for(;e=I.get(y);)u(e,!1)}function f(){var e,t,r,i,s,u,f;e=F.getRng(!0),i=e.startOffset,u=e.startContainer,f=u.nodeValue,t=l(F.getStart()),t&&(r=d(t)),f&&i>0&&i<f.length&&/\w/.test(f.charAt(i))&&/\w/.test(f.charAt(i-1))?(s=F.getBookmark(),e.collapse(!0),e=T(e,c(n)),e=W.split(e),p(n,o,e),F.moveToBookmark(s)):(t&&r.nodeValue===j?p(n,o,t):(t=a(!0),r=t.firstChild,e.insertNode(t),i=1,p(n,o,t)),F.setCursorLocation(r,i))}function m(){var e=F.getRng(!0),t,r,s,l,d,u,f=[],p,m;for(t=e.startContainer,r=e.startOffset,d=t,3==t.nodeType&&((r!=t.nodeValue.length||t.nodeValue===j)&&(l=!0),d=d.parentNode);d;){if(g(d,n,o)){u=d;break}d.nextSibling&&(l=!0),f.push(d),d=d.parentNode}if(u)if(l)s=F.getBookmark(),e.collapse(!0),e=T(e,c(n),!0),e=W.split(e),h(n,o,e),F.moveToBookmark(s);else{for(m=a(),d=m,p=f.length-1;p>=0;p--)d.appendChild(I.clone(f[p],!1)),d=d.firstChild;d.appendChild(I.doc.createTextNode(j)),d=d.firstChild;var v=I.getParent(u,i);v&&I.isEmpty(v)?u.parentNode.replaceChild(m,u):I.insertAfter(m,u),F.setCursorLocation(d,1)}}function v(){var e;e=l(F.getStart()),e&&!I.isEmpty(e)&&nt(e,function(e){1!=e.nodeType||e.id===y||I.isEmpty(e)||I.setAttrib(e,"data-mce-bogus",null)},"childNodes")}var y="_mce_caret",b=r.settings.caret_debug;r._hasCaretEvents||(Z=function(){var e=[],t;if(s(l(F.getStart()),e))for(t=e.length;t--;)I.setAttrib(e[t],"data-mce-bogus","1")},Q=function(e){var t=e.keyCode;u(),(8==t||37==t||39==t)&&u(l(F.getStart())),v()},r.on("SetContent",function(e){e.selection&&v()}),r._hasCaretEvents=!0),"apply"==t?f():m()}function P(t){var n=t.startContainer,r=t.startOffset,i,o,a,s,l;if(3==n.nodeType&&r>=n.nodeValue.length&&(r=q(n),n=n.parentNode,i=!0),1==n.nodeType)for(s=n.childNodes,n=s[Math.min(r,s.length-1)],o=new e(n,I.getParent(n,I.isBlock)),(r>s.length-1||i)&&o.next(),a=o.current();a;a=o.next())if(3==a.nodeType&&!k(a))return l=I.create("a",null,j),a.parentNode.insertBefore(l,a),t.setStart(a,0),F.setRng(t),I.remove(l),void 0}var O={},I=r.dom,F=r.selection,W=new t(I),z=r.schema.isValidChild,V=I.isBlock,U=r.settings.forced_root_block,q=I.nodeIndex,j="\ufeff",$=/^(src|href|style)$/,K=!1,G=!0,Y,X,J=I.getContentEditable,Q,Z,et=n.each,tt=n.grep,nt=n.walk,rt=n.extend;rt(this,{get:c,register:d,apply:p,remove:h,toggle:m,match:v,matchAll:y,matchNode:g,canApply:b,formatChanged:C}),s(),l(),r.on("BeforeGetContent",function(){Z&&Z()}),r.on("mouseup keydown",function(e){Q&&Q(e)})}}),r(H,[m,f],function(e,t){var n=t.trim,r;return r=new RegExp(["<span[^>]+data-mce-bogus[^>]+>[\u200b\ufeff]+<\\/span>","<div[^>]+data-mce-bogus[^>]+><\\/div>",'\\s?data-mce-selected="[^"]+"'].join("|"),"gi"),function(t){function i(){return n(t.getContent({format:"raw",no_events:1}).replace(r,""))}function o(){a.typing=!1,a.add()}var a,s=0,l=[],c,d;return t.on("init",function(){a.add()}),t.on("BeforeExecCommand",function(e){var t=e.command;"Undo"!=t&&"Redo"!=t&&"mceRepaint"!=t&&a.beforeChange()}),t.on("ExecCommand",function(e){var t=e.command;"Undo"!=t&&"Redo"!=t&&"mceRepaint"!=t&&a.add()}),t.on("ObjectResizeStart",function(){a.beforeChange()}),t.on("SaveContent ObjectResized",o),t.dom.bind(t.dom.getRoot(),"dragend",o),t.dom.bind(t.getBody(),"focusout",function(){!t.removed&&a.typing&&o()}),t.on("KeyUp",function(n){var r=n.keyCode;(r>=33&&36>=r||r>=37&&40>=r||45==r||13==r||n.ctrlKey)&&(o(),t.nodeChanged()),(46==r||8==r||e.mac&&(91==r||93==r))&&t.nodeChanged(),d&&a.typing&&(t.isDirty()||(t.isNotDirty=!l[0]||i()==l[0].content),t.fire("TypingUndo"),d=!1,t.nodeChanged())}),t.on("KeyDown",function(e){var t=e.keyCode;return t>=33&&36>=t||t>=37&&40>=t||45==t?(a.typing&&o(),void 0):((16>t||t>20)&&224!=t&&91!=t&&!a.typing&&(a.beforeChange(),a.typing=!0,a.add(),d=!0),void 0)}),t.on("MouseDown",function(){a.typing&&o()}),t.addShortcut("ctrl+z","","Undo"),t.addShortcut("ctrl+y,ctrl+shift+z","","Redo"),t.on("AddUndo Undo Redo ClearUndos MouseUp",function(e){e.isDefaultPrevented()||t.nodeChanged()}),a={data:l,typing:!1,beforeChange:function(){c=t.selection.getBookmark(2,!0)},add:function(e){var n,r=t.settings,o;if(e=e||{},e.content=i(),t.fire("BeforeAddUndo",{level:e}).isDefaultPrevented())return null;if(o=l[s],o&&o.content==e.content)return null;if(l[s]&&(l[s].beforeBookmark=c),r.custom_undo_redo_levels&&l.length>r.custom_undo_redo_levels){for(n=0;n<l.length-1;n++)l[n]=l[n+1];l.length--,s=l.length}e.bookmark=t.selection.getBookmark(2,!0),s<l.length-1&&(l.length=s+1),l.push(e),s=l.length-1;var a={level:e,lastLevel:o};return t.fire("AddUndo",a),s>0&&(t.fire("change",a),t.isNotDirty=!1),e},undo:function(){var e;return a.typing&&(a.add(),a.typing=!1),s>0&&(e=l[--s],t.setContent(e.content,{format:"raw"}),t.selection.moveToBookmark(e.beforeBookmark),t.fire("undo",{level:e})),e},redo:function(){var e;return s<l.length-1&&(e=l[++s],t.setContent(e.content,{format:"raw"}),t.selection.moveToBookmark(e.bookmark),t.fire("redo",{level:e})),e},clear:function(){l=[],s=0,a.typing=!1,t.fire("ClearUndos")},hasUndo:function(){return s>0||a.typing&&l[0]&&i()!=l[0].content},hasRedo:function(){return s<l.length-1&&!this.typing},transact:function(e){a.beforeChange(),e(),a.add()}}}}),r(M,[u,m],function(e,t){var n=t.ie;return function(t){function r(r){function d(e){return e&&i.isBlock(e)&&!/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName)&&!/^(fixed|absolute)/i.test(e.style.position)&&"true"!==i.getContentEditable(e)}function u(e){var t;i.isBlock(e)&&(t=o.getRng(),e.appendChild(i.create("span",null,"\xa0")),o.select(e),e.lastChild.outerHTML="",o.setRng(t))}function f(e){for(var t=e,n=[],r;t=t.firstChild;){if(i.isBlock(t))return;1!=t.nodeType||c[t.nodeName.toLowerCase()]||n.push(t)}for(r=n.length;r--;)t=n[r],!t.hasChildNodes()||t.firstChild==t.lastChild&&""===t.firstChild.nodeValue?i.remove(t):"A"==t.nodeName&&" "===(t.innerText||t.textContent)&&i.remove(t)}function p(t){var n,r,a,s=t,l;if(a=i.createRng(),t.hasChildNodes()){for(n=new e(t,t);r=n.current();){if(3==r.nodeType){a.setStart(r,0),a.setEnd(r,0);break}if(c[r.nodeName.toLowerCase()]){a.setStartBefore(r),a.setEndBefore(r);break}s=r,r=n.next()}r||(a.setStart(s,0),a.setEnd(s,0))}else"BR"==t.nodeName?t.nextSibling&&i.isBlock(t.nextSibling)?((!R||9>R)&&(l=i.create("br"),t.parentNode.insertBefore(l,t)),a.setStartBefore(t),a.setEndBefore(t)):(a.setStartAfter(t),a.setEndAfter(t)):(a.setStart(t,0),a.setEnd(t,0));o.setRng(a),i.remove(l),o.scrollIntoView(t)}function h(e){var t=k,r,o,s;if(r=e||"TABLE"==L?i.create(e||P):T.cloneNode(!1),s=r,a.keep_styles!==!1)do if(/^(SPAN|STRONG|B|EM|I|FONT|STRIKE|U)$/.test(t.nodeName)){if("_mce_caret"==t.id)continue;o=t.cloneNode(!1),i.setAttrib(o,"id",""),r.hasChildNodes()?(o.appendChild(r.firstChild),r.appendChild(o)):(s=o,r.appendChild(o))}while(t=t.parentNode);return n||(s.innerHTML='<br data-mce-bogus="1">'),r}function m(t){var n,r,i;if(3==k.nodeType&&(t?S>0:S<k.nodeValue.length))return!1;if(k.parentNode==T&&O&&!t)return!0;if(t&&1==k.nodeType&&k==T.firstChild)return!0;if("TABLE"===k.nodeName||k.previousSibling&&"TABLE"==k.previousSibling.nodeName)return O&&!t||!O&&t;for(n=new e(k,T),3==k.nodeType&&(t&&0===S?n.prev():t||S!=k.nodeValue.length||n.next());r=n.current();){if(1===r.nodeType){if(!r.getAttribute("data-mce-bogus")&&(i=r.nodeName.toLowerCase(),c[i]&&"br"!==i))return!1}else if(3===r.nodeType&&!/^[ \t\r\n]*$/.test(r.nodeValue))return!1;t?n.prev():n.next()}return!0}function g(e,n){var r,o,a,s,c,u,f=P||"P";if(o=i.getParent(e,i.isBlock),u=t.getBody().nodeName.toLowerCase(),!o||!d(o)){if(o=o||E,!o.hasChildNodes())return r=i.create(f),o.appendChild(r),_.setStart(r,0),_.setEnd(r,0),r;for(s=e;s.parentNode!=o;)s=s.parentNode;for(;s&&!i.isBlock(s);)a=s,s=s.previousSibling;if(a&&l.isValidChild(u,f.toLowerCase())){for(r=i.create(f),a.parentNode.insertBefore(r,a),s=a;s&&!i.isBlock(s);)c=s.nextSibling,r.appendChild(s),s=c;_.setStart(e,n),_.setEnd(e,n)}}return e}function v(){function e(e){for(var t=M[e?"firstChild":"lastChild"];t&&1!=t.nodeType;)t=t[e?"nextSibling":"previousSibling"];return t===T}function t(){var e=M.parentNode;return"LI"==e.nodeName?e:M}var n=M.parentNode.nodeName;/^(OL|UL|LI)$/.test(n)&&(P="LI"),B=P?h(P):i.create("BR"),e(!0)&&e()?"LI"==n?i.insertAfter(B,t()):i.replace(B,M):e(!0)?"LI"==n?(i.insertAfter(B,t()),B.appendChild(i.doc.createTextNode(" ")),B.appendChild(M)):M.parentNode.insertBefore(B,M):e()?(i.insertAfter(B,t()),u(B)):(M=t(),N=_.cloneRange(),N.setStartAfter(T),N.setEndAfter(M),H=N.extractContents(),i.insertAfter(H,M),i.insertAfter(B,M)),i.remove(T),p(B),s.add()}function y(){for(var t=new e(k,T),n;n=t.next();)if(c[n.nodeName.toLowerCase()]||n.length>0)return!0}function b(){var e,t,r;k&&3==k.nodeType&&S>=k.nodeValue.length&&(n||y()||(e=i.create("br"),_.insertNode(e),_.setStartAfter(e),_.setEndAfter(e),t=!0)),e=i.create("br"),_.insertNode(e),n&&"PRE"==L&&(!R||8>R)&&e.parentNode.insertBefore(i.doc.createTextNode("\r"),e),r=i.create("span",{},"&nbsp;"),e.parentNode.insertBefore(r,e),o.scrollIntoView(r),i.remove(r),t?(_.setStartBefore(e),_.setEndBefore(e)):(_.setStartAfter(e),_.setEndAfter(e)),o.setRng(_),s.add()}function C(e){do 3===e.nodeType&&(e.nodeValue=e.nodeValue.replace(/^[\r\n]+/,"")),e=e.firstChild;while(e)}function x(e){var t=i.getRoot(),n,r;for(n=e;n!==t&&"false"!==i.getContentEditable(n);)"true"===i.getContentEditable(n)&&(r=n),n=n.parentNode;return n!==t?r:t}function w(e){var t;n||(e.normalize(),t=e.lastChild,(!t||/^(left|right)$/gi.test(i.getStyle(t,"float",!0)))&&i.add(e,"br"))}var _=o.getRng(!0),N,E,k,S,T,R,A,B,H,M,L,D,P,O;if(!_.collapsed)return t.execCommand("Delete"),void 0;if(!r.isDefaultPrevented()&&(k=_.startContainer,S=_.startOffset,P=(a.force_p_newlines?"p":"")||a.forced_root_block,P=P?P.toUpperCase():"",R=i.doc.documentMode,A=r.shiftKey,1==k.nodeType&&k.hasChildNodes()&&(O=S>k.childNodes.length-1,k=k.childNodes[Math.min(S,k.childNodes.length-1)]||k,S=O&&3==k.nodeType?k.nodeValue.length:0),E=x(k))){if(s.beforeChange(),!i.isBlock(E)&&E!=i.getRoot())return(!P||A)&&b(),void 0;if((P&&!A||!P&&A)&&(k=g(k,S)),T=i.getParent(k,i.isBlock),M=T?i.getParent(T.parentNode,i.isBlock):null,L=T?T.nodeName.toUpperCase():"",D=M?M.nodeName.toUpperCase():"","LI"!=D||r.ctrlKey||(T=M,L=D),"LI"==L){if(!P&&A)return b(),void 0;if(i.isEmpty(T))return v(),void 0}if("PRE"==L&&a.br_in_pre!==!1){if(!A)return b(),void 0}else if(!P&&!A&&"LI"!=L||P&&A)return b(),void 0;P&&T===t.getBody()||(P=P||"P",m()?(B=/^(H[1-6]|PRE|FIGURE)$/.test(L)&&"HGROUP"!=D?h(P):h(),a.end_container_on_empty_block&&d(M)&&i.isEmpty(T)?B=i.split(M,T):i.insertAfter(B,T),p(B)):m(!0)?(B=T.parentNode.insertBefore(h(),T),u(B)):(N=_.cloneRange(),N.setEndAfter(T),H=N.extractContents(),C(H),B=H.firstChild,i.insertAfter(H,T),f(B),w(T),p(B)),i.setAttrib(B,"id",""),s.add())}}var i=t.dom,o=t.selection,a=t.settings,s=t.undoManager,l=t.schema,c=l.getNonEmptyElements();t.on("keydown",function(e){13==e.keyCode&&r(e)!==!1&&e.preventDefault()})}}),r(L,[],function(){return function(e){function t(){var t=i.getStart(),s=e.getBody(),l,c,d,u,f,p,h,m=-16777215,g,v,y,b,C;if(C=n.forced_root_block,t&&1===t.nodeType&&C){for(;t&&t!=s;){if(a[t.nodeName])return;t=t.parentNode}if(l=i.getRng(),l.setStart){c=l.startContainer,d=l.startOffset,u=l.endContainer,f=l.endOffset;try{v=e.getDoc().activeElement===s}catch(x){}}else l.item&&(t=l.item(0),l=e.getDoc().body.createTextRange(),l.moveToElementText(t)),v=l.parentElement().ownerDocument===e.getDoc(),y=l.duplicate(),y.collapse(!0),d=-1*y.move("character",m),y.collapsed||(y=l.duplicate(),y.collapse(!1),f=-1*y.move("character",m)-d);for(t=s.firstChild,b=s.nodeName.toLowerCase();t;)if((3===t.nodeType||1==t.nodeType&&!a[t.nodeName])&&o.isValidChild(b,C.toLowerCase())){if(3===t.nodeType&&0===t.nodeValue.length){h=t,t=t.nextSibling,r.remove(h);continue}p||(p=r.create(C),t.parentNode.insertBefore(p,t),g=!0),h=t,t=t.nextSibling,p.appendChild(h)}else p=null,t=t.nextSibling;if(g&&v){if(l.setStart)l.setStart(c,d),l.setEnd(u,f),i.setRng(l);else try{l=e.getDoc().body.createTextRange(),l.moveToElementText(s),l.collapse(!0),l.moveStart("character",d),f>0&&l.moveEnd("character",f),l.select()}catch(x){}e.nodeChanged()}}}var n=e.settings,r=e.dom,i=e.selection,o=e.schema,a=o.getBlockElements();n.forced_root_block&&e.on("KeyUp NodeChange",t)}}),r(D,[N,m,f],function(e,n,r){var i=r.each,o=r.extend,a=r.map,s=r.inArray,l=r.explode,c=n.gecko,d=n.ie,u=!0,f=!1;return function(n){function r(e,t,n){var r;return e=e.toLowerCase(),(r=_.exec[e])?(r(e,t,n),u):f}function p(e){var t;return e=e.toLowerCase(),(t=_.state[e])?t(e):-1}function h(e){var t;return e=e.toLowerCase(),(t=_.value[e])?t(e):f}function m(e,t){t=t||"exec",i(e,function(e,n){i(n.toLowerCase().split(","),function(n){_[t][n]=e})})}function g(e,r,i){return r===t&&(r=f),i===t&&(i=null),n.getDoc().execCommand(e,r,i)}function v(e){return E.match(e)}function y(e,r){E.toggle(e,r?{value:r}:t),n.nodeChanged()}function b(e){k=w.getBookmark(e)}function C(){w.moveToBookmark(k)}var x=n.dom,w=n.selection,_={state:{},exec:{},value:{}},N=n.settings,E=n.formatter,k;o(this,{execCommand:r,queryCommandState:p,queryCommandValue:h,addCommands:m}),m({"mceResetDesignMode,mceBeginUndoLevel":function(){},"mceEndUndoLevel,mceAddUndoLevel":function(){n.undoManager.add()},"Cut,Copy,Paste":function(e){var t=n.getDoc(),r;try{g(e)}catch(i){r=u}(r||!t.queryCommandSupported(e))&&n.windowManager.alert("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.")},unlink:function(e){w.isCollapsed()&&w.select(w.getNode()),g(e),w.collapse(f)},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull":function(e){var t=e.substring(7);"full"==t&&(t="justify"),i("left,center,right,justify".split(","),function(e){t!=e&&E.remove("align"+e)}),y("align"+t),r("mceRepaint")},"InsertUnorderedList,InsertOrderedList":function(e){var t,n;g(e),t=x.getParent(w.getNode(),"ol,ul"),t&&(n=t.parentNode,/^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName)&&(b(),x.split(n,t),C()))},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){y(e)},"ForeColor,HiliteColor,FontName":function(e,t,n){y(e,n)},FontSize:function(e,t,n){var r,i;n>=1&&7>=n&&(i=l(N.font_size_style_values),r=l(N.font_size_classes),n=r?r[n-1]||n:i[n-1]||n),y(e,n)},RemoveFormat:function(e){E.remove(e)},mceBlockQuote:function(){y("blockquote")},FormatBlock:function(e,t,n){return y(n||"p")},mceCleanup:function(){var e=w.getBookmark();n.setContent(n.getContent({cleanup:u}),{cleanup:u}),w.moveToBookmark(e)},mceRemoveNode:function(e,t,r){var i=r||w.getNode();i!=n.getBody()&&(b(),n.dom.remove(i,u),C())},mceSelectNodeDepth:function(e,t,r){var i=0;x.getParent(w.getNode(),function(e){return 1==e.nodeType&&i++==r?(w.select(e),f):void 0},n.getBody())},mceSelectNode:function(e,t,n){w.select(n)},mceInsertContent:function(t,r,i){function o(e){function t(e){return r[e]&&3==r[e].nodeType}var n,r,i;return n=w.getRng(!0),r=n.startContainer,i=n.startOffset,3==r.nodeType&&(i>0?e=e.replace(/^&nbsp;/," "):t("previousSibling")||(e=e.replace(/^ /,"&nbsp;")),i<r.length?e=e.replace(/&nbsp;(<br>|)$/," "):t("nextSibling")||(e=e.replace(/(&nbsp;| )(<br>|)$/,"&nbsp;"))),e}var a,s,l,c,u,f,p,h,m,g,v,y,b,C;if(/^ | $/.test(i)&&(i=o(i)),a=n.parser,s=new e({},n.schema),b='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>',f={content:i,format:"html",selection:!0},n.fire("BeforeSetContent",f),i=f.content,-1==i.indexOf("{$caret}")&&(i+="{$caret}"),i=i.replace(/\{\$caret\}/,b),w.isCollapsed()||n.getDoc().execCommand("Delete",!1,null),l=w.getNode(),f={context:l.nodeName.toLowerCase()},u=a.parse(i,f),v=u.lastChild,"mce_marker"==v.attr("id"))for(p=v,v=v.prev;v;v=v.walk(!0))if(3==v.type||!x.isBlock(v.name)){v.parent.insert(p,v,"br"===v.name);break}if(f.invalid){for(w.setContent(b),l=w.getNode(),c=n.getBody(),9==l.nodeType?l=v=c:v=l;v!==c;)l=v,v=v.parentNode;i=l==c?c.innerHTML:x.getOuterHTML(l),i=s.serialize(a.parse(i.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,function(){return s.serialize(u)}))),l==c?x.setHTML(c,i):x.setOuterHTML(l,i)}else i=s.serialize(u),v=l.firstChild,y=l.lastChild,!v||v===y&&"BR"===v.nodeName?x.setHTML(l,i):w.setContent(i);p=x.get("mce_marker"),h=x.getRect(p),m=x.getViewPort(n.getWin()),(h.y+h.h>m.y+m.h||h.y<m.y||h.x>m.x+m.w||h.x<m.x)&&(C=d?n.getDoc().documentElement:n.getBody(),C.scrollLeft=h.x,C.scrollTop=h.y-m.h+25),g=x.createRng(),v=p.previousSibling,v&&3==v.nodeType?(g.setStart(v,v.nodeValue.length),d||(y=p.nextSibling,y&&3==y.nodeType&&(v.appendData(y.data),y.parentNode.removeChild(y)))):(g.setStartBefore(p),g.setEndBefore(p)),x.remove(p),w.setRng(g),n.fire("SetContent",f),n.addVisual()},mceInsertRawHTML:function(e,t,r){w.setContent("tiny_mce_marker"),n.setContent(n.getContent().replace(/tiny_mce_marker/g,function(){return r}))},mceToggleFormat:function(e,t,n){y(n)},mceSetContent:function(e,t,r){n.setContent(r)},"Indent,Outdent":function(e){var t,n,r;t=N.indentation,n=/[a-z%]+$/i.exec(t),t=parseInt(t,10),p("InsertUnorderedList")||p("InsertOrderedList")?g(e):(N.forced_root_block||x.getParent(w.getNode(),x.isBlock)||E.apply("div"),i(w.getSelectedBlocks(),function(i){var o;"LI"!=i.nodeName&&(o="rtl"==x.getStyle(i,"direction",!0)?"paddingRight":"paddingLeft","outdent"==e?(r=Math.max(0,parseInt(i.style[o]||0,10)-t),x.setStyle(i,o,r?r+n:"")):(r=parseInt(i.style[o]||0,10)+t+n,x.setStyle(i,o,r)))}))},mceRepaint:function(){if(c)try{b(u),w.getSel()&&w.getSel().selectAllChildren(n.getBody()),w.collapse(u),C()}catch(e){}},InsertHorizontalRule:function(){n.execCommand("mceInsertContent",!1,"<hr />")},mceToggleVisualAid:function(){n.hasVisual=!n.hasVisual,n.addVisual()},mceReplaceContent:function(e,t,r){n.execCommand("mceInsertContent",!1,r.replace(/\{\$selection\}/g,w.getContent({format:"text"})))},mceInsertLink:function(e,t,n){var r;"string"==typeof n&&(n={href:n}),r=x.getParent(w.getNode(),"a"),n.href=n.href.replace(" ","%20"),r&&n.href||E.remove("link"),n.href&&E.apply("link",n,r)},selectAll:function(){var e=x.getRoot(),t=x.createRng();w.getRng().setStart?(t.setStart(e,0),t.setEnd(e,e.childNodes.length),w.setRng(t)):g("SelectAll")},mceNewDocument:function(){n.setContent("")}}),m({"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull":function(e){var t="align"+e.substring(7),n=w.isCollapsed()?[x.getParent(w.getNode(),x.isBlock)]:w.getSelectedBlocks(),r=a(n,function(e){return!!E.matchNode(e,t)});return-1!==s(r,u)},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){return v(e)},mceBlockQuote:function(){return v("blockquote")},Outdent:function(){var e;if(N.inline_styles){if((e=x.getParent(w.getStart(),x.isBlock))&&parseInt(e.style.paddingLeft,10)>0)return u;if((e=x.getParent(w.getEnd(),x.isBlock))&&parseInt(e.style.paddingLeft,10)>0)return u}return p("InsertUnorderedList")||p("InsertOrderedList")||!N.inline_styles&&!!x.getParent(w.getNode(),"BLOCKQUOTE")},"InsertUnorderedList,InsertOrderedList":function(e){var t=x.getParent(w.getNode(),"ul,ol");return t&&("insertunorderedlist"===e&&"UL"===t.tagName||"insertorderedlist"===e&&"OL"===t.tagName)}},"state"),m({"FontSize,FontName":function(e){var t=0,n;
return(n=x.getParent(w.getNode(),"span"))&&(t="fontsize"==e?n.style.fontSize:n.style.fontFamily.replace(/, /g,",").replace(/[\'\"]/g,"").toLowerCase()),t}},"value"),m({Undo:function(){n.undoManager.undo()},Redo:function(){n.undoManager.redo()}})}}),r(P,[f],function(e){function t(e,i){var o=this,a,s;return e=r(e),i=o.settings=i||{},/^([\w\-]+):([^\/]{2})/i.test(e)||/^\s*#/.test(e)?(o.source=e,void 0):(0===e.indexOf("/")&&0!==e.indexOf("//")&&(e=(i.base_uri?i.base_uri.protocol||"http":"http")+"://mce_host"+e),/^[\w\-]*:?\/\//.test(e)||(s=i.base_uri?i.base_uri.path:new t(location.href).directory,e=(i.base_uri&&i.base_uri.protocol||"http")+"://mce_host"+o.toAbsPath(s,e)),e=e.replace(/@@/g,"(mce_at)"),e=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e),n(["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],function(t,n){var r=e[n];r&&(r=r.replace(/\(mce_at\)/g,"@@")),o[t]=r}),a=i.base_uri,a&&(o.protocol||(o.protocol=a.protocol),o.userInfo||(o.userInfo=a.userInfo),o.port||"mce_host"!==o.host||(o.port=a.port),o.host&&"mce_host"!==o.host||(o.host=a.host),o.source=""),void 0)}var n=e.each,r=e.trim;return t.prototype={setPath:function(e){var t=this;e=/^(.*?)\/?(\w+)?$/.exec(e),t.path=e[0],t.directory=e[1],t.file=e[2],t.source="",t.getURI()},toRelative:function(e){var n=this,r;if("./"===e)return e;if(e=new t(e,{base_uri:n}),"mce_host"!=e.host&&n.host!=e.host&&e.host||n.port!=e.port||n.protocol!=e.protocol)return e.getURI();var i=n.getURI(),o=e.getURI();return i==o||"/"==i.charAt(i.length-1)&&i.substr(0,i.length-1)==o?i:(r=n.toRelPath(n.path,e.path),e.query&&(r+="?"+e.query),e.anchor&&(r+="#"+e.anchor),r)},toAbsolute:function(e,n){return e=new t(e,{base_uri:this}),e.getURI(this.host==e.host&&this.protocol==e.protocol?n:0)},toRelPath:function(e,t){var n,r=0,i="",o,a;if(e=e.substring(0,e.lastIndexOf("/")),e=e.split("/"),n=t.split("/"),e.length>=n.length)for(o=0,a=e.length;a>o;o++)if(o>=n.length||e[o]!=n[o]){r=o+1;break}if(e.length<n.length)for(o=0,a=n.length;a>o;o++)if(o>=e.length||e[o]!=n[o]){r=o+1;break}if(1===r)return t;for(o=0,a=e.length-(r-1);a>o;o++)i+="../";for(o=r-1,a=n.length;a>o;o++)i+=o!=r-1?"/"+n[o]:n[o];return i},toAbsPath:function(e,t){var r,i=0,o=[],a,s;for(a=/\/$/.test(t)?"/":"",e=e.split("/"),t=t.split("/"),n(e,function(e){e&&o.push(e)}),e=o,r=t.length-1,o=[];r>=0;r--)0!==t[r].length&&"."!==t[r]&&(".."!==t[r]?i>0?i--:o.push(t[r]):i++);return r=e.length-i,s=0>=r?o.reverse().join("/"):e.slice(0,r).join("/")+"/"+o.reverse().join("/"),0!==s.indexOf("/")&&(s="/"+s),a&&s.lastIndexOf("/")!==s.length-1&&(s+=a),s},getURI:function(e){var t,n=this;return(!n.source||e)&&(t="",e||(n.protocol&&(t+=n.protocol+"://"),n.userInfo&&(t+=n.userInfo+"@"),n.host&&(t+=n.host),n.port&&(t+=":"+n.port)),n.path&&(t+=n.path),n.query&&(t+="?"+n.query),n.anchor&&(t+="#"+n.anchor),n.source=t),n.source}},t}),r(O,[f],function(e){function t(){}var n=e.each,r=e.extend,i,o;return t.extend=i=function(e){function t(){var e,t,n,r;if(!o&&(r=this,r.init&&r.init.apply(r,arguments),t=r.Mixins))for(e=t.length;e--;)n=t[e],n.init&&n.init.apply(r,arguments)}function a(){return this}function s(e,t){return function(){var n=this,r=n._super,i;return n._super=c[e],i=t.apply(n,arguments),n._super=r,i}}var l=this,c=l.prototype,d,u,f;o=!0,d=new l,o=!1,e.Mixins&&(n(e.Mixins,function(t){t=t;for(var n in t)"init"!==n&&(e[n]=t[n])}),c.Mixins&&(e.Mixins=c.Mixins.concat(e.Mixins))),e.Methods&&n(e.Methods.split(","),function(t){e[t]=a}),e.Properties&&n(e.Properties.split(","),function(t){var n="_"+t;e[t]=function(e){var t=this,r;return e!==r?(t[n]=e,t):t[n]}}),e.Statics&&n(e.Statics,function(e,n){t[n]=e}),e.Defaults&&c.Defaults&&(e.Defaults=r({},c.Defaults,e.Defaults));for(u in e)f=e[u],d[u]="function"==typeof f&&c[u]?s(u,f):f;return t.prototype=d,t.constructor=t,t.extend=i,t},t}),r(I,[O,f],function(e,t){function n(e){for(var t=[],n=e.length,r;n--;)r=e[n],r.__checked||(t.push(r),r.__checked=1);for(n=t.length;n--;)delete t[n].__checked;return t}var r=/^([\w\\*]+)?(?:#([\w\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i,i=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,o=/^\s*|\s*$/g,a,s=e.extend({init:function(e){function t(e){return e?(e=e.toLowerCase(),function(t){return"*"===e||t.type===e}):void 0}function n(e){return e?function(t){return t._name===e}:void 0}function a(e){return e?(e=e.split("."),function(t){for(var n=e.length;n--;)if(!t.hasClass(e[n]))return!1;return!0}):void 0}function s(e,t,n){return e?function(r){var i=r[e]?r[e]():"";return t?"="===t?i===n:"*="===t?i.indexOf(n)>=0:"~="===t?(" "+i+" ").indexOf(" "+n+" ")>=0:"!="===t?i!=n:"^="===t?0===i.indexOf(n):"$="===t?i.substr(i.length-n.length)===n:!1:!!n}:void 0}function l(e){var t;return e?(e=/(?:not\((.+)\))|(.+)/i.exec(e),e[1]?(t=d(e[1],[]),function(e){return!u(e,t)}):(e=e[2],function(t,n,r){return"first"===e?0===n:"last"===e?n===r-1:"even"===e?0===n%2:"odd"===e?1===n%2:t[e]?t[e]():!1})):void 0}function c(e,i,c){function d(e){e&&i.push(e)}var u;return u=r.exec(e.replace(o,"")),d(t(u[1])),d(n(u[2])),d(a(u[3])),d(s(u[4],u[5],u[6])),d(l(u[7])),i.psuedo=!!u[7],i.direct=c,i}function d(e,t){var n=[],r,o,a;do if(i.exec(""),o=i.exec(e),o&&(e=o[3],n.push(o[1]),o[2])){r=o[3];break}while(o);for(r&&d(r,t),e=[],a=0;a<n.length;a++)">"!=n[a]&&e.push(c(n[a],[],">"===n[a-1]));return t.push(e),t}var u=this.match;this._selectors=d(e,[])},match:function(e,n){var r,i,o,a,s,l,c,d,u,f,p,h,m;for(n=n||this._selectors,r=0,i=n.length;i>r;r++){for(s=n[r],a=s.length,m=e,h=0,o=a-1;o>=0;o--)for(d=s[o];m;){for(d.psuedo&&(p=m.parent().items(),u=t.inArray(m,p),f=p.length),l=0,c=d.length;c>l;l++)if(!d[l](m,u,f)){l=c+1;break}if(l===c){h++;break}if(o===a-1)break;m=m.parent()}if(h===a)return!0}return!1},find:function(e){function t(e,n,i){var o,a,s,l,c,d=n[i];for(o=0,a=e.length;a>o;o++){for(c=e[o],s=0,l=d.length;l>s;s++)if(!d[s](c,o,a)){s=l+1;break}if(s===l)i==n.length-1?r.push(c):c.items&&t(c.items(),n,i+1);else if(d.direct)return;c.items&&t(c.items(),n,i)}}var r=[],i,o,l=this._selectors;if(e.items){for(i=0,o=l.length;o>i;i++)t(e.items(),l[i],0);o>1&&(r=n(r))}return a||(a=s.Collection),new a(r)}});return s}),r(F,[f,I,O],function(e,t,n){var r,i,o=Array.prototype.push,a=Array.prototype.slice;return i={length:0,init:function(e){e&&this.add(e)},add:function(t){var n=this;return e.isArray(t)?o.apply(n,t):t instanceof r?n.add(t.toArray()):o.call(n,t),n},set:function(e){var t=this,n=t.length,r;for(t.length=0,t.add(e),r=t.length;n>r;r++)delete t[r];return t},filter:function(e){var n=this,i,o,a=[],s,l;for("string"==typeof e?(e=new t(e),l=function(t){return e.match(t)}):l=e,i=0,o=n.length;o>i;i++)s=n[i],l(s)&&a.push(s);return new r(a)},slice:function(){return new r(a.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},each:function(t){return e.each(this,t),this},toArray:function(){return e.toArray(this)},indexOf:function(e){for(var t=this,n=t.length;n--&&t[n]!==e;);return n},reverse:function(){return new r(e.toArray(this).reverse())},hasClass:function(e){return this[0]?this[0].hasClass(e):!1},prop:function(e,t){var n=this,r,i;return t!==r?(n.each(function(n){n[e]&&n[e](t)}),n):(i=n[0],i&&i[e]?i[e]():void 0)},exec:function(t){var n=this,r=e.toArray(arguments).slice(1);return n.each(function(e){e[t]&&e[t].apply(e,r)}),n}},e.each("fire on off show hide addClass removeClass append prepend before after reflow".split(" "),function(t){i[t]=function(){var n=e.toArray(arguments);return this.each(function(e){t in e&&e[t].apply(e,n)}),this}}),e.each("text name disabled active selected checked visible parent value data".split(" "),function(e){i[e]=function(t){return this.prop(e,t)}}),r=n.extend(i),t.Collection=r,r}),r(W,[f,g],function(e,t){return{id:function(){return t.DOM.uniqueId()},createFragment:function(e){return t.DOM.createFragment(e)},getWindowSize:function(){return t.DOM.getViewPort()},getSize:function(e){return t.DOM.getSize(e)},getPos:function(e,n){return t.DOM.getPos(e,n)},getViewPort:function(e){return t.DOM.getViewPort(e)},get:function(e){return document.getElementById(e)},addClass:function(e,n){return t.DOM.addClass(e,n)},removeClass:function(e,n){return t.DOM.removeClass(e,n)},hasClass:function(e,n){return t.DOM.hasClass(e,n)},toggleClass:function(e,n,r){return t.DOM.toggleClass(e,n,r)},css:function(e,n,r){return t.DOM.setStyle(e,n,r)},on:function(e,n,r,i){return t.DOM.bind(e,n,r,i)},off:function(e,n,r){return t.DOM.unbind(e,n,r)},fire:function(e,n,r){return t.DOM.fire(e,n,r)}}}),r(z,[O,f,F,W],function(e,t,n,r){var i=t.makeMap("focusin focusout scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave wheel keydown keypress keyup contextmenu"," "),o={},a="onmousewheel"in document,s=!1,l=e.extend({Statics:{controlIdLookup:{}},classPrefix:"mce-",init:function(e){var n=this,i,o;if(n.settings=e=t.extend({},n.Defaults,e),n._id=r.id(),n._text=n._name="",n._width=n._height=0,n._aria={role:e.role},i=e.classes)for(i=i.split(" "),i.map={},o=i.length;o--;)i.map[i[o]]=!0;n._classes=i||[],n.visible(!0),t.each("title text width height name classes visible disabled active value".split(" "),function(t){var r=e[t],i;r!==i?n[t](r):n["_"+t]===i&&(n["_"+t]=!1)}),n.on("click",function(){return n.disabled()?!1:void 0}),e.classes&&t.each(e.classes.split(" "),function(e){n.addClass(e)}),n.settings=e,n._borderBox=n.parseBox(e.border),n._paddingBox=n.parseBox(e.padding),n._marginBox=n.parseBox(e.margin),e.hidden&&n.hide()},Properties:"parent,title,text,width,height,disabled,active,name,value",Methods:"renderHtml",getContainerElm:function(){return document.body},getParentCtrl:function(e){for(var t;e&&!(t=l.controlIdLookup[e.id]);)e=e.parentNode;return t},parseBox:function(e){var t,n=10;if(e)return"number"==typeof e?(e=e||0,{top:e,left:e,bottom:e,right:e}):(e=e.split(" "),t=e.length,1===t?e[1]=e[2]=e[3]=e[0]:2===t?(e[2]=e[0],e[3]=e[1]):3===t&&(e[3]=e[1]),{top:parseInt(e[0],n)||0,right:parseInt(e[1],n)||0,bottom:parseInt(e[2],n)||0,left:parseInt(e[3],n)||0})},borderBox:function(){return this._borderBox},paddingBox:function(){return this._paddingBox},marginBox:function(){return this._marginBox},measureBox:function(e,t){function n(t){var n=document.defaultView;return n?(t=t.replace(/[A-Z]/g,function(e){return"-"+e}),n.getComputedStyle(e,null).getPropertyValue(t)):e.currentStyle[t]}function r(e){var t=parseInt(n(e),10);return isNaN(t)?0:t}return{top:r(t+"TopWidth"),right:r(t+"RightWidth"),bottom:r(t+"BottomWidth"),left:r(t+"LeftWidth")}},initLayoutRect:function(){var e=this,t=e.settings,n,r,i=e.getEl(),o,a,s,l,c,d,u;n=e._borderBox=e._borderBox||e.measureBox(i,"border"),e._paddingBox=e._paddingBox||e.measureBox(i,"padding"),e._marginBox=e._marginBox||e.measureBox(i,"margin"),d=t.minWidth,u=t.minHeight,s=d||i.offsetWidth,l=u||i.offsetHeight,o=t.width,a=t.height,c=t.autoResize,c="undefined"!=typeof c?c:!o&&!a,o=o||s,a=a||l;var f=n.left+n.right,p=n.top+n.bottom,h=t.maxWidth||65535,m=t.maxHeight||65535;return e._layoutRect=r={x:t.x||0,y:t.y||0,w:o,h:a,deltaW:f,deltaH:p,contentW:o-f,contentH:a-p,innerW:o-f,innerH:a-p,startMinWidth:d||0,startMinHeight:u||0,minW:Math.min(s,h),minH:Math.min(l,m),maxW:h,maxH:m,autoResize:c,scrollW:0},e._lastLayoutRect={},r},layoutRect:function(e){var t=this,n=t._layoutRect,r,i,o,a,s,c;return n||(n=t.initLayoutRect()),e?(o=n.deltaW,a=n.deltaH,e.x!==s&&(n.x=e.x),e.y!==s&&(n.y=e.y),e.minW!==s&&(n.minW=e.minW),e.minH!==s&&(n.minH=e.minH),i=e.w,i!==s&&(i=i<n.minW?n.minW:i,i=i>n.maxW?n.maxW:i,n.w=i,n.innerW=i-o),i=e.h,i!==s&&(i=i<n.minH?n.minH:i,i=i>n.maxH?n.maxH:i,n.h=i,n.innerH=i-a),i=e.innerW,i!==s&&(i=i<n.minW-o?n.minW-o:i,i=i>n.maxW-o?n.maxW-o:i,n.innerW=i,n.w=i+o),i=e.innerH,i!==s&&(i=i<n.minH-a?n.minH-a:i,i=i>n.maxH-a?n.maxH-a:i,n.innerH=i,n.h=i+a),e.contentW!==s&&(n.contentW=e.contentW),e.contentH!==s&&(n.contentH=e.contentH),r=t._lastLayoutRect,(r.x!==n.x||r.y!==n.y||r.w!==n.w||r.h!==n.h)&&(c=l.repaintControls,c&&c.map&&!c.map[t._id]&&(c.push(t),c.map[t._id]=!0),r.x=n.x,r.y=n.y,r.w=n.w,r.h=n.h),t):n},repaint:function(){var e=this,t,n,r,i,o=0,a=0,s;t=e.getEl().style,r=e._layoutRect,s=e._lastRepaintRect||{},i=e._borderBox,o=i.left+i.right,a=i.top+i.bottom,r.x!==s.x&&(t.left=r.x+"px",s.x=r.x),r.y!==s.y&&(t.top=r.y+"px",s.y=r.y),r.w!==s.w&&(t.width=r.w-o+"px",s.w=r.w),r.h!==s.h&&(t.height=r.h-a+"px",s.h=r.h),e._hasBody&&r.innerW!==s.innerW&&(n=e.getEl("body").style,n.width=r.innerW+"px",s.innerW=r.innerW),e._hasBody&&r.innerH!==s.innerH&&(n=n||e.getEl("body").style,n.height=r.innerH+"px",s.innerH=r.innerH),e._lastRepaintRect=s,e.fire("repaint",{},!1)},on:function(e,t){function n(e){var t,n;return function(i){return t||r.parents().each(function(r){var i=r.settings.callbacks;return i&&(t=i[e])?(n=r,!1):void 0}),t.call(n,i)}}var r=this,o,a,s,l;if(t)for("string"==typeof t&&(t=n(t)),s=e.toLowerCase().split(" "),l=s.length;l--;)e=s[l],o=r._bindings,o||(o=r._bindings={}),a=o[e],a||(a=o[e]=[]),a.push(t),i[e]&&(r._nativeEvents?r._nativeEvents[e]=!0:r._nativeEvents={name:!0},r._rendered&&r.bindPendingEvents());return r},off:function(e,t){var n=this,r,i=n._bindings,o,a,s,l;if(i)if(e)for(s=e.toLowerCase().split(" "),r=s.length;r--;){if(e=s[r],o=i[e],!e){for(a in i)i[a].length=0;return n}if(o)if(t)for(l=o.length;l--;)o[l]===t&&o.splice(l,1);else o.length=0}else n._bindings=[];return n},fire:function(e,t,n){function r(){return!1}function i(){return!0}var o=this,a,s,l,c;if(e=e.toLowerCase(),t=t||{},t.type||(t.type=e),t.control||(t.control=o),t.preventDefault||(t.preventDefault=function(){t.isDefaultPrevented=i},t.stopPropagation=function(){t.isPropagationStopped=i},t.stopImmediatePropagation=function(){t.isImmediatePropagationStopped=i},t.isDefaultPrevented=r,t.isPropagationStopped=r,t.isImmediatePropagationStopped=r),o._bindings&&(l=o._bindings[e]))for(a=0,s=l.length;s>a&&(t.isImmediatePropagationStopped()||l[a].call(o,t)!==!1);a++);if(n!==!1)for(c=o.parent();c&&!t.isPropagationStopped();)c.fire(e,t,!1),c=c.parent();return t},parents:function(e){var t=this,r=new n;for(t=t.parent();t;t=t.parent())r.add(t);return e&&(r=r.filter(e)),r},next:function(){var e=this.parent().items();return e[e.indexOf(this)+1]},prev:function(){var e=this.parent().items();return e[e.indexOf(this)-1]},findCommonAncestor:function(e,t){for(var n;e;){for(n=t;n&&e!=n;)n=n.parent();if(e==n)break;e=e.parent()}return e},hasClass:function(e,t){var n=this._classes[t||"control"];return e=this.classPrefix+e,n&&!!n.map[e]},addClass:function(e,t){var n=this,r,i;return e=this.classPrefix+e,r=n._classes[t||"control"],r||(r=[],r.map={},n._classes[t||"control"]=r),r.map[e]||(r.map[e]=e,r.push(e),n._rendered&&(i=n.getEl(t),i&&(i.className=r.join(" ")))),n},removeClass:function(e,t){var n=this,r,i,o;if(e=this.classPrefix+e,r=n._classes[t||"control"],r&&r.map[e])for(delete r.map[e],i=r.length;i--;)r[i]===e&&r.splice(i,1);return n._rendered&&(o=n.getEl(t),o&&(o.className=r.join(" "))),n},toggleClass:function(e,t,n){var r=this;return t?r.addClass(e,n):r.removeClass(e,n),r},classes:function(e){var t=this._classes[e||"control"];return t?t.join(" "):""},getEl:function(e,t){var n,i=e?this._id+"-"+e:this._id;return n=o[i]=(t===!0?null:o[i])||r.get(i)},visible:function(e){var t=this,n;return"undefined"!=typeof e?(t._visible!==e&&(t._rendered&&(t.getEl().style.display=e?"":"none"),t._visible=e,n=t.parent(),n&&(n._lastRect=null),t.fire(e?"show":"hide")),t):t._visible},show:function(){return this.visible(!0)},hide:function(){return this.visible(!1)},focus:function(){try{this.getEl().focus()}catch(e){}return this},blur:function(){return this.getEl().blur(),this},aria:function(e,t){var n=this,r=n.getEl();return"undefined"==typeof t?n._aria[e]:(n._aria[e]=t,n._rendered&&("label"==e&&r.setAttribute("aria-labeledby",n._id),r.setAttribute("role"==e?e:"aria-"+e,t)),n)},encode:function(e,t){return t!==!1&&l.translate&&(e=l.translate(e)),(e||"").replace(/[&<>"]/g,function(e){return"&#"+e.charCodeAt(0)+";"})},before:function(e){var t=this,n=t.parent();return n&&n.insert(e,n.items().indexOf(t),!0),t},after:function(e){var t=this,n=t.parent();return n&&n.insert(e,n.items().indexOf(t)),t},remove:function(){var e=this,t=e.getEl(),n=e.parent(),i;if(e.items)for(var o=e.items().toArray(),a=o.length;a--;)o[a].remove();return n&&n.items&&(i=[],n.items().each(function(t){t!==e&&i.push(t)}),n.items().set(i),n._lastRect=null),e._eventsRoot&&e._eventsRoot==e&&r.off(t),delete l.controlIdLookup[e._id],t.parentNode&&t.parentNode.removeChild(t),e},renderBefore:function(e){var t=this;return e.parentNode.insertBefore(r.createFragment(t.renderHtml()),e),t.postRender(),t},renderTo:function(e){var t=this;return e=e||t.getContainerElm(),e.appendChild(r.createFragment(t.renderHtml())),t.postRender(),t},postRender:function(){var e=this,t=e.settings,n,i,o,a,s;for(a in t)0===a.indexOf("on")&&e.on(a.substr(2),t[a]);if(e._eventsRoot){for(o=e.parent();!s&&o;o=o.parent())s=o._eventsRoot;if(s)for(a in s._nativeEvents)e._nativeEvents[a]=!0}e.bindPendingEvents(),t.style&&(n=e.getEl(),n&&(n.setAttribute("style",t.style),n.style.cssText=t.style)),e._visible||r.css(e.getEl(),"display","none"),e.settings.border&&(i=e.borderBox(),r.css(e.getEl(),{"border-top-width":i.top,"border-right-width":i.right,"border-bottom-width":i.bottom,"border-left-width":i.left})),l.controlIdLookup[e._id]=e;for(var c in e._aria)e.aria(c,e._aria[c]);e.fire("postrender",{},!1)},scrollIntoView:function(e){function t(e,t){var n,r,i=e;for(n=r=0;i&&i!=t&&i.nodeType;)n+=i.offsetLeft||0,r+=i.offsetTop||0,i=i.offsetParent;return{x:n,y:r}}var n=this.getEl(),r=n.parentNode,i,o,a,s,l,c,d=t(n,r);return i=d.x,o=d.y,a=n.offsetWidth,s=n.offsetHeight,l=r.clientWidth,c=r.clientHeight,"end"==e?(i-=l-a,o-=c-s):"center"==e&&(i-=l/2-a/2,o-=c/2-s/2),r.scrollLeft=i,r.scrollTop=o,this},bindPendingEvents:function(){function e(e){var t=o.getParentCtrl(e.target);t&&t.fire(e.type,e)}function t(){var e=u._lastHoverCtrl;e&&(e.fire("mouseleave",{target:e.getEl()}),e.parents().each(function(e){e.fire("mouseleave",{target:e.getEl()})}),u._lastHoverCtrl=null)}function n(e){var t=o.getParentCtrl(e.target),n=u._lastHoverCtrl,r=0,i,a,s;if(t!==n){if(u._lastHoverCtrl=t,a=t.parents().toArray().reverse(),a.push(t),n){for(s=n.parents().toArray().reverse(),s.push(n),r=0;r<s.length&&a[r]===s[r];r++);for(i=s.length-1;i>=r;i--)n=s[i],n.fire("mouseleave",{target:n.getEl()})}for(i=r;i<a.length;i++)t=a[i],t.fire("mouseenter",{target:t.getEl()})}}function i(e){e.preventDefault(),"mousewheel"==e.type?(e.deltaY=-1/40*e.wheelDelta,e.wheelDeltaX&&(e.deltaX=-1/40*e.wheelDeltaX)):(e.deltaX=0,e.deltaY=e.detail),e=o.fire("wheel",e)}var o=this,l,c,d,u,f,p;if(o._rendered=!0,f=o._nativeEvents){for(d=o.parents().toArray(),d.unshift(o),l=0,c=d.length;!u&&c>l;l++)u=d[l]._eventsRoot;for(u||(u=d[d.length-1]||o),o._eventsRoot=u,c=l,l=0;c>l;l++)d[l]._eventsRoot=u;for(p in f){if(!f)return!1;"wheel"!==p||s?("mouseenter"===p||"mouseleave"===p?u._hasMouseEnter||(r.on(u.getEl(),"mouseleave",t),r.on(u.getEl(),"mouseover",n),u._hasMouseEnter=1):u[p]||(r.on(u.getEl(),p,e),u[p]=!0),f[p]=!1):a?r.on(o.getEl(),"mousewheel",i):r.on(o.getEl(),"DOMMouseScroll",i)}}},reflow:function(){return this.repaint(),this}});return l}),r(V,[],function(){var e={},t;return{add:function(t,n){e[t.toLowerCase()]=n},has:function(t){return!!e[t.toLowerCase()]},create:function(n,r){var i,o,a;if(!t){a=tinymce.ui;for(o in a)e[o.toLowerCase()]=a[o];t=!0}if("string"==typeof n?(r=r||{},r.type=n):(r=n,n=r.type),n=n.toLowerCase(),i=e[n],!i)throw new Error("Could not find control by type: "+n);return i=new i(r),i.type=n,i}}}),r(U,[z,F,I,V,f,W],function(e,t,n,r,i,o){var a={};return e.extend({layout:"",innerClass:"container-inner",init:function(e){var n=this;n._super(e),e=n.settings,n._fixed=e.fixed,n._items=new t,n.addClass("container"),n.addClass("container-body","body"),e.containerCls&&n.addClass(e.containerCls),n._layout=r.create((e.layout||n.layout)+"layout"),n.settings.items&&n.add(n.settings.items),n._hasBody=!0},items:function(){return this._items},find:function(e){return e=a[e]=a[e]||new n(e),e.find(this)},add:function(e){var t=this;return t.items().add(t.create(e)).parent(t),t},focus:function(){var e=this;return e.keyNav?e.keyNav.focusFirst():e._super(),e},replace:function(e,t){for(var n,r=this.items(),i=r.length;i--;)if(r[i]===e){r[i]=t;break}i>=0&&(n=t.getEl(),n&&n.parentNode.removeChild(n),n=e.getEl(),n&&n.parentNode.removeChild(n)),t.parent(this)},create:function(t){var n=this,o,a=[];return i.isArray(t)||(t=[t]),i.each(t,function(t){t&&(t instanceof e||("string"==typeof t&&(t={type:t}),o=i.extend({},n.settings.defaults,t),t.type=o.type=o.type||t.type||n.settings.defaultType||(o.defaults?o.defaults.type:null),t=r.create(o)),a.push(t))}),a},renderNew:function(){var e=this;return e.items().each(function(t,n){var r,i;t.parent(e),t._rendered||(r=e.getEl("body"),i=o.createFragment(t.renderHtml()),r.hasChildNodes()&&n<=r.childNodes.length-1?r.insertBefore(i,r.childNodes[n]):r.appendChild(i),t.postRender())}),e._layout.applyClasses(e),e._lastRect=null,e},append:function(e){return this.add(e).renderNew()},prepend:function(e){var t=this;return t.items().set(t.create(e).concat(t.items().toArray())),t.renderNew()},insert:function(e,t,n){var r=this,i,o,a;return e=r.create(e),i=r.items(),!n&&t<i.length-1&&(t+=1),t>=0&&t<i.length&&(o=i.slice(0,t).toArray(),a=i.slice(t).toArray(),i.set(o.concat(e,a))),r.renderNew()},fromJSON:function(e){var t=this;for(var n in e)t.find("#"+n).value(e[n]);return t},toJSON:function(){var e=this,t={};return e.find("*").each(function(e){var n=e.name(),r=e.value();n&&"undefined"!=typeof r&&(t[n]=r)}),t},preRender:function(){},renderHtml:function(){var e=this,t=e._layout;return e.preRender(),t.preRender(e),'<div id="'+e._id+'" class="'+e.classes()+'" role="'+this.settings.role+'">'+'<div id="'+e._id+'-body" class="'+e.classes("body")+'">'+(e.settings.html||"")+t.renderHtml(e)+"</div>"+"</div>"},postRender:function(){var e=this,t;return e.items().exec("postRender"),e._super(),e._layout.postRender(e),e._rendered=!0,e.settings.style&&o.css(e.getEl(),e.settings.style),e.settings.border&&(t=e.borderBox(),o.css(e.getEl(),{"border-top-width":t.top,"border-right-width":t.right,"border-bottom-width":t.bottom,"border-left-width":t.left})),e},initLayoutRect:function(){var e=this,t=e._super();return e._layout.recalc(e),t},recalc:function(){var e=this,t=e._layoutRect,n=e._lastRect;return n&&n.w==t.w&&n.h==t.h?void 0:(e._layout.recalc(e),t=e.layoutRect(),e._lastRect={x:t.x,y:t.y,w:t.w,h:t.h},!0)},reflow:function(){var t,n;if(this.visible()){for(e.repaintControls=[],e.repaintControls.map={},n=this.recalc(),t=e.repaintControls.length;t--;)e.repaintControls[t].repaint();"flow"!==this.settings.layout&&"stack"!==this.settings.layout&&this.repaint(),e.repaintControls=[]}return this}})}),r(q,[W],function(e){function t(){var e=document,t,n,r,i,o,a,s,l,c=Math.max;return t=e.documentElement,n=e.body,r=c(t.scrollWidth,n.scrollWidth),i=c(t.clientWidth,n.clientWidth),o=c(t.offsetWidth,n.offsetWidth),a=c(t.scrollHeight,n.scrollHeight),s=c(t.clientHeight,n.clientHeight),l=c(t.offsetHeight,n.offsetHeight),{width:o>r?i:r,height:l>a?s:a}}return function(n,r){function i(){return a.getElementById(r.handle||n)}var o,a=document,s,l,c,d,u,f;r=r||{},l=function(n){var l=t(),p,h;n.preventDefault(),s=n.button,p=i(),u=n.screenX,f=n.screenY,h=window.getComputedStyle?window.getComputedStyle(p,null).getPropertyValue("cursor"):p.runtimeStyle.cursor,o=a.createElement("div"),e.css(o,{position:"absolute",top:0,left:0,width:l.width,height:l.height,zIndex:2147483647,opacity:1e-4,background:"red",cursor:h}),a.body.appendChild(o),e.on(a,"mousemove",d),e.on(a,"mouseup",c),r.start(n)},d=function(e){return e.button!==s?c(e):(e.deltaX=e.screenX-u,e.deltaY=e.screenY-f,e.preventDefault(),r.drag(e),void 0)},c=function(t){e.off(a,"mousemove",d),e.off(a,"mouseup",c),o.parentNode.removeChild(o),r.stop&&r.stop(t)},this.destroy=function(){e.off(i())},e.on(i(),"mousedown",l)}}),r(j,[W,q],function(e,t){return{init:function(){var e=this;e.on("repaint",e.renderScroll)},renderScroll:function(){function n(){function t(t,a,s,l,c,d){var u,f,p,h,m,g,v,y,b;if(f=i.getEl("scroll"+t)){if(y=a.toLowerCase(),b=s.toLowerCase(),i.getEl("absend")&&e.css(i.getEl("absend"),y,i.layoutRect()[l]-1),!c)return e.css(f,"display","none"),void 0;e.css(f,"display","block"),u=i.getEl("body"),p=i.getEl("scroll"+t+"t"),h=u["client"+s]-2*o,h-=n&&r?f["client"+d]:0,m=u["scroll"+s],g=h/m,v={},v[y]=u["offset"+a]+o,v[b]=h,e.css(f,v),v={},v[y]=u["scroll"+a]*g,v[b]=h*g,e.css(p,v)}}var n,r,a;a=i.getEl("body"),n=a.scrollWidth>a.clientWidth,r=a.scrollHeight>a.clientHeight,t("h","Left","Width","contentW",n,"Height"),t("v","Top","Height","contentH",r,"Width")}function r(){function n(n,r,a,s,l){var c,d=i._id+"-scroll"+n,u=i.classPrefix;i.getEl().appendChild(e.createFragment('<div id="'+d+'" class="'+u+"scrollbar "+u+"scrollbar-"+n+'">'+'<div id="'+d+'t" class="'+u+'scrollbar-thumb"></div>'+"</div>")),i.draghelper=new t(d+"t",{start:function(){c=i.getEl("body")["scroll"+r],e.addClass(e.get(d),u+"active")},drag:function(e){var t,d,u,f,p=i.layoutRect();d=p.contentW>p.innerW,u=p.contentH>p.innerH,f=i.getEl("body")["client"+a]-2*o,f-=d&&u?i.getEl("scroll"+n)["client"+l]:0,t=f/i.getEl("body")["scroll"+a],i.getEl("body")["scroll"+r]=c+e["delta"+s]/t},stop:function(){e.removeClass(e.get(d),u+"active")}})}i.addClass("scroll"),n("v","Top","Height","Y","Width"),n("h","Left","Width","X","Height")}var i=this,o=2;i.settings.autoScroll&&(i._hasScroll||(i._hasScroll=!0,r(),i.on("wheel",function(e){var t=i.getEl("body");t.scrollLeft+=10*(e.deltaX||0),t.scrollTop+=10*e.deltaY,n()}),e.on(i.getEl("body"),"scroll",n)),n())}}}),r($,[U,j],function(e,t){return e.extend({Defaults:{layout:"fit",containerCls:"panel"},Mixins:[t],renderHtml:function(){var e=this,t=e._layout,n=e.settings.html;return e.preRender(),t.preRender(e),"undefined"==typeof n?n='<div id="'+e._id+'-body" class="'+e.classes("body")+'">'+t.renderHtml(e)+"</div>":("function"==typeof n&&(n=n.call(e)),e._hasBody=!1),'<div id="'+e._id+'" class="'+e.classes()+'" hideFocus="1" tabIndex="-1">'+(e._preBodyHtml||"")+n+"</div>"}})}),r(K,[W],function(e){function t(t,n,r){var i,o,a,s,l,c,d,u,f;return f=e.getViewPort(),o=e.getPos(n),a=o.x,s=o.y,t._fixed&&(a-=f.x,s-=f.y),i=t.getEl(),l=i.offsetWidth,c=i.offsetHeight,d=n.offsetWidth,u=n.offsetHeight,r=(r||"").split(""),"b"===r[0]&&(s+=u),"r"===r[1]&&(a+=d),"c"===r[0]&&(s+=Math.round(u/2)),"c"===r[1]&&(a+=Math.round(d/2)),"b"===r[3]&&(s-=c),"r"===r[4]&&(a-=l),"c"===r[3]&&(s-=Math.round(c/2)),"c"===r[4]&&(a-=Math.round(l/2)),{x:a,y:s,w:l,h:c}}return{testMoveRel:function(n,r){for(var i=e.getViewPort(),o=0;o<r.length;o++){var a=t(this,n,r[o]);if(this._fixed){if(a.x>0&&a.x+a.w<i.w&&a.y>0&&a.y+a.h<i.h)return r[o]}else if(a.x>i.x&&a.x+a.w<i.w+i.x&&a.y>i.y&&a.y+a.h<i.h+i.y)return r[o]}return r[0]},moveRel:function(e,n){"string"!=typeof n&&(n=this.testMoveRel(e,n));var r=t(this,e,n);return this.moveTo(r.x,r.y)},moveBy:function(e,t){var n=this,r=n.layoutRect();return n.moveTo(r.x+e,r.y+t),n},moveTo:function(t,n){function r(e,t,n){return 0>e?0:e+n>t?(e=t-n,0>e?0:e):e}var i=this;if(i.settings.constrainToViewport){var o=e.getViewPort(window),a=i.layoutRect();t=r(t,o.w+o.x,a.w),n=r(n,o.h+o.y,a.h)}return i._rendered?i.layoutRect({x:t,y:n}).repaint():(i.settings.x=t,i.settings.y=n),i.fire("move",{x:t,y:n}),i}}}),r(G,[W],function(e){return{resizeToContent:function(){this._layoutRect.autoResize=!0,this._lastRect=null,this.reflow()},resizeTo:function(t,n){if(1>=t||1>=n){var r=e.getWindowSize();t=1>=t?t*r.w:t,n=1>=n?n*r.h:n}return this._layoutRect.autoResize=!1,this.layoutRect({minW:t,minH:n,w:t,h:n}).reflow()},resizeBy:function(e,t){var n=this,r=n.layoutRect();return n.resizeTo(r.w+e,r.h+t)}}}),r(Y,[$,K,G,W],function(e,t,n,r){function i(e){var t;for(t=s.length;t--;)s[t]===e&&s.splice(t,1)}var o,a,s=[],l=[],c,d=e.extend({Mixins:[t,n],init:function(e){function t(){var e,t=d.zIndex||65535,n;if(l.length)for(e=0;e<l.length;e++)l[e].modal&&(t++,n=l[e]),l[e].getEl().style.zIndex=t,l[e].zIndex=t,t++;var i=document.getElementById(u.classPrefix+"modal-block");n?r.css(i,"z-index",n.zIndex-1):i&&(i.parentNode.removeChild(i),c=!1),d.currentZIndex=t}function n(e,t){for(;e;){if(e==t)return!0;e=e.parent()}}function i(e){function t(t,n){for(var r,i=0;i<s.length;i++)if(s[i]!=e)for(r=s[i].parent();r&&(r=r.parent());)r==e&&s[i].fixed(t).moveBy(0,n).repaint()}var n=r.getViewPort().y;e.settings.autofix&&(e._fixed?e._autoFixY>n&&(e.fixed(!1).layoutRect({y:e._autoFixY}).repaint(),t(!1,e._autoFixY-n)):(e._autoFixY=e.layoutRect().y,e._autoFixY<n&&(e.fixed(!0).layoutRect({y:0}).repaint(),t(!0,n-e._autoFixY))))}var u=this;u._super(e),u._eventsRoot=u,u.addClass("floatpanel"),e.autohide&&(o||(o=function(e){var t,r=u.getParentCtrl(e.target);for(t=s.length;t--;){var i=s[t];if(i.settings.autohide){if(r&&(n(r,i)||i.parent()===r))continue;e=i.fire("autohide",{target:e.target}),e.isDefaultPrevented()||i.hide()}}},r.on(document,"click",o)),s.push(u)),e.autofix&&(a||(a=function(){var e;for(e=s.length;e--;)i(s[e])},r.on(window,"scroll",a)),u.on("move",function(){i(this)})),u.on("postrender show",function(e){if(e.control==u){var n,i=u.classPrefix;u.modal&&!c&&(n=r.createFragment('<div id="'+i+'modal-block" class="'+i+"reset "+i+'fade"></div>'),n=n.firstChild,u.getContainerElm().appendChild(n),setTimeout(function(){r.addClass(n,i+"in"),r.addClass(u.getEl(),i+"in")},0),c=!0),l.push(u),t()}}),u.on("close hide",function(e){if(e.control==u){for(var n=l.length;n--;)l[n]===u&&l.splice(n,1);t()}}),u.on("show",function(){u.parents().each(function(e){return e._fixed?(u.fixed(!0),!1):void 0})}),e.popover&&(u._preBodyHtml='<div class="'+u.classPrefix+'arrow"></div>',u.addClass("popover").addClass("bottom").addClass("start"))},fixed:function(e){var t=this;if(t._fixed!=e){if(t._rendered){var n=r.getViewPort();e?t.layoutRect().y-=n.y:t.layoutRect().y+=n.y}t.toggleClass("fixed",e),t._fixed=e}return t},show:function(){var e=this,t,n=e._super();for(t=s.length;t--&&s[t]!==e;);return-1===t&&s.push(e),n},hide:function(){return i(this),this._super()},hideAll:function(){d.hideAll()},close:function(){var e=this;return e.fire("close"),e.remove()},remove:function(){i(this),this._super()}});return d.hideAll=function(){for(var e=s.length;e--;){var t=s[e];t.settings.autohide&&(t.fire("cancel",{},!1),t.hide(),s.splice(e,1))}},d}),r(X,[W],function(e){return function(t){function n(){if(!h)if(h=[],u.find)u.find("*").each(function(e){e.canFocus&&h.push(e.getEl())});else for(var e=u.getEl().getElementsByTagName("*"),t=0;t<e.length;t++)e[t].id&&e[t]&&h.push(e[t])}function r(){return document.getElementById(m)}function i(e){return e=e||r(),e&&e.getAttribute("role")}function o(e){for(var t,n=e||r();n=n.parentNode;)if(t=i(n))return t}function a(e){var t=document.getElementById(m);return t?t.getAttribute("aria-"+e):void 0}function s(){var n=r();if(!n||"TEXTAREA"!=n.nodeName&&"text"!=n.type)return t.onAction?t.onAction(m):e.fire(r(),"click",{keyboard:!0}),!0}function l(){var e;t.onCancel?((e=r())&&e.blur(),t.onCancel()):t.root.fire("cancel")}function c(e){function r(e){for(var t=u?u.getEl():document.body;e&&e!=t;){if("none"==e.style.display)return!1;e=e.parentNode}return!0}var i=-1,o,a,l=[];for(n(),a=l.length,a=0;a<h.length;a++)r(h[a])&&l.push(h[a]);for(a=l.length;a--;)if(l[a].id===m){i=a;break}i+=e,0>i?i=l.length-1:i>=l.length&&(i=0),o=l[i],o.focus(),m=o.id,t.actOnFocus&&s()}function d(){var e,r;for(r=i(t.root.getEl()),n(),e=h.length;e--;)if("toolbar"==r&&h[e].id===m)return h[e].focus(),void 0;h[0].focus()}var u=t.root,f=t.enableUpDown!==!1,p=t.enableLeftRight!==!1,h=t.items,m;return u.on("keydown",function(e){var n=37,r=39,d=38,u=40,h=27,m=14,g=13,v=32,y=9,b;switch(e.keyCode){case n:p&&(t.leftAction?t.leftAction():c(-1),b=!0);
break;case r:p&&("menuitem"==i()&&"menu"==o()?a("haspopup")&&s():c(1),b=!0);break;case d:f&&(c(-1),b=!0);break;case u:f&&("menuitem"==i()&&"menubar"==o()?s():"button"==i()&&a("haspopup")?s():c(1),b=!0);break;case y:b=!0,e.shiftKey?c(-1):c(1);break;case h:b=!0,l();break;case m:case g:case v:b=s()}b&&(e.stopPropagation(),e.preventDefault())}),u.on("focusin",function(e){n(),m=e.target.id}),{moveFocus:c,focusFirst:d,cancel:l}}}),r(J,[Y,$,W,X,q],function(e,t,n,r,i){var o=e.extend({modal:!0,Defaults:{border:1,layout:"flex",containerCls:"panel",role:"dialog",callbacks:{submit:function(){this.fire("submit",{data:this.toJSON()})},close:function(){this.close()}}},init:function(e){var n=this;n._super(e),n.addClass("window"),n._fixed=!0,e.buttons&&(n.statusbar=new t({layout:"flex",border:"1 0 0 0",spacing:3,padding:10,align:"center",pack:"end",defaults:{type:"button"},items:e.buttons}),n.statusbar.addClass("foot"),n.statusbar.parent(n)),n.on("click",function(e){-1!=e.target.className.indexOf(n.classPrefix+"close")&&n.close()}),n.aria("label",e.title),n._fullscreen=!1},recalc:function(){var e=this,t=e.statusbar,r,i,o;e._fullscreen&&(e.layoutRect(n.getWindowSize()),e.layoutRect().contentH=e.layoutRect().innerH),e._super(),r=e.layoutRect(),e.settings.title&&!e._fullscreen&&(i=r.headerW,i>r.w&&(e.layoutRect({w:i}),o=!0)),t&&(t.layoutRect({w:e.layoutRect().innerW}).recalc(),i=t.layoutRect().minW+r.deltaW,i>r.w&&(e.layoutRect({w:i}),o=!0)),o&&e.recalc()},initLayoutRect:function(){var e=this,t=e._super(),r=0,i;e.settings.title&&!e._fullscreen&&(i=e.getEl("head"),t.headerW=i.offsetWidth,t.headerH=i.offsetHeight,r+=t.headerH),e.statusbar&&(r+=e.statusbar.layoutRect().h),t.deltaH+=r,t.minH+=r,t.h+=r;var o=n.getWindowSize();return t.x=Math.max(0,o.w/2-t.w/2),t.y=Math.max(0,o.h/2-t.h/2),t},renderHtml:function(){var e=this,t=e._layout,n=e._id,r=e.classPrefix,i=e.settings,o="",a="",s=i.html;return e.preRender(),t.preRender(e),i.title&&(o='<div id="'+n+'-head" class="'+r+'window-head">'+'<div class="'+r+'title">'+e.encode(i.title)+"</div>"+'<button type="button" class="'+r+'close" aria-hidden="true">&times;</button>'+'<div id="'+n+'-dragh" class="'+r+'dragh"></div>'+"</div>"),i.url&&(s='<iframe src="'+i.url+'" tabindex="-1"></iframe>'),"undefined"==typeof s&&(s=t.renderHtml(e)),e.statusbar&&(a=e.statusbar.renderHtml()),'<div id="'+n+'" class="'+e.classes()+'" hideFocus="1" tabIndex="-1">'+o+'<div id="'+n+'-body" class="'+e.classes("body")+'">'+s+"</div>"+a+"</div>"},fullscreen:function(e){var t=this,r=document.documentElement,i,o=t.classPrefix,a;if(e!=t._fullscreen)if(n.on(window,"resize",function(){var e;if(t._fullscreen)if(i)t._timer||(t._timer=setTimeout(function(){var e=n.getWindowSize();t.moveTo(0,0).resizeTo(e.w,e.h),t._timer=0},50));else{e=(new Date).getTime();var r=n.getWindowSize();t.moveTo(0,0).resizeTo(r.w,r.h),(new Date).getTime()-e>50&&(i=!0)}}),a=t.layoutRect(),t._fullscreen=e,e){t._initial={x:a.x,y:a.y,w:a.w,h:a.h},t._borderBox=t.parseBox("0"),t.getEl("head").style.display="none",a.deltaH-=a.headerH+2,n.addClass(r,o+"fullscreen"),n.addClass(document.body,o+"fullscreen"),t.addClass("fullscreen");var s=n.getWindowSize();t.moveTo(0,0).resizeTo(s.w,s.h)}else t._borderBox=t.parseBox(t.settings.border),t.getEl("head").style.display="",a.deltaH+=a.headerH,n.removeClass(r,o+"fullscreen"),n.removeClass(document.body,o+"fullscreen"),t.removeClass("fullscreen"),t.moveTo(t._initial.x,t._initial.y).resizeTo(t._initial.w,t._initial.h);return t.reflow()},postRender:function(){var e=this,t=[],n,o,a;setTimeout(function(){e.addClass("in")},0),e.keyboardNavigation=new r({root:e,enableLeftRight:!1,enableUpDown:!1,items:t,onCancel:function(){e.close()}}),e.find("*").each(function(e){e.canFocus&&(o=o||e.settings.autofocus,n=n||e,"filepicker"==e.type?(t.push(e.getEl("inp")),e.getEl("open")&&t.push(e.getEl("open").firstChild)):t.push(e.getEl()))}),e.statusbar&&e.statusbar.find("*").each(function(e){e.canFocus&&(o=o||e.settings.autofocus,n=n||e,t.push(e.getEl()))}),e._super(),e.statusbar&&e.statusbar.postRender(),!o&&n&&n.focus(),this.dragHelper=new i(e._id+"-dragh",{start:function(){a={x:e.layoutRect().x,y:e.layoutRect().y}},drag:function(t){e.moveTo(a.x+t.deltaX,a.y+t.deltaY)}}),e.on("submit",function(t){t.isDefaultPrevented()||e.close()})},submit:function(){var e=this.getParentCtrl(document.activeElement);return e&&e.blur(),this.fire("submit",{data:this.toJSON()})},remove:function(){var e=this;e._super(),e.dragHelper.destroy(),e.statusbar&&this.statusbar.remove()}});return o}),r(Q,[J],function(e){var t=e.extend({init:function(e){e={border:1,padding:20,layout:"flex",pack:"center",align:"center",containerCls:"panel",autoScroll:!0,buttons:{type:"button",text:"Ok",action:"ok"},items:{type:"label",multiline:!0,maxWidth:500,maxHeight:200}},this._super(e)},Statics:{OK:1,OK_CANCEL:2,YES_NO:3,YES_NO_CANCEL:4,msgBox:function(n){var r,i=n.callback||function(){};switch(n.buttons){case t.OK_CANCEL:r=[{type:"button",text:"Ok",subtype:"primary",onClick:function(e){e.control.parents()[1].close(),i(!0)}},{type:"button",text:"Cancel",onClick:function(e){e.control.parents()[1].close(),i(!1)}}];break;case t.YES_NO:r=[{type:"button",text:"Ok",subtype:"primary",onClick:function(e){e.control.parents()[1].close(),i(!0)}}];break;case t.YES_NO_CANCEL:r=[{type:"button",text:"Ok",subtype:"primary",onClick:function(e){e.control.parents()[1].close()}}];break;default:r=[{type:"button",text:"Ok",subtype:"primary",onClick:function(e){e.control.parents()[1].close()}}]}return new e({padding:20,x:n.x,y:n.y,minWidth:300,minHeight:100,layout:"flex",pack:"center",align:"center",buttons:r,title:n.title,items:{type:"label",multiline:!0,maxWidth:500,maxHeight:200,text:n.text},onClose:n.onClose}).renderTo(document.body).reflow()},alert:function(e,n){return"string"==typeof e&&(e={text:e}),e.callback=n,t.msgBox(e)},confirm:function(e,n){return"string"==typeof e&&(e={text:e}),e.callback=n,e.buttons=t.OK_CANCEL,t.msgBox(e)}}});return t}),r(Z,[J,Q],function(e,t){return function(n){var r=this,i=[];r.windows=i,r.open=function(t,r){var o;return t.url=t.url||t.file,t.url&&(t.width=parseInt(t.width||320,10),t.height=parseInt(t.height||240,10)),t.body&&(t.items={defaults:t.defaults,type:t.bodyType||"form",items:t.body}),t.url||t.buttons||(t.buttons=[{text:"Ok",subtype:"primary",onclick:function(){o.find("form")[0].submit(),o.close()}},{text:"Cancel",onclick:function(){o.close()}}]),o=new e(t),i.push(o),o.on("close",function(){for(var e=i.length;e--;)i[e]===o&&i.splice(e,1);n.focus()}),t.data&&o.on("postRender",function(){this.find("*").each(function(e){var n=e.name();n in t.data&&e.value(t.data[n])})}),o.params=r||{},n.nodeChanged(),o.renderTo(document.body).reflow()},r.alert=function(e,n,r){t.alert(e,function(){n.call(r||this)})},r.confirm=function(e,n,r){t.confirm(e,function(e){n.call(r||this,e)})},r.close=function(){i.length&&i[i.length-1].close()},r.getParams=function(){return i.length?i[i.length-1].params:null},r.setParams=function(e){i.length&&(i[i.length-1].params=e)}}}),r(et,[S,A,b,h,m,f],function(e,t,n,r,i,o){return function(a){function s(e,t){try{a.getDoc().execCommand(e,!1,t)}catch(n){}}function l(){var e=a.getDoc().documentMode;return e?e:6}function c(e){return e.isDefaultPrevented()}function d(){function t(e){function t(){if(3==l.nodeType){if(e&&c==l.length)return!0;if(!e&&0===c)return!0}}var n,r,i,s,l,c,d;n=F.getRng();var u=[n.startContainer,n.startOffset,n.endContainer,n.endOffset];if(n.collapsed||(e=!0),l=n[(e?"start":"end")+"Container"],c=n[(e?"start":"end")+"Offset"],3==l.nodeType&&(r=I.getParent(n.startContainer,I.isBlock),e&&(r=I.getNext(r,I.isBlock)),!r||!t()&&n.collapsed||(i=I.create("em",{id:"__mceDel"}),D(o.grep(r.childNodes),function(e){i.appendChild(e)}),r.appendChild(i))),n=I.createRng(),n.setStart(u[0],u[1]),n.setEnd(u[2],u[3]),F.setRng(n),a.getDoc().execCommand(e?"ForwardDelete":"Delete",!1,null),i){for(s=F.getBookmark();d=I.get("__mceDel");)I.remove(d,!0);F.moveToBookmark(s)}}a.on("keydown",function(n){var r;r=n.keyCode==O,c(n)||!r&&n.keyCode!=P||e.modifierPressed(n)||(n.preventDefault(),t(r))}),a.addCommand("Delete",function(){t()})}function u(){function e(e){var t=I.create("body"),n=e.cloneContents();return t.appendChild(n),F.serializer.serialize(t,{format:"html"})}function t(t){var n=e(t),r=I.createRng();r.selectNode(a.getBody());var i=e(r);return n===i}a.on("keydown",function(e){var n=e.keyCode,r;if(!c(e)&&(n==O||n==P)){if(r=a.selection.isCollapsed(),r&&!I.isEmpty(a.getBody()))return;if(q&&!r)return;if(!r&&!t(a.selection.getRng()))return;e.preventDefault(),a.setContent(""),a.selection.setCursorLocation(a.getBody(),0),a.nodeChanged()}})}function f(){a.on("keydown",function(t){!c(t)&&65==t.keyCode&&e.metaKeyPressed(t)&&(t.preventDefault(),a.execCommand("SelectAll"))})}function p(){a.settings.content_editable||(I.bind(a.getDoc(),"focusin",function(){F.setRng(F.getRng())}),I.bind(a.getDoc(),"mousedown",function(e){e.target==a.getDoc().documentElement&&(a.getWin().focus(),F.setRng(F.getRng()))}))}function h(){a.on("keydown",function(e){if(!c(e)&&e.keyCode===P&&F.isCollapsed()&&0===F.getRng(!0).startOffset){var t=F.getNode(),n=t.previousSibling;n&&n.nodeName&&"hr"===n.nodeName.toLowerCase()&&(I.remove(n),e.preventDefault())}})}function m(){window.Range.prototype.getClientRects||a.on("mousedown",function(e){if(!c(e)&&"HTML"===e.target.nodeName){var t=a.getBody();t.blur(),setTimeout(function(){t.focus()},0)}})}function g(){a.on("click",function(e){e=e.target,/^(IMG|HR)$/.test(e.nodeName)&&F.getSel().setBaseAndExtent(e,0,e,1),"A"==e.nodeName&&I.hasClass(e,"mce-item-anchor")&&F.select(e),a.nodeChanged()})}function v(){function e(){var e=I.getAttribs(F.getStart().cloneNode(!1));return function(){var t=F.getStart();t!==a.getBody()&&(I.setAttrib(t,"style",null),D(e,function(e){t.setAttributeNode(e.cloneNode(!0))}))}}function t(){return!F.isCollapsed()&&I.getParent(F.getStart(),I.isBlock)!=I.getParent(F.getEnd(),I.isBlock)}a.on("keypress",function(n){var r;return c(n)||8!=n.keyCode&&46!=n.keyCode||!t()?void 0:(r=e(),a.getDoc().execCommand("delete",!1,null),r(),n.preventDefault(),!1)}),I.bind(a.getDoc(),"cut",function(n){var r;!c(n)&&t()&&(r=e(),setTimeout(function(){r()},0))})}function y(){var e,n;a.on("selectionchange",function(){n&&(clearTimeout(n),n=0),n=window.setTimeout(function(){var n=F.getRng();e&&t.compareRanges(n,e)||(a.nodeChanged(),e=n)},50)})}function b(){document.body.setAttribute("role","application")}function C(){a.on("keydown",function(e){if(!c(e)&&e.keyCode===P&&F.isCollapsed()&&0===F.getRng(!0).startOffset){var t=F.getNode().previousSibling;if(t&&t.nodeName&&"table"===t.nodeName.toLowerCase())return e.preventDefault(),!1}})}function x(){l()>7||(s("RespectVisibilityInDesign",!0),a.contentStyles.push(".mceHideBrInPre pre br {display: none}"),I.addClass(a.getBody(),"mceHideBrInPre"),z.addNodeFilter("pre",function(e){for(var t=e.length,r,i,o,a;t--;)for(r=e[t].getAll("br"),i=r.length;i--;)o=r[i],a=o.prev,a&&3===a.type&&"\n"!=a.value.charAt(a.value-1)?a.value+="\n":o.parent.insert(new n("#text",3),o,!0).value="\n"}),V.addNodeFilter("pre",function(e){for(var t=e.length,n,r,i,o;t--;)for(n=e[t].getAll("br"),r=n.length;r--;)i=n[r],o=i.prev,o&&3==o.type&&(o.value=o.value.replace(/\r?\n$/,""))}))}function w(){I.bind(a.getBody(),"mouseup",function(){var e,t=F.getNode();"IMG"==t.nodeName&&((e=I.getStyle(t,"width"))&&(I.setAttrib(t,"width",e.replace(/[^0-9%]+/g,"")),I.setStyle(t,"width","")),(e=I.getStyle(t,"height"))&&(I.setAttrib(t,"height",e.replace(/[^0-9%]+/g,"")),I.setStyle(t,"height","")))})}function _(){a.on("keydown",function(t){var n,r,i,o,s,l,d,u;if(n=t.keyCode==O,!c(t)&&(n||t.keyCode==P)&&!e.modifierPressed(t)&&(r=F.getRng(),i=r.startContainer,o=r.startOffset,d=r.collapsed,3==i.nodeType&&i.nodeValue.length>0&&(0===o&&!d||d&&o===(n?0:1)))){if(l=i.previousSibling,l&&"IMG"==l.nodeName)return;u=a.schema.getNonEmptyElements(),t.preventDefault(),s=I.create("br",{id:"__tmp"}),i.parentNode.insertBefore(s,i),a.getDoc().execCommand(n?"ForwardDelete":"Delete",!1,null),i=F.getRng().startContainer,l=i.previousSibling,l&&1==l.nodeType&&!I.isBlock(l)&&I.isEmpty(l)&&!u[l.nodeName.toLowerCase()]&&I.remove(l),I.remove("__tmp")}})}function N(){a.on("keydown",function(t){var n,r,i,o,s;if(!c(t)&&t.keyCode==e.BACKSPACE&&(n=F.getRng(),r=n.startContainer,i=n.startOffset,o=I.getRoot(),s=r,n.collapsed&&0===i)){for(;s&&s.parentNode&&s.parentNode.firstChild==s&&s.parentNode!=o;)s=s.parentNode;"BLOCKQUOTE"===s.tagName&&(a.formatter.toggle("blockquote",null,s),n=I.createRng(),n.setStart(r,0),n.setEnd(r,0),F.setRng(n))}})}function E(){function e(){a._refreshContentEditable(),s("StyleWithCSS",!1),s("enableInlineTableEditing",!1),W.object_resizing||s("enableObjectResizing",!1)}W.readonly||a.on("BeforeExecCommand MouseDown",e)}function k(){function e(){D(I.select("a"),function(e){var t=e.parentNode,n=I.getRoot();if(t.lastChild===e){for(;t&&!I.isBlock(t);){if(t.parentNode.lastChild!==t||t===n)return;t=t.parentNode}I.add(t,"br",{"data-mce-bogus":1})}})}a.on("SetContent ExecCommand",function(t){("setcontent"==t.type||"mceInsertLink"===t.command)&&e()})}function S(){W.forced_root_block&&a.on("init",function(){s("DefaultParagraphSeparator",W.forced_root_block)})}function T(){a.on("Undo Redo SetContent",function(e){e.initial||a.execCommand("mceRepaint")})}function R(){a.on("keydown",function(e){var t;c(e)||e.keyCode!=P||(t=a.getDoc().selection.createRange(),t&&t.item&&(e.preventDefault(),a.undoManager.beforeChange(),I.remove(t.item(0)),a.undoManager.add()))})}function A(){var e;l()>=10&&(e="",D("p div h1 h2 h3 h4 h5 h6".split(" "),function(t,n){e+=(n>0?",":"")+t+":empty"}),a.contentStyles.push(e+"{padding-right: 1px !important}"))}function B(){l()<9&&(z.addNodeFilter("noscript",function(e){for(var t=e.length,n,r;t--;)n=e[t],r=n.firstChild,r&&n.attr("data-mce-innertext",r.value)}),V.addNodeFilter("noscript",function(e){for(var t=e.length,i,o,a;t--;)i=e[t],o=e[t].firstChild,o?o.value=r.decode(o.value):(a=i.attributes.map["data-mce-innertext"],a&&(i.attr("data-mce-innertext",null),o=new n("#text",3),o.value=a,o.raw=!0,i.append(o)))}))}function H(){function e(e,t){var n=i.createTextRange();try{n.moveToPoint(e,t)}catch(r){n=null}return n}function t(t){var r;t.button?(r=e(t.x,t.y),r&&(r.compareEndPoints("StartToStart",a)>0?r.setEndPoint("StartToStart",a):r.setEndPoint("EndToEnd",a),r.select())):n()}function n(){var e=r.selection.createRange();a&&!e.item&&0===e.compareEndPoints("StartToEnd",e)&&a.select(),I.unbind(r,"mouseup",n),I.unbind(r,"mousemove",t),a=o=0}var r=I.doc,i=r.body,o,a,s;r.documentElement.unselectable=!0,I.bind(r,"mousedown contextmenu",function(i){if("HTML"===i.target.nodeName){if(o&&n(),s=r.documentElement,s.scrollHeight>s.clientHeight)return;o=1,a=e(i.x,i.y),a&&(I.bind(r,"mouseup",n),I.bind(r,"mousemove",t),I.win.focus(),a.select())}})}function M(){a.on("keyup focusin",function(t){65==t.keyCode&&e.metaKeyPressed(t)||F.normalize()})}function L(){a.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")}var D=o.each,P=e.BACKSPACE,O=e.DELETE,I=a.dom,F=a.selection,W=a.settings,z=a.parser,V=a.serializer,U=i.gecko,q=i.ie,j=i.webkit;C(),N(),u(),M(),j&&(_(),d(),p(),g(),S(),i.iOS?y():f()),q&&(h(),b(),x(),w(),R(),A(),B(),H()),U&&(h(),m(),v(),E(),k(),T(),L())}}),r(tt,[f],function(e){function t(){return!1}function n(){return!0}var r="__bindings",i=e.makeMap("focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave keydown keypress keyup contextmenu dragend dragover draggesture dragdrop drop drag"," ");return{fire:function(e,i,o){var a=this,s,l,c,d,u;if(e=e.toLowerCase(),i=i||{},i.type=e,i.target||(i.target=a),i.preventDefault||(i.preventDefault=function(){i.isDefaultPrevented=n},i.stopPropagation=function(){i.isPropagationStopped=n},i.stopImmediatePropagation=function(){i.isImmediatePropagationStopped=n},i.isDefaultPrevented=t,i.isPropagationStopped=t,i.isImmediatePropagationStopped=t),a[r]&&(s=a[r][e]))for(l=0,c=s.length;c>l&&(s[l]=d=s[l],!i.isImmediatePropagationStopped());l++)if(d.call(a,i)===!1)return i.preventDefault(),i;if(o!==!1&&a.parent)for(u=a.parent();u&&!i.isPropagationStopped();)u.fire(e,i,!1),u=u.parent();return i},on:function(e,t){var n=this,o,a,s,l;if(t===!1&&(t=function(){return!1}),t)for(s=e.toLowerCase().split(" "),l=s.length;l--;)e=s[l],o=n[r],o||(o=n[r]={}),a=o[e],a||(a=o[e]=[],n.bindNative&&i[e]&&n.bindNative(e)),a.push(t);return n},off:function(e,t){var n=this,o,a=n[r],s,l,c,d;if(a)if(e)for(c=e.toLowerCase().split(" "),o=c.length;o--;){if(e=c[o],s=a[e],!e){for(l in a)a[e].length=0;return n}if(s){if(t)for(d=s.length;d--;)s[d]===t&&s.splice(d,1);else s.length=0;!s.length&&n.unbindNative&&i[e]&&(n.unbindNative(e),delete a[e])}}else{if(n.unbindNative)for(e in a)n.unbindNative(e);n[r]=[]}return n}}}),r(nt,[f,m],function(e,t){var n=e.each,r=e.explode,i={f9:120,f10:121,f11:122};return function(o){var a=this,s={};o.on("keyup keypress keydown",function(e){(e.altKey||e.ctrlKey||e.metaKey)&&n(s,function(n){var r=t.mac?e.ctrlKey||e.metaKey:e.ctrlKey;if(n.ctrl==r&&n.alt==e.altKey&&n.shift==e.shiftKey)return e.keyCode==n.keyCode||e.charCode&&e.charCode==n.charCode?(e.preventDefault(),"keydown"==e.type&&n.func.call(n.scope),!0):void 0})}),a.add=function(t,a,l,c){var d;return d=l,"string"==typeof l?l=function(){o.execCommand(d,!1,null)}:e.isArray(d)&&(l=function(){o.execCommand(d[0],d[1],d[2])}),n(r(t.toLowerCase()),function(e){var t={func:l,scope:c||o,desc:o.translate(a),alt:!1,ctrl:!1,shift:!1};n(r(e,"+"),function(e){switch(e){case"alt":case"ctrl":case"shift":t[e]=!0;break;default:t.charCode=e.charCodeAt(0),t.keyCode=i[e]||e.toUpperCase().charCodeAt(0)}}),s[(t.ctrl?"ctrl":"")+","+(t.alt?"alt":"")+","+(t.shift?"shift":"")+","+t.keyCode]=t}),!0}}}),r(rt,[g,y,b,E,N,R,B,H,M,L,D,P,v,d,Z,C,w,et,m,f,tt,nt],function(e,n,r,i,o,a,s,l,c,d,u,f,p,h,m,g,v,y,b,C,x,w){function _(e,t){return"selectionchange"==t||"drop"==t?e.getDoc():!e.inline&&/^mouse|click|contextmenu/.test(t)?e.getDoc():e.getBody()}function N(e,t,r){var i=this,o,a;o=i.documentBaseUrl=r.documentBaseURL,a=r.baseURI,i.settings=t=T({id:e,theme:"modern",delta_width:0,delta_height:0,popup_css:"",plugins:"",document_base_url:o,add_form_submit_trigger:!0,submit_patch:!0,add_unload_trigger:!0,convert_urls:!0,relative_urls:!0,remove_script_host:!0,object_resizing:!0,doctype:"<!DOCTYPE html>",visual:!0,font_size_style_values:"xx-small,x-small,small,medium,large,x-large,xx-large",font_size_legacy_values:"xx-small,small,medium,large,x-large,xx-large,300%",forced_root_block:"p",hidden_input:!0,padd_empty_editor:!0,render_ui:!0,indentation:"30px",inline_styles:!0,convert_fonts_to_spans:!0,indent:"simple",indent_before:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,ul,li,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,option,optgroup,datalist",indent_after:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,ul,li,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,option,optgroup,datalist",validate:!0,entity_encoding:"named",url_converter:i.convertURL,url_converter_scope:i,ie7_compat:!0},t),n.settings=t,n.baseURL=r.baseURL,i.id=t.id=e,i.isNotDirty=!0,i.plugins={},i.documentBaseURI=new f(t.document_base_url||o,{base_uri:a}),i.baseURI=a,i.contentCSS=[],i.contentStyles=[],i.shortcuts=new w(i),i.execCommands={},i.queryStateCommands={},i.queryValueCommands={},i.loadedCSS={},i.suffix=r.suffix,i.editorManager=r,i.inline=t.inline,i.execCallback("setup",i)}var E=e.DOM,k=n.ThemeManager,S=n.PluginManager,T=C.extend,R=C.each,A=C.explode,B=C.inArray,H=C.trim,M=C.resolve,L=h.Event,D=b.gecko,P=b.ie,O=b.opera;return N.prototype={render:function(){function e(){var e=p.ScriptLoader;n.language&&"en"!=n.language&&(n.language_url=t.editorManager.baseURL+"/langs/"+n.language+".js"),n.language_url&&e.add(n.language_url),n.theme&&"function"!=typeof n.theme&&"-"!=n.theme.charAt(0)&&!k.urls[n.theme]&&k.load(n.theme,"themes/"+n.theme+"/theme"+i+".js"),C.isArray(n.plugins)&&(n.plugins=n.plugins.join(" ")),R(n.external_plugins,function(e,t){S.load(t,e),n.plugins+=" "+t}),R(n.plugins.split(/[ ,]/),function(e){if(e=H(e),e&&!S.urls[e])if("-"==e.charAt(0)){e=e.substr(1,e.length);var t=S.dependencies(e);R(t,function(e){var t={prefix:"plugins/",resource:e,suffix:"/plugin"+i+".js"};e=S.createUrl(t,e),S.load(e.resource,e)})}else S.load(e,{prefix:"plugins/",resource:e,suffix:"/plugin"+i+".js"})}),e.loadQueue(function(){t.removed||t.init()})}var t=this,n=t.settings,r=t.id,i=t.suffix;if(!L.domLoaded)return E.bind(window,"ready",function(){t.render()}),void 0;if(t.editorManager.settings=n,t.getElement()&&b.contentEditable){n.inline?t.inline=!0:(t.orgVisibility=t.getElement().style.visibility,t.getElement().style.visibility="hidden");var o=t.getElement().form||E.getParent(r,"form");o&&(t.formElement=o,n.hidden_input&&!/TEXTAREA|INPUT/i.test(t.getElement().nodeName)&&E.insertAfter(E.create("input",{type:"hidden",name:r}),r),t.formEventDelegate=function(e){t.fire(e.type,e)},E.bind(o,"submit reset",t.formEventDelegate),t.on("reset",function(){t.setContent(t.startContent,{format:"raw"})}),!n.submit_patch||o.submit.nodeType||o.submit.length||o._mceOldSubmit||(o._mceOldSubmit=o.submit,o.submit=function(){return t.editorManager.triggerSave(),t.isNotDirty=!0,o._mceOldSubmit(o)})),t.windowManager=new m(t),"xml"==n.encoding&&t.on("GetContent",function(e){e.save&&(e.content=E.encode(e.content))}),n.add_form_submit_trigger&&t.on("submit",function(){t.initialized&&(t.save(),t.isNotDirty=!0)}),n.add_unload_trigger&&(t._beforeUnload=function(){!t.initialized||t.destroyed||t.isHidden()||t.save({format:"raw",no_events:!0})},t.editorManager.on("BeforeUnload",t._beforeUnload)),e()}},init:function(){function e(n){var r=S.get(n),i,o;i=S.urls[n]||t.documentBaseUrl.replace(/\/$/,""),n=H(n),r&&-1===B(h,n)&&(R(S.dependencies(n),function(t){e(t)}),o=new r(t,i),t.plugins[n]=o,o.init&&(o.init(t,i),h.push(n)))}var t=this,n=t.settings,r=t.getElement(),i,o,a,s,l,c,d,u,f,p,h=[];if(t.editorManager.add(t),n.aria_label=n.aria_label||E.getAttrib(r,"aria-label",t.getLang("aria.rich_text_area")),n.theme&&("function"!=typeof n.theme?(n.theme=n.theme.replace(/-/,""),l=k.get(n.theme),t.theme=new l(t,k.urls[n.theme]),t.theme.init&&t.theme.init(t,k.urls[n.theme]||t.documentBaseUrl.replace(/\/$/,""))):t.theme=n.theme),R(n.plugins.replace(/\-/g,"").split(/[ ,]/),e),t.fire("BeforeRenderUI"),n.render_ui&&t.theme&&(t.orgDisplay=r.style.display,"function"!=typeof n.theme?(i=n.width||r.style.width||r.offsetWidth,o=n.height||r.style.height||r.offsetHeight,a=n.min_height||100,f=/^[0-9\.]+(|px)$/i,f.test(""+i)&&(i=Math.max(parseInt(i,10)+(l.deltaWidth||0),100)),f.test(""+o)&&(o=Math.max(parseInt(o,10)+(l.deltaHeight||0),a)),l=t.theme.renderUI({targetNode:r,width:i,height:o,deltaWidth:n.delta_width,deltaHeight:n.delta_height}),n.content_editable||(E.setStyles(l.sizeContainer||l.editorContainer,{wi2dth:i,h2eight:o}),o=(l.iframeHeight||o)+("number"==typeof o?l.deltaHeight||0:""),a>o&&(o=a))):(l=n.theme(t,r),l.editorContainer.nodeType&&(l.editorContainer=l.editorContainer.id=l.editorContainer.id||t.id+"_parent"),l.iframeContainer.nodeType&&(l.iframeContainer=l.iframeContainer.id=l.iframeContainer.id||t.id+"_iframecontainer"),o=l.iframeHeight||r.offsetHeight),t.editorContainer=l.editorContainer),n.content_css&&R(A(n.content_css),function(e){t.contentCSS.push(t.documentBaseURI.toAbsolute(e))}),n.content_style&&t.contentStyles.push(n.content_style),n.content_editable)return r=s=l=null,t.initContentBody();for(document.domain&&location.hostname!=document.domain&&(t.editorManager.relaxedDomain=document.domain),t.iframeHTML=n.doctype+"<html><head>",n.document_base_url!=t.documentBaseUrl&&(t.iframeHTML+='<base href="'+t.documentBaseURI.getURI()+'" />'),!b.caretAfter&&n.ie7_compat&&(t.iframeHTML+='<meta http-equiv="X-UA-Compatible" content="IE=7" />'),t.iframeHTML+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />',p=0;p<t.contentCSS.length;p++){var m=t.contentCSS[p];t.iframeHTML+='<link type="text/css" rel="stylesheet" href="'+m+'" />',t.loadedCSS[m]=!0}d=n.body_id||"tinymce",-1!=d.indexOf("=")&&(d=t.getParam("body_id","","hash"),d=d[t.id]||d),u=n.body_class||"",-1!=u.indexOf("=")&&(u=t.getParam("body_class","","hash"),u=u[t.id]||""),t.iframeHTML+='</head><body id="'+d+'" class="mce-content-body '+u+'" '+"onload=\"window.parent.tinymce.get('"+t.id+"').fire('load');\"><br></body></html>",t.editorManager.relaxedDomain&&(P||O&&parseFloat(window.opera.version())<11)&&(c='javascript:(function(){document.open();document.domain="'+document.domain+'";'+'var ed = window.parent.tinymce.get("'+t.id+'");document.write(ed.iframeHTML);'+"document.close();ed.initContentBody();})()"),s=E.add(l.iframeContainer,"iframe",{id:t.id+"_ifr",src:c||'javascript:""',frameBorder:"0",allowTransparency:"true",title:t.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),style:{width:"100%",height:o,display:"block"}}),t.contentAreaContainer=l.iframeContainer,l.editorContainer&&(E.get(l.editorContainer).style.display=t.orgDisplay),E.get(t.id).style.display="none",E.setAttrib(t.id,"aria-hidden",!0),t.editorManager.relaxedDomain&&c||t.initContentBody(),r=s=l=null},initContentBody:function(){var t=this,n=t.settings,o=E.get(t.id),f=t.getDoc(),p,h;n.inline||(t.getElement().style.visibility=t.orgVisibility),P&&t.editorManager.relaxedDomain||n.content_editable||(f.open(),f.write(t.iframeHTML),f.close(),t.editorManager.relaxedDomain&&(f.domain=t.editorManager.relaxedDomain)),n.content_editable&&(t.on("remove",function(){var e=this.getBody();E.removeClass(e,"mce-content-body"),E.removeClass(e,"mce-edit-focus"),E.setAttrib(e,"tabIndex",null),E.setAttrib(e,"contentEditable",null)}),E.addClass(o,"mce-content-body"),o.tabIndex=-1,t.contentDocument=f=n.content_document||document,t.contentWindow=n.content_window||window,t.bodyElement=o,n.content_document=n.content_window=null,n.root_name=o.nodeName.toLowerCase()),p=t.getBody(),p.disabled=!0,n.readonly||(p.contentEditable=t.getParam("content_editable_state",!0)),p.disabled=!1,t.schema=new g(n),t.dom=new e(f,{keep_values:!0,url_converter:t.convertURL,url_converter_scope:t,hex_colors:n.force_hex_style_colors,class_filter:n.class_filter,update_styles:!0,root_element:n.content_editable?t.id:null,schema:t.schema,onSetAttrib:function(e){t.fire("SetAttrib",e)}}),t.parser=new v(n,t.schema),t.parser.addAttributeFilter("src,href,style",function(e,n){for(var r=e.length,i,o=t.dom,a,s;r--;)i=e[r],a=i.attr(n),s="data-mce-"+n,i.attributes.map[s]||("style"===n?i.attr(s,o.serializeStyle(o.parseStyle(a),i.name)):i.attr(s,t.convertURL(a,n,i.name)))}),t.parser.addNodeFilter("script",function(e){for(var t=e.length,n;t--;)n=e[t],n.attr("type","mce-"+(n.attr("type")||"text/javascript"))}),t.parser.addNodeFilter("#cdata",function(e){for(var t=e.length,n;t--;)n=e[t],n.type=8,n.name="#comment",n.value="[CDATA["+n.value+"]]"}),t.parser.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",function(e){for(var n=e.length,i,o=t.schema.getNonEmptyElements();n--;)i=e[n],i.isEmpty(o)&&(i.empty().append(new r("br",1)).shortEnded=!0)}),t.serializer=new i(n,t),t.selection=new a(t.dom,t.getWin(),t.serializer,t),t.formatter=new s(t),t.undoManager=new l(t),t.forceBlocks=new d(t),t.enterKey=new c(t),t.editorCommands=new u(t),t.fire("PreInit"),n.browser_spellcheck||n.gecko_spellcheck||(f.body.spellcheck=!1,E.setAttrib(p,"spellcheck","false")),t.fire("PostRender"),t.quirks=y(t),n.directionality&&(p.dir=n.directionality),n.nowrap&&(p.style.whiteSpace="nowrap"),n.protect&&t.on("BeforeSetContent",function(e){R(n.protect,function(t){e.content=e.content.replace(t,function(e){return"<!--mce:protected "+escape(e)+"-->"})})}),t.on("SetContent",function(){t.addVisual(t.getBody())}),n.padd_empty_editor&&t.on("PostProcess",function(e){e.content=e.content.replace(/^(<p[^>]*>(&nbsp;|&#160;|\s|\u00a0|)<\/p>[\r\n]*|<br \/>[\r\n]*)$/,"")}),t.load({initial:!0,format:"html"}),t.startContent=t.getContent({format:"raw"}),t.initialized=!0,R(t._pendingNativeEvents,function(e){t.dom.bind(_(t,e),e,function(e){t.fire(e.type,e)})}),t.fire("init"),t.focus(!0),t.nodeChanged({initial:!0}),t.execCallback("init_instance_callback",t),t.contentStyles.length>0&&(h="",R(t.contentStyles,function(e){h+=e+"\r\n"}),t.dom.addStyle(h)),R(t.contentCSS,function(e){t.loadedCSS[e]||(t.dom.loadCSS(e),t.loadedCSS[e]=!0)}),n.auto_focus&&setTimeout(function(){var e=t.editorManager.get(n.auto_focus);e.selection.select(e.getBody(),1),e.selection.collapse(1),e.getBody().focus(),e.getWin().focus()},100),o=f=p=null},focus:function(e){var t,n=this,r=n.selection,i=n.settings.content_editable,o,a,s=n.getDoc(),l;e||(o=r.getRng(),o.item&&(a=o.item(0)),n._refreshContentEditable(),i||(b.opera||n.getBody().focus(),n.getWin().focus()),(D||i)&&(l=n.getBody(),l.setActive?l.setActive():l.focus(),i&&r.normalize()),a&&a.ownerDocument==s&&(o=s.body.createControlRange(),o.addElement(a),o.select())),n.editorManager.activeEditor!=n&&((t=n.editorManager.activeEditor)&&t.fire("deactivate",{relatedTarget:n}),n.fire("activate",{relatedTarget:t})),n.editorManager.activeEditor=n},execCallback:function(e){var t=this,n=t.settings[e],r;if(n)return t.callbackLookup&&(r=t.callbackLookup[e])&&(n=r.func,r=r.scope),"string"==typeof n&&(r=n.replace(/\.\w+$/,""),r=r?M(r):0,n=M(n),t.callbackLookup=t.callbackLookup||{},t.callbackLookup[e]={func:n,scope:r}),n.apply(r||t,Array.prototype.slice.call(arguments,1))},translate:function(e){var t=this.settings.language||"en",n=this.editorManager.i18n;return e?n[t+"."+e]||e.replace(/\{\#([^\}]+)\}/g,function(e,r){return n[t+"."+r]||"{#"+r+"}"}):""},getLang:function(e,n){return this.editorManager.i18n[(this.settings.language||"en")+"."+e]||(n!==t?n:"{#"+e+"}")},getParam:function(e,t,n){var r=e in this.settings?this.settings[e]:t,i;return"hash"===n?(i={},"string"==typeof r?R(r.indexOf("=")>0?r.split(/[;,](?![^=;,]*(?:[;,]|$))/):r.split(","),function(e){e=e.split("="),i[H(e[0])]=e.length>1?H(e[1]):H(e)}):i=r,i):r},nodeChanged:function(){var e=this,t=e.selection,n,r,i;e.initialized&&!e.settings.disable_nodechange&&(i=e.getBody(),n=t.getStart()||i,n=P&&n.ownerDocument!=e.getDoc()?e.getBody():n,"IMG"==n.nodeName&&t.isCollapsed()&&(n=n.parentNode),r=[],e.dom.getParent(n,function(e){return e===i?!0:(r.push(e),void 0)}),e.fire("NodeChange",{element:n,parents:r}))},addButton:function(e,t){var n=this;t.cmd&&(t.onclick=function(){n.execCommand(t.cmd)}),t.text||t.icon||(t.icon=e),n.buttons=n.buttons||{},t.tooltip=t.tooltip||t.title,n.buttons[e]=t},addMenuItem:function(e,t){var n=this;t.cmd&&(t.onclick=function(){n.execCommand(t.cmd)}),n.menuItems=n.menuItems||{},n.menuItems[e]=t},addCommand:function(e,t,n){this.execCommands[e]={func:t,scope:n||this}},addQueryStateHandler:function(e,t,n){this.queryStateCommands[e]={func:t,scope:n||this}},addQueryValueHandler:function(e,t,n){this.queryValueCommands[e]={func:t,scope:n||this}},addShortcut:function(e,t,n,r){this.shortcuts.add(e,t,n,r)},execCommand:function(e,t,n,r){var i=this,o=0,a;return/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e)||r&&r.skip_focus||i.focus(),r=T({},r),r=i.fire("BeforeExecCommand",{command:e,ui:t,value:n}),r.isDefaultPrevented()?!1:(a=i.execCommands[e])&&a.func.call(a.scope,t,n)!==!0?(i.fire("ExecCommand",{command:e,ui:t,value:n}),!0):(R(i.plugins,function(r){return r.execCommand&&r.execCommand(e,t,n)?(i.fire("ExecCommand",{command:e,ui:t,value:n}),o=!0,!1):void 0}),o?o:i.theme&&i.theme.execCommand&&i.theme.execCommand(e,t,n)?(i.fire("ExecCommand",{command:e,ui:t,value:n}),!0):i.editorCommands.execCommand(e,t,n)?(i.fire("ExecCommand",{command:e,ui:t,value:n}),!0):(i.getDoc().execCommand(e,t,n),i.fire("ExecCommand",{command:e,ui:t,value:n}),void 0))},queryCommandState:function(e){var t=this,n,r;if(!t._isHidden()){if((n=t.queryStateCommands[e])&&(r=n.func.call(n.scope),r!==!0))return r;
if(r=t.editorCommands.queryCommandState(e),-1!==r)return r;try{return t.getDoc().queryCommandState(e)}catch(i){}}},queryCommandValue:function(e){var n=this,r,i;if(!n._isHidden()){if((r=n.queryValueCommands[e])&&(i=r.func.call(r.scope),i!==!0))return i;if(i=n.editorCommands.queryCommandValue(e),i!==t)return i;try{return n.getDoc().queryCommandValue(e)}catch(o){}}},show:function(){var e=this;E.show(e.getContainer()),E.hide(e.id),e.load(),e.fire("show")},hide:function(){var e=this,t=e.getDoc();P&&t&&t.execCommand("SelectAll"),e.save(),E.hide(e.getContainer()),E.setStyle(e.id,"display",e.orgDisplay),e.fire("hide")},isHidden:function(){return!E.isHidden(this.id)},setProgressState:function(e,t){this.fire("ProgressState",{state:e,time:t})},load:function(e){var n=this,r=n.getElement(),i;return r?(e=e||{},e.load=!0,i=n.setContent(r.value!==t?r.value:r.innerHTML,e),e.element=r,e.no_events||n.fire("LoadContent",e),e.element=r=null,i):void 0},save:function(e){var t=this,n=t.getElement(),r,i;if(n&&t.initialized)return e=e||{},e.save=!0,e.element=n,r=e.content=t.getContent(e),e.no_events||t.fire("SaveContent",e),r=e.content,/TEXTAREA|INPUT/i.test(n.nodeName)?n.value=r:(n.innerHTML=r,(i=E.getParent(t.id,"form"))&&R(i.elements,function(e){return e.name==t.id?(e.value=r,!1):void 0})),e.element=n=null,t.isNotDirty=!0,r},setContent:function(e,t){var n=this,r=n.getBody(),i;return t=t||{},t.format=t.format||"html",t.set=!0,t.content=e,t.no_events||n.fire("BeforeSetContent",t),e=t.content,P||0!==e.length&&!/^\s+$/.test(e)?("raw"!==t.format&&(e=new o({},n.schema).serialize(n.parser.parse(e,{isRootContent:!0}))),t.content=H(e),n.dom.setHTML(r,t.content),t.no_events||n.fire("SetContent",t),n.settings.content_editable&&document.activeElement!==n.getBody()||n.selection.normalize(),t.content):(i=n.settings.forced_root_block,e=i&&n.schema.isValidChild(r.nodeName.toLowerCase(),i.toLowerCase())?"<"+i+'><br data-mce-bogus="1"></'+i+">":'<br data-mce-bogus="1">',r.innerHTML=e,n.selection.select(r,!0),n.selection.collapse(!0),n.fire("SetContent",t),void 0)},getContent:function(e){var t=this,n,r=t.getBody();return e=e||{},e.format=e.format||"html",e.get=!0,e.getInner=!0,e.no_events||t.fire("BeforeGetContent",e),n="raw"==e.format?r.innerHTML:"text"==e.format?r.innerText||r.textContent:t.serializer.serialize(r,e),e.content="text"!=e.format?H(n):n,e.no_events||t.fire("GetContent",e),e.content},insertContent:function(e){this.execCommand("mceInsertContent",!1,e)},isDirty:function(){return!this.isNotDirty},getContainer:function(){var e=this;return e.container||(e.container=E.get(e.editorContainer||e.id+"_parent")),e.container},getContentAreaContainer:function(){return this.contentAreaContainer},getElement:function(){return E.get(this.settings.content_element||this.id)},getWin:function(){var e=this,t;return e.contentWindow||(t=E.get(e.id+"_ifr"),t&&(e.contentWindow=t.contentWindow)),e.contentWindow},getDoc:function(){var e=this,t;return e.contentDocument||(t=e.getWin(),t&&(e.contentDocument=t.document)),e.contentDocument},getBody:function(){return this.bodyElement||this.getDoc().body},convertURL:function(e,t,n){var r=this,i=r.settings;return i.urlconverter_callback?r.execCallback("urlconverter_callback",e,n,!0,t):!i.convert_urls||n&&"LINK"==n.nodeName||0===e.indexOf("file:")||0===e.length?e:i.relative_urls?r.documentBaseURI.toRelative(e):e=r.documentBaseURI.toAbsolute(e,i.remove_script_host)},addVisual:function(e){var n=this,r=n.settings,i=n.dom,o;e=e||n.getBody(),n.hasVisual===t&&(n.hasVisual=r.visual),R(i.select("table,a",e),function(e){var t;switch(e.nodeName){case"TABLE":return o=r.visual_table_class||"mce-item-table",t=i.getAttrib(e,"border"),t&&"0"!=t||(n.hasVisual?i.addClass(e,o):i.removeClass(e,o)),void 0;case"A":return i.getAttrib(e,"href",!1)||(t=i.getAttrib(e,"name")||e.id,o="mce-item-anchor",t&&(n.hasVisual?i.addClass(e,o):i.removeClass(e,o))),void 0}}),n.fire("VisualAid",{element:e,hasVisual:n.hasVisual})},remove:function(){var e=this,t=e.getContainer(),n=e.getDoc();e.removed||(e.removed=1,P&&n&&n.execCommand("SelectAll"),e.save(),E.setStyle(e.id,"display",e.orgDisplay),e.settings.content_editable||(L.unbind(e.getWin()),L.unbind(e.getDoc())),L.unbind(e.getBody()),L.unbind(t),e.fire("remove"),e.editorManager.remove(e),E.remove(t))},bindNative:function(e){var t=this;t.initialized?t.dom.bind(_(t,e),e,function(n){t.fire(e,n)}):t._pendingNativeEvents?t._pendingNativeEvents.push(e):t._pendingNativeEvents=[e]},unbindNative:function(e){var t=this;t.initialized&&t.dom.unbind(e)},destroy:function(e){var t=this,n;t.destroyed||(D&&(L.unbind(t.getDoc()),L.unbind(t.getWin()),L.unbind(t.getBody())),e||(t.editorManager.off("beforeunload",t._beforeUnload),t.theme&&t.theme.destroy&&t.theme.destroy(),t.selection.destroy(),t.dom.destroy()),n=t.formElement,n&&(n.submit=n._mceOldSubmit,n._mceOldSubmit=null,E.unbind(n,"submit reset",t.formEventDelegate)),t.contentAreaContainer=t.formElement=t.container=null,t.settings.content_element=t.bodyElement=t.contentDocument=t.contentWindow=null,t.selection&&(t.selection=t.selection.win=t.selection.dom=t.selection.dom.doc=null),t.destroyed=1)},_refreshContentEditable:function(){var e=this,t,n;e._isHidden()&&(t=e.getBody(),n=t.parentNode,n.removeChild(t),n.appendChild(t),t.focus())},_isHidden:function(){var e;return D?(e=this.selection.getSel(),!e||!e.rangeCount||0===e.rangeCount):0}},T(N.prototype,x),N}),r(it,[],function(){var e={};return{add:function(t,n){for(var r in n)e[r]=n[r]},translate:function(t){if("undefined"==typeof t)return t;if("string"!=typeof t&&t.raw)return t.raw;if(t.push){var n=t.slice(1);t=(e[t[0]]||t[0]).replace(/\{([^\}]+)\}/g,function(e,t){return n[t]})}return e[t]||t},data:e}}),r(ot,[g,m],function(e,t){function n(r){function i(){try{return document.activeElement}catch(e){return document.body}}function o(o){function a(t){return!!e.DOM.getParent(t,n.isEditorUIElement)}var s=o.editor,l,c;s.on("init",function(){"onbeforedeactivate"in document?s.dom.bind(s.getBody(),"beforedeactivate",function(){var e=s.getDoc().selection;l=e&&e.createRange?e.createRange():s.selection.getRng()}):s.inline&&(s.on("nodechange",function(){for(var e,t=document.activeElement;t;){if(t==s.getBody()){e=!0;break}t=t.parentNode}e&&(l=s.selection.getRng())}),t.webkit&&(c=function(){var e=s.selection.getRng();e.collapsed||(l=e)},e.DOM.bind(document,"selectionchange",c),s.on("remove",function(){e.DOM.unbind(document,"selectionchange",c)})))}),s.on("focusin",function(){var e=r.focusedEditor;s.selection.restoreRng&&(s.selection.setRng(s.selection.restoreRng),s.selection.restoreRng=null),e!=s&&(e&&e.fire("blur",{focusedEditor:s}),s.fire("focus",{blurredEditor:e}),s.focus(!1),r.focusedEditor=s)}),s.on("focusout",function(){s.selection.restoreRng=l,window.setTimeout(function(){var e=r.focusedEditor;e!=s&&(s.selection.restoreRng=null),a(i())||e!=s||(s.fire("blur",{focusedEditor:null}),r.focusedEditor=null,s.selection.restoreRng=null)},0)})}r.on("AddEditor",o)}return n.isEditorUIElement=function(e){return-1!==e.className.indexOf("mce-")},n}),r(at,[rt,g,P,m,f,tt,it,ot],function(e,n,r,i,o,a,s,l){var c=n.DOM,d=o.explode,u=o.each,f=o.extend,p=0,h,m={majorVersion:"4",minorVersion:"0",releaseDate:"2013-07-18",editors:[],i18n:s,activeEditor:null,setup:function(){var e=this,t,n,i="",o;if(n=document.location.href.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(n)||(n+="/"),o=window.tinymce||window.tinyMCEPreInit)t=o.base||o.baseURL,i=o.suffix;else for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var c=a[s].src;if(/tinymce(\.jquery|)(\.min|\.dev|)\.js/.test(c)){-1!=c.indexOf(".min")&&(i=".min"),t=c.substring(0,c.lastIndexOf("/"));break}}e.baseURL=new r(n).toAbsolute(t),e.documentBaseURL=n,e.baseURI=new r(e.baseURL),e.suffix=i,e.focusManager=new l(e)},init:function(t){function n(e){var t=e.id;return t||(t=e.name,t=t&&!c.get(t)?e.name:c.uniqueId(),e.setAttribute("id",t)),t}function r(e,t,n){var r=e[t];if(r)return r.apply(n||this,Array.prototype.slice.call(arguments,2))}function i(e,t){return t.constructor===RegExp?t.test(e.className):c.hasClass(e,t)}var o=this,a=[],s;o.settings=t,c.bind(window,"ready",function(){var l,h;if(r(t,"onpageload"),t.types)return u(t.types,function(r){u(c.select(r.selector),function(i){var s=new e(n(i),f({},t,r),o);a.push(s),s.render(1)})}),void 0;if(t.selector)return u(c.select(t.selector),function(r){var i=new e(n(r),t,o);a.push(i),i.render(1)}),void 0;switch(t.mode){case"exact":l=t.elements||"",l.length>0&&u(d(l),function(n){c.get(n)?(s=new e(n,t,o),a.push(s),s.render(!0)):u(document.forms,function(r){u(r.elements,function(r){r.name===n&&(n="mce_editor_"+p++,c.setAttrib(r,"id",n),s=new e(n,t,o),a.push(s),s.render(1))})})});break;case"textareas":case"specific_textareas":u(c.select("textarea"),function(r){t.editor_deselector&&i(r,t.editor_deselector)||(!t.editor_selector||i(r,t.editor_selector))&&(s=new e(n(r),t,o),a.push(s),s.render(!0))})}t.oninit&&(l=h=0,u(a,function(e){h++,e.initialized?l++:e.on("init",function(){l++,l==h&&r(t,"oninit")}),l==h&&r(t,"oninit")}))})},get:function(e){return e===t?this.editors:this.editors[e]},add:function(e){var t=this,n=t.editors;return n[e.id]=e,n.push(e),t.activeEditor=e,t.fire("AddEditor",{editor:e}),h||(h=function(){t.fire("BeforeUnload")},c.bind(window,"beforeunload",h)),e},createEditor:function(t,n){return this.add(new e(t,n,this))},remove:function(e){var t=this,n,r=t.editors,i;if(e){if("string"==typeof e)return e=e.selector||e,u(c.select(e),function(e){t.remove(r[e.id])}),void 0;if(i=e,!r[i.id])return null;for(delete r[i.id],n=0;n<r.length;n++)if(r[n]==i){r.splice(n,1);break}if(t.activeEditor==i&&(t.activeEditor=r[0]),i&&!i.removed)return i.remove(),i.destroy(),t.fire("RemoveEditor",{editor:i}),r.length||c.unbind(window,"beforeunload",h),i}else for(n=r.length-1;n>=0;n--)t.remove(r[n])},execCommand:function(t,n,r){var i=this,o=i.get(r);switch(t){case"mceAddEditor":return i.get(r)||new e(r,i.settings,i).render(),!0;case"mceRemoveEditor":return o&&o.remove(),!0;case"mceToggleEditor":return o?(o.isHidden()?o.show():o.hide(),!0):(i.execCommand("mceAddEditor",0,r),!0)}return i.activeEditor?i.activeEditor.execCommand(t,n,r):!1},triggerSave:function(){u(this.editors,function(e){e.save()})},addI18n:function(e,t){s.add(e,t)},translate:function(e){return s.translate(e)}};return f(m,a),m.setup(),window.tinymce=window.tinyMCE=m,m}),r(st,[at,f],function(e,t){var n=t.each,r=t.explode;e.on("AddEditor",function(e){var t=e.editor;t.on("preInit",function(){function e(e,t){n(t,function(t,n){t&&s.setStyle(e,n,t)}),s.rename(e,"span")}function i(e){s=t.dom,l.convert_fonts_to_spans&&n(s.select("font,u,strike",e.node),function(e){o[e.nodeName.toLowerCase()](s,e)})}var o,a,s,l=t.settings;l.inline_styles&&(a=r(l.font_size_legacy_values),o={font:function(t,n){e(n,{backgroundColor:n.style.backgroundColor,color:n.color,fontFamily:n.face,fontSize:a[parseInt(n.size,10)-1]})},u:function(t,n){e(n,{textDecoration:"underline"})},strike:function(t,n){e(n,{textDecoration:"line-through"})}},t.on("PreProcess SetContent",i))})})}),r(lt,[],function(){return{send:function(e){function t(){!e.async||4==n.readyState||r++>1e4?(e.success&&1e4>r&&200==n.status?e.success.call(e.success_scope,""+n.responseText,n,e):e.error&&e.error.call(e.error_scope,r>1e4?"TIMED_OUT":"GENERAL",n,e),n=null):setTimeout(t,10)}var n,r=0;if(e.scope=e.scope||this,e.success_scope=e.success_scope||e.scope,e.error_scope=e.error_scope||e.scope,e.async=e.async===!1?!1:!0,e.data=e.data||"",n=new XMLHttpRequest){if(n.overrideMimeType&&n.overrideMimeType(e.content_type),n.open(e.type||(e.data?"POST":"GET"),e.url,e.async),e.content_type&&n.setRequestHeader("Content-Type",e.content_type),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.send(e.data),!e.async)return t();setTimeout(t,10)}}}}),r(ct,[],function(){function e(t,n){var r,i,o,a;if(n=n||'"',null===t)return"null";if(o=typeof t,"string"==o)return i="\bb	t\nn\ff\rr\"\"''\\\\",n+t.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g,function(e,t){return'"'===n&&"'"===e?e:(r=i.indexOf(t),r+1?"\\"+i.charAt(r+1):(e=t.charCodeAt().toString(16),"\\u"+"0000".substring(e.length)+e))})+n;if("object"==o){if(t.hasOwnProperty&&"[object Array]"===Object.prototype.toString.call(t)){for(r=0,i="[";r<t.length;r++)i+=(r>0?",":"")+e(t[r],n);return i+"]"}i="{";for(a in t)t.hasOwnProperty(a)&&(i+="function"!=typeof t[a]?(i.length>1?","+n:n)+a+n+":"+e(t[a],n):"");return i+"}"}return""+t}return{serialize:e,parse:function(e){try{return window[String.fromCharCode(101)+"val"]("("+e+")")}catch(t){}}}}),r(dt,[ct,lt,f],function(e,t,n){function r(e){this.settings=i({},e),this.count=0}var i=n.extend;return r.sendRPC=function(e){return(new r).send(e)},r.prototype={send:function(n){var r=n.error,o=n.success;n=i(this.settings,n),n.success=function(t,i){t=e.parse(t),"undefined"==typeof t&&(t={error:"JSON Parse error."}),t.error?r.call(n.error_scope||n.scope,t.error,i):o.call(n.success_scope||n.scope,t.result)},n.error=function(e,t){r&&r.call(n.error_scope||n.scope,e,t)},n.data=e.serialize({id:n.id||"c"+this.count++,method:n.method,params:n.params}),n.content_type="application/json",t.send(n)}},r}),r(ut,[g],function(e){return{callbacks:{},count:0,send:function(n){var r=this,i=e.DOM,o=n.count!==t?n.count:r.count,a="tinymce_jsonp_"+o;r.callbacks[o]=function(e){i.remove(a),delete r.callbacks[o],n.callback(e)},i.add(i.doc.body,"script",{id:a,src:n.url,type:"text/javascript"}),r.count++}}}),r(ft,[],function(){function e(){s=[];for(var e in a)s.push(e);i.length=s.length}function n(){function n(e){var n,r;return r=e!==t?c+e:i.indexOf(",",c),-1===r||r>i.length?null:(n=i.substring(c,r),c=r+1,n)}var r,i,s,c=0;a={},o.load(l),i=o.getAttribute(l)||"";do r=n(parseInt(n(),32)||0),null!==r&&(s=n(parseInt(n(),32)||0),a[r]=s);while(null!==r);e()}function r(){var t,n="";for(var r in a)t=a[r],n+=(n?",":"")+r.length.toString(32)+","+r+","+t.length.toString(32)+","+t;o.setAttribute(l,n),o.save(l),e()}var i,o,a,s,l;return window.localStorage?localStorage:(l="tinymce",o=document.documentElement,o.addBehavior("#default#userData"),i={key:function(e){return s[e]},getItem:function(e){return e in a?a[e]:null},setItem:function(e,t){a[e]=""+t,r()},removeItem:function(e){delete a[e],r()},clear:function(){a={},r()}},n(),i)}),r(pt,[g,d,v,y,f,m],function(e,t,n,r,i,o){var a=window.tinymce;return a.DOM=e.DOM,a.ScriptLoader=n.ScriptLoader,a.PluginManager=r.PluginManager,a.ThemeManager=r.ThemeManager,a.dom=a.dom||{},a.dom.Event=t.Event,i.each(i,function(e,t){a[t]=e}),i.each("isOpera isWebKit isIE isGecko isMac".split(" "),function(e){a[e]=o[e.substr(2).toLowerCase()]}),{}}),r(ht,[O,f],function(e,t){return e.extend({Defaults:{firstControlClass:"first",lastControlClass:"last"},init:function(e){this.settings=t.extend({},this.Defaults,e)},preRender:function(e){e.addClass(this.settings.containerClass,"body")},applyClasses:function(e){var t=this,n=t.settings,r,i,o;r=e.items().filter(":visible"),i=n.firstControlClass,o=n.lastControlClass,r.each(function(e){e.removeClass(i).removeClass(o),n.controlClass&&e.addClass(n.controlClass)}),r.eq(0).addClass(i),r.eq(-1).addClass(o)},renderHtml:function(e){var t=this,n=t.settings,r,i="";return r=e.items(),r.eq(0).addClass(n.firstControlClass),r.eq(-1).addClass(n.lastControlClass),r.each(function(e){n.controlClass&&e.addClass(n.controlClass),i+=e.renderHtml()}),i},recalc:function(){},postRender:function(){}})}),r(mt,[ht],function(e){return e.extend({Defaults:{containerClass:"abs-layout",controlClass:"abs-layout-item"},recalc:function(e){e.items().filter(":visible").each(function(e){var t=e.settings;e.layoutRect({x:t.x,y:t.y,w:t.w,h:t.h}),e.recalc&&e.recalc()})},renderHtml:function(e){return'<div id="'+e._id+'-absend" class="'+e.classPrefix+'abs-end"></div>'+this._super(e)}})}),r(gt,[z,K],function(e,t){return e.extend({Mixins:[t],Defaults:{classes:"widget tooltip tooltip-n"},text:function(e){var t=this;return"undefined"!=typeof e?(t._value=e,t._rendered&&(t.getEl().lastChild.innerHTML=t.encode(e)),t):t._value},renderHtml:function(){var e=this,t=e.classPrefix;return'<div id="'+e._id+'" class="'+e.classes()+'" role="presentation">'+'<div class="'+t+'tooltip-arrow"></div>'+'<div class="'+t+'tooltip-inner">'+e.encode(e._text)+"</div>"+"</div>"},repaint:function(){var e=this,t,n;t=e.getEl().style,n=e._layoutRect,t.left=n.x+"px",t.top=n.y+"px",t.zIndex=131070}})}),r(vt,[z,gt],function(e,t){var n,r=e.extend({init:function(e){var t=this;t._super(e),t.canFocus=!0,e.tooltip&&r.tooltips!==!1&&t.on("mouseenter mouseleave",function(n){var r=t.tooltip().moveTo(-65535);if(n.control==t&&"mouseenter"==n.type){var i=r.text(e.tooltip).show().testMoveRel(t.getEl(),["bc-tc","bc-tl","bc-tr"]);r.toggleClass("tooltip-n","bc-tc"==i),r.toggleClass("tooltip-nw","bc-tl"==i),r.toggleClass("tooltip-ne","bc-tr"==i),r.moveRel(t.getEl(),i)}else r.hide()}),t.aria("label",e.tooltip)},tooltip:function(){var e=this;return n||(n=new t({type:"tooltip"}),n.renderTo(e.getContainerElm())),n},active:function(e){var t=this,n;return e!==n&&(t.aria("pressed",e),t.toggleClass("active",e)),t._super(e)},disabled:function(e){var t=this,n;return e!==n&&(t.aria("disabled",e),t.toggleClass("disabled",e)),t._super(e)},postRender:function(){var e=this,t=e.settings;e._rendered=!0,e._super(),e.parent()||!t.width&&!t.height||(e.initLayoutRect(),e.repaint()),t.autofocus&&setTimeout(function(){e.focus()},0)},remove:function(){this._super(),n&&(n.remove(),n=null)}});return r}),r(yt,[vt],function(e){return e.extend({Defaults:{classes:"widget btn",role:"button"},init:function(e){var t=this,n;t.on("click mousedown",function(e){e.preventDefault()}),t._super(e),n=e.size,e.subtype&&t.addClass(e.subtype),n&&t.addClass("btn-"+n)},repaint:function(){var e=this.getEl().firstChild.style;e.width=e.height="100%",this._super()},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix,r=e.settings.icon,i="";return e.settings.image&&(r="none",i=" style=\"background-image: url('"+e.settings.image+"')\""),r=e.settings.icon?n+"ico "+n+"i-"+r:"",'<div id="'+t+'" class="'+e.classes()+'" tabindex="-1">'+'<button role="presentation" type="button" tabindex="-1">'+(r?'<i class="'+r+'"'+i+"></i>":"")+(e._text?(r?" ":"")+e.encode(e._text):"")+"</button>"+"</div>"}})}),r(bt,[U],function(e){return e.extend({Defaults:{defaultType:"button",role:"toolbar"},renderHtml:function(){var e=this,t=e._layout;return e.addClass("btn-group"),e.preRender(),t.preRender(e),'<div id="'+e._id+'" class="'+e.classes()+'">'+'<div id="'+e._id+'-body">'+(e.settings.html||"")+t.renderHtml(e)+"</div>"+"</div>"}})}),r(Ct,[vt],function(e){return e.extend({Defaults:{classes:"checkbox",role:"checkbox",checked:!1},init:function(e){var t=this;t._super(e),t.on("click mousedown",function(e){e.preventDefault()}),t.on("click",function(e){e.preventDefault(),t.disabled()||t.checked(!t.checked())}),t.checked(t.settings.checked)},checked:function(e){var t=this;return"undefined"!=typeof e?(e?t.addClass("checked"):t.removeClass("checked"),t._checked=e,t.aria("checked",e),t):t._checked},value:function(e){return this.checked(e)},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix;return'<div id="'+t+'" class="'+e.classes()+'" unselectable="on" aria-labeledby="'+t+'-al" tabindex="-1">'+'<i class="'+n+"ico "+n+'i-checkbox"></i>'+'<span id="'+t+'-al" class="'+n+'label">'+e.encode(e._text)+"</span>"+"</div>"}})}),r(xt,[yt,Y],function(e,t){return e.extend({showPanel:function(){var e=this,n=e.settings;n.panel.popover=!0,n.panel.autohide=!0,e.active(!0),e.panel?e.panel.show():(e.panel=new t(n.panel).on("hide",function(){e.active(!1)}).parent(e).renderTo(e.getContainerElm()),e.panel.fire("show"),e.panel.reflow()),e.panel.moveRel(e.getEl(),n.popoverAlign||"bc-tc")},hidePanel:function(){var e=this;e.panel&&e.panel.hide()},postRender:function(){var e=this;return e.on("click",function(t){t.control===e&&(e.panel&&e.panel.visible()?e.hidePanel():e.showPanel())}),e._super()}})}),r(wt,[xt,g],function(e,t){var n=t.DOM;return e.extend({init:function(e){this._super(e),this.addClass("colorbutton")},color:function(e){return e?(this._color=e,this.getEl("preview").style.backgroundColor=e,this):this._color},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix,r=e.settings.icon?n+"ico "+n+"i-"+e.settings.icon:"",i=e.settings.image?" style=\"background-image: url('"+e.settings.image+"')\"":"";return'<div id="'+t+'" class="'+e.classes()+'">'+'<button role="presentation" hidefocus type="button" tabindex="-1">'+(r?'<i class="'+r+'"'+i+"></i>":"")+'<span id="'+t+'-preview" class="'+n+'preview"></span>'+(e._text?(r?" ":"")+e._text:"")+"</button>"+'<button type="button" class="'+n+'open" hidefocus tabindex="-1">'+' <i class="'+n+'caret"></i>'+"</button>"+"</div>"},postRender:function(){var e=this,t=e.settings.onclick;return e.on("click",function(r){r.control!=e||n.getParent(r.target,"."+e.classPrefix+"open")||(r.stopImmediatePropagation(),t.call(e,r))}),delete e.settings.onclick,e._super()}})}),r(_t,[vt,W],function(e,t){return e.extend({init:function(e){var n=this;n._super(e),n.addClass("combobox"),n.on("click",function(e){for(var t=e.target;t;)t.id&&-1!=t.id.indexOf("-open")&&n.fire("action"),t=t.parentNode}),n.on("keydown",function(e){"INPUT"==e.target.nodeName&&13==e.keyCode&&n.parents().reverse().each(function(t){return e.preventDefault(),n.fire("change"),t.submit?(t.submit(),!1):void 0})}),e.placeholder&&(n.addClass("placeholder"),n.on("focusin",function(){n._hasOnChange||(t.on(n.getEl("inp"),"change",function(){n.fire("change")}),n._hasOnChange=!0),n.hasClass("placeholder")&&(n.getEl("inp").value="",n.removeClass("placeholder"))}),n.on("focusout",function(){0===n.value().length&&(n.getEl("inp").value=e.placeholder,n.addClass("placeholder"))}))},value:function(e){var t=this;return"undefined"!=typeof e?(t._value=e,t.removeClass("placeholder"),t._rendered&&(t.getEl("inp").value=e),t):t._rendered?(e=t.getEl("inp").value,e!=t.settings.placeholder?e:""):t._value},disabled:function(e){var t=this;t._super(e),t._rendered&&(t.getEl("inp").disabled=e)},focus:function(){this.getEl("inp").focus()},repaint:function(){var e=this,n=e.getEl(),r=e.getEl("open"),i=e.layoutRect(),o,a;o=r?i.w-r.offsetWidth-10:i.w-10;var s=document;return s.all&&(!s.documentMode||s.documentMode<=8)&&(a=e.layoutRect().h-2+"px"),t.css(n.firstChild,{width:o,lineHeight:a}),e._super(),e},postRender:function(){var e=this;return t.on(this.getEl("inp"),"change",function(){e.fire("change")}),e._super()},renderHtml:function(){var e=this,t=e._id,n=e.settings,r=e.classPrefix,i=n.value||n.placeholder||"",o,a,s="";return o=n.icon?r+"ico "+r+"i-"+n.icon:"",a=e._text,(o||a)&&(s='<div id="'+t+'-open" class="'+r+"btn "+r+'open" tabIndex="-1">'+'<button id="'+t+'-action" type="button" hidefocus tabindex="-1">'+(o?'<i class="'+o+'"></i>':'<i class="'+r+'caret"></i>')+(a?(o?" ":"")+a:"")+"</button>"+"</div>",e.addClass("has-open")),'<div id="'+t+'" class="'+e.classes()+'">'+'<input id="'+t+'-inp" class="'+r+"textbox "+r+'placeholder" value="'+i+'" hidefocus="true">'+s+"</div>"}})}),r(Nt,[z,X],function(e,t){return e.extend({Defaults:{delimiter:"\xbb"},init:function(e){var t=this;t._super(e),t.addClass("path"),t.canFocus=!0,t.on("click",function(e){var n,r=e.target;(n=r.getAttribute("data-index"))&&t.fire("select",{value:t.data()[n],index:n})})},focus:function(){var e=this;return e.keyNav=new t({root:e,enableLeftRight:!0}),e.keyNav.focusFirst(),e},data:function(e){var t=this;return"undefined"!=typeof e?(t._data=e,t.update(),t):t._data},update:function(){this.getEl().innerHTML=this._getPathHtml()},postRender:function(){var e=this;e._super(),e.data(e.settings.data)},renderHtml:function(){var e=this;return'<div id="'+e._id+'" class="'+e.classPrefix+'path">'+e._getPathHtml()+"</div>"},_getPathHtml:function(){var e=this,t=e._data||[],n,r,i="",o=e.classPrefix;for(n=0,r=t.length;r>n;n++)i+=(n>0?'<div class="'+o+'divider" aria-hidden="true"> '+e.settings.delimiter+" </div>":"")+'<div role="button" class="'+o+"path-item"+(n==r-1?" "+o+"last":"")+'" data-index="'+n+'" tabindex="-1" id="'+e._id+"-"+n+'">'+t[n].name+"</div>";return i||(i='<div class="'+o+'path-item">&nbsp;</div>'),i}})}),r(Et,[Nt,at],function(e,t){return e.extend({postRender:function(){function e(e){return 1===e.nodeType&&("BR"==e.nodeName||!!e.getAttribute("data-mce-bogus"))}var n=this,r=t.activeEditor;return n.on("select",function(t){var n=[],i,o=r.getBody();for(r.focus(),i=r.selection.getStart();i&&i!=o;)e(i)||n.push(i),i=i.parentNode;r.selection.select(n[n.length-1-t.index]),r.nodeChanged()}),r.on("nodeChange",function(t){for(var i=[],o=t.parents,a=o.length;a--;)if(1==o[a].nodeType&&!e(o[a])){var s=r.fire("ResolveName",{name:o[a].nodeName.toLowerCase(),target:o[a]});i.push({name:s.name})}n.data(i)}),n._super()}})}),r(kt,[U],function(e){return e.extend({Defaults:{layout:"flex",align:"center",defaults:{flex:1}},renderHtml:function(){var e=this,t=e._layout,n=e.classPrefix;return e.addClass("formitem"),t.preRender(e),'<div id="'+e._id+'" class="'+e.classes()+'" hideFocus="1" tabIndex="-1">'+(e.settings.title?'<div id="'+e._id+'-title" class="'+n+'title">'+e.settings.title+"</div>":"")+'<div id="'+e._id+'-body" class="'+e.classes("body")+'">'+(e.settings.html||"")+t.renderHtml(e)+"</div>"+"</div>"}})}),r(St,[U,kt],function(e,t){return e.extend({Defaults:{containerCls:"form",layout:"flex",direction:"column",align:"stretch",flex:1,padding:20,labelGap:30,spacing:10},preRender:function(){var e=this,n=e.items();n.each(function(n){var r,i=n.settings.label;i&&(r=new t({layout:"flex",autoResize:"overflow",defaults:{flex:1},items:[{type:"label",text:i,flex:0,forId:n._id}]}),r.type="formitem","undefined"==typeof n.settings.flex&&(n.settings.flex=1),e.replace(n,r),r.add(n))})},recalcLabels:function(){var e=this,t=0,n=[],r,i;if(e.settings.labelGapCalc!==!1)for(e.items().filter("formitem").each(function(e){var r=e.items()[0],i=r.getEl().clientWidth;t=i>t?i:t,n.push(r)}),i=e.settings.labelGap||0,r=n.length;r--;)n[r].settings.minWidth=t+i},visible:function(e){var t=this._super(e);return e===!0&&this._rendered&&this.recalcLabels(),t},submit:function(){var e=this.getParentCtrl(document.activeElement);return e&&e.blur(),this.fire("submit",{data:this.toJSON()})},postRender:function(){var e=this;e._super(),e.recalcLabels(),e.fromJSON(e.settings.data)}})}),r(Tt,[St],function(e){return e.extend({Defaults:{containerCls:"fieldset",layout:"flex",direction:"column",align:"stretch",flex:1,padding:"25 15 5 15",labelGap:30,spacing:10,border:1},renderHtml:function(){var e=this,t=e._layout,n=e.classPrefix;return e.preRender(),t.preRender(e),'<fieldset id="'+e._id+'" class="'+e.classes()+'" hideFocus="1" tabIndex="-1">'+(e.settings.title?'<legend id="'+e._id+'-title" class="'+n+'fieldset-title">'+e.settings.title+"</legend>":"")+'<div id="'+e._id+'-body" class="'+e.classes("body")+'">'+(e.settings.html||"")+t.renderHtml(e)+"</div>"+"</fieldset>"}})}),r(Rt,[_t],function(e){return e.extend({init:function(e){var t=this,n=tinymce.activeEditor,r;e.spellcheck=!1,r=n.settings.file_browser_callback,r&&(e.icon="browse",e.onaction=function(){r(t.getEl("inp").id,t.getEl("inp").value,e.filetype,window)}),t._super(e)}})}),r(At,[mt],function(e){return e.extend({recalc:function(e){var t=e.layoutRect(),n=e.paddingBox();e.items().filter(":visible").each(function(e){e.layoutRect({x:n.left,y:n.top,w:t.innerW-n.right-n.left,h:t.innerH-n.top-n.bottom}),e.recalc&&e.recalc()})}})}),r(Bt,[mt],function(e){return e.extend({recalc:function(e){var t,n,r,i,o,a,s,l,c,d,u,f,p,h,m,g,v=[],y,b,C,x,w,_,N,E,k,S,T,R,A,B,H,M,L,D,P,O,I,F,W,z,V=Math.max,U=Math.min;for(r=e.items().filter(":visible"),i=e.layoutRect(),o=e._paddingBox,a=e.settings,f=a.direction,s=a.align,l=a.pack,c=a.spacing||0,("row-reversed"==f||"column-reverse"==f)&&(r=r.set(r.toArray().reverse()),f=f.split("-")[0]),"column"==f?(k="y",N="h",E="minH",S="maxH",R="innerH",T="top",A="bottom",B="deltaH",H="contentH",I="left",D="w",M="x",L="innerW",P="minW",O="maxW",F="right",W="deltaW",z="contentW"):(k="x",N="w",E="minW",S="maxW",R="innerW",T="left",A="right",B="deltaW",H="contentW",I="top",D="h",M="y",L="innerH",P="minH",O="maxH",F="bottom",W="deltaH",z="contentH"),u=i[R]-o[T]-o[T],_=d=0,t=0,n=r.length;n>t;t++)p=r[t],h=p.layoutRect(),m=p.settings,g=m.flex,u-=n-1>t?c:0,g>0&&(d+=g,h[S]&&v.push(p),h.flex=g),u-=h[E],y=o[I]+h[P]+o[F],y>_&&(_=y);if(x={},x[E]=0>u?i[E]-u+i[B]:i[R]-u+i[B],x[P]=_+i[W],x[H]=i[R]-u,x[z]=_,x.minW=U(x.minW,i.maxW),x.minH=U(x.minH,i.maxH),x.minW=V(x.minW,i.startMinWidth),x.minH=V(x.minH,i.startMinHeight),!i.autoResize||x.minW==i.minW&&x.minH==i.minH){for(C=u/d,t=0,n=v.length;n>t;t++)p=v[t],h=p.layoutRect(),b=h[S],y=h[E]+Math.ceil(h.flex*C),y>b?(u-=h[S]-h[E],d-=h.flex,h.flex=0,h.maxFlexSize=b):h.maxFlexSize=0;for(C=u/d,w=o[T],x={},0===d&&("end"==l?w=u+o[T]:"center"==l?(w=Math.round(i[R]/2-(i[R]-u)/2)+o[T],0>w&&(w=o[T])):"justify"==l&&(w=o[T],c=Math.floor(u/(r.length-1)))),x[M]=o[I],t=0,n=r.length;n>t;t++)p=r[t],h=p.layoutRect(),y=h.maxFlexSize||h[E],"center"===s?x[M]=Math.round(i[L]/2-h[D]/2):"stretch"===s?(x[D]=V(h[P]||0,i[L]-o[I]-o[F]),x[M]=o[I]):"end"===s&&(x[M]=i[L]-h[D]-o.top),h.flex>0&&(y+=Math.ceil(h.flex*C)),x[N]=y,x[k]=w,p.layoutRect(x),p.recalc&&p.recalc(),w+=y+c}else if(x.w=x.minW,x.h=x.minH,e.layoutRect(x),this.recalc(e),null===e._lastRect){var q=e.parent();q&&(q._lastRect=null,q.recalc())}}})}),r(Ht,[ht],function(e){return e.extend({Defaults:{containerClass:"flow-layout",controlClass:"flow-layout-item",endClass:"break"},recalc:function(e){e.items().filter(":visible").each(function(e){e.recalc&&e.recalc()})}})}),r(Mt,[V,z,vt,Y,f,at,m],function(e,t,n,r,i,o,a){function s(e){function t(e){return e.replace(/%(\w+)/g,"")}var n=o.activeEditor,r,i,a=n.dom,s="",l,c;return c=n.settings.preview_styles,c===!1?"":(c||(c="font-family font-size font-weight text-decoration text-transform color background-color border border-radius"),(e=n.formatter.get(e))?(e=e[0],r=e.block||e.inline||"span",i=a.create(r),d(e.styles,function(e,n){e=t(e),e&&a.setStyle(i,n,e)}),d(e.attributes,function(e,n){e=t(e),e&&a.setAttrib(i,n,e)}),d(e.classes,function(e){e=t(e),a.hasClass(i,e)||a.addClass(i,e)}),n.fire("PreviewFormats"),a.setStyles(i,{position:"absolute",left:-65535}),n.getBody().appendChild(i),l=a.getStyle(n.getBody(),"fontSize",!0),l=/px$/.test(l)?parseInt(l,10):0,d(c.split(" "),function(e){var t=a.getStyle(i,e,!0);if(!("background-color"==e&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(t)&&(t=a.getStyle(n.getBody(),e,!0),"#ffffff"==a.toHex(t).toLowerCase())||"color"==e&&"#000000"==a.toHex(t).toLowerCase())){if("font-size"==e&&/em|%$/.test(t)){if(0===l)return;t=parseFloat(t,10)/(/%$/.test(t)?100:1),t=t*l+"px"}"border"==e&&t&&(s+="padding:0 2px;"),s+=e+":"+t+";"}}),n.fire("AfterPreviewFormats"),a.remove(i),s):void 0)}function l(e,t){return function(){var n=this;o.activeEditor.on("nodeChange",function(r){var i=o.activeEditor.formatter,a=null;d(r.parents,function(n){return d(e,function(e){return t?i.matchNode(n,t,{value:e.value})&&(a=e.value):i.matchNode(n,e.value)&&(a=e.value),a?!1:void 0}),a?!1:void 0}),n.value(a)})}}function c(e){e=e.split(";");for(var t=e.length;t--;)e[t]=e[t].split("=");return e}var d=i.each;t.translate=function(e){return o.translate(e)},n.tooltips=!a.iOS,o.on("AddEditor",function(t){function n(){function e(r){var i=[];if(r)return d(r,function(r){var o={text:r.title,icon:r.icon,preview:!0};if(r.items)o.menu=e(r.items);else{var a=r.format||"custom"+t++;r.format||(r.name=a,n.push(r)),o.textStyle=function(){return s(a)},o.onclick=function(){m(a)},o.onPostRender=function(){var e=this;e.parent().on("show",function(){e.disabled(!g.formatter.canApply(a)),e.active(g.formatter.match(a))})}}i.push(o)}),i}var t=0,n=[],r=[{title:"Headers",items:[{title:"Header 1",format:"h1"},{title:"Header 2",format:"h2"},{title:"Header 3",format:"h3"},{title:"Header 4",format:"h4"},{title:"Header 5",format:"h5"},{title:"Header 6",format:"h6"}]},{title:"Inline",items:[{title:"Bold",icon:"bold",format:"bold"},{title:"Italic",icon:"italic",format:"italic"},{title:"Underline",icon:"underline",format:"underline"},{title:"Strikethrough",icon:"strikethrough",format:"strikethrough"},{title:"Superscript",icon:"superscript",format:"superscript"},{title:"Subscript",icon:"subscript",format:"subscript"},{title:"Code",icon:"code",format:"code"}]},{title:"Blocks",items:[{title:"Paragraph",format:"p"},{title:"Blockquote",format:"blockquote"},{title:"Div",format:"div"},{title:"Pre",format:"pre"}]},{title:"Alignment",items:[{title:"Left",icon:"alignleft",format:"alignleft"},{title:"Center",icon:"aligncenter",format:"aligncenter"},{title:"Right",icon:"alignright",format:"alignright"},{title:"Justify",icon:"alignjustify",format:"alignjustify"}]}];
g.on("init",function(){d(n,function(e){g.formatter.register(e.name,e)})});var i=e(g.settings.style_formats||r);return i}function a(){return g.undoManager?g.undoManager.hasUndo():!1}function u(){return g.undoManager?g.undoManager.hasRedo():!1}function f(){var e=this;e.disabled(!a()),g.on("Undo Redo AddUndo TypingUndo",function(){e.disabled(!a())})}function p(){var e=this;e.disabled(!u()),g.on("Undo Redo AddUndo TypingUndo",function(){e.disabled(!u())})}function h(){var e=this;g.on("VisualAid",function(t){e.active(t.hasVisual)}),e.active(g.hasVisual)}function m(e){e.control&&(e=e.control.value()),e&&o.activeEditor.execCommand("mceToggleFormat",!1,e)}var g=t.editor,v;v=n(),d({bold:"Bold",italic:"Italic",underline:"Underline",strikethrough:"Strikethrough",subscript:"Subscript",superscript:"Superscript"},function(e,t){g.addButton(t,{tooltip:e,onPostRender:function(){var e=this;g.formatter?g.formatter.formatChanged(t,function(t){e.active(t)}):g.on("init",function(){g.formatter.formatChanged(t,function(t){e.active(t)})})},onclick:function(){m(t)}})}),d({outdent:["Decrease indent","Outdent"],indent:["Increase indent","Indent"],cut:["Cut","Cut"],copy:["Copy","Copy"],paste:["Paste","Paste"],help:["Help","mceHelp"],selectall:["Select all","SelectAll"],hr:["Insert horizontal rule","InsertHorizontalRule"],removeformat:["Clear formatting","RemoveFormat"],visualaid:["Visual aids","mceToggleVisualAid"],newdocument:["New document","mceNewDocument"]},function(e,t){g.addButton(t,{tooltip:e[0],cmd:e[1]})}),d({blockquote:["Toggle blockquote","mceBlockQuote"],numlist:["Numbered list","InsertOrderedList"],bullist:["Bulleted list","InsertUnorderedList"],subscript:["Subscript","Subscript"],superscript:["Superscript","Superscript"],alignleft:["Align left","JustifyLeft"],aligncenter:["Align center","JustifyCenter"],alignright:["Align right","JustifyRight"],alignjustify:["Justify","JustifyFull"]},function(e,t){g.addButton(t,{tooltip:e[0],cmd:e[1],onPostRender:function(){var e=this;g.formatter?g.formatter.formatChanged(t,function(t){e.active(t)}):g.on("init",function(){g.formatter.formatChanged(t,function(t){e.active(t)})})}})}),g.addButton("undo",{tooltip:"Undo",onPostRender:f,cmd:"undo"}),g.addButton("redo",{tooltip:"Redo",onPostRender:p,cmd:"redo"}),g.addMenuItem("newdocument",{text:"New document",shortcut:"Ctrl+N",icon:"newdocument",cmd:"mceNewDocument"}),g.addMenuItem("undo",{text:"Undo",icon:"undo",shortcut:"Ctrl+Z",onPostRender:f,cmd:"undo"}),g.addMenuItem("redo",{text:"Redo",icon:"redo",shortcut:"Ctrl+Y",onPostRender:p,cmd:"redo"}),g.addMenuItem("visualaid",{text:"Visual aids",selectable:!0,onPostRender:h,cmd:"mceToggleVisualAid"}),d({cut:["Cut","Cut","Ctrl+X"],copy:["Copy","Copy","Ctrl+C"],paste:["Paste","Paste","Ctrl+V"],selectall:["Select all","SelectAll","Ctrl+A"],bold:["Bold","Bold","Ctrl+B"],italic:["Italic","Italic","Ctrl+I"],underline:["Underline","Underline"],strikethrough:["Strikethrough","Strikethrough"],subscript:["Subscript","Subscript"],superscript:["Superscript","Superscript"],removeformat:["Clear formatting","RemoveFormat"]},function(e,t){g.addMenuItem(t,{text:e[0],icon:t,shortcut:e[2],cmd:e[1]})}),g.on("mousedown",function(){r.hideAll()}),e.add("styleselect",function(t){var n=[].concat(v);return e.create("menubutton",i.extend({text:"Formats",menu:n},t))}),e.add("formatselect",function(t){var n=[],r=c(g.settings.block_formats||"Paragraph=p;Address=address;Pre=pre;Header 1=h1;Header 2=h2;Header 3=h3;Header 4=h4;Header 5=h5;Header 6=h6");return d(r,function(e){n.push({text:{raw:e[0]},value:e[1],textStyle:function(){return s(e[1])}})}),e.create("listbox",i.extend({text:{raw:r[0][0]},values:n,fixedWidth:!0,onselect:m,onPostRender:l(n)},t))}),e.add("fontselect",function(t){var n="Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats",r=[],a=c(g.settings.font_formats||n);return d(a,function(e){r.push({text:{raw:e[0]},value:e[1],textStyle:-1==e[1].indexOf("dings")?"font-family:"+e[1]:""})}),e.create("listbox",i.extend({text:"Font Family",tooltip:"Font Family",values:r,fixedWidth:!0,onPostRender:l(r,"fontname"),onselect:function(e){e.control.settings.value&&o.activeEditor.execCommand("FontName",!1,e.control.settings.value)}},t))}),e.add("fontsizeselect",function(t){var n=[],r="8pt 10pt 12pt 14pt 18pt 24pt 36pt",a=g.settings.fontsize_formats||r;return d(a.split(" "),function(e){n.push({text:e,value:e})}),e.create("listbox",i.extend({text:"Font Sizes",tooltip:"Font Sizes",values:n,fixedWidth:!0,onPostRender:l(n,"fontsize"),onclick:function(e){e.control.settings.value&&o.activeEditor.execCommand("FontSize",!1,e.control.settings.value)}},t))}),g.addMenuItem("formats",{text:"Formats",menu:v})})}),r(Lt,[mt],function(e){return e.extend({recalc:function(e){var t=e.settings,n,r,i,o,a,s,l,c,d,u,f,p,h,m,g,v,y,b,C,x,w,_,N=[],E=[],k,S,T,R,A,B;for(t=e.settings,i=e.items().filter(":visible"),o=e.layoutRect(),r=t.columns||Math.ceil(Math.sqrt(i.length)),n=Math.ceil(i.length/r),y=t.spacingH||t.spacing||0,b=t.spacingV||t.spacing||0,C=t.alignH||t.align,x=t.alignV||t.align,g=e._paddingBox,C&&"string"==typeof C&&(C=[C]),x&&"string"==typeof x&&(x=[x]),u=0;r>u;u++)N.push(0);for(f=0;n>f;f++)E.push(0);for(f=0;n>f;f++)for(u=0;r>u&&(d=i[f*r+u],d);u++)c=d.layoutRect(),k=c.minW,S=c.minH,N[u]=k>N[u]?k:N[u],E[f]=S>E[f]?S:E[f];for(A=o.innerW-g.left-g.right,w=0,u=0;r>u;u++)w+=N[u]+(u>0?y:0),A-=(u>0?y:0)+N[u];for(B=o.innerH-g.top-g.bottom,_=0,f=0;n>f;f++)_+=E[f]+(f>0?b:0),B-=(f>0?b:0)+E[f];if(w+=g.left+g.right,_+=g.top+g.bottom,l={},l.minW=w+(o.w-o.innerW),l.minH=_+(o.h-o.innerH),l.contentW=l.minW-o.deltaW,l.contentH=l.minH-o.deltaH,l.minW=Math.min(l.minW,o.maxW),l.minH=Math.min(l.minH,o.maxH),l.minW=Math.max(l.minW,o.startMinWidth),l.minH=Math.max(l.minH,o.startMinHeight),!o.autoResize||l.minW==o.minW&&l.minH==o.minH){o.autoResize&&(l=e.layoutRect(l),l.contentW=l.minW-o.deltaW,l.contentH=l.minH-o.deltaH);var H;H="start"==t.packV?0:B>0?Math.floor(B/n):0;var M=0,L=t.flexWidths;if(L)for(u=0;u<L.length;u++)M+=L[u];else M=r;var D=A/M;for(u=0;r>u;u++)N[u]+=L?Math.ceil(L[u]*D):D;for(h=g.top,f=0;n>f;f++){for(p=g.left,s=E[f]+H,u=0;r>u&&(d=i[f*r+u],d);u++)m=d.settings,c=d.layoutRect(),a=N[u],T=R=0,c.x=p,c.y=h,v=m.alignH||(C?C[u]||C[0]:null),"center"==v?c.x=p+a/2-c.w/2:"right"==v?c.x=p+a-c.w:"stretch"==v&&(c.w=a),v=m.alignV||(x?x[u]||x[0]:null),"center"==v?c.y=h+s/2-c.h/2:"bottom"==v?c.y=h+s-c.h:"stretch"==v&&(c.h=s),d.layoutRect(c),p+=a+y,d.recalc&&d.recalc();h+=s+b}}else if(l.w=l.minW,l.h=l.minH,e.layoutRect(l),this.recalc(e),null===e._lastRect){var P=e.parent();P&&(P._lastRect=null,P.recalc())}}})}),r(Dt,[vt],function(e){return e.extend({renderHtml:function(){var e=this;return e.addClass("iframe"),e.canFocus=!1,'<iframe id="'+e._id+'" class="'+e.classes()+'" tabindex="-1" src="'+(e.settings.url||"javascript:''")+'" frameborder="0"></iframe>'},src:function(e){this.getEl().src=e},html:function(e){return this.getEl().contentWindow.document.body.innerHTML=e,this}})}),r(Pt,[vt],function(e){return e.extend({init:function(e){var t=this;t._super(e),t.addClass("widget"),t.addClass("label"),t.canFocus=!1,e.multiline&&t.addClass("autoscroll"),e.strong&&t.addClass("strong")},initLayoutRect:function(){var e=this,t=e._super();return e.settings.multiline&&(e.getEl().offsetWidth>t.maxW&&(t.minW=t.maxW,e.addClass("multiline")),e.getEl().style.width=t.minW+"px",t.startMinH=t.h=t.minH=Math.min(t.maxH,e.getEl().offsetHeight)),t},disabled:function(e){var t=this,n;return e!==n&&(t.toggleClass("label-disabled",e),t._rendered&&(t.getEl()[0].className=t.classes())),t._super(e)},repaint:function(){var e=this;return e.settings.multiline||(e.getEl().style.lineHeight=e.layoutRect().h+"px"),e._super()},text:function(e){var t=this;return t._rendered&&e&&(t.getEl().innerHTML=t.encode(e)),t._super(e)},renderHtml:function(){var e=this,t=e.settings.forId;return'<label id="'+e._id+'" class="'+e.classes()+'"'+(t?' for="'+t:"")+'">'+e.encode(e._text)+"</label>"}})}),r(Ot,[U,X],function(e,t){return e.extend({Defaults:{role:"toolbar",layout:"flow"},init:function(e){var t=this;t._super(e),t.addClass("toolbar")},postRender:function(){var e=this;return e.items().addClass("toolbar-item"),e.keyNav=new t({root:e,enableLeftRight:!0}),e._super()}})}),r(It,[Ot],function(e){return e.extend({Defaults:{role:"menubar",containerCls:"menubar",defaults:{type:"menubutton"}}})}),r(Ft,[yt,V,It],function(e,t,n){function r(e,t){for(;e;){if(t===e)return!0;e=e.parentNode}return!1}var i=e.extend({init:function(e){var t=this;t._renderOpen=!0,t._super(e),t.addClass("menubtn"),e.fixedWidth&&t.addClass("fixed-width"),t.aria("haspopup",!0),t.hasPopup=!0},showMenu:function(){var e=this,n=e.settings,r;return e.menu&&e.menu.visible()?e.hideMenu():(e.menu||(r=n.menu||[],r.length?r={type:"menu",items:r}:r.type=r.type||"menu",e.menu=t.create(r).parent(e).renderTo(e.getContainerElm()),e.fire("createmenu"),e.menu.reflow(),e.menu.on("cancel",function(t){t.control===e.menu&&e.focus()}),e.menu.on("show hide",function(t){t.control==e.menu&&e.activeMenu("show"==t.type)}).fire("show"),e.aria("expanded",!0)),e.menu.show(),e.menu.layoutRect({w:e.layoutRect().w}),e.menu.moveRel(e.getEl(),["bl-tl","tl-bl"]),void 0)},hideMenu:function(){var e=this;e.menu&&(e.menu.items().each(function(e){e.hideMenu&&e.hideMenu()}),e.menu.hide(),e.aria("expanded",!1))},activeMenu:function(e){this.toggleClass("active",e)},renderHtml:function(){var e=this,t=e._id,r=e.classPrefix,i=e.settings.icon?r+"ico "+r+"i-"+e.settings.icon:"";return e.aria("role",e.parent()instanceof n?"menuitem":"button"),'<div id="'+t+'" class="'+e.classes()+'" tabindex="-1">'+'<button id="'+t+'-open" role="presentation" type="button" tabindex="-1">'+(i?'<i class="'+i+'"></i>':"")+"<span>"+(e._text?(i?" ":"")+e.encode(e._text):"")+"</span>"+' <i class="'+r+'caret"></i>'+"</button>"+"</div>"},postRender:function(){var e=this;return e.on("click",function(t){t.control===e&&r(t.target,e.getEl())&&(e.showMenu(),t.keyboard&&e.menu.items()[0].focus())}),e.on("mouseenter",function(t){var n=t.control,r=e.parent(),o;n&&r&&n instanceof i&&n.parent()==r&&(r.items().filter("MenuButton").each(function(e){e.hideMenu&&e!=n&&(e.menu&&e.menu.visible()&&(o=!0),e.hideMenu())}),o&&(n.focus(),n.showMenu()))}),e._super()},text:function(e){var t=this,n,r;if(t._rendered)for(r=t.getEl("open").getElementsByTagName("span"),n=0;n<r.length;n++)r[n].innerHTML=t.encode(e);return this._super(e)},remove:function(){this._super(),this.menu&&this.menu.remove()}});return i}),r(Wt,[Ft],function(e){return e.extend({init:function(e){var t=this,n,r,i,o,a;if(t._values=n=e.values,n){for(r=0;r<n.length;r++)i=n[r].selected||e.value===n[r].value,i&&(o=o||n[r].text,t._value=n[r].value);e.menu=n}e.text=e.text||o||n[0].text,t._super(e),t.addClass("listbox"),t.on("select",function(n){var r=n.control;a&&(n.lastControl=a),e.multiple?r.active(!r.active()):t.value(n.control.settings.value),a=r})},value:function(e){function t(e,n){e.items().each(function(e){r=e.value()===n,r&&(i=i||e.text()),e.active(r),e.menu&&t(e.menu,n)})}var n=this,r,i,o,a;if("undefined"!=typeof e){if(n.menu)t(n.menu,e);else for(o=n.settings.menu,a=0;a<o.length;a++)r=o[a].value==e,r&&(i=i||o[a].text),o[a].active=r;n.text(i||this.settings.text)}return n._super(e)}})}),r(zt,[vt,V],function(e,t){return e.extend({Defaults:{border:0,role:"menuitem"},init:function(e){var t=this;t.hasPopup=!0,t._super(e),e=t.settings,t.addClass("menu-item"),e.menu&&t.addClass("menu-item-expand"),e.preview&&t.addClass("menu-item-preview"),("-"===t._text||"|"===t._text)&&(t.addClass("menu-item-sep"),t.aria("role","separator"),t.canFocus=!1,t._text="-"),e.selectable&&(t.aria("role","menuitemcheckbox"),t.aria("checked",!0),t.addClass("menu-item-checkbox"),e.icon="selected"),t.on("mousedown",function(e){e.preventDefault()}),t.on("mouseenter click",function(n){n.control===t&&(e.menu||"click"!==n.type?(t.showMenu(),n.keyboard&&setTimeout(function(){t.menu.items()[0].focus()},0)):(t.parent().hideAll(),t.fire("cancel"),t.fire("select")))}),e.menu&&t.aria("haspopup",!0)},hasMenus:function(){return!!this.settings.menu},showMenu:function(){var e=this,n=e.settings,r;if(e.parent().items().each(function(t){t!==e&&t.hideMenu()}),n.menu){r=e.menu,r?r.show():(r=n.menu,r.length?r={type:"menu",items:r}:r.type=r.type||"menu",r=e.menu=t.create(r).parent(e).renderTo(e.getContainerElm()),r.reflow(),r.fire("show"),r.on("cancel",function(){e.focus()}),r.on("hide",function(t){t.control===r&&e.removeClass("selected")})),r._parentMenu=e.parent(),r.addClass("menu-sub");var i=r.testMoveRel(e.getEl(),["tr-tl","br-bl","tl-tr","bl-br"]);r.moveRel(e.getEl(),i),i="menu-sub-"+i,r.removeClass(r._lastRel),r.addClass(i),r._lastRel=i,e.addClass("selected"),e.aria("expanded",!0)}},hideMenu:function(){var e=this;return e.menu&&(e.menu.items().each(function(e){e.hideMenu&&e.hideMenu()}),e.menu.hide(),e.aria("expanded",!1)),e},renderHtml:function(){var e=this,t=e._id,n=e.settings,r=e.classPrefix,i=e.encode(e._text),o=e.settings.icon;return o&&e.parent().addClass("menu-has-icons"),o=r+"ico "+r+"i-"+(e.settings.icon||"none"),'<div id="'+t+'" class="'+e.classes()+'" tabindex="-1">'+("-"!==i?'<i class="'+o+'"></i>&nbsp;':"")+("-"!==i?'<span id="'+t+'-text" class="'+r+'text">'+i+"</span>":"")+(n.shortcut?'<div id="'+t+'-shortcut" class="'+r+'menu-shortcut">'+n.shortcut+"</div>":"")+(n.menu?'<div class="'+r+'caret"></div>':"")+"</div>"},postRender:function(){var e=this,t=e.settings,n=t.textStyle;if("function"==typeof n&&(n=n()),n){var r=e.getEl("text");r&&r.setAttribute("style",n)}return e._super()},remove:function(){this._super(),this.menu&&this.menu.remove()}})}),r(Vt,[Y,X,zt],function(e,t,n){var r=e.extend({Defaults:{defaultType:"menuitem",border:1,layout:"stack",role:"menu"},init:function(e){var r=this;e.autohide=!0,e.constrainToViewport=!0,r._super(e),r.addClass("menu"),r.keyNav=new t({root:r,enableUpDown:!0,enableLeftRight:!0,leftAction:function(){r.parent()instanceof n&&r.keyNav.cancel()},onCancel:function(){r.fire("cancel",{},!1),r.hide()}})},repaint:function(){return this.toggleClass("menu-align",!0),this._super(),this.getEl().style.height="",this.getEl("body").style.height="",this},cancel:function(){var e=this;e.hideAll(),e.fire("cancel"),e.fire("select")},hideAll:function(){var e=this;return this.find("menuitem").exec("hideMenu"),e._super()},preRender:function(){var e=this;return e.items().each(function(t){var n=t.settings;return n.icon||n.selectable?(e._hasIcons=!0,!1):void 0}),e._super()}});return r}),r(Ut,[Ct],function(e){return e.extend({Defaults:{classes:"radio",role:"radio"}})}),r(qt,[vt,q],function(e,t){return e.extend({renderHtml:function(){var e=this,t=e.classPrefix;return e.addClass("resizehandle"),"both"==e.settings.direction&&e.addClass("resizehandle-both"),e.canFocus=!1,'<div id="'+e._id+'" class="'+e.classes()+'">'+'<i class="'+t+"ico "+t+'i-resize"></i>'+"</div>"},postRender:function(){var e=this;e._super(),e.resizeDragHelper=new t(this._id,{start:function(){e.fire("ResizeStart")},drag:function(t){"both"!=e.settings.direction&&(t.deltaX=0),e.fire("Resize",t)},end:function(){e.fire("ResizeEnd")}})}})}),r(jt,[vt],function(e){return e.extend({renderHtml:function(){var e=this;return e.addClass("spacer"),e.canFocus=!1,'<div id="'+e._id+'" class="'+e.classes()+'"></div>'}})}),r($t,[Ft,g],function(e,t){var n=t.DOM;return e.extend({Defaults:{classes:"widget btn splitbtn",role:"splitbutton"},repaint:function(){var e=this,t=e.getEl(),r=e.layoutRect(),i,o,a;return e._super(),i=t.firstChild,o=t.lastChild,n.css(i,{width:r.w-o.offsetWidth,height:r.h-2}),n.css(o,{height:r.h-2}),a=i.firstChild.style,a.width=a.height="100%",a=o.firstChild.style,a.width=a.height="100%",e},activeMenu:function(e){var t=this;n.toggleClass(t.getEl().lastChild,t.classPrefix+"active",e)},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix,r=e.settings.icon?n+"ico "+n+"i-"+e.settings.icon:"";return'<div id="'+t+'" class="'+e.classes()+'">'+'<button type="button" hidefocus tabindex="-1">'+(r?'<i class="'+r+'"></i>':"")+(e._text?(r?" ":"")+e._text:"")+"</button>"+'<button type="button" class="'+n+'open" hidefocus tabindex="-1">'+(e._menuBtnText?(r?" ":"")+e._menuBtnText:"")+' <i class="'+n+'caret"></i>'+"</button>"+"</div>"},postRender:function(){var e=this,t=e.settings.onclick;return e.on("click",function(e){e.control!=this||n.getParent(e.target,"."+this.classPrefix+"open")||(e.stopImmediatePropagation(),t.call(this,e))}),delete e.settings.onclick,e._super()}})}),r(Kt,[Ht],function(e){return e.extend({Defaults:{containerClass:"stack-layout",controlClass:"stack-layout-item",endClass:"break"}})}),r(Gt,[$,W],function(e,t){"use stict";return e.extend({lastIdx:0,Defaults:{layout:"absolute",defaults:{type:"panel"}},activateTab:function(e){this.activeTabId&&t.removeClass(this.getEl(this.activeTabId),this.classPrefix+"active"),this.activeTabId="t"+e,t.addClass(this.getEl("t"+e),this.classPrefix+"active"),e!=this.lastIdx&&(this.items()[this.lastIdx].hide(),this.lastIdx=e),this.items()[e].show().fire("showtab"),this.reflow()},renderHtml:function(){var e=this,t=e._layout,n="",r=e.classPrefix;return e.preRender(),t.preRender(e),e.items().each(function(t,i){n+='<div id="'+e._id+"-t"+i+'" class="'+r+'tab" unselectable="on">'+e.encode(t.settings.title)+"</div>"}),'<div id="'+e._id+'" class="'+e.classes()+'" hideFocus="1" tabIndex="-1">'+'<div id="'+e._id+'-head" class="'+r+'tabs">'+n+"</div>"+'<div id="'+e._id+'-body" class="'+e.classes("body")+'">'+t.renderHtml(e)+"</div>"+"</div>"},postRender:function(){var e=this;e._super(),e.settings.activeTab=e.settings.activeTab||0,e.activateTab(e.settings.activeTab),this.on("click",function(t){var n=t.target.parentNode;if(t.target.parentNode.id==e._id+"-head")for(var r=n.childNodes.length;r--;)n.childNodes[r]==t.target&&e.activateTab(r)})},initLayoutRect:function(){var e=this,t,n,r;n=r=0,e.items().each(function(t,i){n=Math.max(n,t.layoutRect().minW),r=Math.max(r,t.layoutRect().minH),e.settings.activeTab!=i&&t.hide()}),e.items().each(function(e){e.settings.x=0,e.settings.y=0,e.settings.w=n,e.settings.h=r,e.layoutRect({x:0,y:0,w:n,h:r})});var i=e.getEl("head").offsetHeight;return e.settings.minWidth=n,e.settings.minHeight=r+i,t=e._super(),t.deltaH+=e.getEl("head").offsetHeight,t.innerH=t.h-t.deltaH,t}})}),r(Yt,[vt,W],function(e,t){return e.extend({init:function(e){var t=this;t._super(e),t._value=e.value||"",t.addClass("textbox"),e.multiline?t.addClass("multiline"):t.on("keydown",function(e){13==e.keyCode&&t.parents().reverse().each(function(t){return e.preventDefault(),t.submit?(t.submit(),!1):void 0})})},value:function(e){var t=this;return"undefined"!=typeof e?(t._value=e,t._rendered&&(t.getEl().value=e),t):t._rendered?t.getEl().value:t._value},repaint:function(){var e=this,t,n,r,i=0,o=0,a;t=e.getEl().style,n=e._layoutRect,a=e._lastRepaintRect||{};var s=document;return!e.settings.multiline&&s.all&&(!s.documentMode||s.documentMode<=8)&&(t.lineHeight=n.h-o+"px"),r=e._borderBox,i=r.left+r.right+8,o=r.top+r.bottom+(e.settings.multiline?8:0),n.x!==a.x&&(t.left=n.x+"px",a.x=n.x),n.y!==a.y&&(t.top=n.y+"px",a.y=n.y),n.w!==a.w&&(t.width=n.w-i+"px",a.w=n.w),n.h!==a.h&&(t.height=n.h-o+"px",a.h=n.h),e._lastRepaintRect=a,e.fire("repaint",{},!1),e},renderHtml:function(){var e=this,t=e._id,n=e.settings,r=e.encode(e._value,!1),i="";return"spellcheck"in n&&(i+=' spellcheck="'+n.spellcheck+'"'),n.maxLength&&(i+=' maxlength="'+n.maxLength+'"'),n.size&&(i+=' size="'+n.size+'"'),n.subtype&&(i+=' type="'+n.subtype+'"'),n.multiline?'<textarea id="'+t+'" class="'+e.classes()+'" '+(n.rows?' rows="'+n.rows+'"':"")+' hidefocus="true"'+i+">"+r+"</textarea>":'<input id="'+t+'" class="'+e.classes()+'" value="'+r+'" hidefocus="true"'+i+">"},postRender:function(){var e=this;return t.on(e.getEl(),"change",function(t){e.fire("change",t)}),e._super()}})}),r(Xt,[W],function(e){return function(t){var n=this,r;n.show=function(i){return n.hide(),r=!0,window.setTimeout(function(){r&&t.appendChild(e.createFragment('<div class="mce-throbber"></div>'))},i||0),n},n.hide=function(){var e=t.lastChild;return e&&-1!=e.className.indexOf("throbber")&&e.parentNode.removeChild(e),r=!1,n}}}),a([l,c,d,u,f,p,h,m,g,v,y,b,C,x,w,_,N,E,k,S,T,R,A,B,H,M,L,D,P,O,I,F,W,z,V,U,q,j,$,K,G,Y,X,J,Q,Z,et,tt,nt,rt,it,ot,at,st,lt,ct,dt,ut,ft,pt,ht,mt,gt,vt,yt,bt,Ct,xt,wt,_t,Nt,Et,kt,St,Tt,Rt,At,Bt,Ht,Mt,Lt,Dt,Pt,Ot,It,Ft,Wt,zt,Vt,Ut,qt,jt,$t,Kt,Gt,Yt,Xt])}(this);; /* ../js/lib/tinymce/jquery.tinymce.min.js */ !function(t){function e(){function e(t){"remove"===t&&this.each(function(t,e){var n=r(e);n&&n.remove()}),this.find("span.mceEditor,div.mceEditor").each(function(t,e){var n=tinymce.get(e.id.replace(/_parent$/,""));n&&n.remove()})}function i(t){var n,i=this;if(null!=t)e.call(i),i.each(function(e,n){var i;(i=tinymce.get(n.id))&&i.setContent(t)});else if(i.length>0&&(n=tinymce.get(i[0].id)))return n.getContent()}function r(t){var e=null;return t&&t.id&&a.tinymce&&(e=tinymce.get(t.id)),e}function c(t){return!!(t&&t.length&&a.tinymce&&t.is(":tinymce"))}var u={};t.each(["text","html","val"],function(e,a){var o=u[a]=t.fn[a],s="text"===a;t.fn[a]=function(e){var a=this;if(!c(a))return o.apply(a,arguments);if(e!==n)return i.call(a.filter(":tinymce"),e),o.apply(a.not(":tinymce"),arguments),a;var u="",l=arguments;return(s?a:a.eq(0)).each(function(e,n){var i=r(n);u+=i?s?i.getContent().replace(/<(?:"[^"]*"|'[^']*'|[^'">])*>/g,""):i.getContent({save:!0}):o.apply(t(n),l)}),u}}),t.each(["append","prepend"],function(e,i){var a=u[i]=t.fn[i],o="prepend"===i;t.fn[i]=function(t){var e=this;return c(e)?t!==n?(e.filter(":tinymce").each(function(e,n){var i=r(n);i&&i.setContent(o?t+i.getContent():i.getContent()+t)}),a.apply(e.not(":tinymce"),arguments),e):void 0:a.apply(e,arguments)}}),t.each(["remove","replaceWith","replaceAll","empty"],function(n,i){var r=u[i]=t.fn[i];t.fn[i]=function(){return e.call(this,i),r.apply(this,arguments)}}),u.attr=t.fn.attr,t.fn.attr=function(e,a){var o=this,s=arguments;if(!e||"value"!==e||!c(o))return a!==n?u.attr.apply(o,s):u.attr.apply(o,s);if(a!==n)return i.call(o.filter(":tinymce"),a),u.attr.apply(o.not(":tinymce"),s),o;var l=o[0],p=r(l);return p?p.getContent({save:!0}):u.attr.apply(t(l),s)}}var n,i,r=[],a=window;t.fn.tinymce=function(n){function c(){var i=[],r=0;e&&(e(),e=null),l.each(function(t,e){var a,c=e.id,u=n.oninit;c||(e.id=c=tinymce.DOM.uniqueId()),tinymce.get(c)||(a=new tinymce.Editor(c,n,tinymce.EditorManager),i.push(a),a.on("init",function(){var t,e=u;l.css("visibility",""),u&&++r==i.length&&("string"==typeof e&&(t=-1===e.indexOf(".")?null:tinymce.resolve(e.replace(/\.\w+$/,"")),e=tinymce.resolve(e)),e.apply(t||tinymce,i))}))}),t.each(i,function(t,e){e.render()})}var u,o,s,l=this,p="";if(!l.length)return l;if(!n)return tinymce.get(l[0].id);if(l.css("visibility","hidden"),a.tinymce||i||!(u=n.script_url))1===i?r.push(c):c();else{i=1,o=u.substring(0,u.lastIndexOf("/")),-1!=u.indexOf(".min")&&(p=".min"),a.tinymce=a.tinyMCEPreInit||{base:o,suffix:p},-1!=u.indexOf("gzip")&&(s=n.language||"en",u=u+(/\?/.test(u)?"&":"?")+"js=true&core=true&suffix="+escape(p)+"&themes="+escape(n.theme)+"&plugins="+escape(n.plugins)+"&languages="+s,a.tinyMCE_GZ||(a.tinyMCE_GZ={start:function(){function e(t){tinymce.ScriptLoader.markDone(tinymce.baseURI.toAbsolute(t))}e("langs/"+s+".js"),e("themes/"+n.theme+"/theme"+p+".js"),e("themes/"+n.theme+"/langs/"+s+".js"),t.each(n.plugins.split(","),function(t,n){n&&(e("plugins/"+n+"/plugin"+p+".js"),e("plugins/"+n+"/langs/"+s+".js"))})},end:function(){}}));var f=document.createElement("script");f.type="text/javascript",f.onload=f.onreadystatechange=function(e){e=e||event,("load"==e.type||/complete|loaded/.test(f.readyState))&&(tinymce.dom.Event.domLoaded=1,i=2,n.script_loaded&&n.script_loaded(),c(),t.each(r,function(t,e){e()}))},f.src=u,document.body.appendChild(f)}return l},t.extend(t.expr[":"],{tinymce:function(t){return!!(t.id&&"tinymce"in window&&tinymce.get(t.id))}})}(jQuery);; /* ../js/lib/jquery.hint.js */ (function($){
	$.fn.hint = function(){
		return $(this).each(function(){
			var el = $(this);

			el.data('placeholder',el.val());
			el.addClass('hint');
			el.focus(function(){
				el.removeClass('hint');
				if (el.val() === el.data('placeholder')) {

					el.val('');
				}
			}).blur(function(){
				if (el.val() == '') {

					el.val(el.data('placeholder'));
					el.addClass('hint');
				}
			})
		});
	}
})(jQuery);; /* ../js/lib/jquery.autosave.js */ (function($){
	$.fn.autosave = function(options){
		return $(this).each(function(){

			var duration = 500;
			var timer;

			var notification_timer;
			var notification_duration = 1500;
			var notification_timer_duration = 2500;
			var autosave = function() {
				clearTimeout(notification_timer);
				options.notification.show();
				options.notification.css({opacity :1});
				notification_timer = setTimeout(function(){
					options.notification.stop().animate({opacity : 0.25},{duration : notification_duration});
				},notification_timer_duration);
			}
			$(this).keydown(function(e){
				clearTimeout(timer);
				timer = setTimeout(function(){
					autosave();
				},duration);
			});
			options.notification.mouseover(function(){
				options.notification.stop().animate({opacity : 1},{duration : 200});
			}).mouseout(function(){
				options.notification.stop().animate({opacity : 0.25},{duration : notification_duration});
			});


		});
	}
})(jQuery);; /* ../js/lib/jquery.modal.js */ (function ($) {

    $.fn.modal = function (options) {

        if (typeof options === 'string') {
            options = {content : options};

        }
        options = $.extend({
            arrow : true,
            close : true,
            overlay : true,
            content : ''
        },options);


        var self, content, modal, arrow, close, overlay, exit, left, top;

        self = $(this);
        var offset = self.offset();





        // if (glasswing.hasOwnProperty('modal')) {
        //     glasswing.modal.modal.remove();
        //     if (glasswing.modal.overlay) { glasswing.modal.overlay.remove(); }
        //     delete glasswing.modal;
        // }

        // $('body').append(self);
        modal = self.data('modal-element');

        if (! modal || options.content !== modal.alt) {
            modal = {};
            modal.alt = options.content;
            modal.el = $('<div class="modal" />');
            modal.content = $('<div class="modal-content" />');
            if (options.arrow) { modal.arrow = $('<div class="arrow" />'); }
            if (options.close) { modal.close = $('<a href="javascript:;" class="close" />'); }

            if (options.overlay) { modal.overlay = $('<div class="modal-overlay" />'); }

            modal.el.html(modal.content);
            modal.content.html(modal.alt);
            if (options.arrow) { modal.el.prepend(modal.arrow); }
            if (options.close) { modal.el.prepend(modal.close); }

            if (options.overlay) {

                $('body').append(modal.overlay);
            }
            self.data('modal-element',modal);
            $('body').append(modal.el);
            modal.el.css({opacity: 0})

        }


        exit = function () {
            if (modal.overlay) { modal.overlay.remove(); }
            modal.el.remove();
            self.data('modal-element',null);
        }
        if (modal.overlay) { modal.overlay.click(exit); }
        if (modal.close) { modal.close.click(exit); }


        left = offset.left;

        top = offset.top + self.outerHeight() + modal.arrow.outerHeight();


        var padding_right = 40;
        if (left + modal.el.width() + padding_right > $(document).width()) {
            // slide it over
            modal.el.css({left: left - 40, top: top});
            modal.arrow.css({left: '72%'});
        } else {
            modal.el.css({left: left, top: top});
        }




        modal.el.stop().animate({opacity: 1, marginTop: 3},{easing : 'easeOutQuad', duration: 200});



        // glasswing.modal = {modal : modal, overlay : overlay };
    }
    $.fn.modal.close = function(el) {
        var modal = $(el).data("modal-element");
        modal.el.stop().animate({opacity: 0, marginTop : 6}, {easing : 'easeInQuad',duration: 200, complete : function() {
            modal.el.css({marginTop : 0});
        }});
        // self.data("modal-element").remove();
        // self.data("modal-element").stop().fadeOut(function(){
        //     this.remove();
        //     self.data('modal-element',null);
        // });
    }
})(jQuery);; /* ../js/lib/jquery.tooltip.js */ (function($){
	$.fn.tooltip = function(options) {
		var defaults = {
		}
		options = $.extend(defaults,options);

		return $(this).each(function(){

			var self = $(this);


			self.data('alt',self.attr('alt'));
			self.removeAttr('alt');

			// self.modal({content : self.data('alt'), overlay : false, close : false, show : false});
			if (self.data('modal-element')) {
				self.data('modal-element').content.html(self.data('alt'));
			}
			self.mouseover(function(){
				self.modal({content : self.data('alt'), overlay : false, close : false, show : false});
			}).mouseout(function(){
				self.modal.close(self);
			});

		});

	}
	var checkForNewElements = function() {
		$('body *[alt]').tooltip();
		setTimeout(checkForNewElements,200);
	}
	checkForNewElements();

})(jQuery);; /* ../js/lib/jquery.accordion.js */ (function($){
	$.fn.animateRotate = function(startAngle, endAngle, duration, easing, complete){
	    return this.each(function(){
	        var elem = $(this);

	        $({deg: startAngle}).animate({deg: endAngle}, {
	            duration: duration,
	            easing: easing,
	            step: function(now){
	                elem.css({
	                  '-moz-transform':'rotate('+now+'deg)',
	                  '-webkit-transform':'rotate('+now+'deg)',
	                  '-o-transform':'rotate('+now+'deg)',
	                  '-ms-transform':'rotate('+now+'deg)',
	                  'transform':'rotate('+now+'deg)'
	                });
	            },
	            complete: complete || $.noop
	        });
	    });
	};
	$.fn.accordion = function(options) {


		var accordion = $(this);
		var header_height = $(this).find('.header').outerHeight();
		var top = accordion.offset().top;
		// var height = accordion.offset().top;
		var getTargetHeight = function() {
			var height = top + 60; // padding on bottom
			accordion.find('.pane').each(function(){
				// height += header_height;
				if (! $(this).hasClass('collapsed')) {
					height += $(this).data('height');
				}
			});
			// console.log(height);
			return height;
		}
		var setSlaveHeight = function(attb) {
			if (! attb.easing) { attb.easing = 'linear'; }
			if (options.slave) {
				if (attb.duration < 10) {
					options.slave.css({top: getTargetHeight()});
				} else {
					options.slave.animate({
						top: getTargetHeight()
					}, {easing : attb.easing, duration : attb.duration });
				}

			}
		}

		var toggle = function(e) {
			if (e) { e.preventDefault(); }


			var arrow = $(this);
			var pane = $(this).parents('.pane');
			var accordion = pane.parents('.accordion');

			var content = pane.find('.content');
			var duration = 300;
			var easing = 'linear';
			if (pane.hasClass('collapsed')) {
				// open
				easing = 'easeOutQuad';
				content.stop().slideDown({duration: duration, easing : easing});
				arrow.animateRotate(-90,0,duration);
				pane.removeClass('collapsed');
			} else {
				// close
				easing = 'easeInQuad';
				content.stop().slideUp({duration: duration, easing : easing});
				arrow.animateRotate(0,-90,duration);
				pane.addClass('collapsed');

			}
			setSlaveHeight({easing : easing, duration : duration});

		}

		var panes = accordion.find('.pane');

		panes.each(function(){
			var arrow = $('<div class="arrow"></div>');
			var pane = $(this);
			pane.data('height',pane.outerHeight() - header_height);
			var header = pane.find('.header');
			header.prepend(arrow);
			arrow.click(toggle);
		});
		setSlaveHeight({duration: 1});
	}

})(jQuery);

var ringNotif = function(el) {
	var count = 4;
	var inc = 0;
	var timeout = 1200;
	var duration = 60;
	var amount = 10;

	var r = function() {
		if (inc < count) {
			ring(el,0-amount,amount,duration);
			inc++;
			setTimeout(r,timeout);
			console.log(el);
			el.find('img').css({boxShadow: '0 0 50px #fff'});
		}


	}
	r();

}
var ring = function(el,start,end, duration) {
	var decay = 0.7;
	$(el).css({'-webkit-transform-origin' : '50% 0'  })
	var r = function(start,end) {
		$(el).animateRotate(start,end,duration,'linear',function(){
			if (Math.abs(start) > 1) {
				r(end*decay,start*decay);
			}

		});
	}
	r(start,end);

}; /* ../js/lib/markdown.min.js */ // Released under MIT license
// Copyright (c) 2009-2010 Dominic Baggott
// Copyright (c) 2009-2010 Ash Berlin
// Copyright (c) 2011 Christoph Dorn <christoph@christophdorn.com> (http://www.christophdorn.com)

/*jshint browser:true, devel:true */

(function( expose ) {

/**
 *  class Markdown
 *
 *  Markdown processing in Javascript done right. We have very particular views
 *  on what constitutes 'right' which include:
 *
 *  - produces well-formed HTML (this means that em and strong nesting is
 *    important)
 *
 *  - has an intermediate representation to allow processing of parsed data (We
 *    in fact have two, both as [JsonML]: a markdown tree and an HTML tree).
 *
 *  - is easily extensible to add new dialects without having to rewrite the
 *    entire parsing mechanics
 *
 *  - has a good test suite
 *
 *  This implementation fulfills all of these (except that the test suite could
 *  do with expanding to automatically run all the fixtures from other Markdown
 *  implementations.)
 *
 *  ##### Intermediate Representation
 *
 *  *TODO* Talk about this :) Its JsonML, but document the node names we use.
 *
 *  [JsonML]: http://jsonml.org/ "JSON Markup Language"
 **/
var Markdown = expose.Markdown = function(dialect) {
  switch (typeof dialect) {
    case "undefined":
      this.dialect = Markdown.dialects.Gruber;
      break;
    case "object":
      this.dialect = dialect;
      break;
    default:
      if ( dialect in Markdown.dialects ) {
        this.dialect = Markdown.dialects[dialect];
      }
      else {
        throw new Error("Unknown Markdown dialect '" + String(dialect) + "'");
      }
      break;
  }
  this.em_state = [];
  this.strong_state = [];
  this.debug_indent = "";
};

/**
 *  parse( markdown, [dialect] ) -> JsonML
 *  - markdown (String): markdown string to parse
 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
 *
 *  Parse `markdown` and return a markdown document as a Markdown.JsonML tree.
 **/
expose.parse = function( source, dialect ) {
  // dialect will default if undefined
  var md = new Markdown( dialect );
  return md.toTree( source );
};

/**
 *  toHTML( markdown, [dialect]  ) -> String
 *  toHTML( md_tree ) -> String
 *  - markdown (String): markdown string to parse
 *  - md_tree (Markdown.JsonML): parsed markdown tree
 *
 *  Take markdown (either as a string or as a JsonML tree) and run it through
 *  [[toHTMLTree]] then turn it into a well-formated HTML fragment.
 **/
expose.toHTML = function toHTML( source , dialect , options ) {
  var input = expose.toHTMLTree( source , dialect , options );

  return expose.renderJsonML( input );
};

/**
 *  toHTMLTree( markdown, [dialect] ) -> JsonML
 *  toHTMLTree( md_tree ) -> JsonML
 *  - markdown (String): markdown string to parse
 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
 *  - md_tree (Markdown.JsonML): parsed markdown tree
 *
 *  Turn markdown into HTML, represented as a JsonML tree. If a string is given
 *  to this function, it is first parsed into a markdown tree by calling
 *  [[parse]].
 **/
expose.toHTMLTree = function toHTMLTree( input, dialect , options ) {
  // convert string input to an MD tree
  if ( typeof input ==="string" ) input = this.parse( input, dialect );

  // Now convert the MD tree to an HTML tree

  // remove references from the tree
  var attrs = extract_attr( input ),
      refs = {};

  if ( attrs && attrs.references ) {
    refs = attrs.references;
  }

  var html = convert_tree_to_html( input, refs , options );
  merge_text_nodes( html );
  return html;
};

// For Spidermonkey based engines
function mk_block_toSource() {
  return "Markdown.mk_block( " +
          uneval(this.toString()) +
          ", " +
          uneval(this.trailing) +
          ", " +
          uneval(this.lineNumber) +
          " )";
}

// node
function mk_block_inspect() {
  var util = require("util");
  return "Markdown.mk_block( " +
          util.inspect(this.toString()) +
          ", " +
          util.inspect(this.trailing) +
          ", " +
          util.inspect(this.lineNumber) +
          " )";

}

var mk_block = Markdown.mk_block = function(block, trail, line) {
  // Be helpful for default case in tests.
  if ( arguments.length == 1 ) trail = "\n\n";

  var s = new String(block);
  s.trailing = trail;
  // To make it clear its not just a string
  s.inspect = mk_block_inspect;
  s.toSource = mk_block_toSource;

  if ( line != undefined )
    s.lineNumber = line;

  return s;
};

function count_lines( str ) {
  var n = 0, i = -1;
  while ( ( i = str.indexOf("\n", i + 1) ) !== -1 ) n++;
  return n;
}

// Internal - split source into rough blocks
Markdown.prototype.split_blocks = function splitBlocks( input, startLine ) {
  input = input.replace(/(\r\n|\n|\r)/g, "\n");
  // [\s\S] matches _anything_ (newline or space)
  // [^] is equivalent but doesn't work in IEs.
  var re = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
      blocks = [],
      m;

  var line_no = 1;

  if ( ( m = /^(\s*\n)/.exec(input) ) != null ) {
    // skip (but count) leading blank lines
    line_no += count_lines( m[0] );
    re.lastIndex = m[0].length;
  }

  while ( ( m = re.exec(input) ) !== null ) {
    if (m[2] == "\n#") {
      m[2] = "\n";
      re.lastIndex--;
    }
    blocks.push( mk_block( m[1], m[2], line_no ) );
    line_no += count_lines( m[0] );
  }

  return blocks;
};

/**
 *  Markdown#processBlock( block, next ) -> undefined | [ JsonML, ... ]
 *  - block (String): the block to process
 *  - next (Array): the following blocks
 *
 * Process `block` and return an array of JsonML nodes representing `block`.
 *
 * It does this by asking each block level function in the dialect to process
 * the block until one can. Succesful handling is indicated by returning an
 * array (with zero or more JsonML nodes), failure by a false value.
 *
 * Blocks handlers are responsible for calling [[Markdown#processInline]]
 * themselves as appropriate.
 *
 * If the blocks were split incorrectly or adjacent blocks need collapsing you
 * can adjust `next` in place using shift/splice etc.
 *
 * If any of this default behaviour is not right for the dialect, you can
 * define a `__call__` method on the dialect that will get invoked to handle
 * the block processing.
 */
Markdown.prototype.processBlock = function processBlock( block, next ) {
  var cbs = this.dialect.block,
      ord = cbs.__order__;

  if ( "__call__" in cbs ) {
    return cbs.__call__.call(this, block, next);
  }

  for ( var i = 0; i < ord.length; i++ ) {
    //D:this.debug( "Testing", ord[i] );
    var res = cbs[ ord[i] ].call( this, block, next );
    if ( res ) {
      //D:this.debug("  matched");
      if ( !isArray(res) || ( res.length > 0 && !( isArray(res[0]) ) ) )
        this.debug(ord[i], "didn't return a proper array");
      //D:this.debug( "" );
      return res;
    }
  }

  // Uhoh! no match! Should we throw an error?
  return [];
};

Markdown.prototype.processInline = function processInline( block ) {
  return this.dialect.inline.__call__.call( this, String( block ) );
};

/**
 *  Markdown#toTree( source ) -> JsonML
 *  - source (String): markdown source to parse
 *
 *  Parse `source` into a JsonML tree representing the markdown document.
 **/
// custom_tree means set this.tree to `custom_tree` and restore old value on return
Markdown.prototype.toTree = function toTree( source, custom_root ) {
  var blocks = source instanceof Array ? source : this.split_blocks( source );

  // Make tree a member variable so its easier to mess with in extensions
  var old_tree = this.tree;
  try {
    this.tree = custom_root || this.tree || [ "markdown" ];

    blocks:
    while ( blocks.length ) {
      var b = this.processBlock( blocks.shift(), blocks );

      // Reference blocks and the like won't return any content
      if ( !b.length ) continue blocks;

      this.tree.push.apply( this.tree, b );
    }
    return this.tree;
  }
  finally {
    if ( custom_root ) {
      this.tree = old_tree;
    }
  }
};

// Noop by default
Markdown.prototype.debug = function () {
  var args = Array.prototype.slice.call( arguments);
  args.unshift(this.debug_indent);
  if ( typeof print !== "undefined" )
      print.apply( print, args );
  if ( typeof console !== "undefined" && typeof console.log !== "undefined" )
      console.log.apply( null, args );
}

Markdown.prototype.loop_re_over_block = function( re, block, cb ) {
  // Dont use /g regexps with this
  var m,
      b = block.valueOf();

  while ( b.length && (m = re.exec(b) ) != null ) {
    b = b.substr( m[0].length );
    cb.call(this, m);
  }
  return b;
};

/**
 * Markdown.dialects
 *
 * Namespace of built-in dialects.
 **/
Markdown.dialects = {};

/**
 * Markdown.dialects.Gruber
 *
 * The default dialect that follows the rules set out by John Gruber's
 * markdown.pl as closely as possible. Well actually we follow the behaviour of
 * that script which in some places is not exactly what the syntax web page
 * says.
 **/
Markdown.dialects.Gruber = {
  block: {
    atxHeader: function atxHeader( block, next ) {
      var m = block.match( /^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/ );

      if ( !m ) return undefined;

      var header = [ "header", { level: m[ 1 ].length } ];
      Array.prototype.push.apply(header, this.processInline(m[ 2 ]));

      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

      return [ header ];
    },

    setextHeader: function setextHeader( block, next ) {
      var m = block.match( /^(.*)\n([-=])\2\2+(?:\n|$)/ );

      if ( !m ) return undefined;

      var level = ( m[ 2 ] === "=" ) ? 1 : 2;
      var header = [ "header", { level : level }, m[ 1 ] ];

      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

      return [ header ];
    },

    code: function code( block, next ) {
      // |    Foo
      // |bar
      // should be a code block followed by a paragraph. Fun
      //
      // There might also be adjacent code block to merge.

      var ret = [],
          re = /^(?: {0,3}\t| {4})(.*)\n?/,
          lines;

      // 4 spaces + content
      if ( !block.match( re ) ) return undefined;

      block_search:
      do {
        // Now pull out the rest of the lines
        var b = this.loop_re_over_block(
                  re, block.valueOf(), function( m ) { ret.push( m[1] ); } );

        if ( b.length ) {
          // Case alluded to in first comment. push it back on as a new block
          next.unshift( mk_block(b, block.trailing) );
          break block_search;
        }
        else if ( next.length ) {
          // Check the next block - it might be code too
          if ( !next[0].match( re ) ) break block_search;

          // Pull how how many blanks lines follow - minus two to account for .join
          ret.push ( block.trailing.replace(/[^\n]/g, "").substring(2) );

          block = next.shift();
        }
        else {
          break block_search;
        }
      } while ( true );

      return [ [ "code_block", ret.join("\n") ] ];
    },

    horizRule: function horizRule( block, next ) {
      // this needs to find any hr in the block to handle abutting blocks
      var m = block.match( /^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/ );

      if ( !m ) {
        return undefined;
      }

      var jsonml = [ [ "hr" ] ];

      // if there's a leading abutting block, process it
      if ( m[ 1 ] ) {
        jsonml.unshift.apply( jsonml, this.processBlock( m[ 1 ], [] ) );
      }

      // if there's a trailing abutting block, stick it into next
      if ( m[ 3 ] ) {
        next.unshift( mk_block( m[ 3 ] ) );
      }

      return jsonml;
    },

    // There are two types of lists. Tight and loose. Tight lists have no whitespace
    // between the items (and result in text just in the <li>) and loose lists,
    // which have an empty line between list items, resulting in (one or more)
    // paragraphs inside the <li>.
    //
    // There are all sorts weird edge cases about the original markdown.pl's
    // handling of lists:
    //
    // * Nested lists are supposed to be indented by four chars per level. But
    //   if they aren't, you can get a nested list by indenting by less than
    //   four so long as the indent doesn't match an indent of an existing list
    //   item in the 'nest stack'.
    //
    // * The type of the list (bullet or number) is controlled just by the
    //    first item at the indent. Subsequent changes are ignored unless they
    //    are for nested lists
    //
    lists: (function( ) {
      // Use a closure to hide a few variables.
      var any_list = "[*+-]|\\d+\\.",
          bullet_list = /[*+-]/,
          number_list = /\d+\./,
          // Capture leading indent as it matters for determining nested lists.
          is_list_re = new RegExp( "^( {0,3})(" + any_list + ")[ \t]+" ),
          indent_re = "(?: {0,3}\\t| {4})";

      // TODO: Cache this regexp for certain depths.
      // Create a regexp suitable for matching an li for a given stack depth
      function regex_for_depth( depth ) {

        return new RegExp(
          // m[1] = indent, m[2] = list_type
          "(?:^(" + indent_re + "{0," + depth + "} {0,3})(" + any_list + ")\\s+)|" +
          // m[3] = cont
          "(^" + indent_re + "{0," + (depth-1) + "}[ ]{0,4})"
        );
      }
      function expand_tab( input ) {
        return input.replace( / {0,3}\t/g, "    " );
      }

      // Add inline content `inline` to `li`. inline comes from processInline
      // so is an array of content
      function add(li, loose, inline, nl) {
        if ( loose ) {
          li.push( [ "para" ].concat(inline) );
          return;
        }
        // Hmmm, should this be any block level element or just paras?
        var add_to = li[li.length -1] instanceof Array && li[li.length - 1][0] == "para"
                   ? li[li.length -1]
                   : li;

        // If there is already some content in this list, add the new line in
        if ( nl && li.length > 1 ) inline.unshift(nl);

        for ( var i = 0; i < inline.length; i++ ) {
          var what = inline[i],
              is_str = typeof what == "string";
          if ( is_str && add_to.length > 1 && typeof add_to[add_to.length-1] == "string" ) {
            add_to[ add_to.length-1 ] += what;
          }
          else {
            add_to.push( what );
          }
        }
      }

      // contained means have an indent greater than the current one. On
      // *every* line in the block
      function get_contained_blocks( depth, blocks ) {

        var re = new RegExp( "^(" + indent_re + "{" + depth + "}.*?\\n?)*$" ),
            replace = new RegExp("^" + indent_re + "{" + depth + "}", "gm"),
            ret = [];

        while ( blocks.length > 0 ) {
          if ( re.exec( blocks[0] ) ) {
            var b = blocks.shift(),
                // Now remove that indent
                x = b.replace( replace, "");

            ret.push( mk_block( x, b.trailing, b.lineNumber ) );
          }
          else {
            break;
          }
        }
        return ret;
      }

      // passed to stack.forEach to turn list items up the stack into paras
      function paragraphify(s, i, stack) {
        var list = s.list;
        var last_li = list[list.length-1];

        if ( last_li[1] instanceof Array && last_li[1][0] == "para" ) {
          return;
        }
        if ( i + 1 == stack.length ) {
          // Last stack frame
          // Keep the same array, but replace the contents
          last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ) );
        }
        else {
          var sublist = last_li.pop();
          last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ), sublist );
        }
      }

      // The matcher function
      return function( block, next ) {
        var m = block.match( is_list_re );
        if ( !m ) return undefined;

        function make_list( m ) {
          var list = bullet_list.exec( m[2] )
                   ? ["bulletlist"]
                   : ["numberlist"];

          stack.push( { list: list, indent: m[1] } );
          return list;
        }


        var stack = [], // Stack of lists for nesting.
            list = make_list( m ),
            last_li,
            loose = false,
            ret = [ stack[0].list ],
            i;

        // Loop to search over block looking for inner block elements and loose lists
        loose_search:
        while ( true ) {
          // Split into lines preserving new lines at end of line
          var lines = block.split( /(?=\n)/ );

          // We have to grab all lines for a li and call processInline on them
          // once as there are some inline things that can span lines.
          var li_accumulate = "";

          // Loop over the lines in this block looking for tight lists.
          tight_search:
          for ( var line_no = 0; line_no < lines.length; line_no++ ) {
            var nl = "",
                l = lines[line_no].replace(/^\n/, function(n) { nl = n; return ""; });

            // TODO: really should cache this
            var line_re = regex_for_depth( stack.length );

            m = l.match( line_re );
            //print( "line:", uneval(l), "\nline match:", uneval(m) );

            // We have a list item
            if ( m[1] !== undefined ) {
              // Process the previous list item, if any
              if ( li_accumulate.length ) {
                add( last_li, loose, this.processInline( li_accumulate ), nl );
                // Loose mode will have been dealt with. Reset it
                loose = false;
                li_accumulate = "";
              }

              m[1] = expand_tab( m[1] );
              var wanted_depth = Math.floor(m[1].length/4)+1;
              //print( "want:", wanted_depth, "stack:", stack.length);
              if ( wanted_depth > stack.length ) {
                // Deep enough for a nested list outright
                //print ( "new nested list" );
                list = make_list( m );
                last_li.push( list );
                last_li = list[1] = [ "listitem" ];
              }
              else {
                // We aren't deep enough to be strictly a new level. This is
                // where Md.pl goes nuts. If the indent matches a level in the
                // stack, put it there, else put it one deeper then the
                // wanted_depth deserves.
                var found = false;
                for ( i = 0; i < stack.length; i++ ) {
                  if ( stack[ i ].indent != m[1] ) continue;
                  list = stack[ i ].list;
                  stack.splice( i+1, stack.length - (i+1) );
                  found = true;
                  break;
                }

                if (!found) {
                  //print("not found. l:", uneval(l));
                  wanted_depth++;
                  if ( wanted_depth <= stack.length ) {
                    stack.splice(wanted_depth, stack.length - wanted_depth);
                    //print("Desired depth now", wanted_depth, "stack:", stack.length);
                    list = stack[wanted_depth-1].list;
                    //print("list:", uneval(list) );
                  }
                  else {
                    //print ("made new stack for messy indent");
                    list = make_list(m);
                    last_li.push(list);
                  }
                }

                //print( uneval(list), "last", list === stack[stack.length-1].list );
                last_li = [ "listitem" ];
                list.push(last_li);
              } // end depth of shenegains
              nl = "";
            }

            // Add content
            if ( l.length > m[0].length ) {
              li_accumulate += nl + l.substr( m[0].length );
            }
          } // tight_search

          if ( li_accumulate.length ) {
            add( last_li, loose, this.processInline( li_accumulate ), nl );
            // Loose mode will have been dealt with. Reset it
            loose = false;
            li_accumulate = "";
          }

          // Look at the next block - we might have a loose list. Or an extra
          // paragraph for the current li
          var contained = get_contained_blocks( stack.length, next );

          // Deal with code blocks or properly nested lists
          if ( contained.length > 0 ) {
            // Make sure all listitems up the stack are paragraphs
            forEach( stack, paragraphify, this);

            last_li.push.apply( last_li, this.toTree( contained, [] ) );
          }

          var next_block = next[0] && next[0].valueOf() || "";

          if ( next_block.match(is_list_re) || next_block.match( /^ / ) ) {
            block = next.shift();

            // Check for an HR following a list: features/lists/hr_abutting
            var hr = this.dialect.block.horizRule( block, next );

            if ( hr ) {
              ret.push.apply(ret, hr);
              break;
            }

            // Make sure all listitems up the stack are paragraphs
            forEach( stack, paragraphify, this);

            loose = true;
            continue loose_search;
          }
          break;
        } // loose_search

        return ret;
      };
    })(),

    blockquote: function blockquote( block, next ) {
      if ( !block.match( /^>/m ) )
        return undefined;

      var jsonml = [];

      // separate out the leading abutting block, if any
      if ( block[ 0 ] != ">" ) {
        var lines = block.split( /\n/ ),
            prev = [];

        // keep shifting lines until you find a crotchet
        while ( lines.length && lines[ 0 ][ 0 ] != ">" ) {
            prev.push( lines.shift() );
        }

        // reassemble!
        block = lines.join( "\n" );
        jsonml.push.apply( jsonml, this.processBlock( prev.join( "\n" ), [] ) );
      }

      // if the next block is also a blockquote merge it in
      while ( next.length && next[ 0 ][ 0 ] == ">" ) {
        var b = next.shift();
        block = new String(block + block.trailing + b);
        block.trailing = b.trailing;
      }

      // Strip off the leading "> " and re-process as a block.
      var input = block.replace( /^> ?/gm, "" ),
          old_tree = this.tree,
          processedBlock = this.toTree( input, [ "blockquote" ] ),
          attr = extract_attr( processedBlock );

      // If any link references were found get rid of them
      if ( attr && attr.references ) {
        delete attr.references;
        // And then remove the attribute object if it's empty
        if ( isEmpty( attr ) ) {
          processedBlock.splice( 1, 1 );
        }
      }

      jsonml.push( processedBlock );
      return jsonml;
    },

    referenceDefn: function referenceDefn( block, next) {
      var re = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
      // interesting matches are [ , ref_id, url, , title, title ]

      if ( !block.match(re) )
        return undefined;

      // make an attribute node if it doesn't exist
      if ( !extract_attr( this.tree ) ) {
        this.tree.splice( 1, 0, {} );
      }

      var attrs = extract_attr( this.tree );

      // make a references hash if it doesn't exist
      if ( attrs.references === undefined ) {
        attrs.references = {};
      }

      var b = this.loop_re_over_block(re, block, function( m ) {

        if ( m[2] && m[2][0] == "<" && m[2][m[2].length-1] == ">" )
          m[2] = m[2].substring( 1, m[2].length - 1 );

        var ref = attrs.references[ m[1].toLowerCase() ] = {
          href: m[2]
        };

        if ( m[4] !== undefined )
          ref.title = m[4];
        else if ( m[5] !== undefined )
          ref.title = m[5];

      } );

      if ( b.length )
        next.unshift( mk_block( b, block.trailing ) );

      return [];
    },

    para: function para( block, next ) {
      // everything's a para!
      return [ ["para"].concat( this.processInline( block ) ) ];
    }
  }
};

Markdown.dialects.Gruber.inline = {

    __oneElement__: function oneElement( text, patterns_or_re, previous_nodes ) {
      var m,
          res,
          lastIndex = 0;

      patterns_or_re = patterns_or_re || this.dialect.inline.__patterns__;
      var re = new RegExp( "([\\s\\S]*?)(" + (patterns_or_re.source || patterns_or_re) + ")" );

      m = re.exec( text );
      if (!m) {
        // Just boring text
        return [ text.length, text ];
      }
      else if ( m[1] ) {
        // Some un-interesting text matched. Return that first
        return [ m[1].length, m[1] ];
      }

      var res;
      if ( m[2] in this.dialect.inline ) {
        res = this.dialect.inline[ m[2] ].call(
                  this,
                  text.substr( m.index ), m, previous_nodes || [] );
      }
      // Default for now to make dev easier. just slurp special and output it.
      res = res || [ m[2].length, m[2] ];
      return res;
    },

    __call__: function inline( text, patterns ) {

      var out = [],
          res;

      function add(x) {
        //D:self.debug("  adding output", uneval(x));
        if ( typeof x == "string" && typeof out[out.length-1] == "string" )
          out[ out.length-1 ] += x;
        else
          out.push(x);
      }

      while ( text.length > 0 ) {
        res = this.dialect.inline.__oneElement__.call(this, text, patterns, out );
        text = text.substr( res.shift() );
        forEach(res, add )
      }

      return out;
    },

    // These characters are intersting elsewhere, so have rules for them so that
    // chunks of plain text blocks don't include them
    "]": function () {},
    "}": function () {},

    "\\": function escaped( text ) {
      // [ length of input processed, node/children to add... ]
      // Only esacape: \ ` * _ { } [ ] ( ) # * + - . !
      if ( text.match( /^\\[\\`\*_{}\[\]()#\+.!\-]/ ) )
        return [ 2, text.charAt( 1 ) ];
      else
        // Not an esacpe
        return [ 1, "\\" ];
    },

    "![": function image( text ) {

      // Unlike images, alt text is plain text only. no other elements are
      // allowed in there

      // ![Alt text](/path/to/img.jpg "Optional title")
      //      1          2            3       4         <--- captures
      var m = text.match( /^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/ );

      if ( m ) {
        if ( m[2] && m[2][0] == "<" && m[2][m[2].length-1] == ">" )
          m[2] = m[2].substring( 1, m[2].length - 1 );

        m[2] = this.dialect.inline.__call__.call( this, m[2], /\\/ )[0];

        var attrs = { alt: m[1], href: m[2] || "" };
        if ( m[4] !== undefined)
          attrs.title = m[4];

        return [ m[0].length, [ "img", attrs ] ];
      }

      // ![Alt text][id]
      m = text.match( /^!\[(.*?)\][ \t]*\[(.*?)\]/ );

      if ( m ) {
        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion
        return [ m[0].length, [ "img_ref", { alt: m[1], ref: m[2].toLowerCase(), original: m[0] } ] ];
      }

      // Just consume the '!['
      return [ 2, "![" ];
    },

    "[": function link( text ) {

      var orig = String(text);
      // Inline content is possible inside `link text`
      var res = Markdown.DialectHelpers.inline_until_char.call( this, text.substr(1), "]" );

      // No closing ']' found. Just consume the [
      if ( !res ) return [ 1, "[" ];

      var consumed = 1 + res[ 0 ],
          children = res[ 1 ],
          link,
          attrs;

      // At this point the first [...] has been parsed. See what follows to find
      // out which kind of link we are (reference or direct url)
      text = text.substr( consumed );

      // [link text](/path/to/img.jpg "Optional title")
      //                 1            2       3         <--- captures
      // This will capture up to the last paren in the block. We then pull
      // back based on if there a matching ones in the url
      //    ([here](/url/(test))
      // The parens have to be balanced
      var m = text.match( /^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/ );
      if ( m ) {
        var url = m[1];
        consumed += m[0].length;

        if ( url && url[0] == "<" && url[url.length-1] == ">" )
          url = url.substring( 1, url.length - 1 );

        // If there is a title we don't have to worry about parens in the url
        if ( !m[3] ) {
          var open_parens = 1; // One open that isn't in the capture
          for ( var len = 0; len < url.length; len++ ) {
            switch ( url[len] ) {
            case "(":
              open_parens++;
              break;
            case ")":
              if ( --open_parens == 0) {
                consumed -= url.length - len;
                url = url.substring(0, len);
              }
              break;
            }
          }
        }

        // Process escapes only
        url = this.dialect.inline.__call__.call( this, url, /\\/ )[0];

        attrs = { href: url || "" };
        if ( m[3] !== undefined)
          attrs.title = m[3];

        link = [ "link", attrs ].concat( children );
        return [ consumed, link ];
      }

      // [Alt text][id]
      // [Alt text] [id]
      m = text.match( /^\s*\[(.*?)\]/ );

      if ( m ) {

        consumed += m[ 0 ].length;

        // [links][] uses links as its reference
        attrs = { ref: ( m[ 1 ] || String(children) ).toLowerCase(),  original: orig.substr( 0, consumed ) };

        link = [ "link_ref", attrs ].concat( children );

        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion.
        // Store the original so that conversion can revert if the ref isn't found.
        return [ consumed, link ];
      }

      // [id]
      // Only if id is plain (no formatting.)
      if ( children.length == 1 && typeof children[0] == "string" ) {

        attrs = { ref: children[0].toLowerCase(),  original: orig.substr( 0, consumed ) };
        link = [ "link_ref", attrs, children[0] ];
        return [ consumed, link ];
      }

      // Just consume the "["
      return [ 1, "[" ];
    },


    "<": function autoLink( text ) {
      var m;

      if ( ( m = text.match( /^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/ ) ) != null ) {
        if ( m[3] ) {
          return [ m[0].length, [ "link", { href: "mailto:" + m[3] }, m[3] ] ];

        }
        else if ( m[2] == "mailto" ) {
          return [ m[0].length, [ "link", { href: m[1] }, m[1].substr("mailto:".length ) ] ];
        }
        else
          return [ m[0].length, [ "link", { href: m[1] }, m[1] ] ];
      }

      return [ 1, "<" ];
    },

    "`": function inlineCode( text ) {
      // Inline code block. as many backticks as you like to start it
      // Always skip over the opening ticks.
      var m = text.match( /(`+)(([\s\S]*?)\1)/ );

      if ( m && m[2] )
        return [ m[1].length + m[2].length, [ "inlinecode", m[3] ] ];
      else {
        // TODO: No matching end code found - warn!
        return [ 1, "`" ];
      }
    },

    "  \n": function lineBreak( text ) {
      return [ 3, [ "linebreak" ] ];
    }

};

// Meta Helper/generator method for em and strong handling
function strong_em( tag, md ) {

  var state_slot = tag + "_state",
      other_slot = tag == "strong" ? "em_state" : "strong_state";

  function CloseTag(len) {
    this.len_after = len;
    this.name = "close_" + md;
  }

  return function ( text, orig_match ) {

    if ( this[state_slot][0] == md ) {
      // Most recent em is of this type
      //D:this.debug("closing", md);
      this[state_slot].shift();

      // "Consume" everything to go back to the recrusion in the else-block below
      return[ text.length, new CloseTag(text.length-md.length) ];
    }
    else {
      // Store a clone of the em/strong states
      var other = this[other_slot].slice(),
          state = this[state_slot].slice();

      this[state_slot].unshift(md);

      //D:this.debug_indent += "  ";

      // Recurse
      var res = this.processInline( text.substr( md.length ) );
      //D:this.debug_indent = this.debug_indent.substr(2);

      var last = res[res.length - 1];

      //D:this.debug("processInline from", tag + ": ", uneval( res ) );

      var check = this[state_slot].shift();
      if ( last instanceof CloseTag ) {
        res.pop();
        // We matched! Huzzah.
        var consumed = text.length - last.len_after;
        return [ consumed, [ tag ].concat(res) ];
      }
      else {
        // Restore the state of the other kind. We might have mistakenly closed it.
        this[other_slot] = other;
        this[state_slot] = state;

        // We can't reuse the processed result as it could have wrong parsing contexts in it.
        return [ md.length, md ];
      }
    }
  }; // End returned function
}

Markdown.dialects.Gruber.inline["**"] = strong_em("strong", "**");
Markdown.dialects.Gruber.inline["__"] = strong_em("strong", "__");
Markdown.dialects.Gruber.inline["*"]  = strong_em("em", "*");
Markdown.dialects.Gruber.inline["_"]  = strong_em("em", "_");


// Build default order from insertion order.
Markdown.buildBlockOrder = function(d) {
  var ord = [];
  for ( var i in d ) {
    if ( i == "__order__" || i == "__call__" ) continue;
    ord.push( i );
  }
  d.__order__ = ord;
};

// Build patterns for inline matcher
Markdown.buildInlinePatterns = function(d) {
  var patterns = [];

  for ( var i in d ) {
    // __foo__ is reserved and not a pattern
    if ( i.match( /^__.*__$/) ) continue;
    var l = i.replace( /([\\.*+?|()\[\]{}])/g, "\\$1" )
             .replace( /\n/, "\\n" );
    patterns.push( i.length == 1 ? l : "(?:" + l + ")" );
  }

  patterns = patterns.join("|");
  d.__patterns__ = patterns;
  //print("patterns:", uneval( patterns ) );

  var fn = d.__call__;
  d.__call__ = function(text, pattern) {
    if ( pattern != undefined ) {
      return fn.call(this, text, pattern);
    }
    else
    {
      return fn.call(this, text, patterns);
    }
  };
};

Markdown.DialectHelpers = {};
Markdown.DialectHelpers.inline_until_char = function( text, want ) {
  var consumed = 0,
      nodes = [];

  while ( true ) {
    if ( text.charAt( consumed ) == want ) {
      // Found the character we were looking for
      consumed++;
      return [ consumed, nodes ];
    }

    if ( consumed >= text.length ) {
      // No closing char found. Abort.
      return null;
    }

    var res = this.dialect.inline.__oneElement__.call(this, text.substr( consumed ) );
    consumed += res[ 0 ];
    // Add any returned nodes.
    nodes.push.apply( nodes, res.slice( 1 ) );
  }
}

// Helper function to make sub-classing a dialect easier
Markdown.subclassDialect = function( d ) {
  function Block() {}
  Block.prototype = d.block;
  function Inline() {}
  Inline.prototype = d.inline;

  return { block: new Block(), inline: new Inline() };
};

Markdown.buildBlockOrder ( Markdown.dialects.Gruber.block );
Markdown.buildInlinePatterns( Markdown.dialects.Gruber.inline );

Markdown.dialects.Maruku = Markdown.subclassDialect( Markdown.dialects.Gruber );

Markdown.dialects.Maruku.processMetaHash = function processMetaHash( meta_string ) {
  var meta = split_meta_hash( meta_string ),
      attr = {};

  for ( var i = 0; i < meta.length; ++i ) {
    // id: #foo
    if ( /^#/.test( meta[ i ] ) ) {
      attr.id = meta[ i ].substring( 1 );
    }
    // class: .foo
    else if ( /^\./.test( meta[ i ] ) ) {
      // if class already exists, append the new one
      if ( attr["class"] ) {
        attr["class"] = attr["class"] + meta[ i ].replace( /./, " " );
      }
      else {
        attr["class"] = meta[ i ].substring( 1 );
      }
    }
    // attribute: foo=bar
    else if ( /\=/.test( meta[ i ] ) ) {
      var s = meta[ i ].split( /\=/ );
      attr[ s[ 0 ] ] = s[ 1 ];
    }
  }

  return attr;
}

function split_meta_hash( meta_string ) {
  var meta = meta_string.split( "" ),
      parts = [ "" ],
      in_quotes = false;

  while ( meta.length ) {
    var letter = meta.shift();
    switch ( letter ) {
      case " " :
        // if we're in a quoted section, keep it
        if ( in_quotes ) {
          parts[ parts.length - 1 ] += letter;
        }
        // otherwise make a new part
        else {
          parts.push( "" );
        }
        break;
      case "'" :
      case '"' :
        // reverse the quotes and move straight on
        in_quotes = !in_quotes;
        break;
      case "\\" :
        // shift off the next letter to be used straight away.
        // it was escaped so we'll keep it whatever it is
        letter = meta.shift();
      default :
        parts[ parts.length - 1 ] += letter;
        break;
    }
  }

  return parts;
}

Markdown.dialects.Maruku.block.document_meta = function document_meta( block, next ) {
  // we're only interested in the first block
  if ( block.lineNumber > 1 ) return undefined;

  // document_meta blocks consist of one or more lines of `Key: Value\n`
  if ( ! block.match( /^(?:\w+:.*\n)*\w+:.*$/ ) ) return undefined;

  // make an attribute node if it doesn't exist
  if ( !extract_attr( this.tree ) ) {
    this.tree.splice( 1, 0, {} );
  }

  var pairs = block.split( /\n/ );
  for ( p in pairs ) {
    var m = pairs[ p ].match( /(\w+):\s*(.*)$/ ),
        key = m[ 1 ].toLowerCase(),
        value = m[ 2 ];

    this.tree[ 1 ][ key ] = value;
  }

  // document_meta produces no content!
  return [];
};

Markdown.dialects.Maruku.block.block_meta = function block_meta( block, next ) {
  // check if the last line of the block is an meta hash
  var m = block.match( /(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/ );
  if ( !m ) return undefined;

  // process the meta hash
  var attr = this.dialect.processMetaHash( m[ 2 ] );

  var hash;

  // if we matched ^ then we need to apply meta to the previous block
  if ( m[ 1 ] === "" ) {
    var node = this.tree[ this.tree.length - 1 ];
    hash = extract_attr( node );

    // if the node is a string (rather than JsonML), bail
    if ( typeof node === "string" ) return undefined;

    // create the attribute hash if it doesn't exist
    if ( !hash ) {
      hash = {};
      node.splice( 1, 0, hash );
    }

    // add the attributes in
    for ( a in attr ) {
      hash[ a ] = attr[ a ];
    }

    // return nothing so the meta hash is removed
    return [];
  }

  // pull the meta hash off the block and process what's left
  var b = block.replace( /\n.*$/, "" ),
      result = this.processBlock( b, [] );

  // get or make the attributes hash
  hash = extract_attr( result[ 0 ] );
  if ( !hash ) {
    hash = {};
    result[ 0 ].splice( 1, 0, hash );
  }

  // attach the attributes to the block
  for ( a in attr ) {
    hash[ a ] = attr[ a ];
  }

  return result;
};

Markdown.dialects.Maruku.block.definition_list = function definition_list( block, next ) {
  // one or more terms followed by one or more definitions, in a single block
  var tight = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
      list = [ "dl" ],
      i;

  // see if we're dealing with a tight or loose block
  if ( ( m = block.match( tight ) ) ) {
    // pull subsequent tight DL blocks out of `next`
    var blocks = [ block ];
    while ( next.length && tight.exec( next[ 0 ] ) ) {
      blocks.push( next.shift() );
    }

    for ( var b = 0; b < blocks.length; ++b ) {
      var m = blocks[ b ].match( tight ),
          terms = m[ 1 ].replace( /\n$/, "" ).split( /\n/ ),
          defns = m[ 2 ].split( /\n:\s+/ );

      // print( uneval( m ) );

      for ( i = 0; i < terms.length; ++i ) {
        list.push( [ "dt", terms[ i ] ] );
      }

      for ( i = 0; i < defns.length; ++i ) {
        // run inline processing over the definition
        list.push( [ "dd" ].concat( this.processInline( defns[ i ].replace( /(\n)\s+/, "$1" ) ) ) );
      }
    }
  }
  else {
    return undefined;
  }

  return [ list ];
};

Markdown.dialects.Maruku.inline[ "{:" ] = function inline_meta( text, matches, out ) {
  if ( !out.length ) {
    return [ 2, "{:" ];
  }

  // get the preceeding element
  var before = out[ out.length - 1 ];

  if ( typeof before === "string" ) {
    return [ 2, "{:" ];
  }

  // match a meta hash
  var m = text.match( /^\{:\s*((?:\\\}|[^\}])*)\s*\}/ );

  // no match, false alarm
  if ( !m ) {
    return [ 2, "{:" ];
  }

  // attach the attributes to the preceeding element
  var meta = this.dialect.processMetaHash( m[ 1 ] ),
      attr = extract_attr( before );

  if ( !attr ) {
    attr = {};
    before.splice( 1, 0, attr );
  }

  for ( var k in meta ) {
    attr[ k ] = meta[ k ];
  }

  // cut out the string and replace it with nothing
  return [ m[ 0 ].length, "" ];
};

Markdown.buildBlockOrder ( Markdown.dialects.Maruku.block );
Markdown.buildInlinePatterns( Markdown.dialects.Maruku.inline );

var isArray = Array.isArray || function(obj) {
  return Object.prototype.toString.call(obj) == "[object Array]";
};

var forEach;
// Don't mess with Array.prototype. Its not friendly
if ( Array.prototype.forEach ) {
  forEach = function( arr, cb, thisp ) {
    return arr.forEach( cb, thisp );
  };
}
else {
  forEach = function(arr, cb, thisp) {
    for (var i = 0; i < arr.length; i++) {
      cb.call(thisp || arr, arr[i], i, arr);
    }
  }
}

var isEmpty = function( obj ) {
  for ( var key in obj ) {
    if ( hasOwnProperty.call( obj, key ) ) {
      return false;
    }
  }

  return true;
}

function extract_attr( jsonml ) {
  return isArray(jsonml)
      && jsonml.length > 1
      && typeof jsonml[ 1 ] === "object"
      && !( isArray(jsonml[ 1 ]) )
      ? jsonml[ 1 ]
      : undefined;
}



/**
 *  renderJsonML( jsonml[, options] ) -> String
 *  - jsonml (Array): JsonML array to render to XML
 *  - options (Object): options
 *
 *  Converts the given JsonML into well-formed XML.
 *
 *  The options currently understood are:
 *
 *  - root (Boolean): wether or not the root node should be included in the
 *    output, or just its children. The default `false` is to not include the
 *    root itself.
 */
expose.renderJsonML = function( jsonml, options ) {
  options = options || {};
  // include the root element in the rendered output?
  options.root = options.root || false;

  var content = [];

  if ( options.root ) {
    content.push( render_tree( jsonml ) );
  }
  else {
    jsonml.shift(); // get rid of the tag
    if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
      jsonml.shift(); // get rid of the attributes
    }

    while ( jsonml.length ) {
      content.push( render_tree( jsonml.shift() ) );
    }
  }

  return content.join( "\n\n" );
};

function escapeHTML( text ) {
  return text.replace( /&/g, "&amp;" )
             .replace( /</g, "&lt;" )
             .replace( />/g, "&gt;" )
             .replace( /"/g, "&quot;" )
             .replace( /'/g, "&#39;" );
}

function render_tree( jsonml ) {
  // basic case
  if ( typeof jsonml === "string" ) {
    return escapeHTML( jsonml );
  }

  var tag = jsonml.shift(),
      attributes = {},
      content = [];

  if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
    attributes = jsonml.shift();
  }

  while ( jsonml.length ) {
    content.push( render_tree( jsonml.shift() ) );
  }

  var tag_attrs = "";
  for ( var a in attributes ) {
    tag_attrs += " " + a + '="' + escapeHTML( attributes[ a ] ) + '"';
  }

  // be careful about adding whitespace here for inline elements
  if ( tag == "img" || tag == "br" || tag == "hr" ) {
    return "<"+ tag + tag_attrs + "/>";
  }
  else {
    return "<"+ tag + tag_attrs + ">" + content.join( "" ) + "</" + tag + ">";
  }
}

function convert_tree_to_html( tree, references, options ) {
  var i;
  options = options || {};

  // shallow clone
  var jsonml = tree.slice( 0 );

  if ( typeof options.preprocessTreeNode === "function" ) {
      jsonml = options.preprocessTreeNode(jsonml, references);
  }

  // Clone attributes if they exist
  var attrs = extract_attr( jsonml );
  if ( attrs ) {
    jsonml[ 1 ] = {};
    for ( i in attrs ) {
      jsonml[ 1 ][ i ] = attrs[ i ];
    }
    attrs = jsonml[ 1 ];
  }

  // basic case
  if ( typeof jsonml === "string" ) {
    return jsonml;
  }

  // convert this node
  switch ( jsonml[ 0 ] ) {
    case "header":
      jsonml[ 0 ] = "h" + jsonml[ 1 ].level;
      delete jsonml[ 1 ].level;
      break;
    case "bulletlist":
      jsonml[ 0 ] = "ul";
      break;
    case "numberlist":
      jsonml[ 0 ] = "ol";
      break;
    case "listitem":
      jsonml[ 0 ] = "li";
      break;
    case "para":
      jsonml[ 0 ] = "p";
      break;
    case "markdown":
      jsonml[ 0 ] = "html";
      if ( attrs ) delete attrs.references;
      break;
    case "code_block":
      jsonml[ 0 ] = "pre";
      i = attrs ? 2 : 1;
      var code = [ "code" ];
      code.push.apply( code, jsonml.splice( i, jsonml.length - i ) );
      jsonml[ i ] = code;
      break;
    case "inlinecode":
      jsonml[ 0 ] = "code";
      break;
    case "img":
      jsonml[ 1 ].src = jsonml[ 1 ].href;
      delete jsonml[ 1 ].href;
      break;
    case "linebreak":
      jsonml[ 0 ] = "br";
    break;
    case "link":
      jsonml[ 0 ] = "a";
      break;
    case "link_ref":
      jsonml[ 0 ] = "a";

      // grab this ref and clean up the attribute node
      var ref = references[ attrs.ref ];

      // if the reference exists, make the link
      if ( ref ) {
        delete attrs.ref;

        // add in the href and title, if present
        attrs.href = ref.href;
        if ( ref.title ) {
          attrs.title = ref.title;
        }

        // get rid of the unneeded original text
        delete attrs.original;
      }
      // the reference doesn't exist, so revert to plain text
      else {
        return attrs.original;
      }
      break;
    case "img_ref":
      jsonml[ 0 ] = "img";

      // grab this ref and clean up the attribute node
      var ref = references[ attrs.ref ];

      // if the reference exists, make the link
      if ( ref ) {
        delete attrs.ref;

        // add in the href and title, if present
        attrs.src = ref.href;
        if ( ref.title ) {
          attrs.title = ref.title;
        }

        // get rid of the unneeded original text
        delete attrs.original;
      }
      // the reference doesn't exist, so revert to plain text
      else {
        return attrs.original;
      }
      break;
  }

  // convert all the children
  i = 1;

  // deal with the attribute node, if it exists
  if ( attrs ) {
    // if there are keys, skip over it
    for ( var key in jsonml[ 1 ] ) {
      i = 2;
    }
    // if there aren't, remove it
    if ( i === 1 ) {
      jsonml.splice( i, 1 );
    }
  }

  for ( ; i < jsonml.length; ++i ) {
    jsonml[ i ] = convert_tree_to_html( jsonml[ i ], references, options );
  }

  return jsonml;
}


// merges adjacent text nodes into a single node
function merge_text_nodes( jsonml ) {
  // skip the tag name and attribute hash
  var i = extract_attr( jsonml ) ? 2 : 1;

  while ( i < jsonml.length ) {
    // if it's a string check the next item too
    if ( typeof jsonml[ i ] === "string" ) {
      if ( i + 1 < jsonml.length && typeof jsonml[ i + 1 ] === "string" ) {
        // merge the second string into the first and remove it
        jsonml[ i ] += jsonml.splice( i + 1, 1 )[ 0 ];
      }
      else {
        ++i;
      }
    }
    // if it's not a string recurse
    else {
      merge_text_nodes( jsonml[ i ] );
      ++i;
    }
  }
}

} )( (function() {
  if ( typeof exports === "undefined" ) {
    window.markdown = {};
    return window.markdown;
  }
  else {
    return exports;
  }
} )() );; /* ../prototype/js/glasswing.js */ var glasswing = {
	err : function(msg) {
		if (true) { console.log(msg); }
	},
	notif : function(msg)  {
		if (false) { console.log(msg); }
	},
	cache : {},
	views : { guide : {} }, models : {guide : {}}, collections : {guide : {}},
	template : function(path) {
		if (path.split('.').length < 2) { path += '.html'; }
		if (! this.cache[path]) {
			this.cache[path] = $.ajax({url: 'js/templates/'+path+"?bust="+(new Date).getTime(), async: false}).responseText;
		}
		return this.cache[path];
	}
};
window['data'] = function(el,key) {
	return $(el).data(key);
};
; /* ../js/lib/utils.js */ if (!window.glasswing) { var glasswing = {}; }
glasswing.randomDate = function (start, end) {
    if (!start) { start = new Date(2008, 0, 1); }
    if (!end) { end = new Date(); }

    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

String.prototype.toURL = function () { return this.split(' ').join('-').toLowerCase(); }; /* ../prototype/js/views/abstract.js */ (function($){
	glasswing.views.abstract = Backbone.View.extend({
		tagName : 'div',
		initialize : function(attributes) {
			// alert(this.template);


			if (attributes) {
				this.tabManager = attributes.tabManager;
			}


			//if (! this.model) { throw("You must specify a model"); }

			if (this.$el) { this.$el.data('view',this); }

			this.name = 'Default';
			this.url = '';
			return this;
		},
		setOptions : function(options) {
			// fill me out
		},
		render : function() {
			this.delegateEvents();
			return this;
		},
		afterRender : function() {

		},
		getTemplate : function(callback) {
			if (this.template_html) {

				var self = this;
				$.get('js/templates/'+self.template,function(data){
					self.template = data;
					callback();
				});
			}
		}

	});

})(jQuery);
; /* ../prototype/js/models/abstract.js */ glasswing.models.abstract = Backbone.Model.extend({
	initialize : function(attributes) {
		if (attributes && attributes['view']) {
			this.view = attributes.view;
		}
	}
});; /* ../prototype/js/views/worklist/procedure.js */ (function($){
	$.fn.countUp = function() {
		return $(this).each(function(){
			var div = $(this);
			var span = div.find('span');
			var timestamp = span.attr('rel');
			// var end_time = new Date(timestamp);

			var interval = 200;

			// var pluralize(num, label) {
			// 	return (num==1) ? label : label + 's';
			// }


			var count = function() {
				var difference = Math.ceil(((new Date()).getTime() - timestamp) / 1000);
				if (difference < 60) {
					span.html(difference+'"');

				} else if (difference < 60*60) {
					var minutes = Math.floor(difference / 60);
					span.html(minutes + '\' ' + (difference%60)+'"');
				}

				setTimeout(count,interval);
			}

			count();
		});
	}
	glasswing.views.procedure = glasswing.views.abstract.extend({
		events : {
			"click" : "click",
			"mouseover *" : "mouseover",
			"mouseout *" : "mouseout",
		},

		initialize : function(attributes) {

			this.model = attributes.model;
			this.layout = 'table';
			this.name = this.model.get('name');


			//this.render(true);
		},
		render : function() {
			var self = this;
			// if (force || this.model.hasChanged()) {
			// 	// we should cache rendering and only return it on damage to the model

			var opts = {
				id : this.model.get('id'),
				accession_id : Math.round(Math.random()*1000)+1000,
				attachments : this.model.get('attachments'),
				dob : this.model.get('patient').getDob(),
				first : this.model.get('patient').get('first'),
				last : this.model.get('patient').get('last'),
				gender : (this.model.get('patient').get('gender') == 'f') ? 'FEMALE' : 'MALE',
				patient_id : this.model.get('patient').get('id'),
				patient_risks : this.model.get('patient').get('risks'),
				procedure_name : this.model.getName(),
				priority : this.model.get('priority'),
				procedure_class : this.model.get('procedure_class'),
				report_status : this.model.get('report_status'),
				procedure_status : this.model.get('procedure_status'),
				referring_physician : this.model.get('referring_physician'),
				hospital_name : this.model.get('hospital_name'),
				clinical_indication : this.model.get('clinical_indication'),
				end_time : this.model.getDate('end_time'),
				end_timestamp : this.model.get('end_time').getTime(),
				stat : ( (this.model.isStat()) ? 'stat' : null  ),
				lock : this.model.get('lock'),
				ready : this.model.get('ready')
			};

			this['$table'] = $(_.template(glasswing.template('worklist/row'),opts));
			this['$table'].data('view',this);
			this['$card'] = $(_.template(glasswing.template('worklist/card'),opts));
			this['$card'].data('view',this);
			this['$grid'] = $(_.template(glasswing.template('worklist/grid-row'),opts));
			this['$grid'].data('view',this);


			this.$el = this['$'+this.layout];

			this.$el.data('view',this);

			this.delegateEvents();

			this.$('.stat').countUp();

			this.$('.queue').click(function(e){
				e.stopPropagation();
				self.model.toggle('in-queue');
			});
			this.change('in-queue');
			return this;
		},
		change : function(key) {
			switch(key) {
				case 'in-queue' :
					if (this.model.get(key)) {
						this.$el.addClass(key);
						this.$('.queue').attr('alt','You have ______ (parked / queued) this case. Go to ______ (folders location) to access all _____ (parked / queued) cases. ');
					} else {
						this.$el.removeClass(key);
						this.$('.queue').attr('alt','Park or queue this case for later.');

					}
				break;
			}

		},
		click : function() {

			// var model = $(event.currentTarget).data('model');

			//this.layout = 'report';
			//if (! this.report) { this.report = new glasswing.views.report(this.model); }

			this.model.worklist.tabManager.showPage(this.getReport());

		},
		setLayout : function(layout) {
			this.layout = layout;
		},
		getReport : function() {
			if (! this.report) {
				this.report = new glasswing.views.report({model: this.model});
			}
			return this.report;
		},
		mouseover : function(event) {
			var el = $(event.currentTarget);
			if (el.attr('class')) {
				var clss = el.attr('class').replace('highlight','').trim();
				// console.log('add to: ' + clss);
				$('.'+clss).addClass('callout');
			}

		},
		mouseout : function() {
			$('.callout').removeClass('callout');
			// var el = $(event.currentTarget);
			// var clss = el.attr('class').replace('highlight','').trim();
			// console.log('remove from: ' + clss);
			// $('.'+clss).removeClass('highlight');
		}
		// getTemplate : function(callback) {
		// 	if (this.template_html) {

		// 		var self = this;
		// 		$.get('js/templates/'+self.template,function(data){
		// 			self.template = data;
		// 			callback();
		// 		});
		// 	}
		// }


	});

})(jQuery);
; /* ../prototype/js/models/caregiver.js */ glasswing.models.caregiver = glasswing.models.abstract.extend({
  	initialize : function(data) {

	},
	getName : function() {
		return this.get('first')+' '+this.get('last')
	}
});; /* ../prototype/js/models/notification.js */ glasswing.models.notification = glasswing.models.abstract.extend({
  	initialize : function(data) {

	},
});; /* ../prototype/js/models/prior.js */ glasswing.models.prior = glasswing.models.abstract.extend({
	initialize : function(attributes) {
		if (! this.get('relevant')) { this.set('relevant',false); }
	},
	getDate : function() {
		return this.get('date').getMonth()+'/'+this.get('date').getDate()+'/'+this.get('date').getFullYear();
	}

});; /* ../prototype/js/models/procedure.js */ glasswing.models.procedure = glasswing.models.abstract.extend({
	defaults : {
		// content : '',
		associated_page_view : 'report'
	},
	initialize : function(attributes) {

		if (! attributes || ! attributes.patient) {throw "No patient specified!";}
		this.view = new glasswing.views.procedure({model : this});


		// this.patient = options.patient;
		this.on("change", this.change, this);

		if (this.get('lock')===undefined) {
			this.set('lock',false);
		}
		if (this.get('ready')===undefined) {
			this.set('ready',true);
		}



		this.priors = new glasswing.collections.priors();

		var self = this;




		var number_of_priors = 5;
		var oldest_prior = new Date(2008,0,1);


		/** initialize priors **/
		var pa = new glasswing.collections.patients();
		var pr = new glasswing.collections.procedures();



		for (var i=0;i<attributes.priors.length;i++) {
			var caregivers = new glasswing.collections.caregivers();


			// var length = Math.round(Math.random()*2)+1;
			for (var j=0;j<1;j++) {

				var first = pa.getRandomIngredient('first');
				var last = pa.getRandomIngredient('last');
				caregivers.add(new glasswing.models.caregiver({
					role : 'Referring Physician',
					phone : '123-123-1234',
					pager :'123-123-1234',
					email : first.substring(0,1).toLowerCase()+last.toLowerCase()+'@'+pr.getRandomIngredient('hospital').toLowerCase()+'.com',
					date : new Date('6/5/2013'),
					first : first,
					last : last,
					backup : pa.getRandomIngredient('first') +' ' + pa.getRandomIngredient('last')
				}));

			}
			var prior_data = $.extend({caregivers : caregivers},attributes.priors[i]);
			// var prior = new glasswing.models.prior({caregivers : caregivers, date : glasswing.randomDate(oldest_prior, new Date()) });
			var prior = new glasswing.models.prior(prior_data);
			// if (Math.round(Math.random()*3) == 1) {
			// 	prior.set('relevant',true);
			// }
			self.priors.add(prior);
		}


		// console.log(attributes);
		// console.log('procedure-'+this.get('id')+'-inqueue');
		// console.log(localStorage['procedure-'+this.get('id')+'-inqueue']);

		_.each(['in-queue','in-folder'],function(key){
			if (localStorage['procedure-'+self.get('id')+'-'+key]) {
				self.toggle('in-queue',localStorage['procedure-'+self.get('id')+'-'+key]);
			}
		});



		this.priors.parent = this;

	},
	change : function(obj) {


		var self  = this;


		if (self.view.report) { // do we even have a report available?
			_.each(this.changedAttributes(),function(val,key){

				if (self.view.report.$el.is(":visible")) {
					self.view.report.notify({key : key, val : val});
				} else {
					self.view.report.addNotification({key : key, val : val});
				}
			});


			// tab manager needs to be notified. but if the tab is active, then do nothing.
			self.worklist.tabManager.notify(self.view.report, {}); // pass in an optional attributes array

		}

		_.each(obj.changed,function(val,key){

			self.view.change(key,val);
			if (self.view.hasOwnProperty('report')) {
				self.view.report.change(key,val);
			}

		});




	},
	toggle : function(key,val) {
		if (val) {
			this.set(key,val);
		} else {

			if (this.get(key)) {
				this.set(key,false);
			} else {
				this.set(key,true);
			}
		}
		localStorage['procedure-'+this.get('id')+'-'+key] = this.get(key);
	},

	// we overload our parent get function
	get: function (attr) {
		switch(attr) {
			case 'name' :
				return this.get('patient').getName();
			break;
			default :
	  			return Backbone.Model.prototype.get.call(this, attr);
			break;
		}

	},
	isStat : function() {

		return (this.get('priority') > 2) ? true : false;
	},
	getPriors : function() {
		// var priors = ;
		// return priors;
		return this.priors.models;
	},
	isFollowing : function() {
		return this.following;
	},
	follow : function() {
		this.following = true;
	},
	unfollow : function() {
		this.following = false;
	},
	getDate : function(key) {
		if (! key) { key = 'date';}
		return (this.get(key).getMonth()+1)+'/'+this.get(key).getDate()+'/'+this.get(key).getFullYear();
	},
	getName : function() {
		return this.get('procedure_type').toUpperCase() + ' '+this.get('body_part').toUpperCase();
	}

});; /* ../prototype/js/models/patient.js */ glasswing.models.patient = glasswing.models.abstract.extend({
	defaults : {
		first : "",
		last : ""
	// content : '',
	},
	initialize : function() {
		if (! this.get("first")) { throw("First name must be specified"); }
		if (! this.get("last")) { throw("Last name must be specified"); }

	},
	getName : function() {
		return (this.get("first") + " " + this.get("last")).trim();
	},
	getID : function() {
		return this.get('patient_id');
	},
	setID : function(patient_id) {
		if (! this.get('patient_id')) {
			this.set('patient_id',patient_id);
		}
	},
	getDob : function() {
		return this.get('dob').getMonth()+'/'+this.get('dob').getDate()+'/'+this.get('dob').getFullYear();
	}
});; /* ../prototype/js/models/worklist.js */ glasswing.models.worklist = glasswing.models.abstract.extend({

	defaults : {
		name : 'Worklist'
	},
	initialize : function(attributes) {
		this.view = attributes.view;
		this.bind("change", function(){
		  console.log('Collection has changed.');
		});
		this.on("change", function(){
			alert('heyo');
		  console.log('Collection has changed.');
		});
	},
	// add : function(procedure) {

	// 	this.collection.add(procedure);

	// 	/// hmmm, this code should actually be in the model definition, not in the collection definition
	// 	if (! procedure.get('id')) {
	// 		procedure.set('id',this.collection.length);
	// 	}
	// },
	getProcedure : function(procedure_id) {
		return this.collection.get(procedure_id);
	},
	getProcedures : function() {
		return this.collection.models;
	},
	getProceduresByModality : function() {

		var procedures = {};
		$(this.getProcedures()).each(function(){
			var procedure_name = this.get('procedure_name');
			if (! procedures[procedure_name]) { procedures[procedure_name] = []; }
			procedures[procedure_name].push(this);
		});
		return procedures;
	}
});
; /* ../prototype/js/collections/caregivers.js */ glasswing.collections.caregivers = Backbone.Collection.extend({
	model: glasswing.models.caregiver,
	initialize : function(config) {
		// _(this).bindAll('add');

	},

});; /* ../prototype/js/collections/procedures.js */ glasswing.collections.procedures = Backbone.Collection.extend({
	tagName : 'tr',
	className : 'procedure',

	initialize : function(attributes) {
		// this.view = attributes.view;
		_(this).bindAll('add');
	},

	ingredients : {
		procedure_type : ['CT'],
		body_part : ['ABD', 'L LEG', 'R LEG', 'HEAD', 'CHEST', 'ANKLE', 'WRIST'],
		clinical_indications : ['Right lower lobe lung mass seen on abdominal/pelvic CT scan.'],
		procedure_informations : ['Contrast enhanced and unenhanced CT scan of the chest was performed. 92 cc Isovue was administered IV.'],

		hospital : ['Mercy','Northwestern','Good Heart','Great Lake','Advocate','Shepherd','Good Shepherd','Murphy'],
		role : ['Resident','Technologist']
	},
	add : function(procedureModel) {

		Backbone.Collection.prototype.add.call(this, procedureModel);

		if (! procedureModel.get('id')) { procedureModel.set('id',this.models.length); }

		procedureModel.view.render();

		if (this.view.$target) {
			// optionally, if our parent table is available, render to it
			this.view.$target.append(procedureModel.view.render().$el);
		}

	},
	getProcedure : function(procedure_id) {
		return this.get(procedure_id);
	},
	getProcedures : function() {
		// console.log('get procedure!');
		return this.models;
	},
	getProceduresByModality : function() {

		var procedures = {};
		$(this.getProcedures()).each(function(){
			var procedure_name = this.get('procedure_name');
			if (! procedures[procedure_name]) { procedures[procedure_name] = []; }
			procedures[procedure_name].push(this);
		});
		return procedures;
	},
	getRandomProcedure : function(patient, priors, id) {
		var p = new glasswing.collections.patients();
		var caregivers = new glasswing.collections.caregivers();
		// var length = Math.round(Math.random()*0)+2;

		var first = p.getRandomIngredient('first');
		var last = p.getRandomIngredient('last');
		caregivers.add(new glasswing.models.caregiver({
			role : 'Referring Physician',
			phone : '123-123-1234',
			pager :'123-123-1234',
			email : first.substring(0,1).toLowerCase()+last.toLowerCase()+'@'+this.getRandomIngredient('hospital').toLowerCase()+'.com',
			date : new Date('6/5/2013'),
			first : first,
			last : last,
			backup : p.getRandomIngredient('first') +' ' + p.getRandomIngredient('last')
		}));

		for (var i=0;i<1;i++) {
			var first = p.getRandomIngredient('first');
			var last = p.getRandomIngredient('last');
			caregivers.add(new glasswing.models.caregiver({
				role : this.getRandomIngredient('role'),
				phone : '123-123-1234',
				pager :'123-123-1234',
				email : first.substring(0,1).toLowerCase()+last.toLowerCase()+'@'+this.getRandomIngredient('hospital').toLowerCase()+'.com',
				date : new Date('6/5/2013'),
				first : first,
				last : last,
				backup : p.getRandomIngredient('first') +' ' + p.getRandomIngredient('last')
			}));
		}

		return new glasswing.models.procedure({
			id : id,
			patient : patient,
			scanned_documents : Math.round(Math.random()*10),
			referring_physician : 'Thompson',
			date : glasswing.randomDate(new Date()),
			end_time : new Date((new Date()).getTime() - Math.round(Math.random()*1000*360)),
			procedure_name : this.getRandomIngredient('procedure_type') + ' ' + this.getRandomIngredient('body_part'),
			priority : Math.round(Math.random()*2),
			procedure_class : '-',
			report_status : 'Unread',
			procedure_status : 'Comp.',
			referring_physician : p.getRandomIngredient('first')+ ' ' + p.getRandomIngredient('last'),
			hospital_name : this.getRandomIngredient('hospital'),
			caregivers : caregivers,
			priors : priors
		});
	},
	getRandomIngredient : function(key) {
		return this.ingredients[key][Math.round(Math.random()* (this.ingredients[key].length-1) )];
	}

});








; /* ../prototype/js/collections/patients.js */ glasswing.collections.patients = Backbone.Collection.extend({
	model: glasswing.models.patient,
	ingredients : {
		first_female : [
		'Kelsey','Nancy',
		'Michelle','Gina','Puja',
		'Nandhita','Min','Rebecca', // momo
		'Rebecca', // zephyr
		'Auldyn','Nina','Stephanie', // solidus
		'Nishita','Ying','Debra','Kelsey', // wanderlust
		'Alina','Truc', // glace
		'Kiran',
		'Judith', 'Louise',
		],
		first_male : [
		'Mark','Kevin','Ben', // glasswing
		'Jon','Phil', // spark
		'Charles','Parker',
		'John','Jason','Jonas','Arthur',
		'Paul','KeVon',
		'Michael',
		'Luis','Chaiyawut',
		'Dave','Ian','Sebon', // eaton
		'Doug', 'Juan' // crosslands
		],
		last : [
		'Stroshane','Chen','Baldwin','Scott','Margines',
		'Lew','Assaf','Agarwal','Chan','Legros',
		'Aweida','Bossier','Kumar','Xao','Chen',
		'Rogers','Block','Gebhardt','Hong','Jablonsky',
		'Mandel','Matthews','Ticer','Wong','Butler',
		'Helmbrecht','Muhnot','Wang','Gladwin','Humphries',
		'Luetger','Todhunter','Lokhande','Koo',
		'Tucker','Briguglio','Roche','Gonzalez'
		],
	},
	initialize : function() {

		_(this).bindAll('add');

	},
	id_offset : 100100,
	add : function(model) {
		Backbone.Collection.prototype.add.call(this, model);

		if (! model.get('id')) {
			model.set('id',this.id_offset+this.length + Math.round(Math.random()*200000));
		}
	},
	generateRandomPatient : function() {
		var gender = (Math.round(Math.random())) ? 'male' : 'female';
		var p = new glasswing.models.patient({
			first : this.getRandomIngredient('first_'+gender),
			last : this.getRandomIngredient('last'),
			dob : glasswing.randomDate(new Date(1940,0,1), new Date(2000,0,1)),
			gender : (gender === 'male') ? 'm' : 'f',
			risks : '-'
		});
		this.add(p);
		return p;


	},
	getRandomIngredient : function(key) {

		if (key=='first') { key += (Math.round(Math.random())) ? '_male' : '_female'; }

		return this.ingredients[key][Math.round(Math.random()* (this.ingredients[key].length-1) )];
	}


});
; /* ../prototype/js/collections/notifications.js */ glasswing.collections.notifications = Backbone.Collection.extend({
	model: glasswing.models.notification,
	initialize : function() {
		// _(this).bindAll('add');

	},

});; /* ../prototype/js/collections/priors.js */ glasswing.collections.priors = Backbone.Collection.extend({
	model: glasswing.models.prior,
	initialize : function() {

		_(this).bindAll('add');
		this.sort_key = 'date';

	},
	add : function(model) {
		Backbone.Collection.prototype.add.call(this, model);
	},
	comparator: function(a, b) {
	    a = a.get(this.sort_key);
	    b = b.get(this.sort_key);
	    return a.getTime() > b.getTime() ?  1
	         : a.getTime() < b.getTime() ? -1
	         :          0;
	}


});
; /* ../prototype/js/collections/tabs.js */ glasswing.collections.tabs = Backbone.Collection.extend({

    initialize : function(attributes) {
        _(this).bindAll('add');
        this.pages = {};
        this.router = attributes.router;
        this.worklist = attributes.worklist;
    },
    showPage : function(model, options) {
        var self = this;
        this.getPage(model, function(page){

            self.router.url(page.view.url,options);

            if (self.selected_tab != null) { self.selected_tab.deselect(); }

            page.view.setOptions(options);
            $('.page').html(page.view.render().$el);
            page.view.afterRender();
            self.selected_tab = page.tab.select();
        });
        return this;
    },
    recalculateSize : function() {
        var tab_width = 2;
        setTimeout(function(){

            $('.tabs .tab').each(function(){
                tab_width += $(this).outerWidth();
            });

            // $('.tabs').width(tab_width);
            $('.search').css({left: tab_width});
        },3);


    },
    addTab : function(page) {
        var self = this;
        var tab = new glasswing.views.tabs({page : page, parent : this });
        $('.tabs').append(tab.$el);


        // tab.show();
        this.recalculateSize();
        // tab.$el.click(function(e){
        //     alert('2');
        //     self.showPage(page);
        //     glasswing.err('gotta figure out how to deal with this');
        // });
        return tab;
    },
    closeTab : function(page) {

        this.showPage(this.worklist);

        var cid = page['cid'];
        var self = this;
        page = this.pages[cid];

        page.tab.close(function(tab){
            tab.remove();
            page.view.remove();
            delete self.pages[cid];
            self.recalculateSize();
        });


    },
    // when a model has changed, we update our tab manager to display a notification
    notify : function(view, attributes) {
        this.getPage(view,function(page){
            page.tab.notify(attributes);
        });
    },
    getPage : function(view,callback) {


        if (! view) { throw("You must pass in a view!");}

        if (this.pages[view['cid']] !== undefined && this.pages[view['cid']] !== null) {
            if (callback) { callback(this.pages[view['cid']]); }
        } else if (this.pages[view['cid']]===undefined) {

            this.pages[view['cid']] = null;
            var self = this;

            view.tabManager = self;


            self.pages[view['cid']] = { view : view, tab : self.addTab(view) };
            if (callback) { callback(self.pages[view['cid']]); }

        }

    }
});
; /* ../prototype/js/views/tabs.js */ (function($){
	glasswing.views.tabs = glasswing.views.abstract.extend({
		tagName : 'li',
		className : 'tab',
		template : glasswing.template('tab.html'),
		initialize : function(options) {
			glasswing.views.abstract.prototype.initialize.apply(this, arguments);

			this.page = options.page;
			this.model = this.page.model;
			this.parent = options.parent;
			this.a = null;
			this.render();
			this.$el.addClass('tab-'+this.page.name.toLowerCase());
		},
		render : function() {
			var self = this;
			// console.log('render page');
			// console.log(this.page);
			this.$el.html(_.template(this.template, {
				url : '#'+this.page.url,
				name : this.page.name
			}));

			this.$el.data('model',this.model);

			this.$a = this.$el.find('a');
			this.$notification = this.$el.find('.notification');

			// this cannot depend on the router to change; we must cpature the event regardless
			this.$a.click(function(e){

				e.preventDefault();
				if (! $(this).parents('li').hasClass('selected')) {
					self.parent.showPage(self.page);
				}



				// self.router.url($(this).attr('href'));

			});
			this.$('.close-tab').click(function(e){
				self.parent.closeTab(self.page);
			});


			$('.search input').hint();


			return this;
		},

		select : function() {
			this.$el.addClass('selected');
			this.$el.removeClass('notify');
			this.$notification.hide();
			return this;
		},
		deselect : function() {
			this.$el.removeClass('selected');
			return this;
		},
		close : function(callback) {
			this.$el.css({height : 0});
			var duration = parseFloat(this.$el.css('transition-duration'));
			var self = this;
			setTimeout(function(){
				callback(self);
			},duration*1000);
		},
		show : function() {

			// console.log(this.$el.find('h2').height());
			// var height = this.$el.height();

			this.$el.css({height : 38});
			//this.$el.css({height: 0}).animate({height : height});
		},
		notify : function(attributes) {
			if (! this.$el.hasClass('selected')) {
				this.$el.addClass('notify');
				this.$notification.show().css({width: 0, height: 0, right: 12, bottom: 12}).animate({width : '18px', height: '18px', right: 3, bottom: 3},
					{
						duration : 400,
						easing : 'easeInOutQuad'
					}
				);
			}

		}

	});

})(jQuery);
; /* ../prototype/js/views/dynamicPane.js */ (function($){
	glasswing.views.dynamicPane = glasswing.views.abstract.extend({
		className : 'pane',
		initialize : function(attributes) {
			this.content = attributes.content;
			this.header = attributes.header;
			this.parent = attributes.parent;
			this.clss = attributes.clss;

			this.setPosition(attributes.position);
			this.callback = attributes.callback;
			this.state = 'normal';
		},
		render : function() {
			var self = this;
			this.$el.html('');
			this.$close = $('<div class="close" />');
			this.$magnify = $('<div class="magnify" />');
			this.$header = $('<div class="header">'+this.header+'</div>');
			this.$content = $('<div class="content">'+this.content+'</div>');
			this.$el.addClass(this.clss);
			this.$el.prepend(this.$header);
			this.$el.append(this.$content);

			this.$header.append(this.$close);
			this.$header.append(this.$magnify);

			this.$close.click(function(e){
				e.preventDefault();
				self.parent.removePane(self);
				// self.parent.positionPane({el : self.$el, position: 'full'});
				// self.$el.animate({width: 0, height: 0});
			});
			this.$magnify.click(function(e){
				self.magnify(e);
			});
			if (this.callback) { this.callback(this); }
			return this;

		},
		magnify : function(e) {
			if (e) { e.preventDefault(); }
			var self = this;
			if (self.position != 'full') {
				if (self.state=='full') {
					self.state = 'normal';
					self.parent.positionPane({el : self.$el, position: self.position});
					this.$el.addClass(this.position);
				} else {
					console.log(self);
					self.state = 'full';
					self.parent.positionPane({el : self.$el, position: 'full'});
					this.$el.removeClass(this.position);
				}
			}
		},
		setPosition : function(pos) {

			if (! pos) { pos = 'full'; }
			this.$el.removeClass(this.position);

			this.position = pos;
			// this.parent.positionPane({el : this.$el, position: this.position});
			this.$el.addClass(this.position);
		}
	});
})(jQuery);; /* ../prototype/js/views/dynamicContainer.js */ (function($){
	$.fn.contains = function(point) {
		var self = $(this);

		return (
			point.x > self.offset().left &&
			point.y > self.offset().top &&
			point.x < self.offset().left 	+ self.width() &&
			point.y < self.offset().top 	+ self.height()
			);
	}
	glasswing.views.dynamicContainer = glasswing.views.abstract.extend({
		initialize : function(attributes) {
			this.dragging = false;
			this.draggables = attributes.draggables;
			this.panes = [];
			this.render();

		},
		options : {
			threshold : {
				x : 0.18,
				y : 0.38
			}
		},
		render : function() {
			var self = this;

			this.content = $('.dynamic-content .container');
			var droppable = $('.dynamic-content .droppable');
			droppable.hide();

			this.draggables.each(function(){
				var draggable = $(this);

				var start_position; // our initial click.
				var click_offset; // where on our draggable did we click
				var current_position; // where is our mouse, relatively (compared to our start position);

				var contentContains = function(attributes) {
					var e = attributes.e;
					var draggable_offset = attributes.draggable_offset;
					var current_position = {x : e.clientX - start_position.x, y : e.clientY - start_position.y};
					var left = draggable_offset.left + current_position.x + 20;
					var top = draggable_offset.top + current_position.y + 10;

					var point = {x: left+click_offset.x, y : top+click_offset.y};

					if (attributes.content.contains(point)) {
						if (attributes.contains) {
							attributes.contains();
						}

					} else if (attributes.doesNotContain) {
						attributes.doesNotContain();

						// droppable.css({background: 'none'});

					}
				}




				draggable.unbind('mousedown').mousedown(function(e){
					e.preventDefault();
					start_position = {x : e.clientX, y : e.clientY };
					click_offset = {x : start_position.x - draggable.offset().left, y : start_position.y - draggable.offset().top };


					var left, top;

					var draggable_offset = draggable.offset();
					var clone;


					var createClone = function() {
						clone = draggable.clone();

						clone.css({opacity: 0.7, width: 200});
						clone.addClass('clone');
						$('body').append(clone);
						// console.log(draggable.offset());
						clone.css({left: draggable.offset().left + 20, top: draggable.offset().top + 10});
						// clone.css({left: 1200, top: 200});
						self.dragging = true;
					}



					$(window).unbind("mousemove").mousemove(function(e){
						if (! clone) { createClone(); }
						droppable.show();
						current_position = {x : e.clientX - start_position.x, y : e.clientY - start_position.y};

						left = draggable_offset.left + current_position.x + 20;
						top = draggable_offset.top + current_position.y + 10;

						clone.css({left: left, top: top});


						contentContains({e : e, draggable_offset : draggable_offset, content : self.content, contains : function(){

							droppable.addClass('hover');

							var position = 'full';
							if (self.panes.length) {
								var point = {x: left+click_offset.x, y : top+click_offset.y};
								position = self.getPosition(point,self.content);

							}
							self.positionPane({el : droppable, position : position});
						}, doesNotContain : function() {
							droppable.removeClass('hover');
						}});



					}).unbind('mouseup').mouseup(function(e){
						if (clone) {
							droppable.hide();

							droppable.removeClass('hover');



							// var cursor = {x: left+click_offset.x, y : top+click_offset.y};

							contentContains({e : e, content : self.content, draggable_offset : draggable_offset, contains : function(){
								var position = 'full';
								if (self.panes.length >= 1) {
									var point = {x: left+click_offset.x, y : top+click_offset.y};
									position = self.getPosition(point,self.content);
								}
								self.addPane({content : draggable.data('dynamic-content'), header : draggable.data('header'), clss : draggable.data('clss'), position: position, callback : draggable.data('callback')});

							}});


							self.dragging = false;
							clone.remove();
						} else {
							self.addPane({content : draggable.data('dynamic-content'), header : draggable.data('header'), clss : draggable.data('clss'), position: 'full', callback : draggable.data('callback')});
						}


						$(window).unbind('mousemove').unbind('mouseup');
					});

				});
			});
		},
		getPosition : function(point, content) {
			var position;

			var offset = $(content).offset();
			if (		point.x - offset.left < content.width() * this.options.threshold.x) {
				position = 'left';
			} else if (	point.x - offset.left > content.width() * (1-this.options.threshold.x)) {
				position = 'right';
			} else if (	point.y - offset.top < content.height() * this.options.threshold.y) {
				position = 'top';
			} else if (	point.y - offset.top > content.height() * (1-this.options.threshold.y)) {
				position = 'bottom';
			} else if (	point.x - offset.left < content.width() / 2) {
				position = 'left';
			} else {
				position = 'right';
			}
			return position;
		},
		contains : function(point) {
			return (cursor.x > self.content.offset().left && cursor.y > self.content.offset().top && cursor.x < self.content.offset().left + width && cursor.y < self.content.offset().top + height);
		},
		addPane : function(attributes) {

			var self = this;
			// var contents = attributes.contents;
			// var header = attributes.header;
			var position = attributes.position;
			// var clss = attributes.clss;
			// var target = attributes.el || this.content;
			var target;
			if (! target) { target = this.content; }

			/*
			whats gonna happen here

			1. if we have no panes: add to panes.

			2. if we have 1 pane, and a full position: add to panes. position on top of previous.

			3. if we have 1 pane, and a side position: add to panes. position correctly. position previous pane correctly.

			4. if we have 2 panes, and a full position: add to panes. position on top of previous.

			5. if we have 2 panes, and a side position that matches one of the previous panes: add ot panes. position on top of that side position that matches.

			6. if we have 2 panes, and a side position that does not match the previous layout: add to panes. flip the previous two to match the new layout; replace the desired pane.

			*/


			// create a new pane
			var pane = new glasswing.views.dynamicPane($.extend({parent : this},attributes));

			// add to our panes stack
			this.pushPane(pane);

			// render onto our container
			target.append(pane.render().$el);

			// position the pane
			self.positionPane({el : pane.$el, position: position});




			if (position !== 'full' && this.panes.length > 1) {
				var conversePane = this.getPane(pane.pane_id-1);
				self.positionPane({pane : conversePane, position : self.getConverse(position)});
			}

			return pane;
		},
		pushPane : function(pane) {
			var self = this;
			self.panes.push(pane);
			pane.pane_id = this.panes.length;
			pane.$el.dblclick(function(e){
				e.preventDefault();
				pane.magnify();
				// self.positionPane({el : pane.$el, position: 'full'});
			});
		},
		getPane : function(pane_id) {
			return this.panes[pane_id - 1];
		},
		removePane : function(pane) {

			pane.$el.remove();
			delete this.panes[pane.pane_id - 1];

			// var newPanes = [];

			// _.each(this.panes,function(p){
			// 	if (p==pane) {
			// 		pane.$el.remove();
			// 		delete p;
			// 	} else {
			// 		p.setPosition('full');
			// 		newPanes.push(p);
			// 	}
			// });
			// this.panes = newPanes;
		},
		getConverse : function(position) {
			switch(position) {
				case 'left' : return 'right'; break;
				case 'right' : return 'left'; break;
				case 'top' : return 'bottom'; break;
				case 'bottom' : return 'top'; break;
			}
			return position;
		},
		positionPane : function(options) {

			_.each(this.panes,function(pane){
				pane.$el.css({zIndex : 10});
			});
			var defaultOptions = function() {return {left: 0, right: 0, top: 0, bottom: 0, height: '100%', width: '100%'};}

			var opts = {};

			if (options.position != 'full') {
				opts[this.getConverse(options.position)] = '50%';
			}

			if (! options.el && options.pane) {
				options.el = options.pane.$el;
				options.pane.setPosition(options.position);
			}

			$(options.el).css({zIndex : 11});
			// console.log(opts);

			(function(attributes){
				if (attributes['right'] || attributes['left']) {	attributes.width = 'auto'; }
				else { 												attributes.height = 'auto'; }
				$(options.el).css($.extend(defaultOptions(),attributes));
			})(opts);

		}

	});
})(jQuery);; /* ../prototype/js/views/notifications.js */ (function($){
	glasswing.views.notifications = glasswing.views.abstract.extend({

		// model : new worklist(),
		className : 'notifications',
		template : glasswing.template('notifications.html'),
		events : {
		},
		initialize : function(attributes) {
			this.tabManager = attributes.tabManager;
        	this.render();
        	// this.collection = new glasswing.collections.notifications();
        	this.notifications = [];
		},
		render : function() {
			var self = this;

			self.$el.html(_.template(this.template, {

			}));
			self.$content = self.$el.find('.content');

			$('.header .system').prepend(self.$el);
			self.$sheet = self.$el.find('.sheet');

			self.$el.mouseover(function(){
				self.$el.removeClass('new');
				self.$content.html('No new notifications');
				self.notifications = [];
				self.$sheet.show();
			}).mouseout(function(){
				self.$sheet.hide();
				self.$sheet.find('.new').removeClass('new');
			})

			// this.addNotification('<strong>Wise, Sam</strong><br />All images have been uploaded.');
			// this.addNotification('<strong>Holman, Daniel\'s</strong> report has been approved.');
			return self;
		},
		addNotification : function(obj) {
			var message = obj.message;
			var view = obj.view;
			var self = this;

			this.$el.addClass('new');
			var notification = $('<li class="new"><a href="javascript:;">'+message+'</a></li>');
			this.notifications.push(obj);
			if (this.notifications.length==1) {
				this.$content.html('1 new notification');
			} else {
				this.$content.html(this.notifications.length+ ' new notifications');
			}

			this.$sheet.find('.all').before(notification);
			notification.click(function(e){
				console.log(view);
				self.tabManager.showPage(view);
			});
		}
	});
})(jQuery);; /* ../prototype/js/views/caregivers.js */ (function($){
	glasswing.views.caregivers = glasswing.views.abstract.extend({

		// model : new worklist(),
		className : 'caregivers',
		// template_html : 'report/index.html',
		template : glasswing.template('caregivers.html'),
		events : {
		},
		initialize : function(attributes) {

			this.collection = attributes.collection;
			this.button = attributes.button;


        	// glasswing.views.abstract.prototype.initialize.apply(this, arguments);

        	this.render();
		},
		render : function() {
			var self = this;

			// this.$el.html();
			// this.$el = $('<div class="modal"><div class="arrow"></div><div class="content">'+_.template(this.template, {

			// 	caregivers : this.collection.models

			// })+'</div></div>');

			self.$el.html(_.template(this.template, {

				caregivers : this.collection.models

			}));

			self.button.unbind('click').click(function(){


				$(self.button).modal({content: self.$el.html(), position: 'right'});


			});
			return self;
		},
	});
})(jQuery);; /* ../prototype/js/views/worklist.js */ (function($){

	$.fn.select = function(){
		return $(this).each(function(){

			$(this).addClass('selected');

		});
	};
	$.fn.deselect = function(){
		return $(this).each(function(){

			$(this).removeClass('selected');
		});
	};
	glasswing.views.worklist = glasswing.views.abstract.extend({
		tagName : 'div',
		className : 'worklist',
		// model : new worklist(),
		template : glasswing.template('worklist/index'),
		events : {
		  // "click tbody tr" : "openProcedure",
		  // "click .cards .card" : "openProcedure",
		  "click .layouts a.button" : "setLayout"
		},

		buttons : {},
		selected_button : null,
		// changeLayout : function(event) {

		// },

		initialize : function(attributes) {
			// console.log("*** initialize our worklist");
			glasswing.views.abstract.prototype.initialize.apply(this, arguments);

			this.current_layout = (localStorage && localStorage['worklist-layout']) ? localStorage['worklist-layout'] : 'table';

			this.procedures = new glasswing.collections.procedures();
			this.procedures.view = this;

			// this.tabManager = attributes.tabManager;
			// console.log('init the worklist');

			this.name = 'Worklist';
			this.url = 'worklist';


			this.templates = {
				card : { template : glasswing.template('worklist/cards'), selector : '.cards'},
				table : { template : glasswing.template('worklist/table'), selector : 'tbody'},
				grid : { template : glasswing.template('worklist/grid'), selector : '.grid-contents'},
			};
			this.setLayout(this.current_layout);



			// alert('1');
			// console.log(this.templates);


		},

		render : function() {
			var self = this;

			// alert('render');

			self.$el.html(_.template(self.template, {}));
			self.$list = self.$el.find('.list');


			var current_template = self.templates[self.current_layout];

			// console.log(self.current_layout);
			// console.log(current_template.template);
			self.$list.html(_.template(current_template.template, {}));
			// self.$worklist.html('worklist');


			self.$target = this.$el.find(current_template.selector);


			_.each(self.procedures.models,function(procedure, index){

				procedure.view.setLayout(self.current_layout);


				self.$target.append(procedure.view.render().$el);


			});
			this.delegateEvents();


			this.$el.find('.layouts a.button').each(function(){

				self.buttons[$(this).attr('rel').toLowerCase()] = $(this);
			});



			switch(self.current_layout) {
				case 'table' : self.attachTableEvents(); break;
			}

			if (! $('.tab-worklist .layout').length) {
				$('.tab-worklist').prepend('<div class="layout" />');
			}

			$('.tab-worklist').removeClass('grid');
			$('.tab-worklist').removeClass('card');
			$('.tab-worklist').addClass(self.current_layout);

			return this;
		},
		attachTableEvents : function() {
			var self = this;
			var isDragging = false;

			var close = function(input_div) {
				input_div.stop().animate({marginTop: 0, height: 0},{duration: 500, easing:'easeInOutQuad'});
			}
			var open = function(input_div) {
				input_div.stop().animate({marginTop: -20, height: 20},{duration: 300, easing:'easeOutBounce'});
			}

			// console.log(this.$list.find('thead td'));
			self.$list.find('thead th')
			.mouseover(function(){
				// console.log('mouseover');
				var td_index = $(this).index();
				var input_div = $(self.$list.find('thead tr.search-fields .input')[td_index]);
				var input = input_div.find('input');
				open(input_div);

				// if (! $('input:focus').length) {

				// }
				input.unbind('click').click(function(e){
					e.stopPropagation();
				}).unbind('blur').blur(function(){
					$(this).removeClass('focus');
				}).unbind('keydown').keydown(function(){
					$(this).addClass('focus');
				}).unbind('keyup').keyup(function(e){

					var val = $(this).val();

					var index = $(this).parents('th').index();

					var trs = self.$list.find('tbody tr');

					trs.each(function(){
						var td = $($(this).find('td')[index]);
						var html = td.html().split('<span>').join('').split('</span>').join('');

						var search_index = html.search(new RegExp(val,"gmi"));
						if (search_index !== -1) {
							html = html.substring(0,search_index) + '<span>' + html.substring(search_index,search_index+val.length) + '</span>' + html.substring(search_index+val.length);

						}
						td.html(html);


					});



					if (e.keyCode == 13) {
						self.filter();
					}



				});
				input.focus();

			})
			.mouseout(function(){
				// console.log('mouseover');
				var td_index = $(this).index();
				var input_div = $(self.$list.find('thead tr.search-fields .input')[td_index]);
				var input = input_div.find('input');
				if (! input.val() && ! input.hasClass(".focus")) {
					close(input_div);
				} else {
					input.unbind('blur').blur(function(){
						$(this).removeClass('focus');
						if (! input.val()) {
							close(input_div);
						}
					});
				}




			})
			.mousedown(function(event) {
				// console.log('mousedown');
			    $(window).mousemove(function() {
			        isDragging = true;
			        $(window).unbind("mousemove");

			        console.log('moving');

			    });
			})
			.mouseup(function(event) {
				// console.log('mouseup');
			    var wasDragging = isDragging;
			    isDragging = false;
			    $(window).unbind("mousemove");
			    if (wasDragging) {
			    	event.preventDefault();
			    }
			});


		},
		filter : function() {
			var self = this;
			var inputs = self.$list.find('table thead input');
			var tr = self.$list.find('table tbody tr');
			tr.each(function(){
				$(this).show();
				$(this).find('td').each(function(){
					html = $(this).html().split('<span>').join('').split('</span>').join('');
					$(this).html(html);
				})

			});
			var search_present = false;
			inputs.each(function(){
				var val = $(this).val().toLowerCase();
				if (val) {
					search_present = true;
					// console.log(this);
					// console.log($(this).parents('th'));
					var input_index = $(this).parents('th').index();
					tr.each(function(){
						var td = $($(this).find('td')[input_index]);
						var html = td.html().toLowerCase();
						// console.log(this);
						// console.log($(this).find('td'));
						// console.log(input_index);
						// console.log($(this).find('td')[input_index]);
						// console.log('val: ' + val);
						// console.log('html: ' + html);
						if (html.search(val) === -1) {
							// kill it
							$(this).hide();
						} else {
							// $(this).show();

						}

					});
				} else {

				}


			});
			if (! search_present) {
				tr.show();
			}
		},
		afterRender : function() {
			var self = this;
			switch(this.current_layout) {
				case 'table' :

					self.$list.find('table').tablesorter();
					var inputs = self.$list.find('.search-fields input');
					self.$list.find('table').find('form').submit(function(e){
						// alert('go');
						e.preventDefault();
					});
					// inputs.each(function(){
					// 	var td = $(this).parents('td');
					// 	var td_index = td.index();
					// 	$(this).css({
					// 		// width: $(this).parents('td').width(),
					// 		position: 'absolute'
					// 	});
					// 	$(this).data('td_index',td_index);
					// });
					// inputs.each(function(){
					// 	var td = $(self.$list.find('tbody tr:first td')[$(this).data('td_index')]);
					// 	var position = td.position();
					// 	var width = td.width();
					// 	$(this).css({
					// 		top: position.top,
					// 		left: position.left,
					// 		width: width + 30
					// 	}).hide();

					// });
				break;
				case 'grid' :
					self.$('.grid-header p').click(function(e){
						var old = $(this).html();
						var form = $('<form />');
						var input = $('<input name="something" type="text" />');
						$(this).html(form);
						form.html(input);
						input.focus();
						form.submit(function(e){
							e.preventDefault();
							$(this).replaceWith(input.val());
						});

					});
				break;
			}


			if (this.selected_button != null) { this.selected_button.deselect(); }

			// console.log(this.buttons);

			if (this.buttons[this.current_layout]) {

				this.selected_button = this.buttons[this.current_layout].select();
			}

			this.setFilters();
		},
		setFilters : function() {

			if (this.current_layout=='grid') {
				$('.filters').css({width: 0});
				$('.worklist .container').css({right: 0});
			} else {
				$('.filters').css({width: 320});
				$('.worklist .container').css({right: 340});
			}

		},
		sort : function(el) {
			// var el_index = el.index();

			// var tds = el.parents('table').find('tbody tr');
			// var sort_key = 'gender';
			// tds.sort(function(a,b){
			// 	// console.log(a.find('td')[el_index]);
			// 	a = $($(a).find('td')[el_index]).html();
			// 	b = $($(b).find('td')[el_index]).html();
			// 	console.log('a : '+ a+ ' b: '+b);
			// 	if (parseFloat(a) && parseFloat(b)) {
			// 		a = parseFloat(a);
			// 		b = parseFloat(b);
			// 	}

			// 	return (a > b) ? 1 : 0
			// });
			// el.parents('table').find('tbody').html(tds);
			// // console.log('sort');
			// console.log(el);
		},
		setLayout : function(layout) {



			layout = (typeof layout == 'string') ? layout : $(layout.currentTarget).attr('rel').toLowerCase();
			if (layout) {
				switch(layout) {
					case 'card' : layout = 'card'; break;
					case 'grid' : layout = 'grid'; break;
					case 'table' : layout = 'table'; break;
				}
				this.current_layout = layout;
				this.render();

				if (this.selected_button != null) { this.selected_button.deselect(); }

				// console.log(this.buttons);


				if (this.buttons[this.current_layout]) {

					this.selected_button = this.buttons[this.current_layout].select();
				}

				if (localStorage) {
					localStorage['worklist-layout'] = this.current_layout;
				}

			}

			this.setFilters();





		},
		setOptions : function(options) {
			if (options != null) {
				if (options['layout']) {

					setLayout(options['layout']);
				}
			}
		},
		openProcedure : function(event) {
			var model = $(event.currentTarget).data('model');
			this.tabManager.showPage(model);




		},



	});

})(jQuery);
; /* ../prototype/js/views/prior.js */ (function($){
	glasswing.views.prior = glasswing.views.abstract.extend({

		// model : new worklist(),

		// template_html : 'report/index.html',
		className : "prior draggable",
		template : glasswing.template('timeline/prior.html'),
		events : {
		  // "mouseover" : "mouseover",
		  // "mouseout" : "mouseout",
		  // "click" : "click",
		  "click .coc" : "coc"
		},
		initialize : function(attributes) {

			this.model = attributes.model;
			this.parent = attributes.parent;
			// this.data = attributes.data;
        	glasswing.views.abstract.prototype.initialize.apply(this, arguments);

        	this.render();
		},
		render : function() {
			var self = this;
			self.$dot = $('<div class="prior draggable"></div>');
			self.$el.html(_.template(self.template, {
				date : this.model.getDate(),
				procedure_name : this.model.get('type'),
				impression : this.model.get('impression'),
			}));
			if (this.model.get('relevant')) {
				self.$el.addClass('relevant');
				self.$dot.addClass('relevant');
			}

			// console.log(this.$dot);
			// self.delegateEvents();
			// this.$dot.mouseover(this.mouseover).mouseout(this.mouseout);

			return self;
		},
		// mouseover :function() {
		// 	this.$el.addClass('hover');
		// 	this.$dot.addClass('hover');
		// 	var size = 16;
		// 	this.$dot.stop().css({zIndex: 15}).animate({width: size, height: size},{duration: 200, easing: 'easeOutBounce'});
		// 	// this.parent.mouseover();
		// },
		// mouseout : function() {
		// 	var size = 8;
		// 	this.$el.removeClass('hover');
		// 	this.$dot.removeClass('hover');
		// 	this.$dot.stop().css({zIndex:10}).animate({width: size, height: size},{duration: 200, easing: 'easeOutBounce'});
		// 	// this.parent.mouseout();
		// },
		click : function() {
			this.parent.twoPane(this);
		},
		getReport : function() {
			if (! this.$report) {

				var report_template = glasswing.template('timeline/prior-report.html');
				this.$report = _.template(report_template, {
					indication : this.model.get('indication'),
					procedure : this.model.get('procedure'),
					findings : this.model.get('findings'),
					impression : this.model.get('impression')
				});


			};
			// console.log(this.$report());

			return this.$report;
		},
		afterRender : function(view) {
			var self = this;

			// $(self.$report).find('.show-more').click(function(e){
			// 	$(self.$report).find('.excerpt').hide();
			// 	$(self.$report).find('.report').show();
			// 	$(this).hide();
			// })

			self.caregivers = new glasswing.views.caregivers({
				collection : self.model.get('caregivers'),
				button : view.$('.community-of-caregivers')
			});

		},

	});
})(jQuery);; /* ../prototype/js/views/timeline.js */ (function($){
	glasswing.views.timeline = glasswing.views.abstract.extend({

		// model : new worklist(),

		// template_html : 'report/index.html',

		template : glasswing.template('timeline/index.html'),
		events : {
		  "click .actions input[type=button]" : "saveProcedure",
		  "mouseover .timeline-container " : "mouseover",
		  "mouseout .timeline-container" : "mouseout"
		},
		initialize : function(attributes) {
			this.parent = attributes.parent;
			this.prior_template = glasswing.template('timeline/prior.html');
        	glasswing.views.abstract.prototype.initialize.apply(this, arguments);
        	this.collapsed = false;
        	this.render();
		},
		render : function() {
			var self = this;

			self.$el.html(_.template(self.template, {

			}));
			self.$bar = this.$el.find('.bar');
			self.$barContainer = this.$el.find('.bar-container');
			self.$priors = this.$el.find('.priors');
			self.$priors_content = this.$priors.find('.content');



			this.priors = this.parent.model.getPriors();



			var max = (new Date()).getTime();
			var min = max;
			// console.log(priors);
			_.each(this.priors,function(prior){
				// console.log(prior);
				// console.log(prior.date);
				// console.log(prior.get('date'));
				if (prior.get('date').getTime()< min ) {
					min = prior.get('date').getTime();
				}
			});


			_.each(this.priors,function(prior){
				prior.view = new glasswing.views.prior({parent : self, model : prior });

				var val = 100-(100 * (prior.get('date').getTime() - min) / (max - min));

				prior.view.$dot.css({top: val+'%'});
				self.$bar.append(prior.view.$dot);

				self.$priors_content.prepend(prior.view.$el);


				_.each([prior.view.$el,prior.view.$dot],function(el){
					el.data('dynamic-content',prior.view.getReport());
					el.data('header','<h2><span>'+prior.get('type')+' '+prior.get('body_part')+'</span> '+prior.getDate()+'</h2>');
					el.data('clss','prior');
					el.data('callback',function(view){
						prior.view.afterRender(view);
					});
				});


			});

			self.delegateEvents();

			return self;
		},
		renderBar : function() {
			var self = this;
			if (self.$priors_content.height() > self.$bar.height()) {

				var bar_size = self.$bar.height() / self.$priors_content.height() * 100;
				self.$slider = self.$el.find('.slider');
				self.$slider.show().css({height: bar_size+'%', top: 0});
			}


			this.$priors.scroll(function(){
				var leftover = (self.$priors_content.height() - self.$priors.height());
				var scroll_position = $(this).scrollTop() / leftover * 100;
				// console.log(scroll_position);
				//self.$slider.css({top : scroll_position - });
				var divider = (leftover / self.$priors_content.height()) * 100; // 20 is the percent different in size
				// console.log(divider);
				// console.log(scroll_position * (divider / 100 ) );
				var top = scroll_position * (divider / 100 ) ;
				self.$slider.css({top : top+'%'});

			});
		},
		afterRender : function() {

			var self = this;

			this.renderBar();

			var bar_priors = $('.timeline .bar .prior:not(.relevant)');
			var prior_priors = $('.timeline .priors .prior:not(.relevant)');
			$('.timeline-buttons a').click(function(e){
				e.preventDefault();
				if ($(this).hasClass('selected')) {return;}
				$('.timeline-buttons a.selected').removeClass('selected');



				switch($(this).attr('class')) {
					case 'relevant-priors' :
						bar_priors.fadeOut();
						prior_priors.slideUp();
					break;
					default :
						bar_priors.fadeIn();
						prior_priors.slideDown();
					break;
				}
				$(this).addClass('selected');
				self.renderBar();
			});


			// var padding = 40;
			// var height = 100- (self.$barContainer.offset().top / ($('body').height()-padding) * 100);

			// _.each([,self.$barContainer,self.$priors],function(el){
			// self.$el.css({height: height+'%'});
			// });
			// console.log(self.$el);
			// self.$el.css({position: 'fixed'});



		},
		getFirstRelevant : function() {
			var self = this;
			if (! self.firstRelevant) {
				_.each(self.priors,function(prior) {
					if (! self.firstRelevant || (prior.get('relevant') && prior.getDate() > self.firstRelevant.getDate())) {
						self.firstRelevant = prior;
					}
				});
			}

			return self.firstRelevant.view;


		},
		mouseover : function() {
			if ( this.collapsed ) {
				this.$priors.stop().animate({width: '300', marginLeft: '0'});
			}
		},
		mouseout : function() {
			if ( this.collapsed ) {
				this.$priors.stop().animate({width: '0', marginLeft: '-10'});
			}
		},
		// twoPane : function(prior) {
		// 	var self = this;
		// 	this.parent.twoPane(prior);

		// 	this.$priors.animate({width: '0%', marginLeft: '-10'}, {duration: 400, complete : function(){
		// 		self.collapsed = true;

		// 		self.$priors.css({position: 'absolute'});
		// 	}});
		// }

	});

})(jQuery);
; /* ../prototype/js/views/report.js */ //'lib/text!templates/report/index.html',
(function($){
	$.fn.notify = function(options) {
		options = $.extend({
			notify_appear : 10,
			notify_disappear : 800,
			notification_length : 5000
		},options);
		return $(this).each(function(){
			var el = $(this);

			var fadeOut = function() {
				el.animate({color: 'white'}, options.notify_disappear);
			}
			setTimeout(function() {
				// el = $('.images');
				el.animate({color: '#32a6d6'}, options.notify_appear, function() {
					el.mouseover(function(){
						clearTimeout(timer);
						fadeOut();
					});
					var timer = setTimeout(fadeOut,options.notification_length);
				});
			},200);


		});
	};
	glasswing.views.report = glasswing.views.abstract.extend({
		tagName : 'div',
		className : 'report',
		// model : new worklist(),

		// template_html : 'report/index.html',

		template : glasswing.template('report.html'),
		events : {
		  "click .actions input[type=button]" : "saveProcedure"
		},
		initialize : function(attributes) {
			this.notification_elements = [];
        	glasswing.views.abstract.prototype.initialize.apply(this, arguments);

        	// console.log(attributes);
			this.name = this.model.get('procedure_name') + '<span>'+this.model.get('id')+'. '+this.model.get('name')+ '</span>';

			this.url = 'procedure/'+this.model.get('id');

			var self = this;

			setTimeout(function(){
				self.model.set('images',10);
				// console.log('could update images here');

				// console.log(self.model.get('images'));
			},8000);

			// var view = this;

			// two things need to happen.
			// this.model.on('change', function(){

			// }); // attempt to bind to model change event





		},
		addNotification : function(obj) {
			this.notification_elements.push(obj);
		},
		notify : function(obj) {

			var el = this.$('.currents').find('.'+obj.key);
			var span = el.find('span');
			span.html(obj.val);
			el.notify();

		},
		afterRender : function() {
			while(this.notification_elements.length > 0) {

				this.notify(this.notification_elements.shift());
			}
			this.timeline.afterRender();

			// this.$('.draggable').draggable({ opacity: 0.7, helper: "clone" });

			var slide_speed = 200;

			this.$('.scanned-documents').each(function(){
				var dropdown = $(this).find('.scanned-documents-dropdown');
				$(this).mouseenter(function(){
					console.log('over');
					dropdown.stop().slideDown(slide_speed);
				}).mouseleave(function(){
					console.log('out');
					dropdown.stop().slideUp(slide_speed);
				});
				$(this).find('.draggable').each(function(){
					$(this).data('dynamic-content','<img src="images/scanned-documents/'+$(this).html()+'" />');
					$(this).data('header','<h2><span>Scanned Document: '+$(this).html()+'</span> '+'August 12'+'</h2>');
					$(this).data('clss','scanned-document');

				});
			});





			this.dynamicPane = new glasswing.views.dynamicContainer({el : $('.dynamic-content .container'), draggables : $('.draggable')});

			var prior = this.timeline.getFirstRelevant();
			var prior_el = prior.$el;
			// console.log(prior);
			this.dynamicPane.addPane({
				content : prior_el.data('dynamic-content'),
				header : prior_el.data('header'),
				clss : prior_el.data('clss'),
				callback : function(view){
					prior.afterRender(view);
				}

			});


			this.$('.accordion').accordion({
				slave : $('.dictation')
			});
			$('.dictation textarea').hint().autosave({notification : $('.dictation .autosave')});


			// tinymce.init({
			// 	selector: "textarea",

			// });


		},
		setOptions : function(options) {

		},
		saveProcedure : function(event) {
			var button = $(event.currentTarget);

			switch(button.val()) {
				case 'Read' :
				break;
				case 'Co-Read' :
				break;
				case 'Approve' :
				break;
			}

			this.tabManager.closeTab(this);



			// how do I access tab manager in this scenario?
		},
		render : function() {
			var self = this;
			self.$el.html(_.template(this.template, {
				id : this.model.get('id'),
				patient_id : this.model.get('patient').get('id'),
				// patient_id : this.model.get('patient').get('patient-id'),
				patient_risks : this.model.get('patient').get('risks'),
				dob : this.model.get('patient').getDob(),
				gender : (this.model.get('patient').get('gender') == 'f') ? 'FEMALE' : 'MALE',

				name : this.model.get('name'),
				priority : this.model.get('priority'),
				procedure_date : this.model.getDate('end_time'),
				procedure_class : this.model.get('procedure_class'),
				procedure_name : this.model.get('procedure_name'),
				report_status : this.model.get('report_status'),
				clinical_indication : this.model.get('clinical_indication'),
				hospital_name : this.model.get('hospital_name'),
				referring_physician : this.model.get('referring_physician'),
				images : this.model.get('images'),

			}));
			self.delegateEvents();

			self.$followButton = this.$el.find('.follow');
			self.$followButton.click(function(e){
				e.preventDefault();
				if ($(this).hasClass('active')) {
					self.model.unfollow();
					$(this).removeClass('active');
					$(this).html('Follow Case');

					// var duration = 60;
					// $(this).stop().animate({width: '35px'},{duration: duration});
					// $(this).find('.check').animate({opacity: 0},{duration: 200, complete : function() {
					// 	this.remove();
					// }});
					// var text = $(this).find('.text');
					// var span = text.find('span');

					// text.stop().animate({
					// 	width : text.data('width')
					// },{duration : 120, complete : function(){
					// 	span.html('Follow');
					// }});

					$(this).parent().find('p.helper').stop().animate({opacity: 0});
				} else {

					self.model.follow();
					var button = this;
					self.setFollowingButton(button);


					var overlay = $('<div class="follow-overlay" />');
					$(overlay).html("<strong>You will be notified when this case is updated.</strong>");
					$('body').append(overlay);
					setTimeout(function(){
						overlay.fadeOut(function(){
							$(this).remove();
						});
					},4000);

					setTimeout(function(){

						var patient = self.model.get('patient');
						self.model.worklist.notifications.addNotification({view : self, message : '<strong>'+patient.get('last')+', '+patient.get('first')+'</strong><br />All images have been uploaded.'});
					},10000);

				}
			})

			if (self.model.isFollowing()) {
				self.setFollowingButton(self.$followButton,1);
			}

			self.$left = this.$el.find('.current-report');
			self.$right = this.$el.find('.dynamic-content');

			self.timeline = new glasswing.views.timeline({parent : this, el : this.$el.find('.timeline')});
			// self.afterRender();

			self.caregivers = new glasswing.views.caregivers({
				collection : this.model.get('caregivers'),
				button : this.$('.community-of-caregivers')
			});


			self.$folder = this.$('.folder');
			self.$folder.click(function(){
				self.model.toggle('in-folder');
			});

			this.change('in-folder');

			self.$follow = this.$('.follow');
			self.$follow.click(function(){
				self.model.toggle('following');
			});

			this.change('following');




			return self;
		},
		change : function(key,val) {

			switch(key) {
				case 'in-folder' :
					if (this.model.get(key)) {
						this.$folder.attr('alt','This case is filed under "Teaching".');
					} else {
						this.$folder.attr('alt','Add to folder...');
					}
				break;
				case 'following' :
					if (this.model.get(key)) {
						this.$follow.attr('alt','Unfollow this case.');
					} else {
						this.$follow.attr('alt','Follow this case.');
					}
				break;
			}
			if (this.model.get(key)) {
				this.$el.addClass(key);
			} else {
				this.$el.removeClass(key);
			}

		},

		setFollowingButton : function(button,duration) {
			// if (! duration) { duration = 100;}
			$(button).addClass('active');
			$(button).html('Following');

			// var check = $('<div class="check"></div>');
			// $(button).append(check);
			// check.hide();

			// $(button).stop().animate({width: '70px'},{duration: duration});

			// setTimeout(function(){

			// 	check.show().css({opacity: 0, marginTop: 5}).stop().animate({marginTop: 0, opacity: 1},{duration: duration*4, easing: 'easeOutQuad'});

			// 	$(button).parent().find('.helper').stop().animate({opacity: 1},{duration: duration*4});

			// 	var text = $(button).find('.text')
			// 	var span = $(button).find('span');
			// 	var width = span.width();
			// 	text.css({width: width});
			// 	span.html('Following');
			// 	text.data('width',width);
			// 	text.stop().animate({width: span.width()},{duration: duration*2, easing: 'easeInOutQuad'});

			// },duration);
		},
		// twoPane : function(prior) {


		// 	this.$left.addClass('twopane').animate({width: '50%'});
		// 	this.$right.addClass('twopane').animate({width: '50%'});



		// 	this.$right.find('h2').slideUp();
		// 	this.$right.find('.prior-report').html(prior.getReport());



		// 	prior.afterRender();
		// }

	});

})(jQuery);
; /* ../prototype/js/views/patient.js */ //'lib/text!templates/patient.html'
(function($){
	glasswing.views.patient = glasswing.views.abstract.extend({
		tagName : 'div',

		// template_html : 'patient.html',

		template : glasswing.template('patient.html'),
		initialize : function() {
			glasswing.views.abstract.prototype.initialize.apply(this, arguments);
			if (this.model) {
				this.model.view = this;
				this.$el.html(_.template(this.template, {
					name : "Name: " + this.model.getName(),

				}));
			}


		},
		render : function() {
			return this;
		}

	});

})(jQuery);; /* ../prototype/js/config.js */ 
(function($){

	var worklist, patientsCollection;



	worklist = new glasswing.views.worklist();
	// generate a collection of random patients
	patientsCollection = new glasswing.collections.patients();

	// add a stat
	var procedureModel;

	var body_part, type;

	var priors = [
		{
			type : 'MRI',
			body_part: "Brain",
			date : new Date('2-2-2012'),
			indication: 'Provided Clinical History: Pt states he has sharp, aching, tingling, shooting pain in head. He was in a car accident in Nov. 2009.',
			procedure: 'Fat-sensitive and fluid-sensitive MR sequences of the brain were performed in orthogonal planes. No prior studies are available for comparison.',
			findings: "There is mild diffuse cerebral atrophy present, consistent with this patient's age. There is a well-circumscribed fluid intensity lesion in the anterior middle cranial fossa, measuring 2 cm x 1 cm and consistent with a benign arachnoid cyst. There is moderate diffuse volume loss in the anterior right frontal lobe cortex, suggesting mild encephalomalacia from remote insult, most likely contusion. There is amild associates subcortical gliosis in this region. There is otherwise mild patchy increased signal intensity within the subcortical white matter, consistent with chronic ischemic changes. The ventricular system is normal in size and dirstibution. There is no evidence of intracranial hemmorrhage. There is no abnormal diffusion weighted signal intensity to suggest an acute ischemic event. There are no regions of abnormal enhancement",
			impression: 'The pitutuary gland and sella are normal. The brainstem is normal. The cranial nerves are normal. The cerebellum is normal. Normal intracranial flow voids are present'
		},
		{
			type : 'CT',
			relevant : true,
			body_part: "RT Shoulder",
			date : new Date('12-7-2011'),
			indication: 'Foreign body right shoulder',
			procedure: 'Shoulder complete RT min of two views',
			findings: 'Two AP views of the right shoulder were obtained. There is a subcutaneous 5.3mm x 1mm metallic foreign body superior to the humeral head and lateral to the AC joint. Whether this is anterior or posterior is uncertain since a transscapular Y view was not obtained. The AC join and glenohumeral joint otherwise appear well maintained.',
			impression: '5mm x 1mm subcutaneous metallic foreign body lateral to the acromion and above the humeral head as described.'
		},
		{
			type : 'CR',
			body_part: "Abdomen",
			date : new Date('10-1-2013'),
			indication: 'Patient complains of abdominal pain which increases on palpation. No palpable mass.',
			procedure: 'Pelvic US',
			findings: 'Transverse and longitudinal sector scans obtained reveal mild distention of the urinary bladder. There is an enlargd deformed uterus measuring 17 x 20 x 11 cm in size with an abnormal heterogenous ultrasound pattern of the myometruim and multiple poorly defined hypoechoic lesions. Adnexa is not enlarged. Ovarier could not be visualized. No evidence of the gree fluid in the cul-de-sac or in the pelvic cavity.',
			impression: 'Severe enlarged uterus with deformities and abnormal muometruim pattern consistent with extensive leiomyomatosis most likely. The abnormal ultrasound pattern is most likely all related to the leiomyomas and fibromas. Endometrial contents could not be evaluated accurately. CT images or MRI images could render more accuurate information in this regard'
		},
		{
			type : 'CT',
			body_part: "Abdomen",
			date : new Date('2-6-2010'),
			indication: 'Status post repair of abdominal aortic aneurysm with interval decrease in size of residual aneurysm sac and Type II endoleak via the inferio mesenteric artery.',
			procedure: 'Non-gated helical CT images were acquired through the chest prior to the administration of intravenous contrast and reconstructed at 5 mm slice thickness in the axial plane. Following the administration of 75 cc Ultravist 370 intravenous contrast, ECG gated helical CT images were acquired through the chest. Images were reconstructed at 3 mm slice thickness in the axial plane at 75% of the R-R interval. Non-gated delayed images were obtained throught htabdomen and pelvis and reconstructed at 3mm slice thickness.',
			findings: 'Status post aortic stent graft repair. There has been interval decrease in size of the residual aneurysm sac now measuring 4.4 x 4.3 cm. Type II endoleak is presend from the IMA. Measurements are as follows: Distal decending thoracic aorta: 3.2cm. Proximal abdominal aorta: 3.1cm. Right renal artery: calcifications at the ostium without significant stenosis. Left renal artery: widely patent. Celiac trunk: widely patent. Proximal segment of the SMA: Widely patent. IMA Origin: Widely patent. Atherosclerotic calcifications are present in the comon iliac, external iliac, itnernal iliac, and common femoral arteries. Milt stenosis is seen in the left femoral artery. There is no thrombus or stenosis seen in the SVC, innominate or subclavian veins. The protal vein, eplinic vein and SMV are patent. The left-sided IVC, bilateral renal veins and other hepatic veins appear to  be paten.',
			impression: ''
		},
		{
			type : 'CT',
			body_part: "Abdomen and Pelvis",
			date : new Date('12-7-2012'),
			indication: 'Left flank pain x 8 months, but worse today; nausea, vomiting, hematochezia, possible hematuria, and constipation; HX. renal stones, HX. left ureteroscopy, and laster lithotriopsy. Propr ct study done on 10/01/08 - images being sent for comparison.',
			procedure: 'Axial images were obtained without intravenous or oral contrast',
			findings: 'There is no dilation of the intrerenal collecting systems or ureters bilaterally. Several stones are seen in the left kidney measuring up to 4 mm in size which are unchanged. There re also several punctate hyperdensities in the right kidney which could represent tinuy stones or possibly concentrated urine in the renal papilla. No masses are seen in the liver, splee, pancreas, adrenals, or kidneys. However, it should be noted that lesions in the solid abdominal organs can be missed without intravenous contrast. No free peritoneal fluid is seen in the abdomen or pelvis. No pelvic mass is seen. No significant bowel dilation is identified.',
			impression: ''
		}
	];

	var createProcedure = function(attb) {
		if (attb.body_part) { body_part = attb.body_part; }
		if (attb.type) { type = attb.type; }
		procedureModel = worklist.procedures.getRandomProcedure(patientsCollection.generateRandomPatient(), priors, worklist.procedures.length+1);
		if (attb.priority) { procedureModel.set('priority',attb.priority); }
		if (attb.lock !== undefined ) { procedureModel.set('lock',attb.lock); }
		if (attb.ready !== undefined) { procedureModel.set('ready',attb.ready); }

		procedureModel.set('procedure_type',type);
		procedureModel.set('body_part',body_part);
		procedureModel.set('clinical_indication',attb.indication);
		procedureModel.set('procedure_information',attb.procedure);
		procedureModel.set('findings',attb.findings);
		procedureModel.set('impression',attb.impression);

		// if (attb.priors) { procedureModel.priors = attb.priors };
		procedureModel.worklist = worklist;
		worklist.procedures.add(procedureModel);
	}

	//these are the current ones in the worklist
	createProcedure({
		priority : 4,
		type : 'CT',
		body_part : 'Chest',
		indication : 'Right lower lobe lung mass seen on abdominal/pelvic CT scan.',
		procedure: 'CT scan of the chest.'
	});
	createProcedure({
		priority : 2,
		type : 'CT',
		body_part : 'Abdomen',
		indication : 'Followup diverticulitis. Questionable abscess and enterovesical fistula.',
		procedure: 'Oral contrast enhanced CT scan abdomen and pelvis was performed. Coronal and sagittal reconstructions were created.',
		lock : 'Dr. McCarthy'
	});
	createProcedure({
		priority : 2,
		type: 'CT',
		body_part : 'head',
		indication : 'Low-speed MVA, patient found prone with some confusion. A&O x3. Rule out cervical fractures',
		procedure: 'Volumetric scanning of head and next performed in 64 slices.',
		ready : false
	});
	createProcedure({
		priority : 2,
		type : 'CT',
		body_part : "RT Wrist",
		indication : 'Pt fell off bicycle and landed on RT arm and shoulder. Complains of wrist pain.',
		procedure: 'AP and lateral CR images taken.'
	});




	// createProcedure({
	// 	type : 'NUCLEAR',
	// 	body_part: 'BACK',
	// 	indication : 'Low back pain; remote history of cancer.',
	// 	procedure: 'After intravenous administration of x mCi of Tc-99m MDP, delayed total body images were obtained. Selected spot images as well as tomographic images (SPECT) images of the lumbosacral spine were also obtained.',
	// 	findings : 'Focal areas of moderately increased tracer activity are present in the lateral aspects of the L4 vertebra. On tomographic imaging, these areas of abnormal tracer activity localize to the facet joints. Mildly increased focal tracer activity is also present in a symmetric pattern in the shoulders, sternoclavicular joints, hips, knees (right greater than left), and ankles. A focal area of mildly increased tracer activity is noted in the anteromedial aspect of  the left 2nd rib. Moderately increased focal tracer activity is present in the right maxilla. There is no abnormal tracer activity in the soft tissues or urinary tract.',
	// 	impression : '1. No scan evidence of osteoblastic metastatic disease. 2. Extensive degenerative changes are present in multiple peripheral joints and the lumbar spine. 3. Scan findings in the right maxilla are most consistent with periodontal disease. 4. The focus of mild tracer activity in the anteromedial aspect of the left 2nd rib is likely related to a healing rib fracture. 5. No previous bone scans were available for comparison. '
	// });


	// for (var i=0;i<3;i++) {

	// 	var procedureModel = worklist.procedures.getRandomProcedure(patientsCollection.generateRandomPatient());

	// 	procedureModel.worklist = worklist;

	// 	//var procedureView = new glasswing.views.procedure({model : procedureModel});

	// 	worklist.procedures.add(procedureModel);

	// }









	// var parseChapters = function(data) {
	// 	var chapters = {

	// 	}

	// 	_.each([data],function(chapter){
	// 		var key;
	// 		// var pane_count;
	// 		var pane_name;
	// 		_.each(markdown.toHTMLTree(chapter),function(node){





	// 			switch(node[0]) {
	// 				case 'h1' :
	// 					key = node[1].toURL();
	// 					if ( ! chapters.hasOwnProperty(key)) { chapters[key] = {panes : {}, panes_by_order : [] }; }
	// 					chapters[key].title = node[1];
	// 				break;
	// 				case 'h2' :
	// 					// if (pane_count===undefined) { pane_count = 0;}
	// 					// else { pane_count++; }
	// 					pane_name = node[1].toURL();
	// 					chapters[key].panes[pane_name] = {title : node[1], paragraphs : [] };
	// 					chapters[key].panes_by_order.push(chapters[key].panes[pane_name]);
	// 				break;
	// 				case 'p' :
	// 					chapters[key].panes[pane_name].paragraphs.push(node[1]);
	// 				break;
	// 			}
	// 		});
	// 	});
	// 	return chapters;
	// }

	// glasswing.config = {worklist : worklist, chapters : parseChapters($('#guide-chapter1')) };
	glasswing.config = {worklist : worklist };



})(jQuery);; /* ../prototype/js/router.js */ 	(function(){



		Backbone.sync = function(method, model, success, error){success();}
		var tabManager, worklist, guide, notifications;




		worklist = glasswing.config.worklist;


		var routes = {
			worklist : function(layout) {



				tabManager.showPage(worklist);
				glasswing.router.initial_route = false;
			},
			procedure : function(procedure_id) {


				glasswing.notif('procedure: ' + procedure_id);
				tabManager.getPage(worklist); // get page SETS the page, creates a tab. that's confusing.

				(function(procedure){
					// alert('this is no good, itll make an extra report if you go back to worklist and click again');
					// tabManager.showPage(new glasswing.views.report({model : procedure}));
					// console.log(procedure);
					// console.log(procedure.view);
					tabManager.showPage(procedure.view.getReport());

				})(worklist.procedures.getProcedure(procedure_id));
				glasswing.router.initial_route = false;


			},
			fourohfour : function() {

			}

		};

		var AppRouter = Backbone.Router.extend({
			routes: {
				"procedure/:procedure_id" : routes.procedure,
				"worklist" : routes.worklist,
				"": routes.worklist,
				"*actions": routes.fourohfour
			}
		}); // Initiate the router
		glasswing.router = new AppRouter();
		glasswing.config.routes = routes;

		glasswing.router.url = function(url,options) {
			this.navigate(url,options);
		}

		glasswing.router.initial_route = true;


		tabManager = new glasswing.collections.tabs({router : glasswing.router, worklist : worklist});
		worklist.notifications = new glasswing.views.notifications({tabManager : tabManager});

		Backbone.history.start();

		$('.loading').removeClass('loading');
		if (window['glasswing-guide-callback']) { window['glasswing-guide-callback'](); }
	})();;