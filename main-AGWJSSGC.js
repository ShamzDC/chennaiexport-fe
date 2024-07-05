import{a as ie,b as ae}from"./chunk-ZSXROQ7T.js";import{a as pe,b as se}from"./chunk-FDQRYCWA.js";import{e as ne}from"./chunk-2HVRJBZQ.js";import{e as C,o as te,s as v,t as l,u as oe,v as re}from"./chunk-6PZJJONO.js";import"./chunk-AESYL7IM.js";import{c as W,d as Z,e as X,f as Y,g as J,h as Q,k as $,l as q,o as ee}from"./chunk-HXOPXUWF.js";import"./chunk-WHRSLBFN.js";import{d as G,p as K}from"./chunk-2R4VX25A.js";import{$ as s,D as R,Ia as N,Ja as x,N as m,Qa as D,R as y,Ra as j,S as I,Ta as L,Va as V,Vb as H,Xa as _,Ya as B,Z as T,aa as A,ca as k,cc as U,ea as h,fa as M,g as p,ka as F,la as E,m as f,oa as P,pa as O,u as g,ub as z,z as b}from"./chunk-HG3JTMY3.js";var he=[{path:"home",loadComponent:()=>import("./chunk-5SONGGNY.js").then(t=>t.HomeComponent),children:[{path:"",pathMatch:"full",redirectTo:"dashboard"},{path:"dashboard",loadComponent:()=>import("./chunk-VGAJYWYQ.js").then(t=>t.DashboardComponent)},{path:"master",loadComponent:()=>import("./chunk-2OEYIM44.js").then(t=>t.MasterComponent),children:[{path:"",pathMatch:"full",redirectTo:"user"},{path:"user",loadComponent:()=>import("./chunk-ORGXMJFP.js").then(t=>t.UserComponent)}]},{path:"order",loadComponent:()=>import("./chunk-4X27PDYG.js").then(t=>t.OrderComponent),children:[{path:"",pathMatch:"full",redirectTo:""},{path:"",loadComponent:()=>import("./chunk-KGMX6Y66.js").then(t=>t.InitialComponent)},{path:"new/:id",loadComponent:()=>import("./chunk-O2IXEXD3.js").then(t=>t.NewComponent)},{path:"view",loadComponent:()=>import("./chunk-B2VD5GXB.js").then(t=>t.ViewComponent)},{path:"received_invoice/:id",loadComponent:()=>import("./chunk-RUC2LG3M.js").then(t=>t.ReceivedInvoiceComponent)},{path:"without_invoice/:id",loadComponent:()=>import("./chunk-NJ72356M.js").then(t=>t.WithoutInvoiceComponent)},{path:"preOrder",loadComponent:()=>import("./chunk-FI5LN4O3.js").then(t=>t.PreOrderComponent)},{path:"preOrder/new/:id",loadComponent:()=>import("./chunk-GIJVLCER.js").then(t=>t.PreOrderNewComponent)}]},{path:"repacking",loadComponent:()=>import("./chunk-PFNVCVZZ.js").then(t=>t.RePackingComponent),children:[{path:"",pathMatch:"full",redirectTo:""},{path:"",loadComponent:()=>import("./chunk-CQSMBBAJ.js").then(t=>t.InitialComponent)},{path:"new",loadComponent:()=>import("./chunk-RTYBKO7J.js").then(t=>t.NewComponent)},{path:"order/:id",loadComponent:()=>import("./chunk-CALOGBZC.js").then(t=>t.OrderComponent)},{path:"view/:id",loadComponent:()=>import("./chunk-RO7OVXQY.js").then(t=>t.ViewComponent)}]},{path:"export_invoice",loadComponent:()=>import("./chunk-LEO534JF.js").then(t=>t.ExportInvoiceComponent),children:[{path:"",pathMatch:"full",redirectTo:""},{path:"",loadComponent:()=>import("./chunk-YGZQDPIM.js").then(t=>t.InitialComponent)},{path:"invoice/:id",loadComponent:()=>import("./chunk-ZELQ3X34.js").then(t=>t.InvoiceComponent)},{path:"new/:id",loadComponent:()=>import("./chunk-JKICTINM.js").then(t=>t.NewComponent)}]},{path:"final_packing",loadComponent:()=>import("./chunk-EK25F2FU.js").then(t=>t.FinalPackingComponent)}]},{path:"login",loadComponent:()=>import("./chunk-VU3R4EIA.js").then(t=>t.LoginComponent)},{path:"",pathMatch:"full",redirectTo:"login"}];var ye="@",Ce=(()=>{let e=class e{constructor(o,n,i,a,d){this.doc=o,this.delegate=n,this.zone=i,this.animationType=a,this.moduleImpl=d,this._rendererFactoryPromise=null,this.scheduler=M(L,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-UXB5WBPI.js")).catch(n=>{throw new T(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:i})=>{this._engine=n(this.animationType,this.doc,this.scheduler);let a=new i(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(o,n){let i=this.delegate.createRenderer(o,n);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let a=new S(i);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(d=>{let ge=d.createRenderer(o,n);a.use(ge)}).catch(d=>{a.use(i)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(n){j()},e.\u0275prov=s({token:e,factory:e.\u0275fac});let t=e;return t})(),S=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let r of this.replay)r(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,r){return this.delegate.createElement(e,r)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,r){this.delegate.appendChild(e,r)}insertBefore(e,r,o,n){this.delegate.insertBefore(e,r,o,n)}removeChild(e,r,o){this.delegate.removeChild(e,r,o)}selectRootElement(e,r){return this.delegate.selectRootElement(e,r)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,r,o,n){this.delegate.setAttribute(e,r,o,n)}removeAttribute(e,r,o){this.delegate.removeAttribute(e,r,o)}addClass(e,r){this.delegate.addClass(e,r)}removeClass(e,r){this.delegate.removeClass(e,r)}setStyle(e,r,o,n){this.delegate.setStyle(e,r,o,n)}removeStyle(e,r,o){this.delegate.removeStyle(e,r,o)}setProperty(e,r,o){this.shouldReplay(r)&&this.replay.push(n=>n.setProperty(e,r,o)),this.delegate.setProperty(e,r,o)}setValue(e,r){this.delegate.setValue(e,r)}listen(e,r,o){return this.shouldReplay(r)&&this.replay.push(n=>n.listen(e,r,o)),this.delegate.listen(e,r,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(ye)}};function le(t="animations"){return _("NgAsyncAnimations"),P([{provide:V,useFactory:(e,r,o)=>new Ce(e,r,o,t),deps:[G,Y,B]},{provide:x,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var de=new k("STORAGE_CONFIG_TOKEN"),w=class extends l{constructor(){super()}create(){return p(this,null,function*(){return this})}defineDriver(){return p(this,null,function*(){})}get driver(){return"noop"}get(e){return p(this,null,function*(){return null})}set(e,r){return p(this,null,function*(){})}remove(e){return p(this,null,function*(){})}clear(){return p(this,null,function*(){})}length(){return p(this,null,function*(){return 0})}keys(){return p(this,null,function*(){return[]})}forEach(e){return p(this,null,function*(){})}setEncryptionKey(e){}};function ve(t,e){return K(t)?new w:new l(e)}var me=(()=>{class t{static forRoot(r=null){return{ngModule:t,providers:[{provide:de,useValue:r},{provide:l,useFactory:ve,deps:[N,de]}]}}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=E({type:t}),t.\u0275inj=A({}),t})();var u=(()=>{let e=class e{constructor(o,n){this.overlay=o,this.router=n,this.spinnerTopRef=this.cdkSpinnerCreate(),this.spinnerTopRefLight=this.cdkSpinnerCreateLight(),this.spin=new f,this.empty=new f,this.emptySpinner=b(()=>(this.showEmptySpinner(),R.pipe(m(()=>{this.spinnerTopRefLight?.hasAttached()?this.stopEmptySpinner():console.warn("spinnerTopRefLight is undefined or hasAttached is false")})))).pipe(I()),this.spin.asObservable().pipe(g(i=>i?1:-1),y((i,a)=>i+a>=0?i+a:0,0)).subscribe(i=>{i===1?this.showSpinner():i===0&&this.spinnerTopRef.hasAttached()&&this.stopSpinner()}),this.empty.asObservable().pipe(g(i=>i?1:-1),y((i,a)=>i+a>=0?i+a:0,0)).subscribe(i=>{i===1?this.showEmptySpinner():i===0&&this.spinnerTopRefLight.hasAttached()&&this.stopEmptySpinner()})}cdkSpinnerCreate(){return this.overlay.create({hasBackdrop:!0,backdropClass:"dark-backdrop",positionStrategy:this.overlay.position().global().centerHorizontally().centerVertically()})}cdkSpinnerCreateLight(){return this.overlay.create({width:"100%",hasBackdrop:!0,backdropClass:"no-backdrop",panelClass:this.router.url==="/login"?"no-panel-pad":"",positionStrategy:this.overlay.position().global()})}showEmptySpinner(){this.spinnerTopRefLight.hasAttached()||this.spinnerTopRefLight.attach(new C(se))}showSpinner(){this.spinnerTopRef.hasAttached()||this.spinnerTopRef.attach(new C(pe))}stopSpinner(){this.spinnerTopRef.hasAttached()&&this.spinnerTopRef.detach()}stopEmptySpinner(){this.spinnerTopRefLight.hasAttached()&&this.spinnerTopRefLight.detach()}};e.\u0275fac=function(n){return new(n||e)(h(te),h(q))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ce=(()=>{let e=class e{constructor(o){this.fullSpinner=o}intercept(o,n){let i;return o.headers.get("spinner")==="true"&&(o=o.clone({headers:o.headers.delete("spinner")}),i=this.fullSpinner.emptySpinner.subscribe()),n.handle(o).pipe(m(()=>{i&&i.unsubscribe()}))}};e.\u0275fac=function(n){return new(n||e)(h(u))},e.\u0275prov=s({token:e,factory:e.\u0275fac});let t=e;return t})();var we=t=>()=>t.loadConfig(),ue={providers:[ee(he),Q(),le(),ae(ie()),Z(X()),O(me.forRoot({name:"Chennai_exports",driverOrder:[v.IndexedDB,v.LocalStorage]})),{provide:U,useFactory:we,deps:[re],multi:!0},u,{provide:W,useClass:ce,multi:!0}]};var fe=(()=>{let e=class e{constructor(o){this.storage=o,this.title="chennai_exports"}ngOnInit(){this.storage.init()}};e.\u0275fac=function(n){return new(n||e)(D(oe))},e.\u0275cmp=F({type:e,selectors:[["app-root"]],standalone:!0,features:[H],decls:1,vars:0,template:function(n,i){n&1&&z(0,"router-outlet")},dependencies:[$,ne]});let t=e;return t})();J(fe,ue).catch(t=>console.error(t));
