"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[623],{1656:(C,m,a)=>{a.d(m,{t:()=>x});var g=a(5861),i=a(5e3);let x=(()=>{class s{constructor(){}ngOnDestroy(){}ngOnInit(){return(0,g.Z)(function*(){})()}}return s.\u0275fac=function(p){return new(p||s)},s.\u0275cmp=i.Xpm({type:s,selectors:[["app-progress"]],decls:11,vars:0,consts:[[1,"py-10","sm:py-12","sm:px-16","text-on-primary-600"],[1,"flex","flex-col","items-center","w-full","max-w-7xl","mx-auto","text-center"],[1,"lds-roller"]],template:function(p,f){1&p&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i._UZ(3,"div"),i._UZ(4,"div"),i._UZ(5,"div"),i._UZ(6,"div"),i._UZ(7,"div"),i._UZ(8,"div"),i._UZ(9,"div"),i._UZ(10,"div"),i.qZA(),i.qZA(),i.qZA())},encapsulation:2}),s})()},7237:(C,m,a)=>{a.d(m,{q:()=>s});var g=a(7423),i=a(5245),x=a(5e3);let s=(()=>{class n{}return n.\u0275fac=function(f){return new(f||n)},n.\u0275mod=x.oAB({type:n}),n.\u0275inj=x.cJS({imports:[[g.ot,i.Ps]]}),n})()},623:(C,m,a)=>{a.r(m),a.d(m,{TickerModule:()=>R});var g=a(4521),i=a(7423),x=a(9832),s=a(4834),n=a(5245),p=a(2181),f=a(5899),k=a(508),A=a(2638),w=a(4847),b=a(4999),v=a(3251),P=a(7455),y=a(1244),U=a(4466),Z=a(5861),e=a(5e3),M=a(5830),D=a(9205),T=a(9808),Y=a(1656),_=a(7238),I=a(5769),q=a(7338);function O(o,u){if(1&o&&(e.TgZ(0,"div",16),e._UZ(1,"mat-icon",13),e.TgZ(2,"div",24),e._uU(3),e.qZA(),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("svgIcon","heroicons_solid:badge-check"),e.xp6(2),e.Oqu(null==t.setup.Chain?null:t.setup.Chain.Description)}}function E(o,u){1&o&&e._UZ(0,"app-progress")}function F(o,u){if(1&o&&(e.TgZ(0,"div",36),e.TgZ(1,"div",37),e.TgZ(2,"div",38),e._uU(3,"Price"),e.qZA(),e.TgZ(4,"div",39),e.ALo(5,"date"),e.ALo(6,"timestamp"),e._uU(7),e.ALo(8,"ago"),e.qZA(),e.qZA(),e.TgZ(9,"div",40),e.TgZ(10,"div",41),e._uU(11),e.qZA(),e.TgZ(12,"div",42),e._UZ(13,"mat-icon",43),e.TgZ(14,"div",44),e.TgZ(15,"span",45),e._uU(16),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"div",46),e._UZ(18,"apx-chart",47),e.qZA(),e.qZA()),2&o){const t=e.oxw(3);e.xp6(4),e.s9C("matTooltip",e.xi3(5,14,e.lcZ(6,17,t.ticker.last_updated_at),"hh:mm")),e.xp6(3),e.hij("last update : ",e.lcZ(8,19,t.ticker.last_updated_at)," "),e.xp6(4),e.hij(" $",t.ticker.usd.toFixed(3),""),e.xp6(2),e.Q6J("ngClass",t.getChangeClass(t.ticker.usd_24h_change))("svgIcon","heroicons_solid:"+t.getChangeIcon(t.ticker.usd_24h_change)),e.xp6(2),e.Q6J("ngClass",t.getChangeClass(t.ticker.usd_24h_change)),e.xp6(1),e.hij("",t.ticker.usd_24h_change.toFixed(2)," %"),e.xp6(2),e.Q6J("chart",t.lastweekPriceChart.chart)("colors",t.lastweekPriceChart.colors)("series",t.lastweekPriceChart.series)("stroke",t.lastweekPriceChart.stroke)("tooltip",t.lastweekPriceChart.tooltip)("xaxis",t.lastweekPriceChart.xaxis)("yaxis",t.lastweekPriceChart.yaxis)}}function B(o,u){if(1&o&&(e.TgZ(0,"div",48),e.TgZ(1,"div",37),e.TgZ(2,"div",38),e._uU(3,"USD Market Cap "),e.qZA(),e.qZA(),e.TgZ(4,"div",40),e.TgZ(5,"div",41),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"div",46),e._UZ(8,"apx-chart",47),e.qZA(),e.qZA()),2&o){const t=e.oxw(3);e.xp6(6),e.hij(" ",t.ticker.usd_market_cap.toFixed(3),""),e.xp6(2),e.Q6J("chart",t.lastweekMarketCapChart.chart)("colors",t.lastweekMarketCapChart.colors)("series",t.lastweekMarketCapChart.series)("stroke",t.lastweekMarketCapChart.stroke)("tooltip",t.lastweekMarketCapChart.tooltip)("xaxis",t.lastweekMarketCapChart.xaxis)("yaxis",t.lastweekMarketCapChart.yaxis)}}function J(o,u){if(1&o&&(e.TgZ(0,"div",48),e.TgZ(1,"div",37),e.TgZ(2,"div",38),e._uU(3,"Volume in Last 24h"),e.qZA(),e.qZA(),e.TgZ(4,"div",40),e.TgZ(5,"div",41),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"div",46),e._UZ(8,"apx-chart",47),e.qZA(),e.qZA()),2&o){const t=e.oxw(3);e.xp6(6),e.hij(" ",t.ticker.usd_24h_vol.toFixed(3),""),e.xp6(2),e.Q6J("chart",t.lastweekVolumeChart.chart)("colors",t.lastweekVolumeChart.colors)("series",t.lastweekVolumeChart.series)("stroke",t.lastweekVolumeChart.stroke)("tooltip",t.lastweekVolumeChart.tooltip)("xaxis",t.lastweekVolumeChart.xaxis)("yaxis",t.lastweekVolumeChart.yaxis)}}function S(o,u){if(1&o&&(e.TgZ(0,"div",27),e.TgZ(1,"div",28),e.TgZ(2,"div",29),e.TgZ(3,"div",30),e.TgZ(4,"div",31),e._uU(5),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",32),e._UZ(7,"apx-chart",33),e.qZA(),e.qZA(),e.YNc(8,F,19,21,"div",34),e.YNc(9,B,9,8,"div",35),e.YNc(10,J,9,8,"div",35),e.qZA()),2&o){const t=e.oxw(2);e.xp6(5),e.hij(" ",null==t.setup.Chain?null:t.setup.Chain.Symbol," to USD Chart "),e.xp6(2),e.Q6J("chart",t.oneYearPriceChart.chart)("colors",t.oneYearPriceChart.colors)("dataLabels",t.oneYearPriceChart.dataLabels)("fill",t.oneYearPriceChart.fill)("grid",t.oneYearPriceChart.grid)("series",t.oneYearPriceChart.series)("stroke",t.oneYearPriceChart.stroke)("tooltip",t.oneYearPriceChart.tooltip)("xaxis",t.oneYearPriceChart.xaxis)("yaxis",t.oneYearPriceChart.yaxis),e.xp6(1),e.Q6J("ngIf",t._3boxchartdata),e.xp6(1),e.Q6J("ngIf",t._3boxchartdata),e.xp6(1),e.Q6J("ngIf",t._3boxchartdata)}}function L(o,u){if(1&o&&(e.YNc(0,E,1,0,"app-progress",25),e.YNc(1,S,11,14,"div",26)),2&o){const t=e.oxw();e.Q6J("ngIf","no"!==t.showloading&&!t._oneYearPricechartdata),e.xp6(1),e.Q6J("ngIf",t._oneYearPricechartdata)}}const Q=[{path:"",component:(()=>{class o{constructor(t,r,d,h){var l=this;this._router=t,this.api=r,this.setup=d,this.cd=h,this.chartprice={},this.tickerLable="Ticker",this.showloading="yes",this.subscription=this.setup.currentChain$.subscribe(function(){var c=(0,Z.Z)(function*(N){l.chain=l.setup.Chain,yield l.updateTicker(),yield l.update3boxChart(),yield l.updateOneYearPriceChart()});return function(N){return c.apply(this,arguments)}}())}ngOnDestroy(){this.subscription.unsubscribe()}update3boxChart(){var t=this;return(0,Z.Z)(function*(){const r=t.setup.chains.map(l=>l).filter(l=>{var c;return l.symbol===(null===(c=t.setup.Chain)||void 0===c?void 0:c.Symbol)}).map(l=>l.coin);if(!r[0])return void(t._3boxchartdata={});const d=`https://api.coingecko.com/api/v3/coins/${r[0]}/market_chart?vs_currency=usd&days=7&interval=daily`,h=yield t.api.download(d);t._3boxchartdata=h,t.cd.detectChanges()})()}updateOneYearPriceChart(){var t=this;return(0,Z.Z)(function*(){const r=t.setup.chains.map(l=>l).filter(l=>{var c;return l.symbol===(null===(c=t.setup.Chain)||void 0===c?void 0:c.Symbol)}).map(l=>l.coin);if(!r[0])return void(t.showloading="no");const d=`https://api.coingecko.com/api/v3/coins/${r[0]}/market_chart?vs_currency=usd&days=365&interval=daily`,h=yield t.api.download(d);t._oneYearPricechartdata=h,t._preparePriceChartData(),t._prepare3BoxChartData(),t.cd.detectChanges()})()}updateTicker(){var t=this;return(0,Z.Z)(function*(){try{t.error=null;const r=t.setup.chains.map(l=>l).filter(l=>{var c;return l.symbol===(null===(c=t.setup.Chain)||void 0===c?void 0:c.Symbol)}).map(l=>l.coin);if(!r[0])return;const d=`https://api.coingecko.com/api/v3/simple/price?ids=${r[0]}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`,h=yield t.api.download(d);t.ticker=h[r[0]]}catch(r){t.ticker={},t.error=r}t.cd.detectChanges()})()}ngOnInit(){window.Apex={chart:{events:{mounted:(t,r)=>{this._fixSvgFill(t.el)},updated:(t,r)=>{this._fixSvgFill(t.el)}}}}}getChangeClass(t){return t<0?"negative":"positive"}getChangeIcon(t){return t<0?"trending-down":"trending-up"}_fixSvgFill(t){const r=this._router.url;Array.from(t.querySelectorAll("*[fill]")).filter(d=>-1!==d.getAttribute("fill").indexOf("url(")).forEach(d=>{const h=d.getAttribute("fill");d.setAttribute("fill",`url(${r}${h.slice(h.indexOf("#"))}`)})}_prepare3BoxChartData(){this.lastweekPriceChart={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#38BDF8"],fill:{colors:["#38BDF8"],opacity:.5},series:[{name:"prices",data:this._3boxchartdata.prices}],stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"datetime"},yaxis:{labels:{formatter:t=>t.toString()}}},this.lastweekMarketCapChart={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#34D399"],fill:{colors:["#34D399"],opacity:.5},series:[{name:"market_caps",data:this._3boxchartdata.market_caps}],stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"datetime"},yaxis:{labels:{formatter:t=>t.toString()}}},this.lastweekVolumeChart={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#FB7185"],fill:{colors:["#FB7185"],opacity:.5},series:[{name:"total_volumes",data:this._3boxchartdata.total_volumes}],stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"datetime"},yaxis:{labels:{formatter:t=>t.toString()}}}}_preparePriceChartData(){this.oneYearPriceChart={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",width:"100%",height:"100%",type:"area",toolbar:{show:!0},zoom:{enabled:!0}},colors:["#818CF8"],dataLabels:{enabled:!1},fill:{colors:["#312E81"]},grid:{show:!0,borderColor:"#334155",padding:{top:10,bottom:-40,left:0,right:0},position:"back",xaxis:{lines:{show:!0}}},series:[{name:"prices",data:this._oneYearPricechartdata.prices}],stroke:{width:2},tooltip:{followCursor:!0,theme:"dark",x:{format:"MMM dd, yyyy"},y:{formatter:t=>`${t}`}},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{stroke:{color:"#475569",dashArray:0,width:2}},labels:{offsetY:-20,style:{colors:"#CBD5E1"}},tickAmount:20,tooltip:{enabled:!1},type:"datetime"},yaxis:{show:!1}}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(g.F0),e.Y36(M.s),e.Y36(D.U),e.Y36(e.sBO))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ticker"]],decls:28,vars:6,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],[1,"w-full","h-full",3,"src"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex items-center",4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["href","","target","_blank"],["mat-flat-button","",1,"blockcore-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["matRipple","",1,"relative","flex","self-start","pt-2","pb-1","pl-5","pr-4","cursor-pointer","overflow-hidden","rounded-t-xl","border","border-b-0","bg-default"],[1,"flex","items-center"],[1,"overflow-hidden"],[1,"font-medium","leading-6","truncate"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"sm:px-2"],[3,"label"],["matTabContent",""],[1,"ml-1.5","leading-6","truncate","text-secondary"],[4,"ngIf"],["class","grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full",4,"ngIf"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-8","w-full"],[1,"sm:col-span-2","lg:col-span-3","dark","flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","items-center","justify-between","mt-10","ml-10","mr-6","sm:mr-10"],[1,"flex","flex-col"],[1,"mr-4","text-2xl","md:text-3xl","font-semibold","tracking-tight","leading-7"],[1,"flex","flex-col","flex-auto","h-80"],[1,"flex-auto","w-full","h-full",3,"chart","colors","dataLabels","fill","grid","series","stroke","tooltip","xaxis","yaxis"],["class","sm:col-span-2 lg:col-span-1 flex flex-col flex-auto bg-card shadow rounded-2xl overflow-hidden",4,"ngIf"],["class","flex flex-col flex-auto bg-card shadow rounded-2xl overflow-hidden",4,"ngIf"],[1,"sm:col-span-2","lg:col-span-1","flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","items-start","justify-between","m-6","mb-0"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"text-sm","font-medium","tracking-tight","leading-6","truncate",3,"matTooltip"],[1,"flex","flex-col","lg:flex-row","lg:items-center","mx-6","mt-3"],[1,"text-7xl","font-bold","tracking-tighter","leading-tight"],[1,"flex","lg:flex-col","lg:ml-3"],[1,"icon-size-5",3,"ngClass","svgIcon"],[1,"flex","items-center","ml-1","lg:ml-0","lg:mt-0.5","text-md","leading-none","whitespace-nowrap","text-secondary"],[1,"font-medium",3,"ngClass"],[1,"flex","flex-col","flex-auto","h-20"],[1,"flex-auto","w-full","h-full",3,"chart","colors","series","stroke","tooltip","xaxis","yaxis"],[1,"flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e._UZ(6,"img",6),e.qZA(),e.TgZ(7,"div",7),e.ynx(8),e.TgZ(9,"div",8),e._uU(10),e.qZA(),e.BQk(),e.YNc(11,O,4,2,"div",9),e.qZA(),e.qZA(),e.TgZ(12,"div",10),e.TgZ(13,"a",11),e.TgZ(14,"button",12),e._UZ(15,"mat-icon",13),e.TgZ(16,"span",14),e._uU(17,"Website"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"div",15),e.TgZ(19,"div",16),e.TgZ(20,"div",17),e.TgZ(21,"div",18),e._uU(22,"Ticker"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"div",19),e.TgZ(24,"div",20),e.TgZ(25,"mat-tab-group",21),e.TgZ(26,"mat-tab",22),e.YNc(27,L,2,2,"ng-template",23),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(6),e.s9C("src",null==r.setup.Chain?null:r.setup.Chain.Icon,e.LSH),e.xp6(4),e.hij(" ",null==r.setup.Chain?null:r.setup.Chain.Symbol," "),e.xp6(1),e.Q6J("ngIf",null==r.setup.Chain?null:r.setup.Chain.Description),e.xp6(3),e.Q6J("color","primary"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:chevron-double-right"),e.xp6(11),e.s9C("label",null==r.setup.Chain?null:r.setup.Chain.Name))},directives:[T.O5,n.Hw,i.lW,k.wG,v.SP,v.uX,v.Vc,Y.t,y.x,_.gM,T.mk],pipes:[T.uU,I.d,q.n],encapsulation:2,changeDetection:0}),o})()}];var j=a(9828),V=a(7237);let R=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[g.Bz.forChild(Q),i.ot,x.vV,s.t,n.Ps,p.Tx,f.Cv,k.si,A.SJ,w.JX,b.p0,v.Nh,y.X,P.y4,U.m,_.AV,j.d,V.q]]}),o})()},9828:(C,m,a)=>{a.d(m,{d:()=>x});var g=a(9808),i=a(5e3);let x=(()=>{class s{}return s.\u0275fac=function(p){return new(p||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({imports:[[g.ez]]}),s})()}}]);