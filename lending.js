const { retrieveLendingReserveInfo } = require("./pool_data");
const { LENDING_RESERVES } = require("./solfarm_lending_reserves");

async function main() {
  console.log("Starting lending call");
  const reserveInfo = [];
  for (const reserve of LENDING_RESERVES) {
    if (reserve.visible === true) {
      console.log(reserve.name);
      const info = await retrieveLendingReserveInfo(reserve);
      reserveInfo.push(info);
    }
  }

  console.log(reserveInfo);
}

module.exports = 

main();
