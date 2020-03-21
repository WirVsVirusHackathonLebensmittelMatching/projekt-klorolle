const { v4: uuid } = require('uuid');
const db = require('../../../db');
const schemas = require('../schemas/shopGoods');

module.exports = (fastify, opts, done) => {
  fastify.setNotFoundHandler((request, reply) => {
    reply
      .code(404)
      .type('application/json')
      .send({ message: 'Requested item does not exist' });
  });

  // find all shopGoods
  fastify.get('/', { schema: schemas.findAll },
    async ({ params }) => {
      const shops = db.get('shopGoods').find({ shop: params.shop }).value() || [];
      return shops;
    });

  // create shopGoods
  fastify.post('/', { schema: schemas.createOne },
    async ({ body, params }) => {
      const shopGood = body;
      shopGood.shop = params.shop; // set shop id
      shopGood.id = uuid(); // generate uuid

      db.get('shopGoods').push(shopGood).write();
      return shopGood;
    });

  done();
};

module.exports.autoPrefix = '/shops/:shop/goods';
