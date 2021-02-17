(this["webpackJsonpsearch-hub-challenge"]=this["webpackJsonpsearch-hub-challenge"]||[]).push([[4],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return q}));var a,r,c,i,s,o,l,u=n(51),b=n.n(u),j=n(7),d=n(52),h=n(19),p=n(0),x=n(55),O=n.n(x),g=n(46),f=n(50),m=n(22),v=n(2),w=n(21),y=n(13),V=n(9),C=V.b.div(a||(a=Object(y.a)(["\n  height: 66px;\n  box-sizing: border-box;\n  overflow: hidden;\n"]))),S=n(1),k=function(e){var t=e.item,n=e.type,a=Object(v.f)();return"repositories"===n?Object(S.jsx)(g.Col,{xl:3,l:4,m:6,s:12,children:Object(S.jsx)(g.Card,{header:Object(S.jsx)(g.CardTitle,{image:t.owner.avatar_url,children:t.name}),actions:[Object(S.jsx)("a",{href:t.html_url,target:"_blank",rel:"noreferrer",children:"Abrir reposit\xf3rio"},1),Object(S.jsx)(w.b,{to:{pathname:"/search-hub-challenge/user/".concat(t.owner.login),params:t.owner.login},children:"Ver propriet\xe1rio"},2)],children:Object(S.jsx)(C,{children:t.description})})},t.id):Object(S.jsx)(g.Col,{xl:3,l:4,m:6,s:12,children:Object(S.jsx)(g.Card,{header:Object(S.jsx)(g.CardTitle,{image:t.avatar_url,children:t.login}),children:Object(S.jsx)(g.Button,{node:"button",waves:"light",flat:!0,onClick:function(){return e=t.login,a.push({pathname:"/search-hub-challenge/user/".concat(e),params:e});var e},children:"Ver detalhes"})})},t.id)},_=Object(p.memo)(k),z=V.b.div(r||(r=Object(y.a)(["\n  padding: 15px;\n  box-sizing: border-box;\n  flex: 1;\n  min-width: 0;\n  text-align: center;\n"]))),B=V.b.div(c||(c=Object(y.a)(["\n  padding: 15px;\n  box-sizing: border-box;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  min-width: 0;\n"]))),I=V.b.p(i||(i=Object(y.a)(["\n  font-size: 22px;\n"]))),P=function(){var e=Object(m.c)(),t=e.state,n=e.dispatch,a=Object(p.useState)(null),r=Object(h.a)(a,2),c=r[0],i=r[1],s=Object(p.useState)(!1),o=Object(h.a)(s,2),l=o[0],u=o[1],x=Object(p.useState)(1),v=Object(h.a)(x,2),w=v[0],y=v[1],V=Object(p.useState)(12),C=Object(h.a)(V,1)[0];return Object(p.useEffect)((function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(){var n,a,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,f.a.get("search/".concat(t.radioValue),{params:{q:t.inputValue,page:t.page,per_page:C}});case 3:n=e.sent,a=n.data,r=n.headers,(c=O()(r.link))&&c.last&&y(Number(c.last.page)),i(Object(j.a)(Object(j.a)({},a),{},{type:t.radioValue})),u(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.inputValue&&e()}),[C,t.inputValue,t.page,t.radioValue]),l||c?l?Object(S.jsxs)(B,{children:[Object(S.jsx)(g.Preloader,{active:!0,color:"blue",flashing:!1,size:"big"}),Object(S.jsx)(I,{children:"Buscando resultados..."})]}):0===c.items.length?Object(S.jsxs)(z,{children:[Object(S.jsx)(g.Icon,{large:!0,center:!0,children:"search_off"}),Object(S.jsx)(I,{children:"Sua busca n\xe3o retornou resultados!"})]}):Object(S.jsxs)(z,{children:[Object(S.jsx)(g.Row,{children:c.items.map((function(e){return Object(S.jsx)(_,{item:e,type:c.type},e.id)}))}),Object(S.jsx)(g.Pagination,{activePage:t.page,items:w,maxButtons:5,leftBtn:Object(S.jsx)(g.Icon,{children:"chevron_left"}),rightBtn:Object(S.jsx)(g.Icon,{children:"chevron_right"}),onSelect:function(e){return n({type:m.a.Page,payload:{page:e}})}})]}):null},R=n.p+"static/media/github-mark.c8007a9f.png",T=V.b.div(s||(s=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  flex-flow: column;\n  flex: 1;\n  min-width: 0;\n  margin: 0 auto;\n  padding: 15px;\n  box-sizing: border-box;\n"]))),G=V.b.div(o||(o=Object(y.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  min-width: 0;\n  margin: 0 auto;\n  margin-bottom: 1rem;\n  box-sizing: border-box;\n  width: 100%;\n"]))),J=V.b.img(l||(l=Object(y.a)(["\n  max-width: 25%;\n  margin: 0 auto 15px auto;\n"]))),U=function(){var e=Object(m.c)(),t=e.state,n=e.dispatch,a=Object(p.useState)(t.inputValue||""),r=Object(h.a)(a,2),c=r[0],i=r[1],s=Object(p.useState)(t.radioValue),o=Object(h.a)(s,2),l=o[0],u=o[1];return Object(S.jsxs)(T,{children:[Object(S.jsx)(J,{src:R,alt:"Github logo"}),Object(S.jsx)(g.TextInput,{id:"TextInput-4",label:"Digite um texto para a sua busca!",autoComplete:"off",value:c,onChange:function(e){var t=e.target;return i(t.value)}}),Object(S.jsx)(G,{children:Object(S.jsx)(g.RadioGroup,{options:[{label:"Usu\xe1rios",value:"users"},{label:"Reposit\xf3rios",value:"repositories"}],value:l,onChange:function(e){var t=e.target;return u(t.value)},withGap:!0})}),Object(S.jsxs)(g.Button,{node:"button",type:"submit",waves:"light",onClick:function(){return n({type:m.a.SearchParams,payload:{inputValue:c,radioValue:l}})},children:["Buscar",Object(S.jsx)(g.Icon,{right:!0,children:"search"})]})]})},q=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(U,{}),Object(S.jsx)(P,{})]})}},50:function(e,t,n){"use strict";var a=n(63),r=n.n(a).a.create({baseURL:"https://api.github.com/"});t.a=r}}]);
//# sourceMappingURL=4.ad88b90f.chunk.js.map