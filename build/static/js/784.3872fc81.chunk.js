"use strict";(self.webpackChunkacts_web=self.webpackChunkacts_web||[]).push([[784],{45784:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(74165),a=r(15861),s=r(29439),i=r(72791),o=(r(95885),r(77222),r(87868)),l=r(40003),c=r(51011),d=r(84055),u=r(79139),x=r(62062),f=r.n(x),h=r(80184);function m(){var e=i.useState(null),t=(0,s.Z)(e,2),r=t[0],x=t[1],m=(0,o.E)(),p=(0,i.useState)(),g=(0,s.Z)(p,2),v=g[0],b=g[1],w=(0,i.useState)(!1),y=(0,s.Z)(w,2),j=y[0],k=y[1],F=(0,l.f)(),Z=(0,i.useRef)(null),A=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.fetch({url:c.E.Dashboard});case 2:return t=e.sent,e.next=5,m.fetch({url:c.E.siteInfo});case 5:r=e.sent,t&&(b(t),x(r),k(!1));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){A()}),[]);var T=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var s,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s=new FormData(Z.current),{},e.prev=3,e.next=6,F.post({url:c.E.siteInfoUpdate+"?id=".concat(null===r||void 0===r?void 0:r.id),data:s});case 6:i=e.sent,k(!0),null!==i&&void 0!==i&&i.update&&f()({title:"Success",text:"Conglaturations Site-info updated succesfully!",icon:"success",button:"OK",confirmButtonClass:"danger",confirmButtonText:"Confirm, remove it!",closeOnConfirm:!1}).then(function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}window.location.reload(),e.next=5;break;case 4:return e.abrupt("return");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),k(!0),alert(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return(0,h.jsxs)(u.Card,{className:"w-full h-[100%] bg-white",children:[(0,h.jsx)(u.CardHeader,{children:(0,h.jsx)(d.Z,{variant:"h1",className:"p-10",children:"ACTS Admin home page"})}),(0,h.jsxs)("div",{class:"grid md:grid-cols-3 sm:grid-cols-1 gap-4 justify-center p-3  ",children:[(0,h.jsx)("div",{class:"container mx-auto pr-4",children:(0,h.jsxs)("div",{class:"w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer",children:[(0,h.jsx)("div",{class:"h-20 bg-red-400 flex items-center justify-between",children:(0,h.jsx)("p",{class:"mr-0 text-white text-lg pl-5",children:"NO OF APPLICATIONS"})}),(0,h.jsx)("div",{class:"flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600",children:(0,h.jsx)("p",{children:"TOTAL"})}),(0,h.jsx)("p",{class:"py-4 text-3xl ml-5",children:null===v||void 0===v?void 0:v.number_applications})]})}),(0,h.jsx)("div",{class:"container mx-auto pr-4",children:(0,h.jsxs)("div",{class:"w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer",children:[(0,h.jsx)("div",{class:"h-20 bg-blue-500 flex items-center justify-between",children:(0,h.jsx)("p",{class:"mr-0 text-white text-lg pl-5",children:"NO OF USERS FEEDBACKS"})}),(0,h.jsx)("div",{class:"flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600",children:(0,h.jsx)("p",{children:"TOTAL"})}),(0,h.jsx)("p",{class:"py-4 text-3xl ml-5",children:null===v||void 0===v?void 0:v.number_contacts})]})}),(0,h.jsx)("div",{class:"container mx-auto pr-4",children:(0,h.jsxs)("div",{class:"w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer",children:[(0,h.jsx)("div",{class:"h-20 bg-purple-400 flex items-center justify-between",children:(0,h.jsx)("p",{class:"mr-0 text-white text-lg pl-5",children:"NO OF EVENTS"})}),(0,h.jsx)("div",{class:"flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600",children:(0,h.jsx)("p",{children:"TOTAL"})}),(0,h.jsx)("p",{class:"py-4 text-3xl ml-5",children:null===v||void 0===v?void 0:v.number_events})]})}),(0,h.jsx)("div",{class:"container mx-auto",children:(0,h.jsxs)("div",{class:"w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer",children:[(0,h.jsx)("div",{class:"h-20 bg-purple-900 flex items-center justify-between",children:(0,h.jsx)("p",{class:"mr-0 text-white text-lg pl-5",children:"NO OF PROGRAMS"})}),(0,h.jsx)("div",{class:"flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600",children:(0,h.jsx)("p",{children:"TOTAL"})}),(0,h.jsx)("p",{class:"py-4 text-3xl ml-5",children:null===v||void 0===v?void 0:v.number_course})]})}),(0,h.jsx)("div",{class:"container mx-auto",children:(0,h.jsxs)("div",{class:"w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer",children:[(0,h.jsx)("div",{class:"h-20 bg-blue-900 flex items-center justify-between",children:(0,h.jsx)("p",{class:"mr-0 text-white text-lg pl-5",children:"SEMINARY ADMINISTRATION"})}),(0,h.jsx)("div",{class:"flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600",children:(0,h.jsx)("p",{children:"TOTAL"})}),(0,h.jsx)("p",{class:"py-4 text-3xl ml-5",children:null===v||void 0===v?void 0:v.number_admin})]})}),(0,h.jsx)("div",{class:"container mx-auto",children:(0,h.jsxs)("div",{class:"w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer",children:[(0,h.jsx)("div",{class:"h-20 bg-blue-200 flex items-center justify-between",children:(0,h.jsx)("p",{class:"mr-0 text-white text-lg pl-5",children:"SEMINARY STAFF"})}),(0,h.jsx)("div",{class:"flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600",children:(0,h.jsx)("p",{children:"TOTAL"})}),(0,h.jsx)("p",{class:"py-4 text-3xl ml-5",children:null===v||void 0===v?void 0:v.number_staff})]})})]}),(0,h.jsxs)(u.Card,{className:"mt-10",children:[(0,h.jsx)(u.CardHeader,{children:(0,h.jsx)(d.Z,{variant:"h1",className:"p-4 text-left",children:"ACTS Important site-info"})}),(0,h.jsxs)("form",{className:"px-10 py-5",onSubmit:T,ref:Z,children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{for:"first_name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left",children:"Message from the president"}),(0,h.jsx)("textarea",{type:"text",id:"last_name",defaultValue:null===r||void 0===r?void 0:r.message_from_president,class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3",placeholder:"",name:"message_from_president",required:!0})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{for:"first_name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left",children:"mission"}),(0,h.jsx)("textarea",{type:"text",id:"last_name",defaultValue:null===r||void 0===r?void 0:r.mission,class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3",placeholder:"",name:"mission",required:!0})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{for:"first_name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left",children:"vision"}),(0,h.jsx)("textarea",{type:"text",id:"last_name",defaultValue:null===r||void 0===r?void 0:r.vision,class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3",placeholder:"",name:"vision",required:!0})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{for:"first_name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left",children:"historical background"}),(0,h.jsx)("textarea",{type:"text",id:"last_name",defaultValue:null===r||void 0===r?void 0:r.historical_background,class:"bg-gray-50 border h-28 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3",placeholder:"",name:"historical_background",required:!0})]}),(0,h.jsx)(u.Button,{variant:"gradient",onClick:T,type:"submit",children:(0,h.jsx)("span",{children:j?"Updating site info...":"Update site-info"})})]})]})]})}},95885:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(63733),a=(r(72791),r(80184));function s(e){var t=e.children,r=e.className;return(0,a.jsx)("div",{className:(0,n.Z)("p-6",r),children:t})}},77222:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(63733),a=(r(72791),r(80184));function s(e){var t=e.children,r=e.className,s=e.extra;return(0,a.jsxs)("div",{className:(0,n.Z)("flex items-center justify-between",r),children:[t,s]})}},84055:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(63733),a=(r(72791),r(80184)),s={h1:"font-semibold text-xl font-syne",h2:"font-semibold font-syne",h3:"font-semibold font-syne",h4:"font-semibold font-syne"};function i(e){var t=e.as,r=e.bold,i=e.children,o=e.className,l=e.muted,c=e.small,d=e.smaller,u=e.variant,x=void 0===u?"div":u,f=t||x;return(0,a.jsx)(f,{className:(0,n.Z)(s[x],r&&"font-semibold ",l&&"text-gray-600",c&&"text-sm",d&&"text-xs",o,"font-syne"),children:i})}},87868:function(e,t,r){r.d(t,{E:function(){return l}});var n=r(74165),a=r(15861),s=r(31243),i=(r(72791),r(3260)),o=r(59434),l=function(){(0,o.I0)();var e=(0,o.v9)(i.D0),t=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var a,i,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.url,i=r.response,o={headers:{Authorization:"JWT "+e}},t.prev=2,t.next=5,s.Z.get(a,o).then((function(e){200===e.status&&(i=e.data)})).catch((function(e){throw e.message}));case 5:t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(2),t.t0.message;case 10:return console.log(i),t.abrupt("return",i);case 13:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(e){return t.apply(this,arguments)}}();return{fetch:t}}},40003:function(e,t,r){r.d(t,{f:function(){return l}});var n=r(74165),a=r(15861),s=(r(72791),r(3260)),i=r(59434),o=r(31243),l=function(){(0,i.I0)();var e=(0,i.v9)(s.D0),t=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var a,s,i,l;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.url,s=r.response,i=r.data,l=r.login,void 0!==l&&l,{headers:{Authorization:"Bearer "+e}},{body:{data:i}},"","info",t.prev=6,t.next=9,o.Z.post(a,i).then((function(e){200===e.status&&(s=e.data,s.header.responseStatus,s.header.responseMessage)})).catch((function(e){}));case 9:t.next=13;break;case 11:t.prev=11,t.t0=t.catch(6);case 13:return t.abrupt("return",s);case 14:case"end":return t.stop()}}),t,null,[[6,11]])})));return function(e){return t.apply(this,arguments)}}(),r=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var a,s,i,l;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.url,s=r.response,i=r.data,l={headers:{Authorization:"JWT "+e}},t.prev=2,t.next=5,o.Z.put(a,i,l).then((function(e){console.log(e),200===e.status&&(s=e.data)})).catch((function(e){throw e.message}));case 5:t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(2),t.t0.message;case 10:return t.abrupt("return",s);case 11:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var a,s,i;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.url,s=r.response,r.data,i={headers:{Authorization:"JWT "+e}},console.log(i),"","info",t.prev=5,t.next=8,o.Z.delete(a,i).then((function(e){console.log(e),200===e.status&&(s=e.data,s.header.responseStatus,s.header.responseMessage)})).catch((function(e){throw e.message}));case 8:t.next=13;break;case 10:throw t.prev=10,t.t0=t.catch(5),t.t0.message;case 13:return t.abrupt("return",s);case 14:case"end":return t.stop()}}),t,null,[[5,10]])})));return function(e){return t.apply(this,arguments)}}();return{post:t,put:r,deleteRequest:l}}},28834:function(e,t,r){r.d(t,{F:function(){return n}});var n="https://api.actseminary.education"},51011:function(e,t,r){r.d(t,{E:function(){return a}});var n=r(28834),a={userLogin:n.F+"/auth/login",userContact:n.F+"/manager/contact",userApplication:n.F+"/manager/application",Events:n.F+"/manager/event",SingleEvent:n.F+"/manager/single-event/",EventsActions:n.F+"/manager/event-actions/",Application:n.F+"/manager/application",Dashboard:n.F+"/manager/dashboard",DeleteEvent:n.F+"/manager/delete-contact/",changePassword:n.F+"/auth/change-password",courses:n.F+"/manager/course-get-create",courseDelete:n.F+"/manager/course-delete-update",staff:n.F+"/manager/stuff-get-create",staffDelete:n.F+"/manager/stuff-delete-update",administration:n.F+"/manager/admin-get-create",administrationDelete:n.F+"/manager/admin-delete-update",mastersFees:n.F+"/manager/masters-cost-get-create",mastersFeesDelete:n.F+"/manager/masters-cost-delete-update",phdFees:n.F+"/manager/phd-cost-get-create",phdFeesDelete:n.F+"/manager/phd-cost-delete-update",siteInfo:n.F+"/manager/important-information-get-create",siteInfoUpdate:n.F+"/manager/important-information-delete-update",gellery:n.F+"/manager/gallery-get-create",gelleryDelete:n.F+"/manager/gallery-delete-update"}},63733:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.Z=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}}}]);
//# sourceMappingURL=784.3872fc81.chunk.js.map