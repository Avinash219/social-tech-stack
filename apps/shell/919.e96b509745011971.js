(self.webpackChunkshell=self.webpackChunkshell||[]).push([[919],{6919:(E,p,n)=>{n.r(p);var c=n(4014),e=n(6723),r=n(3585),s=n(3370),l=n(7045),m=n(6008);const h=[{path:"projects",loadChildren:()=>(0,s.B5)("projects","./Routes").then(t=>t.remoteRoutes)},{path:"messaging",loadChildren:()=>(0,s.B5)("messaging","./Routes").then(t=>t.remoteRoutes)},{path:"feed",loadChildren:()=>(0,s.B5)("feed","./Routes").then(t=>t.remoteRoutes)},{path:"profile",loadChildren:()=>(0,s.B5)("profile","./Routes").then(t=>t.remoteRoutes)},{path:"auth",loadChildren:()=>(0,s.B5)("auth","./Routes").then(t=>t.remoteRoutes)},{path:"about",loadComponent:()=>(0,s.B5)("about","./Component").then(t=>t.AppComponent)},{path:"",component:(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-nx-welcome"]],standalone:!0,features:[e.\u0275\u0275StandaloneFeature],decls:2,vars:0,consts:[["label","Submit"]],template:function(o,u){1&o&&(e.\u0275\u0275text(0," Test "),e.\u0275\u0275element(1,"p-button",0))},dependencies:[l.CommonModule,m.ButtonModule,m.Button],encapsulation:2})}return t})()}];var i=n(2985),f=n(2393),v=n(9866),C=n(7275);const x={providers:[(0,e.provideZoneChangeDetection)({eventCoalescing:!0}),(0,r.provideRouter)(h),(0,v.provideStore)({user:i.userReducer}),(0,f.provideEffects)([i.AuthEffects]),(0,C.provideHttpClient)()]};var g=n(2817),R=n(4866),S=n(5590);function j(t,A){1&t&&e.\u0275\u0275text(0),2&t&&e.\u0275\u0275textInterpolate1(" Route - ",A," ")}(0,c.bootstrapApplication)((()=>{class t{constructor(){this.messageBus=(0,e.inject)(S.SharedMessageBusService),this.userAddress$=new R.BehaviorSubject("")}ngOnInit(){this.messageBus.subscribe("address",this.showUserDetails.bind(this))}showUserDetails(a){console.log("Data",a),this.userAddress$.next(a)}static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-root"]],standalone:!0,features:[e.\u0275\u0275StandaloneFeature],decls:31,vars:3,consts:[[1,"remote-menu"],["routerLink","/"],["routerLink","auth"],["routerLink","profile"],["routerLink","feed"],["routerLink","messaging"],["routerLink","projects"],["routerLink","about"]],template:function(o,u){if(1&o&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"TESTing"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(2,"lib-header"),e.\u0275\u0275elementStart(3,"div"),e.\u0275\u0275text(4," Router "),e.\u0275\u0275template(5,j,1,1),e.\u0275\u0275pipe(6,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"ul",0),e.\u0275\u0275text(8," Test "),e.\u0275\u0275elementStart(9,"li")(10,"a",1),e.\u0275\u0275text(11,"Home"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(12,"li")(13,"a",2),e.\u0275\u0275text(14,"Auth"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(15,"li")(16,"a",3),e.\u0275\u0275text(17,"Profile"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(18,"li")(19,"a",4),e.\u0275\u0275text(20,"Feed"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(21,"li")(22,"a",5),e.\u0275\u0275text(23,"Messaging"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(24,"li")(25,"a",6),e.\u0275\u0275text(26,"Projects"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(27,"li")(28,"a",7),e.\u0275\u0275text(29,"About"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275element(30,"router-outlet")),2&o){let d;e.\u0275\u0275advance(5),e.\u0275\u0275conditional((d=e.\u0275\u0275pipeBind1(6,1,u.userAddress$))?5:-1,d)}},dependencies:[r.RouterModule,r.RouterOutlet,r.RouterLink,g.HeaderComponent,l.CommonModule,l.AsyncPipe]})}return t})(),x).catch(t=>console.error(t))}}]);