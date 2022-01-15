const { retrieveLendingReserveInfo } = require("./pool_data");
const { LENDING_RESERVES } = require("./solfarm_lending_reserves");

async function main() {
  const reserveInfo = [];
  for (const reserve of LENDING_RESERVES) {
    const info = await retrieveLendingReserveInfo(reserve);
    reserveInfo.push(info);
  }

  console.log(reserveInfo);
}

main();
