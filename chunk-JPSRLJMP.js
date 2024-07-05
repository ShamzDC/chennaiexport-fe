import{e as J,f as U,g as X}from"./chunk-MUTB2TKD.js";import{b as Y}from"./chunk-UI4BADPC.js";import{b as R,e as O,f as W,i as q,m as G,o as H,p as K}from"./chunk-3ISTCKLJ.js";import{M as Q}from"./chunk-WHRSLBFN.js";import{$b as z,Bb as p,Da as v,Eb as b,Hb as M,Ib as A,Jb as N,Lb as _,N as V,Nb as k,Pa as d,Qa as T,Rb as L,Sb as D,Tb as F,Vb as j,bb as I,gb as f,ib as w,ka as E,mb as S,nb as C,sb as o,tb as r,ua as a,ub as u,va as s,wa as B,wb as h,xa as P,zb as g}from"./chunk-HG3JTMY3.js";var Z=["customerTemplate"];function $(l,c){l&1&&(o(0,"span",7),_(1,"*"),r())}function ee(l,c){if(l&1&&(o(0,"label",4),_(1),f(2,$,2,0,"span",7),r()),l&2){let e=p(2);d(),k(" ",e.label," "),d(),C(2,e._required?2:-1)}}function te(l,c){if(l&1){let e=h();o(0,"div"),f(1,ee,3,2,"label",4),o(2,"div",5)(3,"app-auto-complete",6),g("onInput",function(t){a(e);let n=p();return s(n.autoSearch(t))})("onSelect",function(t){a(e);let n=p();return s(n.doSelect(t))})("onBlur",function(){a(e);let t=p();return s(t.doBlur())})("onClear",function(){a(e);let t=p();return s(t.autoClear())})("focus",function(t){a(e);let n=p();return s(n.autoSearch(t))}),r()()()}if(l&2){let e=p();S("relative w-full ",e.className,""),d(),C(1,e.label?1:-1),d(2),b("name",e.name),w("items",e.items)("displayText",e.searchText)("btnClicked",e._disabled)("errorTrue",((e.control==null||e.control.control==null?null:e.control.control.invalid)||!1)&&e._errorTrue)("isLoading",e.loadingTrue)}}function ne(l,c){if(l&1&&(o(0,"label",8),_(1),r()),l&2){let e=p(2);d(),k(" ",e.label," ")}}function ie(l,c){if(l&1){let e=h();o(0,"div"),f(1,ne,2,1,"label",8),o(2,"div",5)(3,"app-auto-complete",6),g("onInput",function(t){a(e);let n=p();return s(n.autoSearch(t))})("onSelect",function(t){a(e);let n=p();return s(n.doSelect(t))})("onBlur",function(){a(e);let t=p();return s(t.doBlur())})("onClear",function(){a(e);let t=p();return s(t.autoClear())})("focus",function(t){a(e);let n=p();return s(n.autoSearch(t))}),r()()()}if(l&2){let e=p();S("relative w-full ",e.className,""),d(),C(1,e.label?1:-1),d(2),b("name",e.name),w("items",e.items)("displayText",e.searchText)("btnClicked",e._disabled)("errorTrue",((e.control==null||e.control.control==null?null:e.control.control.invalid)||!1)&&e._errorTrue)("isLoading",e.loadingTrue)}}function oe(l,c){if(l&1){let e=h();o(0,"div",9)(1,"div",10)(2,"h5",11),_(3," Add New Customer "),r(),o(4,"button",12),g("click",function(){a(e);let t=p();return s(t.slideDialog.close())}),B(),o(5,"svg",13),u(6,"path",14),r()()(),P(),o(7,"div",15)(8,"div",16)(9,"div",17)(10,"div",18)(11,"div",19),u(12,"app-input-control",20),r(),o(13,"div",19),u(14,"app-input-control",21),r(),o(15,"div",19),u(16,"app-number-control",22),r(),o(17,"div",19),u(18,"app-input-control",23),r(),o(19,"div",19),u(20,"app-input-control",24),r(),o(21,"div",19),u(22,"app-input-control",25),r(),o(23,"div",19),u(24,"app-input-control",26),r()()()()(),o(25,"div",27)(26,"div",28)(27,"button",29),_(28," Cancel "),r(),o(29,"button",30),_(30," Save "),r()()()()}}var ye=(()=>{let c=class c extends H{set labelAnimation(i){this._labelAnimation=i||!1}get labelAnimation(){return this._labelAnimation}set displayText(i){this.searchText=i||""}get displayText(){return this.searchText}set disabled(i){this._disabled=i||!1}get disabled(){return this._disabled}constructor(i,t,n){super(),this.control=i,this.slideDialog=t,this.api=n,this.items=[],this.className="",this._labelAnimation=!1,this.searchText="",this.options={hideErrorMethod:!0,hideFullSpinner:!0,type:""},this.loadingTrue=!1,this._disabled=!1,this.onSelect=new v,this.onSelectBlur=new v,this.control&&(this.control.valueAccessor=this),this.xControl=this.control}ngOnInit(){this.setValidate(this.control)}autoClear(){}doSelect(i){this.onSelect.next(i)}doSelectBlur(){this.onSelectBlur.next(this.searchText)}autoSearch(i){debugger;if(console.log("hit"),i){let t="";i.type==="focus"?t="":t=i,this.loadingTrue=!0;let n={data1:"conf",data2:t,long1:6};this.api.autoSearchForCommon(n,this.options).pipe(V(()=>{this.loadingTrue=!1})).subscribe(m=>{this.items=m.lstprotoCommonDDl})}}openCustomerSlide(){this.slideDialog.open({data:{template:this.customerTemplate}})}};c.\u0275fac=function(t){return new(t||c)(T(O,10),T(X),T(Y))},c.\u0275cmp=E({type:c,selectors:[["app-package-type"]],viewQuery:function(t,n){if(t&1&&M(Z,7),t&2){let m;A(m=N())&&(n.customerTemplate=m.first)}},inputs:{className:"className",labelAnimation:"labelAnimation",displayText:"displayText",disabled:"disabled"},outputs:{onSelect:"onSelect",onSelectBlur:"onSelectBlur"},standalone:!0,features:[I,j],decls:6,vars:6,consts:[["forminput",""],["customerTemplate",""],[3,"class"],["type","hidden","autocomplete","off",3,"ngModelChange","blur","focus","keydown","ngModel","disabled","name","placeholder","id"],[1,"text-ssm","font-normal","text-[#999999]","absolute","top-[-6px]","left-3","bg-white","z-10","px-1"],[1,"flex","items-center","gap-x-3"],["keyname","description",3,"onInput","onSelect","onBlur","onClear","focus","items","displayText","btnClicked","name","errorTrue","isLoading"],[1,"text-red-500"],[1,"text-xs","mb-2","font-semibold","text-[#2B2B2B]"],[1,"flex","flex-col","h-full"],[1,"flex","items-center","py-4","px-4"],[1,"text-primary-dc","font-semibold"],["matRipple","",1,"ml-auto","outline-none","border","rounded-md","border-grey-dc","w-[34px]","h-[34px]","flex","items-center","justify-center",3,"click"],["width","28","height","28","viewBox","0 0 28 28","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M5 23L14 14M14 14L23 5M14 14L5 5M14 14L23 23","stroke","#2B2B2B","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],[1,"flex-1","relative"],[1,"absolute","top-0","left-0","right-0","bottom-0","overflow-hidden","z-0"],[1,"relative","w-full","h-full","overflow-auto","z-10","px-4"],[1,"flex","flex-col","gap-y-2"],[1,"block"],["label","Customer Name"],["label","Customer Code"],["label","Contact Number"],["label","Email ID"],["label","Address Line 1"],["label","Address Line 2"],["label","Address Line 3"],[1,"py-2","border-t","border-t-grey-dc"],[1,"flex","items-center","justify-center","gap-x-4"],[1,"dc-button","text-[#323232]","border","border-grey-dc","max-w-max","rounded-md","hover:bg-[#747474]","hover:text-white"],[1,"dc-button","max-w-max","text-white","bg-[#B188FF]","border","border-[#722BE2]","rounded-md","hover:bg-[#722BE2]"]],template:function(t,n){if(t&1){let m=h();f(0,te,4,10,"div",2)(1,ie,4,10),o(2,"input",3,0),F("ngModelChange",function(x){return a(m),D(n.value,x)||(n.value=x),s(x)}),g("blur",function(){return a(m),s(n.doBlur())})("focus",function(){return a(m),s(n.doFocus())})("keydown",function(x){return a(m),s(n.checkEnter(x))}),r(),f(4,oe,31,0,"ng-template",null,1,z)}t&2&&(C(0,n._labelAnimation?0:1),d(2),b("name",n.name),b("placeholder",n.placeholder),L("ngModel",n.value),w("disabled",n._disabled)("id",n.name))},dependencies:[J,G,R,W,q,Q,K,U]});let l=c;return l})();export{ye as a};
