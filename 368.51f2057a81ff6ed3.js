"use strict";(self.webpackChunkblockcore=self.webpackChunkblockcore||[]).push([[368],{9837:(g,v,s)=>{s.d(v,{t:()=>f});var m=s(5245),d=s(4466),p=s(7531),e=s(7261),u=s(5e3);let f=(()=>{class _{}return _.\u0275fac=function(k){return new(k||_)},_.\u0275mod=u.oAB({type:_}),_.\u0275inj=u.cJS({imports:[[m.Ps,d.m,p.c,e.ZX]]}),_})()},9828:(g,v,s)=>{s.d(v,{d:()=>p});var m=s(9808),d=s(5e3);let p=(()=>{class e{}return e.\u0275fac=function(f){return new(f||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[m.ez]]}),e})()},7261:(g,v,s)=>{s.d(v,{ux:()=>U,ZX:()=>D});var m=s(9776),d=s(7429),p=s(9808),e=s(5e3),u=s(508),f=s(7423),_=s(7579),E=s(5698),k=s(2722),h=s(1777),P=s(925),A=s(5113),O=s(5664);function R(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",2),e.TgZ(1,"button",3),e.NdJ("click",function(){return e.CHM(t),e.oxw().action()}),e._uU(2),e.qZA(),e.qZA()}if(2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.data.action)}}function b(i,r){}const C=new e.OlP("MatSnackBarData");class M{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}}const x=Math.pow(2,31)-1;class S{constructor(r,t){this._overlayRef=t,this._afterDismissed=new _.x,this._afterOpened=new _.x,this._onAction=new _.x,this._dismissedByAction=!1,this.containerInstance=r,this.onAction().subscribe(()=>this.dismiss()),r._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(r){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(r,x))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}}let T=(()=>{class i{constructor(t,n){this.snackBarRef=t,this.data=n}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(S),e.Y36(C))},i.\u0275cmp=e.Xpm({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-simple-snackbar"],decls:3,vars:2,consts:[[1,"mat-simple-snack-bar-content"],["class","mat-simple-snackbar-action",4,"ngIf"],[1,"mat-simple-snackbar-action"],["mat-button","",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"span",0),e._uU(1),e.qZA(),e.YNc(2,R,3,1,"div",1)),2&t&&(e.xp6(1),e.Oqu(n.data.message),e.xp6(1),e.Q6J("ngIf",n.hasAction))},directives:[f.lW,p.O5],styles:[".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}.mat-simple-snack-bar-content{overflow:hidden;text-overflow:ellipsis}\n"],encapsulation:2,changeDetection:0}),i})();const L={snackBarState:(0,h.X$)("state",[(0,h.SB)("void, hidden",(0,h.oB)({transform:"scale(0.8)",opacity:0})),(0,h.SB)("visible",(0,h.oB)({transform:"scale(1)",opacity:1})),(0,h.eR)("* => visible",(0,h.jt)("150ms cubic-bezier(0, 0, 0.2, 1)")),(0,h.eR)("* => void, * => hidden",(0,h.jt)("75ms cubic-bezier(0.4, 0.0, 1, 1)",(0,h.oB)({opacity:0})))])};let I=(()=>{class i extends d.en{constructor(t,n,a,o,c){super(),this._ngZone=t,this._elementRef=n,this._changeDetectorRef=a,this._platform=o,this.snackBarConfig=c,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new _.x,this._onExit=new _.x,this._onEnter=new _.x,this._animationState="void",this.attachDomPortal=l=>(this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachDomPortal(l)),this._live="assertive"!==c.politeness||c.announcementMessage?"off"===c.politeness?"off":"polite":"assertive",this._platform.FIREFOX&&("polite"===this._live&&(this._role="status"),"assertive"===this._live&&(this._role="alert"))}attachComponentPortal(t){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachComponentPortal(t)}attachTemplatePortal(t){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachTemplatePortal(t)}onAnimationEnd(t){const{fromState:n,toState:a}=t;if(("void"===a&&"void"!==n||"hidden"===a)&&this._completeExit(),"visible"===a){const o=this._onEnter;this._ngZone.run(()=>{o.next(),o.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._animationState="hidden",this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._onExit}ngOnDestroy(){this._destroyed=!0,this._completeExit()}_completeExit(){this._ngZone.onMicrotaskEmpty.pipe((0,E.q)(1)).subscribe(()=>{this._onExit.next(),this._onExit.complete()})}_applySnackBarClasses(){const t=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(a=>t.classList.add(a)):t.classList.add(n)),"center"===this.snackBarConfig.horizontalPosition&&t.classList.add("mat-snack-bar-center"),"top"===this.snackBarConfig.verticalPosition&&t.classList.add("mat-snack-bar-top")}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{const t=this._elementRef.nativeElement.querySelector("[aria-hidden]"),n=this._elementRef.nativeElement.querySelector("[aria-live]");if(t&&n){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(a=document.activeElement),t.removeAttribute("aria-hidden"),n.appendChild(t),null==a||a.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.R0b),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(P.t4),e.Y36(M))},i.\u0275cmp=e.Xpm({type:i,selectors:[["snack-bar-container"]],viewQuery:function(t,n){if(1&t&&e.Gf(d.Pl,7),2&t){let a;e.iGM(a=e.CRH())&&(n._portalOutlet=a.first)}},hostAttrs:[1,"mat-snack-bar-container"],hostVars:1,hostBindings:function(t,n){1&t&&e.WFA("@state.done",function(o){return n.onAnimationEnd(o)}),2&t&&e.d8E("@state",n._animationState)},features:[e.qOj],decls:3,vars:2,consts:[["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,b,0,0,"ng-template",1),e.qZA(),e._UZ(2,"div")),2&t&&(e.xp6(2),e.uIk("aria-live",n._live)("role",n._role))},directives:[d.Pl],styles:[".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"],encapsulation:2,data:{animation:[L.snackBarState]}}),i})(),D=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[m.U8,d.eL,p.ez,f.ot,u.BQ],u.BQ]}),i})();const y=new e.OlP("mat-snack-bar-default-options",{providedIn:"root",factory:function w(){return new M}});let F=(()=>{class i{constructor(t,n,a,o,c,l){this._overlay=t,this._live=n,this._injector=a,this._breakpointObserver=o,this._parentSnackBar=c,this._defaultConfig=l,this._snackBarRefAtThisLevel=null}get _openedSnackBarRef(){const t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,n){return this._attach(t,n)}openFromTemplate(t,n){return this._attach(t,n)}open(t,n="",a){const o=Object.assign(Object.assign({},this._defaultConfig),a);return o.data={message:t,action:n},o.announcementMessage===t&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,n){const o=e.zs3.create({parent:n&&n.viewContainerRef&&n.viewContainerRef.injector||this._injector,providers:[{provide:M,useValue:n}]}),c=new d.C5(this.snackBarContainerComponent,n.viewContainerRef,o),l=t.attach(c);return l.instance.snackBarConfig=n,l.instance}_attach(t,n){const a=Object.assign(Object.assign(Object.assign({},new M),this._defaultConfig),n),o=this._createOverlay(a),c=this._attachSnackBarContainer(o,a),l=new S(c,o);if(t instanceof e.Rgc){const B=new d.UE(t,null,{$implicit:a.data,snackBarRef:l});l.instance=c.attachTemplatePortal(B)}else{const B=this._createInjector(a,l),j=new d.C5(t,void 0,B),W=c.attachComponentPortal(j);l.instance=W.instance}return this._breakpointObserver.observe(A.u3.HandsetPortrait).pipe((0,k.R)(o.detachments())).subscribe(B=>{o.overlayElement.classList.toggle(this.handsetCssClass,B.matches)}),a.announcementMessage&&c._onAnnounce.subscribe(()=>{this._live.announce(a.announcementMessage,a.politeness)}),this._animateSnackBar(l,a),this._openedSnackBarRef=l,this._openedSnackBarRef}_animateSnackBar(t,n){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),n.duration&&n.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(n.duration))}_createOverlay(t){const n=new m.X_;n.direction=t.direction;let a=this._overlay.position().global();const o="rtl"===t.direction,c="left"===t.horizontalPosition||"start"===t.horizontalPosition&&!o||"end"===t.horizontalPosition&&o,l=!c&&"center"!==t.horizontalPosition;return c?a.left("0"):l?a.right("0"):a.centerHorizontally(),"top"===t.verticalPosition?a.top("0"):a.bottom("0"),n.positionStrategy=a,this._overlay.create(n)}_createInjector(t,n){return e.zs3.create({parent:t&&t.viewContainerRef&&t.viewContainerRef.injector||this._injector,providers:[{provide:S,useValue:n},{provide:C,useValue:t.data}]})}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(m.aV),e.LFG(O.Kd),e.LFG(e.zs3),e.LFG(A.Yg),e.LFG(i,12),e.LFG(y))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})(),U=(()=>{class i extends F{constructor(t,n,a,o,c,l){super(t,n,a,o,c,l),this.simpleSnackBarComponent=T,this.snackBarContainerComponent=I,this.handsetCssClass="mat-snack-bar-handset"}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(m.aV),e.LFG(O.Kd),e.LFG(e.zs3),e.LFG(A.Yg),e.LFG(i,12),e.LFG(y))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:D}),i})()}}]);