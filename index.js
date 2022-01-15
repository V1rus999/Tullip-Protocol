const { request } = require("undici");
const debugLog = false;
const v1baseUrl = "https://api.solfarm.io/";
const v2BaseUrl = "https://v2api.solfarm.io/";

async function main() {
  const coinPriceRe = await doReq(
    v1baseUrl,
    "price?coins=RAY,STEP,MEDIA,COPE,MER,SOL,SRM,MAPS,FIDA,KIN,OXY,ETH,USDC,USDT,ROPE,ALEPH,TULIP,SNY,BOP,SLRS,SAMO,LIKE,BTC,SABER,MNGO,FTT,ATLAS,POLIS,GRAPE,ORCA,LARIX,MNDE,LIQ,SYP,WOOF,FRKT,weUNI,weSUSHI,whETH,STARS,weAXS,weSHIB,weDYDX,weSAND,weMANA,CAVE,GENE,CWAR,SONAR,DFL,APT,SHILL,MIMO,wbWBNB,REAL,CRWNY,RUN,TTT,XTAG,BOKU,MBS,PRISM,CHICKS,MEAN"
  );

  const solPrice = coinPriceRe["SOL"];
  console.log(solPrice);

  const price = await doReq(v2BaseUrl, "price", "POST", {
    names: [
      "SYP-SOL",
      "RAY-SOL",
      "FRKT-SOL",
      "whETH-SOL",
      "MIMO-SOL",
      "SOL-USDC-RAY",
      "SOL-USDT-RAY",
      "SOL-USDC",
      "SOL-USDT",
    ],
  });

  //   console.log(JSON.stringify(price, null, 2));

  const pairs = await doReq(
    v1baseUrl,
    "pairs?pair=WOOF-RAY,SYP-USDC,SYP-RAY,SYP-SOL,LIQ-USDC,LIQ-RAY,MNDE-mSOL,mSOL-USDC,mSOL-USDT,mSOL-RAY,ETH-mSOL,BTC-mSOL,LARIX-RAY,LARIX-USDC,GRAPE-USDC,ATLAS-USDC,POLIS-USDC,ATLAS-RAY,POLIS-RAY,TULIP-USDC,RAY-USDT,RAY-USDC,RAY-SRM,RAY-SOL,RAY-ETH,MEDIA-USDC,SAMO-RAY,COPE-USDC,MER-USDC,ALEPH-USDC,LIKE-USDC,BOP-RAY,ROPE-USDC,SNY-USDC,SLRS-USDC,MNGO-USDC,RAY-SRM-DUAL,STEP-USDC,KIN-RAY,FIDA-RAY,OXY-RAY,MAPS-RAY,FRKT-SOL,weWETH-SOL,weWETH-USDC,weUNI-USDC,weSUSHI-USDC,SRM-USDC,STARS-USDC,weAXS-USDC,weDYDX-USDC,weSHIB-USDC,weSAND-USDC,weMANA-USDC,CAVE-USDC,GENE-USDC,GENE-RAY,SONAR-USDC,CWAR-USDC,DFL-USDC,APT-USDC,SHILL-USDC,wbWBNB-USDC,wePEOPLE-USDC,MIMO-SOL,SOL-USDC-RAY,SOL-USDT-RAY,SOL-USDC,SOL-USDT,REAL-USDC,CRWNY-USDC,CRWNY-RAY,RUN-USDC,TTT-USDC,BOKU-USDC,XTAG-USDC,MBS-USDC,PRISM-USDC,CHICKS-USDC,MEAN-RAY"
  );

  const solPairs = [];
  for (const key in pairs) {
    if (key.includes("SOL") && !key.includes("MSOL")) {
      solPairs.push(pairs[key]);
    }
  }

  console.log(JSON.stringify(solPairs, null, 2));

  const pools = await doReq(
    v1baseUrl,
    "orca/pools?pool=ORCA-USDC,ORCA-SOL,SOL-USDC,USDC-USDT,SOL-USDT,ETH-USDC,ETH-SOL,mSOL-SOL,SOCN-USDC,SOCN-SOL,WHETH-USDC,WHETH-SOL,ATLAS-USDC,POLIS-USDC,SAMO-USDC,SHDW-USDC,SHDW-SOL"
  );

  const solPools = [];
  for (const key in pools) {
    if (key.includes("SOL")) {
      solPools.push(pools[key]);
    }
  }
}

async function doReq(baseUrl, url, verb = "GET", bodyToSend = null) {
  console.log("======================================================");
  console.log("REQUEST ===> ", url);

  const { statusCode, body } = await request(baseUrl, {
    path: url,
    method: verb.toUpperCase(),
    body: JSON.stringify(bodyToSend),
    headers: {
      "content-type": "application/json",
    },
  });

  console.log(`REQUEST <=== [${statusCode}] `, url);
  console.log("\n");

  if (statusCode == 200) {
    const jsonBody = await body.json();
    if (debugLog) {
      console.log(JSON.stringify(jsonBody, null, 2));
    }
    return jsonBody;
  } else {
    const message = { status: statusCode, message: await body.text() };
    throw Error(JSON.stringify(message, null, 2));
  }
}
main();
