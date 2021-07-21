(this["webpackJsonpreact-app-init"]=this["webpackJsonpreact-app-init"]||[]).push([[0],{10:function(n){n.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},11:function(n){n.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},12:function(n){n.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},23:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);t(1);var a,c,i,s,r,d,o,l=t(8),b=t.n(l),p={user:t(9),statistics:t(10),friends:t(11),transactions:t(12)},x=t(2),u=t(3),j=u.a.li(a||(a=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  height: 75px;\n  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);\n  margin-bottom: 10px;\n\n  .status {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: ",";\n    margin-left: 20px;\n  }\n  .avatar {\n    margin-left: 20px;\n  }\n  .name {\n    margin-left: 20px;\n    font-size: 25px;\n    font-weight: 700;\n  }\n"])),(function(n){return n.active?"green":"red"})),f=t(0),h=function(n){var e=n.friend;return Object(f.jsxs)(j,{active:e.isOnline,children:[Object(f.jsx)("span",{className:"status"}),Object(f.jsx)("img",{className:"avatar",src:e.avatar,alt:"friends avatar",width:"48"}),Object(f.jsx)("p",{className:"name",children:e.name})]})},m=u.a.div(c||(c=Object(x.a)(["\n  width: 400px;\n  margin: 50px auto;\n"]))),g=function(n){var e=n.friends;return Object(f.jsx)(m,{children:Object(f.jsx)("ul",{className:"friend-list",children:e.map((function(n){return Object(f.jsx)(h,{friend:n},n.id)}))})})},y=u.a.div(i||(i=Object(x.a)(["\n  border: 2px solid grey;\n  width: 300px;\n  margin: 50px auto;\n  text-align: center;\n\n  .avatar {\n    height: 150px;\n    border-radius: 100px;\n    border: 1px solid grey;\n    margin: 20px auto 0;\n  }\n  .name {\n    font-size: 20px;\n    font-weight: 700;\n    text-align: center;\n    margin-top: 20px;\n  }\n  .tag,\n  .location {\n    margin-top: 10px;\n  }\n  .stats {\n    display: flex;\n    background-color: lightgray;\n    border-top: 1px solid black;\n    margin-top: 20px;\n    height: 100px;\n  }\n  .stats li {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n  }\n  .stats li:not(:last-child) {\n    border-right: 1px solid black;\n  }\n\n  .label {\n    margin-bottom: 5px;\n  }\n  .quantity {\n    font-size: 20px;\n    font-weight: 700;\n    text-align: center;\n  }\n"]))),O=function(n){var e=n.user;return Object(f.jsxs)(y,{children:[Object(f.jsxs)("div",{className:"description",children:[Object(f.jsx)("img",{src:e.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"avatar"}),Object(f.jsx)("p",{className:"name",children:e.name}),Object(f.jsxs)("p",{className:"tag",children:["@",e.tag]}),Object(f.jsx)("p",{className:"location",children:e.location})]}),Object(f.jsxs)("ul",{className:"stats",children:[Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{className:"label",children:"Followers"}),Object(f.jsx)("span",{className:"quantity",children:e.stats.followers})]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{className:"label",children:"Views"}),Object(f.jsx)("span",{className:"quantity",children:e.stats.views})]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{className:"label",children:"Likes"}),Object(f.jsx)("span",{className:"quantity",children:e.stats.likes})]})]})]})},w=u.a.li(s||(s=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-grow: 1;\n  color: white;\n\n  &:nth-child(1) {\n    background-color: #4fc4fa;\n  }\n  &:nth-child(2) {\n    background-color: #a23cf5;\n  }\n  &:nth-child(3) {\n    background-color: #e64c66;\n  }\n  &:nth-child(4) {\n    background-color: #20b8c5;\n  }\n  &:nth-child(5) {\n    background-color: green;\n  }\n\n  .percentage {\n    font-size: 22px;\n    margin-top: 5px;\n  }\n"]))),v=function(n){var e=n.stat;return Object(f.jsxs)(w,{children:[Object(f.jsx)("span",{className:"label",children:e.label}),Object(f.jsxs)("span",{className:"percentage",children:[e.percentage,"%"]})]})},N=u.a.section(r||(r=Object(x.a)(["\n  border: 2px solid grey;\n  width: 400px;\n  margin: 50px auto;\n  text-align: center;\n\n  .title {\n    font-size: 22px;\n    color: #525659;\n    text-transform: uppercase;\n    margin: 25px auto;\n  }\n\n  ul {\n    display: flex;\n    height: 75px;\n  }\n"]))),k=function(n){var e=n.title,t=n.stats;return Object(f.jsxs)(N,{children:[e&&Object(f.jsx)("h2",{className:"title",children:e}),Object(f.jsx)("ul",{className:"stat-list",children:t.map((function(n){return Object(f.jsx)(v,{stat:n},n.id)}))})]})},U=u.a.div(d||(d=Object(x.a)(["\n  width: 800px;\n  margin: 50px auto;\n\n  .transaction-history {\n    table-layout: fixed;\n    width: 100%;\n  }\n\n  table {\n    border-collapse: collapse;\n  }\n\n  table th {\n    background-color: #00bcd5;\n    color: white;\n    font-size: 18px;\n    text-transform: uppercase;\n    border: 1px solid white;\n    padding: 10px;\n  }\n"]))),J=u.a.tr(o||(o=Object(x.a)(["\n  &:nth-child(2n) {\n    background-color: #ecf1f4;\n  }\n\n  td {\n    padding: 10px;\n    border: 1px solid #ecf1f4;\n\n    font-size: 18px;\n    text-align: center;\n    color: #5d6266;\n  }\n"]))),z=function(n){var e=n.transaction;return Object(f.jsxs)(J,{children:[Object(f.jsx)("td",{children:e.type.charAt(0).toUpperCase()+e.type.slice(1)}),Object(f.jsx)("td",{children:e.amount}),Object(f.jsx)("td",{children:e.currency})]})},A=function(n){var e=n.transactions;return Object(f.jsx)(U,{children:Object(f.jsxs)("table",{className:"transaction-history",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Type"}),Object(f.jsx)("th",{children:"Amount"}),Object(f.jsx)("th",{children:"Currency"})]})}),Object(f.jsx)("tbody",{children:e.map((function(n){return Object(f.jsx)(z,{transaction:n},n.id)}))})]})})},C=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(O,{user:p.user}),Object(f.jsx)(k,{title:"Upload stats",stats:p.statistics}),Object(f.jsx)(g,{friends:p.friends}),Object(f.jsx)(A,{transactions:p.transactions})]})};t(23);b.a.render(Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(C,{})}),document.getElementById("root"))},9:function(n){n.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')}},[[24,1,2]]]);
//# sourceMappingURL=main.607aeb1c.chunk.js.map