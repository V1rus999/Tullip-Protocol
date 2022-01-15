const { retrieveLendingReserveInfo } = require("./pool_data");
const { LENDING_RESERVES } = require("./solfarm_lending_reserves");

/*
Tracks the lending reserve info for all currencies from https://gist.github.com/therealssj/934c9b1d23a97f0d099b74abbdc31526
Use 'node lending' to run 
*/

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
