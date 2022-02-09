"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[485],{7485:(R,f,n)=>{n.r(f),n.d(f,{HomeModule:()=>N});var m=n(4521),d=n(7423),T=n(9832),b=n(4834),g=n(5245),w=n(2181),y=n(5899),u=n(508),q=n(2638),H=n(4847),C=n(4999),i=n(3251),v=n(7455),J=n(1244),S=n(4466),Q=n(7579),t=n(5e3),F=n(1135),x=n(9205);let p=(()=>{class o{constructor(e){this.setup=e,this._data=new F.X(null)}get data$(){return this.setup.chains.asObservable()}getData(){return this.setup.chains}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(x.U))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var c=n(3075),Z=n(7322),h=n(4107),U=n(9808),A=n(7531);function B(o,l){if(1&o&&(t.ynx(0),t.TgZ(1,"div",23),t._uU(2),t.qZA(),t.BQk()),2&o){const e=l.$implicit;t.xp6(2),t.hij(" ",e("welcome-to")," Blockcore Explorer!")}}function O(o,l){if(1&o&&(t.ynx(0),t.TgZ(1,"mat-option",29),t._uU(2),t.qZA(),t.BQk()),2&o){const e=l.$implicit;t.xp6(1),t.Q6J("value",e.symbol),t.xp6(1),t.Oqu(e.name)}}const Y=function(o){return[o,"ticker"]};function L(o,l){if(1&o&&(t.ynx(0),t.TgZ(1,"div",36),t.TgZ(2,"div",37),t.TgZ(3,"a",38),t.TgZ(4,"div",39),t._UZ(5,"img",40),t.qZA(),t.TgZ(6,"div",41),t._uU(7),t.qZA(),t.TgZ(8,"div",42),t._uU(9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&o){const e=l.$implicit;t.xp6(3),t.Q6J("routerLink",t.VKq(4,Y,"/"+e.symbol.toLowerCase())),t.xp6(2),t.Q6J("src",e.icon,t.LSH),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.symbol)}}function D(o,l){if(1&o&&(t.TgZ(0,"div",24),t.TgZ(1,"div",25),t.TgZ(2,"div",19),t.TgZ(3,"form",26),t.TgZ(4,"div",27),t.TgZ(5,"mat-form-field",28),t.TgZ(6,"mat-select",29),t.TgZ(7,"mat-option",29),t._uU(8,"Bitcoin"),t.qZA(),t.YNc(9,O,3,2,"ng-container",30),t.qZA(),t.qZA(),t.TgZ(10,"mat-form-field",31),t._UZ(11,"mat-icon",32),t._UZ(12,"input",33,34),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",35),t.YNc(15,L,10,6,"ng-container",30),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.Q6J("formGroup",e.searchForm),t.xp6(3),t.Q6J("value","BTC"),t.xp6(1),t.Q6J("value","BTC"),t.xp6(2),t.Q6J("ngForOf",e.setup.chains),t.xp6(1),t.Q6J("floatLabel","always"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:search"),t.xp6(4),t.Q6J("ngForOf",e.setup.chains)}}const I=[{path:"",component:(()=>{class o{constructor(e,r,s,a){this._homeService=e,this._router=r,this._formBuilder=s,this.setup=a,this.chartprice={},this.chartTaskDistribution={},this.chartBudgetDistribution={},this.chartWeeklyExpenses={},this.chartMonthlyExpenses={},this.chartYearlyExpenses={},this.selectNetwork="Select Network",this._unsubscribeAll=new Q.x}ngOnInit(){this.searchForm=this._formBuilder.group({name:["Blockcore"]}),window.Apex={chart:{events:{mounted:(e,r)=>{this._fixSvgFill(e.el)},updated:(e,r)=>{this._fixSvgFill(e.el)}}}}}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}trackByFn(e,r){return r.id||e}_fixSvgFill(e){const r=this._router.url;Array.from(e.querySelectorAll("*[fill]")).filter(s=>-1!==s.getAttribute("fill").indexOf("url(")).forEach(s=>{const a=s.getAttribute("fill");s.setAttribute("fill",`url(${r}${a.slice(a.indexOf("#"))}`)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p),t.Y36(m.F0),t.Y36(c.qu),t.Y36(x.U))},o.\u0275cmp=t.Xpm({type:o,selectors:[["home"]],decls:28,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],["src","assets/images/logo/logo.svg",1,"w-full","h-full"],[1,"flex","flex-col","min-w-0","ml-4"],[4,"transloco"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["mat-flat-button","",1,"blockcore-mat-button-rounded","bg-accent-700",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],["matRipple","",1,"relative","flex","self-start","pt-2","pb-1","pl-5","pr-4","cursor-pointer","overflow-hidden","rounded-t-xl","border","border-b-0","bg-default"],[1,"flex","items-center"],[1,"overflow-hidden"],[1,"font-medium","leading-6","truncate"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"sm:px-2",3,"animationDuration"],[3,"label"],["matTabContent",""],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-1","gap-6","w-full","min-w-0","mb-6"],[1,"flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden"],[3,"formGroup"],[1,"flex","flex-col","sm:flex-row","items-center","justify-between","w-full","max-w-full","sm:max-w-none"],[1,"blockcore-mat-no-subscript","w-full","sm:w-36"],[3,"value"],[4,"ngFor","ngForOf"],[1,"blockcore-mat-no-subscript","w-full","sm:w-full","mt-6","sm:mt-6","mb-6","sm:mb-6","sm:ml-4",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["placeholder","Search for address, transaction or block.","autocomplete","off","matInput",""],["query",""],[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-6","gap-6","w-full","min-w-0"],[1,"flex","flex-col","flex-auto","items-center","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","flex-col","flex-auto","w-full","p-8","text-center"],[3,"routerLink"],[1,"w-12","h-12","mx-auto","overflow-hidden"],[1,"w-full","h-full","object-cover",3,"src"],[1,"mt-6","font-medium"],[1,"text-secondary"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7),t.YNc(8,B,3,1,"ng-container",8),t.qZA(),t.qZA(),t.TgZ(9,"div",9),t.TgZ(10,"button",10),t._UZ(11,"mat-icon",11),t.TgZ(12,"span",12),t._uU(13,"Contact"),t.qZA(),t.qZA(),t.TgZ(14,"button",13),t._UZ(15,"mat-icon",11),t.TgZ(16,"span",12),t._uU(17,"Blockcore"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",14),t.TgZ(19,"div",15),t.TgZ(20,"div",16),t.TgZ(21,"div",17),t._uU(22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",18),t.TgZ(24,"div",19),t.TgZ(25,"mat-tab-group",20),t.TgZ(26,"mat-tab",21),t.YNc(27,D,16,7,"ng-template",22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(10),t.Q6J("color","accent"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:mail"),t.xp6(3),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-double-right"),t.xp6(7),t.Oqu(r.selectNetwork),t.xp6(3),t.Q6J("animationDuration","0"),t.xp6(1),t.s9C("label",r.selectNetwork))},directives:[v.KI,d.lW,g.Hw,u.wG,i.SP,i.uX,i.Vc,c._Y,c.JL,c.sg,Z.KE,h.gD,u.ey,U.sg,Z.qo,A.Nt,m.yS],encapsulation:2,changeDetection:0}),o})(),resolve:{data:(()=>{class o{constructor(e){this._homeService=e}resolve(e,r){return this._homeService.getData()}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(p))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}];let N=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.Bz.forChild(I),d.ot,T.vV,b.t,g.Ps,w.Tx,y.Cv,u.si,q.SJ,H.JX,C.p0,i.Nh,J.X,v.y4,S.m,h.LD,A.c]]}),o})()}}]);