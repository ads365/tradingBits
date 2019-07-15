## bitmexHedge.JS
This **DOES NOT** have a command line inpult, you must input the pair manually (limitation due to re-running every interval). Where it asks (at the bottom) for "token: and "base" - remember to enter it as a string that is with either "" or '' around the symbol. Base should be ETH or BTC. This runs every 10 mins.
```
setInterval (async function initHedge() {
  let token = 'ZIL'; //'TOKEN 3 Letter Ticker';
  let base = 'ETH' //'BASE Ticker';

  await main(token, base);
},600*1000 );
```
This will hedge your total token and base ballance on binance (inluding transactions in order) and will hedge your token value in the base currency (converting token to base - the assumption is that the token follows base fairly closely). This is not a prefect hedge as there are no insturments for tokens. There is also some slippage especially when base is ETH but it should be accurate upto 1-2 ETH. Also this assumes 0 leverage. To account for leverage more work is needed on the bot.

## simpleDaiArb.js
The first verison of a arb bot accross DEX's - its pretty bloated but it was functional. (Kyber, Uniswap, RadarRelay Bancor and Oasis). Have to import your own wallet and infura link. 
