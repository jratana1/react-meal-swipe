(this["webpackJsonpreact-meal-swipe"]=this["webpackJsonpreact-meal-swipe"]||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(15),i=n.n(o),s=(n(88),n(18)),r=(n(89),n(12)),l=n(8),j=n(132),h=n(133),d=n(134),b=n(64),u=n.n(b),p=n(32),x=n.n(p),O=n(65),m=n.n(O),g=n(2);var f=function(e){var t=Object(j.a)({stickToBottom:{width:"100%",position:"fixed",bottom:0}})();return Object(g.jsx)(g.Fragment,{children:sessionStorage.jwt?Object(g.jsxs)(h.a,{value:e.value,onChange:function(t,n){e.setValue(n)},showLabels:!0,className:t.stickToBottom,children:[Object(g.jsx)(d.a,{component:r.b,to:"/swipe",label:"Swipe",value:"MealSwipe",icon:Object(g.jsx)(u.a,{})}),Object(g.jsx)(d.a,{component:r.b,to:"/list",label:"Places",value:"Places",icon:Object(g.jsx)(x.a,{})}),Object(g.jsx)(d.a,{component:r.b,to:"/profile",label:"Profile",value:"Profile",icon:Object(g.jsx)(m.a,{})})]}):null})},v=n(135),w=n(136),y=n(30),k=n(66),C=n.n(k),N=Object(j.a)((function(e){return{root:{flexGrow:1,minHeight:"44px",width:"100%",position:"sticky",top:0},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"left"},bar:{minHeight:"44px"},toolbar:{minHeight:"44px"}}}));function S(e){var t=N();return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:t.root,children:Object(g.jsx)(v.a,{className:t.bar,position:"static",children:Object(g.jsx)(w.a,{className:t.toolbar,children:Object(g.jsxs)(y.a,{edge:"start",variant:"h6",className:t.title,children:[Object(g.jsx)(C.a,{})," ",e.page]})})})})})}var T=n(17),B=n(49),R=function(){return!!sessionStorage.jwt},_=function(e){var t=e.component,n=Object(B.a)(e,["component"]);return Object(g.jsx)(l.b,Object(T.a)(Object(T.a)({},n),{},{render:function(e){return R()?Object(g.jsx)(t,Object(T.a)(Object(T.a)({},e),n)):Object(g.jsx)(l.a,{to:"/"})}}))},A=function(e){var t=e.component,n=e.restricted,a=Object(B.a)(e,["component","restricted"]);return Object(g.jsx)(l.b,Object(T.a)(Object(T.a)({},a),{},{render:function(e){return R()&&n?Object(g.jsx)(l.a,{to:"/swipe"}):Object(g.jsx)(t,Object(T.a)(Object(T.a)({},e),a))}}))},L=(n(96),n(67)),E=n.n(L);function P(){return Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsx)("p",{children:"Login with google"}),Object(g.jsx)(E.a,{type:"light",onClick:function(){window.location.href=fe+"authenticate-google"}})]})}var I=function(e){var t=Object(l.h)(),n=Object(l.g)();return Object(a.useEffect)((function(){var a=new URLSearchParams(t.search);if(a.has("token")){var c=a.get("token");sessionStorage.setItem("jwt",c),e.setLoggedIn(!0),a.delete("token"),n.replace({search:a.toString()})}}),[n,e,t.search]),Object(g.jsx)("div",{className:"Home",children:e.loggedIn?Object(g.jsx)(l.a,{to:"swipe"}):Object(g.jsx)(P,{})})},F=n(137),M=n(138),W=n(74),J=n(68),z=n(48),G=n.n(z),q=n(139),H=n(140),D=Object(j.a)((function(e){return{root:{width:"100%",height:"calc(100% - 56px - 44px)",maxWidth:400,backgroundColor:e.palette.background.paper},list:{height:"calc(100% - 56px - 44px)"}}}));function V(e){var t=D(),n=e.places;function a(e){var t=e.index,a=e.style;return Object(g.jsxs)(F.a,{button:!0,divider:!0,component:r.b,to:{pathname:"/restaurants/".concat(n[t].yelp_id)},style:a,children:[Object(g.jsx)(M.a,{primary:"".concat(n[t].name)}),Object(g.jsx)("div",{children:Object(g.jsxs)(q.a,{children:[Object(g.jsx)(H.a,{edge:"end","aria-label":"favorite",onClick:function(e){return function(e,t){e.preventDefault(),console.log(e.currentTarget),console.log(t)}(e,t)},children:Object(g.jsx)(x.a,{})}),Object(g.jsx)(H.a,{edge:"end","aria-label":"delete",onClick:function(e){return function(e,t){e.preventDefault(),console.log("item:"+t)}(e,t)},children:Object(g.jsx)(G.a,{})})]})})]},t)}return Object(g.jsx)("div",{className:t.root,children:Object(g.jsx)(J.a,{children:function(e){var c=e.height,o=e.width;return Object(g.jsx)(W.a,{className:t.list,height:c,width:o,itemSize:46,itemCount:n.length,overscanCount:10,children:a})}})})}var Q=n.p+"static/media/20200715_112939.5b54978b.jpg",U=n.p+"static/media/logo.6ce24c58.svg",Y=(n(99),function(){return Object(g.jsxs)("div",{className:"Team",children:[Object(g.jsxs)("div",{className:"Bio",children:[Object(g.jsx)("h1",{children:Object(g.jsx)("strong",{children:"John Ratana"})}),Object(g.jsx)("img",{src:Q,alt:"That's ME!",height:"200px"}),Object(g.jsx)("div",{children:"Full-Stack Software Engineer"}),Object(g.jsx)("p",{children:"Ruby, Rails, Javascript, React"}),Object(g.jsxs)("p",{id:"bio",children:["John keeps himself busy with rock climbing, coding, cooking, and raising two children (the 4C's).  Based out of Philadelphia, he is always looking for new opportunities to learn, grow, and work.  You can find him ",Object(g.jsx)("a",{href:"https://www.linkedin.com/in/john-ratana-7aa24063/",children:"here (linkedIn)"}),". Check out his work ",Object(g.jsx)("a",{href:"https://www.linkedin.com/in/john-ratana-7aa24063/",children:"here (Github)"})]})]}),Object(g.jsx)("h1",{children:"Techs"}),Object(g.jsxs)("div",{className:"Techs",children:[Object(g.jsxs)("div",{className:"Techbox",children:[Object(g.jsx)("img",{src:U,alt:"That's ME!",height:"200px",width:"200px"}),Object(g.jsx)("p",{children:"React"})]}),Object(g.jsxs)("div",{className:"Techbox",children:[Object(g.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png",alt:"That's ME!",height:"200px",width:"200px"}),Object(g.jsx)("p",{children:"Ruby On Rails"})]})]}),Object(g.jsx)("div",{className:"Shoutout",children:Object(g.jsxs)("h2",{children:["Shoutout to ",Object(g.jsx)("a",{href:"https://mintbean.io/",children:"Mintbean.io"})," for organizing Learn-A-Thons to inspire new developers!"]})})]})}),K=n(69),X=n.n(K),Z=(n(104),Array(10)),$=[],ee=Z;var te=function(e){var t=e.characters,n=e.setCharacters,o=Object(a.useMemo)((function(){return Array(Z.length).fill(0).map((function(e){return c.a.createRef()}))}),[]),i=function(e){var n=t.filter((function(e){return!$.includes(e.name)}));if(n.length){var a=n[n.length-1].name,c=Z.map((function(e){return e.name})).indexOf(a);$.push(a),o[c].current.swipe(e)}};return Object(a.useEffect)((function(){if(0===t.length){var a={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(sessionStorage.jwt)},body:JSON.stringify({term:"restaurant",location:"philly",offset:10*e.query.refresh+1})};fetch(fe+"/swipe",a).then((function(e){return e.json()})).then((function(t){n(t),ee=Z=t,e.setQuery({refresh:e.query.refresh+1})}))}}),[e.query,t]),Object(g.jsxs)("div",{className:"swipeContainer",children:[Object(g.jsx)("div",{className:"cardContainer",children:t.map((function(t,a){return Object(g.jsx)(X.a,{ref:o[a],className:"swipe",onSwipe:function(n){return function(t,n){if($.push(n.name),"right"===t){var a={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(sessionStorage.jwt)},body:JSON.stringify({restaurant:n})};fetch(fe+"/swiperight",a).then((function(e){return e.json()})).then((function(t){e.setPlaces(t)}))}}(n,t)},onCardLeftScreen:function(){return e=t.name,console.log(e+" left the screen!"),ee=ee.filter((function(t){return t.name!==e})),void n(ee);var e},children:Object(g.jsx)("div",{style:{backgroundImage:"url(".concat(t.photos[0],")")},className:"card",children:Object(g.jsxs)("div",{style:{backgroundColor:"rgba(52, 52, 52, 0.4)",position:"absolute",left:0,bottom:0,textAlign:"left",color:"white",fontWeight:"bold",borderRadius:"25px",maxWidth:400,width:"66%",padding:"10px"},className:"caption",children:[Object(g.jsx)("h2",{style:{marginTop:"0",paddingTop:"0"},children:t.name}),Object(g.jsx)("div",{children:t.location.address1}),Object(g.jsxs)("div",{children:[t.location.city,", ",t.location.state," ",t.location.postal_code]})]})})},t.name)}))}),Object(g.jsxs)("div",{className:"buttons",children:[Object(g.jsx)("button",{onClick:function(){return i("left")},children:"Swipe left!"}),Object(g.jsx)("button",{onClick:function(){return i("right")},children:"Swipe right!"})]})]})},ne=n(47),ae=n(4),ce=n(141),oe=n(143),ie=n(142),se=n(145),re=n(144),le=n(147),je=n(70),he=n.n(je),de=n(71),be=n.n(de),ue=n(72),pe=n.n(ue),xe=n(148),Oe=n(146),me=Object(j.a)((function(e){return{root:{maxWidth:400,height:"calc(100% - 56px - 44px - 4px)",overflow:"scroll",marginLeft:"auto",marginRight:"auto"},media:{height:0,paddingTop:"calc(100vh - 56px - 44px - 74px)"},expand:{transform:"rotate(0deg)",color:"white",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),backgroundColor:"rgba(52, 52, 52, 0.4)","&:hover":{backgroundColor:"rgba(52, 52, 52, 0.4)"}},expandOpen:{transform:"rotate(180deg)",backgroundColor:"rgba(52, 52, 52, 0.4)","&:hover":{backgroundColor:"rgba(52, 52, 52, 0.4)"}},header:{padding:"5px"},overlay:{position:"absolute",bottom:"56px",width:"100%",maxWidth:400,color:"white"},caption:{borderRadius:"25px",fontWeight:"bolder",width:"50%",maxWidth:400,backgroundColor:"rgba(52, 52, 52, 0.4)"},link:{color:"white",fontWeight:"bolder"},customButton:{backgroundColor:"rgba(52, 52, 52, 0.4)",marginTop:"5px",marginBottom:"5px",marginLeft:"10px",marginRight:"10px",color:"white","&:hover":{backgroundColor:"rgba(52, 52, 52, 0.4)"}},content:{marginBottom:"10px"},stars:{position:"static"}}}));var ge=function(e){var t=Object(l.i)().id,n=me(),c=Object(a.useState)(!1),o=Object(s.a)(c,2),i=o[0],j=o[1],h=Object(a.useState)(null),d=Object(s.a)(h,2),b=d[0],u=d[1],p=e.places.findIndex((function(e){return e.yelp_id===t}));return Object(a.useEffect)((function(){var e={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(sessionStorage.jwt)}};fetch(fe+"restaurants/"+t,e).then((function(e){return e.json()})).then((function(e){u(e.data.business)}))}),[t]),b?(console.log(b.reviews),Object(g.jsxs)(ce.a,{className:n.root,children:[Object(g.jsx)(ie.a,{className:n.media,image:b.photos[0],title:"restaurant name"}),Object(g.jsxs)("div",{className:n.overlay,children:[i?null:Object(g.jsx)(Oe.a,{className:n.caption,component:"div",borderColor:"transparent",children:Object(g.jsxs)(y.a,{component:"span",children:[Object(g.jsx)(oe.a,{title:b.name,className:n.header}),Object(g.jsx)("div",{children:b.location.address1}),Object(g.jsxs)("div",{children:[b.location.city,", ",b.location.state," ",b.location.postal_code]}),Object(g.jsx)("a",{href:"tel:+"+b.phone,className:n.link,children:b.display_phone})]})}),Object(g.jsxs)(re.a,{disableSpacing:!0,children:[i?null:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(H.a,{className:n.customButton,"aria-label":"add to favorites",onClick:function(){console.log("favortied")},children:Object(g.jsx)(x.a,{})}),Object(g.jsx)(H.a,{className:n.customButton,"aria-label":"share",onClick:function(){console.log("removed")},children:Object(g.jsx)(G.a,{})}),Object(g.jsx)(H.a,{className:n.customButton,"aria-label":"share",onClick:function(){console.log("removed")},component:r.b,to:{pathname:"/restaurants/".concat(e.places[(p-1)%e.places.length].yelp_id)},children:Object(g.jsx)(he.a,{})}),Object(g.jsx)(H.a,{className:n.customButton,"aria-label":"share",component:r.b,to:{pathname:"/restaurants/".concat(e.places[(p+1)%e.places.length].yelp_id)},children:Object(g.jsx)(be.a,{})})]}),Object(g.jsx)(H.a,{className:Object(ae.a)(n.expand,Object(ne.a)({},n.expandOpen,i)),onClick:function(){j(!i)},"aria-expanded":i,"aria-label":"show more",children:Object(g.jsx)(pe.a,{})})]})]}),Object(g.jsx)(le.a,{in:i,timeout:"auto",unmountOnExit:!0,children:Object(g.jsxs)(se.a,{className:n.content,children:[Object(g.jsx)(oe.a,{title:b.name,className:n.header}),Object(g.jsx)(Oe.a,{component:"div",mb:3,borderColor:"transparent",children:Object(g.jsxs)(y.a,{component:"span",children:[Object(g.jsx)("div",{children:b.location.address1}),Object(g.jsxs)("div",{children:[b.location.city,", ",b.location.state," ",b.location.postal_code]}),Object(g.jsx)("a",{href:"tel:+"+b.phone,children:b.display_phone})]})}),Object(g.jsx)(Oe.a,{component:"div",mb:3,borderColor:"transparent",children:Object(g.jsx)(xe.a,{className:n.stars,name:"read-only",value:b.rating,readOnly:!0})}),Object(g.jsx)(y.a,{paragraph:!0,children:b.reviews[0].text})]})})]})):null},fe="https://shielded-coast-26232.herokuapp.com/";var ve=function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("MealSwipe"),i=Object(s.a)(o,2),j=i[0],h=i[1],d=Object(a.useState)(!1),b=Object(s.a)(d,2),u=b[0],p=b[1],x=Object(a.useState)([]),O=Object(s.a)(x,2),m=O[0],v=O[1],w=Object(a.useState)({refresh:0}),y=Object(s.a)(w,2),k=y[0],C=y[1],N=Object(a.useState)([]),T=Object(s.a)(N,2),B=T[0],R=T[1];return Object(a.useEffect)((function(){var e={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(sessionStorage.jwt)}};fetch(fe+"/restaurants",e).then((function(e){return e.json()})).then((function(e){v(e)}))}),[u]),Object(g.jsx)("div",{className:"App",children:n?(c(!1),Object(g.jsx)("div",{children:"Loading"})):Object(g.jsxs)(r.a,{basename:"/",children:[Object(g.jsx)(S,{page:j,setValue:h}),Object(g.jsx)(f,{value:j,setValue:h}),Object(g.jsxs)(l.d,{children:[Object(g.jsx)(A,{path:"/",exact:!0,restricted:!0,component:I,setLoggedIn:p,loggedIn:u}),Object(g.jsx)(_,{path:"/swipe",exact:!0,component:te,setPlaces:v,query:k,setQuery:C,characters:B,setCharacters:R}),Object(g.jsx)(_,{path:"/list",exact:!0,component:V,places:m}),Object(g.jsx)(_,{path:"/profile",exact:!0,component:Y}),Object(g.jsx)(_,{path:"/restaurants/:id",component:ge,places:m})]})]})})},we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,150)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(ve,{})}),document.getElementById("root")),we()},88:function(e,t,n){},89:function(e,t,n){},96:function(e,t,n){},99:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.8f392cde.chunk.js.map