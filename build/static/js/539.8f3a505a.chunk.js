(self.webpackChunkacts_web=self.webpackChunkacts_web||[]).push([[539],{15985:function(e,t,n){"use strict";n.r(t);var a=n(74165),r=n(15861),s=n(29439),i=n(72791),c=n(13158),l=n(79139),o=n(11226),d=n(67969),u=n(57689),m=n(51011),f=n(87868),h=n(28834),x=n(49128),p=n(59434),g=n(31002),v=n(62062),b=n.n(v),y=n(73351),j=n.n(y),w=n(64802),N=n(80184),F=["profile","name","position","title",""];t.default=function(){(0,u.s0)();var e=(0,i.useState)([]),t=(0,s.Z)(e,2),n=t[0],v=t[1],y=(0,i.useState)(1),Z=(0,s.Z)(y,2),k=Z[0],C=Z[1],A=(0,i.useState)(!1),E=(0,s.Z)(A,2),B=(E[0],E[1]),T=(0,p.I0)(),D=(0,p.v9)(g.Vn),z=(D.showModal,D.modalType,function(e){T((0,g.K4)(e))}),_=(0,f.E)(),I=Math.ceil(n.length/12),S=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),e.next=3,_.fetch({url:m.E.administration});case 3:(t=e.sent)&&(v(null===t||void 0===t?void 0:t.reverse()),B(!1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){S()}),[]);var L=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t,r,s,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j().utils.json_to_sheet(n);case 2:t=e.sent,r={Sheets:{data:t},SheetNames:["data"]},s=j().write(r,{bookType:"xlsx",type:"array"}),i=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8"}),w.saveAs(i,"Administratiion.xlsx");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(e){C(e)},H=12*(k-1),M=H+12;n.slice(H,M);if(!n||!n.length)return(0,N.jsx)("div",{className:"'flex justify-center items-center'",children:(0,N.jsxs)("div",{children:[(0,N.jsx)(d.Z,{message:"There are no Administrative positions at the moment."}),(0,N.jsx)(l.Button,{onClick:function(){return z("administrationAdd")},children:"Add Position"})]})});var P=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b()({title:"",text:"Are you sure you want to remove the position!",icon:"warning",buttons:["no!","yes!"],showCancelButton:!0,confirmButtonClass:"danger",confirmButtonText:" Confirm, remove it!",closeOnConfirm:!1}).then(function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=7;break}return e.next=3,_.fetch({url:m.E.administrationDelete+"?id=".concat(t)});case 3:e.sent.delete&&window.location.reload(),e.next=8;break;case 7:return e.abrupt("return");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,N.jsx)("div",{className:" mx-auto p-10",children:(0,N.jsxs)(l.Card,{children:[(0,N.jsx)(l.CardHeader,{floated:!1,shadow:!1,className:"rounded-none",children:(0,N.jsxs)("div",{className:"mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center",children:[(0,N.jsx)("div",{children:(0,N.jsx)(l.Typography,{variant:"h5",color:"blue-gray",className:"text-left",children:"All Seminary Administration"})}),(0,N.jsx)("div",{className:"flex w-full shrink-0 gap-2 md:w-max",children:(0,N.jsxs)("div",{className:"flex w-full shrink-0 gap-2 md:w-max",children:[(0,N.jsxs)(l.Button,{className:"flex items-center gap-3",size:"sm",onClick:function(){return L()},children:[(0,N.jsx)(x.H_7,{strokeWidth:2,className:"h-4 w-4"})," Download"]}),(0,N.jsxs)(l.Button,{className:"flex items-center gap-3",size:"sm",onClick:function(){return z("administrationAdd")},children:[(0,N.jsx)(x.VcF,{strokeWidth:2,className:"h-4 w-4"})," Add position"]})]})})]})}),(0,N.jsx)(l.CardBody,{className:"overflow-x-scroll px-0 pt-0 pb-2",children:(0,N.jsxs)("table",{className:"w-full min-w-max table-auto text-left",children:[(0,N.jsx)("thead",{children:(0,N.jsx)("tr",{children:F.map((function(e){return(0,N.jsx)("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-4",children:(0,N.jsx)(l.Typography,{variant:"small",color:"blue-gray",className:"font-normal leading-none opacity-70",children:e})},e)}))})}),(0,N.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e,t){var a=e.id,r=e.image,s=e.staff_name,i=e.staff_titles,o=e.admin_title,d=t===(null===n||void 0===n?void 0:n.length)-1?"p-4":"p-4 border-b border-blue-gray-50";return(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:d,children:(0,N.jsx)("div",{className:"flex items-center ",children:(0,N.jsx)(l.Avatar,{src:h.F+"".concat(r),alt:s,size:"md",className:"border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"})})}),(0,N.jsx)("td",{className:d,children:(0,N.jsx)("div",{className:"flex items-center gap-3",children:(0,N.jsx)(l.Typography,{variant:"small",color:"blue-gray",className:"font-bold",children:s})})}),(0,N.jsx)("td",{className:d,children:(0,N.jsx)(l.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:o})}),(0,N.jsx)("td",{className:d,children:(0,N.jsx)(l.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:i})}),(0,N.jsx)("td",{className:d,children:(0,N.jsx)(l.Tooltip,{content:"Edit User",children:(0,N.jsx)(l.IconButton,{variant:"text",onClick:function(){P(a)},children:(0,N.jsx)(c.Z,{className:"h-4 w-4"})})})})]},a)}))})]})}),(0,N.jsxs)(l.CardFooter,{className:"flex items-center justify-between border-t border-blue-gray-50 p-4",children:[(0,N.jsx)(l.Button,{variant:"outlined",size:"sm",onClick:function(){return W(k-1)},disabled:1===k,children:"Previous"}),(0,N.jsx)("div",{className:"flex items-center gap-2",children:(0,N.jsxs)(o.Z,{className:"w-24",children:[k," / ",I]})}),(0,N.jsx)(l.Button,{variant:"outlined",size:"sm",onClick:function(){return W(k+1)},disabled:k===I,children:"Next"})]})]})})}},11226:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(63733),r=(n(72791),n(80184)),s={error:"bg-red-100 text-red-700",primary:"bg-blue-100 text-blue-700",success:"bg-green-100 text-green-700",warning:"bg-yellow-100 text-yellow-700"};function i(e){var t=e.children,n=e.className,i=e.color,c=void 0===i?"primary":i;return(0,r.jsx)("div",{className:(0,a.Z)("inline-block font-bold text-xs rounded-full px-3 py-2",s[c],n),children:t})}},67969:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});n(72791);var a=n(49128),r=n(63733),s=n(84055),i=n(80184);function c(e){var t=e.className,n=e.extra,a=e.image,c=e.message,l=e.title;return(0,i.jsx)("div",{className:(0,r.Z)("",t),children:(0,i.jsxs)("div",{className:"text-center px-4 py-8",children:[a&&(0,i.jsx)("div",{className:"flex justify-center mb-4",children:a}),(0,i.jsx)(s.Z,{bold:!0,children:l}),c&&(0,i.jsx)(s.Z,{className:"mt-2",muted:!0,small:!0,children:c}),n&&(0,i.jsx)("div",{className:"text-center mt-6",children:n})]})})}function l(e){var t=e.className,n=e.message;return(0,i.jsx)(c,{className:t,image:(0,i.jsx)(a.zat,{className:"text-gray-200",size:64}),message:n,title:"Empty!"})}},84055:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(63733),r=(n(72791),n(80184)),s={h1:"font-semibold text-xl font-syne",h2:"font-semibold font-syne",h3:"font-semibold font-syne",h4:"font-semibold font-syne"};function i(e){var t=e.as,n=e.bold,i=e.children,c=e.className,l=e.muted,o=e.small,d=e.smaller,u=e.variant,m=void 0===u?"div":u,f=t||m;return(0,r.jsx)(f,{className:(0,a.Z)(s[m],n&&"font-semibold ",l&&"text-gray-600",o&&"text-sm",d&&"text-xs",c,"font-syne"),children:i})}},87868:function(e,t,n){"use strict";n.d(t,{E:function(){return l}});var a=n(74165),r=n(15861),s=n(31243),i=(n(72791),n(3260)),c=n(59434),l=function(){(0,c.I0)();var e=(0,c.v9)(i.D0),t=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(n){var r,i,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.url,i=n.response,c={headers:{Authorization:"JWT "+e}},t.prev=2,t.next=5,s.Z.get(r,c).then((function(e){200===e.status&&(i=e.data)})).catch((function(e){throw e.message}));case 5:t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(2),t.t0.message;case 10:return console.log(i),t.abrupt("return",i);case 13:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(e){return t.apply(this,arguments)}}();return{fetch:t}}},28834:function(e,t,n){"use strict";n.d(t,{F:function(){return a}});var a="https://api.actseminary.education"},51011:function(e,t,n){"use strict";n.d(t,{E:function(){return r}});var a=n(28834),r={userLogin:a.F+"/auth/login",userContact:a.F+"/manager/contact",userApplication:a.F+"/manager/application",Events:a.F+"/manager/event",SingleEvent:a.F+"/manager/single-event/",EventsActions:a.F+"/manager/event-actions/",Application:a.F+"/manager/application",Dashboard:a.F+"/manager/dashboard",DeleteEvent:a.F+"/manager/delete-contact/",changePassword:a.F+"/auth/change-password",courses:a.F+"/manager/course-get-create",courseDelete:a.F+"/manager/course-delete-update",staff:a.F+"/manager/stuff-get-create",staffDelete:a.F+"/manager/stuff-delete-update",administration:a.F+"/manager/admin-get-create",administrationDelete:a.F+"/manager/admin-delete-update",mastersFees:a.F+"/manager/masters-cost-get-create",mastersFeesDelete:a.F+"/manager/masters-cost-delete-update",phdFees:a.F+"/manager/phd-cost-get-create",phdFeesDelete:a.F+"/manager/phd-cost-delete-update",siteInfo:a.F+"/manager/important-information-get-create",siteInfoUpdate:a.F+"/manager/important-information-delete-update",gellery:a.F+"/manager/gallery-get-create",gelleryDelete:a.F+"/manager/gallery-delete-update"}},7252:function(){},14863:function(){},13913:function(){},13158:function(e,t,n){"use strict";var a=n(45987),r=n(72791),s=["title","titleId"];var i=r.forwardRef((function(e,t){var n=e.title,i=e.titleId,c=(0,a.Z)(e,s);return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":i},c),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}))}));t.Z=i}}]);
//# sourceMappingURL=539.8f3a505a.chunk.js.map