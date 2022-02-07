"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[485],{7485:(j,c,n)=>{n.r(c),n.d(c,{HomeModule:()=>R});var d=n(4521),u=n(7423),A=n(9832),b=n(4834),f=n(5245),T=n(2181),y=n(5899),m=n(508),w=n(2638),H=n(4847),S=n(4999),s=n(3251),g=n(7455),C=n(1244),q=n(4466),F=n(7579),J=n(2722),a=n(3075),t=n(5e3),B=n(1135),Q=n(8505),U=n(520);let v=(()=>{class e{constructor(o){this._httpClient=o,this._data=new B.X(null)}get data$(){return this._data.asObservable()}getData(){return this._httpClient.get("https://chains.blockcore.net/CHAINS.json").pipe((0,Q.b)(o=>{this._data.next(o)}))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(U.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h=n(7322),x=n(4107),I=n(9808),p=n(7531);function N(e,l){if(1&e&&(t.ynx(0),t.TgZ(1,"div",23),t._uU(2),t.qZA(),t.BQk()),2&e){const o=l.$implicit;t.xp6(2),t.hij(" ",o("welcome-to")," Blockcore Explorer!")}}function O(e,l){if(1&e&&(t.ynx(0),t.TgZ(1,"mat-option",29),t._uU(2),t.qZA(),t.BQk()),2&e){const o=l.$implicit;t.xp6(1),t.Q6J("value",o.symbol),t.xp6(1),t.Oqu(o.name)}}function Y(e,l){if(1&e&&(t.ynx(0),t.TgZ(1,"div",36),t.TgZ(2,"div",37),t.TgZ(3,"div",38),t._UZ(4,"img",39),t.qZA(),t.TgZ(5,"div",40),t._uU(6),t.qZA(),t.TgZ(7,"div",41),t._uU(8),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&e){const o=l.$implicit;t.xp6(4),t.Q6J("src",o.icon,t.LSH),t.xp6(2),t.Oqu(o.name),t.xp6(2),t.Oqu(o.symbol)}}function D(e,l){if(1&e&&(t.TgZ(0,"div",24),t.TgZ(1,"div",25),t.TgZ(2,"div",19),t.TgZ(3,"form",26),t.TgZ(4,"div",27),t.TgZ(5,"mat-form-field",28),t.TgZ(6,"mat-select",29),t.TgZ(7,"mat-option",29),t._uU(8,"Bitcoin"),t.qZA(),t.YNc(9,O,3,2,"ng-container",30),t.qZA(),t.qZA(),t.TgZ(10,"mat-form-field",31),t._UZ(11,"mat-icon",32),t._UZ(12,"input",33,34),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",35),t.YNc(15,Y,9,3,"ng-container",30),t.qZA()),2&e){const o=t.oxw();t.xp6(3),t.Q6J("formGroup",o.searchForm),t.xp6(3),t.Q6J("value","BTC"),t.xp6(1),t.Q6J("value","BTC"),t.xp6(2),t.Q6J("ngForOf",o.data),t.xp6(1),t.Q6J("floatLabel","always"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:search"),t.xp6(4),t.Q6J("ngForOf",o.data)}}const L=[{path:"",component:(()=>{class e{constructor(o,r,i){this._homeService=o,this._router=r,this._formBuilder=i,this.chartprice={},this.chartTaskDistribution={},this.chartBudgetDistribution={},this.chartWeeklyExpenses={},this.chartMonthlyExpenses={},this.chartYearlyExpenses={},this.selectNetwork="Select Network",this._unsubscribeAll=new F.x}ngOnInit(){this.searchForm=this._formBuilder.group({name:["Brian Hughes"],username:["brianh"],title:["Senior Frontend Developer"],company:["YXZ Software"],about:["Hey! This is Brian; husband, father and gamer. I'm mostly passionate about bleeding edge tech and chocolate! \u{1f36b}"],email:["hughes.brian@mail.com",a.kI.email],phone:["121-490-33-12"],country:["usa"],language:["english"]}),this._homeService.data$.pipe((0,J.R)(this._unsubscribeAll)).subscribe(o=>{this.data=o}),window.Apex={chart:{events:{mounted:(o,r)=>{this._fixSvgFill(o.el)},updated:(o,r)=>{this._fixSvgFill(o.el)}}}}}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}trackByFn(o,r){return r.id||o}_fixSvgFill(o){const r=this._router.url;Array.from(o.querySelectorAll("*[fill]")).filter(i=>-1!==i.getAttribute("fill").indexOf("url(")).forEach(i=>{const Z=i.getAttribute("fill");i.setAttribute("fill",`url(${r}${Z.slice(Z.indexOf("#"))}`)})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(v),t.Y36(d.F0),t.Y36(a.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["home"]],decls:28,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],["src","assets/images/logo/logo.svg",1,"w-full","h-full"],[1,"flex","flex-col","min-w-0","ml-4"],[4,"transloco"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["mat-flat-button","",1,"blockcore-mat-button-rounded","bg-accent-700",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],["matRipple","",1,"relative","flex","self-start","pt-2","pb-1","pl-5","pr-4","cursor-pointer","overflow-hidden","rounded-t-xl","border","border-b-0","bg-default"],[1,"flex","items-center"],[1,"overflow-hidden"],[1,"font-medium","leading-6","truncate"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"sm:px-2",3,"animationDuration"],[3,"label"],["matTabContent",""],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-1","gap-6","w-full","min-w-0","mb-6"],[1,"flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden"],[3,"formGroup"],[1,"flex","flex-col","sm:flex-row","items-center","justify-between","w-full","max-w-full","sm:max-w-none"],[1,"blockcore-mat-no-subscript","w-full","sm:w-36"],[3,"value"],[4,"ngFor","ngForOf"],[1,"blockcore-mat-no-subscript","w-full","sm:w-full","mt-6","sm:mt-6","mb-6","sm:mb-6","sm:ml-4",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["placeholder","Search for address, transaction or block.","autocomplete","off","matInput",""],["query",""],[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-6","gap-6","w-full","min-w-0"],[1,"flex","flex-col","flex-auto","items-center","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","flex-col","flex-auto","w-full","p-8","text-center"],[1,"w-12","h-12","mx-auto","overflow-hidden"],[1,"w-full","h-full","object-cover",3,"src"],[1,"mt-6","font-medium"],[1,"text-secondary"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7),t.YNc(8,N,3,1,"ng-container",8),t.qZA(),t.qZA(),t.TgZ(9,"div",9),t.TgZ(10,"button",10),t._UZ(11,"mat-icon",11),t.TgZ(12,"span",12),t._uU(13,"Contact"),t.qZA(),t.qZA(),t.TgZ(14,"button",13),t._UZ(15,"mat-icon",11),t.TgZ(16,"span",12),t._uU(17,"Blockcore"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",14),t.TgZ(19,"div",15),t.TgZ(20,"div",16),t.TgZ(21,"div",17),t._uU(22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",18),t.TgZ(24,"div",19),t.TgZ(25,"mat-tab-group",20),t.TgZ(26,"mat-tab",21),t.YNc(27,D,16,7,"ng-template",22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(10),t.Q6J("color","accent"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:mail"),t.xp6(3),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-double-right"),t.xp6(7),t.Oqu(r.selectNetwork),t.xp6(3),t.Q6J("animationDuration","0"),t.xp6(1),t.s9C("label",r.selectNetwork))},directives:[g.KI,u.lW,f.Hw,m.wG,s.SP,s.uX,s.Vc,a._Y,a.JL,a.sg,h.KE,x.gD,m.ey,I.sg,h.qo,p.Nt],encapsulation:2,changeDetection:0}),e})(),resolve:{data:(()=>{class e{constructor(o){this._homeService=o}resolve(o,r){return this._homeService.getData()}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(v))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}];let R=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.Bz.forChild(L),u.ot,A.vV,b.t,f.Ps,T.Tx,y.Cv,m.si,w.SJ,H.JX,S.p0,s.Nh,C.X,g.y4,q.m,x.LD,p.c]]}),e})()}}]);