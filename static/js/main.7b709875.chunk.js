(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,function(t,e,a){t.exports={form:"AddContact_form__dnHdb",inputName:"AddContact_inputName__3V0vz",inputnumber:"AddContact_inputnumber__Bdp6I",button:"AddContact_button__24v20"}},function(t,e,a){t.exports={listItem:"SingleContact_listItem__2KdqR",contactName:"SingleContact_contactName__1boXe",contactNumber:"SingleContact_contactNumber__1L6ES",contactButton:"SingleContact_contactButton__2A1AB"}},,,,function(t,e,a){t.exports={wrapper:"FilterContacts_wrapper__3Ye0u",input:"FilterContacts_input__3FQEh"}},,,,,function(t,e,a){t.exports=a(28)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(4),r=a.n(o),u=(a(22),a(1)),l=(a(23),a(13)),s=a(32),i=a(7),m=a.n(i),f=function(t){var e=t.setContacts,a=t.contacts,o=t.setShowAlert,r=Object(n.useState)(""),i=Object(u.a)(r,2),f=i[0],p=i[1],b=Object(n.useState)(""),d=Object(u.a)(b,2),N=d[0],C=d[1];return c.a.createElement("form",{className:m.a.form,autoComplete:"off",onSubmit:function(t){return t.preventDefault(),a.find((function(t){return t.name===f}))?(o({status:!0,text:"Contact already exist"}),void setTimeout((function(){o({status:!1,text:""})}),2e3)):f.length<2?(o({status:!0,text:"Name mast content 2 characters"}),void setTimeout((function(){o({status:!1,text:""})}),2e3)):(localStorage.setItem("localContacts",JSON.stringify([{name:f,number:N,id:Object(s.a)()}].concat(Object(l.a)(a)))),e([{name:f,number:N,id:Object(s.a)()}].concat(Object(l.a)(a))),p(""),void C(""))}},c.a.createElement("input",{className:m.a.inputName,type:"text",name:"name",placeholder:"Name",value:f,onChange:function(t){var e=t.target;p(e.value)}}),c.a.createElement("input",{className:m.a.inputnumber,type:"text",name:"number",placeholder:"Nubmer",value:N,onChange:function(t){var e=t.target;C(e.value)}}),c.a.createElement("button",{className:m.a.button,type:"submit"},"Add contacts"))},p=a(8),b=a.n(p),d=function(t){var e=t.name,a=t.number,n=t.id,o=t.deleteContact;return c.a.createElement("li",{className:b.a.listItem},c.a.createElement("p",{className:b.a.contactName},e),c.a.createElement("p",{className:b.a.contactNumber},a),c.a.createElement("button",{className:b.a.contactButton,onClick:function(){return o(n)}},"X"))},N=a(31),C=a(30),_=(a(24),function(t){var e=t.contacts,a=t.filter,n=t.deleteContact,o=e.filter((function(t){return t.name.toLowerCase().includes(a)}));return c.a.createElement(N.a,{component:"ul"},o.map((function(t){var e=t.name,a=t.number,o=t.id;return c.a.createElement(C.a,{key:o,timeout:250,classNames:"listItem"},c.a.createElement(d,{name:e,number:a,id:o,deleteContact:n}))})))}),E=a(12),g=a.n(E),v=function(t){var e=t.inputFilter;return c.a.createElement("div",{className:g.a.wrapper},c.a.createElement("input",{className:g.a.input,type:"text",placeholder:"Find contacts by name",onChange:e}))},h=(a(27),function(t){var e=t.showAlert;return c.a.createElement("div",{className:"alert"},e)});var S=function(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),a=e[0],o=e[1],r=Object(n.useState)(""),l=Object(u.a)(r,2),s=l[0],i=l[1],m=Object(n.useState)({status:!1,text:""}),p=Object(u.a)(m,2),b=p[0],d=p[1];return Object(n.useEffect)((function(){localStorage.getItem("localContacts")||localStorage.setItem("localContacts",JSON.stringify([])),o((function(t){return JSON.parse(localStorage.getItem("localContacts"))}))}),[]),c.a.createElement("div",{className:"container"},c.a.createElement(C.a,{in:!0,appear:!0,timeout:500,classNames:"title"},c.a.createElement("h1",{className:"title"},"Phonebook")),c.a.createElement(f,{setContacts:o,contacts:a,setShowAlert:d}),a.length>1&&c.a.createElement(v,{inputFilter:function(t){var e=t.target;i(e.value.toLowerCase())}}),a.length>0&&c.a.createElement(_,{contacts:a,filter:s,deleteContact:function(t){o((function(e){return e.filter((function(e){return e.id!==t}))}));var e=JSON.parse(localStorage.getItem("localContacts")).filter((function(e){return e.id!==t}));localStorage.setItem("localContacts",JSON.stringify(e))}}),c.a.createElement(C.a,{in:b.status,timeout:250,classNames:"alert",mountOnEnter:!0,unmountOnExit:!0},c.a.createElement(h,{showAlert:b.text})))};r.a.render(c.a.createElement(S,null),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.7b709875.chunk.js.map