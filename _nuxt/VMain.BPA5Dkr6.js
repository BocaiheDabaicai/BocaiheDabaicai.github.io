import{_ as m,W as y,ad as G,a5 as b,z as n,aM as V,T as I,U as o,ai as x,R as h,N as P,V as S,aD as f,ah as H,aK as K,aj as Q,aN as W,aO as Y,aP as J,al as X,am as Z,Y as B,aa as $,ab as ee,ao as ae,ac as te,aq as ne,ar as le,as as de,aL as ie,at as se,aQ as ce,aR as re,aS as ue,au as ve,ay as oe,c as p,az as me,aA as ye,aG as be,aT as ke,aB as ge,aU as fe,aV as Ve}from"./entry.CtY1L7HW.js";const Ie=m()({name:"VCardActions",props:y(),setup(e,l){let{slots:a}=l;return G({VBtn:{slim:!0,variant:"text"}}),b(()=>{var t;return n("div",{class:["v-card-actions",e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),Ce=V("v-card-subtitle"),Ae=V("v-card-title"),he=I({appendAvatar:String,appendIcon:o,prependAvatar:String,prependIcon:o,subtitle:[String,Number],title:[String,Number],...y(),...x()},"VCardItem"),Pe=m()({name:"VCardItem",props:he(),setup(e,l){let{slots:a}=l;return b(()=>{var r;const t=!!(e.prependAvatar||e.prependIcon),c=!!(t||a.prepend),d=!!(e.appendAvatar||e.appendIcon),s=!!(d||a.append),k=!!(e.title!=null||a.title),g=!!(e.subtitle!=null||a.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[c&&n("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?n(f,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},a.prepend):n(h,null,[e.prependAvatar&&n(P,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(S,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[k&&n(Ae,{key:"title"},{default:()=>{var i;return[((i=a.title)==null?void 0:i.call(a))??e.title]}}),g&&n(Ce,{key:"subtitle"},{default:()=>{var i;return[((i=a.subtitle)==null?void 0:i.call(a))??e.subtitle]}}),(r=a.default)==null?void 0:r.call(a)]),s&&n("div",{key:"append",class:"v-card-item__append"},[a.append?n(f,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},a.append):n(h,null,[e.appendIcon&&n(S,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(P,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Se=V("v-card-text"),pe=I({appendAvatar:String,appendIcon:o,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:o,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...H(),...y(),...x(),...K(),...Q(),...W(),...Y(),...J(),...X(),...Z(),...B(),...$(),...ee({variant:"elevated"})},"VCard"),Te=m()({name:"VCard",directives:{Ripple:ae},props:pe(),setup(e,l){let{attrs:a,slots:t}=l;const{themeClasses:c}=te(e),{borderClasses:d}=ne(e),{colorClasses:s,colorStyles:k,variantClasses:g}=le(e),{densityClasses:r}=de(e),{dimensionStyles:i}=ie(e),{elevationClasses:T}=se(e),{loaderClasses:_}=ce(e),{locationStyles:L}=re(e),{positionClasses:D}=ue(e),{roundedClasses:N}=ve(e),u=oe(e,a),M=p(()=>e.link!==!1&&u.isLink.value),v=p(()=>!e.disabled&&e.link!==!1&&(e.link||u.isClickable.value));return b(()=>{const R=M.value?"a":e.tag,F=!!(t.title||e.title!=null),O=!!(t.subtitle||e.subtitle!=null),j=F||O,z=!!(t.append||e.appendAvatar||e.appendIcon),E=!!(t.prepend||e.prependAvatar||e.prependIcon),U=!!(t.image||e.image),q=j||E||z,w=!!(t.text||e.text!=null);return me(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},c.value,d.value,s.value,r.value,T.value,_.value,D.value,N.value,g.value,e.class],style:[k.value,i.value,L.value,e.style],href:u.href.value,onClick:v.value&&u.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var C;return[U&&n("div",{key:"image",class:"v-card__image"},[t.image?n(f,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(be,{key:"image-img",cover:!0,src:e.image},null)]),n(ke,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),q&&n(Pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),w&&n(Se,{key:"text"},{default:()=>{var A;return[((A=t.text)==null?void 0:A.call(t))??e.text]}}),(C=t.default)==null?void 0:C.call(t),t.actions&&n(Ie,null,{default:t.actions}),ge(v.value,"v-card")]}}),[[ye("ripple"),v.value&&e.ripple]])}),{}}}),xe=I({scrollable:Boolean,...y(),...B({tag:"main"})},"VMain"),_e=m()({name:"VMain",props:xe(),setup(e,l){let{slots:a}=l;const{mainStyles:t}=fe(),{ssrBootStyles:c}=Ve();return b(()=>n(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[t.value,c.value,e.style]},{default:()=>{var d,s;return[e.scrollable?n("div",{class:"v-main__scroller"},[(d=a.default)==null?void 0:d.call(a)]):(s=a.default)==null?void 0:s.call(a)]}})),{}}});export{_e as V,Te as a,Ae as b,Ce as c,Se as d,Ie as e};
