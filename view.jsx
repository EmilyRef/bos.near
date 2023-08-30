console.log("meta-pool.near", Near.view("meta-pool.near", "get_owner_id", {})); // => metapool.sputnik-dao.near

console.log(
  "meta-v2.pool.testnet",
  Near.view("meta-v2.pool.testnet", "get_owner_id", {})
); // => undefined
