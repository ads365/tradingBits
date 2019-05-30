// i am using web3@1.0.0-beta.37 with the toWei workaround for ethAmount and daiAmount
const fetch = require('node-fetch');
const Web3 = require("web3");
const BigNumber = require('bignumber.js')
const rpcUrl = "infura-link";
const web3 = new Web3(new Web3.providers.HttpProvider(rpcUrl));
const sender = "sender";
const privateKey = "privateKey";
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
const signedTxs = [];

const abiKybNet = [{"constant":false,"inputs":[{"name":"alerter","type":"address"}],"name":"removeAlerter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"trader","type":"address"},{"name":"src","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"dest","type":"address"},{"name":"destAddress","type":"address"},{"name":"maxDestAmount","type":"uint256"},{"name":"minConversionRate","type":"uint256"},{"name":"walletId","type":"address"},{"name":"hint","type":"bytes"}],"name":"tradeWithHint","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"usePermissionless","type":"bool"}],"name":"searchBestRate","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"infoFields","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"feeBurner","type":"address"}],"name":"setFeeBurner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcAmount","type":"uint256"}],"name":"findBestRateOnlyPermission","outputs":[{"name":"obsolete","type":"uint256"},{"name":"rate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"enabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"reserve","type":"address"},{"name":"index","type":"uint256"}],"name":"removeReserve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOperators","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"reservesPerTokenSrc","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"whiteList","type":"address"}],"name":"setWhiteList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"},{"name":"sendTo","type":"address"}],"name":"withdrawToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxGasPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newAlerter","type":"address"}],"name":"addAlerter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"negligibleRateDiff","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feeBurnerContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"expectedRate","type":"address"}],"name":"setExpectedRate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"expectedRateContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"whiteListContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"field","type":"bytes32"},{"name":"value","type":"uint256"}],"name":"setInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getUserCapInWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"reserveType","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"transferAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_enable","type":"bool"}],"name":"setEnable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kyberNetworkProxyContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"transferAdminQuickly","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAlerters","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcQty","type":"uint256"}],"name":"getExpectedRate","outputs":[{"name":"expectedRate","type":"uint256"},{"name":"slippageRate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"reserves","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcQty","type":"uint256"}],"name":"getExpectedRateOnlyPermission","outputs":[{"name":"expectedRate","type":"uint256"},{"name":"slippageRate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERM_HINT","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"},{"name":"token","type":"address"}],"name":"getUserCapInTokenWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"reservesPerTokenDest","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOperator","type":"address"}],"name":"addOperator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"reserve","type":"address"},{"name":"isPermissionless","type":"bool"}],"name":"addReserve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"operator","type":"address"}],"name":"removeOperator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxGasPriceValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"field","type":"bytes32"}],"name":"info","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcAmount","type":"uint256"}],"name":"findBestRate","outputs":[{"name":"obsolete","type":"uint256"},{"name":"rate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_maxGasPrice","type":"uint256"},{"name":"_negligibleRateDiff","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"PERM_HINT_GET_RATE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"networkProxy","type":"address"}],"name":"setKyberProxy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"sendTo","type":"address"}],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNumReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"},{"name":"user","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"reserve","type":"address"},{"name":"token","type":"address"},{"name":"ethToToken","type":"bool"},{"name":"tokenToEth","type":"bool"},{"name":"add","type":"bool"}],"name":"listPairForReserve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_admin","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"EtherReceival","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"reserve","type":"address"},{"indexed":false,"name":"add","type":"bool"},{"indexed":false,"name":"isPermissionless","type":"bool"}],"name":"AddReserveToNetwork","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"reserve","type":"address"}],"name":"RemoveReserveFromNetwork","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"reserve","type":"address"},{"indexed":false,"name":"src","type":"address"},{"indexed":false,"name":"dest","type":"address"},{"indexed":false,"name":"add","type":"bool"}],"name":"ListReservePairs","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newContract","type":"address"},{"indexed":false,"name":"currentContract","type":"address"}],"name":"WhiteListContractSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newContract","type":"address"},{"indexed":false,"name":"currentContract","type":"address"}],"name":"ExpectedRateContractSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newContract","type":"address"},{"indexed":false,"name":"currentContract","type":"address"}],"name":"FeeBurnerContractSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"maxGasPrice","type":"uint256"},{"indexed":false,"name":"negligibleRateDiff","type":"uint256"}],"name":"KyberNetwrokParamsSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"isEnabled","type":"bool"}],"name":"KyberNetworkSetEnable","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"proxy","type":"address"},{"indexed":false,"name":"sender","type":"address"}],"name":"KyberProxySet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"trader","type":"address"},{"indexed":false,"name":"src","type":"address"},{"indexed":false,"name":"dest","type":"address"},{"indexed":false,"name":"srcAmount","type":"uint256"},{"indexed":false,"name":"dstAmount","type":"uint256"},{"indexed":false,"name":"destAddress","type":"address"},{"indexed":false,"name":"ethWeiValue","type":"uint256"},{"indexed":false,"name":"reserve1","type":"address"},{"indexed":false,"name":"reserve2","type":"address"},{"indexed":false,"name":"hint","type":"bytes"}],"name":"KyberTrade","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"sendTo","type":"address"}],"name":"TokenWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"sendTo","type":"address"}],"name":"EtherWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"pendingAdmin","type":"address"}],"name":"TransferAdminPending","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAdmin","type":"address"},{"indexed":false,"name":"previousAdmin","type":"address"}],"name":"AdminClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAlerter","type":"address"},{"indexed":false,"name":"isAdd","type":"bool"}],"name":"AlerterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOperator","type":"address"},{"indexed":false,"name":"isAdd","type":"bool"}],"name":"OperatorAdded","type":"event"}];

const abiKybProxy = [{"constant":false,"inputs":[{"name":"alerter","type":"address"}],"name":"removeAlerter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"enabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOperators","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"dest","type":"address"},{"name":"destAddress","type":"address"},{"name":"maxDestAmount","type":"uint256"},{"name":"minConversionRate","type":"uint256"},{"name":"walletId","type":"address"},{"name":"hint","type":"bytes"}],"name":"tradeWithHint","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"minConversionRate","type":"uint256"}],"name":"swapTokenToEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"},{"name":"sendTo","type":"address"}],"name":"withdrawToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxGasPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newAlerter","type":"address"}],"name":"addAlerter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kyberNetworkContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getUserCapInWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"dest","type":"address"},{"name":"minConversionRate","type":"uint256"}],"name":"swapTokenToToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"transferAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"minConversionRate","type":"uint256"}],"name":"swapEtherToToken","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"transferAdminQuickly","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAlerters","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcQty","type":"uint256"}],"name":"getExpectedRate","outputs":[{"name":"expectedRate","type":"uint256"},{"name":"slippageRate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"},{"name":"token","type":"address"}],"name":"getUserCapInTokenWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOperator","type":"address"}],"name":"addOperator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_kyberNetworkContract","type":"address"}],"name":"setKyberNetworkContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"operator","type":"address"}],"name":"removeOperator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"field","type":"bytes32"}],"name":"info","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"dest","type":"address"},{"name":"destAddress","type":"address"},{"name":"maxDestAmount","type":"uint256"},{"name":"minConversionRate","type":"uint256"},{"name":"walletId","type":"address"}],"name":"trade","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"sendTo","type":"address"}],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"},{"name":"user","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_admin","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"trader","type":"address"},{"indexed":false,"name":"src","type":"address"},{"indexed":false,"name":"dest","type":"address"},{"indexed":false,"name":"actualSrcAmount","type":"uint256"},{"indexed":false,"name":"actualDestAmount","type":"uint256"}],"name":"ExecuteTrade","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newNetworkContract","type":"address"},{"indexed":false,"name":"oldNetworkContract","type":"address"}],"name":"KyberNetworkSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"sendTo","type":"address"}],"name":"TokenWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"sendTo","type":"address"}],"name":"EtherWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"pendingAdmin","type":"address"}],"name":"TransferAdminPending","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAdmin","type":"address"},{"indexed":false,"name":"previousAdmin","type":"address"}],"name":"AdminClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAlerter","type":"address"},{"indexed":false,"name":"isAdd","type":"bool"}],"name":"AlerterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOperator","type":"address"},{"indexed":false,"name":"isAdd","type":"bool"}],"name":"OperatorAdded","type":"event"}];

