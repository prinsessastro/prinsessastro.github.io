(this.webpackJsonpfanikauppa=this.webpackJsonpfanikauppa||[]).push([[0],{18:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/forshop.bcda2725.png"},47:function(e,t,a){e.exports=a(59)},52:function(e,t,a){},53:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=(a(52),a(6)),i=(a(53),[{id:1,name:"HIAB",price:15,lang:"Englanti",desc:"Synopsis: One day, aliens came to Earth with their planet. Now we follow Jennifer who is studying in the New World. But her teacher has a secret...",img:"https://i.etsystatic.com/22600828/r/il/8a757f/2272051217/il_794xN.2272051217_2r34.jpg",amount:0},{id:2,name:"PPR",price:10,lang:"Suomi",desc:"Synopsis: Pilakuvia Suomen vaakunoista",img:"https://i.etsystatic.com/22600828/r/il/64f0bb/2224480736/il_794xN.2224480736_t6o0.jpg",amount:0},{id:3,name:"PPR2",price:10,lang:"Suomi",desc:"Synopsis: Pilakuvia Suomen vaakunoista",img:"https://i.etsystatic.com/22600828/r/il/62fbb2/2224576864/il_794xN.2224576864_gmps.jpg",amount:0},{id:4,name:"Narcissus",price:5,lang:"Suomi",desc:"Synopsis: Ilo on juuri eronnut poikayst\xe4v\xe4st\xe4\xe4n. Ilo on jo jatkanut el\xe4m\xe4\xe4ns\xe4, mutta onko suhde sittenk\xe4\xe4n kokonaan ohi? Lue ja n\xe4e miten Ilon k\xe4y. ",img:"https://i.etsystatic.com/22600828/r/il/f61ca9/2272066117/il_794xN.2272066117_2p66.jpg",amount:0}]),u=a(24),m=a(70),s=a(71),d=a(68),p=a(38),E=a.n(p),f=(a(18),function(e){Object(u.a)(e);var t=Object(n.useState)(!1),a=Object(o.a)(t,2);a[0],a[1];return r.a.createElement("div",null,r.a.createElement(m.a,{bg:"dark",variant:"dark"},r.a.createElement(m.a.Brand,{href:"#home"},r.a.createElement("img",{src:E.a,alt:"logo",className:"navbar-brand imgLogo"})),r.a.createElement(s.a,{className:"mr-auto"},r.a.createElement(s.a.Link,{href:"#home"},"Home"),r.a.createElement(s.a.Link,{href:"#features"},"Features"),r.a.createElement(s.a.Link,{href:"#pricing"},"Pricing"),r.a.createElement(d.a,{title:"Dropdown",id:"basic-nav-dropdown"},r.a.createElement(d.a.Item,{href:"#action/3.1"},"Action"),r.a.createElement(d.a.Item,{href:"#action/3.2"},"Another action"),r.a.createElement(d.a.Item,{href:"#action/3.3"},"Something"),r.a.createElement(d.a.Divider,null),r.a.createElement(d.a.Item,{href:"#action/3.4"},"Separated link")))))}),v=(a(69),a(19)),b=a(64),h=a(65),g=function(e){var t=e.product,a=e.setAmount,c=Object(n.useState)(0),l=Object(o.a)(c,2),i=l[0],u=l[1];return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"amount"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=Number(Math.abs(i));a(n,t.id)}},r.a.createElement("label",null,"M\xe4\xe4r\xe4:",t.amount,r.a.createElement("input",{type:"number",className:"nappi",value:i,id:t.id,name:"newAmount",onChange:function(e){return function(e){u(e.target.value)}(e)}})),r.a.createElement("input",{type:"submit",value:"Lis\xe4\xe4 ostoskoriin"}))))},k=function(e){var t=e.product,a=e.products,c=e.setProducts,l=Object(n.useState)(!1),i=Object(o.a)(l,2),u=i[0],m=i[1];return r.a.createElement("div",{className:"product"},r.a.createElement(b.a,{xs:4,md:8},r.a.createElement("div",null,r.a.createElement("h2",{className:"productH2",onClick:function(e){return m(!u)}},t.name),r.a.createElement("p",null,"Price:",t.price,"\u20ac"),r.a.createElement(h.a,{src:t.img,alt:"Kuva",thumbnail:!0}),u&&r.a.createElement("div",null,r.a.createElement("p",null,t.desc),r.a.createElement("p",null,"Kieli:",t.lang)),r.a.createElement(g,{product:t,key:t.id,setAmount:function(e,t){var n=a.map((function(a){return a.id===t&&a.amount>=0?Object(v.a)(Object(v.a)({},a),{},{amount:e}):a}));c(n)}}))))},j=function(e){var t=e.products,a=e.setProducts;return r.a.createElement("div",{className:"mainpart"},r.a.createElement("div",{className:"flex"},t.map((function(e){return r.a.createElement(k,{product:e,products:t,setProducts:a,key:t.id})}))))},N=function(e){var t=e.products,a=(e.product,e.setProducts),n=function(e,n){var r=t.map((function(t){return t.id===n&&t.amount>0?Object(v.a)(Object(v.a)({},t),{},{amount:t.amount+e}):t}));a(r)};return r.a.createElement("div",null,t.filter((function(e){return e.amount>0})).map((function(e){return r.a.createElement("div",{className:"flex"},r.a.createElement("h4",null,e.name),r.a.createElement("img",{className:"thumb",src:e.img,alt:"Kuva"}),r.a.createElement("p",null,"Price:",e.price,"\u20ac"),r.a.createElement("button",{className:"thumbuttonminus",onClick:function(){return n(-1,e.id)}}," - "),r.a.createElement("p",null,"M\xe4\xe4r\xe4:",e.amount),r.a.createElement("button",{className:"thumbutton",onClick:function(){return n(1,e.id)}},"+"))})))},O=function(e){var t=e.products;return r.a.createElement("div",{className:"ALL"},r.a.createElement("p",null,"Koko Hinta: ",function(){var e=0;if(0!==t.length){var a=t.map((function(e){return e.amount*e.price}));console.log(a),e=a.reduce((function(e,t){return e+t}),0)}return e}(),"\u20ac "))},y=function(e){e.products,e.setForm;var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)({name:"",email:"",address:"",postalcode:"",district:""}),u=Object(o.a)(i,2),m=u[0],s=u[1],d=function(e,t){var a=Object(v.a)({},m);a[t]=e.target.value,s(a)};return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){return l(!c)}},"Tee tilaus"),c&&r.a.createElement("div",{className:"amount"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==m.name&&""!==m.email&&""!==m.address&&""!==m.postalcode&&""!==m.district||console.log("Anna Tiedot")}},r.a.createElement("label",null,"Name:",r.a.createElement("input",{type:"text",value:m.name,onChange:function(e){return d(e,"name")}})),r.a.createElement("br",null),r.a.createElement("label",null,"Email:",r.a.createElement("input",{type:"email",value:m.email,onChange:function(e){return d(e,"email")}})),r.a.createElement("br",null),r.a.createElement("label",null,"Address:",r.a.createElement("input",{type:"text",value:m.address,onChange:function(e){return d(e,"address")}})),r.a.createElement("br",null),r.a.createElement("label",null,"PostalCode:",r.a.createElement("input",{type:"text",value:m.postalcode,onChange:function(e){return d(e,"postalcode")}})),r.a.createElement("br",null),r.a.createElement("label",null,"District:",r.a.createElement("input",{type:"text",value:m.district,onChange:function(e){return d(e,"district")}})),r.a.createElement("br",null),r.a.createElement("input",{onClick:function(e){return alert("Tilaus on vahvistettu, kiitos kaupoista!")},type:"submit",value:"Vahvista Tilaus"}))))},S=function(e){var t=e.products,a=e.setProducts;return r.a.createElement("div",{className:"product"},r.a.createElement("h2",{className:"productH2"},"Cart: "),r.a.createElement(N,{products:t,setProducts:a}),r.a.createElement(O,{products:t}),r.a.createElement(y,null))},P=a(66),w=a(67),x=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=(t[0],t[1],Object(n.useState)([])),c=Object(o.a)(a,2),l=(c[0],c[1],Object(n.useState)(!0)),u=Object(o.a)(l,2),m=u[0],s=u[1],d=Object(n.useState)(i),p=Object(o.a)(d,2),E=p[0],v=p[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(f,null)),r.a.createElement(P.a,null,r.a.createElement("section",{className:"toRightSide"},r.a.createElement("button",{className:"ostoskarry",onClick:function(e){return s(!m)}}," ",m?"N\xe4yt\xe4 Ostoskori":"Piilota Ostoskori")),r.a.createElement("section",{className:"product"},m&&r.a.createElement(w.a,null,r.a.createElement("section",null,r.a.createElement("h1",null,"Tuotteet:")),r.a.createElement(j,{products:E,setProducts:v}))),!m&&r.a.createElement(S,{products:E,setProducts:v})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.e7ea04eb.chunk.js.map