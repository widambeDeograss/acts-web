"use strict";(self.webpackChunkacts_web=self.webpackChunkacts_web||[]).push([[449],{6449:function(e,t,r){r.r(t);var a=r(74165),n=r(1413),s=r(15861),o=r(29439),c=r(72791),i=r(66949),l=r(57689),u=r(59434),d=r(3260),m=r(40003),p=r(51011),g=r(80184);t.default=function(){var e=(0,c.useState)(""),t=(0,o.Z)(e,2),r=t[0],f=t[1],h=(0,c.useState)(""),x=(0,o.Z)(h,2),b=x[0],v=x[1],y=(0,c.useState)(""),w=(0,o.Z)(y,2),F=w[0],k=w[1],j=(0,c.useState)(!1),N=(0,o.Z)(j,2),Z=N[0],S=N[1],D=(0,m.f)(),A=(0,l.s0)(),E=(0,u.I0)(),I=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var s,o,c,i,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.clear(),t.preventDefault(),s={username:r,password:b},S(!0),e.prev=4,e.next=7,D.post({url:p.E.userLogin,data:s,login:!0});case 7:o=e.sent,c={id:o.user,role:o.user.role},localStorage.setItem("user",JSON.stringify(c)),i={user:o.user,token:o.token},localStorage.setItem("token",o.token),E((0,d.i8)((0,n.Z)({},i))),f(""),v(""),A(o?"/acts/admin/AdminHome":"/account"),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),null!==e.t0&&void 0!==e.t0&&e.t0.respose?400===(null===(l=e.t0.respose)||void 0===l?void 0:l.status)?k("incorrect password or email "):k("login failed try again later"):k("No server respose or invalid login credentials try again!");case 21:S(!1);case 22:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}();return(0,g.jsx)("div",{children:(0,g.jsx)("section",{className:"bg-gray-50 dark:bg-gray-900",children:(0,g.jsxs)("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0",children:[(0,g.jsxs)("a",{href:"#",className:"flex items-center mb-6 text-2xl font-semibold text-gray-900 ",children:[(0,g.jsx)("img",{className:"w-8 h-8 mr-2",src:i,alt:"logo"}),"Acts"]}),(0,g.jsx)("div",{className:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ",children:(0,g.jsxs)("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[(0,g.jsx)("h1",{className:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Sign in to  Acts admin"}),(0,g.jsx)("h3",{className:"text-red-700",children:F}),(0,g.jsxs)("form",{className:"space-y-4 md:space-y-6",action:"#",onSubmit:I,children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{for:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your username"}),(0,g.jsx)("input",{type:"text",name:"email",id:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",placeholder:"name",required:!0,value:r,onChange:function(e){return f(e.target.value)}})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{for:"password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Password"}),(0,g.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ",required:!0,value:b,onChange:function(e){return v(e.target.value)}})]}),(0,g.jsx)("div",{className:"flex items-center justify-between",children:(0,g.jsxs)("div",{className:"flex items-start",children:[(0,g.jsx)("div",{className:"flex items-center h-5",children:(0,g.jsx)("input",{id:"remember","aria-describedby":"remember",type:"checkbox",className:"w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 ",required:!0})}),(0,g.jsx)("div",{className:"ml-3 text-sm",children:(0,g.jsx)("label",{for:"remember",className:"text-gray-500 dark:text-gray-300",children:"Remember me"})})]})}),(0,g.jsx)("button",{type:"submit",className:"w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-purple-500",children:Z?"Signing in...":"Sign in"})]})]})})]})})})}},40003:function(e,t,r){r.d(t,{f:function(){return i}});var a=r(74165),n=r(15861),s=(r(72791),r(3260)),o=r(59434),c=r(31243),i=function(){(0,o.I0)();var e=(0,o.v9)(s.D0),t=function(){var t=(0,n.Z)((0,a.Z)().mark((function t(r){var n,s,o,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.url,s=r.response,o=r.data,i=r.login,void 0!==i&&i,{headers:{Authorization:"Bearer "+e}},{body:{data:o}},"","info",t.prev=6,t.next=9,c.Z.post(n,o).then((function(e){200===e.status&&(s=e.data,s.header.responseStatus,s.header.responseMessage)})).catch((function(e){}));case 9:t.next=13;break;case 11:t.prev=11,t.t0=t.catch(6);case 13:return t.abrupt("return",s);case 14:case"end":return t.stop()}}),t,null,[[6,11]])})));return function(e){return t.apply(this,arguments)}}(),r=function(){var t=(0,n.Z)((0,a.Z)().mark((function t(r){var n,s,o,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.url,s=r.response,o=r.data,i={headers:{Authorization:"JWT "+e}},t.prev=2,t.next=5,c.Z.put(n,o,i).then((function(e){console.log(e),200===e.status&&(s=e.data)})).catch((function(e){throw e.message}));case 5:t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(2),t.t0.message;case 10:return t.abrupt("return",s);case 11:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)((0,a.Z)().mark((function t(r){var n,s,o;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.url,s=r.response,r.data,o={headers:{Authorization:"JWT "+e}},console.log(o),"","info",t.prev=5,t.next=8,c.Z.delete(n,o).then((function(e){console.log(e),200===e.status&&(s=e.data,s.header.responseStatus,s.header.responseMessage)})).catch((function(e){throw e.message}));case 8:t.next=13;break;case 10:throw t.prev=10,t.t0=t.catch(5),t.t0.message;case 13:return t.abrupt("return",s);case 14:case"end":return t.stop()}}),t,null,[[5,10]])})));return function(e){return t.apply(this,arguments)}}();return{post:t,put:r,deleteRequest:i}}},28834:function(e,t,r){r.d(t,{F:function(){return a}});var a="https://api.actseminary.education"},51011:function(e,t,r){r.d(t,{E:function(){return n}});var a=r(28834),n={userLogin:a.F+"/auth/login",userContact:a.F+"/manager/contact",userApplication:a.F+"/manager/application",Events:a.F+"/manager/event",SingleEvent:a.F+"/manager/single-event/",EventsActions:a.F+"/manager/event-actions/",Application:a.F+"/manager/application",Dashboard:a.F+"/manager/dashboard",DeleteEvent:a.F+"/manager/delete-contact/",changePassword:a.F+"/auth/change-password",courses:a.F+"/manager/course-get-create",courseDelete:a.F+"/manager/course-delete-update",staff:a.F+"/manager/stuff-get-create",staffDelete:a.F+"/manager/stuff-delete-update",administration:a.F+"/manager/admin-get-create",administrationDelete:a.F+"/manager/admin-delete-update",mastersFees:a.F+"/manager/masters-cost-get-create",mastersFeesDelete:a.F+"/manager/masters-cost-delete-update",phdFees:a.F+"/manager/phd-cost-get-create",phdFeesDelete:a.F+"/manager/phd-cost-delete-update",siteInfo:a.F+"/manager/important-information-get-create",siteInfoUpdate:a.F+"/manager/important-information-delete-update",gellery:a.F+"/manager/gallery-get-create",gelleryDelete:a.F+"/manager/gallery-delete-update"}},66949:function(e,t,r){e.exports=r.p+"static/media/logo.b03cbff79c5fc3abe0ac.png"}}]);
//# sourceMappingURL=449.b2567a67.chunk.js.map