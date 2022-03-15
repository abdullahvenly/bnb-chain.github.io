"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5687],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=p(t),c=i,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6767:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=t(87462),i=t(63366),l=(t(67294),t(3905)),o=["components"],r={id:"genesis",title:"Genesis File"},s=void 0,p={unversionedId:"beaconchain/learn/genesis",id:"beaconchain/learn/genesis",isDocsHomePage:!1,title:"Genesis File",description:"This document explains how the genesis file of the Beacon Chain  mainnet is structured. It also explains how you can build a genesis file for your own testnet.",source:"@site/docs/beaconchain/learn/genesis.md",sourceDirName:"beaconchain/learn",slug:"/beaconchain/learn/genesis",permalink:"/bnb-chain.github.io/docs/beaconchain/learn/genesis",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/docs/beaconchain/learn/genesis.md",tags:[],version:"current",frontMatter:{id:"genesis",title:"Genesis File"},sidebar:"bscSideBar",previous:{title:"Transactions",permalink:"/bnb-chain.github.io/docs/beaconchain/learn/transactions"},next:{title:"Signatures",permalink:"/bnb-chain.github.io/docs/beaconchain/learn/signature"}},d=[{value:"What is a Genesis File",id:"what-is-a-genesis-file",children:[{value:"Genesis Time and Chain_id",id:"genesis-time-and-chain_id",children:[],level:3}],level:2},{value:"Consensus Parameters",id:"consensus-parameters",children:[],level:2},{value:"Application State",id:"application-state",children:[{value:"Genesis Accounts",id:"genesis-accounts",children:[],level:3},{value:"Token",id:"token",children:[],level:3},{value:"Staking",id:"staking",children:[],level:3},{value:"Governance",id:"governance",children:[],level:3},{value:"Genesis Transactions",id:"genesis-transactions",children:[],level:3}],level:2}],u={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This document explains how the genesis file of the Beacon Chain  mainnet is structured. It also explains how you can build a genesis file for your own testnet."),(0,l.kt)("p",null,"Note that you can generate a default genesis file for your own testnet by running the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bnbchaind init  --chain-id\n")),(0,l.kt)("p",null,"The genesis file is stored in ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.bnbchaind/config/genesis.json"),"."),(0,l.kt)("h2",{id:"what-is-a-genesis-file"},"What is a Genesis File"),(0,l.kt)("p",null,"A genesis file is a JSON file which defines the initial state of your blockchain. It can be seen as height ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," of your blockchain. The first block, at height ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),", will reference the genesis file as its parent."),(0,l.kt)("p",null,"The state defined in the genesis file contains all the necessary information, like initial token allocation, genesis time, default parameters, and more. Let us break down these information."),(0,l.kt)("h3",{id:"genesis-time-and-chain_id"},"Genesis Time and Chain_id"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"genesis_time")," is defined at the top of the genesis file. It is a ",(0,l.kt)("inlineCode",{parentName:"p"},"UTC")," timestamps which specifies when the blockchain is due to start. At this time, genesis validators are supposed to come online and start participating in the consensus process. The blockchain starts when more than 2/3rd of the genesis validators (weighted by voting power) are online."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"genesis_time": "2019-04-18T05:59:26.228734998Z"\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"chain_id")," is a unique identifier for your chain. It helps differentiate between different chains using the same version of the software."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"chain_id": "Binance-Chain-Tigris",\n')),(0,l.kt)("h2",{id:"consensus-parameters"},"Consensus Parameters"),(0,l.kt)("p",null,"Next, the genesis file defines consensus parameters. Consensus parameters regroup all the parameters that are related to the consensus layer, which is ",(0,l.kt)("inlineCode",{parentName:"p"},"Tendermint")," in the case of ",(0,l.kt)("inlineCode",{parentName:"p"},"Beacon Chain "),". Let us look at these parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"block_size"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_bytes"),": Maximum number of bytes per block is 1048576."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_gas"),": Gas limit per block. As gas is not used to calculate transaction fees at the moment. The limit. is set to ",(0,l.kt)("inlineCode",{parentName:"li"},"-1"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"evidence"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_age"),": An evidence is a proof that a validator signed two different blocks at the same height (and round). This is an explicitly malicious behaviour that is punished at the state-machine level. The ",(0,l.kt)("inlineCode",{parentName:"li"},"max_age")," defines the maximum number of ",(0,l.kt)("strong",{parentName:"li"},"blocks")," after which an evidence is not valid anymore."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"validator"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pub_key_types"),": Currently only ",(0,l.kt)("inlineCode",{parentName:"li"},"ed25519")," is accepted for validators.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'consensus_params: {\n    block_size: {\n        max_bytes: "1048576",\n        max_gas: "-1"\n        },\n    evidence: {\n        max_age: "100000"\n    },\n    validator: {\n        pub_key_types: [\n            "ed25519"\n            ]\n        }\n},\n')),(0,l.kt)("h2",{id:"application-state"},"Application State"),(0,l.kt)("p",null,"The application state defines the initial state of the state-machine."),(0,l.kt)("h3",{id:"genesis-accounts"},"Genesis Accounts"),(0,l.kt)("p",null,"In this section, initial allocation of tokens is defined. It is possible to add accounts manually by directly editing the genesis file, but it is also possible to edit the balance after genesis file is created."),(0,l.kt)("p",null,"This command creates an item in the ",(0,l.kt)("inlineCode",{parentName:"p"},"accounts")," list, under the ",(0,l.kt)("inlineCode",{parentName:"p"},"app_state")," section. In this section, you can see the three different address of all ",(0,l.kt)("strong",{parentName:"p"},"11")," validators."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n  name: "Aconcagua",\n  address: "bnb1y888axmhzz6yjj464syfy68mkhzy9phlv8fzac",\n  consensus_addr: ""\n  },\n  {\n  name: "Aconcagua",\n  address: "bnb1kdx4xkktr35j2mpxncvtsshswj5gq577me7lx4",\n  consensus_addr: "A71E5CD078B8C5C7B1AF88BCE84DD70B0557D93E"\n  },\n')),(0,l.kt)("p",null,"Let us break down the list:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The first address ",(0,l.kt)("inlineCode",{parentName:"li"},"bnb1y888axmhzz6yjj464syfy68mkhzy9phlv8fzac"),". At genesis block, according to ",(0,l.kt)("inlineCode",{parentName:"li"},"gentx")," info, same amount of staking tokens will be allocated to this address. It is also used to receive rewards after chain launched."),(0,l.kt)("li",{parentName:"ul"},"The second address",(0,l.kt)("inlineCode",{parentName:"li"},"bnb1kdx4xkktr35j2mpxncvtsshswj5gq577me7lx4"),"is used for governance"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"consensus_addr"),"is used for signing new blocks")),(0,l.kt)("h3",{id:"token"},"Token"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"tokens")," module handles tokens. It contains the information of Beacon Chain  native token ",(0,l.kt)("inlineCode",{parentName:"p"},"BNB")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'name: "Beacon Chain  Native Token",\nsymbol: "BNB",\ntotal_supply: "20000000000000000",\nowner: "bnb1ultyhpw2p2ktvr68swz56570lgj2rdsadq3ym2",\nmintable: false\n')),(0,l.kt)("h3",{id:"staking"},"Staking"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"staking")," module handles the bulk of the Proof-of-Stake logic of the state-machine. This section should look like the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'stake: {\npool: {\nloose_tokens: "20000000000000000",\nbonded_tokens: "0"\n},\nparams: {\nunbonding_time: "604800000000000",\nmax_validators: 21,\nbond_denom: "BNB"\n},\nvalidators: null,\nbonds: null\n},\n')),(0,l.kt)("p",null,"Let us break down the parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"pool"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"not_bonded_tokens"),": Defines the amount of tokens not bonded (i.e. delegated) in genesis. Generally, it equals the total supply of the staking token, it's shifted by 8 digits for representing decimals."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bonded_tokens"),": Amount of bonded tokens in genesis. Generally ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"params"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unbonding_time"),": Time in ",(0,l.kt)("strong",{parentName:"li"},"nanosecond")," it takes for tokens to complete unbonding."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_validators"),": Maximum number of active validators."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bond_denom"),": Denomination of the staking token."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"validators"),": List of last known validators. Generally ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," in genesis (except if genesis was generated using a previous state).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"bonds"),": List of last known delegation. Generally ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," in genesis (except if genesis was generated using a previous state)."))),(0,l.kt)("h3",{id:"governance"},"Governance"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"gov")," module handles all governance-related transactions. The initial state of the ",(0,l.kt)("inlineCode",{parentName:"p"},"gov")," section looks like the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'gov: {\n  starting_proposalID: "1",\n  deposit_params: {\n    min_deposit: [\n      {\n      denom: "BNB",\n      amount: "100000000000"\n      }\n      ],\n    max_deposit_period: "172800000000000"\n    },\n  tally_params: {\n  quorum: "50000000",\n  threshold: "50000000",\n  veto: "33400000"\n  }\n},\n')),(0,l.kt)("p",null,"Let us break down the parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"starting_proposal_id"),": This parameter defines the ID of the first proposal. Each proposal is identified by a unique ID."),(0,l.kt)("li",{parentName:"ul"},"deposit_params",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"min_deposit"),": The minimum deposit required for the proposal to enter ",(0,l.kt)("inlineCode",{parentName:"li"},"Voting Period"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_deposit_period"),": The maximum period (in ",(0,l.kt)("strong",{parentName:"li"},"nanoseconds"),") after which it is not possible to deposit on the proposal anymore."))),(0,l.kt)("li",{parentName:"ul"},"tally_params",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"quorum"),": Minimum percentage of bonded staking tokens that needs to vote for the result to be valid."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"threshold"),": Minimum percentage of votes that need to be ",(0,l.kt)("inlineCode",{parentName:"li"},"YES")," for the result to be valid."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"veto"),": Maximum percentage ",(0,l.kt)("inlineCode",{parentName:"li"},"NO_WITH_VETO")," votes for the result to be valid.")))),(0,l.kt)("h3",{id:"genesis-transactions"},"Genesis Transactions"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"gentx")," is a transaction that bonds staking token present in the genesis file under ",(0,l.kt)("inlineCode",{parentName:"p"},"accounts")," to a validator, essentially creating a validator at genesis. The chain will start as soon as more than 2/3rds of the validators (weighted by voting power) that are the recipient of a valid ",(0,l.kt)("inlineCode",{parentName:"p"},"gentx")," come online after ",(0,l.kt)("inlineCode",{parentName:"p"},"genesis_time"),"."),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"gentx")," can be added manually to the genesis file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\ntype: "auth/StdTx",\nvalue: {\nmsg: [\n{\ntype: "cosmos-sdk/MsgCreateValidatorProposal",\nvalue: {\nMsgCreateValidator: {\nDescription: {\nmoniker: "Aconcagua",\nidentity: "",\nwebsite: "",\ndetails: ""\n},\nCommission: {\nrate: "0",\nmax_rate: "0",\nmax_change_rate: "0"\n},\ndelegator_address: "bnb1y888axmhzz6yjj464syfy68mkhzy9phlv8fzac",\nvalidator_address: "bva1kdx4xkktr35j2mpxncvtsshswj5gq577m9l0c3",\npubkey: {\ntype: "tendermint/PubKeyEd25519",\nvalue: "Xj/NowvRnUXEtzaI2jXn2h/OfGhZssHyDtUgLSQUTj4="\n},\ndelegation: {\ndenom: "BNB",\namount: "1000000000000"\n}\n},\nproposal_id: "0"\n}\n}\n],\nsignatures: [\n{\npub_key: {\ntype: "tendermint/PubKeySecp256k1",\nvalue: "AoeLfC96urAqZtAxg7cCSXh/+tRxGMthLbvXFu/w9nO0"\n},\nsignature: "b0wYwS7fJcpg0TerEoH22T1CqcZMc3NHm0BusK/+LPMPtqHQuOkbIlPUM12r1iXJjKZhPM/ItFveKIo1oFtfUg==",\naccount_number: "0",\nsequence: "0"\n},\n{\npub_key: {\ntype: "tendermint/PubKeySecp256k1",\nvalue: "AreZUwAj6OlZI+xHZm66K4Nj5G/eNei768x77fdFz1fc"\n},\nsignature: "GefEmRyOFk5jGpIZnaGNAOubzPn+wedg62mf8m8yV5cWK7+SByBCcCTHQ+7kB+mkMjOR1AIuXC7Xfou5Q/QhgQ==",\naccount_number: "0",\nsequence: "0"\n}\n],\nmemo: "",\nsource: "0",\ndata: null\n}\n},\n')),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"gentx")," is just a signed message that validator signed to agree to be validators. Let us break down the parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Signature related info",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pub_key"),": pubkey is used for verifying signature"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"signature"),": the signature from validator"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"account_number"),": Unique identifier for the account. It is generated the first time a transaction including this account is included in a block. In gentx, they are all 0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sequence"),": This number is used to count the number of transactions sent by this account. It is incremented each time a transaction is included in a block, and used to prevent replay attacks. Initial value is 0."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"memo"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"source")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"data")," are all customized details regarding this transaction"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Delegation info"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"moniker"),": the name of validator"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delegator_address"),": this is the address that is listed in ",(0,l.kt)("inlineCode",{parentName:"li"},"app_state")," section"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"validator_address"),": this is the validator pubkey in ",(0,l.kt)("inlineCode",{parentName:"li"},"bech32")," encoding with prefix of ",(0,l.kt)("inlineCode",{parentName:"li"},"bva")),(0,l.kt)("li",{parentName:"ul"},"delegation: this is the delegation amount. It's shifted by 8 digits for representing decimals.")))))}m.isMDXComponent=!0}}]);