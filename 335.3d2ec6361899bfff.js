"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[335],{5335:(ot,u,l)=>{l.r(u),l.d(u,{OrphansModule:()=>_});var v=l(4521),m=l(7423),Z=l(9832),T=l(4834),g=l(5245),b=l(2181),k=l(5899),A=l(508),C=l(2638),O=l(4847),y=l(4999),I=l(3251),U=l(7455),q=l(1244),J=l(4466),B=l(4107),H=l(7531),Q=l(9828),x=l(7238),N=l(7261),j=l(9837),w=l(7237),M=l(5486),r=l(5861),t=l(5e3),S=l(5830),Y=l(9205),a=l(9808),D=l(9364),L=l(1656),F=l(2419);function z(e,s){if(1&e&&(t.TgZ(0,"div",18),t._UZ(1,"mat-icon",13),t.TgZ(2,"div",19),t._uU(3),t.qZA(),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("svgIcon","heroicons_solid:badge-check"),t.xp6(2),t.Oqu(null==o.setup.Chain?null:o.setup.Chain.Description)}}function W(e,s){1&e&&(t.TgZ(0,"app-progress",25),t._uU(1,"Loading latest blocks..."),t.qZA())}function X(e,s){if(1&e&&(t.TgZ(0,"blockcore-block",31),t._UZ(1,"mat-icon",32),t.TgZ(2,"div",33),t.TgZ(3,"div",34),t.TgZ(4,"span"),t._uU(5,"Orphan blocks: "),t.qZA(),t.TgZ(6,"span",35),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const o=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_outline:cube"),t.xp6(6),t.hij(" ",o.total,"")}}function $(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"blockcore-block",36),t._UZ(1,"mat-icon",37),t.TgZ(2,"div",38),t.TgZ(3,"div",39),t.TgZ(4,"a",40),t.NdJ("click",function(){const i=t.CHM(o).$implicit;return t.oxw(3).showBlockDetails(i.blockHash)}),t._uU(5),t.qZA(),t._uU(6," | "),t.TgZ(7,"a",40),t.NdJ("click",function(){const i=t.CHM(o).$implicit;return t.oxw(3).showBlockDetails(i.blockHash)}),t._uU(8),t.ALo(9,"slice"),t.qZA(),t.qZA(),t.TgZ(10,"div",41),t._uU(11),t.ALo(12,"date"),t.qZA(),t.qZA(),t.TgZ(13,"div",33),t.TgZ(14,"div",42),t.ynx(15),t.TgZ(16,"div",43),t.TgZ(17,"div",44),t._uU(18,"Transaction Count:"),t.qZA(),t.TgZ(19,"div",45),t._uU(20),t.qZA(),t.qZA(),t.BQk(),t.qZA(),t.qZA(),t._UZ(21,"div",46),t.qZA()}if(2&e){const o=s.$implicit;t.xp6(1),t.Q6J("svgIcon","heroicons_outline:cube"),t.xp6(4),t.Oqu(o.blockIndex),t.xp6(3),t.Oqu(t.Dn7(9,6,o.blockHash,0,20)),t.xp6(3),t.Oqu(t.xi3(12,10,o.created,"dd/MM/yyyy hh:mm")),t.xp6(8),t.MGl("matTooltip","Transaction Count: ",o.block.transactionCount,""),t.xp6(1),t.hij(" ",o.block.transactionCount,"")}}function E(e,s){1&e&&t._UZ(0,"app-progress")}function R(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"div",26),t.TgZ(1,"div",27),t.TgZ(2,"div",18),t.YNc(3,X,8,2,"blockcore-block",28),t.qZA(),t.TgZ(4,"div",29),t.NdJ("onScroll",function(c){return t.CHM(o),t.oxw(2).onScroll(c)}),t.YNc(5,$,22,13,"blockcore-block",30),t.YNc(6,E,1,0,"app-progress",24),t.qZA(),t.qZA(),t.qZA()}if(2&e){const o=t.oxw(2);t.xp6(3),t.Q6J("ngIf",o.address),t.xp6(1),t.Q6J("bottomOffset",400)("topOffset",400),t.xp6(1),t.Q6J("ngForOf",o.blocks),t.xp6(1),t.Q6J("ngIf",o.loading)}}function V(e,s){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"blockcore-block",31),t._UZ(2,"mat-icon",32),t.TgZ(3,"div",33),t.TgZ(4,"div",34),t.TgZ(5,"span"),t._uU(6),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",47),t.TgZ(8,"pre",48),t._uU(9),t.ALo(10,"json"),t.qZA(),t.qZA(),t.qZA()),2&e){const o=t.oxw(2);t.xp6(2),t.Q6J("svgIcon","heroicons_outline:clipboard-list"),t.xp6(4),t.hij("Block Hash: ",o.displayBlock.blockHash," "),t.xp6(3),t.Oqu(t.lcZ(10,3,o.displayBlock))}}function G(e,s){if(1&e&&(t.TgZ(0,"div",20),t.TgZ(1,"div",21),t._UZ(2,"app-search"),t.YNc(3,W,2,0,"app-progress",22),t.YNc(4,R,7,5,"div",23),t.YNc(5,V,11,5,"div",24),t.qZA(),t.qZA()),2&e){const o=t.oxw();t.xp6(3),t.Q6J("ngIf",!o.blocks),t.xp6(1),t.Q6J("ngIf",o.blocks),t.xp6(1),t.Q6J("ngIf",o.displayBlock)}}const P=[{path:"",component:(()=>{class e{constructor(o,n){this.api=o,this.setup=n,this.hostClass=!0,this.blocks=null,this.count=0,this.maxCount=2,this.limit=20,this.loading=!1}scrollHandler(o){}ngOnInit(){var o=this;return(0,r.Z)(function*(){o.subscription=o.setup.currentChain$.subscribe(function(){var n=(0,r.Z)(function*(c){yield o.updateBlocks("/api/query/block/orphan?offset=&limit="+o.limit)});return function(c){return n.apply(this,arguments)}}())})()}ngOnDestroy(){clearTimeout(this.timerInfo),clearTimeout(this.timerBlocks),this.subscription.unsubscribe()}updateBlocks(o){var n=this;return(0,r.Z)(function*(){if(!o)return;const c=n.api.baseUrl.replace("/api",""),i=yield n.api.request(c+o);n.total=i.headers.get("Pagination-Total");const p=i.headers.get("Link"),tt=n.api.parseLinkHeader(p);n.link=tt.previous;const h=yield i.json();h.sort((d,f)=>f.blockIndex===d.blockIndex?0:f.blockIndex<d.blockIndex?-1:f.blockIndex>d.blockIndex?1:void 0),n.blocks||(n.blocks=[]),n.blocks=[...n.blocks,...h],n.count++})()}showBlockDetails(o){var n=this;return(0,r.Z)(function*(){const c=n.api.baseUrl.replace("/api",""),i=yield n.api.request(c+"/api/query/block/orphan/"+o);n.displayBlock=yield i.json()})()}onScroll(o){var n=this;return(0,r.Z)(function*(){o.isReachingBottom&&(n.loading=!0,setTimeout((0,r.Z)(function*(){yield n.updateBlocks(n.link),n.loading=!1})))})()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(S.s),t.Y36(Y.U))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-orphans-component"]],hostVars:2,hostBindings:function(o,n){1&o&&t.NdJ("scroll",function(i){return n.scrollHandler(i)}),2&o&&t.ekj("content-centered-top",n.hostClass)},decls:21,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],[1,"w-full","h-full",3,"src"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3","hidden","md:block"],["target","_blank",3,"href"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],["class","flex flex-col flex-auto w-full",4,"ngIf"],[1,"flex","items-center"],[1,"ml-1.5","leading-6","truncate","text-secondary"],[1,"flex","flex-col","flex-auto","w-full"],[1,"w-full","max-w-screen-xl","mx-auto","p-6","md:p-8"],["class","centered",4,"ngIf"],["class","grid grid-cols-1 xl:grid-cols-1 gap-8 w-full mt-8",4,"ngIf"],[4,"ngIf"],[1,"centered"],[1,"grid","grid-cols-1","xl:grid-cols-1","gap-8","w-full","mt-8"],[1,"flex","flex-col","flex-auto"],["class","flex items-center w-full p-6 filter-info mt-8",4,"ngIf"],["appDetectScroll","",1,"scrollable",3,"bottomOffset","topOffset","onScroll"],["class","flex items-center w-full p-6 filter-info justify-between",4,"ngFor","ngForOf"],[1,"flex","items-center","w-full","p-6","filter-info","mt-8"],[1,"icon-size-16","mr-6","text-blue-500",3,"svgIcon"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight","break-all"],[1,"text-primary"],[1,"flex","items-center","w-full","p-6","filter-info","justify-between"],[1,"icon-size-12","mr-6",3,"svgIcon"],[1,"flex","flex-col","w-full"],[1,"text-2xl","font-semibold","leading-tight","text-primary","break-all"],[2,"cursor","pointer",3,"click"],[1,"text-md","text-secondary"],[1,"text-1xl","font-semibold","leading-tight"],[1,"font-semibold","tracking-tight","leading-7","md:leading-snug","truncate","inline-flex","mat-flat-button"],[1,"hidden","md:block","mr-3"],[1,"inline-flex","text-primary",3,"matTooltip"],[1,"flex"],[1,"prose","max-w-full"],[2,"text-align","left","overflow","auto"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7),t.ynx(8),t.TgZ(9,"div",8),t._uU(10),t.qZA(),t.BQk(),t.YNc(11,z,4,2,"div",9),t.qZA(),t.qZA(),t.TgZ(12,"div",10),t.TgZ(13,"a",11),t.TgZ(14,"button",12),t._UZ(15,"mat-icon",13),t.TgZ(16,"span",14),t._uU(17,"Website"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",15),t.TgZ(19,"div",16),t.YNc(20,G,6,3,"div",17),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(6),t.s9C("src",null==n.setup.Chain?null:n.setup.Chain.Icon,t.LSH),t.xp6(4),t.hij(" ",null==n.setup.Chain?null:n.setup.Chain.Symbol," "),t.xp6(1),t.Q6J("ngIf",null==n.setup.Chain?null:n.setup.Chain.Description),t.xp6(2),t.s9C("href",null==n.setup.Chain?null:n.setup.Chain.Url,t.LSH),t.xp6(1),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-double-right"),t.xp6(5),t.Q6J("ngIf",n.setup.chains))},directives:[a.O5,g.Hw,m.lW,D.g,L.t,F.f,a.sg,x.gM],pipes:[a.OU,a.uU,a.Ts],encapsulation:2}),e})()}];var K=l(2499);let _=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[v.Bz.forChild(P),m.ot,Z.vV,T.t,g.Ps,b.Tx,k.Cv,A.si,C.SJ,O.JX,y.p0,I.Nh,q.X,U.y4,J.m,B.LD,H.c,Q.d,x.AV,N.ZX,j.t,w.q,M.T,K.Wl]]}),e})()}}]);