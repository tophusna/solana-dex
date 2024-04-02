"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4686],{25222:function(e,t,n){n.d(t,{w:function(){return i}});function i(e){return e&&"idString"in e}},52784:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(67294),r=n(3363),l=n(4465),a=n(94678);function o(e){let t=(0,a.ZP)(e=>e.coin1),n=(0,a.ZP)(e=>e.coin2),o=(0,a.ZP)(e=>e.hydratedAmmPools),u=(0,a.ZP)(e=>e.currentAmmPool),s=(0,i.useCallback)(e=>{let t=void 0!==u&&1===e.filter(e=>(0,r.ZP)(e.state.id)===u.idString).length;return t},[u]);(0,i.useEffect)(()=>{if(!o.length||!t||!n){a.ZP.setState({selectableAmmPools:void 0,currentAmmPool:void 0});return}let i=o.filter(e=>(0,l.aT)(e.state.mintA.mint,t.mint)&&(0,l.aT)(e.state.mintB.mint,n.mint)||(0,l.aT)(e.state.mintA.mint,n.mint)&&(0,l.aT)(e.state.mintB.mint,t.mint)),r=s(i);a.ZP.setState(e||r?{selectableAmmPools:i}:{selectableAmmPools:i,currentAmmPool:i[0]})},[t,n,o,e])}},76961:function(e,t,n){n.d(t,{Z:function(){return M}});var i=n(72305),r=n(13550),l=n.n(r),a=n(67294),o=n(91371),u=n(3363),s=n(62952),c=n(4465),d=n(81451),x=n(51523),m=n(71375),f=n(72573),v=n(92867),p=n(79162),h=n(94678),b=n(14200);function M(){let e=(0,o.ZP)(e=>e.slippageTolerance),t=(0,h.ZP)(e=>e.coin1),n=(0,h.ZP)(e=>e.coin1Amount),r=(0,h.ZP)(e=>e.priceUpperTick),M=(0,h.ZP)(e=>e.coin2),y=(0,h.ZP)(e=>e.coin2Amount),N=(0,h.ZP)(e=>e.priceLowerTick),w=(0,h.ZP)(e=>e.userCursorSide),F=(0,h.ZP)(e=>e.isRemoveDialogOpen),j=(0,h.ZP)(e=>e.currentAmmPool),C=(0,h.ZP)(e=>e.targetUserPositionAccount),k=(0,h.ZP)(e=>e.isInput);(0,a.useMemo)(()=>F?0:e,[F,e]);let Z=(0,a.useMemo)(()=>{if(j&&C){var e;return null===(e=j.positionAccount)||void 0===e?void 0:e.find(e=>(0,u.ZP)(e.nftMint)===(0,u.ZP)(C.nftMint))}},[j,C]),S=(0,a.useCallback)(async()=>{if(!j||!t||!M||null==r||null==N||F&&!1===k)return;let a="coin1"===w,o=(0,c.aT)(t.mint,j.state.mintA.mint),f=a?n:y,S=(0,u.ZP)(a?t.mint:M.mint),P=(0,u.ZP)(a?M.mint:t.mint),A=void 0!==f&&""!==f,I=a?(0,m.Z)((0,x.dC)(null!=n?n:0,10**t.decimals)):(0,m.Z)((0,x.dC)(null!=y?y:0,10**M.decimals)),[B,T]=await Promise.all([(0,p.b)({mints:[t.mint,M.mint].filter(b.W)}),(0,v.$)()]);try{let{liquidity:u,amountSlippageA:c,amountSlippageB:f}=F&&j&&Z&&C&&C.amountA&&C.amountB&&(0,d.$u)(Z.liquidity)?await g({inputAmountBN:I,maxLiquidity:Z.liquidity,inputMint:S,outputMint:P,amountA:(0,m.Z)(Z.amountA),amountB:(0,m.Z)(Z.amountB),isFocus1:a,epochInfo:T}):i.jsJ.getLiquidityAmountOutFromAmountIn({poolInfo:j.state,slippage:0,inputA:a&&o||!o&&!a,tickUpper:Math.max(r,N),tickLower:Math.min(N,r),amount:I,add:!F,epochInfo:T,token2022Infos:B,amountHasFee:!0}),v=o?c:f,p=o?f:c,b=(0,s.n)(t,v.amount),w=(0,s.n)(M,p.amount),k=v.expirationTime,E=p.expirationTime,D=p.fee&&(0,s.n)(M,p.fee),R=v.fee&&(0,s.n)(t,v.fee),q={coin1Amount:a?n:A?b:void 0,coin1SlippageAmount:a?(0,x.dC)(b,(0,x.IH)(1,e)):A?(0,x.dC)(b,(0,x.IH)(1,e)):void 0,coin2Amount:a?A?w:void 0:y,coin2SlippageAmount:a?A?(0,x.dC)(w,(0,x.IH)(1,e)):void 0:(0,x.dC)(w,(0,x.IH)(1,e)),coin1AmountFee:R,coin1ExpirationTime:A?k:void 0,coin2AmountFee:D,coin2ExpirationTime:A?E:void 0,liquidity:u,liquidityMin:new(l())((0,x.dC)(u,(0,x.lu)(1,e)).toFixed(0))};h.ZP.setState(q)}catch(e){}},[t,(0,f.B)("coin1"===w?n:y),r,M,N,w,j,F,k,C,Z]);(0,a.useEffect)(()=>{try{S()}catch(e){console.log("still can't calc amount",e instanceof Error?e.message:e)}},[S])}async function g(e){let{inputAmountBN:t,maxLiquidity:n,inputMint:r,outputMint:l,amountA:a,amountB:o,epochInfo:u,isFocus1:s}=e,c=(0,x.hi)(t,s?a:o),d=(0,m.Z)(s?(0,x.dC)(o,c):(0,x.dC)(a,c)),f=await (0,p.b)({mints:[r,l]}),v=f[r],h=f[l];return{liquidity:(0,m.Z)((0,x.dC)(n,c)),amountA:(0,i.bfS)(s?t:d,(s?v:h).feeConfig,u,!1),amountB:(0,i.bfS)(s?d:t,(s?h:v).feeConfig,u,!1),amountSlippageA:(0,i.bfS)(s?t:d,(s?v:h).feeConfig,u,!1),amountSlippageB:(0,i.bfS)(s?d:t,(s?h:v).feeConfig,u,!1)}}},72259:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(85893),r=n(67294),l=n(66180),a=n(27993),o=n(31139),u=n(54592),s=n(32029),c=n(82727);function d(e){var t;let{decimalMode:n,className:d,disabled:x,noDisableStyle:m,label:f,labelClassName:v,inputProps:p,renderInput:h,...b}=e,M=(0,r.useRef)(null);return(0,i.jsxs)(u.Z,{onClick:function(){var e,t,n,i;null===(e=M.current)||void 0===e||null===(t=e.focus)||void 0===t||t.call(e),null===(n=M.current)||void 0===n||null===(i=n.click)||void 0===i||i.call(n)},className:(0,l.m)("bg-[#141041] justify-between rounded-xl mobile:rounded-lg py-3 px-6 mobile:py-2 mobile:px-4 cursor-text ".concat(x&&!m?"pointer-events-none-entirely cursor-default opacity-50":""),d),children:[f&&(0,i.jsx)("div",{className:(0,l.m)("text-xs mobile:text-2xs text-[#abc4ff80] font-medium ",v),children:f}),null!==(t=(0,a.u)(h,[M]))&&void 0!==t?t:n?(0,i.jsx)(s.Z,{noCSSInputDefaultWidth:!0,...b,...p,className:(0,l.m)("w-full py-1 mobile:py-1 font-medium",null==p?void 0:p.className),componentRef:(0,o.Z)(M,null==p?void 0:p.componentRef)}):(0,i.jsx)(c.Z,{noCSSInputDefaultWidth:!0,...b,...p,className:(0,l.m)("w-full py-1 mobile:py-1 font-medium",null==p?void 0:p.className),componentRef:(0,o.Z)(M,null==p?void 0:p.componentRef)})]})}},8951:function(e,t,n){n.d(t,{V:function(){return i}});let i=e=>{var t,n;let{val:i,maxLength:r=8}=e,l=String(i),a=l.split("."),[o,u]=[(null===(t=a[0])||void 0===t?void 0:t.length)||1,(null===(n=a[1])||void 0===n?void 0:n.length)||0];return o+u<=r?Number(i):Number(Number(i).toFixed(Math.max(r-o,0)))}},48678:function(e,t,n){n.d(t,{C:function(){return l}});var i=n(81451),r=n(72573);function l(e){if(null==e||e.toString().includes("Infinity")||isNaN(e))return"";let t=e?(0,r.B)(e):"";return(0,i.eq)(t,0)?"":t}},51488:function(e,t,n){n.d(t,{I:function(){return p}});var i=n(85893),r=n(18559),l=n(81451),a=n(3363),o=n(14200),u=n(51523);async function s(e,t){let n=(0,a.ZP)(e);if(!(0,o.W)(n))return!0;let i=(0,r.U7)(n),s=i.then(e=>!!e&&({isTransferable:!((0,l.$u)(t)&&(0,l.eg)(e.transferFeePercent,1)&&(0,l.lt)(t,(0,u.hi)(e.maximumFee,1)))}).isTransferable);return s}var c=n(28948),d=n(48162),x=n(51800),m=n(72573),f=n(99111),v=n(67294);function p(e){let t=(0,v.useMemo)(()=>e.map(e=>{var t;return(0,a.ZP)(null===(t=e.token)||void 0===t?void 0:t.mint)}),[e]),n=(0,v.useMemo)(()=>e.map(e=>(0,m.B)(e.amount)),[e]),r=(0,f.Z)(async()=>{for(let{token:t,amount:n}of e)if(t){let e=await s(t.mint,n);if(!e)return t}},t.concat(n),void 0),l=!!r,o=e=>{let{className:t}=e;return(0,i.jsx)(h,{className:t,needOpen:l,badToken:r})};return{isWarningChipOpen:l,badToken:r,Token2022FeeTooHighWarningChip:o}}function h(e){let{className:t,needOpen:n,badToken:r}=e;return(0,i.jsx)(c.Z,{show:n,children:(0,i.jsx)("div",{className:t,children:(0,i.jsxs)(x.Z,{className:"bg-[#da2eef1a] text-[#da2eef] rounded-xl py-3 px-3 mobile:px-2 items-center",children:[(0,i.jsx)(d.Z,{className:"mr-1",heroIconName:"exclamation-circle",size:"smi"}),(0,i.jsx)("div",{className:"text-xs mobile:text-2xs",children:"Transfer fee at 100%, transaction will fail."})]})})})}},74365:function(e,t,n){n.d(t,{Z:function(){return k}});var i=n(85893),r=n(48162),l=n(15326),a=n(81451),o=n(8951),u=n(14209),s=n(51523),c=n(48678),d=n(47857),x=n(90482),m=n(67294),f=n(9253),v=n(32417),p=n(86108),h=n(14888),b=n(3023),M=n(75358),g=n(4545),y=n(8081),N=n(63675),w=n(72259),F=n(22305);let j=e=>Math.min(e+2,15);function C(e){var t,n;let{decimals:r,minValue:l,maxValue:a,onPriceChange:o,onInDecrease:u,onBlur:s}=e;return null===(t=(0,F.Z)(l).dec)||void 0===t||t.length,null===(n=(0,F.Z)(a).dec)||void 0===n||n.length,(0,i.jsxs)("div",{className:"flex gap-2.5",children:[(0,i.jsx)(w.Z,{className:"grow p-2 border-1.5 border-[#abc4ff40] text-base",label:"Min Price",decimalMode:!0,showPlusMinusControls:!0,decimalCount:15,valueToStringOptions:{maxSignificantCount:j(r)},value:l,maxN:a?Number(a):void 0,onBlur:()=>null==s?void 0:s(N.e6.Min),increaseFn:()=>u({val:l,side:N.e6.Min,isIncrease:!0}),decreaseFn:()=>u({val:l,side:N.e6.Min,isIncrease:!1}),onUserInput:(e,t)=>{let{triggerBy:n}=t;e&&"increase-decrease"!==n&&o({val:e,side:N.e6.Min})}}),(0,i.jsx)(w.Z,{className:"grow p-2 border-1.5 border-[#abc4ff40] text-base",label:"Max Price",decimalMode:!0,showPlusMinusControls:!0,decimalCount:15,valueToStringOptions:{maxSignificantCount:j(r)},value:a,minN:l?Number(l):void 0,onBlur:()=>null==s?void 0:s(N.e6.Max),increaseFn:()=>u({val:a,side:N.e6.Max,isIncrease:!0}),decreaseFn:()=>u({val:a,side:N.e6.Max,isIncrease:!1}),onUserInput:(e,t)=>{let{triggerBy:n}=t;e&&"increase-decrease"!==n&&o({val:e,side:N.e6.Max})}})]})}var k=(0,m.forwardRef)(function(e,t){var n,w;let F;let{clmmPool:j,poolFocusKey:k,chartOptions:Z,currentPrice:S,priceMin:P,priceMax:A,priceLabel:I,timeBasis:B,decimals:T,height:E,onPositionChange:D,onInDecrease:R,onAdjustMin:q,title:L,showCurrentPriceOnly:W,hideRangeLine:z,hideRangeInput:O,showZoom:H,hideXAxis:_}=e,U=(0,m.useMemo)(()=>Object.assign([],(null==Z?void 0:Z.points)||[]),[null==Z?void 0:Z.points]),[V,K]=(0,m.useMemo)(()=>[null==Z?void 0:Z.initMinBoundaryX,null==Z?void 0:Z.initMaxBoundaryX],[Z,S]),G=(0,m.useRef)(),Q=U.length>0,X=Math.max(T,(0,u.db)((null==S?void 0:S.toFixed(15))||"")+2,8),Y=(0,m.useCallback)(e=>{let{val:t}=e,n=(0,u.db)(new x.Z(t).toFixed(15)||"");return(0,o.V)({val:t,maxLength:T>n?T+2:15})},[T]),{isMobile:$}=(0,l.G)()||{},[J,ee]=(0,m.useState)(U),et=(0,m.useMemo)(()=>(null==j?void 0:j.tradeFeeRate)&&(0,a.eq)(j.tradeFeeRate,1e-4),[null==j?void 0:j.tradeFeeRate]),en=(0,m.useMemo)(()=>et?[.001,.003,.005,.008,.01]:[.01,.05,.1,.2,.5],[et]),ei=(0,m.useMemo)(()=>et?.005:.2,[et]),[er,el]=(0,m.useState)(ei),[ea,eo]=(0,m.useState)(!1),[eu,es]=(0,m.useState)({[N.e6.Min]:Number(null==V?void 0:V.toFixed(T))||0,[N.e6.Max]:Number(null==K?void 0:K.toFixed(T))||100}),[ec,ed]=(0,m.useState)([]),ex=(0,m.useRef)({min:0,max:100}),em=(0,m.useRef)(0),ef=(0,m.useRef)(""),ev=(0,m.useRef)(),ep=(0,m.useRef)([]),eh=(0,m.useRef)(),eb=(0,m.useRef)(),eM=(0,m.useRef)(),eg=(0,m.useRef)(),ey=(0,m.useRef)(),eN=(0,m.useRef)([0,100]),ew=(0,m.useRef)([0,100]),eF=U.length?(U[U.length-1].x-U[0].x)/8/8:0,[ej,eC]=(0,m.useState)(Q?N.ow:[0,100]),ek=null==S?void 0:S.toFixed(X);ex.current=ej.length?{min:Number(ej[0])||0,max:Number(ej[ej.length-1])||100}:ex.current;let eZ=(0,m.useCallback)(e=>{let t=e=>Math.max(ex.current.min,e,0);if("function"==typeof e){es(n=>{let i=e(n);return{[N.e6.Min]:Y({val:t(i[N.e6.Min])}),[N.e6.Max]:Y({val:i[N.e6.Max]})}});return}es({[N.e6.Min]:Y({val:e.skipCheck?e[N.e6.Min]:t(e[N.e6.Min])}),[N.e6.Max]:Y({val:e[N.e6.Max]})})},[T,U]);(0,m.useEffect)(()=>{let e=(null==Z?void 0:Z.isStable)?.005:.2;el((null==Z?void 0:Z.isStable)?.005:.2),eG(e)},[null==Z?void 0:Z.isStable,k]),(0,m.useEffect)(()=>{ee([]),ex.current={min:0,max:100},(G.current!==k||W)&&(eC(N.ow),es({[N.e6.Min]:0,[N.e6.Max]:0}));let e=(null==Z?void 0:Z.isStable)?[.98,1.02]:[.7,1.3],[t,n]=[V?Number(V.toFixed(Math.max(8,T))):void 0,K?Number(K.toFixed(Math.max(8,T))):void 0];if(!U.length){if(void 0===t||void 0===n)return;U.push({x:t,y:0},{x:n,y:0})}let{smoothCount:i}=(0,N.iE)(U[0].x,U.length);em.current=i;let r=[],l=e=>!!(t&&e>=t&&n&&e<=n),a=Math.abs(U[1].x-U[0].x);if(t&&t<=Number(U[0].x.toFixed(Math.max(8,T)))+a&&U.unshift({x:Math.max(t-a,0),y:0}),n&&n>=Number(U[U.length-1].x.toFixed(Math.max(8,T)))-a&&U.push({x:n+2*a,y:0}),void 0!==ek){ew.current=[parseFloat(ek)*e[0],n&&n>parseFloat(ek)*e[1]?1.2*n:parseFloat(ek)*e[1]],G.current!==k&&(eN.current=[...ew.current],eC(eN.current));let i=(null==Z?void 0:Z.isStable)?[.98,1.02]:[.95,1.05],[r,l]=[Math.min(null!=P?P:Number(ek),Number(ek),null!=t?t:Number(ek)),Math.max(null!=A?A:Number(ek),Number(ek),null!=n?n:Number(ek))];W&&eC([r*i[0],l*i[1]]),eN.current[0]<=U[0].x&&U.unshift({x:eN.current[0],y:0}),U[U.length-1].x<=eN.current[1]&&U.push({x:eN.current[1],y:0})}let u=U.length-1,[s,c]=[!1,!1],d=U[0].y;for(let e=0;e<u;e++){let[l,a,u]=[U[e-1],U[e],U[e+1]],x=Y({val:a.x});if(t&&x>t&&!s){let e=r.findIndex(e=>e.x>t);r.splice(-1===e?r.length:e,0,{...(null==Z?void 0:Z.baseIn)&&l||a,x:t}),s=!0}if(n&&x>n&&!c){let e=r.findIndex(e=>e.x>n);r.splice(-1===e?r.length:e,0,{...(null==Z?void 0:Z.baseIn)&&l||a,x:n}),c=!0}if(r.push({...a}),s=s||x===t,c=c||x===n,d=Math.max(d,a.y),i>0){let e=(u.x-a.x)/i;for(let t=1;t<=i;t++){let n=(null==Z?void 0:Z.baseIn)?(0,N.lt)(a.y,T):(0,N.lt)(u?u.y:a.y,T);r.push({x:(0,o.V)({val:a.x+e*t,maxLength:X+2}),y:n})}}}u>0&&r.push(U[u]),r[0].x+3*a>(t||0)&&r.unshift({x:.8*r[0].x,y:0}),n&&r[r.length-1].x-a>n&&r.push({x:1.05*r[r.length-1].x,y:0}),ee(W?r.map(e=>({...e,position:l((0,N.lt)(e.x,T))?d:void 0})):r)},[U,V,K,T,X,W,k,ek,null==Z?void 0:Z.isStable,null==Z?void 0:Z.baseIn]),(0,m.useEffect)(()=>{(V||K)&&(!Q||W||!G.current||G.current!==k)&&(G.current=Q?k:void 0,eZ({[N.e6.Min]:Number(V.toFixed(X)),[N.e6.Max]:Number(K.toFixed(X))}))},[V,K,eZ,Q,W,k,W,X]),(0,m.useEffect)(()=>{ed(ep.current)},[eu,ej]),(0,m.useEffect)(()=>{W&&(null==Z?void 0:Z.isStable)&&eU({min:.9995*Math.min(Number(null==V?void 0:V.toFixed(15)),Number(ek)),max:1.0005*Math.max(Number(null==K?void 0:K.toFixed(15)),null!=A?A:100)})},[U,W,V,K,null==Z?void 0:Z.isStable,A,ek]),(0,m.useEffect)(()=>(window.addEventListener("mouseup",eS),$&&window.addEventListener("pointerup",eS),()=>{window.removeEventListener("mouseup",eS),$&&window.removeEventListener("pointerup",eS)}),[$]);let eS=(0,m.useCallback)(()=>{var e,t;ef.current&&(eo(!1),ef.current="",null===(e=ey.current)||void 0===e||e.call(ey),null===(t=eM.current)||void 0===t||t.call(eM))},[]),eP=e=>()=>{ef.current||(ef.current=e,eo(!0))},eA=[],eI=e=>{var t,n;!ep.current.length||e<ep.current[ep.current.length-1]?(ep.current=[e],eA=[]):ep.current.push(e);let i=(null===(t=U[1])||void 0===t?void 0:t.x)-(null===(n=U[0])||void 0===n?void 0:n.x),r=(0,N.QE)(i)||(0,N.QE)(e),l=(null==Z?void 0:Z.isStable)?(0,u.db)(e.toFixed(15))+1:r>3?r:1,a=(0,c.C)(e.toFixed(l));for(let t=l;t<10&&-1!==eA.indexOf(a);t++)a=(0,c.C)(e.toFixed(t));return eA.push(a),a},eB=(0,d.z)(e=>{let{val:t,side:n,queue:i}=e;if(i){ey.current=()=>{eB({val:t,side:n}),ey.current=void 0};return}let r=n===N.e6.Min,l=Math.abs(t-Number(ek||0))/Number(ek||1)/5,[a,o]=[1-l,1+l];eN.current[r?0:1]=t*(r?a:o),eC(eN.current),eH({min:eN.current[0],max:eN.current[1]})}),eT=(0,m.useCallback)(e=>{let{side:t,zoomArea:n,queue:i,...r}=e;F&&clearTimeout(F);let l=()=>{let e=null==D?void 0:D({...r,side:"area"===t?void 0:t});if(!e)return;let[i,l]=[Number(e.priceLower.toFixed(15)),Number(e.priceUpper.toFixed(15))];"area"===t&&(n&&(eB({val:i,side:N.e6.Min}),eB({val:l,side:N.e6.Max})),eZ({min:i,max:l,skipCheck:!!n})),t===N.e6.Min&&(eZ(e=>({...e,[N.e6.Min]:i})),eB({val:i,side:N.e6.Min,queue:!!ef.current})),t===N.e6.Max&&(eZ(e=>({...e,[N.e6.Max]:l})),eB({val:l,side:N.e6.Max,queue:!!ef.current}))};if(i){eM.current=()=>{l(),eM.current=void 0};return}F=window.setTimeout(l,100)},[D,eB]),eE=(0,m.useCallback)(e=>{if(!ef.current||!e)return;let t=e.activeLabel;if(!t)return;let n=ef.current;if(el(0),"area"===ef.current){if(void 0===ev.current){ev.current=t;return}let e=t-ev.current;ev.current=t;let i="string"==typeof ej[0],[r,l]=i?[ex.current.min,ex.current.max]:ej;eZ(t=>{let[i,a]=[t[N.e6.Min]+e,t[N.e6.Max]+e],o={[N.e6.Min]:i<=r&&i<t[N.e6.Min]||i>=t[N.e6.Max]?t[N.e6.Min]:i,[N.e6.Max]:a>=l&&a>t[N.e6.Max]||a<=t[N.e6.Min]?t[N.e6.Max]:a};return eT({...o,side:n,queue:!0}),o});return}eZ(e=>{let i=Math.max(t,0);return ef.current===N.e6.Min&&i>=e[N.e6.Max]?(ef.current=N.e6.Max,eT({...e,[ef.current]:i,side:N.e6.Max,queue:!0}),{...e,[N.e6.Max]:i}):ef.current===N.e6.Max&&i<=e[N.e6.Min]?(ef.current=N.e6.Min,eT({...e,[ef.current]:i,side:N.e6.Min,queue:!0}),{...e,[N.e6.Min]:i}):(eT({...e,[ef.current]:i,side:n,queue:!0}),{...e,[ef.current]:i})})},[eZ,D,ej]),eD=e=>({onPointerDown:eP(e),onMouseDown:eP(e)}),eR=e=>{let t=e===N.e6.Min,[n,i]=[eu[e]-(t?1.5*eF:eF/1.5),eu[e]+(t?eF/1.5:1.5*eF)];return eu[e]?{...eD(e),x1:Math.max(n,t?ec[0]:eu[N.e6.Max]),x2:Math.min(i,t?eu[N.e6.Min]:ec[ec.length-1]),style:{cursor:"grab"},fill:"transparent",isFront:!0}:null},eq=(0,m.useCallback)(()=>{eo(!0),ev.current=void 0,ef.current="area"},[]),eL=(0,m.useCallback)(e=>{let{val:t,side:n}=e,i=parseFloat(String(t)),r=n===N.e6.Min;es(e=>(setTimeout(()=>{let t=null==D?void 0:D({...e,[n]:i,side:n,userInput:!0});eh.current=t?r?Y({val:t.priceLower.toFixed(15)}):Y({val:t.priceUpper.toFixed(15)}):void 0},100),{...e,[n]:i})),U.length&&ee(e=>{let t=e.filter(e=>!e.extend);if(!r&&i>t[t.length-1].x)for(let e=1;;e++){let n=t[t.length-1].x+eF*e;if(t.push({x:n,y:0,extend:!0}),n>i)break}return t})},[eF,U,eT,T]),eW=(0,d.z)(e=>{es(t=>{let n=e?{...t,...e}:t;return n[N.e6.Max]<=n[N.e6.Min]&&q?{...n,[N.e6.Min]:q(n).price}:n})}),ez=(0,m.useCallback)(e=>{if(void 0===eh.current){eb.current=window.setTimeout(()=>{eW()},200);return}let t=eh.current;eb.current=window.setTimeout(()=>{el(0),eB({val:t,side:e}),eW({[e]:t})},200),eh.current=void 0},[eZ,q]),eO=(0,m.useCallback)(e=>{eb.current&&clearTimeout(eb.current);let{val:t="",side:n,isIncrease:i}=e,r=n===N.e6.Min,l=Number(t);return i?(es(e=>{let i=null==R?void 0:R({p:Number(t),isMin:r,isIncrease:!0}),a=i?Y({val:i.toFixed(15)}):Y({val:Number(t)+eF});return Q&&!r&&a>=(0,N.lt)(e[N.e6.Max],T)&&ee(e=>[...e,{x:a+eF,y:0,extend:!0}]),l=a,{...e,[n]:a}}),eB({val:l,side:n}),el(0),l):(es(e=>{let i=null==R?void 0:R({p:Number(t),isMin:r,isIncrease:!1}),a=i?Y({val:i.toFixed(15)}):Y({val:Number(t)+eF});return l=a,{...e,[n]:a}}),eB({val:l,side:n}),el(0),l)},[U,Q,eF,T]),eH=e=>{let{min:t,max:n}=e;ee(e=>{let i=e.filter(e=>!e.extend),r=i[i.length-1].x;if(t<i[0].x)for(let e=0;t<=i[0].x;e++)i.unshift({x:i[0].x-e*eF,y:0,extend:!0});if(n>r)for(let e=1;i[i.length-1].x<=n;e++)i.push({x:r+e*eF,y:0,extend:!0});return i})},e_=()=>{ee(e=>e.filter(e=>!e.extend)),eC(ew.current),eN.current=[...ew.current],ex.current={min:Q?J[0].x:10,max:Q?J[J.length-1].x:100}},eU=e=>{let{min:t,max:n}=e;ex.current={min:t,max:n},eH({min:t,max:n}),eC([t,n]),eN.current=[t,n]},eV=()=>{if(!Q)return;let e=(eN.current[1]-eN.current[0])/8,t=eN.current[0]+e,n=eN.current[eN.current.length-1]-e;t>=n||eU({min:t,max:n})},eK=()=>{if(!Q)return;let e=(eN.current[1]-eN.current[0])/8,t=eN.current[0]-e,n=eN.current[eN.current.length-1]+e;eU({min:t,max:n})},eG=e=>{var t,n;el(e),eT({side:"area",min:Number((null===(t=(0,s.dC)(S,1-e))||void 0===t?void 0:t.toFixed(X))||0),max:Number((null===(n=(0,s.dC)(S,1+e))||void 0===n?void 0:n.toFixed(X))||0),zoomArea:!0})};(0,m.useImperativeHandle)(t,()=>({getPosition:()=>eu}),[eu]);let eQ={width:28,height:28,background:"linear-gradient(126.6deg, rgba(57, 208, 216, 0.2) 28.69%, rgba(57, 208, 216, 0) 100%)",backdropFilter:"blur(2px)",borderRadius:38,display:"flex",justifyContent:"center",alignItems:"center"},eX=0,eY=J.filter(e=>!!(e.x>=Number(ej[0])&&e.x<=Number(ej[1]))&&(eX=Math.max(eX,e.y),!0));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex justify-between text-base leading-[22px] text-secondary-title mb-2",children:[L,H&&(0,i.jsxs)("div",{className:"flex gap-2 select-none",children:[(0,i.jsx)("div",{style:eQ,children:(0,i.jsx)(r.Z,{size:"sm",onClick:e_,className:"saturate-50 brightness-125 cursor-pointer",iconSrc:"/icons/add-space.svg"})}),(0,i.jsx)("div",{style:eQ,children:(0,i.jsx)(r.Z,{size:"sm",onClick:eK,className:"text-[#abc4ff] saturate-50 brightness-125 cursor-pointer",iconSrc:"/icons/zoom-out.svg",canLongClick:!0})}),(0,i.jsx)("div",{style:eQ,children:(0,i.jsx)(r.Z,{size:"sm",className:"text-[#abc4ff] saturate-50 brightness-125 cursor-pointer",onClick:eV,iconSrc:"/icons/zoom-in.svg",canLongClick:!0})})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"flex items-center text-xs text-[#ABC4FF]",children:[(0,i.jsx)("span",{className:"inline-block w-[8px] h-[2px] bg-white mr-2"}),(0,i.jsx)("span",{className:"opacity-50 mr-2",children:"Current Price"})," ",(0,c.C)((null==S?void 0:S.toFixed(Math.max(T,X)))||0),(0,i.jsx)("span",{className:"ml-1",children:I})]}),(0,i.jsxs)("div",{className:"flex items-center text-xs text-[#ABC4FF]",children:[(0,i.jsx)("span",{className:"inline-block w-[8px] h-[2px] bg-[#39D0D8] mr-2"}),(0,i.jsxs)("span",{className:"opacity-50 mr-2",children:[B," Price Range"]})," [",(0,c.C)((null==P?void 0:P.toFixed(Math.max(T,X)))||0),","," ",(0,c.C)((null==A?void 0:A.toFixed(Math.max(T,X)))||0),"]"]})]}),(0,i.jsx)("div",{className:"w-full select-none",style:{height:"".concat(E||140,"px")},children:(0,i.jsx)(f.h,{width:"100%",height:"100%",children:(0,i.jsxs)(v.T,{style:{userSelect:"none"},ref:eg,width:500,height:400,margin:{top:15},defaultShowTooltip:!1,data:eY||[],onMouseDown:$?eP(N.e6.Min):void 0,onMouseMove:eE,onMouseUp:eS,children:[(0,i.jsx)(p.u,{...N.uq,...(0,N._Y)("#abc4ff"),fillOpacity:.9,style:{cursor:ea?"grab":"default"},type:"step",dataKey:"y"}),(0,i.jsx)(p.u,{...N.uq,...(0,N._Y)(N.pS),fillOpacity:"0.3",dataKey:"position"}),!z&&(0,i.jsx)(h.u,{wrapperStyle:{display:"none"},isAnimationActive:!1,cursor:!1,active:!1}),(0,i.jsx)(b.K,{style:{userSelect:"none",fontSize:"10px",fill:N.e_},type:"number",tickCount:7,tickFormatter:eI,domain:ej,interval:"preserveStartEnd",allowDataOverflow:!0,hide:_,tickLine:!1,dataKey:"x"}),(0,i.jsx)(M.B,{allowDataOverflow:!0,domain:[0,1.05*eX],type:"number",hide:!0}),!z&&!isNaN(eu[N.e6.Min])&&(0,i.jsx)(g.d,{...eD(N.e6.Min),stroke:N.nA,className:"cursor-grab",isFront:!0,x:eu[N.e6.Min],strokeWidth:4,label:(0,N.id)({side:N.e6.Min,...eD(N.e6.Min),chartWidth:null===(n=eg.current)||void 0===n?void 0:n.props.width,percent:ek?(eu[N.e6.Min]-parseFloat(ek))/parseFloat(ek)*100:void 0})}),!z&&!isNaN(eu[N.e6.Max])&&(0,i.jsx)(g.d,{...eD(N.e6.Max),stroke:N.nA,className:"cursor-grab",isFront:!0,x:eu[N.e6.Max],strokeWidth:4,label:(0,N.id)({side:N.e6.Max,...eD(N.e6.Max),chartWidth:null===(w=eg.current)||void 0===w?void 0:w.props.width,percent:ek?(eu[N.e6.Max]-parseFloat(ek))/parseFloat(ek)*100:void 0})}),S&&(0,i.jsx)(g.d,{isFront:!0,x:null==S?void 0:S.toFixed(Math.max(T,X)),stroke:"#FFF",strokeDasharray:"4",strokeWidth:2}),P&&(0,i.jsx)(g.d,{isFront:!0,x:P,stroke:"#39D0D8",strokeDasharray:"4",strokeWidth:2}),A&&(0,i.jsx)(g.d,{isFront:!0,x:A,stroke:"#39D0D8",strokeDasharray:"4",strokeWidth:2}),Q&&!W&&(0,i.jsx)(y.z,{style:{cursor:z?"default":"pointer"},onPointerDown:$&&!z?eq:void 0,onMouseDown:z?void 0:eq,x1:Math.max(eu[N.e6.Min],ec[0]||0),x2:Math.min(eu[N.e6.Max],ec[ec.length-1]||Number.MAX_SAFE_INTEGER),fill:N.pS,fillOpacity:"0.3"}),!z&&(0,i.jsx)(y.z,{...eR(N.e6.Min)}),!z&&(0,i.jsx)(y.z,{...eR(N.e6.Max)})]})})}),W?null:(0,i.jsx)("div",{className:"flex justify-between flex-wrap gap-2",children:en.map(e=>(0,i.jsxs)("div",{className:"whitespace-nowrap mb-3 text-xs text-center border flex-1 ".concat(e===er?"border-[#ABC4FF] bg-[#141041]":"border-[#36427D] opacity-50"," rounded-lg py-1 px-2 cursor-pointer"),onClick:()=>eG(e),children:["\xb1 ",100*e,"%"]},e))}),!O&&(0,i.jsx)(C,{decimals:Math.max(8,T+2),minValue:eu.min,maxValue:eu.max,onBlur:ez,onPriceChange:eL,onInDecrease:eO})]})})},63675:function(e,t,n){n.d(t,{QE:function(){return p},_Y:function(){return d},e6:function(){return r},e_:function(){return o},iE:function(){return x},id:function(){return v},lt:function(){return m},nA:function(){return u},ow:function(){return s},pS:function(){return a},uq:function(){return c}});var i,r,l=n(85893);(i=r||(r={})).Min="min",i.Max="max";let a="#1B365F",o="#abc4ff80",u="#256491",s=["dataMin","dataMax"],c={legendType:"none",tooltipType:"none",animateNewValues:!1,isAnimationActive:!1,activeDot:!1,dot:!1,type:"step"},d=e=>({fill:e,stroke:"transparent"}),x=(e,t)=>{let n={precision:1,smoothCount:10};return e<.1?n.precision=4:e<1?n.precision=2:e<100&&(n.precision=1),t<100&&(n.smoothCount=20),t>=1e3&&(n.smoothCount=0),n},m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return e?parseFloat(Number(e).toFixed(t)):0},f=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return(Math.round(e*10**t)/10**t).toFixed(t)},v=e=>t=>{let{side:n,percent:i,chartWidth:a,...o}=e,s=t.viewBox.x-(n===r.Min?30:-30),c=!1;return(s<15||a&&s>a-15)&&(c=!0),(0,l.jsxs)("g",{...o,children:[(0,l.jsx)("rect",{x:t.viewBox.x-(n===r.Min?c?-5:48:c?40:-14),y:t.viewBox.y,fill:"rgba(171, 196, 255, 0.15)",width:46,height:21,rx:"4"}),(0,l.jsxs)("text",{className:"break-words",fill:"#ABC4FF",y:t.viewBox.y+12,x:t.viewBox.x-(n===r.Min?c?-26:28:c?22:-32),style:{fontWeight:"500",fontSize:12,background:"red"},textAnchor:"middle",dominantBaseline:"middle",children:[i&&i>0?"+":"",i?"".concat(f(i,1),"%"):""]}),(0,l.jsx)("rect",{x:t.viewBox.x-(n===r.Min?12:0),y:t.viewBox.y,fill:u,width:12,height:28,rx:"2"}),(0,l.jsx)("rect",{x:t.viewBox.x-(n===r.Min?4:-4),y:t.viewBox.y+10,fill:"#FFF",width:1,height:10}),(0,l.jsx)("rect",{x:t.viewBox.x-(n===r.Min?7:-7),y:t.viewBox.y+10,fill:"#FFF",width:1,height:10})]})};function p(e){if(!e)return 0;let t=0;for(;1>Math.abs(e*10**t);)t++;return t}},54103:function(e,t,n){n.d(t,{E:function(){return m}});var i=n(85893),r=n(60421),l=n(51800),a=n(72616),o=n(18074),u=n(81451),s=n(51523),c=n(71122);let d=["#abc4ff","#37bbe0","#2b6aff","#335095"],x="#abc4ff33";function m(e){var t;let n=null!==(t=e.colCount)&&void 0!==t?t:1,m="positionAccount"===e.type?(0,c.hy)({positionAccount:e.positionAccount}):"poolTickInfo"===e.type?(0,c.HU)({ammPool:e.poolInfo}):(0,c.dG)({ammPool:e.poolInfo});if(!m)return null;let f=[m.fee.percentInTotal,...m.rewards.map(e=>e.percentInTotal)];return(0,i.jsxs)(l.Z,{className:"gap-4",children:[(0,i.jsx)("div",{className:"w-16 h-16 rounded-full flex-none",style:{background:"conic-gradient(".concat((0,u.eq)(f.reduce((e,t)=>e.add(t),(0,a.y)(0)),0)?"".concat(x," 0%, ").concat(x," 100%"):f.map((e,t)=>{let n=f.slice(0,t).reduce((e,t)=>(0,a.y)((0,s.IH)(e,t)),(0,a.y)(0)),i=(0,a.y)((0,s.IH)(n,e));return["".concat(d[t]," ").concat((0,o.Z)(n)),"".concat(d[t]," ").concat((0,o.Z)(i))].join(", ")}).join(", "),")"),WebkitMaskImage:"radial-gradient(transparent 50%, black 51%)",maskImage:"radial-gradient(transparent 50%, black 51%)"}}),(0,i.jsxs)(r.Z,{className:"content-around ".concat(1===n?"grid-cols-1":"grid-cols-2-auto"," gap-x-4"),children:[(0,i.jsxs)(l.Z,{className:"items-center gap-2",children:[(0,i.jsx)("div",{className:"h-2 w-2 rounded-full",style:{backgroundColor:"#abc4ff"}}),(0,i.jsx)("div",{className:"w-18 text-[#abc4ff] text-sm mobile:text-xs",children:"Trade Fee"}),(0,i.jsx)("div",{className:"text-sm",children:(0,o.Z)(m.fee.apr)})]}),m.rewards.map((e,t)=>{let{token:n,apr:r}=e,a=d.slice(1);return(0,i.jsxs)(l.Z,{className:"items-center gap-2",children:[(0,i.jsx)("div",{className:"h-2 w-2 rounded-full",style:{backgroundColor:a[t]}}),(0,i.jsx)("div",{className:"w-18 text-[#abc4ff] text-sm mobile:text-xs",children:null==n?void 0:n.symbol}),(0,i.jsx)("div",{className:"text-sm",children:(0,o.Z)(r)})]},null==n?void 0:n.mintString)})]})]})}},96256:function(e,t,n){n.d(t,{n:function(){return o}});var i=n(85893),r=n(66180),l=n(94678),a=n(40816);function o(e){let{className:t}=e,n=(0,l.ZP)(e=>e.timeBasis);return(0,i.jsx)(a.Z,{classNames:(0,r.m)("bg-[#181753] ml-4",t),tabs:[{label:"24H",value:"24H"},{label:"7D",value:"7D"},{label:"30D",value:"30D"}],selectedValue:n,tabClassName:e=>e?"bg-[#141041]":"bg-transparent",onChange:e=>l.ZP.setState({timeBasis:e.value})})}},99023:function(e,t,n){n.d(t,{Mn:function(){return o},dO:function(){return u}});var i=n(81451),r=n(51523),l=n(84207),a=n(72616);function o(e){return e.map(e=>{let{liquidity:t,price:n}=e;return{x:Number(n),y:Number(t)}})}function u(e){let{coin1Amount:t,coin2Amount:n,currentPrice:o,coin1InputDisabled:u,coin2InputDisabled:s}=e,[c,d]=[(u?"0":t)||"0",s?"0":n],[x,m]=[(0,i.gt)(c,0),(0,i.gt)(d,0)],f=(0,l.Z)(d||"0"),v=o?x?(0,r.dC)(c,o).add(f):m?f:(0,l.Z)(1):(0,l.Z)(1);try{let e=o?(0,r.hi)((0,r.dC)(c,o),v):(0,a.y)(0),t=o?(0,r.hi)(f,v):(0,a.y)(0);return{ratio1:e,ratio2:t}}catch(e){return{}}}}}]);