"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[340],{4340:(ln,e,c)=>{c.r(e),c.d(e,{ContractTransactionModule:()=>cn});var r=c(4521),l=c(7423),v=c(9832),T=c(4834),Z=c(5245),m=c(2181),f=c(5899),A=c(508),h=c(2638),q=c(4847),C=c(4999),U=c(3251),I=c(7455),b=c(1244),J=c(4466),k=c(4107),Q=c(7531),y=c(9828),O=c(7238),N=c(7261),Y=c(9837),L=c(7237),V=c(5486),d=c(5861),n=c(5e3),w=c(5830),D=c(9205),g=c(9808),S=c(9364),j=c(1656),B=c(1743),M=c(4421),z=c(745);function F(t,a){if(1&t&&(n.TgZ(0,"div",18),n._UZ(1,"mat-icon",13),n.TgZ(2,"div",19),n._uU(3),n.qZA(),n.qZA()),2&t){const o=n.oxw();n.xp6(1),n.Q6J("svgIcon","heroicons_solid:badge-check"),n.xp6(2),n.Oqu(null==o.setup.Chain?null:o.setup.Chain.Description)}}function H(t,a){1&t&&n._UZ(0,"app-progress")}function K(t,a){if(1&t&&(n.TgZ(0,"blockcore-block",26),n._UZ(1,"mat-icon",27),n.TgZ(2,"div",28),n.TgZ(3,"div",29),n.TgZ(4,"span"),n._uU(5,"Transaction Id: "),n.qZA(),n.TgZ(6,"span",30),n._uU(7),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&t){const o=n.oxw(2);n.xp6(1),n.Q6J("svgIcon","heroicons_outline:document-text"),n.xp6(6),n.Oqu(o.transaction.transactionId)}}const p=function(t){return["../../contract-address",t]};function X(t,a){if(1&t&&(n.TgZ(0,"div",18),n._UZ(1,"mat-icon",40),n.TgZ(2,"div",14),n.TgZ(3,"span"),n._uU(4,"To Addresss: "),n.qZA(),n.TgZ(5,"span",41),n.TgZ(6,"a",42),n._uU(7),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&t){const o=n.oxw(3);n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Q6J("routerLink",n.VKq(3,p,o.transaction.toAddress)),n.xp6(1),n.Oqu(o.transaction.toAddress)}}function R(t,a){if(1&t&&(n.TgZ(0,"div",18),n._UZ(1,"mat-icon",40),n.TgZ(2,"div",14),n.TgZ(3,"span"),n._uU(4,"New Contract Address: "),n.qZA(),n.TgZ(5,"span",41),n.TgZ(6,"a",42),n._uU(7),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&t){const o=n.oxw(3);n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Q6J("routerLink",n.VKq(3,p,o.transaction.newContractAddress)),n.xp6(1),n.Oqu(o.transaction.newContractAddress)}}function W(t,a){if(1&t&&(n.TgZ(0,"div",18),n._UZ(1,"mat-icon",40),n.TgZ(2,"div",14),n.TgZ(3,"span"),n._uU(4,"Error: "),n.qZA(),n.TgZ(5,"span",41),n._uU(6),n.qZA(),n.qZA(),n.qZA()),2&t){const o=n.oxw(3);n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Oqu(o.transaction.error)}}const G=function(t){return["../../block",t]},E=function(t){return["../../","transaction",t]};function P(t,a){if(1&t&&(n.TgZ(0,"blockcore-block",31),n.TgZ(1,"div",32),n.TgZ(2,"div",33),n.TgZ(3,"div",34),n._uU(4,"Transaction Details"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(5,"div",35),n.TgZ(6,"div",36),n._uU(7,"Smart Contract Transaction Details"),n.qZA(),n.TgZ(8,"div",37),n.TgZ(9,"p",38),n._uU(10),n.qZA(),n.qZA(),n.TgZ(11,"div",39),n.TgZ(12,"div",18),n._UZ(13,"mat-icon",40),n.TgZ(14,"div",14),n.TgZ(15,"span"),n._uU(16,"Contract Type: "),n.qZA(),n.TgZ(17,"span",41),n._uU(18),n.qZA(),n.qZA(),n.qZA(),n.TgZ(19,"div",18),n._UZ(20,"mat-icon",40),n.TgZ(21,"div",14),n.TgZ(22,"span"),n._uU(23,"Method Name: "),n.qZA(),n.TgZ(24,"span",41),n._uU(25),n.qZA(),n.qZA(),n.qZA(),n.TgZ(26,"div",18),n._UZ(27,"mat-icon",40),n.TgZ(28,"div",14),n.TgZ(29,"span"),n._uU(30,"Block: "),n.qZA(),n.TgZ(31,"span",41),n.TgZ(32,"a",42),n._uU(33),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(34,"div",18),n._UZ(35,"mat-icon",40),n.TgZ(36,"div",14),n.TgZ(37,"span"),n._uU(38,"Status: "),n.qZA(),n.TgZ(39,"span",41),n._uU(40),n.ALo(41,"success"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(42,"div",18),n._UZ(43,"mat-icon",40),n.TgZ(44,"div",14),n.TgZ(45,"span"),n._uU(46,"Gas Used: "),n.qZA(),n.TgZ(47,"span",41),n._uU(48),n.qZA(),n.qZA(),n.qZA(),n.TgZ(49,"div",18),n._UZ(50,"mat-icon",40),n.TgZ(51,"div",14),n.TgZ(52,"span"),n._uU(53,"From Address: "),n.qZA(),n.TgZ(54,"span",41),n._uU(55),n.qZA(),n.qZA(),n.qZA(),n.YNc(56,X,8,5,"div",9),n.YNc(57,R,8,5,"div",9),n.TgZ(58,"div",18),n._UZ(59,"mat-icon",40),n.TgZ(60,"div",14),n.TgZ(61,"span"),n._uU(62,"View Transaction: "),n.qZA(),n.TgZ(63,"span",41),n.TgZ(64,"a",42),n._uU(65),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.YNc(66,W,7,2,"div",9),n.qZA(),n.qZA(),n.qZA()),2&t){const o=n.oxw(2);n.xp6(10),n.hij("Transaction Id: ",o.transaction.transactionId,""),n.xp6(3),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Oqu(o.transaction.contractCodeType),n.xp6(2),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Oqu(o.transaction.methodName),n.xp6(2),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Q6J("routerLink",n.VKq(22,G,o.transaction.blockIndex)),n.xp6(1),n.Oqu(o.transaction.blockIndex),n.xp6(2),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Oqu(n.lcZ(41,20,o.transaction.success)),n.xp6(3),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Oqu(o.transaction.gasUsed),n.xp6(2),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Oqu(o.transaction.fromAddress),n.xp6(1),n.Q6J("ngIf",o.transaction.toAddress),n.xp6(1),n.Q6J("ngIf",o.transaction.newContractAddress),n.xp6(2),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Q6J("routerLink",n.VKq(24,E,o.transaction.transactionId)),n.xp6(1),n.Oqu(o.transaction.transactionId),n.xp6(1),n.Q6J("ngIf",o.transaction.error)}}function $(t,a){if(1&t&&(n.TgZ(0,"blockcore-block",31),n.TgZ(1,"div",35),n.TgZ(2,"div",36),n._uU(3,"Transaction Logs"),n.qZA(),n.TgZ(4,"div",43),n.TgZ(5,"textarea",44),n._uU(6),n.ALo(7,"json"),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&t){const o=n.oxw(3);n.xp6(6),n.hij("                                              ",n.lcZ(7,1,o.transaction.logs),"\n                                    ")}}function _(t,a){if(1&t&&(n.TgZ(0,"div"),n.YNc(1,$,8,3,"blockcore-block",25),n.qZA()),2&t){const o=n.oxw(2);n.xp6(1),n.Q6J("ngIf",o.transaction.logs)}}function nn(t,a){if(1&t&&(n.TgZ(0,"div",20),n.TgZ(1,"div",21),n._UZ(2,"app-search"),n.YNc(3,H,1,0,"app-progress",22),n.YNc(4,K,8,2,"blockcore-block",23),n._UZ(5,"app-error",24),n.YNc(6,P,67,26,"blockcore-block",25),n.YNc(7,_,2,1,"div",22),n.qZA(),n.qZA()),2&t){const o=n.oxw();n.xp6(3),n.Q6J("ngIf",!o.transaction),n.xp6(1),n.Q6J("ngIf",o.transaction),n.xp6(1),n.Q6J("error",o.error),n.xp6(1),n.Q6J("ngIf",o.transaction),n.xp6(1),n.Q6J("ngIf",o.transaction)}}const tn=[{path:"",component:(()=>{class t{constructor(o,s,an,sn){var i=this;this.api=o,this.router=s,this.setup=an,this.activatedRoute=sn,this.hostClass=!0,this.detailsVisible=!1,this.activatedRoute.paramMap.subscribe(function(){var rn=(0,d.Z)(function*(x){const u=x.get("transaction");console.log("Transaction ID:",u);try{i.transaction=yield i.api.getContractTransaction(u),i.error=null}catch(en){i.error=en}console.log(i.transaction)});return function(x){return rn.apply(this,arguments)}}())}ngOnInit(){return(0,d.Z)(function*(){})()}toggleDetails(){this.detailsVisible=!this.detailsVisible}ngOnDestroy(){}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(w.s),n.Y36(r.F0),n.Y36(D.U),n.Y36(r.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-contract-transaction-component"]],hostVars:2,hostBindings:function(o,s){2&o&&n.ekj("content-centered-top",s.hostClass)},decls:21,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],[1,"w-full","h-full",3,"src"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3","hidden","md:block"],["target","_blank",3,"href"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],["class","flex flex-col flex-auto w-full",4,"ngIf"],[1,"flex","items-center"],[1,"ml-1.5","leading-6","truncate","text-secondary"],[1,"flex","flex-col","flex-auto","w-full"],[1,"w-full","max-w-screen-xl","mx-auto","p-6","md:p-8"],[4,"ngIf"],["class","flex items-center w-full p-6 filter-info ",4,"ngIf"],[3,"error"],["class","flex flex-col lg:flex-row w-full",4,"ngIf"],[1,"flex","items-center","w-full","p-6","filter-info"],[1,"icon-size-16","mr-6","text-blue-500",3,"svgIcon"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight","break-all"],[1,"text-primary"],[1,"flex","flex-col","lg:flex-row","w-full"],[1,"flex","flex-col","items-center","p-8","lg:px-10","lg:py-12","lg:min-w-80","bg-gray-100","dark:bg-black","dark:bg-opacity-10"],[1,"flex","items-center","whitespace-nowrap"],[1,"text-4xl","font-extrabold","tracking-tight"],[1,"p-6","sm:p-8","lg:p-10"],[1,"text-3xl","font-bold"],[1,"mt-2","leading-relaxed","text-secondary"],[1,"break-all"],[1,"grid","grid-cols-1","lg:grid-cols-1","gap-y-4","mt-6"],[1,"icon-size-5","text-primary",3,"svgIcon"],[1,"text-primary","break-all"],[3,"routerLink"],[1,"prose"],["blockcore-highlight","","lang","json"]],template:function(o,s){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"div",4),n.TgZ(5,"div",5),n._UZ(6,"img",6),n.qZA(),n.TgZ(7,"div",7),n.ynx(8),n.TgZ(9,"div",8),n._uU(10),n.qZA(),n.BQk(),n.YNc(11,F,4,2,"div",9),n.qZA(),n.qZA(),n.TgZ(12,"div",10),n.TgZ(13,"a",11),n.TgZ(14,"button",12),n._UZ(15,"mat-icon",13),n.TgZ(16,"span",14),n._uU(17,"Website"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(18,"div",15),n.TgZ(19,"div",16),n.YNc(20,nn,8,5,"div",17),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(6),n.s9C("src",null==s.setup.Chain?null:s.setup.Chain.Icon,n.LSH),n.xp6(4),n.hij(" ",null==s.setup.Chain?null:s.setup.Chain.Symbol," "),n.xp6(1),n.Q6J("ngIf",null==s.setup.Chain?null:s.setup.Chain.Description),n.xp6(2),n.s9C("href",null==s.setup.Chain?null:s.setup.Chain.Url,n.LSH),n.xp6(1),n.Q6J("color","primary"),n.xp6(1),n.Q6J("svgIcon","heroicons_solid:chevron-double-right"),n.xp6(5),n.Q6J("ngIf",s.setup.chains))},directives:[g.O5,Z.Hw,l.lW,S.g,j.t,B.q,r.yS,M.b],pipes:[z.h,g.Ts],encapsulation:2}),t})()}];var on=c(2499);let cn=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[r.Bz.forChild(tn),l.ot,v.vV,T.t,Z.Ps,m.Tx,f.Cv,A.si,h.SJ,q.JX,C.p0,U.Nh,b.X,I.y4,J.m,k.LD,Q.c,y.d,O.AV,N.ZX,Y.t,L.q,V.T,on.Wl]]}),t})()}}]);