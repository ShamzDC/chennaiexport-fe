import{a as Q}from"./chunk-UKV72QET.js";import{a as U,b as K}from"./chunk-UI4BADPC.js";import"./chunk-2HVRJBZQ.js";import"./chunk-6PZJJONO.js";import"./chunk-AESYL7IM.js";import{f as z,i as W,m as G,p as H}from"./chunk-3ISTCKLJ.js";import{c as O,k as A,x as L}from"./chunk-WPRVVZZ7.js";import{l as N,m as T,p as V}from"./chunk-HXOPXUWF.js";import"./chunk-WHRSLBFN.js";import{k as F}from"./chunk-2R4VX25A.js";import{Bb as M,Lb as n,Nb as p,Pa as o,Qa as d,Rb as R,Sb as P,Tb as D,Vb as E,Wb as B,Yb as j,g as u,ib as h,ka as x,ob as k,qb as S,rb as _,sb as e,tb as a,ua as f,ub as I,va as b,wa as w,wb as C,xa as y,zb as v}from"./chunk-HG3JTMY3.js";var q=()=>["/home/repacking/new"],J=(c,s)=>({"text-red-500":c,"text-green-600":s});function X(c,s){if(c&1){let l=C();e(0,"div",14),v("click",function(){let t=f(l).$implicit,r=M();return b(r.openOrder(t.repackingDetailId))}),e(1,"div",15)(2,"span",16),n(3," Order No "),e(4,"strong",17),n(5),a()(),e(6,"span",16),n(7," Repacking Date "),e(8,"strong",17),n(9),a()(),e(10,"span",18),n(11," Status "),e(12,"strong",19),n(13),a()()(),e(14,"div",20)(15,"div",21)(16,"div",22),n(17),a(),e(18,"span",16),n(19," From "),e(20,"strong",23),n(21),a()()(),e(22,"div",24)(23,"div",25),n(24," Total No.of PKG "),a(),e(25,"div",26),n(26),a()()()()}if(c&2){let l=s.$implicit;o(5),p(" ",l.orderRefNo," "),o(4),p(" ",l.enteredDate," "),o(3),h("ngClass",j(7,J,l.statusDescription!=="Approved",l.statusDescription==="Approved")),o(),p(" ",l.statusDescription," "),o(4),p(" ",l.customerName," "),o(4),p(" ",l.customerDetails," "),o(5),p(" ",l.totalQuantity," ")}}var ce=(()=>{let s=class s{constructor(i,t,r,g,m){this.appService=i,this.data=t,this.api=r,this.router=g,this.url=m,this.searchParams=new O,this.searchResult=new A,this.pageSizeOptions=[100],this.appService.isNoMenu.set(!1),this.appService.screens=[{name:"Re Packing"}],this.appService.backUrl="/home/dashboard"}ngOnInit(){this.init()}init(){return u(this,null,function*(){yield this.data.checkToken(),this.search()})}search(){this.api.getRepackingSearch().subscribe(i=>{this.searchParams=i,this.searchParams.pageNumber=1,this.searchParams.rowPerPage=100,this.result(!0)})}result(i,t){this.api.searchRepacking(this.searchParams).subscribe(r=>{this.searchResult=r})}createOrder(){return u(this,null,function*(){let i={data:0},t=yield this.url.encode(i);this.router.navigateByUrl("/home/order/new/"+t)})}openOrder(i){return u(this,null,function*(){let t={data:i},r=yield this.url.encode(t);this.router.navigateByUrl("/home/repacking/view/"+r)})}searchInput(){let i={hideErrorMethod:!0,hideFullSpinner:!0,type:""};this.api.searchRepacking(this.searchParams,i).subscribe(t=>{this.searchResult=t})}};s.\u0275fac=function(t){return new(t||s)(d(L),d(U),d(K),d(N),d(Q))},s.\u0275cmp=x({type:s,selectors:[["app-initial"]],standalone:!0,features:[E],decls:16,vars:4,consts:[[1,"flex-1","flex","flex-col","h-full","w-full","gap-x-2","gap-y-2"],[1,"flex","items-center","gap-x-2.5"],["matRipple","",1,"button-add",3,"routerLink"],[1,"text-xs","font-bold","flex","items-center","justify-center","gap-x-1"],["width","14","height","15","viewBox","0 0 14 15","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7 0.5V14.5","stroke","#2B2B2B","stroke-miterlimit","10"],["d","M0 7.5H14","stroke","#2B2B2B","stroke-miterlimit","10"],[1,"inline-block","min-w-72"],["placeholder","Search any keyword","name","keyword",3,"ngModelChange","noMargin","ngModel"],[1,"flex-1","relative"],[1,"absolute","top-0","left-0","right-0","bottom-0","z-0","overflow-hidden"],[1,"relative","w-full","h-full","z-10","overflow-auto"],[1,"grid","grid-cols-3","gap-x-2","gap-y-2"],[1,"bg-white","border","cursor-pointer","border-grey-dc","rounded-md","p-4","hover:border-primary-dc","hover:bg-menu-hover","transition-all","duration-500","ease-in-out","flex","flex-col","gap-y-1"],[1,"bg-white","border","cursor-pointer","border-grey-dc","rounded-md","p-4","hover:border-primary-dc","hover:bg-menu-hover","transition-all","duration-500","ease-in-out","flex","flex-col","gap-y-1",3,"click"],[1,"flex","items-center","justify-between","gap-x-4"],[1,"text-label","text-ssm"],[1,"text-menu-outline","block"],[1,"text-label","text-ssm","block"],[1,"block",3,"ngClass"],[1,"flex","items-center","gap-x-2"],[1,"block"],[1,"text-value","text-sm","font-extrabold"],[1,"text-menu-outline","font-extrabold","text-ssm"],[1,"ml-auto","pl-2","border-l","border-l-grey-dc","text-right"],[1,"label","text-xxs"],[1,"value","text-xs","font-bold"]],template:function(t,r){t&1&&(e(0,"div",0)(1,"div",1)(2,"button",2)(3,"span",3),w(),e(4,"svg",4),I(5,"path",5)(6,"path",6),a(),n(7," Add "),a()(),y(),e(8,"div",7)(9,"app-input-control",8),D("ngModelChange",function(m){return P(r.searchParams.keyword,m)||(r.searchParams.keyword=m),m}),v("ngModelChange",function(){return r.searchInput()}),a()()(),e(10,"div",9)(11,"div",10)(12,"div",11)(13,"div",12),S(14,X,27,10,"div",13,k),a()()()()()),t&2&&(o(2),h("routerLink",B(3,q)),o(7),h("noMargin",!0),R("ngModel",r.searchParams.keyword),o(5),_(r.searchResult.plstprotoRepackingDetailResultSet))},dependencies:[V,T,F,G,z,W,H]});let c=s;return c})();export{ce as InitialComponent};
