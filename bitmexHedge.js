const fetch = require('node-fetch');


process.on('unhandledRejection', console.error.bind(console))

//bitmex
var request = require('request');
var crypto = require('crypto');
const rp = require('request-promise');

var apiKey = "apiKey";
var apiSecret = "apiSecret";

//====================================================================================================================================
//change calc stuff
const binance = require('binance-api-node').default;

const APIKEY = 'APIKEY';
const APISECRET = 'APISECRET';

const binanceClient = binance({apiKey: APIKEY, apiSecret: APISECRET, useServerTime: true});

//short eth position request
var verbSEth = 'POST',
  pathSEth = '/api/v1/position/isolate',
  expiresSEth = new Date().getTime() + (60 * 1000), // 1 min in the future
  dataSEth = {"symbol":"ETHUSD"};

// Pre-compute the postBody so we can be sure that we're using *exactly* the same body in the request
// and in the signature. If you don't do this, you might get differently-sorted keys and blow the signature.
var postBodySEth = JSON.stringify(dataSEth);

var signatureSEth = crypto.createHmac('sha256', apiSecret).update(verbSEth + pathSEth + expiresSEth + postBodySEth).digest('hex');

var headersSEth = {
  'content-type' : 'application/json',
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'api-expires': expiresSEth,
  'api-key': apiKey,
  'api-signature': signatureSEth
};

//bitmex short request
const requestOptionsSEth = {
  headers: headersSEth,
  url:'https://testnet.bitmex.com'+pathSEth,
  method: verbSEth,
  body: postBodySEth
};

//btc short position bitmex
var verbSBtc = 'POST',
  pathSBtc = '/api/v1/position/isolate',
  expiresSBtc = new Date().getTime() + (60 * 1000), // 1 min in the future
  dataSBtc = {"symbol":"XBTUSD"};

// Pre-compute the postBody so we can be sure that we're using *exactly* the same body in the request
// and in the signature. If you don't do this, you might get differently-sorted keys and blow the signature.
var postBodySBtc = JSON.stringify(dataSBtc);

var signatureSBtc = crypto.createHmac('sha256', apiSecret).update(verbSBtc + pathSBtc + expiresSBtc + postBodySBtc).digest('hex');

var headersSBtc = {
  'content-type' : 'application/json',
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'api-expires': expiresSBtc,
  'api-key': apiKey,
  'api-signature': signatureSBtc
};

//bitmex short request
const requestOptionsSBtc = {
  headers: headersSBtc,
  url:'https://testnet.bitmex.com'+pathSBtc,
  method: verbSBtc,
  body: postBodySBtc
};

//long eth position bitmex
var verbLEth = 'POST',
  pathLEth = '/api/v1/position/isolate',
  expiresLEth = new Date().getTime() + (60 * 1000), // 1 min in the future
  dataLEth = {"symbol":"ETHH19"};

// Pre-compute the postBody so we can be sure that we're using *exactly* the same body in the request
// and in the signature. If you don't do this, you might get differently-sorted keys and blow the signature.
var postBodyLEth = JSON.stringify(dataLEth);

var signatureLEth = crypto.createHmac('sha256', apiSecret).update(verbLEth + pathLEth + expiresLEth + postBodyLEth).digest('hex');

var headersLEth = {
  'content-type' : 'application/json',
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'api-expires': expiresLEth,
  'api-key': apiKey,
  'api-signature': signatureLEth
};

//bitmex long request
const requestOptionsLEth = {
  headers: headersLEth,
  url:'https://testnet.bitmex.com'+pathLEth,
  method: verbLEth,
  body: postBodyLEth
};

//long BTC position bitmex
var verbLBtc = 'POST',
  pathLBtc = '/api/v1/position/isolate',
  expiresLBtc = new Date().getTime() + (60 * 1000), // 1 min in the future
  dataLBtc = {"symbol":"XBTH19"};

// Pre-compute the postBody so we can be sure that we're using *exactly* the same body in the request
// and in the signature. If you don't do this, you might get differently-sorted keys and blow the signature.
var postBodyLBtc = JSON.stringify(dataLBtc);

var signatureLBtc = crypto.createHmac('sha256', apiSecret).update(verbLBtc + pathLBtc + expiresLBtc + postBodyLBtc).digest('hex');

