"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[623],{1656:(k,m,a)=>{a.d(m,{t:()=>f});var x=a(5861),c=a(5e3);let f=(()=>{class l{constructor(){}ngOnDestroy(){}ngOnInit(){return(0,x.Z)(function*(){})()}}return l.\u0275fac=function(p){return new(p||l)},l.\u0275cmp=c.Xpm({type:l,selectors:[["app-progress"]],decls:11,vars:0,consts:[[1,"py-10","sm:py-12","sm:px-16","text-on-primary-600"],[1,"flex","flex-col","items-center","w-full","max-w-7xl","mx-auto","text-center"],[1,"lds-roller"]],template:function(p,g){1&p&&(c.TgZ(0,"div",0)(1,"div",1)(2,"div",2),c._UZ(3,"div")(4,"div")(5,"div")(6,"div")(7,"div")(8,"div")(9,"div")(10,"div"),c.qZA()()())},encapsulation:2}),l})()},7237:(k,m,a)=>{a.d(m,{q:()=>l});var x=a(7423),c=a(5245),f=a(5e3);let l=(()=>{class s{}return s.\u0275fac=function(g){return new(g||s)},s.\u0275mod=f.oAB({type:s}),s.\u0275inj=f.cJS({imports:[x.ot,c.Ps]}),s})()},623:(k,m,a)=>{a.r(m),a.d(m,{TickerModule:()=>W});var x=a(4521),c=a(7423),f=a(9832),l=a(4834),s=a(5245),p=a(2181),g=a(5899),w=a(508),Z=a(2638),b=a(4847),P=a(4999),v=a(3251),A=a(8608),_=a(7e3),M=a(4466),C=a(5861),t=a(5e3),U=a(5830),D=a(9205),y=a(9808),T=a(7238),Y=a(1656),I=a(7338),O=a(5769);function E(o,u){if(1&o&&(t.TgZ(0,"div",20),t._UZ(1,"mat-icon",13),t.TgZ(2,"div",21),t._uU(3),t.qZA()()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("svgIcon","heroicons_solid:badge-check"),t.xp6(2),t.Oqu(null==e.setup.Chain?null:e.setup.Chain.Description)}}function F(o,u){1&o&&t._UZ(0,"app-progress")}function B(o,u){if(1&o&&(t.TgZ(0,"div",33)(1,"div",34)(2,"div",35),t._uU(3,"Price"),t.qZA(),t.TgZ(4,"div",36),t.ALo(5,"date"),t.ALo(6,"timestamp"),t._uU(7),t.ALo(8,"ago"),t.qZA()(),t.TgZ(9,"div",37)(10,"div",38),t._uU(11),t.qZA(),t.TgZ(12,"div",39),t._UZ(13,"mat-icon",40),t.TgZ(14,"div",41)(15,"span",42),t._uU(16),t.qZA()()()(),t.TgZ(17,"div",43),t._UZ(18,"apx-chart",44),t.qZA()()),2&o){const e=t.oxw(3);t.xp6(4),t.s9C("matTooltip",t.xi3(5,14,t.lcZ(6,17,e.ticker.last_updated_at),"hh:mm")),t.xp6(3),t.hij("last update : ",t.lcZ(8,19,e.ticker.last_updated_at)," "),t.xp6(4),t.hij(" $",e.ticker.usd.toFixed(3),""),t.xp6(2),t.Q6J("ngClass",e.getChangeClass(e.ticker.usd_24h_change))("svgIcon","heroicons_solid:"+e.getChangeIcon(e.ticker.usd_24h_change)),t.xp6(2),t.Q6J("ngClass",e.getChangeClass(e.ticker.usd_24h_change)),t.xp6(1),t.hij("",e.ticker.usd_24h_change.toFixed(2)," %"),t.xp6(2),t.Q6J("chart",e.lastweekPriceChart.chart)("colors",e.lastweekPriceChart.colors)("series",e.lastweekPriceChart.series)("stroke",e.lastweekPriceChart.stroke)("tooltip",e.lastweekPriceChart.tooltip)("xaxis",e.lastweekPriceChart.xaxis)("yaxis",e.lastweekPriceChart.yaxis)}}function J(o,u){if(1&o&&(t.TgZ(0,"div",45)(1,"div",34)(2,"div",35),t._uU(3,"USD Market Cap "),t.qZA()(),t.TgZ(4,"div",37)(5,"div",38),t._uU(6),t.qZA()(),t.TgZ(7,"div",43),t._UZ(8,"apx-chart",44),t.qZA()()),2&o){const e=t.oxw(3);t.xp6(6),t.hij(" ",e.ticker.usd_market_cap.toFixed(3),""),t.xp6(2),t.Q6J("chart",e.lastweekMarketCapChart.chart)("colors",e.lastweekMarketCapChart.colors)("series",e.lastweekMarketCapChart.series)("stroke",e.lastweekMarketCapChart.stroke)("tooltip",e.lastweekMarketCapChart.tooltip)("xaxis",e.lastweekMarketCapChart.xaxis)("yaxis",e.lastweekMarketCapChart.yaxis)}}function S(o,u){if(1&o&&(t.TgZ(0,"div",45)(1,"div",34)(2,"div",35),t._uU(3,"Volume in Last 24h"),t.qZA()(),t.TgZ(4,"div",37)(5,"div",38),t._uU(6),t.qZA()(),t.TgZ(7,"div",43),t._UZ(8,"apx-chart",44),t.qZA()()),2&o){const e=t.oxw(3);t.xp6(6),t.hij(" ",e.ticker.usd_24h_vol.toFixed(3),""),t.xp6(2),t.Q6J("chart",e.lastweekVolumeChart.chart)("colors",e.lastweekVolumeChart.colors)("series",e.lastweekVolumeChart.series)("stroke",e.lastweekVolumeChart.stroke)("tooltip",e.lastweekVolumeChart.tooltip)("xaxis",e.lastweekVolumeChart.xaxis)("yaxis",e.lastweekVolumeChart.yaxis)}}function L(o,u){if(1&o&&(t.TgZ(0,"div",24)(1,"div",25)(2,"div",26)(3,"div",27)(4,"div",28),t._uU(5),t.qZA()()(),t.TgZ(6,"div",29),t._UZ(7,"apx-chart",30),t.qZA()(),t.YNc(8,B,19,21,"div",31),t.YNc(9,J,9,8,"div",32),t.YNc(10,S,9,8,"div",32),t.qZA()),2&o){const e=t.oxw(2);t.xp6(5),t.hij(" ",null==e.setup.Chain?null:e.setup.Chain.Symbol," to USD Chart "),t.xp6(2),t.Q6J("chart",e.oneYearPriceChart.chart)("colors",e.oneYearPriceChart.colors)("dataLabels",e.oneYearPriceChart.dataLabels)("fill",e.oneYearPriceChart.fill)("grid",e.oneYearPriceChart.grid)("series",e.oneYearPriceChart.series)("stroke",e.oneYearPriceChart.stroke)("tooltip",e.oneYearPriceChart.tooltip)("xaxis",e.oneYearPriceChart.xaxis)("yaxis",e.oneYearPriceChart.yaxis),t.xp6(1),t.Q6J("ngIf",e._3boxchartdata),t.xp6(1),t.Q6J("ngIf",e._3boxchartdata),t.xp6(1),t.Q6J("ngIf",e._3boxchartdata)}}function Q(o,u){if(1&o&&(t.YNc(0,F,1,0,"app-progress",22),t.YNc(1,L,11,14,"div",23)),2&o){const e=t.oxw();t.Q6J("ngIf","no"!==e.showloading&&!e._oneYearPricechartdata),t.xp6(1),t.Q6J("ngIf",e._oneYearPricechartdata)}}const j=[{path:"",component:(()=>{class o{constructor(e,r,d,h){var i=this;this._router=e,this.api=r,this.setup=d,this.cd=h,this.chartprice={},this.tickerLable="Ticker",this.showloading="yes",this.subscription=this.setup.currentChain$.subscribe(function(){var n=(0,C.Z)(function*(N){i.chain=i.setup.Chain,yield i.updateTicker(),yield i.update3boxChart(),yield i.updateOneYearPriceChart()});return function(N){return n.apply(this,arguments)}}())}ngOnDestroy(){this.subscription.unsubscribe()}update3boxChart(){var e=this;return(0,C.Z)(function*(){const r=e.setup.chains.map(i=>i).filter(i=>{var n;return i.symbol===(null===(n=e.setup.Chain)||void 0===n?void 0:n.Symbol)}).map(i=>i.coin);if(!r[0])return void(e._3boxchartdata={});const d=`https://api.coingecko.com/api/v3/coins/${r[0]}/market_chart?vs_currency=usd&days=7&interval=daily`,h=yield e.api.download(d);e._3boxchartdata=h,e.cd.detectChanges()})()}updateOneYearPriceChart(){var e=this;return(0,C.Z)(function*(){const r=e.setup.chains.map(i=>i).filter(i=>{var n;return i.symbol===(null===(n=e.setup.Chain)||void 0===n?void 0:n.Symbol)}).map(i=>i.coin);if(!r[0])return void(e.showloading="no");const d=`https://api.coingecko.com/api/v3/coins/${r[0]}/market_chart?vs_currency=usd&days=365&interval=daily`,h=yield e.api.download(d);e._oneYearPricechartdata=h,e._preparePriceChartData(),e._prepare3BoxChartData(),e.cd.detectChanges()})()}updateTicker(){var e=this;return(0,C.Z)(function*(){try{e.error=null;const r=e.setup.chains.map(i=>i).filter(i=>{var n;return i.symbol===(null===(n=e.setup.Chain)||void 0===n?void 0:n.Symbol)}).map(i=>i.coin);if(!r[0])return;const d=`https://api.coingecko.com/api/v3/simple/price?ids=${r[0]}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`,h=yield e.api.download(d);e.ticker=h[r[0]]}catch(r){e.ticker={},e.error=r}e.cd.detectChanges()})()}ngOnInit(){window.Apex={chart:{events:{mounted:(e,r)=>{this._fixSvgFill(e.el)},updated:(e,r)=>{this._fixSvgFill(e.el)}}}}}getChangeClass(e){return e<0?"negative":"positive"}getChangeIcon(e){return e<0?"trending-down":"trending-up"}_fixSvgFill(e){const r=this._router.url;Array.from(e.querySelectorAll("*[fill]")).filter(d=>-1!==d.getAttribute("fill").indexOf("url(")).forEach(d=>{const h=d.getAttribute("fill");d.setAttribute("fill",`url(${r}${h.slice(h.indexOf("#"))}`)})}_prepare3BoxChartData(){this.lastweekPriceChart={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#38BDF8"],fill:{colors:["#38BDF8"],opacity:.5},series:[{name:"prices",data:this._3boxchartdata.prices}],stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"datetime"},yaxis:{labels:{formatter:e=>e.toString()}}},this.lastweekMarketCapChart={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#34D399"],fill:{colors:["#34D399"],opacity:.5},series:[{name:"market_caps",data:this._3boxchartdata.market_caps}],stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"datetime"},yaxis:{labels:{formatter:e=>e.toString()}}},this.lastweekVolumeChart={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#FB7185"],fill:{colors:["#FB7185"],opacity:.5},series:[{name:"total_volumes",data:this._3boxchartdata.total_volumes}],stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"datetime"},yaxis:{labels:{formatter:e=>e.toString()}}}}_preparePriceChartData(){this.oneYearPriceChart={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",width:"100%",height:"100%",type:"area",toolbar:{show:!0},zoom:{enabled:!0}},colors:["#818CF8"],dataLabels:{enabled:!1},fill:{colors:["#312E81"]},grid:{show:!0,borderColor:"#334155",padding:{top:10,bottom:-40,left:0,right:0},position:"back",xaxis:{lines:{show:!0}}},series:[{name:"prices",data:this._oneYearPricechartdata.prices}],stroke:{width:2},tooltip:{followCursor:!0,theme:"dark",x:{format:"MMM dd, yyyy"},y:{formatter:e=>`${e}`}},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{stroke:{color:"#475569",dashArray:0,width:2}},labels:{offsetY:-20,style:{colors:"#CBD5E1"}},tickAmount:20,tooltip:{enabled:!1},type:"datetime"},yaxis:{show:!1}}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(x.F0),t.Y36(U.s),t.Y36(D.U),t.Y36(t.sBO))},o.\u0275cmp=t.Xpm({type:o,selectors:[["ticker"]],decls:23,vars:5,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],[1,"w-full","h-full",3,"src"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3","hidden","md:block"],["href","","target","_blank"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"sm:px-2"],["label","Ticker"],["matTabContent",""],[1,"flex","items-center"],[1,"ml-1.5","leading-6","truncate","text-secondary"],[4,"ngIf"],["class","grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full",4,"ngIf"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-8","w-full"],[1,"sm:col-span-2","lg:col-span-3","dark","flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","items-center","justify-between","mt-10","ml-10","mr-6","sm:mr-10"],[1,"flex","flex-col"],[1,"mr-4","text-2xl","md:text-3xl","font-semibold","tracking-tight","leading-7"],[1,"flex","flex-col","flex-auto","h-80"],[1,"flex-auto","w-full","h-full",3,"chart","colors","dataLabels","fill","grid","series","stroke","tooltip","xaxis","yaxis"],["class","sm:col-span-2 lg:col-span-1 flex flex-col flex-auto bg-card shadow rounded-2xl overflow-hidden",4,"ngIf"],["class","flex flex-col flex-auto bg-card shadow rounded-2xl overflow-hidden",4,"ngIf"],[1,"sm:col-span-2","lg:col-span-1","flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","items-start","justify-between","m-6","mb-0"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"text-sm","font-medium","tracking-tight","leading-6","truncate",3,"matTooltip"],[1,"flex","flex-col","lg:flex-row","lg:items-center","mx-6","mt-3"],[1,"text-3xl","font-bold","tracking-tighter","leading-tight"],[1,"flex","lg:flex-col","lg:ml-3"],[1,"icon-size-5",3,"ngClass","svgIcon"],[1,"flex","items-center","ml-1","lg:ml-0","lg:mt-0.5","text-md","leading-none","whitespace-nowrap","text-secondary"],[1,"font-medium",3,"ngClass"],[1,"flex","flex-col","flex-auto","h-20"],[1,"flex-auto","w-full","h-full",3,"chart","colors","series","stroke","tooltip","xaxis","yaxis"],[1,"flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7),t.ynx(8),t.TgZ(9,"div",8),t._uU(10),t.qZA(),t.BQk(),t.YNc(11,E,4,2,"div",9),t.qZA()(),t.TgZ(12,"div",10)(13,"a",11)(14,"button",12),t._UZ(15,"mat-icon",13),t.TgZ(16,"span",14),t._uU(17,"Website"),t.qZA()()()()()()(),t.TgZ(18,"div",15)(19,"div",16)(20,"mat-tab-group",17)(21,"mat-tab",18),t.YNc(22,Q,2,2,"ng-template",19),t.qZA()()()()()),2&e&&(t.xp6(6),t.s9C("src",null==r.setup.Chain?null:r.setup.Chain.Icon,t.LSH),t.xp6(4),t.hij(" ",null==r.setup.Chain?null:r.setup.Chain.Symbol," "),t.xp6(1),t.Q6J("ngIf",null==r.setup.Chain?null:r.setup.Chain.Description),t.xp6(3),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-double-right"))},dependencies:[c.lW,s.Hw,v.SP,v.uX,v.Vc,_.x,y.mk,y.O5,T.gM,Y.t,y.uU,I.n,O.d],encapsulation:2,changeDetection:0}),o})()}];var V=a(9828),R=a(7237);let W=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[x.Bz.forChild(j),c.ot,f.vV,l.t,s.Ps,p.Tx,g.Cv,w.si,Z.SJ,b.JX,P.p0,v.Nh,_.X,A.y4,M.m,T.AV,V.d,R.q]}),o})()},9828:(k,m,a)=>{a.d(m,{d:()=>f});var x=a(9808),c=a(5e3);let f=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=c.oAB({type:l}),l.\u0275inj=c.cJS({imports:[x.ez]}),l})()}}]);