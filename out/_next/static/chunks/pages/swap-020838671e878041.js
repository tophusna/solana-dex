(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8503],{98229:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/swap",function(){return n(84344)}])},90116:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var l=n(62512);async function i(e){if(!e)return[];let t=await (0,l.Z)("https://api.coingecko.com/api/v3/coins/".concat(e,"/market_chart?vs_currency=usd&days=1"),{cacheFreshTime:6e4});return t?t.prices.map(e=>{let[,t]=e;return t}):[]}},33674:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var l=n(85893),i=n(67294),s=n(66180),o=n(91371),a=n(14431),r=n(85503);function c(){let{run:e=!0,initPercent:t=0,componentRef:n,className:o,duration:c=6e4,strokeWidth:d=3,updateDelay:u=1e3,svgWidth:m=36,loop:f=!0,onEnd:h,onClick:x}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},p=.5*m/2,v=2*p*Math.PI,j=(0,i.useRef)(!1),{documentVisible:g}=(0,r.x)(),[b,Z]=(0,i.useState)(t),y=(0,i.useRef)(),k=(0,i.useRef)(null);(0,a.e)(k,{onClick:x,disable:!x}),(0,i.useEffect)(()=>{if(e&&g){let t=globalThis.setInterval(()=>{e&&g&&Z(e=>e+1/c*u)},u);return y.current=t,()=>globalThis.clearInterval(t)}globalThis.clearInterval(y.current)},[c,u,e&&g]);let w=(0,i.useRef)();return(0,i.useEffect)(()=>{if(g&&w.current){let e=Date.now()-w.current;Z(t=>t+1/c*e)}g||(w.current=Date.now())},[g]),(0,i.useEffect)(()=>{if(0==Math.floor(b))return;let e=setTimeout(()=>{j.current||(j.current=!0,null==h||h(),setTimeout(()=>{j.current=!1},0))},0);return()=>clearTimeout(e)},[Math.floor(b)]),(0,i.useImperativeHandle)(n,()=>({currentProgressPercent:b%1,restart(){Z(0)}})),(0,l.jsx)("div",{className:(0,s.m)("w-full h-full rounded",o),children:(0,l.jsxs)("svg",{ref:k,width:m,height:m,viewBox:"0 0 ".concat(m," ").concat(m),children:[(0,l.jsx)("circle",{r:p,cx:"50%",cy:"50%",fill:"transparent",style:{strokeWidth:d,stroke:"#ffffff2e"}}),(0,l.jsx)("circle",{id:"bar",r:p,cx:"50%",cy:"50%",fill:"transparent",strokeDasharray:v,strokeDashoffset:v-(f?b%1:Math.min(b,1))*v,style:{strokeWidth:d,stroke:"#92e1ffd9",transform:"rotate(-90deg)",transformOrigin:"center",strokeLinecap:"round",transition:"200ms"}})]})})}var d=n(92618),u=n(12839),m=n(43066),f=n(96398),h=n(62361);function x(e){var t,n,a,x;let{run:p=!0,refreshKey:v,popPlacement:j,forceOpen:g,freshFunction:b,freshEach:Z=1e3,totalDuration:y=6e4,className:k,circleBodyClassName:w,disabled:N=!1}=e,S=(0,i.useRef)(),[C,P]=(0,i.useState)(!1);(0,m.N)({loop:Z,disable:!C});let{documentVisible:T,documentVisibleRef:D}=(0,r.x)(),[I,E,F]=(0,h.$)(!1),R=()=>E(!0),B=()=>E(!1),A=(0,o.ZP)(e=>e.isMobile),L=null===(t=o.ZP.getState().refreshCircleLastTimestamp[v])||void 0===t?void 0:t.endTimestamp,M=null===(n=o.ZP.getState().refreshCircleLastTimestamp[v])||void 0===n?void 0:n.endProcessPercent,O=L&&M&&(Date.now()-L)/y+M;return(0,f.L)(()=>{if(!u.N9)return O&&O>1&&(null==b||b()),()=>{var e;o.ZP.setState(t=>{var n;return{refreshCircleLastTimestamp:{...t.refreshCircleLastTimestamp,[v]:{endTimestamp:Date.now(),endProcessPercent:null!==(e=null===(n=S.current)||void 0===n?void 0:n.currentProgressPercent)&&void 0!==e?e:0}}}})}},[]),(0,i.useEffect)(()=>{if(N||!F()||!D.current)return;let e=setTimeout(()=>{!N&&F()&&D.current&&(null==b||b(),B())},0);return()=>clearTimeout(e)},[I,T,N]),(0,l.jsxs)(d.Z,{className:(0,s.m)("select-none",k),placement:j,forceOpen:g,triggerBy:A?"press":void 0,autoClose:!0,onOpen:()=>P(!0),onClose:()=>P(!1),children:[(0,l.jsx)(c,{run:p&&!N,initPercent:O&&O%1,duration:y,componentRef:S,className:(0,s.m)("clickable clickable-filter-effect",w),onClick:()=>{var e;R(),null===(e=S.current)||void 0===e||e.restart()},onEnd:()=>{var e;R(),null===(e=S.current)||void 0===e||e.restart()}}),(0,l.jsx)(d.Z.Panel,{children:(0,l.jsxs)("div",{className:"w-60",children:["Displayed data will auto-refresh after"," ",Math.round(y/1e3*(1-(null!==(x=null===(a=S.current)||void 0===a?void 0:a.currentProgressPercent)&&void 0!==x?x:0)))," seconds. Click this circle to update manually."]})})]})}},84344:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ef}});var l=n(85893),i=n(67294),s=n(66180),o=n(91371),a=n(19132),r=n(57435),c=n(94355),d=n(31555),u=n(48911),m=n(90116),f=n(57730),h=n(65942),x=n(23685),p=n(23127),v=n(38389),j=n(18739),g=n(18559),b=n(42186),Z=n(31166),y=n(80582),k=n(53002),w=n(99522),N=n(11601),S=n(43067),C=n(6994),P=n(70745),T=n(97664),D=n(54592),I=n(23484),E=n(88132),F=n(28948),R=n(48162),B=n(82727),A=n(11583),L=n(42885),M=n(33674),O=n(51800),W=n(29197),q=n(92618),z=n(91148),_=n(56419),H=n(90547),V=n(99881),$=n(3363),U=n(18074),K=n(62952),X=n(4465),Y=n(81451),G=n(51523),J=n(72573),Q=n(32825),ee=n(99111),et=n(43066),en=n(96398),el=n(85356),ei=n(99779),es=n(92224),eo=n(87980),ea=n(41456),er=n(7931),ec=n(51488);function ed(){return(0,v.Z)(),(0,j.Z)(),(0,p.o)(),null}let{ContextProvider:eu,useStore:em}=(0,Q.Z)({hasAcceptedPriceChange:!1,coinInputBox1ComponentRef:(0,i.createRef)(),coinInputBox2ComponentRef:(0,i.createRef)(),swapButtonComponentRef:(0,i.createRef)()});function ef(){return(0,l.jsxs)(eu,{children:[(0,l.jsx)(ed,{}),(0,l.jsxs)(L.Z,{mobileBarTitle:"Swap",metaTitle:"Swap - Raydium",children:[(0,l.jsx)(eh,{}),(0,l.jsx)(ep,{}),(0,l.jsx)(eD,{})]})]})}function eh(){return(0,l.jsx)(O.Z,{className:"justify-center  mb-12 mobile:mb-2",children:(0,l.jsx)(W.Z,{currentValue:"Swap",values:["Swap","Liquidity"],onChange:e=>{"Liquidity"===e&&(0,d.Eh)("/liquidity/add")}})})}function ex(){let e=(0,k.Z)(e=>e.allWsolBalance),t=(0,x.Z)(e=>e.refreshSwap),n=(0,k.Z)(e=>e.connected),[s,o]=(0,i.useState)(!1);return(0,Y.gt)(e,0)&&n?(0,l.jsxs)(O.Z,{className:"rounded-lg p-3 bg-[#4069BB] flex justify-center items-center gap-1 mobile:mb-5",children:[(0,l.jsx)(R.Z,{size:"sm",heroIconName:"exclamation-circle",className:"ml-2 text-white"}),(0,l.jsxs)(O.Z,{children:[(0,l.jsxs)("p",{className:"text-xs mobile:text-2xs text-[white]",children:["You have"," ",(0,l.jsx)("span",{className:"text-white",children:(0,J.B)((0,K.n)(b.FI,e))})," WSOL that you can"," ",(0,l.jsx)("span",{className:"text-[#39D0D8] cursor-pointer font-semibold",onClick:()=>{o(!0),(0,h.Z)().then(e=>{let{allSuccess:n}=e;n&&t(),o(!1)})},children:"Unwrap"})]}),s&&(0,l.jsx)(A.Z,{className:"w-3 h-3 ml-2"})]})]}):null}function ep(){var e;let{connected:t,connecting:n}=(0,k.Z)(),s=(0,x.Z)(e=>e.coin1),d=(0,x.Z)(e=>e.coin2),u=(0,x.Z)(e=>e.coin1Amount),m=(0,x.Z)(e=>e.coin2Amount),h=(0,x.Z)(e=>e.isCoin1CalculateTarget),p=(0,x.Z)(e=>e.isCoin2CalculateTarget),v=(0,x.Z)(e=>e.isCalculating),j=(0,x.Z)(e=>e.directionReversed),y=(0,x.Z)(e=>e.priceImpact),N=(0,x.Z)(e=>e.refreshSwap),C=(0,k.Z)(e=>e.balances),D=(0,x.Z)(e=>e.preflightCalcResult),I=(0,Z.ZP)(e=>e.tokens),B=Object.keys(I).length>2;(0,r.Z)(e=>e.jsonInfos),(0,x.Z)(e=>e.swapable);let A=(0,x.Z)(e=>e.selectedCalcResultPoolStartTimes),L=(0,a.ZP)(e=>e.chainTimeOffset),W=Date.now()+(null!=L?L:0),_=(0,i.useMemo)(()=>{if(null==A?void 0:A.length)return function(e){let t=(0,H.ZP)(e);return"Pool Opens in ".concat(String(t.days).padStart(2,"0"),"D : ").concat(String(t.hours).padStart(2,"0"),"H : ").concat(String(t.minutes).padStart(2,"0"),"M")}(Math.max(...A.map(e=>e.startTime))-W)},[A,W]),V=(0,x.Z)(e=>e.canFindPools),$=(0,x.Z)(e=>e.isInsufficientLiquidity),X=(0,Z.ZP)(e=>e.refreshTokenPrice),{hasConfirmed:G,popConfirm:Q}=function(){let e=(0,x.Z)(e=>e.directionReversed),t=(0,x.Z)(e=>e.coin1),n=(0,x.Z)(e=>e.coin2),s=e?t:n,o=(0,Z.ZP)(e=>{var t;return null===(t=e.tokenListSettings[Z.pI])||void 0===t?void 0:t.mints}),[a,r]=(0,el.Z)("USER_CONFIRMED_SWAP_TOKENS"),d=!!(s&&((null==o?void 0:o.size)===0||(null==o?void 0:o.has(null==s?void 0:s.mintString)))),u=!!(s&&(null==a?void 0:a.includes(null==s?void 0:s.mintString))),[m,f]=(0,i.useState)(!1),[h,p]=(0,i.useState)(!1);(0,i.useEffect)(()=>{f(!1)},[s]);let v=(0,i.useMemo)(()=>s&&(null==s.hasFreeze?(0,g.WX)(s.mint,{noLog:!0}).then(e=>null!=e?!e:void 0):!!s.hasFreeze),[null==s?void 0:s.mintString]),j=(0,ee.Z)(()=>v,[v],!0===v),b=()=>{h||(p(!0),c.Z.getState().popConfirm({cardWidth:"lg",type:"warning",title:"Confirm Token Mint Address",description:(0,l.jsxs)("div",{className:"space-y-4  text-center",children:[(0,l.jsx)("p",{className:"text-[#FED33A] font-bold",children:"Confirm the token mint address is correct before swapping!"}),(0,l.jsxs)("p",{children:["Many tokens have ",(0,l.jsx)("span",{className:"text-[#FED33A]",children:"similar or identical"})," token tickers and icons."]}),(0,l.jsx)("p",{children:"By clicking below, you understand that you are fully responsible for confirming the token you are trading."}),(0,l.jsxs)(O.Z,{className:"justify-center items-center gap-2 my-4 bg-[#141041] rounded py-3 w-full",children:[(0,l.jsx)(P.Z,{token:s}),(0,l.jsx)("div",{className:"font-semibold",children:null==s?void 0:s.symbol}),(0,l.jsx)(w.U,{textClassName:"text-[#abc4ff80]",showDigitCount:8,canExternalLink:!0,children:null==s?void 0:s.mint})]}),j&&(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"text-center my-4 text-[#FED33A] font-bold",children:"Freeze Authority Warning"}),(0,l.jsxs)("div",{className:"text-center my-2 text-xs text-[#FED33A]",children:["This token has freeze authority enabled and could",(0,l.jsx)("br",{}),"prevent you from transferring or trading the token later."]})]})]}),confirmButtonIsMainButton:!0,cancelButtonText:"Cancel",confirmButtonText:"I understand, Confirm",onConfirm:()=>{f(!0),p(!1),(null==s?void 0:s.mint)&&r(e=>(0,z.jX)(null!=e?e:[],String(s.mint)))},onCancel:()=>{f(!1),p(!1),x.Z.setState(e?{coin1:void 0}:{coin2:void 0})}}))},y=!s||d||u||m;return(0,i.useEffect)(()=>{!y&&s&&b()},[s,y]),{hasConfirmed:y,popConfirm:b}}(),et=j?d:s,en=(j?m:u)||"0",{ConfirmDialog:ei}=(0,ea.U)({token:s,onConfirm:()=>x.Z.setState({coin1:s}),onCancel:()=>x.Z.setState({coin1:void 0})}),{ConfirmDialog:ed}=(0,ea.U)({token:d,onConfirm:()=>x.Z.setState({coin2:d}),onCancel:()=>x.Z.setState({coin2:void 0})}),{hasAcceptedPriceChange:eu,swapButtonComponentRef:ef,coinInputBox1ComponentRef:eh,coinInputBox2ComponentRef:ep}=em(),ek=(0,k.Z)(e=>e.checkWalletHasEnoughBalance),ew=(0,i.useMemo)(()=>et&&ek((0,K.n)(et,en,{alreadyDecimaled:!0})),[et,en,ek,C]),eN=(0,i.useCallback)(()=>{x.Z.setState(e=>({directionReversed:!e.directionReversed}))},[]),[eS,{on:eC,off:eP}]=(0,es.ZP)(),[eT,eD]=(0,i.useState)("1"),eI=(0,x.Z)(e=>e.executionPrice),eE=(0,i.useRef)(null),eF=(0,i.useRef)(null),[eR,{toggleSwap:eB}]=(0,er.H)(eE,eF,{defaultHasWrapped:j});(0,i.useEffect)(()=>{x.Z.setState({directionReversed:eR})},[eR]);let eA=s&&(0,Y.$u)(u)&&d&&(0,Y.$u)(m)&&eI,eL=(0,i.useRef)(null);(0,i.useEffect)(()=>{x.Z.setState({scrollToInputBox:()=>{var e;return null===(e=eL.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth",block:"center"})}})},[]);let eM=(0,o.ZP)(e=>e.isApprovePanelShown),eO=(0,i.useMemo)(()=>{if("1"===eT&&d){if(d.symbol===b.aF.symbol)return[b.FI];if(d.symbol===b.FI.symbol)return[b.aF]}else if("2"===eT&&s){if(s.symbol===b.aF.symbol)return[b.FI];if(s.symbol===b.FI.symbol)return[b.aF]}return[]},[eT,s,d]),eW=(0,x.Z)(e=>e.selectedCalcResult),eq=null==eW?void 0:eW.expirationTime,[ez,e_]=(0,i.useState)(0===eq),{isWarningChipOpen:eH,badToken:eV,Token2022FeeTooHighWarningChip:e$}=(0,ec.I)([{token:s,amount:u},{token:d,amount:m}]);return(0,l.jsxs)(E.Z,{domRef:eL,wrapperClassName:"w-[min(456px,100%)] self-center cyberpunk-bg-light",className:"py-8 pt-4 px-6 mobile:py-5 mobile:px-3",children:[(0,l.jsx)(ex,{}),(0,l.jsxs)("div",{className:"space-y-5 mt-5 mobile:mt-0",children:[(0,l.jsx)(T.Z,{domRef:eE,disabled:eM,noDisableStyle:!0,disabledInput:j,componentRef:eh,haveHalfButton:!0,haveCoinIcon:!0,showTokenSelectIcon:!0,topLeftLabel:eR?"To":"From",onTryToTokenSelect:()=>{eC(),eD("1")},onEnter:e=>{var t,n,l,i;e&&(d||null===(t=ep.current)||void 0===t||null===(n=t.selectToken)||void 0===n||n.call(t),d&&m&&(null===(l=ef.current)||void 0===l||null===(i=l.click)||void 0===i||i.call(l)))},token:s,value:h?"0":u?(0,Y.eq)(u,0)?"":(0,J.B)(u):void 0,onUserInput:e=>{x.Z.setState({focusSide:"coin1",coin1Amount:e})},hideTransferFee:!0}),(0,l.jsxs)("div",{className:"relative h-8",children:[(0,l.jsxs)(O.Z,{className:"absolute items-center transition-all ".concat(eI?"left-4":"left-1/2 -translate-x-1/2"),children:[(0,l.jsx)(R.Z,{size:"sm",iconSrc:"/icons/msic-swap.svg",className:"p-2 frosted-glass frosted-glass-teal rounded-full mr-4 ".concat(eM?"not-clickable":"clickable"," select-none transition"),onClick:()=>{eM||(eB(),eN())}}),eI&&(0,l.jsx)("div",{className:"absolute left-full",children:(0,l.jsx)(eZ,{})})]}),(0,l.jsx)("div",{className:"absolute right-0 ".concat(eM?"not-clickable":"clickable"),children:(0,l.jsx)(M.Z,{run:!eM,refreshKey:"swap",popPlacement:"right-bottom",freshFunction:()=>{N(),X()}})})]}),(0,l.jsx)(T.Z,{domRef:eF,disabled:eM,noDisableStyle:!0,disabledInput:!j,componentRef:ep,haveHalfButton:!0,haveCoinIcon:!0,showTokenSelectIcon:!0,topLeftLabel:eR?"From":"To",onTryToTokenSelect:()=>{eC(),eD("2")},onEnter:e=>{var t,n,l,i;e&&(s||null===(t=eh.current)||void 0===t||null===(n=t.selectToken)||void 0===n||n.call(t),s&&u&&(null===(l=ef.current)||void 0===l||null===(i=l.click)||void 0===i||i.call(l)))},token:d,value:p?"0":m?(0,Y.eq)(m,0)?"":(0,J.B)(m):void 0,onUserInput:e=>{x.Z.setState({focusSide:"coin2",coin2Amount:e})},hideTransferFee:!0})]}),(0,l.jsx)(F.Z,{show:eA,children:(0,l.jsx)(ey,{className:"mt-5",onExpirationTimeRunToZero:()=>e_(!0)})}),(0,l.jsx)(eg,{}),ei,ed,e$({className:"pt-5"}),(0,l.jsx)(S.Z,{className:"w-full frosted-glass-teal mt-5",componentRef:ef,isLoading:eM,validators:[{should:B,fallbackProps:{children:"Loading Tokens ..."}},{should:!0,fallbackProps:{children:"Loading Pools ..."}},{should:t,forceActive:!0,fallbackProps:{onClick:()=>o.ZP.setState({isWalletSelectorShown:!0}),children:n?"Connecting...":"Connect Wallet"}},{should:et&&(j?s:d),fallbackProps:{children:"Select a token"}},{should:G,forceActive:!0,fallbackProps:{onClick:Q,children:"Confirm unOfficial warning"}},{not:eH},{should:!!D,fallbackProps:{children:"Finding Pool ..."}},{not:ez,fallbackProps:{children:"Token 2022 Expired"}},{should:!$,fallbackProps:{children:(0,l.jsxs)(O.Z,{className:"items-center",children:[(0,l.jsx)("div",{children:"Insufficient Liquidity"}),(0,l.jsxs)(q.Z,{className:"w-full",children:[(0,l.jsx)(R.Z,{size:"sm",heroIconName:"question-mark-circle",className:"ml-2 cursor-help"}),(0,l.jsx)(q.Z.Panel,{children:(0,l.jsx)("p",{className:"w-64",children:"The route for this swap includes a CLMM pool with insufficient in-range liquidity for your swap. Try swapping for a smaller amount or try again later."})})]})]})}},{should:V,fallbackProps:{children:"Pool Not Found"}},{should:!_,fallbackProps:{children:_}},{should:en&&(0,Y.$u)(en),fallbackProps:{children:"Enter an amount"}},{should:!v,fallbackProps:{children:"Calculating ..."}},{should:!(0,Y.eq)((j?u:m)||"0",0),fallbackProps:{children:"Swap Amount Too Small"}},{should:ew,fallbackProps:{children:"Insufficient ".concat(null!==(e=null==et?void 0:et.symbol)&&void 0!==e?e:""," balance")}},{should:eu||eM,fallbackProps:{children:"Accept price change"}},{should:y&&(0,Y.G)(y,.05),forceActive:!0,fallbackProps:{onClick:e=>{let{ev:t}=e;return t.stopPropagation(),function(e){let{priceImpact:t}=e;c.Z.getState().popConfirm({type:"error",title:"High Price Impact Warning",description:(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("p",{children:["Price impact for this swap is"," ",(0,l.jsx)("span",{className:"text-[#DA2EEF]",children:t?(0,U.Z)(t):"higher than 5%"})]}),(0,l.jsx)("p",{children:"Confirming may result in a poor price for this swap!"})]}),confirmButtonText:"Swap Anyway",onConfirm:f.Z})}({priceImpact:y})}}}],onClick:f.Z,children:"Swap"}),(0,l.jsx)(eb,{}),(0,l.jsx)(eo.Z,{open:eS,onSelectToken:e=>{"1"===eT?ej(s,e)||(x.Z.setState({coin1:e,[j?"isCoin1CalculateTarget":"isCoin2CalculateTarget"]:!0}),ev(e,d)||x.Z.setState({coin2:void 0})):ej(d,e)||(x.Z.setState({coin2:e,[j?"isCoin1CalculateTarget":"isCoin2CalculateTarget"]:!0}),ev(e,s)||x.Z.setState({coin1:void 0})),eP()},onClose:eP,disableTokens:eO})]})}function ev(e,t){return(0,b.Dn)(e)&&(0,b.Ee)(t)||(0,b.Ee)(e)&&(0,b.Dn)(t)||!(0,X.aT)(null==e?void 0:e.mint,null==t?void 0:t.mint)}function ej(e,t){return(null==e?void 0:e.mint)===t.mint}function eg(){let{hasAcceptedPriceChange:e,setHasAcceptedPriceChange:t}=em(),n=(0,o.ZP)(e=>e.isApprovePanelShown),s=(0,x.Z)(e=>e.coin1),a=(0,x.Z)(e=>e.coin2),r=(0,x.Z)(e=>e.coin1Amount),c=(0,x.Z)(e=>e.coin2Amount),d=(0,x.Z)(e=>e.directionReversed),u=d?"coin2":"coin1",m="coin1"===u?s:a,f="coin1"===u?r:c,h="coin1"===u?a:s,p="coin1"===u?c:r,v=(0,i.useRef)(!1);(0,ei.P)(e=>{let[n,l,i,s,o]=e,a=null!=n&&n!==m,r=!!(f&&(0,Y.$u)(l)&&!(0,Y.eq)(l,f)),c=null!=i&&i!==h,u=!!(p&&(0,Y.$u)(s)&&!(0,Y.eq)(s,p)),x=null!=o&&o!==d,j=!a&&!r&&!c&&!u&&!x;j?t(!0):!j&&(r||a||c||x)?(t(!0),v.current=!0):u&&(v.current||r||t(!u),v.current=!1)},[m,f,h,p,d]);let j=(0,Y.$u)(r)&&(0,Y.$u)(c);return(0,l.jsx)(F.U,{children:j&&!e&&!n&&(0,l.jsxs)(O.Z,{className:"mt-5 bg-[#141041] rounded-xl py-2 px-6 mobile:px-4 items-center justify-between",children:[(0,l.jsxs)(O.Z,{className:"text-sm font-medium text-[#ABC4FF] items-center ",children:["Price updated",(0,l.jsxs)(q.Z,{placement:"bottom-right",children:[(0,l.jsx)(R.Z,{size:"sm",heroIconName:"question-mark-circle",className:"ml-2 cursor-help"}),(0,l.jsx)(q.Z.Panel,{children:(0,l.jsx)("p",{className:"w-80",children:"Price has changed since your swap amount was entered."})})]})]}),(0,l.jsx)(S.Z,{size:"sm",className:"frosted-glass-teal",onClick:()=>t(!0),children:"Accept"})]})})}function eb(){let e=(0,k.Z)(e=>e.solBalance),t=(0,G.hi)(e,10**b.Bk);return(0,l.jsx)(F.U,{children:t&&(0,Y.lt)(t,b.kn)&&(0,Y.eg)(t,0)&&(0,l.jsxs)(O.Z,{className:"text-sm mt-4 text-[#D8CB39] items-center justify-center",children:["SOL balance: ",(0,J.B)(t)," ",(0,l.jsxs)(q.Z,{placement:"bottom-right",children:[(0,l.jsx)(R.Z,{size:"sm",heroIconName:"question-mark-circle",className:"ml-2 cursor-help"}),(0,l.jsx)(q.Z.Panel,{children:(0,l.jsxs)("p",{className:"w-80",children:["SOL is needed for Solana network fees. A minimum balance of ",b.kn," SOL is recommended to avoid failed transactions. This swap will leave you with less than ",b.kn," SOL."]})})]})]})})}function eZ(e){var t,n;let{className:a}=e,[r,c]=(0,i.useState)(!1),d=(0,x.Z)(e=>e.coin1),u=(0,x.Z)(e=>e.coin2),m=(0,x.Z)(e=>e.directionReversed),f=m?u:d,h=m?d:u,p=(0,x.Z)(e=>e.executionPrice),v=(0,x.Z)(e=>e.priceImpact),j=(0,i.useMemo)(()=>(0,Y.$u)(v)&&(0,Y.eg)(v,.05),[v]),g=(0,i.useMemo)(()=>(0,Y.$u)(v)&&(0,Y.eg)(v,.01),[v]),b=(0,o.ZP)(e=>e.isMobile),Z=r?h:f,y=r?f:h;return(0,l.jsxs)(D.Z,{children:[(0,l.jsx)(F.U,{children:p&&!p.denominator.isZero()&&(0,l.jsxs)(O.Z,{className:(0,s.m)("font-medium text-sm text-[#ABC4FF]",a),children:[(0,l.jsxs)("div",{className:"whitespace-nowrap",children:[1," ",null!==(t=null==Z?void 0:Z.symbol)&&void 0!==t?t:"--"," ≈"," ",(0,J.B)(r&&0!==parseInt(null==p?void 0:p.numerator.toString())?(0,G.hi)(1,p):p,{decimalLength:b?"auto 2":"auto",zeroDecimalNotAuto:!0})," ",null!==(n=null==y?void 0:y.symbol)&&void 0!==n?n:"--"]}),(0,l.jsx)("div",{className:"ml-2 clickable",onClick:()=>c(e=>!e),children:"⇋"})]})}),(0,l.jsx)(F.U,{children:v?(0,l.jsx)("div",{className:"font-medium text-xs whitespace-nowrap ".concat(j?"text-[#DA2EEF]":g?"text-[#D8CB39]":"text-[#39D0D8]"," transition-colors"),children:j||g?"Price Impact Warning":"Low Price Impact"}):null})]})}function ey(e){var t,n,a,r,c,d,u,m,f,h,p;let{className:v,onExpirationTimeRunToZero:j}=e,g=(0,o.ZP)(e=>e.slippageTolerance),y=(0,o.ZP)(e=>e.slippageToleranceState),k=(0,Z.ZP)(e=>e.getToken),w=(0,x.Z)(e=>e.priceImpact),S=(0,x.Z)(e=>e.coin1),C=(0,x.Z)(e=>e.coin2),P=(0,x.Z)(e=>e.directionReversed),T=P?C:S,E=P?S:C;(0,x.Z)(e=>e.focusSide);let F=(0,x.Z)(e=>e.minReceived),A=(0,x.Z)(e=>e.fee),L=(0,x.Z)(e=>e.maxSpent),M=(0,x.Z)(e=>e.selectedCalcResult),W=(0,x.Z)(e=>e.selectedCalcResultPoolStartTimes),q=(0,i.useMemo)(()=>(0,Y.$u)(w)&&(0,Y.eg)(w,.05),[w]),z=(0,i.useMemo)(()=>(0,Y.$u)(w)&&(0,Y.eg)(w,.01),[w]),H=k((null==M?void 0:M.routeType)==="route"?M.middleToken.mint:void 0),V=T&&E?(null==M?void 0:M.routeType)==="amm"?"Raydium Pool":(null==M?void 0:M.routeType)==="route"?(0,l.jsx)(ew,{startSymbol:null!==(t=null==T?void 0:T.symbol)&&void 0!==t?t:"",middleSymbol:null!==(n=null==H?void 0:H.symbol)&&void 0!==n?n:"",endSymbol:null!==(a=null==E?void 0:E.symbol)&&void 0!==a?a:"",poolTypes:M.poolType}):"Others":void 0,$=(0,o.ZP)(e=>e.isApprovePanelShown),X=(0,i.useMemo)(()=>{var e;return!!(null==M?void 0:null===(e=M.poolKey)||void 0===e?void 0:e.some(e=>5===e.version))},[M]),Q=T&&(null==M?void 0:M.amountIn.fee)&&(0,K.n)(T,M.amountIn.fee,{alreadyDecimaled:!0}),ee=E&&(null==M?void 0:M.amountOut.fee)&&(0,K.n)(E,M.amountOut.fee,{alreadyDecimaled:!0}),et=H&&(null==M?void 0:M.routeType)==="route"&&(null==M?void 0:M.minMiddleAmountFee)?M.minMiddleAmountFee:void 0,en=null==M?void 0:M.expirationTime;return(0,l.jsxs)(D.Z,{className:(0,s.m)("pt-5 pb-4 px-6 flex-grow border-1.5  ".concat(q?"border-[#DA2EEF]":z?"border-[rgba(216,203,57,.5)]":"border-[rgba(171,196,255,.5)]"," rounded-xl items-center gap-3 transition-colors"),v),children:[V&&(0,l.jsx)(eC,{fieldName:"Swapping Through",fieldValue:(0,l.jsxs)(O.Z,{className:"items-center gap-2",children:[(null==M?void 0:M.routeType)==="amm"&&(null==M?void 0:M.poolType)&&(0,l.jsx)(N.C,{className:"self-center",children:M.poolType}),(0,l.jsx)("div",{children:V})]}),tooltipContent:"This venue gave the best price for your trade"}),L?(0,l.jsx)(eC,{fieldName:"Maximum Spent",fieldValue:"".concat((0,J.B)(L,{decimalLength:"auto ".concat(null==T?void 0:T.decimals)})," ").concat(null!==(r=null==T?void 0:T.symbol)&&void 0!==r?r:"--"),tooltipContent:"The max amount of tokens you will spend on this trade"}):(0,l.jsx)(eC,{fieldName:"Minimum Received",fieldValue:"".concat((0,J.B)(F,{decimalLength:"auto ".concat(null==E?void 0:E.decimals)})," ").concat(null!==(c=null==E?void 0:E.symbol)&&void 0!==c?c:"--"),tooltipContent:"The least amount of tokens you will recieve on this trade"}),(0,l.jsx)(eC,{fieldName:"Price Impact",fieldNameTextColor:q?"#DA2EEF":z?"#D8CB39":void 0,fieldValue:w?(0,Y.lt)(w,.001)?"<0.1%":(0,U.Z)(w):"--",fieldValueTextColor:q?"#DA2EEF":z?"#D8CB39":"#39D0D8",tooltipContent:"The difference between the market price and estimated price due to trade size"}),(0,Y.eg)(Q,0)&&(0,l.jsx)(eC,{fieldName:"Transfer Fee (".concat(null!==(d=null==T?void 0:T.symbol)&&void 0!==d?d:"--",")"),fieldValue:"".concat((0,J.B)(Q)," ").concat(null!==(u=null==T?void 0:T.symbol)&&void 0!==u?u:"--")}),(0,Y.eg)(et,0)&&(0,l.jsx)(eC,{fieldName:"Transfer Fee (".concat(null!==(m=null==H?void 0:H.symbol)&&void 0!==m?m:"--",")"),fieldValue:"".concat((0,J.B)(et)," ").concat(null!==(f=null==H?void 0:H.symbol)&&void 0!==f?f:"--")}),(0,Y.eg)(ee,0)&&(0,l.jsx)(eC,{fieldName:"Transfer Fee (".concat(null!==(h=null==E?void 0:E.symbol)&&void 0!==h?h:"--",")"),fieldValue:"".concat((0,J.B)(ee)," ").concat(null!==(p=null==E?void 0:E.symbol)&&void 0!==p?p:"--")}),en&&(0,l.jsx)(eC,{fieldName:"Expiration Time",fieldValue:(0,l.jsx)(ek,{remainSeconds:en,onReachZeroSeconds:j})}),(0,l.jsxs)(I.Z,{openDirection:"upwards",className:"w-full",children:[(0,l.jsx)(I.Z.Body,{children:(0,l.jsxs)(D.Z,{className:"gap-3 pb-3",children:[(0,l.jsx)(eC,{fieldName:"Addresses",tooltipContent:(0,l.jsx)(eP,{})}),(0,l.jsx)(eC,{fieldName:"Slippage Tolerance",tooltipContent:"The maximum difference between your estimated price and execution price",fieldValue:(0,l.jsxs)(O.Z,{className:"py-1 px-2 bg-[#141041] rounded-sm text-[#F1F1F2] font-medium text-xs -my-1",children:[(0,l.jsx)(B.Z,{className:"w-7 px-0",disabled:$,value:(0,J.B)((0,G.dC)(g,100),{decimalLength:"auto 2"}),onUserInput:e=>{let t=(0,G.hi)(parseFloat(e),100);t&&o.ZP.setState({slippageTolerance:t})},pattern:/^\d*\.?\d*$/,maximum:100}),(0,l.jsx)("div",{className:"opacity-50 ml-1",children:"%"})]})}),"too small"===y&&(0,l.jsx)("div",{className:"text-[#D8CB39] text-xs mobile:text-sm",children:"Your transaction may fail"}),"too large"===y&&(0,l.jsx)("div",{className:"text-[#D8CB39] text-xs mobile:text-sm",children:"Your transaction may be frontrun and result in an unfavorable trade"}),null==W?void 0:W.map(e=>{var t,n;let{ammId:i,poolInfo:s,startTime:o}=e;return(0,l.jsx)(eC,{fieldName:M&&M.poolKey.length>1?"Open at (".concat(null===(t=k(s.baseMint))||void 0===t?void 0:t.symbol,"-").concat(null===(n=k(s.quoteMint))||void 0===n?void 0:n.symbol,")"):"Open at",fieldValue:(0,_.xn)(o)},i)}),(0,l.jsx)(eC,{fieldName:"Swap Fee",tooltipContent:"Of the 0.25% swap fee, 0.22% goes to LPs and 0.03% is used to buy back RAY.".concat(X?" For stable swaps, the 0.02% fee goes to LPs.":""," "),fieldValue:A?(0,l.jsx)(D.Z,{children:A.map(e=>{var t,n;let i=(0,b.wE)(e);return(0,l.jsxs)("div",{className:"text-right",children:[(0,J.B)(i)," ",null!==(n=null===(t=k(i.token.mint))||void 0===t?void 0:t.symbol)&&void 0!==n?n:"--"]},i.token.symbol)})}):"--"})]})}),(0,l.jsx)(I.Z.Face,{children:e=>{let{isOpen:t}=e;return(0,l.jsxs)(O.Z,{className:"w-full items-center text-xs font-medium text-[rgba(171,196,255,0.5)] cursor-pointer select-none",children:[(0,l.jsx)("div",{children:t?"Show less":"More information"}),(0,l.jsx)(R.Z,{size:"xs",heroIconName:t?"chevron-up":"chevron-down",className:"ml-1"})]})}})]})]})}function ek(e){var t;let{remainSeconds:n,onReachZeroSeconds:s}=e,o=null!==(t=(0,a.ZP)(e=>e.chainTimeOffset))&&void 0!==t?t:0,[r,c]=(0,i.useState)(Math.max((null!=n?n:0)-o/1e3,0));(0,en.L)(()=>{c(Math.max((null!=n?n:0)-o/1e3,0))},[o,n]),(0,en.L)(()=>{r<=0&&(null==s||s())},[r<=0]);let{days:d,hours:u,minutes:m,seconds:f}=(0,H.ZP)(1e3*r);return(0,et.N)({loop:d?36e5:u?6e4:1e3,disable:!n,disableWhenDocumentInvisiable:!1,onLoop:()=>c(e=>e>0?e-1:e)}),(0,l.jsx)("div",{className:"inline-block",children:d?(0,_.xn)(Date.now()+o+r):u?"rest: ".concat(u,"h ").concat(m,"m"):m?"rest: ".concat(m,"m ").concat(f,"s"):"rest: ".concat(f,"s")})}function ew(e){let{startSymbol:t,middleSymbol:n,endSymbol:i,poolTypes:s}=e;return(0,l.jsxs)(O.Z,{className:"items-center",children:[t," ",(0,l.jsx)(eN,{tagValue:s[0]})," ",n," ",(0,l.jsx)(eN,{tagValue:s[1]}),i]})}function eN(e){let{tagValue:t}=e,n=(0,i.useRef)(null),[s,o]=(0,i.useState)(0),a=()=>{n.current&&o(n.current.clientWidth)};return(0,i.useEffect)(()=>{a(),t||o(12)},[t]),(0,l.jsxs)("div",{className:"relative top-[-15px]",style:{marginLeft:4,marginRight:4,maxHeight:19},children:[(0,l.jsx)("div",{ref:n,children:t?(0,l.jsx)(N.C,{className:"justify-center text-[8px] px-1",children:t}):(0,l.jsx)("div",{style:{height:19,width:12}})}),(0,l.jsx)(eS,{className:"",width:s})]})}function eS(e){let{className:t,width:n}=e;return(0,l.jsx)("div",{className:(0,s.m)("flex flex-col justify-start mt-[-2px] items-end",t),children:(0,l.jsxs)("svg",{width:n,height:15,viewBox:"0 0 ".concat(n," 15"),children:[(0,l.jsx)("defs",{children:(0,l.jsx)("marker",{id:"arrow",markerWidth:"8",markerHeight:"8",refX:"3.5",refY:"4.5",orient:"auto",children:(0,l.jsx)("path",{d:"M3.5,4.5 L2,7 L7,4.5 L2,2 L3.5,4.5",fill:"white"})})}),(0,l.jsx)("path",{d:"M0,7 H".concat(n-5),vectorEffect:"non-scaling-stroke",stroke:"white",strokeWidth:"1.25px",fill:"none",markerEnd:"url(#arrow)"})]})})}function eC(e){let{className:t,fieldName:n,fieldValue:i,tooltipContent:o,fieldNameTextColor:a,fieldValueTextColor:r}=e;return(0,l.jsxs)(O.Z,{className:(0,s.m)("w-full justify-between",t),children:[(0,l.jsxs)(O.Z,{className:"items-center text-xs font-medium text-[#ABC4FF]",style:{color:a},children:[(0,l.jsx)("div",{className:"mr-1",children:n}),o&&(0,l.jsxs)(q.Z,{className:t,placement:"bottom-right",children:[(0,l.jsx)(R.Z,{size:"xs",heroIconName:"question-mark-circle",className:"cursor-help"}),(0,l.jsx)(q.Z.Panel,{children:(0,l.jsx)("div",{className:"max-w-[30em]",children:o})})]})]}),(0,l.jsx)("div",{className:"text-xs font-medium text-white text-right",style:{color:r},children:i})]})}function eP(){var e,t,n,i;let s=(0,x.Z)(e=>e.coin1),o=(0,x.Z)(e=>e.coin2),a=(0,x.Z)(e=>e.selectedCalcResult),r=null==a?void 0:a.poolKey;return(0,l.jsxs)("div",{className:"w-60",children:[(0,l.jsx)("div",{className:"text-sm font-semibold mb-2",children:"Addresses"}),(0,l.jsxs)(D.Z,{className:"gap-2",children:[(0,l.jsx)(eT,{label:null!==(e=null==s?void 0:s.symbol)&&void 0!==e?e:"--",type:"token",address:String(null!==(t=null==s?void 0:s.mint)&&void 0!==t?t:"--")}),(0,l.jsx)(eT,{label:null!==(n=null==o?void 0:o.symbol)&&void 0!==n?n:"--",type:"token",address:String(null!==(i=null==o?void 0:o.mint)&&void 0!==i?i:"--")}),(null==r?void 0:r.length)?(0,l.jsx)(l.Fragment,{children:r.map((e,t,n)=>{let i=[],s="";return n.length>1&&(s="(route ".concat(t+1,")")),(0,u.y)(e)?(i.push((0,l.jsx)(eT,{label:"Market ID ".concat(s),address:e.marketId},"market"+e.marketId)),i.push((0,l.jsx)(eT,{label:"Amm ID ".concat(s),address:e.id},"amm"+e.id))):i.push((0,l.jsx)(eT,{label:"Amm ID ".concat(s),address:(0,$.ZP)(e.id)},"amm"+e.id)),i})}):null]})]})}function eT(e){let{className:t,label:n,address:i,type:o="account"}=e;return(0,l.jsxs)(O.Z,{className:(0,s.m)("grid gap-2 items-center grid-cols-[5em,1fr,auto,auto]",t),children:[(0,l.jsx)("div",{className:"text-xs font-normal text-white",children:n}),(0,l.jsx)(w.U,{showDigitCount:5,addressType:o,canCopy:!0,canExternalLink:!0,textClassName:"flex text-xs font-normal text-white bg-[#141041] rounded justify-center",children:i})]})}function eD(){let e=(0,x.Z)(e=>e.coin1),t=(0,x.Z)(e=>e.coin2),n=(0,x.Z)(e=>e.directionReversed),s=(0,i.useRef)(null),o=(0,i.useRef)(null),[a,{toggleSwap:r,resetSwapPosition:c}]=(0,er.H)(s,o,{defaultHasWrapped:n});(0,i.useEffect)(()=>{var e,t;let l=!!(null===(e=s.current)||void 0===e?void 0:e.clientHeight),i=!!(null===(t=o.current)||void 0===t?void 0:t.clientHeight);a!==n&&l&&i&&r()},[n]);let[d,u]=(0,i.useState)(!1),[m,f]=(0,i.useState)(!1),h=(0,z.DB)([d,m]).length;return(0,ei.P)(e=>{let[t]=e;h<(null!=t?t:0)&&c()},[h]),(0,l.jsxs)(C.Z,{className:"flex ".concat(d||m?"visible":"invisible"," flex-col mt-10 p-2 w-[min(456px,100%)] self-center bg-cyberpunk-card-bg"),size:"lg",children:[(0,l.jsx)("div",{ref:s,children:(0,l.jsx)(eI,{coin:e,onDataChange:e=>u(e)})}),(0,l.jsx)("div",{ref:o,children:(null==t?void 0:t.mintString)!==(null==e?void 0:e.mintString)&&(0,l.jsx)(eI,{coin:t,onDataChange:e=>f(e)})})]})}function eI(e){var t,n,s,a;let{coin:r,onDataChange:c}=e,d=[(0,$.ZP)(y.LA),(0,$.ZP)(y.q3)],u=(0,o.ZP)(e=>e.isMobile),f=(0,x.Z)(e=>e.refreshCount),h=(0,Z.ZP)(e=>e.tokenPrices),p=(0,ee.Z)(async()=>{var e,t;return(null==r?void 0:null===(e=r.extensions)||void 0===e?void 0:e.coingeckoId)?await (0,m.c)(null==r?void 0:null===(t=r.extensions)||void 0===t?void 0:t.coingeckoId):void 0},[r,f]),v=null==p?void 0:p[0],j=null==p?void 0:p[p.length-1],g=null!==(t=r&&h[null==r?void 0:r.mintString])&&void 0!==t?t:j,b=(0,Y.$u)(v)&&j?(j-v)/v:0,k=b>0,w=b<0,N=!!(r&&!d.includes(r.mintString)&&(null==p?void 0:p.length));return(0,i.useEffect)(()=>()=>null==c?void 0:c(!1),[]),(0,i.useEffect)(()=>{null==c||c(N)},[N]),(0,l.jsx)(F.U,{children:N&&(0,l.jsxs)("div",{className:"flex mobile:grid mobile:grid-cols-3 mobile:gap-1 p-4 mobile:p-2 w-[min(456px,100%)] self-center items-center",children:[(0,l.jsx)(O.Z,{className:"items-center mobile:justify-self-center w-16 mobile:w-8 flex-shrink-0",children:(0,l.jsxs)(D.Z,{className:"gap-1 grow  mobile:items-center",children:[(0,l.jsx)(P.Z,{token:r,size:u?"sm":"smi"}),(0,l.jsx)("div",{className:"font-medium text-sm text-[#abc4ff]",children:null!==(n=null==r?void 0:r.symbol)&&void 0!==n?n:"--"})]})}),(0,l.jsxs)(D.Z,{className:"items-end mobile:items-center mobile:justify-self-center mobile:ml-0 grow",children:[(0,l.jsx)("div",{className:"text-xs font-medium text-[rgba(171,196,255,0.5)]",children:"Price"}),(0,l.jsx)("div",{className:"text-sm font-medium text-[#abc4ff] whitespace-nowrap",children:"$"+(0,V.Z)(null==g?void 0:g.toFixed((0,Y.lt)(g,.1)?null!==(s=null==r?void 0:r.decimals)&&void 0!==s?s:4:2),{fractionLength:"auto"})})]}),(0,l.jsxs)(D.Z,{className:"items-start mobile:items-center mobile:justify-self-center ml-8  mobile:ml-0 w-8",children:[(0,l.jsx)("div",{className:"text-xs font-medium text-[rgba(171,196,255,0.5)]",children:"24H%"}),(0,l.jsx)("div",{className:"text-sm font-medium ".concat(k?"text-[#39D0D8]":w?"text-[#DA2EEF]":"text-[#abc4ff]"),children:(0,U.Z)(b,{alwaysSigned:!0})})]}),(0,l.jsx)(eE,{className:"ml-10 w-36 mobile:w-full h-12 mobile:col-span-full  mobile:m-0 mobile:mt-2 flex-shrink-0",isPositive:k,isNegative:w,pricePoints:p})]})})}function eE(e){let{className:t,isPositive:n,isNegative:i,pricePoints:s}=e,o=n?"#39D0D8":i?"#DA2EEF":"#abc4ff",a=Math.max(...s),r=Math.min(...s),c=a-r,d=s.length;return(0,l.jsxs)("svg",{className:t,viewBox:"0 0 2000 1000",preserveAspectRatio:"none",children:[(0,l.jsx)("defs",{children:(0,l.jsxs)("filter",{id:"k-line-glow-".concat(n?"positive":i?"negative":"normal"),children:[(0,l.jsx)("feFlood",{result:"flood",floodColor:o,floodOpacity:".8"}),(0,l.jsx)("feComposite",{in:"flood",result:"mask",in2:"SourceGraphic",operator:"in"}),(0,l.jsx)("feMorphology",{in:"mask",result:"dilated",operator:"dilate",radius:"3"}),(0,l.jsx)("feGaussianBlur",{in:"dilated",result:"blurred",stdDeviation:"8"}),(0,l.jsxs)("feMerge",{children:[(0,l.jsx)("feMergeNode",{in:"blurred"}),(0,l.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})}),(0,l.jsx)("g",{filter:"url(#k-line-glow-".concat(n?"positive":i?"negative":"normal",")"),children:!!d&&(c?(0,l.jsx)("polyline",{vectorEffect:"non-scaling-stroke",points:s.map((e,t)=>{let n=function(e){let t=.1*a;return c>t?(c-(e-r))/c*1e3:1e3-((t-c)/2+(e-r))*1e3/t}(e);return"".concat(t/d*2e3,",").concat(n)}).join(" "),stroke:o,fill:"none"}):(0,l.jsx)("line",{x1:"0",y1:"499.9",x2:"2000",y2:"500",stroke:o,fill:"none",strokeWidth:"16"}))})]})}}},function(e){e.O(0,[4740,2885,2820,7664,6133,4052,8554,9774,2888,179],function(){return e(e.s=98229)}),_N_E=e.O()}]);