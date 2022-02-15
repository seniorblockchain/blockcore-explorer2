"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[114],{5114:(Q,a,n)=>{n.r(a),n.d(a,{ChainAPIModule:()=>q});var r=n(4521),u=n(7423),m=n(9832),p=n(4834),c=n(5245),d=n(2181),x=n(5899),h=n(508),g=n(2638),f=n(4847),Z=n(4999),s=n(3251),v=n(7455),A=n(1244),C=n(4466),I=n(7579),t=n(5e3),T=n(5830),b=n(9205),P=n(9808);function y(e,i){if(1&e&&(t.TgZ(0,"div",16),t._UZ(1,"mat-icon",13),t.TgZ(2,"div",24),t._uU(3),t.qZA(),t.qZA()),2&e){const l=t.oxw();t.xp6(1),t.Q6J("svgIcon","heroicons_solid:badge-check"),t.xp6(2),t.Oqu(null==l.setup.Chain?null:l.setup.Chain.Description)}}function U(e,i){if(1&e&&(t.TgZ(0,"p"),t.TgZ(1,"a",26),t._uU(2),t.qZA(),t.qZA()),2&e){const l=t.oxw(2);t.xp6(1),t.Q6J("href",l.setup.Explorer.Indexer.DocUrl,t.LSH),t.xp6(1),t.Oqu(l.setup.Explorer.Indexer.DocUrl)}}function D(e,i){if(1&e&&(t.TgZ(0,"h1"),t._uU(1,"API"),t.qZA(),t.TgZ(2,"p"),t._uU(3," This block explorer relies on the API exposed by a blockchain indexer. "),t.qZA(),t.TgZ(4,"p"),t._uU(5," If you'd like to call this API directly, you can read the documentation for here: "),t.qZA(),t.YNc(6,U,3,2,"p",25)),2&e){const l=t.oxw();t.xp6(6),t.Q6J("ngIf",null==l.setup.Explorer||null==l.setup.Explorer.Indexer?null:l.setup.Explorer.Indexer.DocUrl)}}const J=[{path:"",component:(()=>{class e{constructor(l,o,E){this._router=l,this.api=o,this.setup=E,this.chartprice={},this.chartTaskDistribution={},this.chartBudgetDistribution={},this.chartWeeklyExpenses={},this.chartMonthlyExpenses={},this.chartYearlyExpenses={},this.chainAPILable="ChainAPI",this.chainAPI={},this._unsubscribeAll=new I.x}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}ngOnInit(){}}return e.\u0275fac=function(l){return new(l||e)(t.Y36(r.F0),t.Y36(T.s),t.Y36(b.U))},e.\u0275cmp=t.Xpm({type:e,selectors:[["chainAPI"]],decls:28,vars:8,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],[1,"w-full","h-full",3,"src"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["target","_blank",3,"href"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["matRipple","",1,"relative","flex","self-start","pt-2","pb-1","pl-5","pr-4","cursor-pointer","overflow-hidden","rounded-t-xl","border","border-b-0","bg-default"],[1,"flex","items-center"],[1,"overflow-hidden"],[1,"font-medium","leading-6","truncate"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"sm:px-2",3,"animationDuration"],[3,"label"],["matTabContent",""],[1,"ml-1.5","leading-6","truncate","text-secondary"],[4,"ngIf"],[1,"link",3,"href"]],template:function(l,o){1&l&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7),t.ynx(8),t.TgZ(9,"div",8),t._uU(10),t.qZA(),t.BQk(),t.YNc(11,y,4,2,"div",9),t.qZA(),t.qZA(),t.TgZ(12,"div",10),t.TgZ(13,"a",11),t.TgZ(14,"button",12),t._UZ(15,"mat-icon",13),t.TgZ(16,"span",14),t._uU(17,"Website"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",15),t.TgZ(19,"div",16),t.TgZ(20,"div",17),t.TgZ(21,"div",18),t._uU(22,"API"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",19),t.TgZ(24,"div",20),t.TgZ(25,"mat-tab-group",21),t.TgZ(26,"mat-tab",22),t.YNc(27,D,7,1,"ng-template",23),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&l&&(t.xp6(6),t.s9C("src",null==o.setup.Chain?null:o.setup.Chain.Icon,t.LSH),t.xp6(4),t.hij(" ",null==o.setup.Chain?null:o.setup.Chain.Symbol," "),t.xp6(1),t.Q6J("ngIf",null==o.setup.Chain?null:o.setup.Chain.Description),t.xp6(2),t.s9C("href",null==o.setup.Chain?null:o.setup.Chain.Url,t.LSH),t.xp6(1),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-double-right"),t.xp6(10),t.Q6J("animationDuration","0"),t.xp6(1),t.s9C("label",null==o.setup.Chain?null:o.setup.Chain.Name))},directives:[P.O5,c.Hw,u.lW,h.wG,s.SP,s.uX,s.Vc],encapsulation:2,changeDetection:0}),e})()}];let q=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[r.Bz.forChild(J),u.ot,m.vV,p.t,c.Ps,d.Tx,x.Cv,h.si,g.SJ,f.JX,Z.p0,s.Nh,A.X,v.y4,C.m]]}),e})()}}]);