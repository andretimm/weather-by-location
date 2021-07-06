(this["webpackJsonpweather-by-location"]=this["webpackJsonpweather-by-location"]||[]).push([[0],{75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(25),c=n.n(o),i=n(3),s=n.n(i),l=n(5),u=n(8),p=n(13),d=n(26),h=n.n(d),f=(n(55),n(14)),m=n(9),j=n.n(m),b="https://api.mapbox.com/geocoding/v5/mapbox.places/",x="https://api.openweathermap.org/data/2.5/onecall";function g(){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return t=e.sent,e.next=5,C(t);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){navigator.permissions.query({name:"geolocation"}).then((function(t){e("granted"===t.state)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return k.apply(this,arguments)}function k(){return(k=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return navigator.geolocation.getCurrentPosition((function(t){var n={coords:{latitude:t.coords.latitude,longitude:t.coords.longitude},place:{country:"",name:"",state:""}};e(n)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return z.apply(this,arguments)}function z(){return(z=Object(l.a)(s.a.mark((function e(t){var n,a,r,o,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.coords,a=n.latitude,r=n.longitude,o="".concat(b).concat(r,"%2C").concat(a,".json?access_token=").concat("pk.eyJ1IjoiYW5kcmV0aW1tIiwiYSI6ImNrcW9lNGN0ajI1NnMyd21scmgweGF1MDIifQ.rSkvhDZRhOSe8211sYQyqQ","&autocomplete=false&types=place"),e.next=4,j.a.get(o).then();case 4:return c=e.sent,i=Object(f.a)(Object(f.a)({},t),{},{place:{country:c.data.features[0].context[1].text,name:c.data.features[0].text,state:c.data.features[0].context[0].text}}),e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t){return N.apply(this,arguments)}function N(){return(N=Object(l.a)(s.a.mark((function e(t,n){var a,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(x,"?lat=").concat(t,"&lon=").concat(n,"&exclude=minutely,hourly,alerts&units=metric&appid=").concat("4962870e7b2a5b85e42a853af12b4233","&lang=pt_br"),e.next=3,j()(a);case 3:return r=e.sent,o={temp:Math.round(r.data.current.temp),tempMax:Math.round(r.data.daily[0].temp.max),tempMin:Math.round(r.data.daily[0].temp.min),weatherMain:r.data.daily[0].weather[0].description,weatherBg:r.data.daily[0].weather[0].main,icon:"http://openweathermap.org/img/wn/".concat(r.data.daily[0].weather[0].icon,"@2x.png")},e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B,S,I=n(6),W=n(7),P=n.p+"static/media/Clear.898bb5df.jpg",D=n.p+"static/media/Clouds.e28126ce.jpg",A=n.p+"static/media/Drizzle.6113b958.jpg",F=n.p+"static/media/Mist.b4f03a3a.jpg",E=n.p+"static/media/Rain.2029726e.jpg",R=n.p+"static/media/Snow.f8ab77aa.jpg",_=n.p+"static/media/Thunderstorm.1d8386cb.jpg",q=W.a.div(B||(B=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  min-height: 100vh;\n  background-image: url(",");\n  background-size: cover;\n  background-position: top center;\n  .wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-self: center;\n    text-align: center;\n    min-height: 70vh;\n  }\n  button {\n    color: #fff;\n    margin: 15px 15px 0 auto;\n    background: none;\n    border: none;\n    padding: 0;\n    font-size: 2.5rem;\n    cursor: pointer;\n  }\n  .noPermission {\n    color: #fff;\n    font-size: 1.5rem;\n  }\n  .link {\n    color: #fff;\n    text-decoration: inherit;\n    font-size: 1.2rem;\n  }\n"])),(function(e){return function(e){switch(e){case"Thunderstorm":return _;case"Clear":return P;case"Clouds":return D;case"Drizzle":return A;case"Mist":case"Fog":return F;case"Rain":return E;case"Snow":return R;default:return P}}(null===e||void 0===e?void 0:e.weatherBg)}));var T,G=W.a.div(S||(S=Object(I.a)(["\n  color: #fff;\n  img {\n    width: 7rem;\n    margin-top: 15px;\n  }\n  h1 {\n    font-size: 6rem;\n    margin-bottom: 30px;\n    & span {\n      font-size: 4.5rem;\n      font-weight: 500;\n    }\n  }\n  h2 {\n    font-size: 2rem;\n    font-weight: 700;\n    font-style: italic;\n    margin-bottom: 15px;\n  }\n  h3 {\n    font-size: 1.5rem;\n    font-weight: 500;\n    & span {\n      font-size: 1rem;\n      font-weight: 200;\n    }\n  }\n"]))),J=n(1);function Q(e){var t,n,a,r,o;return Object(J.jsxs)(G,{children:[Object(J.jsx)("img",{src:null===e||void 0===e||null===(t=e.locationWeather)||void 0===t?void 0:t.icon,alt:""}),Object(J.jsxs)("h1",{children:[null===e||void 0===e||null===(n=e.locationWeather)||void 0===n?void 0:n.temp,Object(J.jsx)("span",{children:"\xbaC"})]}),Object(J.jsx)("h2",{style:{textTransform:"capitalize"},children:null===e||void 0===e||null===(a=e.locationWeather)||void 0===a?void 0:a.weatherMain}),Object(J.jsxs)("h3",{children:[null===e||void 0===e||null===(r=e.locationWeather)||void 0===r?void 0:r.tempMin,Object(J.jsx)("span",{children:"\xbaC"})," / ",null===e||void 0===e||null===(o=e.locationWeather)||void 0===o?void 0:o.tempMax,Object(J.jsx)("span",{children:"\xbaC"})]})]})}var Y=W.a.div(T||(T=Object(I.a)(["\n  color: #fff;\n  h1 {\n    color: #fff;\n    font-size: 3.2rem;\n    font-weight: 500;\n    margin-bottom: 5px;\n  },\n  h2 {\n    color: #fff;\n    font-size: 2rem;\n    font-weight: 500;\n    margin-bottom: 5px;\n  }\n"])));function V(e){var t,n,a;return Object(J.jsxs)(Y,{children:[Object(J.jsxs)("h1",{children:[null===e||void 0===e||null===(t=e.place)||void 0===t?void 0:t.name," "]}),Object(J.jsxs)("h2",{children:[null===e||void 0===e||null===(n=e.place)||void 0===n?void 0:n.state,", ",null===e||void 0===e||null===(a=e.place)||void 0===a?void 0:a.country]})]})}function Z(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(),c=Object(u.a)(o,2),i=c[0],d=c[1],f=Object(a.useState)(!1),m=Object(u.a)(f,2),j=m[0],b=m[1],x=Object(a.useState)(!1),v=Object(u.a)(x,2),w=v[0],y=v[1];function k(){return C.apply(this,arguments)}function C(){return(C=Object(l.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:if(t=e.sent,y(t),!t){e.next=13;break}return e.next=7,g();case 7:return n=e.sent,r(n),e.next=11,M(n.coords.latitude,n.coords.longitude);case 11:a=e.sent,d(a);case 13:b(!0);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){b(!1),k()}return Object(a.useEffect)((function(){k()}),[]),j?w?Object(J.jsxs)(q,{weatherBg:null===i||void 0===i?void 0:i.weatherBg,children:[Object(J.jsx)("div",{className:"bgImage"}),Object(J.jsx)("button",{onClick:z,children:Object(J.jsx)(p.a,{})}),Object(J.jsxs)("div",{className:"wrapper",children:[Object(J.jsx)(V,{place:null===n||void 0===n?void 0:n.place}),Object(J.jsx)(Q,{locationWeather:i})]})]}):Object(J.jsxs)(q,{weatherBg:"",children:[Object(J.jsx)("button",{onClick:z,children:Object(J.jsx)(p.a,{})}),Object(J.jsxs)("div",{className:"wrapper",children:[Object(J.jsx)("h1",{className:"noPermission",children:"Para correto funcionamento, precisamos ter acesso a sua localiza\xe7\xe3o atual. Caso tenha duvida de como fazer segue link para os principais navegadores."}),Object(J.jsx)("br",{}),Object(J.jsx)("a",{className:"link",rel:"noreferrer",href:"https://support.google.com/chrome/answer/114662?co=GENIE.Platform%3DDesktop&hl=pt-BR#zippy=",target:"_blank",children:"Chrome"}),Object(J.jsx)("a",{className:"link",rel:"noreferrer",href:"https://support.mozilla.org/pt-BR/kb/o-firefox-compartilha-minha-localizacao-com-sites#:~:text=Na%20se%C3%A7%C3%A3o%20Permiss%C3%B5es%2C%20clique%20no%20bot%C3%A3o%20Configura%C3%A7%C3%B5es%E2%80%A6,Clique%20em%20Salvar%20altera%C3%A7%C3%B5es.",target:"_blank",children:"Firefox"}),Object(J.jsx)("a",{className:"link",rel:"noreferrer",href:"https://support.apple.com/pt-br/guide/safari/ibrw7f78f7fe/mac",target:"_blank",children:"Safari"})]})]}):Object(J.jsx)(q,{weatherBg:"",children:Object(J.jsx)("div",{className:"wrapper",children:Object(J.jsx)(h.a,{type:"ThreeDots",color:"#FFF",height:100,width:100})})})}var H=function(){return Object(J.jsx)("div",{children:Object(J.jsx)(Z,{})})};n(75);c.a.render(Object(J.jsx)(r.a.StrictMode,{children:Object(J.jsx)(H,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.b1e08c6e.chunk.js.map