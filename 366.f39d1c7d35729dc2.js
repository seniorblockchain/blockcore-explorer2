"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[366],{94366:(T,m,n)=>{n.r(m),n.d(m,{RichlistModule:()=>V});var c=n(99826),d=n(47423),f=n(69832),r=n(4834),i=n(25245),u=n(92181),l=n(85899),p=n(90508),v=n(2638),A=n(84847),R=n(24999),M=n(53251),y=n(12666),E=n(42115),P=n(44466),O=n(74107),I=n(77531),U=n(9828),C=n(87238),D=n(57261),J=n(69837),B=n(17237),L=n(35486),x=n(15861),t=n(5e3),S=n(5830),H=n(29205),Z=n(69808),Q=n(32419),b=n(11656),F=n(40809);function N(s,a){if(1&s&&(t.TgZ(0,"div",19),t._UZ(1,"mat-icon",20),t.TgZ(2,"div",21),t._uU(3),t.qZA()()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("svgIcon","heroicons_solid:badge-check"),t.xp6(2),t.Oqu(null==e.setup.Chain?null:e.setup.Chain.Description)}}function W(s,a){1&s&&t._UZ(0,"app-progress")}function Y(s,a){1&s&&(t.TgZ(0,"blockcore-block",22),t._UZ(1,"mat-icon",23),t.TgZ(2,"div",24)(3,"div",25)(4,"span"),t._uU(5,"Addresses"),t.qZA()()()()),2&s&&(t.xp6(1),t.Q6J("svgIcon","heroicons_outline:database"))}const K=function(s){return["../../explorer/address/",s]};function j(s,a){if(1&s&&(t.TgZ(0,"blockcore-block",28),t._UZ(1,"mat-icon",29),t.TgZ(2,"div",30)(3,"div",31)(4,"a",32),t._uU(5),t.qZA()(),t.TgZ(6,"div",33),t._UZ(7,"span",34),t.ALo(8,"amountHtml"),t.qZA()(),t.TgZ(9,"div",24)(10,"div",35),t.ynx(11),t.TgZ(12,"div",36)(13,"div",37),t._uU(14),t.qZA()(),t.BQk(),t.qZA()(),t._UZ(15,"div",38),t.qZA()),2&s){const e=a.$implicit,o=a.index;t.xp6(1),t.Q6J("svgIcon","heroicons_outline:database"),t.xp6(3),t.Q6J("routerLink",t.VKq(7,K,e.address)),t.xp6(1),t.Oqu(e.address),t.xp6(2),t.Q6J("innerHTML",t.lcZ(8,5,e.balance),t.oJD),t.xp6(7),t.Oqu(o+1)}}function k(s,a){1&s&&t._UZ(0,"app-progress")}function z(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"div")(1,"div",26),t.NdJ("onScroll",function(g){t.CHM(e);const h=t.oxw();return t.KtG(h.onScroll(g))}),t.YNc(2,j,16,9,"blockcore-block",27),t.YNc(3,k,1,0,"app-progress",17),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(1),t.Q6J("bottomOffset",400)("topOffset",400),t.xp6(1),t.Q6J("ngForOf",e.addresses),t.xp6(1),t.Q6J("ngIf",e.loading)}}const X=[{path:"",component:(()=>{class s{constructor(e,o){this.api=e,this.setup=o,this.hostClass=!0,this.addresses=null,this.count=0,this.maxCount=2,this.limit=20,this.loading=!1}scrollHandler(e){console.log("Scroll Event")}ngOnInit(){var e=this;this.subscription=this.setup.currentChain$.subscribe(function(){var o=(0,x.Z)(function*(g){yield e.updateRichlist("/api/insight/richlist?limit="+e.limit)});return function(g){return o.apply(this,arguments)}}())}updateRichlist(e){var o=this;return(0,x.Z)(function*(){if(console.log("url: ",e),!e)return;const g=o.api.baseUrl.replace("/api",""),h=yield o.api.request(g+e);o.total=h.headers.get("Pagination-Total");const $=h.headers.get("Link"),G=o.api.parseLinkHeader($);o.link=G.next;const w=yield h.json();o.addresses||(o.addresses=[]),o.addresses=[...o.addresses,...w],o.count++})()}toggleAmountRendering(){this.setup.toggleFormat()}onScroll(e){var o=this;return(0,x.Z)(function*(){console.log("scroll occurred",e),e.isReachingBottom&&(console.log("the user is reaching the bottom"),o.loading=!0,setTimeout((0,x.Z)(function*(){console.log("UPDATE RICH LIST",o.link),yield o.updateRichlist(o.link),o.loading=!1}))),e.isReachingTop&&console.log("the user is reaching the top"),e.isWindowEvent&&console.log("This event is fired on Window not on an element.")})()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(S.s),t.Y36(H.U))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-richlist"]],hostVars:2,hostBindings:function(e,o){1&e&&t.NdJ("scroll",function(h){return o.scrollHandler(h)}),2&e&&t.ekj("content-centered-top",o.hostClass)},decls:23,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-md","overflow-hidden"],[1,"w-full","h-full",3,"src"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],[1,"flex","items-center","mt-auto"],["title","Toggle Amount Format","mat-stroked-button","",1,"mt-2",3,"click"],[1,"icon-size-5","text-primary",3,"svgIcon"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"flex","flex-col","flex-auto","w-full"],[1,"w-full","p-6","md:p-8"],[4,"ngIf"],["class","flex items-center w-full p-6 filter-info",4,"ngIf"],[1,"flex","items-center"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-1.5","leading-6","truncate","text-secondary"],[1,"flex","items-center","w-full","p-6","filter-info"],[1,"icon-size-22","mr-6","text-blue-500",3,"svgIcon"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight","break-all"],["appDetectScroll","",3,"bottomOffset","topOffset","onScroll"],["class","flex items-center w-full p-6 filter-info justify-between",4,"ngFor","ngForOf"],[1,"flex","items-center","w-full","p-6","filter-info","justify-between"],[1,"icon-size-12","mr-6",3,"svgIcon"],[1,"flex","flex-col","w-full"],[1,"text-1xl","font-semibold","leading-tight","text-primary","break-all"],[3,"routerLink"],[1,"text-1xl","text-secondary","mt-2"],[3,"innerHTML"],[1,"text-1xl","font-semibold","leading-tight"],[1,"font-semibold","tracking-tight","leading-7","md:leading-snug","truncate","inline-flex","mat-flat-button"],["matTooltip","Rank",1,"inline-flex","text-primary"],[1,"flex"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div")(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4),t._UZ(6,"img",5),t.qZA(),t.TgZ(7,"div",6),t.ynx(8),t.TgZ(9,"div",7),t._uU(10),t.qZA(),t.BQk(),t.YNc(11,N,4,2,"div",8),t.qZA()(),t.TgZ(12,"div",9)(13,"div",10)(14,"button",11),t.NdJ("click",function(){return o.toggleAmountRendering()}),t._UZ(15,"mat-icon",12),t.qZA()()()()()(),t.TgZ(16,"div",13)(17,"div",14)(18,"div",15)(19,"div",16),t.YNc(20,W,1,0,"app-progress",17),t.YNc(21,Y,6,1,"blockcore-block",18),t.YNc(22,z,4,4,"div",17),t.qZA()()()()()),2&e&&(t.xp6(6),t.s9C("src",null==o.setup.Chain?null:o.setup.Chain.Icon,t.LSH),t.xp6(4),t.hij(" ",null==o.setup.Chain?null:o.setup.Chain.Symbol," "),t.xp6(1),t.Q6J("ngIf",null==o.setup.Chain?null:o.setup.Chain.Description),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:database"),t.xp6(5),t.Q6J("ngIf",!o.addresses),t.xp6(1),t.Q6J("ngIf",o.addresses),t.xp6(1),t.Q6J("ngIf",o.addresses))},dependencies:[c.yS,d.lW,i.Hw,Z.sg,Z.O5,Q.f,C.gM,b.t,F.N],encapsulation:2}),s})()}];let V=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[c.Bz.forChild(X),d.ot,f.vV,r.t,i.Ps,u.Tx,l.Cv,p.si,v.SJ,A.JX,R.p0,M.Nh,E.X,y.y4,P.m,O.LD,I.c,U.d,C.AV,D.ZX,J.t,B.q,L.T]}),s})()},69837:(T,m,n)=>{n.d(m,{t:()=>u});var c=n(25245),d=n(44466),f=n(77531),r=n(57261),i=n(5e3);let u=(()=>{class l{}return l.\u0275fac=function(v){return new(v||l)},l.\u0275mod=i.oAB({type:l}),l.\u0275inj=i.cJS({imports:[c.Ps,d.m,f.c,r.ZX]}),l})()},40809:(T,m,n)=>{n.d(m,{C:()=>f,N:()=>r});var c=n(5e3),d=n(29205);let f=(()=>{class i{constructor(l){this.setup=l}transform(l){return this.setup.transformFormat(l)}}return i.\u0275fac=function(l){return new(l||i)(c.Y36(d.U,16))},i.\u0275pipe=c.Yjl({name:"amount",type:i,pure:!1}),i})(),r=(()=>{class i{constructor(l){this.setup=l}transform(l){const p=this.setup.transformFormat(l);if(p.indexOf(".")>-1){const v=p.split(".");return`${v[0]}.<span class="decimals">${v[1]}</span>`}return p}}return i.\u0275fac=function(l){return new(l||i)(c.Y36(d.U,16))},i.\u0275pipe=c.Yjl({name:"amountHtml",type:i,pure:!1}),i})()},9828:(T,m,n)=>{n.d(m,{d:()=>f});var c=n(69808),d=n(5e3);let f=(()=>{class r{}return r.\u0275fac=function(u){return new(u||r)},r.\u0275mod=d.oAB({type:r}),r.\u0275inj=d.cJS({imports:[c.ez]}),r})()}}]);