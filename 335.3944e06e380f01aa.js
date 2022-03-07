"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[335],{5335:(J,x,o)=>{o.r(x),o.d(x,{OrphansModule:()=>tt});var v=o(4521),i=o(7423),C=o(9832),A=o(4834),Z=o(5245),k=o(2181),T=o(5899),y=o(508),O=o(2638),g=o(4847),I=o(4999),u=o(3251),_=o(7455),s=o(1244),a=o(4466),m=o(4107),c=o(7531),b=o(9828),B=o(7238),w=o(7261),P=o(9837),q=o(7237),H=o(5486),f=o(5861),t=o(5e3),L=o(5830),N=o(9205),h=o(9808),Q=o(9364),S=o(1656),j=o(2419);function W(l,r){if(1&l&&(t.TgZ(0,"div",18),t._UZ(1,"mat-icon",13),t.TgZ(2,"div",19),t._uU(3),t.qZA(),t.qZA()),2&l){const n=t.oxw();t.xp6(1),t.Q6J("svgIcon","heroicons_solid:badge-check"),t.xp6(2),t.Oqu(null==n.setup.Chain?null:n.setup.Chain.Description)}}function Y(l,r){1&l&&(t.TgZ(0,"app-progress",25),t._uU(1,"Loading latest blocks..."),t.qZA())}function R(l,r){if(1&l&&(t.TgZ(0,"blockcore-block",31),t._UZ(1,"mat-icon",32),t.TgZ(2,"div",33),t.TgZ(3,"div",34),t.TgZ(4,"span"),t._uU(5,"Orphan blocks: "),t.qZA(),t.TgZ(6,"span",35),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&l){const n=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_outline:cube"),t.xp6(6),t.hij(" ",n.total,"")}}function K(l,r){if(1&l){const n=t.EpF();t.TgZ(0,"blockcore-block",36),t._UZ(1,"mat-icon",37),t.TgZ(2,"div",38),t.TgZ(3,"div",39),t.TgZ(4,"a",40),t.NdJ("click",function(){const p=t.CHM(n).$implicit;return t.oxw(3).showBlockDetails(p.blockHash)}),t._uU(5),t.qZA(),t._uU(6," | "),t.TgZ(7,"a",40),t.NdJ("click",function(){const p=t.CHM(n).$implicit;return t.oxw(3).showBlockDetails(p.blockHash)}),t._uU(8),t.ALo(9,"slice"),t.qZA(),t.qZA(),t.TgZ(10,"div",41),t._uU(11),t.ALo(12,"date"),t.qZA(),t.qZA(),t.TgZ(13,"div",33),t.TgZ(14,"div",42),t.ynx(15),t.TgZ(16,"div",43),t.TgZ(17,"div",44),t._uU(18,"Transaction Count:"),t.qZA(),t.TgZ(19,"div",45),t._uU(20),t.qZA(),t.qZA(),t.BQk(),t.qZA(),t.qZA(),t._UZ(21,"div",46),t.qZA()}if(2&l){const n=r.$implicit;t.xp6(1),t.Q6J("svgIcon","heroicons_outline:cube"),t.xp6(4),t.Oqu(n.blockIndex),t.xp6(3),t.Oqu(t.Dn7(9,6,n.blockHash,0,20)),t.xp6(3),t.Oqu(t.xi3(12,10,1e3*n.blockTime,"dd/MM/yyyy hh:mm")),t.xp6(8),t.MGl("matTooltip","Transaction Count: ",n.transactionCount,""),t.xp6(1),t.hij(" ",n.transactionCount,"")}}function F(l,r){1&l&&t._UZ(0,"app-progress")}function z(l,r){if(1&l){const n=t.EpF();t.TgZ(0,"div",26),t.TgZ(1,"div",27),t.TgZ(2,"div",18),t.YNc(3,R,8,2,"blockcore-block",28),t.qZA(),t.TgZ(4,"div",29),t.NdJ("onScroll",function(d){return t.CHM(n),t.oxw(2).onScroll(d)}),t.YNc(5,K,22,13,"blockcore-block",30),t.YNc(6,F,1,0,"app-progress",24),t.qZA(),t.qZA(),t.qZA()}if(2&l){const n=t.oxw(2);t.xp6(3),t.Q6J("ngIf",n.address),t.xp6(1),t.Q6J("bottomOffset",400)("topOffset",400),t.xp6(1),t.Q6J("ngForOf",n.blocks),t.xp6(1),t.Q6J("ngIf",n.loading)}}function X(l,r){if(1&l&&(t.TgZ(0,"div",49),t.TgZ(1,"textarea",50),t._uU(2),t.ALo(3,"json"),t.qZA(),t.qZA()),2&l){const n=t.oxw(3);t.xp6(2),t.hij("                                ",t.lcZ(3,1,n.displayBlock),"\n                            ")}}function $(l,r){if(1&l&&(t.TgZ(0,"div"),t.TgZ(1,"blockcore-block",47),t._UZ(2,"mat-icon",32),t.TgZ(3,"div",33),t.TgZ(4,"div",34),t.TgZ(5,"span"),t._uU(6),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(7,X,4,3,"div",48),t.qZA()),2&l){const n=t.oxw(2);t.xp6(2),t.Q6J("svgIcon","heroicons_outline:clipboard-list"),t.xp6(4),t.hij("Block Hash: ",n.displayBlock.blockHash,": "),t.xp6(1),t.Q6J("ngIf",n.transaction.logs)}}function G(l,r){if(1&l&&(t.TgZ(0,"div",20),t.TgZ(1,"div",21),t._UZ(2,"app-search"),t.YNc(3,Y,2,0,"app-progress",22),t.YNc(4,z,7,5,"div",23),t.YNc(5,$,8,3,"div",24),t.qZA(),t.qZA()),2&l){const n=t.oxw();t.xp6(3),t.Q6J("ngIf",!n.blocks),t.xp6(1),t.Q6J("ngIf",n.blocks),t.xp6(1),t.Q6J("ngIf",n.displayBlock)}}const V=[{path:"",component:(()=>{class l{constructor(n,e){this.api=n,this.setup=e,this.hostClass=!0,this.blocks=null,this.count=0,this.maxCount=2,this.limit=20,this.loading=!1}scrollHandler(n){console.log("Scroll Event")}ngOnInit(){var n=this;return(0,f.Z)(function*(){n.subscription=n.setup.currentChain$.subscribe(function(){var e=(0,f.Z)(function*(d){yield n.updateBlocks("/api/query/block/orphan?offset=&limit="+n.limit)});return function(d){return e.apply(this,arguments)}}())})()}ngOnDestroy(){clearTimeout(this.timerInfo),clearTimeout(this.timerBlocks),this.subscription.unsubscribe()}updateBlocks(n){var e=this;return(0,f.Z)(function*(){if(console.log("url: ",n),!n)return;const d=e.api.baseUrl.replace("/api",""),p=yield e.api.request(d+n);e.total=p.headers.get("Pagination-Total");const U=p.headers.get("Link"),nt=e.api.parseLinkHeader(U);e.link=nt.previous;const D=yield p.json();D.sort((E,M)=>M.blockIndex===E.blockIndex?0:M.blockIndex<E.blockIndex?-1:M.blockIndex>E.blockIndex?1:void 0),e.blocks||(e.blocks=[]),e.blocks=[...e.blocks,...D],e.count++})()}showBlockDetails(n){var e=this;return(0,f.Z)(function*(){const d=e.api.baseUrl.replace("/api",""),p=yield e.api.request(d+"/api/query/block/orphan/"+n);e.displayBlock=yield p.json()})()}onScroll(n){var e=this;return(0,f.Z)(function*(){console.log("scroll occurred",n),n.isReachingBottom&&(console.log("the user is reaching the bottom"),e.loading=!0,setTimeout((0,f.Z)(function*(){yield e.updateBlocks(e.link),e.loading=!1}))),n.isReachingTop&&console.log("the user is reaching the top"),n.isWindowEvent&&console.log("This event is fired on Window not on an element.")})()}}return l.\u0275fac=function(n){return new(n||l)(t.Y36(L.s),t.Y36(N.U))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-orphans-component"]],hostVars:2,hostBindings:function(n,e){1&n&&t.NdJ("scroll",function(p){return e.scrollHandler(p)}),2&n&&t.ekj("content-centered-top",e.hostClass)},decls:21,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],[1,"w-full","h-full",3,"src"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3","hidden","md:block"],["target","_blank",3,"href"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],["class","flex flex-col flex-auto w-full",4,"ngIf"],[1,"flex","items-center"],[1,"ml-1.5","leading-6","truncate","text-secondary"],[1,"flex","flex-col","flex-auto","w-full"],[1,"w-full","max-w-screen-xl","mx-auto","p-6","md:p-8"],["class","centered",4,"ngIf"],["class","grid grid-cols-1 xl:grid-cols-1 gap-8 w-full mt-8",4,"ngIf"],[4,"ngIf"],[1,"centered"],[1,"grid","grid-cols-1","xl:grid-cols-1","gap-8","w-full","mt-8"],[1,"flex","flex-col","flex-auto"],["class","flex items-center w-full p-6 filter-info mt-8",4,"ngIf"],["appDetectScroll","",3,"bottomOffset","topOffset","onScroll"],["class","flex items-center w-full p-6 filter-info justify-between",4,"ngFor","ngForOf"],[1,"flex","items-center","w-full","p-6","filter-info","mt-8"],[1,"icon-size-16","mr-6","text-blue-500",3,"svgIcon"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight","break-all"],[1,"text-primary"],[1,"flex","items-center","w-full","p-6","filter-info","justify-between"],[1,"icon-size-12","mr-6",3,"svgIcon"],[1,"flex","flex-col","w-full"],[1,"text-2xl","font-semibold","leading-tight","text-primary","break-all"],[2,"cursor","pointer",3,"click"],[1,"text-md","text-secondary"],[1,"text-1xl","font-semibold","leading-tight"],[1,"font-semibold","tracking-tight","leading-7","md:leading-snug","truncate","inline-flex","mat-flat-button"],[1,"hidden","md:block","mr-3"],[1,"inline-flex","text-primary",3,"matTooltip"],[1,"flex"],[1,"flex","items-center","w-full","p-6","filter-info"],["class","prose max-w-full",4,"ngIf"],[1,"prose","max-w-full"],["blockcore-highlight","","lang","json"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7),t.ynx(8),t.TgZ(9,"div",8),t._uU(10),t.qZA(),t.BQk(),t.YNc(11,W,4,2,"div",9),t.qZA(),t.qZA(),t.TgZ(12,"div",10),t.TgZ(13,"a",11),t.TgZ(14,"button",12),t._UZ(15,"mat-icon",13),t.TgZ(16,"span",14),t._uU(17,"Website"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",15),t.TgZ(19,"div",16),t.YNc(20,G,6,3,"div",17),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(6),t.s9C("src",null==e.setup.Chain?null:e.setup.Chain.Icon,t.LSH),t.xp6(4),t.hij(" ",null==e.setup.Chain?null:e.setup.Chain.Symbol," "),t.xp6(1),t.Q6J("ngIf",null==e.setup.Chain?null:e.setup.Chain.Description),t.xp6(2),t.s9C("href",null==e.setup.Chain?null:e.setup.Chain.Url,t.LSH),t.xp6(1),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-double-right"),t.xp6(5),t.Q6J("ngIf",e.setup.chains))},directives:[h.O5,Z.Hw,i.lW,Q.g,S.t,j.f,h.sg,B.gM],pipes:[h.OU,h.uU,h.Ts],encapsulation:2}),l})()}];let tt=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[v.Bz.forChild(V),i.ot,C.vV,A.t,Z.Ps,k.Tx,T.Cv,y.si,O.SJ,g.JX,I.p0,u.Nh,s.X,_.y4,a.m,m.LD,c.c,b.d,B.AV,w.ZX,P.t,q.q,H.T]]}),l})()},9364:(J,x,o)=>{o.d(x,{g:()=>I});var v=o(5861),i=o(5e3),C=o(5830),A=o(9205),Z=o(4521),k=o(7261),T=o(7322),y=o(5245),O=o(7531),g=o(3075);let I=(()=>{class u{constructor(s,a,m,c){this.api=s,this.setup=a,this.router=m,this._snackBar=c,this.scheme=JSON.parse(localStorage.getItem("config")).scheme}ngOnDestroy(){}ngOnInit(){return(0,v.Z)(function*(){})()}inputType(s){return s.startsWith(this.setup.Network.NetworkWitnessPrefix)?"address":s.length<20?"index":s.length>30&&s.length<54?"address":"hash"}search(){var s=this;return(0,v.Z)(function*(){const a=s.searchTerm;switch(s.inputType(a)){case"index":{const c=parseInt(a,10);NaN!==c&&c>0?s.router.navigate([s.setup.current,"explorer","block",c]):s._snackBar.open("Explorer cannot detect your data type","retry",{duration:3e3,panelClass:[s.scheme]});break}case"address":s.router.navigate([s.setup.current,"explorer","address",a]);break;case"hash":{let c=null;try{c=yield s.api.getBlockByHash(a)}catch(b){}if(c)s.router.navigate([s.setup.current,"explorer","block",c.blockHash]);else{const b=yield s.api.getTransaction(a);s.router.navigate([s.setup.current,"explorer","transaction",b.transactionId])}break}default:s._snackBar.open("Explorer cannot detect your data type","retry",{duration:3e3,panelClass:[s.scheme]})}})()}}return u.\u0275fac=function(s){return new(s||u)(i.Y36(C.s),i.Y36(A.U),i.Y36(Z.F0),i.Y36(k.ux))},u.\u0275cmp=i.Xpm({type:u,selectors:[["app-search"]],decls:8,vars:3,consts:[[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-1","gap-6","w-full","min-w-0","mb-6"],[1,"flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"flex","flex-col","sm:flex-row","items-center","justify-between","w-full","max-w-full","sm:max-w-none"],[1,"blockcore-mat-no-subscript","w-full","sm:w-full","mt-6","sm:mt-6","mb-6","sm:mb-6","sm:ml-4",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["type","search","placeholder","Search for address, transaction or block.","autocomplete","off","matInput","",3,"ngModel","keyup.enter","ngModelChange"],["query",""]],template:function(s,a){1&s&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"div",3),i.TgZ(4,"mat-form-field",4),i._UZ(5,"mat-icon",5),i.TgZ(6,"input",6,7),i.NdJ("keyup.enter",function(){return a.search()})("ngModelChange",function(c){return a.searchTerm=c}),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&s&&(i.xp6(4),i.Q6J("floatLabel","always"),i.xp6(1),i.Q6J("svgIcon","heroicons_solid:search"),i.xp6(1),i.Q6J("ngModel",a.searchTerm))},directives:[T.KE,y.Hw,T.qo,O.Nt,g.Fj,g.JJ,g.On],encapsulation:2}),u})()}}]);