const abiUni = [{"name": "TokenPurchase", "inputs": [{"type": "address", "name": "buyer", "indexed": true}, {"type": "uint256", "name": "eth_sold", "indexed": true}, {"type": "uint256", "name": "tokens_bought", "indexed": true}], "anonymous": false, "type": "event"}, {"name": "EthPurchase", "inputs": [{"type": "address", "name": "buyer", "indexed": true}, {"type": "uint256", "name": "tokens_sold", "indexed": true}, {"type": "uint256", "name": "eth_bought", "indexed": true}], "anonymous": false, "type": "event"}, {"name": "AddLiquidity", "inputs": [{"type": "address", "name": "provider", "indexed": true}, {"type": "uint256", "name": "eth_amount", "indexed": true}, {"type": "uint256", "name": "token_amount", "indexed": true}], "anonymous": false, "type": "event"}, {"name": "RemoveLiquidity", "inputs": [{"type": "address", "name": "provider", "indexed": true}, {"type": "uint256", "name": "eth_amount", "indexed": true}, {"type": "uint256", "name": "token_amount", "indexed": true}], "anonymous": false, "type": "event"}, {"name": "Transfer", "inputs": [{"type": "address", "name": "_from", "indexed": true}, {"type": "address", "name": "_to", "indexed": true}, {"type": "uint256", "name": "_value", "indexed": false}], "anonymous": false, "type": "event"}, {"name": "Approval", "inputs": [{"type": "address", "name": "_owner", "indexed": true}, {"type": "address", "name": "_spender", "indexed": true}, {"type": "uint256", "name": "_value", "indexed": false}], "anonymous": false, "type": "event"}, {"name": "setup", "outputs": [], "inputs": [{"type": "address", "name": "token_addr"}], "constant": false, "payable": false, "type": "function", "gas": 175875}, {"name": "addLiquidity", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "min_liquidity"}, {"type": "uint256", "name": "max_tokens"}, {"type": "uint256", "name": "deadline"}], "constant": false, "payable": true, "type": "function", "gas": 82616}, {"name": "removeLiquidity", "outputs": [{"type": "uint256", "name": "out"}, {"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "amount"}, {"type": "uint256", "name": "min_eth"}, {"type": "uint256", "name": "min_tokens"}, {"type": "uint256", "name": "deadline"}], "constant": false, "payable": false, "type": "function", "gas": 116814}, {"name": "__default__", "outputs": [], "inputs": [], "constant": false, "payable": true, "type": "function"}, {"name": "ethToTokenSwapInput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "min_tokens"}, {"type": "uint256", "name": "deadline"}], "constant": false, "payable": true, "type": "function", "gas": 12757}, {"name": "ethToTokenTransferInput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "min_tokens"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "recipient"}], "constant": false, "payable": true, "type": "function", "gas": 12965}, {"name": "ethToTokenSwapOutput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_bought"}, {"type": "uint256", "name": "deadline"}], "constant": false, "payable": true, "type": "function", "gas": 50463}, {"name": "ethToTokenTransferOutput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_bought"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "recipient"}], "constant": false, "payable": true, "type": "function", "gas": 50671}, {"name": "tokenToEthSwapInput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_sold"}, {"type": "uint256", "name": "min_eth"}, {"type": "uint256", "name": "deadline"}], "constant": false, "payable": false, "type": "function", "gas": 47503}, {"name": "tokenToEthTransferInput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_sold"}, {"type": "uint256", "name": "min_eth"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "recipient"}], "constant": false, "payable": false, "type": "function", "gas": 47712}, {"name": "tokenToEthSwapOutput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "eth_bought"}, {"type": "uint256", "name": "max_tokens"}, {"type": "uint256", "name": "deadline"}], "constant": false, "payable": false, "type": "function", "gas": 50175}, {"name": "tokenToEthTransferOutput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "eth_bought"}, {"type": "uint256", "name": "max_tokens"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "recipient"}], "constant": false, "payable": false, "type": "function", "gas": 50384}, {"name": "tokenToTokenSwapInput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_sold"}, {"type": "uint256", "name": "min_tokens_bought"}, {"type": "uint256", "name": "min_eth_bought"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "token_addr"}], "constant": false, "payable": false, "type": "function", "gas": 51007}, {"name": "tokenToTokenTransferInput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_sold"}, {"type": "uint256", "name": "min_tokens_bought"}, {"type": "uint256", "name": "min_eth_bought"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "recipient"}, {"type": "address", "name": "token_addr"}], "constant": false, "payable": false, "type": "function", "gas": 51098}, {"name": "tokenToTokenSwapOutput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_bought"}, {"type": "uint256", "name": "max_tokens_sold"}, {"type": "uint256", "name": "max_eth_sold"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "token_addr"}], "constant": false, "payable": false, "type": "function", "gas": 54928}, {"name": "tokenToTokenTransferOutput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_bought"}, {"type": "uint256", "name": "max_tokens_sold"}, {"type": "uint256", "name": "max_eth_sold"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "recipient"}, {"type": "address", "name": "token_addr"}], "constant": false, "payable": false, "type": "function", "gas": 55019}, {"name": "tokenToExchangeSwapInput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_sold"}, {"type": "uint256", "name": "min_tokens_bought"}, {"type": "uint256", "name": "min_eth_bought"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "exchange_addr"}], "constant": false, "payable": false, "type": "function", "gas": 49342}, {"name": "tokenToExchangeTransferInput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_sold"}, {"type": "uint256", "name": "min_tokens_bought"}, {"type": "uint256", "name": "min_eth_bought"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "recipient"}, {"type": "address", "name": "exchange_addr"}], "constant": false, "payable": false, "type": "function", "gas": 49532}, {"name": "tokenToExchangeSwapOutput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_bought"}, {"type": "uint256", "name": "max_tokens_sold"}, {"type": "uint256", "name": "max_eth_sold"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "exchange_addr"}], "constant": false, "payable": false, "type": "function", "gas": 53233}, {"name": "tokenToExchangeTransferOutput", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_bought"}, {"type": "uint256", "name": "max_tokens_sold"}, {"type": "uint256", "name": "max_eth_sold"}, {"type": "uint256", "name": "deadline"}, {"type": "address", "name": "recipient"}, {"type": "address", "name": "exchange_addr"}], "constant": false, "payable": false, "type": "function", "gas": 53423}, {"name": "getEthToTokenInputPrice", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "eth_sold"}], "constant": true, "payable": false, "type": "function", "gas": 5542}, {"name": "getEthToTokenOutputPrice", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_bought"}], "constant": true, "payable": false, "type": "function", "gas": 6872}, {"name": "getTokenToEthInputPrice", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "tokens_sold"}], "constant": true, "payable": false, "type": "function", "gas": 5637}, {"name": "getTokenToEthOutputPrice", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "uint256", "name": "eth_bought"}], "constant": true, "payable": false, "type": "function", "gas": 6897}, {"name": "tokenAddress", "outputs": [{"type": "address", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 1413}, {"name": "factoryAddress", "outputs": [{"type": "address", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 1443}, {"name": "balanceOf", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "address", "name": "_owner"}], "constant": true, "payable": false, "type": "function", "gas": 1645}, {"name": "transfer", "outputs": [{"type": "bool", "name": "out"}], "inputs": [{"type": "address", "name": "_to"}, {"type": "uint256", "name": "_value"}], "constant": false, "payable": false, "type": "function", "gas": 75034}, {"name": "transferFrom", "outputs": [{"type": "bool", "name": "out"}], "inputs": [{"type": "address", "name": "_from"}, {"type": "address", "name": "_to"}, {"type": "uint256", "name": "_value"}], "constant": false, "payable": false, "type": "function", "gas": 110907}, {"name": "approve", "outputs": [{"type": "bool", "name": "out"}], "inputs": [{"type": "address", "name": "_spender"}, {"type": "uint256", "name": "_value"}], "constant": false, "payable": false, "type": "function", "gas": 38769}, {"name": "allowance", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "address", "name": "_owner"}, {"type": "address", "name": "_spender"}], "constant": true, "payable": false, "type": "function", "gas": 1925}, {"name": "name", "outputs": [{"type": "bytes32", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 1623}, {"name": "symbol", "outputs": [{"type": "bytes32", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 1653}, {"name": "decimals", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 1683}, {"name": "totalSupply", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 1713}];

const abiBanSellDai = [{"constant":true,"inputs":[],"name":"BANCOR_CONVERTER_UPGRADER","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_connectorToken","type":"address"},{"name":"_weight","type":"uint32"},{"name":"_enableVirtualBalance","type":"bool"},{"name":"_virtualBalance","type":"uint256"}],"name":"updateConnector","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"connectors","outputs":[{"name":"virtualBalance","type":"uint256"},{"name":"weight","type":"uint32"},{"name":"isVirtualBalanceEnabled","type":"bool"},{"name":"isPurchaseEnabled","type":"bool"},{"name":"isSet","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"connectorTokens","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BNT_TOKEN","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"}],"name":"getReturn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferTokenOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_block","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"quickConvertPrioritized","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_disable","type":"bool"}],"name":"disableConversions","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"convertInternal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"acceptTokenOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_amount","type":"uint256"},{"name":"_magnitude","type":"uint8"}],"name":"getFinalAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"converterType","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_weight","type":"uint32"},{"name":"_enableVirtualBalance","type":"bool"}],"name":"addConnector","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawFromToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"newManager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_whitelist","type":"address"}],"name":"setConversionWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"clearQuickBuyPath","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_connectorToken","type":"address"},{"name":"_disable","type":"bool"}],"name":"disableConnectorPurchases","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"conversionFee","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_CONVERTER_FACTORY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"change","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_FORMULA","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"connectorTokenCount","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_connectorToken","type":"address"},{"name":"_sellAmount","type":"uint256"}],"name":"getSaleReturn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"convert","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"registry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CONTRACT_FEATURES","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_disable","type":"bool"}],"name":"disableTokenTransfers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_fromConnectorToken","type":"address"},{"name":"_toConnectorToken","type":"address"},{"name":"_sellAmount","type":"uint256"}],"name":"getCrossConnectorReturn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_NETWORK","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_GAS_PRICE_LIMIT","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CONVERTER_CONVERSION_WHITELIST","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getQuickBuyPathLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxConversionFee","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_connectorToken","type":"address"},{"name":"_depositAmount","type":"uint256"}],"name":"getPurchaseReturn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_registry","type":"address"}],"name":"setRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"conversionsEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"conversionWhitelist","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptManagement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"}],"name":"setQuickBuyPath","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_connectorToken","type":"address"}],"name":"getConnectorBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newManager","type":"address"}],"name":"transferManagement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"quickBuyPath","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_conversionFee","type":"uint32"}],"name":"setConversionFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"quickConvert","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_token","type":"address"},{"name":"_registry","type":"address"},{"name":"_maxConversionFee","type":"uint32"},{"name":"_connectorToken","type":"address"},{"name":"_connectorWeight","type":"uint32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_fromToken","type":"address"},{"indexed":true,"name":"_toToken","type":"address"},{"indexed":true,"name":"_trader","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_return","type":"uint256"},{"indexed":false,"name":"_conversionFee","type":"int256"}],"name":"Conversion","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_connectorToken","type":"address"},{"indexed":false,"name":"_tokenSupply","type":"uint256"},{"indexed":false,"name":"_connectorBalance","type":"uint256"},{"indexed":false,"name":"_connectorWeight","type":"uint32"}],"name":"PriceDataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_prevFee","type":"uint32"},{"indexed":false,"name":"_newFee","type":"uint32"}],"name":"ConversionFeeUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_prevManager","type":"address"},{"indexed":true,"name":"_newManager","type":"address"}],"name":"ManagerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_prevOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnerUpdate","type":"event"}];

