(self.webpackChunkshell=self.webpackChunkshell||[]).push([[76],{4922:(_,h,o)=>{o.r(h),o.d(h,{AuthDataAccessAuthModule:()=>y,AuthService:()=>l});var t=o(7045),e=o(7275),d=o(6723);let l=(()=>{class p{constructor(g){this._http=g}login(g){return console.log("Payload",g),this._http.post("https://jsonplaceholder.typicode.com/todos",g)}signup(g){return this._http.post("http://api.example.com",g)}logout(){}static#e=this.\u0275fac=function(i){return new(i||p)(d.\u0275\u0275inject(e.HttpClient))};static#t=this.\u0275prov=d.\u0275\u0275defineInjectable({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})(),y=(()=>{class p{static#e=this.\u0275fac=function(i){return new(i||p)};static#t=this.\u0275mod=d.\u0275\u0275defineNgModule({type:p});static#n=this.\u0275inj=d.\u0275\u0275defineInjector({providers:[l,(0,e.provideHttpClient)()],imports:[t.CommonModule]})}return p})()},8144:(_,h,o)=>{o.r(h),o.d(h,{AuthEffects:()=>s,SharedStateModule:()=>d,initialState:()=>m,login:()=>y,loginFailure:()=>f,loginSuccess:()=>p,logout:()=>a,signup:()=>g,signupFailure:()=>r,signupSuccess:()=>i,userReducer:()=>b});var t=o(7045),e=o(6723);let d=(()=>{class v{static#e=this.\u0275fac=function(C){return new(C||v)};static#t=this.\u0275mod=e.\u0275\u0275defineNgModule({type:v});static#n=this.\u0275inj=e.\u0275\u0275defineInjector({imports:[t.CommonModule]})}return v})();var l=o(9866);const y=(0,l.createAction)("[User] Login",(0,l.props)()),p=(0,l.createAction)("[User] Login Success",(0,l.props)()),f=(0,l.createAction)("[User] Login Failure",(0,l.props)()),g=(0,l.createAction)("[User] Signup",(0,l.props)()),i=(0,l.createAction)("[User] Signup",(0,l.props)()),r=(0,l.createAction)("[User] Signup",(0,l.props)()),a=(0,l.createAction)("[User] logout");var u=o(2393),n=o(4866),c=o(7625);let s=(()=>{class v{constructor(M,C){this.action$=M,this._auth=C,this.login$=(0,u.createEffect)(()=>this.action$.pipe((0,u.ofType)(y),(0,n.mergeMap)(({email:I,password:T})=>this._auth.login({email:I,password:T}).pipe((0,n.map)(D=>p({user:D})),(0,n.catchError)(D=>(0,n.of)(f({error:D}))))))),this.signup$=(0,u.createEffect)(()=>this.action$.pipe((0,u.ofType)(g),(0,n.mergeMap)(({email:I,password:T})=>this._auth.signup({email:I,password:T}).pipe((0,n.map)(D=>i({user:D})),(0,n.catchError)(D=>(0,n.of)(r({error:D}))))))),this.logout$=(0,u.createEffect)(()=>this.action$.pipe((0,u.ofType)(a),(0,n.map)(()=>({type:"[User] Logout Success"}))))}static#e=this.\u0275fac=function(C){return new(C||v)(e.\u0275\u0275inject(u.Actions),e.\u0275\u0275inject(c.AuthService))};static#t=this.\u0275prov=e.\u0275\u0275defineInjectable({token:v,factory:v.\u0275fac})}return v})();const m={user:null,error:null},b=(0,l.createReducer)(m,(0,l.on)(p,(v,{user:E})=>(console.log("Login Success Action:",E),{...v,user:E})),(0,l.on)(f,(v,{error:E})=>({...v,error:E})),(0,l.on)(i,(v,{user:E})=>({...v,user:E})),(0,l.on)(r,(v,{error:E})=>({...v,error:E})),(0,l.on)(a,v=>({...v,user:null})))},8945:(_,h,o)=>{o.r(h),o.d(h,{HeaderComponent:()=>u});var t=o(6723),e=o(7045),d=o(6008),l=o(1106),y=o(1306),p=o(9866),f=o(4866),g=o(2985),i=o(3585);function r(n,c){if(1&n&&(t.\u0275\u0275element(0,"p-button",2)(1,"p-button",3)(2,"p-avatar",4),t.\u0275\u0275elementStart(3,"span",5),t.\u0275\u0275text(4),t.\u0275\u0275elementEnd()),2&n){const s=c;t.\u0275\u0275property("rounded",!0)("text",!0)("raised",!0),t.\u0275\u0275advance(),t.\u0275\u0275property("rounded",!0)("text",!0)("raised",!0),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate1(" ",null==s?null:s.email," ")}}function a(n,c){if(1&n){const s=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"p-button",6),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(s);const b=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(b.login())}),t.\u0275\u0275elementEnd()}}let u=(()=>{class n{constructor(){this.store=(0,t.inject)(p.Store),this.user$=new f.BehaviorSubject(null),this.router=(0,t.inject)(i.Router)}ngOnInit(){this.storeSubscription=this.store.select("user").pipe((0,f.map)(s=>s.user)).subscribe(s=>{this.user$?.next(s),this.user$.value&&this.router.navigate(["profile"])})}login(){this.store.dispatch(g.login({email:"Abhishek",password:"123"}))}static#e=this.\u0275fac=function(m){return new(m||n)};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["lib-header"]],standalone:!0,features:[t.\u0275\u0275StandaloneFeature],decls:5,vars:3,consts:[[1,"p-toolbar-group-start"],["icon","pi pi-sign-in","label","Login",1,"mr-2"],["icon","pi pi-home","severity","info",3,"rounded","text","raised"],["icon","pi pi-user","severity","info",3,"rounded","text","raised"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"],[1,"font-bold","text-bluegray-50"],["icon","pi pi-sign-in","label","Login",1,"mr-2",3,"click"]],template:function(m,b){if(1&m&&(t.\u0275\u0275elementStart(0,"p-toolbar")(1,"div",0),t.\u0275\u0275template(2,r,5,7),t.\u0275\u0275pipe(3,"async"),t.\u0275\u0275template(4,a,1,0,"p-button",1),t.\u0275\u0275elementEnd()()),2&m){let v;t.\u0275\u0275advance(2),t.\u0275\u0275conditional((v=t.\u0275\u0275pipeBind1(3,1,b.user$))?2:4,v)}},dependencies:[e.CommonModule,e.AsyncPipe,d.ButtonModule,d.Button,l.ToolbarModule,l.Toolbar,g.SharedStateModule,y.AvatarModule,y.Avatar],changeDetection:0})}return n})()},9079:(_,h,o)=>{o.r(h),o.d(h,{outputFromObservable:()=>p,outputToObservable:()=>f,takeUntilDestroyed:()=>l,toObservable:()=>g,toSignal:()=>i});var t=o(6723),e=o(4866),d=o(2778);function l(r){r||((0,t.assertInInjectionContext)(l),r=(0,t.inject)(t.DestroyRef));const a=new e.Observable(u=>r.onDestroy(u.next.bind(u)));return u=>u.pipe((0,d.takeUntil)(a))}class y{constructor(a){this.source=a,this.destroyed=!1,this.destroyRef=(0,t.inject)(t.DestroyRef),this.destroyRef.onDestroy(()=>{this.destroyed=!0})}subscribe(a){if(this.destroyed)throw new t.\u0275RuntimeError(953,!1);const u=this.source.pipe(l(this.destroyRef)).subscribe({next:n=>a(n)});return{unsubscribe:()=>u.unsubscribe()}}}function p(r,a){return new y(r)}function f(r){const a=(0,t.\u0275getOutputDestroyRef)(r);return new e.Observable(u=>{a?.onDestroy(()=>u.complete());const n=r.subscribe(c=>u.next(c));return()=>n.unsubscribe()})}function g(r,a){!a?.injector&&(0,t.assertInInjectionContext)(g);const u=a?.injector??(0,t.inject)(t.Injector),n=new e.ReplaySubject(1),c=(0,t.effect)(()=>{let s;try{s=r()}catch(m){return void(0,t.untracked)(()=>n.error(m))}(0,t.untracked)(()=>n.next(s))},{injector:u,manualCleanup:!0});return u.get(t.DestroyRef).onDestroy(()=>{c.destroy(),n.complete()}),n.asObservable()}function i(r,a){const u=!a?.manualCleanup;u&&!a?.injector&&(0,t.assertInInjectionContext)(i);const n=u?a?.injector?.get(t.DestroyRef)??(0,t.inject)(t.DestroyRef):null;let c;c=(0,t.signal)(a?.requireSync?{kind:0}:{kind:1,value:a?.initialValue});const s=r.subscribe({next:m=>c.set({kind:1,value:m}),error:m=>{if(a?.rejectErrors)throw m;c.set({kind:2,error:m})}});return n?.onDestroy(s.unsubscribe.bind(s)),(0,t.computed)(()=>{const m=c();switch(m.kind){case 1:return m.value;case 2:throw m.error;case 0:throw new t.\u0275RuntimeError(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}},1880:(_,h,o)=>{o.r(h),o.d(h,{AutoFocus:()=>l,AutoFocusModule:()=>y});var t=o(7045),e=o(6723),d=o(3034);let l=(()=>{class p{autofocus=!1;focused=!1;platformId=(0,e.inject)(e.PLATFORM_ID);document=(0,e.inject)(t.DOCUMENT);host=(0,e.inject)(e.ElementRef);ngAfterContentChecked(){!1===this.autofocus?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){(0,t.isPlatformBrowser)(this.platformId)&&this.autofocus&&setTimeout(()=>{const g=d.DomHandler.getFocusableElements(this.host?.nativeElement);0===g.length&&this.host.nativeElement.focus(),g.length>0&&g[0].focus(),this.focused=!0})}static \u0275fac=function(i){return new(i||p)};static \u0275dir=e.\u0275\u0275defineDirective({type:p,selectors:[["","pAutoFocus",""]],hostAttrs:[1,"p-element"],inputs:{autofocus:[2,"autofocus","autofocus",e.booleanAttribute]},standalone:!0,features:[e.\u0275\u0275InputTransformsFeature]})}return p})(),y=(()=>{class p{static \u0275fac=function(i){return new(i||p)};static \u0275mod=e.\u0275\u0275defineNgModule({type:p});static \u0275inj=e.\u0275\u0275defineInjector({})}return p})()},9114:(_,h,o)=>{o.r(h),o.d(h,{Avatar:()=>i,AvatarModule:()=>r});var t=o(7045),e=o(6723);const d=["*"];function l(a,u){if(1&a&&(e.\u0275\u0275elementStart(0,"span",4),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&a){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275textInterpolate(n.label)}}function y(a,u){if(1&a&&e.\u0275\u0275element(0,"span",6),2&a){const n=e.\u0275\u0275nextContext(2);e.\u0275\u0275classMap(n.icon),e.\u0275\u0275property("ngClass","p-avatar-icon")}}function p(a,u){if(1&a&&e.\u0275\u0275template(0,y,1,3,"span",5),2&a){const n=e.\u0275\u0275nextContext(),c=e.\u0275\u0275reference(6);e.\u0275\u0275property("ngIf",n.icon)("ngIfElse",c)}}function f(a,u){if(1&a){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"img",8),e.\u0275\u0275listener("error",function(s){e.\u0275\u0275restoreView(n);const m=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(m.imageError(s))}),e.\u0275\u0275elementEnd()}if(2&a){const n=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("src",n.image,e.\u0275\u0275sanitizeUrl),e.\u0275\u0275attribute("aria-label",n.ariaLabel)}}function g(a,u){if(1&a&&e.\u0275\u0275template(0,f,1,2,"img",7),2&a){const n=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngIf",n.image)}}let i=(()=>{class a{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new e.EventEmitter;containerClass(){return{"p-avatar p-component":!0,"p-avatar-image":null!=this.image,"p-avatar-circle":"circle"===this.shape,"p-avatar-lg":"large"===this.size,"p-avatar-xl":"xlarge"===this.size}}imageError(n){this.onImageError.emit(n)}static \u0275fac=function(c){return new(c||a)};static \u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["p-avatar"]],hostAttrs:[1,"p-element"],inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},ngContentSelectors:d,decls:7,vars:9,consts:[["iconTemplate",""],["imageTemplate",""],[3,"ngClass","ngStyle"],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(c,s){if(1&c&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275elementStart(0,"div",2),e.\u0275\u0275projection(1),e.\u0275\u0275template(2,l,2,1,"span",3)(3,p,1,2,"ng-template",null,0,e.\u0275\u0275templateRefExtractor)(5,g,1,1,"ng-template",null,1,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd()),2&c){const m=e.\u0275\u0275reference(4);e.\u0275\u0275classMap(s.styleClass),e.\u0275\u0275property("ngClass",s.containerClass())("ngStyle",s.style),e.\u0275\u0275attribute("aria-labelledby",s.ariaLabelledBy)("aria-label",s.ariaLabel)("data-pc-name","avatar"),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",s.label)("ngIfElse",m)}},dependencies:[t.NgClass,t.NgIf,t.NgStyle],styles:["@layer primeng{.p-avatar{display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;font-size:1rem}.p-avatar.p-avatar-image{background-color:transparent}.p-avatar.p-avatar-circle{border-radius:50%;overflow:hidden}.p-avatar .p-avatar-icon{font-size:1rem}.p-avatar img{width:100%;height:100%}}\n"],encapsulation:2,changeDetection:0})}return a})(),r=(()=>{class a{static \u0275fac=function(c){return new(c||a)};static \u0275mod=e.\u0275\u0275defineNgModule({type:a});static \u0275inj=e.\u0275\u0275defineInjector({imports:[t.CommonModule]})}return a})()},461:(_,h,o)=>{o.r(h),o.d(h,{BaseIcon:()=>l});var t=o(6723),e=o(9122);const d=["*"];let l=(()=>{class y{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){this.getAttributes()}getAttributes(){const f=e.ObjectUtils.isEmpty(this.label);this.role=f?void 0:"img",this.ariaLabel=f?void 0:this.label,this.ariaHidden=f}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=function(g){return new(g||y)};static \u0275cmp=t.\u0275\u0275defineComponent({type:y,selectors:[["ng-component"]],hostAttrs:[1,"p-element","p-icon-wrapper"],inputs:{label:"label",spin:[2,"spin","spin",t.booleanAttribute],styleClass:"styleClass"},standalone:!0,features:[t.\u0275\u0275InputTransformsFeature,t.\u0275\u0275StandaloneFeature],ngContentSelectors:d,decls:1,vars:0,template:function(g,i){1&g&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275projection(0))},encapsulation:2,changeDetection:0})}return y})()},563:(_,h,o)=>{o.r(h),o.d(h,{Ripple:()=>y,RippleModule:()=>p});var t=o(7045),e=o(6723),d=o(3034),l=o(3682);let y=(()=>{class f{document;platformId;renderer;el;zone;config;constructor(i,r,a,u,n,c){this.document=i,this.platformId=r,this.renderer=a,this.el=u,this.zone=n,this.config=c}animationListener;mouseDownListener;timeout;ngAfterViewInit(){(0,t.isPlatformBrowser)(this.platformId)&&this.config&&this.config.ripple&&this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))})}onMouseDown(i){let r=this.getInk();if(!r||"none"===this.document.defaultView?.getComputedStyle(r,null).display)return;if(d.DomHandler.removeClass(r,"p-ink-active"),!d.DomHandler.getHeight(r)&&!d.DomHandler.getWidth(r)){let c=Math.max(d.DomHandler.getOuterWidth(this.el.nativeElement),d.DomHandler.getOuterHeight(this.el.nativeElement));r.style.height=c+"px",r.style.width=c+"px"}let a=d.DomHandler.getOffset(this.el.nativeElement),u=i.pageX-a.left+this.document.body.scrollTop-d.DomHandler.getWidth(r)/2,n=i.pageY-a.top+this.document.body.scrollLeft-d.DomHandler.getHeight(r)/2;this.renderer.setStyle(r,"top",n+"px"),this.renderer.setStyle(r,"left",u+"px"),d.DomHandler.addClass(r,"p-ink-active"),this.timeout=setTimeout(()=>{let c=this.getInk();c&&d.DomHandler.removeClass(c,"p-ink-active")},401)}getInk(){const i=this.el.nativeElement.children;for(let r=0;r<i.length;r++)if("string"==typeof i[r].className&&-1!==i[r].className.indexOf("p-ink"))return i[r];return null}resetInk(){let i=this.getInk();i&&d.DomHandler.removeClass(i,"p-ink-active")}onAnimationEnd(i){this.timeout&&clearTimeout(this.timeout),d.DomHandler.removeClass(i.currentTarget,"p-ink-active")}create(){let i=this.renderer.createElement("span");this.renderer.addClass(i,"p-ink"),this.renderer.appendChild(this.el.nativeElement,i),this.renderer.setAttribute(i,"aria-hidden","true"),this.renderer.setAttribute(i,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(i,"animationend",this.onAnimationEnd.bind(this)))}remove(){let i=this.getInk();i&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,d.DomHandler.removeElement(i))}ngOnDestroy(){this.config&&this.config.ripple&&this.remove()}static \u0275fac=function(r){return new(r||f)(e.\u0275\u0275directiveInject(t.DOCUMENT),e.\u0275\u0275directiveInject(e.PLATFORM_ID),e.\u0275\u0275directiveInject(e.Renderer2),e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.NgZone),e.\u0275\u0275directiveInject(l.PrimeNGConfig,8))};static \u0275dir=e.\u0275\u0275defineDirective({type:f,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple","p-element"],standalone:!0})}return f})(),p=(()=>{class f{static \u0275fac=function(r){return new(r||f)};static \u0275mod=e.\u0275\u0275defineNgModule({type:f});static \u0275inj=e.\u0275\u0275defineInjector({})}return f})()},1830:(_,h,o)=>{o.r(h),o.d(h,{Toolbar:()=>a,ToolbarModule:()=>u});var t=o(7045),e=o(6723),d=o(3682);const l=["*"];function y(n,c){1&n&&e.\u0275\u0275elementContainer(0)}function p(n,c){if(1&n&&(e.\u0275\u0275elementStart(0,"div",4),e.\u0275\u0275template(1,y,1,0,"ng-container",5),e.\u0275\u0275elementEnd()),2&n){const s=e.\u0275\u0275nextContext();e.\u0275\u0275attribute("data-pc-section","start"),e.\u0275\u0275advance(),e.\u0275\u0275property("ngTemplateOutlet",s.startTemplate)}}function f(n,c){1&n&&e.\u0275\u0275elementContainer(0)}function g(n,c){if(1&n&&(e.\u0275\u0275elementStart(0,"div",6),e.\u0275\u0275template(1,f,1,0,"ng-container",5),e.\u0275\u0275elementEnd()),2&n){const s=e.\u0275\u0275nextContext();e.\u0275\u0275attribute("data-pc-section","center"),e.\u0275\u0275advance(),e.\u0275\u0275property("ngTemplateOutlet",s.centerTemplate)}}function i(n,c){1&n&&e.\u0275\u0275elementContainer(0)}function r(n,c){if(1&n&&(e.\u0275\u0275elementStart(0,"div",7),e.\u0275\u0275template(1,i,1,0,"ng-container",5),e.\u0275\u0275elementEnd()),2&n){const s=e.\u0275\u0275nextContext();e.\u0275\u0275attribute("data-pc-section","end"),e.\u0275\u0275advance(),e.\u0275\u0275property("ngTemplateOutlet",s.endTemplate)}}let a=(()=>{class n{el;style;styleClass;ariaLabelledBy;templates;startTemplate;endTemplate;centerTemplate;constructor(s){this.el=s}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(s=>{switch(s.getType()){case"start":case"left":this.startTemplate=s.template;break;case"end":case"right":this.endTemplate=s.template;break;case"center":this.centerTemplate=s.template}})}static \u0275fac=function(m){return new(m||n)(e.\u0275\u0275directiveInject(e.ElementRef))};static \u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["p-toolbar"]],contentQueries:function(m,b,v){if(1&m&&e.\u0275\u0275contentQuery(v,d.PrimeTemplate,4),2&m){let E;e.\u0275\u0275queryRefresh(E=e.\u0275\u0275loadQuery())&&(b.templates=E)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},ngContentSelectors:l,decls:5,vars:9,consts:[["role","toolbar",3,"ngClass","ngStyle"],["class","p-toolbar-group-left p-toolbar-group-start",4,"ngIf"],["class","p-toolbar-group-center",4,"ngIf"],["class","p-toolbar-group-right p-toolbar-group-end",4,"ngIf"],[1,"p-toolbar-group-left","p-toolbar-group-start"],[4,"ngTemplateOutlet"],[1,"p-toolbar-group-center"],[1,"p-toolbar-group-right","p-toolbar-group-end"]],template:function(m,b){1&m&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275projection(1),e.\u0275\u0275template(2,p,2,2,"div",1)(3,g,2,2,"div",2)(4,r,2,2,"div",3),e.\u0275\u0275elementEnd()),2&m&&(e.\u0275\u0275classMap(b.styleClass),e.\u0275\u0275property("ngClass","p-toolbar p-component")("ngStyle",b.style),e.\u0275\u0275attribute("aria-labelledby",b.ariaLabelledBy)("data-pc-name","toolbar"),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",b.startTemplate),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",b.centerTemplate),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",b.endTemplate))},dependencies:[t.NgClass,t.NgIf,t.NgTemplateOutlet,t.NgStyle],styles:["@layer primeng{.p-toolbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.p-toolbar-group-start,.p-toolbar-group-center,.p-toolbar-group-end,.p-toolbar-group-left,.p-toolbar-group-right{display:flex;align-items:center}}\n"],encapsulation:2,changeDetection:0})}return n})(),u=(()=>{class n{static \u0275fac=function(m){return new(m||n)};static \u0275mod=e.\u0275\u0275defineNgModule({type:n});static \u0275inj=e.\u0275\u0275defineInjector({imports:[t.CommonModule,d.SharedModule,d.SharedModule]})}return n})()}}]);