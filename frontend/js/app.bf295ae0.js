(function(e){function t(t){for(var r,s,o=t[0],c=t[1],a=t[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return l.push.apply(l,a||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},l=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var u=c;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"2f15":function(e,t,n){"use strict";var r=n("5026"),i=n.n(r);i.a},"2f1e":function(e,t,n){},"474c":function(e,t,n){},5026:function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},"9c0c":function(e,t,n){},"9e28":function(e,t,n){"use strict";var r=n("ea36"),i=n.n(r);i.a},cd49:function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("main-view")],1)},l=[],s=n("9ab4"),o=n("60a3"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-view"},[n("file-selector",{staticClass:"selector",attrs:{selectedFile:e.selectedFile,options:e.options},on:{"update:selectedFile":function(t){e.selectedFile=t},"update:selected-file":function(t){e.selectedFile=t}}}),e.selectedFile?n("solution-inserter",{staticClass:"inserter",attrs:{value:e.proposedSolution},on:{"update:value":function(t){e.proposedSolution=t},renderSolution:e.onRenderedSolution}}):e._e(),n("renderer",{staticClass:"renderer",attrs:{rawInput:e.input,rawSolution:e.renderedSolution}})],1)},a=[],u=(n("e260"),n("e6cf"),n("ddb0"),n("bc3a")),p=n.n(u),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"file-selector"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.internalSelectedFile,expression:"internalSelectedFile"}],staticClass:"selector",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.internalSelectedFile=t.target.multiple?n:n[0]},function(t){return e.$emit("update:selectedFile",t.target.value)}]}},[n("option",{attrs:{value:""}},[e._v("SELEZIONA FILE DI INPUT")]),e._l(e.options,(function(t){return n("option",{key:t.path,domProps:{value:t.path}},[e._v(e._s(t.name))])}))],2)])},h=[];let f=class extends o["c"]{constructor(){super(...arguments),this.internalSelectedFile=""}watchSelectedFile(){this.internalSelectedFile=this.selectedFile}};Object(s["a"])([Object(o["b"])({type:String,required:!0})],f.prototype,"selectedFile",void 0),Object(s["a"])([Object(o["b"])({type:Array,required:!0})],f.prototype,"options",void 0),Object(s["a"])([Object(o["d"])("selectedFile")],f.prototype,"watchSelectedFile",null),f=Object(s["a"])([o["a"]],f);var v=f,b=v,O=(n("2f15"),n("2877")),y=Object(O["a"])(b,d,h,!1,null,"5e290cce",null),m=y.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"solution-inserter"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.internalValue,expression:"internalValue"}],staticClass:"input",attrs:{type:"search",placeholder:"INSERISCI SOLUZIONE/OUTPUT"},domProps:{value:e.internalValue},on:{input:[function(t){t.target.composing||(e.internalValue=t.target.value)},function(t){return e.$emit("update:value",t.target.value)}]}}),n("button",{staticClass:"button",on:{click:function(t){return e.$emit("renderSolution")}}},[e._v("MOSTRA")])])},S=[];let g=class extends o["c"]{constructor(){super(...arguments),this.internalValue=""}watchSelectedFile(){this.internalValue=this.value}};Object(s["a"])([Object(o["b"])({type:String,required:!0})],g.prototype,"value",void 0),Object(s["a"])([Object(o["d"])("value")],g.prototype,"watchSelectedFile",null),g=Object(s["a"])([o["a"]],g);var j,F,_=g,P=_,T=(n("d11d"),Object(O["a"])(P,w,S,!1,null,"0d81d48b",null)),E=T.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"renderer",style:e.componentStyle},[e.input?[e._l(e.input,(function(t,r){return e._l(t,(function(t,i){return n("span",{key:r+"-"+i,class:["cell",t,e.selectedClass[r][i]],on:{click:function(t){return e.toggleCell(r,i)}}})}))}))]:e._e()],2)},I=[];n("fb6a"),n("a434"),n("1276");(function(e){e["EMPTY"]="empty",e["BLACK"]="black",e["WHITE"]="white"})(j||(j={})),function(e){e[e["TOP"]=0]="TOP",e[e["RIGHT"]=1]="RIGHT",e[e["DOWN"]=2]="DOWN",e[e["LEFT"]=3]="LEFT"}(F||(F={}));let C=class extends o["c"]{constructor(){super(...arguments),this.internalSelectedFile="",this.selectedGrid=null}get input(){let e;if(this.rawInput){e=[];const t=this.rawInput.split("\n").map(e=>e.split(" ").map(e=>+e)),[n,r,i,l]=t.shift();for(let s=0;s<n;s++){e.push([]);for(let t=0;t<r;t++)e[s].push(j.EMPTY)}for(let s=0;s<i;s++){const[n,r]=t.shift();e[n][r]=j.BLACK}for(let s=0;s<l;s++){const[n,r]=t.shift();e[n][r]=j.WHITE}}else e=null;return e}get rows(){return this.input?this.input.length:null}get cols(){return this.input&&this.rows?this.input[0].length:null}get solutionPath(){let e;if(this.rawSolution){const t=this.rawSolution.split(/\s+/).slice(2),[n,r]=t.slice(0,2).map(e=>+e),i=t[2].split("").slice(0,t[2].length-1).map(e=>{switch(e){case"U":return F.TOP;case"R":return F.RIGHT;case"D":return F.DOWN;case"L":return F.LEFT}});e={start:{x:n,y:r},moves:i}}else e=null;return e}get componentStyle(){const e=this.rows&&this.cols&&this.rows<50&&this.cols<50?"1fr":"10px";return{"grid-template-rows":this.rows?[...Array(this.rows).keys()].map(()=>e).join(" "):"","grid-template-columns":this.cols?[...Array(this.cols).keys()].map(()=>e).join(" "):""}}get selectedClass(){return this.selectedGrid?this.selectedGrid.map(e=>e.map(e=>e?"selected":"")):null}toggleCell(e,t){this.selectedGrid&&this.selectedGrid[e].splice(t,1,!this.selectedGrid[e][t])}watchInput(){if(this.input&&this.rows&&this.cols){this.selectedGrid=[];for(let e=0;e<this.rows;e++){this.selectedGrid.push([]);for(let t=0;t<this.cols;t++)this.selectedGrid[e].push(!1)}}else this.selectedGrid=null}watchSolutionPath(){if(this.solutionPath&&this.selectedGrid){let{x:e,y:t}=this.solutionPath.start;this.selectedGrid[e][t]=!0;for(const n of this.solutionPath.moves){switch(n){case F.TOP:e--;break;case F.RIGHT:t++;break;case F.DOWN:e++;break;case F.LEFT:t--;break}this.selectedGrid[e].splice(t,1,!0)}}}};Object(s["a"])([Object(o["b"])({type:String})],C.prototype,"rawInput",void 0),Object(s["a"])([Object(o["b"])({type:String})],C.prototype,"rawSolution",void 0),Object(s["a"])([Object(o["d"])("input")],C.prototype,"watchInput",null),Object(s["a"])([Object(o["d"])("solutionPath")],C.prototype,"watchSolutionPath",null),C=Object(s["a"])([o["a"]],C);var G=C,k=G,$=(n("9e28"),Object(O["a"])(k,x,I,!1,null,"65cb1662",null)),L=$.exports;let N=class extends o["c"]{constructor(){super(...arguments),this.input=null,this.proposedSolution="",this.selectedFile="",this.options=[],this.renderedSolution=""}get host(){return"https://algo-render.herokuapp.com"}async mounted(){try{this.options=(await p.a.get(this.host+"/files-list")).data}catch(e){alert("Error in retrieveing files list"),console.error("Error in retrieveing files list",e),this.options=[]}}async watchSelectedFile(){try{this.input=(await p.a.get(`${this.host}/input?file=${this.selectedFile}`)).data}catch(e){alert("Error in retrieveing "+this.host),console.error("Error in retrieveing "+this.host,e),this.input=null}}onRenderedSolution(){this.renderedSolution=this.proposedSolution,this.proposedSolution=""}};Object(s["a"])([Object(o["d"])("selectedFile")],N.prototype,"watchSelectedFile",null),N=Object(s["a"])([Object(o["a"])({components:{FileSelector:m,SolutionInserter:E,Renderer:L}})],N);var R=N,A=R,M=(n("f444"),Object(O["a"])(A,c,a,!1,null,"b1b389dc",null)),V=M.exports;let D=class extends o["c"]{};D=Object(s["a"])([Object(o["a"])({components:{MainView:V}})],D);var H=D,W=H,U=(n("5c0b"),Object(O["a"])(W,i,l,!1,null,null,null)),q=U.exports;r["a"].config.productionTip=!1,new r["a"]({render:e=>e(q)}).$mount("#app")},d11d:function(e,t,n){"use strict";var r=n("474c"),i=n.n(r);i.a},ea36:function(e,t,n){},f444:function(e,t,n){"use strict";var r=n("2f1e"),i=n.n(r);i.a}});
//# sourceMappingURL=app.bf295ae0.js.map