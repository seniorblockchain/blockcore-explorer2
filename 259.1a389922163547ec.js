"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[259],{1743:(J,T,e)=>{e.d(T,{q:()=>u});var Z=e(5830),o=e(5e3),f=e(9808),A=e(5245);function v(l,_){if(1&l&&(o.TgZ(0,"div"),o._uU(1),o.qZA()),2&l){const r=o.oxw(2);o.xp6(1),o.Oqu(r.details)}}function q(l,_){if(1&l&&(o.TgZ(0,"div"),o._uU(1),o.qZA()),2&l){const r=o.oxw(3);o.xp6(1),o.Oqu(r.details)}}function m(l,_){if(1&l&&(o.TgZ(0,"div",16),o._uU(1),o.qZA()),2&l){const r=o.oxw(3);o.xp6(1),o.Oqu(r.stack)}}function h(l,_){if(1&l&&(o.TgZ(0,"div",13),o.YNc(1,q,2,1,"div",9),o.YNc(2,m,2,1,"div",14),o._UZ(3,"br"),o.TgZ(4,"span",15),o._uU(5," Message: "),o.qZA(),o.TgZ(6,"div"),o._uU(7),o.qZA(),o.qZA()),2&l){const r=o.oxw(2);o.xp6(1),o.Q6J("ngIf",r.details),o.xp6(1),o.Q6J("ngIf",r.stack),o.xp6(5),o.Oqu(r.message)}}function b(l,_){if(1&l){const r=o.EpF();o.TgZ(0,"div",1),o.TgZ(1,"div",2),o._UZ(2,"mat-icon",3),o.qZA(),o.TgZ(3,"div",4),o.TgZ(4,"div",5),o.TgZ(5,"div",6),o._uU(6," Something went wrong! "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(7,"div",7),o.TgZ(8,"div",5),o.TgZ(9,"div",8),o.YNc(10,v,2,1,"div",9),o._UZ(11,"br"),o._UZ(12,"br"),o.TgZ(13,"span",10),o.NdJ("click",function(){o.CHM(r);const p=o.oxw();return p.detailsVisible=!p.detailsVisible}),o._UZ(14,"mat-icon",11),o.qZA(),o.qZA(),o.YNc(15,h,8,3,"div",12),o.qZA(),o.qZA(),o.qZA()}if(2&l){const r=o.oxw();o.xp6(2),o.Q6J("svgIcon","heroicons_outline:exclamation-circle"),o.xp6(8),o.Q6J("ngIf",r.details),o.xp6(4),o.Q6J("svgIcon","heroicons_solid:information-circle"),o.xp6(1),o.Q6J("ngIf",r.detailsVisible)}}let u=(()=>{class l{constructor(){this.detailsVisible=!1}ngOnChanges(r){!this.error||(this.error instanceof Z.o?404===this.error.code?(this.message="Not found (404)",this.details=this.error.url,this.stack=this.error.stack.toString()):(this.message=this.error.message+" ("+this.error.code+")",this.details=this.error.url,this.stack=this.error.stack.toString()):this.error instanceof Error?(this.message="Error occured: "+this.error.message,this.stack=this.error.stack.toString()):this.message=this.error)}}return l.\u0275fac=function(r){return new(r||l)},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-error"]],inputs:{error:"error"},features:[o.TTD],decls:1,vars:1,consts:[["class","relative flex flex-col flex-auto p-6 pr-3 pb-3 bg-card rounded-2xl shadow overflow-hidden",4,"ngIf"],[1,"relative","flex","flex-col","flex-auto","p-6","pr-3","pb-3","bg-card","rounded-2xl","shadow","overflow-hidden"],[1,"absolute","bottom-0","right-0","w-24","h-24","-m-6"],[1,"icon-size-24","opacity-25","text-red-500","dark:text-red-400",3,"svgIcon"],[1,"flex","items-center"],[1,"flex","flex-col"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate","break-all","negative"],[1,"flex","items-center","mt-8"],[1,"font-medium","break-all"],[4,"ngIf"],["title","Show error details",1,"clickable",3,"click"],["matPrefix","",1,"icon-size-10","text-red-500",3,"svgIcon"],["class","error-details mt-8",4,"ngIf"],[1,"error-details","mt-8"],["class","error-details-stack",4,"ngIf"],[1,"text-red-500"],[1,"error-details-stack"]],template:function(r,a){1&r&&o.YNc(0,b,16,4,"div",0),2&r&&o.Q6J("ngIf",a.error)},directives:[f.O5,A.Hw],encapsulation:2}),l})()},9259:(J,T,e)=>{e.r(T),e.d(T,{TransactionModule:()=>Bt});var Z=e(4521),o=e(7423),f=e(9832),A=e(4834),v=e(5245),q=e(2181),m=e(5899),h=e(508),b=e(2638),u=e(4847),l=e(4999),_=e(3251),r=e(7455),a=e(1244),p=e(4466),x=e(4107),d=e(7531),k=e(9828),Y=e(7238),w=e(7261),L=e(9837),M=e(7237),S=e(5486),Q=e(5861),t=e(5e3),D=e(5830),P=e(9205),C=e(9808),V=e(9364),K=e(1743),R=e(1656),B=e(2299),H=e(7338),W=e(5769),z=e(3385),y=e(809),F=e(6672);function j(n,c){if(1&n&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",13),t.TgZ(2,"div",21),t._uU(3),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(1),t.Q6J("svgIcon","heroicons_solid:badge-check"),t.xp6(2),t.Oqu(null==i.setup.Chain?null:i.setup.Chain.Description)}}function $(n,c){1&n&&t._UZ(0,"app-progress")}function X(n,c){if(1&n&&(t.TgZ(0,"blockcore-block",27),t._UZ(1,"mat-icon",28),t.TgZ(2,"div",29),t.TgZ(3,"div",30),t.TgZ(4,"span"),t._uU(5,"Transaction Id: "),t.qZA(),t.TgZ(6,"span",31),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(2);t.xp6(1),t.Q6J("svgIcon","heroicons_outline:document-text"),t.xp6(6),t.Oqu(i.transaction.transactionId)}}function G(n,c){if(1&n&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",43),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Age: "),t.qZA(),t.TgZ(5,"span",44),t._uU(6),t.ALo(7,"ago"),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(t.lcZ(7,2,i.transaction.timestamp))}}function tt(n,c){if(1&n&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",43),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Date: "),t.qZA(),t.TgZ(5,"span",44),t._uU(6),t.ALo(7,"timestamp"),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(t.lcZ(7,2,i.transaction.timestamp))}}const O=function(n){return["../../block",n]};function nt(n,c){if(1&n&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",43),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Block: "),t.qZA(),t.TgZ(5,"span",44),t.TgZ(6,"a",37),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Q6J("routerLink",t.VKq(3,O,i.transaction.blockIndex)),t.xp6(1),t.Oqu(i.transaction.blockIndex)}}const it=function(){return["../../mempool"]};function ot(n,c){1&n&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",43),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Block: "),t.qZA(),t.TgZ(5,"span",44),t.TgZ(6,"a",37),t._uU(7,"Mempool"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Q6J("routerLink",t.DdM(2,it)))}function et(n,c){1&n&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",43),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Type: "),t.qZA(),t.TgZ(5,"span",44),t._uU(6,"CoinBase"),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"))}function ct(n,c){1&n&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",43),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Type: "),t.qZA(),t.TgZ(5,"span",44),t._uU(6,"CoinStake"),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"))}function at(n,c){1&n&&(t.TgZ(0,"span"),t._uU(1,"View"),t.qZA())}function st(n,c){1&n&&(t.TgZ(0,"span"),t._uU(1,"Hide"),t.qZA())}function rt(n,c){if(1&n&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",43),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Unit Timestamp: "),t.qZA(),t.TgZ(5,"span",44),t._uU(6),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(i.transaction.timestamp)}}function lt(n,c){if(1&n&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",43),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"LockTime: "),t.qZA(),t.TgZ(5,"span",44),t._uU(6),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(i.transaction.lockTime)}}function _t(n,c){if(1&n&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",43),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Replace by Fee: "),t.qZA(),t.TgZ(5,"span",44),t._uU(6),t.ALo(7,"yes"),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(t.lcZ(7,2,i.transaction.rbf))}}function pt(n,c){if(1&n&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",43),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Replace by Fee: "),t.qZA(),t.TgZ(5,"span",44),t._uU(6),t.ALo(7,"yes"),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(t.lcZ(7,2,i.transaction.rbf))}}function dt(n,c){if(1&n&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",43),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Version: "),t.qZA(),t.TgZ(5,"span",44),t._uU(6),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(i.transaction.version)}}function gt(n,c){if(1&n&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",43),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Transaction fee: "),t.qZA(),t.TgZ(5,"span",44),t._uU(6),t.ALo(7,"amount"),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(t.lcZ(7,2,i.transaction.fee))}}function Zt(n,c){if(1&n&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",43),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Size: "),t.qZA(),t.TgZ(5,"span",44),t._uU(6),t.ALo(7,"size"),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(t.lcZ(7,2,i.transaction.size))}}function mt(n,c){if(1&n&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",43),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"Virtual size: "),t.qZA(),t.TgZ(5,"span",44),t._uU(6),t.ALo(7,"size"),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(t.lcZ(7,2,i.transaction.virtualSize))}}function ut(n,c){if(1&n&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",43),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"HasWitness: "),t.qZA(),t.TgZ(5,"span",44),t._uU(6),t.ALo(7,"yes"),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(t.lcZ(7,2,i.transaction.hasWitness))}}const Tt=function(n){return["../../","contract-transaction",n]};function vt(n,c){if(1&n&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",43),t.TgZ(2,"div",14),t.TgZ(3,"span"),t._uU(4,"View Smart Contract: "),t.qZA(),t.TgZ(5,"span",44),t.TgZ(6,"a",37),t._uU(7),t.ALo(8,"slice"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(3);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Q6J("routerLink",t.VKq(7,Tt,i.transaction.transactionId)),t.xp6(1),t.Oqu(t.Dn7(8,3,i.transaction.transactionId,0,20))}}function xt(n,c){if(1&n){const i=t.EpF();t.TgZ(0,"blockcore-block",32),t.TgZ(1,"div",33),t.TgZ(2,"div",34),t._UZ(3,"mat-icon",35),t.TgZ(4,"div",36),t.TgZ(5,"span"),t.TgZ(6,"a",37),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div",38),t.TgZ(9,"div",39),t._uU(10,"Transaction Details"),t.qZA(),t.TgZ(11,"div",40),t.TgZ(12,"p",41),t._uU(13),t.qZA(),t.qZA(),t.TgZ(14,"div",42),t.YNc(15,G,8,4,"div",9),t.YNc(16,tt,8,4,"div",9),t.YNc(17,nt,8,5,"div",9),t.YNc(18,ot,8,3,"div",9),t.TgZ(19,"div",20),t._UZ(20,"mat-icon",43),t.TgZ(21,"div",14),t.TgZ(22,"span"),t._uU(23,"Confirmations: "),t.qZA(),t.TgZ(24,"span",44),t._uU(25),t.qZA(),t.qZA(),t.qZA(),t.YNc(26,et,7,1,"div",9),t.YNc(27,ct,7,1,"div",9),t.qZA(),t.TgZ(28,"div",45),t.TgZ(29,"div",46),t.TgZ(30,"a",47),t.NdJ("click",function(){return t.CHM(i),t.oxw(2).toggleDetails()}),t.YNc(31,at,2,0,"span",23),t.YNc(32,st,2,0,"span",23),t._uU(33," details"),t.qZA(),t.qZA(),t._UZ(34,"div",48),t.qZA(),t.TgZ(35,"div",49),t.YNc(36,rt,7,2,"div",9),t.YNc(37,lt,7,2,"div",9),t.YNc(38,_t,8,4,"div",9),t.YNc(39,pt,8,4,"div",9),t.YNc(40,dt,7,2,"div",9),t.YNc(41,gt,8,4,"div",9),t.YNc(42,Zt,8,4,"div",9),t.YNc(43,mt,8,4,"div",9),t.YNc(44,ut,8,4,"div",9),t.YNc(45,vt,9,9,"div",9),t.qZA(),t.qZA(),t.qZA()}if(2&n){const i=t.oxw(2);t.xp6(3),t.Q6J("svgIcon","heroicons_outline:cube"),t.xp6(3),t.Q6J("routerLink",t.VKq(24,O,i.transaction.blockIndex)),t.xp6(1),t.Oqu(i.transaction.blockIndex),t.xp6(6),t.hij("block Hash: ",i.transaction.blockHash,""),t.xp6(2),t.Q6J("ngIf",0!==i.transaction.timestamp),t.xp6(1),t.Q6J("ngIf",0!==i.transaction.timestamp),t.xp6(1),t.Q6J("ngIf",i.transaction.blockIndex),t.xp6(1),t.Q6J("ngIf",!i.transaction.blockIndex),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(5),t.Oqu(i.transaction.confirmations),t.xp6(1),t.Q6J("ngIf",i.transaction.isCoinbase),t.xp6(1),t.Q6J("ngIf",i.transaction.isCoinstake),t.xp6(4),t.Q6J("ngIf",!i.detailsVisible),t.xp6(1),t.Q6J("ngIf",i.detailsVisible),t.xp6(4),t.Q6J("ngIf",i.detailsVisible),t.xp6(1),t.Q6J("ngIf",i.detailsVisible),t.xp6(1),t.Q6J("ngIf",i.detailsVisible),t.xp6(1),t.Q6J("ngIf",i.detailsVisible),t.xp6(1),t.Q6J("ngIf",i.detailsVisible),t.xp6(1),t.Q6J("ngIf",i.detailsVisible),t.xp6(1),t.Q6J("ngIf",i.detailsVisible),t.xp6(1),t.Q6J("ngIf",i.detailsVisible),t.xp6(1),t.Q6J("ngIf",i.detailsVisible),t.xp6(1),t.Q6J("ngIf",i.detailsVisible)}}const I=function(n){return["../../transaction",n]};function ft(n,c){if(1&n&&(t.TgZ(0,"div",66),t.TgZ(1,"a",67),t._UZ(2,"mat-icon",68),t.qZA(),t.qZA()),2&n){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(2,I,i.inputTransactionId)),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:receipt-refund")}}function At(n,c){1&n&&(t.TgZ(0,"div",66),t._UZ(1,"mat-icon",68),t.qZA()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_outline:puzzle"))}const N=function(n){return["../../address",n]};function qt(n,c){if(1&n&&(t.TgZ(0,"div"),t.TgZ(1,"a",69),t._uU(2),t.qZA(),t.qZA()),2&n){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(2,N,i.inputAddress)),t.xp6(1),t.Oqu(i.inputAddress)}}function ht(n,c){1&n&&(t.TgZ(0,"div"),t._uU(1," No inputs (newly generated coins) "),t.qZA())}function bt(n,c){1&n&&(t.TgZ(0,"div"),t._uU(1," Nonstandard"),t.qZA())}function kt(n,c){if(1&n&&(t.TgZ(0,"div",20),t.TgZ(1,"div",14),t.TgZ(2,"span"),t._uU(3,"Witness: "),t.qZA(),t.TgZ(4,"span",44),t._uU(5),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(2).$implicit;t.xp6(5),t.Oqu(i.witScript)}}function Ut(n,c){if(1&n&&(t.TgZ(0,"div",20),t.TgZ(1,"div",14),t.TgZ(2,"span"),t._uU(3,"Input TX ID: "),t.qZA(),t.TgZ(4,"span",44),t._uU(5),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(2).$implicit;t.xp6(5),t.Oqu(i.inputTransactionId)}}function Ct(n,c){if(1&n&&(t.TgZ(0,"blockcore-block",70),t.TgZ(1,"div",71),t.YNc(2,kt,6,1,"div",9),t.TgZ(3,"div",20),t.TgZ(4,"div",14),t.TgZ(5,"span"),t._uU(6,"ScriptSig (ASM): "),t.qZA(),t.TgZ(7,"span",44),t._uU(8),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",20),t.TgZ(10,"div",14),t.TgZ(11,"span"),t._uU(12,"ScriptSig (HEX): "),t.qZA(),t.TgZ(13,"span",44),t._uU(14),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"div",20),t.TgZ(16,"div",14),t.TgZ(17,"span"),t._uU(18,"ScriptSig (HEX): "),t.qZA(),t.TgZ(19,"span",44),t._uU(20),t.qZA(),t.qZA(),t.qZA(),t.YNc(21,Ut,6,1,"div",9),t.TgZ(22,"div",20),t.TgZ(23,"div",14),t.TgZ(24,"span"),t._uU(25,"SequenceLock: "),t.qZA(),t.TgZ(26,"span",44),t._uU(27),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw().$implicit;t.xp6(2),t.Q6J("ngIf",""!=i.witScript),t.xp6(6),t.Oqu(i.scriptSigAsm),t.xp6(6),t.Oqu(i.scriptSig),t.xp6(6),t.Oqu(i.scriptSig),t.xp6(1),t.Q6J("ngIf","0000000000000000000000000000000000000000000000000000000000000000"!=i.inputTransactionId),t.xp6(6),t.Oqu(i.sequenceLock)}}function It(n,c){if(1&n&&(t.TgZ(0,"div",29),t.TgZ(1,"div",20),t.YNc(2,ft,3,4,"div",57),t.YNc(3,At,2,1,"div",57),t.TgZ(4,"div",58),t.TgZ(5,"div",59),t.TgZ(6,"div",60),t._UZ(7,"span",61),t.ALo(8,"amountHtml"),t.TgZ(9,"span",31),t._uU(10),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",62),t.YNc(12,qt,3,4,"div",23),t.YNc(13,ht,2,0,"div",23),t.YNc(14,bt,2,0,"div",23),t.qZA(),t._UZ(15,"mat-progress-bar",63),t.qZA(),t.TgZ(16,"div",64),t._uU(17),t.qZA(),t.qZA(),t.YNc(18,Ct,28,6,"blockcore-block",65),t.qZA()),2&n){const i=c.$implicit,s=t.oxw(3);t.xp6(2),t.Q6J("ngIf","0000000000000000000000000000000000000000000000000000000000000000"!=i.inputTransactionId),t.xp6(1),t.Q6J("ngIf","0000000000000000000000000000000000000000000000000000000000000000"==i.inputTransactionId),t.xp6(4),t.Q6J("innerHTML",t.lcZ(8,11,i.inputAmount),t.oJD),t.xp6(3),t.hij(" ",s.setup.Chain.Symbol,""),t.xp6(2),t.Q6J("ngIf",null!=i.inputAddress),t.xp6(1),t.Q6J("ngIf",null==i.inputAddress&&s.transaction.isCoinbase),t.xp6(1),t.Q6J("ngIf",null==i.inputAddress&&!s.transaction.isCoinbase),t.xp6(1),t.Q6J("mode","determinate")("value",100),t.xp6(2),t.hij(" Index: ",i.inputIndex," "),t.xp6(1),t.Q6J("ngIf",s.detailsVisible)}}function Jt(n,c){if(1&n&&(t.TgZ(0,"div",66),t.TgZ(1,"a",72),t._UZ(2,"mat-icon",68),t.qZA(),t.qZA()),2&n){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(2,I,i.spentInTransaction)),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:upload")}}function Qt(n,c){1&n&&(t.TgZ(0,"div",66),t._UZ(1,"mat-icon",68),t.qZA()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_outline:puzzle"))}function yt(n,c){if(1&n&&(t.TgZ(0,"div"),t.TgZ(1,"a",69),t._uU(2),t.qZA(),t.qZA()),2&n){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(2,N,i.address)),t.xp6(1),t.Oqu(i.address)}}function Ot(n,c){1&n&&(t.TgZ(0,"div"),t._uU(1,"Coinbase TX"),t.qZA())}function Nt(n,c){1&n&&(t.TgZ(0,"div"),t._uU(1," Coinstake TX"),t.qZA())}function Et(n,c){1&n&&(t.TgZ(0,"div"),t._uU(1," Nonstandard"),t.qZA())}function Yt(n,c){if(1&n&&(t.TgZ(0,"div",20),t.TgZ(1,"div",14),t.TgZ(2,"span"),t._uU(3,"Type: "),t.qZA(),t.TgZ(4,"span",44),t._uU(5),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(2).$implicit;t.xp6(5),t.Oqu(i.outputType)}}function wt(n,c){if(1&n&&(t.TgZ(0,"div",20),t.TgZ(1,"div",14),t.TgZ(2,"span"),t._uU(3,"ScriptPubKey (ASM): "),t.qZA(),t.TgZ(4,"span",44),t._uU(5),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(2).$implicit;t.xp6(5),t.Oqu(i.scriptPubKeyAsm)}}function Lt(n,c){if(1&n&&(t.TgZ(0,"div",20),t.TgZ(1,"div",14),t.TgZ(2,"span"),t._uU(3,"ScriptPubKey (HEX): "),t.qZA(),t.TgZ(4,"span",44),t._uU(5),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw(2).$implicit;t.xp6(5),t.Oqu(i.scriptPubKey)}}function Mt(n,c){1&n&&(t.TgZ(0,"div"),t._uU(1," Unspent"),t.qZA())}function St(n,c){if(1&n&&(t.TgZ(0,"div"),t._uU(1," Spent by "),t.TgZ(2,"a",72),t._uU(3),t.qZA(),t.qZA()),2&n){const i=t.oxw(2).$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(2,I,i.spentInTransaction)),t.xp6(1),t.hij(" ",i.spentInTransaction,"")}}function Dt(n,c){if(1&n&&(t.TgZ(0,"blockcore-block",70),t.TgZ(1,"div",71),t.YNc(2,Yt,6,1,"div",9),t.YNc(3,wt,6,1,"div",9),t.YNc(4,Lt,6,1,"div",9),t.TgZ(5,"div",20),t.TgZ(6,"div",73),t.TgZ(7,"span",74),t._uU(8,"Spending TX: "),t.qZA(),t.TgZ(9,"span",44),t.YNc(10,Mt,2,0,"div",23),t.YNc(11,St,4,4,"div",23),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw().$implicit;t.xp6(2),t.Q6J("ngIf",null!=i.outputType),t.xp6(1),t.Q6J("ngIf",""!=i.scriptPubKeyAsm),t.xp6(1),t.Q6J("ngIf",""!=i.scriptPubKey),t.xp6(6),t.Q6J("ngIf",null==i.spentInTransaction),t.xp6(1),t.Q6J("ngIf",null!=i.spentInTransaction)}}function Pt(n,c){if(1&n&&(t.TgZ(0,"div",29),t.TgZ(1,"div",20),t.YNc(2,Jt,3,4,"div",57),t.YNc(3,Qt,2,1,"div",57),t.TgZ(4,"div",58),t.TgZ(5,"div",59),t.TgZ(6,"div",60),t._UZ(7,"span",61),t.ALo(8,"amountHtml"),t.TgZ(9,"span",31),t._uU(10),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",62),t.YNc(12,yt,3,4,"div",23),t.YNc(13,Ot,2,0,"div",23),t.YNc(14,Nt,2,0,"div",23),t.YNc(15,Et,2,0,"div",23),t.qZA(),t._UZ(16,"mat-progress-bar",63),t.qZA(),t.TgZ(17,"div",64),t._uU(18),t.qZA(),t.qZA(),t.YNc(19,Dt,12,5,"blockcore-block",65),t.qZA()),2&n){const i=c.$implicit,s=t.oxw(3);t.xp6(2),t.Q6J("ngIf",null!=i.spentInTransaction),t.xp6(1),t.Q6J("ngIf",null==i.spentInTransaction),t.xp6(4),t.Q6J("innerHTML",t.lcZ(8,12,i.balance),t.oJD),t.xp6(3),t.hij(" ",s.setup.Chain.Symbol,""),t.xp6(2),t.Q6J("ngIf",null!=i.address),t.xp6(1),t.Q6J("ngIf",null==i.address&&s.transaction.isCoinbase),t.xp6(1),t.Q6J("ngIf",null==i.address&&s.transaction.isCoinstake),t.xp6(1),t.Q6J("ngIf",null==i.address&&!s.transaction.isCoinbase&&!s.transaction.isCoinstake),t.xp6(1),t.Q6J("mode","determinate")("value",100),t.xp6(2),t.hij(" Index: ",i.index," "),t.xp6(1),t.Q6J("ngIf",s.detailsVisible)}}function Vt(n,c){if(1&n){const i=t.EpF();t.TgZ(0,"div",50),t.TgZ(1,"div",51),t.TgZ(2,"div",20),t.TgZ(3,"div",29),t.TgZ(4,"div",52),t._uU(5),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",53),t.YNc(7,It,19,13,"div",54),t.qZA(),t.TgZ(8,"div",55),t.TgZ(9,"button",56),t.NdJ("click",function(){return t.CHM(i),t.oxw(2).toggleAmountRendering()}),t._UZ(10,"mat-icon",43),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",51),t.TgZ(12,"div",20),t.TgZ(13,"div",29),t.TgZ(14,"div",52),t._uU(15),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",53),t.YNc(17,Pt,20,14,"div",54),t.qZA(),t.TgZ(18,"div",55),t.TgZ(19,"button",56),t.NdJ("click",function(){return t.CHM(i),t.oxw(2).toggleAmountRendering()}),t._UZ(20,"mat-icon",43),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const i=t.oxw(2);t.xp6(5),t.hij("Inputs (",i.transaction.inputs.length,") "),t.xp6(2),t.Q6J("ngForOf",i.transaction.inputs),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:database"),t.xp6(5),t.hij("Outputs (",i.transaction.outputs.length,") "),t.xp6(2),t.Q6J("ngForOf",i.transaction.outputs),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:database")}}function Kt(n,c){if(1&n&&(t._UZ(0,"app-search"),t._UZ(1,"app-error",22),t.YNc(2,$,1,0,"app-progress",23),t.YNc(3,X,8,2,"blockcore-block",24),t.YNc(4,xt,46,26,"blockcore-block",25),t.YNc(5,Vt,21,6,"div",26)),2&n){const i=t.oxw();t.xp6(1),t.Q6J("error",i.error),t.xp6(1),t.Q6J("ngIf",!i.transaction),t.xp6(1),t.Q6J("ngIf",i.transaction),t.xp6(1),t.Q6J("ngIf",i.transaction),t.xp6(1),t.Q6J("ngIf",i.transaction)}}const Rt=[{path:"",component:(()=>{class n{constructor(i,s,U,Ht){var g=this;this.api=i,this.router=s,this.setup=U,this.activatedRoute=Ht,this.hostClass=!0,this.detailsVisible=!1,this.activatedRoute.paramMap.subscribe(function(){var Wt=(0,Q.Z)(function*(E){const zt=E.get("transaction");try{g.transaction=yield g.api.getTransaction(zt),2===g.transaction.outputs.length&&("OP_CALLCONTRACT"===g.transaction.outputs[0].outputType&&(g.transaction.hasContract=!0),"OP_CREATECONTRACT"===g.transaction.outputs[0].outputType&&(g.transaction.hasContract=!0),"OP_CALLCONTRACT"===g.transaction.outputs[1].outputType&&(g.transaction.hasContract=!0),"OP_CREATECONTRACT"===g.transaction.outputs[1].outputType&&(g.transaction.hasContract=!0)),g.error=null}catch(Ft){g.error=Ft}});return function(E){return Wt.apply(this,arguments)}}())}ngOnInit(){return(0,Q.Z)(function*(){})()}toggleAmountRendering(){this.setup.toggleFormat()}toggleDetails(){this.detailsVisible=!this.detailsVisible}ngOnDestroy(){}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(D.s),t.Y36(Z.F0),t.Y36(P.U),t.Y36(Z.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-transaction-component"]],hostVars:2,hostBindings:function(i,s){2&i&&t.ekj("content-centered-top",s.hostClass)},decls:23,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],[1,"w-full","h-full",3,"src"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3","hidden","md:block"],["target","_blank","target","_blank",3,"href"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"sm:px-2",3,"animationDuration"],["label","Transaction"],["matTabContent",""],[1,"flex","items-center"],[1,"ml-1.5","leading-6","truncate","text-secondary"],[1,"centered",3,"error"],[4,"ngIf"],["class","flex items-center w-full p-6 filter-info ",4,"ngIf"],["class","flex flex-col lg:flex-row w-full",4,"ngIf"],["class","grid grid-cols-1 xl:grid-cols-2 gap-8 w-full mt-8",4,"ngIf"],[1,"flex","items-center","w-full","p-6","filter-info"],[1,"icon-size-16","mr-6","text-blue-500",3,"svgIcon"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight","break-all"],[1,"text-primary"],[1,"flex","flex-col","lg:flex-row","w-full"],[1,"flex","flex-col","items-center","p-8","lg:px-10","lg:py-12","lg:min-w-80","bg-gray-100","dark:bg-black","dark:bg-opacity-10"],[1,"flex","items-center","whitespace-nowrap"],[1,"icon-size-14","mr-6","text-blue-500",3,"svgIcon"],[1,"text-4xl","font-extrabold","tracking-tight"],[3,"routerLink"],[1,"p-6","sm:p-8","lg:p-10"],[1,"text-3xl","font-bold"],[1,"mt-2","leading-relaxed","text-secondary"],[1,"break-all"],[1,"grid","grid-cols-1","lg:grid-cols-2","gap-y-4","mt-6"],[1,"icon-size-5","text-primary",3,"svgIcon"],[1,"text-primary","break-all"],[1,"flex","items-center","mt-10"],[1,"font-medium","text-secondary"],[1,"clickable",3,"click"],[1,"flex-auto","ml-2","border-b-2"],[1,"grid","grid-cols-1","lg:grid-cols-2","gap-y-4","mt-4"],[1,"grid","grid-cols-1","xl:grid-cols-2","gap-8","w-full","mt-8"],[1,"flex","flex-col","flex-auto","p-6","bg-card","rounded-2xl","shadow"],[1,"mr-4","text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"my-8","space-y-8"],["class","flex flex-col",4,"ngFor","ngForOf"],[1,"flex","items-center","mt-auto"],["title","Toggle Amount Format","mat-stroked-button","",1,"mt-2",3,"click"],["class","flex items-center justify-center min-w-14 min-h-14 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-600 dark:text-indigo-50",4,"ngIf"],[1,"flex-auto","ml-4","leading-none"],[1,"text-sm","font-medium","text-secondary"],[1,"text-sm","leading-none"],[3,"innerHTML"],[1,"flex","mt-2","font-medium","text-sm","break-all"],[1,"mt-3","rounded-full",3,"mode","value"],[1,"flex","items-end","justify-end","min-w-18","mt-auto","ml-6"],["class","mt-5 p-5 pb-8",4,"ngIf"],[1,"flex","items-center","justify-center","min-w-14","min-h-14","rounded","bg-indigo-100","text-indigo-800","dark:bg-indigo-600","dark:text-indigo-50"],["title","Previous output",3,"routerLink"],[1,"text-current",3,"svgIcon"],["tippy","","tippyType","address",1,"address",3,"routerLink"],[1,"mt-5","p-5","pb-8"],[1,"grid","grid-cols-1","lg:grid-cols-1","gap-y-4","mt-4"],["title","Spent",3,"routerLink"],[1,"flex","ml-2"],[1,"mr-1"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7),t.ynx(8),t.TgZ(9,"div",8),t._uU(10),t.qZA(),t.BQk(),t.YNc(11,j,4,2,"div",9),t.qZA(),t.qZA(),t.TgZ(12,"div",10),t.TgZ(13,"a",11),t.TgZ(14,"button",12),t._UZ(15,"mat-icon",13),t.TgZ(16,"span",14),t._uU(17,"Website"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",15),t.TgZ(19,"div",16),t.TgZ(20,"mat-tab-group",17),t.TgZ(21,"mat-tab",18),t.YNc(22,Kt,6,5,"ng-template",19),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(6),t.s9C("src",null==s.setup.Chain?null:s.setup.Chain.Icon,t.LSH),t.xp6(4),t.hij(" ",null==s.setup.Chain?null:s.setup.Chain.Symbol," "),t.xp6(1),t.Q6J("ngIf",null==s.setup.Chain?null:s.setup.Chain.Description),t.xp6(2),t.s9C("href",null==s.setup.Chain?null:s.setup.Chain.Url,t.LSH),t.xp6(1),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-double-right"),t.xp6(5),t.Q6J("animationDuration","0"))},directives:[C.O5,v.Hw,o.lW,_.SP,_.uX,_.Vc,V.g,K.q,R.t,Z.yS,C.sg,B.$,m.pW],pipes:[H.n,W.d,z.e,y.C,F.Q,C.OU,y.N],encapsulation:2}),n})()}];let Bt=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[Z.Bz.forChild(Rt),o.ot,f.vV,A.t,v.Ps,q.Tx,m.Cv,h.si,b.SJ,u.JX,l.p0,_.Nh,a.X,r.y4,p.m,x.LD,d.c,k.d,Y.AV,w.ZX,L.t,M.q,S.T]]}),n})()},9364:(J,T,e)=>{e.d(T,{g:()=>l});var Z=e(5861),o=e(5e3),f=e(5830),A=e(9205),v=e(4521),q=e(7261),m=e(7322),h=e(5245),b=e(7531),u=e(3075);let l=(()=>{class _{constructor(a,p,x,d){this.api=a,this.setup=p,this.router=x,this._snackBar=d,this.scheme=JSON.parse(localStorage.getItem("config")).scheme}ngOnDestroy(){}ngOnInit(){return(0,Z.Z)(function*(){})()}inputType(a){return a.startsWith(this.setup.Network.NetworkWitnessPrefix)?"address":a.length<20?"index":a.length>30&&a.length<54?"address":"hash"}search(){var a=this;return(0,Z.Z)(function*(){const p=a.searchTerm;switch(a.inputType(p)){case"index":{const d=parseInt(p,10);NaN!==d&&d>0?a.router.navigate([a.setup.current,"explorer","block",d]):a._snackBar.open("Explorer cannot detect your data type","retry",{duration:3e3,panelClass:[a.scheme]});break}case"address":a.router.navigate([a.setup.current,"explorer","address",p]);break;case"hash":{let d=null;try{d=yield a.api.getBlockByHash(p)}catch(k){}if(d)a.router.navigate([a.setup.current,"explorer","block",d.blockHash]);else{const k=yield a.api.getTransaction(p);a.router.navigate([a.setup.current,"explorer","transaction",k.transactionId])}break}default:a._snackBar.open("Explorer cannot detect your data type","retry",{duration:3e3,panelClass:[a.scheme]})}})()}}return _.\u0275fac=function(a){return new(a||_)(o.Y36(f.s),o.Y36(A.U),o.Y36(v.F0),o.Y36(q.ux))},_.\u0275cmp=o.Xpm({type:_,selectors:[["app-search"]],decls:8,vars:3,consts:[[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-1","gap-6","w-full","min-w-0","mb-6"],[1,"flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"flex","flex-col","sm:flex-row","items-center","justify-between","w-full","max-w-full","sm:max-w-none"],[1,"blockcore-mat-no-subscript","w-full","sm:w-full","mt-6","sm:mt-6","mb-6","sm:mb-6","sm:ml-4",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["type","search","placeholder","Search for address, transaction or block.","autocomplete","off","matInput","",3,"ngModel","keyup.enter","ngModelChange"],["query",""]],template:function(a,p){1&a&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"mat-form-field",4),o._UZ(5,"mat-icon",5),o.TgZ(6,"input",6,7),o.NdJ("keyup.enter",function(){return p.search()})("ngModelChange",function(d){return p.searchTerm=d}),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&a&&(o.xp6(4),o.Q6J("floatLabel","always"),o.xp6(1),o.Q6J("svgIcon","heroicons_solid:search"),o.xp6(1),o.Q6J("ngModel",p.searchTerm))},directives:[m.KE,h.Hw,m.qo,b.Nt,u.Fj,u.JJ,u.On],encapsulation:2}),_})()}}]);