import{a as ne,b as oe}from"./chunk-CURYQ7Y5.js";import{a as re}from"./chunk-VRV7RVVJ.js";import"./chunk-HX7EONYY.js";import{a as ee,b as te}from"./chunk-4BSIXTF2.js";import{a as ie}from"./chunk-64K6EAEA.js";import{a as $}from"./chunk-Q4DACP65.js";import"./chunk-XJBA6BOJ.js";import{f as K}from"./chunk-MUTB2TKD.js";import"./chunk-FDQRYCWA.js";import{a as Z}from"./chunk-UKV72QET.js";import{a as q,b as X}from"./chunk-UI4BADPC.js";import"./chunk-2HVRJBZQ.js";import{u as R}from"./chunk-6PZJJONO.js";import"./chunk-AESYL7IM.js";import{b as J,f as G,i as z,m as Q,p as Y}from"./chunk-3ISTCKLJ.js";import{e as O,i as P,j as H,x as U}from"./chunk-WPRVVZZ7.js";import{j as F,l as B,m as L,p as N}from"./chunk-HXOPXUWF.js";import"./chunk-WHRSLBFN.js";import"./chunk-2R4VX25A.js";import{Bb as D,Lb as d,Nb as b,Pa as a,Qa as w,Rb as _,Sb as v,Tb as g,Vb as A,Wb as j,g as f,gb as M,ib as m,ka as W,nb as V,pb as k,qb as T,rb as E,sb as n,tb as o,ua as p,ub as I,va as c,wa as S,wb as C,xa as x,zb as h}from"./chunk-HG3JTMY3.js";var se=()=>["/home"];function pe(y,u){if(y&1){let l=C();n(0,"tr",31)(1,"td",45),d(2),o(),n(3,"td",45)(4,"app-product-search",46),g("ngModelChange",function(e){let t=p(l).$implicit;return v(t.productId,e)||(t.productId=e),c(e)}),h("onSelect",function(e){let t=p(l).$implicit,s=D();return c(s.selectProduct(e,t))}),o()(),n(5,"td",45)(6,"app-number-control",47),g("ngModelChange",function(e){let t=p(l).$implicit;return v(t.quantity,e)||(t.quantity=e),c(e)}),h("ngModelChange",function(){p(l);let e=D();return c(e.calculate())}),o()(),n(7,"td",45)(8,"app-unit-search",48),g("ngModelChange",function(e){let t=p(l).$implicit;return v(t.unitTypeValue,e)||(t.unitTypeValue=e),c(e)}),h("onSelect",function(e){let t=p(l).$implicit,s=D();return c(s.selectUnit(e,t))}),o()(),n(9,"td",45)(10,"app-number-control",49),g("ngModelChange",function(e){let t=p(l).$implicit;return v(t.rate,e)||(t.rate=e),c(e)}),h("ngModelChange",function(){p(l);let e=D();return c(e.calculate())}),o()(),n(11,"td",45)(12,"app-number-control",50),g("ngModelChange",function(e){let t=p(l).$implicit;return v(t.amount,e)||(t.amount=e),c(e)}),o()(),n(13,"td",45)(14,"button",51),h("click",function(){let e=p(l),t=e.$implicit,s=e.$index,r=D();return c(r.deleteItemAlert(t,s))}),S(),n(15,"svg",52),I(16,"path",53)(17,"path",54)(18,"path",55)(19,"path",56),o()()()()}if(y&2){let l=u.$implicit,i=u.$index;a(2),b(" ",i+1," "),a(2),m("labelAnimation",!0)("displayText",l.productDetails),_("ngModel",l.productId),a(2),m("labelAnimation",!0),_("ngModel",l.quantity),a(2),m("labelAnimation",!0)("displayText",l.unitDescription),_("ngModel",l.unitTypeValue),a(2),m("labelAnimation",!0),_("ngModel",l.rate),a(2),m("labelAnimation",!0),_("ngModel",l.amount),m("disabled",!0)("tabindex",-1)}}function ce(y,u){if(y&1){let l=C();n(0,"button",57),d(1," Cancel "),o(),n(2,"button",58),h("click",function(){p(l);let e=D();return c(e.save())}),d(3," Save "),o()}}function me(y,u){if(y&1){let l=C();n(0,"button",57),d(1," Cancel "),o(),n(2,"button",58),h("click",function(){p(l);let e=D();return c(e.update())}),d(3," Update "),o()}}var je=(()=>{let u=class u{constructor(i,e,t,s,r,le,ae,de){this.appService=i,this.storage=e,this.data=t,this.route=s,this.url=r,this.api=le,this.router=ae,this.alert=de,this.order=new O,this.slipDetail=new H,this.slipDetailWithoutInvoice=new P,this.type="",this.route.paramMap.subscribe(ue=>{this.init()}),this.appService.isNoMenu.set(!0),this.appService.screens=[{name:"Order"},{name:"Without Invoice"}]}ngOnInit(){}init(){return f(this,null,function*(){let i=this.route.snapshot.paramMap.get("id"),e=yield this.url.decode(i);this.order=e,console.log(this.order),yield this.data.checkToken(),this.order.iprotoOrderDeliverySlipDetailWithoutInvoice.orderDeliverySlipWithoutId===0?(this.type="new",this.create()):(this.type="edit",this.open());let t={data:this.order.orderDetailId},s=yield this.url.encode(t);this.appService.backUrl="/home/order/new/"+s})}create(){this.api.createDeliverySlipDetail().subscribe(i=>{this.slipDetail=i,this.slipDetail.orderDetailId=this.order.orderDetailId,this.addItems()})}addItems(){this.order.lstprotoOrderDeliverySlipDetail.push(JSON.parse(JSON.stringify(this.slipDetail)))}open(){let i={data:this.order.iprotoOrderDeliverySlipDetailWithoutInvoice.orderDeliverySlipWithoutId};this.api.openDeliverySlipDetail(i).subscribe(e=>{this.slipDetail=e,this.slipDetailWithoutInvoice=this.order.iprotoOrderDeliverySlipDetailWithoutInvoice})}selectProduct(i,e){e.productId=i.id,e.productDetails=i.name}selectUnit(i,e){e.unitTypeValue=i.constant,e.unitDescription=i.description}selectVendor(i){this.slipDetailWithoutInvoice.vendorId=i.id,this.slipDetailWithoutInvoice.vendorDetails=i.name}save(){this.slipDetail.orderDetailId=this.order.orderDetailId,this.slipDetailWithoutInvoice.orderDetailId=this.order.orderDetailId,this.order.iprotoOrderDeliverySlipDetailWithoutInvoice=this.slipDetailWithoutInvoice,this.api.saveInvoiceAndDeliverySlip(this.order).subscribe(i=>f(this,null,function*(){this.slipDetail=i;let e={data:this.slipDetail.orderDetailId},t=yield this.url.encode(e);this.router.navigateByUrl("/home/order/new/"+t)}))}update(){this.slipDetail.orderDetailId=this.order.orderDetailId,this.slipDetailWithoutInvoice.orderDetailId=this.order.orderDetailId,this.order.iprotoOrderDeliverySlipDetailWithoutInvoice=this.slipDetailWithoutInvoice,this.api.updateOrder(this.order).subscribe(i=>f(this,null,function*(){this.slipDetail=i;let e={data:this.slipDetail.orderDetailId},t=yield this.url.encode(e);this.router.navigateByUrl("/home/order/new/"+t)}))}calculate(){this.slipDetailWithoutInvoice.totalAmount="0",this.order.lstprotoOrderDeliverySlipDetail.forEach(i=>{i.amount=parseInt(i.quantity||0)*parseFloat(i.rate||0);let e=parseInt(this.slipDetailWithoutInvoice.totalAmount)+parseInt(i.amount||0);this.slipDetailWithoutInvoice.totalAmount=e.toString()})}deleteItem(i,e){i.orderDeliverySlipDetailId===0?this.order.lstprotoOrderDeliverySlipDetail.splice(e,1):this.api.deleteDeliverySlipDetailItem(i).subscribe(t=>{this.order.lstprotoOrderDeliverySlipDetail=t.lstprotoOrderDeliverySlipDetail}),this.calculate()}selectConsignee(i){i&&(this.slipDetailWithoutInvoice.consigneeId=i.id,this.slipDetailWithoutInvoice.consigneeDetails=i.name)}deleteItemAlert(i,e){return f(this,null,function*(){(yield this.alert.deleteAlert("Are you sure, You want to delete this item"))&&this.deleteItem(i,e)})}};u.\u0275fac=function(e){return new(e||u)(w(U),w(R),w(q),w(F),w(Z),w(X),w(B),w(re))},u.\u0275cmp=W({type:u,selectors:[["app-without-invoice"]],standalone:!0,features:[A],decls:81,vars:17,consts:[[1,"flex","flex-row","h-full","w-full","gap-x-4"],[1,"flex","flex-col","h-full","gap-y-2"],[1,"flex","items-center","gap-x-2.5"],["matRipple","",1,"w-8.5","h-8.5","rounded-lg","flex","items-center","justify-center","cursor-pointer","bg-white","border","border-grey-dc",3,"routerLink"],["width","22","height","20","viewBox","0 0 22 20","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M3.21101 19V8.76471H2L11.3578 1L20 8.61345H19.0642V18.9496H14.2752V12.1429H8.15596V19","stroke","#333333","stroke-miterlimit","10"],["width","18","height","18","viewBox","0 0 18 18","fill","none","xmlns","http://www.w3.org/2000/svg",1,"stroke-menu-outline"],["clip-path","url(#clip0_118_782)"],["d","M1.32642 5.21053H10.6106C13.9264 5.21053 16.6738 7.95789 16.6738 11.2737C16.6738 14.5895 13.9264 17.3368 10.6106 17.3368H1.32642","stroke","#333333","stroke-miterlimit","10"],["d","M5.4001 9.37895L1.32642 5.21053L5.4001 1.13684","stroke-miterlimit","10"],["id","clip0_118_782"],["width","18","height","18","fill","white"],[1,"flex-1","flex","flex-col","h-full","w-full","gap-y-2"],[1,"flex","flex-col","gap-x-2.5","rounded-md","bg-white","p-4"],[1,"text-primary-dc","text-xs","font-semibold"],[1,"grid","grid-cols-5","gap-x-3"],[1,"form-group"],[1,"text-label","text-xs","font-semibold"],[1,"text-value","text-sm","font-semibold"],[1,"flex-1","relative"],[1,"absolute","top-0","left-0","right-0","bottom-0","z-0","overflow-hidden"],[1,"relative","w-full","h-full","z-10","overflow-auto"],[1,"flex","flex-col","h-full","bg-white","rounded","px-4","py-3"],[1,"grid","grid-cols-4","gap-x-3","border-b","border-b-grey-dc"],[1,"block"],["label","Delivery Slip No.","name","deliverySlipNumber",3,"ngModelChange","ngModel"],["label","Received Date","name","receivedDate",3,"ngModelChange","ngModel"],["label","Vendor / Consignor Name","name","vendorId",3,"ngModelChange","onSelect","displayText","ngModel"],["label","Consignee Name","name","consigneeId",3,"ngModelChange","onSelect","displayText","ngModel"],[1,"relative","w-full","h-full","z-10","overflow-auto","py-4"],[1,"w-full","border-collapse"],[1,"h-10"],[1,"flex","items-center","py-3","relative"],[1,"w-full","h-[2px]","mr-3","bg-grey-dc"],[1,"w-9","h-9","font-normal","flex","items-center","justify-center","border-2","border-grey-dc","text-center","rounded-md","text-2xl","bg-white","text-[#323232]","transition-all","duration-500","ease-in-out","hover:border-primary-dc","hover:text-primary-dc","px-4","mx-auto",3,"click"],[1,"w-full","h-[2px]","ml-3","bg-grey-dc"],[1,"grid","grid-cols-5","gap-x-4"],[1,"col-span-2","block"],["label","Attachment Invoice Photo"],[1,"col-span-3","block","px-12"],[1,"flex","items-center","gap-x-3","justify-end"],[1,"text-xs","text-label","font-normal"],["name","totalAmount",1,"outline-none","border","border-grey-dc","rounded-md","h-9","px-2",3,"ngModelChange","ngModel","disabled"],[1,"flex","items-center","py-3","px-4","border-t","border-t-grey-dc"],[1,"ml-auto","flex","items-center","gap-x-4"],[1,"px-2","py-1"],["label","Product Name","name","productId",3,"ngModelChange","onSelect","labelAnimation","displayText","ngModel"],["label","Quantity","name","quantity",3,"ngModelChange","labelAnimation","ngModel"],["label","Unit","name","unitTypeValue",3,"ngModelChange","onSelect","labelAnimation","displayText","ngModel"],["label","Rate","name","rate",3,"ngModelChange","labelAnimation","ngModel"],["label","Amount","name","amount",3,"ngModelChange","labelAnimation","ngModel","disabled","tabindex"],["type","button",1,"rounded-full","h-9","w-9","flex","items-center","justify-center","bg-[#FF0012]",3,"click"],["width","15","height","15","viewBox","0 0 15 15","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M12.9199 6.95996V13.9629C12.9199 14.2098 12.7198 14.4099 12.4729 14.4099H2.93699C2.69012 14.4099 2.48999 14.2098 2.48999 13.9629V6.95996","stroke","white","stroke-width","1.11749","stroke-linecap","round","stroke-linejoin","round"],["d","M6.21484 11.4299V6.95996","stroke","white","stroke-width","1.11749","stroke-linecap","round","stroke-linejoin","round"],["d","M9.19482 11.4299V6.95996","stroke","white","stroke-width","1.11749","stroke-linecap","round","stroke-linejoin","round"],["d","M14.4099 3.97997H10.6849M10.6849 3.97997V1.447C10.6849 1.20013 10.4848 1 10.2379 1H5.17196C4.92509 1 4.72496 1.20013 4.72496 1.447V3.97997M10.6849 3.97997H4.72496M1 3.97997H4.72496","stroke","white","stroke-width","1.11749","stroke-linecap","round","stroke-linejoin","round"],[1,"dc-button","text-[#323232]","border","border-grey-dc","max-w-max","rounded-md","hover:bg-[#747474]","hover:text-white"],[1,"dc-button","max-w-max","text-white","bg-[#B188FF]","border","border-[#722BE2]","rounded-md","hover:bg-[#722BE2]",3,"click"]],template:function(e,t){e&1&&(n(0,"div",0)(1,"ol",1)(2,"li",2)(3,"a",3),S(),n(4,"svg",4),I(5,"path",5),o()(),x(),n(6,"a",3),S(),n(7,"svg",6)(8,"g",7),I(9,"path",8)(10,"path",9),o(),n(11,"defs")(12,"clipPath",10),I(13,"rect",11),o()()()()()(),x(),n(14,"div",12)(15,"div",13)(16,"h6",14),d(17," Basic Details "),o(),n(18,"div",15)(19,"div",16)(20,"label",17),d(21," Order No "),o(),n(22,"div",18),d(23),o()(),n(24,"div",16)(25,"label",17),d(26," Order Date "),o(),n(27,"div",18),d(28),o()(),n(29,"div",16)(30,"label",17),d(31," Customer Name "),o(),n(32,"div",18),d(33),o()(),n(34,"div",16)(35,"label",17),d(36," Freight Unloaded Godown Name "),o(),n(37,"div",18),d(38),o()(),n(39,"div",16)(40,"label",17),d(41," Vendor / Consignor Type "),o(),n(42,"div",18),d(43),o()()()(),n(44,"div",19)(45,"div",20)(46,"div",21)(47,"div",22)(48,"div",23)(49,"div",24)(50,"app-input-control",25),g("ngModelChange",function(r){return v(t.slipDetailWithoutInvoice.deliverySlipNumber,r)||(t.slipDetailWithoutInvoice.deliverySlipNumber=r),r}),o()(),n(51,"div",24)(52,"app-date-control",26),g("ngModelChange",function(r){return v(t.slipDetailWithoutInvoice.receivedDate,r)||(t.slipDetailWithoutInvoice.receivedDate=r),r}),o()(),n(53,"div",24)(54,"app-vendor-search",27),g("ngModelChange",function(r){return v(t.slipDetailWithoutInvoice.vendorId,r)||(t.slipDetailWithoutInvoice.vendorId=r),r}),h("onSelect",function(r){return t.selectVendor(r)}),o()(),n(55,"div",24)(56,"app-consignee-search",28),g("ngModelChange",function(r){return v(t.slipDetailWithoutInvoice.consigneeId,r)||(t.slipDetailWithoutInvoice.consigneeId=r),r}),h("onSelect",function(r){return t.selectConsignee(r)}),o()()(),n(57,"div",19)(58,"div",20)(59,"div",29)(60,"table",30)(61,"tbody"),T(62,pe,20,15,"tr",31,k),o()(),n(64,"div",32),I(65,"span",33),n(66,"button",34),h("click",function(){return t.create()}),d(67," + "),o(),I(68,"span",35),o(),n(69,"div",36)(70,"div",37),I(71,"app-attachment-control",38),o(),n(72,"div",39)(73,"div",40)(74,"label",41),d(75," Total Amount "),o(),n(76,"input",42),g("ngModelChange",function(r){return v(t.slipDetailWithoutInvoice.totalAmount,r)||(t.slipDetailWithoutInvoice.totalAmount=r),r}),o()()()()()()(),n(77,"div",43)(78,"div",44),M(79,ce,4,0)(80,me,4,0),o()()()()()()()()),e&2&&(a(3),m("routerLink",j(16,se)),a(3),m("routerLink",t.appService.backUrl),a(17),b(" ",t.order.orderRefNo," "),a(5),b(" ",t.order.orderDate," "),a(5),b(" ",t.order.customerDetails.split("#")[0]," "),a(5),b(" ",t.order.wareHouseDetails.split("#")[0]," "),a(5),b(" ",t.slipDetailWithoutInvoice.vendorDetails.split("#")[0]," "),a(7),_("ngModel",t.slipDetailWithoutInvoice.deliverySlipNumber),a(2),_("ngModel",t.slipDetailWithoutInvoice.receivedDate),a(2),m("displayText",t.slipDetailWithoutInvoice.vendorDetails.split("#")[0]),_("ngModel",t.slipDetailWithoutInvoice.vendorId),a(2),m("displayText",t.slipDetailWithoutInvoice.consigneeDetails.split("#")[0]),_("ngModel",t.slipDetailWithoutInvoice.consigneeId),a(6),E(t.order.lstprotoOrderDeliverySlipDetail),a(14),_("ngModel",t.slipDetailWithoutInvoice.totalAmount),m("disabled",!0),a(3),V(79,t.type==="new"?79:80))},dependencies:[N,L,Y,ie,$,ne,ee,Q,J,G,z,te,K,oe]});let y=u;return y})();export{je as WithoutInvoiceComponent};
