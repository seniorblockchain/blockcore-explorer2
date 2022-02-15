"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[516],{516:(G,r,i)=>{i.r(r),i.d(r,{NetworkModule:()=>z});var l=i(4521),c=i(7423),_=i(9832),m=i(4834),d=i(5245),v=i(2181),x=i(5899),T=i(508),U=i(2638),h=i(4847),k=i(4999),a=i(3251),w=i(7455),O=i(1244),C=i(4466),u=i(5861),n=i(5e3),N=i(5830),b=i(9205),q=i(9808);function y(o,t){if(1&o&&(n.TgZ(0,"div",16),n._UZ(1,"mat-icon",13),n.TgZ(2,"div",24),n._uU(3),n.qZA(),n.qZA()),2&o){const e=n.oxw();n.xp6(1),n.Q6J("svgIcon","heroicons_solid:badge-check"),n.xp6(2),n.Oqu(null==e.setup.Chain?null:e.setup.Chain.Description)}}function I(o,t){1&o&&n._UZ(0,"app-progress",27)}function P(o,t){if(1&o&&(n.TgZ(0,"div"),n.TgZ(1,"span",32),n._uU(2,"Error from node:"),n.qZA(),n._uU(3),n._UZ(4,"br"),n.qZA()),2&o){const e=n.oxw(3);n.xp6(3),n.hij(" ",e.node.error,"")}}function S(o,t){if(1&o&&(n.TgZ(0,"div"),n.TgZ(1,"span"),n._uU(2,"Total Network Staking Weight"),n.qZA(),n.TgZ(3,"span"),n._uU(4),n.ALo(5,"amount"),n.qZA(),n.qZA()),2&o){const e=n.oxw(4);n.xp6(4),n.AsE("",n.lcZ(5,2,e.blockchain.networkWeight)," ",e.setup.Chain.Symbol,"")}}function J(o,t){if(1&o&&(n.TgZ(0,"div"),n.TgZ(1,"div",28),n.TgZ(2,"div"),n.TgZ(3,"span"),n._uU(4,"Chain"),n.qZA(),n.TgZ(5,"span"),n._uU(6),n.qZA(),n.qZA(),n.TgZ(7,"div"),n.TgZ(8,"span"),n._uU(9,"Sync Progress"),n.qZA(),n.TgZ(10,"span"),n._uU(11),n.qZA(),n.qZA(),n.TgZ(12,"div"),n.TgZ(13,"span"),n._uU(14,"Transactions in pool (mempool)"),n.qZA(),n.TgZ(15,"span"),n._uU(16),n.qZA(),n.qZA(),n.TgZ(17,"div"),n.TgZ(18,"span"),n._uU(19,"Average Block Persist In Seconds"),n.qZA(),n.TgZ(20,"span"),n._uU(21),n.qZA(),n.qZA(),n.TgZ(22,"div"),n.TgZ(23,"span"),n._uU(24,"Average Block Size"),n.qZA(),n.TgZ(25,"span"),n._uU(26),n.ALo(27,"size"),n.qZA(),n.qZA(),n.TgZ(28,"div"),n.TgZ(29,"span"),n._uU(30,"Best Block Hash"),n.qZA(),n.TgZ(31,"span",29),n._uU(32),n.qZA(),n.qZA(),n.TgZ(33,"div"),n.TgZ(34,"span"),n._uU(35,"Difficulty"),n.qZA(),n.TgZ(36,"span",29),n._uU(37),n.qZA(),n.qZA(),n.YNc(38,S,6,4,"div",26),n.TgZ(39,"div"),n.TgZ(40,"span"),n._uU(41,"Is Initial Block Download"),n.qZA(),n.TgZ(42,"span"),n._uU(43),n.ALo(44,"yes"),n.qZA(),n.qZA(),n.TgZ(45,"div"),n.TgZ(46,"span"),n._uU(47,"Is Pruned"),n.qZA(),n.TgZ(48,"span"),n._uU(49),n.ALo(50,"yes"),n.qZA(),n.qZA(),n.TgZ(51,"div"),n.TgZ(52,"span"),n._uU(53,"Version"),n.qZA(),n.TgZ(54,"span"),n._uU(55),n.qZA(),n.qZA(),n.TgZ(56,"div"),n.TgZ(57,"span"),n._uU(58,"Sub Version"),n.qZA(),n.TgZ(59,"span"),n._uU(60),n.qZA(),n.qZA(),n.TgZ(61,"div"),n.TgZ(62,"span"),n._uU(63,"Protocol Version"),n.qZA(),n.TgZ(64,"span"),n._uU(65),n.qZA(),n.qZA(),n.TgZ(66,"div"),n.TgZ(67,"span"),n._uU(68,"Connections"),n.qZA(),n.TgZ(69,"span"),n._uU(70),n.qZA(),n.qZA(),n.TgZ(71,"div"),n.TgZ(72,"span"),n._uU(73,"Relay Fee"),n.qZA(),n.TgZ(74,"span"),n._uU(75),n.qZA(),n.qZA(),n.TgZ(76,"div"),n.TgZ(77,"span"),n._uU(78,"Incremental Fee"),n.qZA(),n.TgZ(79,"span"),n._uU(80),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o){const e=n.oxw(3);n.xp6(6),n.Oqu(e.node.blockchain.chain),n.xp6(5),n.hij("",e.node.progress," (Indexed/Chain Tip - Remaining)"),n.xp6(5),n.Oqu(e.node.transactionsInPool),n.xp6(5),n.Oqu(e.node.avgBlockPersistInSeconds),n.xp6(5),n.Oqu(n.lcZ(27,16,e.node.avgBlockSizeKb)),n.xp6(6),n.Oqu(e.blockchain.bestBlockHash),n.xp6(5),n.Oqu(e.blockchain.difficulty),n.xp6(1),n.Q6J("ngIf",e.blockchain.networkWeight>0),n.xp6(5),n.Oqu(n.lcZ(44,18,e.blockchain.isInitialBlockDownload)),n.xp6(6),n.Oqu(n.lcZ(50,20,e.blockchain.isPruned)),n.xp6(6),n.Oqu(e.network.version),n.xp6(5),n.Oqu(e.network.subVersion),n.xp6(5),n.Oqu(e.network.protocolVersion),n.xp6(5),n.Oqu(e.network.connections),n.xp6(5),n.Oqu(e.network.relayFee),n.xp6(5),n.Oqu(e.network.incrementalFee)}}function D(o,t){1&o&&n._UZ(0,"app-progress",27)}function F(o,t){1&o&&(n._uU(0),n._UZ(1,"br")),2&o&&n.hij(" ",t.$implicit.addr,"")}function Q(o,t){if(1&o&&(n.TgZ(0,"div"),n.TgZ(1,"span"),n._uU(2),n.qZA(),n.TgZ(3,"span"),n.YNc(4,F,2,1,"ng-template",34),n.qZA(),n.qZA()),2&o){const e=t.$implicit;n.xp6(2),n.AsE("",e.version," (",e.peers.length,")"),n.xp6(2),n.Q6J("ngForOf",e.peers)}}function Y(o,t){if(1&o&&(n.TgZ(0,"div",28),n.YNc(1,Q,5,3,"div",33),n.qZA()),2&o){const e=n.oxw(3);n.xp6(1),n.Q6J("ngForOf",e.peers)}}function B(o,t){1&o&&(n.TgZ(0,"h2"),n._uU(1,"Configuration (Consensus)"),n.qZA())}function M(o,t){1&o&&(n.TgZ(0,"p"),n._uU(1,"This information is read from the network definition of the current chain. This might differ to the configuration of the indexing node."),n.qZA())}function R(o,t){if(1&o&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&o){const e=t.$implicit;n.xp6(1),n.hij(" ",e," ")}}function L(o,t){if(1&o&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&o){const e=t.$implicit;n.xp6(1),n.hij(" ",e," ")}}function V(o,t){if(1&o&&(n.TgZ(0,"div",28),n.TgZ(1,"div"),n.TgZ(2,"span"),n._uU(3,"Default Port"),n.qZA(),n.TgZ(4,"span"),n._uU(5),n.qZA(),n.qZA(),n.TgZ(6,"div"),n.TgZ(7,"span"),n._uU(8,"Default RPC Port"),n.qZA(),n.TgZ(9,"span"),n._uU(10),n.qZA(),n.qZA(),n.TgZ(11,"div"),n.TgZ(12,"span"),n._uU(13,"Default API Port"),n.qZA(),n.TgZ(14,"span"),n._uU(15),n.qZA(),n.qZA(),n.TgZ(16,"div"),n.TgZ(17,"span"),n._uU(18,"Default Web Socket Port"),n.qZA(),n.TgZ(19,"span"),n._uU(20),n.qZA(),n.qZA(),n.TgZ(21,"div"),n.TgZ(22,"span"),n._uU(23,"Fallback Fee"),n.qZA(),n.TgZ(24,"span"),n._uU(25),n.qZA(),n.qZA(),n.TgZ(26,"div"),n.TgZ(27,"span"),n._uU(28,"Minimum Relay Tx Fee"),n.qZA(),n.TgZ(29,"span"),n._uU(30),n.qZA(),n.qZA(),n.TgZ(31,"div"),n.TgZ(32,"span"),n._uU(33,"Minimum Tx Fee"),n.qZA(),n.TgZ(34,"span"),n._uU(35),n.qZA(),n.qZA(),n.TgZ(36,"div"),n.TgZ(37,"span"),n._uU(38,"Network Type"),n.qZA(),n.TgZ(39,"span"),n._uU(40),n.qZA(),n.qZA(),n.TgZ(41,"div"),n.TgZ(42,"span"),n._uU(43,"Name"),n.qZA(),n.TgZ(44,"span"),n._uU(45),n.qZA(),n.qZA(),n.TgZ(46,"div"),n.TgZ(47,"span"),n._uU(48,"Seed Nodes"),n.qZA(),n.TgZ(49,"span",35),n.YNc(50,R,2,1,"div",33),n._UZ(51,"br"),n.qZA(),n.qZA(),n.TgZ(52,"div"),n.TgZ(53,"span"),n._uU(54,"DNS Seeds"),n.qZA(),n.TgZ(55,"span",35),n.YNc(56,L,2,1,"div",33),n._UZ(57,"br"),n.qZA(),n.qZA(),n.TgZ(58,"div"),n.TgZ(59,"span"),n._uU(60,"Default Max Inbound Connections"),n.qZA(),n.TgZ(61,"span"),n._uU(62),n.qZA(),n.qZA(),n.TgZ(63,"div"),n.TgZ(64,"span"),n._uU(65,"Default Max Outbound Connections"),n.qZA(),n.TgZ(66,"span"),n._uU(67),n.qZA(),n.qZA(),n.TgZ(68,"div"),n.TgZ(69,"span"),n._uU(70,"Genesis Date"),n.qZA(),n.TgZ(71,"span"),n._uU(72),n.qZA(),n.qZA(),n.TgZ(73,"div"),n.TgZ(74,"span"),n._uU(75,"Genesis Hash"),n.qZA(),n.TgZ(76,"span",29),n._uU(77),n.qZA(),n.qZA(),n.TgZ(78,"div"),n.TgZ(79,"span"),n._uU(80,"Coin Type"),n.qZA(),n.TgZ(81,"span"),n._uU(82),n.qZA(),n.qZA(),n.TgZ(83,"div"),n.TgZ(84,"span"),n._uU(85,"Coinbase Maturity"),n.qZA(),n.TgZ(86,"span"),n._uU(87),n.qZA(),n.qZA(),n.TgZ(88,"div"),n.TgZ(89,"span"),n._uU(90,"Is Proof-Of-Stake"),n.qZA(),n.TgZ(91,"span"),n._uU(92),n.ALo(93,"yes"),n.qZA(),n.qZA(),n.TgZ(94,"div"),n.TgZ(95,"span"),n._uU(96,"Maximum Money"),n.qZA(),n.TgZ(97,"span",29),n._uU(98),n.qZA(),n.qZA(),n.TgZ(99,"div"),n.TgZ(100,"span"),n._uU(101,"Last POW Block"),n.qZA(),n.TgZ(102,"span"),n._uU(103),n.qZA(),n.qZA(),n.TgZ(104,"div"),n.TgZ(105,"span"),n._uU(106,"Premine Reward"),n.qZA(),n.TgZ(107,"span"),n._uU(108),n.qZA(),n.qZA(),n.TgZ(109,"div"),n.TgZ(110,"span"),n._uU(111,"Proof-Of-Stake Reward"),n.qZA(),n.TgZ(112,"span"),n._uU(113),n.qZA(),n.qZA(),n.TgZ(114,"div"),n.TgZ(115,"span"),n._uU(116,"Proof-Of-Work Reward"),n.qZA(),n.TgZ(117,"span"),n._uU(118),n.qZA(),n.qZA(),n.TgZ(119,"div"),n.TgZ(120,"span"),n._uU(121,"Target Spacing"),n.qZA(),n.TgZ(122,"span"),n._uU(123),n.qZA(),n.qZA(),n.qZA()),2&o){const e=n.oxw(3);n.xp6(5),n.Oqu(e.configuration.defaultPort),n.xp6(5),n.Oqu(e.configuration.defaultRPCPort),n.xp6(5),n.Oqu(e.configuration.defaultAPIPort),n.xp6(5),n.Oqu(e.configuration.defaultSignalRPort),n.xp6(5),n.Oqu(e.configuration.fallbackFee),n.xp6(5),n.Oqu(e.configuration.minRelayTxFee),n.xp6(5),n.Oqu(e.configuration.minTxFee),n.xp6(5),n.Oqu(e.configuration.networkType),n.xp6(5),n.Oqu(e.configuration.name),n.xp6(5),n.Q6J("ngForOf",e.configuration.seedNodes),n.xp6(6),n.Q6J("ngForOf",e.configuration.dnsSeeds),n.xp6(6),n.Oqu(e.configuration.defaultMaxInboundConnections),n.xp6(5),n.Oqu(e.configuration.defaultMaxOutboundConnections),n.xp6(5),n.Oqu(e.configuration.genesisDate),n.xp6(5),n.Oqu(e.configuration.genesisHash),n.xp6(5),n.Oqu(e.consensus.coinType),n.xp6(5),n.Oqu(e.consensus.coinbaseMaturity),n.xp6(5),n.Oqu(n.lcZ(93,24,e.consensus.isProofOfStake)),n.xp6(6),n.Oqu(e.consensus.maxMoney),n.xp6(5),n.Oqu(e.consensus.lastPOWBlock),n.xp6(5),n.Oqu(e.consensus.premineReward),n.xp6(5),n.Oqu(e.consensus.proofOfStakeReward),n.xp6(5),n.Oqu(e.consensus.proofOfWorkReward),n.xp6(5),n.Oqu(e.consensus.targetSpacing)}}function W(o,t){if(1&o&&(n.TgZ(0,"div"),n.TgZ(1,"h2"),n._uU(2,"Blockchain"),n.qZA(),n.TgZ(3,"p"),n._uU(4,"This information is read from the configuration file for the current chain."),n.qZA(),n.TgZ(5,"div",28),n.TgZ(6,"div"),n.TgZ(7,"span"),n._uU(8,"Name"),n.qZA(),n.TgZ(9,"span"),n._uU(10),n.qZA(),n.qZA(),n.TgZ(11,"div"),n.TgZ(12,"span"),n._uU(13,"Description"),n.qZA(),n.TgZ(14,"span"),n._uU(15),n.qZA(),n.qZA(),n.TgZ(16,"div"),n.TgZ(17,"span"),n._uU(18,"Website"),n.qZA(),n.TgZ(19,"span",29),n.TgZ(20,"a",30),n._uU(21),n.qZA(),n.qZA(),n.qZA(),n.TgZ(22,"div"),n.TgZ(23,"span"),n._uU(24,"Symbol"),n.qZA(),n.TgZ(25,"span"),n._uU(26),n.qZA(),n.qZA(),n.TgZ(27,"div"),n.TgZ(28,"span"),n._uU(29,"Blockheight"),n.qZA(),n.TgZ(30,"span"),n._uU(31),n.qZA(),n.qZA(),n.qZA(),n.TgZ(32,"h2"),n._uU(33,"Network"),n.qZA(),n.TgZ(34,"p"),n._uU(35,"This information is retrieve directly from the indexing node."),n.qZA(),n.YNc(36,P,5,1,"div",26),n.YNc(37,J,81,22,"div",26),n.TgZ(38,"h2"),n._uU(39,"Nodes seen last 24 hours"),n.qZA(),n.YNc(40,D,1,0,"app-progress",25),n.YNc(41,Y,2,1,"div",31),n.YNc(42,B,2,0,"h2",26),n.YNc(43,M,2,0,"p",26),n.YNc(44,V,124,26,"div",31),n.qZA()),2&o){const e=n.oxw(2);n.xp6(10),n.Oqu(e.info.name),n.xp6(5),n.Oqu(e.info.description),n.xp6(5),n.Q6J("href",e.info.url,n.LSH),n.xp6(1),n.Oqu(e.info.url),n.xp6(5),n.Oqu(e.info.symbol),n.xp6(5),n.Oqu(e.info.blockHeight),n.xp6(5),n.Q6J("ngIf",null==e.node?null:e.node.error),n.xp6(1),n.Q6J("ngIf",!(null!=e.node&&e.node.error)),n.xp6(3),n.Q6J("ngIf",!e.peers),n.xp6(1),n.Q6J("ngIf",e.peers),n.xp6(1),n.Q6J("ngIf",e.configuration),n.xp6(1),n.Q6J("ngIf",e.configuration),n.xp6(1),n.Q6J("ngIf",e.configuration)}}function H(o,t){if(1&o&&(n.TgZ(0,"h1"),n._uU(1,"Network Information"),n.qZA(),n._UZ(2,"p"),n.YNc(3,I,1,0,"app-progress",25),n.YNc(4,W,45,13,"div",26)),2&o){const e=n.oxw();n.xp6(3),n.Q6J("ngIf",!e.info),n.xp6(1),n.Q6J("ngIf",e.info)}}const j=[{path:"",component:(()=>{class o{constructor(e,s,p){var A=this;this.api=e,this.setup=s,this.router=p,this.subscription=this.setup.currentChain$.subscribe(function(){var f=(0,u.Z)(function*(Z){yield A.update()});return function(Z){return f.apply(this,arguments)}}())}ngOnDestroy(){this.subscription.unsubscribe()}ngOnInit(){return(0,u.Z)(function*(){})()}update(){var e=this;return(0,u.Z)(function*(){var s;e.info=yield e.api.getInfo(),e.node=e.info.node,e.blockchain=e.node.blockchain,e.network=e.node.network,e.configuration=e.info.configuration,e.consensus=null===(s=e.configuration)||void 0===s?void 0:s.consensus,e.peers=yield e.getPeers()})()}getPeers(){var e=this;return(0,u.Z)(function*(){const s=new Date;s.setDate(s.getDate()-1);const p=yield e.api.getPeers(s);return[...new Set(p.map(Z=>Z.subVer))].map(Z=>{const g={};return g.version=Z,g.peers=p.filter($=>$.subVer===Z),g})})()}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(N.s),n.Y36(b.U),n.Y36(l.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["network"]],decls:28,vars:8,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],[1,"w-full","h-full",3,"src"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["target","_blank",3,"href"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["matRipple","",1,"relative","flex","self-start","pt-2","pb-1","pl-5","pr-4","cursor-pointer","overflow-hidden","rounded-t-xl","border","border-b-0","bg-default"],[1,"flex","items-center"],[1,"overflow-hidden"],[1,"font-medium","leading-6","truncate"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"sm:px-2",3,"animationDuration"],[3,"label"],["matTabContent",""],[1,"ml-1.5","leading-6","truncate","text-secondary"],["class","centered",4,"ngIf"],[4,"ngIf"],[1,"centered"],[1,"grid-label-value"],[1,"breakable"],[3,"href"],["class","grid-label-value",4,"ngIf"],[1,"muted"],[4,"ngFor","ngForOf"],["ngFor","",3,"ngForOf"],[1,"small-little"]],template:function(e,s){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"div",4),n.TgZ(5,"div",5),n._UZ(6,"img",6),n.qZA(),n.TgZ(7,"div",7),n.ynx(8),n.TgZ(9,"div",8),n._uU(10),n.qZA(),n.BQk(),n.YNc(11,y,4,2,"div",9),n.qZA(),n.qZA(),n.TgZ(12,"div",10),n.TgZ(13,"a",11),n.TgZ(14,"button",12),n._UZ(15,"mat-icon",13),n.TgZ(16,"span",14),n._uU(17,"Website"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(18,"div",15),n.TgZ(19,"div",16),n.TgZ(20,"div",17),n.TgZ(21,"div",18),n._uU(22,"Network"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(23,"div",19),n.TgZ(24,"div",20),n.TgZ(25,"mat-tab-group",21),n.TgZ(26,"mat-tab",22),n.YNc(27,H,5,2,"ng-template",23),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.xp6(6),n.s9C("src",null==s.setup.Chain?null:s.setup.Chain.Icon,n.LSH),n.xp6(4),n.hij(" ",null==s.setup.Chain?null:s.setup.Chain.Symbol," "),n.xp6(1),n.Q6J("ngIf",null==s.setup.Chain?null:s.setup.Chain.Description),n.xp6(2),n.s9C("href",null==s.setup.Chain?null:s.setup.Chain.Url,n.LSH),n.xp6(1),n.Q6J("color","primary"),n.xp6(1),n.Q6J("svgIcon","heroicons_solid:chevron-double-right"),n.xp6(10),n.Q6J("animationDuration","0"),n.xp6(1),n.s9C("label",null==s.setup.Chain?null:s.setup.Chain.Name))},directives:[q.O5,d.Hw,c.lW,T.wG,a.SP,a.uX,a.Vc,q.sg],encapsulation:2,changeDetection:0}),o})()}];let z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[l.Bz.forChild(j),c.ot,_.vV,m.t,d.Ps,v.Tx,x.Cv,T.si,U.SJ,h.JX,k.p0,a.Nh,O.X,w.y4,C.m]]}),o})()}}]);