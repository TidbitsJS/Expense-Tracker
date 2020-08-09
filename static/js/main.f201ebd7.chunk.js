(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),o=(n(13),function(e){return r.a.createElement("h2",null,"Expense Tracker")}),s=n(1),i=n(7),u=n(4),m=function(e,t){switch(t.type){case"DELETE_TRANSACTION":var n=JSON.parse(JSON.stringify(e.transactions));return n.splice(t.payload,1),console.log("delete",t.payload,n,e.transactions),window.localStorage.setItem("transactions",JSON.stringify(n)),Object(u.a)({},e,{transactions:n});case"ADD_TRANSACTION":var a=[t.payload].concat(Object(i.a)(e.transactions));return window.localStorage.setItem("transactions",JSON.stringify(a)),Object(u.a)({},e,{transactions:a});default:return e}},d={transactions:[]},E=window.localStorage.getItem("transactions");E&&(d.transactions=JSON.parse(E)),console.log(d);var f=Object(a.createContext)(d),p=function(e){var t=e.children,n=Object(a.useReducer)(m,d),c=Object(s.a)(n,2),l=c[0],o=c[1];return r.a.createElement(f.Provider,{value:{transactions:l.transactions,deleteTransaction:function(e){o({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){o({type:"ADD_TRANSACTION",payload:e})}}},t)},h=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),o=Object(s.a)(l,2),i=o[0],u=o[1],m=Object(a.useState)(!1),d=Object(s.a)(m,2),E=d[0],p=d[1],h=Object(a.useContext)(f).addTransaction;return r.a.createElement("div",null,r.a.createElement("h3",{onClick:function(){p(!E)},className:"shows"},"New Transaction",r.a.createElement("i",{className:"fa fa-plus-circle","aria-hidden":"true"})),E?r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:+i};h(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter Text"})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount"),r.a.createElement("input",{type:"number",value:i,onChange:function(e){return u(e.target.value)},placeholder:"Enter amount"})),r.a.createElement("button",{className:"btn"},"Add Transaction")):null)},b=function(e){var t=e.transaction,n=e.index,c=Object(a.useContext)(f).deleteTransaction,l=t.amount<0?"-":"+";return r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.text,r.a.createElement("span",null,l,"$",Math.abs(t.amount)),r.a.createElement("button",{onClick:function(){return c(n)},className:"delete-btn"},"X"))},v=function(){var e=Object(a.useContext)(f).transactions,t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],l=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{onClick:function(){l(!c),console.log(c)},className:"shows"},"History",r.a.createElement("i",{className:"fa fa-history","aria-hidden":"true"})),c?r.a.createElement("ul",{id:"list",className:"list"},e.map((function(e,t){return r.a.createElement(b,{key:e.id,transaction:e,index:t})}))):null)},N=function(){var e=Object(a.useContext)(f).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",{className:"balance"},r.a.createElement("h4",null,"Balance"),r.a.createElement("h1",null,"$",e))},O=function(){var e=Object(a.useContext)(f).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"$",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},"$",n)))};n(14);var x=function(){return r.a.createElement(p,null,r.a.createElement(o,null),r.a.createElement("div",{className:"container"},r.a.createElement(N,null),r.a.createElement(O,null),r.a.createElement(v,null),r.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.f201ebd7.chunk.js.map