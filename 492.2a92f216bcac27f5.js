"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[492],{6492:(mt,r,i)=>{i.r(r),i.d(r,{TransactionModule:()=>rt});var s=i(4521),p=i(7423),f=i(9832),v=i(4834),g=i(5245),A=i(2181),h=i(5899),Z=i(508),_=i(2638),b=i(4847),C=i(4999),l=i(3251),q=i(7455),k=i(1244),U=i(4466),I=i(4107),J=i(7531),y=i(9828),Q=i(7238),Y=i(7261),N=i(9837),O=i(7237),L=i(5486),m=i(5861),t=i(5e3),V=i(5830),D=i(9205),R=i(9808),P=i(9364),w=i(1743),B=i(1656),H=i(7338),M=i(5769);let S=(()=>{class n{transform(o){return o?"Yes":"No"}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275pipe=t.Yjl({name:"yes",type:n,pure:!0}),n})();function z(n,e){if(1&n&&(t.TgZ(0,"div",16),t._UZ(1,"mat-icon",13),t.TgZ(2,"div",24),t._uU(3),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("svgIcon","heroicons_solid:badge-check"),t.xp6(2),t.Oqu(null==o.setup.Chain?null:o.setup.Chain.Description)}}function F(n,e){1&n&&t._UZ(0,"app-progress")}function j(n,e){if(1&n&&(t.TgZ(0,"blockcore-block",29),t._UZ(1,"mat-icon",30),t.TgZ(2,"div",31),t.TgZ(3,"div",32),t.TgZ(4,"span"),t._uU(5,"Transaction Id: "),t.qZA(),t.TgZ(6,"span",33),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const o=t.oxw(2);t.xp6(1),t.Q6J("svgIcon","heroicons_outline:document-text"),t.xp6(6),t.Oqu(o.transaction.transactionId)}}function E(n,e){if(1&n&&(t.TgZ(0,"div",16),t._UZ(1,"mat-icon",45),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Age: "),t.qZA(),t.TgZ(5,"span",46),t._uU(6),t.ALo(7,"ago"),t.qZA(),t.qZA(),t.qZA()),2&n){const o=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(t.lcZ(7,2,o.transaction.timestamp))}}function X(n,e){if(1&n&&(t.TgZ(0,"div",16),t._UZ(1,"mat-icon",45),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Date: "),t.qZA(),t.TgZ(5,"span",46),t._uU(6),t.ALo(7,"timestamp"),t.qZA(),t.qZA(),t.qZA()),2&n){const o=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(t.lcZ(7,2,o.transaction.timestamp))}}const d=function(n){return["../../block",n]};function G(n,e){if(1&n&&(t.TgZ(0,"div",16),t._UZ(1,"mat-icon",45),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Block: "),t.qZA(),t.TgZ(5,"span",46),t.TgZ(6,"a",39),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const o=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Q6J("routerLink",t.VKq(3,d,o.transaction.blockIndex)),t.xp6(1),t.Oqu(o.transaction.blockIndex)}}const K=function(){return["../../mempool"]};function W(n,e){1&n&&(t.TgZ(0,"div",16),t._UZ(1,"mat-icon",45),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Block: "),t.qZA(),t.TgZ(5,"span",46),t.TgZ(6,"a",39),t._uU(7,"Mempool"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Q6J("routerLink",t.DdM(2,K)))}function $(n,e){1&n&&(t.TgZ(0,"div",16),t._UZ(1,"mat-icon",45),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Type: "),t.qZA(),t.TgZ(5,"span",46),t._uU(6,"CoinBase"),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"))}function tt(n,e){1&n&&(t.TgZ(0,"div",16),t._UZ(1,"mat-icon",45),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Type: "),t.qZA(),t.TgZ(5,"span",46),t._uU(6,"CoinStake"),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"))}function nt(n,e){1&n&&(t.TgZ(0,"span"),t._uU(1,"View"),t.qZA())}function ot(n,e){1&n&&(t.TgZ(0,"span"),t._uU(1,"Hide"),t.qZA())}function it(n,e){if(1&n&&(t.TgZ(0,"div",16),t._UZ(1,"mat-icon",45),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Unit Timestamp: "),t.qZA(),t.TgZ(5,"span",46),t._uU(6),t.qZA(),t.qZA(),t.qZA()),2&n){const o=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(o.transaction.timestamp)}}function et(n,e){if(1&n&&(t.TgZ(0,"div",16),t._UZ(1,"mat-icon",45),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"LockTime: "),t.qZA(),t.TgZ(5,"span",46),t._uU(6),t.qZA(),t.qZA(),t.qZA()),2&n){const o=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(o.transaction.lockTime)}}function at(n,e){if(1&n&&(t.TgZ(0,"div",16),t._UZ(1,"mat-icon",45),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Replace by Fee: "),t.qZA(),t.TgZ(5,"span",46),t._uU(6),t.ALo(7,"yes"),t.qZA(),t.qZA(),t.qZA()),2&n){const o=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(t.lcZ(7,2,o.transaction.rbf))}}function ct(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"blockcore-block",34),t.TgZ(1,"div",35),t.TgZ(2,"div",36),t._UZ(3,"mat-icon",37),t.TgZ(4,"div",38),t.TgZ(5,"span"),t.TgZ(6,"a",39),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div",40),t.TgZ(9,"div",41),t._uU(10,"Transaction Details"),t.qZA(),t.TgZ(11,"div",42),t.TgZ(12,"p",43),t._uU(13),t.qZA(),t.qZA(),t.TgZ(14,"div",44),t.YNc(15,E,8,4,"div",9),t.YNc(16,X,8,4,"div",9),t.YNc(17,G,8,5,"div",9),t.YNc(18,W,8,3,"div",9),t.TgZ(19,"div",16),t._UZ(20,"mat-icon",45),t.TgZ(21,"div",14),t.TgZ(22,"span"),t._uU(23,"Confirmations: "),t.qZA(),t.TgZ(24,"span",46),t._uU(25),t.qZA(),t.qZA(),t.qZA(),t.YNc(26,$,7,1,"div",9),t.YNc(27,tt,7,1,"div",9),t.qZA(),t.TgZ(28,"div",47),t.TgZ(29,"div",48),t.TgZ(30,"a",49),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).toggleDetails()}),t.YNc(31,nt,2,0,"span",26),t.YNc(32,ot,2,0,"span",26),t._uU(33," details"),t.qZA(),t.qZA(),t._UZ(34,"div",50),t.qZA(),t.TgZ(35,"div",51),t.YNc(36,it,7,2,"div",9),t.YNc(37,et,7,2,"div",9),t.YNc(38,at,8,4,"div",9),t.qZA(),t.qZA(),t.qZA()}if(2&n){const o=t.oxw(2);t.xp6(3),t.Q6J("svgIcon","heroicons_outline:cube"),t.xp6(3),t.Q6J("routerLink",t.VKq(17,d,o.transaction.blockIndex)),t.xp6(1),t.Oqu(o.transaction.blockIndex),t.xp6(6),t.hij("block Hash: ",o.transaction.blockHash,""),t.xp6(2),t.Q6J("ngIf",0!==o.transaction.timestamp),t.xp6(1),t.Q6J("ngIf",0!==o.transaction.timestamp),t.xp6(1),t.Q6J("ngIf",o.transaction.blockIndex),t.xp6(1),t.Q6J("ngIf",!o.transaction.blockIndex),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(o.transaction.confirmations),t.xp6(1),t.Q6J("ngIf",o.transaction.isCoinbase),t.xp6(1),t.Q6J("ngIf",o.transaction.isCoinstake),t.xp6(4),t.Q6J("ngIf",!o.detailsVisible),t.xp6(1),t.Q6J("ngIf",o.detailsVisible),t.xp6(4),t.Q6J("ngIf",o.detailsVisible),t.xp6(1),t.Q6J("ngIf",o.detailsVisible),t.xp6(1),t.Q6J("ngIf",o.detailsVisible)}}function st(n,e){if(1&n&&(t._UZ(0,"app-search"),t._UZ(1,"app-error",25),t.YNc(2,F,1,0,"app-progress",26),t.YNc(3,j,8,2,"blockcore-block",27),t.YNc(4,ct,39,19,"blockcore-block",28)),2&n){const o=t.oxw();t.xp6(1),t.Q6J("error",o.error),t.xp6(1),t.Q6J("ngIf",!o.transaction),t.xp6(1),t.Q6J("ngIf",o.transaction),t.xp6(1),t.Q6J("ngIf",o.transaction)}}const lt=[{path:"",component:(()=>{class n{constructor(o,a,u,pt){var c=this;this.api=o,this.router=a,this.setup=u,this.activatedRoute=pt,this.hostClass=!0,this.detailsVisible=!1,this.activatedRoute.paramMap.subscribe(function(){var gt=(0,m.Z)(function*(T){const x=T.get("transaction");console.log("Transaction ID:",x);try{c.transaction=yield c.api.getTransaction(x),2===c.transaction.outputs.length&&("OP_CALLCONTRACT"===c.transaction.outputs[0].outputType&&(c.transaction.hasContract=!0),"OP_CREATECONTRACT"===c.transaction.outputs[0].outputType&&(c.transaction.hasContract=!0),"OP_CALLCONTRACT"===c.transaction.outputs[1].outputType&&(c.transaction.hasContract=!0),"OP_CREATECONTRACT"===c.transaction.outputs[1].outputType&&(c.transaction.hasContract=!0)),c.error=null}catch(Zt){c.error=Zt}console.log(c.transaction)});return function(T){return gt.apply(this,arguments)}}())}ngOnInit(){return(0,m.Z)(function*(){})()}toggleDetails(){this.detailsVisible=!this.detailsVisible}ngOnDestroy(){}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(V.s),t.Y36(s.F0),t.Y36(D.U),t.Y36(s.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-transaction-component"]],hostVars:2,hostBindings:function(o,a){2&o&&t.ekj("content-centered-top",a.hostClass)},decls:28,vars:8,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],[1,"w-full","h-full",3,"src"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["target","_blank","target","_blank",3,"href"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["matRipple","",1,"relative","flex","self-start","pt-2","pb-1","pl-5","pr-4","cursor-pointer","overflow-hidden","rounded-t-xl","border","border-b-0","bg-default"],[1,"flex","items-center"],[1,"overflow-hidden"],[1,"font-medium","leading-6","truncate"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"sm:px-2",3,"animationDuration"],[3,"label"],["matTabContent",""],[1,"ml-1.5","leading-6","truncate","text-secondary"],[1,"centered",3,"error"],[4,"ngIf"],["class","flex items-center w-full p-6 filter-info ",4,"ngIf"],["class","flex flex-col lg:flex-row w-full",4,"ngIf"],[1,"flex","items-center","w-full","p-6","filter-info"],[1,"icon-size-22","mr-6","text-blue-500",3,"svgIcon"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight","break-all"],[1,"text-primary"],[1,"flex","flex-col","lg:flex-row","w-full"],[1,"flex","flex-col","items-center","p-8","lg:px-10","lg:py-12","lg:min-w-80","bg-gray-100","dark:bg-black","dark:bg-opacity-10"],[1,"flex","items-center","whitespace-nowrap"],[1,"icon-size-14","mr-6","text-blue-500",3,"svgIcon"],[1,"text-4xl","font-extrabold","tracking-tight"],[3,"routerLink"],[1,"p-6","sm:p-8","lg:p-10"],[1,"text-3xl","font-bold"],[1,"mt-2","leading-relaxed","text-secondary"],[1,"break-all"],[1,"grid","grid-cols-1","lg:grid-cols-2","gap-y-4","mt-6"],[1,"icon-size-5","text-primary",3,"svgIcon"],[1,"text-primary","break-all"],[1,"flex","items-center","mt-10"],[1,"font-medium","text-secondary"],[3,"click"],[1,"flex-auto","ml-2","border-b-2"],[1,"grid","grid-cols-1","lg:grid-cols-2","gap-y-4","mt-4"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7),t.ynx(8),t.TgZ(9,"div",8),t._uU(10),t.qZA(),t.BQk(),t.YNc(11,z,4,2,"div",9),t.qZA(),t.qZA(),t.TgZ(12,"div",10),t.TgZ(13,"a",11),t.TgZ(14,"button",12),t._UZ(15,"mat-icon",13),t.TgZ(16,"span",14),t._uU(17,"Website"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",15),t.TgZ(19,"div",16),t.TgZ(20,"div",17),t.TgZ(21,"div",18),t._uU(22,"Insight"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",19),t.TgZ(24,"div",20),t.TgZ(25,"mat-tab-group",21),t.TgZ(26,"mat-tab",22),t.YNc(27,st,5,4,"ng-template",23),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(6),t.s9C("src",null==a.setup.Chain?null:a.setup.Chain.Icon,t.LSH),t.xp6(4),t.hij(" ",null==a.setup.Chain?null:a.setup.Chain.Symbol," "),t.xp6(1),t.Q6J("ngIf",null==a.setup.Chain?null:a.setup.Chain.Description),t.xp6(2),t.s9C("href",null==a.setup.Chain?null:a.setup.Chain.Url,t.LSH),t.xp6(1),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-double-right"),t.xp6(10),t.Q6J("animationDuration","0"),t.xp6(1),t.s9C("label",null==a.setup.Chain?null:a.setup.Chain.Name))},directives:[R.O5,g.Hw,p.lW,Z.wG,l.SP,l.uX,l.Vc,P.g,w.q,B.t,s.yS],pipes:[H.n,M.d,S],encapsulation:2}),n})()}];let rt=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.Bz.forChild(lt),p.ot,f.vV,v.t,g.Ps,A.Tx,h.Cv,Z.si,_.SJ,b.JX,C.p0,l.Nh,k.X,q.y4,U.m,I.LD,J.c,y.d,Q.AV,Y.ZX,N.t,O.q,L.T]]}),n})()}}]);