(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"00b4":function(t,e,r){"use strict";r("ac1f");var n=r("23e7"),o=r("da84"),a=r("c65b"),c=r("e330"),i=r("1626"),s=r("861d"),u=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),l=o.Error,d=c(/./.test);n({target:"RegExp",proto:!0,forced:!u},{test:function(t){var e=this.exec;if(!i(e))return d(this,t);var r=a(e,this,t);if(null!==r&&!s(r))throw new l("RegExp exec method returned something other than an Object or null");return!!r}})},"057f":function(t,e,r){var n=r("c6b6"),o=r("fc6a"),a=r("241c").f,c=r("4dae"),i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return a(t)}catch(e){return c(i)}};t.exports.f=function(t){return i&&"Window"==n(t)?s(t):a(o(t))}},"0b42":function(t,e,r){var n=r("da84"),o=r("e8b5"),a=r("68ee"),c=r("861d"),i=r("b622"),s=i("species"),u=n.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,a(e)&&(e===u||o(e.prototype))?e=void 0:c(e)&&(e=e[s],null===e&&(e=void 0))),void 0===e?u:e}},"0fa5":function(t,e,r){"use strict";r.r(e);var n=r("7a23"),o={class:"shop"};function a(t,e,r,a,c,i){var s=Object(n["v"])("ShopData");return Object(n["q"])(),Object(n["d"])("div",o,[Object(n["h"])(s)])}var c=r("e237"),i=r.n(c),s=r("1128"),u=r.n(s),l=r("f4a8"),d=r.n(l),f={class:"shop"},b={class:"container"},p=Object(n["f"])('<h2>Nuestros proveedores</h2><div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"><div class="carousel-indicators"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button></div><div class="carousel-inner"><div class="carousel-item active"><img src="'+i.a+'" class="d-block w-100" alt="Provider 1"></div><div class="carousel-item"><img src="'+u.a+'" class="d-block w-100" alt="Provider 2"></div><div class="carousel-item"><img src="'+d.a+'" class="d-block w-100" alt="Provider 3"></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div>',2),h={class:"row"},v={class:"col col-sm-12 col-md-8"},m=Object(n["e"])("h2",null,"Lista de productos",-1),g={class:"row justify-content-center"},y={class:"text-start"},O={class:"text-start"},j=Object(n["e"])("b",null,"Descripción:",-1),x=Object(n["g"])(),w={class:"text-start"},E=Object(n["e"])("b",null,"Precio:",-1),k=Object(n["g"])(),S=["onClick"],T={class:"col col-sm-12 col-md-4"},I=Object(n["e"])("h4",null,"Carrito",-1),P={class:"carrito"},A={key:0},R=Object(n["e"])("thead",null,[Object(n["e"])("tr",null,[Object(n["e"])("th",null,"Cantidad"),Object(n["e"])("th",null,"Producto"),Object(n["e"])("th",null,"Precio"),Object(n["e"])("th",null,"Descripción")])],-1),C=["onClick"],N={key:1},D=Object(n["e"])("p",null,"El carrito está vacío",-1),F=[D];function q(t,e,r,o,a,c){var i=Object(n["v"])("Footer");return Object(n["q"])(),Object(n["d"])("div",f,[Object(n["e"])("div",b,[p,Object(n["e"])("div",h,[Object(n["e"])("div",v,[m,Object(n["e"])("div",g,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(a.productos,(function(t){return Object(n["q"])(),Object(n["d"])("div",{class:"producto col-sm-3 m-2",key:t},[Object(n["e"])("h4",y,Object(n["x"])(t.nombre),1),Object(n["e"])("p",O,[j,x,Object(n["e"])("span",null,Object(n["x"])(t.descripcion),1)]),Object(n["e"])("p",w,[E,k,Object(n["e"])("span",null,Object(n["x"])(t.precio)+" $",1)]),Object(n["e"])("button",{class:"btn btn-primary",onClick:function(e){return c.productoInsercion(t)}},"Comprar",8,S)])})),128))])]),Object(n["e"])("div",T,[I,Object(n["e"])("div",P,[a.carrito.length?(Object(n["q"])(),Object(n["d"])("div",A,[Object(n["e"])("table",null,[R,Object(n["e"])("tbody",null,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(a.carrito,(function(t){return Object(n["q"])(),Object(n["d"])("tr",null,[Object(n["e"])("td",null,Object(n["x"])(t.cantidad),1),Object(n["e"])("td",null,Object(n["x"])(t.nombre),1),Object(n["e"])("td",null,Object(n["x"])(t.precio)+" $",1),Object(n["e"])("td",null,Object(n["x"])(t.descripcion),1),Object(n["e"])("td",null,[Object(n["e"])("button",{class:"btn btn-danger",onClick:function(e){return c.eliminarProducto(t)}}," X ",8,C)])])})),256))])]),Object(n["e"])("div",null,[Object(n["e"])("p",null,"Suma Total: "+Object(n["x"])(a.suma.precioTotal)+" $",1)])])):(Object(n["q"])(),Object(n["d"])("div",N,F))])])])]),Object(n["h"])(i)])}function B(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function W(t){if(Array.isArray(t))return B(t)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function L(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0"),r("ac1f"),r("00b4");function $(t,e){if(t){if("string"===typeof t)return B(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(t,e):void 0}}r("d9e2");function J(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function M(t){return W(t)||L(t)||$(t)||J()}r("d81d"),r("99af"),r("159b"),r("4de4");var U=r("fd2d"),Y={name:"ShopData",data:function(){return{productos:[{nombre:"Prodcuto1",precio:12,precioTotal:0,descripcion:"Lorem Ipsum dolor setum",cantidad:1,id:1},{nombre:"Prodcuto2",precio:20,precioTotal:0,descripcion:"Lorem Ipsum dolor setum",cantidad:1,id:2},{nombre:"Prodcuto3",precio:23,precioTotal:0,descripcion:"Lorem Ipsum dolor setum",cantidad:1,id:3},{nombre:"Prodcuto4",precio:15,precioTotal:0,descripcion:"Lorem Ipsum dolor setum",cantidad:1,id:4},{nombre:"Prodcuto5",precio:45,precioTotal:0,descripcion:"Lorem Ipsum dolor setum",cantidad:1,id:5},{nombre:"Prodcuto6",precio:60,precioTotal:0,descripcion:"Lorem Ipsum dolor setum",cantidad:1,id:6}],carrito:[],sumaTotal:[],suma:0}},methods:{productoInsercion:function(t){var e=this.carrito.some((function(e){return t.id===e.id}));if(e){var r=this.carrito.map((function(e){return t.id===e.id?(t.cantidad++,t):e}));this.carrito=M(r)}else this.carrito=[].concat(M(this.carrito),[t]);this.sumarTotal()},sumarTotal:function(){var t=this;this.carrito.forEach((function(t){t.precioTotal=t.precio*t.cantidad})),this.productos.forEach((function(e){t.suma=t.productos.reduce((function(t,e){return{precioTotal:t.precioTotal+e.precioTotal}}))}))},eliminarProducto:function(t){t.cantidad>1?(t.cantidad-=1,t.precioTotal-=t.precio,this.sumarTotal()):(0!==t.precioTotal&&(t.precioTotal=0),this.carrito=this.carrito.filter((function(e){return t.id!==e.id})),this.sumarTotal())}},components:{Footer:U["a"]}},_=r("d959"),z=r.n(_);const K=z()(Y,[["render",q]]);var X=K,H={name:"Shop",components:{ShopData:X}};const Q=z()(H,[["render",a]]);e["default"]=Q},"107c":function(t,e,r){var n=r("d039"),o=r("da84"),a=o.RegExp;t.exports=n((function(){var t=a("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1128:function(t,e,r){t.exports=r.p+"img/Proveedor2.878ef8cb.webp"},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),a=r("785a"),c=r("17c2"),i=r("9112"),s=function(t){if(t&&t.forEach!==c)try{i(t,"forEach",c)}catch(e){t.forEach=c}};for(var u in o)o[u]&&s(n[u]&&n[u].prototype);s(a)},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),a=o("forEach");t.exports=a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),a=r("2d00"),c=o("species");t.exports=function(t){return a>=51||!n((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"428f":function(t,e,r){var n=r("da84");t.exports=n},"4dae":function(t,e,r){var n=r("da84"),o=r("23cb"),a=r("07fa"),c=r("8418"),i=n.Array,s=Math.max;t.exports=function(t,e,r){for(var n=a(t),u=o(e,n),l=o(void 0===r?n:r,n),d=i(s(l-u,0)),f=0;u<l;u++,f++)c(d,f,t[u]);return d.length=f,d}},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,a=r("1dde"),c=a("filter");n({target:"Array",proto:!0,forced:!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,r){"use strict";var n=r("da84"),o=r("0366"),a=r("c65b"),c=r("7b0b"),i=r("9bdd"),s=r("e95a"),u=r("68ee"),l=r("07fa"),d=r("8418"),f=r("9a1f"),b=r("35a1"),p=n.Array;t.exports=function(t){var e=c(t),r=u(this),n=arguments.length,h=n>1?arguments[1]:void 0,v=void 0!==h;v&&(h=o(h,n>2?arguments[2]:void 0));var m,g,y,O,j,x,w=b(e),E=0;if(!w||this==p&&s(w))for(m=l(e),g=r?new this(m):p(m);m>E;E++)x=v?h(e[E],E):e[E],d(g,E,x);else for(O=f(e,w),j=O.next,g=r?new this:[];!(y=a(j,O)).done;E++)x=v?i(O,h,[y.value,E],!0):y.value,d(g,E,x);return g.length=E,g}},"65f0":function(t,e,r){var n=r("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},7156:function(t,e,r){var n=r("1626"),o=r("861d"),a=r("d2bb");t.exports=function(t,e,r){var c,i;return a&&n(c=e.constructor)&&c!==r&&o(i=c.prototype)&&i!==r.prototype&&a(t,i),t}},"746f":function(t,e,r){var n=r("428f"),o=r("1a2d"),a=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:a.f(t)})}},8418:function(t,e,r){"use strict";var n=r("a04b"),o=r("9bf2"),a=r("5c6c");t.exports=function(t,e,r){var c=n(e);c in t?o.f(t,c,a(0,r)):t[c]=r}},9263:function(t,e,r){"use strict";var n=r("c65b"),o=r("e330"),a=r("577e"),c=r("ad6d"),i=r("9f7f"),s=r("5692"),u=r("7c73"),l=r("69f3").get,d=r("fce3"),f=r("107c"),b=s("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,h=p,v=o("".charAt),m=o("".indexOf),g=o("".replace),y=o("".slice),O=function(){var t=/a/,e=/b*/g;return n(p,t,"a"),n(p,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),j=i.BROKEN_CARET,x=void 0!==/()??/.exec("")[1],w=O||x||j||d||f;w&&(h=function(t){var e,r,o,i,s,d,f,w=this,E=l(w),k=a(t),S=E.raw;if(S)return S.lastIndex=w.lastIndex,e=n(h,S,k),w.lastIndex=S.lastIndex,e;var T=E.groups,I=j&&w.sticky,P=n(c,w),A=w.source,R=0,C=k;if(I&&(P=g(P,"y",""),-1===m(P,"g")&&(P+="g"),C=y(k,w.lastIndex),w.lastIndex>0&&(!w.multiline||w.multiline&&"\n"!==v(k,w.lastIndex-1))&&(A="(?: "+A+")",C=" "+C,R++),r=new RegExp("^(?:"+A+")",P)),x&&(r=new RegExp("^"+A+"$(?!\\s)",P)),O&&(o=w.lastIndex),i=n(p,I?r:w,C),I?i?(i.input=y(i.input,R),i[0]=y(i[0],R),i.index=w.lastIndex,w.lastIndex+=i[0].length):w.lastIndex=0:O&&i&&(w.lastIndex=w.global?i.index+i[0].length:o),x&&i&&i.length>1&&n(b,i[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i&&T)for(i.groups=d=u(null),s=0;s<T.length;s++)f=T[s],d[f[0]]=i[f[1]];return i}),t.exports=h},"99af":function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),a=r("d039"),c=r("e8b5"),i=r("861d"),s=r("7b0b"),u=r("07fa"),l=r("8418"),d=r("65f0"),f=r("1dde"),b=r("b622"),p=r("2d00"),h=b("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",g=o.TypeError,y=p>=51||!a((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),O=f("concat"),j=function(t){if(!i(t))return!1;var e=t[h];return void 0!==e?!!e:c(t)},x=!y||!O;n({target:"Array",proto:!0,forced:x},{concat:function(t){var e,r,n,o,a,c=s(this),i=d(c,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?c:arguments[e],j(a)){if(o=u(a),f+o>v)throw g(m);for(r=0;r<o;r++,f++)r in a&&l(i,f,a[r])}else{if(f>=v)throw g(m);l(i,f++,a)}return i.length=f,i}})},"9bdd":function(t,e,r){var n=r("825a"),o=r("2a62");t.exports=function(t,e,r,a){try{return a?e(n(r)[0],r[1]):e(r)}catch(c){o(t,"throw",c)}}},"9f7f":function(t,e,r){var n=r("d039"),o=r("da84"),a=o.RegExp,c=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),i=c||n((function(){return!a("a","y").sticky})),s=c||n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:s,MISSED_STICKY:i,UNSUPPORTED_Y:c}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),a=r("d066"),c=r("2ba4"),i=r("c65b"),s=r("e330"),u=r("c430"),l=r("83ab"),d=r("4930"),f=r("d039"),b=r("1a2d"),p=r("e8b5"),h=r("1626"),v=r("861d"),m=r("3a9b"),g=r("d9b5"),y=r("825a"),O=r("7b0b"),j=r("fc6a"),x=r("a04b"),w=r("577e"),E=r("5c6c"),k=r("7c73"),S=r("df75"),T=r("241c"),I=r("057f"),P=r("7418"),A=r("06cf"),R=r("9bf2"),C=r("37e8"),N=r("d1e7"),D=r("f36a"),F=r("6eeb"),q=r("5692"),B=r("f772"),W=r("d012"),L=r("90e3"),$=r("b622"),J=r("e538"),M=r("746f"),U=r("d44e"),Y=r("69f3"),_=r("b727").forEach,z=B("hidden"),K="Symbol",X="prototype",H=$("toPrimitive"),Q=Y.set,G=Y.getterFor(K),V=Object[X],Z=o.Symbol,tt=Z&&Z[X],et=o.TypeError,rt=o.QObject,nt=a("JSON","stringify"),ot=A.f,at=R.f,ct=I.f,it=N.f,st=s([].push),ut=q("symbols"),lt=q("op-symbols"),dt=q("string-to-symbol-registry"),ft=q("symbol-to-string-registry"),bt=q("wks"),pt=!rt||!rt[X]||!rt[X].findChild,ht=l&&f((function(){return 7!=k(at({},"a",{get:function(){return at(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=ot(V,e);n&&delete V[e],at(t,e,r),n&&t!==V&&at(V,e,n)}:at,vt=function(t,e){var r=ut[t]=k(tt);return Q(r,{type:K,tag:t,description:e}),l||(r.description=e),r},mt=function(t,e,r){t===V&&mt(lt,e,r),y(t);var n=x(e);return y(r),b(ut,n)?(r.enumerable?(b(t,z)&&t[z][n]&&(t[z][n]=!1),r=k(r,{enumerable:E(0,!1)})):(b(t,z)||at(t,z,E(1,{})),t[z][n]=!0),ht(t,n,r)):at(t,n,r)},gt=function(t,e){y(t);var r=j(e),n=S(r).concat(wt(r));return _(n,(function(e){l&&!i(Ot,r,e)||mt(t,e,r[e])})),t},yt=function(t,e){return void 0===e?k(t):gt(k(t),e)},Ot=function(t){var e=x(t),r=i(it,this,e);return!(this===V&&b(ut,e)&&!b(lt,e))&&(!(r||!b(this,e)||!b(ut,e)||b(this,z)&&this[z][e])||r)},jt=function(t,e){var r=j(t),n=x(e);if(r!==V||!b(ut,n)||b(lt,n)){var o=ot(r,n);return!o||!b(ut,n)||b(r,z)&&r[z][n]||(o.enumerable=!0),o}},xt=function(t){var e=ct(j(t)),r=[];return _(e,(function(t){b(ut,t)||b(W,t)||st(r,t)})),r},wt=function(t){var e=t===V,r=ct(e?lt:j(t)),n=[];return _(r,(function(t){!b(ut,t)||e&&!b(V,t)||st(n,ut[t])})),n};if(d||(Z=function(){if(m(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?w(arguments[0]):void 0,e=L(t),r=function(t){this===V&&i(r,lt,t),b(this,z)&&b(this[z],e)&&(this[z][e]=!1),ht(this,e,E(1,t))};return l&&pt&&ht(V,e,{configurable:!0,set:r}),vt(e,t)},tt=Z[X],F(tt,"toString",(function(){return G(this).tag})),F(Z,"withoutSetter",(function(t){return vt(L(t),t)})),N.f=Ot,R.f=mt,C.f=gt,A.f=jt,T.f=I.f=xt,P.f=wt,J.f=function(t){return vt($(t),t)},l&&(at(tt,"description",{configurable:!0,get:function(){return G(this).description}}),u||F(V,"propertyIsEnumerable",Ot,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Z}),_(S(bt),(function(t){M(t)})),n({target:K,stat:!0,forced:!d},{for:function(t){var e=w(t);if(b(dt,e))return dt[e];var r=Z(e);return dt[e]=r,ft[r]=e,r},keyFor:function(t){if(!g(t))throw et(t+" is not a symbol");if(b(ft,t))return ft[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),n({target:"Object",stat:!0,forced:!d,sham:!l},{create:yt,defineProperty:mt,defineProperties:gt,getOwnPropertyDescriptor:jt}),n({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:xt,getOwnPropertySymbols:wt}),n({target:"Object",stat:!0,forced:f((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(O(t))}}),nt){var Et=!d||f((function(){var t=Z();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));n({target:"JSON",stat:!0,forced:Et},{stringify:function(t,e,r){var n=D(arguments),o=e;if((v(e)||void 0!==t)&&!g(t))return p(e)||(e=function(t,e){if(h(o)&&(e=i(o,this,t,e)),!g(e))return e}),n[1]=e,c(nt,null,n)}})}if(!tt[H]){var kt=tt.valueOf;F(tt,H,(function(t){return i(kt,this)}))}U(Z,K),W[z]=!0},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),a=r("1c7e"),c=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:c},{from:o})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ab36:function(t,e,r){var n=r("861d"),o=r("9112");t.exports=function(t,e){n(e)&&"cause"in e&&o(t,"cause",e.cause)}},ac1f:function(t,e,r){"use strict";var n=r("23e7"),o=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,r){var n=r("83ab"),o=r("5e77").EXISTS,a=r("e330"),c=r("9bf2").f,i=Function.prototype,s=a(i.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=a(u.exec),d="name";n&&!o&&c(i,d,{configurable:!0,get:function(){try{return l(u,s(this))[1]}catch(t){return""}}})},b727:function(t,e,r){var n=r("0366"),o=r("e330"),a=r("44ad"),c=r("7b0b"),i=r("07fa"),s=r("65f0"),u=o([].push),l=function(t){var e=1==t,r=2==t,o=3==t,l=4==t,d=6==t,f=7==t,b=5==t||d;return function(p,h,v,m){for(var g,y,O=c(p),j=a(O),x=n(h,v),w=i(j),E=0,k=m||s,S=e?k(p,w):r||f?k(p,0):void 0;w>E;E++)if((b||E in j)&&(g=j[E],y=x(g,E,O),t))if(e)S[E]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return E;case 2:u(S,g)}else switch(t){case 4:return!1;case 7:u(S,g)}return d?-1:o||l?l:S}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},b980:function(t,e,r){var n=r("d039"),o=r("5c6c");t.exports=!n((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},c770:function(t,e,r){var n=r("e330"),o=n("".replace),a=function(t){return String(Error(t).stack)}("zxcasd"),c=/\n\s*at [^:]*:[^\n]*/,i=c.test(a);t.exports=function(t,e){if(i&&"string"==typeof t)while(e--)t=o(t,c,"");return t}},d28b:function(t,e,r){var n=r("746f");n("iterator")},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,a=r("1dde"),c=a("map");n({target:"Array",proto:!0,forced:!c},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},d9e2:function(t,e,r){var n=r("23e7"),o=r("da84"),a=r("2ba4"),c=r("e5cb"),i="WebAssembly",s=o[i],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var r={};r[t]=c(t,e,u),n({global:!0,forced:u},r)},d=function(t,e){if(s&&s[t]){var r={};r[t]=c(i+"."+t,e,u),n({target:i,stat:!0,forced:u},r)}};l("Error",(function(t){return function(e){return a(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return a(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return a(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return a(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return a(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return a(t,this,arguments)}})),l("URIError",(function(t){return function(e){return a(t,this,arguments)}})),d("CompileError",(function(t){return function(e){return a(t,this,arguments)}})),d("LinkError",(function(t){return function(e){return a(t,this,arguments)}})),d("RuntimeError",(function(t){return function(e){return a(t,this,arguments)}}))},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),a=r("da84"),c=r("e330"),i=r("1a2d"),s=r("1626"),u=r("3a9b"),l=r("577e"),d=r("9bf2").f,f=r("e893"),b=a.Symbol,p=b&&b.prototype;if(o&&s(b)&&(!("description"in p)||void 0!==b().description)){var h={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=u(p,this)?new b(t):void 0===t?b():b(t);return""===t&&(h[e]=!0),e};f(v,b),v.prototype=p,p.constructor=v;var m="Symbol(test)"==String(b("test")),g=c(p.toString),y=c(p.valueOf),O=/^Symbol\((.*)\)[^)]+$/,j=c("".replace),x=c("".slice);d(p,"description",{configurable:!0,get:function(){var t=y(this),e=g(t);if(i(h,t))return"";var r=m?x(e,7,-1):j(e,O,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:v})}},e237:function(t,e,r){t.exports=r.p+"img/Proveedor1.117ca9d7.webp"},e391:function(t,e,r){var n=r("577e");t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:n(t)}},e538:function(t,e,r){var n=r("b622");e.f=n},e5cb:function(t,e,r){"use strict";var n=r("d066"),o=r("1a2d"),a=r("9112"),c=r("3a9b"),i=r("d2bb"),s=r("e893"),u=r("7156"),l=r("e391"),d=r("ab36"),f=r("c770"),b=r("b980"),p=r("c430");t.exports=function(t,e,r,h){var v=h?2:1,m=t.split("."),g=m[m.length-1],y=n.apply(null,m);if(y){var O=y.prototype;if(!p&&o(O,"cause")&&delete O.cause,!r)return y;var j=n("Error"),x=e((function(t,e){var r=l(h?e:t,void 0),n=h?new y(t):new y;return void 0!==r&&a(n,"message",r),b&&a(n,"stack",f(n.stack,2)),this&&c(O,this)&&u(n,this,x),arguments.length>v&&d(n,arguments[v]),n}));if(x.prototype=O,"Error"!==g&&(i?i(x,j):s(x,j,{name:!0})),s(x,y),!p)try{O.name!==g&&a(O,"name",g),O.constructor=x}catch(w){}return x}}},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f4a8:function(t,e,r){t.exports=r.p+"img/Proveedor3.dfafb6ae.webp"},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),a=r("e8b5"),c=r("68ee"),i=r("861d"),s=r("23cb"),u=r("07fa"),l=r("fc6a"),d=r("8418"),f=r("b622"),b=r("1dde"),p=r("f36a"),h=b("slice"),v=f("species"),m=o.Array,g=Math.max;n({target:"Array",proto:!0,forced:!h},{slice:function(t,e){var r,n,o,f=l(this),b=u(f),h=s(t,b),y=s(void 0===e?b:e,b);if(a(f)&&(r=f.constructor,c(r)&&(r===m||a(r.prototype))?r=void 0:i(r)&&(r=r[v],null===r&&(r=void 0)),r===m||void 0===r))return p(f,h,y);for(n=new(void 0===r?m:r)(g(y-h,0)),o=0;h<y;h++,o++)h in f&&d(n,o,f[h]);return n.length=o,n}})},fce3:function(t,e,r){var n=r("d039"),o=r("da84"),a=o.RegExp;t.exports=n((function(){var t=a(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},fd3f:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),o={class:"blog"};function a(t,e,r,a,c,i){var s=Object(n["v"])("BlogData");return Object(n["q"])(),Object(n["d"])("div",o,[Object(n["h"])(s)])}var c={class:"blog fondo"},i={class:"container"},s=Object(n["e"])("section",{class:"d-grid gap-3"},[Object(n["e"])("article",{class:"card mt-3"},[Object(n["e"])("div",{class:"card-header"},[Object(n["e"])("h1",{class:"fw-bold text-center"},"Blog Title Number One"),Object(n["e"])("a",{class:"btn btn-primary centrarElemento","data-bs-toggle":"collapse",href:"#blog1",role:"button","aria-expanded":"false","aria-controls":"blog1"},[Object(n["e"])("i",null,"Ocultar el blog 1")])]),Object(n["e"])("div",{class:"card-body multi-collapse",id:"blog1"},[Object(n["e"])("p",{class:"card-text justify"}," This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. Want an easier solution for a Free Website? Head straight to Wix and immediately start customizing your website! Wix is an online website builder with a simple drag & drop interface, meaning you do the work online and instantly publish to the web. Nothing to download, nothing to upload. All Wix templates are fully customizable and free to use. Just pick one you like, click Edit, and enter the online editor. Change, add, and remove items as you like. ")])]),Object(n["e"])("article",{class:"card"},[Object(n["e"])("div",{class:"card-header"},[Object(n["e"])("h1",{class:"fw-bold text-center"},"Blog Title Number One"),Object(n["e"])("a",{class:"btn btn-primary centrarElemento","data-bs-toggle":"collapse",href:"#blog2",role:"button","aria-expanded":"false","aria-controls":"blog2"},[Object(n["e"])("i",null,"Ocultar el blog 2")])]),Object(n["e"])("div",{class:"card-body multi-collapse",id:"blog2"},[Object(n["e"])("p",{class:"card-text justify"}," Wix also offers a ton of free design elements right inside the editor, like images, icons, animation files, and interactive widgets. Publish your Free Website in minutes! You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the Forums. This is just a place holder, so you can see what the site would look like. ")])]),Object(n["e"])("article",{class:"card"},[Object(n["e"])("div",{class:"card-header"},[Object(n["e"])("h1",{class:"fw-bold text-center"},"Blog Title Number One"),Object(n["e"])("a",{class:"btn btn-primary centrarElemento","data-bs-toggle":"collapse",href:"#blog3",role:"button","aria-expanded":"false","aria-controls":"blog3"},[Object(n["e"])("i",null,"Ocultar el blog 3")])]),Object(n["e"])("div",{class:"card-body multi-collapse",id:"blog3"},[Object(n["e"])("p",{class:"card-text justify"}," This is just a place holder, so you can see what the site would look like. This is just a place holder, so you can see what the site would look like. This is just a place holder, so you can see what the site would look like. This is just a place holder, so you can see what the site would look like. This is just a place holder, so you can see what the site would look like. This is just a place holder, so you can see what the site would look like. This is just a place holder, so you can see what the site would look like. This is just a place holder, so you can see what the site would look like. ")])])],-1);function u(t,e,r,o,a,u){var l=Object(n["v"])("Footer");return Object(n["q"])(),Object(n["d"])("div",c,[Object(n["e"])("div",i,[s,Object(n["h"])(l)])])}var l=r("fd2d"),d={name:"BlogData",components:{Footer:l["a"]}},f=r("d959"),b=r.n(f);const p=b()(d,[["render",u]]);var h=p,v={name:"Blog",components:{BlogData:h}};const m=b()(v,[["render",a]]);e["default"]=m}}]);
//# sourceMappingURL=about.2621cbac.js.map