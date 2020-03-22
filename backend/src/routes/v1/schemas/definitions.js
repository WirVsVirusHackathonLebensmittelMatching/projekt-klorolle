const { shop } = require('./shops');
const { good } = require('./goods');
const { order } = require('./orders');
const { customer } = require('./customers');
// const { shopOwner } = require('./shopOwners');

module.exports = {
  Shop: shop,
  Good: good,
  Order: order,
  Customer: customer,
  // ShopOwner: shopOwner,
};
