"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5174],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73782:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_label:"Using HardHat",hide_table_of_contents:!1,sidebar_position:2},c="Using Hardhat",s={unversionedId:"hardhat-new",id:"hardhat-new",isDocsHomePage:!1,title:"Using Hardhat",description:"What is Hardhat",source:"@site/docs/hardhat-new.md",sourceDirName:".",slug:"/hardhat-new",permalink:"/bnb-chain.github.io/docs/hardhat-new",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/docs/hardhat-new.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Using HardHat",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Using Truffle",permalink:"/bnb-chain.github.io/docs/truffle-new"},next:{title:"Verify Your Contract on BscScan",permalink:"/bnb-chain.github.io/docs/verify"}},u=[{value:"What is Hardhat",id:"what-is-hardhat",children:[],level:2},{value:"Setting up the development environment",id:"setting-up-the-development-environment",children:[],level:2},{value:"Installing",id:"installing",children:[],level:2},{value:"Create A Project",id:"create-a-project",children:[{value:"Create Contract",id:"create-contract",children:[],level:3},{value:"Config Hardhat for BSC",id:"config-hardhat-for-bsc",children:[],level:3},{value:"Compile Contract",id:"compile-contract",children:[],level:3}],level:2},{value:"Deploying on BSC Network",id:"deploying-on-bsc-network",children:[],level:2},{value:"Install the plugin",id:"install-the-plugin",children:[],level:2},{value:"Configure the plugin in buidler.config.js",id:"configure-the-plugin-in-buidlerconfigjs",children:[],level:2},{value:"Verify",id:"verify",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-hardhat"},"Using Hardhat"),(0,o.kt)("h2",{id:"what-is-hardhat"},"What is Hardhat"),(0,o.kt)("p",null,"Hardhat is a development environment to compile, deploy, test, and debug your smart contract."),(0,o.kt)("h2",{id:"setting-up-the-development-environment"},"Setting up the development environment"),(0,o.kt)("p",null,"There are a few technical requirements before we start. Please install the following:\nRequirements:"),(0,o.kt)("h2",{id:"installing"},"Installing"),(0,o.kt)("p",null,"There are a few technical requirements before we start. Please install the following:\nRequirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows, Linux or Mac OS X"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js v8.9.4 LTS or later")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git"))),(0,o.kt)("p",null,"First, you need to create an empty project ",(0,o.kt)("inlineCode",{parentName:"p"},"npm init --yes")),(0,o.kt)("p",null,"Once your project is ready, you should run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install --save-dev hardhat\n")),(0,o.kt)("p",null,"It's recommeded to install some dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers\n")),(0,o.kt)("p",null,"To use your local installation of Hardhat, you need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"npx")," to run it (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"npx hardhat"),")."),(0,o.kt)("h2",{id:"create-a-project"},"Create A Project"),(0,o.kt)("p",null,"To create your Hardhat project run npx hardhat in your project folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir MegaCoin\ncd MegaCoin\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Intialize your project:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ npx hardhat\n888    888                      888 888               888\n888    888                      888 888               888\n888    888                      888 888               888\n8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888\n888    888     "88b 888P"  d88" 888 888 "88b     "88b 888\n888    888 .d888888 888    888  888 888  888 .d888888 888\n888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.\n888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888\n\nWelcome to Hardhat v2.0.8\n\n? What do you want to do? \u2026\n\u276f Create a sample project\n  Create an empty hardhat.config.js\n  Quit\n')),(0,o.kt)("p",null,"Once this project is initialized, you'll now have a project structure with the following items:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"contracts/: Directory for Solidity contracts"),(0,o.kt)("li",{parentName:"ul"},"scripts/: Directory for scriptable deployment files"),(0,o.kt)("li",{parentName:"ul"},"test/: Directory for test files for testing your application and contracts"),(0,o.kt)("li",{parentName:"ul"},"hardhat-config.js: Hardhat configuration file")),(0,o.kt)("h3",{id:"create-contract"},"Create Contract"),(0,o.kt)("p",null,"You can write your own smart contract or download the ",(0,o.kt)("a",{parentName:"p",href:"../BEP20Token.template"},"BEP20 token smart contract template"),"."),(0,o.kt)("h3",{id:"config-hardhat-for-bsc"},"Config Hardhat for BSC"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to hardhat.config.js"),(0,o.kt)("li",{parentName:"ul"},"Update the  config with bsc-network-crendentials.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'require("@nomiclabs/hardhat-waffle");\nrequire(\'@nomiclabs/hardhat-ethers\');\nconst { mnemonic } = require(\'./secrets.json\');\n\n// This is a sample Hardhat task. To learn how to create your own go to\n// https://hardhat.org/guides/create-task.html\ntask("accounts", "Prints the list of accounts", async () => {\n  const accounts = await ethers.getSigners();\n\n  for (const account of accounts) {\n    console.log(account.address);\n  }\n});\n\n// You need to export an object to set up your config\n// Go to https://hardhat.org/config/ to learn more\n\n/**\n * @type import(\'hardhat/config\').HardhatUserConfig\n */\nmodule.exports = {\n  defaultNetwork: "mainnet",\n  networks: {\n    localhost: {\n      url: "http://127.0.0.1:8545"\n    },\n    hardhat: {\n    },\n    testnet: {\n      url: "https://data-seed-prebsc-1-s1.binance.org:8545",\n      chainId: 97,\n      gasPrice: 20000000000,\n      accounts: {mnemonic: mnemonic}\n    },\n    mainnet: {\n      url: "https://bsc-dataseed.binance.org/",\n      chainId: 56,\n      gasPrice: 20000000000,\n      accounts: {mnemonic: mnemonic}\n    }\n  },\n  solidity: {\n  version: "0.5.16",\n  settings: {\n    optimizer: {\n      enabled: true\n    }\n   }\n  },\n  paths: {\n    sources: "./contracts",\n    tests: "./test",\n    cache: "./cache",\n    artifacts: "./artifacts"\n  },\n  mocha: {\n    timeout: 20000\n  }\n};\n\n')),(0,o.kt)("p",null,"!!! Note\nIt requires mnemonic to be passed in for Provider, this is the seed phrase for the account you'd like to deploy from. Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},".secret")," file in root directory and enter your 12 word mnemonic seed phrase to get started. To get the seedwords from metamask wallet you can go to Metamask Settings, then from the menu choose Security and Privacy where you will see a button that says reveal seed words."),(0,o.kt)("h3",{id:"compile-contract"},"Compile Contract"),(0,o.kt)("p",null,"To compile a Hardhat project, change to the root of the directory where the project is located and then type the following into a terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx hardhat compile\n")),(0,o.kt)("h2",{id:"deploying-on-bsc-network"},"Deploying on BSC Network"),(0,o.kt)("p",null,"Run this command in root of the project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"$  npx hardhat run --network testnet scripts/deploy.js\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Remember your address, transaction_hash and other details provided would differ, Above is just to provide an idea of structure.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations!")," You have successfully deployed BEP20 Smart Contract. Now you can interact with the Smart Contract."),(0,o.kt)("p",null,"You can check the deployment status here: ",(0,o.kt)("a",{parentName:"p",href:"https://bscscan.com/"},"https://bscscan.com/")," or ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.bscscan.com/"},"https://testnet.bscscan.com/")),(0,o.kt)("h1",{id:"verify-with-hardhat"},"Verify with Hardhat"),(0,o.kt)("p",null,"Hardhat has an Etherscan plugin: ",(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html"},"Hardhat Etherscan plugin")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Hardhat was previously Buidler.")),(0,o.kt)("h2",{id:"install-the-plugin"},"Install the plugin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install --save-dev @nomiclabs/hardhat-etherscan\n")),(0,o.kt)("h2",{id:"configure-the-plugin-in-buidlerconfigjs"},"Configure the plugin in buidler.config.js"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Add require("@nomiclabs/hardhat-etherscan");'),(0,o.kt)("li",{parentName:"ul"},"Add Bscscan API key")),(0,o.kt)("p",null,"!!! warning\nkeep secret and don\u2019t commit to version control)"),(0,o.kt)("p",null,"Go to register and get API key: ",(0,o.kt)("a",{parentName:"p",href:"https://bscscan.com/myapikey"},"https://bscscan.com/myapikey")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set compiler version to match what was deployed")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// hardhat.config.js\nconst { mnemonic, bscscanApiKey } = require('./secrets.json');\n\nrequire('@nomiclabs/hardhat-ethers');\nrequire(\"@nomiclabs/hardhat-etherscan\");\n/**\n * @type import('hardhat/config').HardhatUserConfig\n */\nmodule.exports = {\n\n  networks: {\n    testnet: {\n      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,\n      accounts: {mnemonic: mnemonic}\n    },\n    mainnet: {\n      url: `https://bsc-dataseed.binance.org/`,\n      accounts: {mnemonic: mnemonic}\n    }\n  },\n\n  etherscan: {\n    // Your API key for Etherscan\n    // Obtain one at https://bscscan.com/\n    apiKey: bscscanApiKey\n  },\n  solidity: \"0.5.12\"\n};\n")),(0,o.kt)("h2",{id:"verify"},"Verify"),(0,o.kt)("p",null,"!!! warning\nRemove any unnecessary contracts and clear the artifacts otherwise these will also be part of the verified contract."),(0,o.kt)("p",null,"Run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'npx buidler verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ npx hardhat  verify --network testnet 0xbF39886B4F91F5170934191b0d96Dd277147FBB2\nNothing to compile\nCompiling 1 file with 0.5.16\nSuccessfully submitted source code for contract\ncontracts/BEP20Token.sol:BEP20Token at 0xbF39886B4F91F5170934191b0d96Dd277147FBB2\nfor verification on Etherscan. Waiting for verification result...\n\nSuccessfully verified contract BEP20Token on Etherscan.\nhttps://testnet.bscscan.com/address/0xbF39886B4F91F5170934191b0d96Dd277147FBB2#code\n")))}d.isMDXComponent=!0}}]);