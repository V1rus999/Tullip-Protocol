const { LENDING_RESERVE_LAYOUT, RPC_URL } = require("./config");
const BigNumber = require("bignumber.js");
const axios = require("axios");
const WAD = 10 ** 18;

const getAccountInfo = async (_address) => {
  try {
    const data = JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "getAccountInfo",
      params: [
        `${_address}`,
        {
          encoding: "jsonParsed",
        },
      ],
    });

    const config = {
      method: "post",
      url: RPC_URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    let result = await axios(config);
    return result.data.result;
  } catch (error) {
    console.log(error);
  }
};

const getCoinsUsdValue = async (_tokenId) => {
  try {
    if (_tokenId == undefined || _tokenId == null) throw "Missing Parameters";

    let BASE_URL = "https://api.coingecko.com/api/v3";
    let URL_PARAMS = `/simple/price?ids=${_tokenId}&vs_currencies=usd`;

    const config = {
      method: "GET",
      url: `${BASE_URL}${URL_PARAMS}`,
    };

    let result = await axios(config);
    return result.data[_tokenId].usd;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const retrieveLendingReserveInfo = async (_reserve) => {
  const { account, token_id, name } = _reserve;

  const coinUsdValue = await getCoinsUsdValue(token_id);

  const reserveAccountInfo = await getAccountInfo(account);
  if (!reserveAccountInfo) {
    console.error("Could not find reserve info for ", name);
    return;
  }
  const reserveData = reserveAccountInfo.value.data[0];

  const { liquidity } = LENDING_RESERVE_LAYOUT.decode(
    Buffer.from(reserveData, "base64")
  );

  const borrowedAmount = new BigNumber(liquidity.borrowedAmount);
  const platformAmountWads = new BigNumber(liquidity.platformAmountWads);
  const availableAmount = new BigNumber(liquidity.availableAmount);

  const bnTokenPrice = new BigNumber(coinUsdValue);

  const totalSupply = availableAmount
    .plus(borrowedAmount.div(WAD))
    .minus(platformAmountWads.div(WAD));

  const totalBorrowed = borrowedAmount.div(WAD);

  const tvl = totalSupply
    .div(10 ** liquidity.mintDecimals)
    .multipliedBy(bnTokenPrice);

  return {
    name: name,
    tvl: tvl.dp(3).toNumber(),
    tokenUsdPrice: bnTokenPrice.dp(3).toNumber(),
    totalSupply: totalSupply
      .div(10 ** liquidity.mintDecimals)
      .dp(3)
      .toNumber(),
    totalBorrowed: totalBorrowed
      .div(10 ** liquidity.mintDecimals)
      .dp(10)
      .toNumber(),
    util: Math.floor((totalBorrowed / totalSupply) * 100),
  };
};

module.exports = { retrieveLendingReserveInfo };