const abiBanBuyDai = [{"constant":true,"inputs":[],"name":"BANCOR_CONVERTER_UPGRADER","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_connectorToken","type":"address"},{"name":"_weight","type":"uint32"},{"name":"_enableVirtualBalance","type":"bool"},{"name":"_virtualBalance","type":"uint256"}],"name":"updateConnector","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"connectors","outputs":[{"name":"virtualBalance","type":"uint256"},{"name":"weight","type":"uint32"},{"name":"isVirtualBalanceEnabled","type":"bool"},{"name":"isSaleEnabled","type":"bool"},{"name":"isSet","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"connectorTokens","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BNT_TOKEN","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"}],"name":"getReturn","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allowRegistryUpdate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferTokenOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_block","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"quickConvertPrioritized","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_disable","type":"bool"}],"name":"disableConversions","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"CONTRACT_REGISTRY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"convertInternal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"acceptTokenOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_amount","type":"uint256"},{"name":"_magnitude","type":"uint8"}],"name":"getFinalAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"converterType","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_weight","type":"uint32"},{"name":"_enableVirtualBalance","type":"bool"}],"name":"addConnector","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"liquidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawFromToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"newManager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"updateRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_whitelist","type":"address"}],"name":"setConversionWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_minReturn","type":"uint256"},{"name":"_conversionId","type":"uint256"},{"name":"_block","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"completeXConversion","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"conversionFee","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_CONVERTER_FACTORY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"change","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"prevRegistry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BNT_CONVERTER","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_FORMULA","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"connectorTokenCount","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_connectorToken","type":"address"},{"name":"_sellAmount","type":"uint256"}],"name":"getSaleReturn","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"convert","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"registry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CONTRACT_FEATURES","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_disable","type":"bool"}],"name":"disableTokenTransfers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"claimTokensEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_fromConnectorToken","type":"address"},{"name":"_toConnectorToken","type":"address"},{"name":"_sellAmount","type":"uint256"}],"name":"getCrossConnectorReturn","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_NETWORK","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_GAS_PRICE_LIMIT","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CONVERTER_CONVERSION_WHITELIST","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxConversionFee","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_connectorToken","type":"address"},{"name":"_disable","type":"bool"}],"name":"disableConnectorSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_connectorToken","type":"address"},{"name":"_depositAmount","type":"uint256"}],"name":"getPurchaseReturn","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_enable","type":"bool"}],"name":"enableClaimTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"restoreRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"conversionsEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"conversionWhitelist","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_X","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptManagement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"fund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_X_UPGRADER","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"upgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_connectorToken","type":"address"}],"name":"getConnectorBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newManager","type":"address"}],"name":"transferManagement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_conversionFee","type":"uint32"}],"name":"setConversionFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"quickConvert","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_disable","type":"bool"}],"name":"disableRegistryUpdate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_amount","type":"uint256"}],"name":"claimTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_token","type":"address"},{"name":"_registry","type":"address"},{"name":"_maxConversionFee","type":"uint32"},{"name":"_connectorToken","type":"address"},{"name":"_connectorWeight","type":"uint32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_fromToken","type":"address"},{"indexed":true,"name":"_toToken","type":"address"},{"indexed":true,"name":"_trader","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_return","type":"uint256"},{"indexed":false,"name":"_conversionFee","type":"int256"}],"name":"Conversion","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_connectorToken","type":"address"},{"indexed":false,"name":"_tokenSupply","type":"uint256"},{"indexed":false,"name":"_connectorBalance","type":"uint256"},{"indexed":false,"name":"_connectorWeight","type":"uint32"}],"name":"PriceDataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_prevFee","type":"uint32"},{"indexed":false,"name":"_newFee","type":"uint32"}],"name":"ConversionFeeUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_conversionsEnabled","type":"bool"}],"name":"ConversionsEnable","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_prevManager","type":"address"},{"indexed":true,"name":"_newManager","type":"address"}],"name":"ManagerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_prevOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnerUpdate","type":"event"}];

abiDai = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"stop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name_","type":"bytes32"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stopped","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"start","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"guy","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"symbol_","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":true,"name":"guy","type":"address"},{"indexed":true,"name":"foo","type":"bytes32"},{"indexed":true,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"}];

abiWEth = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}];

abiOasis = [{"constant":true,"inputs":[],"name":"matchingEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"sell_gem","type":"address"},{"name":"buy_gem","type":"address"}],"name":"getBestOffer","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"pay_gem","type":"address"},{"name":"pay_amt","type":"uint256"},{"name":"buy_gem","type":"address"},{"name":"min_fill_amount","type":"uint256"}],"name":"sellAllAmount","outputs":[{"name":"fill_amt","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"stop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pay_gem","type":"address"},{"name":"buy_gem","type":"address"},{"name":"pay_amt","type":"uint128"},{"name":"buy_amt","type":"uint128"}],"name":"make","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"buy_gem","type":"address"},{"name":"pay_gem","type":"address"},{"name":"pay_amt","type":"uint256"}],"name":"getBuyAmount","outputs":[{"name":"fill_amt","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"pay_amt","type":"uint256"},{"name":"pay_gem","type":"address"},{"name":"buy_amt","type":"uint256"},{"name":"buy_gem","type":"address"},{"name":"pos","type":"uint256"}],"name":"offer","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"pos","type":"uint256"}],"name":"insert","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"last_offer_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"matchingEnabled_","type":"bool"}],"name":"setMatchingEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"cancel","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getOffer","outputs":[{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"del_rank","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"bytes32"},{"name":"maxTakeAmount","type":"uint128"}],"name":"take","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"pay_gem","type":"address"}],"name":"getMinSell","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTime","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dustId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getNextUnsortedOffer","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"close_time","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"_span","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"_best","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stopped","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id_","type":"bytes32"}],"name":"bump","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"sell_gem","type":"address"},{"name":"buy_gem","type":"address"}],"name":"getOfferCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"buy_gem","type":"address"},{"name":"buy_amt","type":"uint256"},{"name":"pay_gem","type":"address"},{"name":"max_fill_amount","type":"uint256"}],"name":"buyAllAmount","outputs":[{"name":"fill_amt","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"isActive","outputs":[{"name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"offers","outputs":[{"name":"pay_amt","type":"uint256"},{"name":"pay_gem","type":"address"},{"name":"buy_amt","type":"uint256"},{"name":"buy_gem","type":"address"},{"name":"owner","type":"address"},{"name":"timestamp","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getFirstUnsortedOffer","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getBetterOffer","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"_dust","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getWorseOffer","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"_near","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"bytes32"}],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pay_gem","type":"address"},{"name":"dust","type":"uint256"}],"name":"setMinSell","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isClosed","outputs":[{"name":"closed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"_rank","outputs":[{"name":"next","type":"uint256"},{"name":"prev","type":"uint256"},{"name":"delb","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getOwner","outputs":[{"name":"owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"isOfferSorted","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"buyEnabled_","type":"bool"}],"name":"setBuyEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"amount","type":"uint256"}],"name":"buy","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pay_amt","type":"uint256"},{"name":"pay_gem","type":"address"},{"name":"buy_amt","type":"uint256"},{"name":"buy_gem","type":"address"},{"name":"pos","type":"uint256"},{"name":"rounding","type":"bool"}],"name":"offer","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pay_amt","type":"uint256"},{"name":"pay_gem","type":"address"},{"name":"buy_amt","type":"uint256"},{"name":"buy_gem","type":"address"}],"name":"offer","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"pay_gem","type":"address"},{"name":"buy_gem","type":"address"},{"name":"buy_amt","type":"uint256"}],"name":"getPayAmount","outputs":[{"name":"fill_amt","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"close_time","type":"uint64"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":true,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":true,"name":"guy","type":"address"},{"indexed":true,"name":"foo","type":"bytes32"},{"indexed":true,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"}],"name":"LogItemUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"pay_amt","type":"uint256"},{"indexed":true,"name":"pay_gem","type":"address"},{"indexed":false,"name":"buy_amt","type":"uint256"},{"indexed":true,"name":"buy_gem","type":"address"}],"name":"LogTrade","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"bytes32"},{"indexed":true,"name":"pair","type":"bytes32"},{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"pay_gem","type":"address"},{"indexed":false,"name":"buy_gem","type":"address"},{"indexed":false,"name":"pay_amt","type":"uint128"},{"indexed":false,"name":"buy_amt","type":"uint128"},{"indexed":false,"name":"timestamp","type":"uint64"}],"name":"LogMake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"bytes32"},{"indexed":true,"name":"pair","type":"bytes32"},{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"pay_gem","type":"address"},{"indexed":false,"name":"buy_gem","type":"address"},{"indexed":false,"name":"pay_amt","type":"uint128"},{"indexed":false,"name":"buy_amt","type":"uint128"},{"indexed":false,"name":"timestamp","type":"uint64"}],"name":"LogBump","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"bytes32"},{"indexed":true,"name":"pair","type":"bytes32"},{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"pay_gem","type":"address"},{"indexed":false,"name":"buy_gem","type":"address"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"take_amt","type":"uint128"},{"indexed":false,"name":"give_amt","type":"uint128"},{"indexed":false,"name":"timestamp","type":"uint64"}],"name":"LogTake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"bytes32"},{"indexed":true,"name":"pair","type":"bytes32"},{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"pay_gem","type":"address"},{"indexed":false,"name":"buy_gem","type":"address"},{"indexed":false,"name":"pay_amt","type":"uint128"},{"indexed":false,"name":"buy_amt","type":"uint128"},{"indexed":false,"name":"timestamp","type":"uint64"}],"name":"LogKill","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"isEnabled","type":"bool"}],"name":"LogBuyEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"pay_gem","type":"address"},{"indexed":false,"name":"min_amount","type":"uint256"}],"name":"LogMinSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"isEnabled","type":"bool"}],"name":"LogMatchingEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"}],"name":"LogUnsortedOffer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"}],"name":"LogSortedOffer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"keeper","type":"address"},{"indexed":false,"name":"id","type":"uint256"}],"name":"LogInsert","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"keeper","type":"address"},{"indexed":false,"name":"id","type":"uint256"}],"name":"LogDelete","type":"event"}]

