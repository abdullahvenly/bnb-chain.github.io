"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[4365],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},35819:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],l={},s="Governance",p={unversionedId:"beaconchain/governance",id:"beaconchain/governance",isDocsHomePage:!1,title:"Governance",description:"Primer on Governance",source:"@site/docs/beaconchain/governance.md",sourceDirName:"beaconchain",slug:"/beaconchain/governance",permalink:"/bnb-chain.github.io/docs/beaconchain/governance",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/docs/beaconchain/governance.md",tags:[],version:"current",frontMatter:{}},d=[{value:"Primer on Governance",id:"primer-on-governance",children:[],level:2},{value:"Proposal Workflow",id:"proposal-workflow",children:[{value:"Global Parameters",id:"global-parameters",children:[],level:3},{value:"Proposal Parameters",id:"proposal-parameters",children:[],level:3},{value:"Participate in Governance",id:"participate-in-governance",children:[{value:"Tools",id:"tools",children:[],level:4},{value:"Submit a List Proposal",id:"submit-a-list-proposal",children:[],level:4},{value:"Submit a Delist Proposal",id:"submit-a-delist-proposal",children:[],level:4},{value:"Add deposit for a Proposal (Optional)",id:"add-deposit-for-a-proposal-optional",children:[],level:4},{value:"Query Information of a Proposal",id:"query-information-of-a-proposal",children:[],level:4},{value:"Query votes of a Proposal",id:"query-votes-of-a-proposal",children:[],level:4}],level:3}],level:2},{value:"Key Notions",id:"key-notions",children:[{value:"Vote options",id:"vote-options",children:[],level:4},{value:"Quorum",id:"quorum",children:[],level:4},{value:"Veto",id:"veto",children:[],level:4},{value:"Threshold",id:"threshold",children:[],level:4},{value:"Tally Result Example",id:"tally-result-example",children:[],level:4}],level:2}],u={toc:d};function c(e){var t=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"governance"},"Governance"),(0,i.kt)("h2",{id:"primer-on-governance"},"Primer on Governance"),(0,i.kt)("p",null,"Beacon Chain  has its own built-in governance module that lets BNB holders submit proposals for adding trade pairs. In order for the proposal to be open for voting, it needs to come with a ",(0,i.kt)("inlineCode",{parentName:"p"},"deposit")," that is greater than a parameter called ",(0,i.kt)("inlineCode",{parentName:"p"},"Deposit"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"deposit")," need not be provided in its entirety by the submitter. If the initial proposer's ",(0,i.kt)("inlineCode",{parentName:"p"},"deposit")," is not sufficient, the proposal enters the ",(0,i.kt)("inlineCode",{parentName:"p"},"deposit_period")," status. Then, any BNB holder can increase the deposit by sending a ",(0,i.kt)("inlineCode",{parentName:"p"},"depositTx"),".\nA purely-code-controlled escrow account will be used to hold deposits during voting period. It is a kind of account which is derived from a hard-coded string in Beacon Chain  protocol. This kind of account doesn't have its own private key and it's only controlled by code of the protocol. The code for calculating escrow account is the same that is used in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/82a2c5d6d86ffd761f0162b93f0aaa57b7f66fe7/x/supply/internal/types/account.go#L40"},"cosmos-sdk"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'DepositedCoinsAccAddr = sdk.AccAddress(crypto.AddressHash([]byte("BinanceChainDepositedCoins")))\n')),(0,i.kt)("p",null,"The account for mainnet is: ",(0,i.kt)("strong",{parentName:"p"},"bnb1vu5max8wqn997ayhrrys0drpll2rlz4dh39s3h")," and the account for testnet is: ",(0,i.kt)("strong",{parentName:"p"},"tbnb1vu5max8wqn997ayhrrys0drpll2rlz4deyv53x"),". Once the swap is claimed or refunded, the fund will be transferred from the purely-code-controlled escrow account to client accounts."),(0,i.kt)("h2",{id:"proposal-workflow"},"Proposal Workflow"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"workflow",src:n(67702).Z})),(0,i.kt)("h3",{id:"global-parameters"},"Global Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min-deposit"),": The threshold for submitting a proposal on mainnet is ",(0,i.kt)("strong",{parentName:"li"},"1000BNB"),", and the threshold for submitting a proposal on testnet is ",(0,i.kt)("strong",{parentName:"li"},"2000BNB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deposit_period"),": This is a global parameter and the value for mainnet is two days and testnet is two week. It means the time to deposit enough BNB tokens is two days in mainnet and two weeks in testnet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fee"),": Checkout the fee of governance-related transactions ",(0,i.kt)("a",{parentName:"li",href:"/bnb-chain.github.io/docs/beaconchain/trading-spec"},"here"))),(0,i.kt)("h3",{id:"proposal-parameters"},"Proposal Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deposit")," : your input must be larger than ",(0,i.kt)("inlineCode",{parentName:"li"},"min-deposit"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"voting-period"),": This is the time for validators to vote, your input in seconds, if you omit this field, the default voting period is one week."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expire-time"),": This is the time for you to send list transaction if your proposal passed. This time cannot be earlier than current time.")),(0,i.kt)("h3",{id:"participate-in-governance"},"Participate in Governance"),(0,i.kt)("h4",{id:"tools"},"Tools"),(0,i.kt)("p",null,"Please use this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/node-binary/tree/master/tools"},"tool")," for generating"),(0,i.kt)("p",null,"You can also use ",(0,i.kt)("a",{parentName:"p",href:"https://community.binance.org/topic/2487/how-to-manage-your-bep2-token-on-binance-chain-in-web-wallet"},"Web Wallet")," for token management operations."),(0,i.kt)("h4",{id:"submit-a-list-proposal"},"Submit a List Proposal"),(0,i.kt)("p",null,"To add a new trading pairs, you can run the following command:",(0,i.kt)("br",null),"\nPlease note:",(0,i.kt)("br",null)),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--init-price")," is boosted by ",(0,i.kt)("strong",{parentName:"li"},"1e8")," for decimal part, such as 100000000, is 1 BNB"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--from"),": put your key name for the address / key, you can only list with the owners address of your token."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--expire-time"),": expire time is the deadline after which you will no longer be able to list your token though your proposal is passed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--voting-period"),": The voting period is for validators to vote. The unit is in seconds and the default voting period is one week. The max voting period is two weeks. The votes from validators will be tallied after the voting period ends."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--title"),": title of proposal"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--quote-asset-symbol"),": the quote asset symbol. When you first list a BEP2 token on Binance DEX, it has to be put in BNB market first. Thus, you should set ",(0,i.kt)("inlineCode",{parentName:"li"},"quote-asset-symbol")," to ",(0,i.kt)("strong",{parentName:"li"},"BNB")," in your first proposal, then your BEP2 asset can be list against ",(0,i.kt)("a",{parentName:"li",href:"https://explorer.binance.org/asset/BUSD-BD1"},"BUSD-BD1")," and other stablecoins."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--base-asset-symbol"),": the asset symbol you want to list")),(0,i.kt)("p",null,"Please note that the deposit and init-price are boosted by ",(0,i.kt)("strong",{parentName:"p"},"1e8")," for decimal part."),(0,i.kt)("p",null,"Example on ",(0,i.kt)("strong",{parentName:"p"},"mainnet"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'./bnbcli gov submit-list-proposal --from test --deposit 100000000000:BNB\n--base-asset-symbol AAA-254 --quote-asset-symbol BNB --init-price 100000000 --title "list AAA-254/BNB"\n--description "list AAA-254/BNB" --expire-time 1570665600 --chain-id Binance-Chain-Tigris --node https://dataseed5.defibit.io:443 --voting-period 604800 --json\n')),(0,i.kt)("p",null,"Example on ",(0,i.kt)("strong",{parentName:"p"},"testnet"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'./tbnbcli gov submit-list-proposal --from test --deposit 200000000000:BNB\n--base-asset-symbol AAA-254 --quote-asset-symbol BNB --init-price 100000000 --title "list AAA-254/BNB"\n--description "list AAA-254/BNB" --expire-time 1570665600 --chain-id=Binance-Chain-Ganges --node=data-seed-pre-2-s1.binance.org:80 --json --voting-period 604800\n')),(0,i.kt)("p",null,"!!! Tip\nAs discussed in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/BEPs/blob/master/BEP70.md"},"BEP-70"),", BUSD is one of the most influential stable coins worldwide and the most dominant stable coin on Beacon Chain . BEP2 token issuers can list their assets against ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.binance.org/asset/BUSD-BD1"},"BUSD-BD1")," without the requirement of creating BNB pair first. Listing and trading BUSD pairs on Beacon Chain  will facilitate token owners and exchange traders, making the markets more liquid and healthier.  BEP70 is already implemented and has been activated after Testnet Nightingale Upgrade. Beacon Chain  Mainnet will be upgraded to support BEP-70 soon."),(0,i.kt)("h4",{id:"submit-a-delist-proposal"},"Submit a Delist Proposal"),(0,i.kt)("p",null,"In testnet, only validators can make a delist proposal. To add a new delist pairs, a validator can run the following command:",(0,i.kt)("br",null)),(0,i.kt)("p",null,"Please note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--quote-asset-symbol"),": the quote asset symbol"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--base-asset-symbol"),": the asset symbol you want to delist"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--from"),": put your key name for the address key, you can only list with the owners address of your token."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--voting-period"),": The voting period is for validators to vote. The unit is in seconds and the default voting period is one week. The max voting period is two weeks. The votes from validators will be tallied after the voting period ends."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--justification"),": reason for proposal"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--depodit"),": this field will indicate how much tokens will be used as deposit for this proposal. Governance module will transfer deposit tokens to a purely-code-controlled escrow account and before the lock time expires. The account for mainnet is:",(0,i.kt)("em",{parentName:"li"},"bnb1vu5max8wqn997ayhrrys0drpll2rlz4dh39s3h"),"  and the account for testnet is: ",(0,i.kt)("em",{parentName:"li"},"tbnb1vu5max8wqn997ayhrrys0drpll2rlz4deyv53x"))),(0,i.kt)("p",null,"Example on ",(0,i.kt)("strong",{parentName:"p"},"mainnet"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'bnbcli gov submit-delist-proposal --title "delist EDD-0AC" --voting-period 7200 --deposit "200000000000:BNB" --justification " justification " --base-asset-symbol EDD-0AC --quote-asset-symbol BNB --from <your-key-name> --chain-id Binance-Chain-Tigris --node https://dataseed5.defibit.io:443 --trust-node\n')),(0,i.kt)("p",null,"Example on ",(0,i.kt)("strong",{parentName:"p"},"testnet"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'tbnbcli gov submit-delist-proposal --title "delist EDD-0AC" --voting-period 7200 --deposit "200000000000:BNB" --justification " justification " --base-asset-symbol EDD-0AC --quote-asset-symbol BNB --from <your-key-name> --chain-id Binance-Chain-Ganges --trust-node --node https://seed-pre-s3.binance.org:443\n')),(0,i.kt)("h4",{id:"add-deposit-for-a-proposal-optional"},"Add deposit for a Proposal (Optional)"),(0,i.kt)("p",null,"If the initial deposit for your proposal in ",(0,i.kt)("inlineCode",{parentName:"p"},"submit-list-proposal")," is not enough, you can increase the deposit with ",(0,i.kt)("inlineCode",{parentName:"p"},"deposit")," operation. In current Beacon Chain  Mainnet, the max deposit period is ",(0,i.kt)("strong",{parentName:"p"},"two days"),". After submitting a proposal, you have two days to increase your deposit, otherwise your proposal will not go into the voting period and gets rejected directly."),(0,i.kt)("p",null,"Please note the amount is boosted by ",(0,i.kt)("strong",{parentName:"p"},"1e8")," for decimal part."),(0,i.kt)("p",null,"Example on ",(0,i.kt)("strong",{parentName:"p"},"mainnet"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"bnbcli gov deposit --from name --proposal-id <proposl-ID> --deposit <amount>:BNB --chain-id Binance-Chain-Tigris --node https://dataseed5.defibit.io:443\n")),(0,i.kt)("p",null,"Example on ",(0,i.kt)("strong",{parentName:"p"},"testnet"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"tbnbcli gov deposit --from name --proposal-id <proposl-ID> --deposit <amount>:BNB --chain-id=Binance-Chain-Ganges --node=data-seed-pre-2-s1.binance.org:80\n")),(0,i.kt)("h4",{id:"query-information-of-a-proposal"},"Query Information of a Proposal"),(0,i.kt)("p",null,"To see detailed information of specific proposal, you can run the following command:"),(0,i.kt)("p",null,"Example on ",(0,i.kt)("strong",{parentName:"p"},"mainnet"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./bnbcli gov query-proposal --proposal-id <proposal-ID> --chain-id Binance-Chain-Tigris --node https://dataseed5.defibit.io:443\n")),(0,i.kt)("p",null,"Example on ",(0,i.kt)("strong",{parentName:"p"},"testnet"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./tbnbcli gov query-proposal --proposal-id <proposal-ID> --chain-id=Binance-Chain-Ganges --node=data-seed-pre-2-s1.binance.org:80\n")),(0,i.kt)("p",null,"Example output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "gov/TextProposal",\n  "value": {\n    "proposal_id": "100",\n    "title": "list CZZ-696/BNB",\n    "description": "{\\"base_asset_symbol\\":\\"CZZ-696\\",\\"quote_asset_symbol\\":\\"BNB\\",\\"init_price\\":100000000,\\"description\\":\\"list CZZ-696/BNB\\",\\"expire_time\\":\\"2019-03-21T09:00:00+09:00\\"}",\n    "proposal_type": "ListTradingPair",\n    "proposal_status": "Passed",\n    "tally_result": {\n      "yes": "1100000000000",\n      "abstain": "0",\n      "no": "0",\n      "no_with_veto": "0"\n    },\n    "submit_time": "2019-03-07T20:49:03.504103408Z",\n    "total_deposit": [\n      {\n        "denom": "BNB",\n        "amount": "200000000000"\n      }\n    ],\n    "voting_start_time": "2019-03-07T21:01:36.159585594Z"\n  }\n}\n')),(0,i.kt)("p",null,"You can get the information about the proposal's status and its tally result this way."),(0,i.kt)("h4",{id:"query-votes-of-a-proposal"},"Query votes of a Proposal"),(0,i.kt)("p",null,"You can track the votes for your proposal with the following command:"),(0,i.kt)("p",null,"Example on ",(0,i.kt)("strong",{parentName:"p"},"mainnet"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./bnbcli gov query-votes --proposal-id 272 --chain-id Binance-Chain-Tigris --node https://dataseed5.defibit.io:443\n")),(0,i.kt)("p",null,"Example on ",(0,i.kt)("strong",{parentName:"p"},"testnet"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./tbnbcli gov query-votes --proposal-id 272 --chain-id=Binance-Chain-Ganges --node=data-seed-pre-2-s1.binance.org:80\n")),(0,i.kt)("p",null,"Example output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "voter": "tbnb1q82g2h9q0kfe7sysnj5w7nlak92csfjztymp39",\n    "proposal_id": "272",\n    "option": "Yes"\n  },\n  {\n    "voter": "tbnb1r6l0c0fxu458hlq6m7amkcltj8nufyl9mr2wm5",\n    "proposal_id": "272",\n    "option": "Yes"\n  },\n  {\n    "voter": "tbnb193t8pkhm2sxw5uy5ypesygda8rzsk25ge3e9y7",\n    "proposal_id": "272",\n    "option": "Yes"\n  },\n  {\n    "voter": "tbnb183nch8pn3f698vurrqypq3s254slcane2t66aj",\n    "proposal_id": "272",\n    "option": "Yes"\n  },\n  {\n    "voter": "tbnb12hlquylu78cjylk5zshxpdj6hf3t0tahwjt3ex",\n    "proposal_id": "272",\n    "option": "Yes"\n  },\n  {\n    "voter": "tbnb1vehecekrsks5sshcwvxyeyrd469j9wvcqm37yu",\n    "proposal_id": "272",\n    "option": "Yes"\n  },\n  {\n    "voter": "tbnb108drn8exhv72tp40e6lq9z949nnjj54yzqrr2f",\n    "proposal_id": "272",\n    "option": "Yes"\n  },\n  {\n    "voter": "tbnb135mqtf9gef879nmjlpwz6u2fzqcw4qlzrqwgvw",\n    "proposal_id": "272",\n    "option": "Yes"\n  },\n  {\n    "voter": "tbnb1hexqyu3m8uuudqdnnpnsnlwe6xg0n3078lx68l",\n    "proposal_id": "272",\n    "option": "Yes"\n  },\n  {\n    "voter": "tbnb1earfwcjre04hp7phqnkw8ts04tkumdn0cyzun0",\n    "proposal_id": "272",\n    "option": "Yes"\n  },\n  {\n    "voter": "tbnb167yp9jkv6uaqnyq62gfkx82xmfny0cl9xe04zj",\n    "proposal_id": "272",\n    "option": "Yes"\n  }\n]\n')),(0,i.kt)("h2",{id:"key-notions"},"Key Notions"),(0,i.kt)("h4",{id:"vote-options"},"Vote options"),(0,i.kt)("p",null,"There are four vote options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Yes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"No")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NoWithVeto")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Abstain"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"No")," represents the validator is against this proposal and ",(0,i.kt)("inlineCode",{parentName:"p"},"NoWithVeto")," suggests the validator is strongly against\nthis proposal.",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Abstain")," option allows voters to signal that they do not intend to vote in favor or against\nthe proposal but accept the result of the vote."),(0,i.kt)("h4",{id:"quorum"},"Quorum"),(0,i.kt)("p",null,"Quorum is defined as the minimum percentage of voting power that needs to be casted on a proposal for the result to\nbe valid, which is 0.5(50%) now."),(0,i.kt)("p",null,"If voting power does not reach quorum at the end of the voting period, the proposal will be rejected and all deposits\nwill be returned to depositors' addresses."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": There is a special case when all votes are ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstain")," and voting power is superior to 50%, the proposal will be rejected and all deposits will be refunded."),(0,i.kt)("h4",{id:"veto"},"Veto"),(0,i.kt)("p",null,"Veto is defined as the minimum proportion of ",(0,i.kt)("inlineCode",{parentName:"p"},"NoWithVeto")," votes for the proposal to be rejected, which is 0.334(1/3) now. If more than 1/3 voters veto, the proposal will be rejected and all deposits will be distributed to validator."),(0,i.kt)("h4",{id:"threshold"},"Threshold"),(0,i.kt)("p",null,"Threshold is defined as the minimum proportion of ",(0,i.kt)("inlineCode",{parentName:"p"},"Yes")," votes (excluding ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstain")," votes) for the proposal to be accepted, which is 0.5(50%) now."),(0,i.kt)("p",null,"If the proportion of ",(0,i.kt)("inlineCode",{parentName:"p"},"NoWithVeto")," votes is inferior to 1/3 and the proportion of ",(0,i.kt)("inlineCode",{parentName:"p"},"Yes")," votes (excluding ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstain")," votes) is superior to 50%, the proposal will be accepted and all deposits will be returned. Otherwise, the proposal will be rejected and all deposits will be distributed to validator."),(0,i.kt)("h4",{id:"tally-result-example"},"Tally Result Example"),(0,i.kt)("p",null,"You can query a proposal via ",(0,i.kt)("inlineCode",{parentName:"p"},"bnbcli"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ ./bnbcli gov query-proposal --chain-id Binance-Chain-Ganges --node=tcp://data-seed-pre-1-s3.binance.org:80 --proposal-id 370\n{\n  "type": "gov/TextProposal",\n  "value": {\n    "proposal_id": "370",\n    "title": "list JCC-CB1/BNB",\n    "description": "{\\"base_asset_symbol\\":\\"JCC-CB1\\",\\"quote_asset_symbol\\":\\"BNB\\",\\"init_price\\":100000000,\\"description\\":\\"list JCC-CB1/BNB\\",\\"expire_time\\":\\"2019-04-24T14:46:35+08:00\\"}",\n    "proposal_type": "ListTradingPair",\n    "voting_period": "604800000000000",\n    "proposal_status": "Passed",\n    "tally_result": {\n      "yes": "1100000000000",\n      "abstain": "0",\n      "no": "0",\n      "no_with_veto": "0",\n      "total": "1100000000000"\n    },\n    "submit_time": "2019-04-10T06:49:11.568747217Z",\n    "total_deposit": [\n      {\n        "denom": "BNB",\n        "amount": "200000000000"\n      }\n    ],\n    "voting_start_time": "2019-04-10T06:52:00.064744275Z"\n  }\n}\n')),(0,i.kt)("p",null,"You can get ",(0,i.kt)("inlineCode",{parentName:"p"},"tally result")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"proposal_status"),".",(0,i.kt)("br",null)),(0,i.kt)("p",null,"For options in ",(0,i.kt)("inlineCode",{parentName:"p"},"tally result"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yes")," denotes voting power votes ",(0,i.kt)("inlineCode",{parentName:"li"},"Yes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"abstain")," denotes voting power votes ",(0,i.kt)("inlineCode",{parentName:"li"},"Abstain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"no")," denotes voting power votes ",(0,i.kt)("inlineCode",{parentName:"li"},"No")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"no_with_veto")," denotes voting power votes ",(0,i.kt)("inlineCode",{parentName:"li"},"NoWithVeto")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"total")," denotes total voting power when voting period ends")),(0,i.kt)("p",null,"We can calculate proportion of each vote option easily.",(0,i.kt)("br",null),"\nIn this case, total voting power is 1100000000000 and voting power of ",(0,i.kt)("inlineCode",{parentName:"p"},"Yes")," is 1100000000000,\nso the proportion of ",(0,i.kt)("inlineCode",{parentName:"p"},"Yes")," is 100% and the proposal should be passed and and your deposit will be returned."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Trying to query proposal that didn't enter the voting period will result in ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ ./bnbcli gov query-proposal --chain-id Binance-Chain-Tigris --node https://dataseed5.defibit.io:443 --proposal-id 25\n{\n  "codespace": 5,\n  "code": 1,\n  "abci_code": 327681,\n  "message": "Unknown proposal with id 25"\n}\n')))}c.isMDXComponent=!0},67702:function(e,t,n){t.Z=n.p+"assets/images/workflow-c3859ef240b73fa2112ebcc6361d5577.jpg"}}]);