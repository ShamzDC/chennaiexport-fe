import{a as J}from"./chunk-UKV72QET.js";import{a as A,b as q}from"./chunk-UI4BADPC.js";import"./chunk-2HVRJBZQ.js";import"./chunk-6PZJJONO.js";import"./chunk-AESYL7IM.js";import{f as W,i as H,m as L,p as G}from"./chunk-3ISTCKLJ.js";import{c as V,d as z,x as U}from"./chunk-WPRVVZZ7.js";import{l as N,p as T}from"./chunk-HXOPXUWF.js";import{M as F}from"./chunk-WHRSLBFN.js";import{k as j}from"./chunk-2R4VX25A.js";import{Bb as k,Lb as n,Nb as m,Ob as O,Pa as l,Qa as p,Rb as P,Sb as B,Tb as D,Vb as R,Yb as E,g as h,ib as f,ka as v,ob as y,qb as _,rb as C,sb as e,tb as s,ua as x,ub as I,va as S,wa as b,wb as M,xa as w,zb as g}from"./chunk-HG3JTMY3.js";var K=(c,a)=>({"text-green-600":c,"text-amber-600":a});function Q(c,a){if(c&1){let o=M();e(0,"div",14),g("click",function(){let t=x(o).$implicit,i=k();return S(i.openOrder(t.orderDetailId))}),e(1,"div",15)(2,"span",16),n(3," Order No "),e(4,"strong",17),n(5),s()(),e(6,"span",16),n(7," Order Date "),e(8,"strong",17),n(9),s()(),e(10,"span",16),n(11," Order Status "),e(12,"strong",18),n(13),s()()(),e(14,"div",19),n(15),s(),e(16,"span",20),n(17," From "),e(18,"strong",21),n(19),s()()()}if(c&2){let o=a.$implicit;l(5),m(" ",o.orderRefNo," "),l(4),m(" ",o.enteredDate," "),l(3),f("ngClass",E(7,K,o.statusDescription==="Complete",o.statusDescription!=="Complete")),l(),m(" ",o.statusDescription," "),l(2),O(" ",o.customerName,", ",o.customerDetails," "),l(4),m(" ",o.vendorName," ")}}var ce=(()=>{let a=class a{constructor(r,t,i,u,d){this.appService=r,this.data=t,this.api=i,this.router=u,this.url=d,this.searchParams=new V,this.searchResult=new z,this.pageSizeOptions=[100],this.appService.isNoMenu.set(!1),this.appService.screens=[{name:"Orders"}],this.appService.backUrl="/home/dashboard"}ngOnInit(){this.init()}init(){return h(this,null,function*(){yield this.data.checkToken(),this.search()})}search(){this.api.getOrderSearch().subscribe(r=>{this.searchParams=r,this.searchParams.pageNumber=1,this.searchParams.rowPerPage=this.pageSizeOptions[0],this.result(!0)})}result(r,t){this.api.searchOrder(this.searchParams).subscribe(i=>{this.searchResult=i})}createOrder(){return h(this,null,function*(){let r={data:0},t=yield this.url.encode(r);this.router.navigateByUrl("/home/order/new/"+t)})}openOrder(r){return h(this,null,function*(){let t={data:r},i=yield this.url.encode(t);this.router.navigateByUrl("/home/order/new/"+i)})}searchInput(){let r={hideErrorMethod:!0,hideFullSpinner:!0,type:""};this.api.searchOrder(this.searchParams,r).subscribe(t=>{this.searchResult=t})}};a.\u0275fac=function(t){return new(t||a)(p(U),p(A),p(q),p(N),p(J))},a.\u0275cmp=v({type:a,selectors:[["app-initial"]],standalone:!0,features:[R],decls:16,vars:2,consts:[[1,"flex-1","flex","flex-col","h-full","w-full","gap-x-2","gap-y-2"],[1,"flex","items-center","gap-x-2.5"],["matRipple","",1,"button-add",3,"click"],[1,"text-xs","font-bold","flex","items-center","justify-center","gap-x-1"],["width","14","height","15","viewBox","0 0 14 15","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7 0.5V14.5","stroke","#2B2B2B","stroke-miterlimit","10"],["d","M0 7.5H14","stroke","#2B2B2B","stroke-miterlimit","10"],[1,"inline-block","min-w-72"],["placeholder","Search any keyword","name","keyword",3,"ngModelChange","noMargin","ngModel"],[1,"flex-1","relative"],[1,"absolute","top-0","left-0","right-0","bottom-0","z-0","overflow-hidden"],[1,"relative","w-full","h-full","z-10","overflow-auto"],[1,"grid","grid-cols-3","gap-x-2","gap-y-2"],[1,"bg-white","border","cursor-pointer","border-grey-dc","rounded-md","p-4","hover:border-primary-dc","hover:bg-menu-hover","transition-all","duration-500","ease-in-out","flex","flex-col","gap-y-1"],[1,"bg-white","border","cursor-pointer","border-grey-dc","rounded-md","p-4","hover:border-primary-dc","hover:bg-menu-hover","transition-all","duration-500","ease-in-out","flex","flex-col","gap-y-1",3,"click"],[1,"flex","items-center","justify-between","gap-x-4"],[1,"text-label","text-ssm","flex","flex-col"],[1,"text-menu-outline"],[1,"",3,"ngClass"],[1,"text-value","text-sm","font-extrabold"],[1,"text-label","text-ssm"],[1,"text-menu-outline","font-extrabold","text-ssm"]],template:function(t,i){t&1&&(e(0,"div",0)(1,"div",1)(2,"button",2),g("click",function(){return i.createOrder()}),e(3,"span",3),b(),e(4,"svg",4),I(5,"path",5)(6,"path",6),s(),n(7," Add "),s()(),w(),e(8,"div",7)(9,"app-input-control",8),D("ngModelChange",function(d){return B(i.searchParams.keyword,d)||(i.searchParams.keyword=d),d}),g("ngModelChange",function(){return i.searchInput()}),s()()(),e(10,"div",9)(11,"div",10)(12,"div",11)(13,"div",12),_(14,Q,20,10,"div",13,y),s()()()()()),t&2&&(l(9),f("noMargin",!0),P("ngModel",i.searchParams.keyword),l(5),C(i.searchResult.plstprotoOrderDetailsResultSet))},dependencies:[T,F,G,L,W,H,j],styles:["app-initial[_ngcontent-%COMP%]{flex:1;position:relative}"]});let c=a;return c})();export{ce as InitialComponent};