const abi0x = [{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"filled","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"makerAddress","type":"address"},{"name":"takerAddress","type":"address"},{"name":"feeRecipientAddress","type":"address"},{"name":"senderAddress","type":"address"},{"name":"makerAssetAmount","type":"uint256"},{"name":"takerAssetAmount","type":"uint256"},{"name":"makerFee","type":"uint256"},{"name":"takerFee","type":"uint256"},{"name":"expirationTimeSeconds","type":"uint256"},{"name":"salt","type":"uint256"},{"name":"makerAssetData","type":"bytes"},{"name":"takerAssetData","type":"bytes"}],"name":"orders","type":"tuple[]"},{"name":"takerAssetFillAmounts","type":"uint256[]"},{"name":"signatures","type":"bytes[]"}],"name":"batchFillOrders","outputs":[{"components":[{"name":"makerAssetFilledAmount","type":"uint256"},{"name":"takerAssetFilledAmount","type":"uint256"},{"name":"makerFeePaid","type":"uint256"},{"name":"takerFeePaid","type":"uint256"}],"name":"totalFillResults","type":"tuple"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"cancelled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"bytes32"},{"name":"signerAddress","type":"address"},{"name":"signature","type":"bytes"}],"name":"preSign","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"makerAddress","type":"address"},{"name":"takerAddress","type":"address"},{"name":"feeRecipientAddress","type":"address"},{"name":"senderAddress","type":"address"},{"name":"makerAssetAmount","type":"uint256"},{"name":"takerAssetAmount","type":"uint256"},{"name":"makerFee","type":"uint256"},{"name":"takerFee","type":"uint256"},{"name":"expirationTimeSeconds","type":"uint256"},{"name":"salt","type":"uint256"},{"name":"makerAssetData","type":"bytes"},{"name":"takerAssetData","type":"bytes"}],"name":"leftOrder","type":"tuple"},{"components":[{"name":"makerAddress","type":"address"},{"name":"takerAddress","type":"address"},{"name":"feeRecipientAddress","type":"address"},{"name":"senderAddress","type":"address"},{"name":"makerAssetAmount","type":"uint256"},{"name":"takerAssetAmount","type":"uint256"},{"name":"makerFee","type":"uint256"},{"name":"takerFee","type":"uint256"},{"name":"expirationTimeSeconds","type":"uint256"},{"name":"salt","type":"uint256"},{"name":"makerAssetData","type":"bytes"},{"name":"takerAssetData","type":"bytes"}],"name":"rightOrder","type":"tuple"},{"name":"leftSignature","type":"bytes"},{"name":"rightSignature","type":"bytes"}],"name":"matchOrders","outputs":[{"components":[{"components":[{"name":"makerAssetFilledAmount","type":"uint256"},{"name":"takerAssetFilledAmount","type":"uint256"},{"name":"makerFeePaid","type":"uint256"},{"name":"takerFeePaid","type":"uint256"}],"name":"left","type":"tuple"},{"components":[{"name":"makerAssetFilledAmount","type":"uint256"},{"name":"takerAssetFilledAmount","type":"uint256"},{"name":"makerFeePaid","type":"uint256"},{"name":"takerFeePaid","type":"uint256"}],"name":"right","type":"tuple"},{"name":"leftMakerAssetSpreadAmount","type":"uint256"}],"name":"matchedFillResults","type":"tuple"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"makerAddress","type":"address"},{"name":"takerAddress","type":"address"},{"name":"feeRecipientAddress","type":"address"},{"name":"senderAddress","type":"address"},{"name":"makerAssetAmount","type":"uint256"},{"name":"takerAssetAmount","type":"uint256"},{"name":"makerFee","type":"uint256"},{"name":"takerFee","type":"uint256"},{"name":"expirationTimeSeconds","type":"uint256"},{"name":"salt","type":"uint256"},{"name":"makerAssetData","type":"bytes"},{"name":"takerAssetData","type":"bytes"}],"name":"order","type":"tuple"},{"name":"takerAssetFillAmount","type":"uint256"},{"name":"signature","type":"bytes"}],"name":"fillOrderNoThrow","outputs":[{"components":[{"name":"makerAssetFilledAmount","type":"uint256"},{"name":"takerAssetFilledAmount","type":"uint256"},{"name":"makerFeePaid","type":"uint256"},{"name":"takerFeePaid","type":"uint256"}],"name":"fillResults","type":"tuple"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes4"}],"name":"assetProxies","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"makerAddress","type":"address"},{"name":"takerAddress","type":"address"},{"name":"feeRecipientAddress","type":"address"},{"name":"senderAddress","type":"address"},{"name":"makerAssetAmount","type":"uint256"},{"name":"takerAssetAmount","type":"uint256"},{"name":"makerFee","type":"uint256"},{"name":"takerFee","type":"uint256"},{"name":"expirationTimeSeconds","type":"uint256"},{"name":"salt","type":"uint256"},{"name":"makerAssetData","type":"bytes"},{"name":"takerAssetData","type":"bytes"}],"name":"orders","type":"tuple[]"}],"name":"batchCancelOrders","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"makerAddress","type":"address"},{"name":"takerAddress","type":"address"},{"name":"feeRecipientAddress","type":"address"},{"name":"senderAddress","type":"address"},{"name":"makerAssetAmount","type":"uint256"},{"name":"takerAssetAmount","type":"uint256"},{"name":"makerFee","type":"uint256"},{"name":"takerFee","type":"uint256"},{"name":"expirationTimeSeconds","type":"uint256"},{"name":"salt","type":"uint256"},{"name":"makerAssetData","type":"bytes"},{"name":"takerAssetData","type":"bytes"}],"name":"orders","type":"tuple[]"},{"name":"takerAssetFillAmounts","type":"uint256[]"},{"name":"signatures","type":"bytes[]"}],"name":"batchFillOrKillOrders","outputs":[{"components":[{"name":"makerAssetFilledAmount","type":"uint256"},{"name":"takerAssetFilledAmount","type":"uint256"},{"name":"makerFeePaid","type":"uint256"},{"name":"takerFeePaid","type":"uint256"}],"name":"totalFillResults","type":"tuple"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"targetOrderEpoch","type":"uint256"}],"name":"cancelOrdersUpTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"makerAddress","type":"address"},{"name":"takerAddress","type":"address"},{"name":"feeRecipientAddress","type":"address"},{"name":"senderAddress","type":"address"},{"name":"makerAssetAmount","type":"uint256"},{"name":"takerAssetAmount","type":"uint256"},{"name":"makerFee","type":"uint256"},{"name":"takerFee","type":"uint256"},{"name":"expirationTimeSeconds","type":"uint256"},{"name":"salt","type":"uint256"},{"name":"makerAssetData","type":"bytes"},{"name":"takerAssetData","type":"bytes"}],"name":"orders","type":"tuple[]"},{"name":"takerAssetFillAmounts","type":"uint256[]"},{"name":"signatures","type":"bytes[]"}],"name":"batchFillOrdersNoThrow","outputs":[{"components":[{"name":"makerAssetFilledAmount","type":"uint256"},{"name":"takerAssetFilledAmount","type":"uint256"},{"name":"makerFeePaid","type":"uint256"},{"name":"takerFeePaid","type":"uint256"}],"name":"totalFillResults","type":"tuple"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"assetProxyId","type":"bytes4"}],"name":"getAssetProxy","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"transactions","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"makerAddress","type":"address"},{"name":"takerAddress","type":"address"},{"name":"feeRecipientAddress","type":"address"},{"name":"senderAddress","type":"address"},{"name":"makerAssetAmount","type":"uint256"},{"name":"takerAssetAmount","type":"uint256"},{"name":"makerFee","type":"uint256"},{"name":"takerFee","type":"uint256"},{"name":"expirationTimeSeconds","type":"uint256"},{"name":"salt","type":"uint256"},{"name":"makerAssetData","type":"bytes"},{"name":"takerAssetData","type":"bytes"}],"name":"order","type":"tuple"},{"name":"takerAssetFillAmount","type":"uint256"},{"name":"signature","type":"bytes"}],"name":"fillOrKillOrder","outputs":[{"components":[{"name":"makerAssetFilledAmount","type":"uint256"},{"name":"takerAssetFilledAmount","type":"uint256"},{"name":"makerFeePaid","type":"uint256"},{"name":"takerFeePaid","type":"uint256"}],"name":"fillResults","type":"tuple"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"validatorAddress","type":"address"},{"name":"approval","type":"bool"}],"name":"setSignatureValidatorApproval","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowedValidators","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"makerAddress","type":"address"},{"name":"takerAddress","type":"address"},{"name":"feeRecipientAddress","type":"address"},{"name":"senderAddress","type":"address"},{"name":"makerAssetAmount","type":"uint256"},{"name":"takerAssetAmount","type":"uint256"},{"name":"makerFee","type":"uint256"},{"name":"takerFee","type":"uint256"},{"name":"expirationTimeSeconds","type":"uint256"},{"name":"salt","type":"uint256"},{"name":"makerAssetData","type":"bytes"},{"name":"takerAssetData","type":"bytes"}],"name":"orders","type":"tuple[]"},{"name":"takerAssetFillAmount","type":"uint256"},{"name":"signatures","type":"bytes[]"}],"name":"marketSellOrders","outputs":[{"components":[{"name":"makerAssetFilledAmount","type":"uint256"},{"name":"takerAssetFilledAmount","type":"uint256"},{"name":"makerFeePaid","type":"uint256"},{"name":"takerFeePaid","type":"uint256"}],"name":"totalFillResults","type":"tuple"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"makerAddress","type":"address"},{"name":"takerAddress","type":"address"},{"name":"feeRecipientAddress","type":"address"},{"name":"senderAddress","type":"address"},{"name":"makerAssetAmount","type":"uint256"},{"name":"takerAssetAmount","type":"uint256"},{"name":"makerFee","type":"uint256"},{"name":"takerFee","type":"uint256"},{"name":"expirationTimeSeconds","type":"uint256"},{"name":"salt","type":"uint256"},{"name":"makerAssetData","type":"bytes"},{"name":"takerAssetData","type":"bytes"}],"name":"orders","type":"tuple[]"}],"name":"getOrdersInfo","outputs":[{"components":[{"name":"orderStatus","type":"uint8"},{"name":"orderHash","type":"bytes32"},{"name":"orderTakerAssetFilledAmount","type":"uint256"}],"name":"","type":"tuple[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"address"}],"name":"preSigned","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"hash","type":"bytes32"},{"name":"signerAddress","type":"address"},{"name":"signature","type":"bytes"}],"name":"isValidSignature","outputs":[{"name":"isValid","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"makerAddress","type":"address"},{"name":"takerAddress","type":"address"},{"name":"feeRecipientAddress","type":"address"},{"name":"senderAddress","type":"address"},{"name":"makerAssetAmount","type":"uint256"},{"name":"takerAssetAmount","type":"uint256"},{"name":"makerFee","type":"uint256"},{"name":"takerFee","type":"uint256"},{"name":"expirationTimeSeconds","type":"uint256"},{"name":"salt","type":"uint256"},{"name":"makerAssetData","type":"bytes"},{"name":"takerAssetData","type":"bytes"}],"name":"orders","type":"tuple[]"},{"name":"makerAssetFillAmount","type":"uint256"},{"name":"signatures","type":"bytes[]"}],"name":"marketBuyOrdersNoThrow","outputs":[{"components":[{"name":"makerAssetFilledAmount","type":"uint256"},{"name":"takerAssetFilledAmount","type":"uint256"},{"name":"makerFeePaid","type":"uint256"},{"name":"takerFeePaid","type":"uint256"}],"name":"totalFillResults","type":"tuple"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"makerAddress","type":"address"},{"name":"takerAddress","type":"address"},{"name":"feeRecipientAddress","type":"address"},{"name":"senderAddress","type":"address"},{"name":"makerAssetAmount","type":"uint256"},{"name":"takerAssetAmount","type":"uint256"},{"name":"makerFee","type":"uint256"},{"name":"takerFee","type":"uint256"},{"name":"expirationTimeSeconds","type":"uint256"},{"name":"salt","type":"uint256"},{"name":"makerAssetData","type":"bytes"},{"name":"takerAssetData","type":"bytes"}],"name":"order","type":"tuple"},{"name":"takerAssetFillAmount","type":"uint256"},{"name":"signature","type":"bytes"}],"name":"fillOrder","outputs":[{"components":[{"name":"makerAssetFilledAmount","type":"uint256"},{"name":"takerAssetFilledAmount","type":"uint256"},{"name":"makerFeePaid","type":"uint256"},{"name":"takerFeePaid","type":"uint256"}],"name":"fillResults","type":"tuple"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"salt","type":"uint256"},{"name":"signerAddress","type":"address"},{"name":"data","type":"bytes"},{"name":"signature","type":"bytes"}],"name":"executeTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"assetProxy","type":"address"}],"name":"registerAssetProxy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"makerAddress","type":"address"},{"name":"takerAddress","type":"address"},{"name":"feeRecipientAddress","type":"address"},{"name":"senderAddress","type":"address"},{"name":"makerAssetAmount","type":"uint256"},{"name":"takerAssetAmount","type":"uint256"},{"name":"makerFee","type":"uint256"},{"name":"takerFee","type":"uint256"},{"name":"expirationTimeSeconds","type":"uint256"},{"name":"salt","type":"uint256"},{"name":"makerAssetData","type":"bytes"},{"name":"takerAssetData","type":"bytes"}],"name":"order","type":"tuple"}],"name":"getOrderInfo","outputs":[{"components":[{"name":"orderStatus","type":"uint8"},{"name":"orderHash","type":"bytes32"},{"name":"orderTakerAssetFilledAmount","type":"uint256"}],"name":"orderInfo","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"makerAddress","type":"address"},{"name":"takerAddress","type":"address"},{"name":"feeRecipientAddress","type":"address"},{"name":"senderAddress","type":"address"},{"name":"makerAssetAmount","type":"uint256"},{"name":"takerAssetAmount","type":"uint256"},{"name":"makerFee","type":"uint256"},{"name":"takerFee","type":"uint256"},{"name":"expirationTimeSeconds","type":"uint256"},{"name":"salt","type":"uint256"},{"name":"makerAssetData","type":"bytes"},{"name":"takerAssetData","type":"bytes"}],"name":"order","type":"tuple"}],"name":"cancelOrder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"orderEpoch","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ZRX_ASSET_DATA","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"makerAddress","type":"address"},{"name":"takerAddress","type":"address"},{"name":"feeRecipientAddress","type":"address"},{"name":"senderAddress","type":"address"},{"name":"makerAssetAmount","type":"uint256"},{"name":"takerAssetAmount","type":"uint256"},{"name":"makerFee","type":"uint256"},{"name":"takerFee","type":"uint256"},{"name":"expirationTimeSeconds","type":"uint256"},{"name":"salt","type":"uint256"},{"name":"makerAssetData","type":"bytes"},{"name":"takerAssetData","type":"bytes"}],"name":"orders","type":"tuple[]"},{"name":"takerAssetFillAmount","type":"uint256"},{"name":"signatures","type":"bytes[]"}],"name":"marketSellOrdersNoThrow","outputs":[{"components":[{"name":"makerAssetFilledAmount","type":"uint256"},{"name":"takerAssetFilledAmount","type":"uint256"},{"name":"makerFeePaid","type":"uint256"},{"name":"takerFeePaid","type":"uint256"}],"name":"totalFillResults","type":"tuple"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"EIP712_DOMAIN_HASH","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"makerAddress","type":"address"},{"name":"takerAddress","type":"address"},{"name":"feeRecipientAddress","type":"address"},{"name":"senderAddress","type":"address"},{"name":"makerAssetAmount","type":"uint256"},{"name":"takerAssetAmount","type":"uint256"},{"name":"makerFee","type":"uint256"},{"name":"takerFee","type":"uint256"},{"name":"expirationTimeSeconds","type":"uint256"},{"name":"salt","type":"uint256"},{"name":"makerAssetData","type":"bytes"},{"name":"takerAssetData","type":"bytes"}],"name":"orders","type":"tuple[]"},{"name":"makerAssetFillAmount","type":"uint256"},{"name":"signatures","type":"bytes[]"}],"name":"marketBuyOrders","outputs":[{"components":[{"name":"makerAssetFilledAmount","type":"uint256"},{"name":"takerAssetFilledAmount","type":"uint256"},{"name":"makerFeePaid","type":"uint256"},{"name":"takerFeePaid","type":"uint256"}],"name":"totalFillResults","type":"tuple"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentContextAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"VERSION","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"signerAddress","type":"address"},{"indexed":true,"name":"validatorAddress","type":"address"},{"indexed":false,"name":"approved","type":"bool"}],"name":"SignatureValidatorApproval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"makerAddress","type":"address"},{"indexed":true,"name":"feeRecipientAddress","type":"address"},{"indexed":false,"name":"takerAddress","type":"address"},{"indexed":false,"name":"senderAddress","type":"address"},{"indexed":false,"name":"makerAssetFilledAmount","type":"uint256"},{"indexed":false,"name":"takerAssetFilledAmount","type":"uint256"},{"indexed":false,"name":"makerFeePaid","type":"uint256"},{"indexed":false,"name":"takerFeePaid","type":"uint256"},{"indexed":true,"name":"orderHash","type":"bytes32"},{"indexed":false,"name":"makerAssetData","type":"bytes"},{"indexed":false,"name":"takerAssetData","type":"bytes"}],"name":"Fill","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"makerAddress","type":"address"},{"indexed":true,"name":"feeRecipientAddress","type":"address"},{"indexed":false,"name":"senderAddress","type":"address"},{"indexed":true,"name":"orderHash","type":"bytes32"},{"indexed":false,"name":"makerAssetData","type":"bytes"},{"indexed":false,"name":"takerAssetData","type":"bytes"}],"name":"Cancel","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"makerAddress","type":"address"},{"indexed":true,"name":"senderAddress","type":"address"},{"indexed":false,"name":"orderEpoch","type":"uint256"}],"name":"CancelUpTo","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"bytes4"},{"indexed":false,"name":"assetProxy","type":"address"}],"name":"AssetProxyRegistered","type":"event"}];

