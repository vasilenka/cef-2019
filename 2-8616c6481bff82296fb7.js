(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{153:function(e,a,t){"use strict";t(33),t(255);var n,r=t(74),i=t.n(r),l=t(337),s=t.n(l),o=t(0),c=t.n(o),d=t(152),m=t.n(d),u=t(338),p=t.n(u),g=t(339),y=t.n(g),h=t(340),f=t.n(h),b=t(341),v=t.n(b),E=t(342),C=t.n(E),N=t(343),w=t.n(N),k=t(344),A=t.n(k),L=t(345),x=t.n(L),M=t(4),O=t.n(M),j=t(346),I=t.n(j),B=t(276),R=t.n(B),S=t(420),T=t.n(S),z=t(445),W=t.n(z),Z=t(288),D=t.n(Z),q=["display1","display2","display3","small","medium","large","message","labelSmall","labelMedium","caption","captionBold","heading1","heading2","heading3","heading4","heading4Alt","heading5","heading5Alt","heading6","heading6Alt"],F=Object.assign({size:function(e,a,t){return e.size&&!W()(q,e.size)?new Error("Invalid prop size='"+e.size+"' supplied to "+t):e.size&&T()(q,function(a){return R()(e,a)})?new Error("Seems that you've accidentially supplied boolean size along with size='"+e.size+"' to "+t+", please remove one of them. Otherwise boolean prop will overwrite the 'size' prop."):void 0}},(n={},D()(q,function(e){n[e]=O.a.bool}),n)),J=function(e){var a=function(a){var t=function(e){var a={};return D()(q,function(t){e[t]&&(a.size=t)}),a}(a),n=Object.assign({},I()(a,q),t);return c.a.createElement(e,n)};return a.propTypes=F,a.displayName=e.displayName,a},P=t(454),G=function(e){var a,t,n=e.left,r=e.right,l=e.center,o=e.component,d=e.bullet,u=e.children,g=e.className,h=e.size,b=e.raw,E=e.link,N=e.positive,k=e.critical,L=e.secondary,M=e.highlight,O=e.info,j=e.strong,I=e.regular,B=e.light,R=(e.dark,e.baseline),S=e.truncate,T=e.withChevron,z=e.breakWord,W=i()(e,["left","right","center","component","bullet","children","className","size","raw","link","positive","critical","secondary","highlight","info","strong","regular","light","dark","baseline","truncate","withChevron","breakWord"]),Z=o||(d?"li":"span");return c.a.createElement(Z,Object.assign({},W,{className:m()((a={},a[s.a.root]=!0,a[s.a[h]]=h,a[s.a.raw]=b,a[s.a.bullet]=d,a[s.a.baseline]=R,a[s.a.link]=E,a[s.a.left]=n,a[s.a.right]=r,a[s.a.center]=l,a[s.a.truncate]=S,a[s.a.breakWord]=z,a[g]=g,a))}),c.a.createElement("span",{className:m()((t={},t[p.a.root]=N,t[y.a.root]=k,t[f.a.root]=L,t[v.a.root]=M,t[C.a.root]=O,t[w.a.root]=j,t[A.a.root]=I,t[x.a.root]=B,t))},u),E&&T&&c.a.createElement(P.ReactComponent,{className:s.a.chevron}))};G.displayName="Text",G.defaultProps={baseline:!0,bullet:!1,size:"medium"};a.a=J(G)},159:function(e,a,t){"use strict";t.d(a,"b",function(){return d});var n=t(0),r=t.n(n),i=t(4),l=t.n(i),s=t(34),o=t.n(s);t.d(a,"a",function(){return o.a});t(254);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},167:function(e,a,t){"use strict";t(33);var n=t(74),r=t.n(n),i=t(456),l=t.n(i),s=t(0),o=t.n(s),c=t(152),d=t.n(c);a.a=function(e){var a,t=e.children,n=e.className,i=e.narrow,s=e.bleed,c=e.fixLeft,m=e.fixRight,u=r()(e,["children","className","narrow","bleed","fixLeft","fixRight"]),p=!(i||s||c||m);return o.a.createElement("div",Object.assign({},u,{className:d()((a={},a[l.a.root]=!0,a[l.a.normal]=p,a[l.a.narrow]=i,a[l.a.bleed]=s,a[l.a.fixLeft]=c,a[l.a.fixRight]=m,a[n]=n,a))}),t)}},170:function(e,a,t){"use strict";var n=t(459),r=t(0),i=t.n(r),l=t(4),s=t.n(l),o=t(460),c=t.n(o);function d(e){var a=e.description,t=e.lang,r=e.meta,l=e.keywords,s=e.title,o=n.data.site,d=a||o.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},a.a=d},175:function(e,a,t){"use strict";var n=t(324),r=(t(325),t(0)),i=t.n(r),l=t(4),s=t.n(l),o=t(159),c=(t(327),t(328),t(329),t(330),t(33),t(74)),d=t.n(c),m=t(331),u=t.n(m),p=t(152),g=t.n(p),y=t(332),h=t.n(y),f=t(333),b=t.n(f),v=function(e){var a,t=e.children,n=e.className,r=d()(e,["children","className"]);return i.a.createElement(o.a,Object.assign({to:"/",className:g()((a={},a[h.a.root]=!0,a[n]=n,a))},r),i.a.createElement("div",{className:h.a.brandContainer},t||i.a.createElement(b.a,{className:h.a.brand})))},E=t(334),C=t.n(E),N=function(e){var a,t=e.children,n=e.className,r=d()(e,["children","className"]);return i.a.createElement("div",Object.assign({className:g()((a={},a[C.a.root]=!0,a[n]=n,a))},r),t)},w=t(335),k=t.n(w),A=function(e){var a,t=e.children,n=e.className,r=d()(e,["children","className"]);return i.a.createElement("div",Object.assign({className:g()((a={},a[k.a.root]=!0,a[n]=n,a))},r),t)},L=t(336),x=t.n(L),M=t(153),O=function(e){var a,t,n,r=e.children,l=e.to,s=e.containerClassName,c=e.className,m=e.activeClassName,u=d()(e,["children","to","containerClassName","className","activeClassName"]);return i.a.createElement("div",{className:g()((a={},a[x.a.root]=!0,a[s]=s,a))},i.a.createElement(o.a,Object.assign({to:l,className:g()((t={},t[x.a.menu]=!0,t[c]=c,t)),activeClassName:g()((n={},n[x.a.active]=!0,n[m]=m,n))},u),i.a.createElement(M.a,{heading5Alt:!0,className:x.a.item,style:{fontWeight:"700"}},r)))},j=t(236),I=t(167),B=function(e){e.children;var a,t,n,r=e.narrow,l=e.bleed,s=e.className,o=d()(e,["children","narrow","bleed","className"]);return i.a.createElement("div",Object.assign({className:g()((a={},a[u.a.root]=!0,a))},o),i.a.createElement(I.a,{narrow:r,bleed:l,className:g()((t={},t[u.a.container]=!0,t[s]=s,t))},i.a.createElement(A,null,i.a.createElement(v,null,i.a.createElement(M.a,{heading3:!0},"CEF 4.0")),i.a.createElement(O,{containerClassName:u.a.primaryMenu,to:"/"},"Home"),i.a.createElement(O,{containerClassName:u.a.primaryMenu,to:"/about"},"About"),i.a.createElement(O,{containerClassName:u.a.primaryMenu,to:"/schedule"},"Schedule"),i.a.createElement(O,{containerClassName:u.a.primaryMenu,to:"/speakers"},"Speakers"),i.a.createElement(O,{containerClassName:u.a.primaryMenu,to:"/venue"},"Venue & F.A.Q.")),i.a.createElement(N,{className:g()((n={},n[u.a.secondaryMenu]=!0,n)),style:{paddingRight:"24px"}},i.a.createElement(j.a,{secondaryAlt:!0,style:{marginRight:"12px"}},"Join as Volunteer"),i.a.createElement(j.a,{primary:!0,onClick:function(){return console.log("clicked")}},"Join as Participant"))))},R=t(457),S=t.n(R),T=function(e){var a,t,n=e.children,r=e.vertical,l=e.className,s=d()(e,["children","vertical","className"]),o=0,c=i.a.useState(!1),m=c[0],u=c[1],p=function(){var e=window.pageYOffset||document.documentElement.scrollTop;u(e>o),o=e<=0?0:e};return i.a.useEffect(function(){return"undefined"!=typeof window&&window.addEventListener("scroll",p,!1),function(){"undefined"!=typeof window&&window.removeEventListener("scroll",p,!1)}},[]),i.a.createElement("div",Object.assign({className:g()((a={},a[S.a.root]=!0,a[S.a.scrolling]=m,a[l]=l,a))},s),i.a.createElement("div",{className:g()((t={},t[S.a.container]=!0,t[S.a.horizontal]=!r,t[S.a.vertical]=r,t))},n))},z=t(458),W=t.n(z),Z=function(e){var a,t=e.icon,n=e.to,r=e.children,l=e.className,s=e.active,c=d()(e,["icon","to","children","className","active"]);return i.a.createElement(o.a,Object.assign({to:n,className:g()((a={},a[W.a.root]=!0,a[W.a.active]=s,a[l]=l,a))},c),t&&i.a.createElement("div",{style:{marginBottom:"4px"}},t),r&&i.a.createElement(M.a,{small:!0},r))},D=function(e){var a=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(B,{bleed:!0}),a,i.a.createElement(T,null,i.a.createElement(Z,{to:"/"},"Home"),i.a.createElement(Z,{to:"/about/"},"About"),i.a.createElement(Z,{to:"/venue/"},"Schedules"),i.a.createElement(Z,{to:"/speakers/"},"Speakers"),i.a.createElement(Z,{to:"/venue/"},"Venue")))},data:n})};D.propTypes={children:s.a.node.isRequired};a.a=D},236:function(e,a,t){"use strict";t(33),t(255),t(289);var n=t(74),r=t.n(n),i=t(455),l=t.n(i),s=t(0),o=t.n(s),c=t(152),d=t.n(c),m=t(4),u=function(e){var a,t,n=e.type,i=e.href,s=e.component,c=e.children,m=e.icon,u=e.stretch,p=e.primary,g=e.onClick,y=e.secondary,h=e.light,f=e.secondaryAlt,b=e.primaryBold,v=e.primaryAlt,E=e.primaryAltBold,C=e.className,N=e.small,w=(e.large,e.disabled),k=r()(e,["type","href","component","children","icon","stretch","primary","onClick","secondary","light","secondaryAlt","primaryBold","primaryAlt","primaryAltBold","className","small","large","disabled"]);return"a"===s?o.a.createElement("a",Object.assign({href:i,onClick:function(e){e.preventDefault(),g&&g(e)},className:d()((a={},a[l.a.link]=!0,a[l.a.secondary]=y&&!h,a[l.a.secondaryLight]=y&&h,a[l.a.secondaryAlt]=f&&!h,a[l.a.secondaryAltLight]=f&&h,a[l.a.primaryMedium]=p&&!h,a[l.a.primaryMediumLight]=p&&h,a[l.a.primaryBold]=b&&!h,a[l.a.primaryBoldLight]=b&&h,a[l.a.primaryAltMedium]=v,a[l.a.primaryAltBold]=E,a[l.a.small]=!f&&N,a[l.a.smallAlt]=f&&N,a[l.a.large]=!N&&!f,a[l.a.largeAlt]=f&&!N,a[l.a.disabled]=w,a[l.a.stretch]=u,a[C]=C,a)),disabled:w},k),o.a.createElement("span",{className:l.a.childrenLink},m&&o.a.createElement("span",{className:l.a.icon},m),c)):o.a.createElement("button",Object.assign({type:n||"button",onClick:g,className:d()((t={},t[l.a.secondary]=y&&!h,t[l.a.secondaryLight]=y&&h,t[l.a.secondaryAlt]=f&&!h,t[l.a.secondaryAltLight]=f&&h,t[l.a.primaryMedium]=p&&!h,t[l.a.primaryMediumLight]=p&&h,t[l.a.primaryBold]=b&&!h,t[l.a.primaryBoldLight]=b&&h,t[l.a.primaryAltMedium]=v,t[l.a.primaryAltBold]=E,t[l.a.small]=!f&&N,t[l.a.smallAlt]=f&&N,t[l.a.large]=!N&&!f,t[l.a.largeAlt]=f&&!N,t[l.a.disabled]=w,t[l.a.stretch]=u,t[C]=C,t)),disabled:w},k),o.a.createElement("span",{className:l.a.children},m&&o.a.createElement("span",{className:l.a.icon},m),c))};u.displayName="Button",u.defaultProps={large:!0,disabled:!1,type:"button"},u.propTypes={className:Object(m.oneOfType)([m.string,m.object]),type:Object(m.oneOf)(["button","submit"]),disabled:m.bool,small:m.bool,large:m.bool,children:m.node.isRequired},a.a=u},254:function(e,a,t){var n;e.exports=(n=t(326))&&n.default||n},324:function(e){e.exports={data:{site:{siteMetadata:{title:"Civic Engagement Forum 4.0 2019"}}}}},326:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),r=t.n(n),i=t(4),l=t.n(i),s=t(70),o=t(2),c=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=c},333:function(e,a,t){var n=t(0);function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"Meridian.id"),n.createElement("desc",{key:1},"Live your life, do what you are really passionate about. #dowhatyoulive"),n.createElement("defs",{key:2}),n.createElement("g",{id:"logo/filled",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",key:3},n.createElement("g",{id:"filled",fill:"currentColor",fillRule:"nonzero"},[n.createElement("ellipse",{id:"Oval",cx:"12.7074564",cy:"83.2691289",rx:"12.7074564",ry:"12.6974216",key:0}),n.createElement("ellipse",{id:"Oval",cx:"31.7669686",cy:"50.2511498",rx:"15.2496167",ry:"15.2395819",key:1}),n.createElement("path",{d:"M188.347317,50.6391638 C188.347317,50.6391638 184.470523,47.0701045 177.807387,45.7087108 L177.683624,45.6819512 C177.349129,45.6117073 176.97784,45.5481533 176.61324,45.4912892 C176.395819,45.4578397 176.175052,45.4310801 175.944251,45.4009756 L175.609756,45.3574913 C173.218218,45.0666907 170.797262,45.1218917 168.421463,45.5213937 L168.30439,45.5213937 C163.567944,46.2840418 155.259094,43.0829268 149.201394,38.4970035 C145.247666,35.4865505 139.705087,28.0908711 139.166551,22.8961672 C139.023808,21.5416487 138.77893,20.1998507 138.434007,18.88223 C138.357073,18.5811847 138.273449,18.2801394 138.189826,17.982439 C138.159721,17.8854355 138.136307,17.7817422 138.106202,17.6847387 C137.820501,16.7496052 137.478697,15.8325418 137.082648,14.9385366 L136.985645,14.7244599 C136.858537,14.4434843 136.724739,14.1625087 136.587596,13.884878 C136.477213,13.6641115 136.366829,13.4500348 136.253101,13.2393031 L136.149408,13.0486411 C134.195958,9.43275261 132.058537,7.56961672 132.058537,7.56961672 C127.435883,2.89871752 121.134651,0.27443159 114.563034,0.28323146 C107.991417,0.29203133 101.697236,2.93318342 97.087108,7.61644599 C96.0930351,8.57310935 95.2089462,9.63783063 94.4512892,10.7908014 C91.5664513,14.9069748 90.0221776,19.8131395 90.0292683,24.8395819 C90.0292683,24.9967944 90.0292683,25.154007 90.0292683,25.3112195 C90.0292683,25.4684321 90.0292683,25.5219512 90.0292683,25.6457143 C90.0292683,34.1652962 88.5206969,41.9958188 85.1322648,46.334216 C82.5332404,49.6791638 77.696446,51.324878 72.0334495,52.6294077 L72.0167247,52.6294077 L71.9799303,52.6294077 C70.6271676,52.9546034 69.3154453,53.4314913 68.0696864,54.0510105 C66.0285363,55.0301283 64.1501289,56.3173732 62.5003484,57.8675958 C62.3163763,58.0348432 62.2126829,58.1385366 62.2126829,58.1385366 C56.4533126,63.7111017 54.1773992,71.9733518 56.2708827,79.7090583 C58.3643663,87.4447648 64.4964508,93.4315918 72.2801128,95.3390598 C80.0637749,97.2465278 88.2691008,94.7732336 93.7020209,88.8819512 C94.6966397,87.8643313 95.5596833,86.7259678 96.2709408,85.4935192 C98.4103144,82.0285961 99.5408944,78.0356562 99.5356098,73.9634843 C99.5349658,72.7690082 99.4376446,71.5765436 99.2445993,70.39777 C99.2445993,70.3777003 99.2445993,70.3576307 99.2445993,70.337561 C98.4886411,64.6177003 99.6393031,60.6372125 101.555958,57.8776307 C104.141603,54.1379791 109.356376,49.6925436 116.303833,49.7092683 C122.134077,49.729338 127.857282,52.4052962 132.653937,56.1850871 C141.601672,63.2362369 145.424948,70.6051568 148.846829,79.5997213 C148.890314,79.7134495 148.937143,79.8204878 148.980627,79.934216 C149.070941,80.1616725 149.161254,80.3891289 149.258258,80.6032056 L149.285017,80.6600697 C150.032056,82.3805493 150.967675,84.0128343 152.074704,85.5269686 L152.074704,85.5470383 L152.385784,85.9618118 C153.054069,86.8624919 153.792239,87.7091504 154.593449,88.4939373 C161.254219,95.1640205 171.060916,97.5971341 180.067067,94.8141288 C189.073217,92.0311234 195.797664,84.4896935 197.534312,75.2247104 C199.270961,65.9597273 195.7342,56.4949146 188.347317,50.6391638 Z",id:"Shape",key:2})]))])}r.defaultProps={viewBox:"0 0 198 96",version:"1.1"},e.exports=r,r.default=r},454:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHJvbGU9InByZXNlbnRhdGlvbiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIHN0eWxlPSJoZWlnaHQ6IDEwcHg7IHdpZHRoOiAxMHB4OyBmaWxsOiBjdXJyZW50Y29sb3I7Ij48cGF0aCBkPSJtNC4yOSAxLjcxYTEgMSAwIDEgMSAxLjQyLTEuNDFsOCA4YTEgMSAwIDAgMSAwIDEuNDFsLTggOGExIDEgMCAxIDEgLTEuNDItMS40MWw3LjI5LTcuMjl6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48L3N2Zz4="},459:function(e){e.exports={data:{site:{siteMetadata:{title:"Civic Engagement Forum 4.0 2019",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"kotakita.org - meridian.id - ongki 'vasilenka' herlambang"}}}}}}]);
//# sourceMappingURL=2-8616c6481bff82296fb7.js.map