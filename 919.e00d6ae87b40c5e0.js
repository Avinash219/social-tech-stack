(self.webpackChunkshell=self.webpackChunkshell||[]).push([[919],{6919:(g,d,t)=>{t.r(d);var r=t(4014),e=t(6723),s=t(3585),h=t(7045),m=t(6008);const i=[{path:"projects",loadChildren:()=>t.e(844).then(t.t.bind(t,5844,23)).then(n=>n.remoteRoutes)},{path:"messaging",loadChildren:()=>t.e(456).then(t.t.bind(t,5456,23)).then(n=>n.remoteRoutes)},{path:"feed",loadChildren:()=>t.e(632).then(t.t.bind(t,9632,23)).then(n=>n.remoteRoutes)},{path:"profile",loadChildren:()=>t.e(494).then(t.t.bind(t,1113,23)).then(n=>n.remoteRoutes)},{path:"auth",loadChildren:()=>t.e(944).then(t.t.bind(t,9944,23)).then(n=>n.remoteRoutes)},{path:"",component:(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-nx-welcome"]],standalone:!0,features:[e.\u0275\u0275StandaloneFeature],decls:1,vars:0,consts:[["label","Submit"]],template:function(o,x){1&o&&e.\u0275\u0275element(0,"p-button",0)},dependencies:[h.CommonModule,m.ButtonModule,m.Button],encapsulation:2})}return n})()}];var a=t(2985),p=t(2393),u=t(9866),c=t(7275);const f={providers:[(0,e.provideZoneChangeDetection)({eventCoalescing:!0}),(0,s.provideRouter)(i),(0,u.provideStore)({user:a.userReducer}),(0,p.provideEffects)([a.AuthEffects]),(0,c.provideHttpClient)()]};var C=t(2817);(0,r.bootstrapApplication)((()=>{class n{constructor(){this.title="shell"}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-root"]],standalone:!0,features:[e.\u0275\u0275StandaloneFeature],decls:17,vars:0,consts:[[1,"remote-menu"],["routerLink","/"],["routerLink","feed"],["routerLink","messaging"],["routerLink","projects"]],template:function(o,x){1&o&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"TESTing"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(2,"lib-header"),e.\u0275\u0275elementStart(3,"ul",0)(4,"li")(5,"a",1),e.\u0275\u0275text(6,"Home"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(7,"li")(8,"a",2),e.\u0275\u0275text(9,"Feed"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(10,"li")(11,"a",3),e.\u0275\u0275text(12,"Messaging"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(13,"li")(14,"a",4),e.\u0275\u0275text(15,"Projects"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275element(16,"router-outlet"))},dependencies:[s.RouterModule,s.RouterOutlet,s.RouterLink,C.HeaderComponent]})}return n})(),f).catch(n=>console.error(n))}}]);