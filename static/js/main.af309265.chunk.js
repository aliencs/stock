(this.webpackJsonpstock=this.webpackJsonpstock||[]).push([[0],{391:function(e,t,n){e.exports=n(952)},396:function(e,t,n){},403:function(e,t){},405:function(e,t){},462:function(e,t){},463:function(e,t){},528:function(e,t){},951:function(e,t,n){},952:function(e,t,n){"use strict";n.r(t);var a=n(28),r=n.n(a),c=n(385),o=n.n(c),i=(n(396),n(118)),s=n.n(i),u=n(390),l=n(386),p=n(149),d=(n(398),n(387)),f=n.n(d),m=n(388),h=n.n(m),y=n(389),b=n.n(y);n(951);var g=function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),i=Object(p.a)(o,2),d=i[0],m=i[1],y=Object(a.useState)({xAxis:{type:"category",data:[]},yAxis:{type:"value"},series:[{data:[],type:"line"}]}),g=Object(p.a)(y,2),v=g[0],E=g[1],k=new h.a;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://cors-anywhere.herokuapp.com/http://asp1.krx.co.kr/servlet/krx.asp.XMLSiseEng?code=005930",{"Content-Type":"application/xml; charset=utf-8"}).then((function(e){var t=k.parseFromString(e.data).children;console.log(t),console.log(t[0]),console.log(t[0].children),c(t[2].attributes),m(t[0].children),E(Object(u.a)({},v,{xAxis:{type:"category",data:[t[0].children.map((function(e){return e.attributes.day_Date}))]},series:{type:"line",data:[t[0].children.map((function(e){return parseInt(e.attributes.day_EndPrice.replace(",",""),10)}))]}}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"App"},n&&r.a.createElement("div",null,n.JongName),d&&d.map((function(e){return r.a.createElement("div",{key:e.attributes.day_Volume},r.a.createElement("span",null," ",e.attributes.day_Date),r.a.createElement("span",null," ",e.attributes.day_EndPrice))})),d&&r.a.createElement(b.a,{option:v}),v&&JSON.stringify(v))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[391,1,2]]]);
//# sourceMappingURL=main.af309265.chunk.js.map