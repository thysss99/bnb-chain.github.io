"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5334],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var o=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),p=i,f=u["".concat(s,".").concat(p)]||u[p]||h[p]||n;return a?o.createElement(f,r(r({ref:t},c),{},{components:a})):o.createElement(f,r({ref:t},c))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<n;d++)r[d]=a[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},29179:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>n,contentTitle:()=>r,metadata:()=>l,toc:()=>s,default:()=>c});var o=a(87462),i=(a(67294),a(3905));const n={sidebar_label:"Overview",sidebar_position:2,hide_table_of_contents:!1},r="Overview",l={unversionedId:"validator/overview",id:"validator/overview",isDocsHomePage:!1,title:"Overview",description:"BNB Smart Chain is an innovative solution to bring programmability and interoperability to Beacon Chain. BNB Smart Chain relies on a system of 50 validators with Proof of Staked Authority (PoSA) consensus that can support short block time and lower fees. The most bonded validator candidates of staking will become validators and produce blocks. The double-sign detection and other slashing logic guarantee security, stability, and chain finality.",source:"@site/docs/validator/overview.md",sourceDirName:"validator",slug:"/validator/overview",permalink:"/docs/validator/overview",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/validator/overview.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Overview",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Cross-Chain Bridges",permalink:"/docs/learn/cross-chain-bridges"},next:{title:"Create Validator",permalink:"/docs/validator/create-val"}},s=[{value:"What is Validator?",id:"what-is-validator",children:[],level:2},{value:"Economics",id:"economics",children:[],level:2},{value:"Risks for Validators",id:"risks-for-validators",children:[{value:"Potential Loss",id:"potential-loss",children:[{value:"Loss for Double-Sign Slash",id:"loss-for-double-sign-slash",children:[],level:4},{value:"Loss for Offline Slash:",id:"loss-for-offline-slash",children:[],level:4},{value:"Loss for Too Low self-delegation",id:"loss-for-too-low-self-delegation",children:[],level:4}],level:3}],level:2}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"BNB Smart Chain is an innovative solution to bring programmability and interoperability to Beacon Chain. BNB Smart Chain relies on a system of 50 validators with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/whitepaper/blob/master/WHITEPAPER.md#consensus-and-validator-quorum"},"Proof of Staked Authority (PoSA) consensus")," that can support short block time and lower fees. The most bonded validator candidates of staking will become validators and produce blocks. The double-sign detection and other slashing logic guarantee security, stability, and chain finality."),(0,i.kt)("p",null,"Other than the 29 active validators, BSC will introduce more validators, e.g. another 20 inactive validators, into the validator set as backups, which will be called \u201cCandidates\u201d."),(0,i.kt)("p",null,"Candidates will produce blocks and charge gas fees in BSC mainnet, but in a much less chance than the official validator set of 29 elected. The unavailable candidates will be slashed as well though in a smaller size. A decent motivation is expected to be maintained so that the candidate validators are willing to ensure the quality and help secure BSC."),(0,i.kt)("p",null,"In an extreme case, if a majority of the active 29 validators get attacked and offline, Candidate Validators can report to Beacon Chain about the stale blocking, resume it and eventually propose a re-election of active validator set."),(0,i.kt)("h2",{id:"what-is-validator"},"What is Validator?"),(0,i.kt)("p",null,"BNB Smart Chain relies on a set of validators who are responsible for committing new blocks in the blockchain. These validators participate in the consensus protocol by signing blocks that contain cryptographic signatures signed by each validator's private key.  The validator set is determined by a staking module built on Beacon Chain for BNB Smart Chain, and propagated every day UTC 00:00 from BC to BSC via Cross-Chain communication."),(0,i.kt)("h2",{id:"economics"},"Economics"),(0,i.kt)("p",null,"Validator's rewards come from transaction fees and commission fees from delegators."),(0,i.kt)("p",null,"Let us also assume that the reward for a block is 100 BNB and that a certain validator has 20% of self-bonded BNB and sets its commission rate to 20%. These tokens do not go directly to the proposer. Instead, they are shared among validators and delegators.  These 100 BNB will be distributed according to each participant's stake:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Commission: 80*20%= 16 BNB\nValidator gets: 100\\*20% + Commission = 36 BNB\nAll delegators get: 100\\*80% - Commission = 64 BNB\n")),(0,i.kt)("p",null,"If validators double sign, or frequently offline, their staked BNB (not including BNB of users that delegated to them) can be slashed. The penalty depends on the severity of the violation."),(0,i.kt)("p",null,"You can learn to see the revenue history from BitQuery's ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.bitquery.io/bsc/miners"},"chart")," or a table of ",(0,i.kt)("a",{parentName:"p",href:"https://bscscan.com/validatorset"},"BscScan")),(0,i.kt)("h2",{id:"risks-for-validators"},"Risks for Validators"),(0,i.kt)("p",null,"If you try to cheat the system, or act contrary to the specification, you will be liable to incur a penalty, known as ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/validator/bc-slashing"},"slashing")),"."),(0,i.kt)("h3",{id:"potential-loss"},"Potential Loss"),(0,i.kt)("h4",{id:"loss-for-double-sign-slash"},"Loss for Double-Sign Slash"),(0,i.kt)("p",null,"Running your validator keys simultaneously on two or more machines will result in Double-Sign slashing."),(0,i.kt)("p",null,"Penalty for Double-Sign Slash:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"10000 staked BNB will be slashed for the validator."),(0,i.kt)("li",{parentName:"ol"},"The Double-Sign Jail time is 2^63-1 seconds, which means the candidate cannot become a validator anymore.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Rewards for submitting double-sign evidence: 1000BNB Anyone can submit a slashing request on BC with the evidence of Double Sign of BSC, which should contain the 2 block headers with the same height and parent block, sealed by the offending validator.")),(0,i.kt)("h4",{id:"loss-for-offline-slash"},"Loss for Offline Slash:"),(0,i.kt)("p",null,"If a validator missed more than 50 blocks every 24h, the blocking reward for validator will not be relayed to BC for distribution but shared with other better validators. If it missed more than 150 blocks every 24h, then this will be propagated back to BC where another Slashing will happen"),(0,i.kt)("p",null,"Penalty for Offline Slash:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"50 staked BNB will be slashed for the validator."),(0,i.kt)("li",{parentName:"ol"},"The Downtime Jail time is 2 days, which means the candidate can send a ",(0,i.kt)("inlineCode",{parentName:"li"},"unjail")," transaction to become a candidate again.")),(0,i.kt)("h4",{id:"loss-for-too-low-self-delegation"},"Loss for Too Low self-delegation"),(0,i.kt)("p",null,"Validator candidates must stake 10000BNB as self-delegation. If the self-delegation amount is lower, the Jail time is 1 day."))}c.isMDXComponent=!0}}]);