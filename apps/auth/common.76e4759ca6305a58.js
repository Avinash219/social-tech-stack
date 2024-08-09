(self.webpackChunkauth=self.webpackChunkauth||[]).push([[76],{4922:(M,g,r)=>{r.r(g),r.d(g,{AuthDataAccessAuthModule:()=>b,AuthService:()=>e});var t=r(7045),d=r(7275),f=r(6723);let e=(()=>{class u{constructor(a){this._http=a}login(a){return console.log("Payload",a),this._http.post("https://jsonplaceholder.typicode.com/todos",a)}signup(a){return this._http.post("http://api.example.com",a)}logout(){}static#t=this.\u0275fac=function(h){return new(h||u)(f.\u0275\u0275inject(d.HttpClient))};static#e=this.\u0275prov=f.\u0275\u0275defineInjectable({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})(),b=(()=>{class u{static#t=this.\u0275fac=function(h){return new(h||u)};static#e=this.\u0275mod=f.\u0275\u0275defineNgModule({type:u});static#n=this.\u0275inj=f.\u0275\u0275defineInjector({providers:[e,(0,d.provideHttpClient)()],imports:[t.CommonModule]})}return u})()},8144:(M,g,r)=>{r.r(g),r.d(g,{AuthEffects:()=>y,SharedStateModule:()=>f,initialState:()=>l,login:()=>b,loginFailure:()=>j,loginSuccess:()=>u,logout:()=>o,signup:()=>a,signupFailure:()=>c,signupSuccess:()=>h,userReducer:()=>R});var t=r(7045),d=r(6723);let f=(()=>{class i{static#t=this.\u0275fac=function(D){return new(D||i)};static#e=this.\u0275mod=d.\u0275\u0275defineNgModule({type:i});static#n=this.\u0275inj=d.\u0275\u0275defineInjector({imports:[t.CommonModule]})}return i})();var e=r(9866);const b=(0,e.createAction)("[User] Login",(0,e.props)()),u=(0,e.createAction)("[User] Login Success",(0,e.props)()),j=(0,e.createAction)("[User] Login Failure",(0,e.props)()),a=(0,e.createAction)("[User] Signup",(0,e.props)()),h=(0,e.createAction)("[User] Signup",(0,e.props)()),c=(0,e.createAction)("[User] Signup",(0,e.props)()),o=(0,e.createAction)("[User] logout");var n=r(2393),s=r(4866),p=r(7625);let y=(()=>{class i{constructor(S,D){this.action$=S,this._auth=D,this.login$=(0,n.createEffect)(()=>this.action$.pipe((0,n.ofType)(b),(0,s.mergeMap)(({email:E,password:O})=>this._auth.login({email:E,password:O}).pipe((0,s.map)(v=>u({user:v})),(0,s.catchError)(v=>(0,s.of)(j({error:v}))))))),this.signup$=(0,n.createEffect)(()=>this.action$.pipe((0,n.ofType)(a),(0,s.mergeMap)(({email:E,password:O})=>this._auth.signup({email:E,password:O}).pipe((0,s.map)(v=>h({user:v})),(0,s.catchError)(v=>(0,s.of)(c({error:v}))))))),this.logout$=(0,n.createEffect)(()=>this.action$.pipe((0,n.ofType)(o),(0,s.map)(()=>({type:"[User] Logout Success"}))))}static#t=this.\u0275fac=function(D){return new(D||i)(d.\u0275\u0275inject(n.Actions),d.\u0275\u0275inject(p.AuthService))};static#e=this.\u0275prov=d.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac})}return i})();const l={user:null,error:null},R=(0,e.createReducer)(l,(0,e.on)(u,(i,{user:m})=>(console.log("Login Success Action:",m),{...i,user:m})),(0,e.on)(j,(i,{error:m})=>({...i,error:m})),(0,e.on)(h,(i,{user:m})=>({...i,user:m})),(0,e.on)(c,(i,{error:m})=>({...i,error:m})),(0,e.on)(o,i=>({...i,user:null})))},9079:(M,g,r)=>{r.r(g),r.d(g,{outputFromObservable:()=>u,outputToObservable:()=>j,takeUntilDestroyed:()=>e,toObservable:()=>a,toSignal:()=>h});var t=r(6723),d=r(4866),f=r(2778);function e(c){c||((0,t.assertInInjectionContext)(e),c=(0,t.inject)(t.DestroyRef));const o=new d.Observable(n=>c.onDestroy(n.next.bind(n)));return n=>n.pipe((0,f.takeUntil)(o))}class b{constructor(o){this.source=o,this.destroyed=!1,this.destroyRef=(0,t.inject)(t.DestroyRef),this.destroyRef.onDestroy(()=>{this.destroyed=!0})}subscribe(o){if(this.destroyed)throw new t.\u0275RuntimeError(953,!1);const n=this.source.pipe(e(this.destroyRef)).subscribe({next:s=>o(s)});return{unsubscribe:()=>n.unsubscribe()}}}function u(c,o){return new b(c)}function j(c){const o=(0,t.\u0275getOutputDestroyRef)(c);return new d.Observable(n=>{o?.onDestroy(()=>n.complete());const s=c.subscribe(p=>n.next(p));return()=>s.unsubscribe()})}function a(c,o){!o?.injector&&(0,t.assertInInjectionContext)(a);const n=o?.injector??(0,t.inject)(t.Injector),s=new d.ReplaySubject(1),p=(0,t.effect)(()=>{let y;try{y=c()}catch(l){return void(0,t.untracked)(()=>s.error(l))}(0,t.untracked)(()=>s.next(y))},{injector:n,manualCleanup:!0});return n.get(t.DestroyRef).onDestroy(()=>{p.destroy(),s.complete()}),s.asObservable()}function h(c,o){const n=!o?.manualCleanup;n&&!o?.injector&&(0,t.assertInInjectionContext)(h);const s=n?o?.injector?.get(t.DestroyRef)??(0,t.inject)(t.DestroyRef):null;let p;p=(0,t.signal)(o?.requireSync?{kind:0}:{kind:1,value:o?.initialValue});const y=c.subscribe({next:l=>p.set({kind:1,value:l}),error:l=>{if(o?.rejectErrors)throw l;p.set({kind:2,error:l})}});return s?.onDestroy(y.unsubscribe.bind(y)),(0,t.computed)(()=>{const l=p();switch(l.kind){case 1:return l.value;case 2:throw l.error;case 0:throw new t.\u0275RuntimeError(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}}}]);