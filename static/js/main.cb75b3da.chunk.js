(this.webpackJsonplabreact=this.webpackJsonplabreact||[]).push([[0],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),c=a.n(l),o=(a(71),a(26),a(22));var s,m=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav-links"},r.a.createElement(o.b,{style:{textDecoration:"none"},to:"/home"}," ",r.a.createElement("li",{className:"navLi"},"Home")," "),r.a.createElement(o.b,{style:{textDecoration:"none"},to:"/favorites"}," ",r.a.createElement("li",{className:"navLi"},"Favorites")," ")))},i=a(35),u=a(36),p=a(40),d=a(39),E=a(17),v=a.n(E),b=a(37),f=a(1),y=a(4),h=a(12),O=a(16),j=a(3),g=a(18),N=Object(g.b)("add to cart"),C=Object(g.b)("remove to cart"),S={addToFaveList:N,removeFromFaveList:C},w=Object(g.c)([],(s={},Object(h.a)(s,N,(function(e,t){return e.find((function(e){return e.person.name===t.payload.name}))?e.map((function(e){return e.person.name===t.payload.name?Object(j.a)({},e):e})):[].concat(Object(O.a)(e),[{person:t.payload}])})),Object(h.a)(s,C,(function(e,t){return e.filter((function(e){return e.person.name!==t.payload}))})),s)),F=function(e){var t=e.people,a=e.loading,l=Object(n.useState)(""),c=Object(f.a)(l,2),o=c[0],s=c[1],m=Object(y.b)();if(a)return r.a.createElement("p",{className:"fa moviePopUp"},"\uf005");var i=t.map((function(e){var t=function(){return m(S.addToFaveList(e))};return 0!==o.length?e.name.toLowerCase().match(o.toLowerCase())||e.birth_year.toLowerCase().match(o.toLowerCase())||e.eye_color.toLowerCase().match(o.toLowerCase())?r.a.createElement("div",{className:"eachCategory",key:e.name},r.a.createElement("p",{className:"eachCategoryName"},e.name," "),r.a.createElement("p",{className:"eachCategoryYear"},e.birth_year," "),r.a.createElement("p",{className:e.eye_color},e.eye_color),r.a.createElement("button",{className:"addFavoriteButtonShowPeople",onClick:t},"\u2605")):null:r.a.createElement("div",{className:"eachCategory",key:e.name},r.a.createElement("p",{className:"eachCategoryName"},e.name," "),r.a.createElement("p",{className:"eachCategoryYear"},e.birth_year," "),r.a.createElement("p",{className:e.eye_color},e.eye_color),r.a.createElement("button",{className:"addFavoriteButtonShowPeople",onClick:t},"\u2605"))}));return r.a.createElement("div",{className:"headersAndCategories"},r.a.createElement("br",null),r.a.createElement("p",{className:"searchText"},'Here you can search amongst our Star Wars people and add your favorites to the favorite list. If you, for any reason, don\'t find your favorites in our collection you can add your own in the "Favorites" tab. Then you can filter your favorites based on chosen category. Enjoy!'),r.a.createElement("br",null),r.a.createElement("input",{className:"SearchPeoplePlanets",type:"text",placeholder:"Find your favorite person...",value:o,onChange:function(e){return s(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"headers"},r.a.createElement("p",null,"Name"),r.a.createElement("p",null,"Birth year"),r.a.createElement("p",null,"Eye color"),r.a.createElement("p",null,"Favorite")),i)};var k=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!0),o=Object(f.a)(c,2),s=o[0],m=o[1];return Object(n.useEffect)((function(){var e=[],t=1;(function(){var a=Object(b.a)(v.a.mark((function a(){var n,r,c;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=0;case 1:if(!(n<9)){a.next=13;break}return a.next=4,fetch("https://swapi.dev/api/people/?page="+t);case 4:return r=a.sent,a.next=7,r.json();case 7:c=a.sent,t++,c.results.forEach((function(t){e.push(t),console.log(e)}));case 10:n++,a.next=1;break;case 13:l(e),m(!1);case 15:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),r.a.createElement("div",null,r.a.createElement(F,{people:a,loading:s}))},B=function(e){var t=e.planets,a=e.loading,l=Object(n.useState)(""),c=Object(f.a)(l,2),o=c[0],s=c[1],m=Object(y.b)();if(a)return r.a.createElement("p",{className:"fa moviePopUp"},"\uf005");var i=t.map((function(e){var t=function(){return m(S.addToFaveList(e))};return 0!==o.length?e.name.toLowerCase().match(o.toLowerCase())||e.climate.toLowerCase().match(o.toLowerCase())||e.terrain.toLowerCase().match(o.toLowerCase())?r.a.createElement("div",{className:"eachCategory",key:e.name},r.a.createElement("p",null,e.name," "),r.a.createElement("p",null,e.climate," "),r.a.createElement("p",null,e.terrain),r.a.createElement("button",{className:"addFavoriteButtonShowPeople",onClick:t},"\u2605")):null:r.a.createElement("div",{className:"eachCategory",key:e.name},r.a.createElement("p",null,e.name," "),r.a.createElement("p",null,e.climate," "),r.a.createElement("p",null,e.terrain),r.a.createElement("button",{className:"addFavoriteButtonShowPeople",onClick:t},"\u2605"))}));return r.a.createElement("div",{className:"headersAndCategories"},r.a.createElement("br",null),r.a.createElement("p",{className:"searchText"},'Here you can search amongst our Star Wars planets and add your favorites to the favorite list. If you, for any reason, don\'t find your favorites in our collection you can add your own in the "Favorites" tab. Then you can filter your favorites based on chosen category. Enjoy!'),r.a.createElement("br",null),r.a.createElement("input",{className:"SearchPeoplePlanets",type:"text",placeholder:"Find your favorite planet...",value:o,onChange:function(e){return s(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"headers"},r.a.createElement("p",null,"Planet"),r.a.createElement("p",null,"Climate"),r.a.createElement("p",null,"Terrain"),r.a.createElement("p",null,"Favorite")),i)};var P=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!0),o=Object(f.a)(c,2),s=o[0],m=o[1];return Object(n.useEffect)((function(){var e=[],t=1;(function(){var a=Object(b.a)(v.a.mark((function a(){var n,r,c;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=0;case 1:if(!(n<4)){a.next=13;break}return a.next=4,fetch("https://swapi.dev/api/planets/?page="+t);case 4:return r=a.sent,a.next=7,r.json();case 7:c=a.sent,t++,c.results.forEach((function(t){e.push(t),console.log(e)}));case 10:n++,a.next=1;break;case 13:l(e),m(!1);case 15:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),r.a.createElement("div",null,r.a.createElement(B,{planets:a,loading:s}))},L=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={visible:!1},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state.visible?"Show People":"Show Planets";return r.a.createElement("div",null,r.a.createElement("button",{className:"togglePeoplePlanetsButton",onClick:function(){e.setState({visible:!e.state.visible})}},t),this.state.visible?r.a.createElement(P,null):r.a.createElement(k,null))}}]),a}(n.Component),x=a(156),M=function(e){var t=e.show,a=e.children,l=Object(n.useState)(t),c=Object(f.a)(l,2),o=c[0],s=c[1];Object(n.useEffect)((function(){t&&s(!0)}),[t]);return o&&r.a.createElement("div",{style:{animation:"".concat(t?"fadeIn":"fadeOut"," 0.7s")},onAnimationEnd:function(){t||s(!1)}},a)};var A=function(e){var t=e.addCustom,a=Object(n.useState)({id:"",name:"",yearclimate:"",colorterrain:"",completed:!1}),l=Object(f.a)(a,2),c=l[0],o=l[1],s=Object(n.useState)(!1),m=Object(f.a)(s,2),i=m[0],u=m[1],p=Object(n.useState)(""),d=Object(f.a)(p,2),E=d[0],v=d[1],b=Object(n.useState)(""),y=Object(f.a)(b,2),O=y[0],g=y[1],N=Object(n.useState)(""),C=Object(f.a)(N,2),S=C[0],w=C[1],F=Object(n.useState)(""),k=Object(f.a)(F,2),B=k[0],P=k[1],L=Object(n.useState)("people"),A=Object(f.a)(L,2),T=A[0],I=A[1],_=Object(n.useState)(!1),Y=Object(f.a)(_,2),D=Y[0],G=Y[1],W=Object(n.useState)(!1),R=Object(f.a)(W,2),J=R[0],U=R[1],H=Object(n.useState)(!1),z=Object(f.a)(H,2),X=z[0],Z=z[1],$=Object(n.useState)(""),q=Object(f.a)($,2),K=q[0],Q=q[1],V=Object(n.useState)(""),ee=Object(f.a)(V,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(""),re=Object(f.a)(ne,2),le=re[0],ce=re[1],oe=function(e){o(Object(j.a)(Object(j.a)({},c),{},Object(h.a)({},e.target.name,e.target.value))),(!c.name.trim(" ")||c.name.length<2)&&(g(" Min 2 characters"),v(" ")),c.yearclimate.trim(" ")||(w(" Letters & numbers"),v(" ")),c.colorterrain.trim(" ")?(g(""),w(""),P("")):(P(" Choose color"),v(" "))},se=function(e){o(Object(j.a)(Object(j.a)({},c),{},Object(h.a)({},e.target.name,e.target.value))),c.name.trim(" ")||(Q(" Min 2 characters"),v(" ")),c.yearclimate.trim(" ")||(ae(" Min 2 characters"),v(" ")),c.colorterrain.trim(" ")?(Q(""),ae(""),ce("")):(ce(" Min 2 characters"),v(" "))};return r.a.createElement("div",null,r.a.createElement(M,{show:i},r.a.createElement("div",{className:"popUpModal"},r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"addPersonPlanetButton",onClick:function(){return I("people")}},"Person"),r.a.createElement("button",{className:"addPersonPlanetButton",onClick:function(){return I("planets")}},"Planet")),r.a.createElement("br",null),r.a.createElement("form",{className:"addFavoriteForm",onSubmit:function(e){e.preventDefault(),c.name.length<2||!/(?=.*\d)(?=.*[a-zA-Z])/.test(c.yearclimate)||!c.colorterrain.trim(" ")?(v(" Fill out all fields"),g(" Min 2 characters"),w(" Letters & numbers"),P(" Choose color")):(v(" Successfully added"),t(Object(j.a)(Object(j.a)({},c),{},{id:Object(x.a)()})),o(Object(j.a)(Object(j.a)({},c),{},{name:""}),Object(j.a)(Object(j.a)({},c),{},{yearclimate:""}),Object(j.a)(Object(j.a)({},c),{},{colorterrain:""})),o({id:"",name:"",yearclimate:"",colorterrain:"",completed:!1}),g(""),w(""),P(""),Z(!1))},style:"people"===T?{display:" "}:{display:"none"}},r.a.createElement("p",{className:"closeFormX",onClick:function(){return u((function(e){return!e}))}},"X"),r.a.createElement("div",null,r.a.createElement("label",null,"\xa0Name: ")," ",r.a.createElement("span",{className:"errorMessage",style:!c.name.trim(" ")&&D&&c.name.length<2?{display:"inline"}:{display:"none"}},O),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name",value:c.name,onChange:oe,onBlur:function(){return G(!0)}})),r.a.createElement("div",null,r.a.createElement("label",null,"\xa0Birth year: ")," ",r.a.createElement("span",{className:"errorMessage",style:c.yearclimate.trim(" ")||!J||/(?=.*\d)(?=.*[a-zA-Z])/.test(c.yearclimate)?{display:"none"}:{display:"inline"}},S),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"yearclimate",value:c.yearclimate,onChange:oe,onBlur:function(){return U(!0)}})),r.a.createElement("div",null,r.a.createElement("label",null,"\xa0Eye color: ")," ",r.a.createElement("span",{className:"errorMessage",style:!c.colorterrain.trim(" ")&&X?{display:"inline"}:{display:"none"}},B),r.a.createElement("br",null),r.a.createElement("select",{name:"colorterrain",value:c.colorterrain,onChange:oe,onBlur:function(){return Z(!0)}},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"Black"},"Black"),r.a.createElement("option",{value:"Blue"},"Blue"),r.a.createElement("option",{value:"Blue-gray"},"Blue-gray"),r.a.createElement("option",{value:"Brown"},"Brown"),r.a.createElement("option",{value:"Gold"},"Gold"),r.a.createElement("option",{value:"Gray"},"Gray"),r.a.createElement("option",{value:"Green"},"Green"),r.a.createElement("option",{value:"GreenYellow"},"Green, Yellow"),r.a.createElement("option",{value:"Hazel"},"Hazel"),r.a.createElement("option",{value:"Orange"},"Orange"),r.a.createElement("option",{value:"Pink"},"Pink"),r.a.createElement("option",{value:"Red"},"Red"),r.a.createElement("option",{value:"RedBlue"},"Red, Blue"),r.a.createElement("option",{value:"White"},"White"),r.a.createElement("option",{value:"Yellow"},"Yellow"),r.a.createElement("option",{value:"Unknown"},"Unknown"))),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"addFavoriteFormButton"},"Add")," \xa0",r.a.createElement("span",{className:"errorMessage"},E)),r.a.createElement("form",{className:"addFavoriteForm",onSubmit:function(e){e.preventDefault(),c.name.length<2||c.yearclimate.length<2||c.colorterrain.length<2?(v(" Fill out all fields"),Q(" Min 2 characters"),ae(" Min 2 characters"),ce(" Min 2 characters")):(v(" Successfully added"),t(Object(j.a)(Object(j.a)({},c),{},{id:Object(x.a)()})),o(Object(j.a)(Object(j.a)({},c),{},{name:""}),Object(j.a)(Object(j.a)({},c),{},{yearclimate:""}),Object(j.a)(Object(j.a)({},c),{},{colorterrain:""})),o({id:"",name:"",yearclimate:"",colorterrain:"",completed:!1}),Q(""),ae(""),ce(""),Z(!1))},style:"planets"===T?{display:" "}:{display:"none"}},r.a.createElement("p",{className:"closeFormX",onClick:function(){return u((function(e){return!e}))}},"X"),r.a.createElement("div",null,r.a.createElement("label",null,"\xa0Name: ")," ",r.a.createElement("span",{className:"errorMessage",style:!c.name.trim(" ")&&D&&c.name.length<2?{display:"inline"}:{display:"none"}},K),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name",value:c.name,onChange:se,onBlur:function(){return G(!0)}})),r.a.createElement("div",null,r.a.createElement("label",null,"\xa0Climate: ")," ",r.a.createElement("span",{className:"errorMessage",style:!c.yearclimate.trim(" ")&&J&&c.yearclimate.length<2?{display:"inline"}:{display:"none"}},te),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"yearclimate",value:c.yearclimate,onChange:se,onBlur:function(){return U(!0)}})),r.a.createElement("div",null,r.a.createElement("label",null,"\xa0Terrain: ")," ",r.a.createElement("span",{className:"errorMessage",style:!c.colorterrain.trim(" ")&&X&&c.colorterrain.length<2?{display:"inline"}:{display:"none"}},le),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"colorterrain",value:c.colorterrain,onChange:se,onBlur:function(){return Z(!0)}})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"addFavoriteFormButton"},"Add")," \xa0",r.a.createElement("span",{className:"errorMessage"},E))))),r.a.createElement("button",{className:"addCustomButtonCustomYoda",onClick:function(){return u((function(e){return!e}))}}," Add custom"))};var T=function(e){var t=e.custom,a=e.removeCustom;return r.a.createElement("div",{className:"headersAndCategoriesFave"},r.a.createElement("div",{className:"eachCategoryInFaves"},r.a.createElement("p",null,t.name),r.a.createElement("p",null,t.yearclimate),r.a.createElement("p",null,t.colorterrain),r.a.createElement("p",{className:"AddedTag"},"Custom added"),r.a.createElement("button",{className:"deleteFavoriteButton",onClick:function(){a(t.id)}},"\u2715")))};var I=function(e){var t=e.customMade,a=e.removeCustom;return r.a.createElement("div",null,r.a.createElement("div",null,t.map((function(e){return r.a.createElement(T,{key:e.id,custom:e,removeCustom:a})}))))},_=a(63),Y=a.n(_),D=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(M,{show:a},r.a.createElement("div",{className:"popUpModal",onClick:function(){return l((function(e){return!e}))}},r.a.createElement("img",{src:Y.a,className:"yodacat",alt:"yodacat"}))),r.a.createElement("button",{className:"addCustomButtonCustomYoda",onClick:function(){return l((function(e){return!e}))}},"Yoda"))},G=function(){var e=Object(y.c)((function(e){return e.people})),t=Object(y.b)(),a=Object(n.useState)("people"),l=Object(f.a)(a,2),c=l[0],o=l[1],s=e.map((function(e){return e.person.climate?r.a.createElement("div",{className:"headersAndCategoriesFave",key:e.person.name},r.a.createElement("div",{className:"eachCategoryInFaves",style:"planets"===c?{display:" "}:{display:"none"}},r.a.createElement("p",null,e.person.name," "),r.a.createElement("p",null,e.person.climate),r.a.createElement("p",null,e.person.terrain),r.a.createElement("p",{className:"AddedTag"},"From swapi"),r.a.createElement("button",{className:"deleteFavoriteButton",onClick:function(){return t(S.removeFromFaveList(e.person.name))}},"\u2715")," ")):r.a.createElement("div",{className:"headersAndCategoriesFave",key:e.person.name},r.a.createElement("div",{className:"eachCategoryInFaves",style:"people"===c?{display:" "}:{display:"none"}},r.a.createElement("p",null,e.person.name," "),r.a.createElement("p",null,e.person.birth_year),r.a.createElement("p",null,e.person.eye_color),r.a.createElement("p",{className:"AddedTag"},"From swapi"),r.a.createElement("button",{className:"deleteFavoriteButton",onClick:function(){return t(S.removeFromFaveList(e.person.name))}},"\u2715")," "))})),m=Object(n.useState)([]),i=Object(f.a)(m,2),u=i[0],p=i[1];return Object(n.useEffect)((function(){var e=JSON.parse(sessionStorage.getItem("custom"));e&&p(e)}),[]),Object(n.useEffect)((function(){sessionStorage.setItem("custom",JSON.stringify(u))}),[u]),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",{className:"deleteFavoriteButtonDiv"},r.a.createElement("button",{className:"addCustomButton",onClick:function(){return o("people")}},"Show people"),r.a.createElement("button",{className:"addCustomButton",onClick:function(){return o("planets")}},"Show planets"),r.a.createElement("button",{className:"addCustomButton",onClick:function(){return o("custom")}},"Show custom"),r.a.createElement(A,{addCustom:function(e){p([e].concat(Object(O.a)(u)))}}),r.a.createElement(D,null)),r.a.createElement("br",null),r.a.createElement("p",{className:"headerFavorites"}," Favorites "),r.a.createElement("p",{className:"headersLine"}),r.a.createElement("br",null),r.a.createElement("span",null,s),r.a.createElement("div",{style:"custom"===c?{display:" "}:{display:"none"}},r.a.createElement(I,{customMade:u,removeCustom:function(e){p(u.filter((function(t){return t.id!==e})))}})),r.a.createElement("br",null))},W=function(){var e=Object(y.c)((function(e){return e.people})),t=Object(y.b)(),a=e.map((function(e){return r.a.createElement("div",{className:"headersAndCategoriesFave",key:e.person.name},r.a.createElement("div",{className:"eachCategoryInFaves"},r.a.createElement("p",null,e.person.name," "),r.a.createElement("p",null,e.person.birth_year," ",e.person.climate),r.a.createElement("p",null,e.person.eye_color," ",e.person.terrain),r.a.createElement("p",{className:"AddedTag"},"From swapi"),r.a.createElement("button",{className:"deleteFavoriteButton",onClick:function(){return t(S.removeFromFaveList(e.person.name))}},"\u2715")," "))})),l=Object(n.useState)([]),c=Object(f.a)(l,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){var e=JSON.parse(sessionStorage.getItem("custom"));e&&s(e)}),[]),Object(n.useEffect)((function(){sessionStorage.setItem("custom",JSON.stringify(o))}),[o]),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",{className:"deleteFavoriteButtonDiv"},r.a.createElement(A,{addCustom:function(e){s([e].concat(Object(O.a)(o)))}})),r.a.createElement("br",null),r.a.createElement("p",{className:"headerFavorites"}," Favorites "),r.a.createElement("p",{className:"headersLine"}),r.a.createElement("span",null,a),r.a.createElement(I,{customMade:o,removeCustom:function(e){s(o.filter((function(t){return t.id!==e})))}}),r.a.createElement("br",null))},R=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={visible:!1},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state.visible?"Show All":"More options";return r.a.createElement("div",null,r.a.createElement("button",{className:"togglePeoplePlanetsButton",onClick:function(){e.setState({visible:!e.state.visible})}},t),this.state.visible?r.a.createElement(G,null):r.a.createElement(W,null))}}]),a}(n.Component),J=a(13);var U=function(){var e=Object(n.useState)(!0),t=Object(f.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(M,{show:a},r.a.createElement("div",{className:"startPageDiv"},r.a.createElement("div",{className:"startPageInnerDiv"},r.a.createElement("p",{className:"startPageheader"},"WELCOME STAR WARS FAN! "),r.a.createElement("button",{type:"button",className:"startPageButton",onClick:function(){return l((function(e){return!e}))}}," Thanks ")," ",r.a.createElement("br",null)))))};var H=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(U,null),r.a.createElement(m,null),r.a.createElement(J.c,null,r.a.createElement(J.a,{path:"/LabReactSwapi",exact:!0,component:L}),r.a.createElement(J.a,{path:"/home",component:L}),r.a.createElement(J.a,{path:"/favorites",component:R}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(6),X=a(155),Z=Object(z.c)({people:w,form:X.a}),$=Object(g.a)({reducer:Z});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y.a,{store:$},r.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,a){},63:function(e,t,a){e.exports=a.p+"static/media/yodacat.36486e5d.png"},66:function(e,t,a){e.exports=a(152)},71:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.cb75b3da.chunk.js.map