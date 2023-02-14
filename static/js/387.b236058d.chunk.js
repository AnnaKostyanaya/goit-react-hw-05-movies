"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{3387:function(n,t,r){r.r(t),r.d(t,{default:function(){return N}});var e,a,i,o,c,u,s,p=r(3433),f=r(9439),l=r(2791),d=r(7689),h=r(854),m=r(7274),x=r(168),v=r(6444),Z=v.ZP.ul(e||(e=(0,x.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    margin: 10px;\n    padding: 0;\n    list-style: none;\n"]))),g=v.ZP.img(a||(a=(0,x.Z)(["\nwidth: 200px;\nheigth: 255px;\n"]))),w=v.ZP.li(i||(i=(0,x.Z)(["\nmax-width: 200px;\nmargin: 10px;\n"]))),y=v.ZP.p(o||(o=(0,x.Z)(["\nmax-width: 200px;\nfont-size: 14px;\ntext-decoration: none;\ncolor: black;\nmargin-bottom: 5px;\n"]))),b=v.ZP.p(c||(c=(0,x.Z)(["\nmax-width: 200px;\nfont-size: 14px;\ntext-decoration: none;\ncolor: black;\nmargin-bottom: 5px;\n"]))),k=v.ZP.p(u||(u=(0,x.Z)(["\nmax-width: 200px;\nfont-size: 14px;\ntext-decoration: none;\ncolor: black;\nmargin-bottom: 5px;\n"]))),j=v.ZP.span(s||(s=(0,x.Z)(["\ndisplay: block;\nfont-size: 16px;\ntext-decoration: none;\ncolor: black;\n"]))),_=r(5984),P=r(184),N=function(n){n.state;var t=(0,d.UO)().movieId,r=(0,l.useState)([]),e=(0,f.Z)(r,2),a=e[0],i=e[1],o=(0,l.useState)(""),c=(0,f.Z)(o,2),u=c[0],s=c[1];return(0,l.useEffect)((function(){s("LOADING");try{(0,m.Yc)(t).then((function(n){var t=n.map((function(n){var t=n.character,r=n.name,e=n.popularity,a=n.profile_path;n.state;return{realId:(0,_.x0)(),character:""===t?"No information":t,name:""===r?"No information":r,popularity:""===e?"No information":e,profile_path:null===a||""===a?"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg":"https://image.tmdb.org/t/p/original/".concat(a)}}));i((0,p.Z)(t)),s("OK")}))}catch(n){s("ERROR")}}),[t]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("h2",{children:"Cast"}),(0,P.jsx)(Z,{children:a.map((function(n){return(0,P.jsxs)(w,{children:[(0,P.jsxs)(b,{children:[(0,P.jsx)(j,{children:"Character:"}),n.character]}),(0,P.jsxs)(y,{children:[(0,P.jsx)(j,{children:"Name:"}),n.name]}),(0,P.jsxs)(k,{children:[(0,P.jsx)(j,{children:"Popularity:"}),n.popularity]}),(0,P.jsx)(g,{src:n.profile_path,alt:"actor"})]},n.realId)}))}),0===a.length&&(0,P.jsx)("p",{children:"No information about the cast."}),"LOADING"===u&&(0,P.jsx)(h.Z,{})]})}},854:function(n,t,r){var e=r(5243),a=r(184);t.Z=function(){return(0,a.jsx)(e.rj,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{display:"flex",justifyContent:"center",alignItems:"center"},wrapperClass:"",visible:!0})}},7274:function(n,t,r){r.d(t,{Aj:function(){return u},Pg:function(){return s},WG:function(){return p},W_:function(){return l},Yc:function(){return f}});var e=r(5861),a=r(7757),i=r.n(a),o=r(1912),c="48201fa6f91a1e64f8af04954a183bb3";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("trending/movie/day",{params:{page:t,api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("movie/".concat(t),{params:{query:t,api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(t,r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("search/movie",{params:{query:t,page:r,api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("movie/".concat(t,"/credits"),{params:{query:t,api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(t,"/reviews"),{params:{query:t,api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},5984:function(n,t,r){r.d(t,{x0:function(){return e}});var e=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=387.b236058d.chunk.js.map