const {
  publicKey,
  u64,
  u8,
  u128,
  bool,
  struct,
} = require("@project-serum/borsh");

const LENDING_RESERVE_LAYOUT = struct([
  u8("version"),
  struct([u64("slot"), bool("stale")], "lastUpdateSlot"),
  publicKey("lendingMarket"),
  publicKey("borrowAuthorizer"),
  struct(
    [
      publicKey("mintPubKey"),
      u8("mintDecimals"),
      publicKey("supplyPubKey"),
      publicKey("feeReceiver"),
      publicKey("oraclePubKey"),
      u64("availableAmount"),
      u128("borrowedAmount"),
      u128("cumulativeBorrowRate"),
      u128("marketPrice"),
      u128("platformAmountWads"),
      u8("platformFees"),
    ],
    "liquidity"
  ),
]);

const RPC_URL = "https://solana-api.projectserum.com";

module.exports = {
  LENDING_RESERVE_LAYOUT,
  RPC_URL,
};