const abiBanGas = [{"constant":true,"inputs":[{"name":"_gasPrice","type":"uint256"}],"name":"validateGasPrice","outputs":[],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_gasPrice","type":"uint256"}],"name":"setGasPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gasPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_gasPrice","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_prevOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnerUpdate","type":"event"}];

const kyberNetwork = new web3.eth.Contract(abiKybNet,"0x9ae49C0d7F8F9EF4B864e004FE86Ac8294E20950");
const kyberProxy = new web3.eth.Contract(abiKybProxy,"0x818E6FECD516Ecc3849DAf6845e3EC868087B755");
const uniSwap = new web3.eth.Contract(abiUni,"0x09cabEC1eAd1c0Ba254B09efb3EE13841712bE14");
const bancorNetSellDai = new web3.eth.Contract(abiBanSellDai, "0x587044b74004E3D5eF2D453b7F8d198d9e4cB558");
const bancorNetBuyDai = new web3.eth.Contract(abiBanBuyDai, "0xCBc6a023eb975a1e2630223a7959988948E664f3");
const daiContract = new web3.eth.Contract(abiDai, "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359");
const daiAddr = "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359";
const nullAddr = "0x0000000000000000000000000000000000000000"
const ethAddr = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
const wEthAddr = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const wEthContract = new web3.eth.Contract(abiWEth, "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2");
const oasisContract = new web3.eth.Contract(abiOasis, "0x39755357759cE0d7f32dC8dC45414CCa409AE24e");
const bancorGas = new web3.eth.Contract(abiBanGas, "0x607a5C47978e2Eb6d59C6C6f51bc0bF411f4b85a");
const zeroEx = new web3.eth.Contract(abi0x,"0x4F833a24e1f95D70F028921e27040Ca56E09AB0b");
let nonce;

async function checkWallets(){

  let ethAmount = web3.utils.toWei("2")

  let curBalanceAcc1 = (await web3.eth.getBalance(sender)/1000000000000000000);
  let daiBalAcc1 = (await daiContract.methods.balanceOf(sender).call())/1000000000000000000;
  let wEthBalAcc1 = (await wEthContract.methods.balanceOf(sender).call())/1000000000000000000;

  let requestInfo = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT');
  let priceInfo = await requestInfo.json();
  let ethPrice = await(priceInfo.price);
  let bmDaiAmount = ethPrice*2.1;

  if (curBalanceAcc1 > 2.05 && daiBalAcc1 > bmDaiAmount && wEthBalAcc1 >= 2) {
    trackPrice("yes", "no", "no");
    console.log("wallets all good")
  }
  else if (curBalanceAcc1 >= 4) {
    if (wEthBalAcc1 < 2) {
      sendTx1((wEthContract.methods.deposit()), ethAmount);
      //deposit 2 eth for weth
      console.log("too much eth - buy weth")
    }
    else if (daiBalAcc1 < bmDaiAmount) {
      trackPrice("no", "yes", "no");
      //buy dai
      console.log("too much eth buy dai")
    }
    else {
      console.log("error fix manually");
    }
  }
  else if (wEthBalAcc1 > 4) {
    sendTx1((wEthContract.methods.withdraw(ethAmount)), "0");
    //withdraw 2 weth for eth
    console.log("too much weth")
  }
  else if (daiBalAcc1 > (ethPrice*4)) {
    trackPrice("no", "no", "yes");
    console.log("too much dai")
    //sell 2 eth worth of dai
  }
  else {
    console.log("error fix amnually");
  }
}

async function trackPrice(scanArb, buy, sell) {

  var buyRates = [];
  var sellRates = [];

  let requestInfo = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT');
  let priceInfo = await requestInfo.json();
  let ethPrice = await(priceInfo.price);
  let daiAmount = web3.utils.toWei((ethPrice*2).toString());
  let ethAmount = web3.utils.toWei("2");

  //console.log(daiAmount);

  let kyberBuy = await(kyberNetwork.methods.findBestRate("0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359", ethAmount).call());
  //console.log("Kyber Buy rate (ETH->DAI)",(1/(kyberBuy.rate/1000000000000000000)));
  let kyberBuyRate = await (1/(kyberBuy.rate/1000000000000000000));
  let kybMinBuyRate = web3.utils.toWei(((1/kyberBuyRate)*0.996).toString());

  console.log("kyb min buy", web3.utils.toWei((((2/kyberBuyRate)*0.994)).toString()));

  buyRates.push({
    key: "kyber",
    value: kyberBuyRate
  });

  let kyberSell = await(kyberNetwork.methods.findBestRate("0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359", "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", daiAmount).call());
  //console.log("Kyber Sell rate (DAI->ETH)",(kyberSell.rate/1000000000000000000));
  let kyberSellRate = await (kyberSell.rate/1000000000000000000);
  let kyberSellAmt = web3.utils.toWei(((2/0.999)/kyberSellRate).toString());
  let kybMinSellRate = web3.utils.toWei((kyberSellRate*0.994).toString());

  console.log("kyber sell amt", web3.utils.toWei((2/kyberSellRate).toString()));

  sellRates.push({
    key: "kyber",
    value: kyberSellRate
  });

  let uniswapBuy = await(uniSwap.methods.getEthToTokenInputPrice(ethAmount).call());
  //console.log("Uniswap Buy Price (ETH->DAI)",(1/(uniswapBuy/1000000000000000000)));
  let uniSwapBuyRate = await (1/(uniswapBuy/ethAmount));
  let uniMinBuyRet = web3.utils.toWei(((2/uniSwapBuyRate)*0.994).toString());
  console.log("uni min buy", uniMinBuyRet)

  buyRates.push({
    key: "uniswap",
    value: uniSwapBuyRate
  });

  let uniswapSell = await(uniSwap.methods.getTokenToEthInputPrice(daiAmount).call());
  //console.log("Uniswap sell Price (DAI->ETH)",(uniswapSell/150000000000000000000));
  let uniswapSellRate = await (uniswapSell/daiAmount);
  let uniswapSellAmt = web3.utils.toWei(((2/0.994)/uniswapSellRate).toString());
  console.log("uni sell amt", uniswapSellAmt)

  sellRates.push({
    key: "uniswap",
    value: uniswapSellRate
  });

  let banBuy1 = await(bancorNetBuyDai.methods.getReturn("0xc0829421C1d260BD3cB3E0F06cfE2D52db2cE315", "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C", ethAmount).call());
  let banBuy1Resp = await banBuy1[0];
  let banBuy2 = await(bancorNetSellDai.methods.getReturn("0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C", "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359", banBuy1Resp).call());

  //console.log(banBuy2);
  let bancorBuyRate = await (1/(banBuy2/ethAmount))
  let banMinBuyRet = web3.utils.toWei(((2/bancorBuyRate)*0.994).toString());
  console.log("ban min buy", banMinBuyRet)

  buyRates.push({
    key: "bancor",
    value: bancorBuyRate
  });

  let banSell1 = await(bancorNetSellDai.methods.getReturn("0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359", "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C", daiAmount).call());
  let banSell1Resp = await banSell1;
  let banSell2 = await(bancorNetBuyDai.methods.getReturn("0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C", "0xc0829421C1d260BD3cB3E0F06cfE2D52db2cE315", banSell1Resp).call());

  let bancorSellRate = await (banSell2[0]/daiAmount)
  let bancorSellAmt = web3.utils.toWei(((2/0.994)/bancorSellRate).toString());
  console.log("ban sell amt", bancorSellAmt);
  //console.log(banSell2[0]);

  sellRates.push({
    key: "bancor",
    value: bancorSellRate
  });


  //fetches whole orderbook im just grabbing the top of the books - i can also get amount
  let rrOrdJson = await fetch('https://api.radarrelay.com/v2/markets/weth-dai/book');
  let rrOrdBook = await rrOrdJson.json();
  //console.log(rrOrdBook);
  //console.log("Radar Relay Buy Price (ETH->DAI)",(rrOrdBook.bids[0]));
  //console.log("Radar Relay Sell Price (DAI->ETH)",(rrOrdBook.asks[0]));
  let rrPropBuyRate = await(1/(rrOrdBook.bids[0].price));
  let forBuyAmt = await (rrOrdBook.bids[0].remainingBaseTokenAmount);
  let rrBuyRate;
  try {
    if (forBuyAmt > 2) {
      rrBuyRate = rrPropBuyRate;
    }
    else {
      rrBuyRate = "1"
    }
  } catch (e) {
    rrBuyRate = "1"
  }
  let forSaleAmt = await (rrOrdBook.asks[0].remainingBaseTokenAmount);
  let rrPropSellRate = await (1/(rrOrdBook.asks[0].price));
  let rrSellRate;
  try {
    if (forSaleAmt > 2) {
      rrSellRate = rrPropSellRate;
    }
    else {
      rrSellRate = "0.000000001"
    }
  } catch (e) {
    rrSellRate = "0.000000001"
  }
  let rrMinBuyRet = web3.utils.toWei(((2/rrBuyRate)*0.994).toString());
  let rrSellAmt = web3.utils.toWei(((2/0.994)/rrSellRate).toString());
  console.log("rr min buy", rrMinBuyRet);
  console.log("rr sell amt", rrSellAmt);

  buyRates.push({
    key: "radarRelay",
    value: rrBuyRate
  });

  sellRates.push({
    key: "radarRelay",
    value: rrSellRate
  });

  let oasisBuy = await(oasisContract.methods.getBuyAmount("0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359", "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", ethAmount).call());
  let oasisBuyRate = await (1/(oasisBuy/ethAmount));
  let oasisMinBuyRet = web3.utils.toWei(((2/oasisBuyRate)*0.994).toString());
  console.log("oasis min buy", oasisMinBuyRet);

  buyRates.push({
    key: "oasis",
    value: oasisBuyRate
  });

  let oasisSell = await(oasisContract.methods.getBuyAmount("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359", daiAmount).call());
  let oasisSellRate = await (oasisSell/daiAmount);
  let oasisSellAmt = web3.utils.toWei(((2/0.994)/oasisSellRate).toString());
  console.log("oasis sell amt", oasisSellAmt);

  sellRates.push({
    key: "oasis",
    value: oasisSellRate
  });

  //console.log("Buy Rates",buyRates);
  //console.log("Sell Rates",sellRates);

  var buyRatesSorted = buyRates.slice(0);
  buyRatesSorted.sort(function(a,b) {
    return a.value - b.value;
  });

  var sellRatesSorted = sellRates.slice(0);
  sellRatesSorted.sort(function(a,b) {
    return b.value - a.value;
  });

  console.log("DAI Buy Rates",buyRatesSorted);
  console.log("Dai Sell Rates",sellRatesSorted);

  console.log("lowest buy",buyRatesSorted[0]);
  console.log("highest sell", sellRatesSorted[0]);

  let arbSpread = (((sellRatesSorted[0].value) - (buyRatesSorted[0].value))/(buyRatesSorted[0].value));

  console.log("Arbable Spread",arbSpread);


  //inefficient sorting to find arb pair
  if (arbSpread > 0.02 && scanArb == "yes") {
    console.log("arbing");

    if (buyRatesSorted[0].key == "bancor") {
      sendBanTx1((bancorNetBuyDai.methods.quickConvert(["0xc0829421c1d260bd3cb3e0f06cfe2d52db2ce315", "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c", "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c", "0xee01b3ab5f6728adc137be101d99c678938e6e72", "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"], ethAmount, banMinBuyRet)), ethAmount);

      if (sellRatesSorted[0].key == "bancor") {
        sendBanTx2((bancorNetSellDai.methods.quickConvert(["0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359", "0xee01b3ab5f6728adc137be101d99c678938e6e72", "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c", "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c", "0xc0829421c1d260bd3cb3e0f06cfe2d52db2ce315"], bancorSellAmt, ethAmount)), "0");

      }
      else if (sellRatesSorted[0].key == "kyber") {
        sendTx2((kyberProxy.methods.trade(daiAddr, kyberSellAmt, ethAddr, sender, "1000000000000000000000000", kybMinSellRate, "0x0000000000000000000000000000000000000000")), "0");

      }
      else if (sellRatesSorted[0].key == "radarRelay") {
        let rrOrder = await rrOrdBook.asks[0].signedOrder;
        let makerAddress = await rrOrder.makerAddress;
        let takerAddress = await rrOrder.takerAddress;
        let feeRecipientAddress = await rrOrder.feeRecipientAddress;
        let senderAddress = await rrOrder.senderAddress;
        let makerAssetAmount = await rrOrder.makerAssetAmount;
        let takerAssetAmount = await rrOrder.takerAssetAmount;
        let makerFee = await rrOrder.makerFee;
        let takerFee = await rrOrder.takerFee;
        let expirationTimeSeconds = await rrOrder.expirationTimeSeconds;
        let salt = await rrOrder.salt;
        let makerAssetData = await rrOrder.makerAssetData;
        let takerAssetData = await rrOrder.takerAssetData;
        let signature = await rrOrder.signature;

        sendTx2((zeroEx.methods.fillOrder([makerAddress,takerAddress,feeRecipientAddress,senderAddress,makerAssetAmount,takerAssetAmount,makerFee,takerFee,expirationTimeSeconds,salt,makerAssetData,takerAssetData], rrSellAmt, signature)), "0"); //wallet

      }
      else if (sellRatesSorted[0].key == "uniswap") {
        sendTx2((uniSwap.methods.tokenToEthSwapInput(uniswapSellAmt, ethAmount, "1739591241")), "0"); //token to eth swap input //wallet

      }
      else if (sellRatesSorted[0].key == "oasis") {
        sendTx2((oasisContract.methods.sellAllAmount(daiAddr, oasisSellAmt, wEthAddr, ethAmount)), "0"); //token to eth swap input //wallet

      }
      else {
        console.log("some error");
      }
    }
    else if (buyRatesSorted[0].key == "kyber") {
      sendTx1((kyberProxy.methods.trade(ethAddr, ethAmount, daiAddr, sender, "1000000000000000000000000", kybMinBuyRate, "0x0000000000000000000000000000000000000000")), ethAmount); //wallet

      if (sellRatesSorted[0].key == "bancor") {
        sendBanTx2((bancorNetSellDai.methods.quickConvert(["0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359", "0xee01b3ab5f6728adc137be101d99c678938e6e72", "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c", "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c", "0xc0829421c1d260bd3cb3e0f06cfe2d52db2ce315"], bancorSellAmt, ethAmount)), "0");

      }
      else if (sellRatesSorted[0].key == "kyber") {
        sendTx2((kyberProxy.methods.trade(daiAddr, kyberSellAmt, ethAddr, sender, "1000000000000000000000000", kybMinSellRate, "0x0000000000000000000000000000000000000000")), "0");

      }
      else if (sellRatesSorted[0].key == "radarRelay") {
        let rrOrder = await rrOrdBook.asks[0].signedOrder;
        let makerAddress = await rrOrder.makerAddress;
        let takerAddress = await rrOrder.takerAddress;
        let feeRecipientAddress = await rrOrder.feeRecipientAddress;
        let senderAddress = await rrOrder.senderAddress;
        let makerAssetAmount = await rrOrder.makerAssetAmount;
        let takerAssetAmount = await rrOrder.takerAssetAmount;
        let makerFee = await rrOrder.makerFee;
        let takerFee = await rrOrder.takerFee;
        let expirationTimeSeconds = await rrOrder.expirationTimeSeconds;
        let salt = await rrOrder.salt;
        let makerAssetData = await rrOrder.makerAssetData;
        let takerAssetData = await rrOrder.takerAssetData;
        let signature = await rrOrder.signature;

        sendTx2((zeroEx.methods.fillOrder([makerAddress,takerAddress,feeRecipientAddress,senderAddress,makerAssetAmount,takerAssetAmount,makerFee,takerFee,expirationTimeSeconds,salt,makerAssetData,takerAssetData], rrSellAmt, signature)), "0"); //wallet

      }
      else if (sellRatesSorted[0].key == "uniswap") {
        sendTx2((uniSwap.methods.tokenToEthSwapInput(uniswapSellAmt, ethAmount, "1739591241")), "0"); //token to eth swap input //wallet

      }
      else if (sellRatesSorted[0].key == "oasis") {
        sendTx2((oasisContract.methods.sellAllAmount(daiAddr, oasisSellAmt, wEthAddr, ethAmount)), "0"); //token to eth swap input //wallet

      }
      else {
        console.log("some error");
      }
    }
    else if (buyRatesSorted[0].key == "radarRelay") {

      let rrOrder = await rrOrdBook.bids[0].signedOrder;
      let makerAddress = await rrOrder.makerAddress;
      let takerAddress = await rrOrder.takerAddress;
      let feeRecipientAddress = await rrOrder.feeRecipientAddress;
      let senderAddress = await rrOrder.senderAddress;
      let makerAssetAmount = await rrOrder.makerAssetAmount;
      let takerAssetAmount = await rrOrder.takerAssetAmount;
      let makerFee = await rrOrder.makerFee;
      let takerFee = await rrOrder.takerFee;
      let expirationTimeSeconds = await rrOrder.expirationTimeSeconds;
      let salt = await rrOrder.salt;
      let makerAssetData = await rrOrder.makerAssetData;
      let takerAssetData = await rrOrder.takerAssetData;
      let signature = await rrOrder.signature;
      sendTx1((zeroEx.methods.fillOrder([makerAddress,takerAddress,feeRecipientAddress,senderAddress,makerAssetAmount,takerAssetAmount,makerFee,takerFee,expirationTimeSeconds,salt,makerAssetData,takerAssetData], ethAmount, signature)), "0"); //wallet

      if (sellRatesSorted[0].key == "bancor") {
        sendBanTx2((bancorNetSellDai.methods.quickConvert(["0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359", "0xee01b3ab5f6728adc137be101d99c678938e6e72", "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c", "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c", "0xc0829421c1d260bd3cb3e0f06cfe2d52db2ce315"], bancorSellAmt, ethAmount)), "0");

      }
      else if (sellRatesSorted[0].key == "kyber") {
        sendTx2((kyberProxy.methods.trade(daiAddr, kyberSellAmt, ethAddr, sender, "1000000000000000000000000", kybMinSellRate, "0x0000000000000000000000000000000000000000")), "0");

      }
      else if (sellRatesSorted[0].key == "radarRelay") {
        let rrOrder = await rrOrdBook.asks[0].signedOrder;
        let makerAddress = await rrOrder.makerAddress;
        let takerAddress = await rrOrder.takerAddress;
        let feeRecipientAddress = await rrOrder.feeRecipientAddress;
        let senderAddress = await rrOrder.senderAddress;
        let makerAssetAmount = await rrOrder.makerAssetAmount;
        let takerAssetAmount = await rrOrder.takerAssetAmount;
        let makerFee = await rrOrder.makerFee;
        let takerFee = await rrOrder.takerFee;
        let expirationTimeSeconds = await rrOrder.expirationTimeSeconds;
        let salt = await rrOrder.salt;
        let makerAssetData = await rrOrder.makerAssetData;
        let takerAssetData = await rrOrder.takerAssetData;
        let signature = await rrOrder.signature;

        sendTx2((zeroEx.methods.fillOrder([makerAddress,takerAddress,feeRecipientAddress,senderAddress,makerAssetAmount,takerAssetAmount,makerFee,takerFee,expirationTimeSeconds,salt,makerAssetData,takerAssetData], rrSellAmt, signature)), "0"); //wallet

      }
      else if (sellRatesSorted[0].key == "uniswap") {
        sendTx2((uniSwap.methods.tokenToEthSwapInput(uniswapSellAmt, ethAmount, "1739591241")), "0"); //token to eth swap input //wallet

      }
      else if (sellRatesSorted[0].key == "oasis") {
        sendTx2((oasisContract.methods.sellAllAmount(daiAddr, oasisSellAmt, wEthAddr, ethAmount)), "0"); //token to eth swap input //wallet

      }
      else {
        console.log("some error");
      }
    }
    else if (buyRatesSorted[0].key == "uniswap") {
      sendTx1((uniSwap.methods.ethToTokenSwapInput(oasisMinBuyRet, "1739591241")), ethAmount); //wallet

      if (sellRatesSorted[0].key == "bancor") {
        sendBanTx2((bancorNetSellDai.methods.quickConvert(["0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359", "0xee01b3ab5f6728adc137be101d99c678938e6e72", "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c", "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c", "0xc0829421c1d260bd3cb3e0f06cfe2d52db2ce315"], bancorSellAmt, ethAmount)), "0");

      }
      else if (sellRatesSorted[0].key == "kyber") {
        sendTx2((kyberProxy.methods.trade(daiAddr, kyberSellAmt, ethAddr, sender, "1000000000000000000000000", kybMinSellRate, "0x0000000000000000000000000000000000000000")), "0");

      }
      else if (sellRatesSorted[0].key == "radarRelay") {
        let rrOrder = await rrOrdBook.asks[0].signedOrder;
        let makerAddress = await rrOrder.makerAddress;
        let takerAddress = await rrOrder.takerAddress;
        let feeRecipientAddress = await rrOrder.feeRecipientAddress;
        let senderAddress = await rrOrder.senderAddress;
        let makerAssetAmount = await rrOrder.makerAssetAmount;
        let takerAssetAmount = await rrOrder.takerAssetAmount;
        let makerFee = await rrOrder.makerFee;
        let takerFee = await rrOrder.takerFee;
        let expirationTimeSeconds = await rrOrder.expirationTimeSeconds;
        let salt = await rrOrder.salt;
        let makerAssetData = await rrOrder.makerAssetData;
        let takerAssetData = await rrOrder.takerAssetData;
        let signature = await rrOrder.signature;

        sendTx2((zeroEx.methods.fillOrder([makerAddress,takerAddress,feeRecipientAddress,senderAddress,makerAssetAmount,takerAssetAmount,makerFee,takerFee,expirationTimeSeconds,salt,makerAssetData,takerAssetData], rrSellAmt, signature)), "0"); //wallet

      }
      else if (sellRatesSorted[0].key == "uniswap") {
        sendTx2((uniSwap.methods.tokenToEthSwapInput(uniswapSellAmt, ethAmount, "1739591241")), "0"); //token to eth swap input //wallet

      }
      else if (sellRatesSorted[0].key == "oasis") {
        sendTx2((oasisContract.methods.sellAllAmount(daiAddr, oasisSellAmt, wEthAddr, ethAmount)), "0"); //token to eth swap input //wallet

      }
      else {
        console.log("some error");
      }
    }
    else if (buyRatesSorted[0].key == "oasis") {
      sendTx1((oasisContract.methods.sellAllAmount(wEthAddr, ethAmount, daiAddr, oasisMinBuyRet)), "0"); //wallet

      if (sellRatesSorted[0].key == "bancor") {
        sendBanTx2((bancorNetSellDai.methods.quickConvert(["0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359", "0xee01b3ab5f6728adc137be101d99c678938e6e72", "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c", "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c", "0xc0829421c1d260bd3cb3e0f06cfe2d52db2ce315"], bancorSellAmt, ethAmount)), "0");

      }
      else if (sellRatesSorted[0].key == "kyber") {
        sendTx2((kyberProxy.methods.trade(daiAddr, kyberSellAmt, ethAddr, sender, "1000000000000000000000000", kybMinSellRate, "0x0000000000000000000000000000000000000000")), "0");

      }
      else if (sellRatesSorted[0].key == "radarRelay") {
        let rrOrder = await rrOrdBook.asks[0].signedOrder;
        let makerAddress = await rrOrder.makerAddress;
        let takerAddress = await rrOrder.takerAddress;
        let feeRecipientAddress = await rrOrder.feeRecipientAddress;
        let senderAddress = await rrOrder.senderAddress;
        let makerAssetAmount = await rrOrder.makerAssetAmount;
        let takerAssetAmount = await rrOrder.takerAssetAmount;
        let makerFee = await rrOrder.makerFee;
        let takerFee = await rrOrder.takerFee;
        let expirationTimeSeconds = await rrOrder.expirationTimeSeconds;
        let salt = await rrOrder.salt;
        let makerAssetData = await rrOrder.makerAssetData;
        let takerAssetData = await rrOrder.takerAssetData;
        let signature = await rrOrder.signature;

        sendTx2((zeroEx.methods.fillOrder([makerAddress,takerAddress,feeRecipientAddress,senderAddress,makerAssetAmount,takerAssetAmount,makerFee,takerFee,expirationTimeSeconds,salt,makerAssetData,takerAssetData], rrSellAmt, signature)), "0"); //wallet

      }
      else if (sellRatesSorted[0].key == "uniswap") {
        sendTx2((uniSwap.methods.tokenToEthSwapInput(uniswapSellAmt, ethAmount, "1739591241")), "0"); //token to eth swap input //wallet

      }
      else if (sellRatesSorted[0].key == "oasis") {
        sendTx2((oasisContract.methods.sellAllAmount(daiAddr, oasisSellAmt, wEthAddr, ethAmount)), "0"); //token to eth swap input //wallet

      }
      else {
        console.log("some error");
      }
    }
    else {
      console.log("some error");
    }
  }
  else if (buy == "yes") {

    console.log("buying dai")

    if (buyRatesSorted[0].key == "bancor") {
      sendBanTx1((bancorNetBuyDai.methods.quickConvert(["0xc0829421c1d260bd3cb3e0f06cfe2d52db2ce315", "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c", "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c", "0xee01b3ab5f6728adc137be101d99c678938e6e72", "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"], ethAmount, banMinBuyRet)), ethAmount);
    }
    else if (buyRatesSorted[0].key == "kyber") {
      sendTx1((kyberProxy.methods.trade(ethAddr, ethAmount, daiAddr, sender, "1000000000000000000000000", kybMinBuyRate, "0x0000000000000000000000000000000000000000")), ethAmount); //wallet
    }
    else if (buyRatesSorted[0].key == "radarRelay") {
      let rrOrder = await rrOrdBook.bids[0].signedOrder;
      let makerAddress = await rrOrder.makerAddress;
      let takerAddress = await rrOrder.takerAddress;
      let feeRecipientAddress = await rrOrder.feeRecipientAddress;
      let senderAddress = await rrOrder.senderAddress;
      let makerAssetAmount = await rrOrder.makerAssetAmount;
      let takerAssetAmount = await rrOrder.takerAssetAmount;
      let makerFee = await rrOrder.makerFee;
      let takerFee = await rrOrder.takerFee;
      let expirationTimeSeconds = await rrOrder.expirationTimeSeconds;
      let salt = await rrOrder.salt;
      let makerAssetData = await rrOrder.makerAssetData;
      let takerAssetData = await rrOrder.takerAssetData;
      let signature = await rrOrder.signature;
      sendTx1((zeroEx.methods.fillOrder([makerAddress,takerAddress,feeRecipientAddress,senderAddress,makerAssetAmount,takerAssetAmount,makerFee,takerFee,expirationTimeSeconds,salt,makerAssetData,takerAssetData], ethAmount, signature)), "0"); //wallet
    }
    else if (buyRatesSorted[0].key == "uniswap") {
      sendTx1((uniSwap.methods.ethToTokenSwapInput(oasisMinBuyRet, "1739591241")), ethAmount); //wallet
    }
    else if (buyRatesSorted[0].key  == "oasis") {
      sendTx1((oasisContract.methods.sellAllAmount(wEthAddr, ethAmount, daiAddr, oasisMinBuyRet)), "0"); //wallet
    }
    else {
      console.log("trade error fix manually")
    }
  }
  else if (sell == "yes") {

    console.log("selling dai")

    if (sellRatesSorted[0].key == "bancor") {
      sendBanTx1((bancorNetSellDai.methods.quickConvert(["0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359", "0xee01b3ab5f6728adc137be101d99c678938e6e72", "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c", "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c", "0xc0829421c1d260bd3cb3e0f06cfe2d52db2ce315"], bancorSellAmt, ethAmount)), "0");

    }
    else if (sellRatesSorted[0].key == "kyber") {
      sendTx1((kyberProxy.methods.trade(daiAddr, kyberSellAmt, ethAddr, sender, "1000000000000000000000000", kybMinSellRate, "0x0000000000000000000000000000000000000000")), "0");

    }
    else if (sellRatesSorted[0].key == "radarRelay") {
      let rrOrder = await rrOrdBook.asks[0].signedOrder;
      let makerAddress = await rrOrder.makerAddress;
      let takerAddress = await rrOrder.takerAddress;
      let feeRecipientAddress = await rrOrder.feeRecipientAddress;
      let senderAddress = await rrOrder.senderAddress;
      let makerAssetAmount = await rrOrder.makerAssetAmount;
      let takerAssetAmount = await rrOrder.takerAssetAmount;
      let makerFee = await rrOrder.makerFee;
      let takerFee = await rrOrder.takerFee;
      let expirationTimeSeconds = await rrOrder.expirationTimeSeconds;
      let salt = await rrOrder.salt;
      let makerAssetData = await rrOrder.makerAssetData;
      let takerAssetData = await rrOrder.takerAssetData;
      let signature = await rrOrder.signature;

      sendTx1((zeroEx.methods.fillOrder([makerAddress,takerAddress,feeRecipientAddress,senderAddress,makerAssetAmount,takerAssetAmount,makerFee,takerFee,expirationTimeSeconds,salt,makerAssetData,takerAssetData], rrSellAmt, signature)), "0"); //wallet

    }
    else if (sellRatesSorted[0].key == "uniswap") {
      sendTx1((uniSwap.methods.tokenToEthSwapInput(uniswapSellAmt, ethAmount, "1739591241")), "0"); //token to eth swap input //wallet

    }
    else if (sellRatesSorted[0].key == "oasis") {
      sendTx1((oasisContract.methods.sellAllAmount(daiAddr, oasisSellAmt, wEthAddr, ethAmount)), "0"); //token to eth swap input //wallet

    }
    else {
      console.log("some error");
    }
  }
  else {
    console.log("Can't Arb!")
  };

};

async function sendBanTx1(txObject, sendVal) {
  const txTo = txObject._parent.options.address;

  let gasLimit;
  try {
    gasLimit = await txObject.estimateGas();
  }
  catch (e) {
    gasLimit = web3.utils.toHex(500 * 1000);
  }

  if(txTo !== null) {
    gasLimit = web3.utils.toHex(500 * 1000);
  }

  let gasPrice = await(bancorGas.methods.gasPrice().call());

  //console.log(gasLimit);
  const txData = txObject.encodeABI();
  const txFrom = account.address;
  const txKey = account.privateKey;

  const tx = {
    from : txFrom,
    to : txTo,
    nonce : (nonce),
    data : txData,
    value : sendVal,
    gas : gasLimit,
    gasPrice
  };


  const signedTx = await web3.eth.accounts.signTransaction(tx, txKey);
  // don't wait for confirmation
  signedTxs.push(signedTx.rawTransaction)
  web3.eth.sendSignedTransaction(signedTx.rawTransaction);
}

async function sendBanTx2(txObject, sendVal) {
  const txTo = txObject._parent.options.address;

  let gasLimit;
  try {
    gasLimit = await txObject.estimateGas();
  }
  catch (e) {
    gasLimit = web3.utils.toHex(500 * 1000);
  }

  if(txTo !== null) {
    gasLimit = web3.utils.toHex(500 * 1000);
  }

  let gasPrice = await(bancorGas.methods.gasPrice().call());

  //console.log(gasLimit);
  const txData = txObject.encodeABI();
  const txFrom = account.address;
  const txKey = account.privateKey;

  const tx = {
    from : txFrom,
    to : txTo,
    nonce : (nonce+1),
    data : txData,
    value : sendVal,
    gas : gasLimit,
    gasPrice
  };


  const signedTx = await web3.eth.accounts.signTransaction(tx, txKey);
  // don't wait for confirmation
  signedTxs.push(signedTx.rawTransaction)
  web3.eth.sendSignedTransaction(signedTx.rawTransaction);
}

async function sendTx1(txObject, sendVal) {
  const txTo = txObject._parent.options.address;

  let gasLimit;
  try {
    gasLimit = await txObject.estimateGas();
  }
  catch (e) {
    gasLimit = web3.utils.toHex(500 * 1000);
  }

  if(txTo !== null) {
    gasLimit = web3.utils.toHex(500 * 1000);
  }

  let gasReq = await fetch('https://ethgasstation.info/json/ethgasAPI.json');
  let gasInfo = await gasReq.json();

  let gasPrice;
  try {
    gasPrice = await (((gasInfo.fast)+12)*(10 ** 8));
  }
  catch (e) {
    gasPrice = web3.utils.toHex(BigNumber((100)*(10 ** 8)))
  };

  //console.log(gasLimit);
  const txData = txObject.encodeABI();
  const txFrom = account.address;
  const txKey = account.privateKey;

  const tx = {
    from : txFrom,
    to : txTo,
    nonce : (nonce),
    data : txData,
    value : sendVal,
    gas : gasLimit,
    gasPrice
  };


  const signedTx = await web3.eth.accounts.signTransaction(tx, txKey);
  // don't wait for confirmation
  signedTxs.push(signedTx.rawTransaction)
  web3.eth.sendSignedTransaction(signedTx.rawTransaction);
}

async function sendTx2(txObject, sendVal) {
  const txTo = txObject._parent.options.address;

  let gasLimit;
  try {
    gasLimit = await txObject.estimateGas();
  }
  catch (e) {
    gasLimit = web3.utils.toHex(500 * 1000);
  }

  if(txTo !== null) {
    gasLimit = web3.utils.toHex(500 * 1000);
  }

  let gasPrice;
  try {
    gasPrice = await (((gasInfo.fast)+12)*(10 ** 8));
  }
  catch (e) {
    gasPrice = web3.utils.toHex(BigNumber((100)*(10 ** 8)))
  };

  //console.log(gasLimit);
  const txData = txObject.encodeABI();
  const txFrom = account.address;
  const txKey = account.privateKey;

  const tx = {
    from : txFrom,
    to : txTo,
    nonce : (nonce+1),
    data : txData,
    value : sendVal,
    gas : gasLimit,
    gasPrice
  };


  const signedTx = await web3.eth.accounts.signTransaction(tx, txKey);
  // don't wait for confirmation
  signedTxs.push(signedTx.rawTransaction)
  web3.eth.sendSignedTransaction(signedTx.rawTransaction);
}

setInterval(async function main() {
    nonce = await web3.eth.getTransactionCount(sender);
    //console.log("nonce",nonce);

    await checkWallets();
}, 50*1000);