var headersLBtc = {
  'content-type' : 'application/json',
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'api-expires': expiresLBtc,
  'api-key': apiKey,
  'api-signature': signatureLBtc
};

//bitmex long request
const requestOptionsLBtc = {
  headers: headersLBtc,
  url:'https://testnet.bitmex.com'+pathLBtc,
  method: verbLBtc,
  body: postBodyLBtc
};

var verbB = 'GET',
  pathB = '/api/v1/user/margin',
  expiresB = new Date().getTime() + (60 * 1000), // 1 min in the future
  dataB = {currency:"XBt"};

// Pre-compute the postBody so we can be sure that we're using *exactly* the same body in the request
// and in the signature. If you don't do this, you might get differently-sorted keys and blow the signature.
var getBodyB = JSON.stringify(dataB);

var signatureB = crypto.createHmac('sha256', apiSecret).update(verbB + pathB + expiresB + getBodyB).digest('hex');

var headersB = {
  'content-type' : 'application/json',
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'api-expires': expiresB,
  'api-key': apiKey,
  'api-signature': signatureB
};

//bitmex balance request
const requestOptionsB = {
  headers: headersB,
  url:'https://testnet.bitmex.com'+pathB,
  method: verbB,
  body: getBodyB
};

rp(requestOptionsLEth).then(response => {
}).catch((err) => {
  console.log('API call error:', err.message);
});

rp(requestOptionsSEth).then(response => {
}).catch((err) => {
  console.log('API call error:', err.message);
});

rp(requestOptionsLBtc).then(response => {
}).catch((err) => {
  console.log('API call error:', err.message);
});

rp(requestOptionsSBtc).then(response => {
}).catch((err) => {
  console.log('API call error:', err.message);
});

rp(requestOptionsB).then(response => {
}).catch((err) => {
  console.log('API call error:', err.message);
});

async function main(token, base) {


  let binancePrices = await new binanceClient.prices();
  let ethBtcP = await binancePrices.ETHBTC;
  let pair = token+base;
  let tokenBaseP = await binancePrices[pair];


  // bitmex balances
  requestInfoLEth = await rp(requestOptionsLEth);
  requestInfoSEth = await rp(requestOptionsSEth);
  requestInfoLBtc = await rp(requestOptionsLBtc);
  requestInfoSBtc = await rp(requestOptionsSBtc);
  requestInfoB = await rp(requestOptionsB);
  let infoLEth = await JSON.parse(requestInfoLEth);
  let infoSEth = await JSON.parse(requestInfoSEth);
  let infoLBtc = await JSON.parse(requestInfoLBtc);
  let infoSBtc = await JSON.parse(requestInfoSBtc);
  let infoB = await JSON.parse(requestInfoB);

  let longBMPos;
  let shortBMPos;
  let balanceBM;

  try {
    if (base == 'ETH') {
      //long exposure on bitmex
      longBMPos = await ((infoLEth.lastValue)/100000000)/ethBtcP;
      //short exposure on bitmex
      shortBMPos = await (((infoSEth.lastValue)/100000000)*(-1))/ethBtcP;
      //blance of bitmex in eth
      balanceBM = await ((infoB.availableMargin)/100000000)/ethBtcP;
    }
    else if (base == 'BTC') {
      //long exposure on bitmex
      longBMPos = await ((infoLBtc.lastValue)/100000000);
      //short exposure on bitmex
      shortBMPos = await (((infoSBtc.lastValue)/100000000)*(-1));
      //blance of bitmex in eth
      balanceBM = await ((infoB.availableMargin)/100000000);
    }
    else {
      console.log("error in your base currency - on base not supported")
    }
  } catch (e) {
    console.log("error in initialising balances on bitmex");
  };

  // binance balances
  let account = await new binanceClient.accountInfo();
  let balances = await account.balances;
  let tokenCur = token;
  let baseCur = base;
  //token stuff
  var tokenInfo = balances.filter(function(item) {
    return item.asset == tokenCur;
  });
  let freeTokBal = parseFloat(tokenInfo[0].free);
  let lockedTokBal = parseFloat(tokenInfo[0].locked);
  let tokenBal = freeTokBal+lockedTokBal;
  let tokenBalInBase = tokenBal*tokenBaseP;
  //base stuff
  var baseInfo = balances.filter(function(item) {
    return item.asset == baseCur;
  });
  let freeBaseBal = parseFloat(baseInfo[0].free);
  let lockedBaseBal = parseFloat(baseInfo[0].locked);
  let baseBal = freeBaseBal+lockedBaseBal;

  let totalLong = parseFloat(baseBal + tokenBalInBase + longBMPos + balanceBM);
  let totalShort = parseFloat(shortBMPos);

  console.log("total", base, "long", totalLong);
  console.log("total", base, "short", totalShort);

  let exposure;
  try {
    if (base == 'ETH') {
      if ((totalLong-totalShort) < 1 && (totalLong-totalShort) > -1) {
        if (balanceBM > 1) {
          let amount = (Math.floor(balanceBM));
          console.log("liquidate", amount);
          liquidate(amount);
        }
        else {
          exposure = ((totalLong-totalShort).toFixed(2))*ethBtcP;
        }
      }
      else {
        exposure = ((totalLong-totalShort).toFixed(2))*ethBtcP;
      }
    }
    else if (base == 'BTC') {
      exposure = (totalLong-totalShort).toFixed(2);
    }
    else {
      console.log("error in your base currency - on base not supported")
    }
  }
  catch (e) {
    console.log("error in your base currency - on base not supported")
  };

  console.log("exposure to", base, "converted to BTC", exposure);

  hedge(exposure, base);
}

