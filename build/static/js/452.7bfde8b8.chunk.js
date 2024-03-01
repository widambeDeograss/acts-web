"use strict";(self.webpackChunkacts_web=self.webpackChunkacts_web||[]).push([[452],{17369:function(n,e,t){t.d(e,{R:function(){return u}});var r,u=((r=u||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},82801:function(n,e,t){t.d(e,{u:function(){return z}});var r=t(93433),u=t(1413),o=t(45987),i=t(37762),a=t(29439),c=t(4942),f=t(72791),l=t(15612),s=t(4510),d=t(79904),v=t(11262),p=t(84705),m=t(22806),h=t(81511),g=t(94159);var y=t(56958);function E(n){for(var e,t=arguments.length,r=new Array(t>1?t-1:0),u=1;u<t;u++)r[u-1]=arguments[u];n&&r.length>0&&(e=n.classList).add.apply(e,r)}function b(n){for(var e,t=arguments.length,r=new Array(t>1?t-1:0),u=1;u<t;u++)r[u-1]=arguments[u];n&&r.length>0&&(e=n.classList).remove.apply(e,r)}function w(n,e,t,u){var o=t?"enter":"leave",i=(0,y.k)(),c=void 0!==u?function(n){var e={called:!1};return function(){if(!e.called)return e.called=!0,n.apply(void 0,arguments)}}(u):function(){};"enter"===o&&(n.removeAttribute("hidden"),n.style.display="");var f=(0,d.E)(o,{enter:function(){return e.enter},leave:function(){return e.leave}}),l=(0,d.E)(o,{enter:function(){return e.enterTo},leave:function(){return e.leaveTo}}),s=(0,d.E)(o,{enter:function(){return e.enterFrom},leave:function(){return e.leaveFrom}});return b.apply(void 0,[n].concat((0,r.Z)(e.enter),(0,r.Z)(e.enterTo),(0,r.Z)(e.enterFrom),(0,r.Z)(e.leave),(0,r.Z)(e.leaveFrom),(0,r.Z)(e.leaveTo),(0,r.Z)(e.entered))),E.apply(void 0,[n].concat((0,r.Z)(f),(0,r.Z)(s))),i.nextFrame((function(){b.apply(void 0,[n].concat((0,r.Z)(s))),E.apply(void 0,[n].concat((0,r.Z)(l))),function(n,e){var t=(0,y.k)();if(!n)return t.dispose;var r=getComputedStyle(n),u=[r.transitionDuration,r.transitionDelay].map((function(n){var e=n.split(",").filter(Boolean).map((function(n){return n.includes("ms")?parseFloat(n):1e3*parseFloat(n)})).sort((function(n,e){return e-n})),t=(0,a.Z)(e,1)[0];return void 0===t?0:t})),o=(0,a.Z)(u,2),i=o[0]+o[1];if(0!==i){t.group((function(t){t.setTimeout((function(){e(),t.dispose()}),i),t.addEventListener(n,"transitionrun",(function(n){n.target===n.currentTarget&&t.dispose()}))}));var c=t.addEventListener(n,"transitionend",(function(n){n.target===n.currentTarget&&(e(),c())}))}else e();t.add((function(){return e()})),t.dispose}(n,(function(){return b.apply(void 0,[n].concat((0,r.Z)(f))),E.apply(void 0,[n].concat((0,r.Z)(e.entered))),c()}))})),i.dispose}var Z=t(5623);var F=t(23654),O=t(48210);var T=["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"],A=["show","appear","unmount"];function S(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(" ").filter((function(n){return n.trim().length>1}))}var N=(0,f.createContext)(null);N.displayName="TransitionContext";var L,P=((L=P||{}).Visible="visible",L.Hidden="hidden",L);var k=(0,f.createContext)(null);function C(n){return"children"in n?C(n.children):n.current.filter((function(n){return null!==n.el.current})).filter((function(n){return"visible"===n.state})).length>0}function x(n,e){var t=(0,m.E)(n),r=(0,f.useRef)([]),u=(0,v.t)(),o=(0,Z.G)(),i=(0,F.z)((function(n){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.l4.Hidden,a=r.current.findIndex((function(e){return e.el===n}));-1!==a&&((0,d.E)(i,(e={},(0,c.Z)(e,l.l4.Unmount,(function(){r.current.splice(a,1)})),(0,c.Z)(e,l.l4.Hidden,(function(){r.current[a].state="hidden"})),e)),o.microTask((function(){var n;!C(r)&&u.current&&(null==(n=t.current)||n.call(t))})))})),s=(0,F.z)((function(n){var e=r.current.find((function(e){return e.el===n}));return e?"visible"!==e.state&&(e.state="visible"):r.current.push({el:n,state:"visible"}),function(){return i(n,l.l4.Unmount)}})),p=(0,f.useRef)([]),h=(0,f.useRef)(Promise.resolve()),g=(0,f.useRef)({enter:[],leave:[],idle:[]}),y=(0,F.z)((function(n,t,r){p.current.splice(0),e&&(e.chains.current[t]=e.chains.current[t].filter((function(e){return(0,a.Z)(e,1)[0]!==n}))),null==e||e.chains.current[t].push([n,new Promise((function(n){p.current.push(n)}))]),null==e||e.chains.current[t].push([n,new Promise((function(n){Promise.all(g.current[t].map((function(n){var e=(0,a.Z)(n,2);e[0];return e[1]}))).then((function(){return n()}))}))]),"enter"===t?h.current=h.current.then((function(){return null==e?void 0:e.wait.current})).then((function(){return r(t)})):r(t)})),E=(0,F.z)((function(n,e,t){Promise.all(g.current[e].splice(0).map((function(n){var e=(0,a.Z)(n,2);e[0];return e[1]}))).then((function(){var n;null==(n=p.current.shift())||n()})).then((function(){return t(e)}))}));return(0,f.useMemo)((function(){return{children:r,register:s,unregister:i,onStart:y,onStop:E,wait:h,chains:g}}),[s,i,r,y,E,g,h])}function M(){}k.displayName="NestingContext";var R=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function j(n){var e,t,r={},u=(0,i.Z)(R);try{for(u.s();!(t=u.n()).done;){var o=t.value;r[o]=null!=(e=n[o])?e:M}}catch(a){u.e(a)}finally{u.f()}return r}var H=l.AN.RenderStrategy;var I=(0,l.yV)((function(n,e){var t=n.show,r=n.appear,i=void 0!==r&&r,c=n.unmount,d=(0,o.Z)(n,A),v=(0,f.useRef)(null),m=(0,g.T)(v,e);(0,h.H)();var y=(0,s.oJ)();if(void 0===t&&null!==y&&(t=(y&s.ZM.Open)===s.ZM.Open),![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var E=(0,f.useState)(t?"visible":"hidden"),b=(0,a.Z)(E,2),w=b[0],Z=b[1],O=x((function(){Z("hidden")})),T=(0,f.useState)(!0),S=(0,a.Z)(T,2),L=S[0],P=S[1],M=(0,f.useRef)([t]);(0,p.e)((function(){!1!==L&&M.current[M.current.length-1]!==t&&(M.current.push(t),P(!1))}),[M,t]);var R=(0,f.useMemo)((function(){return{show:t,appear:i,initial:L}}),[t,i,L]);(0,f.useEffect)((function(){if(t)Z("visible");else if(C(O)){var n=v.current;if(!n)return;var e=n.getBoundingClientRect();0===e.x&&0===e.y&&0===e.width&&0===e.height&&Z("hidden")}else Z("hidden")}),[t,O]);var j={unmount:c},I=(0,F.z)((function(){var e;L&&P(!1),null==(e=n.beforeEnter)||e.call(n)})),U=(0,F.z)((function(){var e;L&&P(!1),null==(e=n.beforeLeave)||e.call(n)}));return f.createElement(k.Provider,{value:O},f.createElement(N.Provider,{value:R},(0,l.sY)({ourProps:(0,u.Z)((0,u.Z)({},j),{},{as:f.Fragment,children:f.createElement(D,(0,u.Z)((0,u.Z)((0,u.Z)({ref:m},j),d),{},{beforeEnter:I,beforeLeave:U}))}),theirProps:{},defaultTag:f.Fragment,features:H,visible:"visible"===w,name:"Transition"})))})),D=(0,l.yV)((function(n,e){var t,i=n.beforeEnter,E=n.afterEnter,b=n.beforeLeave,A=n.afterLeave,L=n.enter,P=n.enterFrom,M=n.enterTo,R=n.entered,I=n.leave,D=n.leaveFrom,U=n.leaveTo,z=(0,o.Z)(n,T),V=(0,f.useRef)(null),_=(0,g.T)(V,e),q=z.unmount?l.l4.Unmount:l.l4.Hidden,G=function(){var n=(0,f.useContext)(N);if(null===n)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return n}(),B=G.show,Y=G.appear,J=G.initial,K=(0,f.useState)(B?"visible":"hidden"),W=(0,a.Z)(K,2),X=W[0],Q=W[1],$=function(){var n=(0,f.useContext)(k);if(null===n)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return n}(),nn=$.register,en=$.unregister,tn=(0,f.useRef)(null);(0,f.useEffect)((function(){return nn(V)}),[nn,V]),(0,f.useEffect)((function(){var n;if(q===l.l4.Hidden&&V.current)return B&&"visible"!==X?void Q("visible"):(0,d.E)(X,(n={},(0,c.Z)(n,"hidden",(function(){return en(V)})),(0,c.Z)(n,"visible",(function(){return nn(V)})),n))}),[X,V,nn,en,B,q]);var rn=(0,m.E)({enter:S(L),enterFrom:S(P),enterTo:S(M),entered:S(R),leave:S(I),leaveFrom:S(D),leaveTo:S(U)}),un=function(n){var e=(0,f.useRef)(j(n));return(0,f.useEffect)((function(){e.current=j(n)}),[n]),e}({beforeEnter:i,afterEnter:E,beforeLeave:b,afterLeave:A}),on=(0,h.H)();(0,f.useEffect)((function(){if(on&&"visible"===X&&null===V.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[V,X,on]);var an=J&&!Y,cn=!on||an||tn.current===B?"idle":B?"enter":"leave",fn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=(0,f.useState)(n),t=(0,a.Z)(e,2),r=t[0],u=t[1],o=(0,v.t)(),i=(0,f.useCallback)((function(n){o.current&&u((function(e){return e|n}))}),[r,o]),c=(0,f.useCallback)((function(n){return Boolean(r&n)}),[r]),l=(0,f.useCallback)((function(n){o.current&&u((function(e){return e&~n}))}),[u,o]),s=(0,f.useCallback)((function(n){o.current&&u((function(e){return e^n}))}),[u]);return{flags:r,addFlag:i,hasFlag:c,removeFlag:l,toggleFlag:s}}(0),ln=(0,F.z)((function(n){return(0,d.E)(n,{enter:function(){fn.addFlag(s.ZM.Opening),un.current.beforeEnter()},leave:function(){fn.addFlag(s.ZM.Closing),un.current.beforeLeave()},idle:function(){}})})),sn=(0,F.z)((function(n){return(0,d.E)(n,{enter:function(){fn.removeFlag(s.ZM.Opening),un.current.afterEnter()},leave:function(){fn.removeFlag(s.ZM.Closing),un.current.afterLeave()},idle:function(){}})})),dn=x((function(){Q("hidden"),en(V)}),$);(function(n){var e=n.container,t=n.direction,r=n.classes,u=n.onStart,o=n.onStop,i=(0,v.t)(),a=(0,Z.G)(),c=(0,m.E)(t);(0,p.e)((function(){var n=(0,y.k)();a.add(n.dispose);var t=e.current;if(t&&"idle"!==c.current&&i.current)return n.dispose(),u.current(c.current),n.add(w(t,r.current,"enter"===c.current,(function(){n.dispose(),o.current(c.current)}))),n.dispose}),[t])})({container:V,classes:rn,direction:cn,onStart:(0,m.E)((function(n){dn.onStart(V,n,ln)})),onStop:(0,m.E)((function(n){dn.onStop(V,n,sn),"leave"===n&&!C(dn)&&(Q("hidden"),en(V))}))}),(0,f.useEffect)((function(){an&&(q===l.l4.Hidden?tn.current=null:tn.current=B)}),[B,an,X]);var vn=z,pn={ref:_};return Y&&B&&J&&(vn=(0,u.Z)((0,u.Z)({},vn),{},{className:O.A.apply(void 0,[z.className].concat((0,r.Z)(rn.current.enter),(0,r.Z)(rn.current.enterFrom)))})),f.createElement(k.Provider,{value:dn},f.createElement(s.up,{value:(0,d.E)(X,(t={},(0,c.Z)(t,"visible",s.ZM.Open),(0,c.Z)(t,"hidden",s.ZM.Closed),t))|fn.flags},(0,l.sY)({ourProps:pn,theirProps:vn,defaultTag:"div",features:H,visible:"visible"===X,name:"Transition.Child"})))})),U=(0,l.yV)((function(n,e){var t=null!==(0,f.useContext)(N),r=null!==(0,s.oJ)();return f.createElement(f.Fragment,null,!t&&r?f.createElement(I,(0,u.Z)({ref:e},n)):f.createElement(D,(0,u.Z)({ref:e},n)))})),z=Object.assign(I,{Child:U,Root:I})},5623:function(n,e,t){t.d(e,{G:function(){return i}});var r=t(29439),u=t(72791),o=t(56958);function i(){var n=(0,u.useState)(o.k),e=(0,r.Z)(n,1)[0];return(0,u.useEffect)((function(){return function(){return e.dispose()}}),[e]),e}},23654:function(n,e,t){t.d(e,{z:function(){return o}});var r=t(72791),u=t(22806),o=function(n){var e=(0,u.E)(n);return r.useCallback((function(){return e.current.apply(e,arguments)}),[e])}},47003:function(n,e,t){t.d(e,{M:function(){return f}});var r,u=t(29439),o=t(72791),i=t(84705),a=t(81511),c=t(43784),f=null!=(r=o.useId)?r:function(){var n=(0,a.H)(),e=o.useState(n?function(){return c.O.nextId()}:null),t=(0,u.Z)(e,2),r=t[0],f=t[1];return(0,i.e)((function(){null===r&&f(c.O.nextId())}),[r]),null!=r?""+r:void 0}},11262:function(n,e,t){t.d(e,{t:function(){return o}});var r=t(72791),u=t(84705);function o(){var n=(0,r.useRef)(!1);return(0,u.e)((function(){return n.current=!0,function(){n.current=!1}}),[]),n}},84705:function(n,e,t){t.d(e,{e:function(){return o}});var r=t(72791),u=t(43784),o=function(n,e){u.O.isServer?(0,r.useEffect)(n,e):(0,r.useLayoutEffect)(n,e)}},22806:function(n,e,t){t.d(e,{E:function(){return o}});var r=t(72791),u=t(84705);function o(n){var e=(0,r.useRef)(n);return(0,u.e)((function(){e.current=n}),[n]),e}},19541:function(n,e,t){t.d(e,{O:function(){return f}});var r=t(37762),u=t(72791),o=t(60981),i=t(22806);function a(n,e,t){var r=(0,i.E)(e);(0,u.useEffect)((function(){function e(n){r.current(n)}return document.addEventListener(n,e,t),function(){return document.removeEventListener(n,e,t)}}),[n,t])}var c=t(70642);function f(n,e){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=(0,u.useRef)(!1);function f(t,u){if(i.current&&!t.defaultPrevented){var a=u(t);if(null!==a&&a.getRootNode().contains(a)){var c,f=function n(e){return"function"==typeof e?n(e()):Array.isArray(e)||e instanceof Set?e:[e]}(n),l=(0,r.Z)(f);try{for(l.s();!(c=l.n()).done;){var s=c.value;if(null!==s){var d=s instanceof HTMLElement?s:s.current;if(null!=d&&d.contains(a)||t.composed&&t.composedPath().includes(d))return}}}catch(v){l.e(v)}finally{l.f()}return!(0,o.sP)(a,o.tJ.Loose)&&-1!==a.tabIndex&&t.preventDefault(),e(t,a)}}}(0,u.useEffect)((function(){requestAnimationFrame((function(){i.current=t}))}),[t]);var l=(0,u.useRef)(null);a("mousedown",(function(n){var e,t;i.current&&(l.current=(null==(t=null==(e=n.composedPath)?void 0:e.call(n))?void 0:t[0])||n.target)}),!0),a("click",(function(n){l.current&&(f(n,(function(){return l.current})),l.current=null)}),!0),(0,c.s)("blur",(function(n){return f(n,(function(){return window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null}))}),!0)}},37281:function(n,e,t){t.d(e,{i:function(){return o}});var r=t(72791),u=t(55718);function o(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return(0,r.useMemo)((function(){return u.r.apply(void 0,e)}),[].concat(e))}},81511:function(n,e,t){t.d(e,{H:function(){return i}});var r=t(29439),u=t(72791),o=t(43784);function i(){var n=(0,u.useState)(o.O.isHandoffComplete),e=(0,r.Z)(n,2),t=e[0],i=e[1];return t&&!1===o.O.isHandoffComplete&&i(!1),(0,u.useEffect)((function(){!0!==t&&i(!0)}),[t]),(0,u.useEffect)((function(){return o.O.handoff()}),[]),t}},94159:function(n,e,t){t.d(e,{T:function(){return f},h:function(){return c}});var r=t(37762),u=t(4942),o=t(72791),i=t(23654),a=Symbol();function c(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Object.assign(n,(0,u.Z)({},a,e))}function f(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var u=(0,o.useRef)(e);(0,o.useEffect)((function(){u.current=e}),[e]);var c=(0,i.z)((function(n){var e,t=(0,r.Z)(u.current);try{for(t.s();!(e=t.n()).done;){var o=e.value;null!=o&&("function"==typeof o?o(n):o.current=n)}}catch(i){t.e(i)}finally{t.f()}}));return e.every((function(n){return null==n||(null==n?void 0:n[a])}))?void 0:c}},70642:function(n,e,t){t.d(e,{s:function(){return o}});var r=t(72791),u=t(22806);function o(n,e,t){var o=(0,u.E)(e);(0,r.useEffect)((function(){function e(n){o.current(n)}return window.addEventListener(n,e,t),function(){return window.removeEventListener(n,e,t)}}),[n,t])}},4510:function(n,e,t){t.d(e,{ZM:function(){return i},oJ:function(){return a},up:function(){return c}});var r=t(72791),u=(0,r.createContext)(null);u.displayName="OpenClosedContext";var o,i=((o=i||{})[o.Open=1]="Open",o[o.Closed=2]="Closed",o[o.Closing=4]="Closing",o[o.Opening=8]="Opening",o);function a(){return(0,r.useContext)(u)}function c(n){var e=n.value,t=n.children;return r.createElement(u.Provider,{value:e},t)}},72953:function(n,e,t){function r(n){for(var e=n.parentElement,t=null;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(t=e),e=e.parentElement;var r=""===(null==e?void 0:e.getAttribute("disabled"));return(!r||!function(n){if(!n)return!1;for(var e=n.previousElementSibling;null!==e;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}(t))&&r}t.d(e,{P:function(){return r}})},48210:function(n,e,t){function r(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.filter(Boolean).join(" ")}t.d(e,{A:function(){return r}})},56958:function(n,e,t){t.d(e,{k:function(){return i}});var r=t(37762),u=t(4942),o=t(28106);function i(){var n=[],e={addEventListener:function(n,t,r,u){return n.addEventListener(t,r,u),e.add((function(){return n.removeEventListener(t,r,u)}))},requestAnimationFrame:function(n){function e(){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}((function(){var n=requestAnimationFrame.apply(void 0,arguments);return e.add((function(){return cancelAnimationFrame(n)}))})),nextFrame:function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return e.requestAnimationFrame((function(){return e.requestAnimationFrame.apply(e,t)}))},setTimeout:function(n){function e(){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}((function(){var n=setTimeout.apply(void 0,arguments);return e.add((function(){return clearTimeout(n)}))})),microTask:function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var u={current:!0};return(0,o.Y)((function(){u.current&&t[0]()})),e.add((function(){u.current=!1}))},style:function(n,e,t){var r=n.style.getPropertyValue(e);return Object.assign(n.style,(0,u.Z)({},e,t)),this.add((function(){Object.assign(n.style,(0,u.Z)({},e,r))}))},group:function(n){var e=i();return n(e),this.add((function(){return e.dispose()}))},add:function(e){return n.push(e),function(){var t=n.indexOf(e);if(t>=0){var u,o=(0,r.Z)(n.splice(t,1));try{for(o.s();!(u=o.n()).done;){(0,u.value)()}}catch(i){o.e(i)}finally{o.f()}}}},dispose:function(){var e,t=(0,r.Z)(n.splice(0));try{for(t.s();!(e=t.n()).done;){(0,e.value)()}}catch(u){t.e(u)}finally{t.f()}}};return e}},43784:function(n,e,t){t.d(e,{O:function(){return a}});var r=t(15671),u=t(43144),o=Object.defineProperty,i=function(n,e,t){return function(n,e,t){e in n?o(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t}(n,"symbol"!=typeof e?e+"":e,t),t},a=new(function(){function n(){(0,r.Z)(this,n),i(this,"current",this.detect()),i(this,"handoffState","pending"),i(this,"currentId",0)}return(0,u.Z)(n,[{key:"set",value:function(n){this.current!==n&&(this.handoffState="pending",this.currentId=0,this.current=n)}},{key:"reset",value:function(){this.set(this.detect())}},{key:"nextId",value:function(){return++this.currentId}},{key:"isServer",get:function(){return"server"===this.current}},{key:"isClient",get:function(){return"client"===this.current}},{key:"detect",value:function(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}},{key:"handoff",value:function(){"pending"===this.handoffState&&(this.handoffState="complete")}},{key:"isHandoffComplete",get:function(){return"complete"===this.handoffState}}]),n}())},60981:function(n,e,t){t.d(e,{C5:function(){return E},EO:function(){return Z},TO:function(){return s},fE:function(){return d},jA:function(){return F},sP:function(){return h},tJ:function(){return m},wI:function(){return g},z2:function(){return w}});var r,u,o,i=t(4942),a=t(56958),c=t(79904),f=t(55718),l=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(n){return"".concat(n,":not([tabindex='-1'])")})).join(","),s=((o=s||{})[o.First=1]="First",o[o.Previous=2]="Previous",o[o.Next=4]="Next",o[o.Last=8]="Last",o[o.WrapAround=16]="WrapAround",o[o.NoScroll=32]="NoScroll",o),d=((u=d||{})[u.Error=0]="Error",u[u.Overflow=1]="Overflow",u[u.Success=2]="Success",u[u.Underflow=3]="Underflow",u),v=((r=v||{})[r.Previous=-1]="Previous",r[r.Next=1]="Next",r);function p(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return null==n?[]:Array.from(n.querySelectorAll(l)).sort((function(n,e){return Math.sign((n.tabIndex||Number.MAX_SAFE_INTEGER)-(e.tabIndex||Number.MAX_SAFE_INTEGER))}))}var m=function(n){return n[n.Strict=0]="Strict",n[n.Loose=1]="Loose",n}(m||{});function h(n){var e,t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return n!==(null==(t=(0,f.r)(n))?void 0:t.body)&&(0,c.E)(r,(e={},(0,i.Z)(e,0,(function(){return n.matches(l)})),(0,i.Z)(e,1,(function(){for(var e=n;null!==e;){if(e.matches(l))return!0;e=e.parentElement}return!1})),e))}function g(n){var e=(0,f.r)(n);(0,a.k)().nextFrame((function(){e&&!h(e.activeElement,0)&&E(n)}))}var y=function(n){return n[n.Keyboard=0]="Keyboard",n[n.Mouse=1]="Mouse",n}(y||{});function E(n){null==n||n.focus({preventScroll:!0})}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")}),!0),document.addEventListener("click",(function(n){1===n.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===n.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")}),!0));var b=["textarea","input"].join(",");function w(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(n){return n};return n.slice().sort((function(n,t){var r=e(n),u=e(t);if(null===r||null===u)return 0;var o=r.compareDocumentPosition(u);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function Z(n,e){return F(p(),e,{relativeTo:n})}function F(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.sorted,u=void 0===r||r,o=t.relativeTo,i=void 0===o?null:o,a=t.skipElements,c=void 0===a?[]:a,f=Array.isArray(n)?n.length>0?n[0].ownerDocument:document:n.ownerDocument,l=Array.isArray(n)?u?w(n):n:p(n);c.length>0&&l.length>1&&(l=l.filter((function(n){return!c.includes(n)}))),i=null!=i?i:f.activeElement;var s,d=function(){if(5&e)return 1;if(10&e)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),v=function(){if(1&e)return 0;if(2&e)return Math.max(0,l.indexOf(i))-1;if(4&e)return Math.max(0,l.indexOf(i))+1;if(8&e)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),m=32&e?{preventScroll:!0}:{},h=0,g=l.length;do{if(h>=g||h+g<=0)return 0;var y=v+h;if(16&e)y=(y+g)%g;else{if(y<0)return 3;if(y>=g)return 1}null==(s=l[y])||s.focus(m),h+=d}while(s!==f.activeElement);return 6&e&&function(n){var e,t;return null!=(t=null==(e=null==n?void 0:n.matches)?void 0:e.call(n,b))&&t}(s)&&s.select(),2}},79904:function(n,e,t){function r(n,e){if(n in e){for(var t=e[n],u=arguments.length,o=new Array(u>2?u-2:0),i=2;i<u;i++)o[i-2]=arguments[i];return"function"==typeof t?t.apply(void 0,o):t}var a=new Error('Tried to handle "'.concat(n,'" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(e).map((function(n){return'"'.concat(n,'"')})).join(", "),"."));throw Error.captureStackTrace&&Error.captureStackTrace(a,r),a}t.d(e,{E:function(){return r}})},28106:function(n,e,t){function r(n){"function"==typeof queueMicrotask?queueMicrotask(n):Promise.resolve().then(n).catch((function(n){return setTimeout((function(){throw n}))}))}t.d(e,{Y:function(){return r}})},55718:function(n,e,t){t.d(e,{r:function(){return u}});var r=t(43784);function u(n){return r.O.isServer?null:n instanceof Node?n.ownerDocument:null!=n&&n.hasOwnProperty("current")&&n.current instanceof Node?n.current.ownerDocument:document}},15612:function(n,e,t){t.d(e,{AN:function(){return h},l4:function(){return g},sY:function(){return y},yV:function(){return w}});var r,u,o=t(37762),i=t(29439),a=t(4942),c=t(1413),f=t(45987),l=t(72791),s=t(48210),d=t(79904),v=["static"],p=["unmount"],m=["as","children","refName"],h=((u=h||{})[u.None=0]="None",u[u.RenderStrategy=1]="RenderStrategy",u[u.Static=2]="Static",u),g=((r=g||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function y(n){var e=n.ourProps,t=n.theirProps,r=n.slot,u=n.defaultTag,o=n.features,i=n.visible,l=void 0===i||i,s=n.name,m=b(t,e);if(l)return E(m,r,u,s);var h=null!=o?o:0;if(2&h){var g=m.static,y=void 0!==g&&g,w=(0,f.Z)(m,v);if(y)return E(w,r,u,s)}if(1&h){var Z,F=m.unmount,O=void 0===F||F,T=(0,f.Z)(m,p);return(0,d.E)(O?0:1,(Z={},(0,a.Z)(Z,0,(function(){return null})),(0,a.Z)(Z,1,(function(){return E((0,c.Z)((0,c.Z)({},T),{},{hidden:!0,style:{display:"none"}}),r,u,s)})),Z))}return E(m,r,u,s)}function E(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,u=F(n,["unmount","static"]),c=u.as,d=void 0===c?t:c,v=u.children,p=u.refName,h=void 0===p?"ref":p,g=(0,f.Z)(u,m),y=void 0!==n.ref?(0,a.Z)({},h,n.ref):{},E="function"==typeof v?v(e):v;"className"in g&&g.className&&"function"==typeof g.className&&(g.className=g.className(e));var w={};if(e){for(var O=!1,T=[],A=0,S=Object.entries(e);A<S.length;A++){var N=(0,i.Z)(S[A],2),L=N[0],P=N[1];"boolean"==typeof P&&(O=!0),!0===P&&T.push(L)}O&&(w["data-headlessui-state"]=T.join(" "))}if(d===l.Fragment&&Object.keys(Z(g)).length>0){if(!(0,l.isValidElement)(E)||Array.isArray(E)&&E.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <".concat(r,' /> is rendering a "Fragment".'),"However we need to passthrough the following props:",Object.keys(g).map((function(n){return"  - ".concat(n)})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(n){return"  - ".concat(n)})).join("\n")].join("\n"));var k=E.props,C="function"==typeof(null==k?void 0:k.className)?function(){return(0,s.A)(null==k?void 0:k.className.apply(k,arguments),g.className)}:(0,s.A)(null==k?void 0:k.className,g.className),x=C?{className:C}:{};return(0,l.cloneElement)(E,Object.assign({},b(E.props,Z(F(g,["ref"]))),w,y,function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return{ref:e.every((function(n){return null==n}))?void 0:function(n){var t,r=(0,o.Z)(e);try{for(r.s();!(t=r.n()).done;){var u=t.value;null!=u&&("function"==typeof u?u(n):u.current=n)}}catch(i){r.e(i)}finally{r.f()}}}}(E.ref,y.ref),x))}return(0,l.createElement)(d,Object.assign({},F(g,["ref"]),d!==l.Fragment&&y,d!==l.Fragment&&w),E)}function b(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];if(0===e.length)return{};if(1===e.length)return e[0];for(var r={},u={},i=0,c=e;i<c.length;i++){var f=c[i];for(var l in f)l.startsWith("on")&&"function"==typeof f[l]?(null!=u[l]||(u[l]=[]),u[l].push(f[l])):r[l]=f[l]}if(r.disabled||r["aria-disabled"])return Object.assign(r,Object.fromEntries(Object.keys(u).map((function(n){return[n,void 0]}))));var s=function(n){Object.assign(r,(0,a.Z)({},n,(function(e){for(var t=u[n],r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var c,f=(0,o.Z)(t);try{for(f.s();!(c=f.n()).done;){var l=c.value;if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;l.apply(void 0,[e].concat(i))}}catch(s){f.e(s)}finally{f.f()}})))};for(var d in u)s(d);return r}function w(n){var e;return Object.assign((0,l.forwardRef)(n),{displayName:null!=(e=n.displayName)?e:n.name})}function Z(n){var e=Object.assign({},n);for(var t in e)void 0===e[t]&&delete e[t];return e}function F(n){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object.assign({},n),u=(0,o.Z)(t);try{for(u.s();!(e=u.n()).done;){var i=e.value;i in r&&delete r[i]}}catch(a){u.e(a)}finally{u.f()}return r}}}]);
//# sourceMappingURL=452.7bfde8b8.chunk.js.map