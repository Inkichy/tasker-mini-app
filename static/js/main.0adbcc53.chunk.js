(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{151:function(t,e,n){"use strict";n.r(e);var c,a=n(0),i=n(28),s=n.n(i),r=n(13),j=n.n(r),o=n(38),l=n(27),b=n(32),u=n.n(b),d=n(7),O=(n(147),n(19)),h=n(20),p=n(22),f=n(21),x=n(41),v=n(26),m=n(42),k=n(43),y=n(152),g=n(4),C=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(t){var c;return Object(O.a)(this,n),(c=e.call(this,t)).state={activeModal:"newTask",modalHistory:[]},c}return Object(h.a)(n,[{key:"setActiveModal",value:function(t){t=t||null;var e=this.state.modalHistory?Object(v.a)(this.state.modalHistory):[];null===t?e=[]:-1!==e.indexOf(t)?e=e.splice(0,e.indexOf(t)+1):e.push(t),this.setState({activeModal:t,modalHistory:e})}},{key:"render",value:function(){var t=this;return Object(g.jsx)(d.l,{activeModal:this.state.activeModal,children:Object(g.jsxs)(d.k,{id:"newTask",header:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443",onClose:function(){t.setActiveModal(null)},children:[Object(g.jsx)(d.g,{top:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",children:Object(g.jsx)(d.i,{type:"text",defaultValue:""})}),Object(g.jsx)(d.g,{top:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",children:Object(g.jsx)(d.i,{type:"text",defaultValue:""})}),Object(g.jsx)(d.c,{onClick:function(){},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})}}]),n}(a.Component),S=(k.a.div(c||(c=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(t){var c;return Object(O.a)(this,n),(c=e.call(this,t)).reorderList=function(t,e){var n=t.from,a=t.to,i=Object(v.a)(e);i.splice(n,1),i.splice(a,0,e[n]),c.changeState(i,"taskList")},c.removeFromList=function(t,e){var n=Object(v.a)(e);n.splice(t,1),c.changeState(n,"taskList")},c.changeState=function(t,e){return c.setState(Object(x.a)({},e,t))},c.state={taskList:[{fromId:123456,title:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0445\u043e\u0440\u043e\u0448\u0438\u0439 \u043a\u043e\u0434",description:"\u041e\u0447\u0435\u043d\u044c \u043f\u0440\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 \u0438 \u0431\u043b\u0430 \u0431\u043b\u044f \u0431\u043b\u0430\n                                  \u0438 \u0431\u043b\u0430 \u0431\u043b\u044f \u0431\u043b\u0430 \u0438 \u0431\u043b\u0430 \u0431\u043b\u044f \u0431\u043b\u0430 \u0438 \u0431\u043b\u0430 \u0431\u043b\u044f \u0431\u043b\u0430"},{fromId:123456,title:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433, \u043e\u0442\u043b\u0430\u0434\u043a\u0443, \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 ui",description:"\u041e\u0447\u0435\u043d\u044c \u043f\u0440\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 \u0438 \u0431\u043b\u0430 \u0431\u043b\u044f \u0431\u043b\u0430\n                                  \u0438 \u0431\u043b\u0430 \u0431\u043b\u044f \u0431\u043b\u0430 \u0438 \u0431\u043b\u0430 \u0431\u043b\u044f \u0431\u043b\u0430 \u0438 \u0431\u043b\u0430 \u0431\u043b\u044f \u0431\u043b\u0430"},{fromId:123456,title:"\u0421\u043a\u0443\u0448\u0430\u0442\u044c \u043f\u0435\u0447\u0435\u043d\u044c\u0435",description:"\u041e\u0447\u0435\u043d\u044c \u043f\u0440\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 \u0438 \u0431\u043b\u0430 \u0431\u043b\u044f \u0431\u043b\u0430\n                                  \u0438 \u0431\u043b\u0430 \u0431\u043b\u044f \u0431\u043b\u0430 \u0438 \u0431\u043b\u0430 \u0431\u043b\u044f \u0431\u043b\u0430 \u0438 \u0431\u043b\u0430 \u0431\u043b\u044f \u0431\u043b\u0430"}]},c}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.e,{onClick:function(){},before:Object(g.jsx)(y.a,{}),children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0417\u0430\u043c\u0435\u0442\u043a\u0443"}),Object(g.jsx)(d.h,{children:Object(g.jsx)(d.j,{children:this.state.taskList.map((function(e,n){return Object(g.jsx)(d.d,{draggable:!0,after:Object(g.jsx)(d.c,{appearance:"neutral",size:"m",onClick:function(){},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}),onDragFinish:function(e){var n=e.from,c=e.to;return t.reorderList({from:n,to:c},t.state.taskList)},children:e.title},e)}))})})]})}}]),n}(a.Component)),L=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{children:"sdf"})}}]),n}(a.Component),T=L,w=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(t){var c;return Object(O.a)(this,n),(c=e.call(this,t)).state={activeTab:"tasks",data:c.props.data},c}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return Object(g.jsxs)(d.m,{id:this.props.id,children:[Object(g.jsx)(d.n,{separator:this.props.sizeX===d.p.REGULAR,children:"Tasker"}),Object(g.jsxs)(d.h,{children:[Object(g.jsxs)(d.s,{children:[Object(g.jsx)(d.t,{onClick:function(){return t.setState({activeTab:"tasks"})},selected:"tasks"===this.state.activeTab,children:"\u0417\u0430\u043c\u0435\u0442\u043a\u0438"}),Object(g.jsx)(d.t,{onClick:function(){return t.setState({activeTab:"notify"})},selected:"notify"===this.state.activeTab,children:"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"})]}),Object(g.jsxs)(d.u,{activePanel:this.state.activeTab,children:[Object(g.jsx)(d.m,{id:"tasks",children:Object(g.jsx)(S,{})}),Object(g.jsx)(d.m,{id:"notify",children:Object(g.jsx)(T,{})})]})]})]})}}]),n}(a.Component),A=function(){var t=Object(a.useState)("bright_light"),e=Object(l.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)("tasks"),s=Object(l.a)(i,2),r=s[0],b=(s[1],Object(a.useState)(null)),O=Object(l.a)(b,2),h=O[0],p=O[1],f=Object(a.useState)(Object(g.jsx)(d.o,{size:"large"})),x=Object(l.a)(f,2),v=x[0],m=x[1];return Object(a.useEffect)((function(){function t(){return(t=Object(o.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.send("VKWebAppGetUserInfo");case 2:e=t.sent,p(e),m(null);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}j.a.subscribe((function(t){var e=t.detail,n=e.type,a=e.data;"VKWebAppUpdateConfig"===n&&c(a.scheme)})),function(){t.apply(this,arguments)}()}),[]),Object(g.jsx)(d.f,{scheme:n,children:Object(g.jsx)(d.a,{children:Object(g.jsx)(d.b,{children:Object(g.jsx)(d.r,{popout:v,modal:Object(g.jsx)(C,{}),children:Object(g.jsx)(d.q,{children:Object(g.jsx)(d.u,{activePanel:r,children:Object(g.jsx)(w,{id:"tasks",data:h})})})})})})})};j.a.send("VKWebAppInit"),s.a.render(Object(g.jsx)(A,{}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.0adbcc53.chunk.js.map