async function hedge(change, base) {

  let ethRequest = await fetch('https://api.pro.coinbase.com/products/ETH-USD/ticker');
  let ethInfo = await ethRequest.json();
  var ethRate = await (ethInfo.price);
  let btcRequest = await fetch('https://api.pro.coinbase.com/products/BTC-USD/ticker');
  let btcInfo = await btcRequest.json();
  var btcRate = await (btcInfo.price);
  //change ot short P and longP dependisng on base -- try
  let shortP
  let longP
  try {
    if (base == 'ETH') {
      shortP = await (ethRate/1000000);
      longP = await (ethRate/btcRate);
    }
    else if (base == 'BTC') {
      shortP = await (1/btcRate);
      longP = await (1/btcRate);
    }
    else {
      console.log("error in setting contract price");
    }
  } catch (e) {
    cconsole.log("error in setting contract price");
  }

  let shortAsset;
  let longAsset;
  try {
    if (base == 'ETH') {
      longAsset = 'ETHH19';
      shortAsset = 'ETHUSD';
    }
    else if (base == 'BTC') {
      longAsset = 'XBTH19';
      shortAsset = 'XBTUSD';
    }
    else {
      console.log("error in initialising contracts");
    }
  } catch (e) {
    console.log("error in initialising contracts");
  };
  //change is in btc have to make it universal
  if (change > 0.03) {
    //positive change in eth exposure so we need to shift half the change to short to keep things equal
    //eth rate?
    let reqContracts = await ((change/shortP)*0.5);
    let reqBTC = change;

    var verb = 'GET',
      path = '/api/v1/user/margin',
      expires = new Date().getTime() + (60 * 1000), // 1 min in the future
      data = {currency:"XBt"};

    // Pre-compute the postBody so we can be sure that we're using *exactly* the same body in the request
    // and in the signature. If you don't do this, you might get differently-sorted keys and blow the signature.
    var getBody = JSON.stringify(data);

    var signature = crypto.createHmac('sha256', apiSecret).update(verb + path + expires + getBody).digest('hex');

    var headers = {
      'content-type' : 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'api-expires': expires,
      'api-key': apiKey,
      'api-signature': signature
    };

    const requestOptions = {
      headers: headers,
      url:'https://testnet.bitmex.com'+path,
      method: verb,
      body: getBody
    };

    request(requestOptions, async function(error, response, body) {
      if (error) { console.log(error); }
      let info = await JSON.parse(body);
      let balance = await ((info.availableMargin)/100000000);

      console.log("balance", balance);
      console.log("req btc", reqBTC);
      console.log("req cont", reqContracts);
      console.log("short p", shortP);

      if (balance > reqBTC) {
        //enter into short position on increase
        var shortVerb = 'POST',
          shortPath = '/api/v1/order',
          shortExpires = new Date().getTime() + (60 * 1000), // 1 min in the future
          shortData = {symbol:shortAsset, side:"Sell", orderQty:(Math.floor(reqContracts)), ordType:"Market"};

        // Pre-compute the postBody so we can be sure that we're using *exactly* the same body in the request
        // and in the signature. If you don't do this, you might get differently-sorted keys and blow the signature.
        var shortPostBody = JSON.stringify(shortData);

        var shortSignature = crypto.createHmac('sha256', apiSecret).update(shortVerb + shortPath + shortExpires + shortPostBody).digest('hex');

        var shortHeaders = {
          'content-type' : 'application/json',
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'api-expires': shortExpires,
          'api-key': apiKey,
          'api-signature': shortSignature
        };

        const requestOptions = {
          headers: shortHeaders,
          url:'https://testnet.bitmex.com'+shortPath,
          method: shortVerb,
          body: shortPostBody
        };

        request(requestOptions, function(error, response, body) {
          if (error) { console.log(error); }
        });

        console.log("short change on bitmex", change/2);
      }
      else {
        //liquidate some of your long position
        var liqLongVerb = 'POST',
          liqLongPath = '/api/v1/order',
          liqLongExpires = new Date().getTime() + (60 * 1000), // 1 min in the future
          liqLongData = {symbol:longAsset, side:"Sell", orderQty:Math.ceil(((reqBTC-balance)/longP)), ordType:"Market"};

        // Pre-compute the postBody so we can be sure that we're using *exactly* the same body in the request
        // and in the signature. If you don't do this, you might get differently-sorted keys and blow the signature.
        var liqLongPostBody = JSON.stringify(liqLongData);

        var liqLongSignature = crypto.createHmac('sha256', apiSecret).update(liqLongVerb + liqLongPath + liqLongExpires + liqLongPostBody).digest('hex');

        var liqLongHeaders = {
          'content-type' : 'application/json',
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'api-expires': liqLongExpires,
          'api-key': apiKey,
          'api-signature': liqLongSignature
        };

        const requestOptions = {
          headers: liqLongHeaders,
          url:'https://testnet.bitmex.com'+liqLongPath,
          method: liqLongVerb,
          body: liqLongPostBody
        };

        request(requestOptions, async function(error, response, body) {
          if (error) { console.log(error); }
          let info = await JSON.parse(body);
          let status = await info.ordStatus;

          if (status = "Filled") {
            var shortVerb = 'POST',
              shortPath = '/api/v1/order',
              shortExpires = new Date().getTime() + (60 * 1000), // 1 min in the future
              shortData = {symbol:"ETHUSD",side:"Sell",orderQty:(Math.floor(reqContracts)),ordType:"Market"};

            // Pre-compute the postBody so we can be sure that we're using *exactly* the same body in the request
            // and in the signature. If you don't do this, you might get differently-sorted keys and blow the signature.
            var shortPostBody = JSON.stringify(shortData);

            var shortSignature = crypto.createHmac('sha256', apiSecret).update(shortVerb + shortPath + shortExpires + shortPostBody).digest('hex');

            var shortHeaders = {
              'content-type' : 'application/json',
              'Accept': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              'api-expires': shortExpires,
              'api-key': apiKey,
              'api-signature': shortSignature
            };

            const requestOptions = {
              headers: shortHeaders,
              url:'https://testnet.bitmex.com'+shortPath,
              method: shortVerb,
              body: shortPostBody
            };

            request(requestOptions, function(error, response, body) {
              if (error) { console.log(error); }
              //console.log(body);
            });
          }
        });
        console.log("short change on bitmex", change/2);
      }
    });
  }
  else if (change < -0.03) {
    //negative change in eth exposure so we need to shift half the change to long to keep things equal

    let absValueChange = (change * ("-1"));
    let reqContracts = await ((absValueChange/shortP)*0.5);
    let reqBTC = absValueChange;

    var verb = 'POST',
      path = '/api/v1/order',
      expires = new Date().getTime() + (60 * 1000), // 1 min in the future
      data = {symbol:shortAsset,side:"Buy",orderQty:(Math.floor(reqContracts)),ordType:"Market"};

    // Pre-compute the postBody so we can be sure that we're using *exactly* the same body in the request
    // and in the signature. If you don't do this, you might get differently-sorted keys and blow the signature.
    var postBody = JSON.stringify(data);

    var signature = crypto.createHmac('sha256', apiSecret).update(verb + path + expires + postBody).digest('hex');

    var headers = {
      'content-type' : 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'api-expires': expires,
      'api-key': apiKey,
      'api-signature': signature
    };

    const requestOptions = {
      headers: headers,
      url:'https://testnet.bitmex.com'+path,
      method: verb,
      body: postBody
    };

    request(requestOptions, async function(error, response, body) {
      if (error) { console.log(error); }
      let info = await JSON.parse(body);
      let status = await info.ordStatus;

      if (status = "Filled") {
        var getVerb = 'GET',
          getPath = '/api/v1/user/margin',
          getExpires = new Date().getTime() + (60 * 1000), // 1 min in the future
          getData = {currency:"XBt"};

        //Pre-compute the postBody so we can be sure that we're using *exactly* the same body in the request
        //and in the signature. If you don't do this, you might get differently-sorted keys and blow the signature.
        var getPostBody = JSON.stringify(getData);

        var getSignature = crypto.createHmac('sha256', apiSecret).update(getVerb + getPath + getExpires + getPostBody).digest('hex');

        var getHeaders = {
          'content-type' : 'application/json',
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'api-expires': getExpires,
          'api-key': apiKey,
          'api-signature': getSignature
        };

        const requestOptions = {
          headers: getHeaders,
          url:'https://testnet.bitmex.com'+getPath,
          method: getVerb,
          body: getPostBody
        };

        request(requestOptions, async function(error, response, body) {
          if (error) { console.log(error); }
          let info = await JSON.parse(body);
          let balance = await ((info.availableMargin)/100000000);
          let toLong = await Math.floor((balance/longP));

          if (toLong >= 1) {

            var longPostVerb = 'POST',
              longPostPath = '/api/v1/order',
              longPostExpires = new Date().getTime() + (60 * 1000), // 1 min in the future
              longPostData = {symbol:longAsset,side:"Buy",orderQty:toLong,ordType:"Market"};

            // Pre-compute the postBody so we can be sure that we're using *exactly* the same body in the request
            // and in the signature. If you don't do this, you might get differently-sorted keys and blow the signature.
            var longPostPostBody = JSON.stringify(longPostData);

            var longPostSignature = crypto.createHmac('sha256', apiSecret).update(longPostVerb + longPostPath + longPostExpires + longPostPostBody).digest('hex');

            var longPostHeaders = {
              'content-type' : 'application/json',
              'Accept': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              'api-expires': longPostExpires,
              'api-key': apiKey,
              'api-signature': longPostSignature
            };

            const requestOptions = {
              headers: longPostHeaders,
              url:'https://testnet.bitmex.com'+longPostPath,
              method: longPostVerb,
              body: longPostPostBody
            };

            request(requestOptions, function(error, response, body) {
              if (error) { console.log(error); }
              //console.log(body);
            });
          }
        });
      }
    });
  }
  else {
    console.log("do nothing", change);
  }
}

