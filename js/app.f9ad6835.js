(function(t){function e(e){for(var a,o,l=e[0],s=e[1],u=e[2],f=0,h=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);c&&c(e);while(h.length)h.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"3f45":function(t,e,n){"use strict";var a=n("fc14"),i=n.n(a);i.a},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"9c0c":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Cellular Automata")]),n("Graphics")],1)},r=[],o=n("d4ec"),l=n("262e"),s=n("2caf"),u=n("9ab4"),c=n("60a3"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"graphics"}},[t._m(0),n("div",{attrs:{id:"controls"}},[n("el-button",{attrs:{type:"info",plain:""},on:{click:t.updateButton}},[t._v("Update")]),null!=t.timer?n("el-button",{attrs:{type:"info",plain:""},on:{click:t.toggle}},[t._v(" "+t._s(t.timer.started?"Stop":"Start")+" ")]):t._e(),n("el-button",{attrs:{type:"info",plain:""},on:{click:t.clearScreen}},[t._v(" Clear Screen ")]),n("div",{staticStyle:{display:"inline-block",width:"200px",margin:"0 10px 0 10px"}},[n("el-input",{attrs:{type:"number",id:"input-delay"},on:{change:t.frameDelayTextbox},model:{value:t.inputDelay,callback:function(e){t.inputDelay=e},expression:"inputDelay"}},[n("template",{slot:"prepend"},[t._v("Frame Delay: ")])],2)],1),n("el-button",{attrs:{type:"info",plain:""},on:{click:t.saveLoad}},[t._v(" Save/Load ")]),n("el-dialog",{attrs:{title:"Save / Load",visible:t.saveLoadShow,width:"80%"},on:{"update:visible":function(e){t.saveLoadShow=e}}},[n("el-input",{attrs:{type:"textarea",rows:4,placeholder:"Please input",id:"save-load-code"},model:{value:t.saveLoadText,callback:function(e){t.saveLoadText=e},expression:"saveLoadText"}}),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{staticClass:"btn",attrs:{"data-clipboard-target":"#save-load-code"}},[t._v("Copy")]),n("el-button",{on:{click:t.load}},[t._v("Load")])],1)],1)],1)])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"canvas-div"}},[n("canvas",{attrs:{id:"world-canvas"}})])}],v=n("bee2"),d="#5f5f5f",p=1,y=4,b="#000000",g="#c8c8c8",w=y+p,k=function(){function t(e){Object(o["a"])(this,t),this.canvas=e,this.context=e.getContext("2d")}return Object(v["a"])(t,[{key:"setFrame",value:function(t,e){this.canvas.width=t,this.canvas.height=e}},{key:"drawRect",value:function(t,e){this.context.fillStyle=t,this.context.fillRect(e.x,e.y,e.xLen,e.yLen)}},{key:"drawGrid",value:function(){for(var t=this.width,e=this.height,n=y;n<t;n+=w)this.drawRect(d,{x:n,y:0,xLen:p,yLen:e});for(var a=y;a<e;a+=w)this.drawRect(d,{x:0,y:a,xLen:t,yLen:p})}},{key:"drawGridBlock",value:function(t,e){this.drawRect(t,{x:e.gridX*w,y:e.gridY*w,xLen:y,yLen:y})}},{key:"getCellColor",value:function(t){return t.status.alive?g:b}},{key:"drawCell",value:function(t){this.drawGridBlock(this.getCellColor(t),{gridX:t.point.x,gridY:t.point.y})}},{key:"width",get:function(){return this.canvas.width}},{key:"height",get:function(){return this.canvas.height}}]),t}(),x=(n("cb29"),n("4de4"),n("0481"),n("5db7"),n("4160"),n("d81d"),n("4069"),n("73d9"),n("d3b7"),n("6062"),n("3ca3"),n("159b"),n("ddb0"),n("b85c")),C=n("2909"),O=function(){function t(){Object(o["a"])(this,t)}return Object(v["a"])(t,null,[{key:"apply",value:function(e,n){var a,i=n[1][1].status.alive,r=n.flat().filter((function(t){return t.status.alive})).length-(i?1:0),o=Object(x["a"])(e);try{for(o.s();!(a=o.n()).done;){var l=a.value;if(t.check(l,i,r))return l.result}}catch(s){o.e(s)}finally{o.f()}return n[1][1].status}},{key:"check",value:function(t,e,n){if(e!=t.selfStatus.alive)return!1;var a,i=Object(x["a"])(t.conditions);try{for(i.s();!(a=i.n()).done;){var r=a.value;if(!this.checkCondition(r,n))return!1}}catch(o){i.e(o)}finally{i.f()}return!0}},{key:"checkCondition",value:function(t,e){switch(t.operator){case"<":return e<t.aliveCount;case"==":return e==t.aliveCount;case">":return e>t.aliveCount;case">=":return e>=t.aliveCount;case"<=":return e<=t.aliveCount}throw Error("Condition unrecognized: "+t.operator)}}]),t}();O.conway=[{selfStatus:{alive:!0},conditions:[{operator:"<",aliveCount:2}],result:{alive:!1}},{selfStatus:{alive:!0},conditions:[{operator:">=",aliveCount:2},{operator:"<=",aliveCount:3}],result:{alive:!0}},{selfStatus:{alive:!0},conditions:[{operator:">=",aliveCount:4}],result:{alive:!1}},{selfStatus:{alive:!1},conditions:[{operator:"==",aliveCount:3}],result:{alive:!0}}];var j={alive:!0},S={alive:!1},m=function(){function t(e){var n=this;Object(o["a"])(this,t),this.activePoints=[],this.config=e,this.clearGrid(),this.activePoints=[],e.presetCells.forEach((function(t){n.setCellStatus(t.point,t.status),n.activePoints.push(t.point)}))}return Object(v["a"])(t,[{key:"clearGrid",value:function(){var t=this;this.grid=new Array(this.config.width).fill(void 0).map((function(){return new Array(t.config.height).fill(void 0)})),this.activePoints.forEach((function(e){t.setCellStatus(e,S)})),this.activePoints=[]}},{key:"serializeWorld",value:function(){var t=this;return JSON.stringify(this.activePoints.filter((function(e){return t.getCell(e).status.alive})))}},{key:"loadWorld",value:function(t){var e=this,n=JSON.parse(t);n.forEach((function(t){e.setCellStatus(t,j),e.activePoints.push(t)}))}},{key:"getCell",value:function(e){var n=this.grid[e.x][e.y];return void 0!=n?n:this.grid[e.x][e.y]={point:e,status:t.defaultStatus}}},{key:"setCellStatus",value:function(t,e){var n=this.getCell(t);n.status=e.alive?j:S,null!=this.config.onUpdate&&this.config.onUpdate(n)}},{key:"updateActivePoints",value:function(){var t=this,e=this.activePoints.filter((function(e){return t.getCell(e).status.alive}));e=e.flatMap((function(e){return t.getNearbyCells(e).flat().map((function(t){return t.point}))})),this.activePoints=Object(C["a"])(new Set(e))}},{key:"getNearbyCells",value:function(t){for(var e=[],n=t.x-1;n<=t.x+1;n++){for(var a=[],i=t.y-1;i<=t.y+1;i++){var r=n%this.config.width,o=i%this.config.height;r<0&&(r=this.config.width+r),o<0&&(o=this.config.height+o),a.push(this.getCell({x:r,y:o}))}e.push(a)}return e}},{key:"act",value:function(){this.updateActivePoints();var t,e=[],n=Object(x["a"])(this.activePoints);try{for(n.s();!(t=n.n()).done;){var a=t.value,i=O.apply(this.config.rules,this.getNearbyCells(a));e.push({point:a,status:i})}}catch(s){n.e(s)}finally{n.f()}for(var r=0,o=e;r<o.length;r++){var l=o[r];this.setCellStatus(l.point,l.status),this.activePoints.push(l.point)}}}]),t}();m.defaultStatus={alive:!1};n("ac1f"),n("5319"),n("1276");var L=".##\n     ##.\n     .#.",_=".#####.........................................................#..................................................\n #.....#.######.#......#......#....#.#........##...#####.......#.#...#....#.#####..####..#....#...##...#####...##..\n #.......#......#......#......#....#.#.......#..#..#....#.....#...#..#....#...#...#....#.##..##..#..#....#....#..#.\n #.......#####..#......#......#....#.#......#....#.#....#....#.....#.#....#...#...#....#.#.##.#.#....#...#...#....#\n #.......#......#......#......#....#.#......######.#####.....#######.#....#...#...#....#.#....#.######...#...######\n #.....#.#......#......#......#....#.#......#....#.#...#.....#.....#.#....#...#...#....#.#....#.#....#...#...#....#\n .#####..######.######.######..####..######.#....#.#....#....#.....#..####....#....####..#....#.#....#...#...#....#",P=function(){function t(e){Object(o["a"])(this,t),this.x=e.x,this.y=e.y}return Object(v["a"])(t,[{key:"cell",value:function(t,e,n){return{point:{x:this.x+t,y:this.y+e},status:n}}},{key:"parse",value:function(t){var e=this,n=t.pattern.replace(/ /g,"").split("\n"),a=[],i=Math.floor(t.width/2),r=Math.floor(t.height/2);return n.forEach((function(t,n){for(var o=0;o<t.length;o++)a.push(e.cell(o-i,n-r,"#"==t.charAt(o)?j:S))})),a}},{key:"R_PENTOMINO",get:function(){return this.parse({width:3,height:3,pattern:L})}},{key:"CELLULAR_AUTOMATA",get:function(){var t=this.parse({width:114,height:6,pattern:_});return t}}]),t}(),T=function(){function t(e,n){Object(o["a"])(this,t),this.intervalId=-1,this.callback=e,this.delay=n}return Object(v["a"])(t,[{key:"setDelay",value:function(t){this.delay=t,this.restart()}},{key:"start",value:function(){this.started&&stop(),this.intervalId=setInterval(this.callback,this.delay)}},{key:"stop",value:function(){this.started&&(clearInterval(this.intervalId),this.intervalId=-1)}},{key:"restart",value:function(){this.started&&(this.stop(),this.start())}},{key:"toggle",value:function(){this.started?this.stop():this.start()}},{key:"started",get:function(){return-1!=this.intervalId}}]),t}(),A=n("b311"),E=n.n(A),M=function(t){Object(l["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.timer=null,t.inputDelay=100,t.saveLoadText="",t.saveLoadShow=!1,t}return Object(v["a"])(n,[{key:"mounted",value:function(){var t=this,e=document.querySelector("#world-canvas");if(null!=e){var n=e;this.renderer=new k(n),this.renderer.setFrame(1e3,500),this.renderer.drawGrid(),this.world=new m({name:"Test",width:200,height:100,rules:O.conway,presetCells:new P({x:100,y:50}).CELLULAR_AUTOMATA,onUpdate:function(e){return t.renderer.drawCell(e)}}),this.timer=new T((function(){return t.world.act()}),this.inputDelay),new E.a(".btn"),n.addEventListener("click",(function(e){var a=e.pageX-n.offsetLeft,i=e.pageY-n.offsetTop;console.log(a+", "+i);var r={x:Math.floor(a/5/n.offsetWidth*1e3),y:Math.floor(i/5/n.offsetHeight*500)},o=t.world.getCell(r);t.world.setCellStatus(r,{alive:!o.status.alive}),t.world.activePoints.push(r)}))}}},{key:"updateButton",value:function(){this.world.act()}},{key:"toggle",value:function(){this.timer.toggle()}},{key:"frameDelayTextbox",value:function(){this.timer.setDelay(this.inputDelay)}},{key:"clearScreen",value:function(){this.world.clearGrid()}},{key:"saveLoad",value:function(){this.saveLoadShow=!0,this.saveLoadText=this.world.serializeWorld()}},{key:"load",value:function(){this.world.loadWorld(this.saveLoadText)}}]),n}(c["b"]);M=Object(u["a"])([c["a"]],M);var D=M,G=D,I=(n("3f45"),n("2877")),R=Object(I["a"])(G,f,h,!1,null,"574207eb",null),U=R.exports,N=function(t){Object(l["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return n}(c["b"]);N=Object(u["a"])([Object(c["a"])({components:{Graphics:U}})],N);var W=N,B=W,J=(n("5c0b"),Object(I["a"])(B,i,r,!1,null,null,null)),$=J.exports,z=n("5c96"),F=n.n(z);n("0fae");a["default"].use(F.a),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t($)}}).$mount("#app")},fc14:function(t,e,n){}});
//# sourceMappingURL=app.f9ad6835.js.map