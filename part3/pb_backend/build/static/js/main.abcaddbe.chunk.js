(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(14),c=n.n(r),s=n(3),o=n(1),u=n(0),a=function(e){var t=e.text,n=e.setFilter,r=e.setShowAll;return Object(u.jsxs)("div",{children:["filter shown with: ",Object(u.jsx)("input",{value:t,onChange:function(e){n(e.target.value),""===e.target.value?r(!0):r(!1)}})]})},i=n(4),l=n.n(i),j="/api/persons",b=function(){return l.a.get(j).then((function(e){return e.data}))},d=function(e){return l.a.post(j,e).then((function(e){return e.data}))},f=function(e,t){return l.a.put("".concat(j,"/").concat(e),t).then((function(e){return e.data}))},h=function(e){return l.a.delete("".concat(j,"/").concat(e))},m=function(e){var t=e.persons,n=e.nameInput,r=e.numInput,c=e.setInputName,s=e.setInputNum,o=e.setPersons,a=e.setNotificationMsg,i=e.setError;return Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===n||""===r)window.alert("Please input a valid name and number.");else{var u={name:n,number:r};if(t.some((function(e){return e.name===u.name}))){var l=window.confirm("".concat(n," is already added to phonebook, are you sure you want to update the number?"));b().then((function(e){var n=e.filter((function(e){return e.name===u.name}));0===n.length?(a("Error. Person has been deleted from the database"),i(!0)):l&&f(n[0].id,u).then((function(e){o(t.map((function(t){return t.id!==e.id?t:u})))})).catch((function(e){console.log("fail")}))}))}else d(u).then((function(e){o(t.concat(e)),a("Success! Added ".concat(u.name)),i(!1),console.log(e)})).catch((function(e){a(e.response.data.error),i(!0),console.log(e.response.data.error)}));c(""),s("")}},children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:n,onChange:function(e){c(e.target.value)}})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:r,onChange:function(e){s(e.target.value)}})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},O=function(e){var t=e.pid,n=e.name,r=e.number,c=e.persons,s=e.setPersons;return Object(u.jsxs)("li",{children:[n," - ",r,Object(u.jsx)("button",{onClick:function(){var e=window.confirm("Are you sure you want to delete ".concat(n,"?"));if(console.log(t),!0===e){h(t);var r=c.filter((function(e){return e.id!==t}));s(r)}},children:"Delete"},t)]},t)},p=function(e){var t=e.persons,n=e.showAll,r=e.filter,c=e.setPersons,s=n?t:t.filter((function(e){return e.name.includes(r)}));return Object(o.useEffect)((function(){b().then((function(e){c(e)}))}),[c]),Object(u.jsx)("ul",{children:s.map((function(e){return Object(u.jsx)(O,{pid:e.id,name:e.name,number:e.number,persons:t,setPersons:c})}))})},v=function(e){var t=e.message,n=e.isError;return null===t?null:n?Object(u.jsx)("div",{className:"error",children:t}):Object(u.jsx)("div",{className:"success",children:t})},x=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)(""),i=Object(s.a)(c,2),l=i[0],j=i[1],d=Object(o.useState)(""),f=Object(s.a)(d,2),h=f[0],O=f[1],x=Object(o.useState)(!0),g=Object(s.a)(x,2),w=g[0],S=g[1],I=Object(o.useState)(""),N=Object(s.a)(I,2),P=N[0],E=N[1],k=Object(o.useState)(null),y=Object(s.a)(k,2),A=y[0],C=y[1],D=Object(o.useState)(!1),F=Object(s.a)(D,2),J=F[0],M=F[1];return Object(o.useEffect)((function(){b().then((function(e){r(e)}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(v,{message:A,isError:J}),Object(u.jsx)(a,{text:P,setFilter:E,setShowAll:S}),Object(u.jsx)("h2",{children:"add a new"}),Object(u.jsx)(m,{persons:n,setPersons:r,nameInput:l,numInput:h,setInputName:j,setInputNum:O,setNotificationMsg:C,setError:M}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(p,{persons:n,setPersons:r,showAll:w,filter:P})]})};n(38);c.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.abcaddbe.chunk.js.map