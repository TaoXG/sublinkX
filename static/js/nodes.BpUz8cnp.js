import{d as e,r as a,o as l,C as t,c as o,e as s,Z as n,w as i,l as r,a2 as u,g as p,ay as d,W as c,aH as m,a0 as v,a1 as f,aN as g,aO as y}from"./index.CbUOdihh.js";import{E as j}from"./el-card.BPwIaAci.js";import{g as _,A as C,D as h,E as x,a as w,b}from"./node.KYKtBbGR.js";import"./el-tag.1Ui6AIgF.js";import"./el-select.DuOdkn3k.js";import"./el-scrollbar.Db_QYSer.js";import"./el-popper.uv0IDWXX.js";import"./el-tooltip.l0sNRNKZ.js";import{E as k}from"./el-dialog.BDgdFubL.js";import{_ as V}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./isEqual.D7akRqKq.js";import"./_initCloneObject.C_ldCEuI.js";import"./debounce.-Q7geHoC.js";import"./index.9oYZqR7U.js";import"./strings.u6Nj375h.js";import"./isUndefined.DgmxjSXK.js";import"./use-dialog.DzObFoPt.js";import"./refs.DAxsLguZ.js";const z=e=>(g("data-v-11dd3027"),e=e(),y(),e),D={class:"dialog-footer"},E=z((()=>r("div",{style:{"margin-bottom":"10px"}},null,-1))),B=z((()=>r("div",{style:{"margin-top":"20px"}},null,-1))),I=z((()=>r("div",{style:{"margin-top":"20px"}},null,-1))),O=V(e({__name:"nodes",setup(e){const g=a([]),y=a(""),V=a(""),z=a(!1);a(!1);const O=a();async function S(){const{data:e}=await _();g.value=e}l((async()=>{S()}));const T=async()=>{await C({link:y.value.trim(),name:V.value.trim()}),S(),d.success("添加成功"),z.value=!1},U=a([]),N=e=>{U.value=e},H=()=>{0!==U.value.length&&m.confirm("你是否要删除选中这些 ?","提示",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((()=>{for(let e=0;e<U.value.length;e++)h({id:U.value[e].ID});S(),d({type:"success",message:"删除成功"})}))},K=a(1),L=a(10),q=e=>{L.value=e},A=e=>{K.value=e},G=t((()=>{const e=(K.value-1)*L.value,a=e+L.value;return g.value.slice(e,a)}));return(e,a)=>{const l=v,t=f,_=k,C=x,U=w,M=b,Q=j;return o(),s("div",null,[n(_,{modelValue:z.value,"onUpdate:modelValue":a[3]||(a[3]=e=>z.value=e),title:"添加节点"},{footer:i((()=>[r("div",D,[n(t,{onClick:a[2]||(a[2]=e=>z.value=!1)},{default:i((()=>[u("关闭")])),_:1}),n(t,{type:"primary",onClick:T},{default:i((()=>[u("确定")])),_:1})])])),default:i((()=>[n(l,{modelValue:y.value,"onUpdate:modelValue":a[0]||(a[0]=e=>y.value=e),placeholder:"请输入节点"},null,8,["modelValue"]),n(l,{modelValue:V.value,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value=e),placeholder:"请输入备注"},null,8,["modelValue"])])),_:1},8,["modelValue"]),n(Q,null,{default:i((()=>[n(t,{type:"primary",onClick:a[4]||(a[4]=e=>z.value=!0)},{default:i((()=>[u("添加节点")])),_:1}),E,n(U,{ref_key:"table",ref:O,data:p(G),style:{width:"100%"},onSelectionChange:N},{default:i((()=>[n(C,{type:"selection",fixed:"",prop:"ID",label:"id"}),n(C,{prop:"Name",label:"备注"}),n(C,{prop:"Link",label:"节点","show-overflow-tooltip":!0}),n(C,{prop:"CreateDate",label:"创建时间",sortable:""}),n(C,{fixed:"right",label:"操作",width:"120"},{default:i((e=>[n(t,{link:"",type:"primary",size:"small",onClick:a=>{return l=e.row,void m.confirm(`你是否要删除 ${l.Name} ?`,"提示",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((async()=>{await h({id:l.ID}),d({type:"success",message:"删除成功"}),S()}));var l}},{default:i((()=>[u("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),B,n(t,{type:"info",onClick:a[5]||(a[5]=e=>{c((()=>{g.value.forEach((e=>{O.value.toggleRowSelection(e,!0)}))}))})},{default:i((()=>[u("全选")])),_:1}),n(t,{type:"warning",onClick:a[6]||(a[6]=e=>{O.value.clearSelection()})},{default:i((()=>[u("取消选择")])),_:1}),n(t,{type:"danger",onClick:H},{default:i((()=>[u("批量删除")])),_:1}),I,n(M,{onSizeChange:q,onCurrentChange:A,"current-page":K.value,"page-size":L.value,layout:"total, sizes, prev, pager, next, jumper","page-sizes":[10,20,30,40],total:g.value.length},null,8,["current-page","page-size","total"])])),_:1})])}}}),[["__scopeId","data-v-11dd3027"]]);export{O as default};