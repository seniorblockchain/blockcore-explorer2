"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[259],{39259:(En,d,e)=>{e.r(d),e.d(d,{TransactionModule:()=>jn});var l=e(99826),m=e(47423),f=e(69832),b=e(4834),g=e(25245),A=e(92181),u=e(85899),h=e(90508),k=e(2638),U=e(84847),C=e(24999),p=e(53251),I=e(12666),q=e(42115),J=e(44466),Q=e(74107),y=e(77531),N=e(9828),Y=e(87238),O=e(57261),L=e(69837),S=e(17237),V=e(35486),v=e(15861),n=e(5e3),w=e(5830),H=e(29205),_=e(69808),z=e(42299),K=e(49364),D=e(11656),M=e(1743),$=e(6672),j=e(57338),R=e(25769),x=e(40809),F=e(63385);function P(t,o){if(1&t&&(n.TgZ(0,"div",19),n._UZ(1,"mat-icon",12),n.TgZ(2,"div",20),n._uU(3),n.qZA()()),2&t){const i=n.oxw();n.xp6(1),n.Q6J("svgIcon","heroicons_solid:badge-check"),n.xp6(2),n.Oqu(null==i.setup.Chain?null:i.setup.Chain.Description)}}function X(t,o){1&t&&n._UZ(0,"app-progress")}function E(t,o){if(1&t&&(n.TgZ(0,"blockcore-block",26),n._UZ(1,"mat-icon",27),n.TgZ(2,"div",28)(3,"div",29)(4,"span"),n._uU(5,"Transaction Id: "),n.qZA(),n.TgZ(6,"span",30),n._uU(7),n.qZA()()()()),2&t){const i=n.oxw(2);n.xp6(1),n.Q6J("svgIcon","heroicons_outline:document-text"),n.xp6(6),n.Oqu(i.transaction.transactionId)}}function B(t,o){if(1&t&&(n.TgZ(0,"div",19),n._UZ(1,"mat-icon",37),n.TgZ(2,"div",13)(3,"span"),n._uU(4,"Age: "),n.qZA(),n.TgZ(5,"span",38),n._uU(6),n.ALo(7,"ago"),n.qZA()()()),2&t){const i=n.oxw(3);n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Oqu(n.lcZ(7,2,i.transaction.timestamp))}}function W(t,o){if(1&t&&(n.TgZ(0,"div",19),n._UZ(1,"mat-icon",37),n.TgZ(2,"div",13)(3,"span"),n._uU(4,"Date: "),n.qZA(),n.TgZ(5,"span",38),n._uU(6),n.ALo(7,"timestamp"),n.qZA()()()),2&t){const i=n.oxw(3);n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Oqu(n.lcZ(7,2,i.transaction.timestamp))}}const G=function(t){return["../../block",t]};function nn(t,o){if(1&t&&(n.TgZ(0,"div",19),n._UZ(1,"mat-icon",37),n.TgZ(2,"div",13)(3,"span"),n._uU(4,"Block: "),n.qZA(),n.TgZ(5,"span",38)(6,"a",44),n._uU(7),n.qZA()()()()),2&t){const i=n.oxw(3);n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Q6J("routerLink",n.VKq(3,G,i.transaction.blockIndex)),n.xp6(1),n.Oqu(i.transaction.blockIndex)}}const tn=function(){return["../../mempool"]};function on(t,o){1&t&&(n.TgZ(0,"div",19),n._UZ(1,"mat-icon",37),n.TgZ(2,"div",13)(3,"span"),n._uU(4,"Block: "),n.qZA(),n.TgZ(5,"span",38)(6,"a",44),n._uU(7,"Mempool"),n.qZA()()()()),2&t&&(n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Q6J("routerLink",n.DdM(2,tn)))}function en(t,o){1&t&&(n.TgZ(0,"div",19),n._UZ(1,"mat-icon",37),n.TgZ(2,"div",13)(3,"span"),n._uU(4,"Type: "),n.qZA(),n.TgZ(5,"span",38),n._uU(6,"CoinBase"),n.qZA()()()),2&t&&(n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"))}function cn(t,o){1&t&&(n.TgZ(0,"div",19),n._UZ(1,"mat-icon",37),n.TgZ(2,"div",13)(3,"span"),n._uU(4,"Type: "),n.qZA(),n.TgZ(5,"span",38),n._uU(6,"CoinStake"),n.qZA()()()),2&t&&(n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"))}function an(t,o){1&t&&(n.TgZ(0,"span"),n._uU(1,"View"),n.qZA())}function sn(t,o){1&t&&(n.TgZ(0,"span"),n._uU(1,"Hide"),n.qZA())}function ln(t,o){if(1&t&&(n.TgZ(0,"div",19),n._UZ(1,"mat-icon",37),n.TgZ(2,"div",13)(3,"span"),n._uU(4,"Unit Timestamp: "),n.qZA(),n.TgZ(5,"span",38),n._uU(6),n.qZA()()()),2&t){const i=n.oxw(3);n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Oqu(i.transaction.timestamp)}}function pn(t,o){if(1&t&&(n.TgZ(0,"div",19),n._UZ(1,"mat-icon",37),n.TgZ(2,"div",13)(3,"span"),n._uU(4,"LockTime: "),n.qZA(),n.TgZ(5,"span",38),n._uU(6),n.qZA()()()),2&t){const i=n.oxw(3);n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Oqu(i.transaction.lockTime)}}function _n(t,o){if(1&t&&(n.TgZ(0,"div",19),n._UZ(1,"mat-icon",37),n.TgZ(2,"div",13)(3,"span"),n._uU(4,"Replace by Fee: "),n.qZA(),n.TgZ(5,"span",38),n._uU(6),n.ALo(7,"yes"),n.qZA()()()),2&t){const i=n.oxw(3);n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Oqu(n.lcZ(7,2,i.transaction.rbf))}}function rn(t,o){if(1&t&&(n.TgZ(0,"div",19),n._UZ(1,"mat-icon",37),n.TgZ(2,"div",13)(3,"span"),n._uU(4,"Replace by Fee: "),n.qZA(),n.TgZ(5,"span",38),n._uU(6),n.ALo(7,"yes"),n.qZA()()()),2&t){const i=n.oxw(3);n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Oqu(n.lcZ(7,2,i.transaction.rbf))}}function dn(t,o){if(1&t&&(n.TgZ(0,"div",19),n._UZ(1,"mat-icon",37),n.TgZ(2,"div",13)(3,"span"),n._uU(4,"Version: "),n.qZA(),n.TgZ(5,"span",38),n._uU(6),n.qZA()()()),2&t){const i=n.oxw(3);n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Oqu(i.transaction.version)}}function mn(t,o){if(1&t&&(n.TgZ(0,"div",19),n._UZ(1,"mat-icon",37),n.TgZ(2,"div",13)(3,"span"),n._uU(4,"Transaction fee: "),n.qZA(),n.TgZ(5,"span",38),n._uU(6),n.ALo(7,"amount"),n.qZA()()()),2&t){const i=n.oxw(3);n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Oqu(n.lcZ(7,2,i.transaction.fee))}}function gn(t,o){if(1&t&&(n.TgZ(0,"div",19),n._UZ(1,"mat-icon",37),n.TgZ(2,"div",13)(3,"span"),n._uU(4,"Size: "),n.qZA(),n.TgZ(5,"span",38),n._uU(6),n.ALo(7,"size"),n.qZA()()()),2&t){const i=n.oxw(3);n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Oqu(n.lcZ(7,2,i.transaction.size))}}function un(t,o){if(1&t&&(n.TgZ(0,"div",19),n._UZ(1,"mat-icon",37),n.TgZ(2,"div",13)(3,"span"),n._uU(4,"Virtual size: "),n.qZA(),n.TgZ(5,"span",38),n._uU(6),n.ALo(7,"size"),n.qZA()()()),2&t){const i=n.oxw(3);n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Oqu(n.lcZ(7,2,i.transaction.virtualSize))}}function vn(t,o){if(1&t&&(n.TgZ(0,"div",19),n._UZ(1,"mat-icon",37),n.TgZ(2,"div",13)(3,"span"),n._uU(4,"HasWitness: "),n.qZA(),n.TgZ(5,"span",38),n._uU(6),n.ALo(7,"yes"),n.qZA()()()),2&t){const i=n.oxw(3);n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Oqu(n.lcZ(7,2,i.transaction.hasWitness))}}const xn=function(t){return["../../","contract-transaction",t]};function Tn(t,o){if(1&t&&(n.TgZ(0,"div",19),n._UZ(1,"mat-icon",37),n.TgZ(2,"div",13)(3,"span"),n._uU(4,"View Smart Contract: "),n.qZA(),n.TgZ(5,"span",38)(6,"a",44),n._uU(7),n.ALo(8,"slice"),n.qZA()()()()),2&t){const i=n.oxw(3);n.xp6(1),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Q6J("routerLink",n.VKq(7,xn,i.transaction.transactionId)),n.xp6(1),n.Oqu(n.Dn7(8,3,i.transaction.transactionId,0,20))}}function Zn(t,o){if(1&t){const i=n.EpF();n.TgZ(0,"blockcore-block",31)(1,"div",32)(2,"div",33),n._uU(3,"Transaction Details"),n.qZA(),n.TgZ(4,"div",34)(5,"p",35),n._uU(6),n.qZA()(),n.TgZ(7,"div",36),n.YNc(8,B,8,4,"div",8),n.YNc(9,W,8,4,"div",8),n.YNc(10,nn,8,5,"div",8),n.YNc(11,on,8,3,"div",8),n.TgZ(12,"div",19),n._UZ(13,"mat-icon",37),n.TgZ(14,"div",13)(15,"span"),n._uU(16,"Confirmations: "),n.qZA(),n.TgZ(17,"span",38),n._uU(18),n.qZA()()(),n.YNc(19,en,7,1,"div",8),n.YNc(20,cn,7,1,"div",8),n.qZA(),n.TgZ(21,"div",39)(22,"div",40)(23,"a",41),n.NdJ("click",function(){n.CHM(i);const s=n.oxw(2);return n.KtG(s.toggleDetails())}),n.YNc(24,an,2,0,"span",22),n.YNc(25,sn,2,0,"span",22),n._uU(26," details"),n.qZA()(),n._UZ(27,"div",42),n.qZA(),n.TgZ(28,"div",43),n.YNc(29,ln,7,2,"div",8),n.YNc(30,pn,7,2,"div",8),n.YNc(31,_n,8,4,"div",8),n.YNc(32,rn,8,4,"div",8),n.YNc(33,dn,7,2,"div",8),n.YNc(34,mn,8,4,"div",8),n.YNc(35,gn,8,4,"div",8),n.YNc(36,un,8,4,"div",8),n.YNc(37,vn,8,4,"div",8),n.YNc(38,Tn,9,9,"div",8),n.qZA()()()}if(2&t){const i=n.oxw(2);n.xp6(6),n.hij("block Hash: ",i.transaction.blockHash,""),n.xp6(2),n.Q6J("ngIf",0!==i.transaction.timestamp),n.xp6(1),n.Q6J("ngIf",0!==i.transaction.timestamp),n.xp6(1),n.Q6J("ngIf",i.transaction.blockIndex),n.xp6(1),n.Q6J("ngIf",!i.transaction.blockIndex),n.xp6(2),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(5),n.Oqu(i.transaction.confirmations),n.xp6(1),n.Q6J("ngIf",i.transaction.isCoinbase),n.xp6(1),n.Q6J("ngIf",i.transaction.isCoinstake),n.xp6(4),n.Q6J("ngIf",!i.detailsVisible),n.xp6(1),n.Q6J("ngIf",i.detailsVisible),n.xp6(4),n.Q6J("ngIf",i.detailsVisible),n.xp6(1),n.Q6J("ngIf",i.detailsVisible),n.xp6(1),n.Q6J("ngIf",i.detailsVisible),n.xp6(1),n.Q6J("ngIf",i.detailsVisible),n.xp6(1),n.Q6J("ngIf",i.detailsVisible),n.xp6(1),n.Q6J("ngIf",i.detailsVisible),n.xp6(1),n.Q6J("ngIf",i.detailsVisible),n.xp6(1),n.Q6J("ngIf",i.detailsVisible),n.xp6(1),n.Q6J("ngIf",i.detailsVisible),n.xp6(1),n.Q6J("ngIf",i.transaction.hasContract&&i.detailsVisible)}}const r=function(t){return["../../transaction",t]};function fn(t,o){if(1&t&&(n.TgZ(0,"div",61)(1,"a",62),n._UZ(2,"mat-icon",63),n.qZA()()),2&t){const i=n.oxw().$implicit;n.xp6(1),n.Q6J("routerLink",n.VKq(2,r,i.inputTransactionId)),n.xp6(1),n.Q6J("svgIcon","heroicons_outline:receipt-refund")}}function bn(t,o){1&t&&(n.TgZ(0,"div",61),n._UZ(1,"mat-icon",63),n.qZA()),2&t&&(n.xp6(1),n.Q6J("svgIcon","heroicons_outline:puzzle"))}const T=function(t){return["../../address",t]};function An(t,o){if(1&t&&(n.TgZ(0,"div")(1,"a",64),n._uU(2),n.qZA()()),2&t){const i=n.oxw().$implicit;n.xp6(1),n.Q6J("routerLink",n.VKq(2,T,i.inputAddress)),n.xp6(1),n.Oqu(i.inputAddress)}}function hn(t,o){1&t&&(n.TgZ(0,"div"),n._uU(1," No inputs (newly generated coins) "),n.qZA())}function kn(t,o){1&t&&(n.TgZ(0,"div"),n._uU(1," Nonstandard"),n.qZA())}function Un(t,o){if(1&t&&(n.TgZ(0,"div",19)(1,"div",13)(2,"span"),n._uU(3,"Witness: "),n.qZA(),n.TgZ(4,"span",38),n._uU(5),n.qZA()()()),2&t){const i=n.oxw(2).$implicit;n.xp6(5),n.Oqu(i.witScript)}}function Cn(t,o){if(1&t&&(n.TgZ(0,"div",19)(1,"div",13)(2,"span"),n._uU(3,"Input TX ID: "),n.qZA(),n.TgZ(4,"span",38),n._uU(5),n.qZA()()()),2&t){const i=n.oxw(2).$implicit;n.xp6(5),n.Oqu(i.inputTransactionId)}}function In(t,o){if(1&t&&(n.TgZ(0,"blockcore-block",65)(1,"div",66),n.YNc(2,Un,6,1,"div",8),n.TgZ(3,"div",19)(4,"div",13)(5,"span"),n._uU(6,"ScriptSig (ASM): "),n.qZA(),n.TgZ(7,"span",38),n._uU(8),n.qZA()()(),n.TgZ(9,"div",19)(10,"div",13)(11,"span"),n._uU(12,"ScriptSig (HEX): "),n.qZA(),n.TgZ(13,"span",38),n._uU(14),n.qZA()()(),n.TgZ(15,"div",19)(16,"div",13)(17,"span"),n._uU(18,"ScriptSig (HEX): "),n.qZA(),n.TgZ(19,"span",38),n._uU(20),n.qZA()()(),n.YNc(21,Cn,6,1,"div",8),n.TgZ(22,"div",19)(23,"div",13)(24,"span"),n._uU(25,"SequenceLock: "),n.qZA(),n.TgZ(26,"span",38),n._uU(27),n.qZA()()()()()),2&t){const i=n.oxw().$implicit;n.xp6(2),n.Q6J("ngIf",""!==i.witScript),n.xp6(6),n.Oqu(i.scriptSigAsm),n.xp6(6),n.Oqu(i.scriptSig),n.xp6(6),n.Oqu(i.scriptSig),n.xp6(1),n.Q6J("ngIf","0000000000000000000000000000000000000000000000000000000000000000"!==i.inputTransactionId),n.xp6(6),n.Oqu(i.sequenceLock)}}function qn(t,o){if(1&t&&(n.TgZ(0,"div",28)(1,"div",19),n.YNc(2,fn,3,4,"div",52),n.YNc(3,bn,2,1,"div",52),n.TgZ(4,"div",53)(5,"div",54)(6,"div",55),n._UZ(7,"span",56),n.ALo(8,"amountHtml"),n.TgZ(9,"span",30),n._uU(10),n.qZA()()(),n.TgZ(11,"div",57),n.YNc(12,An,3,4,"div",22),n.YNc(13,hn,2,0,"div",22),n.YNc(14,kn,2,0,"div",22),n.qZA(),n._UZ(15,"mat-progress-bar",58),n.qZA(),n.TgZ(16,"div",59),n._uU(17),n.qZA()(),n.YNc(18,In,28,6,"blockcore-block",60),n.qZA()),2&t){const i=o.$implicit,c=n.oxw(3);n.xp6(2),n.Q6J("ngIf","0000000000000000000000000000000000000000000000000000000000000000"!==i.inputTransactionId),n.xp6(1),n.Q6J("ngIf","0000000000000000000000000000000000000000000000000000000000000000"===i.inputTransactionId),n.xp6(4),n.Q6J("innerHTML",n.lcZ(8,11,i.inputAmount),n.oJD),n.xp6(3),n.hij(" ",c.setup.Chain.Symbol,""),n.xp6(2),n.Q6J("ngIf",null!==i.inputAddress),n.xp6(1),n.Q6J("ngIf",null===i.inputAddress&&c.transaction.isCoinbase),n.xp6(1),n.Q6J("ngIf",null===i.inputAddress&&!c.transaction.isCoinbase),n.xp6(1),n.Q6J("mode","determinate")("value",100),n.xp6(2),n.hij(" Index: ",i.inputIndex," "),n.xp6(1),n.Q6J("ngIf",c.detailsVisible)}}function Jn(t,o){if(1&t&&(n.TgZ(0,"div",61)(1,"a",67),n._UZ(2,"mat-icon",63),n.qZA()()),2&t){const i=n.oxw().$implicit;n.xp6(1),n.Q6J("routerLink",n.VKq(2,r,i.spentInTransaction)),n.xp6(1),n.Q6J("svgIcon","heroicons_outline:upload")}}function Qn(t,o){1&t&&(n.TgZ(0,"div",61),n._UZ(1,"mat-icon",63),n.qZA()),2&t&&(n.xp6(1),n.Q6J("svgIcon","heroicons_outline:puzzle"))}function yn(t,o){if(1&t&&(n.TgZ(0,"div")(1,"a",64),n._uU(2),n.qZA()()),2&t){const i=n.oxw().$implicit;n.xp6(1),n.Q6J("routerLink",n.VKq(2,T,i.address)),n.xp6(1),n.Oqu(i.address)}}function Nn(t,o){1&t&&(n.TgZ(0,"div"),n._uU(1,"Coinbase TX"),n.qZA())}function Yn(t,o){1&t&&(n.TgZ(0,"div"),n._uU(1," Coinstake TX"),n.qZA())}function On(t,o){1&t&&(n.TgZ(0,"div"),n._uU(1," Nonstandard"),n.qZA())}function Ln(t,o){if(1&t&&(n.TgZ(0,"div",19)(1,"div",13)(2,"span"),n._uU(3,"Type: "),n.qZA(),n.TgZ(4,"span",38),n._uU(5),n.qZA()()()),2&t){const i=n.oxw(2).$implicit;n.xp6(5),n.Oqu(i.outputType)}}function Sn(t,o){if(1&t&&(n.TgZ(0,"div",19)(1,"div",13)(2,"span"),n._uU(3,"ScriptPubKey (ASM): "),n.qZA(),n.TgZ(4,"span",38),n._uU(5),n.qZA()()()),2&t){const i=n.oxw(2).$implicit;n.xp6(5),n.Oqu(i.scriptPubKeyAsm)}}function Vn(t,o){if(1&t&&(n.TgZ(0,"div",19)(1,"div",13)(2,"span"),n._uU(3,"ScriptPubKey (HEX): "),n.qZA(),n.TgZ(4,"span",38),n._uU(5),n.qZA()()()),2&t){const i=n.oxw(2).$implicit;n.xp6(5),n.Oqu(i.scriptPubKey)}}function wn(t,o){1&t&&(n.TgZ(0,"div"),n._uU(1," Unspent"),n.qZA())}function Hn(t,o){if(1&t&&(n.TgZ(0,"div"),n._uU(1," Spent by "),n.TgZ(2,"a",67),n._uU(3),n.qZA()()),2&t){const i=n.oxw(2).$implicit;n.xp6(2),n.Q6J("routerLink",n.VKq(2,r,i.spentInTransaction)),n.xp6(1),n.hij(" ",i.spentInTransaction,"")}}function zn(t,o){if(1&t&&(n.TgZ(0,"blockcore-block",65)(1,"div",66),n.YNc(2,Ln,6,1,"div",8),n.YNc(3,Sn,6,1,"div",8),n.YNc(4,Vn,6,1,"div",8),n.TgZ(5,"div",19)(6,"div",68)(7,"span",69),n._uU(8,"Spending TX: "),n.qZA(),n.TgZ(9,"span",38),n.YNc(10,wn,2,0,"div",22),n.YNc(11,Hn,4,4,"div",22),n.qZA()()()()()),2&t){const i=n.oxw().$implicit;n.xp6(2),n.Q6J("ngIf",null!==i.outputType),n.xp6(1),n.Q6J("ngIf",""!==i.scriptPubKeyAsm),n.xp6(1),n.Q6J("ngIf",""!==i.scriptPubKey),n.xp6(6),n.Q6J("ngIf",null===i.spentInTransaction),n.xp6(1),n.Q6J("ngIf",null!==i.spentInTransaction)}}function Kn(t,o){if(1&t&&(n.TgZ(0,"div",28)(1,"div",19),n.YNc(2,Jn,3,4,"div",52),n.YNc(3,Qn,2,1,"div",52),n.TgZ(4,"div",53)(5,"div",54)(6,"div",55),n._UZ(7,"span",56),n.ALo(8,"amountHtml"),n.TgZ(9,"span",30),n._uU(10),n.qZA()()(),n.TgZ(11,"div",57),n.YNc(12,yn,3,4,"div",22),n.YNc(13,Nn,2,0,"div",22),n.YNc(14,Yn,2,0,"div",22),n.YNc(15,On,2,0,"div",22),n.qZA(),n._UZ(16,"mat-progress-bar",58),n.qZA(),n.TgZ(17,"div",59),n._uU(18),n.qZA()(),n.YNc(19,zn,12,5,"blockcore-block",60),n.qZA()),2&t){const i=o.$implicit,c=n.oxw(3);n.xp6(2),n.Q6J("ngIf",null!==i.spentInTransaction),n.xp6(1),n.Q6J("ngIf",null===i.spentInTransaction),n.xp6(4),n.Q6J("innerHTML",n.lcZ(8,12,i.balance),n.oJD),n.xp6(3),n.hij(" ",c.setup.Chain.Symbol,""),n.xp6(2),n.Q6J("ngIf",null!==i.address),n.xp6(1),n.Q6J("ngIf",null===i.address&&c.transaction.isCoinbase),n.xp6(1),n.Q6J("ngIf",null===i.address&&c.transaction.isCoinstake),n.xp6(1),n.Q6J("ngIf",null===i.address&&!c.transaction.isCoinbase&&!c.transaction.isCoinstake),n.xp6(1),n.Q6J("mode","determinate")("value",100),n.xp6(2),n.hij(" Index: ",i.index," "),n.xp6(1),n.Q6J("ngIf",c.detailsVisible)}}function Dn(t,o){if(1&t){const i=n.EpF();n.TgZ(0,"div",45)(1,"div",46)(2,"div",19)(3,"div",28)(4,"div",47),n._uU(5),n.qZA()()(),n.TgZ(6,"div",48),n.YNc(7,qn,19,13,"div",49),n.qZA(),n.TgZ(8,"div",50)(9,"button",51),n.NdJ("click",function(){n.CHM(i);const s=n.oxw(2);return n.KtG(s.toggleAmountRendering())}),n._UZ(10,"mat-icon",37),n.qZA()()(),n.TgZ(11,"div",46)(12,"div",19)(13,"div",28)(14,"div",47),n._uU(15),n.qZA()()(),n.TgZ(16,"div",48),n.YNc(17,Kn,20,14,"div",49),n.qZA(),n.TgZ(18,"div",50)(19,"button",51),n.NdJ("click",function(){n.CHM(i);const s=n.oxw(2);return n.KtG(s.toggleAmountRendering())}),n._UZ(20,"mat-icon",37),n.qZA()()()()}if(2&t){const i=n.oxw(2);n.xp6(5),n.hij("Inputs (",i.transaction.inputs.length,") "),n.xp6(2),n.Q6J("ngForOf",i.transaction.inputs),n.xp6(3),n.Q6J("svgIcon","heroicons_solid:database"),n.xp6(5),n.hij("Outputs (",i.transaction.outputs.length,") "),n.xp6(2),n.Q6J("ngForOf",i.transaction.outputs),n.xp6(3),n.Q6J("svgIcon","heroicons_solid:database")}}function Mn(t,o){if(1&t&&(n._UZ(0,"app-search")(1,"app-error",21),n.YNc(2,X,1,0,"app-progress",22),n.YNc(3,E,8,2,"blockcore-block",23),n.YNc(4,Zn,39,21,"blockcore-block",24),n.YNc(5,Dn,21,6,"div",25)),2&t){const i=n.oxw();n.xp6(1),n.Q6J("error",i.error),n.xp6(1),n.Q6J("ngIf",!i.transaction),n.xp6(1),n.Q6J("ngIf",i.transaction),n.xp6(1),n.Q6J("ngIf",i.transaction),n.xp6(1),n.Q6J("ngIf",i.transaction)}}const $n=[{path:"",component:(()=>{class t{constructor(i,c,s,Rn){var a=this;this.api=i,this.router=c,this.setup=s,this.activatedRoute=Rn,this.hostClass=!0,this.detailsVisible=!1,this.activatedRoute.paramMap.subscribe(function(){var Fn=(0,v.Z)(function*(Z){const Pn=Z.get("transaction");try{a.transaction=yield a.api.getTransaction(Pn),2===a.transaction.outputs.length&&("OP_CALLCONTRACT"===a.transaction.outputs[0].outputType&&(a.transaction.hasContract=!0),"OP_CREATECONTRACT"===a.transaction.outputs[0].outputType&&(a.transaction.hasContract=!0),"OP_CALLCONTRACT"===a.transaction.outputs[1].outputType&&(a.transaction.hasContract=!0),"OP_CREATECONTRACT"===a.transaction.outputs[1].outputType&&(a.transaction.hasContract=!0)),a.error=null}catch(Xn){a.error=Xn}});return function(Z){return Fn.apply(this,arguments)}}())}ngOnInit(){return(0,v.Z)(function*(){})()}toggleAmountRendering(){this.setup.toggleFormat()}toggleDetails(){this.detailsVisible=!this.detailsVisible}ngOnDestroy(){}}return t.\u0275fac=function(i){return new(i||t)(n.Y36(w.s),n.Y36(l.F0),n.Y36(H.U),n.Y36(l.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-transaction-component"]],hostVars:2,hostBindings:function(i,c){2&i&&n.ekj("content-centered-top",c.hostClass)},decls:23,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-md","overflow-hidden"],[1,"w-full","h-full",3,"src"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3","hidden","md:block"],["target","_blank",3,"href"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"sm:px-2",3,"animationDuration"],["label","Transaction"],["matTabContent",""],[1,"flex","items-center"],[1,"ml-1.5","leading-6","truncate","text-secondary"],[1,"centered",3,"error"],[4,"ngIf"],["class","flex items-center w-full p-6 filter-info ",4,"ngIf"],["class","flex flex-col lg:flex-row w-full",4,"ngIf"],["class","grid grid-cols-1 xl:grid-cols-2 gap-8 w-full mt-8",4,"ngIf"],[1,"flex","items-center","w-full","p-6","filter-info"],[1,"icon-size-16","mr-6","text-blue-500",3,"svgIcon"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight","break-all"],[1,"text-primary"],[1,"flex","flex-col","lg:flex-row","w-full"],[1,"p-6","sm:p-8","lg:p-10"],[1,"text-3xl","font-bold"],[1,"mt-2","leading-relaxed","text-secondary"],[1,"break-all"],[1,"grid","grid-cols-1","lg:grid-cols-2","gap-y-4","mt-6"],[1,"icon-size-5","text-primary",3,"svgIcon"],[1,"text-primary","break-all"],[1,"flex","items-center","mt-10"],[1,"font-medium","text-secondary"],[1,"clickable",3,"click"],[1,"flex-auto","ml-2","border-b-2"],[1,"grid","grid-cols-1","lg:grid-cols-2","gap-y-4","mt-4"],[3,"routerLink"],[1,"grid","grid-cols-1","xl:grid-cols-2","gap-8","w-full","mt-8"],[1,"flex","flex-col","flex-auto","p-6","bg-card","rounded-2xl","shadow"],[1,"mr-4","text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"my-8","space-y-8"],["class","flex flex-col",4,"ngFor","ngForOf"],[1,"flex","items-center","mt-auto"],["title","Toggle Amount Format","mat-stroked-button","",1,"mt-2",3,"click"],["class","flex items-center justify-center min-w-14 min-h-14 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-600 dark:text-indigo-50",4,"ngIf"],[1,"flex-auto","ml-4","leading-none"],[1,"text-sm","font-medium","text-secondary"],[1,"text-sm","leading-none"],[3,"innerHTML"],[1,"flex","mt-2","font-medium","text-sm","break-all"],[1,"mt-3","rounded-md",3,"mode","value"],[1,"flex","items-end","justify-end","min-w-18","mt-auto","ml-6"],["class","mt-5 p-5 pb-8",4,"ngIf"],[1,"flex","items-center","justify-center","min-w-14","min-h-14","rounded","bg-indigo-100","text-indigo-800","dark:bg-indigo-600","dark:text-indigo-50"],["title","Previous output",3,"routerLink"],[1,"text-current",3,"svgIcon"],["tippy","","tippyType","address",1,"address",3,"routerLink"],[1,"mt-5","p-5","pb-8"],[1,"grid","grid-cols-1","lg:grid-cols-1","gap-y-4","mt-4"],["title","Spent",3,"routerLink"],[1,"flex","ml-2"],[1,"mr-1"]],template:function(i,c){1&i&&(n.TgZ(0,"div",0)(1,"div")(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4),n._UZ(6,"img",5),n.qZA(),n.TgZ(7,"div",6),n.ynx(8),n.TgZ(9,"div",7),n._uU(10),n.qZA(),n.BQk(),n.YNc(11,P,4,2,"div",8),n.qZA()(),n.TgZ(12,"div",9)(13,"a",10)(14,"button",11),n._UZ(15,"mat-icon",12),n.TgZ(16,"span",13),n._uU(17,"Website"),n.qZA()()()()()()(),n.TgZ(18,"div",14)(19,"div",15)(20,"mat-tab-group",16)(21,"mat-tab",17),n.YNc(22,Mn,6,5,"ng-template",18),n.qZA()()()()()),2&i&&(n.xp6(6),n.s9C("src",null==c.setup.Chain?null:c.setup.Chain.Icon,n.LSH),n.xp6(4),n.hij(" ",null==c.setup.Chain?null:c.setup.Chain.Symbol," "),n.xp6(1),n.Q6J("ngIf",null==c.setup.Chain?null:c.setup.Chain.Description),n.xp6(2),n.s9C("href",null==c.setup.Chain?null:c.setup.Chain.Url,n.LSH),n.xp6(1),n.Q6J("color","primary"),n.xp6(1),n.Q6J("svgIcon","heroicons_solid:chevron-double-right"),n.xp6(5),n.Q6J("animationDuration","0"))},dependencies:[l.yS,m.lW,g.Hw,u.pW,p.SP,p.uX,p.Vc,_.sg,_.O5,z.$,K.g,D.t,M.q,_.OU,$.Q,j.n,R.d,x.C,x.N,F.e],encapsulation:2}),t})()}];let jn=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[l.Bz.forChild($n),m.ot,f.vV,b.t,g.Ps,A.Tx,u.Cv,h.si,k.SJ,U.JX,C.p0,p.Nh,q.X,I.y4,J.m,Q.LD,y.c,N.d,Y.AV,O.ZX,L.t,S.q,V.T]}),t})()}}]);