async function liquidate(amount) {

  let longAsset = 'ETHH19';

  let contQty = amount;

  var longPostVerb = 'POST',
    longPostPath = '/api/v1/order',
    longPostExpires = new Date().getTime() + (60 * 1000), // 1 min in the future
    longPostData = {symbol:longAsset,side:"Buy",orderQty:contQty,ordType:"Market"};

  // Pre-compute the postBody so we can be sure that we're using *exactly* the same body in the request
  // and in the signature. If you don't do this, you might get differently-sorted keys and blow the signature.
  var longPostPostBody = JSON.stringify(longPostData);

  var longPostSignature = crypto.createHmac('sha256', apiSecret).update(longPostVerb + longPostPath + longPostExpires + longPostPostBody).digest('hex');

  var longPostHeaders = {
    'content-type' : 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'api-expires': longPostExpires,
    'api-key': apiKey,
    'api-signature': longPostSignature
  };

  const requestOptions = {
    headers: longPostHeaders,
    url:'https://testnet.bitmex.com'+longPostPath,
    method: longPostVerb,
    body: longPostPostBody
  };

  request(requestOptions, function(error, response, body) {
    if (error) { console.log(error); }
    //console.log(body);
  });

}

setInterval (async function initHedge() {
  let token = 'ZIL'; //'TOKEN 3 Letter Ticker';
  let base = 'ETH' //'BASE Ticker';

  await main(token, base);
},600*1000 );

//600*1000 refers to every 10 minutes (600 * milisecond unit(1000)) - change the seconds to alter time.


//main('TOK', 'BAS')
//TOK == token ticker on binance
//BAS = base ticker on binance
